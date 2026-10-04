"use client";

/**
 * The one place this folder touches the viewport engine.
 *
 * Every other component in `horos/` is chrome: panels, menus, buttons. The
 * pixels live in Agent 7's viewport files, which are written separately. This
 * adapter is the single seam between the two, and it takes the viewport
 * component as a prop rather than importing it, so:
 *
 *  - this folder compiles and renders on its own, before any viewport file
 *    exists, with no stub file and no dynamic import;
 *  - a change to the viewport's props is a type error here and in the page, not
 *    a runtime blank rectangle;
 *  - nothing outside this file knows that a viewport component exists.
 *
 * Wiring, in the page that mounts the shell:
 *
 * ```tsx
 * import { StudyViewport } from "@/app/components/imaging/horos/StudyViewport";
 *
 * <HorosAppShell
 *   ...
 *   ViewportComponent={StudyViewport}
 *   onViewportReadout={setReadouts}
 * />
 * ```
 *
 * The expected prop shape is `HorosViewportSlotProps` in `./horosTypes`.
 *
 * Until that component is passed in, the grid still lays out at the right
 * geometry and every slot says, in as many words, that no viewport is mounted.
 * An empty black rectangle would be a lie: it would look like a rendering
 * failure rather than a missing component.
 */

import React from "react";
import { HOROS_COLORS, HOROS_FONT, HOROS_LAYOUTS, HOROS_SIZE, HOROS_SPACE } from "./horosTokens";
import type {
  HorosCineState,
  HorosLayoutMode,
  HorosSeriesRow,
  HorosToolMode,
  HorosViewportComponent,
  HorosViewportReadout,
} from "./horosTypes";
import { HOROS_DASH, countText } from "./horosFormat";
import { viewportSurfaceStyle } from "./horosStyles";

const C = HOROS_COLORS;
const F = HOROS_FONT;
const S = HOROS_SIZE;
const P = HOROS_SPACE;

export interface HorosViewportAdapterProps {
  layoutMode: HorosLayoutMode;
  /** The viewport component, supplied by the page. Null while unwired. */
  ViewportComponent: HorosViewportComponent | null;
  activeTool: HorosToolMode;
  /** The series to display, or null. */
  series: HorosSeriesRow | null;
  /** ImageIds for the open series, in stack order. May be empty. */
  imageIds: readonly string[];
  selectedInstanceId: string | null;
  isInverted: boolean;
  cine: HorosCineState;
  /** Readouts by slot index, as reported by the mounted viewports. */
  readouts: ReadonlyMap<number, HorosViewportReadout>;
  /** Zero-based index of the slot that has focus. */
  activeSlotIndex: number;
  /** Slice the shell has asked for, or null when it is not asking. */
  requestedImageIndex: number | null;
  /** Frame the cine player should show, or null when playback is stopped. */
  requestedCineFrame: number | null;
  onSlotFocus: (slotIndex: number) => void;
  onReadout: (readout: HorosViewportReadout) => void;
  onImageIndexChange: (slotIndex: number, imageIndex: number) => void;
  /** Pixels are on the way. */
  loading: boolean;
  className?: string;
}

/** The per-slot caption strip above a viewport, the PACS split-screen header. */
function SlotHeader({
  readout,
  slotIndex,
  active,
  playing,
  emptyMessage,
}: {
  readout: HorosViewportReadout | undefined;
  slotIndex: number;
  active: boolean;
  playing: boolean;
  emptyMessage: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: P.xs,
        height: S.controlDense,
        padding: `0 ${P.sm}px`,
        backgroundColor: C.chrome,
        borderBottom: `1px solid ${C.hairlineDark}`,
        color: active ? C.accent : C.textDim,
        fontFamily: F.mono,
        fontSize: F.micro,
        whiteSpace: "nowrap",
        overflow: "hidden",
        flex: "0 0 auto",
      }}
    >
      <span style={{ flex: "0 0 auto", color: active ? C.accent : C.textFaint }}>
        {slotIndex + 1}
      </span>
      <span className="horos-truncate" style={{ flex: "1 1 auto" }}>
        {readout && readout.isLoaded
          ? `${readout.modality ?? HOROS_DASH}  ${readout.seriesDescription ?? HOROS_DASH}`
          : emptyMessage}
      </span>
      {readout && readout.isLoaded ? (
        <span style={{ flex: "0 0 auto", fontVariantNumeric: "tabular-nums" }}>
          {readout.imageCount > 0 ? `${readout.imageIndex + 1}/${readout.imageCount}` : HOROS_DASH}
        </span>
      ) : null}
      {playing && active ? (
        <span
          title="Cine playback is running"
          style={{
            flex: "0 0 auto",
            color: C.accent,
            fontFamily: F.sans,
            fontWeight: F.weightBold,
            letterSpacing: F.trackWide,
          }}
        >
          PLAY
        </span>
      ) : null}
    </div>
  );
}

