<script setup lang="ts">
import { profile } from '#shared/profile'
</script>

<template>
  <section id="contact" class="relative py-24 sm:py-32">
    <div class="section-wrap">
      <SiteReveal>
        <div class="flex items-end justify-between gap-6">
          <p class="kicker">05 — Contact</p>
          <span class="font-mono text-[11px] uppercase tracking-[0.22em] text-dim">Open channel</span>
        </div>
        <div class="rule mt-6" />
      </SiteReveal>

      <div class="mt-12 grid items-end gap-12 lg:grid-cols-12">
        <SiteReveal class="lg:col-span-7">
          <h2 class="display text-5xl sm:text-7xl">
            Let’s put an agent
            <span class="italic text-acid">to work.</span>
          </h2>
          <p class="mt-6 max-w-lg text-lg text-mute">
            Tell me the task that eats your team’s week. I’ll reply with whether an agent can take it on, and what a first version would look like. Hiring for a full-time role? Same inbox.
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
