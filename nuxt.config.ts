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
      htmlAttrs: { lang: 'en', dir: 'ltr' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#050810' },
        { name: 'color-scheme', content: 'dark' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'author', content: 'Chester Agsamosam' },
        { name: 'creator', content: 'Chester Agsamosam' },
        { name: 'publisher', content: 'Chester Agsamosam' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: `${baseURL}favicon.svg` },
        { rel: 'icon', type: 'image/x-icon', href: `${baseURL}favicon.ico` },
        { rel: 'apple-touch-icon', sizes: '180x180', href: `${baseURL}apple-touch-icon.png` },
        { rel: 'manifest', href: `${baseURL}site.webmanifest` },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
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
