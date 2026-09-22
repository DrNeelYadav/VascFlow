"use client";

import React, { useEffect, useState } from "react";
import { RefreshCw, Sparkles, X } from "lucide-react";

export function VersionNotification() {
  const [hasNewVersion, setHasNewVersion] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [initialVersion, setInitialVersion] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    // Check version immediately on mount
    fetch("/api/version", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!isMounted || !data?.version) return;
        setInitialVersion(data.version);
      })
      .catch(() => {});

    // Poll periodically every 2 minutes in background
    const interval = setInterval(() => {
      fetch("/api/version", { cache: "no-store" })
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (!isMounted || !data?.version) return;
          if (initialVersion && data.version !== initialVersion) {
            setHasNewVersion(true);
          }
        })
        .catch(() => {});
    }, 120000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [initialVersion]);

  if (!hasNewVersion || dismissed) return null;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 max-w-sm animate-in fade-in slide-in-from-bottom-3 duration-300">
      <div className="bg-[#1C1C1E] text-white p-3.5 rounded-2xl shadow-xl border border-white/10 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-[#007AFF]/20 text-[#007AFF] flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-semibold tracking-tight truncate">Clinical Update Live</div>
            <div className="text-[11px] text-zinc-400 truncate">Reload to load latest workstation</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => window.location.reload()}
            className="px-2.5 py-1.5 bg-[#007AFF] hover:bg-[#0062CC] text-white rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Reload</span>
          </button>
          <button
            onClick={() => setDismissed(true)}
            className="p-1 text-zinc-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            aria-label="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
