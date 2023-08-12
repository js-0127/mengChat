import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //配置别名
  resolve: {
    alias: {
      "@": path.join(__dirname, 'src'),
    }
  },
})
