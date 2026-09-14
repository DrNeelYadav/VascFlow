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
  FileSpreadsheet,
  Layers,
  Calculator,
  FileText,
  CreditCard,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getCalculatorsForProtocol } from '../lib/procedureCalculators';
import { ProcedureCalculatorRunner } from '../components/ProcedureCalculatorRunner';
import { PreBookingWorkupModal } from '../components/PreBookingWorkupModal';

const PROTOCOL_SYSTEMS = [
  'ALL',
  'Hepatobiliary & Portal',
  'Vascular & Arterial',
  'Oncology & Ablation',
  'Genitourinary & Pelvic',
  'Venous & Lymphatic',
  'Neuro & Head/Neck',
  'Thoracic & Pulmonology',
  'Musculoskeletal & Pain',
  'Dialysis & Access'
] as const;

export const DrugProtocolsPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedProtocolId, setSelectedProtocolId] = useState<string>('bcs');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSystem, setActiveSystem] = useState<string>('ALL');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [workupModalOpen, setWorkupModalOpen] = useState<boolean>(false);

  const filteredProtocols = DRUG_PROTOCOLS.filter((p) => {
    if (activeSystem !== 'ALL' && p.system !== activeSystem) {
      return false;
    }
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.shortName.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.system && p.system.toLowerCase().includes(q)) ||
      p.indication.toLowerCase().includes(q) ||
      p.prescriptions.some((rx) => rx.item.toLowerCase().includes(q)) ||
      (p.yojanaRequirement && (
        p.yojanaRequirement.packageCode.toLowerCase().includes(q) ||
        p.yojanaRequirement.packageName.toLowerCase().includes(q) ||
        p.yojanaRequirement.icd10Code.toLowerCase().includes(q) ||
        p.yojanaRequirement.primaryScheme.toLowerCase().includes(q) ||
        (p.yojanaRequirement.secondaryPackageCode && p.yojanaRequirement.secondaryPackageCode.toLowerCase().includes(q))
      ))
    );
  });

  const activeProtocol: DrugProtocol =
    DRUG_PROTOCOLS.find((p) => p.id === selectedProtocolId) || DRUG_PROTOCOLS[0];

  const associatedCalculators = getCalculatorsForProtocol(activeProtocol.id);
  const [selectedCalcId, setSelectedCalcId] = useState<string | null>(null);
  const currentCalcId =
    selectedCalcId && associatedCalculators.some((c) => c.id === selectedCalcId)
      ? selectedCalcId
      : associatedCalculators[0]?.id || null;

  const handleCopyPrescription = async (protocol: DrugProtocol) => {
    const lines = [
      `SMS MEDICAL COLLEGE & ATTACHED HOSPITALS, JAIPUR`,
      `DEPARTMENT OF RADIODIAGNOSIS & INTERVENTIONAL RADIOLOGY`,
      `DISCHARGE PRESCRIPTION NOTE - ${protocol.name.toUpperCase()}`,
      `======================================================================`,
      `ORGAN SYSTEM: ${(protocol.system || protocol.category).toUpperCase()}`,
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
      {/* Top Banner & Search */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-lg font-bold text-[#202124] flex items-center gap-2">
            <Pill className="w-5 h-5 text-[#1A73E8]" />
            <span>Interventional Radiology Pharmacopeia, Protocols & e-Aushadhi Formularies</span>
          </h1>
          <p className="text-xs text-[#5F6368] mt-0.5">
            46 Clinical Protocols across 9 organ systems • Discharge prescriptions • PRN rescue orders • Laboratory thresholds • Structured recall
          </p>
        </div>

        <div className="w-full sm:w-72 relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-[#5F6368]" />
          <input
            type="text"
            placeholder="Search drug, protocol, indication..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-[#DADCE0] rounded-lg text-[#202124] placeholder-[#5F6368] focus:outline-none focus:border-[#1A73E8] shadow-xs"
          />
        </div>
      </div>

      {/* System-Wise Filter Buttons Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin">
        <span className="text-xs font-semibold text-[#5F6368] flex items-center gap-1 shrink-0 mr-1">
          <Layers className="w-3.5 h-3.5 text-[#1A73E8]" /> System:
        </span>
        {PROTOCOL_SYSTEMS.map((sys) => {
          const isSelected = activeSystem === sys;
          const count = sys === 'ALL'
            ? DRUG_PROTOCOLS.length
            : DRUG_PROTOCOLS.filter((p) => p.system === sys).length;
          return (
            <button
              key={sys}
              onClick={() => {
                setActiveSystem(sys);
                if (sys !== 'ALL' && activeProtocol.system !== sys) {
                  const firstInSys = DRUG_PROTOCOLS.find((p) => p.system === sys);
                  if (firstInSys) setSelectedProtocolId(firstInSys.id);
                }
              }}
              className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition shadow-xs flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-[#1A73E8] text-white font-semibold'
                  : 'bg-white border border-[#DADCE0] text-[#3C4043] hover:bg-[#F8F9FA] font-medium'
              }`}
            >
              <span>{sys === 'ALL' ? 'All Systems' : sys}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                isSelected ? 'bg-white/20 text-white font-bold' : 'bg-[#F1F3F4] text-[#5F6368]'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid: Left Index (4 cols) & Right Detailed Formularies (8 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Protocols Menu */}
        <div className="lg:col-span-4 bg-white border border-[#DADCE0] rounded-2xl p-3 shadow-xs space-y-1.5 max-h-[750px] overflow-y-auto">
          <div className="px-2 py-1 text-[11px] font-bold text-[#5F6368] uppercase tracking-wider flex items-center justify-between">
            <span>Clinical Protocols</span>
            <span className="font-mono text-[#1A73E8]">{filteredProtocols.length} Available</span>
          </div>

          {filteredProtocols.map((prot) => {
            const isSelected = prot.id === activeProtocol.id;
            return (
              <button
                key={prot.id}
                onClick={() => setSelectedProtocolId(prot.id)}
                className={`w-full text-left px-3 py-2.5 rounded-xl border transition text-xs shadow-xs ${
                  isSelected
                    ? 'bg-[#E8F0FE] border-[#1A73E8] text-[#1A73E8] font-bold'
                    : 'bg-white border-[#DADCE0] hover:bg-[#F8F9FA] text-[#202124] font-medium'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs truncate">{prot.shortName}</span>
                </div>
                {prot.yojanaRequirement && (
                  <div className="mt-1.5 flex items-center justify-between text-[10px] font-mono">
                    <span className="px-1.5 py-0.5 rounded font-semibold bg-[#E8F0FE] text-[#1A73E8]">
                      {prot.yojanaRequirement.packageCode}
                    </span>
                    <span className="font-bold text-[#137333]">
                      ₹{prot.yojanaRequirement.tariffAmountInr.toLocaleString('en-IN')}
                    </span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Right Protocol View */}
        <div className="lg:col-span-8 bg-white border border-[#DADCE0] rounded-2xl p-5 shadow-xs space-y-5">
          {/* Header */}
          <div className="flex items-start justify-between flex-wrap gap-3 pb-4 border-b border-[#DADCE0]">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-base font-bold text-[#202124]">{activeProtocol.name}</h2>
                {activeProtocol.system && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E8F0FE] text-[#1A73E8] border border-[#1A73E8]/30">
                    {activeProtocol.system}
                  </span>
                )}
                <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#F1F3F4] text-[#5F6368] border border-[#DADCE0]">
                  {activeProtocol.category}
                </span>
              </div>
              <p className="text-xs text-[#5F6368] mt-1 leading-relaxed">
                <b>Clinical Indication:</b> {activeProtocol.indication}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setWorkupModalOpen(true)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#DADCE0] bg-white hover:bg-[#F8F9FA] text-[#1A73E8] font-bold text-xs transition shadow-xs"
                title="Open Pre-Booking Clinical Workup & Procedure Dossier"
              >
                <FileText className="w-3.5 h-3.5 text-[#1A73E8]" />
                <span>Pre-Booking Dossier</span>
              </button>
              <button
                onClick={() => handleCopyPrescription(activeProtocol)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#1A73E8] hover:bg-[#1557B0] text-white font-bold text-xs transition shadow-xs"
              >
                {copiedId === activeProtocol.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedId === activeProtocol.id ? 'Copied Rx Note!' : 'Copy Rx to Clipboard'}</span>
              </button>
              <button
                onClick={() => navigate('/discharge')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-white hover:bg-[#F8F9FA] text-[#3C4043] text-xs font-semibold transition shadow-xs"
                title="Open in Discharge Summary Form"
              >
                <FileSpreadsheet className="w-3.5 h-3.5" />
                <span>Discharge Studio</span>
              </button>
            </div>
          </div>

          {/* Government Yojana Tariffs & Pre-Authorization Requirements */}
          {activeProtocol.yojanaRequirement && (
            <div className="rounded-2xl border border-[#DADCE0] bg-white p-4 shadow-xs space-y-4">
              <div className="flex items-start justify-between flex-wrap gap-2 pb-3 border-b border-[#DADCE0]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-bold bg-[#E8F0FE] text-[#1A73E8] border border-[#1A73E8]/30">
                      <CreditCard className="w-3.5 h-3.5 text-[#1A73E8]" />
                      {activeProtocol.yojanaRequirement.primaryScheme} Scheme Package
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-xs font-mono font-bold bg-[#FEF7E0] text-[#B06000] border border-[#B06000]/30">
                      Code: {activeProtocol.yojanaRequirement.packageCode}
                    </span>
                    {activeProtocol.yojanaRequirement.secondaryPackageCode && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-[#F1F3F4] text-[#3C4043] border border-[#DADCE0]">
                        {activeProtocol.yojanaRequirement.secondaryPackageCode}
                      </span>
                    )}
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-[#E6F4EA] text-[#137333] border border-[#137333]/30">
                      ICD-10: {activeProtocol.yojanaRequirement.icd10Code}
                    </span>
                  </div>
                  <div className="text-sm font-bold text-[#202124]">
                    {activeProtocol.yojanaRequirement.packageName}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-[#5F6368] font-medium">
                    Govt Health Schemes (MAAY / RGHS / AB-PMJAY)
                  </span>
                </div>
              </div>

              {/* Metric Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#DADCE0]">
                  <div className="text-[10px] uppercase font-bold text-[#5F6368]">Package Tariff</div>
                  <div className="text-lg font-black text-[#137333] mt-0.5 font-mono">
                    ₹{activeProtocol.yojanaRequirement.tariffAmountInr.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[10px] text-[#5F6368] mt-0.5">Government Approved Rate</div>
                </div>
                <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#DADCE0]">
                  <div className="text-[10px] uppercase font-bold text-[#5F6368]">Implant Ceiling</div>
                  <div className="text-lg font-black text-[#1A73E8] mt-0.5 font-mono">
                    {activeProtocol.yojanaRequirement.implantReimbursementCeilingInr
                      ? `₹${activeProtocol.yojanaRequirement.implantReimbursementCeilingInr.toLocaleString('en-IN')}`
                      : 'As per actuals'}
                  </div>
                  <div className="text-[10px] text-[#5F6368] mt-0.5">Reimbursement Limit</div>
                </div>
                <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#DADCE0]">
                  <div className="text-[10px] uppercase font-bold text-[#5F6368]">Admission Type</div>
                  <div className="text-sm font-bold text-[#202124] mt-1">
                    {activeProtocol.yojanaRequirement.ipdAdmissionRequired ? 'Mandatory IPD' : 'Daycare Eligible'}
                  </div>
                  <div className="text-[10px] text-[#5F6368] mt-0.5">
                    {activeProtocol.yojanaRequirement.ipdAdmissionRequired ? 'Min 24-48h Hospitalization' : 'Same-Day Discharge'}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#DADCE0]">
                  <div className="text-[10px] uppercase font-bold text-[#5F6368]">Pre-Auth Turnaround</div>
                  <div className="text-sm font-bold text-[#202124] mt-1 font-mono">
                    {activeProtocol.yojanaRequirement.preAuthTurnaroundHours || 4} Hours
                  </div>
                  <div className="text-[10px] text-[#5F6368] mt-0.5">Online TMS Portal</div>
                </div>
              </div>

              {/* Implants & Pre-Auth Checklist 2-Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Approved Implants */}
                <div className="p-3.5 rounded-xl border border-[#DADCE0] bg-[#F8F9FA] space-y-2">
                  <div className="font-bold text-xs text-[#202124] flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#1A73E8]" />
                      Approved Implants & Hardware Schedule
                    </span>
                    <span className="text-[10px] font-mono text-[#5F6368]">
                      {activeProtocol.yojanaRequirement.approvedImplants.length} Items
                    </span>
                  </div>
                  <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                    {activeProtocol.yojanaRequirement.approvedImplants.map((imp, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#DADCE0] text-[11px]">
                        <div className="space-y-0.5">
                          <div className="font-semibold text-[#202124]">{imp.name}</div>
                          <div className="text-[10px] text-[#5F6368] font-mono">Code: {imp.code}</div>
                        </div>
                        {imp.price ? (
                          <span className="font-bold text-[#137333] font-mono whitespace-nowrap ml-2">
                            ₹{imp.price.toLocaleString('en-IN')}
                          </span>
                        ) : (
                          <span className="text-[10px] text-[#5F6368] font-mono whitespace-nowrap ml-2">Govt Tariff</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mandatory Pre-Auth Documents */}
                <div className="p-3.5 rounded-xl border border-[#DADCE0] bg-[#F8F9FA] space-y-2">
                  <div className="font-bold text-xs text-[#202124] flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#137333]" />
                      Mandatory Pre-Auth Checklist
                    </span>
                    <span className="text-[10px] font-mono text-[#5F6368]">Required for Approval</span>
                  </div>
                  <ul className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                    {activeProtocol.yojanaRequirement.mandatoryPreAuthDocuments.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-white border border-[#DADCE0] text-[11px] text-[#3C4043]">
                        <span className="w-4 h-4 rounded-full bg-[#E6F4EA] text-[#137333] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✓</span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Application Steps on TMS Portal */}
              <div className="p-3.5 rounded-xl border border-[#DADCE0] bg-[#F8F9FA] space-y-2">
                <div className="font-bold text-xs text-[#202124] flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-[#B06000]" />
                    Step-by-Step Portal Application Instructions ({activeProtocol.yojanaRequirement.primaryScheme} / TMS)
                  </span>
                  <span className="text-[10px] text-[#5F6368]">Transaction Management System Workflow</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-[#3C4043]">
                  {activeProtocol.yojanaRequirement.applicationSteps.map((step, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-white border border-[#DADCE0] leading-relaxed">
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 1. Scheduled Discharge Medications */}
          <div className="space-y-2 text-xs">
            <div className="font-bold text-[#202124] flex items-center gap-1.5">
              <Pill className="w-4 h-4 text-[#1A73E8]" />
              <span>Scheduled Discharge Prescriptions</span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-[#DADCE0] bg-white shadow-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#DADCE0] bg-[#F8F9FA] text-[11px] text-[#5F6368] uppercase font-mono">
                    <th className="p-2.5">Medication & Class</th>
                    <th className="p-2.5">Dose & Route</th>
                    <th className="p-2.5">Frequency</th>
                    <th className="p-2.5">Duration</th>
                    <th className="p-2.5">Clinical Instructions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DADCE0] text-[11px]">
                  {activeProtocol.prescriptions.map((rx, idx) => (
                    <tr key={idx} className="hover:bg-[#F8F9FA]">
                      <td className="p-2.5">
                        <div className="font-bold text-[#202124]">{rx.item}</div>
                        <div className="text-[10px] text-[#5F6368] font-mono">{rx.category}</div>
                      </td>
                      <td className="p-2.5 font-mono text-[#202124] font-semibold">{rx.dose} ({rx.route})</td>
                      <td className="p-2.5 font-mono text-[#1A73E8] font-semibold">{rx.freq}</td>
                      <td className="p-2.5 text-[#3C4043] font-mono">
                        <div>{rx.duration}</div>
                        {rx.stepDown && <div className="text-[10px] text-amber-600 mt-0.5">{rx.stepDown}</div>}
                      </td>
                      <td className="p-2.5 text-[#5F6368] text-[11px] leading-relaxed">{rx.instructions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Conditional PRN Medications */}
          <div className="p-4 rounded-xl bg-white border border-[#DADCE0] shadow-xs space-y-2 text-xs">
            <div className="font-bold text-[#202124] flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <span>Conditional PRN Medications ("In Case It Is Required")</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              {activeProtocol.prnMedications.map((prn, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#F8F9FA] border border-[#DADCE0] space-y-1">
                  <div className="flex items-center justify-between text-amber-700 font-semibold text-[11px]">
                    <span>Trigger: {prn.trigger}</span>
                  </div>
                  <div className="font-bold text-[#202124] text-xs mt-1">
                    {prn.drug} ({prn.dose})
                  </div>
                  <div className="text-[11px] text-[#5F6368] leading-relaxed">
                    {prn.instructions}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Safety Blood Tests & Structured Recall */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-white border border-[#DADCE0] shadow-xs space-y-2">
              <div className="font-bold text-[#202124] flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-emerald-600" />
                <span>Safety Blood Reports to Monitor</span>
              </div>
              <ul className="space-y-1.5 text-[#5F6368] text-[11px]">
                {activeProtocol.safetyLabsToMonitor.map((lab, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>{lab}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#DADCE0] shadow-xs space-y-2">
              <div className="font-bold text-[#202124] flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#1A73E8]" />
                <span>Structured Recall & Follow-Up Timeline</span>
              </div>
              <ul className="space-y-1.5 text-[#5F6368] text-[11px]">
                {activeProtocol.recallSchedule.map((rec, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#1A73E8] font-bold">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 4. Associated Procedure Clinical Calculators & Decision Support */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="font-bold text-[#202124] text-xs flex items-center gap-1.5">
                <Calculator className="w-4 h-4 text-[#1A73E8]" />
                <span>Associated Procedure Calculators</span>
                {associatedCalculators.length > 0 && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#E8F0FE] text-[#1A73E8]">
                    {associatedCalculators.length} Linked
                  </span>
                )}
              </div>

              <span className="text-[11px] text-[#5F6368] font-medium">
                Embedded Decision Guardrails
              </span>
            </div>

            {associatedCalculators.length > 0 ? (
              <div className="space-y-3">
                {/* Calculator Switcher Tabs if multiple */}
                {associatedCalculators.length > 1 && (
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                    {associatedCalculators.map((calc) => {
                      const isActive = calc.id === currentCalcId;
                      return (
                        <button
                          key={calc.id}
                          onClick={() => setSelectedCalcId(calc.id)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition shadow-xs ${
                            isActive
                              ? 'bg-[#1A73E8] text-white'
                              : 'bg-white border border-[#DADCE0] text-[#3C4043] hover:bg-[#F8F9FA]'
                          }`}
                        >
                          {calc.shortName}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Interactive Runner */}
                {currentCalcId && (
                  <ProcedureCalculatorRunner
                    calculatorId={currentCalcId}
                    showProtocolLink={false}
                  />
                )}
              </div>
            ) : (
              <div className="p-4 rounded-xl border border-[#DADCE0] bg-[#F8F9FA] space-y-3 text-xs">
                <div>
                  <div className="font-bold text-[#202124]">Universal Interventional Radiology Pre-Procedure Safety</div>
                  <div className="text-[11px] text-[#5F6368] mt-0.5">
                    Standard nephrotoxicity ceiling (Cigarroa MACD) & SIR pre-procedure coagulation clearance thresholds.
                  </div>
                </div>
                <ProcedureCalculatorRunner
                  calculatorId="sir_coagulation_risk"
                  showProtocolLink={false}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Pre-Booking Clinical Workup & Dossier Modal */}
      <PreBookingWorkupModal
        isOpen={workupModalOpen}
        onClose={() => setWorkupModalOpen(false)}
        patientInfo={{
          patientName: 'PATIENT NAME',
          patientAge: 48,
          patientGender: 'Male',
          crNo: 'CR-2026-XXXX',
          ipdNo: 'IPD-8821',
          bedNo: 'Daycare Bed 04',
          patientPhone: '9829012345',
          scheme: 'RGHS / Chiranjeevi (MAAY)',
          targetDate: new Date().toISOString().slice(0, 10),
          protocolId: activeProtocol.id,
          procedureName: activeProtocol.name,
          diagnosis: activeProtocol.indication
        }}
      />
    </div>
  );
};
