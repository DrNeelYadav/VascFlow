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
} from "lucide-react";
import { ClinicalMetricsSuite } from "./ClinicalMetricsSuite";
import { MasterCatalogDrawer } from "./MasterCatalogDrawer";
import { SsoIhmsPrefill } from "./SsoIhmsPrefill";
import { MasterProcedure } from "../../lib/masterCatalog";
import { validateSchemePreSubmission, type SchemeValidationRequirement } from "@vascule/utils";

// ============================================================================
// SEED CRITERIA DEFINITIONS & TYPES
// ============================================================================

export type ProcedureCategory = "varicose_veins" | "varicocele" | "other_ir";

export interface VaricoseCriteria {
  laterality: "Left lower limb" | "Right lower limb" | "Bilateral lower limbs";
  modality: "VenaSeal" | "EVLT";
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
    // Determine CEAP Classification
    let ceapGrade = "C2";
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

    // List of active clinical findings
    const activeSigns: string[] = [];
    if (varicose.findings.varicoseVeins) activeSigns.push("dilated varicose veins");
    if (varicose.findings.achingPain) activeSigns.push("aching pain and heaviness");
    if (varicose.findings.edema) activeSigns.push("lower extremity swelling/edema");
    if (varicose.findings.hyperpigmentation)
      activeSigns.push("hyperpigmentation / stasis dermatitis");
    if (varicose.findings.coronaPhlebectatica)
      activeSigns.push("corona phlebectatica");
    if (varicose.findings.lipodermatosclerosis)
      activeSigns.push("lipodermatosclerosis");
    if (varicose.findings.nightCramps) activeSigns.push("nocturnal muscle cramps");
    if (varicose.findings.restlessLegs) activeSigns.push("restless legs sensation");
    if (varicose.findings.venousUlcer || varicose.ulcerSizeAndSite !== "None")
      activeSigns.push(`venous ulceration (${varicose.ulcerSizeAndSite})`);
    if (varicose.findings.thrombophlebitis)
      activeSigns.push("superficial thrombophlebitis");

    const signsList =
      activeSigns.length > 0 ? activeSigns.join(", ") : "visible varicose veins";

    // Diagnosis & ICD
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

    updated.caseSummary.diagnosis = `Varicose veins of ${varicose.laterality} with saphenofemoral junction (SFJ) reflux and chronic venous insufficiency (CEAP ${ceapGrade}, I83)`;

    // Complaints
    updated.caseSummary.complaints = `Prominent tortuous veins in ${varicose.laterality} with ${
      varicose.findings.achingPain ? "aching pain and heaviness, " : ""
    }${varicose.findings.edema ? "leg swelling, " : ""}for ${
      varicose.symptomDuration
    }.${
      varicose.itchingDuration !== "None"
        ? ` Itching present for ${varicose.itchingDuration}.`
        : ""
    }${
      varicose.ulcerSizeAndSite !== "None"
        ? ` Ulcer noted: ${varicose.ulcerSizeAndSite}.`
        : ""
    }`;

    // Detailed Case History
    updated.caseSummary.caseHistory = `Patient presented to the Department of Interventional Radiology with a ${
      varicose.symptomDuration
    } history of symptomatic varicose veins involving the ${
      varicose.laterality
    }. Documented clinical findings: ${signsList}. Associated itching duration: ${
      varicose.itchingDuration
    }. Ulcer status: ${
      varicose.ulcerSizeAndSite
    }. Family history of chronic venous disease: ${
      varicose.familyHistory
    }. High-resolution venous color duplex Doppler ultrasound revealed saphenofemoral junction (SFJ) incompetence with pathological retrograde reflux (> 0.5 sec) and great saphenous vein (GSV) dilatation (caliber 6.8–8.5 mm). Deep venous system (CFV, femoral, and popliteal veins) was widely patent with competent valves and no evidence of deep vein thrombosis (DVT). Evaluated as CEAP clinical class ${ceapGrade} and successfully treated with endovascular ${
      varicose.modality === "VenaSeal"
        ? "VenaSeal cyanoacrylate glue embolization"
        : "Endovenous Laser Ablation (EVLT)"
    }.`;

    updated.caseSummary.familyHistory = `Chronic venous insufficiency: ${varicose.familyHistory}.`;

    // Local Examination
    updated.systemicExam.localExamination = `${varicose.laterality}: Dilated, tortuous superficial varicosities along great saphenous distribution. ${
      varicose.findings.hyperpigmentation
        ? "Stasis hyperpigmentation and dermatitis noted around medial gaiter zone. "
        : ""
    }${
      varicose.findings.lipodermatosclerosis
        ? "Subcutaneous fibrosis / lipodermatosclerosis (inverted champagne bottle appearance) noted. "
        : ""
    }${
      varicose.findings.coronaPhlebectatica
        ? "Corona phlebectatica around ankle. "
        : ""
    }${varicose.findings.edema ? "Pitting pedal edema present. " : ""}${
      varicose.ulcerSizeAndSite !== "None"
        ? `Venous ulcer: ${varicose.ulcerSizeAndSite}; base clean with healthy granulation. `
        : ""
    }Trendelenburg test positive for SFJ incompetence; Perthes test negative (deep venous system patent). Peripheral arterial pulses (dorsalis pedis, posterior tibial) bilaterally palpable (Grade 2+). Puncture site clean and dry; Class II graduated compression applied.`;

    // Procedure Details
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
      varicose.modality === "VenaSeal"
        ? "GLUE EMBOLISATION BY VENASEAL (CYANOACRYLATE)"
        : "ENDOVENOUS LASER ABLATION (EVLT)";
    proc.operationType = "Minor";
    proc.anaesthesiaType = "LOCAL";

    if (varicose.modality === "VenaSeal") {
      proc.procedureDetail = `Under strict aseptic precautions and real-time ultrasound guidance. Patient positioned supine on cath-lab table. ${varicose.laterality} GSV cannulated at mid-calf level using 18G micro-puncture needle under sonographic vision. A 0.035" J-tip guidewire advanced to SFJ. 5F delivery sheath and catheter introduced; catheter tip locked exactly 5.0 cm caudal to the saphenofemoral junction (SFJ), verified on duplex ultrasound by direct visualization of superficial epigastric vein and common femoral vein (CFV). VenaSeal cyanoacrylate glue dispensed via precision dispensing gun: initial bolus of 0.10 mL followed by 3 minutes of firm manual compression over SFJ, followed by sequential injections of 0.09 mL every 3 cm along the GSV down to mid-calf with 30 seconds of compression per segment. Total 1.3 mL glue delivered. Sheath removed, hemostasis secured with manual pressure. Completion Doppler demonstrated complete occlusion of treated GSV segment with hyperechoic glue cast, zero flow/reflux, and widely patent common femoral vein (CFV). Sterile compression dressing applied.`;
    } else {
      proc.procedureDetail = `Under strict aseptic precautions and ultrasound guidance. Percutaneous access into ${varicose.laterality} great saphenous vein (GSV) obtained at mid-calf using 18G needle; 6F introducer sheath placed. 1470 nm radial laser fiber advanced through the sheath and tip positioned 2.0 cm distal to SFJ, verified on duplex ultrasound. Ultrasound-guided perivenous tumescent anesthesia (saline + lidocaine + bicarbonate) administered into perivenous fascial sheath along entire GSV segment, creating adequate thermal heat sink. Continuous laser firing performed at 7 W with controlled pull-back speed 1 mm/s (linear energy density ~60 J/cm). Post-ablation duplex confirmed non-compressible, occluded GSV with no residual flow and patent CFV. Puncture site dressed with Class II graduated compression.`;
    }

