import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from '@tanstack/router-plugin/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      // Proxy API calls to your local backend
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
        ws: true, // Enable WebSocket proxying if needed
        configure: (proxy) => {
          proxy.on('error', (err) => {
            console.log('Proxy error:', err);
          });
          proxy.on('proxyReq', (proxyReq, req) => {
            console.log('Proxying request:', req.method, req.url, '-> target:', proxyReq.getHeader('host') + proxyReq.path);
          });
          proxy.on('proxyRes', (proxyRes, req) => {
            console.log('Received response:', proxyRes.statusCode, req.url);
          });
        },
      },
    },
  },
});
