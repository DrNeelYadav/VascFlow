"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// ============================================================================
// 11-STAGE ANGIO-SUITE LOGISTICS STATE MACHINE
// ============================================================================
export type LogisticsStage =
  | "ORDERED"                  // 1. Inpatient consult / OPD requisition placed
  | "VETTED_APPROVED"         // 2. IR protocol, access site, contrast, CIRSE risk checked
  | "SCHEDULED"               // 3. Room, time, staff & PACU bed allocated
  | "TRANSPORT_DISPATCHED"    // 4. Call for patient sent to Ward/Porter
  | "IN_TRANSIT"              // 5. Porter actively wheeling patient to suite
  | "PREOP_HOLDING"           // 6. Holding Bay: 2 IDs, 18G IV, NPO, Consent, Coag Labs checked
  | "WHEELS_IN"               // 7. Patient transferred to Angiosuite table
  | "PUNCTURE_ACTIVE"         // 8. Timeout done, sheath in, heparinization, active fluoroscopy
  | "HEMOSTASIS_CLOSURE"      // 9. Sheath pulled, closure device or manual compression
  | "PACU_PHASE_1"            // 10. Hemostasis bedrest timer active, hematoma checks q15m
  | "PACU_PHASE_2_DISCHARGED"; // 11. Aldrete score >= 9, ambulation verified, step-down/discharged

export type CirseRiskTier = 1 | 2 | 3; // 1 = Low, 2 = Moderate, 3 = High (TIPS, PTBD, PCN)

export type HemostasisMethod =
  | "MANUAL_FEMORAL"   // 6 hours strict flat bedrest
  | "ANGIO_SEAL"       // 2 hours bedrest
  | "PERCLOSE_PROGLIDE"// 2 hours bedrest
  | "MYNX_CONTROL"     // 2 hours bedrest
  | "TR_BAND_RADIAL"   // 1 hour graduated release
  | "DIRECT_PRESSURE"; // Superficial

export interface TransitJob {
  porterName: string;
  porterContact: string;
  pickupWard: string;
  destinationRoom: string;
  dispatchRequestedAt: string;
  porterAssignedAt?: string;
  arrivedAtWardAt?: string;
  inTransitAt?: string;
  arrivedHoldingAt?: string;
  delayMinutes: number;
  delayReason?: string;
}

export interface PreOpSafetyChecklist {
  verifiedTwoIdentifiers: boolean;
  ivAccessPatent: boolean;
  ivGaugeAndSite: string; // e.g. "18G Green in Right Forearm"
  npoFastingHours: number;
  isNpoCompliant: boolean;
  consentSignedBilingual: boolean;
  accessSiteMarked: boolean;
  inr: number;
  platelets: number;
  serumCreatinine: number;
  patientWeightKg: number;
  eGfr: number;
  bloodBankCrossMatchedUnits: number; // Required >= 2 for Category 3
  isClearedByNurse: boolean;
  clearedByStaffName?: string;
  clearedAt?: string;
  emergencyOverrideAuthorized: boolean;
  overrideConsultantName?: string;
  overrideReason?: string;
}

export interface IntraOpWatchdog {
  contrastInjectedMl: number;
  cigarroaMacdLimitMl: number; // MACD = (5 * Weight) / Creatinine
  fluoroscopyTimeSeconds: number;
  cumulativeDapGyCm2: number;
  cumulativeAirKermaMgy: number;
  actSecondsCurrent?: number; // Activated Clotting Time (target 250-300s)
  contrastWarningAcknowledged: boolean;
  airKermaWarningAcknowledged: boolean;
}

export interface SuiteTurnoverMetric {
  suiteId: string;
  suiteName: string;
  previousCaseId: string;
  nextCaseId: string;
  wheelsOutTime: string;
  terminalCleanStart?: string;
  terminalCleanComplete?: string;
  airExchangeReady?: string;
  sterileTrayOpened?: string;
  wheelsInTime?: string;
  totalTurnoverMinutes?: number;
  targetMet: boolean; // Target < 20 min
  delayedReason?: string;
}

export interface PacuRecoveryRecord {
  phase: "PHASE_1" | "PHASE_2" | "DISCHARGE_READY";
  accessSite: string;
  hemostasisMethod: HemostasisMethod;
  bedrestDueHours: number;
  bedrestStartedAt: string;
  bedrestCompleted: boolean;
  punctureSiteDry: boolean;
  hematomaDetected: boolean;
  hematomaSizeCm: number;
  distalPulsePalpable: boolean;
  hematomaChecks: Array<{
    timestamp: string;
    intervalMin: number;
    siteStatus: "DRY" | "OOZING" | "HEMATOMA";
    pulseStatus: "STRONG" | "FAINT" | "ABSENT";
    checkedBy: string;
  }>;
  aldreteScore: {
    activity: number;       // 0 - 2
    respiration: number;    // 0 - 2
    circulation: number;    // 0 - 2 (BP within 20% baseline)
    consciousness: number;  // 0 - 2
    o2Sat: number;          // 0 - 2 (SpO2 > 92% on room air)
    total: number;          // Target >= 9 for ward transfer
  };
  spontaneousVoidingVerified: boolean;
  clearedForDischarge: boolean;
  clearedByConsultant?: string;
  clearedAt?: string;
}

