<script setup lang="ts">
const route = useRoute()
const isHome = computed(() => route.path === '/' || route.path === '')

const sections = [
  { to: '/#about', label: 'About' },
  { to: '/#journey', label: 'Journey' },
  { to: '/#skills', label: 'Skills' },
  { to: '/cover-letter', label: 'Cover letter' },
  { to: '/#contact', label: 'Contact' },
]

const open = ref(false)
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 12
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

function closeMenu() {
  open.value = false
}

watch(() => route.fullPath, closeMenu)
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-30 transition-colors"
    :class="scrolled || open ? 'border-b border-line bg-void/80 backdrop-blur-md' : ''"
  >
    <div class="section-wrap flex h-16 items-center justify-between">
      <NuxtLink to="/" class="group flex items-center gap-3" @click="closeMenu">
        <span class="flex h-8 w-8 items-center justify-center border border-acid font-mono text-[11px] text-acid">
          CA
        </span>
        <span class="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-ink sm:block">
          Agsamosam
        </span>
      </NuxtLink>

      <nav class="hidden items-center gap-8 md:flex" aria-label="Primary">
        <NuxtLink
          v-for="item in sections"
          :key="item.to"
          :to="item.to"
          class="nav-link"
          :class="item.to === '/cover-letter' && !isHome ? 'text-acid' : ''"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <button
        class="flex h-10 w-10 cursor-pointer items-center justify-center border border-line-strong md:hidden"
        type="button"
        :aria-expanded="open"
        aria-label="Toggle menu"
        @click="open = !open"
      >
        <span class="font-mono text-[11px] text-acid">{{ open ? 'CLOSE' : 'MENU' }}</span>
      </button>
    </div>

    <div v-if="open" class="border-t border-line bg-void md:hidden">
      <nav class="section-wrap flex flex-col gap-4 py-6" aria-label="Mobile">
        <NuxtLink
          v-for="item in sections"
          :key="item.to"
          :to="item.to"
          class="nav-link py-2 text-left"
          :class="item.to === '/cover-letter' && !isHome ? 'text-acid' : ''"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
