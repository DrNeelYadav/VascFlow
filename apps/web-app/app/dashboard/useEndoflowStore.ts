import { create } from "zustand";
import { z } from "zod";
import {
  StaffAccount,
  INSTITUTIONAL_STAFF_ACCOUNTS,
} from "../lib/staffAccounts";

// ============================================================================
// STRICT ZOD VALIDATION SCHEMAS & TYPES (ZERO VULNERABILITIES)
// ============================================================================

export const ClinicalStageSchema = z.enum([
  "Scheduled",
  "Pre-Op Pending",
  "In Cath-Lab",
  "Post-Op ICU",
  "Discharged",
]);

export type ClinicalStage = z.infer<typeof ClinicalStageSchema>;

export const ModalityTypeSchema = z.enum(["XA", "CT", "US", "ROSE"]);
export type ModalityType = z.infer<typeof ModalityTypeSchema>;

export const LabsSchema = z.object({
  ast: z.number().default(25),
  alt: z.number().default(25),
  bili: z.number().default(0.8),
  ldh: z.number().default(180),
  alb: z.number().default(4.0),
  creat: z.number().default(0.9),
  inr: z.number().default(1.1),
  plt: z.number().default(220000),
  fib: z.number().default(280),
  protc: z.number().default(85),
  prots: z.number().default(90),
  ascitesGrade: z.string().default("none"),
});
export type Labs = z.infer<typeof LabsSchema>;

export const IpdLocationSchema = z.object({
  admissionType: z.string().default("IPD"),
  ward: z.string().default("IR Ward D-Block"),
  bed: z.string().default("Bed 01"),
  podDay: z.string().default("Pre-Op"),
});
export type IpdLocation = z.infer<typeof IpdLocationSchema>;

export const PreOpPrepSchema = z.object({
  bedLocation: z.string().default("Ward D-Block"),
  npoHours: z.number().min(0).default(6),
  inrChecked: z.boolean().default(true),
  creatinineChecked: z.boolean().default(true),
  consentSigned: z.boolean().default(true),
  ivCannulaGauge: z.string().default("18G Green"),
  calledToLab: z.boolean().default(false),
  labCleared: z.boolean().default(true),
});
export type PreOpPrep = z.infer<typeof PreOpPrepSchema>;

export const InRoomTelemetrySchema = z.object({
  activeSheathAccess: z.string().default("6F Right Common Femoral Artery"),
  elapsedFluoroSeconds: z.number().min(0).default(0),
  contrastInjectedMl: z.number().min(0).default(0),
  macdThresholdMl: z.number().min(1).default(180),
  vitals: z.string().default("120/80 mmHg, HR 72, SpO2 99%"),
  targetArtery: z.string().default("Target Territory"),
  cathetersInUse: z.array(z.string()).default([]),
  currentStepDescription: z.string().default("Diagnostic Roadmapping Angiogram"),
});
export type InRoomTelemetry = z.infer<typeof InRoomTelemetrySchema>;

export const PostOpMonitoringSchema = z.object({
  recoveryBed: z.string().default("Cath-Lab Holding Rec-01"),
  punctureSiteSeal: z.enum([
    "Hemostasis Intact",
    "Mild Oozing - Pressure Applied",
    "Femoral Compression Device",
    "Angio-Seal Deployed",
  ]).default("Hemostasis Intact"),
  distalPulses: z.enum([
    "Strong (+++)",
    "Palpable (++)",
    "Weak (+) - Doppler Required",
    "Absent (0) - STAT Alert",
  ]).default("Strong (+++)"),
  instructions: z.string().default("Flat supine bed rest for 4 hours. Push oral fluids for contrast clearance."),
  sheathRemoved: z.boolean().default(true),
  dischargeReady: z.boolean().default(false),
});
export type PostOpMonitoring = z.infer<typeof PostOpMonitoringSchema>;

export const ProceduralAttachmentSchema = z.object({
  id: z.string(),
  title: z.string(),
  modality: z.enum(["XA", "CT", "US", "MRI", "PHOTO"]).default("XA"),
  capturedAt: z.string(),
  dataUrl: z.string(),
  caption: z.string(),
});
export type ProceduralAttachment = z.infer<typeof ProceduralAttachmentSchema>;

export const EndoflowPatientSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  age: z.number().min(0).max(130),
  sex: z.enum(["Male", "Female"]),
  hid: z.string().min(1), // Immutable Hospital Identifier
  scanId: z.string().min(1),
  phone: z.string().default("9829000000"),
  unit: z.string().default("Gastroenterology"),
  postedBy: z.string().default("Dr. Neel Yadav"),
  time: z.string().default("09:00 AM"),
  summary: z.string().default("Clinical presentation and indication."),
  procedureKey: z.string().min(1),
  procedure: z.string().min(1),
  modality: ModalityTypeSchema,
  status: ClinicalStageSchema,
  scheme: z.string().default("MAAY"),
  schemeTid: z.string().default("TID-9482103"),
  beneficiaryId: z.string().default("Jan Aadhaar 7821-9482-10"),
  preAuthStatus: z.string().default("Approved"),
  ipd: IpdLocationSchema,
  labs: LabsSchema,
  preOp: PreOpPrepSchema,
  inRoom: InRoomTelemetrySchema.optional(),
  postOp: PostOpMonitoringSchema.optional(),
  attachments: z.array(ProceduralAttachmentSchema).optional(),
});
export type EndoflowPatient = z.infer<typeof EndoflowPatientSchema>;

// ============================================================================
// INITIAL FAITHFUL DATA PORT FROM ENDOFLOW APP.JS (PT01 - PT08)
// ============================================================================

