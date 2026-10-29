import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: true, // Allow external connections
    port: 8080,
    hmr: {
      port: 8080, // Use same port for HMR
    },
  },
  plugins: [
    react(),
    // Temporarily disabled componentTagger to fix WebSocket issues
    // mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Production optimizations
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'vendor';
          }
          if (id.includes('node_modules/@radix-ui/')) {
            return 'ui';
          }
          if (id.includes('node_modules/framer-motion/') || id.includes('node_modules/gsap/')) {
            return 'animations';
          }
          if (id.includes('node_modules/react-router-dom/')) {
            return 'router';
          }
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Generate source maps for production debugging
    sourcemap: false,
    // Optimize CSS
    cssMinify: true,
  },
  // Enable gzip compression
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  },
}));
