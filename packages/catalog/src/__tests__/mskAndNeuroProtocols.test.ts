import { describe, it, expect } from "vitest";
import { MSK_AND_NEURO_PROTOCOLS } from "../protocols/mskAndNeuro";

describe("MSK & Neurovascular IR Protocols Suite", () => {
  it("contains exactly 10 specialized procedures", () => {
    expect(MSK_AND_NEURO_PROTOCOLS).toBeDefined();
    expect(MSK_AND_NEURO_PROTOCOLS.length).toBe(10);
  });

  it("contains all 10 expected procedure keys", () => {
    const expectedKeys = [
      "subscapular_shoulder_embo",
      "genicular_artery_embo",
      "vertebroplasty_kyphoplasty",
      "msk_tumor_ablation",
      "chronic_tendinopathy_embo",
      "parietal_cranial_davf_embo",
      "carotid_stenting_cas",
      "stroke_thrombectomy",
      "epistaxis_sphenopalatine_embo",
      "head_neck_paraganglioma_embo",
    ];

    const actualKeys = MSK_AND_NEURO_PROTOCOLS.map((p) => p.key);
    expect(actualKeys).toEqual(expectedKeys);
  });

  it("ensures all procedures have valid organSystem and modality XA", () => {
    const validOrganSystems = [
      "Musculoskeletal & Pain",
      "Neurovascular & Head/Neck",
    ];

    MSK_AND_NEURO_PROTOCOLS.forEach((protocol) => {
      expect(validOrganSystems).toContain(protocol.organSystem);
      expect(protocol.modality).toBe("XA");
      expect(protocol.title.length).toBeGreaterThan(5);
      expect(protocol.clinicalCriteria.length).toBeGreaterThan(20);
    });
  });

  it("verifies pre-scan anatomy checklists and defaultSelected consistency", () => {
    MSK_AND_NEURO_PROTOCOLS.forEach((protocol) => {
      expect(protocol.preScanAnatomyChecklist.length).toBeGreaterThanOrEqual(3);
      protocol.preScanAnatomyChecklist.forEach((item) => {
        expect(item.id).toBeTruthy();
        expect(item.label).toBeTruthy();
        expect(item.options.length).toBeGreaterThanOrEqual(2);
        expect(item.options).toContain(item.defaultSelected);
      });
    });
  });

  it("verifies hardware requisition specifications and requirements", () => {
    MSK_AND_NEURO_PROTOCOLS.forEach((protocol) => {
      expect(protocol.hardwareRequisition.length).toBeGreaterThanOrEqual(4);
      const hasRequired = protocol.hardwareRequisition.some((h) => h.required === true);
      expect(hasRequired).toBe(true);

      protocol.hardwareRequisition.forEach((hw) => {
        expect(hw.id).toBeTruthy();
        expect(hw.item).toBeTruthy();
        expect(hw.spec.length).toBeGreaterThan(5);
        expect(typeof hw.required).toBe("boolean");
      });
    });
  });

  it("verifies post-op care plans have comprehensive guidance with zero placeholders", () => {
    MSK_AND_NEURO_PROTOCOLS.forEach((protocol) => {
      expect(protocol.postOpCare.drugs.length).toBeGreaterThanOrEqual(2);
      expect(protocol.postOpCare.monitoring.length).toBeGreaterThanOrEqual(2);
      expect(protocol.postOpCare.dischargeCriteria.length).toBeGreaterThan(20);

      // Check for zero placeholders
      const jsonString = JSON.stringify(protocol);
      expect(jsonString).not.toMatch(/\b(placeholder|tbd|todo|n\/a)\b/i);
    });
  });
});
