"use client";

/**
 * The bottom status bar.
 *
 * This is the line a radiologist reads without looking away from the pixels, so
 * it answers four questions and nothing else: is the PACS actually reachable,
 * what am I looking at, where am I in the stack, and what is the pointer bound
 * to.
 *
 * The connection field is deliberately incapable of lying. It is built from a
 * `PacsConnectionStatus` that only a real probe can set to `connected`, and
 * every other state - not yet probed, probe in flight, probe failed - prints
 * itself. There is no optimistic "connected" and no retry loop hiding a
 * failure.
 */

import React from "react";
import { HOROS_ACTION_SHORTCUTS, HOROS_COLORS, HOROS_FONT, HOROS_SIZE, HOROS_LAYOUTS } from "./horosTokens";
import {
  HOROS_DASH,
  formatClockTime,
  formatDicomDate,
  numberText,
  positionLabel,
  text,
} from "./horosFormat";
import type {
  HorosCineState,
  HorosLayoutMode,
  HorosStudyRow,
  HorosSeriesRow,
  HorosToolMode,
  HorosViewportReadout,
  PacsConnectionStatus,
} from "./horosTypes";
import { pipStyle } from "./horosStyles";

const C = HOROS_COLORS;
const F = HOROS_FONT;

export interface HorosStatusBarProps {
  /** The real Orthanc connection state, as last probed. */
  connection: PacsConnectionStatus;
  layoutMode: HorosLayoutMode;
  activeTool: HorosToolMode;
  isInverted: boolean;
  cine: HorosCineState;
  /** The slot the clinician is working in. Null when nothing is loaded. */
  activeReadout: HorosViewportReadout | null;
  /** The open study, or null. */
  study: HorosStudyRow | null;
  /** The open series, or null. */
  series: HorosSeriesRow | null;
  /** Open measurement count, or null when the page does not track one. */
  measurementCount: number | null;
  /** A real problem worth surfacing, e.g. a failed pixel fetch. Null otherwise. */
  notice: string | null;
  className?: string;
}

/** One label/value pair in the bar, separated by a 1px vertical rule. */
function Field({
  label,
  value,
  mono = true,
  color,
  title,
}: {
  label: string;
  value: string;
  mono?: boolean;
  color?: string;
  title?: string;
}) {
  return (
    <div
      title={title}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        padding: "0 6px",
        height: "100%",
        borderLeft: `1px solid ${C.hairline}`,
        whiteSpace: "nowrap",
        overflow: "hidden",
        minWidth: 0,
      }}
    >
      <span
        style={{
          color: C.textDim,
          fontFamily: F.sans,
          fontSize: F.micro,
          fontWeight: F.weightBold,
          letterSpacing: F.trackWide,
          textTransform: "uppercase",
          flex: "0 0 auto",
        }}
      >
        {label}
      </span>
      <span
        style={{
          color: color ?? C.text,
          fontFamily: mono ? F.mono : F.sans,
          fontSize: F.tiny,
          fontVariantNumeric: "tabular-nums",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {value}
      </span>
    </div>
  );
}

interface ConnectionField {
  label: string;
  value: string;
  detail: string;
  color: string;
  pipColor: string;
  title: string;
}

/**
 * The connection field, in all four states.
 *
 * Each branch names a different fact. `unknown` means no probe has run yet, so
 * the bar says so rather than showing a reassuring default.
 */
function describeConnection(connection: PacsConnectionStatus): ConnectionField {
  const url = text(connection.baseUrl);
  const checked = formatClockTime(connection.checkedAt);

  if (connection.state === "connected") {
    return {
      label: "PACS",
      value: text(connection.version, "Orthanc") === "Orthanc"
        ? "Orthanc ok"
        : `Orthanc ${text(connection.version)}`,
      detail: url,
      color: C.text,
      pipColor: C.accent,
      title: `Orthanc answered on ${url}. Last probe ${checked}.`,
    };
  }
  if (connection.state === "unreachable") {
    return {
      label: "PACS",
      value: "unreachable",
      detail: url,
      color: C.alert,
      pipColor: C.alert,
      title: `No answer from ${url}: ${text(connection.error)}. Last probe ${checked}.`,
    };
  }
  if (connection.state === "checking") {
    return {
      label: "PACS",
      value: "checking",
      detail: url,
      color: C.textMuted,
      pipColor: C.textDim,
      title: `Probing ${url}.`,
    };
  }
  return {
    label: "PACS",
    value: "not probed",
    detail: url,
    color: C.textDim,
    pipColor: C.textFaint,
    title: `No probe has run against ${url} yet, so the connection state is unknown.`,
  };
}

