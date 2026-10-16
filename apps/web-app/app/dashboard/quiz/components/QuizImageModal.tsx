"use client";

import React, { useState } from "react";
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

interface QuizImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  caption?: string;
}

export function QuizImageModal({
  isOpen,
  onClose,
  imageSrc,
  caption,
}: QuizImageModalProps) {
  const [scale, setScale] = useState<number>(1);

  if (!isOpen || !imageSrc) return null;

  const handleZoomIn = () => setScale((s) => Math.min(s + 0.3, 3));
  const handleZoomOut = () => setScale((s) => Math.max(s - 0.3, 0.7));
  const handleReset = () => setScale(1);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex flex-col items-center justify-center p-3 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Floating Controls */}
      <div
        className="w-full max-w-4xl flex items-center justify-between p-2 mb-2 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-xs text-slate-300 truncate max-w-md font-mono">
          {caption || "Radiological Image Detail"}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleZoomIn}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition cursor-pointer"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleZoomOut}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition cursor-pointer"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition cursor-pointer"
            title="Reset Zoom"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-red-700 text-white transition cursor-pointer ml-2"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Image Viewport Container */}
      <div
        className="max-w-4xl max-h-[82vh] overflow-auto flex items-center justify-center p-2 rounded-xl bg-slate-950/80 border border-slate-800 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageSrc}
          alt={caption || "Clinical Case Radiograph"}
          style={{ transform: `scale(${scale})`, transition: "transform 0.15s ease-out" }}
          className="max-h-[76vh] max-w-full object-contain cursor-zoom-in rounded select-none"
          onClick={() => setScale((s) => (s >= 2 ? 1 : s + 0.5))}
        />
      </div>

      {caption && (
        <div
          className="mt-2 text-center text-xs text-slate-400 max-w-2xl px-4"
          onClick={(e) => e.stopPropagation()}
        >
          {caption}
        </div>
      )}
    </div>
  );
}
