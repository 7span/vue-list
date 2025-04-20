import {
  defineNuxtModule,
  addPlugin,
  addComponent,
  createResolver,
} from "@nuxt/kit";

import defaultOptions from "@7span/vue-list/src/options.js";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@7span/nuxt-list",
    configKey: "nuxtList",
  },

  // Default configuration options of the Nuxt module
  defaults: defaultOptions,
  setup(options, nuxt) {
    console.log("nuxtList module options", options);
    const resolver = createResolver(import.meta.url);

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin({
      src: resolver.resolve("./runtime/plugin"),
      mode: "all",
    });

    // From a library
    addComponent({
      name: "VueList", // name of the component to be used in vue templates
      filePath: "@7span/vue-list/src/components/list.vue",
    });
  },
});
