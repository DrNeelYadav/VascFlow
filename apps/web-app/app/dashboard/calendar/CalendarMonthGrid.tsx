"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { useOtCalendar } from "./useOtCalendar";

interface CalendarMonthGridProps {
  cal: ReturnType<typeof useOtCalendar>;
}

export function CalendarMonthGrid({ cal }: CalendarMonthGridProps) {
  return (
    <div className="w-full space-y-4">
      <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-300 dark:border-slate-700 shadow-2xs flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={cal.handlePrevMonth}
            className="p-1.5 rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors shadow-2xs active:scale-95 cursor-pointer"
            title="Previous Month"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={cal.handleNextMonth}
            className="p-1.5 rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors shadow-2xs active:scale-95 cursor-pointer"
            title="Next Month"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 ml-1">
            {cal.monthNames[cal.month]} {cal.year}
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={cal.handleToday}
            className="px-2.5 py-1 rounded-lg border border-blue-300 dark:border-blue-700 bg-blue-50/60 dark:bg-blue-950/40 text-xs font-semibold text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 shadow-2xs transition-colors active:scale-95 cursor-pointer"
          >
            Today ({cal.todayFormattedShort})
          </button>
          <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
            Selected: <strong className="text-slate-900 dark:text-slate-100">{cal.selectedDateStr}</strong>
          </span>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-x-auto" style={{ WebkitOverflowScrolling: "touch" }}>
        <div className="min-w-[640px]">
          <div className="grid grid-cols-7 sm:grid-cols-7 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 text-center text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 py-1.5 sm:py-2">
            <div>MON</div>
            <div>TUE</div>
            <div>WED</div>
            <div>THU</div>
            <div>FRI</div>
            <div>SAT</div>
            <div className="text-red-600 dark:text-red-400 bg-red-50/50 dark:bg-red-950/30">SUN</div>
          </div>

          <div className="grid grid-cols-7 sm:grid-cols-7 divide-x divide-y divide-slate-100 dark:divide-slate-800">
            {cal.monthMatrix.map((cell) => {
              const isSelected = cell.dateStr === cal.selectedDateStr;
              const isToday = cell.dateStr === cal.todayDateStr;
              const isGazetted = cell.holidayInfo.isHoliday && cell.holidayInfo.type === "Gazetted";
              const isRestricted = cell.holidayInfo.isHoliday && cell.holidayInfo.type === "Restricted";
              const isSunday = cell.holidayInfo.isSunday;

              return (
                <div
                  key={cell.dateStr}
                  onClick={() => cal.setSelectedDateStr(cell.dateStr)}
                  className={`min-h-20 sm:min-h-[115px] p-1.5 sm:p-2.5 transition-all cursor-pointer flex flex-col justify-between relative group ${
                    !cell.isCurrentMonth
                      ? isSunday
                        ? "bg-red-50/20 dark:bg-red-950/10 text-red-300 dark:text-red-900/60"
                        : "bg-slate-50 dark:bg-slate-950/40 text-slate-300 dark:text-slate-600"
                      : isSelected
                      ? isSunday
                        ? "bg-rose-500/15 dark:bg-rose-950/40 ring-2 ring-inset ring-red-500 text-red-900 dark:text-red-200"
                        : "bg-blue-50/60 dark:bg-blue-950/40 ring-2 ring-inset ring-blue-600"
                      : isSunday
                      ? "bg-red-500/10 dark:bg-red-950/20 hover:bg-red-500/15 dark:hover:bg-red-950/30 border-red-500/20 dark:border-red-900/40"
                      : isGazetted
                      ? "bg-rose-50/30 dark:bg-rose-950/20 hover:bg-rose-50/60 dark:hover:bg-rose-950/30"
                      : "bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                  }`}
                >
                  <div className="flex items-start justify-between gap-1">
                    <span
                      className={`text-xs font-bold w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full shrink-0 ${
                        isToday
                          ? "bg-blue-600 text-white"
                          : isSelected
                          ? isSunday
                            ? "bg-red-600 text-white"
                            : "bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-100"
                          : isSunday
                          ? cell.isCurrentMonth
                            ? "text-red-700 bg-red-100/70 dark:text-red-400 dark:bg-red-950/60"
                            : "text-red-400 dark:text-red-600"
                          : cell.isCurrentMonth
                          ? "text-slate-900 dark:text-slate-200"
                          : "text-slate-300 dark:text-slate-600"
                      }`}
                    >
                      {cell.dayNumber}
                    </span>

                    {cell.holidayInfo.isHoliday && (
                      <div className="text-right min-w-0 flex-1">
                        <span
                          className={`sm:hidden inline-block w-1.5 h-1.5 rounded-full ${
                            isGazetted ? "bg-rose-500" : "bg-amber-500"
                          }`}
                          title={cell.holidayInfo.name || "Holiday"}
                        />
                        <div className="hidden sm:block">
                          {isGazetted ? (
                            <span
                              className="block px-1.5 py-0.5 rounded text-[10px] font-semibold bg-rose-100 dark:bg-rose-950/70 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800 leading-tight truncate text-left"
                              title={cell.holidayInfo.name || "Gazetted Holiday"}
                            >
                              {cell.holidayInfo.name}
                            </span>
                          ) : isRestricted ? (
                            <span
                              className="block px-1 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 leading-tight truncate text-left"
                              title={cell.holidayInfo.name || "Restricted Holiday"}
                            >
                              {cell.holidayInfo.name}
                            </span>
                          ) : null}
                        </div>
                      </div>
                    )}
                  </div>

                  {isSunday && (
                    <div className="hidden sm:block my-1 text-[10px] font-semibold text-red-700 dark:text-red-400 bg-red-100/80 dark:bg-red-950/60 px-1 py-0.5 rounded border border-red-200 dark:border-red-800 text-center tracking-tight">
                      Sunday Off
                    </div>
                  )}

                  <div className="flex items-center justify-center sm:justify-start mt-1">
                    {cell.cases.length > 0 && (
                      <span
                        title={cell.cases.map((c) => `${c.patientName} (${c.procedureTitle})`).join("\n")}
                        className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800 flex items-center gap-1 shadow-2xs"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
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
