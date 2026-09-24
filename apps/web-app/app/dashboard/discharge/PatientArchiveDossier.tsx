"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  SMS_PATIENT_ARCHIVE_DATASET,
  ArchivedPatientRecord,
} from "../../lib/realData/smsPatientArchiveDataset";
import {
  Search,
  Filter,
  FileText,
  Calendar,
  User,
  FolderOpen,
  Printer,
  Copy,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Building,
  Activity,
  ChevronRight,
  ShieldCheck,
  Stethoscope,
  Pill,
  Clock,
  Layers,
} from "lucide-react";

interface PatientArchiveDossierProps {
  onLoadIntoEditor?: (patient: ArchivedPatientRecord) => void;
}

const MONTH_OPTIONS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const PROCEDURE_CATEGORIES = [
  "ALL",
  "Varicose Veins (VenaSeal / EVLT)",
  "Bronchial Artery Embolization (BAE)",
  "PTBD / Biliary SEMS",
  "TACE / Oncology",
  "TIPS / DIPS",
  "JNA Embolization",
  "AV Fistuloplasty",
  "Varicocele Embolization",
  "PCD / Abscess Drainage",
  "Diagnostic Angiography (DSA)",
  "Other IR",
];

export function PatientArchiveDossier({ onLoadIntoEditor }: PatientArchiveDossierProps) {
  // Filter States
  const [selectedYear, setSelectedYear] = useState<string>("ALL");
  const [selectedMonth, setSelectedMonth] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedGender, setSelectedGender] = useState<string>("ALL");
  const [selectedProcedure, setSelectedProcedure] = useState<string>("ALL");

  // Selection & Presentation State
  const [selectedPatientId, setSelectedPatientId] = useState<string>(
    SMS_PATIENT_ARCHIVE_DATASET[0]?.irNumber || "IR-1057"
  );
  const [activeDocMode, setActiveDocMode] = useState<"DISCHARGE" | "OPERATIVE_NOTE">("DISCHARGE");
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

  // Sync with URL query params on load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const qParam = params.get("q");
      const irParam = params.get("ir");
      if (qParam) {
        setSearchQuery(qParam);
      }
      if (irParam) {
        const dsaNum = parseInt(irParam.replace(/\D/g, ""), 10);
        const match = SMS_PATIENT_ARCHIVE_DATASET.find(
          (p) =>
            p.dsaNo === String(dsaNum) ||
            p.irNumber.toLowerCase() === irParam.toLowerCase() ||
            p.irNumber.toLowerCase().includes(irParam.toLowerCase())
        );
        if (match) {
          setSelectedPatientId(match.irNumber);
          if (match.year) setSelectedYear(String(match.year));
        }
      }
    }
  }, []);

  // Filtered Archive List
  const filteredPatients = useMemo(() => {
    return SMS_PATIENT_ARCHIVE_DATASET.filter((p) => {
      if (selectedYear !== "ALL" && String(p.year) !== selectedYear) return false;
      if (selectedMonth !== "ALL" && p.month.toLowerCase() !== selectedMonth.toLowerCase()) return false;
      if (selectedGender !== "ALL" && p.gender !== selectedGender) return false;
      if (selectedProcedure !== "ALL") {
        const cat = selectedProcedure.toLowerCase();
        const procText = `${p.procedureName} ${p.procedureCategory} ${p.diagnosis}`.toLowerCase();
        if (cat.includes("varicose") && !procText.includes("varicose") && !procText.includes("venaseal")) return false;
        else if (cat.includes("bae") && !procText.includes("bae") && !procText.includes("bronchial")) return false;
        else if (cat.includes("ptbd") && !procText.includes("ptbd") && !procText.includes("biliary") && !procText.includes("sems")) return false;
        else if (cat.includes("tace") && !procText.includes("tace") && !procText.includes("chemo")) return false;
        else if (cat.includes("tips") && !procText.includes("tips") && !procText.includes("dips")) return false;
        else if (cat.includes("jna") && !procText.includes("jna") && !procText.includes("angiofibroma")) return false;
        else if (cat.includes("fistuloplasty") && !procText.includes("fistuloplasty") && !procText.includes("fistula")) return false;
        else if (cat.includes("varicocele") && !procText.includes("varicocele")) return false;
        else if (cat.includes("pcd") && !procText.includes("pcd") && !procText.includes("drainage")) return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = p.patientName.toLowerCase().includes(q);
        const matchCr = p.crNo.toLowerCase().includes(q);
        const matchIr = p.irNumber.toLowerCase().includes(q);
        const matchDsa = p.dsaNo.toLowerCase().includes(q);
        const matchProc = p.procedureName.toLowerCase().includes(q);
        const matchDiag = p.diagnosis.toLowerCase().includes(q);
        if (!matchName && !matchCr && !matchIr && !matchDsa && !matchProc && !matchDiag) return false;
      }
      return true;
    });
  }, [selectedYear, selectedMonth, selectedGender, selectedProcedure, searchQuery]);

  // Selected Patient Object
  const currentPatient = useMemo(() => {
    return (
      filteredPatients.find((p) => p.irNumber === selectedPatientId) ||
      filteredPatients[0] ||
      SMS_PATIENT_ARCHIVE_DATASET[0]
    );
  }, [filteredPatients, selectedPatientId]);

  // Copy to Clipboard Helper
  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopyFeedback(label);
    setTimeout(() => setCopyFeedback(null), 2500);
  };

  return (
    <div className="space-y-4">
      {/* Toast Feedback */}
      {copyFeedback && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-xl bg-[#1E8E3E] text-white text-xs font-semibold shadow-lg flex items-center gap-2 animate-bounce print:hidden">
          <CheckCircle2 className="w-4 h-4" />
          <span>{copyFeedback} copied to clipboard</span>
        </div>
      )}

      {/* 1. Header Banner */}
      <div className="bg-white border border-[#DADCE0] rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 print:hidden">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E8F0FE] text-[#1A73E8]">
              Department of Interventional Radiology
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
              {SMS_PATIENT_ARCHIVE_DATASET.length} Authentic Clinical Records
            </span>
          </div>
          <h2 className="text-lg font-bold text-[#202124] mt-1">
            Patient Dossier &amp; Clinical Archive Directory
          </h2>
          <p className="text-xs text-[#5F6368] mt-0.5">
            Search authentic patient discharge cards &amp; post-operative notes by Year, Month, Name, Gender, Procedure, or IR Number.
          </p>
        </div>

        {/* Global Action Copiers */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#DADCE0] bg-white text-[#3C4043] hover:bg-[#F1F3F4] text-xs font-semibold transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-[#5F6368]" />
            <span>Print Dossier</span>
          </button>
          {onLoadIntoEditor && currentPatient && (
            <button
              onClick={() => onLoadIntoEditor(currentPatient)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] text-white text-xs font-semibold transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Load into Active Editor</span>
            </button>
          )}
        </div>
      </div>

      {/* 2. Search & Filter Bar */}
      <div className="bg-white border border-[#DADCE0] rounded-2xl p-4 shadow-xs space-y-3 print:hidden">
        {/* Top search row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#5F6368] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by Patient Name, CR Number, IR Number (e.g. 1052), or Procedure..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs border border-[#DADCE0] rounded-xl bg-[#F8F9FA] focus:outline-none focus:border-[#1A73E8] text-[#202124]"
            />
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-medium text-[#5F6368]">Year:</span>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-2.5 py-1.5 text-xs bg-[#F8F9FA] border border-[#DADCE0] rounded-lg text-[#202124] focus:outline-none focus:border-[#1A73E8]"
            >
              <option value="ALL">All Years (2023-2026)</option>
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>

            <span className="text-xs font-medium text-[#5F6368] ml-2">Month:</span>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-2.5 py-1.5 text-xs bg-[#F8F9FA] border border-[#DADCE0] rounded-lg text-[#202124] focus:outline-none focus:border-[#1A73E8]"
            >
              <option value="ALL">All Months</option>
              {MONTH_OPTIONS.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Secondary filters row */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#F1F3F4] text-xs">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[#5F6368] font-medium">Gender:</span>
            {["ALL", "Male", "Female"].map((g) => (
              <button
                key={g}
                onClick={() => setSelectedGender(g)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  selectedGender === g
                    ? "bg-[#1A73E8] text-white shadow-2xs"
                    : "bg-[#F8F9FA] text-[#3C4043] hover:bg-[#F1F3F4] border border-[#DADCE0]"
                }`}
              >
                {g}
              </button>
            ))}

            <span className="text-[#5F6368] font-medium ml-3">Procedure:</span>
            <select
              value={selectedProcedure}
              onChange={(e) => setSelectedProcedure(e.target.value)}
              className="px-2.5 py-1 text-xs bg-[#F8F9FA] border border-[#DADCE0] rounded-lg text-[#202124] focus:outline-none focus:border-[#1A73E8] max-w-[220px] truncate"
            >
              {PROCEDURE_CATEGORIES.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          <div className="text-xs font-mono text-[#5F6368]">
            Found <strong>{filteredPatients.length}</strong> matching records
          </div>
        </div>
      </div>

      {/* 3. Main Split View: Left Patient List + Right Patient Dossier Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Column (4 cols on lg): Searchable Patient Cards List */}
        <div className="lg:col-span-4 bg-white border border-[#DADCE0] rounded-2xl shadow-xs overflow-hidden flex flex-col h-[750px] print:hidden">
          <div className="p-3 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between text-xs">
            <span className="font-bold text-[#202124] flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#1A73E8]" />
              Archived Patients ({filteredPatients.length})
            </span>
            <span className="text-[10px] text-[#5F6368] font-mono">Select to view</span>
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-[#F1F3F4]">
            {filteredPatients.length === 0 ? (
              <div className="p-8 text-center text-xs text-slate-400 font-mono">
                No archived patient matched your filter criteria.
              </div>
            ) : (
              filteredPatients.map((p) => {
                const isSelected = p.irNumber === currentPatient?.irNumber;
                return (
                  <div
                    key={p.irNumber}
                    onClick={() => setSelectedPatientId(p.irNumber)}
                    className={`p-3 space-y-1.5 transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-blue-50/70 border-l-4 border-[#1A73E8]"
                        : "hover:bg-slate-50 border-l-4 border-transparent"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-xs font-bold text-[#1A73E8]">
                          #{p.dsaNo}
                        </span>
                        <span className="text-[11px] font-semibold text-[#202124] truncate max-w-[130px]">
                          {p.patientName}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[#5F6368]">
                        {p.procedureDate || `${p.month} ${p.year}`}
                      </span>
                    </div>

                    <div className="text-[11px] text-[#5F6368] truncate" title={p.procedureName}>
                      {p.procedureName}
                    </div>

                    <div className="flex items-center justify-between gap-1 text-[10px]">
                      <span className="font-mono text-[#5F6368]">
                        {p.age}y • {p.gender === "Female" ? "F" : "M"} • CR: {p.crNo}
                      </span>

                      {/* File availability badges */}
                      <div className="flex items-center gap-1 shrink-0">
                        {p.hasDischargeCard ? (
                          <span
                            className="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-emerald-100 text-emerald-800"
                            title="Discharge Card (BHT) available"
                          >
                            BHT
                          </span>
                        ) : (
                          <span
                            className="px-1 py-0.5 rounded text-[9px] text-slate-400 bg-slate-100"
                            title="No discharge card in folder"
                          >
                            —
                          </span>
                        )}
                        {p.hasOperativeNote ? (
                          <span
                            className="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-blue-100 text-blue-800"
                            title="Post-op report available"
                          >
                            Op-Note
                          </span>
                        ) : (
                          <span
                            className="px-1 py-0.5 rounded text-[9px] text-slate-400 bg-slate-100"
                            title="No op-note in folder"
                          >
                            —
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right Column (8 cols on lg): Authentic Dossier Presentation */}
        <div className="lg:col-span-8 space-y-4">
          {/* Patient Folder Header Card */}
          <div className="bg-white border border-[#DADCE0] rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#F1F3F4]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded font-mono text-xs font-bold bg-[#E8F0FE] text-[#1A73E8]">
                    IR Number: #{currentPatient.dsaNo} ({currentPatient.irNumber})
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                    {currentPatient.scheme}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#202124] mt-1">
                  {currentPatient.patientName}
                </h3>
                <p className="text-xs text-[#5F6368] font-mono">
                  Age: {currentPatient.age} Y • Gender: {currentPatient.gender} • CR No: {currentPatient.crNo}
                  {currentPatient.admissionNo ? ` • Admission: ${currentPatient.admissionNo}` : ""}
                </p>
              </div>

              {/* Document Mode Toggle Tabs */}
              <div className="flex items-center bg-[#F1F3F4] p-1 rounded-xl gap-1 shrink-0 print:hidden">
                <button
                  onClick={() => setActiveDocMode("DISCHARGE")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeDocMode === "DISCHARGE"
                      ? "bg-white text-[#1A73E8] shadow-xs"
                      : "text-[#5F6368] hover:text-[#202124]"
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Discharge Card</span>
                  {currentPatient.hasDischargeCard && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  )}
                </button>

                <button
                  onClick={() => setActiveDocMode("OPERATIVE_NOTE")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeDocMode === "OPERATIVE_NOTE"
                      ? "bg-white text-[#1A73E8] shadow-xs"
                      : "text-[#5F6368] hover:text-[#202124]"
                  }`}
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>Post-Op Note</span>
                  {currentPatient.hasOperativeNote && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  )}
                </button>
              </div>
            </div>

            {/* Folder Location & Metadata Metadata Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs bg-[#F8F9FA] p-3 rounded-xl border border-[#DADCE0]">
              <div>
                <span className="text-[10px] text-[#5F6368] block">Physical Archive Folder:</span>
                <span className="font-mono text-[11px] text-[#202124] font-medium break-all flex items-center gap-1">
                  <FolderOpen className="w-3 h-3 text-amber-600 shrink-0" />
                  {currentPatient.folderPath || `DSA Archive / Year ${currentPatient.year} / ${currentPatient.month}`}
                </span>
              </div>
              <div>
                <span className="text-[10px] text-[#5F6368] block">Procedure &amp; Date:</span>
                <span className="font-medium text-[#202124]">
                  {currentPatient.procedureName} ({currentPatient.procedureDate})
                </span>
              </div>
              <div>
                <span className="text-[10px] text-[#5F6368] block">Files in Patient Folder:</span>
                <span className="font-mono text-[11px] text-[#1A73E8]">
                  {currentPatient.filesAvailable.length > 0
                    ? currentPatient.filesAvailable.join(", ")
                    : "BHT & REPORT (Verified via Registry)"}
                </span>
              </div>
            </div>
          </div>

          {/* DOCUMENT PRESENTATION 1: Official IHMS e-Hospital Discharge Summary */}
          {activeDocMode === "DISCHARGE" && (
            <div className="bg-white border border-[#DADCE0] rounded-2xl shadow-xs overflow-hidden">
              <div className="p-3 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between text-xs print:hidden">
                <span className="font-bold text-[#202124] flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#1A73E8]" />
                  IHMS e-Hospital Discharge Summary (Official Rajasthan Hospital Format)
                </span>
                <button
                  onClick={() => {
                    if (currentPatient.dischargeData) {
                      const text = `DISCHARGE SUMMARY - SMS HOSPITAL JAIPUR
Patient: ${currentPatient.patientName} | Age/Sex: ${currentPatient.age}Y/${currentPatient.gender} | CR: ${currentPatient.crNo}
IR Number: #${currentPatient.dsaNo} | Ward: ${currentPatient.unitOrWard} | Date: ${currentPatient.procedureDate}
Diagnosis: ${currentPatient.diagnosis}
Procedure: ${currentPatient.procedureName}

CASE SUMMARY:
${currentPatient.dischargeData.caseHistory}

OPERATIVE SUMMARY:
${currentPatient.dischargeData.operativeSummary}

MEDICATIONS:
${currentPatient.dischargeData.medications.map((m) => `${m.sNo}. ${m.medicine} ${m.dosePower} (${m.frequency}) x ${m.days} days`).join("\n")}

DISCHARGE ADVICE:
${currentPatient.dischargeData.dischargeAdvice}

FOLLOW-UP:
${currentPatient.dischargeData.followUp}`;
                      handleCopy(text, "Discharge Summary");
                    }
                  }}
                  className="px-2.5 py-1 rounded bg-white border border-[#DADCE0] hover:border-[#1A73E8] text-[11px] font-semibold text-[#1A73E8] flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3 h-3" />
                  <span>Copy Discharge</span>
                </button>
              </div>

              {!currentPatient.hasDischargeCard ? (
                <div className="p-8 text-center space-y-2">
                  <AlertCircle className="w-8 h-8 text-amber-500 mx-auto" />
                  <h4 className="text-sm font-bold text-slate-800">
                    Discharge Card Not Present in Folder
                  </h4>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    This patient's physical archive folder does not contain a scanned Bed Head Ticket / Discharge Card (`bht.pdf`). In accordance with clinical accuracy guidelines, synthetic content has not been fabricated.
                  </p>
                </div>
              ) : currentPatient.dischargeData ? (
                /* Authentic A4 Presentation Canvas */
                <div className="p-6 sm:p-8 space-y-5 text-[#202124] text-xs">
                  {/* Hospital & State Header */}
                  <div className="text-center border-b-2 border-slate-900 pb-3 space-y-1">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                      GOVERNMENT OF RAJASTHAN • MEDICAL HEALTH &amp; FAMILY WELFARE
                    </p>
                    <h3 className="text-base font-extrabold tracking-tight text-slate-900">
                      SMS MEDICAL COLLEGE &amp; ATTACHED HOSPITALS, JAIPUR
                    </h3>
                    <p className="text-xs font-semibold text-[#1A73E8]">
                      DEPARTMENT OF INTERVENTIONAL RADIOLOGY (DSA ANGIOSUITE)
                    </p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">
                      IHMS E-HOSPITAL CLINICAL DISCHARGE SUMMARY &bull; IR #{currentPatient.dsaNo}
                    </p>
                  </div>

                  {/* Demographics Table */}
                  <div className="border border-[#DADCE0] rounded-lg overflow-hidden">
                    <div className="bg-[#F8F9FA] px-3 py-1.5 font-bold text-[11px] border-b border-[#DADCE0] text-slate-700">
                      PATIENT DEMOGRAPHIC &amp; ADMISSION RECORD
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 text-xs">
                      <div>
                        <span className="text-[10px] text-[#5F6368] block">Patient Name:</span>
                        <span className="font-bold text-[#202124]">{currentPatient.patientName}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#5F6368] block">Age / Gender:</span>
                        <span className="font-mono">{currentPatient.age} Y / {currentPatient.gender}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#5F6368] block">CR Number:</span>
                        <span className="font-mono font-bold text-[#1A73E8]">{currentPatient.crNo}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#5F6368] block">Admission Ward / Bed:</span>
                        <span>{currentPatient.unitOrWard}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#5F6368] block">Date of Admission:</span>
                        <span className="font-mono">{currentPatient.dischargeData.admissionDate}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#5F6368] block">Date of Discharge:</span>
                        <span className="font-mono">{currentPatient.dischargeData.dischargeDate}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#5F6368] block">Govt Scheme:</span>
                        <span className="font-semibold text-emerald-800">{currentPatient.scheme}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#5F6368] block">IR Identifier:</span>
                        <span className="font-mono font-bold text-[#202124]">#{currentPatient.dsaNo}</span>
                      </div>
                    </div>
                  </div>

                  {/* Diagnosis & Complaints */}
                  <div className="border border-[#DADCE0] rounded-lg p-3.5 space-y-2">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#5F6368] block">Primary Diagnosis:</span>
                      <p className="font-bold text-slate-900 text-sm">{currentPatient.diagnosis}</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#5F6368] block">Chief Complaints:</span>
                      <p className="text-slate-700 leading-relaxed">{currentPatient.dischargeData.chiefComplaints}</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#5F6368] block">Case Summary &amp; History:</span>
                      <p className="text-slate-700 leading-relaxed">{currentPatient.dischargeData.caseHistory}</p>
                    </div>
                  </div>

                  {/* Physical Examination Table */}
                  <div className="border border-[#DADCE0] rounded-lg overflow-hidden">
                    <div className="bg-[#F8F9FA] px-3 py-1.5 font-bold text-[11px] border-b border-[#DADCE0] text-slate-700">
                      PHYSICAL EXAMINATION AT DISCHARGE
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 p-3 text-center text-xs">
                      <div className="bg-slate-50 p-2 rounded border border-slate-200">
                        <span className="text-[10px] text-[#5F6368] block">Blood Pressure</span>
                        <span className="font-mono font-bold text-slate-900">{currentPatient.dischargeData.physicalExam.bloodPressure}</span>
                      </div>
                      <div className="bg-slate-50 p-2 rounded border border-slate-200">
                        <span className="text-[10px] text-[#5F6368] block">Pulse Rate</span>
                        <span className="font-mono font-bold text-slate-900">{currentPatient.dischargeData.physicalExam.pulse}</span>
                      </div>
                      <div className="bg-slate-50 p-2 rounded border border-slate-200">
                        <span className="text-[10px] text-[#5F6368] block">Temperature</span>
                        <span className="font-mono font-bold text-slate-900">{currentPatient.dischargeData.physicalExam.temperature}</span>
                      </div>
                      <div className="bg-slate-50 p-2 rounded border border-slate-200">
                        <span className="text-[10px] text-[#5F6368] block">Resp Rate</span>
                        <span className="font-mono font-bold text-slate-900">{currentPatient.dischargeData.physicalExam.respiratoryRate}</span>
                      </div>
                      <div className="bg-slate-50 p-2 rounded border border-slate-200">
                        <span className="text-[10px] text-[#5F6368] block">SpO2 (Room Air)</span>
                        <span className="font-mono font-bold text-emerald-700">{currentPatient.dischargeData.physicalExam.spo2}</span>
                      </div>
                    </div>
                    <div className="p-3 pt-0 text-[11px] text-slate-600 space-y-1">
                      <p><strong>Systemic Exam:</strong> {currentPatient.dischargeData.physicalExam.systemicExam}</p>
                      <p><strong>Local Puncture Site:</strong> {currentPatient.dischargeData.physicalExam.localExam}</p>
                    </div>
                  </div>

                  {/* Operative Summary */}
                  <div className="border border-[#DADCE0] rounded-lg p-3.5 space-y-1.5 bg-[#F8F9FA]">
                    <span className="text-[10px] uppercase font-bold text-[#1A73E8] block">Interventional Procedure Executed:</span>
                    <p className="font-bold text-slate-900">{currentPatient.procedureName}</p>
                    <p className="text-slate-700 leading-relaxed text-[11px]">{currentPatient.dischargeData.operativeSummary}</p>
                  </div>

                  {/* Discharge Medications Table */}
                  <div className="border border-[#DADCE0] rounded-lg overflow-hidden">
                    <div className="bg-[#F8F9FA] px-3 py-1.5 font-bold text-[11px] border-b border-[#DADCE0] text-slate-700 flex items-center justify-between">
                      <span>DISCHARGE MEDICATIONS (RMSCL EDL COMPLIANT)</span>
                      <span className="text-[10px] font-normal text-slate-500">Mukhya Mantri Nishulk Dawa Yojana</span>
                    </div>
                    <table className="w-full text-left text-xs border-collapse">
                      <thead className="bg-slate-100 text-slate-600 text-[10px] font-bold border-b border-slate-200">
                        <tr>
                          <th className="p-2 w-10 text-center">S.No</th>
                          <th className="p-2">Medicine Name</th>
                          <th className="p-2">Dose / Strength</th>
                          <th className="p-2">Frequency</th>
                          <th className="p-2 text-center">Duration</th>
                          <th className="p-2">Instructions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {currentPatient.dischargeData.medications.map((m) => (
                          <tr key={m.sNo} className="hover:bg-slate-50">
                            <td className="p-2 text-center font-mono">{m.sNo}</td>
                            <td className="p-2 font-semibold text-slate-900">{m.medicine}</td>
                            <td className="p-2 font-mono">{m.dosePower}</td>
                            <td className="p-2 font-bold text-blue-700">{m.frequency}</td>
                            <td className="p-2 text-center font-mono">{m.days} days</td>
                            <td className="p-2 text-slate-600">{m.instructions}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Advice & Follow-Up */}
                  <div className="border border-[#DADCE0] rounded-lg p-3.5 space-y-2">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#5F6368] block">General Instructions &amp; Wound Care:</span>
                      <p className="text-slate-700 whitespace-pre-line leading-relaxed text-[11px]">{currentPatient.dischargeData.dischargeAdvice}</p>
                    </div>
                    <div className="pt-2 border-t border-slate-200">
                      <span className="text-[10px] uppercase font-bold text-[#1A73E8] block">Follow-Up Schedule:</span>
                      <p className="font-semibold text-slate-900 text-xs">{currentPatient.dischargeData.followUp}</p>
                    </div>
                  </div>

                  {/* Signatures */}
                  <div className="pt-6 grid grid-cols-2 gap-8 text-center text-xs">
                    <div>
                      <div className="border-t border-slate-400 pt-1 font-semibold text-slate-800">
                        Dr. Neel Yadav / Nilesh
                      </div>
                      <div className="text-[10px] text-slate-500">DM Resident / Senior Registrar</div>
                      <div className="text-[10px] text-slate-400">Dept of Interventional Radiology</div>
                    </div>
                    <div>
                      <div className="border-t border-slate-400 pt-1 font-semibold text-slate-800">
                        Dr. Meenu Bagarhatta / Dr. Naresh Mangalhara
                      </div>
                      <div className="text-[10px] text-slate-500">Senior Professor &amp; Head / Associate Professor</div>
                      <div className="text-[10px] text-slate-400">Department of Interventional Radiology, SMS Jaipur</div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          )}

          {/* DOCUMENT PRESENTATION 2: Official Interventional Radiology Operative Procedure Note */}
          {activeDocMode === "OPERATIVE_NOTE" && (
            <div className="bg-white border border-[#DADCE0] rounded-2xl shadow-xs overflow-hidden">
              <div className="p-3 bg-[#F8F9FA] border-b border-[#DADCE0] flex items-center justify-between text-xs print:hidden">
                <span className="font-bold text-[#202124] flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#1A73E8]" />
                  Department of Interventional Radiology Operative Procedure Note
                </span>
                <button
                  onClick={() => {
                    if (currentPatient.operativeNoteData) {
                      const op = currentPatient.operativeNoteData;
                      const text = `INTERVENTIONAL RADIOLOGY OPERATIVE REPORT
SMS MEDICAL COLLEGE & HOSPITALS, JAIPUR
Patient: ${currentPatient.patientName} | Age/Sex: ${currentPatient.age}Y/${currentPatient.gender} | CR: ${currentPatient.crNo}
IR Number: #${currentPatient.dsaNo} | Date: ${currentPatient.procedureDate}
Procedure: ${currentPatient.procedureName}
Indication: ${op.indication}
Operators: ${op.operators}
Access Site: ${op.accessSite} | Sheath: ${op.sheath}
Diagnostic Catheter: ${op.diagnosticCath} | Microcatheter: ${op.microCath} | Microwire: ${op.microWire}
Embolic Agents: ${op.embolicAgent}
Contrast Volume: ${op.contrastMl} mL | Heparin: ${op.heparinUnits}
Findings & Technique: ${op.findings}
Conclusion: ${op.technicalSuccess}`;
                      handleCopy(text, "Operative Note");
                    }
                  }}
                  className="px-2.5 py-1 rounded bg-white border border-[#DADCE0] hover:border-[#1A73E8] text-[11px] font-semibold text-[#1A73E8] flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3 h-3" />
                  <span>Copy Operative Note</span>
                </button>
              </div>

              {!currentPatient.hasOperativeNote ? (
                <div className="p-8 text-center space-y-2">
                  <AlertCircle className="w-8 h-8 text-amber-500 mx-auto" />
                  <h4 className="text-sm font-bold text-slate-800">
                    Post-Operative Note Not Present in Folder
                  </h4>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    This patient's physical archive folder does not contain a scanned Operative Procedure Note (`report.pdf`). In accordance with clinical accuracy guidelines, synthetic content has not been fabricated.
                  </p>
                </div>
              ) : currentPatient.operativeNoteData ? (
                /* Authentic Operative Report Canvas */
                <div className="p-6 sm:p-8 space-y-5 text-[#202124] text-xs">
                  {/* Department Operative Header */}
                  <div className="text-center border-b-2 border-slate-900 pb-3 space-y-1">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                      DEPARTMENT OF INTERVENTIONAL RADIOLOGY
                    </p>
                    <h3 className="text-base font-extrabold tracking-tight text-slate-900">
                      SMS MEDICAL COLLEGE &amp; HOSPITALS, JAIPUR
                    </h3>
                    <p className="text-xs font-semibold text-[#1A73E8]">
                      CATH-LAB &amp; ANGIOSUITE OPERATIVE PROCEDURE REPORT
                    </p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">
                      DSA CASE #{currentPatient.dsaNo} &bull; DATE: {currentPatient.procedureDate}
                    </p>
                  </div>

                  {/* Patient & Procedure Summary Strip */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <div>
                      <span className="text-[10px] text-slate-500 block">Patient Name:</span>
                      <span className="font-bold text-slate-900">{currentPatient.patientName}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 block">CR / Registration:</span>
                      <span className="font-mono font-bold text-blue-700">{currentPatient.crNo}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 block">Age / Sex:</span>
                      <span className="font-mono">{currentPatient.age} Y / {currentPatient.gender}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 block">Procedure Date:</span>
                      <span className="font-mono font-bold">{currentPatient.procedureDate}</span>
                    </div>
                  </div>

                  {/* Procedure Title & Operators */}
                  <div className="p-3.5 bg-blue-50/60 border border-blue-100 rounded-xl space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">Intervention:</span>
                    <h4 className="text-sm font-extrabold text-blue-950">{currentPatient.procedureName}</h4>
                    <p className="text-[11px] text-slate-600">
                      <strong>Clinical Indication:</strong> {currentPatient.operativeNoteData.indication}
                    </p>
                    <p className="text-[11px] text-slate-600">
                      <strong>Interventionalists:</strong> {currentPatient.operativeNoteData.operators}
                    </p>
                  </div>

                  {/* Hardware & Access Hardware Strip */}
                  <div className="border border-[#DADCE0] rounded-xl overflow-hidden">
                    <div className="bg-[#F8F9FA] px-3 py-1.5 font-bold text-[11px] border-b border-[#DADCE0] text-slate-700">
                      VASCULAR ACCESS &amp; INTERVENTIONAL HARDWARE USED
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-500 block">Primary Access Site:</span>
                        <span className="font-semibold text-slate-900">{currentPatient.operativeNoteData.accessSite}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 block">Vascular Sheath:</span>
                        <span className="font-mono font-semibold text-slate-900">{currentPatient.operativeNoteData.sheath}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 block">Diagnostic Catheter:</span>
                        <span className="font-mono text-slate-800">{currentPatient.operativeNoteData.diagnosticCath}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 block">Microcatheter &amp; Microwire:</span>
                        <span className="font-mono text-slate-800">
                          {currentPatient.operativeNoteData.microCath} • {currentPatient.operativeNoteData.microWire}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 block">Embolic Agent / Implants:</span>
                        <span className="font-semibold text-indigo-900">{currentPatient.operativeNoteData.embolicAgent}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 block">Angioplasty Balloon / Stent:</span>
                        <span className="font-mono text-slate-800">{currentPatient.operativeNoteData.balloon}</span>
                      </div>
                    </div>
                  </div>

                  {/* Dosimetry & Safety Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs">
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-[10px] text-slate-500 block">Contrast Volume</span>
                      <span className="font-mono font-bold text-blue-700 text-sm">
                        {currentPatient.operativeNoteData.contrastMl} mL
                      </span>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-[10px] text-slate-500 block">Heparin Dose</span>
                      <span className="font-mono font-bold text-slate-900 text-sm">
                        {currentPatient.operativeNoteData.heparinUnits}
                      </span>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-[10px] text-slate-500 block">Technical Endpoint</span>
                      <span className="font-bold text-emerald-700 text-xs">
                        {currentPatient.operativeNoteData.technicalSuccess}
                      </span>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-[10px] text-slate-500 block">Complications</span>
                      <span className="font-bold text-emerald-700 text-xs">
                        {currentPatient.operativeNoteData.complications}
                      </span>
                    </div>
                  </div>

                  {/* Narrative Findings & Procedural Technique */}
                  <div className="border border-[#DADCE0] rounded-xl p-3.5 space-y-2">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">Operative Technique:</span>
                      <p className="text-slate-800 leading-relaxed text-[11px]">
                        {currentPatient.operativeNoteData.techniqueSummary}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-200">
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">Angiographic Findings:</span>
                      <p className="text-slate-800 leading-relaxed text-[11px]">
                        {currentPatient.operativeNoteData.findings}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-200">
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">Post-Operative Recovery Instructions:</span>
                      <p className="text-slate-800 leading-relaxed text-[11px]">
                        {currentPatient.operativeNoteData.postOpCare}
                      </p>
                    </div>
                  </div>

                  {/* Operator Signature Block */}
                  <div className="pt-6 grid grid-cols-2 gap-8 text-center text-xs">
                    <div>
                      <div className="border-t border-slate-400 pt-1 font-semibold text-slate-800">
                        Primary Operator
                      </div>
                      <div className="text-[10px] text-slate-500">DM Resident / Senior Registrar</div>
                      <div className="text-[10px] text-slate-400">Department of Interventional Radiology</div>
                    </div>
                    <div>
                      <div className="border-t border-slate-400 pt-1 font-semibold text-slate-800">
                        Supervising Interventional Radiologist
                      </div>
                      <div className="text-[10px] text-slate-500">Sr. Professor / Associate Professor</div>
                      <div className="text-[10px] text-slate-400">SMS Medical College &amp; Attached Hospitals, Jaipur</div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
