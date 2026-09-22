"use client";

import React, { useState, useEffect } from "react";
import type { CaseStatus } from "./worklistData";
import {
  calculateCKDEPI,
  evaluateContrastSafety,
  evaluateBleedingRisk,
  evaluateRadiationDose,
} from "@vascule/utils";
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  X,
  ArrowRight,
  Stethoscope,
  Activity,
  AlertOctagon,
  Flame,
  KeyRound,
} from "lucide-react";

export const BREAK_GLASS_REASONS = [
  "STAT Hemorrhage / Active Bleeding",
  "Acute Ischemic Limb / Stroke / Thromboembolism",
  "Polytrauma / Ruptured Aneurysm",
  "Unassigned Off-Hours Attending Coverage",
] as const;

export interface EmergencyOverrideDetails {
  isEmergencyOverride: boolean;
  overrideReason: string;
}

interface StatusTransitionModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseId: string;
  patientName: string;
  crNumber: string;
  currentStatus: CaseStatus;
  targetStatus: CaseStatus;
  onConfirm: (
    caseId: string,
    nextStatus: CaseStatus,
    notes: string,
    emergencyOverride?: EmergencyOverrideDetails
  ) => Promise<void>;
  creatinine?: number;
  age?: number;
  gender?: "male" | "female";
  inr?: number;
  platelets?: number;
  aptt?: number;
  procedureRisk?: "low" | "high";
  airKerma?: number;
  fluoroTimeMinutes?: number;
}

