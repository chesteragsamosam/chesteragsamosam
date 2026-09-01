<script setup lang="ts">
import { profile } from '~/data/profile'
</script>

<template>
  <section id="about" class="relative py-24 sm:py-32">
    <div class="section-wrap">
      <SiteReveal>
        <div class="flex items-end justify-between gap-6">
          <p class="kicker">01 — About</p>
          <span class="font-mono text-[11px] uppercase tracking-[0.22em] text-dim">Profile</span>
        </div>
        <div class="rule mt-6" />
      </SiteReveal>

      <div class="mt-12 grid gap-12 lg:grid-cols-12">
        <SiteReveal class="lg:col-span-5" delay="80ms">
          <h2 class="display text-5xl sm:text-6xl lg:text-7xl">
            Frontend with
            <span class="italic">full-stack</span>
            range.
          </h2>
        </SiteReveal>
        <div class="space-y-6 text-lg leading-relaxed text-mute lg:col-span-7">
          <SiteReveal v-for="(para, i) in profile.about" :key="i" :delay="`${140 + i * 80}ms`">
            <p>{{ para }}</p>
          </SiteReveal>
          <SiteReveal delay="280ms">
            <p class="border-l-2 border-acid pl-5 text-ink">
              {{ profile.summary }}
            </p>
          </SiteReveal>
        </div>
      </div>
    </div>
  </section>
</template>
