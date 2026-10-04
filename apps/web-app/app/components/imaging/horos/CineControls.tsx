"use client";

/**
 * CINE TRANSPORT.
 *
 * A DSA or venogram run is a temporal sequence, and reading it means stepping
 * frame by frame rather than watching it. So the transport is not a media
 * player's scrub bar; it is a PACS frame counter with five explicit jumps and a
 * rate selector.
 *
 * The one behaviour worth defending is what happens on a single-frame series.
 * The departmental archive is CR/XA/MR/OT, and most of those objects are one
 * frame. A live-looking play button on a one-frame radiograph implies temporal
 * data that does not exist, which on a clinical workstation is a fabricated
 * claim about the study. So when `readout.imageCount` is not greater than one,
 * every transport control is rendered `disabled` and the strip says in as many
 * words that there is one frame and nothing to play.
 *
 * Two further rules:
 *
 *   - The frame count is never hidden behind a dash. Zero is zero and one is
 *     one, because how a clinician distinguishes "a still" from "a loop I have
 *     not found" is by reading the count.
 *   - A caller that left `cine.isPlaying` true on a single-frame series is
 *     overruled. The transport reports the state of the data, not the state of
 *     the prop.
 */

import React from "react";
import { HOROS_COLORS, HOROS_FONT, HOROS_SIZE, HOROS_SPACE } from "./horosTokens";
import type {
  HorosCineState,
  HorosViewportCommand,
  HorosViewportCommandHandler,
  HorosViewportReadout,
} from "./horosTypes";
import { HOROS_DASH, countText } from "./horosFormat";

const C = HOROS_COLORS;
const F = HOROS_FONT;
const S = HOROS_SIZE;
const P = HOROS_SPACE;

/**
 * Transport glyphs, drawn inline.
 *
 * These are the five standard media shapes, so they are written as paths rather
 * than imported. Importing an icon library for six triangles and two bars costs
 * two seconds of module transform time on the viewer cold path and in tests,
 * which is a real cost for glyphs that are themselves the simplest paths there
 * are. `HorosLayoutPicker` draws its grid glyphs the same way.
 *
 * Every glyph inherits `currentColor`, so a control's own colour drives it and
 * the disabled state needs no separate drawing.
 */
const GLYPHS = {
  /** Skip to the first frame: a bar then a left-pointing triangle. */
  first: "M3 2.5v7h1.6v-7H3zm8.4 0L5.9 6l5.5 3.5v-7z",
  /** Step back one frame. */
  previous: "M8.6 2.5L4.1 6l4.5 3.5v-7z",
  /** Step forward one frame. */
  next: "M3.4 2.5L8.9 6l-5.5 3.5v-7z",
  /** Skip to the last frame: a right-pointing triangle then a bar. */
  last: "M7.4 2.5L11.1 6l-3.7 3.5v-7zM9.9 2.5H7.4v7h2.5v-7z",
  /** Play: one right-pointing triangle. */
  play: "M3.6 2.2l6.4 3.8-6.4 3.8V2.2z",
  /** Pause: two upright bars. */
  pause: "M3.6 2.4h2.1v7.2H3.6V2.4zm2.7 0h2.1v7.2H6.3V2.4z",
  /** Loop: a closed return arrow. */
  loop: "M3 4.2h4.1V2.9l2.9 2.4-2.9 2.4V6.3H4.4v2.1H3V4.2z",
} as const;

type GlyphName = keyof typeof GLYPHS;

/** One transport glyph, on a 12x12 grid, sized by its control box. */
function Glyph({ name, size = 11 }: { name: GlyphName; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      viewBox="0 0 12 12"
      style={{ display: "block", flex: "0 0 auto" }}
    >
      <path d={GLYPHS[name]} fill="currentColor" />
    </svg>
  );
}

export interface CineControlsProps {
  /** What the viewport is showing right now. */
  readout: HorosViewportReadout | null;
  /** The transport's own state. */
  cine: HorosCineState;
  /**
   * Per-command enablement supplied by the shell. Null means the shell has no
   * opinion and the transport decides for itself from the frame count.
   */
  enabledCommands?: Partial<Record<HorosViewportCommand, boolean>> | null;
  /** Issues a command against the active viewport. */
  onCommand: HorosViewportCommandHandler;
  className?: string;
}

