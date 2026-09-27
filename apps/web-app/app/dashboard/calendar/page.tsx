"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import {
  useEndoflowStore,
  BookedCaseRecord,
} from "../useEndoflowStore";
import {
  getHolidayForDate,
  isDateElectiveBlocked,
} from "../../lib/rajasthanHolidays2026";
import {
  REAL_SMS_PATIENT_REGISTRY,
  normalizeSmsCathLabDate,
} from "../../lib/realData/smsCathLabRealData";
import {
  REAL_2026_CLINICAL_CASES,
  Real2026Case,
} from "../../lib/realData/sms2026Discharges";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  Pause,
  Clock,
  AlertTriangle,
  CheckCircle2,
  CalendarPlus,
  ArrowRightLeft,
  User,
  ShieldAlert,
  Flame,
  Activity,
  Layers,
  Search,
  Filter,
  X,
  Stethoscope,
  Info,
  ChevronDown,
  ChevronUp,
  Phone,
} from "lucide-react";

// Urgency badge styling helper
export function getUrgencyBadge(urgency?: "Elective" | "Urgent" | "Emergency" | string) {
  switch (urgency) {
    case "Emergency":
      return {
        label: "Emergency STAT",
        bg: "bg-red-50 text-red-700 border-red-200",
        dot: "bg-red-500",
        icon: Flame,
      };
    case "Urgent":
      return {
        label: "Urgent (24-48h)",
        bg: "bg-amber-50 text-amber-700 border-amber-200",
        dot: "bg-amber-500",
        icon: AlertTriangle,
      };
    case "Elective":
    default:
      return {
        label: "Elective Slot",
        bg: "bg-blue-50 text-blue-700 border-blue-200",
        dot: "bg-blue-500",
        icon: Clock,
      };
  }
}

