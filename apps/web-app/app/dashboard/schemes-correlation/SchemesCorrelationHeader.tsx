"use client";

import React from "react";
import { Search } from "lucide-react";
import { YojanaSchemeKey } from "../../lib/schemesCorrelationData";
import { SCHEME_TABS } from "./schemesCorrelationConstants";

interface SchemesCorrelationHeaderProps {
  selectedYojana: YojanaSchemeKey;
  onSelectYojana: (key: YojanaSchemeKey) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export function SchemesCorrelationHeader({
  selectedYojana,
  onSelectYojana,
  searchQuery,
  onSearchChange,
}: SchemesCorrelationHeaderProps) {
  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Scheme Code Correlation
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            ICD-10, package codes, and approved implants by government health scheme.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search procedure, code, or implant..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-8 py-2 text-xs bg-slate-100 dark:bg-slate-800 rounded-lg border border-transparent focus:border-slate-300 dark:focus:border-slate-600 focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Scheme Switcher Tabs */}
      <div className="max-w-7xl mx-auto mt-4 flex items-center gap-2 border-t border-slate-100 dark:border-slate-800 pt-3 overflow-x-auto">
        {SCHEME_TABS.map((tab) => {
          const isSelected = selectedYojana === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => onSelectYojana(tab.key)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all shrink-0 cursor-pointer ${
                isSelected
                  ? "bg-slate-900 dark:bg-blue-600 text-white shadow-xs font-semibold"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </header>
  );
}
