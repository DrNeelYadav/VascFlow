import {
  IhmsDischargeSummaryData,
  SUNIL_KUMAR_DISCHARGE,
  BUDD_CHIARI_DISCHARGE,
  DischargeMedicationItem,
} from './ihmsDischargeTemplates';
import { getNextValidWorkingAppointmentDate } from '../../lib/rajasthanHolidays2026';
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
} from './venousClinicalEngine';

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