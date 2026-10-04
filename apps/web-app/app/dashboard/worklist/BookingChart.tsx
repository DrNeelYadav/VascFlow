"use client";

import React, { useState, useMemo } from "react";
import {
  Clock,
  Activity,
  Layers,
  BarChart3,
  CheckCircle2,
  Calendar,
  Sparkles,
  Info,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import {
  PatientWorklistEntry,
  ModalityType,
  INITIAL_RIS_WORKLIST_CASES,
} from "./worklistData";

interface BookingChartProps {
  cases?: PatientWorklistEntry[];
  onSelectCase?: (caseId: string) => void;
}

const MODALITY_CONFIG: Record<
  ModalityType,
  {
    name: string;
    description: string;
    color: string;
    bgTint: string;
    borderTint: string;
    textDark: string;
  }
> = {
  XA: {
    name: "XA",
    description: "Fluoroscopy / Angiography",
    color: "#1A73E8", // Google Blue
    bgTint: "#E8F0FE",
    borderTint: "#1A73E8",
    textDark: "#174EA6",
  },
  CT: {
    name: "CT",
    description: "Computed Tomography Guided",
    color: "#EA4335", // Google Red
    bgTint: "#FCE8E6",
    borderTint: "#EA4335",
    textDark: "#C5221F",
  },
  US: {
    name: "US",
    description: "Ultrasound & Vascular Access",
    color: "#34A853", // Google Green
    bgTint: "#E6F4EA",
    borderTint: "#34A853",
    textDark: "#137333",
  },
  ROSE: {
    name: "ROSE",
    description: "Rapid On-Site Cytology Eval",
    color: "#FBBC04", // Google Yellow
    bgTint: "#FEF7E0",
    borderTint: "#FBBC04",
    textDark: "#B06000",
  },
};

// Timeline configuration (08:00 to 17:00, 9 hours)
const TIMELINE_START_HOUR = 8;
const TIMELINE_END_HOUR = 17;
const TOTAL_HOURS = TIMELINE_END_HOUR - TIMELINE_START_HOUR;
const HOUR_MARKS = Array.from({ length: TOTAL_HOURS + 1 }, (_, i) => TIMELINE_START_HOUR + i);

function formatHourLabel(hour: number): string {
  const pad = hour < 10 ? `0${hour}` : `${hour}`;
  return `${pad}:00`;
}

export function BookingChart({
  cases = INITIAL_RIS_WORKLIST_CASES,
  onSelectCase,
}: BookingChartProps) {
  const [hoveredCaseId, setHoveredCaseId] = useState<string | null>(null);

  // Group cases by room
  const azurionCases = useMemo(() => {
    return cases.filter(
      (c) =>
        (c.room && (c.room.includes("Azurion") || c.room.includes("Cath Lab"))) ||
        (!c.room && (c.caseId === "PT01" || c.caseId === "PT02" || c.caseId === "PT03" || c.caseId === "PT04" || c.caseId === "PT06"))
    );
  }, [cases]);

  const ctCases = useMemo(() => {
    return cases.filter(
      (c) =>
        (c.room && c.room.includes("CT")) ||
        (!c.room && c.caseId === "PT07")
    );
  }, [cases]);

  const departmentRoomCases = useMemo(() => {
    return cases.filter(
      (c) =>
        c.room &&
        !c.room.includes("Azurion") &&
        !c.room.includes("Cath Lab") &&
        !c.room.includes("CT")
    );
  }, [cases]);

  // Modality statistics calculation
  const modalityStats = useMemo(() => {
    const counts: Record<ModalityType, number> = {
      XA: 0,
      CT: 0,
      US: 0,
      ROSE: 0,
    };

    cases.forEach((c) => {
      const mod = c.modality || "XA";
      if (counts[mod] !== undefined) {
        counts[mod]++;
      } else {
        counts.XA++;
      }
    });

    const total = cases.length || 1;
    return (["XA", "CT", "US", "ROSE"] as ModalityType[]).map((key) => ({
      key,
      count: counts[key],
      percentage: Math.round((counts[key] / total) * 100),
      config: MODALITY_CONFIG[key],
    }));
  }, [cases]);

  // Active hovered case details
  const activeHoveredCase = useMemo(() => {
    if (!hoveredCaseId) return null;
    return cases.find((c) => c.caseId === hoveredCaseId) || null;
  }, [hoveredCaseId, cases]);

  // Calculate Cath Lab (Philips Azurion) & CT Suite utilization
  const azurionMinutes = useMemo(() => {
    return azurionCases.reduce((acc, c) => acc + (c.durationMinutes || 60), 0);
  }, [azurionCases]);

  const ctMinutes = useMemo(() => {
    return ctCases.reduce((acc, c) => acc + (c.durationMinutes || 45), 0);
  }, [ctCases]);

  const totalPossibleMinutes = TOTAL_HOURS * 60; // 540 mins
  const azurionUtilPct = Math.min(100, Math.round((azurionMinutes / totalPossibleMinutes) * 100));
  const ctUtilPct = Math.min(100, Math.round((ctMinutes / totalPossibleMinutes) * 100));

  // Render SVG Donut
  const donutSize = 130;
  const strokeWidth = 16;
  const radius = (donutSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  let cumulativeOffset = 0;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-blue-600">
            <BarChart3 className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-slate-900 tracking-tight">
              Cath-Lab Booking &amp; Capacity Overview
            </h2>
            <p className="text-xs text-slate-500">
              Operating slots 08:00 – 17:00 &bull; Dual-Suite schedule, utilization &amp; modality distribution
            </p>
          </div>
        </div>

        {/* Quick Capacity Pills */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            <span>Cath Lab (Philips Azurion): <strong className="font-semibold text-slate-900">{azurionUtilPct}%</strong> ({azurionCases.length} slots)</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">
            <span className="h-2 w-2 rounded-full bg-rose-600" />
            <span>CT Suite: <strong className="font-semibold text-slate-900">{ctUtilPct}%</strong> ({ctCases.length} slots)</span>
          </div>
          <div className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-slate-500">
            <Clock className="h-3 w-3 text-slate-500" />
            <span>15m Turnover Buffer</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Left Timeline (8 cols), Right Modality Distribution (4 cols) */}
      <div className="mt-4 grid grid-cols-1 xl:grid-cols-12 gap-5">
        {/* Left: Hourly Booking Timeline */}
        <div className="xl:col-span-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Hourly Room Allocation (08:00 – 17:00)
              </span>
              <span className="hidden sm:inline text-xs text-slate-500">
                Hover procedure blocks for operator &amp; case details
              </span>
            </div>

            {/* Mobile View: Room Allocation Cards (Zero Horizontal Scroll) */}
            <div className="block md:hidden space-y-3 pb-2">
              {/* Cath Lab Azurion */}
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-xs text-slate-900">Philips Azurion Cath Lab</span>
                  <span className="text-[10px] font-mono text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded">
                    {azurionUtilPct}% &bull; {azurionMinutes}m
                  </span>
                </div>
                <div className="space-y-1.5">
                  {azurionCases.map((entry) => (
                    <div
                      key={`mob-az-${entry.caseId}`}
                      onClick={() => onSelectCase?.(entry.caseId)}
                      className="flex items-center justify-between gap-2 p-2 rounded bg-white border border-slate-200 text-xs cursor-pointer active:bg-blue-50"
                    >
                      <div className="min-w-0">
                        <div className="font-semibold text-slate-900 truncate">{entry.procedureName}</div>
                        <div className="text-[10px] text-slate-500">{entry.patientName} &bull; CR: {entry.crNumber}</div>
                      </div>
                      <span className="shrink-0 font-mono text-[10px] font-semibold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">
                        {entry.plannedTime}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CT Suite */}
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-xs text-slate-900">CT Guided Suite</span>
                  <span className="text-[10px] font-mono text-rose-700 font-semibold bg-rose-50 px-2 py-0.5 rounded">
                    {ctUtilPct}% &bull; {ctMinutes}m
                  </span>
                </div>
                <div className="space-y-1.5">
                  {ctCases.map((entry) => (
                    <div
                      key={`mob-ct-${entry.caseId}`}
                      onClick={() => onSelectCase?.(entry.caseId)}
                      className="flex items-center justify-between gap-2 p-2 rounded bg-white border border-slate-200 text-xs cursor-pointer active:bg-red-50"
                    >
                      <div className="min-w-0">
                        <div className="font-semibold text-slate-900 truncate">{entry.procedureName}</div>
                        <div className="text-[10px] text-slate-500">{entry.patientName} &bull; CR: {entry.crNumber}</div>
                      </div>
                      <span className="shrink-0 font-mono text-[10px] font-semibold text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded">
                        {entry.plannedTime}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Department Procedure Suites */}
              {departmentRoomCases.length > 0 && (
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-xs text-slate-900">Procedure Suites</span>
                    <span className="text-[10px] font-mono text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                      {departmentRoomCases.length} cases
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {departmentRoomCases.map((entry) => (
                      <div
                        key={`mob-dept-${entry.caseId}`}
                        onClick={() => onSelectCase?.(entry.caseId)}
                        className="flex items-center justify-between gap-2 p-2 rounded bg-white border border-slate-200 text-xs cursor-pointer active:bg-green-50"
                      >
                        <div className="min-w-0">
                          <div className="font-semibold text-slate-900 truncate">{entry.procedureName}</div>
                          <div className="text-[10px] text-slate-500">{entry.patientName} &bull; {entry.room || "Room"}</div>
                        </div>
                        <span className="shrink-0 font-mono text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                          {entry.plannedTime}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Desktop Timeline (Hidden on Mobile) */}
            <div className="hidden md:block overflow-x-auto pb-2">
              <div className="min-w-[640px]">
                {/* Time Ruler */}
                <div className="grid grid-cols-1 sm:grid-cols-9 border-b border-slate-200 pb-1 text-xs font-mono text-slate-500">
                  {HOUR_MARKS.slice(0, 9).map((hr) => (
                    <div key={hr} className="text-left pl-1">
                      {formatHourLabel(hr)}
                    </div>
                  ))}
                </div>

                {/* Timeline Tracks */}
                <div className="space-y-3 pt-3">
                  {/* Cath Lab (Philips Azurion) Track */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-900">Cath Lab (Philips Azurion)</span>
                        <span className="rounded bg-blue-50 px-1.5 py-0.5 text-[10px] font-semibold text-blue-600">
                          Biplane Neuro / Vascular
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 font-mono">
                        {azurionMinutes} min ({azurionUtilPct}% capacity)
                      </span>
                    </div>

                    <div className="relative h-12 w-full rounded-lg border border-slate-200 bg-slate-50 p-1">
                      {/* Hourly vertical guide lines */}
                      <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-9 pointer-events-none">
                        {Array.from({ length: 9 }).map((_, idx) => (
                          <div
                            key={idx}
                            className={`h-full border-r border-slate-200 ${idx === 8 ? "border-r-0" : ""}`}
                          />
                        ))}
                      </div>

                      {/* Procedure Blocks */}
                      {azurionCases.map((entry) => {
                        const start = entry.startHour ?? 8.5;
                        const duration = (entry.durationMinutes ?? 60) / 60;
                        const leftPct = Math.max(0, ((start - TIMELINE_START_HOUR) / TOTAL_HOURS) * 100);
                        const widthPct = Math.min(100 - leftPct, (duration / TOTAL_HOURS) * 100);
                        const modConfig = MODALITY_CONFIG[entry.modality || "XA"];
                        const isHovered = hoveredCaseId === entry.caseId;

                        return (
                          <div
                            key={entry.caseId}
                            onMouseEnter={() => setHoveredCaseId(entry.caseId)}
                            onMouseLeave={() => setHoveredCaseId(null)}
                            onClick={() => onSelectCase?.(entry.caseId)}
                            className={`absolute top-1 bottom-1 z-10 flex flex-col justify-center rounded px-2 cursor-pointer transition-all border shadow-2xs ${
                              isHovered
                                ? "ring-2 ring-blue-600 shadow-md z-20 scale-[1.02]"
                                : ""
                            }`}
                            style={{
                              left: `${leftPct}%`,
                              width: `${Math.max(widthPct, 6)}%`,
                              backgroundColor: modConfig.bgTint,
                              borderColor: modConfig.borderTint,
                            }}
                          >
                            <div className="flex items-center justify-between gap-1 overflow-hidden">
                              <span
                                className="truncate text-[10px] font-bold tracking-tight"
                                style={{ color: modConfig.textDark }}
                              >
                                {entry.procedureName.split(" ")[0]} &bull; {entry.patientName.split(" ")[0]}
                              </span>
                              <span
                                className="shrink-0 text-[10px] font-mono font-semibold"
                                style={{ color: modConfig.textDark }}
                              >
                                {entry.plannedTime.split(" ")[0]}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* CT Suite Track */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-900">CT Suite</span>
                        <span className="rounded bg-rose-50 px-1.5 py-0.5 text-[10px] font-semibold text-rose-700">
                          CT Fluoroscopy &amp; Cross-Sectional Guidance
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 font-mono">
                        {ctMinutes} min ({ctUtilPct}% capacity)
                      </span>
                    </div>

                    <div className="relative h-12 w-full rounded-lg border border-slate-200 bg-slate-50 p-1">
                      {/* Hourly vertical guide lines */}
                      <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-9 pointer-events-none">
                        {Array.from({ length: 9 }).map((_, idx) => (
                          <div
                            key={idx}
                            className={`h-full border-r border-slate-200 ${idx === 8 ? "border-r-0" : ""}`}
                          />
                        ))}
                      </div>

                      {/* Procedure Blocks */}
                      {ctCases.map((entry) => {
                        const start = entry.startHour ?? 15.5;
                        const duration = (entry.durationMinutes ?? 45) / 60;
                        const leftPct = Math.max(0, ((start - TIMELINE_START_HOUR) / TOTAL_HOURS) * 100);
                        const widthPct = Math.min(100 - leftPct, (duration / TOTAL_HOURS) * 100);
                        const modConfig = MODALITY_CONFIG[entry.modality || "CT"];
                        const isHovered = hoveredCaseId === entry.caseId;

                        return (
                          <div
                            key={entry.caseId}
                            onMouseEnter={() => setHoveredCaseId(entry.caseId)}
                            onMouseLeave={() => setHoveredCaseId(null)}
                            onClick={() => onSelectCase?.(entry.caseId)}
                            className={`absolute top-1 bottom-1 z-10 flex flex-col justify-center rounded px-2 cursor-pointer transition-all border shadow-2xs ${
                              isHovered
                                ? "ring-2 ring-rose-600 shadow-md z-20 scale-[1.02]"
                                : ""
                            }`}
                            style={{
                              left: `${leftPct}%`,
                              width: `${Math.max(widthPct, 6)}%`,
                              backgroundColor: modConfig.bgTint,
                              borderColor: modConfig.borderTint,
                            }}
                          >
                            <div className="flex items-center justify-between gap-1 overflow-hidden">
                              <span
                                className="truncate text-[10px] font-bold tracking-tight"
                                style={{ color: modConfig.textDark }}
                              >
                                {entry.procedureName.split(" ")[0]} &bull; {entry.patientName.split(" ")[0]}
                              </span>
                              <span
                                className="shrink-0 text-[10px] font-mono font-semibold"
                                style={{ color: modConfig.textDark }}
                              >
                                {entry.plannedTime.split(" ")[0]}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Department Procedure Suites Track (PTBD Room, PCD Room, Biopsy Room, FNAC Room) */}
                  {departmentRoomCases.length > 0 && (
                    <div>
                      <div className="flex items-center justify-between mb-1.5 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-900">Department Procedure Suites</span>
                          <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
                            PTBD &bull; PCD &bull; Biopsy &bull; US Review &bull; MSK USG &bull; FNAC
                          </span>
                        </div>
                        <span className="text-xs text-slate-500 font-mono">
                          {departmentRoomCases.length} scheduled procedures
                        </span>
                      </div>

                      <div className="relative h-12 w-full rounded-lg border border-slate-200 bg-slate-50 p-1">
                        <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-9 pointer-events-none">
                          {Array.from({ length: 9 }).map((_, idx) => (
                            <div
                              key={idx}
                              className={`h-full border-r border-slate-200 ${idx === 8 ? "border-r-0" : ""}`}
                            />
                          ))}
                        </div>

                        {departmentRoomCases.map((entry) => {
                          const start = entry.startHour ?? 13.5;
                          const duration = (entry.durationMinutes ?? 45) / 60;
                          const leftPct = Math.max(0, ((start - TIMELINE_START_HOUR) / TOTAL_HOURS) * 100);
                          const widthPct = Math.min(100 - leftPct, (duration / TOTAL_HOURS) * 100);
                          const modConfig = MODALITY_CONFIG[entry.modality || "US"];
                          const isHovered = hoveredCaseId === entry.caseId;

                          return (
                            <div
                              key={entry.caseId}
                              onMouseEnter={() => setHoveredCaseId(entry.caseId)}
                              onMouseLeave={() => setHoveredCaseId(null)}
                              onClick={() => onSelectCase?.(entry.caseId)}
                              className={`absolute top-1 bottom-1 z-10 flex flex-col justify-center rounded px-2 cursor-pointer transition-all border shadow-2xs ${
                                isHovered
                                  ? "ring-2 ring-emerald-600 shadow-md z-20 scale-[1.02]"
                                  : ""
                              }`}
                              style={{
                                left: `${leftPct}%`,
                                width: `${Math.max(widthPct, 6)}%`,
                                backgroundColor: modConfig.bgTint,
                                borderColor: modConfig.borderTint,
                              }}
                            >
                              <div className="flex items-center justify-between gap-1 overflow-hidden">
                                <span
                                  className="truncate text-[10px] font-bold tracking-tight"
                                  style={{ color: modConfig.textDark }}
                                >
                                  {entry.room || "Room"} &bull; {entry.patientName.split(" ")[0]}
                                </span>
                                <span
                                  className="shrink-0 text-[10px] font-mono font-semibold"
                                  style={{ color: modConfig.textDark }}
                                >
                                  {entry.plannedTime.split(" ")[0]}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Inspection Card when hovering */}
          <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs transition-all min-h-[38px] flex items-center justify-between">
            {activeHoveredCase ? (
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
                <span className="font-semibold text-slate-900">
                  {activeHoveredCase.patientName}
                </span>
                <span className="text-slate-500 font-mono text-xs">
                  CR: {activeHoveredCase.crNumber}
                </span>
                <span className="text-slate-900 font-medium truncate max-w-[280px]">
                  {activeHoveredCase.procedureName}
                </span>
                <span className="text-slate-500 text-xs">
                  {activeHoveredCase.operatorResident}
                </span>
                <span className="rounded bg-white border border-slate-200 px-2 py-0.5 font-mono text-[10px] font-semibold text-slate-700">
                  {activeHoveredCase.plannedTime} ({activeHoveredCase.durationMinutes || 60}m)
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                <Info className="h-3.5 w-3.5 text-blue-600" />
                <span>Move cursor over any timeline slot to inspect patient, planned operator, room and duration.</span>
              </div>
            )}
          </div>
        </div>

        {/* Right: Procedure & Modality Distribution */}
        <div className="xl:col-span-4 flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-3.5">
          <div>
            <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Modality Distribution
              </span>
              <span className="text-xs font-medium text-blue-600">
                {cases.length} Bookings Total
              </span>
            </div>

            {/* Donut Chart & Legend layout */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-1">
              {/* SVG Donut Chart */}
              <div className="relative shrink-0 flex items-center justify-center">
                <svg
                  width={donutSize}
                  height={donutSize}
                  viewBox={`0 0 ${donutSize} ${donutSize}`}
                  className="-rotate-90"
                >
                  {/* Background Track */}
                  <circle
                    cx={donutSize / 2}
                    cy={donutSize / 2}
                    r={radius}
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth={strokeWidth}
                  />

                  {/* Slices */}
                  {modalityStats.map((item) => {
                    if (item.count === 0) return null;
                    const strokeDash = (item.percentage / 100) * circumference;
                    const currentOffset = cumulativeOffset;
                    cumulativeOffset += strokeDash;

                    return (
                      <circle
                        key={item.key}
                        cx={donutSize / 2}
                        cy={donutSize / 2}
                        r={radius}
                        fill="none"
                        stroke={item.config.color}
                        strokeWidth={strokeWidth}
                        strokeDasharray={`${strokeDash} ${circumference - strokeDash}`}
                        strokeDashoffset={-currentOffset}
                        strokeLinecap="round"
                        className="transition-all duration-300"
                      />
                    );
                  })}
                </svg>

                {/* Donut Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-lg font-bold text-slate-900 leading-tight">
                    {cases.length}
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                    Cases
                  </span>
                </div>
              </div>

              {/* Modality Key Metrics Overview */}
              <div className="text-xs text-slate-500 space-y-1">
                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-500">Peak Load:</span>
                  <div className="font-semibold text-slate-900">11:00 – 14:00</div>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-500">Active Rooms:</span>
                  <div className="font-semibold text-slate-900">Azurion, CT Suite, PTBD, Biopsy, FNAC</div>
                </div>
              </div>
            </div>

            {/* Modality Breakdown List with Google Material Colors */}
            <div className="mt-3 space-y-2">
              {modalityStats.map((item) => (
                <div
                  key={item.key}
                  className="rounded-lg border border-slate-200 bg-white p-2 text-xs shadow-2xs hover:border-slate-900 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span
                        className="h-2.5 w-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: item.config.color }}
                      />
                      <span className="font-bold text-slate-900">
                        {item.key}
                      </span>
                      <span className="text-xs text-slate-500 truncate max-w-[130px]">
                        {item.config.description}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-xs">
                      <span className="font-semibold text-slate-900">
                        {item.count}
                      </span>
                      <span className="text-slate-500">({item.percentage}%)</span>
                    </div>
                  </div>

                  {/* Horizontal Progress Bar */}
                  <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${item.percentage}%`,
                        backgroundColor: item.config.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Light subtle footer attribution */}
      <div className="text-center pt-4 pb-1 text-xs text-zinc-400 print:hidden select-none border-t border-slate-200 mt-4">
        Made by Dr. Neel Yadav
      </div>
    </div>
  );
}
