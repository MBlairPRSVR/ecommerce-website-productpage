import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Customize your development server port if needed
  },
  build: {
    outDir: 'build', // Customize output directory
    minify: 'esbuild', // Default minifier, you can change to Terser if needed
  },
  resolve: {
    alias: {
      '@': '/src', // Adding a path alias for easier imports
    },
  },
})
