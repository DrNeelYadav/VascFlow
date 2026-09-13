"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Calendar,
  CalendarCheck,
  BedDouble,
  Users,
  FileText,
  Kanban,
  Activity,
  HeartPulse,
  Microscope,
  Radiation,
  Syringe,
  Database,
  Radio,
  Plus,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Layers,
} from "lucide-react";

export interface NavItem {
  id: string;
  name: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
  badgeColor?: string;
}

const HOSPITAL_WORKLISTS: NavItem[] = [
  {
    id: "today-bookings",
    name: "Today's Bookings",
    href: "/dashboard",
    icon: Calendar,
  },
  {
    id: "opd-ct-review",
    name: "OPD CT Review",
    href: "/dashboard/op-clinic",
    icon: CalendarCheck,
    badge: "CT Queue",
    badgeColor: "bg-[#E8F0FE] text-[#1A73E8]",
  },
  {
    id: "scheme-codes",
    name: "Scheme Tariffs & Codes",
    href: "/dashboard/schemes",
    icon: FileText,
    badge: "MAAY/RGHS",
    badgeColor: "bg-[#E6F4EA] text-[#137333]",
  },
  {
    id: "discharge-cards",
    name: "IHMS Discharge Cards",
    href: "/dashboard/discharge",
    icon: FileText,
    badge: "IHMS",
    badgeColor: "bg-[#E8F0FE] text-[#1A73E8]",
  },
  {
    id: "pipeline",
    name: "Turnaround Pipeline",
    href: "/dashboard/pipeline",
    icon: Kanban,
  },
  {
    id: "doppler-tracker",
    name: "Doppler Tracker",
    href: "/dashboard/doppler",
    icon: Activity,
  },
  {
    id: "data-tools",
    name: "Data Tools",
    href: "#",
    icon: Layers,
  },
];

const MODALITY_CATALOGS: NavItem[] = [
  {
    id: "dsa-angio",
    name: "DSA & Angio",
    href: "/dashboard/catalog?domain=arterial",
    icon: HeartPulse,
    badge: "XA",
    badgeColor: "bg-[#FCE8E6] text-[#C5221F]",
  },
  {
    id: "us-biopsies",
    name: "All Biopsies",
    href: "/dashboard/catalog?domain=biopsy",
    icon: Microscope,
    badge: "US",
    badgeColor: "bg-[#E6F4EA] text-[#137333]",
  },
  {
    id: "ct-guided",
    name: "CT-Guided Biopsy",
    href: "/dashboard/catalog?domain=biopsy&modality=CT",
    icon: Radiation,
    badge: "CT",
    badgeColor: "bg-[#FEF7E0] text-[#B06000]",
  },
  {
    id: "fnac-clinic",
    name: "FNAC Clinic",
    href: "/dashboard/catalog?domain=biopsy&modality=ROSE",
    icon: Syringe,
    badge: "ROSE",
    badgeColor: "bg-[#F3E8FD] text-[#7E22CE]",
  },
  {
    id: "ir-registry",
    name: "100 IR Registry",
    href: "/dashboard/catalog",
    icon: Database,
    badge: "100",
    badgeColor: "bg-[#E8F0FE] text-[#1A73E8]",
  },
  {
    id: "hardware-gateway",
    name: "C-Arm Gateway",
    href: "/dashboard/hardware",
    icon: Radio,
    badge: ":11112",
    badgeColor: "bg-[#E8F0FE] text-[#1A73E8]",
  },
];

