import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@/auth',
        replacement: path.resolve(__dirname, './apps/web-app/auth.ts'),
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
      {
        find: 'next/server',
        replacement: path.resolve(__dirname, './node_modules/next/server.js'),
      },
      {
        find: '@vascule/ui-kit',
        replacement: path.resolve(__dirname, './packages/ui-kit/src'),
      },
      {
        find: '@vascule/feature-patient-vitals',
        replacement: path.resolve(__dirname, './packages/features/patient-vitals/src'),
      },
      {
        find: '@vascule/feature-ot-scheduling',
        replacement: path.resolve(__dirname, './packages/features/ot-scheduling/src'),
      },
      {
        find: '@vascule/feature-dicom-viewer',
        replacement: path.resolve(__dirname, './packages/features/dicom-viewer/src'),
      },
      {
        find: '@vascule/feature-scheme-billing',
        replacement: path.resolve(__dirname, './packages/features/scheme-billing/src'),
      },
      {
        find: '@vascule/catalog',
        replacement: path.resolve(__dirname, './packages/catalog/src'),
      },
    ],
  },
  base: './',
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-radix': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-label',
            '@radix-ui/react-slot',
          ],
          'vendor-ui': ['lucide-react', 'framer-motion', 'clsx', 'tailwind-merge'],
          'vendor-state': ['@tanstack/react-query', 'zustand', 'zod'],
        },
      },
    },
  },
  test: {
    include: [
      'src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
      'packages/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
    ],
    exclude: ['**/node_modules/**', '**/dist/**', 'apps/**'],
    server: {
      deps: {
        inline: ['next-auth', '@auth/core'],
      },
    },
  },
} as any);
