import { describe, it, expect, beforeEach } from "vitest";
import { NextRequest, NextResponse } from "next/server";
import {
  applySecurityHeaders,
  deriveRoleTier,
  middleware,
  checkRateLimit,
  resetRateLimitStore,
  RATE_LIMIT_RULES,
} from "../../middleware";

describe("Middleware Security Headers & RBAC Tier Derivation", () => {
  it("applies mandatory HTTP security headers to NextResponse", () => {
    const res = NextResponse.next();
    const secured = applySecurityHeaders(res);

    expect(secured.headers.get("X-Content-Type-Options")).toBe("nosniff");
    expect(secured.headers.get("X-Frame-Options")).toBe("DENY");
    expect(secured.headers.get("Referrer-Policy")).toBe("strict-origin-when-cross-origin");
    expect(secured.headers.get("Strict-Transport-Security")).toContain("max-age=31536000");
    expect(secured.headers.get("X-XSS-Protection")).toBe("1; mode=block");
    expect(secured.headers.get("Permissions-Policy")).toContain("camera=()");
  });

  it("derives role tiers accurately for clinical personnel", () => {
    expect(deriveRoleTier("ADMIN")).toBe("Administrative");
    expect(deriveRoleTier("CR-ADMIN-01")).toBe("Administrative");
    expect(deriveRoleTier("FACULTY")).toBe("Faculty");
    expect(deriveRoleTier("FC-IR-01")).toBe("Faculty");
    expect(deriveRoleTier("INTERVENTIONAL_RADIOLOGIST")).toBe("Faculty");
    expect(deriveRoleTier("RESIDENT")).toBe("Resident");
    expect(deriveRoleTier("DM-RESIDENT-01")).toBe("Resident");
    expect(deriveRoleTier("SR-RESIDENT-01")).toBe("Resident");
    expect(deriveRoleTier("NURSE")).toBe("Nursing");
    expect(deriveRoleTier("NO-NURSE-01")).toBe("Nursing");
    expect(deriveRoleTier("TECH")).toBe("Technician");
    expect(deriveRoleTier("TC-TECH-01")).toBe("Technician");
    expect(deriveRoleTier("UNKNOWN")).toBe("Clinician");
    expect(deriveRoleTier(undefined)).toBe("Staff");
  });
});

describe("Edge Rate-Limiting & Gateway Perimeter Defense (RFC 7807)", () => {
  beforeEach(() => {
    resetRateLimitStore();
  });

  it("throttles /api/auth/* after 5 requests per 60s per IP and returns RFC 7807 429", async () => {
    const authRule = RATE_LIMIT_RULES.find((r) => r.prefix === "/api/auth")!;
    expect(authRule.limit).toBe(5);

    const makeAuthReq = () =>
      new NextRequest("http://localhost:3000/api/auth/signin", {
        headers: { "x-forwarded-for": "192.168.1.100" },
      });

    // First 5 requests must pass
    for (let i = 0; i < 5; i++) {
      const res = await middleware(makeAuthReq());
      expect(res.status).toBe(200);
      expect(res.headers.get("X-RateLimit-Limit")).toBe("5");
      expect(res.headers.get("X-RateLimit-Remaining")).toBe(String(5 - (i + 1)));
    }

    // 6th request must be throttled with HTTP 429 & RFC 7807 problem details
    const throttledRes = await middleware(makeAuthReq());
    expect(throttledRes.status).toBe(429);
    expect(throttledRes.headers.get("Content-Type")).toBe("application/problem+json");
    expect(throttledRes.headers.get("Retry-After")).toBeDefined();
    expect(Number(throttledRes.headers.get("Retry-After"))).toBeGreaterThanOrEqual(1);
    expect(throttledRes.headers.get("X-RateLimit-Remaining")).toBe("0");

    const json = await throttledRes.json();
    expect(json.status).toBe(429);
    expect(json.type).toContain("rate-limit-exceeded");
    expect(json.title).toBe("Too Many Requests");
    expect(json.instance).toBe("/api/auth/signin");
  });

  it("enforces 60 req/min for /api/abdm/* keyed by x-gateway-client-id", async () => {
    const abdmRule = RATE_LIMIT_RULES.find((r) => r.prefix === "/api/abdm")!;
    expect(abdmRule.limit).toBe(60);

    const makeAbdmReq = () =>
      new NextRequest("http://localhost:3000/api/abdm/v3/consent/verify", {
        headers: { "x-gateway-client-id": "ABDM_GATEWAY_RAJSMS_01" },
      });

    for (let i = 0; i < 60; i++) {
      const res = await middleware(makeAbdmReq());
      expect(res.status).toBe(200);
    }

    const throttledRes = await middleware(makeAbdmReq());
    expect(throttledRes.status).toBe(429);
    expect(throttledRes.headers.get("Content-Type")).toBe("application/problem+json");
    const json = await throttledRes.json();
    expect(json.status).toBe(429);
  });

  it("enforces 120 req/min for /api/inventory/use keyed by x-workstation-id", async () => {
    const invRule = RATE_LIMIT_RULES.find((r) => r.prefix === "/api/inventory/use")!;
    expect(invRule.limit).toBe(120);

    const makeInvReq = () =>
      new NextRequest("http://localhost:3000/api/inventory/use", {
        headers: { "x-workstation-id": "WORKSTATION-ANGIO-SUITE-1" },
      });

    for (let i = 0; i < 120; i++) {
      const res = await middleware(makeInvReq());
      expect(res.status).toBe(200);
    }

    const throttledRes = await middleware(makeInvReq());
    expect(throttledRes.status).toBe(429);
    expect(throttledRes.headers.get("Content-Type")).toBe("application/problem+json");
    expect(throttledRes.headers.get("Retry-After")).toBeDefined();
  });
});

