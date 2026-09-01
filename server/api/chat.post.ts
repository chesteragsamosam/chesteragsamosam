import { completeChat, parseChatMessages } from '../../shared/chat/complete'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const apiKey = String(config.openRouterApiKey || '')

  if (!apiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'OpenRouter is not configured on this server.',
    })
  }

  let messages
  try {
    messages = parseChatMessages(await readBody(event))
  }
  catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error instanceof Error ? error.message : 'Invalid chat request.',
    })
  }

  try {
    const reply = await completeChat({
      apiKey,
      siteUrl: String(config.public.siteUrl),
      messages,
    })
    return { reply }
  }
  catch (error) {
    throw createError({
      statusCode: 502,
      statusMessage: error instanceof Error ? error.message : 'Chat request failed.',
    })
  }
})
