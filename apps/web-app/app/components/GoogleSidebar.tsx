"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEndoflowStore } from "../dashboard/useEndoflowStore";
import { SidebarWorkspaceItem } from "./shell/SidebarWorkspaceItem";
import {
  WORKSPACES,
  ADMIN_ENTRY,
  isWorkspaceActive,
  type Workspace,
} from "../lib/navigation";
import { isNeelYadavUser } from "../lib/auth-guards";
import { WorkspaceIcon } from "./shell/WorkspaceIcon";

/**
 * Desktop sidebar. Renders the workspace registry from `lib/navigation`, so it
 * can never drift from the mobile dock, the command palette or the tab bar.
 */
export function GoogleSidebar({
  isMobileOpen = false,
  onCloseMobile,
}: {
  onOpenBookingModal?: () => void;
  onOpenDataTools?: () => void;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const currentStaff = useEndoflowStore((s) => s.currentStaff);
  const ctReviews = useEndoflowStore((s) => s.ctReviews);
  const bookedCases = useEndoflowStore((s) => s.bookedCases);

  const pendingReviewsCount = ctReviews.filter((r) => r.status === "Pending Review").length;
  const bookedCasesCount = bookedCases.filter((c) => c.status !== "Completed").length;

  /** Live counters keyed by workspace id. Absent key means no badge. */
  const badges: Record<string, number> = {
    pipeline: pendingReviewsCount,
    today: bookedCasesCount,
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem("endoflow_sidebar_collapsed");
      if (saved !== null) setIsCollapsed(saved === "true");
    } catch {}
  }, []);

  const toggleCollapse = () => {
    const next = !isCollapsed;
    setIsCollapsed(next);
    try {
      localStorage.setItem("endoflow_sidebar_collapsed", String(next));
    } catch {}
  };

  const isNeel = isNeelYadavUser(currentStaff);
  const primary = WORKSPACES.filter((w) => !w.secondary && (!w.privateNeelOnly || isNeel));
  const secondary = WORKSPACES.filter((w) => w.secondary && (!w.privateNeelOnly || isNeel));
  const showAdmin = currentStaff?.role === "ADMIN";
  const condensed = isCollapsed && !isMobileOpen;

  const renderGroup = (label: string, items: Workspace[]) => (
    <div className="space-y-0.5">
      {!condensed && (
        <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-2.5 mb-1">
          {label}
        </p>
      )}
      {items.map((w) => (
        <SidebarWorkspaceItem
          key={w.id}
          workspace={w}
          isActive={isWorkspaceActive(w, pathname)}
          currentPath={pathname}
          condensed={condensed}
          badge={badges[w.id]}
          onNavigate={() => onCloseMobile?.()}
        />
      ))}
    </div>
  );

  return (
    <>
      {isMobileOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs md:hidden cursor-pointer"
          aria-hidden="true"
        />
      )}

      <aside
        className={`h-full border-r border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md transition-all duration-150 select-none ${
          isMobileOpen
            ? "fixed inset-y-0 left-0 z-50 w-64 max-w-[85vw] shadow-2xl flex flex-col md:relative md:inset-auto md:z-20 md:shadow-none"
            : "hidden md:flex flex-col md:relative md:z-20 shrink-0"
        } ${condensed ? "md:w-14" : "md:w-48"}`}
      >
        <div className="flex-1 flex flex-col p-2 space-y-3 overflow-y-auto overflow-x-hidden">
          <div className="flex items-center justify-between px-1 pt-0.5">
            {isMobileOpen && (
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Menu</span>
            )}

            {isMobileOpen && (
              <button
                type="button"
                onClick={onCloseMobile}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors md:hidden cursor-pointer"
                aria-label="Close navigation drawer"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={toggleCollapse}
              className={`hidden md:flex p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer ${
                condensed ? "mx-auto" : "ml-auto"
              }`}
              title={condensed ? "Expand Sidebar" : "Collapse Sidebar"}
              aria-label={condensed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
              {condensed ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
            </button>
          </div>

          {renderGroup("Clinical Workflow", primary)}

          {(secondary.length > 0 || showAdmin) && (
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-3">
              {renderGroup("Personal", secondary)}
              {showAdmin && (
                <Link
                  href={ADMIN_ENTRY.href}
                  onClick={() => onCloseMobile?.()}
                  title={ADMIN_ENTRY.label}
                  className={`relative group flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all ${
                    pathname.startsWith(ADMIN_ENTRY.href)
                      ? "bg-blue-600 text-white dark:bg-sky-500 dark:text-slate-950 font-semibold shadow-xs"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-white"
                  } ${condensed ? "justify-center px-0 h-8" : ""}`}
                >
                  <WorkspaceIcon icon={ADMIN_ENTRY.icon} className="w-3.5 h-3.5 shrink-0" />
                  {!condensed && <span className="flex-1 truncate tracking-tight">{ADMIN_ENTRY.label}</span>}
                </Link>
              )}
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
