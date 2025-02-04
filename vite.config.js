import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  plugins: [react()],
  define: {
    'process.env': process.env,
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
})
