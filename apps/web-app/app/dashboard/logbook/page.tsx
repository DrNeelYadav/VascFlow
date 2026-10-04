"use client";

import React from "react";
import { useLogbookDesk } from "./useLogbookDesk";
import { LogbookFilterBar } from "./LogbookFilterBar";
import { LogbookTable } from "./LogbookTable";
import { LogbookDrawer } from "./LogbookDrawer";
import { MetricScorecard } from "../../components/MetricScorecard";
import { Database, ShieldCheck, Activity, Radio } from "lucide-react";

export default function CathLabMasterLogbookPage() {
  const desk = useLogbookDesk();

  return (
    <div className="space-y-4 pb-16">
      {/* Top Header: Title & Institutional Description */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Cath-Lab Master Registry
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            SMS Medical College &amp; Attached Hospitals, Jaipur • 1,090 Audited Interventional Radiology Cases
          </p>
        </div>
      </div>

      {/* Elevated Glassmorphism Scorecards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
        <MetricScorecard
          title="Total Master Cases"
          value={desk.totalCases > 0 ? desk.totalCases : "1,090"}
          subtitle="Audited cath-lab registry archive"
          indicatorColor="sapphire"
          trend={{ direction: "neutral", label: "100% Ground Truth" }}
          icon={<Database className="w-4 h-4 text-blue-600 dark:text-sky-400" />}
        />
        <MetricScorecard
          title="MAAY / Chiranjeevi"
          value="84.8%"
          subtitle="Rajasthan Government cashless scheme"
          indicatorColor="emerald"
          trend={{ direction: "up", label: "Statutory Coverage" }}
          icon={<ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
        />
        <MetricScorecard
          title="High-Acuity Liver ICU"
          value="189"
          subtitle="TIPS, PTBD & emergency embolization"
          indicatorColor="crimson"
          trend={{ direction: "up", label: "Priority 1" }}
          icon={<Activity className="w-4 h-4 text-rose-600 dark:text-rose-400" />}
        />
        <MetricScorecard
          title="Active Cath Labs"
          value="2 / 2"
          subtitle="Continuous angiosuite telemetry"
          indicatorColor="cyan"
          trend={{ direction: "neutral", label: "60 FPS HUD" }}
          icon={<Radio className="w-4 h-4 text-sky-600 dark:text-sky-400" />}
        />
      </div>

      {/* Filter and Search Bar */}
      <LogbookFilterBar desk={desk} />

      {/* Table Data and Pagination */}
      <LogbookTable desk={desk} />

      {/* Detail Slide-Over Drawer */}
      <LogbookDrawer desk={desk} />
    </div>
  );
}
