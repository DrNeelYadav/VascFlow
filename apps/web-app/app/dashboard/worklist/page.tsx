"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Activity,
  Search,
  RefreshCw,
  CheckCircle2,
  CalendarClock,
  Building2,
  ChevronRight,
  Filter,
  User,
  SlidersHorizontal,
} from "lucide-react";
import {
  WorklistTable,
  PatientWorklistEntry,
  CaseStatus,
} from "./WorklistTable";
import { BookingChart } from "./BookingChart";
import { StatusTransitionModal } from "./StatusTransitionModal";
import { StatEmergencyModal } from "./StatEmergencyModal";

function normalizeCase(c: any): PatientWorklistEntry {
  return {
    caseId: c.caseId || c.id || "",
    crNumber: c.crNumber || c.uhid || "",
    patientName: c.patientName || "",
    procedureName: c.procedureName || c.procedure || "",
    plannedTime: c.plannedTime || "",
    operatorResident: c.operatorResident || "",
    supervisingConsultant: c.supervisingConsultant || "",
    status: (c.status as CaseStatus) || "SCHEDULED",
    fastingConfirmed: c.fastingConfirmed === true,
    contrastAllergy: c.contrastAllergy ?? false,
    room: c.room || "Cath Lab (Philips Azurion)",
    modality: c.modality || "XA",
    durationMinutes: c.durationMinutes || 60,
    startHour: c.startHour,
    endHour: c.endHour,
    isStat: c.isStat ?? false,
    statIndication: c.statIndication,
  };
}

