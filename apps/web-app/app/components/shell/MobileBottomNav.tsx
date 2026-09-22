"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Stethoscope,
  BedDouble,
  Calendar,
  ClipboardList,
  Menu,
} from "lucide-react";

export interface MobileBottomNavProps {
  onOpenDrawer?: () => void;
}

export function MobileBottomNav({ onOpenDrawer }: MobileBottomNavProps) {
  const pathname = usePathname();

  const navItems = [
    {
      id: "opd",
      label: "OPD",
      href: "/dashboard/op-clinic",
      icon: Stethoscope,
    },
    {
      id: "beds",
      label: "Beds",
      href: "/dashboard/bed-board",
      icon: BedDouble,
    },
    {
      id: "calendar",
      label: "Calendar",
      href: "/dashboard/calendar",
      icon: Calendar,
    },
    {
      id: "worklist",
      label: "Worklist",
      href: "/dashboard/worklist",
      icon: ClipboardList,
    },
    {
      id: "more",
      label: "More",
      icon: Menu,
      isAction: true,
    },
  ];

  const isActive = (href?: string) => {
    if (!href) return false;
    return pathname.startsWith(href);
  };

  return (
    <nav
      aria-label="Mobile bottom navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-[#E5E5EA] px-2 py-1 flex items-center justify-around shadow-lg select-none"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = item.href ? isActive(item.href) : false;

        if (item.isAction) {
          return (
            <button
              key={item.id}
              type="button"
              onClick={onOpenDrawer}
              className="flex flex-col items-center justify-center min-h-[44px] min-w-[56px] px-2 py-1 rounded-xl text-[#8E8E93] hover:text-[#1C1C1E] active:scale-95 transition-all cursor-pointer"
              aria-label="Open clinical navigation drawer"
            >
              <Icon className="w-5 h-5 shrink-0 mb-0.5" strokeWidth={2} />
              <span className="text-[10px] font-medium tracking-tight leading-none">
                {item.label}
              </span>
            </button>
          );
        }

        return (
          <Link
            key={item.id}
            href={item.href!}
            className={`flex flex-col items-center justify-center min-h-[44px] min-w-[56px] px-2 py-1 rounded-xl active:scale-95 transition-all ${
              active
                ? "text-[#007AFF] bg-[#007AFF]/10 font-semibold"
                : "text-[#8E8E93] hover:text-[#1C1C1E] font-medium"
            }`}
            aria-current={active ? "page" : undefined}
          >
            <Icon
              className={`w-5 h-5 shrink-0 mb-0.5 transition-colors ${
                active ? "text-[#007AFF]" : "text-[#8E8E93]"
              }`}
              strokeWidth={active ? 2.4 : 2}
            />
            <span className="text-[10px] tracking-tight leading-none">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
