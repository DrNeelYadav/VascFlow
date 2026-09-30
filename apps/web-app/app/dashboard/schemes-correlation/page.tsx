"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  CORRELATION_PROCEDURES,
  YOJANA_SCHEMES,
  YojanaSchemeKey,
  ProcedureCorrelationItem,
  calculateSchemeTotal,
  formatTmsClipboardBlock,
  PatientTmsPayload,
} from "../../lib/schemesCorrelationData";
import { copyToClipboard } from "../../lib/ihmsBridge";
import {
  FileSpreadsheet,
  Table,
  Search,
  Copy,
  Check,
  Filter,
  Layers,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  FileText,
  Sparkles,
  ChevronRight,
  Info,
  Hash,
  User,
  CreditCard,
  Maximize2,
  Eye,
  SlidersHorizontal,
  RefreshCw,
  HelpCircle,
  Tag,
  Stethoscope,
  Activity,
  Package,
} from "lucide-react";

type ViewMode = "sheet" | "studio";

export default function SchemesCorrelationPage() {
  const [selectedYojana, setSelectedYojana] = useState<YojanaSchemeKey>("MAAY");
  const [selectedProcId, setSelectedProcId] = useState<string>("ctace");
  const [viewMode, setViewMode] = useState<ViewMode>("sheet");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  // Clipboard copy state tracker
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Optional patient details for customized TMS slip generation
  const [patientInfo, setPatientInfo] = useState<PatientTmsPayload>({
    patientName: "",
    crNo: "",
    ipdNo: "",
    janAadhaarOrPolicy: "",
  });
  const [showPatientDrawer, setShowPatientDrawer] = useState<boolean>(false);

  // Selected implant codes overrides for active procedure in Studio mode
  const [selectedImplantCodes, setSelectedImplantCodes] = useState<string[]>([]);

  // Get active procedure item
  const activeProcedure = useMemo(() => {
    return (
      CORRELATION_PROCEDURES.find((p) => p.id === selectedProcId) ||
      CORRELATION_PROCEDURES[0]
    );
  }, [selectedProcId]);

  // Synchronize default selected implants when active procedure or yojana changes
  React.useEffect(() => {
    if (activeProcedure) {
      const schemeDetail = activeProcedure.schemes[selectedYojana];
      const defaultCodes = schemeDetail.implants.map((i) => i.code);
      setSelectedImplantCodes(defaultCodes);
    }
  }, [selectedProcId, selectedYojana]);

  // Unique categories list
  const categories = useMemo(() => {
    const set = new Set<string>();
    CORRELATION_PROCEDURES.forEach((p) => set.add(p.category));
    return ["ALL", ...Array.from(set)];
  }, []);

  // Filtered procedures list
  const filteredProcedures = useMemo(() => {
    return CORRELATION_PROCEDURES.filter((proc) => {
      const matchesCat =
        selectedCategory === "ALL" || proc.category === selectedCategory;

      if (!matchesCat) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const scheme = proc.schemes[selectedYojana];

      const matchName = proc.name.toLowerCase().includes(q);
      const matchShort = proc.shortName.toLowerCase().includes(q);
      const matchIcd = proc.icd10.code.toLowerCase().includes(q);
      const matchIcdDesc = proc.icd10.description.toLowerCase().includes(q);
      const matchPkgCode = scheme.packageCode.toLowerCase().includes(q);
      const matchPkgName = scheme.packageName.toLowerCase().includes(q);
      const matchIndication = proc.primaryIndication.toLowerCase().includes(q);
      const matchImplant = scheme.implants.some(
        (imp) =>
          imp.name.toLowerCase().includes(q) ||
          imp.code.toLowerCase().includes(q)
      );

      return (
        matchName ||
        matchShort ||
        matchIcd ||
        matchIcdDesc ||
        matchPkgCode ||
        matchPkgName ||
        matchIndication ||
        matchImplant
      );
    });
  }, [selectedCategory, searchQuery, selectedYojana]);

  // Trigger clipboard copy with feedback
  const handleCopy = async (text: string, key: string) => {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2200);
    }
  };

  // Toggle implant checkbox in Studio mode
  const toggleImplant = (code: string) => {
    setSelectedImplantCodes((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };

  // Stats calculation for current scheme
  const stats = useMemo(() => {
    let totalBaseTariff = 0;
    let totalMandatoryImplants = 0;
    CORRELATION_PROCEDURES.forEach((p) => {
      const s = p.schemes[selectedYojana];
      const calc = calculateSchemeTotal(s);
      totalBaseTariff += calc.baseTariff;
      totalMandatoryImplants += calc.mandatoryImplantsTotal;
    });
    return {
      procCount: CORRELATION_PROCEDURES.length,
      avgTariff: Math.round(totalBaseTariff / CORRELATION_PROCEDURES.length),
      avgImplants: Math.round(
        totalMandatoryImplants / CORRELATION_PROCEDURES.length
      ),
    };
  }, [selectedYojana]);

  const activeSchemeDetail = activeProcedure.schemes[selectedYojana];
  const activePricing = calculateSchemeTotal(
    activeSchemeDetail,
    selectedImplantCodes
  );

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1C1C1E] flex flex-col font-sans">
      {/* -------------------------------------------------------------------- */}
      {/* HEADER SECTION (Google Workspace / Modern Clean Style) */}
      {/* -------------------------------------------------------------------- */}
      <header className="bg-white border-b border-[#E5E5EA] px-4 md:px-6 py-3.5 sticky top-0 z-30 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          {/* Title & Description */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#007AFF]/10 text-[#007AFF] flex items-center justify-center shrink-0 border border-[#007AFF]/20 shadow-xs">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-lg md:text-xl font-bold tracking-tight text-[#1C1C1E]">
                  Scheme Code Correlation &amp; ICD Indicator Studio
                </h1>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#34C759]/15 text-[#248A3D] border border-[#34C759]/25 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  SMS IR Official Tariffs
                </span>
              </div>
              <p className="text-xs text-[#8E8E93] mt-0.5">
                Instant procedural code correlation, implant tariff caps, ICD-10 indicators &amp; 1-click TMS pre-auth copy
              </p>
            </div>
          </div>

          {/* Right Header Controls: View Toggle & Patient Info Drawer Trigger */}
          <div className="flex items-center gap-2.5 flex-wrap">
            {/* View Mode Toggle */}
            <div className="inline-flex rounded-lg border border-[#E5E5EA] bg-[#F2F2F7] p-0.5 text-xs font-medium">
              <button
                type="button"
                onClick={() => setViewMode("sheet")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                  viewMode === "sheet"
                    ? "bg-white text-[#1C1C1E] shadow-xs font-semibold"
                    : "text-[#8E8E93] hover:text-[#1C1C1E]"
                }`}
              >
                <Table className="w-3.5 h-3.5 text-[#007AFF]" />
                <span>Google Sheet Table</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("studio")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                  viewMode === "studio"
                    ? "bg-white text-[#1C1C1E] shadow-xs font-semibold"
                    : "text-[#8E8E93] hover:text-[#1C1C1E]"
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#34C759]" />
                <span>Procedure Studio &amp; Ticket</span>
              </button>
            </div>

            {/* Patient Customizer Toggle */}
            <button
              type="button"
              onClick={() => setShowPatientDrawer(!showPatientDrawer)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                showPatientDrawer
                  ? "bg-[#007AFF] text-white border-[#007AFF] shadow-xs"
                  : "bg-white text-[#3A3A3C] border-[#D1D1D6] hover:bg-[#F2F2F7]"
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>
                {patientInfo.patientName ? patientInfo.patientName : "Patient Meta"}
              </span>
            </button>
          </div>
        </div>

        {/* Scheme Selector Bar (Tabs) */}
        <div className="mt-3.5 pt-3 border-t border-[#F2F2F7] flex flex-wrap items-center justify-between gap-3 pb-0.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#8E8E93] shrink-0 mr-1">
              Select Yojana:
            </span>
            {(Object.keys(YOJANA_SCHEMES) as YojanaSchemeKey[]).map((key) => {
              const yojana = YOJANA_SCHEMES[key];
              const isSelected = selectedYojana === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedYojana(key)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 cursor-pointer border ${
                    isSelected
                      ? "bg-[#1C1C1E] text-white border-[#1C1C1E] shadow-xs"
                      : "bg-white text-[#3A3A3C] border-[#E5E5EA] hover:border-[#C7C7CC] hover:bg-[#F9F9F9]"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      key === "MAAY"
                        ? "bg-[#34C759]"
                        : key === "RGHS"
                        ? "bg-[#007AFF]"
                        : key === "AB_PMJAY"
                        ? "bg-[#FF9500]"
                        : "bg-[#AF52DE]"
                    }`}
                  />
                  <span>{yojana.shortLabel}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-[#F2F2F7] text-[#8E8E93]"
                    }`}
                  >
                    {yojana.maxCoverLimit}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs text-[#8E8E93] shrink-0">
            <Info className="w-3.5 h-3.5 text-[#007AFF]" />
            <span>Target Portal: <strong className="text-[#1C1C1E]">{YOJANA_SCHEMES[selectedYojana].portalName}</strong></span>
          </div>
        </div>

        {/* Patient Customizer Quick Drawer (Conditional) */}
        {showPatientDrawer && (
          <div className="mt-3 p-3 bg-[#F2F2F7]/80 rounded-xl border border-[#D1D1D6] animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#1C1C1E] flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#007AFF]" />
                Patient Pre-Auth Portal Autofill Fields (Optional):
              </span>
              <span className="text-[11px] text-[#8E8E93]">
                Fields entered here automatically populate the 1-click clipboard slips!
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
              <div>
                <label className="block text-[10px] font-semibold text-[#636366] uppercase">Patient Name</label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Kumar"
                  value={patientInfo.patientName}
                  onChange={(e) => setPatientInfo({ ...patientInfo, patientName: e.target.value })}
                  className="w-full mt-0.5 px-2.5 py-1 text-xs bg-white rounded-md border border-[#D1D1D6] focus:outline-none focus:border-[#007AFF]"
                />
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-[#636366] uppercase">CR Number</label>
                <input
                  type="text"
                  placeholder="e.g. 2026-03-8841"
                  value={patientInfo.crNo}
                  onChange={(e) => setPatientInfo({ ...patientInfo, crNo: e.target.value })}
                  className="w-full mt-0.5 px-2.5 py-1 text-xs bg-white rounded-md border border-[#D1D1D6] focus:outline-none focus:border-[#007AFF]"
                />
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-[#636366] uppercase">IPD Number</label>
                <input
                  type="text"
                  placeholder="e.g. IPD-7721"
                  value={patientInfo.ipdNo}
                  onChange={(e) => setPatientInfo({ ...patientInfo, ipdNo: e.target.value })}
                  className="w-full mt-0.5 px-2.5 py-1 text-xs bg-white rounded-md border border-[#D1D1D6] focus:outline-none focus:border-[#007AFF]"
                />
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-[#636366] uppercase">Jan Aadhaar / Policy / TID</label>
                <input
                  type="text"
                  placeholder="e.g. 7482-9901-2281"
                  value={patientInfo.janAadhaarOrPolicy}
                  onChange={(e) => setPatientInfo({ ...patientInfo, janAadhaarOrPolicy: e.target.value })}
                  className="w-full mt-0.5 px-2.5 py-1 text-xs bg-white rounded-md border border-[#D1D1D6] focus:outline-none focus:border-[#007AFF]"
                />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* -------------------------------------------------------------------- */}
      {/* FILTER & STATS STRIP */}
      {/* -------------------------------------------------------------------- */}
      <section className="bg-white border-b border-[#E5E5EA] px-4 md:px-6 py-2.5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#8E8E93] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search procedure, ICD-10 (e.g. C22.0), package code (e.g. 2849-IN061A), or implant..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-1.5 text-xs bg-[#F2F2F7] rounded-lg border-none focus:ring-2 focus:ring-[#007AFF]/40 focus:bg-white text-[#1C1C1E] transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#8E8E93] hover:text-[#1C1C1E] cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 text-xs shrink-0 flex-wrap">
            <div className="px-2.5 py-1 bg-[#F2F2F7] rounded-lg flex items-center gap-2">
              <span className="text-[#8E8E93]">Procedures:</span>
              <strong className="text-[#1C1C1E] font-bold">
                {filteredProcedures.length} / {CORRELATION_PROCEDURES.length}
              </strong>
            </div>
            <div className="px-2.5 py-1 bg-[#F2F2F7] rounded-lg flex items-center gap-2">
              <span className="text-[#8E8E93]">Avg Base Tariff:</span>
              <strong className="text-[#007AFF] font-bold">
                ₹{stats.avgTariff.toLocaleString("en-IN")}
              </strong>
            </div>
            <div className="px-2.5 py-1 bg-[#F2F2F7] rounded-lg flex items-center gap-2">
              <span className="text-[#8E8E93]">Avg Mandatory Implants:</span>
              <strong className="text-[#34C759] font-bold">
                ₹{stats.avgImplants.toLocaleString("en-IN")}
              </strong>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto mt-2.5 pb-0.5 text-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#8E8E93] shrink-0 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" /> System:
          </span>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? "bg-[#007AFF] text-white font-semibold shadow-xs"
                    : "bg-[#F2F2F7] text-[#636366] hover:bg-[#E5E5EA] hover:text-[#1C1C1E]"
                }`}
              >
                {cat === "ALL" ? "All Routine DSA (14)" : cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* MAIN VIEW: GOOGLE SHEET TABLE OR INTERACTIVE PROCEDURE STUDIO */}
      {/* -------------------------------------------------------------------- */}
      <main className="flex-1 p-3 md:p-6 overflow-x-auto">
        {viewMode === "sheet" ? (
          /* ================================================================ */
          /* 1. GOOGLE SHEET / AIRTABLE HIGH-DENSITY GRID TABLE VIEW           */
          /* ================================================================ */
          <div className="bg-white rounded-xl border border-[#D1D1D6] shadow-xs overflow-hidden">
            {/* Sheet Formula / Action Bar */}
            <div className="bg-[#FAFAFA] border-b border-[#E5E5EA] px-4 py-2 flex items-center justify-between text-xs text-[#636366] gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-[#007AFF] bg-[#007AFF]/10 px-1.5 py-0.5 rounded text-[11px]">
                  fx
                </span>
                <span className="font-medium text-[#1C1C1E]">
                  Procedure Code Correlation Matrix • Active Scheme:{" "}
                  <strong>{YOJANA_SCHEMES[selectedYojana].label}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#8E8E93]">
                <span>💡 Click any code badge to copy it individually, or click <strong>Copy Slip</strong> for the complete TMS block.</span>
              </div>
            </div>

            {/* Table Container */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#F2F2F7] border-b border-[#D1D1D6] text-[11px] font-bold text-[#636366] uppercase tracking-wider select-none">
                    <th className="py-2.5 px-3 w-10 text-center border-r border-[#E5E5EA]">#</th>
                    <th className="py-2.5 px-3 min-w-[220px] border-r border-[#E5E5EA]">Procedure &amp; Organ System</th>
                    <th className="py-2.5 px-3 min-w-[170px] border-r border-[#E5E5EA]">Primary Indication</th>
                    <th className="py-2.5 px-3 min-w-[130px] border-r border-[#E5E5EA]">ICD-10 Indicator</th>
                    <th className="py-2.5 px-3 min-w-[140px] border-r border-[#E5E5EA]">Package Code</th>
                    <th className="py-2.5 px-3 min-w-[100px] border-r border-[#E5E5EA] text-right">Base Tariff</th>
                    <th className="py-2.5 px-3 min-w-[230px] border-r border-[#E5E5EA]">Approved Implants / Add-ons</th>
                    <th className="py-2.5 px-3 min-w-[110px] border-r border-[#E5E5EA] text-right">Implants Cap</th>
                    <th className="py-2.5 px-3 min-w-[120px] border-r border-[#E5E5EA] text-right font-extrabold text-[#1C1C1E]">Total Approved</th>
                    <th className="py-2.5 px-3 min-w-[110px] text-center">One-Click Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E5EA] font-sans">
                  {filteredProcedures.length === 0 ? (
                    <tr>
                      <td colSpan={10} className="py-12 text-center text-[#8E8E93]">
                        No procedures found matching "{searchQuery}" in {selectedCategory}.
                      </td>
                    </tr>
                  ) : (
                    filteredProcedures.map((proc, index) => {
                      const schemeDetail = proc.schemes[selectedYojana];
                      const pricing = calculateSchemeTotal(schemeDetail);
                      const isSelectedRow = proc.id === selectedProcId;

                      return (
                        <tr
                          key={proc.id}
                          className={`hover:bg-[#F9F9FB] transition-colors group ${
                            isSelectedRow ? "bg-[#007AFF]/5" : ""
                          }`}
                        >
                          {/* Row Index */}
                          <td className="py-2.5 px-3 text-center border-r border-[#E5E5EA] font-mono text-[11px] text-[#8E8E93]">
                            {index + 1}
                          </td>

                          {/* Procedure Name & System */}
                          <td className="py-2.5 px-3 border-r border-[#E5E5EA]">
                            <div className="flex flex-col">
                              <div className="flex items-center gap-1.5">
                                <span className="font-bold text-[#1C1C1E] text-[13px] group-hover:text-[#007AFF] transition-colors">
                                  {proc.shortName}
                                </span>
                              </div>
                              <span className="text-[11px] text-[#636366] leading-tight">
                                {proc.name}
                              </span>
                              <div className="flex items-center gap-1 mt-1">
                                <span className="px-1.5 py-0.2 rounded text-[9px] font-semibold bg-[#E5E5EA] text-[#636366]">
                                  {proc.category}
                                </span>
                                <span className="text-[10px] text-[#8E8E93]">
                                  • {proc.organSystem}
                                </span>
                              </div>
                            </div>
                          </td>

                          {/* Indication */}
                          <td className="py-2.5 px-3 border-r border-[#E5E5EA] text-[11px] text-[#3A3A3C] leading-snug">
                            {proc.primaryIndication}
                          </td>

                          {/* ICD-10 Code & Indicator */}
                          <td className="py-2.5 px-3 border-r border-[#E5E5EA]">
                            <div className="flex flex-col gap-1 items-start">
                              <button
                                type="button"
                                onClick={() => handleCopy(proc.icd10.code, `icd-${proc.id}`)}
                                title="Click to copy ICD-10 code"
                                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md font-mono font-bold text-xs bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 transition-colors cursor-pointer"
                              >
                                {proc.icd10.code}
                                {copiedKey === `icd-${proc.id}` ? (
                                  <Check className="w-3 h-3 text-[#34C759]" />
                                ) : (
                                  <Copy className="w-2.5 h-2.5 text-amber-700/60" />
                                )}
                              </button>
                              <span className="text-[10px] text-[#636366] line-clamp-2 leading-tight">
                                {proc.icd10.description}
                              </span>
                            </div>
                          </td>

                          {/* Package Code */}
                          <td className="py-2.5 px-3 border-r border-[#E5E5EA]">
                            <div className="flex flex-col gap-1 items-start">
                              <button
                                type="button"
                                onClick={() => handleCopy(schemeDetail.packageCode, `pkg-${proc.id}`)}
                                title="Click to copy Package Code"
                                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md font-mono font-bold text-xs bg-blue-50 text-blue-900 border border-blue-200 hover:bg-blue-100 transition-colors cursor-pointer"
                              >
                                {schemeDetail.packageCode}
                                {copiedKey === `pkg-${proc.id}` ? (
                                  <Check className="w-3 h-3 text-[#34C759]" />
                                ) : (
                                  <Copy className="w-2.5 h-2.5 text-blue-700/60" />
                                )}
                              </button>
                              {schemeDetail.statusNote && (
                                <span className="text-[9px] text-[#FF3B30] font-medium leading-tight">
                                  ⚠️ {schemeDetail.statusNote}
                                </span>
                              )}
                            </div>
                          </td>

                          {/* Base Tariff */}
                          <td className="py-2.5 px-3 border-r border-[#E5E5EA] text-right font-mono font-semibold text-[#1C1C1E]">
                            ₹{schemeDetail.baseTariffINR.toLocaleString("en-IN")}
                          </td>

                          {/* Approved Implants */}
                          <td className="py-2.5 px-3 border-r border-[#E5E5EA]">
                            <div className="flex flex-col gap-1">
                              {schemeDetail.implants.length === 0 ? (
                                <span className="text-[10px] text-[#8E8E93] italic">
                                  None / Included in base
                                </span>
                              ) : (
                                schemeDetail.implants.map((imp) => (
                                  <div
                                    key={imp.code}
                                    className="flex items-center justify-between text-[11px] gap-1 bg-[#F2F2F7] px-1.5 py-0.5 rounded"
                                  >
                                    <button
                                      type="button"
                                      onClick={() => handleCopy(imp.code, `imp-${imp.code}`)}
                                      className="font-mono text-[10px] font-bold text-[#007AFF] hover:underline cursor-pointer truncate max-w-[130px]"
                                      title={`Click to copy: ${imp.code}`}
                                    >
                                      {imp.code}
                                    </button>
                                    <span className="font-mono text-[10px] font-semibold text-[#1C1C1E] shrink-0">
                                      ₹{imp.unitPriceINR.toLocaleString("en-IN")}
                                    </span>
                                  </div>
                                ))
                              )}
                            </div>
                          </td>

                          {/* Implants Cap */}
                          <td className="py-2.5 px-3 border-r border-[#E5E5EA] text-right font-mono font-medium text-[#636366]">
                            ₹{pricing.mandatoryImplantsTotal.toLocaleString("en-IN")}
                          </td>

                          {/* Total Approved Amount */}
                          <td className="py-2.5 px-3 border-r border-[#E5E5EA] text-right font-mono font-extrabold text-[13px] text-[#248A3D] bg-emerald-50/40">
                            ₹{pricing.grandTotal.toLocaleString("en-IN")}
                          </td>

                          {/* One-Click Action Buttons */}
                          <td className="py-2.5 px-3 text-center">
                            <div className="flex items-center justify-center gap-1.5">
                              <button
                                type="button"
                                onClick={() => {
                                  const text = formatTmsClipboardBlock(proc, selectedYojana, patientInfo);
                                  handleCopy(text, `full-${proc.id}`);
                                }}
                                className={`px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer ${
                                  copiedKey === `full-${proc.id}`
                                    ? "bg-[#34C759] text-white"
                                    : "bg-[#007AFF] text-white hover:bg-[#0062CC] shadow-xs"
                                }`}
                                title="Copy all codes & pre-auth slip to clipboard for TMS / Hospital Portal"
                              >
                                {copiedKey === `full-${proc.id}` ? (
                                  <>
                                    <Check className="w-3 h-3" />
                                    <span>Copied!</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3 h-3" />
                                    <span>Copy Slip</span>
                                  </>
                                )}
                              </button>

                              <button
                                type="button"
                                onClick={() => {
                                  setSelectedProcId(proc.id);
                                  setViewMode("studio");
                                }}
                                className="p-1 rounded-md text-[#8E8E93] hover:text-[#007AFF] hover:bg-[#E5E5EA] transition-colors cursor-pointer"
                                title="Open in Studio & Customize Implants"
                              >
                                <Eye className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* Footer Summary Strip */}
            <div className="bg-[#FAFAFA] border-t border-[#E5E5EA] px-4 py-2.5 flex items-center justify-between text-xs text-[#636366]">
              <span>
                Showing <strong>{filteredProcedures.length}</strong> of{" "}
                <strong>{CORRELATION_PROCEDURES.length}</strong> routine IR procedures
              </span>
              <span className="text-[11px] text-[#8E8E93]">
                Government of Rajasthan Scheme Rules • Updated 2026 Cath-Lab Standard
              </span>
            </div>
          </div>
        ) : (
          /* ================================================================ */
          /* 2. PROCEDURE STUDIO & INTERACTIVE TICKET BUILDER VIEW             */
          /* ================================================================ */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left Column: Procedure Selector List (4 Cols) */}
            <div className="lg:col-span-4 bg-white rounded-xl border border-[#D1D1D6] p-3 shadow-xs flex flex-col h-[750px]">
              <div className="mb-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8E8E93]">
                  DSA Procedures ({filteredProcedures.length})
                </span>
              </div>
              <div className="flex-1 overflow-y-auto space-y-1 pr-1">
                {filteredProcedures.map((proc) => {
                  const isSelected = proc.id === activeProcedure.id;
                  const schemeDetail = proc.schemes[selectedYojana];
                  return (
                    <button
                      key={proc.id}
                      type="button"
                      onClick={() => setSelectedProcId(proc.id)}
                      className={`w-full text-left p-2.5 rounded-lg border transition-all cursor-pointer flex flex-col gap-1 ${
                        isSelected
                          ? "bg-[#007AFF]/10 border-[#007AFF] text-[#1C1C1E] shadow-xs"
                          : "bg-white border-[#E5E5EA] text-[#3A3A3C] hover:bg-[#F9F9FB] hover:border-[#C7C7CC]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs">{proc.shortName}</span>
                        <span className="font-mono text-[10px] font-semibold text-[#007AFF] bg-white px-1.5 py-0.5 rounded border border-[#E5E5EA]">
                          {proc.icd10.code}
                        </span>
                      </div>
                      <span className="text-[11px] text-[#636366] line-clamp-1">
                        {proc.name}
                      </span>
                      <div className="flex items-center justify-between text-[10px] text-[#8E8E93] mt-0.5">
                        <span>Code: {schemeDetail.packageCode}</span>
                        <strong className="text-[#248A3D] font-mono">
                          ₹{schemeDetail.baseTariffINR.toLocaleString("en-IN")}
                        </strong>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Deep Inspector & Pre-Auth Ticket Builder (8 Cols) */}
            <div className="lg:col-span-8 space-y-4">
              {/* Primary Procedure Header Card */}
              <div className="bg-white rounded-xl border border-[#D1D1D6] p-4 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#007AFF]/10 text-[#007AFF]">
                        {activeProcedure.category}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#F2F2F7] text-[#636366]">
                        {activeProcedure.organSystem}
                      </span>
                      <span className="text-xs text-[#8E8E93]">
                        Routine Rank #{activeProcedure.routineRank}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-[#1C1C1E] mt-1.5">
                      {activeProcedure.name}
                    </h2>
                    <p className="text-xs text-[#636366] mt-0.5">
                      <strong>Clinical Indication:</strong> {activeProcedure.primaryIndication}
                    </p>
                  </div>

                  {/* Primary 1-Click TMS Copy Button */}
                  <button
                    type="button"
                    onClick={() => {
                      const text = formatTmsClipboardBlock(
                        activeProcedure,
                        selectedYojana,
                        patientInfo,
                        selectedImplantCodes
                      );
                      handleCopy(text, `studio-full-${activeProcedure.id}`);
                    }}
                    className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shrink-0 cursor-pointer shadow-xs ${
                      copiedKey === `studio-full-${activeProcedure.id}`
                        ? "bg-[#34C759] text-white"
                        : "bg-[#007AFF] text-white hover:bg-[#0062CC]"
                    }`}
                  >
                    {copiedKey === `studio-full-${activeProcedure.id}` ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Copied TMS Slip to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Full TMS Pre-Auth Slip</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* ICD-10 & Package Code Quick Copy Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* ICD-10 Card */}
                <div className="bg-white rounded-xl border border-[#D1D1D6] p-3.5 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#8E8E93] flex items-center gap-1">
                        <Tag className="w-3 h-3 text-[#FF9500]" /> Primary ICD-10 Code
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy(activeProcedure.icd10.code, "icd-studio")}
                        className="text-xs font-semibold text-[#007AFF] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        {copiedKey === "icd-studio" ? (
                          <span className="text-[#34C759] flex items-center gap-0.5">
                            <Check className="w-3 h-3" /> Copied
                          </span>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" /> Copy ICD
                          </>
                        )}
                      </button>
                    </div>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="font-mono text-xl font-extrabold text-[#1C1C1E] bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        {activeProcedure.icd10.code}
                      </span>
                    </div>
                    <p className="text-xs text-[#3A3A3C] font-medium mt-1.5 leading-snug">
                      {activeProcedure.icd10.description}
                    </p>
                  </div>

                  {activeProcedure.icd10.secondaryCodes && (
                    <div className="mt-3 pt-2.5 border-t border-[#F2F2F7]">
                      <span className="text-[10px] font-semibold text-[#8E8E93]">Secondary / Related Codes:</span>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {activeProcedure.icd10.secondaryCodes.map((sec) => (
                          <button
                            key={sec.code}
                            type="button"
                            onClick={() => handleCopy(sec.code, `sec-${sec.code}`)}
                            className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#F2F2F7] text-[#3A3A3C] hover:bg-[#E5E5EA] transition-colors cursor-pointer"
                            title={sec.description}
                          >
                            {sec.code}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Package Code Card */}
                <div className="bg-white rounded-xl border border-[#D1D1D6] p-3.5 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#8E8E93] flex items-center gap-1">
                        <CreditCard className="w-3 h-3 text-[#007AFF]" /> Scheme Package Code
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy(activeSchemeDetail.packageCode, "pkg-studio")}
                        className="text-xs font-semibold text-[#007AFF] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        {copiedKey === "pkg-studio" ? (
                          <span className="text-[#34C759] flex items-center gap-0.5">
                            <Check className="w-3 h-3" /> Copied
                          </span>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" /> Copy Code
                          </>
                        )}
                      </button>
                    </div>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="font-mono text-xl font-extrabold text-[#007AFF] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        {activeSchemeDetail.packageCode}
                      </span>
                    </div>
                    <p className="text-xs text-[#3A3A3C] font-medium mt-1.5 leading-snug">
                      {activeSchemeDetail.packageName}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-[#F2F2F7] flex items-center justify-between text-xs">
                    <span className="text-[#8E8E93]">Base Tariff:</span>
                    <strong className="font-mono font-bold text-[#1C1C1E] text-sm">
                      ₹{activeSchemeDetail.baseTariffINR.toLocaleString("en-IN")}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Hardware & Approved Implants Interactive Calculator */}
              <div className="bg-white rounded-xl border border-[#D1D1D6] p-4 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#1C1C1E] flex items-center gap-1.5">
                      <Package className="w-3.5 h-3.5 text-[#007AFF]" />
                      Mandatory Implants &amp; Approved Hardware Add-on Codes
                    </h3>
                    <p className="text-[11px] text-[#8E8E93]">
                      Toggle implants to automatically recalculate approved pre-auth coverage
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-[#8E8E93] block">Approved Implants Total:</span>
                    <strong className="font-mono text-sm font-bold text-[#007AFF]">
                      ₹{activePricing.selectedImplantsTotal.toLocaleString("en-IN")}
                    </strong>
                  </div>
                </div>

                {activeSchemeDetail.implants.length === 0 ? (
                  <div className="p-3 bg-[#F2F2F7] rounded-lg text-xs text-[#8E8E93] text-center">
                    No add-on implant codes required for this procedure under {YOJANA_SCHEMES[selectedYojana].shortLabel}. Base tariff covers routine consumables.
                  </div>
                ) : (
                  <div className="space-y-2">
                    {activeSchemeDetail.implants.map((imp) => {
                      const isChecked = selectedImplantCodes.includes(imp.code);
                      return (
                        <div
                          key={imp.code}
                          onClick={() => toggleImplant(imp.code)}
                          className={`p-2.5 rounded-lg border flex items-center justify-between gap-3 cursor-pointer transition-all ${
                            isChecked
                              ? "bg-white border-[#007AFF]/50 shadow-xs"
                              : "bg-[#F9F9FB] border-[#E5E5EA] opacity-60"
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => toggleImplant(imp.code)}
                              className="rounded border-[#C7C7CC] text-[#007AFF] focus:ring-[#007AFF] cursor-pointer"
                            />
                            <div className="min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-mono text-xs font-bold text-[#1C1C1E]">
                                  {imp.code}
                                </span>
                                <span
                                  className={`text-[9px] px-1.5 py-0.2 rounded font-bold uppercase ${
                                    imp.isMandatory
                                      ? "bg-red-50 text-red-700 border border-red-200"
                                      : "bg-gray-100 text-gray-700"
                                  }`}
                                >
                                  {imp.isMandatory ? "Mandatory" : "Optional"}
                                </span>
                                <span className="text-[10px] text-[#8E8E93]">
                                  [{imp.category}]
                                </span>
                              </div>
                              <p className="text-xs text-[#3A3A3C] truncate mt-0.5">
                                {imp.name}
                              </p>
                              {imp.remarks && (
                                <p className="text-[10px] text-[#8E8E93] italic">
                                  {imp.remarks}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="text-right shrink-0">
                            <span className="font-mono text-xs font-bold text-[#1C1C1E] block">
                              ₹{imp.unitPriceINR.toLocaleString("en-IN")}
                            </span>
                            {imp.maxUnits > 1 && (
                              <span className="text-[10px] text-[#8E8E93]">
                                Max {imp.maxUnits} units
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Total Pre-Authorization Cap Banner */}
                <div className="mt-4 p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-emerald-900 uppercase tracking-wide block">
                      Total Pre-Authorization Cap (Base + Selected Implants):
                    </span>
                    <span className="text-xs text-emerald-700">
                      Amount to be submitted on Rajasthan Health Portal (TMS)
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xl font-extrabold text-[#248A3D]">
                      ₹{activePricing.grandTotal.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Pre-Authorization Checklist & Document Requirements */}
              <div className="bg-white rounded-xl border border-[#D1D1D6] p-4 shadow-xs">
                <div className="flex items-center justify-between mb-2.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#1C1C1E] flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#34C759]" />
                    Mandatory Pre-Authorization Checklist &amp; Required Uploads
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      const checklistText = activeSchemeDetail.preAuthChecklist
                        .map((c, i) => `${i + 1}. ${c}`)
                        .join("\n");
                      handleCopy(checklistText, "chk-studio");
                    }}
                    className="text-xs font-semibold text-[#007AFF] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    {copiedKey === "chk-studio" ? (
                      <span className="text-[#34C759] flex items-center gap-0.5">
                        <Check className="w-3 h-3" /> Copied Checklist
                      </span>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" /> Copy Checklist
                      </>
                    )}
                  </button>
                </div>

                <div className="space-y-2 mt-2">
                  {activeSchemeDetail.preAuthChecklist.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-[#3A3A3C] p-2 rounded-lg bg-[#FAFAFA] border border-[#F2F2F7]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#34C759] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Clinical Criteria Note */}
                <div className="mt-3 p-2.5 bg-blue-50/60 rounded-lg border border-blue-100 text-xs text-blue-900 flex items-start gap-2">
                  <Info className="w-4 h-4 text-[#007AFF] shrink-0 mt-0.5" />
                  <div>
                    <strong>Clinical Approval Criteria: </strong>
                    <span>{activeSchemeDetail.clinicalCriteria}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* -------------------------------------------------------------------- */}
      {/* QUICK FOOTER HELPER */}
      {/* -------------------------------------------------------------------- */}
      <footer className="bg-white border-t border-[#E5E5EA] px-4 md:px-6 py-3 text-xs text-[#8E8E93] flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span>SMS Medical College &amp; Hospital, Jaipur</span>
          <span>•</span>
          <span>Angiosuite Clinical Suite</span>
        </div>
        <div>
          <span>
            Need help with custom implants? Contact IR Cath-Lab Billing Desk (Ext: 2849)
          </span>
        </div>
      </footer>
    </div>
  );
}
