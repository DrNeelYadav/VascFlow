"use client";

import React, { useState, useRef, useEffect } from "react";
import { Calendar, ChevronDown, Clock, FastForward, Rewind } from "lucide-react";
import { getHolidayForDate } from "../../lib/rajasthanHolidays2026";

interface QuickPostponeDropdownProps {
  currentDateStr: string; // YYYY-MM-DD
  onUpdateDate: (newDateStr: string) => void;
  className?: string;
}

function parseDate(dateStr: string): Date {
  const parts = dateStr.split("-");
  if (parts.length === 3) {
    return new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
  }
  return new Date();
}

function formatDate(d: Date): string {
  const padYear = d.getFullYear();
  const padMonth = String(d.getMonth() + 1).padStart(2, "0");
  const padDay = String(d.getDate()).padStart(2, "0");
  return `${padYear}-${padMonth}-${padDay}`;
}

/** Advances date skipping Sundays and Rajasthan Gazetted Holidays */
function addDaysSkippingClosedDays(baseDate: Date, daysToAdd: number): string {
  const target = new Date(baseDate);
  target.setDate(target.getDate() + daysToAdd);

  // If Sunday or Holiday, advance to next working day
  let holiday = getHolidayForDate(formatDate(target));
  while (holiday.isSunday || holiday.isHoliday) {
    target.setDate(target.getDate() + 1);
    holiday = getHolidayForDate(formatDate(target));
  }

  return formatDate(target);
}

export const QuickPostponeDropdown: React.FC<QuickPostponeDropdownProps> = ({
  currentDateStr,
  onUpdateDate,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCustomDate, setShowCustomDate] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setShowCustomDate(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleShift = (days: number) => {
    const base = parseDate(currentDateStr);
    const newDate = addDaysSkippingClosedDays(base, days);
    onUpdateDate(newDate);
    setIsOpen(false);
    setShowCustomDate(false);
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      onUpdateDate(e.target.value);
      setIsOpen(false);
      setShowCustomDate(false);
    }
  };

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-2xs transition-colors"
      >
        <Clock className="w-3.5 h-3.5 text-amber-500" />
        <span>Reschedule</span>
        <ChevronDown className="w-3 h-3 text-slate-400" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-52 rounded-xl bg-white dark:bg-slate-900 shadow-lg border border-slate-200 dark:border-slate-800 z-50 py-1.5 text-xs text-slate-700 dark:text-slate-200">
          <div className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800">
            Quick Shift (Skips Holidays)
          </div>

          <button
            type="button"
            onClick={() => handleShift(1)}
            className="w-full text-left px-3 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between"
          >
            <span className="flex items-center gap-1.5">
              <FastForward className="w-3.5 h-3.5 text-blue-500" />
              <span>Postpone +24h (+1 Day)</span>
            </span>
          </button>

          <button
            type="button"
            onClick={() => handleShift(2)}
            className="w-full text-left px-3 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between"
          >
            <span className="flex items-center gap-1.5">
              <FastForward className="w-3.5 h-3.5 text-indigo-500" />
              <span>Postpone +48h (+2 Days)</span>
            </span>
          </button>

          <button
            type="button"
            onClick={() => handleShift(7)}
            className="w-full text-left px-3 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between"
          >
            <span className="flex items-center gap-1.5">
              <FastForward className="w-3.5 h-3.5 text-purple-500" />
              <span>Postpone +1 Week</span>
            </span>
          </button>

          <button
            type="button"
            onClick={() => handleShift(-1)}
            className="w-full text-left px-3 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between border-t border-slate-100 dark:border-slate-800"
          >
            <span className="flex items-center gap-1.5">
              <Rewind className="w-3.5 h-3.5 text-emerald-500" />
              <span>Prepone -24h (Earlier)</span>
            </span>
          </button>

          <div className="p-2 border-t border-slate-100 dark:border-slate-800">
            {!showCustomDate ? (
              <button
                type="button"
                onClick={() => setShowCustomDate(true)}
                className="w-full text-left text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 flex items-center gap-1.5 text-[11px]"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Pick Custom Date...</span>
              </button>
            ) : (
              <input
                type="date"
                defaultValue={currentDateStr}
                onChange={handleCustomChange}
                className="w-full text-xs px-2 py-1 rounded border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
