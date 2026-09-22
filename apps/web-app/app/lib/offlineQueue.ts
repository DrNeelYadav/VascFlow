/**
 * Lead-Shielded Offline Queue (Native IndexedDB) & Storage Quota Manager
 * 
 * Provides fail-safe transactional mutation buffering for lead-lined Cath Labs / Angiosuites
 * where RF shielding and mobile dead-zones cause transient network loss.
 * 
 * Partitions:
 * 1. mutation_queue: PERMANENTLY PINNED. Never evicted under memory pressure.
 * 2. patient_master_index: PERMANENTLY PINNED. Never evicted.
 * 3. dicom_image_cache: LRU managed with strict 250 MB ceiling.
 */

export interface OfflineMutation<T = unknown> {
  id: string;
  entityType: 'case_update' | 'inventory_log' | 'report_update' | 'custom' | string;
  url: string;
  method: 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  payload: T;
  timestamp: number;
  retryCount: number;
  status: 'pending' | 'processing' | 'failed' | 'synced';
  lastError?: string;
  optimisticKey?: string;
}

export interface EnqueueOptions<T = unknown> {
  id?: string;
  entityType?: 'case_update' | 'inventory_log' | 'report_update' | 'custom' | string;
  url: string;
  method?: 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  payload: T;
  optimisticKey?: string;
}

export interface FlushResult {
  totalProcessed: number;
  succeeded: number;
  failed: number;
  results: Array<{ id: string; success: boolean; error?: string }>;
}

export interface CachedDicomImage {
  id: string;
  byteSize: number;
  data: string | ArrayBuffer | Blob;
  lastAccessedAt: number; // Unix timestamp for LRU sorting
  sopInstanceUid?: string;
  seriesInstanceUid?: string;
}

export interface PatientMasterIndexRecord {
  id: string; // Patient ID or UHID
  name: string;
  uhid: string;
  age?: number;
  gender?: string;
  clinicalSummary?: Record<string, unknown>;
  cachedAt: number;
  pinned: true; // Permanent pin
}

export interface StorageQuotaMetrics {
  usedBytes: number;
  quotaBytes: number;
  pinnedBytes: number;
  evictedCount: number;
  availableBytes: number;
}

export const IMAGE_CACHE_MAX_BYTES = 250 * 1024 * 1024; // 250 MB ceiling
export const DB_NAME = 'vascflow_offline_store';
export const DB_VERSION = 2;
export const STORE_NAME = 'mutation_queue';
export const PATIENT_INDEX_STORE = 'patient_master_index';
export const IMAGE_CACHE_STORE = 'dicom_image_cache';

// In-memory fallback stores for SSR or environments lacking IndexedDB
const memoryMutationStore = new Map<string, OfflineMutation<unknown>>();
const memoryPatientStore = new Map<string, PatientMasterIndexRecord>();
const memoryImageCacheStore = new Map<string, CachedDicomImage>();
let sessionEvictedCount = 0;

/**
 * Check if running in a client environment supporting IndexedDB
 */
export function isIndexedDBAvailable(): boolean {
  return typeof window !== 'undefined' && 'indexedDB' in window && window.indexedDB !== null;
}

/**
 * Check connectivity state
 */
export function isOnline(): boolean {
  if (typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean') {
    return navigator.onLine;
  }
  return true;
}

/**
 * Open or initialize the offline IndexedDB database with schema version 2
 */
export function openOfflineDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (!isIndexedDBAvailable()) {
      reject(new Error('IndexedDB is unavailable in this runtime'));
      return;
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        store.createIndex('status', 'status', { unique: false });
        store.createIndex('timestamp', 'timestamp', { unique: false });
        store.createIndex('entityType', 'entityType', { unique: false });
      }
      if (!db.objectStoreNames.contains(PATIENT_INDEX_STORE)) {
        const patientStore = db.createObjectStore(PATIENT_INDEX_STORE, { keyPath: 'id' });
        patientStore.createIndex('uhid', 'uhid', { unique: false });
        patientStore.createIndex('cachedAt', 'cachedAt', { unique: false });
      }
      if (!db.objectStoreNames.contains(IMAGE_CACHE_STORE)) {
        const imageStore = db.createObjectStore(IMAGE_CACHE_STORE, { keyPath: 'id' });
        imageStore.createIndex('lastAccessedAt', 'lastAccessedAt', { unique: false });
        imageStore.createIndex('byteSize', 'byteSize', { unique: false });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error('Failed to open IndexedDB'));
  });
}

