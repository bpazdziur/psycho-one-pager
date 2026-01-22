import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { existsSync } from 'fs';
import { resolve } from 'path';

// Check if CNAME file exists (indicates custom domain setup)
const hasCNAME = existsSync(resolve(__dirname, 'public/CNAME'));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use '/' for custom domain, '/psycho-one-pager/' for GitHub Pages default URL
  base: process.env.NODE_ENV === 'production' && !hasCNAME ? '/psycho-one-pager/' : '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  assetsInclude: ['**/*.JPEG'],
});
