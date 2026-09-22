"use client";

import React from "react";

interface ClinicalTableSkeletonProps {
  rows?: number;
  columns?: number;
  variant?: "worklist" | "generic";
  headers?: string[];
}

export function ClinicalTableSkeleton({
  rows = 5,
  variant = "worklist",
  headers,
}: ClinicalTableSkeletonProps) {
  const rowArray = Array.from({ length: rows });

  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-200/80 bg-white shadow-xs">
      <table className="w-full text-left text-xs text-zinc-700 animate-pulse">
        {headers && headers.length > 0 && (
          <thead className="bg-zinc-50/80 text-[11px] font-semibold uppercase tracking-wider text-zinc-400 border-b border-zinc-200/80">
            <tr>
              {headers.map((h, idx) => (
                <th key={idx} className="px-4 py-3">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody className="divide-y divide-zinc-100">
          {variant === "worklist" ? (
            rowArray.map((_, i) => (
              <tr key={i} className="h-16">
                {/* Schedule */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-zinc-200/70 shrink-0" />
                    <div className="h-3.5 w-14 bg-zinc-200/70 rounded" />
                  </div>
                  <div className="h-2.5 w-16 bg-zinc-100 rounded mt-1.5" />
                </td>

                {/* Patient / CR */}
                <td className="px-4 py-3">
                  <div className="h-4 w-28 bg-zinc-200/80 rounded" />
                  <div className="h-2.5 w-20 bg-zinc-100 rounded mt-1.5" />
                </td>

                {/* Procedure */}
                <td className="px-4 py-3">
                  <div className="h-3.5 w-44 bg-zinc-200/70 rounded" />
                </td>

                {/* Clinical Team */}
                <td className="px-4 py-3">
                  <div className="h-3 w-24 bg-zinc-200/60 rounded" />
                  <div className="h-2.5 w-20 bg-zinc-100 rounded mt-1.5" />
                </td>

                {/* Safety Flags */}
                <td className="px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-5 w-20 bg-zinc-200/60 rounded-md" />
                    <div className="h-5 w-16 bg-zinc-100 rounded-md" />
                  </div>
                </td>

                {/* Status Badge */}
                <td className="px-4 py-3">
                  <div className="h-6 w-24 bg-zinc-200/70 rounded-md" />
                </td>

                {/* Actions */}
                <td className="px-4 py-3 text-right">
                  <div className="flex justify-end gap-1.5">
                    <div className="h-7 w-20 bg-zinc-200/80 rounded-lg" />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            rowArray.map((_, i) => (
              <tr key={i} className="h-14">
                <td className="px-4 py-3">
                  <div className="h-3.5 w-24 bg-zinc-200/70 rounded" />
                </td>
                <td className="px-4 py-3">
                  <div className="h-3.5 w-36 bg-zinc-200/70 rounded" />
                </td>
                <td className="px-4 py-3">
                  <div className="h-3.5 w-28 bg-zinc-200/70 rounded" />
                </td>
                <td className="px-4 py-3">
                  <div className="h-3.5 w-20 bg-zinc-200/70 rounded" />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