function computeItemByteSize(data: unknown, declaredSize?: number): number {
  if (typeof declaredSize === 'number' && declaredSize >= 0) {
    return declaredSize;
  }
  if (typeof data === 'string') {
    return data.length;
  }
  if (typeof ArrayBuffer !== 'undefined' && data instanceof ArrayBuffer) {
    return data.byteLength;
  }
  if (typeof Blob !== 'undefined' && data instanceof Blob) {
    return data.size;
  }
  try {
    return JSON.stringify(data).length;
  } catch {
    return 1024;
  }
}

// ---------------------------------------------------------------------------
// 1. Permanently Pinned: Mutation Queue
// ---------------------------------------------------------------------------

/**
 * Enqueue a mutation to the lead-shielded queue
 */
export async function enqueueMutation<T = unknown>(options: EnqueueOptions<T>): Promise<OfflineMutation<T>> {
  const mutation: OfflineMutation<T> = {
    id: options.id || `mut-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`,
    entityType: options.entityType || 'case_update',
    url: options.url,
    method: options.method || 'POST',
    payload: options.payload,
    timestamp: Date.now(),
    retryCount: 0,
    status: 'pending',
    optimisticKey: options.optimisticKey,
  };

  if (isIndexedDBAvailable()) {
    try {
      const db = await openOfflineDB();
      await new Promise<void>((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME, 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const req = store.put(mutation);
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
      });
      return mutation;
    } catch (err) {
      console.warn('IndexedDB write failed, falling back to memory queue:', err);
    }
  }

  // Fallback to memory store
  memoryMutationStore.set(mutation.id, mutation as OfflineMutation<unknown>);
  return mutation;
}

/**
 * Retrieve all pending mutations in ascending chronological order
 */
export async function getPendingMutations(): Promise<OfflineMutation[]> {
  if (isIndexedDBAvailable()) {
    try {
      const db = await openOfflineDB();
      return await new Promise<OfflineMutation[]>((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME, 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const req = store.getAll();

        req.onsuccess = () => {
          const all = (req.result as OfflineMutation[]) || [];
          const pending = all
            .filter((m) => m.status === 'pending' || m.status === 'failed')
            .sort((a, b) => a.timestamp - b.timestamp);
          resolve(pending);
        };
        req.onerror = () => reject(req.error);
      });
    } catch (err) {
      console.warn('IndexedDB read failed, falling back to memory queue:', err);
    }
  }

  return Array.from(memoryMutationStore.values())
    .filter((m) => m.status === 'pending' || m.status === 'failed')
    .sort((a, b) => a.timestamp - b.timestamp);
}

/**
 * Update mutation status in storage
 */
export async function updateMutationStatus(
  id: string,
  updates: Partial<Pick<OfflineMutation, 'status' | 'retryCount' | 'lastError'>>
): Promise<void> {
  if (isIndexedDBAvailable()) {
    try {
      const db = await openOfflineDB();
      await new Promise<void>((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME, 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const getReq = store.get(id);

        getReq.onsuccess = () => {
          const item = getReq.result as OfflineMutation | undefined;
          if (!item) {
            resolve();
            return;
          }
          const updated = { ...item, ...updates };
          const putReq = store.put(updated);
          putReq.onsuccess = () => resolve();
          putReq.onerror = () => reject(putReq.error);
        };
        getReq.onerror = () => reject(getReq.error);
      });
      return;
    } catch (err) {
      console.warn('IndexedDB update failed, updating memory store:', err);
    }
  }

  const inMem = memoryMutationStore.get(id);
  if (inMem) {
    memoryMutationStore.set(id, { ...inMem, ...updates });
  }
}

