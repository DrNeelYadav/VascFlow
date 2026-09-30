"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import {
  useEndoflowStore,
  BookedCaseRecord,
} from "../useEndoflowStore";
import {
  getHolidayForDate,
} from "../../lib/rajasthanHolidays2026";
import {
  REAL_SMS_PATIENT_REGISTRY,
  normalizeSmsCathLabDate,
} from "../../lib/realData/smsCathLabRealData";
import {
  AUTHENTIC_SMS_MASTER_CASES,
} from "../../lib/realData/smsMasterAnalysisCases";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  CalendarPlus,
} from "lucide-react";

function formatYmd(year: number, monthIndex: number, day: number): string {
  const dt = new Date(year, monthIndex, day);
  const padYear = dt.getFullYear();
  const padMonth = String(dt.getMonth() + 1).padStart(2, "0");
  const padDay = String(dt.getDate()).padStart(2, "0");
  return `${padYear}-${padMonth}-${padDay}`;
}

function getTodayIsoString(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export default function OtScheduleCalendarPage() {
  const { bookedCases } = useEndoflowStore();

  // Dynamic system today's date state (updates dynamically with system clock)
  const [todayDateStr, setTodayDateStr] = useState<string>(() => getTodayIsoString());

  useEffect(() => {
    const updateToday = () => {
      const current = getTodayIsoString();
      setTodayDateStr((prev) => (prev !== current ? current : prev));
    };
    const timer = setInterval(updateToday, 60000);
    return () => clearInterval(timer);
  }, []);

  // Current view date anchor (defaults to current date and month)
  const [currentDate, setCurrentDate] = useState<Date>(() => new Date());

  // Selected Day on Calendar (YYYY-MM-DD, defaults to today's date)
  const [selectedDateStr, setSelectedDateStr] = useState<string>(() => getTodayIsoString());

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

  const todayFormattedShort = useMemo(() => {
    const parts = todayDateStr.split("-");
    if (parts.length === 3) {
      const d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
      return d.toLocaleDateString("en-IN", { month: "short", day: "numeric" });
    }
    return "Today";
  }, [todayDateStr]);

  const handleToday = () => {
    const now = new Date();
    setCurrentDate(now);
    setSelectedDateStr(todayDateStr);
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

    // 2026 authentic master-registry cases. The former synthetic
    // REAL_2026_CLINICAL_CASES feed was removed with sms2026Discharges.ts;
    // these rows are real patients from the DSA registry instead.
    AUTHENTIC_SMS_MASTER_CASES.forEach((rc, idx) => {
      const normDate = normalizeSmsCathLabDate(rc.date);
      const yyyyMmDd = normDate
        ? `${normDate.split(".")[2]}-${normDate.split(".")[1]}-${normDate.split(".")[0]}`
        : "";
      if (yyyyMmDd && yyyyMmDd.startsWith("2026")) {
        const record: BookedCaseRecord = {
          id: `AUTH-2026-${rc.dsaNo || idx}`,
          patientName: rc.patientName,
          age: typeof rc.age === "number" ? rc.age : parseInt(String(rc.age)) || 0,
          sex: rc.gender === "Female" ? "Female" : "Male",
          contactNumber: "",
          ssoNumber: rc.crNumber || `SMS-DSA-${rc.dsaNo || idx}`,
          location: rc.unit || "Old Gastro IR Ward",
          scheduledDate: yyyyMmDd,
          organSystem: "Cath-Lab Interventional Radiology",
          diseaseKey: "vascular",
          procedureTitle: rc.procedureName,
          urgency: "Elective",
          bookedBy: "SMS IR Cath-Lab",
          bookedAt: `${yyyyMmDd}T09:00:00.000Z`,
          orderedLabs: [],
          specialInvestigations: [],
          preScanAnatomy: {},
          hardwareChecklist: [],
          // The real registry carries no per-case post-op plan text; leave it
          // empty rather than substituting a generic clinical sentence.
          postOpPlan: "",
          status: "Completed",
          npoVerified: true,
          labsVerified: true,
          bloodProductsVerified: true,
          hardwareVerified: true,
          screenedBy: "SMS IR Cath-Lab",
          screenedAt: `${yyyyMmDd}T09:00:00.000Z`,
          keptForTomorrow: false,
          admissionCardUpdated: true,
          codeAdditionStatus: "Verified",
          rescheduleHistory: [],
        };
        const existing = map.get(yyyyMmDd) || [];
        if (!existing.some((e) => e.patientName.toLowerCase() === record.patientName.toLowerCase() && e.scheduledDate === record.scheduledDate)) {
          existing.push(record);
        }
        map.set(yyyyMmDd, existing);
      }
    });

    return map;
  }, []);

  // Combined booked and historical cases
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

  // Compute month matrix (Monday-start) with pure local integer formatting (no toISOString skew)
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
      const dStr = formatYmd(year, month - 1, pDay);
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
      const dStr = formatYmd(year, month, d);
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

    // Trailing padding to make 35 or 42 cells (multiple of 7)
    const remaining = (7 - (days.length % 7)) % 7;
    for (let d = 1; d <= remaining; d++) {
      const dStr = formatYmd(year, month + 1, d);
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

  return (
    <div className="space-y-6 pb-16">
      {/* Top Header & Overview */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#DADCE0] dark:border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#E8F0FE] dark:bg-blue-950/50 flex items-center justify-center text-[#1A73E8] dark:text-blue-400">
              <CalendarIcon className="w-4 h-4" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#202124] dark:text-slate-100 tracking-tight">
                Cath-Lab Schedule
              </h1>
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
            <span>+ New Case</span>
          </Link>
        </div>
      </div>

      {/* Main Layout: Full-Width Clean Monthly Calendar Timeline */}
      <div className="w-full space-y-4">
        {/* Calendar Month & Week Navigation Toolbar */}
        <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-[#DADCE0] dark:border-slate-800 shadow-xs flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevMonth}
              className="p-1.5 rounded-lg border border-[#DADCE0] dark:border-slate-700 hover:bg-[#F1F3F4] dark:hover:bg-slate-800 text-[#3C4043] dark:text-slate-200 transition-colors"
              title="Previous Month"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextMonth}
              className="p-1.5 rounded-lg border border-[#DADCE0] dark:border-slate-700 hover:bg-[#F1F3F4] dark:hover:bg-slate-800 text-[#3C4043] dark:text-slate-200 transition-colors"
              title="Next Month"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <h2 className="text-base font-bold text-[#202124] dark:text-slate-100 ml-1">
              {monthNames[month]} {year}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleToday}
              className="px-2.5 py-1 rounded-lg border border-[#DADCE0] dark:border-slate-700 text-xs font-semibold text-[#1A73E8] dark:text-blue-400 hover:bg-[#E8F0FE] dark:hover:bg-blue-950/50 transition-colors"
            >
              Today ({todayFormattedShort})
            </button>
            <span className="text-xs text-[#5F6368] dark:text-slate-400 hidden sm:inline">
              Selected: <strong className="text-[#202124] dark:text-slate-100">{selectedDateStr}</strong>
            </span>
          </div>
        </div>

        {/* Monthly Calendar Timeline View */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-[#DADCE0] dark:border-slate-800 shadow-xs overflow-hidden">
          {/* Day Headers (Mon - Sun) */}
          <div className="grid grid-cols-7 border-b border-[#DADCE0] dark:border-slate-800 bg-[#F8F9FA] dark:bg-slate-800/80 text-center text-[10px] sm:text-[11px] font-bold text-[#5F6368] dark:text-slate-400 py-1.5 sm:py-2">
            <div>MON</div>
            <div>TUE</div>
            <div>WED</div>
            <div>THU</div>
            <div>FRI</div>
            <div>SAT</div>
            <div className="text-red-600 dark:text-red-400 bg-red-50/50 dark:bg-red-950/30">SUN</div>
          </div>

          {/* Day Matrix Grid */}
          <div className="grid grid-cols-7 divide-x divide-y divide-[#F1F3F4] dark:divide-slate-800">
            {monthMatrix.map((cell) => {
              const isSelected = cell.dateStr === selectedDateStr;
              const isToday = cell.dateStr === todayDateStr;
              const isGazetted = cell.holidayInfo.isHoliday && cell.holidayInfo.type === "Gazetted";
              const isRestricted = cell.holidayInfo.isHoliday && cell.holidayInfo.type === "Restricted";
              const isSunday = cell.holidayInfo.isSunday;

              return (
                <div
                  key={cell.dateStr}
                  onClick={() => setSelectedDateStr(cell.dateStr)}
                  className={`min-h-[80px] sm:min-h-[115px] p-1.5 sm:p-2.5 transition-all cursor-pointer flex flex-col justify-between relative group ${
                    !cell.isCurrentMonth
                      ? isSunday
                        ? "bg-red-50/20 dark:bg-red-950/10 text-red-300 dark:text-red-900/60"
                        : "bg-[#FAFAFA] dark:bg-slate-950/40 text-[#BDC1C6] dark:text-slate-600"
                      : isSelected
                      ? isSunday
                        ? "bg-rose-500/15 dark:bg-rose-950/40 ring-2 ring-inset ring-red-500 text-red-900 dark:text-red-200"
                        : "bg-blue-50/60 dark:bg-blue-950/40 ring-2 ring-inset ring-[#1A73E8]"
                      : isSunday
                      ? "bg-red-500/10 dark:bg-red-950/20 hover:bg-red-500/15 dark:hover:bg-red-950/30 border-red-500/20 dark:border-red-900/40"
                      : isGazetted
                      ? "bg-rose-50/30 dark:bg-rose-950/20 hover:bg-rose-50/60 dark:hover:bg-rose-950/30"
                      : "bg-white dark:bg-slate-900 hover:bg-[#F8F9FA] dark:hover:bg-slate-800/60"
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
                            : "bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-100"
                          : isSunday
                          ? cell.isCurrentMonth
                            ? "text-red-700 bg-red-100/70 dark:text-red-400 dark:bg-red-950/60"
                            : "text-red-400 dark:text-red-600"
                          : cell.isCurrentMonth
                          ? "text-[#202124] dark:text-slate-200"
                          : "text-[#BDC1C6] dark:text-slate-600"
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
                              className="block px-1.5 py-0.5 rounded text-[9px] font-semibold bg-rose-100 dark:bg-rose-950/70 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800 leading-tight truncate text-left"
                              title={cell.holidayInfo.name || "Gazetted Holiday"}
                            >
                              {cell.holidayInfo.name}
                            </span>
                          ) : isRestricted ? (
                            <span
                              className="block px-1 py-0.5 rounded text-[9px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 leading-tight truncate text-left"
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
                    <div className="hidden sm:block my-1 text-[9px] font-semibold text-red-700 dark:text-red-400 bg-red-100/80 dark:bg-red-950/60 px-1 py-0.5 rounded border border-red-200 dark:border-red-800 text-center tracking-tight">
                      Sunday Off
                    </div>
                  )}

                  {/* Cases Indicator Badge - Clean Minimalist Counter with hover details */}
                  <div className="flex items-center justify-center sm:justify-start mt-1">
                    {cell.cases.length > 0 && (
                      <span
                        title={cell.cases.map((c) => `${c.patientName} (${c.procedureTitle})`).join("\n")}
                        className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E8F0FE] dark:bg-blue-950/60 text-[#1A73E8] dark:text-blue-300 border border-[#D2E3FC] dark:border-blue-800 flex items-center gap-1 shadow-2xs"
                      >
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
      </div>
    </div>
  );
}
