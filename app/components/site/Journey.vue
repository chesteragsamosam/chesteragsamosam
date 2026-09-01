<script setup lang="ts">
import { profile } from '~/data/profile'

const root = ref<HTMLElement | null>(null)
const scrollY = ref(0)

onMounted(() => {
  const onScroll = () => {
    scrollY.value = window.scrollY
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})

const line = computed(() => {
  if (!import.meta.client || !root.value) return 0
  const el = root.value
  const start = el.offsetTop - window.innerHeight * 0.4
  const end = el.offsetTop + el.offsetHeight - window.innerHeight * 0.45
  return Math.min(1, Math.max(0, (scrollY.value - start) / Math.max(end - start, 1)))
})
</script>

<template>
  <section id="journey" ref="root" class="relative py-24 sm:py-32">
    <div class="section-wrap">
      <SiteReveal>
        <div class="flex items-end justify-between gap-6">
          <p class="kicker">02 — Career journey</p>
          <span class="font-mono text-[11px] uppercase tracking-[0.22em] text-dim">2020 — Present</span>
        </div>
        <div class="rule mt-6" />
        <h2 class="display mt-12 max-w-3xl text-5xl sm:text-6xl">
          Enterprise platforms.
          <span class="italic">Edgy execution.</span>
        </h2>
      </SiteReveal>

      <div class="relative mt-20">
        <div class="absolute bottom-0 left-[11px] top-0 w-px bg-line sm:left-1/2 sm:-translate-x-px" aria-hidden="true" />
        <div
          class="absolute left-[11px] top-0 w-px origin-top bg-acid sm:left-1/2 sm:-translate-x-px"
          :style="{ height: `${line * 100}%` }"
          aria-hidden="true"
        />

        <article
          v-for="(company, index) in profile.companies"
          :key="company.id"
          class="relative grid gap-8 pb-20 pl-10 last:pb-0 sm:grid-cols-2 sm:gap-16 sm:pl-0"
        >
          <div :class="index % 2 === 0 ? 'sm:pr-10 sm:text-right' : 'sm:col-start-2 sm:pl-10'">
            <SiteReveal>
              <p class="font-mono text-[11px] uppercase tracking-[0.22em] text-acid">
                {{ company.tenure }}
              </p>
              <h3 class="display mt-3 text-4xl sm:text-5xl">{{ company.company }}</h3>
              <p class="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-dim">
                {{ company.span }}
              </p>
            </SiteReveal>
          </div>

          <div
            class="absolute left-0 top-2 h-6 w-6 border border-acid bg-void sm:left-1/2 sm:-translate-x-1/2"
            aria-hidden="true"
          />

          <div :class="index % 2 === 0 ? 'sm:pl-10' : 'sm:col-start-1 sm:row-start-1 sm:pr-10'">
            <SiteReveal :delay="`${80 + index * 60}ms`">
              <div
                v-for="role in company.roles"
                :key="role.title"
                class="mb-8 border border-line bg-panel/60 p-6 last:mb-0"
              >
                <p class="font-sans text-lg font-semibold tracking-tight">{{ role.title }}</p>
                <p class="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
                  {{ role.dates }}
                </p>
                <ul class="mt-5 space-y-3 text-sm leading-relaxed text-mute">
                  <li v-for="point in role.points" :key="point" class="flex gap-3">
                    <span class="mt-1.5 h-1.5 w-1.5 shrink-0 bg-acid" />
                    <span>{{ point }}</span>
                  </li>
                </ul>
              </div>
            </SiteReveal>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