/**
 * Optimistic field-level merger helper
 */
export function mergeOptimisticFields<T extends Record<string, any>>(
  serverState: T,
  optimisticPatch: Partial<T>
): T {
  return {
    ...serverState,
    ...optimisticPatch,
  };
}

/**
 * Flushes all pending mutations sequentially in chronological order.
 */
export async function flushQueue(
  customFetch: typeof fetch = typeof fetch !== 'undefined' ? fetch : (async () => ({} as Response))
): Promise<FlushResult> {
  const pending = await getPendingMutations();
  const result: FlushResult = {
    totalProcessed: pending.length,
    succeeded: 0,
    failed: 0,
    results: [],
  };

  if (pending.length === 0) {
    return result;
  }

  for (const mutation of pending) {
    await updateMutationStatus(mutation.id, { status: 'processing' });

    try {
      const response = await customFetch(mutation.url, {
        method: mutation.method,
        headers: {
          'Content-Type': 'application/json',
          'X-VascFlow-Offline-Replay': 'true',
        },
        body: mutation.payload ? JSON.stringify(mutation.payload) : undefined,
      });

      if (response && response.ok) {
        await updateMutationStatus(mutation.id, { status: 'synced' });
        result.succeeded++;
        result.results.push({ id: mutation.id, success: true });
      } else {
        const errorText = response ? `HTTP ${response.status}: ${response.statusText}` : 'Network error';
        await updateMutationStatus(mutation.id, {
          status: 'failed',
          retryCount: mutation.retryCount + 1,
          lastError: errorText,
        });
        result.failed++;
        result.results.push({ id: mutation.id, success: false, error: errorText });
      }
    } catch (err: any) {
      const msg = err?.message || 'Network unreachable';
      await updateMutationStatus(mutation.id, {
        status: 'failed',
        retryCount: mutation.retryCount + 1,
        lastError: msg,
      });
      result.failed++;
      result.results.push({ id: mutation.id, success: false, error: msg });
    }
  }

  return result;
}

/**
 * Clears all successfully synced mutations from storage
 */
export async function clearSyncedMutations(): Promise<number> {
  let count = 0;
  if (isIndexedDBAvailable()) {
    try {
      const db = await openOfflineDB();
      return await new Promise<number>((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME, 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const req = store.getAll();

        req.onsuccess = () => {
          const all = (req.result as OfflineMutation[]) || [];
          for (const item of all) {
            if (item.status === 'synced') {
              store.delete(item.id);
              count++;
            }
          }
          resolve(count);
        };
        req.onerror = () => reject(req.error);
      });
    } catch (err) {
      console.warn('IndexedDB clear failed:', err);
    }
  }

  memoryMutationStore.forEach((item, key) => {
    if (item.status === 'synced') {
      memoryMutationStore.delete(key);
      count++;
    }
  });
  return count;
}

/**
 * Clear mutations in the queue (for resets or testing)
 */
export async function clearAllMutations(): Promise<void> {
  memoryMutationStore.clear();
  if (isIndexedDBAvailable()) {
    try {
      const db = await openOfflineDB();
      await new Promise<void>((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME, 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const req = store.clear();
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
      });
    } catch (err) {
      console.warn('IndexedDB clearAll failed:', err);
    }
  }
}

// ---------------------------------------------------------------------------
// 2. Permanently Pinned: Patient Master Index
// ---------------------------------------------------------------------------

/**
 * Inserts or updates a permanently pinned patient master record.
 * This partition is NEVER subject to LRU cache eviction.
 */
