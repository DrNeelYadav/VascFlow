import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { NextRequest } from "next/server";
import { GET as healthzGET } from "../../app/api/healthz/route";
import { GET as pacsWadoGET } from "../../app/api/pacs/wado/route";
import { GET as censusGET, OPTIONS as censusOPTIONS } from "../../app/api/census/public/route";
import { prisma, checkReplicationLag } from "@vascule/db";

// Mock @vascule/db
vi.mock("@vascule/db", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@vascule/db")>();
  return {
    ...actual,
    prisma: {
      ...actual.prisma,
      $queryRaw: vi.fn(),
    },
    checkReplicationLag: vi.fn(),
    logAuditTrail: vi.fn().mockResolvedValue({ id: "mock-audit-id" }),
  };
});

// Mock NextAuth
vi.mock("@/auth", () => ({
  auth: vi.fn().mockResolvedValue({
    user: { email: "dr.neel@sms.hospital.lan", id: "staff-001" },
  }),
}));

describe("Truthful and Hardened API Endpoints", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.restoreAllMocks();
  });

  describe("1. /api/healthz", () => {
    it("reports cache UNCONFIGURED and workerBridge NOT_CONFIGURED when REDIS_URL is unset", async () => {
      delete process.env.REDIS_URL;
      vi.mocked(prisma.$queryRaw).mockResolvedValueOnce([{ health_check: 1 }]);
      vi.mocked(checkReplicationLag).mockResolvedValueOnce({
        isConfigured: false,
        status: "STANDALONE",
        lagMs: 0,
        thresholdMs: 10,
        slaBreached: false,
        checkedAt: new Date().toISOString(),
      });

      const req = new NextRequest("http://localhost:3000/api/healthz");
      const res = await healthzGET(req);

      expect(res.status).toBe(200);
      const json = await res.json();

      expect(json.status).toBe("HEALTHY");
      expect(json.checks.database.status).toBe("UP");
      expect(json.checks.cache.status).toBe("UNCONFIGURED");
      expect(json.checks.cache.latencyMs).toBe(0);
      expect(json.checks.workerBridge.status).toBe("NOT_CONFIGURED");
      expect(json.checks.workerBridge.latencyMs).toBe(0);
    });

    it("honestly reports database DOWN and returns 503 UNHEALTHY when database ping fails", async () => {
      delete process.env.REDIS_URL;
      vi.mocked(prisma.$queryRaw).mockRejectedValueOnce(
        new Error("Connection refused at localhost:5432")
      );
      vi.mocked(checkReplicationLag).mockResolvedValueOnce({
        isConfigured: false,
        status: "STANDALONE",
        lagMs: 0,
        thresholdMs: 10,
        slaBreached: false,
        checkedAt: new Date().toISOString(),
      });

      const req = new NextRequest("http://localhost:3000/api/healthz");
      const res = await healthzGET(req);

      expect(res.status).toBe(503);
      const json = await res.json();

      expect(json.status).toBe("UNHEALTHY");
      expect(json.checks.database.status).toBe("DOWN");
      expect(json.checks.database.error).toContain("Connection refused");
      expect(json.checks.cache.status).toBe("UNCONFIGURED");
      expect(json.checks.workerBridge.status).toBe("NOT_CONFIGURED");
    });
  });

  describe("2. /api/pacs/wado", () => {
    it("returns HTTP 503 with truthful error when upstream PACS endpoint is not configured", async () => {
      delete process.env.ORTHANC_URL;
      delete process.env.DICOMWEB_URL;
      delete process.env.PACS_DICOMWEB_URL;
      delete process.env.PACS_WADO_BASE_URL;

      const req = new NextRequest("http://localhost:3000/api/pacs/wado?studyUID=1.2.840.10008.5.1.4.1.1.12.1.202601");
      const res = await pacsWadoGET(req);

      expect(res.status).toBe(503);
      const json = await res.json();

      expect(json.error).toBe("Service Unavailable");
      expect(json.message).toBe("Upstream PACS DICOMweb endpoint is not configured.");
      // Ensure fake synthetic studies dictionary is completely eliminated
      expect(json).not.toHaveProperty("patientName");
      expect(json).not.toHaveProperty("radiationDoseReport");
    });

    it("truthfully proxies to upstream PACS when configured", async () => {
      process.env.ORTHANC_URL = "http://orthanc.hospital.lan:8042";

      const mockDicomResponse = [{ "00100020": { vr: "LO", Value: ["CR-999"] } }];
      const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
        new Response(JSON.stringify(mockDicomResponse), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        })
      );

      const req = new NextRequest(
        "http://localhost:3000/api/pacs/wado?requestType=qido&patientId=CR-999"
      );
      const res = await pacsWadoGET(req);

      expect(res.status).toBe(200);
      expect(fetchSpy).toHaveBeenCalledWith(
        "http://orthanc.hospital.lan:8042/dicom-web/studies?PatientID=CR-999",
        expect.objectContaining({
          headers: expect.objectContaining({ Accept: "application/json" }),
        })
      );

      const data = await res.json();
      expect(data).toEqual(mockDicomResponse);
    });
  });

  describe("3. /api/census/public", () => {
    it("removes unsubstantiated HIPAA Safe Harbor claims and documents aggregated metrics", async () => {
      const req = new NextRequest("http://localhost:3000/api/census/public");
      const res = await censusGET(req);

      expect(res.status).toBe(200);
      const json = await res.json();

      // Verify removal of HIPAA Safe Harbor claim
      const fullResponseString = JSON.stringify(json);
      expect(fullResponseString).not.toContain("HIPAA Safe Harbor");
      expect(json.standardsCompliance).not.toContain(
        "HIPAA Safe Harbor De-Identification (45 CFR § 164.514(b)(2))"
      );

      // Verify documentation of aggregated departmental metrics
      expect(json.metricType).toBe("Aggregated Departmental Metrics");
      expect(json.documentation).toContain("Aggregated departmental procedural volumes");
      expect(json.annualSummary.totalInterventions).toBeGreaterThan(0);
    });

    it("restricts Access-Control-Allow-Origin from wildcard '*' to same-origin or configured origins", async () => {
      // 1. Untrusted cross-origin request
      const untrustedReq = new NextRequest("http://localhost:3000/api/census/public", {
        headers: { origin: "https://malicious-tracker.org" },
      });
      const untrustedRes = await censusGET(untrustedReq);
      expect(untrustedRes.headers.get("Access-Control-Allow-Origin")).toBeNull();
      expect(untrustedRes.headers.get("Access-Control-Allow-Origin")).not.toBe("*");

      // 2. Trusted institutional origin
      const trustedReq = new NextRequest("http://localhost:3000/api/census/public", {
        headers: { origin: "https://vascule.sms.rajasthan.gov.in" },
      });
      const trustedRes = await censusGET(trustedReq);
      expect(trustedRes.headers.get("Access-Control-Allow-Origin")).toBe(
        "https://vascule.sms.rajasthan.gov.in"
      );
      expect(trustedRes.headers.get("Vary")).toBe("Origin");

      // 3. Configured allowed origin via ALLOWED_ORIGINS env
      process.env.ALLOWED_ORIGINS = "https://partner-research.edu,https://cirse.org";
      const configuredReq = new NextRequest("http://localhost:3000/api/census/public", {
        headers: { origin: "https://partner-research.edu" },
      });
      const configuredRes = await censusGET(configuredReq);
      expect(configuredRes.headers.get("Access-Control-Allow-Origin")).toBe(
        "https://partner-research.edu"
      );

      // 4. Preflight OPTIONS
      const optionsRes = await censusOPTIONS(configuredReq);
      expect(optionsRes.status).toBe(204);
      expect(optionsRes.headers.get("Access-Control-Allow-Origin")).toBe(
        "https://partner-research.edu"
      );
    });
  });
});
