/**
 * OPD Pre-Booking & Dating Studio Types
 * Institution: SMS Medical College & Attached Hospitals, Jaipur
 * Benchmark: AIIMS New Delhi IR Clinical Protocols
 */

export type SchemeType = "RGHS" | "MAAY" | "PM-JAY" | "RMRS" | "Cash";

export type ProcedureCategory =
  | "general"
  | "sclerotherapy"
  | "tace"
  | "bae"
  | "bleeder"
  | "biliary"
  | "varicose"
  | "jna"
  | "uae"
  | "fistuloplasty"
  | "pcn"
  | "other";

export interface SclerotherapySession {
  id: string;
  sessionNumber: number;
  date: string;
  sclerosant: string; // e.g. "Bleomycin", "Polidocanol (6cc air + 2cc PD)", "STS"
  dose: string; // e.g. "5 IU", "6+2cc (Tessari)"
  compressionApplied: string; // e.g. "Yes", "No"
  followUpSize: string; // e.g. "Reduced 30%"
  followUpMorphology: string; // e.g. "Spongy to firm"
  complications: string; // e.g. "None", "Mild hyperpigmentation"
  advice: string; // e.g. "Recall after 4 weeks"
}

export interface SclerotherapyDetails {
  // Front Section: Clinical presentation
  symptomDuration: string; // e.g. "2 years"
  painScoreVas: number; // 0-10
  facialDisfigurement: boolean;
  functionalImpairmentNotes: string; // vision, swallowing, limb movement
  complaints: string;
  baselineUsgDimensions: string; // e.g. "45 x 30 x 22 mm"
  baselineMriFindings: string; // e.g. "High STIR hyperintense veno-lymphatic malformation"
  // Back Section: Phlebogram & Sessions
  fluidAspirated: "Blood" | "Lymph" | "Serous" | "None" | "Dry";
  contrastVolInjectedMl: string; // e.g. "2.5 ml"
  appearance: "Spongy" | "Cavitary" | "Dysplastic veins";
  drainingVeinStatus: "Not Present" | "Early" | "Late";
  drainingVeinPathway: "Direct" | "Indirect" | "None";
  compressionStatus: "Present" | "Not Present";
  compressionSite: string;
  sessions: SclerotherapySession[];
}

export interface TaceDetails {
  hepaticArteryBranch: "Right Hepatic" | "Left Hepatic" | "Bilateral" | "Replaced / Accessory";
  couinaudSegments: string[];
  lesionCount: number;
  dominantLesionSizeCm: string;
  liradsCategory: "LR-3" | "LR-4" | "LR-5" | "LR-M";
  baselineAfpNgMl: string;
  childPughClass: "A" | "B" | "C";
  etiology: "HCV" | "HBV" | "NASH" | "Alcohol" | "Cryptogenic";
}

export interface BaeDetails {
  bronchialArteryOrigins: string[];
  ectopicCollaterals: string[];
  hemoptysisSeverity: "Mild (<100ml/24h)" | "Moderate (100-300ml)" | "Massive (>300ml/24h)";
  primaryLungLobe: "RUL" | "RML" | "RLL" | "LUL" | "LLL" | "Bilateral";
  spinalArteryAdamkiewiczIdentified: boolean;
  spinalArterySafetyCleared: boolean;
  etiology: "Post-TB Bronchiectasis" | "Aspergilloma" | "Cavitary TB" | "Malignancy" | "AVM";
}

export interface BleederDetails {
  clinicalPresentation: "Hematemesis" | "Melena" | "Fresh Hematochezia" | "Post-Op Drain Bleed";
  forrestClass: "Ia (Spurting)" | "Ib (Oozing)" | "IIa (Non-bleeding visible vessel)" | "IIb (Adherent clot)" | "IIc (Flat spot)" | "III (Clean base)" | "Not Applicable";
  culpritVesselSuspected: "Left Gastric (LGA)" | "Gastroduodenal (GDA)" | "Splenic" | "SMA Branch" | "Ileocolic" | "Other";
  hemodynamicStatus: "Stable" | "Borderline" | "Active Shock (Requiring Inotropes)";
  shockIndex: string;
}

