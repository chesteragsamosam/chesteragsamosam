<script setup lang="ts">
import { profile } from '#shared/profile'

const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl.replace(/\/+$/, '')
const canonicalUrl = `${siteUrl}/`
const ogImageUrl = `${siteUrl}/og-image.png`

const pageTitle = `${profile.name} — AI Agentic Engineer · AI Agents & Automation`
const pageDescription = 'AI agentic engineer for hire. I build custom AI agents, AI features inside products, and workflow automations, backed by 9 years of production web engineering.'

const { personSchema, websiteSchema, profilePageSchema } = useJsonLd()

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  author: profile.name,
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  // Open Graph
  ogTitle: `${profile.name} — AI Agentic Engineer`,
  ogDescription: pageDescription,
  ogType: 'profile',
  ogUrl: canonicalUrl,
  ogImage: ogImageUrl,
  ogImageSecureUrl: ogImageUrl,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: `${profile.name} — AI Agentic Engineer Portfolio`,
  ogSiteName: `${profile.name} Portfolio`,
  ogLocale: 'en_US',
  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: `${profile.name} — AI Agentic Engineer`,
  twitterDescription: pageDescription,
  twitterImage: ogImageUrl,
  twitterImageAlt: `${profile.name} — AI Agentic Engineer Portfolio`,
})

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ],
  meta: [
    {
      name: 'keywords',
      content: 'Chester Agsamosam, AI Agentic Engineer, AI agent developer for hire, custom AI agents, AI automation, LLM integration, Software Engineer Philippines, Vue.js Developer, TypeScript Engineer, Svelte Developer, Web Application Developer Lipa City, Ascendion Developer',
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
    <SiteServices />
    <SiteJourney />
    <SiteSkills />
    <SiteContact />
  </main>
</template>
