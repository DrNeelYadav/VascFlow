"use client";

import React from "react";
import { useOtCalendar } from "./useOtCalendar";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarMonthGrid } from "./CalendarMonthGrid";
import { CalendarDayAgenda } from "./CalendarDayAgenda";

export default function OtScheduleCalendarPage() {
  const cal = useOtCalendar();

  return (
    <div className="space-y-6 pb-16">
      <CalendarHeader />
      <CalendarMonthGrid cal={cal} />
      <CalendarDayAgenda cal={cal} />
    </div>
  );
}
