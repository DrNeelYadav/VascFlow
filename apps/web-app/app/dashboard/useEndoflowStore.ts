import { create } from "zustand";
import { z } from "zod";

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
// ENDOFLOW STATE INTERFACE
// ============================================================================

export interface EndoflowState {
  patients: EndoflowPatient[];
  activeCaseId: string | null;
  searchQuery: string;
  filterModality: string;

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

  setSearchQuery: (query: string) => set({ searchQuery: query }),
  setFilterModality: (modality: string) => set({ filterModality: modality }),
  resetToDefaultPatients: () => set({ patients: INITIAL_ENDOFLOW_PATIENTS, activeCaseId: "PT03" }),
}));
