import { test, expect } from "@playwright/test";

/**
 * End-to-End Financial & Clinical Analytics Test Suite for Vascule OS.
 * Validates TPA SMS parsing, scheme binding to patient records, audit log writes,
 * and real-time departmental analytics calculations.
 */
test.describe("Vascule OS - Schemes, Tariffs & Clinical Analytics E2E", () => {
  test.beforeEach(async ({ context }) => {
    // Mock institutional session token for authenticated administrative radiologist
    await context.addCookies([
      {
        name: "authjs.session-token",
        value: "mock_jwt_session_interventional_radiologist_2026",
        domain: "localhost",
        path: "/",
        httpOnly: true,
        secure: false,
        sameSite: "Lax",
      },
      {
        name: "vascule_token",
        value: "mock_institutional_bearer_token",
        domain: "localhost",
        path: "/",
        httpOnly: false,
        secure: false,
        sameSite: "Lax",
      },
    ]);
  });

  test("parses TPA SMS notification, populates pre-auth metadata, and binds to active patient", async ({
    page,
  }) => {
    let auditEntryLogged = false;

    // Intercept audit log endpoint to verify scheme binding event write
    await page.route("**/api/audit", async (route) => {
      auditEntryLogged = true;
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ success: true, logged: true }),
      });
    });

    // Navigate to Government Schemes & Tariffs page
    await page.goto("/dashboard/schemes");

    // Verify page header
    await expect(page.locator("h1")).toContainText("Government Schemes & Master Tariff Directory");

    // Input TPA SMS content into parser textarea
    const rawSms = `
      Dear Hospital, Pre-Auth request for Beneficiary: Rajesh Sharma under MAAY scheme.
      TID: TXN8921104, Jan Aadhaar: 9812-4412-8812, Package Code: MAAY-IR-001, Sanctioned Amount: Rs. 35,000/- Status: Approved.
    `;
    await page.locator('[data-testid="input-tpa-sms"]').fill(rawSms);

    // Click Parse Button
    await page.locator('[data-testid="btn-parse-sms"]').click();

    // Verify extracted metadata card is visible and populated
    const parsedCard = page.locator('[data-testid="parsed-notification-card"]');
    await expect(parsedCard).toBeVisible();

    await expect(page.locator('[data-testid="extracted-scheme"]')).toHaveText("MAAY");
    await expect(page.locator('[data-testid="extracted-tid"]')).toHaveText("TXN8921104");
    await expect(page.locator('[data-testid="extracted-card"]')).toHaveText("9812-4412-8812");
    await expect(page.locator('[data-testid="extracted-package-code"]')).toHaveText("MAAY-IR-001");
    await expect(page.locator('[data-testid="extracted-patient-name"]')).toHaveText("Rajesh Sharma");
    await expect(page.locator('[data-testid="extracted-amount"]')).toContainText("₹35,000");

    // Verify pre-authorization checklist auto-selected package
    const checklistCard = page.locator('[data-testid="checklist-selected-package"]');
    await expect(checklistCard).toBeVisible();
    await expect(checklistCard).toContainText("Transcatheter Arterial Chemoembolization");

    // Click Bind to Active Patient
    await page.locator('[data-testid="btn-bind-patient"]').click();

    // Assert binding success message appears
    await expect(
      page.locator("text=Pre-authorization successfully bound to active patient record")
    ).toBeVisible();

    // Assert audit entry was recorded
    expect(auditEntryLogged).toBe(true);
  });

  test("loads departmental analytics dashboard and renders key metrics with export buttons", async ({
    page,
  }) => {
    // Navigate to Analytics page
    await page.goto("/dashboard/analytics");

    // Verify page header
    await expect(page.locator("h1")).toContainText("Departmental Quality & Procedure Analytics");

    // Verify key metric cards are populated
    await expect(page.locator('[data-testid="metric-overall-yield"]')).toHaveText("80%");
    await expect(page.locator('[data-testid="metric-ct-yield"]')).toHaveText("80%");
    await expect(page.locator('[data-testid="metric-usg-yield"]')).toHaveText("80%");
    await expect(page.locator('[data-testid="metric-contrast-violation-rate"]')).toHaveText("1.6%");

    // Verify export buttons are present
    const exportOtBtn = page.locator('[data-testid="btn-export-ot-csv"]');
    await expect(exportOtBtn).toBeVisible();

    const exportBiopsyBtn = page.locator('[data-testid="btn-export-biopsy-csv"]');
    await expect(exportBiopsyBtn).toBeVisible();
  });
});