export async function putPatientMasterRecord(
  record: Omit<PatientMasterIndexRecord, 'pinned' | 'cachedAt'> & { cachedAt?: number }
): Promise<PatientMasterIndexRecord> {
  const pinnedRecord: PatientMasterIndexRecord = {
    ...record,
    pinned: true,
    cachedAt: record.cachedAt || Date.now(),
  };

  if (isIndexedDBAvailable()) {
    try {
      const db = await openOfflineDB();
      await new Promise<void>((resolve, reject) => {
        const transaction = db.transaction(PATIENT_INDEX_STORE, 'readwrite');
        const store = transaction.objectStore(PATIENT_INDEX_STORE);
        const req = store.put(pinnedRecord);
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
      });
      return pinnedRecord;
    } catch (err) {
      console.warn('IndexedDB patient write failed, using memory store:', err);
    }
  }

  memoryPatientStore.set(pinnedRecord.id, pinnedRecord);
  return pinnedRecord;
}

export async function getPatientMasterRecord(id: string): Promise<PatientMasterIndexRecord | undefined> {
  if (isIndexedDBAvailable()) {
    try {
      const db = await openOfflineDB();
      return await new Promise<PatientMasterIndexRecord | undefined>((resolve, reject) => {
        const transaction = db.transaction(PATIENT_INDEX_STORE, 'readonly');
        const store = transaction.objectStore(PATIENT_INDEX_STORE);
        const req = store.get(id);
        req.onsuccess = () => resolve(req.result as PatientMasterIndexRecord | undefined);
        req.onerror = () => reject(req.error);
      });
    } catch (err) {
      console.warn('IndexedDB patient read failed, using memory store:', err);
    }
  }

  return memoryPatientStore.get(id);
}

export async function getAllPatientMasterRecords(): Promise<PatientMasterIndexRecord[]> {
  if (isIndexedDBAvailable()) {
    try {
      const db = await openOfflineDB();
      return await new Promise<PatientMasterIndexRecord[]>((resolve, reject) => {
        const transaction = db.transaction(PATIENT_INDEX_STORE, 'readonly');
        const store = transaction.objectStore(PATIENT_INDEX_STORE);
        const req = store.getAll();
        req.onsuccess = () => resolve((req.result as PatientMasterIndexRecord[]) || []);
        req.onerror = () => reject(req.error);
      });
    } catch (err) {
      console.warn('IndexedDB patient getAll failed, using memory store:', err);
    }
  }

  return Array.from(memoryPatientStore.values());
}

// ---------------------------------------------------------------------------
// 3. LRU Eviction Manager: DICOM & Image Cache (250 MB Ceiling)
// ---------------------------------------------------------------------------

/**
 * Enforces LRU eviction on DICOM image cache if used bytes exceed ceiling.
 * Evicts oldest items sorted by lastAccessedAt until usedBytes <= maxBytes.
 */
export async function enforceLruImageEviction(
  maxBytes: number = IMAGE_CACHE_MAX_BYTES
): Promise<{ evictedCount: number; freedBytes: number }> {
  let evicted = 0;
  let freed = 0;

  if (isIndexedDBAvailable()) {
    try {
      const db = await openOfflineDB();
      const items = await new Promise<CachedDicomImage[]>((resolve, reject) => {
        const transaction = db.transaction(IMAGE_CACHE_STORE, 'readonly');
        const store = transaction.objectStore(IMAGE_CACHE_STORE);
        const req = store.getAll();
        req.onsuccess = () => resolve((req.result as CachedDicomImage[]) || []);
        req.onerror = () => reject(req.error);
      });

      let totalBytes = items.reduce((acc, it) => acc + (it.byteSize || 0), 0);
      if (totalBytes > maxBytes) {
        // Sort oldest access first
        const sorted = [...items].sort((a, b) => a.lastAccessedAt - b.lastAccessedAt);

        const idsToDelete: string[] = [];
        for (const item of sorted) {
          if (totalBytes <= maxBytes) break;
          idsToDelete.push(item.id);
          totalBytes -= item.byteSize;
          freed += item.byteSize;
          evicted++;
        }

        if (idsToDelete.length > 0) {
          await new Promise<void>((resolve, reject) => {
            const tx = db.transaction(IMAGE_CACHE_STORE, 'readwrite');
            const store = tx.objectStore(IMAGE_CACHE_STORE);
            for (const id of idsToDelete) {
              store.delete(id);
            }
            tx.oncomplete = () => resolve();
            tx.onerror = () => reject(tx.error);
          });
        }
      }

      sessionEvictedCount += evicted;
      return { evictedCount: evicted, freedBytes: freed };
    } catch (err) {
      console.warn('IndexedDB LRU eviction failed, falling back to memory store:', err);
    }
  }

  // Memory fallback
  const items = Array.from(memoryImageCacheStore.values());
  let totalBytes = items.reduce((acc, it) => acc + (it.byteSize || 0), 0);
  if (totalBytes > maxBytes) {
    const sorted = [...items].sort((a, b) => a.lastAccessedAt - b.lastAccessedAt);
    for (const item of sorted) {
      if (totalBytes <= maxBytes) break;
      memoryImageCacheStore.delete(item.id);
      totalBytes -= item.byteSize;
      freed += item.byteSize;
      evicted++;
    }
  }

  sessionEvictedCount += evicted;
  return { evictedCount: evicted, freedBytes: freed };
}

