"use client";

import React from "react";
import { SclerotherapySession } from "./preBookingTypes";

interface SclerotherapySessionTableProps {
  sessions: SclerotherapySession[];
  onAddSession: () => void;
  onRemoveSession: (id: string) => void;
  onUpdateSession: (id: string, field: keyof SclerotherapySession, val: string) => void;
}

export const SclerotherapySessionTable: React.FC<SclerotherapySessionTableProps> = ({
  sessions,
  onAddSession,
  onRemoveSession,
  onUpdateSession,
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl p-4 shadow-sm mb-5">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2 mb-3">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
            Longitudinal Sclerotherapy Treatment Sessions & Follow-Up Ledger
          </h4>
          <span className="text-[10px] text-slate-500">
            Direct reproduction of AIIMS Delhi Sclerotherapy Tracking Table (Bleomycin / Polidocanol Foam)
          </span>
        </div>
        <button
          type="button"
          onClick={onAddSession}
          className="text-xs bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-3 py-1.5 rounded-lg transition-all shadow-sm flex items-center gap-1.5"
        >
          <span>+ Add Session</span>
        </button>
      </div>

      <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800 text-[10.5px] uppercase">
              <th className="py-2 px-2.5 w-12 text-center">#</th>
              <th className="py-2 px-2.5 w-28">Date</th>
              <th className="py-2 px-2.5 w-48">Sclerosant Injected</th>
              <th className="py-2 px-2.5 w-32">Dose</th>
              <th className="py-2 px-2.5 w-32">Compression</th>
              <th className="py-2 px-2.5">Follow-Up (Size, Morphology, Complications, Advice)</th>
              <th className="py-2 px-2 w-10 text-center">Act</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {sessions.map((sess) => (
              <tr key={sess.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40">
                <td className="py-2 px-2 text-center font-bold text-indigo-600 dark:text-indigo-400">
                  {sess.sessionNumber}
                </td>
                <td className="py-2 px-2">
                  <input
                    type="date"
                    value={sess.date}
                    onChange={(e) => onUpdateSession(sess.id, "date", e.target.value)}
                    className="w-full text-[11px] px-1.5 py-1 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono"
                  />
                </td>
                <td className="py-2 px-2">
                  <input
                    type="text"
                    value={sess.sclerosant}
                    onChange={(e) => onUpdateSession(sess.id, "sclerosant", e.target.value)}
                    placeholder="Bleomycin or Polidocanol foam"
                    className="w-full text-[11px] px-2 py-1 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                  />
                </td>
                <td className="py-2 px-2">
                  <input
                    type="text"
                    value={sess.dose}
                    onChange={(e) => onUpdateSession(sess.id, "dose", e.target.value)}
                    placeholder="5 IU or 6+2cc"
                    className="w-full text-[11px] px-2 py-1 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono"
                  />
                </td>
                <td className="py-2 px-2">
                  <input
                    type="text"
                    value={sess.compressionApplied}
                    onChange={(e) => onUpdateSession(sess.id, "compressionApplied", e.target.value)}
                    placeholder="(+) R. IJV"
                    className="w-full text-[11px] px-2 py-1 rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono"
                  />
                </td>
                <td className="py-2 px-2">
                  <div className="space-y-1">
                    <input
                      type="text"
                      value={sess.followUpSize}
                      onChange={(e) => onUpdateSession(sess.id, "followUpSize", e.target.value)}
                      placeholder="Size: Regression % or mm"
                      className="w-full text-[10.5px] px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                    />
                    <input
                      type="text"
                      value={sess.advice}
                      onChange={(e) => onUpdateSession(sess.id, "advice", e.target.value)}
                      placeholder="Advice: Recall interval & next plan"
                      className="w-full text-[10.5px] px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    />
                  </div>
                </td>
                <td className="py-2 px-2 text-center">
                  <button
                    type="button"
                    onClick={() => onRemoveSession(sess.id)}
                    className="text-slate-400 hover:text-red-500 font-bold text-sm px-1"
                    title="Remove session"
                  >
                    &times;
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
