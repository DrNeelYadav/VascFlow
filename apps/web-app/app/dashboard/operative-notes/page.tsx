"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  ALL_MASTER_PROCEDURES,
  MASTER_CATEGORIES_METADATA,
  buildOperativeNote,
  buildOperativeSummary,
  buildProceduralNarrative,
  buildAdviceBullets,
  MasterProcedure,
  OperativeNoteOptions,
  searchMasterProcedures,
} from "../../lib/masterCatalog";
import { getConsentForProcedure } from "../../lib/consent/consentData";
import { getCalculatorById } from "../../lib/procedureCalculators";
import { INITIAL_RIS_WORKLIST_CASES } from "../worklist/worklistData";
import { useEndoflowStore } from "../useEndoflowStore";
import Link from "next/link";
import {
  FileText,
  Search,
  Filter,
  Copy,
  Printer,
  Check,
  ShieldCheck,
  Calculator,
  Pill,
  User,
  Calendar,
  AlertCircle,
  Clock,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Layers,
  FileSignature,
  Download,
  FolderOpen,
  Share2,
  ClipboardList,
  Activity,
  Package,
} from "lucide-react";

export default function OperativeNotesPage() {
  const storePatients = useEndoflowStore((s) => s.patients);

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<number>(0); // 0 = all
  const [selectedScheme, setSelectedScheme] = useState<"ALL" | "MAAY" | "RGHS">("ALL");
  const [activeTab, setActiveTab] = useState<"SUMMARY" | "NOTE" | "CONSENT" | "PROTOCOL" | "CALCULATOR">("SUMMARY");

  // Selected Procedure
  const [selectedProcedureId, setSelectedProcedureId] = useState<string>(
    ALL_MASTER_PROCEDURES[0]?.id || "cat03-tips-viatorr"
  );

  // Selected Patient State
  const [selectedPatientCaseId, setSelectedPatientCaseId] = useState<string>("CUSTOM");
  const [patientName, setPatientName] = useState("Ramswaroop Meena");
  const [age, setAge] = useState<string | number>(54);
  const [gender, setGender] = useState("Male");
  const [crNumber, setCrNumber] = useState("SMS-2026-089");
  const [ipdBed, setIpdBed] = useState("Male IR Ward / Bed 14");
  const [dateOfProcedure, setDateOfProcedure] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [supervisingConsultant, setSupervisingConsultant] = useState(
    "Dr. Meenu Bagarhatta (Sr. Prof & Head)"
  );
  const [primaryOperator, setPrimaryOperator] = useState(
    "Dr. Naresh Mangalhara (Associate Professor)"
  );
  const [customFindings, setCustomFindings] = useState("");
  const [customIntervention, setCustomIntervention] = useState("");

  // Sync URL query params (?patient=...&cr=...&procedure=...&tab=...)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const qPatient = params.get("patient");
      const qCr = params.get("cr");
      const qAge = params.get("age");
      const qGender = params.get("gender");
      const qBed = params.get("bed");
      const qProcedure = params.get("procedure");
      const qTab = params.get("tab");

      if (qPatient) setPatientName(qPatient);
      if (qCr) setCrNumber(qCr);
      if (qAge) setAge(qAge);
      if (qGender) setGender(qGender);
      if (qBed) setIpdBed(qBed);
      if (qTab === "note") setActiveTab("NOTE");
      if (qTab === "summary") setActiveTab("SUMMARY");

      if (qProcedure) {
        const found = ALL_MASTER_PROCEDURES.find((p) =>
          p.title.toLowerCase().includes(qProcedure.toLowerCase()) ||
          p.id.toLowerCase().includes(qProcedure.toLowerCase())
        );
        if (found) {
          setSelectedProcedureId(found.id);
        }
      }
    }
  }, []);

  // Copy Feedback State
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

  // Quick Filter categories
  const quickFilters = [
    { id: 0, label: "All Categories (22)" },
    { id: 10, label: "Venous & Varicose (VenaSeal / Coils / Glue)" },
    { id: 3, label: "Budd-Chiari & HPB (BRTO / TIPS / Stenting)" },
    { id: 8, label: "Interventional Oncology (TACE / TARE)" },
    { id: 7, label: "Embolotherapy & Trauma (BAE / UGTI)" },
    { id: 4, label: "Arterial Revascularization (DCB / Supera)" },
    { id: 1, label: "Image-Guided Biopsies" },
    { id: 16, label: "Neurovascular & Stroke" },
  ];

  // Filtered Procedures
  const filteredProcedures = useMemo(() => {
    return searchMasterProcedures(
      searchQuery,
      selectedCategory > 0 ? selectedCategory : undefined,
      selectedScheme
    );
  }, [searchQuery, selectedCategory, selectedScheme]);

  // Current Selected Procedure Object
  const selectedProcedure: MasterProcedure = useMemo(() => {
    const found = ALL_MASTER_PROCEDURES.find((p) => p.id === selectedProcedureId);
    return found || ALL_MASTER_PROCEDURES[0];
  }, [selectedProcedureId]);

  // Linked Consent Template
  const consentTemplate = useMemo(() => {
    if (!selectedProcedure) return undefined;
    return getConsentForProcedure(selectedProcedure.consentId || selectedProcedure.id);
  }, [selectedProcedure]);

  // Linked Calculator
  const linkedCalculator = useMemo(() => {
    if (!selectedProcedure || !selectedProcedure.calculatorId) return undefined;
    return getCalculatorById(selectedProcedure.calculatorId);
  }, [selectedProcedure]);

  // Handle selecting a patient from the Worklist
  const handleSelectWorklistPatient = (caseId: string) => {
    setSelectedPatientCaseId(caseId);
    if (caseId === "CUSTOM") return;

    const patient = INITIAL_RIS_WORKLIST_CASES.find((p) => p.caseId === caseId);
    if (patient) {
      setPatientName(patient.patientName);
      setCrNumber(patient.crNumber);
      setSupervisingConsultant(patient.supervisingConsultant);
      setPrimaryOperator(patient.operatorResident);
      setIpdBed(`IR Recovery Ward / Room ${patient.room || "1"}`);
    }
  };

  // Build Operative Note Text
  const operativeNoteText = useMemo(() => {
    if (!selectedProcedure) return "";
    const options: OperativeNoteOptions = {
      patientName,
      age,
      gender,
      crNumber,
      ipdBed,
      dateOfProcedure,
      supervisingConsultant,
      primaryOperator,
      customFindings: customFindings.trim() ? customFindings : undefined,
      customIntervention: customIntervention.trim() ? customIntervention : undefined,
    };
    return buildOperativeNote(selectedProcedure, options);
  }, [
    selectedProcedure,
    patientName,
    age,
    gender,
    crNumber,
    ipdBed,
    dateOfProcedure,
    supervisingConsultant,
    primaryOperator,
    customFindings,
    customIntervention,
  ]);

  // Build Operative Summary Text (Executive Surgical Synopsis)
  const operativeSummaryText = useMemo(() => {
    if (!selectedProcedure) return "";
    const options: OperativeNoteOptions = {
      patientName,
      age,
      gender,
      crNumber,
      ipdBed,
      dateOfProcedure,
      supervisingConsultant,
      primaryOperator,
      customFindings: customFindings.trim() ? customFindings : undefined,
      customIntervention: customIntervention.trim() ? customIntervention : undefined,
    };
    return buildOperativeSummary(selectedProcedure, options);
  }, [
    selectedProcedure,
    patientName,
    age,
    gender,
    crNumber,
    ipdBed,
    dateOfProcedure,
    supervisingConsultant,
    primaryOperator,
    customFindings,
    customIntervention,
  ]);

  // Copy Summary Handler
  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(operativeSummaryText);
      setCopyFeedback("Copied Operative Summary to clipboard!");
      setTimeout(() => setCopyFeedback(null), 3500);
    } catch {
      setCopyFeedback("Error copying to clipboard");
      setTimeout(() => setCopyFeedback(null), 3000);
    }
  };

  // Share Summary Handler (Native Share or WhatsApp)
  const handleShareSummary = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({
        title: `Operative Summary - ${patientName}`,
        text: operativeSummaryText,
      }).catch(() => {});
    } else if (typeof window !== "undefined") {
      const text = encodeURIComponent(operativeSummaryText);
      window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
    }
  };

  // Copy Note Handler
  const handleCopyNote = async () => {
    try {
      await navigator.clipboard.writeText(operativeNoteText);
      setCopyFeedback("Copied Operative Note to clipboard formatted for Rajasthan e-Hospital / IHMS!");
      setTimeout(() => setCopyFeedback(null), 3500);
    } catch {
      setCopyFeedback("Error copying to clipboard");
      setTimeout(() => setCopyFeedback(null), 3000);
    }
  };

  // Print Handler
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-5 print:p-0 print:space-y-0">
      {/* Header Bar */}
      <div className="bg-white border border-[#DADCE0] rounded-2xl p-5 shadow-xs print:hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <FileText className="w-5 h-5 text-[#1A73E8]" />
              <h1 className="text-lg font-bold text-[#202124]">
                Clinical Interventional Operative Notes & Master Catalog
              </h1>
              <span className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-[#E8F0FE] text-[#1A73E8] border border-[#D2E3FC]">
                SMS Hospital & MAAY / RGHS Compliant
              </span>
            </div>
            <p className="text-xs text-[#5F6368]">
              Department of Interventional Radiology (इंटरवेंशनल रेडियोलॉजी विभाग) • SMS Medical College & Hospital, Jaipur
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <Link
              href="/dashboard/discharge?tab=archive"
              className="px-4 py-2 bg-[#FEF7E0] text-[#B06000] border border-[#FEEFC3] text-xs font-semibold rounded-xl hover:bg-[#FEEFC3] transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
              title="Search authentic patient folders, discharge cards, and post-op notes"
            >
              <FolderOpen className="w-3.5 h-3.5 text-[#E37400]" />
              <span>Patient Archive (1,057 Dossiers)</span>
            </Link>
            <button
              onClick={handleCopyNote}
              className="px-4 py-2 bg-[#1A73E8] text-white text-xs font-medium rounded-xl hover:bg-[#1557B0] transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy for e-Hospital / IHMS</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-[#F8F9FA] text-[#3C4043] border border-[#DADCE0] text-xs font-medium rounded-xl hover:bg-[#F1F3F4] transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Report</span>
            </button>
          </div>
        </div>

        {/* Copy Toast Feedback */}
        {copyFeedback && (
          <div className="mt-3 px-4 py-2.5 bg-[#E6F4EA] border border-[#CEEAD6] text-[#137333] text-xs font-medium rounded-xl flex items-center gap-2 animate-in fade-in duration-200">
            <Check className="w-4 h-4 text-[#137333]" />
            <span>{copyFeedback}</span>
          </div>
        )}

        {/* Quick Filter Pills */}
        <div className="mt-4 pt-4 border-t border-[#F1F3F4] flex flex-wrap items-center gap-1.5 text-xs">
          {quickFilters.map((qf) => (
            <button
              key={qf.id}
              onClick={() => setSelectedCategory(qf.id)}
              className={`px-3 py-1.5 rounded-full font-medium transition-all ${
                selectedCategory === qf.id
                  ? "bg-[#1A73E8] text-white shadow-xs"
                  : "bg-[#F8F9FA] text-[#5F6368] hover:bg-[#F1F3F4] border border-[#DADCE0]"
              }`}
            >
              {qf.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Left Controls (Procedure & Patient) + Right Live Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 print:block">
        {/* Left Column (5 Cols) - Search, Selection, and Patient Dossier */}
        <div className="lg:col-span-5 space-y-4 print:hidden">
          {/* Active Patient Picker */}
          <div className="bg-white border border-[#DADCE0] rounded-2xl p-4 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#202124]">
                <User className="w-4 h-4 text-[#1A73E8]" />
                <span>Patient Demographics (SMS Hospital Format)</span>
              </div>
              <span className="text-[11px] text-[#5F6368]">
                {selectedPatientCaseId !== "CUSTOM" ? "Synced from RIS" : "Manual Input"}
              </span>
            </div>

            {/* Quick Worklist Selector Dropdown */}
            <div className="mb-3">
              <label className="block text-[11px] font-medium text-[#5F6368] mb-1">
                Select Today Scheduled Patient from RIS Worklist:
              </label>
              <select
                value={selectedPatientCaseId}
                onChange={(e) => handleSelectWorklistPatient(e.target.value)}
                className="w-full px-3 py-1.5 text-xs bg-[#F8F9FA] border border-[#DADCE0] rounded-xl focus:outline-none focus:border-[#1A73E8] text-[#202124]"
              >
                <option value="CUSTOM">— Custom / Enter New Patient —</option>
                {INITIAL_RIS_WORKLIST_CASES.map((pt) => (
                  <option key={pt.caseId} value={pt.caseId}>
                    {pt.patientName} ({pt.crNumber}) — {pt.procedureName}
                  </option>
                ))}
              </select>
            </div>

            {/* Demographic Fields */}
            <div className="grid grid-cols-2 gap-2.5 text-xs">
              <div>
                <label className="block text-[10px] text-[#5F6368] font-medium mb-0.5">
                  Patient Name
                </label>
                <input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-[#F8F9FA] border border-[#DADCE0] rounded-lg text-xs font-medium text-[#202124] focus:outline-none focus:border-[#1A73E8]"
                />
              </div>

              <div>
                <label className="block text-[10px] text-[#5F6368] font-medium mb-0.5">
                  CR No. / UHID
                </label>
                <input
                  type="text"
                  value={crNumber}
                  onChange={(e) => setCrNumber(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-[#F8F9FA] border border-[#DADCE0] rounded-lg text-xs font-mono text-[#202124] focus:outline-none focus:border-[#1A73E8]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] text-[#5F6368] font-medium mb-0.5">
                    Age (Years)
                  </label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-[#F8F9FA] border border-[#DADCE0] rounded-lg text-xs text-[#202124] focus:outline-none focus:border-[#1A73E8]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-[#5F6368] font-medium mb-0.5">
                    Gender
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-[#F8F9FA] border border-[#DADCE0] rounded-lg text-xs text-[#202124] focus:outline-none focus:border-[#1A73E8]"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] text-[#5F6368] font-medium mb-0.5">
                  IPD Ward / Bed
                </label>
                <input
                  type="text"
                  value={ipdBed}
                  onChange={(e) => setIpdBed(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-[#F8F9FA] border border-[#DADCE0] rounded-lg text-xs text-[#202124] focus:outline-none focus:border-[#1A73E8]"
                />
              </div>

              <div>
                <label className="block text-[10px] text-[#5F6368] font-medium mb-0.5">
                  Supervising Consultant
                </label>
                <select
                  value={supervisingConsultant}
                  onChange={(e) => setSupervisingConsultant(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-[#F8F9FA] border border-[#DADCE0] rounded-lg text-xs text-[#202124] focus:outline-none focus:border-[#1A73E8]"
                >
                  <option value="Dr. Meenu Bagarhatta (Sr. Prof & Head)">
                    Dr. Meenu Bagarhatta (Sr. Prof & Head)
                  </option>
                  <option value="Dr. Naresh Mangalhara (Associate Professor)">
                    Dr. Naresh Mangalhara (Associate Professor)
                  </option>
                  <option value="Dr. Shashank Sharma (Professor)">
                    Dr. Shashank Sharma (Professor)
                  </option>
                  <option value="Dr. Alok Verma (Assistant Professor)">
                    Dr. Alok Verma (Assistant Professor)
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] text-[#5F6368] font-medium mb-0.5">
                  Operating Surgeon / Faculty
                </label>
                <select
                  value={primaryOperator}
                  onChange={(e) => setPrimaryOperator(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-[#F8F9FA] border border-[#DADCE0] rounded-lg text-xs text-[#202124] focus:outline-none focus:border-[#1A73E8]"
                >
                  <option value="Dr. Naresh Mangalhara (Associate Professor)">
                    Dr. Naresh Mangalhara (Associate Professor)
                  </option>
                  <option value="Dr. Alok Verma (Assistant Professor)">
                    Dr. Alok Verma (Assistant Professor)
                  </option>
                  <option value="Dr. Meenu Bagarhatta (Sr. Prof & Head)">
                    Dr. Meenu Bagarhatta (Sr. Prof & Head)
                  </option>
                  <option value="Dr. Shashank Sharma (Professor)">
                    Dr. Shashank Sharma (Professor)
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* Master Procedure Search & Selector */}
          <div className="bg-white border border-[#DADCE0] rounded-2xl p-4 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#202124]">
                <Search className="w-4 h-4 text-[#1A73E8]" />
                <span>Interventional Procedure Catalog</span>
              </div>
              <span className="text-[11px] font-semibold text-[#1A73E8] bg-[#E8F0FE] px-2 py-0.5 rounded-full">
                {filteredProcedures.length} Procedures
              </span>
            </div>

            {/* Search Input */}
            <div className="relative mb-3">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-[#5F6368]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 1,120 procedures, MAAY/RGHS packages, anatomy..."
                className="w-full pl-9 pr-3 py-2 text-xs bg-[#F8F9FA] border border-[#DADCE0] rounded-xl focus:outline-none focus:border-[#1A73E8] text-[#202124]"
              />
            </div>

            {/* Scheme Filter Toggle */}
            <div className="flex items-center justify-between text-xs mb-3 px-1">
              <span className="text-[11px] text-[#5F6368]">Scheme Filter:</span>
              <div className="flex items-center gap-1 bg-[#F8F9FA] p-0.5 border border-[#DADCE0] rounded-lg">
                {(["ALL", "MAAY", "RGHS"] as const).map((sc) => (
                  <button
                    key={sc}
                    onClick={() => setSelectedScheme(sc)}
                    className={`px-2.5 py-1 rounded text-[10px] font-semibold transition-all ${
                      selectedScheme === sc
                        ? "bg-[#1A73E8] text-white shadow-xs"
                        : "text-[#5F6368] hover:text-[#202124]"
                    }`}
                  >
                    {sc}
                  </button>
                ))}
              </div>
            </div>

            {/* Procedures List */}
            <div className="max-h-[380px] overflow-y-auto space-y-2 pr-1 divide-y divide-[#F1F3F4]">
              {filteredProcedures.map((p) => {
                const isSelected = p.id === selectedProcedureId;
                return (
                  <button
                    key={p.id}
                    onClick={() => {
                      setSelectedProcedureId(p.id);
                      setCustomIntervention("");
                    }}
                    className={`w-full text-left p-3 rounded-xl transition-all pt-2.5 ${
                      isSelected
                        ? "bg-[#E8F0FE] border border-[#1A73E8]"
                        : "hover:bg-[#F8F9FA] border border-transparent"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="text-xs font-bold text-[#202124] leading-snug">
                          {p.title}
                        </div>
                        <div className="text-[11px] text-[#1A73E8] font-medium mt-0.5">
                          [MAAY / RGHS Compatible: {p.maayRghsCompatibility.packageName}]
                        </div>
                      </div>
                      <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-white text-[#3C4043] border border-[#DADCE0] shrink-0">
                        {p.modality}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mt-2 text-[10px] text-[#5F6368]">
                      <span>Cat {p.categoryNumber}: {p.categoryName}</span>
                      <span>•</span>
                      <span>ICD: {p.maayRghsCompatibility.icd10}</span>
                      {p.maayRghsCompatibility.tariffInr && (
                        <>
                          <span>•</span>
                          <span className="font-semibold text-[#137333]">
                            ₹{p.maayRghsCompatibility.tariffInr.toLocaleString()}
                          </span>
                        </>
                      )}
                    </div>
                  </button>
                );
              })}

              {filteredProcedures.length === 0 && (
                <div className="py-8 text-center text-xs text-[#5F6368]">
                  No matching procedures found. Clear search filter.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column (7 Cols) - Multi-Tab Clinical Console & Note Viewer */}
        <div className="lg:col-span-7 space-y-4 print:w-full print:block">
          {/* Navigation Tabs */}
          <div className="bg-white border border-[#DADCE0] rounded-2xl p-1.5 flex items-center justify-between shadow-xs print:hidden">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActiveTab("SUMMARY")}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === "SUMMARY"
                    ? "bg-[#1A73E8] text-white shadow-xs"
                    : "text-[#5F6368] hover:bg-[#F8F9FA]"
                }`}
              >
                <ClipboardList className="w-3.5 h-3.5" />
                <span>Operative Summary</span>
              </button>

              <button
                onClick={() => setActiveTab("NOTE")}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === "NOTE"
                    ? "bg-[#1A73E8] text-white shadow-xs"
                    : "text-[#5F6368] hover:bg-[#F8F9FA]"
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Operative Note</span>
              </button>

              <button
                onClick={() => setActiveTab("CONSENT")}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === "CONSENT"
                    ? "bg-[#1A73E8] text-white shadow-xs"
                    : "text-[#5F6368] hover:bg-[#F8F9FA]"
                }`}
              >
                <FileSignature className="w-3.5 h-3.5" />
                <span>Bilingual Consent (द्विभाषी)</span>
              </button>

              <button
                onClick={() => setActiveTab("PROTOCOL")}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === "PROTOCOL"
                    ? "bg-[#1A73E8] text-white shadow-xs"
                    : "text-[#5F6368] hover:bg-[#F8F9FA]"
                }`}
              >
                <Pill className="w-3.5 h-3.5" />
                <span>Hardware & Orders</span>
              </button>

              {linkedCalculator && (
                <button
                  onClick={() => setActiveTab("CALCULATOR")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    activeTab === "CALCULATOR"
                      ? "bg-[#1A73E8] text-white shadow-xs"
                      : "text-[#5F6368] hover:bg-[#F8F9FA]"
                  }`}
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Linked Risk Score</span>
                </button>
              )}
            </div>

            <div className="text-[11px] font-medium text-[#5F6368] pr-2">
              {selectedProcedure.modality} Suite
            </div>
          </div>

          {/* TAB 0: OPERATIVE SUMMARY PREVIEW (Executive Surgical Synopsis & Clinical Handoff) */}
          {activeTab === "SUMMARY" && (
            <div className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-8 shadow-xs relative print:border-none print:shadow-none print:p-0 print:m-0 flex flex-col gap-5 text-zinc-900">
              {/* Header Badge & Action Controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-zinc-200 print:hidden">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                  <span className="text-xs font-bold text-zinc-900">
                    Executive Operative Summary (Surgical Synopsis &amp; Clinical Handoff)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopySummary}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-lg hover:bg-blue-100 flex items-center gap-1.5 transition-colors cursor-pointer border border-blue-200"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copyFeedback || "Copy Summary"}</span>
                  </button>
                  <button
                    onClick={handleShareSummary}
                    className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-lg hover:bg-emerald-100 flex items-center gap-1.5 transition-colors cursor-pointer border border-emerald-200"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share / WhatsApp</span>
                  </button>
                  <button
                    onClick={handlePrint}
                    className="px-3 py-1 bg-[#F8F9FA] text-[#3C4043] border border-[#DADCE0] text-xs font-semibold rounded-lg hover:bg-[#F1F3F4] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print</span>
                  </button>
                </div>
              </div>

              {/* Institutional Summary Banner */}
              <div className="border border-blue-200 bg-blue-50/50 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 block">
                    SMS Hospital Jaipur • Dept of Interventional Radiology
                  </span>
                  <h2 className="text-base font-bold text-zinc-950 mt-0.5">
                    {selectedProcedure.title}
                  </h2>
                  <p className="text-xs text-zinc-600 mt-0.5">
                    Package: {selectedProcedure.maayRghsCompatibility.packageName} ({selectedProcedure.maayRghsCompatibility.packageCode}) • ICD-10: {selectedProcedure.maayRghsCompatibility.icd10}
                  </p>
                </div>
                <div className="text-right sm:text-right shrink-0">
                  <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    100% Technical Success
                  </span>
                  <div className="text-[11px] text-zinc-500 mt-1">
                    Date: <strong>{dateOfProcedure}</strong>
                  </div>
                </div>
              </div>

              {/* Patient & Surgical Team Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-zinc-50 border border-zinc-200 rounded-xl text-xs">
                <div>
                  <span className="text-zinc-500 text-[10px] block">Patient Name:</span>
                  <strong className="text-zinc-900 text-sm">{patientName}</strong>
                </div>
                <div>
                  <span className="text-zinc-500 text-[10px] block">Age / Sex:</span>
                  <strong className="text-zinc-900">{age} Y / {gender}</strong>
                </div>
                <div>
                  <span className="text-zinc-500 text-[10px] block">CR / UHID No.:</span>
                  <strong className="font-mono text-zinc-900">{crNumber}</strong>
                </div>
                <div>
                  <span className="text-zinc-500 text-[10px] block">Assigned Bed:</span>
                  <strong className="text-zinc-900">{ipdBed}</strong>
                </div>
                <div className="sm:col-span-2 pt-2 border-t border-zinc-200">
                  <span className="text-zinc-500 text-[10px] block">Operating Faculty:</span>
                  <strong className="text-zinc-900">{primaryOperator}</strong>
                </div>
                <div className="sm:col-span-2 pt-2 border-t border-zinc-200">
                  <span className="text-zinc-500 text-[10px] block">Supervising Consultant:</span>
                  <strong className="text-zinc-900">{supervisingConsultant}</strong>
                </div>
              </div>

              {/* Key Surgical & Technical Parameters Grid */}
              <div className="space-y-1.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-800 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-blue-600" />
                  Key Surgical &amp; Procedural Parameters
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  <div className="p-2.5 bg-white border border-zinc-200 rounded-lg">
                    <span className="text-[10px] text-zinc-500 block">Guidance &amp; Modality:</span>
                    <strong className="text-zinc-900">{selectedProcedure.modality} Suite Guided</strong>
                  </div>
                  <div className="p-2.5 bg-white border border-zinc-200 rounded-lg">
                    <span className="text-[10px] text-zinc-500 block">Vascular / Percutaneous Access:</span>
                    <strong className="text-zinc-900">{selectedProcedure.accessSiteDefault || "Common Femoral"}</strong>
                  </div>
                  <div className="p-2.5 bg-white border border-zinc-200 rounded-lg">
                    <span className="text-[10px] text-zinc-500 block">Sheath Introduced:</span>
                    <strong className="text-zinc-900">{selectedProcedure.sheathDefault || "5F / 6F Sheath"}</strong>
                  </div>
                  <div className="p-2.5 bg-white border border-zinc-200 rounded-lg">
                    <span className="text-[10px] text-zinc-500 block">Sedation / Anesthesia:</span>
                    <strong className="text-zinc-900">{selectedProcedure.sedation || "Local Anesthesia"}</strong>
                  </div>
                  <div className="p-2.5 bg-white border border-zinc-200 rounded-lg">
                    <span className="text-[10px] text-zinc-500 block">Closure &amp; Hemostasis:</span>
                    <strong className="text-emerald-700">Hemostasis Intact (Sterile Dressing)</strong>
                  </div>
                  <div className="p-2.5 bg-white border border-zinc-200 rounded-lg">
                    <span className="text-[10px] text-zinc-500 block">Estimated Blood Loss (EBL):</span>
                    <strong className="text-zinc-900">&lt; 10 mL (Minimal)</strong>
                  </div>
                </div>
              </div>

              {/* Hardware & Implants Deployed */}
              <div className="space-y-1.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-800 flex items-center gap-1.5">
                  <Package className="w-3.5 h-3.5 text-indigo-600" />
                  Hardware, Implants &amp; Embolics Deployed
                </h3>
                <div className="p-3 bg-indigo-50/40 border border-indigo-200 rounded-xl text-xs space-y-1 text-indigo-950">
                  <p>• <strong>Primary Kit:</strong> {selectedProcedure.sheathDefault || "Introducer Sheath"} + {selectedProcedure.cathetersAndWires || "Standard Guidewires & Catheters"}</p>
                  {selectedProcedure.microcatheterSystem && (
                    <p>• <strong>Microcatheter System:</strong> {selectedProcedure.microcatheterSystem}</p>
                  )}
                  {selectedProcedure.embolicOrImplants && (
                    <p>• <strong>Implants / Embolics:</strong> {selectedProcedure.embolicOrImplants}</p>
                  )}
                </div>
              </div>

              {/* Immediate Post-Operative Ward Handoff & Red Flags */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 bg-zinc-50 border border-zinc-200 rounded-xl space-y-1.5">
                  <div className="font-bold text-zinc-900 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    Immediate Post-Op Orders
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-zinc-700 text-[11px]">
                    <li>{selectedProcedure.postOpCare.immobilizationInstructions} ({selectedProcedure.postOpCare.immobilizationHours}h)</li>
                    <li>{selectedProcedure.postOpCare.hematomaChecks}</li>
                    <li>{selectedProcedure.postOpCare.hydrationProtocol}</li>
                  </ul>
                </div>

                <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl space-y-1.5">
                  <div className="font-bold text-amber-950 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                    Critical Red Flags (SOS Notification)
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-amber-900 text-[11px]">
                    {selectedProcedure.postOpCare.redFlags.slice(0, 3).map((rf, i) => (
                      <li key={i}>{rf}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Raw Formatted Text Area for Quick Inspection */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase text-zinc-500 tracking-wider">
                    Formatted Text View (e-Hospital / WhatsApp Ready)
                  </span>
                  <button
                    onClick={handleCopySummary}
                    className="text-[10px] font-semibold text-blue-600 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Copy className="w-3 h-3" /> Copy Text
                  </button>
                </div>
                <pre className="p-3 bg-zinc-900 text-zinc-100 rounded-xl font-mono text-[11px] whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto select-all">
                  {operativeSummaryText}
                </pre>
              </div>
            </div>
          )}

          {/* TAB 1: OPERATIVE NOTE PREVIEW (Institutional SMS Jaipur Letterhead Layout) */}
          {activeTab === "NOTE" && (
            <div className="bg-white border border-[#DADCE0] rounded-2xl p-6 sm:p-8 shadow-xs relative print:border-none print:shadow-none print:p-0 print:m-0 flex flex-col gap-6 text-zinc-900">
              {/* Header Badge & Action Controls (Hidden on Print) */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-zinc-200 print:hidden">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                  <span className="text-xs font-bold text-zinc-900">
                    Official SMS Hospital Operative Report (e-Hospital &amp; MAAY / RGHS Compliant)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyNote}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-lg hover:bg-blue-100 flex items-center gap-1.5 transition-colors cursor-pointer border border-blue-200"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copyFeedback || "Copy Text"}</span>
                  </button>
                  <button
                    onClick={handlePrint}
                    className="px-3.5 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Report</span>
                  </button>
                </div>
              </div>

              {/* Official SMS Hospital Letterhead */}
              <div className="border-b-2 border-zinc-900 pb-3 text-center flex flex-col items-center">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <img
                    src="/sms_hospital_logo.png"
                    alt="SMS Hospital Logo"
                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain shrink-0"
                  />
                  <div className="text-left">
                    <h1 className="text-xl sm:text-2xl font-black tracking-tight text-zinc-950 font-serif leading-tight">
                      SMS HOSPITAL &amp; MEDICAL COLLEGE, JAIPUR
                    </h1>
                    <p className="text-xs sm:text-sm font-bold text-zinc-800 tracking-tight mt-0.5">
                      DEPARTMENT OF INTERVENTIONAL RADIOLOGY
                    </p>
                  </div>
                </div>

                <div className="mt-1 px-3.5 py-0.5 rounded bg-zinc-100 print:bg-zinc-100 border border-zinc-300 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-zinc-800">
                  POST-OPERATIVE NOTES
                </div>
              </div>

              {/* Patient Identification & Case Header Grid */}
              <div className="border border-zinc-300 rounded-lg p-3.5 bg-zinc-50/50 print:bg-transparent text-xs grid grid-cols-2 sm:grid-cols-4 gap-y-2.5 gap-x-4">
                <div>
                  <span className="text-zinc-500 text-[11px] font-medium block">Patient Name:</span>
                  <input
                    type="text"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="Patient Name"
                    className="w-full bg-transparent font-bold text-zinc-950 text-sm border-b border-transparent hover:border-zinc-300 focus:border-blue-500 focus:outline-none print:border-none p-0"
                  />
                </div>
                <div>
                  <span className="text-zinc-500 text-[11px] font-medium block">Age / Sex:</span>
                  <div className="flex items-center gap-1">
                    <input
                      type="text"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="Age"
                      className="w-12 bg-transparent font-bold text-zinc-950 border-b border-transparent hover:border-zinc-300 focus:border-blue-500 focus:outline-none print:border-none p-0"
                    />
                    <span className="text-zinc-500 font-semibold">Y /</span>
                    <input
                      type="text"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      placeholder="Gender"
                      className="w-16 bg-transparent font-bold text-zinc-950 border-b border-transparent hover:border-zinc-300 focus:border-blue-500 focus:outline-none print:border-none p-0"
                    />
                  </div>
                </div>
                <div>
                  <span className="text-zinc-500 text-[11px] font-medium block">CR / UHID No.:</span>
                  <input
                    type="text"
                    value={crNumber}
                    onChange={(e) => setCrNumber(e.target.value)}
                    placeholder="CR / UHID"
                    className="w-full bg-transparent font-mono font-bold text-zinc-950 border-b border-transparent hover:border-zinc-300 focus:border-blue-500 focus:outline-none print:border-none p-0"
                  />
                </div>
                <div>
                  <span className="text-zinc-500 text-[11px] font-medium block">Ward / Bed:</span>
                  <input
                    type="text"
                    value={ipdBed}
                    onChange={(e) => setIpdBed(e.target.value)}
                    placeholder="Ward / Bed"
                    className="w-full bg-transparent font-bold text-zinc-950 border-b border-transparent hover:border-zinc-300 focus:border-blue-500 focus:outline-none print:border-none p-0"
                  />
                </div>
                <div>
                  <span className="text-zinc-500 text-[11px] font-medium block">Procedure Date:</span>
                  <input
                    type="date"
                    value={dateOfProcedure}
                    onChange={(e) => setDateOfProcedure(e.target.value)}
                    className="w-full bg-transparent font-bold text-zinc-950 border-b border-transparent hover:border-zinc-300 focus:border-blue-500 focus:outline-none print:border-none p-0"
                  />
                </div>
                <div>
                  <span className="text-zinc-500 text-[11px] font-medium block">Interventional Suite:</span>
                  <strong className="text-zinc-950">{selectedProcedure.modality} Cath-Lab Suite</strong>
                </div>
                <div>
                  <span className="text-zinc-500 text-[11px] font-medium block">Primary Operator:</span>
                  <input
                    type="text"
                    value={primaryOperator}
                    onChange={(e) => setPrimaryOperator(e.target.value)}
                    className="w-full bg-transparent font-bold text-zinc-950 border-b border-transparent hover:border-zinc-300 focus:border-blue-500 focus:outline-none print:border-none p-0"
                  />
                </div>
                <div>
                  <span className="text-zinc-500 text-[11px] font-medium block">Supervising Consultant:</span>
                  <input
                    type="text"
                    value={supervisingConsultant}
                    onChange={(e) => setSupervisingConsultant(e.target.value)}
                    className="w-full bg-transparent font-bold text-zinc-950 border-b border-transparent hover:border-zinc-300 focus:border-blue-500 focus:outline-none print:border-none p-0"
                  />
                </div>
              </div>

              {/* Procedure Title Banner - Center Aligned */}
              <div className="text-center py-2.5 px-4 bg-zinc-50 border border-zinc-200 rounded-lg print:border-zinc-300 print:bg-transparent">
                <h3 className="text-lg sm:text-xl font-extrabold text-zinc-950 tracking-tight leading-snug">
                  {selectedProcedure.title}
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-2 mt-1.5 text-xs font-semibold text-blue-800">
                  <span className="px-2 py-0.5 bg-blue-50 rounded text-blue-900 border border-blue-200">
                    Package Code: {selectedProcedure.maayRghsCompatibility.packageCode}
                  </span>
                  <span className="px-2 py-0.5 bg-zinc-100 rounded text-zinc-800 border border-zinc-200">
                    ICD-10: {selectedProcedure.maayRghsCompatibility.icd10}
                  </span>
                  {selectedProcedure.maayRghsCompatibility.tariffInr && (
                    <span className="px-2 py-0.5 bg-emerald-50 rounded text-emerald-900 border border-emerald-200">
                      Tariff: ₹{selectedProcedure.maayRghsCompatibility.tariffInr.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>

              {/* Comprehensive Operative Report (Fluid Single Paragraph Without Subheadings) */}
              <div className="space-y-4 text-xs">
                {/* Single Continuous Paragraph Post-Operative Notes */}
                <div className="flex flex-col gap-1.5">
                  <textarea
                    rows={6}
                    value={
                      customIntervention ||
                      buildProceduralNarrative(selectedProcedure, customFindings)
                    }
                    onChange={(e) => setCustomIntervention(e.target.value)}
                    className="w-full p-3.5 bg-zinc-50 border border-zinc-200 rounded-lg text-xs sm:text-[13px] text-zinc-900 leading-relaxed font-normal focus:bg-white focus:border-blue-500 focus:outline-none print:border-none print:p-0 print:bg-transparent resize-y text-justify"
                  />
                </div>

                {/* Advice Section with Clean Point-Wise Bullet Points */}
                <div className="flex flex-col gap-1.5 pt-1">
                  <h4 className="font-bold text-zinc-950 uppercase text-xs tracking-wider border-b border-zinc-300 pb-1">
                    Advice:
                  </h4>
                  <div className="p-3.5 bg-zinc-50 rounded-lg border border-zinc-200 space-y-2 text-zinc-800 text-xs sm:text-[12.5px] print:bg-transparent print:border-none print:p-0">
                    {buildAdviceBullets(selectedProcedure).map((bullet, idx) => {
                      const isRedFlag = bullet.startsWith("Red Flags:");
                      return (
                        <div key={idx} className="flex items-start gap-2.5">
                          <span className={isRedFlag ? "text-red-600 font-bold" : "text-zinc-600 font-bold"}>•</span>
                          <div className={isRedFlag ? "text-red-700 font-medium" : ""}>
                            {bullet}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Operator Sign-Off & Official Certification */}
              <div className="border border-zinc-400 rounded-lg p-4 bg-white mt-2 print:mt-4 break-inside-avoid print-break-inside-avoid">
                <h5 className="font-bold text-center text-xs uppercase tracking-wider text-zinc-950 mb-4 border-b border-zinc-300 pb-1">
                  OPERATOR &amp; SUPERVISING FACULTY CERTIFICATION
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2 text-xs">
                  <div className="flex flex-col justify-between border-t border-zinc-900 pt-2 min-h-[90px]">
                    <div>
                      <span className="font-bold text-zinc-950 block">Primary Operator:</span>
                      <span className="text-[11px] text-zinc-600 block">(Signature &amp; Timestamp)</span>
                    </div>
                    <div className="text-[11px] text-zinc-700 mt-4">
                      <div><strong>{primaryOperator}</strong></div>
                      <div>Date &amp; Time: {dateOfProcedure || "_____________"}</div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between border-t border-zinc-900 pt-2 min-h-[90px]">
                    <div>
                      <span className="font-bold text-zinc-950 block">Supervising Consultant:</span>
                      <span className="text-[11px] text-zinc-600 block">(Signature &amp; Official Stamp)</span>
                    </div>
                    <div className="text-[11px] text-zinc-700 mt-4">
                      <div><strong>{supervisingConsultant}</strong></div>
                      <div>Department of Interventional Radiology, SMS Hospital, Jaipur</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: BILINGUAL STATUTORY CONSENT */}
          {activeTab === "CONSENT" && consentTemplate && (
            <div className="bg-white border border-[#DADCE0] rounded-2xl p-6 shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#F1F3F4]">
                <div>
                  <h3 className="text-sm font-bold text-[#202124]">
                    {consentTemplate.nameEn}
                  </h3>
                  <p className="text-xs text-[#1A73E8] font-medium mt-0.5">
                    {consentTemplate.nameHi}
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#E8F0FE] text-[#1A73E8] text-[11px] font-bold">
                  NMC & SC Informed Consent Standard
                </span>
              </div>

              {/* Clinical Indication */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-[#F8F9FA] rounded-xl border border-[#DADCE0]">
                  <div className="font-bold text-[#202124] mb-1">Clinical Indication (English):</div>
                  <p className="text-[#3C4043]">{consentTemplate.indicationEn}</p>
                </div>
                <div className="p-3 bg-[#F8F9FA] rounded-xl border border-[#DADCE0]">
                  <div className="font-bold text-[#202124] mb-1">रोग व कारण (हिंदी):</div>
                  <p className="text-[#3C4043]">{consentTemplate.indicationHi}</p>
                </div>
              </div>

              {/* Procedure Description */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 bg-white rounded-xl border border-[#DADCE0]">
                  <div className="font-bold text-[#202124] mb-1">Procedural Steps (English):</div>
                  <p className="text-[#5F6368] leading-relaxed">{consentTemplate.descriptionEn}</p>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-[#DADCE0]">
                  <div className="font-bold text-[#202124] mb-1">प्रक्रिया का विवरण (हिंदी):</div>
                  <p className="text-[#5F6368] leading-relaxed">{consentTemplate.descriptionHi}</p>
                </div>
              </div>

              {/* Expected Benefits */}
              <div className="p-4 bg-[#E6F4EA] border border-[#CEEAD6] rounded-xl">
                <div className="text-xs font-bold text-[#137333] mb-2">
                  Expected Clinical Benefits (प्रत्याशित लाभ):
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <ul className="space-y-1 list-disc pl-4 text-[#137333]">
                    {consentTemplate.benefitsEn.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                  <ul className="space-y-1 list-disc pl-4 text-[#137333]">
                    {consentTemplate.benefitsHi.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Specific Procedure Risks */}
              <div className="p-4 bg-[#FCE8E6] border border-[#FAD2CF] rounded-xl">
                <div className="text-xs font-bold text-[#C5221F] mb-2">
                  Specific Procedure Risks & Complications (प्रक्रिया संबंधी विशिष्ट जोखिम):
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <ul className="space-y-1 list-disc pl-4 text-[#C5221F]">
                    {consentTemplate.specificRisksEn.map((r, idx) => (
                      <li key={idx}>{r}</li>
                    ))}
                  </ul>
                  <ul className="space-y-1 list-disc pl-4 text-[#C5221F]">
                    {consentTemplate.specificRisksHi.map((r, idx) => (
                      <li key={idx}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Anesthesia & Sedation */}
              <div className="p-3.5 bg-[#FEF7E0] border border-[#FEEFC3] rounded-xl text-xs">
                <div className="font-bold text-[#B06000] mb-1">
                  Anesthesia / Sedation Type (बेहोशी का प्रकार):
                </div>
                <div className="text-[#B06000]">
                  <strong>English:</strong> {consentTemplate.sedationTypeEn}
                </div>
                <div className="text-[#B06000] mt-0.5">
                  <strong>हिंदी:</strong> {consentTemplate.sedationTypeHi}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CLINICAL PROTOCOL, HARDWARE & POST-OP ORDERS */}
          {activeTab === "PROTOCOL" && (
            <div className="bg-white border border-[#DADCE0] rounded-2xl p-6 shadow-xs space-y-5">
              <div className="pb-3 border-b border-[#F1F3F4]">
                <h3 className="text-sm font-bold text-[#202124]">
                  Clinical Hardware Requisition & Nursing Post-Op Plan
                </h3>
                <p className="text-xs text-[#5F6368]">
                  Standardized technical equipment and surveillance parameters for {selectedProcedure.title}
                </p>
              </div>

              {/* Technical Hardware Stack */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-2">
                  <div className="font-bold text-[#202124]">Vascular Access & Sheaths</div>
                  <div>
                    <span className="text-[#5F6368]">Access Site: </span>
                    <span className="font-medium text-[#202124]">{selectedProcedure.accessSiteDefault}</span>
                  </div>
                  <div>
                    <span className="text-[#5F6368]">Sheath: </span>
                    <span className="font-medium text-[#202124]">{selectedProcedure.sheathDefault}</span>
                  </div>
                  <div>
                    <span className="text-[#5F6368]">Sedation: </span>
                    <span className="font-medium text-[#202124]">{selectedProcedure.sedation}</span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-2">
                  <div className="font-bold text-[#202124]">Catheters & Embolic Hardware</div>
                  <div>
                    <span className="text-[#5F6368]">Catheters & Wires: </span>
                    <span className="font-medium text-[#202124]">{selectedProcedure.cathetersAndWires}</span>
                  </div>
                  {selectedProcedure.microcatheterSystem && (
                    <div>
                      <span className="text-[#5F6368]">Microcatheter: </span>
                      <span className="font-medium text-[#1A73E8]">{selectedProcedure.microcatheterSystem}</span>
                    </div>
                  )}
                  {selectedProcedure.embolicOrImplants && (
                    <div>
                      <span className="text-[#5F6368]">Embolic / Implants: </span>
                      <span className="font-medium text-[#137333]">{selectedProcedure.embolicOrImplants}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Nursing Post-Op Orders */}
              <div className="p-4 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-3 text-xs">
                <div className="font-bold text-[#202124] flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#1A73E8]" />
                  <span>Mandatory Post-Operative Nursing Protocol</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-[#1A73E8]">1.</span>
                    <div>
                      <strong>Puncture Site & Limb Immobilization: </strong>
                      Strict flat bedrest; do not move or flex limb for {selectedProcedure.postOpCare.immobilizationHours} hours. {selectedProcedure.postOpCare.immobilizationInstructions}
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="font-bold text-[#1A73E8]">2.</span>
                    <div>
                      <strong>Hematoma & Pulse Surveillance: </strong>
                      {selectedProcedure.postOpCare.hematomaChecks}
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="font-bold text-[#1A73E8]">3.</span>
                    <div>
                      <strong>Required Post-Op Imaging: </strong>
                      <span className="text-[#B06000] font-medium">
                        {selectedProcedure.postOpCare.requiredImaging || "Routine ward review; bedside imaging on clinical indication."}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="font-bold text-[#1A73E8]">4.</span>
                    <div>
                      <strong>Hydration Protocol: </strong>
                      {selectedProcedure.postOpCare.hydrationProtocol}
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="font-bold text-[#1A73E8]">5.</span>
                    <div>
                      <strong>Medications Kit: </strong>
                      <div className="mt-1 flex flex-wrap gap-1.5">
                        {selectedProcedure.postOpCare.medications.map((m, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 bg-white border border-[#DADCE0] rounded text-[11px] font-medium text-[#202124]"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="font-bold text-[#C5221F]">6.</span>
                    <div>
                      <strong className="text-[#C5221F]">Emergency Red Flags: </strong>
                      <span className="text-[#C5221F]">
                        {selectedProcedure.postOpCare.redFlags.join("; ")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: LINKED RISK CALCULATOR */}
          {activeTab === "CALCULATOR" && linkedCalculator && (
            <div className="bg-white border border-[#DADCE0] rounded-2xl p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#F1F3F4]">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-[#1A73E8]" />
                  <div>
                    <h3 className="text-sm font-bold text-[#202124]">
                      {linkedCalculator.name}
                    </h3>
                    <p className="text-xs text-[#5F6368]">{linkedCalculator.system} • {linkedCalculator.guidelineAuthority}</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-[#E8F0FE] text-[#1A73E8] rounded-full text-xs font-semibold">
                  {linkedCalculator.shortName}
                </span>
              </div>

              <div className="p-4 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] space-y-2 text-xs">
                <div className="font-bold text-[#202124]">Formula & Mathematical Model:</div>
                <code className="block p-2.5 bg-white rounded border border-[#DADCE0] font-mono text-[11px] text-[#1A73E8]">
                  {linkedCalculator.formulaDescription}
                </code>
                <p className="text-[#5F6368] text-xs leading-relaxed pt-1">
                  {linkedCalculator.summary}
                </p>
              </div>

              <div className="p-4 bg-[#E8F0FE] border border-[#D2E3FC] rounded-xl text-xs flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#1A73E8]">Interactive Runner Available</div>
                  <div className="text-[11px] text-[#5F6368]">
                    Launch the dedicated calculator suite to run real-time patient lab values and calculate procedural risk scores.
                  </div>
                </div>
                <a
                  href={`/dashboard/calculators?calc=${linkedCalculator.id}`}
                  className="px-3 py-1.5 bg-[#1A73E8] text-white rounded-lg font-medium hover:bg-[#1557B0] transition-colors flex items-center gap-1"
                >
                  <span>Open Calculator</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Light subtle footer attribution */}
      <div className="text-center py-4 text-xs text-zinc-400 print:hidden select-none">
        Made by Dr. Neel Yadav
      </div>
    </div>
  );
}
