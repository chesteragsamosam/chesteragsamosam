<script setup lang="ts">
import { profile } from '#shared/profile'
</script>

<template>
  <section id="services" class="relative py-24 sm:py-32">
    <div class="section-wrap">
      <SiteReveal>
        <div class="flex items-end justify-between gap-6">
          <p class="kicker">02 — Services</p>
          <span class="font-mono text-[11px] uppercase tracking-[0.22em] text-dim">For clients</span>
        </div>
        <div class="rule mt-6" />
        <h2 class="display mt-12 max-w-3xl text-5xl sm:text-6xl">
          What I can build
          <span class="italic">for you.</span>
        </h2>
      </SiteReveal>

      <div class="mt-16 grid gap-px bg-line sm:grid-cols-2">
        <SiteReveal
          v-for="(service, i) in profile.services"
          :key="service.title"
          :delay="`${i * 70}ms`"
          class="bg-void p-8"
        >
          <p class="font-mono text-[11px] uppercase tracking-[0.24em] text-acid">
            {{ String(i + 1).padStart(2, '0') }} / {{ service.title }}
          </p>
          <p class="mt-4 text-xl leading-snug text-ink">{{ service.outcome }}</p>
          <ul class="mt-6 flex flex-wrap gap-2">
            <li
              v-for="item in service.deliverables"
              :key="item"
              class="border border-line px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-mute"
            >
              {{ item }}
            </li>
          </ul>
        </SiteReveal>
      </div>

      <div class="mt-16 border-t border-line pt-12">
        <SiteReveal>
          <h3 class="display text-4xl">How a project runs</h3>
        </SiteReveal>
        <SiteReveal delay="80ms">
          <ol class="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <li
              v-for="(item, i) in profile.process"
              :key="item.step"
              class="border-l-2 border-acid pl-5"
            >
              <p class="font-mono text-[11px] uppercase tracking-[0.22em] text-acid">
                {{ String(i + 1).padStart(2, '0') }} · {{ item.step }}
              </p>
              <p class="mt-3 text-mute">{{ item.detail }}</p>
            </li>
          </ol>
        </SiteReveal>
      </div>
    </div>
  </section>
</template>
