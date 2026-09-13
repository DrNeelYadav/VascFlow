"use client";

import React, { useState, useMemo } from "react";
import {
  IR_PROCEDURES_CATALOG,
  IRProcedure,
  IRDomain,
  IRModality,
} from "@vascule/catalog";
import {
  Database,
  Search,
  Filter,
  Layers,
  HeartPulse,
  Activity,
  Microscope,
  Radiation,
  Syringe,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  Package,
  ListChecks,
  ExternalLink,
  X,
  Plus,
} from "lucide-react";

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedDomain, setSelectedDomain] = useState<string>("all");
  const [selectedModality, setSelectedModality] = useState<string>("all");
  const [detailModalProc, setDetailModalProc] = useState<IRProcedure | null>(null);
  const [bookingFeedback, setBookingFeedback] = useState<string | null>(null);

  // Filter procedures
  const filteredProcedures = useMemo(() => {
    return IR_PROCEDURES_CATALOG.filter((proc) => {
      if (selectedDomain !== "all" && proc.domain !== selectedDomain) {
        return false;
      }
      if (selectedModality !== "all" && proc.modality !== selectedModality) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = proc.title.toLowerCase().includes(q);
        const matchKey = proc.key.toLowerCase().includes(q);
        const matchCat = proc.category.toLowerCase().includes(q);
        const matchCrit = proc.clinicalCriteria.toLowerCase().includes(q);
        const matchVessels = proc.targetVessels.some((v) =>
          v.toLowerCase().includes(q)
        );
        const matchHardware = proc.hardwareRequisition.some(
          (h) =>
            h.item.toLowerCase().includes(q) || h.desc.toLowerCase().includes(q)
        );
        const matchLabs = proc.requiredLabs.some((l) =>
          l.toLowerCase().includes(q)
        );
        if (
          !matchTitle &&
          !matchKey &&
          !matchCat &&
          !matchCrit &&
          !matchVessels &&
          !matchHardware &&
          !matchLabs
        ) {
          return false;
        }
      }
      return true;
    });
  }, [searchQuery, selectedDomain, selectedModality]);

  const domainCounts = useMemo(() => {
    const counts: Record<string, number> = { all: IR_PROCEDURES_CATALOG.length };
    IR_PROCEDURES_CATALOG.forEach((p) => {
      counts[p.domain] = (counts[p.domain] || 0) + 1;
    });
    return counts;
  }, []);

  const handleQueueProcedure = () => {
    if (!detailModalProc) return;
    setBookingFeedback(
      `Protocol for "${detailModalProc.title}" queued for Cath-Lab Suite booking!`
    );
    setTimeout(() => {
      setBookingFeedback(null);
      setDetailModalProc(null);
    }, 1500);
  };

  const getModalityColor = (mod: IRModality) => {
    switch (mod) {
      case "XA":
        return "bg-[#FCE8E6] text-[#C5221F] border-[#FAD2CF]";
      case "CT":
        return "bg-[#FEF7E0] text-[#B06000] border-[#FEEFC3]";
      case "US":
        return "bg-[#E6F4EA] text-[#137333] border-[#CEEAD6]";
      case "ROSE":
        return "bg-[#F3E8FD] text-[#7E22CE] border-[#E9D5FF]";
      case "FL":
        return "bg-[#E8F0FE] text-[#1A73E8] border-[#D2E3FC]";
      default:
        return "bg-[#F1F3F4] text-[#3C4043] border-[#DADCE0]";
    }
  };

  return (
    <div className="space-y-5">
      {/* Header & Search */}
      <div className="bg-white border border-[#DADCE0] rounded-2xl p-5 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Database className="w-5 h-5 text-[#1A73E8]" />
              <h1 className="text-lg font-bold text-[#202124]">
                100 Interventional Radiology Procedures Catalog
              </h1>
              <span className="px-2 py-0.5 text-[11px] font-semibold rounded-full bg-[#E8F0FE] text-[#1A73E8]">
                Standard Hospital Tariffs & Hardware Indents
              </span>
            </div>
            <p className="text-xs text-[#5F6368]">
              Department of Interventional Radiology • SMS Medical College & Attached Hospitals, Jaipur
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <div className="px-3.5 py-2 rounded-xl bg-[#F8F9FA] border border-[#DADCE0]">
              <div className="text-[11px] text-[#5F6368]">Total Procedures</div>
              <div className="text-base font-bold text-[#202124]">
                {IR_PROCEDURES_CATALOG.length} Interventions
              </div>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-[#E8F0FE] border border-[#D2E3FC]">
              <div className="text-[11px] text-[#1A73E8] font-medium">Matching</div>
              <div className="text-base font-bold text-[#1A73E8]">
                {filteredProcedures.length} Found
              </div>
            </div>
          </div>
        </div>

        {/* Domain Tabs & Modality Filter */}
        <div className="mt-5 pt-4 border-t border-[#F1F3F4] space-y-3">
          {/* Domain Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            {[
              { id: "all", label: `All Domains (${domainCounts["all"] || 100})` },
              {
                id: "embolization",
                label: `Embolization (${domainCounts["embolization"] || 0})`,
              },
              {
                id: "portal_htn",
                label: `Portal HTN (${domainCounts["portal_htn"] || 0})`,
              },
              {
                id: "oncology",
                label: `Oncology (${domainCounts["oncology"] || 0})`,
              },
              {
                id: "venous",
                label: `Venous (${domainCounts["venous"] || 0})`,
              },
              {
                id: "arterial",
                label: `Arterial (${domainCounts["arterial"] || 0})`,
              },
              {
                id: "biopsy",
                label: `Biopsies & Pain (${domainCounts["biopsy"] || 0})`,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedDomain(tab.id)}
                className={`px-3 py-1.5 rounded-full font-medium transition-colors cursor-pointer ${
                  selectedDomain === tab.id
                    ? "bg-[#1A73E8] text-white shadow-xs"
                    : "bg-white text-[#3C4043] border border-[#DADCE0] hover:bg-[#F1F3F4]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search & Modalities */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-[11px] font-semibold text-[#5F6368] mr-1">
                Modality:
              </span>
              {["all", "XA", "CT", "US", "ROSE", "FL"].map((mod) => (
                <button
                  key={mod}
                  onClick={() => setSelectedModality(mod)}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors cursor-pointer ${
                    selectedModality === mod
                      ? "bg-[#202124] text-white"
                      : "bg-[#F1F3F4] text-[#5F6368] hover:bg-[#E8EAED] hover:text-[#202124]"
                  }`}
                >
                  {mod === "all" ? "All" : mod}
                </button>
              ))}
            </div>

            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#5F6368]" />
              <input
                type="text"
                placeholder="Search procedure, vessel, hardware, lab..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 rounded-full border border-[#DADCE0] bg-white text-xs text-[#202124] focus:border-[#1A73E8] focus:outline-none w-full sm:w-80"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Catalog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredProcedures.map((proc) => {
          return (
            <div
              key={proc.key}
              className="bg-white border border-[#DADCE0] rounded-2xl p-4 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header: Domain, Modality, Tariff */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${getModalityColor(
                        proc.modality
                      )}`}
                    >
                      {proc.modality}
                    </span>
                    <span className="text-[10px] font-semibold text-[#5F6368] uppercase tracking-wider">
                      {proc.domain.replace("_", " ")}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-[#1A73E8] bg-[#E8F0FE] px-2.5 py-1 rounded-full">
                    ₹{proc.defaultPanelCostINR.toLocaleString("en-IN")}
                  </span>
                </div>

                {/* Procedure Title */}
                <h3 className="text-sm font-bold text-[#202124] mb-1.5 leading-snug">
                  {proc.title}
                </h3>

                {/* Clinical Criteria */}
                <p className="text-[11px] text-[#5F6368] line-clamp-2 mb-3">
                  {proc.clinicalCriteria}
                </p>

                {/* Target Vessels */}
                {proc.targetVessels.length > 0 && (
                  <div className="mb-3">
                    <span className="text-[10px] font-bold text-[#80868B] uppercase block mb-1">
                      Target Anatomy:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {proc.targetVessels.slice(0, 3).map((v, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-[#F1F3F4] text-[#3C4043] text-[10px] font-medium"
                        >
                          {v}
                        </span>
                      ))}
                      {proc.targetVessels.length > 3 && (
                        <span className="px-1.5 py-0.5 text-[10px] text-[#80868B]">
                          +{proc.targetVessels.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Hardware Requisition Summary */}
                <div className="flex items-center gap-4 text-[11px] text-[#5F6368] pt-2 border-t border-[#F1F3F4]">
                  <div className="flex items-center gap-1">
                    <Package className="w-3.5 h-3.5 text-[#1A73E8]" />
                    <span>{proc.hardwareRequisition.length} Hardware Indents</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ListChecks className="w-3.5 h-3.5 text-[#1E8E3E]" />
                    <span>{proc.preOpChecklist.length} Checkpoints</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 mt-3 border-t border-[#F1F3F4] flex items-center justify-between gap-2">
                <button
                  onClick={() => setDetailModalProc(proc)}
                  className="flex-1 py-1.5 px-3 rounded-full border border-[#DADCE0] bg-white text-[#3C4043] hover:bg-[#F1F3F4] text-[11px] font-medium transition-colors cursor-pointer"
                >
                  View Blueprint
                </button>
                <button
                  onClick={() => {
                    setDetailModalProc(proc);
                  }}
                  className="py-1.5 px-3 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] text-white text-[11px] font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Book Case</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Procedure Blueprint & Requisition Modal */}
      {detailModalProc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white border border-[#DADCE0] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 relative">
            <button
              onClick={() => setDetailModalProc(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-[#F1F3F4] text-[#5F6368] hover:text-[#202124] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 mb-4 pr-8">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${getModalityColor(
                      detailModalProc.modality
                    )}`}
                  >
                    {detailModalProc.modality}
                  </span>
                  <span className="text-[11px] font-semibold text-[#5F6368] uppercase">
                    {detailModalProc.category}
                  </span>
                </div>
                <h2 className="text-base font-bold text-[#202124]">
                  {detailModalProc.title}
                </h2>
              </div>
              <div className="text-right shrink-0">
                <div className="text-[10px] text-[#5F6368]">Panel Tariff</div>
                <div className="text-base font-bold text-[#1A73E8]">
                  ₹{detailModalProc.defaultPanelCostINR.toLocaleString("en-IN")}
                </div>
              </div>
            </div>

            {bookingFeedback ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-[#1E8E3E] mx-auto" />
                <p className="text-sm font-semibold text-[#1E8E3E]">
                  {bookingFeedback}
                </p>
              </div>
            ) : (
              <div className="space-y-4 text-xs">
                {/* Clinical Indication */}
                <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#DADCE0]">
                  <span className="text-[10px] font-bold text-[#80868B] uppercase block mb-1">
                    Clinical Criteria & Patient Selection:
                  </span>
                  <p className="text-xs text-[#202124] leading-relaxed">
                    {detailModalProc.clinicalCriteria}
                  </p>
                </div>

                {/* Target Vessels */}
                <div>
                  <span className="text-[10px] font-bold text-[#80868B] uppercase block mb-1.5">
                    Target Vessels / Vascular Territory:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {detailModalProc.targetVessels.map((v, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-[#F1F3F4] text-[#202124] font-medium"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mandatory Pre-Op Checklist */}
                <div>
                  <span className="text-[10px] font-bold text-[#80868B] uppercase block mb-1.5">
                    Mandatory Pre-Op Checkpoints ({detailModalProc.preOpChecklist.length}):
                  </span>
                  <div className="space-y-1.5">
                    {detailModalProc.preOpChecklist.map((c) => (
                      <div
                        key={c.id}
                        className="flex items-start gap-2 p-2 rounded-lg bg-white border border-[#DADCE0]"
                      >
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            c.required ? "text-[#1A73E8]" : "text-[#5F6368]"
                          }`}
                        />
                        <div className="flex-1">
                          <span className="text-[#202124] font-medium">
                            {c.label}
                          </span>
                          {c.required && (
                            <span className="ml-2 text-[10px] font-bold text-[#C5221F] uppercase">
                              Required
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hardware Requisition Indent */}
                <div>
                  <span className="text-[10px] font-bold text-[#80868B] uppercase block mb-1.5">
                    Angiosuite Hardware Requisition ({detailModalProc.hardwareRequisition.length}):
                  </span>
                  <div className="space-y-1.5">
                    {detailModalProc.hardwareRequisition.map((h, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-lg bg-[#F8F9FA] border border-[#DADCE0] flex flex-col sm:flex-row sm:items-baseline justify-between gap-1"
                      >
                        <span className="font-bold text-[#202124]">{h.item}</span>
                        <span className="text-[#5F6368] text-[11px]">{h.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Required Laboratory Investigations */}
                <div>
                  <span className="text-[10px] font-bold text-[#80868B] uppercase block mb-1.5">
                    Required Baseline Labs:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {detailModalProc.requiredLabs.map((lab, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-full bg-[#E8F0FE] text-[#1A73E8] font-medium text-[10px]"
                      >
                        {lab}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="pt-3 border-t border-[#DADCE0] flex items-center justify-end gap-2">
                  <button
                    onClick={() => setDetailModalProc(null)}
                    className="px-4 py-2 rounded-full border border-[#DADCE0] bg-white text-[#3C4043] hover:bg-[#F1F3F4] transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={handleQueueProcedure}
                    className="px-4 py-2 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] text-white font-semibold transition-colors cursor-pointer"
                  >
                    Queue for Cath-Lab Booking
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
