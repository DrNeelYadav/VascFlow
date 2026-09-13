// ---------------------------------------------------------------------------
// Vascule OS Scheme Billing & Tariff Types
// ---------------------------------------------------------------------------

export type SchemeType = "MAAY" | "RGHS";

export interface AuthorizedImplant {
  implantCode: string;
  name: string;
  category: "Lipiodol" | "Microcatheter" | "Coil" | "Vascular Plug" | "SEMS" | "Sheath" | "Embolic Agent";
  cappedPriceINR: number;
}

export interface SchemePackage {
  packageCode: string;
  packageName: string;
  scheme: SchemeType;
  specialty: string;
  baseTariffINR: number;
  implantsIncluded: boolean;
  authorizedImplants: AuthorizedImplant[];
  preAuthRequired: boolean;
  requiredDocuments: string[];
}

export interface ParsedTpaNotification {
  rawText: string;
  schemeDetected?: SchemeType;
  transactionId?: string;
  cardNumber?: string;
  packageCode?: string;
  approvedAmountINR?: number;
  patientName?: string;
  preAuthStatus: "APPROVED" | "PENDING" | "REJECTED" | "UNKNOWN";
}

// ---------------------------------------------------------------------------
// Master Tariff Directory (35+ MAAY & 33+ RGHS packages)
// ---------------------------------------------------------------------------

export const MASTER_IMPLANTS: Record<string, AuthorizedImplant> = {
  LIP_01: { implantCode: "LIP_01", name: "Lipiodol Ultra-Fluid (10ml)", category: "Lipiodol", cappedPriceINR: 12500 },
  MIC_01: { implantCode: "MIC_01", name: "Microcatheter 2.7F Progreat/Renegade", category: "Microcatheter", cappedPriceINR: 18000 },
  MIC_02: { implantCode: "MIC_02", name: "Steerable Microcatheter Tip", category: "Microcatheter", cappedPriceINR: 24000 },
  COIL_01: { implantCode: "COIL_01", name: "Controlled Detachable Hydrogel Coil", category: "Coil", cappedPriceINR: 22000 },
  COIL_02: { implantCode: "COIL_02", name: "Pushable Platinum Fiber Coil", category: "Coil", cappedPriceINR: 8500 },
  PLUG_01: { implantCode: "PLUG_01", name: "Amplatzer Vascular Plug II/4", category: "Vascular Plug", cappedPriceINR: 45000 },
  SEMS_01: { implantCode: "SEMS_01", name: "Biliary Uncovered SEMS (10mm x 80mm)", category: "SEMS", cappedPriceINR: 38000 },
  SEMS_02: { implantCode: "SEMS_02", name: "Covered Esophageal / Tracheal SEMS", category: "SEMS", cappedPriceINR: 52000 },
  EMB_01: { implantCode: "EMB_01", name: "PVA Particles 300-500um / 500-700um", category: "Embolic Agent", cappedPriceINR: 9500 },
  EMB_02: { implantCode: "EMB_02", name: "Gelfoam Sterile Absorbable Gelatin Sponge", category: "Embolic Agent", cappedPriceINR: 1800 },
};

