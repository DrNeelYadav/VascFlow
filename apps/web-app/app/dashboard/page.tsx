"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Building2,
  AlertTriangle,
  Flame,
  Search,
  Plus,
  ArrowRight,
  Activity,
  FileText,
  FileCheck2,
  BookOpen,
  Package,
  CalendarDays,
  Sparkles,
  Stethoscope,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ShieldAlert,
} from "lucide-react";
import { useEndoflowStore, BookedCaseRecord } from "./useEndoflowStore";
import { DEMO_BOOKED_CASES } from "../lib/demoSeedData";
import { INITIAL_RIS_WORKLIST_CASES } from "./worklist/worklistData";
import { REAL_SMS_PATIENT_REGISTRY, normalizeSmsCathLabDate } from "../lib/realData/smsCathLabRealData";
import { getHolidayForDate } from "../lib/rajasthanHolidays2026";
import { CleanDashboardHeader } from "./components/CleanDashboardHeader";
import { MinimalProcedureTable, CaseRow } from "./components/MinimalProcedureTable";

// Unified Scheduled Patient representation
interface ScheduledPatientCardItem {
  id: string;
  uhid: string;
  patientName: string;
  age: number;
  sex: "Male" | "Female";
  contactNumber: string;
  residentContact?: string;
  referringDepartment?: string;
  urgencyCategory?: string;
  procedureTitle: string;
  organSystem?: string;
  primaryDiagnosis?: string;
  room: string;
  time?: string;
  status: string;
  scheduledDate: string; // YYYY-MM-DD
}

// Urgency badge configuration helper
function getUrgencyBadgeConfig(urgency?: string) {
  const norm = (urgency || "").toLowerCase();
  if (norm.includes("vip")) {
    return {
      label: "VIP Patient",
      className: "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-800",
      dot: "bg-purple-500",
      icon: Sparkles,
    };
  }
  if (norm.includes("emergency") || norm.includes("stat")) {
    return {
      label: "Emergency / STAT",
      className: "bg-red-100 text-red-800 border-red-200 dark:bg-red-950/60 dark:text-red-300 dark:border-red-800",
      dot: "bg-red-500",
      icon: Flame,
    };
  }
  if (norm.includes("extensive")) {
    return {
      label: "Extensive Disease",
      className: "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800",
      dot: "bg-amber-500",
      icon: AlertTriangle,
    };
  }
  if (norm.includes("early")) {
    return {
      label: "Early Treatment",
      className: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800",
      dot: "bg-blue-500",
      icon: Clock,
    };
  }
  return {
    label: urgency || "Routine / Non-Urgent",
    className: "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
    dot: "bg-slate-400",
    icon: Stethoscope,
  };
}

