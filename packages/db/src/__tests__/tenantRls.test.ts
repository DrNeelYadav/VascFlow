import { describe, it, expect, vi } from "vitest";
import {
  DEFAULT_TENANT_ID,
  AIIMS_JODHPUR_TENANT_ID,
  sanitizeTenantId,
  validateTenantAccess,
  assertTenantAccess,
  withTenantFilter,
  executeWithTenantContext,
  TENANT_SESSION_VARIABLE,
  SYSTEM_ADMIN_SESSION_VARIABLE,
} from "../../tenantContext";
import fs from "node:fs";
import path from "node:path";

describe("Phase 14: Multi-Tenant Database Architecture & RLS Suite", () => {
  it("defaults to SMS Jaipur tenant for undefined, null, or empty tenant IDs", () => {
    expect(sanitizeTenantId(undefined)).toBe(DEFAULT_TENANT_ID);
    expect(sanitizeTenantId(null)).toBe(DEFAULT_TENANT_ID);
    expect(sanitizeTenantId("")).toBe(DEFAULT_TENANT_ID);
    expect(sanitizeTenantId("   ")).toBe(DEFAULT_TENANT_ID);
  });

  it("sanitizes valid tenant ID strings to lowercase trimmed tokens", () => {
    expect(sanitizeTenantId("TENANT_SMS_JAIPUR")).toBe("tenant_sms_jaipur");
    expect(sanitizeTenantId(" tenant_aiims_jodhpur ")).toBe("tenant_aiims_jodhpur");
    expect(sanitizeTenantId("trauma-center-01")).toBe("trauma-center-01");
  });

  it("rejects malicious SQL injection attempts in tenant IDs and falls back to default tenant", () => {
    expect(sanitizeTenantId("tenant'; DROP TABLE \"Patient\"; --")).toBe(DEFAULT_TENANT_ID);
    expect(sanitizeTenantId("tenant' OR 1=1 --")).toBe(DEFAULT_TENANT_ID);
    expect(sanitizeTenantId("<script>alert(1)</script>")).toBe(DEFAULT_TENANT_ID);
  });

  it("enforces tenant boundary validation accurately", () => {
    // Same tenant: Allowed
    expect(validateTenantAccess("tenant_sms_jaipur", "tenant_sms_jaipur")).toBe(true);

    // Cross-tenant: Denied
    expect(validateTenantAccess("tenant_sms_jaipur", "tenant_aiims_jodhpur")).toBe(false);

    // Cross-tenant with system admin bypass: Allowed
    expect(validateTenantAccess("tenant_sms_jaipur", "tenant_aiims_jodhpur", true)).toBe(true);
  });

  it("throws security exception on unauthorized cross-tenant data access assertion", () => {
    expect(() =>
      assertTenantAccess("tenant_sms_jaipur", "tenant_aiims_jodhpur", false)
    ).toThrow(/Cross-tenant data isolation violation/);

    expect(() =>
      assertTenantAccess("tenant_sms_jaipur", "tenant_sms_jaipur", false)
    ).not.toThrow();

    expect(() =>
      assertTenantAccess("tenant_sms_jaipur", "tenant_aiims_jodhpur", true)
    ).not.toThrow();
  });

  it("appends tenantId to Prisma query filters with withTenantFilter", () => {
    const filter = withTenantFilter("tenant_aiims_jodhpur", { crNo: "CR-2026-99" });
    expect(filter).toEqual({
      crNo: "CR-2026-99",
      tenantId: "tenant_aiims_jodhpur",
    });

    const defaultFilter = withTenantFilter(null, { status: "SCHEDULED" });
    expect(defaultFilter).toEqual({
      status: "SCHEDULED",
      tenantId: DEFAULT_TENANT_ID,
    });
  });

  it("executes operations within a transaction injecting SET LOCAL app.current_tenant_id", async () => {
    const mockExecuteRawUnsafe = vi.fn().mockResolvedValue(1);
    const mockCallback = vi.fn().mockResolvedValue({ id: "patient-1", tenantId: "tenant_sms_jaipur" });

    const mockPrisma = {
      $transaction: vi.fn(async (fn) => {
        const tx = {
          $executeRawUnsafe: mockExecuteRawUnsafe,
        };
        return fn(tx);
      }),
    } as unknown as any;

    const result = await executeWithTenantContext(
      mockPrisma,
      "tenant_sms_jaipur",
      mockCallback,
      false
    );

    expect(result).toEqual({ id: "patient-1", tenantId: "tenant_sms_jaipur" });
    expect(mockExecuteRawUnsafe).toHaveBeenCalledWith(
      `SET LOCAL ${TENANT_SESSION_VARIABLE} = 'tenant_sms_jaipur';`
    );
    expect(mockExecuteRawUnsafe).toHaveBeenCalledWith(
      `SET LOCAL ${SYSTEM_ADMIN_SESSION_VARIABLE} = 'false';`
    );
    expect(mockCallback).toHaveBeenCalled();
  });

  it("verifies RLS migration SQL script contains all mandatory tenant isolation policies", () => {
    const migrationPath = path.resolve(__dirname, "../../migrations/20260913_rls_policies.sql");
    expect(fs.existsSync(migrationPath)).toBe(true);

    const sql = fs.readFileSync(migrationPath, "utf-8");
    expect(sql).toContain('ALTER TABLE "Patient" ENABLE ROW LEVEL SECURITY;');
    expect(sql).toContain('ALTER TABLE "Patient" FORCE ROW LEVEL SECURITY;');
    expect(sql).toContain('ALTER TABLE "Staff" ENABLE ROW LEVEL SECURITY;');
    expect(sql).toContain('ALTER TABLE "ScheduleSlot" ENABLE ROW LEVEL SECURITY;');
    expect(sql).toContain('ALTER TABLE "AuditLog" ENABLE ROW LEVEL SECURITY;');
    expect(sql).toContain("CREATE POLICY tenant_isolation_patient_policy ON \"Patient\"");
    expect(sql).toContain("current_setting('app.current_tenant_id', true)");
    expect(sql).toContain("current_setting('app.is_system_admin', true)");
  });
});
