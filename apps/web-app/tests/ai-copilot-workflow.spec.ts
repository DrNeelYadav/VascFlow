import { test, expect } from "@playwright/test";

/**
 * End-to-End AI Diagnostic Decision Support & Safety Oversight Test Suite.
 * Validates RAG clinical guidelines retrieval, confidence score presentation,
 * interactive decision tree simulation, and physician sign-off audit logging.
 */
test.describe("Vascule OS - AI Diagnostic Decision Support & Copilot E2E", () => {
  const mockAiQueryResponse = {
    queryId: "AI-DDS-8921104",
    query: "What is the BAE spinal artery risk and Adamkiewicz verification protocol?",
    intent: "IR_PROCEDURE_BAE_SPINAL_RISK",
    recommendation:
      "CRITICAL SPINAL ARTERY VERIFICATION: Carefully inspect bronchial arteriogram for anterior medullary artery (hairpin loop of Adamkiewicz, T8-L1). Microcatheter must be coaxially advanced DISTAL to any spinal branches prior to embolic deployment.",
    clinicalRationale:
      "Spinal cord infarction is a recognized complication if embolic agents reflux into anterior medullary branches. Use 300-500 um PVA particles under blank roadmapping.",
    riskLevel: "CRITICAL",
    guidelines: [
      {
        citation: "SIR-2023-BAE",
        title: "Society of Interventional Radiology Standards of Practice: Bronchial Artery Embolization for Massive Hemoptysis",
        publishingBody: "SIR",
        year: 2023,
        evidenceGrade: "Class I, Level A",
      },
    ],
    confidenceScore: 0.97,
    physicianSignOffRequired: true,
    safetyDisclaimer:
      "Vascule OS AI Clinical Decision Support is an adjunct decision-making aid. Final procedural execution requires independent verification and sign-off by a board-certified Interventional Radiologist.",
    timestamp: "2026-09-13T10:00:00Z",
  };

  test.beforeEach(async ({ context }) => {
    // Mock institutional session token for authenticated Interventional Radiologist
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

  test("queries AI copilot, verifies guideline citations and confidence score, and enforces physician sign-off gate", async ({
    page,
  }) => {
    let auditLogRecorded = false;

    // 1. Mock AI query response
    await page.route("**/api/proxy/ai/api/v1/ai/query", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(mockAiQueryResponse),
      });
    });

    // 2. Intercept audit trail log for physician sign-off
    await page.route("**/api/audit", async (route) => {
      auditLogRecorded = true;
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ success: true, logged: true }),
      });
    });

    // 3. Navigate to AI Copilot dashboard
    await page.goto("/dashboard/ai-copilot");

    // Verify page header
    await expect(page.locator("h1")).toContainText("AI Diagnostic Decision Support");

    // 4. Fill query and submit
    const queryInput = page.locator('[data-testid="input-ai-query"]');
    await queryInput.fill("What is the BAE spinal artery risk and Adamkiewicz verification protocol?");
    await page.locator('[data-testid="btn-send-ai-query"]').click();

    // 5. Assert structured clinical card rendered
    const responseCard = page.locator('[data-testid="ai-response-card"]');
    await expect(responseCard).toBeVisible();

    // Verify recommendation, risk badge, and confidence score
    await expect(page.locator('[data-testid="ai-risk-badge"]')).toHaveText("Risk: CRITICAL");
    await expect(page.locator('[data-testid="ai-confidence-badge"]')).toHaveText("Confidence: 97%");
    await expect(page.locator('[data-testid="ai-recommendation-text"]')).toContainText(
      "CRITICAL SPINAL ARTERY VERIFICATION"
    );

    // Verify SIR guideline citation
    const citations = page.locator('[data-testid="ai-guideline-citations"]');
    await expect(citations).toContainText("SIR-2023-BAE");
    await expect(citations).toContainText("Class I, Level A");

    // 6. Test Physician Sign-Off Gate
    const signOffBtn = page.locator('[data-testid="btn-physician-signoff"]');
    await expect(signOffBtn).toBeVisible();
    await signOffBtn.click();

    // Assert sign-off modal is open
    const modal = page.locator('[data-testid="signoff-modal"]');
    await expect(modal).toBeVisible();

    // Fill attending credentials
    await page.locator('[data-testid="input-signoff-physician"]').fill("Dr. Neel Yadav, MD");
    await page.locator('[data-testid="input-signoff-role"]').fill("VIR-CHIEF-01");

    // Confirm sign-off
    await page.locator('[data-testid="btn-confirm-signoff"]').click();

    // Verify confirmation badge replaced button and audit log was recorded
    await expect(page.locator('[data-testid="signoff-confirmed-badge"]')).toBeVisible();
    expect(auditLogRecorded).toBe(true);
  });

  test("traverses interactive clinical decision tree simulator", async ({ page }) => {
    await page.goto("/dashboard/ai-copilot");

    // Switch to Decision Tree tab
    await page.locator('[data-testid="tab-decision-tree"]').click();

    // Verify decision tree root card
    const card = page.locator('[data-testid="decision-tree-card"]');
    await expect(card).toBeVisible();
    await expect(page.locator('[data-testid="decision-prompt-text"]')).toContainText(
      "Diagnostic bronchial arteriogram obtained"
    );

    // Step 1: Select option with spinal branch identified
    await page.locator('[data-testid="decision-option-0"]').click();

    // Step 2: Verify transition to spinal branch management node
    await expect(page.locator('[data-testid="decision-prompt-text"]')).toContainText(
      "A spinal branch is identified"
    );

    // Step 2: Select Superselection option
    await page.locator('[data-testid="decision-option-0"]').click();

    // Step 3: Verify transition to embolic selection node
    await expect(page.locator('[data-testid="decision-prompt-text"]')).toContainText(
      "Select embolic agent"
    );

    // Step 3: Select PVA particles option
    await page.locator('[data-testid="decision-option-0"]').click();

    // Verify terminal success recommendation
    await expect(card).toContainText("PROCEDURAL SUCCESS");
    await expect(card).toContainText("SIR 2023 Guidelines");
  });

  test("calculates Cigarroa MACD contrast safety limits interactively", async ({ page }) => {
    await page.goto("/dashboard/ai-copilot");

    // Switch to MACD tab
    await page.locator('[data-testid="tab-macd"]').click();

    // Check default display (70kg, 1.4 mg/dL -> 250 mL)
    const readout = page.locator('[data-testid="macd-limit-display"]');
    await expect(readout).toHaveText("250 mL");

    // Change creatinine to 2.0 mg/dL -> (5 * 70) / 2 = 175 mL
    const creatInput = page.locator('input[step="0.1"]');
    await creatInput.fill("2.0");
    await expect(readout).toHaveText("175 mL");
  });
});
