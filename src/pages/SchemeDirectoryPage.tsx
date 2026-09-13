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
          <h1 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-crimson-500" />
            <span>Government Health Scheme Directory & SMS Approval Parser</span>
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Mukhya Mantri Ayushman Arogya (MAAY) & RGHS tariffs • Pre-auth document checklists • Instant TID parser
          </p>
        </div>
      </div>

      {/* SMS / Notification Parser Card */}
      <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-slate-100 flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span>Ayushman / Chiranjeevi SMS & Notification Parser</span>
          </span>
          <span className="text-[11px] text-slate-400 font-mono">Instant Card & TID Extractor</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 text-xs">
          <div className="lg:col-span-8 space-y-2">
            <textarea
              rows={3}
              value={rawSmsInput}
              onChange={(e) => setRawSmsInput(e.target.value)}
              placeholder="Paste SMS received from Ayushman / Chiranjeevi portal / TPA..."
              className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-crimson-600 font-mono text-xs"
            />
            <button
              onClick={handleParseSms}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition shadow-sm"
            >
              Extract Card Details & Package
            </button>
          </div>

          <div className="lg:col-span-4 p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-2">
            <div>
              <div className="font-bold text-slate-200 text-xs mb-2">Parsed Scheme Data:</div>
              <div className="space-y-1 text-slate-300 font-mono text-[11px]">
                <div>TID: <span className="text-crimson-400 font-bold">{parsedData?.tid || '-'}</span></div>
                <div>Card No: <span className="text-slate-100 font-bold">{parsedData?.cardNo || '-'}</span></div>
                <div>Package: <span className="text-slate-100 font-bold">{parsedData?.packageCode || '-'}</span></div>
                <div>Amount: <span className="text-emerald-400 font-bold">{parsedData?.amount ? `₹${parsedData.amount}` : '-'}</span></div>
              </div>
            </div>

            {parsedData && parsedData.tid && (
              <button
                onClick={handleApplyToActivePatient}
                className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-crimson-600 hover:bg-crimson-500 text-white font-bold text-xs transition mt-2"
              >
                {isBoundToPatient ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                <span>{isBoundToPatient ? 'Bound to Patient!' : 'Apply to Active Patient'}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between flex-wrap gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-slate-400 font-semibold flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Scheme:
          </span>
          <button
            onClick={() => setActiveSchemeFilter('ALL')}
            className={`px-3 py-1 rounded-lg font-semibold transition ${
              activeSchemeFilter === 'ALL'
                ? 'bg-crimson-600 text-white'
                : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            All Packages
          </button>
          <button
            onClick={() => setActiveSchemeFilter('MAAY')}
            className={`px-3 py-1 rounded-lg font-semibold transition ${
              activeSchemeFilter === 'MAAY'
                ? 'bg-crimson-600 text-white'
                : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            MAAY (Chiranjeevi)
          </button>
          <button
            onClick={() => setActiveSchemeFilter('RGHS')}
            className={`px-3 py-1 rounded-lg font-semibold transition ${
              activeSchemeFilter === 'RGHS'
                ? 'bg-crimson-600 text-white'
                : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            RGHS Packages
          </button>
        </div>

        <div className="w-full sm:w-72 relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-2 text-slate-400" />
          <input
            type="text"
            placeholder="Search procedure, code, ICD-10..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-crimson-600 text-xs"
          />
        </div>
      </div>

      {/* Scheme Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        {filteredPackages.map((pkg) => (
          <div
            key={pkg.code}
            className="p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase font-mono ${
                    pkg.scheme === 'MAAY'
                      ? 'bg-crimson-950 text-crimson-300 border border-crimson-800'
                      : 'bg-cyan-950 text-cyan-300 border border-cyan-800'
                  }`}>
                    {pkg.scheme}
                  </span>
                  <h3 className="font-bold text-sm text-slate-100 mt-1.5">{pkg.name}</h3>
                </div>
                <div className="text-right">
                  <span className="font-bold text-sm font-mono text-emerald-400">
                    ₹{pkg.price.toLocaleString('en-IN')}
                  </span>
                  <div className="font-mono text-[10px] text-slate-400">{pkg.code}</div>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 mt-1">
                Category: <span className="text-slate-300">{pkg.category}</span> • ICD-10: <span className="font-mono text-slate-300">{pkg.icd10}</span>
              </div>

              {/* Implants */}
              {pkg.implants.length > 0 && (
                <div className="mt-3 p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block font-mono">Approved Implants:</span>
                  <div className="space-y-0.5 text-[11px] font-mono text-slate-300">
                    {pkg.implants.map((imp, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span>• {imp.name} ({imp.code})</span>
                        {imp.price && <span className="text-slate-400">₹{imp.price.toLocaleString('en-IN')}</span>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Documentation Checklist */}
              <div className="mt-3 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400 flex items-center gap-1 font-mono">
                  <FileCheck className="w-3.5 h-3.5 text-crimson-400" />
                  Pre-Auth & Claim Documentation:
                </span>
                <ul className="text-[11px] text-slate-400 space-y-1 pl-1">
                  {pkg.documentationChecklist.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold">•</span>
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