/**
 * Playback rates offered, in frames per second.
 *
 * These are transport settings, not acquisition facts: the user picks a rate,
 * and the choice is never reported as a property of the study. The study's own
 * rate, when the instance carries one, arrives in `cine.framesPerSecond`.
 */
const FPS_OPTIONS: readonly number[] = [1, 5, 10, 15, 20, 25, 30];

/** One transport button. Square, flat, monospace, no rounded card. */
function TransportButton({
  title,
  onClick,
  disabled,
  pressed,
  children,
}: {
  title: string;
  onClick: () => void;
  disabled: boolean;
  pressed?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title={title}
      aria-label={title}
      onClick={onClick}
      disabled={disabled}
      aria-pressed={pressed}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: S.control,
        height: S.control,
        padding: 0,
        backgroundColor: pressed ? C.accent : C.control,
        color: pressed ? C.accentText : disabled ? C.textFaint : C.text,
        border: `1px solid ${pressed ? C.accent : C.hairline}`,
        borderRadius: S.radius,
        cursor: disabled ? "default" : "pointer",
      }}
    >
      {children}
    </button>
  );
}

/** The strip frame: the chrome-coloured bar every transport sits in. */
const stripStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: P.xs,
  flex: "0 0 auto",
  height: S.control + 4,
  padding: `0 ${P.xs}px`,
  backgroundColor: C.chrome,
  borderTop: `1px solid ${C.hairlineDark}`,
  color: C.text,
  fontFamily: F.sans,
  fontSize: F.micro,
  lineHeight: 1,
  whiteSpace: "nowrap",
  overflow: "hidden",
};

