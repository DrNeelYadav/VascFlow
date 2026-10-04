/**
 * Shared style objects for the HOROS chrome.
 *
 * Every value here comes out of `horosTokens`. No hex literal appears in this
 * file or in any component: if a colour is needed that the tokens do not
 * declare, the token is added there first, which is what keeps the menu bar,
 * panels and status bar looking like parts of one machine.
 *
 * These are inline styles rather than Tailwind classes on purpose. Arbitrary
 * Tailwind values such as `text-[#e8e8e8]` would push the palette back into
 * the components and defeat the point of having tokens at all.
 */

import type { CSSProperties } from "react";
import { HOROS_COLORS, HOROS_FONT, HOROS_SIZE, HOROS_SPACE } from "./horosTokens";

const C = HOROS_COLORS;
const F = HOROS_FONT;
const S = HOROS_SIZE;
const P = HOROS_SPACE;

/** 1px border, the only border in the chrome. */
export const hairline = `1px solid ${C.hairline}`;

/** 1px dark seam, for recessed surfaces. */
export const seam = `1px solid ${C.hairlineDark}`;

/** The left and right panel surface. */
export const panelStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  minHeight: 0,
  height: "100%",
  overflow: "hidden",
  backgroundColor: C.panel,
  color: C.text,
  fontFamily: F.sans,
  fontSize: F.small,
  lineHeight: F.lineDense,
  borderRight: hairline,
};

/** A panel header: title, count, and an optional action. */
export const panelHeaderStyle: CSSProperties = {
  flex: "0 0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: P.xs,
  height: S.panelHeader,
  padding: `0 ${P.sm}px`,
  backgroundColor: C.chrome,
  borderBottom: hairline,
  color: C.textMuted,
  fontFamily: F.sans,
  fontSize: F.micro,
  fontWeight: F.weightBold,
  letterSpacing: F.trackWider,
  textTransform: "uppercase",
  whiteSpace: "nowrap",
  overflow: "hidden",
};

/** The recessed strip behind column headers. */
export const columnHeaderStyle: CSSProperties = {
  flex: "0 0 auto",
  display: "flex",
  alignItems: "center",
  height: S.controlDense,
  padding: `0 ${P.sm}px`,
  backgroundColor: C.panelSunken,
  borderBottom: hairline,
  color: C.textDim,
  fontFamily: F.sans,
  fontSize: F.micro,
  fontWeight: F.weightBold,
  letterSpacing: F.trackWide,
  textTransform: "uppercase",
  whiteSpace: "nowrap",
};

/** The scroll area of a panel. */
export const scrollAreaStyle: CSSProperties = {
  flex: "1 1 auto",
  minHeight: 0,
  overflowY: "auto",
  overflowX: "hidden",
  backgroundColor: C.panel,
  WebkitOverflowScrolling: "touch",
};

/** The bottom strip of a panel, carrying counts and the last sync time. */
export const panelFooterStyle: CSSProperties = {
  flex: "0 0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: P.xs,
  height: S.controlDense,
  padding: `0 ${P.sm}px`,
  backgroundColor: C.chrome,
  borderTop: hairline,
  color: C.textDim,
  fontFamily: F.mono,
  fontSize: F.micro,
  whiteSpace: "nowrap",
  overflow: "hidden",
};

/** A raised control at rest. */
export const controlStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: P.xxs,
  height: S.control,
  padding: `0 ${P.sm}px`,
  backgroundColor: C.control,
  color: C.text,
  border: hairline,
  borderRadius: S.radius,
  fontFamily: F.sans,
  fontSize: F.tiny,
  fontWeight: F.weightMedium,
  lineHeight: 1,
  whiteSpace: "nowrap",
  cursor: "pointer",
};

/** A control that is currently bound, e.g. the active tool. */
export const controlActiveStyle: CSSProperties = {
  ...controlStyle,
  backgroundColor: C.accent,
  borderColor: C.accent,
  color: C.accentText,
};