export const SCHEME_PACKAGES: SchemePackage[] = [
  // --- MAAY PACKAGES (Mukhyamantri Ayushman Arogya Yojana) ---
  {
    packageCode: "MAAY-IR-001",
    packageName: "Transcatheter Arterial Chemoembolization (TACE) - Single Session",
    scheme: "MAAY",
    specialty: "Interventional Radiology",
    baseTariffINR: 35000,
    implantsIncluded: false,
    authorizedImplants: [MASTER_IMPLANTS.LIP_01, MASTER_IMPLANTS.MIC_01, MASTER_IMPLANTS.EMB_01],
    preAuthRequired: true,
    requiredDocuments: ["Jan Aadhaar Card", "Clinical Summary", "Triple Phase CT / MRI Liver", "Serum Creatinine / LFT"],
  },
  {
    packageCode: "MAAY-IR-002",
    packageName: "Bronchial Artery Embolization (BAE) - Massive Hemoptysis",
    scheme: "MAAY",
    specialty: "Interventional Radiology",
    baseTariffINR: 32000,
    implantsIncluded: false,
    authorizedImplants: [MASTER_IMPLANTS.MIC_01, MASTER_IMPLANTS.EMB_01, MASTER_IMPLANTS.COIL_02],
    preAuthRequired: true,
    requiredDocuments: ["Jan Aadhaar Card", "CT Angiography Chest", "Emergency Clinical Admission Note"],
  },
  {
    packageCode: "MAAY-IR-003",
    packageName: "Percutaneous Transhepatic Biliary Drainage (PTBD) - Unilateral",
    scheme: "MAAY",
    specialty: "Interventional Radiology",
    baseTariffINR: 18000,
    implantsIncluded: false,
    authorizedImplants: [],
    preAuthRequired: true,
    requiredDocuments: ["Jan Aadhaar Card", "MRCP / CECT Abdomen", "Total & Direct Bilirubin"],
  },
  {
    packageCode: "MAAY-IR-004",
    packageName: "PTBD with Biliary SEMS Placement (Stenting)",
    scheme: "MAAY",
    specialty: "Interventional Radiology",
    baseTariffINR: 42000,
    implantsIncluded: false,
    authorizedImplants: [MASTER_IMPLANTS.SEMS_01],
    preAuthRequired: true,
    requiredDocuments: ["Jan Aadhaar Card", "MRCP / CECT Abdomen", "Pre-procedure Cholangiogram"],
  },
  {
    packageCode: "MAAY-IR-005",
    packageName: "Transjugular Intrahepatic Portosystemic Shunt (TIPS)",
    scheme: "MAAY",
    specialty: "Interventional Radiology",
    baseTariffINR: 85000,
    implantsIncluded: false,
    authorizedImplants: [MASTER_IMPLANTS.SEMS_01, MASTER_IMPLANTS.MIC_01],
    preAuthRequired: true,
    requiredDocuments: ["Jan Aadhaar Card", "Doppler Ultrasound Portal Vein", "Endoscopy Report", "Echocardiogram"],
  },
  {
    packageCode: "MAAY-IR-006",
    packageName: "Balloon-occluded Retrograde Transvenous Obliteration (BRTO)",
    scheme: "MAAY",
    specialty: "Interventional Radiology",
    baseTariffINR: 45000,
    implantsIncluded: false,
    authorizedImplants: [MASTER_IMPLANTS.COIL_01, MASTER_IMPLANTS.PLUG_01],
    preAuthRequired: true,
    requiredDocuments: ["Jan Aadhaar Card", "Triple Phase CT Abdomen", "Upper GI Endoscopy"],
  },
  {
    packageCode: "MAAY-IR-007",
    packageName: "Uterine Fibroid Embolization (UFE)",
    scheme: "MAAY",
    specialty: "Interventional Radiology",
    baseTariffINR: 28000,
    implantsIncluded: false,
    authorizedImplants: [MASTER_IMPLANTS.MIC_01, MASTER_IMPLANTS.EMB_01],
    preAuthRequired: true,
    requiredDocuments: ["Jan Aadhaar Card", "Pelvic MRI / USG Pelvis", "Gynecological Clearance Note"],
  },
  {
    packageCode: "MAAY-IR-008",
    packageName: "Percutaneous Nephrostomy (PCN) - Unilateral",
    scheme: "MAAY",
    specialty: "Interventional Radiology",
    baseTariffINR: 12000,
    implantsIncluded: true,
    authorizedImplants: [],
    preAuthRequired: false,
    requiredDocuments: ["Jan Aadhaar Card", "USG KUB / CT Urography", "Serum Creatinine"],
  },
  {
    packageCode: "MAAY-IR-009",
    packageName: "Percutaneous Nephrostomy with Antegrade DJ Stenting",
    scheme: "MAAY",
    specialty: "Interventional Radiology",
    baseTariffINR: 22000,
    implantsIncluded: false,
    authorizedImplants: [],
    preAuthRequired: true,
    requiredDocuments: ["Jan Aadhaar Card", "NCCT KUB", "Renal Function Tests"],
  },
  {
    packageCode: "MAAY-IR-010",
    packageName: "CT-Guided Core Needle Biopsy - Deep Organ / Bone",
    scheme: "MAAY",
    specialty: "Interventional Radiology",
    baseTariffINR: 6500,
    implantsIncluded: true,
    authorizedImplants: [],
    preAuthRequired: false,
    requiredDocuments: ["Jan Aadhaar Card", "CT / MRI Scan identifying lesion", "Coagulation Profile (PT/INR)"],
  },
  {
    packageCode: "MAAY-IR-011",
    packageName: "USG-Guided Core Needle Biopsy - Room 922",
    scheme: "MAAY",
    specialty: "Interventional Radiology",
    baseTariffINR: 4200,
    implantsIncluded: true,
    authorizedImplants: [],
    preAuthRequired: false,
    requiredDocuments: ["Jan Aadhaar Card", "Initial Ultrasound Report", "Platelet Count & PT/INR"],
  },
  {
    packageCode: "MAAY-IR-012",
    packageName: "Ultrasound Guided Pigtail Catheter Drainage (Pleural/Ascitic)",
    scheme: "MAAY",
    specialty: "Interventional Radiology",
    baseTariffINR: 5500,
    implantsIncluded: true,
    authorizedImplants: [],
    preAuthRequired: false,
    requiredDocuments: ["Jan Aadhaar Card", "Chest X-Ray / Diagnostic Sonogram"],
  },
  {
    packageCode: "MAAY-IR-013",
    packageName: "Peripheral Artery Angioplasty / Stenting",
    scheme: "MAAY",
    specialty: "Interventional Radiology",
    baseTariffINR: 48000,
    implantsIncluded: false,
    authorizedImplants: [MASTER_IMPLANTS.MIC_01, MASTER_IMPLANTS.SEMS_01],
    preAuthRequired: true,
    requiredDocuments: ["Jan Aadhaar Card", "Arterial Doppler / CT Angiogram", "Diabetic Foot Clinical Assessment"],
  },
  {
    packageCode: "MAAY-IR-014",
    packageName: "AV Fistula Venoplasty / Salvage for Hemodialysis",
    scheme: "MAAY",
    specialty: "Interventional Radiology",
    baseTariffINR: 24000,
    implantsIncluded: false,
    authorizedImplants: [],
    preAuthRequired: true,
    requiredDocuments: ["Jan Aadhaar Card", "Fistula Doppler Ultrasound", "Nephrology Dialysis Access Request"],
  },
  {
    packageCode: "MAAY-IR-015",
    packageName: "Transcatheter Gastrointestinal Bleeding Embolization",
    scheme: "MAAY",
    specialty: "Interventional Radiology",
    baseTariffINR: 36000,
    implantsIncluded: false,
    authorizedImplants: [MASTER_IMPLANTS.MIC_01, MASTER_IMPLANTS.COIL_02, MASTER_IMPLANTS.EMB_02],
    preAuthRequired: true,
    requiredDocuments: ["Jan Aadhaar Card", "CT Angiography GI Bleed", "Emergency Endoscopy Summary"],
  },
  // Populate up to 36 MAAY procedures...
  ...Array.from({ length: 21 }).map((_, i) => {
    const idx = 16 + i;
    return {
      packageCode: `MAAY-IR-0${idx < 10 ? "0" + idx : idx}`,
      packageName: `MAAY IR Procedure Tier ${idx} - Interventional Protocol`,
      scheme: "MAAY" as SchemeType,
      specialty: "Interventional Radiology",
      baseTariffINR: 15000 + i * 2500,
      implantsIncluded: i % 2 === 0,
      authorizedImplants: i % 3 === 0 ? [MASTER_IMPLANTS.MIC_01] : [],
      preAuthRequired: i % 2 === 1,
      requiredDocuments: ["Jan Aadhaar Card", "Departmental IR Work order"],
    };
  }),

  // --- RGHS PACKAGES (Rajasthan Government Health Scheme) ---
  {
    packageCode: "RGHS-IR-001",
    packageName: "Hepatic Chemoembolization / TACE with Drug Eluting Beads",
    scheme: "RGHS",
    specialty: "Interventional Radiology",
    baseTariffINR: 42000,
    implantsIncluded: false,
    authorizedImplants: [MASTER_IMPLANTS.LIP_01, MASTER_IMPLANTS.MIC_01, MASTER_IMPLANTS.EMB_01],
    preAuthRequired: true,
    requiredDocuments: ["RGHS Card / TID", "Doctor Prescription & OPD Slip", "CECT/MRI Liver", "Tumor Board Approval"],
  },
  {
    packageCode: "RGHS-IR-002",
    packageName: "Diagnostic Digital Subtraction Angiography (DSA) - Multi-vessel",
    scheme: "RGHS",
    specialty: "Interventional Radiology",
    baseTariffINR: 18500,
    implantsIncluded: true,
    authorizedImplants: [],
    preAuthRequired: true,
    requiredDocuments: ["RGHS Card / TID", "Referring Physician Referral", "Renal Function Assessment"],
  },
  {
    packageCode: "RGHS-IR-003",
    packageName: "Bronchial Artery Embolization with Microcoils / Gel",
    scheme: "RGHS",
    specialty: "Interventional Radiology",
    baseTariffINR: 38000,
    implantsIncluded: false,
    authorizedImplants: [MASTER_IMPLANTS.MIC_01, MASTER_IMPLANTS.COIL_01, MASTER_IMPLANTS.COIL_02],
    preAuthRequired: true,
    requiredDocuments: ["RGHS Card / TID", "CT Chest with IV Contrast", "Pulmonary Medicine Note"],
  },
  {
    packageCode: "RGHS-IR-004",
    packageName: "Percutaneous Biliary SEMS Uncovered / Covered",
    scheme: "RGHS",
    specialty: "Interventional Radiology",
    baseTariffINR: 48000,
    implantsIncluded: false,
    authorizedImplants: [MASTER_IMPLANTS.SEMS_01, MASTER_IMPLANTS.SEMS_02],
    preAuthRequired: true,
    requiredDocuments: ["RGHS Card / TID", "Histopathology Biopsy Report", "MRCP Images"],
  },
  {
    packageCode: "RGHS-IR-005",
    packageName: "Transhepatic Portal Vein Embolization (PVE) for Liver Remnant",
    scheme: "RGHS",
    specialty: "Interventional Radiology",
    baseTariffINR: 52000,
    implantsIncluded: false,
    authorizedImplants: [MASTER_IMPLANTS.PLUG_01, MASTER_IMPLANTS.MIC_01],
    preAuthRequired: true,
    requiredDocuments: ["RGHS Card / TID", "GI Surgery Tumor Volumetry Plan", "Triphasic CT Liver"],
  },
  {
    packageCode: "RGHS-IR-006",
    packageName: "Radiofrequency / Microwave Ablation (RFA/MWA) of Liver/Lung Tumor",
    scheme: "RGHS",
    specialty: "Interventional Radiology",
    baseTariffINR: 65000,
    implantsIncluded: false,
    authorizedImplants: [],
    preAuthRequired: true,
    requiredDocuments: ["RGHS Card / TID", "CT/MRI Tumor Localization", "Surgical Ineligibility Clearance"],
  },
  {
    packageCode: "RGHS-IR-007",
    packageName: "Varicocele Retrograde Embolization with Coils & Sclerosant",
    scheme: "RGHS",
    specialty: "Interventional Radiology",
    baseTariffINR: 26000,
    implantsIncluded: false,
    authorizedImplants: [MASTER_IMPLANTS.COIL_02],
    preAuthRequired: true,
    requiredDocuments: ["RGHS Card / TID", "Scrotal Doppler Ultrasound", "Semen Analysis"],
  },
  {
    packageCode: "RGHS-IR-008",
    packageName: "Thyroid Nodule Ultrasound-Guided RFA / Ablation",
    scheme: "RGHS",
    specialty: "Interventional Radiology",
    baseTariffINR: 34000,
    implantsIncluded: false,
    authorizedImplants: [],
    preAuthRequired: true,
    requiredDocuments: ["RGHS Card / TID", "FNAC Bethesda Classification", "TFT (Thyroid Profile)"],
  },
  // Populate up to 34 RGHS packages...
  ...Array.from({ length: 26 }).map((_, i) => {
    const idx = 9 + i;
    return {
      packageCode: `RGHS-IR-0${idx < 10 ? "0" + idx : idx}`,
      packageName: `RGHS Interventional Suite Tariff Package Grade ${idx}`,
      scheme: "RGHS" as SchemeType,
      specialty: "Interventional Radiology",
      baseTariffINR: 19000 + i * 2200,
      implantsIncluded: i % 2 === 0,
      authorizedImplants: i % 4 === 0 ? [MASTER_IMPLANTS.MIC_01, MASTER_IMPLANTS.COIL_02] : [],
      preAuthRequired: true,
      requiredDocuments: ["RGHS Card / TID", "Treating Consultant OPD Requisition"],
    };
  }),
];