/**
 * Caches a DICOM image/frame blob with automatic LRU eviction.
 */
export async function cacheDicomImage(
  id: string,
  data: string | ArrayBuffer | Blob,
  byteSize?: number,
  metadata?: { sopInstanceUid?: string; seriesInstanceUid?: string },
  maxBytes: number = IMAGE_CACHE_MAX_BYTES
): Promise<CachedDicomImage> {
  const calculatedSize = computeItemByteSize(data, byteSize);
  const item: CachedDicomImage = {
    id,
    data,
    byteSize: calculatedSize,
    lastAccessedAt: Date.now(),
    sopInstanceUid: metadata?.sopInstanceUid,
    seriesInstanceUid: metadata?.seriesInstanceUid,
  };

  // Evict if this addition would exceed quota
  await enforceLruImageEviction(Math.max(0, maxBytes - calculatedSize));

  if (isIndexedDBAvailable()) {
    try {
      const db = await openOfflineDB();
      await new Promise<void>((resolve, reject) => {
        const tx = db.transaction(IMAGE_CACHE_STORE, 'readwrite');
        const store = tx.objectStore(IMAGE_CACHE_STORE);
        const req = store.put(item);
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
      });
      return item;
    } catch (err) {
      console.warn('IndexedDB image cache write failed, falling back to memory:', err);
    }
  }

  memoryImageCacheStore.set(item.id, item);
  return item;
}

/**
 * Retrieves a cached DICOM image and updates its LRU access timestamp.
 */
export async function getCachedDicomImage(id: string): Promise<CachedDicomImage | undefined> {
  const now = Date.now();

  if (isIndexedDBAvailable()) {
    try {
      const db = await openOfflineDB();
      return await new Promise<CachedDicomImage | undefined>((resolve, reject) => {
        const tx = db.transaction(IMAGE_CACHE_STORE, 'readwrite');
        const store = tx.objectStore(IMAGE_CACHE_STORE);
        const getReq = store.get(id);

        getReq.onsuccess = () => {
          const item = getReq.result as CachedDicomImage | undefined;
          if (item) {
            item.lastAccessedAt = now;
            store.put(item);
          }
          resolve(item);
        };
        getReq.onerror = () => reject(getReq.error);
      });
    } catch (err) {
      console.warn('IndexedDB image read failed, falling back to memory:', err);
    }
  }

  const inMem = memoryImageCacheStore.get(id);
  if (inMem) {
    inMem.lastAccessedAt = now;
    memoryImageCacheStore.set(id, inMem);
  }
  return inMem;
}

/**
 * Computes storage quota metrics across partitions:
 * - usedBytes: DICOM image cache consumption
 * - quotaBytes: 250 MB ceiling for image cache
 * - pinnedBytes: permanently pinned un-synced clinical mutations and patient records
 * - evictedCount: number of evicted cache items
 */
