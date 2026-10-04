"use client";

import React, { useMemo } from "react";
import { Card, Badge, Input } from "@vascule/ui-kit";
import {
  BedDouble,
  AlertTriangle,
  ShieldAlert,
  Radio,
} from "lucide-react";
import { ClinicalDisposition } from "../../types/clinical";
import type { UseOpClinicDeskReturn } from "./useOpClinicDesk";
import { DISPOSITION_TRACKS } from "./dispositionTracks";

interface ConsultationDeskDispositionMatrixProps {
  desk: UseOpClinicDeskReturn;
  handleDispositionSelect: (key: ClinicalDisposition) => void;
}

export function ConsultationDeskDispositionMatrix({
  desk,
  handleDispositionSelect,
}: ConsultationDeskDispositionMatrixProps) {
  const vacantBeds = useMemo(
    () => desk.beds.filter((b) => b.status === "vacant"),
    [desk.beds]
  );

  return (
    <Card variant="flat" className="p-4 sm:p-5 border-slate-200 dark:border-slate-800 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
            3. Multi-Track Clinical Disposition Matrix
          </h3>
        </div>
        <span className="text-xs text-slate-400 dark:text-slate-400 font-medium">
          Select definitive clinical disposition pathway
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {DISPOSITION_TRACKS.map((track) => {
          const isSelected = desk.disposition === track.key;
          return (
            <div
              key={track.key}
              onClick={() => handleDispositionSelect(track.key)}
              className={`relative p-3.5 rounded-xl border text-left cursor-pointer transition-all duration-150 select-none ${
                isSelected
                  ? `${track.borderActive} ${track.bgActive} shadow-xs ring-1 ${track.ringActive}`
                  : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-400 dark:hover:border-slate-700"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-all ${
                      isSelected
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-slate-300 dark:border-slate-600"
                    }`}
                  >
                    {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <span className="text-xs font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                    {track.title}
                  </span>
                </div>
                <Badge tone={track.badgeTone}>{track.badge}</Badge>
              </div>
              <p className="text-[11px] text-slate-700 dark:text-slate-300 font-medium leading-snug mb-1">
                {track.summary}
              </p>
              <p className="text-[10px] text-slate-400 dark:text-slate-400 leading-tight">
                {track.description}
              </p>
            </div>
          );
        })}
      </div>

      {desk.disposition === "ADMIT_WARD_PREOP" && (
        <div className="p-3.5 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 space-y-2 animate-in fade-in">
          <div className="flex items-center justify-between">
            <label
              htmlFor="ward-bed-select"
              className="text-xs font-bold text-blue-900 dark:text-blue-200 flex items-center gap-1.5"
            >
              <BedDouble className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Ward &amp; ICU Bed Allocation (Strict 8-Bed Capacity)</span>
            </label>
            <Badge tone={vacantBeds.length > 0 ? "verified" : "alert"}>
              {vacantBeds.length} of 8 Beds Vacant
            </Badge>
          </div>
          <select
            id="ward-bed-select"
            value={desk.selectedBedId}
            onChange={(e) => desk.setSelectedBedId(e.target.value)}
            className="w-full h-9 px-3 rounded-lg border border-blue-300 dark:border-blue-800 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-900 dark:text-slate-100 focus:border-blue-600 focus:outline-none"
          >
            {desk.beds.map((b) => (
              <option key={b.id} value={b.id}>
                🛏️ {b.title} ({b.type}) — {b.status === "vacant" ? "Vacant / Available" : `Occupied by: ${b.ptName} (${b.diag})`}
              </option>
            ))}
          </select>
          {vacantBeds.length === 0 && (
            <p className="text-xs text-rose-600 dark:text-rose-400 font-semibold flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
              All 8 Ward/ICU beds are currently occupied. Inpatient admission will require bed discharge or transfer.
            </p>
          )}
        </div>
      )}

      {desk.disposition === "STAT_CATH_LAB" && (
        <div className="p-3.5 rounded-xl border border-rose-300 dark:border-rose-900/60 bg-rose-50/50 dark:bg-rose-950/20 text-rose-900 dark:text-rose-200 text-xs flex items-center gap-2.5 animate-in fade-in">
          <Radio className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 animate-pulse" />
          <div>
            <strong className="font-bold">🚨 Emergent Table 01 Priority Assigned:</strong> Patient will be transferred directly to Cath-Lab (Philips Azurion) without occupying an 8-bed ward slot. 16G IV Cannula &amp; STAT Pre-Auth protocol flagged.
          </div>
        </div>
      )}

      {(desk.disposition === "DEFERRED_REVIEW_SOS" || desk.selectedBedId === "on_call") && (
        <div className="p-3.5 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50/60 dark:bg-amber-950/30 space-y-1.5 animate-in fade-in">
          <label className="block text-xs font-bold text-amber-950 dark:text-amber-200 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>SOS Red-Flag Triggers for Urgent Emergency Return</span>
          </label>
          <Input
            type="text"
            value={desk.sosTriggerSymptoms}
            onChange={(e) => desk.setSosTriggerSymptoms(e.target.value)}
            placeholder="e.g. Abdominal pain progression, fresh melena/hematemesis, expanding puncture hematoma, fever > 101°F..."
            className="border-amber-300 dark:border-amber-700 bg-white dark:bg-slate-900 text-xs"
          />
        </div>
      )}
    </Card>
  );
}
