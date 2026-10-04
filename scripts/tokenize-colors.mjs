/**
 * Codemod: replace legacy hex Tailwind utilities with design tokens.

Mechanical, class-name-only transformation. It rewrites utilities of the form
`<prefix>-[#HEX]` (including an optional `/opacity` suffix) to `<prefix>-<token>`
using app/lib/colorTokens.ts. It never touches a hex that is not part of such a
utility, so chart palettes, inline styles and data values are left alone.

Run:  node scripts/tokenize-colors.mjs [--dry] [path ...]
 */

import { readFileSync, writeFileSync } from "node:fs";
import { relative, resolve } from "node:path";

// Prefixes that take a colour, including directional border/divide variants.
// Anything omitted here (w-, h-, top-, grid-) is a dimension utility, where
// `[#...]` would be meaningless and must not match.
//
// `shadow` is deliberately excluded. Tailwind's `shadow-<colour>` form means a
// *coloured* shadow (ring-box-shadow with a colour), so rewriting
// `shadow-[#1A73E8]` to `shadow-blue-600` silently changes the intent from
// "that blur and offset, in blue" to "a blue-tinted shadow". A shadow written
// as `shadow-[0_0_8px_#1A73E8]` must be reviewed by a human, not mapped by a
// regex. No file in the app currently uses that form.
const PREFIX_PATTERN =
  "(?:bg|text|border(?:-[trblyxy])?|ring(?:-offset)?|fill|stroke|from|to|via|" +
  "divide(?:-[xy])?|outline|placeholder|decoration|accent)";

// bg-[#1A73E8], text-[#5F6368]/10, border-t-[#DADCE0]
const UTILITY_RE = new RegExp(
  `\\b(${PREFIX_PATTERN})-\\[(#[0-9A-Fa-f]{3,8})\\](/\\d{1,3})?`,
  "g"
);

const HEX_MAP = {
  // amber-100
  "#FEEFC3": "amber-100", "#FEF0C7": "amber-100", "#FEF3C7": "amber-100",
  // amber-50
  "#FEF7E0": "amber-50", "#FFFBEB": "amber-50",
  // amber-600
  "#D97706": "amber-600", "#F9AB00": "amber-600", "#FBBC04": "amber-600", "#FF9500": "amber-600",
  // amber-700
  "#92400E": "amber-700", "#B06000": "amber-700", "#B45309": "amber-700", "#C2410C": "amber-700",
  "#C97100": "amber-700", "#E37400": "amber-700",
  // blue-200
  "#8AB4F8": "blue-200", "#A8C7FA": "blue-200", "#BFDBFE": "blue-200", "#D2E3FC": "blue-200",
  "#D2E3FD": "blue-200",
  // blue-50
  "#E8F0FE": "blue-50", "#F4F8FE": "blue-50",
  // blue-500
  "#3B82F6": "blue-500", "#4A86E8": "blue-500",
  // blue-600
  "#0070C4": "blue-600", "#0071E3": "blue-600", "#0077ED": "blue-600", "#007AFF": "blue-600",
  "#1A73E8": "blue-600", "#2563EB": "blue-600", "#4285F4": "blue-600",
  // blue-700
  "#0062CC": "blue-700", "#1557B0": "blue-700", "#174EA6": "blue-700", "#1765CC": "blue-700",
  "#185ABC": "blue-700", "#1D4ED8": "blue-700",
  // cyan-50
  "#38BDF8": "cyan-50", "#CFFAFE": "cyan-50", "#E0F2FE": "cyan-50", "#ECFEFF": "cyan-50",
  // cyan-700
  "#0284C7": "cyan-700", "#0891B2": "cyan-700", "#0E7490": "cyan-700",
  // emerald-100
  "#CEEAD6": "emerald-100", "#D1FAE5": "emerald-100",
  // emerald-400
  "#4ADE80": "emerald-400", "#81C995": "emerald-400", "#A8DAB5": "emerald-400", "#BBF7D0": "emerald-400",
  // emerald-50
  "#E6F4EA": "emerald-50", "#F0FDF4": "emerald-50",
  // emerald-600
  "#059669": "emerald-600", "#34A853": "emerald-600", "#34C759": "emerald-600",
  // emerald-700
  "#047857": "emerald-700", "#0D5926": "emerald-700", "#0F5A27": "emerald-700", "#137333": "emerald-700",
  "#15803D": "emerald-700", "#166534": "emerald-700", "#188038": "emerald-700", "#1E8E3E": "emerald-700",
  "#248A3D": "emerald-700",
  // purple-300
  "#A78BFA": "purple-300", "#C4B5FD": "purple-300", "#DDD6FE": "purple-300", "#E9D5FF": "purple-300",
  // purple-50
  "#EDE9FE": "purple-50", "#F3E8FD": "purple-50", "#F5F3FF": "purple-50",
  // purple-600
  "#7C3AED": "purple-600", "#7E22CE": "purple-600", "#8430CE": "purple-600", "#9333EA": "purple-600",
  // rose-200
  "#F5C2C7": "rose-200", "#F6C3C0": "rose-200", "#FAD2CF": "rose-200", "#FECACA": "rose-200",
  "#FEE2E2": "rose-200",
  // rose-50
  "#FCE8E6": "rose-50", "#FEF2F2": "rose-50", "#FFF1F2": "rose-50",
  // rose-500
  "#E66767": "rose-500", "#F28B82": "rose-500",
  // rose-700
  "#7F0000": "rose-700", "#A50E0E": "rose-700", "#B71C1C": "rose-700", "#C5221F": "rose-700",
  "#D93025": "rose-700", "#DC2626": "rose-700", "#E11D48": "rose-700", "#EA4335": "rose-700",
  // slate-100
  "#F0F2F5": "slate-100", "#F1F3F4": "slate-100", "#F1F5F9": "slate-100", "#F2F2F7": "slate-100",
  "#F3F4F6": "slate-100", "#F5F5F7": "slate-100",
  // slate-200
  "#DADCE0": "slate-200", "#E0E0E0": "slate-200", "#E0E2E6": "slate-200", "#E2E8F0": "slate-200",
  "#E5E5EA": "slate-200", "#E6E6E6": "slate-200", "#E8EAED": "slate-200", "#EDEDED": "slate-200",
  // slate-300
  "#BDC1C6": "slate-300", "#C4C7C5": "slate-300", "#C7C7CC": "slate-300", "#D1D5DB": "slate-300",
  "#D2D2D7": "slate-300", "#D4D4D8": "slate-300", "#D6D9DE": "slate-300",
  // slate-400
  "#80868B": "slate-400", "#86868B": "slate-400", "#8C8C8C": "slate-400", "#8E8E93": "slate-400",
  "#94A3B8": "slate-400", "#9AA0A6": "slate-400",
  // slate-50
  "#F7F7F9": "slate-50", "#F7F7FA": "slate-50", "#F8F9FA": "slate-50", "#F8FAFC": "slate-50",
  "#F8FAFF": "slate-50", "#F9F9FB": "slate-50", "#F9FAFB": "slate-50", "#FAFAFA": "slate-50",
  "#FAFAFC": "slate-50",
  // slate-500
  "#5F6368": "slate-500", "#636366": "slate-500", "#64748B": "slate-500", "#68707A": "slate-500",
  "#6B7280": "slate-500", "#70757A": "slate-500", "#71717A": "slate-500",
  // slate-600
  "#4B5563": "slate-600",
  // slate-700
  "#334155": "slate-700", "#374151": "slate-700", "#37474F": "slate-700", "#3A3A3C": "slate-700",
  "#3C4043": "slate-700",
  // slate-800
  "#1E293B": "slate-800", "#1F2937": "slate-800", "#263238": "slate-800", "#27272A": "slate-800",
  // slate-900
  "#0F172A": "slate-900", "#111827": "slate-900", "#18181B": "slate-900", "#1A1A1A": "slate-900",
  "#1C1C1E": "slate-900", "#1D1D1F": "slate-900", "#1E1E1E": "slate-900", "#202124": "slate-900",
  // slate-950
  "#000000": "slate-950", "#050811": "slate-950", "#09090B": "slate-950", "#090A0F": "slate-950",
  "#0A0E17": "slate-950",
  // white
  "#FFFFFF": "white",
  "#9CA3AF": "slate-400",
  "#0D652D": "emerald-800",
  "#FFF8F6": "rose-50",
  // Dark reading-room palette, used by the PACS workstation. A cath lab is a
  // dim room, so the viewer is deliberately near-black: the radiogram has to be
  // the brightest thing on screen.
  // zinc-950
  "#0D0F13": "zinc-950",
  // zinc-900
  "#15181D": "zinc-900",
  // zinc-800
  "#1A1D23": "zinc-800",
  // zinc-700
  "#242830": "zinc-700",
  // blue-600
  "#2F6FB5": "blue-600",
  // blue-400
  "#4A90D9": "blue-400",
  // emerald-950
  "#12211A": "emerald-950",
  // amber-950
  "#241C10": "amber-950",
};

