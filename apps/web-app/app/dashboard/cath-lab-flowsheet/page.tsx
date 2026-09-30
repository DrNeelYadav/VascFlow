"use client";

import React, { useState, useEffect, Suspense, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { DosimetryCalculator } from "../../components/cath-lab/DosimetryCalculator";
import { ImplantTracker } from "../../components/cath-lab/ImplantTracker";
import { calculateMacd } from "../../lib/calculators";
import { INITIAL_RIS_WORKLIST_CASES } from "../worklist/worklistData";
import { useEndoflowStore } from "../useEndoflowStore";
import {
  Activity,
  Heart,
  Droplets,
  Timer,
  ShieldCheck,
  FileCheck,
  ChevronRight,
  User,
  ArrowLeft,
  AlertTriangle,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  Eye,
  ShieldAlert,
  Monitor,
} from "lucide-react";

function CathLabFlowsheetContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const requestedCaseId = searchParams.get("caseId");

  const patients = useEndoflowStore((s) => s.patients);
  const activeCaseId = useEndoflowStore((s) => s.activeCaseId);
  const updateInRoomTelemetry = useEndoflowStore((s) => s.updateInRoomTelemetry);
  const updatePostOpCheck = useEndoflowStore((s) => s.updatePostOpCheck);
  const advanceStage = useEndoflowStore((s) => s.advanceStage);

  // Active patient selection
  const [selectedPatientId, setSelectedPatientId] = useState<string>(() => {
    if (requestedCaseId && patients.some((p) => p.id === requestedCaseId)) return requestedCaseId;
    if (activeCaseId && patients.some((p) => p.id === activeCaseId)) return activeCaseId;
    const inLab = patients.find((p) => p.status === "In Cath-Lab");
    return inLab ? inLab.id : patients[0]?.id || "PT01";
  });

  const currentPatient = useMemo(() => {
    return patients.find((p) => p.id === selectedPatientId) || patients[0];
  }, [patients, selectedPatientId]);

  const activeWorklistCase = useMemo(() => {
    return (
      INITIAL_RIS_WORKLIST_CASES.find((c) => c.caseId === selectedPatientId) ||
      INITIAL_RIS_WORKLIST_CASES[0]
    );
  }, [selectedPatientId]);

  // Patient physical parameters (dynamic & editable)
  const [weightKg, setWeightKg] = useState<number>(68);
  const [creatinine, setCreatinine] = useState<number>(1.1);

  // Dosimetry states (dynamic & editable)
  const [contrastDeliveredMl, setContrastDeliveredMl] = useState<number>(0);
  const [fluoroTimeMinutes, setFluoroTimeMinutes] = useState<number>(0);
  const [totalDapGyCm2, setTotalDapGyCm2] = useState<number>(0);

  // Live telemetry vitals (dynamic & editable)
  const [bpSystolic, setBpSystolic] = useState<number>(120);
  const [bpDiastolic, setBpDiastolic] = useState<number>(80);
  const [heartRate, setHeartRate] = useState<number>(72);
  const [spO2, setSpO2] = useState<number>(99);
  const [heparinActSeconds, setHeparinActSeconds] = useState<number>(250);

  // Cath access
  const [accessSite, setAccessSite] = useState<string>("Right Common Femoral Artery");
  const [sheathSize, setSheathSize] = useState<string>("6F (Terumo Radifocus 11cm)");
  const [implantSummary, setImplantSummary] = useState<string>("");

  // Elapsed procedure timer
  const [procSeconds, setProcSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);
  const [pushSuccessBanner, setPushSuccessBanner] = useState<string | null>(null);
  const [isHudMode, setIsHudMode] = useState<boolean>(false);

  // Contrast ceiling: single source of truth.
  // Previously this recomputed (5 * weightKg) / safeCr locally, with no 300 mL
  // hard cap and `creatinine > 0 ? creatinine : 1` standing in for an unmeasured
  // renal function. calculateMacd() enforces the 300 mL cap, applies the 40 mL
  // severe-impairment ceiling, and returns valid:false when creatinine is
  // missing - which now BLOCKS dose entry instead of inventing a normal value.
  const macd = useMemo(
    () => calculateMacd(weightKg, creatinine, contrastDeliveredMl),
    [weightKg, creatinine, contrastDeliveredMl]
  );
  const isRenalDataMissing = !macd.valid;
  const macdLimit = macd.valid ? macd.macdMl : 0;
  const effectiveContrastCeiling = macdLimit;
  const isAkiRisk = creatinine >= 3.0;
  const isContrastExceeded = macd.valid && macd.isExceeded;
  const isContrastNearLimit =
    macd.valid && !macd.isExceeded && contrastDeliveredMl >= effectiveContrastCeiling * 0.8;

  // Synchronize with active patient record in store
  useEffect(() => {
    if (!currentPatient) return;

    setCreatinine(currentPatient.labs?.creat ?? 1.1);
    if (currentPatient.inRoom) {
      setContrastDeliveredMl(currentPatient.inRoom.contrastInjectedMl ?? 0);
      setFluoroTimeMinutes(
        currentPatient.inRoom.elapsedFluoroSeconds
          ? +(currentPatient.inRoom.elapsedFluoroSeconds / 60).toFixed(1)
          : 0
      );
      setProcSeconds(currentPatient.inRoom.elapsedFluoroSeconds || 0);

      if (currentPatient.inRoom.activeSheathAccess) {
        setAccessSite(currentPatient.inRoom.activeSheathAccess);
      }

      const vitalsStr = currentPatient.inRoom.vitals || "";
      const bpMatch = vitalsStr.match(/(\d+)\/(\d+)/);
      if (bpMatch) {
        setBpSystolic(parseInt(bpMatch[1], 10));
        setBpDiastolic(parseInt(bpMatch[2], 10));
      }
      const hrMatch = vitalsStr.match(/HR\s*(\d+)/i);
      if (hrMatch) setHeartRate(parseInt(hrMatch[1], 10));
      const spo2Match = vitalsStr.match(/SpO2\s*(\d+)/i);
      if (spo2Match) setSpO2(parseInt(spo2Match[1], 10));
      const actMatch = vitalsStr.match(/ACT\s*(\d+)/i);
      if (actMatch) setHeparinActSeconds(parseInt(actMatch[1], 10));
    } else {
      setContrastDeliveredMl(0);
      setFluoroTimeMinutes(0);
      setTotalDapGyCm2(0);
      setProcSeconds(0);
    }
  }, [currentPatient]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setProcSeconds((s) => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTimer = (totalSec: number) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    return `${hrs > 0 ? `${hrs}:` : ""}${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handlePushToReport = () => {
    if (!currentPatient) return;
    // Refuse to generate a clinical report without a measured creatinine: the
    // previous code fell back to 1.0 mg/dL and wrote a fabricated MACD into the
    // operative record.
    if (isRenalDataMissing) {
      setPushSuccessBanner(
        "Cannot push to report: serum creatinine is not recorded for this patient."
      );
      return;
    }
    const pid = currentPatient.id;
    const macdLimit = macd.macdMl;

    // 1. Update in-room telemetry in store
    updateInRoomTelemetry(pid, {
      activeSheathAccess: `${sheathSize} - ${accessSite}`,
      elapsedFluoroSeconds: Math.round(fluoroTimeMinutes * 60) || procSeconds,
      contrastInjectedMl: contrastDeliveredMl,
      macdThresholdMl: macdLimit,
      vitals: `${bpSystolic}/${bpDiastolic} mmHg, HR ${heartRate} bpm, SpO2 ${spO2}%, ACT ${heparinActSeconds}s`,
      targetArtery: currentPatient.procedure,
      currentStepDescription: implantSummary
        ? `Implants Deployed: ${implantSummary}`
        : "Intra-operative angiography and intervention completed.",
    });

    // 2. Update post-op check in store
    updatePostOpCheck(pid, {
      recoveryBed: currentPatient.ipd?.bed || "Cath-Lab Holding Rec-01",
      punctureSiteSeal: "Hemostasis Intact",
      distalPulses: "Strong (+++)",
      instructions: `Transferred from Angiosuite. Hemostasis intact at ${accessSite}. Strict supine bed rest for 4-6 hours. Total contrast delivered: ${contrastDeliveredMl} mL (MACD limit: ${macdLimit} mL). Fluoro time: ${fluoroTimeMinutes} min. Push oral/IV fluids for contrast clearance.`,
      sheathRemoved: true,
      dischargeReady: false,
    });

    // 3. Advance stage to Post-Op ICU
    advanceStage(pid, "Post-Op ICU");

    setPushSuccessBanner(`Telemetry saved to store. Advancing ${currentPatient.name} to Post-Op & Synoptic Report...`);

    const queryParams = new URLSearchParams({
      contrast: String(contrastDeliveredMl),
      fluoro: String(fluoroTimeMinutes),
      dap: String(totalDapGyCm2),
      access: accessSite,
      sheath: sheathSize,
      bp: `${bpSystolic}/${bpDiastolic}`,
      hr: String(heartRate),
      spo2: String(spO2),
      act: String(heparinActSeconds),
      weight: String(weightKg),
      cr: String(creatinine),
    });

    setTimeout(() => {
      router.push(`/dashboard/reports/${pid}?${queryParams.toString()}`);
    }, 700);
  };

  return (
    <div className={isHudMode ? "bg-[#090A0F] text-slate-100 min-h-screen -m-6 p-6 space-y-6" : "space-y-6 pb-16"}>
      {/* Navigation Breadcrumb & Title */}
      <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b pb-4 ${isHudMode ? "border-zinc-800" : "border-slate-200"}`}>
        <div>
          <div className={`flex items-center gap-2 text-xs mb-1 ${isHudMode ? "text-zinc-400" : "text-slate-500"}`}>
            <Link href="/dashboard/worklist" className={`flex items-center gap-1 ${isHudMode ? "hover:text-amber-400 text-zinc-300" : "hover:text-blue-600"}`}>
              <ArrowLeft className="h-3 w-3" /> RIS Worklist
            </Link>
            <span>/</span>
            <span className={`font-semibold ${isHudMode ? "text-amber-400 font-mono" : "text-slate-800"}`}>
              Cath-Lab Telemetry Flowsheet
            </span>
          </div>
          <div className="flex items-center gap-3">
            <h1 className={`text-2xl font-bold tracking-tight ${isHudMode ? "text-white font-mono" : "text-slate-900"}`}>
              Intra-Operative Digital Flowsheet
            </h1>
            <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold flex items-center gap-1 ${
              isHudMode
                ? "bg-amber-950/60 border border-amber-500/40 text-amber-300 font-mono"
                : "bg-purple-100 border border-purple-200 text-purple-800"
            }`}>
              <span className={`h-2 w-2 rounded-full animate-pulse ${isHudMode ? "bg-amber-400" : "bg-purple-600"}`} />
              Angiosuite Artis Zee (Lab 1)
            </span>
          </div>
        </div>

        {/* Case Switcher, HUD Toggle & Timer */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* HUD Mode Toggle Button */}
          <button
            type="button"
            onClick={() => setIsHudMode(!isHudMode)}
            className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-black transition cursor-pointer border shadow-sm ${
              isHudMode
                ? "bg-amber-400 text-black border-amber-300 shadow-amber-500/30 font-mono"
                : "bg-zinc-900 text-amber-400 border-zinc-700 hover:bg-zinc-800 font-sans"
            }`}
            title="Toggle Angio-Suite High-Contrast Dark HUD Mode for darkened cath lab visibility"
          >
            <Eye className="h-3.5 w-3.5" />
            <span>{isHudMode ? "HUD MODE: ON" : "ANGIO HUD"}</span>
          </button>

          {/* Patient Switcher Dropdown */}
          <div className="flex items-center gap-1.5">
            <label className={`text-xs font-bold ${isHudMode ? "text-zinc-400" : "text-slate-500"}`}>Case:</label>
            <select
              value={selectedPatientId}
              onChange={(e) => setSelectedPatientId(e.target.value)}
              className={`rounded-lg border px-2.5 py-1.5 text-xs font-semibold shadow-xs focus:border-amber-500 outline-hidden ${
                isHudMode
                  ? "bg-zinc-900 border-zinc-700 text-zinc-100"
                  : "border-slate-300 bg-white text-slate-700"
              }`}
            >
              {patients.map((pt) => (
                <option key={pt.id} value={pt.id}>
                  {pt.id}: {pt.name} ({pt.status})
                </option>
              ))}
            </select>
          </div>

          {/* Procedure Stopwatch */}
          <div className={`flex items-center gap-2 rounded-xl border px-3 py-1.5 shadow-sm ${
            isHudMode
              ? "border-emerald-500/40 bg-zinc-950 text-emerald-400"
              : "border-slate-200 bg-white"
          }`}>
            <Timer className={`h-4 w-4 ${isHudMode ? "text-emerald-400" : "text-blue-600"}`} />
            <span className={`font-mono text-base font-bold ${isHudMode ? "text-emerald-400" : "text-slate-900"}`}>
              {formatTimer(procSeconds)}
            </span>
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className={`p-1 cursor-pointer ${isHudMode ? "text-zinc-400 hover:text-white" : "text-slate-400 hover:text-slate-700"}`}
              title={isTimerRunning ? "Pause timer" : "Start timer"}
            >
              {isTimerRunning ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            </button>
          </div>

          <button
            onClick={handlePushToReport}
            className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-700 transition cursor-pointer"
          >
            <FileCheck className="h-4 w-4" /> Push to Synoptic Report
          </button>
        </div>
      </div>

      {/* High-Contrast Angio-Suite HUD Telemetry Deck (Low-Light Cath Lab Display) */}
      {isHudMode && (
        <div className="rounded-2xl border-2 border-amber-500/60 bg-[#000000] p-5 shadow-2xl space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-3 w-3 rounded-full bg-emerald-500 animate-ping" />
              <h2 className="text-sm font-black uppercase tracking-widest text-amber-400 font-mono">
                SMS CATH LAB 1 &bull; HIGH-CONTRAST ANGIO HUD
              </h2>
              <span className="rounded bg-zinc-900 border border-zinc-700 px-2 py-0.5 text-[11px] font-mono text-cyan-400 font-bold">
                {currentPatient ? currentPatient.name : "Active Procedure"} ({currentPatient?.hid || "SMS-IR"})
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono font-bold">
              <span className="text-zinc-400">PROCEDURE ELAPSED:</span>
              <span className="text-xl text-emerald-400 font-black">{formatTimer(procSeconds)}</span>
            </div>
          </div>

          {/* Blocking state: no measured creatinine means no contrast ceiling can
              be derived. Previously this screen silently assumed Cr = 1.0 and
              displayed a full-dose ceiling for an unmeasured patient. */}
          {isRenalDataMissing && (
            <div className="rounded-xl border-2 border-amber-500 bg-amber-950/80 p-3 text-amber-100 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-400 shrink-0" />
              <div>
                <div className="text-sm font-black uppercase tracking-wider text-amber-300">
                  CONTRAST CEILING UNAVAILABLE - SERUM CREATININE NOT RECORDED
                </div>
                <div className="text-xs text-amber-200">
                  Record a measured serum creatinine before administering iodinated contrast. A dose ceiling cannot be derived without renal function.
                </div>
              </div>
            </div>
          )}

          {/* Critical Contrast Safety Alarm Banner if Exceeded */}
          {isContrastExceeded && (
            <div className="rounded-xl border-2 border-rose-500 bg-rose-950/80 p-3 text-rose-200 flex items-center gap-3 animate-pulse">
              <ShieldAlert className="h-6 w-6 text-rose-400 shrink-0" />
              <div>
                <div className="text-sm font-black uppercase tracking-wider text-rose-300">
                  CIRSE / ESUR CONTRAST SAFETY CEILING REACHED
                </div>
                <div className="text-xs text-rose-200">
                  Delivered {contrastDeliveredMl} mL exceeds the absolute renal ceiling of {effectiveContrastCeiling} mL (Creatinine: {creatinine} mg/dL). Cease iodinated contrast or convert to CO2 / intravascular ultrasound.
                </div>
              </div>
            </div>
          )}

          {/* Giant Telemetry Readouts (Visible from 3 meters across table) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Fluoro Time & DAP */}
            <div className="rounded-xl border border-cyan-500/40 bg-zinc-950 p-4">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                FLUORO TIME
              </div>
              <div className="text-4xl font-mono font-black text-cyan-300 mt-1">
                {fluoroTimeMinutes} <span className="text-lg text-cyan-500">min</span>
              </div>
              <div className="text-xs font-mono text-zinc-400 mt-2">
                DAP: <span className="text-cyan-400 font-bold">{totalDapGyCm2}</span> Gy.cm²
              </div>
            </div>

            {/* Contrast Delivered vs MACD Limit */}
            <div
              className={`rounded-xl border p-4 bg-zinc-950 ${
                isContrastExceeded
                  ? "border-rose-500/80 bg-rose-950/20"
                  : isContrastNearLimit
                  ? "border-amber-500/80 bg-amber-950/20"
                  : "border-amber-500/40"
              }`}
            >
              <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center justify-between">
                <span>CONTRAST DOSE</span>
                <span className="text-[10px] text-zinc-400">
                  LIMIT: {isRenalDataMissing ? "—" : `${effectiveContrastCeiling} mL`}
                </span>
              </div>
              <div
                className={`text-4xl font-mono font-black mt-1 ${
                  isContrastExceeded
                    ? "text-rose-400 animate-pulse"
                    : isContrastNearLimit
                    ? "text-amber-300"
                    : "text-amber-400"
                }`}
              >
                {contrastDeliveredMl} <span className="text-lg text-zinc-400 font-normal">mL</span>
              </div>
              <div className="text-xs font-mono text-zinc-400 mt-2">
                {isRenalDataMissing
                  ? "BLOCKED: serum creatinine not recorded"
                  : isAkiRisk
                  ? "CIRSE AKI Hard Cap: 40 mL"
                  : `Cigarroa MACD: ${macdLimit} mL`}
              </div>
              <div className="text-[10px] font-mono text-amber-300/80 mt-1">
                {isRenalDataMissing
                  ? "A measured serum creatinine is required before a contrast ceiling can be applied."
                  : `Formula: (5 × Weight in kg) / Serum Creatinine = (5 × ${weightKg} kg) / ${creatinine} mg/dL = ${macdLimit} mL (300 mL hard cap enforced)`}
              </div>
            </div>

            {/* Blood Pressure & MAP */}
            <div className="rounded-xl border border-emerald-500/40 bg-zinc-950 p-4">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                BLOOD PRESSURE
              </div>
              <div className="text-4xl font-mono font-black text-emerald-300 mt-1">
                {bpSystolic}/{bpDiastolic}
              </div>
              <div className="text-xs font-mono text-zinc-400 mt-2">
                MAP: <span className="text-emerald-400 font-bold">{Math.round((bpSystolic + 2 * bpDiastolic) / 3)}</span> mmHg
              </div>
            </div>

            {/* SpO2, Heart Rate & ACT */}
            <div className="rounded-xl border border-purple-500/40 bg-zinc-950 p-4">
              <div className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold flex items-center justify-between">
                <span>VITALS &bull; ACT</span>
                <span className="text-xs text-purple-300 font-bold">{heparinActSeconds}s ACT</span>
              </div>
              <div className="text-4xl font-mono font-black text-purple-300 mt-1 flex items-baseline gap-2">
                <span>{spO2}%</span>
                <span className="text-xl text-zinc-400 font-normal">{heartRate} bpm</span>
              </div>
              <div className="text-xs font-mono text-zinc-400 mt-2">
                {heparinActSeconds >= 250 ? "✓ ACT Therapeutic" : "⚠ Under-anticoagulated"}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Banner */}
      {pushSuccessBanner && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-xs font-semibold text-emerald-800">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{pushSuccessBanner}</span>
        </div>
      )}

      {/* Patient Clinical Banner */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 font-black text-lg border border-blue-100">
              {currentPatient ? currentPatient.name.charAt(0) : "P"}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-slate-900">
                  {currentPatient ? currentPatient.name : activeWorklistCase?.patientName || "Lakshmi"}
                </h3>
                <span className="rounded bg-slate-100 border px-1.5 py-0.5 text-[10px] font-mono font-bold text-slate-600">
                  {currentPatient ? currentPatient.hid : activeWorklistCase?.crNumber || "SMS-2026-081"}
                </span>
                <span className="rounded bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                  {currentPatient ? currentPatient.scheme : "MAAY"} Scheme
                </span>
                <span className="rounded bg-blue-50 border border-blue-200 px-2 py-0.5 text-[10px] font-bold text-blue-800">
                  Status: {currentPatient ? currentPatient.status : "In Cath-Lab"}
                </span>
              </div>
              <p className="text-xs font-medium text-slate-600 mt-0.5">
                {currentPatient ? currentPatient.procedure : activeWorklistCase?.procedureName || "Cath-Lab Intervention"}
              </p>
            </div>
          </div>

          {/* Physiological Parameters & Dynamic Adjusters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs border-t lg:border-t-0 pt-3 lg:pt-0">
            <div className="rounded-lg bg-slate-50 border p-2 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Pt Weight</span>
              <div className="flex items-center justify-center gap-1 mt-0.5">
                <input
                  type="number"
                  value={weightKg}
                  onChange={(e) => setWeightKg(Math.max(20, Number(e.target.value)))}
                  className="w-14 px-1 py-0.5 text-center text-xs font-bold rounded border border-slate-200 bg-white"
                />
                <span className="text-[11px] font-bold text-slate-600">kg</span>
              </div>
            </div>
            <div className="rounded-lg bg-slate-50 border p-2 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Baseline Cr</span>
              <div className="flex items-center justify-center gap-1 mt-0.5">
                <input
                  type="number"
                  step="0.1"
                  value={creatinine}
                  onChange={(e) => setCreatinine(Math.max(0.1, Number(e.target.value)))}
                  className="w-14 px-1 py-0.5 text-center text-xs font-bold rounded border border-slate-200 bg-white"
                />
                <span className="text-[11px] font-bold text-slate-600">mg/dL</span>
              </div>
            </div>
            <div className="rounded-lg bg-slate-50 border p-2 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Lead Surgeon</span>
              <div className="font-bold text-slate-900 mt-0.5">
                {currentPatient ? currentPatient.postedBy.split(" ")[1] || currentPatient.postedBy : "Dr. Neel"}
              </div>
            </div>
            <div className="rounded-lg bg-slate-50 border p-2 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Supervising</span>
              <div className="font-bold text-slate-900 mt-0.5">
                {activeWorklistCase?.supervisingConsultant?.split(" ")[1] || "Dr. Bagarhatta"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Real-Time Telemetry: Dynamic Hemodynamics with Direct Editing */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>Blood Pressure</span>
            <Heart className="h-4 w-4 text-rose-500" />
          </div>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-2xl font-black text-slate-900">{bpSystolic}/{bpDiastolic}</span>
            <span className="text-[11px] font-semibold text-slate-400">mmHg</span>
          </div>
          <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">
            Mean: {Math.round((bpSystolic + 2 * bpDiastolic) / 3)} mmHg (Stable)
          </div>
          <div className="mt-2 flex items-center gap-1 text-xs">
            <input
              type="number"
              value={bpSystolic}
              onChange={(e) => setBpSystolic(Number(e.target.value))}
              className="w-14 px-1 py-0.5 border border-slate-200 rounded text-center text-xs font-bold"
              title="Systolic BP"
            />
            <span className="text-slate-400 font-bold">/</span>
            <input
              type="number"
              value={bpDiastolic}
              onChange={(e) => setBpDiastolic(Number(e.target.value))}
              className="w-14 px-1 py-0.5 border border-slate-200 rounded text-center text-xs font-bold"
              title="Diastolic BP"
            />
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>Heart Rate</span>
            <Activity className="h-4 w-4 text-rose-500 animate-pulse" />
          </div>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-2xl font-black text-slate-900">{heartRate}</span>
            <span className="text-[11px] font-semibold text-slate-400">bpm</span>
          </div>
          <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">Sinus Rhythm</div>
          <div className="mt-2 flex items-center gap-1">
            <input
              type="number"
              value={heartRate}
              onChange={(e) => setHeartRate(Number(e.target.value))}
              className="w-16 px-1 py-0.5 border border-slate-200 rounded text-center text-xs font-bold"
            />
            <span className="text-[10px] text-slate-400">bpm</span>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>Oxygen Saturation</span>
            <Droplets className="h-4 w-4 text-cyan-500" />
          </div>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-2xl font-black text-slate-900">{spO2}%</span>
            <span className="text-[11px] font-semibold text-slate-400">SpO2</span>
          </div>
          <div className="text-[10px] text-slate-500 font-medium mt-0.5">2L O2 Nasal Prongs</div>
          <div className="mt-2 flex items-center gap-1">
            <input
              type="number"
              value={spO2}
              onChange={(e) => setSpO2(Number(e.target.value))}
              min={50}
              max={100}
              className="w-16 px-1 py-0.5 border border-slate-200 rounded text-center text-xs font-bold"
            />
            <span className="text-[10px] text-slate-400">%</span>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>Heparin ACT</span>
            <Timer className="h-4 w-4 text-amber-500" />
          </div>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-2xl font-black text-slate-900">{heparinActSeconds}</span>
            <span className="text-[11px] font-semibold text-slate-400">sec</span>
          </div>
          <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">
            Target &gt;250s {heparinActSeconds >= 250 ? "✓ Therapeutic" : "⚠ Under-anticoagulated"}
          </div>
          <div className="mt-2 flex items-center gap-1">
            <input
              type="number"
              value={heparinActSeconds}
              onChange={(e) => setHeparinActSeconds(Number(e.target.value))}
              className="w-16 px-1 py-0.5 border border-slate-200 rounded text-center text-xs font-bold"
            />
            <span className="text-[10px] text-slate-400">sec</span>
          </div>
        </div>
      </div>

      {/* Radiation Dosimetry & Cigarroa MACD Module */}
      <DosimetryCalculator
        creatinine={creatinine}
        weightKg={weightKg}
        contrastDeliveredMl={contrastDeliveredMl}
        fluoroTimeMinutes={fluoroTimeMinutes}
        totalDapGyCm2={totalDapGyCm2}
        onContrastChange={(val) => setContrastDeliveredMl(val)}
        onFluoroChange={(val) => setFluoroTimeMinutes(val)}
        onDapChange={(val) => setTotalDapGyCm2(val)}
      />

      {/* Access Site & Sheath Selector */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
          Vascular Access & Sheath Deployment
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div>
            <label className="block text-slate-600 font-semibold mb-1">Puncture Site</label>
            <select
              value={accessSite}
              onChange={(e) => setAccessSite(e.target.value)}
              className="w-full rounded-lg border border-slate-300 p-2 bg-white text-xs font-medium"
            >
              <option value="Right Common Femoral Artery">Right Common Femoral Artery (RCFA)</option>
              <option value="Left Common Femoral Artery">Left Common Femoral Artery (LCFA)</option>
              <option value="Right Internal Jugular Vein">Right Internal Jugular Vein (RIJV - TIPS/DIPS)</option>
              <option value="Right Radial Artery">Right Radial Artery (RRA - Transradial)</option>
              <option value="Direct Percutaneous Transhepatic">Direct Percutaneous Transhepatic (PTBD)</option>
            </select>
          </div>
          <div>
            <label className="block text-slate-600 font-semibold mb-1">Sheath Caliber</label>
            <select
              value={sheathSize}
              onChange={(e) => setSheathSize(e.target.value)}
              className="w-full rounded-lg border border-slate-300 p-2 bg-white text-xs font-medium"
            >
              <option value="5F (Terumo Radifocus 11cm)">5F (Terumo Radifocus 11cm)</option>
              <option value="6F (Terumo Radifocus 11cm)">6F (Terumo Radifocus 11cm)</option>
              <option value="7F (Cordis Avanti 11cm)">7F (Cordis Avanti 11cm)</option>
              <option value="10F (Cook Check-Flo 45cm Long)">10F (Cook Check-Flo 45cm Long - DIPS/TIPS)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Implant & Consumable Barcode Deduction Tracker */}
      <ImplantTracker onImplantSummaryChange={(s) => setImplantSummary(s)} />
    </div>
  );
}

export default function CathLabFlowsheetPage() {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center text-xs text-slate-500">
          Loading Cath-Lab Operative Telemetry...
        </div>
      }
    >
      <CathLabFlowsheetContent />
    </Suspense>
  );
}

