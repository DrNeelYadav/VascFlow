"use client";

import React, { useMemo } from "react";
import { CalendarCheck, ShieldCheck } from "lucide-react";
import { getHolidayForDate } from "../../lib/rajasthanHolidays2026";

interface SurveillanceFollowUpTableProps {
  dischargeDateStr?: string; // YYYY-MM-DD
  patientName?: string;
  crUhid?: string;
  procedureName?: string;
}

function parseYmd(str: string): Date {
  const parts = str.split("-");
  if (parts.length === 3) {
    return new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
  }
  return new Date();
}

function formatYmd(d: Date): string {
  const padY = d.getFullYear();
  const padM = String(d.getMonth() + 1).padStart(2, "0");
  const padD = String(d.getDate()).padStart(2, "0");
  return `${padY}-${padM}-${padD}`;
}

/** Computes target follow-up date, automatically skipping Sundays and Gazetted Holidays */
function getValidClinicDate(base: Date, days: number): { dateStr: string; note: string } {
  const target = new Date(base);
  target.setDate(target.getDate() + days);

  let skippedCount = 0;
  let hol = getHolidayForDate(formatYmd(target));
  while (hol.isSunday || hol.isHoliday) {
    target.setDate(target.getDate() + 1);
    skippedCount++;
    hol = getHolidayForDate(formatYmd(target));
  }

  const note = skippedCount > 0 ? `(Shifted +${skippedCount}d to avoid Sunday/Holiday)` : "(Standard Working Day)";
  return { dateStr: formatYmd(target), note };
}

export const SurveillanceFollowUpTable: React.FC<SurveillanceFollowUpTableProps> = ({
  dischargeDateStr = new Date().toISOString().split("T")[0],
  patientName = "—",
  crUhid = "—",
  procedureName = "—",
}) => {
  const baseDate = useMemo(() => parseYmd(dischargeDateStr), [dischargeDateStr]);

  const followUps = useMemo(() => {
    return [
      {
        interval: "1 Week Post-Op",
        purpose: "Puncture Site & Clinical Wound Inspection",
        dept: "IR Day Care / OPD Room 12",
        calc: getValidClinicDate(baseDate, 7),
      },
      {
        interval: "4 Weeks (1 Month)",
        purpose: "Sclerotherapy / Embolization Response Evaluation",
        dept: "OPD Consultation & Repeat Dating",
        calc: getValidClinicDate(baseDate, 28),
      },
      {
        interval: "3 Months",
        purpose: "Color Doppler Patency & Long-term Imaging Surveillance",
        dept: "Department of Radiodiagnosis / USG Suite",
        calc: getValidClinicDate(baseDate, 90),
      },
    ];
  }, [baseDate]);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl p-4 shadow-sm mb-5">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2 mb-3">
        <div className="flex items-center gap-2">
          <CalendarCheck className="w-4 h-4 text-teal-600" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
            Outpatient Surveillance &amp; Doppler Recall Schedule (Dedicated Follow-Up Sheet)
          </h4>
        </div>
        <span className="text-[10.5px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Sundays &amp; Rajasthan Gazetted Holidays Filtered</span>
        </span>
      </div>

      <p className="text-[11px] text-slate-500 mb-3">
        Scheduled dates for <strong>{patientName}</strong> ({crUhid}) post <strong>{procedureName}</strong>. Maintained in the outpatient surveillance registry without crowding the angiosuite operative calendar.
      </p>

      <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800 text-[10.5px] uppercase">
              <th className="py-2 px-3">Recall Interval</th>
              <th className="py-2 px-3">Verified Clinic Date</th>
              <th className="py-2 px-3">Surveillance Objective</th>
              <th className="py-2 px-3">Venue / Desk</th>
              <th className="py-2 px-3 text-right">Calendar Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {followUps.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40">
                <td className="py-2 px-3 font-bold text-slate-800 dark:text-slate-200">
                  {item.interval}
                </td>
                <td className="py-2 px-3">
                  <div className="font-mono font-bold text-teal-700 dark:text-teal-400">
                    {item.calc.dateStr}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    {item.calc.note}
                  </div>
                </td>
                <td className="py-2 px-3 text-slate-700 dark:text-slate-300">
                  {item.purpose}
                </td>
                <td className="py-2 px-3 text-slate-600 dark:text-slate-400 text-[11px]">
                  {item.dept}
                </td>
                <td className="py-2 px-3 text-right">
                  <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    Open OPD Slot
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
