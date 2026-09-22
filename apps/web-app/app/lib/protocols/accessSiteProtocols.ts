/**
 * Vascular Access Site Surveillance & Post-Procedure Management Protocols
 * Grounded in SCAI (Society for Cardiovascular Angiography and Interventions),
 * CIRSE (Cardiovascular and Interventional Radiological Society of Europe),
 * and SIR (Society of Interventional Radiology) consensus standards.
 * Department of Radiodiagnosis & Interventional Radiology, SMS Medical College, Jaipur.
 */

export type AccessSiteType =
  | "ARTERIAL_FEMORAL"
  | "ARTERIAL_RADIAL"
  | "ARTERIAL_BRACHIAL"
  | "VENOUS_FEMORAL"
  | "VENOUS_INTERNAL_JUGULAR"
  | "VENOUS_SUBCLAVIAN"
  | "PICC_UPPER_EXTREMITY"
  | "DIRECT_PERCUTANEOUS";

export type HemostasisDevice =
  | "MANUAL_COMPRESSION"
  | "VCD_PERCLOSE_PROGLIDE"
  | "VCD_ANGIO_SEAL"
  | "VCD_MYNX"
  | "RADIAL_TR_BAND"
  | "PRESSURE_DRESSING";

export type AnalgesiaTier = "TIER_1_MILD" | "TIER_2_MODERATE" | "TIER_3_SEVERE_PES";

export interface AccessSiteProtocol {
  siteType: AccessSiteType;
  siteName: string;
  recommendedHemostasis: HemostasisDevice[];
  immobilizationHours: number;
  immobilizationInstructions: string;
  vitalMonitoringSchedule: string;
  localSiteExaminationChecklist: string[];
  distalPerfusionChecklist: string[];
  redFlagsForImmediateSurveillance: string[];
}

export interface AnalgesiaProtocol {
  tier: AnalgesiaTier;
  label: string;
  indications: string[];
  primaryScheduled: string[];
  breakthroughSos: string[];
  adjunctiveTherapy: string[];
  monitoringParameters: string[];
}

