import { describe, it, expect } from "vitest";
import { AUTHENTIC_SMS_MASTER_CASES } from "../../app/lib/realData/smsMasterAnalysisCases";
import {
  PARSED_ALL_DSA_CASES,
  UNIFIED_CATH_LAB_DATASET,
  PARSED_2025_CASES,
  PARSED_2026_CASES,
} from "../../app/lib/realData/unifiedCathLabDataset";

describe("Authentic Cath-Lab Master Dataset & Logbook Verification", () => {
  it("loads all 997 authentic DSA cases directly from Master Analysis", () => {
    expect(AUTHENTIC_SMS_MASTER_CASES.length).toBe(997);
  });

  it("verifies every case in AUTHENTIC_SMS_MASTER_CASES has valid clinical fields", () => {
    AUTHENTIC_SMS_MASTER_CASES.forEach((c, idx) => {
      expect(c.dsaNo).toBeDefined();
      expect(c.patientName.trim().length).toBeGreaterThan(0);
      expect(c.date).toMatch(/^\d{2}\.\d{2}\.\d{4}$/);
      expect(c.age).toBeGreaterThanOrEqual(1);
      expect(["Male", "Female"]).toContain(c.gender);
      expect(c.unit.trim().length).toBeGreaterThan(0);
      expect(c.crNumber.trim().length).toBeGreaterThan(0);
      expect(["MAAY", "RGHS", "PAID"]).toContain(c.schemeType);
      expect(c.procedureName.trim().length).toBeGreaterThan(0);
      expect(c.diagnosis.trim().length).toBeGreaterThan(0);
    });
  });

  it("verifies PARSED_ALL_DSA_CASES contains 1090 cases across multiple recorded years", () => {
    expect(PARSED_ALL_DSA_CASES.length).toBe(1090);
    const years = new Set(PARSED_ALL_DSA_CASES.map((c) => c.year));
    expect(years.has(2023)).toBe(true);
    expect(years.has(2024)).toBe(true);
    expect(years.has(2025)).toBe(true);
    expect(years.has(2026)).toBe(true);
  });

  it("verifies UNIFIED_CATH_LAB_DATASET includes all recorded years and exceeds 990 cases", () => {
    expect(UNIFIED_CATH_LAB_DATASET.length).toBeGreaterThanOrEqual(997);
    const years = new Set(UNIFIED_CATH_LAB_DATASET.map((c) => c.year));
    expect(years.has(2023)).toBe(true);
    expect(years.has(2024)).toBe(true);
    expect(years.has(2025)).toBe(true);
    expect(years.has(2026)).toBe(true);
  });
});
