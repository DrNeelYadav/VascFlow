import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@vascule/utils/sanitizers": path.resolve(__dirname, "./packages/utils/src/sanitizers.ts"),
      "@vascule/utils": path.resolve(__dirname, "./packages/utils/src"),
      "@": path.resolve(__dirname, "./apps/web-app"),
    },
  },
  test: {
    include: ["packages/**/*.test.ts", "apps/**/*.test.ts"],
    exclude: ["_legacy_vite_archive/**", "**/node_modules/**", "dist/**"],
  },
});
