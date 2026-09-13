import { describe, it, expect } from "vitest";
import {
  DEFAULT_TENANT_ID,
  AIIMS_JODHPUR_TENANT_ID,
  sanitizeTenantId,
  validateTenantAccess,
  assertTenantAccess,
  withTenantFilter,
} from "../../packages/db/tenantContext";

describe("Phase 14: Multi-Tenant Enterprise Federation & Routing Suite", () => {
  describe("Tenant Sanitization & Injection Defense", () => {
    it("sanitizes valid institutional tenant strings", () => {
      expect(sanitizeTenantId("tenant_sms_jaipur")).toBe("tenant_sms_jaipur");
      expect(sanitizeTenantId("tenant_aiims_jodhpur")).toBe("tenant_aiims_jodhpur");
      expect(sanitizeTenantId(" trauma_center_01 ")).toBe("trauma_center_01");
    });

    it("falls back to default tenant on malformed or malicious inputs", () => {
      expect(sanitizeTenantId(null)).toBe(DEFAULT_TENANT_ID);
      expect(sanitizeTenantId("")).toBe(DEFAULT_TENANT_ID);
      expect(sanitizeTenantId("'; DROP TABLE \"Patient\"; --")).toBe(DEFAULT_TENANT_ID);
      expect(sanitizeTenantId("tenant/../../etc/passwd")).toBe(DEFAULT_TENANT_ID);
    });
  });

  describe("Cross-Tenant Access Enforcement", () => {
    it("permits access when caller and target tenant match", () => {
      expect(validateTenantAccess("tenant_sms_jaipur", "tenant_sms_jaipur")).toBe(true);
      expect(validateTenantAccess("tenant_aiims_jodhpur", "tenant_aiims_jodhpur")).toBe(true);
    });

    it("strictly blocks cross-tenant access for standard clinical tier", () => {
      expect(validateTenantAccess("tenant_sms_jaipur", "tenant_aiims_jodhpur")).toBe(false);
      expect(validateTenantAccess("tenant_aiims_jodhpur", "tenant_sms_jaipur")).toBe(false);
    });

    it("allows cross-tenant access only when isSystemAdmin is true", () => {
      expect(validateTenantAccess("tenant_sms_jaipur", "tenant_aiims_jodhpur", true)).toBe(true);
    });

    it("assertTenantAccess throws on cross-tenant violation", () => {
      expect(() =>
        assertTenantAccess("tenant_sms_jaipur", "tenant_aiims_jodhpur", false)
      ).toThrow(/Cross-tenant data isolation violation/);

      expect(() =>
        assertTenantAccess("tenant_sms_jaipur", "tenant_sms_jaipur", false)
      ).not.toThrow();
    });
  });

  describe("Prisma Query Tenant Scoping", () => {
    it("decorates query filters with sanitized tenantId", () => {
      const input = { ipdNo: "IPD-9001", status: "ADMITTED" };
      const scoped = withTenantFilter("tenant_aiims_jodhpur", input);

      expect(scoped).toEqual({
        ipdNo: "IPD-9001",
        status: "ADMITTED",
        tenantId: "tenant_aiims_jodhpur",
      });
    });

    it("uses default tenant when input tenant is omitted", () => {
      const scoped = withTenantFilter(undefined, { crNo: "CR-1234" });
      expect(scoped.tenantId).toBe(DEFAULT_TENANT_ID);
    });
  });
});
