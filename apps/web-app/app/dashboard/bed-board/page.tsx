"use client";

import React, { useState, useEffect } from "react";
import { usePatientLogisticsStore, PatientLogisticsRecord } from "@/app/lib/logistics/patientLogisticsStore";
import {
  BedDouble,
  Search,
  ArrowRightLeft,
  CheckCircle2,
  X,
  Stethoscope,
} from "lucide-react";

export type BedStatus = "occupied" | "vacant" | "cleaning";

export interface BedRecord {
  id: string;
  ward: "ir_icu" | "old_gastro_ward";
  wardTitle: string;
  status: BedStatus;
  ptName: string;
  crNo: string;
  diag: string;
  doctor: string;
  ptId?: string;
}

const INITIAL_BEDS: BedRecord[] = [
  // IR ICU
  {
    id: "ICU-01",
    ward: "ir_icu",
    wardTitle: "IR ICU",
    status: "occupied",
    ptName: "Lakshmi",
    crNo: "SMS-2026-LP01",
    diag: "Splenic Artery Embolization for Hypersplenism • Post-Procedure",
    doctor: "Dr. Meenu Bagarhatta (Sr. Prof & Head)",
    ptId: "PT01",
  },
  {
    id: "ICU-02",
    ward: "ir_icu",
    wardTitle: "IR ICU",
    status: "vacant",
    ptName: "-",
    crNo: "-",
    diag: "Ready for Emergency STAT Admission",
    doctor: "-",
  },
  {
    id: "ICU-03",
    ward: "ir_icu",
    wardTitle: "IR ICU",
    status: "vacant",
    ptName: "-",
    crNo: "-",
    diag: "Ready for Emergency STAT Admission",
    doctor: "-",
  },

  // Old Gastro IR Ward
  {
    id: "Ward-01",
    ward: "old_gastro_ward",
    wardTitle: "Old Gastro IR Ward",
    status: "occupied",
    ptName: "Roshan",
    crNo: "SMS-2026-RS01",
    diag: "Percutaneous Liver Abscess Drainage • Post-Procedure • AJH (Allowed to go Home)",
    doctor: "Dr. Naresh Mangalhara (Associate Professor)",
    ptId: "PT02",
  },
  {
    id: "Ward-02",
    ward: "old_gastro_ward",
    wardTitle: "Old Gastro IR Ward",
    status: "vacant",
    ptName: "-",
    crNo: "-",
    diag: "Sterilized & Available",
    doctor: "-",
  },
  {
    id: "Ward-03",
    ward: "old_gastro_ward",
    wardTitle: "Old Gastro IR Ward",
    status: "vacant",
    ptName: "-",
    crNo: "-",
    diag: "Sterilized & Available",
    doctor: "-",
  },
  {
    id: "Ward-04",
    ward: "old_gastro_ward",
    wardTitle: "Old Gastro IR Ward",
    status: "vacant",
    ptName: "-",
    crNo: "-",
    diag: "Sterilized & Available",
    doctor: "-",
  },
  {
    id: "Ward-05",
    ward: "old_gastro_ward",
    wardTitle: "Old Gastro IR Ward",
    status: "vacant",
    ptName: "-",
    crNo: "-",
    diag: "Sterilized & Available",
    doctor: "-",
  },
];

