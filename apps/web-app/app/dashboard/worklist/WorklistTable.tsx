"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { StatusTransitionModal } from "./StatusTransitionModal";
import {
  CaseStatus,
  PatientWorklistEntry,
  INITIAL_RIS_WORKLIST_CASES,
} from "./worklistData";

export * from "./worklistData";

import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
} from "../../components/ui/context-menu";
import { ClinicalTooltip } from "../../components/ui/tooltip";

import {
  Clock,
  User,
  Activity,
  FileText,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ChevronRight,
  ShieldAlert,
  SlidersHorizontal,
  FileSignature,
  ClipboardCheck,
  Eye,
  Calculator,
} from "lucide-react";

export const statusColorMap: Record<CaseStatus, string> = {
  SCHEDULED: "bg-slate-100 text-slate-700 border-slate-200",
  ADMITTED_PREPPED: "bg-blue-50 text-blue-700 border-blue-600/30",
  IN_PROCEDURE: "bg-slate-900 text-white border-slate-900",
  POST_OP_HOLDING: "bg-amber-50 text-amber-700 border-amber-500/40",
  REPORT_DRAFTED: "bg-slate-100 text-slate-700 border-slate-200",
  FINALIZED_SIGNED: "bg-emerald-50 text-emerald-700 border-emerald-600/30",
  DISCHARGED: "bg-slate-50 text-slate-500 border-slate-200",
};

