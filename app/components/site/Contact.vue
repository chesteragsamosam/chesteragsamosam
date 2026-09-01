<script setup lang="ts">
import { profile } from '~/data/profile'
</script>

<template>
  <section id="contact" class="relative py-24 sm:py-32">
    <div class="section-wrap">
      <SiteReveal>
        <div class="flex items-end justify-between gap-6">
          <p class="kicker">04 — Contact</p>
          <span class="font-mono text-[11px] uppercase tracking-[0.22em] text-dim">Open channel</span>
        </div>
        <div class="rule mt-6" />
      </SiteReveal>

      <div class="mt-12 grid items-end gap-12 lg:grid-cols-12">
        <SiteReveal class="lg:col-span-7">
          <h2 class="display text-5xl sm:text-7xl">
            Let’s build something
            <span class="italic text-acid">sharp.</span>
          </h2>
          <p class="mt-6 max-w-lg text-lg text-mute">
            Available for select frontend and full-stack work. Email, call, or find me on LinkedIn.
          </p>
        </SiteReveal>

        <SiteReveal class="lg:col-span-5" delay="80ms">
          <ul class="divide-y divide-line border border-line">
            <li>
              <a
                :href="`mailto:${profile.contact.email}`"
                class="group flex items-center justify-between gap-4 p-5 transition hover:bg-panel"
              >
                <span>
                  <span class="block font-mono text-[11px] uppercase tracking-[0.22em] text-dim">Email</span>
                  <span class="mt-1 block text-ink">{{ profile.contact.email }}</span>
                </span>
                <span class="font-mono text-acid">↗</span>
              </a>
            </li>
            <li>
              <a
                :href="profile.contact.phoneHref"
                class="group flex items-center justify-between gap-4 p-5 transition hover:bg-panel"
              >
                <span>
                  <span class="block font-mono text-[11px] uppercase tracking-[0.22em] text-dim">Phone</span>
                  <span class="mt-1 block text-ink">{{ profile.contact.phone }}</span>
                </span>
                <span class="font-mono text-acid">↗</span>
              </a>
            </li>
            <li>
              <a
                :href="profile.contact.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center justify-between gap-4 p-5 transition hover:bg-panel"
              >
                <span>
                  <span class="block font-mono text-[11px] uppercase tracking-[0.22em] text-dim">LinkedIn</span>
                  <span class="mt-1 block text-ink">{{ profile.contact.linkedinLabel }}</span>
                </span>
                <span class="font-mono text-acid">↗</span>
              </a>
            </li>
          </ul>
        </SiteReveal>
      </div>
    </div>
  </section>
</template>
