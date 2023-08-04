// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: "en-US",
      },
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work",
    },
  },
  css: ["~/assets/css/style.css"],
});
