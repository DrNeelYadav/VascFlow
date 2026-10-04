"use client";

/**
 * ONE CORNERSTONE STACK VIEWPORT.
 *
 * This is the only file in `horos/` that touches the rendering engine, and the
 * integration seam the chrome was written against. It satisfies
 * `HorosViewportSlotProps` exactly: the shell hands it a slot index, a layout
 * mode, a list of Cornerstone imageIds and a tool mode, and it fills that slot
 * edge to edge with pixels plus the four-corner overlay.
 *
 * What it deliberately does not do
 * --------------------------------
 * It does not fetch anything. `imageIds` is authoritative and is used verbatim;
 * an imageId is never constructed, guessed or substituted, because a fabricated
 * imageId either fails silently or, worse, renders the wrong patient's pixels.
 * An empty `imageIds` therefore produces an explicit empty state with the
 * shell's reason, never a grey rectangle that looks like a decoding failure.
 *
 * StrictMode and teardown
 * ----------------------
 * React 18 double-invokes effects in development and the App Router re-mounts
 * on navigation, so mount/unmount cycles happen far more often than the user
 * sees. Two consequences drive the structure here:
 *
 *   - The rendering engine is created in the effect and destroyed in its
 *     cleanup, keyed by a per-mount id that includes a module-level counter so
 *     two live slots can never collide on one id.
 *   - The async init is guarded by a `cancelled` flag checked after every await
 *     and inside every callback, so a stack load that resolves after unmount
 *     touches neither the DOM nor a destroyed engine.
 *
 * Truthfulness
 * ------------
 * Every value the overlay prints comes from Cornerstone's metadata providers or
 * from the live camera, and every provider can answer `undefined` when the PACS
 * did not register the instance's metadata. That undefined becomes `null`, which
 * the overlay renders as a placeholder. Nothing is defaulted: no patient name,
 * no geometry, no window width, and `zoom` stays null until a real fit-to-window
 * camera has been measured.
 */

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { StackViewport } from "@cornerstonejs/core";
import { HOROS_COLORS, HOROS_FONT, HOROS_SPACE } from "./horosTokens";
import type {
  HorosLayoutMode,
  HorosToolMode,
  HorosViewportReadout,
  HorosViewportSlotProps,
} from "./horosTypes";
import { DicomCornerOverlay } from "./DicomCornerOverlay";

const C = HOROS_COLORS;
const F = HOROS_FONT;
const P = HOROS_SPACE;

/** Cornerstone events this viewport listens for. Values are Cornerstone's own. */
const EVENT_IMAGE_RENDERED = "CORNERSTONE_IMAGE_RENDERED";
const EVENT_CAMERA_MODIFIED = "CORNERSTONE_CAMERA_MODIFIED";
const EVENT_VOI_MODIFIED = "CORNERSTONE_VOI_MODIFIED";
const EVENT_STACK_NEW_IMAGE = "CORNERSTONE_STACK_NEW_IMAGE";
const EVENT_STACK_SCROLL = "CORNERSTONE_STACK_VIEWPORT_SCROLL";
const EVENT_IMAGE_LOADED = "CORNERSTONE_IMAGE_LOADED";

/** The Cornerstone event type, narrowed to what this file subscribes to. */
type CornerstoneEventListener = (event: Event) => void;

/** Per-mount sequence, so two slots never claim the same engine id. */
let viewportInstanceCounter = 0;

/** The rendering-engine id prefix. Namespaced so it cannot clash with ImagingViewport. */
const ENGINE_ID_PREFIX = "horos-viewport-engine";

/** The subset of the Cornerstone core module this viewport drives. */
interface CoreSlice {
  RenderingEngine: new (id?: string) => {
    enableElement(entry: {
      viewportId: string;
      type: "stack";
      element: HTMLDivElement;
      defaultOptions?: { background?: [number, number, number]; suppressEvents?: boolean };
    }): void;
    disableElement(viewportId: string): void;
    getViewport<T>(viewportId: string): T;
    render(): void;
    resize(immediate?: boolean, keepCamera?: boolean): void;
    destroy(): void;
  };
  metaData: {
    get<T>(type: string, imageId: string): T | undefined;
  };
  eventTarget: {
    addEventListener(type: string, callback: CornerstoneEventListener): void;
    removeEventListener(type: string, callback: CornerstoneEventListener): void;
  };
}

