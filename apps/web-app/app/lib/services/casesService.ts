/**
 * EndoFlow Cases Service
 * 
 * Unified service layer for Interventional Radiology procedure cases.
 * Seamlessly synchronizes with cloud endpoints and falls back to the native
 * offline IndexedDB vault when network connectivity is lost.
 */

import {
  getRecord,
  getAllRecords,
  putRecord,
  putRecords,
} from "./indexedDbService";

export interface ProcedureCase {
  id: string;
  caseId?: string;
  patientId?: string;
  patientName?: string;
  uhid?: string;
  procedureName?: string;
  status?: string;
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: unknown;
}

/**
 * Fetches clinical procedure cases.
 * 1. Attempts fetch from /api/cases?limit=${limit}
 * 2. On success, stores records in IndexedDB store "cases" for offline caching and returns.
 * 3. On network error or HTTP failure, reads and returns records from IndexedDB store "cases".
 */
export async function fetchCases<T = ProcedureCase>(limit?: number): Promise<T[]> {
  const url = typeof limit === "number" ? `/api/cases?limit=${limit}` : "/api/cases";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: Failed to fetch cases`);
    }

    const data = await response.json();
    if (Array.isArray(data)) {
      // Background cache in IndexedDB vault
      await putRecords("cases", data);
      return data as T[];
    }
  } catch (error) {
    console.warn("[casesService] Network fetch failed, falling back to IndexedDB vault:", error);
  }

  // Offline Fallback
  const cachedCases = await getAllRecords<T>("cases");
  if (typeof limit === "number" && limit > 0) {
    return cachedCases.slice(0, limit);
  }
  return cachedCases;
}

/**
 * Fetches a single procedure case by its ID.
 * 1. Attempts fetch from /api/cases/${id}
 * 2. On failure (network error or HTTP error), falls back to IndexedDB store "cases".
 */
export async function fetchCaseById<T = ProcedureCase>(id: string): Promise<T | null> {
  if (!id) return null;

  try {
    const response = await fetch(`/api/cases/${encodeURIComponent(id)}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      if (data && (data.id || data.caseId)) {
        await putRecord("cases", data);
        return data as T;
      }
    }
  } catch (error) {
    console.warn(`[casesService] Network fetch for case ${id} failed, checking IndexedDB:`, error);
  }

  // Offline Fallback
  return await getRecord<T>("cases", id);
}

/**
 * Saves a new or modified procedure case.
 * 1. Sends POST to /api/cases
 * 2. Caches in IndexedDB store "cases"
 * 3. On network outage, buffers in IndexedDB and queues for future synchronization.
 */
export async function saveCase<T extends Record<string, unknown> = ProcedureCase>(
  caseData: T
): Promise<T> {
  const targetId = (caseData.id || caseData.caseId || `case_${Date.now()}`) as string;
  const nowIso = new Date().toISOString();
  const normalizedCase = {
    ...caseData,
    id: targetId,
    createdAt: (caseData.createdAt as string) || nowIso,
    updatedAt: nowIso,
  } as T;

  try {
    const response = await fetch("/api/cases", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(normalizedCase),
    });

    if (response.ok) {
      const saved = await response.json();
      await putRecord("cases", saved);
      return saved as T;
    }
    throw new Error(`HTTP error ${response.status}: Live case save failed`);
  } catch (error) {
    console.warn("[casesService] Live save failed, buffering offline in IndexedDB:", error);

    // Save locally to IndexedDB
    await putRecord("cases", normalizedCase);

    // Enqueue for background synchronization
    await putRecord("sync_queue", {
      entityType: "cases",
      caseId: targetId,
      action: "save",
      payload: normalizedCase,
      timestamp: Date.now(),
    });

    return normalizedCase;
  }
}

export interface UpdateCaseStatusParams {
  caseId?: string;
  id?: string;
  status?: string;
  nextStatus?: string;
  notes?: string;
  isEmergencyOverride?: boolean;
  overrideReason?: string;
}

/**
 * Updates the clinical workflow status of a case.
 * 1. Sends POST to /api/cases/${id}/status
 * 2. Updates the record in IndexedDB store "cases"
 * 3. On network failure, applies the transition locally in IndexedDB and queues sync.
 */
export async function updateCaseStatus(
  idOrParams: string | UpdateCaseStatusParams,
  status?: string,
  notes?: string
): Promise<any> {
  let id: string;
  let targetStatus: string;
  let targetNotes: string | undefined;
  const extra: Record<string, unknown> = {};

  if (typeof idOrParams === "string") {
    id = idOrParams;
    targetStatus = status || "";
    targetNotes = notes;
  } else {
    id = idOrParams.caseId || idOrParams.id || "";
    targetStatus = idOrParams.status || idOrParams.nextStatus || "";
    targetNotes = idOrParams.notes;
    if (idOrParams.isEmergencyOverride !== undefined) {
      extra.isEmergencyOverride = idOrParams.isEmergencyOverride;
    }
    if (idOrParams.overrideReason !== undefined) {
      extra.overrideReason = idOrParams.overrideReason;
    }
  }

  const payload = {
    nextStatus: targetStatus,
    status: targetStatus,
    notes: targetNotes || "",
    timestamp: new Date().toISOString(),
    ...extra,
  };

  try {
    const response = await fetch(`/api/cases/${encodeURIComponent(id)}/status`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const result = await response.json();

      // Update local cached case record in IndexedDB
      const existing = await getRecord<ProcedureCase>("cases", id);
      if (existing) {
        await putRecord("cases", {
          ...existing,
          status,
          updatedAt: result.updatedAt || payload.timestamp,
        });
      }

      return result;
    }
    throw new Error(`HTTP error ${response.status}: Live status update failed`);
  } catch (error) {
    console.warn(`[casesService] Live status update for case ${id} failed, applying locally:`, error);

    // Apply status update in local IndexedDB store
    const existing = (await getRecord<ProcedureCase>("cases", id)) || { id };
    const updatedCase = {
      ...existing,
      status,
      updatedAt: payload.timestamp,
    };
    await putRecord("cases", updatedCase);

    // Enqueue for offline sync replay
    await putRecord("sync_queue", {
      entityType: "case_status",
      caseId: id,
      action: "status_update",
      payload,
      timestamp: Date.now(),
    });

    return {
      success: true,
      caseId: id,
      status,
      updatedAt: payload.timestamp,
      offline: true,
    };
  }
}

export const casesService = {
  fetchCases,
  fetchCaseById,
  saveCase,
  updateCaseStatus,
};

export default casesService;