export function HorosStatusBar({
  connection,
  layoutMode,
  activeTool,
  isInverted,
  cine,
  activeReadout,
  study,
  series,
  measurementCount,
  notice,
  className,
}: HorosStatusBarProps) {
  const conn = describeConnection(connection);
  // Narrowing through a plain const, so every readout below is checked against
  // the loaded case rather than repeating a null check per field.
  const r = activeReadout && activeReadout.isLoaded && activeReadout.imageCount > 0
    ? activeReadout
    : null;
  const imageCount = r ? r.imageCount : 0;
  const hasPixels = r !== null;

  return (
    <div
      role="status"
      aria-live="off"
      style={{
        display: "flex",
        alignItems: "stretch",
        height: HOROS_SIZE.statusBar,
        flex: "0 0 auto",
        backgroundColor: C.chrome,
        borderTop: `1px solid ${C.hairline}`,
        color: C.text,
        fontFamily: F.sans,
        fontSize: F.tiny,
        userSelect: "none",
        overflow: "hidden",
      }}
      className={className}
    >
      {/* PACS connection: the pip is the only colour-coded element in the bar. */}
      <div
        title={conn.title}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "0 8px",
          flex: "0 0 auto",
          color: conn.color,
        }}
      >
        <span style={pipStyle(conn.pipColor)} />
        <span
          style={{
            fontSize: F.micro,
            fontWeight: F.weightBold,
            letterSpacing: F.trackWide,
            textTransform: "uppercase",
            color: C.textDim,
          }}
        >
          {conn.label}
        </span>
        <span style={{ fontFamily: F.mono, fontSize: F.tiny }}>{conn.value}</span>
        <span style={{ fontFamily: F.mono, fontSize: F.micro, color: C.textFaint }}>
          {conn.detail}
        </span>
      </div>

      <Field
        label="Study"
        value={
          study
            ? `${text(study.patientName)}  ${formatDicomDate(study.studyDate)}`
            : HOROS_DASH
        }
        mono={false}
        title={study ? text(study.studyDescription) : "No study open"}
      />

      <Field
        label="Series"
        value={
          series
            ? `${text(series.seriesNumber)}  ${text(series.modality)}  ${text(series.seriesDescription)}`
            : HOROS_DASH
        }
        title={series ? text(series.seriesInstanceUid) : "No series open"}
      />

      <Field
        label="Im"
        value={hasPixels && r ? positionLabel(r.imageIndex, imageCount) : `${HOROS_DASH}/${HOROS_DASH}`}
        title={hasPixels ? "Image index within the loaded stack" : "No image is loaded in this slot"}
      />

      <Field
        label="W/L"
        value={
          hasPixels && r
            ? `${numberText(r.windowWidth)} / ${numberText(r.windowCenter)}`
            : `${HOROS_DASH} / ${HOROS_DASH}`
        }
        title="Window width / window centre in effect"
      />

      <Field
        label="Zoom"
        value={
          hasPixels && r && r.zoom !== null
            ? `${numberText(r.zoom, 2)}x`
            : HOROS_DASH
        }
        title="Camera magnification, 1.00 being fit to window"
      />

      <Field
        label="Grid"
        value={`${HOROS_LAYOUTS[layoutMode].label}  ${
          activeReadout ? `slot ${activeReadout.slotIndex + 1}` : "—"
        }`}
        title="Viewport layout and the slot that has focus"
      />

      <Field
        label="Tool"
        value={activeTool === "none" ? "none" : activeTool}
        color={activeTool === "none" ? C.textDim : C.text}
        title={
          activeTool === "none"
            ? "No tool is bound to the pointer"
            : `The pointer is bound to the ${activeTool} tool`
        }
      />

      <Field
        label="Inv"
        value={isInverted ? "on" : "off"}
        color={isInverted ? C.accent : C.textDim}
        title={`Greyscale inversion (${HOROS_ACTION_SHORTCUTS.invert})`}
      />

      <Field
        label="Cine"
        value={
          cine.framesPerSecond > 0
            ? `${cine.isPlaying ? "play" : "stop"} ${numberText(cine.framesPerSecond, 1)} fps${
                cine.loop ? " loop" : ""
              }`
            : cine.isPlaying
              ? "play"
              : "stop"
        }
        color={cine.isPlaying ? C.accent : C.textDim}
        title={
          cine.framesPerSecond > 0
            ? "Cine playback rate and loop state"
            : "Cine is stopped and no frame rate is set"
        }
      />

      <Field
        label="Meas"
        value={measurementCount === null ? HOROS_DASH : String(measurementCount)}
        title={
          measurementCount === null
            ? "This session does not report open measurements"
            : "Open measurements in this session"
        }
      />

      {notice ? (
        <div
          title={notice}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "0 8px",
            flex: "1 1 auto",
            minWidth: 0,
            color: C.alert,
            borderLeft: `1px solid ${C.hairline}`,
            fontFamily: F.mono,
            fontSize: F.micro,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {notice}
        </div>
      ) : (
        <div style={{ flex: "1 1 auto", minWidth: 0 }} />
      )}
    </div>
  );
}

export default HorosStatusBar;