export default function CleanIosDashboard() {
  const router = useRouter();

  // Tab View: Default layout is "calendar" (Scheduled Patients with Calendar List)
  const [activeTab, setActiveTab] = useState<"calendar" | "matrix">("calendar");

  // Current system / institutional anchor date (2026-09-22)
  const todayStr = useMemo(() => {
    return new Date().toISOString().split("T")[0] || "2026-09-22";
  }, []);

  const tomorrowStr = useMemo(() => {
    const d = new Date(todayStr + "T00:00:00");
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  }, [todayStr]);

  // Selected date on the calendar list
  const [selectedDate, setSelectedDate] = useState<string>(todayStr);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Store data
  const { bookedCases } = useEndoflowStore();

  // Real historical registry cases mapped to YYYY-MM-DD
  const historicalCasesMap = useMemo(() => {
    const map = new Map<string, ScheduledPatientCardItem[]>();
    REAL_SMS_PATIENT_REGISTRY.forEach((rc, idx) => {
      const normDate = normalizeSmsCathLabDate(rc.date); // DD.MM.YYYY
      const parts = normDate.split(".");
      if (parts.length === 3) {
        const yyyyMmDd = `${parts[2]}-${parts[1].padStart(2, "0")}-${parts[0].padStart(2, "0")}`;
        const item: ScheduledPatientCardItem = {
          id: `HIST-${rc.dsaNo || idx}`,
          uhid: `SMS-DSA-${rc.dsaNo || rc.crNumber?.slice(-4) || idx}`,
          patientName: rc.patientName,
          age: rc.age,
          sex: rc.gender,
          contactNumber: "9829000000",
          procedureTitle: rc.procedureName,
          room: "Cath Lab (Philips Azurion)",
          time: "09:00 AM",
          status: "Completed",
          scheduledDate: yyyyMmDd,
          organSystem: rc.unit || "Cath-Lab Intervention",
          urgencyCategory: "Routine",
        };
        const existing = map.get(yyyyMmDd) || [];
        existing.push(item);
        map.set(yyyyMmDd, existing);
      }
    });
    return map;
  }, []);

  // Aggregated all scheduled cases
  const allScheduledCases = useMemo(() => {
    const list: ScheduledPatientCardItem[] = [];

    // 1. Live booked cases (or demo booked cases if store is clean/empty)
    const effectiveBooked = bookedCases.length > 0 ? bookedCases : DEMO_BOOKED_CASES;

    effectiveBooked.forEach((bc) => {
      list.push({
        id: bc.id,
        uhid: bc.ssoNumber,
        patientName: bc.patientName,
        age: bc.age,
        sex: bc.sex,
        contactNumber: bc.contactNumber,
        residentContact: bc.residentContact,
        referringDepartment: bc.referringDepartment,
        urgencyCategory: bc.urgencyCategory || bc.urgency,
        procedureTitle: bc.customProcedureTitle || bc.procedureTitle,
        organSystem: bc.organSystem,
        room: bc.location || "Cath Lab (Philips Azurion)",
        time: "08:30 AM",
        status: bc.status,
        scheduledDate: bc.scheduledDate,
      });
    });

    // 2. Today's active RIS worklist cases (mapped to today's date if not already present)
    INITIAL_RIS_WORKLIST_CASES.forEach((wc) => {
      const alreadyPresent = list.some(
        (c) =>
          c.uhid === wc.crNumber ||
          c.patientName.toLowerCase() === wc.patientName.toLowerCase()
      );
      if (!alreadyPresent) {
        list.push({
          id: wc.caseId,
          uhid: wc.crNumber,
          patientName: wc.patientName,
          age: 50,
          sex: "Male",
          contactNumber: "9829000000",
          procedureTitle: wc.procedureName,
          room: wc.room || "Cath Lab (Philips Azurion)",
          time: wc.plannedTime || "09:30 AM",
          status:
            wc.status === "IN_PROCEDURE"
              ? "In Cath-Lab"
              : wc.status === "ADMITTED_PREPPED"
              ? "Admitted"
              : "Scheduled",
          scheduledDate: todayStr,
          urgencyCategory: wc.isStat ? "Emergency / STAT" : "Routine / Non-Urgent",
        });
      }
    });

    // 3. Historical registry cases
    historicalCasesMap.forEach((cases) => {
      cases.forEach((histCase) => {
        list.push(histCase);
      });
    });

    return list;
  }, [bookedCases, historicalCasesMap, todayStr]);

  // Scheduled cases filtered for the currently selected date and search term
  const selectedDateCases = useMemo(() => {
    return allScheduledCases.filter((c) => {
      if (c.scheduledDate !== selectedDate) return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        c.patientName.toLowerCase().includes(q) ||
        c.procedureTitle.toLowerCase().includes(q) ||
        c.uhid.toLowerCase().includes(q) ||
        c.contactNumber.includes(q) ||
        (c.residentContact && c.residentContact.includes(q)) ||
        (c.referringDepartment && c.referringDepartment.toLowerCase().includes(q))
      );
    });
  }, [allScheduledCases, selectedDate, searchQuery]);

  // 7-day strip around the selected date
  const weekStrip = useMemo(() => {
    const base = new Date(selectedDate + "T00:00:00");
    const days: Array<{
      dateStr: string;
      dayName: string;
      dayNumber: number;
      isToday: boolean;
      isSelected: boolean;
      caseCount: number;
    }> = [];

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    for (let offset = -2; offset <= 4; offset++) {
      const d = new Date(base);
      d.setDate(base.getDate() + offset);
      const dStr = d.toISOString().split("T")[0];
      const count = allScheduledCases.filter((c) => c.scheduledDate === dStr).length;

      days.push({
        dateStr: dStr,
        dayName: dayNames[d.getDay()],
        dayNumber: d.getDate(),
        isToday: dStr === todayStr,
        isSelected: dStr === selectedDate,
        caseCount: count,
      });
    }

    return days;
  }, [selectedDate, todayStr, allScheduledCases]);

  // Holiday info for the selected date
  const holidayInfo = useMemo(() => {
    return getHolidayForDate(selectedDate);
  }, [selectedDate]);

  // Active matrix cases for "matrix" view
  const todayMatrixCases = useMemo(() => {
    return INITIAL_RIS_WORKLIST_CASES.filter((c) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        c.patientName.toLowerCase().includes(q) ||
        c.procedureName.toLowerCase().includes(q) ||
        c.crNumber.toLowerCase().includes(q) ||
        c.supervisingConsultant.toLowerCase().includes(q)
      );
    });
  }, [searchQuery]);

  const tableCases: CaseRow[] = useMemo(() => {
    return todayMatrixCases.map((c) => ({
      id: c.caseId,
      uhid: c.crNumber,
      patient: c.patientName,
      procedure: c.procedureName,
      room: (c.room || "Cath Lab")
        .replace("Cath Lab (Philips Azurion)", "Azurion")
        .replace("PTBD Room", "PTBD"),
      status:
        c.status === "IN_PROCEDURE"
          ? "In-Progress"
          : c.status === "ADMITTED_PREPPED"
          ? "In-Progress"
          : c.status === "FINALIZED_SIGNED" || c.status === "DISCHARGED"
          ? "Completed"
          : "Scheduled",
      time: c.plannedTime,
    }));
  }, [todayMatrixCases]);

  // Stats
  const totalLogbookCases = REAL_SMS_PATIENT_REGISTRY.length;
  const activeCasesCount = INITIAL_RIS_WORKLIST_CASES.length;
  const inProcedureCount = INITIAL_RIS_WORKLIST_CASES.filter(
    (c) => c.status === "IN_PROCEDURE"
  ).length;

  const handleQuickAction = (action: string) => {
    if (action === "admit") {
      router.push("/dashboard/op-clinic");
    } else if (action === "export") {
      router.push("/dashboard/logbook");
    }
  };

  const handleOpenCase = (_id: string) => {
    router.push("/dashboard/worklist");
  };

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 font-sans pb-16">
      {/* 1. Header with Active Counts and Quick Actions */}
      <CleanDashboardHeader
        department="Interventional Radiology Angiosuite"
        activeCases={activeCasesCount}
        onQuickAction={handleQuickAction}
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 space-y-4">
        {/* 2. Top View Mode Switcher (Calendar List vs Cath-Lab Matrix) */}
        <div className="flex items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
          <div className="flex p-1 rounded-xl bg-slate-200/70 dark:bg-slate-800/80 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setActiveTab("calendar")}
              className={`flex-1 sm:flex-none px-4 py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                activeTab === "calendar"
                  ? "bg-white text-blue-600 shadow-xs dark:bg-slate-900 dark:text-blue-400"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Scheduled Calendar</span>
              {selectedDateCases.length > 0 && (
                <span className="ml-1 px-1.5 py-0.2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 text-[10px] font-mono">
                  {selectedDateCases.length}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("matrix")}
              className={`flex-1 sm:flex-none px-4 py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                activeTab === "matrix"
                  ? "bg-white text-blue-600 shadow-xs dark:bg-slate-900 dark:text-blue-400"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Cath-Lab Matrix</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <Link
              href="/dashboard/op-clinic"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-800 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>OPD Consultation Desk</span>
            </Link>
            <Link
              href="/dashboard/calendar"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 rounded-lg border border-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:border-slate-800 transition-colors"
            >
              <CalendarDays className="w-3.5 h-3.5" />
              <span>Full OT Calendar &rarr;</span>
            </Link>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* VIEW A: SCHEDULED PATIENTS WITH CALENDAR LIST (DEFAULT LAYOUT)        */}
        {/* ==================================================================== */}
        {activeTab === "calendar" && (
          <div className="space-y-4">
            {/* Calendar Date Navigator Strip */}
            <div className="rounded-2xl border border-slate-200 bg-white p-3.5 dark:border-slate-800 dark:bg-slate-900 shadow-xs space-y-3">
              {/* Quick Pills & Native Date Picker */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setSelectedDate(todayStr)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      selectedDate === todayStr
                        ? "bg-blue-600 text-white shadow-xs"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
                    }`}
                  >
                    Today
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedDate(tomorrowStr)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      selectedDate === tomorrowStr
                        ? "bg-blue-600 text-white shadow-xs"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
                    }`}
                  >
                    Tomorrow
                  </button>
                </div>

                {/* Direct Date Picker */}
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-medium text-slate-500 hidden sm:inline">
                    Jump to Date:
                  </span>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => {
                      if (e.target.value) setSelectedDate(e.target.value);
                    }}
                    className="px-2.5 py-1 text-xs rounded-lg border border-slate-200 bg-slate-50 text-slate-900 font-mono dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* 7-Day Responsive Strip */}
              <div className="grid grid-cols-7 gap-1 sm:gap-2 pt-1">
                {weekStrip.map((day) => (
                  <button
                    key={day.dateStr}
                    type="button"
                    onClick={() => setSelectedDate(day.dateStr)}
                    className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all cursor-pointer relative ${
                      day.isSelected
                        ? "bg-blue-600 text-white shadow-sm ring-2 ring-blue-400/40"
                        : "bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/60 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                    }`}
                  >
                    <span className="text-[10px] font-medium uppercase tracking-tight opacity-80">
                      {day.dayName}
                    </span>
                    <span className="text-sm font-bold my-0.5">{day.dayNumber}</span>

                    {/* Today indicator label */}
                    {day.isToday && !day.isSelected && (
                      <span className="text-[9px] font-semibold text-blue-600 dark:text-blue-400">
                        Today
                      </span>
                    )}

                    {/* Dot badge if scheduled cases exist */}
                    {day.caseCount > 0 && (
                      <span
                        className={`w-1.5 h-1.5 rounded-full mt-0.5 ${
                          day.isSelected ? "bg-white" : "bg-blue-500"
                        }`}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Selected Date Summary & Holiday Alert */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-900 dark:text-slate-100">
                    {new Date(selectedDate + "T00:00:00").toLocaleDateString("en-IN", {
                      weekday: "long",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 font-mono text-[11px] font-medium">
                    {selectedDateCases.length} scheduled
                  </span>
                </div>

                {holidayInfo.isHoliday && (
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-amber-50 text-amber-800 dark:bg-amber-950/50 dark:text-amber-300 border border-amber-200 dark:border-amber-800 text-[11px]">
                    <ShieldAlert className="w-3.5 h-3.5 shrink-0 text-amber-600" />
                    <span>
                      <strong>Rajasthan Holiday:</strong> {holidayInfo.name} (Emergency IR Only)
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Filter / Search within Scheduled Cases */}
            <div className="flex items-center justify-between gap-2">
              <div className="relative w-full max-w-md">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search scheduled patient, UHID, procedure, contact..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-800 dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-2xs"
                />
              </div>

              <div className="sm:hidden">
                <Link
                  href="/dashboard/op-clinic"
                  className="px-3 py-2 rounded-xl bg-blue-600 text-white font-medium text-xs flex items-center gap-1 shadow-xs whitespace-nowrap"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Book</span>
                </Link>
              </div>
            </div>

            {/* Scheduled Patient Cards List */}
            {selectedDateCases.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedDateCases.map((patientCase) => {
                  const urgencyBadge = getUrgencyBadgeConfig(patientCase.urgencyCategory);
                  const UrgencyIcon = urgencyBadge.icon;

                  return (
                    <div
                      key={patientCase.id}
                      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs dark:border-slate-800 dark:bg-slate-900 hover:border-blue-300 dark:hover:border-blue-700 transition-all space-y-3"
                    >
                      {/* Card Header: Slot Time, Urgency Badge, Status */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span className="font-semibold font-mono text-slate-800 dark:text-slate-200">
                            {patientCase.time || "08:30 AM"}
                          </span>
                          <span className="text-slate-300 dark:text-slate-700">•</span>
                          <span className="font-mono text-[11px] text-slate-500">
                            {patientCase.uhid}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          {/* Urgency Badge */}
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold border ${urgencyBadge.className}`}
                          >
                            <UrgencyIcon className="w-3 h-3 shrink-0" />
                            <span>{urgencyBadge.label}</span>
                          </span>

                          {/* Status Badge */}
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-medium text-slate-600 dark:text-slate-300">
                            {patientCase.status}
                          </span>
                        </div>
                      </div>

                      {/* Patient Demographics & Name */}
                      <div>
                        <div className="flex items-baseline gap-2">
                          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                            {patientCase.patientName}
                          </h2>
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                            {patientCase.age}y / {patientCase.sex}
                          </span>
                        </div>

                        {/* Procedure Title */}
                        <div className="mt-1 text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-400 flex items-start gap-1">
                          <Stethoscope className="w-3.5 h-3.5 shrink-0 mt-0.5 text-blue-500" />
                          <span>{patientCase.procedureTitle}</span>
                        </div>
                      </div>

                      {/* Location, Organ System & Referring Dept */}
                      <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-600 dark:text-slate-400">
                        <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-medium">
                          📍 {patientCase.room}
                        </span>
                        {patientCase.organSystem && (
                          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-medium">
                            🫀 {patientCase.organSystem}
                          </span>
                        )}
                        {patientCase.referringDepartment && (
                          <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 font-medium border border-blue-200 dark:border-blue-900 flex items-center gap-1">
                            <Building2 className="w-3 h-3" />
                            Ref: {patientCase.referringDepartment}
                          </span>
                        )}
                      </div>

                      {/* Primary Diagnosis (if present) */}
                      {patientCase.primaryDiagnosis && (
                        <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 text-xs text-slate-700 dark:text-slate-300">
                          <span className="font-semibold text-slate-500">Diagnosis: </span>
                          {patientCase.primaryDiagnosis}
                        </div>
                      )}

                      {/* Direct Phone Numbers (Patient & Resident) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-slate-100 dark:border-slate-800">
                        {patientCase.contactNumber ? (
                          <a
                            href={`tel:${patientCase.contactNumber}`}
                            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:bg-blue-900/50 text-xs font-medium transition-colors"
                          >
                            <Phone className="w-3 h-3 text-blue-600" />
                            <span className="truncate">Patient: {patientCase.contactNumber}</span>
                          </a>
                        ) : (
                          <div className="text-[11px] text-slate-400 flex items-center gap-1 px-2.5 py-1.5">
                            <Phone className="w-3 h-3 text-slate-300" />
                            <span>No patient phone</span>
                          </div>
                        )}

                        {patientCase.residentContact ? (
                          <a
                            href={`tel:${patientCase.residentContact}`}
                            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 dark:hover:bg-emerald-900/50 text-xs font-medium transition-colors"
                          >
                            <Phone className="w-3 h-3 text-emerald-600" />
                            <span className="truncate">Resident: {patientCase.residentContact}</span>
                          </a>
                        ) : (
                          <div className="text-[11px] text-slate-400 flex items-center gap-1 px-2.5 py-1.5">
                            <User className="w-3 h-3 text-slate-300" />
                            <span>Resident: DM On-Call</span>
                          </div>
                        )}
                      </div>

                      {/* Quick Action Navigation */}
                      <div className="flex items-center justify-end gap-2 pt-1">
                        <Link
                          href="/dashboard/flowsheet"
                          className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition-colors"
                        >
                          Flowsheet
                        </Link>
                        <Link
                          href="/dashboard/worklist"
                          className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium transition-colors flex items-center gap-1 shadow-2xs"
                        >
                          <span>Cath-Lab</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* Empty State for Selected Date */
              <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-900 space-y-3">
                <div className="mx-auto w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Calendar className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    No scheduled procedures for this date
                  </h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    There are no scheduled catheterizations or interventions booked for{" "}
                    {new Date(selectedDate + "T00:00:00").toLocaleDateString("en-IN", {
                      month: "short",
                      day: "numeric",
                    })}
                    . Add a walk-in patient from OPD consultation desk or pick another date.
                  </p>
                </div>
                <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
                  <Link
                    href="/dashboard/op-clinic"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium shadow-xs transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Book Patient in OPD Desk</span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSelectedDate(todayStr)}
                    className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition-colors"
                  >
                    Return to Today
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ==================================================================== */}
        {/* VIEW B: CATH-LAB MATRIX (TABLE VIEW & STATS)                         */}
        {/* ==================================================================== */}
        {activeTab === "matrix" && (
          <div className="space-y-4">
            {/* Numeric Stat Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900 shadow-2xs">
                <div className="text-[11px] font-medium text-slate-500">Active Worklist</div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-mono text-xl font-bold text-slate-900 dark:text-slate-100">
                    {activeCasesCount}
                  </span>
                  <span className="text-[11px] font-medium text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                    {inProcedureCount} In-Procedure
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900 shadow-2xs">
                <div className="text-[11px] font-medium text-slate-500">Registry Total</div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-mono text-xl font-bold text-slate-900 dark:text-slate-100">
                    {totalLogbookCases}
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">SMS Cath-Lab</span>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900 shadow-2xs">
                <div className="text-[11px] font-medium text-slate-500">Discharge Summaries</div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-mono text-xl font-bold text-emerald-700">100%</span>
                  <span className="text-[11px] text-slate-500">IHMS Verified</span>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900 shadow-2xs">
                <div className="text-[11px] font-medium text-slate-500">Supervising Faculty</div>
                <div className="mt-1 text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                  Dr. Meenu / Dr. Naresh
                </div>
              </div>
            </div>

            {/* Filter Controls */}
            <div className="flex items-center justify-between gap-3">
              <div className="relative w-full max-w-xs">
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter by patient, UHID, or procedure..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-1 focus:ring-slate-400 dark:border-slate-800 dark:bg-slate-900 text-slate-900 dark:text-slate-100"
                />
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href="/dashboard/worklist"
                  className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 shadow-2xs"
                >
                  Full Worklist &rarr;
                </Link>
              </div>
            </div>

            {/* Procedure Table */}
            <MinimalProcedureTable cases={tableCases} onOpenCase={handleOpenCase} />
          </div>
        )}

        {/* 4. Minimalist Module Quick Links */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2">
          <Link
            href="/dashboard/op-clinic"
            className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 transition-colors text-xs font-medium text-slate-800 dark:text-slate-200 shadow-2xs"
          >
            <Stethoscope className="w-4 h-4 text-blue-600 shrink-0" />
            <span className="truncate">OPD Clinic Desk</span>
          </Link>
          <Link
            href="/dashboard/discharge"
            className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 transition-colors text-xs font-medium text-slate-800 dark:text-slate-200 shadow-2xs"
          >
            <FileText className="w-4 h-4 text-slate-500 shrink-0" />
            <span className="truncate">Discharge Cards</span>
          </Link>
          <Link
            href="/dashboard/operative-notes"
            className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 transition-colors text-xs font-medium text-slate-800 dark:text-slate-200 shadow-2xs"
          >
            <FileCheck2 className="w-4 h-4 text-slate-500 shrink-0" />
            <span className="truncate">Operative Notes</span>
          </Link>
          <Link
            href="/dashboard/logbook"
            className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 transition-colors text-xs font-medium text-slate-800 dark:text-slate-200 shadow-2xs"
          >
            <BookOpen className="w-4 h-4 text-slate-500 shrink-0" />
            <span className="truncate">Master Logbook</span>
          </Link>
          <Link
            href="/dashboard/inventory"
            className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 transition-colors text-xs font-medium text-slate-800 dark:text-slate-200 shadow-2xs col-span-2 sm:col-span-1"
          >
            <Package className="w-4 h-4 text-slate-500 shrink-0" />
            <span className="truncate">Hardware Inventory</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
