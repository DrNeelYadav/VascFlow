/**
 * EndoFlow Offline Vault - Pure TypeScript IndexedDB Wrapper
 * 
 * Provides local-first persistence for Interventional Radiology workflows
 * at SMS Medical College, Jaipur, ensuring seamless operation in
 * lead-shielded Cath Labs and during hospital network outages.
 * 
 * Zero external dependencies. Safely handles SSR and Node.js environments.
 */

export const DB_NAME = "endoflow_offline_vault";
export const DB_VERSION = 1;

export type VaultStoreName = "cases" | "patients" | "schemes" | "sync_queue";

export interface SyncQueueItem<T = unknown> {
  id?: number;
  entityType: string;
  action: "create" | "update" | "delete" | "status_update" | "save" | string;
  payload: T;
  timestamp: number;
  retryCount?: number;
  caseId?: string;
  patientId?: string;
}

/**
 * Checks whether native IndexedDB is available in the current execution environment.
 */
export function isIndexedDbSupported(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof window.indexedDB !== "undefined" &&
    window.indexedDB !== null
  );
}

let dbInstance: IDBDatabase | null = null;
let dbPromise: Promise<IDBDatabase | null> | null = null;

/**
 * Opens or retrieves the cached singleton IDBDatabase connection.
 * Creates the required object stores on first initialization or version upgrade.
 */
export function getDatabase(): Promise<IDBDatabase | null> {
  if (!isIndexedDbSupported()) {
    return Promise.resolve(null);
  }

  if (dbInstance) {
    return Promise.resolve(dbInstance);
  }

  if (dbPromise) {
    return dbPromise;
  }

  dbPromise = new Promise<IDBDatabase | null>((resolve, reject) => {
    try {
      const request = window.indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (_event: IDBVersionChangeEvent) => {
        const db = request.result;

        // Store 1: cases (keyPath: id)
        if (!db.objectStoreNames.contains("cases")) {
          db.createObjectStore("cases", { keyPath: "id" });
        }

        // Store 2: patients (keyPath: id)
        if (!db.objectStoreNames.contains("patients")) {
          db.createObjectStore("patients", { keyPath: "id" });
        }

        // Store 3: schemes (keyPath: code)
        if (!db.objectStoreNames.contains("schemes")) {
          db.createObjectStore("schemes", { keyPath: "code" });
        }

        // Store 4: sync_queue (keyPath: id, autoIncrement: true)
        if (!db.objectStoreNames.contains("sync_queue")) {
          db.createObjectStore("sync_queue", { keyPath: "id", autoIncrement: true });
        }
      };

      request.onsuccess = () => {
        dbInstance = request.result;
        dbInstance.onclose = () => {
          dbInstance = null;
          dbPromise = null;
        };
        dbInstance.onversionchange = () => {
          dbInstance?.close();
          dbInstance = null;
          dbPromise = null;
        };
        resolve(dbInstance);
      };

      request.onerror = () => {
        dbPromise = null;
        reject(request.error || new Error("Failed to open IndexedDB"));
      };

      request.onblocked = () => {
        console.warn(`[IndexedDB] Database "${DB_NAME}" open request is blocked.`);
      };
    } catch (error) {
      dbPromise = null;
      reject(error);
    }
  });

  return dbPromise;
}

/**
 * Closes and resets the current active database connection (useful for test tear-downs).
 */
export function closeDatabase(): void {
  if (dbInstance) {
    dbInstance.close();
    dbInstance = null;
  }
  dbPromise = null;
}

/**
 * Retrieves a single record by primary key from an object store.
 * Returns null if the record does not exist or if running in an SSR/Node environment.
 */
