"use client";

import React from "react";
import { PreBookingRecord } from "./preBookingTypes";
import { QuickPostponeDropdown } from "../calendar/QuickPostponeDropdown";

interface BookedProceduresQueueProps {
  records: PreBookingRecord[];
  filterQuery: string;
  setFilterQuery: (q: string) => void;
  onSelectPrint: (record: PreBookingRecord) => void;
  onUpdateDate?: (recordId: string, newDate: string) => void;
}

export const BookedProceduresQueue: React.FC<BookedProceduresQueueProps> = ({
  records,
  filterQuery,
  setFilterQuery,
  onSelectPrint,
  onUpdateDate,
}) => {
  const filtered = records.filter((r) => {
    const q = filterQuery.toLowerCase();
    return (
      r.patientName.toLowerCase().includes(q) ||
      r.crUhid.toLowerCase().includes(q) ||
      r.procedureName.toLowerCase().includes(q) ||
      r.scheduledDate.includes(q) ||
      r.scheme.toLowerCase().includes(q)
    );
  });

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl p-4 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3 mb-4">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
            Angiosuite Scheduled & Booked OPD Procedures Queue
          </h3>
          <p className="text-[11px] text-slate-500">
            Real-time schedule synced with Angiosuite Operating Calendar ({records.length} booked cases)
          </p>
        </div>

        <div className="w-full sm:w-72">
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Search by Patient, CR No, Date, Scheme..."
            className="w-full text-xs px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
        </div>
      </div>

      <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800 text-[10.5px] uppercase">
              <th className="py-2.5 px-3">Date</th>
              <th className="py-2.5 px-3">Patient & Demographics</th>
              <th className="py-2.5 px-3">CR / UHID</th>
              <th className="py-2.5 px-3">Procedure Planned</th>
              <th className="py-2.5 px-3">Scheme & ICD Code</th>
              <th className="py-2.5 px-3">Safety & Status</th>
              <th className="py-2.5 px-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-6 text-center text-slate-400">
                  No matching booked cases found in the queue.
                </td>
              </tr>
            ) : (
              filtered.map((rec) => (
                <tr key={rec.id} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40">
                  <td className="py-2.5 px-3 font-mono font-bold text-slate-900 dark:text-slate-100 whitespace-nowrap">
                    {rec.scheduledDate}
                  </td>
                  <td className="py-2.5 px-3">
                    <div className="font-bold text-slate-900 dark:text-slate-100">{rec.patientName}</div>
                    <div className="text-[10.5px] text-slate-500">
                      {rec.age}y / {rec.sex} &bull; {rec.location}
                    </div>
                  </td>
                  <td className="py-2.5 px-3 font-mono text-[11px] text-slate-600 dark:text-slate-400">
                    {rec.crUhid}
                  </td>
                  <td className="py-2.5 px-3">
                    <div className="font-medium text-slate-800 dark:text-slate-200">{rec.procedureName}</div>
                    <div className="text-[10px] text-slate-500">
                      {rec.admissionType} &bull; {rec.anesthesiaPlan}
                    </div>
                  </td>
                  <td className="py-2.5 px-3">
                    <span className="inline-block text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 font-mono">
                      {rec.scheme}
                    </span>
                    <div className="text-[10px] text-slate-500 font-mono mt-0.5">{rec.icdCode}</div>
                  </td>
                  <td className="py-2.5 px-3">
                    <span
                      className={`inline-block text-[10.5px] font-bold px-2 py-0.5 rounded-full ${
                        rec.status === "Confirmed"
                          ? "bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300"
                          : "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300"
                      }`}
                    >
                      {rec.status}
                    </span>
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      INR {rec.safetyChecklist.inr} &bull; Plt {rec.safetyChecklist.plateletCount.split(" ")[0]}
                    </div>
                  </td>
                  <td className="py-2.5 px-3 text-right whitespace-nowrap space-x-2">
                    <QuickPostponeDropdown
                      currentDateStr={rec.scheduledDate}
                      onUpdateDate={(newDate) => onUpdateDate?.(rec.id, newDate)}
                    />
                    <button
                      type="button"
                      onClick={() => onSelectPrint(rec)}
                      className="text-xs bg-slate-800 hover:bg-slate-900 text-white font-medium px-2.5 py-1 rounded transition-all shadow-sm"
                    >
                      Print Slip
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
