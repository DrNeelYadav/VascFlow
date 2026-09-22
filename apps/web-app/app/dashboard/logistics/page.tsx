"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Activity,
  AlertOctagon,
  AlertTriangle,
  ArrowRight,
  ArrowRightLeft,
  Bell,
  Building2,
  Calendar,
  CheckCircle2,
  CheckSquare,
  Clock,
  ExternalLink,
  Flame,
  Gauge,
  HeartPulse,
  Info,
  Layers,
  Phone,
  Plus,
  RefreshCw,
  Send,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Stethoscope,
  Timer,
  Truck,
  User,
  UserCheck,
  Users,
  XCircle,
  Zap,
} from "lucide-react";
import {
  usePatientLogisticsStore,
  LogisticsStage,
  PatientLogisticsRecord,
  HemostasisMethod,
} from "@/app/lib/logistics/patientLogisticsStore";

// 11-Stage display configuration
const STAGE_CONFIG: Record<
  LogisticsStage,
  { label: string; shortLabel: string; color: string; bg: string; stepNumber: number }
> = {
  ORDERED: { label: "1. Consult Ordered", shortLabel: "Ordered", color: "#5F6368", bg: "#F1F3F4", stepNumber: 1 },
  VETTED_APPROVED: { label: "2. Protocol Vetted", shortLabel: "Vetted", color: "#1A73E8", bg: "#E8F0FE", stepNumber: 2 },
  SCHEDULED: { label: "3. Suite Scheduled", shortLabel: "Scheduled", color: "#1A73E8", bg: "#E8F0FE", stepNumber: 3 },
  TRANSPORT_DISPATCHED: { label: "4. Porter Dispatched", shortLabel: "Dispatched", color: "#E37400", bg: "#FEF7E0", stepNumber: 4 },
  IN_TRANSIT: { label: "5. In Transit to Lab", shortLabel: "Transit", color: "#E37400", bg: "#FEF7E0", stepNumber: 5 },
  PREOP_HOLDING: { label: "6. Pre-Op Holding Bay", shortLabel: "Holding", color: "#A142F4", bg: "#F3E8FD", stepNumber: 6 },
  WHEELS_IN: { label: "7. Wheels-In Angiosuite", shortLabel: "In Lab", color: "#137333", bg: "#E6F4EA", stepNumber: 7 },
  PUNCTURE_ACTIVE: { label: "8. Puncture / Active", shortLabel: "Puncture", color: "#D93025", bg: "#FCE8E6", stepNumber: 8 },
  HEMOSTASIS_CLOSURE: { label: "9. Hemostasis / Closure", shortLabel: "Closure", color: "#E37400", bg: "#FEF7E0", stepNumber: 9 },
  PACU_PHASE_1: { label: "10. PACU Phase 1 (Hemostasis)", shortLabel: "PACU 1", color: "#1A73E8", bg: "#E8F0FE", stepNumber: 10 },
  PACU_PHASE_2_DISCHARGED: { label: "11. PACU Phase 2 / Discharged", shortLabel: "Discharged", color: "#137333", bg: "#E6F4EA", stepNumber: 11 },
};

