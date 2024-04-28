import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-static'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: "/blog/",
  publicDir: 'public',
  kit: {
    adapter: adapter(),
    // 기타 설정
  }
})
