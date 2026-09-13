import type { Config } from "tailwindcss";
import baseConfig from "../../packages/ui-kit/tailwind.config";

const config: Config = {
  ...baseConfig,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui-kit/src/**/*.{js,ts,jsx,tsx}",
  ],
};

export default config;
