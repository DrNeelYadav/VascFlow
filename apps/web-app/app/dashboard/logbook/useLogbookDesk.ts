"use client";

import { useState, useTransition } from "react";
import { useQuery } from "@tanstack/react-query";
import { generateSafeCsv } from "@vascule/utils/sanitizers";
import type { RealSmsPatientCase } from "../../lib/realData/smsCathLabRealData";

export interface LogbookApiResponse {
  cases: RealSmsPatientCase[];
  total: number;
  page: number;
  totalPages: number;
  limit: number;
  summary: {
    totalArchive: number;
    filteredCount: number;
  };
}

export function useLogbookDesk() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [schemeFilter, setSchemeFilter] = useState<string>("ALL");
  const [yearFilter, setYearFilter] = useState<string>("ALL");
  const [wardFilter, setWardFilter] = useState<string>("ALL");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 50;

  const [selectedCase, setSelectedCase] = useState<RealSmsPatientCase | null>(null);
  const [hasCopied, setHasCopied] = useState<boolean>(false);
  const [isExporting, startExport] = useTransition();

  const [localOverrides, setLocalOverrides] = useState<Record<string, Partial<RealSmsPatientCase>>>(() => {
    if (typeof window === "undefined") return {};
    try {
      const stored = localStorage.getItem("vascflow_master_logbook_overrides");
      return stored ? JSON.parse(stored) : {};
    } catch { return {}; }
  });

  const handleUpdateCase = (dsaNo: string, updates: Partial<RealSmsPatientCase>) => {
    setLocalOverrides((prev) => {
      const next = { ...prev, [dsaNo]: { ...prev[dsaNo], ...updates } };
      try {
        localStorage.setItem("vascflow_master_logbook_overrides", JSON.stringify(next));
      } catch {}
      return next;
    });
    setSelectedCase((prev) => (prev && prev.dsaNo === dsaNo ? { ...prev, ...updates } : prev));
  };

  const queryKey = ["casesArchive", { currentPage, pageSize, searchQuery, schemeFilter, yearFilter, wardFilter, sortOrder }];

  const { data, isLoading, isError, error } = useQuery<LogbookApiResponse>({
    queryKey,
    queryFn: async () => {
      const params = new URLSearchParams({
        page: String(currentPage),
        limit: String(pageSize),
        search: searchQuery,
        scheme: schemeFilter,
        year: yearFilter,
        ward: wardFilter,
        sort: sortOrder,
      });
      const res = await fetch(`/api/cases/archive?${params.toString()}`);
      if (!res.ok) throw new Error(`Failed to fetch cath-lab records: ${res.status}`);
      return res.json();
    },
    staleTime: 60 * 1000,
  });

  const rawCases = data?.cases || [];
  const cases = rawCases.map((c) => ({
    ...c,
    ...(localOverrides[c.dsaNo] || {}),
  }));
  const totalCases = data?.total || 0;
  const totalPages = data?.totalPages || 1;

  const handleExportCsv = async () => {
    startExport(async () => {
      try {
        const params = new URLSearchParams({
          search: searchQuery,
          scheme: schemeFilter,
          year: yearFilter,
          ward: wardFilter,
          sort: sortOrder,
          all: "true",
        });
        const res = await fetch(`/api/cases/archive?${params.toString()}`);
        if (!res.ok) return;
        const json = await res.json();
        const exportCases: RealSmsPatientCase[] = (json.cases || []).map((c: RealSmsPatientCase) => ({
          ...c,
          ...(localOverrides[c.dsaNo] || {}),
        }));

        const headers = ["DSA No", "Date", "Patient Name", "Age", "Gender", "CR Number", "UHID", "Bill No", "Contact No", "CT Number", "Diagnosis", "Procedure", "Scheme", "Ward", "Follow-up", "Operator"];
        const rows = exportCases.map((c) => [
          c.dsaNo || "", c.date, c.patientName, c.age, c.gender, c.crNumber,
          c.uhid || c.crNumber, c.billNo || "—", c.contactNo || "—", c.ctNumber || "—",
          c.diagnosis, c.procedureName, c.schemeType || "", c.unit || "",
          c.followup || "—", c.primaryOperator || "IR Team",
        ]);

        const csvContent = generateSafeCsv(headers, rows);
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `SMS_CathLab_Logbook_${new Date().toISOString().split("T")[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (e) {
        console.error("Export failed:", e);
      }
    });
  };

  const handleCopySummary = (c: RealSmsPatientCase) => {
    const summary = `SMS HOSPITAL CATH-LAB RECORD
DSA #: ${c.dsaNo || "—"} | Date: ${c.date}
Patient: ${c.patientName} (${c.age}Y/${c.gender}) | CR: ${c.crNumber}
UHID: ${c.uhid || c.crNumber} | Contact: ${c.contactNo || "—"} | Bill No: ${c.billNo || "—"} | CT No: ${c.ctNumber || "—"}
Diagnosis: ${c.diagnosis}
Procedure: ${c.procedureName}
Ward/Unit: ${c.unit || "Cath Lab"} | Scheme: ${c.schemeType || "MAAY"}
Follow-Up: ${c.followup || "Routine surveillance"}`;
    navigator.clipboard.writeText(summary);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return {
    searchQuery,
    setSearchQuery: (q: string) => { setSearchQuery(q); setCurrentPage(1); },
    schemeFilter,
    setSchemeFilter: (s: string) => { setSchemeFilter(s); setCurrentPage(1); },
    yearFilter,
    setYearFilter: (y: string) => { setYearFilter(y); setCurrentPage(1); },
    wardFilter,
    setWardFilter: (w: string) => { setWardFilter(w); setCurrentPage(1); },
    sortOrder,
    toggleSortOrder: () => {
      setSortOrder((o) => (o === "newest" ? "oldest" : "newest"));
      setCurrentPage(1);
    },
    currentPage,
    setCurrentPage,
    pageSize,
    totalPages,
    totalCases,
    cases,
    isLoading,
    isError,
    error,
    selectedCase,
    setSelectedCase,
    handleUpdateCase,
    hasCopied,
    handleCopySummary,
    handleExportCsv,
    isExporting,
  };
}
