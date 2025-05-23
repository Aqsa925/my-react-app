import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my-react-app/',  // <-- your repo name with slashes
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