export const INITIAL_ENDOFLOW_PATIENTS: EndoflowPatient[] = [
  {
    id: "PT01",
    name: "Ramswaroop Meena",
    age: 56,
    sex: "Male",
    hid: "SMS-2026-089",
    scanId: "PACS-IR-089",
    phone: "9829012345",
    unit: "Gastro Unit IV",
    postedBy: "Dr. Neel Yadav",
    time: "08:30 AM",
    summary:
      "Primary Budd-Chiari Syndrome with diffuse hepatic vein occlusion and refractory tense ascites. Rotterdam Class III. Planned for direct transcaval portosystemic decompression (DIPS).",
    procedureKey: "budd_chiari_dips",
    procedure: "Budd-Chiari Syndrome: Direct Intrahepatic Portosystemic Shunt (DIPS)",
    modality: "XA",
    status: "Post-Op ICU",
    scheme: "MAAY",
    schemeTid: "TID-9482103",
    beneficiaryId: "Jan Aadhaar 7821-9482-10",
    preAuthStatus: "Approved",
    ipd: {
      admissionType: "IPD",
      ward: "Liver ICU",
      bed: "LICU-04",
      podDay: "POD 0",
    },
    labs: {
      ast: 142,
      alt: 118,
      bili: 2.8,
      ldh: 420,
      alb: 2.9,
      creat: 0.92,
      inr: 1.45,
      plt: 125000,
      fib: 240,
      protc: 38,
      prots: 42,
      ascitesGrade: "tense",
    },
    preOp: {
      bedLocation: "Liver ICU LICU-04",
      npoHours: 8,
      inrChecked: true,
      creatinineChecked: true,
      consentSigned: true,
      ivCannulaGauge: "16G Gray Right Forearm",
      calledToLab: true,
      labCleared: true,
    },
    postOp: {
      recoveryBed: "Liver ICU Bed LICU-04",
      punctureSiteSeal: "Hemostasis Intact",
      distalPulses: "Strong (+++)",
      instructions: "Target portosystemic gradient achieved: 6 mmHg. Maintain therapeutic heparin bridging. Doppler ultrasound at 24h.",
      sheathRemoved: true,
      dischargeReady: false,
    },
  },
  {
    id: "PT02",
    name: "Kamla Devi Sharma",
    age: 62,
    sex: "Female",
    hid: "SMS-2026-092",
    scanId: "PACS-IR-092",
    phone: "9414098765",
    unit: "Vascular Surgery Unit II",
    postedBy: "Dr. Ayushi Agarwal",
    time: "10:00 AM",
    summary:
      "Severe right lower limb claudication (Rutherford 3) with SFA critical stenosis. Planned for contralateral crossover femoral access, balloon angioplasty, and nitinol stenting.",
    procedureKey: "pad_sfa_angioplasty",
    procedure: "Peripheral Arterial Angioplasty & Nitinol Stenting (SFA / Popliteal)",
    modality: "XA",
    status: "Scheduled",
    scheme: "RGHS",
    schemeTid: "TID-8812903",
    beneficiaryId: "RGHS RJ-992140",
    preAuthStatus: "Approved",
    ipd: {
      admissionType: "IPD",
      ward: "IR Dedicated Ward (D-Block)",
      bed: "Bed 12",
      podDay: "Pre-Op",
    },
    labs: {
      ast: 24,
      alt: 28,
      bili: 0.8,
      ldh: 180,
      alb: 4.1,
      creat: 1.05,
      inr: 1.08,
      plt: 245000,
      fib: 310,
      protc: 88,
      prots: 92,
      ascitesGrade: "none",
    },
    preOp: {
      bedLocation: "IR Ward D-12",
      npoHours: 6,
      inrChecked: true,
      creatinineChecked: true,
      consentSigned: true,
      ivCannulaGauge: "18G Green Left Forearm",
      calledToLab: false,
      labCleared: true,
    },
  },
  {
    id: "PT03",
    name: "Rajesh Kumawat",
    age: 44,
    sex: "Male",
    hid: "SMS-2026-104",
    scanId: "PACS-IR-104",
    phone: "9828112233",
    unit: "Chest Medicine Unit I",
    postedBy: "Dr. Neel Yadav",
    time: "11:15 AM",
    summary:
      "Massive hemoptysis (>400 mL in 24h) secondary to cavitary post-TB bronchiectasis in right upper lobe. Hypertrophied intercostobronchial trunk identified on CTA.",
    procedureKey: "bae_hemoptysis",
    procedure: "Bronchial Artery Embolization (BAE) for Massive Hemoptysis",
    modality: "XA",
    status: "In Cath-Lab",
    scheme: "MAAY",
    schemeTid: "TID-7719234",
    beneficiaryId: "Jan Aadhaar 5512-8821-33",
    preAuthStatus: "Approved",
    ipd: {
      admissionType: "Emergency",
      ward: "Cath-Lab Holding",
      bed: "PACU-01",
      podDay: "In Cath-Lab",
    },
    labs: {
      ast: 32,
      alt: 35,
      bili: 0.9,
      ldh: 210,
      alb: 3.7,
      creat: 0.88,
      inr: 1.12,
      plt: 195000,
      fib: 270,
      protc: 90,
      prots: 88,
      ascitesGrade: "none",
    },
    preOp: {
      bedLocation: "PACU-01",
      npoHours: 6,
      inrChecked: true,
      creatinineChecked: true,
      consentSigned: true,
      ivCannulaGauge: "18G Green Right Forearm",
      calledToLab: true,
      labCleared: true,
    },
    inRoom: {
      activeSheathAccess: "5F Right Common Femoral Artery Sheath",
      elapsedFluoroSeconds: 878, // 14m 38s
      contrastInjectedMl: 48,
      macdThresholdMl: 250,
      vitals: "110/72 mmHg, HR 102, SpO2 95%",
      targetArtery: "Right Intercostobronchial Trunk & RBA Branches",
      cathetersInUse: ["5F Mikaelsson Diagnostic", "2.4F Progreat Microcatheter", "355-500 um PVA"],
      currentStepDescription: "Superselective cannulation of tortuous bronchial branches. PVA particle embolization in progress.",
    },
  },
  {
    id: "PT04",
    name: "Shanti Bai",
    age: 49,
    sex: "Female",
    hid: "SMS-2026-115",
    scanId: "PACS-IR-115",
    phone: "9829554433",
    unit: "Medical Oncology Unit II",
    postedBy: "Dr. Rahul Verma",
    time: "01:00 PM",
    summary:
      "Solitary segment VI hepatic SOL (3.2 cm) detected on routine sonography. Targeted coaxial 18G core needle biopsy requested for histopathology and immunohistochemistry.",
    procedureKey: "core_biopsy",
    procedure: "USG-Guided Coaxial Core Needle Liver Biopsy",
    modality: "US",
    status: "Discharged",
    scheme: "GENERAL",
    schemeTid: "N/A",
    beneficiaryId: "CR-992140",
    preAuthStatus: "Approved",
    ipd: {
      admissionType: "Day-Care",
      ward: "Cath-Lab Recovery",
      bed: "Rec-03",
      podDay: "Discharge Ready",
    },
    labs: {
      ast: 44,
      alt: 48,
      bili: 1.1,
      ldh: 260,
      alb: 3.8,
      creat: 0.76,
      inr: 1.04,
      plt: 215000,
      fib: 290,
      protc: 95,
      prots: 92,
      ascitesGrade: "none",
    },
    preOp: {
      bedLocation: "Cath Recovery Rec-03",
      npoHours: 4,
      inrChecked: true,
      creatinineChecked: true,
      consentSigned: true,
      ivCannulaGauge: "20G Pink",
      calledToLab: true,
      labCleared: true,
    },
    postOp: {
      recoveryBed: "Cath Recovery Rec-03",
      punctureSiteSeal: "Hemostasis Intact",
      distalPulses: "Strong (+++)",
      instructions: "Right lateral decubitus positioning maintained for 4 hours. Stable vitals. Discharged with oral analgesics.",
      sheathRemoved: true,
      dischargeReady: true,
    },
  },
  {
    id: "PT05",
    name: "Rameshwar Lal",
    age: 64,
    sex: "Male",
    hid: "SMS-2026-128",
    scanId: "PACS-CT-128",
    phone: "9829123488",
    unit: "Pulmonary Medicine Unit III",
    postedBy: "Dr. Neel Yadav",
    time: "02:00 PM",
    summary:
      "CT Thorax demonstrates 2.8 cm subsolid cavitary nodule in left upper lobe abutting visceral pleura. Coaxial 18G core needle biopsy under real-time CT fluoroscopy guidance.",
    procedureKey: "ct_biopsy",
    procedure: "CT-Guided Coaxial Core Needle Lung Biopsy",
    modality: "CT",
    status: "Pre-Op Pending",
    scheme: "MAAY",
    schemeTid: "TID-8812492",
    beneficiaryId: "Jan Aadhaar 4410-9982-12",
    preAuthStatus: "Approved",
    ipd: {
      admissionType: "IPD",
      ward: "IR Dedicated Ward (D-Block)",
      bed: "Bed 08",
      podDay: "Pre-Op",
    },
    labs: {
      ast: 28,
      alt: 30,
      bili: 0.7,
      ldh: 190,
      alb: 4.0,
      creat: 0.95,
      inr: 1.05,
      plt: 260000,
      fib: 320,
      protc: 92,
      prots: 90,
      ascitesGrade: "none",
    },
    preOp: {
      bedLocation: "IR Ward D-08",
      npoHours: 6,
      inrChecked: true,
      creatinineChecked: true,
      consentSigned: true,
      ivCannulaGauge: "18G Green Right Hand",
      calledToLab: false,
      labCleared: true,
    },
  },
  {
    id: "PT06",
    name: "Sunita Sharma",
    age: 48,
    sex: "Female",
    hid: "SMS-2026-134",
    scanId: "PACS-CT-134",
    phone: "9414238811",
    unit: "Thoracic Surgery Unit I",
    postedBy: "Dr. Ayushi Agarwal",
    time: "02:45 PM",
    summary:
      "Contrast-enhanced CT chest shows 4.5 cm pre-vascular anterior mediastinal mass. Parasternal extrapleural CT-guided core biopsy to differentiate Thymoma vs Lymphoma.",
    procedureKey: "ct_biopsy",
    procedure: "CT-Guided Parasternal Mediastinal Mass Biopsy",
    modality: "CT",
    status: "Pre-Op Pending",
    scheme: "RGHS",
    schemeTid: "TID-7729104",
    beneficiaryId: "RGHS RJ-558291",
    preAuthStatus: "Approved",
    ipd: {
      admissionType: "Day-Care",
      ward: "Cath-Lab Recovery",
      bed: "Rec-04",
      podDay: "Pre-Op",
    },
    labs: {
      ast: 22,
      alt: 25,
      bili: 0.6,
      ldh: 175,
      alb: 4.2,
      creat: 0.82,
      inr: 1.02,
      plt: 230000,
      fib: 300,
      protc: 94,
      prots: 91,
      ascitesGrade: "none",
    },
    preOp: {
      bedLocation: "Cath Recovery Rec-04",
      npoHours: 5,
      inrChecked: true,
      creatinineChecked: true,
      consentSigned: true,
      ivCannulaGauge: "20G Pink Left Arm",
      calledToLab: false,
      labCleared: true,
    },
  },
  {
    id: "PT07",
    name: "Maya Devi",
    age: 42,
    sex: "Female",
    hid: "SMS-2026-141",
    scanId: "PACS-US-141",
    phone: "9828445566",
    unit: "Endocrine Surgery Unit I",
    postedBy: "Dr. Neel Yadav",
    time: "03:30 PM",
    summary:
      "EU-TIRADS 5 right thyroid nodule (1.8 cm, punctate echogenic foci, taller-than-wide). USG-guided 23G FNAC performed with Rapid On-Site Evaluation (ROSE) confirming follicular neoplasm (Bethesda IV).",
    procedureKey: "fnac_clinic",
    procedure: "USG-Guided Thyroid FNAC with ROSE",
    modality: "ROSE",
    status: "Discharged",
    scheme: "MAAY",
    schemeTid: "TID-6629102",
    beneficiaryId: "Jan Aadhaar 9912-3344-55",
    preAuthStatus: "Approved",
    ipd: {
      admissionType: "Day-Care",
      ward: "Cath-Lab Recovery",
      bed: "Rec-01",
      podDay: "Discharge Ready",
    },
    labs: {
      ast: 20,
      alt: 22,
      bili: 0.5,
      ldh: 160,
      alb: 4.3,
      creat: 0.70,
      inr: 1.00,
      plt: 275000,
      fib: 280,
      protc: 98,
      prots: 96,
      ascitesGrade: "none",
    },
    preOp: {
      bedLocation: "Cath Recovery Rec-01",
      npoHours: 4,
      inrChecked: true,
      creatinineChecked: true,
      consentSigned: true,
      ivCannulaGauge: "22G Blue",
      calledToLab: true,
      labCleared: true,
    },
    postOp: {
      recoveryBed: "Cath Recovery Rec-01",
      punctureSiteSeal: "Hemostasis Intact",
      distalPulses: "Strong (+++)",
      instructions: "No neck hematoma. Ice pack applied for 30 mins. Cytology slides dispatched to pathology.",
      sheathRemoved: true,
      dischargeReady: true,
    },
  },
  {
    id: "PT08",
    name: "Surendra Yadav",
    age: 51,
    sex: "Male",
    hid: "SMS-2026-147",
    scanId: "PACS-US-147",
    phone: "9414556677",
    unit: "ENT Unit II",
    postedBy: "Dr. Rahul Verma",
    time: "04:15 PM",
    summary:
      "Enlarged matted right level III cervical lymph nodes (2.4 cm) with central necrotic breakdown. 22G USG-guided FNAC with ROSE for GeneXpert MTB/RIF and cytology.",
    procedureKey: "fnac_clinic",
    procedure: "USG-Guided Cervical Lymph Node FNAC with ROSE",
    modality: "ROSE",
    status: "Scheduled",
    scheme: "GENERAL",
    schemeTid: "N/A",
    beneficiaryId: "CR-147029",
    preAuthStatus: "Approved",
    ipd: {
      admissionType: "Day-Care",
      ward: "Cath-Lab Recovery",
      bed: "Rec-02",
      podDay: "Pre-Op",
    },
    labs: {
      ast: 26,
      alt: 28,
      bili: 0.7,
      ldh: 185,
      alb: 4.1,
      creat: 0.85,
      inr: 1.03,
      plt: 250000,
      fib: 295,
      protc: 91,
      prots: 89,
      ascitesGrade: "none",
    },
    preOp: {
      bedLocation: "Cath Recovery Rec-02",
      npoHours: 4,
      inrChecked: true,
      creatinineChecked: true,
      consentSigned: true,
      ivCannulaGauge: "20G Pink",
      calledToLab: false,
      labCleared: true,
    },
  },
];

