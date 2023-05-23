import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://pool1541.github.io/e-commerce',
  build: {
    outDir: 'build',
  },
});
