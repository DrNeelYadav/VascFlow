"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Stethoscope,
  BedDouble,
  Kanban,
  Calendar,
  Activity,
  Menu,
} from "lucide-react";
import { useEndoflowStore } from "../../dashboard/useEndoflowStore";

export function MobileBottomNav({
  onToggleMore,
}: {
  onToggleMore: () => void;
}) {
  const pathname = usePathname();

  // Store indicators
  const ctReviews = useEndoflowStore((s) => s.ctReviews);
  const beds = useEndoflowStore((s) => s.beds);
  const patients = useEndoflowStore((s) => s.patients);
  const bookedCases = useEndoflowStore((s) => s.bookedCases);

  const pendingReviewsCount = ctReviews.filter((r) => r.status === "Pending Review").length;
  const occupiedBedsCount = beds.filter((b) => b.status === "occupied").length;
  const activeCasesCount = patients.filter((p) => p.status !== "Discharged").length;
  const bookedCasesCount = bookedCases.filter((c) => c.status !== "Completed").length;

  const NAV_ITEMS = [
    {
      id: "op-clinic",
      label: "OPD",
      href: "/dashboard/op-clinic",
      icon: Stethoscope,
      badge: pendingReviewsCount > 0 ? pendingReviewsCount : undefined,
    },
    {
      id: "bed-board",
      label: "Beds",
      href: "/dashboard/bed-board",
      icon: BedDouble,
      badge: `${occupiedBedsCount}/8`,
    },
    {
      id: "worklist",
      label: "Worklist",
      href: "/dashboard/worklist",
      icon: Kanban,
      badge: activeCasesCount > 0 ? activeCasesCount : undefined,
    },
    {
      id: "calendar",
      label: "OT Cal",
      href: "/dashboard/calendar",
      icon: Calendar,
      badge: bookedCasesCount > 0 ? bookedCasesCount : undefined,
    },
    {
      id: "protocols",
      label: "Calcs",
      href: "/dashboard/protocols",
      icon: Activity,
    },
  ];

  const isItemActive = (href: string) => {
    if (href === "/dashboard" && pathname === "/dashboard") return true;
    if (href !== "/dashboard" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav
      aria-label="Mobile Navigation Bar"
      className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200/80 dark:border-slate-800 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] pb-[env(safe-area-inset-bottom)] select-none"
    >
      <div className="grid grid-cols-6 h-14 items-stretch px-1">
        {NAV_ITEMS.map((item) => {
          const active = isItemActive(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center justify-center relative py-1 transition-all group ${
                active
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
              }`}
            >
              <div className="relative">
                <Icon
                  className={`w-5 h-5 transition-transform ${
                    active ? "scale-110 stroke-[2.25]" : "stroke-[1.75]"
                  }`}
                />
                {item.badge !== undefined && (
                  <span className="absolute -top-1.5 -right-2.5 px-1 min-w-[14px] h-3.5 bg-blue-600 text-white rounded-full text-[9px] font-bold flex items-center justify-center shadow-xs leading-none">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight truncate max-w-full px-0.5">
                {item.label}
              </span>
              {active && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
              )}
            </Link>
          );
        })}

        {/* More Drawer Button */}
        <button
          type="button"
          onClick={onToggleMore}
          className="flex flex-col items-center justify-center relative py-1 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all cursor-pointer"
          aria-label="Open More Clinical Navigation Options"
        >
          <Menu className="w-5 h-5 stroke-[1.75]" />
          <span className="text-[10px] mt-0.5 tracking-tight">More</span>
        </button>
      </div>
    </nav>
  );
}
