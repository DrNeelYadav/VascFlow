"use client";

/**
 * The HOROS workstation shell.
 *
 * Composes the chrome into the layout a PACS uses and owns the state the chrome
 * needs in order to be a workstation rather than a picture frame:
 *
 *   menu bar
 *   +--------------------+--------------------------+--------------+
 *   | study list          | viewport grid            | tool panel   |
 *   | series tree         |                          |              |
 *   +--------------------+--------------------------+--------------+
 *   status bar
 *
 * State ownership is split deliberately, so there is exactly one place where
 * each fact is true:
 *
 *  - **The shell owns** the layout mode, the bound tool, greyscale inversion,
 *    cine transport, the stack position, the viewport readouts and the filter.
 *    These are things the chrome both sets and displays, and where a second
 *    copy would disagree with the pixels.
 *  - **The page owns** the data - studies, series, instances, connection state -
 *    because it is what talks to the PACS. The shell never fetches.
 *  - **The viewport engine owns** the camera, the window, and the measurements.
 *    The shell forwards those as commands and reads the truth back through
 *    `onReadout`.
 *
 * The keyboard map advertised by the menu bar and the tool panel is installed
 * here, for real, from the same token table those two components print. If a
 * hint were decorative, this effect would be where the lie would show.
 */

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import {
  HOROS_ACTION_SHORTCUTS,
  HOROS_COLORS,
  HOROS_FONT,
  HOROS_SIZE,
  HOROS_SPACE,
  HOROS_TOOL_SHORTCUTS,
  HOROS_LAYOUTS,
  HOROS_LAYOUT_ORDER,
  defaultLayoutForModality,
} from "./horosTokens";
import type {
  HorosCineState,
  HorosLayoutMode,
  HorosMenuAvailability,
  HorosMenuCommand,
  HorosStudyRow,
  HorosStudySortKey,
  HorosSeriesRow,
  HorosToolMode,
  HorosViewportCommand,
  HorosViewportCommandHandler,
  HorosViewportComponent,
  HorosViewportReadout,
  HorosMenuCommandHandler,
  PacsConnectionStatus,
} from "./horosTypes";
import { HOROS_CINE_IDLE } from "./horosTypes";
import { HorosBaseStyle, horosThemeStyle } from "./HorosBaseStyle";
import { HorosMenuBar } from "./HorosMenuBar";
import { HorosSeriesTree } from "./HorosSeriesTree";
import { HorosStatusBar } from "./HorosStatusBar";
import { HorosStudyList } from "./HorosStudyList";
import { HorosToolPanel } from "./HorosToolPanel";
import { HorosViewportAdapter } from "./HorosViewportAdapter";

const C = HOROS_COLORS;
const F = HOROS_FONT;
const S = HOROS_SIZE;
const P = HOROS_SPACE;

/** The cine rate ladder a PACS steps through. */
const CINE_RATE_LADDER: readonly number[] = [1, 2, 4, 8, 15, 30, 60];

/** The frame rate playback starts at when it is switched on for the first time. */
const CINE_DEFAULT_FPS = 15;

/**
 * Commands the shell performs itself rather than forwarding.
 *
 * Inversion, stack position and cine are shell-owned state that the chrome
 * displays, so they are resolved here into state and pushed down as props. Every
 * other command is camera, window or measurement state that only the viewport
 * engine knows about, and those are forwarded verbatim.
 */
const SHELL_OWNED_COMMANDS: ReadonlySet<HorosViewportCommand> = new Set<HorosViewportCommand>([
  "invert",
  "firstImage",
  "previousImage",
  "nextImage",
  "lastImage",
  "imageByIndex",
  "cinePlay",
  "cinePause",
  "cineFirst",
  "cinePrevious",
  "cineNext",
  "cineLast",
  "cineLoop",
  "cineFps",
]);

/** Menu commands the shell performs itself. Everything else goes to the page. */
const SHELL_OWNED_MENU_COMMANDS: ReadonlySet<HorosMenuCommand> = new Set<HorosMenuCommand>([
  "view.invert",
  "view.fullScreen",
  "view.actualSize",
  "view.fitToWindow",
  "view.reset",
  "view.rotateReset",
  "query.clearFilters",
]);

