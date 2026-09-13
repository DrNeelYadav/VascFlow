"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  useEndoflowStore,
  EndoflowPatient,
  ClinicalStage,
  ModalityType,
  ClinicalStageSchema,
} from "./useEndoflowStore";
import {
  Activity,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  Search,
  Filter,
  UserCheck,
  Stethoscope,
  HeartPulse,
  Radio,
  Plus,
  ArrowRight,
  BedDouble,
  ShieldCheck,
  FileText,
  Syringe,
  Microscope,
  Radiation,
  X,
  RefreshCw,
  SlidersHorizontal,
} from "lucide-react";

export default function DashboardPage() {
  const {
    patients,
    activeCaseId,
    searchQuery,
    filterModality,
    advanceStage,
    callPatientToLab,
    completeProcedureAndTransfer,
    dischargePatient,
    setSearchQuery,
    setFilterModality,
    resetToDefaultPatients,
  } = useEndoflowStore();

  const [selectedPatientForDetail, setSelectedPatientForDetail] =
    useState<EndoflowPatient | null>(null);
  const [completeTransferModalPt, setCompleteTransferModalPt] =
    useState<EndoflowPatient | null>(null);
  const [targetRecoveryBed, setTargetRecoveryBed] =
    useState<string>("LICU-04 (Liver ICU)");
  const [transferInstructions, setTransferInstructions] = useState<string>(
    "Puncture site dry. Bed rest for 4 hours. Push oral hydration."
  );

  // Compute live metric ribbon counts
  const totalCount = patients.length;
  const inRoomCount = patients.filter((p) => p.status === "In Cath-Lab").length;
  const preOpCount = patients.filter((p) => p.status === "Pre-Op Pending").length;
  const postOpCount = patients.filter((p) => p.status === "Post-Op ICU").length;
  const scheduledCount = patients.filter((p) => p.status === "Scheduled").length;
  const dischargedCount = patients.filter((p) => p.status === "Discharged").length;

  // Active in-room patient (defaults to activeCaseId or first 'In Cath-Lab')
  const activePatient = useMemo(() => {
    if (activeCaseId) {
      const found = patients.find((p) => p.id === activeCaseId);
      if (found && found.status === "In Cath-Lab") return found;
    }
    return patients.find((p) => p.status === "In Cath-Lab") || null;
  }, [patients, activeCaseId]);

  // Pre-Op Queue patients
  const preOpPatients = useMemo(() => {
    return patients.filter(
      (p) => p.status === "Pre-Op Pending" || p.status === "Scheduled"
    );
  }, [patients]);

  // Post-Op Queue patients
  const postOpPatients = useMemo(() => {
    return patients.filter((p) => p.status === "Post-Op ICU");
  }, [patients]);

  // Master filtered worklist
  const filteredWorklist = useMemo(() => {
    return patients.filter((p) => {
      if (filterModality !== "all" && p.modality !== filterModality) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(q);
        const matchHid = p.hid.toLowerCase().includes(q);
        const matchScan = p.scanId.toLowerCase().includes(q);
        const matchProc = p.procedure.toLowerCase().includes(q);
        const matchDoc = p.postedBy.toLowerCase().includes(q);
        const matchUnit = p.unit.toLowerCase().includes(q);
        if (
          !matchName &&
          !matchHid &&
          !matchScan &&
          !matchProc &&
          !matchDoc &&
          !matchUnit
        ) {
          return false;
        }
      }
      return true;
    });
  }, [patients, filterModality, searchQuery]);

  const getModalityBadge = (modality: ModalityType) => {
    switch (modality) {
      case "XA":
        return "bg-[#FCE8E6] text-[#C5221F] border-[#FAD2CF]";
      case "CT":
        return "bg-[#FEF7E0] text-[#B06000] border-[#FEEFC3]";
      case "US":
        return "bg-[#E6F4EA] text-[#137333] border-[#CEEAD6]";
      case "ROSE":
        return "bg-[#F3E8FD] text-[#7E22CE] border-[#E9D5FF]";
      default:
        return "bg-[#F1F3F4] text-[#3C4043] border-[#DADCE0]";
    }
  };

  const handleExecuteTransfer = () => {
    if (!completeTransferModalPt) return;
    completeProcedureAndTransfer(
      completeTransferModalPt.id,
      targetRecoveryBed,
      {
        instructions: transferInstructions,
        punctureSiteSeal: "Hemostasis Intact",
        distalPulses: "Strong (+++)",
      }
    );
    setCompleteTransferModalPt(null);
  };

  return (
    <div className="space-y-5 max-w-7xl mx-auto pb-12">
      {/* ===================================================================
          1. TOP METRIC RIBBON (LIVE CATH-LAB OVERVIEW)
          =================================================================== */}
      <section className="bg-white border border-[#DADCE0] rounded-2xl p-4 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1A73E8] text-white flex items-center justify-center font-bold text-sm shadow-xs">
              IR
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-bold text-[#202124]">
                  Angiosuite Clinical Operations Board
                </h1>
                <span className="px-2 py-0.5 text-[10px] font-semibold uppercase rounded-full bg-[#E8F0FE] text-[#1A73E8] border border-[#D2E3FC]">
                  Live Turnaround
                </span>
              </div>
              <p className="text-xs text-[#5F6368]">
                Department of Interventional Radiology • SMS Hospital, Jaipur
              </p>
            </div>
          </div>

          {/* Metric Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
            <div className="px-3 py-1.5 rounded-xl bg-[#F8F9FA] border border-[#DADCE0]">
              <span className="text-[10px] text-[#5F6368] block">Today Total</span>
              <span className="text-sm font-bold text-[#202124]">{totalCount} Cases</span>
            </div>

            <div className="px-3 py-1.5 rounded-xl bg-[#FCE8E6] border border-[#FAD2CF]">
              <span className="text-[10px] text-[#C5221F] font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5221F] animate-ping" />
                In-Room Active
              </span>
              <span className="text-sm font-bold text-[#C5221F]">{inRoomCount} In Suite</span>
            </div>

            <div className="px-3 py-1.5 rounded-xl bg-[#FEF7E0] border border-[#FEEFC3]">
              <span className="text-[10px] text-[#B06000] font-semibold block">Pre-Op Ward</span>
              <span className="text-sm font-bold text-[#B06000]">{preOpCount} Pending</span>
            </div>

            <div className="px-3 py-1.5 rounded-xl bg-[#E8F0FE] border border-[#D2E3FC]">
              <span className="text-[10px] text-[#1A73E8] font-semibold block">Post-Op ICU</span>
              <span className="text-sm font-bold text-[#1A73E8]">{postOpCount} Monitored</span>
            </div>

            <div className="px-3 py-1.5 rounded-xl bg-[#E6F4EA] border border-[#CEEAD6]">
              <span className="text-[10px] text-[#137333] font-semibold block">Discharged</span>
              <span className="text-sm font-bold text-[#137333]">{dischargedCount} Done</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. ACTIVE CATH LAB CONSOLE (IN-ROOM PATIENT CASE CARD)
          =================================================================== */}
      <section className="bg-white border border-[#DADCE0] rounded-2xl p-5 shadow-xs">
        <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#F1F3F4]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#C5221F] animate-pulse" />
            <h2 className="text-sm font-bold text-[#202124] uppercase tracking-wide">
              Active Angiosuite Console // Table 1 (Live Case)
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-full bg-[#E6F4EA] text-[#137333] font-semibold text-[11px] border border-[#CEEAD6] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E8E3E]" />
              Artis Zee C-Arm Active
            </span>
            <button
              onClick={resetToDefaultPatients}
              className="px-2.5 py-1 rounded-full border border-[#DADCE0] bg-white text-[#5F6368] hover:bg-[#F1F3F4] text-[11px] font-medium flex items-center gap-1 cursor-pointer"
              title="Reset state to initial EndoFlow patients"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset State</span>
            </button>
          </div>
        </div>

        {activePatient && activePatient.inRoom ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Left: Patient Demographics & Procedure */}
            <div className="space-y-3">
              <div>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-base font-bold text-[#202124]">
                    {activePatient.name}
                  </h3>
                  <span className="text-xs font-semibold text-[#5F6368]">
                    {activePatient.age}y • {activePatient.sex}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#5F6368] mt-0.5">
                  <span className="font-mono font-semibold">CR: {activePatient.hid}</span>
                  <span>•</span>
                  <span>{activePatient.unit}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#DADCE0] space-y-1">
                <span className="text-[10px] font-bold text-[#80868B] uppercase block">
                  Procedure in Progress:
                </span>
                <p className="text-xs font-bold text-[#1A73E8]">
                  {activePatient.procedure}
                </p>
                <p className="text-[11px] text-[#3C4043]">
                  Attending: <span className="font-semibold text-[#202124]">{activePatient.postedBy}</span>
                </p>
              </div>

              <div className="text-xs text-[#5F6368]">
                <span className="text-[10px] font-bold uppercase text-[#80868B] block mb-0.5">
                  Target Vascular Territory:
                </span>
                <span className="font-medium text-[#202124]">
                  {activePatient.inRoom.targetArtery}
                </span>
              </div>
            </div>

            {/* Center: Live Intra-Procedural Telemetry */}
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#DADCE0] space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-[#5F6368]">Vascular Access:</span>
                  <span className="font-semibold text-[#202124]">
                    {activePatient.inRoom.activeSheathAccess}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#5F6368]">Fluoro Exposure Time:</span>
                  <span className="font-mono font-bold text-[#C5221F]">
                    {Math.floor(activePatient.inRoom.elapsedFluoroSeconds / 60)}m{" "}
                    {activePatient.inRoom.elapsedFluoroSeconds % 60}s
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#5F6368]">Contrast Injected (MACD):</span>
                  <span className="font-mono font-bold text-[#1A73E8]">
                    {activePatient.inRoom.contrastInjectedMl} mL /{" "}
                    {activePatient.inRoom.macdThresholdMl} mL
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#5F6368]">Hemodynamics:</span>
                  <span className="font-medium text-[#202124]">
                    {activePatient.inRoom.vitals}
                  </span>
                </div>
              </div>

              <div className="text-xs">
                <span className="text-[10px] font-bold uppercase text-[#80868B] block mb-1">
                  Catheters / Embolic In Use:
                </span>
                <div className="flex flex-wrap gap-1">
                  {activePatient.inRoom.cathetersInUse.map((c, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-[#F1F3F4] text-[#3C4043] text-[10px] font-medium"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Real-Time Operational Progress & Action */}
            <div className="flex flex-col justify-between p-3.5 rounded-xl bg-[#E8F0FE] border border-[#D2E3FC]">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#1A73E8]">
                  <Activity className="w-4 h-4 animate-pulse" />
                  <span>Current Clinical Step</span>
                </div>
                <p className="text-xs text-[#202124] leading-relaxed">
                  {activePatient.inRoom.currentStepDescription}
                </p>
              </div>

              <div className="pt-3 border-t border-[#D2E3FC] flex items-center gap-2">
                <button
                  onClick={() => setCompleteTransferModalPt(activePatient)}
                  className="w-full py-2 px-3 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] text-white font-semibold text-xs shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Complete & Transfer to Post-Op</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-8 text-center text-[#5F6368] space-y-2">
            <Radio className="w-8 h-8 text-[#80868B] mx-auto opacity-50" />
            <p className="text-xs font-semibold text-[#202124]">
              Cath-Lab Table 1 is currently in Standby / Turnaround.
            </p>
            <p className="text-[11px]">
              Select a patient from the Pre-Op Holding Queue below and click &quot;Call to Cath-Lab Table&quot;.
            </p>
          </div>
        )}
      </section>

      {/* ===================================================================
          3. DUAL CLINICAL WARD SPLIT (PRE-OP HOLDING & POST-OP RECOVERY)
          =================================================================== */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Left Pane: Pre-Op Holding Queue */}
        <div className="bg-white border border-[#DADCE0] rounded-2xl p-4 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-[#F1F3F4]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#FEF7E0] text-[#B06000] flex items-center justify-center font-bold text-xs">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#202124]">
                    Pre-Op Holding Queue
                  </h3>
                  <span className="text-[10px] text-[#5F6368]">
                    Bedside prep, NPO clearance & lab verification
                  </span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#FEF7E0] text-[#B06000] font-bold text-[10px]">
                {preOpPatients.length} Waiting
              </span>
            </div>

            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
              {preOpPatients.map((pt) => {
                return (
                  <div
                    key={pt.id}
                    className="p-3 rounded-xl border border-[#DADCE0] bg-[#FFFFFF] hover:border-[#BDC1C6] transition-all space-y-2"
                  >
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-xs font-bold text-[#202124]">
                          {pt.name}
                        </span>
                        <span className="text-[11px] text-[#5F6368] ml-2">
                          ({pt.age}y • {pt.sex})
                        </span>
                      </div>
                      <span className="font-mono text-[10px] font-semibold text-[#5F6368]">
                        {pt.hid}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-[#1A73E8]">
                      {pt.procedure}
                    </div>

                    {/* Pre-Op Check Indicators */}
                    <div className="grid grid-cols-3 gap-1.5 text-[10px] pt-1">
                      <div className="p-1.5 rounded-lg bg-[#F8F9FA] border border-[#DADCE0]">
                        <span className="text-[#5F6368] block">Location:</span>
                        <span className="font-medium text-[#202124]">{pt.preOp.bedLocation}</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-[#F8F9FA] border border-[#DADCE0]">
                        <span className="text-[#5F6368] block">NPO Fasting:</span>
                        <span className="font-medium text-[#1E8E3E]">{pt.preOp.npoHours}h Confirmed</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-[#F8F9FA] border border-[#DADCE0]">
                        <span className="text-[#5F6368] block">Lab Clear:</span>
                        <span className="font-medium text-[#202124]">
                          INR {pt.labs.inr} • Cr {pt.labs.creat}
                        </span>
                      </div>
                    </div>

                    {/* Action */}
                    <div className="pt-2 border-t border-[#F1F3F4] flex items-center justify-between">
                      <span className="text-[10px] text-[#5F6368]">
                        Access IV: {pt.preOp.ivCannulaGauge}
                      </span>
                      <button
                        onClick={() => callPatientToLab(pt.id)}
                        className="py-1 px-3 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] text-white font-semibold text-[11px] transition-colors cursor-pointer flex items-center gap-1"
                      >
                        <span>Call to Cath-Lab Table</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Pane: Post-Op Recovery Board */}
        <div className="bg-white border border-[#DADCE0] rounded-2xl p-4 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-[#F1F3F4]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center font-bold text-xs">
                  <BedDouble className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#202124]">
                    Post-Op Ward Monitoring & Hemostasis
                  </h3>
                  <span className="text-[10px] text-[#5F6368]">
                    Vascular seal status, pulse checks & discharge readiness
                  </span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#E8F0FE] text-[#1A73E8] font-bold text-[10px]">
                {postOpPatients.length} Active
              </span>
            </div>

            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
              {postOpPatients.map((pt) => {
                const post = pt.postOp;
                if (!post) return null;

                return (
                  <div
                    key={pt.id}
                    className="p-3 rounded-xl border border-[#DADCE0] bg-[#FFFFFF] hover:border-[#BDC1C6] transition-all space-y-2"
                  >
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-xs font-bold text-[#202124]">
                          {pt.name}
                        </span>
                        <span className="text-[11px] text-[#5F6368] ml-2">
                          ({pt.age}y • {pt.sex})
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded-md bg-[#F1F3F4] text-[#202124] font-mono text-[10px] font-bold">
                        {post.recoveryBed}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-[#1A73E8]">
                      {pt.procedure}
                    </div>

                    {/* Vascular Seal & Pulse Indicators */}
                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="p-2 rounded-lg bg-[#F8F9FA] border border-[#DADCE0]">
                        <span className="text-[#5F6368] block">Puncture Seal:</span>
                        <span className="font-semibold text-[#137333] flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-[#1E8E3E]" />
                          {post.punctureSiteSeal}
                        </span>
                      </div>
                      <div className="p-2 rounded-lg bg-[#F8F9FA] border border-[#DADCE0]">
                        <span className="text-[#5F6368] block">Distal Pulses:</span>
                        <span className="font-semibold text-[#202124]">
                          {post.distalPulses}
                        </span>
                      </div>
                    </div>

                    <p className="text-[11px] text-[#5F6368] italic bg-[#F8F9FA] p-1.5 rounded-md">
                      {post.instructions}
                    </p>

                    {/* Action */}
                    <div className="pt-2 border-t border-[#F1F3F4] flex items-center justify-between gap-2">
                      <button
                        onClick={() => setSelectedPatientForDetail(pt)}
                        className="py-1 px-3 rounded-full border border-[#DADCE0] bg-white text-[#3C4043] hover:bg-[#F1F3F4] text-[11px] font-medium transition-colors cursor-pointer"
                      >
                        Clinical Details
                      </button>
                      <button
                        onClick={() => dischargePatient(pt.id)}
                        className="py-1 px-3 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] text-white font-semibold text-[11px] transition-colors cursor-pointer"
                      >
                        Mark Discharged
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          4. MASTER DAILY WORKLIST TABLE
          =================================================================== */}
      <section className="bg-white border border-[#DADCE0] rounded-2xl p-5 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 pb-3 border-b border-[#F1F3F4]">
          <div>
            <h2 className="text-sm font-bold text-[#202124]">
              Master Daily Scheduled Patients Worklist
            </h2>
            <p className="text-xs text-[#5F6368]">
              Full chronological Cath-Lab schedule with real-time stage escalation
            </p>
          </div>

          {/* Search and Modality Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="flex items-center gap-1 text-xs">
              {["all", "XA", "CT", "US", "ROSE"].map((mod) => (
                <button
                  key={mod}
                  onClick={() => setFilterModality(mod)}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-colors cursor-pointer ${
                    filterModality === mod
                      ? "bg-[#202124] text-white"
                      : "bg-[#F1F3F4] text-[#5F6368] hover:bg-[#E8EAED]"
                  }`}
                >
                  {mod === "all" ? "All" : `[${mod}]`}
                </button>
              ))}
            </div>

            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#5F6368]" />
              <input
                type="text"
                placeholder="Search patient, CR, doctor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 rounded-full border border-[#DADCE0] bg-white text-xs text-[#202124] focus:border-[#1A73E8] focus:outline-none w-56"
              />
            </div>
          </div>
        </div>

        {/* Master Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#DADCE0] text-[#5F6368] font-semibold text-[11px]">
                <th className="pb-2.5 px-2">Slot</th>
                <th className="pb-2.5 px-2">Patient Demographics</th>
                <th className="pb-2.5 px-2">Modality</th>
                <th className="pb-2.5 px-2">Target Artery / Organ & Procedure</th>
                <th className="pb-2.5 px-2">Attending Radiologist</th>
                <th className="pb-2.5 px-2">Clinical Stage</th>
                <th className="pb-2.5 px-2 text-right">Stage Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F1F3F4]">
              {filteredWorklist.map((pt) => {
                return (
                  <tr key={pt.id} className="hover:bg-[#F8F9FA] transition-colors">
                    <td className="py-3 px-2 font-mono text-[11px] text-[#5F6368] whitespace-nowrap">
                      {pt.time}
                    </td>

                    <td className="py-3 px-2">
                      <div className="font-bold text-[#202124]">{pt.name}</div>
                      <div className="text-[11px] text-[#5F6368]">
                        {pt.age}y • {pt.sex} • <span className="font-mono font-semibold">{pt.hid}</span>
                      </div>
                    </td>

                    <td className="py-3 px-2">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${getModalityBadge(
                          pt.modality
                        )}`}
                      >
                        {pt.modality}
                      </span>
                    </td>

                    <td className="py-3 px-2 max-w-xs">
                      <div className="font-medium text-[#202124] truncate">
                        {pt.procedure}
                      </div>
                      <div className="text-[11px] text-[#5F6368] truncate">
                        {pt.summary}
                      </div>
                    </td>

                    <td className="py-3 px-2 whitespace-nowrap">
                      <div className="font-medium text-[#202124]">{pt.postedBy}</div>
                      <div className="text-[10px] text-[#5F6368]">{pt.unit}</div>
                    </td>

                    <td className="py-3 px-2 whitespace-nowrap">
                      <select
                        value={pt.status}
                        onChange={(e) =>
                          advanceStage(
                            pt.id,
                            ClinicalStageSchema.parse(e.target.value as ClinicalStage)
                          )
                        }
                        className="px-2.5 py-1 rounded-full border border-[#DADCE0] bg-white text-[11px] font-semibold text-[#202124] focus:border-[#1A73E8] focus:outline-none cursor-pointer"
                      >
                        <option value="Scheduled">Scheduled</option>
                        <option value="Pre-Op Pending">Pre-Op Pending</option>
                        <option value="In Cath-Lab">In Cath-Lab</option>
                        <option value="Post-Op ICU">Post-Op ICU</option>
                        <option value="Discharged">Discharged</option>
                      </select>
                    </td>

                    <td className="py-3 px-2 text-right whitespace-nowrap">
                      <button
                        onClick={() => setSelectedPatientForDetail(pt)}
                        className="py-1 px-2.5 rounded-full border border-[#DADCE0] bg-white text-[#3C4043] hover:bg-[#F1F3F4] text-[11px] font-medium transition-colors cursor-pointer mr-1.5"
                      >
                        Dossier
                      </button>

                      {pt.status === "Scheduled" && (
                        <button
                          onClick={() => advanceStage(pt.id, "Pre-Op Pending")}
                          className="py-1 px-2.5 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] text-white text-[11px] font-semibold transition-colors cursor-pointer"
                        >
                          Prep Pre-Op
                        </button>
                      )}

                      {pt.status === "Pre-Op Pending" && (
                        <button
                          onClick={() => callPatientToLab(pt.id)}
                          className="py-1 px-2.5 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] text-white text-[11px] font-semibold transition-colors cursor-pointer"
                        >
                          Call to Lab
                        </button>
                      )}

                      {pt.status === "In Cath-Lab" && (
                        <button
                          onClick={() => setCompleteTransferModalPt(pt)}
                          className="py-1 px-2.5 rounded-full bg-[#1E8E3E] hover:bg-[#137333] text-white text-[11px] font-semibold transition-colors cursor-pointer"
                        >
                          Finish Case
                        </button>
                      )}

                      {pt.status === "Post-Op ICU" && (
                        <button
                          onClick={() => dischargePatient(pt.id)}
                          className="py-1 px-2.5 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] text-white text-[11px] font-semibold transition-colors cursor-pointer"
                        >
                          Discharge
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* ===================================================================
          MODAL: PROCEDURE COMPLETION & TRANSFER TO POST-OP
          =================================================================== */}
      {completeTransferModalPt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white border border-[#DADCE0] rounded-2xl w-full max-w-md shadow-xl p-6 relative">
            <button
              onClick={() => setCompleteTransferModalPt(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-[#F1F3F4] text-[#5F6368] hover:text-[#202124] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#E6F4EA] text-[#137333] flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#202124]">
                  Procedure Completion Sign-Off
                </h3>
                <p className="text-xs text-[#5F6368]">
                  Transfer {completeTransferModalPt.name} to Post-Op Recovery
                </p>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#DADCE0] space-y-1">
                <div className="flex justify-between">
                  <span className="text-[#5F6368]">Procedure:</span>
                  <span className="font-bold text-[#202124]">
                    {completeTransferModalPt.procedure}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5F6368]">Hospital CR:</span>
                  <span className="font-mono text-[#202124]">
                    {completeTransferModalPt.hid}
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#3C4043] mb-1">
                  Target Recovery Bed Allocation
                </label>
                <select
                  value={targetRecoveryBed}
                  onChange={(e) => setTargetRecoveryBed(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-white text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                >
                  <option value="LICU-04 (Liver ICU Bed 4)">LICU-04 (Liver ICU Bed 4)</option>
                  <option value="Cath Holding PACU-01">Cath Holding PACU-01</option>
                  <option value="IR Ward D-12">IR Ward D-12</option>
                  <option value="SICU-02 (Surgical ICU)">SICU-02 (Surgical ICU)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#3C4043] mb-1">
                  Post-Op Nursing & Hemostasis Instructions
                </label>
                <textarea
                  rows={2}
                  value={transferInstructions}
                  onChange={(e) => setTransferInstructions(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-white text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  onClick={() => setCompleteTransferModalPt(null)}
                  className="px-4 py-2 rounded-full border border-[#DADCE0] bg-white text-[#3C4043] hover:bg-[#F1F3F4] transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleExecuteTransfer}
                  className="px-4 py-2 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] text-white font-semibold transition-colors cursor-pointer"
                >
                  Confirm Transfer to Post-Op
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================
          MODAL: PATIENT DOSSIER DRAWER
          =================================================================== */}
      {selectedPatientForDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white border border-[#DADCE0] rounded-2xl w-full max-w-xl shadow-xl p-6 relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedPatientForDetail(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-[#F1F3F4] text-[#5F6368] hover:text-[#202124] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-base font-bold text-[#202124]">
                  {selectedPatientForDetail.name}
                </h3>
                <p className="text-xs text-[#5F6368]">
                  CR: {selectedPatientForDetail.hid} • {selectedPatientForDetail.age}y •{" "}
                  {selectedPatientForDetail.sex}
                </p>
              </div>
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${getModalityBadge(
                  selectedPatientForDetail.modality
                )}`}
              >
                {selectedPatientForDetail.modality}
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#DADCE0]">
                <span className="text-[10px] font-bold text-[#80868B] uppercase block mb-1">
                  Procedure & Indication:
                </span>
                <p className="font-bold text-[#1A73E8] mb-1">
                  {selectedPatientForDetail.procedure}
                </p>
                <p className="text-[#3C4043] leading-relaxed">
                  {selectedPatientForDetail.summary}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-lg bg-[#F8F9FA] border border-[#DADCE0]">
                  <span className="text-[10px] text-[#5F6368] block">Attending Consultant:</span>
                  <span className="font-semibold text-[#202124]">
                    {selectedPatientForDetail.postedBy}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#F8F9FA] border border-[#DADCE0]">
                  <span className="text-[10px] text-[#5F6368] block">Referring Department:</span>
                  <span className="font-semibold text-[#202124]">
                    {selectedPatientForDetail.unit}
                  </span>
                </div>
              </div>

              {/* Baseline Labs */}
              <div className="p-3 rounded-xl border border-[#DADCE0]">
                <span className="text-[10px] font-bold text-[#80868B] uppercase block mb-1.5">
                  Laboratory Investigations:
                </span>
                <div className="grid grid-cols-4 gap-2 text-center text-[11px]">
                  <div className="p-1.5 rounded bg-[#F1F3F4]">
                    <div className="text-[#5F6368] text-[10px]">INR</div>
                    <div className="font-bold text-[#202124]">{selectedPatientForDetail.labs.inr}</div>
                  </div>
                  <div className="p-1.5 rounded bg-[#F1F3F4]">
                    <div className="text-[#5F6368] text-[10px]">Creatinine</div>
                    <div className="font-bold text-[#202124]">{selectedPatientForDetail.labs.creat}</div>
                  </div>
                  <div className="p-1.5 rounded bg-[#F1F3F4]">
                    <div className="text-[#5F6368] text-[10px]">Platelets</div>
                    <div className="font-bold text-[#202124]">
                      {Math.round(selectedPatientForDetail.labs.plt / 1000)}k
                    </div>
                  </div>
                  <div className="p-1.5 rounded bg-[#F1F3F4]">
                    <div className="text-[#5F6368] text-[10px]">Total Bili</div>
                    <div className="font-bold text-[#202124]">{selectedPatientForDetail.labs.bili}</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setSelectedPatientForDetail(null)}
                  className="px-4 py-1.5 rounded-full border border-[#DADCE0] bg-white text-[#3C4043] hover:bg-[#F1F3F4] text-xs font-medium cursor-pointer"
                >
                  Close Dossier
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
