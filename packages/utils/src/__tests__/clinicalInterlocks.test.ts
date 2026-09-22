import { describe, it, expect } from "vitest";
import {
  calculateCKDEPI,
  evaluateContrastSafety,
  evaluateBleedingRisk,
  evaluateRadiationDose,
} from "../clinicalInterlocks";

describe("Institutional Clinical Safety Interlocks Suite", () => {
  describe("1. CKD-EPI eGFR Calculation Engine", () => {
    it("accurately calculates eGFR for standard male patient", () => {
      // 55y male, creatinine 0.9 mg/dL -> expected eGFR around 96-98 mL/min/1.73m²
      const egfr = calculateCKDEPI(0.9, 55, "male");
      expect(egfr).toBeGreaterThanOrEqual(90);
      expect(egfr).toBeLessThanOrEqual(105);
    });

    it("accurately calculates severe renal impairment (G4/G5)", () => {
      // 70y female, creatinine 2.8 mg/dL -> expected eGFR < 20
      const egfr = calculateCKDEPI(2.8, 70, "female");
      expect(egfr).toBeLessThan(25);
    });

    it("handles boundary creatinine values safely without NaN or negative values", () => {
      expect(calculateCKDEPI(0, 40, "male")).toBeGreaterThan(0);
      expect(calculateCKDEPI(12.0, 60, "female")).toBeGreaterThanOrEqual(1);
    });
  });

  describe("2. Contrast Safety Evaluation Interlock", () => {
    it("returns 'safe' tier when eGFR >= 45", () => {
      const evaluation = evaluateContrastSafety(65);
      expect(evaluation.status).toBe("safe");
      expect(evaluation.alertLevel).toBe("green");
    });

    it("returns 'caution' tier with hydration directive when eGFR between 30 and 44", () => {
      const evaluation = evaluateContrastSafety(36);
      expect(evaluation.status).toBe("caution");
      expect(evaluation.alertLevel).toBe("amber");
      expect(evaluation.recommendation).toContain("Hydration protocol");
    });

    it("returns 'contraindicated' with nephrology warning when eGFR < 30", () => {
      const evaluation = evaluateContrastSafety(22);
      expect(evaluation.status).toBe("contraindicated");
      expect(evaluation.alertLevel).toBe("red");
      expect(evaluation.recommendation).toContain("contraindicated");
    });
  });

  describe("3. SIR / CIRSE Bleeding Risk Interlock", () => {
    it("passes low-risk procedure when coagulation labs are within limits", () => {
      const result = evaluateBleedingRisk(1.1, 180000, 32, "low");
      expect(result.isHighRisk).toBe(false);
      expect(result.status).toBe("safe");
      expect(result.alerts).toHaveLength(0);
    });

    it("flags elevated INR in low-risk procedure when INR > 2.0", () => {
      const result = evaluateBleedingRisk(2.3, 160000, 35, "low");
      expect(result.isHighRisk).toBe(true);
      expect(result.alerts.some((a) => a.includes("Elevated INR"))).toBe(true);
    });

    it("flags INR > 1.5 as high-risk in high-risk procedure (e.g. TIPS, biopsy)", () => {
      const result = evaluateBleedingRisk(1.8, 150000, 32, "high");
      expect(result.isHighRisk).toBe(true);
      expect(result.alerts.some((a) => a.includes("1.5 threshold"))).toBe(true);
    });

    it("flags thrombocytopenia when platelets < 50,000/µL", () => {
      const result = evaluateBleedingRisk(1.1, 38000, 30, "high");
      expect(result.isHighRisk).toBe(true);
      expect(result.alerts.some((a) => a.includes("Thrombocytopenia"))).toBe(true);
    });

    it("marks status as contraindicated when coagulopathy is severe", () => {
      const result = evaluateBleedingRisk(2.8, 25000, 62, "high");
      expect(result.status).toBe("contraindicated");
    });
  });

  describe("4. Fluoroscopy Radiation Sentinel Event Interlock", () => {
    it("returns normal level when dose and time are within bounds", () => {
      const result = evaluateRadiationDose(1.2, 22);
      expect(result.flagged).toBe(false);
      expect(result.level).toBe("normal");
    });

    it("flags alert when cumulative air kerma >= 3.0 Gy or fluoro time >= 45 min", () => {
      const result = evaluateRadiationDose(3.4, 30);
      expect(result.flagged).toBe(true);
      expect(result.level).toBe("alert");
    });

    it("triggers critical sentinel dose event when air kerma >= 5.0 Gy", () => {
      const result = evaluateRadiationDose(5.4, 40);
      expect(result.flagged).toBe(true);
      expect(result.level).toBe("critical");
      expect(result.message).toContain("Sentinel Radiation Dose Event");
    });

    it("triggers critical sentinel dose event when fluoro time >= 60 min", () => {
      const result = evaluateRadiationDose(2.8, 65);
      expect(result.flagged).toBe(true);
      expect(result.level).toBe("critical");
      expect(result.message).toContain("Sentinel Radiation Dose Event");
    });
  });
});
