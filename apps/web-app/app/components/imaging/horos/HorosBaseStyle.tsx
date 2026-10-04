"use client";

/**
 * The interactive half of the HOROS design system.
 *
 * Inline styles carry the resting appearance of every control, because that
 * keeps the palette in `horosTokens` where it belongs. Interaction states -
 * hover, pressed, focus ring, scrollbars - cannot be expressed inline, so they
 * live here as CSS custom properties resolved from the same tokens.
 *
 * The result is that no component in this folder contains a hex literal, and
 * every control still behaves like a native control: it lights up under the
 * pointer, darkens when pressed, and shows a 1px accent ring on keyboard focus.
 *
 * `<HorosBaseStyle />` renders once, at the top of `HorosAppShell`. Every
 * surface must carry `horosThemeStyle`, which is what binds the custom
 * properties; the shell puts it on its own root so all descendants inherit.
 */

import React from "react";
import type { CSSProperties } from "react";
import { HOROS_COLORS } from "./horosTokens";

const C = HOROS_COLORS;

/**
 * Custom properties bound from the palette.
 *
 * Spread onto the shell root. React requires the index signature for custom
 * properties, hence the cast.
 */
export const horosThemeStyle = {
  "--horos-chrome": C.chrome,
  "--horos-panel": C.panel,
  "--horos-panel-sunken": C.panelSunken,
  "--horos-panel-raised": C.panelRaised,
  "--horos-control": C.control,
  "--horos-control-hover": C.controlHover,
  "--horos-control-pressed": C.controlPressed,
  "--horos-hairline": C.hairline,
  "--horos-hairline-dark": C.hairlineDark,
  "--horos-text": C.text,
  "--horos-text-muted": C.textMuted,
  "--horos-text-dim": C.textDim,
  "--horos-text-faint": C.textFaint,
  "--horos-accent": C.accent,
  "--horos-accent-hover": C.accentHover,
  "--horos-accent-pressed": C.accentPressed,
  "--horos-accent-text": C.accentText,
  "--horos-alert": C.alert,
} as unknown as CSSProperties;

/**
 * The interaction rules.
 *
 * Deliberately short. Anything longer than a hover colour in an instrument UI
 * is decoration, and decoration in a PACS is a distraction at the reading
 * station.
 */
const HOROS_BASE_CSS = `
.horos-row:hover { background-color: var(--horos-panel-raised); }
.horos-row.horos-row--selected { background-color: var(--horos-accent); }
.horos-row.horos-row--selected:hover { background-color: var(--horos-accent-hover); }
.horos-row:focus-visible { outline: 1px solid var(--horos-accent); outline-offset: -2px; }

.horos-btn:hover:not(:disabled) { background-color: var(--horos-control-hover); }
.horos-btn:active:not(:disabled) { background-color: var(--horos-control-pressed); }
.horos-btn--active,
.horos-btn--active:hover:not(:disabled) { background-color: var(--horos-accent); }
.horos-btn--active:active:not(:disabled) { background-color: var(--horos-accent-pressed); }
.horos-btn--toggled,
.horos-btn--toggled:hover:not(:disabled) { background-color: var(--horos-accent); }

.horos-col:hover:not(:disabled) { background-color: var(--horos-panel-raised); color: var(--horos-text); }
.horos-col:disabled { color: var(--horos-text-faint); cursor: default; }

.horos-menu-trigger:hover:not(:disabled) { background-color: var(--horos-control); }
.horos-menu-trigger[aria-expanded="true"] { background-color: var(--horos-control-pressed); }
.horos-menu-item:hover:not(:disabled) { background-color: var(--horos-accent); color: var(--horos-accent-text); }
.horos-menu-item:disabled { color: var(--horos-text-faint); cursor: default; }

.horos-input:focus { border-color: var(--horos-accent); }
.horos-input::placeholder { color: var(--horos-text-faint); }

.horos-btn:focus-visible,
.horos-col:focus-visible,
.horos-menu-trigger:focus-visible,
.horos-menu-item:focus-visible,
.horos-input:focus-visible {
  outline: 1px solid var(--horos-accent);
  outline-offset: -1px;
}

.horos-scroll { scrollbar-width: thin; scrollbar-color: var(--horos-control) var(--horos-chrome); }
.horos-scroll::-webkit-scrollbar { width: 10px; height: 10px; }
.horos-scroll::-webkit-scrollbar-track { background-color: var(--horos-chrome); }
.horos-scroll::-webkit-scrollbar-thumb {
  background-color: var(--horos-control);
  border: 1px solid var(--horos-chrome);
}
.horos-scroll::-webkit-scrollbar-thumb:hover { background-color: var(--horos-control-hover); }

.horos-truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; min-width: 0; }
.horos-pip { flex: 0 0 auto; width: 6px; height: 6px; border: 1px solid var(--horos-hairline-dark); }
`;

/**
 * Renders the interaction rulesheet. Emitted once by the shell; the content is
 * a constant, so this is safe to render more than once.
 */
export function HorosBaseStyle() {
  return <style dangerouslySetInnerHTML={{ __html: HOROS_BASE_CSS }} />;
}

export default HorosBaseStyle;
