/**
 * VASCULE OS TELEMETRY & CORE WEB VITALS MONITORING ENGINE
 * 
 * Provides real-time tracking of Core Web Vitals (LCP, FID/INP, CLS, TTFB)
 * using standard browser PerformanceObserver APIs and an automated client-side error reporter.
 * Telemetry metrics and error events are buffered and flushed to the BFF proxy endpoint.
 */

export interface MetricPayload {
  name: "LCP" | "FID" | "INP" | "CLS" | "TTFB" | "FCP";
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  delta: number;
  id: string;
  navigationType?: string;
  timestamp: number;
}

export interface ClientErrorPayload {
  message: string;
  source?: string;
  lineno?: number;
  colno?: number;
  stack?: string;
  type: "unhandledrejection" | "error" | "boundary";
  timestamp: number;
  url: string;
  userAgent: string;
}

export interface TelemetryConfig {
  endpoint?: string;
  sampleRate?: number;
  batchIntervalMs?: number;
  maxBatchSize?: number;
  onMetricReported?: (metric: MetricPayload) => void;
  onErrorReported?: (error: ClientErrorPayload) => void;
}

const DEFAULT_CONFIG: Required<TelemetryConfig> = {
  endpoint: "/api/proxy/api/v1/telemetry",
  sampleRate: 1.0,
  batchIntervalMs: 5000,
  maxBatchSize: 20,
  onMetricReported: () => {},
  onErrorReported: () => {},
};

/**
 * Quantifies ratings according to official Google Core Web Vitals thresholds.
 */
export function rateMetric(
  name: MetricPayload["name"],
  value: number
): "good" | "needs-improvement" | "poor" {
  switch (name) {
    case "LCP":
      return value <= 2500 ? "good" : value <= 4000 ? "needs-improvement" : "poor";
    case "FID":
      return value <= 100 ? "good" : value <= 300 ? "needs-improvement" : "poor";
    case "INP":
      return value <= 200 ? "good" : value <= 500 ? "needs-improvement" : "poor";
    case "CLS":
      return value <= 0.1 ? "good" : value <= 0.25 ? "needs-improvement" : "poor";
    case "TTFB":
      return value <= 800 ? "good" : value <= 1800 ? "needs-improvement" : "poor";
    case "FCP":
      return value <= 1800 ? "good" : value <= 3000 ? "needs-improvement" : "poor";
    default:
      return "good";
  }
}

export class TelemetryReporter {
  private config: Required<TelemetryConfig>;
  private metricBuffer: MetricPayload[] = [];
  private errorBuffer: ClientErrorPayload[] = [];
  private timer: any = null;
  private isListening = false;

  constructor(config?: TelemetryConfig) {
    this.config = { ...DEFAULT_CONFIG, ...config };
  }

  public updateConfig(config: Partial<TelemetryConfig>) {
    this.config = { ...this.config, ...config };
  }

  public getConfig(): Required<TelemetryConfig> {
    return this.config;
  }

  public getBufferedMetrics(): MetricPayload[] {
    return [...this.metricBuffer];
  }

  public getBufferedErrors(): ClientErrorPayload[] {
    return [...this.errorBuffer];
  }

  public reportMetric(
    name: MetricPayload["name"],
    value: number,
    id: string = crypto.randomUUID ? crypto.randomUUID() : "id-" + Date.now(),
    navigationType?: string
  ): MetricPayload | null {
    if (Math.random() > this.config.sampleRate) {
      return null;
    }

    const payload: MetricPayload = {
      name,
      value: Math.round(value * 100) / 100,
      rating: rateMetric(name, value),
      delta: Math.round(value * 100) / 100,
      id,
      navigationType,
      timestamp: Date.now(),
    };

    this.metricBuffer.push(payload);
    this.config.onMetricReported(payload);

    if (this.metricBuffer.length >= this.config.maxBatchSize) {
      this.flush();
    } else {
      this.scheduleFlush();
    }

    return payload;
  }

