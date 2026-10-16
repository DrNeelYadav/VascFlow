"use client";

import React, { useState, useRef, useEffect } from "react";
import { Lock, LogOut, KeyRound } from "lucide-react";
import type { StaffAccount } from "../../lib/staffAccounts";

interface HeaderUserDropdownProps {
  currentStaff: StaffAccount | null;
  onLockStation?: () => void;
  onOpenChangePassword: () => void;
  onLogout: () => void;
}

export function HeaderUserDropdown({
  currentStaff,
  onLockStation,
  onOpenChangePassword,
  onLogout,
}: HeaderUserDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 touch-manipulation min-h-[44px] min-w-[44px]"
        aria-label="User account menu"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div
          className="w-8 h-8 rounded-full bg-blue-600 text-white dark:bg-sky-500 dark:text-slate-950 flex items-center justify-center font-mono font-bold text-xs select-none hover:ring-2 hover:ring-blue-400 transition-all shrink-0 shadow-2xs"
          title={currentStaff ? `${currentStaff.name} (${currentStaff.title})` : "Dr. Neel Yadav (DM Resident)"}
        >
          DR
        </div>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-64 max-w-[calc(100vw-1.5rem)] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100"
          role="menu"
          aria-orientation="vertical"
        >
          {/* User identity: Name, email/badge, role */}
          <div className="px-3.5 py-2.5 border-b border-slate-100 dark:border-slate-800">
            <div className="font-semibold text-xs text-slate-900 dark:text-slate-100 truncate">
              {currentStaff?.name || "Dr. Neel Yadav"}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
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
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenChangePassword();
              }}
              className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              role="menuitem"
            >
              <KeyRound className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>Change PIN / Password</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
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
                setIsOpen(false);
                onLogout();
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
  );
}
