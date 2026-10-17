/**
 * VascFlow Offline Sync Engine & Background Reconciliation Worker
 * 
 * Synchronizes local IndexedDB changes with backend endpoints when online.
 * Automatically recovers from hospital network drops, mobile cell tower handovers,
 * and cath-lab RF shielding interference.
 */

import {
  getAllRecords,
  deleteRecord,
  SyncQueueItem,
  isIndexedDbSupported,
} from "../services/indexedDbService";

export type SyncState = "idle" | "syncing" | "offline" | "error";

export interface SyncStatusInfo {
  state: SyncState;
  pendingCount: number;
  lastSyncedAt: Date | null;
  lastError: string | null;
}

type SyncListener = (info: SyncStatusInfo) => void;

class OfflineSyncWorker {
  private isRunning = false;
  private listeners = new Set<SyncListener>();
  private statusInfo: SyncStatusInfo = {
    state: typeof navigator !== "undefined" && !navigator.onLine ? "offline" : "idle",
    pendingCount: 0,
    lastSyncedAt: null,
    lastError: null,
  };
  private timerId: NodeJS.Timeout | null = null;

  constructor() {
    if (typeof window !== "undefined") {
      window.addEventListener("online", () => {
        this.updateStatus({ state: "idle", lastError: null });
        void this.flushQueue();
      });
      window.addEventListener("offline", () => {
        this.updateStatus({ state: "offline" });
      });
      // Start background heartbeat sync every 20 seconds
      this.timerId = setInterval(() => {
        if (navigator.onLine && !this.isRunning) {
          void this.flushQueue();
        }
      }, 20000);
      // Run initial check
      setTimeout(() => void this.refreshPendingCount(), 1000);
    }
  }

  public subscribe(listener: SyncListener): () => void {
    this.listeners.add(listener);
    listener(this.statusInfo);
    return () => this.listeners.delete(listener);
  }

  private updateStatus(patch: Partial<SyncStatusInfo>): void {
    this.statusInfo = { ...this.statusInfo, ...patch };
    this.listeners.forEach((listener) => {
      try {
        listener(this.statusInfo);
      } catch (err) {
        console.warn("[offlineSyncWorker] Listener notification failed:", err);
      }
    });
  }

  public async refreshPendingCount(): Promise<number> {
    if (!isIndexedDbSupported()) return 0;
    try {
      const items = await getAllRecords<SyncQueueItem>("sync_queue");
      const count = items.length;
      this.updateStatus({ pendingCount: count });
      return count;
    } catch {
      return 0;
    }
  }

  public async flushQueue(): Promise<void> {
    if (this.isRunning || !isIndexedDbSupported()) return;
    if (typeof navigator !== "undefined" && !navigator.onLine) {
      this.updateStatus({ state: "offline" });
      return;
    }

    this.isRunning = true;
    try {
      const queue = await getAllRecords<SyncQueueItem>("sync_queue");
      if (!queue || queue.length === 0) {
        this.updateStatus({ state: "idle", pendingCount: 0 });
        this.isRunning = false;
        return;
      }

      this.updateStatus({ state: "syncing", pendingCount: queue.length });

      for (const item of queue) {
        const success = await this.processItem(item);
        if (success) {
          if (item.id !== undefined) {
            await deleteRecord("sync_queue", item.id);
          }
        } else {
          // Network interruption or permanent failure: halt batch to preserve order
          break;
        }
      }

      const remaining = await getAllRecords<SyncQueueItem>("sync_queue");
      this.updateStatus({
        state: "idle",
        pendingCount: remaining.length,
        lastSyncedAt: new Date(),
        lastError: null,
      });
    } catch (err: any) {
      console.warn("[offlineSyncWorker] Queue flush encountered error:", err);
      this.updateStatus({
        state: "error",
        lastError: err?.message || "Sync reconciliation failed",
      });
    } finally {
      this.isRunning = false;
    }
  }

  private async processItem(item: SyncQueueItem): Promise<boolean> {
    try {
      let endpoint = "/api/cases";
      let method = "POST";
      let payload = item.payload;

      if (item.entityType === "cases") {
        if (item.action === "status_update" && item.caseId) {
          endpoint = `/api/cases/${encodeURIComponent(item.caseId)}/status`;
          method = "PATCH";
        } else {
          endpoint = "/api/cases";
          method = "POST";
        }
      } else if (item.entityType === "patients") {
        endpoint = "/api/patients";
        method = "POST";
      }

      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      // 200, 201 (Created), or 409 (Conflict - already applied)
      if (res.ok || res.status === 409) {
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }

  public getStatus(): SyncStatusInfo {
    return this.statusInfo;
  }
}

// Global Singleton Instance
export const offlineSyncWorker = new OfflineSyncWorker();
