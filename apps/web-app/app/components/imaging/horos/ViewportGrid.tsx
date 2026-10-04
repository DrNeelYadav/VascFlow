"use client";

/**
 * THE VIEWPORT GRID.
 *
 * The centre of the workstation, and the thing that makes it a PACS rather
 * than an image browser: N viewports, each independently assigned a series, with
 * hairline dividers between them and a visible active slot.
 *
 * Three rules make it read as one instrument rather than a set of boxes:
 *
 *   - Dividers are 1px and the grid gap is 1px, showing the `hairlineDark`
 *     surface behind it. No card borders, no rounded corners, no shadows. A
 *     radiologist comparing two quadrants needs the seam to disappear and the
 *     pixels to be adjacent.
 *   - The active slot is marked with the single accent, as a 1px border and a
 *     numbered header. Which slot has the pointer must be readable without
 *     clicking.
 *   - Every slot carries a series selector, because a PACS comparison is
 *     usually "this series and that series", and making the user go back to the
 *     left panel to change one of them is the fastest way to make a comparison
 *     layout unusable.
 *
 * Default layout is clinical, not cosmetic: 2x2 for cross-sectional data and
 * 1x1 for projectional fluoro. That rule lives in `horosTokens`, so this
 * component applies it rather than re-deciding it.
 *
 * The grid knows nothing about Cornerstone. It passes `HorosViewportSlotProps`
 * straight through to whichever viewport component the shell supplies, and
 * renders a stated reason in a slot with no viewport component mounted rather
 * than a black rectangle that looks like a rendering failure.
 */

import React from "react";
import {
  HOROS_COLORS,
  HOROS_FONT,
  HOROS_LAYOUTS,
  HOROS_SIZE,
  HOROS_SPACE,
  defaultLayoutForModality,
} from "./horosTokens";
import type {
  HorosLayoutMode,
  HorosSeriesRow,
  HorosToolMode,
  HorosViewportComponent,
  HorosViewportReadout,
} from "./horosTypes";
import { HOROS_DASH, countText, text } from "./horosFormat";

const C = HOROS_COLORS;
const F = HOROS_FONT;
const S = HOROS_SIZE;
const P = HOROS_SPACE;

/** One slot's assignment: which series, and the stacks that go with it. */
export interface ViewportSlotAssignment {
  /** The series shown in this slot, or null when the slot is empty. */
  series: HorosSeriesRow | null;
  /** ImageIds for that series, in stack order. Empty when there is no series. */
  imageIds: readonly string[];
  /** The instance the tree has selected, or null. */
  selectedInstanceId: string | null;
  /** Slice this slot jumped to, or null. */
  requestedImageIndex: number | null;
  /** Frame the cine player asked for, or null. */
  requestedCineFrame: number | null;
  /** Why the slot is empty, or null when it holds a series. */
  emptyMessage: string | null;
  /** Greyscale inversion applied to this slot alone. */
  isInverted: boolean;
}

export interface ViewportGridProps {
  /**
   * The layout to render. When null the layout is resolved from `modalities` by
   * the contract's clinical rule: projectional fluoro opens 1x1, everything
   * else 2x2.
   */
  layoutMode: HorosLayoutMode | null;
  /** Modalities in the open study, used only when `layoutMode` is null. */
  modalities: readonly string[];
  /** The series available to assign, for the per-slot selector. */
  availableSeries: readonly HorosSeriesRow[];
  /** One entry per slot. Short entries leave trailing slots empty. */
  assignments: readonly ViewportSlotAssignment[];
  /** Zero-based index of the slot with the pointer. */
  activeSlotIndex: number;
  /** The tool the pointer is bound to. */
  activeTool: HorosToolMode;
  /** The viewport component. Null while unwired. */
  ViewportComponent: HorosViewportComponent | null;
  /** Readouts by slot index, as reported by the mounted viewports. */
  readouts: ReadonlyMap<number, HorosViewportReadout>;
  /** Assigns a different series to one slot. */
  onSelectSeries: (slotIndex: number, series: HorosSeriesRow | null) => void;
  onSlotFocus: (slotIndex: number) => void;
  onReadout: (readout: HorosViewportReadout) => void;
  onImageIndexChange: (slotIndex: number, imageIndex: number) => void;
  /** Pixels are on the way. Passed through so a slot can say so. */
  loading?: boolean;
  className?: string;
}

