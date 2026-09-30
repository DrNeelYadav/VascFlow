/**
 * Client-side bridge and lifecycle manager for DICOM Codec Worker
 */

import {
  type DecodeFrameRequest,
  type DecodeFrameResponse,
  decodeDicomFrameData,
} from "./dicomCodecWorker";

let activeWorker: Worker | null = null;
const pendingRequests = new Map<
  string,
  {
    resolve: (res: DecodeFrameResponse) => void;
    reject: (err: Error) => void;
  }
>();

export function getCodecWorker(): Worker | null {
  if (typeof window === "undefined" || typeof Worker === "undefined") {
    return null;
  }

  if (!activeWorker) {
    try {
      activeWorker = new Worker(
        new URL("./dicomCodecWorker.ts", import.meta.url),
        { type: "module" }
      );

      activeWorker.onmessage = (event: MessageEvent<DecodeFrameResponse>) => {
        const { id } = event.data;
        const pending = pendingRequests.get(id);
        if (pending) {
          pendingRequests.delete(id);
          pending.resolve(event.data);
        }
      };

      activeWorker.onerror = (err) => {
        console.warn("[DICOM Codec Worker Error]:", err);
      };
    } catch {
      activeWorker = null;
    }
  }

  return activeWorker;
}

export function terminateCodecWorker(): void {
  if (activeWorker) {
    activeWorker.terminate();
    activeWorker = null;
    pendingRequests.clear();
  }
}

export async function decompressDicomFrame(
  params: Omit<DecodeFrameRequest, "id">
): Promise<DecodeFrameResponse> {
  const id = `req_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const request: DecodeFrameRequest = { ...params, id };

  const worker = getCodecWorker();

  if (worker) {
    return new Promise<DecodeFrameResponse>((resolve, reject) => {
      pendingRequests.set(id, { resolve, reject });
      try {
        worker.postMessage(request, [request.encodedBuffer]);
      } catch (err) {
        pendingRequests.delete(id);
        // Fallback to synchronous execution
        const { pixelData, durationMs } = decodeDicomFrameData(request);
        resolve({
          id,
          frameIndex: request.frameIndex,
          success: true,
          pixelData,
          width: request.width,
          height: request.height,
          decodingDurationMs: durationMs,
        });
      }
    });
  }

  // Fallback to synchronous decoder in SSR / unit test environments
  const { pixelData, durationMs } = decodeDicomFrameData(request);
  return {
    id,
    frameIndex: request.frameIndex,
    success: true,
    pixelData,
    width: request.width,
    height: request.height,
    decodingDurationMs: durationMs,
  };
}
