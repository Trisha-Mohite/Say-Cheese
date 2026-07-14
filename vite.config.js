import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative asset paths let the final `dist/index.html` work when opened
  // directly from the folder, with no localhost server required.
  base: './',
  // Netlify's manual uploader normalises uploaded filenames to lowercase.
  // Stable lowercase asset names keep the HTML references and deployed files
  // aligned on its case-sensitive CDN.
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/app.js',
        chunkFileNames: 'assets/chunk-[name].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
})
