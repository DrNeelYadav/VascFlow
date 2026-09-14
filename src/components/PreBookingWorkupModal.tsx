import React, { useState, useEffect } from 'react';
import {
  ProcedureWorkupTemplate,
  WorkupHistoryItem,
  WorkupScreeningItem,
  WorkupHardwareItem,
  getWorkupTemplateForProtocol
} from '../data/procedureWorkupTemplates';
import {
  Printer,
  Copy,
  Check,
  X,
  Plus,
  Trash2,
  FileText,
  RotateCcw,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export interface PreBookingPatientInfo {
  patientName: string;
  patientAge: number;
  patientGender: string;
  crNo: string;
  ipdNo?: string;
  bedNo?: string;
  patientPhone?: string;
  scheme?: string;
  targetDate?: string;
  protocolId: string;
  procedureName?: string;
  diagnosis?: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  patientInfo: PreBookingPatientInfo;
}

export const PreBookingWorkupModal: React.FC<Props> = ({
  isOpen,
  onClose,
  patientInfo
}) => {
  const [template, setTemplate] = useState<ProcedureWorkupTemplate>(() =>
    getWorkupTemplateForProtocol(patientInfo.protocolId, patientInfo.procedureName)
  );

  // Editable Demographics
  const [name, setName] = useState(patientInfo.patientName || 'PATIENT NAME');
  const [age, setAge] = useState(patientInfo.patientAge || 45);
  const [gender, setGender] = useState(patientInfo.patientGender || 'Male');
  const [crNo, setCrNo] = useState(patientInfo.crNo || 'CR-2026-XXXX');
  const [ipdNo, setIpdNo] = useState(patientInfo.ipdNo || 'IPD-8821');
  const [bedNo, setBedNo] = useState(patientInfo.bedNo || 'Daycare / Ward Bed');
  const [phone, setPhone] = useState(patientInfo.patientPhone || '98290XXXXX');
  const [scheme, setScheme] = useState(patientInfo.scheme || 'RGHS / Chiranjeevi (MAAY)');
  const [procedureDate, setProcedureDate] = useState(
    patientInfo.targetDate || new Date().toISOString().slice(0, 10)
  );

  // Editable Main Heading
  const [diagnosis, setDiagnosis] = useState(patientInfo.diagnosis || template.defaultDiagnosis);
  const [plannedProcedure, setPlannedProcedure] = useState(template.defaultProcedure);
  const [urgencyTier, setUrgencyTier] = useState(template.urgencyTier);

  // Editable Sections
  const [historyItems, setHistoryItems] = useState<WorkupHistoryItem[]>(template.commonHistory);
  const [customHistoryGap, setCustomHistoryGap] = useState(
    'Known case of Budd-Chiari syndrome; previously maintained on Spironolactone and Furosemide with gradual loss of diuretic response. No prior episode of overt hepatic encephalopathy. Upper GI endoscopy 3 weeks ago revealed Grade III esophageal varices; prophylactic EVBL performed.'
  );
  const [screeningItems, setScreeningItems] = useState<WorkupScreeningItem[]>(template.screeningChecklist);
  const [hardwareItems, setHardwareItems] = useState<WorkupHardwareItem[]>(template.hardwareList);
  const [proceduralPlan, setProceduralPlan] = useState(template.defaultPlan);

  // UI state
  const [copied, setCopied] = useState(false);
  const [newHardwareItem, setNewHardwareItem] = useState('');
  const [newHardwareQty, setNewHardwareQty] = useState('1');

  // Reset when patientInfo changes
  useEffect(() => {
    const t = getWorkupTemplateForProtocol(patientInfo.protocolId, patientInfo.procedureName);
    setTemplate(t);
    setName(patientInfo.patientName || 'PATIENT NAME');
    setAge(patientInfo.patientAge || 45);
    setGender(patientInfo.patientGender || 'Male');
    setCrNo(patientInfo.crNo || 'CR-2026-XXXX');
    setIpdNo(patientInfo.ipdNo || 'IPD-8821');
    setBedNo(patientInfo.bedNo || 'Daycare / Ward Bed');
    setPhone(patientInfo.patientPhone || '98290XXXXX');
    setScheme(patientInfo.scheme || 'RGHS / Chiranjeevi (MAAY)');
    setProcedureDate(patientInfo.targetDate || new Date().toISOString().slice(0, 10));
    setDiagnosis(patientInfo.diagnosis || t.defaultDiagnosis);
    setPlannedProcedure(t.defaultProcedure);
    setUrgencyTier(t.urgencyTier);
    setHistoryItems(t.commonHistory);
    setScreeningItems(t.screeningChecklist);
    setHardwareItems(t.hardwareList);
    setProceduralPlan(t.defaultPlan);
  }, [patientInfo]);

  if (!isOpen) return null;

  const handleResetDefaults = () => {
    const t = getWorkupTemplateForProtocol(patientInfo.protocolId, patientInfo.procedureName);
    setDiagnosis(t.defaultDiagnosis);
    setPlannedProcedure(t.defaultProcedure);
    setUrgencyTier(t.urgencyTier);
    setHistoryItems(t.commonHistory);
    setScreeningItems(t.screeningChecklist);
    setHardwareItems(t.hardwareList);
    setProceduralPlan(t.defaultPlan);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const activeHistory = historyItems
      .filter((h) => h.defaultPresent)
      .map((h) => `- ${h.label} (Duration: ${h.defaultDuration})`)
      .join('\n');

    const screeningText = screeningItems
      .map((s) => `${s.label}: ${s.defaultValue}`)
      .join('\n');

    const hardwareText = hardwareItems
      .filter((h) => h.defaultChecked)
      .map((h) => `- [x] ${h.item} (Qty: ${h.quantity})`)
      .join('\n');

    const text = `================================================================================
SMS MEDICAL COLLEGE & ATTACHED HOSPITALS, JAIPUR
DEPARTMENT OF RADIODIAGNOSIS & INTERVENTIONAL RADIOLOGY
INTERVENTIONAL RADIOLOGY PRE-PROCEDURE WORKUP & BOOKING DOSSIER
================================================================================
PATIENT NAME : ${name} | AGE/SEX: ${age}Y / ${gender}
CR NO (HID)  : ${crNo} | IPD / BED: ${ipdNo} / ${bedNo}
PHONE        : ${phone} | SCHEME: ${scheme}
PROC DATE    : ${procedureDate} | URGENCY: ${urgencyTier}

--------------------------------------------------------------------------------
MAIN DIAGNOSIS & PLANNED INTERVENTION
--------------------------------------------------------------------------------
DIAGNOSIS    : ${diagnosis}
PROCEDURE    : ${plannedProcedure}

--------------------------------------------------------------------------------
STRUCTURED CLINICAL HISTORY & SYMPTOMS
--------------------------------------------------------------------------------
${activeHistory}

ADDITIONAL PATIENT-SPECIFIC HISTORY & GAP NOTES:
${customHistoryGap}

--------------------------------------------------------------------------------
PRE-PROCEDURE IMAGING & ANATOMICAL SCREENING
--------------------------------------------------------------------------------
${screeningText}

--------------------------------------------------------------------------------
HARDWARE & CONSUMABLES CHECKLIST
--------------------------------------------------------------------------------
${hardwareText}

--------------------------------------------------------------------------------
CURRENT PROCEDURAL PLAN & EXECUTION STRATEGY
--------------------------------------------------------------------------------
${proceduralPlan}

================================================================================
Verified by Operating Interventional Radiologist
Department of Radiodiagnosis & Interventional Radiology, SMS Hospital, Jaipur
================================================================================`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const addHardwareItem = () => {
    if (!newHardwareItem.trim()) return;
    setHardwareItems((prev) => [
      ...prev,
      {
        item: newHardwareItem.trim(),
        quantity: newHardwareQty.trim() || '1',
        defaultChecked: true,
        category: 'Hemodynamics & Misc'
      }
    ]);
    setNewHardwareItem('');
    setNewHardwareQty('1');
  };

  const removeHardwareItem = (idx: number) => {
    setHardwareItems((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-2 sm:p-4 overflow-y-auto font-sans">
      {/* Container Card */}
      <div className="bg-white text-[#202124] rounded-2xl shadow-2xl border border-[#DADCE0] max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden my-auto print:max-w-none print:w-full print:max-h-none print:shadow-none print:border-none print:m-0 print:rounded-none">
        
        {/* Top Control Bar (Hidden on Print) */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#DADCE0] bg-gray-50/80 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#1A73E8]" />
            <div>
              <span className="font-bold text-sm text-[#202124]">
                IR Pre-Booking Clinical Workup &amp; Dossier
              </span>
              <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-medium">
                {template.shortName}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleResetDefaults}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-[#DADCE0] bg-white hover:bg-gray-100 text-xs text-[#5F6368] font-medium transition"
              title="Reset template to protocol defaults"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset Defaults</span>
            </button>

            <button
              onClick={handleCopyText}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-white hover:bg-gray-100 text-xs font-semibold text-[#1A73E8] transition shadow-sm"
              title="Copy Rajasthan IHMS formatted text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-white hover:bg-gray-100 text-xs font-bold text-[#202124] shadow-sm transition"
            >
              <Printer className="w-3.5 h-3.5 text-rose-600" />
              <span>Print Dossier</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-[#DADCE0] hover:bg-gray-200 text-[#5F6368] transition"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Dossier Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 print:p-0 print:overflow-visible print:space-y-4">
          
          {/* Institutional Letterhead Header */}
          <div className="text-center pb-4 border-b-2 border-black/80 space-y-1">
            <div className="text-[11px] uppercase tracking-widest text-[#5F6368] font-semibold print:text-black">
              Government of Rajasthan • Department of Medical Education
            </div>
            <h1 className="text-lg sm:text-xl font-black tracking-tight text-[#202124] print:text-black">
              SAWAI MAN SINGH (SMS) MEDICAL COLLEGE &amp; ATTACHED HOSPITALS, JAIPUR
            </h1>
            <h2 className="text-xs sm:text-sm font-bold text-[#1A73E8] tracking-wide print:text-black">
              DEPARTMENT OF RADIODIAGNOSIS &amp; INTERVENTIONAL RADIOLOGY
            </h2>
            <div className="inline-block mt-1 px-3 py-0.5 bg-black text-white text-[11px] font-bold uppercase tracking-wider rounded print:bg-black print:text-white">
              INTERVENTIONAL RADIOLOGY PRE-PROCEDURE WORKUP &amp; BOOKING DOSSIER
            </div>
          </div>

          {/* Demographics Block (Card Style) */}
          <div className="border border-black/30 rounded-xl p-3 bg-gray-50/40 print:bg-white print:border-black print:rounded-none">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div>
                <span className="text-[#5F6368] block text-[10px] uppercase font-bold print:text-black">Patient Name:</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="font-bold text-xs w-full bg-transparent border-b border-dashed border-gray-300 focus:border-blue-600 focus:outline-none print:border-none"
                />
              </div>
              <div>
                <span className="text-[#5F6368] block text-[10px] uppercase font-bold print:text-black">Age / Gender:</span>
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="font-bold text-xs w-12 bg-transparent border-b border-dashed border-gray-300 focus:border-blue-600 focus:outline-none print:border-none"
                  />
                  <span>Y /</span>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="font-bold text-xs bg-transparent border-b border-dashed border-gray-300 focus:border-blue-600 focus:outline-none print:border-none"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <span className="text-[#5F6368] block text-[10px] uppercase font-bold print:text-black">CR No (HID):</span>
                <input
                  type="text"
                  value={crNo}
                  onChange={(e) => setCrNo(e.target.value)}
                  className="font-bold font-mono text-xs w-full bg-transparent border-b border-dashed border-gray-300 focus:border-blue-600 focus:outline-none print:border-none"
                />
              </div>
              <div>
                <span className="text-[#5F6368] block text-[10px] uppercase font-bold print:text-black">IPD / Bed No:</span>
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    value={ipdNo}
                    onChange={(e) => setIpdNo(e.target.value)}
                    className="font-bold font-mono text-xs w-20 bg-transparent border-b border-dashed border-gray-300 focus:border-blue-600 focus:outline-none print:border-none"
                  />
                  <span>/</span>
                  <input
                    type="text"
                    value={bedNo}
                    onChange={(e) => setBedNo(e.target.value)}
                    className="font-bold text-xs w-full bg-transparent border-b border-dashed border-gray-300 focus:border-blue-600 focus:outline-none print:border-none"
                  />
                </div>
              </div>
              <div>
                <span className="text-[#5F6368] block text-[10px] uppercase font-bold print:text-black">Contact Phone:</span>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="font-semibold text-xs w-full bg-transparent border-b border-dashed border-gray-300 focus:border-blue-600 focus:outline-none print:border-none"
                />
              </div>
              <div>
                <span className="text-[#5F6368] block text-[10px] uppercase font-bold print:text-black">Scheme / Coverage:</span>
                <input
                  type="text"
                  value={scheme}
                  onChange={(e) => setScheme(e.target.value)}
                  className="font-semibold text-xs w-full bg-transparent border-b border-dashed border-gray-300 focus:border-blue-600 focus:outline-none print:border-none"
                />
              </div>
              <div>
                <span className="text-[#5F6368] block text-[10px] uppercase font-bold print:text-black">Procedure Date:</span>
                <input
                  type="date"
                  value={procedureDate}
                  onChange={(e) => setProcedureDate(e.target.value)}
                  className="font-bold text-xs w-full bg-transparent border-b border-dashed border-gray-300 focus:border-blue-600 focus:outline-none print:border-none"
                />
              </div>
              <div>
                <span className="text-[#5F6368] block text-[10px] uppercase font-bold print:text-black">Urgency Tier:</span>
                <select
                  value={urgencyTier}
                  onChange={(e) => setUrgencyTier(e.target.value as any)}
                  className="font-bold text-xs text-rose-700 w-full bg-transparent border-b border-dashed border-gray-300 focus:border-blue-600 focus:outline-none print:border-none print:text-black"
                >
                  <option value="Elective">Elective</option>
                  <option value="Priority (Within 24-48h)">Priority (Within 24-48h)</option>
                  <option value="Emergency / Salvage">Emergency / Salvage</option>
                </select>
              </div>
            </div>
          </div>

          {/* Main Heading: Diagnosis & Planned Procedure */}
          <div className="border border-black/40 rounded-xl p-3.5 bg-blue-50/40 print:bg-white print:border-black print:rounded-none space-y-2">
            <div>
              <span className="text-[10px] uppercase font-black tracking-wider text-[#1A73E8] block print:text-black">
                Primary Clinical Diagnosis:
              </span>
              <input
                type="text"
                value={diagnosis}
                onChange={(e) => setDiagnosis(e.target.value)}
                className="w-full font-bold text-sm text-[#202124] bg-transparent border-b border-dashed border-blue-300 focus:border-blue-700 focus:outline-none print:border-none print:text-black"
              />
            </div>

            <div>
              <span className="text-[10px] uppercase font-black tracking-wider text-[#1A73E8] block print:text-black">
                Planned Interventional Procedure:
              </span>
              <input
                type="text"
                value={plannedProcedure}
                onChange={(e) => setPlannedProcedure(e.target.value)}
                className="w-full font-bold text-xs sm:text-sm text-gray-800 bg-transparent border-b border-dashed border-blue-300 focus:border-blue-700 focus:outline-none print:border-none print:text-black"
              />
            </div>
          </div>

          {/* Section 1: Structured Clinical History & Pre-Labeled Durations */}
          <div className="space-y-2">
            <div className="flex items-center justify-between border-b border-black/40 pb-1">
              <h3 className="font-bold text-xs uppercase tracking-wider text-[#202124] flex items-center gap-1.5 print:text-black">
                <span className="w-4 h-4 rounded-full bg-black text-white text-[10px] flex items-center justify-center font-mono">1</span>
                <span>Common Clinical History &amp; Presenting Complaints</span>
              </h3>
              <span className="text-[10px] text-[#5F6368] font-medium print:hidden">Check symptoms &amp; adjust durations</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {historyItems.map((item, idx) => (
                <div
                  key={item.id}
                  className={`flex items-start justify-between gap-2 p-2 rounded-lg border ${
                    item.defaultPresent ? 'bg-white border-[#DADCE0]' : 'bg-gray-50/70 border-dashed border-gray-200 text-gray-500'
                  } print:bg-white print:border-none print:p-1`}
                >
                  <label className="flex items-start gap-2 cursor-pointer flex-1">
                    <input
                      type="checkbox"
                      checked={item.defaultPresent}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        setHistoryItems((prev) =>
                          prev.map((h, i) => (i === idx ? { ...h, defaultPresent: checked } : h))
                        );
                      }}
                      className="mt-0.5 rounded border-[#DADCE0] text-[#1A73E8] print:text-black"
                    />
                    <span className="font-medium leading-tight">{item.label}</span>
                  </label>

                  {item.defaultPresent && (
                    <div className="flex items-center gap-1 shrink-0">
                      <span className="text-[10px] text-[#5F6368] uppercase font-mono print:text-black">Duration:</span>
                      <input
                        type="text"
                        value={item.defaultDuration}
                        onChange={(e) => {
                          const val = e.target.value;
                          setHistoryItems((prev) =>
                            prev.map((h, i) => (i === idx ? { ...h, defaultDuration: val } : h))
                          );
                        }}
                        className="px-1.5 py-0.5 border border-[#DADCE0] rounded text-[11px] font-bold w-24 bg-white focus:outline-none focus:border-blue-600 print:border-none print:w-auto"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Custom Clinical History Gap */}
            <div className="pt-2">
              <label className="block text-[11px] font-bold text-[#202124] mb-1 print:text-black">
                Additional Clinical History &amp; Specific Patient Notes (Custom Gap):
              </label>
              <textarea
                rows={2}
                value={customHistoryGap}
                onChange={(e) => setCustomHistoryGap(e.target.value)}
                placeholder="Enter any other specific clinical details, past medical interventions, comorbidities, or custom patient observations..."
                className="w-full text-xs p-2.5 rounded-lg border border-[#DADCE0] bg-white focus:outline-none focus:border-blue-600 print:border-black/30 print:p-1"
              />
            </div>
          </div>

          {/* Section 2: Pre-Procedure Imaging & Anatomical Screening */}
          <div className="space-y-2">
            <div className="flex items-center justify-between border-b border-black/40 pb-1">
              <h3 className="font-bold text-xs uppercase tracking-wider text-[#202124] flex items-center gap-1.5 print:text-black">
                <span className="w-4 h-4 rounded-full bg-black text-white text-[10px] flex items-center justify-center font-mono">2</span>
                <span>Pre-Procedure Imaging &amp; Anatomical Screening Checklist</span>
              </h3>
            </div>

            <div className="space-y-2 text-xs">
              {screeningItems.map((scr, idx) => (
                <div key={scr.id} className="p-2 rounded-lg border border-[#DADCE0] bg-gray-50/40 print:bg-white print:border-none print:p-0.5">
                  <span className="font-bold block text-[11px] text-[#202124] mb-1 print:text-black">
                    {scr.label}:
                  </span>
                  {scr.options && scr.options.length > 0 ? (
                    <select
                      value={scr.defaultValue}
                      onChange={(e) => {
                        const val = e.target.value;
                        setScreeningItems((prev) =>
                          prev.map((s, i) => (i === idx ? { ...s, defaultValue: val } : s))
                        );
                      }}
                      className="w-full p-1.5 border border-[#DADCE0] rounded text-xs bg-white focus:outline-none focus:border-blue-600 print:border-none print:p-0 print:font-semibold"
                    >
                      {scr.options.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      value={scr.defaultValue}
                      placeholder={scr.placeholder}
                      onChange={(e) => {
                        const val = e.target.value;
                        setScreeningItems((prev) =>
                          prev.map((s, i) => (i === idx ? { ...s, defaultValue: val } : s))
                        );
                      }}
                      className="w-full p-1.5 border border-[#DADCE0] rounded text-xs bg-white focus:outline-none focus:border-blue-600 print:border-none print:p-0 print:font-semibold"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Hardware & Consumables Checklist */}
          <div className="space-y-2">
            <div className="flex items-center justify-between border-b border-black/40 pb-1">
              <h3 className="font-bold text-xs uppercase tracking-wider text-[#202124] flex items-center gap-1.5 print:text-black">
                <span className="w-4 h-4 rounded-full bg-black text-white text-[10px] flex items-center justify-center font-mono">3</span>
                <span>Hardware &amp; Consumables Checklist</span>
              </h3>
              <span className="text-[10px] text-[#5F6368] font-medium print:hidden">Checklist for Cath-Lab Nurse &amp; Tech</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
              {hardwareItems.map((hw, idx) => (
                <div
                  key={`${hw.item}-${idx}`}
                  className="flex items-center justify-between gap-2 px-2.5 py-1.5 rounded border border-[#DADCE0] bg-white print:border-none print:py-0.5 print:px-0"
                >
                  <label className="flex items-center gap-2 cursor-pointer flex-1 min-w-0">
                    <input
                      type="checkbox"
                      checked={hw.defaultChecked}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        setHardwareItems((prev) =>
                          prev.map((item, i) => (i === idx ? { ...item, defaultChecked: checked } : item))
                        );
                      }}
                      className="rounded border-[#DADCE0] text-[#1A73E8] print:text-black"
                    />
                    <span className="truncate font-medium">{hw.item}</span>
                  </label>

                  <div className="flex items-center gap-1.5 shrink-0 font-mono text-[11px]">
                    <span className="text-[#5F6368] print:text-black">Qty:</span>
                    <input
                      type="text"
                      value={hw.quantity}
                      onChange={(e) => {
                        const val = e.target.value;
                        setHardwareItems((prev) =>
                          prev.map((item, i) => (i === idx ? { ...item, quantity: val } : item))
                        );
                      }}
                      className="w-12 text-center font-bold px-1 py-0.5 border border-[#DADCE0] rounded bg-gray-50 focus:outline-none print:border-none print:bg-white"
                    />
                    <button
                      onClick={() => removeHardwareItem(idx)}
                      className="text-gray-400 hover:text-rose-600 print:hidden p-0.5"
                      title="Remove item"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Custom Hardware Row (Hidden on print) */}
            <div className="flex items-center gap-2 pt-1 print:hidden">
              <input
                type="text"
                placeholder="Add additional catheter, wire, stent, or embolic..."
                value={newHardwareItem}
                onChange={(e) => setNewHardwareItem(e.target.value)}
                className="flex-1 px-2.5 py-1.5 text-xs border border-[#DADCE0] rounded-lg focus:outline-none focus:border-blue-600"
              />
              <input
                type="text"
                placeholder="Qty"
                value={newHardwareQty}
                onChange={(e) => setNewHardwareQty(e.target.value)}
                className="w-16 px-2 py-1.5 text-xs text-center border border-[#DADCE0] rounded-lg focus:outline-none"
              />
              <button
                onClick={addHardwareItem}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#DADCE0] bg-white hover:bg-gray-100 text-xs font-semibold text-[#1A73E8]"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Hardware</span>
              </button>
            </div>
          </div>

          {/* Section 4: Current Procedural Plan & Strategy (At the End) */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between border-b border-black/40 pb-1">
              <h3 className="font-bold text-xs uppercase tracking-wider text-[#202124] flex items-center gap-1.5 print:text-black">
                <span className="w-4 h-4 rounded-full bg-black text-white text-[10px] flex items-center justify-center font-mono">4</span>
                <span>Current Procedural Plan &amp; Execution Strategy</span>
              </h3>
              <span className="text-[10px] text-[#5F6368] font-medium print:hidden">Clinician's Step-by-Step Plan</span>
            </div>

            <textarea
              rows={8}
              value={proceduralPlan}
              onChange={(e) => setProceduralPlan(e.target.value)}
              className="w-full text-xs font-mono leading-relaxed p-3 rounded-xl border border-black/40 bg-white focus:outline-none focus:border-blue-700 print:border-black print:rounded-none print:p-2"
            />
          </div>

          {/* Sign-Off Block */}
          <div className="pt-6 border-t border-black/30 flex items-end justify-between text-xs print:pt-4">
            <div className="space-y-1">
              <div className="text-[10px] uppercase font-bold text-[#5F6368] print:text-black">
                Interventional Radiology Angiosuite Team
              </div>
              <div className="text-xs font-semibold text-[#202124]">
                SMS Medical College &amp; Attached Hospitals, Jaipur
              </div>
              <div className="text-[10px] text-[#5F6368] font-mono">
                Date &amp; Time Generated: {new Date().toLocaleDateString('en-GB')} {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>

            <div className="text-right space-y-10">
              <div className="border-b border-black w-48 ml-auto"></div>
              <div className="text-xs font-bold text-[#202124] print:text-black">
                Operating Interventional Radiologist / Senior Resident
                <span className="block text-[10px] font-normal text-[#5F6368] print:text-black">Department of Radiodiagnosis &amp; IR</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions (Hidden on Print) */}
        <div className="p-3 bg-gray-50 border-t border-[#DADCE0] flex items-center justify-between text-xs print:hidden">
          <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
            <CheckCircle2 className="w-4 h-4" />
            <span>Ready for Procedure Pre-Booking &amp; Clinical Printout</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#DADCE0] bg-white hover:bg-gray-100 text-xs font-bold text-[#202124] shadow-sm transition"
            >
              <Printer className="w-4 h-4 text-rose-600" />
              <span>Print Workup Dossier</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-[#DADCE0] bg-white hover:bg-gray-100 text-xs font-medium text-[#5F6368]"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
