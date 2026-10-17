"use client";

import { useEffect, useState, useCallback } from "react";
import { getQueryClient } from "../queryClient";

export interface LiveStreamState {
  isConnected: boolean;
  lastEventTime: Date | null;
  lastEventType: string | null;
}

/**
 * Connects to the Server-Sent Events (SSE) live feed from the angiosuites.
 * Automatically invalidates case and bed queries upon receiving push events.
 */
export function useAngiosuiteLiveStream(onEvent?: (eventType: string, payload: unknown) => void) {
  const [streamState, setStreamState] = useState<LiveStreamState>({
    isConnected: false,
    lastEventTime: null,
    lastEventType: null,
  });

  const handleLiveEvent = useCallback((type: string, data: unknown) => {
    setStreamState({
      isConnected: true,
      lastEventTime: new Date(),
      lastEventType: type,
    });

    try {
      const qc = getQueryClient();
      if (type === "case_status_changed" || type === "stat_emergency_booked") {
        qc.invalidateQueries({ queryKey: ["cases"] });
      } else if (type === "bed_occupancy_updated") {
        qc.invalidateQueries({ queryKey: ["patients"] });
      }
    } catch {
      // Safe no-op if query cache is uninitialized
    }

    if (onEvent) {
      onEvent(type, data);
    }
  }, [onEvent]);

  useEffect(() => {
    if (typeof window === "undefined" || typeof EventSource === "undefined") return;

    let eventSource: EventSource | null = null;
    let reconnectTimer: NodeJS.Timeout | null = null;

    function connect() {
      try {
        eventSource = new EventSource("/api/angiosuite/stream");

        eventSource.onopen = () => {
          setStreamState((prev) => ({ ...prev, isConnected: true }));
        };

        eventSource.addEventListener("case_status_changed", (e) => {
          try {
            handleLiveEvent("case_status_changed", JSON.parse(e.data));
          } catch {}
        });

        eventSource.addEventListener("stat_emergency_booked", (e) => {
          try {
            handleLiveEvent("stat_emergency_booked", JSON.parse(e.data));
          } catch {}
        });

        eventSource.addEventListener("bed_occupancy_updated", (e) => {
          try {
            handleLiveEvent("bed_occupancy_updated", JSON.parse(e.data));
          } catch {}
        });

        eventSource.onerror = () => {
          setStreamState((prev) => ({ ...prev, isConnected: false }));
          eventSource?.close();
          // Auto-reconnect with 5s backoff
          reconnectTimer = setTimeout(connect, 5000);
        };
      } catch {
        setStreamState((prev) => ({ ...prev, isConnected: false }));
      }
    }

    connect();

    return () => {
      if (reconnectTimer) clearTimeout(reconnectTimer);
      eventSource?.close();
    };
  }, [handleLiveEvent]);

  return streamState;
}
