"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Stethoscope,
  CalendarClock,
  FileSignature,
  FileCheck,
  FileText,
  BookOpen,
  MonitorPlay,
  Library,
  Package,
  FlaskConical,
  Settings,
  GraduationCap,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { NavIconKey } from "../../lib/navigation";

const ICONS: Record<NavIconKey, LucideIcon> = {
  today: LayoutDashboard,
  clinic: Stethoscope,
  pipeline: Workflow,
  dating: CalendarClock,
  documentation: FileSignature,
  consent: FileCheck,
  discharge: FileText,
  logbook: BookOpen,
  suite: MonitorPlay,
  library: Library,
  inventory: Package,
  research: FlaskConical,
  admin: Settings,
  quiz: GraduationCap,
};

/** Resolves a navigation icon key to its lucide component. */
export function WorkspaceIcon({
  icon,
  className,
}: {
  icon: NavIconKey;
  className?: string;
}) {
  const Icon = ICONS[icon] ?? LayoutDashboard;
  return <Icon className={className} />;
}