    updated.procedureDetails = [proc];

    // Medications
    const meds: DischargeMedicationItem[] = [
      {
        sNo: 1,
        medicine:
          "Micronized Purified Flavonoid Fraction (Daflon) Tab 500mg [505]",
        dosePower: "500mg",
        route: "ORAL",
        frequency: "BD",
        days: 30,
        instructions: "After meals (Venoactive tonic)",
      },
      {
        sNo: 2,
        medicine: "Paracetamol Tab 650mg [28]",
        dosePower: "650mg",
        route: "ORAL",
        frequency: "BD",
        days: 5,
        instructions: "Post meals SOS for discomfort",
      },
      {
        sNo: 3,
        medicine: "Pantoprazole Gastro-resistant Tab 40mg [142]",
        dosePower: "40mg",
        route: "ORAL",
        frequency: "OD",
        days: 7,
        instructions: "Empty stomach in morning",
      },
    ];

    if (
      varicose.ulcerSizeAndSite !== "None" ||
      varicose.findings.thrombophlebitis
    ) {
      meds.push({
        sNo: 4,
        medicine: "Amoxicillin and Potassium Clavulanate Tab 625mg [505]",
        dosePower: "625mg",
        route: "ORAL",
        frequency: "BD",
        days: 5,
        instructions: "Post meals (Ulcer / wound prophylaxis)",
      });
    }

    if (varicose.itchingDuration !== "None") {
      meds.push({
        sNo: meds.length + 1,
        medicine: "Levocetirizine Tablet 5mg [659]",
        dosePower: "5mg",
        route: "ORAL",
        frequency: "HS",
        days: 10,
        instructions: "At bedtime for itching",
      });
    }

    meds.forEach((m, i) => (m.sNo = i + 1));
    updated.dischargeMedications = meds;

