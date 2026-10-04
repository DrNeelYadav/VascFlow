"use client";

import { useCallback } from "react";
import type {
  HorosMenuCommand,
  HorosViewportCommand,
} from "@/app/components/imaging/horos/horosTypes";
import { ENGINE_ID_PREFIX, MAX_VIEWPORT_SLOTS } from "./pacsDataContract";

interface CameraViewport {
  getCamera?: () => Record<string, number | boolean>;
  setCamera?: (camera: Record<string, number | boolean>) => void;
  resetCamera?: () => void;
  resetProperties?: () => void;
  render?: () => void;
  getImageIds?: () => string[];
}

const ZOOM_STEP = 1.25;
const ROTATE_STEP = 90;

function applyCameraCommand(viewport: CameraViewport, command: HorosViewportCommand): boolean {
  switch (command) {
    case "zoomIn":
    case "zoomOut": {
      const camera = viewport.getCamera?.();
      const scale = camera?.parallelScale;
      if (!camera || !viewport.setCamera) return false;
      if (typeof scale !== "number" || !Number.isFinite(scale) || scale <= 0) return false;
      const factor = command === "zoomIn" ? ZOOM_STEP : 1 / ZOOM_STEP;
      viewport.setCamera({ ...camera, parallelScale: scale * factor });
      viewport.render?.();
      return true;
    }
    case "zoomToFit":
    case "resetView":
    case "panReset":
    case "rotateReset": {
      if (!viewport.resetCamera) return false;
      viewport.resetCamera();
      viewport.render?.();
      return true;
    }
    case "rotateLeft":
    case "rotateRight": {
      const camera = viewport.getCamera?.();
      const rotation = camera?.rotation;
      if (!camera || !viewport.setCamera) return false;
      if (typeof rotation !== "number" || !Number.isFinite(rotation)) return false;
      const delta = command === "rotateRight" ? ROTATE_STEP : -ROTATE_STEP;
      viewport.setCamera({ ...camera, rotation: rotation + delta });
      viewport.render?.();
      return true;
    }
    case "flipHorizontal":
    case "flipVertical": {
      const camera = viewport.getCamera?.();
      const key = command === "flipHorizontal" ? "flipHorizontal" : "flipVertical";
      if (!camera || !viewport.setCamera) return false;
      viewport.setCamera({ ...camera, [key]: !camera[key] });
      viewport.render?.();
      return true;
    }
    case "windowLevelReset": {
      if (!viewport.resetProperties) return false;
      viewport.resetProperties();
      viewport.render?.();
      return true;
    }
    default:
      return false;
  }
}

interface UseImagingViewportCommandsProps {
  queryStudies: () => Promise<void>;
  handleCloseStudy: () => void;
  setNotice: (msg: string | null) => void;
}

export function useImagingViewportCommands({
  queryStudies,
  handleCloseStudy,
  setNotice,
}: UseImagingViewportCommandsProps) {
  const handleViewportCommand = useCallback((command: HorosViewportCommand) => {
    void (async () => {
      let getRenderingEngine: (id: string) => { getViewports(): unknown[] } | undefined;
      try {
        const { initialiseCornerstone } = await import(
          "@/app/components/imaging/cornerstone/init"
        );
        const runtime = await initialiseCornerstone();
        const core = runtime.core as unknown as {
          getRenderingEngine: (id: string) => { getViewports(): unknown[] } | undefined;
        };
        getRenderingEngine = core.getRenderingEngine;
      } catch (cause) {
        const detail = cause instanceof Error ? cause.message : "";
        setNotice(
          detail.length > 0
            ? `The image engine could not start. ${detail}`
            : "The image engine could not start.",
        );
        return;
      }

      let acted = false;
      let unsupported = false;

      for (let slot = 0; slot < MAX_VIEWPORT_SLOTS; slot += 1) {
        const engine = getRenderingEngine(`${ENGINE_ID_PREFIX}-${slot}`);
        if (!engine) continue;
        const viewports = typeof engine.getViewports === "function" ? engine.getViewports() : [];
        for (const candidate of viewports) {
          const viewport = candidate as CameraViewport;
          if (typeof viewport.getImageIds === "function" && viewport.getImageIds().length === 0) {
            continue;
          }
          if (applyCameraCommand(viewport, command)) acted = true;
          else unsupported = true;
        }
      }

      if (unsupported) {
        setNotice(
          "That command is not implemented by this viewer: image calibration and measurement annotation are not wired.",
        );
      } else if (!acted) {
        setNotice("That command needs an image in a viewport.");
      }
    })();
  }, [setNotice]);

  const handleMenuCommand = useCallback(
    (command: HorosMenuCommand) => {
      if (command === "query.refresh") {
        void queryStudies();
        return;
      }
      if (command === "file.closeStudy") {
        handleCloseStudy();
      }
    },
    [handleCloseStudy, queryStudies],
  );

  return {
    handleViewportCommand,
    handleMenuCommand,
  };
}