export const ACCESS_SITE_PROTOCOLS: Record<AccessSiteType, AccessSiteProtocol> = {
  ARTERIAL_FEMORAL: {
    siteType: "ARTERIAL_FEMORAL",
    siteName: "Common Femoral Artery (CFA) Access",
    recommendedHemostasis: ["MANUAL_COMPRESSION", "VCD_PERCLOSE_PROGLIDE", "VCD_ANGIO_SEAL"],
    immobilizationHours: 6, // 6-8 hrs manual, 2-4 hrs VCD
    immobilizationInstructions:
      "Strict flat bed rest. Keep punctured limb strictly extended and straight. Do not flex hip, bend knee, or sit upright. Head of bed may be elevated maximum 15-20 degrees for meal ingestion after 4 hours if groin is stable.",
    vitalMonitoringSchedule:
      "Vital signs and groin check every 15 min for 1 hour, every 30 min for 2 hours, then hourly for 4 hours, then 4-hourly until ambulation.",
    localSiteExaminationChecklist: [
      "Palpate groin gently for expanding hematoma or subcutaneous firmness",
      "Inspect skin for active oozing, frank bleeding, or spreading ecchymosis",
      "Auscultate puncture site for continuous machinery murmur or bruit (? Arteriovenous Fistula)",
      "Palpate for pulsatile mass or systolic thrill (? False / Pseudoaneurysm)",
      "Mark hematoma border with surgical skin marker if swelling is present to track expansion"
    ],
    distalPerfusionChecklist: [
      "Palpate distal Dorsalis Pedis (DP) and Posterior Tibial (PT) pulses bilaterally",
      "Assess capillary refill time in digits (< 2 seconds normal)",
      "Evaluate skin temperature and color of bilateral feet (warm and pink vs cold/pale/cyanotic)",
      "Examine motor and sensory function (active toe wiggling, normal light touch sensation)",
      "Palpate calf muscle compartments for severe pain, tenseness, or pain on passive dorsiflexion (? Compartment Syndrome)"
    ],
    redFlagsForImmediateSurveillance: [
      "Rapidly expanding, firm, or painful groin swelling (suspected active retroperitoneal or groin hematoma)",
      "Loss of palpable pedal pulse or delayed capillary refill > 3 seconds in punctured extremity",
      "Sudden hypotension, tachycardia, diaphoresis, or flank/back pain (high risk Retroperitoneal Bleed)",
      "Cold, pale, pulseless extremity (acute femoral thrombosis or distal embolic shower)"
    ]
  },

  ARTERIAL_RADIAL: {
    siteType: "ARTERIAL_RADIAL",
    siteName: "Radial Artery (Transradial) Access",
    recommendedHemostasis: ["RADIAL_TR_BAND"],
    immobilizationHours: 2,
    immobilizationInstructions:
      "Arm kept in supportive sling for 2 hours. Patient may ambulate immediately. Avoid wrist flexion, heavy lifting (>2 kg), or bearing weight on the punctured wrist for 24 hours.",
    vitalMonitoringSchedule:
      "Pulse oximetry and radial puncture site check every 15 min for 1 hour, then every 30 min until TR-band deflation and removal.",
    localSiteExaminationChecklist: [
      "Confirm patent hemostasis (plethysmographic signal on ipsilateral index finger with ulnar compression)",
      "Inspect puncture site for swelling, hematoma, or active ooze around pneumatic bladder",
      "Perform staged bladder deflation (typically 2-3 mL air withdrawal every 15-20 min after 90 min)"
    ],
    distalPerfusionChecklist: [
      "Assess ipsilateral radial and ulnar pulses",
      "Evaluate thumb/index capillary refill (< 2 seconds)",
      "Check hand temperature, palmar erythema, and sensory intactness over median/radial nerve distribution",
      "Monitor for wrist/forearm swelling or progressive severe forearm tightness (? Compartment Syndrome)"
    ],
    redFlagsForImmediateSurveillance: [
      "Expanding forearm hematoma or tense wrist swelling",
      "Cyanotic, cold, or numb fingers (acute radial occlusion without adequate palmar collateral flow)",
      "Active arterial bleeding on early band release requiring immediate re-inflation"
    ]
  },

  ARTERIAL_BRACHIAL: {
    siteType: "ARTERIAL_BRACHIAL",
    siteName: "Brachial Artery Access",
    recommendedHemostasis: ["MANUAL_COMPRESSION", "PRESSURE_DRESSING"],
    immobilizationHours: 4,
    immobilizationInstructions:
      "Arm immobilized straight with elbow armboard for 4 hours. No active elbow flexion or lifting.",
    vitalMonitoringSchedule: "Every 15 min for 1 hour, then every 30 min for 2 hours, then hourly.",
    localSiteExaminationChecklist: [
      "Check cubital fossa for deep hematoma (brachial artery lacks bony backstop)",
      "Auscultate for bruit or pseudoaneurysm",
      "Check median nerve sensory and motor function"
    ],
    distalPerfusionChecklist: [
      "Radial and ulnar pulses palpation",
      "Digital capillary refill and warmth",
      "Volar forearm compartment tightness check"
    ],
    redFlagsForImmediateSurveillance: [
      "Progressive median nerve numbness or severe forearm pain (high risk Volkmann's ischemia)"
    ]
  },

  VENOUS_FEMORAL: {
    siteType: "VENOUS_FEMORAL",
    siteName: "Common Femoral Vein Access",
    recommendedHemostasis: ["MANUAL_COMPRESSION", "PRESSURE_DRESSING"],
    immobilizationHours: 4,
    immobilizationInstructions:
      "Bed rest for 4 hours with leg straight. Pressure bandage over groin. May sit up after 3 hours if no oozing.",
    vitalMonitoringSchedule: "Groin check at 15 min, 30 min, 1 hr, 2 hr, and 4 hr.",
    localSiteExaminationChecklist: [
      "Inspect groin for continuous dark venous ooze",
      "Palpate for soft non-pulsatile hematoma",
      "Verify absence of arterial puncture or AV fistula"
    ],
    distalPerfusionChecklist: [
      "Evaluate limb edema and calf tenderness (? acute deep venous thrombosis)",
      "Check pedal pulses and foot warmth"
    ],
    redFlagsForImmediateSurveillance: [
      "Persistent venous bleeding through compression dressing",
      "Acute gross ipsilateral leg swelling and calf firmness (? DVT)"
    ]
  },

  VENOUS_INTERNAL_JUGULAR: {
    siteType: "VENOUS_INTERNAL_JUGULAR",
    siteName: "Internal Jugular Vein (IJV) Access (TIPS / Permcath / TJLB)",
    recommendedHemostasis: ["MANUAL_COMPRESSION", "PRESSURE_DRESSING"],
    immobilizationHours: 2,
    immobilizationInstructions:
      "Bed rest for 2 hours with head elevated 30 degrees. Avoid excessive neck rotation, coughing, or straining.",
    vitalMonitoringSchedule: "Neck check and vitals every 30 min for 2 hours, then q2h.",
    localSiteExaminationChecklist: [
      "Inspect right neck puncture site for swelling, ecchymosis, or expanding hematoma",
      "Verify midline position of the trachea (rule out compressive neck hematoma)",
      "Auscultate neck for carotid bruit (rule out accidental carotid artery puncture)"
    ],
    distalPerfusionChecklist: [
      "Respiratory effort and oxygen saturation (rule out apical pneumothorax or hemothorax)",
      "Neurological exam for voice hoarseness (recurrent laryngeal nerve irritation)"
    ],
    redFlagsForImmediateSurveillance: [
      "Expanding neck hematoma, stridor, respiratory distress, or tracheal shift (immediate surgical emergency)",
      "Sudden desaturation, tachypnea, or ipsilateral diminished breath sounds (? Pneumothorax)"
    ]
  },

  VENOUS_SUBCLAVIAN: {
    siteType: "VENOUS_SUBCLAVIAN",
    siteName: "Subclavian / Axillary Vein Access (ChemoPort / Central Line)",
    recommendedHemostasis: ["MANUAL_COMPRESSION", "PRESSURE_DRESSING"],
    immobilizationHours: 2,
    immobilizationInstructions: "Immobilize shoulder and ipsilateral arm for 2 hours. Routine Chest X-ray at 2-4 hours.",
    vitalMonitoringSchedule: "Every 30 min for 2 hours, then q2h.",
    localSiteExaminationChecklist: ["Check infraclavicular pocket and puncture site for hematoma and ooze"],
    distalPerfusionChecklist: ["Respiratory status and CXR confirmation of lung expansion"],
    redFlagsForImmediateSurveillance: ["Pneumothorax, subcutaneous emphysema, or pocket hematoma"]
  },

  PICC_UPPER_EXTREMITY: {
    siteType: "PICC_UPPER_EXTREMITY",
    siteName: "Basilic / Brachial / Cephalic Vein Access (PICC / Midline)",
    recommendedHemostasis: ["PRESSURE_DRESSING"],
    immobilizationHours: 1,
    immobilizationInstructions:
      "Keep arm elevated on pillow when resting. Immediate gentle ambulation allowed. No strenuous arm lifting or blood pressure cuffs on access arm.",
    vitalMonitoringSchedule: "Site check at 30 min, 1 hour, and 4 hours.",
    localSiteExaminationChecklist: [
      "Inspect sterile transparent dressing for bleeding, strike-through, or clear exudate",
      "Check catheter external length / centimeter mark against insertion record",
      "Assess skin along vein trajectory for erythema, warmth, or induration (? Phlebitis)"
    ],
    distalPerfusionChecklist: ["Check hand and forearm for swelling or paresthesias"],
    redFlagsForImmediateSurveillance: [
      "Catheter dislodgement / migration",
      "Cord-like tender induration along upper arm vein (superficial thrombophlebitis)",
      "Signs of catheter-related bloodstream infection (fever, chills, purulent insertion site)"
    ]
  },

  DIRECT_PERCUTANEOUS: {
    siteType: "DIRECT_PERCUTANEOUS",
    siteName: "Direct Percutaneous Drainage / Biopsy Site (PTBD / PCD / PCN)",
    recommendedHemostasis: ["PRESSURE_DRESSING"],
    immobilizationHours: 4,
    immobilizationInstructions:
      "Bed rest for 4 hours. Keep catheter secured with suture and StatLock. Catheter drainage bag dependent.",
    vitalMonitoringSchedule: "Drain output and dressing check every 30 min for 2 hours, then q2h.",
    localSiteExaminationChecklist: [
      "Inspect dressing for bile, urine, pus, or blood leakage around catheter entry",
      "Inspect catheter three-way stopcock and fixation suture integrity",
      "Monitor drainage fluid volume, color, and sediment in collecting bag"
    ],
    distalPerfusionChecklist: ["Abdominal exam for peritonitis, rebound tenderness, or flank guarding"],
    redFlagsForImmediateSurveillance: [
      "Sudden cessation of drainage accompanied by severe acute pain or fever",
      "Gross continuous fresh arterial blood in drainage bag or around puncture tract",
      "Catheter accidental dislodgement or migration outside biliary/urinary system"
    ]
  }
};

