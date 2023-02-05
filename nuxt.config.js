export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'faceslog.com',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      // OG Embed
      {
        property: 'og:title',
        content: 'Faceslog',
        hid: 'og:title'
      },
      {
        property: 'og:type',
        content: 'website',
        hid: 'og:type'
      },
      {
        property: 'og:description',
        content: "Faceslog's website, Computer science student, I have always been passionate about technology and the endless possibilities it offers. Welcome to my world.",
        hid: 'og:description'
      },
      {
        property: 'og:url',
        content: 'https://faceslog.com',
        hid: 'og:url'
      },
      {
        property: 'og:image',
        content: 'https://faceslog.com/landing/profile.webp',
        hid: 'og:image'
      },
      { hid: 'description', name: 'description', content: "Faceslog's website (Made with love), learn more about who is faceslog" },
      { name: 'keywords', content: "faceslog website whois faces computer science development" },
      { name: 'author', content: 'Faceslog' },
      { name: 'copyright', content: 'Faceslog.com' },
      { name: 'robots', content: 'index,follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [ '~/assets/css/global.css' ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    ['nuxt-umami'],
  ],
  // Unami Analytics Configuration Disabled by default
  umami: {    
    enable: false,
    autoTrack: true,
    doNotTrack: false,
    cache: false,
    domains: 'mywebsite.com,mywebsite2.com',
    websiteId: 'your-website-id',
    scriptUrl: 'https://path.to.umami.js',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  /*
  ** For deployment you might want to edit host and port
  */
  server: {
    port: process.env.PORT || 3000, // default: 3000
    host: process.env.HOST || 'localhost' // default: localhost
  },
  // Server MiddleWare Custom Api Endpoint
  serverMiddleware: [
    { path: "/api", handler: "~/api/index.js" },
  ],
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL || ''
    },
    hcaptcha: {
      siteKey: process.env.HCAPTCHA_SITE_KEY || ''
    }
  }
}
