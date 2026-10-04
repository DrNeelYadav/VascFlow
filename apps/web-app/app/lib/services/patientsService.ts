/**
 * EndoFlow Patients Service
 * 
 * Unified service layer for patient demographics, clinical records,
 * and Rajasthan health scheme identifier tracking.
 * Provides resilient offline fallback to the IndexedDB vault.
 */

import {
  getRecord,
  getAllRecords,
  putRecord,
  putRecords,
} from "./indexedDbService";

export interface PatientRecord {
  id: string;
  uhid?: string;
  name?: string;
  age?: number | string;
  gender?: string;
  phone?: string;
  contactNumber?: string;
  scheme?: string;
  schemeCardNumber?: string;
  clinicalHistory?: string;
  diagnosis?: string;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: unknown;
}

/**
 * Fetches all patient records.
 * 1. Attempts fetch from /api/patients
 * 2. On success, caches records into IndexedDB store "patients" and returns.
 * 3. On failure (network error or HTTP error), retrieves cached records from IndexedDB.
 */
export async function fetchPatients<T = PatientRecord>(limit?: number): Promise<T[]> {
  const url = typeof limit === "number" ? `/api/patients?limit=${limit}` : "/api/patients";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: Failed to fetch patients`);
    }

    const data = await response.json();
    if (Array.isArray(data)) {
      await putRecords("patients", data);
      return data as T[];
    }
  } catch (error) {
    console.warn("[patientsService] Network fetch failed, falling back to IndexedDB vault:", error);
  }

  // Offline Fallback
  const cachedPatients = await getAllRecords<T>("patients");
  if (typeof limit === "number" && limit > 0) {
    return cachedPatients.slice(0, limit);
  }
  return cachedPatients;
}

/**
 * Fetches a single patient record by ID or UHID.
 * 1. Attempts fetch from /api/patients/${id}
 * 2. On failure, falls back to IndexedDB store "patients".
 */
export async function fetchPatientById<T = PatientRecord>(id: string): Promise<T | null> {
  if (!id) return null;

  try {
    const response = await fetch(`/api/patients/${encodeURIComponent(id)}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      if (data && (data.id || data.uhid)) {
        await putRecord("patients", data);
        return data as T;
      }
    }
  } catch (error) {
    console.warn(`[patientsService] Network fetch for patient ${id} failed, checking IndexedDB:`, error);
  }

  // Offline Fallback
  return await getRecord<T>("patients", id);
}

/**
 * Saves or updates a patient record.
 * 1. Sends POST to /api/patients
 * 2. Caches in IndexedDB store "patients"
 * 3. On network error, stores in IndexedDB and queues for offline sync.
 */
export async function savePatient<T extends Record<string, unknown> = PatientRecord>(
  patientData: T
): Promise<T> {
  const targetId = (patientData.id || patientData.patientId || patientData.uhid || `pat_${Date.now()}`) as string;
  const nowIso = new Date().toISOString();
  const normalizedPatient = {
    ...patientData,
    id: targetId,
    createdAt: (patientData.createdAt as string) || nowIso,
    updatedAt: nowIso,
  } as T;

  try {
    const response = await fetch("/api/patients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(normalizedPatient),
    });

    if (response.ok) {
      const saved = await response.json();
      await putRecord("patients", saved);
      return saved as T;
    }
    throw new Error(`HTTP error ${response.status}: Live patient save failed`);
  } catch (error) {
    console.warn("[patientsService] Live save failed, buffering offline in IndexedDB:", error);

    // Cache locally in IndexedDB
    await putRecord("patients", normalizedPatient);

    // Enqueue for offline sync replay
    await putRecord("sync_queue", {
      entityType: "patients",
      patientId: targetId,
      action: "save",
      payload: normalizedPatient,
      timestamp: Date.now(),
    });

    return normalizedPatient;
  }
}

export const patientsService = {
  fetchPatients,
  fetchPatientById,
  savePatient,
};

export default patientsService;
