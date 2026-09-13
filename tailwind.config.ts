import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // Google Workspace MD3 Monochrome Standard Palette
        google: {
          white: "#FFFFFF",
          surface: "#F8F9FA",
          surfaceHover: "#F1F3F4",
          surfaceActive: "#E8EAED",
          ink: "#202124",
          subtext: "#5F6368",
          border: "#DADCE0",
          grid: "#E0E0E0",
          blue: "#1A73E8",
          blueHover: "#1765CC",
          blueSoft: "#E8F0FE",
          red: "#D93025",
          redSoft: "#FCE8E6",
          redText: "#C5221F",
          yellow: "#F9AB00",
          yellowSoft: "#FEF7E0",
          yellowText: "#B06000",
          green: "#1E8E3E",
          greenSoft: "#E6F4EA",
          greenText: "#137333",
        },
      },
      borderRadius: {
        full: "9999px",
        lg: "0.5rem",    // 8px standard Google Card/Modal
        md: "0.375rem",  // 6px
        sm: "0.25rem",   // 4px Google Menu/Dropdown
      },
      fontFamily: {
        sans: ["'Google Sans'", "Roboto", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        heading: ["'Google Sans'", "'Product Sans'", "sans-serif"],
        mono: ["'Roboto Mono'", "'JetBrains Mono'", "SF Mono", "monospace"],
      },
      boxShadow: {
        // Google Material Design 3 Elevation Shadows
        "md-1": "0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15)",
        "md-2": "0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15)",
        "md-3": "0 1px 3px 0 rgba(60, 64, 67, 0.3), 0 4px 8px 3px rgba(60, 64, 67, 0.15)",
        "md-4": "0 2px 3px 0 rgba(60, 64, 67, 0.3), 0 6px 10px 4px rgba(60, 64, 67, 0.15)",
        "md-5": "0 4px 4px 0 rgba(60, 64, 67, 0.3), 0 8px 12px 6px rgba(60, 64, 67, 0.15)",
        "google-fab": "0 1px 3px 0 rgba(60, 64, 67, 0.3), 0 4px 8px 3px rgba(60, 64, 67, 0.15)",
        "google-search": "0 1px 6px 0 rgba(32, 33, 36, 0.28)",
      },
      transitionTimingFunction: {
        "google-decelerate": "cubic-bezier(0.2, 0, 0, 1)",
        "google-accelerate": "cubic-bezier(0.4, 0, 0.2, 1)",
        "google-standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
