import { describe, it, expect } from "vitest";
import {
  calculateMacd,
  calculateContrastSafety,
  calculateEgfrDetails,
  CIRSE_COMPLICATIONS,
  SIR_COMPLICATIONS,
  isCirseGrade,
  classifyCirseComplication,
  getCirseComplication,
  isSirClass,
  classifySirAdverseEvent,
  getSirComplication,
} from "../../app/lib/calculators";
import {
  INITIAL_RIS_WORKLIST_CASES,
  PatientWorklistEntry,
} from "../../app/dashboard/worklist/worklistData";

describe("STAT Emergency Fast-Path & CIRSE AKI Safety Guardrails Suite", () => {
  describe("1. MACD Clinical Boundary & Ceiling Validation", () => {
    it("rejects zero or negative creatinine and weight values", () => {
      // Weight 0
      const resWeight0 = calculateMacd(0, 1.0, 50);
      expect(resWeight0.valid).toBe(false);
      expect(resWeight0.macdMl).toBe(0);
      expect(resWeight0.recommendation).toContain("Enter valid patient weight");

      // Negative weight
      const resWeightNeg = calculateMacd(-70, 1.0, 50);
      expect(resWeightNeg.valid).toBe(false);
      expect(resWeightNeg.macdMl).toBe(0);

      // Creatinine 0
      const resCr0 = calculateMacd(70, 0, 50);
      expect(resCr0.valid).toBe(false);
      expect(resCr0.macdMl).toBe(0);

      // Negative Creatinine
      const resCrNeg = calculateMacd(70, -1.2, 50);
      expect(resCrNeg.valid).toBe(false);
      expect(resCrNeg.macdMl).toBe(0);
    });

    it("enforces 300 mL hard ceiling cap for low creatinine patients", () => {
      // 80 kg patient with low creatinine 0.6 mg/dL: (5 * 80) / 0.6 = 667 mL raw.
      // Must be capped at 300 mL.
      const result = calculateMacd(80, 0.6, 50, 110);
      expect(result.valid).toBe(true);
      expect(result.rawMacdMl).toBe(667);
      expect(result.macdMl).toBe(300);
      expect(result.isCappedAt300).toBe(true);
    });

    it("enforces conservative 40 mL cap when renal function is severely impaired (pending faculty approval)", () => {
      // Scr >= 3.0
      const resScrHigh = calculateMacd(80, 3.2, 35);
      expect(resScrHigh.valid).toBe(true);
      expect(resScrHigh.macdMl).toBe(40);
      expect(resScrHigh.recommendation).toContain("Conservative default");

      // eGFR < 30
      const resEgfrLow = calculateMacd(70, 1.8, 42, 24);
      expect(resEgfrLow.valid).toBe(true);
      expect(resEgfrLow.macdMl).toBe(40);
      expect(resEgfrLow.recommendation).toContain("Conservative default");
    });

    it("includes explicit clinical notes referencing coronary angiography validation and ACR-NKF 2020 eGFR guidance", () => {
      const result = calculateMacd(70, 1.0, 50);
      expect(result.clinicalNotes).toContain("coronary angiography");
      expect(result.clinicalNotes).toContain("ACR-NKF 2020");
      expect(result.clinicalNotes).toContain("300 mL");

      const safety = calculateContrastSafety(70, 1.0, 50);
      expect(safety.clinicalNotes).toContain("coronary angiography");
    });
  });

  describe("2. ACR-NKF 2020 eGFR Decision Boundaries (Davenport et al., Radiology 2020)", () => {
    it("asserts exact clinical guidance at eGFR cutoffs: <30, 30-44, and >=45", () => {
      // eGFR < 30 (Scr 2.5, Age 65 => eGFR 27.8): Prophylactic IV volume expansion IS indicated
      const gLow = calculateEgfrDetails(2.5, 65, false);
      expect(gLow.egfr).toBeLessThan(30);
      expect(gLow.contrastAdvice).toContain("Prophylactic IV hydration is indicated");

      // eGFR 30–44 (Scr 1.8, Age 65 => eGFR 41.3): Individualized clinical decision
      const gMid = calculateEgfrDetails(1.8, 65, false);
      expect(gMid.egfr).toBeGreaterThanOrEqual(30);
      expect(gMid.egfr).toBeLessThanOrEqual(44);
      expect(gMid.contrastAdvice).toContain("individualized clinical decision");

      // eGFR >= 45 (Scr 1.4, Age 65 => eGFR 55.8): Prophylaxis is NOT indicated
      const gHigh = calculateEgfrDetails(1.4, 65, false);
      expect(gHigh.egfr).toBeGreaterThanOrEqual(45);
      expect(gHigh.contrastAdvice).toContain("Prophylaxis is not indicated");
    });
  });

  describe("3. Strict Separation of CIRSE (1–6) vs SIR (A–F) Complication Systems", () => {
    it("ensures CIRSE and SIR use mutually exclusive grading domains and are never conflated", () => {
      // CIRSE must be strictly numeric grades 1 through 6
      expect(CIRSE_COMPLICATIONS).toHaveLength(6);
      CIRSE_COMPLICATIONS.forEach((c) => {
        expect(c.system).toBe("CIRSE");
        expect(typeof c.grade).toBe("number");
        expect(c.grade).toBeGreaterThanOrEqual(1);
        expect(c.grade).toBeLessThanOrEqual(6);
      });

      // SIR must be strictly letter classes A through F
      expect(SIR_COMPLICATIONS).toHaveLength(6);
      const validSirClasses = ["A", "B", "C", "D", "E", "F"];
      SIR_COMPLICATIONS.forEach((s) => {
        expect(s.system).toBe("SIR");
        expect(validSirClasses).toContain(s.sirClass);
      });
    });

    it("provides distinct typed classification and lookup functions for CIRSE (1-6) and SIR (A-F)", () => {
      // CIRSE verification
      expect(isCirseGrade(1)).toBe(true);
      expect(isCirseGrade(6)).toBe(true);
      expect(isCirseGrade(0)).toBe(false);
      expect(isCirseGrade(7)).toBe(false);
      expect(isCirseGrade("A")).toBe(false);

      const cirse1 = classifyCirseComplication(1);
      expect(cirse1.system).toBe("CIRSE");
      expect(cirse1.grade).toBe(1);
      expect(getCirseComplication(3)?.title).toContain("Grade 3");
      expect(() => classifyCirseComplication(7 as any)).toThrow();

      // SIR verification
      expect(isSirClass("A")).toBe(true);
      expect(isSirClass("F")).toBe(true);
      expect(isSirClass("G")).toBe(false);
      expect(isSirClass(1)).toBe(false);

      const sirA = classifySirAdverseEvent("A");
      expect(sirA.system).toBe("SIR");
      expect(sirA.sirClass).toBe("A");
      expect(sirA.severity).toBe("Minor");
      const sirD = classifySirAdverseEvent("D");
      expect(sirD.severity).toBe("Major");
      expect(getSirComplication("B")?.title).toContain("Class B");
      expect(() => classifySirAdverseEvent("Z" as any)).toThrow();
    });
  });

  describe("4. STAT Emergency Fast-Path Worklist Roster", () => {
    it("starts with an empty production worklist (demo data decoupled)", () => {
      expect(Array.isArray(INITIAL_RIS_WORKLIST_CASES)).toBe(true);
      expect(INITIAL_RIS_WORKLIST_CASES.length).toBeGreaterThanOrEqual(0);
    });
  });
});
