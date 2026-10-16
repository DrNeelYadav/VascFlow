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
  | "other";

export interface SclerotherapySession {
  id: string;
  sessionNumber: number;
  date: string;
  sclerosant: string; // e.g. "Bleomycin", "Polidocanol (6cc air + 2cc PD)", "STS"
  dose: string; // e.g. "5 IU", "6+2cc (Tessari)"
  compressionApplied: string; // e.g. "(+) R. IJV", "Not applied"
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
  // Back Section: AIIMS Phlebogram & Ledger
  fluidAspirated: "Blood" | "Lymph" | "Serous" | "None" | "Dry";
  contrastVolInjectedMl: string; // e.g. "2.5 ml"
  appearance: "Spongy" | "Cavitary" | "Dysplastic veins";
  drainingVeinStatus: "Not Present" | "Early" | "Late";
  drainingVeinPathway: "Direct" | "Indirect" | "None";
  compressionStatus: "Present" | "Not Present";
  compressionSite: string; // e.g. "Right Internal Jugular Vein (R. IJV)"
  sessions: SclerotherapySession[];
}

export interface TaceDetails {
  hepaticArteryBranch: "Right Hepatic" | "Left Hepatic" | "Bilateral" | "Replaced / Accessory";
  couinaudSegments: string[]; // ["I", "II", "III", "IVa", "IVb", "V", "VI", "VII", "VIII"]
  lesionCount: number;
  dominantLesionSizeCm: string; // e.g. "3.5 cm"
  liradsCategory: "LR-3" | "LR-4" | "LR-5" | "LR-M";
  baselineAfpNgMl: string; // e.g. "245 ng/mL"
  childPughClass: "A" | "B" | "C";
  etiology: "HCV" | "HBV" | "NASH" | "Alcohol" | "Cryptogenic";
}

export interface BaeDetails {
  bronchialArteryOrigins: string[]; // e.g. ["Right ICBT", "Left Superior Bronchial"]
  ectopicCollaterals: string[]; // e.g. ["Subclavian / IMA", "Inferior Phrenic", "Direct Aorta"]
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
  shockIndex: string; // HR / SBP
}

export interface PreBookingSafetyChecklist {
  npoConfirmed: boolean;
  plateletCount: string; // e.g. "185,000 / uL"
  inr: string; // e.g. "1.12"
  creatinine: string; // e.g. "0.9 mg/dL"
  egfr: string; // e.g. "98 mL/min"
  viralMarkers: "Non-Reactive" | "Reactive" | "Awaited";
  contrastAllergy: "No" | "Yes (Premedicated with Steroid+Antihistamine)";
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
  // Category specific fields
  sclerotherapy?: SclerotherapyDetails;
  tace?: TaceDetails;
  bae?: BaeDetails;
  bleeder?: BleederDetails;
}

export const COMMON_PROCEDURES_TARIFFS: Record<ProcedureCategory, { name: string; icd: string; rghsMaay: string }> = {
  sclerotherapy: {
    name: "Percutaneous Sclerotherapy (Bleomycin / Polidocanol)",
    icd: "D18.01 (Venous Malformation)",
    rghsMaay: "IR-SCL-01 (Rs. 18,500)",
  },
  tace: {
    name: "Transarterial Chemoembolization (TACE)",
    icd: "C22.0 (Hepatocellular Carcinoma)",
    rghsMaay: "IR-TAC-02 (Rs. 45,000)",
  },
  bae: {
    name: "Bronchial Artery Embolization (BAE)",
    icd: "R04.2 (Hemoptysis)",
    rghsMaay: "IR-BAE-01 (Rs. 38,000)",
  },
  bleeder: {
    name: "Transcatheter Arterial Embolization for GI Bleeder",
    icd: "K92.2 (Gastrointestinal Hemorrhage)",
    rghsMaay: "IR-EMB-03 (Rs. 42,000)",
  },
  general: {
    name: "Diagnostic Angiography & Interventional Procedure",
    icd: "I77.9 (Vessel Disorder, unspecified)",
    rghsMaay: "IR-GEN-01 (Standard Tariff)",
  },
  other: {
    name: "Specialized Interventional Radiology Procedure",
    icd: "Z01.818 (Pre-procedural examination)",
    rghsMaay: "IR-OTH-99 (Variable Tariff)",
  },
};