/**
 * The layout actually rendered.
 *
 * An explicit mode always wins. A null mode falls back to the clinical default
 * for the study's modalities, and an unrecognised modality falls back to the
 * general comparison layout rather than silently to 1x1.
 */
function resolveLayout(
  layoutMode: HorosLayoutMode | null,
  modalities: readonly string[],
): HorosLayoutMode {
  if (layoutMode) return layoutMode;
  return defaultLayoutForModality(modalities);
}

/** The label a series row shows in the selector: modality, then description. */
function seriesOptionLabel(series: HorosSeriesRow): string {
  const modality = text(series.modality);
  const number = series.seriesNumber === null ? HOROS_DASH : countText(series.seriesNumber);
  const description = text(series.seriesDescription);
  return `${modality}  ${number}  ${description}`;
}

/** The per-slot header: slot number, modality, series description, selector. */
function SlotHeader({
  slotIndex,
  total,
  active,
  readout,
  series,
  availableSeries,
  onSelectSeries,
}: {
  slotIndex: number;
  total: number;
  active: boolean;
  readout: HorosViewportReadout | undefined;
  series: HorosSeriesRow | null;
  availableSeries: readonly HorosSeriesRow[];
  onSelectSeries: (series: HorosSeriesRow | null) => void;
}) {
  const selectedUid = series?.seriesInstanceUid ?? null;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: P.xs,
        flex: "0 0 auto",
        height: S.controlDense,
        padding: `0 ${P.xs}px`,
        backgroundColor: C.chrome,
        borderBottom: `1px solid ${C.hairlineDark}`,
        color: active ? C.accent : C.textDim,
        fontFamily: F.sans,
        fontSize: F.micro,
        whiteSpace: "nowrap",
        overflow: "hidden",
      }}
    >
      {/* The slot number, accent when active. */}
      <span
        aria-current={active ? "true" : undefined}
        style={{
          flex: "0 0 auto",
          minWidth: S.badgeWidth,
          color: active ? C.accent : C.textFaint,
          fontFamily: F.mono,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {slotIndex + 1}/{total}
      </span>

      {/* Modality and series description, as read off the loaded image. */}
      <span className="horos-truncate" style={{ flex: "0 1 auto", minWidth: 0 }}>
        {readout && readout.isLoaded
          ? `${text(readout.modality)}  ${text(readout.seriesDescription)}`
          : series
            ? seriesOptionLabel(series)
            : "No series"}
      </span>

      {/* Stack position, once there is a stack to have a position in. */}
      <span
        style={{
          flex: "0 0 auto",
          marginLeft: "auto",
          fontFamily: F.mono,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {readout && readout.isLoaded && readout.imageCount > 0
          ? `${readout.imageIndex + 1}/${readout.imageCount}`
          : null}
      </span>

      {/* The per-viewport series selector. */}
      <select
        aria-label={`Series for viewport ${slotIndex + 1}`}
        value={selectedUid ?? ""}
        onChange={(event) => {
          const next = availableSeries.find(
            (candidate) => candidate.seriesInstanceUid === event.currentTarget.value,
          );
          onSelectSeries(next ?? null);
        }}
        style={{
          flex: "0 0 auto",
          maxWidth: "42%",
          height: S.controlDense - 2,
          backgroundColor: C.panel,
          color: series ? C.text : C.textFaint,
          border: `1px solid ${C.hairlineDark}`,
          borderRadius: 1,
          fontFamily: F.sans,
          fontSize: F.micro,
          cursor: "pointer",
        }}
      >
        <option value="">{HOROS_DASH} empty</option>
        {availableSeries.map((candidate) => (
          <option
            key={candidate.seriesUid}
            value={candidate.seriesInstanceUid ?? candidate.seriesUid}
          >
            {seriesOptionLabel(candidate)}
          </option>
        ))}
      </select>
    </div>
  );
}

/** Rendered in a slot with no viewport component mounted at all. */
function UnmountedSlot() {
  return (
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
        backgroundColor: C.viewport,
        color: C.textFaint,
        fontFamily: F.sans,
        fontSize: F.tiny,
      }}
    >
      <span
        style={{
          color: C.textDim,
          fontWeight: F.weightBold,
          letterSpacing: F.trackWide,
          textTransform: "uppercase",
        }}
      >
        No viewport mounted
      </span>
      <span style={{ fontFamily: F.mono, fontSize: F.micro, maxWidth: 320 }}>
        Pass the viewport component as ViewportComponent to render pixels in this slot. Until
        then the grid reports its real geometry rather than showing a black rectangle that
        would look like a rendering failure.
      </span>
    </div>
  );
}

