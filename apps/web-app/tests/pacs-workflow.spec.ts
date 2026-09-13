import { test, expect } from "@playwright/test";

/**
 * End-to-End PACS Imaging and Structured Reporting Test Suite.
 * Validates DICOM canvas rendering, study metadata overlays, Window/Level adjustments,
 * and structured report authoring with audit trail generation.
 */
test.describe("Vascule OS - PACS Viewer & Reporting Studio E2E", () => {
  const studyUID = "1.2.840.113619.2.55.3.2831164244";

  const mockStudyResponse = {
    studyInstanceUid: studyUID,
    canonical: {
      studyInstanceUid: studyUID,
      modality: "XA",
      modalities: ["XA", "SR"],
      patientName: "SHARMA^RAJESH",
      patientId: "SMS2026-IR-00147",
      studyDate: "20260913",
      studyTime: "091500",
      accessionNumber: "ACC-2026-09130042",
      studyDescription: "TACE - LEFT HEPATIC ARTERY",
      numberOfInstances: 342,
      numberOfSeries: 8,
      institutionName: "SMS Medical College, Jaipur",
      radiationDoseReport: {
        totalDAPGyCm2: 48.72,
        cumulativeAirKermaMGy: 1247.3,
        fluoroscopyTimeSeconds: 1842,
        totalAcquisitions: 24,
        totalFrames: 342,
        protocolName: "IR_TACE_HEPATIC",
        doseAreaProductUnit: "Gy.cm2",
      },
    },
    dicomweb: {},
  };

  test.beforeEach(async ({ context }) => {
    // 1. Mock institutional session token for an authenticated Interventional Radiologist
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

  test("renders DICOM canvas viewer with overlays and allows WW/WL preset selection", async ({
    page,
  }) => {
    // Intercept study lookup from BFF proxy
    await page.route(`**/api/proxy/dicom/studies/${studyUID}`, async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(mockStudyResponse),
      });
    });

    // Navigate to PACS viewer page
    await page.goto(`/dashboard/imaging/${studyUID}`);

    // Verify canvas viewer presence
    const canvas = page.locator('[data-testid="dicom-canvas"]');
    await expect(canvas).toBeVisible();

    // Verify patient metadata overlays
    await expect(page.locator('[data-testid="overlay-patient-name"]')).toHaveText("SHARMA^RAJESH");
    await expect(page.locator('[data-testid="overlay-patient-id"]')).toHaveText("ID: SMS2026-IR-00147");
    await expect(page.locator('[data-testid="overlay-modality"]')).toHaveText("XA / SR");
    await expect(page.locator('[data-testid="overlay-institution"]')).toHaveText("SMS Medical College, Jaipur");
    await expect(page.locator('[data-testid="overlay-description"]')).toHaveText("TACE - LEFT HEPATIC ARTERY");

    // Verify radiation dose report overlay
    await expect(page.locator('[data-testid="overlay-dap"]')).toContainText("DAP: 48.72 Gy.cm2");
    await expect(page.locator('[data-testid="overlay-fluoro-time"]')).toContainText("Fluoro: 30m 42s");

    // Check default WW/WL display
    const readout = page.locator('[data-testid="wwwl-readout"]');
    await expect(readout).toHaveText("WW: 600 / WL: 300");

    // Click Liver Preset
    await page.locator('[data-testid="preset-liver"]').click();
    await expect(readout).toHaveText("WW: 150 / WL: 60");

    // Click Angiography Preset to return
    await page.locator('[data-testid="preset-angiography"]').click();
    await expect(readout).toHaveText("WW: 600 / WL: 300");
  });

  test("authors structured report, inserts macros, and submits with audit trail verification", async ({
    page,
  }) => {
    let reportSubmitted = false;
    let auditDispatched = false;

    // Intercept report submission to FHIR service
    await page.route("**/api/proxy/fhir/reports", async (route) => {
      reportSubmitted = true;
      await route.fulfill({
        status: 201,
        contentType: "application/json",
        body: JSON.stringify({ success: true, reportId: "REP-2026-0913-001" }),
      });
    });

    // Intercept audit trail persistence
    await page.route("**/api/audit", async (route) => {
      auditDispatched = true;
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ success: true, logged: true }),
      });
    });

    // Navigate to structured report studio
    await page.goto(`/dashboard/report/${studyUID}`);

    // Verify study ID is displayed
    await expect(page.locator('[data-testid="study-id-display"]')).toHaveText(studyUID);

    // Verify live preview letterhead
    await expect(page.locator('[data-testid="preview-institution"]')).toHaveText(
      "SMS Medical College & Attached Hospitals, Jaipur"
    );
    await expect(page.locator('[data-testid="preview-department"]')).toHaveText(
      "DEPARTMENT OF RADIODIAGNOSIS & INTERVENTIONAL RADIOLOGY"
    );

    // Fill clinical report form
    await page.locator('[data-testid="input-patient-name"]').fill("SHARMA^RAJESH");
    await page.locator('[data-testid="input-patient-id"]').fill("SMS2026-IR-00147");
    await page.locator('[data-testid="input-clinical-indication"]').fill("Segment VII HCC, post-TACE follow-up.");
    await page.locator('[data-testid="input-contrast-volume"]').fill("65");
    await page.locator('[data-testid="input-operator"]').fill("Dr. A. Sharma");
    await page.locator('[data-testid="input-supervisor"]').fill("Prof. R. K. Gupta");

    // Click dynamic macro buttons
    await page.locator('[data-testid="macro-catheterization"]').click();
    await page.locator('[data-testid="macro-no-extravasation"]').click();

    // Verify findings textarea received macro text
    const findingsArea = page.locator('[data-testid="input-findings"]');
    await expect(findingsArea).toHaveValue(
      "Selective catheterization performed successfully without immediate complication.\nNo extravasation identified."
    );

    // Verify live preview reflects patient name and procedure type
    await expect(page.locator('[data-testid="preview-patient-name"]')).toHaveText("SHARMA^RAJESH");
    await expect(page.locator('[data-testid="preview-procedure-type"]')).toContainText(
      "TACE (Trans-Arterial Chemo-Embolization)"
    );

    // Submit report
    await page.locator('[data-testid="submit-report"]').click();

    // Assert API endpoints were called
    await expect(page.locator("text=Report submitted successfully. Audit trail entry created.")).toBeVisible();
    expect(reportSubmitted).toBe(true);
    expect(auditDispatched).toBe(true);
  });
});
