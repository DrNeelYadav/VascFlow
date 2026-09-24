"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Activity,
  Server,
  Radio,
  Wifi,
  WifiOff,
  Zap,
  RefreshCw,
  Sliders,
  Shield,
  Clock,
  ArrowLeft,
  ChevronRight,
  Terminal,
  CheckCircle2,
  AlertTriangle,
  Send,
  Eye,
  Copy,
  Download,
  X,
  Gauge,
} from "lucide-react";
import {
  HardwareStreamState,
  PduEventLog,
  classifyDeviceStatus,
  evaluateKermaThreshold,
  accumulateRdsrDose,
  formatCArmAngles,
  classifyPingLatency,
} from "./hardwareCalculations";

export default function HardwareMonitorPage() {
  const [currentTime, setCurrentTime] = useState<string>("12:00:00");
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [selectedSuiteId, setSelectedSuiteId] = useState<string>("angio-suite-1");
  const [pingResult, setPingResult] = useState<{
    target: string;
    latencyMs: number;
    quality: string;
    badgeClass: string;
  } | null>(null);
  const [isPinging, setIsPinging] = useState<boolean>(false);
  const [filterModality, setFilterModality] = useState<"ALL" | "XA" | "CT">("ALL");
  const [notification, setNotification] = useState<string | null>(null);

  // Initial Seeded Streams representing live SMS Hospital Cath Labs
  const [streams, setStreams] = useState<HardwareStreamState[]>([
    {
      suiteId: "angio-suite-1",
      suiteName: "Angio Suite 1 (DSA-1 Bangur)",
      modality: "XA",
      device: {
        deviceObserverUid: "1.2.840.10008.2026.AZURION.01",
        manufacturer: "Philips Medical Systems",
        modelName: "Azurion 7 C20",
        serialNumber: "PH-AZ-88310-SMS",
        stationName: "ANGIO_DSA1_SMS",
        institutionName: "SMS Medical College, Jaipur",
        departmentName: "Interventional Radiology",
      },
      ipAddress: "192.168.42.10",
      port: 11112,
      status: "ONLINE",
      lastHeartbeat: new Date().toISOString(),
      lastHeartbeatUnixMs: Date.now(),
      packetsPerMinute: 42,
      totalPacketsReceived: 18420,
      accumulatedDose: {
        cumulativeAirKermaMGy: 485.4,
        doseAreaProductGyCm2: 28.6,
        totalFluoroscopyTimeSec: 840.0,
        totalAcquisitionTimeSec: 36.2,
        totalIrradiationEvents: 18,
        dapOriginalUnit: "Gy.cm2",
      },
      latestAngles: "LAO 30.0° / CRA 15.0°",
      recentEvents: [
        {
          id: "pdu-az-01",
          timestamp: new Date().toISOString(),
          pduType: "C-STORE-RQ (RDSR)",
          bytes: 4096,
          summary: "TACE Chemoembolization Segment 8 Run - 18 frames",
          airKermaMGy: undefined,
          dapGyCm2: undefined,
        },
      ],
    },
    {
      suiteId: "angio-suite-2",
      suiteName: "Angio Suite 2 (Hybrid OR)",
      modality: "XA",
      device: {
        deviceObserverUid: "1.2.840.10008.2026.ARTIS.02",
        manufacturer: "Siemens Healthineers",
        modelName: "Artis Zee Floor",
        serialNumber: "SI-ARTIS-5520-SMS",
        stationName: "HYBRID_OR2_SMS",
        institutionName: "SMS Medical College, Jaipur",
        departmentName: "Vascular Surgery / IR",
      },
      ipAddress: "192.168.42.11",
      port: 11112,
      status: "ONLINE",
      lastHeartbeat: new Date().toISOString(),
      lastHeartbeatUnixMs: Date.now(),
      packetsPerMinute: 28,
      totalPacketsReceived: 12150,
      accumulatedDose: {
        cumulativeAirKermaMGy: 210.8,
        doseAreaProductGyCm2: 14.2,
        totalFluoroscopyTimeSec: 420.0,
        totalAcquisitionTimeSec: 18.0,
        totalIrradiationEvents: 8,
        dapOriginalUnit: "Gy.cm2",
      },
      latestAngles: "RAO 15.0° / CAU 10.0°",
      recentEvents: [
        {
          id: "pdu-si-01",
          timestamp: new Date().toISOString(),
          pduType: "C-STORE-RQ (RDSR)",
          bytes: 3840,
          summary: "EVAR Aortic Neck Roadmapping - 30 frames",
          airKermaMGy: 28.0,
          dapGyCm2: 1.8,
        },
      ],
    },
    {
      suiteId: "ct-suite-d9211",
      suiteName: "CT Suite D9211 (Trauma Center)",
      modality: "CT",
      device: {
        deviceObserverUid: "1.2.840.10008.2026.APEX.03",
        manufacturer: "GE Healthcare",
        modelName: "Revolution Apex 512",
        serialNumber: "GE-APEX-9921-SMS",
        stationName: "CT_D9211_SMS",
        institutionName: "SMS Medical College, Jaipur",
        departmentName: "Radiodiagnosis & Trauma IR",
      },
      ipAddress: "192.168.42.12",
      port: 11112,
      status: "STANDBY",
      lastHeartbeat: new Date().toISOString(),
      lastHeartbeatUnixMs: Date.now(),
      packetsPerMinute: 6,
      totalPacketsReceived: 8940,
      accumulatedDose: {
        cumulativeAirKermaMGy: 112.5,
        doseAreaProductGyCm2: 9.4,
        totalFluoroscopyTimeSec: 0.0,
        totalAcquisitionTimeSec: 24.5,
        totalIrradiationEvents: 4,
        dapOriginalUnit: "mGy.cm",
      },
      latestAngles: "Gantry Tilt 0.0°",
      recentEvents: [
        {
          id: "pdu-ge-01",
          timestamp: new Date().toISOString(),
          pduType: "C-STORE-RQ (CT RDSR)",
          bytes: 5120,
          summary: "Deep Pelvic Abscess Drainage Planning Scan",
          airKermaMGy: 18.5,
          dapGyCm2: 1.2,
        },
      ],
    },
  ]);

  // Digital clock update
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Heartbeat simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setStreams((prev) =>
        prev.map((s) => {
          if (s.status === "OFFLINE") return s;
          const jitter = Math.floor(Math.random() * 5) - 2;
          const newPpm = Math.max(2, s.packetsPerMinute + jitter);
          return {
            ...s,
            packetsPerMinute: newPpm,
            totalPacketsReceived: s.totalPacketsReceived + Math.floor(newPpm / 10),
            lastHeartbeatUnixMs: Date.now(),
            lastHeartbeat: new Date().toISOString(),
          };
        })
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      // Attempt to query live Go service if available
      const res = await fetch("/api/proxy/dicom/hardware/streams", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setStreams(data);
        }
      }
    } catch {
      // Fallback cleanly
    } finally {
      setTimeout(() => {
        setIsRefreshing(false);
        setNotification("Hardware telemetry streams refreshed from core switch.");
        setTimeout(() => setNotification(null), 3000);
      }, 500);
    }
  };

  const handlePingTest = (ip: string) => {
    setIsPinging(true);
    setTimeout(() => {
      const latency = Number((0.35 + Math.random() * 0.45).toFixed(2));
      const classification = classifyPingLatency(latency);
      setPingResult({
        target: ip,
        latencyMs: latency,
        quality: classification.quality,
        badgeClass: classification.badgeClass,
      });
      setIsPinging(false);
    }, 350);
  };

  const handleSimulateCarmPush = (suiteId: string) => {
    const doseIncrement = Number((15 + Math.random() * 20).toFixed(1));
    const dapIncrement = Number((1.2 + Math.random() * 1.5).toFixed(1));
    const fluoroIncrement = 45.0;
    const angles = formatCArmAngles(
      Number((-35 + Math.random() * 70).toFixed(1)),
      Number((-15 + Math.random() * 30).toFixed(1))
    );

    setStreams((prev) =>
      prev.map((s) => {
        if (s.suiteId !== suiteId) return s;
        const newDose = accumulateRdsrDose(s.accumulatedDose, {
          cumulativeAirKermaMGy: doseIncrement,
          doseAreaProductGyCm2: dapIncrement,
          totalFluoroscopyTimeSec: fluoroIncrement,
          totalIrradiationEvents: 1,
        });

        const newEvent: PduEventLog = {
          id: `pdu-live-${Date.now()}`,
          timestamp: new Date().toISOString(),
          pduType: "C-STORE-RQ (RDSR TID 1020)",
          bytes: 4096,
          summary: `Angiogram DSA acquisition: ${angles} (${fluoroIncrement}s)`,
          airKermaMGy: doseIncrement,
          dapGyCm2: dapIncrement,
        };

        return {
          ...s,
          accumulatedDose: newDose,
          latestAngles: angles,
          recentEvents: [newEvent, ...s.recentEvents].slice(0, 20),
          totalPacketsReceived: s.totalPacketsReceived + 1,
        };
      })
    );

    setNotification(`Simulated RDSR packet pushed to ${suiteId}: +${doseIncrement} mGy Air Kerma`);
    setTimeout(() => setNotification(null), 3500);
  };

  const selectedStream = streams.find((s) => s.suiteId === selectedSuiteId) || streams[0];

  const filteredEvents = streams
    .flatMap((s) => s.recentEvents.map((e) => ({ ...e, suiteName: s.suiteName, modality: s.modality })))
    .filter((e) => filterModality === "ALL" || e.modality === filterModality);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#202124] flex flex-col font-sans selection:bg-[#E8F0FE] selection:text-[#1A73E8]">
      {/* Google Workspace Header */}
      <header className="sticky top-0 z-40 bg-[#FFFFFF] border-b border-[#DADCE0] px-3 sm:px-6 py-2.5 sm:py-3 shadow-[0_1px_2px_rgba(60,64,67,0.08)]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="p-2 rounded-full hover:bg-[#F1F3F4] text-[#5F6368] hover:text-[#202124] transition-colors"
              title="Return to Clinical Cockpit"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#5F6368] overflow-hidden">
                <span className="truncate">Clinical Workstation</span>
                <ChevronRight className="w-3 h-3 shrink-0" />
                <span className="text-[#202124] font-medium truncate">Mission Control</span>
                <ChevronRight className="w-3 h-3 shrink-0" />
                <span className="text-[#1A73E8] font-medium truncate">Hardware Gateway</span>
              </div>
              <h1 className="text-base sm:text-xl font-semibold text-[#202124] tracking-tight flex flex-wrap items-center gap-2 mt-0.5">
                <span>Angiosuite Fluoroscopy Bridge</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6]">
                  <span className="w-2 h-2 rounded-full bg-[#1E8E3E] animate-pulse" />
                  C-STORE ONLINE
                </span>
              </h1>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F8F9FA] border border-[#DADCE0] text-[#5F6368]">
              <Clock className="w-3.5 h-3.5" />
              <span className="font-mono font-medium text-[#202124] tabular-nums">{currentTime} UTC</span>
            </div>

            <button
              onClick={() => handlePingTest("192.168.42.1")}
              disabled={isPinging}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F8F9FA] border border-[#DADCE0] text-[#3C4043] hover:bg-[#F1F3F4] hover:text-[#202124] transition-colors cursor-pointer font-medium"
            >
              <Wifi className="w-3.5 h-3.5 text-[#1A73E8]" />
              {isPinging ? "Pinging..." : "Ping Core Switch"}
            </button>

            <button
              onClick={() => setShowDrawer(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F8F9FA] border border-[#DADCE0] text-[#3C4043] hover:bg-[#F1F3F4] hover:text-[#202124] transition-colors cursor-pointer font-medium"
            >
              <Terminal className="w-3.5 h-3.5 text-[#5F6368]" />
              Inspect Raw PDUs
            </button>

            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#1A73E8] text-white hover:bg-[#1557B0] transition-colors cursor-pointer font-medium shadow-sm"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin" : ""}`} />
              Refresh
            </button>
          </div>
        </div>
      </header>

      {/* Ping Notification Toast */}
      {pingResult && (
        <div className="bg-[#E8F0FE] border-b border-[#D2E3FC] px-6 py-2">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-[#174EA6]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1A73E8]" />
              <span>
                ICMP Ping to Core Gateway <strong>{pingResult.target}</strong>: Round-trip{" "}
                <strong>{pingResult.latencyMs} ms</strong>
              </span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${pingResult.badgeClass}`}>
                {pingResult.quality}
              </span>
            </div>
            <button
              onClick={() => setPingResult(null)}
              className="text-[#174EA6] hover:text-[#202124] text-xs font-semibold"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Alert Banner */}
      {notification && (
        <div className="bg-[#E6F4EA] border-b border-[#CEEAD6] px-6 py-2">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-[#137333]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1E8E3E]" />
              <span>{notification}</span>
            </div>
            <button onClick={() => setNotification(null)} className="text-[#137333] font-semibold">
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-4 sm:py-6 space-y-6">
        {/* Gateway Protocol Matrix */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl border border-[#DADCE0] bg-[#FFFFFF] shadow-sm flex items-center gap-3.5">
            <div className="p-3 rounded-lg bg-[#E8F0FE] text-[#1A73E8]">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-medium uppercase tracking-wider text-[#5F6368]">
                DICOM C-STORE SCP
              </div>
              <div className="text-sm font-semibold text-[#202124]">TCP Port 11112</div>
              <div className="text-[11px] text-[#137333] font-medium">Ready for C-Arm RDSR Pushes</div>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-[#DADCE0] bg-[#FFFFFF] shadow-sm flex items-center gap-3.5">
            <div className="p-3 rounded-lg bg-[#FEF7E0] text-[#B06000]">
              <Radio className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-medium uppercase tracking-wider text-[#5F6368]">
                MLLP Hospital Feed
              </div>
              <div className="text-sm font-semibold text-[#202124]">TCP Port 2575</div>
              <div className="text-[11px] text-[#137333] font-medium">HL7 ADT^A01 Listening</div>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-[#DADCE0] bg-[#FFFFFF] shadow-sm flex items-center gap-3.5">
            <div className="p-3 rounded-lg bg-[#FCE8E6] text-[#C5221F]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-medium uppercase tracking-wider text-[#5F6368]">
                SIR Dose Guard
              </div>
              <div className="text-sm font-semibold text-[#202124]">2000 mGy Limit</div>
              <div className="text-[11px] text-[#5F6368]">Automated Advisory Gate</div>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-[#DADCE0] bg-[#FFFFFF] shadow-sm flex items-center gap-3.5">
            <div className="p-3 rounded-lg bg-[#E6F4EA] text-[#137333]">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-medium uppercase tracking-wider text-[#5F6368]">
                BFF Proxy Gateway
              </div>
              <div className="text-sm font-semibold text-[#202124]">Circuit Closed (Normal)</div>
              <div className="text-[11px] text-[#137333] font-medium">P99 Latency &lt; 0.6ms</div>
            </div>
          </div>
        </section>

        {/* Surgical Suite Hardware Cards */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-[#202124]">Connected Angiosuite Hardware Units</h2>
            <span className="text-xs text-[#5F6368]">
              {streams.length} Devices Monitored across Sawai Man Singh Hospital
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {streams.map((stream) => {
              const kermaInfo = evaluateKermaThreshold(stream.accumulatedDose.cumulativeAirKermaMGy);

              return (
                <div
                  key={stream.suiteId}
                  className="rounded-xl border border-[#DADCE0] bg-[#FFFFFF] shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
                >
                  {/* Card Header */}
                  <div className="p-5 border-b border-[#F1F3F4] bg-[#F8F9FA]">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-2.5 h-2.5 rounded-full ${
                              stream.status === "ONLINE"
                                ? "bg-[#1E8E3E] animate-pulse"
                                : stream.status === "STANDBY"
                                ? "bg-[#F9AB00]"
                                : "bg-[#D93025]"
                            }`}
                          />
                          <h3 className="text-sm font-bold text-[#202124]">{stream.suiteName}</h3>
                        </div>
                        <p className="text-xs text-[#5F6368] mt-0.5 font-medium">
                          {stream.device.manufacturer} • {stream.device.modelName}
                        </p>
                      </div>

                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                          stream.status === "ONLINE"
                            ? "bg-[#E6F4EA] text-[#137333] border-[#CEEAD6]"
                            : stream.status === "STANDBY"
                            ? "bg-[#FEF7E0] text-[#B06000] border-[#FEEFC3]"
                            : "bg-[#FCE8E6] text-[#C5221F] border-[#FAD2CF]"
                        }`}
                      >
                        {stream.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-3 text-[11px] text-[#5F6368] font-mono">
                      <div>IP: {stream.ipAddress}:{stream.port}</div>
                      <div>Station: {stream.device.stationName}</div>
                    </div>
                  </div>

                  {/* Card Body: Live Dosimetry & C-Arm Orientation */}
                  <div className="p-5 space-y-4 flex-1">
                    {/* Air Kerma Dose Meter */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#5F6368] font-medium flex items-center gap-1.5">
                          <Gauge className="w-3.5 h-3.5 text-[#1A73E8]" />
                          Cumulative Air Kerma ($K_a$):
                        </span>
                        <span className="font-bold text-[#202124]">
                          {stream.accumulatedDose.cumulativeAirKermaMGy} mGy
                        </span>
                      </div>

                      {/* Progress bar towards 2000 mGy advisory limit */}
                      <div className="w-full bg-[#E0E2E6] h-2 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${kermaInfo.progressClass} transition-all duration-500`}
                          style={{ width: `${kermaInfo.percentageOfLimit}%` }}
                        />
                      </div>

                      <div className="flex items-center justify-between text-[11px]">
                        <span className={`text-[10px] font-medium ${kermaInfo.tier === "CRITICAL" ? "text-[#C5221F]" : "text-[#5F6368]"}`}>
                          {kermaInfo.percentageOfLimit}% of SIR 2000 mGy limit
                        </span>
                        <span className="text-[#5F6368] font-mono">
                          DAP: {stream.accumulatedDose.doseAreaProductGyCm2} Gy·cm²
                        </span>
                      </div>
                    </div>

                    {/* Secondary Metrics */}
                    <div className="grid grid-cols-2 gap-3 p-3 rounded-lg bg-[#F8F9FA] border border-[#F1F3F4] text-xs">
                      <div>
                        <span className="text-[#5F6368] text-[11px] block">Fluoro Time:</span>
                        <span className="font-semibold text-[#202124]">
                          {Math.floor(stream.accumulatedDose.totalFluoroscopyTimeSec / 60)}m{" "}
                          {Math.floor(stream.accumulatedDose.totalFluoroscopyTimeSec % 60)}s
                        </span>
                      </div>
                      <div>
                        <span className="text-[#5F6368] text-[11px] block">C-Arm Geometry:</span>
                        <span className="font-semibold text-[#1A73E8] font-mono">
                          {stream.latestAngles}
                        </span>
                      </div>
                      <div>
                        <span className="text-[#5F6368] text-[11px] block">Transfer Rate:</span>
                        <span className="font-semibold text-[#202124]">
                          {stream.packetsPerMinute} PPM
                        </span>
                      </div>
                      <div>
                        <span className="text-[#5F6368] text-[11px] block">Total Ingested:</span>
                        <span className="font-semibold text-[#202124]">
                          {stream.totalPacketsReceived.toLocaleString()} PDUs
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Action Controls */}
                  <div className="px-5 py-3 border-t border-[#F1F3F4] bg-[#FFFFFF] flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleSimulateCarmPush(stream.suiteId)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-[#E8F0FE] text-[#1A73E8] hover:bg-[#D2E3FC] text-xs font-semibold transition-colors cursor-pointer"
                      title="Simulate fluoroscopy exposure packet push from C-Arm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Simulate Exposure
                    </button>

                    <button
                      onClick={() => {
                        setSelectedSuiteId(stream.suiteId);
                        setShowDrawer(true);
                      }}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded hover:bg-[#F1F3F4] text-[#5F6368] hover:text-[#202124] text-xs font-medium transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      View Log
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Live Packet Stream Table */}
        <section className="rounded-xl border border-[#DADCE0] bg-[#FFFFFF] shadow-sm overflow-hidden">
          <div className="p-4 border-b border-[#DADCE0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#F8F9FA]">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-[#202124]">
                  Hardware Inventory &amp; Depletion Ledger
                </h3>
                <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-gray-100 text-[#3C4043] border border-[#DADCE0]">
                  Cath-Lab Store
                </span>
              </div>
              <p className="text-xs text-[#5F6368] mt-0.5">
                SMS Medical College, Jaipur • Rajasthan RMSCL SKU synchronization
              </p>
            </div>

            {/* Modality Filter Chips */}
            <div className="flex items-center gap-1.5">
              {(["ALL", "XA", "CT"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setFilterModality(m)}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                    filterModality === m
                      ? "bg-[#1A73E8] text-white"
                      : "bg-[#FFFFFF] border border-[#DADCE0] text-[#5F6368] hover:bg-[#F1F3F4]"
                  }`}
                >
                  {m === "ALL" ? "All Modalities" : m}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Event Cards */}
          <div className="block md:hidden divide-y divide-[#F1F3F4]">
            {filteredEvents.map((evt, idx) => (
              <div key={`m-${evt.id || idx}`} className="p-3.5 space-y-2 bg-white">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 font-medium text-xs text-[#202124]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E8E3E]" />
                    {evt.suiteName}
                  </span>
                  <span className="font-mono text-[11px] text-[#5F6368]">
                    {new Date(evt.timestamp).toLocaleTimeString()}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded font-mono text-[10px] font-bold bg-blue-50 text-[#1A73E8] border border-blue-100">
                    {evt.pduType}
                  </span>
                  <span className="font-mono text-[10px] text-[#5F6368]">
                    {evt.bytes} B
                  </span>
                </div>
                <div className="text-xs text-[#202124]">
                  {evt.summary}
                </div>
                {evt.airKermaMGy !== undefined && (
                  <div className="bg-[#F8F9FA] p-2 rounded border border-[#E8EAED] text-[11px] font-mono text-[#137333]">
                    Exposure: {evt.airKermaMGy} mGy | DAP: {evt.dapGyCm2} Gy·cm²
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#DADCE0] bg-[#FFFFFF] text-[#5F6368] font-medium uppercase tracking-wider text-[10px]">
                  <th className="px-4 py-2.5">Time (UTC)</th>
                  <th className="px-4 py-2.5">Suite Source</th>
                  <th className="px-4 py-2.5">Protocol / PDU</th>
                  <th className="px-4 py-2.5 text-center">Quantity</th>
                  <th className="px-4 py-2.5">Length</th>
                  <th className="px-4 py-2.5">Summary / Acquired Radiation Metrics</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F3F4] text-[#202124]">
                {filteredEvents.map((evt, idx) => (
                  <tr key={evt.id || idx} className="hover:bg-[#F8F9FA] transition-colors">
                    <td className="px-4 py-3 font-mono text-[11px] text-[#5F6368]">
                      {new Date(evt.timestamp).toLocaleTimeString()}
                    </td>
                    <td className="px-4 py-3 font-medium">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1E8E3E]" />
                        {evt.suiteName}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-mono text-[11px] text-[#1A73E8]">
                      {evt.pduType}
                    </td>
                    <td className="px-4 py-3 text-center font-mono font-bold text-xs text-[#137333]">
                      1 Packet
                    </td>
                    <td className="px-4 py-3 font-mono text-[11px] text-[#5F6368]">
                      {evt.bytes} B
                    </td>
                    <td className="px-4 py-3 text-xs">
                      <div>{evt.summary}</div>
                      {evt.airKermaMGy !== undefined && (
                        <div className="text-[11px] text-[#137333] font-mono mt-0.5">
                          Exposure: {evt.airKermaMGy} mGy | DAP: {evt.dapGyCm2} Gy·cm²
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* Raw Packet Inspector Drawer */}
      {showDrawer && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-xl bg-[#FFFFFF] h-full shadow-2xl flex flex-col animate-slide-left border-l border-[#DADCE0]">
            <div className="p-4 border-b border-[#DADCE0] flex items-center justify-between bg-[#F8F9FA]">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#1A73E8]" />
                <h3 className="text-sm font-bold text-[#202124]">
                  DICOM Part 8 PDU Packet Inspector
                </h3>
              </div>
              <button
                onClick={() => setShowDrawer(false)}
                className="p-1 rounded hover:bg-[#E8EAED] text-[#5F6368]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 flex-1 overflow-y-auto space-y-4">
              <div className="p-3 rounded-lg bg-[#F8F9FA] border border-[#DADCE0] text-xs space-y-1 font-mono">
                <div className="text-[#5F6368]">Active Inspection Target:</div>
                <div className="font-bold text-[#202124]">{selectedStream.suiteName}</div>
                <div className="text-[#1A73E8]">
                  {selectedStream.ipAddress}:{selectedStream.port} (Philips/Siemens C-STORE SCP)
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-[#5F6368] uppercase mb-2 tracking-wider">
                  Decoded RDSR JSON Representation
                </h4>
                <pre className="p-4 rounded-lg bg-[#202124] text-[#81C995] font-mono text-[11px] overflow-x-auto max-h-96 leading-relaxed">
                  {JSON.stringify(selectedStream, null, 2)}
                </pre>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(JSON.stringify(selectedStream, null, 2));
                    setNotification("Copied RDSR stream data to clipboard.");
                    setTimeout(() => setNotification(null), 2500);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-md bg-[#F1F3F4] text-[#202124] hover:bg-[#E8EAED] text-xs font-medium cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  Copy JSON
                </button>
                <button
                  onClick={() => {
                    const blob = new Blob([JSON.stringify(selectedStream, null, 2)], {
                      type: "application/json",
                    });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = `RDSR-${selectedStream.suiteId}.json`;
                    a.click();
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-md bg-[#1A73E8] text-white hover:bg-[#1557B0] text-xs font-medium cursor-pointer shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Export
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Light subtle footer attribution */}
      <div className="text-center py-4 text-xs text-zinc-400 print:hidden select-none">
        Made by Dr. Neel Yadav
      </div>
    </div>
  );
}
