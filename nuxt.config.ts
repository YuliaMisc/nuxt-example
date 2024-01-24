// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://db.onlinewebfonts.com/c/dda65d7f418f4ab23abf484c807c9f17?family=Arboria-Medium' },
        { rel: 'stylesheet', href: '//db.onlinewebfonts.com/c/1c7f14203d028f1c6f8914508f469cb9?family=Arboria-Book' }
      ],
      bodyAttrs: {
        class: 'h-full w-full bg-gray-900',
      },
    },
  },
  css: ['~/assets/css/main.css'],
})
