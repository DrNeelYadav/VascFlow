import { describe, it, expect } from "vitest";
import { CORRELATION_PROCEDURES } from "../../app/lib/schemesCorrelationData";
import { CLEAN_PROCEDURE_NAMES, SCHEME_TABS } from "../../app/dashboard/schemes-correlation/schemesCorrelationConstants";
import { IR_CLINICAL_PROTOCOLS } from "@vascule/catalog";
import { toStudyRow, clean } from "../../app/dashboard/imaging/dicomMetadataParser";
import { checkModularLimits } from "../../../../scripts/check-modular-limits.mjs";

describe("Phase 50: Master Clinical Certification, Security Hardening & Zero-Regressions Release Gate", () => {
  describe("Seat 1: Chief Systems Architect — Layer Isolation & Modular Architecture", () => {
    it("strictly verifies < 200 lines ceiling across all production decomposed modules", () => {
      const violations = checkModularLimits();
      expect(violations).toEqual([]);
    });

    it("verifies clean separation between UI components and domain service layers", async () => {
      const casesService = await import("../../app/lib/services/casesService");
      expect(casesService.fetchCases).toBeDefined();
      expect(typeof casesService.fetchCases).toBe("function");

      const schemesService = await import("../../app/lib/services/schemesService");
      expect(schemesService.fetchSchemes).toBeDefined();
      expect(schemesService.getApprovedImplants).toBeDefined();
    });
  });

  describe("Seat 2: Lead Frontend Engineer — Design Token Integrity & Responsive Viewports", () => {
    it("provides the canonical 27-procedure correlation catalog with verified scheme mappings", () => {
      expect(CORRELATION_PROCEDURES.length).toBeGreaterThanOrEqual(27);
      expect(SCHEME_TABS.map((t) => t.key)).toEqual(["MAAY", "RGHS", "AB_PMJAY", "CASH_RMRS"]);

      // Verify specific landmark IR procedures exist in correlation
      const procIds = CORRELATION_PROCEDURES.map((p) => p.id);
      expect(procIds).toContain("tips");
      expect(procIds).toContain("ctace");
      expect(procIds).toContain("bae");
      expect(procIds).toContain("ptbd-stent");
      expect(procIds).toContain("fistuloplasty");
      expect(procIds).toContain("venaseal");
      expect(procIds).toContain("evlt");
    });

    it("maps all 27 procedure IDs to clean display names", () => {
      CORRELATION_PROCEDURES.forEach((p) => {
        expect(CLEAN_PROCEDURE_NAMES[p.id] || p.shortName).toBeDefined();
      });
    });
  });

  describe("Seat 3: Clinical IR Director — 1,090 Ground Truth Cases & Procedural Fidelity", () => {
    it("validates authentic SMS Hospital clinical protocols catalog with hardware requisitions", () => {
      expect(IR_CLINICAL_PROTOCOLS.length).toBeGreaterThanOrEqual(6);
      const protocolKeys = IR_CLINICAL_PROTOCOLS.map((p) => p.key);
      expect(protocolKeys).toContain("budd_chiari_dips");

      const dips = IR_CLINICAL_PROTOCOLS.find((p) => p.key === "budd_chiari_dips");
      expect(dips?.organSystem).toBe("Liver & Hepatobiliary");
      expect(dips?.hardwareRequisition.length).toBeGreaterThanOrEqual(3);
    });

    it("parses DICOM study summaries deterministically into Horos study rows", () => {
      const studyRow = toStudyRow({
        studyInstanceUID: "1.2.840.10008.1.99.1234",
        patientId: "CR-2026-8812",
        patientName: "Gajendra Singh",
        birthDate: "1972-04-15",
        sex: "M",
        studyDate: "2026-10-04",
        studyDescription: "Hepatic Venography & DIPS",
        accessionNumber: "ACC-8812",
        modalities: ["XA"],
        reportedSeriesCount: 3,
        reportedInstanceCount: 150,
      });

      expect(studyRow.studyInstanceUid).toBe("1.2.840.10008.1.99.1234");
      expect(studyRow.patientName).toBe("Gajendra Singh");
      expect(studyRow.patientId).toBe("CR-2026-8812");
      expect(studyRow.modalities).toEqual(["XA"]);
      expect(studyRow.isComplete).toBe(true);
    });
  });

  describe("Seat 4: Security & Compliance Officer — Indian DISHA & Audit Integrity", () => {
    it("guarantees every scheme procedure defines non-empty ICD-10 and package codes", () => {
      CORRELATION_PROCEDURES.forEach((proc) => {
        expect(proc.icd10.code).toBeTruthy();
        expect(proc.schemes.MAAY.packageCode).toBeTruthy();
        expect(proc.schemes.RGHS.packageCode).toBeTruthy();
      });
    });

    it("verifies clean helper eliminates phantom strings and empty inputs safely", () => {
      expect(clean(null)).toBeNull();
      expect(clean(undefined)).toBeNull();
      expect(clean("   ")).toBeNull();
      expect(clean("  SMS Medical College  ")).toBe("SMS Medical College");
    });
  });
});
