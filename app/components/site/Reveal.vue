<script setup lang="ts">
const props = defineProps<{ delay?: string }>()
const el = ref<HTMLElement | null>(null)

const { stop } = useIntersectionObserver(
  el,
  ([entry]) => {
    if (entry?.isIntersecting) {
      el.value?.classList.add('is-in')
      stop()
    }
  },
  { threshold: 0.12 },
)
</script>

<template>
  <div ref="el" class="reveal" :style="{ animationDelay: props.delay || '0ms' }">
    <slot />
  </div>
</template>
