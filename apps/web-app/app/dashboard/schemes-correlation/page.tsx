"use client";

import React, { useState, useMemo } from "react";
import {
  CORRELATION_PROCEDURES,
  YojanaSchemeKey,
} from "../../lib/schemesCorrelationData";
import { CLEAN_PROCEDURE_NAMES } from "./schemesCorrelationConstants";
import { SchemesCorrelationHeader } from "./SchemesCorrelationHeader";
import { SchemesCorrelationTable } from "./SchemesCorrelationTable";

export default function SchemesCorrelationPage() {
  const [selectedYojana, setSelectedYojana] = useState<YojanaSchemeKey>("MAAY");
  const [searchQuery, setSearchQuery] = useState<string>("");

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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans">
      <SchemesCorrelationHeader
        selectedYojana={selectedYojana}
        onSelectYojana={setSelectedYojana}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <main className="flex-1 p-4 md:p-6 max-w-7xl mx-auto w-full">
        <SchemesCorrelationTable
          procedures={filteredProcedures}
          selectedYojana={selectedYojana}
          searchQuery={searchQuery}
        />
      </main>
    </div>
  );
}
