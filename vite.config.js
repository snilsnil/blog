import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: "/blog/",
  publicDir: 'public',
  build: {
    // Add 404.html to the build output
    emptyOutDir: true, // Ensure outDir is cleaned before build
    rollupOptions: {
      input: {
        main: './index.html',
        // Add 404.html as an input file
        '404': './404.html'
      }
    }
  }
})
