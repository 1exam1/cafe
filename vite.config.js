import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 8070,
    watch: {
      usePolling: true,
      interval: 300,
    },
    proxy: {
      '/cafes': 'http://localhost:3000',
    },
  },
  cacheDir: '/var/tmp/.vite',
});
