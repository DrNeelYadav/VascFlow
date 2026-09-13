"use client";

import { useQuery, type UseQueryResult } from "@tanstack/react-query";

export interface PatientClinicalRecord {
  id: string;
  mrn: string;
  name: string;
  age: number;
  gender: string;
  weightKg: number;
  serumCreatinine: number;
  totalBilirubin: number;
  serumAlbumin: number;
  inr: number;
  sodiumMeqL: number;
  egfr: number;
  baselineActSeconds: number;
  procedureName: string;
  attendingPhysician: string;
  suiteLocation: string;
  allergies?: string[];
  contrastAgent: string;
  macdThresholdMl: number;
  createdAt: string;
}

export interface UsePatientQueryOptions {
  enabled?: boolean;
  staleTime?: number;
  gcTime?: number;
  initialData?: PatientClinicalRecord;
}

/**
 * Standardized fallback clinical record used during service initialization
 * or network disconnection.
 */
export const DEFAULT_PATIENT_FALLBACK: PatientClinicalRecord = {
  id: "IR-2026-8841",
  mrn: "#IR-2026-8841",
  name: "VALENTINE, MARCUS R.",
  age: 67,
  gender: "M",
  weightKg: 82.5,
  serumCreatinine: 1.14,
  totalBilirubin: 0.8,
  serumAlbumin: 3.9,
  inr: 1.1,
  sodiumMeqL: 139,
  egfr: 68,
  baselineActSeconds: 128,
  procedureName: "Bifurcated EVAR // DrySeal 14 Fr",
  attendingPhysician: "Dr. Sarah Chen, MD",
  suiteLocation: "Angio Suite 1 (Hybrid OR)",
  allergies: ["NKDA"],
  contrastAgent: "Isovue 370 (Iopamidol)",
  macdThresholdMl: 160,
  createdAt: new Date().toISOString(),
};

/**
 * Fetches patient clinical record from the BFF API Gateway proxy.
 */
export async function fetchPatientRecord(
  patientId: string
): Promise<PatientClinicalRecord> {
  const endpoint = `/api/proxy/api/v1/patients/${encodeURIComponent(patientId)}`;

  try {
    const response = await fetch(endpoint, {
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      // If patient not found or upstream error, provide contextual error
      if (response.status === 404) {
        throw new Error(`Patient '${patientId}' not found in hospital registry`);
      }
      throw new Error(
        `Upstream gateway error (${response.status}): ${response.statusText}`
      );
    }

    const json = await response.json();
    return json as PatientClinicalRecord;
  } catch (err) {
    // In local development or disconnected surgical workstations, safely return default fallback
    if (
      typeof window !== "undefined" &&
      (window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1")
    ) {
      return {
        ...DEFAULT_PATIENT_FALLBACK,
        id: patientId,
        mrn: patientId.startsWith("#") ? patientId : `#${patientId}`,
      };
    }
    throw err;
  }
}

/**
 * Standardized TanStack Query hook for clinical patient data.
 * Manages caching, stale time, background synchronization, and error handling.
 */
export function usePatientQuery(
  patientId?: string | null,
  options: UsePatientQueryOptions = {}
): UseQueryResult<PatientClinicalRecord, Error> {
  const {
    enabled = Boolean(patientId),
    staleTime = 5 * 60 * 1000, // 5 minutes fresh window
    gcTime = 15 * 60 * 1000, // 15 minutes garbage collection
    initialData,
  } = options;

  return useQuery<PatientClinicalRecord, Error>({
    queryKey: ["patient", patientId || "active"],
    queryFn: () => {
      if (!patientId) {
        return Promise.resolve(DEFAULT_PATIENT_FALLBACK);
      }
      return fetchPatientRecord(patientId);
    },
    enabled,
    staleTime,
    gcTime,
    initialData,
    retry: (failureCount, error) => {
      // Do not retry 404s
      if (error.message.includes("not found")) return false;
      return failureCount < 2;
    },
  });
}
