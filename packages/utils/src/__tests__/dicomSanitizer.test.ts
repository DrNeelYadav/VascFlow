import { describe, it, expect } from "vitest";
import {
  deidentifyDicomDataset,
  isPatientIdentityTag,
  isAcquisitionPhysicsTag,
  extractAcquisitionPhysics,
} from "../dicomSanitizer";

describe("DICOM De-identification and PHI Sanitizer Suite", () => {
  describe("1. Tag Classification", () => {
    it("identifies patient identity tags (0010,0010 to 0010,0040+)", () => {
      expect(isPatientIdentityTag("00100010")).toBe(true);
      expect(isPatientIdentityTag("(0010,0010)")).toBe(true);
      expect(isPatientIdentityTag("0010,0020")).toBe(true);
      expect(isPatientIdentityTag("PatientName")).toBe(true);
      expect(isPatientIdentityTag("PatientBirthDate")).toBe(true);
      expect(isPatientIdentityTag("PatientSex")).toBe(true);
      expect(isPatientIdentityTag("00100040")).toBe(true);
      expect(isPatientIdentityTag("OtherPatientIDs")).toBe(true);
    });

    it("does not classify non-identity tags as patient identity", () => {
      expect(isPatientIdentityTag("00080060")).toBe(false); // Modality
      expect(isPatientIdentityTag("0020000D")).toBe(false); // StudyInstanceUID
      expect(isPatientIdentityTag("KVP")).toBe(false);
      expect(isPatientIdentityTag("00180060")).toBe(false);
    });

    it("identifies acquisition physics tags (0018,xxxx)", () => {
      expect(isAcquisitionPhysicsTag("00180060")).toBe(true); // KVP
      expect(isAcquisitionPhysicsTag("(0018,1151)")).toBe(true); // TubeCurrent
      expect(isAcquisitionPhysicsTag("00181150")).toBe(true); // ExposureTime
      expect(isAcquisitionPhysicsTag("KVP")).toBe(true);
      expect(isAcquisitionPhysicsTag("TubeCurrent")).toBe(true);
      expect(isAcquisitionPhysicsTag("CollimatorShape")).toBe(true);
      expect(isAcquisitionPhysicsTag("TableMotion")).toBe(true);
    });
  });

  describe("2. De-identification and PHI Removal", () => {
    const rawDicomDataset = {
      // Patient Identity (0010,xxxx)
      "00100010": "Sharma^Ramesh^K",
      PatientName: "Sharma^Ramesh^K",
      "00100020": "SMS-2026-994821",
      PatientID: "SMS-2026-994821",
      "00100030": "19680514",
      PatientBirthDate: "19680514",
      "00100040": "M",
      PatientSex: "M",
      PatientAddress: "Jaipur, Rajasthan",
      OtherPatientIDs: "AADHAAR-8839-2918",

      // Study / Series Metadata
      StudyInstanceUID: "1.2.840.10008.5.1.4.1.1.2.99128",
      SeriesDescription: "Hepatic Angiogram Run 3",
      Modality: "XA",

      // Acquisition Physics (0018,xxxx)
      "00180060": 80,
      KVP: 80,
      "00181151": 320,
      XRayTubeCurrent: 320,
      "00181150": 125,
      ExposureTime: 125,
      "00181152": 40,
      ExposureInuAs: 40,
      "00181160": "COPPER_0.2MM",
      FilterType: "COPPER_0.2MM",
      "00181110": 1050,
      DistanceSourceToDetector: 1050,
      "00181130": 850,
      TableHeight: 850,
      "00181700": "RECTANGULAR",
      CollimatorShape: "RECTANGULAR",
    };

    it("strips patient identity and replaces with anonymous pseudonym", () => {
      const result = deidentifyDicomDataset(rawDicomDataset);

      // Verify patient identifiers are scrubbed
      expect(result.sanitizedDataset.PatientName).toBe("ANONYMIZED^IR");
      expect(result.sanitizedDataset["00100010"]).toBe("ANONYMIZED^IR");
      expect(result.sanitizedDataset.PatientID).toMatch(/^ANON-IR-/);
      expect(result.sanitizedDataset["00100020"]).toMatch(/^ANON-IR-/);
      expect(result.sanitizedDataset.PatientBirthDate).toBeUndefined();
      expect(result.sanitizedDataset["00100030"]).toBeUndefined();
      expect(result.sanitizedDataset.PatientAddress).toBeUndefined();
      expect(result.sanitizedDataset.OtherPatientIDs).toBeUndefined();

      // Verify custom or generated pseudonym
      expect(result.pseudonym).toMatch(/^ANON-IR-/);
    });

    it("completely removes tags if strategy is 'strip'", () => {
      const result = deidentifyDicomDataset(rawDicomDataset, { strategy: "strip" });

      expect(result.sanitizedDataset.PatientName).toBeUndefined();
      expect(result.sanitizedDataset["00100010"]).toBeUndefined();
      expect(result.sanitizedDataset.PatientID).toBeUndefined();
      expect(result.sanitizedDataset["00100020"]).toBeUndefined();
    });

    it("preserves 100% of acquisition physics (0018,xxxx)", () => {
      const result = deidentifyDicomDataset(rawDicomDataset);

      expect(result.sanitizedDataset.KVP).toBe(80);
      expect(result.sanitizedDataset["00180060"]).toBe(80);
      expect(result.sanitizedDataset.XRayTubeCurrent).toBe(320);
      expect(result.sanitizedDataset["00181151"]).toBe(320);
      expect(result.sanitizedDataset.ExposureTime).toBe(125);
      expect(result.sanitizedDataset["00181150"]).toBe(125);
      expect(result.sanitizedDataset.FilterType).toBe("COPPER_0.2MM");
      expect(result.sanitizedDataset.DistanceSourceToDetector).toBe(1050);
      expect(result.sanitizedDataset.CollimatorShape).toBe("RECTANGULAR");
      expect(result.physicsTagsPreserved.length).toBeGreaterThan(0);
    });

    it("allows custom pseudonym specification for registry linkability", () => {
      const result = deidentifyDicomDataset(rawDicomDataset, {
        pseudonym: "ANON-REGISTRY-2026-0042",
      });
      expect(result.pseudonym).toBe("ANON-REGISTRY-2026-0042");
      expect(result.sanitizedDataset.PatientID).toBe("ANON-REGISTRY-2026-0042");
    });
  });

  describe("3. Acquisition Physics Extraction Helper", () => {
    it("extracts structured physics metrics accurately", () => {
      const dataset = {
        KVP: "75",
        XRayTubeCurrent: "250",
        ExposureTime: "100",
        ExposureInuAs: "25",
        FilterType: "ALUMINUM",
        DistanceSourceToDetector: "1000",
        TableHeight: "800",
        CollimatorShape: "CIRCULAR",
      };

      const physics = extractAcquisitionPhysics(dataset);
      expect(physics.kvp).toBe(75);
      expect(physics.tubeCurrentMa).toBe(250);
      expect(physics.exposureTimeMs).toBe(100);
      expect(physics.exposureMas).toBe(25);
      expect(physics.filterType).toBe("ALUMINUM");
      expect(physics.sourceToDetectorDistanceMm).toBe(1000);
      expect(physics.tableHeightMm).toBe(800);
      expect(physics.collimatorShape).toBe("CIRCULAR");
    });
  });
});
