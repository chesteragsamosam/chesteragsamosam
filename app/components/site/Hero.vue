<script setup lang="ts">
import { profile } from '~/data/profile'

const config = useRuntimeConfig()
const portrait = `${config.app.baseURL}${profile.photo.src}`

const ticker = [
  'Vue.js',
  'TypeScript',
  'Svelte',
  'Laravel',
  'Tailwind CSS',
  'AI-augmented craft',
  'Digital wallet UI',
  'Mentorship',
]
</script>

<template>
  <section id="top" class="relative min-h-svh pt-16">
    <div class="section-wrap grid min-h-[calc(100svh-4rem)] grid-cols-1 items-end gap-12 pb-10 pt-16 lg:grid-cols-12 lg:gap-8 lg:pb-16">
      <div class="lg:col-span-8">
        <p class="kicker">{{ profile.location }}</p>
        <h1 class="display mt-6 text-[clamp(3.4rem,12vw,9.5rem)]">
          Chester
          <span class="block italic text-ink/90">Agsamosam</span>
        </h1>
        <p class="mt-8 max-w-xl text-lg leading-relaxed text-mute sm:text-xl">
          {{ profile.headline }}
        </p>
        <div class="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            class="inline-flex cursor-pointer items-center gap-3 bg-acid px-6 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-acid-ink transition hover:brightness-95"
          >
            Start a conversation
            <span aria-hidden="true">↗</span>
          </a>
          <a
            href="#journey"
            class="inline-flex cursor-pointer items-center gap-3 border border-line-strong px-6 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink transition hover:border-acid hover:text-acid"
          >
            Career journey
          </a>
          <NuxtLink
            to="/cover-letter"
            class="inline-flex cursor-pointer items-center gap-3 border border-line-strong px-6 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink transition hover:border-acid hover:text-acid"
          >
            Cover letter
          </NuxtLink>
        </div>
      </div>

      <aside class="flex flex-col justify-between gap-10 border-t border-line pt-8 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
        <div class="relative mx-auto aspect-square w-full max-w-[280px]">
          <div class="absolute -inset-2 border border-line" aria-hidden="true" />
          <div class="absolute inset-0 border border-acid/40" aria-hidden="true" />
          <img
            :src="portrait"
            :alt="profile.photo.alt"
            width="640"
            height="800"
            class="relative h-full w-full object-cover object-[center_18%] grayscale aspect-square"
          >
          <div class="absolute -right-2 -top-2 h-3 w-3 bg-acid" />
          <div class="absolute -bottom-2 -left-2 h-3 w-3 bg-ink" />
        </div>
        <dl class="space-y-4 font-mono text-[11px] uppercase tracking-[0.2em]">
          <div
            v-for="(item, index) in profile.snapshot"
            :key="item.label"
            class="flex justify-between gap-4"
            :class="index < profile.snapshot.length - 1 ? 'border-b border-line pb-3' : ''"
          >
            <dt class="shrink-0 text-dim">{{ item.label }}</dt>
            <dd class="text-right">{{ item.value }}</dd>
          </div>
        </dl>
      </aside>
    </div>

    <div class="marquee-wrap overflow-hidden border-y border-line py-3">
      <div class="marquee-track flex w-max gap-10 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.28em] text-mute">
        <span v-for="(item, i) in [...ticker, ...ticker]" :key="i" class="flex items-center gap-10">
          {{ item }}
          <span class="text-acid">/</span>
        </span>
      </div>
    </div>
  </section>
</template>
