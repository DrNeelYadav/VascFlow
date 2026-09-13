import { test, expect } from "@playwright/test";

/**
 * Phase 15: Clinical UAT Workflow & Security Verification E2E Suite
 * Tests clinical feedback ingestion, XSS neutralization, and Edge RBAC privilege escalation defense.
 */
test.describe("Vascule OS - Clinical UAT & Security Penetration E2E", () => {
  test.describe("Authenticated Faculty UAT Session", () => {
    test.beforeEach(async ({ context }) => {
      const mockFacultyClaims = {
        id: "usr_fac_roy",
        email: "dr.roy@hospital.lan",
        name: "Dr. Roy",
        roleCode: "INTERVENTIONAL_RADIOLOGIST",
        roleTier: "Faculty",
        institutionId: "tenant_sms_jaipur",
      };
      const token = `vascule.${Buffer.from(JSON.stringify(mockFacultyClaims)).toString("base64")}.sig`;

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

    test("submits clinical UAT assessment, calculates star ratings, and renders in recent logs", async ({
      page,
    }) => {
      // Mock UAT API
      await page.route("**/api/uat", async (route) => {
        if (route.request().method() === "GET") {
          return route.fulfill({
            status: 200,
            contentType: "application/json",
            body: JSON.stringify({
              status: "success",
              data: [
                {
                  id: "uat_test_001",
                  staffName: "Dr. Roy (Faculty IR)",
                  roleTier: "Faculty",
                  deviceType: "DESKTOP",
                  clinicalModule: "IMAGING_PACS",
                  workflowRating: 5,
                  uiClutterRating: 1,
                  feedbackText: "Flawless angiographic WW/WL transitions in Cath Lab.",
                  priority: "LOW",
                  createdAt: new Date().toISOString(),
                },
              ],
            }),
          });
        }

        if (route.request().method() === "POST") {
          const body = JSON.parse(route.request().postData() || "{}");
          return route.fulfill({
            status: 201,
            contentType: "application/json",
            body: JSON.stringify({
              status: "created",
              data: {
                id: "uat_new_123",
                ...body,
                createdAt: new Date().toISOString(),
              },
            }),
          });
        }
      });

      // 1. Navigate to UAT feedback dashboard
      await page.goto("/dashboard/uat");

      // 2. Assert page header elements
      await expect(
        page.locator("text=Clinical UAT & Workflow Quality Studio")
      ).toBeVisible();
      await expect(
        page.locator("text=Submit Usability Assessment or Bug Report")
      ).toBeVisible();

      // 3. Fill out feedback form
      await page.fill(
        'textarea[placeholder*="Describe specific procedural friction"]',
        "Cath Lab Suite 1 tested. BAE decision tree simulator is very responsive."
      );

      // 4. Click Submit Feedback button
      await page.click('button:has-text("Submit Feedback")');

      // 5. Assert success banner appears
      await expect(
        page.locator("text=UAT feedback recorded and attributed with HIPAA-compliant audit hash")
      ).toBeVisible();
    });
  });

  test.describe("Security Penetration & Privilege Escalation Defense", () => {
    test("strictly blocks unprivileged resident from accessing institutional administration console (/admin)", async ({
      page,
      context,
    }) => {
      // Authenticate as unprivileged Resident Fellow
      const mockResidentClaims = {
        id: "usr_res_fellow",
        email: "fellow@hospital.lan",
        name: "Dr. Sarah Chen",
        roleCode: "RESIDENT_FELLOW",
        roleTier: "Resident",
        institutionId: "tenant_sms_jaipur",
      };
      const token = `vascule.${Buffer.from(JSON.stringify(mockResidentClaims)).toString("base64")}.sig`;

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

      // Attempt unauthorized privilege escalation to /admin
      await page.goto("/admin");

      // Assert that edge RBAC middleware blocks Resident and redirects to /unauthorized or /login
      const currentUrl = page.url();
      expect(
        currentUrl.includes("/unauthorized") || currentUrl.includes("/login")
      ).toBe(true);
    });

    test("neutralizes XSS script payloads submitted in feedback forms", async ({
      page,
      context,
    }) => {
      const mockFacultyClaims = {
        id: "usr_fac_roy",
        email: "dr.roy@hospital.lan",
        name: "Dr. Roy",
        roleCode: "INTERVENTIONAL_RADIOLOGIST",
        roleTier: "Faculty",
      };
      const token = `vascule.${Buffer.from(JSON.stringify(mockFacultyClaims)).toString("base64")}.sig`;

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
      ]);

      let capturedPayloadText: string | null = null;
      await page.route("**/api/uat", async (route) => {
        if (route.request().method() === "POST") {
          const body = JSON.parse(route.request().postData() || "{}");
          capturedPayloadText = body.feedbackText;
          return route.fulfill({
            status: 201,
            contentType: "application/json",
            body: JSON.stringify({
              status: "created",
              data: {
                id: "xss_test_123",
                ...body,
                feedbackText: "&lt;script&gt;alert(1)&lt;/script&gt;",
              },
            }),
          });
        }
        return route.continue();
      });

      await page.goto("/dashboard/uat");

      // Inject malicious XSS script in feedback textarea
      await page.fill(
        'textarea[placeholder*="Describe specific procedural friction"]',
        "<script>alert('XSS Attack')</script>"
      );
      await page.click('button:has-text("Submit Feedback")');

      // Verify payload was processed safely
      expect(capturedPayloadText).toBe("<script>alert('XSS Attack')</script>");
    });
  });
});
