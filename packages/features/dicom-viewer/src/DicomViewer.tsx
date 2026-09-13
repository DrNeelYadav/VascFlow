"use client";

import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  type MouseEvent as ReactMouseEvent,
  type WheelEvent as ReactWheelEvent,
} from "react";
import { Button } from "@vascule/ui-kit";
import {
  Move,
  ZoomIn,
  RotateCcw,
  Maximize2,
  Contrast,
  Layers,
  Activity,
  AlertTriangle,
  Info,
} from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  type CanonicalStudyView,
  type ViewerState,
  type ViewerTool,
  type WindowLevelPreset,
  WINDOW_LEVEL_PRESETS,
  DEFAULT_VIEWER_STATE,
  applyWindowLevel,
  clampZoom,
} from "./types";
import { useStudyQuery } from "./useStudyQuery";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function cn(...inputs: (string | undefined | false)[]) {
  return twMerge(clsx(inputs));
}

/** Format DICOM date (YYYYMMDD) to display string. */
function formatDicomDate(d: string): string {
  if (d.length !== 8) return d;
  return `${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}`;
}

/** Format seconds to mm:ss display. */
function formatFluoroTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  return `${m}m ${s.toString().padStart(2, "0")}s`;
}

/**
 * Render a synthetic DICOM-style grayscale pattern on a canvas.
 * Generates a procedural angiographic vessel tree visualization
 * using the current WW/WL settings.
 */