export async function getRecord<T>(
  storeName: VaultStoreName | string,
  id: IDBValidKey
): Promise<T | null> {
  if (!isIndexedDbSupported()) return null;

  const db = await getDatabase();
  if (!db) return null;

  return new Promise<T | null>((resolve, reject) => {
    try {
      const transaction = db.transaction(storeName, "readonly");
      const store = transaction.objectStore(storeName);
      const request = store.get(id);

      request.onsuccess = () => {
        resolve((request.result as T) ?? null);
      };

      request.onerror = () => {
        reject(request.error);
      };
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Retrieves all records from an object store.
 * Returns an empty array if empty or if running in an SSR/Node environment.
 */
export async function getAllRecords<T>(
  storeName: VaultStoreName | string
): Promise<T[]> {
  if (!isIndexedDbSupported()) return [];

  const db = await getDatabase();
  if (!db) return [];

  return new Promise<T[]>((resolve, reject) => {
    try {
      const transaction = db.transaction(storeName, "readonly");
      const store = transaction.objectStore(storeName);
      const request = store.getAll();

      request.onsuccess = () => {
        resolve((request.result as T[]) || []);
      };

      request.onerror = () => {
        reject(request.error);
      };
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Stores or updates a single record in an object store.
 * Resolves gracefully without error in an SSR/Node environment.
 */
export async function putRecord<T>(
  storeName: VaultStoreName | string,
  record: T
): Promise<void> {
  if (!isIndexedDbSupported()) return;

  const db = await getDatabase();
  if (!db) return;

  return new Promise<void>((resolve, reject) => {
    try {
      const transaction = db.transaction(storeName, "readwrite");
      const store = transaction.objectStore(storeName);
      const request = store.put(record);

      transaction.oncomplete = () => {
        resolve();
      };

      transaction.onerror = () => {
        reject(transaction.error || request.error);
      };

      transaction.onabort = () => {
        reject(transaction.error || new Error("Transaction aborted"));
      };
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Stores or updates multiple records in an object store using a single transaction.
 * Resolves gracefully without error in an SSR/Node environment.
 */
export async function putRecords<T>(
  storeName: VaultStoreName | string,
  records: T[]
): Promise<void> {
  if (!isIndexedDbSupported() || !records || records.length === 0) return;

  const db = await getDatabase();
  if (!db) return;

  return new Promise<void>((resolve, reject) => {
    try {
      const transaction = db.transaction(storeName, "readwrite");
      const store = transaction.objectStore(storeName);

      for (const record of records) {
        store.put(record);
      }

      transaction.oncomplete = () => {
        resolve();
      };

      transaction.onerror = () => {
        reject(transaction.error);
      };

      transaction.onabort = () => {
        reject(transaction.error || new Error("Transaction aborted"));
      };
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Deletes a single record by primary key from an object store.
 * Resolves gracefully without error in an SSR/Node environment.
 */
export async function deleteRecord(
  storeName: VaultStoreName | string,
  id: IDBValidKey
): Promise<void> {
  if (!isIndexedDbSupported()) return;

  const db = await getDatabase();
  if (!db) return;

  return new Promise<void>((resolve, reject) => {
    try {
      const transaction = db.transaction(storeName, "readwrite");
      const store = transaction.objectStore(storeName);
      store.delete(id);

      transaction.oncomplete = () => {
        resolve();
      };

      transaction.onerror = () => {
        reject(transaction.error);
      };

      transaction.onabort = () => {
        reject(transaction.error || new Error("Transaction aborted"));
      };
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Clears all records from an object store.
 * Resolves gracefully without error in an SSR/Node environment.
 */
export async function clearStore(
  storeName: VaultStoreName | string
): Promise<void> {
  if (!isIndexedDbSupported()) return;

  const db = await getDatabase();
  if (!db) return;

  return new Promise<void>((resolve, reject) => {
    try {
      const transaction = db.transaction(storeName, "readwrite");
      const store = transaction.objectStore(storeName);
      store.clear();

      transaction.oncomplete = () => {
        resolve();
      };

      transaction.onerror = () => {
        reject(transaction.error);
      };

      transaction.onabort = () => {
        reject(transaction.error || new Error("Transaction aborted"));
      };
    } catch (error) {
      reject(error);
    }
  });
}

export const indexedDbService = {
  isIndexedDbSupported,
  getDatabase,
  closeDatabase,
  getRecord,
  getAllRecords,
  putRecord,
  putRecords,
  deleteRecord,
  clearStore,
};

export default indexedDbService;
