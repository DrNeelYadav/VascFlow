import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useClinicalStore } from '../stores/useClinicalStore';
import {
  calculateMacd,
  calculateEgfrCkdEpi2021,
  calculateChildPugh,
  calculateAlbi,
  calculateMeld3,
  PROCEDURE_CALCULATORS,
  ProcedureCalculatorMeta
} from '../lib/calculators';
import { ProcedureCalculatorRunner } from '../components/ProcedureCalculatorRunner';
import {
  Calculator,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  HeartPulse,
  Info,
  Scale,
  Search,
  Layers,
  BookOpen,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const PROCEDURE_SYSTEMS = [
  'ALL',
  'Hepatobiliary & Portal',
  'Vascular & Arterial',
  'Oncology & Ablation',
  'Genitourinary & Pelvic',
  'Venous & Lymphatic',
  'Neuro & Head/Neck',
  'Thoracic & Pulmonology',
  'Musculoskeletal & Pain'
] as const;

export const CalculatorsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const activePatient = useClinicalStore((s) => s.activePatient);

  // Procedure Calculator Explorer State
  const initialCalcId = searchParams.get('calc') || 'rotterdam_bcs';
  const [selectedCalcId, setSelectedCalcId] = useState<string>(initialCalcId);
  const [calcSearchQuery, setCalcSearchQuery] = useState<string>('');
  const [activeSystem, setActiveSystem] = useState<string>('ALL');

  useEffect(() => {
    const qCalc = searchParams.get('calc');
    if (qCalc && PROCEDURE_CALCULATORS.some((c) => c.id === qCalc)) {
      setSelectedCalcId(qCalc);
    }
  }, [searchParams]);

  const handleSelectCalculator = (id: string) => {
    setSelectedCalcId(id);
    setSearchParams({ calc: id });
  };

  const filteredCalculators = PROCEDURE_CALCULATORS.filter((c) => {
    if (activeSystem !== 'ALL' && c.system !== activeSystem) return false;
    if (!calcSearchQuery) return true;
    const q = calcSearchQuery.toLowerCase();
    return (
      c.name.toLowerCase().includes(q) ||
      c.shortName.toLowerCase().includes(q) ||
      c.protocolName.toLowerCase().includes(q) ||
      c.protocolNames.some((pn) => pn.toLowerCase().includes(q)) ||
      c.system.toLowerCase().includes(q) ||
      c.guidelineAuthority.toLowerCase().includes(q) ||
      c.formulaDescription.toLowerCase().includes(q)
    );
  });

  // 1. MACD Inputs
  const [weightKg, setWeightKg] = useState<number>(activePatient.weightKg || 60);
  const [serumCreatinine, setSerumCreatinine] = useState<number>(activePatient.serumCreatinine || 1.1);
  const [contrastVol, setContrastVol] = useState<number>(50);
  const [patientAge, setPatientAge] = useState<number>(activePatient.age || 55);
  const [isFemale, setIsFemale] = useState<boolean>(activePatient.gender === 'Female');

  // Compute eGFR automatically
  const computedEgfr = calculateEgfrCkdEpi2021(serumCreatinine, patientAge, isFemale);
  const macdResult = calculateMacd(weightKg, serumCreatinine, contrastVol, computedEgfr);

  // 2. Child-Pugh & ALBI Inputs
  const [bili, setBili] = useState<number>(activePatient.totalBilirubin || 1.4);
  const [alb, setAlb] = useState<number>(activePatient.serumAlbumin || 3.5);
  const [inr, setInr] = useState<number>(activePatient.inr || 1.2);
  const [ascites, setAscites] = useState<1 | 2 | 3>(1);
  const [enceph, setEnceph] = useState<1 | 2 | 3>(1);

  const cpResult = calculateChildPugh(bili, alb, inr, ascites, enceph);
  const albiResult = calculateAlbi(bili, alb);

  // 3. MELD 3.0 Inputs
  const [meldNa, setMeldNa] = useState<number>(activePatient.sodiumMeqL || 136);
  const meldResult = calculateMeld3(bili, serumCreatinine, inr, meldNa, alb, isFemale);

  return (
    <div className="space-y-6 pb-12 font-sans">
      {/* Top Banner */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-lg font-bold text-[#202124] flex items-center gap-2">
            <Calculator className="w-5 h-5 text-[#1A73E8]" />
            <span>Interventional Radiology Clinical Safety & Hepatic-Renal Calculators</span>
          </h1>
          <p className="text-xs text-[#5F6368] mt-0.5">
            Cigarroa MACD • Contrast-to-eGFR CI-AKI guardrail • Child-Pugh • ALBI grade • MELD 3.0 • CKD-EPI 2021 race-free eGFR
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Module 1: Cigarroa MACD & CI-AKI Renal Safety */}
        <div className="p-5 rounded-2xl bg-white border border-[#DADCE0] shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#DADCE0]">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-emerald-600" />
              <h2 className="text-sm font-bold text-[#202124]">
                1. Maximum Allowable Contrast Dose (MACD) & CI-AKI Risk
              </h2>
            </div>
            <span className="text-[10px] font-mono text-[#5F6368]">Cigarroa Formula</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Patient Weight (kg)</label>
              <input
                type="number"
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="w-full px-3 py-1.5 bg-white border border-[#DADCE0] rounded-lg text-[#202124] font-mono focus:border-[#1A73E8] shadow-xs"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Serum Creatinine (mg/dL)</label>
              <input
                type="number"
                step="0.1"
                value={serumCreatinine}
                onChange={(e) => setSerumCreatinine(Number(e.target.value))}
                className="w-full px-3 py-1.5 bg-white border border-[#DADCE0] rounded-lg text-[#202124] font-mono focus:border-[#1A73E8] shadow-xs"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Planned Contrast (mL)</label>
              <input
                type="number"
                value={contrastVol}
                onChange={(e) => setContrastVol(Number(e.target.value))}
                className="w-full px-3 py-1.5 bg-white border border-[#DADCE0] rounded-lg text-[#202124] font-mono focus:border-[#1A73E8] font-bold shadow-xs"
              />
            </div>

            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Age (Years)</label>
              <input
                type="number"
                value={patientAge}
                onChange={(e) => setPatientAge(Number(e.target.value))}
                className="w-full px-3 py-1.5 bg-white border border-[#DADCE0] rounded-lg text-[#202124] font-mono focus:border-[#1A73E8] shadow-xs"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Biological Sex</label>
              <select
                value={isFemale ? 'Female' : 'Male'}
                onChange={(e) => setIsFemale(e.target.value === 'Female')}
                className="w-full px-3 py-1.5 bg-white border border-[#DADCE0] rounded-lg text-[#202124] focus:border-[#1A73E8] shadow-xs"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Computed eGFR (CKD-EPI)</label>
              <div className="px-3 py-1.5 bg-white border border-[#DADCE0] rounded-lg text-emerald-600 font-mono font-bold shadow-xs">
                {computedEgfr} mL/min
              </div>
            </div>
          </div>

          {/* Results Box */}
          <div
            className={`p-4 rounded-xl border space-y-2 text-xs leading-relaxed shadow-xs ${
              macdResult.isExceeded
                ? 'bg-[#FCE8E6] border-[#F5C2C7] text-[#C5221F]'
                : macdResult.highAkiRisk
                ? 'bg-[#FEF7E0] border-[#FEEFC3] text-[#B06000]'
                : 'bg-white border-[#DADCE0] text-[#202124]'
            }`}
          >
            <div className="flex items-center justify-between font-mono font-bold text-sm">
              <span>Cigarroa MACD Ceiling: {macdResult.macdMl} mL</span>
              <span>Ratio (Vol/eGFR): {macdResult.contrastToEgfrRatio || '-'}</span>
            </div>
            <div className="text-[11px] font-medium">{macdResult.recommendation}</div>
          </div>
        </div>

        {/* Module 2: Child-Pugh & ALBI Score */}
        <div className="p-5 rounded-2xl bg-white border border-[#DADCE0] shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#DADCE0]">
            <div className="flex items-center gap-2">
              <HeartPulse className="w-4 h-4 text-purple-600" />
              <h2 className="text-sm font-bold text-[#202124]">
                2. Child-Pugh & ALBI Score (Hepatic Reserve for TACE/TIPS)
              </h2>
            </div>
            <span className="text-[10px] font-mono text-[#5F6368]">Oncology Safety</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Total Bilirubin (mg/dL)</label>
              <input
                type="number"
                step="0.1"
                value={bili}
                onChange={(e) => setBili(Number(e.target.value))}
                className="w-full px-3 py-1.5 bg-white border border-[#DADCE0] rounded-lg text-[#202124] font-mono focus:border-[#1A73E8] shadow-xs"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Serum Albumin (g/dL)</label>
              <input
                type="number"
                step="0.1"
                value={alb}
                onChange={(e) => setAlb(Number(e.target.value))}
                className="w-full px-3 py-1.5 bg-white border border-[#DADCE0] rounded-lg text-[#202124] font-mono focus:border-[#1A73E8] shadow-xs"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">PT / INR</label>
              <input
                type="number"
                step="0.1"
                value={inr}
                onChange={(e) => setInr(Number(e.target.value))}
                className="w-full px-3 py-1.5 bg-white border border-[#DADCE0] rounded-lg text-[#202124] font-mono focus:border-[#1A73E8] shadow-xs"
              />
            </div>

            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Ascites</label>
              <select
                value={ascites}
                onChange={(e) => setAscites(Number(e.target.value) as any)}
                className="w-full px-3 py-1.5 bg-white border border-[#DADCE0] rounded-lg text-[#202124] focus:border-[#1A73E8] shadow-xs"
              >
                <option value={1}>None (1 pt)</option>
                <option value={2}>Mild / Controlled (2 pts)</option>
                <option value={3}>Moderate / Refractory (3 pts)</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="text-[#5F6368] block mb-1 font-medium">Hepatic Encephalopathy</label>
              <select
                value={enceph}
                onChange={(e) => setEnceph(Number(e.target.value) as any)}
                className="w-full px-3 py-1.5 bg-white border border-[#DADCE0] rounded-lg text-[#202124] focus:border-[#1A73E8] shadow-xs"
              >
                <option value={1}>None (1 pt)</option>
                <option value={2}>Grade 1-2 (Sleep reversal, asterixis) (2 pts)</option>
                <option value={3}>Grade 3-4 (Severe confusion, coma) (3 pts)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {/* Child-Pugh Result */}
            <div className="p-3.5 rounded-xl bg-white border border-[#DADCE0] shadow-xs space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#3C4043]">Child-Pugh:</span>
                <span className="font-mono font-bold text-base text-purple-600">
                  Score {cpResult.score} (Class {cpResult.classGrade})
                </span>
              </div>
              <div className="text-[11px] text-[#5F6368] mt-1 leading-relaxed">
                {cpResult.recommendation}
              </div>
            </div>

            {/* ALBI Result */}
            <div className="p-3.5 rounded-xl bg-white border border-[#DADCE0] shadow-xs space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#3C4043]">ALBI Score:</span>
                <span className="font-mono font-bold text-base text-cyan-700">
                  {albiResult.score} (Grade {albiResult.grade})
                </span>
              </div>
              <div className="text-[11px] text-[#5F6368] mt-1 leading-relaxed">
                {albiResult.recommendation}
              </div>
            </div>
          </div>
        </div>

        {/* Module 3: MELD 3.0 Score */}
        <div className="p-5 rounded-2xl bg-white border border-[#DADCE0] shadow-xs space-y-4 lg:col-span-2">
          <div className="flex items-center justify-between pb-2 border-b border-[#DADCE0]">
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-amber-600" />
              <h2 className="text-sm font-bold text-[#202124]">
                3. MELD 3.0 Score (TIPS Eligibility & Liver Mortality Stratifier)
              </h2>
            </div>
            <span className="text-[10px] font-mono text-[#5F6368]">Updated UNOS/AASLD Equation</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs">
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Serum Sodium (mEq/L)</label>
              <input
                type="number"
                value={meldNa}
                onChange={(e) => setMeldNa(Number(e.target.value))}
                className="w-full px-3 py-1.5 bg-white border border-[#DADCE0] rounded-lg text-[#202124] font-mono focus:border-[#1A73E8] shadow-xs"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Total Bilirubin (mg/dL)</label>
              <input
                type="number"
                step="0.1"
                value={bili}
                onChange={(e) => setBili(Number(e.target.value))}
                className="w-full px-3 py-1.5 bg-white border border-[#DADCE0] rounded-lg text-[#202124] font-mono focus:border-[#1A73E8] shadow-xs"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Serum Creatinine (mg/dL)</label>
              <input
                type="number"
                step="0.1"
                value={serumCreatinine}
                onChange={(e) => setSerumCreatinine(Number(e.target.value))}
                className="w-full px-3 py-1.5 bg-white border border-[#DADCE0] rounded-lg text-[#202124] font-mono focus:border-[#1A73E8] shadow-xs"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">PT / INR</label>
              <input
                type="number"
                step="0.1"
                value={inr}
                onChange={(e) => setInr(Number(e.target.value))}
                className="w-full px-3 py-1.5 bg-white border border-[#DADCE0] rounded-lg text-[#202124] font-mono focus:border-[#1A73E8] shadow-xs"
              />
            </div>
            <div>
              <label className="text-[#5F6368] block mb-1 font-medium">Serum Albumin (g/dL)</label>
              <input
                type="number"
                step="0.1"
                value={alb}
                onChange={(e) => setAlb(Number(e.target.value))}
                className="w-full px-3 py-1.5 bg-white border border-[#DADCE0] rounded-lg text-[#202124] font-mono focus:border-[#1A73E8] shadow-xs"
              />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#DADCE0] shadow-xs flex items-center justify-between flex-wrap gap-4 text-xs">
            <div>
              <div className="text-[#5F6368] text-xs">MELD 3.0 Score:</div>
              <div className="text-2xl font-bold font-mono text-amber-600 mt-0.5">
                {meldResult.score} Points
              </div>
            </div>
            <div>
              <div className="text-[#5F6368] text-xs">Estimated 90-Day Mortality:</div>
              <div className="text-sm font-bold font-mono text-[#202124] mt-0.5">
                {meldResult.mortality90Day}
              </div>
            </div>
            <div className="max-w-md text-[11px] text-[#3C4043] leading-relaxed">
              <b>TIPS Recommendation:</b> {meldResult.tipsRecommendation}
            </div>
          </div>
        </div>
      </div>

      {/* Module 4: 30 Procedure-Linked Clinical Calculators Catalog */}
      <div className="space-y-4 pt-4 border-t border-[#DADCE0]">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h2 className="text-base font-bold text-[#202124] flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#1A73E8]" />
              <span>4. Procedure-Linked Clinical Calculators Directory (30 Calculators)</span>
            </h2>
            <p className="text-xs text-[#5F6368] mt-0.5">
              Strictly matched with Interventional Radiology Procedure Protocols & Guidelines (CIRSE, SIR, AASLD, SVS, AHA/ASA, EASL)
            </p>
          </div>

          <div className="w-full sm:w-72 relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-[#5F6368]" />
            <input
              type="text"
              placeholder="Search calculator or procedure..."
              value={calcSearchQuery}
              onChange={(e) => setCalcSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-[#DADCE0] rounded-lg text-[#202124] placeholder-[#5F6368] focus:outline-none focus:border-[#1A73E8] shadow-xs"
            />
          </div>
        </div>

        {/* System-Wise Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin">
          <span className="text-xs font-semibold text-[#5F6368] flex items-center gap-1 shrink-0 mr-1">
            <Layers className="w-3.5 h-3.5 text-[#1A73E8]" /> System:
          </span>
          {PROCEDURE_SYSTEMS.map((sys) => {
            const isSelected = activeSystem === sys;
            const count =
              sys === 'ALL'
                ? PROCEDURE_CALCULATORS.length
                : PROCEDURE_CALCULATORS.filter((c) => c.system === sys).length;
            return (
              <button
                key={sys}
                onClick={() => setActiveSystem(sys)}
                className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition shadow-xs flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#1A73E8] text-white font-semibold'
                    : 'bg-white border border-[#DADCE0] text-[#3C4043] hover:bg-[#F8F9FA] font-medium'
                }`}
              >
                <span>{sys === 'ALL' ? 'All Systems' : sys}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? 'bg-white/20 text-white font-bold' : 'bg-[#F1F3F4] text-[#5F6368]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Explorer Layout: Left Selector (4 cols) & Right Interactive Runner (8 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Left Calculator List */}
          <div className="lg:col-span-4 bg-white border border-[#DADCE0] rounded-2xl p-3 shadow-xs space-y-1.5 max-h-[750px] overflow-y-auto">
            <div className="px-2 py-1 text-[11px] font-bold text-[#5F6368] uppercase tracking-wider flex items-center justify-between">
              <span>Procedure Calculators</span>
              <span className="font-mono text-[#1A73E8]">{filteredCalculators.length} Available</span>
            </div>

            {filteredCalculators.map((c) => {
              const isSelected = c.id === selectedCalcId;
              return (
                <button
                  key={c.id}
                  onClick={() => handleSelectCalculator(c.id)}
                  className={`w-full text-left p-3 rounded-xl border transition text-xs shadow-xs space-y-1 ${
                    isSelected
                      ? 'bg-[#E8F0FE] border-[#1A73E8] text-[#1A73E8]'
                      : 'bg-white border-[#DADCE0] hover:bg-[#F8F9FA] text-[#202124]'
                  }`}
                >
                  <div className="font-bold flex items-center justify-between">
                    <span>{c.shortName}</span>
                    <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-white border border-current/20">
                      {c.system.split('&')[0].trim()}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#5F6368] truncate">
                    Protocol: {c.protocolName}
                  </div>
                  <div className="text-[10px] text-[#5F6368] italic line-clamp-1">
                    {c.guidelineAuthority}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Active Runner */}
          <div className="lg:col-span-8">
            {selectedCalcId ? (
              <ProcedureCalculatorRunner
                calculatorId={selectedCalcId}
                showProtocolLink={true}
              />
            ) : (
              <div className="p-8 text-center text-xs text-[#5F6368] bg-white border border-[#DADCE0] rounded-2xl">
                Select a procedure calculator from the catalog on the left to begin calculation.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorsPage;