export function HorosViewportAdapter({
  layoutMode,
  ViewportComponent,
  activeTool,
  series,
  imageIds,
  selectedInstanceId,
  isInverted,
  cine,
  readouts,
  activeSlotIndex,
  requestedImageIndex,
  requestedCineFrame,
  onSlotFocus,
  onReadout,
  onImageIndexChange,
  loading,
  className,
}: HorosViewportAdapterProps) {
  const spec = HOROS_LAYOUTS[layoutMode];
  const slots = Array.from({ length: spec.slots }, (_, index) => index);

  return (
    <div
      style={{
        ...viewportSurfaceStyle,
        gridTemplateColumns: `repeat(${spec.columns}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${spec.rows}, minmax(0, 1fr))`,
      }}
      className={className}
    >
      {slots.map((slotIndex) => {
        const readout = readouts.get(slotIndex);
        const active = slotIndex === activeSlotIndex;
        const hasImageInSlot = imageIds.length > 0;

        // The reason a slot is black, stated plainly. Never a generic "no data":
        // the user needs to know whether the PACS is empty, the study has no
        // series, or nothing has been selected at all.
        const emptyMessage = !ViewportComponent
          ? "Viewport component not mounted"
          : !series
            ? "No series selected"
            : !hasImageInSlot
              ? loading
                ? "Reading instances..."
                : series.instances.length === 0
                  ? "Series has no instances in the PACS"
                  : "No image decoded yet"
              : "";

        return (
          <div
            key={slotIndex}
            onMouseDown={() => onSlotFocus(slotIndex)}
            style={{
              display: "flex",
              flexDirection: "column",
              minWidth: 0,
              minHeight: 0,
              overflow: "hidden",
              backgroundColor: C.viewport,
              border: `1px solid ${active ? C.accent : C.hairlineDark}`,
            }}
          >
            <SlotHeader
              readout={readout}
              slotIndex={slotIndex}
              active={active}
              playing={cine.isPlaying}
              emptyMessage={emptyMessage}
            />

            <div style={{ position: "relative", flex: "1 1 auto", minHeight: 0, backgroundColor: C.viewport }}>
              {ViewportComponent ? (
                <ViewportComponent
                  slotIndex={slotIndex}
                  slotCount={spec.slots}
                  layoutMode={layoutMode}
                  imageIds={imageIds}
                  activeTool={activeTool}
                  series={series}
                  selectedInstanceId={selectedInstanceId}
                  isInverted={isInverted}
                  requestedImageIndex={requestedImageIndex}
                  requestedCineFrame={requestedCineFrame}
                  emptyMessage={hasImageInSlot ? null : emptyMessage}
                  onReadout={onReadout}
                  onSlotFocus={onSlotFocus}
                  onImageIndexChange={onImageIndexChange}
                />
              ) : (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: P.xs,
                    padding: P.md,
                    textAlign: "center",
                    color: C.textFaint,
                    fontFamily: F.sans,
                    fontSize: F.tiny,
                  }}
                >
                  <span style={{ color: C.textDim, fontWeight: F.weightBold, letterSpacing: F.trackWide }}>
                    NO VIEWPORT MOUNTED
                  </span>
                  <span style={{ fontFamily: F.mono, fontSize: F.micro, maxWidth: 320 }}>
                    Pass the viewport component as ViewportComponent to render pixels in this
                    slot. Until then the grid still reports its real geometry: {spec.label},
                    {spec.slots} {spec.slots === 1 ? "slot" : "slots"}.
                  </span>
                  <span style={{ fontFamily: F.mono, fontSize: F.micro }}>
                    {series
                      ? `series ${series.seriesNumber ?? HOROS_DASH}  ${
                          series.seriesInstanceUid ?? "no UID"
                        }  ${countText(imageIds.length)} imageIds`
                      : "no series selected"}
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HorosViewportAdapter;