export async function getStorageQuotaMetrics(
  quotaBytes: number = IMAGE_CACHE_MAX_BYTES
): Promise<StorageQuotaMetrics> {
  let usedBytes = 0;
  let pinnedBytes = 0;

  if (isIndexedDBAvailable()) {
    try {
      const db = await openOfflineDB();
      // Calculate image cache size
      const imageItems = await new Promise<CachedDicomImage[]>((resolve, reject) => {
        const tx = db.transaction(IMAGE_CACHE_STORE, 'readonly');
        const store = tx.objectStore(IMAGE_CACHE_STORE);
        const req = store.getAll();
        req.onsuccess = () => resolve((req.result as CachedDicomImage[]) || []);
        req.onerror = () => reject(req.error);
      });
      usedBytes = imageItems.reduce((acc, it) => acc + (it.byteSize || 0), 0);

      // Calculate pinned mutation and patient index size
      const mutations = await new Promise<OfflineMutation[]>((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const req = store.getAll();
        req.onsuccess = () => resolve((req.result as OfflineMutation[]) || []);
        req.onerror = () => reject(req.error);
      });
      const patients = await new Promise<PatientMasterIndexRecord[]>((resolve, reject) => {
        const tx = db.transaction(PATIENT_INDEX_STORE, 'readonly');
        const store = tx.objectStore(PATIENT_INDEX_STORE);
        const req = store.getAll();
        req.onsuccess = () => resolve((req.result as PatientMasterIndexRecord[]) || []);
        req.onerror = () => reject(req.error);
      });

      pinnedBytes =
        JSON.stringify(mutations).length + JSON.stringify(patients).length;

      return {
        usedBytes,
        quotaBytes,
        pinnedBytes,
        evictedCount: sessionEvictedCount,
        availableBytes: Math.max(0, quotaBytes - usedBytes),
      };
    } catch (err) {
      console.warn('IndexedDB quota check failed, calculating from memory:', err);
    }
  }

  // Memory calculation
  Array.from(memoryImageCacheStore.values()).forEach((item) => {
    usedBytes += item.byteSize;
  });
  pinnedBytes =
    JSON.stringify(Array.from(memoryMutationStore.values())).length +
    JSON.stringify(Array.from(memoryPatientStore.values())).length;

  return {
    usedBytes,
    quotaBytes,
    pinnedBytes,
    evictedCount: sessionEvictedCount,
    availableBytes: Math.max(0, quotaBytes - usedBytes),
  };
}

/**
 * Clears all cached images from the image store
 */
export async function clearImageCache(): Promise<void> {
  memoryImageCacheStore.clear();
  if (isIndexedDBAvailable()) {
    try {
      const db = await openOfflineDB();
      await new Promise<void>((resolve, reject) => {
        const tx = db.transaction(IMAGE_CACHE_STORE, 'readwrite');
        const store = tx.objectStore(IMAGE_CACHE_STORE);
        const req = store.clear();
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
      });
    } catch (err) {
      console.warn('IndexedDB clearImageCache failed:', err);
    }
  }
}

/**
 * Completely resets all stores (for test suites and user wipe)
 */
export async function clearAllOfflineStorage(): Promise<void> {
  await clearAllMutations();
  await clearImageCache();
  memoryPatientStore.clear();
  sessionEvictedCount = 0;

  if (isIndexedDBAvailable()) {
    try {
      const db = await openOfflineDB();
      await new Promise<void>((resolve, reject) => {
        const tx = db.transaction([STORE_NAME, PATIENT_INDEX_STORE, IMAGE_CACHE_STORE], 'readwrite');
        tx.objectStore(STORE_NAME).clear();
        tx.objectStore(PATIENT_INDEX_STORE).clear();
        tx.objectStore(IMAGE_CACHE_STORE).clear();
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
      });
    } catch (err) {
      console.warn('IndexedDB clearAllOfflineStorage failed:', err);
    }
  }
}

/**
 * Attach global online event listener in browser contexts
 */
if (typeof window !== 'undefined') {
  window.addEventListener('online', () => {
    flushQueue().catch((err) => {
      console.error('[VascFlow Offline Queue] Auto-sync failed on online reconnection:', err);
    });
  });
}
