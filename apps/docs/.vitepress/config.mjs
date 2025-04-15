import { defineConfig } from "vitepress";
import { version } from "../package.json";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VueList",
  description: "Vue List Documentation",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  srcDir: "src",
  themeConfig: {
    siteTitle: "VueList",
    logo: "/logo.svg",
    nav: [{ text: "Home", link: "/src/index.md" }],
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    outline: [2, 3],
    sidebar: [
      {
        text: "👋 Introduction",
        items: [
          { text: "Why Vue List?", link: "/introduction/why-vue-list" },
          {
            text: "Getting Started",
            link: "/introduction/getting-started",
          },
        ],
      },
      {
        text: "⚙️ Configuration",
        items: [
          { text: "Options", link: "/configuration/options" },
          { text: "Request Handler", link: "/configuration/request-handler" },
          { text: "State Manager", link: "/configuration/state-manager" },
          { text: "Context Object", link: "/configuration/context-object" },
        ],
      },
      {
        text: "🧩 Components",
        items: [
          {
            text: "Introduction",
            link: "/components/intro",
          },
          { text: "VueList", link: "/components/vue-list" },
          { text: "VueListItems", link: "/components/items" },
          { text: "VueListPagination", link: "/components/pagination" },
          { text: "VueListLoadMore", link: "/components/load-more" },
          { text: "VueListInitialLoader", link: "/components/initial-loader" },
          { text: "VueListLoader", link: "/components/loader" },
          { text: "VueListSummary", link: "/components/summary" },
          { text: "VueListGoTo", link: "/components/go-to" },
          { text: "VueListPerPage", link: "/components/per-page" },
          { text: "VueListSearch", link: "/components/search" },
          { text: "VueListEmpty", link: "/components/empty" },
          { text: "VueListError", link: "/components/error" },
          { text: "VueListRefresh", link: "/components/refresh" },
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
      copyright: "🧑‍💻 Built By 7Span.",
    },
  },
});
