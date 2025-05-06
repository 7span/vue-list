import vueList from "@7span/vue-list/src/main";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vueList);
});
