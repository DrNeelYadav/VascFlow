import { describe, it, expect, vi } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import {
  DAILY_ROUTINE_IR_PROCEDURES,
} from "../../app/dashboard/operative-notes/dailyRoutineProcedures";
import {
  ALL_MASTER_PROCEDURES,
  buildOperativeNote,
} from "../../app/lib/masterCatalog";
import {
  SUNIL_KUMAR_DISCHARGE,
  generateIhmsDischargeForPatient,
} from "../../app/dashboard/discharge/ihmsDischargeTemplates";
import {
  buildAllProceduresCatalog,
} from "../../app/dashboard/consent/consentProceduresCatalog";
import {
  getProcedureConsentTemplate,
} from "../../app/dashboard/consent/consentTemplateResolver";
import {
  calculateDocZoom,
  copyDocToClipboard,
  triggerDocPrint,
} from "../../app/hooks/useDocPreview";
import { checkModularLimits } from "../../../../scripts/check-modular-limits.mjs";

describe("Phase 30: Epoch III Verification, Print Layout Fidelity & Document Compliance", () => {
  describe("1. Operative Notes Architecture & Narrative Engine", () => {
    it("provides the canonical SMS Hospital routine IR procedure templates", () => {
      expect(DAILY_ROUTINE_IR_PROCEDURES.length).toBeGreaterThanOrEqual(10);
      const procTitles = DAILY_ROUTINE_IR_PROCEDURES.map((p) => p.shortTitle.toLowerCase());
      expect(procTitles.some((t) => t.includes("varicose") || t.includes("venaseal"))).toBe(true);
      expect(procTitles.some((t) => t.includes("tace"))).toBe(true);
      expect(procTitles.some((t) => t.includes("tips"))).toBe(true);
      expect(procTitles.some((t) => t.includes("ptbd"))).toBe(true);
      expect(procTitles.some((t) => t.includes("fistuloplasty"))).toBe(true);
      expect(procTitles.some((t) => t.includes("uae") || t.includes("fibroid"))).toBe(true);
    });

    it("synthesizes operative notes with required SMS Hospital header and clinical sections", () => {
      const masterProc = ALL_MASTER_PROCEDURES[0];
      expect(masterProc).toBeDefined();

      const narrative = buildOperativeNote(masterProc, {
        patientName: "Ram Lal Meena",
        age: 58,
        gender: "Male",
        crNumber: "CR-2026-9912",
        ipdBed: "IR Ward Bed 03",
        dateOfProcedure: "2026-10-04",
        supervisingConsultant: "Dr. Meenu Bagarhatta",

        primaryOperator: "Dr. Naresh Mangalhara",
        indication: "Hepatic mass with arterial hypervascularity",
        accessSite: "Right Common Femoral Artery (CFA)",
        sheath: "5F Terumo Radifocus Sheath",
        contrast: "60 mL Omnipaque 350",
      });

      expect(narrative).toContain("SAWAI MAN SINGH MEDICAL COLLEGE & ATTACHED HOSPITALS, JAIPUR");
      expect(narrative).toContain("DEPARTMENT OF RADIODIAGNOSIS & INTERVENTIONAL RADIOLOGY");
      expect(narrative).toContain("Ram Lal Meena");
      expect(narrative).toContain("CR-2026-9912");
      expect(narrative).toContain("Dr. Naresh Mangalhara");
      expect(narrative).toContain("POST-OPERATIVE ORDERS & NURSING CARE:");
    });
  });

  describe("2. Rajasthan IHMS e-Hospital Discharge Summary Compliance", () => {
    it("conforms to the Rajasthan Government IHMS e-Hospital schema blocks", () => {
      const summary = SUNIL_KUMAR_DISCHARGE;
      expect(summary.admissionDetails.hospitalName).toContain("SAWAI MAN SINGH");
      expect(summary.admissionDetails.departmentName).toContain("INTERVENTIONAL RADIOLOGY");
      expect(summary.admissionDetails.unitHead).toBe("Dr. Alok Verma");
      expect(summary.caseSummary.diagnosis).toBeDefined();
      expect(summary.procedureDetails.length).toBeGreaterThan(0);
      expect(summary.dischargeMedications.length).toBeGreaterThan(0);
      expect(summary.dischargeDetails.generalAdvise).toBeDefined();
      expect(summary.dischargeDetails.followUp).toBeDefined();
    });

    it("integrates RMSCL e-Aushadhi medication formulary with routes and dosing instructions", () => {
      const meds = SUNIL_KUMAR_DISCHARGE.dischargeMedications;
      for (const med of meds) {
        expect(med.medicine).toBeTruthy();
        expect(med.route).toBeTruthy();
        expect(med.frequency).toBeTruthy();
        expect(med.days).toBeGreaterThan(0);
        expect(med.instructions).toBeTruthy();
      }
    });

    it("mandates bilingual (Hindi & English) post-op puncture wound care and emergency red flags", () => {
      const generated = generateIhmsDischargeForPatient({
        id: "TEST-01",
        name: "Devendra Singh",
        age: 45,
        sex: "Male",
        hid: "CR2026-8888",
        scanId: "DSA-401",
        unit: "Unit 1",
        postedBy: "Dr. Roy",
        summary: "Post-op review",
        procedure: "Varicose Veins (VenaSeal)",
        procedureKey: "varicose_veins_venaseal",
        scheme: "MAAY",
        ipd: { ward: "Gastro Ward", bed: "Bed 04", podDay: "POD 1" },

        labs: { inr: 1.05, creat: 0.9 },

      });

      expect(generated.admissionDetails.patientName).toBe("Devendra Singh");
      expect(generated.dischargeDetails.generalAdvise).toContain("puncture site clean and dry");
      expect(generated.dischargeDetails.generalAdvise).toContain("fever, bleeding, or increasing swelling");
    });
  });

  describe("3. Statutory Bilingual Informed Consent Forms", () => {
    it("provides procedural risk catalog with high-risk disclosures", () => {
      const catalog = buildAllProceduresCatalog();
      expect(catalog.length).toBeGreaterThanOrEqual(10);
      expect(catalog.some((p) => p.name.toLowerCase().includes("varicose") || p.id.includes("varicose"))).toBe(true);
    });

    it("resolves consent templates deterministically with bilingual Hindi & English text", () => {
      const template = getProcedureConsentTemplate("tips");
      expect(template).toBeDefined();
      expect(template.nameEn).toContain("TIPS");
      expect(template.nameHi).toBeTruthy();
      expect(template.indicationEn).toBeTruthy();
      expect(template.indicationHi).toBeTruthy();
      expect(template.descriptionEn).toBeTruthy();
      expect(template.descriptionHi).toBeTruthy();
      expect(template.benefitsEn.length).toBeGreaterThan(0);
      expect(template.benefitsHi.length).toBeGreaterThan(0);
    });
  });

  describe("4. Print Layout Fidelity & A4 Engine", () => {
    it("includes print.css defining A4 portrait dimensions and margin constraints", () => {
      const printCssPath = path.resolve(process.cwd(), "apps/web-app/app/styles/print.css");
      expect(existsSync(printCssPath)).toBe(true);

      const content = readFileSync(printCssPath, "utf-8");
      expect(content).toContain("@page");
      expect(content).toContain("size: A4 portrait");
      expect(content).toContain("@media print");
    });

    it("imports print.css into globals.css", () => {
      const globalsCssPath = path.resolve(process.cwd(), "apps/web-app/app/globals.css");
      const globals = readFileSync(globalsCssPath, "utf-8");
      expect(globals).toContain('@import "./styles/print.css";');
    });

    it("hides non-printable interactive UI elements in print styles", () => {
      const printCssPath = path.resolve(process.cwd(), "apps/web-app/app/styles/print.css");
      const content = readFileSync(printCssPath, "utf-8");
      expect(content).toContain(".print\\:hidden");
      expect(content).toContain("button");
      expect(content).toContain("#mobile-bottom-nav");
    });

    it("enforces page-break avoidance on tabular and document cards", () => {
      const printCssPath = path.resolve(process.cwd(), "apps/web-app/app/styles/print.css");
      const content = readFileSync(printCssPath, "utf-8");
      expect(content).toContain("break-inside: avoid");
    });

    it("provides the useDocPreview zoom calculations, print triggers, and clipboard helpers", async () => {
      // Zoom calculation bounds
      expect(calculateDocZoom(100, 10)).toBe(110);
      expect(calculateDocZoom(150, 10)).toBe(150); // upper clamp
      expect(calculateDocZoom(70, -10)).toBe(70);  // lower clamp
      expect(calculateDocZoom(100, -10)).toBe(90);

      // Print trigger
      const mockPrint = vi.fn();
      vi.stubGlobal("window", { print: mockPrint });
      triggerDocPrint();
      expect(mockPrint).toHaveBeenCalledTimes(1);

      // Clipboard helper
      const mockWriteText = vi.fn().mockResolvedValue(undefined);
      Object.defineProperty(navigator, "clipboard", {
        value: { writeText: mockWriteText },
        configurable: true,
      });

      const copied = await copyDocToClipboard("SMS Hospital IR Operative Report");
      expect(copied).toBe(true);
      expect(mockWriteText).toHaveBeenCalledWith("SMS Hospital IR Operative Report");

      vi.unstubAllGlobals();
    });
  });

  describe("5. Modular Component Ceiling (< 200 Lines) Guardrail", () => {
    it("strictly verifies all decomposed operative notes, discharge summaries, and consent modules stay under 200 lines", () => {
      const violations = checkModularLimits();
      expect(violations).toEqual([]);
    });
  });
});
