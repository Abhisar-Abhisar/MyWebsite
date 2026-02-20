import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
// For GitHub Pages: only use repo base when deploying (CI sets GITHUB_PAGES_REPO).
// Local dev and local build/preview use base '/' so they work normally.
const GITHUB_PAGES_REPO = process.env.GITHUB_PAGES_REPO;
export default defineConfig(({ mode }) => ({
  base: mode === 'production' && GITHUB_PAGES_REPO ? `/${GITHUB_PAGES_REPO}/` : '/',
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
