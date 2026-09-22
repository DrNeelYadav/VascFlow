import { describe, it, expect } from "vitest";
import {
  IR_PROCEDURES_CATALOG,
  calculateRotterdam,
  calculateClichy,
  calculateMeld3,
  calculateChildPugh,
  calculateCigarroaMACD,
  calculateEgfrCkdEpi,
} from "../index";

describe("100 Interventional Radiology Procedures Catalog (Package Level)", () => {
  it("contains at least 100 procedures", () => {
    expect(IR_PROCEDURES_CATALOG).toBeDefined();
    expect(IR_PROCEDURES_CATALOG.length).toBeGreaterThanOrEqual(100);
  });

  it("ensures all procedure keys are unique non-empty strings", () => {
    const keys = IR_PROCEDURES_CATALOG.map((p) => p.key);
    const uniqueKeys = new Set(keys);
    expect(uniqueKeys.size).toBe(IR_PROCEDURES_CATALOG.length);
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
});
