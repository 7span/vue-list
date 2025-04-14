import { defineConfig } from "vitepress";
import { version } from "../package.json";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VueList",
  description: "Vue List Documentation",
  themeConfig: {
    siteTitle: "Vue List",
    logo: "logo.svg",
    nav: [{ text: "Home", link: "/index.md" }],
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Why Vue List?", link: "/introduction/why-vue-list" },
          { text: "Getting Started", link: "/introduction/getting-started" },
        ],
      },
      {
        text: "Configuration",
        items: [
          { text: "Options", link: "/configuration/options" },
          { text: "Request Handler", link: "/configuration/request-handler" },
          { text: "State Manager", link: "/configuration/state-manager" },
          { text: "Context Object", link: "/configuration/context-object" },
        ],
      },
      {
        text: "Components",
        items: [
          {
            text: "Introduction",
            link: "/components/intro",
          },
          { text: "VueList", link: "/components/vue-list" },
          { text: "VueListAttributes", link: "/components/attributes" },
          { text: "VueListCounter", link: "/components/counter" },
          { text: "VueListGoTo", link: "/components/go-to" },
          { text: "VueListLoadMore", link: "/components/load-more" },
          { text: "VueListPagination", link: "/components/pagination" },
          { text: "VueListPerPage", link: "/components/per-page" },
          { text: "VueListSearch", link: "/components/search" },
          { text: "VueListItems", link: "/components/vue-list" },
          { text: "VueListEmpty", link: "/components/vue-list" },
          { text: "VueListError", link: "/components/vue-list" },
          { text: "VueListInitialLoader", link: "/components/vue-list" },
          { text: "VueListLoader", link: "/components/vue-list" },
          { text: "VueListRefresh", link: "/components/vue-list" },
        ],
      },
    ],
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/7span/vue-list" },
    ],
    footer: {
      message: `Version ${version}`,
      copyright: "© 7Span Internet Private Limited. All rights reserved, 2024.",
    },
  },
});
