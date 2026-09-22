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
  SCHEDULED: "bg-[#F1F3F4] text-[#3C4043] border-[#DADCE0]",
  ADMITTED_PREPPED: "bg-[#E8F0FE] text-[#174EA6] border-[#1A73E8]/30",
  IN_PROCEDURE: "bg-[#202124] text-white border-[#202124]",
  POST_OP_HOLDING: "bg-[#FEF7E0] text-[#B06000] border-[#FBBC04]/40",
  REPORT_DRAFTED: "bg-[#F1F3F4] text-[#3C4043] border-[#DADCE0]",
  FINALIZED_SIGNED: "bg-[#E6F4EA] text-[#137333] border-[#34A853]/30",
  DISCHARGED: "bg-[#F8F9FA] text-[#5F6368] border-[#DADCE0]",
};

const MODALITY_BADGE_STYLE: Record<string, { bg: string; text: string; border: string }> = {
  XA: { bg: "bg-[#E8F0FE]", text: "text-[#174EA6]", border: "border-[#1A73E8]/30" },
  CT: { bg: "bg-[#FCE8E6]", text: "text-[#C5221F]", border: "border-[#EA4335]/30" },
  US: { bg: "bg-[#E6F4EA]", text: "text-[#137333]", border: "border-[#34A853]/30" },
  ROSE: { bg: "bg-[#FEF7E0]", text: "text-[#B06000]", border: "border-[#FBBC04]/50" },
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
    <div className="rounded-xl border border-[#DADCE0] bg-white shadow-sm overflow-hidden">
      {/* Mobile Card Stack (Phone View: 0 Horizontal Scroll) */}
      <div className="block md:hidden divide-y divide-[#DADCE0]">
        {filteredCases.length === 0 ? (
          <div className="p-8 text-center text-[#5F6368]">
            <AlertCircle className="mx-auto h-7 w-7 text-[#DADCE0] mb-2" />
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
                  entry.isStat ? "bg-[#FFF8F6] border-l-4 border-l-[#EA4335]" : "bg-white hover:bg-slate-50"
                }`}
              >
                {/* Header Row: Time + Room + Modality + Status */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-[#202124]">
                    <Clock className="h-3.5 w-3.5 text-[#5F6368] shrink-0" />
                    <span>{entry.plannedTime}</span>
                    <span className="text-[11px] text-[#5F6368] font-sans font-normal">
                      &bull; {entry.room || "Cath Lab 1"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className={`rounded px-1.5 py-0.5 text-[9px] font-bold border ${modStyle.bg} ${modStyle.text} ${modStyle.border}`}>
                      {modKey}
                    </span>
                    <span className={`rounded-md border px-1.5 py-0.5 text-[9px] font-semibold tracking-wide ${statusColorMap[entry.status]}`}>
                      {entry.status.replace(/_/g, " ")}
                    </span>
                  </div>
                </div>

                {/* Patient Details & STAT Flag */}
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#202124]">{entry.patientName}</span>
                    {entry.isStat && (
                      <span className="shrink-0 rounded bg-[#EA4335] text-white px-1.5 py-0.5 text-[9px] font-black tracking-wider uppercase animate-pulse">
                        STAT
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-[#5F6368] font-mono mt-0.5">CR: {entry.crNumber}</div>
                  {entry.statIndication && (
                    <div className="text-[10px] font-semibold text-[#C5221F] mt-0.5">
                      ⚡ {entry.statIndication}
                    </div>
                  )}
                </div>

                {/* Procedure Title */}
                <div className="text-xs font-semibold text-[#1A73E8]">
                  {entry.procedureName}
                </div>

                {/* Clinical Team */}
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#5F6368]">
                  <span>Op: <strong className="text-[#202124]">{entry.operatorResident}</strong></span>
                  <span>&bull;</span>
                  <span>Cons: <strong className="text-[#202124]">{entry.supervisingConsultant}</strong></span>
                </div>

                {/* Safety Flags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                  {entry.fastingConfirmed ? (
                    <span className="inline-flex items-center gap-0.5 rounded bg-[#E6F4EA] px-1.5 py-0.5 text-[10px] font-semibold text-[#137333] border border-[#34A853]/30">
                      <CheckCircle2 className="h-2.5 w-2.5" /> NPO Confirmed
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-0.5 rounded bg-[#FEF7E0] px-1.5 py-0.5 text-[10px] font-semibold text-[#B06000] border border-[#FBBC04]/50">
                      NPO Pending
                    </span>
                  )}
                  {entry.contrastAllergy && (
                    <span className="inline-flex items-center gap-0.5 rounded bg-[#FCE8E6] px-1.5 py-0.5 text-[10px] font-semibold text-[#C5221F] border border-[#EA4335]/30">
                      <ShieldAlert className="h-2.5 w-2.5" /> Allergy Alert
                    </span>
                  )}
                </div>

                {/* Mobile Actions Bar */}
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2">
                  {entry.status === "SCHEDULED" && (
                    <button
                      onClick={() => handleOpenTransitionModal(entry, "ADMITTED_PREPPED")}
                      className="flex-1 min-h-[36px] rounded-lg bg-[#1A73E8] px-3 py-1.5 text-xs font-semibold text-white shadow-2xs hover:bg-[#1557B0] transition flex items-center justify-center cursor-pointer"
                    >
                      Check In &amp; Prep
                    </button>
                  )}

                  {entry.status === "ADMITTED_PREPPED" && (
                    <button
                      onClick={() => handleOpenTransitionModal(entry, "IN_PROCEDURE")}
                      className="flex-1 min-h-[36px] rounded-lg bg-[#202124] px-3 py-1.5 text-xs font-semibold text-white shadow-2xs hover:bg-black transition flex items-center justify-center cursor-pointer"
                    >
                      Start Lab
                    </button>
                  )}

                  {entry.status === "IN_PROCEDURE" && (
                    <>
                      <Link
                        href={`/dashboard/cath-lab-flowsheet?caseId=${entry.caseId}`}
                        className="flex-1 min-h-[36px] inline-flex items-center justify-center gap-1 rounded-lg bg-[#202124] px-3 py-1.5 text-xs font-semibold text-white hover:bg-black transition shadow-2xs"
                      >
                        <Activity className="h-3 w-3 text-[#34A853] animate-pulse" />
                        Flowsheet
                      </Link>
                      <button
                        onClick={() => handleOpenTransitionModal(entry, "POST_OP_HOLDING")}
                        className="flex-1 min-h-[36px] rounded-lg border border-[#DADCE0] bg-white px-3 py-1.5 text-xs font-semibold text-[#3C4043] hover:bg-[#F1F3F4] transition flex items-center justify-center cursor-pointer"
                      >
                        Finish Cath
                      </button>
                    </>
                  )}

                  {entry.status === "POST_OP_HOLDING" && (
                    <Link
                      href={`/dashboard/reports/${entry.caseId}`}
                      className="flex-1 min-h-[36px] inline-flex items-center justify-center gap-1 rounded-lg bg-[#202124] px-3 py-1.5 text-xs font-semibold text-white shadow-2xs hover:bg-black transition"
                    >
                      <FileText className="h-3 w-3" />
                      Dictate Report
                    </Link>
                  )}

                  {entry.status === "REPORT_DRAFTED" && (
                    <Link
                      href={`/dashboard/reports/${entry.caseId}`}
                      className="flex-1 min-h-[36px] inline-flex items-center justify-center gap-1 rounded-lg bg-[#202124] px-3 py-1.5 text-xs font-semibold text-white shadow-2xs hover:bg-black transition"
                    >
                      <ShieldAlert className="h-3 w-3 text-[#FBBC04]" />
                      Consultant Verify
                    </Link>
                  )}

                  {entry.status === "FINALIZED_SIGNED" && (
                    <>
                      <Link
                        href={`/dashboard/reports/${entry.caseId}`}
                        className="flex-1 min-h-[36px] inline-flex items-center justify-center gap-1 rounded-lg border border-[#DADCE0] bg-white px-2.5 py-1.5 text-xs font-semibold text-[#3C4043] hover:bg-[#F1F3F4] transition"
                      >
                        <FileText className="h-3 w-3 text-[#5F6368]" />
                        View Report
                      </Link>
                      <button
                        onClick={() => handleOpenTransitionModal(entry, "DISCHARGED")}
                        className="flex-1 min-h-[36px] rounded-lg bg-[#202124] px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-black transition flex items-center justify-center cursor-pointer"
                      >
                        Discharge
                      </button>
                    </>
                  )}

                  {entry.status === "DISCHARGED" && (
                    <Link
                      href={`/dashboard/discharge`}
                      className="flex-1 min-h-[36px] inline-flex items-center justify-center gap-1 rounded-lg border border-[#DADCE0] bg-[#F8F9FA] px-3 py-1.5 text-xs font-medium text-[#5F6368] hover:bg-[#F1F3F4] transition"
                    >
                      <ExternalLink className="h-3 w-3" />
                      IHMS Summary
                    </Link>
                  )}

                  <Link
                    href={`/dashboard/consent?caseId=${entry.caseId}&procedure=${encodeURIComponent(entry.procedureName)}`}
                    className="px-2.5 py-1.5 text-xs text-[#1A73E8] bg-blue-50 hover:bg-blue-100 rounded-lg transition"
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
        <table className="w-full text-left text-xs text-[#202124]">
          <thead className="bg-[#F8F9FA] text-[11px] font-semibold uppercase tracking-wider text-[#5F6368] border-b border-[#DADCE0]">
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
        <tbody className="divide-y divide-[#DADCE0]/70 font-normal">
          {filteredCases.length === 0 ? (
            <tr>
              <td colSpan={7} className="px-4 py-12 text-center text-[#5F6368]">
                <AlertCircle className="mx-auto h-7 w-7 text-[#DADCE0] mb-2" />
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
                          ? "bg-[#FFF8F6] hover:bg-[#FCE8E6]/60 border-l-4 border-l-[#EA4335]"
                          : "hover:bg-[#F8F9FA]"
                      }`}
                      title="Right-click row for rapid clinical actions (Consent, Pre-Op Sheet, PACS, Calculators)"
                    >
                      {/* Schedule Time */}
                      <td className="px-3.5 py-2.5 font-mono tabular-nums whitespace-nowrap">
                        <div className="flex items-center gap-1.5 font-medium text-[#202124]">
                          <Clock className="h-3.5 w-3.5 text-[#5F6368] shrink-0" />
                          <span>{entry.plannedTime}</span>
                        </div>
                        <div className="text-[10px] text-[#5F6368] font-sans flex items-center gap-1 mt-0.5">
                          <span className="font-medium">{entry.room || "Cath Lab 1"}</span>
                          {entry.durationMinutes && (
                            <span className="text-[#70757A]">({entry.durationMinutes}m)</span>
                          )}
                        </div>
                      </td>

                      {/* Patient Name & CR Number */}
                      <td className="px-3.5 py-2.5 min-w-[140px] max-w-[190px]">
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-[#202124] truncate">
                            {entry.patientName}
                          </span>
                          {entry.isStat && (
                            <span className="shrink-0 rounded bg-[#EA4335] text-white px-1.5 py-0.5 text-[9px] font-black tracking-wider uppercase animate-pulse">
                              STAT
                            </span>
                          )}
                        </div>
                        <div className="font-mono text-[10px] text-[#5F6368] font-medium tabular-nums">
                          CR: {entry.crNumber}
                        </div>
                        {entry.statIndication && (
                          <div className="text-[9px] font-semibold text-[#C5221F] truncate mt-0.5">
                            ⚡ {entry.statIndication}
                          </div>
                        )}
                      </td>

                      {/* Procedure Name & Modality */}
                      <td className="px-3.5 py-2.5 min-w-[200px] max-w-[270px]">
                        <div className="flex items-center gap-1.5 overflow-hidden">
                          <span
                            className={`shrink-0 rounded px-1.5 py-0.5 text-[9px] font-bold border ${modStyle.bg} ${modStyle.text} ${modStyle.border}`}
                          >
                            {modKey}
                          </span>
                          <span
                            className="font-medium text-[#202124] truncate text-xs"
                            title={entry.procedureName}
                          >
                            {entry.procedureName}
                          </span>
                        </div>
                      </td>

                      {/* Clinical Team */}
                      <td className="px-3.5 py-2.5 min-w-[160px] max-w-[210px] text-[11px] leading-tight">
                        <div className="text-[#202124] font-medium truncate" title={entry.operatorResident}>
                          <span className="text-[#70757A] font-semibold">Op:</span> {entry.operatorResident}
                        </div>
                        <div className="text-[#5F6368] truncate mt-0.5" title={entry.supervisingConsultant}>
                          <span className="text-[#70757A] font-semibold">Cons:</span> {entry.supervisingConsultant}
                        </div>
                      </td>

                      {/* Safety Flags with Clinical Tooltips */}
                      <td className="px-3.5 py-2.5 whitespace-nowrap">
                        <div className="flex flex-wrap items-center gap-1">
                          {entry.fastingConfirmed ? (
                            <ClinicalTooltip content="Verified NPO: Minimum 6 hours solids, 2 hours clear fluids maintained.">
                              <span className="inline-flex items-center gap-0.5 rounded bg-[#E6F4EA] px-1.5 py-0.5 text-[10px] font-semibold text-[#137333] border border-[#34A853]/30 cursor-help">
                                <CheckCircle2 className="h-2.5 w-2.5" /> NPO Confirmed
                              </span>
                            </ClinicalTooltip>
                          ) : (
                            <ClinicalTooltip content="Pending NPO verification: Ward nursing must confirm last oral intake before pre-medication.">
                              <span className="inline-flex items-center gap-0.5 rounded bg-[#FEF7E0] px-1.5 py-0.5 text-[10px] font-semibold text-[#B06000] border border-[#FBBC04]/50 cursor-help">
                                NPO Pending
                              </span>
                            </ClinicalTooltip>
                          )}

                          {entry.contrastAllergy && (
                            <ClinicalTooltip content="Severe/Moderate contrast allergy protocol required (Hydrocortisone 100mg IV + Pheniramine 22.75mg IV).">
                              <span className="inline-flex items-center gap-0.5 rounded bg-[#FCE8E6] px-1.5 py-0.5 text-[10px] font-semibold text-[#C5221F] border border-[#EA4335]/30 cursor-help">
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
                              className="rounded-lg bg-[#1A73E8] px-2.5 py-1 text-xs font-semibold text-white shadow-2xs hover:bg-[#1557B0] transition"
                            >
                              Check In &amp; Prep
                            </button>
                          )}

                          {entry.status === "ADMITTED_PREPPED" && (
                            <button
                              onClick={() => handleOpenTransitionModal(entry, "IN_PROCEDURE")}
                              className="rounded-lg bg-[#202124] px-2.5 py-1 text-xs font-semibold text-white shadow-2xs hover:bg-black transition"
                            >
                              Start Lab
                            </button>
                          )}

                          {entry.status === "IN_PROCEDURE" && (
                            <>
                              <Link
                                href={`/dashboard/cath-lab-flowsheet?caseId=${entry.caseId}`}
                                className="inline-flex items-center gap-1 rounded-lg bg-[#202124] px-2 py-1 text-xs font-semibold text-white hover:bg-black transition shadow-2xs"
                              >
                                <Activity className="h-3 w-3 text-[#34A853] animate-pulse" />
                                Flowsheet
                              </Link>
                              <button
                                onClick={() => handleOpenTransitionModal(entry, "POST_OP_HOLDING")}
                                className="rounded-lg border border-[#DADCE0] bg-white px-2 py-1 text-xs font-semibold text-[#3C4043] hover:bg-[#F1F3F4] transition"
                              >
                                Finish Cath
                              </button>
                            </>
                          )}

                          {entry.status === "POST_OP_HOLDING" && (
                            <Link
                              href={`/dashboard/reports/${entry.caseId}`}
                              className="inline-flex items-center gap-1 rounded-lg bg-[#202124] px-2.5 py-1 text-xs font-semibold text-white shadow-2xs hover:bg-black transition"
                            >
                              <FileText className="h-3 w-3" />
                              Dictate Report
                            </Link>
                          )}

                          {entry.status === "REPORT_DRAFTED" && (
                            <Link
                              href={`/dashboard/reports/${entry.caseId}`}
                              className="inline-flex items-center gap-1 rounded-lg bg-[#202124] px-2.5 py-1 text-xs font-semibold text-white shadow-2xs hover:bg-black transition"
                            >
                              <ShieldAlert className="h-3 w-3 text-[#FBBC04]" />
                              Consultant Verify
                            </Link>
                          )}

                          {entry.status === "FINALIZED_SIGNED" && (
                            <>
                              <Link
                                href={`/dashboard/reports/${entry.caseId}`}
                                className="inline-flex items-center gap-1 rounded-lg border border-[#DADCE0] bg-white px-2 py-1 text-xs font-semibold text-[#3C4043] hover:bg-[#F1F3F4] transition"
                              >
                                <FileText className="h-3 w-3 text-[#5F6368]" />
                                View Report
                              </Link>
                              <button
                                onClick={() => handleOpenTransitionModal(entry, "DISCHARGED")}
                                className="rounded-lg bg-[#202124] px-2.5 py-1 text-xs font-semibold text-white hover:bg-black transition"
                              >
                                Discharge
                              </button>
                            </>
                          )}

                          {entry.status === "DISCHARGED" && (
                            <Link
                              href={`/dashboard/discharge`}
                              className="inline-flex items-center gap-1 rounded-lg border border-[#DADCE0] bg-[#F8F9FA] px-2.5 py-1 text-xs font-medium text-[#5F6368] hover:bg-[#F1F3F4] transition"
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
                    <div className="px-2 py-1.5 text-[11px] font-medium text-[#5F6368] border-b border-[#DADCE0] mb-1">
                      <span className="font-semibold text-[#202124]">{entry.patientName}</span> &bull; <span className="font-mono tabular-nums">{entry.crNumber}</span>
                    </div>
                    <ContextMenuItem onClick={() => router.push(`/dashboard/consent?caseId=${entry.caseId}&procedure=${encodeURIComponent(entry.procedureName)}`)}>
                      <FileSignature className="w-3.5 h-3.5 mr-2 text-[#5F6368] shrink-0" />
                      <span>Print Bilingual Consent Form</span>
                    </ContextMenuItem>
                    <ContextMenuItem onClick={() => router.push(`/dashboard/consent?tab=PREPARATION&caseId=${entry.caseId}`)}>
                      <ClipboardCheck className="w-3.5 h-3.5 mr-2 text-[#5F6368] shrink-0" />
                      <span>Print Pre-Op Preparation Sheet</span>
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem onClick={() => handleOpenTransitionModal(entry, "IN_PROCEDURE")}>
                      <Activity className="w-3.5 h-3.5 mr-2 text-[#5F6368] shrink-0" />
                      <span>Mark In-Lab ({entry.room || "Cath Lab 1"})</span>
                    </ContextMenuItem>
                    {entry.status === "IN_PROCEDURE" && (
                      <ContextMenuItem onClick={() => router.push(`/dashboard/cath-lab-flowsheet?caseId=${entry.caseId}`)}>
                        <Activity className="w-3.5 h-3.5 mr-2 text-[#5F6368] shrink-0" />
                        <span>Cath-Lab Flowsheet</span>
                      </ContextMenuItem>
                    )}
                    <ContextMenuItem onClick={() => router.push(`/dashboard/reports/${entry.caseId}`)}>
                      <FileText className="w-3.5 h-3.5 mr-2 text-[#5F6368] shrink-0" />
                      <span>Dictate Synoptic Report</span>
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem onClick={() => router.push(`/dashboard/imaging/STUDY-XA-2026-09142`)}>
                      <Eye className="w-3.5 h-3.5 mr-2 text-[#5F6368] shrink-0" />
                      <span>View PACS DICOM Study</span>
                    </ContextMenuItem>
                    <ContextMenuItem onClick={() => router.push(`/dashboard/calculators?calc=cigarroa&patient=${encodeURIComponent(entry.patientName)}`)}>
                      <Calculator className="w-3.5 h-3.5 mr-2 text-[#5F6368] shrink-0" />
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
