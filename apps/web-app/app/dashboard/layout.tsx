"use client";

import React, { useState, useEffect } from "react";
import { GoogleSidebar } from "../components/GoogleSidebar";
import { DataToolsModal } from "../components/DataToolsModal";
import { GoogleHeader } from "../components/shell/GoogleHeader";
import { SessionTimeoutModal } from "../components/SessionTimeoutModal";
import { CommandMenu } from "../components/command-menu";
import { MobileBottomNav } from "../components/shell/MobileBottomNav";
import { WorkspaceTabs } from "../components/shell/WorkspaceTabs";
import { VersionNotification } from "./components/VersionNotification";
import { UniversalDataSync } from "./components/UniversalDataSync";
import { useSession } from "next-auth/react";
import { getStaffAccountByCode, type StaffAccount, type StaffTier } from "../lib/staffAccounts";
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
  const { data: session, status } = useSession();

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
    if (status === "loading") return;
    const user = session?.user;
    const code = user?.roleCode?.toUpperCase() || "";
    const tier = user?.roleTier?.toUpperCase() || "";

    if (!user || !code) {
      // In clinical workstations, retain patient dataset and hydrate from remembered staff code if available
      const remembered = typeof window !== "undefined" ? localStorage.getItem("vascule_last_staff_code") || "DM01" : "DM01";
      const fallbackAccount = getStaffAccountByCode(remembered) || getStaffAccountByCode("DM01");
      if (fallbackAccount && !currentStaff) {
        setCurrentStaff(fallbackAccount);
      }
      return;
    }

    const staffTier: StaffTier = tier === "FACULTY" || code.startsWith("FC")
      ? "FACULTY"
      : tier === "FELLOW" || code.startsWith("DM")
        ? "DM_RESIDENT"
        : tier === "RESIDENT" || tier === "SENIOR_RESIDENT" || code.startsWith("SR")
          ? "SENIOR_RESIDENT"
          : tier === "NURSING" || code.startsWith("NO")
            ? "NURSING_OFFICER"
            : tier === "TECHNICIAN" || code.startsWith("TC")
              ? "CATHLAB_TECHNICIAN"
              : "SYSTEM_ADMINISTRATOR";
    const staffRole: StaffAccount["role"] = staffTier === "CATHLAB_TECHNICIAN"
      ? "TECHNICIAN"
      : staffTier === "NURSING_OFFICER"
        ? "NURSE"
        : staffTier === "SYSTEM_ADMINISTRATOR"
          ? "ADMIN"
          : "DOCTOR";

    setCurrentStaff({
      code,
      name: user.name || user.email || "Staff",
      email: user.email || undefined,
      role: staffRole,
      tier: staffTier,
      title: tier || "Clinical Staff",
      department: user.department || "",
      avatar: (user.name || "S").slice(0, 2).toUpperCase(),
      isActive: true,
    });
  }, [session, status, setCurrentStaff]);

  const containerBg = isCathLabDark
    ? "dark bg-slate-950 text-slate-100"
    : "bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100";

  return (
    <div className={`h-dvh overflow-hidden overflow-x-hidden ${isCathLabDark ? "dark " : ""}${containerBg} flex flex-col font-sans antialiased`}>
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
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-2 sm:p-3 lg:p-4 pb-20 md:pb-6 relative print:p-0 print:m-0 print:bg-white print:overflow-visible print:h-auto print:block flex flex-col">
          <WorkspaceTabs />
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
