"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { generateSafeCsv } from "@vascule/utils/sanitizers";
import Link from "next/link";
import {
  REAL_SMS_PATIENT_REGISTRY,
  RealSmsPatientCase,
  getCathLabModality,
} from "../../lib/realData/smsCathLabRealData";
import {
  BookOpen,
  Search,
  Filter,
  Download,
  Calendar,
  ShieldCheck,
  Activity,
  UserCheck,
  FileText,
  ChevronLeft,
  ChevronRight,
  Stethoscope,
  Building2,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ChevronDown,
  ArrowDown,
  ArrowUp,
  SlidersHorizontal,
  Package,
  Loader2,
  Check,
} from "lucide-react";

export const WARD_FILTER_OPTIONS = [
  { label: "All Wards / Units", value: "ALL" },
  { label: "Liver ICU / HPB", value: "LIVER_ICU" },
  { label: "Old Gastro Ward", value: "OLD_GASTRO" },
  { label: "SSB (Super Speciality)", value: "SSB" },
  { label: "AGH (Attached General Hospital)", value: "AGH" },
  { label: "SSH (Speciality Hospital)", value: "SSH" },
  { label: "BMRC / Neurology", value: "BMRC_NEURO" },
  { label: "ENT Wards", value: "ENT" },
  { label: "OPD Cases", value: "OPD" },
] as const;

export function matchWardFilter(unit: string, filter: string): boolean {
  if (filter === "ALL") return true;
  const u = unit.toUpperCase();
  if (filter === "LIVER_ICU") {
    return u.includes("ICU") || u.includes("LIVER") || u.includes("HPB") || u.includes("BILLIARY");
  }
  if (filter === "OLD_GASTRO") {
    return u.includes("OLD GASTRO") || u.includes("GASTRO WARD") || u.includes("GASTROLOGY");
  }
  if (filter === "SSB") {
    return u.includes("SSB");
  }
  if (filter === "AGH") {
    return u.includes("AGH") || u.includes("ARUNA");
  }
  if (filter === "SSH") {
    return u.includes("SSH");
  }
  if (filter === "BMRC_NEURO") {
    return u.includes("BMRC") || u.includes("NEURO");
  }
  if (filter === "ENT") {
    return u.includes("ENT");
  }
  if (filter === "OPD") {
    return u.includes("OPD");
  }
  return u.includes(filter.toUpperCase());
}

