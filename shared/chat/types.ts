export type ChatRole = 'user' | 'assistant' | 'system'

export type ChatMessage = {
  role: ChatRole
  content: string
}

// completeChat tries these in order, so one retired or failing free model
// does not take the chat down.
export const CHAT_MODELS = [
  'google/gemma-4-31b-it:free',
  'google/gemma-4-26b-a4b-it:free',
  'inclusionai/ling-3.2-flash:free',
]
export const MAX_CHAT_MESSAGES = 20
export const MAX_MESSAGE_LENGTH = 16000
