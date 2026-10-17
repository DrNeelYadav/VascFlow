"use client";

import { useState, useEffect, useCallback } from "react";
import { offlineSyncWorker, SyncStatusInfo } from "./offlineSyncWorker";

/**
 * React hook exposing live synchronization status and manual trigger
 * for multi-device catheterization lab synchronization.
 */
export function useOfflineSync() {
  const [syncInfo, setSyncInfo] = useState<SyncStatusInfo>(() =>
    offlineSyncWorker.getStatus()
  );

  useEffect(() => {
    const unsubscribe = offlineSyncWorker.subscribe((info) => {
      setSyncInfo(info);
    });
    return unsubscribe;
  }, []);

  const triggerSync = useCallback(() => {
    void offlineSyncWorker.flushQueue();
  }, []);

  return {
    state: syncInfo.state,
    pendingCount: syncInfo.pendingCount,
    lastSyncedAt: syncInfo.lastSyncedAt,
    lastError: syncInfo.lastError,
    triggerSync,
    isOnline: syncInfo.state !== "offline",
    isSyncing: syncInfo.state === "syncing",
  };
}
