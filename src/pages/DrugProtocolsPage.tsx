import React, { useState } from 'react';
import { DRUG_PROTOCOLS } from '../data/protocolsData';
import { DrugProtocol } from '../types/clinical';
import { copyToClipboard } from '../lib/ihmsBridge';
import {
  Pill,
  Search,
  Copy,
  Check,
  AlertTriangle,
  Clock,
  ShieldAlert,
  Calendar,
  FileSpreadsheet
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const DrugProtocolsPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedProtocolId, setSelectedProtocolId] = useState<string>('bcs');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredProtocols = DRUG_PROTOCOLS.filter((p) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.indication.toLowerCase().includes(q) ||
      p.prescriptions.some((rx) => rx.item.toLowerCase().includes(q))
    );
  });

  const activeProtocol: DrugProtocol =
    DRUG_PROTOCOLS.find((p) => p.id === selectedProtocolId) || DRUG_PROTOCOLS[0];

  const handleCopyPrescription = async (protocol: DrugProtocol) => {
    const lines = [
      `SMS MEDICAL COLLEGE & ATTACHED HOSPITALS, JAIPUR`,
      `DEPARTMENT OF RADIODIAGNOSIS & INTERVENTIONAL RADIOLOGY`,
      `DISCHARGE PRESCRIPTION NOTE - ${protocol.name.toUpperCase()}`,
      `======================================================================`,
      `SCHEDULED DISCHARGE MEDICATIONS:`
    ];

    protocol.prescriptions.forEach((rx, idx) => {
      lines.push(`${idx + 1}. ${rx.item} (${rx.dose}) - Route: ${rx.route} | Freq: ${rx.freq}`);
      lines.push(`   Duration: ${rx.duration}`);
      if (rx.stepDown) lines.push(`   Step-Down: ${rx.stepDown}`);
      lines.push(`   Instructions: ${rx.instructions}`);
    });

    lines.push(`----------------------------------------------------------------------`);
    lines.push(`CONDITIONAL PRN MEDICATIONS (IN CASE IT IS REQUIRED):`);
    protocol.prnMedications.forEach((prn, idx) => {
      lines.push(`${idx + 1}. When: ${prn.trigger}`);
      lines.push(`   Take: ${prn.drug} (${prn.dose}) - ${prn.instructions}`);
    });

    lines.push(`----------------------------------------------------------------------`);
    lines.push(`SAFETY BLOOD TESTS & THRESHOLDS:`);
    protocol.safetyLabsToMonitor.forEach((lab) => lines.push(`• ${lab}`));

    lines.push(`----------------------------------------------------------------------`);
    lines.push(`RECALL & CLINIC FOLLOW-UP TIMELINE:`);
    protocol.recallSchedule.forEach((rec) => lines.push(`• ${rec}`));
    lines.push(`======================================================================`);

    await copyToClipboard(lines.join('\n'));
    setCopiedId(protocol.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-4 pb-12 font-sans">
      {/* Top Banner */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Pill className="w-5 h-5 text-crimson-500" />
            <span>Interventional Radiology Pharmacopeia, Protocols & e-Aushadhi Formularies</span>
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Exact discharge prescriptions • Conditional PRN orders • Laboratory safety thresholds • 2-week recall schedules
          </p>
        </div>

        <div className="w-full sm:w-72 relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search drug, protocol, indication..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-crimson-600"
          />
        </div>
      </div>

      {/* Grid: Left Index (4 cols) & Right Detailed Formularies (8 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Protocols Menu */}
        <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-3 shadow-sm space-y-1.5 max-h-[750px] overflow-y-auto">
          <div className="px-2 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Clinical Protocols ({filteredProtocols.length})
          </div>

          {filteredProtocols.map((prot) => {
            const isSelected = prot.id === activeProtocol.id;
            return (
              <button
                key={prot.id}
                onClick={() => setSelectedProtocolId(prot.id)}
                className={`w-full text-left p-2.5 rounded-xl border transition flex flex-col gap-1 ${
                  isSelected
                    ? 'bg-crimson-950/70 border-crimson-800/80 shadow-sm'
                    : 'bg-slate-950/60 border-slate-800 hover:bg-slate-850 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-bold text-xs ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                    {prot.shortName}
                  </span>
                  <span className="font-mono text-[10px] px-1.5 py-0.2 rounded bg-slate-900 border border-slate-800 text-slate-400">
                    {prot.category}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 line-clamp-1">
                  {prot.indication}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Protocol View */}
        <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm space-y-5">
          {/* Header */}
          <div className="flex items-start justify-between flex-wrap gap-3 pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-slate-100">{activeProtocol.name}</h2>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-crimson-950 text-crimson-300 border border-crimson-800">
                  {activeProtocol.category}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                <b>Clinical Indication:</b> {activeProtocol.indication}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleCopyPrescription(activeProtocol)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-crimson-600 hover:bg-crimson-500 text-white font-bold text-xs transition shadow-sm"
              >
                {copiedId === activeProtocol.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedId === activeProtocol.id ? 'Copied Rx Note!' : 'Copy Rx to Clipboard'}</span>
              </button>
              <button
                onClick={() => navigate('/discharge')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition"
                title="Open in Discharge Summary Form"
              >
                <FileSpreadsheet className="w-3.5 h-3.5" />
                <span>Discharge Studio</span>
              </button>
            </div>
          </div>

          {/* 1. Scheduled Discharge Medications */}
          <div className="space-y-2 text-xs">
            <div className="font-bold text-slate-200 flex items-center gap-1.5">
              <Pill className="w-4 h-4 text-crimson-400" />
              <span>Scheduled Discharge Prescriptions</span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/80 text-[11px] text-slate-400 uppercase font-mono">
                    <th className="p-2.5">Medication & Class</th>
                    <th className="p-2.5">Dose & Route</th>
                    <th className="p-2.5">Frequency</th>
                    <th className="p-2.5">Duration</th>
                    <th className="p-2.5">Clinical Instructions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 text-[11px]">
                  {activeProtocol.prescriptions.map((rx, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/40">
                      <td className="p-2.5">
                        <div className="font-bold text-slate-100">{rx.item}</div>
                        <div className="text-[10px] text-slate-500 font-mono">{rx.category}</div>
                      </td>
                      <td className="p-2.5 font-mono text-slate-200 font-semibold">{rx.dose} ({rx.route})</td>
                      <td className="p-2.5 font-mono text-crimson-400 font-semibold">{rx.freq}</td>
                      <td className="p-2.5 text-slate-300 font-mono">
                        <div>{rx.duration}</div>
                        {rx.stepDown && <div className="text-[10px] text-amber-400 mt-0.5">{rx.stepDown}</div>}
                      </td>
                      <td className="p-2.5 text-slate-400 text-[11px] leading-relaxed">{rx.instructions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Conditional PRN Medications */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
            <div className="font-bold text-slate-200 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>Conditional PRN Medications ("In Case It Is Required")</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              {activeProtocol.prnMedications.map((prn, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 space-y-1">
                  <div className="flex items-center justify-between text-amber-300 font-semibold text-[11px]">
                    <span>Trigger: {prn.trigger}</span>
                  </div>
                  <div className="font-bold text-slate-100 text-xs mt-1">
                    {prn.drug} ({prn.dose})
                  </div>
                  <div className="text-[11px] text-slate-400 leading-relaxed">
                    {prn.instructions}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Safety Blood Tests & Structured Recall */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="font-bold text-slate-200 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-emerald-400" />
                <span>Safety Blood Reports to Monitor</span>
              </div>
              <ul className="space-y-1.5 text-slate-400 text-[11px]">
                {activeProtocol.safetyLabsToMonitor.map((lab, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>{lab}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="font-bold text-slate-200 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span>Structured Recall & Follow-Up Timeline</span>
              </div>
              <ul className="space-y-1.5 text-slate-400 text-[11px]">
                {activeProtocol.recallSchedule.map((rec, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
