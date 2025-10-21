import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), compression({ algorithm: 'brotliCompress' }), compression({ algorithm: 'gzip' })],
  build: {
    minify: 'esbuild',
    target: 'es2018',
    reportCompressedSize: true,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // keep react/vendor in a separate chunk to improve caching
          vendor: ['react', 'react-dom'],
        }
      }
    }
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
})
