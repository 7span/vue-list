// vite.config.js

import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import * as path from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  //https://vitejs.dev/config/
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/plugin.js"),
      fileName: "vue-list",
      name: "VueList",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "vue",
        },
      },
    },
  },
});
