"use client";

/**
 * Layout preset picker.
 *
 * The five viewport grids a PACS workstation offers: 1x1 for projectional
 * fluoro, 2x2 for cross-sectional, 3x3 for a survey of a long study, and the
 * two split presets for comparison work.
 *
 * Each button carries a drawn grid glyph rather than an icon, because the glyph
 * is the label: a radiologist picks a layout by its shape, not by its name. The
 * geometry is stated in words in the tooltip, since `2x1` and `1x2` differ only
 * in which way round the two numbers are.
 */

import React from "react";
import {
  HOROS_COLORS,
  HOROS_FONT,
  HOROS_LAYOUTS,
  HOROS_LAYOUT_ORDER,
  HOROS_SIZE,
  HOROS_SPACE,
} from "./horosTokens";
import type { HorosLayoutMode } from "./horosTypes";
import { controlStyle } from "./horosStyles";

const C = HOROS_COLORS;
const F = HOROS_FONT;
const S = HOROS_SIZE;
const P = HOROS_SPACE;

export interface HorosLayoutPickerProps {
  layoutMode: HorosLayoutMode;
  onLayoutChange: (mode: HorosLayoutMode) => void;
  /** When false every preset is disabled, e.g. a study is still loading. */
  enabled?: boolean;
  className?: string;
}

/** Draws the grid a preset describes, in miniature. */
function LayoutGlyph({ mode, active }: { mode: HorosLayoutMode; active: boolean }) {
  const spec = HOROS_LAYOUTS[mode];
  const box = 13;
  const gap = 1;
  const cell = spec.columns * spec.rows > 4 ? 3 : 4;
  return (
    <span
      aria-hidden="true"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${spec.columns}, ${cell}px)`,
        gridTemplateRows: `repeat(${spec.rows}, ${cell}px)`,
        gap: `${gap}px`,
        width: box,
        height: box,
        alignContent: "center",
        justifyContent: "center",
        border: `1px solid ${active ? C.accent : C.hairline}`,
        backgroundColor: C.chrome,
        flex: "0 0 auto",
      }}
    >
      {Array.from({ length: spec.slots }, (_, i) => (
        <span
          key={i}
          style={{
            backgroundColor: active ? C.accent : C.textDim,
            display: "block",
          }}
        />
      ))}
    </span>
  );
}

export function HorosLayoutPicker({
  layoutMode,
  onLayoutChange,
  enabled = true,
  className,
}: HorosLayoutPickerProps) {
  return (
    <div
      role="radiogroup"
      aria-label="Viewport layout"
      style={{ display: "flex", alignItems: "center", gap: P.xxs, flex: "0 0 auto" }}
      className={className}
    >
      {HOROS_LAYOUT_ORDER.map((mode) => {
        const spec = HOROS_LAYOUTS[mode];
        const active = mode === layoutMode;
        return (
          <button
            key={mode}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={`${spec.label} layout, ${spec.hint}`}
            title={`${spec.label} - ${spec.hint}  [${spec.shortcut}]`}
            disabled={!enabled}
            onClick={() => onLayoutChange(mode)}
            style={{
              ...controlStyle,
              height: S.control,
              width: 34,
              padding: 0,
              gap: 0,
              backgroundColor: active ? C.accent : C.control,
              borderColor: active ? C.accent : C.hairline,
              color: active ? C.accentText : C.text,
              cursor: enabled ? "pointer" : "default",
              opacity: enabled ? 1 : 0.45,
            }}
          >
            <LayoutGlyph mode={mode} active={active} />
            <span
              style={{
                position: "absolute",
                width: 1,
                height: 1,
                overflow: "hidden",
                clipPath: "inset(50%)",
                whiteSpace: "nowrap",
              }}
            >
              {spec.label}
            </span>
          </button>
        );
      })}
      <span
        style={{
          color: C.textDim,
          fontFamily: F.mono,
          fontSize: F.micro,
          paddingLeft: P.xxs,
          whiteSpace: "nowrap",
        }}
      >
        {HOROS_LAYOUTS[layoutMode].label}
      </span>
    </div>
  );
}

export default HorosLayoutPicker;
