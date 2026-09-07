import { buildSystemPrompt } from './system-prompt'
import {
  CHAT_MODEL,
  MAX_CHAT_MESSAGES,
  MAX_MESSAGE_LENGTH,
  type ChatMessage,
} from './types'

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
    const content = (item as { content?: unknown }).content

    // Client should only be allowed to send conversation messages.
    if (
      (role !== 'user' && role !== 'assistant') ||
      typeof content !== 'string'
    ) {
      throw new Error(
        'Each message must have role user or assistant and string content.',
      )
    }

    const trimmed = content.trim()

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
 * System prompt is ALWAYS the first message.
 */
function buildChatMessages(messages: ChatMessage[]): ChatMessage[] {
  return [
    {
      role: 'system',
      content: buildSystemPrompt(),
    },
    ...messages,
  ]
}

async function createOpenRouterRequest(options: {
  apiKey: string
  siteUrl: string
  messages: ChatMessage[]
  stream?: boolean
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
      model: CHAT_MODEL,
      messages: messagesToSend,
      ...(options.stream ? { stream: true } : {}),
    }),
  })
}

export async function completeChat(options: {
  apiKey: string
  siteUrl: string
  messages: ChatMessage[]
}): Promise<string> {
  const response = await createOpenRouterRequest({
    ...options,
    stream: false,
  })

  const payload = await response.json().catch(() => null) as {
    error?: {
      message?: string
    }
    choices?: Array<{
      message?: {
        content?: string
      }
    }>
  } | null

  if (!response.ok) {
    const detail =
      payload?.error?.message ||
      response.statusText

    throw new Error(
      detail || 'OpenRouter request failed.',
    )
  }

  const reply =
    payload?.choices?.[0]?.message?.content?.trim()

  if (!reply) {
    throw new Error('The model returned an empty reply.')
  }

  return reply
}

export async function streamChat(options: {
  apiKey: string
  siteUrl: string
  messages: ChatMessage[]
}): Promise<ReadableStream> {
  const response = await createOpenRouterRequest({
    ...options,
    stream: true,
  })

  if (!response.ok) {
    const errorText = await response.text()

    throw new Error(
      `OpenRouter stream request failed: ${response.status} ${errorText}`,
    )
  }

  if (!response.body) {
    throw new Error('OpenRouter returned an empty response body.')
  }

  return response.body
}