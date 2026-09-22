"use client";

import React, { useState, useMemo } from "react";
import {
  Stethoscope,
  FileText,
  GraduationCap,
  Search,
  Calendar,
  Clock,
  User,
  Phone,
  CheckCircle2,
  Copy,
  Printer,
  Sliders,
  ChevronRight,
  Filter,
  Download,
  Sparkles,
  Layers,
  ArrowRight,
  AlertCircle,
  FileCheck2,
} from "lucide-react";
import { useEndoflowStore, EndoflowPatient } from "./useEndoflowStore";
import { ALL_SIX_PAPERS_DATA, PaperCaseRecord } from "./publications/data/allSixPapersData";
import { ALL_PROCEDURE_DISCHARGE_TEMPLATES, ProcedureDischargeTemplate } from "./discharge/procedureDischargeTemplates";

// ============================================================================
// UNIFIED 3-PILLAR DASHBOARD
// Pillar 1: OPD Clinic Review & Booking
// Pillar 2: Operative & Procedure Notes
// Pillar 3: Publication Studio
// Clean neutral styling (Tailwind slate/zinc + single clinical blue-600)
// ============================================================================

export default function UnifiedVascFlowDashboard() {
  const [activePillar, setActivePillar] = useState<"opd" | "operative" | "publication">("opd");

  // Global store access
  const patients = useEndoflowStore((s) => s.patients);
  const ctReviews = useEndoflowStore((s) => s.ctReviews);
  const bookedCases = useEndoflowStore((s) => s.bookedCases);

  return (
    <div className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans antialiased">
      {/* 1. Slim, Clean Header with the 3 Core Pillars */}
      <header className="sticky top-0 z-30 bg-white border-b border-slate-200 px-4 sm:px-6 py-2.5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
              VF
            </div>
            <div>
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-semibold text-slate-900 text-sm tracking-tight">VascFlow IR</span>
                <span className="px-1.5 py-0.5 text-[10px] font-medium rounded bg-slate-100 text-slate-600 border border-slate-200">
                  Clinical &amp; Academic
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-normal">Interventional Radiology Suite</span>
            </div>
          </div>

          {/* 3 Pillar Segmented Switcher */}
          <nav className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => setActivePillar("opd")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activePillar === "opd"
                  ? "bg-white text-blue-700 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Stethoscope className="w-3.5 h-3.5" />
              <span>1. OPD &amp; Clinic Review</span>
              {ctReviews.length > 0 && (
                <span className="ml-1 px-1.5 py-0.2 text-[10px] rounded-full bg-blue-100 text-blue-800 font-mono">
                  {ctReviews.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setActivePillar("operative")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activePillar === "operative"
                  ? "bg-white text-blue-700 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>2. Operative Notes</span>
            </button>

            <button
              onClick={() => setActivePillar("publication")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activePillar === "publication"
                  ? "bg-white text-blue-700 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>3. Publication Studio</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 pb-20">
        {activePillar === "opd" && <OpdClinicPillar />}
        {activePillar === "operative" && <OperativeNotesPillar />}
        {activePillar === "publication" && <PublicationStudioPillar />}
      </main>
    </div>
  );
}

// ============================================================================
// PILLAR 1: OPD CLINIC REVIEW & BOOKING
// ============================================================================

function OpdClinicPillar() {
  const [search, setSearch] = useState("");
  const ctReviews = useEndoflowStore((s) => s.ctReviews);
  const convertCtReviewToBooking = useEndoflowStore((s) => s.convertCtReviewToBooking);

  // Form State for Active Patient
  const [selectedReviewId, setSelectedReviewId] = useState<string | null>(ctReviews[0]?.id || null);
  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState<number | "">("");
  const [gender, setGender] = useState<"Male" | "Female">("Male");
  const [crNumber, setCrNumber] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [clinicalHistory, setClinicalHistory] = useState("");
  const [disposition, setDisposition] = useState<"book" | "conservative" | "stat">("book");
  const [procedureTitle, setProcedureTitle] = useState("cTACE Chemoembolization");
  const [priority, setPriority] = useState<"Routine" | "Semi-Urgent" | "STAT">("Routine");
  const [targetDate, setTargetDate] = useState(new Date().toISOString().split("T")[0]);
  const [followUpInterval, setFollowUpInterval] = useState("2 weeks");
  const [preProcInstructions, setPreProcInstructions] = useState("NPO 6 hours prior; Continue essential antihypertensives; Baseline CBC/LFT/RFR.");
  const [savedSuccessMsg, setSavedSuccessMsg] = useState<string | null>(null);

  // Sync selected review to form
  React.useEffect(() => {
    if (!selectedReviewId) return;
    const item = ctReviews.find((r) => r.id === selectedReviewId);
    if (item) {
      setPatientName(item.patientName);
      setAge(item.age);
      setGender(item.sex);
      setCrNumber(item.smsBillId || item.ctNumber || "CR-2026-991");
      setContactNumber(item.contactNumber || "9829000000");
      setDiagnosis(item.primaryDiagnosis || "Hepatic Mass / Hepatoma");
      setClinicalHistory(item.clinicalHistory || item.ctReviewNotes || "");
      if (item.procedureTitle) setProcedureTitle(item.procedureTitle);
    }
  }, [selectedReviewId, ctReviews]);

  const filteredQueue = useMemo(() => {
    if (!search.trim()) return ctReviews;
    const q = search.toLowerCase();
    return ctReviews.filter(
      (r) =>
        r.patientName.toLowerCase().includes(q) ||
        (r.smsBillId && r.smsBillId.toLowerCase().includes(q)) ||
        (r.ctNumber && r.ctNumber.toLowerCase().includes(q)) ||
        (r.primaryDiagnosis && r.primaryDiagnosis.toLowerCase().includes(q))
    );
  }, [ctReviews, search]);

  const handleExecuteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedReviewId) {
      convertCtReviewToBooking(
        selectedReviewId,
        targetDate,
        "procedure",
        procedureTitle,
        "Dr. Meenu Bagarhatta (Sr. Prof & Head)"
      );
    }
    setSavedSuccessMsg(`Patient ${patientName || "record"} scheduled successfully for ${targetDate}.`);
    setTimeout(() => setSavedSuccessMsg(null), 4000);
  };

  const copyPrescriptionSlip = () => {
    const text = `SMS MEDICAL COLLEGE & HOSPITALS, JAIPUR
DEPARTMENT OF INTERVENTIONAL RADIOLOGY - OPD CONSULTATION SLIP
------------------------------------------------------------
Patient: ${patientName} (${age}y / ${gender})
CR / HID: ${crNumber} | Phone: ${contactNumber}
Date: ${new Date().toLocaleDateString("en-IN")}
Diagnosis: ${diagnosis}
Clinical Notes: ${clinicalHistory}
Disposition: ${disposition === "book" ? `BOOK CATH-LAB for ${procedureTitle} on ${targetDate} (${priority})` : `CONSERVATIVE / REVIEW after ${followUpInterval}`}
Instructions: ${preProcInstructions}
Consultant: Dr. Meenu Bagarhatta / Interventional Radiology Team
------------------------------------------------------------`;
    navigator.clipboard.writeText(text);
    setSavedSuccessMsg("OPD prescription slip copied to clipboard.");
    setTimeout(() => setSavedSuccessMsg(null), 3000);
  };

  return (
    <div className="space-y-4">
      {savedSuccessMsg && (
        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{savedSuccessMsg}</span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Column: Search & Queue (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-xs space-y-2.5">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700">Patient Queue &amp; Lookup</h2>
              <span className="text-[11px] font-mono text-slate-500">{filteredQueue.length} records</span>
            </div>

            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search CR, Name, or Diagnosis..."
                className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-blue-600"
              />
            </div>
          </div>

          {/* Queue List */}
          <div className="space-y-2 max-h-[640px] overflow-y-auto pr-0.5">
            {filteredQueue.length === 0 ? (
              <div className="p-8 text-center text-xs text-slate-400 bg-white border border-slate-200 rounded-xl">
                No patients found.
              </div>
            ) : (
              filteredQueue.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedReviewId(item.id)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer text-left ${
                    selectedReviewId === item.id
                      ? "bg-blue-50/60 border-blue-500 shadow-xs ring-1 ring-blue-500"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-semibold text-xs text-slate-900">{item.patientName}</span>
                    <span className="text-[10px] font-mono text-slate-500">{item.smsBillId || item.ctNumber || "OPD"}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 truncate mt-0.5">
                    {item.primaryDiagnosis || "Scheduled for CT correlation"}
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2 pt-1 border-t border-slate-100">
                    <span>{item.age}y / {item.sex}</span>
                    <span className="px-1.5 py-0.2 rounded bg-slate-100 font-medium text-slate-600">{item.status}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Column: Clean Clinical Form & Disposition (8 cols) */}
        <div className="lg:col-span-8">
          <form onSubmit={handleExecuteBooking} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Clinical Evaluation &amp; Disposition</h3>
                <p className="text-xs text-slate-500 mt-0.5">Review imaging, document findings, and schedule cath-lab or follow-up.</p>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={copyPrescriptionSlip}
                  className="px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center gap-1 cursor-pointer shadow-2xs"
                >
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy Slip</span>
                </button>
              </div>
            </div>

            {/* Core Patient Demographics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div className="md:col-span-2">
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">Patient Full Name</label>
                <input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-600 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">Age &amp; Sex</label>
                <div className="flex gap-1.5">
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value ? Number(e.target.value) : "")}
                    placeholder="Age"
                    className="w-16 px-2 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-600 focus:outline-none"
                  />
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value as "Male" | "Female")}
                    className="flex-1 px-2 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-600 focus:outline-none"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">CR / Hospital ID</label>
                <input
                  type="text"
                  value={crNumber}
                  onChange={(e) => setCrNumber(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs font-mono bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-600 focus:outline-none"
                />
              </div>
            </div>

            {/* Clinical Diagnosis & History */}
            <div className="space-y-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">Working Diagnosis</label>
                <input
                  type="text"
                  value={diagnosis}
                  onChange={(e) => setDiagnosis(e.target.value)}
                  placeholder="e.g. Hepatocellular Carcinoma (Segment VII) / Budd-Chiari Syndrome"
                  className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">Clinical History &amp; Imaging Review</label>
                <textarea
                  rows={2}
                  value={clinicalHistory}
                  onChange={(e) => setClinicalHistory(e.target.value)}
                  placeholder="Imaging correlation, CECT/Doppler findings, symptoms..."
                  className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-600 focus:outline-none leading-relaxed"
                />
              </div>
            </div>

            {/* Disposition Choice */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide">Disposition Plan</label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: "book", label: "Book Cath-Lab Slot", desc: "Schedule procedure in angiosuite" },
                  { id: "conservative", label: "Conservative / Follow-up", desc: "Medical management & interval review" },
                  { id: "stat", label: "Emergency STAT", desc: "Zero-delay table transfer" },
                ].map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setDisposition(d.id as any)}
                    className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                      disposition === d.id
                        ? "bg-blue-50/70 border-blue-600 ring-1 ring-blue-600 text-blue-900"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <div className="text-xs font-semibold">{d.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{d.desc}</div>
                  </button>
                ))}
              </div>

              {/* Conditional Fields based on Disposition */}
              {disposition === "book" && (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">Target Procedure</label>
                      <select
                        value={procedureTitle}
                        onChange={(e) => setProcedureTitle(e.target.value)}
                        className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none"
                      >
                        <option value="cTACE Chemoembolization">cTACE Chemoembolization</option>
                        <option value="PTBD & Biliary Stenting">PTBD &amp; Biliary Stenting</option>
                        <option value="TIPS / DIPS Shunt">TIPS / DIPS Shunt</option>
                        <option value="Bronchial Artery Embolization (BAE)">BAE (Hemoptysis)</option>
                        <option value="Varicose Veins (VenaSeal / EVLA)">Varicose Veins (VenaSeal / EVLA)</option>
                        <option value="Varicocele Embolization">Varicocele Embolization</option>
                        <option value="AV Fistuloplasty">AV Fistuloplasty</option>
                        <option value="Percutaneous Liver Biopsy">Percutaneous Liver Biopsy</option>
                        <option value="Percutaneous Abscess Drainage (PCD)">Percutaneous Drainage (PCD)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">Scheduled Date</label>
                      <input
                        type="date"
                        value={targetDate}
                        onChange={(e) => setTargetDate(e.target.value)}
                        className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">Priority</label>
                      <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value as any)}
                        className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none"
                      >
                        <option value="Routine">Routine</option>
                        <option value="Semi-Urgent">Semi-Urgent</option>
                        <option value="STAT">STAT / Emergency</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Pre-Procedure Instructions</label>
                    <input
                      type="text"
                      value={preProcInstructions}
                      onChange={(e) => setPreProcInstructions(e.target.value)}
                      className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {disposition === "conservative" && (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">Review Interval</label>
                      <select
                        value={followUpInterval}
                        onChange={(e) => setFollowUpInterval(e.target.value)}
                        className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none"
                      >
                        <option value="1 week">1 week</option>
                        <option value="2 weeks">2 weeks</option>
                        <option value="1 month">1 month</option>
                        <option value="3 months">3 months</option>
                        <option value="SOS">SOS / On Symptom Exacerbation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">Progress Instructions</label>
                      <input
                        type="text"
                        defaultValue="Repeat Doppler / Ultrasound in 2 weeks; Continue prescribed oral medications."
                        className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition cursor-pointer"
              >
                {disposition === "book" ? "Confirm & Schedule Cath-Lab Slot" : "Save Clinical Evaluation"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// PILLAR 2: OPERATIVE & PROCEDURE NOTES
// ============================================================================

function OperativeNotesPillar() {
  const [selectedTemplateKey, setSelectedTemplateKey] = useState("ptbd_biliary");
  const [operator, setOperator] = useState("Dr. Meenu Bagarhatta (Sr. Prof & Head)");
  const [assistant, setAssistant] = useState("Dr. Neel Yadav (DM Resident)");
  const [accessSite, setAccessSite] = useState("Right Common Femoral Artery (CFA)");
  const [sheathSize, setSheathSize] = useState("5 French");
  const [hardwareUsed, setHardwareUsed] = useState("5F Cobra C2 Catheter, 0.035\" Terumo Glidewire, 2.7F Progreat Microcatheter");
  const [findings, setFindings] = useState("");
  const [hemostasis, setHemostasis] = useState("Manual compression for 15 mins; clean puncture hemostasis confirmed; distal pulses intact.");
  const [postOpInstructions, setPostOpInstructions] = useState("Bed rest for 6 hours; monitor right groin for hematoma; vitals every 30 mins.");
  const [copyStatus, setCopyStatus] = useState(false);

  // Template auto-fill
  const activeTemplate = useMemo(() => {
    return ALL_PROCEDURE_DISCHARGE_TEMPLATES.find((t) => t.procedureKey === selectedTemplateKey) || ALL_PROCEDURE_DISCHARGE_TEMPLATES[0];
  }, [selectedTemplateKey]);

  React.useEffect(() => {
    if (activeTemplate) {
      setFindings(activeTemplate.synthesizeOperativeNote({}));
      setAccessSite(activeTemplate.defaultAccessSite || "Right CFA");
      setPostOpInstructions(activeTemplate.defaultPostOpPlan || "Monitor puncture site; bed rest.");
    }
  }, [activeTemplate]);

  const generateFullNoteText = () => {
    return `===========================================================
DEPARTMENT OF INTERVENTIONAL RADIOLOGY - OPERATIVE REPORT
SAWAI MAN SINGH MEDICAL COLLEGE & HOSPITALS, JAIPUR
===========================================================
Procedure: ${activeTemplate?.procedureFamily} - ${activeTemplate?.icdPrimary.description} (${activeTemplate?.icdPrimary.code})
Date: ${new Date().toLocaleDateString("en-IN")} | Anaesthesia: ${activeTemplate?.anaesthesiaDefault || "Local"}
Primary Operator: ${operator}
Assistant / Resident: ${assistant}

1. ACCESS SITE & SHEATH:
${accessSite} | Sheath: ${sheathSize}

2. HARDWARE & CONSUMABLES:
${hardwareUsed}

3. PROCEDURAL STEPS & FINDINGS:
${findings}

4. HEMOSTASIS & CLOSURE:
${hemostasis}

5. IMMEDIATE POST-OP INSTRUCTIONS:
${postOpInstructions}
===========================================================`;
  };

  const handleCopyNote = () => {
    navigator.clipboard.writeText(generateFullNoteText());
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 3000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      {/* Left Column: Form Controls (7 cols) */}
      <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">Operative Note Generator</h2>
            <p className="text-xs text-slate-500 mt-0.5">Structured procedural documentation for EMR export.</p>
          </div>

          <div className="flex items-center gap-2">
            <select
              value={selectedTemplateKey}
              onChange={(e) => setSelectedTemplateKey(e.target.value)}
              className="px-3 py-1.5 text-xs font-semibold bg-slate-50 border border-slate-200 rounded-lg text-blue-700 focus:outline-none focus:border-blue-600"
            >
              {ALL_PROCEDURE_DISCHARGE_TEMPLATES.map((tpl) => (
                <option key={tpl.procedureKey} value={tpl.procedureKey}>
                  {tpl.procedureFamily}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Operators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">Primary Operator</label>
            <input
              type="text"
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
              className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">Assistant / Fellow</label>
            <input
              type="text"
              value={assistant}
              onChange={(e) => setAssistant(e.target.value)}
              className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>
        </div>

        {/* Access Site & Sheath */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">Access Site</label>
            <input
              type="text"
              value={accessSite}
              onChange={(e) => setAccessSite(e.target.value)}
              className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">Sheath / Access Size</label>
            <input
              type="text"
              value={sheathSize}
              onChange={(e) => setSheathSize(e.target.value)}
              className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>
        </div>

        {/* Consumables */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-600 mb-1">Hardware &amp; Consumables Used</label>
          <input
            type="text"
            value={hardwareUsed}
            onChange={(e) => setHardwareUsed(e.target.value)}
            className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-600 focus:outline-none font-mono text-[11px]"
          />
        </div>

        {/* Procedural Steps & Findings */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-600 mb-1">Procedural Steps &amp; Fluoroscopy Findings</label>
          <textarea
            rows={5}
            value={findings}
            onChange={(e) => setFindings(e.target.value)}
            className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-600 focus:outline-none leading-relaxed"
          />
        </div>

        {/* Hemostasis & Post-Op */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">Hemostasis / Closure</label>
            <textarea
              rows={2}
              value={hemostasis}
              onChange={(e) => setHemostasis(e.target.value)}
              className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">Immediate Post-Op Orders</label>
            <textarea
              rows={2}
              value={postOpInstructions}
              onChange={(e) => setPostOpInstructions(e.target.value)}
              className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Right Column: Instant Live Formatted Preview & Clipboard Export (5 cols) */}
      <div className="lg:col-span-5 flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Live Output Preview</span>
          <button
            onClick={handleCopyNote}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer shadow-xs ${
              copyStatus
                ? "bg-emerald-600 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {copyStatus ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copyStatus ? "Copied to EMR!" : "Copy Note to Clipboard"}</span>
          </button>
        </div>

        <div className="flex-1 bg-white border border-slate-200 rounded-xl p-4 shadow-xs font-mono text-xs text-slate-800 whitespace-pre-wrap overflow-y-auto max-h-[640px] leading-relaxed">
          {generateFullNoteText()}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// PILLAR 3: PUBLICATION STUDIO (INTEGRATED RESEARCH & MANUSCRIPT ENGINE)
// ============================================================================

function PublicationStudioPillar() {
  const [selectedCohort, setSelectedCohort] = useState<string>("all");
  const [filterSex, setFilterSex] = useState<string>("all");
  const [filterSuccess, setFilterSuccess] = useState<string>("all");
  const [manuscriptDraft, setManuscriptDraft] = useState<string>(
    `# Study Draft: Longitudinal Interventional Radiology Outcomes at SMS Medical College\n\n## Abstract\nBackground & Objective:\n\nMethods:\n\nResults:\n\nConclusion:\n`
  );

  // Load all authentic research cohort cases
  const allCases: PaperCaseRecord[] = useMemo(() => {
    return Object.values(ALL_SIX_PAPERS_DATA).flat();
  }, []);

  // Filtered Cohort
  const filteredCases = useMemo(() => {
    return allCases.filter((c) => {
      if (selectedCohort !== "all" && c.paperId !== selectedCohort) return false;
      if (filterSex !== "all" && c.gender.toUpperCase() !== filterSex.toUpperCase()) return false;
      if (filterSuccess === "success" && !c.technicalSuccess?.toLowerCase().includes("success")) return false;
      return true;
    });
  }, [allCases, selectedCohort, filterSex, filterSuccess]);

  // Statistical calculations (Mean ± SD age, Sex split, Success rate)
  const stats = useMemo(() => {
    const validAges = filteredCases.map((c) => c.age).filter((a): a is number => typeof a === "number" && a > 0);
    const n = filteredCases.length;
    const meanAge = validAges.length > 0 ? validAges.reduce((sum, a) => sum + a, 0) / validAges.length : 0;
    const variance =
      validAges.length > 1
        ? validAges.reduce((sum, a) => sum + Math.pow(a - meanAge, 2), 0) / (validAges.length - 1)
        : 0;
    const sdAge = Math.sqrt(variance);

    const maleCount = filteredCases.filter((c) => c.gender.toUpperCase() === "M").length;
    const femaleCount = filteredCases.filter((c) => c.gender.toUpperCase() === "F").length;
    const successCount = filteredCases.filter(
      (c) => c.technicalSuccess && c.technicalSuccess.toLowerCase().includes("success")
    ).length;

    return {
      n,
      meanAge: meanAge.toFixed(1),
      sdAge: sdAge.toFixed(1),
      malePct: n > 0 ? ((maleCount / n) * 100).toFixed(1) : "0",
      femalePct: n > 0 ? ((femaleCount / n) * 100).toFixed(1) : "0",
      successRate: n > 0 ? ((successCount / n) * 100).toFixed(1) : "0",
    };
  }, [filteredCases]);

  const insertTable1IntoDraft = () => {
    const tableText = `\n### Table 1: Baseline Demographics and Clinical Characteristics (N = ${stats.n})
| Parameter | Value |
| :--- | :--- |
| **Total Cohort (N)** | ${stats.n} |
| **Age (years, Mean ± SD)** | ${stats.meanAge} ± ${stats.sdAge} |
| **Sex - Male (%)** | ${stats.malePct}% |
| **Sex - Female (%)** | ${stats.femalePct}% |
| **Technical Success Rate (%)** | ${stats.successRate}% |
`;
    setManuscriptDraft((prev) => prev + tableText);
  };

  const insertMethodsBoilerplate = () => {
    const methodsText = `\n### Materials and Methods: Interventional Procedure Protocol
All interventional procedures were performed in the dedicated Angiosuite under fluoroscopic and real-time duplex ultrasound guidance. Arterial and venous accesses were obtained via sterile percutaneous puncture with vascular sheaths (5F - 7F). Diagnostic selective angiography was executed using selective angiographic catheters. Embolization was delivered coaxially via microcatheters using controlled particle suspensions, detachable microcoils, and liquid sclerosants adhering to standard CIRSE and institutional protocols. Hemostasis was achieved at the puncture site by controlled manual compression followed by post-procedure hemodynamic surveillance.\n`;
    setManuscriptDraft((prev) => prev + methodsText);
  };

  const exportCsvCohort = () => {
    const headers = ["caseId", "patientName", "age", "gender", "procedureName", "diagnosis", "accessSite", "technicalSuccess", "date"];
    const rows = filteredCases.map((c) => [
      c.caseId,
      c.patientName,
      c.age || "",
      c.gender,
      `"${c.procedureName}"`,
      `"${c.diagnosis}"`,
      `"${c.accessSite}"`,
      `"${c.technicalSuccess}"`,
      c.date,
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `VascFlow_Cohort_Export_${selectedCohort}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-4">
      {/* Top Cohort Controls */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Study Cohort</label>
            <select
              value={selectedCohort}
              onChange={(e) => setSelectedCohort(e.target.value)}
              className="px-3 py-1.5 text-xs font-semibold bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:border-blue-600 focus:outline-none"
            >
              <option value="all">All SMS Landmark Studies (N={allCases.length})</option>
              <option value="paper-vapsa">Visceral Aneurysm &amp; Pseudoaneurysm (VAPSA)</option>
              <option value="paper-bcs">Budd-Chiari Syndrome &amp; DIPS Registry</option>
              <option value="paper-ptbd">Malignant Biliary Decompression (PTBD)</option>
              <option value="paper-varicose">Varicose Veins Endovenous Ablation</option>
              <option value="paper-bae">Bronchial Artery Embolization (BAE)</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Sex Filter</label>
            <select
              value={filterSex}
              onChange={(e) => setFilterSex(e.target.value)}
              className="px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-700 focus:outline-none"
            >
              <option value="all">All</option>
              <option value="M">Male Only</option>
              <option value="F">Female Only</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Outcome</label>
            <select
              value={filterSuccess}
              onChange={(e) => setFilterSuccess(e.target.value)}
              className="px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-700 focus:outline-none"
            >
              <option value="all">All Outcomes</option>
              <option value="success">Technical Success Only</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2 self-stretch md:self-auto justify-end">
          <button
            onClick={exportCsvCohort}
            className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span>Export Clean CSV</span>
          </button>
        </div>
      </div>

      {/* Summary KPI Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-xs">
          <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Cohort Size</div>
          <div className="text-2xl font-bold text-slate-900 mt-0.5">{stats.n} Cases</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-xs">
          <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Age (Mean ± SD)</div>
          <div className="text-2xl font-bold text-blue-600 mt-0.5">{stats.meanAge} ± {stats.sdAge} y</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-xs">
          <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Sex Split (M / F)</div>
          <div className="text-2xl font-bold text-slate-900 mt-0.5">{stats.malePct}% / {stats.femalePct}%</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-xs">
          <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Technical Success</div>
          <div className="text-2xl font-bold text-emerald-600 mt-0.5">{stats.successRate}%</div>
        </div>
      </div>

      {/* Main Studio: Data Table & Live Drafting Canvas Side-by-Side */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: Filtered Cohort Table (6 cols) */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-3 flex flex-col">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Cohort Patient Ledger</span>
            <span className="text-[11px] text-slate-400 font-mono">Showing {filteredCases.length} records</span>
          </div>

          <div className="flex-1 overflow-x-auto overflow-y-auto max-h-[580px] border border-slate-100 rounded-lg">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-50 sticky top-0 border-b border-slate-200 text-slate-600 font-semibold text-[11px]">
                <tr>
                  <th className="py-2 px-3">Case ID</th>
                  <th className="py-2 px-3">Age/Sex</th>
                  <th className="py-2 px-3">Procedure</th>
                  <th className="py-2 px-3">Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                {filteredCases.slice(0, 100).map((c) => (
                  <tr key={c.id} className="hover:bg-slate-50">
                    <td className="py-2 px-3 font-mono font-medium text-blue-600">{c.caseId}</td>
                    <td className="py-2 px-3">{c.age || "-"}y / {c.gender}</td>
                    <td className="py-2 px-3 font-medium truncate max-w-[180px]">{c.procedureName}</td>
                    <td className="py-2 px-3 text-[11px] text-emerald-700 font-semibold">
                      {c.technicalSuccess?.includes("Success") ? "Success" : "Verified"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: Manuscript Drafting Canvas (6 cols) */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-3 flex flex-col">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Manuscript Drafting Canvas</span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={insertTable1IntoDraft}
                className="px-2 py-1 text-[11px] font-semibold rounded bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 cursor-pointer"
              >
                + Insert Table 1
              </button>
              <button
                onClick={insertMethodsBoilerplate}
                className="px-2 py-1 text-[11px] font-semibold rounded bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 cursor-pointer"
              >
                + Insert Methods Text
              </button>
            </div>
          </div>

          <textarea
            value={manuscriptDraft}
            onChange={(e) => setManuscriptDraft(e.target.value)}
            rows={20}
            className="w-full flex-1 p-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-600 focus:outline-none font-mono text-slate-900 leading-relaxed resize-none min-h-[500px]"
          />

          <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400">
            <span>Markdown formatting supported</span>
            <button
              onClick={() => {
                navigator.clipboard.writeText(manuscriptDraft);
                alert("Manuscript draft copied to clipboard!");
              }}
              className="text-blue-600 font-semibold hover:underline cursor-pointer"
            >
              Copy Manuscript Text
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
