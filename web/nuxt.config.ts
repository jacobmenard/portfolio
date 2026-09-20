// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0',
    },
    title: 'Menard Catayas'
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/scss/_media-queries.scss" as *;`,
        },
      },
    },
    optimizeDeps: {
      include: [
        'bootstrap-vue-next',
        'sweetalert2',
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'bootstrap-vue-next/components/BFormInput',
        'bootstrap-vue-next/components/BFormGroup',
        'bootstrap-vue-next/components/BFormTextarea',
        'bootstrap-vue-next/components/BButton',
        'bootstrap-vue-next/components/BForm',
      ]
    }
  },
  modules: ['@bootstrap-vue-next/nuxt'],
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-vue-next/dist/bootstrap-vue-next.css'
  ],
  runtimeConfig: {
    public: {
      webUrl: process.env.CLIENT_BASE_URL || 'http://localhost:3000',
    },

  },
})
