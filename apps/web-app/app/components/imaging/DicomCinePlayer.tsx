"use client";

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import {
  Play,
  Pause,
  Repeat,
  Maximize2,
  Minimize2,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Upload,
  Contrast,
  Sliders,
  HelpCircle,
  Eye,
  EyeOff,
  RotateCcw,
  Film,
  Sparkles,
} from "lucide-react";

/**
 * Translates Google Drive sharing URLs or direct file IDs into direct streamable endpoints.
 * Patterns supported:
 * - https://drive.google.com/file/d/{id}/view...
 * - https://drive.google.com/open?id={id}
 * - https://drive.google.com/uc?id={id}
 * - Raw alphanumeric file ID (25-45 characters)
 */
export function parseGoogleDriveUrl(input: string): string {
  if (!input) return "";
  const trimmed = input.trim();

  // Pattern 1: /file/d/{id}
  const fileIdMatch = trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileIdMatch && fileIdMatch[1]) {
    return `https://drive.google.com/uc?id=${fileIdMatch[1]}&export=download`;
  }

  // Pattern 2: ?id={id} or &id={id}
  const queryIdMatch = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (queryIdMatch && queryIdMatch[1]) {
    return `https://drive.google.com/uc?id=${queryIdMatch[1]}&export=download`;
  }

  // Pattern 3: Raw Google Drive file ID string
  if (/^[a-zA-Z0-9_-]{20,50}$/.test(trimmed)) {
    return `https://drive.google.com/uc?id=${trimmed}&export=download`;
  }

  return trimmed;
}

export type ImagingModality = "XA" | "CT" | "MR" | "US" | "CR" | "DX" | string;

export interface DicomCinePlayerProps {
  /** Video source: Direct MP4 URL, Google Drive URL/ID, or blob: URL */
  src?: string;
  poster?: string;
  patientName?: string;
  patientId?: string;
  modality?: ImagingModality;
  seriesDescription?: string;
  frameRate?: number;
  totalFrames?: number;
  autoPlay?: boolean;
  loop?: boolean;
  className?: string;
  onFrameChange?: (currentFrame: number, totalFrames: number) => void;
  onSourceChange?: (newSrc: string) => void;
  onFileDrop?: (file: File) => void;
}

