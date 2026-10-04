"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getWorkspaceForPath } from "../../lib/navigation";

/**
 * In-page tab bar for the active workspace.
 *
 * Rendered once by the dashboard layout, so every workspace member reaches its
 * siblings without a second navigation surface. Collapses to nothing on routes
 * that belong to no workspace, keeping the clinical canvas full-height.
 */
export function WorkspaceTabs() {
  const pathname = usePathname();
  const workspace = getWorkspaceForPath(pathname);

  // A single-member workspace needs no tab strip.
  if (!workspace || workspace.members.length < 2) return null;

  return (
    <nav
      aria-label={`${workspace.label} sections`}
      className="print:hidden flex items-center gap-1 mb-3 overflow-x-auto scrollbar-none"
    >
      {workspace.members.map((member) => {
        const active = pathname === member.href || pathname.startsWith(`${member.href}/`);
        return (
          <Link
            key={member.href}
            href={member.href}
            aria-current={active ? "page" : undefined}
            className={`shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer ${
              active
                ? "bg-blue-600 text-white dark:bg-sky-500 dark:text-slate-950 shadow-xs font-semibold"
                : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            {member.label}
          </Link>
        );
      })}
    </nav>
  );
}
