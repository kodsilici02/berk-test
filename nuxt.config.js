// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Nuxt 3 Portfolio',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  },
  modules: ['@pinia/nuxt', '@vee-validate/nuxt', 'nuxt-headlessui'],
  buildModules: [
    // ...
    '@nuxtjs/tailwindcss'
  ],
  css: ['@/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  runtimeConfig: {
    dburl: process.env.DATABASE_URL,
    dbname: process.env.DBNAME,
    user: process.env.DBUSERNAME,
    pass: process.env.DBPASSWORD,
    authSource: process.env.DBAUTHSOURCE
  },
  nitro: {
    plugins: ['@/server/dbconnection.js']
  }
});
