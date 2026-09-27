import {
  ALL_MASTER_PROCEDURES,
  MasterProcedure,
  OperativeNoteOptions,
  buildOperativeNote,
  buildOperativeSummary,
} from "../../lib/masterCatalog";
import { RealSmsPatientCase } from "../../lib/realData/smsCathLabRealData";

/**
 * Maps any clinical logbook case to the best-matching IR Master Catalog procedure
 */
export function findProcedureForCase(procedureName: string, diagnosis: string = ""): MasterProcedure {
  const pLower = procedureName.toLowerCase();
  const dLower = diagnosis.toLowerCase();

  // Keyword matching priority
  if (pLower.includes("tips") || pLower.includes("portosystemic") || dLower.includes("budd chiari")) {
    const found = ALL_MASTER_PROCEDURES.find((p) => p.id.includes("tips") || p.title.toLowerCase().includes("tips"));
    if (found) return found;
  }

  if (pLower.includes("brto") || pLower.includes("porto-systemic")) {
    const found = ALL_MASTER_PROCEDURES.find((p) => p.id.includes("brto") || p.title.toLowerCase().includes("brto"));
    if (found) return found;
  }

  if (pLower.includes("bae") || pLower.includes("bronchial") || dLower.includes("hemoptysis")) {
    const found = ALL_MASTER_PROCEDURES.find((p) => p.id.includes("bae") || p.title.toLowerCase().includes("bronchial"));
    if (found) return found;
  }

  if (pLower.includes("venaseal") || pLower.includes("gsv") || pLower.includes("varicose") || pLower.includes("saphenous") || pLower.includes("evlt") || pLower.includes("sclero")) {
    const found = ALL_MASTER_PROCEDURES.find((p) => p.id.includes("venaseal") || p.title.toLowerCase().includes("venaseal") || p.title.toLowerCase().includes("varicose"));
    if (found) return found;
  }

  if (pLower.includes("varicocele")) {
    const found = ALL_MASTER_PROCEDURES.find((p) => p.id.includes("varicocele") || p.title.toLowerCase().includes("varicocele"));
    if (found) return found;
  }

  if (pLower.includes("tace") || pLower.includes("chemoembolization") || dLower.includes("hcc")) {
    const found = ALL_MASTER_PROCEDURES.find((p) => p.id.includes("tace") || p.title.toLowerCase().includes("tace"));
    if (found) return found;
  }

  if (pLower.includes("ptbd") || pLower.includes("biliary") || pLower.includes("sems") || dLower.includes("jaundice")) {
    const found = ALL_MASTER_PROCEDURES.find((p) => p.id.includes("ptbd") || p.title.toLowerCase().includes("biliary") || p.title.toLowerCase().includes("ptbd"));
    if (found) return found;
  }

  if (pLower.includes("pcn") || pLower.includes("nephrostomy")) {
    const found = ALL_MASTER_PROCEDURES.find((p) => p.id.includes("nephrostomy") || p.title.toLowerCase().includes("nephrostomy"));
    if (found) return found;
  }

  if (pLower.includes("fistula") || pLower.includes("fistuloplasty") || pLower.includes("dialysis") || pLower.includes("permacath")) {
    const found = ALL_MASTER_PROCEDURES.find((p) => p.id.includes("fistula") || p.title.toLowerCase().includes("fistuloplasty") || p.title.toLowerCase().includes("dialysis"));
    if (found) return found;
  }

  if (pLower.includes("biopsy") || pLower.includes("fnac")) {
    const found = ALL_MASTER_PROCEDURES.find((p) => p.id.includes("biopsy") || p.title.toLowerCase().includes("biopsy"));
    if (found) return found;
  }

  if (pLower.includes("drainage") || pLower.includes("pigtail") || pLower.includes("abscess") || pLower.includes("collection")) {
    const found = ALL_MASTER_PROCEDURES.find((p) => p.id.includes("drainage") || p.title.toLowerCase().includes("drainage"));
    if (found) return found;
  }

  if (pLower.includes("cerebral") || pLower.includes("stroke") || pLower.includes("thrombectomy") || pLower.includes("dsa") || pLower.includes("aneurysm")) {
    const found = ALL_MASTER_PROCEDURES.find((p) => p.id.includes("neuro") || p.title.toLowerCase().includes("cerebral"));
    if (found) return found;
  }

  // Broad search
  const broadFound = ALL_MASTER_PROCEDURES.find((p) =>
    p.title.toLowerCase().includes(pLower.split(" ")[0])
  );
  if (broadFound) return broadFound;

  // Default fallback procedure
  return ALL_MASTER_PROCEDURES[0] || {
    id: "default-proc",
    categoryNumber: 4,
    categoryName: "Endovascular Interventions",
    title: procedureName,
    maayRghsCompatibility: {
      schemeName: "BOTH",
      packageName: "Interventional Radiology Procedure",
      packageCode: "IR-SMS-01",
      icd10: "Z98.89",
    },
    modality: "XA",
    targetAnatomy: ["Vascular System"],
    sedation: "Local Anesthesia",
    accessSiteDefault: "Common Femoral Artery / Vein",
    sheathDefault: "5F / 6F Introducer Sheath",
    cathetersAndWires: "0.035\" Guidewire, Diagnostic Catheter",
    proceduralNarrativeTemplate: `Diagnostic and therapeutic interventional procedure performed successfully under image guidance.`,
    postOpCare: {
      immobilizationHours: 4,
      immobilizationInstructions: "Flat supine bed rest for 4 hours; limb straight.",
      hematomaChecks: "Access site monitoring every 15 min for 1 hour, then hourly.",
      hydrationProtocol: "Oral hydration encouraged.",
      medications: ["Tab. Paracetamol 650mg SOS", "Tab. Pantoprazole 40mg OD"],
      redFlags: ["Puncture site bleeding", "Expanding hematoma", "Loss of distal pulses"],
    },
    consentId: "std-consent",
  };
}

