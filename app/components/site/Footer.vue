<script setup lang="ts">
import { profile } from '~/data/profile'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="relative border-t border-line">
    <div class="section-wrap flex flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p class="font-display text-2xl">{{ profile.name }}</p>
        <p class="mt-1 font-mono text-[11px] uppercase tracking-[0.22em] text-mute">
          {{ profile.role }} · {{ profile.location }}
        </p>
      </div>
      <p class="font-mono text-[11px] uppercase tracking-[0.18em] text-dim">
        © {{ year }} — Built with Nuxt
      </p>
    </div>
  </footer>
</template>
