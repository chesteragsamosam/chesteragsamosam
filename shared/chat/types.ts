export type ChatRole = 'user' | 'assistant' | 'system'

export type ChatMessage = {
  role: ChatRole
  content: string
}

// OpenRouter tries these in order, so one free model being retired does not
// take the chat down. OpenRouter accepts at most 3 fallbacks here.
export const CHAT_MODELS = [
  'google/gemma-4-31b-it:free',
  'google/gemma-4-26b-a4b-it:free',
  'inclusionai/ling-3.2-flash:free',
]
export const MAX_CHAT_MESSAGES = 20
export const MAX_MESSAGE_LENGTH = 16000
