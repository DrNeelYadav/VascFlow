"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
  useVasculeStore,
} from "@vascule/ui-kit";
import {
  Activity,
  Heart,
  Gauge,
  Syringe,
  Radio,
  Sliders,
  Play,
  Pause,
  RefreshCw,
  AlertCircle,
  ShieldCheck,
  Zap,
  Wifi,
  WifiOff,
} from "lucide-react";
import { usePatientQuery } from "./usePatientQuery";
import { useTelemetrySocket } from "./useTelemetrySocket";

export interface HemodynamicMetrics {
  systolic: number;
  diastolic: number;
  map: number;
  source: string;
  heartRate: number;
  rhythmStatus: string;
  prIntervalMs: number;
  qtcIntervalMs: number;
  spo2Percent: number;
  etco2MmHg: number;
  respiratoryRate: number;
  actSeconds: number;
  actTargetMin: number;
  actTargetMax: number;
  baselineActSeconds: number;
  lastHeparinDose: string;
}

export interface RadiationDosimetryMetrics {
  airKermaMgy: number;
  airKermaLimitMgy: number;
  dapGyCm2: number;
  fluoroTimeMinutes: number;
  fluoroTimeSeconds: number;
  cArmAngleLao: number;
  cArmAngleCra: number;
  sidCm: number;
  leadDrapeEngaged: boolean;
}

export interface ContrastTrackerMetrics {
  agentName: string;
  injectedMl: number;
  macdThresholdMl: number;
  patientEgfr: number;
}

export interface VitalsDashboardProps {
  patientId?: string;
  patientName?: string;
  mrn?: string;
  procedureName?: string;
  initialHemodynamics?: Partial<HemodynamicMetrics>;
  initialRadiation?: Partial<RadiationDosimetryMetrics>;
  initialContrast?: Partial<ContrastTrackerMetrics>;
  wsUrl?: string;
  enableLiveWebSocket?: boolean;
  className?: string;
}

const defaultHemodynamics: HemodynamicMetrics = {
  systolic: 118,
  diastolic: 76,
  map: 90,
  source: "Right Radial A-Line",
  heartRate: 72,
  rhythmStatus: "Normal Sinus Rhythm",
  prIntervalMs: 156,
  qtcIntervalMs: 412,
  spo2Percent: 99,
  etco2MmHg: 36,
  respiratoryRate: 14,
  actSeconds: 294,
  actTargetMin: 250,
  actTargetMax: 300,
  baselineActSeconds: 128,
  lastHeparinDose: "Heparin 5,000 IU (11:42)",
};

const defaultRadiation: RadiationDosimetryMetrics = {
  airKermaMgy: 342,
  airKermaLimitMgy: 2000,
  dapGyCm2: 18.6,
  fluoroTimeMinutes: 14,
  fluoroTimeSeconds: 38,
  cArmAngleLao: 30,
  cArmAngleCra: 15,
  sidCm: 105,
  leadDrapeEngaged: true,
};

const defaultContrast: ContrastTrackerMetrics = {
  agentName: "Isovue 370 (Iopamidol)",
  injectedMl: 48,
  macdThresholdMl: 160,
  patientEgfr: 68,
};

