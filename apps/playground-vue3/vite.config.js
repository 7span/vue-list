import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import uiPro from '@nuxt/ui-pro/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(), vueDevTools(), uiPro()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
