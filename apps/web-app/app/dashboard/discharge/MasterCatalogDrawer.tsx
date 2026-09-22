"use client";

import React, { useState, useMemo } from "react";
import {
  ALL_MASTER_PROCEDURES,
  MASTER_CATEGORIES_METADATA,
  MasterProcedure,
} from "../../lib/masterCatalog";
import { Search, X, Layers, ChevronRight, FileText } from "lucide-react";

export interface MasterCatalogDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProcedure: (procedure: MasterProcedure) => void;
}

export const MasterCatalogDrawer: React.FC<MasterCatalogDrawerProps> = ({
  isOpen,
  onClose,
  onSelectProcedure,
}) => {
  const [selectedCatNum, setSelectedCatNum] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProcedures = useMemo(() => {
    let procs = ALL_MASTER_PROCEDURES;
    if (selectedCatNum !== null) {
      procs = procs.filter((p) => p.categoryNumber === selectedCatNum);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      procs = procs.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.maayRghsCompatibility.packageCode.toLowerCase().includes(q) ||
          p.maayRghsCompatibility.packageName.toLowerCase().includes(q) ||
          p.maayRghsCompatibility.icd10.toLowerCase().includes(q) ||
          p.targetAnatomy.some((a) => a.toLowerCase().includes(q))
      );
    }
    return procs;
  }, [selectedCatNum, searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="w-full max-w-4xl h-full bg-white shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-right duration-200">
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-[#DADCE0] bg-[#F8F9FA] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-[#1A73E8]/10 text-[#1A73E8]">
                <Layers className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-sm font-bold text-[#202124] uppercase tracking-wider">
                  Master Procedural Catalog (1,120+ Procedures)
                </h3>
                <p className="text-xs text-[#5F6368]">
                  Select any procedure across the 22 Interventional Radiology domains to auto-populate the narrative &amp; discharge record.
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#E8EAED] text-[#5F6368] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search and Category Filter Bar */}
        <div className="p-4 border-b border-[#DADCE0] bg-white space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-[#80868B] absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search by procedure name, package code, ICD-10, or target vessel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-[#DADCE0] bg-[#F8F9FA] focus:bg-white focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8] outline-none"
            />
          </div>

          {/* Categories Pill Carousel */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
            <button
              onClick={() => setSelectedCatNum(null)}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCatNum === null
                  ? "bg-[#1A73E8] text-white"
                  : "bg-[#F1F3F4] text-[#3C4043] hover:bg-[#E8EAED]"
              }`}
            >
              All Categories ({ALL_MASTER_PROCEDURES.length})
            </button>
            {MASTER_CATEGORIES_METADATA.map((cat) => (
              <button
                key={cat.categoryNumber}
                onClick={() => setSelectedCatNum(cat.categoryNumber)}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCatNum === cat.categoryNumber
                    ? "bg-[#1A73E8] text-white"
                    : "bg-[#F1F3F4] text-[#3C4043] hover:bg-[#E8EAED]"
                }`}
              >
                Cat {cat.categoryNumber}: {cat.shortCode}
              </button>
            ))}
          </div>
        </div>

        {/* Procedures List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 bg-[#F8F9FA]">
          <div className="text-xs text-[#5F6368] font-semibold flex items-center justify-between pb-1">
            <span>Showing {filteredProcedures.length} Procedures</span>
            {selectedCatNum !== null && (
              <span className="text-[#1A73E8]">
                {MASTER_CATEGORIES_METADATA.find((m) => m.categoryNumber === selectedCatNum)?.categoryName}
              </span>
            )}
          </div>

          <div className="space-y-2.5">
            {filteredProcedures.map((proc) => (
              <div
                key={proc.id}
                onClick={() => {
                  onSelectProcedure(proc);
                  onClose();
                }}
                className="bg-white border border-[#DADCE0] hover:border-[#1A73E8] p-3.5 rounded-xl shadow-2xs hover:shadow-xs transition-all cursor-pointer group flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E8F0FE] text-[#1A73E8]">
                      Cat {proc.categoryNumber}
                    </span>
                    <span className="text-xs font-bold text-[#202124] group-hover:text-[#1A73E8] transition-colors">
                      {proc.title}
                    </span>
                    <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-[#F1F3F4] text-[#5F6368]">
                      Code: {proc.maayRghsCompatibility.packageCode}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#5F6368] line-clamp-2">
                    {proc.proceduralNarrativeTemplate.slice(0, 160)}...
                  </p>
                  <div className="flex items-center gap-2 text-[10px] text-[#80868B] pt-0.5">
                    <span>ICD-10: <strong>{proc.maayRghsCompatibility.icd10}</strong></span>
                    <span>&bull;</span>
                    <span>Anatomy: {proc.targetAnatomy.slice(0, 3).join(", ")}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                  <span className="px-2.5 py-1 rounded-full bg-[#E8F0FE] text-[#1A73E8] text-xs font-semibold flex items-center gap-1 group-hover:bg-[#1A73E8] group-hover:text-white transition-colors">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Apply Record</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
