import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { NextRequest } from "next/server";
import {
  GET,
  getCircuitStatus,
  recordCircuitFailure,
  recordCircuitSuccess,
  resetCircuitBreakerRegistry,
  getDegradedClinicalFallback,
  circuitRegistry,
} from "../../apps/web-app/app/api/proxy/[...path]/route";

describe("Principal Chaos & Resilience - Circuit Breaker Suite", () => {
  const TARGET_KEY = "http://127.0.0.1:8081";

  beforeEach(() => {
    resetCircuitBreakerRegistry();
    vi.restoreAllMocks();
  });

  afterEach(() => {
    resetCircuitBreakerRegistry();
  });

  describe("Circuit State Machine Logic", () => {
    it("initializes in CLOSED state with 0 failures", () => {
      const status = getCircuitStatus(TARGET_KEY);
      expect(status.state).toBe("CLOSED");
      expect(status.consecutiveFailures).toBe(0);
    });

    it("transitions from CLOSED to OPEN upon reaching failure threshold (3)", () => {
      expect(recordCircuitFailure(TARGET_KEY)).toBe("CLOSED");
      expect(getCircuitStatus(TARGET_KEY).consecutiveFailures).toBe(1);

      expect(recordCircuitFailure(TARGET_KEY)).toBe("CLOSED");
      expect(getCircuitStatus(TARGET_KEY).consecutiveFailures).toBe(2);

      // Third failure triggers OPEN state
      const state = recordCircuitFailure(TARGET_KEY);
      expect(state).toBe("OPEN");
      expect(getCircuitStatus(TARGET_KEY).state).toBe("OPEN");
      expect(getCircuitStatus(TARGET_KEY).nextAllowedAttempt).toBeGreaterThan(Date.now());
    });

    it("resets back to CLOSED on successful request", () => {
      recordCircuitFailure(TARGET_KEY);
      recordCircuitFailure(TARGET_KEY);
      expect(getCircuitStatus(TARGET_KEY).consecutiveFailures).toBe(2);

      recordCircuitSuccess(TARGET_KEY);
      expect(getCircuitStatus(TARGET_KEY).state).toBe("CLOSED");
      expect(getCircuitStatus(TARGET_KEY).consecutiveFailures).toBe(0);
    });

    it("transitions from OPEN to HALF_OPEN after cooldown period", () => {
      recordCircuitFailure(TARGET_KEY);
      recordCircuitFailure(TARGET_KEY);
      recordCircuitFailure(TARGET_KEY);
      expect(getCircuitStatus(TARGET_KEY).state).toBe("OPEN");

      // Artificially age the nextAllowedAttempt
      const status = getCircuitStatus(TARGET_KEY);
      status.nextAllowedAttempt = Date.now() - 100;

      // Accessing status should trigger HALF_OPEN transition
      expect(getCircuitStatus(TARGET_KEY).state).toBe("HALF_OPEN");
    });
  });

  describe("Degraded Clinical State Fallbacks", () => {
    it("generates structured patient hemodynamic fallback payload", () => {
      const fallback = getDegradedClinicalFallback("api/v1/patients/IR-2026-8841", "trace-cb-1") as any;
      expect(fallback.status).toBe("degraded");
      expect(fallback.circuitBreaker).toBe("OPEN-FALLBACK");
      expect(fallback.traceId).toBe("trace-cb-1");
      expect(fallback.data?.hemodynamics?.abp).toBe("120/80");
      expect(fallback.data?.degradedMode).toBe(true);
    });

    it("generates structured DICOM studies fallback payload", () => {
      const fallback = getDegradedClinicalFallback("api/v1/studies", "trace-cb-2") as any;
      expect(fallback.status).toBe("degraded");
      expect(fallback.circuitBreaker).toBe("OPEN-FALLBACK");
      expect(fallback.studies?.length).toBeGreaterThan(0);
      expect(fallback.studies?.[0]?.modality).toBe("XA");
    });
  });

  describe("BFF Proxy Gateway Circuit Breaker Integration", () => {
    it("returns 200 with X-Circuit-Breaker: OPEN-FALLBACK when circuit is already OPEN", async () => {
      // Force target circuit into OPEN state
      const targetBase = "http://127.0.0.1:8081";
      const status = getCircuitStatus(targetBase);
      status.state = "OPEN";
      status.nextAllowedAttempt = Date.now() + 10000;

      const mockFetch = vi.fn();
      vi.stubGlobal("fetch", mockFetch);

      const request = new NextRequest("http://localhost:3000/api/proxy/api/v1/patients/IR-001", {
        method: "GET",
        headers: { "x-trace-id": "trace-circuit-open" },
      });

      const response = await GET(request as any, {
        params: Promise.resolve({ path: ["api", "v1", "patients", "IR-001"] }),
      });

      expect(response.status).toBe(200);
      expect(response.headers.get("x-circuit-breaker")).toBe("OPEN-FALLBACK");
      expect(mockFetch).not.toHaveBeenCalled(); // Fast fail without calling microservice

      const body = await response.json();
      expect(body.status).toBe("degraded");
      expect(body.data.id).toBe("IR-FALLBACK-001");
    });

    it("trips circuit to OPEN on repeated 502/network timeouts and serves degraded fallback", async () => {
      const failingFetch = vi.fn().mockRejectedValue(new Error("ETIMEDOUT 127.0.0.1:8081"));
      vi.stubGlobal("fetch", failingFetch);

      // Call 1 -> Fail
      const req1 = new NextRequest("http://localhost:3000/api/proxy/api/v1/patients/IR-001", {
        method: "GET",
        headers: { "x-trace-id": "trace-fail-1" },
      });
      const res1 = await GET(req1 as any, {
        params: Promise.resolve({ path: ["api", "v1", "patients", "IR-001"] }),
      });
      expect(res1.status).toBe(502);

      // Call 2 -> Fail
      const req2 = new NextRequest("http://localhost:3000/api/proxy/api/v1/patients/IR-001", {
        method: "GET",
        headers: { "x-trace-id": "trace-fail-2" },
      });
      const res2 = await GET(req2 as any, {
        params: Promise.resolve({ path: ["api", "v1", "patients", "IR-001"] }),
      });
      expect(res2.status).toBe(502);

      // Call 3 -> Trips into OPEN, immediate graceful fallback returned
      const req3 = new NextRequest("http://localhost:3000/api/proxy/api/v1/patients/IR-001", {
        method: "GET",
        headers: { "x-trace-id": "trace-fail-3" },
      });
      const res3 = await GET(req3 as any, {
        params: Promise.resolve({ path: ["api", "v1", "patients", "IR-001"] }),
      });
      expect(res3.status).toBe(200);
      expect(res3.headers.get("x-circuit-breaker")).toBe("OPEN-FALLBACK");
      const body3 = await res3.json();
      expect(body3.status).toBe("degraded");

      // Call 4 -> Short-circuited directly
      const req4 = new NextRequest("http://localhost:3000/api/proxy/api/v1/patients/IR-001", {
        method: "GET",
      });
      const res4 = await GET(req4 as any, {
        params: Promise.resolve({ path: ["api", "v1", "patients", "IR-001"] }),
      });
      expect(res4.status).toBe(200);
      expect(res4.headers.get("x-circuit-breaker")).toBe("OPEN-FALLBACK");
      expect(failingFetch).toHaveBeenCalledTimes(3); // 4th request did not hit fetch
    });
  });
});
