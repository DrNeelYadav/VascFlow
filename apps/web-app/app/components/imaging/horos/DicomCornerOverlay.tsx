"use client";

/**
 * THE FOUR-CORNER DICOM OVERLAY.
 *
 * This is the single most recognisable thing about a PACS viewport, and it is
 * also the most dangerous place in the product to invent anything. The overlay
 * sits directly on top of the pixels, is read at a glance, and every field in
 * it is a DICOM tag read off the instance being displayed. A plausible-looking
 * patient name, CR number, WW/WL pair or frame count in this component reads as
 * though it came off the console, and a radiologist acting on it acts on
 * fiction.
 *
 * So the component has exactly one rule: every value arrives as a typed prop
 * that is either a real number/string or `null`, and `null` renders as an
 * explicit placeholder. There is no default patient, no fallback geometry, no
 * "typical" window width, and no frame count guessed from a filename.
 *
 * That null case is the common case here, not an edge case. The known Orthanc
 * 1.12.9 -> 1.13.0 upgrade defect leaves the DB tag index empty for instances
 * ingested after the upgrade, so a whole series can arrive with null
 * description, null modality and null patient identity while the pixel data is
 * perfectly intact. Rendering `Not on file` is the only honest answer.
 *
 * Purely presentational: no hooks, no state, no effects. Every value is a prop,
 * which is what makes `renderToStaticMarkup` a real test of it rather than an
 * approximation, and what keeps it safe to place directly over the canvas.
 *
 * Corner layout, HOROS convention:
 *   top-left     patient name, ID, sex/age, study date
 *   top-right    modality + series description, frame index of total
 *   bottom-left  institution / manufacturer
 *   bottom-right zoom, window width/level, rendering preset name
 */

import React from "react";
import { HOROS_COLORS, HOROS_FONT, HOROS_SPACE } from "./horosTokens";
import {
  HOROS_DASH,
  HOROS_NOT_ON_FILE,
  countText,
  formatDicomDate,
  isAbsent,
  numberText,
  patientNameOrMissing,
  text,
} from "./horosFormat";
import type { CSSProperties } from "react";

const C = HOROS_COLORS;
const F = HOROS_FONT;
const P = HOROS_SPACE;

export interface DicomCornerOverlayProps {
  /** DICOM PatientName (0010,0010). Null when the archive has none. */
  patientName: string | null;
  /** DICOM PatientID (0010,0020). */
  patientId: string | null;
  /** DICOM PatientSex (0010,0040), as written by the scanner. */
  patientSex: string | null;
  /** DICOM PatientAge (0010,1010), verbatim, e.g. "019Y". */
  patientAge: string | null;
  /** DICOM StudyDate (0008,0020), YYYYMMDD. */
  studyDate: string | null;
  /** DICOM Modality (0008,0060) of the displayed image. */
  modality: string | null;
  /** DICOM SeriesDescription (0008,103E). */
  seriesDescription: string | null;
  /** Zero-based frame/slice index of the displayed image. */
  frameIndex: number | null;
  /** Frames or slices in the stack being displayed. */
  frameCount: number | null;
  /** DICOM InstitutionName (0008,0080). */
  institution: string | null;
  /** DICOM Manufacturer (0008,0070). */
  manufacturer: string | null;
  /** Camera magnification, 1 being fit-to-window. Null when not yet known. */
  zoom: number | null;
  /** Window width in effect (0028,1051). */
  windowWidth: number | null;
  /** Window centre/level in effect (0028,1050). */
  windowLevel: number | null;
  /** Name of the rendering preset in effect, or null when none is applied. */
  preset: string | null;
  /** DICOM SliceLocation (0020,1041) in mm, when the instance reports one. */
  slicePosition: number | null;
  /** Images in the stack the viewport holds. */
  stackCount: number | null;
}

/**
 * The stack position, as `Frame 42 of 120`.
 *
 * Zero renders as zero. A viewport that genuinely holds no frames is reporting
 * a fact about the instance, and printing a dash there would claim the scanner
 * said nothing when in fact it said zero. Only an absent value becomes a dash.
 */
function framePositionLabel(index: number | null, count: number | null): string {
  const position = countText(index);
  const total = countText(count);
  return `Frame ${position} of ${total}`;
}

/**
 * Sex and age as the scanner wrote them, e.g. `F / 019Y`.
 *
 * The age string is passed through verbatim rather than reformatted, because
 * DICOM ages arrive as `019Y` and re-deriving a number from that loses the unit
 * and the century marker. A half-populated pair keeps its half: the separator
 * always prints, so `— / 019Y` reads as a missing sex rather than a missing
 * record.
 */
function sexAgeLabel(sex: string | null, age: string | null): string {
  return `${text(sex)} / ${text(age)}`;
}

/** Slice position with its unit, or a dash when the instance carries none. */
function sliceLabel(position: number | null): string {
  if (position === null || !Number.isFinite(position)) return HOROS_DASH;
  return `${numberText(position, 1)} mm`;
}

