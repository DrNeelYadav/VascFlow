"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useEndoflowStore } from "../useEndoflowStore";
import {
  IhmsDischargeSummaryData,
  PatientAdmissionDetails,
  SUNIL_KUMAR_DISCHARGE,
  BUDD_CHIARI_DISCHARGE,
  generateIhmsDischargeForPatient,
  ProceduralImageAttachment,
  DischargeMedicationItem,
  PostOperativeNoteData,
} from "./ihmsDischargeTemplates";
import {
  Printer,
  Copy,
  CheckCircle2,
  FileText,
  Building,
  User,
  Activity,
  Stethoscope,
  Pill,
  ChevronDown,
  Upload,
  RefreshCw,
  Plus,
  Trash2,
  Camera,
  Check,
  Sparkles,
  Sliders,
  Calendar,
  Clock,
  ShieldCheck,
  AlertCircle,
  Eye,
  BarChart3,
  Globe,
  Layers,
  History,
  ArrowUpRight,
  Search,
  FolderOpen,
} from "lucide-react";
import { ClinicalMetricsSuite } from "./ClinicalMetricsSuite";
import { MasterCatalogDrawer } from "./MasterCatalogDrawer";
import { SsoIhmsPrefill } from "./SsoIhmsPrefill";
import { PatientArchiveDossier } from "./PatientArchiveDossier";
import { MasterProcedure } from "../../lib/masterCatalog";
import { getAllProcedureFamilies, getDischargeTemplate, CriteriaField } from './procedureDischargeTemplates';
import { getNextValidWorkingAppointmentDate } from "../../lib/rajasthanHolidays2026";
import {
  VaricoseClinicalModel,
  VaricoceleClinicalModel,
  PerforatorMappingItem,
  TruncalIncompetence,
  SclerotherapyDistribution,
  CeapClinicalClass,
  VcssBreakdown,
  createDefaultPerforators,
  createDefaultTruncal,
  createDefaultSclerotherapy,
  createDefaultVcss,
  calculateVcssTotal,
  synthesizeVenousDiagnosis,
  synthesizeVenousComplaints,
  synthesizeVenousHistory,
  synthesizeVenousLocalExam,
  synthesizeVenousOperativeNote,
  synthesizeVenousPostOpNote,
  synthesizeVenousMedications,
  synthesizeVenousDischargeAdvice,
  synthesizeVenousRedFlags,
  synthesizeVenousSonographyReport,
  synthesizeVaricoceleDiagnosis,
  synthesizeVaricoceleComplaints,
  synthesizeVaricoceleHistory,
  synthesizeVaricoceleLocalExam,
  synthesizeVaricoceleOperativeNote,
  synthesizeVaricocelePostOpNote,
  synthesizeVaricoceleMedications,
  synthesizeVaricoceleDischargeAdvice,
} from "./venousClinicalEngine";

// ============================================================================
// CLINICAL PROCEDURE DEFINITIONS & TYPES
// ============================================================================

export type ProcedureCategory = "varicose_veins" | "varicocele" | "other_ir";

export interface VaricoseCriteria {
  laterality: "Left lower limb" | "Right lower limb" | "Bilateral lower limbs";
  modality: "VenaSeal" | "EVLT" | "VenaSeal_UGFS" | "EVLT_UGFS" | "UGFS_Only";
  findings: {
    varicoseVeins: boolean;
    venousUlcer: boolean;
    hyperpigmentation: boolean;
    lipodermatosclerosis: boolean;
    coronaPhlebectatica: boolean;
    edema: boolean;
    achingPain: boolean;
    nightCramps: boolean;
    restlessLegs: boolean;
    thrombophlebitis: boolean;
  };
  symptomDuration:
    | "1 month"
    | "2 months"
    | "3 months"
    | "6 months"
    | "10 months"
    | "1 year"
    | "2 years"
    | "5+ years";
  itchingDuration:
    | "None"
    | "1 month"
    | "2 months"
    | "3 months"
    | "6 months"
    | "1+ year";
  ulcerSizeAndSite:
    | "None"
    | "Left medial malleolus (< 3 cm)"
    | "Left medial malleolus (> 3 cm)"
    | "Right medial malleolus"
    | "Active ulcer (C6)"
    | "Healed ulcer (C5)";
  familyHistory:
    | "Present (Mother)"
    | "Present (Father)"
    | "Present (Both Parents)"
    | "Absent";
  truncal?: TruncalIncompetence;
  perforators?: PerforatorMappingItem[];
  sclerotherapy?: SclerotherapyDistribution;
  ceapClass?: CeapClinicalClass;
  vcss?: VcssBreakdown;
  compressionStockingsApplied?: boolean;
  immediateAmbulationMinutes?: number;
  vasPainScore?: number;
  egitStatus?: 'Grade 0 (Absent - Complete occlusion to 5cm SFJ/SPJ)' | 'Grade I (Thrombus flush with junction)' | 'Grade II (<50% CFV protrusion)' | 'Grade III (>50% CFV protrusion)' | 'Grade IV (CFV Occlusion)';
  chairScreening?: 'Negative (No erythema, urticaria or hypersensitivity)' | 'Mild self-limiting perivenous erythema (Grade 1)' | 'Moderate allergic phlebitis along tract (Grade 2)';
}

export interface VaricoceleCriteria {
  clinicalGrade:
    | "Grade I (Palpable with Valsalva)"
    | "Grade II (Palpable without Valsalva)"
    | "Grade III (Visible through scrotal skin)";
  side: "Left" | "Right" | "Bilateral";
  indication:
    | "Scrotal pain & heaviness"
    | "Infertility & abnormal semen parameters"
    | "Cosmetic / testicular hypotrophy";
  duration: "3 months" | "6 months" | "1 year" | "2 years";
}

export interface OtherIrCriteria {
  subProcedure:
    | "TIPS / DIPS (Budd-Chiari / Portal HTN)"
    | "Bronchial Artery Embolization (BAE)"
    | "Percutaneous Transhepatic Biliary Drainage (PTBD)"
    | "Biliary SEMS (Self-Expanding Metal Stent)"
    | "Percutaneous Liver Abscess Drainage (PCD)"
    | "Splenic Artery Embolization (SAE)"
    | "Percutaneous Liver Biopsy"
    | "Percutaneous Core Liver / Renal Biopsy"
    | "AV Fistuloplasty / Dialysis Access Salvage"
    | "Transarterial Chemoembolization (TACE)"
    | "Other Master Catalog Procedure";
  technicalSuccess:
    | "Complete Technical Success (100%)"
    | "Successful with Planned Staged Procedure"
    | "Hemostasis & Desired Embolic Endpoint Achieved"
    | "Patent Shunt / Flow Restoration Verified";
  punctureSiteStatus:
    | "Clean, Dry & Intact (No Hematoma/Bruit)"
    | "Pressure Dressing Applied, Distal Pulses Well Palpable"
    | "Manual Compression Applied, Zero Oozing"
    | "Right IJV Puncture Site Sealed, Intact Dressing"
    | "Radial/Femoral Band in Situ, Intact Capillary Refill";
  analgesia:
    | "Adequate Pain Control (VAS 1-2/10, Oral NSAIDs/Paracetamol)"
    | "Mild Pain, Relieved with SOS Analgesia"
    | "Painless, Nil Distress"
    | "Moderate Pain Controlled on IV Paracetamol + Tramadol";
  followUpAdvice:
    | "Ultrasound Doppler check at 1 month + Hepatic Panel"
    | "Chest X-ray & Pulmonology Review in 2 weeks"
    | "Biliary Bag Output Monitoring & Flush Protocol; OPD 7 Days"
    | "Wound inspection & Suture/Stitch check in 5 days; OPD Unit I"
    | "Strict anticoagulation compliance with weekly INR/platelet review";
}

// ============================================================================
// CLINICAL NARRATIVE AUTO-SYNTHESIS ENGINE
// ============================================================================