// ============================================================================
// 8-BED INPATIENT MATRIX (3 ICU BEDS & 5 WARD BEDS)
// ============================================================================

export const BedStatusSchema = z.enum(["occupied", "vacant", "cleaning"]);
export type BedStatus = z.infer<typeof BedStatusSchema>;

export interface BedRecord {
  id: string;
  type: "ICU" | "Ward";
  title: string;
  status: BedStatus;
  ptName: string;
  crNo: string;
  diag: string;
  doctor: string;
  vitals?: string;
  hemostasisIntact?: boolean;
  distalPulses?: string;
  ptId?: string;
}

export const INITIAL_8_BEDS: BedRecord[] = [
  // 3 ICU Beds
  {
    id: "ICU-01",
    type: "ICU",
    title: "Liver ICU Bed 01",
    status: "occupied",
    ptName: "Govind Ram",
    crNo: "SMS-2026-077",
    diag: "Post-TIPS POD 1 • Portosystemic Gradient 6 mmHg",
    doctor: "Dr. Neel Yadav",
    vitals: "122/78 mmHg, HR 74, SpO2 98%",
    hemostasisIntact: true,
    distalPulses: "Strong (+++)",
    ptId: "PT01",
  },
  {
    id: "ICU-02",
    type: "ICU",
    title: "Liver ICU Bed 02",
    status: "occupied",
    ptName: "Kailash Chand",
    crNo: "SMS-2026-081",
    diag: "Acute BCS Post-Angioplasty POD 2",
    doctor: "Dr. Nilesh Bansal",
    vitals: "118/74 mmHg, HR 80, SpO2 99%",
    hemostasisIntact: true,
    distalPulses: "Palpable (++)",
  },
  {
    id: "ICU-03",
    type: "ICU",
    title: "Liver ICU Bed 03",
    status: "vacant",
    ptName: "-",
    crNo: "-",
    diag: "Ready for Emergency STAT Admission",
    doctor: "-",
    vitals: "-",
    hemostasisIntact: true,
    distalPulses: "-",
  },

  // 5 Ward Beds
  {
    id: "Ward-01",
    type: "Ward",
    title: "IR Ward Bed 01",
    status: "occupied",
    ptName: "Kamla Devi Sharma",
    crNo: "SMS-2026-092",
    diag: "SFA Critical Limb Ischemia • Scheduled Stenting",
    doctor: "Dr. Pragati Sharma",
    vitals: "130/84 mmHg, HR 68, SpO2 97%",
    hemostasisIntact: true,
    distalPulses: "Weak (+) - Doppler Verified",
    ptId: "PT02",
  },
  {
    id: "Ward-02",
    type: "Ward",
    title: "IR Ward Bed 02",
    status: "occupied",
    ptName: "Anita Bairwa",
    crNo: "SMS-2026-104",
    diag: "Symptomatic Uterine Fibroids • Pre-UAE",
    doctor: "Dr. Sahil Verma",
    vitals: "116/72 mmHg, HR 72, SpO2 100%",
    hemostasisIntact: true,
    distalPulses: "Strong (+++)",
    ptId: "PT05",
  },
  {
    id: "Ward-03",
    type: "Ward",
    title: "IR Ward Bed 03",
    status: "occupied",
    ptName: "Mahesh Choudhary",
    crNo: "SMS-2026-111",
    diag: "BPH / LUTS • Planned PAE",
    doctor: "Dr. Neel Yadav",
    vitals: "128/80 mmHg, HR 76, SpO2 98%",
    hemostasisIntact: true,
    distalPulses: "Strong (+++)",
    ptId: "PT06",
  },
  {
    id: "Ward-04",
    type: "Ward",
    title: "IR Ward Bed 04",
    status: "vacant",
    ptName: "-",
    crNo: "-",
    diag: "Sterilized & Available for Elective Admission",
    doctor: "-",
    vitals: "-",
    hemostasisIntact: true,
    distalPulses: "-",
  },
  {
    id: "Ward-05",
    type: "Ward",
    title: "IR Ward Bed 05",
    status: "vacant",
    ptName: "-",
    crNo: "-",
    diag: "Sterilized & Available for Elective Admission",
    doctor: "-",
    vitals: "-",
    hemostasisIntact: true,
    distalPulses: "-",
  },
];

