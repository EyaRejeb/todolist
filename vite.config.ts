import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    allowedHosts: ["snq88l-5174.csb.app"], // Ajoute l'hôte ici
  },
});