export function VitalsDashboard({
  patientId,
  patientName = "VALENTINE, MARCUS R.",
  mrn = "#IR-2026-8841",
  procedureName = "Bifurcated EVAR // DrySeal 14 Fr",
  initialHemodynamics,
  initialRadiation,
  initialContrast,
  wsUrl,
  enableLiveWebSocket = true,
  className = "",
}: VitalsDashboardProps) {
  // Global Zustand client store integration
  const storePatientId = useVasculeStore((state) => state.activePatientId);
  const effectivePatientId = patientId || storePatientId || "IR-2026-8841";

  // Server state caching via TanStack Query
  const { data: patientRecord } = usePatientQuery(effectivePatientId);

  const [isLiveStreaming, setIsLiveStreaming] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<"all" | "telemetry" | "dosimetry">("all");

  // Real-time bidirectional WebSocket connection to Golang microservice
  const {
    telemetry: liveTelemetry,
    connectionStatus,
    latencyMs,
    messageCount,
    reconnect,
  } = useTelemetrySocket({
    patientId: effectivePatientId,
    enabled: isLiveStreaming && enableLiveWebSocket,
    wsUrl,
  });

  const [hemo, setHemo] = useState<HemodynamicMetrics>({
    ...defaultHemodynamics,
    ...initialHemodynamics,
  });
  const [radiation, setRadiation] = useState<RadiationDosimetryMetrics>({
    ...defaultRadiation,
    ...initialRadiation,
  });
  const [contrast, setContrast] = useState<ContrastTrackerMetrics>({
    ...defaultContrast,
    ...initialContrast,
  });
  const [tick, setTick] = useState<number>(0);

  // Synchronize clinical baseline from TanStack Query patient record
  useEffect(() => {
    if (!patientRecord) return;
    setContrast((prev) => ({
      ...prev,
      agentName: patientRecord.contrastAgent || prev.agentName,
      macdThresholdMl: patientRecord.macdThresholdMl || prev.macdThresholdMl,
      patientEgfr: patientRecord.egfr || prev.patientEgfr,
    }));
    setHemo((prev) => ({
      ...prev,
      baselineActSeconds: patientRecord.baselineActSeconds || prev.baselineActSeconds,
    }));
  }, [patientRecord]);

  // Synchronize incoming real-time telemetry frames from WebSocket
  useEffect(() => {
    if (!liveTelemetry) return;
    setHemo((prev) => ({
      ...prev,
      systolic: liveTelemetry.systolic,
      diastolic: liveTelemetry.diastolic,
      map: liveTelemetry.map,
      heartRate: liveTelemetry.heartRate,
      spo2Percent: liveTelemetry.spo2Percent,
      etco2MmHg: liveTelemetry.etco2MmHg,
      respiratoryRate: liveTelemetry.respiratoryRate,
      actSeconds: liveTelemetry.actSeconds || prev.actSeconds,
      rhythmStatus: liveTelemetry.rhythmStatus || prev.rhythmStatus,
      source: liveTelemetry.source || prev.source,
    }));
    setRadiation((prev) => ({
      ...prev,
      airKermaMgy: liveTelemetry.airKermaMgy || prev.airKermaMgy,
      dapGyCm2: liveTelemetry.dapGyCm2 || prev.dapGyCm2,
      fluoroTimeMinutes: liveTelemetry.fluoroTimeMinutes ?? prev.fluoroTimeMinutes,
      fluoroTimeSeconds: liveTelemetry.fluoroTimeSeconds ?? prev.fluoroTimeSeconds,
    }));
  }, [liveTelemetry]);

  // Local fallback simulation when streaming is active but WebSocket is disconnected
  useEffect(() => {
    if (!isLiveStreaming || connectionStatus === "connected") return;
    const interval = setInterval(() => {
      setTick((t) => (t + 1) % 1000);
      setHemo((prev) => ({
        ...prev,
        heartRate: 72 + ((tick % 3 === 0) ? (Math.random() > 0.5 ? 1 : -1) : 0),
        map: 90 + ((tick % 5 === 0) ? (Math.random() > 0.5 ? 1 : 0) : 0),
      }));
    }, 1500);
    return () => clearInterval(interval);
  }, [isLiveStreaming, connectionStatus, tick]);

  const effectivePatientName = patientRecord?.name || patientName;
  const effectiveMrn = patientRecord?.mrn || mrn;
  const effectiveProcedureName = patientRecord?.procedureName || procedureName;

  const kermaPercentage = Math.min(
    100,
    Math.round((radiation.airKermaMgy / radiation.airKermaLimitMgy) * 1000) / 10
  );
  const contrastPercentage = Math.min(
    100,
    Math.round((contrast.injectedMl / contrast.macdThresholdMl) * 1000) / 10
  );

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Telemetry Control Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-[#090A0F] border border-[#1E293B] rounded-xl p-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              {isLiveStreaming && (
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                    connectionStatus === "connected" ? "bg-[#10B981]" : "bg-[#3B82F6]"
                  } opacity-75`}
                />
              )}
              <span
                className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                  !isLiveStreaming
                    ? "bg-[#EF4444]"
                    : connectionStatus === "connected"
                    ? "bg-[#10B981]"
                    : "bg-[#3B82F6]"
                }`}
              />
            </span>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              {isLiveStreaming ? "Telemetry Active (100 Hz)" : "Telemetry Paused"}
            </span>
          </div>

          {/* Real-time Connection State Badge */}
          <span
            className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-mono rounded-full border ${
              connectionStatus === "connected"
                ? "bg-[#10B981]/10 text-[#10B981] border-[#10B981]/30"
                : connectionStatus === "connecting"
                ? "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/30"
                : "bg-[#64748B]/10 text-[#94A3B8] border-[#64748B]/30"
            }`}
          >
            {connectionStatus === "connected" ? (
              <>
                <Wifi className="w-2.5 h-2.5 text-[#10B981]" />
                WS LIVE ({latencyMs}ms)
              </>
            ) : connectionStatus === "connecting" ? (
              <>
                <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B] animate-ping" />
                CONNECTING...
              </>
            ) : (
              <>
                <WifiOff className="w-2.5 h-2.5 text-[#94A3B8]" />
                LOCAL REPLICATION
              </>
            )}
          </span>

          {connectionStatus !== "connected" && enableLiveWebSocket && (
            <button
              onClick={() => reconnect()}
              className="text-[10px] font-mono text-[#38BDF8] hover:underline flex items-center gap-1"
            >
              <RefreshCw className="w-2.5 h-2.5" />
              Reconnect WS
            </button>
          )}

          <span className="text-[#334155]">|</span>
          <div className="text-xs font-mono text-[#94A3B8] hidden sm:block">
            Patient: <span className="text-white font-medium">{effectivePatientName}</span> ({effectiveMrn})
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Section Filter Toggles */}
          <div className="inline-flex rounded-lg border border-[#1E293B] bg-[#000000] p-0.5">
            <button
              onClick={() => setActiveSection("all")}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                activeSection === "all"
                  ? "bg-[#2563EB] text-white"
                  : "text-[#94A3B8] hover:text-white"
              }`}
            >
              All Metrics
            </button>
            <button
              onClick={() => setActiveSection("telemetry")}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                activeSection === "telemetry"
                  ? "bg-[#2563EB] text-white"
                  : "text-[#94A3B8] hover:text-white"
              }`}
            >
              Hemodynamics
            </button>
            <button
              onClick={() => setActiveSection("dosimetry")}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                activeSection === "dosimetry"
                  ? "bg-[#2563EB] text-white"
                  : "text-[#94A3B8] hover:text-white"
              }`}
            >
              Dosimetry
            </button>
          </div>

          <Button
            variant={isLiveStreaming ? "oled" : "cobalt"}
            size="sm"
            onClick={() => setIsLiveStreaming(!isLiveStreaming)}
            className="gap-1.5 text-xs font-mono"
          >
            {isLiveStreaming ? (
              <>
                <Pause className="w-3.5 h-3.5 text-[#F59E0B]" />
                Pause Stream
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-white" />
                Resume Stream
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Primary Hemodynamic Telemetry Row */}
      {(activeSection === "all" || activeSection === "telemetry") && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Metric 1: Invasive Blood Pressure */}
          <Card variant="oled" className="bg-[#090A0F] border-[#1E293B] p-4 space-y-3">
            <CardHeader className="p-0 space-y-0 flex flex-row items-center justify-between">
              <span className="font-mono text-xs text-[#94A3B8] flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#EF4444]" />
                ART. PRESSURE (ABP)
              </span>
              <span className="text-[10px] font-mono text-[#10B981] bg-[#064E3B]/40 border border-[#10B981]/30 px-1.5 py-0.5 rounded">
                STABLE
              </span>
            </CardHeader>
            <CardContent className="p-0 space-y-2">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold font-mono tracking-tight text-white">
                    {hemo.systolic}/{hemo.diastolic}
                  </span>
                  <span className="text-xs font-mono text-[#94A3B8]">mmHg</span>
                </div>
                <p className="text-[11px] font-mono text-[#60A5FA] mt-0.5">
                  MAP {hemo.map} mmHg
                </p>
              </div>

              {/* Real-time ABP Waveform SVG */}
              <div className="h-10 w-full bg-[#000000] rounded border border-[#1E293B] overflow-hidden flex items-center px-1">
                <svg viewBox="0 0 160 30" className="w-full h-8 stroke-[#EF4444] fill-none">
                  <path
                    d="M 0 15 Q 10 15 15 13 T 30 15 T 45 4 T 50 26 T 55 12 T 65 15 T 80 15 T 95 13 T 110 15 T 125 4 T 130 26 T 135 12 T 145 15 T 160 15"
                    strokeWidth="1.75"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="text-[10px] font-mono text-[#94A3B8] flex justify-between pt-1">
                <span>Source: {hemo.source}</span>
                <span>Dampening: Optimal</span>
              </div>
            </CardContent>
          </Card>

          {/* Metric 2: Cardiac Telemetry & Micro-ECG */}
          <Card variant="oled" className="bg-[#090A0F] border-[#1E293B] p-4 space-y-3">
            <CardHeader className="p-0 space-y-0 flex flex-row items-center justify-between">
              <span className="font-mono text-xs text-[#94A3B8] flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#10B981]" />
                CARDIAC RHYTHM
              </span>
              <span className="text-[10px] font-mono text-[#10B981] bg-[#064E3B]/40 border border-[#10B981]/30 px-1.5 py-0.5 rounded">
                SINUS
              </span>
            </CardHeader>
            <CardContent className="p-0 space-y-2">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold font-mono tracking-tight text-white">
                    {hemo.heartRate}
                  </span>
                  <span className="text-xs font-mono text-[#94A3B8]">BPM</span>
                </div>
                <p className="text-[11px] font-mono text-[#10B981] mt-0.5">
                  {hemo.rhythmStatus}
                </p>
              </div>

              {/* Micro-ECG Rhythm Strip SVG */}
              <div className="h-10 w-full bg-[#000000] rounded border border-[#1E293B] overflow-hidden flex items-center px-1">
                <svg viewBox="0 0 160 30" className="w-full h-8 stroke-[#10B981] fill-none">
                  <path
                    d="M 0 16 L 20 16 L 25 12 L 30 16 L 40 16 L 44 26 L 48 3 L 52 22 L 56 16 L 70 16 L 75 14 L 85 16 L 100 16 L 105 12 L 110 16 L 120 16 L 124 26 L 128 3 L 132 22 L 136 16 L 150 16 L 160 16"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="text-[10px] font-mono text-[#94A3B8] flex justify-between pt-1">
                <span>PR: {hemo.prIntervalMs} ms</span>
                <span>QTc: {hemo.qtcIntervalMs} ms</span>
              </div>
            </CardContent>
          </Card>

          {/* Metric 3: Continuous Pulse Oximetry & Plethysmograph */}
          <Card variant="oled" className="bg-[#090A0F] border-[#1E293B] p-4 space-y-3">
            <CardHeader className="p-0 space-y-0 flex flex-row items-center justify-between">
              <span className="font-mono text-xs text-[#94A3B8] flex items-center gap-1.5">
                <Gauge className="w-3.5 h-3.5 text-[#38BDF8]" />
                PULSE OXIMETRY
              </span>
              <span className="text-[10px] font-mono text-[#38BDF8] bg-[#0C4A6E]/40 border border-[#38BDF8]/30 px-1.5 py-0.5 rounded">
                OPTIMAL
              </span>
            </CardHeader>
            <CardContent className="p-0 space-y-2">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold font-mono tracking-tight text-white">
                    {hemo.spo2Percent}
                  </span>
                  <span className="text-xs font-mono text-[#94A3B8]">%</span>
                </div>
                <p className="text-[11px] font-mono text-[#94A3B8] mt-0.5">
                  2L O2 NC • PI 4.2
                </p>
              </div>

              {/* Plethysmograph Curve SVG */}
              <div className="h-10 w-full bg-[#000000] rounded border border-[#1E293B] overflow-hidden flex items-center px-1">
                <svg viewBox="0 0 160 30" className="w-full h-8 stroke-[#38BDF8] fill-none">
                  <path
                    d="M 0 20 Q 20 5 40 20 T 80 20 T 120 20 T 160 20"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <div className="text-[10px] font-mono text-[#94A3B8] flex justify-between pt-1">
                <span>EtCO2: {hemo.etco2MmHg} mmHg</span>
                <span>Resp: {hemo.respiratoryRate}/min</span>
              </div>
            </CardContent>
          </Card>

          {/* Metric 4: Intra-procedural Coagulation Kinetics (ACT) */}
          <Card variant="oled" className="bg-[#090A0F] border-[#1E293B] p-4 space-y-3">
            <CardHeader className="p-0 space-y-0 flex flex-row items-center justify-between">
              <span className="font-mono text-xs text-[#94A3B8] flex items-center gap-1.5">
                <Syringe className="w-3.5 h-3.5 text-[#F59E0B]" />
                COAGULATION (ACT)
              </span>
              <span className="text-[10px] font-mono text-[#F59E0B] bg-[#78350F]/40 border border-[#F59E0B]/30 px-1.5 py-0.5 rounded">
                THERAPEUTIC
              </span>
            </CardHeader>
            <CardContent className="p-0 space-y-2">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold font-mono tracking-tight text-white">
                    {hemo.actSeconds}
                  </span>
                  <span className="text-xs font-mono text-[#94A3B8]">s</span>
                </div>
                <p className="text-[11px] font-mono text-[#F59E0B] mt-0.5">
                  Target: {hemo.actTargetMin}–{hemo.actTargetMax}s
                </p>
              </div>

              {/* Therapeutic Window Gauge */}
              <div className="space-y-1">
                <div className="w-full bg-[#111827] h-2 rounded-full overflow-hidden flex">
                  <div className="w-1/3 bg-[#EF4444]/30" title="Subtherapeutic (<250s)" />
                  <div className="w-1/3 bg-[#10B981] relative" title="Therapeutic (250-300s)">
                    <div className="absolute top-0 bottom-0 left-[85%] w-1 bg-white shadow-xs" />
                  </div>
                  <div className="w-1/3 bg-[#EF4444]/30" title="Supratherapeutic (>300s)" />
                </div>
                <div className="text-[10px] font-mono text-[#94A3B8] flex justify-between">
                  <span>Baseline: {hemo.baselineActSeconds}s</span>
                  <span>Target: 250-300s</span>
                </div>
              </div>

              <div className="text-[10px] font-mono text-[#94A3B8] pt-1">
                Last Dose: {hemo.lastHeparinDose}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Fluoroscopy Radiation Dosimetry & Nephrotoxic Contrast Exposure */}
      {(activeSection === "all" || activeSection === "dosimetry") && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Fluoroscopy & Radiation Dosimetry */}
          <Card variant="oled" className="bg-[#090A0F] border-[#1E293B] p-5 space-y-4">
            <CardHeader className="p-0 space-y-1">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-semibold text-white flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#2563EB]" />
                  Cumulative Air Kerma
                </CardTitle>
                <span className="text-xs font-mono text-[#10B981] bg-[#064E3B]/40 border border-[#10B981]/30 px-2 py-0.5 rounded">
                  {kermaPercentage}% OF LIMIT
                </span>
              </div>
              <CardDescription className="text-xs text-[#94A3B8]">
                Real-time C-Arm exposure monitoring
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0 space-y-3">
              <div className="space-y-1.5">
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-bold font-mono text-white">
                    {radiation.airKermaMgy}
                  </span>
                  <span className="text-xs font-mono text-[#94A3B8]">
                    mGy / {radiation.airKermaLimitMgy} mGy limit
                  </span>
                </div>
                <div className="w-full bg-[#111827] h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#2563EB] h-full rounded-full transition-all duration-300"
                    style={{ width: `${kermaPercentage}%` }}
                  />
                </div>
              </div>

              <div className="text-xs font-mono text-[#94A3B8] space-y-1.5 pt-2 border-t border-[#1E293B]">
                <div className="flex justify-between">
                  <span>DAP (Dose Area Product):</span>
                  <span className="text-white font-medium">{radiation.dapGyCm2} Gy·cm²</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Fluoro Time:</span>
                  <span className="text-white font-medium">
                    {radiation.fluoroTimeMinutes}m {radiation.fluoroTimeSeconds}s
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Nephrotoxic Contrast Exposure Tracker */}
          <Card variant="oled" className="bg-[#090A0F] border-[#1E293B] p-4 space-y-3">
            <CardHeader className="p-0 space-y-0 flex flex-row items-center justify-between">
              <span className="font-mono text-xs text-[#94A3B8] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
                CONTRAST EXPOSURE
              </span>
              <span className="text-[10px] font-mono text-[#10B981] bg-[#064E3B]/40 border border-[#10B981]/30 px-1.5 py-0.5 rounded">
                CONTRAST: {contrast.injectedMl}ml
              </span>
            </CardHeader>

            <CardContent className="p-0 space-y-2.5">
              <div className="space-y-1">
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-bold font-mono tracking-tight text-white">
                    {contrast.injectedMl}
                  </span>
                  <span className="text-xs font-mono text-[#94A3B8]">
                    / {contrast.macdThresholdMl}ml MACD
                  </span>
                </div>
                <div className="w-full bg-[#111827] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#38BDF8] h-full rounded-full transition-all duration-300"
                    style={{ width: `${contrastPercentage}%` }}
                  />
                </div>
              </div>

              <div className="text-[11px] font-mono text-[#94A3B8] space-y-1 pt-2 border-t border-[#1E293B]">
                <div className="flex justify-between">
                  <span>Agent:</span>
                  <span className="text-white font-medium">{contrast.agentName}</span>
                </div>
                <div className="flex justify-between">
                  <span>eGFR:</span>
                  <span className="text-white font-medium">
                    {contrast.patientEgfr} mL/min
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Live C-Arm Geometry & Radiation Protection */}
          <Card variant="oled" className="bg-[#090A0F] border-[#1E293B] p-5 space-y-4">
            <CardHeader className="p-0 space-y-1">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-semibold text-white flex items-center gap-2">
                  <Radio className="w-4 h-4 text-[#60A5FA]" />
                  C-Arm Geometry
                </CardTitle>
                <span className="text-xs font-mono text-[#60A5FA] bg-[#1E3A8A]/30 border border-[#2563EB]/30 px-2 py-0.5 rounded">
                  CALIBRATED
                </span>
              </div>
              <CardDescription className="text-xs text-[#94A3B8]">
                Angiographic gantry positioning
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0 space-y-2 font-mono text-xs">
              <div className="flex justify-between bg-[#000000] p-2 rounded border border-[#1E293B]">
                <span className="text-[#94A3B8]">Projection Angle:</span>
                <span className="text-white font-bold">
                  LAO {radiation.cArmAngleLao}° / CRA {radiation.cArmAngleCra}°
                </span>
              </div>
              <div className="flex justify-between bg-[#000000] p-2 rounded border border-[#1E293B]">
                <span className="text-[#94A3B8]">Source-to-Image (SID):</span>
                <span className="text-white font-bold">{radiation.sidCm} cm</span>
              </div>
              <div className="flex justify-between bg-[#000000] p-2 rounded border border-[#1E293B]">
                <span className="text-[#94A3B8]">Lead Drape Status:</span>
                <span className="text-[#10B981] font-bold">
                  {radiation.leadDrapeEngaged ? "ENGAGED" : "DISENGAGED"}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

export default VitalsDashboard;