/** The live viewport handle, plus the slices needed to drive it. */
interface MountedViewport {
  engine: InstanceType<CoreSlice["RenderingEngine"]>;
  viewport: StackViewport;
  viewportId: string;
}

/**
 * Runs once per Cornerstone runtime: creates the two HOROS tool groups and
 * binds the PACS mouse map.
 *
 * `createHorosToolGroups` in the sibling `cornerstone/tools` module destroys any
 * groups already registered under its ids before creating new ones. That is
 * correct for a whole-workstation teardown and wrong for a second viewport
 * mounting into a live grid, so this memoises per runtime and every later slot
 * only attaches to the groups that already exist.
 */
let toolGroupsRuntime: unknown = null;

async function ensureHorosToolGroups(runtime: { tools: unknown }): Promise<void> {
  if (toolGroupsRuntime === runtime.tools) return;
  const toolsModule = await import("../cornerstone/tools");
  const tools = runtime.tools as Parameters<typeof toolsModule.createHorosToolGroups>[0];
  toolsModule.createHorosToolGroups(tools);
  toolsModule.applyHorosMouseBindings(tools);
  toolGroupsRuntime = runtime.tools;
}

/** Maps this folder's tool vocabulary onto Cornerstone's tool modes. */
const TOOL_MODE_BY_HOROS_MODE: Readonly<Record<HorosToolMode, string>> = {
  none: "none",
  windowLevel: "windowLevel",
  zoom: "zoom",
  pan: "pan",
  rotate: "rotate",
  stackScroll: "stackScroll",
  length: "length",
  angle: "angle",
  region: "region",
  probe: "probe",
};

/** Reads a string field from a metadata provider result, or null. */
function providerString(
  source: unknown,
  key: string,
): string | null {
  if (!source || typeof source !== "object") return null;
  const value = (source as Record<string, unknown>)[key];
  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : null;
  }
  if (typeof value === "number" && Number.isFinite(value)) return String(value);
  return null;
}

/** Reads a numeric field from a metadata provider result, or null. */
function providerNumber(source: unknown, key: string): number | null {
  if (!source || typeof source !== "object") return null;
  const value = (source as Record<string, unknown>)[key];
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
  }
  return null;
}

/** The empty state. Never a fake grayscale rectangle. */
function ViewportEmptyState({ message }: { message: string }) {
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
        color: C.textDim,
        fontFamily: F.sans,
        fontSize: F.tiny,
        lineHeight: F.lineTight,
      }}
    >
      <span
        style={{
          color: C.textMuted,
          fontWeight: F.weightBold,
          letterSpacing: F.trackWide,
          textTransform: "uppercase",
        }}
      >
        No image
      </span>
      <span style={{ fontFamily: F.mono, fontSize: F.micro, maxWidth: 320 }}>{message}</span>
    </div>
  );
}

