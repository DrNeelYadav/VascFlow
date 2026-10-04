/**
 * HOROS / Syngo.Via workstation design tokens.
 *
 * Single source of truth for the desktop chrome. Every colour, gap, type step
 * and fixed control size used by the menu bar, study list, series tree, tool
 * panel, layout picker and status bar is declared here and nowhere else, so
 * the workstation reads as one instrument instead of a pile of hand-tuned
 * panels.
 *
 * The palette is deliberately desaturated near-black through mid grey. This is
 * a reading room at three in the morning. The only saturated colour anywhere in
 * the chrome is the single selection / active-tool accent; the one status hue is
 * a muted instrument amber used only when the PACS cannot be reached.
 *
 * No gradients, no shadows, no rounded corners beyond 1-2px, because HOROS is a
 * flat medical instrument and rounded cards read as a consumer app.
 */

import type { HorosLayoutMode, HorosToolMode } from "./horosTypes";

export type { HorosLayoutMode, HorosToolMode };

/**
 * The workstation palette.
 *
 * `chrome` is the application frame (menu bar, status bar, panel headers),
 * `panel` is the working surface of the side panels, `control` is a raised
 * control, `hairline` is the 1px border that separates every region.
 */
export const HOROS_COLORS = {
  /** Application frame: menu bar, status bar, panel headers. */
  chrome: "#1e1e1e",
  /** Slightly lighter frame used for menu bars sitting on the chrome. */
  chromeRaised: "#242424",
  /** Working surface of the left and right panels. */
  panel: "#2b2b2b",
  /** Recessed strip behind column headers and inert rows. */
  panelSunken: "#242424",
  /** A panel row under the pointer. */
  panelRaised: "#333333",
  /** A raised control at rest. */
  control: "#3a3a3a",
  /** A raised control under the pointer. */
  controlHover: "#454545",
  /** A control that is held down. */
  controlPressed: "#303030",
  /** The 1px separator used everywhere. */
  hairline: "#4a4a4a",
  /** The dark 1px seam used where a surface is recessed. */
  hairlineDark: "#131313",
  /** The image area. DICOM pixels are black, not grey. */
  viewport: "#000000",
  /** Patient and study text: high contrast off-white. */
  text: "#e8e8e8",
  /** Secondary text: column headers, field labels. */
  textMuted: "#a0a0a0",
  /** Tertiary text: hints and units. */
  textDim: "#757575",
  /** Quaternary text: disabled affordances and the em-dash empty state. */
  textFaint: "#565656",
  /** The single accent. Selection, active tool, active layout preset. */
  accent: "#5b93c7",
  /** Accent under the pointer. */
  accentHover: "#6ea3d4",
  /** Accent held down. */
  accentPressed: "#3d6d9b",
  /** Text drawn on the accent. */
  accentText: "#f4f8fc",
  /** Secondary text drawn on the accent, e.g. a study description. */
  accentTextMuted: "#c3d7ea",
  /** Accent at low intensity, for selected row fills. */
  accentWash: "#24384c",
  /** Muted instrument amber. PACS unreachable, incomplete series. */
  alert: "#c08a3e",
  /** Alert at low intensity, for unreachable row fills. */
  alertWash: "#33281a",
} as const;

export type HorosColorToken = keyof typeof HOROS_COLORS;

/**
 * Type scale.
 *
 * 9-12px throughout. The mono stack is not decoration: UIDs, frame counters,
 * window/level and pixel geometry are the numbers a radiologist checks, and
 * they must hold a fixed width so digits do not dance as values change.
 */
export const HOROS_FONT = {
  sans: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  mono: 'Consolas, "DejaVu Sans Mono", "Liberation Mono", "Courier New", monospace',
  /** Badge glyphs, unit hints, column micro-labels. */
  micro: 9,
  /** Column headers, secondary row text, tool shortcut hints. */
  tiny: 10,
  /** Row primary text, menu item labels. This is the body size. */
  small: 11,
  /** Row primary text in the active row, section titles. */
  base: 12,
  /** Menu bar group labels, status bar primary readouts. */
  medium: 13,
  lineDense: 1.15,
  lineTight: 1.3,
  lineNormal: 1.45,
  weightRegular: 400,
  weightMedium: 600,
  weightBold: 700,
  trackWide: "0.06em",
  trackWider: "0.14em",
} as const;

/**
 * Spacing steps. Everything in the chrome is 2/4/6/8/12/16px; there is no
 * generous whitespace anywhere, because native desktop density is the point.
 */
export const HOROS_SPACE = {
  xxs: 2,
  xs: 4,
  sm: 6,
  md: 8,
  lg: 12,
  xl: 16,
} as const;

