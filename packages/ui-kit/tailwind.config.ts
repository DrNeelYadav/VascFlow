import type { Config } from "tailwindcss";

/**
 * Vascule OS Design System Tailwind Configuration
 *
 * Core Tokens:
 * - OLED Black: #000000 (Cath lab & low-glare surgical workstations)
 * - Medical Cobalt: #2563EB (Clinical action primary & beacons)
 * - Google Workspace Light Mode: #FFFFFF base, #F8F9FA surface, #DADCE0 borders
 * - Crisp Typography: Google Sans / Inter / Roboto Mono
 * - Shadows: Google Material Design 3 (MD3) elevation shadows
 */
const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        // Vascule OS OLED Black Tokens
        oled: {
          DEFAULT: "#000000",
          pure: "#000000",
          canvas: "#000000",
          surface: "#090A0F",
          card: "#0C0E14",
          panel: "#111827",
          border: "#1E293B",
          borderSubtle: "#151D2A",
          muted: "#94A3B8",
          foreground: "#F8FAFC",
        },
        // Vascule OS Medical Cobalt Tokens
        cobalt: {
          DEFAULT: "#2563EB",
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
          hover: "#1D4ED8",
          active: "#1E40AF",
          soft: "#EFF6FF",
          border: "#3B82F6",
        },
        // Google Workspace Light Mode Tokens
        google: {
          white: "#FFFFFF",
          surface: "#F8F9FA",
          surfaceHover: "#F1F3F4",
          surfaceActive: "#E8EAED",
          ink: "#202124",
          darkText: "#0F172A",
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
        // Semantic Application Tokens
        background: "hsl(var(--background, 0 0% 100%))",
        foreground: "hsl(var(--foreground, 222 47% 11%))",
        border: "hsl(var(--border, 214.3 31.8% 91.4%))",
        card: {
          DEFAULT: "hsl(var(--card, 0 0% 100%))",
          foreground: "hsl(var(--card-foreground, 222 47% 11%))",
        },
        primary: {
          DEFAULT: "#2563EB",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FFFFFF",
          foreground: "#0F172A",
          border: "#DADCE0",
        },
        destructive: {
          DEFAULT: "#FCE8E6",
          foreground: "#C5221F",
          border: "#F5C2C7",
        },
        muted: {
          DEFAULT: "#F1F5F9",
          foreground: "#5F6368",
        },
      },
      borderRadius: {
        none: "0px",
        sm: "0.25rem",   // 4px
        md: "0.375rem",  // 6px
        lg: "0.5rem",    // 8px - Vascule OS standard rounded-lg
        xl: "0.75rem",   // 12px
        "2xl": "1rem",   // 16px
        full: "9999px",  // Pill-shaped rounded-full
      },
      fontFamily: {
        sans: [
          "'Google Sans'",
          "'Inter'",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
        heading: ["'Google Sans'", "'Product Sans'", "'Inter'", "sans-serif"],
        mono: [
          "'Roboto Mono'",
          "'JetBrains Mono'",
          "'SF Mono'",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        // Material Design 3 (MD3) Elevation Shadows
        "md-1":
          "0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15)",
        "md-2":
          "0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15)",
        "md-3":
          "0 1px 3px 0 rgba(60, 64, 67, 0.3), 0 4px 8px 3px rgba(60, 64, 67, 0.15)",
        "md-4":
          "0 2px 3px 0 rgba(60, 64, 67, 0.3), 0 6px 10px 4px rgba(60, 64, 67, 0.15)",
        "md-5":
          "0 4px 4px 0 rgba(60, 64, 67, 0.3), 0 8px 12px 6px rgba(60, 64, 67, 0.15)",
        // Vascule OS Specialized Elevation & Glow
        "cobalt-sm": "0 1px 3px 0 rgba(37, 99, 235, 0.3)",
        "cobalt-glow": "0 0 14px 0 rgba(37, 99, 235, 0.35)",
        "oled-card": "0 0 0 1px #1E293B, 0 4px 12px 0 rgba(0, 0, 0, 0.9)",
      },
      letterSpacing: {
        crisp: "-0.01em",
        tightest: "-0.02em",
      },
      transitionTimingFunction: {
        "google-standard": "cubic-bezier(0.4, 0, 0.2, 1)",
        "google-decelerate": "cubic-bezier(0.0, 0, 0.2, 1)",
        "google-accelerate": "cubic-bezier(0.4, 0, 1, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
