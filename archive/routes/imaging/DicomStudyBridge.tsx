"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Radiation,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Play,
  Pause,
  Sliders,
  Layers,
  Activity,
  ShieldAlert,
  Compass,
  Contrast,
  Info,
} from "lucide-react";
import {
  parseDicomRadiationReport,
  evaluateContrastSafety,
  assessRadiationSafety,
  RadiationDoseSR,
  CigarroaContrastDoseEvaluation,
  RadiationAlertAssessment,
} from "../../lib/pacs/dicomSrParser";

export interface DicomStudyBridgeProps {
  studyUID?: string;
  patientCrNo?: string;
  patientName?: string;
  patientWeightKg?: number;
  serumCreatinine?: number;
  contrastVolumeDeliveredMl?: number;
  className?: string;
}

export type WwWlPresetName = "ANGIO" | "BONE" | "SOFT_TISSUE" | "VASCULAR_SUBTRACTION";

interface WwWlPreset {
  name: WwWlPresetName;
  label: string;
  windowCenter: number;
  windowWidth: number;
  inverted: boolean;
  description: string;
}

const WW_WL_PRESETS: Record<WwWlPresetName, WwWlPreset> = {
  ANGIO: {
    name: "ANGIO",
    label: "Angiography",
    windowCenter: 300,
    windowWidth: 600,
    inverted: false,
    description: "Cath Lab DSA Arterial & Venous Roadmapping",
  },
  BONE: {
    name: "BONE",
    label: "Bone",
    windowCenter: 500,
    windowWidth: 2000,
    inverted: false,
    description: "Osseous Landmarks & Vertebroplasty / MSK Interventions",
  },
  SOFT_TISSUE: {
    name: "SOFT_TISSUE",
    label: "Soft Tissue",
    windowCenter: 40,
    windowWidth: 400,
    inverted: false,
    description: "Hepatic & Retroperitoneal Anatomy",
  },
  VASCULAR_SUBTRACTION: {
    name: "VASCULAR_SUBTRACTION",
    label: "Vascular Subtraction",
    windowCenter: 150,
    windowWidth: 350,
    inverted: true,
    description: "High-Contrast Inverted DSA Roadmapping",
  },
};

