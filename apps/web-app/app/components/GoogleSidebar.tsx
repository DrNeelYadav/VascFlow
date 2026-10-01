"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Stethoscope,
  Calendar,
  BookOpen,
  FileText,
  FileSignature,
  Activity,
  Package,
  Settings,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  X,
  FileSpreadsheet,
  Film,
} from "lucide-react";
import { useEndoflowStore } from "../dashboard/useEndoflowStore";
import { EndoFlowLogo } from "./EndoFlowLogo";

export interface NavItem {
  id: string;
  name: string;
  href: string;
  icon: React.ElementType;
  badge?: string | number;
}

export function GoogleSidebar({
  onOpenBookingModal,
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
  const [isExtrasOpen, setIsExtrasOpen] = useState<boolean>(false);

  // Live indicators from store
  const ctReviews = useEndoflowStore((s) => s.ctReviews);
  const bookedCases = useEndoflowStore((s) => s.bookedCases);

  const currentStaff = useEndoflowStore((s) => s.currentStaff);

  const pendingReviewsCount = ctReviews.filter((r) => r.status === "Pending Review").length;
  const bookedCasesCount = bookedCases.filter((c) => c.status !== "Completed").length;

  useEffect(() => {
    try {
      const savedCollapsed = localStorage.getItem("endoflow_sidebar_collapsed");
      if (savedCollapsed !== null) {
        setIsCollapsed(savedCollapsed === "true");
      }
      const savedExtras = localStorage.getItem("endoflow_sidebar_extras_open");
      if (savedExtras !== null) {
        setIsExtrasOpen(savedExtras === "true");
      }
    } catch {}
  }, []);

  const toggleCollapse = () => {
    const next = !isCollapsed;
    setIsCollapsed(next);
    try {
      localStorage.setItem("endoflow_sidebar_collapsed", String(next));
    } catch {}
  };

  const toggleExtras = () => {
    const next = !isExtrasOpen;
    setIsExtrasOpen(next);
    try {
      localStorage.setItem("endoflow_sidebar_extras_open", String(next));
    } catch {}
  };

  const isLinkActive = (href: string) => {
    if (href === "/dashboard" && pathname === "/dashboard") return true;
    if (href !== "/dashboard" && pathname.startsWith(href)) return true;
    return false;
  };

  // 1. Core Clinical Workflow
  const CORE_ITEMS: NavItem[] = [
    {
      id: "op-clinic",
      name: "OPD Consultation",
      href: "/dashboard/op-clinic",
      icon: Stethoscope,
      badge: pendingReviewsCount > 0 ? pendingReviewsCount : undefined,
    },
    {
      id: "calendar",
      name: "OT Schedule & Calendar",
      href: "/dashboard/calendar",
      icon: Calendar,
      badge: bookedCasesCount > 0 ? bookedCasesCount : undefined,
    },
    {
      id: "logbook",
      name: "Cath-Lab Master Logbook & Registry",
      href: "/dashboard/logbook",
      icon: BookOpen,
    },
    {
      id: "operative-notes",
      name: "Operative Notes & Summary",
      href: "/dashboard/operative-notes",
      icon: FileSignature,
    },
    {
      id: "discharge",
      name: "Discharge Summaries (IHMS)",
      href: "/dashboard/discharge",
      icon: FileText,
    },
    {
      id: "imaging",
      name: "Imaging & Cine Viewer",
      href: "/dashboard/imaging",
      icon: Film,
    },
    {
      id: "schemes-correlation",
      name: "Scheme Code Correlation",
      href: "/dashboard/schemes-correlation",
      icon: FileSpreadsheet,
    },
  ];

  // 2. Extras (Collapsible Group)
  const EXTRAS_ITEMS: NavItem[] = [
    {
      id: "protocols",
      name: "Clinical Protocols & Calculators",
      href: "/dashboard/protocols",
      icon: Activity,
    },
    {
      id: "inventory",
      name: "Consumables Inventory",
      href: "/dashboard/inventory",
      icon: Package,
    },
    ...(currentStaff?.role === "ADMIN"
      ? [
          {
            id: "admin",
            name: "Admin Console",
            href: "/admin",
            icon: Settings,
          },
        ]
      : []),
  ];

  // Auto-expand Extras if current route matches one of the extras
  useEffect(() => {
    const isExtrasActive = EXTRAS_ITEMS.some((item) => isLinkActive(item.href));
    if (isExtrasActive && !isExtrasOpen) {
      setIsExtrasOpen(true);
    }
  }, [pathname]);

  const isAnyExtraActive = EXTRAS_ITEMS.some((item) => isLinkActive(item.href));

  return (
    <>
      {/* Mobile Drawer Backdrop Overlay */}
      {isMobileOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs md:hidden cursor-pointer"
          aria-hidden="true"
        />
      )}

      <aside
        className={`h-full bg-[#FAFAFA] border-r border-[#E5E5EA] transition-all duration-200 select-none ${
          isMobileOpen
            ? "fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] shadow-2xl flex flex-col md:relative md:inset-auto md:z-20 md:shadow-none"
            : "hidden md:flex flex-col md:relative md:z-20 shrink-0"
        } ${isCollapsed && !isMobileOpen ? "md:w-16" : "md:w-64"}`}
      >
        <div className="flex-1 flex flex-col p-3 space-y-4 overflow-y-auto overflow-x-hidden">
          {/* Header & Toggle Button */}
          <div className="flex items-center justify-between px-1 pt-0.5">
            {(!isCollapsed || isMobileOpen) && (
              <Link
                href="/dashboard"
                onClick={() => onCloseMobile?.()}
                className="flex items-center gap-2 hover:opacity-85 transition-opacity"
              >
                <EndoFlowLogo size="sm" showSubtitle={false} theme="dark" />
              </Link>
            )}

            {/* Mobile Close Button */}
            {isMobileOpen && (
              <button
                type="button"
                onClick={onCloseMobile}
                className="p-1.5 rounded-lg text-[#8E8E93] hover:text-[#1C1C1E] hover:bg-[#E5E5EA]/60 transition-colors md:hidden cursor-pointer"
                aria-label="Close navigation drawer"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            {/* Desktop Collapse Toggle */}
            <button
              onClick={toggleCollapse}
              className={`hidden md:flex p-1.5 rounded-lg text-[#8E8E93] hover:text-[#1C1C1E] hover:bg-[#E5E5EA]/60 transition-colors cursor-pointer ${
                isCollapsed ? "mx-auto" : ""
              }`}
              title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
              {isCollapsed ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Section A: Core Clinical Workflow */}
          <div className="space-y-1">
            {(!isCollapsed || isMobileOpen) && (
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[#8E8E93] px-2.5 mb-1.5">
                Core Clinical Workflow
              </p>
            )}

            <div className="space-y-0.5">
              {CORE_ITEMS.map((item) => {
                const active = isLinkActive(item.href);
                const Icon = item.icon;

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => onCloseMobile?.()}
                    className={`relative flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-[13px] transition-all group ${
                      active
                        ? "bg-[#007AFF]/10 text-[#007AFF] font-semibold"
                        : "text-[#3A3A3C] hover:bg-[#F2F2F7] hover:text-[#1C1C1E] font-medium"
                    } ${isCollapsed && !isMobileOpen ? "justify-center px-0 h-10" : ""}`}
                    title={item.name}
                  >
                    <Icon
                      className={`w-4 h-4 shrink-0 transition-colors ${
                        active ? "text-[#007AFF]" : "text-[#8E8E93] group-hover:text-[#1C1C1E]"
                      }`}
                    />
                    {(!isCollapsed || isMobileOpen) && (
                      <span className="flex-1 truncate tracking-tight">{item.name}</span>
                    )}
                    {(!isCollapsed || isMobileOpen) && item.badge !== undefined && (
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-tight ${
                          active
                            ? "bg-[#007AFF] text-white"
                            : "bg-[#E5E5EA] text-[#636366]"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                    {isCollapsed && !isMobileOpen && item.badge !== undefined && (
                      <span className="absolute top-1.5 right-2 w-2 h-2 rounded-full bg-[#007AFF]" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Section B: Extras (Collapsible Group) */}
          <div className="pt-2 border-t border-[#E5E5EA]/80 space-y-1">
            {(!isCollapsed || isMobileOpen) ? (
              <button
                onClick={toggleExtras}
                className="w-full flex items-center justify-between px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#8E8E93] hover:text-[#1C1C1E] transition-colors group cursor-pointer"
              >
                <span className="flex items-center gap-1.5">
                  Extras
                  {isAnyExtraActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF]" />
                  )}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#8E8E93] transition-transform duration-200 ${
                    isExtrasOpen ? "rotate-0" : "-rotate-90"
                  }`}
                />
              </button>
            ) : (
              <button
                onClick={toggleExtras}
                className="w-full flex justify-center py-1 text-[#8E8E93] hover:text-[#1C1C1E] cursor-pointer"
                title="Toggle Extras"
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isExtrasOpen ? "rotate-0" : "-rotate-90"
                  }`}
                />
              </button>
            )}

            {isExtrasOpen && (
              <div className="space-y-0.5 animate-in fade-in slide-in-from-top-1 duration-150">
                {EXTRAS_ITEMS.map((item) => {
                  const active = isLinkActive(item.href);
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => onCloseMobile?.()}
                      className={`flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-[13px] transition-all group ${
                        active
                          ? "bg-[#007AFF]/10 text-[#007AFF] font-semibold"
                          : "text-[#3A3A3C] hover:bg-[#F2F2F7] hover:text-[#1C1C1E] font-medium"
                      } ${isCollapsed && !isMobileOpen ? "justify-center px-0 h-10" : ""}`}
                      title={item.name}
                    >
                      <Icon
                        className={`w-4 h-4 shrink-0 transition-colors ${
                          active ? "text-[#007AFF]" : "text-[#8E8E93] group-hover:text-[#1C1C1E]"
                        }`}
                      />
                      {(!isCollapsed || isMobileOpen) && (
                        <span className="flex-1 truncate tracking-tight">{item.name}</span>
                      )}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
