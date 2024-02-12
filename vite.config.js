// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'typewriter',

      fileName: 'index'
    },
    rollupOptions: {
      external: ['react']
    }
  }
})
