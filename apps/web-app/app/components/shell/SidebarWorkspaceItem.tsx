"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { WorkspaceIcon } from "./WorkspaceIcon";
import type { Workspace, WorkspaceMember } from "../../lib/navigation";

interface SidebarWorkspaceItemProps {
  workspace: Workspace;
  isActive: boolean;
  currentPath: string;
  condensed: boolean;
  badge?: number;
  onNavigate?: () => void;
}

/**
 * Renders a single workspace entry or an expandable sequential dropdown
 * menu for multi-stage pipelines (e.g. OPD Pipeline: Booking -> Dating -> Consent -> Op Note -> Discharge).
 */
export function SidebarWorkspaceItem({
  workspace,
  isActive,
  currentPath,
  condensed,
  badge,
  onNavigate,
}: SidebarWorkspaceItemProps) {
  const hasMultiple = workspace.members.length > 1;
  const [isOpen, setIsOpen] = useState(isActive);

  // Auto-expand when active route belongs to this workspace
  useEffect(() => {
    if (isActive) {
      setIsOpen(true);
    }
  }, [isActive]);

  if (condensed) {
    return (
      <Link
        href={workspace.href}
        onClick={onNavigate}
        title={workspace.label}
        aria-current={isActive ? "page" : undefined}
        className={`relative group flex items-center justify-center h-8 rounded-lg text-xs font-medium transition-all ${
          isActive
            ? "bg-blue-600 text-white dark:bg-sky-500 dark:text-slate-950 font-semibold shadow-xs"
            : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-white"
        }`}
      >
        <WorkspaceIcon
          icon={workspace.icon}
          className={`w-3.5 h-3.5 shrink-0 ${
            isActive
              ? "text-white dark:text-slate-950"
              : "text-slate-400 group-hover:text-blue-600 dark:text-slate-400 dark:group-hover:text-sky-400"
          }`}
        />
        {badge !== undefined && badge > 0 && (
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-blue-500" />
        )}
      </Link>
    );
  }

  // Single-item workspace
  if (!hasMultiple) {
    return (
      <Link
        href={workspace.href}
        onClick={onNavigate}
        title={workspace.label}
        aria-current={isActive ? "page" : undefined}
        className={`relative group flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all ${
          isActive
            ? "bg-blue-600 text-white dark:bg-sky-500 dark:text-slate-950 font-semibold shadow-xs"
            : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-white"
        }`}
      >
        <WorkspaceIcon
          icon={workspace.icon}
          className={`w-3.5 h-3.5 shrink-0 ${
            isActive
              ? "text-white dark:text-slate-950"
              : "text-slate-400 group-hover:text-blue-600 dark:text-slate-400 dark:group-hover:text-sky-400"
          }`}
        />
        <span className="flex-1 truncate tracking-tight">{workspace.label}</span>
        {badge !== undefined && badge > 0 && (
          <span
            className={`px-1.5 py-0.2 rounded text-[10px] font-semibold tabular-nums ${
              isActive
                ? "bg-white/20 text-white"
                : "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200"
            }`}
          >
            {badge}
          </span>
        )}
      </Link>
    );
  }

  // Multi-item dropdown pipeline
  return (
    <div className="space-y-0.5">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full group flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all text-left cursor-pointer ${
          isActive
            ? "bg-slate-100 text-slate-900 dark:bg-slate-800/80 dark:text-white font-semibold"
            : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-white"
        }`}
      >
        <WorkspaceIcon
          icon={workspace.icon}
          className={`w-3.5 h-3.5 shrink-0 ${
            isActive
              ? "text-blue-600 dark:text-sky-400"
              : "text-slate-400 group-hover:text-blue-600 dark:text-slate-400 dark:group-hover:text-sky-400"
          }`}
        />
        <span className="flex-1 truncate tracking-tight">{workspace.label}</span>
        {badge !== undefined && badge > 0 && (
          <span className="px-1.5 py-0.2 rounded text-[10px] font-semibold tabular-nums bg-blue-100 text-blue-800 dark:bg-sky-950 dark:text-sky-300">
            {badge}
          </span>
        )}
        {isOpen ? (
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        ) : (
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        )}
      </button>

      {isOpen && (
        <div className="ml-3 pl-2.5 border-l border-slate-200 dark:border-slate-800 space-y-0.5 py-0.5">
          {workspace.members.map((sub: WorkspaceMember) => {
            const isSubActive =
              currentPath === sub.href || currentPath.startsWith(`${sub.href}/`);
            return (
              <Link
                key={sub.href}
                href={sub.href}
                onClick={onNavigate}
                className={`group flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-medium transition-colors ${
                  isSubActive
                    ? "bg-blue-600 text-white dark:bg-sky-500 dark:text-slate-950 font-semibold shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <span
                  className={`w-1 h-1 rounded-full shrink-0 ${
                    isSubActive
                      ? "bg-white dark:bg-slate-950"
                      : "bg-slate-300 dark:bg-slate-600 group-hover:bg-blue-500"
                  }`}
                />
                <span className="truncate">{sub.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
