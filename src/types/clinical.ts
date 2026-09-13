export type StaffRoleCode = 'FC01' | 'FC02' | 'DM01' | 'DM02' | 'SR01' | 'NO01' | 'NO02' | 'TC01' | 'TC02' | 'CR01';

export type StaffTier = 'Faculty' | 'Resident' | 'Nursing' | 'Technician' | 'Counter';

export interface StaffPersona {
  code: StaffRoleCode;
  name: string;
  title: string;
  role: string;
  tier: StaffTier;
  badgeClass: string;
  dept: string;
  desc: string;
}

export type SchemeType = 'MAAY_CHIRANJEEVI' | 'RGHS' | 'BPL' | 'GENERAL';

export interface PatientSafetyProfile {
  id: string;
  crNo: string;
  ipdNo: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  bedNo: string;
  weightKg: number;
  serumCreatinine: number;
  totalBilirubin: number;
  serumAlbumin: number;
  inr: number;
  sodiumMeqL?: number;
  scheme: SchemeType;
  schemeTid: string;
  diagnosis: string;
  procedureName?: string;
  procedureCode?: string;
  admissionDate?: string;
  dischargeDate?: string;
  phone?: string;
}

export type BookingStatus = 'Scheduled' | 'In-Lab' | 'Completed' | 'Deferred';

export interface BookingSlot {
  id: string;
  patientId: string;
  patientName: string;
  age?: number;
  gender?: string;
  phone?: string;
  crNo: string;
  ipdNo: string;
  bedNo: string;
  diagnosis: string;
  procedureCode: string;
  procedureName: string;
  targetDate: string; // YYYY-MM-DD
  slotTime: string;
  isEmergency: boolean;
  d1CallCompleted: boolean;
  status: BookingStatus;
  isUnscheduled?: boolean;
  hardwareIndented?: string;
  vendorContact?: string;
  notes?: string;
  completedAt?: string;
  callDoneAt?: string;
}

export type BiopsyStation = 'D9211_CT' | 'Room922_USG';

export type BiopsyStatus = 'Pending' | 'Report_Received' | 'Lost_To_Followup' | 'Inconclusive';

export interface BiopsyEntry {
  id: string;
  date: string; // YYYY-MM-DD
  station: BiopsyStation;
  crNo: string;
  name: string;
  phone: string;
  organ: string;
  needleGauge: string;
  coresCount: number;
  operatorResident: string;
  pathLab: 'In-House SMS Pathology' | 'External Accredited Lab';
  status: BiopsyStatus;
  diagnosticYield: boolean;
  histopathologyDiagnosis?: string;
  followUpSentDate?: string;
}

export interface GazettedHoliday {
  date: string; // YYYY-MM-DD
  nameEn: string;
  day: string;
  type: 'Gazetted' | 'Restricted';
}

export interface HardwareItem {
  category: string;
  name: string;
  spec: string;
  standardStore: string;
}

export interface ProcedureBlueprint {
  id: string;
  name: string;
  category: string;
  code: string;
  rghsCode?: string;
  icd10: string;
  indications: string[];
  preOpCriteria: string[];
  hardware: HardwareItem[];
  techniqueSteps: string[];
  complications: string[];
  maayTariffInr: number;
  vendorContacts: string[];
}

export interface PrescriptionItem {
  item: string;
  dose: string;
  route: string;
  freq: string;
  duration: string;
  stepDown?: string;
  instructions: string;
  category: string;
}

export interface ConditionalPrnItem {
  trigger: string;
  drug: string;
  dose: string;
  instructions: string;
}

export interface DrugProtocol {
  id: string;
  name: string;
  shortName: string;
  category: string;
  indication: string;
  prescriptions: PrescriptionItem[];
  prnMedications: ConditionalPrnItem[];
  safetyLabsToMonitor: string[];
  recallSchedule: string[];
}

export interface SchemePackage {
  code: string;
  name: string;
  price: number;
  category: string;
  icd10: string;
  scheme: 'MAAY' | 'RGHS';
  implants: { code: string; name: string; price?: number }[];
  documentationChecklist: string[];
}
