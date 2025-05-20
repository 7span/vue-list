import {
  defineNuxtModule,
  addPlugin,
  addComponent,
  createResolver,
  addComponentsDir
} from "@nuxt/kit";

interface ModuleOptions {
  // prefix?: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@7span/nuxt-list",
    configKey: "nuxtList"
  },

  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    addPlugin({
      src: resolver.resolve("runtime/plugin.js"),
      mode: "all"
    });
  }
});
