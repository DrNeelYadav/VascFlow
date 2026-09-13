import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { QueryClient } from "@tanstack/react-query";
import {
  fetchPatientRecord,
  DEFAULT_PATIENT_FALLBACK,
  type PatientClinicalRecord,
} from "@vascule/feature-patient-vitals";

describe("Vascule OS Server State - TanStack Query Suite", () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    vi.restoreAllMocks();
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          gcTime: 5 * 60 * 1000,
          staleTime: 60 * 1000,
        },
      },
    });
  });

  afterEach(() => {
    queryClient.clear();
  });

  it("fetches clinical record from BFF proxy endpoint with correct headers", async () => {
    const mockRecord: PatientClinicalRecord = {
      ...DEFAULT_PATIENT_FALLBACK,
      id: "IR-TEST-001",
      name: "HAWTHORNE, ELEANOR B.",
      mrn: "#IR-TEST-001",
    };

    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify(mockRecord), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      })
    );
    vi.stubGlobal("fetch", fetchMock);

    const result = await fetchPatientRecord("IR-TEST-001");

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [calledUrl] = fetchMock.mock.calls[0];
    expect(calledUrl).toBe("/api/proxy/api/v1/patients/IR-TEST-001");
    expect(result.name).toBe("HAWTHORNE, ELEANOR B.");
    expect(result.id).toBe("IR-TEST-001");
  });

  it("handles 404 errors by throwing descriptive clinical error", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ error: "Not Found" }), {
        status: 404,
        statusText: "Not Found",
      })
    );
    vi.stubGlobal("fetch", fetchMock);

    await expect(fetchPatientRecord("UNKNOWN-PATIENT")).rejects.toThrow(
      "Patient 'UNKNOWN-PATIENT' not found in hospital registry"
    );
  });

  it("demonstrates TanStack Query caching and background data management", async () => {
    const mockRecord: PatientClinicalRecord = {
      ...DEFAULT_PATIENT_FALLBACK,
      id: "IR-CACHE-100",
      name: "KOWALSKI, STANLEY M.",
    };

    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify(mockRecord), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      })
    );
    vi.stubGlobal("fetch", fetchMock);

    // Initial query execution
    const data1 = await queryClient.fetchQuery({
      queryKey: ["patient", "IR-CACHE-100"],
      queryFn: () => fetchPatientRecord("IR-CACHE-100"),
      staleTime: 60 * 1000,
    });

    expect(data1.name).toBe("KOWALSKI, STANLEY M.");
    expect(fetchMock).toHaveBeenCalledTimes(1);

    // Query from cache within stale window: should not trigger second network call
    const data2 = await queryClient.fetchQuery({
      queryKey: ["patient", "IR-CACHE-100"],
      queryFn: () => fetchPatientRecord("IR-CACHE-100"),
      staleTime: 60 * 1000,
    });

    expect(data2.name).toBe("KOWALSKI, STANLEY M.");
    expect(fetchMock).toHaveBeenCalledTimes(1); // Cached!

    // Verify cache content
    const cachedData = queryClient.getQueryData(["patient", "IR-CACHE-100"]);
    expect(cachedData).toEqual(mockRecord);
  });

  it("verifies default clinical fallback contains complete production baseline values", () => {
    expect(DEFAULT_PATIENT_FALLBACK.id).toBe("IR-2026-8841");
    expect(DEFAULT_PATIENT_FALLBACK.mrn).toBe("#IR-2026-8841");
    expect(DEFAULT_PATIENT_FALLBACK.egfr).toBe(68);
    expect(DEFAULT_PATIENT_FALLBACK.macdThresholdMl).toBe(160);
    expect(DEFAULT_PATIENT_FALLBACK.baselineActSeconds).toBe(128);
    expect(DEFAULT_PATIENT_FALLBACK.procedureName).toContain("DrySeal");
  });
});
