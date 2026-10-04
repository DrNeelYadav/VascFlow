"use client";

/**
 * The right-hand tool stack.
 *
 * Ordered the way a PACS orders it, because the order is a workflow: first the
 * tools that change how the image is presented - window/level, zoom, pan,
 * rotate, flip, invert - then the tools that move through the stack, then cine,
 * and last the tools that write something down. A measurement belongs after the
 * geometry is right, never before.
 *
 * Every control shows its keyboard shortcut, and every shortcut shown is real:
 * `HorosAppShell` installs the key handler that performs exactly these actions.
 *
 * Two rules govern the numbers printed here. Window/level and zoom are read
 * from the active viewport and are never rounded into fiction - a viewport with
 * nothing loaded shows a dash, not 0/0 and not 1.00x. And a control that cannot
 * act right now, because no viewport is mounted or the stack is empty, is drawn
 * disabled with the reason in its tooltip, rather than drawn live and silently
 * doing nothing.
 */

import React from "react";
import {
  ArrowLeftRight,
  Contrast,
  FlipHorizontal,
  FlipVertical,
  Hand,
  Loader,
  Maximize2,
  Minimize2,
  Move3d,
  Pause,
  Play,
  Ruler,
  ScanLine,
  SkipBack,
  SkipForward,
  Square,
  Sun,
  Target,
  Trash2,
  Triangle,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import {
  HOROS_ACTION_SHORTCUTS,
  HOROS_COLORS,
  HOROS_FONT,
  HOROS_SIZE,
  HOROS_SPACE,
  HOROS_TOOL_SHORTCUTS,
} from "./horosTokens";
import type {
  HorosCineState,
  HorosSeriesRow,
  HorosToolMode,
  HorosViewportCommand,
  HorosViewportCommandHandler,
  HorosViewportReadout,
} from "./horosTypes";
import {
  HOROS_DASH,
  countText,
  numberText,
  positionLabel,
  text,
} from "./horosFormat";
import { readoutLabelStyle, readoutStyle } from "./horosStyles";

const C = HOROS_COLORS;
const F = HOROS_FONT;
const S = HOROS_SIZE;
const P = HOROS_SPACE;

export interface HorosToolPanelProps {
  /** The tool the pointer is bound to. */
  activeTool: HorosToolMode;
  onSelectTool: (tool: HorosToolMode) => void;
  /** Sends a command to the viewport engine. */
  onCommand: HorosViewportCommandHandler;
  /** The slot the clinician is working in. Null when nothing is loaded. */
  readout: HorosViewportReadout | null;
  /** The open series, or null. */
  series: HorosSeriesRow | null;
  isInverted: boolean;
  onToggleInvert: () => void;
  cine: HorosCineState;
  onToggleCineLoop: () => void;
  onStepCineFps: (delta: number) => void;
  /** Open measurement count, or null when the page does not track one. */
  measurementCount: number | null;
  className?: string;
}

/** One tool in the tool stack: name, shortcut, and its state. */
function ToolButton({
  label,
  shortcut,
  active,
  disabled,
  title,
  onClick,
  icon,
}: {
  label: string;
  shortcut: string;
  active: boolean;
  disabled: boolean;
  title: string;
  onClick: () => void;
  icon: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={active}
      title={title}
      className={`horos-btn${active ? " horos-btn--active" : ""}`}
      style={{
        display: "flex",
        alignItems: "center",
        gap: P.xs,
        width: "100%",
        height: S.controlDense + 1,
        padding: `0 ${P.xs}px`,
        backgroundColor: active ? C.accent : C.control,
        border: `1px solid ${active ? C.accent : C.hairline}`,
        borderRadius: S.radius,
        color: active ? C.accentText : C.text,
        fontFamily: F.sans,
        fontSize: F.micro,
        fontWeight: F.weightMedium,
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.45 : 1,
      }}
    >
      <span style={{ display: "flex", width: 12, flex: "0 0 auto", justifyContent: "center" }}>
        {icon}
      </span>
      <span className="horos-truncate" style={{ flex: "1 1 auto", textAlign: "left" }}>
        {label}
      </span>
      <kbd
        style={{
          flex: "0 0 auto",
          color: active ? C.accentTextMuted : C.textDim,
          fontFamily: F.mono,
          fontSize: F.micro,
        }}
      >
        {shortcut}
      </kbd>
    </button>
  );
}

/** One action: no state, just a command, in a compact square. */
function ActionButton({
  label,
  title,
  disabled,
  onClick,
  icon,
  active = false,
  alert = false,
}: {
  label: string;
  title: string;
  disabled: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  active?: boolean;
  alert?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      aria-pressed={active}
      title={title}
      className={`horos-btn${active ? " horos-btn--toggled" : ""}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: S.controlDense,
        padding: 0,
        flex: "1 1 auto",
        backgroundColor: active ? C.accent : C.control,
        border: `1px solid ${active ? C.accent : C.hairline}`,
        borderRadius: S.radius,
        color: active ? C.accentText : alert ? C.alert : C.text,
        fontFamily: F.sans,
        fontSize: F.micro,
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.4 : 1,
      }}
    >
      {icon}
    </button>
  );
}

/** A group heading inside the tool stack. */
function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: P.xs,
        height: 16,
        color: C.textDim,
        fontFamily: F.sans,
        fontSize: F.micro,
        fontWeight: F.weightBold,
        letterSpacing: F.trackWider,
        textTransform: "uppercase",
      }}
    >
      <span className="horos-truncate">{children}</span>
      <span style={{ flex: "1 1 auto", height: 1, backgroundColor: C.hairlineDark }} />
    </div>
  );
}

/** A label/value field: window width, window centre, zoom, position. */
function Readout({
  label,
  value,
  title,
  color,
}: {
  label: string;
  value: string;
  title: string;
  color?: string;
}) {
  return (
    <div style={readoutStyle} title={title}>
      <span style={readoutLabelStyle}>{label}</span>
      <span style={{ color: color ?? C.text, overflow: "hidden", textOverflow: "ellipsis" }}>
        {value}
      </span>
    </div>
  );
}

export function HorosToolPanel({
  activeTool,
  onSelectTool,
  onCommand,
  readout,
  series,
  isInverted,
  onToggleInvert,
  cine,
  onToggleCineLoop,
  onStepCineFps,
  measurementCount,
  className,
}: HorosToolPanelProps) {
  // One flag, set honestly: a viewport has to be mounted and hold a decoded
  // image before any camera or window command can mean anything.
  const imageCount = readout ? readout.imageCount : 0;
  const hasPixels = Boolean(readout && readout.isLoaded && imageCount > 0);
  const canCommand = hasPixels;
  const canAdd = canCommand && series !== null;
  const disableReason = canCommand
    ? undefined
    : "No image is loaded in the active viewport, so this action has nothing to act on.";

  const send = (command: HorosViewportCommand, value?: number) => {
    onCommand(command, value);
  };

  const stackIndex = readout ? readout.imageIndex : null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: P.xs,
        height: "100%",
        minHeight: 0,
        overflowY: "auto",
        padding: P.xs,
        backgroundColor: C.panel,
        color: C.text,
        borderLeft: `1px solid ${C.hairline}`,
        fontFamily: F.sans,
        fontSize: F.micro,
      }}
      className={`horos-scroll ${className ?? ""}`}
    >
      {/* ---------------------------------------------------------------- *
       * Window / level
       * ---------------------------------------------------------------- */}
      <GroupLabel>Window / level</GroupLabel>
      <ToolButton
        label="Window / level"
        shortcut={HOROS_TOOL_SHORTCUTS.windowLevel}
        active={activeTool === "windowLevel"}
        disabled={!canCommand}
        title={
          canCommand
            ? "Drag in the viewport to set window width and centre"
            : disableReason ?? ""
        }
        icon={<Contrast style={{ width: 11, height: 11 }} aria-hidden="true" />}
        onClick={() => onSelectTool("windowLevel")}
      />
      <Readout
        label="WW"
        value={hasPixels ? numberText(readout?.windowWidth ?? null) : HOROS_DASH}
        title="Window width from DICOM (0028,1051), as currently applied"
      />
      <Readout
        label="WL"
        value={hasPixels ? numberText(readout?.windowCenter ?? null) : HOROS_DASH}
        title="Window centre from DICOM (0028,1051), as currently applied"
      />
      <div style={{ display: "flex", gap: P.xxs }}>
        <ActionButton
          label="Reset window and level"
          title={`Reset the window to the values in the DICOM header (${HOROS_ACTION_SHORTCUTS.windowLevelReset})`}
          disabled={!canCommand}
          icon={<Sun style={{ width: 11, height: 11 }} aria-hidden="true" />}
          onClick={() => send("windowLevelReset")}
        />
      </div>

      {/* ---------------------------------------------------------------- *
       * Zoom and pan
       * ---------------------------------------------------------------- */}
      <GroupLabel>Zoom / pan</GroupLabel>
      <ToolButton
        label="Zoom"
        shortcut={HOROS_TOOL_SHORTCUTS.zoom}
        active={activeTool === "zoom"}
        disabled={!canCommand}
        title={canCommand ? "Zoom with the wheel or drag with the tool bound" : disableReason ?? ""}
        icon={<ZoomIn style={{ width: 11, height: 11 }} aria-hidden="true" />}
        onClick={() => onSelectTool("zoom")}
      />
      <Readout
        label="Zoom"
        value={
          hasPixels && readout?.zoom !== null && readout?.zoom !== undefined
            ? `${numberText(readout.zoom, 2)}x`
            : HOROS_DASH
        }
        title="Camera magnification, 1.00 being fit to window"
      />
      <div style={{ display: "flex", gap: P.xxs }}>
        <ActionButton
          label="Zoom out"
          title={`Zoom out (${HOROS_ACTION_SHORTCUTS.zoomOut})`}
          disabled={!canCommand}
          icon={<ZoomOut style={{ width: 11, height: 11 }} aria-hidden="true" />}
          onClick={() => send("zoomOut")}
        />
        <ActionButton
          label="Fit to window"
          title={`Fit the image to the viewport (${HOROS_ACTION_SHORTCUTS.zoomToFit})`}
          disabled={!canCommand}
          icon={<Maximize2 style={{ width: 11, height: 11 }} aria-hidden="true" />}
          onClick={() => send("zoomToFit")}
        />
        <ActionButton
          label="Actual size"
          title={`Show the image at 1:1 (${HOROS_ACTION_SHORTCUTS.actualSize})`}
          disabled={!canCommand}
          icon={<Minimize2 style={{ width: 11, height: 11 }} aria-hidden="true" />}
          onClick={() => send("actualSize")}
        />
      </div>
      <ToolButton
        label="Pan"
        shortcut={HOROS_TOOL_SHORTCUTS.pan}
        active={activeTool === "pan"}
        disabled={!canCommand}
        title={canCommand ? "Drag to move the image within the viewport" : disableReason ?? ""}
        icon={<Hand style={{ width: 11, height: 11 }} aria-hidden="true" />}
        onClick={() => onSelectTool("pan")}
      />
      <div style={{ display: "flex", gap: P.xxs }}>
        <ActionButton
          label="Recentre pan"
          title="Move the pan offset back to zero"
          disabled={!canCommand}
          icon={<Move3d style={{ width: 11, height: 11 }} aria-hidden="true" />}
          onClick={() => send("panReset")}
        />
      </div>

      {/* ---------------------------------------------------------------- *
       * Rotate and flip
       * ---------------------------------------------------------------- */}
      <GroupLabel>Rotate / flip</GroupLabel>
      <ToolButton
        label="Rotate"
        shortcut={HOROS_TOOL_SHORTCUTS.rotate}
        active={activeTool === "rotate"}
        disabled={!canCommand}
        title={canCommand ? "Drag to rotate the image" : disableReason ?? ""}
        icon={<ArrowLeftRight style={{ width: 11, height: 11 }} aria-hidden="true" />}
        onClick={() => onSelectTool("rotate")}
      />
      <Readout
        label="Rot"
        value={hasPixels ? `${numberText(readout?.rotation ?? null, 1)}` : HOROS_DASH}
        title="Camera rotation in degrees, clockwise"
      />
      <div style={{ display: "flex", gap: P.xxs }}>
        <ActionButton
          label="Rotate left"
          title={`Rotate 90 degrees anticlockwise (${HOROS_ACTION_SHORTCUTS.rotateLeft})`}
          disabled={!canCommand}
          icon={<RotateGlyph direction="left" />}
          onClick={() => send("rotateLeft")}
        />
        <ActionButton
          label="Rotate right"
          title={`Rotate 90 degrees clockwise (${HOROS_ACTION_SHORTCUTS.rotateRight})`}
          disabled={!canCommand}
          icon={<RotateGlyph direction="right" />}
          onClick={() => send("rotateRight")}
        />
        <ActionButton
          label="Reset rotation"
          title={`Return the camera to upright (${HOROS_ACTION_SHORTCUTS.rotateReset})`}
          disabled={!canCommand}
          icon={<ScanLine style={{ width: 11, height: 11 }} aria-hidden="true" />}
          onClick={() => send("rotateReset")}
        />
      </div>
      <div style={{ display: "flex", gap: P.xxs }}>
        <ActionButton
          label="Flip horizontal"
          title={`Mirror left to right (${HOROS_ACTION_SHORTCUTS.flipHorizontal})`}
          disabled={!canCommand}
          icon={<FlipHorizontal style={{ width: 11, height: 11 }} aria-hidden="true" />}
          onClick={() => send("flipHorizontal")}
        />
        <ActionButton
          label="Flip vertical"
          title={`Mirror top to bottom (${HOROS_ACTION_SHORTCUTS.flipVertical})`}
          disabled={!canCommand}
          icon={<FlipVertical style={{ width: 11, height: 11 }} aria-hidden="true" />}
          onClick={() => send("flipVertical")}
        />
      </div>
      <ToolButton
        label="Invert greyscale"
        shortcut={HOROS_ACTION_SHORTCUTS.invert}
        active={isInverted}
        disabled={!canCommand}
        title={
          canCommand
            ? isInverted
              ? "Return to the original greyscale"
              : "Invert the greyscale, which is how lung and bone are read"
            : disableReason ?? ""
        }
        icon={<Contrast style={{ width: 11, height: 11 }} aria-hidden="true" />}
        onClick={onToggleInvert}
      />

      {/* ---------------------------------------------------------------- *
       * Stack scroll
       * ---------------------------------------------------------------- */}
      <GroupLabel>Stack scroll</GroupLabel>
      <ToolButton
        label="Scroll through stack"
        shortcut={HOROS_TOOL_SHORTCUTS.stackScroll}
        active={activeTool === "stackScroll"}
        disabled={!canCommand}
        title={
          canCommand
            ? "Move through the stack with the wheel or the arrow keys"
            : disableReason ?? ""
        }
        icon={<ArrowLeftRight style={{ width: 11, height: 11 }} aria-hidden="true" />}
        onClick={() => onSelectTool("stackScroll")}
      />
      <Readout
        label="Im"
        value={hasPixels ? positionLabel(stackIndex, imageCount) : `${HOROS_DASH}/${HOROS_DASH}`}
        title="Image index within the loaded stack"
      />
      <div style={{ display: "flex", gap: P.xxs }}>
        <ActionButton
          label="First image"
          title={`Jump to the first image (${HOROS_ACTION_SHORTCUTS.firstImage})`}
          disabled={!canCommand}
          icon={<SkipBack style={{ width: 11, height: 11 }} aria-hidden="true" />}
          onClick={() => send("firstImage")}
        />
        <ActionButton
          label="Previous image"
          title={`Step back one image (${HOROS_ACTION_SHORTCUTS.previousImage})`}
          disabled={!canCommand}
          icon={<ChevronGlyph direction="up" />}
          onClick={() => send("previousImage")}
        />
        <ActionButton
          label="Next image"
          title={`Step forward one image (${HOROS_ACTION_SHORTCUTS.nextImage})`}
          disabled={!canCommand}
          icon={<ChevronGlyph direction="down" />}
          onClick={() => send("nextImage")}
        />
        <ActionButton
          label="Last image"
          title={`Jump to the last image (${HOROS_ACTION_SHORTCUTS.lastImage})`}
          disabled={!canCommand}
          icon={<SkipForward style={{ width: 11, height: 11 }} aria-hidden="true" />}
          onClick={() => send("lastImage")}
        />
      </div>

      {/* ---------------------------------------------------------------- *
       * Cine
       * ---------------------------------------------------------------- */}
      <GroupLabel>Cine</GroupLabel>
      <div style={{ display: "flex", gap: P.xxs }}>
        <ActionButton
          label={cine.isPlaying ? "Pause cine" : "Play cine"}
          title={`${cine.isPlaying ? "Pause" : "Play"} the stack at the set frame rate (${
            HOROS_ACTION_SHORTCUTS.cinePlay
          })`}
          disabled={!canCommand || imageCount < 2}
          active={cine.isPlaying}
          icon={
            cine.isPlaying ? (
              <Pause style={{ width: 11, height: 11 }} aria-hidden="true" />
            ) : (
              <Play style={{ width: 11, height: 11 }} aria-hidden="true" />
            )
          }
          onClick={() => send(cine.isPlaying ? "cinePause" : "cinePlay")}
        />
        <ActionButton
          label="Loop cine"
          title="Wrap to the first frame when playback reaches the last"
          disabled={!canCommand || imageCount < 2}
          active={cine.loop}
          icon={<Loader style={{ width: 11, height: 11 }} aria-hidden="true" />}
          onClick={onToggleCineLoop}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: P.xxs }}>
        <ActionButton
          label="Slower"
          title="Halve the frame rate"
          disabled={!canCommand || cine.framesPerSecond <= 0}
          icon={<ZoomOut style={{ width: 11, height: 11 }} aria-hidden="true" />}
          onClick={() => onStepCineFps(-1)}
        />
        <div style={{ flex: "2 1 auto", minWidth: 0 }}>
          <Readout
            label="fps"
            value={cine.framesPerSecond > 0 ? numberText(cine.framesPerSecond, 1) : HOROS_DASH}
            title="Cine frame rate. Not set yet: press play and the rate starts at 15 fps."
          />
        </div>
        <ActionButton
          label="Faster"
          title="Double the frame rate"
          disabled={!canCommand || cine.framesPerSecond <= 0}
          icon={<ZoomIn style={{ width: 11, height: 11 }} aria-hidden="true" />}
          onClick={() => onStepCineFps(1)}
        />
      </div>

      {/* ---------------------------------------------------------------- *
       * Measurements
       * ---------------------------------------------------------------- */}
      <GroupLabel>Measure</GroupLabel>
      <ToolButton
        label="Length"
        shortcut={HOROS_TOOL_SHORTCUTS.length}
        active={activeTool === "length"}
        disabled={!canAdd}
        title={
          canAdd
            ? "Drag a line to measure a distance in mm"
            : "Select a series before measuring on it"
        }
        icon={<Ruler style={{ width: 11, height: 11 }} aria-hidden="true" />}
        onClick={() => {
          onSelectTool("length");
          send("addLength");
        }}
      />
      <ToolButton
        label="Angle"
        shortcut={HOROS_TOOL_SHORTCUTS.angle}
        active={activeTool === "angle"}
        disabled={!canAdd}
        title={canAdd ? "Drag three points to measure an angle" : "Select a series before measuring on it"}
        icon={<Triangle style={{ width: 11, height: 11 }} aria-hidden="true" />}
        onClick={() => {
          onSelectTool("angle");
          send("addAngle");
        }}
      />
      <ToolButton
        label="Region"
        shortcut={HOROS_TOOL_SHORTCUTS.region}
        active={activeTool === "region"}
        disabled={!canAdd}
        title={canAdd ? "Drag a rectangle to report mean and standard deviation" : "Select a series before measuring on it"}
        icon={<Square style={{ width: 11, height: 11 }} aria-hidden="true" />}
        onClick={() => {
          onSelectTool("region");
          send("addRegion");
        }}
      />
      <ToolButton
        label="Probe"
        shortcut={HOROS_TOOL_SHORTCUTS.probe}
        active={activeTool === "probe"}
        disabled={!canAdd}
        title={canAdd ? "Click to read the pixel value under the pointer" : "Select a series before probing it"}
        icon={<Target style={{ width: 11, height: 11 }} aria-hidden="true" />}
        onClick={() => {
          onSelectTool("probe");
          send("addProbe");
        }}
      />
      <Readout
        label="Open"
        value={measurementCount === null ? HOROS_DASH : countText(measurementCount)}
        title={
          measurementCount === null
            ? "This session does not report open measurements"
            : "Measurements currently on the image"
        }
      />
      <div style={{ display: "flex", gap: P.xxs }}>
        <ActionButton
          label="Delete last measurement"
          title={`Remove the most recent measurement (${HOROS_ACTION_SHORTCUTS.deleteLastMeasurement})`}
          disabled={!canCommand || measurementCount === 0}
          icon={<Trash2 style={{ width: 11, height: 11 }} aria-hidden="true" />}
          onClick={() => send("deleteLastMeasurement")}
        />
        <ActionButton
          label="Clear all measurements"
          title={`Remove every measurement from the image (${HOROS_ACTION_SHORTCUTS.clearMeasurements})`}
          disabled={!canCommand || measurementCount === 0}
          icon={<Trash2 style={{ width: 11, height: 11 }} aria-hidden="true" />}
          onClick={() => send("clearMeasurements")}
        />
      </div>

      {/* The stack this panel is acting on, named so the numbers have a subject. */}
      <div
        style={{
          marginTop: "auto",
          paddingTop: P.xs,
          borderTop: `1px solid ${C.hairlineDark}`,
          color: C.textFaint,
          fontFamily: F.mono,
          fontSize: F.micro,
          lineHeight: F.lineTight,
        }}
      >
        <div className="horos-truncate">
          {series
            ? `SER ${text(series.seriesNumber)} ${text(series.modality)} ${text(series.seriesDescription)}`
            : "NO SERIES OPEN"}
        </div>
        <div className="horos-truncate">
          {series
            ? `${countText(series.loadedInstanceCount)}/${countText(series.instanceCount)} IM  ${
                series.isComplete ? "COMPLETE" : "INCOMPLETE"
              }`
            : "PICK A SERIES IN THE LEFT PANEL"}
        </div>
      </div>
    </div>
  );
}

/** A 90 degree rotation arrow, drawn small enough for a 20px control. */
function RotateGlyph({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="11"
      height="11"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
      style={direction === "left" ? { transform: "scaleX(-1)" } : undefined}
    >
      <path d="M13 8a5 5 0 1 1-1.6-3.7" strokeLinecap="round" />
      <path d="M13.2 1.8v2.9h-2.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** A step chevron, drawn small enough for a 20px control. */
function ChevronGlyph({ direction }: { direction: "up" | "down" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="11"
      height="11"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      aria-hidden="true"
      style={direction === "up" ? { transform: "rotate(180deg)" } : undefined}
    >
      <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default HorosToolPanel;
