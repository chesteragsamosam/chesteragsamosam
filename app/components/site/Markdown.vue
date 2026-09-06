<script setup lang="ts">
import MarkdownIt from 'markdown-it'

const props = defineProps<{
  content: string
}>()

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
})

const rendered = computed(() => props.content ? md.render(props.content) : '')
</script>

<template>
  <div class="markdown-body" v-html="rendered"></div>
</template>

<style scoped>
/* Base styling for the markdown content to match the chat look */
.markdown-body {
  font-size: inherit;
  line-height: inherit;
  color: inherit;
}

:deep(.markdown-body p) {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
}

:deep(.markdown-body p:first-child) {
  margin-top: 0 !important;
}

:deep(.markdown-body p:last-child) {
  margin-bottom: 0 !important;
}

:deep(.markdown-body ul),
:deep(.markdown-body ol) {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
  padding-left: 1.25rem;
}

:deep(.markdown-body li) {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

:deep(.markdown-body pre) {
  background: rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 0.25rem;
  overflow-x: auto;
  margin: 0.25rem 0;
}

:deep(.markdown-body code) {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  background: rgba(0, 0, 0, 0.1);
  padding: 0.1rem 0.2rem;
  border-radius: 0.1rem;
}
</style>
