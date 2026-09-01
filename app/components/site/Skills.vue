<script setup lang="ts">
import { profile } from '~/data/profile'
</script>

<template>
  <section id="skills" class="relative py-24 sm:py-32">
    <div class="section-wrap">
      <SiteReveal>
        <div class="flex items-end justify-between gap-6">
          <p class="kicker">03 — Capabilities</p>
          <span class="font-mono text-[11px] uppercase tracking-[0.22em] text-dim">Stack</span>
        </div>
        <div class="rule mt-6" />
        <h2 class="display mt-12 text-5xl sm:text-6xl">
          Tools I actually
          <span class="italic">ship with.</span>
        </h2>
      </SiteReveal>

      <div class="mt-16 grid gap-px bg-line sm:grid-cols-2">
        <SiteReveal
          v-for="(group, i) in profile.skills"
          :key="group.group"
          :delay="`${i * 70}ms`"
          class="bg-void p-8"
        >
          <p class="font-mono text-[11px] uppercase tracking-[0.24em] text-acid">{{ group.group }}</p>
          <ul class="mt-6 flex flex-wrap gap-2">
            <li
              v-for="item in group.items"
              :key="item"
              class="border border-line px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink transition hover:border-acid hover:text-acid"
            >
              {{ item }}
            </li>
          </ul>
        </SiteReveal>
      </div>

      <div class="mt-16 grid gap-10 border-t border-line pt-12 lg:grid-cols-12">
        <SiteReveal class="lg:col-span-5">
          <h3 class="display text-4xl">Education</h3>
          <ul class="mt-8 space-y-6">
            <li v-for="ed in profile.education" :key="ed.school">
              <p class="font-semibold tracking-tight">{{ ed.school }}</p>
              <p class="mt-1 text-sm text-mute">{{ ed.degree }}</p>
            </li>
          </ul>
        </SiteReveal>
        <SiteReveal class="lg:col-span-7" delay="90ms">
          <h3 class="display text-4xl">Languages</h3>
          <div class="mt-8 grid gap-4 sm:grid-cols-2">
            <div
              v-for="lang in profile.languages"
              :key="lang.name"
              class="border border-line p-5"
            >
              <p class="font-mono text-[11px] uppercase tracking-[0.22em] text-acid">{{ lang.name }}</p>
              <p class="mt-2 text-sm text-mute">{{ lang.level }}</p>
            </div>
          </div>
        </SiteReveal>
      </div>
    </div>
  </section>
</template>
