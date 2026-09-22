/**
 * SMS Medical College & Attached Hospitals, Jaipur
 * Department of Radiodiagnosis & Interventional Radiology
 * 
 * Clinical Pre-Procedure Preparation Guidelines & Ward Nursing Protocol
 * Aligned with CIRSE, SIR, SVS, and Rajasthan Health Schemes Standards.
 */

export interface LabSafetyLimit {
  testName: string;
  unit: string;
  lowRiskTarget: string;
  highRiskTarget: string;
  actionIfAbnormal: string;
}

export const LAB_SAFETY_THRESHOLDS: LabSafetyLimit[] = [
  {
    testName: "Hemoglobin (Hb)",
    unit: "g/dL",
    lowRiskTarget: "≥ 9.0 g/dL",
    highRiskTarget: "≥ 9.0 g/dL",
    actionIfAbnormal: "If Hb < 8.0 g/dL, arrange 1-2 units PRBC cross-matched; transfuse pre-op if Hb < 7.0 g/dL."
  },
  {
    testName: "Platelet Count",
    unit: "/μL",
    lowRiskTarget: "≥ 50,000 /μL",
    highRiskTarget: "≥ 80,000 /μL (TIPS, DIPS, Biopsy)",
    actionIfAbnormal: "Transfuse Single Donor Platelets (SDP) or Random Donor Platelets (RDP) 1 hour prior to puncture."
  },
  {
    testName: "Prothrombin Time / INR",
    unit: "Ratio",
    lowRiskTarget: "≤ 1.5",
    highRiskTarget: "≤ 1.4",
    actionIfAbnormal: "If INR > 1.5, administer Fresh Frozen Plasma (FFP 10-15 mL/kg) or 4-Factor PCC / Vitamin K."
  },
  {
    testName: "aPTT (Activated Partial Thromboplastin)",
    unit: "Seconds / Ratio",
    lowRiskTarget: "< 1.3 × Control",
    highRiskTarget: "< 1.2 × Control",
    actionIfAbnormal: "If elevated on heparin, stop IV heparin infusion 4-6 hours prior; re-check aPTT."
  },
  {
    testName: "Serum Creatinine / eGFR",
    unit: "mg/dL / mL/min",
    lowRiskTarget: "Cr < 1.5, eGFR > 30",
    highRiskTarget: "Cr < 1.5, eGFR > 30",
    actionIfAbnormal: "Calculate Cigarroa MACD = (5 × Weight)/Cr. Start pre-hydration with 0.9% Normal Saline 1 mL/kg/h."
  },
  {
    testName: "Viral Serology (HIV, HBsAg, HCV)",
    unit: "Qualitative",
    lowRiskTarget: "Non-Reactive",
    highRiskTarget: "Non-Reactive",
    actionIfAbnormal: "If reactive, arrange dedicated PPE, double-gloving, universal precautions, and waste incineration."
  },
  {
    testName: "Blood Grouping & Crossmatch",
    unit: "ABO / Rh",
    lowRiskTarget: "Type & Screen",
    highRiskTarget: "2 Units PRBC Arranged",
    actionIfAbnormal: "Confirm requisition sent to SMS Blood Bank with valid blood bag tokens ready in blood bank."
  }
];

export interface DrugHoldingRule {
  drugClass: string;
  examples: string;
  holdingTime: string;
  resumptionTime: string;
  rationale: string;
}

