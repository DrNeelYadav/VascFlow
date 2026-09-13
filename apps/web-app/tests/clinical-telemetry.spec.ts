import { test, expect } from "@playwright/test";

/**
 * End-to-End Clinical Verification Suite for Vascule OS.
 * Asserts clinical workstation integrity, telemetry streaming, and biometric reactivity.
 */
test.describe("Vascule OS - Clinical Telemetry & Surgical Workstation E2E", () => {
  test.beforeEach(async ({ context }) => {
    // 1. Mock institutional session token to simulate authenticated Interventional Radiologist
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

  test("loads workstation, renders VitalsDashboard, and displays active biometric telemetry", async ({
    page,
  }) => {
    // 2. Navigate to surgical landing workstation
    await page.goto("/");

    // 3. Assert Vascule OS surgical application shell presence
    await expect(page).toHaveTitle(/Vascule OS/);
    await expect(page.locator("text=Vascule OS")).toBeVisible();

    // 4. Assert active patient context
    const patientLocator = page.locator("text=VALENTINE, MARCUS R.");
    await expect(patientLocator.first()).toBeVisible();

    // 5. Assert Hemodynamic Telemetry cards render
    const abpCard = page.locator("text=ART. PRESSURE (ABP)");
    await expect(abpCard.first()).toBeVisible();

    const cardiacCard = page.locator("text=CARDIAC RHYTHM");
    await expect(cardiacCard.first()).toBeVisible();

    const spo2Card = page.locator("text=PULSE OXIMETRY (SPO2)");
    await expect(spo2Card.first()).toBeVisible();

    const actCard = page.locator("text=COAGULATION (ACT)");
    await expect(actCard.first()).toBeVisible();

    // 6. Assert valid biometric values appear on screen
    // Heart Rate should be around 70-80 BPM
    const hrValue = page.locator("text=/7[0-9]\\s*BPM/");
    await expect(hrValue.first()).toBeVisible();

    // SpO2 should be 98% or 99%
    const spo2Value = page.locator("text=/9[89]%/");
    await expect(spo2Value.first()).toBeVisible();

    // 7. Test Telemetry controls (Pause & Resume stream)
    const pauseButton = page.getByRole("button", { name: /Pause Stream/i });
    if (await pauseButton.isVisible()) {
      await pauseButton.click();
      await expect(page.locator("text=Telemetry Paused")).toBeVisible();

      const resumeButton = page.getByRole("button", { name: /Resume Stream/i });
      await expect(resumeButton).toBeVisible();
      await resumeButton.click();
      await expect(page.locator("text=Telemetry Active")).toBeVisible();
    }

    // 8. Assert Operating Suite scheduling matrix presence
    await expect(page.locator("text=Angio Suite 1")).toBeVisible();
    await expect(page.locator("text=Angio Suite 2")).toBeVisible();
  });
});
