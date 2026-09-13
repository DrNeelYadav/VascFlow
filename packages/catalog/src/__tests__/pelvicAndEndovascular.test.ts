import { describe, it, expect } from "vitest";
import {
  PELVIC_AND_ENDOVASCULAR_PROTOCOLS,
  getPelvicAndEndovascularProtocolByKey,
} from "../protocols/pelvicAndEndovascular";

describe("Pelvic & Endovascular Protocols Suite", () => {
  const EXPECTED_KEYS = [
    "lower_gi_bleeding_embo",
    "splenic_artery_embo",
    "percutaneous_gastrostomy_prg",
    "pph_uterine_embo",
    "pcn_ureteral_stenting",
    "renal_aml_embo",
    "varicocele_embo",
    "ovarian_vein_pelvic_congestion",
    "evar_abdominal_aneurysm",
    "dialysis_avf_fistuloplasty",
  ];

  it("contains exactly 10 clinical protocols", () => {
    expect(PELVIC_AND_ENDOVASCULAR_PROTOCOLS).toBeDefined();
    expect(PELVIC_AND_ENDOVASCULAR_PROTOCOLS.length).toBe(10);
  });

  it("contains all 10 expected procedure keys without duplication", () => {
    const keys = PELVIC_AND_ENDOVASCULAR_PROTOCOLS.map((p) => p.key);
    expect(new Set(keys).size).toBe(10);
    EXPECTED_KEYS.forEach((expectedKey) => {
      expect(keys).toContain(expectedKey);
    });
  });

  it("ensures all protocols conform to IRClinicalProtocol interface and have zero placeholders", () => {
    const validOrganSystems = new Set([
      "Liver & Hepatobiliary",
      "Thoracic & Pulmonary",
      "Gastrointestinal & Mesenteric",
      "Peripheral Vascular",
      "Aortic & Complex",
      "Venous & Dialysis Access",
      "Pelvic & Genitourinary",
      "Musculoskeletal & Pain",
      "Neurovascular & Head/Neck",
      "Lymphatic & Soft Tissue",
    ]);

    PELVIC_AND_ENDOVASCULAR_PROTOCOLS.forEach((protocol) => {
      // Basic fields
      expect(protocol.key.trim().length).toBeGreaterThan(0);
      expect(protocol.title.trim().length).toBeGreaterThan(0);
      expect(validOrganSystems.has(protocol.organSystem)).toBe(true);
      expect(protocol.modality).toBe("XA");
      expect(protocol.clinicalCriteria.trim().length).toBeGreaterThan(20);

      // Labs & investigations
      expect(protocol.recommendedLabs.length).toBeGreaterThan(0);
      protocol.recommendedLabs.forEach((lab) => {
        expect(lab.trim().length).toBeGreaterThan(0);
      });

      expect(protocol.specialInvestigations.length).toBeGreaterThan(0);
      protocol.specialInvestigations.forEach((inv) => {
        expect(inv.trim().length).toBeGreaterThan(0);
      });

      // Anatomy Checklist
      expect(protocol.preScanAnatomyChecklist.length).toBeGreaterThanOrEqual(4);
      protocol.preScanAnatomyChecklist.forEach((item) => {
        expect(item.id.trim().length).toBeGreaterThan(0);
        expect(item.label.trim().length).toBeGreaterThan(0);
        expect(item.options.length).toBeGreaterThanOrEqual(2);
        expect(item.options).toContain(item.defaultSelected);
      });

      // Hardware Requisition
      expect(protocol.hardwareRequisition.length).toBeGreaterThanOrEqual(5);
      protocol.hardwareRequisition.forEach((hw) => {
        expect(hw.id.trim().length).toBeGreaterThan(0);
        expect(hw.item.trim().length).toBeGreaterThan(0);
        expect(hw.spec.trim().length).toBeGreaterThan(0);
        expect(typeof hw.required).toBe("boolean");
      });

      // Post-Op Care
      expect(protocol.postOpCare.drugs.length).toBeGreaterThan(0);
      protocol.postOpCare.drugs.forEach((drug) => {
        expect(drug.trim().length).toBeGreaterThan(0);
      });

      expect(protocol.postOpCare.monitoring.length).toBeGreaterThan(0);
      protocol.postOpCare.monitoring.forEach((mon) => {
        expect(mon.trim().length).toBeGreaterThan(0);
      });

      expect(protocol.postOpCare.dischargeCriteria.trim().length).toBeGreaterThan(20);

      // Verify no placeholders across entire JSON representation
      const jsonString = JSON.stringify(protocol).toLowerCase();
      expect(jsonString).not.toContain("todo");
      expect(jsonString).not.toContain("tbd");
      expect(jsonString).not.toContain("placeholder");
      expect(jsonString).not.toContain("lorem ipsum");
    });
  });

  it("retrieves individual protocols by key via getPelvicAndEndovascularProtocolByKey", () => {
    EXPECTED_KEYS.forEach((key) => {
      const protocol = getPelvicAndEndovascularProtocolByKey(key);
      expect(protocol).toBeDefined();
      expect(protocol?.key).toBe(key);
    });

    const unknown = getPelvicAndEndovascularProtocolByKey("non_existent_protocol");
    expect(unknown).toBeUndefined();
  });
});
