/**
 * VascFlow OS - Institutional Clinical Safety Interlocks & Decision Logic
 * Grounded in CIRSE, SIR, KDIGO, and ICRU Radiation Safety Guidelines.
 */

export type Gender = "male" | "female";
export type ProcedureBleedingRisk = "low" | "high";
export type ContrastSafetyStatus = "safe" | "caution" | "contraindicated";
export type BleedingRiskStatus = "safe" | "caution" | "contraindicated";
export type RadiationDoseLevel = "normal" | "alert" | "critical";

export interface ContrastSafetyEvaluation {
  status: ContrastSafetyStatus;
  alertLevel: "green" | "amber" | "red";
  message: string;
  recommendation: string;
}

export interface BleedingRiskEvaluation {
  isHighRisk: boolean;
  status: BleedingRiskStatus;
  alerts: string[];
}

export interface RadiationDoseEvaluation {
  flagged: boolean;
  level: RadiationDoseLevel;
  message: string;
}

import { traceTransaction } from "./telemetry/tracer";

/**
 * 2021 CKD-EPI Creatinine Equation (without race modifier)
 * eGFR = 142 * min(Scr/kappa, 1)^alpha * max(Scr/kappa, 1)^-1.200 * 0.9938^Age * (1.012 if female)
 */
export function calculateCKDEPI(
  creatinine: number,
  age: number,
  gender: Gender
): number {
  const isFemale = gender === "female";
  const kappa = isFemale ? 0.7 : 0.9;
  const alpha = isFemale ? -0.241 : -0.302;
  const genderFactor = isFemale ? 1.012 : 1.0;

  const scr = Math.max(0.1, creatinine);
  const safeAge = Math.max(18, age);

  const crDivKappa = scr / kappa;
  const minPart = Math.pow(Math.min(crDivKappa, 1), alpha);
  const maxPart = Math.pow(Math.max(crDivKappa, 1), -1.2);
  const agePart = Math.pow(0.9938, safeAge);

  const egfr = Math.round(142 * minPart * maxPart * agePart * genderFactor);
  return Math.max(1, egfr);
}

/**
 * OpenTelemetry-instrumented eGFR calculation with latency tracking
 */
export async function calculateCKDEPITraced(
  creatinine: number,
  age: number,
  gender: Gender
): Promise<number> {
  return traceTransaction(
    "clinical.calculateCKDEPI",
    () => calculateCKDEPI(creatinine, age, gender),
    { creatinine, age, gender }
  );
}

/**
 * Evaluates Contrast Safety based on eGFR according to KDIGO & ACR guidelines:
 * - eGFR >= 45: Safe for iodinated contrast
 * - eGFR 30 - 44: Caution; volume limits and pre/post hydration protocol required
 * - eGFR < 30: Contraindicated; high risk of Contrast-Induced Acute Kidney Injury (CI-AKI)
 */
export function evaluateContrastSafety(egfr: number): ContrastSafetyEvaluation {
  if (egfr >= 45) {
    return {
      status: "safe",
      alertLevel: "green",
      message: "Safe for iodinated contrast administration",
      recommendation: "Standard hydration protocol; monitor cumulative contrast volume.",
    };
  }

  if (egfr >= 30) {
    return {
      status: "caution",
      alertLevel: "amber",
      message: `Moderate CI-AKI risk (eGFR: ${egfr} mL/min/1.73m²)`,
      recommendation: "Hydration protocol required (0.9% NaCl 1 mL/kg/h). Enforce Cigarroa MACD limit.",
    };
  }

  return {
    status: "contraindicated",
    alertLevel: "red",
    message: `High CI-AKI risk (eGFR: ${egfr} mL/min/1.73m²)`,
    recommendation: "Iodinated contrast contraindicated. Obtain attending nephrologist clearance or use CO2 / US guidance.",
  };
}

/**
 * Evaluates Bleeding Risk based on SIR / CIRSE Coagulation Guidelines:
 * - Low-risk procedures: INR <= 2.0, Platelets >= 50,000, aPTT <= 50s
 * - High-risk procedures (TIPS, biopsies, biliary, visceral embolization): INR <= 1.5, Platelets >= 50,000, aPTT <= 50s
 */
export function evaluateBleedingRisk(
  inr: number,
  platelets: number,
  aptt: number,
  procedureRisk: ProcedureBleedingRisk
): BleedingRiskEvaluation {
  const alerts: string[] = [];
  const inrThreshold = procedureRisk === "high" ? 1.5 : 2.0;

  if (inr > inrThreshold) {
    alerts.push(`Elevated INR (${inr.toFixed(1)} > ${inrThreshold} threshold)`);
  }

  if (platelets < 50000) {
    alerts.push(`Severe Thrombocytopenia (Platelets ${platelets.toLocaleString()}/µL < 50,000/µL)`);
  }

  if (aptt > 50) {
    alerts.push(`Prolonged aPTT (${aptt}s > 50s threshold)`);
  }

  if (alerts.length === 0) {
    return {
      isHighRisk: false,
      status: "safe",
      alerts: [],
    };
  }

  // Severe threshold check for absolute contraindication
  const isSevere = inr > 2.5 || platelets < 30000 || (procedureRisk === "high" && inr > 2.0);

  return {
    isHighRisk: true,
    status: isSevere ? "contraindicated" : "caution",
    alerts,
  };
}

/**
 * Evaluates Radiation Sentinel Thresholds based on SIR and Joint Commission safety rules:
 * - Sentinel Event threshold: Cumulative Reference Air Kerma >= 5.0 Gy (5,000 mGy) OR Fluoro Time >= 60 min
 * - Advisory threshold: Cumulative Reference Air Kerma >= 3.0 Gy OR Fluoro Time >= 45 min
 */
export function evaluateRadiationDose(
  airKerma: number,
  fluoroTimeMinutes: number
): RadiationDoseEvaluation {
  if (airKerma >= 5.0 || fluoroTimeMinutes >= 60) {
    return {
      flagged: true,
      level: "critical",
      message: `Sentinel Radiation Dose Event: ${airKerma.toFixed(1)} Gy (threshold: 5.0 Gy) or ${fluoroTimeMinutes} min (threshold: 60 min). Mandatory 30-day tissue injury monitoring protocol initiated.`,
    };
  }

  if (airKerma >= 3.0 || fluoroTimeMinutes >= 45) {
    return {
      flagged: true,
      level: "alert",
      message: `High Radiation Exposure: ${airKerma.toFixed(1)} Gy / ${fluoroTimeMinutes} min. Minimize steep oblique angles and low pulse rate mode recommended.`,
    };
  }

  return {
    flagged: false,
    level: "normal",
    message: "Radiation exposure within standard procedural limits.",
  };
}
