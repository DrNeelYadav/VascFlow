/**
 * OpenTelemetry Distributed Tracing & High-Latency Alert Engine
 * 
 * Provides W3C-compliant distributed tracing spans for critical clinical transactions:
 * - eGFR & renal contrast safety calculations
 * - Angiosuite hardware inventory stock depletion
 * - Merkle DAG multi-tablet branch reconciliation
 * 
 * Automatically raises latency alerts for any transaction exceeding the 100ms threshold.
 */

import crypto from "crypto";

export interface SpanContext {
  traceId: string;
  spanId: string;
  traceparent: string;
  name: string;
  startTime: number;
  attributes: Record<string, unknown>;
}

export interface LatencyAlert {
  id: string;
  name: string;
  durationMs: number;
  thresholdMs: number;
  traceId: string;
  spanId: string;
  attributes: Record<string, unknown>;
  timestamp: string;
}

export interface ClientTelemetryError {
  id: string;
  component: "DicomViewer" | "VoiceDictationStudio" | string;
  errorType: "WEBGL_CONTEXT_CRASH" | "SPEECH_RECOGNITION_ERROR" | string;
  message: string;
  context?: Record<string, unknown>;
  timestamp: string;
}

export const LATENCY_ALERT_THRESHOLD_MS = 100;

const telemetryAlertBuffer: LatencyAlert[] = [];
const clientErrorBuffer: ClientTelemetryError[] = [];

/**
 * Generates a random 16-byte hex TraceID and 8-byte hex SpanID per W3C specification.
 */
export function generateTraceContext(): { traceId: string; spanId: string; traceparent: string } {
  const traceId = crypto.randomBytes(16).toString("hex");
  const spanId = crypto.randomBytes(8).toString("hex");
  const traceparent = `00-${traceId}-${spanId}-01`;
  return { traceId, spanId, traceparent };
}

/**
 * Records an alert when a critical clinical transaction exceeds the 100ms SLA threshold.
 */
export function recordLatencyAlert(alert: Omit<LatencyAlert, "id" | "timestamp">): LatencyAlert {
  const fullAlert: LatencyAlert = {
    ...alert,
    id: `alert_${Date.now()}_${crypto.randomBytes(3).toString("hex")}`,
    timestamp: new Date().toISOString(),
  };

  telemetryAlertBuffer.push(fullAlert);
  if (telemetryAlertBuffer.length > 200) {
    telemetryAlertBuffer.shift();
  }

  console.warn(
    `[OpenTelemetry Alert] Transaction "${alert.name}" breached latency SLA: ${alert.durationMs.toFixed(2)}ms (Threshold: ${alert.thresholdMs}ms) [traceId: ${alert.traceId}]`
  );

  return fullAlert;
}

/**
 * Traces a critical synchronous or asynchronous transaction with OpenTelemetry attributes.
 */
export async function traceTransaction<T>(
  name: string,
  fn: (span: SpanContext) => Promise<T> | T,
  attributes: Record<string, unknown> = {}
): Promise<T> {
  const { traceId, spanId, traceparent } = generateTraceContext();
  const startTime = typeof performance !== "undefined" ? performance.now() : Date.now();

  const span: SpanContext = {
    traceId,
    spanId,
    traceparent,
    name,
    startTime,
    attributes: { ...attributes },
  };

  try {
    const result = await fn(span);
    const endTime = typeof performance !== "undefined" ? performance.now() : Date.now();
    const durationMs = Math.max(0.01, endTime - startTime);

    if (durationMs > LATENCY_ALERT_THRESHOLD_MS) {
      recordLatencyAlert({
        name,
        durationMs,
        thresholdMs: LATENCY_ALERT_THRESHOLD_MS,
        traceId,
        spanId,
        attributes: span.attributes,
      });
    }

    return result;
  } catch (err: any) {
    const endTime = typeof performance !== "undefined" ? performance.now() : Date.now();
    const durationMs = Math.max(0.01, endTime - startTime);

    span.attributes.error = true;
    span.attributes.errorMessage = err?.message || String(err);

    if (durationMs > LATENCY_ALERT_THRESHOLD_MS) {
      recordLatencyAlert({
        name,
        durationMs,
        thresholdMs: LATENCY_ALERT_THRESHOLD_MS,
        traceId,
        spanId,
        attributes: span.attributes,
      });
    }

    throw err;
  }
}

/**
 * Logs client-side telemetry errors (e.g., WebGL context crash or speech recognition interruptions)
 * to the Sentry / OpenTelemetry collector buffer.
 */
export function recordClientTelemetryError(
  event: Omit<ClientTelemetryError, "id" | "timestamp">
): ClientTelemetryError {
  const entry: ClientTelemetryError = {
    ...event,
    id: `err_${Date.now()}_${crypto.randomBytes(3).toString("hex")}`,
    timestamp: new Date().toISOString(),
  };

  clientErrorBuffer.push(entry);
  if (clientErrorBuffer.length > 200) {
    clientErrorBuffer.shift();
  }

  console.error(
    `[Telemetry Error Capture] ${entry.component} -> ${entry.errorType}: ${entry.message}`,
    entry.context || {}
  );

  return entry;
}

export function getRecentTelemetryAlerts(): LatencyAlert[] {
  return [...telemetryAlertBuffer];
}

export function getRecentTelemetryErrors(): ClientTelemetryError[] {
  return [...clientErrorBuffer];
}

export function clearTelemetryBuffers(): void {
  telemetryAlertBuffer.length = 0;
  clientErrorBuffer.length = 0;
}
