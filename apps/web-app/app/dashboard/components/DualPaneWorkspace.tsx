"use client";

import React, { useState } from "react";
import { useEndoflowStore } from "../useEndoflowStore";
import {
  calculateCKDEPI,
  evaluateContrastSafety,
  evaluateBleedingRisk,
} from "@vascule/utils";
import {
  User,
  HeartPulse,
  Activity,
  Droplets,
  AlertTriangle,
  ShieldCheck,
  Compass,
  FileText,
  Layers,
  ChevronRight,
} from "lucide-react";

interface DualPaneWorkspaceProps {
  children: React.ReactNode;
}

export function DualPaneWorkspace({ children }: DualPaneWorkspaceProps) {
  const patients = useEndoflowStore((s) => s.patients);
  const activeCaseId = useEndoflowStore((s) => s.activeCaseId);
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(null);

  // Active case fallback
  const activePatient =
    patients.find((p) => p.id === (selectedPatientId || activeCaseId)) || patients[0];

  const currentCase = activePatient
    ? {
        caseId: activePatient.id,
        crNumber: activePatient.hid,
        patientName: activePatient.name,
        age: activePatient.age,
        gender: activePatient.sex,
        diagnosis: activePatient.summary || activePatient.procedure,
        procedureName: activePatient.procedure,
        status: activePatient.status,
        supervisingConsultant: activePatient.postedBy || "Dr. Meenu Bagarhatta (Sr. Prof & Head)",
      }
    : {
        caseId: "DEMO-001",
        crNumber: "SMS-2026-CR-001",
        patientName: "Ramesh Sharma",
        age: 58,
        gender: "Male",
        diagnosis: "Hepatocellular Carcinoma (Segment VII) • Post-Hepatitis B",
        procedureName: "cTACE Chemoembolization",
        status: "IN_PROCEDURE",
        supervisingConsultant: "Dr. Meenu Bagarhatta (Sr. Prof & Head)",
      };

  // Anatomical target vessel state
  const [selectedVessel, setSelectedVessel] = useState<string>("Proper Hepatic Artery");

  // Vitals state
  const vitals = {
    hr: 74,
    bp: "128/82",
    spo2: 99,
    map: 97,
  };

  // Lab trends
  const labs = {
    creatinine: 1.1,
    age: currentCase.age || 58,
    gender: (currentCase.gender?.toLowerCase() === "female" ? "female" : "male") as "male" | "female",
    inr: 1.2,
    platelets: 165000,
    aptt: 31,
  };

  const egfr = calculateCKDEPI(labs.creatinine, labs.age, labs.gender);
  const contrastSafety = evaluateContrastSafety(egfr);
  const bleedingRisk = evaluateBleedingRisk(labs.inr, labs.platelets, labs.aptt, "high");

  return (
    <div className="flex flex-col md:flex-row h-full w-full overflow-hidden bg-slate-100 dark:bg-[#09090b]">
      {/* LEFT PANE (42% md / 45% lg): Clinical Cockpit, Patient Dossier & Anatomical Roadmap */}
      <div
        className="w-full md:w-[42%] lg:w-[45%] h-full flex flex-col border-b md:border-b-0 md:border-r border-slate-200 dark:border-[#27272a] bg-white dark:bg-[#18181b] overflow-y-auto p-4 space-y-4 touch-pan-y"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {/* Header Strip with Case Selector */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Clinical Cockpit • Left Pane
            </span>
          </div>
          {patients.length > 1 && (
            <select
              value={selectedPatientId || currentCase.caseId}
              onChange={(e) => setSelectedPatientId(e.target.value)}
              className="min-h-[44px] px-3 py-2 text-xs font-mono border border-slate-200 dark:border-slate-700 rounded-md bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 cursor-pointer touch-manipulation focus:outline-none focus:ring-2 focus:ring-blue-500"
              data-touch-target="true"
              aria-label="Select Patient Case"
            >
              {patients.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.hid})
                </option>
              ))}
            </select>
          )}
        </div>

        {/* 1. Patient Demographic Dossier */}
        <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/75 dark:bg-slate-900/80 p-3 space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{currentCase.patientName}</span>
              <span className="text-[11px] font-normal text-slate-500">
                ({currentCase.age}y / {currentCase.gender})
              </span>
            </div>
            <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-900">
              {currentCase.crNumber}
            </span>
          </div>
          <div className="text-xs text-slate-700 dark:text-slate-300 font-medium">
            {currentCase.diagnosis}
          </div>
          <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500 dark:text-slate-400">
            <span>Proc: <strong className="text-slate-800 dark:text-slate-200">{currentCase.procedureName}</strong></span>
            <span className="font-mono uppercase text-emerald-600 dark:text-emerald-400 font-semibold">
              {currentCase.status?.replace(/_/g, " ")}
            </span>
          </div>
        </div>

        {/* 2. Bedside Vitals Summary Strip */}
        <div className="grid grid-cols-4 gap-2">
          <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 text-center">
            <div className="text-[10px] font-semibold text-slate-400 flex items-center justify-center gap-1">
              <HeartPulse className="w-3 h-3 text-rose-500" /> HR
            </div>
            <div className="font-mono font-bold text-sm text-slate-900 dark:text-slate-100 mt-0.5">
              {vitals.hr} <span className="text-[9px] font-normal text-slate-400">bpm</span>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 text-center">
            <div className="text-[10px] font-semibold text-slate-400 flex items-center justify-center gap-1">
              <Activity className="w-3 h-3 text-blue-500" /> BP
            </div>
            <div className="font-mono font-bold text-sm text-slate-900 dark:text-slate-100 mt-0.5">
              {vitals.bp}
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 text-center">
            <div className="text-[10px] font-semibold text-slate-400 flex items-center justify-center gap-1">
              <Droplets className="w-3 h-3 text-cyan-500" /> SpO2
            </div>
            <div className="font-mono font-bold text-sm text-slate-900 dark:text-slate-100 mt-0.5">
              {vitals.spo2}%
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 text-center">
            <div className="text-[10px] font-semibold text-slate-400">MAP</div>
            <div className="font-mono font-bold text-sm text-slate-900 dark:text-slate-100 mt-0.5">
              {vitals.map} <span className="text-[9px] font-normal text-slate-400">mmHg</span>
            </div>
          </div>
        </div>

        {/* 3. Recent Lab Trends & Clinical Safety Interlocks */}
        <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200">
            <span>Recent Lab Trends &amp; Safety Interlocks</span>
            <span className="text-[10px] font-mono text-slate-400">CKD-EPI 2021 / SIR</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2 rounded bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <div className="text-[10px] text-slate-500">eGFR (Creatinine: {labs.creatinine})</div>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="font-mono font-bold text-base text-slate-900 dark:text-slate-100">
                  {egfr}
                </span>
                <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded border ${
                  contrastSafety.status === "safe"
                    ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400"
                    : contrastSafety.status === "caution"
                    ? "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400"
                    : "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-400"
                }`}>
                  {contrastSafety.status.toUpperCase()}
                </span>
              </div>
            </div>

            <div className="p-2 rounded bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <div className="text-[10px] text-slate-500">Coagulation (INR / Plt)</div>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="font-mono font-bold text-base text-slate-900 dark:text-slate-100">
                  {labs.inr} <span className="text-xs font-normal text-slate-400">/ {Math.round(labs.platelets / 1000)}k</span>
                </span>
                <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded border ${
                  bleedingRisk.status === "safe"
                    ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400"
                    : "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-400"
                }`}>
                  {bleedingRisk.status === "safe" ? "HEMOSTASIS OK" : "RISK"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Anatomical Reference Canvas */}
        <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200">
            <span className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-indigo-500" />
              Anatomical Vascular Roadmap
            </span>
            <span className="font-mono text-[10px] text-slate-400">{selectedVessel}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
            {[
              "Celiac Trunk",
              "Proper Hepatic Artery",
              "Right Hepatic Artery",
              "Splenic Artery",
              "Superior Mesenteric (SMA)",
              "Right Renal Artery",
            ].map((vessel) => (
              <button
                key={vessel}
                type="button"
                onClick={() => setSelectedVessel(vessel)}
                className={`min-h-[44px] px-3 py-2 rounded-lg text-xs font-medium text-left transition border cursor-pointer touch-manipulation flex items-center justify-between active:scale-[0.98] ${
                  selectedVessel === vessel
                    ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 border-transparent shadow-xs ring-1 ring-slate-900 dark:ring-slate-100"
                    : "bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
                data-touch-target="true"
                data-vessel={vessel}
              >
                <span className="truncate">{vessel}</span>
                {selectedVessel === vessel && (
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 ml-1.5" />
                )}
              </button>
            ))}
          </div>

          <div className="mt-2 p-2.5 rounded bg-slate-950 text-slate-100 font-mono text-[11px] leading-relaxed border border-slate-800">
            <div className="text-emerald-400 font-semibold mb-0.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              TARGET: {selectedVessel.toUpperCase()}
            </div>
            <div className="text-slate-400 text-[10px]">
              Microcatheter Access: 2.7F Progreat • 0.014&quot; Fathom wire • Calibrated roadmapping active.
            </div>
          </div>
        </div>
      </div>

      {/* Right Pane (58% md / 55% lg width): Active Workflow (Logbook entry, Report editor, Worklist) */}
      <section
        className="w-full md:w-[58%] lg:w-[55%] h-full flex flex-col overflow-y-auto p-3.5 touch-pan-y"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="mb-2 pb-1.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Active Workflow Window • Right Pane
          </span>
          <span className="text-[11px] font-mono text-slate-400">
            Independent Scroll (100vh)
          </span>
        </div>
        <div className="flex-1 min-h-0">
          {children}
        </div>
      </section>
    </div>
  );
}