export function StatusTransitionModal({
  isOpen,
  onClose,
  caseId,
  patientName,
  crNumber,
  currentStatus,
  targetStatus,
  onConfirm,
  creatinine,
  age,
  gender,
  inr,
  platelets,
  aptt,
  procedureRisk,
  airKerma,
  fluoroTimeMinutes,
}: StatusTransitionModalProps) {
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [overrideApproved, setOverrideApproved] = useState(false);
  const [showBreakGlass, setShowBreakGlass] = useState(false);
  const [selectedBreakGlassReason, setSelectedBreakGlassReason] = useState<string | null>(null);
  // Safety items default to unverified (false) to prevent automatic rubber-stamping
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    item1: false,
    item2: false,
    item3: false,
  });

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleCheck = (key: string) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const allChecked = Object.values(checklist).every(Boolean);

  const getChecklistItems = () => {
    switch (targetStatus) {
      case "ADMITTED_PREPPED":
        return [
          { id: "item1", label: "NPO fasting hours verified (min 6h solid, 2h clear fluids)" },
          { id: "item2", label: "Signed high-risk bilingual IR consent on file" },
          { id: "item3", label: "18G wide-bore IV cannula patent in non-access limb" },
        ];
      case "IN_PROCEDURE":
        return [
          { id: "item1", label: "Baseline Serum Creatinine & eGFR within Cigarroa threshold" },
          { id: "item2", label: "Zero unmanaged iodinated contrast allergy history" },
          { id: "item3", label: "Pre-procedure WHO Surgical Safety & Time-Out verified" },
        ];
      case "POST_OP_HOLDING":
        return [
          { id: "item1", label: "Access site puncture hemostasis confirmed intact (Manual/Angio-Seal)" },
          { id: "item2", label: "Distal pulses (Dorsalis Pedis / Radial) palpable & equal" },
          { id: "item3", label: "Cath-Lab recovery vitals recorded (BP, HR, SpO2 stable)" },
        ];
      case "FINALIZED_SIGNED":
        return [
          { id: "item1", label: "Operative narrative, anatomy & fluoroscopy dose reviewed" },
          { id: "item2", label: "CIRSE complication grade and technical success validated" },
          { id: "item3", label: "Verified under Medical Registration Authority" },
        ];
      case "DISCHARGED":
        return [
          { id: "item1", label: "Minimum required supine observation interval fulfilled" },
          { id: "item2", label: "Bilingual discharge orders and wound care instructions given" },
          { id: "item3", label: "Post-op medication kit and follow-up OPD date assigned" },
        ];
      default:
        return [
          { id: "item1", label: "Clinical readiness verified by attending resident" },
          { id: "item2", label: "Patient identity and CR identifier matched" },
          { id: "item3", label: "Electronic medical record updated" },
        ];
    }
  };

  const egfr =
    creatinine !== undefined && age !== undefined && gender !== undefined
      ? calculateCKDEPI(creatinine, age, gender)
      : undefined;

  const contrastSafety = egfr !== undefined ? evaluateContrastSafety(egfr) : null;
  const bleedingRisk =
    inr !== undefined && platelets !== undefined && aptt !== undefined
      ? evaluateBleedingRisk(inr, platelets, aptt, procedureRisk || "high")
      : null;
  const radiationSafety =
    airKerma !== undefined && fluoroTimeMinutes !== undefined
      ? evaluateRadiationDose(airKerma, fluoroTimeMinutes)
      : null;

  const severeAlerts: string[] = [];
  if (contrastSafety?.status === "contraindicated") {
    severeAlerts.push(`${contrastSafety.message} (${contrastSafety.recommendation})`);
  }
  if (bleedingRisk?.status === "contraindicated") {
    severeAlerts.push(`High Bleeding Risk: ${bleedingRisk.alerts.join(", ")}`);
  }
  if (radiationSafety?.level === "critical") {
    severeAlerts.push(radiationSafety.message);
  }

  const cautionAlerts: string[] = [];
  if (contrastSafety?.status === "caution") {
    cautionAlerts.push(`${contrastSafety.message} - ${contrastSafety.recommendation}`);
  }
  if (bleedingRisk?.status === "caution") {
    cautionAlerts.push(`Bleeding Caution: ${bleedingRisk.alerts.join(", ")}`);
  }
  if (radiationSafety?.level === "alert") {
    cautionAlerts.push(radiationSafety.message);
  }

  const hasSevere = severeAlerts.length > 0;
  const hasCaution = cautionAlerts.length > 0;

  const isEmergencyActive = Boolean(selectedBreakGlassReason);

  const handleConfirmClick = async () => {
    if (!allChecked && !isEmergencyActive) return;
    if (hasSevere && !overrideApproved && !isEmergencyActive) return;
    setIsSubmitting(true);
    try {
      const emergencyOverride = isEmergencyActive && selectedBreakGlassReason
        ? { isEmergencyOverride: true, overrideReason: selectedBreakGlassReason }
        : undefined;
      await onConfirm(caseId, targetStatus, notes, emergencyOverride);
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const items = getChecklistItems();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 animate-in fade-in duration-150">
      <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl text-slate-800">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Confirm transition to {targetStatus.replace(/_/g, " ")}?
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Patient Banner */}
        <div className="mt-3 rounded-lg bg-slate-50 border border-slate-200 p-2.5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-slate-900">{patientName}</div>
              <div className="font-mono text-[11px] text-slate-500">CR: {crNumber}</div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <span className="rounded bg-slate-200 px-2 py-0.5 text-[11px] text-slate-700">
                {currentStatus.replace(/_/g, " ")}
              </span>
              <ArrowRight className="h-3 w-3 text-slate-400" />
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[11px] text-white">
                {targetStatus.replace(/_/g, " ")}
              </span>
            </div>
          </div>
        </div>

        {/* High-Contrast Clinical Safety Interlock Warning Banner */}
        {hasSevere && (
          <div className="mt-3 rounded-lg bg-rose-50 border border-rose-300 p-3 text-rose-900">
            <div className="flex items-center gap-2 font-bold text-xs text-rose-700">
              <AlertOctagon className="w-4 h-4 shrink-0" />
              <span>CRITICAL CLINICAL SAFETY INTERLOCK BREACH</span>
            </div>
            <ul className="mt-1.5 space-y-1 text-[11px] list-disc list-inside">
              {severeAlerts.map((alt, i) => (
                <li key={i}>{alt}</li>
              ))}
            </ul>
            <label className="mt-2.5 flex items-center gap-2 pt-2 border-t border-rose-200 cursor-pointer select-none font-semibold text-xs text-rose-950">
              <input
                type="checkbox"
                checked={overrideApproved || isEmergencyActive}
                onChange={(e) => setOverrideApproved(e.target.checked)}
                className="h-4 w-4 rounded border-rose-400 text-rose-600 focus:ring-rose-500"
              />
              <span>Emergency Case / Attending Override Approved</span>
            </label>
          </div>
        )}

        {!hasSevere && hasCaution && (
          <div className="mt-3 rounded-lg bg-amber-50 border border-amber-300 p-2.5 text-amber-900">
            <div className="flex items-center gap-2 font-bold text-xs text-amber-700">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>Clinical Caution Alerts</span>
            </div>
            <ul className="mt-1 space-y-0.5 text-[11px] list-disc list-inside">
              {cautionAlerts.map((alt, i) => (
                <li key={i}>{alt}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Emergency Break-Glass Accordion Panel */}
        <div className="mt-3 rounded-lg border border-rose-200 bg-rose-50/40 p-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-bold text-rose-800">
              <KeyRound className="h-3.5 w-3.5 text-rose-600" />
              <span>Break-Glass Emergency Access</span>
            </div>
            <button
              type="button"
              onClick={() => {
                setShowBreakGlass(!showBreakGlass);
                if (selectedBreakGlassReason) setSelectedBreakGlassReason(null);
              }}
              className="text-[11px] font-mono font-semibold text-rose-700 hover:text-rose-900 underline cursor-pointer"
            >
              {showBreakGlass ? "Hide Override" : "Enable Break-Glass"}
            </button>
          </div>

          {showBreakGlass && (
            <div className="mt-2 pt-2 border-t border-rose-200/80">
              <div className="text-[10px] text-rose-900 font-semibold mb-1.5">
                Select single-click emergency justification (sequentially SHA-256 hashed):
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {BREAK_GLASS_REASONS.map((reason) => {
                  const isSelected = selectedBreakGlassReason === reason;
                  return (
                    <button
                      key={reason}
                      type="button"
                      onClick={() => {
                        if (isSelected) {
                          setSelectedBreakGlassReason(null);
                        } else {
                          setSelectedBreakGlassReason(reason);
                          setOverrideApproved(true);
                        }
                      }}
                      className={`text-left text-[11px] p-2 rounded border transition cursor-pointer font-mono ${
                        isSelected
                          ? "bg-rose-700 text-white border-rose-800 shadow-xs font-bold"
                          : "bg-white text-rose-950 border-rose-300 hover:bg-rose-100"
                      }`}
                    >
                      {isSelected ? "✓ " : "• "} {reason}
                    </button>
                  );
                })}
              </div>
              {selectedBreakGlassReason && (
                <div className="mt-2 text-[10px] text-rose-800 font-mono bg-rose-100 p-1.5 rounded border border-rose-200">
                  STAT Protocol Armed: Checklist and interlocks bypassed with cryptographically signed emergency override.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Pre-requisite checklist */}
        <div className="mt-3 space-y-2">
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            <span>Prerequisites</span>
            {isEmergencyActive && (
              <span className="text-rose-600 font-mono font-bold">EMERGENCY BYPASS ACTIVE</span>
            )}
          </div>
          {items.map((item) => {
            const checked = (checklist[item.id] ?? false) || isEmergencyActive;
            return (
              <label
                key={item.id}
                onClick={() => !isEmergencyActive && toggleCheck(item.id)}
                className={`flex items-center gap-2.5 rounded-lg border p-2.5 transition select-none text-xs ${
                  isEmergencyActive
                    ? "border-rose-200 bg-rose-50/60 text-slate-800 cursor-not-allowed opacity-80"
                    : checked
                    ? "border-emerald-200 bg-emerald-50/50 text-slate-900 cursor-pointer"
                    : "border-slate-200 bg-white hover:bg-slate-50 text-slate-700 cursor-pointer"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  disabled={isEmergencyActive}
                  onChange={() => {}}
                  className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="font-medium">{item.label}</span>
              </label>
            );
          })}
        </div>

        {/* Optional Clinical Note */}
        <div className="mt-3">
          <label className="block text-[11px] font-semibold text-slate-700 mb-1">
            Clinical Notes
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-slate-200 px-3 py-1.5 text-xs focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 font-mono"
            placeholder={isEmergencyActive ? `STAT: ${selectedBreakGlassReason}` : "Remarks (optional)"}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex items-center justify-end gap-2 border-t border-slate-100 pt-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={
              (!allChecked && !isEmergencyActive) ||
              isSubmitting ||
              (hasSevere && !overrideApproved && !isEmergencyActive)
            }
            onClick={handleConfirmClick}
            className={`rounded px-4 py-1.5 text-xs font-semibold text-white shadow-xs disabled:opacity-50 transition cursor-pointer ${
              isEmergencyActive
                ? "bg-rose-600 hover:bg-rose-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isSubmitting
              ? "Updating..."
              : isEmergencyActive
              ? "Break-Glass Confirm"
              : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
}
