"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEndoflowStore } from "../dashboard/useEndoflowStore";
import { EndoFlowLogo } from "./EndoFlowLogo";
import { WorkspaceIcon } from "./shell/WorkspaceIcon";
import {
  WORKSPACES,
  ADMIN_ENTRY,
  isWorkspaceActive,
  type NavIconKey,
  type Workspace,
} from "../lib/navigation";

/**
 * Desktop sidebar. Renders the workspace registry from `lib/navigation`, so it
 * can never drift from the mobile dock, the command palette or the tab bar.
 */
export function GoogleSidebar({
  onOpenDataTools,
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
    clinic: pendingReviewsCount,
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

  const primary = WORKSPACES.filter((w) => !w.secondary);
  const secondary = WORKSPACES.filter((w) => w.secondary);
  const showAdmin = currentStaff?.role === "ADMIN";
  const condensed = isCollapsed && !isMobileOpen;

  const renderItem = (
    item: { href: string; label: string; icon: NavIconKey },
    active: boolean,
    badge?: number
  ) => (
    <Link
      href={item.href}
      onClick={() => onCloseMobile?.()}
      title={item.label}
      aria-current={active ? "page" : undefined}
      className={`relative flex items-center gap-2 rounded px-2.5 py-1.5 text-xs font-medium transition-colors ${
        active
          ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 font-semibold"
          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
      } ${condensed ? "justify-center px-0 h-8" : ""}`}
    >
      <WorkspaceIcon
        icon={item.icon}
        className={`w-3.5 h-3.5 shrink-0 ${active ? "" : "text-slate-400 dark:text-slate-500"}`}
      />
      {!condensed && <span className="flex-1 truncate tracking-tight">{item.label}</span>}
      {!condensed && badge !== undefined && badge > 0 && (
        <span
          className={`px-1.5 py-0.2 rounded text-[10px] font-semibold tabular-nums ${
            active
              ? "bg-white/20 text-white"
              : "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200"
          }`}
        >
          {badge}
        </span>
      )}
      {condensed && badge !== undefined && badge > 0 && (
        <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-blue-500" />
      )}
    </Link>
  );

  const renderGroup = (label: string, items: Workspace[]) => (
    <div className="space-y-0.5">
      {!condensed && (
        <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-2.5 mb-1">
          {label}
        </p>
      )}
      {items.map((w) =>
        renderItem(
          { href: w.href, label: w.label, icon: w.icon },
          isWorkspaceActive(w, pathname),
          badges[w.id]
        )
      )}
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
        className={`h-full border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all duration-150 select-none ${
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
              {showAdmin &&
                renderItem(ADMIN_ENTRY, pathname.startsWith(ADMIN_ENTRY.href))}
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
