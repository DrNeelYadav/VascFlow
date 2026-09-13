import { describe, it, expect } from "vitest";
import {
  sanitizeClinicalPrompt,
  calculateMacdLimit,
  CLINICAL_DECISION_TREES,
} from "../../apps/web-app/app/dashboard/ai-copilot/aiUtils";

describe("AI Clinical Copilot & Decision Support Utilities Suite", () => {
  describe("sanitizeClinicalPrompt", () => {
    it("strips malicious HTML and script tags from prompts", () => {
      const dirty = "<script>alert('injection')</script>What is the BAE protocol?";
      const cleaned = sanitizeClinicalPrompt(dirty);
      expect(cleaned).not.toContain("<script>");
      expect(cleaned).not.toContain("</script>");
      expect(cleaned).toBe("scriptalert('injection')/scriptWhat is the BAE protocol?");
    });

    it("strips unprintable control characters and trims whitespace", () => {
      const dirty = "  \u0000\u001FCheck MACD limit for 70kg patient  \t\n";
      const cleaned = sanitizeClinicalPrompt(dirty);
      expect(cleaned).toBe("Check MACD limit for 70kg patient");
    });

    it("handles empty and non-string inputs safely", () => {
      expect(sanitizeClinicalPrompt("")).toBe("");
      // @ts-expect-error testing invalid type input
      expect(sanitizeClinicalPrompt(null)).toBe("");
      // @ts-expect-error testing invalid type input
      expect(sanitizeClinicalPrompt(undefined)).toBe("");
    });

    it("enforces a maximum character length of 1000", () => {
      const veryLong = "A".repeat(1500);
      const cleaned = sanitizeClinicalPrompt(veryLong);
      expect(cleaned.length).toBe(1000);
    });
  });

  describe("calculateMacdLimit", () => {
    it("calculates Cigarroa MACD correctly for standard patient values", () => {
      // (5 * 70kg) / 1.4 mg/dL = 350 / 1.4 = 250.0 mL
      expect(calculateMacdLimit(70, 1.4)).toBe(250.0);
    });

    it("calculates lower limit for elevated creatinine", () => {
      // (5 * 70kg) / 2.0 mg/dL = 350 / 2.0 = 175.0 mL
      expect(calculateMacdLimit(70, 2.0)).toBe(175.0);
    });

    it("handles zero and negative values safely without returning NaN or Infinity", () => {
      expect(calculateMacdLimit(0, 1.4)).toBe(0);
      expect(calculateMacdLimit(70, 0)).toBe(0);
      expect(calculateMacdLimit(-70, 1.4)).toBe(0);
    });
  });

  describe("Clinical Decision Trees", () => {
    it("verifies BAE decision tree has valid root node and branches", () => {
      const root = CLINICAL_DECISION_TREES["bae-root"];
      expect(root).toBeDefined();
      expect(root.scenario).toContain("BAE Protocol");
      expect(root.options.length).toBeGreaterThanOrEqual(2);

      // Verify spinal branch alert option exists
      const spinalOpt = root.options.find((o) => o.nextNodeId === "bae-spinal-identified");
      expect(spinalOpt).toBeDefined();
      expect(spinalOpt?.riskAlert).toContain("CRITICAL");
    });

    it("traverses BAE decision tree from root to superselection success", () => {
      const step1 = CLINICAL_DECISION_TREES["bae-root"];
      const step2Id = step1.options[0].nextNodeId!;
      const step2 = CLINICAL_DECISION_TREES[step2Id];
      expect(step2.id).toBe("bae-spinal-identified");

      const step3Id = step2.options[0].nextNodeId!;
      const step3 = CLINICAL_DECISION_TREES[step3Id];
      expect(step3.id).toBe("bae-superselection-success");

      // Verify terminal recommendation
      const pvaOpt = step3.options.find((o) => o.isTerminal);
      expect(pvaOpt?.recommendation).toContain("PROCEDURAL SUCCESS");
      expect(pvaOpt?.recommendation).toContain("SIR 2023 Guidelines");
    });

    it("verifies TACE decision tree covers BCLC-B criteria and dosing calculation", () => {
      const root = CLINICAL_DECISION_TREES["tace-root"];
      expect(root).toBeDefined();
      expect(root.scenario).toContain("BCLC-B Intermediate HCC");

      const eligibleOpt = root.options.find((o) => o.nextNodeId === "tace-anatomy");
      expect(eligibleOpt).toBeDefined();

      const doseCalcNode = CLINICAL_DECISION_TREES["tace-dose-calc"];
      expect(doseCalcNode).toBeDefined();
      expect(doseCalcNode.options[0].description).toContain("Lipiodol");
      expect(doseCalcNode.options[0].isTerminal).toBe(true);
    });
  });
});