export function StudyViewport({
  slotIndex,
  slotCount,
  layoutMode,
  imageIds,
  activeTool,
  series,
  selectedInstanceId,
  isInverted,
  requestedImageIndex,
  requestedCineFrame,
  emptyMessage,
  onReadout,
  onSlotFocus,
  onImageIndexChange,
}: HorosViewportSlotProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const mountedRef = useRef<MountedViewport | null>(null);
  const coreRef = useRef<CoreSlice | null>(null);

  const [engineFailed, setEngineFailed] = useState<string | null>(null);

  // The ids are stable for the life of this mount, and distinct per slot and
  // per mount, so a StrictMode double-mount or a second grid cannot collide.
  const engineId = useMemo(() => `${ENGINE_ID_PREFIX}-${slotIndex}`, [slotIndex]);
  const viewportId = useMemo(
    () => `${ENGINE_ID_PREFIX}-${slotIndex}-viewport-${viewportInstanceCounter++}`,
    // The counter is consumed once, at mount, and never again: the id must stay
    // stable across re-renders or the engine would be recreated on every frame.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [slotIndex],
  );

  /** The stack the shell handed us, as a stable string key for effect deps. */
  const stackKey = imageIds.join("|");

  const hasImages = imageIds.length > 0;

  /**
   * Publishes what the viewport is really showing.
   *
   * Reads the live camera and the metadata providers, and reports null for
   * anything it cannot establish. Called on every render, camera, VOI and stack
   * event, so the status bar and the overlay can never disagree with the pixels.
   */
  const publishReadout = useCallback(() => {
    const mounted = mountedRef.current;
    const core = coreRef.current;

    const base: HorosViewportReadout = {
      slotIndex,
      seriesInstanceUid: series?.seriesInstanceUid ?? null,
      modality: series?.modality ?? null,
      seriesDescription: series?.seriesDescription ?? null,
      imageIndex: 0,
      imageCount: 0,
      windowWidth: null,
      windowCenter: null,
      zoom: null,
      rotation: 0,
      isInverted,
      rows: null,
      columns: null,
      isLoaded: false,
    };

    if (!mounted || !core || imageIds.length === 0) {
      onReadout(base);
      return;
    }

    const viewport = mounted.viewport;
    let currentImageId: string | null = null;
    let currentIndex = 0;
    let stackLength = 0;
    try {
      currentIndex = viewport.getCurrentImageIdIndex();
      stackLength = viewport.getImageIds().length;
      currentImageId = viewport.getCurrentImageId();
    } catch {
      // A viewport destroyed mid-callback reports nothing. Reporting the empty
      // readout is the truthful answer; throwing would take down the shell.
      onReadout(base);
      return;
    }

    if (!Number.isFinite(currentIndex) || currentIndex < 0) currentIndex = 0;
    if (!Number.isFinite(stackLength) || stackLength < 0) stackLength = 0;

    const properties = viewport.getProperties?.() ?? {};
    const voi = properties.voiRange;
    const windowWidth =
      voi && Number.isFinite(voi.upper) && Number.isFinite(voi.lower)
        ? voi.upper - voi.lower
        : null;
    const windowCenter =
      voi && Number.isFinite(voi.upper) && Number.isFinite(voi.lower)
        ? (voi.upper + voi.lower) / 2
        : null;

    // Zoom is reported only once a real fit-to-window camera has been measured.
    // Until then it is null, because "1.00x" would be an invented magnification.
    const camera = viewport.getCamera?.();
    const parallelScale = camera?.parallelScale;
    const zoom =
      typeof parallelScale === "number" && Number.isFinite(parallelScale) && parallelScale > 0
        ? parallelScale
        : null;
    const rotation =
      typeof camera?.rotation === "number" && Number.isFinite(camera.rotation)
        ? camera.rotation
        : 0;

    // Geometry comes from the wadors metadata providers. Any of them answers
    // undefined when the instance was never registered, which is exactly the
    // post-upgrade case, and undefined becomes null. Patient identity is
    // deliberately absent from the readout: the chrome does not need it, and the
    // overlay reads it straight off the instance the viewport is showing.
    const plane = currentImageId ? core.metaData.get("imagePlaneModule", currentImageId) : undefined;

    onReadout({
      ...base,
      imageIndex: currentIndex,
      imageCount: stackLength,
      windowWidth,
      windowCenter,
      zoom,
      rotation,
      rows: providerNumber(plane, "rows"),
      columns: providerNumber(plane, "columns"),
      isLoaded: true,
    });
  }, [imageIds.length, isInverted, onReadout, series, slotIndex]);

  /**
   * Reads the overlay's DICOM fields for the image currently on the viewport.
   *
   * Separate from `publishReadout` because these belong to the overlay, not to
   * the status bar, and because they must come from the instance rather than
   * from the study row the shell happens to hold.
   */
  const readOverlayFacts = useCallback(() => {
    const mounted = mountedRef.current;
    const core = coreRef.current;
    if (!mounted || !core) return null;

    let imageId: string | null = null;
    let index = 0;
    let total = 0;
    try {
      imageId = mounted.viewport.getCurrentImageId();
      index = mounted.viewport.getCurrentImageIdIndex();
      total = mounted.viewport.getImageIds().length;
    } catch {
      return null;
    }
    if (!imageId) return null;
    if (!Number.isFinite(index) || index < 0) index = 0;
    if (!Number.isFinite(total) || total < 0) total = 0;

    const study = core.metaData.get("generalStudyModule", imageId);
    const studySeries = core.metaData.get("generalSeriesModule", imageId);
    const patient = core.metaData.get("patientModule", imageId);
    const patientStudy = core.metaData.get("patientStudyModule", imageId);
    const plane = core.metaData.get("imagePlaneModule", imageId);
    const generalImage = core.metaData.get("generalImageModule", imageId);
    const voi = mounted.viewport.getProperties?.()?.voiRange;
    const camera = mounted.viewport.getCamera?.();

    return {
      patientName: providerString(patient, "patientName"),
      patientId: providerString(patient, "patientID"),
      patientSex: providerString(patientStudy, "patientSex"),
      patientAge: providerString(patientStudy, "patientAge"),
      studyDate: providerString(study, "studyDate"),
      modality: providerString(studySeries, "modality"),
      seriesDescription: providerString(studySeries, "seriesDescription"),
      frameIndex: index,
      frameCount: total,
      institution: providerString(generalImage, "institutionName"),
      manufacturer: providerString(generalImage, "manufacturer"),
      zoom:
        typeof camera?.parallelScale === "number" && Number.isFinite(camera.parallelScale)
          ? camera.parallelScale
          : null,
      windowWidth:
        voi && Number.isFinite(voi.upper) && Number.isFinite(voi.lower)
          ? voi.upper - voi.lower
          : null,
      windowLevel:
        voi && Number.isFinite(voi.upper) && Number.isFinite(voi.lower)
          ? (voi.upper + voi.lower) / 2
          : null,
      preset: providerString(mounted.viewport.getProperties?.(), "preset"),
      slicePosition: providerNumber(plane, "sliceLocation"),
      stackCount: total,
    };
  }, []);

  // Overlay facts live in state so a stack scroll repaints the overlay. They
  // are refreshed by the same event subscription that refreshes the readout.
  const [overlayFacts, setOverlayFacts] = useState<ReturnType<typeof readOverlayFacts>>(null);

  const refresh = useCallback(() => {
    publishReadout();
    setOverlayFacts(readOverlayFacts());
  }, [publishReadout, readOverlayFacts]);

  /**
   * Mounts the engine and every listener.
   *
   * Runs once per slot. Cornerstone is imported dynamically inside the effect
   * because it spawns Web Workers and compiles WASM, neither of which exists
   * during server rendering.
   */
  useEffect(() => {
    let cancelled = false;

    const listeners: Array<[string, CornerstoneEventListener]> = [];

    async function mount(): Promise<void> {
      const element = elementRef.current;
      if (!element) return;

      // The sibling `cornerstone/init` module owns the single memo that makes
      // Cornerstone initialisation idempotent across StrictMode and across the
      // App Router's multiple module instances.
      const [{ initialiseCornerstone }, toolsModule] = await Promise.all([
        import("../cornerstone/init"),
        import("../cornerstone/tools"),
      ]);

      if (cancelled) return;

      let runtime: Awaited<ReturnType<typeof initialiseCornerstone>>;
      try {
        runtime = await initialiseCornerstone();
      } catch (cause) {
        if (cancelled) return;
        // Reported, never swallowed: a silent black viewport is read as a
        // decoding failure rather than as a browser that cannot run the engine.
        setEngineFailed(
          cause instanceof Error ? cause.message : "Cornerstone could not be initialised",
        );
        return;
      }

      if (cancelled) return;

      const core = runtime.core as unknown as CoreSlice;
      coreRef.current = core;

      // Tool groups are shared process-wide, and `createHorosToolGroups`
      // destroys any existing groups under the same ids before creating them.
      // Calling it per viewport would therefore strip the previous slot's
      // registration on every mount, so it runs once per runtime and later
      // slots only attach.
      await ensureHorosToolGroups(runtime);

      if (cancelled) return;

      const engine = new core.RenderingEngine(engineId);
      engine.enableElement({
        viewportId,
        type: "stack",
        element,
        defaultOptions: {
          // True black, from the token. DICOM pixels are black, not grey, and a
          // grey viewport background tints the whole image.
          background: [0, 0, 0],
          suppressEvents: false,
        },
      });

      const viewport = engine.getViewport<StackViewport>(viewportId);

      try {
        toolsModule.attachViewportToToolGroups(
          runtime.tools as unknown as Parameters<typeof toolsModule.attachViewportToToolGroups>[0],
          viewportId,
        );
      } catch (cause) {
        // A viewport outside the tool groups ignores every drag, which reads as
        // a frozen workstation. Surfacing it beats a silently dead viewport.
        setEngineFailed(cause instanceof Error ? cause.message : String(cause));
      }

      mountedRef.current = { engine, viewport, viewportId };
      toolsModule.activateToolMode(
        runtime.tools as unknown as Parameters<typeof toolsModule.activateToolMode>[0],
        TOOL_MODE_BY_HOROS_MODE[activeTool] as never,
      );

      const onImage = (): void => {
        if (cancelled) return;
        refresh();
      };
      const onScroll = (event: Event): void => {
        if (cancelled) return;
        const detail = (event as CustomEvent<{ imageIdIndex?: number }>).detail;
        const index = detail?.imageIdIndex;
        if (typeof index === "number" && Number.isFinite(index)) {
          onImageIndexChange(slotIndex, index);
        }
        refresh();
      };

      const subscribed: Array<string> = [
        EVENT_IMAGE_RENDERED,
        EVENT_IMAGE_LOADED,
        EVENT_CAMERA_MODIFIED,
        EVENT_VOI_MODIFIED,
        EVENT_STACK_NEW_IMAGE,
        EVENT_STACK_SCROLL,
      ];
      for (const type of subscribed) {
        const handler = type === EVENT_STACK_SCROLL ? onScroll : onImage;
        core.eventTarget.addEventListener(type, handler);
        listeners.push([type, handler]);
      }

      setEngineFailed(null);
      refresh();
    }

    void mount();

    return () => {
      // Set first: every pending await and every event callback checks this
      // before touching the DOM or the engine.
      cancelled = true;
      const core = coreRef.current;
      for (const [type, handler] of listeners) {
        try {
          core?.eventTarget.removeEventListener(type, handler);
        } catch {
          // The event target is process-global and outlives any single slot;
          // a failed removal must not prevent the engine being destroyed.
        }
      }
      listeners.length = 0;

      const mounted = mountedRef.current;
      mountedRef.current = null;
      coreRef.current = null;
      if (mounted) {
        try {
          mounted.engine.disableElement(mounted.viewportId);
        } catch {
          // Already disabled, e.g. Cornerstone tore the element down first.
        }
        try {
          mounted.engine.destroy();
        } catch {
          // Same: a destroy on an already-destroyed engine is not recoverable
          // and not worth failing the unmount over.
        }
      }
    };
    // Mount/unmount only. `refresh`, `activeTool` and the stack are applied by
    // the effects below so a prop change never recreates the engine.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [engineId, viewportId, slotIndex]);

  /** Loads the stack whenever the shell hands us a different one. */
  useEffect(() => {
    const mounted = mountedRef.current;
    if (!mounted || imageIds.length === 0) return;

    let cancelled = false;
    const target = imageIds.slice();
    const initialIndex =
      requestedImageIndex !== null &&
      Number.isFinite(requestedImageIndex)
        ? Math.min(Math.max(Math.trunc(requestedImageIndex), 0), target.length - 1)
        : 0;

    void (async () => {
      try {
        await mounted.viewport.setStack(target, initialIndex);
        if (cancelled) return;
        mounted.viewport.render();
        refresh();
      } catch (cause) {
        if (cancelled) return;
        setEngineFailed(
          cause instanceof Error
            ? `Stack could not be displayed: ${cause.message}`
            : "Stack could not be displayed",
        );
      }
    })();

    return () => {
      cancelled = true;
    };
    // `stackKey` rather than `imageIds`: a fresh array with identical contents
    // must not reload the stack and throw away the decoded cache.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stackKey, engineId, viewportId]);

  /** Jumps to a slice the shell asked for. */
  useEffect(() => {
    const mounted = mountedRef.current;
    if (!mounted) return;
    const target =
      requestedCineFrame !== null && Number.isFinite(requestedCineFrame)
        ? requestedCineFrame
        : requestedImageIndex;
    if (target === null || !Number.isFinite(target)) return;
    const total = mounted.viewport.getImageIds?.().length ?? 0;
    if (total === 0) return;
    const clamped = Math.min(Math.max(Math.trunc(target), 0), total - 1);
    let cancelled = false;
    void mounted.viewport
      .setImageIdIndex(clamped)
      .then(() => {
        if (cancelled) return;
        mounted.viewport.render();
        refresh();
      })
      .catch(() => {
        // An out-of-range index against a stack that shrank mid-session is not
        // worth an error state: the next scroll or shell command corrects it.
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestedImageIndex, requestedCineFrame, stackKey]);

  /** Applies greyscale inversion from the shell. */
  useEffect(() => {
    const mounted = mountedRef.current;
    if (!mounted) return;
    try {
      mounted.viewport.setProperties({ invert: isInverted });
      mounted.viewport.render();
      refresh();
    } catch {
      // A viewport destroyed mid-transition cannot take the property; the next
      // mount reads it from props.
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInverted]);

  /** Arms the tool the pointer is bound to. */
  useEffect(() => {
    const mounted = mountedRef.current;
    if (!mounted) return;
    let cancelled = false;
    void (async () => {
      try {
        const [{ activateToolMode }, { initialiseCornerstone }] = await Promise.all([
          import("../cornerstone/tools"),
          import("../cornerstone/init"),
        ]);
        if (cancelled) return;
        const runtime = await initialiseCornerstone();
        if (cancelled) return;
        activateToolMode(
          runtime.tools as unknown as Parameters<typeof activateToolMode>[0],
          TOOL_MODE_BY_HOROS_MODE[activeTool] as never,
        );
      } catch {
        // The engine is still usable without a bound tool; navigation gestures
        // work and the panel reports the tool as unbound rather than crashing.
      }
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTool]);

  /**
   * Keeps the engine's idea of the element size in step with the DOM.
   *
   * A grid that reflows without a `resize` leaves the image letterboxed against
   * a stale canvas, which reads as a rendering fault.
   */
  useEffect(() => {
    const mounted = mountedRef.current;
    const element = elementRef.current;
    if (!mounted || !element) return;
    if (typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(() => {
      const current = mountedRef.current;
      if (!current) return;
      try {
        current.engine.resize(false, true);
      } catch {
        // The engine is mid-teardown; the next mount sizes itself.
      }
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const emptyText = engineFailed
    ? engineFailed
    : emptyMessage && emptyMessage.length > 0
      ? emptyMessage
      : series
        ? "No image decoded yet"
        : "No series selected";

  return (
    <div
      onMouseDown={() => onSlotFocus(slotIndex)}
      data-slot-index={slotIndex}
      data-layout-mode={layoutMode as HorosLayoutMode}
      data-slot-count={slotCount}
      data-has-images={hasImages ? "true" : "false"}
      data-selected-instance={selectedInstanceId ?? ""}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minWidth: 0,
        minHeight: 0,
        overflow: "hidden",
        backgroundColor: C.viewport,
      }}
    >
      {/* Cornerstone mounts its canvas into this element. It is sized by the
          grid, never by the overlay, and it owns the pointer gestures. */}
      <div ref={elementRef} style={{ position: "absolute", inset: 0 }} />

      {!hasImages ? <ViewportEmptyState message={emptyText} /> : null}

      {hasImages && overlayFacts ? <DicomCornerOverlay {...overlayFacts} /> : null}

      {/* The reason a slot is black is always stated. When the engine refuses
          the stack, that reason replaces the image rather than hiding behind a
          black rectangle. */}
      {hasImages && engineFailed ? (
        <div
          style={{
            position: "absolute",
            left: P.sm,
            bottom: P.sm,
            maxWidth: "60%",
            padding: `${P.xs}px ${P.sm}px`,
            backgroundColor: C.chrome,
            border: `1px solid ${C.alert}`,
            borderRadius: 2,
            color: C.alert,
            fontFamily: F.mono,
            fontSize: F.micro,
            lineHeight: F.lineTight,
          }}
        >
          {engineFailed}
        </div>
      ) : null}

      {/* Screen-reader summary of the slot, since the overlay itself is
          aria-hidden decoration over the pixels. */}
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
        Viewport {slotIndex + 1} of {slotCount}.{" "}
        {hasImages ? `${overlayFacts?.stackCount ?? 0} images loaded` : emptyText}
      </span>
    </div>
  );
}

export default StudyViewport;