/**
 * CINE CONTROLS (frame transport).
 *
 * A DSA or venogram run is a temporal sequence, and reading it means stepping
 * frame by frame. The transport therefore has two obligations:
 *
 *   1. Real controls exist and are operable on a multi-frame series.
 *   2. A single-frame series has nothing to transport, so the transport is
 *      disabled rather than present and inert-looking.
 *
 * (2) is the one worth guarding. A live-looking play button on a
 * single-frame radiograph implies temporal data that does not exist. On a
 * clinical workstation that is a fabricated claim about the study, and it is
 * exactly the kind of thing that survives a redesign because nobody thinks
 * about the one-frame case.
 *
 * horosTypes.ts fixes the vocabulary this suite asserts against: the cine
 * commands `cinePlay`, `cinePause`, `cineFirst`, `cinePrevious`, `cineNext`,
 * `cineLast`, `cineLoop` and `cineFps`, and `HOROS_CINE_IDLE` is the state of a
 * stopped player that has never been configured. `HorosViewportReadout` carries
 * `imageIndex` and `imageCount`, which is what decides whether a transport has
 * anything to do.
 */

import { describe, it, expect } from "vitest";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import type {
  HorosCineState,
  HorosViewportCommand,
  HorosViewportReadout,
} from "../../app/components/imaging/horos/horosTypes";

const NOOP = (): void => {};

type CineControlsModule = {
  CineControls?: React.ComponentType<Record<string, unknown>>;
};

async function loadCineControls(): Promise<React.ComponentType<Record<string, unknown>>> {
  try {
    const mod = (await import(
      /* @vite-ignore */ "../../app/components/imaging/horos/CineControls"
    )) as unknown as CineControlsModule;
    if (!mod.CineControls) {
      throw new Error("module resolved but exported no CineControls named export");
    }
    return mod.CineControls;
  } catch (cause) {
    throw new Error(
      `CineControls could not be loaded from ` +
        `"app/components/imaging/horos/CineControls.tsx".\n  Underlying error: ` +
        `${cause instanceof Error ? cause.message : String(cause)}`,
    );
  }
}

/** A readout for a running 120-frame DSA, currently on frame 42. */
function readout(overrides: Partial<HorosViewportReadout> = {}): HorosViewportReadout {
  return {
    slotIndex: 0,
    seriesInstanceUid: "1.2.840.10008.5.1.4.1.1.2.1",
    modality: "XA",
    seriesDescription: "Selective Splenic Artery DSA",
    imageIndex: 41,
    imageCount: 120,
    windowWidth: 2048,
    windowCenter: 1024,
    zoom: 1,
    rotation: 0,
    isInverted: false,
    rows: 864,
    columns: 864,
    isLoaded: true,
    ...overrides,
  };
}

const RUNNING: HorosCineState = { isPlaying: false, framesPerSecond: 15, loop: true };
const IDLE: HorosCineState = { isPlaying: false, framesPerSecond: 0, loop: true };

function render(props: Record<string, unknown>): string {
  return renderToStaticMarkup(
    React.createElement(CineControlsComponent, {
      readout: readout(),
      cine: RUNNING,
      enabledCommands: null,
      onCommand: NOOP,
      ...props,
    }),
  );
}

/**
 * True when the markup contains a disabled control.
 *
 * Matches the three ways a React component expresses it: the `disabled`
 * attribute, `aria-disabled`, or a disabled-looking data attribute. Requiring
 * only one of them would fail a correct-but-different implementation.
 */
function hasDisabledControl(html: string): boolean {
  return (
    /\bdisabled\b/.test(html) ||
    /aria-disabled="true"/.test(html) ||
    /data-disabled="true"/.test(html)
  );
}

let CineControlsComponent: React.ComponentType<Record<string, unknown>>;

