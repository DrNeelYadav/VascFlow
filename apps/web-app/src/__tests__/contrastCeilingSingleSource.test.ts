import { describe, it, expect } from "vitest";
import { calculateMacd } from "../../app/lib/calculators";

/**
 * Single-source-of-truth guardrail.
 *
 * There must be exactly ONE contrast-ceiling implementation. Before this test
 * existed, seven surfaces recomputed `(5 * weightKg) / creatinine` with no
 * 300 mL cap and, in four cases, `creatinine || 1.0` - so an unmeasured renal
 * function silently authorised a full contrast dose.
 *
 * These cases pin the matrix every clinical surface must agree on. If a
 * divergent implementation reappears, the scanner rule
 * `clinical/duplicate-dose-formula` fires and this test documents the truth.
 */
describe("Contrast ceiling: canonical engine is the only source of truth", () => {
  // weight, creatinine, egfr, expected ceiling, label
  const MATRIX: Array<[number, number, number | undefined, number, string]> = [
    [70, 1.0, undefined, 300, "normal renal function hits the 300 mL hard cap"],
    [80, 0.6, 110, 300, "low creatinine still capped at 300 mL"],
    [70, 1.8, 24, 40, "eGFR 24 forces the 40 mL severe-impairment cap"],
    [80, 3.2, undefined, 40, "Scr 3.2 forces the 40 mL severe-impairment cap"],
    [70, 2.0, 40, 175, "Scr 2.0 alone does NOT trigger the 40 mL cap"],
  ];

  it.each(MATRIX)(
    "70kg/Cr scenarios resolve to the guarded ceiling (%s)",
    (weight, cr, egfr, expected, label) => {
      const res = calculateMacd(weight, cr, 0, egfr);
      expect(res.valid, label).toBe(true);
      expect(res.macdMl, label).toBe(expected);
    }
  );

  it("never returns a valid ceiling from an unmeasured creatinine", () => {
    // The defect that motivated this suite: a missing value resolved to a
    // normal-appearing number instead of blocking the dose entry.
    for (const cr of [0, -1, NaN, undefined as unknown as number]) {
      const res = calculateMacd(70, cr, 50);
      expect(res.valid, `Cr=${cr} must be invalid`).toBe(false);
      expect(res.macdMl, `Cr=${cr} must not produce a usable ceiling`).toBe(0);
    }
  });

  it("flags an exceeded dose rather than silently allowing it", () => {
    const res = calculateMacd(70, 1.0, 300);
    expect(res.isExceeded).toBe(true);
    expect(res.alertLevel).not.toBe("safe");
  });
});
