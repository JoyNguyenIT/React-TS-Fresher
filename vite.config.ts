import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': "/src/",

    },
  },
  server: {
    port: 3000 // change here
  },
});