/** Every menu command, so the whole set can be disabled when unwired. */
const ALL_MENU_COMMANDS: readonly HorosMenuCommand[] = [
  "file.openStudy",
  "file.closeStudy",
  "query.refresh",
  "query.patient",
  "query.accession",
  "query.clearFilters",
  "import.dicomFolder",
  "import.orthanc",
  "export.dicom",
  "export.image",
  "export.studyListCsv",
  "send.study",
  "send.series",
  "send.report",
  "view.actualSize",
  "view.fitToWindow",
  "view.reset",
  "view.rotateReset",
  "view.invert",
  "view.fullScreen",
];

export interface HorosAppShellProps {
  /** The real Orthanc connection state, as last probed by the page. */
  connection: PacsConnectionStatus;
  /** Studies from the last successful query. */
  studies: readonly HorosStudyRow[];
  /** Series of the open study. */
  series: readonly HorosSeriesRow[];
  selectedStudyUid: string | null;
  onSelectStudy: (studyUid: string) => void;
  selectedSeriesUid: string | null;
  onSelectSeries: (seriesUid: string) => void;
  selectedInstanceId: string | null;
  onSelectInstance: (seriesUid: string, instanceId: string) => void;
  /** A study query is in flight. */
  studiesLoading: boolean;
  /** A series or instance query is in flight. */
  seriesLoading: boolean;
  /** Runs a fresh study query. */
  onQueryStudies: () => void;
  /** ISO time of the last completed study query, or null. */
  lastSyncedAt: string | null;
  /** Cornerstone imageIds for the open series, in stack order. */
  imageIds: readonly string[];
  /**
   * The viewport component. Supplied by the page as
   * `import { StudyViewport } from ".../horos/StudyViewport"`. Null while the
   * viewport is unwired, which every slot states explicitly.
   */
  ViewportComponent: HorosViewportComponent | null;
  /** Fires when a viewport reports new presentation state. */
  onViewportReadout?: (readouts: ReadonlyMap<number, HorosViewportReadout>) => void;
  /** Receives camera, window and measurement commands. */
  onViewportCommand?: HorosViewportCommandHandler;
  /** Receives the menu commands the shell cannot perform itself. */
  onMenuCommand?: HorosMenuCommandHandler;
  /** Extra menu enablement from the page, merged over the shell's own. */
  menuAvailability?: HorosMenuAvailability;
  /** Open measurement count, or null when the page does not track one. */
  measurementCount?: number | null;
  /** A real problem to surface in the status bar, or null. */
  notice?: string | null;
  /** Layout to start in. Defaults to 2x2, the cross-sectional default. */
  initialLayoutMode?: HorosLayoutMode;
  className?: string;
}

/** True when a keystroke belongs to a text field and must not be hijacked. */
function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName.toLowerCase();
  return (
    tag === "input" ||
    tag === "textarea" ||
    tag === "select" ||
    target.isContentEditable
  );
}