export interface PatientLogisticsRecord {
  id: string;
  crNumber: string;
  patientName: string;
  age: number;
  gender: "M" | "F" | "Other";
  ipdWard: string;
  assignedBedId?: string;
  schemeType: "MAAY" | "RGHS" | "GENERAL" | "RAJSICK";
  schemeCardNumber: string;
  diagnosis: string;
  procedureTitle: string;
  cirseRiskTier: CirseRiskTier;
  scheduledRoom: string;
  scheduledTime: string;
  estimatedDurationMin: number;
  primaryOperator: string;
  supervisingConsultant: string;
  currentStage: LogisticsStage;
  stageUpdatedAt: string;
  isStatEmergency: boolean;
  isBumpedStandby?: boolean;
  transitJob: TransitJob;
  preOpChecklist: PreOpSafetyChecklist;
  intraOpWatchdog: IntraOpWatchdog;
  pacuRecovery: PacuRecoveryRecord;
  dischargeStatus?: string;
  status?: string;
  history: Array<{
    stage: LogisticsStage;
    timestamp: string;
    actor: string;
    notes?: string;
  }>;
}

// ============================================================================
// INITIAL SEED DATA (SMS Medical College & Attached Hospitals Cohort)
// ============================================================================
const INITIAL_LOGISTICS_PATIENTS: PatientLogisticsRecord[] = [
  {
    id: "PT01",
    crNumber: "SMS-2026-LP01",
    patientName: "Lakshmi",
    age: 45,
    gender: "F",
    ipdWard: "IR ICU, Bed 01",
    assignedBedId: "ICU-01",
    schemeType: "MAAY",
    schemeCardNumber: "MM-JAIPUR-88392",
    diagnosis: "Hypersplenism post Splenic Artery Embolization",
    procedureTitle: "Splenic Artery Embolization for Hypersplenism",
    cirseRiskTier: 3,
    scheduledRoom: "Cath Lab 1 (Philips Azurion Biplane)",
    scheduledTime: "08:30 AM",
    estimatedDurationMin: 90,
    primaryOperator: "Dr. Meenu Bagarhatta (Sr. Prof & Head)",
    supervisingConsultant: "Dr. Meenu Bagarhatta (Sr. Prof & Head)",
    currentStage: "PACU_PHASE_1",
    status: "post-procedure",
    stageUpdatedAt: new Date(Date.now() - 35 * 60 * 1000).toISOString(),
    isStatEmergency: false,
    transitJob: {
      porterName: "Ram Lal (Porter #14)",
      porterContact: "+91 98290 11221",
      pickupWard: "IR ICU, Bed 01",
      destinationRoom: "Cath Lab 1",
      dispatchRequestedAt: new Date(Date.now() - 150 * 60 * 1000).toISOString(),
      porterAssignedAt: new Date(Date.now() - 145 * 60 * 1000).toISOString(),
      arrivedAtWardAt: new Date(Date.now() - 135 * 60 * 1000).toISOString(),
      inTransitAt: new Date(Date.now() - 125 * 60 * 1000).toISOString(),
      arrivedHoldingAt: new Date(Date.now() - 110 * 60 * 1000).toISOString(),
      delayMinutes: 5,
    },
    preOpChecklist: {
      verifiedTwoIdentifiers: true,
      ivAccessPatent: true,
      ivGaugeAndSite: "18G Green Right Forearm",
      npoFastingHours: 8,
      isNpoCompliant: true,
      consentSignedBilingual: true,
      accessSiteMarked: true,
      inr: 1.15,
      platelets: 185000,
      serumCreatinine: 0.9,
      patientWeightKg: 64,
      eGfr: 92,
      bloodBankCrossMatchedUnits: 2,
      isClearedByNurse: true,
      clearedByStaffName: "Anita (Sister Incharge)",
      clearedAt: new Date(Date.now() - 95 * 60 * 1000).toISOString(),
      emergencyOverrideAuthorized: false,
    },
    intraOpWatchdog: {
      contrastInjectedMl: 110,
      cigarroaMacdLimitMl: 355.5, // (5 * 64) / 0.9
      fluoroscopyTimeSeconds: 1220,
      cumulativeDapGyCm2: 38.2,
      cumulativeAirKermaMgy: 1250,
      actSecondsCurrent: 265,
      contrastWarningAcknowledged: false,
      airKermaWarningAcknowledged: false,
    },
    pacuRecovery: {
      phase: "PHASE_1",
      accessSite: "Right Common Femoral Artery (5F)",
      hemostasisMethod: "ANGIO_SEAL",
      bedrestDueHours: 4,
      bedrestStartedAt: new Date(Date.now() - 35 * 60 * 1000).toISOString(),
      bedrestCompleted: false,
      punctureSiteDry: true,
      hematomaDetected: false,
      hematomaSizeCm: 0,
      distalPulsePalpable: true,
      hematomaChecks: [
        {
          timestamp: new Date(Date.now() - 20 * 60 * 1000).toISOString(),
          intervalMin: 15,
          siteStatus: "DRY",
          pulseStatus: "STRONG",
          checkedBy: "Anita (Sister Incharge)",
        },
      ],
      aldreteScore: {
        activity: 2,
        respiration: 2,
        circulation: 2,
        consciousness: 2,
        o2Sat: 2,
        total: 10,
      },
      spontaneousVoidingVerified: false,
      clearedForDischarge: false,
    },
    history: [
      { stage: "ORDERED", timestamp: "2026-09-14T07:00:00Z", actor: "Dr. Meenu Bagarhatta" },
      { stage: "VETTED_APPROVED", timestamp: "2026-09-14T07:15:00Z", actor: "Dr. Meenu Bagarhatta" },
      { stage: "SCHEDULED", timestamp: "2026-09-14T07:30:00Z", actor: "Cath Lab Coordinator" },
      { stage: "TRANSPORT_DISPATCHED", timestamp: "2026-09-14T08:00:00Z", actor: "Sister Anita" },
      { stage: "IN_TRANSIT", timestamp: "2026-09-14T08:15:00Z", actor: "Ram Lal (Porter)" },
      { stage: "PREOP_HOLDING", timestamp: "2026-09-14T08:25:00Z", actor: "Sister Anita" },
      { stage: "WHEELS_IN", timestamp: "2026-09-14T08:45:00Z", actor: "JP (Tech)" },
      { stage: "PUNCTURE_ACTIVE", timestamp: "2026-09-14T09:00:00Z", actor: "Dr. Meenu Bagarhatta" },
      { stage: "HEMOSTASIS_CLOSURE", timestamp: "2026-09-14T10:10:00Z", actor: "Dr. Meenu Bagarhatta" },
      { stage: "PACU_PHASE_1", timestamp: "2026-09-14T10:25:00Z", actor: "Sister Anita" },
    ],
  },
  {
    id: "PT02",
    crNumber: "SMS-2026-RS01",
    patientName: "Roshan",
    age: 38,
    gender: "M",
    ipdWard: "Old Gastro IR Ward, Bed 01",
    assignedBedId: "Ward-01",
    schemeType: "MAAY",
    schemeCardNumber: "MM-RJ-9921004",
    diagnosis: "Liquefactive Pyogenic Liver Abscess",
    procedureTitle: "Percutaneous Liver Abscess Drainage",
    cirseRiskTier: 2,
    scheduledRoom: "Cath Lab 1 (Philips Azurion Biplane)",
    scheduledTime: "10:30 AM",
    estimatedDurationMin: 90,
    primaryOperator: "Dr. Naresh Mangalhara (Associate Professor)",
    supervisingConsultant: "Dr. Naresh Mangalhara (Associate Professor)",
    currentStage: "PACU_PHASE_1",
    status: "post-procedure",
    dischargeStatus: "AJH (Allowed to Go Home)",
    stageUpdatedAt: new Date(Date.now() - 25 * 60 * 1000).toISOString(),
    isStatEmergency: false,
    transitJob: {
      porterName: "Mohan Singh (Porter #08)",
      porterContact: "+91 98290 33442",
      pickupWard: "Old Gastro IR Ward, Bed 01",
      destinationRoom: "Cath Lab 1",
      dispatchRequestedAt: new Date(Date.now() - 90 * 60 * 1000).toISOString(),
      porterAssignedAt: new Date(Date.now() - 85 * 60 * 1000).toISOString(),
      arrivedAtWardAt: new Date(Date.now() - 75 * 60 * 1000).toISOString(),
      inTransitAt: new Date(Date.now() - 65 * 60 * 1000).toISOString(),
      arrivedHoldingAt: new Date(Date.now() - 50 * 60 * 1000).toISOString(),
      delayMinutes: 0,
    },
    preOpChecklist: {
      verifiedTwoIdentifiers: true,
      ivAccessPatent: true,
      ivGaugeAndSite: "18G Green Left Forearm",
      npoFastingHours: 6,
      isNpoCompliant: true,
      consentSignedBilingual: true,
      accessSiteMarked: true,
      inr: 1.3,
      platelets: 112000,
      serumCreatinine: 1.0,
      patientWeightKg: 62,
      eGfr: 82,
      bloodBankCrossMatchedUnits: 2,
      isClearedByNurse: true,
      clearedByStaffName: "Anita (Sister Incharge)",
      clearedAt: new Date(Date.now() - 40 * 60 * 1000).toISOString(),
      emergencyOverrideAuthorized: false,
    },
    intraOpWatchdog: {
      contrastInjectedMl: 95,
      cigarroaMacdLimitMl: 310.0,
      fluoroscopyTimeSeconds: 840,
      cumulativeDapGyCm2: 26.5,
      cumulativeAirKermaMgy: 890,
      actSecondsCurrent: 260,
      contrastWarningAcknowledged: false,
      airKermaWarningAcknowledged: false,
    },
    pacuRecovery: {
      phase: "PHASE_1",
      accessSite: "Right Common Femoral Artery (5F)",
      hemostasisMethod: "MANUAL_FEMORAL",
      bedrestDueHours: 6,
      bedrestStartedAt: "",
      bedrestCompleted: false,
      punctureSiteDry: true,
      hematomaDetected: false,
      hematomaSizeCm: 0,
      distalPulsePalpable: true,
      hematomaChecks: [],
      aldreteScore: { activity: 2, respiration: 2, circulation: 2, consciousness: 2, o2Sat: 2, total: 10 },
      spontaneousVoidingVerified: false,
      clearedForDischarge: false,
    },
    history: [
      { stage: "ORDERED", timestamp: "2026-09-14T08:00:00Z", actor: "Dr. Naresh Mangalhara" },
      { stage: "VETTED_APPROVED", timestamp: "2026-09-14T08:20:00Z", actor: "Dr. Naresh Mangalhara" },
      { stage: "SCHEDULED", timestamp: "2026-09-14T08:30:00Z", actor: "Cath Lab Coordinator" },
      { stage: "TRANSPORT_DISPATCHED", timestamp: "2026-09-14T09:00:00Z", actor: "Sister Anita" },
      { stage: "IN_TRANSIT", timestamp: "2026-09-14T09:20:00Z", actor: "Mohan Singh (Porter)" },
      { stage: "PREOP_HOLDING", timestamp: "2026-09-14T09:40:00Z", actor: "Sister Anita" },
      { stage: "WHEELS_IN", timestamp: "2026-09-14T10:05:00Z", actor: "Sumit (Tech)" },
      { stage: "PUNCTURE_ACTIVE", timestamp: "2026-09-14T10:20:00Z", actor: "Dr. Naresh Mangalhara" },
    ],
  },
];

