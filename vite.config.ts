import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/gruzovoi-dvor/', // для GitHub Pages
  build: {
    outDir: 'docs' // вместо 'dist' или другого значения
  }
})
