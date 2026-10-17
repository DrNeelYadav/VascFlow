"use client";

import React from "react";
import { RefreshCw, Wifi, WifiOff } from "lucide-react";
import { useOfflineSync } from "@/app/lib/sync/useOfflineSync";

export const MultiDeviceSyncBadge: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const { state, pendingCount, triggerSync, isSyncing, isOnline } = useOfflineSync();

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-mono border transition-all ${
        !isOnline
          ? "bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800 text-amber-700 dark:text-amber-300"
          : isSyncing
          ? "bg-blue-50 dark:bg-blue-950/40 border-blue-300 dark:border-blue-800 text-blue-700 dark:text-blue-300"
          : "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300"
      } ${className}`}
      title={
        !isOnline
          ? "Offline: Changes buffered in local IndexedDB vault"
          : isSyncing
          ? `Syncing ${pendingCount} mutations with Cath-Lab cloud`
          : "Live multi-device cloud synchronization active"
      }
    >
      <span className="relative flex h-2 w-2">
        {isSyncing && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
        )}
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            !isOnline ? "bg-amber-500" : isSyncing ? "bg-blue-500" : "bg-emerald-500"
          }`}
        />
      </span>

      <span className="font-semibold tracking-tight">
        {!isOnline
          ? pendingCount > 0 ? `Offline (${pendingCount})` : "Offline"
          : isSyncing
          ? `Syncing (${pendingCount})`
          : "Cloud Synced"}
      </span>

      <button
        type="button"
        onClick={triggerSync}
        disabled={isSyncing || !isOnline}
        aria-label="Flush sync queue"
        className="ml-0.5 hover:opacity-80 active:scale-95 disabled:opacity-40 transition-transform cursor-pointer"
      >
        <RefreshCw className={`w-3 h-3 ${isSyncing ? "animate-spin" : ""}`} />
      </button>
    </div>
  );
};
