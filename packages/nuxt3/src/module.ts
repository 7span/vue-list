import {
  defineNuxtModule,
  addPlugin,
  addComponent,
  createResolver,
  addComponentsDir
} from "@nuxt/kit";

interface ModuleOptions {
  prefix?: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@7span/nuxt-list",
    configKey: "nuxtList"
  },

  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);
    const prefix = options.prefix || "";

    const components = [
      { name: "VueList", file: "./runtime/components/list.vue" },
      { name: "VueListItems", file: "./runtime/components/items.vue" },
      {
        name: "VueListInitialLoader",
        file: "./runtime/components/initial-loader.vue"
      },
      { name: "VueListLoader", file: "./runtime/components/loader.vue" },
      { name: "VueListError", file: "./runtime/components/error.vue" },
      {
        name: "VueListPagination",
        file: "./runtime/components/pagination.vue"
      },
      { name: "VueListSummary", file: "./runtime/components/summary.vue" },
      { name: "VueListPerPage", file: "./runtime/components/per-page.vue" },
      {
        name: "VueListAttributes",
        file: "./runtime/components/attributes.vue"
      },
      { name: "VueListSearch", file: "./runtime/components/search.vue" },
      { name: "VueListLoadMore", file: "./runtime/components/load-more.vue" },
      { name: "VueListGoTo", file: "./runtime/components/go-to.vue" },
      { name: "VueListRefresh", file: "./runtime/components/refresh.vue" },
      { name: "VueListEmpty", file: "./runtime/components/empty.vue" }
    ];

    for (const component of components) {
      addComponent({
        name: `${prefix}${component.name}`,
        filePath: resolver.resolve(component.file)
      });
    }
  }
});