export const DRUG_HOLDING_SCHEDULE: DrugHoldingRule[] = [
  {
    drugClass: "Oral Vitamin K Antagonists",
    examples: "Warfarin (Coumadin), Acenocoumarol (Acitrom)",
    holdingTime: "5 Days before procedure",
    resumptionTime: "12-24 hours post-procedure if hemostasis secured",
    rationale: "Ensures INR normalizes to ≤ 1.5. Bridge with therapeutic LMWH if mechanical heart valve."
  },
  {
    drugClass: "P2Y12 Antiplatelet Agents",
    examples: "Clopidogrel (Plavix), Prasugrel, Ticagrelor",
    holdingTime: "5 to 7 Days before procedure",
    resumptionTime: "24-48 hours post-procedure",
    rationale: "Prevents delayed access-site or deep capsular hematoma in high-bleeding-risk IR procedures."
  },
  {
    drugClass: "Direct Oral Anticoagulants (DOACs)",
    examples: "Rivaroxaban (Xarelto), Apixaban (Eliquis), Edoxaban",
    holdingTime: "48 Hours (72h if eGFR < 50 mL/min)",
    resumptionTime: "24-48 hours post-procedure",
    rationale: "Short half-life allows predictable clearance without routine coagulation monitoring."
  },
  {
    drugClass: "Direct Thrombin Inhibitor",
    examples: "Dabigatran (Pradaxa)",
    holdingTime: "48-72 Hours (up to 96h in renal impairment)",
    resumptionTime: "24-48 hours post-procedure",
    rationale: "Predominant renal clearance requires longer withholding in renal disease."
  },
  {
    drugClass: "Therapeutic Low Molecular Weight Heparin",
    examples: "Enoxaparin (Clexane) 1 mg/kg BID or 1.5 mg/kg OD",
    holdingTime: "24 Hours prior to procedure",
    resumptionTime: "12-24 hours post-procedure",
    rationale: "Anti-Xa activity dissipates by 24h, ensuring safe vascular closure."
  },
  {
    drugClass: "Prophylactic LMWH",
    examples: "Enoxaparin 40 mg OD / Dalteparin 5000 IU OD",
    holdingTime: "12 Hours prior to procedure",
    resumptionTime: "6-12 hours post-procedure",
    rationale: "Lower dose allows shorter discontinuation window."
  },
  {
    drugClass: "Intravenous Unfractionated Heparin (UFH)",
    examples: "Heparin IV Infusion",
    holdingTime: "4 to 6 Hours prior to procedure",
    resumptionTime: "Immediately or 2-4 hours post sheath removal",
    rationale: "Rapid clearance; confirm normal aPTT before arterial puncture."
  },
  {
    drugClass: "Biguanide (Antidiabetic)",
    examples: "Metformin (Glycomet)",
    holdingTime: "Morning of procedure + 48 hours post-contrast",
    resumptionTime: "48h post-contrast after re-checking normal serum creatinine",
    rationale: "Prevents fatal lactic acidosis if contrast-induced acute kidney injury occurs."
  },
  {
    drugClass: "ACE-Inhibitors & Angiotensin Receptor Blockers",
    examples: "Ramipril, Enalapril, Telmisartan, Losartan",
    holdingTime: "Morning dose withheld on procedure day",
    resumptionTime: "Next morning after procedure",
    rationale: "Prevents severe, refractory intra-operative hypotension during sedation."
  }
];

export interface WardNursingChecklistItem {
  id: string;
  taskEn: string;
  taskHi: string;
  critical: boolean;
  category: "FASTING" | "ACCESS_PREP" | "MEDICATIONS" | "CONSENT_IDENTITY";
}

