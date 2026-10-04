import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@vascule/utils/sanitizers": path.resolve(__dirname, "./packages/utils/src/sanitizers.ts"),
      "@vascule/utils": path.resolve(__dirname, "./packages/utils/src"),
      "@": path.resolve(__dirname, "./apps/web-app"),
      "server-only": path.resolve(__dirname, "./apps/web-app/src/__tests__/empty-module.ts"),
    },
  },
  test: {
      // `.tsx` is required as well as `.ts`: the imaging suite renders React
      // components with renderToStaticMarkup.
      include: [
        "packages/**/*.test.{ts,tsx}",
        "apps/**/*.test.{ts,tsx}",
      ],
      exclude: ["_legacy_vite_archive/**", "**/node_modules/**", "dist/**"],
    },
});