export function synthesizeDischargeRecord({
  category,
  varicose,
  varicocele,
  otherIr,
  baseRecord,
}: {
  category: ProcedureCategory;
  varicose: VaricoseCriteria;
  varicocele: VaricoceleCriteria;
  otherIr: OtherIrCriteria;
  baseRecord: IhmsDischargeSummaryData;
}): IhmsDischargeSummaryData {
  const updated: IhmsDischargeSummaryData = JSON.parse(
    JSON.stringify(baseRecord)
  );

  if (category === "varicose_veins") {
    const truncal = varicose.truncal || createDefaultTruncal();
    const perforators = varicose.perforators || createDefaultPerforators();
    const sclerotherapy = varicose.sclerotherapy || createDefaultSclerotherapy();
    const vcss = varicose.vcss || createDefaultVcss();

    let ceapGrade: CeapClinicalClass = varicose.ceapClass || "C2";
    if (!varicose.ceapClass) {
      if (
        varicose.ulcerSizeAndSite !== "None" &&
        !varicose.ulcerSizeAndSite.includes("Healed")
      ) {
        ceapGrade = "C6";
      } else if (
        varicose.ulcerSizeAndSite.includes("Healed") ||
        varicose.findings.venousUlcer
      ) {
        ceapGrade = "C5";
      } else if (varicose.findings.lipodermatosclerosis) {
        ceapGrade = "C4b";
      } else if (varicose.findings.hyperpigmentation) {
        ceapGrade = "C4a";
      } else if (varicose.findings.edema) {
        ceapGrade = "C3";
      } else if (varicose.findings.varicoseVeins) {
        ceapGrade = "C2";
      } else if (varicose.findings.coronaPhlebectatica) {
        ceapGrade = "C1";
      }
    }

    const clinicalModel: VaricoseClinicalModel = {
      laterality: varicose.laterality,
      modality: (varicose.modality === "VenaSeal" ? "VenaSeal_UGFS" : (varicose.modality === "EVLT" ? "EVLT_UGFS" : varicose.modality)) as any,
      symptomDuration: varicose.symptomDuration,
      itchingDuration: varicose.itchingDuration,
      ulcerSizeAndSite: varicose.ulcerSizeAndSite,
      familyHistory: varicose.familyHistory,
      truncal,
      perforators,
      sclerotherapy,
      ceapClass: ceapGrade,
      vcss,
      findings: varicose.findings,
      compressionStockingsApplied: varicose.compressionStockingsApplied !== false,
      immediateAmbulationMinutes: varicose.immediateAmbulationMinutes || 25,
      vasPainScore: varicose.vasPainScore || 1,
      egitStatus: varicose.egitStatus || "Grade 0 (Absent - Complete occlusion to 5cm SFJ/SPJ)",
      chairScreening: varicose.chairScreening || "Negative (No erythema, urticaria or hypersensitivity)",
    };

    if (ceapGrade === "C6") {
      updated.caseSummary.icdDiagnosis =
        "(S) Varicose veins of lower extremities with ulcer (I83.0)\n(S) Chronic venous insufficiency (peripheral) (I87.2)";
    } else if (ceapGrade === "C4a" || ceapGrade === "C4b") {
      updated.caseSummary.icdDiagnosis =
        "(S) Varicose veins of lower extremities with inflammation / stasis dermatitis (I83.1)\n(S) Chronic venous insufficiency (peripheral) (I87.2)";
    } else {
      updated.caseSummary.icdDiagnosis =
        "(S) Varicose veins of lower extremities without ulcer or inflammation (I83.9)\n(S) Chronic venous insufficiency (peripheral) (I87.2)";
    }

    updated.caseSummary.diagnosis = synthesizeVenousDiagnosis(clinicalModel);
    updated.caseSummary.complaints = synthesizeVenousComplaints(clinicalModel);
    updated.caseSummary.caseHistory = synthesizeVenousHistory(clinicalModel);
    updated.caseSummary.familyHistory = `Chronic venous disease: ${varicose.familyHistory}.`;
    updated.caseSummary.riskFactor = "Prolonged standing, chronic venous insufficiency, familial history. Viral markers (HIV, HBsAg, Anti-HCV) non-reactive.";

    updated.attachments = (updated.attachments || []).filter(
      (att) => att.modality !== "US"
    );

    updated.systemicExam.localExamination = synthesizeVenousLocalExam(clinicalModel);

    const proc = updated.procedureDetails[0] || {
      sNo: 1,
      dateTime: new Date().toLocaleDateString("en-IN") + " 10:00 AM",
      operationType: "Minor",
      surgicalProcedure: "",
      anaesthesiaType: "LOCAL",
      procedureDetail: "",
      processDoneBy: "Dr Shashank Sharma",
    };

    proc.surgicalProcedure =
      clinicalModel.modality.includes("VenaSeal")
        ? "GLUE EMBOLISATION BY VENASEAL (CYANOACRYLATE)"
        : clinicalModel.modality.includes("EVLT")
        ? "ENDOVENOUS LASER ABLATION (EVLT)"
        : "ULTRASOUND-GUIDED FOAM SCLEROTHERAPY (UGFS)";
    proc.operationType = "Minor";
    proc.anaesthesiaType = "LOCAL";
    proc.procedureDetail = synthesizeVenousOperativeNote(clinicalModel);
    updated.procedureDetails = [proc];

    updated.dischargeMedications = synthesizeVenousMedications(clinicalModel);

    // Enhanced Post-Operative Notes
    updated.postOperativeNotes = synthesizeVenousPostOpNote(clinicalModel);

    // Sonography investigations report (authentic, NO fake blood tests)
    updated.investigations.sonography = synthesizeVenousSonographyReport(clinicalModel);
    if (updated.investigations.labResults && updated.investigations.labResults.length > 0) {
      updated.investigations.labResults = [];
    }

    const fuDateVaricoseStr = getNextValidWorkingAppointmentDate(new Date().toISOString(), 7);

    updated.dischargeDetails.generalAdvise = synthesizeVenousDischargeAdvice(clinicalModel).join('\n');
    updated.dischargeDetails.conditionOnDischarge = "Improved";
    updated.dischargeDetails.followUp =
      "Follow up in IR OPD Room 48 / Old Gastro Ward (SMS Hospital, Jaipur) after 7-10 days with duplex color Doppler ultrasound scan.";
    updated.dischargeDetails.followUpDate = fuDateVaricoseStr;
  } else if (category === "varicocele") {
    let mappedIndication: VaricoceleClinicalModel['indication'] = 'Scrotal pain & heaviness';
    if (varicocele.indication.includes('Infertility')) {
      mappedIndication = 'Infertility & abnormal semen parameters (OAT)';
    } else if (varicocele.indication.includes('Cosmetic') || varicocele.indication.includes('hypotrophy')) {
      mappedIndication = 'Testicular hypotrophy & cosmetic discomfort';
    }

    const varicoceleModel: VaricoceleClinicalModel = {
      laterality: varicocele.side as any,
      clinicalGrade: varicocele.clinicalGrade,
      indication: mappedIndication,
      symptomDuration: varicocele.duration,
      pampiniformDiameterRestMm: 3.8,
      pampiniformDiameterValsalvaMm: 4.8,
      refluxDurationSec: 3.2,
      embolicTechnique: 'Sandwich Technique (Distal & Proximal Microcoils + 3% STS Foam)',
      coilsCount: 6,
      collateralsOccluded: true,
      semenParametersAbnormal: varicocele.indication.includes('Infertility'),
      vasPainScore: 1,
    };

    updated.caseSummary.icdDiagnosis =
      "(S) Varicocele of spermatic cord (I86.1)\n(S) Male pelvic congestion / scrotal varices";
    updated.caseSummary.diagnosis = synthesizeVaricoceleDiagnosis(varicoceleModel);
    updated.caseSummary.complaints = synthesizeVaricoceleComplaints(varicoceleModel);
    updated.caseSummary.caseHistory = synthesizeVaricoceleHistory(varicoceleModel);
    updated.systemicExam.localExamination = synthesizeVaricoceleLocalExam(varicoceleModel);

    const proc = updated.procedureDetails[0] || {
      sNo: 1,
      dateTime: new Date().toLocaleDateString("en-IN") + " 10:00 AM",
      operationType: "Minor",
      surgicalProcedure: "",
      anaesthesiaType: "LOCAL",
      procedureDetail: "",
      processDoneBy: "Dr Shashank Sharma",
    };

    proc.surgicalProcedure = "PERCUTANEOUS TRANSVENOUS VARICOCELE EMBOLIZATION";
    proc.operationType = "Minor";
    proc.anaesthesiaType = "LOCAL";
    proc.procedureDetail = synthesizeVaricoceleOperativeNote(varicoceleModel);
    updated.procedureDetails = [proc];

    updated.postOperativeNotes = synthesizeVaricocelePostOpNote(varicoceleModel);
    updated.dischargeMedications = synthesizeVaricoceleMedications();

    if (updated.investigations.labResults && updated.investigations.labResults.length > 0) {
      updated.investigations.labResults = [];
    }

    const fuDateVaricoceleStr = getNextValidWorkingAppointmentDate(new Date().toISOString(), 14);

    updated.dischargeDetails.generalAdvise = synthesizeVaricoceleDischargeAdvice().join('\n');
    updated.dischargeDetails.conditionOnDischarge = "Improved";
    updated.dischargeDetails.followUp =
      "Follow up in IR OPD Room 48 after 2 weeks for puncture site check. Repeat semen analysis and scrotal Doppler after 3 months.";
    updated.dischargeDetails.followUpDate = fuDateVaricoceleStr;
  } else {
    // Other IR Procedures (TIPS/BCS, BAE, PTBD, Liver Biopsy)
    const sub = otherIr.subProcedure;

    if (sub.includes("TIPS") || sub.includes("Budd-Chiari")) {
      updated.caseSummary.icdDiagnosis =
        "(S) Budd-Chiari syndrome (I82.0)\n(S) Portal hypertension (K76.6)\n(S) Ascites (R18.8)";
      updated.caseSummary.diagnosis =
        "Budd-Chiari syndrome with diffuse hepatic venous outflow obstruction, refractory ascites, and portal hypertension (I82.0 / K76.6)";
      updated.caseSummary.complaints =
        "Progressive abdominal distension, dull right hypochondrial pain, and early satiety for 1 month.";
      updated.caseSummary.caseHistory = `Patient presented with refractory ascites and progressive abdominal distension secondary to primary Budd-Chiari syndrome. CECT and Doppler ultrasound demonstrated caudate lobe hypertrophy and complete thrombosis of hepatic veins with portosystemic collateralization. Pre-procedure hepatic venous pressure gradient was markedly elevated (> 20 mmHg). Underwent successful decompressive shunt (DIPS/TIPS) creation. Technical success: ${otherIr.technicalSuccess}.`;

      const proc = updated.procedureDetails[0] || {
        sNo: 1,
        dateTime: new Date().toLocaleDateString("en-IN") + " 10:00 AM",
        operationType: "Major",
        surgicalProcedure: "",
        anaesthesiaType: "CONSCIOUS SEDATION",
        procedureDetail: "",
        processDoneBy: "Dr Meenu Bagarhatta",
      };
      proc.surgicalProcedure =
        "DIRECT INTRAHEPATIC PORTOSYSTEMIC SHUNT (DIPS) / TIPS";
      proc.operationType = "Major";
      proc.anaesthesiaType = "CONSCIOUS SEDATION";
      proc.procedureDetail = `Under strict aseptic precautions, ultrasound and fluoroscopic guidance. Right IJV access obtained; 10F Ansel guiding sheath advanced to IVC. Transcaval puncture directed into intrahepatic portal vein branch performed using Colapinto RUPS-100 needle under ultrasound monitoring. Splenoportogram confirmed portal vein access. Shunt tract dilated with 8x40mm balloon, and 10mm x 7cm covered (+2cm bare) Gore Viatorr TIPS stent-graft deployed. Post-dilation performed with 10mm balloon. Portosystemic gradient dropped from 22 mmHg to 7 mmHg. Brisk hepatofugal portal decompression verified. Technical result: ${otherIr.technicalSuccess}. Access site: ${otherIr.punctureSiteStatus}.`;
      updated.procedureDetails = [proc];

      updated.systemicExam.localExamination = `Local Examination: Abdomen soft, mild distension, non-tender. Right IJV puncture site: ${otherIr.punctureSiteStatus}. Analgesia: ${otherIr.analgesia}. Distal vitals stable.`;

      updated.dischargeMedications = [
        {
          sNo: 1,
          medicine: "Tab. Apixaban 5mg [RMSCL DDC #820]",
          genericName: "Apixaban 5mg",
          dosePower: "5mg",
          route: "ORAL",
          frequency: "BD",
          days: 30,
          instructions: "Strict anticoagulation for stent patency",
        },
        {
          sNo: 2,
          medicine: "Tab. Torsemide 20mg [RMSCL DDC #445]",
          genericName: "Torsemide 20mg",
          dosePower: "20mg",
          route: "ORAL",
          frequency: "OD",
          days: 14,
          instructions: "Morning post meals",
        },
        {
          sNo: 3,
          medicine: "Tab. Spironolactone 50mg [RMSCL DDC #448]",
          genericName: "Spironolactone 50mg",
          dosePower: "50mg",
          route: "ORAL",
          frequency: "OD",
          days: 14,
          instructions: "With food",
        },
        {
          sNo: 4,
          medicine: "Syp. Lactulose 30ml [RMSCL DDC #512]",
          genericName: "Lactulose 30ml",
          dosePower: "30ml",
          route: "ORAL",
          frequency: "HS",
          days: 14,
          instructions: "To maintain 2-3 soft stools/day",
        },
        {
          sNo: 5,
          medicine: "Tab. Pantoprazole 40mg [RMSCL DDC #142]",
          genericName: "Pantoprazole 40mg",
          dosePower: "40mg",
          route: "ORAL",
          frequency: "OD",
          days: 14,
          instructions: "Before breakfast",
        },
      ];

      const fuDateTipsStr = getNextValidWorkingAppointmentDate(new Date().toISOString(), 30);

      updated.dischargeDetails.generalAdvise = `1. High protein, low salt diet (< 2g sodium/day). Daily morning weight monitoring.\n2. Strict adherence to Apixaban anticoagulation.\n3. Watch for hepatic encephalopathy signs (confusion, lethargy, inverted sleep cycles).\n4. Puncture site status: ${otherIr.punctureSiteStatus}.\n5. Analgesia status: ${otherIr.analgesia}.`;
      updated.dischargeDetails.followUp = otherIr.followUpAdvice;
      updated.dischargeDetails.followUpDate = fuDateTipsStr;
    } else if (sub.includes("BAE") || sub.includes("Bronchial")) {
      updated.caseSummary.icdDiagnosis =
        "(S) Hemoptysis (R04.2)\n(S) Bronchiectasis with acute lower respiratory infection (J47.0)";
      updated.caseSummary.diagnosis =
        "Recurrent massive hemoptysis secondary to post-tubercular bronchiectasis with systemic collateral hypertrophy (R04.2 / J47.0)";
      updated.caseSummary.complaints =
        "Recurrent episodes of coughing fresh blood (> 250 mL/24 hr) for 2 days.";
      updated.caseSummary.caseHistory = `Patient with history of treated pulmonary tuberculosis presented with acute massive hemoptysis. CT bronchial angiogram revealed hypertrophied right intercostobronchial trunk with hypervascular parenchymal blush and bronchiectatic cavity. Transfemoral superselective bronchial artery embolization performed. Technical success: ${otherIr.technicalSuccess}.`;

      const proc = updated.procedureDetails[0] || {
        sNo: 1,
        dateTime: new Date().toLocaleDateString("en-IN") + " 10:00 AM",
        operationType: "Major",
        surgicalProcedure: "",
        anaesthesiaType: "LOCAL",
        procedureDetail: "",
        processDoneBy: "Dr Alok Verma",
      };
      proc.surgicalProcedure = "BRONCHIAL ARTERY EMBOLIZATION (BAE)";
      proc.operationType = "Major";
      proc.anaesthesiaType = "LOCAL";
      proc.procedureDetail = `Right common femoral artery access obtained; 5F vascular sheath placed. 5F Mikaelsson catheter used to selectively cannulate the right intercostobronchial trunk. High-resolution DSA confirmed tortuous hypertrophied bronchial branches with parenchymal blush and hypervascular shunting. Superselective microcatheterization achieved with 2.4F Progreat microcatheter. Embolization performed with PVA 300-500 µm particles followed by 0.018" microcoils. Completion angiogram demonstrated complete obliteration of abnormal vessels. Spinal cord artery (anterior spinal artery / artery of Adamkiewicz) carefully identified and protected; zero non-target embolization. Technical result: ${otherIr.technicalSuccess}. Groin puncture site: ${otherIr.punctureSiteStatus}.`;
      updated.procedureDetails = [proc];

      updated.systemicExam.localExamination = `Local Examination: Bilateral chest air entry present; right groin puncture site: ${otherIr.punctureSiteStatus}. Analgesia: ${otherIr.analgesia}. Distal pedal pulses intact.`;

      updated.dischargeMedications = [
        {
          sNo: 1,
          medicine: "Tab. Tranexamic Acid 500mg [RMSCL DDC #463]",
          genericName: "Tranexamic Acid 500mg",
          dosePower: "500mg",
          route: "ORAL",
          frequency: "TID",
          days: 5,
          instructions: "Post meals",
        },
        {
          sNo: 2,
          medicine: "Tab. Cefixime 200mg [RMSCL DDC #112]",
          genericName: "Cefixime 200mg",
          dosePower: "200mg",
          route: "ORAL",
          frequency: "BD",
          days: 5,
          instructions: "Post meals",
        },
        {
          sNo: 3,
          medicine: "Tab. Pantoprazole 40mg [RMSCL DDC #142]",
          genericName: "Pantoprazole 40mg",
          dosePower: "40mg",
          route: "ORAL",
          frequency: "OD",
          days: 7,
          instructions: "Before breakfast",
        },
        {
          sNo: 4,
          medicine: "Syp. Dextromethorphan Hydrobromide 10ml [RMSCL DDC #86]",
          genericName: "Dextromethorphan Hydrobromide 10ml",
          dosePower: "10ml",
          route: "ORAL",
          frequency: "SOS",
          days: 5,
          instructions: "For cough suppression",
        },
      ];

      const fuDateBaeStr = getNextValidWorkingAppointmentDate(new Date().toISOString(), 14);

      updated.dischargeDetails.generalAdvise = `1. Avoid forceful coughing, throat clearing, or straining.\n2. Bed rest for 48 hours.\n3. Puncture site care: ${otherIr.punctureSiteStatus}.\n4. Immediate report to hospital emergency if fresh hemoptysis recurs.`;
      updated.dischargeDetails.followUp = otherIr.followUpAdvice;
      updated.dischargeDetails.followUpDate = fuDateBaeStr;
    } else if (sub.includes("PTBD") || sub.includes("Biliary")) {
      updated.caseSummary.icdDiagnosis =
        "(S) Obstructive Jaundice (K83.1)\n(S) Malignant neoplasm of extrahepatic bile duct / Cholangiocarcinoma (C22.1)";
      updated.caseSummary.diagnosis =
        "Malignant obstructive jaundice with biliary stricture; right PTBD catheter placement (K83.1)";
      updated.caseSummary.complaints =
        "Deepening yellow discoloration of sclera and skin, generalized pruritus, dark urine, and pale clay-colored stools for 3 weeks.";
      updated.caseSummary.caseHistory = `Patient presented with progressive obstructive jaundice. Abdominal ultrasound and MRCP revealed marked intrahepatic biliary radicle dilatation (IHBRD) with complete cutoff at the common hepatic duct. Total bilirubin 14.8 mg/dL. Posted for ultrasound and fluoroscopy-guided percutaneous biliary decompression. Technical success: ${otherIr.technicalSuccess}.`;

      const proc = updated.procedureDetails[0] || {
        sNo: 1,
        dateTime: new Date().toLocaleDateString("en-IN") + " 10:00 AM",
        operationType: "Major",
        surgicalProcedure: "",
        anaesthesiaType: "LOCAL",
        procedureDetail: "",
        processDoneBy: "Dr Shashank Sharma",
      };
      proc.surgicalProcedure =
        "PERCUTANEOUS TRANSHEPATIC BILIARY DRAINAGE (PTBD)";
      proc.operationType = "Major";
      proc.anaesthesiaType = "LOCAL";
      proc.procedureDetail = `Under ultrasound and fluoroscopic guidance with local anesthesia. 21G Chiba needle introduced via 10th intercostal space mid-axillary line into a peripheral dilated right biliary duct branch. Cholangiogram demonstrated high-grade biliary obstruction. 0.018" wire advanced into biliary tree; Neff percutaneous access set placed. 0.035" stiff Glidewire and 5F Kumpe catheter used to cross stricture into duodenum. An 8.5F / 10F Ring-type internal-external biliary drainage catheter deployed across stricture with multiple side holes in biliary tree and duodenum. Immediate brisk flow of golden-yellow bile observed. Catheter fixed to skin with 2-0 silk and drain bag attached. Technical result: ${otherIr.technicalSuccess}. Puncture site: ${otherIr.punctureSiteStatus}.`;
      updated.procedureDetails = [proc];

      updated.systemicExam.localExamination = `Local Examination: Icterus present (+3). Abdomen soft, non-tender. Right flank PTBD exit site: ${otherIr.punctureSiteStatus}. Catheter well-secured, patent draining clear bile. Analgesia: ${otherIr.analgesia}.`;

      updated.dischargeMedications = [
        {
          sNo: 1,
          medicine: "Tab. Cefuroxime Axetil 500mg [RMSCL DDC #505]",
          genericName: "Cefuroxime Axetil 500mg",
          dosePower: "500mg",
          route: "ORAL",
          frequency: "BD",
          days: 5,
          instructions: "Post meals",
        },
        {
          sNo: 2,
          medicine: "Tab. Ursodeoxycholic Acid 300mg [RMSCL DDC #658]",
          genericName: "Ursodeoxycholic Acid 300mg",
          dosePower: "300mg",
          route: "ORAL",
          frequency: "BD",
          days: 30,
          instructions: "With meals",
        },
        {
          sNo: 3,
          medicine: "Tab. Pantoprazole 40mg [RMSCL DDC #142]",
          genericName: "Pantoprazole 40mg",
          dosePower: "40mg",
          route: "ORAL",
          frequency: "OD",
          days: 7,
          instructions: "Before breakfast",
        },
      ];

      const fuDatePtbdStr = getNextValidWorkingAppointmentDate(new Date().toISOString(), 7);

      updated.dischargeDetails.generalAdvise = `1. Empty and measure biliary drainage bag output twice daily in mL.\n2. Keep puncture site dressing dry and intact; flush catheter with 5-10 mL sterile normal saline once daily as instructed.\n3. Do not pull or kink the external tubing.\n4. Puncture site care: ${otherIr.punctureSiteStatus}.\n5. Immediate emergency visit if catheter dislodges, drain output suddenly stops, or high fever with chills occurs.`;
      updated.dischargeDetails.followUp = otherIr.followUpAdvice;
      updated.dischargeDetails.followUpDate = fuDatePtbdStr;
    } else if (sub.includes("SEMS")) {
      updated.caseSummary.icdDiagnosis =
        "(S) Malignant neoplasm of extrahepatic bile duct / Cholangiocarcinoma (C22.1)\n(S) Secondary malignant neoplasm of liver (C78.7)";
      updated.caseSummary.diagnosis =
        "Inoperable malignant biliary obstruction; Biliary SEMS (Self-Expanding Metal Stent) placement (C22.1 / K83.1)";
      updated.caseSummary.complaints =
        "Severe obstructive jaundice, intractable pruritus, and cholangitis episodes for 1 month.";
      updated.caseSummary.caseHistory = `Patient presented with inoperable malignant biliary obstruction and high serum bilirubin (16.2 mg/dL). Right percutaneous transhepatic access established. Stricture crossed and internal drainage restored using uncovered self-expanding nitinol biliary stent (10mm x 80mm). Free flow of contrast into duodenum documented. Technical success: ${otherIr.technicalSuccess}.`;

      const proc = updated.procedureDetails[0] || {
        sNo: 1,
        dateTime: new Date().toLocaleDateString("en-IN") + " 10:30 AM",
        operationType: "Major",
        surgicalProcedure: "BILIARY SELF-EXPANDING METAL STENT (SEMS) PLACEMENT",
        anaesthesiaType: "LOCAL",
        procedureDetail: "",
        processDoneBy: "Dr Shashank Sharma",
      };
      proc.surgicalProcedure = "BILIARY SELF-EXPANDING METAL STENT (SEMS) PLACEMENT";
      proc.operationType = "Major";
      proc.procedureDetail = `Right peripheral intrahepatic biliary radicle punctured under ultrasound guidance; 8F vascular sheath placed. Cholangiogram defined tight mid-CBD malignant stricture with pre-stenotic dilatation. 0.035" Stiff Glidewire crossed stricture into duodenum. 10mm x 80mm self-expanding nitinol biliary stent deployed across stricture with precise 1.5 cm proximal and distal tumor margins. Post-deployment cholangiogram demonstrated excellent radial expansion with immediate brisk drainage of contrast into the duodenum. Puncture tract plugged with Gelfoam. Technical result: ${otherIr.technicalSuccess}. Access status: ${otherIr.punctureSiteStatus}.`;
      updated.procedureDetails = [proc];

      updated.systemicExam.localExamination = `Local Examination: Icterus present (+2). Abdomen soft, non-tender. Right flank access site dry and sealed. Distal vitals stable. Analgesia: ${otherIr.analgesia}.`;
      updated.dischargeMedications = [
        { sNo: 1, medicine: "Tab. Cefuroxime Axetil 500mg [RMSCL DDC #505]", genericName: "Cefuroxime Axetil 500mg", dosePower: "500mg", route: "ORAL", frequency: "BD", days: 5, instructions: "Post meals" },
        { sNo: 2, medicine: "Tab. Ursodeoxycholic Acid 300mg [RMSCL DDC #658]", genericName: "Ursodeoxycholic Acid 300mg", dosePower: "300mg", route: "ORAL", frequency: "BD", days: 30, instructions: "With food" },
        { sNo: 3, medicine: "Tab. Pantoprazole 40mg [RMSCL DDC #142]", genericName: "Pantoprazole 40mg", dosePower: "40mg", route: "ORAL", frequency: "OD", days: 10, instructions: "Before breakfast" },
      ];
      const fuDateSems = new Date();
      fuDateSems.setDate(fuDateSems.getDate() + 14);
      const fuDateSemsStr = `${String(fuDateSems.getDate()).padStart(2, "0")}-${String(fuDateSems.getMonth() + 1).padStart(2, "0")}-${fuDateSems.getFullYear()}`;

      updated.dischargeDetails.generalAdvise = "1. Maintain adequate oral hydration (2.5 - 3 L/day).\n2. Follow low-fat diet.\n3. Keep puncture site dry for 48 hours.\n4. Report to hospital emergency immediately if high fever with rigors (cholangitis) or recurrence of jaundice occurs.";
      updated.dischargeDetails.followUp = "Review in IR OPD Room 48 / Gastro Unit after 2 weeks with repeat Liver Function Test (LFT).";
      updated.dischargeDetails.followUpDate = fuDateSemsStr;
    } else if (sub.includes("PCD") || sub.includes("Abscess")) {
      updated.caseSummary.icdDiagnosis =
        "(S) Amoebic liver abscess (A06.4)\n(S) Abscess of liver, unspecified (K75.0)";
      updated.caseSummary.diagnosis =
        "Large liquefying pyogenic/amoebic liver abscess with impending rupture; Ultrasound-guided PCD catheter drainage (K75.0)";
      updated.caseSummary.complaints =
        "High-grade fever with chills, right upper quadrant pain, and tender hepatomegaly for 10 days.";
      updated.caseSummary.caseHistory = `Patient presented with acute right hypochondrial pain and spiking fevers. Ultrasound and CECT revealed a large 9.2 x 8.4 cm liquefying abscess cavity in Right Lobe (Segment VII/VIII) with thin overlying capsule. Posted for emergency ultrasound-guided percutaneous pigtail catheter drainage. Technical success: ${otherIr.technicalSuccess}.`;

      const proc = updated.procedureDetails[0] || {
        sNo: 1,
        dateTime: new Date().toLocaleDateString("en-IN") + " 11:00 AM",
        operationType: "Minor",
        surgicalProcedure: "ULTRASOUND-GUIDED PERCUTANEOUS ABSCESS DRAINAGE (PCD)",
        anaesthesiaType: "LOCAL",
        procedureDetail: "",
        processDoneBy: "Dr Naresh Mangalhara",
      };
      proc.surgicalProcedure = "ULTRASOUND-GUIDED PERCUTANEOUS ABSCESS DRAINAGE (PCD)";
      proc.operationType = "Minor";
      proc.procedureDetail = `Under strict asepsis and local infiltration with 10 mL 2% Lignocaine. Under continuous real-time ultrasound guidance, 18G Trocar needle advanced into central liquefied component of the liver cavity via an intercostal route avoiding pleural sulcus and large intrahepatic vessels. 60 mL thick anchovy-sauce/purulent fluid aspirated and sent for gram stain, bacterial culture, and wet mount. A 0.035" Amplatz stiff wire coiled inside cavity. Tract dilated serially and a 12F locking pigtail catheter deployed into cavity center under fluoroscopic/sonographic confirmation. Total 420 mL pus evacuated. Catheter locked and secured to skin with 2-0 silk suture. Gravity drainage bag attached. Puncture site: ${otherIr.punctureSiteStatus}. Technical result: ${otherIr.technicalSuccess}.`;
      updated.procedureDetails = [proc];

      updated.systemicExam.localExamination = `Local Examination: Right flank PCD tube in situ, secure with suture, draining thick fluid into sterile bag. Abdomen soft, localized RUQ tenderness reduced. Analgesia: ${otherIr.analgesia}.`;
      updated.dischargeMedications = [
        { sNo: 1, medicine: "Tab. Metronidazole 400mg [RMSCL DDC #140]", genericName: "Metronidazole 400mg", dosePower: "400mg", route: "ORAL", frequency: "TID", days: 10, instructions: "After meals" },
        { sNo: 2, medicine: "Cap. Amoxicillin and Potassium Clavulanate 625mg [RMSCL DDC #505]", genericName: "Amoxicillin and Potassium Clavulanate 625mg", dosePower: "625mg", route: "ORAL", frequency: "BD", days: 7, instructions: "Post meals" },
        { sNo: 3, medicine: "Tab. Paracetamol 650mg [RMSCL DDC #28]", genericName: "Paracetamol 650mg", dosePower: "650mg", route: "ORAL", frequency: "TID", days: 5, instructions: "For fever/pain" },
      ];
      const fuDatePcd = new Date();
      fuDatePcd.setDate(fuDatePcd.getDate() + 5);
      const fuDatePcdStr = `${String(fuDatePcd.getDate()).padStart(2, "0")}-${String(fuDatePcd.getMonth() + 1).padStart(2, "0")}-${fuDatePcd.getFullYear()}`;

      updated.dischargeDetails.generalAdvise = "1. Record drain volume daily in mL at 8:00 AM and 8:00 PM.\n2. Keep catheter exit site clean and dry; do not pull or disconnect tubing.\n3. High-protein diet.\n4. Emergency recall if drain stops abruptly while cavity is full, or if acute abdominal pain/guarding occurs.";
      updated.dischargeDetails.followUp = "Review in IR OPD Room 48 after 5 days for drain volume check and ultrasound cavity assessment.";
      updated.dischargeDetails.followUpDate = fuDatePcdStr;
    } else if (sub.includes("SAE") || sub.includes("Splenic")) {
      updated.caseSummary.icdDiagnosis =
        "(S) Hypersplenism (D73.1)\n(S) Splenomegaly, not elsewhere classified (R16.1)";
      updated.caseSummary.diagnosis =
        "Severe hypersplenism with thrombocytopenia and recurrent bleeding; Partial Splenic Artery Embolization (D73.1)";
      updated.caseSummary.complaints =
        "Easy bruising, petechiae, severe left upper quadrant dragging sensation, and profound thrombocytopenia (platelet count 28,000/uL).";
      updated.caseSummary.caseHistory = `Patient presented with massive splenomegaly and severe secondary hypersplenism. Pre-procedure ultrasound demonstrated spleen span > 18 cm with patent splenic and portal veins. Posted for transarterial partial splenic embolization targeting 50-60% parenchyma preservation. Technical success: ${otherIr.technicalSuccess}.`;

      const proc = updated.procedureDetails[0] || {
        sNo: 1,
        dateTime: new Date().toLocaleDateString("en-IN") + " 10:00 AM",
        operationType: "Major",
        surgicalProcedure: "PARTIAL SPLENIC ARTERY EMBOLIZATION (SAE)",
        anaesthesiaType: "LOCAL",
        procedureDetail: "",
        processDoneBy: "Dr Meenu Bagarhatta",
      };
      proc.surgicalProcedure = "PARTIAL SPLENIC ARTERY EMBOLIZATION (SAE)";
      proc.operationType = "Major";
      proc.procedureDetail = `Right common femoral artery access obtained with 5F vascular sheath under local anesthesia. 5F Cobra/Simmons catheter engaged celiac axis and selective splenic arteriogram obtained, demonstrating massive hypervascular splenic parenchyma with tortuous branches. 2.4F microcatheter advanced distally beyond pancreatic and gastric branches into mid/lower polar splenic branches. Embolization performed with 300-500 µm / 500-710 µm PVA particles mixed with non-ionic contrast and antibiotic prophylaxis (Cefazolin) slurry. Completion run verified ~60% parenchymal devascularization with excellent preservation of upper polar splenic perfusion. Sheath removed, manual compression applied for 15 minutes; puncture site intact. Technical result: ${otherIr.technicalSuccess}.`;
      updated.procedureDetails = [proc];

      updated.systemicExam.localExamination = `Local Examination: Right groin puncture site: ${otherIr.punctureSiteStatus}. Spleen palpable 5 cm below costal margin, mild left hypochondrial tenderness (post-embolization response). Analgesia: ${otherIr.analgesia}. Distal pulses intact.`;
      updated.dischargeMedications = [
        { sNo: 1, medicine: "Tab. Cefixime 200mg [RMSCL DDC #112]", genericName: "Cefixime 200mg", dosePower: "200mg", route: "ORAL", frequency: "BD", days: 7, instructions: "Post meals" },
        { sNo: 2, medicine: "Tab. Tramadol 37.5mg + Paracetamol 325mg [RMSCL DDC #624]", genericName: "Tramadol 37.5mg + Paracetamol 325mg", dosePower: "1 Tab", route: "ORAL", frequency: "BD", days: 5, instructions: "Post meals for post-embolization pain" },
        { sNo: 3, medicine: "Tab. Pantoprazole 40mg [RMSCL DDC #142]", genericName: "Pantoprazole 40mg", dosePower: "40mg", route: "ORAL", frequency: "OD", days: 7, instructions: "Before breakfast" },
      ];
      const fuDateSae = new Date();
      fuDateSae.setDate(fuDateSae.getDate() + 10);
      const fuDateSaeStr = `${String(fuDateSae.getDate()).padStart(2, "0")}-${String(fuDateSae.getMonth() + 1).padStart(2, "0")}-${fuDateSae.getFullYear()}`;

      updated.dischargeDetails.generalAdvise = "1. Strict bed rest for 48 hours; avoid abdominal pressure or heavy lifting.\n2. Low-grade fever and left flank pain are expected post-embolization syndrome symptoms.\n3. Puncture site care: keep dry for 48 hours.\n4. Immediate hospital visit if severe breathlessness, left shoulder tip pain, or temperature > 102°F occurs.";
      updated.dischargeDetails.followUp = "Review in IR OPD Room 48 with repeat CBC (Platelet count) and ultrasound Doppler after 10 days.";
      updated.dischargeDetails.followUpDate = fuDateSaeStr;
    } else if (sub.includes("Fistuloplasty") || sub.includes("AV")) {
      updated.caseSummary.icdDiagnosis =
        "(S) Mechanical complication of other vascular grafts and implants (T82.8)\n(S) End stage renal disease (N18.6)";
      updated.caseSummary.diagnosis =
        "Failing hemodialysis AV fistula due to juxta-anastomotic outflow vein stenosis; Percutaneous transluminal fistuloplasty (T82.8 / N18.6)";
      updated.caseSummary.complaints =
        "Elevated venous dialysis return pressures (>220 mmHg), prolonged post-dialysis cannulation bleeding, and poor flow rate for 2 weeks.";
      updated.caseSummary.caseHistory = `Patient on maintenance hemodialysis with failing left radiocephalic AV fistula. Pre-procedure ultrasound demonstrated >80% focal stenosis at the juxta-anastomotic outflow cephalic vein segment. Posted for percutaneous transluminal angioplasty. Technical success: ${otherIr.technicalSuccess}.`;

      const proc = updated.procedureDetails[0] || {
        sNo: 1,
        dateTime: new Date().toLocaleDateString("en-IN") + " 12:00 PM",
        operationType: "Minor",
        surgicalProcedure: "PERCUTANEOUS TRANSLUMINAL FISTULOPLASTY (AVF PTA)",
        anaesthesiaType: "LOCAL",
        procedureDetail: "",
        processDoneBy: "Dr Alok Verma",
      };
      proc.surgicalProcedure = "PERCUTANEOUS TRANSLUMINAL FISTULOPLASTY (AVF PTA)";
      proc.operationType = "Minor";
      proc.procedureDetail = `Under ultrasound guidance and local anesthesia, retrograde puncture of the draining cephalic vein performed; 6F short vascular sheath placed. Diagnostic fistulogram revealed 85% focal juxta-anastomotic stenosis. 0.035" hydrophilic wire crossed lesion. High-pressure balloon (Conquest/Mustang 6mm x 40mm) inflated to 20 atmospheres for 90 seconds. Full waist effacement achieved. Post-plasty fistulogram demonstrated zero residual stenosis with immediate restoration of vigorous, continuous thrill. Sheath removed, purse-string hemostatic suture applied. Technical result: ${otherIr.technicalSuccess}.`;
      updated.procedureDetails = [proc];

      updated.systemicExam.localExamination = `Local Examination: Left forearm AVF: Brisk continuous palpable thrill and loud systolic-diastolic machinery murmur. Puncture site sealed, no hematoma. Hand warm, radial pulse palpable (+++).`;
      updated.dischargeMedications = [
        { sNo: 1, medicine: "Tab. Paracetamol 650mg [RMSCL DDC #28]", genericName: "Paracetamol 650mg", dosePower: "650mg", route: "ORAL", frequency: "SOS", days: 3, instructions: "For puncture site ache" },
        { sNo: 2, medicine: "Cap. Amoxicillin and Potassium Clavulanate 625mg [RMSCL DDC #505]", genericName: "Amoxicillin and Potassium Clavulanate 625mg", dosePower: "625mg", route: "ORAL", frequency: "BD", days: 5, instructions: "Post meals" },
        { sNo: 3, medicine: "Mupirocin 2% Ointment [RMSCL DDC #278]", genericName: "Mupirocin 2% Ointment", dosePower: "Local", route: "TOPICAL", frequency: "BD", days: 5, instructions: "Apply locally over puncture site" },
      ];
      const fuDateFistuloStr = getNextValidWorkingAppointmentDate(new Date().toISOString(), 14);

      updated.dischargeDetails.generalAdvise = "1. Avoid taking blood pressure, blood draws, or wearing tight wristbands/jewelry on the fistula arm.\n2. Palpate the thrill twice daily (morning & night).\n3. Hemodialysis permitted from existing access after 24 hours.\n4. Report to emergency immediately if the thrill or murmur disappears.";
      updated.dischargeDetails.followUp = "Review in Dialysis Access Clinic / IR OPD Room 48 in 2 weeks.";
      updated.dischargeDetails.followUpDate = fuDateFistuloStr;
    } else if (sub.includes("TACE")) {
      updated.caseSummary.icdDiagnosis =
        "(S) Malignant neoplasm of liver and intrahepatic bile ducts (C22.0)\n(S) Viral hepatitis B without mention of hepatic coma (B18.1)";
      updated.caseSummary.diagnosis =
        "Hepatocellular carcinoma (HCC, BCLC Stage B) in cirrhotic liver; Transarterial chemoembolization (TACE) (C22.0)";
      updated.caseSummary.complaints =
        "Right upper quadrant fullness, weight loss, and incidental detection of 4.5 cm hypervascular liver mass on CECT screening.";
      updated.caseSummary.caseHistory = `Patient with HBV-related Child-Pugh A cirrhosis presented with single 4.8 cm arterial-enhancing liver lesion in Segment VI with classic wash-out. Alpha-fetoprotein (AFP) 420 ng/mL. Eco-status 0, preserved liver function. Underwent superselective transarterial chemoembolization (cTACE). Technical success: ${otherIr.technicalSuccess}.`;

      const proc = updated.procedureDetails[0] || {
        sNo: 1,
        dateTime: new Date().toLocaleDateString("en-IN") + " 10:00 AM",
        operationType: "Major",
        surgicalProcedure: "CONVENTIONAL TRANSARTERIAL CHEMOEMBOLIZATION (cTACE)",
        anaesthesiaType: "LOCAL",
        procedureDetail: "",
        processDoneBy: "Dr Alok Verma",
      };
      proc.surgicalProcedure = "CONVENTIONAL TRANSARTERIAL CHEMOEMBOLIZATION (cTACE)";
      proc.operationType = "Major";
      proc.procedureDetail = `Right common femoral artery accessed with 5F sheath under local anesthesia. Celiac and common hepatic angiograms defined arterial anatomy and confirmed tumor blush supplied by a branch of the right hepatic artery. 2.0F microcatheter advanced superselectively into the tumor-feeding branch. Emulsion of Doxorubicin (30-50 mg) with 8-10 mL Lipiodol infused under continuous fluoroscopy until complete tumor saturation and vascular stasis achieved, followed by Gelfoam slurry / PVA particles (300-500 µm) embolization. Completion angiogram confirmed dense Lipiodol retention throughout tumor and cessation of arterial blush. Sheath removed, hemostasis achieved. Technical result: ${otherIr.technicalSuccess}.`;
      updated.procedureDetails = [proc];

      updated.systemicExam.localExamination = `Local Examination: Right groin puncture site: ${otherIr.punctureSiteStatus}. Abdomen soft, mild tenderness over right lobe. Analgesia: ${otherIr.analgesia}. Distal pulses intact.`;
      updated.dischargeMedications = [
        { sNo: 1, medicine: "Tab. Ondansetron 4mg [RMSCL DDC #167]", genericName: "Ondansetron 4mg", dosePower: "4mg", route: "ORAL", frequency: "BD", days: 3, instructions: "Before food for nausea" },
        { sNo: 2, medicine: "Tab. Pantoprazole 40mg [RMSCL DDC #142]", genericName: "Pantoprazole 40mg", dosePower: "40mg", route: "ORAL", frequency: "OD", days: 14, instructions: "Before breakfast" },
        { sNo: 3, medicine: "Tab. Cefixime 200mg [RMSCL DDC #112]", genericName: "Cefixime 200mg", dosePower: "200mg", route: "ORAL", frequency: "BD", days: 5, instructions: "Post meals" },
        { sNo: 4, medicine: "Tab. Paracetamol 650mg [RMSCL DDC #28]", genericName: "Paracetamol 650mg", dosePower: "650mg", route: "ORAL", frequency: "TID", days: 5, instructions: "For post-embolization fever/ache" },
      ];
      const fuDateTaceStr = getNextValidWorkingAppointmentDate(new Date().toISOString(), 28);

      updated.dischargeDetails.generalAdvise = "1. Adequate oral fluids (2-3 L/day) for contrast and chemotherapy clearance.\n2. Light, non-oily diet.\n3. Puncture site care: keep dry for 48 hours.\n4. Report to emergency if persistent intractable vomiting, severe abdominal pain, or jaundice occurs.";
      updated.dischargeDetails.followUp = "Review in IR OPD Room 48 / Liver Clinic in 4 weeks with dynamic multiphasic CECT and serum AFP.";
      updated.dischargeDetails.followUpDate = fuDateTaceStr;
    } else {
      // Liver Biopsy
      updated.caseSummary.icdDiagnosis =
        "(S) Other and unspecified cirrhosis of liver (K74.6)\n(S) Abnormal liver function tests (R94.5)";
      updated.caseSummary.diagnosis =
        "Chronic parenchymal liver disease / unexplained hepatopathy under diagnostic evaluation (K74.6)";
      updated.caseSummary.complaints =
        "Fatigue, generalized weakness, and persistent transaminitis for 4 months.";
      updated.caseSummary.caseHistory = `Patient presented with chronic unexplained liver enzyme elevation and suspected diffuse parenchymal liver disease. Pre-biopsy coagulation profile and platelet counts were within safe limits (INR < 1.2, Platelets > 150k). Underwent targeted ultrasound-guided percutaneous core liver biopsy. Technical success: ${otherIr.technicalSuccess}.`;

      const proc = updated.procedureDetails[0] || {
        sNo: 1,
        dateTime: new Date().toLocaleDateString("en-IN") + " 10:00 AM",
        operationType: "Minor",
        surgicalProcedure: "",
        anaesthesiaType: "LOCAL",
        procedureDetail: "",
        processDoneBy: "Dr Alok Verma",
      };
      proc.surgicalProcedure =
        "ULTRASOUND-GUIDED PERCUTANEOUS CORE LIVER BIOPSY";
      proc.operationType = "Minor";
      proc.anaesthesiaType = "LOCAL";
      proc.procedureDetail = `Under strict asepsis, right subcostal/intercostal area prepped and draped. Real-time ultrasound mapping of liver parenchyma performed, confirming absence of large surface vessels. Local anesthesia (10 mL 2% Lignocaine) infiltrated down to Glisson's capsule. An 18G semi-automated Tru-Cut core biopsy needle introduced under real-time US monitoring. 3 core biopsy specimens (each 15-20 mm length) retrieved into formalin fixative for histopathology and immunohistochemistry. Biopsy tract plugged with Gelfoam slurry. Post-biopsy sonography demonstrated no capsular breach, subcapsular hematoma, or intrahepatic bleeding. Patient kept in right lateral decubitus position for 2 hours. Technical result: ${otherIr.technicalSuccess}. Puncture site: ${otherIr.punctureSiteStatus}.`;
      updated.procedureDetails = [proc];

      updated.systemicExam.localExamination = `Local Examination: Puncture site: ${otherIr.punctureSiteStatus}. No abdominal guarding or tenderness. Distal vitals stable. Analgesia: ${otherIr.analgesia}.`;

      updated.dischargeMedications = [
        {
          sNo: 1,
          medicine: "Tab. Paracetamol 650mg [RMSCL DDC #28]",
          genericName: "Paracetamol 650mg",
          dosePower: "650mg",
          route: "ORAL",
          frequency: "SOS",
          days: 3,
          instructions: "For puncture site ache",
        },
        {
          sNo: 2,
          medicine: "Tab. Pantoprazole 40mg [RMSCL DDC #142]",
          genericName: "Pantoprazole 40mg",
          dosePower: "40mg",
          route: "ORAL",
          frequency: "OD",
          days: 5,
          instructions: "Before breakfast",
        },
      ];

      const fuDateBiopsyStr = getNextValidWorkingAppointmentDate(new Date().toISOString(), 5);

      updated.dischargeDetails.generalAdvise = `1. Rest quietly at home for 24 hours; avoid lifting heavy weights or strenuous work for 48 hours.\n2. Keep waterproof dressing dry for 24 hours.\n3. Puncture site care: ${otherIr.punctureSiteStatus}.\n4. Report immediately if dizziness, shoulder tip pain, severe right upper abdominal pain, or black stools occur.`;
      updated.dischargeDetails.followUp = otherIr.followUpAdvice;
      updated.dischargeDetails.followUpDate = fuDateBiopsyStr;
    }
  }

  // Update post-operative notes based on category and parameters
  if (category === "varicose_veins") {
    updated.postOperativeNotes = {
      accessSiteHemostasis: `Puncture site (${varicose.laterality} GSV / access site): Complete hemostasis achieved. Puncture clean, dry and intact with zero hematoma. Class II graduated compression stocking applied.`,
      telemetryVitals: updated.postOperativeNotes?.telemetryVitals || "",
      sheathRemovalTime: updated.postOperativeNotes?.sheathRemovalTime || `${new Date().toLocaleDateString("en-IN")} 10:45 AM (Immediate post-closure in Angiosuite)`,
      sheathStatus: "Removed",
      recoveryStatus: `Conscious, oriented, pain minimal (VAS 1/10). Early ambulation protocol initiated with Class II compression stockings in place. Able to void urine and ambulate comfortably.`,
      recoveryBed: "Cath-Lab Holding Rec-01",
      distalPulses: "Strong (+++) - Dorsalis pedis and posterior tibial arterial pulsations palpated strong and equal bilaterally",
      immediateComplications: "Nil - Zero hematoma, zero DVT on completion Doppler, zero sensory deficit",
      recordedBy: updated.procedureDetails[0]?.processDoneBy || "Dr. Neel Yadav",
      recordedAt: `${new Date().toLocaleDateString("en-IN")} 11:30 AM`,
      notes: `Successful ${varicose.modality} ablation of ${varicose.laterality} GSV. Non-compressible occluded GSV cast confirmed. Patient cleared for discharge.`,
    };
  } else if (category === "varicocele") {
    updated.postOperativeNotes = {
      accessSiteHemostasis: `Right common femoral vein / IJV puncture site: ${otherIr.punctureSiteStatus || "Clean, Dry & Intact (No Hematoma/Bruit)"}. Manual compression applied; complete seal achieved.`,
      telemetryVitals: updated.postOperativeNotes?.telemetryVitals || "",
      sheathRemovalTime: `${new Date().toLocaleDateString("en-IN")} 11:00 AM (Immediate post-embolization)`,
      sheathStatus: "Removed",
      recoveryStatus: `Conscious and oriented. Minimal scrotal discomfort. Supine bed rest for 2 hours maintained. Ice pack applied to access and scrotal site.`,
      recoveryBed: "Daycare Holding Bay 03",
      distalPulses: "Strong (+++) - Bilateral femoral and distal peripheral pulses intact",
      immediateComplications: "Nil - Zero access site hematoma, zero coil migration, zero scrotal swelling",
      recordedBy: updated.procedureDetails[0]?.processDoneBy || "Dr. Neel Yadav",
      recordedAt: `${new Date().toLocaleDateString("en-IN")} 11:45 AM`,
      notes: "Internal spermatic vein embolization completed. Hemostasis verified. Discharged on oral NSAIDs and scrotal support advice.",
    };
  } else {
    updated.postOperativeNotes = {
      accessSiteHemostasis: `Access site status: ${otherIr.punctureSiteStatus}. Complete hemostasis verified with pressure dressing in situ.`,
      telemetryVitals: updated.postOperativeNotes?.telemetryVitals || "",
      sheathRemovalTime: `${new Date().toLocaleDateString("en-IN")} 11:30 AM (Vascular closure / pressure hemostasis confirmed)`,
      sheathStatus: "Removed",
      recoveryStatus: `Conscious, oriented, hemodynamically stable. Pain control: ${otherIr.analgesia}. Recovery bed rest instructions active.`,
      recoveryBed: "Cath-Lab Holding PACU-01",
      distalPulses: "Strong (+++) - Distal peripheral pulses palpated and intact bilaterally",
      immediateComplications: "Nil - Zero access site bleeding, zero pseudoaneurysm, zero distal vascular compromise",
      recordedBy: updated.procedureDetails[0]?.processDoneBy || "Dr. Neel Yadav",
      recordedAt: `${new Date().toLocaleDateString("en-IN")} 12:15 PM`,
      notes: `Technical outcome: ${otherIr.technicalSuccess}. Post-operative recovery monitoring completed uneventfully.`,
    };
  }

  return updated;
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function DischargeSummaryPage() {
  const patients = useEndoflowStore((s) => s.patients);

  // Pre-generate summaries for default patients
  const generatedPatientSummaries = useMemo(() => {
    const map: Record<string, IhmsDischargeSummaryData> = {
      EX01: SUNIL_KUMAR_DISCHARGE,
      EX02: BUDD_CHIARI_DISCHARGE,
    };
    patients.forEach((p) => {
      map[p.id] = generateIhmsDischargeForPatient({
        id: p.id,
        name: p.name,
        age: p.age,
        sex: p.sex,
        hid: p.hid,
        scanId: p.scanId,
        unit: p.unit,
        postedBy: p.postedBy,
        summary: p.summary,
        procedure: p.procedure,
        procedureKey: p.procedureKey || "varicose_veins_venaseal",
        scheme: p.scheme,
        chiefComplaints: p.chiefComplaints,
        clinicalHistory3Months: p.clinicalHistory3Months || p.history3Months,
        cectFindings: p.cectFindings,
        ipd: p.ipd,
        labs: p.labs,
        inRoom: p.inRoom,
        postOp: p.postOp,
        attachments: p.attachments,
      });
    });
    return map;
  }, [patients]);

  const [selectedPatientId, setSelectedPatientId] = useState<string>("EX01");
  const [activeTab, setActiveTab] = useState<"preview" | "editor" | "analytics" | "sso" | "history" | "archive">("preview");
  const [masterCatalogOpen, setMasterCatalogOpen] = useState(false);
  const [copyToast, setCopyToast] = useState<string | null>(null);

  // Sync with URL query parameter on mount (?tab=archive)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("tab") === "archive") {
        setActiveTab("archive");
      }
    }
  }, []);

  // New dynamic templates state
  const [selectedProcedureKey, setSelectedProcedureKey] = useState<string>("varicose_veins");
  const [dynamicCriteria, setDynamicCriteria] = useState<Record<string, any>>({});
  const [isFindingsDropdownOpen, setIsFindingsDropdownOpen] = useState<boolean>(false);

  // Procedure Category Selector (Legacy - keeping for fallback)
  const [procedureCategory, setProcedureCategory] =
    useState<ProcedureCategory>("varicose_veins");

  // Varicose Veins Criteria State
  const [varicoseCriteria, setVaricoseCriteria] = useState<VaricoseCriteria>({
    laterality: "Left lower limb",
    modality: "VenaSeal_UGFS",
    findings: {
      varicoseVeins: true,
      venousUlcer: false,
      hyperpigmentation: false,
      lipodermatosclerosis: false,
      coronaPhlebectatica: false,
      edema: false,
      achingPain: false,
      nightCramps: false,
      restlessLegs: false,
      thrombophlebitis: false,
    },
    symptomDuration: "10 months",
    itchingDuration: "3 months",
    ulcerSizeAndSite: "None",
    familyHistory: "Absent",
    truncal: createDefaultTruncal(),
    perforators: createDefaultPerforators(),
    sclerotherapy: createDefaultSclerotherapy(),
    ceapClass: "C4a",
    vcss: createDefaultVcss(),
    compressionStockingsApplied: true,
    immediateAmbulationMinutes: 25,
    vasPainScore: 1,
    egitStatus: "Grade 0 (Absent - Complete occlusion to 5cm SFJ/SPJ)",
    chairScreening: "Negative (No erythema, urticaria or hypersensitivity)",
  });

  // Varicocele Criteria State
  const [varicoceleCriteria, setVaricoceleCriteria] =
    useState<VaricoceleCriteria>({
      clinicalGrade: "Grade III (Visible through scrotal skin)",
      side: "Left",
      indication: "Scrotal pain & heaviness",
      duration: "6 months",
    });

  // Other IR Procedures Criteria State
  const [otherIrCriteria, setOtherIrCriteria] = useState<OtherIrCriteria>({
    subProcedure: "TIPS / DIPS (Budd-Chiari / Portal HTN)",
    technicalSuccess: "Complete Technical Success (100%)",
    punctureSiteStatus: "Clean, Dry & Intact (No Hematoma/Bruit)",
    analgesia: "Adequate Pain Control (VAS 1-2/10, Oral NSAIDs/Paracetamol)",
    followUpAdvice: "Ultrasound Doppler check at 1 month + Hepatic Panel",
  });

  // Active Summary Data
  const [summaryData, setSummaryData] = useState<IhmsDischargeSummaryData>(
    SUNIL_KUMAR_DISCHARGE
  );

  // Re-synthesize whenever criteria or procedure category changes
  const runAutoSynthesis = useCallback(
    (
      cat: ProcedureCategory,
      vv: VaricoseCriteria,
      vc: VaricoceleCriteria,
      oi: OtherIrCriteria,
      base: IhmsDischargeSummaryData
    ) => {
      const syn = synthesizeDischargeRecord({
        category: cat,
        varicose: vv,
        varicocele: vc,
        otherIr: oi,
        baseRecord: base,
      });
      setSummaryData(syn);
    },
    []
  );

  // Auto-sync on criteria change
  useEffect(() => {
    if (selectedProcedureKey === 'varicose_veins') {
      // Use existing detailed VaricoseCriteria flow
      runAutoSynthesis(
        procedureCategory,
        varicoseCriteria,
        varicoceleCriteria,
        otherIrCriteria,
        summaryData
      );
    } else {
      const template = getDischargeTemplate(selectedProcedureKey);
      if (!template) return;
      
      const complaints = template.synthesizeComplaints(dynamicCriteria);
      const history = template.synthesizeHistory(dynamicCriteria);
      const localExam = template.synthesizeLocalExam(dynamicCriteria);
      const operativeNote = template.synthesizeOperativeNote(dynamicCriteria);
      const diagnosis = template.synthesizeDiagnosis(dynamicCriteria);
      const postOpRec = template.synthesizePostOpRecoveryNote
        ? template.synthesizePostOpRecoveryNote(dynamicCriteria)
        : null;
      
      setSummaryData(prev => {
        const familyRisk = template.synthesizeFamilyAndRiskHistory
          ? template.synthesizeFamilyAndRiskHistory(dynamicCriteria)
          : (prev.caseSummary?.familyHistory || "Absent");

        return {
          ...prev,
          caseSummary: {
          ...prev.caseSummary,
          complaints,
          caseHistory: history,
          diagnosis,
          familyHistory: familyRisk,
          riskFactor: familyRisk,
          icdDiagnosis: `(S) ${template.icdPrimary.description} (${template.icdPrimary.code})`,
        },
        systemicExam: {
          ...prev.systemicExam,
          localExamination: localExam,
        },
        procedureDetails: [{
          ...(prev.procedureDetails[0] || {}),
          sNo: 1,
          dateTime: new Date().toLocaleDateString("en-IN") + " 10:00 AM",
          processDoneBy: "Dr. Alok Verma",
          procedureDetail: operativeNote,
          surgicalProcedure: template.procedureFamily,
          operationType: template.procedureType,
          anaesthesiaType: template.anaesthesiaDefault as "LOCAL" | "CONSCIOUS SEDATION" | "GENERAL" | "REGIONAL",
        }],
        dischargeMedications: [
          ...template.defaultMedications,
          ...template.conditionalMedications
            .filter(cm => dynamicCriteria[cm.conditionKey] === cm.conditionValue)
            .map(cm => cm.medication),
        ].map((m, i) => ({ ...m, sNo: i + 1 })),
        dischargeDetails: {
          ...prev.dischargeDetails,
          generalAdvise: template.dischargeAdvice.join('\n'),
        },
        postOperativeNotes: {
          accessSiteHemostasis: postOpRec?.accessSiteHemostasis || `Access site hemostasis: Pressure dressing intact. Site clean, dry, zero active oozing or hematoma.`,
          telemetryVitals: prev.postOperativeNotes?.telemetryVitals || "",
          sheathRemovalTime: `${new Date().toLocaleDateString("en-IN")} 11:30 AM (Vascular closure confirmed)`,
          sheathStatus: "Removed",
          recoveryStatus: postOpRec?.recoveryStatus || `Conscious, oriented x3, hemodynamically stable. Post-op orders: ${template.dischargeAdvice[0] || "Rest quietly in bed."}`,
          recoveryBed: postOpRec?.recoveryBedMonitoring || prev.postOperativeNotes?.recoveryBed || "Cath-Lab Holding Rec-01",
          distalPulses: postOpRec?.distalPulses || "Strong (+++) - Bilateral distal peripheral pulses intact",
          immediateComplications: postOpRec?.immediateComplications || "Nil documented - Zero immediate procedural complications",
          recordedBy: "Dr. Neel Yadav",
          recordedAt: `${new Date().toLocaleDateString("en-IN")} 12:00 PM`,
          notes: postOpRec?.notes || `Post-procedural recovery for ${template.procedureFamily} completed uneventfully. Vitals and access site hemostasis verified.`,
        },
      };
    });
  }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [procedureCategory, varicoseCriteria, varicoceleCriteria, otherIrCriteria, selectedProcedureKey, dynamicCriteria]);

  // Handle Patient Selection
  const handleSelectPatient = (id: string) => {
    setSelectedPatientId(id);

    let base: IhmsDischargeSummaryData;
    if (generatedPatientSummaries[id]) {
      base = JSON.parse(JSON.stringify(generatedPatientSummaries[id]));
    } else {
      base = JSON.parse(JSON.stringify(SUNIL_KUMAR_DISCHARGE));
      base.id = `IHMS-NEW-${Date.now()}`;
      base.admissionDetails.patientName = "New Patient Record";
      base.admissionDetails.hid = `15022${Math.floor(
        10000000 + Math.random() * 90000000
      )}`;
      base.admissionDetails.admissionNo = `A/SMSH/26/${Math.floor(
        100000 + Math.random() * 900000
      )}`;
    }

    // Auto-detect category from procedure or patient
    const procLower = (
      base.procedureDetails[0]?.surgicalProcedure || ""
    ).toLowerCase();
    const caseLower = base.caseSummary.diagnosis.toLowerCase();

    let detectedCat: ProcedureCategory = "varicose_veins";
    if (
      procLower.includes("varicose") ||
      procLower.includes("venaseal") ||
      caseLower.includes("varicose")
    ) {
      detectedCat = "varicose_veins";
    } else if (
      procLower.includes("varicocele") ||
      caseLower.includes("varicocele")
    ) {
      detectedCat = "varicocele";
    } else {
      detectedCat = "other_ir";
    }

    setProcedureCategory(detectedCat);
    runAutoSynthesis(
      detectedCat,
      varicoseCriteria,
      varicoceleCriteria,
      otherIrCriteria,
      base
    );
  };

  const renderCriteriaPanel = () => {
    const template = getDischargeTemplate(selectedProcedureKey);
    if (!template) return null;
    
    // Group criteria by their group field
    const groups: Record<string, CriteriaField[]> = {};
    template.criteriaFields.forEach(f => {
      const g = f.group || 'General';
      if (!groups[g]) groups[g] = [];
      groups[g].push(f);
    });
    
    return Object.entries(groups).map(([groupName, fields]) => (
      <div key={groupName} className="mb-4">
        <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">{groupName}</h4>
        <div className="space-y-2">
          {fields.map(field => {
            if (field.type === 'checkbox') {
              return (
                <label key={field.key} className="flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={!!dynamicCriteria[field.key]}
                    onChange={(e) => setDynamicCriteria(prev => ({...prev, [field.key]: e.target.checked}))}
                  />
                  {field.label}
                </label>
              );
            }
            if (field.type === 'select' && field.options) {
              return (
                <div key={field.key}>
                  <label className="text-xs text-gray-500">{field.label}</label>
                  <select className="w-full text-sm border rounded p-1"
                    value={dynamicCriteria[field.key] || ''}
                    onChange={(e) => setDynamicCriteria(prev => ({...prev, [field.key]: e.target.value}))}
                  >
                    {field.options.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              );
            }
            if (field.type === 'text') {
              return (
                <div key={field.key}>
                  <label className="text-xs text-gray-500">{field.label}</label>
                  <input type="text" className="w-full text-sm border rounded p-1"
                    value={dynamicCriteria[field.key] || ''}
                    onChange={(e) => setDynamicCriteria(prev => ({...prev, [field.key]: e.target.value}))}
                  />
                </div>
              );
            }
            if (field.type === 'number') {
              return (
                <div key={field.key}>
                  <label className="text-xs text-gray-500">{field.label}</label>
                  <input type="number" className="w-full text-sm border rounded p-1"
                    value={dynamicCriteria[field.key] || ''}
                    onChange={(e) => setDynamicCriteria(prev => ({...prev, [field.key]: parseFloat(e.target.value) || 0}))}
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    ));
  };

  const handleSelectFromMasterCatalog = (proc: MasterProcedure) => {
    setSummaryData((prev) => {
      const copy: IhmsDischargeSummaryData = JSON.parse(JSON.stringify(prev));
      copy.caseSummary.diagnosis = `${proc.title} (${proc.maayRghsCompatibility.icd10})`;
      copy.caseSummary.icdDiagnosis = `(S) ${proc.maayRghsCompatibility.packageName} (${proc.maayRghsCompatibility.icd10})`;
      copy.caseSummary.caseHistory = `Patient presented for elective endovascular intervention. Target anatomy: ${proc.targetAnatomy.join(", ")}. Evaluated and cleared for procedure under ${proc.sedation}. Diagnostic evaluation verified.`;
      
      const newProcItem = {
        sNo: 1,
        dateTime: new Date().toLocaleDateString("en-IN") + " 10:30 AM",
        operationType: "Major" as const,
        surgicalProcedure: proc.title,
        anaesthesiaType: (proc.sedation.includes("GA") ? "GENERAL" : proc.sedation.includes("Sedation") ? "CONSCIOUS SEDATION" : "LOCAL") as "LOCAL" | "CONSCIOUS SEDATION" | "GENERAL" | "REGIONAL",
        procedureDetail: `${proc.proceduralNarrativeTemplate}\nAccess Site: ${proc.accessSiteDefault}. Sheath Profile: ${proc.sheathDefault}. Catheter System: ${proc.cathetersAndWires}.${proc.embolicOrImplants ? ` Embolics/Implants: ${proc.embolicOrImplants}.` : ""} Immediate completion imaging confirms technical success and hemostasis.`,
        processDoneBy: "Dr Meenu Bagarhatta",
      };
      copy.procedureDetails = [newProcItem];
      copy.dischargeDetails.generalAdvise = `${proc.postOpCare.immobilizationInstructions} Hydration Protocol: ${proc.postOpCare.hydrationProtocol}. Red flags: ${proc.postOpCare.redFlags.join(", ")}.`;
      copy.postOperativeNotes = {
        accessSiteHemostasis: `Access Site (${proc.accessSiteDefault}): Manual compression / closure device deployed. Complete hemostasis verified. Zero oozing.`,
        telemetryVitals: prev.postOperativeNotes?.telemetryVitals || "BP: 120/78 mmHg, HR: 72 bpm regular, SpO2: 99% on room air, RR: 16/min",
        sheathRemovalTime: `${new Date().toLocaleDateString("en-IN")} 11:30 AM (Sheath profile ${proc.sheathDefault} removed; closure confirmed)`,
        sheathStatus: "Removed",
        recoveryStatus: `Conscious, oriented, stable recovery. ${proc.postOpCare.immobilizationInstructions}`,
        recoveryBed: "PACU Holding / Cath-Lab Recovery",
        distalPulses: "Strong (+++) - Distal peripheral pulses bilaterally palpable and equal",
        immediateComplications: "Nil documented - Technical success and immediate stability achieved",
        recordedBy: "Dr Meenu Bagarhatta",
        recordedAt: `${new Date().toLocaleDateString("en-IN")} 12:00 PM`,
        notes: `Post-op observation for ${proc.title}. Strict immobilization and hydration protocol active.`,
      };
      return copy;
    });
    setProcedureCategory("other_ir");
    showNotification(`Applied '${proc.title}' from Master Catalog!`);
  };

  const handleSelectFromAnalytics = (procName: string) => {
    setSummaryData((prev) => {
      const copy: IhmsDischargeSummaryData = JSON.parse(JSON.stringify(prev));
      copy.caseSummary.diagnosis = `${procName}`;
      if (copy.procedureDetails && copy.procedureDetails[0]) {
        copy.procedureDetails[0].surgicalProcedure = procName;
      }
      return copy;
    });
    setProcedureCategory("other_ir");
    setActiveTab("preview");
    showNotification(`Selected '${procName}' from SMS Cath-Lab Registry!`);
  };

  const showNotification = (msg: string) => {
    setCopyToast(msg);
    setTimeout(() => setCopyToast(null), 3000);
  };

  // Clipboard Copiers for Rajasthan IHMS Portal
  const copyTextToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      showNotification(`Copied ${label} for IHMS portal!`);
    });
  };

  const handleCopyFullIhms = () => {
    const fullText = `SAWAI MAN SINGH HOSPITAL JAIPUR
DEPARTMENT OF INTERVENTIONAL RADIOLOGY
DISCHARGE SUMMARY (IHMS E-HOSPITAL RECORD)
==================================================
PATIENT ADMISSION DETAILS:
HID: ${summaryData.admissionDetails.hid} | Adm No: ${
      summaryData.admissionDetails.admissionNo
    }
Name: ${summaryData.admissionDetails.patientName} | Age/Sex: ${
      summaryData.admissionDetails.age
    } / ${summaryData.admissionDetails.gender}
Category: ${summaryData.admissionDetails.patientCategory} | Ward/Bed: ${
      summaryData.admissionDetails.wardBed
    }
Date of Admission: ${
      summaryData.admissionDetails.dateOfAdmission
    } | Discharge: ${summaryData.admissionDetails.dateOfDischarge}
Department: ${summaryData.admissionDetails.departmentName} | Unit: ${
      summaryData.admissionDetails.unitName
    } (Head: ${summaryData.admissionDetails.unitHead})

CASE SUMMARY / DIAGNOSIS:
ICD Diagnosis: ${summaryData.caseSummary.icdDiagnosis}
Diagnosis: ${summaryData.caseSummary.diagnosis}
Complaints: ${summaryData.caseSummary.complaints}
Case Summary: ${summaryData.caseSummary.caseHistory}
Past History: ${summaryData.caseSummary.pastHistory}
Family History: ${summaryData.caseSummary.familyHistory}
Personal History: ${summaryData.caseSummary.personalHistory}
Risk Factor: ${summaryData.caseSummary.riskFactor}

GENERAL PHYSICAL EXAMINATION:
At Admission: BP: ${
      summaryData.physicalExam.atAdmission.bloodPressure
    } mmHg | PR: ${summaryData.physicalExam.atAdmission.pr} /min | Temp: ${
      summaryData.physicalExam.atAdmission.temp
    } F | RR: ${summaryData.physicalExam.atAdmission.rr} /min | SpO2: ${
      summaryData.physicalExam.atAdmission.spo2
    }%
Pallor: ${summaryData.physicalExam.atAdmission.pallor} | Icterus: ${
      summaryData.physicalExam.atAdmission.icterus
    } | Edema: ${summaryData.physicalExam.atAdmission.edema}
At Discharge: BP: ${
      summaryData.physicalExam.atDischarge.bloodPressure
    } mmHg | PR: ${summaryData.physicalExam.atDischarge.pr} /min | Temp: ${
      summaryData.physicalExam.atDischarge.temp
    } F | RR: ${summaryData.physicalExam.atDischarge.rr} /min | SpO2: ${
      summaryData.physicalExam.atDischarge.spo2
    }%

SYSTEMIC EXAMINATION:
Respiration: ${summaryData.systemicExam.respiration}
CVS: ${summaryData.systemicExam.cvs}
Per Abdomen: ${summaryData.systemicExam.perAbdomen}
CNS: ${summaryData.systemicExam.cns}
Local Examination: ${summaryData.systemicExam.localExamination}

INVESTIGATIONS:
Sonography: ${summaryData.investigations.sonography || "NAD"}
CT-Scan: ${summaryData.investigations.ctScan || "NAD"}
ECG: ${summaryData.investigations.ecg || "Normal Sinus Rhythm"}
2D-Echo: ${
      summaryData.investigations.echo2D || "Normal cardiac function, LVEF > 60%"
    }

PROCEDURE DETAILS:
${summaryData.procedureDetails
  .map(
    (p) =>
      `[${p.dateTime}] ${p.surgicalProcedure} (${p.operationType}, Anaesthesia: ${p.anaesthesiaType})\nDone by: ${p.processDoneBy}\nDetail: ${p.procedureDetail}`
  )
  .join("\n\n")}

POST-OPERATIVE NOTES:
Access Site Hemostasis: ${summaryData.postOperativeNotes?.accessSiteHemostasis || "Hemostasis Intact. Site clean, dry, pressure dressing applied."}
Telemetry Vitals: ${summaryData.postOperativeNotes?.telemetryVitals || "Stable"}
Sheath Removal Time / Status: ${summaryData.postOperativeNotes?.sheathRemovalTime || "Immediate post-op"} (${summaryData.postOperativeNotes?.sheathStatus || "Removed"})
Distal Peripheral Pulses: ${summaryData.postOperativeNotes?.distalPulses || "Strong (+++) bilaterally equal"}
${summaryData.postOperativeNotes?.completionDuplex ? `Completion Duplex: ${summaryData.postOperativeNotes.completionDuplex}\n` : ""}${summaryData.postOperativeNotes?.egitStatus ? `EGIT Status: ${summaryData.postOperativeNotes.egitStatus}\n` : ""}${summaryData.postOperativeNotes?.compressionStockings ? `Compression Stockings: ${summaryData.postOperativeNotes.compressionStockings}\n` : ""}${summaryData.postOperativeNotes?.ambulationProtocol ? `Ambulation: ${summaryData.postOperativeNotes.ambulationProtocol}\n` : ""}${summaryData.postOperativeNotes?.chairScreening ? `CHAIR Screening: ${summaryData.postOperativeNotes.chairScreening}\n` : ""}Recovery Status: ${summaryData.postOperativeNotes?.recoveryStatus || "Conscious, oriented, pain controlled"}
Recovery Bed / Ward: ${summaryData.postOperativeNotes?.recoveryBed || summaryData.admissionDetails.wardBed}
Immediate Complications: ${summaryData.postOperativeNotes?.immediateComplications || "Nil"}
Recorded By: ${summaryData.postOperativeNotes?.recordedBy || summaryData.dischargeDetails.dischargePreparedBy}

DISCHARGE MEDICATIONS (RMSCL EDL):
${summaryData.dischargeMedications
  .map(
    (m) =>
      `${m.sNo}. ${m.medicine} - Dose: ${m.dosePower}, Route: ${m.route}, Freq: ${m.frequency}, Days: ${m.days} (${m.instructions})`
  )
  .join("\n")}

PATIENT DISCHARGE DETAILS:
General Advice: ${summaryData.dischargeDetails.generalAdvise}
Condition on Discharge: ${summaryData.dischargeDetails.conditionOnDischarge}
Follow Up: ${summaryData.dischargeDetails.followUp}${
      summaryData.dischargeDetails.followUpDate
        ? `\nNext Appointment Date: ${summaryData.dischargeDetails.followUpDate}`
        : ""
    }
Approved by: ${summaryData.dischargeDetails.approvedBy || "Dr. Alok Verma"} | Assistant Professor: ${summaryData.dischargeDetails.assistantProfessor || "Dr. Shashank Sharma"} | Prepared by: ${
      summaryData.dischargeDetails.dischargePreparedBy || "Dr. Neel Yadav"
    }`;

    copyTextToClipboard(fullText, "Full Discharge Summary");
  };

  const handlePrint = () => {
    window.print();
  };

  // Upload local image file
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const file = files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const cleanName = file.name
        .replace(/\.[^/.]+$/, "")
        .replace(/[-_]/g, " ");
      const modalityDetected = file.name.toLowerCase().includes("ct")
        ? "CT"
        : file.name.toLowerCase().includes("us") ||
          file.name.toLowerCase().includes("doppler")
        ? "US"
        : file.name.toLowerCase().includes("mri")
        ? "MRI"
        : "XA";

      const newAtt: ProceduralImageAttachment = {
        id: `ATT-UP-${Date.now()}`,
        title: cleanName.charAt(0).toUpperCase() + cleanName.slice(1),
        modality: modalityDetected,
        capturedAt:
          new Date().toLocaleDateString("en-IN") +
          " " +
          new Date().toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        dataUrl: result,
        caption: `SMS Medical College Angiosuite: Procedural image '${file.name}' attached to official record. Technical success documented.`,
      };
      setSummaryData((prev) => ({
        ...prev,
        attachments: [...(prev.attachments || []), newAtt],
      }));
      showNotification(`Uploaded & attached '${file.name}'!`);
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const handleDeleteAttachment = (index: number) => {
    setSummaryData((prev) => {
      const copy = [...(prev.attachments || [])];
      copy.splice(index, 1);
      return { ...prev, attachments: copy };
    });
    showNotification("Attachment removed.");
  };

  // Visual attachment rendering
  const renderAttachmentVisual = (att: ProceduralImageAttachment) => {
    if (
      att.dataUrl &&
      (att.dataUrl.startsWith("data:image/") ||
        att.dataUrl.startsWith("http") ||
        att.dataUrl.startsWith("blob:") ||
        att.dataUrl.startsWith("/"))
    ) {
      return (
        <img
          src={att.dataUrl}
          alt={att.title}
          className="w-full max-h-56 object-contain rounded bg-black border border-[#3C4043]"
        />
      );
    }

    return (
      <div className="w-full h-36 bg-[#0F172A] rounded flex flex-col items-center justify-center text-slate-400 gap-1.5 p-4">
        <Camera className="w-6 h-6 text-slate-500" />
        <span className="text-xs font-semibold text-slate-200">{att.title}</span>
        <span className="text-[10px] text-slate-400 font-mono">[{att.modality}] Attached Image Record</span>
      </div>
    );
  };

  return (
    <div className="space-y-4 max-w-6xl mx-auto pb-16 print:p-0 print:m-0 print:max-w-none">
      {/* Toast Notification */}
      {copyToast && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-2 rounded-xl bg-[#1E8E3E] text-white text-xs font-semibold shadow-lg flex items-center gap-2 print:hidden transition-opacity">
          <CheckCircle2 className="w-4 h-4" />
          <span>{copyToast}</span>
        </div>
      )}

      {/* Top Header & Fast Action Bar */}
      <div className="bg-white border border-[#DADCE0] rounded-xl px-4 py-2.5 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 print:hidden">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E8F0FE] text-[#1A73E8]">
            IHMS e-Hospital
          </span>
          <h1 className="text-sm font-bold text-[#202124]">
            Discharge Summary Generator
          </h1>
          <span className="text-[11px] text-[#5F6368] hidden md:inline">
            &bull; Interventional Radiology
          </span>
        </div>

        {/* Global Action Copiers & Print */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleCopyFullIhms}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] text-white text-xs font-semibold transition-all shadow-2xs cursor-pointer active:scale-95"
            title="Copy entire formatted discharge summary for portal"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>Copy Full Summary</span>
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#DADCE0] bg-white text-[#3C4043] hover:bg-[#F1F3F4] text-xs font-semibold transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-[#5F6368]" />
            <span>Print Official A4</span>
          </button>
        </div>
      </div>

      {/* Structured Clinical Sections Data Bar */}
      <div className="bg-[#F8F9FA] border border-[#DADCE0] rounded-xl p-2.5 flex items-center gap-2 overflow-x-auto print:hidden">
        <span className="text-[11px] font-bold text-[#5F6368] whitespace-nowrap pl-1 flex items-center gap-1">
          <Copy className="w-3 h-3 text-[#1A73E8]" /> Copy Section:
        </span>
        <button
          onClick={() =>
            copyTextToClipboard(
              `HID: ${summaryData.admissionDetails.hid} | Name: ${summaryData.admissionDetails.patientName} | Age/Sex: ${summaryData.admissionDetails.age}/${summaryData.admissionDetails.gender} | Ward/Bed: ${summaryData.admissionDetails.wardBed} | Category: ${summaryData.admissionDetails.patientCategory}`,
              "Patient Demographics"
            )
          }
          className="px-2.5 py-1 rounded-md bg-white border border-[#DADCE0] hover:border-[#1A73E8] text-[11px] font-semibold text-[#3C4043] hover:text-[#1A73E8] transition-colors whitespace-nowrap cursor-pointer shadow-2xs"
        >
          👤 Demographics
        </button>
        <button
          onClick={() =>
            copyTextToClipboard(
              `ICD-10: ${summaryData.caseSummary.icdDiagnosis}\nDiagnosis: ${summaryData.caseSummary.diagnosis}`,
              "Diagnosis & ICD"
            )
          }
          className="px-2.5 py-1 rounded-md bg-white border border-[#DADCE0] hover:border-[#1A73E8] text-[11px] font-semibold text-[#3C4043] hover:text-[#1A73E8] transition-colors whitespace-nowrap cursor-pointer shadow-2xs"
        >
          🩺 Diagnosis &amp; ICD-10
        </button>
        <button
          onClick={() =>
            copyTextToClipboard(
              `Complaints: ${summaryData.caseSummary.complaints}\n\nCase Summary: ${summaryData.caseSummary.caseHistory}`,
              "Case Narrative & History"
            )
          }
          className="px-2.5 py-1 rounded-md bg-white border border-[#DADCE0] hover:border-[#1A73E8] text-[11px] font-semibold text-[#3C4043] hover:text-[#1A73E8] transition-colors whitespace-nowrap cursor-pointer shadow-2xs"
        >
          📝 History &amp; Summary
        </button>
        <button
          onClick={() =>
            copyTextToClipboard(
              summaryData.procedureDetails[0]?.procedureDetail || "",
              "Operative Procedure Note"
            )
          }
          className="px-2.5 py-1 rounded-md bg-white border border-[#DADCE0] hover:border-[#1A73E8] text-[11px] font-semibold text-[#3C4043] hover:text-[#1A73E8] transition-colors whitespace-nowrap cursor-pointer shadow-2xs"
        >
          ⚡ Operative Note
        </button>
        <button
          onClick={() => {
            const p = summaryData.postOperativeNotes;
            const text = `POST-OPERATIVE RECOVERY NOTES:
Access Site Hemostasis: ${p?.accessSiteHemostasis || "Hemostasis Intact. Site clean, dry, pressure dressing applied."}
Telemetry Vitals: ${p?.telemetryVitals || "Stable"}
Sheath Removal Time / Status: ${p?.sheathRemovalTime || "Immediate post-op"} (${p?.sheathStatus || "Removed"})
Recovery Status: ${p?.recoveryStatus || "Conscious, oriented"}
Recovery Bed: ${p?.recoveryBed || summaryData.admissionDetails.wardBed}
Distal Peripheral Pulses: ${p?.distalPulses || "Strong (+++)"}
Immediate Complications: ${p?.immediateComplications || "Nil"}
Recorded By: ${p?.recordedBy || summaryData.dischargeDetails.dischargePreparedBy}`;
            copyTextToClipboard(text, "Post-Operative Notes");
          }}
          className="px-2.5 py-1 rounded-md bg-white border border-[#DADCE0] hover:border-[#1A73E8] text-[11px] font-semibold text-[#3C4043] hover:text-[#1A73E8] transition-colors whitespace-nowrap cursor-pointer shadow-2xs"
        >
          🩺 Post-Op Notes
        </button>
        <button
          onClick={() =>
            copyTextToClipboard(
              summaryData.dischargeMedications
                .map(
                  (m) =>
                    `${m.sNo}. ${m.medicine} - ${m.dosePower} (${m.frequency}) x ${m.days} days [${m.instructions}]`
                )
                .join("\n"),
              "Discharge Medications (EDL)"
            )
          }
          className="px-2.5 py-1 rounded-md bg-white border border-[#DADCE0] hover:border-[#1A73E8] text-[11px] font-semibold text-[#3C4043] hover:text-[#1A73E8] transition-colors whitespace-nowrap cursor-pointer shadow-2xs"
        >
          💊 Medications (RMSCL)
        </button>
        <button
          onClick={() =>
            copyTextToClipboard(
              `Advice: ${summaryData.dischargeDetails.generalAdvise}\n\nFollow-up: ${summaryData.dischargeDetails.followUp}`,
              "Discharge Advice & Follow-Up"
            )
          }
          className="px-2.5 py-1 rounded-md bg-white border border-[#DADCE0] hover:border-[#1A73E8] text-[11px] font-semibold text-[#3C4043] hover:text-[#1A73E8] transition-colors whitespace-nowrap cursor-pointer shadow-2xs"
        >
          📌 Advice &amp; Follow-up
        </button>
      </div>

      {/* Patient Selection Bar */}
      <div className="bg-white border border-[#DADCE0] rounded-xl p-2.5 shadow-2xs space-y-2 print:hidden">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="text-[11px] font-bold text-[#3C4043] flex items-center gap-1.5">
            <User className="w-3 h-3 text-[#1A73E8]" />
            Patient Context:
          </span>
          <div className="grid grid-cols-2 sm:flex sm:items-center rounded-lg bg-[#F1F3F4] p-0.5 text-[11px] font-semibold w-full sm:w-auto gap-0.5">
            <button
              onClick={() => setActiveTab("preview")}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer flex items-center justify-center gap-1 ${
                activeTab === "preview"
                  ? "bg-white text-[#1A73E8] shadow-2xs"
                  : "text-[#5F6368] hover:text-[#202124]"
              }`}
            >
              <Eye className="w-3 h-3" />
              <span>Print Preview</span>
            </button>
            <button
              onClick={() => setActiveTab("editor")}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer flex items-center justify-center gap-1 ${
                activeTab === "editor"
                  ? "bg-white text-[#1A73E8] shadow-2xs"
                  : "text-[#5F6368] hover:text-[#202124]"
              }`}
            >
              <Sliders className="w-3 h-3" />
              <span>Fine-Tune</span>
            </button>
            <button
              onClick={() => setActiveTab("analytics")}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer flex items-center justify-center gap-1 ${
                activeTab === "analytics"
                  ? "bg-white text-[#1A73E8] shadow-2xs"
                  : "text-[#5F6368] hover:text-[#202124]"
              }`}
            >
              <BarChart3 className="w-3 h-3 text-[#1A73E8]" />
              <span>Charts</span>
            </button>
            <button
              onClick={() => setActiveTab("history")}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer flex items-center justify-center gap-1 ${
                activeTab === "history"
                  ? "bg-white text-[#1A73E8] shadow-2xs"
                  : "text-[#5F6368] hover:text-[#202124]"
              }`}
            >
              <History className="w-3 h-3 text-[#1A73E8]" />
              <span>History</span>
            </button>
            <button
              onClick={() => setActiveTab("sso")}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer flex items-center justify-center gap-1 ${
                activeTab === "sso"
                  ? "bg-white text-[#1A73E8] shadow-2xs"
                  : "text-[#5F6368] hover:text-[#202124]"
              }`}
            >
              <Globe className="w-3 h-3 text-[#137333]" />
              <span>SSO</span>
            </button>
            <button
              onClick={() => setActiveTab("archive")}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer flex items-center justify-center gap-1 ${
                activeTab === "archive"
                  ? "bg-white text-[#E37400] shadow-2xs font-bold"
                  : "text-[#5F6368] hover:text-[#202124]"
              }`}
            >
              <FolderOpen className="w-3 h-3 text-[#E37400]" />
              <span>Dossier Archive</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5">
          {/* Real Admitted / Active Store Patients */}
          {patients
            .filter((pt) => !["Anjum Nisha", "Ramswaroop Meena", "Prem Devi", "Santosh Devi", "Bhanwar Lal", "Abdul Latif", "Mohit Verma", "Ghanshyam Gurjar"].includes(pt.name))
            .map((pt) => (
            <button
              key={pt.id}
              onClick={() => handleSelectPatient(pt.id)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1 ${
                selectedPatientId === pt.id
                  ? "bg-[#1A73E8] text-white shadow-2xs"
                  : "bg-[#FFFFFF] text-[#3C4043] border border-[#DADCE0] hover:bg-[#F8F9FA]"
              }`}
            >
              <span>{pt.name}</span>
              <span className="text-[10px] opacity-75">
                ({pt.procedure.slice(0, 16)})
              </span>
            </button>
          ))}

          {/* Custom New Patient / Procedure */}
          <button
            onClick={() => handleSelectPatient(`CUSTOM-${Date.now()}`)}
            className="px-2.5 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1 border border-dashed border-[#1A73E8] text-[#1A73E8] hover:bg-[#E8F0FE]"
          >
            <Plus className="w-3 h-3" />
            <span>+ New Patient</span>
          </button>
        </div>

      </div>

      {/* ==================================================================== */}
      {/* CLINICAL FINDINGS & PROCEDURE PARAMETERS                             */}
      {/* ==================================================================== */}
      <div className="bg-white border border-[#DADCE0] rounded-xl p-3.5 sm:p-4 shadow-2xs space-y-3 print:hidden">
        {/* Category Selector Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-[#F1F3F4] pb-2.5">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#1A73E8]" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#1A73E8] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#1A73E8]" />
                Procedure Findings &amp; Clinical Parameters
              </h2>
            </div>
            <p className="text-[11px] text-[#5F6368] mt-0.5">
              Select findings and procedural parameters below to generate
              the clinical narrative, operative notes, medications, and advice.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 bg-[#F8F9FA] p-1 rounded-xl border border-[#DADCE0]">
            <select
              value={selectedProcedureKey}
              onChange={(e) => {
                const val = e.target.value;
                setSelectedProcedureKey(val);
                if (val === 'varicose_veins') {
                  setProcedureCategory('varicose_veins');
                } else {
                  setProcedureCategory('other_ir');
                  const template = getDischargeTemplate(val);
                  if (template) {
                    const defaults: Record<string, any> = {};
                    template.criteriaFields.forEach(f => {
                      defaults[f.key] = f.defaultValue ?? (f.type === 'checkbox' ? false : '');
                    });
                    setDynamicCriteria(defaults);
                  }
                }
              }}
              className="px-3 py-1.5 rounded-lg text-xs font-bold border border-[#DADCE0] bg-white text-[#1A73E8] focus:outline-none focus:ring-2 focus:ring-[#1A73E8]"
            >
              {getAllProcedureFamilies().map(pf => (
                <option key={pf.key} value={pf.key}>{pf.label}</option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => setMasterCatalogOpen(true)}
              className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer bg-[#FEF7E0] text-[#B06000] border border-[#FEEFC3] hover:bg-[#FEEFC3] flex items-center gap-1.5"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Others / Master Catalog (1,100+)</span>
            </button>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* SUB-PANEL 1: VARICOSE VEINS (VENASEAL / EVLT)                       */}
        {/* ------------------------------------------------------------------ */}
        {selectedProcedureKey === "varicose_veins" && (
          <div className="space-y-4">
            {/* Laterality & Modality Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-[#F8F9FA] rounded-xl border border-[#DADCE0]">
              <div>
                <label className="block text-[11px] font-bold text-[#3C4043] mb-1">
                  Target Limb / Laterality
                </label>
                <select
                  value={varicoseCriteria.laterality}
                  onChange={(e) =>
                    setVaricoseCriteria({
                      ...varicoseCriteria,
                      laterality: e.target.value as VaricoseCriteria["laterality"],
                    })
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-white text-xs font-semibold"
                >
                  <option value="Left lower limb">Left Lower Limb</option>
                  <option value="Right lower limb">Right Lower Limb</option>
                  <option value="Bilateral lower limbs">
                    Bilateral Lower Limbs
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#3C4043] mb-1">
                  Procedure Modality
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setVaricoseCriteria({
                        ...varicoseCriteria,
                        modality: "VenaSeal_UGFS",
                      })
                    }
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-bold border transition-colors cursor-pointer text-center ${
                      varicoseCriteria.modality.includes("VenaSeal")
                        ? "bg-[#1A73E8] text-white border-[#1A73E8]"
                        : "bg-white text-[#3C4043] border-[#DADCE0] hover:bg-[#F1F3F4]"
                    }`}
                  >
                    VenaSeal + UGFS
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setVaricoseCriteria({
                        ...varicoseCriteria,
                        modality: "EVLT_UGFS",
                      })
                    }
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-bold border transition-colors cursor-pointer text-center ${
                      varicoseCriteria.modality.includes("EVLT")
                        ? "bg-[#1A73E8] text-white border-[#1A73E8]"
                        : "bg-white text-[#3C4043] border-[#DADCE0] hover:bg-[#F1F3F4]"
                    }`}
                  >
                    EVLT + UGFS
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setVaricoseCriteria({
                        ...varicoseCriteria,
                        modality: "UGFS_Only",
                      })
                    }
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-bold border transition-colors cursor-pointer text-center ${
                      varicoseCriteria.modality === "UGFS_Only"
                        ? "bg-[#1A73E8] text-white border-[#1A73E8]"
                        : "bg-white text-[#3C4043] border-[#DADCE0] hover:bg-[#F1F3F4]"
                    }`}
                  >
                    UGFS Alone
                  </button>
                </div>
              </div>
            </div>

            {/* Clinical Findings Dropdown Button with Multi-Select */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#202124]">
                  Clinical Findings &amp; Symptoms:
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      const allFalse = Object.keys(varicoseCriteria.findings).reduce(
                        (acc, k) => ({ ...acc, [k]: false }),
                        {} as VaricoseCriteria["findings"]
                      );
                      setVaricoseCriteria({
                        ...varicoseCriteria,
                        findings: allFalse,
                        ulcerSizeAndSite: "None",
                        itchingDuration: "None",
                      });
                    }}
                    className="px-2 py-0.5 rounded text-[10px] font-bold border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Clear All
                  </button>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#E8F0FE] text-[#1A73E8] font-bold">
                    {Object.values(varicoseCriteria.findings).filter(Boolean).length} Selected
                  </span>
                </div>
              </div>

              {/* Dropdown Toggle Button */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsFindingsDropdownOpen(!isFindingsDropdownOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl border border-[#DADCE0] bg-white text-xs font-medium text-[#202124] hover:bg-[#F8F9FA] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-1.5">
                    <Stethoscope className="w-3.5 h-3.5 text-[#1A73E8]" />
                    <span>
                      {Object.values(varicoseCriteria.findings).filter(Boolean).length === 0
                        ? "Select Clinical Findings (Click to open list)"
                        : `Clinical Findings (${Object.values(varicoseCriteria.findings).filter(Boolean).length} selected)`}
                    </span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#5F6368] transition-transform ${
                      isFindingsDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isFindingsDropdownOpen && (
                  <div className="mt-1 p-3 bg-white border border-[#DADCE0] rounded-xl shadow-lg z-20 space-y-2">
                    <div className="flex items-center justify-between pb-1 border-b border-[#F1F3F4] text-[11px]">
                      <span className="font-bold text-[#3C4043]">Select all that apply:</span>
                      <button
                        type="button"
                        onClick={() => setIsFindingsDropdownOpen(false)}
                        className="text-[10px] font-bold text-[#1A73E8] hover:underline"
                      >
                        Done
                      </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-60 overflow-y-auto">
                      {[
                        { key: "varicoseVeins", label: "Varicose veins", ceap: "C2" },
                        { key: "venousUlcer", label: "Venous ulcer", ceap: "C5/C6" },
                        { key: "hyperpigmentation", label: "Hyperpigmentation / Stasis dermatitis", ceap: "C4a" },
                        { key: "lipodermatosclerosis", label: "Lipodermatosclerosis", ceap: "C4b" },
                        { key: "coronaPhlebectatica", label: "Corona phlebectatica", ceap: "C1" },
                        { key: "edema", label: "Edema / Leg swelling", ceap: "C3" },
                        { key: "achingPain", label: "Aching pain / Heaviness", ceap: "Sx" },
                        { key: "nightCramps", label: "Night cramps", ceap: "Sx" },
                        { key: "restlessLegs", label: "Restless legs", ceap: "Sx" },
                        { key: "thrombophlebitis", label: "Superficial thrombophlebitis", ceap: "C4+" },
                      ].map((item) => {
                        const isChecked = varicoseCriteria.findings[item.key as keyof VaricoseCriteria["findings"]];
                        return (
                          <label
                            key={item.key}
                            className={`flex items-center gap-2 p-1.5 rounded-lg border text-xs cursor-pointer select-none transition-colors ${
                              isChecked
                                ? "bg-[#E8F0FE] border-[#1A73E8] text-[#1A73E8] font-bold"
                                : "bg-white border-[#DADCE0] text-[#3C4043] hover:bg-[#F8F9FA]"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={(e) =>
                                setVaricoseCriteria({
                                  ...varicoseCriteria,
                                  findings: {
                                    ...varicoseCriteria.findings,
                                    [item.key]: e.target.checked,
                                  },
                                })
                              }
                              className="rounded border-[#DADCE0] text-[#1A73E8] focus:ring-[#1A73E8] cursor-pointer"
                            />
                            <span className="flex-1 truncate">{item.label}</span>
                            <span className="text-[9px] text-[#5F6368] font-mono">[{item.ceap}]</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Active Selected Chips */}
              <div className="flex flex-wrap gap-1 pt-1">
                {[
                  { key: "varicoseVeins", label: "Varicose veins", ceap: "C2" },
                  { key: "venousUlcer", label: "Venous ulcer", ceap: "C5/C6" },
                  { key: "hyperpigmentation", label: "Hyperpigmentation", ceap: "C4a" },
                  { key: "lipodermatosclerosis", label: "Lipodermatosclerosis", ceap: "C4b" },
                  { key: "coronaPhlebectatica", label: "Corona phlebectatica", ceap: "C1" },
                  { key: "edema", label: "Edema", ceap: "C3" },
                  { key: "achingPain", label: "Aching pain", ceap: "Sx" },
                  { key: "nightCramps", label: "Night cramps", ceap: "Sx" },
                  { key: "restlessLegs", label: "Restless legs", ceap: "Sx" },
                  { key: "thrombophlebitis", label: "Thrombophlebitis", ceap: "C4+" },
                ]
                  .filter((item) => varicoseCriteria.findings[item.key as keyof VaricoseCriteria["findings"]])
                  .map((item) => (
                    <span
                      key={item.key}
                      onClick={() =>
                        setVaricoseCriteria({
                          ...varicoseCriteria,
                          findings: {
                            ...varicoseCriteria.findings,
                            [item.key]: false,
                          },
                        })
                      }
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#E8F0FE] text-[#1A73E8] border border-[#1A73E8]/30 cursor-pointer hover:bg-red-50 hover:text-red-700 hover:border-red-200 transition-colors"
                      title="Click to remove"
                    >
                      <span>{item.label}</span>
                      <span className="text-[9px] font-bold">&times;</span>
                    </span>
                  ))}
              </div>
            </div>

            {/* 4 Varicose Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
              <div>
                <label className="block text-[11px] font-bold text-[#3C4043] mb-1">
                  Symptom Duration
                </label>
                <select
                  value={varicoseCriteria.symptomDuration}
                  onChange={(e) =>
                    setVaricoseCriteria({
                      ...varicoseCriteria,
                      symptomDuration: e.target
                        .value as VaricoseCriteria["symptomDuration"],
                    })
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-white text-xs font-semibold text-[#1A73E8]"
                >
                  {[
                    "1 month",
                    "2 months",
                    "3 months",
                    "6 months",
                    "10 months",
                    "1 year",
                    "2 years",
                    "5+ years",
                  ].map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#3C4043] mb-1">
                  Itching Duration
                </label>
                <select
                  value={varicoseCriteria.itchingDuration}
                  onChange={(e) =>
                    setVaricoseCriteria({
                      ...varicoseCriteria,
                      itchingDuration: e.target
                        .value as VaricoseCriteria["itchingDuration"],
                    })
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-white text-xs font-semibold"
                >
                  {[
                    "None",
                    "1 month",
                    "2 months",
                    "3 months",
                    "6 months",
                    "1+ year",
                  ].map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#3C4043] mb-1">
                  Ulcer Size &amp; Site
                </label>
                <select
                  value={varicoseCriteria.ulcerSizeAndSite}
                  onChange={(e) =>
                    setVaricoseCriteria({
                      ...varicoseCriteria,
                      ulcerSizeAndSite: e.target
                        .value as VaricoseCriteria["ulcerSizeAndSite"],
                    })
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-white text-xs font-semibold"
                >
                  {[
                    "None",
                    "Left medial malleolus (< 3 cm)",
                    "Left medial malleolus (> 3 cm)",
                    "Right medial malleolus",
                    "Active ulcer (C6)",
                    "Healed ulcer (C5)",
                  ].map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#3C4043] mb-1">
                  Family History
                </label>
                <select
                  value={varicoseCriteria.familyHistory}
                  onChange={(e) =>
                    setVaricoseCriteria({
                      ...varicoseCriteria,
                      familyHistory: e.target
                        .value as VaricoseCriteria["familyHistory"],
                    })
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-white text-xs font-semibold"
                >
                  {[
                    "Absent",
                    "Present (Mother)",
                    "Present (Father)",
                    "Present (Both Parents)",
                  ].map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Truncal Incompetence & Reflux Anatomy (SVS/AVF 2023 Guidelines) */}
            <div className="p-3.5 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DADCE0] pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#202124] uppercase tracking-wider">
                    Truncal Incompetence &amp; Reflux Hemodynamics
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#E8F0FE] text-[#1A73E8]">
                    SVS/AVF 2023 Guideline Cutoff: &ge; 0.5s
                  </span>
                </div>
                <div className="text-[11px] text-[#5F6368]">
                  SFJ Reflux:{" "}
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="10"
                    value={varicoseCriteria.truncal?.sfjRefluxDurationSec ?? 3.2}
                    onChange={(e) => {
                      const t = varicoseCriteria.truncal || createDefaultTruncal();
                      setVaricoseCriteria({
                        ...varicoseCriteria,
                        truncal: { ...t, sfjRefluxDurationSec: parseFloat(e.target.value) || 0 },
                      });
                    }}
                    className="w-14 px-1.5 py-0.5 rounded border border-[#DADCE0] font-mono text-xs font-bold text-[#1A73E8] bg-white text-center"
                  />{" "}
                  sec &bull; SPJ:{" "}
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="10"
                    value={varicoseCriteria.truncal?.spjRefluxDurationSec ?? 0.3}
                    onChange={(e) => {
                      const t = varicoseCriteria.truncal || createDefaultTruncal();
                      setVaricoseCriteria({
                        ...varicoseCriteria,
                        truncal: { ...t, spjRefluxDurationSec: parseFloat(e.target.value) || 0 },
                      });
                    }}
                    className="w-14 px-1.5 py-0.5 rounded border border-[#DADCE0] font-mono text-xs font-bold text-[#1A73E8] bg-white text-center"
                  />{" "}
                  sec
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  {
                    key: "gsvAboveKnee",
                    label: "GSV Above-Knee",
                    diamKey: "gsvAboveKneeDiameterMm",
                  },
                  {
                    key: "gsvBelowKnee",
                    label: "GSV Below-Knee",
                    diamKey: "gsvBelowKneeDiameterMm",
                  },
                  {
                    key: "ssv",
                    label: "SSV (Saphenopopliteal)",
                    diamKey: "ssvDiameterMm",
                  },
                ].map((trunk) => {
                  const t = varicoseCriteria.truncal || createDefaultTruncal();
                  const isChecked = !!(t as any)[trunk.key];
                  const diam = (t as any)[trunk.diamKey];
                  return (
                    <div
                      key={trunk.key}
                      className={`p-2.5 rounded-xl border text-xs transition-all ${
                        isChecked
                          ? "bg-white border-[#1A73E8] shadow-2xs"
                          : "bg-white border-[#DADCE0] opacity-80"
                      }`}
                    >
                      <label className="flex items-center gap-2 cursor-pointer font-bold select-none text-[#202124]">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={(e) => {
                            setVaricoseCriteria({
                              ...varicoseCriteria,
                              truncal: { ...t, [trunk.key]: e.target.checked },
                            });
                          }}
                          className="rounded border-[#DADCE0] text-[#1A73E8] focus:ring-[#1A73E8] cursor-pointer"
                        />
                        <span>{trunk.label}</span>
                      </label>
                      <div className="mt-2 flex items-center justify-between text-[11px] text-[#5F6368]">
                        <span>Caliber:</span>
                        <div className="flex items-center gap-1 font-mono">
                          <input
                            type="number"
                            step="0.1"
                            min="0"
                            max="25"
                            placeholder="Optional (mm)"
                            value={diam && diam > 0 ? diam : ""}
                            onChange={(e) => {
                              const val = parseFloat(e.target.value) || 0;
                              setVaricoseCriteria({
                                ...varicoseCriteria,
                                truncal: {
                                  ...t,
                                  [trunk.diamKey]: val,
                                },
                              });
                            }}
                            className="w-24 px-1.5 py-0.5 rounded border border-[#DADCE0] bg-white text-right text-xs font-semibold text-[#202124] placeholder:font-sans placeholder:text-[10px] placeholder:text-slate-400"
                          />
                          <span>mm</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Perforator Veins (Optional - 1-Click Incompetent Toggle) */}
            <div className="p-3 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DADCE0] pb-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#202124] uppercase tracking-wider">
                    Perforator Veins (Optional)
                  </span>
                  <span className="text-[10px] text-[#5F6368]">
                    Click perforator name to toggle Incompetent: Yes / No
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#E8F0FE] text-[#1A73E8]">
                  {(varicoseCriteria.perforators || createDefaultPerforators()).filter((p) => p.incompetent).length} Incompetent
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                {(varicoseCriteria.perforators || createDefaultPerforators()).map((perf, pIdx) => {
                  const isIncompetent = !!perf.incompetent;
                  return (
                    <button
                      key={perf.name}
                      type="button"
                      onClick={() => {
                        const perfs = [...(varicoseCriteria.perforators || createDefaultPerforators())];
                        const nextInc = !isIncompetent;
                        perfs[pIdx] = {
                          ...perfs[pIdx],
                          incompetent: nextInc,
                          pathologicalDiameterMm: nextInc ? (perfs[pIdx].pathologicalDiameterMm || 3.5) : 0,
                          refluxDurationSec: nextInc ? (perfs[pIdx].refluxDurationSec || 0.6) : 0,
                          status: nextInc ? "Treated with UGFS" : "Observed (Sub-critical)",
                        };
                        setVaricoseCriteria({ ...varicoseCriteria, perforators: perfs });
                      }}
                      className={`p-2.5 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                        isIncompetent
                          ? "bg-[#E6F4EA] border-[#1E8E3E] text-[#137333] shadow-2xs ring-1 ring-[#1E8E3E]/30"
                          : "bg-white border-[#DADCE0] text-[#3C4043] hover:bg-[#F8F9FA]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-bold text-[11px] leading-tight truncate">{perf.name}</span>
                        {isIncompetent ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1E8E3E] shrink-0" />
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-slate-300 shrink-0" />
                        )}
                      </div>
                      <span className="text-[10px] text-[#5F6368] truncate">{perf.location}</span>
                      <span
                        className={`text-[9px] font-bold px-1.5 py-0.5 rounded text-center uppercase tracking-wider ${
                          isIncompetent
                            ? "bg-[#137333] text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        Incompetent: {isIncompetent ? "YES" : "NO"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Concomitant Foam Sclerotherapy (UGFS - Tessari Technique) */}
            <div className="p-3.5 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DADCE0] pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#202124] uppercase tracking-wider">
                    Concomitant Foam Sclerotherapy (UGFS - Tessari 1:4)
                  </span>
                  {(varicoseCriteria.sclerotherapy?.totalVolumeMl ?? 6) <= 10 ? (
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#E6F4EA] text-[#137333]">
                      &le; 10 mL UIP Limit Verified
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-red-100 text-red-700 animate-pulse">
                      Exceeds 10 mL UIP Safety Limit
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1A73E8]">
                  <span>Total Volume:</span>
                  <input
                    type="number"
                    step="0.5"
                    min="1"
                    max="20"
                    value={varicoseCriteria.sclerotherapy?.totalVolumeMl ?? 6}
                    onChange={(e) => {
                      const sc = varicoseCriteria.sclerotherapy || createDefaultSclerotherapy();
                      setVaricoseCriteria({
                        ...varicoseCriteria,
                        sclerotherapy: {
                          ...sc,
                          totalVolumeMl: parseFloat(e.target.value) || 0,
                        },
                      });
                    }}
                    className="w-16 px-1.5 py-0.5 rounded border border-[#DADCE0] bg-white text-center font-mono font-bold"
                  />
                  <span>mL</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
                <div>
                  <label className="block text-[11px] font-bold text-[#3C4043] mb-1">
                    Sclerosant Agent
                  </label>
                  <select
                    value={varicoseCriteria.sclerotherapy?.sclerosantAgent ?? "1% Polidocanol foam"}
                    onChange={(e) => {
                      const sc = varicoseCriteria.sclerotherapy || createDefaultSclerotherapy();
                      setVaricoseCriteria({
                        ...varicoseCriteria,
                        sclerotherapy: {
                          ...sc,
                          sclerosantAgent: e.target.value as SclerotherapyDistribution["sclerosantAgent"],
                        },
                      });
                    }}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-[#DADCE0] bg-white text-xs font-semibold"
                  >
                    <option value="1% Polidocanol foam">1% Polidocanol Foam</option>
                    <option value="2% Polidocanol foam">2% Polidocanol Foam</option>
                    <option value="3% Polidocanol foam">3% Polidocanol Foam</option>
                    <option value="1% STS foam">1% STS (Sodium Tetradecyl) Foam</option>
                    <option value="3% STS foam">3% STS Foam</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#3C4043] mb-1">
                    Liquid-to-Gas Ratio
                  </label>
                  <select
                    value={varicoseCriteria.sclerotherapy?.liquidToGasRatio ?? "1:4 Tessari (Air)"}
                    onChange={(e) => {
                      const sc = varicoseCriteria.sclerotherapy || createDefaultSclerotherapy();
                      setVaricoseCriteria({
                        ...varicoseCriteria,
                        sclerotherapy: {
                          ...sc,
                          liquidToGasRatio: e.target.value as SclerotherapyDistribution["liquidToGasRatio"],
                        },
                      });
                    }}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-[#DADCE0] bg-white text-xs font-semibold"
                  >
                    <option value="1:4 Tessari (Air)">1:4 Tessari (Room Air)</option>
                    <option value="1:4 Tessari (CO2/O2)">1:4 Tessari (CO2 / Physiological)</option>
                  </select>
                </div>

                <div className="sm:col-span-2 flex flex-col justify-end">
                  <span className="block text-[11px] font-bold text-[#3C4043] mb-1">
                    Target Distribution Beds
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    <label className="flex items-center gap-1.5 text-xs font-semibold cursor-pointer">
                      <input
                        type="checkbox"
                        checked={varicoseCriteria.sclerotherapy?.aboveKneeThighVarices ?? true}
                        onChange={(e) => {
                          const sc = varicoseCriteria.sclerotherapy || createDefaultSclerotherapy();
                          setVaricoseCriteria({
                            ...varicoseCriteria,
                            sclerotherapy: { ...sc, aboveKneeThighVarices: e.target.checked },
                          });
                        }}
                        className="rounded border-[#DADCE0] text-[#1A73E8]"
                      />
                      <span>Thigh Varices</span>
                    </label>
                    <label className="flex items-center gap-1.5 text-xs font-semibold cursor-pointer">
                      <input
                        type="checkbox"
                        checked={varicoseCriteria.sclerotherapy?.belowKneeCalfVarices ?? true}
                        onChange={(e) => {
                          const sc = varicoseCriteria.sclerotherapy || createDefaultSclerotherapy();
                          setVaricoseCriteria({
                            ...varicoseCriteria,
                            sclerotherapy: { ...sc, belowKneeCalfVarices: e.target.checked },
                          });
                        }}
                        className="rounded border-[#DADCE0] text-[#1A73E8]"
                      />
                      <span>Calf Tributaries</span>
                    </label>
                    <label className="flex items-center gap-1.5 text-xs font-semibold cursor-pointer">
                      <input
                        type="checkbox"
                        checked={varicoseCriteria.sclerotherapy?.perforatorTributaries ?? true}
                        onChange={(e) => {
                          const sc = varicoseCriteria.sclerotherapy || createDefaultSclerotherapy();
                          setVaricoseCriteria({
                            ...varicoseCriteria,
                            sclerotherapy: { ...sc, perforatorTributaries: e.target.checked },
                          });
                        }}
                        className="rounded border-[#DADCE0] text-[#1A73E8]"
                      />
                      <span>Perforator Outflow</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* CEAP & VCSS Clinical Classification Status Bar */}
            <div className="p-3.5 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DADCE0] pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#202124] uppercase tracking-wider">
                    CEAP &amp; VCSS Clinical Classification Engine
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#E8F0FE] text-[#1A73E8]">
                    Score: {calculateVcssTotal(varicoseCriteria.vcss || createDefaultVcss()).score} / 30 ({calculateVcssTotal(varicoseCriteria.vcss || createDefaultVcss()).severity})
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#3C4043]">CEAP Class:</span>
                  <select
                    value={varicoseCriteria.ceapClass || "C4a"}
                    onChange={(e) =>
                      setVaricoseCriteria({
                        ...varicoseCriteria,
                        ceapClass: e.target.value as CeapClinicalClass,
                      })
                    }
                    className="px-2 py-0.5 rounded border border-[#1A73E8] bg-white text-xs font-bold text-[#1A73E8]"
                  >
                    <option value="C0">C0 - No visible venous disease</option>
                    <option value="C1">C1 - Telangiectasias / Spider veins</option>
                    <option value="C2">C2 - Varicose veins</option>
                    <option value="C3">C3 - Venous edema</option>
                    <option value="C4a">C4a - Pigmentation / Stasis eczema</option>
                    <option value="C4b">C4b - Lipodermatosclerosis</option>
                    <option value="C5">C5 - Healed venous ulcer</option>
                    <option value="C6">C6 - Active venous ulcer</option>
                  </select>
                </div>
              </div>

              {/* Enhanced Post-Operative Safety Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-1 text-xs">
                <div>
                  <label className="block text-[11px] font-bold text-[#3C4043] mb-1">
                    EGIT Surveillance Status
                  </label>
                  <select
                    value={varicoseCriteria.egitStatus || "Grade 0 (Absent - Complete occlusion to 5cm SFJ/SPJ)"}
                    onChange={(e) =>
                      setVaricoseCriteria({
                        ...varicoseCriteria,
                        egitStatus: e.target.value as VaricoseCriteria["egitStatus"],
                      })
                    }
                    className="w-full px-2.5 py-1.5 rounded-lg border border-[#DADCE0] bg-white text-xs font-semibold"
                  >
                    <option value="Grade 0 (Absent - Complete occlusion to 5cm SFJ/SPJ)">
                      Grade 0 (Absent - Complete occlusion)
                    </option>
                    <option value="Grade I (Thrombus flush with junction)">
                      Grade I (Flush with SFJ/SPJ)
                    </option>
                    <option value="Grade II (<50% CFV protrusion)">
                      Grade II (&lt;50% CFV protrusion)
                    </option>
                    <option value="Grade III (>50% CFV protrusion)">
                      Grade III (&gt;50% CFV protrusion)
                    </option>
                    <option value="Grade IV (CFV Occlusion)">
                      Grade IV (CFV Occlusion)
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#3C4043] mb-1">
                    Supervised Ambulation
                  </label>
                  <div className="flex items-center gap-1.5 font-mono">
                    <input
                      type="number"
                      min="10"
                      max="60"
                      step="5"
                      value={varicoseCriteria.immediateAmbulationMinutes || 25}
                      onChange={(e) =>
                        setVaricoseCriteria({
                          ...varicoseCriteria,
                          immediateAmbulationMinutes: parseInt(e.target.value) || 25,
                        })
                      }
                      className="w-16 px-2 py-1.5 rounded-lg border border-[#DADCE0] bg-white text-xs font-semibold text-center"
                    />
                    <span className="text-[11px] font-sans text-[#5F6368]">min immediate walk</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#3C4043] mb-1">
                    Pain VAS Score (0-10)
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={varicoseCriteria.vasPainScore ?? 1}
                      onChange={(e) =>
                        setVaricoseCriteria({
                          ...varicoseCriteria,
                          vasPainScore: parseInt(e.target.value) || 0,
                        })
                      }
                      className="flex-1 accent-[#1A73E8] cursor-pointer"
                    />
                    <span className="font-mono font-bold text-xs text-[#1A73E8] w-6 text-center">
                      {varicoseCriteria.vasPainScore ?? 1}/10
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-end">
                  <label className="flex items-center gap-2 p-2 rounded-lg border border-[#DADCE0] bg-white cursor-pointer select-none text-xs font-semibold">
                    <input
                      type="checkbox"
                      checked={varicoseCriteria.compressionStockingsApplied !== false}
                      onChange={(e) =>
                        setVaricoseCriteria({
                          ...varicoseCriteria,
                          compressionStockingsApplied: e.target.checked,
                        })
                      }
                      className="rounded border-[#DADCE0] text-[#1A73E8]"
                    />
                    <span>Class II (23–32 mmHg) Stockings</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedProcedureKey !== "varicose_veins" && (
          <div className="space-y-4">
            {renderCriteriaPanel()}
          </div>
        )}
      </div>

      {/* ==================================================================== */}
      {/* VIEW A: OFFICIAL PRINTOUT PREVIEW (CLEAN A4)                         */}
      {/* ==================================================================== */}
      {activeTab === "preview" && (
        <div className="bg-white border border-[#DADCE0] rounded-2xl p-3 sm:p-6 md:p-10 shadow-sm space-y-6 print:border-none print:shadow-none print:p-0">
          {/* Hospital Official Header */}
          <div className="text-center border-b-2 border-[#202124] pb-3 space-y-0.5">
            <h2 className="text-base sm:text-lg font-black tracking-wide text-[#202124] uppercase">
              {summaryData.admissionDetails.hospitalName}
            </h2>
            <p className="text-[11px] font-medium text-[#5F6368] uppercase tracking-wider">
              {summaryData.admissionDetails.hospitalAddress}
            </p>
            <h3 className="text-xs sm:text-sm font-bold text-[#202124] uppercase tracking-wider">
              DEPARTMENT OF {summaryData.admissionDetails.departmentName}
            </h3>
            <p className="text-[11px] font-bold text-[#1A73E8]">
              UNIT HEAD: {summaryData.admissionDetails.unitHead} &bull;{" "}
              {summaryData.admissionDetails.unitName}
            </p>
            <div className="pt-2 flex items-center justify-center gap-2">
              <span className="inline-block px-4 py-0.5 border border-[#202124] text-xs font-black tracking-widest uppercase">
                DISCHARGE SUMMARY
              </span>
            </div>
          </div>

          {/* Section 1: Patient Admission Details */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#202124]">
                PATIENT ADMISSION DETAILS
              </h4>
              <button
                onClick={() =>
                  copyTextToClipboard(
                    `HID: ${summaryData.admissionDetails.hid} | Patient: ${summaryData.admissionDetails.patientName} (${summaryData.admissionDetails.age}/${summaryData.admissionDetails.gender}) | Adm No: ${summaryData.admissionDetails.admissionNo} | Ward/Bed: ${summaryData.admissionDetails.wardBed} | Category: ${summaryData.admissionDetails.patientCategory}`,
                    "Admission Details"
                  )
                }
                className="text-[10px] font-semibold text-[#1A73E8] hover:underline flex items-center gap-1 cursor-pointer print:hidden"
              >
                <Copy className="w-3 h-3" /> Copy
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 bg-[#F8F9FA] border border-[#DADCE0] text-xs">
              <div>
                <span className="text-[#5F6368] block text-[10px]">
                  HID / CR No:
                </span>
                <strong className="font-mono">
                  {summaryData.admissionDetails.hid}
                </strong>
              </div>
              <div>
                <span className="text-[#5F6368] block text-[10px]">
                  Patient Name:
                </span>
                <strong>{summaryData.admissionDetails.patientName}</strong>
              </div>
              <div>
                <span className="text-[#5F6368] block text-[10px]">
                  Age / Gender:
                </span>
                <strong>
                  {summaryData.admissionDetails.age} /{" "}
                  {summaryData.admissionDetails.gender}
                </strong>
              </div>
              <div>
                <span className="text-[#5F6368] block text-[10px]">
                  Admission No:
                </span>
                <strong className="font-mono">
                  {summaryData.admissionDetails.admissionNo}
                </strong>
              </div>
              <div>
                <span className="text-[#5F6368] block text-[10px]">
                  Date of Admission:
                </span>
                <span>{summaryData.admissionDetails.dateOfAdmission}</span>
              </div>
              <div>
                <span className="text-[#5F6368] block text-[10px]">
                  Date of Discharge:
                </span>
                <span>{summaryData.admissionDetails.dateOfDischarge}</span>
              </div>
              <div>
                <span className="text-[#5F6368] block text-[10px]">
                  Category / Scheme:
                </span>
                <strong className="text-[#137333]">
                  {summaryData.admissionDetails.patientCategory}
                </strong>
              </div>
              <div>
                <span className="text-[#5F6368] block text-[10px]">
                  Ward / Bed:
                </span>
                <strong>{summaryData.admissionDetails.wardBed}</strong>
              </div>
            </div>
          </div>

          {/* Section 2: Case Summary & Diagnosis */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#202124]">
                CASE SUMMARY &amp; DIAGNOSIS
              </h4>
              <button
                onClick={() =>
                  copyTextToClipboard(
                    `ICD Diagnosis: ${summaryData.caseSummary.icdDiagnosis}\nFinal Diagnosis: ${summaryData.caseSummary.diagnosis}\nChief Complaints: ${summaryData.caseSummary.complaints}\n\nCase Summary: ${summaryData.caseSummary.caseHistory}`,
                    "Case Summary & Diagnosis"
                  )
                }
                className="text-[10px] font-semibold text-[#1A73E8] hover:underline flex items-center gap-1 cursor-pointer print:hidden"
              >
                <Copy className="w-3 h-3" /> Copy
              </button>
            </div>
            <div className="p-3 border border-[#DADCE0] space-y-1.5 text-xs">
              <p>
                <strong className="text-[#202124]">ICD-10 Diagnosis:</strong>{" "}
                <span className="font-semibold text-[#1A73E8] whitespace-pre-line">
                  {summaryData.caseSummary.icdDiagnosis}
                </span>
              </p>
              <p>
                <strong className="text-[#202124]">Final Diagnosis:</strong>{" "}
                <span>{summaryData.caseSummary.diagnosis}</span>
              </p>
              <p>
                <strong className="text-[#202124]">Chief Complaints:</strong>{" "}
                <span>{summaryData.caseSummary.complaints}</span>
              </p>
              <p className="leading-relaxed">
                <strong className="text-[#202124]">Case Summary:</strong>{" "}
                <span>{summaryData.caseSummary.caseHistory}</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-[#F1F3F4] text-[11px]">
                <p>
                  <strong>Past History:</strong>{" "}
                  {summaryData.caseSummary.pastHistory}
                </p>
                <p>
                  <strong>Family History:</strong>{" "}
                  {summaryData.caseSummary.familyHistory}
                </p>
                <p>
                  <strong>Personal History:</strong>{" "}
                  {summaryData.caseSummary.personalHistory}
                </p>
                <p>
                  <strong>Risk Factors:</strong>{" "}
                  {summaryData.caseSummary.riskFactor}
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: General Physical Examination Table */}
          <div className="space-y-1">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#202124]">
              GENERAL PHYSICAL EXAMINATION
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border border-[#DADCE0] text-left">
                <thead className="bg-[#F8F9FA] text-[11px] font-bold">
                  <tr>
                    <th className="p-2 border-r border-b border-[#DADCE0]">
                      Examination Parameter
                    </th>
                    <th className="p-2 border-r border-b border-[#DADCE0]">
                      AT ADMISSION
                    </th>
                    <th className="p-2 border-b border-[#DADCE0]">
                      AT DISCHARGE
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DADCE0]">
                  <tr>
                    <td className="p-1.5 border-r border-[#DADCE0] font-semibold">
                      Blood Pressure
                    </td>
                    <td className="p-1.5 border-r border-[#DADCE0] font-mono">
                      {summaryData.physicalExam.atAdmission.bloodPressure} mm Hg
                    </td>
                    <td className="p-1.5 font-mono">
                      {summaryData.physicalExam.atDischarge.bloodPressure} mm Hg
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1.5 border-r border-[#DADCE0] font-semibold">
                      Pulse Rate (PR)
                    </td>
                    <td className="p-1.5 border-r border-[#DADCE0] font-mono">
                      {summaryData.physicalExam.atAdmission.pr} /min
                    </td>
                    <td className="p-1.5 font-mono">
                      {summaryData.physicalExam.atDischarge.pr} /min
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1.5 border-r border-[#DADCE0] font-semibold">
                      Temperature
                    </td>
                    <td className="p-1.5 border-r border-[#DADCE0] font-mono">
                      {summaryData.physicalExam.atAdmission.temp} °F
                    </td>
                    <td className="p-1.5 font-mono">
                      {summaryData.physicalExam.atDischarge.temp} °F
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1.5 border-r border-[#DADCE0] font-semibold">
                      Respiration Rate (RR)
                    </td>
                    <td className="p-1.5 border-r border-[#DADCE0] font-mono">
                      {summaryData.physicalExam.atAdmission.rr} /min
                    </td>
                    <td className="p-1.5 font-mono">
                      {summaryData.physicalExam.atDischarge.rr} /min
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1.5 border-r border-[#DADCE0] font-semibold">
                      SPO2
                    </td>
                    <td className="p-1.5 border-r border-[#DADCE0] font-mono">
                      {summaryData.physicalExam.atAdmission.spo2} %
                    </td>
                    <td className="p-1.5 font-mono">
                      {summaryData.physicalExam.atDischarge.spo2} %
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1.5 border-r border-[#DADCE0] font-semibold">
                      Pallor / Icterus / Edema
                    </td>
                    <td className="p-1.5 border-r border-[#DADCE0]">
                      {summaryData.physicalExam.atAdmission.pallor} /{" "}
                      {summaryData.physicalExam.atAdmission.icterus} /{" "}
                      {summaryData.physicalExam.atAdmission.edema}
                    </td>
                    <td className="p-1.5">
                      {summaryData.physicalExam.atDischarge.pallor} /{" "}
                      {summaryData.physicalExam.atDischarge.icterus} /{" "}
                      {summaryData.physicalExam.atDischarge.edema}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4: Systemic & Local Examination */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#202124]">
                SYSTEMIC &amp; LOCAL EXAMINATION
              </h4>
              <button
                onClick={() =>
                  copyTextToClipboard(
                    `Local Examination: ${summaryData.systemicExam.localExamination}\nRespiration: ${summaryData.systemicExam.respiration}\nCVS: ${summaryData.systemicExam.cvs}\nPer Abdomen: ${summaryData.systemicExam.perAbdomen}\nCNS: ${summaryData.systemicExam.cns}`,
                    "Examination Details"
                  )
                }
                className="text-[10px] font-semibold text-[#1A73E8] hover:underline flex items-center gap-1 cursor-pointer print:hidden"
              >
                <Copy className="w-3 h-3" /> Copy
              </button>
            </div>
            <div className="p-3 border border-[#DADCE0] text-xs space-y-1">
              <p>
                <strong>(A) Respiration:</strong>{" "}
                {summaryData.systemicExam.respiration}
              </p>
              <p>
                <strong>(B) CVS:</strong> {summaryData.systemicExam.cvs}
              </p>
              <p>
                <strong>(C) Per Abdomen:</strong>{" "}
                {summaryData.systemicExam.perAbdomen}
              </p>
              <p>
                <strong>(D) CNS:</strong> {summaryData.systemicExam.cns}
              </p>
              <p className="pt-1 border-t border-[#F1F3F4] text-[#1A73E8]">
                <strong>(E) Local Examination:</strong>{" "}
                <span className="text-[#202124]">
                  {summaryData.systemicExam.localExamination}
                </span>
              </p>
            </div>
          </div>

          {/* Section 5: Diagnostic Investigations */}
          <div className="space-y-1">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#202124]">
              DIAGNOSTIC INVESTIGATIONS
            </h4>
            <div className="p-3 border border-[#DADCE0] text-xs space-y-1.5">
              {summaryData.investigations.sonography && (
                <p>
                  <strong>Sonography / Color Doppler:</strong>{" "}
                  {summaryData.investigations.sonography}
                </p>
              )}
              {summaryData.investigations.ctScan && (
                <p>
                  <strong>CT Scan:</strong> {summaryData.investigations.ctScan}
                </p>
              )}
              {summaryData.investigations.ecg && (
                <p>
                  <strong>ECG:</strong> {summaryData.investigations.ecg}
                </p>
              )}
              {summaryData.investigations.labResults &&
                summaryData.investigations.labResults.length > 0 && (
                  <div className="pt-1.5">
                    <span className="font-bold text-[10px] text-[#5F6368] uppercase block mb-1">
                      Laboratory Findings:
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {summaryData.investigations.labResults.map((lab, i) => (
                        <div
                          key={i}
                          className="p-1.5 bg-[#F8F9FA] rounded border border-[#DADCE0]"
                        >
                          <span className="text-[10px] text-[#5F6368] block">
                            {lab.parameterName}
                          </span>
                          <strong className="font-mono text-xs">
                            {lab.firstResult}
                          </strong>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          </div>

          {/* Section 6: Operative Procedure Details */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#202124]">
                PROCEDURE DETAILS
              </h4>
              <button
                onClick={() =>
                  copyTextToClipboard(
                    summaryData.procedureDetails[0]?.procedureDetail || "",
                    "Procedure Narrative"
                  )
                }
                className="text-[10px] font-semibold text-[#1A73E8] hover:underline flex items-center gap-1 cursor-pointer print:hidden"
              >
                <Copy className="w-3 h-3" /> Copy Operative Note
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border border-[#DADCE0] text-left">
                <thead className="bg-[#F8F9FA] text-[10px] font-bold uppercase">
                  <tr>
                    <th className="p-2 border-r border-b border-[#DADCE0] w-8">
                      S.No
                    </th>
                    <th className="p-2 border-r border-b border-[#DADCE0] w-24">
                      Date &amp; Time
                    </th>
                    <th className="p-2 border-r border-b border-[#DADCE0] w-16">
                      Type
                    </th>
                    <th className="p-2 border-r border-b border-[#DADCE0]">
                      Surgical Procedure
                    </th>
                    <th className="p-2 border-r border-b border-[#DADCE0] w-20">
                      Anaesthesia
                    </th>
                    <th className="p-2 border-r border-b border-[#DADCE0]">
                      Procedure Detail
                    </th>
                    <th className="p-2 border-b border-[#DADCE0] w-28">
                      Done By
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DADCE0]">
                  {summaryData.procedureDetails.map((proc) => (
                    <tr key={proc.sNo}>
                      <td className="p-2 border-r border-[#DADCE0] text-center font-bold">
                        {proc.sNo}
                      </td>
                      <td className="p-2 border-r border-[#DADCE0] font-mono text-[11px]">
                        {proc.dateTime}
                      </td>
                      <td className="p-2 border-r border-[#DADCE0] font-semibold">
                        {proc.operationType}
                      </td>
                      <td className="p-2 border-r border-[#DADCE0] font-bold text-[#1A73E8]">
                        {proc.surgicalProcedure}
                      </td>
                      <td className="p-2 border-r border-[#DADCE0]">
                        {proc.anaesthesiaType}
                      </td>
                      <td className="p-2 border-r border-[#DADCE0] leading-relaxed text-[11px]">
                        {proc.procedureDetail}
                      </td>
                      <td className="p-2 font-semibold text-[#202124]">
                        {proc.processDoneBy}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 7: Dedicated Post-Operative Notes (SMS Cath-Lab Holding & Recovery) */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#202124]">
                  POST-OPERATIVE NOTES &amp; IMMEDIATE RECOVERY PROTOCOL
                </h4>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#E8F0FE] text-[#1A73E8]">
                  CATH-LAB HOLDING
                </span>
              </div>
              <button
                onClick={() => {
                  const p = summaryData.postOperativeNotes;
                  const text = `POST-OPERATIVE RECOVERY NOTES:
Access Site Hemostasis: ${p?.accessSiteHemostasis || "Hemostasis Intact. Site clean, dry, pressure dressing applied."}
Telemetry Vitals: ${p?.telemetryVitals || "Stable"}
Sheath Removal Time / Status: ${p?.sheathRemovalTime || "Immediate post-op"} (${p?.sheathStatus || "Removed"})
Distal Peripheral Pulses: ${p?.distalPulses || "Strong (+++)"}
${p?.completionDuplex ? `Completion Duplex: ${p.completionDuplex}\n` : ""}${p?.egitStatus ? `EGIT Status: ${p.egitStatus}\n` : ""}${p?.compressionStockings ? `Compression Stockings: ${p.compressionStockings}\n` : ""}${p?.ambulationProtocol ? `Ambulation: ${p.ambulationProtocol}\n` : ""}${p?.chairScreening ? `CHAIR Screening: ${p.chairScreening}\n` : ""}Recovery Status: ${p?.recoveryStatus || "Conscious, oriented"}
Recovery Bed / Ward: ${p?.recoveryBed || summaryData.admissionDetails.wardBed}
Immediate Complications: ${p?.immediateComplications || "Nil"}
Recorded By: ${p?.recordedBy || summaryData.dischargeDetails.dischargePreparedBy}`;
                  copyTextToClipboard(text, "Post-Operative Notes");
                }}
                className="text-[10px] font-semibold text-[#1A73E8] hover:underline flex items-center gap-1 cursor-pointer print:hidden"
              >
                <Copy className="w-3 h-3" /> Copy Post-Op Notes
              </button>
            </div>

            <div className="border border-[#DADCE0] bg-white rounded-lg p-3 text-xs space-y-2.5">
              {/* Top Key Metrics Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 bg-[#F8F9FA] p-2.5 rounded-lg border border-[#DADCE0]">
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#5F6368] block">
                    Access Site Hemostasis
                  </span>
                  <span className="font-semibold text-[#137333] flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#137333] shrink-0" />
                    <span className="truncate">{summaryData.postOperativeNotes?.accessSiteHemostasis ? "Verified & Sealed" : "Hemostasis Intact"}</span>
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#5F6368] block">
                    Telemetry Vitals
                  </span>
                  <span className="font-mono text-xs font-bold text-[#1A73E8] truncate block mt-0.5">
                    {summaryData.postOperativeNotes?.telemetryVitals || "BP: 120/80, HR 72, SpO2 99%"}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#5F6368] block">
                    Sheath Removal Time
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#202124] truncate block mt-0.5">
                    {summaryData.postOperativeNotes?.sheathRemovalTime || "Immediate post-procedure"}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#5F6368] block">
                    Recovery Status
                  </span>
                  <span className="font-semibold text-[#202124] truncate block mt-0.5">
                    {summaryData.postOperativeNotes?.recoveryStatus ? "Monitored / Stable" : "Conscious & Stable"}
                  </span>
                </div>
              </div>

              {/* Detailed Structured Attributes Table */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="space-y-1.5 border-r md:border-[#DADCE0] pr-2">
                  <p>
                    <strong className="text-[#202124]">Access Site &amp; Hemostasis:</strong>{" "}
                    <span className="text-[#3C4043] leading-relaxed">
                      {summaryData.postOperativeNotes?.accessSiteHemostasis || "Access site dry and intact. Pressure dressing applied. Zero active oozing, zero visible hematoma or bruit."}
                    </span>
                  </p>
                  {summaryData.postOperativeNotes?.telemetryVitals ? (
                    <p>
                      <strong className="text-[#202124]">Telemetry &amp; Monitor Vitals:</strong>{" "}
                      <span className="font-mono text-[#1A73E8]">
                        {summaryData.postOperativeNotes.telemetryVitals}
                      </span>
                    </p>
                  ) : null}
                  <p>
                    <strong className="text-[#202124]">Sheath Removal &amp; Profile:</strong>{" "}
                    <span className="text-[#3C4043]">
                      {summaryData.postOperativeNotes?.sheathRemovalTime || "Post-procedure"} &bull;{" "}
                      <span className="font-semibold text-[#137333]">
                        Status: {summaryData.postOperativeNotes?.sheathStatus || "Removed"}
                      </span>
                    </span>
                  </p>
                  <p>
                    <strong className="text-[#202124]">Distal Peripheral Pulses:</strong>{" "}
                    <span className="text-[#3C4043]">
                      {summaryData.postOperativeNotes?.distalPulses || "Strong (+++) - Bilateral peripheral pulses equal with rapid capillary refill"}
                    </span>
                  </p>
                  {summaryData.postOperativeNotes?.completionDuplex && (
                    <p>
                      <strong className="text-[#202124]">Completion Duplex:</strong>{" "}
                      <span className="text-[#137333] font-semibold leading-relaxed">
                        {summaryData.postOperativeNotes.completionDuplex}
                      </span>
                    </p>
                  )}
                  {summaryData.postOperativeNotes?.egitStatus && (
                    <p>
                      <strong className="text-[#202124]">EGIT Surveillance:</strong>{" "}
                      <span className="font-semibold text-[#1A73E8]">
                        {summaryData.postOperativeNotes.egitStatus}
                      </span>
                    </p>
                  )}
                </div>

                <div className="space-y-1.5 pl-0 md:pl-1">
                  <p>
                    <strong className="text-[#202124]">Recovery Status &amp; Sensorium:</strong>{" "}
                    <span className="text-[#3C4043] leading-relaxed">
                      {summaryData.postOperativeNotes?.recoveryStatus || "Conscious, oriented to time, place, and person. Pain score VAS 1/10. Supine flat bed rest protocol active."}
                    </span>
                  </p>
                  {summaryData.postOperativeNotes?.compressionStockings && (
                    <p>
                      <strong className="text-[#202124]">Compression Therapy:</strong>{" "}
                      <span className="text-[#3C4043]">
                        {summaryData.postOperativeNotes.compressionStockings}
                      </span>
                    </p>
                  )}
                  {summaryData.postOperativeNotes?.ambulationProtocol && (
                    <p>
                      <strong className="text-[#202124]">Ambulation Protocol:</strong>{" "}
                      <span className="text-[#3C4043]">
                        {summaryData.postOperativeNotes.ambulationProtocol}
                      </span>
                    </p>
                  )}
                  {summaryData.postOperativeNotes?.chairScreening && (
                    <p>
                      <strong className="text-[#202124]">CHAIR Screening:</strong>{" "}
                      <span className="text-[#3C4043]">
                        {summaryData.postOperativeNotes.chairScreening}
                      </span>
                    </p>
                  )}
                  {summaryData.postOperativeNotes?.painVasScore !== undefined && (
                    <p>
                      <strong className="text-[#202124]">Pain VAS Score:</strong>{" "}
                      <span className="font-mono text-[#1A73E8] font-bold">
                        {summaryData.postOperativeNotes.painVasScore} / 10
                      </span>
                    </p>
                  )}
                  <p>
                    <strong className="text-[#202124]">Recovery Location / Bed:</strong>{" "}
                    <span className="font-semibold text-[#1A73E8]">
                      {summaryData.postOperativeNotes?.recoveryBed || summaryData.admissionDetails.wardBed}
                    </span>
                  </p>
                  <p>
                    <strong className="text-[#202124]">Immediate Complications:</strong>{" "}
                    <span className="text-[#137333] font-semibold">
                      {summaryData.postOperativeNotes?.immediateComplications || "Nil - Zero hematoma, zero pseudoaneurysm, zero acute distal vascular compromise"}
                    </span>
                  </p>
                  <p>
                    <strong className="text-[#202124]">Recorded By:</strong>{" "}
                    <span className="text-[#5F6368]">
                      {summaryData.postOperativeNotes?.recordedBy || summaryData.dischargeDetails.dischargePreparedBy} (IR Senior Resident / Consultant) &bull; {summaryData.postOperativeNotes?.recordedAt || "Post-op Room Check"}
                    </span>
                  </p>
                  {summaryData.postOperativeNotes?.notes && (
                    <p className="pt-1 border-t border-[#F1F3F4] text-[11px] text-[#5F6368] italic">
                      {summaryData.postOperativeNotes.notes}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Section 8: Discharge Medications Table */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#202124]">
                DISCHARGE MEDICATIONS (RMSCL EDL)
              </h4>
              <button
                onClick={() =>
                  copyTextToClipboard(
                    summaryData.dischargeMedications
                      .map(
                        (m) =>
                          `${m.sNo}. ${m.medicine} - ${m.dosePower} (${m.frequency}) x ${m.days} days [${m.instructions}]`
                      )
                      .join("\n"),
                    "Discharge Medications"
                  )
                }
                className="text-[10px] font-semibold text-[#137333] hover:underline flex items-center gap-1 cursor-pointer print:hidden"
              >
                <Copy className="w-3 h-3" /> Copy Meds
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border border-[#DADCE0] text-left">
                <thead className="bg-[#F8F9FA] text-[10px] font-bold uppercase">
                  <tr>
                    <th className="p-2 border-r border-b border-[#DADCE0] w-8">
                      S.No
                    </th>
                    <th className="p-2 border-r border-b border-[#DADCE0]">
                      Medicine Name
                    </th>
                    <th className="p-2 border-r border-b border-[#DADCE0] w-24">
                      Dose / Power
                    </th>
                    <th className="p-2 border-r border-b border-[#DADCE0] w-16">
                      Route
                    </th>
                    <th className="p-2 border-r border-b border-[#DADCE0] w-16">
                      Freq
                    </th>
                    <th className="p-2 border-r border-b border-[#DADCE0] w-16">
                      Days
                    </th>
                    <th className="p-2 border-b border-[#DADCE0]">
                      Instructions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DADCE0]">
                  {summaryData.dischargeMedications.map((m) => (
                    <tr key={m.sNo}>
                      <td className="p-2 border-r border-[#DADCE0] text-center font-bold">
                        {m.sNo}
                      </td>
                      <td className="p-2 border-r border-[#DADCE0] font-bold text-[#202124]">
                        {m.medicine}
                      </td>
                      <td className="p-2 border-r border-[#DADCE0] font-mono">
                        {m.dosePower}
                      </td>
                      <td className="p-2 border-r border-[#DADCE0] font-semibold">
                        {m.route}
                      </td>
                      <td className="p-2 border-r border-[#DADCE0] font-mono font-bold text-[#1A73E8]">
                        {m.frequency}
                      </td>
                      <td className="p-2 border-r border-[#DADCE0] font-mono">
                        {m.days}
                      </td>
                      <td className="p-2 text-[11px] text-[#5F6368]">
                        {m.instructions}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 9: Procedural Imaging Exhibit */}
          <div className="space-y-2 border border-[#DADCE0] p-3.5 sm:p-4 bg-white rounded-xl print:break-inside-avoid">
            <div className="flex items-center justify-between border-b border-[#DADCE0] pb-2">
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#202124] flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-[#1A73E8]" />
                  Procedural Imaging &amp; Completion Verification
                </h4>
                <p className="text-[10px] text-[#5F6368]">
                  Cath-Lab Angiosuite Documentation
                </p>
              </div>
              <div className="flex items-center gap-2 print:hidden">
                <label className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-[#DADCE0] bg-white hover:bg-[#F1F3F4] text-[11px] font-semibold text-[#3C4043] cursor-pointer shadow-2xs">
                  <Upload className="w-3 h-3 text-[#1A73E8]" />
                  <span>Upload Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                </label>
              </div>
            </div>

            {!summaryData.attachments || summaryData.attachments.length === 0 ? (
              <div className="p-4 text-center text-xs text-[#80868B] italic">
                No procedural imaging or angiogram runs attached to this
                discharge summary.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {summaryData.attachments.map((att, idx) => (
                  <div
                    key={att.id || idx}
                    className="border border-[#DADCE0] rounded-lg overflow-hidden bg-[#FAFAFA] flex flex-col shadow-2xs"
                  >
                    <div className="px-3 py-1.5 bg-[#F1F3F4] border-b border-[#DADCE0] flex items-center justify-between text-[10px]">
                      <div className="flex items-center gap-1.5 font-bold text-[#202124] truncate">
                        <span className="px-1.5 py-0.2 rounded font-mono font-bold bg-[#1A73E8] text-white">
                          [{att.modality}]
                        </span>
                        <span className="truncate">{att.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#5F6368] font-mono text-[9px]">
                          {att.capturedAt}
                        </span>
                        <button
                          onClick={() => handleDeleteAttachment(idx)}
                          className="text-[#EA4335] hover:bg-[#FCE8E6] p-0.5 rounded print:hidden"
                          title="Remove attachment"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <div className="p-2 bg-black flex items-center justify-center">
                      {renderAttachmentVisual(att)}
                    </div>
                    <div className="p-2.5 text-[11px] space-y-1 bg-white flex-1 border-t border-[#DADCE0]">
                      <p className="text-[#202124] leading-relaxed">
                        <strong className="text-[#3C4043]">Findings:</strong>{" "}
                        {att.caption}
                      </p>
                      <div className="pt-1 flex items-center justify-between text-[9px] text-[#5F6368] border-t border-[#F1F3F4]">
                        <span>Sawai Man Singh Hospital &bull; Angiosuite</span>
                        <span className="font-semibold text-[#137333] flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-[#137333]" />
                          Technical Result Verified
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Section 10: Patient Discharge Details & Signatures */}
          <div className="p-3 border border-[#DADCE0] space-y-3 text-xs">
            <div>
              <strong>General Advice:</strong>{" "}
              <span className="whitespace-pre-line">
                {summaryData.dischargeDetails.generalAdvise}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <strong>Condition on Discharge:</strong>{" "}
                <span className="text-[#137333] font-bold">
                  {summaryData.dischargeDetails.conditionOnDischarge}
                </span>
              </div>
              <div>
                <strong>Follow Up:</strong>{" "}
                <span className="font-semibold">
                  {summaryData.dischargeDetails.followUp}
                </span>
                {summaryData.dischargeDetails.followUpDate && (
                  <span className="block text-[#1A73E8] font-bold mt-0.5">
                    Next Appointment Date: {summaryData.dischargeDetails.followUpDate}
                  </span>
                )}
              </div>
            </div>

            {/* Signature Area */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#DADCE0] text-xs">
              <div>
                <p className="font-bold text-[#202124]">
                  {summaryData.dischargeDetails.dischargePreparedBy || "Dr. Neel Yadav"}
                </p>
                <p className="text-[10px] text-[#5F6368]">
                  Doing Doctor / Senior Resident (IR)
                </p>
              </div>
              <div className="text-left sm:text-center">
                <p className="font-bold text-[#202124]">
                  {summaryData.dischargeDetails.assistantProfessor || "Dr. Shashank Sharma"}
                </p>
                <p className="text-[10px] text-[#5F6368]">
                  Assistant Professor (IR)
                </p>
              </div>
              <div className="text-left sm:text-right">
                <p className="font-bold text-[#202124]">
                  {summaryData.dischargeDetails.approvedBy || "Dr. Alok Verma"}
                </p>
                <p className="text-[10px] text-[#5F6368]">
                  Senior Professor &amp; Unit Head (IR)
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* VIEW B: INTERACTIVE FORM EDITOR FOR FINE-TUNING TEXT FIELDS          */}
      {/* ==================================================================== */}
      {activeTab === "editor" && (
        <div className="space-y-4 print:hidden">
          {/* Section 1: Demographics Card */}
          <div className="bg-white border border-[#DADCE0] rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-[#F1F3F4] pb-2">
              <h3 className="font-bold text-xs uppercase tracking-wider text-[#1A73E8] flex items-center gap-1.5">
                <Building className="w-4 h-4" />
                1. Patient Admission Details
              </h3>
              <button
                onClick={() =>
                  copyTextToClipboard(
                    `HID: ${summaryData.admissionDetails.hid}\nPatient: ${summaryData.admissionDetails.patientName} (${summaryData.admissionDetails.age}/${summaryData.admissionDetails.gender})\nAdm No: ${summaryData.admissionDetails.admissionNo}\nWard/Bed: ${summaryData.admissionDetails.wardBed}`,
                    "Admission Details"
                  )
                }
                className="text-[11px] font-semibold text-[#1A73E8] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                Copy Details
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                  Patient Name
                </label>
                <input
                  type="text"
                  value={summaryData.admissionDetails.patientName}
                  onChange={(e) =>
                    setSummaryData({
                      ...summaryData,
                      admissionDetails: {
                        ...summaryData.admissionDetails,
                        patientName: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0] font-semibold"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                  HID / CR No
                </label>
                <input
                  type="text"
                  value={summaryData.admissionDetails.hid}
                  onChange={(e) =>
                    setSummaryData({
                      ...summaryData,
                      admissionDetails: {
                        ...summaryData.admissionDetails,
                        hid: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0] font-mono"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                  Admission No
                </label>
                <input
                  type="text"
                  value={summaryData.admissionDetails.admissionNo}
                  onChange={(e) =>
                    setSummaryData({
                      ...summaryData,
                      admissionDetails: {
                        ...summaryData.admissionDetails,
                        admissionNo: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0] font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                  Category
                </label>
                <select
                  value={summaryData.admissionDetails.patientCategory}
                  onChange={(e) =>
                    setSummaryData({
                      ...summaryData,
                      admissionDetails: {
                        ...summaryData.admissionDetails,
                        patientCategory: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0]"
                >
                  <option value="MAAY">MAAY (Mukhyamantri Ayushman)</option>
                  <option value="RGHS">
                    RGHS (Rajasthan Govt Health Scheme)
                  </option>
                  <option value="GENERAL">GENERAL</option>
                  <option value="PMJAY">PMJAY (AB-MGRSBY)</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                  Ward / Bed
                </label>
                <input
                  type="text"
                  value={summaryData.admissionDetails.wardBed}
                  onChange={(e) =>
                    setSummaryData({
                      ...summaryData,
                      admissionDetails: {
                        ...summaryData.admissionDetails,
                        wardBed: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                  Unit Head
                </label>
                <input
                  type="text"
                  value={summaryData.admissionDetails.unitHead}
                  onChange={(e) =>
                    setSummaryData({
                      ...summaryData,
                      admissionDetails: {
                        ...summaryData.admissionDetails,
                        unitHead: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0]"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Case Summary & Diagnosis Card */}
          <div className="bg-white border border-[#DADCE0] rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-[#F1F3F4] pb-2">
              <h3 className="font-bold text-xs uppercase tracking-wider text-[#1A73E8] flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                2. Case Summary / Diagnosis
              </h3>
              <button
                onClick={() =>
                  copyTextToClipboard(
                    `ICD Diagnosis: ${summaryData.caseSummary.icdDiagnosis}\nDiagnosis: ${summaryData.caseSummary.diagnosis}\nComplaints: ${summaryData.caseSummary.complaints}\nCase Summary: ${summaryData.caseSummary.caseHistory}`,
                    "Case Summary"
                  )
                }
                className="text-[11px] font-semibold text-[#1A73E8] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                Copy Summary
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                  ICD Diagnosis
                </label>
                <textarea
                  rows={2}
                  value={summaryData.caseSummary.icdDiagnosis}
                  onChange={(e) =>
                    setSummaryData({
                      ...summaryData,
                      caseSummary: {
                        ...summaryData.caseSummary,
                        icdDiagnosis: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0] font-semibold text-[#1A73E8]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                  Final Diagnosis
                </label>
                <textarea
                  rows={2}
                  value={summaryData.caseSummary.diagnosis}
                  onChange={(e) =>
                    setSummaryData({
                      ...summaryData,
                      caseSummary: {
                        ...summaryData.caseSummary,
                        diagnosis: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0]"
                />
              </div>
            </div>

            <div className="text-xs">
              <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                Chief Complaints
              </label>
              <input
                type="text"
                value={summaryData.caseSummary.complaints}
                onChange={(e) =>
                  setSummaryData({
                    ...summaryData,
                    caseSummary: {
                      ...summaryData.caseSummary,
                      complaints: e.target.value,
                    },
                  })
                }
                className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0]"
              />
            </div>

            <div className="text-xs">
              <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                Detailed Case History
              </label>
              <textarea
                rows={4}
                value={summaryData.caseSummary.caseHistory}
                onChange={(e) =>
                  setSummaryData({
                    ...summaryData,
                    caseSummary: {
                      ...summaryData.caseSummary,
                      caseHistory: e.target.value,
                    },
                  })
                }
                className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0]"
              />
            </div>
          </div>

          {/* Section 3: Operative Procedure Details Card */}
          <div className="bg-white border border-[#DADCE0] rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-[#F1F3F4] pb-2">
              <h3 className="font-bold text-xs uppercase tracking-wider text-[#1A73E8] flex items-center gap-1.5">
                <Activity className="w-4 h-4" />
                3. Operative Procedure Detail
              </h3>
              <button
                onClick={() =>
                  copyTextToClipboard(
                    summaryData.procedureDetails[0]?.procedureDetail || "",
                    "Procedure Narrative"
                  )
                }
                className="text-[11px] font-semibold text-[#1A73E8] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                Copy Procedure Note
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                  Surgical Procedure Name
                </label>
                <input
                  type="text"
                  value={
                    summaryData.procedureDetails[0]?.surgicalProcedure || ""
                  }
                  onChange={(e) => {
                    const copy = [...summaryData.procedureDetails];
                    copy[0].surgicalProcedure = e.target.value;
                    setSummaryData({ ...summaryData, procedureDetails: copy });
                  }}
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0] font-bold text-[#1A73E8]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                  Anaesthesia Type
                </label>
                <select
                  value={
                    summaryData.procedureDetails[0]?.anaesthesiaType || "LOCAL"
                  }
                  onChange={(e) => {
                    const copy = [...summaryData.procedureDetails];
                    copy[0].anaesthesiaType = e.target.value as "LOCAL";
                    setSummaryData({ ...summaryData, procedureDetails: copy });
                  }}
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0]"
                >
                  <option value="LOCAL">LOCAL</option>
                  <option value="CONSCIOUS SEDATION">CONSCIOUS SEDATION</option>
                  <option value="GENERAL">GENERAL</option>
                  <option value="REGIONAL">REGIONAL</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                  Done By
                </label>
                <input
                  type="text"
                  value={summaryData.procedureDetails[0]?.processDoneBy || ""}
                  onChange={(e) => {
                    const copy = [...summaryData.procedureDetails];
                    copy[0].processDoneBy = e.target.value;
                    setSummaryData({ ...summaryData, procedureDetails: copy });
                  }}
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0]"
                />
              </div>
            </div>

            <div className="text-xs space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <label className="block text-[11px] font-semibold text-[#5F6368]">
                  Detailed Operative Technique Narrative
                </label>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] text-zinc-500 font-semibold">Insert Embolic / Hardware:</span>
                  <select
                    className="text-[11px] bg-zinc-50 border border-zinc-300 rounded px-2 py-0.5 text-zinc-800 focus:outline-none focus:ring-1 focus:ring-[#1A73E8]"
                    onChange={(e) => {
                      if (!e.target.value) return;
                      const copy = [...summaryData.procedureDetails];
                      const current = copy[0]?.procedureDetail || "";
                      copy[0].procedureDetail = current ? `${current} Embolization performed using ${e.target.value}.` : `Embolization performed using ${e.target.value}.`;
                      setSummaryData({ ...summaryData, procedureDetails: copy });
                      e.target.value = "";
                    }}
                    defaultValue=""
                  >
                    <option value="" disabled>-- Quick Add Embolic Material --</option>
                    <option value="PVA Particles 300-500 µm">PVA 300-500 µm</option>
                    <option value="PVA Particles 100-300 µm">PVA 100-300 µm</option>
                    <option value="PVA Particles 500-710 µm">PVA 500-710 µm</option>
                    <option value="PVA Particles 710-1000 µm">PVA 710-1000 µm</option>
                    <option value="Gelfoam slurry / Torpedoes">Gelfoam slurry / Torpedoes</option>
                    <option value="Lipiodol + Doxorubicin emulsion">Lipiodol + Doxorubicin emulsion</option>
                    <option value="Embosphere / Calibrated Microspheres (300-500 µm)">Embosphere / Microspheres (300-500 µm)</option>
                    <option value="Embosphere / Calibrated Microspheres (500-700 µm)">Embosphere / Microspheres (500-700 µm)</option>
                    <option value="0.018 pushable / detachable microcoils">Pushable/Detachable Microcoils</option>
                  </select>
                </div>
              </div>
              <textarea
                rows={5}
                value={summaryData.procedureDetails[0]?.procedureDetail || ""}
                onChange={(e) => {
                  const copy = [...summaryData.procedureDetails];
                  copy[0].procedureDetail = e.target.value;
                  setSummaryData({ ...summaryData, procedureDetails: copy });
                }}
                className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0] leading-relaxed"
              />
            </div>
          </div>

          {/* Section 7: Post-Operative Notes & Immediate Recovery Editor Card */}
          <div className="bg-white border border-[#DADCE0] rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-[#F1F3F4] pb-2">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#1A73E8] flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-[#1A73E8]" />
                  7. Post-Operative Notes &amp; Recovery Parameters
                </h3>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#E8F0FE] text-[#1A73E8]">
                  CATH-LAB HOLDING
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  const p = summaryData.postOperativeNotes;
                  const text = `POST-OPERATIVE RECOVERY NOTES:
Access Site Hemostasis: ${p?.accessSiteHemostasis || "Hemostasis Intact"}
Telemetry Vitals: ${p?.telemetryVitals || "Stable"}
Sheath Removal Time / Status: ${p?.sheathRemovalTime || "Immediate post-op"} (${p?.sheathStatus || "Removed"})
Recovery Status: ${p?.recoveryStatus || "Conscious, oriented"}
Recovery Bed: ${p?.recoveryBed || summaryData.admissionDetails.wardBed}
Distal Peripheral Pulses: ${p?.distalPulses || "Strong (+++)"}
Immediate Complications: ${p?.immediateComplications || "Nil"}
Recorded By: ${p?.recordedBy || summaryData.dischargeDetails.dischargePreparedBy}`;
                  copyTextToClipboard(text, "Post-Operative Notes");
                }}
                className="text-[11px] font-semibold text-[#1A73E8] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                Copy Post-Op
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                  Access Site Hemostasis
                </label>
                <input
                  type="text"
                  value={summaryData.postOperativeNotes?.accessSiteHemostasis || ""}
                  onChange={(e) => {
                    const current = summaryData.postOperativeNotes || {
                      accessSiteHemostasis: "",
                      telemetryVitals: "",
                      sheathRemovalTime: "",
                      recoveryStatus: "",
                    };
                    setSummaryData({
                      ...summaryData,
                      postOperativeNotes: { ...current, accessSiteHemostasis: e.target.value },
                    });
                  }}
                  placeholder="e.g. Manual compression applied; complete seal achieved. Zero hematoma."
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                  Telemetry Vitals (Cath-Lab Holding)
                </label>
                <input
                  type="text"
                  value={summaryData.postOperativeNotes?.telemetryVitals || ""}
                  onChange={(e) => {
                    const current = summaryData.postOperativeNotes || {
                      accessSiteHemostasis: "",
                      telemetryVitals: "",
                      sheathRemovalTime: "",
                      recoveryStatus: "",
                    };
                    setSummaryData({
                      ...summaryData,
                      postOperativeNotes: { ...current, telemetryVitals: e.target.value },
                    });
                  }}
                  placeholder="e.g. BP: 118/76 mmHg, HR: 72 bpm, SpO2: 99%, RR: 16/min"
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0] font-mono"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                  Sheath Removal Time &amp; Profile
                </label>
                <input
                  type="text"
                  value={summaryData.postOperativeNotes?.sheathRemovalTime || ""}
                  onChange={(e) => {
                    const current = summaryData.postOperativeNotes || {
                      accessSiteHemostasis: "",
                      telemetryVitals: "",
                      sheathRemovalTime: "",
                      recoveryStatus: "",
                    };
                    setSummaryData({
                      ...summaryData,
                      postOperativeNotes: { ...current, sheathRemovalTime: e.target.value },
                    });
                  }}
                  placeholder="e.g. 31-08-2026 11:30 AM (Immediate post-procedure)"
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                  Sheath Status
                </label>
                <select
                  value={summaryData.postOperativeNotes?.sheathStatus || "Removed"}
                  onChange={(e) => {
                    const current = summaryData.postOperativeNotes || {
                      accessSiteHemostasis: "",
                      telemetryVitals: "",
                      sheathRemovalTime: "",
                      recoveryStatus: "",
                    };
                    setSummaryData({
                      ...summaryData,
                      postOperativeNotes: { ...current, sheathStatus: e.target.value },
                    });
                  }}
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0]"
                >
                  <option value="Removed">Removed (Closure verified)</option>
                  <option value="In Situ">In Situ (Pending removal protocol)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                  Recovery Status &amp; Sensorium
                </label>
                <input
                  type="text"
                  value={summaryData.postOperativeNotes?.recoveryStatus || ""}
                  onChange={(e) => {
                    const current = summaryData.postOperativeNotes || {
                      accessSiteHemostasis: "",
                      telemetryVitals: "",
                      sheathRemovalTime: "",
                      recoveryStatus: "",
                    };
                    setSummaryData({
                      ...summaryData,
                      postOperativeNotes: { ...current, recoveryStatus: e.target.value },
                    });
                  }}
                  placeholder="e.g. Conscious, oriented, pain score VAS 1/10. Supine flat rest 4 hours."
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                  Distal Peripheral Pulses
                </label>
                <input
                  type="text"
                  value={summaryData.postOperativeNotes?.distalPulses || ""}
                  onChange={(e) => {
                    const current = summaryData.postOperativeNotes || {
                      accessSiteHemostasis: "",
                      telemetryVitals: "",
                      sheathRemovalTime: "",
                      recoveryStatus: "",
                    };
                    setSummaryData({
                      ...summaryData,
                      postOperativeNotes: { ...current, distalPulses: e.target.value },
                    });
                  }}
                  placeholder="e.g. Strong (+++) bilaterally equal, brisk capillary refill (<2s)"
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                  Recovery Bed / Bay
                </label>
                <input
                  type="text"
                  value={summaryData.postOperativeNotes?.recoveryBed || ""}
                  onChange={(e) => {
                    const current = summaryData.postOperativeNotes || {
                      accessSiteHemostasis: "",
                      telemetryVitals: "",
                      sheathRemovalTime: "",
                      recoveryStatus: "",
                    };
                    setSummaryData({
                      ...summaryData,
                      postOperativeNotes: { ...current, recoveryBed: e.target.value },
                    });
                  }}
                  placeholder="e.g. Cath-Lab Holding PACU-01"
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                  Recorded By &amp; Immediate Complications
                </label>
                <input
                  type="text"
                  value={summaryData.postOperativeNotes?.recordedBy || ""}
                  onChange={(e) => {
                    const current = summaryData.postOperativeNotes || {
                      accessSiteHemostasis: "",
                      telemetryVitals: "",
                      sheathRemovalTime: "",
                      recoveryStatus: "",
                    };
                    setSummaryData({
                      ...summaryData,
                      postOperativeNotes: { ...current, recordedBy: e.target.value },
                    });
                  }}
                  placeholder="e.g. Dr. Neel Yadav (Senior Resident IR)"
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0]"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* VIEW C: >10 CLINICAL METRICS & VARICOSE HEMODYNAMIC ANALYTICS SUITE  */}
      {/* ==================================================================== */}
      {activeTab === "analytics" && (
        <ClinicalMetricsSuite onSelectProcedure={handleSelectFromAnalytics} />
      )}

      {/* ==================================================================== */}
      {/* VIEW D: RAJASTHAN SSO & IHMS E-HOSPITAL LIVE PREFILL ENGINE          */}
      {/* ==================================================================== */}
      {activeTab === "sso" && <SsoIhmsPrefill summaryData={summaryData} />}

      {/* ==================================================================== */}
      {/* VIEW E: HISTORICAL RECORDS VIEWER / ARCHIVE FOR SELECTED PATIENT     */}
      {/* ==================================================================== */}
      {activeTab === "history" && (
        <div className="space-y-4 print:hidden">
          {/* Header Card */}
          <div className="bg-white border border-[#DADCE0] rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F1F3F4] pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-[#E8F0FE] text-[#1A73E8]">
                    <History className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-sm font-bold text-[#202124]">
                      Historical Records &amp; Previous Notes Archive
                    </h2>
                    <p className="text-[11px] text-[#5F6368]">
                      Comprehensive patient history: previous post-operative notes, catheter lab encounters, and discharge summaries for{" "}
                      <strong className="text-[#1A73E8]">{summaryData.admissionDetails.patientName}</strong> (HID: {summaryData.admissionDetails.hid})
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold text-[#5F6368] whitespace-nowrap">
                  Showing records for:
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#E8F0FE] text-[#1A73E8] text-xs font-bold border border-[#D2E3FC]">
                  {summaryData.admissionDetails.patientName} ({summaryData.admissionDetails.hid})
                </span>
              </div>
            </div>

            {/* Quick Filter & Meta Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-[#5F6368] uppercase">Filters:</span>
                <span className="px-2 py-0.5 rounded bg-[#F1F3F4] text-[#3C4043] font-semibold text-[11px]">
                  All Recorded Encounters ({
                    1 + (selectedPatientId === "EX01" ? 2 : selectedPatientId === "EX02" || selectedPatientId === "PT01" ? 2 : 1)
                  })
                </span>
                <span className="px-2 py-0.5 rounded bg-[#CEEAD6] text-[#0D652D] font-semibold text-[11px]">
                  Cath-Lab Post-Op Notes
                </span>
                <span className="px-2 py-0.5 rounded bg-[#E8F0FE] text-[#1A73E8] font-semibold text-[11px]">
                  Discharge Summaries
                </span>
              </div>
              <div className="text-[11px] text-[#5F6368]">
                Institution: <span className="font-semibold text-[#202124]">Sawai Man Singh Hospital, Jaipur</span>
              </div>
            </div>
          </div>

          {/* Current Active Encounter Banner */}
          <div className="bg-linear-to-r from-[#E8F0FE] to-[#F8F9FA] border border-[#D2E3FC] rounded-2xl p-4 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-white text-[#1A73E8] shadow-2xs mt-0.5">
                  <Activity className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#1A73E8] text-white">
                      CURRENT ENCOUNTER
                    </span>
                    <span className="font-mono text-xs font-bold text-[#202124]">
                      Adm #{summaryData.admissionDetails.admissionNo}
                    </span>
                    <span className="text-[11px] text-[#5F6368]">
                      &bull; Admitted: {summaryData.admissionDetails.dateOfAdmission}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-[#202124]">
                    {summaryData.procedureDetails[0]?.surgicalProcedure || summaryData.caseSummary.diagnosis}
                  </h3>
                  <p className="text-xs text-[#3C4043]">
                    <strong>Ward/Bed:</strong> {summaryData.admissionDetails.wardBed} &bull;{" "}
                    <strong>Hemostasis:</strong> {summaryData.postOperativeNotes?.accessSiteHemostasis || "Intact"} &bull;{" "}
                    <strong>Telemetry:</strong> {summaryData.postOperativeNotes?.telemetryVitals || "Stable"} &bull;{" "}
                    <strong>Sheath Removal:</strong> {summaryData.postOperativeNotes?.sheathRemovalTime || "Completed"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-center">
                <button
                  type="button"
                  onClick={() => setActiveTab("preview")}
                  className="px-3 py-1.5 rounded-lg bg-white border border-[#DADCE0] hover:border-[#1A73E8] text-xs font-semibold text-[#1A73E8] transition-colors cursor-pointer flex items-center gap-1 shadow-2xs"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Current Summary</span>
                </button>
              </div>
            </div>
          </div>

          {/* Historical Encounters Timeline / Records List */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-[#5F6368] uppercase tracking-wider pl-1 flex items-center gap-1.5">
              <History className="w-4 h-4 text-[#1A73E8]" />
              Prior Recorded Encounters &amp; Post-Op Transcripts
            </h3>

            {/* Dynamic Prior Encounter 1 */}
            <div className="bg-white border border-[#DADCE0] rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F1F3F4] pb-2.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#CEEAD6] text-[#0D652D]">
                    PREVIOUS ENCOUNTER (INDEX ADMISSION)
                  </span>
                  <span className="font-mono text-xs font-bold text-[#202124]">
                    {selectedPatientId === "EX02" || selectedPatientId === "PT01"
                      ? "A/SSH/26/14102"
                      : "A/SMSH/26/088421"}
                  </span>
                  <span className="text-[11px] text-[#5F6368]">
                    &bull; {selectedPatientId === "EX02" || selectedPatientId === "PT01"
                      ? "Date: 12-08-2026 to 16-08-2026"
                      : "Date: 14-06-2026 to 15-06-2026"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold text-[#5F6368] bg-[#F1F3F4] px-2 py-0.5 rounded">
                    Discharged Improved
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      const noteText = selectedPatientId === "EX02" || selectedPatientId === "PT01"
                        ? `HISTORICAL POST-OPERATIVE NOTE (14-08-2026):
Patient: ${summaryData.admissionDetails.patientName} (HID: ${summaryData.admissionDetails.hid})
Procedure: Diagnostic Hepatic Venogram & Transjugular Liver Biopsy (TJLB)
Access Site Hemostasis: Right IJV access. Manual compression 10 mins. Sterile compression dressing intact. Zero hematoma.
Telemetry Vitals: BP: 116/74 mmHg, HR: 76 bpm, SpO2: 99% on room air, RR: 16/min
Sheath Removal Time / Status: 14-08-2026 12:45 PM (Removed in Cath-Lab Angiosuite 1)
Recovery Status: Conscious, oriented, pain VAS 1/10. Strict right lateral positioning maintained for 4 hours.
Recovery Bed: Liver ICU Bed LICU-02
Distal Pulses: Strong (+++) - Bilateral carotids and radials palpable
Operator: Dr. Meenu Bagarhatta / Dr. Neel Yadav`
                        : `HISTORICAL POST-OPERATIVE NOTE (14-06-2026):
Patient: ${summaryData.admissionDetails.patientName} (HID: ${summaryData.admissionDetails.hid})
Procedure: Diagnostic Bilateral Lower Limb Venous Duplex & Diagnostic Phlebography
Access Site Hemostasis: Left popliteal vein puncture. Manual pressure applied for 8 mins; puncture dry and intact.
Telemetry Vitals: BP: 110/76 mmHg, HR: 68 bpm regular, SpO2: 100% on ambient air, RR: 18/min
Sheath Removal Time / Status: 14-06-2026 11:20 AM (Removed immediate post-procedure)
Recovery Status: Conscious, oriented, walked comfortably after 1 hour. No hematoma.
Recovery Bed: Daycare Holding Rec-02
Distal Pulses: Strong (+++) - Dorsalis pedis and posterior tibial equal
Operator: Dr. Shashank Sharma`;
                      copyTextToClipboard(noteText, "Historical Post-Op Note");
                    }}
                    className="text-[11px] font-semibold text-[#1A73E8] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Copy className="w-3 h-3" />
                    Copy Historical Note
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-1">
                  <h4 className="font-bold text-xs text-[#202124] flex items-center gap-1.5">
                    <Stethoscope className="w-3.5 h-3.5 text-[#1A73E8]" />
                    {selectedPatientId === "EX02" || selectedPatientId === "PT01"
                      ? "Diagnostic Hepatic Venography & Transjugular Liver Biopsy (TJLB)"
                      : "Diagnostic Bilateral Lower Limb Venous Duplex & Phlebographic Mapping"}
                  </h4>
                  <span className="text-[11px] font-mono text-[#5F6368]">
                    Unit: Radiodiagnosis &amp; Interventional Radiology
                  </span>
                </div>

                {/* Post-Op Notes Structured Box */}
                <div className="border border-[#DADCE0] bg-[#F8F9FA] rounded-xl p-3 text-xs space-y-2">
                  <div className="flex items-center justify-between border-b border-[#E8EAED] pb-1.5">
                    <span className="font-bold text-[11px] text-[#1A73E8] uppercase tracking-wider flex items-center gap-1">
                      <Activity className="w-3.5 h-3.5 text-[#1A73E8]" />
                      Documented Cath-Lab Post-Operative Notes
                    </span>
                    <span className="text-[10px] text-[#5F6368]">
                      Operator: {selectedPatientId === "EX02" || selectedPatientId === "PT01" ? "Dr. Meenu Bagarhatta (Senior Professor)" : "Dr. Shashank Sharma (Professor)"}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1 text-[11px]">
                    <div className="space-y-1.5 border-r md:border-[#E8EAED] pr-2">
                      <p>
                        <strong className="text-[#202124]">Access Site Hemostasis:</strong>{" "}
                        <span className="text-[#3C4043]">
                          {selectedPatientId === "EX02" || selectedPatientId === "PT01"
                            ? "Right IJV access site sealed under ultrasound guidance. 10 minutes manual pressure; pressure dressing dry & intact. Zero hematoma."
                            : "Left GSV puncture site below knee. Manual pressure applied for 8 minutes; dry sterile dressing in situ. Zero hematoma or thrill."}
                        </span>
                      </p>
                      <p>
                        <strong className="text-[#202124]">Telemetry Vitals in PACU:</strong>{" "}
                        <span className="font-mono text-[#1A73E8]">
                          {selectedPatientId === "EX02" || selectedPatientId === "PT01"
                            ? "BP: 116/74 mmHg, HR: 76 bpm sinus, SpO2: 99%, RR: 16/min"
                            : "BP: 110/76 mmHg, HR: 68 bpm regular, SpO2: 100%, RR: 18/min"}
                        </span>
                      </p>
                      <p>
                        <strong className="text-[#202124]">Sheath Removal Time:</strong>{" "}
                        <span className="text-[#3C4043]">
                          {selectedPatientId === "EX02" || selectedPatientId === "PT01"
                            ? "14-08-2026 12:45 PM (Immediate post-biopsy check; Removed)"
                            : "14-06-2026 11:20 AM (Immediate post-duplex run; Removed)"}
                        </span>
                      </p>
                    </div>

                    <div className="space-y-1.5 pl-0 md:pl-1">
                      <p>
                        <strong className="text-[#202124]">Recovery Status:</strong>{" "}
                        <span className="text-[#3C4043]">
                          {selectedPatientId === "EX02" || selectedPatientId === "PT01"
                            ? "Conscious, oriented, pain score VAS 1/10. Supine flat bed rest for 4 hours completed. No peritoneal signs."
                            : "Conscious, oriented, fully ambulatory after 1 hour. No distal swelling or pain."}
                        </span>
                      </p>
                      <p>
                        <strong className="text-[#202124]">Distal Peripheral Pulses:</strong>{" "}
                        <span className="text-[#137333] font-semibold">
                          Strong (+++) - Bilaterally equal and palpable with normal capillary refill
                        </span>
                      </p>
                      <p>
                        <strong className="text-[#202124]">Immediate Complications:</strong>{" "}
                        <span className="text-[#137333] font-semibold">
                          Nil - Zero access site bleeding, zero hematoma, zero vasovagal response
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Previous Discharge Summary Excerpt */}
                <div className="p-2.5 bg-white rounded-lg border border-[#DADCE0] text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <strong className="text-[#202124] text-[11px] uppercase">
                      Previous Discharge Summary Excerpt &bull; Discharge Condition: Improved
                    </strong>
                    <button
                      type="button"
                      onClick={() => {
                        const prevSum = selectedPatientId === "EX02" || selectedPatientId === "PT01"
                          ? `PREVIOUS DISCHARGE SUMMARY (16-08-2026)
Hospital: SMS Super Speciality Hospital, Jaipur
Patient: ${summaryData.admissionDetails.patientName} | HID: ${summaryData.admissionDetails.hid}
Diagnosis: Budd-Chiari Syndrome with caudate hypertrophy and hepatic venous occlusion
Intervention: Diagnostic Hepatic Venography & TJLB
Advice on Discharge: Medical anticoagulation with Apixaban 5mg BD. Low salt diet. Elective DIPS planning.`
                          : `PREVIOUS DISCHARGE SUMMARY (15-06-2026)
Hospital: Sawai Man Singh Hospital, Jaipur
Patient: ${summaryData.admissionDetails.patientName} | HID: ${summaryData.admissionDetails.hid}
Diagnosis: Left Lower Limb Great Saphenous Incompetence with SFJ Reflux (CEAP C2)
Advice on Discharge: Class II graduated compression stockings. Avoid prolonged standing. Posted for elective endovascular glue embolization.`;
                        copyTextToClipboard(prevSum, "Previous Discharge Summary");
                      }}
                      className="text-[10px] text-[#1A73E8] font-semibold hover:underline cursor-pointer"
                    >
                      Copy Full Excerpt
                    </button>
                  </div>
                  <p className="text-[#5F6368] text-[11px] leading-relaxed">
                    {selectedPatientId === "EX02" || selectedPatientId === "PT01"
                      ? "Evaluated for refractory ascites. Triphasic imaging confirmed Budd-Chiari syndrome with diffuse hepatic venous outflow obstruction. Pre-procedure hepatic gradient: 22 mmHg. Cleared for elective decompressive shunt (DIPS) after medical optimization."
                      : "Patient presented with 8 months history of symptomatic varicosities. Venous Doppler confirmed isolated GSV reflux with competent deep venous system. Class II compression prescribed with planned daycare VenaSeal ablation."}
                  </p>
                </div>
              </div>
            </div>

            {/* Dynamic Prior Encounter 2 (OPD / Consultation) */}
            <div className="bg-white border border-[#DADCE0] rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F1F3F4] pb-2.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FEF7E0] text-[#B06000]">
                    OPD WORKUP &amp; PRE-PROCEDURAL CATH-LAB CLEARANCE
                  </span>
                  <span className="font-mono text-xs font-bold text-[#202124]">
                    OPD-SMS-IR-2026
                  </span>
                  <span className="text-[11px] text-[#5F6368]">
                    &bull; Date: 02-05-2026
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold text-[#5F6368] bg-[#F1F3F4] px-2 py-0.5 rounded">
                    Room 48 / IR Clinic
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-[#3C4043]">
                <p>
                  <strong className="text-[#202124]">Clinical Assessment:</strong>{" "}
                  Patient evaluated in Interventional Radiology OPD Unit I. Detailed Doppler mapping and biochemical coagulation workup verified (INR &lt; 1.2, Platelets &gt; 150k, Creatinine normal).
                </p>
                <p>
                  <strong className="text-[#202124]">Procedural Clearance Note:</strong>{" "}
                  Informed high-risk procedural consent documented. Pre-anesthesia check-up (PAC) cleared for local anesthesia with conscious sedation. Scheme pre-authorization (MAAY / RGHS) submitted and approved.
                </p>
                <p className="text-[11px] text-[#5F6368] pt-1 border-t border-[#F1F3F4]">
                  Consultant: <strong>Dr. Meenu Bagarhatta / Dr. Shashank Sharma</strong> &bull; Department of Radiodiagnosis &amp; Interventional Radiology, SMS Medical College Jaipur
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* VIEW F: AUTHENTIC SMS PATIENT DOSSIER ARCHIVE (1,057 CASES)          */}
      {/* ==================================================================== */}
      {activeTab === "archive" && (
        <PatientArchiveDossier
          onLoadIntoEditor={(archivedPt) => {
            setSummaryData((prev) => ({
              ...prev,
              admissionDetails: {
                ...prev.admissionDetails,
                hid: archivedPt.crNo || prev.admissionDetails.hid,
                admissionNo: archivedPt.admissionNo || archivedPt.crNo || `CR-${archivedPt.dsaNo}`,
                patientName: archivedPt.patientName,
                age: archivedPt.age ? String(archivedPt.age) : prev.admissionDetails.age,
                gender: archivedPt.gender === "Female" ? "F" : "M",
                dateOfAdmission: archivedPt.procedureDate || prev.admissionDetails.dateOfAdmission,
                dateOfDischarge: archivedPt.procedureDate || prev.admissionDetails.dateOfDischarge,
                patientCategory: archivedPt.scheme || prev.admissionDetails.patientCategory,
                wardBed: archivedPt.unitOrWard || prev.admissionDetails.wardBed,
              },
              caseSummary: {
                ...prev.caseSummary,
                diagnosis: archivedPt.procedureName,
                complaints: archivedPt.dischargeData?.chiefComplaints || `Presented for ${archivedPt.procedureName}`,
                caseHistory:
                  archivedPt.dischargeData?.caseHistory ||
                  `Patient evaluated and admitted under Interventional Radiology for ${archivedPt.procedureName} (DSA IR-${archivedPt.dsaNo}).`,
              },
              procedureDetails: [
                {
                  sNo: 1,
                  dateTime: archivedPt.procedureDate ? `${archivedPt.procedureDate} 10:00 AM` : "10:00 AM",
                  operationType: "Major",
                  surgicalProcedure: archivedPt.procedureName,
                  anaesthesiaType: "LOCAL",
                  procedureDetail:
                    archivedPt.dischargeData?.operativeSummary ||
                    archivedPt.operativeNoteData?.indication ||
                    `Interventional Radiology procedure: ${archivedPt.procedureName}. Technical success documented.`,
                  processDoneBy: archivedPt.operativeNoteData?.operators || "Dr. Alok Verma",
                },
              ],
              dischargeMedications: archivedPt.dischargeData?.medications?.length
                ? archivedPt.dischargeData.medications.map((m, idx) => ({
                    sNo: idx + 1,
                    medicine: m.medicine,
                    genericName: m.medicine,
                    dosePower: m.dosePower,
                    route: "ORAL",
                    frequency: (["BD", "OD", "TID", "QID", "SOS", "HS"].includes(m.frequency)
                      ? m.frequency
                      : "BD") as DischargeMedicationItem["frequency"],
                    days: m.days,
                    instructions: m.instructions,
                  }))
                : prev.dischargeMedications,
              dischargeDetails: {
                ...prev.dischargeDetails,
                approvedBy: "Dr. Alok Verma",
                assistantProfessor: "Dr. Shashank Sharma",
                dischargePreparedBy: archivedPt.operativeNoteData?.operators || "Dr. Neel Yadav",
                generalAdvise: archivedPt.dischargeData?.dischargeAdvice || prev.dischargeDetails.generalAdvise,
                followUp: archivedPt.dischargeData?.followUp || prev.dischargeDetails.followUp,
              },
            }));
            setActiveTab("editor");
            showNotification(
              `Loaded IR-${String(archivedPt.dsaNo).padStart(4, "0")} (${archivedPt.patientName}) into Editor!`
            );
          }}
        />
      )}

      {/* ==================================================================== */}
      {/* MODAL / DRAWER: ALL 1,120+ MASTER PROCEDURES CATALOG                 */}
      {/* ==================================================================== */}
      <MasterCatalogDrawer
        isOpen={masterCatalogOpen}
        onClose={() => setMasterCatalogOpen(false)}
        onSelectProcedure={handleSelectFromMasterCatalog}
      />

      {/* Footer Attribution */}
      <div className="text-center py-4 text-xs text-zinc-400 print:hidden select-none">
        Made by Dr. Neel Yadav &bull; Rajasthan IHMS e-Hospital Discharge Summary Generator
      </div>
    </div>
  );
}
