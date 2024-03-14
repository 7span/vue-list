// vite.config.js

import { defineConfig } from "vite";
import { createVuePlugin as vue } from "vite-plugin-vue2";
import { fileURLToPath, URL } from "node:url";
import * as path from "path";
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
      entry: path.resolve(__dirname, "./src/main.js"),
      fileName: "vue-list",
      name: "VueList",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
