// vite.config.js

import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import graphql from "@rollup/plugin-graphql";

export default defineConfig({
  //https://vitejs.dev/config/
  plugins: [vue(), graphql()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
});