export function ViewportGrid({
  layoutMode,
  modalities,
  availableSeries,
  assignments,
  activeSlotIndex,
  activeTool,
  ViewportComponent,
  readouts,
  onSelectSeries,
  onSlotFocus,
  onReadout,
  onImageIndexChange,
  loading = false,
  className,
}: ViewportGridProps) {
  const resolvedMode = resolveLayout(layoutMode, modalities);
  const spec = HOROS_LAYOUTS[resolvedMode];
  const slotIndexes = Array.from({ length: spec.slots }, (_, index) => index);

  return (
    <div
      role="group"
      aria-label={`Viewport grid, ${spec.label}`}
      data-layout-mode={resolvedMode}
      data-slot-count={spec.slots}
      // 1px gap over a dark surface: that is the divider. No borders per cell,
      // because a border plus a gap draws two lines and the pixels stop being
      // adjacent across the seam.
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${spec.columns}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${spec.rows}, minmax(0, 1fr))`,
        gap: 1,
        padding: 1,
        flex: "1 1 auto",
        minWidth: 0,
        minHeight: 0,
        overflow: "hidden",
        backgroundColor: C.hairlineDark,
      }}
      className={className}
    >
      {slotIndexes.map((slotIndex) => {
        const assignment: ViewportSlotAssignment = assignments[slotIndex] ?? {
          series: null,
          imageIds: [],
          selectedInstanceId: null,
          requestedImageIndex: null,
          requestedCineFrame: null,
          emptyMessage: null,
          isInverted: false,
        };
        const readout = readouts.get(slotIndex);
        const active = slotIndex === activeSlotIndex;
        const hasImageInSlot = assignment.imageIds.length > 0;

        // The reason this slot is black, in the shell's words when it gave any
        // and in the grid's own when it did not. Never a bare "no data": the
        // clinician needs to know whether the PACS is empty, the study has no
        // series, or nothing has been selected.
        const emptyMessage = !ViewportComponent
          ? "Viewport component not mounted"
          : !assignment.series
            ? "No series selected"
            : !hasImageInSlot
              ? loading
                ? "Reading instances..."
                : assignment.series.instances.length === 0
                  ? "Series has no instances in the PACS"
                  : "No image decoded yet"
              : "";

        return (
          <div
            key={slotIndex}
            onMouseDown={() => onSlotFocus(slotIndex)}
            data-slot-index={slotIndex}
            data-active={active ? "true" : "false"}
            style={{
              display: "flex",
              flexDirection: "column",
              minWidth: 0,
              minHeight: 0,
              overflow: "hidden",
              backgroundColor: C.viewport,
              // The active-slot highlight is a 1px accent border. It has to be
              // visible at a glance across the room, and it must not move the
              // pixels, so it is drawn on the slot rather than as an inset glow.
              border: `1px solid ${active ? C.accent : "transparent"}`,
            }}
          >
            <SlotHeader
              slotIndex={slotIndex}
              total={spec.slots}
              active={active}
              readout={readout}
              series={assignment.series}
              availableSeries={availableSeries}
              onSelectSeries={(next) => onSelectSeries(slotIndex, next)}
            />

            <div
              style={{
                position: "relative",
                flex: "1 1 auto",
                minHeight: 0,
                backgroundColor: C.viewport,
              }}
            >
              {ViewportComponent ? (
                <ViewportComponent
                  slotIndex={slotIndex}
                  slotCount={spec.slots}
                  layoutMode={resolvedMode}
                  imageIds={assignment.imageIds}
                  activeTool={activeTool}
                  series={assignment.series}
                  selectedInstanceId={assignment.selectedInstanceId}
                  isInverted={assignment.isInverted}
                  requestedImageIndex={assignment.requestedImageIndex}
                  requestedCineFrame={assignment.requestedCineFrame}
                  emptyMessage={hasImageInSlot ? null : emptyMessage}
                  onReadout={onReadout}
                  onSlotFocus={onSlotFocus}
                  onImageIndexChange={onImageIndexChange}
                />
              ) : (
                <UnmountedSlot />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ViewportGrid;