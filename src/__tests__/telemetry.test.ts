import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  TelemetryReporter,
  rateMetric,
  globalTelemetry,
  initClientTelemetry,
  type MetricPayload,
  type ClientErrorPayload,
} from "../../apps/web-app/app/utils/telemetry";

describe("Frontend Observability & Core Web Vitals Telemetry Suite", () => {
  let reporter: TelemetryReporter;

  beforeEach(() => {
    vi.useFakeTimers();
    reporter = new TelemetryReporter({
      endpoint: "/api/proxy/api/v1/telemetry",
      sampleRate: 1.0,
      batchIntervalMs: 2000,
      maxBatchSize: 5,
    });
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  describe("Core Web Vitals Threshold Scoring", () => {
    it("classifies LCP (Largest Contentful Paint) correctly", () => {
      expect(rateMetric("LCP", 1200)).toBe("good");
      expect(rateMetric("LCP", 2500)).toBe("good");
      expect(rateMetric("LCP", 3200)).toBe("needs-improvement");
      expect(rateMetric("LCP", 4000)).toBe("needs-improvement");
      expect(rateMetric("LCP", 4500)).toBe("poor");
    });

    it("classifies FID (First Input Delay) correctly", () => {
      expect(rateMetric("FID", 45)).toBe("good");
      expect(rateMetric("FID", 100)).toBe("good");
      expect(rateMetric("FID", 200)).toBe("needs-improvement");
      expect(rateMetric("FID", 300)).toBe("needs-improvement");
      expect(rateMetric("FID", 350)).toBe("poor");
    });

    it("classifies INP (Interaction to Next Paint) correctly", () => {
      expect(rateMetric("INP", 150)).toBe("good");
      expect(rateMetric("INP", 200)).toBe("good");
      expect(rateMetric("INP", 350)).toBe("needs-improvement");
      expect(rateMetric("INP", 500)).toBe("needs-improvement");
      expect(rateMetric("INP", 650)).toBe("poor");
    });

    it("classifies CLS (Cumulative Layout Shift) correctly", () => {
      expect(rateMetric("CLS", 0.04)).toBe("good");
      expect(rateMetric("CLS", 0.1)).toBe("good");
      expect(rateMetric("CLS", 0.18)).toBe("needs-improvement");
      expect(rateMetric("CLS", 0.25)).toBe("needs-improvement");
      expect(rateMetric("CLS", 0.32)).toBe("poor");
    });
  });

  describe("Metrics Buffering and Automated Batching", () => {
    it("buffers metrics and triggers callback onMetricReported", () => {
      const callback = vi.fn();
      reporter.updateConfig({ onMetricReported: callback });

      const m = reporter.reportMetric("LCP", 2100, "metric-1");
      expect(m).not.toBeNull();
      expect(m?.rating).toBe("good");
      expect(callback).toHaveBeenCalledWith(m);

      const buffered = reporter.getBufferedMetrics();
      expect(buffered.length).toBe(1);
      expect(buffered[0].name).toBe("LCP");
      expect(buffered[0].value).toBe(2100);
    });

    it("automatically flushes when buffer hits maxBatchSize", async () => {
      const mockFetch = vi.fn().mockResolvedValue({ ok: true, json: async () => ({}) });
      vi.stubGlobal("fetch", mockFetch);

      for (let i = 1; i <= 5; i++) {
        reporter.reportMetric("FID", 50 + i, `metric-${i}`);
      }

      // Max batch size is 5 -> immediate flush triggered
      await Promise.resolve(); // wait microtasks

      expect(reporter.getBufferedMetrics().length).toBe(0);
      expect(mockFetch).toHaveBeenCalledTimes(1);

      const callArgs = mockFetch.mock.calls[0];
      expect(callArgs[0]).toBe("/api/proxy/api/v1/telemetry");
      const parsedBody = JSON.parse(callArgs[1].body);
      expect(parsedBody.metrics.length).toBe(5);
    });

    it("flushes on timeout if buffer does not hit maxBatchSize", async () => {
      const mockFetch = vi.fn().mockResolvedValue({ ok: true, json: async () => ({}) });
      vi.stubGlobal("fetch", mockFetch);

      reporter.reportMetric("CLS", 0.05, "metric-cls");
      expect(reporter.getBufferedMetrics().length).toBe(1);

      // Fast forward past batchIntervalMs (2000ms)
      vi.advanceTimersByTime(2100);
      await Promise.resolve();

      expect(reporter.getBufferedMetrics().length).toBe(0);
      expect(mockFetch).toHaveBeenCalledTimes(1);
    });
  });

  describe("Client-Side Error Reporter", () => {
    it("captures structured client errors and attaches stack and environment metadata", async () => {
      const errorCb = vi.fn();
      reporter.updateConfig({ onErrorReported: errorCb });

      const fakeError = new Error("Angio C-Arm DICOM Stream Timeout");
      fakeError.stack = "Error: Angio C-Arm...\n  at Object.fetch (c-arm.ts:42)";

      const errPayload = reporter.reportError(
        fakeError.message,
        fakeError,
        "boundary",
        { source: "https://vascule.hospital.org/angio/live", lineno: 42, colno: 12 }
      );

      expect(errPayload.message).toBe("Angio C-Arm DICOM Stream Timeout");
      expect(errPayload.type).toBe("boundary");
      expect(errPayload.stack).toContain("at Object.fetch");
      expect(errPayload.lineno).toBe(42);
      expect(errorCb).toHaveBeenCalledWith(errPayload);

      const bufferedErrors = reporter.getBufferedErrors();
      expect(bufferedErrors.length).toBe(1);
    });

    it("re-queues metrics and errors on transmission failure without crashing", async () => {
      const failingFetch = vi.fn().mockRejectedValue(new Error("Network connection dropped"));
      vi.stubGlobal("fetch", failingFetch);

      reporter.reportMetric("TTFB", 650);
      reporter.reportError("Uncaught ReferenceError: device is not defined");

      const result = await reporter.flush();
      expect(result.metricsSent).toBe(1);
      expect(result.errorsSent).toBe(1);

      // Re-queued
      expect(reporter.getBufferedMetrics().length).toBe(1);
      expect(reporter.getBufferedErrors().length).toBe(1);
    });
  });

  describe("Singleton & Listener Initialization", () => {
    it("exports initialized global telemetry instance", () => {
      expect(globalTelemetry).toBeInstanceOf(TelemetryReporter);
      const instance = initClientTelemetry({ sampleRate: 0.5 });
      expect(instance).toBe(globalTelemetry);
      expect(instance.getConfig().sampleRate).toBe(0.5);
    });
  });
});