// Room turnover tracking state
const INITIAL_ROOM_TURNOVER: SuiteTurnoverMetric = {
  suiteId: "AZURION_01",
  suiteName: "Cath Lab 1 (Philips Azurion Biplane)",
  previousCaseId: "PT01",
  nextCaseId: "PT02",
  wheelsOutTime: new Date(Date.now() - 35 * 60 * 1000).toISOString(),
  terminalCleanStart: new Date(Date.now() - 33 * 60 * 1000).toISOString(),
  terminalCleanComplete: new Date(Date.now() - 25 * 60 * 1000).toISOString(),
  airExchangeReady: new Date(Date.now() - 22 * 60 * 1000).toISOString(),
  sterileTrayOpened: new Date(Date.now() - 18 * 60 * 1000).toISOString(),
  wheelsInTime: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
  totalTurnoverMinutes: 20,
  targetMet: true,
};

// ============================================================================
// ZUSTAND STORE INTERFACE
// ============================================================================
interface PatientLogisticsState {
  patients: PatientLogisticsRecord[];
  activeTurnover: SuiteTurnoverMetric;
  selectedPatientId: string;
  isEmergencyModalOpen: boolean;

  // Actions
  setSelectedPatientId: (id: string) => void;
  setIsEmergencyModalOpen: (open: boolean) => void;

