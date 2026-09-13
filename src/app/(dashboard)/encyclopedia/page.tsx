'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXTENSIVE_IR_PROCEDURES } from '@/data/procedures';
import { ProcedureBlueprint } from '@/types/clinical';
import {
  Search,
  Filter,
  CheckCircle2,
  Circle,
  AlertTriangle,
  Package,
  Wrench,
  ShieldCheck,
  PhoneCall,
  Printer,
  ChevronRight,
  BookOpen,
  Activity,
  Layers,
  FileSpreadsheet
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function EncyclopediaPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProcedureId, setActiveProcedureId] = useState<string>(EXTENSIVE_IR_PROCEDURES[0].id);
  const [checkedSteps, setCheckedSteps] = useState<Record<string, boolean>>({});

  const categories = useMemo(() => {
    const cats = Array.from(new Set(EXTENSIVE_IR_PROCEDURES.map((p) => p.category)));
    return ['All', ...cats];
  }, []);

  const filteredProcedures = useMemo(() => {
    return EXTENSIVE_IR_PROCEDURES.filter((proc) => {
      const matchesSearch =
        proc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        proc.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        proc.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCat = selectedCategory === 'All' || proc.category === selectedCategory;
      return matchesSearch && matchesCat;
    });
  }, [searchTerm, selectedCategory]);

  const activeProcedure = useMemo(() => {
    return EXTENSIVE_IR_PROCEDURES.find((p) => p.id === activeProcedureId) || EXTENSIVE_IR_PROCEDURES[0];
  }, [activeProcedureId]);

  const toggleStep = (procId: string, index: number) => {
    const key = `${procId}_${index}`;
    setCheckedSteps((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-4 pb-12">
      {/* Top Header Card */}
      <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-lg p-4 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center font-bold">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-heading font-medium text-lg text-[#202124] flex items-center gap-2">
              <span>SMS IR Procedure Master Encyclopedia</span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-[#E8F0FE] text-[#1A73E8]">
                {EXTENSIVE_IR_PROCEDURES.length} Comprehensive Procedures
              </span>
            </h1>
            <p className="text-xs text-[#5F6368]">
              Hardware indent formulations, sterile step-by-step technique protocols, and clinical safety safeguards
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#DADCE0] bg-[#FFFFFF] hover:bg-[#F8F9FA] text-xs font-medium text-[#202124] transition shadow-xs"
            title="Print A4 Clinical Blueprint Sheet"
          >
            <Printer className="w-3.5 h-3.5 text-[#5F6368]" />
            <span>Print Blueprint (A4)</span>
          </button>
        </div>
      </div>

      {/* Main Split-Pane Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        {/* Left Pane: Search, Category Filters & Procedure List */}
        <div className="lg:col-span-4 space-y-3">
          {/* Search & Category Filter Box */}
          <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-lg p-3 shadow-xs space-y-2">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-[#5F6368]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search procedures, codes, hardware..."
                className="w-full bg-[#F8F9FA] border border-[#DADCE0] rounded-full pl-9 pr-3 py-1.5 text-xs text-[#202124] placeholder-[#5F6368] outline-none focus:bg-[#FFFFFF] focus:border-[#1A73E8]"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-0.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    'px-2.5 py-1 rounded-full text-[11px] font-medium whitespace-nowrap transition',
                    selectedCategory === cat
                      ? 'bg-[#1A73E8] text-white font-medium shadow-xs'
                      : 'bg-[#F1F3F4] text-[#5F6368] hover:text-[#202124] hover:bg-[#E8EAED]'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Procedure List Cards */}
          <div className="space-y-1.5 max-h-[calc(100vh-280px)] overflow-y-auto pr-0.5">
            {filteredProcedures.map((proc) => {
              const isSelected = proc.id === activeProcedure.id;
              return (
                <button
                  key={proc.id}
                  onClick={() => setActiveProcedureId(proc.id)}
                  className={cn(
                    'w-full text-left p-3 rounded-lg border transition-all text-xs flex items-center justify-between',
                    isSelected
                      ? 'bg-[#E8F0FE] border-[#1A73E8] shadow-xs'
                      : 'bg-[#FFFFFF] border-[#DADCE0] hover:bg-[#F8F9FA] text-[#202124]'
                  )}
                >
                  <div className="space-y-0.5 flex-1 pr-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-[#5F6368] font-semibold">{proc.code}</span>
                      <span className="px-1.5 py-0.2 rounded text-[9px] font-medium bg-[#F1F3F4] text-[#5F6368]">
                        {proc.category}
                      </span>
                    </div>
                    <div className={cn('font-medium text-xs', isSelected ? 'text-[#1A73E8]' : 'text-[#202124]')}>
                      {proc.name}
                    </div>
                  </div>

                  <ChevronRight className={cn('w-4 h-4 shrink-0', isSelected ? 'text-[#1A73E8]' : 'text-[#DADCE0]')} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Pane: Selected Procedure Deep Blueprint */}
        <div className="lg:col-span-8 space-y-3">
          {/* Blueprint Detail Card */}
          <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-lg p-5 shadow-xs space-y-4">
            {/* Header */}
            <div className="border-b border-[#DADCE0] pb-3">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                <span className="font-mono text-xs text-[#1A73E8] font-bold bg-[#E8F0FE] px-2 py-0.5 rounded-full">
                  {activeProcedure.code} • {activeProcedure.category}
                </span>
                <span className="text-xs text-[#5F6368] font-medium">
                  SMS Hospital MAAY Tariff: <b>INR {activeProcedure.maayTariffInr.toLocaleString()}</b>
                </span>
              </div>
              <h2 className="font-heading font-medium text-xl text-[#202124]">
                {activeProcedure.name}
              </h2>
            </div>

            {/* Indications & Pre-Op Workup */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="bg-[#F8F9FA] border border-[#DADCE0] rounded-lg p-3">
                <div className="font-semibold text-[#202124] mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1E8E3E]" />
                  <span>Clinical Indications</span>
                </div>
                <ul className="space-y-1 text-[#5F6368] list-disc pl-4">
                  {activeProcedure.indications.map((ind, i) => (
                    <li key={i}>{ind}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#F8F9FA] border border-[#DADCE0] rounded-lg p-3">
                <div className="font-semibold text-[#202124] mb-1.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1A73E8]" />
                  <span>Pre-Op Lab & Clinical Criteria</span>
                </div>
                <ul className="space-y-1 text-[#5F6368] list-disc pl-4">
                  {activeProcedure.preOpCriteria.map((crit, i) => (
                    <li key={i}>{crit}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Hardware Indent Table */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-[#1A73E8]" />
                  <h3 className="font-heading font-medium text-sm text-[#202124]">
                    Mandatory Hardware & Inventory Indent
                  </h3>
                </div>
                <span className="text-[11px] text-[#5F6368]">Central IR Store Verified</span>
              </div>

              <div className="border border-[#E0E0E0] rounded-lg overflow-hidden">
                <table className="google-sheet-table">
                  <thead>
                    <tr className="bg-[#F8F9FA] text-[#5F6368] text-[11px]">
                      <th className="google-sheet-th">Item Specification</th>
                      <th className="google-sheet-th">Category</th>
                      <th className="google-sheet-th text-center">Specification</th>
                      <th className="google-sheet-th">SMS Store Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeProcedure.hardware.map((hw, idx) => (
                      <tr key={idx} className="google-sheet-row text-xs">
                        <td className="google-sheet-td font-medium text-[#202124]">{hw.name}</td>
                        <td className="google-sheet-td text-[#5F6368]">{hw.category}</td>
                        <td className="google-sheet-td text-center font-mono font-semibold">{hw.spec}</td>
                        <td className="google-sheet-td font-mono text-[11px] text-[#1A73E8]">{hw.standardStore}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Procedural Steps Checklist */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-[#1A73E8]" />
                  <h3 className="font-heading font-medium text-sm text-[#202124]">
                    Technique & Operative Sequence Protocol
                  </h3>
                </div>
                <span className="text-[11px] text-[#5F6368]">
                  {activeProcedure.techniqueSteps.length} Sequenced Milestones
                </span>
              </div>

              <div className="space-y-1.5">
                {activeProcedure.techniqueSteps.map((step: string, idx: number) => {
                  const isChecked = checkedSteps[`${activeProcedure.id}_${idx}`] || false;
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleStep(activeProcedure.id, idx)}
                      className={cn(
                        'p-2.5 rounded-lg border text-xs cursor-pointer flex items-start gap-2.5 transition',
                        isChecked
                          ? 'bg-[#E6F4EA]/40 border-[#1E8E3E]/30 text-[#137333]'
                          : 'bg-[#FFFFFF] border-[#DADCE0] hover:bg-[#F8F9FA] text-[#202124]'
                      )}
                    >
                      <div className="mt-0.5">
                        {isChecked ? (
                          <CheckCircle2 className="w-4 h-4 text-[#1E8E3E] shrink-0" />
                        ) : (
                          <Circle className="w-4 h-4 text-[#DADCE0] shrink-0" />
                        )}
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold mr-1.5">Step {idx + 1}:</span>
                        <span className={isChecked ? 'line-through opacity-80' : ''}>{step}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
