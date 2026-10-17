"use client";

import React from "react";
import { Search, ChevronRight, MonitorPlay } from "lucide-react";
import { ImagingPatientBanner } from "./ImagingPatientBanner";
import { ImagingDossierPanels } from "./ImagingDossierPanels";
import type { useImagingDossier } from "./useImagingDossier";

interface ImagingCaseDossierViewProps {
  dossier: ReturnType<typeof useImagingDossier>;
  onSwitchToHoros: () => void;
}

export function ImagingCaseDossierView({ dossier, onSwitchToHoros }: ImagingCaseDossierViewProps) {
  const {
    activeCase,
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery,
    searchResults,
    isSearchOpen,
    setIsSearchOpen,
    handleSelectCase,
  } = dossier;

  return (
    <div className="flex flex-col h-full overflow-y-auto space-y-4 p-4 lg:p-6 bg-slate-50/50 dark:bg-slate-950">
      {/* Top Navigation & Case Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs">
        <div className="relative flex-1 max-w-md">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              placeholder="Jump to Case # (e.g. 1090, 431) or Patient Name..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 font-medium"
            />
          </div>

          {/* Search Dropdown */}
          {isSearchOpen && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto">
              {searchResults.map((r) => (
                <button
                  key={r.dsaNo}
                  type="button"
                  onClick={() => handleSelectCase(r.dsaNo)}
                  className="w-full text-left px-3 py-2 text-xs hover:bg-blue-50 dark:hover:bg-blue-950/40 border-b border-slate-100 dark:border-slate-800/60 flex items-center justify-between cursor-pointer"
                >
                  <div>
                    <span className="font-bold text-blue-600 dark:text-blue-400">DSA #{r.dsaNo}</span>
                    <span className="ml-2 font-medium text-slate-800 dark:text-slate-200">{r.patientName}</span>
                    <span className="ml-2 text-slate-400 text-[11px]">{r.procedureName}</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onSwitchToHoros}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 shadow-2xs cursor-pointer"
          >
            <MonitorPlay className="w-3.5 h-3.5 text-blue-600" />
            <span>Switch to Horos DICOMweb</span>
          </button>
        </div>
      </div>

      {/* Patient Clinical Demographics Banner */}
      <ImagingPatientBanner activeCase={activeCase} />

      {/* Tabs & Dossier Panels */}
      <ImagingDossierPanels
        activeCase={activeCase}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
}