/** Fixed control geometry, in pixels. */
export const HOROS_SIZE = {
  /** Every border in the chrome. */
  hairline: 1,
  /** The only corner radius in the chrome. */
  radius: 2,
  menuBar: 24,
  statusBar: 20,
  panelHeader: 20,
  menuItem: 20,
  control: 20,
  controlDense: 18,
  /** Two-line study row. */
  studyRow: 30,
  /** Single-line series or instance row. */
  seriesRow: 19,
  /** Left column: study list over series tree. */
  leftPanel: 268,
  /** Right column: tool stack. */
  rightPanel: 152,
  /** Modality badge box. */
  badgeWidth: 22,
  badgeHeight: 13,
} as const;

/**
 * Viewport grid layouts.
 *
 * Named the way a PACS names them, and the geometry is stated explicitly so the
 * label is never ambiguous: `2x1` is two columns by one row, `1x2` is one
 * column by two rows. HOROS convention is 2x2 for cross-sectional data and 1x1
 * for projectional fluoro.
 */
export interface HorosLayoutSpec {
  /** The layout mode this spec describes. */
  readonly mode: HorosLayoutMode;
  /** Label as shown on the preset button. */
  readonly label: string;
  readonly columns: number;
  readonly rows: number;
  /** Number of viewport slots in the grid. */
  readonly slots: number;
  /** CSS grid template for the viewport area. */
  readonly template: string;
  /** Tooltip text, naming the geometry in words. */
  readonly hint: string;
  /** Digit that selects this layout, as implemented in the shell key handler. */
  readonly shortcut: string;
}

function spec(
  mode: HorosLayoutMode,
  label: string,
  columns: number,
  rows: number,
  shortcut: string,
  hint: string,
): HorosLayoutSpec {
  return {
    mode,
    label,
    columns,
    rows,
    slots: columns * rows,
    template: `repeat(${columns}, minmax(0, 1fr)) / repeat(${rows}, minmax(0, 1fr))`,
    hint,
    shortcut,
  };
}

/** Every layout the chrome can switch between, in menu order. */
export const HOROS_LAYOUTS: Readonly<Record<HorosLayoutMode, HorosLayoutSpec>> = {
  "1x1": spec("1x1", "1x1", 1, 1, "1", "One viewport, one column by one row"),
  "2x1": spec("2x1", "2x1", 2, 1, "2", "Two viewports side by side"),
  "1x2": spec("1x2", "1x2", 1, 2, "3", "Two viewports stacked"),
  "2x2": spec("2x2", "2x2", 2, 2, "4", "Four viewports in a quad"),
  "3x3": spec("3x3", "3x3", 3, 3, "5", "Nine viewports"),
};

/** Layout presets in the order the menu bar shows them. */
export const HOROS_LAYOUT_ORDER: readonly HorosLayoutMode[] = [
  "1x1",
  "2x1",
  "1x2",
  "2x2",
  "3x3",
];

/** The layout a study of the given modalities opens in. */
export function defaultLayoutForModality(modalities: readonly string[]): HorosLayoutMode {
  // Projectional modalities read best in a single large viewport; everything
  // cross-sectional reads best in a quad.
  const projectional = new Set(["CR", "DX", "XA", "RF", "MG", "NM", "PT"]);
  return modalities.some((m) => projectional.has(m.toUpperCase())) ? "1x1" : "2x2";
}

/**
 * The keyboard map the chrome advertises.
 *
 * These are not decoration: `HorosAppShell` installs a key handler that performs
 * exactly these actions, so a hint printed in the menu bar or next to a tool is
 * always true. Tool letters are the single source for both the tool panel
 * hints and the key handler.
 */
export const HOROS_TOOL_SHORTCUTS: Readonly<Record<HorosToolMode, string>> = {
  none: "Esc",
  windowLevel: "W",
  zoom: "Z",
  pan: "P",
  rotate: "R",
  stackScroll: "S",
  length: "M",
  angle: "A",
  region: "B",
  probe: "V",
};

/** Action shortcuts, keyed by the command they fire. */
export const HOROS_ACTION_SHORTCUTS = {
  invert: "I",
  flipHorizontal: "H",
  flipVertical: "J",
  rotateLeft: "[",
  rotateRight: "]",
  rotateReset: "\\",
  zoomIn: "+",
  zoomOut: "-",
  zoomToFit: "0",
  actualSize: "9",
  windowLevelReset: "C",
  firstImage: "Home",
  lastImage: "End",
  previousImage: "ArrowUp",
  nextImage: "ArrowDown",
  cinePlay: "Space",
  deleteLastMeasurement: "Del",
  clearMeasurements: "X",
  refresh: "F5",
  fullScreen: "F11",
} as const;

/** The hint strip printed at the right end of the menu bar. */
export const HOROS_MENU_BAR_HINTS: readonly string[] = [
  "1-5 Layout",
  "W/L Zoom Pan",
  "Wheel Scroll",
  "Right-drag Pan",
];