// ============================================================================
// DM RESIDENT OPD BOOKED CASES & REMINDERS
// ============================================================================

export function getTomorrowDateString(): string {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

export function getTodayDateString(): string {
  return new Date().toISOString().split("T")[0];
}

export const BookedCaseSchema = z.object({
  id: z.string().min(1),
  patientName: z.string().min(1),
  age: z.number().min(0).max(130),
  sex: z.enum(["Male", "Female"]),
  contactNumber: z.string().min(5),
  ssoNumber: z.string().min(1),
  location: z.string().default("Jaipur"),
  scheduledDate: z.string().min(1), // YYYY-MM-DD
  organSystem: z.string().default("Liver & Hepatobiliary"),
  diseaseKey: z.string().min(1),
  procedureTitle: z.string().min(1),
  bookedBy: z.string().default("Dr. Neel Yadav (DM01)"),
  bookedAt: z.string().default(new Date().toISOString()),
  orderedLabs: z.array(z.string()).default([]),
  specialInvestigations: z.array(z.string()).default([]),
  preScanAnatomy: z.record(z.string(), z.string()).default({}),
  hardwareChecklist: z.array(
    z.object({
      id: z.string(),
      item: z.string(),
      spec: z.string(),
      checked: z.boolean().default(false),
    })
  ).default([]),
  rotterdamScore: z.object({
    score: z.number(),
    classLevel: z.string(),
    oneYearSurvival: z.string(),
  }).optional(),
  postOpPlan: z.string().default("Post-procedure monitoring, analgesia, and hydration."),
  status: z.enum(["Scheduled", "Cath-Lab", "Completed", "Rescheduled"]).default("Scheduled"),
  npoVerified: z.boolean().default(false),
  labsVerified: z.boolean().default(false),
  bloodProductsVerified: z.boolean().default(false),
  hardwareVerified: z.boolean().default(false),
  screenedBy: z.string().nullable().default(null),
  screenedAt: z.string().nullable().default(null),
  keptForTomorrow: z.boolean().default(false),
  admissionCardUpdated: z.boolean().default(false),
  codeAdditionStatus: z.enum(["Pending", "Added", "Verified"]).default("Pending"),
  rescheduleHistory: z.array(
    z.object({
      previousDate: z.string(),
      newDate: z.string(),
      rescheduledAt: z.string(),
      reason: z.string().optional(),
    })
  ).default([]),
});

export const BookedCaseInputSchema = BookedCaseSchema.omit({
  id: true,
  bookedAt: true,
  status: true,
  rescheduleHistory: true,
});

export type BookedCaseRecord = z.infer<typeof BookedCaseSchema>;
export type BookedCaseInput = z.input<typeof BookedCaseInputSchema>;

// ============================================================================
// OPD CT REVIEW QUEUE (PATIENTS AWAITING CATH-LAB CT IMAGING CORRELATION)
// ============================================================================

export const CtReviewSchema = z.object({
  id: z.string(),
  patientName: z.string(),
  age: z.number(),
  sex: z.enum(["Male", "Female"]),
  date: z.string(),
  primaryDiagnosis: z.string(),
  ctNumber: z.string(),
  ctReviewNotes: z.string(),
  clinicalHistory: z.string().optional(),
  presentingComplaints: z.string().optional(),
  smsBillId: z.string(),
  hospitalSource: z.string().default("SONI Hospital"),
  contactNumber: z.string().default("9829000000"),
  status: z.enum([
    "Pending Review",
    "Reviewed by Neel / Nilesh",
    "To be reviewed by consultant",
    "Booking Cath-Lab on next available date",
    "Booked in Cath-Lab"
  ]).default("Pending Review"),
  reviewedBy: z.string().optional(),
  reviewedAt: z.string().optional(),
  bookedCaseId: z.string().optional(),
  organSystem: z.string().optional(),
  diseaseKey: z.string().optional(),
  procedureTitle: z.string().optional(),
});

export type CtReviewRecord = z.infer<typeof CtReviewSchema>;

// ============================================================================
// DOPPLER SURVEILLANCE RECORDS (1-Month & 3-Month Shunt/Stent Patency)
// ============================================================================

export const DopplerRecordSchema = z.object({
  id: z.string(),
  ptId: z.string(),
  name: z.string(),
  age: z.number(),
  sex: z.enum(["M", "F"]),
  crNo: z.string(),
  proc: z.string(),
  implant: z.string(),
  interval: z.enum(["1m", "3m", "completed"]),
  intervalLabel: z.string(),
  dueDate: z.string(),
  targetVessel: z.string(),
  targetVelocity: z.string(),
  status: z.enum(["Scheduled", "Due This Week", "Completed"]),
  lastPsv: z.number(),
  lastMpv: z.number(),
  patency: z.string(),
  notes: z.string(),
});
export type DopplerRecord = z.infer<typeof DopplerRecordSchema>;

export const INITIAL_DOPPLER_RECORDS: DopplerRecord[] = [
  {
    id: "DOP01",
    ptId: "PT01",
    name: "Ramswaroop Meena",
    age: 56,
    sex: "M",
    crNo: "SMS-2026-089",
    proc: "Direct Intrahepatic Portosystemic Shunt (DIPS)",
    implant: "Viatorr 10mm x 7cm covered",
    interval: "1m",
    intervalLabel: "1-Month Post-Op",
    dueDate: "01/10/2026",
    targetVessel: "Viatorr Shunt & Main PV",
    targetVelocity: "PSV: 90-190 cm/s | PV >30 cm/s",
    status: "Scheduled",
    lastPsv: 135.0,
    lastMpv: 36.5,
    patency: "Widely Patent (Normal Velocity)",
    notes: "Pre-discharge Doppler shows widely patent shunt. Scheduled for 1-Month surveillance.",
  },
  {
    id: "DOP02",
    ptId: "PT02",
    name: "Govind Ram",
    age: 52,
    sex: "M",
    crNo: "SMS-2026-077",
    proc: "TIPS for Refractory Variceal Bleed",
    implant: "Viatorr 8mm x 8cm",
    interval: "1m",
    intervalLabel: "1-Month Post-Op",
    dueDate: "04/09/2026",
    targetVessel: "TIPS Shunt Tract",
    targetVelocity: "PSV: 90-190 cm/s",
    status: "Due This Week",
    lastPsv: 142.0,
    lastMpv: 34.0,
    patency: "Widely Patent (Normal Velocity)",
    notes: "Due for 1-month post-op Doppler check this week.",
  },
  {
    id: "DOP03",
    ptId: "PT03",
    name: "Kailash Chand",
    age: 48,
    sex: "M",
    crNo: "SMS-2026-081",
    proc: "Budd-Chiari: Hepatic Vein Balloon Cavoplasty",
    implant: "Atlas 12mm High-Pressure Balloon",
    interval: "3m",
    intervalLabel: "3-Month Post-Op",
    dueDate: "05/09/2026",
    targetVessel: "Right Hepatic Vein & IVC",
    targetVelocity: "Continuous hepatofugal flow",
    status: "Due This Week",
    lastPsv: 88.0,
    lastMpv: 28.0,
    patency: "Widely Patent (Normal Velocity)",
    notes: "Due for 3-month surveillance to rule out elastic recoil or restenosis.",
  },
  {
    id: "DOP04",
    ptId: "PT04",
    name: "Kamla Devi Sharma",
    age: 62,
    sex: "F",
    crNo: "SMS-2026-092",
    proc: "SFA Angioplasty & Nitinol Stenting",
    implant: "EverFlex 6mm x 100mm Nitinol Stent",
    interval: "1m",
    intervalLabel: "1-Month Post-Op",
    dueDate: "02/10/2026",
    targetVessel: "Superficial Femoral Artery",
    targetVelocity: "PSV <150 cm/s | PSVR <2.0",
    status: "Scheduled",
    lastPsv: 110.0,
    lastMpv: 0,
    patency: "Widely Patent (Normal Velocity)",
    notes: "Bilateral pedal pulses bounding. Next check in 1 month.",
  },
  {
    id: "DOP05",
    ptId: "PT05",
    name: "Manish Saini",
    age: 34,
    sex: "M",
    crNo: "SMS-2026-SUR-402",
    proc: "May-Thurner Left Iliac Venous Stenting",
    implant: "Wallstent 14mm x 90mm",
    interval: "1m",
    intervalLabel: "1-Month Post-Op",
    dueDate: "06/09/2026",
    targetVessel: "Left Common Iliac Vein",
    targetVelocity: "Phasic venous flow with respiration",
    status: "Due This Week",
    lastPsv: 70.0,
    lastMpv: 0,
    patency: "Widely Patent (Normal Velocity)",
    notes: "Due this week for 1-month venous duplex check to evaluate in-stent flow.",
  },
  {
    id: "DOP06",
    ptId: "PT06",
    name: "Santosh Meena",
    age: 58,
    sex: "F",
    crNo: "SMS-2026-107",
    proc: "Dialysis Brachiocephalic AVF Fistuloplasty",
    implant: "Conquest 6mm x 40mm Balloon",
    interval: "3m",
    intervalLabel: "3-Month Post-Op",
    dueDate: "07/09/2026",
    targetVessel: "Brachial Artery & Cephalic Vein",
    targetVelocity: "Volume Flow >600 mL/min",
    status: "Due This Week",
    lastPsv: 220.0,
    lastMpv: 0,
    patency: "Widely Patent (Normal Velocity)",
    notes: "Due this week for 3-month volume flow and thrill assessment.",
  },
  {
    id: "DOP07",
    ptId: "PT07",
    name: "Anita Jain",
    age: 55,
    sex: "F",
    crNo: "SMS-2026-099",
    proc: "PTBD & Biliary SEMS Stenting",
    implant: "Niti-S 10mm x 80mm Biliary Stent",
    interval: "completed",
    intervalLabel: "1-Month Post-Op",
    dueDate: "28/08/2026",
    targetVessel: "Common Bile Duct",
    targetVelocity: "IHBR Decompressed | Caliber 6mm",
    status: "Completed",
    lastPsv: 0,
    lastMpv: 0,
    patency: "Widely Patent (Normal Velocity)",
    notes: "Ultrasound verified complete biliary decompression and normal bilirubin (0.9 mg/dL).",
  },
];

export const INITIAL_CT_REVIEWS: CtReviewRecord[] = [
  {
    id: "CT-REV-001",
    patientName: "Bhanwar Lal Gurjar",
    age: 58,
    sex: "Male",
    date: new Date().toISOString().split("T")[0],
    primaryDiagnosis: "Cirrhosis with recurrent refractory UGI variceal bleeding",
    clinicalHistory: "58-year-old male with HCV-related cirrhosis, history of 2 prior bandings. Melena since 3 days, refractory to medical therapy.",
    presentingComplaints: "Recurrent hematemesis, melena, weakness, abdominal distension.",
    ctNumber: "SONIE-PACS-99214",
    ctReviewNotes: "Review triple-phase CECT: Check main portal vein patency, assess splenic vein caliber and gastrorenal shunt for potential BRTO/TIPS.",
    smsBillId: "SMS-BILL-2026-8812",
    hospitalSource: "Sonie Hospital",
    contactNumber: "9829144321",
    status: "Reviewed by Neel / Nilesh",
    reviewedBy: "Dr. Neel Yadav",
    reviewedAt: "13/09/2026 14:30",
    organSystem: "Liver & Hepatobiliary",
    diseaseKey: "brto_parto_gastric_varices",
    procedureTitle: "Balloon-Occluded Retrograde Transvenous Obliteration (BRTO)",
  },
  {
    id: "CT-REV-002",
    patientName: "Shanti Devi Agarwal",
    age: 64,
    sex: "Female",
    date: new Date().toISOString().split("T")[0],
    primaryDiagnosis: "Right lung mass with active intermittent hemoptysis",
    clinicalHistory: "64-year-old female known case of bronchogenic CA, experiencing 150ml fresh hemoptysis episodes daily. Hemodynamically stable.",
    presentingComplaints: "Hemoptysis, chronic cough, right-sided pleuritic chest pain.",
    ctNumber: "SMS-CT-2026-4402",
    ctReviewNotes: "Review CT Thorax Angio: Identify hypertrophied right bronchial artery origin (T5/T6) and non-bronchial systemic collaterals.",
    smsBillId: "SMS-BILL-2026-9041",
    hospitalSource: "SMS Hospital",
    contactNumber: "9414233890",
    status: "To be reviewed by consultant",
    reviewedBy: "Dr. Nilesh DM",
    reviewedAt: "13/09/2026 16:00",
    organSystem: "Thoracic & Pulmonary",
    diseaseKey: "bronchial_artery_embo_bae",
    procedureTitle: "Bronchial Artery Embolization (BAE) - Massive Hemoptysis",
  },
  {
    id: "CT-REV-003",
    patientName: "Mangi Lal Kumawat",
    age: 52,
    sex: "Male",
    date: new Date().toISOString().split("T")[0],
    primaryDiagnosis: "Malignant obstructive jaundice (Hilar Cholangiocarcinoma)",
    clinicalHistory: "52-year-old male presenting with progressive painless jaundice, pruritus, clay-colored stools. Total Bilirubin 18.4 mg/dL.",
    presentingComplaints: "Deep jaundice, dark urine, severe generalized itching, anorexia.",
    ctNumber: "SONIE-PACS-98741",
    ctReviewNotes: "Review CECT Abdomen: Assess Bismuth-Corlette level (Type IIIa) and right vs left ductal dilatation for unilateral/bilateral PTBD.",
    smsBillId: "SMS-BILL-2026-7721",
    hospitalSource: "Sonie Hospital",
    contactNumber: "9829567123",
    status: "Booking Cath-Lab on next available date",
    reviewedBy: "Dr. Neel Yadav",
    reviewedAt: "13/09/2026 17:15",
    organSystem: "Liver & Hepatobiliary",
    diseaseKey: "ptbd_biliary_stenting",
    procedureTitle: "Percutaneous Transhepatic Biliary Drainage (PTBD) & SEMS Stenting",
  },
];

export const INITIAL_BOOKED_CASES: BookedCaseRecord[] = [
  BookedCaseSchema.parse({
    id: "BC-2026-001",
    patientName: "Ramswaroop Meena",
    age: 56,
    sex: "Male",
    contactNumber: "9829012345",
    ssoNumber: "SMS-2026-089",
    location: "Sikar, Rajasthan",
    scheduledDate: getTomorrowDateString(),
    organSystem: "Liver & Hepatobiliary",
    diseaseKey: "budd_chiari_dips",
    procedureTitle: "Budd-Chiari Syndrome: Transcaval DIPS / Recanalization",
    bookedBy: "Dr. Neel Yadav (DM01)",
    bookedAt: new Date().toISOString(),
    orderedLabs: [
      "Liver Function Tests (Total & Direct Bilirubin, AST, ALT, Albumin)",
      "Renal Function Tests (Serum Creatinine, BUN, Electrolytes)",
      "Coagulation Profile (PT, INR, aPTT, Platelet Count, Fibrinogen)",
      "Complete Blood Count (Hb, TLC, Platelets)",
      "Blood Grouping & Crossmatching (4 Units PRBC, 4 Units FFP reserved)",
    ],
    specialInvestigations: [
      "JAK2 V617F Mutation Assay (Screening for Polycythemia Vera)",
      "Protein C Activity & Protein S Free Antigen",
      "Antithrombin III Functional Assay",
      "Factor V Leiden (G1691A) Mutation",
      "Serum Homocysteine",
    ],
    preScanAnatomy: {
      rhv: "Thrombotic Occlusion",
      mhv: "Patent (Target for Venoplasty)",
      lhv: "Thrombotic Occlusion",
      ivc_status: "Short Segment Suprahepatic Web",
      caudate: "Marked Hypertrophy (>3.5 cm)",
      right_ijv: "Patent & Fully Compressible (>10 mm)",
    },
    hardwareChecklist: [
      { id: "h1", item: "Transjugular Sheath", spec: "10F 45cm Ansel / Flexor Hydrophilic Guiding Sheath", checked: true },
      { id: "h2", item: "Colapinto Puncture Needle", spec: "RUPS-100 Colapinto Transcaval Access Set (10F)", checked: true },
      { id: "h3", item: "Extra-Stiff Guidewires", spec: "0.035\" 260cm Amplatz Extra-Stiff + 0.035\" Terumo Glidewire", checked: true },
      { id: "h4", item: "High-Pressure Angioplasty Balloons", spec: "Conquest / Atlas 8x40 mm & 10x40 mm Non-Compliant", checked: true },
      { id: "h5", item: "Viatorr TIPS Stent-Graft", spec: "Gore Viatorr Covered Stent: 10 mm diameter (7 cm covered + 2 cm bare)", checked: true },
      { id: "h6", item: "Intra-op Pressure Manometer", spec: "Electronic Transducer for Portal & Right Atrial Gradient", checked: true },
    ],
    rotterdamScore: {
      score: 1.42,
      classLevel: "Class III (High Risk)",
      oneYearSurvival: "63% without decompressive intervention",
    },
    postOpPlan: "Therapeutic LMWH (Enoxaparin 1 mg/kg s/c q12h) 4h post-sheath removal. Oral Apixaban 5mg BD from POD 2. 24h Doppler for shunt patency.",
    status: "Scheduled",
    rescheduleHistory: [],
  }),
  BookedCaseSchema.parse({
    id: "BC-2026-002",
    patientName: "Kamla Devi Sharma",
    age: 62,
    sex: "Female",
    contactNumber: "9829023456",
    ssoNumber: "SMS-2026-092",
    location: "Jaipur, Rajasthan",
    scheduledDate: "2026-09-16",
    organSystem: "Peripheral Vascular",
    diseaseKey: "sfa_stenting",
    procedureTitle: "Superficial Femoral Artery (SFA) Recanalization & Stenting",
    bookedBy: "Dr. Nilesh Bansal (DM02)",
    bookedAt: new Date().toISOString(),
    orderedLabs: [
      "Coagulation Profile (PT, INR, aPTT, Platelets)",
      "Renal Function Tests & eGFR (Serum Creatinine)",
      "Lipid Profile & HbA1c",
    ],
    specialInvestigations: ["Lower Extremity Arterial Duplex Mapping"],
    preScanAnatomy: {
      lesion_length: "Long Segment (>15 cm TASC-D)",
      calcification: "Moderate Circumferential Calcification",
      run_off: "2-Vessel Runoff (Anterior Tibial + Peroneal Patent)",
    },
    hardwareChecklist: [
      { id: "h1", item: "Femoral Introducer Sheath", spec: "6F 45cm Destination / Parent Guiding Sheath", checked: true },
      { id: "h2", item: "Crossing Guidewire", spec: "0.035\" 300cm Terumo Glidewire Advantage / Command 0.014\"", checked: true },
      { id: "h3", item: "Drug-Eluting Stent (DES)", spec: "Eluvia / Zilver PTX 6 mm x 120 mm Paclitaxel-Eluting", checked: true },
    ],
    postOpPlan: "Dual Antiplatelet Therapy (DAPT): Aspirin 75 mg + Clopidogrel 75 mg OD x 6 months. Distal DP/PT pulse palpation q2h.",
    status: "Scheduled",
    rescheduleHistory: [],
  }),
];

// ============================================================================
// ENDOFLOW STATE INTERFACE
// ============================================================================

export interface EndoflowState {
  patients: EndoflowPatient[];
  activeCaseId: string | null;
  searchQuery: string;
  filterModality: string;

  // Staff & RBAC
  currentStaff: StaffAccount | null;
  setCurrentStaff: (staff: StaffAccount | null) => void;

  // 8-Bed Inpatient Matrix
  beds: BedRecord[];
  updateBed: (bedId: string, updates: Partial<BedRecord>) => void;
  transferPatientBed: (ptId: string, fromBedId: string, toBedId: string) => void;

  // Booked Cases (DM Resident OPD Diary)
  bookedCases: BookedCaseRecord[];
  bookCase: (
    record: BookedCaseInput
  ) => { success: boolean; id?: string; error?: string };
  rescheduleCase: (caseId: string, newDate: string, reason?: string) => void;
  updateCaseHardwareItem: (caseId: string, hardwareId: string, checked: boolean) => void;
  addCustomHardwareItem: (caseId: string, item: string, spec: string) => void;
  getTomorrowReminders: () => BookedCaseRecord[];
  screenCaseChecklist: (
    caseId: string,
    checklistKey: "npo" | "labs" | "bloodProducts" | "hardware",
    value: boolean,
    staffName: string
  ) => void;

  // OPD CT Review Queue
  ctReviews: CtReviewRecord[];
  addCtReview: (review: Omit<CtReviewRecord, "id" | "status">) => void;
  updateCtReview: (id: string, updates: Partial<CtReviewRecord>) => void;
  convertCtReviewToBooking: (
    reviewId: string,
    scheduledDate: string,
    diseaseKey: string,
    procedureTitle: string,
    staffName: string
  ) => { success: boolean; id?: string };

  // Doppler Surveillance Records
  dopplerRecords: DopplerRecord[];
  addDopplerRecord: (record: Omit<DopplerRecord, "id">) => void;
  updateDopplerRecord: (id: string, updates: Partial<DopplerRecord>) => void;

  // Patient Updates
  updatePatient: (id: string, updates: Partial<EndoflowPatient>) => void;

  // State Actions
  advanceStage: (patientId: string, nextStatus: ClinicalStage) => void;
  callPatientToLab: (patientId: string) => void;
  startInRoomCase: (patientId: string, accessSite?: string) => void;
  completeProcedureAndTransfer: (
    patientId: string,
    recoveryBed: string,
    postOpData?: Partial<PostOpMonitoring>
  ) => void;
  dischargePatient: (patientId: string) => void;
  updateInRoomTelemetry: (patientId: string, telemetry: Partial<InRoomTelemetry>) => void;
  updatePreOpCheck: (patientId: string, updates: Partial<PreOpPrep>) => void;
  updatePostOpCheck: (patientId: string, updates: Partial<PostOpMonitoring>) => void;
  admitPatient: (rawPatient: unknown) => { success: boolean; error?: string };
  setSearchQuery: (query: string) => void;
  setFilterModality: (modality: string) => void;
  resetToDefaultPatients: () => void;
}


// ============================================================================
// ZUSTAND STORE IMPLEMENTATION
// ============================================================================

export const useEndoflowStore = create<EndoflowState>((set, get) => ({
  patients: INITIAL_ENDOFLOW_PATIENTS,
  activeCaseId: "PT03",
  searchQuery: "",
  filterModality: "all",

  advanceStage: (patientId: string, nextStatus: ClinicalStage) => {
    // Validate nextStatus with Zod
    const parsedStatus = ClinicalStageSchema.parse(nextStatus);

    set((state) => {
      const updated = state.patients.map((pt) => {
        if (pt.id !== patientId) return pt;

        // Clone immutably
        const modified: EndoflowPatient = {
          ...pt,
          status: parsedStatus,
        };

        // If moving to In Cath-Lab, initialize inRoom if missing
        if (parsedStatus === "In Cath-Lab" && !modified.inRoom) {
          modified.inRoom = {
            activeSheathAccess: "6F Common Femoral Artery Sheath",
            elapsedFluoroSeconds: 0,
            contrastInjectedMl: 0,
            macdThresholdMl: Math.round((5 * 70) / (modified.labs.creat || 1)),
            vitals: pt.labs ? "120/80 mmHg, HR 76, SpO2 98%" : "Stable",
            targetArtery: modified.procedure,
            cathetersInUse: ["5F Diagnostic Catheter", "0.035\" Hydrophilic Wire"],
            currentStepDescription: "Vascular Access Established • Angiography in Progress",
          };
        }

        // If moving to Post-Op ICU, initialize postOp if missing
        if (parsedStatus === "Post-Op ICU" && !modified.postOp) {
          modified.postOp = {
            recoveryBed: modified.ipd.bed || "Cath-Lab Holding Rec-01",
            punctureSiteSeal: "Hemostasis Intact",
            distalPulses: "Strong (+++)",
            instructions: "Puncture site monitored. Bed rest for 4 hours.",
            sheathRemoved: true,
            dischargeReady: false,
          };
        }

        return modified;
      });

      return {
        patients: updated,
        activeCaseId: parsedStatus === "In Cath-Lab" ? patientId : state.activeCaseId === patientId ? null : state.activeCaseId,
      };
    });
  },

  callPatientToLab: (patientId: string) => {
    set((state) => ({
      patients: state.patients.map((pt) => {
        if (pt.id !== patientId) return pt;
        return {
          ...pt,
          status: "In Cath-Lab",
          preOp: {
            ...pt.preOp,
            calledToLab: true,
          },
          inRoom: pt.inRoom || {
            activeSheathAccess: "6F Right Femoral Artery Sheath",
            elapsedFluoroSeconds: 0,
            contrastInjectedMl: 0,
            macdThresholdMl: 220,
            vitals: "124/80 mmHg, HR 74, SpO2 98%",
            targetArtery: pt.procedure,
            cathetersInUse: ["5F Cobra C2", "0.035\" Glidewire"],
            currentStepDescription: "Patient transferred to Angiosuite Table • Prep & Drape Active",
          },
        };
      }),
      activeCaseId: patientId,
    }));
  },

  startInRoomCase: (patientId: string, accessSite?: string) => {
    get().advanceStage(patientId, "In Cath-Lab");
    if (accessSite) {
      get().updateInRoomTelemetry(patientId, { activeSheathAccess: accessSite });
    }
  },

  completeProcedureAndTransfer: (
    patientId: string,
    recoveryBed: string,
    postOpData?: Partial<PostOpMonitoring>
  ) => {
    set((state) => ({
      patients: state.patients.map((pt) => {
        if (pt.id !== patientId) return pt;
        return {
          ...pt,
          status: "Post-Op ICU",
          ipd: {
            ...pt.ipd,
            bed: recoveryBed,
            podDay: "POD 0",
          },
          postOp: {
            recoveryBed,
            punctureSiteSeal: postOpData?.punctureSiteSeal || "Hemostasis Intact",
            distalPulses: postOpData?.distalPulses || "Strong (+++)",
            instructions: postOpData?.instructions || "Transferred to post-op recovery. Vital signs q15m x 1h.",
            sheathRemoved: postOpData?.sheathRemoved ?? true,
            dischargeReady: false,
          },
        };
      }),
      activeCaseId: state.activeCaseId === patientId ? null : state.activeCaseId,
    }));
  },

  dischargePatient: (patientId: string) => {
    set((state) => ({
      patients: state.patients.map((pt) => {
        if (pt.id !== patientId) return pt;
        return {
          ...pt,
          status: "Discharged",
          postOp: pt.postOp
            ? { ...pt.postOp, dischargeReady: true }
            : undefined,
        };
      }),
    }));
  },

  updateInRoomTelemetry: (patientId: string, telemetry: Partial<InRoomTelemetry>) => {
    set((state) => ({
      patients: state.patients.map((pt) => {
        if (pt.id !== patientId || !pt.inRoom) return pt;
        return {
          ...pt,
          inRoom: {
            ...pt.inRoom,
            ...telemetry,
          },
        };
      }),
    }));
  },

  updatePreOpCheck: (patientId: string, updates: Partial<PreOpPrep>) => {
    set((state) => ({
      patients: state.patients.map((pt) => {
        if (pt.id !== patientId) return pt;
        return {
          ...pt,
          preOp: {
            ...pt.preOp,
            ...updates,
          },
        };
      }),
    }));
  },

  updatePostOpCheck: (patientId: string, updates: Partial<PostOpMonitoring>) => {
    set((state) => ({
      patients: state.patients.map((pt) => {
        if (pt.id !== patientId || !pt.postOp) return pt;
        return {
          ...pt,
          postOp: {
            ...pt.postOp,
            ...updates,
          },
        };
      }),
    }));
  },

  admitPatient: (rawPatient: unknown) => {
    const parseResult = EndoflowPatientSchema.safeParse(rawPatient);
    if (!parseResult.success) {
      const errorMsg = parseResult.error.issues
        ? parseResult.error.issues.map((e) => `${e.path.join(".")}: ${e.message}`).join(", ")
        : parseResult.error.message;
      return {
        success: false,
        error: errorMsg,
      };
    }

    set((state) => ({
      patients: [parseResult.data, ...state.patients],
    }));
    return { success: true };
  },

  currentStaff: INSTITUTIONAL_STAFF_ACCOUNTS.find((s) => s.code === "DM01") || null,
  setCurrentStaff: (staff: StaffAccount | null) => set({ currentStaff: staff }),

  beds: INITIAL_8_BEDS,
  updateBed: (bedId: string, updates: Partial<BedRecord>) => {
    set((state) => ({
      beds: state.beds.map((b) => (b.id === bedId ? { ...b, ...updates } : b)),
    }));
  },
  transferPatientBed: (ptId: string, fromBedId: string, toBedId: string) => {
    set((state) => {
      const fromBed = state.beds.find((b) => b.id === fromBedId);
      if (!fromBed) return state;

      const updatedBeds = state.beds.map((b) => {
        if (b.id === fromBedId) {
          return {
            ...b,
            status: "vacant" as BedStatus,
            ptName: "-",
            crNo: "-",
            diag: "Available",
            doctor: "-",
            vitals: "-",
            ptId: undefined,
          };
        }
        if (b.id === toBedId) {
          return {
            ...b,
            status: "occupied" as BedStatus,
            ptName: fromBed.ptName,
            crNo: fromBed.crNo,
            diag: fromBed.diag,
            doctor: fromBed.doctor,
            vitals: fromBed.vitals,
            ptId: fromBed.ptId,
          };
        }
        return b;
      });

      return { beds: updatedBeds };
    });
  },

  bookedCases: INITIAL_BOOKED_CASES,
  bookCase: (rawRecord) => {
    const newId = `BC-2026-${String(get().bookedCases.length + 1).padStart(3, "0")}`;
    const parsed = BookedCaseSchema.safeParse({
      ...rawRecord,
      id: newId,
      bookedAt: new Date().toISOString(),
      status: "Scheduled",
      rescheduleHistory: [],
    });
    if (!parsed.success) {
      const errorMsg = parsed.error.issues
        ? parsed.error.issues.map((e) => `${e.path.join(".")}: ${e.message}`).join(", ")
        : parsed.error.message;
      return { success: false, error: errorMsg };
    }

    set((state) => ({
      bookedCases: [parsed.data, ...state.bookedCases],
    }));
    return { success: true, id: newId };
  },

  rescheduleCase: (caseId: string, newDate: string, reason?: string) => {
    set((state) => ({
      bookedCases: state.bookedCases.map((c) => {
        if (c.id !== caseId) return c;
        return {
          ...c,
          scheduledDate: newDate,
          status: "Rescheduled",
          rescheduleHistory: [
            {
              previousDate: c.scheduledDate,
              newDate,
              rescheduledAt: new Date().toISOString(),
              reason: reason || "OPD Rescheduled by Resident",
            },
            ...c.rescheduleHistory,
          ],
        };
      }),
    }));
  },

  updateCaseHardwareItem: (caseId: string, hardwareId: string, checked: boolean) => {
    set((state) => ({
      bookedCases: state.bookedCases.map((c) => {
        if (c.id !== caseId) return c;
        return {
          ...c,
          hardwareChecklist: c.hardwareChecklist.map((h) =>
            h.id === hardwareId ? { ...h, checked } : h
          ),
        };
      }),
    }));
  },

  addCustomHardwareItem: (caseId: string, item: string, spec: string) => {
    set((state) => ({
      bookedCases: state.bookedCases.map((c) => {
        if (c.id !== caseId) return c;
        const newItem = {
          id: `custom-${Date.now()}`,
          item,
          spec,
          checked: true,
        };
        return {
          ...c,
          hardwareChecklist: [...c.hardwareChecklist, newItem],
        };
      }),
    }));
  },

  getTomorrowReminders: () => {
    const tomorrowStr = getTomorrowDateString();
    return get().bookedCases.filter(
      (c) => c.scheduledDate === tomorrowStr && c.status !== "Completed"
    );
  },

  screenCaseChecklist: (
    caseId: string,
    checklistKey: "npo" | "labs" | "bloodProducts" | "hardware",
    value: boolean,
    staffName: string
  ) => {
    set((state) => ({
      bookedCases: state.bookedCases.map((c) => {
        if (c.id !== caseId) return c;
        const npo = checklistKey === "npo" ? value : c.npoVerified;
        const labs = checklistKey === "labs" ? value : c.labsVerified;
        const blood = checklistKey === "bloodProducts" ? value : c.bloodProductsVerified;
        const hw = checklistKey === "hardware" ? value : c.hardwareVerified;

        const allChecked = npo && labs && blood && hw;

        return {
          ...c,
          npoVerified: npo,
          labsVerified: labs,
          bloodProductsVerified: blood,
          hardwareVerified: hw,
          screenedBy: allChecked ? staffName : c.screenedBy,
          screenedAt: allChecked ? new Date().toISOString() : c.screenedAt,
          keptForTomorrow: allChecked,
          admissionCardUpdated: allChecked,
          codeAdditionStatus: allChecked ? "Added" : c.codeAdditionStatus,
        };
      }),
    }));
  },

  ctReviews: INITIAL_CT_REVIEWS,
  addCtReview: (review) => {
    const newId = `CT-REV-${String(get().ctReviews.length + 1).padStart(3, "0")}`;
    const newRecord: CtReviewRecord = {
      ...review,
      id: newId,
      status: "Pending Review",
    };
    set((state) => ({
      ctReviews: [newRecord, ...state.ctReviews],
    }));
  },

  updateCtReview: (id, updates) => {
    set((state) => ({
      ctReviews: state.ctReviews.map((r) => (r.id === id ? { ...r, ...updates } : r)),
    }));
  },

  convertCtReviewToBooking: (reviewId, scheduledDate, diseaseKey, procedureTitle, staffName) => {
    const target = get().ctReviews.find((r) => r.id === reviewId);
    if (!target) return { success: false };

    const bookingResult = get().bookCase({
      patientName: target.patientName,
      age: target.age,
      sex: target.sex,
      contactNumber: target.contactNumber,
      ssoNumber: target.smsBillId,
      location: "Jaipur",
      scheduledDate,
      organSystem: target.organSystem || "Liver & Hepatobiliary",
      diseaseKey,
      procedureTitle,
      bookedBy: staffName,
      orderedLabs: [
        "Liver Function Tests (Total & Direct Bilirubin, AST, ALT, Albumin)",
        "Renal Function Tests (Serum Creatinine, BUN, Electrolytes)",
        "Coagulation Profile (PT, INR, aPTT)",
        "Complete Blood Count (Hb, TLC, Platelets)",
      ],
      specialInvestigations: [
        `CT Scan #${target.ctNumber} (${target.hospitalSource}): ${target.ctReviewNotes}`,
        ...(target.clinicalHistory ? [`Clinical History: ${target.clinicalHistory}`] : []),
        ...(target.presentingComplaints ? [`Presenting Complaints: ${target.presentingComplaints}`] : []),
      ],
      preScanAnatomy: {},
      hardwareChecklist: [
        { id: "h1", item: "Vascular Access Sheath", spec: "6F 45cm Destination Sheath", checked: true },
        { id: "h2", item: "Selective Diagnostic Catheter", spec: "5F Cobra C2 / Simmons 1", checked: true },
        { id: "h3", item: "Hydrophilic Guidewire", spec: "0.035\" 260cm Terumo Glidewire", checked: true },
      ],
      postOpPlan: `Admit in IR Ward under protocol. OPD CT Workup from ${target.hospitalSource}. Clinical History: ${target.clinicalHistory || target.primaryDiagnosis}. Pre-procedure hydration & pre-op vitals check.`,
      npoVerified: false,
      labsVerified: false,
      bloodProductsVerified: false,
      hardwareVerified: false,
      screenedBy: null,
      screenedAt: null,
      keptForTomorrow: false,
      admissionCardUpdated: false,
      codeAdditionStatus: "Pending",
    });

    if (bookingResult.success) {
      set((state) => ({
        ctReviews: state.ctReviews.map((r) =>
          r.id === reviewId
            ? { ...r, status: "Booked in Cath-Lab", bookedCaseId: bookingResult.id }
            : r
        ),
      }));
    }

    return bookingResult;
  },

  // Doppler Surveillance Records
  dopplerRecords: INITIAL_DOPPLER_RECORDS,
  addDopplerRecord: (record) => {
    const newId = `DOP${String(get().dopplerRecords.length + 1).padStart(2, "0")}`;
    set((state) => ({
      dopplerRecords: [...state.dopplerRecords, { ...record, id: newId }],
    }));
  },
  updateDopplerRecord: (id, updates) => {
    set((state) => ({
      dopplerRecords: state.dopplerRecords.map((d) =>
        d.id === id ? { ...d, ...updates } : d
      ),
    }));
  },

  // Patient Updates
  updatePatient: (id, updates) => {
    set((state) => ({
      patients: state.patients.map((pt) =>
        pt.id === id ? { ...pt, ...updates } : pt
      ),
    }));
  },

  setSearchQuery: (query: string) => set({ searchQuery: query }),
  setFilterModality: (modality: string) => set({ filterModality: modality }),
  resetToDefaultPatients: () =>
    set({
      patients: INITIAL_ENDOFLOW_PATIENTS,
      activeCaseId: "PT03",
      beds: INITIAL_8_BEDS,
      bookedCases: INITIAL_BOOKED_CASES,
      ctReviews: INITIAL_CT_REVIEWS,
      dopplerRecords: INITIAL_DOPPLER_RECORDS,
    }),
}));
