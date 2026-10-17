// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
      meta: [{ name: 'theme-color', content: '#000000' }],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Geist:wght@300..700&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap'
        }
      ],
      script: [
        {
          // Runs before first paint so the intro animation starts from a hidden state instead of
          // flashing the finished layout. Skipped for reduced-motion users, who get no intro.
          // Safety net: if the app has not taken over the intro within 4s (script blocked or
          // failed), drop the class so the content is never left hidden.
          key: 'motion-flag',
          innerHTML:
            "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){var d=document.documentElement;d.classList.add('js-motion');setTimeout(function(){if(!window.__motionReady)d.classList.remove('js-motion')},4000)}}catch(e){}",
          tagPosition: 'head'
        }
      ]
    }
  },

  // A static portfolio: prerender every route so it can be hosted on any static host or CDN.
  nitro: {
    prerender: { routes: ['/'] }
  },

  typescript: {
    strict: true
  }
})
