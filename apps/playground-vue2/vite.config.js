// vite.config.js

import { defineConfig } from "vite";
import { createVuePlugin as vue } from "vite-plugin-vue2";
import { fileURLToPath, URL } from "node:url";
export default defineConfig({
  //https://vitejs.dev/config/
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
});