describe("CORS & Origin Pinning Perimeter Defense", () => {
  it("allows preflight OPTIONS for trusted hospital workstation domain and sets CORS headers", async () => {
    const optionsReq = new NextRequest("http://localhost:3000/api/cases/DSA-2026-001/status", {
      method: "OPTIONS",
      headers: {
        origin: "https://vascule.sms.rajasthan.gov.in",
      },
    });

    const res = await middleware(optionsReq);
    expect(res.status).toBe(204);
    expect(res.headers.get("Access-Control-Allow-Origin")).toBe("https://vascule.sms.rajasthan.gov.in");
    expect(res.headers.get("Access-Control-Allow-Credentials")).toBe("true");
    expect(res.headers.get("Access-Control-Allow-Methods")).toContain("POST");
  });

  it("blocks preflight OPTIONS from untrusted cross-origin domain with HTTP 403", async () => {
    const maliciousReq = new NextRequest("http://localhost:3000/api/inventory/use", {
      method: "OPTIONS",
      headers: {
        origin: "https://untrusted-external-site.com",
      },
    });

    const res = await middleware(maliciousReq);
    expect(res.status).toBe(403);
    expect(res.headers.get("Access-Control-Allow-Origin")).toBeNull();
  });

  it("rejects unauthorized cross-origin API invocation with RFC 7807 problem details", async () => {
    const untrustedReq = new NextRequest("http://localhost:3000/api/inventory/use", {
      method: "POST",
      headers: {
        origin: "https://unauthorized-attacker.org",
        "Content-Type": "application/json",
      },
    });

    const res = await middleware(untrustedReq);
    expect(res.status).toBe(403);
    expect(res.headers.get("Content-Type")).toBe("application/problem+json");

    const json = await res.json();
    expect(json.status).toBe(403);
    expect(json.type).toContain("cors-forbidden");
  });

  it("permits trusted tablet subnets (10.200.x.x) and attaches CORS headers", async () => {
    const tabletReq = new NextRequest("http://localhost:3000/api/healthz", {
      method: "GET",
      headers: {
        origin: "http://10.200.15.42:3000",
      },
    });

    const res = await middleware(tabletReq);
    expect(res.status).toBe(200);
    expect(res.headers.get("Access-Control-Allow-Origin")).toBe("http://10.200.15.42:3000");
  });
});

describe("ABDM Gateway Mutual TLS (mTLS) Verification", () => {
  it("permits incoming webhook with valid NHA client certificate", async () => {
    const validMtlsReq = new NextRequest("http://localhost:3000/api/abdm/v3/consent/verify", {
      method: "POST",
      headers: {
        "x-ssl-client-verify": "SUCCESS",
        "x-ssl-client-dn": "CN=gateway.abdm.gov.in,O=National Health Authority,C=IN",
      },
    });

    const res = await middleware(validMtlsReq);
    expect(res.status).toBe(200);
  });

  it("rejects incoming webhook when mTLS client certificate verification fails", async () => {
    const failedMtlsReq = new NextRequest("http://localhost:3000/api/abdm/v3/consent/verify", {
      method: "POST",
      headers: {
        "x-ssl-client-verify": "FAILED:certificate revoked",
      },
    });

    const res = await middleware(failedMtlsReq);
    expect(res.status).toBe(401);
    expect(res.headers.get("Content-Type")).toBe("application/problem+json");

    const json = await res.json();
    expect(json.status).toBe(401);
    expect(json.type).toContain("mtls-unauthorized");
  });

  it("rejects client certificate with untrusted DN", async () => {
    const rogueCertReq = new NextRequest("http://localhost:3000/api/abdm/v3/consent/verify", {
      method: "POST",
      headers: {
        "x-ssl-client-verify": "SUCCESS",
        "x-ssl-client-dn": "CN=attacker.fake-gateway.org,O=Unknown Corp,C=US",
      },
    });

    const res = await middleware(rogueCertReq);
    expect(res.status).toBe(401);
    const json = await res.json();
    expect(json.detail).toContain("Untrusted client certificate DN");
  });
});