export default function BedBoardPage() {
  const { patients } = usePatientLogisticsStore();
  const [beds, setBeds] = useState<BedRecord[]>(INITIAL_BEDS);

  // Synchronize bed records with live patient logistics store
  useEffect(() => {
    setBeds((prevBeds) =>
      prevBeds.map((bed) => {
        const matchingPatient = patients.find((p: PatientLogisticsRecord) => p.assignedBedId === bed.id);
        if (matchingPatient) {
          const isDischarged = matchingPatient.currentStage === "PACU_PHASE_2_DISCHARGED";
          if (isDischarged) {
            return {
              ...bed,
              status: "cleaning",
              ptName: "-",
              crNo: "-",
              diag: "Terminal Sanitization in Progress (Post-Discharge)",
              doctor: "-",
            };
          }
          const dischargeNote = matchingPatient.dischargeStatus
            ? ` • Discharge Status: ${matchingPatient.dischargeStatus}`
            : "";
          return {
            ...bed,
            status: "occupied",
            ptName: matchingPatient.patientName,
            crNo: matchingPatient.crNumber,
            diag: `${matchingPatient.diagnosis} • Stage: ${matchingPatient.currentStage}${dischargeNote}`,
            doctor: matchingPatient.primaryOperator,
            ptId: matchingPatient.id,
          };
        }
        return bed;
      })
    );
  }, [patients]);

  const [selectedWard, setSelectedWard] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [transferModalBed, setTransferModalBed] = useState<BedRecord | null>(null);
  const [targetWard, setTargetWard] = useState<string>("ir_icu");
  const [actionSuccessMessage, setActionSuccessMessage] = useState<string | null>(null);

  // Only occupied beds are displayed
  const occupiedBeds = beds.filter((bed) => bed.status === "occupied");

  // Filtered occupied beds
  const filteredBeds = occupiedBeds.filter((bed) => {
    if (selectedWard !== "all" && bed.ward !== selectedWard) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = bed.ptName.toLowerCase().includes(q);
      const matchCr = bed.crNo.toLowerCase().includes(q);
      const matchId = bed.id.toLowerCase().includes(q);
      const matchDiag = bed.diag.toLowerCase().includes(q);
      if (!matchName && !matchCr && !matchId && !matchDiag) return false;
    }
    return true;
  });

  const handleToggleStatus = (bedId: string) => {
    setBeds((prev) =>
      prev.map((b) => {
        if (b.id !== bedId) return b;
        if (b.status === "cleaning") {
          return { ...b, status: "vacant", diag: "Clean & Ready for Admission" };
        }
        if (b.status === "occupied") {
          return {
            ...b,
            status: "cleaning",
            ptName: "-",
            crNo: "-",
            diag: "Terminal Sanitization in Progress",
            doctor: "-",
          };
        }
        return b;
      })
    );
  };

  const handleExecuteTransfer = () => {
    if (!transferModalBed) return;
    setActionSuccessMessage(
      `Patient ${transferModalBed.ptName} (${transferModalBed.crNo}) scheduled for transfer to ${targetWard.toUpperCase()}.`
    );
    setTimeout(() => {
      setTransferModalBed(null);
      setActionSuccessMessage(null);
    }, 1500);
  };

  return (
    <div className="space-y-4">
      {/* Minimal Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5E7EB] pb-3">
        <div className="flex items-center gap-2">
          <h1 className="text-base font-semibold text-[#111827]">Occupied Beds</h1>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#F3F4F6] text-[#4B5563]">
            {filteredBeds.length} active
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          {/* Ward filter tabs */}
          <div className="flex items-center gap-1 text-xs">
            {[
              { id: "all", label: "All Wards" },
              { id: "old_gastro_ward", label: "Old Gastro IR Ward" },
              { id: "ir_icu", label: "IR ICU" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedWard(tab.id)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  selectedWard === tab.id
                    ? "bg-[#111827] text-white"
                    : "bg-[#F3F4F6] text-[#4B5563] hover:bg-[#E5E7EB]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
            <input
              type="text"
              placeholder="Search occupied bed, patient, CR No..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-3 py-1 rounded-md border border-[#D1D5DB] bg-white text-xs text-[#111827] placeholder:text-[#9CA3AF] focus:border-[#111827] focus:outline-none w-full sm:w-60"
            />
          </div>
        </div>
      </div>

      {/* Occupied Bed Grid */}
      {filteredBeds.length === 0 ? (
        <div className="text-center py-12 border border-dashed border-[#E5E7EB] rounded-xl text-xs text-[#6B7280]">
          No occupied beds matching the current filter.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
          {filteredBeds.map((bed) => (
            <div
              key={bed.id}
              className="bg-white border border-[#E5E7EB] rounded-xl p-3.5 flex flex-col justify-between hover:border-[#D1D5DB] transition-colors"
            >
              <div>
                {/* Bed Identifier & Ward */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-[#F3F4F6] text-[#374151] flex items-center justify-center">
                      <BedDouble className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#111827]">
                        {bed.id}
                      </span>
                      <span className="text-[10px] text-[#6B7280] ml-1.5 font-normal">
                        {bed.wardTitle}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-[#FEF3C7] text-[#92400E]">
                    Occupied
                  </span>
                </div>

                {/* Patient Details */}
                <div className="space-y-1.5 text-xs mb-3">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-semibold text-[#111827] truncate">
                      {bed.ptName}
                    </span>
                    <span className="font-mono text-[10px] text-[#6B7280] shrink-0">
                      {bed.crNo}
                    </span>
                  </div>

                  <p className="text-[11px] text-[#374151] bg-[#F9FAFB] p-2 rounded border border-[#E5E7EB] leading-relaxed line-clamp-3">
                    {bed.diag}
                  </p>

                  <div className="flex items-center gap-1.5 text-[10px] text-[#6B7280] pt-0.5">
                    <Stethoscope className="w-3 h-3 text-[#4B5563] shrink-0" />
                    <span className="truncate">{bed.doctor}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 border-t border-[#F3F4F6] flex items-center gap-2">
                <button
                  onClick={() => setTransferModalBed(bed)}
                  className="flex-1 py-1 px-2.5 rounded border border-[#D1D5DB] bg-white text-[#374151] hover:bg-[#F9FAFB] text-xs font-medium flex items-center justify-center gap-1 transition-colors cursor-pointer"
                >
                  <ArrowRightLeft className="w-3 h-3 text-[#6B7280]" />
                  <span>Transfer</span>
                </button>
                <button
                  onClick={() => handleToggleStatus(bed.id)}
                  className="py-1 px-2.5 rounded border border-[#FECACA] bg-white text-[#DC2626] hover:bg-[#FEF2F2] text-xs font-medium transition-colors cursor-pointer"
                  title="Discharge patient"
                >
                  Discharge
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Transfer Patient Modal */}
      {transferModalBed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white border border-[#E5E7EB] rounded-xl w-full max-w-md shadow-xl p-5 relative">
            <button
              onClick={() => setTransferModalBed(null)}
              className="absolute top-4 right-4 p-1 rounded-md hover:bg-[#F3F4F6] text-[#6B7280] hover:text-[#111827] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#F3F4F6] text-[#111827] flex items-center justify-center">
                <ArrowRightLeft className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#111827]">
                  Bed Transfer Order
                </h3>
                <p className="text-[11px] text-[#6B7280]">
                  From: {transferModalBed.id} ({transferModalBed.wardTitle})
                </p>
              </div>
            </div>

            {actionSuccessMessage ? (
              <div className="py-6 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-[#059669] mx-auto" />
                <p className="text-xs font-semibold text-[#059669]">
                  {actionSuccessMessage}
                </p>
              </div>
            ) : (
              <div className="space-y-3.5 text-xs">
                <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg p-2.5 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Patient:</span>
                    <span className="font-semibold text-[#111827]">
                      {transferModalBed.ptName}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">CR Number:</span>
                    <span className="font-mono text-[#111827]">
                      {transferModalBed.crNo}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Consultant:</span>
                    <span className="text-[#111827]">{transferModalBed.doctor}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-[#374151] mb-1">
                    Destination Ward / Unit
                  </label>
                  <select
                    value={targetWard}
                    onChange={(e) => setTargetWard(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-md border border-[#D1D5DB] bg-white text-xs text-[#111827] focus:border-[#111827] focus:outline-none"
                  >
                    <option value="old_gastro_ward">Old Gastro IR Ward</option>
                    <option value="ir_icu">IR ICU</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-[#374151] mb-1">
                    Clinical Reason
                  </label>
                  <textarea
                    rows={2}
                    defaultValue="Post-procedure stabilization complete. Transitioning to step-down ward care."
                    className="w-full px-2.5 py-1.5 rounded-md border border-[#D1D5DB] bg-white text-xs text-[#111827] focus:border-[#111827] focus:outline-none resize-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-1">
                  <button
                    onClick={() => setTransferModalBed(null)}
                    className="px-3 py-1.5 rounded-md border border-[#D1D5DB] bg-white text-xs text-[#374151] hover:bg-[#F9FAFB] transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleExecuteTransfer}
                    className="px-3 py-1.5 rounded-md bg-[#111827] hover:bg-black text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Execute Transfer
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