export function DicomStudyBridge({
  studyUID = "1.2.840.10008.5.1.4.1.1.12.1.202601",
  patientCrNo = "CR-2026-09142",
  patientName = "RAMESH CHANDRA MEENA",
  patientWeightKg = 68,
  serumCreatinine = 1.2,
  contrastVolumeDeliveredMl = 75,
  className = "",
}: DicomStudyBridgeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Viewport State
  const [currentFrame, setCurrentFrame] = useState<number>(1);
  const [totalFrames, setTotalFrames] = useState<number>(120);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [fps, setFps] = useState<number>(15);
  const [zoom, setZoom] = useState<number>(1.0);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activePreset, setActivePreset] = useState<WwWlPresetName>("ANGIO");
  const [windowCenter, setWindowCenter] = useState<number>(300);
  const [windowWidth, setWindowWidth] = useState<number>(600);
  const [isInverted, setIsInverted] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [activeTool, setActiveTool] = useState<"wwwl" | "pan" | "zoom">("wwwl");
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Telemetry & Dosimetry state
  const [srData, setSrData] = useState<RadiationDoseSR | null>(null);
  const [cigarroaEval, setCigarroaEval] = useState<CigarroaContrastDoseEvaluation | null>(null);
  const [radiationAlert, setRadiationAlert] = useState<RadiationAlertAssessment | null>(null);

  // C-Arm Angles calculated per frame
  const primaryAngle = Math.round(15 + Math.sin(currentFrame / 10) * 12); // LAO / RAO
  const secondaryAngle = Math.round(20 + Math.cos(currentFrame / 15) * 8); // Cranial / Caudal

  // Fetch or initialize DICOM-SR radiation dose report
  useEffect(() => {
    // Generate synthetic DICOM SR buffer to extract realistic TID 10001
    const dummyBuffer = new ArrayBuffer(256);
    const parsed = parseDicomRadiationReport(dummyBuffer);
    setSrData(parsed);

    // Evaluate Cigarroa Contrast Dose
    const renalEval = evaluateContrastSafety(
      { weightKg: patientWeightKg, serumCreatinineMgDl: serumCreatinine },
      contrastVolumeDeliveredMl
    );
    setCigarroaEval(renalEval);

    // Assess Radiation Exposure Safety Thresholds
    const radEval = assessRadiationSafety(
      parsed.doseAreaProductGyCm2,
      parsed.referencePointAirKermaMGy,
      parsed.totalFluoroTimeMinutes
    );
    setRadiationAlert(radEval);
  }, [patientWeightKg, serumCreatinine, contrastVolumeDeliveredMl]);

  // Handle Preset Switching
  const handlePresetChange = (presetName: WwWlPresetName) => {
    const preset = WW_WL_PRESETS[presetName];
    setActivePreset(presetName);
    setWindowCenter(preset.windowCenter);
    setWindowWidth(preset.windowWidth);
    setIsInverted(preset.inverted);
  };

  // Canvas Drawing Routine
  const renderFrame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear background to deep obsidian black
    ctx.fillStyle = "#030712";
    ctx.fillRect(0, 0, width, height);

    ctx.save();
    // Apply pan & zoom
    ctx.translate(width / 2 + pan.x, height / 2 + pan.y);
    ctx.scale(zoom, zoom);
    ctx.translate(-width / 2, -height / 2);

    // Draw procedural angiography simulation image
    const imgData = ctx.createImageData(width, height);
    const data = imgData.data;

    const centerX = width / 2;
    const centerY = height / 2;

    const lowerBound = windowCenter - windowWidth / 2;
    const upperBound = windowCenter + windowWidth / 2;

    // Simulate arterial branching tree with contrast opacification
    const waveOffset = (currentFrame % 30) / 30;

    for (let y = 0; y < height; y += 2) {
      for (let x = 0; x < width; x += 2) {
        const dx = x - centerX;
        const dy = y - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Vessel simulation paths
        const mainArtery = Math.abs(dx - Math.sin(y / 35 + waveOffset) * 25);
        const branchRight = Math.abs(dx - (dy * 0.45 + Math.sin(y / 20) * 15));
        const branchLeft = Math.abs(dx - (-dy * 0.5 + Math.cos(y / 25) * 12));

        let rawVal = Math.max(0, 200 - dist * 0.4);

        if (y > 40 && y < height - 60) {
          if (mainArtery < 9) {
            rawVal = 750 + (1 - mainArtery / 9) * 450;
          } else if (y > centerY - 40 && branchRight < 5) {
            rawVal = 650 + (1 - branchRight / 5) * 350;
          } else if (y > centerY - 10 && branchLeft < 4) {
            rawVal = 600 + (1 - branchLeft / 4) * 300;
          }
        }

        // Apply Window/Level
        let displayVal = 0;
        if (rawVal <= lowerBound) displayVal = 0;
        else if (rawVal >= upperBound) displayVal = 255;
        else displayVal = Math.round(((rawVal - lowerBound) / windowWidth) * 255);

        if (isInverted) {
          displayVal = 255 - displayVal;
        }

        // Write to 2x2 pixel block for crisp performance
        for (let oy = 0; oy < 2; oy++) {
          for (let ox = 0; ox < 2; ox++) {
            const px = x + ox;
            const py = y + oy;
            if (px < width && py < height) {
              const idx = (py * width + px) * 4;
              data[idx] = displayVal;
              data[idx + 1] = displayVal;
              data[idx + 2] = isInverted ? Math.min(255, displayVal + 15) : displayVal;
              data[idx + 3] = 255;
            }
          }
        }
      }
    }

    ctx.putImageData(imgData, 0, 0);

    // Crosshair target in center
    ctx.strokeStyle = "rgba(56, 189, 248, 0.25)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(centerX - 15, centerY);
    ctx.lineTo(centerX + 15, centerY);
    ctx.moveTo(centerX, centerY - 15);
    ctx.lineTo(centerX, centerY + 15);
    ctx.stroke();

    ctx.restore();
  }, [currentFrame, pan, zoom, windowCenter, windowWidth, isInverted]);

  useEffect(() => {
    renderFrame();
  }, [renderFrame]);

  // Cine Playback Loop
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev >= totalFrames ? 1 : prev + 1));
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, [isPlaying, fps, totalFrames]);

  // Mouse Interaction Handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;
    setDragStart({ x: e.clientX, y: e.clientY });

    if (activeTool === "pan") {
      setPan((prev) => ({ x: prev.x + deltaX, y: prev.y + deltaY }));
    } else if (activeTool === "zoom") {
      const zoomChange = -deltaY * 0.01;
      setZoom((prev) => Math.max(0.2, Math.min(5.0, prev + zoomChange)));
    } else if (activeTool === "wwwl") {
      setWindowWidth((prev) => Math.max(10, prev + deltaX * 2));
      setWindowCenter((prev) => prev - deltaY * 2);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleReset = () => {
    setZoom(1.0);
    setPan({ x: 0, y: 0 });
    const preset = WW_WL_PRESETS[activePreset];
    setWindowCenter(preset.windowCenter);
    setWindowWidth(preset.windowWidth);
    setIsInverted(preset.inverted);
  };

  return (
    <div
      className={`flex flex-col bg-[#030712] text-gray-100 rounded-2xl border border-gray-800 shadow-2xl overflow-hidden font-sans select-none ${
        isFullscreen ? "fixed inset-0 z-50 rounded-none" : "h-full min-h-[640px]"
      } ${className}`}
    >
      {/* Top Header & Preset Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/80">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#137333]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-gray-300">
              Siemens Artis Zee • Cath-Lab 1
            </span>
          </div>
          <span className="text-xs text-gray-500">|</span>
          <span className="text-xs font-mono text-cyan-400 font-semibold">{patientCrNo}</span>
          <span className="text-xs text-gray-400 font-medium truncate max-w-[180px]">
            {patientName}
          </span>
        </div>

        {/* Window/Level Preset Selectors */}
        <div className="flex items-center gap-1 bg-gray-900/90 p-1 rounded-lg border border-gray-800">
          {(Object.keys(WW_WL_PRESETS) as WwWlPresetName[]).map((key) => {
            const p = WW_WL_PRESETS[key];
            const isSelected = activePreset === key;
            return (
              <button
                key={key}
                onClick={() => handlePresetChange(key)}
                title={p.description}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
                  isSelected
                    ? "bg-cyan-500 text-gray-950 font-bold shadow-md shadow-cyan-500/20"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
              >
                {p.label}
              </button>
            );
          })}
        </div>

        {/* Viewport Action Controls */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-gray-900/90 p-0.5 rounded-lg border border-gray-800 text-xs">
            <button
              onClick={() => setActiveTool("wwwl")}
              className={`p-1.5 rounded transition cursor-pointer ${
                activeTool === "wwwl" ? "bg-cyan-500 text-gray-950" : "text-gray-400 hover:text-white"
              }`}
              title="Window / Level Tool (Drag left/right for Width, up/down for Level)"
            >
              <Contrast className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setActiveTool("pan")}
              className={`p-1.5 rounded transition cursor-pointer ${
                activeTool === "pan" ? "bg-cyan-500 text-gray-950" : "text-gray-400 hover:text-white"
              }`}
              title="Pan Tool (Click and Drag)"
            >
              <Compass className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setActiveTool("zoom")}
              className={`p-1.5 rounded transition cursor-pointer ${
                activeTool === "zoom" ? "bg-cyan-500 text-gray-950" : "text-gray-400 hover:text-white"
              }`}
              title="Zoom Tool"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800 transition cursor-pointer"
            title="Reset Pan / Zoom / WWWL"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 rounded-lg bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800 transition cursor-pointer"
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main Canvas with Overlay HUD */}
      <div className="flex-1 relative bg-black overflow-hidden flex items-center justify-center">
        <canvas
          ref={canvasRef}
          width={512}
          height={512}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="cursor-crosshair w-full h-full object-contain max-h-[640px]"
        />

        {/* HUD Overlay - Top Left: Patient & Study Metadata */}
        <div className="absolute top-3 left-3 pointer-events-none flex flex-col gap-0.5 text-[11px] font-mono text-cyan-300 drop-shadow-md bg-gray-950/40 p-2 rounded-lg backdrop-blur-xs border border-gray-800/40">
          <div className="font-bold text-white tracking-wide">{patientName}</div>
          <div>CR: {patientCrNo} • MOD: XA</div>
          <div className="text-gray-400 text-[10px]">UID: {studyUID.slice(0, 24)}...</div>
          <div className="text-amber-300 text-[10px]">
            WW: {Math.round(windowWidth)} • WL: {Math.round(windowCenter)}
          </div>
        </div>

        {/* HUD Overlay - Top Right: Real-Time Dosimetry & DAP Metric Counter */}
        <div className="absolute top-3 right-3 pointer-events-none flex flex-col items-end gap-1 text-[11px] font-mono text-gray-200 drop-shadow-md bg-gray-950/60 p-2.5 rounded-lg backdrop-blur-xs border border-gray-800/60">
          <div className="flex items-center gap-1.5 text-amber-400 font-bold">
            <Radiation className="w-3.5 h-3.5 text-amber-400" />
            <span>LIVE DAP: {srData ? srData.doseAreaProductGyCm2.toFixed(1) : "142.6"} Gy·cm²</span>
          </div>
          <div className="text-gray-300 text-[10px]">
            Air Kerma: <span className="font-semibold text-white">{srData?.referencePointAirKermaMGy || 860} mGy</span>
          </div>
          <div className="text-gray-300 text-[10px]">
            Fluoro Time:{" "}
            <span className="font-semibold text-white">
              {srData ? srData.totalFluoroTimeMinutes.toFixed(1) : "14.5"} min
            </span>
          </div>
          {radiationAlert && (
            <div
              className={`mt-1 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${
                radiationAlert.safetyGrade === "SENTINEL_EVENT"
                  ? "bg-red-500/20 text-red-400 border border-red-500/40"
                  : radiationAlert.safetyGrade === "CAUTION"
                  ? "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                  : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
              }`}
            >
              {radiationAlert.safetyGrade === "SENTINEL_EVENT"
                ? "SENTINEL ALERT"
                : radiationAlert.safetyGrade === "CAUTION"
                ? "ELEVATED DOSE"
                : "DOSE NOMINAL"}
            </div>
          )}
        </div>

        {/* HUD Overlay - Bottom Left: C-Arm Geometry Angles */}
        <div className="absolute bottom-3 left-3 pointer-events-none flex flex-col gap-0.5 text-[11px] font-mono drop-shadow-md bg-gray-950/60 p-2.5 rounded-lg backdrop-blur-xs border border-gray-800/60">
          <div className="flex items-center gap-1 text-cyan-400 font-bold">
            <Compass className="w-3 h-3 text-cyan-400" />
            <span>
              {primaryAngle >= 0 ? `RAO ${primaryAngle}°` : `LAO ${Math.abs(primaryAngle)}°`} /{" "}
              {secondaryAngle >= 0 ? `CRAN ${secondaryAngle}°` : `CAUD ${Math.abs(secondaryAngle)}°`}
            </span>
          </div>
          <div className="text-gray-400 text-[10px]">
            SID: 1100 mm • Zoom: {(zoom * 100).toFixed(0)}%
          </div>
        </div>

        {/* HUD Overlay - Bottom Right: Cigarroa Contrast Safety Model */}
        {cigarroaEval && (
          <div className="absolute bottom-3 right-3 pointer-events-none flex flex-col items-end gap-0.5 text-[11px] font-mono drop-shadow-md bg-gray-950/70 p-2.5 rounded-lg backdrop-blur-xs border border-gray-800/60">
            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-200">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>
                Contrast: {cigarroaEval.contrastDeliveredMl} mL / MACD: {cigarroaEval.macdVolumeMl} mL
              </span>
            </div>
            <div className="text-[10px] text-gray-400">
              Load Ratio:{" "}
              <span
                className={`font-bold ${
                  cigarroaEval.isExceeded
                    ? "text-red-400"
                    : cigarroaEval.macdRatio > 0.75
                    ? "text-amber-400"
                    : "text-emerald-400"
                }`}
              >
                {(cigarroaEval.macdRatio * 100).toFixed(0)}% of Limit
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Playback & Frame Scrubber Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-950 border-t border-gray-800 text-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-full bg-cyan-500 text-gray-950 hover:bg-cyan-400 transition cursor-pointer font-bold"
            title={isPlaying ? "Pause Cine Loop (Space)" : "Play Cine Loop (Space)"}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>

          <div className="flex items-center gap-1.5 font-mono text-gray-300 text-xs">
            <span className="font-bold text-cyan-400">{currentFrame}</span>
            <span className="text-gray-600">/</span>
            <span className="text-gray-400">{totalFrames}</span>
            <span className="text-[10px] text-gray-500 uppercase ml-1">Frames</span>
          </div>

          <div className="flex items-center gap-1 text-[11px] text-gray-400 ml-2">
            <span>Rate:</span>
            {[7.5, 15, 30].map((r) => (
              <button
                key={r}
                onClick={() => setFps(r)}
                className={`px-1.5 py-0.5 rounded text-[10px] transition cursor-pointer ${
                  fps === r ? "bg-gray-800 text-cyan-400 font-bold" : "hover:text-white"
                }`}
              >
                {r} fps
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Frame Scrubber */}
        <div className="flex-1 max-w-xl mx-6 flex items-center gap-3">
          <input
            type="range"
            min={1}
            max={totalFrames}
            value={currentFrame}
            onChange={(e) => setCurrentFrame(parseInt(e.target.value, 10))}
            className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />
        </div>

        <div className="flex items-center gap-2 text-[11px] text-gray-400 font-mono">
          <span>Preset:</span>
          <span className="text-cyan-400 font-semibold">{WW_WL_PRESETS[activePreset].label}</span>
        </div>
      </div>
    </div>
  );
}
