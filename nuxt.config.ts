// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // pages:false,
  modules: [ '@nuxt/ui'],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    exposeConfig: false,
  },

  ui: {
    primary: 'primary',
    secondary: 'customGray',
  },

  compatibilityDate: '2024-07-03',

  devtools: {
    enabled: true,
  },
})
