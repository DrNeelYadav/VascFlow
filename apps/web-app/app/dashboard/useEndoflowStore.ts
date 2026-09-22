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
  chiefComplaints: z.string().optional(),
  clinicalHistory3Months: z.string().optional(),
  history3Months: z.string().optional(),
  cectFindings: z.string().optional(),
});
export type EndoflowPatient = z.infer<typeof EndoflowPatientSchema>;

// ============================================================================
// INITIAL FAITHFUL DATA PORT FROM ENDOFLOW APP.JS (PT01 - PT08)
// ============================================================================

export const INITIAL_ENDOFLOW_PATIENTS: EndoflowPatient[] = [];

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
    ptName: "Lakshmi",
    crNo: "SMS-2026-LP01",
    diag: "Hypersplenism — Post Splenic Artery Embolization",
    doctor: "Dr. Meenu Bagarhatta",
    vitals: "120/80 mmHg, HR 76, SpO2 99%",
    hemostasisIntact: true,
    distalPulses: "Strong (+++)",
  },
  {
    id: "ICU-02",
    type: "ICU",
    title: "Liver ICU Bed 02",
    status: "vacant",
    ptName: "-",
    crNo: "-",
    diag: "Ready for Emergency STAT Admission",
    doctor: "-",
    vitals: "-",
    hemostasisIntact: true,
    distalPulses: "-",
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
    title: "Old Gastro IR Ward Bed 01",
    status: "occupied",
    ptName: "Roshan",
    crNo: "SMS-2026-RS01",
    diag: "Liver Abscess — Allowed to go Home (AJH)",
    doctor: "Dr. Naresh Mangalhara",
    vitals: "118/74 mmHg, HR 78, SpO2 98%",
    hemostasisIntact: true,
    distalPulses: "Strong (+++)",
  },
  {
    id: "Ward-02",
    type: "Ward",
    title: "IR Ward Bed 02",
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
    id: "Ward-03",
    type: "Ward",
    title: "IR Ward Bed 03",
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
  urgency: z.string().optional(),
  accessionNumber: z.string().optional(),
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
  accessionNumber: z.string().optional(),
  clinicalHistory3Months: z.string().optional(),
  cectFindings: z.string().optional(),
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

export const INITIAL_DOPPLER_RECORDS: DopplerRecord[] = [];

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
    ctNumber: "SONI-PACS-99214",
    ctReviewNotes: "Review triple-phase CECT: Check main portal vein patency, assess splenic vein caliber and gastrorenal shunt for potential BRTO/TIPS.",
    smsBillId: "SMS-BILL-2026-8812",
    hospitalSource: "SONI Hospital",
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
    ctNumber: "SONI-PACS-98741",
    ctReviewNotes: "Review CECT Abdomen: Assess Bismuth-Corlette level (Type IIIa) and right vs left ductal dilatation for unilateral/bilateral PTBD.",
    smsBillId: "SMS-BILL-2026-7721",
    hospitalSource: "SONI Hospital",
    contactNumber: "9829567123",
    status: "Booking Cath-Lab on next available date",
    reviewedBy: "Dr. Neel Yadav",
    reviewedAt: "13/09/2026 17:15",
    organSystem: "Liver & Hepatobiliary",
    diseaseKey: "ptbd_biliary_stenting",
    procedureTitle: "Percutaneous Transhepatic Biliary Drainage (PTBD) & SEMS Stenting",
  },
];

export const INITIAL_BOOKED_CASES: BookedCaseRecord[] = [];

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
  massRescheduleCases: (fromDate: string, targetDate: string, reason?: string) => number;
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
  activeCaseId: null,
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

  massRescheduleCases: (fromDate: string, targetDate: string, reason?: string) => {
    let movedCount = 0;
    set((state) => ({
      bookedCases: state.bookedCases.map((c) => {
        if (c.scheduledDate !== fromDate) return c;
        movedCount++;
        return {
          ...c,
          scheduledDate: targetDate,
          status: "Rescheduled",
          rescheduleHistory: [
            {
              previousDate: fromDate,
              newDate: targetDate,
              rescheduledAt: new Date().toISOString(),
              reason: reason || "Mass date reschedule",
            },
            ...c.rescheduleHistory,
          ],
        };
      }),
    }));
    return movedCount;
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
      activeCaseId: null,
      beds: INITIAL_8_BEDS,
      bookedCases: INITIAL_BOOKED_CASES,
      ctReviews: INITIAL_CT_REVIEWS,
      dopplerRecords: INITIAL_DOPPLER_RECORDS,
    }),
}));
