export type ChatRole = 'user' | 'assistant' | 'system'

export type ChatMessage = {
  role: ChatRole
  content: string
}

// completeChat tries these in order, so one retired or failing free model
// does not take the chat down.
export const CHAT_MODELS = [
  'recursive/flint-v1.0:free',
  'particle-ai/particle-1:free',
]
export const MAX_CHAT_MESSAGES = 20
export const MAX_MESSAGE_LENGTH = 16000