export interface PreBookingSafetyChecklist {
  npoConfirmed: boolean;
  plateletCount: string;
  inr: string;
  creatinine: string;
  egfr: string;
  viralMarkers: "Non-Reactive" | "Reactive" | "Awaited" | "";
  contrastAllergy: "No" | "Yes (Premedicated with Steroid+Antihistamine)" | "";
  consentSigned: boolean;
}

export interface PreBookingRecord {
  id: string;
  createdAt: string;
  scheduledDate: string; // YYYY-MM-DD
  patientName: string;
  age: number;
  sex: "M" | "F" | "Other";
  contactNumber: string;
  location: string;
  crUhid: string;
  scheme: SchemeType;
  schemeCode: string; // RGHS / MAAY Package Code
  icdCode: string; // ICD-10 Code
  procedureCategory: ProcedureCategory;
  procedureName: string;
  admissionType: "Day Care" | "Inpatient Ward";
  anesthesiaPlan: "Local Anesthesia" | "Conscious Sedation" | "General Anesthesia";
  safetyChecklist: PreBookingSafetyChecklist;
  status: "Provisional OPD Date" | "Confirmed" | "Bumped" | "Completed" | "Rescheduled";
  notes?: string;
  sclerotherapy?: SclerotherapyDetails;
  tace?: TaceDetails;
  bae?: BaeDetails;
  bleeder?: BleederDetails;
}

export const COMMON_PROCEDURES_TARIFFS: Record<ProcedureCategory, { name: string; icd: string; rghsMaay: string }> = {
  sclerotherapy: {
    name: "Percutaneous Sclerotherapy (STS / Polidocanol / Bleomycin)",
    icd: "D18.01",
    rghsMaay: "1849-IN074A (IR-SCL-01) | IMP 01",
  },
  tace: {
    name: "Conventional TACE (cTACE)",
    icd: "C22.0",
    rghsMaay: "2849-IN061A (IR-TAC-02) | IMP 38, IMP 39",
  },
  bae: {
    name: "Bronchial Artery Embolization (BAE)",
    icd: "R04.2",
    rghsMaay: "2849-IN059A (IR-BAE-01) | IMP 39, IMP 48",
  },
  bleeder: {
    name: "Transcatheter Arterial Embolization for GI Bleeder",
    icd: "K92.2",
    rghsMaay: "2849-IN058A (IR-EMB-03) | IMP 39, Coils",
  },
  biliary: {
    name: "Percutaneous Transhepatic Biliary Stenting (PTBD / SEMS)",
    icd: "C24.0 / K83.1",
    rghsMaay: "2849-IN054A (IR-BIL-01) | IMP 21",
  },
  varicose: {
    name: "Endovenous Laser Ablation / Glue Embolization of Varicose Veins",
    icd: "I83.9",
    rghsMaay: "1849-IN075A (IR-VAR-01) | IMP 12, IMP 18",
  },
  jna: {
    name: "Pre-Operative Embolization of JNA & Head-Neck Tumors",
    icd: "D10.6",
    rghsMaay: "2849-IN063A (IR-JNA-01) | IMP 39, PVA",
  },
  uae: {
    name: "Uterine Artery Embolization for Fibroid / PPH (UAE / UFE)",
    icd: "D25.9 / O72.0",
    rghsMaay: "2849-IN062A (IR-UAE-01) | IMP 39, Gelfoam",
  },
  fistuloplasty: {
    name: "Dialysis AV Fistuloplasty & Central Venoplasty",
    icd: "T82.8",
    rghsMaay: "2849-IN065A (IR-AVF-01) | IMP 08 (Balloon)",
  },
  pcn: {
    name: "Percutaneous Nephrostomy & Antegrade Urological IR (PCN / DJ)",
    icd: "N13.2 / N28.8",
    rghsMaay: "2849-IN052A (IR-PCN-01) | IMP 05 (PCN Kit)",
  },
  general: {
    name: "General Interventional Radiology Procedure",
    icd: "I77.9",
    rghsMaay: "Standard Tariff",
  },
  other: {
    name: "Specialized Interventional Radiology Procedure",
    icd: "Z01.818",
    rghsMaay: "Variable Tariff",
  },
};
