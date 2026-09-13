import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { NextRequest } from "next/server";
import {
  deriveRoleTier,
  getSessionClaims,
  middleware,
} from "../../apps/web-app/middleware";

describe("Edge Route Guarding & RBAC Middleware Suite", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
    process.env.NEXTAUTH_SECRET = "vascule-nextauth-super-secret-key-2026";
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.restoreAllMocks();
  });

  describe("Clinical Role Tier Classification", () => {
    it("classifies administrative leadership codes correctly", () => {
      expect(deriveRoleTier("ADMIN")).toBe("Administrative");
      expect(deriveRoleTier("admin")).toBe("Administrative");
      expect(deriveRoleTier("CR01")).toBe("Administrative");
      expect(deriveRoleTier("CR99")).toBe("Administrative");
    });

    it("classifies faculty interventionalists correctly", () => {
      expect(deriveRoleTier("FACULTY")).toBe("Faculty");
      expect(deriveRoleTier("INTERVENTIONAL_RADIOLOGIST")).toBe("Faculty");
      expect(deriveRoleTier("FC01")).toBe("Faculty");
      expect(deriveRoleTier("LEAD_FACULTY")).toBe("Faculty");
    });

    it("classifies residents and fellows correctly", () => {
      expect(deriveRoleTier("RESIDENT")).toBe("Resident");
      expect(deriveRoleTier("DOCTOR")).toBe("Resident");
      expect(deriveRoleTier("DM01")).toBe("Resident");
      expect(deriveRoleTier("SR01")).toBe("Resident");
    });

    it("classifies nursing staff correctly", () => {
      expect(deriveRoleTier("NURSE")).toBe("Nursing");
      expect(deriveRoleTier("NO01")).toBe("Nursing");
      expect(deriveRoleTier("SCRUB_NURSE")).toBe("Nursing");
    });

    it("classifies radiologic technologists correctly", () => {
      expect(deriveRoleTier("TECH")).toBe("Technician");
      expect(deriveRoleTier("TC01")).toBe("Technician");
      expect(deriveRoleTier("RADIOLOGIST")).toBe("Technician");
    });

    it("handles fallback and missing inputs gracefully", () => {
      expect(deriveRoleTier("CONSULTANT")).toBe("Clinician");
      expect(deriveRoleTier("")).toBe("Staff");
      expect(deriveRoleTier(undefined)).toBe("Staff");
    });
  });

  describe("Session Claims Extraction at Edge", () => {
    it("extracts claims from encoded JWT cookie", async () => {
      const payload = {
        id: "usr_fac_01",
        email: "dr.roy@hospital.lan",
        roleCode: "FACULTY",
        roleTier: "Faculty",
      };
      const token = `header.${btoa(JSON.stringify(payload))}.signature`;

      const request = new NextRequest("http://localhost:3000/dashboard", {
        headers: {
          cookie: `authjs.session-token=${token}`,
        },
      });

      const claims = await getSessionClaims(request);
      expect(claims.isAuthenticated).toBe(true);
      expect(claims.email).toBe("dr.roy@hospital.lan");
      expect(claims.roleCode).toBe("FACULTY");
      expect(claims.roleTier).toBe("Faculty");
    });

    it("handles token with role fallback deduction", async () => {
      const request = new NextRequest("http://localhost:3000/dashboard", {
        headers: {
          cookie: "vascule_token=SESSION_TOKEN_FOR_ADMIN_USER",
        },
      });

      const claims = await getSessionClaims(request);
      expect(claims.isAuthenticated).toBe(true);
      expect(claims.roleCode).toBe("ADMIN");
      expect(claims.roleTier).toBe("Administrative");
    });

    it("returns unauthenticated state when no cookies are provided", async () => {
      const request = new NextRequest("http://localhost:3000/dashboard");
      const claims = await getSessionClaims(request);

      expect(claims.isAuthenticated).toBe(false);
      expect(claims.userId).toBe("");
      expect(claims.roleCode).toBe("");
    });
  });

  describe("Middleware Route Interception & Access Control", () => {
    it("bypasses public routes without authentication", async () => {
      const publicPaths = [
        "http://localhost:3000/login",
        "http://localhost:3000/unauthorized",
        "http://localhost:3000/_next/static/chunk.js",
        "http://localhost:3000/api/auth/providers",
        "http://localhost:3000/api/proxy/api/v1/auth/health",
        "http://localhost:3000/favicon.ico",
      ];

      for (const url of publicPaths) {
        const req = new NextRequest(url);
        const res = await middleware(req);
        // NextResponse.next() returns response with null redirect
        expect(res.headers.get("location")).toBeNull();
      }
    });

    it("redirects unauthenticated requests on /dashboard to /login with callbackUrl", async () => {
      const req = new NextRequest("http://localhost:3000/dashboard/suite-1");
      const res = await middleware(req);

      expect(res.status).toBe(307);
      const location = res.headers.get("location");
      expect(location).toContain("/login");
      expect(location).toContain("callbackUrl=%2Fdashboard%2Fsuite-1");
    });

    it("redirects unauthenticated requests on /admin to /login with callbackUrl", async () => {
      const req = new NextRequest("http://localhost:3000/admin/cluster");
      const res = await middleware(req);

      expect(res.status).toBe(307);
      const location = res.headers.get("location");
      expect(location).toContain("/login");
      expect(location).toContain("callbackUrl=%2Fadmin%2Fcluster");
    });

    it("allows Resident access to /dashboard", async () => {
      const payload = {
        id: "usr_res_01",
        email: "fellow@hospital.lan",
        roleCode: "RESIDENT",
        roleTier: "Resident",
      };
      const token = `h.${btoa(JSON.stringify(payload))}.s`;

      const req = new NextRequest("http://localhost:3000/dashboard", {
        headers: { cookie: `authjs.session-token=${token}` },
      });

      const res = await middleware(req);
      expect(res.headers.get("location")).toBeNull();
    });

    it("blocks Resident access to /admin and redirects to /unauthorized", async () => {
      const payload = {
        id: "usr_res_01",
        email: "fellow@hospital.lan",
        roleCode: "RESIDENT",
        roleTier: "Resident",
      };
      const token = `h.${btoa(JSON.stringify(payload))}.s`;

      const req = new NextRequest("http://localhost:3000/admin/users", {
        headers: { cookie: `authjs.session-token=${token}` },
      });

      const res = await middleware(req);
      expect(res.status).toBe(307);
      const location = res.headers.get("location");
      expect(location).toContain("/unauthorized");
      expect(location).toContain("required=Administrative%2CFaculty");
      expect(location).toContain("current=Resident");
    });

    it("permits Faculty access to both /dashboard and /admin", async () => {
      const payload = {
        id: "usr_fac_01",
        email: "dr.roy@hospital.lan",
        roleCode: "FACULTY",
        roleTier: "Faculty",
      };
      const token = `h.${btoa(JSON.stringify(payload))}.s`;

      // 1. Check /dashboard
      const dashReq = new NextRequest("http://localhost:3000/dashboard", {
        headers: { cookie: `authjs.session-token=${token}` },
      });
      const dashRes = await middleware(dashReq);
      expect(dashRes.headers.get("location")).toBeNull();

      // 2. Check /admin
      const adminReq = new NextRequest("http://localhost:3000/admin", {
        headers: { cookie: `authjs.session-token=${token}` },
      });
      const adminRes = await middleware(adminReq);
      expect(adminRes.headers.get("location")).toBeNull();
    });

    it("permits Admin access to /admin", async () => {
      const payload = {
        id: "usr_admin_01",
        email: "admin@hospital.lan",
        roleCode: "ADMIN",
        roleTier: "Administrative",
      };
      const token = `h.${btoa(JSON.stringify(payload))}.s`;

      const adminReq = new NextRequest("http://localhost:3000/admin/topology", {
        headers: { cookie: `authjs.session-token=${token}` },
      });
      const adminRes = await middleware(adminReq);
      expect(adminRes.headers.get("location")).toBeNull();
    });
  });
});
