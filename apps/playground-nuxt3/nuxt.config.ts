// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["../../packages/nuxt3/src/module"],
  nuxtList: {
    debug: true,
  },
});