  // 11-Stage State Machine Transitions
  transitionStage: (
    patientId: string,
    targetStage: LogisticsStage,
    actorStaffName: string,
    notes?: string
  ) => void;

  // Porter Dispatch Operations
  dispatchPorter: (
    patientId: string,
    porterName: string,
    porterContact: string,
    pickupWard: string
  ) => void;
  updateTransitMilestone: (
    patientId: string,
    milestone: "ARRIVED_AT_WARD" | "IN_TRANSIT" | "ARRIVED_HOLDING_BAY"
  ) => void;

  // Pre-Op Safety Gatekeeper
  updatePreOpChecklist: (
    patientId: string,
    updates: Partial<PreOpSafetyChecklist>
  ) => void;
  clearHoldingBayAdmission: (
    patientId: string,
    nurseStaffName: string
  ) => { success: boolean; reason?: string };
  authorizeEmergencyOverride: (
    patientId: string,
    consultantName: string,
    reason: string
  ) => void;

  // Intra-Op Watchdogs (Contrast & Radiation)
  addContrastVolume: (patientId: string, additionalMl: number) => void;
  updateRadiationTelemetry: (
    patientId: string,
    fluoroSec: number,
    dap: number,
    airKerma: number
  ) => void;

  // Room Turnover Management (<20 min KPI)
  recordTurnoverMilestone: (
    milestone: "TERMINAL_CLEAN_START" | "TERMINAL_CLEAN_DONE" | "AIR_EXCHANGE_DONE" | "TRAY_OPENED" | "WHEELS_IN"
  ) => void;