export function HorosAppShell({
  connection,
  studies,
  series,
  selectedStudyUid,
  onSelectStudy,
  selectedSeriesUid,
  onSelectSeries,
  selectedInstanceId,
  onSelectInstance,
  studiesLoading,
  seriesLoading,
  onQueryStudies,
  lastSyncedAt,
  imageIds,
  ViewportComponent,
  onViewportReadout,
  onViewportCommand,
  onMenuCommand,
  menuAvailability,
  measurementCount = null,
  notice = null,
  initialLayoutMode = "2x2",
  className,
}: HorosAppShellProps) {
  /* ------------------------------------------------------------------ *
   * Chrome-owned state
   * ------------------------------------------------------------------ */
  const [layoutMode, setLayoutMode] = useState<HorosLayoutMode>(initialLayoutMode);
  const [activeTool, setActiveTool] = useState<HorosToolMode>("windowLevel");
  const [is3d, setIs3d] = useState(false);
  const [isInverted, setIsInverted] = useState(false);
  const [cine, setCine] = useState<HorosCineState>(HOROS_CINE_IDLE);
  const [cineFrame, setCineFrame] = useState<number | null>(null);
  const [requestedImageIndex, setRequestedImageIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState("");
  const [sortKey, setSortKey] = useState<HorosStudySortKey>("studyDate");
  const [readouts, setReadouts] = useState<ReadonlyMap<number, HorosViewportReadout>>(
    new Map(),
  );
  const [activeSlotIndex, setActiveSlotIndex] = useState(0);
  const shellRef = useRef<HTMLDivElement | null>(null);

  const selectedStudy = useMemo(
    () => studies.find((s) => s.studyUid === selectedStudyUid) ?? null,
    [studies, selectedStudyUid],
  );
  const selectedSeries = useMemo(
    () => series.find((s) => s.seriesUid === selectedSeriesUid) ?? null,
    [series, selectedSeriesUid],
  );
  const activeReadout = readouts.get(activeSlotIndex) ?? null;

  const slotCount = HOROS_LAYOUTS[layoutMode].slots;

  /* ------------------------------------------------------------------ *
   * Layout follows the modality of the opened study
   *
   * HOROS convention: a projectional fluoro study opens 1x1, a cross-sectional
   * study opens 2x2. Applied only when a different study is opened, so it never
   * overrules a layout the clinician chose for the one they are reading.
   * ------------------------------------------------------------------ */
  const lastAutoLayoutFor = useRef<string | null>(null);
  useEffect(() => {
    if (!selectedStudy) {
      lastAutoLayoutFor.current = null;
      return;
    }
    if (lastAutoLayoutFor.current === selectedStudy.studyUid) return;
    lastAutoLayoutFor.current = selectedStudy.studyUid;
    setLayoutMode(defaultLayoutForModality(selectedStudy.modalities));
    setRequestedImageIndex(null);
  }, [selectedStudy]);

  /* ------------------------------------------------------------------ *
   * A new series starts at the beginning of the stack
   * ------------------------------------------------------------------ */
  useEffect(() => {
    setRequestedImageIndex(null);
    setCineFrame(null);
    setCine(HOROS_CINE_IDLE);
  }, [selectedSeriesUid]);

  /* ------------------------------------------------------------------ *
   * Clamp the stack position whenever the stack itself changes
   * ------------------------------------------------------------------ */
  useEffect(() => {
    setRequestedImageIndex((current) => {
      if (current === null) return null;
      if (imageIds.length === 0) return null;
      return Math.min(Math.max(0, current), imageIds.length - 1);
    });
    setCineFrame((current) => {
      if (current === null) return null;
      if (imageIds.length === 0) return null;
      return Math.min(Math.max(0, current), imageIds.length - 1);
    });
  }, [imageIds.length]);

  /* ------------------------------------------------------------------ *
   * The focused slot must exist in the current grid
   * ------------------------------------------------------------------ */
  useEffect(() => {
    setActiveSlotIndex((current) => (current < slotCount ? current : 0));
  }, [slotCount]);

  /* ------------------------------------------------------------------ *
   * Cine transport
   *
   * The shell is the single clock. Playback advances `cineFrame`, which goes
   * down to the viewport as `requestedCineFrame`; the engine is not asked to
   * run a timer of its own, so the status bar and the pixels cannot disagree
   * about which frame is up.
   * ------------------------------------------------------------------ */
  useEffect(() => {
    if (!cine.isPlaying) {
      setCineFrame(null);
      return undefined;
    }
    if (imageIds.length < 2 || cine.framesPerSecond <= 0) {
      setCine((current) => ({ ...current, isPlaying: false }));
      setCineFrame(null);
      return undefined;
    }
    const period = Math.max(20, Math.round(1000 / cine.framesPerSecond));
    const timer = setInterval(() => {
      setCineFrame((current) => {
        const next = (current ?? 0) + 1;
        return next >= imageIds.length ? 0 : next;
      });
    }, period);
    return () => clearInterval(timer);
  }, [cine.isPlaying, cine.framesPerSecond, imageIds.length]);

  /* ------------------------------------------------------------------ *
   * Playback that reaches the end without looping stops where it stopped
   * ------------------------------------------------------------------ */
  useEffect(() => {
    if (!cine.isPlaying || cine.loop || cineFrame === null) return;
    if (imageIds.length > 0 && cineFrame >= imageIds.length - 1) {
      setCine((current) => ({ ...current, isPlaying: false }));
    }
  }, [cine.isPlaying, cine.loop, cineFrame, imageIds.length]);

  /* ------------------------------------------------------------------ *
   * Report readouts upward
   * ------------------------------------------------------------------ */
  useEffect(() => {
    onViewportReadout?.(readouts);
  }, [readouts, onViewportReadout]);

  /* ------------------------------------------------------------------ *
   * Viewport commands
   * ------------------------------------------------------------------ */
  const clampIndex = useCallback(
    (value: number): number => {
      if (imageIds.length === 0) return 0;
      return Math.min(Math.max(0, value), imageIds.length - 1);
    },
    [imageIds.length],
  );

  const send = useCallback(
    (command: HorosViewportCommand, value?: number) => {
      if (SHELL_OWNED_COMMANDS.has(command)) {
        switch (command) {
          case "invert":
            setIsInverted((current) => !current);
            return;
          case "firstImage":
            setRequestedImageIndex(imageIds.length > 0 ? 0 : null);
            return;
          case "lastImage":
            setRequestedImageIndex(imageIds.length > 0 ? imageIds.length - 1 : null);
            return;
          case "previousImage":
            setRequestedImageIndex((current) => clampIndex((current ?? 0) - 1));
            return;
          case "nextImage":
            setRequestedImageIndex((current) => clampIndex((current ?? 0) + 1));
            return;
          case "imageByIndex":
            if (value === undefined) return;
            setRequestedImageIndex(clampIndex(value));
            return;
          case "cinePlay":
            if (imageIds.length < 2) return;
            setCine((current) => ({
              ...current,
              isPlaying: true,
              framesPerSecond: current.framesPerSecond > 0 ? current.framesPerSecond : CINE_DEFAULT_FPS,
            }));
            setCineFrame((current) => (current === null ? 0 : current));
            return;
          case "cinePause":
            setCine((current) => ({ ...current, isPlaying: false }));
            return;
          case "cineFirst":
            setCineFrame(0);
            return;
          case "cinePrevious":
            setCineFrame((current) => clampIndex((current ?? 0) - 1));
            return;
          case "cineNext":
            setCineFrame((current) => clampIndex((current ?? 0) + 1));
            return;
          case "cineLast":
            setCineFrame(imageIds.length > 0 ? imageIds.length - 1 : 0);
            return;
          case "cineLoop":
            setCine((current) => ({ ...current, loop: !current.loop }));
            return;
          case "cineFps":
            if (value === undefined) return;
            setCine((current) => ({ ...current, framesPerSecond: value }));
            return;
          default:
            return;
        }
      }
      onViewportCommand?.(command, value);
    },
    [clampIndex, imageIds.length, onViewportCommand],
  );

  const stepCineFps = useCallback((delta: number) => {
    setCine((current) => {
      if (delta > 0) {
        const next = CINE_RATE_LADDER.find((rate) => rate > current.framesPerSecond);
        return { ...current, framesPerSecond: next ?? current.framesPerSecond };
      }
      const lower = CINE_RATE_LADDER.filter((rate) => rate < current.framesPerSecond);
      return { ...current, framesPerSecond: lower[lower.length - 1] ?? current.framesPerSecond };
    });
  }, []);

  const toggleCineLoop = useCallback(() => {
    setCine((current) => ({ ...current, loop: !current.loop }));
  }, []);

  const toggleInvert = useCallback(() => {
    setIsInverted((current) => !current);
  }, []);

  /* ------------------------------------------------------------------ *
   * Full screen, for real
   * ------------------------------------------------------------------ */
  const toggleFullScreen = useCallback(() => {
    if (typeof document === "undefined") return;
    const element = shellRef.current ?? document.documentElement;
    if (document.fullscreenElement) {
      void document.exitFullscreen().catch(() => undefined);
      return;
    }
    if (typeof element.requestFullscreen === "function") {
      void element.requestFullscreen().catch(() => undefined);
    }
  }, []);

  /* ------------------------------------------------------------------ *
   * Menu commands
   * ------------------------------------------------------------------ */
  const handleMenuCommand = useCallback(
    (command: HorosMenuCommand) => {
      if (!SHELL_OWNED_MENU_COMMANDS.has(command)) {
        onMenuCommand?.(command);
        return;
      }
      switch (command) {
        case "view.invert":
          setIsInverted((current) => !current);
          return;
        case "view.fullScreen":
          toggleFullScreen();
          return;
        case "view.actualSize":
          send("actualSize");
          return;
        case "view.fitToWindow":
          send("zoomToFit");
          return;
        case "view.reset":
          send("resetView");
          return;
        case "view.rotateReset":
          send("rotateReset");
          return;
        case "query.clearFilters":
          setFilter("");
          return;
        default:
          return;
      }
    },
    [onMenuCommand, send, toggleFullScreen],
  );

  /* ------------------------------------------------------------------ *
   * The keyboard map, installed from the same table the chrome prints
   * ------------------------------------------------------------------ */
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented) return;
      if (isTypingTarget(event.target)) return;
      if (event.ctrlKey || event.metaKey || event.altKey) return;

      if (event.key === "F5") {
        event.preventDefault();
        onQueryStudies();
        return;
      }
      if (event.key === "F11") {
        event.preventDefault();
        toggleFullScreen();
        return;
      }

      const layout = HOROS_LAYOUT_ORDER.find(
        (mode) => HOROS_LAYOUTS[mode].shortcut === event.key,
      );
      if (layout) {
        event.preventDefault();
        setLayoutMode(layout);
        return;
      }

      switch (event.key) {
        case HOROS_TOOL_SHORTCUTS.windowLevel:
          setActiveTool("windowLevel");
          return;
        case HOROS_TOOL_SHORTCUTS.zoom:
          setActiveTool("zoom");
          return;
        case HOROS_TOOL_SHORTCUTS.pan:
          setActiveTool("pan");
          return;
        case HOROS_TOOL_SHORTCUTS.rotate:
          setActiveTool("rotate");
          return;
        case HOROS_TOOL_SHORTCUTS.stackScroll:
          setActiveTool("stackScroll");
          return;
        case "Escape":
          setActiveTool("none");
          return;
        case HOROS_ACTION_SHORTCUTS.invert:
          event.preventDefault();
          setIsInverted((current) => !current);
          return;
        case HOROS_ACTION_SHORTCUTS.flipHorizontal:
          event.preventDefault();
          send("flipHorizontal");
          return;
        case HOROS_ACTION_SHORTCUTS.flipVertical:
          event.preventDefault();
          send("flipVertical");
          return;
        case HOROS_ACTION_SHORTCUTS.rotateLeft:
          event.preventDefault();
          send("rotateLeft");
          return;
        case HOROS_ACTION_SHORTCUTS.rotateRight:
          event.preventDefault();
          send("rotateRight");
          return;
        case HOROS_ACTION_SHORTCUTS.rotateReset:
          event.preventDefault();
          send("rotateReset");
          return;
        case HOROS_ACTION_SHORTCUTS.zoomIn:
          event.preventDefault();
          send("zoomIn");
          return;
        case HOROS_ACTION_SHORTCUTS.zoomOut:
          event.preventDefault();
          send("zoomOut");
          return;
        case HOROS_ACTION_SHORTCUTS.zoomToFit:
          event.preventDefault();
          send("zoomToFit");
          return;
        case HOROS_ACTION_SHORTCUTS.actualSize:
          event.preventDefault();
          send("actualSize");
          return;
        case HOROS_ACTION_SHORTCUTS.windowLevelReset:
          event.preventDefault();
          send("resetView");
          return;
        case HOROS_ACTION_SHORTCUTS.previousImage:
          event.preventDefault();
          send("previousImage");
          return;
        case HOROS_ACTION_SHORTCUTS.nextImage:
          event.preventDefault();
          send("nextImage");
          return;
        case HOROS_ACTION_SHORTCUTS.firstImage:
          event.preventDefault();
          send("firstImage");
          return;
        case HOROS_ACTION_SHORTCUTS.lastImage:
          event.preventDefault();
          send("lastImage");
          return;
        case HOROS_ACTION_SHORTCUTS.cinePlay:
          event.preventDefault();
          send(cine.isPlaying ? "cinePause" : "cinePlay");
          return;
        case HOROS_ACTION_SHORTCUTS.clearMeasurements:
          event.preventDefault();
          send("clearMeasurements");
          return;
        case HOROS_ACTION_SHORTCUTS.deleteLastMeasurement:
          event.preventDefault();
          send("deleteLastMeasurement");
          return;
        default:
          return;
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [cine.isPlaying, onQueryStudies, send, toggleFullScreen]);

  /* ------------------------------------------------------------------ *
   * Viewport callbacks
   * ------------------------------------------------------------------ */
  const handleReadout = useCallback((readout: HorosViewportReadout) => {
    setReadouts((previous) => {
      const existing = previous.get(readout.slotIndex);
      if (existing && shallowReadoutEqual(existing, readout)) return previous;
      const next = new Map(previous);
      next.set(readout.slotIndex, readout);
      return next;
    });
  }, []);

  const handleSlotFocus = useCallback((slotIndex: number) => {
    setActiveSlotIndex(slotIndex);
  }, []);

  const handleImageIndexChange = useCallback((slotIndex: number, imageIndex: number) => {
    setActiveSlotIndex(slotIndex);
    setRequestedImageIndex(imageIndex);
  }, []);

  /* ------------------------------------------------------------------ *
   * Menu enablement
   *
   * A command the shell performs itself is always available. A command the page
   * must perform is available only when the page supplied a handler, unless the
   * page said otherwise. This is why no menu item can ever be a dead control.
   * ------------------------------------------------------------------ */
  const availability = useMemo<HorosMenuAvailability | undefined>(() => {
    if (onMenuCommand) return menuAvailability;
    const disabled: Record<string, boolean> = {};
    for (const command of ALL_MENU_COMMANDS) {
      if (!SHELL_OWNED_MENU_COMMANDS.has(command)) disabled[command] = false;
    }
    return { ...disabled, ...menuAvailability };
  }, [menuAvailability, onMenuCommand]);

  const totalStudies = studies.length;
  const hasPixels = activeReadout ? activeReadout.isLoaded && activeReadout.imageCount > 0 : false;

  // One merged object rather than a prop spread: spreading custom properties
  // into JSX makes TypeScript check them against every HTML attribute, and
  // `translate` alone then collides with the DOM typings.
  const rootStyle = useMemo<CSSProperties>(
    () => ({
      display: "flex",
      flexDirection: "column",
      height: "100%",
      minHeight: 0,
      overflow: "hidden",
      backgroundColor: C.chrome,
      color: C.text,
      fontFamily: F.sans,
      fontSize: F.small,
      ...horosThemeStyle,
    }),
    [],
  );

  return (
    <div
      ref={shellRef}
      style={rootStyle}
      className={className}
    >
      <HorosBaseStyle />

      <HorosMenuBar
        layoutMode={layoutMode}
        onLayoutChange={setLayoutMode}
        is3d={is3d}
        onToggle3d={() => setIs3d((current) => !current)}
        onCommand={handleMenuCommand}
        availability={availability}
        hasStudy={selectedStudy !== null}
        hasPixels={hasPixels}
        hasFilters={filter.trim().length > 0}
      />

      {/* The three columns: worklist, pixels, tools. */}
      <div style={{ display: "flex", flex: "1 1 auto", minHeight: 0, minWidth: 0 }}>
        <aside
          aria-label="Study list and series"
          style={{
            width: S.leftPanel,
            flex: "0 0 auto",
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
            borderRight: `1px solid ${C.hairline}`,
          }}
        >
          <div style={{ flex: "1 1 55%", minHeight: 0, display: "flex", flexDirection: "column" }}>
            <HorosStudyList
              studies={studies}
              selectedStudyUid={selectedStudyUid}
              onSelectStudy={onSelectStudy}
              connection={connection}
              loading={studiesLoading}
              onRefresh={onQueryStudies}
              filter={filter}
              onFilterChange={setFilter}
              sortKey={sortKey}
              onSortChange={setSortKey}
              lastSyncedAt={lastSyncedAt}
              totalCount={totalStudies}
            />
          </div>
          <div style={{ flex: "1 1 45%", minHeight: 0, display: "flex", flexDirection: "column" }}>
            <HorosSeriesTree
              series={series}
              selectedSeriesUid={selectedSeriesUid}
              onSelectSeries={onSelectSeries}
              selectedInstanceId={selectedInstanceId}
              onSelectInstance={onSelectInstance}
              connection={connection}
              loading={seriesLoading}
              studyUid={selectedStudyUid}
            />
          </div>
        </aside>

        <main
          aria-label="Viewport grid"
          style={{ flex: "1 1 auto", minWidth: 0, minHeight: 0, display: "flex", backgroundColor: C.viewport }}
        >
          <HorosViewportAdapter
            layoutMode={layoutMode}
            ViewportComponent={ViewportComponent}
            activeTool={activeTool}
            series={selectedSeries}
            imageIds={imageIds}
            selectedInstanceId={selectedInstanceId}
            isInverted={isInverted}
            cine={cine}
            readouts={readouts}
            activeSlotIndex={activeSlotIndex}
            requestedImageIndex={requestedImageIndex}
            requestedCineFrame={cineFrame}
            onSlotFocus={handleSlotFocus}
            onReadout={handleReadout}
            onImageIndexChange={handleImageIndexChange}
            loading={studiesLoading || seriesLoading}
          />
        </main>

        <aside
          aria-label="Tools"
          style={{
            width: S.rightPanel,
            flex: "0 0 auto",
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
            borderLeft: `1px solid ${C.hairline}`,
          }}
        >
          <HorosToolPanel
            activeTool={activeTool}
            onSelectTool={setActiveTool}
            onCommand={send}
            readout={activeReadout}
            series={selectedSeries}
            isInverted={isInverted}
            onToggleInvert={toggleInvert}
            cine={cine}
            onToggleCineLoop={toggleCineLoop}
            onStepCineFps={stepCineFps}
            measurementCount={measurementCount}
          />
        </aside>
      </div>

      <HorosStatusBar
        connection={connection}
        layoutMode={layoutMode}
        activeTool={activeTool}
        isInverted={isInverted}
        cine={cine}
        activeReadout={activeReadout}
        study={selectedStudy}
        series={selectedSeries}
        measurementCount={measurementCount}
        notice={notice}
      />

      {/* The pointer map, printed once at the bottom of the window so the
          mouse bindings are discoverable without a help dialog. */}
      <div
        style={{
          flex: "0 0 auto",
          display: "flex",
          alignItems: "center",
          gap: P.md,
          height: 18,
          padding: `0 ${P.sm}px`,
          backgroundColor: C.chrome,
          borderTop: `1px solid ${C.hairlineDark}`,
          color: C.textFaint,
          fontFamily: F.mono,
          fontSize: F.micro,
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        <span>left {HOROS_TOOL_SHORTCUTS.windowLevel}</span>
        <span>right pan</span>
        <span>middle {HOROS_TOOL_SHORTCUTS.zoom}</span>
        <span>wheel scroll</span>
        <span>{HOROS_ACTION_SHORTCUTS.cinePlay} cine</span>
        <span>1-5 layout</span>
        <span style={{ marginLeft: "auto" }}>{HOROS_LAYOUTS[layoutMode].hint}</span>
      </div>
    </div>
  );
}

/**
 * Compares two readouts field by field.
 *
 * Used so a viewport that re-renders with identical values does not churn the
 * shell's state and re-render every panel on every animation frame.
 */
function shallowReadoutEqual(a: HorosViewportReadout, b: HorosViewportReadout): boolean {
  return (
    a.slotIndex === b.slotIndex &&
    a.seriesInstanceUid === b.seriesInstanceUid &&
    a.modality === b.modality &&
    a.seriesDescription === b.seriesDescription &&
    a.imageIndex === b.imageIndex &&
    a.imageCount === b.imageCount &&
    a.windowWidth === b.windowWidth &&
    a.windowCenter === b.windowCenter &&
    a.zoom === b.zoom &&
    a.rotation === b.rotation &&
    a.isInverted === b.isInverted &&
    a.rows === b.rows &&
    a.columns === b.columns &&
    a.isLoaded === b.isLoaded
  );
}

export default HorosAppShell;