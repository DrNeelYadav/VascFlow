"use client";

import { useState, useCallback } from "react";

export type DocViewMode = "preview" | "print" | "raw";

export interface UseDocPreviewOptions {
  initialMode?: DocViewMode;
  initialZoom?: number;
  copyTimeoutMs?: number;
}

export interface UseDocPreviewReturn {
  mode: DocViewMode;
  setMode: (mode: DocViewMode) => void;
  zoom: number;
  setZoom: (zoom: number) => void;
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
  copied: boolean;
  copyToClipboard: (text: string) => Promise<boolean>;
  triggerPrint: () => void;
}

/**
 * Pure helper to compute bounded document zoom scale.
 */
export function calculateDocZoom(current: number, delta: number): number {
  return Math.min(150, Math.max(70, current + delta));
}

/**
 * Pure helper for copying text to navigator clipboard safely.
 */
export async function copyDocToClipboard(text: string): Promise<boolean> {
  try {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    return false;
  } catch (err) {
    console.error("Failed to copy document to clipboard:", err);
    return false;
  }
}

/**
 * Pure helper to trigger browser print dialog.
 */
export function triggerDocPrint(): void {
  if (typeof window !== "undefined") {
    window.print();
  }
}

/**
 * Custom hook for high-performance 1-click clipboard, print engine,
 * and multi-format preview scaling across clinical documents.
 */
export function useDocPreview(options: UseDocPreviewOptions = {}): UseDocPreviewReturn {
  const { initialMode = "preview", initialZoom = 100, copyTimeoutMs = 2000 } = options;
  const [mode, setMode] = useState<DocViewMode>(initialMode);
  const [zoom, setZoom] = useState<number>(initialZoom);
  const [copied, setCopied] = useState<boolean>(false);

  const zoomIn = useCallback(() => {
    setZoom((z) => calculateDocZoom(z, 10));
  }, []);

  const zoomOut = useCallback(() => {
    setZoom((z) => calculateDocZoom(z, -10));
  }, []);

  const resetZoom = useCallback(() => {
    setZoom(100);
  }, []);

  const copyToClipboard = useCallback(
    async (text: string): Promise<boolean> => {
      const ok = await copyDocToClipboard(text);
      if (ok) {
        setCopied(true);
        setTimeout(() => setCopied(false), copyTimeoutMs);
      }
      return ok;
    },
    [copyTimeoutMs]
  );

  const triggerPrint = useCallback(() => {
    triggerDocPrint();
  }, []);

  return {
    mode,
    setMode,
    zoom,
    setZoom,
    zoomIn,
    zoomOut,
    resetZoom,
    copied,
    copyToClipboard,
    triggerPrint,
  };
}
