"use client";

import React from "react";
import { CreditCard, ShieldCheck, CheckCircle2, FileSpreadsheet } from "lucide-react";
import { DrugProtocol } from "../../lib/types/clinical";

interface ProtocolHardwareChecklistProps {
  protocol: DrugProtocol;
  onOpenWorkupModal: () => void;
}

export function ProtocolHardwareChecklist({
  protocol,
  onOpenWorkupModal,
}: ProtocolHardwareChecklistProps) {
  const yojana = protocol.yojanaRequirement;

  return (
    <div className="space-y-4">
      {yojana && (
        <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50/40 dark:bg-blue-950/20 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-blue-200 dark:border-blue-800/60 pb-2.5">
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-blue-600" />
              <div>
                <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100">
                  Government Health Scheme Package (MAAY / RGHS / PMJAY)
                </h3>
                <span className="text-[10px] text-slate-500 font-mono">
                  Code: {yojana.packageCode} • ICD-10: {yojana.icd10Code}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenWorkupModal}
              className="px-2.5 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs cursor-pointer active:scale-95"
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Generate Pre-Op Dossier</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-[10px] uppercase font-bold text-slate-400">Primary Scheme</div>
              <div className="text-xs font-bold text-blue-600 mt-0.5">{yojana.primaryScheme}</div>
            </div>
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-[10px] uppercase font-bold text-slate-400">Govt Base Tariff</div>
              <div className="text-xs font-bold text-emerald-600 font-mono mt-0.5">
                ₹{yojana.tariffAmountInr?.toLocaleString("en-IN") || "Package Tariff"}
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-[10px] uppercase font-bold text-slate-400">Pre-Auth Window</div>
              <div className="text-xs font-bold text-slate-900 dark:text-slate-100 font-mono mt-0.5">
                {yojana.preAuthTurnaroundHours || 4} Hours
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-[10px] uppercase font-bold text-slate-400">Approval Type</div>
              <div className="text-xs font-bold text-slate-900 dark:text-slate-100 mt-0.5">Online TMS Portal</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            {/* Approved Implants */}
            <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="font-semibold text-xs text-slate-900 dark:text-slate-100 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  Approved Hardware &amp; Implants
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {yojana.approvedImplants?.length || 0} Items
                </span>
              </div>
              <div className="space-y-1.5 max-h-44 overflow-y-auto pr-1">
                {yojana.approvedImplants?.map((imp, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-1.5 rounded bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-[11px]"
                  >
                    <div>
                      <div className="font-medium text-slate-900 dark:text-slate-100">{imp.name}</div>
                      <div className="text-[10px] text-slate-400 font-mono">Code: {imp.code}</div>
                    </div>
                    {imp.price ? (
                      <span className="font-bold text-emerald-600 font-mono ml-2">
                        ₹{imp.price.toLocaleString("en-IN")}
                      </span>
                    ) : (
                      <span className="text-[10px] text-slate-400 font-mono ml-2">Tariff</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mandatory Pre-Auth Documents */}
            <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="font-semibold text-xs text-slate-900 dark:text-slate-100 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Mandatory Pre-Auth Checklist
                </span>
                <span className="text-[10px] font-mono text-slate-400">Required</span>
              </div>
              <ul className="space-y-1.5 max-h-44 overflow-y-auto pr-1">
                {yojana.mandatoryPreAuthDocuments?.map((doc, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-1.5 p-1.5 rounded bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-[11px] text-slate-700 dark:text-slate-300"
                  >
                    <span className="w-3.5 h-3.5 rounded-full bg-emerald-600/10 text-emerald-600 flex items-center justify-center font-bold text-[9px] shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
