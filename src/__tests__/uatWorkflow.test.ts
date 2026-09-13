import { describe, it, expect } from "vitest";
import {
  sanitizeFeedbackText,
  validateRating,
  uatFeedbackStore,
} from "../../apps/web-app/app/api/uat/route";

describe("Phase 15: Clinical UAT Workflow & Usability Logging Suite", () => {
  describe("XSS Sanitization Defense", () => {
    it("sanitizes raw HTML script tags to neutral HTML entities", () => {
      const malicious = "<script>alert('pwned')</script>";
      const sanitized = sanitizeFeedbackText(malicious);
      expect(sanitized).not.toContain("<script>");
      expect(sanitized).toBe("&lt;script&gt;alert(&#x27;pwned&#x27;)&lt;&#x2F;script&gt;");
    });

    it("neutralizes stored XSS image onerror event handlers", () => {
      const imgPayload = '<img src=x onerror="alert(1)">';
      const sanitized = sanitizeFeedbackText(imgPayload);
      expect(sanitized).not.toContain("<img");
      expect(sanitized).toContain("&lt;img");
    });

    it("handles empty and whitespace feedback gracefully", () => {
      expect(sanitizeFeedbackText("")).toBe("");
      expect(sanitizeFeedbackText("   ")).toBe("");
    });
  });

  describe("Rating Clamping & Validation", () => {
    it("clamps ratings strictly between 1 and 5", () => {
      expect(validateRating(0)).toBe(1);
      expect(validateRating(-5)).toBe(1);
      expect(validateRating(6)).toBe(5);
      expect(validateRating(100)).toBe(5);
      expect(validateRating(3)).toBe(3);
      expect(validateRating(5)).toBe(5);
      expect(validateRating("4")).toBe(4);
      expect(validateRating("invalid")).toBe(1);
    });
  });

  describe("UAT Feedback Pre-loaded Seeds", () => {
    it("verifies pre-seeded clinical feedback records exist", () => {
      expect(uatFeedbackStore.length).toBeGreaterThanOrEqual(2);

      const pacsFeedback = uatFeedbackStore.find(
        (f) => f.clinicalModule === "IMAGING_PACS"
      );
      expect(pacsFeedback).toBeDefined();
      expect(pacsFeedback?.staffName).toBe("Dr. Roy");
      expect(pacsFeedback?.workflowRating).toBe(5);
      expect(pacsFeedback?.roleTier).toBe("Faculty");
      expect(pacsFeedback?.tenantId).toBe("tenant_sms_jaipur");

      const roundsFeedback = uatFeedbackStore.find(
        (f) => f.clinicalModule === "WARD_ROUNDS"
      );
      expect(roundsFeedback).toBeDefined();
      expect(roundsFeedback?.category).toBe("FEATURE_REQUEST");
    });
  });
});
