export type ChatRole = 'user' | 'assistant' | 'system'

export type ChatMessage = {
  role: ChatRole
  content: string
}

export const CHAT_MODEL = 'google/gemma-4-31b-it:free'
export const MAX_CHAT_MESSAGES = 20
export const MAX_MESSAGE_LENGTH = 16000
