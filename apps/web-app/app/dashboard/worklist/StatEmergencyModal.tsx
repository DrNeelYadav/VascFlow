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
      contrastAllergy: false,
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
      <div className="relative w-full max-w-2xl rounded-2xl border-2 border-[#EA4335] bg-[#FFFFFF] shadow-2xl overflow-hidden">
        {/* Top Emergency Banner */}
        <div className="bg-[#EA4335] text-white px-5 py-3.5 flex items-center justify-between">
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
            <label className="text-xs font-bold uppercase tracking-wider text-[#5F6368] block mb-2">
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
                      ? "border-[#EA4335] bg-[#FCE8E6] text-[#C5221F] font-bold shadow-2xs"
                      : "border-[#DADCE0] bg-[#F8F9FA] text-[#3C4043] hover:border-[#EA4335]/50"
                  }`}
                >
                  <div className="truncate">{preset.title}</div>
                  <div className="text-[10px] text-[#70757A] truncate font-normal">
                    {preset.modality} &bull; {preset.durationMinutes}m
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="text-xs font-bold text-[#202124] block mb-1">
                Patient Name
              </label>
              <input
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                autoComplete="off"
                data-lpignore="true"
                className="w-full rounded-xl border border-[#DADCE0] px-3 py-2 text-xs font-medium focus:border-[#EA4335] focus:outline-hidden focus:ring-1 focus:ring-[#EA4335]"
                placeholder="e.g. Rameshwar Sharma"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-bold text-[#202124]">
                  CR / UHID Number
                </label>
                <button
                  type="button"
                  onClick={() =>
                    setCrNumber(`STAT-SMS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`)
                  }
                  className="text-[10px] font-semibold text-[#1A73E8] hover:underline"
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
                className="w-full rounded-xl border border-[#DADCE0] px-3 py-2 text-xs font-mono font-medium focus:border-[#EA4335] focus:outline-hidden"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-[#202124] block mb-1">
                Emergency Procedure Title
              </label>
              <input
                type="text"
                value={procedureName}
                onChange={(e) => setProcedureName(e.target.value)}
                autoComplete="off"
                data-lpignore="true"
                className="w-full rounded-xl border border-[#DADCE0] px-3 py-2 text-xs font-medium focus:border-[#EA4335] focus:outline-hidden"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#202124] block mb-1">
                Target Room / Angio Suite
              </label>
              <select
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                className="w-full rounded-xl border border-[#DADCE0] px-3 py-2 text-xs font-medium bg-white focus:border-[#EA4335] focus:outline-hidden"
              >
                {DEPARTMENT_ROOMS.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-[#202124] block mb-1">
                Operating Lead Resident
              </label>
              <select
                value={operatorResident}
                onChange={(e) => setOperatorResident(e.target.value)}
                className="w-full rounded-xl border border-[#DADCE0] px-3 py-2 text-xs font-medium bg-white focus:border-[#EA4335] focus:outline-hidden"
              >
                <option value="Dr. Neel Yadav">Dr. Neel Yadav (DM-01)</option>
                <option value="Dr. Nilesh Gupta">Dr. Nilesh Gupta (DM-02)</option>
                <option value="Dr. Alok Verma">Dr. Alok Verma (Assistant Prof)</option>
                <option value="Dr. Meenu Bagarhatta">Dr. Meenu Bagarhatta (Sr Prof & HOD)</option>
              </select>
            </div>
          </div>

          {/* Clinical Nephrotoxicity & Contrast Safety Guardrail */}
          <div className="rounded-xl border border-[#DADCE0] bg-[#F8F9FA] p-3 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#202124] flex items-center gap-1.5">
                <Calculator className="h-3.5 w-3.5 text-[#5F6368]" />
                Urgent Renal Pre-Check (Cigarroa Safety Limit)
              </span>
              <label className="flex items-center gap-1.5 text-xs text-[#3C4043] cursor-pointer">
                <input
                  type="checkbox"
                  checked={isDialysisPatient}
                  onChange={(e) => setIsDialysisPatient(e.target.checked)}
                  className="rounded border-[#DADCE0] text-[#EA4335] focus:ring-[#EA4335]"
                />
                <span>Active Dialysis Patient</span>
              </label>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#5F6368]">Serum Creatinine:</span>
                <input
                  type="number"
                  step="0.1"
                  min="0.4"
                  max="12.0"
                  value={serumCreatinine}
                  autoComplete="off"
                  data-lpignore="true"
                  onChange={(e) => setSerumCreatinine(e.target.value)}
                  className="w-20 rounded-lg border border-[#DADCE0] px-2 py-1 text-xs font-mono font-bold bg-white"
                />
                <span className="text-xs text-[#5F6368]">mg/dL</span>
              </div>

              {isAkiRisk && (
                <div className="flex items-center gap-1 text-[11px] font-bold text-[#C5221F] bg-[#FCE8E6] px-2 py-1 rounded-lg border border-[#EA4335]/30">
                  <ShieldAlert className="h-3.5 w-3.5 shrink-0" />
                  <span>CIRSE Hard Cap: Maximum 40 mL Contrast</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="bg-[#F8F9FA] px-5 py-3.5 border-t border-[#DADCE0] flex items-center justify-between">
          <div className="text-xs text-[#5F6368]">
            Status set immediately to: <span className="font-bold text-[#202124]">IN_PROCEDURE (ON TABLE)</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-[#DADCE0] bg-white px-4 py-2 text-xs font-semibold text-[#5F6368] hover:bg-[#F1F3F4] transition"
            >
              Cancel
            </button>
            <button
              type="button"
              disabled={isSubmitting}
              onClick={handleActivate}
              className="flex items-center gap-2 rounded-xl bg-[#EA4335] hover:bg-[#D93025] text-white px-5 py-2 text-xs font-bold shadow-md transition disabled:opacity-50"
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
