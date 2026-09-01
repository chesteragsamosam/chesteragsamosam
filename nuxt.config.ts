import tailwindcss from '@tailwindcss/vite'

const baseURL = process.env.NUXT_APP_BASE_URL || '/'
const siteUrl = 'https://chesteragsamosam.github.io/chesteragsamosam'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxt/fonts', '@vueuse/nuxt'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
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
      weights: [400, 500, 600],
      styles: ['normal', 'italic'],
    },
    families: [
      { name: 'Instrument Serif', provider: 'google', weights: [400] },
      { name: 'Syne', provider: 'google', weights: [400, 500, 600, 700] },
      { name: 'IBM Plex Mono', provider: 'google', weights: [400, 500] },
    ],
  },
  nitro: {
    preset: 'github-pages',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/cover-letter'],
    },
  },
  runtimeConfig: {
    public: {
      siteUrl,
    },
  },
})
