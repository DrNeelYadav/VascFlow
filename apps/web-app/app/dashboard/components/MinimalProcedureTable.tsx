"use client";

import React, { useState, useEffect } from "react";

export interface CaseRow {
  id: string;
  uhid: string;
  patient: string;
  procedure: string;
  room: string;
  status: "Emergency" | "In-Progress" | "Scheduled" | "Completed";
  time: string;
}

const statusStyles: Record<CaseRow["status"], string> = {
  Emergency: "text-rose-700 bg-rose-50 border-rose-200 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-900",
  "In-Progress": "text-amber-700 bg-amber-50 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-900",
  Scheduled: "text-slate-600 bg-slate-50 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
  Completed: "text-emerald-700 bg-emerald-50 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-900",
};

interface MinimalProcedureTableProps {
  cases: CaseRow[];
  onOpenCase?: (id: string) => void;
}

export function MinimalProcedureTable({ cases, onOpenCase }: MinimalProcedureTableProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  // Vim-style worklist traversal (j, k, Enter)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable)
      ) {
        return;
      }

      if (e.key === "j" || e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, Math.max(0, cases.length - 1)));
      } else if (e.key === "k" || e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter") {
        if (cases[selectedIndex]) {
          e.preventDefault();
          onOpenCase?.(cases[selectedIndex].id);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [cases, selectedIndex, onOpenCase]);

  return (
    <div className="overflow-x-auto border border-slate-200 rounded-lg bg-white dark:border-slate-800 dark:bg-slate-950">
      <table className="w-full border-collapse text-left text-xs">
        <thead>
          <tr className="h-9 border-b border-slate-200 bg-slate-50/75 text-slate-500 dark:border-slate-800 dark:bg-slate-900/50">
            <th className="py-1.5 pl-4 pr-2 font-medium">Time</th>
            <th className="px-2.5 py-1.5 font-medium font-mono">UHID</th>
            <th className="px-2.5 py-1.5 font-medium">Patient</th>
            <th className="px-2.5 py-1.5 font-medium">Procedure</th>
            <th className="px-2.5 py-1.5 font-medium">Cath Lab</th>
            <th className="px-2.5 py-1.5 text-center font-medium">Status</th>
            <th className="py-1.5 pl-2 pr-4 text-right font-medium">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
          {cases.length === 0 ? (
            <tr>
              <td colSpan={7} className="py-8 text-center text-xs text-slate-400 font-mono">
                No records found
              </td>
            </tr>
          ) : (
            cases.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <tr
                  key={item.id}
                  onClick={() => {
                    setSelectedIndex(idx);
                    onOpenCase?.(item.id);
                  }}
                  className={`h-9 transition-colors cursor-pointer ${
                    isSelected
                      ? "border-l-2 border-slate-900 dark:border-slate-100 bg-slate-50 dark:bg-slate-900/60"
                      : "border-l-2 border-transparent hover:bg-slate-50/80 dark:hover:bg-slate-900/40"
                  }`}
                >
                  <td className="py-1.5 pl-4 pr-2 font-mono text-slate-600 dark:text-slate-400 whitespace-nowrap">
                    {item.time}
                  </td>
                  <td className="px-2.5 py-1.5 font-mono text-slate-600 dark:text-slate-400 whitespace-nowrap">
                    {item.uhid}
                  </td>
                  <td
                    className="px-2.5 py-1.5 font-medium text-slate-900 dark:text-slate-100 truncate max-w-[140px]"
                    title={item.patient}
                  >
                    {item.patient}
                  </td>
                  <td
                    className="px-2.5 py-1.5 text-slate-700 dark:text-slate-300 truncate max-w-[180px]"
                    title={item.procedure}
                  >
                    {item.procedure}
                  </td>
                  <td
                    className="px-2.5 py-1.5 text-slate-600 dark:text-slate-400 truncate max-w-[90px]"
                    title={item.room}
                  >
                    {item.room}
                  </td>
                  <td className="px-2.5 py-1.5 text-center whitespace-nowrap">
                    <span
                      className={`inline-block rounded border px-2 py-0.5 text-xs font-medium ${statusStyles[item.status]}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-1.5 pl-2 pr-4 text-right whitespace-nowrap">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenCase?.(item.id);
                      }}
                      className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 font-medium cursor-pointer"
                    >
                      Open
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