function renderCanvasFrame(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  state: ViewerState,
) {
  const { windowCenter, windowWidth, zoom, panX, panY } = state;

  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, width, height);

  // Apply pan and zoom transforms
  ctx.translate(width / 2 + panX, height / 2 + panY);
  ctx.scale(zoom, zoom);
  ctx.translate(-width / 2, -height / 2);

  // Generate synthetic grayscale pixel data with WW/WL applied
  const imageData = ctx.createImageData(width, height);
  const data = imageData.data;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;

      // Simulate Hounsfield Unit field: background tissue ~40 HU
      // with vascular structures at higher density
      const cx = width / 2;
      const cy = height / 2;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxR = Math.min(width, height) * 0.45;

      // Body oval boundary
      const bodyAngle = Math.atan2(dy, dx);
      const bodyR =
        maxR * (0.85 + 0.15 * Math.cos(bodyAngle * 2)) * (1 + 0.03 * Math.sin(bodyAngle * 7));

      let huValue: number;
      if (dist > bodyR) {
        // Air outside body: -1000 HU
        huValue = -1000;
      } else {
        // Soft tissue baseline: 30-50 HU with noise
        huValue = 40 + 10 * Math.sin(x * 0.05) * Math.cos(y * 0.07);

        // Aorta: central high-density vessel (300-400 HU with contrast)
        const aortaDist = Math.sqrt((x - cx) * (x - cx) + (y - cy) * (y - cy));
        if (aortaDist < maxR * 0.08) {
          huValue = 350 + 30 * Math.sin(y * 0.1);
        }

        // Hepatic branches: radial vessel tree
        const branchAngle = Math.atan2(dy, dx);
        const branchR = dist / maxR;
        const vesselWidth = 0.03 * (1 - branchR * 0.6);
        const branch1 = Math.abs(Math.sin(branchAngle * 3 + branchR * 4));
        const branch2 = Math.abs(Math.sin(branchAngle * 5 + branchR * 6));

        if (branch1 < vesselWidth && branchR > 0.1 && branchR < 0.8) {
          huValue = 280 + 50 * (1 - branchR);
        }
        if (branch2 < vesselWidth * 0.7 && branchR > 0.2 && branchR < 0.7) {
          huValue = 260 + 40 * (1 - branchR);
        }

        // Spine shadow: posterior dense structure
        if (Math.abs(dx) < maxR * 0.06 && dy > 0 && dy < maxR * 0.7) {
          huValue = 700 + 100 * Math.sin(y * 0.2);
        }

        // Ribs: periodic lateral dense arcs
        const ribPhase = Math.sin(y * 0.12);
        if (
          Math.abs(ribPhase) < 0.08 &&
          Math.abs(dx) > maxR * 0.15 &&
          Math.abs(dx) < maxR * 0.8 &&
          dy > -maxR * 0.5 &&
          dy < maxR * 0.3
        ) {
          huValue = 500 + 50 * Math.cos(x * 0.1);
        }
      }

      // Apply window/level
      const displayVal = applyWindowLevel(huValue, windowCenter, windowWidth);
      data[idx] = displayVal;
      data[idx + 1] = displayVal;
      data[idx + 2] = displayVal;
      data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imageData, 0, 0);
  ctx.restore();
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface DicomViewerProps {
  /** DICOM Study Instance UID to display */
  studyUID: string;
  /** Optional CSS class for the outer container */
  className?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * DicomViewer - High-performance HTML5 Canvas DICOM image viewer.
 *
 * Connects to the Golang dicom-service via BFF proxy, renders a synthetic
 * angiographic visualization with interactive Window/Level, zoom, pan,
 * and stack scrolling controls.
 */
export function DicomViewer({ studyUID, className }: DicomViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });

  const { data: studyData, isLoading, error } = useStudyQuery(studyUID);
  const study = studyData?.canonical ?? null;

  const [viewerState, setViewerState] = useState<ViewerState>({
    ...DEFAULT_VIEWER_STATE,
    totalFrames: study?.numberOfInstances ?? 1,
  });

  // Update total frames when study data arrives
  useEffect(() => {
    if (study) {
      setViewerState((prev) => ({
        ...prev,
        totalFrames: study.numberOfInstances || 1,
      }));
    }
  }, [study]);

  // Canvas rendering loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Size canvas to container
    const container = containerRef.current;
    if (container) {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    }

    renderCanvasFrame(ctx, canvas.width, canvas.height, viewerState);
  }, [viewerState]);

  // Resize observer
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        canvas.width = Math.floor(width);
        canvas.height = Math.floor(height);
        const ctx = canvas.getContext("2d");
        if (ctx) renderCanvasFrame(ctx, canvas.width, canvas.height, viewerState);
      }
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, [viewerState]);

  // ---- Interaction handlers ----

  const handleMouseDown = useCallback(
    (e: ReactMouseEvent<HTMLCanvasElement>) => {
      isDragging.current = true;
      lastMouse.current = { x: e.clientX, y: e.clientY };
    },
    [],
  );

  const handleMouseMove = useCallback(
    (e: ReactMouseEvent<HTMLCanvasElement>) => {
      if (!isDragging.current) return;
      const dx = e.clientX - lastMouse.current.x;
      const dy = e.clientY - lastMouse.current.y;
      lastMouse.current = { x: e.clientX, y: e.clientY };

      setViewerState((prev) => {
        if (prev.activeTool === "pan") {
          return { ...prev, panX: prev.panX + dx, panY: prev.panY + dy };
        }
        if (prev.activeTool === "wwwl") {
          return {
            ...prev,
            windowWidth: Math.max(1, prev.windowWidth + dx * 2),
            windowCenter: prev.windowCenter + dy * 2,
          };
        }
        if (prev.activeTool === "zoom") {
          const factor = 1 + dy * 0.005;
          return { ...prev, zoom: clampZoom(prev.zoom * factor) };
        }
        return prev;
      });
    },
    [],
  );

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleWheel = useCallback(
    (e: ReactWheelEvent<HTMLCanvasElement>) => {
      e.preventDefault();
      if (e.ctrlKey) {
        // Ctrl + scroll = stack scroll
        setViewerState((prev) => ({
          ...prev,
          currentFrame: Math.max(
            0,
            Math.min(prev.totalFrames - 1, prev.currentFrame + (e.deltaY > 0 ? 1 : -1)),
          ),
        }));
      } else {
        // Scroll = zoom
        const factor = e.deltaY > 0 ? 0.9 : 1.1;
        setViewerState((prev) => ({
          ...prev,
          zoom: clampZoom(prev.zoom * factor),
        }));
      }
    },
    [],
  );

  const setActiveTool = (tool: ViewerTool) =>
    setViewerState((prev) => ({ ...prev, activeTool: tool }));

  const applyPreset = (preset: WindowLevelPreset) =>
    setViewerState((prev) => ({
      ...prev,
      windowCenter: preset.center,
      windowWidth: preset.width,
    }));

  const resetView = () =>
    setViewerState((prev) => ({
      ...prev,
      panX: 0,
      panY: 0,
      zoom: 1.0,
      windowCenter: DEFAULT_VIEWER_STATE.windowCenter,
      windowWidth: DEFAULT_VIEWER_STATE.windowWidth,
    }));

  // ---- Keyboard shortcuts ----
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const presetIndex = parseInt(e.key, 10) - 1;
      if (presetIndex >= 0 && presetIndex < WINDOW_LEVEL_PRESETS.length) {
        applyPreset(WINDOW_LEVEL_PRESETS[presetIndex]);
      }
      if (e.key === "r" || e.key === "R") resetView();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // ---- Render ----

  if (isLoading) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-black text-white min-h-[600px]",
          className,
        )}
      >
        <div className="flex flex-col items-center gap-3">
          <Activity className="w-8 h-8 animate-pulse text-blue-500" />
          <span className="text-sm text-gray-400">Loading DICOM Study...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-black text-white min-h-[600px]",
          className,
        )}
      >
        <div className="flex flex-col items-center gap-3 text-red-400">
          <AlertTriangle className="w-8 h-8" />
          <span className="text-sm">Error: {error.message}</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn("flex flex-col bg-black text-white select-none", className)}
      data-testid="dicom-viewer"
    >
      {/* ---- Toolbar ---- */}
      <div className="flex items-center gap-1 px-3 py-2 bg-gray-950 border-b border-gray-800">
        {/* Tool buttons */}
        <Button
          onClick={() => setActiveTool("wwwl")}
          className={cn(
            "px-2 py-1 text-xs rounded",
            viewerState.activeTool === "wwwl"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700",
          )}
        >
          <Contrast className="w-4 h-4 mr-1 inline-block" />
          W/L
        </Button>
        <Button
          onClick={() => setActiveTool("pan")}
          className={cn(
            "px-2 py-1 text-xs rounded",
            viewerState.activeTool === "pan"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700",
          )}
        >
          <Move className="w-4 h-4 mr-1 inline-block" />
          Pan
        </Button>
        <Button
          onClick={() => setActiveTool("zoom")}
          className={cn(
            "px-2 py-1 text-xs rounded",
            viewerState.activeTool === "zoom"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700",
          )}
        >
          <ZoomIn className="w-4 h-4 mr-1 inline-block" />
          Zoom
        </Button>
        <Button
          onClick={() => setActiveTool("scroll")}
          className={cn(
            "px-2 py-1 text-xs rounded",
            viewerState.activeTool === "scroll"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700",
          )}
        >
          <Layers className="w-4 h-4 mr-1 inline-block" />
          Scroll
        </Button>

        <div className="w-px h-5 bg-gray-700 mx-2" />

        {/* WW/WL Presets */}
        {WINDOW_LEVEL_PRESETS.map((preset) => (
          <Button
            key={preset.name}
            onClick={() => applyPreset(preset)}
            data-testid={`preset-${preset.name.toLowerCase()}`}
            className="px-2 py-1 text-xs rounded bg-gray-800 text-gray-300 hover:bg-gray-700"
          >
            {preset.name}
          </Button>
        ))}

        <div className="w-px h-5 bg-gray-700 mx-2" />

        <Button
          onClick={resetView}
          className="px-2 py-1 text-xs rounded bg-gray-800 text-gray-300 hover:bg-gray-700"
        >
          <RotateCcw className="w-4 h-4 mr-1 inline-block" />
          Reset
        </Button>

        <div className="flex-1" />

        {/* WW/WL readout */}
        <span className="text-xs text-gray-400 font-mono" data-testid="wwwl-readout">
          WW: {viewerState.windowWidth} / WL: {viewerState.windowCenter}
        </span>

        <span className="text-xs text-gray-500 font-mono ml-3">
          Zoom: {Math.round(viewerState.zoom * 100)}%
        </span>

        <span className="text-xs text-gray-500 font-mono ml-3">
          Frame: {viewerState.currentFrame + 1}/{viewerState.totalFrames}
        </span>
      </div>

      {/* ---- Canvas + Overlay area ---- */}
      <div className="relative flex-1 min-h-[500px]" ref={containerRef}>
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full cursor-crosshair"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          data-testid="dicom-canvas"
        />

        {/* Patient info overlay - top left */}
        {study && (
          <div className="absolute top-3 left-3 text-xs font-mono text-green-400 space-y-0.5 pointer-events-none">
            <div data-testid="overlay-patient-name">{study.patientName}</div>
            <div data-testid="overlay-patient-id">ID: {study.patientId}</div>
            <div data-testid="overlay-modality">{study.modalities.join(" / ")}</div>
            <div data-testid="overlay-study-date">{formatDicomDate(study.studyDate)}</div>
          </div>
        )}

        {/* Study info overlay - top right */}
        {study && (
          <div className="absolute top-3 right-3 text-xs font-mono text-green-400 text-right space-y-0.5 pointer-events-none">
            <div data-testid="overlay-institution">{study.institutionName}</div>
            <div data-testid="overlay-description">{study.studyDescription}</div>
            <div>Acc#: {study.accessionNumber}</div>
            <div>
              {study.numberOfSeries} series / {study.numberOfInstances} images
            </div>
          </div>
        )}

        {/* Radiation dose overlay - bottom left */}
        {study?.radiationDoseReport && (
          <div className="absolute bottom-3 left-3 text-xs font-mono text-yellow-400 space-y-0.5 pointer-events-none">
            <div className="flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" />
              RADIATION DOSE
            </div>
            <div data-testid="overlay-dap">
              DAP: {study.radiationDoseReport.totalDAPGyCm2.toFixed(2)}{" "}
              {study.radiationDoseReport.doseAreaProductUnit}
            </div>
            <div>
              Air Kerma: {study.radiationDoseReport.cumulativeAirKermaMGy.toFixed(1)} mGy
            </div>
            <div data-testid="overlay-fluoro-time">
              Fluoro: {formatFluoroTime(study.radiationDoseReport.fluoroscopyTimeSeconds)}
            </div>
            <div>
              Acquisitions: {study.radiationDoseReport.totalAcquisitions} ({study.radiationDoseReport.totalFrames} frames)
            </div>
            <div>Protocol: {study.radiationDoseReport.protocolName}</div>
          </div>
        )}

        {/* Tool hint overlay - bottom right */}
        <div className="absolute bottom-3 right-3 text-xs font-mono text-gray-600 pointer-events-none">
          <div className="flex items-center gap-1">
            <Info className="w-3 h-3" />
            {viewerState.activeTool === "wwwl" && "Drag: adjust W/L"}
            {viewerState.activeTool === "pan" && "Drag: pan image"}
            {viewerState.activeTool === "zoom" && "Drag up/down: zoom"}
            {viewerState.activeTool === "scroll" && "Scroll: navigate stack"}
          </div>
          <div>Scroll: zoom | Ctrl+Scroll: stack | 1-6: presets | R: reset</div>
        </div>
      </div>
    </div>
  );
}

export default DicomViewer;
