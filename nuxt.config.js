export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "solarcampus-bayern",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description,
      },
      { name: "format-detection", content: "telephone=no" },
      { hid: "og:title", property: "og:title", content: "Solarcampus Bayern" },
      {
        hid: "og:image",
        property: "og:image",
        content:
          "https://www.solarcampus-bayern.de/photovoltaikHeaderZugeschnittenFuerSM3.jpg",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://www.solarcampus-bayern.de",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Wir beschleunigen die Energiewende an Universitäten",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
    script: [
      {
        src: "https://solarcampus-bayern-analytics.94.16.114.149.sslip.io/tracker.js",
        "data-ackee-server":
          "https://solarcampus-bayern-analytics.94.16.114.149.sslip.io",
        "data-ackee-domain-id": "862f769e-1bde-4d68-b4fa-d17ce2900b62",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~layouts/global.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/pwa",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
    icon: {
      fileName: "apple-touch-icon.png",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
