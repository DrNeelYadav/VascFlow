/**
 * Vascule OS colour contract.
 *
 * The application historically carried four palettes at once (Google Workspace
 * hexes, Apple hexes, Sheets and Forms ramps, and raw Tailwind `slate`/`blue`),
 * producing 243 unique hexes and over 5,600 arbitrary-value utilities. This map
 * is the single, mechanical answer to "which token is this legacy colour?",
 * so a conversion is reviewable rather than a per-author judgement call.
 *
 * Two rules govern every conversion:
 *
 * 1. Colour is presentation. No conversion may change what a component renders
 *    as text, what it computes, or what it stores. Only class names change.
 * 2. Semantic meaning wins over visual similarity. A green that meant
 *    "verified" stays a verified green even if its exact shade shifts.
 *
 * `scripts/tokenize-colors.mjs` holds the same table and applies it. The two are
 * kept in step by `designSystemAdoption.test.ts`, which asserts that the app
 * contains no remaining `[#hex]` colour utility.
 */

import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export const LEGACY_HEX_MAP: Record<string, string> = {
  // white
  "#FFFFFF": "white",
  // amber-100
  "#FEEFC3": "amber-100", "#FEF0C7": "amber-100", "#FEF3C7": "amber-100",
  // amber-50
  "#FEF7E0": "amber-50", "#FFFBEB": "amber-50",
  // amber-600
  "#D97706": "amber-600", "#F9AB00": "amber-600", "#FBBC04": "amber-600",
  "#FF9500": "amber-600",
  // amber-700
  "#92400E": "amber-700", "#B06000": "amber-700", "#B45309": "amber-700",
  "#C2410C": "amber-700", "#C97100": "amber-700", "#E37400": "amber-700",
  // blue-200
  "#8AB4F8": "blue-200", "#A8C7FA": "blue-200", "#BFDBFE": "blue-200",
  "#D2E3FC": "blue-200", "#D2E3FD": "blue-200",
  // blue-50
  "#E8F0FE": "blue-50", "#F4F8FE": "blue-50",
  // blue-500
  "#3B82F6": "blue-500", "#4A86E8": "blue-500",
  // blue-600
  "#0070C4": "blue-600", "#0071E3": "blue-600", "#0077ED": "blue-600",
  "#007AFF": "blue-600", "#1A73E8": "blue-600", "#2563EB": "blue-600",
  "#4285F4": "blue-600",
  // blue-700
  "#0062CC": "blue-700", "#1557B0": "blue-700", "#174EA6": "blue-700",
  "#1765CC": "blue-700", "#185ABC": "blue-700", "#1D4ED8": "blue-700",
  // cyan-50
  "#38BDF8": "cyan-50", "#CFFAFE": "cyan-50", "#E0F2FE": "cyan-50",
  "#ECFEFF": "cyan-50",
  // cyan-700
  "#0284C7": "cyan-700", "#0891B2": "cyan-700", "#0E7490": "cyan-700",
  // emerald-100
  "#CEEAD6": "emerald-100", "#D1FAE5": "emerald-100",
  // emerald-400
  "#4ADE80": "emerald-400", "#81C995": "emerald-400", "#A8DAB5": "emerald-400",
  "#BBF7D0": "emerald-400",
  // emerald-50
  "#E6F4EA": "emerald-50", "#F0FDF4": "emerald-50",
  // emerald-600
  "#059669": "emerald-600", "#34A853": "emerald-600", "#34C759": "emerald-600",
  // emerald-700
  "#047857": "emerald-700", "#0D5926": "emerald-700", "#0F5A27": "emerald-700",
  "#137333": "emerald-700", "#15803D": "emerald-700", "#166534": "emerald-700",
  "#188038": "emerald-700", "#1E8E3E": "emerald-700", "#248A3D": "emerald-700",
  // emerald-800
  "#0D652D": "emerald-800",
  // purple-300
  "#A78BFA": "purple-300", "#C4B5FD": "purple-300", "#DDD6FE": "purple-300",
  "#E9D5FF": "purple-300",
  // purple-50
  "#EDE9FE": "purple-50", "#F3E8FD": "purple-50", "#F5F3FF": "purple-50",
  // purple-600
  "#7C3AED": "purple-600", "#7E22CE": "purple-600", "#8430CE": "purple-600",
  "#9333EA": "purple-600",
  // rose-200
  "#F5C2C7": "rose-200", "#F6C3C0": "rose-200", "#FAD2CF": "rose-200",
  "#FECACA": "rose-200", "#FEE2E2": "rose-200",
  // rose-50
  "#FCE8E6": "rose-50", "#FEF2F2": "rose-50", "#FFF1F2": "rose-50",
  "#FFF8F6": "rose-50",
  // rose-500
  "#E66767": "rose-500", "#F28B82": "rose-500",
  // rose-700
  "#7F0000": "rose-700", "#A50E0E": "rose-700", "#B71C1C": "rose-700",
  "#C5221F": "rose-700", "#D93025": "rose-700", "#DC2626": "rose-700",
  "#E11D48": "rose-700", "#EA4335": "rose-700",
  // slate-100
  "#F0F2F5": "slate-100", "#F1F3F4": "slate-100", "#F1F5F9": "slate-100",
  "#F2F2F7": "slate-100", "#F3F4F6": "slate-100", "#F5F5F7": "slate-100",
  // slate-200
  "#DADCE0": "slate-200", "#E0E0E0": "slate-200", "#E0E2E6": "slate-200",
  "#E2E8F0": "slate-200", "#E5E5EA": "slate-200", "#E6E6E6": "slate-200",
  "#E8EAED": "slate-200", "#EDEDED": "slate-200",
  // slate-300
  "#BDC1C6": "slate-300", "#C4C7C5": "slate-300", "#C7C7CC": "slate-300",
  "#D1D5DB": "slate-300", "#D2D2D7": "slate-300", "#D4D4D8": "slate-300",
  "#D6D9DE": "slate-300",
  // slate-400
  "#80868B": "slate-400", "#86868B": "slate-400", "#8C8C8C": "slate-400",
  "#8E8E93": "slate-400", "#94A3B8": "slate-400", "#9AA0A6": "slate-400",
  "#9CA3AF": "slate-400",
  // slate-50
  "#F7F7F9": "slate-50", "#F7F7FA": "slate-50", "#F8F9FA": "slate-50",
  "#F8FAFC": "slate-50", "#F8FAFF": "slate-50", "#F9F9FB": "slate-50",
  "#F9FAFB": "slate-50", "#FAFAFA": "slate-50", "#FAFAFC": "slate-50",
  // slate-500
  "#5F6368": "slate-500", "#636366": "slate-500", "#64748B": "slate-500",
  "#68707A": "slate-500", "#6B7280": "slate-500", "#70757A": "slate-500",
  "#71717A": "slate-500",
  // slate-600
  "#4B5563": "slate-600",
  // slate-700
  "#334155": "slate-700", "#374151": "slate-700", "#37474F": "slate-700",
  "#3A3A3C": "slate-700", "#3C4043": "slate-700",
  // slate-800
  "#1E293B": "slate-800", "#1F2937": "slate-800", "#263238": "slate-800",
  "#27272A": "slate-800",
  // slate-900
  "#0F172A": "slate-900", "#111827": "slate-900", "#18181B": "slate-900",
  "#1A1A1A": "slate-900", "#1C1C1E": "slate-900", "#1D1D1F": "slate-900",
  "#1E1E1E": "slate-900", "#202124": "slate-900",
  // slate-950
  "#000000": "slate-950", "#050811": "slate-950", "#09090B": "slate-950",
  "#090A0F": "slate-950", "#0A0E17": "slate-950",

  // dark reading-room palette (PACS workstation)
"#0D0F13": "zinc-950", "#15181D": "zinc-900", "#1A1D23": "zinc-800", "#242830": "zinc-700", "#2F6FB5": "blue-600", "#4A90D9": "blue-400", "#12211A": "emerald-950", "#241C10": "amber-950",
};

