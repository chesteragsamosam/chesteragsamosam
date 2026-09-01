<script setup lang="ts">
import { profile } from '~/data/profile'

const config = useRuntimeConfig()
const description = profile.headline

useSeoMeta({
  title: `${profile.name} — ${profile.role}`,
  description,
  ogTitle: `${profile.name} — ${profile.role}`,
  ogDescription: description,
  ogType: 'website',
  ogUrl: config.public.siteUrl,
  twitterCard: 'summary_large_image',
  robots: 'index, follow',
})

useHead({
  link: [{ rel: 'canonical', href: config.public.siteUrl }],
})
</script>

<template>
  <main id="main">
    <SiteHero />
    <SiteAbout />
    <SiteJourney />
    <SiteSkills />
    <SiteContact />
  </main>
</template>