export const WARD_NURSING_CHECKLIST: WardNursingChecklistItem[] = [
  {
    id: "npo_solid",
    taskEn: "Strict NPO for solids and milk for at least 6 hours prior to procedure.",
    taskHi: "प्रक्रिया से कम से कम 6 घंटे पूर्व ठोस आहार एवं दूध का पूर्ण परहेज़ (भूखा पेट)।",
    critical: true,
    category: "FASTING"
  },
  {
    id: "npo_liquid",
    taskEn: "Clear water allowed up to 2 hours prior to scheduled conscious sedation.",
    taskHi: "हल्की बेहोशी/शामक दवाइयों हेतु प्रक्रिया से 2 घंटे पूर्व तक केवल सादा पानी दिया जा सकता है।",
    critical: false,
    category: "FASTING"
  },
  {
    id: "iv_cannula",
    taskEn: "Secure 18G or 20G wide-bore IV cannula in left forearm (contralateral to vascular access).",
    taskHi: "बाएं हाथ में 18G या 20G की चौड़ी आई.वी. नली (कैनुला) सुरक्षित रूप से लगाना।",
    critical: true,
    category: "ACCESS_PREP"
  },
  {
    id: "skin_prep",
    taskEn: "Hair clipping and chlorhexidine skin prep at bilateral groins, neck, and right flank.",
    taskHi: "दोनों जांघों, गर्दन तथा आवश्यकतानुसार कमर की त्वचा की बाल सफाई एवं एंटीसेप्टिक ड्रेसिंग।",
    critical: true,
    category: "ACCESS_PREP"
  },
  {
    id: "bladder_empty",
    taskEn: "Patient instructed to empty bladder before transfer; Foley catheterized if procedure > 2h.",
    taskHi: "कैथ-लैब भेजने से पूर्व मरीज द्वारा पेशाब करना; लंबे मामलों में पेशाब की नली (Foley) लगाना।",
    critical: false,
    category: "ACCESS_PREP"
  },
  {
    id: "metallic_removal",
    taskEn: "Remove all dental dentures, eyeglasses, jewelry, hairpins, and metallic threads.",
    taskHi: "नकली दांत, चश्मा, गहने, ताबीज, हेयरपिन एवं धातु की सभी वस्तुएं पूरी तरह हटाना।",
    critical: true,
    category: "ACCESS_PREP"
  },
  {
    id: "pre_hydration",
    taskEn: "Start IV 0.9% Normal Saline pre-hydration at 1 mL/kg/h (if indicated for contrast safety).",
    taskHi: "गुर्दों की सुरक्षा हेतु डॉक्टर के निर्देशानुसार नॉर्मल सेलाइन (0.9% NS) ड्रिप शुरू करना।",
    critical: false,
    category: "MEDICATIONS"
  },
  {
    id: "pre_antibiotic",
    taskEn: "Administer prescribed prophylactic IV antibiotic within 30-60 min prior to groin puncture.",
    taskHi: "प्रक्रिया से 30-60 मिनट पूर्व निर्धारित एंटीबायोटिक इंजेक्शन नस द्वारा लगाना।",
    critical: true,
    category: "MEDICATIONS"
  },
  {
    id: "holding_drugs",
    taskEn: "Confirm Metformin, ACE-i/ARBs, and blood thinners held per institutional protocol.",
    taskHi: "सुनिश्चित करें कि खून पतला करने की दवाइयां व मेटफॉर्मिन नियमानुसार बंद कर दी गई हैं।",
    critical: true,
    category: "MEDICATIONS"
  },
  {
    id: "consent_signed",
    taskEn: "Verify signed bilingual informed consent form (Patient, Relative, and Doctor signatures present).",
    taskHi: "जांच करें कि द्विभाषी सहमति पत्र पर मरीज, परिजन तथा डॉक्टर के हस्ताक्षर पूर्ण हैं।",
    critical: true,
    category: "CONSENT_IDENTITY"
  },
  {
    id: "wristband_id",
    taskEn: "Hospital ID wristband attached with verified CR Number and Patient Name.",
    taskHi: "मरीज की कलाई पर अस्पताल का आईडी बैंड (CR नंबर एवं नाम सहित) बंधा होना चाहिए।",
    critical: true,
    category: "CONSENT_IDENTITY"
  },
  {
    id: "scheme_auth",
    taskEn: "Rajasthan MAAY (Chiranjeevi) / RGHS pre-authorization token verified and attached in file.",
    taskHi: "राजस्थान सरकार स्वास्थ्य योजना (MAAY / RGHS) का प्री-ऑथराइजेशन टोकन संलग्न है।",
    critical: false,
    category: "CONSENT_IDENTITY"
  }
];
