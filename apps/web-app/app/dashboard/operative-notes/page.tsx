"use client";

import React, { useState } from "react";
import { RegistryPatientSearch } from "./RegistryPatientSearch";
import { OperativeNotePreview } from "./OperativeNotePreview";
import { useOperativeNoteDocument } from "./useOperativeNoteDocument";
import { AUTHENTIC_SMS_MASTER_CASES } from "../../lib/realData/smsMasterAnalysisCases";
import { Search, ChevronDown, ChevronUp } from "lucide-react";

export default function OperativeNotesPage() {
  const doc = useOperativeNoteDocument();
  const [patientSearch, setPatientSearch] = useState<string>("");
  const [showSearchPanel, setShowSearchPanel] = useState<boolean>(true);

  const searchResults = React.useMemo(() => {
    const q = patientSearch.toLowerCase().trim();
    if (!q) return [];
    return AUTHENTIC_SMS_MASTER_CASES.filter(
      (p) =>
        p.patientName.toLowerCase().includes(q) ||
        p.crNumber.toLowerCase().includes(q) ||
        String(p.dsaNo).includes(q)
    ).slice(0, 8);
  }, [patientSearch]);

  const handleSelectPatient = (patient: (typeof AUTHENTIC_SMS_MASTER_CASES)[0]) => {
    doc.handleSelectRegistryPatient(patient);
    setPatientSearch("");
  };

  return (
    <div className="space-y-3 max-w-[1700px] mx-auto pb-16">
      {/* Top Patient Pre-fill Drawer/Bar (Collapsible) */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 shadow-2xs print:hidden">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-1 max-w-xl">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="text"
              value={patientSearch}
              onChange={(e) => setPatientSearch(e.target.value)}
              placeholder="Auto-fill patient from Cath-Lab Master Registry (Type Name, CR, or DSA #)..."
              className="w-full text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
            <span>Current Case:</span>
            <strong className="text-slate-900 dark:text-slate-100 font-bold">
              {doc.docData.patientName || "Unassigned"}
            </strong>
            <span>• IR #{doc.docData.irNo || "---"}</span>
          </div>
        </div>

        {/* Autocomplete Search Dropdown */}
        {searchResults.length > 0 && (
          <div className="mt-2 border-t border-slate-100 dark:border-slate-800 pt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {searchResults.map((p) => (
              <button
                key={p.dsaNo}
                type="button"
                onClick={() => handleSelectPatient(p)}
                className="text-left p-2 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-slate-200 dark:border-slate-700 transition cursor-pointer"
              >
                <div className="font-bold text-xs text-slate-900 dark:text-slate-100 truncate">
                  {p.patientName}
                </div>
                <div className="text-[10px] text-slate-500 flex items-center justify-between mt-0.5">
                  <span>CR: {p.crNumber}</span>
                  <span>IR #{p.dsaNo}</span>
                </div>
                <div className="text-[10px] text-blue-600 dark:text-sky-400 truncate mt-0.5">
                  {p.procedureName}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main WordPad Operative Note Editor & Print Canvas */}
      <OperativeNotePreview docManager={doc} />
    </div>
  );
}
