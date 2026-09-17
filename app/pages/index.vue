<script setup lang="ts">
import { profile } from '~/data/profile'

const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl.replace(/\/+$/, '')
const canonicalUrl = `${siteUrl}/`
const ogImageUrl = `${siteUrl}/og-image.png`

const pageTitle = `${profile.name} — Senior Frontend & Web App Developer (Vue.js · TypeScript)`
const pageDescription = 'Senior Frontend Developer with 9 years of engineering experience, specializing in Vue.js, TypeScript, and high-scale digital wallet UIs in the Philippines.'

const { personSchema, websiteSchema, profilePageSchema } = useJsonLd()

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  author: profile.name,
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  // Open Graph
  ogTitle: `${profile.name} — Senior Frontend & Web App Developer`,
  ogDescription: pageDescription,
  ogType: 'profile',
  ogUrl: canonicalUrl,
  ogImage: ogImageUrl,
  ogImageSecureUrl: ogImageUrl,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: `${profile.name} — Senior Frontend & Web App Developer Portfolio`,
  ogSiteName: `${profile.name} Portfolio`,
  ogLocale: 'en_US',
  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: `${profile.name} — Senior Frontend & Web App Developer`,
  twitterDescription: pageDescription,
  twitterImage: ogImageUrl,
  twitterImageAlt: `${profile.name} — Senior Frontend & Web App Developer Portfolio`,
})

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ],
  meta: [
    {
      name: 'keywords',
      content: 'Chester Agsamosam, Chester Agsamosam portfolio, Frontend Developer Philippines, Vue.js Developer, TypeScript Engineer, Svelte Developer, Web Application Developer Lipa City, Ascendion Developer',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify([personSchema, websiteSchema, profilePageSchema]),
    },
  ],
})
</script>

<template>
  <main id="main">
    <SiteBackground />
    <SiteParticles />
    <SiteHero />
    <SiteAbout />
    <SiteJourney />
    <SiteSkills />
    <SiteContact />
  </main>
</template>