    // Discharge Advice
    updated.dischargeDetails.generalAdvise =
      "1. Wear Class II graduated compression stockings (23-32 mmHg) during daytime for 3-4 weeks.\n2. Normal walking and early ambulation encouraged immediately; avoid continuous motionless standing or sitting > 1 hour.\n3. Elevate legs above heart level on 2 pillows while resting or sleeping.\n4. Keep puncture site dry and clean for 48 hours. Remove outer dressing after 48 hours.\n5. Avoid strenuous gym workouts, heavy weightlifting (> 15 kg), or hot tub baths for 2 weeks.\n6. Red Flag Emergency Warnings: Sudden onset severe calf pain or calf swelling, chest pain, shortness of breath, or active bleeding (report immediately to SMS Hospital Emergency / IR Dept).";
    updated.dischargeDetails.conditionOnDischarge = "Improved";
    updated.dischargeDetails.followUp =
      "Follow up in IR OPD Room 48 / Old Gastro Ward (SMS Hospital, Jaipur) after 7-10 days with duplex color Doppler ultrasound scan.";
  } else if (category === "varicocele") {
    // Varicocele Synthesis
    updated.caseSummary.icdDiagnosis =
      "(S) Varicocele of spermatic cord (I86.1)\n(S) Male pelvic congestion / scrotal varices";
    updated.caseSummary.diagnosis = `${varicocele.side} Varicocele (${varicocele.clinicalGrade}) with ${varicocele.indication.toLowerCase()} (I86.1)`;

    updated.caseSummary.complaints = `Dull dragging scrotal aching pain and heaviness on ${varicocele.side} side for ${varicocele.duration}, exacerbated on prolonged standing. Primary indication: ${varicocele.indication}.`;

    updated.caseSummary.caseHistory = `Patient presented to the Department of Interventional Radiology with a ${varicocele.duration} history of ${varicocele.side.toLowerCase()}-sided scrotal dragging sensation, discomfort, and swelling. Physical examination confirmed ${varicocele.clinicalGrade}. Primary clinical indication for intervention: ${varicocele.indication}. Scrotal color duplex Doppler ultrasound revealed dilated, tortuous pampiniform plexus veins measuring > 3.8 mm at rest, with marked continuous retrograde venous reflux lasting > 3.5 seconds on Valsalva maneuver. Bilateral testicular volume preserved with no testicular mass. The patient chose catheter-directed transvenous embolization over surgical ligation for faster recovery and reduced recurrence.`;

    updated.systemicExam.localExamination = `Local Examination: ${varicocele.side} hemiscrotum reveals ${varicocele.clinicalGrade.toLowerCase()}; soft, non-tender, characteristic 'bag-of-worms' feel. Venous distension accentuates during upright posture and Valsalva maneuver. Bilateral testes descended, normal in volume and texture. Right common femoral/basilic access site clean and dry; peripheral pulses palpable; zero hematoma.`;

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
      "PERCUTANEOUS TRANSVENOUS VARICOCELE EMBOLIZATION";
    proc.operationType = "Minor";
    proc.anaesthesiaType = "LOCAL";
    proc.procedureDetail = `Under local anesthesia (2% Lignocaine) and fluoroscopic guidance with full aseptic precautions. Right common femoral vein (RCFV) cannulated using 18G needle; 6F vascular sheath placed. A 5F Cobra (C2) catheter and 0.035" hydrophilic Terumo Glidewire advanced selectively into the ${varicocele.side.toLowerCase()} renal vein. Selective retrograde venogram demonstrated competent renal vein with massive retrograde reflux into the internal spermatic vein (ISV) with multiple parallel collateral branches. Microcatheter advanced coaxially into the distal ISV near the level of the deep inguinal ring. Transvenous embolization carried out using sandwich technique: deployment of pushable/detachable platinum-tungsten microcoils (0.035" and 0.018") combined with 3% Sodium Tetradecyl Sulfate (STS) foam sclerosant, extending proximally to just below the renal vein confluence to occlude all collateral bypass channels. Post-embolization completion venogram during Valsalva confirmed total occlusion of internal spermatic vein and all collaterals with zero retrograde flow. Sheath removed, manual compression applied for 10 minutes; clean puncture site hemostasis confirmed.`;

    updated.procedureDetails = [proc];

    updated.dischargeMedications = [
      {
        sNo: 1,
        medicine: "Cefixime Tab IP 200mg [112]",
        dosePower: "200mg",
        route: "ORAL",
        frequency: "BD",
        days: 5,
        instructions: "Post meals",
      },
      {
        sNo: 2,
        medicine: "Aceclofenac 100mg + Paracetamol 325mg Tab",
        dosePower: "1 Tab",
        route: "ORAL",
        frequency: "BD",
        days: 3,
        instructions: "Post meals SOS for groin/scrotal discomfort",
      },
      {
        sNo: 3,
        medicine: "Pantoprazole Gastro-resistant Tab 40mg [142]",
        dosePower: "40mg",
        route: "ORAL",
        frequency: "OD",
        days: 5,
        instructions: "Empty stomach in morning",
      },
    ];

    updated.dischargeDetails.generalAdvise =
      "1. Wear firm scrotal support (athletic supporter / tight briefs) continuously for 7-10 days.\n2. Avoid heavy weight lifting (> 10 kg), strenuous gym workouts, running, and bicycling for 2 weeks.\n3. Keep groin puncture site clean and dry for 48 hours.\n4. Mild dull scrotal ache or slight cord induration is normal post-embolization and responds to prescribed analgesics.\n5. Abstain from sexual intercourse or ejaculation for 5-7 days.\n6. Report immediately to IR emergency if severe acute scrotal swelling, high fever (> 100.4°F), or active groin bleeding develops.";
    updated.dischargeDetails.conditionOnDischarge = "Improved";
    updated.dischargeDetails.followUp =
      "Follow up in IR OPD Room 48 after 2 weeks for puncture site check. Repeat semen analysis and scrotal Doppler after 3 months.";
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
          medicine: "Tab Apixaban 5mg",
          dosePower: "5mg",
          route: "ORAL",
          frequency: "BD",
          days: 30,
          instructions: "Strict anticoagulation for stent patency",
        },
        {
          sNo: 2,
          medicine: "Tab Torsemide 20mg [445]",
          dosePower: "20mg",
          route: "ORAL",
          frequency: "OD",
          days: 14,
          instructions: "Morning post meals",
        },
        {
          sNo: 3,
          medicine: "Tab Spironolactone 50mg [448]",
          dosePower: "50mg",
          route: "ORAL",
          frequency: "OD",
          days: 14,
          instructions: "With food",
        },
        {
          sNo: 4,
          medicine: "Syp Lactulose 30ml [512]",
          dosePower: "30ml",
          route: "ORAL",
          frequency: "HS",
          days: 14,
          instructions: "To maintain 2-3 soft stools/day",
        },
        {
          sNo: 5,
          medicine: "Cap Pantoprazole 40mg [142]",
          dosePower: "40mg",
          route: "ORAL",
          frequency: "OD",
          days: 14,
          instructions: "Before breakfast",
        },
      ];

      updated.dischargeDetails.generalAdvise = `1. High protein, low salt diet (< 2g sodium/day). Daily morning weight monitoring.\n2. Strict adherence to Apixaban anticoagulation.\n3. Watch for hepatic encephalopathy signs (confusion, lethargy, inverted sleep cycles).\n4. Puncture site status: ${otherIr.punctureSiteStatus}.\n5. Analgesia status: ${otherIr.analgesia}.`;
      updated.dischargeDetails.followUp = otherIr.followUpAdvice;
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
      proc.procedureDetail = `Right common femoral artery access obtained; 5F vascular sheath placed. 5F Mikaelsson catheter used to selectively cannulate the right intercostobronchial trunk. High-resolution DSA confirmed tortuous hypertrophied bronchial branches with parenchymal blush and hypervascular shunting. Superselective microcatheterization achieved with 2.4F Progreat microcatheter. Embolization performed with 355-500 um PVA particles followed by 0.018" microcoils. Completion angiogram demonstrated complete obliteration of abnormal vessels. Spinal cord artery (anterior spinal artery / artery of Adamkiewicz) carefully identified and protected; zero non-target embolization. Technical result: ${otherIr.technicalSuccess}. Groin puncture site: ${otherIr.punctureSiteStatus}.`;
      updated.procedureDetails = [proc];

      updated.systemicExam.localExamination = `Local Examination: Bilateral chest air entry present; right groin puncture site: ${otherIr.punctureSiteStatus}. Analgesia: ${otherIr.analgesia}. Distal pedal pulses intact.`;

      updated.dischargeMedications = [
        {
          sNo: 1,
          medicine: "Tab Tranexamic Acid 500mg",
          dosePower: "500mg",
          route: "ORAL",
          frequency: "TID",
          days: 5,
          instructions: "Post meals",
        },
        {
          sNo: 2,
          medicine: "Cefixime Tab IP 200mg [112]",
          dosePower: "200mg",
          route: "ORAL",
          frequency: "BD",
          days: 5,
          instructions: "Post meals",
        },
        {
          sNo: 3,
          medicine: "Cap Pantoprazole 40mg [142]",
          dosePower: "40mg",
          route: "ORAL",
          frequency: "OD",
          days: 7,
          instructions: "Before breakfast",
        },
        {
          sNo: 4,
          medicine: "Syp Dextromethorphan (Antitussive) 10ml",
          dosePower: "10ml",
          route: "ORAL",
          frequency: "SOS",
          days: 5,
          instructions: "For cough suppression",
        },
      ];

      updated.dischargeDetails.generalAdvise = `1. Avoid forceful coughing, throat clearing, or straining.\n2. Bed rest for 48 hours.\n3. Puncture site care: ${otherIr.punctureSiteStatus}.\n4. Immediate report to hospital emergency if fresh hemoptysis recurs.`;
      updated.dischargeDetails.followUp = otherIr.followUpAdvice;
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
          medicine: "Tab Cefuroxime Axetil 500mg [505]",
          dosePower: "500mg",
          route: "ORAL",
          frequency: "BD",
          days: 5,
          instructions: "Post meals",
        },
        {
          sNo: 2,
          medicine: "Tab Ursodeoxycholic Acid 300mg",
          dosePower: "300mg",
          route: "ORAL",
          frequency: "BD",
          days: 30,
          instructions: "With meals",
        },
        {
          sNo: 3,
          medicine: "Cap Pantoprazole 40mg [142]",
          dosePower: "40mg",
          route: "ORAL",
          frequency: "OD",
          days: 7,
          instructions: "Before breakfast",
        },
      ];

      updated.dischargeDetails.generalAdvise = `1. Empty and measure biliary drainage bag output twice daily in mL.\n2. Keep puncture site dressing dry and intact; flush catheter with 5-10 mL sterile normal saline once daily as instructed.\n3. Do not pull or kink the external tubing.\n4. Puncture site care: ${otherIr.punctureSiteStatus}.\n5. Immediate emergency visit if catheter dislodges, drain output suddenly stops, or high fever with chills occurs.`;
      updated.dischargeDetails.followUp = otherIr.followUpAdvice;
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
        { sNo: 1, medicine: "Tab Cefuroxime Axetil 500mg [505]", dosePower: "500mg", route: "ORAL", frequency: "BD", days: 5, instructions: "Post meals" },
        { sNo: 2, medicine: "Tab Ursodeoxycholic Acid 300mg", dosePower: "300mg", route: "ORAL", frequency: "BD", days: 30, instructions: "With food" },
        { sNo: 3, medicine: "Cap Pantoprazole 40mg [142]", dosePower: "40mg", route: "ORAL", frequency: "OD", days: 10, instructions: "Before breakfast" },
      ];
      updated.dischargeDetails.generalAdvise = "1. Maintain adequate oral hydration (2.5 - 3 L/day).\n2. Follow low-fat diet.\n3. Keep puncture site dry for 48 hours.\n4. Report to hospital emergency immediately if high fever with rigors (cholangitis) or recurrence of jaundice occurs.";
      updated.dischargeDetails.followUp = "Review in IR OPD Room 48 / Gastro Unit after 2 weeks with repeat Liver Function Test (LFT).";
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
        { sNo: 1, medicine: "Tab Metronidazole 400mg [140]", dosePower: "400mg", route: "ORAL", frequency: "TID", days: 10, instructions: "After meals" },
        { sNo: 2, medicine: "Tab Amoxicillin + Clavulanate 625mg [505]", dosePower: "625mg", route: "ORAL", frequency: "BD", days: 7, instructions: "Post meals" },
        { sNo: 3, medicine: "Tab Paracetamol 650mg [28]", dosePower: "650mg", route: "ORAL", frequency: "TID", days: 5, instructions: "For fever/pain" },
      ];
      updated.dischargeDetails.generalAdvise = "1. Record drain volume daily in mL at 8:00 AM and 8:00 PM.\n2. Keep catheter exit site clean and dry; do not pull or disconnect tubing.\n3. High-protein diet.\n4. Emergency recall if drain stops abruptly while cavity is full, or if acute abdominal pain/guarding occurs.";
      updated.dischargeDetails.followUp = "Review in IR OPD Room 48 after 5 days for drain volume check and ultrasound cavity assessment.";
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
      proc.procedureDetail = `Right common femoral artery access obtained with 5F vascular sheath under local anesthesia. 5F Cobra/Simmons catheter engaged celiac axis and selective splenic arteriogram obtained, demonstrating massive hypervascular splenic parenchyma with tortuous branches. 2.4F microcatheter advanced distally beyond pancreatic and gastric branches into mid/lower polar splenic branches. Embolization performed with 500-700 um PVA particles mixed with non-ionic contrast and antibiotic prophylaxis (Cefazolin) slurry. Completion run verified ~60% parenchymal devascularization with excellent preservation of upper polar splenic perfusion. Sheath removed, manual compression applied for 15 minutes; puncture site intact. Technical result: ${otherIr.technicalSuccess}.`;
      updated.procedureDetails = [proc];

      updated.systemicExam.localExamination = `Local Examination: Right groin puncture site: ${otherIr.punctureSiteStatus}. Spleen palpable 5 cm below costal margin, mild left hypochondrial tenderness (post-embolization response). Analgesia: ${otherIr.analgesia}. Distal pulses intact.`;
      updated.dischargeMedications = [
        { sNo: 1, medicine: "Tab Cefixime 200mg [112]", dosePower: "200mg", route: "ORAL", frequency: "BD", days: 7, instructions: "Post meals" },
        { sNo: 2, medicine: "Tab Tramadol 37.5mg + Paracetamol 325mg", dosePower: "1 Tab", route: "ORAL", frequency: "BD", days: 5, instructions: "Post meals for post-embolization pain" },
        { sNo: 3, medicine: "Cap Pantoprazole 40mg [142]", dosePower: "40mg", route: "ORAL", frequency: "OD", days: 7, instructions: "Before breakfast" },
      ];
      updated.dischargeDetails.generalAdvise = "1. Strict bed rest for 48 hours; avoid abdominal pressure or heavy lifting.\n2. Low-grade fever and left flank pain are expected post-embolization syndrome symptoms.\n3. Puncture site care: keep dry for 48 hours.\n4. Immediate hospital visit if severe breathlessness, left shoulder tip pain, or temperature > 102°F occurs.";
      updated.dischargeDetails.followUp = "Review in IR OPD Room 48 with repeat CBC (Platelet count) and ultrasound Doppler after 10 days.";
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
        { sNo: 1, medicine: "Tab Paracetamol 500mg [28]", dosePower: "500mg", route: "ORAL", frequency: "SOS", days: 3, instructions: "For puncture site ache" },
        { sNo: 2, medicine: "Mupirocin 2% Ointment", dosePower: "Local", route: "TOPICAL", frequency: "BD", days: 5, instructions: "Apply locally over puncture site" },
      ];
      updated.dischargeDetails.generalAdvise = "1. Avoid taking blood pressure, blood draws, or wearing tight wristbands/jewelry on the fistula arm.\n2. Palpate the thrill twice daily (morning & night).\n3. Hemodialysis permitted from existing access after 24 hours.\n4. Report to emergency immediately if the thrill or murmur disappears.";
      updated.dischargeDetails.followUp = "Review in Dialysis Access Clinic / IR OPD Room 48 in 2 weeks.";
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
        processDoneBy: "Dr Meenu Bagarhatta",
      };
      proc.surgicalProcedure = "CONVENTIONAL TRANSARTERIAL CHEMOEMBOLIZATION (cTACE)";
      proc.operationType = "Major";
      proc.procedureDetail = `Right common femoral artery accessed with 5F sheath under local anesthesia. Celiac and common hepatic angiograms defined arterial anatomy and confirmed tumor blush supplied by a branch of the right hepatic artery. 2.0F microcatheter advanced superselectively into the tumor-feeding branch. Emulsion of Doxorubicin (30 mg) with 8 mL Lipiodol infused under continuous fluoroscopy until complete tumor saturation and vascular stasis achieved, followed by Gelfoam slurry particle embolization. Completion angiogram confirmed dense Lipiodol retention throughout tumor and cessation of arterial blush. Sheath removed, hemostasis achieved. Technical result: ${otherIr.technicalSuccess}.`;
      updated.procedureDetails = [proc];

      updated.systemicExam.localExamination = `Local Examination: Right groin puncture site: ${otherIr.punctureSiteStatus}. Abdomen soft, mild tenderness over right lobe. Analgesia: ${otherIr.analgesia}. Distal pulses intact.`;
      updated.dischargeMedications = [
        { sNo: 1, medicine: "Tab Ondansetron 4mg [167]", dosePower: "4mg", route: "ORAL", frequency: "BD", days: 3, instructions: "Before food for nausea" },
        { sNo: 2, medicine: "Cap Pantoprazole 40mg [142]", dosePower: "40mg", route: "ORAL", frequency: "OD", days: 14, instructions: "Before breakfast" },
        { sNo: 3, medicine: "Tab Cefixime 200mg [112]", dosePower: "200mg", route: "ORAL", frequency: "BD", days: 5, instructions: "Post meals" },
        { sNo: 4, medicine: "Tab Paracetamol 650mg [28]", dosePower: "650mg", route: "ORAL", frequency: "TID", days: 5, instructions: "For post-embolization fever/ache" },
      ];
      updated.dischargeDetails.generalAdvise = "1. Adequate oral fluids (2-3 L/day) for contrast and chemotherapy clearance.\n2. Light, non-oily diet.\n3. Puncture site care: keep dry for 48 hours.\n4. Report to emergency if persistent intractable vomiting, severe abdominal pain, or jaundice occurs.";
      updated.dischargeDetails.followUp = "Review in IR OPD Room 48 / Liver Clinic in 4 weeks with dynamic multiphasic CECT and serum AFP.";
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
          medicine: "Paracetamol Tab 650mg [28]",
          dosePower: "650mg",
          route: "ORAL",
          frequency: "SOS",
          days: 3,
          instructions: "For puncture site ache",
        },
        {
          sNo: 2,
          medicine: "Cap Pantoprazole 40mg [142]",
          dosePower: "40mg",
          route: "ORAL",
          frequency: "OD",
          days: 5,
          instructions: "Before breakfast",
        },
      ];

      updated.dischargeDetails.generalAdvise = `1. Rest quietly at home for 24 hours; avoid lifting heavy weights or strenuous work for 48 hours.\n2. Keep waterproof dressing dry for 24 hours.\n3. Puncture site care: ${otherIr.punctureSiteStatus}.\n4. Report immediately if dizziness, shoulder tip pain, severe right upper abdominal pain, or black stools occur.`;
      updated.dischargeDetails.followUp = otherIr.followUpAdvice;
    }
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
  const [activeTab, setActiveTab] = useState<"preview" | "editor" | "analytics" | "sso">("preview");
  const [masterCatalogOpen, setMasterCatalogOpen] = useState(false);
  const [copyToast, setCopyToast] = useState<string | null>(null);

  // Procedure Category Selector
  const [procedureCategory, setProcedureCategory] =
    useState<ProcedureCategory>("varicose_veins");

  // Varicose Veins Criteria State
  const [varicoseCriteria, setVaricoseCriteria] = useState<VaricoseCriteria>({
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

  // Rajasthan Government Scheme Pre-Submission Audit Validation
  const schemeAudit = useMemo(() => {
    return validateSchemePreSubmission({
      scheme: summaryData.admissionDetails?.patientCategory || "MAAY",
      packageCode: summaryData.caseSummary?.diagnosis || "IR-PROC",
      preAuthNumber: summaryData.admissionDetails?.admissionNo || "SMS-MAAY-2026-904",
      preProcedureImagingTimestamp: summaryData.admissionDetails?.dateOfAdmission,
      postProcedureFluoroRecord: true,
      implantInvoice: true,
      requiresImplant: true,
    });
  }, [summaryData]);

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
    runAutoSynthesis(
      procedureCategory,
      varicoseCriteria,
      varicoceleCriteria,
      otherIrCriteria,
      summaryData
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [procedureCategory, varicoseCriteria, varicoceleCriteria, otherIrCriteria]);

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
Follow Up: ${summaryData.dischargeDetails.followUp}
Approved by: ${summaryData.dischargeDetails.approvedBy} | Prepared by: ${
      summaryData.dischargeDetails.dischargePreparedBy
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

  // Visual exhibit rendering
  const renderAttachmentVisual = (att: ProceduralImageAttachment) => {
    if (
      att.dataUrl &&
      (att.dataUrl.startsWith("data:image/") ||
        att.dataUrl.startsWith("http") ||
        att.dataUrl.startsWith("blob:"))
    ) {
      return (
        <img
          src={att.dataUrl}
          alt={att.title}
          className="w-full max-h-52 object-contain rounded bg-black border border-[#3C4043]"
        />
      );
    }

    if (att.modality === "XA") {
      return (
        <svg
          viewBox="0 0 400 220"
          className="w-full h-44 bg-[#050811] rounded select-none font-mono text-[9px]"
        >
          <rect width="400" height="220" fill="#050811" />
          <circle
            cx="200"
            cy="110"
            r="95"
            fill="none"
            stroke="#334155"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.4"
          />
          <path
            d="M 200 210 Q 202 160 198 120 Q 195 90 215 60"
            fill="none"
            stroke="#F8FAFC"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M 198 120 Q 160 110 135 85 Q 115 65 90 50"
            fill="none"
            stroke="#E2E8F0"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M 198 120 Q 240 115 270 100 Q 295 85 320 65"
            fill="none"
            stroke="#E2E8F0"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <text x="12" y="18" fill="#4ADE80" fontWeight="bold">
            SMS JAIPUR • ANGIOSUITE 1
          </text>
          <text x="12" y="30" fill="#94A3B8">
            XA FLUOROSCOPY / DSA
          </text>
          <text x="388" y="18" fill="#FBBF24" textAnchor="end">
            FRAME VERIFIED
          </text>
          <text x="12" y="208" fill="#94A3B8">
            DAP: 16.4 Gy·cm²
          </text>
          <text x="388" y="208" fill="#4ADE80" textAnchor="end">
            TECHNICAL SUCCESS
          </text>
        </svg>
      );
    }

    return (
      <svg
        viewBox="0 0 400 220"
        className="w-full h-44 bg-[#020617] rounded select-none font-mono text-[9px]"
      >
        <rect width="400" height="220" fill="#020617" />
        <path
          d="M 40 90 Q 200 85 360 95"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="2.5"
        />
        <path
          d="M 40 135 Q 200 130 360 140"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="2.5"
        />
        <rect
          x="140"
          y="75"
          width="130"
          height="70"
          fill="none"
          stroke="#EAB308"
          strokeWidth="1"
          strokeDasharray="4 2"
        />
        <path
          d="M 142 95 Q 200 92 268 100 L 268 128 Q 200 122 142 130 Z"
          fill="#DC2626"
          opacity="0.85"
        />
        <text x="12" y="18" fill="#FACC15" fontWeight="bold">
          SMS HOSPITAL • USG DOPPLER
        </text>
        <text x="12" y="30" fill="#94A3B8">
          LINEAR COLOR DOPPLER
        </text>
        <text x="388" y="18" fill="#4ADE80" textAnchor="end">
          PRF: 2.5 kHz
        </text>
        <text x="200" y="208" fill="#FACC15" textAnchor="middle">
          NON-COMPRESSIBLE CAST CONFIRMED
        </text>
        <text x="388" y="208" fill="#4ADE80" textAnchor="end">
          PATENT DEEP SYSTEM
        </text>
      </svg>
    );
  };

  return (
    <div className="space-y-4 max-w-6xl mx-auto pb-16 print:p-0 print:m-0 print:max-w-none">
      {/* Toast Notification */}
      {copyToast && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-xl bg-[#1E8E3E] text-white text-xs font-semibold shadow-lg flex items-center gap-2 animate-bounce print:hidden">
          <CheckCircle2 className="w-4 h-4" />
          <span>{copyToast}</span>
        </div>
      )}

      {/* Top Header & Fast Action Bar */}
      <div className="bg-white border border-[#DADCE0] rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 print:hidden">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E8F0FE] text-[#1A73E8]">
              IHMS e-Hospital Studio
            </span>
            <h1 className="text-lg font-bold text-[#202124]">
              Interactive Discharge Summary Generator
            </h1>
          </div>
          <p className="text-xs text-[#5F6368] mt-0.5">
            Sawai Man Singh Hospital, Jaipur • Department of Interventional
            Radiology &bull; Instant Tick-Box Seed Criteria &amp; 1-Click Portal Copiers
          </p>
        </div>

        {/* Global Action Copiers & Print */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleCopyFullIhms}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] text-white text-xs font-semibold transition-all shadow-xs cursor-pointer active:scale-95"
            title="Copy entire formatted discharge summary for Rajasthan IHMS portal"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>Copy for IHMS Portal</span>
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#DADCE0] bg-white text-[#3C4043] hover:bg-[#F1F3F4] text-xs font-semibold transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-[#5F6368]" />
            <span>Print Official A4</span>
          </button>
        </div>
      </div>

      {/* Prefilled SSO Dataset for Rajasthan IHMS / e-Hospital Portal */}
      <div className="bg-[#F8F9FA] border border-[#DADCE0] rounded-xl p-2.5 flex items-center gap-2 overflow-x-auto print:hidden">
        <span className="text-[11px] font-bold text-[#5F6368] whitespace-nowrap pl-1 flex items-center gap-1">
          <Copy className="w-3 h-3 text-[#1A73E8]" /> Prefilled SSO Dataset:
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
      <div className="bg-white border border-[#DADCE0] rounded-2xl p-3 sm:p-4 shadow-xs space-y-2.5 print:hidden">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="text-xs font-bold text-[#3C4043] flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-[#1A73E8]" />
            Select Patient or Enter Procedure Details:
          </span>
          <div className="flex items-center rounded-lg bg-[#F1F3F4] p-0.5 text-xs font-semibold">
            <button
              onClick={() => setActiveTab("preview")}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === "preview"
                  ? "bg-white text-[#1A73E8] shadow-xs"
                  : "text-[#5F6368] hover:text-[#202124]"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Official Print Preview</span>
            </button>
            <button
              onClick={() => setActiveTab("editor")}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === "editor"
                  ? "bg-white text-[#1A73E8] shadow-xs"
                  : "text-[#5F6368] hover:text-[#202124]"
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Fine-Tune Fields</span>
            </button>
            <button
              onClick={() => setActiveTab("analytics")}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === "analytics"
                  ? "bg-white text-[#1A73E8] shadow-xs"
                  : "text-[#5F6368] hover:text-[#202124]"
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5 text-[#1A73E8]" />
              <span>&gt;10 Charts &amp; Metrics</span>
            </button>
            <button
              onClick={() => setActiveTab("sso")}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === "sso"
                  ? "bg-white text-[#1A73E8] shadow-xs"
                  : "text-[#5F6368] hover:text-[#202124]"
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-[#137333]" />
              <span>SSO / IHMS Ingestion</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {/* Default Preset Patients */}
          <button
            onClick={() => handleSelectPatient("EX01")}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
              selectedPatientId === "EX01"
                ? "bg-[#1A73E8] text-white shadow-xs"
                : "bg-[#F8F9FA] text-[#3C4043] border border-[#DADCE0] hover:bg-[#FFFFFF]"
            }`}
          >
            <span>Varicose Veins (VenaSeal)</span>
          </button>

          <button
            onClick={() => handleSelectPatient("EX02")}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
              selectedPatientId === "EX02"
                ? "bg-[#1A73E8] text-white shadow-xs"
                : "bg-[#F8F9FA] text-[#3C4043] border border-[#DADCE0] hover:bg-[#FFFFFF]"
            }`}
          >
            <span>Budd-Chiari (DIPS / TIPS)</span>
          </button>

          {/* Active Store Patients */}
          {patients.map((pt) => (
            <button
              key={pt.id}
              onClick={() => handleSelectPatient(pt.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1 ${
                selectedPatientId === pt.id
                  ? "bg-[#1A73E8] text-white shadow-xs"
                  : "bg-[#FFFFFF] text-[#3C4043] border border-[#DADCE0] hover:bg-[#F8F9FA]"
              }`}
            >
              <span>{pt.name}</span>
              <span className="text-[10px] text-[#80868B]">
                ({pt.procedure.slice(0, 16)})
              </span>
            </button>
          ))}

          {/* Custom New Patient / Procedure */}
          <button
            onClick={() => handleSelectPatient(`CUSTOM-${Date.now()}`)}
            className="px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1 border border-dashed border-[#1A73E8] text-[#1A73E8] hover:bg-[#E8F0FE]"
          >
            <Plus className="w-3 h-3" />
            <span>+ Enter Procedure / New Patient</span>
          </button>
        </div>

        {/* Scheme Pre-Submission Audit Card */}
        <div className="pt-2.5 border-t border-[#F1F3F4] flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <ShieldCheck className="w-4 h-4 text-[#1A73E8]" />
            <span className="text-xs font-bold text-[#202124]">
              Government Scheme Pre-Submission Audit:
            </span>
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
              {summaryData.admissionDetails?.patientCategory || "MAAY"}
            </span>
            <span
              className={`text-xs font-bold font-mono px-2 py-0.5 rounded border ${
                schemeAudit.isCompliant
                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                  : "bg-amber-50 text-amber-800 border-amber-200"
              }`}
            >
              {schemeAudit.isCompliant ? "✓ Pre-Auth Ready (100%)" : `⚠ Audit Check (${schemeAudit.readinessScore}%)`}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[11px]">
            {schemeAudit.requirements.map((req: SchemeValidationRequirement) => (
              <span
                key={req.id}
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded border font-medium ${
                  req.satisfied
                    ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                    : "bg-amber-50 text-amber-800 border-amber-200"
                }`}
                title={req.detail}
              >
                {req.satisfied ? (
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                ) : (
                  <AlertCircle className="w-3 h-3 text-amber-600" />
                )}
                <span>{req.label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* INTERACTIVE SEED CRITERIA SELECTOR (TICK BOXES & DROPDOWNS)         */}
      {/* ==================================================================== */}
      <div className="bg-white border-2 border-[#1A73E8]/30 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 print:hidden">
        {/* Category Selector Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F1F3F4] pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1A73E8] animate-ping" />
              <h2 className="text-xs font-black uppercase tracking-wider text-[#1A73E8] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#1A73E8]" />
                Interactive Seed Criteria Selector
              </h2>
            </div>
            <p className="text-[11px] text-[#5F6368] mt-0.5">
              Select findings and procedural parameters below to auto-synthesize
              the clinical narrative, operative notes, medications, and advice.
            </p>
          </div>

          <div className="flex items-center gap-1.5 bg-[#F8F9FA] p-1 rounded-xl border border-[#DADCE0]">
            <button
              onClick={() => setProcedureCategory("varicose_veins")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                procedureCategory === "varicose_veins"
                  ? "bg-[#1A73E8] text-white shadow-xs"
                  : "text-[#5F6368] hover:text-[#202124]"
              }`}
            >
              Varicose Veins (VenaSeal / EVLT)
            </button>
            <button
              onClick={() => setProcedureCategory("varicocele")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                procedureCategory === "varicocele"
                  ? "bg-[#1A73E8] text-white shadow-xs"
                  : "text-[#5F6368] hover:text-[#202124]"
              }`}
            >
              Varicocele Embolization
            </button>
            <button
              onClick={() => setProcedureCategory("other_ir")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                procedureCategory === "other_ir"
                  ? "bg-[#1A73E8] text-white shadow-xs"
                  : "text-[#5F6368] hover:text-[#202124]"
              }`}
            >
              Other Common IR (TIPS, BAE, PTBD, PCD, SAE, TACE)
            </button>
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
        {procedureCategory === "varicose_veins" && (
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
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setVaricoseCriteria({
                        ...varicoseCriteria,
                        modality: "VenaSeal",
                      })
                    }
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                      varicoseCriteria.modality === "VenaSeal"
                        ? "bg-[#1A73E8] text-white border-[#1A73E8]"
                        : "bg-white text-[#3C4043] border-[#DADCE0] hover:bg-[#F1F3F4]"
                    }`}
                  >
                    VenaSeal Glue
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setVaricoseCriteria({
                        ...varicoseCriteria,
                        modality: "EVLT",
                      })
                    }
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                      varicoseCriteria.modality === "EVLT"
                        ? "bg-[#1A73E8] text-white border-[#1A73E8]"
                        : "bg-white text-[#3C4043] border-[#DADCE0] hover:bg-[#F1F3F4]"
                    }`}
                  >
                    EVLT (Laser)
                  </button>
                </div>
              </div>
            </div>

            {/* 10 Clinical Findings Checkboxes */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#202124] flex items-center gap-1">
                  <span>Clinical Findings &amp; Symptoms (Tick to Include):</span>
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
                    Not Evaluated / Clear All
                  </button>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#E8F0FE] text-[#1A73E8] font-bold">
                    {
                      Object.values(varicoseCriteria.findings).filter(Boolean)
                        .length
                    }{" "}
                    Selected
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                {[
                  {
                    key: "varicoseVeins",
                    label: "Varicose veins",
                    ceap: "C2",
                  },
                  {
                    key: "venousUlcer",
                    label: "Venous ulcer",
                    ceap: "C5/C6",
                  },
                  {
                    key: "hyperpigmentation",
                    label: "Hyperpigmentation / Stasis dermatitis",
                    ceap: "C4a",
                  },
                  {
                    key: "lipodermatosclerosis",
                    label: "Lipodermatosclerosis",
                    ceap: "C4b",
                  },
                  {
                    key: "coronaPhlebectatica",
                    label: "Corona phlebectatica",
                    ceap: "C1",
                  },
                  {
                    key: "edema",
                    label: "Edema / Leg swelling",
                    ceap: "C3",
                  },
                  {
                    key: "achingPain",
                    label: "Aching pain / Heaviness",
                    ceap: "Sx",
                  },
                  {
                    key: "nightCramps",
                    label: "Night cramps",
                    ceap: "Sx",
                  },
                  {
                    key: "restlessLegs",
                    label: "Restless legs",
                    ceap: "Sx",
                  },
                  {
                    key: "thrombophlebitis",
                    label: "Superficial thrombophlebitis",
                    ceap: "C4+",
                  },
                ].map((item) => {
                  const isChecked =
                    varicoseCriteria.findings[
                      item.key as keyof VaricoseCriteria["findings"]
                    ];
                  return (
                    <label
                      key={item.key}
                      className={`flex items-start gap-2 p-2 rounded-xl border text-xs cursor-pointer select-none transition-all ${
                        isChecked
                          ? "bg-[#E8F0FE] border-[#1A73E8] text-[#1A73E8] font-bold shadow-2xs"
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
                        className="mt-0.5 rounded border-[#DADCE0] text-[#1A73E8] focus:ring-[#1A73E8] cursor-pointer"
                      />
                      <div className="flex-1 leading-snug">
                        <span>{item.label}</span>
                        <span className="block text-[9px] text-[#5F6368] font-mono">
                          [{item.ceap}]
                        </span>
                      </div>
                    </label>
                  );
                })}
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
                    "Present (Mother)",
                    "Present (Father)",
                    "Present (Both Parents)",
                    "Absent",
                  ].map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* SUB-PANEL 2: VARICOCELE EMBOLIZATION                               */}
        {/* ------------------------------------------------------------------ */}
        {procedureCategory === "varicocele" && (
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-[#3C4043] mb-1">
                  Clinical Grade
                </label>
                <select
                  value={varicoceleCriteria.clinicalGrade}
                  onChange={(e) =>
                    setVaricoceleCriteria({
                      ...varicoceleCriteria,
                      clinicalGrade: e.target
                        .value as VaricoceleCriteria["clinicalGrade"],
                    })
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-white text-xs font-semibold text-[#1A73E8]"
                >
                  {[
                    "Grade I (Palpable with Valsalva)",
                    "Grade II (Palpable without Valsalva)",
                    "Grade III (Visible through scrotal skin)",
                  ].map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#3C4043] mb-1">
                  Side / Laterality
                </label>
                <select
                  value={varicoceleCriteria.side}
                  onChange={(e) =>
                    setVaricoceleCriteria({
                      ...varicoceleCriteria,
                      side: e.target.value as VaricoceleCriteria["side"],
                    })
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-white text-xs font-semibold"
                >
                  {["Left", "Right", "Bilateral"].map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#3C4043] mb-1">
                  Primary Indication
                </label>
                <select
                  value={varicoceleCriteria.indication}
                  onChange={(e) =>
                    setVaricoceleCriteria({
                      ...varicoceleCriteria,
                      indication: e.target
                        .value as VaricoceleCriteria["indication"],
                    })
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-white text-xs font-semibold"
                >
                  {[
                    "Scrotal pain & heaviness",
                    "Infertility & abnormal semen parameters",
                    "Cosmetic / testicular hypotrophy",
                  ].map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#3C4043] mb-1">
                  Symptom Duration
                </label>
                <select
                  value={varicoceleCriteria.duration}
                  onChange={(e) =>
                    setVaricoceleCriteria({
                      ...varicoceleCriteria,
                      duration: e.target
                        .value as VaricoceleCriteria["duration"],
                    })
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-white text-xs font-semibold"
                >
                  {["3 months", "6 months", "1 year", "2 years"].map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* SUB-PANEL 3: OTHER IR PROCEDURES (TIPS/BCS, BAE, PTBD, BIOPSY)     */}
        {/* ------------------------------------------------------------------ */}
        {procedureCategory === "other_ir" && (
          <div className="space-y-3">
            <div>
              <label className="block text-[11px] font-bold text-[#3C4043] mb-1">
                Select Procedure Type
              </label>
              <select
                value={otherIrCriteria.subProcedure}
                onChange={(e) =>
                  setOtherIrCriteria({
                    ...otherIrCriteria,
                    subProcedure: e.target
                      .value as OtherIrCriteria["subProcedure"],
                  })
                }
                className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-white text-xs font-bold text-[#1A73E8]"
              >
                <option value="TIPS / DIPS (Budd-Chiari / Portal HTN)">
                  Budd-Chiari Syndrome / TIPS / DIPS Decompressive Shunt
                </option>
                <option value="Bronchial Artery Embolization (BAE)">
                  Bronchial Artery Embolization (BAE) - Hemoptysis
                </option>
                <option value="Percutaneous Transhepatic Biliary Drainage (PTBD)">
                  Percutaneous Transhepatic Biliary Drainage (PTBD)
                </option>
                <option value="Biliary SEMS (Self-Expanding Metal Stent)">
                  Biliary SEMS Placement (Self-Expanding Metallic Stenting)
                </option>
                <option value="Percutaneous Liver Abscess Drainage (PCD)">
                  Percutaneous Catheter Drainage (PCD) - Liver Abscess / Collection
                </option>
                <option value="Splenic Artery Embolization (SAE)">
                  Splenic Artery Embolization (SAE) - Hypersplenism / Trauma
                </option>
                <option value="Percutaneous Core Liver / Renal Biopsy">
                  Percutaneous Core Liver / Renal Biopsy (USG / CT Guided)
                </option>
                <option value="AV Fistuloplasty / Dialysis Access Salvage">
                  Hemodialysis AV Fistuloplasty / Central Venous Stenosis Plasty
                </option>
                <option value="Transarterial Chemoembolization (TACE)">
                  Transarterial Chemoembolization (TACE) / Lipiodol-Doxorubicin
                </option>
                <option value="Other Master Catalog Procedure">
                  ⚡ Open Master Catalog (All 1,120+ Procedures across 22 Domains)
                </option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-[#3C4043] mb-1">
                  Technical Success
                </label>
                <select
                  value={otherIrCriteria.technicalSuccess}
                  onChange={(e) =>
                    setOtherIrCriteria({
                      ...otherIrCriteria,
                      technicalSuccess: e.target
                        .value as OtherIrCriteria["technicalSuccess"],
                    })
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-white text-xs font-semibold text-[#137333]"
                >
                  {[
                    "Complete Technical Success (100%)",
                    "Successful with Planned Staged Procedure",
                    "Hemostasis & Desired Embolic Endpoint Achieved",
                    "Patent Shunt / Flow Restoration Verified",
                  ].map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#3C4043] mb-1">
                  Puncture Site Status
                </label>
                <select
                  value={otherIrCriteria.punctureSiteStatus}
                  onChange={(e) =>
                    setOtherIrCriteria({
                      ...otherIrCriteria,
                      punctureSiteStatus: e.target
                        .value as OtherIrCriteria["punctureSiteStatus"],
                    })
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-white text-xs font-semibold"
                >
                  {[
                    "Clean, Dry & Intact (No Hematoma/Bruit)",
                    "Pressure Dressing Applied, Distal Pulses Well Palpable",
                    "Manual Compression Applied, Zero Oozing",
                    "Right IJV Puncture Site Sealed, Intact Dressing",
                    "Radial/Femoral Band in Situ, Intact Capillary Refill",
                  ].map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#3C4043] mb-1">
                  Analgesia Status
                </label>
                <select
                  value={otherIrCriteria.analgesia}
                  onChange={(e) =>
                    setOtherIrCriteria({
                      ...otherIrCriteria,
                      analgesia: e.target
                        .value as OtherIrCriteria["analgesia"],
                    })
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-white text-xs font-semibold"
                >
                  {[
                    "Adequate Pain Control (VAS 1-2/10, Oral NSAIDs/Paracetamol)",
                    "Mild Pain, Relieved with SOS Analgesia",
                    "Painless, Nil Distress",
                    "Moderate Pain Controlled on IV Paracetamol + Tramadol",
                  ].map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#3C4043] mb-1">
                  Follow-Up Advice
                </label>
                <select
                  value={otherIrCriteria.followUpAdvice}
                  onChange={(e) =>
                    setOtherIrCriteria({
                      ...otherIrCriteria,
                      followUpAdvice: e.target
                        .value as OtherIrCriteria["followUpAdvice"],
                    })
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-white text-xs font-semibold"
                >
                  {[
                    "Ultrasound Doppler check at 1 month + Hepatic Panel",
                    "Chest X-ray & Pulmonology Review in 2 weeks",
                    "Biliary Bag Output Monitoring & Flush Protocol; OPD 7 Days",
                    "Wound inspection & Suture/Stitch check in 5 days; OPD Unit I",
                    "Strict anticoagulation compliance with weekly INR/platelet review",
                  ].map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ==================================================================== */}
      {/* VIEW A: OFFICIAL PRINTOUT PREVIEW (CLEAN A4 WITH 1-CLICK COPIERS)   */}
      {/* ==================================================================== */}
      {activeTab === "preview" && (
        <div className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-10 shadow-sm space-y-6 print:border-none print:shadow-none print:p-0">
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

          {/* Section 7: Discharge Medications Table */}
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

          {/* Section 8: Procedural Imaging Exhibit */}
          <div className="space-y-2 border border-[#DADCE0] p-3.5 sm:p-4 bg-white rounded-xl print:break-inside-avoid">
            <div className="flex items-center justify-between border-b border-[#DADCE0] pb-2">
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#202124] flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-[#1A73E8]" />
                  PROCEDURAL IMAGING &amp; ANGIOGRAM EXHIBIT (SMS HOSPITAL JAIPUR)
                </h4>
                <p className="text-[10px] text-[#5F6368]">
                  Cath-Lab Angiosuite Documentation &bull; Intra-procedural &amp;
                  Completion Verification
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

          {/* Section 9: Patient Discharge Details & Signatures */}
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
              </div>
            </div>

            {/* Signature Area */}
            <div className="pt-8 flex items-center justify-between border-t border-[#DADCE0] text-xs">
              <div>
                <p className="font-bold text-[#202124]">
                  {summaryData.dischargeDetails.dischargePreparedBy}
                </p>
                <p className="text-[10px] text-[#5F6368]">
                  Discharge Prepared By (Senior Resident)
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold text-[#202124]">
                  {summaryData.dischargeDetails.approvedBy}
                </p>
                <p className="text-[10px] text-[#5F6368]">
                  Approved By (Unit Head / Senior Professor)
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

            <div className="text-xs">
              <label className="block text-[11px] font-semibold text-[#5F6368] mb-1">
                Detailed Operative Technique Narrative
              </label>
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
