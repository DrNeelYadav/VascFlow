import { describe, it, expect } from "vitest";
import {
  MASTER_HARDWARE_CATALOG,
  getHardwareItemBySku,
  getHardwareByCategory,
  searchHardwareCatalog,
} from "../../app/lib/hardwareCatalog";

describe("SMS Hospital DSA Cath-Lab Master Hardware Catalog & Packaging Specifications", () => {
  it("verifies the pruned catalog contains strictly authentic items used in SMS Hospital DSA cath lab", () => {
    expect(MASTER_HARDWARE_CATALOG.length).toBe(30);

    // 1. Vascular Sheaths 4F-7F
    const sheaths = getHardwareByCategory("Access Sheaths");
    expect(sheaths.length).toBeGreaterThanOrEqual(4);
    expect(sheaths.some((s) => s.name.includes("4F"))).toBe(true);
    expect(sheaths.some((s) => s.name.includes("5F"))).toBe(true);
    expect(sheaths.some((s) => s.name.includes("6F"))).toBe(true);
    expect(sheaths.some((s) => s.name.includes("7F"))).toBe(true);

    // 2. Cobra C2 Catheter
    const diagnostic = getHardwareByCategory("Diagnostic Catheters");
    expect(diagnostic.some((c) => c.name.includes("Cobra") && c.name.includes("C2"))).toBe(true);

    // 3. Simmons 1 and 2 Catheters
    expect(diagnostic.some((c) => c.name.includes("Simmons") && c.name.includes("Sim 1"))).toBe(true);
    expect(diagnostic.some((c) => c.name.includes("Simmons") && c.name.includes("Sim 2"))).toBe(true);

    // 4. MPA (Multipurpose A) Catheters
    expect(diagnostic.some((c) => c.name.includes("Multipurpose") && c.name.includes("MPA-1"))).toBe(true);
    expect(diagnostic.some((c) => c.name.includes("Multipurpose") && c.name.includes("MPA-2"))).toBe(true);

    // 5. Pigtail Catheters
    expect(diagnostic.some((c) => c.name.includes("Pigtail"))).toBe(true);

    // 6. 0.035" Glidewire
    const wires = getHardwareByCategory("Guidewires");
    expect(wires.some((w) => w.name.includes("Radifocus") && w.specification.includes("0.035"))).toBe(true);

    // 7. Progreat Microcatheters
    const micro = getHardwareByCategory("Microcatheters");
    expect(micro.some((m) => m.name.includes("Progreat") && m.name.includes("2.7F"))).toBe(true);
    expect(micro.some((m) => m.name.includes("Progreat") && m.name.includes("2.0F"))).toBe(true);

    // 8. Tornado & Nester Microcoils
    const embolics = getHardwareByCategory("Embolics & Coils");
    expect(embolics.some((e) => e.name.includes("Tornado"))).toBe(true);
    expect(embolics.some((e) => e.name.includes("Nester"))).toBe(true);

    // 9. SEMS Biliary Stents
    const stents = getHardwareByCategory("Stents & Endoprostheses");
    expect(stents.some((s) => s.name.includes("SEMS") || s.name.includes("WallFlex"))).toBe(true);
    expect(stents.some((s) => s.name.includes("Zilver 635"))).toBe(true);

    // 10. VenaSeal Kit
    expect(embolics.some((e) => e.name.includes("VenaSeal"))).toBe(true);

    // 11. PVA Particles
    expect(embolics.some((e) => e.name.includes("PVA"))).toBe(true);

    // 12. Lipiodol
    expect(embolics.some((e) => e.name.includes("Lipiodol"))).toBe(true);

    // 13. Chiba Needles
    const needles = getHardwareByCategory("Needles & Biopsy");
    expect(needles.some((n) => n.name.includes("Chiba") && n.frenchOrGauge === "18G")).toBe(true);
    expect(needles.some((n) => n.name.includes("Chiba") && n.frenchOrGauge === "21G")).toBe(true);

    // 14. PTBD Catheters
    const drains = getHardwareByCategory("Drainage & Access");
    expect(drains.some((d) => d.name.includes("Biliary") || d.name.includes("Drainage"))).toBe(true);
  });

  it("verifies manufacturer-derived branding and packaging box styling exist on every item", () => {
    MASTER_HARDWARE_CATALOG.forEach((item) => {
      expect(item.id.trim().length).toBeGreaterThan(0);
      expect(item.sku.trim().length).toBeGreaterThan(0);
      expect(item.name.trim().length).toBeGreaterThan(0);
      expect(item.manufacturer.trim().length).toBeGreaterThan(0);
      expect(item.brandName.trim().length).toBeGreaterThan(0);
      expect(item.packagingType).toBeDefined();
      expect(item.productSilhouette).toBeDefined();

      expect(item.boxColor).toBeDefined();
      expect(item.boxColor.primary).toMatch(/^#[0-9A-Fa-f]{6}$/);
      expect(item.boxColor.secondary).toMatch(/^#[0-9A-Fa-f]{6}$/);
      expect(item.boxColor.text).toMatch(/^#[0-9A-Fa-f]{6}$/);

      expect(item.rmsclMatchingCode.trim().length).toBeGreaterThan(0);
      expect(item.tariffCappedInr).toBeGreaterThan(0);
      expect(item.currentStock).toBeGreaterThanOrEqual(0);
      expect(item.reorderLevel).toBeGreaterThanOrEqual(1);

      expect(item.brochureHighlights.length).toBeGreaterThanOrEqual(2);
      expect(item.clinicalIndications.trim().length).toBeGreaterThan(0);
      expect(item.ifuHighlights.trim().length).toBeGreaterThan(0);
    });
  });

  it("verifies searchHardwareCatalog retrieves items across name, sku, manufacturer, and brand", () => {
    const cookResults = searchHardwareCatalog("Cook");
    expect(cookResults.length).toBeGreaterThanOrEqual(3);

    const progreatResults = searchHardwareCatalog("Progreat");
    expect(progreatResults.length).toBeGreaterThanOrEqual(2);

    const coilResults = searchHardwareCatalog("Tornado");
    expect(coilResults.length).toBeGreaterThanOrEqual(1);
    expect(coilResults[0].productSilhouette).toBe("COIL");

    const needleResults = searchHardwareCatalog("Chiba");
    expect(needleResults.length).toBeGreaterThanOrEqual(2);
    expect(needleResults[0].productSilhouette).toBe("NEEDLE");

    const itemBySku = getHardwareItemBySku("RMSCL-SURG-SHEATH-6F");
    expect(itemBySku).toBeDefined();
    expect(itemBySku?.name).toContain("Radifocus");
  });

  it("verifies every single hardware item has a verified local image file on disk", () => {
    const fs = require("fs");
    const path = require("path");
    expect(MASTER_HARDWARE_CATALOG.length).toBe(30);

    MASTER_HARDWARE_CATALOG.forEach((item) => {
      expect(item.imageUrl).toBeDefined();
      expect(typeof item.imageUrl).toBe("string");
      expect(item.imageUrl).toMatch(/^\/images\/hardware\/.+/);

      const localRelPath = item.imageUrl?.replace(/^\//, "");
      const fullPath = path.resolve(__dirname, "../../public", localRelPath!);
      expect(fs.existsSync(fullPath)).toBe(true);
    });
  });
});
