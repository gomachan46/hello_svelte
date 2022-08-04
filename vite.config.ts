import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: './dist',
    rollupOptions: {
      output: {
        entryFileNames: 'svelte-[name].js',
        chunkFileNames: 'svelte-[name].js',
        assetFileNames: 'svelte-[name].[ext]'
      }
    }
  }
})