export function CineControls({
  readout,
  cine,
  enabledCommands,
  onCommand,
  className,
}: CineControlsProps) {
  // Every number below comes from the readout or is null. Nothing is derived
  // from a filename, a modality or a "typical" study.
  const imageCount =
    readout && Number.isFinite(readout.imageCount) && readout.imageCount > 0
      ? Math.trunc(readout.imageCount)
      : 0;
  const imageIndex =
    readout && Number.isFinite(readout.imageIndex) ? Math.trunc(readout.imageIndex) : 0;

  // A viewport that never published a readout has nothing to transport, and one
  // holding a single frame has nothing to transport either.
  const hasFrames = imageCount > 1;

  // The frame index is clamped rather than trusted: a series can shrink
  // mid-session, and a scrub bar whose value exceeds its own maximum is a
  // control that lies about where the viewport is.
  const clampedIndex = hasFrames ? Math.min(Math.max(imageIndex, 0), imageCount - 1) : 0;

  // The shell may also gate a command explicitly. Only an explicit false wins.
  const commandAllowed = (command: HorosViewportCommand): boolean =>
    enabledCommands?.[command] !== false;

  // Overrule a caller that left `isPlaying` true on a series with nothing to
  // play: the transport reports the data, not the prop.
  const isPlaying = cine.isPlaying && hasFrames;

  const rate = cine.framesPerSecond;
  const hasRate = Number.isFinite(rate) && rate > 0;
  const fpsOptions = FPS_OPTIONS.includes(rate) ? FPS_OPTIONS : [...FPS_OPTIONS, rate];

  const transportEnabled = hasFrames && commandAllowed("cinePlay");

  return (
    <div style={stripStyle} className={className}>
      {/* Transport. Disabled as a block when there is nothing to transport. */}
      <div style={{ display: "flex", alignItems: "center", gap: 1, flex: "0 0 auto" }}>
        <TransportButton
          title="First frame"
          disabled={!transportEnabled || !commandAllowed("cineFirst")}
          onClick={() => onCommand("cineFirst")}
        >
          <Glyph name="first" />
        </TransportButton>
        <TransportButton
          title="Previous frame"
          disabled={!transportEnabled || !commandAllowed("cinePrevious")}
          onClick={() => onCommand("cinePrevious")}
        >
          <Glyph name="previous" />
        </TransportButton>
        <TransportButton
          title={isPlaying ? "Pause playback" : "Play the cine loop"}
          disabled={!transportEnabled}
          pressed={isPlaying}
          onClick={() => onCommand(isPlaying ? "cinePause" : "cinePlay")}
        >
          {isPlaying ? <Glyph name="pause" /> : <Glyph name="play" />}
        </TransportButton>
        <TransportButton
          title="Next frame"
          disabled={!transportEnabled || !commandAllowed("cineNext")}
          onClick={() => onCommand("cineNext")}
        >
          <Glyph name="next" />
        </TransportButton>
        <TransportButton
          title="Last frame"
          disabled={!transportEnabled || !commandAllowed("cineLast")}
          onClick={() => onCommand("cineLast")}
        >
          <Glyph name="last" />
        </TransportButton>
      </div>

      {/* Position. The count is printed even for one frame: that is how the
          clinician knows the object is a still rather than a loop. */}
      <span
        style={{
          fontFamily: F.mono,
          fontSize: F.tiny,
          fontVariantNumeric: "tabular-nums",
          color: C.text,
          flex: "0 0 auto",
          padding: `0 ${P.xs}px`,
          borderLeft: `1px solid ${C.hairline}`,
        }}
      >
        {imageCount > 0 ? `${clampedIndex + 1} / ${imageCount}` : HOROS_DASH}
      </span>

      {/* Scrub bar. Only offered when there is a range to scrub. */}
      <input
        type="range"
        aria-label="Frame position"
        min={0}
        max={Math.max(imageCount - 1, 0)}
        step={1}
        value={clampedIndex}
        disabled={!transportEnabled}
        onChange={(event) => onCommand("imageByIndex", Number(event.currentTarget.value))}
        style={{
          flex: "1 1 auto",
          minWidth: 40,
          accentColor: C.accent,
          cursor: transportEnabled ? "pointer" : "default",
        }}
      />

      {/* Rate. The label states the real rate, or says it is not set. */}
      <label
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: P.xxs,
          flex: "0 0 auto",
          color: C.textDim,
          fontFamily: F.sans,
          fontSize: F.micro,
          fontWeight: F.weightBold,
          letterSpacing: F.trackWide,
          textTransform: "uppercase",
        }}
      >
        FPS
        <select
          aria-label="Playback rate in frames per second"
          value={hasRate ? String(rate) : ""}
          disabled={!transportEnabled || !commandAllowed("cineFps")}
          onChange={(event) => onCommand("cineFps", Number(event.currentTarget.value))}
          style={{
            backgroundColor: C.control,
            color: hasRate ? C.text : C.textFaint,
            border: `1px solid ${C.hairline}`,
            borderRadius: S.radius,
            fontFamily: F.mono,
            fontSize: F.tiny,
            height: S.controlDense,
            cursor: transportEnabled ? "pointer" : "default",
          }}
        >
          {!hasRate ? (
            <option value="">{HOROS_DASH}</option>
          ) : null}
          {fpsOptions.map((option) => (
            <option key={option} value={String(option)}>
              {countText(option)}
            </option>
          ))}
        </select>
      </label>

      {/* Loop. A single frame cannot loop, so this is disabled with the rest. */}
      <button
        type="button"
        title={hasFrames ? "Loop playback at the end of the stack" : "A single frame has nothing to loop"}
        aria-label="Loop playback"
        onClick={() => onCommand("cineLoop")}
        disabled={!transportEnabled || !commandAllowed("cineLoop")}
        aria-pressed={cine.loop && hasFrames}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: P.xxs,
          height: S.control,
          padding: `0 ${P.xs}px`,
          backgroundColor: cine.loop && hasFrames ? C.accentWash : C.control,
          color: cine.loop && hasFrames ? C.accentText : hasFrames ? C.text : C.textFaint,
          border: `1px solid ${cine.loop && hasFrames ? C.accent : C.hairline}`,
          borderRadius: S.radius,
          fontFamily: F.sans,
          fontSize: F.micro,
          fontWeight: F.weightBold,
          letterSpacing: F.trackWide,
          textTransform: "uppercase",
          cursor: transportEnabled ? "pointer" : "default",
        }}
      >
        <Glyph name="loop" />
        Loop
      </button>

      {/* The reason the transport is inert, stated plainly. */}
      {!hasFrames ? (
        <span
          style={{
            flex: "0 0 auto",
            paddingLeft: P.xs,
            color: C.textDim,
            fontFamily: F.sans,
            fontSize: F.micro,
            letterSpacing: F.trackWide,
            textTransform: "uppercase",
          }}
        >
          {imageCount === 1 ? "Single frame, no cine" : "No frames loaded"}
        </span>
      ) : null}
    </div>
  );
}

export default CineControls;