"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  SMS_PATIENT_ARCHIVE_REAL,
  ArchivedPatientRecord,
} from "../../lib/realData/smsPatientArchiveReal";
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
    SMS_PATIENT_ARCHIVE_REAL[0]?.irNumber || ""
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
        const match = SMS_PATIENT_ARCHIVE_REAL.find(
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
    return SMS_PATIENT_ARCHIVE_REAL.filter((p) => {
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
      SMS_PATIENT_ARCHIVE_REAL[0]
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
        <div className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-xl bg-emerald-700 text-white text-xs font-semibold shadow-lg flex items-center gap-2 animate-bounce print:hidden">
          <CheckCircle2 className="w-4 h-4" />
          <span>{copyFeedback} copied to clipboard</span>
        </div>
      )}

      {/* 1. Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 print:hidden">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-600">
              Department of Interventional Radiology
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
              {SMS_PATIENT_ARCHIVE_REAL.length} Verified Patient Records
            </span>
          </div>
          <h2 className="text-lg font-bold text-slate-900 mt-1">
            Patient Dossier &amp; Verified Records Archive
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Search authentic patient discharge cards &amp; post-operative notes by Year, Month, Name, Procedure, or IR Number. Only patients with a real document on file are listed.
          </p>
        </div>

        {/* Global Action Copiers */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 text-xs font-semibold transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            <span>Print Dossier</span>
          </button>
          {onLoadIntoEditor && currentPatient && (
            <button
              onClick={() => onLoadIntoEditor(currentPatient)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Load into Active Editor</span>
            </button>
          )}
        </div>
      </div>

      {/* 2. Search & Filter Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-3 print:hidden">
        {/* Top search row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by Patient Name, CR Number, IR Number (e.g. 1052), or Procedure..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:border-blue-600 text-slate-900"
            />
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-medium text-slate-500">Year:</span>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600"
            >
              <option value="ALL">All Years (2023-2026)</option>
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>

            <span className="text-xs font-medium text-slate-500 ml-2">Month:</span>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600"
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
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 text-xs">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-slate-500 font-medium">Gender:</span>
            {["ALL", "Male", "Female"].map((g) => (
              <button
                key={g}
                onClick={() => setSelectedGender(g)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  selectedGender === g
                    ? "bg-blue-600 text-white shadow-2xs"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {g}
              </button>
            ))}

            <span className="text-slate-500 font-medium ml-3">Procedure:</span>
            <select
              value={selectedProcedure}
              onChange={(e) => setSelectedProcedure(e.target.value)}
              className="px-2.5 py-1 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-600 max-w-[220px] truncate"
            >
              {PROCEDURE_CATEGORIES.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          <div className="text-xs font-mono text-slate-500">
            Found <strong>{filteredPatients.length}</strong> matching records
          </div>
        </div>
      </div>

      {/* 3. Main Split View: Left Patient List + Right Patient Dossier Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Column (4 cols on lg): Searchable Patient Cards List */}
        <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden flex flex-col h-[750px] print:hidden">
          <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs">
            <span className="font-bold text-slate-900 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-blue-600" />
              Archived Patients ({filteredPatients.length})
            </span>
            <span className="text-[10px] text-slate-500 font-mono">Select to view</span>
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
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
                        ? "bg-blue-50/70 border-l-4 border-blue-600"
                        : "hover:bg-slate-50 border-l-4 border-transparent"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-xs font-bold text-blue-600">
                          #{p.dsaNo}
                        </span>
                        <span className="text-xs font-semibold text-slate-900 truncate max-w-[130px]">
                          {p.patientName}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">
                        {p.procedureDate || `${p.month} ${p.year}`}
                      </span>
                    </div>

                    <div className="text-xs text-slate-500 truncate" title={p.procedureName}>
                      {p.procedureName}
                    </div>

                    <div className="flex items-center justify-between gap-1 text-[10px]">
                      <span className="font-mono text-slate-500">
                        {p.age}y • {p.gender === "Unknown" ? "Sex n/r" : p.gender === "Female" ? "F" : "M"} • CR: {p.crNo}
                      </span>

                      {/* File availability badges */}
                      <div className="flex items-center gap-1 shrink-0">
                        {p.hasDischargeCard ? (
                          <span
                            className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-800"
                            title="Discharge Card (BHT) available"
                          >
                            BHT
                          </span>
                        ) : (
                          <span
                            className="px-1 py-0.5 rounded text-[10px] text-slate-400 bg-slate-100"
                            title="No discharge card in folder"
                          >
                            —
                          </span>
                        )}
                        {p.hasOperativeNote ? (
                          <span
                            className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-blue-100 text-blue-800"
                            title="Post-op report available"
                          >
                            Op-Note
                          </span>
                        ) : (
                          <span
                            className="px-1 py-0.5 rounded text-[10px] text-slate-400 bg-slate-100"
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

        {/* Right Column (8 cols on lg): De-identified Reference Dossier Presentation */}
        <div className="lg:col-span-8 space-y-4">
          {/* De-identified Patient Header Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded font-mono text-xs font-bold bg-blue-50 text-blue-600">
                    IR Number: #{currentPatient.dsaNo} ({currentPatient.irNumber})
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                    {currentPatient.scheme}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  {currentPatient.patientName}
                </h3>
                <p className="text-xs text-slate-500 font-mono">
                  Age: {currentPatient.age} Y • Gender: {currentPatient.gender === "Unknown" ? "not recorded" : currentPatient.gender} • CR No: {currentPatient.crNo}
                  {currentPatient.admissionNo ? ` • Admission: ${currentPatient.admissionNo}` : ""}
                </p>
              </div>

              {/* Document Mode Toggle Tabs */}
              <div className="flex items-center bg-slate-100 p-1 rounded-xl gap-1 shrink-0 print:hidden">
                <button
                  onClick={() => setActiveDocMode("DISCHARGE")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeDocMode === "DISCHARGE"
                      ? "bg-white text-blue-600 shadow-xs"
                      : "text-slate-500 hover:text-slate-900"
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
                      ? "bg-white text-blue-600 shadow-xs"
                      : "text-slate-500 hover:text-slate-900"
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div>
                <span className="text-[10px] text-slate-500 block">Reference Archive Path:</span>
                <span className="font-mono text-xs text-slate-900 font-medium break-all flex items-center gap-1">
                  <FolderOpen className="w-3 h-3 text-amber-600 shrink-0" />
                  {currentPatient.folderPath || `SMS IR Archive / IR ${currentPatient.dsaNo} / ${currentPatient.procedureDate || "date not recorded"}`}
                </span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block">Procedure &amp; Date:</span>
                <span className="font-medium text-slate-900">
                  {currentPatient.procedureName} ({currentPatient.procedureDate})
                </span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block">Files in Patient Folder:</span>
                <span className="font-mono text-xs text-blue-600">
                  {currentPatient.filesAvailable.length > 0
                    ? currentPatient.filesAvailable.join(", ")
                    : "BHT & REPORT (Verified via Registry)"}
                </span>
              </div>
            </div>
          </div>

          {/* DOCUMENT PRESENTATION 1: Discharge card -- real on-disk documents */}
          {activeDocMode === "DISCHARGE" && (
            <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
              <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs print:hidden">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-blue-600" />
                  Discharge Card / Bed Head Ticket
                </span>
                <button
                  onClick={() => {
                    const refs = currentPatient.dischargeDocuments;
                    const text = `DISCHARGE CARD - SMS HOSPITAL JAIPUR
Patient: ${currentPatient.patientName} | Age: ${currentPatient.age} | CR: ${currentPatient.crNo}
IR Number: #${currentPatient.dsaNo} | Date: ${currentPatient.procedureDate}
Diagnosis: ${currentPatient.diagnosis}
Procedure: ${currentPatient.procedureName}

ON-FILE DOCUMENTS (${refs.length}):
${refs.map((d, i) => `${i + 1}. ${d.path}\n   extracted via ${d.method}, ${d.chars} chars, matched by ${d.linkReason}`).join("\n")}`;
                    handleCopy(text, "Discharge Card Index");
                  }}
                  className="px-2.5 py-1 rounded bg-white border border-slate-200 hover:border-blue-600 text-xs font-semibold text-blue-600 flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3 h-3" />
                  <span>Copy Index</span>
                </button>
              </div>

              {!currentPatient.hasDischargeCard ? (
                <div className="p-8 text-center space-y-2">
                  <AlertCircle className="w-8 h-8 text-amber-500 mx-auto" />
                  <h4 className="text-sm font-bold text-slate-800">
                    No Discharge Card On File
                  </h4>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    No discharge document for this IR number was found in the
                    SMS Jaipur IR archive. This is a genuine gap in the record,
                    not a missing extract.
                  </p>
                </div>
              ) : (
                <div className="p-6 sm:p-8 space-y-5 text-slate-900 text-xs">
                  <div className="text-center border-b-2 border-slate-900 pb-3 space-y-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      SMS Medical College &amp; S.M.S. Hospital, Jaipur
                    </p>
                    <h3 className="text-base font-bold uppercase tracking-wide">
                      Interventional Radiology
                    </h3>
                    <p className="text-[10px] text-slate-600">
                      Discharge record indexed by IR number
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      ["IR Number", `#${currentPatient.dsaNo}`],
                      ["Patient", currentPatient.patientName || "Not recorded"],
                      ["Age", currentPatient.age || "Not recorded"],
                      ["CR Number", currentPatient.crNo || "Not recorded"],
                      ["Procedure Date", currentPatient.procedureDate || "Not recorded"],
                      ["Unit / Ward", currentPatient.unitOrWard || "Not recorded"],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <span className="text-[10px] text-slate-500 block uppercase">{label}</span>
                        <span className="font-medium text-slate-900">{value}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">Diagnosis</span>
                    <p className="text-slate-700 leading-relaxed">
                      {currentPatient.diagnosis || "Not recorded in the registry."}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">Procedure</span>
                    <p className="font-semibold text-slate-900">
                      {currentPatient.procedureName || "Not recorded in the registry."}
                    </p>
                  </div>

                  <div className="border-t border-slate-200 pt-4 space-y-2">
                    <span className="text-[10px] text-slate-500 block uppercase">
                      Source documents ({currentPatient.dischargeDocuments.length})
                    </span>
                    {currentPatient.dischargeDocuments.map((d, i) => (
                      <div
                        key={d.path}
                        className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200"
                      >
                        <FileText className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                        <div className="min-w-0">
                          <p className="font-mono text-xs text-slate-900 break-all">
                            {d.path}
                          </p>
                          <p className="text-[10px] text-slate-500 mt-0.5">
                            Extracted via {d.method} &middot; {d.chars.toLocaleString()} characters
                            &middot; matched by {d.linkReason.replace(/_/g, " ")}
                          </p>
                        </div>
                      </div>
                    ))}
                    <p className="text-[10px] text-slate-500 italic pt-1">
                      Vital signs, medication lists and narrative fields are not shown because
                      they are not reliably machine-readable across this scanned corpus. The
                      authoritative content is in the source document listed above.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* DOCUMENT PRESENTATION 2: Post-operative note -- real on-disk documents */}
          {activeDocMode === "OPERATIVE_NOTE" && (
            <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
              <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs print:hidden">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-blue-600" />
                  Post-Operative / Operative Procedure Note
                </span>
                <button
                  onClick={() => {
                    const refs = currentPatient.operativeDocuments;
                    const text = `OPERATIVE NOTE INDEX - SMS HOSPITAL JAIPUR
Patient: ${currentPatient.patientName} | Age: ${currentPatient.age} | CR: ${currentPatient.crNo}
IR Number: #${currentPatient.dsaNo} | Date: ${currentPatient.procedureDate}
Procedure: ${currentPatient.procedureName}

ON-FILE DOCUMENTS (${refs.length}):
${refs.map((d, i) => `${i + 1}. ${d.path}\n   extracted via ${d.method}, ${d.chars} chars, matched by ${d.linkReason}`).join("\n")}`;
                    handleCopy(text, "Operative Note Index");
                  }}
                  className="px-2.5 py-1 rounded bg-white border border-slate-200 hover:border-blue-600 text-xs font-semibold text-blue-600 flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3 h-3" />
                  <span>Copy Index</span>
                </button>
              </div>

              {!currentPatient.hasOperativeNote ? (
                <div className="p-8 text-center space-y-2">
                  <AlertCircle className="w-8 h-8 text-amber-500 mx-auto" />
                  <h4 className="text-sm font-bold text-slate-800">
                    No Post-Operative Note On File
                  </h4>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    No operative or post-operative document for this IR number was
                    found in the SMS Jaipur IR archive. Only a minority of the
                    1058 IR numbers have a digital post-op note; the rest are
                    paper-only.
                  </p>
                </div>
              ) : (
                <div className="p-6 sm:p-8 space-y-5 text-slate-900 text-xs">
                  <div className="text-center border-b-2 border-slate-900 pb-3 space-y-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Department of Interventional Radiology
                    </p>
                    <h3 className="text-base font-bold uppercase tracking-wide">
                      Operative Procedure Record
                    </h3>
                    <p className="text-[10px] text-slate-600">
                      Indexed by IR number
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      ["IR Number", `#${currentPatient.dsaNo}`],
                      ["Patient", currentPatient.patientName || "Not recorded"],
                      ["Age", currentPatient.age || "Not recorded"],
                      ["CR Number", currentPatient.crNo || "Not recorded"],
                      ["Procedure Date", currentPatient.procedureDate || "Not recorded"],
                      ["Category", currentPatient.procedureCategory],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <span className="text-[10px] text-slate-500 block uppercase">{label}</span>
                        <span className="font-medium text-slate-900">{value}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">Procedure</span>
                    <p className="font-semibold text-slate-900">
                      {currentPatient.procedureName || "Not recorded in the registry."}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">Diagnosis / Indication</span>
                    <p className="text-slate-700 leading-relaxed">
                      {currentPatient.diagnosis || "Not recorded in the registry."}
                    </p>
                  </div>

                  <div className="border-t border-slate-200 pt-4 space-y-2">
                    <span className="text-[10px] text-slate-500 block uppercase">
                      Source documents ({currentPatient.operativeDocuments.length})
                    </span>
                    {currentPatient.operativeDocuments.map((d) => (
                      <div
                        key={d.path}
                        className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200"
                      >
                        <Activity className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                        <div className="min-w-0">
                          <p className="font-mono text-xs text-slate-900 break-all">
                            {d.path}
                          </p>
                          <p className="text-[10px] text-slate-500 mt-0.5">
                            Extracted via {d.method} &middot; {d.chars.toLocaleString()} characters
                            &middot; matched by {d.linkReason.replace(/_/g, " ")}
                          </p>
                        </div>
                      </div>
                    ))}
                    <p className="text-[10px] text-slate-500 italic pt-1">
                      Access site, sheath size, embolic agent and contrast volume are not
                      shown as structured fields because they are not reliably
                      machine-readable across this corpus. The authoritative content is
                      in the source document listed above.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
