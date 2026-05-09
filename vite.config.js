import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    devSourcemap: true,
  },

  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        booking: 'booking.html',
      },
    },
  },
});
