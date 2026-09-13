/**
 * Vascule OS Mobile Companion: Ward Rounds & Bedside Telemetry Types
 */

export type WardLocation =
  | "ALL"
  | "VASCULAR_SURGERY_3B"
  | "CARDIOTHORACIC_ICU"
  | "NEPHROLOGY_HD"
  | "EMERGENCY_TRIAGE";

export type SignOffStatus = "PENDING" | "SIGNED_OFF" | "STAT_FLAGGED";

export interface BedsideVitals {
  abp: string;           // e.g. "118/76"
  map: number;           // e.g. 90 mmHg
  heartRate: number;     // e.g. 74 bpm
  spo2: number;          // e.g. 99 %
  temperatureC: number;  // e.g. 37.1 C
  respiratoryRate: number; // e.g. 14 /min
  lastUpdated: string;
}

export interface WardRoundPatient {
  id: string;
  crNo: string;
  ipdNo: string;
  name: string;
  age: number;
  gender: string;
  ward: WardLocation;
  bedNo: string;
  diagnosis: string;
  plannedProcedure: string;
  serumCreatinine: number;  // mg/dL
  weightKg: number;
  contrastMlInjected: number;
  cigarroaMacdLimit: number; // calculated 5 * weight / Cr
  vitals: BedsideVitals;
  signOffStatus: SignOffStatus;
  signOffNotes?: string;
  signedOffBy?: string;
  signedOffAt?: string;
  tenantId: string;
}

export type OfflineSyncActionType =
  | "PHYSICIAN_SIGN_OFF"
  | "UPDATE_BEDSIDE_VITALS"
  | "DISPATCH_STAT_PAGE";

export interface OfflineSyncQueueItem {
  id: string;
  patientId: string;
  tenantId: string;
  actionType: OfflineSyncActionType;
  payload: Record<string, unknown>;
  timestamp: string;
  synced: boolean;
  retryCount: number;
}

export interface WardRoundsFilterState {
  ward: WardLocation;
  searchQuery: string;
  onlyPendingSignOff: boolean;
}