function shiftDate(dateStr: string, days: number): string {
  const d = new Date(dateStr + 'T00:00:00');
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

export default function OtScheduleCalendarPage() {
  const { bookedCases, rescheduleCase, massRescheduleCases, holdCase, batchRescheduleCases } = useEndoflowStore();

  // Calendar View State: "month" or "week"
  const [viewMode, setViewMode] = useState<"month" | "week">("month");

  // Auto-switch to week view on mobile viewports on mount
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      setViewMode("week");
    }
  }, []);

  // Current view date anchor (Defaulting to September 2026 as per institutional cohort)
  const [currentDate, setCurrentDate] = useState<Date>(() => {
    // Current date in 2026
    return new Date("2026-09-21T00:00:00");
  });

  // Selected Day on Calendar (YYYY-MM-DD)
  const [selectedDateStr, setSelectedDateStr] = useState<string>("2026-09-21");

  // Search & Filter within Calendar
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [urgencyFilter, setUrgencyFilter] = useState<string>("all");

  // Modal State for Single Case Reschedule
  const [rescheduleModalCase, setRescheduleModalCase] = useState<BookedCaseRecord | null>(null);
  const [singleNewDate, setSingleNewDate] = useState<string>("");
  const [singleReason, setSingleReason] = useState<string>("Clinical rescheduling by attending IR resident");

  // Modal State for Mass Day Reschedule
  const [showMassRescheduleModal, setShowMassRescheduleModal] = useState<boolean>(false);
  const [massTargetDate, setMassTargetDate] = useState<string>("");
  const [massReason, setMassReason] = useState<string>("Departmental schedule balancing / Cath-Lab reorganization");
  const [actionNotice, setActionNotice] = useState<string | null>(null);

  // Multi-Select Batch Reschedule State
  const [multiSelectMode, setMultiSelectMode] = useState(false);
  const [selectedCaseIds, setSelectedCaseIds] = useState<string[]>([]);
  const [batchTargetDate, setBatchTargetDate] = useState<string>("");

  // Parked Cases & On-Call Standby State
  const [isParkedExpanded, setIsParkedExpanded] = useState(false);
  const [isOnCallExpanded, setIsOnCallExpanded] = useState(true);
  const [reactivateCaseId, setReactivateCaseId] = useState<string | null>(null);
  const [reactivateDate, setReactivateDate] = useState<string>("");

  // Month navigation helpers
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0-indexed

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleToday = () => {
    const today = new Date("2026-09-21T00:00:00");
    setCurrentDate(today);
    setSelectedDateStr("2026-09-21");
  };

  // Map real SMS cath lab registry cases (DD.MM.YYYY) to YYYY-MM-DD BookedCaseRecord format
  const historicalCasesMap = useMemo(() => {
    const map = new Map<string, BookedCaseRecord[]>();
    REAL_SMS_PATIENT_REGISTRY.forEach((rc, idx) => {
      const normDate = normalizeSmsCathLabDate(rc.date); // DD.MM.YYYY
      const parts = normDate.split(".");
      if (parts.length === 3) {
        const yyyyMmDd = `${parts[2]}-${parts[1].padStart(2, "0")}-${parts[0].padStart(2, "0")}`;
        const record: BookedCaseRecord = {
          id: `HIST-${rc.dsaNo || idx}`,
          patientName: rc.patientName,
          age: rc.age,
          sex: rc.gender,
          contactNumber: "9829000000",
          ssoNumber: `SMS-DSA-${rc.dsaNo || rc.crNumber?.slice(-4) || idx}`,
          location: "Old Gastro IR Ward",
          scheduledDate: yyyyMmDd,
          organSystem: rc.unit || "Cath-Lab Intervention",
          diseaseKey: "vascular",
          procedureTitle: rc.procedureName,
          urgency: "Elective",
          bookedBy: "Cath-Lab Logbook Registry",
          bookedAt: `${yyyyMmDd}T09:00:00.000Z`,
          orderedLabs: [],
          specialInvestigations: [],
          preScanAnatomy: {},
          hardwareChecklist: [],
          postOpPlan: "Routine post-procedural monitoring.",
          status: "Completed",
          npoVerified: true,
          labsVerified: true,
          bloodProductsVerified: true,
          hardwareVerified: true,
          screenedBy: "Faculty Cath-Lab Staff",
          screenedAt: `${yyyyMmDd}T09:00:00.000Z`,
          keptForTomorrow: false,
          admissionCardUpdated: true,
          codeAdditionStatus: "Verified",
          rescheduleHistory: [],
        };
        const existing = map.get(yyyyMmDd) || [];
        existing.push(record);
        map.set(yyyyMmDd, existing);
      }
    });

    // 2. Also map authentic 2026 clinical discharge cases directly extracted from PDFs
    REAL_2026_CLINICAL_CASES.forEach((rc, idx) => {
      const yyyyMmDd = rc.procedureIsoDate;
      if (yyyyMmDd) {
        const record: BookedCaseRecord = {
          id: rc.id || `DISCH-2026-${idx}`,
          patientName: rc.patientName,
          age: parseInt(rc.age) || 45,
          sex: rc.gender === "Female" ? "Female" : "Male",
          contactNumber: "9829000000",
          ssoNumber: rc.crNo || `SMS-2026-${idx}`,
          location: rc.ward || "Old Gastro IR Ward",
          scheduledDate: yyyyMmDd,
          organSystem: "Cath-Lab Interventional Radiology",
          diseaseKey: "vascular",
          procedureTitle: rc.procedureName,
          urgency: "Elective",
          bookedBy: rc.operatingFaculty || "Dr. Naresh Mangalhara (Associate Professor)",
          bookedAt: `${yyyyMmDd}T09:00:00.000Z`,
          orderedLabs: [],
          specialInvestigations: [],
          preScanAnatomy: {},
          hardwareChecklist: [],
          postOpPlan: rc.procedureDetail || "Standard post-procedural monitoring & hemostasis.",
          status: "Completed",
          npoVerified: true,
          labsVerified: true,
          bloodProductsVerified: true,
          hardwareVerified: true,
          screenedBy: rc.operatingFaculty || "Faculty Cath-Lab Staff",
          screenedAt: `${yyyyMmDd}T09:00:00.000Z`,
          keptForTomorrow: false,
          admissionCardUpdated: true,
          codeAdditionStatus: "Verified",
          rescheduleHistory: [],
        };
        const existing = map.get(yyyyMmDd) || [];
        // Avoid duplicate ID if already present
        if (!existing.some((e) => e.patientName.toLowerCase() === record.patientName.toLowerCase() && e.scheduledDate === record.scheduledDate)) {
          existing.push(record);
        }
        map.set(yyyyMmDd, existing);
      }
    });

    return map;
  }, []);

  // Combined booked and historical cases (excluding parked and on-call cases which do not have a fixed calendar day)
  const allCalendarCases = useMemo(() => {
    const combined = [
      ...bookedCases.filter(
        (c) =>
          c.status !== "On Hold" &&
          c.status !== "On Call" &&
          c.status !== "Standby" &&
          c.scheduledDate !== "ON_CALL" &&
          !c.isOnCall
      ),
    ];
    historicalCasesMap.forEach((histCases) => {
      combined.push(...histCases);
    });
    return combined;
  }, [bookedCases, historicalCasesMap]);

  const parkedCases = useMemo(() => {
    return bookedCases.filter((c) => c.status === "On Hold");
  }, [bookedCases]);

  const onCallCases = useMemo(() => {
    return bookedCases.filter(
      (c) =>
        c.status === "On Call" ||
        c.status === "Standby" ||
        c.scheduledDate === "ON_CALL" ||
        c.isOnCall
    );
  }, [bookedCases]);

  // Compute month matrix (Monday-start)
  const monthMatrix = useMemo(() => {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    // Get day of week for the 1st: 0=Sun, 1=Mon, ..., 6=Sat
    let startDay = firstDayOfMonth.getDay() - 1;
    if (startDay === -1) startDay = 6; // Sunday becomes 6

    const daysInMonth = lastDayOfMonth.getDate();

    // Previous month padding
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    const days: Array<{
      dateStr: string;
      dayNumber: number;
      isCurrentMonth: boolean;
      holidayInfo: ReturnType<typeof getHolidayForDate>;
      cases: BookedCaseRecord[];
    }> = [];

    for (let i = startDay - 1; i >= 0; i--) {
      const pDay = prevMonthLastDay - i;
      const prevDate = new Date(year, month - 1, pDay);
      const dStr = prevDate.toISOString().split("T")[0];
      const hInfo = getHolidayForDate(dStr);
      const c = allCalendarCases.filter((bc) => bc.scheduledDate === dStr);
      days.push({
        dateStr: dStr,
        dayNumber: pDay,
        isCurrentMonth: false,
        holidayInfo: hInfo,
        cases: c,
      });
    }

    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      const cur = new Date(year, month, d);
      const dStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      const hInfo = getHolidayForDate(dStr);
      const c = allCalendarCases.filter((bc) => bc.scheduledDate === dStr);
      days.push({
        dateStr: dStr,
        dayNumber: d,
        isCurrentMonth: true,
        holidayInfo: hInfo,
        cases: c,
      });
    }

    // Trailing padding to make 35 or 42 cells
    const remaining = (7 - (days.length % 7)) % 7;
    for (let d = 1; d <= remaining; d++) {
      const nextDate = new Date(year, month + 1, d);
      const dStr = nextDate.toISOString().split("T")[0];
      const hInfo = getHolidayForDate(dStr);
      const c = allCalendarCases.filter((bc) => bc.scheduledDate === dStr);
      days.push({
        dateStr: dStr,
        dayNumber: d,
        isCurrentMonth: false,
        holidayInfo: hInfo,
        cases: c,
      });
    }

    return days;
  }, [year, month, allCalendarCases]);

  // Compute Week View Days
  const weekDays = useMemo(() => {
    const selected = new Date(selectedDateStr + "T00:00:00");
    let dayOfWeek = selected.getDay() - 1;
    if (dayOfWeek === -1) dayOfWeek = 6;

    const monday = new Date(selected);
    monday.setDate(selected.getDate() - dayOfWeek);

    const list = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      const dStr = d.toISOString().split("T")[0];
      const hInfo = getHolidayForDate(dStr);
      const c = allCalendarCases.filter((bc) => bc.scheduledDate === dStr);
      list.push({
        dateStr: dStr,
        dateObj: d,
        dayNumber: d.getDate(),
        dayName: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
        holidayInfo: hInfo,
        cases: c,
      });
    }
    return list;
  }, [selectedDateStr, allCalendarCases]);

  // Cases for selected date with search & urgency filtering
  const selectedDateCases = useMemo(() => {
    let list = allCalendarCases.filter((c) => c.scheduledDate === selectedDateStr);
    if (urgencyFilter !== "all") {
      list = list.filter((c) => c.urgency === urgencyFilter);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (c) =>
          c.patientName.toLowerCase().includes(q) ||
          c.procedureTitle.toLowerCase().includes(q) ||
          c.ssoNumber.toLowerCase().includes(q)
      );
    }
    return list;
  }, [allCalendarCases, selectedDateStr, urgencyFilter, searchQuery]);

  const selectedDateHoliday = useMemo(() => {
    return getHolidayForDate(selectedDateStr);
  }, [selectedDateStr]);

  // Single Case Reschedule Handler
  const handleConfirmSingleReschedule = () => {
    if (!rescheduleModalCase || !singleNewDate) return;
    rescheduleCase(rescheduleModalCase.id, singleNewDate, singleReason);
    setActionNotice(
      `Patient ${rescheduleModalCase.patientName} successfully rescheduled to ${singleNewDate}.`
    );
    setRescheduleModalCase(null);
    setSingleNewDate("");
  };

  // Mass Day Reschedule Handler
  const handleConfirmMassReschedule = () => {
    if (!selectedDateStr || !massTargetDate) return;
    const moved = massRescheduleCases(selectedDateStr, massTargetDate, massReason);
    setActionNotice(
      `Shifted ${moved} case${moved === 1 ? "" : "s"} from ${selectedDateStr} to ${massTargetDate}.`
    );
    setShowMassRescheduleModal(false);
    setSelectedDateStr(massTargetDate);
    setMassTargetDate("");
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Top Header & Overview */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#DADCE0] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#E8F0FE] flex items-center justify-center text-[#1A73E8]">
              <CalendarIcon className="w-4 h-4" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#202124] tracking-tight">
                OT Schedule & Cath-Lab Calendar
              </h1>
              <p className="text-xs text-[#5F6368]">
                Master schedule and case management
              </p>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            href="/dashboard/op-clinic"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1A73E8] text-white text-xs font-semibold hover:bg-[#1557B0] transition-colors shadow-xs"
          >
            <CalendarPlus className="w-3.5 h-3.5" />
            <span>Book New Case (OPD)</span>
          </Link>

          <Link
            href="/dashboard/bed-board"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-white text-[#3C4043] text-xs font-medium hover:bg-[#F8F9FA] transition-colors"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>View Bed Board</span>
          </Link>

          {/* View Mode Toggle */}
          <div className="inline-flex rounded-lg border border-[#DADCE0] bg-[#F1F3F4] p-0.5 text-xs font-medium">
            <button
              onClick={() => setViewMode("month")}
              className={`px-3 py-1 rounded-md transition-all ${
                viewMode === "month"
                  ? "bg-white text-[#1A73E8] font-bold shadow-xs"
                  : "text-[#5F6368] hover:text-[#202124]"
              }`}
            >
              Month Grid
            </button>
            <button
              onClick={() => setViewMode("week")}
              className={`px-3 py-1 rounded-md transition-all ${
                viewMode === "week"
                  ? "bg-white text-[#1A73E8] font-bold shadow-xs"
                  : "text-[#5F6368] hover:text-[#202124]"
              }`}
            >
              Week Timeline
            </button>
          </div>
        </div>
      </div>

      {/* Action Notification Banner */}
      {actionNotice && (
        <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center justify-between animate-fadeIn">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="font-semibold">{actionNotice}</span>
          </div>
          <button
            onClick={() => setActionNotice(null)}
            className="text-emerald-600 hover:text-emerald-900 p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Layout: Calendar Grid + Day Details Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Calendar Navigation & Month/Week Grid (8 Cols) */}
        <div className="lg:col-span-8 space-y-4">
          {/* Calendar Month & Week Navigation Toolbar */}
          <div className="bg-white p-3.5 rounded-xl border border-[#DADCE0] shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevMonth}
                className="p-1.5 rounded-lg border border-[#DADCE0] hover:bg-[#F1F3F4] text-[#3C4043] transition-colors"
                title="Previous Month"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextMonth}
                className="p-1.5 rounded-lg border border-[#DADCE0] hover:bg-[#F1F3F4] text-[#3C4043] transition-colors"
                title="Next Month"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <h2 className="text-base font-bold text-[#202124] ml-1">
                {monthNames[month]} {year}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleToday}
                className="px-2.5 py-1 rounded-lg border border-[#DADCE0] text-xs font-semibold text-[#1A73E8] hover:bg-[#E8F0FE] transition-colors"
              >
                Today (Sep 21)
              </button>
              <span className="text-xs text-[#5F6368] hidden sm:inline">
                Selected: <strong className="text-[#202124]">{selectedDateStr}</strong>
              </span>
            </div>
          </div>

          {/* Month Grid View */}
          {viewMode === "month" ? (
            <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
              {/* Day Headers (Mon - Sun) */}
              <div className="grid grid-cols-7 border-b border-[#DADCE0] bg-[#F8F9FA] text-center text-[10px] sm:text-[11px] font-bold text-[#5F6368] py-1.5 sm:py-2">
                <div>MON</div>
                <div>TUE</div>
                <div>WED</div>
                <div>THU</div>
                <div>FRI</div>
                <div>SAT</div>
                <div className="text-red-600 bg-red-50/50">SUN</div>
              </div>

              {/* Day Matrix Grid */}
              <div className="grid grid-cols-7 divide-x divide-y divide-[#F1F3F4]">
                {monthMatrix.map((cell) => {
                  const isSelected = cell.dateStr === selectedDateStr;
                  const isToday = cell.dateStr === "2026-09-21";
                  const isGazetted = cell.holidayInfo.isHoliday && cell.holidayInfo.type === "Gazetted";
                  const isRestricted = cell.holidayInfo.isHoliday && cell.holidayInfo.type === "Restricted";
                  const isSunday = cell.holidayInfo.isSunday;

                  return (
                    <div
                      key={cell.dateStr}
                      onClick={() => setSelectedDateStr(cell.dateStr)}
                      className={`min-h-[58px] sm:min-h-[105px] p-1 sm:p-2 transition-all cursor-pointer flex flex-col justify-between relative group ${
                        !cell.isCurrentMonth
                          ? isSunday
                            ? "bg-red-50/20 text-red-300"
                            : "bg-[#FAFAFA] text-[#BDC1C6]"
                          : isSelected
                          ? isSunday
                            ? "bg-rose-500/15 ring-2 ring-inset ring-red-500 text-red-900"
                            : "bg-blue-50/60 ring-2 ring-inset ring-[#1A73E8]"
                          : isSunday
                          ? "bg-red-500/10 hover:bg-red-500/15 border-red-500/20"
                          : isGazetted
                          ? "bg-rose-50/30 hover:bg-rose-50/60"
                          : "bg-white hover:bg-[#F8F9FA]"
                      }`}
                    >
                      {/* Cell Header: Date Number & Holiday Indicator */}
                      <div className="flex items-start justify-between gap-1">
                        <span
                          className={`text-[11px] sm:text-xs font-bold w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full shrink-0 ${
                            isToday
                              ? "bg-[#1A73E8] text-white"
                              : isSelected
                              ? isSunday
                                ? "bg-red-600 text-white"
                                : "bg-blue-200 text-blue-900"
                              : isSunday
                              ? cell.isCurrentMonth
                                ? "text-red-700 bg-red-100/70"
                                : "text-red-400"
                              : cell.isCurrentMonth
                              ? "text-[#202124]"
                              : "text-[#BDC1C6]"
                          }`}
                        >
                          {cell.dayNumber}
                        </span>

                        {/* Holiday Tag */}
                        {cell.holidayInfo.isHoliday && (
                          <div className="text-right min-w-0 flex-1">
                            {/* Mobile dot indicator */}
                            <span
                              className={`sm:hidden inline-block w-1.5 h-1.5 rounded-full ${
                                isGazetted ? "bg-rose-500" : "bg-amber-500"
                              }`}
                              title={cell.holidayInfo.name || "Holiday"}
                            />
                            {/* Desktop full pill */}
                            <div className="hidden sm:block">
                              {isGazetted ? (
                                <span
                                  className="block px-1.5 py-0.5 rounded text-[9px] font-semibold bg-rose-100 text-rose-800 border border-rose-200 leading-tight truncate text-left"
                                  title={cell.holidayInfo.name || "Gazetted Holiday"}
                                >
                                  {cell.holidayInfo.name}
                                </span>
                              ) : isRestricted ? (
                                <span
                                  className="block px-1 py-0.5 rounded text-[9px] font-medium bg-slate-100 text-slate-600 border border-slate-200 leading-tight truncate text-left"
                                  title={cell.holidayInfo.name || "Restricted Holiday"}
                                >
                                  {cell.holidayInfo.name}
                                </span>
                              ) : null}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Sunday Closed Tag (Desktop only) */}
                      {isSunday && (
                        <div className="hidden sm:block my-1 text-[9px] font-semibold text-red-700 bg-red-100/80 px-1 py-0.5 rounded border border-red-200 text-center tracking-tight">
                          Sunday Off
                        </div>
                      )}

                      {/* Cases Indicator Badge - Clean Minimalist Counter (Zero clutter from procedure names) */}
                      <div className="flex items-center justify-center sm:justify-start mt-1">
                        {cell.cases.length > 0 && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E8F0FE] text-[#1A73E8] border border-[#D2E3FC] flex items-center gap-1 shadow-2xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1A73E8] shrink-0" />
                            <span>{cell.cases.length} {cell.cases.length === 1 ? "Case" : "Cases"}</span>
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Week Timeline View */
            <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
              <div className="p-3 border-b border-[#DADCE0] bg-[#F8F9FA] flex items-center justify-between">
                <span className="text-xs font-bold text-[#202124]">
                  Weekly Cath-Lab Workboard
                </span>
                <span className="text-xs text-[#5F6368]">
                  Week of {weekDays[0].dateStr} to {weekDays[6].dateStr}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-7 divide-y md:divide-y-0 md:divide-x divide-[#DADCE0]">
                {weekDays.map((col) => {
                  const isSelected = col.dateStr === selectedDateStr;
                  const isToday = col.dateStr === "2026-09-21";
                  const isGazetted = col.holidayInfo.isHoliday && col.holidayInfo.type === "Gazetted";
                  const isSunday = col.holidayInfo.isSunday;

                  return (
                    <div
                      key={col.dateStr}
                      onClick={() => setSelectedDateStr(col.dateStr)}
                      className={`min-h-[400px] p-2.5 transition-colors cursor-pointer flex flex-col ${
                        isSelected
                          ? isSunday
                            ? "bg-red-500/15"
                            : "bg-blue-50/40"
                          : isGazetted
                          ? "bg-rose-50/20"
                          : isSunday
                          ? "bg-red-500/10"
                          : "bg-white"
                      }`}
                    >
                      {/* Day Header */}
                      <div className="border-b border-[#F1F3F4] pb-2 text-center">
                        <span className={`text-[10px] font-bold uppercase ${isSunday ? "text-red-600" : "text-[#5F6368]"}`}>
                          {col.dayName}
                        </span>
                        <div
                          className={`w-7 h-7 mx-auto rounded-full text-xs font-bold flex items-center justify-center mt-0.5 ${
                            isToday
                              ? "bg-[#1A73E8] text-white"
                              : isSelected
                              ? isSunday
                                ? "bg-red-600 text-white"
                                : "bg-blue-200 text-blue-900"
                              : isSunday
                              ? "text-red-700 bg-red-100/70"
                              : "text-[#202124]"
                          }`}
                        >
                          {col.dayNumber}
                        </div>

                        {col.holidayInfo.isHoliday && (
                          <div className="mt-1">
                            <span className="px-1.5 py-0.5 text-[9px] font-semibold bg-rose-100 text-rose-800 rounded border border-rose-200 block truncate" title={col.holidayInfo.name || ""}>
                              {col.holidayInfo.name}
                            </span>
                          </div>
                        )}
                        {isSunday && (
                          <div className="mt-1 text-[9px] font-semibold text-red-600">
                            Emergency Only
                          </div>
                        )}
                      </div>

                      {/* Cases in Column */}
                      <div className="mt-2.5 space-y-2 flex-1">
                        {col.cases.length === 0 ? (
                          <div className="text-[11px] text-[#5F6368] text-center py-6">
                            No cases scheduled
                          </div>
                        ) : (
                          col.cases.map((cs) => {
                            const badge = getUrgencyBadge(cs.urgency);
                            return (
                              <div
                                key={cs.id}
                                className="p-2 rounded-lg border border-[#DADCE0] bg-white shadow-2xs hover:shadow-xs transition-shadow text-xs"
                              >
                                <div className="flex items-center justify-between mb-1">
                                  <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold border ${badge.bg}`}>
                                    {cs.urgency || "Elective"}
                                  </span>
                                  <span className="text-[10px] font-mono text-[#5F6368]">
                                    {cs.ssoNumber}
                                  </span>
                                </div>
                                <div className="font-bold text-[#202124] truncate">
                                  {cs.patientName}
                                </div>
                                <div className="text-[11px] text-[#5F6368] line-clamp-2 mt-0.5">
                                  {cs.procedureTitle}
                                </div>
                              </div>
                            );
                          })
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Selected Date Inspector & Action Panel (4 Cols) */}
        <div className="lg:col-span-4 space-y-4">
          {/* Day Inspector Card */}
          <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-[#DADCE0] bg-[#F8F9FA]">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#5F6368]">
                    Selected Date Schedule
                  </span>
                  <h3 className="text-lg font-bold text-[#202124]">
                    {selectedDateStr}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="px-2 py-1 rounded-full text-xs font-bold bg-[#E8F0FE] text-[#1A73E8] border border-[#D2E3FC]">
                    {selectedDateCases.length} {selectedDateCases.length === 1 ? "Case" : "Cases"}
                  </span>
                </div>
              </div>

              {/* Holiday Alert Banner */}
              {selectedDateHoliday.isHoliday && (
                <div
                  className={`mt-3 p-2.5 rounded-lg border text-xs flex items-start gap-2 ${
                    selectedDateHoliday.type === "Gazetted"
                      ? "bg-rose-50 border-rose-200 text-rose-900"
                      : "bg-slate-50 border-slate-200 text-slate-800"
                  }`}
                >
                  <ShieldAlert
                    className={`w-4 h-4 shrink-0 mt-0.5 ${
                      selectedDateHoliday.type === "Gazetted" ? "text-rose-600" : "text-slate-600"
                    }`}
                  />
                  <div>
                    <span className="font-bold">
                      {selectedDateHoliday.type === "Gazetted" ? "Official Gazetted Holiday: " : "Restricted Holiday: "}
                      {selectedDateHoliday.name}
                    </span>
                    <p className="text-[11px] opacity-90 mt-0.5">
                      {selectedDateHoliday.type === "Gazetted"
                        ? "Elective bookings deferred. Emergency and urgent cases only."
                        : "Restricted holiday. Attending faculty availability may be adjusted."}
                    </p>
                  </div>
                </div>
              )}

              {/* Mass Reschedule Button */}
              {selectedDateCases.length > 0 && (
                <div className="mt-3 pt-3 border-t border-[#DADCE0] flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      setMassTargetDate("");
                      setShowMassRescheduleModal(true);
                    }}
                    className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#F1F3F4] text-[#202124] text-xs font-bold hover:bg-[#E8EAED] border border-[#DADCE0] transition-colors cursor-pointer"
                  >
                    <ArrowRightLeft className="w-3.5 h-3.5 text-[#1A73E8]" />
                    <span>Shift All {selectedDateCases.length} Cases to Date</span>
                  </button>
                </div>
              )}
            </div>

            {/* Filter and Search Bar for Day Inspector */}
            <div className="p-3 border-b border-[#F1F3F4] bg-white space-y-2">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-[#5F6368] absolute left-2.5 top-2.5" />
                <input
                  type="text"
                  placeholder="Filter patients on this date..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-[#DADCE0] bg-white text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-1 text-[11px] mt-2">
                <span className="text-[#5F6368] mr-1">Urgency:</span>
                {["all", "Emergency", "Urgent", "Elective"].map((u) => (
                  <button
                    key={u}
                    onClick={() => setUrgencyFilter(u)}
                    className={`px-2 py-0.5 rounded-full font-medium transition-colors ${
                      urgencyFilter === u
                        ? "bg-[#1A73E8] text-white"
                        : "bg-[#F1F3F4] text-[#3C4043] hover:bg-[#E8EAED]"
                    }`}
                  >
                    {u === "all" ? "All" : u}
                  </button>
                ))}
              </div>
              <div className="mt-2 pt-2 border-t border-[#F1F3F4] flex items-center justify-between">
                <button
                  onClick={() => {
                    setMultiSelectMode(!multiSelectMode);
                    setSelectedCaseIds([]);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${
                    multiSelectMode
                      ? "bg-[#1A73E8] text-white border-[#1A73E8]"
                      : "bg-white text-[#5F6368] border-[#DADCE0] hover:bg-[#F8F9FA]"
                  }`}
                >
                  {multiSelectMode ? "Cancel Selection" : "☑ Select Multiple"}
                </button>
                {multiSelectMode && selectedCaseIds.length > 0 && (
                  <span className="text-xs font-bold text-[#1A73E8]">
                    {selectedCaseIds.length} selected
                  </span>
                )}
              </div>
            </div>

            {/* Case List */}
            <div className="p-3 space-y-3 max-h-[560px] overflow-y-auto relative pb-20">
              {selectedDateCases.length === 0 ? (
                <div className="text-center py-10 text-[#5F6368]">
                  <CalendarIcon className="w-8 h-8 mx-auto text-[#BDC1C6] mb-2" />
                  <p className="text-xs font-medium text-[#202124]">
                    No Booked Cases for {selectedDateStr}
                  </p>
                  <p className="text-[11px] text-[#5F6368] mt-1 max-w-[220px] mx-auto">
                    Use the button below or Consultation Desk to schedule a Cath-Lab slot.
                  </p>
                  <Link
                    href="/dashboard/op-clinic"
                    className="inline-flex items-center gap-1 mt-3 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#1A73E8] bg-[#E8F0FE] hover:bg-[#D2E3FC] transition-colors"
                  >
                    <CalendarPlus className="w-3.5 h-3.5" />
                    <span>Book Slot from OPD</span>
                  </Link>
                </div>
              ) : (
                selectedDateCases.map((cs) => {
                  const badge = getUrgencyBadge(cs.urgency);
                  const Icon = badge.icon;
                  const isRealBookedCase = bookedCases.some((b) => b.id === cs.id);

                  return (
                    <div
                      key={cs.id}
                      className={`rounded-xl border ${
                        selectedCaseIds.includes(cs.id)
                          ? "border-[#1A73E8] bg-blue-50/30 ring-1 ring-[#1A73E8]"
                          : "border-[#DADCE0] bg-white"
                      } p-3 shadow-2xs hover:shadow-xs transition-shadow space-y-2.5`}
                    >
                      {/* Top Row: Urgency Badge & Action */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          {multiSelectMode && isRealBookedCase && (
                            <input
                              type="checkbox"
                              checked={selectedCaseIds.includes(cs.id)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedCaseIds([...selectedCaseIds, cs.id]);
                                } else {
                                  setSelectedCaseIds(selectedCaseIds.filter((id) => id !== cs.id));
                                }
                              }}
                              className="w-4 h-4 rounded border-[#DADCE0] text-[#1A73E8] focus:ring-[#1A73E8]"
                            />
                          )}
                          <span
                            className={`px-2 py-0.5 rounded-md text-[10px] font-bold border flex items-center gap-1 ${badge.bg}`}
                          >
                            <Icon className="w-3 h-3" />
                            <span>{badge.label}</span>
                          </span>
                          <span className="text-[10px] font-mono text-[#5F6368]">
                            {cs.ssoNumber}
                          </span>
                        </div>

                        {/* Single Case Reschedule Action */}
                        <button
                          onClick={() => {
                            setRescheduleModalCase(cs);
                            setSingleNewDate("");
                          }}
                          className="flex items-center gap-1 px-2 py-1 rounded text-[11px] font-semibold text-[#1A73E8] hover:bg-[#E8F0FE] transition-colors"
                          title="Reschedule this case"
                        >
                          <ArrowRightLeft className="w-3 h-3" />
                          <span>Reschedule</span>
                        </button>
                      </div>

                      {/* Patient Name & Age/Sex */}
                      <div>
                        <h4 className="text-sm font-bold text-[#202124]">
                          {cs.patientName}
                        </h4>
                        <div className="text-xs text-[#5F6368] flex items-center gap-2 mt-0.5">
                          <span>{cs.age}y / {cs.sex}</span>
                          <span>•</span>
                          <span>{cs.organSystem}</span>
                          <span>•</span>
                          <span>Booked by {cs.bookedBy.split(" ")[0]}</span>
                        </div>
                      </div>

                      {/* Procedure Title */}
                      <div className="text-xs font-medium text-[#3C4043] bg-[#F8F9FA] p-2 rounded-lg border border-[#F1F3F4]">
                        {cs.procedureTitle}
                      </div>

                      {/* Checklist & Safety Summary */}
                      <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                        <div className="flex items-center gap-1 text-[#5F6368]">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              cs.npoVerified ? "bg-emerald-500" : "bg-amber-400"
                            }`}
                          />
                          <span>NPO: {cs.npoVerified ? "Verified" : "Pending"}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[#5F6368]">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              cs.labsVerified ? "bg-emerald-500" : "bg-amber-400"
                            }`}
                          />
                          <span>Labs: {cs.labsVerified ? "Cleared" : "Pending"}</span>
                        </div>
                      </div>

                      {/* Quick Shift Actions (Only for active booked cases) */}
                      {isRealBookedCase && (
                        <div className="grid grid-cols-4 gap-1 mt-2 pt-2 border-t border-[#F1F3F4]">
                          <button
                            onClick={() => rescheduleCase(cs.id, shiftDate(cs.scheduledDate, -1), "Quick shift: -1 day")}
                            disabled={new Date(shiftDate(cs.scheduledDate, -1)) < new Date(new Date().toISOString().split("T")[0])}
                            className="flex items-center justify-center gap-1 p-1 rounded bg-[#F1F3F4] text-[#3C4043] hover:bg-[#E8EAED] text-[10px] font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                            title="Previous Day"
                          >
                            <ChevronLeft className="w-3 h-3" /> Prev
                          </button>
                          <button
                            onClick={() => rescheduleCase(cs.id, shiftDate(cs.scheduledDate, 1), "Quick shift: +1 day")}
                            className="flex items-center justify-center gap-1 p-1 rounded bg-[#F1F3F4] text-[#3C4043] hover:bg-[#E8EAED] text-[10px] font-medium"
                            title="Next Day"
                          >
                            Next <ChevronRight className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => rescheduleCase(cs.id, shiftDate(cs.scheduledDate, 7), "Quick shift: +7 days")}
                            className="flex items-center justify-center gap-1 p-1 rounded bg-[#F1F3F4] text-[#3C4043] hover:bg-[#E8EAED] text-[10px] font-medium"
                            title="Next Week"
                          >
                            Next Wk <ChevronsRight className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => holdCase(cs.id, "Parked from calendar")}
                            className="flex items-center justify-center gap-1 p-1 rounded bg-amber-50 text-amber-700 hover:bg-amber-100 text-[10px] font-medium border border-amber-200"
                            title="Park / Hold Case"
                          >
                            <Pause className="w-3 h-3" /> Park
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>

            {/* Batch Reschedule Action Bar */}
            {multiSelectMode && selectedCaseIds.length > 0 && (
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-white border-t border-[#DADCE0] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-10 animate-slideUp">
                <div className="text-[11px] font-bold text-[#3C4043] mb-2">
                  Move {selectedCaseIds.length} Selected to...
                </div>
                <div className="flex gap-2">
                  <input
                    type="date"
                    value={batchTargetDate}
                    onChange={(e) => setBatchTargetDate(e.target.value)}
                    min="2026-01-01"
                    max="2026-12-31"
                    className="flex-1 px-2 py-1.5 rounded border border-[#DADCE0] text-xs font-semibold focus:border-[#1A73E8] focus:outline-none"
                  />
                  <button
                    onClick={() => {
                      if (batchTargetDate) {
                        batchRescheduleCases(selectedCaseIds, batchTargetDate, "Batch move from calendar");
                        setMultiSelectMode(false);
                        setSelectedCaseIds([]);
                        setBatchTargetDate("");
                        setActionNotice(`Successfully batch-moved ${selectedCaseIds.length} cases to ${batchTargetDate}.`);
                      }
                    }}
                    disabled={!batchTargetDate}
                    className="px-3 py-1.5 bg-[#1A73E8] text-white text-xs font-bold rounded hover:bg-[#1557B0] disabled:opacity-50 transition-colors shrink-0"
                  >
                    Confirm Move
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* On-Call Standby Queue (Call in case of cancellation) */}
          <div className="bg-white rounded-xl border border-teal-300 shadow-xs overflow-hidden">
            <button
              onClick={() => setIsOnCallExpanded(!isOnCallExpanded)}
              className="w-full flex items-center justify-between p-3 bg-teal-50/80 hover:bg-teal-100/70 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-700" />
                <span className="text-xs font-bold text-teal-950">
                  On-Call Standby Patients ({onCallCases.length})
                </span>
                <span className="text-[10px] text-teal-700 font-medium hidden sm:inline">
                  • Standby roster to call when a case cancels
                </span>
              </div>
              {isOnCallExpanded ? (
                <ChevronUp className="w-4 h-4 text-teal-700" />
              ) : (
                <ChevronDown className="w-4 h-4 text-teal-700" />
              )}
            </button>

            {isOnCallExpanded && (
              <div className="p-3 border-t border-teal-200 space-y-2 max-h-[300px] overflow-y-auto">
                {onCallCases.length === 0 ? (
                  <div className="text-center py-4 text-[#5F6368] text-xs">
                    No patients currently kept on call. Select &ldquo;Keep On Call&rdquo; in OPD Consultation to populate standby list.
                  </div>
                ) : (
                  onCallCases.map((cs) => (
                    <div
                      key={cs.id}
                      className="p-2.5 rounded-lg border border-teal-200 bg-teal-50/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-bold text-[#202124]">
                            {cs.patientName}
                          </span>
                          <span className="text-[11px] text-[#5F6368]">
                            ({cs.age}y / {cs.sex})
                          </span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-teal-100 text-teal-800 border border-teal-200">
                            STANDBY ON-CALL
                          </span>
                        </div>
                        <div className="text-[11px] text-[#3C4043] font-medium truncate mt-0.5">
                          {cs.procedureTitle} • {cs.location || "Jaipur"}
                        </div>
                        {cs.contactNumber && (
                          <div className="text-[11px] text-teal-800 font-semibold flex items-center gap-1 mt-0.5">
                            <Phone className="w-3 h-3 text-teal-600" />
                            <span>{cs.contactNumber}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                        {cs.contactNumber && (
                          <a
                            href={`tel:${cs.contactNumber}`}
                            className="px-2.5 py-1 rounded bg-teal-600 hover:bg-teal-700 text-white text-[11px] font-semibold flex items-center gap-1 shadow-2xs"
                          >
                            <Phone className="w-3 h-3" />
                            <span>Call</span>
                          </a>
                        )}
                        <button
                          onClick={() => {
                            setRescheduleModalCase(cs);
                            setSingleNewDate(selectedDateStr);
                          }}
                          className="px-2.5 py-1 rounded bg-[#1A73E8] hover:bg-[#1557B0] text-white text-[11px] font-semibold shadow-2xs"
                        >
                          Book into {selectedDateStr}
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          {/* Parked / On Hold Cases Panel */}
          <div className="bg-white rounded-xl border border-[#DADCE0] shadow-xs overflow-hidden">
            <button
              onClick={() => setIsParkedExpanded(!isParkedExpanded)}
              className="w-full flex items-center justify-between p-3 bg-[#F8F9FA] hover:bg-[#F1F3F4] transition-colors"
            >
              <div className="flex items-center gap-2">
                <Pause className="w-4 h-4 text-amber-600" />
                <span className="text-xs font-bold text-[#202124]">
                  Parked / On Hold Cases ({parkedCases.length})
                </span>
              </div>
              {isParkedExpanded ? (
                <ChevronUp className="w-4 h-4 text-[#5F6368]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#5F6368]" />
              )}
            </button>

            {isParkedExpanded && (
              <div className="p-3 border-t border-[#DADCE0] space-y-2 max-h-[300px] overflow-y-auto">
                {parkedCases.length === 0 ? (
                  <div className="text-center py-4 text-[#5F6368] text-xs">
                    No cases on hold.
                  </div>
                ) : (
                  parkedCases.map((cs) => (
                    <div
                      key={cs.id}
                      className="p-2 rounded-lg border border-amber-200 bg-amber-50/30 flex flex-col gap-2"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-[11px] font-bold text-[#202124] truncate max-w-[200px]">
                            {cs.patientName}
                          </div>
                          <div className="text-[10px] text-[#5F6368] truncate max-w-[200px]">
                            {cs.procedureTitle}
                          </div>
                        </div>
                        {reactivateCaseId === cs.id ? (
                          <div className="flex flex-col gap-1 items-end">
                            <input
                              type="date"
                              value={reactivateDate}
                              onChange={(e) => setReactivateDate(e.target.value)}
                              className="px-1 py-0.5 border border-[#DADCE0] rounded text-[10px] max-w-[100px]"
                            />
                            <div className="flex gap-1">
                              <button
                                onClick={() => setReactivateCaseId(null)}
                                className="px-1.5 py-0.5 rounded border border-[#DADCE0] bg-white text-[9px]"
                              >
                                Cancel
                              </button>
                              <button
                                onClick={() => {
                                  if (reactivateDate) {
                                    rescheduleCase(cs.id, reactivateDate, "Reactivated from hold");
                                    setReactivateCaseId(null);
                                    setReactivateDate("");
                                    setActionNotice(`Reactivated ${cs.patientName} for ${reactivateDate}.`);
                                  }
                                }}
                                disabled={!reactivateDate}
                                className="px-1.5 py-0.5 rounded bg-amber-600 text-white text-[9px] disabled:opacity-50"
                              >
                                Confirm
                              </button>
                            </div>
                          </div>
                        ) : (
                          <button
                            onClick={() => {
                              setReactivateCaseId(cs.id);
                              setReactivateDate("");
                            }}
                            className="px-2 py-1 rounded text-[10px] font-bold bg-white border border-amber-300 text-amber-700 hover:bg-amber-100"
                          >
                            Reactivate
                          </button>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MODAL 1: Single Case Reschedule Dialog */}
      {rescheduleModalCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-5 space-y-4 border border-[#DADCE0]">
            <div className="flex items-center justify-between border-b border-[#F1F3F4] pb-3">
              <div className="flex items-center gap-2">
                <ArrowRightLeft className="w-4 h-4 text-[#1A73E8]" />
                <h3 className="text-base font-bold text-[#202124]">
                  Reschedule Single Case
                </h3>
              </div>
              <button
                onClick={() => setRescheduleModalCase(null)}
                className="text-[#5F6368] hover:text-[#202124] p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Patient Context */}
            <div className="bg-[#F8F9FA] p-3 rounded-xl border border-[#DADCE0] text-xs space-y-1">
              <div className="font-bold text-[#202124] text-sm">
                {rescheduleModalCase.patientName} ({rescheduleModalCase.age}y / {rescheduleModalCase.sex})
              </div>
              <div className="text-[#5F6368]">
                SSO: {rescheduleModalCase.ssoNumber} • {rescheduleModalCase.procedureTitle}
              </div>
              <div className="text-[#5F6368]">
                Current Scheduled Date: <strong className="text-[#202124]">{rescheduleModalCase.scheduledDate}</strong>
              </div>
            </div>

            {/* Target Date Input */}
            <div>
              <label className="block text-xs font-bold text-[#3C4043] mb-1">
                New Target Cath-Lab Date
              </label>
              <input
                type="date"
                value={singleNewDate}
                onChange={(e) => setSingleNewDate(e.target.value)}
                min="2026-01-01"
                max="2026-12-31"
                className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-white text-xs font-semibold text-[#202124] focus:border-[#1A73E8] focus:outline-none"
              />

              {/* Holiday warning on selected new date */}
              {singleNewDate && (
                (() => {
                  const check = isDateElectiveBlocked(singleNewDate);
                  if (check.blocked) {
                    return (
                      <div className="mt-2 p-2 rounded bg-amber-50 border border-amber-200 text-[11px] text-amber-800 flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-amber-600" />
                        <span>{check.reason}</span>
                      </div>
                    );
                  }
                  return null;
                })()
              )}
            </div>

            {/* Reschedule Reason */}
            <div>
              <label className="block text-xs font-bold text-[#3C4043] mb-1">
                Reschedule Reason
              </label>
              <textarea
                rows={2}
                value={singleReason}
                onChange={(e) => setSingleReason(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-white text-xs text-[#202124] focus:border-[#1A73E8] focus:outline-none"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#F1F3F4]">
              <button
                onClick={() => setRescheduleModalCase(null)}
                className="px-3 py-1.5 rounded-lg border border-[#DADCE0] text-xs font-medium text-[#3C4043] hover:bg-[#F1F3F4]"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmSingleReschedule}
                disabled={!singleNewDate}
                className="px-4 py-1.5 rounded-lg bg-[#1A73E8] text-white text-xs font-bold hover:bg-[#1557B0] disabled:opacity-50 transition-colors shadow-xs"
              >
                Confirm Reschedule
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: Mass Day Reschedule Dialog ("Shift All Cases to Date") */}
      {showMassRescheduleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-5 space-y-4 border border-[#DADCE0]">
            <div className="flex items-center justify-between border-b border-[#F1F3F4] pb-3">
              <div className="flex items-center gap-2">
                <ArrowRightLeft className="w-5 h-5 text-[#1A73E8]" />
                <div>
                  <h3 className="text-base font-bold text-[#202124]">
                    Mass Reschedule Day Schedule
                  </h3>
                  <p className="text-[11px] text-[#5F6368]">
                    Shift all cases from {selectedDateStr} to another day
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowMassRescheduleModal(false)}
                className="text-[#5F6368] hover:text-[#202124] p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span>Mass Shifting {selectedDateCases.length} Cases</span>
              </div>
              <p className="text-[11px] opacity-90">
                All cases currently scheduled on <strong className="text-amber-950">{selectedDateStr}</strong> will be moved to the new date selected below with full audit logging.
              </p>
            </div>

            {/* Target Date Input */}
            <div>
              <label className="block text-xs font-bold text-[#3C4043] mb-1">
                Select Destination OT Date
              </label>
              <input
                type="date"
                value={massTargetDate}
                onChange={(e) => setMassTargetDate(e.target.value)}
                min="2026-01-01"
                max="2026-12-31"
                className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-white text-xs font-semibold text-[#202124] focus:border-[#1A73E8] focus:outline-none"
              />

              {/* Holiday alert check on target date */}
              {massTargetDate && (
                (() => {
                  const check = isDateElectiveBlocked(massTargetDate);
                  if (check.blocked) {
                    return (
                      <div className="mt-2 p-2 rounded bg-rose-50 border border-rose-200 text-[11px] text-rose-800 flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-rose-600" />
                        <span>Warning: Destination date is blocked ({check.reason}).</span>
                      </div>
                    );
                  }
                  return null;
                })()
              )}
            </div>

            {/* Mass Reason Input */}
            <div>
              <label className="block text-xs font-bold text-[#3C4043] mb-1">
                Audit Reason for Mass Shift
              </label>
              <textarea
                rows={2}
                value={massReason}
                onChange={(e) => setMassReason(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-white text-xs text-[#202124] focus:border-[#1A73E8] focus:outline-none"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#F1F3F4]">
              <button
                onClick={() => setShowMassRescheduleModal(false)}
                className="px-3 py-1.5 rounded-lg border border-[#DADCE0] text-xs font-medium text-[#3C4043] hover:bg-[#F1F3F4]"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmMassReschedule}
                disabled={!massTargetDate || massTargetDate === selectedDateStr}
                className="px-4 py-1.5 rounded-lg bg-[#1A73E8] text-white text-xs font-bold hover:bg-[#1557B0] disabled:opacity-50 transition-colors shadow-xs"
              >
                Shift All Cases
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
