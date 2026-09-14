import React, { useState } from 'react';
import { SCHEMES_DATA, parseSmsNotification, ParsedSmsScheme } from '../data/schemesData';
import { useClinicalStore } from '../stores/useClinicalStore';
import {
  CreditCard,
  Search,
  CheckCircle2,
  FileCheck,
  Zap,
  ArrowRight,
  Filter,
  Check
} from 'lucide-react';

export const SchemeDirectoryPage: React.FC = () => {
  const activePatient = useClinicalStore((s) => s.activePatient);
  const setActivePatient = useClinicalStore((s) => s.setActivePatient);

  const [rawSmsInput, setRawSmsInput] = useState(
    'TID: 2026-CHIR-94812 approved for Package 2849-IN061A for patient Ramesh Kumar Card 892019283921 amount 47960'
  );
  const [parsedData, setParsedData] = useState<ParsedSmsScheme | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSchemeFilter, setActiveSchemeFilter] = useState<'ALL' | 'MAAY' | 'RGHS'>('ALL');
  const [isBoundToPatient, setIsBoundToPatient] = useState(false);

  const handleParseSms = () => {
    const result = parseSmsNotification(rawSmsInput);
    setParsedData(result);
    setIsBoundToPatient(false);
  };

  const handleApplyToActivePatient = () => {
    if (!parsedData) return;
    setActivePatient({
      ...activePatient,
      schemeTid: parsedData.tid || activePatient.schemeTid,
      procedureCode: parsedData.packageCode || activePatient.procedureCode
    });
    setIsBoundToPatient(true);
    setTimeout(() => setIsBoundToPatient(false), 2500);
  };

  const filteredPackages = SCHEMES_DATA.filter((pkg) => {
    if (activeSchemeFilter !== 'ALL' && pkg.scheme !== activeSchemeFilter) return false;
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      pkg.name.toLowerCase().includes(q) ||
      pkg.code.toLowerCase().includes(q) ||
      pkg.category.toLowerCase().includes(q) ||
      pkg.icd10.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-5 pb-12 font-sans">
      {/* Top Banner */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-lg font-bold text-[#202124] flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-[#1A73E8]" />
            <span>Government Health Scheme Directory & SMS Approval Parser</span>
          </h1>
          <p className="text-xs text-[#5F6368] mt-0.5">
            Mukhya Mantri Ayushman Arogya (MAAY) & RGHS tariffs • Pre-auth document checklists • Instant TID parser
          </p>
        </div>
      </div>

      {/* SMS / Notification Parser Card */}
      <div className="p-5 rounded-2xl bg-white border border-[#DADCE0] shadow-xs space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-[#202124] flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-emerald-600" />
            <span>Ayushman / Chiranjeevi SMS & Notification Parser</span>
          </span>
          <span className="text-[11px] text-[#5F6368] font-mono">Instant Card & TID Extractor</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 text-xs">
          <div className="lg:col-span-8 space-y-2">
            <textarea
              rows={3}
              value={rawSmsInput}
              onChange={(e) => setRawSmsInput(e.target.value)}
              placeholder="Paste SMS received from Ayushman / Chiranjeevi portal / TPA..."
              className="w-full p-3 bg-white border border-[#DADCE0] rounded-xl text-[#202124] placeholder-[#5F6368] focus:outline-none focus:border-[#1A73E8] font-mono text-xs shadow-xs"
            />
            <button
              onClick={handleParseSms}
              className="px-4 py-2 rounded-xl bg-[#1A73E8] hover:bg-[#1557B0] text-white font-bold text-xs transition shadow-xs"
            >
              Extract Card Details & Package
            </button>
          </div>

          <div className="lg:col-span-4 p-3.5 rounded-xl bg-[#F8F9FA] border border-[#DADCE0] flex flex-col justify-between space-y-2">
            <div>
              <div className="font-bold text-[#202124] text-xs mb-2">Parsed Scheme Data:</div>
              <div className="space-y-1 text-[#3C4043] font-mono text-[11px]">
                <div>TID: <span className="text-[#1A73E8] font-bold">{parsedData?.tid || '-'}</span></div>
                <div>Card No: <span className="text-[#202124] font-bold">{parsedData?.cardNo || '-'}</span></div>
                <div>Package: <span className="text-[#202124] font-bold">{parsedData?.packageCode || '-'}</span></div>
                <div>Amount: <span className="text-emerald-600 font-bold">{parsedData?.amount ? `₹${parsedData.amount}` : '-'}</span></div>
              </div>
            </div>

            {parsedData && parsedData.tid && (
              <button
                onClick={handleApplyToActivePatient}
                className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-[#1A73E8] hover:bg-[#1557B0] text-white font-bold text-xs transition mt-2 shadow-xs"
              >
                {isBoundToPatient ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                <span>{isBoundToPatient ? 'Bound to Patient!' : 'Apply to Active Patient'}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-3.5 rounded-2xl bg-white border border-[#DADCE0] shadow-xs flex items-center justify-between flex-wrap gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-[#5F6368] font-semibold flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Scheme:
          </span>
          <button
            onClick={() => setActiveSchemeFilter('ALL')}
            className={`px-3 py-1 rounded-lg font-semibold transition shadow-xs ${
              activeSchemeFilter === 'ALL'
                ? 'bg-[#1A73E8] text-white'
                : 'bg-white border border-[#DADCE0] text-[#3C4043] hover:bg-[#F8F9FA]'
            }`}
          >
            All Packages
          </button>
          <button
            onClick={() => setActiveSchemeFilter('MAAY')}
            className={`px-3 py-1 rounded-lg font-semibold transition shadow-xs ${
              activeSchemeFilter === 'MAAY'
                ? 'bg-[#1A73E8] text-white'
                : 'bg-white border border-[#DADCE0] text-[#3C4043] hover:bg-[#F8F9FA]'
            }`}
          >
            MAAY (Chiranjeevi)
          </button>
          <button
            onClick={() => setActiveSchemeFilter('RGHS')}
            className={`px-3 py-1 rounded-lg font-semibold transition shadow-xs ${
              activeSchemeFilter === 'RGHS'
                ? 'bg-[#1A73E8] text-white'
                : 'bg-white border border-[#DADCE0] text-[#3C4043] hover:bg-[#F8F9FA]'
            }`}
          >
            RGHS Packages
          </button>
        </div>

        <div className="w-full sm:w-72 relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-2 text-[#5F6368]" />
          <input
            type="text"
            placeholder="Search procedure, code, ICD-10..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1 bg-white border border-[#DADCE0] rounded-lg text-[#202124] placeholder-[#5F6368] focus:outline-none focus:border-[#1A73E8] text-xs shadow-xs"
          />
        </div>
      </div>

      {/* Scheme Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        {filteredPackages.map((pkg) => (
          <div
            key={pkg.code}
            className="p-4 rounded-2xl bg-white border border-[#DADCE0] shadow-xs flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase font-mono ${
                    pkg.scheme === 'MAAY'
                      ? 'bg-[#E8F0FE] text-[#1A73E8] border border-[#1A73E8]/30'
                      : 'bg-cyan-50 text-cyan-700 border border-cyan-200'
                  }`}>
                    {pkg.scheme}
                  </span>
                  <h3 className="font-bold text-sm text-[#202124] mt-1.5">{pkg.name}</h3>
                </div>
                <div className="text-right">
                  <span className="font-bold text-sm font-mono text-emerald-600">
                    ₹{pkg.price.toLocaleString('en-IN')}
                  </span>
                  <div className="font-mono text-[10px] text-[#5F6368]">{pkg.code}</div>
                </div>
              </div>

              <div className="text-[11px] text-[#5F6368] mt-1">
                Category: <span className="text-[#202124] font-medium">{pkg.category}</span> • ICD-10: <span className="font-mono text-[#202124] font-medium">{pkg.icd10}</span>
              </div>

              {/* Implants */}
              {pkg.implants.length > 0 && (
                <div className="mt-3 p-2.5 rounded-xl bg-[#F8F9FA] border border-[#DADCE0] space-y-1">
                  <span className="text-[10px] font-bold uppercase text-[#5F6368] block font-mono">Approved Implants:</span>
                  <div className="space-y-0.5 text-[11px] font-mono text-[#3C4043]">
                    {pkg.implants.map((imp, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span>• {imp.name} ({imp.code})</span>
                        {imp.price && <span className="text-[#5F6368]">₹{imp.price.toLocaleString('en-IN')}</span>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Documentation Checklist */}
              <div className="mt-3 space-y-1">
                <span className="text-[10px] font-bold uppercase text-[#5F6368] flex items-center gap-1 font-mono">
                  <FileCheck className="w-3.5 h-3.5 text-[#1A73E8]" />
                  Pre-Auth & Claim Documentation:
                </span>
                <ul className="text-[11px] text-[#5F6368] space-y-1 pl-1">
                  {pkg.documentationChecklist.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
