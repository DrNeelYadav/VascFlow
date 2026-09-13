/**
 * Clinical Dosimetry & Hardware Stream Calculations
 * Complies with DICOM PS3.16 Template 1020 & SIR Radiation Safety Guidelines
 */

export interface DeviceParticipant {
  deviceObserverUid?: string;
  manufacturer: string;
  modelName: string;
  serialNumber: string;
  stationName: string;
  institutionName?: string;
  departmentName?: string;
}

export interface AccumulatedDose {
  cumulativeAirKermaMGy: number;
  doseAreaProductGyCm2: number;
  totalFluoroscopyTimeSec: number;
  totalAcquisitionTimeSec: number;
  totalIrradiationEvents: number;
  dapOriginalUnit?: string;
}

export interface PduEventLog {
  id: string;
  timestamp: string;
  pduType: string;
  bytes: number;
  summary: string;
  airKermaMGy?: number;
  dapGyCm2?: number;
}

export interface HardwareStreamState {
  suiteId: string;
  suiteName: string;
  modality: "XA" | "CT";
  device: DeviceParticipant;
  ipAddress: string;
  port: number;
  status: "ONLINE" | "DEGRADED" | "STANDBY" | "OFFLINE";
  lastHeartbeat: string;
  lastHeartbeatUnixMs: number;
  packetsPerMinute: number;
  totalPacketsReceived: number;
  accumulatedDose: AccumulatedDose;
  latestAngles: string;
  recentEvents: PduEventLog[];
}

/**
 * Classifies network connection heartbeat state
 */
export function classifyDeviceStatus(
  lastHeartbeatUnixMs: number,
  packetsPerMinute: number,
  nowMs: number = Date.now()
): "ONLINE" | "DEGRADED" | "STANDBY" | "OFFLINE" {
  const elapsed = nowMs - lastHeartbeatUnixMs;

  if (elapsed > 60000) {
    return "OFFLINE";
  }
  if (elapsed > 20000) {
    return "DEGRADED";
  }
  if (packetsPerMinute < 10) {
    return "STANDBY";
  }
  return "ONLINE";
}

/**
 * Evaluates radiation dose against Society of Interventional Radiology (SIR)
 * First Notification Threshold: 2000 mGy Cumulative Air Kerma
 */
export function evaluateKermaThreshold(airKermaMGy: number): {
  tier: "NORMAL" | "ADVISORY" | "CRITICAL";
  label: string;
  percentageOfLimit: number;
  badgeClass: string;
  progressClass: string;
} {
  const percentage = Math.min(100, Math.round((airKermaMGy / 2000) * 100));

  if (airKermaMGy >= 2000) {
    return {
      tier: "CRITICAL",
      label: "Critical Dose Alert (>= 2000 mGy Substantial Radiation Dose Limit)",
      percentageOfLimit: percentage,
      badgeClass: "bg-[#FCE8E6] text-[#C5221F] border-[#FAD2CF]",
      progressClass: "bg-[#D93025]",
    };
  }
  if (airKermaMGy >= 1000) {
    return {
      tier: "ADVISORY",
      label: "Advisory Threshold (>= 1000 mGy 50% Safety Window)",
      percentageOfLimit: percentage,
      badgeClass: "bg-[#FEF7E0] text-[#B06000] border-[#FEEFC3]",
      progressClass: "bg-[#F9AB00]",
    };
  }
  return {
    tier: "NORMAL",
    label: "Routine Intra-procedural Dosimetry (< 1000 mGy)",
    percentageOfLimit: percentage,
    badgeClass: "bg-[#E6F4EA] text-[#137333] border-[#CEEAD6]",
    progressClass: "bg-[#1E8E3E]",
  };
}

/**
 * Safely sums incoming RDSR dose metrics with active accumulation
 */
export function accumulateRdsrDose(
  current: AccumulatedDose,
  incoming: Partial<AccumulatedDose>
): AccumulatedDose {
  return {
    cumulativeAirKermaMGy: Number(
      ((current.cumulativeAirKermaMGy || 0) + (incoming.cumulativeAirKermaMGy || 0)).toFixed(1)
    ),
    doseAreaProductGyCm2: Number(
      ((current.doseAreaProductGyCm2 || 0) + (incoming.doseAreaProductGyCm2 || 0)).toFixed(1)
    ),
    totalFluoroscopyTimeSec: Number(
      ((current.totalFluoroscopyTimeSec || 0) + (incoming.totalFluoroscopyTimeSec || 0)).toFixed(1)
    ),
    totalAcquisitionTimeSec: Number(
      ((current.totalAcquisitionTimeSec || 0) + (incoming.totalAcquisitionTimeSec || 0)).toFixed(1)
    ),
    totalIrradiationEvents:
      (current.totalIrradiationEvents || 0) + (incoming.totalIrradiationEvents || 0),
    dapOriginalUnit: incoming.dapOriginalUnit || current.dapOriginalUnit || "Gy.cm2",
  };
}

/**
 * Formats C-Arm angulation degrees into clinical orientation strings
 */
export function formatCArmAngles(primaryDeg: number, secondaryDeg: number): string {
  let prim = "AP 0.0°";
  if (primaryDeg > 0.1) {
    prim = `LAO ${primaryDeg.toFixed(1)}°`;
  } else if (primaryDeg < -0.1) {
    prim = `RAO ${Math.abs(primaryDeg).toFixed(1)}°`;
  }

  let sec = "0.0°";
  if (secondaryDeg > 0.1) {
    sec = `CRA ${secondaryDeg.toFixed(1)}°`;
  } else if (secondaryDeg < -0.1) {
    sec = `CAU ${Math.abs(secondaryDeg).toFixed(1)}°`;
  }

  return `${prim} / ${sec}`;
}

/**
 * Evaluates core network switch round-trip latency
 */
export function classifyPingLatency(latencyMs: number): {
  quality: "EXCELLENT" | "GOOD" | "DEGRADED" | "CRITICAL";
  badgeClass: string;
} {
  if (latencyMs <= 1.0) {
    return { quality: "EXCELLENT", badgeClass: "bg-[#E6F4EA] text-[#137333]" };
  }
  if (latencyMs <= 5.0) {
    return { quality: "GOOD", badgeClass: "bg-[#E8F0FE] text-[#1A73E8]" };
  }
  if (latencyMs <= 20.0) {
    return { quality: "DEGRADED", badgeClass: "bg-[#FEF7E0] text-[#B06000]" };
  }
  return { quality: "CRITICAL", badgeClass: "bg-[#FCE8E6] text-[#C5221F]" };
}
