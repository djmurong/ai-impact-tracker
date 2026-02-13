import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
      base: '/ai-impact-tracker/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        outDir: 'docs',
        emptyOutDir: true,
        cssCodeSplit: false,
        rollupOptions: {
          output: {
            manualChunks: undefined,
          },
        },
      },
    };
});