const MODALITY_BADGE_STYLE: Record<string, { bg: string; text: string; border: string }> = {
  XA: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-600/30" },
  CT: { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-600/30" },
  US: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-600/30" },
  ROSE: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-500/50" },
};

export interface WorklistTableProps {
  initialCases?: PatientWorklistEntry[];
  cases?: PatientWorklistEntry[];
  onCasesChange?: (cases: PatientWorklistEntry[]) => void;
  activeFilter?: string;
  searchQuery?: string;
  onOpenTransitionModal?: (
    entry: PatientWorklistEntry,
    targetStatus: CaseStatus
  ) => void;
}

export function WorklistTable({
  initialCases = INITIAL_RIS_WORKLIST_CASES,
  cases: controlledCases,
  onCasesChange,
  activeFilter = "ALL",
  searchQuery = "",
  onOpenTransitionModal,
}: WorklistTableProps) {
  const router = useRouter();
  const [internalCases, setInternalCases] = useState<PatientWorklistEntry[]>(initialCases);
  const cases = controlledCases || internalCases;

  const [activeModalTarget, setActiveModalTarget] = useState<{
    caseId: string;
    patientName: string;
    crNumber: string;
    currentStatus: CaseStatus;
    targetStatus: CaseStatus;
  } | null>(null);

  const handleOpenTransitionModal = (
    entry: PatientWorklistEntry,
    targetStatus: CaseStatus
  ) => {
    if (onOpenTransitionModal) {
      onOpenTransitionModal(entry, targetStatus);
    } else {
      setActiveModalTarget({
        caseId: entry.caseId,
        patientName: entry.patientName,
        crNumber: entry.crNumber,
        currentStatus: entry.status,
        targetStatus,
      });
    }
  };

  const executeStatusTransition = async (
    caseId: string,
    nextStatus: CaseStatus,
    notes: string,
    emergencyOverride?: { isEmergencyOverride: boolean; overrideReason: string }
  ) => {
    // 1. Snapshot previous state for rollback on network failure
    const previousControlled = controlledCases ? [...controlledCases] : null;
    const previousInternal = [...internalCases];

    const updateList = (prev: PatientWorklistEntry[]) =>
      prev.map((c) => (c.caseId === caseId ? { ...c, status: nextStatus } : c));

    // 2. 0ms Optimistic UI update: update state immediately before network call
    if (onCasesChange && controlledCases) {
      onCasesChange(updateList(controlledCases));
    }
    setInternalCases((prev) => {
      const next = updateList(prev);
      onCasesChange?.(next);
      return next;
    });

    // 3. Asynchronously sync to backend in background
    try {
      const res = await fetch(`/api/cases/${caseId}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nextStatus,
          notes,
          isEmergencyOverride: emergencyOverride?.isEmergencyOverride,
          overrideReason: emergencyOverride?.overrideReason,
        }),
      });

      if (!res.ok) {
        console.warn(`[Worklist Sync Warning] API returned ${res.status}, keeping optimistic update`);
      }
    } catch (err) {
      console.error("[Worklist Sync Error] Network failure during status sync:", err);
      // Revert to snapshot if severe network failure
      if (previousControlled && onCasesChange) {
        onCasesChange(previousControlled);
      }
      setInternalCases(previousInternal);
    }
  };

  // Filter cases based on search and tab filter
  const filteredCases = cases.filter((item) => {
    const matchesSearch =
      searchQuery === "" ||
      item.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.crNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.procedureName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.operatorResident.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.room && item.room.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (activeFilter === "ALL") return true;
    if (activeFilter === "SCHEDULED") return item.status === "SCHEDULED";
    if (activeFilter === "PREPPED") return item.status === "ADMITTED_PREPPED";
    if (activeFilter === "IN_LAB") return item.status === "IN_PROCEDURE";
    if (activeFilter === "HOLDING") return item.status === "POST_OP_HOLDING";
    if (activeFilter === "REPORT_DRAFT") return item.status === "REPORT_DRAFTED";
    if (activeFilter === "FINALIZED") return item.status === "FINALIZED_SIGNED";
    if (activeFilter === "DISCHARGED") return item.status === "DISCHARGED";
    return true;
  });

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      {/* Mobile Card Stack (Phone View: 0 Horizontal Scroll) */}
      <div className="block md:hidden divide-y divide-slate-200">
        {filteredCases.length === 0 ? (
          <div className="p-8 text-center text-slate-500">
            <AlertCircle className="mx-auto h-7 w-7 text-slate-200 mb-2" />
            No procedure cases matching current filter or search criteria.
          </div>
        ) : (
          filteredCases.map((entry) => {
            const modKey = entry.modality || "XA";
            const modStyle = MODALITY_BADGE_STYLE[modKey] || MODALITY_BADGE_STYLE.XA;
            return (
              <div
                key={`mob-${entry.caseId}`}
                className={`p-3.5 space-y-2.5 transition-colors ${
                  entry.isStat ? "bg-rose-50 border-l-4 border-l-rose-600" : "bg-white hover:bg-slate-50"
                }`}
              >
                {/* Header Row: Time + Room + Modality + Status */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-slate-900">
                    <Clock className="h-3.5 w-3.5 text-slate-500 shrink-0" />
                    <span>{entry.plannedTime}</span>
                    <span className="text-xs text-slate-500 font-sans font-normal">
                      &bull; {entry.room || "Cath Lab 1"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className={`rounded px-1.5 py-0.5 text-[10px] font-bold border ${modStyle.bg} ${modStyle.text} ${modStyle.border}`}>
                      {modKey}
                    </span>
                    <span className={`rounded-md border px-1.5 py-0.5 text-[10px] font-semibold tracking-wide ${statusColorMap[entry.status]}`}>
                      {entry.status.replace(/_/g, " ")}
                    </span>
                  </div>
                </div>

                {/* Patient Details & STAT Flag */}
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-900">{entry.patientName}</span>
                    {entry.isStat && (
                      <span className="shrink-0 rounded bg-rose-600 text-white px-1.5 py-0.5 text-[10px] font-black tracking-wider uppercase animate-pulse">
                        STAT
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-500 font-mono mt-0.5">CR: {entry.crNumber}</div>
                  {entry.statIndication && (
                    <div className="text-[10px] font-semibold text-rose-700 mt-0.5">
                      ⚡ {entry.statIndication}
                    </div>
                  )}
                </div>

                {/* Procedure Title */}
                <div className="text-xs font-semibold text-blue-600">
                  {entry.procedureName}
                </div>

                {/* Clinical Team */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span>Op: <strong className="text-slate-900">{entry.operatorResident}</strong></span>
                  <span>&bull;</span>
                  <span>Cons: <strong className="text-slate-900">{entry.supervisingConsultant}</strong></span>
                </div>

                {/* Safety Flags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                  {entry.fastingConfirmed ? (
                    <span className="inline-flex items-center gap-0.5 rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700 border border-emerald-600/30">
                      <CheckCircle2 className="h-2.5 w-2.5" /> NPO Confirmed
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-0.5 rounded bg-amber-50 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700 border border-amber-500/50">
                      NPO Pending
                    </span>
                  )}
                  {entry.contrastAllergy && (
                    <span className="inline-flex items-center gap-0.5 rounded bg-rose-50 px-1.5 py-0.5 text-[10px] font-semibold text-rose-700 border border-rose-600/30">
                      <ShieldAlert className="h-2.5 w-2.5" /> Allergy Alert
                    </span>
                  )}
                </div>

                {/* Mobile Actions Bar */}
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2">
                  {entry.status === "SCHEDULED" && (
                    <button
                      onClick={() => handleOpenTransitionModal(entry, "ADMITTED_PREPPED")}
                      className="flex-1 min-h-9 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-2xs hover:bg-blue-700 transition flex items-center justify-center cursor-pointer"
                    >
                      Check In &amp; Prep
                    </button>
                  )}

                  {entry.status === "ADMITTED_PREPPED" && (
                    <button
                      onClick={() => handleOpenTransitionModal(entry, "IN_PROCEDURE")}
                      className="flex-1 min-h-9 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white shadow-2xs hover:bg-black transition flex items-center justify-center cursor-pointer"
                    >
                      Start Lab
                    </button>
                  )}

                  {entry.status === "IN_PROCEDURE" && (
                    <>
                      <Link
                        href={`/dashboard/cath-lab-flowsheet?caseId=${entry.caseId}`}
                        className="flex-1 min-h-9 inline-flex items-center justify-center gap-1 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-black transition shadow-2xs"
                      >
                        <Activity className="h-3 w-3 text-emerald-600 animate-pulse" />
                        Flowsheet
                      </Link>
                      <button
                        onClick={() => handleOpenTransitionModal(entry, "POST_OP_HOLDING")}
                        className="flex-1 min-h-9 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition flex items-center justify-center cursor-pointer"
                      >
                        Finish Cath
                      </button>
                    </>
                  )}

                  {entry.status === "POST_OP_HOLDING" && (
                    <Link
                      href={`/dashboard/reports/${entry.caseId}`}
                      className="flex-1 min-h-9 inline-flex items-center justify-center gap-1 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white shadow-2xs hover:bg-black transition"
                    >
                      <FileText className="h-3 w-3" />
                      Dictate Report
                    </Link>
                  )}

                  {entry.status === "REPORT_DRAFTED" && (
                    <Link
                      href={`/dashboard/reports/${entry.caseId}`}
                      className="flex-1 min-h-9 inline-flex items-center justify-center gap-1 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white shadow-2xs hover:bg-black transition"
                    >
                      <ShieldAlert className="h-3 w-3 text-amber-500" />
                      Consultant Verify
                    </Link>
                  )}

                  {entry.status === "FINALIZED_SIGNED" && (
                    <>
                      <Link
                        href={`/dashboard/reports/${entry.caseId}`}
                        className="flex-1 min-h-9 inline-flex items-center justify-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition"
                      >
                        <FileText className="h-3 w-3 text-slate-500" />
                        View Report
                      </Link>
                      <button
                        onClick={() => handleOpenTransitionModal(entry, "DISCHARGED")}
                        className="flex-1 min-h-9 rounded-lg bg-slate-900 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-black transition flex items-center justify-center cursor-pointer"
                      >
                        Discharge
                      </button>
                    </>
                  )}

                  {entry.status === "DISCHARGED" && (
                    <Link
                      href={`/dashboard/discharge`}
                      className="flex-1 min-h-9 inline-flex items-center justify-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500 hover:bg-slate-100 transition"
                    >
                      <ExternalLink className="h-3 w-3" />
                      IHMS Summary
                    </Link>
                  )}

                  <Link
                    href={`/dashboard/consent?caseId=${entry.caseId}&procedure=${encodeURIComponent(entry.procedureName)}`}
                    className="px-2.5 py-1.5 text-xs text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition"
                  >
                    Consent
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Desktop Worklist Table (Hidden on Mobile) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left text-xs text-slate-900">
          <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-500 border-b border-slate-200">
          <tr>
            <th className="px-3.5 py-2.5">Schedule</th>
            <th className="px-3.5 py-2.5">Patient / CR</th>
            <th className="px-3.5 py-2.5">Procedure &amp; Modality</th>
            <th className="px-3.5 py-2.5">Clinical Team</th>
            <th className="px-3.5 py-2.5">Safety Flags</th>
            <th className="px-3.5 py-2.5">RIS Status</th>
            <th className="px-3.5 py-2.5 text-right">Actions &amp; Direct Handoff</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200/70 font-normal">
          {filteredCases.length === 0 ? (
            <tr>
              <td colSpan={7} className="px-4 py-12 text-center text-slate-500">
                <AlertCircle className="mx-auto h-7 w-7 text-slate-200 mb-2" />
                No procedure cases matching current filter or search criteria.
              </td>
            </tr>
          ) : (
            filteredCases.map((entry) => {
              const modKey = entry.modality || "XA";
              const modStyle = MODALITY_BADGE_STYLE[modKey] || MODALITY_BADGE_STYLE.XA;

              return (
                <ContextMenu key={entry.caseId}>
                  <ContextMenuTrigger asChild>
                    <tr
                      className={`transition-colors cursor-context-menu ${
                        entry.isStat
                          ? "bg-rose-50 hover:bg-rose-50/60 border-l-4 border-l-rose-600"
                          : "hover:bg-slate-50"
                      }`}
                      title="Right-click row for rapid clinical actions (Consent, Pre-Op Sheet, PACS, Calculators)"
                    >
                      {/* Schedule Time */}
                      <td className="px-3.5 py-2.5 font-mono tabular-nums whitespace-nowrap">
                        <div className="flex items-center gap-1.5 font-medium text-slate-900">
                          <Clock className="h-3.5 w-3.5 text-slate-500 shrink-0" />
                          <span>{entry.plannedTime}</span>
                        </div>
                        <div className="text-[10px] text-slate-500 font-sans flex items-center gap-1 mt-0.5">
                          <span className="font-medium">{entry.room || "Cath Lab 1"}</span>
                          {entry.durationMinutes && (
                            <span className="text-slate-500">({entry.durationMinutes}m)</span>
                          )}
                        </div>
                      </td>

                      {/* Patient Name & CR Number */}
                      <td className="px-3.5 py-2.5 min-w-[140px] max-w-[190px]">
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-slate-900 truncate">
                            {entry.patientName}
                          </span>
                          {entry.isStat && (
                            <span className="shrink-0 rounded bg-rose-600 text-white px-1.5 py-0.5 text-[10px] font-black tracking-wider uppercase animate-pulse">
                              STAT
                            </span>
                          )}
                        </div>
                        <div className="font-mono text-[10px] text-slate-500 font-medium tabular-nums">
                          CR: {entry.crNumber}
                        </div>
                        {entry.statIndication && (
                          <div className="text-[10px] font-semibold text-rose-700 truncate mt-0.5">
                            ⚡ {entry.statIndication}
                          </div>
                        )}
                      </td>

                      {/* Procedure Name & Modality */}
                      <td className="px-3.5 py-2.5 min-w-[200px] max-w-[270px]">
                        <div className="flex items-center gap-1.5 overflow-hidden">
                          <span
                            className={`shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold border ${modStyle.bg} ${modStyle.text} ${modStyle.border}`}
                          >
                            {modKey}
                          </span>
                          <span
                            className="font-medium text-slate-900 truncate text-xs"
                            title={entry.procedureName}
                          >
                            {entry.procedureName}
                          </span>
                        </div>
                      </td>

                      {/* Clinical Team */}
                      <td className="px-3.5 py-2.5 min-w-[160px] max-w-[210px] text-xs leading-tight">
                        <div className="text-slate-900 font-medium truncate" title={entry.operatorResident}>
                          <span className="text-slate-500 font-semibold">Op:</span> {entry.operatorResident}
                        </div>
                        <div className="text-slate-500 truncate mt-0.5" title={entry.supervisingConsultant}>
                          <span className="text-slate-500 font-semibold">Cons:</span> {entry.supervisingConsultant}
                        </div>
                      </td>

                      {/* Safety Flags with Clinical Tooltips */}
                      <td className="px-3.5 py-2.5 whitespace-nowrap">
                        <div className="flex flex-wrap items-center gap-1">
                          {entry.fastingConfirmed ? (
                            <ClinicalTooltip content="Verified NPO: Minimum 6 hours solids, 2 hours clear fluids maintained.">
                              <span className="inline-flex items-center gap-0.5 rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700 border border-emerald-600/30 cursor-help">
                                <CheckCircle2 className="h-2.5 w-2.5" /> NPO Confirmed
                              </span>
                            </ClinicalTooltip>
                          ) : (
                            <ClinicalTooltip content="Pending NPO verification: Ward nursing must confirm last oral intake before pre-medication.">
                              <span className="inline-flex items-center gap-0.5 rounded bg-amber-50 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700 border border-amber-500/50 cursor-help">
                                NPO Pending
                              </span>
                            </ClinicalTooltip>
                          )}

                          {entry.contrastAllergy && (
                            <ClinicalTooltip content="Severe/Moderate contrast allergy protocol required (Hydrocortisone 100mg IV + Pheniramine 22.75mg IV).">
                              <span className="inline-flex items-center gap-0.5 rounded bg-rose-50 px-1.5 py-0.5 text-[10px] font-semibold text-rose-700 border border-rose-600/30 cursor-help">
                                <ShieldAlert className="h-2.5 w-2.5" /> Allergy Alert
                              </span>
                            </ClinicalTooltip>
                          )}
                        </div>
                      </td>

                      {/* RIS Status Badge */}
                      <td className="px-3.5 py-2.5 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-semibold tracking-wide ${
                            statusColorMap[entry.status]
                          }`}
                        >
                          {entry.status.replace(/_/g, " ")}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="px-3.5 py-2.5 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1.5">
                          {entry.status === "SCHEDULED" && (
                            <button
                              onClick={() => handleOpenTransitionModal(entry, "ADMITTED_PREPPED")}
                              className="rounded-lg bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white shadow-2xs hover:bg-blue-700 transition"
                            >
                              Check In &amp; Prep
                            </button>
                          )}

                          {entry.status === "ADMITTED_PREPPED" && (
                            <button
                              onClick={() => handleOpenTransitionModal(entry, "IN_PROCEDURE")}
                              className="rounded-lg bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white shadow-2xs hover:bg-black transition"
                            >
                              Start Lab
                            </button>
                          )}

                          {entry.status === "IN_PROCEDURE" && (
                            <>
                              <Link
                                href={`/dashboard/cath-lab-flowsheet?caseId=${entry.caseId}`}
                                className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-2 py-1 text-xs font-semibold text-white hover:bg-black transition shadow-2xs"
                              >
                                <Activity className="h-3 w-3 text-emerald-600 animate-pulse" />
                                Flowsheet
                              </Link>
                              <button
                                onClick={() => handleOpenTransitionModal(entry, "POST_OP_HOLDING")}
                                className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition"
                              >
                                Finish Cath
                              </button>
                            </>
                          )}

                          {entry.status === "POST_OP_HOLDING" && (
                            <Link
                              href={`/dashboard/reports/${entry.caseId}`}
                              className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white shadow-2xs hover:bg-black transition"
                            >
                              <FileText className="h-3 w-3" />
                              Dictate Report
                            </Link>
                          )}

                          {entry.status === "REPORT_DRAFTED" && (
                            <Link
                              href={`/dashboard/reports/${entry.caseId}`}
                              className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white shadow-2xs hover:bg-black transition"
                            >
                              <ShieldAlert className="h-3 w-3 text-amber-500" />
                              Consultant Verify
                            </Link>
                          )}

                          {entry.status === "FINALIZED_SIGNED" && (
                            <>
                              <Link
                                href={`/dashboard/reports/${entry.caseId}`}
                                className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition"
                              >
                                <FileText className="h-3 w-3 text-slate-500" />
                                View Report
                              </Link>
                              <button
                                onClick={() => handleOpenTransitionModal(entry, "DISCHARGED")}
                                className="rounded-lg bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white hover:bg-black transition"
                              >
                                Discharge
                              </button>
                            </>
                          )}

                          {entry.status === "DISCHARGED" && (
                            <Link
                              href={`/dashboard/discharge`}
                              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-500 hover:bg-slate-100 transition"
                            >
                              <ExternalLink className="h-3 w-3" />
                              IHMS Summary
                            </Link>
                          )}
                        </div>
                      </td>
                    </tr>
                  </ContextMenuTrigger>

                  <ContextMenuContent className="w-64">
                    <div className="px-2 py-1.5 text-xs font-medium text-slate-500 border-b border-slate-200 mb-1">
                      <span className="font-semibold text-slate-900">{entry.patientName}</span> &bull; <span className="font-mono tabular-nums">{entry.crNumber}</span>
                    </div>
                    <ContextMenuItem onClick={() => router.push(`/dashboard/consent?caseId=${entry.caseId}&procedure=${encodeURIComponent(entry.procedureName)}`)}>
                      <FileSignature className="w-3.5 h-3.5 mr-2 text-slate-500 shrink-0" />
                      <span>Print Bilingual Consent Form</span>
                    </ContextMenuItem>
                    <ContextMenuItem onClick={() => router.push(`/dashboard/consent?tab=PREPARATION&caseId=${entry.caseId}`)}>
                      <ClipboardCheck className="w-3.5 h-3.5 mr-2 text-slate-500 shrink-0" />
                      <span>Print Pre-Op Preparation Sheet</span>
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem onClick={() => handleOpenTransitionModal(entry, "IN_PROCEDURE")}>
                      <Activity className="w-3.5 h-3.5 mr-2 text-slate-500 shrink-0" />
                      <span>Mark In-Lab ({entry.room || "Cath Lab 1"})</span>
                    </ContextMenuItem>
                    {entry.status === "IN_PROCEDURE" && (
                      <ContextMenuItem onClick={() => router.push(`/dashboard/cath-lab-flowsheet?caseId=${entry.caseId}`)}>
                        <Activity className="w-3.5 h-3.5 mr-2 text-slate-500 shrink-0" />
                        <span>Cath-Lab Flowsheet</span>
                      </ContextMenuItem>
                    )}
                    <ContextMenuItem onClick={() => router.push(`/dashboard/reports/${entry.caseId}`)}>
                      <FileText className="w-3.5 h-3.5 mr-2 text-slate-500 shrink-0" />
                      <span>Dictate Synoptic Report</span>
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem onClick={() => router.push(`/dashboard/imaging/STUDY-XA-2026-09142`)}>
                      <Eye className="w-3.5 h-3.5 mr-2 text-slate-500 shrink-0" />
                      <span>View PACS DICOM Study</span>
                    </ContextMenuItem>
                    <ContextMenuItem onClick={() => router.push(`/dashboard/protocols?calc=cigarroa`)}>
                      <Calculator className="w-3.5 h-3.5 mr-2 text-slate-500 shrink-0" />
                      <span>Quick Calculate Cigarroa MACD</span>
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              );
            })
          )}
        </tbody>
      </table>
      </div>

      {/* Safety Checklist Transition Modal */}
      {activeModalTarget && (
        <StatusTransitionModal
          isOpen={!!activeModalTarget}
          onClose={() => setActiveModalTarget(null)}
          caseId={activeModalTarget.caseId}
          patientName={activeModalTarget.patientName}
          crNumber={activeModalTarget.crNumber}
          currentStatus={activeModalTarget.currentStatus}
          targetStatus={activeModalTarget.targetStatus}
          onConfirm={executeStatusTransition}
        />
      )}
    </div>
  );
}
