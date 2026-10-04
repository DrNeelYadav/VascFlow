"use client";

import React, { useState, useEffect } from "react";
import {
  AlertTriangle,
  Zap,
  Clock,
  ShieldAlert,
  CheckCircle2,
  X,
  Activity,
  ArrowRight,
  Calculator,
} from "lucide-react";
import { CaseStatus, PatientWorklistEntry, DEPARTMENT_ROOMS } from "./worklistData";

interface StatEmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onActivateStatCase: (newCase: PatientWorklistEntry) => void;
}

const STAT_PRESETS = [
  {
    title: "Duodenoileus / SMA Syndrome",
    procedure: "Duodenoileus / SMA Syndrome Endovascular Stenting",
    indication: "Acute Duodenal Obstruction & Aorto-Mesenteric Compression",
    modality: "XA" as const,
    room: "Cath Lab (Philips Azurion)",
    durationMinutes: 75,
  },
  {
    title: "Acute Mesenteric Ischemia",
    procedure: "Emergent SMA Catheter-Directed Thrombolysis & Stenting",
    indication: "Superior Mesenteric Artery Occlusion / Gut Ischemia",
    modality: "XA" as const,
    room: "Cath Lab (Philips Azurion)",
    durationMinutes: 90,
  },
  {
    title: "Massive Hemoptysis (BAE)",
    procedure: "Bronchial Artery Embolization (BAE)",
    indication: "Exsanguinating Hemoptysis (>300mL/24h) Post-TB",
    modality: "XA" as const,
    room: "Cath Lab (Philips Azurion)",
    durationMinutes: 60,
  },
  {
    title: "Pelvic / Trauma Hemorrhage",
    procedure: "Pelvic / Internal Iliac Artery Balloon Occlusion & Embolization",
    indication: "Hemodynamically Unstable Pelvic Fracture Bleed",
    modality: "XA" as const,
    room: "Cath Lab (Philips Azurion)",
    durationMinutes: 60,
  },
  {
    title: "Ruptured Visceral Aneurysm",
    procedure: "Splenic / Hepatic Artery Aneurysm Coil Embolization",
    indication: "Active Pseudoaneurysm Bleed with Shock",
    modality: "XA" as const,
    room: "Cath Lab (Philips Azurion)",
    durationMinutes: 75,
  },
  {
    title: "Obstructive Pyonephrosis",
    procedure: "Emergent Percutaneous Nephrostomy (PCN)",
    indication: "Obstructive Urosepsis with Stone / Stricture",
    modality: "US" as const,
    room: "PTBD Room",
    durationMinutes: 30,
  },
  {
    title: "Acute Cholangitis (PTBD)",
    procedure: "Emergent Percutaneous Transhepatic Biliary Drainage (PTBD)",
    indication: "Septic Shock / Cholangitis with Biliary Obstruction",
    modality: "XA" as const,
    room: "PTBD Room",
    durationMinutes: 45,
  },
];

export const BLANK_STAT_FORM = {
  patientName: "",
  crNumber: "",
  procedureName: STAT_PRESETS[0].procedure,
  statIndication: STAT_PRESETS[0].indication,
  room: STAT_PRESETS[0].room,
  modality: STAT_PRESETS[0].modality,
  operatorResident: "Dr. Neel Yadav",
  supervisingConsultant: "Dr. Meenu Bagarhatta",
  serumCreatinine: "",
  isDialysisPatient: false,
};

