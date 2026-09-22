"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEndoflowStore } from "../../dashboard/useEndoflowStore";
import { EndoFlowLogo } from "../EndoFlowLogo";
import { Search, Plus, X, Lock, LogOut, ShieldCheck, Menu, Settings, Columns2, Moon } from "lucide-react";

export function GoogleHeader({
  onOpenDataTools,
  onLockStation,
  onToggleMobileSidebar,
  isDualPane,
  onToggleDualPane,
  isCathLabDark,
  onToggleCathLabDark,
}: {
  onOpenDataTools?: () => void;
  onLockStation?: () => void;
  onToggleMobileSidebar?: () => void;
  isDualPane?: boolean;
  onToggleDualPane?: () => void;
  isCathLabDark?: boolean;
  onToggleCathLabDark?: () => void;
}) {
  const router = useRouter();
  const currentStaff = useEndoflowStore((s) => s.currentStaff);
  const setCurrentStaff = useEndoflowStore((s) => s.setCurrentStaff);

  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    try {
      setCurrentStaff(null as any);
      localStorage.removeItem("vascule_staff_session");
      localStorage.removeItem("endoflow_staff_session");
      document.cookie = "vascule_token=; path=/; max-age=0";
      document.cookie = "endoflow_token=; path=/; max-age=0";
      document.cookie = "authjs.session-token=; path=/; max-age=0";
    } catch {}
    router.push("/");
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const q = searchQuery.toLowerCase().trim();
    if (q.includes("calc") || q.includes("meld") || q.includes("macd") || q.includes("rotterdam")) {
      router.push(`/dashboard/calculators?calc=${encodeURIComponent(q)}`);
    } else if (q.includes("drug") || q.includes("prot") || q.includes("tace") || q.includes("heparin")) {
      router.push(`/dashboard/protocols`);
    } else if (q.includes("census") || q.includes("registry")) {
      router.push(`/dashboard/census`);
    } else if (q.includes("discharge")) {
      router.push(`/dashboard/discharge`);
    } else {
      router.push(`/dashboard/worklist`);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full h-12 bg-white border-b border-slate-200 px-3 sm:px-4 select-none flex items-center justify-between gap-3">
      {/* Left: VascFlow / EndoFlow Logo Mark + Active Department Dropdown */}
      <div className="flex items-center gap-2.5 shrink-0">
        <button
          type="button"
          onClick={onToggleMobileSidebar}
          className="p-1 -ml-1 rounded text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition md:hidden cursor-pointer"
          aria-label="Toggle navigation drawer"
        >
          <Menu className="w-5 h-5" />
        </button>

        <Link href="/dashboard" className="flex items-center">
          <EndoFlowLogo size="sm" showSubtitle={false} />
        </Link>
      </div>

      {/* Center: Compact Global Patient Search (Cmd + K, max 360px) */}
      <div className="flex-1 max-w-[360px] mx-auto min-w-0">
        <form
          onSubmit={handleSearchSubmit}
          className="relative flex items-center w-full h-8 rounded-md bg-slate-100 hover:bg-slate-200/70 focus-within:bg-white focus-within:ring-1 focus-within:ring-slate-400 border border-transparent focus-within:border-slate-300 transition-all px-2.5"
        >
          <Search className="w-3.5 h-3.5 text-slate-400 shrink-0 mr-2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search patients, CR..."
            className="w-full bg-transparent text-xs text-slate-900 placeholder-slate-400 focus:outline-none min-w-0"
          />
          {searchQuery ? (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="p-0.5 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block px-1 py-0.2 text-[10px] font-mono text-slate-400 bg-white border border-slate-200 rounded shrink-0">
              ⌘K
            </kbd>
          )}
        </form>
      </div>

      {/* Right: Actions, Status Dot, Shift Profile Avatar & Settings */}
      <div className="flex items-center gap-1.5 shrink-0">
        {/* Dual-Pane Toggle (Desktop Only) */}
        <button
          type="button"
          onClick={onToggleDualPane}
          title="Toggle Dual-Pane Cockpit (Cmd+\)"
          className={`hidden md:flex p-1.5 rounded transition cursor-pointer items-center gap-1 text-xs font-medium ${
            isDualPane
              ? "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300"
              : "text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800"
          }`}
        >
          <Columns2 className="w-3.5 h-3.5" />
          <span className="hidden xl:inline text-[11px] font-mono">Dual-Pane</span>
        </button>

        {/* Cath-Lab Procedural Dimmed Dark Mode */}
        <button
          type="button"
          onClick={onToggleCathLabDark}
          title="Cath-Lab Dimmed Display Mode"
          className={`p-1.5 rounded transition cursor-pointer ${
            isCathLabDark
              ? "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300"
              : "text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800"
          }`}
        >
          <Moon className="w-3.5 h-3.5" />
        </button>

        {/* Admit Shortcut */}
        <Link
          href="/dashboard/calendar?action=new"
          className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium transition cursor-pointer"
        >
          <Plus className="w-3 h-3" />
          <span>Admit</span>
        </Link>

        {/* Lock Station Icon */}
        <button
          type="button"
          onClick={() => {
            if (onLockStation) onLockStation();
          }}
          title="Lock Bedside Station"
          className="p-1.5 rounded text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer"
        >
          <Lock className="w-3.5 h-3.5" />
        </button>

        {/* Active Shift Profile Avatar */}
        <div
          className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center font-mono font-semibold text-[11px] select-none cursor-pointer"
          title={currentStaff ? `${currentStaff.name} (${currentStaff.title})` : "Dr. Neel Yadav (DM Resident)"}
        >
          {currentStaff ? currentStaff.avatar : "DM"}
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          title="Sign out"
          className="p-1.5 rounded text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer"
          aria-label="Logout"
        >
          <LogOut className="w-3.5 h-3.5" />
        </button>
      </div>
    </header>
  );
}