export default function PatientLogisticsDashboardPage() {
  const {
    patients,
    activeTurnover,
    selectedPatientId,
    setSelectedPatientId,
    transitionStage,
    dispatchPorter,
    updateTransitMilestone,
    updatePreOpChecklist,
    clearHoldingBayAdmission,
    authorizeEmergencyOverride,
    addContrastVolume,
    recordTurnoverMilestone,
    recordHematomaCheck,
    updateAldreteScores,
    clearForDischarge,
    triggerStatEmergencyBumping,
    resetToDefaultBaseline,
  } = usePatientLogisticsStore();

  const [activeTab, setActiveTab] = useState<
    "STATUS_BOARD" | "PORTER_TRANSIT" | "SAFETY_GATEKEEPER" | "TURNOVER_CLOCK" | "TABLESIDE_COCKPIT" | "PACU_SURVEILLANCE"
  >("STATUS_BOARD");

  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);
  const [overrideModalPatientId, setOverrideModalPatientId] = useState<string | null>(null);
  const [overrideReason, setOverrideReason] = useState("");
  const [overrideConsultant, setOverrideConsultant] = useState("Dr. Meenu Bagarhatta (Sr. Prof & Head)");

  // Porter dispatch local form
  const [dispatchPorterName, setDispatchPorterName] = useState("Ram Lal (Porter #14)");
  const [dispatchPorterContact, setDispatchPorterContact] = useState("+91 98290 11221");

  // Contrast injection input
  const [contrastIncrement, setContrastIncrement] = useState(30);

  // Selected patient
  const currentPatient =
    patients.find((p) => p.id === selectedPatientId) || patients[0] || null;

  // Real-time ticking turnover display
  const [turnoverElapsed, setTurnoverElapsed] = useState<number>(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (activeTurnover?.wheelsOutTime) {
        const ms = Date.now() - new Date(activeTurnover.wheelsOutTime).getTime();
        setTurnoverElapsed(Math.floor(ms / 1000));
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [activeTurnover]);

  // Turn active turnover minutes / seconds
  const turnoverMinutes = Math.floor(turnoverElapsed / 60);
  const turnoverSeconds = turnoverElapsed % 60;
  const isTurnoverOverdue = turnoverMinutes >= 20;

  // STAT Emergency Form State
  const [statPatientName, setStatPatientName] = useState("Rameshwar Prasad (STAT Stroke)");
  const [statCrNo, setStatCrNo] = useState("SMS-2026-STAT-09");
  const [statAge, setStatAge] = useState(61);
  const [statDiagnosis, setStatDiagnosis] = useState("Acute Left MCA M1 Occlusion (LVO) • NIHSS 18 • Window 3.5h");
  const [statProcedure, setStatProcedure] = useState("Mechanical Thrombectomy (Solitaire X + Penumbra RED 72)");
  const [statRoom, setStatRoom] = useState("Cath Lab 1 (Philips Azurion Biplane)");

  const handleExecuteEmergencyBumping = () => {
    triggerStatEmergencyBumping(
      {
        patientName: statPatientName,
        crNumber: statCrNo,
        age: statAge,
        gender: "M",
        diagnosis: statDiagnosis,
        procedureTitle: statProcedure,
        schemeType: "MAAY",
      },
      statRoom,
      "Dr. Meenu Bagarhatta (Sr. Prof & Head)"
    );
    setEmergencyModalOpen(false);
  };

  return (
    <div className="space-y-5 pb-16">
      {/* Header Banner */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-[#DADCE0] pb-4 bg-white p-5 rounded-2xl shadow-xs">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1A73E8] text-white shadow-sm">
              <Truck className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-[#202124] tracking-tight">
                  Patient Logistics &amp; Angiosuite Load Center
                </h1>
                <span className="rounded-full bg-[#E8F0FE] px-2.5 py-0.5 text-[11px] font-semibold text-[#1A73E8] border border-[#D2E3FC]">
                  SMS Hospital IRIS
                </span>
              </div>
              <p className="text-xs text-[#5F6368] mt-0.5">
                Intra-hospital transit &bull; Safety gatekeeper &bull; Angiosuite turnover (&lt;20 min KPI) &bull; PACU hemostasis surveillance
              </p>
            </div>
          </div>
        </div>

        {/* Action Controls & Emergency Button */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Turnover indicator badge */}
          <div
            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold shadow-2xs ${
              isTurnoverOverdue
                ? "bg-[#FCE8E6] text-[#D93025] border-[#F5C2C7]"
                : "bg-[#E6F4EA] text-[#137333] border-[#CEEAD6]"
            }`}
          >
            <Timer className="h-4 w-4 animate-pulse" />
            <span>
              Cath Lab 1 Turnover:{" "}
              <strong>
                {turnoverMinutes}m {turnoverSeconds}s
              </strong>{" "}
              {isTurnoverOverdue ? "(Delayed > 20m)" : "(On Target)"}
            </span>
          </div>

          <button
            onClick={resetToDefaultBaseline}
            className="rounded-xl border border-[#DADCE0] bg-white p-2 text-[#5F6368] hover:text-[#202124] hover:bg-[#F1F3F4] transition shadow-2xs"
            title="Reset to factory baseline"
          >
            <RefreshCw className="h-4 w-4" />
          </button>

          {/* ONE-CLICK STAT EMERGENCY PREEMPTION BUTTON */}
          <button
            onClick={() => setEmergencyModalOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-[#D93025] hover:bg-[#B31412] text-white px-4 py-2 text-xs font-bold shadow-sm transition active:scale-95 animate-pulse"
          >
            <Zap className="h-4 w-4 fill-white" />
            <span>STAT Emergency Bumping</span>
          </button>
        </div>
      </div>

      {/* Primary Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#DADCE0] pb-2">
        {[
          { id: "STATUS_BOARD", label: "1. Angiosuite Status Board (11-Stage)", icon: Layers },
          { id: "PORTER_TRANSIT", label: "2. Ward Transport & Porter Dispatch", icon: Truck },
          { id: "SAFETY_GATEKEEPER", label: "3. Pre-Op Holding & Safety Gatekeeper", icon: ShieldCheck },
          { id: "TURNOVER_CLOCK", label: "4. Suite Turnover Tracker (<20 min)", icon: Timer },
          { id: "TABLESIDE_COCKPIT", label: "5. Tableside Cockpit (MACD & DAP)", icon: Gauge },
          { id: "PACU_SURVEILLANCE", label: "6. PACU Recovery & Bedrest Surveillance", icon: HeartPulse },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition ${
                isActive
                  ? "bg-[#202124] text-white shadow-2xs"
                  : "bg-white text-[#5F6368] border border-[#DADCE0] hover:bg-[#F1F3F4] hover:text-[#202124]"
              }`}
            >
              <Icon className={`h-3.5 w-3.5 ${isActive ? "text-white" : "text-[#5F6368]"}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: 11-STAGE ANGIO-SUITE STATUS BOARD                                  */}
      {/* ========================================================================= */}
      {activeTab === "STATUS_BOARD" && (
        <div className="space-y-4">
          <div className="bg-white border border-[#DADCE0] rounded-2xl p-5 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-[#DADCE0] pb-3">
              <div>
                <h2 className="text-sm font-bold text-[#202124] uppercase tracking-wider flex items-center gap-2">
                  <span>Live Angiosuite Milestones Board</span>
                  <span className="text-xs font-normal lowercase text-[#5F6368] bg-[#F1F3F4] px-2 py-0.5 rounded-md">
                    {patients.length} Active Patients Managed
                  </span>
                </h2>
                <p className="text-xs text-[#5F6368] mt-0.5">
                  Real-time milestone progression across Cath Lab 1 (Philips Azurion), Cath Lab 2, and CT/PTBD Suites
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#5F6368]">
                <span className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#1A73E8]"></span> Scheduled
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#A142F4]"></span> Holding Bay
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D93025] animate-ping"></span> On Table
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#137333]"></span> PACU / Complete
                </span>
              </div>
            </div>

            {/* Patients Cards List */}
            <div className="space-y-4">
              {patients.map((pt) => {
                const stage = STAGE_CONFIG[pt.currentStage] || STAGE_CONFIG.ORDERED;
                const isSelected = pt.id === selectedPatientId;
                const isPreOpCleared = pt.preOpChecklist.isClearedByNurse;

                return (
                  <div
                    key={pt.id}
                    onClick={() => setSelectedPatientId(pt.id)}
                    className={`border rounded-xl p-4 transition cursor-pointer ${
                      isSelected
                        ? "border-[#1A73E8] bg-[#F8FAFD] shadow-xs"
                        : "border-[#DADCE0] bg-white hover:border-[#BDC1C6]"
                    } ${pt.isStatEmergency ? "ring-2 ring-[#D93025]" : ""}`}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                      {/* Left: Demographics & Procedure */}
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl font-bold text-xs bg-[#E8F0FE] text-[#1A73E8] border border-[#D2E3FC]">
                          {pt.id}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-bold text-sm text-[#202124]">
                              {pt.patientName}
                            </span>
                            <span className="text-xs text-[#5F6368]">
                              ({pt.age}y / {pt.gender})
                            </span>
                            <span className="font-mono text-xs text-[#5F6368] bg-[#F1F3F4] px-2 py-0.5 rounded">
                              {pt.crNumber}
                            </span>
                            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#E8F0FE] text-[#1A73E8]">
                              {pt.schemeType} ({pt.schemeCardNumber})
                            </span>
                            {pt.isStatEmergency && (
                              <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-[#D93025] text-white animate-pulse">
                                STAT EMERGENCY
                              </span>
                            )}
                            {pt.isBumpedStandby && (
                              <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#FEF7E0] text-[#E37400] border border-[#FEEFC3]">
                                BUMPED STANDBY (+75m)
                              </span>
                            )}
                          </div>

                          <div className="mt-1 text-xs text-[#202124] font-medium flex flex-wrap items-center gap-x-3 gap-y-1">
                            <span className="text-[#1A73E8] font-semibold">{pt.procedureTitle}</span>
                            <span className="text-[#5F6368]">&bull; {pt.ipdWard}</span>
                            <span className="text-[#5F6368]">&bull; Room: {pt.scheduledRoom}</span>
                            <span className="text-[#5F6368]">&bull; Slot: {pt.scheduledTime}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Milestone Stage Badge & Fast Progression */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-bold"
                          style={{ color: stage.color, backgroundColor: stage.bg }}
                        >
                          Stage {stage.stepNumber}: {stage.shortLabel}
                        </span>

                        {/* Fast 1-Tap Advance Milestone */}
                        {pt.currentStage === "SCHEDULED" && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              dispatchPorter(pt.id, "Ram Lal (Porter #14)", "+91 98290 11221", pt.ipdWard);
                            }}
                            className="flex items-center gap-1 rounded-lg bg-[#E37400] text-white px-2.5 py-1 text-xs font-semibold hover:bg-[#C26200] shadow-2xs"
                          >
                            <Truck className="h-3 w-3" />
                            <span>Call Porter</span>
                          </button>
                        )}

                        {pt.currentStage === "TRANSPORT_DISPATCHED" && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              updateTransitMilestone(pt.id, "IN_TRANSIT");
                            }}
                            className="flex items-center gap-1 rounded-lg bg-[#E37400] text-white px-2.5 py-1 text-xs font-semibold hover:bg-[#C26200] shadow-2xs"
                          >
                            <span>Mark En Route</span>
                          </button>
                        )}

                        {pt.currentStage === "IN_TRANSIT" && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              updateTransitMilestone(pt.id, "ARRIVED_HOLDING_BAY");
                            }}
                            className="flex items-center gap-1 rounded-lg bg-[#A142F4] text-white px-2.5 py-1 text-xs font-semibold hover:bg-[#842ED8] shadow-2xs"
                          >
                            <Building2 className="h-3 w-3" />
                            <span>Arrived in Holding</span>
                          </button>
                        )}

                        {pt.currentStage === "PREOP_HOLDING" && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (!isPreOpCleared) {
                                const res = clearHoldingBayAdmission(pt.id, "Anita (Sister Incharge)");
                                if (!res.success) {
                                  alert(res.reason);
                                  return;
                                }
                              }
                              transitionStage(pt.id, "WHEELS_IN", "Anita (Sister Incharge)", "Wheels-In to Angiosuite table");
                            }}
                            className="flex items-center gap-1 rounded-lg bg-[#137333] text-white px-2.5 py-1 text-xs font-semibold hover:bg-[#0D5223] shadow-2xs"
                          >
                            <ArrowRight className="h-3 w-3" />
                            <span>Wheels-In</span>
                          </button>
                        )}

                        {pt.currentStage === "WHEELS_IN" && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              transitionStage(pt.id, "PUNCTURE_ACTIVE", pt.primaryOperator || "Dr. Naresh Mangalhara", "Vascular access achieved; sheath inserted");
                            }}
                            className="flex items-center gap-1 rounded-lg bg-[#D93025] text-white px-2.5 py-1 text-xs font-semibold hover:bg-[#B31412] shadow-2xs"
                          >
                            <Zap className="h-3 w-3" />
                            <span>Puncture &amp; Sheath In</span>
                          </button>
                        )}

                        {pt.currentStage === "PUNCTURE_ACTIVE" && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              transitionStage(pt.id, "HEMOSTASIS_CLOSURE", pt.primaryOperator || "Dr. Naresh Mangalhara", "Intervention complete; closure device deployed");
                            }}
                            className="flex items-center gap-1 rounded-lg bg-[#E37400] text-white px-2.5 py-1 text-xs font-semibold hover:bg-[#C26200] shadow-2xs"
                          >
                            <span>Deploy Closure / Hemostasis</span>
                          </button>
                        )}

                        {pt.currentStage === "HEMOSTASIS_CLOSURE" && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              transitionStage(pt.id, "PACU_PHASE_1", "Anita (Sister Incharge)", "Transferred to PACU bed; bedrest clock active");
                            }}
                            className="flex items-center gap-1 rounded-lg bg-[#1A73E8] text-white px-2.5 py-1 text-xs font-semibold hover:bg-[#1557B0] shadow-2xs"
                          >
                            <HeartPulse className="h-3 w-3" />
                            <span>Move to PACU</span>
                          </button>
                        )}

                        {pt.currentStage === "PACU_PHASE_1" && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              clearForDischarge(pt.id, "Dr. Shashank Sharma (Professor)");
                            }}
                            className="flex items-center gap-1 rounded-lg bg-[#137333] text-white px-2.5 py-1 text-xs font-semibold hover:bg-[#0D5223] shadow-2xs"
                          >
                            <CheckCircle2 className="h-3 w-3" />
                            <span>Discharge / Step-Down</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* 11-Stage Progress Bar Graphic */}
                    <div className="mt-3 pt-3 border-t border-[#F1F3F4]">
                      <div className="grid grid-cols-11 gap-1">
                        {(Object.keys(STAGE_CONFIG) as LogisticsStage[]).map((stKey, idx) => {
                          const conf = STAGE_CONFIG[stKey];
                          const isDone = stage.stepNumber >= conf.stepNumber;
                          const isCurrent = stage.stepNumber === conf.stepNumber;

                          return (
                            <div
                              key={stKey}
                              title={`Stage ${idx + 1}: ${conf.label}`}
                              className="group relative flex flex-col items-center"
                            >
                              <div
                                className={`h-2 w-full rounded-full transition-all ${
                                  isCurrent
                                    ? "bg-[#D93025] animate-pulse ring-2 ring-[#FCE8E6]"
                                    : isDone
                                    ? "bg-[#1A73E8]"
                                    : "bg-[#E8EAED]"
                                }`}
                              />
                              <span className="text-[9px] text-[#5F6368] mt-1 truncate hidden sm:block">
                                {conf.shortLabel}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: WARD TRANSPORT & PORTER DISPATCH                                   */}
      {/* ========================================================================= */}
      {activeTab === "PORTER_TRANSIT" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Left Column: Porter Dispatch Station */}
          <div className="lg:col-span-1 bg-white border border-[#DADCE0] rounded-2xl p-5 shadow-xs space-y-4">
            <div className="border-b border-[#DADCE0] pb-3">
              <h3 className="text-sm font-bold text-[#202124] uppercase tracking-wider flex items-center gap-2">
                <Truck className="h-4 w-4 text-[#E37400]" />
                <span>Call Inpatient to Cath Lab</span>
              </h3>
              <p className="text-xs text-[#5F6368] mt-0.5">
                Dispatches a ward porter to transport the inpatient directly to the holding bay
              </p>
            </div>

            {currentPatient && (
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-[#F8F9FA] rounded-xl border border-[#DADCE0]">
                  <p className="font-bold text-[#202124]">{currentPatient.patientName}</p>
                  <p className="text-[#5F6368]">CR: {currentPatient.crNumber} &bull; Ward: {currentPatient.ipdWard}</p>
                  <p className="text-[#1A73E8] font-medium mt-1">{currentPatient.procedureTitle}</p>
                </div>

                <div>
                  <label className="block font-semibold text-[#3C4043] mb-1">Assigned Porter</label>
                  <select
                    value={dispatchPorterName}
                    onChange={(e) => setDispatchPorterName(e.target.value)}
                    className="w-full rounded-xl border border-[#DADCE0] bg-white p-2 text-xs text-[#202124]"
                  >
                    <option value="Ram Lal (Porter #14)">Ram Lal (Porter #14) - Trauma / Liver Wing</option>
                    <option value="Mohan Singh (Porter #08)">Mohan Singh (Porter #08) - Gastro / 2B</option>
                    <option value="Kishore (Porter #04)">Kishore (Porter #04) - Pulmonary / 4th Floor</option>
                    <option value="Mukesh Kumar (Porter #19)">Mukesh Kumar (Porter #19) - Surgery Block</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-[#3C4043] mb-1">Porter Phone / Pager</label>
                  <input
                    type="text"
                    value={dispatchPorterContact}
                    onChange={(e) => setDispatchPorterContact(e.target.value)}
                    className="w-full rounded-xl border border-[#DADCE0] bg-white p-2 text-xs text-[#202124]"
                  />
                </div>

                <button
                  onClick={() => {
                    dispatchPorter(
                      currentPatient.id,
                      dispatchPorterName,
                      dispatchPorterContact,
                      currentPatient.ipdWard
                    );
                    alert(`Porter ${dispatchPorterName} paged for ${currentPatient.patientName} at ${currentPatient.ipdWard}!`);
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#E37400] hover:bg-[#C26200] text-white p-2.5 font-bold shadow-xs transition"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Call for Patient &bull; Push Notification</span>
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Live In-Transit Milestones Board */}
          <div className="lg:col-span-2 bg-white border border-[#DADCE0] rounded-2xl p-5 shadow-xs space-y-4">
            <div className="border-b border-[#DADCE0] pb-3 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-[#202124] uppercase tracking-wider flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#1A73E8]" />
                  <span>Active Transit Tracking &amp; Ward Handoff</span>
                </h3>
                <p className="text-xs text-[#5F6368] mt-0.5">
                  Real-time timestamps from Dispatch &rarr; Arrived at Ward &rarr; En Route &rarr; Holding Bay
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {patients
                .filter(
                  (p) =>
                    p.currentStage === "TRANSPORT_DISPATCHED" ||
                    p.currentStage === "IN_TRANSIT" ||
                    p.currentStage === "PREOP_HOLDING"
                )
                .map((p) => {
                  const job = p.transitJob;
                  return (
                    <div key={p.id} className="border border-[#DADCE0] rounded-xl p-4 bg-white space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-bold text-sm text-[#202124]">{p.patientName}</span>
                          <span className="text-xs text-[#5F6368] ml-2 font-mono">({p.crNumber})</span>
                          <p className="text-xs text-[#1A73E8]">{p.procedureTitle}</p>
                        </div>
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#FEF7E0] text-[#E37400] border border-[#FEEFC3]">
                          {p.currentStage}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] bg-[#F8F9FA] p-3 rounded-lg border border-[#DADCE0]">
                        <div>
                          <span className="text-[#5F6368] block">Porter</span>
                          <span className="font-semibold text-[#202124]">{job.porterName || "Unassigned"}</span>
                        </div>
                        <div>
                          <span className="text-[#5F6368] block">Pickup Location</span>
                          <span className="font-semibold text-[#202124]">{job.pickupWard}</span>
                        </div>
                        <div>
                          <span className="text-[#5F6368] block">Dispatched At</span>
                          <span className="font-semibold text-[#202124]">
                            {job.dispatchRequestedAt ? new Date(job.dispatchRequestedAt).toLocaleTimeString() : "-"}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#5F6368] block">Holding Arrival</span>
                          <span className="font-semibold text-[#202124]">
                            {job.arrivedHoldingAt ? new Date(job.arrivedHoldingAt).toLocaleTimeString() : "Pending"}
                          </span>
                        </div>
                      </div>

                      {/* Progression Buttons */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        <button
                          onClick={() => updateTransitMilestone(p.id, "ARRIVED_AT_WARD")}
                          className="rounded-lg border border-[#DADCE0] bg-white px-3 py-1 text-xs font-semibold hover:bg-[#F1F3F4]"
                        >
                          1. Arrived at Ward
                        </button>
                        <button
                          onClick={() => updateTransitMilestone(p.id, "IN_TRANSIT")}
                          className="rounded-lg bg-[#E37400] text-white px-3 py-1 text-xs font-semibold hover:bg-[#C26200]"
                        >
                          2. Wheelchair / Stretcher En Route
                        </button>
                        <button
                          onClick={() => updateTransitMilestone(p.id, "ARRIVED_HOLDING_BAY")}
                          className="rounded-lg bg-[#137333] text-white px-3 py-1 text-xs font-semibold hover:bg-[#0D5223]"
                        >
                          3. Arrived at Pre-Op Holding Bay
                        </button>
                      </div>
                    </div>
                  );
                })}

              {patients.filter(
                (p) =>
                  p.currentStage === "TRANSPORT_DISPATCHED" ||
                  p.currentStage === "IN_TRANSIT" ||
                  p.currentStage === "PREOP_HOLDING"
              ).length === 0 && (
                <div className="p-8 text-center text-xs text-[#5F6368]">
                  <Truck className="h-8 w-8 mx-auto text-[#BDC1C6] mb-2" />
                  No patients currently in active transit. Select a scheduled patient and click "Call Porter".
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: PRE-OP HOLDING BAY & SAFETY GATEKEEPER                             */}
      {/* ========================================================================= */}
      {activeTab === "SAFETY_GATEKEEPER" && currentPatient && (
        <div className="bg-white border border-[#DADCE0] rounded-2xl p-6 shadow-xs space-y-5">
          <div className="border-b border-[#DADCE0] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[#137333]" />
                <h2 className="text-base font-bold text-[#202124]">
                  Holding Bay &amp; CIRSE Clinical Safety Gatekeeper
                </h2>
                <span className="px-2 py-0.5 rounded text-xs font-bold bg-[#F3E8FD] text-[#A142F4]">
                  CIRSE Risk Tier {currentPatient.cirseRiskTier}
                </span>
              </div>
              <p className="text-xs text-[#5F6368] mt-1">
                Mandatory pre-procedural verification for{" "}
                <strong className="text-[#202124]">{currentPatient.patientName}</strong> ({currentPatient.crNumber}) &bull;{" "}
                {currentPatient.procedureTitle}
              </p>
            </div>

            {/* Clearance status badge */}
            <div>
              {currentPatient.preOpChecklist.isClearedByNurse ? (
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6] text-xs font-bold">
                  <CheckCircle2 className="h-4 w-4" />
                  GATEKEEPER PASSED: CLEARED FOR ANGIOSUITE
                </span>
              ) : (
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FCE8E6] text-[#D93025] border border-[#F5C2C7] text-xs font-bold animate-pulse">
                  <AlertOctagon className="h-4 w-4" />
                  SUITE ENTRY LOCKED &bull; UNVERIFIED REQUIREMENTS
                </span>
              )}
            </div>
          </div>

          {/* Interactive Checklist Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Checklist Item 1: Two Identifiers */}
            <div className="p-3.5 rounded-xl border border-[#DADCE0] flex items-start justify-between bg-[#F8F9FA]">
              <div>
                <span className="font-bold text-xs text-[#202124] block">1. Patient Identifiers Verified</span>
                <span className="text-[11px] text-[#5F6368]">
                  Verified Name, Jan Aadhaar / RGHS Card, and wristband barcode
                </span>
              </div>
              <input
                type="checkbox"
                checked={currentPatient.preOpChecklist.verifiedTwoIdentifiers}
                onChange={(e) =>
                  updatePreOpChecklist(currentPatient.id, { verifiedTwoIdentifiers: e.target.checked })
                }
                className="h-5 w-5 rounded border-[#DADCE0] text-[#1A73E8] focus:ring-0"
              />
            </div>

            {/* Checklist Item 2: IV Access */}
            <div className="p-3.5 rounded-xl border border-[#DADCE0] flex items-start justify-between bg-[#F8F9FA]">
              <div>
                <span className="font-bold text-xs text-[#202124] block">2. Patent Wide-Bore IV Access</span>
                <span className="text-[11px] text-[#5F6368]">
                  {currentPatient.preOpChecklist.ivGaugeAndSite} (Checked with saline flush)
                </span>
              </div>
              <input
                type="checkbox"
                checked={currentPatient.preOpChecklist.ivAccessPatent}
                onChange={(e) =>
                  updatePreOpChecklist(currentPatient.id, { ivAccessPatent: e.target.checked })
                }
                className="h-5 w-5 rounded border-[#DADCE0] text-[#1A73E8] focus:ring-0"
              />
            </div>

            {/* Checklist Item 3: Fasting Status */}
            <div className="p-3.5 rounded-xl border border-[#DADCE0] flex items-start justify-between bg-[#F8F9FA]">
              <div>
                <span className="font-bold text-xs text-[#202124] block">3. Fasting (NPO) Verified</span>
                <span className="text-[11px] text-[#5F6368]">
                  Patient has fasted for {currentPatient.preOpChecklist.npoFastingHours} hours (Minimum &ge; 6h required for sedation)
                </span>
              </div>
              <input
                type="checkbox"
                checked={currentPatient.preOpChecklist.isNpoCompliant}
                onChange={(e) =>
                  updatePreOpChecklist(currentPatient.id, { isNpoCompliant: e.target.checked })
                }
                className="h-5 w-5 rounded border-[#DADCE0] text-[#1A73E8] focus:ring-0"
              />
            </div>

            {/* Checklist Item 4: Bilingual Consent */}
            <div className="p-3.5 rounded-xl border border-[#DADCE0] flex items-start justify-between bg-[#F8F9FA]">
              <div>
                <span className="font-bold text-xs text-[#202124] block">4. Bilingual Statutory Consent</span>
                <span className="text-[11px] text-[#5F6368]">
                  Hindi &amp; English legal consent signed by patient/attendant with witness
                </span>
              </div>
              <input
                type="checkbox"
                checked={currentPatient.preOpChecklist.consentSignedBilingual}
                onChange={(e) =>
                  updatePreOpChecklist(currentPatient.id, { consentSignedBilingual: e.target.checked })
                }
                className="h-5 w-5 rounded border-[#DADCE0] text-[#1A73E8] focus:ring-0"
              />
            </div>
          </div>

          {/* Laboratory Coagulation & Renal Gatekeeper */}
          <div className="border border-[#DADCE0] rounded-xl p-4 bg-[#F8F9FA] space-y-3">
            <h4 className="text-xs font-bold text-[#202124] uppercase tracking-wider flex items-center gap-2">
              <Activity className="h-4 w-4 text-[#1A73E8]" />
              <span>Laboratory Coagulation &amp; Nephrotoxicity Guardrails</span>
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {/* INR */}
              <div className="p-3 rounded-lg bg-white border border-[#DADCE0]">
                <span className="text-[11px] text-[#5F6368] block">INR (Target &le; 1.5)</span>
                <span
                  className={`text-base font-extrabold ${
                    currentPatient.preOpChecklist.inr > 1.5 ? "text-[#D93025]" : "text-[#137333]"
                  }`}
                >
                  {currentPatient.preOpChecklist.inr}
                </span>
                <span className="text-[10px] text-[#5F6368] block mt-0.5">
                  {currentPatient.preOpChecklist.inr > 1.5 ? "CRITICAL ELEVATION" : "Normal Hemostasis"}
                </span>
              </div>

              {/* Platelets */}
              <div className="p-3 rounded-lg bg-white border border-[#DADCE0]">
                <span className="text-[11px] text-[#5F6368] block">Platelets (&ge; 50k)</span>
                <span
                  className={`text-base font-extrabold ${
                    currentPatient.preOpChecklist.platelets < 50000 ? "text-[#D93025]" : "text-[#137333]"
                  }`}
                >
                  {currentPatient.preOpChecklist.platelets.toLocaleString()} /µL
                </span>
                <span className="text-[10px] text-[#5F6368] block mt-0.5">
                  {currentPatient.preOpChecklist.platelets < 50000 ? "THROMBOCYTOPENIA" : "Adequate"}
                </span>
              </div>

              {/* Creatinine */}
              <div className="p-3 rounded-lg bg-white border border-[#DADCE0]">
                <span className="text-[11px] text-[#5F6368] block">Serum Creatinine</span>
                <span className="text-base font-extrabold text-[#202124]">
                  {currentPatient.preOpChecklist.serumCreatinine} mg/dL
                </span>
                <span className="text-[10px] text-[#5F6368] block mt-0.5">Weight: {currentPatient.preOpChecklist.patientWeightKg} kg</span>
              </div>

              {/* eGFR (CKD-EPI 2021) */}
              <div className="p-3 rounded-lg bg-white border border-[#DADCE0]">
                <span className="text-[11px] text-[#5F6368] block">eGFR (CKD-EPI)</span>
                <span className="text-base font-extrabold text-[#1A73E8]">
                  {currentPatient.preOpChecklist.eGfr} mL/min
                </span>
                <span className="text-[10px] text-[#5F6368] block mt-0.5">
                  {currentPatient.preOpChecklist.eGfr < 30 ? "Stage 4 CKD (CO2 Angio)" : "Adequate Clearance"}
                </span>
              </div>

              {/* Cigarroa MACD Ceiling */}
              <div className="p-3 rounded-lg bg-[#FEF7E0] border border-[#FEEFC3]">
                <span className="text-[11px] text-[#E37400] font-semibold block">Cigarroa MACD Ceiling</span>
                <span className="text-base font-extrabold text-[#E37400]">
                  {currentPatient.intraOpWatchdog.cigarroaMacdLimitMl} mL
                </span>
                <span className="text-[10px] text-[#5F6368] block mt-0.5">(5 × Wt) / Creatinine</span>
              </div>
            </div>

            {/* Blood bank crossmatch check for Tier 3 High Bleed Risk */}
            {currentPatient.cirseRiskTier === 3 && (
              <div className="flex items-center justify-between p-3 rounded-lg bg-[#FCE8E6] border border-[#F5C2C7] text-xs">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="h-4 w-4 text-[#D93025]" />
                  <span className="font-bold text-[#D93025]">
                    Tier 3 High-Risk Procedure (TIPS / DIPS / PTBD): 2-Unit PRBC Crossmatch Verification
                  </span>
                </div>
                <span className="font-bold text-[#202124]">
                  {currentPatient.preOpChecklist.bloodBankCrossMatchedUnits} Units Verified in Blood Bank
                </span>
              </div>
            )}
          </div>

          {/* Gatekeeper Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <button
              onClick={() => {
                const res = clearHoldingBayAdmission(currentPatient.id, "Anita (Sister Incharge)");
                if (!res.success) {
                  alert(res.reason);
                } else {
                  alert("Pre-Op Safety Gatekeeper PASSED! Patient is officially cleared for Angiosuite entry.");
                }
              }}
              className="flex items-center gap-2 rounded-xl bg-[#137333] hover:bg-[#0D5223] text-white px-5 py-2.5 text-xs font-bold shadow-xs transition"
            >
              <CheckCircle2 className="h-4 w-4" />
              <span>Verify &amp; Sign Safety Clearance (Sister Incharge)</span>
            </button>

            <button
              onClick={() => setOverrideModalPatientId(currentPatient.id)}
              className="flex items-center gap-2 rounded-xl border border-[#D93025] text-[#D93025] hover:bg-[#FCE8E6] px-4 py-2.5 text-xs font-bold shadow-2xs transition"
            >
              <AlertTriangle className="h-4 w-4" />
              <span>Consultant Emergency Clinical Override</span>
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: SUITE TURNOVER TRACKER (<20 MIN KPI)                               */}
      {/* ========================================================================= */}
      {activeTab === "TURNOVER_CLOCK" && (
        <div className="bg-white border border-[#DADCE0] rounded-2xl p-6 shadow-xs space-y-6">
          <div className="border-b border-[#DADCE0] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-bold text-[#202124] flex items-center gap-2">
                <Timer className="h-5 w-5 text-[#1A73E8]" />
                <span>Angiosuite Room Turnover Engine (KPI Target &lt; 20 Minutes)</span>
              </h2>
              <p className="text-xs text-[#5F6368] mt-0.5">
                Monitoring Cath Lab 1 (Philips Azurion) between Case {activeTurnover.previousCaseId} and Case{" "}
                {activeTurnover.nextCaseId}
              </p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-black font-mono text-[#202124]">
                {turnoverMinutes.toString().padStart(2, "0")}:{turnoverSeconds.toString().padStart(2, "0")}
              </span>
              <p className="text-[11px] text-[#5F6368]">Elapsed Turnover Time</p>
            </div>
          </div>

          {/* 5-Step Turnover Milestone Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {/* Step 1 */}
            <div className="p-4 rounded-xl border border-[#DADCE0] bg-[#F8F9FA] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#202124]">1. Wheels Out</span>
                <CheckCircle2 className="h-4 w-4 text-[#137333]" />
              </div>
              <p className="text-[11px] text-[#5F6368]">Previous case exited suite</p>
              <span className="text-xs font-mono font-semibold text-[#137333] block">00:00 (Logged)</span>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl border border-[#DADCE0] bg-[#F8F9FA] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#202124]">2. Terminal Clean</span>
                {activeTurnover.terminalCleanComplete ? (
                  <CheckCircle2 className="h-4 w-4 text-[#137333]" />
                ) : (
                  <Clock className="h-4 w-4 text-[#E37400] animate-spin" />
                )}
              </div>
              <p className="text-[11px] text-[#5F6368]">Housekeeping surface sterilization</p>
              <button
                onClick={() => recordTurnoverMilestone("TERMINAL_CLEAN_DONE")}
                className="w-full text-center py-1 rounded bg-white border border-[#DADCE0] text-[11px] font-semibold text-[#202124] hover:bg-[#F1F3F4]"
              >
                Mark Cleaned
              </button>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-xl border border-[#DADCE0] bg-[#F8F9FA] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#202124]">3. Air Exchange</span>
                {activeTurnover.airExchangeReady ? (
                  <CheckCircle2 className="h-4 w-4 text-[#137333]" />
                ) : (
                  <Clock className="h-4 w-4 text-[#5F6368]" />
                )}
              </div>
              <p className="text-[11px] text-[#5F6368]">Laminar flow 20 air changes/h</p>
              <button
                onClick={() => recordTurnoverMilestone("AIR_EXCHANGE_DONE")}
                className="w-full text-center py-1 rounded bg-white border border-[#DADCE0] text-[11px] font-semibold text-[#202124] hover:bg-[#F1F3F4]"
              >
                Confirm Air Ready
              </button>
            </div>

            {/* Step 4 */}
            <div className="p-4 rounded-xl border border-[#DADCE0] bg-[#F8F9FA] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#202124]">4. Sterile Pack Open</span>
                {activeTurnover.sterileTrayOpened ? (
                  <CheckCircle2 className="h-4 w-4 text-[#137333]" />
                ) : (
                  <Clock className="h-4 w-4 text-[#5F6368]" />
                )}
              </div>
              <p className="text-[11px] text-[#5F6368]">Scrub tech opened sterile drape pack</p>
              <button
                onClick={() => recordTurnoverMilestone("TRAY_OPENED")}
                className="w-full text-center py-1 rounded bg-white border border-[#DADCE0] text-[11px] font-semibold text-[#202124] hover:bg-[#F1F3F4]"
              >
                Pack Opened
              </button>
            </div>

            {/* Step 5 */}
            <div className="p-4 rounded-xl border border-[#DADCE0] bg-[#F8F9FA] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#202124]">5. Wheels In</span>
                {activeTurnover.wheelsInTime ? (
                  <CheckCircle2 className="h-4 w-4 text-[#137333]" />
                ) : (
                  <Clock className="h-4 w-4 text-[#5F6368]" />
                )}
              </div>
              <p className="text-[11px] text-[#5F6368]">Next patient on table</p>
              <button
                onClick={() => recordTurnoverMilestone("WHEELS_IN")}
                className="w-full text-center py-1 rounded bg-[#137333] text-white text-[11px] font-semibold hover:bg-[#0D5223]"
              >
                Log Wheels-In
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: TABLESIDE SAFETY COCKPIT (MACD & RADIATION)                         */}
      {/* ========================================================================= */}
      {activeTab === "TABLESIDE_COCKPIT" && currentPatient && (
        <div className="bg-[#202124] text-white border border-[#3C4043] rounded-2xl p-6 shadow-md space-y-6">
          <div className="border-b border-[#3C4043] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <Gauge className="h-5 w-5 text-[#8AB4F8]" />
                <h2 className="text-base font-bold text-white tracking-wide">
                  Sterile Cockpit &bull; Intra-Op Watchdog (OLED Dark Mode)
                </h2>
              </div>
              <p className="text-xs text-[#9AA0A6] mt-0.5">
                Real-time contrast nephrotoxicity ceilings (Cigarroa MACD) &amp; DICOM RDSR radiation telemetry
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-[#9AA0A6]">
                Patient: <strong className="text-white">{currentPatient.patientName}</strong> ({currentPatient.crNumber})
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: Cigarroa MACD Contrast Volume Gauge */}
            <div className="p-5 rounded-xl border border-[#3C4043] bg-[#292A2D] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9AA0A6]">
                  Running Contrast Injected vs Cigarroa MACD Limit
                </span>
                <span className="text-xs font-mono font-bold text-[#8AB4F8]">
                  {currentPatient.intraOpWatchdog.contrastInjectedMl} / {currentPatient.intraOpWatchdog.cigarroaMacdLimitMl} mL
                </span>
              </div>

              {/* Progress bar */}
              {(() => {
                const pct = Math.min(
                  100,
                  Math.round(
                    (currentPatient.intraOpWatchdog.contrastInjectedMl /
                      (currentPatient.intraOpWatchdog.cigarroaMacdLimitMl || 300)) *
                      100
                  )
                );
                const isOverLimit = pct >= 100;
                const isWarning = pct >= 80;

                return (
                  <div className="space-y-2">
                    <div className="h-4 w-full rounded-full bg-[#3C4043] overflow-hidden p-0.5">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          isOverLimit ? "bg-[#EA4335] animate-pulse" : isWarning ? "bg-[#FBBC04]" : "bg-[#34A853]"
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#9AA0A6]">0 mL</span>
                      <span
                        className={`font-bold ${
                          isOverLimit ? "text-[#EA4335]" : isWarning ? "text-[#FBBC04]" : "text-[#34A853]"
                        }`}
                      >
                        {pct}% of Maximum Allowable Contrast Dose (MACD)
                      </span>
                      <span className="text-[#9AA0A6]">{currentPatient.intraOpWatchdog.cigarroaMacdLimitMl} mL</span>
                    </div>

                    {isOverLimit && (
                      <div className="p-3 rounded-lg bg-[#EA4335]/20 border border-[#EA4335] text-xs text-[#EA4335] font-bold flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        <span>CRITICAL CONTRAST CEILING BREACH: Switch immediately to CO2 Angiography or Non-Contrast Runs</span>
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* Quick Increment Controls */}
              <div className="flex items-center gap-2 pt-2">
                <span className="text-xs text-[#9AA0A6]">Log Contrast Injection:</span>
                {[10, 20, 30, 50].map((vol) => (
                  <button
                    key={vol}
                    onClick={() => addContrastVolume(currentPatient.id, vol)}
                    className="rounded-lg bg-[#3C4043] hover:bg-[#5F6368] text-white px-3 py-1 text-xs font-semibold"
                  >
                    +{vol} mL
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Radiation Dosimetry (DICOM RDSR) */}
            <div className="p-5 rounded-xl border border-[#3C4043] bg-[#292A2D] space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#9AA0A6] block">
                DICOM RDSR Radiation Telemetry (Philips Azurion)
              </span>

              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-[#202124] border border-[#3C4043]">
                  <span className="text-[11px] text-[#9AA0A6] block">Fluoro Time</span>
                  <span className="text-lg font-bold font-mono text-white">
                    {Math.floor(currentPatient.intraOpWatchdog.fluoroscopyTimeSeconds / 60)}m{" "}
                    {currentPatient.intraOpWatchdog.fluoroscopyTimeSeconds % 60}s
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-[#202124] border border-[#3C4043]">
                  <span className="text-[11px] text-[#9AA0A6] block">Dose Area (DAP)</span>
                  <span className="text-lg font-bold font-mono text-[#8AB4F8]">
                    {currentPatient.intraOpWatchdog.cumulativeDapGyCm2} Gy·cm²
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-[#202124] border border-[#3C4043]">
                  <span className="text-[11px] text-[#9AA0A6] block">Air Kerma (Ka,r)</span>
                  <span
                    className={`text-lg font-bold font-mono ${
                      currentPatient.intraOpWatchdog.cumulativeAirKermaMgy >= 3000
                        ? "text-[#EA4335]"
                        : "text-[#34A853]"
                    }`}
                  >
                    {currentPatient.intraOpWatchdog.cumulativeAirKermaMgy} mGy
                  </span>
                </div>
              </div>

              <div className="text-xs text-[#9AA0A6] flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#34A853]" />
                <span>SIR / AERB Advisory Alert Threshold: 3,000 mGy &bull; Critical Skin Necrosis: 5,000 mGy</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 6: PACU RECOVERY & PUNCTURE BEDREST SURVEILLANCE                      */}
      {/* ========================================================================= */}
      {activeTab === "PACU_SURVEILLANCE" && currentPatient && (
        <div className="bg-white border border-[#DADCE0] rounded-2xl p-6 shadow-xs space-y-6">
          <div className="border-b border-[#DADCE0] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <HeartPulse className="h-5 w-5 text-[#1A73E8]" />
                <h2 className="text-base font-bold text-[#202124]">
                  PACU Recovery &bull; Puncture Bedrest &amp; Aldrete Surveillance
                </h2>
              </div>
              <p className="text-xs text-[#5F6368] mt-0.5">
                Monitoring {currentPatient.patientName} &bull; Access: {currentPatient.pacuRecovery.accessSite} &bull; Method:{" "}
                {currentPatient.pacuRecovery.hemostasisMethod}
              </p>
            </div>

            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E8F0FE] text-[#1A73E8] border border-[#D2E3FC]">
                Mandatory Flat Bedrest: {currentPatient.pacuRecovery.bedrestDueHours} Hours
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: Hematoma Checks Log */}
            <div className="p-4 rounded-xl border border-[#DADCE0] bg-[#F8F9FA] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#202124]">
                  Puncture Site Hematoma &amp; Distal Pulse Checks (q15m)
                </span>
                <button
                  onClick={() =>
                    recordHematomaCheck(currentPatient.id, "DRY", "STRONG", "Sister Incharge")
                  }
                  className="rounded-lg bg-[#137333] text-white px-3 py-1 text-xs font-semibold hover:bg-[#0D5223]"
                >
                  + Log Clean Check (q15m)
                </button>
              </div>

              <div className="space-y-2 max-h-48 overflow-y-auto">
                {currentPatient.pacuRecovery.hematomaChecks.map((chk, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-white border border-[#DADCE0] text-xs flex items-center justify-between"
                  >
                    <div>
                      <span className="font-bold text-[#202124]">Check #{idx + 1} ({chk.intervalMin}m post-op)</span>
                      <p className="text-[#5F6368] text-[11px]">By: {chk.checkedBy}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold text-[#137333]">{chk.siteStatus} SITE</span>
                      <p className="text-[#1A73E8] text-[11px]">Distal Pulse: {chk.pulseStatus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Modified Aldrete Score Calculator */}
            <div className="p-4 rounded-xl border border-[#DADCE0] bg-[#F8F9FA] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#202124]">
                  Modified Aldrete Step-Down Score (Target &ge; 9)
                </span>
                <span
                  className={`text-lg font-bold font-mono px-3 py-0.5 rounded-lg ${
                    currentPatient.pacuRecovery.aldreteScore.total >= 9
                      ? "bg-[#E6F4EA] text-[#137333]"
                      : "bg-[#FCE8E6] text-[#D93025]"
                  }`}
                >
                  Score: {currentPatient.pacuRecovery.aldreteScore.total} / 10
                </span>
              </div>

              <div className="space-y-2 text-xs">
                {[
                  { label: "Activity: Able to move 4 extremities voluntarily (2)", key: "activity" },
                  { label: "Respiration: Deep breaths and cough freely (2)", key: "respiration" },
                  { label: "Circulation: Blood Pressure within ±20% pre-op (2)", key: "circulation" },
                  { label: "Consciousness: Fully awake and oriented (2)", key: "consciousness" },
                  { label: "O2 Saturation: SpO2 > 92% on room air (2)", key: "o2Sat" },
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between p-2 rounded bg-white border border-[#DADCE0]">
                    <span className="text-[#3C4043]">{item.label}</span>
                    <select
                      value={(currentPatient.pacuRecovery.aldreteScore as any)[item.key]}
                      onChange={(e) =>
                        updateAldreteScores(currentPatient.id, { [item.key]: parseInt(e.target.value) })
                      }
                      className="rounded border border-[#DADCE0] p-1 text-xs font-bold"
                    >
                      <option value="2">2 (Normal)</option>
                      <option value="1">1 (Impaired)</option>
                      <option value="0">0 (Absent)</option>
                    </select>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  if (currentPatient.pacuRecovery.aldreteScore.total < 9) {
                    alert("Aldrete score is less than 9. Patient cannot be stepped down safely.");
                    return;
                  }
                  clearForDischarge(currentPatient.id, "Dr. Shashank Sharma (Professor)");
                  alert(`${currentPatient.patientName} has passed Aldrete criteria and is cleared for ward step-down!`);
                }}
                className="w-full py-2.5 rounded-xl bg-[#137333] hover:bg-[#0D5223] text-white font-bold text-xs shadow-xs transition"
              >
                Approve Aldrete Clearance &bull; Transfer to Inpatient Ward
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* STAT EMERGENCY PREEMPTION MODAL                                           */}
      {/* ========================================================================= */}
      {emergencyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white border border-[#DADCE0] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95">
            <div className="bg-[#D93025] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 fill-white" />
                <h3 className="font-bold text-sm uppercase tracking-wide">
                  ONE-CLICK STAT EMERGENCY ACTIVATION (CODE ANGIO)
                </h3>
              </div>
              <button
                onClick={() => setEmergencyModalOpen(false)}
                className="text-white hover:text-white/80"
              >
                &times;
              </button>
            </div>

            <div className="p-5 space-y-3 text-xs">
              <p className="text-[#5F6368]">
                This will immediately preempt elective scheduling in the selected angiosuite, shift downstream cases
                by +75 minutes, and broadcast urgent SMS/pager alerts to the on-call interventional team.
              </p>

              <div>
                <label className="block font-semibold text-[#3C4043] mb-1">Patient Name</label>
                <input
                  type="text"
                  value={statPatientName}
                  onChange={(e) => setStatPatientName(e.target.value)}
                  className="w-full rounded-xl border border-[#DADCE0] p-2 text-xs font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold text-[#3C4043] mb-1">CR Number</label>
                  <input
                    type="text"
                    value={statCrNo}
                    onChange={(e) => setStatCrNo(e.target.value)}
                    className="w-full rounded-xl border border-[#DADCE0] p-2 text-xs font-mono"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-[#3C4043] mb-1">Age</label>
                  <input
                    type="number"
                    value={statAge}
                    onChange={(e) => setStatAge(parseInt(e.target.value))}
                    className="w-full rounded-xl border border-[#DADCE0] p-2 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#3C4043] mb-1">Clinical Indication &bull; Emergent Diagnosis</label>
                <input
                  type="text"
                  value={statDiagnosis}
                  onChange={(e) => setStatDiagnosis(e.target.value)}
                  className="w-full rounded-xl border border-[#DADCE0] p-2 text-xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#3C4043] mb-1">Emergency Procedure</label>
                <input
                  type="text"
                  value={statProcedure}
                  onChange={(e) => setStatProcedure(e.target.value)}
                  className="w-full rounded-xl border border-[#DADCE0] p-2 text-xs text-[#1A73E8] font-bold"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#3C4043] mb-1">Target Angiosuite</label>
                <select
                  value={statRoom}
                  onChange={(e) => setStatRoom(e.target.value)}
                  className="w-full rounded-xl border border-[#DADCE0] p-2 text-xs font-bold text-[#202124]"
                >
                  <option value="Cath Lab 1 (Philips Azurion Biplane)">Cath Lab 1 (Philips Azurion Biplane)</option>
                  <option value="Cath Lab 2 (GE Innova IGS)">Cath Lab 2 (GE Innova IGS)</option>
                </select>
              </div>

              <div className="p-3 bg-[#FEF7E0] border border-[#FEEFC3] rounded-xl text-[#E37400] font-semibold">
                Cascade Ripple: Elective cases in {statRoom} will automatically enter "Bumped Standby" mode.
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  onClick={() => setEmergencyModalOpen(false)}
                  className="rounded-xl border border-[#DADCE0] px-4 py-2 text-xs font-semibold text-[#5F6368]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleExecuteEmergencyBumping}
                  className="rounded-xl bg-[#D93025] hover:bg-[#B31412] text-white px-5 py-2 text-xs font-bold shadow-md transition"
                >
                  ACTIVATE STAT EMERGENCY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* EMERGENCY CLINICAL OVERRIDE MODAL                                         */}
      {/* ========================================================================= */}
      {overrideModalPatientId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="w-full max-w-md rounded-2xl bg-white border border-[#DADCE0] shadow-2xl p-5 space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center gap-2 border-b border-[#DADCE0] pb-3">
              <AlertTriangle className="h-5 w-5 text-[#D93025]" />
              <h3 className="font-bold text-sm text-[#202124]">
                Consultant Emergency Clinical Override
              </h3>
            </div>

            <p className="text-xs text-[#5F6368]">
              Authorizes an emergency override of unmet laboratory or fasting thresholds under Section 12 Medico-Legal
              Guidelines for Imminent Life/Limb Threat.
            </p>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-[#3C4043] mb-1">Authorizing Consultant</label>
                <select
                  value={overrideConsultant}
                  onChange={(e) => setOverrideConsultant(e.target.value)}
                  className="w-full rounded-xl border border-[#DADCE0] p-2 text-xs font-bold text-[#202124]"
                >
                  <option value="Dr. Meenu Bagarhatta (Sr. Prof & Head)">Dr. Meenu Bagarhatta (Sr. Prof &amp; Head)</option>
                  <option value="Dr. Shashank Sharma (Professor)">Dr. Shashank Sharma (Professor)</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-[#3C4043] mb-1">Clinical Override Justification</label>
                <textarea
                  rows={3}
                  value={overrideReason}
                  onChange={(e) => setOverrideReason(e.target.value)}
                  placeholder="e.g. Active torrential hemorrhage; benefits of immediate embolization outweigh coagulopathy risks. 2 units PRBC running."
                  className="w-full rounded-xl border border-[#DADCE0] p-2 text-xs"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  onClick={() => setOverrideModalPatientId(null)}
                  className="rounded-xl border border-[#DADCE0] px-4 py-2 text-xs font-semibold text-[#5F6368]"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (!overrideReason.trim()) {
                      alert("Please specify the clinical override justification.");
                      return;
                    }
                    authorizeEmergencyOverride(overrideModalPatientId, overrideConsultant, overrideReason);
                    setOverrideModalPatientId(null);
                    setOverrideReason("");
                    alert("Emergency clinical override authorized and logged to immutable audit trail.");
                  }}
                  className="rounded-xl bg-[#D93025] hover:bg-[#B31412] text-white px-5 py-2 text-xs font-bold shadow-md transition"
                >
                  Sign &amp; Authorize Override
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
