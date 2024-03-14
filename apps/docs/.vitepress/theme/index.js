import "./tailwind.postcss";
import "./custom.css";
import VueList from "@7span/vue-list";
import DefaultTheme from "vitepress/theme";
import { requestHandler } from "./vue-list";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(VueList, { requestHandler });
    app.provide("global", app.config.globalProperties);
  },
};
