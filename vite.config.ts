import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      // This project lives on /mnt/c under WSL2, and the Windows filesystem
      // does not deliver inotify events to Linux. Without polling, Vite never
      // sees edits: no HMR, and the dev server keeps serving stale modules
      // while the on-disk source and production build are already correct.
      usePolling: true,
      interval: 300,
    },
  },
})
