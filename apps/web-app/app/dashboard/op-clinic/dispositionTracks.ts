import { ClinicalDisposition } from "../../types/clinical";

export interface DispositionTrackDef {
  key: ClinicalDisposition;
  title: string;
  badge: string;
  badgeTone: "alert" | "info" | "verified" | "holding" | "neutral";
  summary: string;
  description: string;
  borderActive: string;
  bgActive: string;
  ringActive: string;
}

export const DISPOSITION_TRACKS: DispositionTrackDef[] = [
  {
    key: "STAT_CATH_LAB",
    title: "STAT Cath-Lab Emergency",
    badge: "Immediate Table",
    badgeTone: "alert",
    summary: "Immediate angio suite activation (Active hemorrhage, acute stroke/limb ischemia)",
    description: "Transferred directly to Cath-Lab Table 01. Zero ward beds locked.",
    borderActive: "border-rose-500 dark:border-rose-500",
    bgActive: "bg-rose-50/70 dark:bg-rose-950/30",
    ringActive: "ring-rose-500",
  },
  {
    key: "ADMIT_WARD_PREOP",
    title: "Inpatient Ward Pre-Op",
    badge: "Locks Ward Bed",
    badgeTone: "info",
    summary: "Pre-procedure admission, clinical optimization & coagulopathy correction",
    description: "Allocates 1 of 8 Ward/ICU beds for workup, hydration & pre-procedure prep.",
    borderActive: "border-blue-600 dark:border-blue-500",
    bgActive: "bg-blue-50/70 dark:bg-blue-950/30",
    ringActive: "ring-blue-600",
  },
  {
    key: "ELECTIVE_OUTPATIENT",
    title: "Elective Outpatient Day-Care",
    badge: "Outpatient Slot",
    badgeTone: "verified",
    summary: "Scheduled elective procedure without prior inpatient ward admission",
    description: "Patient arrives on morning of procedure. Day-care discharge. Zero ward beds locked.",
    borderActive: "border-emerald-600 dark:border-emerald-500",
    bgActive: "bg-emerald-50/70 dark:bg-emerald-950/30",
    ringActive: "ring-emerald-600",
  },
  {
    key: "NO_INTERVENTION_NEEDED",
    title: "Conservative Referral",
    badge: "No IR Target",
    badgeTone: "neutral",
    summary: "Conservative medical therapy or formal transfer back to primary specialty",
    description: "No endovascular target identified. Formal specialist review & clearance recorded.",
    borderActive: "border-slate-500 dark:border-slate-400",
    bgActive: "bg-slate-100/80 dark:bg-slate-800/50",
    ringActive: "ring-slate-500",
  },
  {
    key: "DEFERRED_REVIEW_SOS",
    title: "Deferred Review (SOS)",
    badge: "Watchful Waiting",
    badgeTone: "holding",
    summary: "Symptom-driven re-evaluation with explicit red-flag triggers",
    description: "Standby tracking. Immediate return triggered by clinical deterioration or onset of alarms.",
    borderActive: "border-amber-500 dark:border-amber-400",
    bgActive: "bg-amber-50/70 dark:bg-amber-950/30",
    ringActive: "ring-amber-500",
  },
  {
    key: "SURVEILLANCE_PROTOCOL",
    title: "Interval Surveillance",
    badge: "Interval Imaging",
    badgeTone: "info",
    summary: "Longitudinal post-intervention surveillance or tumor response monitoring",
    description: "Enrolled into 3, 6, or 12-month cross-sectional imaging surveillance registry.",
    borderActive: "border-indigo-500 dark:border-indigo-400",
    bgActive: "bg-indigo-50/70 dark:bg-indigo-950/30",
    ringActive: "ring-indigo-500",
  },
];
