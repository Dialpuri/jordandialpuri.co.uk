import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "",
  build: {
    rollupOptions: {
      // One entry per page. `presentations/index.html` is built so the talks
      // page is served at /presentations/ without any client-side routing.
      input: {
        main: "index.html",
        presentations: "presentations/index.html",
      },
    },
  },
});
