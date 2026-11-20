import { buildSystemPrompt } from './system-prompt'
import {
  CHAT_MODELS,
  MAX_CHAT_MESSAGES,
  MAX_MESSAGE_LENGTH,
  type ChatMessage,
} from './types'

function normalizeMessageContent(content: unknown): string | undefined {
  if (typeof content === 'string') {
    return content
  }

  if (Array.isArray(content)) {
    const normalized = [...content]
    if (normalized.length && normalized[normalized.length - 1] === '') {
      normalized.pop()
    }

    const joined = normalized.join('')
    return joined
  }

  return undefined
}

export function ensureSystemPrompt(messages: ChatMessage[]): ChatMessage[] {
  const normalizedMessages = messages
    .filter(Boolean)
    .map((message) => {
      const content = normalizeMessageContent(message.content)
      if (typeof content !== 'string') {
        return null
      }
      return {
        ...message,
        content,
      }
    })
    .filter((message): message is ChatMessage => Boolean(message) && message.content.trim().length > 0)

  const systemMessage = normalizedMessages.find(message => message.role === 'system')
  const remainingMessages = normalizedMessages.filter(message => message.role !== 'system')

  return [
    ...(systemMessage ? [systemMessage] : [{ role: 'system', content: buildSystemPrompt() }]),
    ...remainingMessages,
  ]
}

const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions'

export function parseChatMessages(input: unknown): ChatMessage[] {
  if (!input || typeof input !== 'object' || !('messages' in input)) {
    throw new Error('Request must include a messages array.')
  }

  const raw = (input as { messages: unknown }).messages

  if (!Array.isArray(raw) || raw.length === 0) {
    throw new Error('Request must include at least one message.')
  }

  const messages: ChatMessage[] = []

  for (const item of raw.slice(-MAX_CHAT_MESSAGES)) {
    if (!item || typeof item !== 'object') {
      continue
    }

    const role = (item as { role?: unknown }).role
    const normalizedContent = normalizeMessageContent((item as { content?: unknown }).content)

    // Client should only be allowed to send conversation messages.
    if (
      (role !== 'system' && role !== 'user' && role !== 'assistant') ||
      typeof normalizedContent !== 'string'
    ) {
      // throw new Error(
      //   'Each message must have role system, user, or assistant and string content.',
      // )
    }

    const trimmed = normalizedContent.trim()

    // Ignore empty messages.
    if (!trimmed) {
      continue
    }

    if (trimmed.length > MAX_MESSAGE_LENGTH) {
      throw new Error(
        `Each message must be at most ${MAX_MESSAGE_LENGTH} characters.`,
      )
    }

    messages.push({
      role,
      content: trimmed,
    })
  }

  if (!messages.length) {
    throw new Error('Request must include at least one non-empty message.')
  }

  return messages
}

/**
 * Builds the final message array sent to the LLM.
 *
 * System prompt is ALWAYS the first message, but is only added once.
 */
function buildChatMessages(messages: ChatMessage[]): ChatMessage[] {
  return ensureSystemPrompt(messages)
}

async function createOpenRouterRequest(options: {
  apiKey: string
  siteUrl: string
  messages: ChatMessage[]
  model: string
}): Promise<Response> {
  const messagesToSend = buildChatMessages(options.messages)

  return fetch(OPENROUTER_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${options.apiKey}`,
      'Content-Type': 'application/json',
      Referer: options.siteUrl,
      'X-Title': 'Chester Agsamosam',
    },
    body: JSON.stringify({
      model: options.model,
      messages: messagesToSend,
    }),
  })
}

type OpenRouterPayload = {
  error?: {
    message?: string
    metadata?: {
      raw?: unknown
      provider_name?: string
    }
  }
  choices?: Array<{
    message?: {
      content?: string
    }
  }>
} | null

/** OpenRouter's top-level message is often just "Provider returned error";
 * the useful part is in error.metadata.raw. */
function describeOpenRouterError(model: string, status: number, payload: OpenRouterPayload): string {
  const error = payload?.error
  const raw = error?.metadata?.raw
  const rawText = typeof raw === 'string' ? raw : raw ? JSON.stringify(raw) : ''
  const provider = error?.metadata?.provider_name
  return [
    `${model} (${status}${provider ? `, ${provider}` : ''})`,
    error?.message || 'OpenRouter request failed.',
    rawText.slice(0, 300),
  ].filter(Boolean).join(': ')
}

async function completeWithModel(options: {
  apiKey: string
  siteUrl: string
  messages: ChatMessage[]
  model: string
}): Promise<string> {
  const response = await createOpenRouterRequest(options)
  const payload = await response.json().catch(() => null) as OpenRouterPayload

  if (!response.ok || payload?.error) {
    throw new Error(describeOpenRouterError(options.model, response.status, payload))
  }

  const reply = payload?.choices?.[0]?.message?.content?.trim()
  if (!reply) {
    throw new Error(`${options.model}: the model returned an empty reply.`)
  }
  return reply
}

/** Tries each model in CHAT_MODELS in order, so one retired or failing free
 * model does not take the chat down. */
export async function completeChat(options: {
  apiKey: string
  siteUrl: string
  messages: ChatMessage[]
}): Promise<string> {
  const failures: string[] = []
  for (const model of CHAT_MODELS) {
    try {
      return await completeWithModel({ ...options, model })
    }
    catch (error) {
      const detail = error instanceof Error ? error.message : String(error)
      console.error('OpenRouter model failed:', detail)
      failures.push(detail)
    }
  }
  throw new Error(`All chat models failed. ${failures.join(' | ')}`)
}
