import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: "/spotify-2.0/",
  plugins: [
    tailwindcss(),
  ],
})
