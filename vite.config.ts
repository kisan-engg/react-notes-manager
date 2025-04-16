import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/notes': {
        target: 'http://localhost:4000/notes',
        changeOrigin: true
      },
    }
  }
})
