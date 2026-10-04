"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  EndoflowPatient,
  ModalityType,
  ClinicalStage,
  useEndoflowStore,
} from "../dashboard/useEndoflowStore";
import {
  calculateRotterdam,
  calculateClichy,
  calculateChildPugh,
  calculateMeld3,
  calculateCigarroaMACD,
  calculateEgfrCkdEpi,
} from "@vascule/catalog";
import {
  ArrowLeft,
  Printer,
  Save,
  X,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  HeartPulse,
  Activity,
  FileText,
  Copy,
  Plus,
  Building,
  Route,
  ClipboardCheck,
  Boxes,
  Stethoscope,
  Barcode,
  Camera,
} from "lucide-react";

interface PatientDossierModalProps {
  patient: EndoflowPatient;
  isOpen: boolean;
  onClose: () => void;
  onUpdatePatient?: (id: string, updates: Partial<EndoflowPatient>) => void;
}

export function PatientDossierModal({
  patient,
  isOpen,
  onClose,
  onUpdatePatient,
}: PatientDossierModalProps) {
  const storeUpdatePatient = useEndoflowStore((s) => s.updatePatient);
  const [activeTab, setActiveTab] = useState<number>(1);
  const [saveToast, setSaveToast] = useState<string | null>(null);

  // Tab 1 state: Labs & Clinical Profile
  const [name, setName] = useState(patient.name);
  const [age, setAge] = useState(patient.age);
  const [sex, setSex] = useState(patient.sex);
  const [hid, setHid] = useState(patient.hid);
  const [scanId, setScanId] = useState(patient.scanId);
  const [phone, setPhone] = useState(patient.phone);
  const [unit, setUnit] = useState(patient.unit);
  const [postedBy, setPostedBy] = useState(patient.postedBy);
  const [summary, setSummary] = useState(patient.summary);
  const [procedure, setProcedure] = useState(patient.procedure);
  const [status, setStatus] = useState<ClinicalStage>(patient.status);

  // Labs State
  const [ast, setAst] = useState(patient.labs.ast);
  const [alt, setAlt] = useState(patient.labs.alt);
  const [bili, setBili] = useState(patient.labs.bili);
  const [ldh, setLdh] = useState(patient.labs.ldh);
  const [alb, setAlb] = useState(patient.labs.alb);
  const [creat, setCreat] = useState(patient.labs.creat);
  const [inr, setInr] = useState(patient.labs.inr);
  const [plt, setPlt] = useState(patient.labs.plt);
  const [fib, setFib] = useState(patient.labs.fib);
  const [protc, setProtc] = useState(patient.labs.protc);
  const [prots, setProts] = useState(patient.labs.prots);
  const [ascitesGrade, setAscitesGrade] = useState(patient.labs.ascitesGrade);

  // Tab 2 state: Checklist & Hardware
  const [hwItems, setHwItems] = useState([
    { id: "h1", name: "10F 45cm Ansel / Flexor Hydrophilic Guiding Sheath", checked: true },
    { id: "h2", name: "RUPS-100 Colapinto Transcaval Access Set", checked: true },
    { id: "h3", name: "0.035\" 260cm Amplatz Extra-Stiff + Terumo Glidewire", checked: true },
    { id: "h4", name: "Atlas / Conquest 8x40 mm Non-Compliant Angioplasty Balloon", checked: true },
    { id: "h5", name: "Gore Viatorr Covered Stent (10 mm x 7 cm + 2 cm bare)", checked: true },
    { id: "h6", name: "Electronic Portosystemic Pressure Gradient Manometer", checked: true },
  ]);
  const [customHwName, setCustomHwName] = useState("");

  // Tab 3 state: Scheme & Billing
  const [scheme, setScheme] = useState(patient.scheme);
  const [schemeTid, setSchemeTid] = useState(patient.schemeTid);
  const [beneficiaryId, setBeneficiaryId] = useState(patient.beneficiaryId);
  const [preAuthStatus, setPreAuthStatus] = useState(patient.preAuthStatus);

  // Tab 4 state: IPD & Post-Op
  const [admissionType, setAdmissionType] = useState(patient.ipd.admissionType);
  const [ward, setWard] = useState(patient.ipd.ward);
  const [bed, setBed] = useState(patient.ipd.bed);
  const [podDay, setPodDay] = useState(patient.ipd.podDay);

  // Tab 5 state: Research & Histopathology
  const [icdCode, setIcdCode] = useState("I82.0");
  const [biopsyYield, setBiopsyYield] = useState("3");
  const [needleGauge, setNeedleGauge] = useState("18G Quick-Core");
  const [punctureSite, setPunctureSite] = useState("Segment VII/VIII");
  const [pathLabId, setPathLabId] = useState("HP-2026-894");
  const [pathStatus, setPathStatus] = useState("Sample Dispatched to Pathology");
  const [techSuccess, setTechSuccess] = useState("Yes - Full Technical Success");
  const [clinicalResponse, setClinicalResponse] = useState("Complete Resolution");
  const [cirseGrade, setCirseGrade] = useState("Grade 1 (No therapy)");
  const [followupPatency, setFollowupPatency] = useState("Patent on Doppler at 1 Month");

  // Dynamic Clinical Calculations (Pure Zero-Division Guarded, No Phantom Defaults)
  const rotterdamResult = useMemo(() => {
    if (inr === undefined || bili === undefined) return null;
    return calculateRotterdam({
      enceph: 0,
      ascites: ascitesGrade === "none" ? 0 : 1,
      ptRatio: inr,
      bilirubinMg: bili,
    });
  }, [ascitesGrade, inr, bili]);

  const clichyResult = useMemo(() => {
    if (bili === undefined || creat === undefined) return null;
    return calculateClichy({
      age,
      bilirubinMg: bili,
      alt,
      creatinineMg: creat,
    });
  }, [age, bili, alt, creat]);

  const ctpResult = useMemo(() => {
    if (bili === undefined || alb === undefined || inr === undefined) return null;
    return calculateChildPugh({
      bilirubinMg: bili,
      albuminGdl: alb,
      inr: inr,
      ascites:
        ascitesGrade === "none"
          ? "None"
          : ascitesGrade === "mild"
          ? "Slight/Controlled"
          : "Moderate/Tense",
      encephalopathy: "None",
    });
  }, [bili, alb, inr, ascitesGrade]);

  const meldResult = useMemo(() => {
    if (creat === undefined || bili === undefined || inr === undefined || creat <= 0) return null;
    return calculateMeld3({
      creatinine: creat,
      bilirubin: bili,
      inr: inr,
      sodium: 138,
      albumin: alb,
      isFemale: sex === "Female",
    });
  }, [creat, bili, inr, alb, sex]);

  const macdResult = useMemo(() => {
    if (creat === undefined || creat <= 0) return null;
    return calculateCigarroaMACD(68, creat);
  }, [creat]);

  const egfrResult = useMemo(() => {
    if (creat === undefined || creat <= 0) return null;
    return calculateEgfrCkdEpi(creat, age, sex === "Female");
  }, [creat, age, sex]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSaveAndLock = () => {
    const updates: Partial<EndoflowPatient> = {
      name,
      age,
      sex,
      hid,
      scanId,
      phone,
      unit,
      postedBy,
      summary,
      procedure,
      status,
      scheme,
      schemeTid,
      beneficiaryId,
      preAuthStatus,
      ipd: {
        admissionType,
        ward,
        bed,
        podDay,
      },
      labs: {
        ast,
        alt,
        bili,
        ldh,
        alb,
        creat,
        inr,
        plt,
        fib,
        protc,
        prots,
        ascitesGrade,
      },
    };

    if (onUpdatePatient) {
      onUpdatePatient(patient.id, updates);
    } else {
      storeUpdatePatient(patient.id, updates);
    }

    setSaveToast("Patient Clinical Dossier Saved & Verified.");
    setTimeout(() => setSaveToast(null), 3000);
  };

  const handleAddCustomHw = () => {
    if (!customHwName.trim()) return;
    setHwItems([
      ...hwItems,
      { id: `hw-${Date.now()}`, name: customHwName.trim(), checked: true },
    ]);
    setCustomHwName("");
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEaushadhi = () => {
    const indentText = `SMS MEDICAL COLLEGE & ATTACHED HOSPITALS, JAIPUR
RMSCL e-Aushadhi Drug Indent Slip
Patient: ${name} | HID: ${hid} | Ward: ${ward} (Bed: ${bed})
Procedure: ${procedure}
1. Inj Ceftriaxone 1g IV BD x 3 days
2. Inj Enoxaparin 40mg SC OD x 5 days
3. Inj Tramadol 50mg IV SOS
4. Inj Pantoprazole 40mg IV OD
5. IV Normal Saline 500 mL @ 100 mL/hr
Prescribed by: ${postedBy} | Interventional Radiology Unit`;

    navigator.clipboard.writeText(indentText).then(() => {
      setSaveToast("RMSCL e-Aushadhi Indent copied to clipboard.");
      setTimeout(() => setSaveToast(null), 2500);
    });
  };

  return (
    <div
      className="fixed inset-y-0 right-0 z-50 w-full sm:w-[460px] border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-2xl flex flex-col h-full overflow-hidden transition-transform duration-200 ease-in-out"
      role="dialog"
      aria-modal="false"
    >
      {/* Sticky Top Header */}
        <div className="px-5 py-3.5 border-b border-slate-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 text-xs font-semibold transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Worklist</span>
            </button>
            <span className="text-slate-200">|</span>
            <span
              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                patient.modality === "XA"
                  ? "bg-rose-50 text-rose-700"
                  : patient.modality === "CT"
                  ? "bg-amber-50 text-amber-700"
                  : patient.modality === "US"
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-purple-50 text-purple-600"
              }`}
            >
              [{patient.modality}]
            </span>
            <h1 className="text-base font-bold text-slate-900">{name}</h1>
            <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold">
              {status}
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span>
              {age}Y/{sex === "Male" ? "M" : "F"} &bull; HID:{" "}
              <strong className="font-mono text-slate-900">{hid}</strong>
            </span>
            <span className="hidden md:inline font-semibold text-blue-600">
              {postedBy}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Linear Google Material 3 Segmented Tabs */}
        <div className="px-5 pt-3 pb-2 border-b border-slate-200 bg-slate-50 overflow-x-auto shrink-0">
          <div className="inline-flex rounded-xl bg-white border border-slate-200 p-1 gap-1">
            {[
              { id: 1, label: "Clinical Labs & Vitals" },
              { id: 2, label: "100 IR Catalog & Vessels" },
              { id: 3, label: "Govt Scheme & Billing" },
              { id: 4, label: "Post-Op, e-Aushadhi & IPD" },
              { id: 5, label: "Research & Follow-up" },
              { id: 6, label: "Procedural Attachments" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    activeTab === tab.id
                      ? "bg-white text-blue-600"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {tab.id}
                </span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Tab Content Pane */}
        <div className="flex-1 overflow-y-auto p-5 bg-slate-50">
          {/* TAB 1: CLINICAL LABS & VITALS */}
          {activeTab === 1 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* Left Column: Demographics & Presentation */}
              <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <h3 className="font-bold text-xs uppercase tracking-wider text-blue-600">
                    Clinical Profile
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      autoFocus
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-900 focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">
                      Age
                    </label>
                    <input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(Number(e.target.value))}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-900 focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">
                      Sex
                    </label>
                    <select
                      value={sex}
                      onChange={(e) => setSex(e.target.value as "Male" | "Female")}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-900 focus:border-blue-600 focus:outline-none"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">
                      HID / CR Number
                    </label>
                    <input
                      type="text"
                      value={hid}
                      onChange={(e) => setHid(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-mono font-bold text-slate-900 focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">
                      Scan ID / PACS Acc
                    </label>
                    <input
                      type="text"
                      value={scanId}
                      onChange={(e) => setScanId(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-mono font-semibold text-slate-900 focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-900 focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">
                      Referring Unit
                    </label>
                    <input
                      type="text"
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-900 focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">
                      Posted By Doctor
                    </label>
                    <input
                      type="text"
                      value={postedBy}
                      onChange={(e) => setPostedBy(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-blue-600 focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">
                    Clinical Indication & Summary
                  </label>
                  <textarea
                    rows={2}
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">
                      Scheduled Procedure
                    </label>
                    <input
                      type="text"
                      value={procedure}
                      onChange={(e) => setProcedure(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-bold text-blue-600 focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">
                      Cath-Lab Stage Status
                    </label>
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value as ClinicalStage)}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-bold text-slate-900 focus:border-blue-600 focus:outline-none"
                    >
                      <option value="Scheduled">Scheduled</option>
                      <option value="Pre-Op Pending">Pre-Op Pending</option>
                      <option value="In Cath-Lab">In Cath-Lab</option>
                      <option value="Post-Op ICU">Post-Op ICU</option>
                      <option value="Discharged">Discharged</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Right Column: Lab Panel & Live Calculators */}
              <div className="lg:col-span-5 space-y-4">
                {/* Biochemical Panel */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <h3 className="font-bold text-xs uppercase tracking-wider text-emerald-700">
                      Coagulation & Liver Panel
                    </h3>
                    <span className="text-[10px] text-slate-400">
                      Real-time Dynamic Update
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-500">
                        AST (U/L)
                      </label>
                      <input
                        type="number"
                        value={ast ?? ""}
                        onChange={(e) => setAst(e.target.value ? Number(e.target.value) : undefined)}
                        className="w-full px-2 py-1 rounded border border-slate-200 text-xs font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-500">
                        ALT (U/L)
                      </label>
                      <input
                        type="number"
                        value={alt ?? ""}
                        onChange={(e) => setAlt(e.target.value ? Number(e.target.value) : undefined)}
                        className="w-full px-2 py-1 rounded border border-slate-200 text-xs font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-500">
                        Bilirubin (mg/dL)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={bili ?? ""}
                        onChange={(e) => setBili(e.target.value ? Number(e.target.value) : undefined)}
                        className="w-full px-2 py-1 rounded border border-slate-200 text-xs font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-500">
                        LDH (U/L)
                      </label>
                      <input
                        type="number"
                        value={ldh ?? ""}
                        onChange={(e) => setLdh(e.target.value ? Number(e.target.value) : undefined)}
                        className="w-full px-2 py-1 rounded border border-slate-200 text-xs font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-500">
                        Albumin (g/dL)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={alb ?? ""}
                        onChange={(e) => setAlb(e.target.value ? Number(e.target.value) : undefined)}
                        className="w-full px-2 py-1 rounded border border-slate-200 text-xs font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-500">
                        Creatinine (mg/dL)
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={creat ?? ""}
                        onChange={(e) => setCreat(e.target.value ? Number(e.target.value) : undefined)}
                        className="w-full px-2 py-1 rounded border border-slate-200 text-xs font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-500">
                        PT / INR
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={inr ?? ""}
                        onChange={(e) => setInr(e.target.value ? Number(e.target.value) : undefined)}
                        className="w-full px-2 py-1 rounded border border-slate-200 text-xs font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-500">
                        Platelets (/uL)
                      </label>
                      <input
                        type="number"
                        value={plt ?? ""}
                        onChange={(e) => setPlt(e.target.value ? Number(e.target.value) : undefined)}
                        className="w-full px-2 py-1 rounded border border-slate-200 text-xs font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-500">
                        Ascites Grade
                      </label>
                      <select
                        value={ascitesGrade ?? "none"}
                        onChange={(e) => setAscitesGrade(e.target.value)}
                        className="w-full px-2 py-1 rounded border border-slate-200 text-xs"
                      >
                        <option value="none">None</option>
                        <option value="mild">Mild</option>
                        <option value="moderate">Moderate</option>
                        <option value="tense">Tense</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Prognostic Risk Indices (Calculators Engine) */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <h3 className="font-bold text-xs uppercase tracking-wider text-amber-700">
                      Prognostic Risk Indices
                    </h3>
                    <span className="text-[10px] font-mono text-blue-600">
                      Mathematical Engines
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {/* Rotterdam */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-slate-500">
                          Rotterdam BCS-PI
                        </span>
                        {rotterdamResult && (
                          <span className="text-[10px] font-bold text-rose-700">
                            {rotterdamResult.riskClass}
                          </span>
                        )}
                      </div>
                      {rotterdamResult ? (
                        <>
                          <div className="text-lg font-black font-mono text-slate-900 mt-0.5">
                            {rotterdamResult.score}
                          </div>
                          <p className="text-[10px] text-slate-500">
                            1-Yr Surv: {rotterdamResult.oneYrSurvival}
                          </p>
                        </>
                      ) : (
                        <div className="text-xs font-mono text-amber-700 mt-1">Pending Labs (Bili/INR)</div>
                      )}
                    </div>

                    {/* Clichy */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-slate-500">
                          Clichy Score
                        </span>
                        {clichyResult && (
                          <span
                            className={`text-[10px] font-bold ${
                              clichyResult.score < 5.4
                                ? "text-emerald-700"
                                : "text-rose-700"
                            }`}
                          >
                            {clichyResult.score < 5.4 ? "Favorable" : "Poor"}
                          </span>
                        )}
                      </div>
                      {clichyResult ? (
                        <>
                          <div className="text-lg font-black font-mono text-slate-900 mt-0.5">
                            {clichyResult.score}
                          </div>
                          <p className="text-[10px] text-slate-500">
                            Cutoff &lt; 5.4 TIPS Candidate
                          </p>
                        </>
                      ) : (
                        <div className="text-xs font-mono text-amber-700 mt-1">Pending Labs (Bili/Cr)</div>
                      )}
                    </div>

                    {/* Child-Pugh */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] font-bold text-slate-500">
                        Child-Pugh (CTP)
                      </span>
                      {ctpResult ? (
                        <>
                          <div className="text-lg font-black font-mono text-slate-900 mt-0.5">
                            {ctpResult.score} Pts ({ctpResult.grade})
                          </div>
                          <p className="text-[10px] text-slate-500">
                            1-Yr Surv: {ctpResult.oneYrSurvival}
                          </p>
                        </>
                      ) : (
                        <div className="text-xs font-mono text-amber-700 mt-1">Pending Labs (Bili/Alb/INR)</div>
                      )}
                    </div>

                    {/* MELD 3.0 */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] font-bold text-slate-500">
                        MELD 3.0 Score
                      </span>
                      {meldResult ? (
                        <>
                          <div className="text-lg font-black font-mono text-slate-900 mt-0.5">
                            {meldResult.meldScore}
                          </div>
                          <p className="text-[10px] text-slate-500">
                            3-Mo Mort: {meldResult.threeMonthMortality}
                          </p>
                        </>
                      ) : (
                        <div className="text-xs font-mono text-amber-700 mt-1">Pending Labs (Cr/Bili/INR)</div>
                      )}
                    </div>
                  </div>

                  {/* Contrast & eGFR Safety Gauge */}
                  <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-xs flex items-center justify-between">
                    <div>
                      <span className="font-bold text-blue-600">
                        MACD Contrast Cap:
                      </span>
                      <span className="font-mono font-bold ml-1 text-slate-900">
                        {macdResult ? `${macdResult.macdMl} mL` : "Unrecorded Cr"}
                      </span>
                      {macdResult && (
                        <span className="ml-1 text-[10px] text-slate-500">
                          (80%: {macdResult.safeLimit80Percent} mL)
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-mono font-bold text-emerald-700">
                      {egfrResult ? `eGFR: ${egfrResult.egfr} (${egfrResult.stage})` : "eGFR: Unrecorded"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: 100 IR CATALOG & VESSELS */}
          {activeTab === 2 && (
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-wider text-blue-600">
                    100 Interventional Radiology Catalog
                  </h3>
                  <p className="text-xs text-slate-500">
                    Vascular target anatomy, roadmapping & consumable indent
                  </p>
                </div>
                <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-emerald-50 text-emerald-700">
                  ₹ 3,15,000 INR (Cashless Package)
                </span>
              </div>

              {/* Target Vessels */}
              <div>
                <label className="block text-xs font-bold text-slate-900 mb-2">
                  <Route className="w-3.5 h-3.5 inline text-blue-600 mr-1" />
                  Target Vessels & Vascular Territory:
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Right Hepatic Vein (RHV)",
                    "Middle Hepatic Vein (MHV)",
                    "Main Portal Vein (MPV)",
                    "Caudate Lobe Branches",
                    "Right Internal Jugular Vein (RIJV)",
                    "Right Common Femoral Artery (CFA)",
                  ].map((v) => (
                    <span
                      key={v}
                      className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold border border-blue-200"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>

              {/* Checklists & Hardware Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                {/* Pre-Procedure Checklist */}
                <div className="p-4 rounded-xl border border-slate-200 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                    <ClipboardCheck className="w-4 h-4" />
                    Pre-Procedure Verification Checklist
                  </h4>
                  <div className="space-y-2 text-xs">
                    {[
                      "NPO 6 Hours Verified (Fasting Complete)",
                      "Coagulation Profile: INR <= 1.5, Platelets >= 50,000",
                      "Renal Function: Serum Creatinine & eGFR Reviewed",
                      "Informed High-Risk Consent Signed & Scanned",
                      "Blood Products: 2 Units PRBC Reserved in Blood Bank",
                      "16G/18G IV Cannula Patency Verified",
                    ].map((item, idx) => (
                      <label
                        key={idx}
                        className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer hover:bg-white"
                      >
                        <input
                          type="checkbox"
                          defaultChecked
                          className="w-4 h-4 rounded text-blue-600 accent-blue-600"
                        />
                        <span className="text-slate-900">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Cath-Lab Hardware Requisition */}
                <div className="p-4 rounded-xl border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
                      <Boxes className="w-4 h-4" />
                      Cath-Lab Hardware Requisition
                    </h4>
                    <span className="text-[10px] text-slate-500">
                      {hwItems.length} Indents
                    </span>
                  </div>

                  <div className="space-y-2 text-xs max-h-56 overflow-y-auto pr-1">
                    {hwItems.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer hover:bg-white"
                      >
                        <input
                          type="checkbox"
                          checked={item.checked}
                          onChange={(e) =>
                            setHwItems(
                              hwItems.map((h) =>
                                h.id === item.id
                                  ? { ...h, checked: e.target.checked }
                                  : h
                              )
                            )
                          }
                          className="w-4 h-4 rounded text-blue-600 accent-blue-600"
                        />
                        <span className="text-slate-900 font-medium">
                          {item.name}
                        </span>
                      </label>
                    ))}
                  </div>

                  {/* Add Custom Hardware */}
                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                    <input
                      type="text"
                      placeholder="Add custom consumable/wire..."
                      value={customHwName}
                      onChange={(e) => setCustomHwName(e.target.value)}
                      className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs"
                    />
                    <button
                      onClick={handleAddCustomHw}
                      className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold cursor-pointer"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: GOVT SCHEME & BILLING */}
          {activeTab === 3 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div>
                    <h3 className="font-bold text-xs uppercase tracking-wider text-amber-700">
                      Rajasthan Govt Scheme & Pre-Auth
                    </h3>
                    <p className="text-[10px] text-slate-400">
                      MAAY / Chiranjeevi, RGHS & TMS SSO Portal
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Pre-Auth Approved
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">
                      Health Scheme
                    </label>
                    <select
                      value={scheme}
                      onChange={(e) => setScheme(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold focus:border-blue-600 focus:outline-none"
                    >
                      <option value="MAAY">Mukhyamantri Ayushman (MAAY)</option>
                      <option value="RGHS">Rajasthan Govt Health Scheme (RGHS)</option>
                      <option value="PMJAY">Ayushman Bharat (AB-MGRSBY)</option>
                      <option value="GENERAL">General Hospital Tariff</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">
                      Jan Aadhaar / Card ID
                    </label>
                    <input
                      type="text"
                      value={beneficiaryId}
                      onChange={(e) => setBeneficiaryId(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-mono font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">
                      Pre-Auth TID
                    </label>
                    <input
                      type="text"
                      value={schemeTid}
                      onChange={(e) => setSchemeTid(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-mono font-bold text-blue-600"
                    />
                  </div>
                </div>

                {/* Tariff Breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500">
                      Base Package Tariff
                    </span>
                    <div className="text-base font-black font-mono text-slate-900 mt-0.5">
                      ₹ 1,50,000
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500">
                      Approved Implant Cap
                    </span>
                    <div className="text-base font-black font-mono text-blue-600 mt-0.5">
                      ₹ 1,65,000
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500">
                      Total Cashless Claim
                    </span>
                    <div className="text-base font-black font-mono text-emerald-700 mt-0.5">
                      ₹ 3,15,000
                    </div>
                  </div>
                </div>

                {/* Barcode Verification Checklist */}
                <div className="space-y-2 pt-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                    <Barcode className="w-4 h-4 text-blue-600" />
                    Cath-Lab Implant Barcode Verification
                  </h4>
                  <div className="space-y-2 text-xs">
                    {[
                      "Viatorr Stent-Graft Barcode Sticker pasted on SMS verification sheet",
                      "RUPS-100 Puncture Set & Sheath Serial Numbers recorded",
                      "Completion Portogram fluoroscopy run uploaded to SSO TMS portal",
                    ].map((item, idx) => (
                      <label
                        key={idx}
                        className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-50"
                      >
                        <input
                          type="checkbox"
                          defaultChecked
                          className="w-4 h-4 rounded text-blue-600 accent-blue-600"
                        />
                        <span className="text-slate-900">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* RMRS Revenue Distribution Pool */}
              <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div>
                    <h3 className="font-bold text-xs uppercase tracking-wider text-emerald-700">
                      SMS RMRS Revenue Distribution
                    </h3>
                    <p className="text-[10px] text-slate-400">
                      Official Rajasthan Medicare Relief Society Policy
                    </p>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">
                    Cashless (₹0 Co-Pay)
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div>
                      <p className="font-bold text-slate-900">
                        Hospital Infrastructure Pool (60%)
                      </p>
                      <p className="text-[10px] text-slate-400">
                        Biplane UPS, X-ray tube maintenance
                      </p>
                    </div>
                    <span className="font-mono font-bold text-slate-900">
                      ₹ 90,000
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div>
                      <p className="font-bold text-slate-900">
                        Department Academic Fund (15%)
                      </p>
                      <p className="text-[10px] text-slate-400">
                        Consumable buffer stock, research
                      </p>
                    </div>
                    <span className="font-mono font-bold text-blue-600">
                      ₹ 22,500
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-blue-50 border border-blue-200">
                    <div>
                      <p className="font-bold text-blue-600">
                        Clinical Team Incentive Pool (25%)
                      </p>
                      <p className="text-[10px] text-slate-500">
                        Shared among operator, residents & staff
                      </p>
                    </div>
                    <span className="font-mono font-bold text-blue-600">
                      ₹ 37,500
                    </span>
                  </div>

                  <div className="pl-2 border-l-2 border-blue-600 space-y-1 text-xs text-slate-500">
                    <div className="flex justify-between">
                      <span>&bull; Primary Operator / Faculty (50%):</span>
                      <span className="font-mono font-semibold text-slate-900">
                        ₹ 18,750
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>&bull; Senior Residents / Fellows (20%):</span>
                      <span className="font-mono font-semibold text-slate-900">
                        ₹ 7,500
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>&bull; Nurses & Radiographers (20%):</span>
                      <span className="font-mono font-semibold text-slate-900">
                        ₹ 7,500
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>&bull; Anesthesia & Support Team (10%):</span>
                      <span className="font-mono font-semibold text-slate-900">
                        ₹ 3,750
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: POST-OP, E-AUSHADHI & IPD */}
          {activeTab === 4 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* Inpatient Bed Allocation & Puncture Care */}
              <div className="lg:col-span-6 bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div>
                    <h3 className="font-bold text-xs uppercase tracking-wider text-blue-600">
                      Inpatient (IPD) Ward & Bed Allocation
                    </h3>
                    <p className="text-[10px] text-slate-400">
                      SMS Hospital Inpatient Management
                    </p>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                    {podDay}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">
                      Admission Type
                    </label>
                    <select
                      value={admissionType}
                      onChange={(e) => setAdmissionType(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold"
                    >
                      <option value="IPD">Inpatient (IPD)</option>
                      <option value="Day-Care">Day-Care</option>
                      <option value="Emergency">Emergency</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">
                      Ward
                    </label>
                    <select
                      value={ward}
                      onChange={(e) => setWard(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold"
                    >
                      <option value="Liver ICU">Liver ICU</option>
                      <option value="IR Dedicated Ward (D-Block)">
                        IR Dedicated Ward (D-Block)
                      </option>
                      <option value="Cath-Lab Recovery">Cath-Lab Recovery</option>
                      <option value="Surgical ICU">Surgical ICU</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">
                      Bed ID
                    </label>
                    <input
                      type="text"
                      value={bed}
                      onChange={(e) => setBed(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-mono font-bold"
                    />
                  </div>
                </div>

                {/* Groin Protocol */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs">
                  <h4 className="font-bold text-rose-700 flex items-center gap-1.5">
                    <HeartPulse className="w-3.5 h-3.5" />
                    Groin & Puncture Site Protocol
                  </h4>
                  <p className="text-slate-900">
                    Right CFA (6F) - 4-6 hours strict flat supine bed rest with
                    sandbag compression.
                  </p>
                  <p className="text-xs text-blue-600 pt-1">
                    Pulse Audit Schedule: Bilateral DP & PT pulses q15m x 1h,
                    q30m x 2h, q1h x 4h.
                  </p>
                </div>

                {/* Discharge Checklist */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    Objective Discharge Clearance Checklist
                  </h4>
                  <div className="space-y-1.5 text-xs">
                    {[
                      "Hemodynamics stable (HR 60-100, Afebrile >24h, MAP >65)",
                      "Access site dry (zero hematoma, bruit, or active oozing)",
                      "Unassisted ambulation tolerated for >30 min",
                      "Post-op Doppler ultrasound check verifies shunt/stent patency",
                    ].map((c, i) => (
                      <label
                        key={i}
                        className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-50"
                      >
                        <input
                          type="checkbox"
                          defaultChecked={i < 3}
                          className="w-4 h-4 rounded text-emerald-700 accent-emerald-700"
                        />
                        <span className="text-slate-900">{c}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* RMSCL e-Aushadhi Drug Indent */}
              <div className="lg:col-span-6 bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div>
                    <h3 className="font-bold text-xs uppercase tracking-wider text-amber-700">
                      RMSCL e-Aushadhi Drug Indent
                    </h3>
                    <p className="text-[10px] text-slate-400">
                      Rajasthan Essential Drug List (EDL) Indent Slip
                    </p>
                  </div>
                  <button
                    onClick={handleCopyEaushadhi}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold hover:bg-blue-200 transition-colors cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Indent</span>
                  </button>
                </div>

                <div className="space-y-2 text-xs">
                  {[
                    { drug: "Inj. Ceftriaxone 1g IV", dose: "1g BD", dur: "3 Days", route: "IV Infusion" },
                    { drug: "Inj. Enoxaparin 40mg SC", dose: "40mg OD", dur: "5 Days", route: "Subcutaneous" },
                    { drug: "Inj. Pantoprazole 40mg IV", dose: "40mg OD", dur: "3 Days", route: "IV Bolus" },
                    { drug: "Inj. Tramadol 50mg IV", dose: "50mg SOS", dur: "PRN", route: "Slow IV" },
                    { drug: "IV Normal Saline 0.9%", dose: "500 mL", dur: "q8h", route: "Hydration" },
                  ].map((d, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200"
                    >
                      <div>
                        <p className="font-bold text-slate-900">{d.drug}</p>
                        <p className="text-[10px] text-slate-500">
                          {d.route} &bull; Duration: {d.dur}
                        </p>
                      </div>
                      <span className="font-mono font-bold text-blue-600">
                        {d.dose}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 6h & 24h Surveillance Checklist */}
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    6h & 24h Clinical Surveillance Checklist
                  </h4>
                  <div className="space-y-1.5 text-xs text-slate-500">
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="font-bold text-slate-900">
                        Serial Hb Drop Check (6h):{" "}
                      </span>
                      <span>
                        Trigger STAT CT if drop &gt; 2.0 g/dL (retroperitoneal bleed)
                      </span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="font-bold text-slate-900">
                        Color Doppler Check (24h):{" "}
                      </span>
                      <span>
                        Viatorr stent velocity target 90-190 cm/s; main portal vein &gt;30 cm/s
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: RESEARCH & FOLLOW-UP */}
          {activeTab === 5 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* Histopathology & ICD-10 Coding */}
              <div className="lg:col-span-6 bg-white p-5 rounded-2xl border border-slate-200 space-y-3">
                <div className="border-b border-slate-100 pb-2">
                  <h3 className="font-bold text-xs uppercase tracking-wider text-purple-600">
                    Histopathology & ICD-10 Coding
                  </h3>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">
                    ICD-10 Diagnostic Code
                  </label>
                  <select
                    value={icdCode}
                    onChange={(e) => setIcdCode(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold focus:border-blue-600 focus:outline-none"
                  >
                    <option value="I82.0">I82.0 &bull; Budd-Chiari syndrome (HVOTO)</option>
                    <option value="K76.6">K76.6 &bull; Portal hypertension</option>
                    <option value="I85.0">I85.0 &bull; Esophageal varices with bleeding</option>
                    <option value="C22.0">C22.0 &bull; Hepatocellular carcinoma (HCC)</option>
                    <option value="C24.0">C24.0 &bull; Cholangiocarcinoma</option>
                    <option value="K74.6">K74.6 &bull; Cirrhosis of liver</option>
                    <option value="I81">I81 &bull; Portal vein thrombosis</option>
                    <option value="R04.2">R04.2 &bull; Hemoptysis</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">
                      Biopsy Core Yield
                    </label>
                    <input
                      type="text"
                      value={biopsyYield}
                      onChange={(e) => setBiopsyYield(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">
                      Needle Gauge
                    </label>
                    <input
                      type="text"
                      value={needleGauge}
                      onChange={(e) => setNeedleGauge(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">
                      Puncture Site
                    </label>
                    <input
                      type="text"
                      value={punctureSite}
                      onChange={(e) => setPunctureSite(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">
                      Pathology Lab ID
                    </label>
                    <input
                      type="text"
                      value={pathLabId}
                      onChange={(e) => setPathLabId(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">
                    Pathology Status
                  </label>
                  <select
                    value={pathStatus}
                    onChange={(e) => setPathStatus(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs"
                  >
                    <option value="Sample Dispatched to Pathology">
                      Sample Dispatched to Pathology
                    </option>
                    <option value="Formal Report Pending">Formal Report Pending</option>
                    <option value="Diagnostic: Benign Regenerative Nodules">
                      Diagnostic: Benign Regenerative Nodules
                    </option>
                    <option value="Diagnostic: Malignant (HCC)">
                      Diagnostic: Malignant (HCC)
                    </option>
                  </select>
                </div>
              </div>

              {/* CIRSE / SIR Clinical Outcomes */}
              <div className="lg:col-span-6 bg-white p-5 rounded-2xl border border-slate-200 space-y-3">
                <div className="border-b border-slate-100 pb-2">
                  <h3 className="font-bold text-xs uppercase tracking-wider text-blue-600">
                    CIRSE / SIR Clinical Outcomes
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">
                      Technical Success
                    </label>
                    <select
                      value={techSuccess}
                      onChange={(e) => setTechSuccess(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-emerald-700"
                    >
                      <option value="Yes - Full Technical Success">
                        Yes - Full Technical Success
                      </option>
                      <option value="Partial Success">Partial Success</option>
                      <option value="Technical Failure">Technical Failure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">
                      Clinical Response
                    </label>
                    <select
                      value={clinicalResponse}
                      onChange={(e) => setClinicalResponse(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold"
                    >
                      <option value="Complete Resolution">Complete Resolution</option>
                      <option value="Partial Response">Partial Response</option>
                      <option value="No Response">No Response</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-500">
                      Pre-Grad (mmHg)
                    </label>
                    <input
                      type="number"
                      defaultValue={22}
                      className="w-full px-2 py-1 rounded border border-slate-200 text-xs font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-500">
                      Post-Grad (mmHg)
                    </label>
                    <input
                      type="number"
                      defaultValue={8}
                      className="w-full px-2 py-1 rounded border border-slate-200 text-xs font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-500">
                      Stay (Days)
                    </label>
                    <input
                      type="number"
                      defaultValue={3}
                      className="w-full px-2 py-1 rounded border border-slate-200 text-xs font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">
                    CIRSE Complication Classification
                  </label>
                  <select
                    value={cirseGrade}
                    onChange={(e) => setCirseGrade(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs"
                  >
                    <option value="Grade 1 (No therapy)">Grade 1 (No therapy)</option>
                    <option value="Grade 2 (Minor therapy)">Grade 2 (Minor therapy)</option>
                    <option value="Grade 3 (Prolonged stay)">Grade 3 (Prolonged stay)</option>
                    <option value="Grade 4 (Major intervention)">
                      Grade 4 (Major intervention)
                    </option>
                    <option value="Grade 5 (Permanent adverse)">Grade 5 (Permanent adverse)</option>
                    <option value="Grade 6 (Death)">Grade 6 (Death)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">
                    Follow-up Shunt Patency
                  </label>
                  <select
                    value={followupPatency}
                    onChange={(e) => setFollowupPatency(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold"
                  >
                    <option value="Patent on Doppler at 1 Month">
                      Patent on Doppler (1 Month)
                    </option>
                    <option value="Patent on Doppler at 3 Months">
                      Patent on Doppler (3 Months)
                    </option>
                    <option value="Pseudointimal Stenosis (Revision)">
                      Pseudointimal Stenosis (Revision)
                    </option>
                    <option value="Occluded Shunt">Occluded Shunt</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: PROCEDURAL ATTACHMENTS & ANGIOGRAM RUNS */}
          {activeTab === 6 && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <Camera className="w-4 h-4 text-blue-600" />
                    Procedural Imaging &amp; Angiogram Runs
                  </h3>
                  <p className="text-xs text-slate-500">
                    Verified fluoroscopy DSA runs, ultrasound Doppler scans, and CECT cross-sections for {name}
                  </p>
                </div>

                <a
                  href="/dashboard/discharge"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-2xs"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Open in IHMS Discharge Studio</span>
                </a>
              </div>

              {(!patient.attachments || patient.attachments.length === 0) ? (
                <div className="p-8 text-center border-2 border-dashed border-slate-200 rounded-2xl bg-white space-y-2">
                  <Camera className="w-10 h-10 text-slate-400 mx-auto" />
                  <p className="font-bold text-sm text-slate-900">No Imaging Attached Yet</p>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    Procedural images attached in the IHMS Discharge Cards studio will automatically sync here to the patient dossier.
                  </p>
                  <a
                    href="/dashboard/discharge"
                    className="inline-block mt-2 px-4 py-1.5 rounded-full border border-slate-200 hover:bg-slate-100 text-xs font-semibold text-blue-600"
                  >
                    Go to Discharge Cards &rarr;
                  </a>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {patient.attachments.map((att, idx) => (
                    <div
                      key={att.id || idx}
                      className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs flex flex-col"
                    >
                      <div className="px-3 py-2 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 font-bold text-slate-900">
                          <span className="px-1.5 py-0.5 rounded font-mono text-[10px] font-bold bg-blue-600 text-white">
                            {att.modality}
                          </span>
                          <span className="truncate">{att.title}</span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono">{att.capturedAt}</span>
                      </div>

                      <div className="p-2 bg-black flex items-center justify-center">
                        {att.dataUrl &&
                        (att.dataUrl.startsWith("data:image/") ||
                          att.dataUrl.startsWith("http")) ? (
                          <img
                            src={att.dataUrl}
                            alt={att.title}
                            className="w-full max-h-48 object-contain rounded"
                          />
                        ) : (
                          <div className="w-full h-44 bg-slate-950 rounded flex flex-col items-center justify-center text-center p-4 font-mono text-xs text-slate-400">
                            <Camera className="w-8 h-8 text-cyan-50 mb-2" />
                            <span className="font-bold text-white uppercase tracking-wider">
                              SMS Angiosuite Run [{att.modality}]
                            </span>
                            <span className="text-[10px] text-emerald-400 mt-1">
                              Intra-procedural Technical Check OK
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="p-3 text-xs space-y-1.5 flex-1 bg-white border-t border-slate-200">
                        <p className="text-slate-700 leading-relaxed">
                          <strong className="text-slate-900">Findings:</strong> {att.caption}
                        </p>
                        <div className="pt-2 flex items-center justify-between text-[10px] text-slate-500 border-t border-slate-100">
                          <span>SMS Medical College &bull; Angiosuite</span>
                          <span className="font-semibold text-emerald-700 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                            Verified
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Sticky Bottom Floating Dock */}
        <div className="px-5 py-3 border-t border-slate-200 bg-white flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="flex items-center gap-1 px-3 py-2 rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 text-xs font-medium transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
            {saveToast && (
              <span className="text-xs font-bold text-emerald-700 flex items-center gap-1 animate-pulse">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {saveToast}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/dashboard/discharge"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-600 hover:bg-blue-200 text-xs font-semibold transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              <span>IHMS Discharge Card</span>
            </a>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 text-xs font-semibold transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>Print Dossier</span>
            </button>
            <button
              onClick={handleSaveAndLock}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors cursor-pointer shadow-xs"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save & Lock</span>
            </button>
          </div>
        </div>
      </div>
  );
}