  // PACU Recovery & Bedrest Surveillance
  recordHematomaCheck: (
    patientId: string,
    siteStatus: "DRY" | "OOZING" | "HEMATOMA",
    pulseStatus: "STRONG" | "FAINT" | "ABSENT",
    checkedBy: string
  ) => void;
  updateAldreteScores: (
    patientId: string,
    scores: Partial<PacuRecoveryRecord["aldreteScore"]>
  ) => void;
  clearForDischarge: (patientId: string, consultantName: string) => void;

  // One-Click STAT Emergency Bumping (Code Angio)
  triggerStatEmergencyBumping: (
    emergencyPatient: {
      patientName: string;
      crNumber: string;
      age: number;
      gender: "M" | "F";
      diagnosis: string;
      procedureTitle: string;
      schemeType: "MAAY" | "RGHS" | "GENERAL";
    },
    targetRoom: string,
    consultantName: string
  ) => void;

  // Reset to factory SMS baseline
  resetToDefaultBaseline: () => void;
}

export const usePatientLogisticsStore = create<PatientLogisticsState>()(
  persist(
    (set, get) => ({
      patients: INITIAL_LOGISTICS_PATIENTS,
      activeTurnover: INITIAL_ROOM_TURNOVER,
      selectedPatientId: "PT01",
      isEmergencyModalOpen: false,

      setSelectedPatientId: (id) => set({ selectedPatientId: id }),
      setIsEmergencyModalOpen: (open) => set({ isEmergencyModalOpen: open }),

      transitionStage: (patientId, targetStage, actorStaffName, notes) => {
        set((state) => {
          const now = new Date().toISOString();
          const updated = state.patients.map((pt) => {
            if (pt.id !== patientId) return pt;

            const updatedHistory = [
              ...pt.history,
              { stage: targetStage, timestamp: now, actor: actorStaffName, notes },
            ];

            // Auto-timestamp milestone trackers
            const pacuUpdates: Partial<PacuRecoveryRecord> = {};
            if (targetStage === "PACU_PHASE_1" && !pt.pacuRecovery.bedrestStartedAt) {
              pacuUpdates.bedrestStartedAt = now;
            }

            return {
              ...pt,
              currentStage: targetStage,
              stageUpdatedAt: now,
              history: updatedHistory,
              pacuRecovery: { ...pt.pacuRecovery, ...pacuUpdates },
            };
          });

          return { patients: updated };
        });
      },

      dispatchPorter: (patientId, porterName, porterContact, pickupWard) => {
        set((state) => {
          const now = new Date().toISOString();
          const updated = state.patients.map((pt) => {
            if (pt.id !== patientId) return pt;
            return {
              ...pt,
              currentStage: "TRANSPORT_DISPATCHED" as LogisticsStage,
              stageUpdatedAt: now,
              transitJob: {
                ...pt.transitJob,
                porterName,
                porterContact,
                pickupWard,
                dispatchRequestedAt: now,
                porterAssignedAt: now,
              },
              history: [
                ...pt.history,
                {
                  stage: "TRANSPORT_DISPATCHED" as LogisticsStage,
                  timestamp: now,
                  actor: "Logistics Dispatcher",
                  notes: `Porter ${porterName} dispatched to ${pickupWard}`,
                },
              ],
            };
          });
          return { patients: updated };
        });
      },

      updateTransitMilestone: (patientId, milestone) => {
        set((state) => {
          const now = new Date().toISOString();
          const updated = state.patients.map((pt) => {
            if (pt.id !== patientId) return pt;
            const updates: Partial<TransitJob> = {};
            let nextStage = pt.currentStage;

            if (milestone === "ARRIVED_AT_WARD") {
              updates.arrivedAtWardAt = now;
            } else if (milestone === "IN_TRANSIT") {
              updates.inTransitAt = now;
              nextStage = "IN_TRANSIT";
            } else if (milestone === "ARRIVED_HOLDING_BAY") {
              updates.arrivedHoldingAt = now;
              nextStage = "PREOP_HOLDING";
            }

            return {
              ...pt,
              currentStage: nextStage as LogisticsStage,
              stageUpdatedAt: now,
              transitJob: { ...pt.transitJob, ...updates },
              history: [
                ...pt.history,
                { stage: nextStage as LogisticsStage, timestamp: now, actor: pt.transitJob.porterName || "Porter", notes: `Milestone: ${milestone}` },
              ],
            };
          });
          return { patients: updated };
        });
      },

      updatePreOpChecklist: (patientId, updates) => {
        set((state) => {
          const updated = state.patients.map((pt) => {
            if (pt.id !== patientId) return pt;
            const newChecklist = { ...pt.preOpChecklist, ...updates };

            // Recalculate eGFR using CKD-EPI 2021
            if (updates.serumCreatinine !== undefined || updates.patientWeightKg !== undefined) {
              const scr = newChecklist.serumCreatinine || 1.0;
              const wt = newChecklist.patientWeightKg || 60;
              const isFemale = pt.gender === "F";
              const kappa = isFemale ? 0.7 : 0.9;
              const alpha = isFemale ? -0.241 : -0.302;
              const minRatio = Math.min(scr / kappa, 1);
              const maxRatio = Math.max(scr / kappa, 1);
              const egfrVal = Math.round(
                142 *
                  Math.pow(minRatio, alpha) *
                  Math.pow(maxRatio, -1.2) *
                  Math.pow(0.9938, pt.age) *
                  (isFemale ? 1.012 : 1)
              );
              newChecklist.eGfr = egfrVal;

              // Recalculate Cigarroa MACD: (5 * Wt) / Scr
              const newMacd = Math.round(((5 * wt) / scr) * 10) / 10;
              pt.intraOpWatchdog.cigarroaMacdLimitMl = newMacd;
            }

            return { ...pt, preOpChecklist: newChecklist };
          });
          return { patients: updated };
        });
      },

      clearHoldingBayAdmission: (patientId, nurseStaffName) => {
        const patient = get().patients.find((p) => p.id === patientId);
        if (!patient) return { success: false, reason: "Patient not found" };

        const chk = patient.preOpChecklist;
        const missing: string[] = [];

        if (!chk.verifiedTwoIdentifiers) missing.push("2 Identifiers (Wristband/ID)");
        if (!chk.ivAccessPatent) missing.push("Patent 18G/20G IV Access");
        if (!chk.isNpoCompliant && !chk.emergencyOverrideAuthorized) missing.push("Fasting (NPO) Requirement");
        if (!chk.consentSignedBilingual) missing.push("Bilingual Statutory Consent");

        // CIRSE Coagulation threshold checks
        if (patient.cirseRiskTier === 3) {
          if (chk.inr > 1.5 && !chk.emergencyOverrideAuthorized) missing.push(`INR elevated (${chk.inr} > 1.5) for Tier 3 High Bleed Risk`);
          if (chk.platelets < 50000 && !chk.emergencyOverrideAuthorized) missing.push(`Platelets critically low (${chk.platelets.toLocaleString()} < 50,000)`);
          if (chk.bloodBankCrossMatchedUnits < 2 && !chk.emergencyOverrideAuthorized) missing.push("Blood Bank 2-Unit PRBC Crossmatch Required");
        } else if (patient.cirseRiskTier === 2) {
          if (chk.inr > 1.5 && !chk.emergencyOverrideAuthorized) missing.push(`INR elevated (${chk.inr} > 1.5)`);
          if (chk.platelets < 50000 && !chk.emergencyOverrideAuthorized) missing.push(`Platelets < 50,000`);
        } else {
          if (chk.inr > 2.0 && !chk.emergencyOverrideAuthorized) missing.push(`INR > 2.0`);
        }

        if (missing.length > 0) {
          return {
            success: false,
            reason: `Pre-op Safety Hard-Stop: The following requirements are unmet:\n• ${missing.join("\n• ")}`,
          };
        }

        const now = new Date().toISOString();
        set((state) => {
          const updated = state.patients.map((pt) => {
            if (pt.id !== patientId) return pt;
            return {
              ...pt,
              preOpChecklist: {
                ...pt.preOpChecklist,
                isClearedByNurse: true,
                clearedByStaffName: nurseStaffName,
                clearedAt: now,
              },
              history: [
                ...pt.history,
                {
                  stage: pt.currentStage,
                  timestamp: now,
                  actor: nurseStaffName,
                  notes: "Pre-op Safety Gatekeeper Passed: 100% Verified",
                },
              ],
            };
          });
          return { patients: updated };
        });

        return { success: true };
      },

      authorizeEmergencyOverride: (patientId, consultantName, reason) => {
        const now = new Date().toISOString();
        set((state) => {
          const updated = state.patients.map((pt) => {
            if (pt.id !== patientId) return pt;
            return {
              ...pt,
              preOpChecklist: {
                ...pt.preOpChecklist,
                emergencyOverrideAuthorized: true,
                overrideConsultantName: consultantName,
                overrideReason: reason,
                isClearedByNurse: true,
                clearedByStaffName: `OVERRIDE: ${consultantName}`,
                clearedAt: now,
              },
              history: [
                ...pt.history,
                {
                  stage: pt.currentStage,
                  timestamp: now,
                  actor: consultantName,
                  notes: `EMERGENCY CLINICAL OVERRIDE: ${reason}`,
                },
              ],
            };
          });
          return { patients: updated };
        });
      },

      addContrastVolume: (patientId, additionalMl) => {
        set((state) => {
          const updated = state.patients.map((pt) => {
            if (pt.id !== patientId) return pt;
            const newVol = pt.intraOpWatchdog.contrastInjectedMl + additionalMl;
            return {
              ...pt,
              intraOpWatchdog: {
                ...pt.intraOpWatchdog,
                contrastInjectedMl: newVol,
              },
            };
          });
          return { patients: updated };
        });
      },

      updateRadiationTelemetry: (patientId, fluoroSec, dap, airKerma) => {
        set((state) => {
          const updated = state.patients.map((pt) => {
            if (pt.id !== patientId) return pt;
            return {
              ...pt,
              intraOpWatchdog: {
                ...pt.intraOpWatchdog,
                fluoroscopyTimeSeconds: fluoroSec,
                cumulativeDapGyCm2: dap,
                cumulativeAirKermaMgy: airKerma,
              },
            };
          });
          return { patients: updated };
        });
      },

      recordTurnoverMilestone: (milestone) => {
        set((state) => {
          const now = new Date().toISOString();
          const t = state.activeTurnover;
          const updates: Partial<SuiteTurnoverMetric> = {};

          if (milestone === "TERMINAL_CLEAN_START") updates.terminalCleanStart = now;
          if (milestone === "TERMINAL_CLEAN_DONE") updates.terminalCleanComplete = now;
          if (milestone === "AIR_EXCHANGE_DONE") updates.airExchangeReady = now;
          if (milestone === "TRAY_OPENED") updates.sterileTrayOpened = now;
          if (milestone === "WHEELS_IN") {
            updates.wheelsInTime = now;
            const diffMs = new Date(now).getTime() - new Date(t.wheelsOutTime).getTime();
            const minutes = Math.round(diffMs / 60000);
            updates.totalTurnoverMinutes = minutes;
            updates.targetMet = minutes <= 20;
          }

          return { activeTurnover: { ...t, ...updates } };
        });
      },

      recordHematomaCheck: (patientId, siteStatus, pulseStatus, checkedBy) => {
        set((state) => {
          const now = new Date().toISOString();
          const updated = state.patients.map((pt) => {
            if (pt.id !== patientId) return pt;
            const checkList = [
              ...pt.pacuRecovery.hematomaChecks,
              {
                timestamp: now,
                intervalMin: (pt.pacuRecovery.hematomaChecks.length + 1) * 15,
                siteStatus,
                pulseStatus,
                checkedBy,
              },
            ];
            return {
              ...pt,
              pacuRecovery: {
                ...pt.pacuRecovery,
                punctureSiteDry: siteStatus === "DRY",
                hematomaDetected: siteStatus === "HEMATOMA",
                distalPulsePalpable: pulseStatus === "STRONG",
                hematomaChecks: checkList,
              },
            };
          });
          return { patients: updated };
        });
      },

      updateAldreteScores: (patientId, scores) => {
        set((state) => {
          const updated = state.patients.map((pt) => {
            if (pt.id !== patientId) return pt;
            const current = pt.pacuRecovery.aldreteScore;
            const newScores = { ...current, ...scores };
            newScores.total =
              newScores.activity +
              newScores.respiration +
              newScores.circulation +
              newScores.consciousness +
              newScores.o2Sat;

            return {
              ...pt,
              pacuRecovery: {
                ...pt.pacuRecovery,
                aldreteScore: newScores,
              },
            };
          });
          return { patients: updated };
        });
      },

      clearForDischarge: (patientId, consultantName) => {
        const now = new Date().toISOString();
        set((state) => {
          const updated = state.patients.map((pt) => {
            if (pt.id !== patientId) return pt;
            return {
              ...pt,
              currentStage: "PACU_PHASE_2_DISCHARGED" as LogisticsStage,
              stageUpdatedAt: now,
              pacuRecovery: {
                ...pt.pacuRecovery,
                phase: "DISCHARGE_READY" as const,
                clearedForDischarge: true,
                clearedByConsultant: consultantName,
                clearedAt: now,
              },
              history: [
                ...pt.history,
                {
                  stage: "PACU_PHASE_2_DISCHARGED" as LogisticsStage,
                  timestamp: now,
                  actor: consultantName,
                  notes: "PACU Aldrete Clearance Approved -> Discharged / Transferred to Ward",
                },
              ],
            };
          });
          return { patients: updated };
        });
      },

      triggerStatEmergencyBumping: (emergencyData, targetRoom, consultantName) => {
        set((state) => {
          const now = new Date().toISOString();
          const emergencyId = `STAT-${Date.now().toString().slice(-4)}`;

          // Create the STAT emergency patient entering active table
          const statRecord: PatientLogisticsRecord = {
            id: emergencyId,
            crNumber: emergencyData.crNumber,
            patientName: emergencyData.patientName,
            age: emergencyData.age,
            gender: emergencyData.gender,
            ipdWard: "Emergency Trauma / Stroke Resuscitation",
            schemeType: emergencyData.schemeType,
            schemeCardNumber: "STAT-EMERGENCY",
            diagnosis: emergencyData.diagnosis,
            procedureTitle: emergencyData.procedureTitle,
            cirseRiskTier: 3,
            scheduledRoom: targetRoom,
            scheduledTime: "STAT NOW",
            estimatedDurationMin: 90,
            primaryOperator: "Dr. Meenu Bagarhatta (Sr. Prof & Head)",
            supervisingConsultant: consultantName,
            currentStage: "WHEELS_IN",
            stageUpdatedAt: now,
            isStatEmergency: true,
            transitJob: {
              porterName: "STAT Trauma Team",
              porterContact: "Ext 222",
              pickupWard: "Emergency Room",
              destinationRoom: targetRoom,
              dispatchRequestedAt: now,
              porterAssignedAt: now,
              arrivedAtWardAt: now,
              inTransitAt: now,
              arrivedHoldingAt: now,
              delayMinutes: 0,
            },
            preOpChecklist: {
              verifiedTwoIdentifiers: true,
              ivAccessPatent: true,
              ivGaugeAndSite: "16G Grey in Right AC Fossa",
              npoFastingHours: 0,
              isNpoCompliant: false,
              consentSignedBilingual: true,
              accessSiteMarked: true,
              inr: 1.1,
              platelets: 180000,
              serumCreatinine: 1.0,
              patientWeightKg: 65,
              eGfr: 85,
              bloodBankCrossMatchedUnits: 2,
              isClearedByNurse: true,
              clearedByStaffName: `STAT: ${consultantName}`,
              clearedAt: now,
              emergencyOverrideAuthorized: true,
              overrideConsultantName: consultantName,
              overrideReason: "Imminent life/limb threat - emergency preemption",
            },
            intraOpWatchdog: {
              contrastInjectedMl: 0,
              cigarroaMacdLimitMl: 325,
              fluoroscopyTimeSeconds: 0,
              cumulativeDapGyCm2: 0,
              cumulativeAirKermaMgy: 0,
              contrastWarningAcknowledged: false,
              airKermaWarningAcknowledged: false,
            },
            pacuRecovery: {
              phase: "PHASE_1",
              accessSite: "Femoral / Radial",
              hemostasisMethod: "PERCLOSE_PROGLIDE",
              bedrestDueHours: 4,
              bedrestStartedAt: "",
              bedrestCompleted: false,
              punctureSiteDry: true,
              hematomaDetected: false,
              hematomaSizeCm: 0,
              distalPulsePalpable: true,
              hematomaChecks: [],
              aldreteScore: { activity: 2, respiration: 2, circulation: 2, consciousness: 2, o2Sat: 2, total: 10 },
              spontaneousVoidingVerified: false,
              clearedForDischarge: false,
            },
            history: [
              {
                stage: "WHEELS_IN" as LogisticsStage,
                timestamp: now,
                actor: consultantName,
                notes: `ONE-CLICK STAT EMERGENCY ACTIVATION: Preempted elective suite ${targetRoom}`,
              },
            ],
          };

          // Shift subsequent elective cases in this room
          const bumpedPatients = state.patients.map((p) => {
            if (p.scheduledRoom === targetRoom && (p.currentStage === "SCHEDULED" || p.currentStage === "TRANSPORT_DISPATCHED" || p.currentStage === "PREOP_HOLDING")) {
              return {
                ...p,
                isBumpedStandby: true,
                history: [
                  ...p.history,
                  {
                    stage: p.currentStage,
                    timestamp: now,
                    actor: "Automated Cascade Ripple Engine",
                    notes: `BUMPED TO STANDBY (+75 min delay) due to emergent preemption by ${emergencyData.patientName} (${emergencyData.diagnosis})`,
                  },
                ],
              };
            }
            return p;
          });

          return {
            patients: [statRecord, ...bumpedPatients],
            selectedPatientId: emergencyId,
            isEmergencyModalOpen: false,
          };
        });
      },

      resetToDefaultBaseline: () => {
        set({
          patients: INITIAL_LOGISTICS_PATIENTS,
          activeTurnover: INITIAL_ROOM_TURNOVER,
          selectedPatientId: "PT01",
          isEmergencyModalOpen: false,
        });
      },
    }),
    {
      name: "vascule_patient_logistics_v1",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
