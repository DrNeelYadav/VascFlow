"use client";

import React from "react";
import { useLogbookDesk } from "./useLogbookDesk";
import { LogbookFilterBar } from "./LogbookFilterBar";
import { LogbookTable } from "./LogbookTable";
import { LogbookDrawer } from "./LogbookDrawer";

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

      {/* Filter and Search Bar */}
      <LogbookFilterBar desk={desk} />

      {/* Table Data and Pagination */}
      <LogbookTable desk={desk} />

      {/* Detail Slide-Over Drawer */}
      <LogbookDrawer desk={desk} />
    </div>
  );
}
