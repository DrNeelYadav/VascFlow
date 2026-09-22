"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Kanban,
  BookOpen,
  FileText,
  FileCheck2,
  Package,
  Search,
} from "lucide-react";
import { INITIAL_RIS_WORKLIST_CASES } from "./worklist/worklistData";
import { REAL_SMS_PATIENT_REGISTRY } from "../lib/realData/smsCathLabRealData";
import { CleanDashboardHeader } from "./components/CleanDashboardHeader";
import { MinimalProcedureTable, CaseRow } from "./components/MinimalProcedureTable";

export default function CleanIosDashboard() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Today cases from worklist
  const todayCases = useMemo(() => {
    return INITIAL_RIS_WORKLIST_CASES.filter((c) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        c.patientName.toLowerCase().includes(q) ||
        c.procedureName.toLowerCase().includes(q) ||
        c.crNumber.toLowerCase().includes(q) ||
        c.supervisingConsultant.toLowerCase().includes(q)
      );
    });
  }, [searchQuery]);

  // Aggregate stats
  const totalLogbookCases = REAL_SMS_PATIENT_REGISTRY.length;
  const activeCasesCount = INITIAL_RIS_WORKLIST_CASES.length;
  const inProcedureCount = INITIAL_RIS_WORKLIST_CASES.filter(
    (c) => c.status === "IN_PROCEDURE"
  ).length;

  const tableCases: CaseRow[] = useMemo(() => {
    return todayCases.map((c) => ({
      id: c.caseId,
      uhid: c.crNumber,
      patient: c.patientName,
      procedure: c.procedureName,
      room: (c.room || "Cath Lab")
        .replace("Cath Lab (Philips Azurion)", "Azurion")
        .replace("PTBD Room", "PTBD"),
      status:
        c.status === "IN_PROCEDURE"
          ? "In-Progress"
          : c.status === "ADMITTED_PREPPED"
          ? "In-Progress"
          : c.status === "FINALIZED_SIGNED" || c.status === "DISCHARGED"
          ? "Completed"
          : "Scheduled",
      time: c.plannedTime,
    }));
  }, [todayCases]);

  const handleQuickAction = (action: string) => {
    if (action === "admit") {
      router.push("/dashboard/calendar?action=new");
    } else if (action === "export") {
      router.push("/dashboard/logbook");
    }
  };

  const handleOpenCase = (_id: string) => {
    router.push("/dashboard/worklist");
  };

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 font-sans pb-16">
      {/* 1. Compressed Clean Dashboard Header */}
      <CleanDashboardHeader
        department="Interventional Radiology Angiosuite"
        activeCases={activeCasesCount}
        onQuickAction={handleQuickAction}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-4">
        {/* 2. Compact Numeric Stat Badges (No AI narrative cards) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="rounded-lg border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
            <div className="text-[11px] font-medium text-slate-500">Active Worklist</div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="font-mono text-xl font-bold text-slate-900 dark:text-slate-100">{activeCasesCount}</span>
              <span className="text-[11px] font-medium text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                {inProcedureCount} In-Procedure
              </span>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
            <div className="text-[11px] font-medium text-slate-500">Registry Total</div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="font-mono text-xl font-bold text-slate-900 dark:text-slate-100">{totalLogbookCases}</span>
              <span className="text-[11px] text-slate-500 font-mono">SMS Cath-Lab</span>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
            <div className="text-[11px] font-medium text-slate-500">Discharge Summaries</div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="font-mono text-xl font-bold text-emerald-700">100%</span>
              <span className="text-[11px] text-slate-500">IHMS Verified</span>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
            <div className="text-[11px] font-medium text-slate-500">Supervising Faculty</div>
            <div className="mt-1 text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
              Dr. Meenu / Dr. Naresh
            </div>
          </div>
        </div>

        {/* 3. Filter Controls */}
        <div className="flex items-center justify-between gap-3">
          <div className="relative w-full max-w-xs">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Filter by patient, UHID, or procedure..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded border border-slate-200 bg-white focus:outline-none focus:ring-1 focus:ring-slate-400 dark:border-slate-800 dark:bg-slate-900 text-slate-900 dark:text-slate-100"
            />
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/dashboard/worklist"
              className="rounded border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            >
              Full Worklist &rarr;
            </Link>
          </div>
        </div>

        {/* 4. Minimalist Edge-to-Edge Worklist Data Table */}
        <MinimalProcedureTable cases={tableCases} onOpenCase={handleOpenCase} />

        {/* 5. Minimalist Module Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
          <Link
            href="/dashboard/discharge"
            className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 transition-colors text-xs font-medium text-slate-800 dark:text-slate-200"
          >
            <FileText className="w-4 h-4 text-slate-500 shrink-0" />
            <span className="truncate">Discharge Cards</span>
          </Link>
          <Link
            href="/dashboard/operative-notes"
            className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 transition-colors text-xs font-medium text-slate-800 dark:text-slate-200"
          >
            <FileCheck2 className="w-4 h-4 text-slate-500 shrink-0" />
            <span className="truncate">Operative Notes</span>
          </Link>
          <Link
            href="/dashboard/logbook"
            className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 transition-colors text-xs font-medium text-slate-800 dark:text-slate-200"
          >
            <BookOpen className="w-4 h-4 text-slate-500 shrink-0" />
            <span className="truncate">Master Logbook</span>
          </Link>
          <Link
            href="/dashboard/inventory"
            className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 transition-colors text-xs font-medium text-slate-800 dark:text-slate-200"
          >
            <Package className="w-4 h-4 text-slate-500 shrink-0" />
            <span className="truncate">Hardware Inventory</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
