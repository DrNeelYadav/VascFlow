import { describe, it, expect } from "vitest";
import {
  IR_PROCEDURES_CATALOG,
  calculateRotterdam,
  calculateClichy,
  calculateMeld3,
  calculateChildPugh,
  calculateCigarroaMACD,
  calculateEgfrCkdEpi,
} from "@vascule/catalog";

describe("100 Interventional Radiology Procedures Catalog", () => {
  it("contains exactly 100 procedures", () => {
    expect(IR_PROCEDURES_CATALOG).toBeDefined();
    expect(IR_PROCEDURES_CATALOG.length).toBe(100);
  });

  it("ensures all procedure keys are unique non-empty strings", () => {
    const keys = IR_PROCEDURES_CATALOG.map((p) => p.key);
    const uniqueKeys = new Set(keys);
    expect(uniqueKeys.size).toBe(100);
    keys.forEach((key) => {
      expect(key.trim().length).toBeGreaterThan(0);
    });
  });

  it("covers all 6 clinical domains with proper distribution", () => {
    const domains = new Set(IR_PROCEDURES_CATALOG.map((p) => p.domain));
    expect(domains.has("embolization")).toBe(true);
    expect(domains.has("portal_htn")).toBe(true);
    expect(domains.has("oncology")).toBe(true);
    expect(domains.has("venous")).toBe(true);
    expect(domains.has("arterial")).toBe(true);
    expect(domains.has("biopsy")).toBe(true);
    expect(domains.size).toBe(6);
  });

  it("verifies every procedure has complete structural properties", () => {
    IR_PROCEDURES_CATALOG.forEach((proc) => {
      expect(proc.key).toBeDefined();
      expect(proc.title.length).toBeGreaterThan(0);
      expect(proc.category.length).toBeGreaterThan(0);
      expect(["XA", "CT", "US", "ROSE", "MR", "FL"]).toContain(proc.modality);
      expect(Array.isArray(proc.targetVessels)).toBe(true);
      expect(proc.defaultPanelCostINR).toBeGreaterThan(0);
      expect(Array.isArray(proc.requiredLabs)).toBe(true);
      expect(proc.requiredLabs.length).toBeGreaterThan(0);
      expect(proc.clinicalCriteria.length).toBeGreaterThan(0);
      expect(Array.isArray(proc.preOpChecklist)).toBe(true);
      expect(proc.preOpChecklist.length).toBeGreaterThan(0);
      expect(Array.isArray(proc.hardwareRequisition)).toBe(true);
      expect(proc.hardwareRequisition.length).toBeGreaterThan(0);
    });
  });
});

describe("Clinical Prognostic & Risk Calculators", () => {
  describe("Rotterdam Budd-Chiari Calculator", () => {
    it("calculates Class I for low-risk inputs", () => {
      const res = calculateRotterdam({ enceph: 0, ascites: 0, ptRatio: 1.0, bilirubinMg: 1.0 });
      expect(res.riskClass).toBe("Class I");
      expect(res.riskLevel).toBe("Low Risk");
      expect(res.score).toBeLessThan(1.1);
    });

    it("calculates Class III for high-risk inputs", () => {
      const res = calculateRotterdam({ enceph: 1, ascites: 1, ptRatio: 2.2, bilirubinMg: 5.0 });
      expect(res.riskClass).toBe("Class III");
      expect(res.riskLevel).toBe("High Risk");
      expect(res.score).toBeGreaterThan(1.5);
      expect(res.recommendation).toContain("TIPS/DIPS");
    });
  });

  describe("Clichy BCS Prognostic Index", () => {
    it("calculates score and identifies high vs low risk", () => {
      const lowRisk = calculateClichy({ age: 25, bilirubinMg: 1.2, alt: 35, creatinineMg: 0.8 });
      expect(lowRisk.riskGroup).toBe("Low Risk (Favorable)");
      expect(lowRisk.score).toBeLessThan(5.4);

      const highRisk = calculateClichy({ age: 65, bilirubinMg: 8.5, alt: 210, creatinineMg: 3.2 });
      expect(highRisk.riskGroup).toBe("High Risk (Poor)");
      expect(highRisk.score).toBeGreaterThanOrEqual(5.4);
    });
  });

  describe("MELD 3.0 Calculator", () => {
    it("computes MELD 3.0 score within 6-40 range", () => {
      const male = calculateMeld3({ creatinine: 1.2, bilirubin: 2.0, inr: 1.4, sodium: 135, albumin: 3.2, isFemale: false });
      expect(male.meldScore).toBeGreaterThanOrEqual(6);
      expect(male.meldScore).toBeLessThanOrEqual(40);

      const female = calculateMeld3({ creatinine: 1.2, bilirubin: 2.0, inr: 1.4, sodium: 135, albumin: 3.2, isFemale: true });
      expect(female.meldScore).toBeGreaterThanOrEqual(male.meldScore);
    });
  });

  describe("Child-Turcotte-Pugh Score", () => {
    it("computes Class A, B, and C accurately", () => {
      const classA = calculateChildPugh({
        bilirubinMg: 1.2,
        albuminGdl: 4.0,
        inr: 1.1,
        ascites: "None",
        encephalopathy: "None",
      });
      expect(classA.grade).toBe("Class A");
      expect(classA.score).toBe(5);

      const classC = calculateChildPugh({
        bilirubinMg: 4.5,
        albuminGdl: 2.2,
        inr: 2.5,
        ascites: "Moderate/Tense",
        encephalopathy: "Grade 3-4",
      });
      expect(classC.grade).toBe("Class C");
      expect(classC.score).toBe(15);
    });
  });

  describe("Cigarroa MACD Contrast Calculator", () => {
    it("calculates Maximum Allowable Contrast Dose safely", () => {
      const res = calculateCigarroaMACD(70, 1.0);
      expect(res.macdMl).toBe(350);
      expect(res.safeLimit80Percent).toBe(280);
      expect(res.isSafe(200)).toBe(true);
      expect(res.isSafe(360)).toBe(false);
    });

    it("handles zero or extreme low creatinine safely", () => {
      const res = calculateCigarroaMACD(70, 0.0);
      expect(res.macdMl).toBeGreaterThan(0);
      expect(Number.isFinite(res.macdMl)).toBe(true);
    });
  });

  describe("CKD-EPI 2021 eGFR Calculator", () => {
    it("computes eGFR and staging correctly", () => {
      const normal = calculateEgfrCkdEpi(0.9, 30, false);
      expect(normal.egfr).toBeGreaterThan(90);
      expect(normal.stage).toBe("G1");

      const failure = calculateEgfrCkdEpi(5.0, 70, false);
      expect(failure.egfr).toBeLessThan(15);
      expect(failure.stage).toBe("G5");
    });
  });
});
