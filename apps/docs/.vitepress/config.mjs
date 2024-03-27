import { defineConfig } from "vitepress";
import { version } from "../package.json";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue List",
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
          { text: "What is Vue List?", link: "/guide/what-is-vue-list" },
          { text: "Getting Started", link: "/guide/getting-started" },

          // { text: "Components", link: "/components/index.md" },
        ],
      },
      {
        text: "Components",
        items: [
          {
            text: "Intro to Components",
            link: "/guide/builtin-components/intro",
          },
          {
            text: "Components",
            collapsed: false,
            items: [
              { text: "Root", link: "/components/root/root.md" },
              { text: "Table", link: "/components/table/table.md" },
              {
                text: "Attributes",
                link: "/components/attributes/attributes.md",
              },
              { text: "Counters", link: "/components/counters/counters.md" },
              { text: "GoTo Page", link: "/components/goto-page/goto-page.md" },
              { text: "Load More", link: "/components/load-more/load-more.md" },
              {
                text: "Pagination",
                link: "/components/pagination/pagination.md",
              },
              { text: "Per Page", link: "/components/per-page/per-page.md" },
              { text: "Search", link: "/components/search/search.md" },
            ],
          },
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