export default function RisWorklistPage() {
  const [cases, setCases] = useState<PatientWorklistEntry[]>([]);
  const [activeTab, setActiveTab] = useState<string>("ALL");
  const [scheduledRoomFilter, setScheduledRoomFilter] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Worklist data comes from the authenticated cloud API; never restore PHI from browser storage.
  useEffect(() => {
    fetch("/api/cases")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setCases(data.map(normalizeCase).filter((c: PatientWorklistEntry) => c.caseId));
        }
      })
      .catch((err) => {
        console.warn("Could not fetch latest cases from /api/cases:", err);
        setCases([]);
      });
  }, []);

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
    setActiveModalTarget({
      caseId: entry.caseId,
      patientName: entry.patientName,
      crNumber: entry.crNumber,
      currentStatus: entry.status,
      targetStatus,
    });
  };

  const handleStatusChange = async (
    caseId: string,
    nextStatus: CaseStatus,
    notes: string = "",
    emergencyOverride?: { isEmergencyOverride: boolean; overrideReason: string }
  ) => {
    try {
      const response = await fetch(`/api/cases/${encodeURIComponent(caseId)}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nextStatus,
          notes,
          isEmergencyOverride: emergencyOverride?.isEmergencyOverride,
          overrideReason: emergencyOverride?.overrideReason,
        }),
      });
      if (!response.ok) {
        throw new Error("Status change was not saved to the live clinical record.");
      }
      setCases((prev) => prev.map((c) => c.caseId === caseId ? { ...c, status: nextStatus } : c));
    } catch (err) {
      console.error("Status transition failed:", err);
      throw err;
    }
  };

  const executeStatusTransition = handleStatusChange;

  const handleResetOrRefresh = async () => {
    setActiveTab("ALL");
    setSearchQuery("");
    try {
      const res = await fetch("/api/cases");
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          const normalized = data.map(normalizeCase).filter((c: PatientWorklistEntry) => c.caseId);
          setCases(normalized);
          return;
        }
      }
    } catch (err) {
      console.warn("Failed to reload live cases:", err);
    }
    setCases([]);
  };

  // Metric counts calculated from live cases
  const scheduledCount = cases.filter((c) => c.status === "SCHEDULED").length;
  const preppedCount = cases.filter((c) => c.status === "ADMITTED_PREPPED").length;
  const onTableCount = cases.filter((c) => c.status === "IN_PROCEDURE").length;
  const holdingCount = cases.filter((c) => c.status === "POST_OP_HOLDING").length;
  const reportsPendingCount = cases.filter((c) => c.status === "REPORT_DRAFTED").length;
  const finalizedCount = cases.filter((c) => c.status === "FINALIZED_SIGNED").length;

  // Filtered scheduled patients for top roster
  const displayedScheduledPatients = useMemo(() => {
    if (scheduledRoomFilter === "ALL") return cases;
    if (scheduledRoomFilter === "AZURION") {
      return cases.filter((c) => c.room && (c.room.includes("Azurion") || c.room.includes("Cath Lab")));
    }
    if (scheduledRoomFilter === "CT") {
      return cases.filter((c) => c.room && c.room.includes("CT"));
    }
    if (scheduledRoomFilter === "PTBD") {
      return cases.filter((c) => c.room && c.room.includes("PTBD"));
    }
    if (scheduledRoomFilter === "PCD") {
      return cases.filter((c) => c.room && c.room.includes("PCD"));
    }
    if (scheduledRoomFilter === "BIOPSY") {
      return cases.filter((c) => c.room && c.room.includes("Biopsy"));
    }
    if (scheduledRoomFilter === "US_REVIEW") {
      return cases.filter((c) => c.room && c.room.includes("Ultrasound"));
    }
    if (scheduledRoomFilter === "MSK_USG") {
      return cases.filter((c) => c.room && c.room.includes("MSK"));
    }
    if (scheduledRoomFilter === "FNAC") {
      return cases.filter((c) => c.room && c.room.includes("FNAC"));
    }
    if (scheduledRoomFilter === "ACTIVE") {
      return cases.filter(
        (c) =>
          c.status === "SCHEDULED" ||
          c.status === "ADMITTED_PREPPED" ||
          c.status === "IN_PROCEDURE"
      );
    }
    return cases;
  }, [cases, scheduledRoomFilter]);

  return (
    <div className="space-y-5 pb-12">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-[#DADCE0] pb-4">
        <div>
          <h1 className="text-2xl font-bold text-[#202124] tracking-tight">
            Cath-Lab Worklist
          </h1>
        </div>

        {/* Date & Quick Refresh */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="flex items-center gap-2 rounded-xl border border-[#DADCE0] bg-white px-3 py-2 text-xs text-[#3C4043] shadow-xs">
            <Calendar className="h-4 w-4 text-[#5F6368]" />
            <span className="font-semibold">
              {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </span>
          </div>
          <button
            onClick={handleResetOrRefresh}
            className="rounded-xl border border-[#DADCE0] bg-white p-2 text-[#5F6368] hover:text-[#202124] hover:bg-[#F1F3F4] shadow-xs transition"
            title="Reset / refresh worklist"
          >
            <RefreshCw className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* 1. Today's Scheduled Patients (Prominently at the Very Top) */}
      <div className="rounded-xl border border-[#DADCE0] bg-white p-4 sm:p-5 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-[#DADCE0] pb-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E8F0FE] text-[#1A73E8]">
              <CalendarClock className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#202124] uppercase tracking-wider">
                Today&apos;s Patients
              </h2>
            </div>
          </div>

          {/* Quick Roster Scope Filter */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            {[
              { id: "ALL", label: `All (${cases.length})` },
              {
                id: "ACTIVE",
                label: `Active (${
                  cases.filter(
                    (c) =>
                      c.status === "SCHEDULED" ||
                      c.status === "ADMITTED_PREPPED" ||
                      c.status === "IN_PROCEDURE"
                  ).length
                })`,
              },
              { id: "AZURION", label: "Cath Lab" },
              { id: "CT", label: "CT" },
              { id: "PTBD", label: "PTBD" },
              { id: "PCD", label: "PCD" },
              { id: "BIOPSY", label: "Biopsy" },
              { id: "US_REVIEW", label: "US Review" },
              { id: "MSK_USG", label: "MSK USG" },
              { id: "FNAC", label: "FNAC" },
            ].map((scope) => (
              <button
                key={scope.id}
                onClick={() => setScheduledRoomFilter(scope.id)}
                className={`rounded-full px-3 py-1 font-medium transition ${
                  scheduledRoomFilter === scope.id
                    ? "bg-[#202124] text-white shadow-2xs"
                    : "bg-[#F8F9FA] text-[#5F6368] border border-[#DADCE0] hover:bg-[#F1F3F4] hover:text-[#202124]"
                }`}
              >
                {scope.label}
              </button>
            ))}
          </div>
        </div>

        {/* Scheduled Patients Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {displayedScheduledPatients.map((patient) => {
            const isScheduled = patient.status === "SCHEDULED";
            const isPrepped = patient.status === "ADMITTED_PREPPED";
            const isInProc = patient.status === "IN_PROCEDURE";
            const roomLabel = patient.room || "Cath Lab 1";

            return (
              <div
                key={patient.caseId}
                className="flex flex-col justify-between rounded-xl border border-[#DADCE0] bg-[#FFFFFF] p-3.5 shadow-2xs hover:border-[#202124] hover:shadow-xs transition-all"
              >
                <div>
                  {/* Top: Time & Room Badge */}
                  <div className="flex items-center justify-between gap-1.5 mb-2">
                    <div className="flex items-center gap-1 text-xs font-mono font-semibold text-[#202124]">
                      <Clock className="h-3.5 w-3.5 text-[#5F6368]" />
                      <span>{patient.plannedTime}</span>
                    </div>
                    <span className="rounded bg-[#F1F3F4] px-2 py-0.5 text-[10px] font-semibold text-[#3C4043] border border-[#DADCE0]">
                      {roomLabel}
                    </span>
                  </div>

                  {/* Patient Name & CR Number */}
                  <div className="mt-1">
                    <div className="font-semibold text-xs text-[#202124] truncate" title={patient.patientName}>
                      {patient.patientName}
                    </div>
                    <div className="font-mono text-[10px] text-[#5F6368] tabular-nums">
                      CR: {patient.crNumber}
                    </div>
                  </div>

                  {/* Procedure Name */}
                  <div className="mt-2 text-xs font-medium text-[#3C4043] line-clamp-1 truncate" title={patient.procedureName}>
                    {patient.procedureName}
                  </div>

                  {/* Operator */}
                  <div className="mt-1 flex items-center gap-1 text-[11px] text-[#5F6368] truncate" title={patient.operatorResident}>
                    <User className="h-3 w-3 shrink-0 text-[#70757A]" />
                    <span className="truncate">{patient.operatorResident}</span>
                  </div>
                </div>

                {/* Direct Action Button */}
                <div className="border-t border-[#DADCE0]/70 pt-2.5 mt-3">
                  {isInProc ? (
                    <Link
                      href={`/dashboard/cath-lab-flowsheet?caseId=${patient.caseId}`}
                      className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#202124] text-white text-xs font-semibold py-1.5 hover:bg-black transition shadow-2xs"
                    >
                      <Activity className="h-3.5 w-3.5 text-[#34A853] animate-pulse" />
                      Flowsheet
                    </Link>
                  ) : isScheduled || isPrepped ? (
                    <button
                      onClick={() =>
                        handleOpenTransitionModal(
                          patient,
                          isScheduled ? "ADMITTED_PREPPED" : "IN_PROCEDURE"
                        )
                      }
                      className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#1A73E8] text-white text-xs font-semibold py-1.5 hover:bg-[#1557B0] transition shadow-2xs"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Check In
                    </button>
                  ) : (
                    <Link
                      href={`/dashboard/cath-lab-flowsheet?caseId=${patient.caseId}`}
                      className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg border border-[#DADCE0] bg-white text-[#3C4043] text-xs font-semibold py-1.5 hover:bg-[#F1F3F4] transition"
                    >
                      <Activity className="h-3.5 w-3.5 text-[#5F6368]" />
                      Flowsheet
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Cath-Lab Booking & Capacity Chart (Directly below Today's Scheduled Patients) */}
      <BookingChart
        cases={cases}
        onSelectCase={(caseId) => setSearchQuery(caseId)}
      />

      {/* 3. Operational KPI Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div
          onClick={() => setActiveTab("SCHEDULED")}
          className={`cursor-pointer rounded-xl border p-3 transition shadow-2xs ${
            activeTab === "SCHEDULED"
              ? "border-[#202124] bg-[#F1F3F4] ring-1 ring-[#202124]"
              : "border-[#DADCE0] bg-white hover:bg-[#F8F9FA]"
          }`}
        >
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#5F6368] truncate">
            Scheduled
          </div>
          <div className="text-2xl font-bold text-[#202124] mt-0.5">{scheduledCount}</div>
        </div>

        <div
          onClick={() => setActiveTab("PREPPED")}
          className={`cursor-pointer rounded-xl border p-3 transition shadow-2xs ${
            activeTab === "PREPPED"
              ? "border-[#202124] bg-[#F1F3F4] ring-1 ring-[#202124]"
              : "border-[#DADCE0] bg-white hover:bg-[#F8F9FA]"
          }`}
        >
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#5F6368] truncate">
            Prepped
          </div>
          <div className="text-2xl font-bold text-[#202124] mt-0.5">{preppedCount}</div>
        </div>

        <div
          onClick={() => setActiveTab("IN_LAB")}
          className={`cursor-pointer rounded-xl border p-3 transition shadow-2xs ${
            activeTab === "IN_LAB"
              ? "border-[#202124] bg-[#F1F3F4] ring-1 ring-[#202124]"
              : "border-[#DADCE0] bg-white hover:bg-[#F8F9FA]"
          }`}
        >
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#5F6368] truncate">
            In Lab
          </div>
          <div className="text-2xl font-bold text-[#202124] mt-0.5">{onTableCount}</div>
        </div>

        <div
          onClick={() => setActiveTab("HOLDING")}
          className={`cursor-pointer rounded-xl border p-3 transition shadow-2xs ${
            activeTab === "HOLDING"
              ? "border-[#202124] bg-[#F1F3F4] ring-1 ring-[#202124]"
              : "border-[#DADCE0] bg-white hover:bg-[#F8F9FA]"
          }`}
        >
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#5F6368] truncate">
            Holding
          </div>
          <div className="text-2xl font-bold text-[#202124] mt-0.5">{holdingCount}</div>
        </div>

        <div
          onClick={() => setActiveTab("REPORT_DRAFT")}
          className={`cursor-pointer rounded-xl border p-3 transition shadow-2xs ${
            activeTab === "REPORT_DRAFT"
              ? "border-[#202124] bg-[#F1F3F4] ring-1 ring-[#202124]"
              : "border-[#DADCE0] bg-white hover:bg-[#F8F9FA]"
          }`}
        >
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#5F6368] truncate">
            Verify Pending
          </div>
          <div className="text-2xl font-bold text-[#202124] mt-0.5">{reportsPendingCount}</div>
        </div>

        <div
          onClick={() => setActiveTab("FINALIZED")}
          className={`cursor-pointer rounded-xl border p-3 transition shadow-2xs ${
            activeTab === "FINALIZED"
              ? "border-[#202124] bg-[#F1F3F4] ring-1 ring-[#202124]"
              : "border-[#DADCE0] bg-white hover:bg-[#F8F9FA]"
          }`}
        >
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#5F6368] truncate">
            Finalized
          </div>
          <div className="text-2xl font-bold text-[#202124] mt-0.5">{finalizedCount}</div>
        </div>
      </div>

      {/* 4. Filter Tabs and Live Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white p-3 rounded-xl border border-[#DADCE0] shadow-2xs">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-medium">
          {[
            { id: "ALL", label: `All (${cases.length})` },
            { id: "SCHEDULED", label: "Scheduled" },
            { id: "PREPPED", label: "Prepped" },
            { id: "IN_LAB", label: "In Lab" },
            { id: "HOLDING", label: "Holding" },
            { id: "REPORT_DRAFT", label: "Pending" },
            { id: "FINALIZED", label: "Finalized" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-3.5 py-1.5 transition ${
                activeTab === tab.id
                  ? "bg-[#202124] text-white shadow-2xs"
                  : "bg-white text-[#5F6368] border border-[#DADCE0] hover:bg-[#F1F3F4] hover:text-[#202124]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-[#5F6368]" />
          <input
            type="text"
            placeholder="Search worklist..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-[#DADCE0] bg-[#F8F9FA] py-1.5 pl-9 pr-3 text-xs text-[#202124] placeholder:text-[#5F6368] focus:border-[#1A73E8] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1A73E8]"
          />
        </div>
      </div>

      {/* 5. Worklist Table */}
      <WorklistTable
        cases={cases}
        onCasesChange={(updatedCases) => {
          setCases(updatedCases);
        }}
        activeFilter={activeTab}
        searchQuery={searchQuery}
        onOpenTransitionModal={handleOpenTransitionModal}
      />

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


      {/* Light subtle footer attribution */}
      <div className="text-center py-4 text-xs text-zinc-400 print:hidden select-none">
        Made by Dr. Neel Yadav
      </div>
    </div>
  );
}
