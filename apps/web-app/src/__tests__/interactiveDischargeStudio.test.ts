import { describe, it, expect } from "vitest";
import {
  synthesizeDischargeRecord,
  VaricoseCriteria,
  VaricoceleCriteria,
  OtherIrCriteria,
} from "../../app/dashboard/discharge/dischargeSynthesisEngine";
import {
  SUNIL_KUMAR_DISCHARGE,
  ANJUM_NISHA_DISCHARGE,
  DischargeMedicationItem,
} from "../../app/dashboard/discharge/ihmsDischargeTemplates";

describe("Interactive Tick-Box Discharge Studio Auto-Synthesis Engine", () => {
  const defaultVaricoseCriteria: VaricoseCriteria = {
    laterality: "Left lower limb",
    modality: "VenaSeal",
    findings: {
      varicoseVeins: true,
      venousUlcer: false,
      hyperpigmentation: true,
      lipodermatosclerosis: false,
      coronaPhlebectatica: true,
      edema: true,
      achingPain: true,
      nightCramps: true,
      restlessLegs: false,
      thrombophlebitis: false,
    },
    symptomDuration: "10 months",
    itchingDuration: "3 months",
    ulcerSizeAndSite: "None",
    familyHistory: "Present (Mother)",
  };

  const defaultVaricoceleCriteria: VaricoceleCriteria = {
    clinicalGrade: "Grade III (Visible through scrotal skin)",
    side: "Left",
    indication: "Scrotal pain & heaviness",
    duration: "6 months",
  };

  const defaultOtherIrCriteria: OtherIrCriteria = {
    subProcedure: "TIPS / DIPS (Budd-Chiari / Portal HTN)",
    technicalSuccess: "Complete Technical Success (100%)",
    punctureSiteStatus: "Clean, Dry & Intact (No Hematoma/Bruit)",
    analgesia: "Adequate Pain Control (VAS 1-2/10, Oral NSAIDs/Paracetamol)",
    followUpAdvice: "Ultrasound Doppler check at 1 month + Hepatic Panel",
  };

  describe("Varicose Veins (VenaSeal / EVLT) Synthesis", () => {
    it("synthesizes clinical narrative and CEAP C4a for hyperpigmentation stasis dermatitis", () => {
      const result = synthesizeDischargeRecord({
        category: "varicose_veins",
        varicose: defaultVaricoseCriteria,
        varicocele: defaultVaricoceleCriteria,
        otherIr: defaultOtherIrCriteria,
        baseRecord: SUNIL_KUMAR_DISCHARGE,
      });

      expect(result.caseSummary.diagnosis).toContain("CEAP C4a");
      expect(result.caseSummary.icdDiagnosis).toContain("I83.1");
      expect(result.caseSummary.complaints).toContain("10 months");
      expect(result.caseSummary.complaints).toContain("Itching present for 3 months");
      expect(result.caseSummary.caseHistory).toContain("Present (Mother)");
      expect(result.caseSummary.caseHistory).toContain("VenaSeal cyanoacrylate glue embolization");
      expect(result.procedureDetails[0].surgicalProcedure).toBe("GLUE EMBOLISATION BY VENASEAL (CYANOACRYLATE)");
      expect(result.procedureDetails[0].procedureDetail).toContain("VenaSeal cyanoacrylate glue dispensed");
      expect(result.dischargeMedications.some((m: DischargeMedicationItem) => m.medicine.includes("Daflon"))).toBe(true);
      expect(result.dischargeMedications.some((m: DischargeMedicationItem) => m.medicine.includes("Levocetirizine"))).toBe(true);
      expect(result.dischargeDetails.generalAdvise).toContain("Class II graduated compression stockings");
    });

    it("synthesizes active ulcer (CEAP C6) and adds wound antibiotic prophylaxis", () => {
      const ulcerCriteria: VaricoseCriteria = {
        ...defaultVaricoseCriteria,
        ulcerSizeAndSite: "Left medial malleolus (< 3 cm)",
        findings: {
          ...defaultVaricoseCriteria.findings,
          venousUlcer: true,
          lipodermatosclerosis: true,
        },
      };

      const result = synthesizeDischargeRecord({
        category: "varicose_veins",
        varicose: ulcerCriteria,
        varicocele: defaultVaricoceleCriteria,
        otherIr: defaultOtherIrCriteria,
        baseRecord: SUNIL_KUMAR_DISCHARGE,
      });

      expect(result.caseSummary.diagnosis).toContain("CEAP C6");
      expect(result.caseSummary.icdDiagnosis).toContain("I83.0");
      expect(result.caseSummary.caseHistory).toContain("Left medial malleolus (< 3 cm)");
      expect(result.dischargeMedications.some((m: DischargeMedicationItem) => m.medicine.includes("Amoxicillin and Potassium Clavulanate"))).toBe(true);
    });

    it("synthesizes EVLT operative technique with tumescent anesthesia when EVLT modality is selected", () => {
      const evltCriteria: VaricoseCriteria = {
        ...defaultVaricoseCriteria,
        modality: "EVLT",
        laterality: "Right lower limb",
      };

      const result = synthesizeDischargeRecord({
        category: "varicose_veins",
        varicose: evltCriteria,
        varicocele: defaultVaricoceleCriteria,
        otherIr: defaultOtherIrCriteria,
        baseRecord: SUNIL_KUMAR_DISCHARGE,
      });

      expect(result.procedureDetails[0].surgicalProcedure).toBe("ENDOVENOUS LASER ABLATION (EVLT)");
      expect(result.procedureDetails[0].procedureDetail).toContain("1470 nm radial laser fiber");
      expect(result.procedureDetails[0].procedureDetail).toContain("tumescent anesthesia");
      expect(result.caseSummary.diagnosis).toContain("Right lower limb");
    });
  });

  describe("Varicocele Embolization Synthesis", () => {
    it("synthesizes Grade III Varicocele with microcoil and STS foam operative narrative", () => {
      const result = synthesizeDischargeRecord({
        category: "varicocele",
        varicose: defaultVaricoseCriteria,
        varicocele: defaultVaricoceleCriteria,
        otherIr: defaultOtherIrCriteria,
        baseRecord: SUNIL_KUMAR_DISCHARGE,
      });

      expect(result.caseSummary.icdDiagnosis).toContain("I86.1");
      expect(result.caseSummary.diagnosis).toContain("Left Varicocele (Grade III (Visible through scrotal skin))");
      expect(result.caseSummary.complaints).toContain("6 months");
      expect(result.caseSummary.caseHistory).toContain("pampiniform plexus");
      expect(result.procedureDetails[0].surgicalProcedure).toBe("PERCUTANEOUS TRANSVENOUS VARICOCELE EMBOLIZATION");
      expect(result.procedureDetails[0].procedureDetail).toContain("Sodium Tetradecyl Sulfate (STS) foam");
      expect(result.procedureDetails[0].procedureDetail).toContain("microcoils");
      expect(result.dischargeMedications.some((m: DischargeMedicationItem) => m.medicine.includes("Cefixime"))).toBe(true);
      expect(result.dischargeDetails.generalAdvise).toContain("scrotal support");
      expect(result.dischargeDetails.followUp).toContain("Repeat semen analysis and scrotal Doppler after 3 months");
    });

    it("synthesizes Bilateral Varicocele for Infertility indication", () => {
      const varicoceleInfertility: VaricoceleCriteria = {
        clinicalGrade: "Grade II (Palpable without Valsalva)",
        side: "Bilateral",
        indication: "Infertility & abnormal semen parameters",
        duration: "2 years",
      };

      const result = synthesizeDischargeRecord({
        category: "varicocele",
        varicose: defaultVaricoseCriteria,
        varicocele: varicoceleInfertility,
        otherIr: defaultOtherIrCriteria,
        baseRecord: SUNIL_KUMAR_DISCHARGE,
      });

      expect(result.caseSummary.diagnosis).toContain("Bilateral Varicocele");
      expect(result.caseSummary.diagnosis).toContain("infertility & abnormal semen parameters");
      expect(result.caseSummary.complaints).toContain("2 years");
    });
  });

  describe("Other IR Procedures Synthesis (TIPS/BCS, BAE, PTBD, Biopsy)", () => {
    it("synthesizes TIPS/DIPS with Viatorr stent and portosystemic gradient drop", () => {
      const result = synthesizeDischargeRecord({
        category: "other_ir",
        varicose: defaultVaricoseCriteria,
        varicocele: defaultVaricoceleCriteria,
        otherIr: defaultOtherIrCriteria,
        baseRecord: ANJUM_NISHA_DISCHARGE,
      });

      expect(result.caseSummary.icdDiagnosis).toContain("I82.0");
      expect(result.procedureDetails[0].surgicalProcedure).toContain("DIPS");
      expect(result.procedureDetails[0].procedureDetail).toContain("Viatorr");
      expect(result.procedureDetails[0].procedureDetail).toContain("Complete Technical Success (100%)");
      expect(result.systemicExam.localExamination).toContain("Clean, Dry & Intact");
      expect(result.dischargeMedications.some((m: DischargeMedicationItem) => m.medicine.includes("Apixaban"))).toBe(true);
      expect(result.dischargeDetails.followUp).toContain("Ultrasound Doppler check at 1 month");
    });

    it("synthesizes Bronchial Artery Embolization (BAE) with PVA and microcoils", () => {
      const baeCriteria: OtherIrCriteria = {
        subProcedure: "Bronchial Artery Embolization (BAE)",
        technicalSuccess: "Hemostasis & Desired Embolic Endpoint Achieved",
        punctureSiteStatus: "Pressure Dressing Applied, Distal Pulses Well Palpable",
        analgesia: "Mild Pain, Relieved with SOS Analgesia",
        followUpAdvice: "Chest X-ray & Pulmonology Review in 2 weeks",
      };

      const result = synthesizeDischargeRecord({
        category: "other_ir",
        varicose: defaultVaricoseCriteria,
        varicocele: defaultVaricoceleCriteria,
        otherIr: baeCriteria,
        baseRecord: SUNIL_KUMAR_DISCHARGE,
      });

      expect(result.caseSummary.icdDiagnosis).toContain("R04.2");
      expect(result.procedureDetails[0].surgicalProcedure).toBe("BRONCHIAL ARTERY EMBOLIZATION (BAE)");
      expect(result.procedureDetails[0].procedureDetail).toContain("Mikaelsson");
      expect(result.procedureDetails[0].procedureDetail).toContain("PVA");
      expect(result.procedureDetails[0].procedureDetail).toContain("microcoils");
      expect(result.dischargeMedications.some((m: DischargeMedicationItem) => m.medicine.includes("Tranexamic Acid"))).toBe(true);
      expect(result.dischargeDetails.generalAdvise).toContain("Avoid forceful coughing");
    });

    it("synthesizes PTBD with biliary drainage tube instructions", () => {
      const ptbdCriteria: OtherIrCriteria = {
        subProcedure: "Percutaneous Transhepatic Biliary Drainage (PTBD)",
        technicalSuccess: "Complete Technical Success (100%)",
        punctureSiteStatus: "Clean, Dry & Intact (No Hematoma/Bruit)",
        analgesia: "Adequate Pain Control (VAS 1-2/10, Oral NSAIDs/Paracetamol)",
        followUpAdvice: "Biliary Bag Output Monitoring & Flush Protocol; OPD 7 Days",
      };

      const result = synthesizeDischargeRecord({
        category: "other_ir",
        varicose: defaultVaricoseCriteria,
        varicocele: defaultVaricoceleCriteria,
        otherIr: ptbdCriteria,
        baseRecord: SUNIL_KUMAR_DISCHARGE,
      });

      expect(result.caseSummary.icdDiagnosis).toContain("K83.1");
      expect(result.procedureDetails[0].surgicalProcedure).toContain("PTBD");
      expect(result.procedureDetails[0].procedureDetail).toContain("Chiba needle");
      expect(result.dischargeMedications.some((m: DischargeMedicationItem) => m.medicine.includes("Ursodeoxycholic Acid"))).toBe(true);
      expect(result.dischargeDetails.generalAdvise).toContain("biliary drainage bag output");
    });

    it("synthesizes Percutaneous Core Liver Biopsy with post-op decubitus instructions", () => {
      const biopsyCriteria: OtherIrCriteria = {
        subProcedure: "Percutaneous Liver Biopsy",
        technicalSuccess: "Complete Technical Success (100%)",
        punctureSiteStatus: "Clean, Dry & Intact (No Hematoma/Bruit)",
        analgesia: "Painless, Nil Distress",
        followUpAdvice: "Wound inspection & Suture/Stitch check in 5 days; OPD Unit I",
      };

      const result = synthesizeDischargeRecord({
        category: "other_ir",
        varicose: defaultVaricoseCriteria,
        varicocele: defaultVaricoceleCriteria,
        otherIr: biopsyCriteria,
        baseRecord: SUNIL_KUMAR_DISCHARGE,
      });

      expect(result.procedureDetails[0].surgicalProcedure).toBe("ULTRASOUND-GUIDED PERCUTANEOUS CORE LIVER BIOPSY");
      expect(result.procedureDetails[0].procedureDetail).toContain("Tru-Cut core biopsy needle");
      expect(result.procedureDetails[0].procedureDetail).toContain("Gelfoam slurry");
      expect(result.dischargeDetails.generalAdvise).toContain("Rest quietly at home for 24 hours");
    });
  });
});