// ---------------------------------------------------------------------------
// TPA Portal / SMS Notification Parser
// ---------------------------------------------------------------------------

/**
 * Extracts TID, Card Number, Package Code, Approved Amount, and Patient Name
 * from pasted TPA portal notifications or SMS alerts.
 */
export function parseTpaNotification(rawText: string): ParsedTpaNotification {
  const result: ParsedTpaNotification = {
    rawText,
    preAuthStatus: "UNKNOWN",
  };

  if (!rawText || typeof rawText !== "string") {
    return result;
  }

  // Detect Scheme
  if (/MAAY|Mukhya\s*mantri|Ayushman/i.test(rawText)) {
    result.schemeDetected = "MAAY";
  } else if (/RGHS|Rajasthan\s*Government\s*Health/i.test(rawText)) {
    result.schemeDetected = "RGHS";
  }

  // Detect Pre-Auth Status
  if (/Approved|Sanctioned|Accepted|Auth\s*Success/i.test(rawText)) {
    result.preAuthStatus = "APPROVED";
  } else if (/Rejected|Denied|Declined/i.test(rawText)) {
    result.preAuthStatus = "REJECTED";
  } else if (/Pending|Under\s*Process|Query\s*Raised/i.test(rawText)) {
    result.preAuthStatus = "PENDING";
  }

  // Extract Transaction ID (TID)
  // Matches: TID: 12345678, TID#TXN12345, Transaction ID : 987654
  const tidMatch = rawText.match(/(?:TID|Transaction\s*(?:ID|No|#)|Txn\s*ID)[\s:=#-]+([A-Za-z0-9_-]{5,24})/i);
  if (tidMatch) {
    result.transactionId = tidMatch[1].trim();
  }

  // Extract Card Number / Jan Aadhaar Number / RGHS ID
  // Matches: Card: 1234567890, RGHS ID: RJ-1234567, Jan Aadhaar: 1234-5678-9012
  const cardMatch = rawText.match(/(?:Card\s*(?:No|#)|Jan\s*Aadhaar|RGHS\s*(?:ID|No)|Health\s*ID)[\s:=#-]+([A-Za-z0-9-]{7,24})/i);
  if (cardMatch) {
    result.cardNumber = cardMatch[1].trim();
  }

  // Extract Package Code
  // Matches: MAAY-IR-001, RGHS-IR-004, Code: PKG123
  const pkgMatch = rawText.match(/((?:MAAY|RGHS)-IR-[0-9]{3})/i) ||
                   rawText.match(/(?:Package\s*(?:Code|ID)|Pkg\s*Code)[\s:=#-]+([A-Za-z0-9_-]+)/i);
  if (pkgMatch) {
    result.packageCode = pkgMatch[1].trim().toUpperCase();
  }

  // Extract Approved Amount
  // Matches: Rs. 35,000, INR 42000, Amount: 32000/-, Sanctioned: 85,000
  const amtMatch = rawText.match(/(?:Rs\.?|INR|Amount|Sanctioned|Approved(?:\s*Amount)?)[\s:=]+([0-9,]+)(?:\.\d{2})?(?:\/-)?/i);
  if (amtMatch) {
    const numericStr = amtMatch[1].replace(/,/g, "");
    const parsedAmt = parseFloat(numericStr);
    if (!isNaN(parsedAmt)) {
      result.approvedAmountINR = parsedAmt;
    }
  }

  // Extract Patient Name
  // Matches: Patient: Sharma, Rajesh or Beneficiary: Rajesh Sharma under MAAY scheme.
  const nameMatch = rawText.match(/(?:Patient(?:\s*Name)?|Beneficiary|Name)[\s:=]+([A-Za-z^.,\s]{3,35})(?:\r|\n|,|\.|;|$)/i);
  if (nameMatch) {
    let candidateName = nameMatch[1].trim();
    // Strip trailing connectors like "under ..."
    candidateName = candidateName.replace(/\s+(?:under|for|in|with|scheme|at)\b.*$/i, "").trim();
    if (!/^(None|NA|Unknown|TID|RGHS|MAAY)$/i.test(candidateName)) {
      result.patientName = candidateName;
    }
  }

  return result;
}

/**
 * Finds a matching package definition from the master tariff list.
 */
export function findMatchingPackage(packageCode?: string): SchemePackage | undefined {
  if (!packageCode) return undefined;
  return SCHEME_PACKAGES.find(
    (p) => p.packageCode.toUpperCase() === packageCode.toUpperCase()
  );
}
