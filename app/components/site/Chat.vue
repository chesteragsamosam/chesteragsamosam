<script setup lang="ts">
import { profile } from '~/data/profile'
import type { ChatMessage } from '#shared/chat/types'
import MarkdownRender from 'markstream-vue'
import 'markstream-vue/index.css'

const config = useRuntimeConfig()
const apiUrl = computed(() => String(config.public.chatApiUrl || ''))

const open = ref(false)
const pending = ref(false)
const error = ref('')
const draft = ref('')
const list = ref<HTMLElement | null>(null)

const messages = ref<ChatMessage[]>([
  { role: 'assistant', content: profile.chat.intro },
])

const canSend = computed(() => Boolean(draft.value.trim()) && !pending.value && Boolean(apiUrl.value))

function scrollToEnd() {
  nextTick(() => {
    const el = list.value
    if (el) el.scrollTop = el.scrollHeight
  })
}

watch(open, (value) => {
  if (value) scrollToEnd()
})

function useStarter(prompt: string) {
  draft.value = prompt
  void send()
}

async function send() {
  const content = draft.value.trim()
  if (!content || pending.value) return

  if (!apiUrl.value) {
    error.value = 'Chat is not connected on this static build yet. Set NUXT_PUBLIC_CHAT_API_URL to the Cloudflare Worker.'
    return
  }

  messages.value.push({ role: 'user', content })
  draft.value = ''
  error.value = ''
  pending.value = true
  scrollToEnd()

  try {
    const payload = await $fetch<{ reply: string }>(apiUrl.value, {
      method: 'POST',
      body: {
        messages: messages.value,
      },
    })
    messages.value.push({ role: 'assistant', content: payload.reply })
  }
  catch (err) {
    error.value = readError(err)
  }
  finally {
    pending.value = false
    scrollToEnd()
  }
}

function readError(err: unknown) {
  if (err && typeof err === 'object') {
    const data = 'data' in err ? (err as { data?: unknown }).data : undefined
    if (data && typeof data === 'object' && data !== null && 'statusMessage' in data) {
      const statusMessage = (data as { statusMessage?: unknown }).statusMessage
      if (typeof statusMessage === 'string' && statusMessage) return statusMessage
    }
    if ('statusMessage' in err) {
      const statusMessage = (err as { statusMessage?: unknown }).statusMessage
      if (typeof statusMessage === 'string' && statusMessage) return statusMessage
    }
    if ('message' in err) {
      const message = (err as { message?: unknown }).message
      if (typeof message === 'string' && message) return message
    }
  }
  return 'The digital twin could not reply. Try again in a moment.'
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault()
    void send()
  }
}
</script>

<template>
  <div class="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-end p-4 sm:p-6">
    <div class="pointer-events-auto flex w-full max-w-[22.5rem] flex-col items-end gap-3">
      <section
        v-if="open"
        class="flex max-h-[min(32rem,calc(100svh-7rem))] w-full flex-col border border-line bg-panel/95 shadow-[0_24px_80px_rgb(0_0_0_/_45%)] backdrop-blur-md"
        aria-label="Digital twin chat"
      >
        <header class="flex items-start justify-between gap-3 border-b border-line px-4 py-3">
          <div>
            <p class="kicker">Digital twin</p>
            <p class="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-mute">Ask Chester</p>
          </div>
          <button
            type="button"
            class="cursor-pointer border border-line-strong px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-mute transition hover:border-acid hover:text-acid"
            aria-label="Close chat"
            @click="open = false"
          >
            Close
          </button>
        </header>

        <div ref="list" class="min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-4">
          <div
            v-for="(message, index) in messages"
            :key="index"
            class="max-w-[95%] px-3 py-2 text-sm leading-normal"
            :class="message.role === 'user'
              ? 'ml-auto bg-acid text-acid-ink'
              : 'border border-line bg-void/70 text-ink'"
          >
            <MarkdownRender
              mode="chat"
              :content="message.content"
              :final="!pending || index < messages.length - 1"
              :fade="false"
              class="compact-markdown"
            />
          </div>

          <p v-if="pending" class="border border-line bg-void/70 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-dim">
            Thinking…
          </p>
        </div>

        <div class="border-t border-line px-4 py-3">
          <div v-if="messages.length === 1" class="mb-3 flex flex-wrap gap-2">
            <button
              v-for="starter in profile.chat.starters"
              :key="starter.label"
              type="button"
              class="cursor-pointer border border-line-strong px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-mute transition hover:border-acid hover:text-acid disabled:cursor-not-allowed disabled:opacity-50"
              :disabled="pending"
              @click="useStarter(starter.prompt)"
            >
              {{ starter.label }}
            </button>
          </div>
          <p v-if="error" class="mb-2 text-xs leading-relaxed text-acid">{{ error }}</p>
          <p v-if="!apiUrl" class="mb-2 text-xs leading-relaxed text-mute">
            Chat needs a Worker URL for the live site. Locally, run <span class="font-mono text-ink">nuxt dev</span>.
          </p>
          <div class="flex items-end gap-2">
            <textarea
              v-model="draft"
              rows="2"
              class="min-h-[2.75rem] w-full resize-none border border-line bg-void px-3 py-2 text-sm text-ink outline-none placeholder:text-dim focus:border-acid"
              placeholder="Ask about work, stack, or chess…"
              :disabled="pending"
              @keydown="onKeydown"
            />
            <button
              type="button"
              class="shrink-0 cursor-pointer bg-acid px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-acid-ink transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-40"
              :disabled="!canSend"
              @click="send"
            >
              Send
            </button>
          </div>
        </div>
      </section>

      <button
        type="button"
        class="flex h-12 cursor-pointer items-center gap-3 border border-acid bg-void px-4 font-mono text-[11px] uppercase tracking-[0.22em] text-acid shadow-[0_0_24px_rgb(77_184_255_/_25%)] transition hover:bg-acid hover:text-acid-ink"
        :aria-expanded="open"
        aria-controls="digital-twin-chat"
        :aria-label="open ? 'Hide digital twin chat' : 'Ask Chester'"
        @click="open = !open"
      >
        {{ open ? 'Hide twin' : 'Ask Chester' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Reset container line-height & spacing */
:deep(.markstream-vue),
:deep(.compact-markdown) {
  line-height: inherit;
  font-size: inherit;
  color: inherit;
}

/* Strip extra vertical margins from Markdown block elements */
:deep(.markstream-vue p),
:deep(.markstream-vue h1),
:deep(.markstream-vue h2),
:deep(.markstream-vue h3),
:deep(.markstream-vue ul),
:deep(.markstream-vue ol),
:deep(.markstream-vue pre) {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
}

/* Eliminate top/bottom gaps at the edges of the message box */
:deep(.markstream-vue > *:first-child) {
  margin-top: 0 !important;
}

:deep(.markstream-vue > *:last-child) {
  margin-bottom: 0 !important;
}

/* Tighten list items spacing */
:deep(.markstream-vue li) {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
</style>