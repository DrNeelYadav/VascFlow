import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { NextRequest } from "next/server";
import {
  deriveRoleTier,
  authorizeInstitutionalCredentials,
} from "../../apps/web-app/auth";
import {
  GET,
  POST,
  PUT,
  DELETE,
  PATCH,
} from "../../apps/web-app/app/api/proxy/[...path]/route";
import {
  GET as NextAuthGET,
  POST as NextAuthPOST,
} from "../../apps/web-app/app/api/auth/[...nextauth]/route";

describe("Security Integration - NextAuth & BFF Proxy Suite", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
    process.env.AUTH_SERVICE_INTERNAL_URL = "http://127.0.0.1:8080";
    process.env.NEXTAUTH_SECRET = "super-secret-key-for-vascule-clinical-network";
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.restoreAllMocks();
  });

  describe("Clinical Role Tier Derivation", () => {
    it("correctly classifies Administrative tier roles", () => {
      expect(deriveRoleTier("ADMIN")).toBe("Administrative");
      expect(deriveRoleTier("CR01")).toBe("Administrative");
      expect(deriveRoleTier("CR02")).toBe("Administrative");
    });

    it("correctly classifies Faculty tier roles", () => {
      expect(deriveRoleTier("FACULTY")).toBe("Faculty");
      expect(deriveRoleTier("INTERVENTIONAL_RADIOLOGIST")).toBe("Faculty");
      expect(deriveRoleTier("FC01")).toBe("Faculty");
      expect(deriveRoleTier("FC02")).toBe("Faculty");
    });

    it("correctly classifies Resident tier roles", () => {
      expect(deriveRoleTier("RESIDENT")).toBe("Resident");
      expect(deriveRoleTier("DOCTOR")).toBe("Resident");
      expect(deriveRoleTier("DM01")).toBe("Resident");
      expect(deriveRoleTier("SR01")).toBe("Resident");
    });

    it("correctly classifies Nursing tier roles", () => {
      expect(deriveRoleTier("NURSE")).toBe("Nursing");
      expect(deriveRoleTier("NO01")).toBe("Nursing");
      expect(deriveRoleTier("NO02")).toBe("Nursing");
    });

    it("correctly classifies Technician tier roles", () => {
      expect(deriveRoleTier("TECH")).toBe("Technician");
      expect(deriveRoleTier("TC01")).toBe("Technician");
      expect(deriveRoleTier("RADIOLOGIST")).toBe("Technician");
    });

    it("handles undefined or fallback roles gracefully", () => {
      expect(deriveRoleTier(undefined)).toBe("Staff");
      expect(deriveRoleTier("")).toBe("Staff");
      expect(deriveRoleTier("UNKNOWN_ROLE")).toBe("Clinician");
    });
  });

  describe("NextAuth Route Handlers", () => {
    it("exports GET and POST handlers", () => {
      expect(typeof NextAuthGET).toBe("function");
      expect(typeof NextAuthPOST).toBe("function");
    });
  });

  describe("Institutional Credentials Authorization", () => {
    it("successfully authenticates with auth-service and maps clinical profile", async () => {
      const mockAuthServiceResponse = {
        token: "signed_jwt_token_dr_marcus",
        tokenType: "Bearer",
        expiresIn: 86400,
        user: {
          id: "usr_ir_002",
          institutionalEmail: "ir.specialist@vascule.hospital.org",
          fullName: "Dr. Marcus Thorne, MD, FSIR",
          roleCode: "INTERVENTIONAL_RADIOLOGIST",
          department: "Vascular & Interventional Angiography",
          institutionId: "inst_vascule_central",
          status: "ACTIVE",
          permissions: [
            "records:read",
            "records:write",
            "imaging:read",
            "imaging:write",
            "procedures:schedule",
            "procedures:execute",
          ],
        },
      };

      const fetchMock = vi.fn().mockResolvedValue(
        new Response(JSON.stringify(mockAuthServiceResponse), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        })
      );
      vi.stubGlobal("fetch", fetchMock);

      const user = await authorizeInstitutionalCredentials({
        institutionalEmail: "ir.specialist@vascule.hospital.org",
        securityPin: "830192",
        roleCode: "INTERVENTIONAL_RADIOLOGIST",
      });

      expect(fetchMock).toHaveBeenCalledTimes(1);
      const [calledUrl, calledOptions] = fetchMock.mock.calls[0];
      expect(calledUrl).toBe("http://127.0.0.1:8080/api/v1/auth/login");
      expect(calledOptions.method).toBe("POST");

      const body = JSON.parse(calledOptions.body as string);
      expect(body.institutionalEmail).toBe("ir.specialist@vascule.hospital.org");
      expect(body.securityPin).toBe("830192");
      expect(body.roleCode).toBe("INTERVENTIONAL_RADIOLOGIST");

      expect(user).not.toBeNull();
      expect(user?.id).toBe("usr_ir_002");
      expect(user?.email).toBe("ir.specialist@vascule.hospital.org");
      expect(user?.name).toBe("Dr. Marcus Thorne, MD, FSIR");
      expect(user?.roleCode).toBe("INTERVENTIONAL_RADIOLOGIST");
      expect(user?.roleTier).toBe("Faculty");
      expect(user?.department).toBe("Vascular & Interventional Angiography");
      expect(user?.institutionId).toBe("inst_vascule_central");
      expect(user?.permissions).toContain("procedures:execute");
      expect(user?.token).toBe("signed_jwt_token_dr_marcus");
    });

    it("returns null when auth-service rejects credentials with 401 Unauthorized", async () => {
      const fetchMock = vi.fn().mockResolvedValue(
        new Response(
          JSON.stringify({
            status: 401,
            error: "Unauthorized",
            message: "Invalid institutional credentials or unauthorized role requested",
          }),
          {
            status: 401,
            headers: { "Content-Type": "application/json" },
          }
        )
      );
      vi.stubGlobal("fetch", fetchMock);

      const user = await authorizeInstitutionalCredentials({
        institutionalEmail: "ir.specialist@vascule.hospital.org",
        securityPin: "wrong-pin",
        roleCode: "INTERVENTIONAL_RADIOLOGIST",
      });

      expect(user).toBeNull();
    });

    it("returns null when required credential parameters are missing", async () => {
      expect(await authorizeInstitutionalCredentials(undefined)).toBeNull();
      expect(
        await authorizeInstitutionalCredentials({
          institutionalEmail: "test@hospital.org",
        })
      ).toBeNull();
      expect(
        await authorizeInstitutionalCredentials({
          institutionalEmail: "test@hospital.org",
          securityPin: "1234",
          roleCode: "",
        })
      ).toBeNull();
    });

    it("returns null on upstream network communication failure", async () => {
      const fetchMock = vi
        .fn()
        .mockRejectedValue(new Error("Network connection refused"));
      vi.stubGlobal("fetch", fetchMock);

      const user = await authorizeInstitutionalCredentials({
        institutionalEmail: "ir.specialist@vascule.hospital.org",
        securityPin: "830192",
        roleCode: "INTERVENTIONAL_RADIOLOGIST",
      });

      expect(user).toBeNull();
    });

    it("returns null on malformed response payload", async () => {
      const fetchMock = vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ someUnexpected: "data" }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        })
      );
      vi.stubGlobal("fetch", fetchMock);

      const user = await authorizeInstitutionalCredentials({
        institutionalEmail: "ir.specialist@vascule.hospital.org",
        securityPin: "830192",
        roleCode: "INTERVENTIONAL_RADIOLOGIST",
      });

      expect(user).toBeNull();
    });
  });

  describe("BFF Proxy Gateway", () => {
    it("proxies GET request with correct URL, forwarded headers, and trace ID", async () => {
      const mockResponseBody = JSON.stringify({
        status: "healthy",
        service: "auth-service",
        version: "1.0.0",
      });

      const fetchMock = vi.fn().mockResolvedValue(
        new Response(mockResponseBody, {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "X-Trace-ID": "backend-trace-12345",
          },
        })
      );
      vi.stubGlobal("fetch", fetchMock);

      const request = new NextRequest("http://localhost:3000/api/proxy/health?verbose=true", {
        method: "GET",
        headers: {
          "x-trace-id": "client-trace-777",
          "x-forwarded-for": "192.168.1.50",
          "user-agent": "Mozilla/5.0 MedicalBrowser",
          "cookie": "session_cookie=sensitive_client_cookie",
          "connection": "keep-alive",
        },
      });

      const response = await GET(request as any, {
        params: Promise.resolve({ path: ["health"] }),
      });

      expect(fetchMock).toHaveBeenCalledTimes(1);
      const [calledUrl, calledOptions] = fetchMock.mock.calls[0];

      expect(calledUrl).toBe("http://127.0.0.1:8080/health?verbose=true");
      expect(calledOptions.method).toBe("GET");

      const sentHeaders = calledOptions.headers as Headers;
      expect(sentHeaders.get("x-trace-id")).toBe("client-trace-777");
      expect(sentHeaders.get("x-forwarded-for")).toBe("192.168.1.50");
      // Hop-by-hop headers and sensitive raw cookies must be stripped
      expect(sentHeaders.get("cookie")).toBeNull();
      expect(sentHeaders.get("connection")).toBeNull();

      expect(response.status).toBe(200);
      expect(response.headers.get("x-trace-id")).toBe("backend-trace-12345");
      const json = await response.json();
      expect(json.status).toBe("healthy");
    });

    it("attaches Bearer token from secure HTTP-only cookies if Authorization header is absent", async () => {
      const fetchMock = vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ authenticated: true }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        })
      );
      vi.stubGlobal("fetch", fetchMock);

      const request = new NextRequest("http://localhost:3000/api/proxy/api/v1/auth/verify", {
        method: "GET",
        headers: {
          cookie: "vascule_token=signed_jwt_clinical_token_xyz; other_cookie=val",
        },
      });

      await GET(request as any, {
        params: Promise.resolve({ path: ["api", "v1", "auth", "verify"] }),
      });

      expect(fetchMock).toHaveBeenCalledTimes(1);
      const [, calledOptions] = fetchMock.mock.calls[0];
      const sentHeaders = calledOptions.headers as Headers;

      expect(sentHeaders.get("authorization")).toBe(
        "Bearer signed_jwt_clinical_token_xyz"
      );
    });

    it("preserves incoming Authorization Bearer header if already set", async () => {
      const fetchMock = vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        })
      );
      vi.stubGlobal("fetch", fetchMock);

      const request = new NextRequest("http://localhost:3000/api/proxy/api/v1/clinical/slots", {
        method: "GET",
        headers: {
          authorization: "Bearer direct_bearer_token_abc",
          cookie: "vascule_token=other_token",
        },
      });

      await GET(request as any, {
        params: Promise.resolve({ path: ["api", "v1", "clinical", "slots"] }),
      });

      const [, calledOptions] = fetchMock.mock.calls[0];
      const sentHeaders = calledOptions.headers as Headers;
      expect(sentHeaders.get("authorization")).toBe(
        "Bearer direct_bearer_token_abc"
      );
    });

    it("proxies POST request with JSON body and duplex half streaming", async () => {
      const payload = {
        institutionalEmail: "ir.specialist@vascule.hospital.org",
        securityPin: "830192",
        roleCode: "INTERVENTIONAL_RADIOLOGIST",
      };

      const fetchMock = vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ token: "jwt_token_123" }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        })
      );
      vi.stubGlobal("fetch", fetchMock);

      const request = new NextRequest("http://localhost:3000/api/proxy/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const response = await POST(request as any, {
        params: Promise.resolve({ path: ["api", "v1", "auth", "login"] }),
      });

      expect(fetchMock).toHaveBeenCalledTimes(1);
      const [calledUrl, calledOptions] = fetchMock.mock.calls[0];
      expect(calledUrl).toBe("http://127.0.0.1:8080/api/v1/auth/login");
      expect(calledOptions.method).toBe("POST");
      expect(calledOptions.duplex).toBe("half");

      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data.token).toBe("jwt_token_123");
    });

    it("proxies PUT, DELETE, and PATCH requests correctly", async () => {
      const fetchMock = vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ success: true }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        })
      );
      vi.stubGlobal("fetch", fetchMock);

      // PUT
      const putReq = new NextRequest("http://localhost:3000/api/proxy/api/v1/slots/123", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "Scheduled" }),
      });
      const putRes = await PUT(putReq as any, {
        params: Promise.resolve({ path: ["api", "v1", "slots", "123"] }),
      });
      expect(putRes.status).toBe(200);

      // DELETE
      const deleteReq = new NextRequest("http://localhost:3000/api/proxy/api/v1/slots/123", {
        method: "DELETE",
      });
      const deleteRes = await DELETE(deleteReq as any, {
        params: Promise.resolve({ path: ["api", "v1", "slots", "123"] }),
      });
      expect(deleteRes.status).toBe(200);

      // PATCH
      const patchReq = new NextRequest("http://localhost:3000/api/proxy/api/v1/slots/123", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ note: "Emergency override" }),
      });
      const patchRes = await PATCH(patchReq as any, {
        params: Promise.resolve({ path: ["api", "v1", "slots", "123"] }),
      });
      expect(patchRes.status).toBe(200);
    });

    it("returns 502 Bad Gateway with X-Trace-ID when upstream service fails", async () => {
      const fetchMock = vi
        .fn()
        .mockRejectedValue(new Error("ECONNREFUSED 127.0.0.1:8080"));
      vi.stubGlobal("fetch", fetchMock);

      const request = new NextRequest("http://localhost:3000/api/proxy/health", {
        method: "GET",
        headers: {
          "x-trace-id": "failing-trace-999",
        },
      });

      const response = await GET(request as any, {
        params: Promise.resolve({ path: ["health"] }),
      });

      expect(response.status).toBe(502);
      expect(response.headers.get("x-trace-id")).toBe("failing-trace-999");
      const errorJson = await response.json();
      expect(errorJson.error).toBe("Bad Gateway");
      expect(errorJson.message).toBe("Internal clinical microservice unreachable");
      expect(errorJson.traceId).toBe("failing-trace-999");
    });
  });
});