describe("CineControls: frame transport", () => {
  describe("the cine command vocabulary", () => {
    it("is exported with the transport commands the controls issue", async () => {
      // These are the commands HorosAppShell dispatches. If the set changed,
      // the transport here would be dispatching commands nothing handles.
      const REQUIRED: HorosViewportCommand[] = [
        "cinePlay",
        "cinePause",
        "cineFirst",
        "cinePrevious",
        "cineNext",
        "cineLast",
        "cineLoop",
        "cineFps",
      ];

      // The union is type-level, so it is verified by asserting the constants
      // module compiles and the type accepts every required command.
      const check: HorosViewportCommand[] = REQUIRED;
      expect(check).toHaveLength(8);
    });

    it("exports HOROS_CINE_IDLE as a stopped, unconfigured player", async () => {
      const mod = (await import(
        /* @vite-ignore */ "../../app/components/imaging/horos/horosTypes"
      )) as { HOROS_CINE_IDLE?: HorosCineState };

      expect(
        mod.HOROS_CINE_IDLE,
        "horosTypes must export HOROS_CINE_IDLE so a never-configured player has " +
          "one defined state rather than an ad-hoc object at each call site.",
      ).toBeDefined();

      expect(mod.HOROS_CINE_IDLE!.isPlaying).toBe(false);
      expect(
        mod.HOROS_CINE_IDLE!.framesPerSecond,
        "An unconfigured player must report 0 fps, never a guessed rate.",
      ).toBe(0);
    });
  });

  describe("on a multi-frame series", () => {
    it("renders real transport controls", async () => {
      CineControlsComponent = await loadCineControls();
      const html = render({});

      // At minimum: play/pause plus a way to step. A transport with only a
      // play button cannot be used to inspect one specific frame.
      expect(
        html,
        `Multi-frame transport must offer play/pause. Rendered: ${html.slice(0, 900)}`,
      ).toMatch(/play|pause|▶|⏸/i);
      expect(
        html,
        `Multi-frame transport must offer frame stepping. Rendered: ${html.slice(0, 900)}`,
      ).toMatch(/step|next|previous|prev|forward|back|first|last/i);
    });

    it("shows the current frame of the total", async () => {
      CineControlsComponent = await loadCineControls();
      const html = render({});

      expect(
        html,
        `Transport must show the frame position. Rendered: ${html.slice(0, 900)}`,
      ).toMatch(/42|41/);
      expect(html, "Transport must show the total frame count.").toMatch(/120/);
    });

    it("leaves the transport operable", async () => {
      CineControlsComponent = await loadCineControls();
      const html = render({});

      expect(
        hasDisabledControl(html),
        `A 120-frame series has a real transport; it must not render disabled. ` +
          `Rendered: ${html.slice(0, 900)}`,
      ).toBe(false);
    });

    it("shows the configured frame rate", async () => {
      CineControlsComponent = await loadCineControls();
      const html = render({});

      expect(
        html,
        `A running DSA's frame rate must be visible. Rendered: ${html.slice(0, 900)}`,
      ).toMatch(/15/);
    });
  });

  describe("on a single-frame series", () => {
    it("disables the transport because there is nothing to transport", async () => {
      CineControlsComponent = await loadCineControls();
      const html = render({
        readout: readout({ imageIndex: 0, imageCount: 1 }),
        cine: IDLE,
      });

      expect(
        hasDisabledControl(html),
        `A single-frame series must render the transport disabled. A ` +
          `live-looking play button on a one-frame radiograph claims temporal ` +
          `data that does not exist. Rendered: ${html.slice(0, 900)}`,
      ).toBe(true);
    });

    it("never claims to be playing on a single-frame series", async () => {
      CineControlsComponent = await loadCineControls();
      const html = render({
        readout: readout({ imageIndex: 0, imageCount: 1 }),
        // The pathological input: a caller that left isPlaying true.
        cine: { isPlaying: true, framesPerSecond: 15, loop: true },
      });

      expect(
        html,
        `A single-frame series must not render a playing state. ` +
          `Rendered: ${html.slice(0, 900)}`,
      ).not.toMatch(/data-playing="true"|aria-pressed="true"|is-playing/i);
    });

    it("reports a single frame as one of one rather than omitting the count", async () => {
      CineControlsComponent = await loadCineControls();
      const html = render({
        readout: readout({ imageIndex: 0, imageCount: 1 }),
        cine: IDLE,
      });

      // The frame count is real information: it is how the clinician knows this
      // is a still rather than a loop they have not found.
      expect(
        html,
        `Single-frame transport must still report 1 of 1. ` +
          `Rendered: ${html.slice(0, 900)}`,
      ).toMatch(/\b1\b/);
    });
  });

  describe("degenerate frame counts", () => {
    it("renders without inventing a frame count when none is known", async () => {
      CineControlsComponent = await loadCineControls();
      const html = render({
        readout: readout({ imageIndex: 0, imageCount: 0 }),
        cine: IDLE,
      });

      // NumberOfFrames can be absent from a malformed instance. Guessing a
      // total (120, 216, 999) is a fabricated acquisition figure.
      expect(
        html,
        `An absent frame count must not be invented. Rendered: ${html.slice(0, 900)}`,
      ).not.toMatch(/\b120\b/);
    });

    it("renders without leaking NaN or Infinity to the clinician", async () => {
      CineControlsComponent = await loadCineControls();
      const html = render({
        readout: readout({ imageIndex: 0, imageCount: 0 }),
        cine: IDLE,
      });

      expect(
        html,
        "A zero frame count must not leak NaN/Infinity to the clinician.",
      ).not.toMatch(/\bNaN\b|Infinity/);
    });

    it("renders without crashing when the frame index exceeds the count", async () => {
      CineControlsComponent = await loadCineControls();

      // Happens when a series shrinks mid-session.
      let html: string;
      try {
        html = render({
          readout: readout({ imageIndex: 4800, imageCount: 3 }),
        });
      } catch (cause) {
        throw new Error(
          `CineControls threw on an out-of-range frame index. ` +
            `${cause instanceof Error ? cause.stack : String(cause)}`,
        );
      }

      expect(
        html,
        "Out-of-range frame index leaked NaN/Infinity to the clinician.",
      ).not.toMatch(/\bNaN\b|Infinity/);
    });

    it("renders an empty viewport with nothing loaded, inventing no frames", async () => {
      CineControlsComponent = await loadCineControls();
      const html = render({
        readout: readout({
          imageIndex: 0,
          imageCount: 0,
          isLoaded: false,
          modality: null,
          seriesDescription: null,
        }),
        cine: IDLE,
      });

      expect(
        html,
        "An empty viewport must not present a frame count or a position.",
      ).not.toMatch(/\b120\b/);
    });
  });
});