/**
 * Builds Operative Note Options from a RealSmsPatientCase
 */
export function buildCaseNoteOptions(c: RealSmsPatientCase): OperativeNoteOptions {
  return {
    patientName: c.patientName,
    age: c.age,
    gender: c.gender,
    crNumber: c.crNumber,
    ipdBed: `${c.unit} / Bed Standby`,
    dateOfProcedure: c.date,
    supervisingConsultant: "Dr. Meenu Bagarhatta (Sr. Prof & Head) / Dr. Shashank Sharma (Prof)",
    primaryOperator: "Dr. Naresh Mangalhara (Associate Professor) / Dr. Alok Verma",
    customFindings: `Diagnosis: ${c.diagnosis}. DSA Reference #${c.dsaNo}. Radiation dose: ${c.radiationDose || "Standard low-dose"}. Scheme: ${c.schemeType}.`,
    indication: c.diagnosis,
    suite: "Cath-Lab Angiosuite 1 (Philips Azurion)",
  };
}

/**
 * Generates the Executive Operative Summary for a logbook case
 */
export function generateCaseOperativeSummary(c: RealSmsPatientCase): string {
  const proc = findProcedureForCase(c.procedureName, c.diagnosis);
  const options = buildCaseNoteOptions(c);
  return buildOperativeSummary(proc, options);
}

/**
 * Generates the Full Operative Note for a logbook case
 */
export function generateCaseOperativeNote(c: RealSmsPatientCase): string {
  const proc = findProcedureForCase(c.procedureName, c.diagnosis);
  const options = buildCaseNoteOptions(c);
  return buildOperativeNote(proc, options);
}

/**
 * Generates the Official Rajasthan IHMS e-Hospital Discharge Summary for a logbook case
 */
