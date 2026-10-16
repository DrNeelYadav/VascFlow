"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { X, Copy, Check, Film, FileText, ClipboardCheck, Activity, Edit3, Save, Phone } from "lucide-react";
import type { useLogbookDesk } from "./useLogbookDesk";

interface LogbookDrawerProps {
  desk: ReturnType<typeof useLogbookDesk>;
}

export function LogbookDrawer({ desk }: LogbookDrawerProps) {
  const { selectedCase, setSelectedCase, hasCopied, handleCopySummary, handleUpdateCase } = desk;
  const [isEditing, setIsEditing] = useState(false);
  const [editBill, setEditBill] = useState("");
  const [editCt, setEditCt] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCase(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setSelectedCase]);

  useEffect(() => {
    if (selectedCase) {
      setEditBill(selectedCase.billNo && selectedCase.billNo !== "—" ? selectedCase.billNo : "");
      setEditCt(selectedCase.ctNumber && selectedCase.ctNumber !== "—" ? selectedCase.ctNumber : "");
      setIsEditing(false);
    }
  }, [selectedCase]);

  if (!selectedCase) return null;

  const caseId = selectedCase.dsaNo || selectedCase.crNumber;
  const telegramBotUrl = `https://t.me/hermes_pwtpgcju4xgwvyky_bot?start=fluoro_${caseId}`;

  const saveEdits = () => {
    handleUpdateCase(selectedCase.dsaNo, {
      billNo: editBill.trim() || "—",
      ctNumber: editCt.trim() || "—",
    });
    setIsEditing(false);
  };

  return (
    <>
      <div onClick={() => setSelectedCase(null)} className="fixed inset-0 z-40 bg-black/25 backdrop-blur-2xs cursor-pointer" aria-hidden="true" />
      <aside className="fixed inset-y-0 right-0 z-50 w-full sm:w-[420px] bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col justify-between p-5 overflow-y-auto">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                DSA #{selectedCase.dsaNo || "—"}
              </span>
              <span className="text-xs text-slate-500 font-mono">{selectedCase.date}</span>
            </div>
            <button type="button" onClick={() => setSelectedCase(null)} className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer" aria-label="Close detail drawer">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Patient Demographics & UHID */}
          <div className="space-y-1">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">{selectedCase.patientName}</h2>
            <div className="text-xs text-slate-500 font-mono flex flex-wrap gap-x-2 gap-y-0.5">
              <span>{selectedCase.age}Y • {selectedCase.gender}</span>
              <span>• UHID: {selectedCase.uhid || selectedCase.crNumber}</span>
              {selectedCase.contactNo && selectedCase.contactNo !== "—" && (
                <span className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
                  <Phone className="w-3 h-3 text-emerald-600" />
                  {selectedCase.contactNo}
                </span>
              )}
            </div>
          </div>

          {/* Quick Document & Cine Launchers */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[10px] uppercase font-bold text-slate-400">Clinical Documents &amp; Media</span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href={telegramBotUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 p-2 rounded-lg bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 hover:bg-sky-100 font-semibold shadow-2xs">
                <Film className="w-3.5 h-3.5 text-sky-600" />
                <span>Fluoro Runs (Telegram)</span>
              </a>
              <Link href={`/dashboard/operative-notes?caseId=${caseId}`} className="flex items-center gap-1.5 p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 font-semibold shadow-2xs">
                <FileText className="w-3.5 h-3.5 text-emerald-600" />
                <span>Operative Note</span>
              </Link>
              <Link href={`/dashboard/discharge?caseId=${caseId}`} className="flex items-center gap-1.5 p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 font-semibold shadow-2xs">
                <ClipboardCheck className="w-3.5 h-3.5 text-indigo-600" />
                <span>Discharge Summary</span>
              </Link>
              <Link href={`/dashboard/cath-lab-flowsheet?caseId=${caseId}`} className="flex items-center gap-1.5 p-2 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 font-semibold shadow-2xs">
                <Activity className="w-3.5 h-3.5 text-amber-600" />
                <span>Post-Op PACU</span>
              </Link>
            </div>
          </div>

          {/* Clinical Details */}
          <div className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400">Intervention Procedure</span>
              <p className="font-semibold text-blue-700 dark:text-sky-300 mt-0.5">{selectedCase.procedureName}</p>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400">Clinical Diagnosis</span>
              <p className="text-slate-700 dark:text-slate-300 mt-0.5 leading-relaxed">{selectedCase.diagnosis}</p>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400">Follow-Up &amp; Outcome</span>
              <p className="text-slate-700 dark:text-slate-300 mt-0.5">{selectedCase.followup || "Routine surveillance"}</p>
            </div>

            {/* Editable Bill No & CT Scan Number */}
            <div className="bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700/60 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-slate-500">Hospital Billing &amp; CT Accession</span>
                <button type="button" onClick={() => isEditing ? saveEdits() : setIsEditing(true)} className="flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                  {isEditing ? <><Save className="w-3 h-3" /> Save</> : <><Edit3 className="w-3 h-3" /> Edit</>}
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-[10px] text-slate-400 block">Bill / Receipt #</span>
                  {isEditing ? (
                    <input type="text" value={editBill} onChange={(e) => setEditBill(e.target.value)} placeholder="e.g. RCPT-1090" className="w-full px-2 py-1 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded font-mono" />
                  ) : (
                    <p className="font-mono font-medium text-slate-800 dark:text-slate-200 mt-0.5">{selectedCase.billNo || "—"}</p>
                  )}
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">CT Scan Number</span>
                  {isEditing ? (
                    <input type="text" value={editCt} onChange={(e) => setEditCt(e.target.value)} placeholder="e.g. CT-4521/24" className="w-full px-2 py-1 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded font-mono" />
                  ) : (
                    <p className="font-mono font-medium text-slate-800 dark:text-slate-200 mt-0.5">{selectedCase.ctNumber || "—"}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-0.5">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400">Admitting Ward</span>
                <p className="font-medium text-slate-800 dark:text-slate-200 mt-0.5 truncate">{selectedCase.unit || "Cath Lab"}</p>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400">Scheme Tariff</span>
                <p className="font-medium text-slate-800 dark:text-slate-200 mt-0.5">{selectedCase.schemeType || "MAAY"}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400">Radiation Dose</span>
                <p className="font-mono text-slate-800 dark:text-slate-200 mt-0.5">{selectedCase.radiationDose || "—"}</p>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400">Primary Operator</span>
                <p className="font-medium text-slate-800 dark:text-slate-200 mt-0.5 truncate">{selectedCase.primaryOperator || "IR Team"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
          <button type="button" onClick={() => handleCopySummary(selectedCase)} className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer">
            {hasCopied ? <><Check className="w-3.5 h-3.5" /><span>Copied to Clipboard</span></> : <><Copy className="w-3.5 h-3.5" /><span>Copy Case Summary</span></>}
          </button>
        </div>
      </aside>
    </>
  );
}