export function GoogleSidebar({
  onOpenBookingModal,
  onOpenDataTools,
}: {
  onOpenBookingModal?: () => void;
  onOpenDataTools?: () => void;
}) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  // Load persistence from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("vascule_sidebar_collapsed");
      if (saved !== null) {
        setIsCollapsed(saved === "true");
      }
    } catch {
      // Safe fallback
    }
  }, []);

  const toggleCollapse = () => {
    const next = !isCollapsed;
    setIsCollapsed(next);
    try {
      localStorage.setItem("vascule_sidebar_collapsed", String(next));
    } catch {
      // Safe fallback
    }
  };

  const isLinkActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === "/dashboard";
    }
    return pathname.startsWith(href.split("?")[0]);
  };

  return (
    <aside
      className={`no-print shrink-0 bg-[#FFFFFF] border-r border-[#DADCE0] flex flex-col justify-between select-none transition-all duration-200 z-30 ${
        isCollapsed ? "w-16" : "w-60"
      }`}
    >
      {/* Top Section: Quick Action & Worklists */}
      <div className="p-3 space-y-4 overflow-y-auto">
        {/* Toggle Collapse Button & Branding */}
        <div className="flex items-center justify-between px-1">
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#1A73E8] text-white flex items-center justify-center font-bold text-xs">
                IR
              </div>
              <span className="text-xs font-bold tracking-tight text-[#202124]">
                SMS Cath-Lab
              </span>
            </div>
          )}
          <button
            onClick={toggleCollapse}
            className="p-1.5 rounded-full hover:bg-[#F1F3F4] text-[#5F6368] hover:text-[#202124] transition-colors cursor-pointer ml-auto"
            title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Primary Quick Action Button */}
        <div className="pt-1">
          <button
            onClick={onOpenBookingModal}
            className={`w-full flex items-center justify-center gap-2 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] text-white font-medium shadow-sm transition-all cursor-pointer ${
              isCollapsed ? "h-10 w-10 p-0 mx-auto" : "py-2.5 px-4 text-xs"
            }`}
            title="Admit / Book Patient"
          >
            <Plus className="w-4 h-4 shrink-0" />
            {!isCollapsed && <span>Admit / Book Case</span>}
          </button>
        </div>

        {/* Section 1: Hospital Worklists */}
        <div className="space-y-1">
          {!isCollapsed && (
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#80868B] px-3 mb-1.5">
              Hospital Worklists
            </p>
          )}

          <div className="space-y-0.5">
            {HOSPITAL_WORKLISTS.map((item) => {
              const active = isLinkActive(item.href);
              const Icon = item.icon;

              // Data Tools is a button, not a link
              if (item.id === "data-tools") {
                return (
                  <button
                    key={item.id}
                    onClick={() => onOpenDataTools?.()}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-full text-xs transition-colors group text-[#3C4043] hover:bg-[#F1F3F4] hover:text-[#202124] ${
                      isCollapsed ? "justify-center px-0" : ""
                    } cursor-pointer`}
                    title={item.name}
                  >
                    <Icon className="w-4 h-4 shrink-0 text-[#5F6368] group-hover:text-[#202124]" />
                    {!isCollapsed && (
                      <span className="flex-1 truncate text-left">{item.name}</span>
                    )}
                  </button>
                );
              }

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-full text-xs transition-colors group ${
                    active
                      ? "bg-[#E8F0FE] text-[#1A73E8] font-semibold"
                      : "text-[#3C4043] hover:bg-[#F1F3F4] hover:text-[#202124]"
                  } ${isCollapsed ? "justify-center px-0" : ""}`}
                  title={item.name}
                >
                  <Icon
                    className={`w-4 h-4 shrink-0 ${
                      active ? "text-[#1A73E8]" : "text-[#5F6368] group-hover:text-[#202124]"
                    }`}
                  />
                  {!isCollapsed && (
                    <span className="flex-1 truncate">{item.name}</span>
                  )}
                  {!isCollapsed && item.badge && (
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-semibold shrink-0 ${
                        item.badgeColor || "bg-[#F1F3F4] text-[#5F6368]"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Section 2: Procedure Modalities & 100 IR Catalog */}
        <div className="space-y-1 pt-2 border-t border-[#F1F3F4]">
          {!isCollapsed && (
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#80868B] px-3 mb-1.5">
              Procedure Modalities
            </p>
          )}

          <div className="space-y-0.5">
            {MODALITY_CATALOGS.map((item) => {
              const active = isLinkActive(item.href);
              const Icon = item.icon;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-full text-xs transition-colors group ${
                    active
                      ? "bg-[#E8F0FE] text-[#1A73E8] font-semibold"
                      : "text-[#3C4043] hover:bg-[#F1F3F4] hover:text-[#202124]"
                  } ${isCollapsed ? "justify-center px-0" : ""}`}
                  title={item.name}
                >
                  <Icon
                    className={`w-4 h-4 shrink-0 ${
                      active ? "text-[#1A73E8]" : "text-[#5F6368] group-hover:text-[#202124]"
                    }`}
                  />
                  {!isCollapsed && (
                    <span className="flex-1 truncate">{item.name}</span>
                  )}
                  {!isCollapsed && item.badge && (
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] font-bold shrink-0 ${
                        item.badgeColor || "bg-[#F1F3F4] text-[#5F6368]"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer Section: Institutional & Security Connection */}
      <div className="p-3 border-t border-[#DADCE0] text-center">
        {!isCollapsed ? (
          <div className="space-y-1">
            <div className="text-[11px] font-medium text-[#5F6368]">
              SMS Medical College, Jaipur
            </div>
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#E6F4EA] text-[#137333] text-[10px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E8E3E]" />
              IHMS Cloud Active
            </div>
          </div>
        ) : (
          <div className="w-2 h-2 rounded-full bg-[#1E8E3E] mx-auto" title="IHMS Active" />
        )}
      </div>
    </aside>
  );
}
