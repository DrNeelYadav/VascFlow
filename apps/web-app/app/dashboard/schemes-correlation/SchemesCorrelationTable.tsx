"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import {
  ProcedureCorrelationItem,
  ApprovedImplantItem,
  YojanaSchemeKey,
} from "../../lib/schemesCorrelationData";
import { copyToClipboard } from "../../lib/ihmsBridge";
import { CLEAN_PROCEDURE_NAMES } from "./schemesCorrelationConstants";

interface SchemesCorrelationTableProps {
  procedures: ProcedureCorrelationItem[];
  selectedYojana: YojanaSchemeKey;
  searchQuery: string;
}

export function SchemesCorrelationTable({
  procedures,
  selectedYojana,
  searchQuery,
}: SchemesCorrelationTableProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = async (text: string, key: string) => {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 1800);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden">
      <div className="overflow-x-auto" style={{ WebkitOverflowScrolling: "touch" }}>
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-100/75 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider select-none">
              <th className="py-3 px-3 w-12 text-center">#</th>
              <th className="py-3 px-4 min-w-[200px]">Procedure</th>
              <th className="py-3 px-4 min-w-[130px]">ICD-10 Code</th>
              <th className="py-3 px-4 min-w-[140px]">Package Code</th>
              <th className="py-3 px-4 min-w-[320px]">Approved Implants</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800 font-sans">
            {procedures.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-12 text-center text-slate-400">
                  No procedures found matching &quot;{searchQuery}&quot;.
                </td>
              </tr>
            ) : (
              procedures.map((proc, index) => {
                const schemeDetail = proc.schemes[selectedYojana];
                const cleanName = CLEAN_PROCEDURE_NAMES[proc.id] || proc.shortName;

                return (
                  <tr key={proc.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="py-3 px-3 text-center font-mono text-slate-400 text-xs align-top">
                      {index + 1}
                    </td>

                    <td className="py-3 px-4 text-xs font-medium text-slate-900 dark:text-slate-100 align-top">
                      {cleanName}
                    </td>

                    <td className="py-3 px-4 align-top whitespace-nowrap">
                      <div className="inline-flex items-center gap-1.5 font-mono text-xs">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{proc.icd10.code}</span>
                        <button
                          type="button"
                          onClick={() => handleCopy(proc.icd10.code, `icd-${proc.id}`)}
                          className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                          title={`Copy ICD-10 code: ${proc.icd10.code}`}
                          aria-label={`Copy ICD-10 code ${proc.icd10.code}`}
                        >
                          {copiedKey === `icd-${proc.id}` ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </td>

                    <td className="py-3 px-4 align-top whitespace-nowrap">
                      <div className="inline-flex items-center gap-1.5 font-mono text-xs">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{schemeDetail.packageCode}</span>
                        <button
                          type="button"
                          onClick={() => handleCopy(schemeDetail.packageCode, `pkg-${proc.id}`)}
                          className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                          title={`Copy package code: ${schemeDetail.packageCode}`}
                          aria-label={`Copy package code ${schemeDetail.packageCode}`}
                        >
                          {copiedKey === `pkg-${proc.id}` ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </td>

                    <td className="py-3 px-4 align-top">
                      {schemeDetail.implants.length === 0 ? (
                        <span className="text-slate-400 text-xs">—</span>
                      ) : (
                        <div className="space-y-1.5">
                          {schemeDetail.implants.map((imp: ApprovedImplantItem) => (
                            <div
                              key={imp.code}
                              className="flex items-start justify-between gap-3 text-xs"
                            >
                              <div className="flex items-baseline gap-2 min-w-0">
                                <span className="font-mono font-semibold text-slate-800 dark:text-slate-200 shrink-0">
                                  {imp.code}
                                </span>
                                <span className="text-slate-600 dark:text-slate-400">
                                  {imp.name}
                                </span>
                              </div>
                              <button
                                type="button"
                                onClick={() => handleCopy(imp.code, `imp-${proc.id}-${imp.code}`)}
                                className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
                                title={`Copy implant code: ${imp.code}`}
                                aria-label={`Copy implant code ${imp.code}`}
                              >
                                {copiedKey === `imp-${proc.id}-${imp.code}` ? (
                                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                                ) : (
                                  <Copy className="w-3.5 h-3.5" />
                                )}
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
