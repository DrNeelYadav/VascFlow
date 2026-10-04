import { describe, it, expect } from "vitest";
import { checkModularLimits } from "../../../../scripts/check-modular-limits.mjs";

describe("Phase 8: Modular Component De-Bloating Guardrails (< 200 Lines)", () => {
  it("enforces that decomposed UI components and hooks stay strictly under 200 lines", () => {
    const violations = checkModularLimits();
    expect(violations).toEqual([]);
  });
});
