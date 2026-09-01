<script setup lang="ts">
import { profile } from '~/data/profile'

const config = useRuntimeConfig()
const portrait = `${config.app.baseURL}${profile.photo.src}`
const pageUrl = `${config.public.siteUrl}/cover-letter`
const today = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}).format(new Date())

useSeoMeta({
  title: `Cover Letter — ${profile.name}`,
  description: `Cover letter from ${profile.name}, ${profile.role}.`,
  ogTitle: `Cover Letter — ${profile.name}`,
  ogDescription: `Cover letter from ${profile.name}, ${profile.role}.`,
  ogType: 'website',
  ogUrl: pageUrl,
  robots: 'index, follow',
})

useHead({
  link: [{ rel: 'canonical', href: pageUrl }],
})
</script>

<template>
  <main id="main" class="relative pt-16">
    <div class="section-wrap py-16 sm:py-24">
      <p class="kicker">Cover letter</p>
      <div class="mt-6 flex flex-col gap-8 border-b border-line pb-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 class="display text-5xl sm:text-7xl">A note to hiring teams</h1>
          <p class="mt-4 max-w-xl text-mute">
            {{ profile.title }} · {{ profile.location }}
          </p>
        </div>
        <NuxtLink
          to="/"
          class="inline-flex w-fit cursor-pointer items-center gap-3 border border-line-strong px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink transition hover:border-acid hover:text-acid"
        >
          Back to profile
        </NuxtLink>
      </div>

      <article class="mt-12 grid gap-12 lg:grid-cols-12">
        <aside class="lg:col-span-4">
          <div class="relative max-w-[280px]">
            <div class="absolute -inset-2 border border-line" aria-hidden="true" />
            <div class="absolute inset-0 border border-acid/40" aria-hidden="true" />
            <img
              :src="portrait"
              :alt="profile.photo.alt"
              width="640"
              height="800"
              class="relative aspect-[4/5] w-full object-cover object-[center_18%] grayscale"
            >
          </div>
          <dl class="mt-8 space-y-4 font-mono text-[11px] uppercase tracking-[0.18em]">
            <div>
              <dt class="text-dim">Date</dt>
              <dd class="mt-1 text-ink">{{ today }}</dd>
            </div>
            <div>
              <dt class="text-dim">From</dt>
              <dd class="mt-1 text-ink">{{ profile.name }}</dd>
            </div>
            <div>
              <dt class="text-dim">Role</dt>
              <dd class="mt-1 text-ink">{{ profile.title }}</dd>
            </div>
          </dl>
        </aside>

        <div class="max-w-2xl lg:col-span-8">
          <p class="font-display text-3xl italic text-ink">{{ profile.coverLetter.greeting }}</p>
          <div class="mt-8 space-y-6 text-base leading-relaxed text-mute sm:text-lg">
            <p v-for="(para, i) in profile.coverLetter.paragraphs" :key="i">
              {{ para }}
            </p>
          </div>
          <p class="mt-10 font-display text-2xl italic">{{ profile.coverLetter.closing }}</p>
          <p class="mt-3 font-sans text-lg font-semibold tracking-tight">{{ profile.name }}</p>
          <p class="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-dim">
            {{ profile.role }}
          </p>
          <div class="mt-8 flex flex-wrap gap-4">
            <a
              :href="`mailto:${profile.contact.email}`"
              class="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-acid hover:underline"
            >
              {{ profile.contact.email }}
            </a>
            <a
              :href="profile.contact.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-acid hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </article>
    </div>
  </main>
</template>