const args = process.argv.slice(2);
const dry = args.includes("--dry");
const targets = args.filter((a) => !a.startsWith("--"));
if (targets.length === 0) {
  console.error("usage: node scripts/tokenize-colors.mjs [--dry] <file...>");
  process.exit(2);
}

let totalReplacements = 0;
const unmapped = new Map();
const report = [];

for (const target of targets) {
  const abs = resolve(target);
  let source;
  try {
    source = readFileSync(abs, "utf-8");
  } catch {
    console.error(`skip (unreadable): ${target}`);
    continue;
  }

  let fileCount = 0;
  const seenInFile = new Map();

  const next = source.replace(UTILITY_RE, (match, prefix, hex, opacity) => {
    const token = HEX_MAP[hex.toUpperCase()];
    if (!token) {
      unmapped.set(hex.toUpperCase(), (unmapped.get(hex.toUpperCase()) ?? 0) + 1);
      return match;
    }
    fileCount += 1;
    seenInFile.set(hex.toUpperCase(), (seenInFile.get(hex.toUpperCase()) ?? 0) + 1);
    return `${prefix}-${token}${opacity ?? ""}`;
  });

  if (fileCount > 0) {
    totalReplacements += fileCount;
    report.push({ file: relative(process.cwd(), abs), count: fileCount, seen: seenInFile });
    if (!dry) writeFileSync(abs, next, "utf-8");
  }
}

report.sort((a, b) => b.count - a.count);
for (const r of report) {
  const detail = [...r.seen].map(([hex, n]) => `${hex}:${n}`).join(" ");
  console.log(`${String(r.count).padStart(4)}  ${r.file}  ${detail}`);
}
console.log(`\n${dry ? "[dry] " : ""}${totalReplacements} replacements across ${report.length} files`);

if (unmapped.size > 0) {
  console.log("\nunmapped hexes left as literals (add a mapping or accept them):");
  for (const [hex, n] of [...unmapped].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${hex}  x${n}`);
  }
}
