import { describe, it, expect } from "vitest";
import {
  IO_AND_THORACIC_PROTOCOLS,
  getIoAndThoracicProtocolByKey,
  IRClinicalProtocol,
} from "../protocols/ioAndThoracic";

describe("IO & Thoracoabdominal Protocols Architecture", () => {
  const EXPECTED_KEYS = [
    "tare_y90_radioembolization",
    "deb_tace",
    "brto_parto_gastric_varices",
    "portal_vein_embolization_pve",
    "ptbd_biliary_stenting",
    "percutaneous_cholecystostomy",
    "pulmonary_avm_embo",
    "pe_thrombectomy_cdt",
    "tevar_aortic_dissection",
    "svc_stenting",
  ];

  it("contains exactly 10 comprehensive protocols", () => {
    expect(IO_AND_THORACIC_PROTOCOLS).toBeDefined();
    expect(IO_AND_THORACIC_PROTOCOLS.length).toBe(10);
  });

  it("ensures all 10 expected keys are present and unique", () => {
    const keys = IO_AND_THORACIC_PROTOCOLS.map((p) => p.key);
    expect(new Set(keys).size).toBe(10);
    EXPECTED_KEYS.forEach((expectedKey) => {
      expect(keys).toContain(expectedKey);
    });
  });

  it("ensures all protocols conform strictly to IRClinicalProtocol schema with zero empty values", () => {
    IO_AND_THORACIC_PROTOCOLS.forEach((p: IRClinicalProtocol) => {
      expect(p.key).toBeTruthy();
      expect(p.title).toBeTruthy();
      expect(p.organSystem).toBeTruthy();
      expect(p.modality).toBe("XA");
      expect(p.clinicalCriteria.length).toBeGreaterThan(20);
      expect(p.recommendedLabs.length).toBeGreaterThanOrEqual(3);
      expect(p.specialInvestigations.length).toBeGreaterThanOrEqual(2);

      // Checklists
      expect(p.preScanAnatomyChecklist.length).toBeGreaterThanOrEqual(3);
      p.preScanAnatomyChecklist.forEach((item) => {
        expect(item.id).toBeTruthy();
        expect(item.label).toBeTruthy();
        expect(item.options.length).toBeGreaterThanOrEqual(2);
        expect(item.options).toContain(item.defaultSelected);
      });

      // Hardware requisition
      expect(p.hardwareRequisition.length).toBeGreaterThanOrEqual(4);
      p.hardwareRequisition.forEach((hw) => {
        expect(hw.id).toBeTruthy();
        expect(hw.item).toBeTruthy();
        expect(hw.spec).toBeTruthy();
        expect(typeof hw.required).toBe("boolean");
      });

      // Post-op care
      expect(p.postOpCare.drugs.length).toBeGreaterThanOrEqual(2);
      expect(p.postOpCare.monitoring.length).toBeGreaterThanOrEqual(2);
      expect(p.postOpCare.dischargeCriteria.length).toBeGreaterThan(20);
    });
  });

  it("correctly retrieves protocols using getIoAndThoracicProtocolByKey", () => {
    EXPECTED_KEYS.forEach((key) => {
      const protocol = getIoAndThoracicProtocolByKey(key);
      expect(protocol).toBeDefined();
      expect(protocol?.key).toBe(key);
    });

    expect(getIoAndThoracicProtocolByKey("non_existent_key")).toBeUndefined();
  });
});