export function DicomCinePlayer({
  src,
  poster,
  patientName = "ANONYMIZED [DISHA Safe]",
  patientId = "SMS-IR-CASE",
  modality = "XA",
  seriesDescription = "Diagnostic Angiography Run",
  frameRate = 15,
  totalFrames: propTotalFrames,
  autoPlay = false,
  loop = true,
  className = "",
  onFrameChange,
  onSourceChange,
  onFileDrop,
}: DicomCinePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Core playback states
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLooping, setIsLooping] = useState<boolean>(loop);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [duration, setDuration] = useState<number>(0);
  const [currentFrame, setCurrentFrame] = useState<number>(1);
  const [totalFrames, setTotalFrames] = useState<number>(propTotalFrames || 100);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);
  const [showShortcutsModal, setShowShortcutsModal] = useState<boolean>(false);
  const [showHud, setShowHud] = useState<boolean>(true);
  const [activeSrc, setActiveSrc] = useState<string>(src ? parseGoogleDriveUrl(src) : "");
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Radiology display filters
  const [invertLut, setInvertLut] = useState<boolean>(false); // Invert grayscale (DSA subtraction look)
  const [highContrast, setHighContrast] = useState<boolean>(false); // Vascular contrast enhancement

  // Synchronize incoming prop `src`
  useEffect(() => {
    if (src) {
      const parsed = parseGoogleDriveUrl(src);
      setActiveSrc(parsed);
      setHasError(false);
      setErrorMessage("");
    }
  }, [src]);

  // Synchronize incoming prop `propTotalFrames`
  useEffect(() => {
    if (propTotalFrames && propTotalFrames > 0) {
      setTotalFrames(propTotalFrames);
    }
  }, [propTotalFrames]);

  // Check if modality is cross-sectional (CT/MR) or projectional (DSA/XA)
  const isCrossSectional = useMemo(() => {
    const mod = (modality || "").toUpperCase();
    return mod.startsWith("CT") || mod.startsWith("MR");
  }, [modality]);

  const frameLabel = isCrossSectional ? "Slice" : "Frame";

  // Compute modality title badge
  const modalityBadgeText = useMemo(() => {
    const mod = (modality || "").toUpperCase();
    if (mod === "XA") return "XA - Angiography";
    if (mod === "CT") return "CT - Computed Tomography";
    if (mod === "MR") return "MR - Magnetic Resonance";
    if (mod === "US") return "US - Ultrasound Cine";
    return `${mod} - Medical Cine`;
  }, [modality]);

  // Handle metadata loaded from video
  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    const dur = videoRef.current.duration;
    if (dur && !isNaN(dur) && isFinite(dur)) {
      setDuration(dur);
      if (!propTotalFrames || propTotalFrames <= 1) {
        const computed = Math.max(1, Math.round(dur * frameRate));
        setTotalFrames(computed);
      }
    }
    setHasError(false);
    if (autoPlay) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  // Video time update event -> sync currentFrame
  const handleTimeUpdate = () => {
    if (!videoRef.current || !duration || duration <= 0) return;
    const time = videoRef.current.currentTime;
    const frame =
      totalFrames > 1
        ? Math.min(totalFrames, Math.max(1, Math.round((time / duration) * (totalFrames - 1)) + 1))
        : 1;
    setCurrentFrame(frame);
    onFrameChange?.(frame, totalFrames);
  };

  // Seek video to exact frame index (1-indexed)
  const scrubToFrame = useCallback(
    (targetFrame: number) => {
      if (!videoRef.current || !duration || duration <= 0) {
        const clamped = Math.max(1, Math.min(totalFrames, targetFrame));
        setCurrentFrame(clamped);
        return;
      }
      const clamped = Math.max(1, Math.min(totalFrames, targetFrame));
      setCurrentFrame(clamped);

      // Deterministic scrub math:
      // videoRef.current.currentTime = (targetFrame / totalFrames) * duration
      const targetTime =
        totalFrames > 1
          ? ((clamped - 1) / (totalFrames - 1)) * duration
          : 0;

      videoRef.current.currentTime = Math.max(0, Math.min(duration, targetTime));
      onFrameChange?.(clamped, totalFrames);
    },
    [duration, totalFrames, onFrameChange]
  );

  // Advance or step backward by frame count
  const stepFrame = useCallback(
    (step: number) => {
      // Pause video if currently playing so scrubbing is precise
      if (videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
      scrubToFrame(currentFrame + step);
    },
    [currentFrame, scrubToFrame]
  );

  // Play / Pause toggle
  const togglePlayPause = useCallback(() => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      // If at end and not looping, jump to start
      if (videoRef.current.ended || currentFrame >= totalFrames) {
        scrubToFrame(1);
      }
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn("Playback prevented:", err);
          setIsPlaying(false);
        });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [currentFrame, totalFrames, scrubToFrame]);

  // Fullscreen toggle
  const toggleFullscreen = useCallback(() => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current
        .requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch((err) => console.warn("Fullscreen request error:", err));
    } else {
      document
        .exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch((err) => console.warn("Exit fullscreen error:", err));
    }
  }, []);

  // Listen to fullscreen changes (e.g. user presses Esc)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // Mouse Wheel Scrubbing: frame-by-frame scrubbing inside viewport
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Prevent browser page from scrolling up/down when scrubbing imaging stack
      e.preventDefault();
      const direction = e.deltaY > 0 ? 1 : -1;
      stepFrame(direction);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [stepFrame]);

  // Keyboard navigation shortcuts
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      // Don't intercept if user is typing in an input inside shortcuts modal
      if ((e.target as HTMLElement).tagName === "INPUT") return;

      switch (e.code) {
        case "Space":
          e.preventDefault();
          togglePlayPause();
          break;
        case "ArrowLeft":
          e.preventDefault();
          stepFrame(-1);
          break;
        case "ArrowRight":
          e.preventDefault();
          stepFrame(1);
          break;
        case "Home":
          e.preventDefault();
          scrubToFrame(1);
          break;
        case "End":
          e.preventDefault();
          scrubToFrame(totalFrames);
          break;
        case "KeyF":
          e.preventDefault();
          toggleFullscreen();
          break;
        default:
          break;
      }
    },
    [togglePlayPause, stepFrame, scrubToFrame, totalFrames, toggleFullscreen]
  );

  // Speed selection
  const handleSpeedChange = (speed: number) => {
    setPlaybackSpeed(speed);
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  };

  // Loop toggle
  const toggleLoop = () => {
    const next = !isLooping;
    setIsLooping(next);
    if (videoRef.current) {
      videoRef.current.loop = next;
    }
  };

  // Drag and drop video file handling
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type.startsWith("video/") || file.name.endsWith(".mp4")) {
        const objectUrl = URL.createObjectURL(file);
        setActiveSrc(objectUrl);
        setHasError(false);
        onSourceChange?.(objectUrl);
        onFileDrop?.(file);
      }
    }
  };

  // Local file input change
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const objectUrl = URL.createObjectURL(file);
      setActiveSrc(objectUrl);
      setHasError(false);
      onSourceChange?.(objectUrl);
      onFileDrop?.(file);
    }
  };

  // Video error handling
  const handleVideoError = () => {
    setHasError(true);
    setErrorMessage("Unable to load video stream. Check network access, Google Drive permissions, or drop a local MP4.");
    setIsPlaying(false);
  };

  // Calculate percentage for HUD
  const percentage = Math.round((currentFrame / Math.max(1, totalFrames)) * 100);

  // Composite CSS filters for radiology display
  const videoFilterStyle = useMemo(() => {
    const filters: string[] = [];
    if (invertLut) filters.push("invert(1) hue-rotate(180deg)");
    if (highContrast) filters.push("contrast(1.4) brightness(1.1)");
    return filters.length > 0 ? filters.join(" ") : "none";
  }, [invertLut, highContrast]);

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`relative flex flex-col bg-[#0A0E17] text-slate-100 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 focus:outline-none focus:ring-1 focus:ring-sky-500/50 select-none ${
        isFullscreen ? "fixed inset-0 z-50 rounded-none w-screen h-screen" : "w-full"
      } ${className}`}
      style={{
        backgroundColor: "#0A0E17",
      }}
    >
      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileInputChange}
        accept="video/mp4,video/webm,video/*"
        className="hidden"
      />

      {/* VIEWPORT AREA */}
      <div className="relative flex-1 min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] bg-black flex items-center justify-center overflow-hidden cursor-crosshair">
        {/* Video Element */}
        {activeSrc ? (
          <video
            ref={videoRef}
            src={activeSrc}
            poster={poster}
            loop={isLooping}
            playsInline
            muted
            onLoadedMetadata={handleLoadedMetadata}
            onTimeUpdate={handleTimeUpdate}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => {
              if (!isLooping) setIsPlaying(false);
            }}
            onError={handleVideoError}
            onClick={togglePlayPause}
            className="w-full h-full object-contain pointer-events-auto transition-[filter] duration-150"
            style={{
              filter: videoFilterStyle,
              maxHeight: isFullscreen ? "calc(100vh - 120px)" : "560px",
            }}
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-8 text-center text-slate-400 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 shadow-inner">
              <Film className="w-8 h-8" />
            </div>
            <div>
              <p className="text-base font-semibold text-slate-200">No Imaging Run Loaded</p>
              <p className="text-xs text-slate-500 max-w-sm mt-1">
                Select a sample case run, connect Google Drive/Tailscale stream, or drop a local MP4 cine loop here.
              </p>
            </div>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 text-xs font-semibold tracking-wide transition-colors cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5" />
              Choose Local MP4 File
            </button>
          </div>
        )}

        {/* DRAG-AND-DROP ACTIVE OVERLAY */}
        {isDraggingOver && (
          <div className="absolute inset-0 z-30 bg-sky-950/85 backdrop-blur-xs flex flex-col items-center justify-center border-2 border-dashed border-sky-400 p-6 text-center animate-in fade-in duration-150">
            <div className="w-16 h-16 rounded-full bg-sky-500/20 text-sky-300 flex items-center justify-center mb-3">
              <Upload className="w-8 h-8 animate-bounce" />
            </div>
            <p className="text-base font-bold text-white tracking-tight">Drop Cine Video File Here</p>
            <p className="text-xs text-sky-200 mt-1">Instant zero-lag browser playback (.mp4 / .webm)</p>
          </div>
        )}

        {/* ERROR OVERLAY */}
        {hasError && activeSrc && (
          <div className="absolute inset-0 z-20 bg-black/90 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center mb-3">
              <RotateCcw className="w-6 h-6" />
            </div>
            <p className="text-sm font-semibold text-rose-300">Playback Failed</p>
            <p className="text-xs text-slate-400 max-w-md mt-1 mb-4">{errorMessage}</p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setHasError(false);
                  if (videoRef.current) {
                    videoRef.current.load();
                  }
                }}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 font-medium transition-colors cursor-pointer"
              >
                Retry
              </button>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-xs text-white font-medium transition-colors cursor-pointer"
              >
                Load Local File
              </button>
            </div>
          </div>
        )}

        {/* CLINICAL HUD OVERLAY (HEADS-UP DISPLAY) */}
        {showHud && (
          <div className="absolute inset-0 pointer-events-none p-3.5 flex flex-col justify-between">
            {/* TOP HUD BAR */}
            <div className="flex items-start justify-between gap-2">
              {/* Top-Left: Modality & Patient ID */}
              <div className="flex flex-col gap-1 items-start">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-sky-500/20 text-sky-400 border border-sky-500/40 text-[11px] font-bold font-mono tracking-wide shadow-xs">
                    {modalityBadgeText}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-md text-slate-300 border border-slate-700/60 text-[11px] font-mono font-medium">
                    {patientId}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-sans px-1">
                  <span className="font-semibold text-slate-200">{patientName}</span>
                  <span>•</span>
                  <span className="text-[10px] text-emerald-400 font-medium bg-emerald-950/60 px-1.5 py-0.2 rounded border border-emerald-800/40">
                    DISHA Compliant
                  </span>
                </div>
              </div>

              {/* Top-Right: Series info, FPS & Display Tool Toggles */}
              <div className="flex flex-col items-end gap-1.5 pointer-events-auto">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-md text-slate-300 border border-slate-700/60 text-[11px] font-mono">
                    {frameRate.toFixed(1)} FPS
                  </span>
                  <button
                    type="button"
                    onClick={() => setInvertLut((v) => !v)}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-medium border transition-colors cursor-pointer flex items-center gap-1 ${
                      invertLut
                        ? "bg-amber-500/20 text-amber-300 border-amber-500/50"
                        : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border-slate-800"
                    }`}
                    title="Toggle Grayscale Inversion (DSA Subtraction Angiogram look)"
                  >
                    <Contrast className="w-3 h-3" />
                    <span>Invert LUT</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setHighContrast((v) => !v)}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-medium border transition-colors cursor-pointer flex items-center gap-1 ${
                      highContrast
                        ? "bg-sky-500/20 text-sky-300 border-sky-500/50"
                        : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border-slate-800"
                    }`}
                    title="Toggle Enhanced Vascular Contrast Window"
                  >
                    <Sliders className="w-3 h-3" />
                    <span>Vasc Boost</span>
                  </button>
                </div>
                <div className="text-right text-[11px] font-mono text-slate-400 max-w-[280px] truncate">
                  {seriesDescription}
                </div>
              </div>
            </div>

            {/* BOTTOM HUD FLOATER (Above Controls): Frame Counter Badge */}
            <div className="flex items-end justify-between">
              <div className="px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-slate-800/80 text-xs font-mono text-slate-300 shadow-md">
                <span className="text-sky-400 font-semibold">{frameLabel} {currentFrame}</span>
                <span className="text-slate-500"> of </span>
                <span>{totalFrames}</span>
                <span className="ml-1.5 text-slate-400 text-[10px]">({percentage}%)</span>
              </div>

              <div className="flex items-center gap-1.5 pointer-events-auto">
                <button
                  type="button"
                  onClick={() => setShowShortcutsModal(true)}
                  className="p-1 rounded-md bg-slate-900/70 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors cursor-pointer"
                  title="Keyboard Shortcuts"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setShowHud((v) => !v)}
                  className="p-1 rounded-md bg-slate-900/70 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors cursor-pointer"
                  title={showHud ? "Hide HUD" : "Show HUD"}
                >
                  {showHud ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CONTROLS DOCK */}
      <div className="p-3 sm:p-4 bg-[#0F172A] border-t border-slate-800/90 flex flex-col gap-2.5">
        {/* TIMELINE SCRUBBER SLIDER */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono text-slate-400 shrink-0 min-w-[65px]">
            {frameLabel} {currentFrame}/{totalFrames}
          </span>

          <div className="relative flex-1 flex items-center group">
            {/* Progress track background */}
            <input
              type="range"
              min={1}
              max={Math.max(1, totalFrames)}
              step={1}
              value={currentFrame}
              onChange={(e) => {
                const val = parseInt(e.target.value, 10);
                scrubToFrame(val);
              }}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400 focus:outline-none"
              style={{
                background: `linear-gradient(to right, #38bdf8 0%, #38bdf8 ${percentage}%, #1e293b ${percentage}%, #1e293b 100%)`,
              }}
              aria-label={`Scrub ${frameLabel}`}
            />
          </div>

          <span className="text-[11px] font-mono text-slate-400 shrink-0 min-w-[36px] text-right">
            {percentage}%
          </span>
        </div>

        {/* BUTTON CONTROLS ROW */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
          {/* Group 1: Navigation & Transport */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            {/* First Frame (Home) */}
            <button
              type="button"
              onClick={() => scrubToFrame(1)}
              className="p-1.5 sm:p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="First Frame (Home)"
            >
              <ChevronsLeft className="w-4 h-4" />
            </button>

            {/* Step Back 1 Frame */}
            <button
              type="button"
              onClick={() => stepFrame(-1)}
              className="p-1.5 sm:p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Previous Frame (Left Arrow)"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Main Play / Pause Button */}
            <button
              type="button"
              onClick={togglePlayPause}
              className={`px-3.5 py-1.5 sm:py-2 rounded-xl flex items-center gap-1.5 text-xs font-semibold tracking-wide transition-all shadow-md cursor-pointer ${
                isPlaying
                  ? "bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/40"
                  : "bg-sky-500 text-slate-950 hover:bg-sky-400 font-bold"
              }`}
              title="Play / Pause Cine Loop (Space)"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-current" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>Play</span>
                </>
              )}
            </button>

            {/* Step Forward 1 Frame */}
            <button
              type="button"
              onClick={() => stepFrame(1)}
              className="p-1.5 sm:p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Next Frame (Right Arrow)"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Last Frame (End) */}
            <button
              type="button"
              onClick={() => scrubToFrame(totalFrames)}
              className="p-1.5 sm:p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Last Frame (End)"
            >
              <ChevronsRight className="w-4 h-4" />
            </button>
          </div>

          {/* Group 2: Loop & Speed Selector */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Loop Toggle */}
            <button
              type="button"
              onClick={toggleLoop}
              className={`p-1.5 sm:p-2 rounded-lg border text-xs font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                isLooping
                  ? "bg-sky-500/20 text-sky-300 border-sky-500/40 shadow-xs"
                  : "bg-slate-800/60 text-slate-400 border-slate-700 hover:text-slate-200"
              }`}
              title="Toggle Loop Playback"
            >
              <Repeat className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[11px]">Loop</span>
            </button>

            {/* Playback Speed selector */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5">
              {[0.25, 0.5, 1.0, 2.0].map((rate) => (
                <button
                  key={rate}
                  type="button"
                  onClick={() => handleSpeedChange(rate)}
                  className={`px-1.5 sm:px-2 py-0.5 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                    playbackSpeed === rate
                      ? "bg-sky-500 text-slate-950 font-bold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                  title={`${rate}x Playback Speed`}
                >
                  {rate}x
                </button>
              ))}
            </div>
          </div>

          {/* Group 3: Upload & Fullscreen */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="p-1.5 sm:p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 text-xs transition-colors cursor-pointer flex items-center gap-1"
              title="Load Local Cine MP4"
            >
              <Upload className="w-3.5 h-3.5" />
              <span className="hidden md:inline text-[11px]">Open File</span>
            </button>

            <button
              type="button"
              onClick={toggleFullscreen}
              className="p-1.5 sm:p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Toggle Fullscreen (F)"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* KEYBOARD SHORTCUTS MODAL */}
      {showShortcutsModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="absolute inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setShowShortcutsModal(false)}
        >
          <div
            className="bg-slate-900 border border-slate-800 rounded-2xl p-5 max-w-md w-full shadow-2xl text-left space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-400" />
                Angiosuite Scrubber Keyboard Shortcuts
              </h3>
              <button
                type="button"
                onClick={() => setShowShortcutsModal(false)}
                className="text-slate-400 hover:text-white text-xs font-semibold cursor-pointer"
              >
                Close (Esc)
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/60">
                <span className="text-slate-300">Play / Pause</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-700 text-sky-300 text-[10px]">Space</kbd>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/60">
                <span className="text-slate-300">Frame Scrub</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-700 text-sky-300 text-[10px]">Mouse Wheel</kbd>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/60">
                <span className="text-slate-300">Previous Frame</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-700 text-sky-300 text-[10px]">Left Arrow</kbd>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/60">
                <span className="text-slate-300">Next Frame</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-700 text-sky-300 text-[10px]">Right Arrow</kbd>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/60">
                <span className="text-slate-300">First Frame</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-700 text-sky-300 text-[10px]">Home</kbd>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/60">
                <span className="text-slate-300">Last Frame</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-700 text-sky-300 text-[10px]">End</kbd>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/60">
                <span className="text-slate-300">Fullscreen</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-700 text-sky-300 text-[10px]">F</kbd>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/60">
                <span className="text-slate-300">Drop Local File</span>
                <kbd className="px-1.5 py-0.5 rounded bg-slate-700 text-sky-300 text-[10px]">Drag & Drop</kbd>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 font-sans leading-relaxed border-t border-slate-800/80 pt-2">
              Tip: While hovering over the viewport, turning the mouse wheel will scroll slices frame-by-frame without scrolling the page.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