/** A control that is toggled on but is not the active tool. */
export const controlToggledStyle: CSSProperties = {
  ...controlStyle,
  backgroundColor: C.accentWash,
  borderColor: C.accent,
  color: C.accentText,
};

/** A control that cannot act right now. */
export const controlDisabledStyle: CSSProperties = {
  ...controlStyle,
  backgroundColor: C.panel,
  borderColor: C.hairlineDark,
  color: C.textFaint,
  cursor: "default",
};

/** The flat text field used by the study filter. */
export const inputStyle: CSSProperties = {
  flex: "1 1 auto",
  minWidth: 0,
  height: S.controlDense,
  padding: `0 ${P.xs}px`,
  backgroundColor: C.chrome,
  color: C.text,
  border: hairline,
  borderRadius: S.radius,
  fontFamily: F.sans,
  fontSize: F.tiny,
  lineHeight: 1,
  outline: "none",
};

/** Monospace, for UIDs, counters, window/level and pixel geometry. */
export const monoStyle: CSSProperties = {
  fontFamily: F.mono,
  fontVariantNumeric: "tabular-nums",
};

/** A read-only numeric field: WW, WL, zoom, slice position. */
export const readoutStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: P.xs,
  height: S.controlDense,
  padding: `0 ${P.xs}px`,
  backgroundColor: C.chrome,
  border: hairline,
  borderRadius: S.radius,
  color: C.text,
  fontFamily: F.mono,
  fontSize: F.tiny,
  fontVariantNumeric: "tabular-nums",
  whiteSpace: "nowrap",
  overflow: "hidden",
};

/** An upper-case field label sitting left of a readout. */
export const readoutLabelStyle: CSSProperties = {
  color: C.textDim,
  fontFamily: F.sans,
  fontSize: F.micro,
  fontWeight: F.weightBold,
  letterSpacing: F.trackWide,
  textTransform: "uppercase",
};

/** The 1px boxed modality badge. Outlined, never filled with a chip colour. */
export const badgeStyle: CSSProperties = {
  flex: "0 0 auto",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: S.badgeWidth,
  height: S.badgeHeight,
  border: hairline,
  borderRadius: 1,
  color: C.text,
  fontFamily: F.mono,
  fontSize: F.micro,
  fontWeight: F.weightBold,
  letterSpacing: "0.02em",
  lineHeight: 1,
};

/** The badge on the selected row, which takes the accent. */
export const badgeSelectedStyle: CSSProperties = {
  ...badgeStyle,
  borderColor: C.accent,
  backgroundColor: C.accentPressed,
  color: C.accentText,
};

/** A selected list row, the one place the accent fills. */
export const rowSelectedStyle: CSSProperties = {
  backgroundColor: C.accent,
  color: C.accentText,
};

/** A row at rest. */
export const rowStyle: CSSProperties = {
  backgroundColor: C.panel,
  color: C.text,
};

/** Section divider inside a panel. */
export const sectionRuleStyle: CSSProperties = {
  flex: "0 0 auto",
  height: 1,
  backgroundColor: C.hairline,
};

/** The small square status pip in the status bar and panel headers. */
export function pipStyle(color: string): CSSProperties {
  return {
    flex: "0 0 auto",
    width: 6,
    height: 6,
    backgroundColor: color,
    border: `1px solid ${C.hairlineDark}`,
  };
}

/** The empty and error states, which are the same block at three word weights. */
export const stateBlockStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: P.xs,
  padding: `${P.lg}px ${P.md}px`,
  color: C.textMuted,
  fontFamily: F.sans,
  fontSize: F.tiny,
  lineHeight: F.lineTight,
};

/** The viewport area: black, so the pixels decide the brightness. */
export const viewportSurfaceStyle: CSSProperties = {
  display: "grid",
  gap: 1,
  padding: 1,
  backgroundColor: C.hairlineDark,
  minWidth: 0,
  minHeight: 0,
  flex: "1 1 auto",
  overflow: "hidden",
};
