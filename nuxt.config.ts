import tailwindcss from '@tailwindcss/vite'

const baseURL = process.env.NUXT_APP_BASE_URL || '/'
const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://chesteragsamosam.github.io/chesteragsamosam'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxt/fonts', '@vueuse/nuxt'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        'katex/dist/contrib/mhchem': 'katex/dist/contrib/mhchem.js',
      },
    },
  },
  app: {
    baseURL,
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [{ name: 'theme-color', content: '#050810' }],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: `${baseURL}favicon.svg` },
      ],
    },
  },
  fonts: {
    defaults: {
      weights: [400, 500, 600, 700],
      styles: ['normal', 'italic'],
    },
    families: [
      { name: 'Plus Jakarta Sans', provider: 'google', weights: [600, 700] },
      { name: 'Inter', provider: 'google', weights: [400, 500] },
      { name: 'JetBrains Mono', provider: 'google', weights: [400, 500] },
    ],
  },
  nitro: {
    // The Nuxt app is a static GitHub Pages site. The chat API is deployed
    // separately as the Cloudflare Worker under workers/digital-twin.
    preset: 'github-pages',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/cover-letter'],
    },
  },
  runtimeConfig: {
    openRouterApiKey: process.env.OPENROUTER_API_KEY || process.env.OPENROUTER_API || '',
    public: {
      siteUrl,
      // A production static build has no same-origin /api/chat endpoint.
      // GitHub Actions injects the Worker URL at build time.
      chatApiUrl: process.env.NUXT_PUBLIC_CHAT_API_URL || '/api/chat'
    },
  },
  
})
