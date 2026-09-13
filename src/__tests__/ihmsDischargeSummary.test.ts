import { describe, it, expect } from "vitest";
import {
  SUNIL_KUMAR_DISCHARGE,
  ANJUM_NISHA_DISCHARGE,
  generateIhmsDischargeForPatient,
  type IhmsDischargeSummaryData,
} from "../../apps/web-app/app/dashboard/discharge/ihmsDischargeTemplates";

describe("Rajasthan IHMS e-Hospital Discharge Summary Studio Suite", () => {
  describe("Authentic SMS Hospital Discharge Records Verification", () => {
    it("validates Sunil Kumar (Varicose Veins Venaseal Glue Embolization) record schema", () => {
      const card = SUNIL_KUMAR_DISCHARGE;
      expect(card.admissionDetails.hospitalName).toBe("SAWAI MAN SINGH HOSPITAL JAIPUR");
      expect(card.admissionDetails.departmentName).toBe("INTERVENTIONAL RADIOLOGY");
      expect(card.admissionDetails.unitHead).toBe("DR MEENU BAGARHATTA");
      expect(card.admissionDetails.unitName).toBe("UNIT I");
      expect(card.admissionDetails.hid).toBe("150223147650888");
      expect(card.admissionDetails.admissionNo).toBe("A/SMSH/26/109750");
      expect(card.admissionDetails.patientCategory).toBe("MAAY");
      expect(card.admissionDetails.wardBed).toBe("OLD GASTRO WARD/IR-1");

      // ICD & Diagnosis
      expect(card.caseSummary.icdDiagnosis).toContain("I83");
      expect(card.caseSummary.diagnosis).toContain("Varicose veins");

      // Physical Exam
      expect(card.physicalExam.atAdmission.bloodPressure).toBe("110/80");
      expect(card.physicalExam.atDischarge.bloodPressure).toBe("112/84");
      expect(card.physicalExam.atAdmission.pallor).toBe("Absent");

      // Procedure Details
      expect(card.procedureDetails).toHaveLength(1);
      const proc = card.procedureDetails[0];
      expect(proc.surgicalProcedure).toBe("GLUE EMBOLISATION BY VENASEAL");
      expect(proc.operationType).toBe("Minor");
      expect(proc.anaesthesiaType).toBe("LOCAL");
      expect(proc.processDoneBy).toBe("Dr Alok Verma");
      expect(proc.procedureDetail).toContain("Venaseal closure system");

      // Medications
      expect(card.dischargeMedications.length).toBeGreaterThanOrEqual(3);
      expect(card.dischargeMedications.some((m) => m.medicine.includes("Amoxicillin"))).toBe(true);
    });

    it("validates Anjum Nisha (Budd-Chiari Syndrome with Ascites) record schema", () => {
      const card = ANJUM_NISHA_DISCHARGE;
      expect(card.admissionDetails.hid).toBe("240826303019538");
      expect(card.admissionDetails.admissionNo).toBe("A/SSH/26/17215");
      expect(card.caseSummary.icdDiagnosis).toContain("I82.0");
      expect(card.caseSummary.diagnosis).toContain("BUDD CHIARI SYNDROME");
      expect(card.investigations.sonography).toContain("ACUTE BUDD-CHIARI");
      expect(card.investigations.ctScan).toContain("caudate lobe");
      expect(card.dischargeMedications.some((m) => m.medicine.includes("Apixaban"))).toBe(true);
      expect(card.dischargeMedications.some((m) => m.medicine.includes("Torsemide"))).toBe(true);
      expect(card.dischargeMedications.some((m) => m.medicine.includes("Spironolactone"))).toBe(true);
      expect(card.dischargeDetails.generalAdvise).toContain("High protein, low salt diet");
    });
  });

  describe("Automated Discharge Generator Engine", () => {
    it("generates an authentic compliant IHMS discharge summary for a Budd-Chiari DIPS patient", () => {
      const generated = generateIhmsDischargeForPatient({
        id: "PT01",
        name: "Ramswaroop Meena",
        age: 56,
        sex: "Male",
        hid: "SMS-2026-089",
        unit: "Gastroenterology / IR",
        postedBy: "Dr Neel Yadav",
        summary: "Primary Budd-Chiari syndrome with diffuse hepatic venous occlusion.",
        procedure: "Direct Intrahepatic Portosystemic Shunt (DIPS)",
        procedureKey: "budd_chiari_dips",
        scheme: "MAAY",
        ipd: { ward: "Liver ICU", bed: "LICU-04", podDay: "POD 1" },
        labs: { ast: 142, alt: 118, bili: 2.8, alb: 2.9, creat: 0.92, inr: 1.45, plt: 184000 },
      });

      expect(generated.admissionDetails.hid).toBe("SMS-2026-089");
      expect(generated.admissionDetails.patientName).toBe("Ramswaroop Meena");
      expect(generated.caseSummary.icdDiagnosis).toContain("I82.0");
      expect(generated.caseSummary.diagnosis).toContain("Budd-Chiari");
      expect(generated.procedureDetails[0].procedureDetail).toContain("Colapinto RUPS-100");
      expect(generated.procedureDetails[0].procedureDetail).toContain("Gore Viatorr");
      expect(generated.dischargeMedications.some((m) => m.medicine.includes("Apixaban"))).toBe(true);
      expect(generated.dischargeDetails.approvedBy).toBe("DR MEENU BAGARHATTA");
    });

    it("generates an authentic compliant IHMS discharge summary for a BAE hemoptysis patient", () => {
      const generated = generateIhmsDischargeForPatient({
        id: "PT03",
        name: "Rajesh Kumawat",
        age: 42,
        sex: "Male",
        hid: "SMS-2026-074",
        unit: "Pulmonary Medicine / IR",
        postedBy: "Dr Alok Verma",
        summary: "Post-tubercular bronchiectasis with massive recurrent hemoptysis.",
        procedure: "Bronchial Artery Embolization (BAE)",
        procedureKey: "bae_hemoptysis",
        scheme: "RGHS",
        ipd: { ward: "IR Dedicated Ward (D-Block)", bed: "IR-D03", podDay: "POD 1" },
        labs: { ast: 28, alt: 32, bili: 0.7, alb: 3.8, creat: 0.82, inr: 1.05, plt: 260000 },
      });

      expect(generated.caseSummary.icdDiagnosis).toContain("R04.2");
      expect(generated.procedureDetails[0].procedureDetail).toContain("Mikaelsson");
      expect(generated.procedureDetails[0].procedureDetail).toContain("PVA particles");
      expect(generated.admissionDetails.patientCategory).toBe("RGHS");
    });
  });
});
