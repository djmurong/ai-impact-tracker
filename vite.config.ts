import path from "path";
import fs from "fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** Copy index.html to 404.html for GitHub Pages SPA fallback (paths like /Overview serve the app) */
function copy404Plugin() {
  return {
    name: "copy-404",
    closeBundle() {
      const indexPath = path.resolve("docs", "index.html");
      const notFoundPath = path.resolve("docs", "404.html");
      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, notFoundPath);
      }
    },
  };
}

export default defineConfig(() => {
  return {
    base: "/ai-impact-tracker/",
    server: {
      port: 3000,
      host: "0.0.0.0",
    },
    plugins: [react(), copy404Plugin()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    build: {
      outDir: "docs",
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
