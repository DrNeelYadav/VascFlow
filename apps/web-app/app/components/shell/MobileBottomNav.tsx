"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useEndoflowStore } from "../../dashboard/useEndoflowStore";
import { WorkspaceIcon } from "./WorkspaceIcon";
import { WORKSPACES, isWorkspaceActive, type Workspace } from "../../lib/navigation";

/**
 * Widths on a phone cannot hold seven slots, so the dock carries the four
 * workspaces a clinician touches between cases and defers everything else to
 * the drawer. The choice of four is presentation only - the registry still
 * governs what exists.
 */
const DOCK_WORKSPACE_IDS = ["today", "clinic", "documentation", "logbook"];

export function MobileBottomNav({ onToggleMore }: { onToggleMore: () => void }) {
  const pathname = usePathname();

  const ctReviews = useEndoflowStore((s) => s.ctReviews);
  const bookedCases = useEndoflowStore((s) => s.bookedCases);

  const badges: Record<string, number> = {
    clinic: ctReviews.filter((r) => r.status === "Pending Review").length,
    today: bookedCases.filter((c) => c.status !== "Completed").length,
  };

  const dockItems: Workspace[] = WORKSPACES.filter((w) =>
    DOCK_WORKSPACE_IDS.includes(w.id)
  );

  return (
    <nav
      aria-label="Mobile Navigation Bar"
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-200/80 dark:border-slate-800 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] pb-[env(safe-area-inset-bottom,0px)] select-none"
    >
      <div
        className="grid h-14 items-stretch px-1"
        style={{ gridTemplateColumns: `repeat(${dockItems.length + 1}, minmax(0, 1fr))` }}
      >
        {dockItems.map((w) => {
          const active = isWorkspaceActive(w, pathname);
          const badge = badges[w.id];
          return (
            <Link
              key={w.id}
              href={w.href}
              aria-current={active ? "page" : undefined}
              className={`flex flex-col items-center justify-center relative py-1 min-h-[44px] touch-manipulation transition-colors ${
                active
                  ? "text-slate-900 dark:text-slate-100 font-semibold"
                  : "text-slate-500 dark:text-slate-400"
              }`}
            >
              <div className="relative">
                <WorkspaceIcon
                  icon={w.icon}
                  className={`w-[19px] h-[19px] transition-transform ${
                    active ? "scale-110 stroke-[2.25]" : "stroke-[1.75]"
                  }`}
                />
                {badge !== undefined && badge > 0 && (
                  <span className="absolute -top-1.5 -right-2.5 px-1 min-w-3.5 h-3.5 bg-blue-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center leading-none">
                    {badge}
                  </span>
                )}
              </div>
              <span className="text-[11px] mt-0.5 tracking-tight truncate max-w-full px-0.5">
                {w.shortLabel}
              </span>
              {active && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-slate-900 dark:bg-slate-100 rounded-full" />
              )}
            </Link>
          );
        })}

        <button
          type="button"
          onClick={onToggleMore}
          className="flex flex-col items-center justify-center relative py-1 min-h-[44px] touch-manipulation text-slate-500 dark:text-slate-400 transition-colors cursor-pointer"
          aria-label="Open more clinical workspaces"
        >
          <Menu className="w-[19px] h-[19px] stroke-[1.75]" />
          <span className="text-[11px] mt-0.5 tracking-tight">More</span>
        </button>
      </div>
    </nav>
  );
}