export function getWardBadgeStyle(unit: string): { bg: string; text: string; border: string } {
  const u = unit.toUpperCase();
  if (u.includes("ICU") || u.includes("LIVER") || u.includes("HPB")) {
    return { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200" };
  }
  if (u.includes("OLD GASTRO") || u.includes("GASTRO")) {
    return { bg: "bg-amber-50", text: "text-amber-800", border: "border-amber-200" };
  }
  if (u.includes("SSB")) {
    return { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" };
  }
  if (u.includes("NEURO") || u.includes("BMRC")) {
    return { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" };
  }
  if (u.includes("SSH")) {
    return { bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200" };
  }
  if (u.includes("AGH") || u.includes("ARUNA")) {
    return { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" };
  }
  if (u.includes("ENT")) {
    return { bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-200" };
  }
  if (u.includes("OPD")) {
    return { bg: "bg-cyan-50", text: "text-cyan-700", border: "border-cyan-200" };
  }
  return { bg: "bg-[#F1F3F4]", text: "text-[#3C4043]", border: "border-[#DADCE0]" };
}

export interface ProceduralKit {
  id: string;
  name: string;
  description: string;
  badge: string;
  items: Array<{
    sku: string;
    name: string;
    category: string;
    quantity: number;
  }>;
}

export const STANDARD_HARDWARE_KITS: ProceduralKit[] = [
  {
    id: "diag_angio",
    name: "Diagnostic Angio Kit",
    description: "6F Sheath, 0.035\" Glidewire, 5F Cobra Catheter",
    badge: "Diagnostic",
    items: [
      { sku: "RMSCL-SHEATH-6F", name: "Terumo Radifocus 6F Sheath", category: "Vascular Access", quantity: 1 },
      { sku: "RMSCL-WIRE-035", name: "Terumo 0.035\" Glidewire 150cm", category: "Guidewire", quantity: 1 },
      { sku: "RMSCL-CATH-5F", name: "Cordis 5F Cobra/Celiac Catheter", category: "Diagnostic Catheter", quantity: 1 },
    ],
  },
  {
    id: "ctace_kit",
    name: "cTACE Chemoembolization Kit",
    description: "6F Sheath, Progreat 2.7F Microcatheter, 0.014\" Wire, Lipiodol 10mL",
    badge: "Oncology",
    items: [
      { sku: "RMSCL-SHEATH-6F", name: "Terumo Radifocus 6F Sheath", category: "Vascular Access", quantity: 1 },
      { sku: "RMSCL-MICROCATH-27", name: "Terumo Progreat 2.7F Coaxial Microcatheter", category: "Microcatheter", quantity: 1 },
      { sku: "RMSCL-MICRO-WIRE", name: "Boston Scientific 0.014\" Fathom Wire", category: "Microwire", quantity: 1 },
      { sku: "RMSCL-LIPIODOL-10ML", name: "Guerbet Lipiodol Ultra-Fluid (10mL)", category: "Embolic", quantity: 1 },
    ],
  },
  {
    id: "variceal_kit",
    name: "Variceal Embolization Kit",
    description: "Tornado Coils 4mm, Lipiodol 10mL, Microcatheter",
    badge: "Embolization",
    items: [
      { sku: "RMSCL-COIL-4MM", name: "Cook Medical Tornado Coil 4mm x 2mm", category: "Embolic Coil", quantity: 2 },
      { sku: "RMSCL-LIPIODOL-10ML", name: "Guerbet Lipiodol Ultra-Fluid (10mL)", category: "Embolic", quantity: 1 },
      { sku: "RMSCL-MICROCATH-27", name: "Terumo Progreat 2.7F Coaxial Microcatheter", category: "Microcatheter", quantity: 1 },
    ],
  },
  {
    id: "ptbd_kit",
    name: "PTBD Biliary Drainage Kit",
    description: "Chiba 22G Needle, AccuStick 0.018\" Kit, Ring Biliary Catheter 8.5F",
    badge: "Non-Vascular",
    items: [
      { sku: "RMSCL-CHIBA-22G", name: "Cook Chiba 22G 15cm Access Needle", category: "Access Needle", quantity: 1 },
      { sku: "RMSCL-ACCUSTICK-018", name: "Boston AccuStick 0.018\" Micropuncture Kit", category: "Micropuncture", quantity: 1 },
      { sku: "RMSCL-RING-CATH-85F", name: "Cook Ring Biliary Drainage Catheter 8.5F", category: "Drainage Catheter", quantity: 1 },
    ],
  },
];

export default function CathLabMasterLogbookPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [schemeFilter, setSchemeFilter] = useState<string>("ALL");
  const [genderFilter, setGenderFilter] = useState<string>("ALL");
  const [wardFilter, setWardFilter] = useState<string>("ALL");
  const [modalityFilter, setModalityFilter] = useState<string>("ALL");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [selectedCase, setSelectedCase] = useState<RealSmsPatientCase | null>(null);
  const [activeProtocolModal, setActiveProtocolModal] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(25);

  // Hardware kit depletion state
  const [isDepletingKit, setIsDepletingKit] = useState<string | null>(null);
  const [kitDisposition, setKitDisposition] = useState<"IMPLANTED_BILLED" | "WASTED_CONTAMINATED">("IMPLANTED_BILLED");
  const [kitFeedback, setKitFeedback] = useState<{ message: string; type: "success" | "error" } | null>(null);

  // Filtered Registry
  const filteredData = useMemo(() => {
    return REAL_SMS_PATIENT_REGISTRY.filter((c) => {
      if (schemeFilter !== "ALL" && c.schemeType !== schemeFilter) return false;
      if (genderFilter !== "ALL" && c.gender !== genderFilter) return false;
      if (!matchWardFilter(c.unit, wardFilter)) return false;
      if (modalityFilter !== "ALL" && getCathLabModality(c) !== modalityFilter) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      return (
        c.patientName.toLowerCase().includes(q) ||
        c.crNumber.toLowerCase().includes(q) ||
        c.dsaNo.toLowerCase().includes(q) ||
        c.procedureName.toLowerCase().includes(q) ||
        c.diagnosis.toLowerCase().includes(q) ||
        c.unit.toLowerCase().includes(q)
      );
    });
  }, [searchQuery, schemeFilter, genderFilter, wardFilter, modalityFilter]);

  // Chronologically Sorted Registry
  const sortedData = useMemo(() => {
    return [...filteredData].sort((a, b) => {
      const parseDateToTime = (dStr: string) => {
        const parts = dStr.split(".").map(Number);
        if (parts.length === 3) {
          return new Date(parts[2], parts[1] - 1, parts[0]).getTime();
        }
        return 0;
      };
      const timeA = parseDateToTime(a.date);
      const timeB = parseDateToTime(b.date);
      return sortOrder === "newest" ? timeB - timeA : timeA - timeB;
    });
  }, [filteredData, sortOrder]);

  // Pagination calculation
  const totalPages = Math.ceil(sortedData.length / pageSize) || 1;
  const paginatedCases = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize]);

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: paginatedCases.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 36,
    overscan: 10,
  });

  const virtualItems = rowVirtualizer.getVirtualItems();
  const paddingTop = virtualItems.length > 0 ? virtualItems[0].start : 0;
  const paddingBottom =
    virtualItems.length > 0
      ? rowVirtualizer.getTotalSize() - virtualItems[virtualItems.length - 1].end
      : 0;

  useEffect(() => {
    setSelectedIndex(0);
  }, [currentPage, searchQuery, schemeFilter, genderFilter, wardFilter, modalityFilter, sortOrder]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable)
      ) {
        return;
      }

      if (e.key === "j" || e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => {
          const next = Math.min(prev + 1, Math.max(0, paginatedCases.length - 1));
          rowVirtualizer.scrollToIndex(next, { align: "auto" });
          return next;
        });
      } else if (e.key === "k" || e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => {
          const next = Math.max(prev - 1, 0);
          rowVirtualizer.scrollToIndex(next, { align: "auto" });
          return next;
        });
      } else if (e.key === "Enter") {
        if (paginatedCases[selectedIndex]) {
          e.preventDefault();
          setSelectedCase(paginatedCases[selectedIndex]);
          setActiveProtocolModal(true);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paginatedCases, selectedIndex, rowVirtualizer]);

  // Aggregate Metrics
  const stats = useMemo(() => {
    const total = REAL_SMS_PATIENT_REGISTRY.length;
    const maay = REAL_SMS_PATIENT_REGISTRY.filter((c) => c.schemeType === "MAAY").length;
    const rghs = REAL_SMS_PATIENT_REGISTRY.filter((c) => c.schemeType === "RGHS").length;
    const paid = REAL_SMS_PATIENT_REGISTRY.filter((c) => c.schemeType === "PAID").length;
    const male = REAL_SMS_PATIENT_REGISTRY.filter((c) => c.gender === "Male").length;
    const female = REAL_SMS_PATIENT_REGISTRY.filter((c) => c.gender === "Female").length;

    return {
      total,
      maayPct: Math.round((maay / total) * 100),
      rghsPct: Math.round((rghs / total) * 100),
      paidPct: Math.round((paid / total) * 100),
      maay,
      rghs,
      paid,
      male,
      female,
    };
  }, []);

  const handleExportCsv = () => {
    const headers = [
      "S.No",
      "DSA No",
      "Date",
      "Patient Name",
      "Age",
      "Gender",
      "CR Number / UHID",
      "Unit / Ward",
      "Modality",
      "Scheme Category",
      "Procedure Name",
      "Diagnosis / Indication",
      "Radiation Dose (Gy.cm2)",
    ];

    const rows = sortedData.map((c, idx) => [
      idx + 1,
      c.dsaNo,
      c.date,
      c.patientName,
      c.age,
      c.gender,
      c.crNumber,
      c.unit,
      getCathLabModality(c),
      c.schemeType,
      c.procedureName,
      c.diagnosis,
      c.radiationDose,
    ]);

    const csvContent = generateSafeCsv(headers, rows);
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `SMS_CathLab_Master_Logbook_${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDepleteKit = async (
    kit: ProceduralKit,
    targetCase?: RealSmsPatientCase | null,
    overrideDisposition?: "IMPLANTED_BILLED" | "WASTED_CONTAMINATED"
  ) => {
    const c = targetCase || selectedCase || paginatedCases[selectedIndex] || paginatedCases[0];
    if (!c) return;

    const disposition = overrideDisposition || kitDisposition;
    setIsDepletingKit(kit.id);
    setKitFeedback(null);

    try {
      const res = await fetch("/api/inventory/use", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          caseId: String(c.dsaNo),
          patientCrNo: c.crNumber,
          items: kit.items.map((it) => ({
            ...it,
            disposition,
            wasteReason:
              disposition === "WASTED_CONTAMINATED"
                ? "Angiosuite contamination / dropped sterile field"
                : undefined,
            witnessedById:
              disposition === "WASTED_CONTAMINATED"
                ? "scrub_nurse_witness"
                : undefined,
          })),
          consultantStaffId: "attending_cathlab",
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setKitFeedback({
          message:
            disposition === "IMPLANTED_BILLED"
              ? `✓ Logged ${data.depletedCount} items as IMPLANTED (Billed) for DSA #${c.dsaNo} (${c.patientName}) — ${kit.name}`
              : `⚠ Logged ${data.depletedCount} items as WASTED / CONTAMINATED for DSA #${c.dsaNo} (${c.patientName}) — Stock decremented; excluded from scheme claims`,
          type: disposition === "IMPLANTED_BILLED" ? "success" : "error",
        });
      } else {
        setKitFeedback({
          message: `Failed to log kit: ${data.error || "Unknown error"}`,
          type: "error",
        });
      }
    } catch (err: unknown) {
      const errMessage = err instanceof Error ? err.message : String(err);
      setKitFeedback({
        message: `Error connecting to inventory ledger: ${errMessage}`,
        type: "error",
      });
    } finally {
      setIsDepletingKit(null);
    }
  };

  return (
    <div className="space-y-6 max-w-[1700px] mx-auto pb-16">
      {/* Header Banner */}
      <div className="bg-white border border-[#DADCE0] rounded-2xl p-6 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center font-bold shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl font-bold text-[#202124]">
                  SMS Cath-Lab Master Interventional Registry &amp; Logbook
                </h1>
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6]">
                  Authentic SMS Records
                </span>
              </div>
              <p className="text-sm text-[#5F6368] mt-0.5 flex items-center gap-2 flex-wrap">
                <span>Department of Radiodiagnosis &amp; Interventional Radiology</span>
                <span>•</span>
                <span>SMS Medical College &amp; Attached Hospitals, Jaipur</span>
              </p>
            </div>
          </div>

          {/* Smart Filter / Sort Bar beside Title */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Sort Order Toggle */}
            <div className="flex items-center bg-[#F8F9FA] border border-[#DADCE0] rounded-lg p-1 shadow-2xs">
              <button
                onClick={() => {
                  setSortOrder("newest");
                  setCurrentPage(1);
                }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
                  sortOrder === "newest"
                    ? "bg-white text-[#1A73E8] font-bold shadow-xs border border-[#DADCE0]"
                    : "text-[#5F6368] hover:text-[#202124]"
                }`}
                title="Newest procedures first (2025/2026)"
              >
                <ArrowDown className="w-3.5 h-3.5" />
                Newest First
              </button>
              <button
                onClick={() => {
                  setSortOrder("oldest");
                  setCurrentPage(1);
                }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
                  sortOrder === "oldest"
                    ? "bg-white text-[#1A73E8] font-bold shadow-xs border border-[#DADCE0]"
                    : "text-[#5F6368] hover:text-[#202124]"
                }`}
                title="Oldest procedures first"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                Oldest First
              </button>
            </div>

            <button
              onClick={handleExportCsv}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg bg-white border border-[#DADCE0] text-[#3C4043] hover:bg-[#F8F9FA] hover:text-[#202124] transition-colors cursor-pointer shadow-xs"
            >
              <Download className="w-4 h-4 text-[#1A73E8]" />
              Export Logbook (CSV)
            </button>
            <Link
              href="/dashboard/protocols"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg bg-[#E8F0FE] text-[#1A73E8] hover:bg-[#D2E3FC] transition-colors cursor-pointer"
            >
              <Activity className="w-4 h-4" />
              SCAI Puncture Protocols
            </Link>
          </div>
        </div>

        {/* Statistical Summary KPIs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6 pt-6 border-t border-[#F1F3F4]">
          <div className="bg-[#F8F9FA] p-3.5 rounded-xl border border-[#DADCE0]/60">
            <div className="text-xs text-[#5F6368] font-medium">Total Procedures</div>
            <div className="text-xl font-bold text-[#202124] mt-0.5">{stats.total.toLocaleString()}</div>
            <div className="text-[11px] text-[#137333] font-medium mt-0.5">Verified Logbook Cases</div>
          </div>

          <div className="bg-[#E8F0FE]/40 p-3.5 rounded-xl border border-[#D2E3FC]/60">
            <div className="text-xs text-[#1A73E8] font-medium">MMCSBY / MAAY</div>
            <div className="text-xl font-bold text-[#1A73E8] mt-0.5">{stats.maay}</div>
            <div className="text-[11px] text-[#5F6368] mt-0.5">{stats.maayPct}% Scheme Tariff</div>
          </div>

          <div className="bg-[#E6F4EA]/40 p-3.5 rounded-xl border border-[#CEEAD6]/60">
            <div className="text-xs text-[#137333] font-medium">RGHS Beneficiaries</div>
            <div className="text-xl font-bold text-[#137333] mt-0.5">{stats.rghs}</div>
            <div className="text-[11px] text-[#5F6368] mt-0.5">{stats.rghsPct}% Govt Servants</div>
          </div>

          <div className="bg-[#FEF7E0]/40 p-3.5 rounded-xl border border-[#FEEFC3]/60">
            <div className="text-xs text-[#B06000] font-medium">General / Paid / RMRS</div>
            <div className="text-xl font-bold text-[#B06000] mt-0.5">{stats.paid}</div>
            <div className="text-[11px] text-[#5F6368] mt-0.5">{stats.paidPct}% 20% Dept RMRS</div>
          </div>

          <div className="bg-[#F8F9FA] p-3.5 rounded-xl border border-[#DADCE0]/60">
            <div className="text-xs text-[#5F6368] font-medium">Sex Demographics</div>
            <div className="text-base font-bold text-[#202124] mt-1">
              M: {stats.male} | F: {stats.female}
            </div>
            <div className="text-[11px] text-[#5F6368] mt-0.5">
              {Math.round((stats.male / stats.total) * 100)}% Male predominance
            </div>
          </div>

          <div className="bg-[#F8F9FA] p-3.5 rounded-xl border border-[#DADCE0]/60">
            <div className="text-xs text-[#5F6368] font-medium">Institutional Faculty</div>
            <div className="text-xs font-semibold text-[#202124] mt-1 truncate">
              Dr. Meenu / Dr. Naresh
            </div>
            <div className="text-[11px] text-[#5F6368] truncate mt-0.5">
              Dr. Shashank / Dr. Alok
            </div>
          </div>
        </div>
      </div>

      {/* Procedural Hardware Kit Picker Bar (Atomic RMSCL Ledger) */}
      <div className="bg-white border border-[#DADCE0] rounded-2xl p-4 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-3 border-b border-[#F1F3F4]">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4 text-[#1A73E8]" />
              <span className="text-xs font-bold text-[#202124]">Procedural Hardware Kit Picker</span>
            </div>
            {/* 1-Click Disposition Toggle */}
            <div className="inline-flex items-center bg-[#F1F3F4] border border-[#DADCE0] rounded-lg p-0.5">
              <button
                type="button"
                onClick={() => setKitDisposition("IMPLANTED_BILLED")}
                className={`px-2.5 py-1 text-[11px] font-bold rounded-md transition-all cursor-pointer ${
                  kitDisposition === "IMPLANTED_BILLED"
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "text-[#5F6368] hover:text-[#202124]"
                }`}
              >
                ✓ Implanted (Billed)
              </button>
              <button
                type="button"
                onClick={() => setKitDisposition("WASTED_CONTAMINATED")}
                className={`px-2.5 py-1 text-[11px] font-bold rounded-md transition-all cursor-pointer ${
                  kitDisposition === "WASTED_CONTAMINATED"
                    ? "bg-rose-600 text-white shadow-xs"
                    : "text-[#5F6368] hover:text-rose-600"
                }`}
              >
                ⚠ Wasted / Scrapped
              </button>
            </div>
            <span className="text-[11px] text-[#5F6368] font-mono">
              Active Case: <span className="font-semibold text-[#1A73E8]">{selectedCase ? `${selectedCase.patientName} (DSA #${selectedCase.dsaNo})` : paginatedCases[selectedIndex] ? `${paginatedCases[selectedIndex].patientName} (DSA #${paginatedCases[selectedIndex].dsaNo})` : "None"}</span>
            </span>
          </div>
          {kitFeedback && (
            <div
              className={`text-xs px-2.5 py-1 rounded-md font-mono flex items-center gap-2 ${
                kitFeedback.type === "success"
                  ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                  : "bg-rose-50 text-rose-800 border border-rose-200"
              }`}
            >
              <span>{kitFeedback.message}</span>
              <button
                type="button"
                onClick={() => setKitFeedback(null)}
                className="text-gray-400 hover:text-gray-600 font-bold ml-1 cursor-pointer"
              >
                ×
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3">
          {STANDARD_HARDWARE_KITS.map((kit) => {
            const isLoadingThis = isDepletingKit === kit.id;
            const isWastedMode = kitDisposition === "WASTED_CONTAMINATED";
            return (
              <div
                key={kit.id}
                className={`border rounded-xl p-3 flex flex-col justify-between transition-all ${
                  isWastedMode
                    ? "bg-rose-50/40 border-rose-200 hover:border-rose-400"
                    : "bg-[#F8F9FA] border-[#DADCE0] hover:border-[#1A73E8]/50"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="font-semibold text-xs text-[#202124]">{kit.name}</span>
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${
                        isWastedMode
                          ? "bg-rose-100 text-rose-800 border-rose-200"
                          : "bg-blue-50 text-blue-700 border-blue-200"
                      }`}
                    >
                      {isWastedMode ? "Scrap Mode" : kit.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#5F6368] leading-relaxed mb-2.5">
                    {kit.description}
                  </p>
                </div>
                <div className="space-y-1.5">
                  <button
                    type="button"
                    disabled={isLoadingThis}
                    onClick={() => handleDepleteKit(kit)}
                    className={`w-full py-1.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50 ${
                      isWastedMode
                        ? "bg-white hover:bg-rose-100 text-rose-700 border border-rose-300 hover:border-rose-500"
                        : "bg-white hover:bg-[#E8F0FE] text-[#1A73E8] border border-[#DADCE0] hover:border-[#1A73E8]"
                    }`}
                  >
                    {isLoadingThis ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Logging...</span>
                      </>
                    ) : isWastedMode ? (
                      <>
                        <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                        <span>Scrap as Wasted</span>
                      </>
                    ) : (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Log as Implanted</span>
                      </>
                    )}
                  </button>
                  {isWastedMode && (
                    <div className="text-[10px] text-center text-rose-600 font-mono">
                      Stock decrements • Excluded from RGHS/MAAY claim
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Smart Filter and Search Bar */}
      <div className="bg-white border border-[#DADCE0] rounded-2xl p-4 shadow-xs flex flex-col xl:flex-row xl:items-center justify-between gap-3">
        {/* Search */}
        <div className="relative flex-1 min-w-[280px] max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5F6368]" />
          <input
            type="text"
            placeholder="Search patient name, CR number, DSA no, procedure, ward..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-9 pr-4 py-2 text-xs bg-[#F8F9FA] border border-[#DADCE0] rounded-lg focus:outline-none focus:border-[#1A73E8] focus:bg-white text-[#202124] placeholder-[#80868B] transition-colors"
          />
        </div>

        {/* Filter Controls: Ward/Unit, Modality, Scheme, Gender */}
        <div className="flex flex-wrap items-center gap-3 text-xs">
          {/* Ward / Unit Filter */}
          <div className="flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-[#5F6368]" />
            <span className="text-[#5F6368] font-medium">Ward:</span>
            <select
              value={wardFilter}
              onChange={(e) => {
                setWardFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-[#F8F9FA] border border-[#DADCE0] text-[#202124] text-xs rounded-lg px-2.5 py-1 font-medium focus:outline-none focus:border-[#1A73E8] cursor-pointer"
            >
              {WARD_FILTER_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="h-4 w-px bg-[#DADCE0] hidden sm:block" />

          {/* Modality Filter */}
          <div className="flex items-center gap-1 text-[#5F6368]">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-medium">Modality:</span>
            <div className="flex items-center gap-1 ml-0.5">
              {(["ALL", "XA", "CT", "US"] as const).map((mod) => (
                <button
                  key={mod}
                  onClick={() => {
                    setModalityFilter(mod);
                    setCurrentPage(1);
                  }}
                  className={`px-2 py-0.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                    modalityFilter === mod
                      ? "bg-[#1A73E8] text-white shadow-xs"
                      : "bg-[#F1F3F4] text-[#3C4043] hover:bg-[#E8EAED]"
                  }`}
                >
                  {mod === "ALL" ? "All" : mod}
                </button>
              ))}
            </div>
          </div>

          <div className="h-4 w-px bg-[#DADCE0] hidden sm:block" />

          {/* Scheme Filter */}
          <div className="flex items-center gap-1 text-[#5F6368]">
            <Filter className="w-3.5 h-3.5" />
            <span className="font-medium">Scheme:</span>
            <div className="flex items-center gap-1 ml-0.5">
              {(["ALL", "MAAY", "RGHS", "PAID"] as const).map((scheme) => (
                <button
                  key={scheme}
                  onClick={() => {
                    setSchemeFilter(scheme);
                    setCurrentPage(1);
                  }}
                  className={`px-2 py-0.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                    schemeFilter === scheme
                      ? "bg-[#1A73E8] text-white shadow-xs"
                      : "bg-[#F1F3F4] text-[#3C4043] hover:bg-[#E8EAED]"
                  }`}
                >
                  {scheme === "ALL" ? "All" : scheme}
                </button>
              ))}
            </div>
          </div>

          <div className="h-4 w-px bg-[#DADCE0] hidden sm:block" />

          {/* Gender Filter */}
          <div className="flex items-center gap-1 text-[#5F6368]">
            <span className="font-medium">Sex:</span>
            <div className="flex items-center gap-1 ml-0.5">
              {(["ALL", "Male", "Female"] as const).map((gender) => (
                <button
                  key={gender}
                  onClick={() => {
                    setGenderFilter(gender);
                    setCurrentPage(1);
                  }}
                  className={`px-2 py-0.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                    genderFilter === gender
                      ? "bg-[#1A73E8] text-white shadow-xs"
                      : "bg-[#F1F3F4] text-[#3C4043] hover:bg-[#E8EAED]"
                  }`}
                >
                  {gender === "ALL" ? "All" : gender}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Logbook Table */}
      <div className="bg-white border border-[#DADCE0] rounded-2xl shadow-xs overflow-hidden">
        <div ref={parentRef} className="overflow-x-auto max-h-[640px] overflow-y-auto">
          <table className="w-full text-left text-[12px] border-collapse">
            <thead className="sticky top-0 z-10 bg-[#F8F9FA] text-[#5F6368] font-semibold border-b border-[#DADCE0]">
              <tr className="h-9">
                <th className="py-1.5 px-3 w-12 text-center">S.No</th>
                <th className="py-1.5 px-3 w-20 text-center font-mono">DSA No</th>
                <th className="py-1.5 px-3 w-24">Date</th>
                <th className="py-1.5 px-4 min-w-[170px] max-w-[200px]">Patient Demographics</th>
                <th className="py-1.5 px-3 w-32 font-mono">CR No / UHID</th>
                <th className="py-1.5 px-3 w-20 text-center">Scheme</th>
                <th className="py-1.5 px-4 min-w-[180px] max-w-[220px]">Procedure Done</th>
                <th className="py-1.5 px-4 min-w-[180px] max-w-[220px]">Clinical Diagnosis</th>
                <th className="py-1.5 px-3 min-w-[160px] max-w-[200px]">Admitting Ward / Unit</th>
                <th className="py-1.5 px-3 w-16 text-center">Modality</th>
                <th className="py-1.5 px-3 w-20 text-center">Dose</th>
                <th className="py-1.5 px-3 w-28 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F1F3F4]">
              {paginatedCases.length === 0 ? (
                <tr>
                  <td colSpan={12} className="py-8 text-center text-xs text-slate-400 font-mono">
                    No records found
                  </td>
                </tr>
              ) : (
                <>
                  {paddingTop > 0 && (
                    <tr>
                      <td style={{ height: `${paddingTop}px` }} colSpan={12} />
                    </tr>
                  )}
                  {virtualItems.map((virtualRow) => {
                    const idx = virtualRow.index;
                    const c = paginatedCases[idx];
                    if (!c) return null;
                    const actualIdx = (currentPage - 1) * pageSize + idx + 1;
                    const wardBadge = getWardBadgeStyle(c.unit);
                    const modality = getCathLabModality(c);
                    const isSelected = idx === selectedIndex;
                    return (
                      <tr
                        key={`${c.dsaNo}-${actualIdx}`}
                        onClick={() => {
                          setSelectedIndex(idx);
                          setSelectedCase(c);
                          setActiveProtocolModal(true);
                        }}
                        className={`h-9 transition-colors group cursor-pointer ${
                          isSelected
                            ? "border-l-2 border-slate-900 dark:border-slate-100 bg-slate-100/90 dark:bg-slate-800/80"
                            : "border-l-2 border-transparent hover:bg-[#F8F9FA]/80"
                        }`}
                      >
                        <td className="py-1.5 px-3 text-center text-[#80868B] font-mono whitespace-nowrap">
                          {actualIdx}
                        </td>
                        <td className="py-1.5 px-3 text-center font-mono font-bold text-[#1A73E8] whitespace-nowrap">
                          {c.dsaNo}
                        </td>
                        <td className="py-1.5 px-3 text-[#3C4043] whitespace-nowrap font-medium">
                          {c.date}
                        </td>
                        <td className="py-1.5 px-4 truncate max-w-[200px]" title={`${c.patientName} (${c.age}y/${c.gender})`}>
                          <span className="font-semibold text-[#202124] group-hover:text-[#1A73E8] transition-colors mr-2">
                            {c.patientName}
                          </span>
                          <span className="text-[11px] text-[#5F6368] whitespace-nowrap">
                            {c.age}y • {c.gender}
                          </span>
                        </td>
                        <td className="py-1.5 px-3 font-mono text-[11px] text-[#3C4043] whitespace-nowrap">
                          {c.crNumber}
                        </td>
                        <td className="py-1.5 px-3 text-center whitespace-nowrap">
                          <span
                            className={`inline-block px-2 py-0.5 text-[10px] font-bold rounded-full border ${
                              c.schemeType === "MAAY"
                                ? "bg-[#E8F0FE] text-[#1A73E8] border-[#D2E3FC]"
                                : c.schemeType === "RGHS"
                                ? "bg-[#E6F4EA] text-[#137333] border-[#CEEAD6]"
                                : "bg-[#FEF7E0] text-[#B06000] border-[#FEEFC3]"
                            }`}
                          >
                            {c.schemeType}
                          </span>
                        </td>
                        <td className="py-1.5 px-4 font-medium text-[#202124] truncate max-w-[220px]" title={c.procedureName}>
                          {c.procedureName}
                        </td>
                        <td className="py-1.5 px-4 text-[#5F6368] truncate max-w-[220px]" title={c.diagnosis}>
                          {c.diagnosis}
                        </td>
                        <td className="py-1.5 px-3 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] font-medium border max-w-[180px] truncate shadow-2xs ${wardBadge.bg} ${wardBadge.text} ${wardBadge.border}`}
                            title={c.unit}
                          >
                            <Building2 className="w-3 h-3 shrink-0 opacity-80" />
                            <span className="truncate">{c.unit}</span>
                          </span>
                        </td>
                        <td className="py-1.5 px-3 text-center whitespace-nowrap">
                          <span
                            className={`inline-block px-1.5 py-0.5 text-[10px] font-bold rounded border ${
                              modality === "XA"
                                ? "bg-[#E8F0FE] text-[#1A73E8] border-[#D2E3FC]"
                                : modality === "CT"
                                ? "bg-purple-50 text-purple-700 border-purple-200"
                                : "bg-teal-50 text-teal-700 border-teal-200"
                            }`}
                          >
                            {modality}
                          </span>
                        </td>
                        <td className="py-1.5 px-3 text-center font-mono text-[11px] text-[#5F6368] whitespace-nowrap">
                          {c.radiationDose}
                        </td>
                        <td className="py-1.5 px-3 text-center whitespace-nowrap">
                          <div className="inline-flex items-center gap-1.5">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedCase(c);
                                setActiveProtocolModal(true);
                              }}
                              className="px-2 py-0.5 text-[11px] font-medium rounded bg-[#E8F0FE] text-[#1A73E8] hover:bg-[#D2E3FC] transition-colors cursor-pointer"
                            >
                              Surveillance
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedCase(c);
                                handleDepleteKit(STANDARD_HARDWARE_KITS[0], c);
                              }}
                              title={`Log Diagnostic Kit for DSA #${c.dsaNo}`}
                              className="px-1.5 py-0.5 text-[11px] font-medium rounded bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-colors cursor-pointer inline-flex items-center gap-1"
                            >
                              <Package className="w-3 h-3" />
                              <span>+Kit</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                  {paddingBottom > 0 && (
                    <tr>
                      <td style={{ height: `${paddingBottom}px` }} colSpan={12} />
                    </tr>
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-4 border-t border-[#DADCE0] bg-[#F8F9FA] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#5F6368]">
          <div>
            Showing <span className="font-bold text-[#202124]">{(currentPage - 1) * pageSize + 1}</span> to{" "}
            <span className="font-bold text-[#202124]">
              {Math.min(currentPage * pageSize, sortedData.length)}
            </span>{" "}
            of <span className="font-bold text-[#202124]">{sortedData.length}</span> authentic cases
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span>Rows per page:</span>
              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="px-2 py-1 bg-white border border-[#DADCE0] rounded-md text-[#202124] text-xs focus:outline-none focus:border-[#1A73E8]"
              >
                <option value={15}>15</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
                <option value={758}>All (758)</option>
              </select>
            </div>

            <div className="flex items-center gap-1">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="p-1 rounded-md border border-[#DADCE0] bg-white text-[#3C4043] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#F1F3F4] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="px-2 font-medium text-[#202124]">
                {currentPage} / {totalPages}
              </span>
              <button
                disabled={currentPage >= totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className="p-1 rounded-md border border-[#DADCE0] bg-white text-[#3C4043] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#F1F3F4] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Access Site Surveillance Protocol Modal */}
      {activeProtocolModal && selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white border border-[#DADCE0] rounded-2xl w-full max-w-2xl shadow-xl p-6 relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#DADCE0]">
              <div>
                <h3 className="text-base font-bold text-[#202124] flex items-center gap-2">
                  <Activity className="w-5 h-5 text-[#1A73E8]" />
                  SCAI / CIRSE Access Site Surveillance &amp; Protocol
                </h3>
                <p className="text-xs text-[#5F6368] mt-0.5">
                  Case: {selectedCase.patientName} (CR: {selectedCase.crNumber}) • DSA #{selectedCase.dsaNo}
                </p>
              </div>
              <button
                onClick={() => setActiveProtocolModal(false)}
                className="p-1.5 rounded-full hover:bg-[#F1F3F4] text-[#5F6368] hover:text-[#202124] transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-4 text-xs text-[#3C4043]">
              <div className="bg-[#F8F9FA] p-3.5 rounded-xl border border-[#DADCE0]/80 space-y-2">
                <div className="font-bold text-[#202124] flex items-center gap-1.5">
                  <Stethoscope className="w-4 h-4 text-[#1A73E8]" />
                  Procedure Performed
                </div>
                <div className="text-sm font-semibold text-[#1A73E8]">{selectedCase.procedureName}</div>
                <div className="text-[#5F6368]">Diagnosis: {selectedCase.diagnosis}</div>
              </div>

              {/* Standard SCAI Protocol Card */}
              <div className="border border-[#DADCE0] rounded-xl p-4 space-y-3">
                <div className="font-bold text-[#202124] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#137333]" />
                  SCAI Recommended Vascular Access Management
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-[#E8F0FE]/40 rounded-lg border border-[#D2E3FC]">
                    <div className="font-semibold text-[#1A73E8]">Arterial Femoral Access</div>
                    <ul className="list-disc list-inside mt-1.5 space-y-1 text-[#3C4043]">
                      <li>Manual pressure: 6h flat supine bedrest</li>
                      <li>Vascular Closure (Angio-Seal/Perclose): 2h bedrest</li>
                      <li>Pulse check: Dorsalis pedis &amp; posterior tibial q15m x 4</li>
                    </ul>
                  </div>

                  <div className="p-3 bg-[#E6F4EA]/40 rounded-lg border border-[#CEEAD6]">
                    <div className="font-semibold text-[#137333]">Venous Femoral Access</div>
                    <ul className="list-disc list-inside mt-1.5 space-y-1 text-[#3C4043]">
                      <li>Figure-of-8 suture or manual compression: 2-4h bedrest</li>
                      <li>Observe for retroperitoneal / groin hematoma</li>
                      <li>Keep puncture limb straight</li>
                    </ul>
                  </div>
                </div>

                <div className="p-3 bg-[#FEF7E0]/50 rounded-lg border border-[#FEEFC3] space-y-1">
                  <div className="font-semibold text-[#B06000] flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-[#B06000]" />
                    Critical Nursing Red Flags
                  </div>
                  <p className="text-[#5F6368]">
                    Immediate surgical/IR notification required for: sudden severe groin or flank pain, pulsatile expanding mass, loss of pedal pulses, or drop in systolic BP &gt; 20 mmHg.
                  </p>
                </div>
              </div>

              {/* Institutional Sign-off Block */}
              <div className="pt-3 border-t border-[#DADCE0] flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#5F6368]">
                <div>
                  <span className="font-semibold text-[#202124]">Supervising Faculty:</span> Dr. Meenu Bagarhatta (Sr. Prof &amp; Head) / Dr. Naresh Mangalhara
                </div>
                <div>
                  <span className="font-semibold text-[#202124]">Operating Faculty:</span> Dr. Shashank Sharma (Professor) / Dr. Alok Verma
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setActiveProtocolModal(false)}
                className="px-4 py-2 bg-[#1A73E8] text-white rounded-lg text-xs font-medium hover:bg-[#1557B0] transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
