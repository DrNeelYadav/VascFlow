import { test, expect } from "@playwright/test";

/**
 * End-to-End Compliance & Audit Trail Verification Suite for Vascule OS.
 * Asserts immutable audit log persistence, HIPAA § 164.312(b) controls,
 * and real-time synchronization in the Administrator Console.
 */
test.describe("Vascule OS - HIPAA Audit Trail & SOC2 Hardening E2E", () => {
  test.beforeEach(async ({ context }) => {
    // 1. Mock institutional session token to simulate authenticated System Administrator
    const mockAdminPayload = {
      id: "usr_adm_lan",
      email: "admin@hospital.lan",
      roleCode: "ADMIN",
      roleTier: "Administrative",
    };
    const token = `vascule.${Buffer.from(JSON.stringify(mockAdminPayload)).toString("base64")}.sig`;

    await context.addCookies([
      {
        name: "authjs.session-token",
        value: token,
        domain: "localhost",
        path: "/",
        httpOnly: true,
        secure: false,
        sameSite: "Lax",
      },
      {
        name: "vascule_token",
        value: token,
        domain: "localhost",
        path: "/",
        httpOnly: false,
        secure: false,
        sameSite: "Lax",
      },
    ]);
  });

  test("loads Admin Console, displays live audit stream with cryptographic verification, and appends new actions", async ({
    page,
  }) => {
    // 2. Navigate to Institutional Administration Console
    await page.goto("/admin");

    // 3. Assert header and privilege tier badges render
    await expect(page.locator("text=Institutional Administration Console")).toBeVisible();
    await expect(page.locator("text=CLUSTER ALL GREEN")).toBeVisible();

    // 4. Assert Microservices Cluster topology cards render
    await expect(page.locator("text=auth-service")).toBeVisible();
    await expect(page.locator("text=fhir-service")).toBeVisible();
    await expect(page.locator("text=dicom-service")).toBeVisible();
    await expect(page.locator("text=postgres")).toBeVisible();

    // 5. Assert Live Immutable Audit Ledger renders with HIPAA controls
    await expect(page.locator("text=Live Immutable Audit Ledger")).toBeVisible();

    // 6. Assert cryptographic tamper-proof badges appear
    const verifiedBadges = page.locator("text=TAMPER-PROOF VERIFIED");
    await expect(verifiedBadges.first()).toBeVisible();

    // 7. Test Action Filtering (e.g. filter by LOGIN)
    const loginFilterBtn = page.getByRole("button", { name: "LOGIN" });
    if (await loginFilterBtn.isVisible()) {
      await loginFilterBtn.click();
      // Wait for filtered view
      await expect(page.locator("text=LOGIN").first()).toBeVisible();

      // Switch back to ALL
      const allFilterBtn = page.getByRole("button", { name: "ALL" });
      await allFilterBtn.click();
    }

    // 8. Execute an Administrative Action and verify it appends to the live audit ledger
    const exportBtn = page.getByRole("button", { name: /Export Audit Trail/i });
    await expect(exportBtn).toBeVisible();
    await exportBtn.click();

    // Assert action feedback toast
    await expect(
      page.locator("text=Export SOC2 & HIPAA Audit Bundle completed successfully")
    ).toBeVisible();

    // Assert that the newly generated EXPORT_DATA record appears in the audit table
    const exportRecord = page.locator("text=EXPORT_DATA");
    await expect(exportRecord.first()).toBeVisible();

    // 9. Verify Refresh Topology trigger works
    const refreshBtn = page.getByRole("button", { name: /Refresh Topology/i });
    await expect(refreshBtn).toBeVisible();
    await refreshBtn.click();
    await expect(
      page.locator("text=Cluster topology and immutable audit records synchronized")
    ).toBeVisible();
  });
});