export const ANALGESIA_PROTOCOLS: Record<AnalgesiaTier, AnalgesiaProtocol> = {
  TIER_1_MILD: {
    tier: "TIER_1_MILD",
    label: "Tier 1: Mild Post-Procedure Discomfort (Biopsy, PICC, Diagnostic Angiography)",
    indications: ["Image-guided Biopsy", "PICC / Midline Line Insertion", "Diagnostic Angiography", "Sclerotherapy"],
    primaryScheduled: ["Tab Paracetamol 650 mg PO Q8H as needed"],
    breakthroughSos: ["Tab Tramadol 50 mg + Paracetamol 325 mg PO SOS for pain score > 4/10"],
    adjunctiveTherapy: ["Local cold pack application (avoiding moisture on dressing)"],
    monitoringParameters: ["Pain score on Visual Analog Scale (VAS 0-10) q4h"]
  },

  TIER_2_MODERATE: {
    tier: "TIER_2_MODERATE",
    label: "Tier 2: Moderate Visceral / Vascular Pain (Varicose Veins, BAE, Fibroid Embolization, PTBD)",
    indications: [
      "Varicose Vein Endovenous Ablation (VenaSeal / EVLA)",
      "Bronchial Artery Embolization (BAE)",
      "Uterine Artery / Fibroid Embolization (UAE / UFE)",
      "PTBD & Biliary Stenting",
      "Percutaneous Nephrostomy"
    ],
    primaryScheduled: [
      "Inj. Paracetamol 1 g IV TDS (every 8 hours) scheduled for 24 hours",
      "Inj. Pantoprazole 40 mg IV OD (gastric mucosal protection)"
    ],
    breakthroughSos: [
      "Inj. Tramadol 50 mg IV in 100 mL NS over 15 min SOS (maximum 200 mg/day)",
      "Inj. Ketorolac 30 mg IV / IM SOS (if renal function normal: eGFR > 60 mL/min)"
    ],
    adjunctiveTherapy: [
      "Inj. Ondansetron 4 mg IV TDS (prevent nausea/emesis from opioids and visceral reflexes)",
      "Tab Drotaverine 80 mg PO / IV for biliary or ureteric colic spasms"
    ],
    monitoringParameters: ["Pain score VAS q2h for 6 hours then q4h", "Nausea assessment", "Urine output"]
  },

  TIER_3_SEVERE_PES: {
    tier: "TIER_3_SEVERE_PES",
    label: "Tier 3: Severe Pain & Post-Embolization Syndrome (TACE, Splenic PSA, Renal Embolization, Ablation)",
    indications: [
      "Transarterial Chemoembolization (TACE)",
      "Splenic Artery Pseudoaneurysm / Trauma Embolization",
      "Renal Artery Embolization / AML",
      "Hepatic / Lung / Bone Tumor Ablation (RFA / MWA / Cryo)",
      "Complex Pelvic Embolization"
    ],
    primaryScheduled: [
      "Inj. Paracetamol 1 g IV Q8H scheduled around the clock for 48 hours",
      "Inj. Dexamethasone 8 mg IV once daily for 2 days (attenuates Post-Embolization Syndrome inflammatory cytokine surge)",
      "Inj. Pantoprazole 40 mg IV BD",
      "Inj. Ondansetron 8 mg IV TDS scheduled"
    ],
    breakthroughSos: [
      "Inj. Fentanyl 50-100 mcg IV slow push over 2 min SOS for breakthrough VAS > 7/10 (Cath-Lab / PACU)",
      "Inj. Morphine 3-5 mg IV q4h SOS OR Patient-Controlled Analgesia (PCA)",
      "Inj. Tramadol 100 mg IV infusion over 30 min SOS"
    ],
    adjunctiveTherapy: [
      "Hydration: IV Normal Saline at 100 mL/hr to maintain robust diuresis (>1 mL/kg/hr) to clear tumor lysis products",
      "Antipyretic protocol: Cold sponging and Paracetamol IV for aseptic Post-Embolization pyrexia"
    ],
    monitoringParameters: [
      "Continuous Sedation Scale (RASS or Ramsay) during opioid administration",
      "Respiratory rate (withhold opioids if RR < 10 breaths/min)",
      "Strict fluid intake and output charting"
    ]
  }
};

