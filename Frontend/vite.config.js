import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Base path for deployment
  server: {
    port: 3000, // Customize the port
    open: true, // Automatically open the browser
  },
  build: {
    outDir: 'dist', // Output directory for build
    emptyOutDir: true, // Clean output directory before builds
  },
});