export function generateCaseDischargeSummary(c: RealSmsPatientCase): string {
  const proc = findProcedureForCase(c.procedureName, c.diagnosis);
  const isMale = c.gender === "Male";

  return `══════════════════════════════════════════════════════════════════════
GOVERNMENT OF RAJASTHAN • INTEGRATED HEALTH MANAGEMENT SYSTEM (IHMS)
SAWAI MAN SINGH (SMS) MEDICAL COLLEGE & ATTACHED HOSPITALS, JAIPUR
DEPARTMENT OF RADIODIAGNOSIS & INTERVENTIONAL RADIOLOGY
OFFICIAL INPATIENT DISCHARGE SUMMARY CARD
══════════════════════════════════════════════════════════════════════

1. PATIENT DEMOGRAPHICS & ADMISSION DATA:
----------------------------------------------------------------------
Patient Name       : ${c.patientName}
Age / Sex          : ${c.age} Years / ${c.gender}
CR / UHID No.      : ${c.crNumber}
Cath-Lab DSA No.   : ${c.dsaNo}
Referring Ward/Unit: ${c.unit}
Patient Category   : ${c.schemeType} (Govt Scheme Approved)
Date of Procedure  : ${c.date}
Discharge Status   : NORMAL DISCHARGE (Stable, Hemostasis Intact)

2. CLINICAL DIAGNOSIS & PROCEDURE:
----------------------------------------------------------------------
Final Diagnosis    : ${c.diagnosis}
ICD-10 Code        : ${proc.maayRghsCompatibility.icd10}
Procedure Performed: ${c.procedureName}
Package Details    : ${proc.maayRghsCompatibility.packageName} (${proc.maayRghsCompatibility.packageCode})
Radiation Exposure : ${c.radiationDose || "Low-dose fluoroscopy"}

3. OPERATIVE SUMMARY & HOSPITAL COURSE:
----------------------------------------------------------------------
Patient was admitted to ${c.unit} for image-guided ${c.procedureName}. Pre-procedure investigations, viral markers, and coagulation profile (PT/INR) were verified. Procedure completed under ${proc.sedation} and ${proc.modality} guidance with 100% technical success. Target vessel/lesion successfully treated.
Puncture Access    : ${proc.accessSiteDefault || "Percutaneous"} (${proc.sheathDefault || "Introducer Sheath"})
Closure / Dressing : Hemostasis achieved; sterile compression dressing applied. Zero hematoma, active oozing, or pseudoaneurysm.
Distal Pulses      : Strong (+++) and symmetrical bilaterally.

4. DISCHARGE MEDICATIONS (RMSCL ESSENTIAL DRUG LIST):
----------------------------------------------------------------------
1. Tab. Pantoprazole 40mg [RMSCL DDC #142] - 1 tab Oral OD Before Breakfast x 5 Days
2. Tab. Paracetamol 650mg [RMSCL DDC #118] - 1 tab Oral TID Post Meals x 3 Days
3. Tab. Cefixime 200mg [RMSCL DDC #112]    - 1 tab Oral BD Post Meals x 5 Days
${proc.postOpCare.medications.length > 0 ? proc.postOpCare.medications.map((m, idx) => `${idx + 4}. ${m}`).join("\n") : ""}

5. DISCHARGE ADVICE & POST-PROCEDURAL CARE:
----------------------------------------------------------------------
• Keep the puncture site clean, dry, and dressed for 48 hours.
• ${proc.postOpCare.immobilizationInstructions}
• Adequate oral fluid intake (2-3 Litres) for contrast clearance.
• Avoid heavy weight lifting (>5 kg) or strenuous exercise for 1 week.

6. EMERGENCY RED FLAGS (IMMEDIATE CASUALTY REPORT):
----------------------------------------------------------------------
Report immediately to SMS Hospital Emergency / IR Resident if experiencing:
- Fresh active bleeding or rapidly enlarging swelling at the puncture site
- Severe unremitting pain or high-grade fever (>101°F) with chills
- Cold, pale, numb, or bluish discolored lower/upper extremity
- Acute breathlessness, chest tightness, or dizziness

7. FOLLOW-UP SCHEDULE:
----------------------------------------------------------------------
Review in IR OPD (Room 110, Dhanwantari OPD Block) on Wednesday / Saturday at 10:00 AM with clinical status and ultrasound/imaging report.

══════════════════════════════════════════════════════════════════════
FACULTY SIGN-OFF:
Dr. Meenu Bagarhatta (Sr. Professor & Head)
Dr. Shashank Sharma (Professor) | Dr. Naresh Mangalhara (Assoc. Professor)
══════════════════════════════════════════════════════════════════════`;
}

/**
 * Shares clinical text via native Web Share API or falls back to WhatsApp Web/App
 */
export async function shareClinicalText(title: string, text: string): Promise<boolean> {
  if (typeof navigator !== "undefined" && navigator.share) {
    try {
      await navigator.share({
        title,
        text,
      });
      return true;
    } catch (err: any) {
      if (err.name === "AbortError") return false;
    }
  }

  // Fallback to WhatsApp
  if (typeof window !== "undefined") {
    const encoded = encodeURIComponent(text);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, "_blank");
    return true;
  }
  return false;
}