/** Magnification as a factor, e.g. `1.25x`. Null zoom stays a dash. */
function zoomLabel(zoom: number | null): string {
  if (zoom === null || !Number.isFinite(zoom)) return HOROS_DASH;
  return `${numberText(zoom, 2)}x`;
}

/** Window width / level as `W 2048  L 1024`, the workstation shorthand. */
function windowLabel(width: number | null, level: number | null): string {
  return `W ${countText(width)}  L ${countText(level)}`;
}

/** The shared type treatment: monospace, high contrast, shadowed off the pixels. */
const overlayTextStyle: CSSProperties = {
  fontFamily: F.mono,
  fontSize: F.tiny,
  lineHeight: F.lineTight,
  fontVariantNumeric: "tabular-nums",
  color: C.text,
  // The overlay sits on top of the pixels, so it needs its own contrast. One
  // hairline-dark shadow keeps light text legible over a bright image without
  // reading as a panel or a drop shadow on the chrome.
  textShadow: `0 1px 2px ${C.hairlineDark}`,
  whiteSpace: "pre",
};

/** The faint upper-case field label that names each line. */
const labelStyle: CSSProperties = {
  color: C.textDim,
  fontFamily: F.sans,
  fontSize: F.micro,
  fontWeight: F.weightBold,
  letterSpacing: F.trackWide,
  textTransform: "uppercase",
};

/** One `LABEL  value` line inside a corner. */
function OverlayLine({
  label,
  value,
  valueColor,
}: {
  label: string;
  value: string;
  valueColor?: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: P.xs }}>
      <span style={{ ...labelStyle, flex: "0 0 auto" }}>{label}</span>
      <span
        style={{
          ...overlayTextStyle,
          flex: "1 1 auto",
          minWidth: 0,
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: valueColor ?? C.text,
        }}
      >
        {value}
      </span>
    </div>
  );
}

/** Placement for the four corners, absolute so the overlay never affects layout. */
function cornerStyle(placement: "topLeft" | "topRight" | "bottomLeft" | "bottomRight"): CSSProperties {
  const shared: CSSProperties = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    gap: 1,
    padding: P.xs,
    maxWidth: "58%",
    // The viewport owns every pointer gesture; the overlay must not eat them.
    pointerEvents: "none",
    overflow: "hidden",
  };
  if (placement === "topLeft") return { ...shared, top: 0, left: 0, alignItems: "flex-start" };
  if (placement === "topRight") return { ...shared, top: 0, right: 0, alignItems: "flex-end" };
  if (placement === "bottomLeft") return { ...shared, bottom: 0, left: 0, alignItems: "flex-start" };
  return { ...shared, bottom: 0, right: 0, alignItems: "flex-end" };
}

export function DicomCornerOverlay({
  patientName,
  patientId,
  patientSex,
  patientAge,
  studyDate,
  modality,
  seriesDescription,
  frameIndex,
  frameCount,
  institution,
  manufacturer,
  zoom,
  windowWidth,
  windowLevel,
  preset,
  slicePosition,
  stackCount,
}: DicomCornerOverlayProps) {
  // A name the archive does not hold is a patient-safety problem, not a
  // cosmetic one, so it gets words rather than a dash.
  const name = patientNameOrMissing(patientName);
  // Every other absent attribute is a dash. Words in all four corners would
  // bury the image; words in the identity corner only is the trade the
  // workstation makes.
  const institutionLine = isAbsent(institution) ? HOROS_DASH : text(institution);
  const manufacturerLine = isAbsent(manufacturer) ? HOROS_DASH : text(manufacturer);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
        userSelect: "none",
      }}
    >
      <div style={cornerStyle("topLeft")}>
        <OverlayLine
          label="Patient"
          value={name}
          valueColor={isAbsent(patientName) ? C.alert : C.text}
        />
        <OverlayLine label="ID" value={text(patientId)} />
        <OverlayLine label="Sex/Age" value={sexAgeLabel(patientSex, patientAge)} />
        <OverlayLine label="Study" value={formatDicomDate(studyDate)} />
      </div>

      <div style={cornerStyle("topRight")}>
        <OverlayLine label="Modality" value={text(modality)} />
        <OverlayLine label="Series" value={text(seriesDescription)} />
        <OverlayLine label="Slice" value={sliceLabel(slicePosition)} />
        <OverlayLine label="Stack" value={countText(stackCount)} />
        <OverlayLine label="Frame" value={framePositionLabel(frameIndex, frameCount)} />
      </div>

      <div style={cornerStyle("bottomLeft")}>
        <OverlayLine label="Institution" value={institutionLine} />
        <OverlayLine label="Manufacturer" value={manufacturerLine} />
      </div>

      <div style={cornerStyle("bottomRight")}>
        <OverlayLine label="Zoom" value={zoomLabel(zoom)} />
        <OverlayLine label="Window" value={windowLabel(windowWidth, windowLevel)} />
        <OverlayLine label="Preset" value={text(preset, HOROS_NOT_ON_FILE)} />
      </div>
    </div>
  );
}

export default DicomCornerOverlay;