import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: process.env.VITE_BASE_URL || '/',
  build: {
    outDir: process.env.VITE_BUILD_DIR || 'dist',
  },
  // ← Добавляем proxy для dev
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',  // ваш Express backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
