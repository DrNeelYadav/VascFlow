"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { useEndoflowStore } from "../../dashboard/useEndoflowStore";
import { EndoFlowLogo } from "../EndoFlowLogo";
import { Search, X, Menu, Moon } from "lucide-react";
import { ChangePasswordModal } from "../ChangePasswordModal";
import { clearStaffSession } from "../../lib/auth/sessionPersistence";
import { ALL_MEMBER_HREFS, getWorkspaceForPath } from "../../lib/navigation";
import { HeaderUserDropdown } from "./HeaderUserDropdown";

interface GoogleHeaderProps {
  onOpenDataTools?: () => void;
  onLockStation?: () => void;
  onToggleMobileSidebar?: () => void;
  isCathLabDark?: boolean;
  onToggleCathLabDark?: () => void;
}

export function GoogleHeader({
  onLockStation,
  onToggleMobileSidebar,
  isCathLabDark,
  onToggleCathLabDark,
}: GoogleHeaderProps) {
  const router = useRouter();
  const currentStaff = useEndoflowStore((s) => s.currentStaff);
  const setCurrentStaff = useEndoflowStore((s) => s.setCurrentStaff);

  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);

  const handleLogout = async () => {
    try {
      setCurrentStaff(null);
      useEndoflowStore.setState({ patients: [], beds: [], bookedCases: [], ctReviews: [], dopplerRecords: [] });
      clearStaffSession();
      localStorage.removeItem("endoflow_staff_session");
      await signOut({ redirect: false });
    } catch {}
    router.replace("/");
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.toLowerCase().trim();
    if (!q) return;

    const hit = ALL_MEMBER_HREFS.find((href) => {
      const workspace = getWorkspaceForPath(href);
      if (!workspace) return false;
      const member = workspace.members.find((m) => m.href === href);
      if (!member) return false;
      const haystack = `${workspace.label} ${member.label} ${member.keywords ?? ""}`.toLowerCase();
      return q.split(/\s+/).every((term) => haystack.includes(term));
    });

    router.push(hit ?? "/dashboard/worklist");
  };

  return (
    <header className="sticky top-0 z-40 w-full h-12 bg-white/85 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 px-3 sm:px-4 select-none flex items-center justify-between gap-2 sm:gap-3 text-slate-900 dark:text-slate-100">
      {isMobileSearchOpen ? (
        <div className="flex items-center w-full gap-2 py-1">
          <form
            onSubmit={(e) => {
              handleSearchSubmit(e);
              setIsMobileSearchOpen(false);
            }}
            className="relative flex items-center flex-1 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 focus-within:bg-white dark:focus-within:bg-slate-900 border border-slate-300 dark:border-slate-700 px-3"
          >
            <Search className="w-4 h-4 text-slate-400 shrink-0 mr-2" />
            <input
              autoFocus
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search workspaces (schedule, consent, MELD)..."
              className="w-full bg-transparent text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none min-w-0"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                aria-label="Clear query"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </form>
          <button
            type="button"
            onClick={() => setIsMobileSearchOpen(false)}
            className="px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 touch-manipulation min-h-[44px] flex items-center justify-center cursor-pointer"
            aria-label="Cancel search"
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          {/* Left: EndoFlow Logo + Drawer Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <button
              type="button"
              onClick={onToggleMobileSidebar}
              className="p-2 -ml-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800 transition md:hidden cursor-pointer touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle navigation drawer"
            >
              <Menu className="w-5 h-5" />
            </button>

            <Link href="/dashboard" className="flex items-center gap-2 shrink-0 group">
              <EndoFlowLogo
                size="sm"
                showSubtitle={false}
                theme={isCathLabDark ? "light" : "dark"}
              />
            </Link>
          </div>

          {/* Center: Global Search Bar */}
          <div className="hidden sm:flex flex-1 max-w-[320px] mx-auto min-w-0">
            <form
              onSubmit={handleSearchSubmit}
              className="relative flex items-center w-full h-8 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200/70 dark:hover:bg-slate-700/70 focus-within:bg-white dark:focus-within:bg-slate-900 focus-within:ring-1 focus-within:ring-slate-400 border border-transparent focus-within:border-slate-300 dark:focus-within:border-slate-700 transition-all px-2.5"
            >
              <Search className="w-3.5 h-3.5 text-slate-400 shrink-0 mr-2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search workspaces (schedule, consent, MELD)..."
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

          {/* Right: Search, Cath-Lab Mode, User Avatar */}
          <div className="flex items-center gap-1 shrink-0">
            <button
              type="button"
              onClick={() => setIsMobileSearchOpen(true)}
              className="sm:hidden p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800 transition cursor-pointer touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Open search"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onToggleCathLabDark}
              title="Cath-Lab Dimmed Display Mode"
              className={`p-1.5 rounded-lg transition cursor-pointer touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center ${
                isCathLabDark
                  ? "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300"
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800"
              }`}
              aria-label="Toggle Cath-Lab Dimmed Display Mode"
            >
              <Moon className="w-4 h-4" />
            </button>

            <HeaderUserDropdown
              currentStaff={currentStaff}
              onLockStation={onLockStation}
              onOpenChangePassword={() => setShowChangePasswordModal(true)}
              onLogout={handleLogout}
            />
          </div>
        </>
      )}

      <ChangePasswordModal
        isOpen={showChangePasswordModal}
        onClose={() => setShowChangePasswordModal(false)}
        defaultStaffCode={currentStaff?.code || "DM01"}
      />
    </header>
  );
}
