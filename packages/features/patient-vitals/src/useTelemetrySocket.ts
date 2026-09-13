"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export interface LiveTelemetryPayload {
  patientId: string;
  timestamp: string;
  systolic: number;
  diastolic: number;
  map: number;
  heartRate: number;
  spo2Percent: number;
  etco2MmHg: number;
  respiratoryRate: number;
  actSeconds: number;
  rhythmStatus: string;
  airKermaMgy: number;
  dapGyCm2: number;
  fluoroTimeMinutes: number;
  fluoroTimeSeconds: number;
  source: string;
}

export type SocketConnectionStatus =
  | "connecting"
  | "connected"
  | "disconnected"
  | "error";

export interface UseTelemetrySocketOptions {
  patientId?: string | null;
  enabled?: boolean;
  wsUrl?: string;
  reconnectIntervalMs?: number;
  maxReconnectIntervalMs?: number;
  onMessage?: (payload: LiveTelemetryPayload) => void;
  onError?: (error: Event) => void;
  onOpen?: () => void;
  onClose?: () => void;
}

export interface UseTelemetrySocketReturn {
  telemetry: LiveTelemetryPayload | null;
  connectionStatus: SocketConnectionStatus;
  lastMessageAt: Date | null;
  latencyMs: number;
  messageCount: number;
  error: string | null;
  reconnect: () => void;
  disconnect: () => void;
}

/**
 * Resolves standard WebSocket URL for clinical telemetry streaming.
 */
export function resolveTelemetryWsUrl(
  patientId: string = "IR-2026-8841",
  customUrl?: string
): string {
  if (customUrl) {
    if (customUrl.startsWith("/")) {
      if (typeof window !== "undefined") {
        const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
        return `${protocol}//${window.location.host}${customUrl}`;
      }
      return `ws://127.0.0.1:8081${customUrl}`;
    }
    return customUrl;
  }

  // Next.js client environment
  if (typeof window !== "undefined") {
    const envWs = process.env.NEXT_PUBLIC_FHIR_WS_URL || process.env.NEXT_PUBLIC_WS_URL;
    if (envWs) {
      return `${envWs.replace(/\/+$/, "")}/ws/vitals/${encodeURIComponent(patientId)}`;
    }

    const host = window.location.hostname || "127.0.0.1";
    // Connect directly to fhir-service telemetry port 8081
    return `ws://${host}:8081/ws/vitals/${encodeURIComponent(patientId)}`;
  }

  return `ws://127.0.0.1:8081/ws/vitals/${encodeURIComponent(patientId)}`;
}

/**
 * Custom React hook establishing a resilient, real-time WebSocket connection
 * to the Golang FHIR/Telemetry microservice.
 */
export function useTelemetrySocket(
  options: UseTelemetrySocketOptions = {}
): UseTelemetrySocketReturn {
  const {
    patientId = "IR-2026-8841",
    enabled = true,
    wsUrl,
    reconnectIntervalMs = 1500,
    maxReconnectIntervalMs = 15000,
    onMessage,
    onError,
    onOpen,
    onClose,
  } = options;

  const [telemetry, setTelemetry] = useState<LiveTelemetryPayload | null>(null);
  const [connectionStatus, setConnectionStatus] =
    useState<SocketConnectionStatus>("disconnected");
  const [lastMessageAt, setLastMessageAt] = useState<Date | null>(null);
  const [latencyMs, setLatencyMs] = useState<number>(0);
  const [messageCount, setMessageCount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const socketRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentBackoffRef = useRef<number>(reconnectIntervalMs);
  const isManuallyClosedRef = useRef<boolean>(false);

  const clearReconnectTimeout = useCallback(() => {
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
      reconnectTimeoutRef.current = null;
    }
  }, []);

  const connect = useCallback(() => {
    if (!enabled || typeof window === "undefined") {
      return;
    }

    // Terminate existing socket if any
    if (socketRef.current) {
      try {
        socketRef.current.close();
      } catch {
        // Safe ignore
      }
      socketRef.current = null;
    }

    clearReconnectTimeout();
    isManuallyClosedRef.current = false;
    setConnectionStatus("connecting");
    setError(null);

    const targetUrl = resolveTelemetryWsUrl(patientId || "IR-2026-8841", wsUrl);

    try {
      const ws = new WebSocket(targetUrl);
      socketRef.current = ws;

      ws.onopen = () => {
        setConnectionStatus("connected");
        setError(null);
        currentBackoffRef.current = reconnectIntervalMs; // Reset backoff on success
        onOpen?.();
      };

      ws.onmessage = (event: MessageEvent) => {
        try {
          const now = new Date();
          const parsed: LiveTelemetryPayload = JSON.parse(event.data);

          // Calculate transmission latency if server timestamp is present
          if (parsed.timestamp) {
            const serverTime = new Date(parsed.timestamp).getTime();
            const latency = Math.max(0, now.getTime() - serverTime);
            setLatencyMs(latency);
          }

          setTelemetry(parsed);
          setLastMessageAt(now);
          setMessageCount((prev) => prev + 1);
          onMessage?.(parsed);
        } catch (parseErr) {
          console.warn("[TelemetrySocket] JSON parse error:", parseErr);
        }
      };

      ws.onerror = (evt: Event) => {
        setConnectionStatus("error");
        setError("WebSocket connection failed or interrupted");
        onError?.(evt);
      };

      ws.onclose = () => {
        setConnectionStatus("disconnected");
        socketRef.current = null;
        onClose?.();

        // Automatic exponential backoff reconnect if not closed manually
        if (!isManuallyClosedRef.current && enabled) {
          const nextBackoff = Math.min(
            currentBackoffRef.current * 1.5,
            maxReconnectIntervalMs
          );
          currentBackoffRef.current = nextBackoff;

          clearReconnectTimeout();
          reconnectTimeoutRef.current = setTimeout(() => {
            connect();
          }, nextBackoff);
        }
      };
    } catch (createErr) {
      setConnectionStatus("error");
      setError(
        createErr instanceof Error ? createErr.message : "Failed to initialize WebSocket"
      );
    }
  }, [
    enabled,
    patientId,
    wsUrl,
    reconnectIntervalMs,
    maxReconnectIntervalMs,
    clearReconnectTimeout,
    onMessage,
    onError,
    onOpen,
    onClose,
  ]);

  const disconnect = useCallback(() => {
    isManuallyClosedRef.current = true;
    clearReconnectTimeout();
    if (socketRef.current) {
      socketRef.current.close();
      socketRef.current = null;
    }
    setConnectionStatus("disconnected");
  }, [clearReconnectTimeout]);

  const reconnect = useCallback(() => {
    currentBackoffRef.current = reconnectIntervalMs;
    connect();
  }, [connect, reconnectIntervalMs]);

  useEffect(() => {
    if (enabled) {
      connect();
    } else {
      disconnect();
    }

    return () => {
      disconnect();
    };
  }, [enabled, patientId, connect, disconnect]);

  return {
    telemetry,
    connectionStatus,
    lastMessageAt,
    latencyMs,
    messageCount,
    error,
    reconnect,
    disconnect,
  };
}
