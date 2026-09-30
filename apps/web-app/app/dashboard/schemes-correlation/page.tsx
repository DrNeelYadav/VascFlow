"use client";

import React, { useState, useMemo } from "react";
import {
  CORRELATION_PROCEDURES,
  YojanaSchemeKey,
} from "../../lib/schemesCorrelationData";
import { copyToClipboard } from "../../lib/ihmsBridge";
import { Search, Copy, Check } from "lucide-react";

const CLEAN_PROCEDURE_NAMES: Record<string, string> = {
  ctace: "cTACE",
  "deb-tace": "DEB-TACE",
  bae: "BAE",
  venaseal: "VenaSeal",
  evlt: "EVLT",
  varicocele: "Varicocele Embolization",
  "ptbd-stent": "PTBD + Biliary Stent",
  pcn: "PCN",
  "av-fistuloplasty": "AV Fistuloplasty",
  tips: "TIPS",
  "pcd-liver-abscess": "PCD",
  "deep-core-biopsy": "Core Biopsy",
  "splenic-embolization": "Splenic Artery Embolization",
  ufe: "UFE / UAE",
};

const SCHEME_TABS: { key: YojanaSchemeKey; label: string }[] = [
  { key: "MAAY", label: "MAAY" },
  { key: "RGHS", label: "RGHS" },
  { key: "AB_PMJAY", label: "AB-PMJAY" },
  { key: "CASH_RMRS", label: "Cash / RMRS" },
];

export default function SchemesCorrelationPage() {
  const [selectedYojana, setSelectedYojana] = useState<YojanaSchemeKey>("MAAY");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = async (text: string, key: string) => {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 1800);
    }
  };

  const filteredProcedures = useMemo(() => {
    if (!searchQuery.trim()) return CORRELATION_PROCEDURES;
    const q = searchQuery.toLowerCase().trim();

    return CORRELATION_PROCEDURES.filter((proc) => {
      const cleanName = (CLEAN_PROCEDURE_NAMES[proc.id] || proc.shortName).toLowerCase();
      const rawName = proc.name.toLowerCase();
      const icd = proc.icd10.code.toLowerCase();
      const scheme = proc.schemes[selectedYojana];
      const pkg = scheme.packageCode.toLowerCase();
      const matchImplant = scheme.implants.some(
        (imp) =>
          imp.code.toLowerCase().includes(q) ||
          imp.name.toLowerCase().includes(q)
      );

      return (
        cleanName.includes(q) ||
        rawName.includes(q) ||
        icd.includes(q) ||
        pkg.includes(q) ||
        matchImplant
      );
    });
  }, [searchQuery, selectedYojana]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Minimal Header */}
      <header className="bg-white border-b border-slate-200 px-4 md:px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              Scheme Code Correlation
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              ICD-10, package codes, and approved implants by government health scheme.
            </p>
          </div>

          {/* Clean Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search procedure, code, or implant..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 text-xs bg-slate-100 rounded-lg border border-transparent focus:border-slate-300 focus:bg-white text-slate-900 placeholder-slate-400 focus:outline-none transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Clean Scheme Switcher */}
        <div className="max-w-7xl mx-auto mt-4 flex items-center gap-2 border-t border-slate-100 pt-3 overflow-x-auto">
          {SCHEME_TABS.map((tab) => {
            const isSelected = selectedYojana === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setSelectedYojana(tab.key)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? "bg-slate-900 text-white shadow-xs font-semibold"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </header>

      {/* Minimalist 5-Column Table */}
      <main className="flex-1 p-4 md:p-6 max-w-7xl mx-auto w-full">
        <div className="bg-white rounded-lg border border-slate-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100/75 border-b border-slate-200 text-[11px] font-semibold text-slate-600 uppercase tracking-wider select-none">
                  <th className="py-3 px-3 w-12 text-center">#</th>
                  <th className="py-3 px-4 min-w-[200px]">Procedure</th>
                  <th className="py-3 px-4 min-w-[130px]">ICD-10 Code</th>
                  <th className="py-3 px-4 min-w-[140px]">Package Code</th>
                  <th className="py-3 px-4 min-w-[320px]">Approved Implants</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-sans">
                {filteredProcedures.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-slate-400">
                      No procedures found matching &quot;{searchQuery}&quot;.
                    </td>
                  </tr>
                ) : (
                  filteredProcedures.map((proc, index) => {
                    const schemeDetail = proc.schemes[selectedYojana];
                    const cleanName = CLEAN_PROCEDURE_NAMES[proc.id] || proc.shortName;

                    return (
                      <tr key={proc.id} className="hover:bg-slate-50/80 transition-colors">
                        {/* 1. Row Index */}
                        <td className="py-3 px-3 text-center font-mono text-slate-400 text-xs align-top">
                          {index + 1}
                        </td>

                        {/* 2. Procedure Name */}
                        <td className="py-3 px-4 text-xs font-medium text-slate-900 align-top">
                          {cleanName}
                        </td>

                        {/* 3. ICD-10 Code */}
                        <td className="py-3 px-4 align-top whitespace-nowrap">
                          <div className="inline-flex items-center gap-1.5 font-mono text-xs">
                            <span className="font-semibold text-slate-800">{proc.icd10.code}</span>
                            <button
                              type="button"
                              onClick={() => handleCopy(proc.icd10.code, `icd-${proc.id}`)}
                              className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
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

                        {/* 4. Package Code */}
                        <td className="py-3 px-4 align-top whitespace-nowrap">
                          <div className="inline-flex items-center gap-1.5 font-mono text-xs">
                            <span className="font-semibold text-slate-800">{schemeDetail.packageCode}</span>
                            <button
                              type="button"
                              onClick={() => handleCopy(schemeDetail.packageCode, `pkg-${proc.id}`)}
                              className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
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

                        {/* 5. Approved Implants */}
                        <td className="py-3 px-4 align-top">
                          {schemeDetail.implants.length === 0 ? (
                            <span className="text-slate-400 text-xs">—</span>
                          ) : (
                            <div className="space-y-1.5">
                              {schemeDetail.implants.map((imp) => (
                                <div
                                  key={imp.code}
                                  className="flex items-start justify-between gap-3 text-xs"
                                >
                                  <div className="flex items-baseline gap-2 min-w-0">
                                    <span className="font-mono font-semibold text-slate-800 shrink-0">
                                      {imp.code}
                                    </span>
                                    <span className="text-slate-600">
                                      {imp.name}
                                    </span>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => handleCopy(imp.code, `imp-${proc.id}-${imp.code}`)}
                                    className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors shrink-0 cursor-pointer"
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
      </main>
    </div>
  );
}
