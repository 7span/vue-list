import {
  defineNuxtModule,
  addPlugin,
  addComponent,
  createResolver,
  addComponentsDir,
} from "@nuxt/kit";

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@7span/nuxt-list",
    configKey: "nuxtList",
  },

  defaults: {},
  setup(options, nuxt) {
    console.log("nuxtList module options", options);
    const resolver = createResolver(import.meta.url);

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin({
      src: resolver.resolve("./runtime/plugin"),
      mode: "all",
    });

    // addComponent({
    //   name: "VueList", // name of the component to be used in vue templates
    //   filePath: resolver.resolve(
    //     "../../vue3-composition/src/components/list.vue"
    //   ),
    // });
  },
});
