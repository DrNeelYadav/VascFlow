"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { useEndoflowStore } from "../../dashboard/useEndoflowStore";
import { EndoFlowLogo } from "../EndoFlowLogo";
import { Search, X, Lock, LogOut, Menu, Moon, KeyRound } from "lucide-react";
import { ChangePasswordModal } from "../ChangePasswordModal";
import { clearStaffSession } from "../../lib/auth/sessionPersistence";

export function GoogleHeader({
  onOpenDataTools,
  onLockStation,
  onToggleMobileSidebar,
  isCathLabDark,
  onToggleCathLabDark,
}: {
  onOpenDataTools?: () => void;
  onLockStation?: () => void;
  onToggleMobileSidebar?: () => void;
  isCathLabDark?: boolean;
  onToggleCathLabDark?: () => void;
}) {
  const router = useRouter();
  const currentStaff = useEndoflowStore((s) => s.currentStaff);
  const setCurrentStaff = useEndoflowStore((s) => s.setCurrentStaff);

  const [searchQuery, setSearchQuery] = useState("");
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDropdownOpen]);

  const handleLogout = async () => {
    try {
      setCurrentStaff(null);
      useEndoflowStore.setState({
        patients: [],
        beds: [],
        bookedCases: [],
        ctReviews: [],
        dopplerRecords: [],
      });
      clearStaffSession();
      localStorage.removeItem("endoflow_staff_session");
      await signOut({ redirect: false });
    } catch {}
    router.replace("/");
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const q = searchQuery.toLowerCase().trim();
    if (q.includes("drug") || q.includes("prot") || q.includes("tace") || q.includes("heparin")) {
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
    <header className="sticky top-0 z-40 w-full h-12 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-3 sm:px-4 select-none flex items-center justify-between gap-3 text-slate-900 dark:text-slate-100">
      {/* Left: VascFlow / EndoFlow Logo Mark + Active Department Dropdown */}
      <div className="flex items-center gap-2.5 shrink-0">
        <button
          type="button"
          onClick={onToggleMobileSidebar}
          className="p-1 -ml-1 rounded text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800 transition md:hidden cursor-pointer"
          aria-label="Toggle navigation drawer"
        >
          <Menu className="w-5 h-5" />
        </button>

        <Link href="/dashboard" className="flex items-center">
          <EndoFlowLogo
            size="sm"
            showSubtitle={false}
            theme={isCathLabDark ? "light" : "dark"}
          />
        </Link>
      </div>

      {/* Center: Compact Global Patient Search (Cmd + K, max 360px) */}
      <div className="flex-1 max-w-[360px] mx-auto min-w-0">
        <form
          onSubmit={handleSearchSubmit}
          className="relative flex items-center w-full h-8 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200/70 dark:hover:bg-slate-700/70 focus-within:bg-white dark:focus-within:bg-slate-900 focus-within:ring-1 focus-within:ring-slate-400 border border-transparent focus-within:border-slate-300 dark:focus-within:border-slate-700 transition-all px-2.5"
        >
          <Search className="w-3.5 h-3.5 text-slate-400 shrink-0 mr-2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search patients, CR..."
            className="w-full bg-transparent text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none min-w-0"
          />
          {searchQuery ? (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="p-0.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block px-1 py-0.2 text-[10px] font-mono text-slate-400 dark:text-slate-500 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded shrink-0">
              ⌘K
            </kbd>
          )}
        </form>
      </div>

      {/* Right: Actions, Status Dot, Shift Profile Avatar & Settings */}
      <div className="flex items-center gap-1.5 shrink-0">
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

        {/* User Avatar & Dropdown Menu */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="flex items-center gap-2 p-0.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            aria-label="User account menu"
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
          >
            <div
              className="w-7 h-7 rounded-full bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 flex items-center justify-center font-mono font-semibold text-[11px] select-none hover:ring-2 hover:ring-blue-500/50 transition-all shrink-0"
              title={currentStaff ? `${currentStaff.name} (${currentStaff.title})` : "Dr. Neel Yadav (DM Resident)"}
            >
              {currentStaff?.avatar || "NY"}
            </div>
            <span className="hidden sm:inline-block text-xs font-medium text-slate-700 dark:text-slate-300 max-w-[160px] truncate pr-1">
              {currentStaff?.email || "dr.neel@sms.rajasthan.gov.in"}
            </span>
          </button>

          {isDropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100"
              role="menu"
              aria-orientation="vertical"
            >
              {/* User identity: Name, email/badge, role */}
              <div className="px-3.5 py-2.5 border-b border-slate-100 dark:border-slate-800">
                <div className="font-semibold text-xs text-slate-900 dark:text-slate-100 truncate">
                  {currentStaff?.name || "Dr. Neel Yadav"}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                  {currentStaff?.email || "dr.neel@sms.rajasthan.gov.in"}
                </div>
                <div className="mt-1.5 flex items-center gap-1.5">
                  <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-medium uppercase tracking-wide bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                    {currentStaff?.role || "DOCTOR"}
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                    {currentStaff?.title || "DM Resident"} • {currentStaff?.code || "DM01"}
                  </span>
                </div>
              </div>

              {/* Options */}
              <div className="py-1">
                {/* Change PIN / Password */}
                <button
                  type="button"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setShowChangePasswordModal(true);
                  }}
                  className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                  role="menuitem"
                >
                  <KeyRound className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Change PIN / Password</span>
                </button>

                {/* Lock Station */}
                <button
                  type="button"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    if (onLockStation) onLockStation();
                  }}
                  className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                  role="menuitem"
                >
                  <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Lock Station</span>
                </button>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800 my-1" />

              {/* Logout */}
              <div className="py-0.5">
                <button
                  type="button"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    handleLogout();
                  }}
                  className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition cursor-pointer"
                  role="menuitem"
                >
                  <LogOut className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400 shrink-0" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Change Password Modal for Residents & Staff */}
      <ChangePasswordModal
        isOpen={showChangePasswordModal}
        onClose={() => setShowChangePasswordModal(false)}
        defaultStaffCode={currentStaff?.code || "DM01"}
      />
    </header>
  );
}
