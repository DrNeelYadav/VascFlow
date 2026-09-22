"use client";

import React, { useState, useEffect } from "react";
import { usePatientLogisticsStore, PatientLogisticsRecord } from "@/app/lib/logistics/patientLogisticsStore";
import {
  BedDouble,
  Users,
  Search,
  Filter,
  ArrowRightLeft,
  CheckCircle2,
  Sparkles,
  AlertCircle,
  X,
  Building,
  UserCheck,
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
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [transferModalBed, setTransferModalBed] = useState<BedRecord | null>(null);
  const [targetWard, setTargetWard] = useState<string>("ir_icu");
  const [actionSuccessMessage, setActionSuccessMessage] = useState<string | null>(null);

  // Compute metrics
  const totalBeds = beds.length;
  const occupiedCount = beds.filter((b) => b.status === "occupied").length;
  const vacantCount = beds.filter((b) => b.status === "vacant").length;
  const cleaningCount = beds.filter((b) => b.status === "cleaning").length;
  const occupancyPercent = Math.round((occupiedCount / totalBeds) * 100);

  // Filtered beds
  const filteredBeds = beds.filter((bed) => {
    if (selectedWard !== "all" && bed.ward !== selectedWard) return false;
    if (selectedStatus !== "all" && bed.status !== selectedStatus) return false;
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
    <div className="space-y-5">
      {/* Top Header Card */}
      <div className="bg-white border border-[#DADCE0] rounded-2xl p-5 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1E8E3E]" />
              <h1 className="text-lg font-bold text-[#202124]">
                28-Bed Inpatient Bed Board
              </h1>
              <span className="px-2 py-0.5 text-[11px] font-semibold rounded-full bg-[#E8F0FE] text-[#1A73E8]">
                Real-Time Bed Matrix
              </span>
            </div>
            <p className="text-xs text-[#5F6368]">
              Department of Interventional Radiology • SMS Medical College & Attached Hospitals
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
            <div className="px-3.5 py-2 rounded-xl bg-[#F8F9FA] border border-[#DADCE0]">
              <div className="text-[11px] text-[#5F6368]">Total Capacity</div>
              <div className="text-base font-bold text-[#202124]">{totalBeds} Beds</div>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-[#E8F0FE] border border-[#D2E3FC]">
              <div className="text-[11px] text-[#1A73E8] font-medium">Occupied</div>
              <div className="text-base font-bold text-[#1A73E8]">
                {occupiedCount} ({occupancyPercent}%)
              </div>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-[#E6F4EA] border border-[#CEEAD6]">
              <div className="text-[11px] text-[#137333] font-medium">Available</div>
              <div className="text-base font-bold text-[#137333]">{vacantCount} Beds</div>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-[#FEF7E0] border border-[#FEEFC3]">
              <div className="text-[11px] text-[#B06000] font-medium">Sanitizing</div>
              <div className="text-base font-bold text-[#B06000]">{cleaningCount} Beds</div>
            </div>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="mt-5 pt-4 border-t border-[#F1F3F4] flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Ward Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            {[
              { id: "all", label: "All Wards" },
              { id: "old_gastro_ward", label: "Old Gastro IR Ward" },
              { id: "ir_icu", label: "IR ICU" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedWard(tab.id)}
                className={`px-3 py-1.5 rounded-full font-medium transition-colors cursor-pointer ${
                  selectedWard === tab.id
                    ? "bg-[#1A73E8] text-white shadow-xs"
                    : "bg-white text-[#3C4043] border border-[#DADCE0] hover:bg-[#F1F3F4]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Status and Search */}
          <div className="flex items-center gap-2">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-1.5 rounded-full border border-[#DADCE0] bg-white text-xs text-[#3C4043] focus:border-[#1A73E8] focus:outline-none"
            >
              <option value="all">All Statuses</option>
              <option value="occupied">Occupied Only</option>
              <option value="vacant">Vacant Only</option>
              <option value="cleaning">Sanitizing Only</option>
            </select>

            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#5F6368]" />
              <input
                type="text"
                placeholder="Search bed, patient, CR No..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 rounded-full border border-[#DADCE0] bg-white text-xs text-[#202124] focus:border-[#1A73E8] focus:outline-none w-48 sm:w-56"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bed Board Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {filteredBeds.map((bed) => {
          const isOccupied = bed.status === "occupied";
          const isCleaning = bed.status === "cleaning";
          const isVacant = bed.status === "vacant";

          return (
            <div
              key={bed.id}
              className={`bg-white border rounded-2xl p-4 shadow-xs transition-all hover:shadow-md flex flex-col justify-between ${
                isOccupied
                  ? "border-[#DADCE0]"
                  : isCleaning
                  ? "border-[#FEEFC3] bg-[#FEFDF8]"
                  : "border-[#CEEAD6] bg-[#F9FCFA]"
              }`}
            >
              <div>
                {/* Bed Identifier & Status Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                        isOccupied
                          ? "bg-[#E8F0FE] text-[#1A73E8]"
                          : isCleaning
                          ? "bg-[#FEF7E0] text-[#B06000]"
                          : "bg-[#E6F4EA] text-[#137333]"
                      }`}
                    >
                      <BedDouble className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#202124]">
                        {bed.id}
                      </span>
                      <span className="text-[10px] text-[#5F6368] block">
                        {bed.wardTitle}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                      isOccupied
                        ? "bg-[#E8F0FE] text-[#1A73E8]"
                        : isCleaning
                        ? "bg-[#FEF7E0] text-[#B06000]"
                        : "bg-[#E6F4EA] text-[#137333]"
                    }`}
                  >
                    {bed.status}
                  </span>
                </div>

                {/* Patient / Bed Info */}
                {isOccupied ? (
                  <div className="space-y-2 mb-3 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#202124] text-sm truncate">
                        {bed.ptName}
                      </span>
                      <span className="font-mono text-[10px] font-semibold text-[#5F6368]">
                        {bed.crNo}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#3C4043] line-clamp-2 bg-[#F8F9FA] p-2 rounded-lg border border-[#DADCE0]">
                      {bed.diag}
                    </p>
                    <div className="flex items-center gap-1.5 text-[10px] text-[#5F6368]">
                      <Stethoscope className="w-3 h-3 text-[#1A73E8]" />
                      <span>{bed.doctor}</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 mb-3 text-xs py-2">
                    <p className="text-[11px] text-[#5F6368] italic">
                      {bed.diag}
                    </p>
                    <div className="text-[10px] text-[#80868B]">
                      {isCleaning
                        ? "Housekeeping protocol in progress"
                        : "Ready for bed allocation & catheter intake"}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons (White surfaces with Google styling) */}
              <div className="pt-3 border-t border-[#F1F3F4] flex items-center justify-between gap-2">
                {isOccupied ? (
                  <>
                    <button
                      onClick={() => setTransferModalBed(bed)}
                      className="flex-1 py-1.5 px-2 rounded-full border border-[#DADCE0] bg-white text-[#3C4043] hover:bg-[#F1F3F4] text-[11px] font-medium flex items-center justify-center gap-1 transition-colors cursor-pointer"
                    >
                      <ArrowRightLeft className="w-3 h-3 text-[#5F6368]" />
                      <span>Transfer</span>
                    </button>
                    <button
                      onClick={() => handleToggleStatus(bed.id)}
                      className="py-1.5 px-3 rounded-full border border-[#DADCE0] bg-white text-[#C5221F] hover:bg-[#FCE8E6] text-[11px] font-medium transition-colors cursor-pointer"
                      title="Discharge patient and mark bed for sanitization"
                    >
                      Discharge
                    </button>
                  </>
                ) : isCleaning ? (
                  <button
                    onClick={() => handleToggleStatus(bed.id)}
                    className="w-full py-1.5 px-2 rounded-full border border-[#CEEAD6] bg-[#FFFFFF] text-[#137333] hover:bg-[#E6F4EA] text-[11px] font-medium flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Sanitization Complete → Make Vacant</span>
                  </button>
                ) : (
                  <div className="w-full py-1.5 px-2 rounded-full bg-[#F8F9FA] border border-[#DADCE0] text-[#5F6368] text-[11px] font-medium flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#137333]" />
                    <span>Bed Vacant &amp; Available</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Transfer Patient Modal */}
      {transferModalBed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white border border-[#DADCE0] rounded-2xl w-full max-w-md shadow-xl p-6 relative">
            <button
              onClick={() => setTransferModalBed(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-[#F1F3F4] text-[#5F6368] hover:text-[#202124] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center">
                <ArrowRightLeft className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#202124]">
                  Inpatient Bed Transfer Order
                </h3>
                <p className="text-xs text-[#5F6368]">
                  From Bed: {transferModalBed.id} ({transferModalBed.wardTitle})
                </p>
              </div>
            </div>

            {actionSuccessMessage ? (
              <div className="py-6 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-[#1E8E3E] mx-auto" />
                <p className="text-xs font-semibold text-[#1E8E3E]">
                  {actionSuccessMessage}
                </p>
              </div>
            ) : (
              <div className="space-y-4 text-xs">
                <div className="bg-[#F8F9FA] border border-[#DADCE0] rounded-xl p-3 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-[#5F6368]">Patient Name:</span>
                    <span className="font-bold text-[#202124]">
                      {transferModalBed.ptName}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5F6368]">CR Number:</span>
                    <span className="font-mono text-[#202124]">
                      {transferModalBed.crNo}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5F6368]">Treating Consultant:</span>
                    <span className="text-[#202124]">{transferModalBed.doctor}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#3C4043] mb-1">
                    Destination Ward / Unit
                  </label>
                  <select
                    value={targetWard}
                    onChange={(e) => setTargetWard(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-white text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                  >
                    <option value="old_gastro_ward">Old Gastro IR Ward</option>
                    <option value="ir_icu">IR ICU</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#3C4043] mb-1">
                    Clinical Reason for Transfer
                  </label>
                  <textarea
                    rows={2}
                    defaultValue="Post-procedure stabilization complete. Transitioning to step-down ward care."
                    className="w-full px-3 py-2 rounded-lg border border-[#DADCE0] bg-white text-[#202124] focus:border-[#1A73E8] focus:outline-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    onClick={() => setTransferModalBed(null)}
                    className="px-4 py-2 rounded-full border border-[#DADCE0] bg-white text-[#3C4043] hover:bg-[#F1F3F4] transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleExecuteTransfer}
                    className="px-4 py-2 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] text-white font-semibold transition-colors cursor-pointer"
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
