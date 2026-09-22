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

export const INITIAL_RIS_WORKLIST_CASES: PatientWorklistEntry[] = [
  {
    caseId: "CASE-2026-001",
    crNumber: "SMS-2026-089",
    patientName: "Ramswaroop Meena",
    procedureName: "Direct Intrahepatic Portosystemic Shunt (DIPS)",
    plannedTime: "09:00 AM",
    operatorResident: "Dr. Neel Yadav",
    supervisingConsultant: "Dr. Meenu Bagarhatta",
    status: "POST_OP_HOLDING",
    fastingConfirmed: true,
    contrastAllergy: false,
    room: "Cath Lab (Philips Azurion)",
    modality: "XA",
    durationMinutes: 90,
    startHour: 9,
    endHour: 10.5,
  },
  {
    caseId: "CASE-2026-002",
    crNumber: "SMS-2026-1097",
    patientName: "Sunil Kumar",
    procedureName: "Varicose Veins VenaSeal & Foam Sclerotherapy",
    plannedTime: "10:30 AM",
    operatorResident: "Dr. Nilesh Gupta",
    supervisingConsultant: "Dr. Alok Verma",
    status: "SCHEDULED",
    fastingConfirmed: true,
    contrastAllergy: false,
    room: "MSK USG and Procedure room",
    modality: "US",
    durationMinutes: 45,
    startHour: 10.5,
    endHour: 11.25,
  },
  {
    caseId: "CASE-2026-003",
    crNumber: "SMS-2026-074",
    patientName: "Rajesh Kumawat",
    procedureName: "Bronchial Artery Embolization (BAE) for Massive Hemoptysis",
    plannedTime: "11:15 AM",
    operatorResident: "Dr. Neel Yadav",
    supervisingConsultant: "Dr. Alok Verma",
    status: "IN_PROCEDURE",
    fastingConfirmed: true,
    contrastAllergy: false,
    room: "Cath Lab (Philips Azurion)",
    modality: "XA",
    durationMinutes: 60,
    startHour: 11.25,
    endHour: 12.25,
    isStat: true,
    statIndication: "Massive Life-Threatening Hemoptysis",
  },
  {
    caseId: "CASE-2026-004",
    crNumber: "SMS-2026-0312",
    patientName: "Rameshwar Sharma",
    procedureName: "Duodenoileus / SMA Syndrome Endovascular Stenting",
    plannedTime: "12:00 PM",
    operatorResident: "Dr. Neel Yadav",
    supervisingConsultant: "Dr. Meenu Bagarhatta",
    status: "IN_PROCEDURE",
    fastingConfirmed: true,
    contrastAllergy: false,
    room: "Cath Lab (Philips Azurion)",
    modality: "XA",
    durationMinutes: 75,
    startHour: 12,
    endHour: 13.25,
    isStat: true,
    statIndication: "Acute Duodenoileus & Gastric Decompression Failure",
  },
  {
    caseId: "CASE-2026-005",
    crNumber: "SMS-2026-1721",
    patientName: "Anjum Nisha",
    procedureName: "Transjugular Intrahepatic Portosystemic Shunt (TIPS) & Variceal Embo",
    plannedTime: "01:30 PM",
    operatorResident: "Dr. Nilesh Gupta",
    supervisingConsultant: "Dr. Meenu Bagarhatta",
    status: "ADMITTED_PREPPED",
    fastingConfirmed: true,
    contrastAllergy: false,
    room: "Cath Lab (Philips Azurion)",
    modality: "XA",
    durationMinutes: 90,
    startHour: 13.5,
    endHour: 15,
  },
  {
    caseId: "CASE-2026-006",
    crNumber: "SMS-2026-0245",
    patientName: "Shanti Devi",
    procedureName: "Percutaneous Transhepatic Biliary Drainage (PTBD) + Stenting",
    plannedTime: "02:15 PM",
    operatorResident: "Dr. Neel Yadav",
    supervisingConsultant: "Dr. Alok Verma",
    status: "SCHEDULED",
    fastingConfirmed: true,
    contrastAllergy: false,
    room: "PTBD Room",
    modality: "XA",
    durationMinutes: 60,
    startHour: 14.25,
    endHour: 15.25,
  },
  {
    caseId: "CASE-2026-007",
    crNumber: "SMS-2026-0421",
    patientName: "Vikram Singh Rathore",
    procedureName: "CT-Guided Lung Coaxial Core Biopsy",
    plannedTime: "03:00 PM",
    operatorResident: "Dr. Nilesh Gupta",
    supervisingConsultant: "Dr. Alok Verma",
    status: "SCHEDULED",
    fastingConfirmed: true,
    contrastAllergy: false,
    room: "CT Suite",
    modality: "CT",
    durationMinutes: 45,
    startHour: 15,
    endHour: 15.75,
  },
  {
    caseId: "CASE-2026-008",
    crNumber: "SMS-2026-0518",
    patientName: "Mamta Bai",
    procedureName: "Transcatheter Arterial Chemoembolization (TACE) for HCC",
    plannedTime: "04:00 PM",
    operatorResident: "Dr. Neel Yadav",
    supervisingConsultant: "Dr. Meenu Bagarhatta",
    status: "FINALIZED_SIGNED",
    fastingConfirmed: true,
    contrastAllergy: false,
    room: "Cath Lab (Philips Azurion)",
    modality: "XA",
    durationMinutes: 75,
    startHour: 16,
    endHour: 17.25,
  },
];