/**
 * Returns tailored post-op puncture and analgesia advice bullets for clinical documentation
 */
export function getTailoredPostOpAdvice(
  siteType: AccessSiteType,
  analgesiaTier: AnalgesiaTier,
  options?: { isVcdUsed?: boolean; sheathFrench?: number }
): string[] {
  const protocol = ACCESS_SITE_PROTOCOLS[siteType] || ACCESS_SITE_PROTOCOLS.ARTERIAL_FEMORAL;
  const analgesia = ANALGESIA_PROTOCOLS[analgesiaTier] || ANALGESIA_PROTOCOLS.TIER_2_MODERATE;

  const hours = options?.isVcdUsed ? Math.min(protocol.immobilizationHours, 3) : protocol.immobilizationHours;
  const vcdNote = options?.isVcdUsed ? " (Vascular Closure Device deployed: expedited bedrest)" : "";

  return [
    `Immobilization: Strict bed rest for ${hours} hours${vcdNote}. ${protocol.immobilizationInstructions}`,
    `Local Puncture Monitoring: ${protocol.vitalMonitoringSchedule}. Inspect site for: ${protocol.localSiteExaminationChecklist.join("; ")}.`,
    `Distal Limb Perfusion: Check distal pulses, capillary refill (<2s), skin warmth, and sensation: ${protocol.distalPerfusionChecklist.join("; ")}.`,
    `Analgesia Scheduled: ${analgesia.primaryScheduled.join(" + ")}.`,
    `Analgesia Breakthrough (SOS): ${analgesia.breakthroughSos.join("; ")}.`,
    `Adjuncts: ${analgesia.adjunctiveTherapy.join("; ")}.`,
    `Red Flag Emergencies: Notify IR Resident immediately for: ${protocol.redFlagsForImmediateSurveillance.join("; ")}.`
  ];
}