export function StatEmergencyModal({
  isOpen,
  onClose,
  onActivateStatCase,
}: StatEmergencyModalProps) {
  const [selectedPresetIndex, setSelectedPresetIndex] = useState<number>(0);
  const [patientName, setPatientName] = useState<string>(BLANK_STAT_FORM.patientName);
  const [crNumber, setCrNumber] = useState<string>(BLANK_STAT_FORM.crNumber);
  const [procedureName, setProcedureName] = useState<string>(STAT_PRESETS[0].procedure);
  const [statIndication, setStatIndication] = useState<string>(STAT_PRESETS[0].indication);
  const [room, setRoom] = useState<string>(STAT_PRESETS[0].room);
  const [modality, setModality] = useState<"XA" | "CT" | "US" | "ROSE">(STAT_PRESETS[0].modality);
  const [operatorResident, setOperatorResident] = useState<string>(BLANK_STAT_FORM.operatorResident);
  const [supervisingConsultant, setSupervisingConsultant] = useState<string>(BLANK_STAT_FORM.supervisingConsultant);
  const [serumCreatinine, setSerumCreatinine] = useState<string>(BLANK_STAT_FORM.serumCreatinine);
  const [isDialysisPatient, setIsDialysisPatient] = useState<boolean>(false);
  const [inr, setInr] = useState<string>("1.1");
  const [platelets, setPlatelets] = useState<string>("220000");
  const [hasContrastAllergy, setHasContrastAllergy] = useState<boolean>(false);
  const [isOverrideConfirmed, setIsOverrideConfirmed] = useState<boolean>(false);
  const [overrideReason, setOverrideReason] = useState<string>("Emergent life/limb salvage indication");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    if (!isOpen) return;
    setPatientName(BLANK_STAT_FORM.patientName);
    setCrNumber(BLANK_STAT_FORM.crNumber);
    setSelectedPresetIndex(0);
    setProcedureName(STAT_PRESETS[0].procedure);
    setStatIndication(STAT_PRESETS[0].indication);
    setRoom(STAT_PRESETS[0].room);
    setModality(STAT_PRESETS[0].modality);
    setOperatorResident(BLANK_STAT_FORM.operatorResident);
    setSupervisingConsultant(BLANK_STAT_FORM.supervisingConsultant);
    setSerumCreatinine(BLANK_STAT_FORM.serumCreatinine);
    setIsDialysisPatient(false);
    setInr("1.1");
    setPlatelets("220000");
    setHasContrastAllergy(false);
    setIsOverrideConfirmed(false);
    setOverrideReason("Emergent life/limb salvage indication");
    setIsSubmitting(false);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const inrNum = parseFloat(inr) || 1.1;
  const pltNum = parseFloat(platelets) || 220000;
  const creatNum = parseFloat(serumCreatinine) || 1.0;
  const isHardStop = inrNum > 1.5 || pltNum < 50000 || creatNum > 2.0 || hasContrastAllergy;

  const creatinineNum = parseFloat(serumCreatinine) || 1.0;
  const isAkiRisk = creatinineNum >= 2.0 || isDialysisPatient;

  const handleSelectPreset = (index: number) => {
    setSelectedPresetIndex(index);
    const preset = STAT_PRESETS[index];
    setProcedureName(preset.procedure);
    setStatIndication(preset.indication);
    setRoom(preset.room);
    setModality(preset.modality);
  };

  const handleActivate = async () => {
    setIsSubmitting(true);
    const caseId = `CASE-STAT-${Date.now()}`;
    const plannedTime = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const newStatEntry: PatientWorklistEntry = {
      caseId,
      crNumber: crNumber.trim() || `STAT-SMS-${Date.now()}`,
      patientName: patientName.trim() || "STAT Emergency Patient",
      procedureName: procedureName.trim(),
      plannedTime,
      operatorResident,
      supervisingConsultant,
      status: "IN_PROCEDURE",
      fastingConfirmed: true,
      contrastAllergy: hasContrastAllergy,
      room,
      modality,
      durationMinutes: STAT_PRESETS[selectedPresetIndex]?.durationMinutes || 60,
      isStat: true,
      statIndication,
    };

    try {
      // Asynchronously trigger status audit log
      await fetch(`/api/cases/${caseId}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nextStatus: "IN_PROCEDURE",
          notes: `STAT Emergency Activation: ${statIndication} - Room: ${room} - Operator: ${operatorResident}`,
        }),
      }).catch((e) => console.warn("Background STAT status dispatch warning:", e));
    } finally {
      setIsSubmitting(false);
      onActivateStatCase(newStatEntry);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-2xl border-2 border-rose-600 bg-white shadow-2xl overflow-hidden">
        {/* Top Emergency Banner */}
        <div className="bg-rose-600 text-white px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-white animate-pulse">
              <Zap className="h-5 w-5 fill-white" />
            </div>
            <div>
              <h2 className="text-base font-black tracking-wide uppercase">
                STAT Emergency Fast-Path Activation
              </h2>
              <p className="text-xs text-white/90 font-medium">
                Immediate 1-Click On-Table Admission &bull; Bypasses Elective Bureaucracy
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-white/80 hover:text-white hover:bg-white/10 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-5 space-y-4 max-h-[80vh] overflow-y-auto">
          {/* Quick Preset Selector */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Select Acute Emergency Preset:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {STAT_PRESETS.map((preset, idx) => (
                <button
                  key={preset.title}
                  type="button"
                  onClick={() => handleSelectPreset(idx)}
                  className={`text-left p-2.5 rounded-xl border text-xs transition font-medium ${
                    selectedPresetIndex === idx
                      ? "border-rose-600 bg-rose-50 text-rose-700 font-bold shadow-2xs"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:border-rose-600/50"
                  }`}
                >
                  <div className="truncate">{preset.title}</div>
                  <div className="text-[10px] text-slate-500 truncate font-normal">
                    {preset.modality} &bull; {preset.durationMinutes}m
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="text-xs font-bold text-slate-900 block mb-1">
                Patient Name
              </label>
              <input
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                autoComplete="off"
                data-lpignore="true"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium focus:border-rose-600 focus:outline-hidden focus:ring-1 focus:ring-rose-600"
                placeholder="e.g. Rameshwar Sharma"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-bold text-slate-900">
                  CR / UHID Number
                </label>
                <button
                  type="button"
                  onClick={() =>
                    setCrNumber(`STAT-SMS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`)
                  }
                  className="text-[10px] font-semibold text-blue-600 hover:underline"
                >
                  Regen STAT CR
                </button>
              </div>
              <input
                type="text"
                value={crNumber}
                onChange={(e) => setCrNumber(e.target.value)}
                autoComplete="off"
                data-lpignore="true"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-mono font-medium focus:border-rose-600 focus:outline-hidden"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-900 block mb-1">
                Emergency Procedure Title
              </label>
              <input
                type="text"
                value={procedureName}
                onChange={(e) => setProcedureName(e.target.value)}
                autoComplete="off"
                data-lpignore="true"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium focus:border-rose-600 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-900 block mb-1">
                Target Room / Angio Suite
              </label>
              <select
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium bg-white focus:border-rose-600 focus:outline-hidden"
              >
                {DEPARTMENT_ROOMS.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-900 block mb-1">
                Operating Lead Resident
              </label>
              <select
                value={operatorResident}
                onChange={(e) => setOperatorResident(e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium bg-white focus:border-rose-600 focus:outline-hidden"
              >
                <option value="Dr. Neel Yadav">Dr. Neel Yadav (DM-01)</option>
                <option value="Dr. Nilesh Gupta">Dr. Nilesh Gupta (DM-02)</option>
                <option value="Dr. Alok Verma">Dr. Alok Verma (Assistant Prof)</option>
                <option value="Dr. Meenu Bagarhatta">Dr. Meenu Bagarhatta (Sr Prof & HOD)</option>
              </select>
            </div>
          </div>

          {/* Clinical Nephrotoxicity, Coagulation & Contrast Safety Guardrail */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Calculator className="h-3.5 w-3.5 text-slate-500" />
                Urgent Renal &amp; Hemostasis Pre-Check
              </span>
              <label className="flex items-center gap-1.5 text-xs text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isDialysisPatient}
                  onChange={(e) => setIsDialysisPatient(e.target.checked)}
                  className="rounded border-slate-200 text-rose-600 focus:ring-rose-600"
                />
                <span>Active Dialysis Patient</span>
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500">Creatinine:</span>
                <input
                  type="number"
                  step="0.1"
                  min="0.4"
                  max="12.0"
                  value={serumCreatinine}
                  autoComplete="off"
                  data-lpignore="true"
                  onChange={(e) => setSerumCreatinine(e.target.value)}
                  className="w-20 rounded-lg border border-slate-200 px-2 py-1 text-xs font-mono font-bold bg-white"
                />
                <span className="text-xs text-slate-500">mg/dL</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500">INR:</span>
                <input
                  type="number"
                  step="0.1"
                  min="0.8"
                  max="10.0"
                  value={inr}
                  autoComplete="off"
                  data-lpignore="true"
                  onChange={(e) => setInr(e.target.value)}
                  className="w-20 rounded-lg border border-slate-200 px-2 py-1 text-xs font-mono font-bold bg-white"
                  placeholder="1.1"
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500">Platelets:</span>
                <input
                  type="number"
                  step="1000"
                  min="5000"
                  max="1000000"
                  value={platelets}
                  autoComplete="off"
                  data-lpignore="true"
                  onChange={(e) => setPlatelets(e.target.value)}
                  className="w-24 rounded-lg border border-slate-200 px-2 py-1 text-xs font-mono font-bold bg-white"
                  placeholder="220000"
                />
                <span className="text-xs text-slate-500">/µL</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-slate-200 flex-wrap gap-2">
              <label className="flex items-center gap-1.5 text-xs text-rose-700 font-semibold cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasContrastAllergy}
                  onChange={(e) => setHasContrastAllergy(e.target.checked)}
                  className="rounded border-slate-200 text-rose-600 focus:ring-rose-600"
                />
                <span>Severe Contrast Allergy History</span>
              </label>

              {isAkiRisk && (
                <div className="flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-lg border border-rose-600/30">
                  <ShieldAlert className="h-3.5 w-3.5 shrink-0" />
                  <span>CIRSE Hard Cap: Maximum 40 mL Contrast</span>
                </div>
              )}
            </div>
          </div>

          {/* Hard-Stop Warning Banner & Override Checkbox */}
          {isHardStop && (
            <div className="rounded-xl border-2 border-rose-600 bg-rose-50 p-3.5 space-y-2.5">
              <div className="flex items-start gap-2.5">
                <AlertTriangle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5 animate-pulse" />
                <div className="text-xs font-bold text-rose-700 leading-snug">
                  CRITICAL CLINICAL HARD-STOP: Elevated puncture-site bleeding risk (INR &gt; 1.5 / Platelets &lt; 50k), severe renal impairment (Cr &gt; 2.0), or contrast anaphylaxis risk detected.
                </div>
              </div>

              <div className="rounded-lg bg-white border border-rose-600/40 p-2.5 space-y-2">
                <label className="flex items-start gap-2 text-xs font-bold text-rose-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isOverrideConfirmed}
                    onChange={(e) => setIsOverrideConfirmed(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-rose-600 text-rose-600 focus:ring-rose-600 cursor-pointer"
                  />
                  <span>
                    I confirm explicit Senior Operator Emergency Override for life/limb salvage and accept procedural risks.
                  </span>
                </label>

                {isOverrideConfirmed && (
                  <div className="pt-1">
                    <label className="text-[10px] uppercase font-bold text-slate-500 block mb-1">
                      Override Indication / Documentation:
                    </label>
                    <input
                      type="text"
                      value={overrideReason}
                      onChange={(e) => setOverrideReason(e.target.value)}
                      className="w-full text-xs font-medium border border-slate-200 rounded-lg px-2.5 py-1.5 bg-slate-50 focus:border-rose-600 focus:outline-hidden"
                      placeholder="Emergent life/limb salvage indication"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <div className="bg-slate-50 px-5 py-3.5 border-t border-slate-200 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            Status set immediately to: <span className="font-bold text-slate-900">IN_PROCEDURE (ON TABLE)</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-500 hover:bg-slate-100 transition"
            >
              Cancel
            </button>
            <button
              type="button"
              disabled={isSubmitting || (isHardStop && !isOverrideConfirmed)}
              onClick={handleActivate}
              className="flex items-center gap-2 rounded-xl bg-rose-600 hover:bg-rose-600 text-white px-5 py-2 text-xs font-bold shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Zap className="h-4 w-4 fill-white" />
              <span>{isSubmitting ? "Activating..." : "ACTIVATE ON TABLE STAT"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
