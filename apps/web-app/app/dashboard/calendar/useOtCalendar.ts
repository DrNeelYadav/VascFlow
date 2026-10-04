"use client";

import { useState, useMemo, useEffect } from "react";
import { useEndoflowStore, BookedCaseRecord } from "../useEndoflowStore";
import { getHolidayForDate } from "../../lib/rajasthanHolidays2026";
import { getHistoricalCasesMap } from "./calendarHistoricalCases";

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

export function useOtCalendar() {
  const { bookedCases } = useEndoflowStore();
  const [todayDateStr, setTodayDateStr] = useState<string>(() => getTodayIsoString());

  useEffect(() => {
    const updateToday = () => {
      const current = getTodayIsoString();
      setTodayDateStr((prev) => (prev !== current ? current : prev));
    };
    const timer = setInterval(updateToday, 60000);
    return () => clearInterval(timer);
  }, []);

  const [currentDate, setCurrentDate] = useState<Date>(() => new Date());
  const [selectedDateStr, setSelectedDateStr] = useState<string>(() => getTodayIsoString());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

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

  const historicalCasesMap = useMemo(() => getHistoricalCasesMap(), []);

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

  const monthMatrix = useMemo(() => {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    let startDay = firstDayOfMonth.getDay() - 1;
    if (startDay === -1) startDay = 6;

    const daysInMonth = lastDayOfMonth.getDate();
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

  const selectedDayCases = useMemo(() => {
    return allCalendarCases.filter((bc) => bc.scheduledDate === selectedDateStr);
  }, [allCalendarCases, selectedDateStr]);

  const selectedDayHoliday = useMemo(() => getHolidayForDate(selectedDateStr), [selectedDateStr]);

  const selectedDateFormatted = useMemo(() => {
    const parts = selectedDateStr.split("-");
    if (parts.length === 3) {
      const d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
      return d.toLocaleDateString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
    return selectedDateStr;
  }, [selectedDateStr]);

  return {
    year,
    month,
    monthNames,
    todayDateStr,
    selectedDateStr,
    setSelectedDateStr,
    todayFormattedShort,
    handlePrevMonth,
    handleNextMonth,
    handleToday,
    monthMatrix,
    selectedDayCases,
    selectedDayHoliday,
    selectedDateFormatted,
  };
}
