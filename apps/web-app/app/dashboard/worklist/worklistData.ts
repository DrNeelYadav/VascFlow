export type CaseStatus =
  | "SCHEDULED"
  | "ADMITTED_PREPPED"
  | "IN_PROCEDURE"
  | "POST_OP_HOLDING"
  | "REPORT_DRAFTED"
  | "FINALIZED_SIGNED"
  | "DISCHARGED";

export const CaseStatus: Record<CaseStatus, CaseStatus> = {
  SCHEDULED: "SCHEDULED",
  ADMITTED_PREPPED: "ADMITTED_PREPPED",
  IN_PROCEDURE: "IN_PROCEDURE",
  POST_OP_HOLDING: "POST_OP_HOLDING",
  REPORT_DRAFTED: "REPORT_DRAFTED",
  FINALIZED_SIGNED: "FINALIZED_SIGNED",
  DISCHARGED: "DISCHARGED",
};

export type ModalityType = "XA" | "CT" | "US" | "ROSE";

export interface PatientWorklistEntry {
  caseId: string;
  crNumber: string;
  patientName: string;
  procedureName: string;
  plannedTime: string;
  operatorResident: string;
  supervisingConsultant: string;
  status: CaseStatus;
  fastingConfirmed: boolean;
  contrastAllergy: boolean;
  room?: string;
  modality?: ModalityType;
  durationMinutes?: number;
  startHour?: number;
  endHour?: number;
  isStat?: boolean;
  statIndication?: string;
}

export const DEPARTMENT_ROOMS = [
  "Cath Lab (Philips Azurion)",
  "CT Suite",
  "PTBD Room",
  "PCD Room",
  "Biopsy Room",
  "Ultrasound Review Room",
  "MSK USG and Procedure room",
  "FNAC Room",
] as const;

export const VACANT_WORKLIST_CASES: PatientWorklistEntry[] = [];

export const INITIAL_RIS_WORKLIST_CASES: PatientWorklistEntry[] = [];


