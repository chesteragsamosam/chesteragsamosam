export type ChatRole = 'user' | 'assistant'

export type ChatMessage = {
  role: ChatRole
  content: string
}

export const CHAT_MODEL = 'inclusionai/ling-3.0-flash-fin:free'
export const MAX_CHAT_MESSAGES = 20
export const MAX_MESSAGE_LENGTH = 2000
