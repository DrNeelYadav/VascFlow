"use client";

import React, { useState, useEffect } from "react";
import { GoogleSidebar } from "../components/GoogleSidebar";
import { DataToolsModal } from "../components/DataToolsModal";
import { GoogleHeader } from "../components/shell/GoogleHeader";
import { SessionTimeoutModal } from "../components/SessionTimeoutModal";
import { CommandMenu } from "../components/command-menu";
import { MobileBottomNav } from "../components/shell/MobileBottomNav";
import { VersionNotification } from "./components/VersionNotification";
import { UniversalDataSync } from "./components/UniversalDataSync";
import { persistStaffSession, getPersistedStaffSession } from "../lib/auth/sessionPersistence";
import { useEndoflowStore } from "./useEndoflowStore";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showDataTools, setShowDataTools] = useState<boolean>(false);
  const [isBedsideLocked, setIsBedsideLocked] = useState<boolean>(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);
  const [isCathLabDark, setIsCathLabDark] = useState<boolean>(false);

  const currentStaff = useEndoflowStore((s) => s.currentStaff);
  const setCurrentStaff = useEndoflowStore((s) => s.setCurrentStaff);

  useEffect(() => {
    try {
      const savedDark = localStorage.getItem("endoflow_dark_mode");
      if (savedDark !== null) {
        setIsCathLabDark(savedDark === "true");
      } else if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setIsCathLabDark(true);
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("endoflow_dark_mode", String(isCathLabDark));
      if (typeof document !== "undefined") {
        if (isCathLabDark) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    } catch {}
  }, [isCathLabDark]);

  useEffect(() => {
    try {
      const persisted = getPersistedStaffSession();
      if (persisted && persisted.code) {
        if (!currentStaff || currentStaff.code !== persisted.code) {
          setCurrentStaff(persisted);
        }
        persistStaffSession(persisted, { rememberMe: true });
      } else if (currentStaff) {
        persistStaffSession(currentStaff, { rememberMe: true });
      }
    } catch {}
  }, []);

  const containerBg = isCathLabDark
    ? "dark bg-[#09090b] text-slate-100"
    : "bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100";

  return (
    <div className={`h-[100dvh] overflow-hidden ${isCathLabDark ? "dark " : ""}${containerBg} flex flex-col font-sans antialiased`}>
      {/* Google Workspace Header with Pill Search Bar & Bedside Lock */}
      <div className="print:hidden">
        <GoogleHeader
          onOpenDataTools={() => setShowDataTools(true)}
          onLockStation={() => setIsBedsideLocked(true)}
          onToggleMobileSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          isCathLabDark={isCathLabDark}
          onToggleCathLabDark={() => setIsCathLabDark((prev) => !prev)}
        />
      </div>

      {/* Main Workspace with GoogleSidebar */}
      <div className="flex-1 flex overflow-hidden print:overflow-visible print:block print:h-auto">
        <div className="print:hidden">
          <GoogleSidebar
            onOpenDataTools={() => setShowDataTools(true)}
            isMobileOpen={isMobileSidebarOpen}
            onCloseMobile={() => setIsMobileSidebarOpen(false)}
          />
        </div>
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-2 sm:p-3 lg:p-4 pb-20 md:pb-4 relative print:p-0 print:m-0 print:bg-white print:overflow-visible print:h-auto print:block flex flex-col">
          {children}
        </main>
      </div>

      {/* Mobile Bottom Navigation Dock */}
      <div className="print:hidden">
        <MobileBottomNav onToggleMore={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)} />
      </div>

      {/* Data Tools Modal */}
      <DataToolsModal isOpen={showDataTools} onClose={() => setShowDataTools(false)} />

      {/* Bedside Quick Lock / Session Timeout Modal */}
      <SessionTimeoutModal
        isOpen={isBedsideLocked}
        onClose={() => setIsBedsideLocked(false)}
        onUnlocked={() => setIsBedsideLocked(false)}
      />

      {/* Centralized Global Command Menu (Cmd+K) */}
      <CommandMenu onLockBedside={() => setIsBedsideLocked(true)} />

      {/* Auto-detect new Vercel deployments */}
      <VersionNotification />

      {/* Real-time multi-device cloud synchronization listener */}
      <UniversalDataSync />
    </div>
  );
}
