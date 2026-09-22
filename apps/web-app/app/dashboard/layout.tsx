"use client";

import React, { useState, useEffect } from "react";
import { GoogleSidebar } from "../components/GoogleSidebar";
import { DataToolsModal } from "../components/DataToolsModal";
import { GoogleHeader } from "../components/shell/GoogleHeader";
import { SessionTimeoutModal } from "../components/SessionTimeoutModal";
import { CommandMenu } from "../components/command-menu";
import { DualPaneWorkspace } from "./components/DualPaneWorkspace";
import { MobileBottomNav } from "../components/shell/MobileBottomNav";
import { VersionNotification } from "./components/VersionNotification";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showDataTools, setShowDataTools] = useState<boolean>(false);
  const [isBedsideLocked, setIsBedsideLocked] = useState<boolean>(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);
  const [isDualPane, setIsDualPane] = useState<boolean>(false);
  const [isCathLabDark, setIsCathLabDark] = useState<boolean>(false);

  // Keyboard shortcut listener (Cmd + \ or Ctrl + \ for Dual-Pane toggle)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "\\" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsDualPane((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem("vascule_staff_session");
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed && parsed.code) {
            document.cookie = `vascule_token=auth_${parsed.code}_${Date.now()}; path=/; max-age=86400; SameSite=Lax`;
            document.cookie = `authjs.session-token=mock_session_${parsed.code}; path=/; max-age=86400; SameSite=Lax`;
          }
        }
      }
    } catch {}
  }, []);

  const containerBg = isCathLabDark
    ? "bg-[#09090b] text-slate-100"
    : "bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100";

  return (
    <div className={`h-[100dvh] overflow-hidden ${containerBg} flex flex-col font-sans antialiased`}>
      {/* Google Workspace Header with Pill Search Bar, Dual-Pane & Bedside Lock */}
      <div className="print:hidden">
        <GoogleHeader
          onOpenDataTools={() => setShowDataTools(true)}
          onLockStation={() => setIsBedsideLocked(true)}
          onToggleMobileSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          isDualPane={isDualPane}
          onToggleDualPane={() => setIsDualPane((prev) => !prev)}
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
        {isDualPane ? (
          <main className="flex-1 overflow-hidden relative print:p-0 print:m-0 print:bg-white print:overflow-visible print:h-auto print:block flex flex-col">
            <DualPaneWorkspace>{children}</DualPaneWorkspace>
          </main>
        ) : (
          <main className="flex-1 overflow-y-auto overflow-x-hidden p-2 sm:p-3 lg:p-4 pb-20 md:pb-4 relative print:p-0 print:m-0 print:bg-white print:overflow-visible print:h-auto print:block flex flex-col">
            {children}
          </main>
        )}
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
    </div>
  );
}
