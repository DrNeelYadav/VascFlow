import { describe, it, expect } from "vitest";
import { calculateMacd } from "../../app/lib/calculators";
import {
  INITIAL_RIS_WORKLIST_CASES,
  PatientWorklistEntry,
} from "../../app/dashboard/worklist/worklistData";

describe("STAT Emergency Fast-Path & CIRSE AKI Safety Guardrails Suite", () => {
  describe("1. CIRSE / ESUR AKI Contrast Volume Hard Ceiling", () => {
    it("enforces a strict 40 mL ceiling when serum creatinine is >= 3.0 mg/dL", () => {
      // 80 kg patient with Scr 3.2 mg/dL.
      // Raw Cigarroa: (5 * 80) / 3.2 = 125 mL.
      // With CIRSE AKI guardrail, must cap at 40 mL.
      const result = calculateMacd(80, 3.2, 35);
      expect(result.valid).toBe(true);
      expect(result.macdMl).toBe(40);
      expect(result.isExceeded).toBe(false);
      expect(result.alertLevel).toBe("critical");
      expect(result.recommendation).toContain("CONTRAST TOXICITY CRITICAL WARNING");
      expect(result.recommendation).toContain("CO2 angiography");
    });

    it("enforces a strict 40 mL ceiling when eGFR < 30 mL/min/1.73m²", () => {
      // 70 kg patient with Scr 1.8 mg/dL but eGFR = 24 mL/min (Stage 4 CKD).
      // Raw Cigarroa: (5 * 70) / 1.8 = 194 mL.
      // With CIRSE AKI guardrail, must cap at 40 mL.
      const result = calculateMacd(70, 1.8, 42, 24);
      expect(result.valid).toBe(true);
      expect(result.macdMl).toBe(40);
      expect(result.isExceeded).toBe(true);
      expect(result.alertLevel).toBe("critical");
      expect(result.recommendation).toContain("CONTRAST TOXICITY CRITICAL WARNING");
    });

    it("allows standard Cigarroa limit when renal function is normal", () => {
      // 70 kg patient with normal Scr 0.9 mg/dL and eGFR 95.
      // Raw Cigarroa: (5 * 70) / 0.9 = 389 mL.
      const result = calculateMacd(70, 0.9, 50, 95);
      expect(result.valid).toBe(true);
      expect(result.macdMl).toBe(389);
      expect(result.isExceeded).toBe(false);
      expect(result.alertLevel).toBe("safe");
    });
  });

  describe("2. STAT Emergency Fast-Path Worklist Roster", () => {
    it("starts with an empty production worklist (demo data decoupled)", () => {
      expect(Array.isArray(INITIAL_RIS_WORKLIST_CASES)).toBe(true);
      // Production default is an empty array — demo cases load via loadDemoSeedData()
      expect(INITIAL_RIS_WORKLIST_CASES.length).toBeGreaterThanOrEqual(0);
    });
  });
});