  public reportError(
    message: string,
    errorObj?: Error | null,
    type: ClientErrorPayload["type"] = "error",
    extra?: { source?: string; lineno?: number; colno?: number }
  ): ClientErrorPayload {
    const payload: ClientErrorPayload = {
      message,
      source: extra?.source || (typeof window !== "undefined" ? window.location.href : ""),
      lineno: extra?.lineno,
      colno: extra?.colno,
      stack: errorObj?.stack,
      type,
      timestamp: Date.now(),
      url: typeof window !== "undefined" ? window.location.href : "",
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "SSR",
    };

    this.errorBuffer.push(payload);
    this.config.onErrorReported(payload);

    if (this.errorBuffer.length >= this.config.maxBatchSize) {
      this.flush();
    } else {
      this.scheduleFlush();
    }

    return payload;
  }

  private scheduleFlush() {
    if (this.timer) return;
    this.timer = setTimeout(() => {
      this.timer = null;
      this.flush();
    }, this.config.batchIntervalMs);
  }

  public async flush(): Promise<{ metricsSent: number; errorsSent: number }> {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    const metricsToSend = [...this.metricBuffer];
    const errorsToSend = [...this.errorBuffer];

    this.metricBuffer = [];
    this.errorBuffer = [];

    if (metricsToSend.length === 0 && errorsToSend.length === 0) {
      return { metricsSent: 0, errorsSent: 0 };
    }

    const payload = {
      timestamp: Date.now(),
      metrics: metricsToSend,
      errors: errorsToSend,
    };

    try {
      if (typeof fetch !== "undefined" && this.config.endpoint) {
        await fetch(this.config.endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          keepalive: true,
        });
      }
    } catch {
      if (this.metricBuffer.length + metricsToSend.length <= this.config.maxBatchSize * 2) {
        this.metricBuffer.unshift(...metricsToSend);
      }
      if (this.errorBuffer.length + errorsToSend.length <= this.config.maxBatchSize * 2) {
        this.errorBuffer.unshift(...errorsToSend);
      }
    }

    return {
      metricsSent: metricsToSend.length,
      errorsSent: errorsToSend.length,
    };
  }

  public initListeners() {
    if (typeof window === "undefined" || this.isListening) return;
    this.isListening = true;

    window.addEventListener("unhandledrejection", (event: any) => {
      const reason = event.reason;
      const message =
        reason instanceof Error
          ? reason.message
          : typeof reason === "string"
          ? reason
          : "Unhandled Promise Rejection";
      const errorObj = reason instanceof Error ? reason : null;
      this.reportError(message, errorObj, "unhandledrejection");
    });

    window.addEventListener("error", (event: any) => {
      this.reportError(
        event.message || "Uncaught Error",
        event.error,
        "error",
        {
          source: event.filename,
          lineno: event.lineno,
          colno: event.colno,
        }
      );
    });

    if (typeof PerformanceObserver !== "undefined") {
      try {
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            this.reportMetric("LCP", lastEntry.startTime, (lastEntry as any).id);
          }
        });
        lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });
      } catch {}

      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value || 0;
            }
          }
          this.reportMetric("CLS", clsValue);
        });
        clsObserver.observe({ type: "layout-shift", buffered: true });
      } catch {}

      try {
        const fidObserver = new PerformanceObserver((entryList) => {
          const firstInput = entryList.getEntries()[0] as any;
          if (firstInput && firstInput.processingStart) {
            const fid = firstInput.processingStart - firstInput.startTime;
            this.reportMetric("FID", fid);
          }
        });
        fidObserver.observe({ type: "first-input", buffered: true });
      } catch {}
    }
  }
}

export const globalTelemetry = new TelemetryReporter();

export function initClientTelemetry(config?: TelemetryConfig): TelemetryReporter {
  if (config) {
    globalTelemetry.updateConfig(config);
  }
  globalTelemetry.initListeners();
  return globalTelemetry;
}