/**
 * Hexes that must stay literal.
 *
 * Empty by design: every colour utility in the app is now a token. A canvas or
 * chart that needs a real value imports `SURFACE` instead, so a deliberate
 * literal is an explicit, reviewable act rather than a leftover.
 */
export const PRESERVE_LITERAL_HEX = new Set<string>([]);

/**
 * The slate ramp as real hex values, for `<canvas>`, inline SVG and chart
 * libraries that cannot take a class name. Derived from the map above so canvas
 * drawing and CSS classes cannot drift apart.
 */
export const SURFACE: Readonly<Record<string, string>> = Object.freeze(
  Object.fromEntries(
    Object.entries(LEGACY_HEX_MAP)
      .filter(([, token]) => token.startsWith("slate-"))
      .map(([hex, token]) => [token.split("-")[1], hex])
  ) as Record<string, string>
);

/** Every distinct token in the contract, for tests and documentation. */
export const ALL_TOKENS: readonly string[] = Object.freeze(
  Object.keys(LEGACY_HEX_MAP).reduce<string[]>((acc, hex) => {
    const token = LEGACY_HEX_MAP[hex];
    if (acc.indexOf(token) === -1) acc.push(token);
    return acc;
  }, [])
);

/**
 * Resolve one hex to its token suffix, or null when it is not in the contract.
 * A null result means "leave it alone and ask why it exists".
 */
export function tokenForHex(hex: string): string | null {
  const key = hex.toUpperCase();
  if (PRESERVE_LITERAL_HEX.has(key)) return null;
  return LEGACY_HEX_MAP[key] ?? null;
}
