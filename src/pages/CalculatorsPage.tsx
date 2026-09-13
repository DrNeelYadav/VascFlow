import React, { useState } from 'react';
import { useClinicalStore } from '../stores/useClinicalStore';
import {
  calculateMacd,
  calculateEgfrCkdEpi2021,
  calculateChildPugh,
  calculateAlbi,
  calculateMeld3
} from '../lib/calculators';
import {
  Calculator,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  HeartPulse,
  Info,
  Scale
} from 'lucide-react';

export const CalculatorsPage: React.FC = () => {
  const activePatient = useClinicalStore((s) => s.activePatient);

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
          <h1 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-crimson-500" />
            <span>Interventional Radiology Clinical Safety & Hepatic-Renal Calculators</span>
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Cigarroa MACD • Contrast-to-eGFR CI-AKI guardrail • Child-Pugh • ALBI grade • MELD 3.0 • CKD-EPI 2021 race-free eGFR
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Module 1: Cigarroa MACD & CI-AKI Renal Safety */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-emerald-400" />
              <h2 className="text-sm font-bold text-slate-100">
                1. Maximum Allowable Contrast Dose (MACD) & CI-AKI Risk
              </h2>
            </div>
            <span className="text-[10px] font-mono text-slate-400">Cigarroa Formula</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div>
              <label className="text-slate-400 block mb-1">Patient Weight (kg)</label>
              <input
                type="number"
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 font-mono focus:border-crimson-600"
              />
            </div>
            <div>
              <label className="text-slate-400 block mb-1">Serum Creatinine (mg/dL)</label>
              <input
                type="number"
                step="0.1"
                value={serumCreatinine}
                onChange={(e) => setSerumCreatinine(Number(e.target.value))}
                className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 font-mono focus:border-crimson-600"
              />
            </div>
            <div>
              <label className="text-slate-400 block mb-1">Planned Contrast (mL)</label>
              <input
                type="number"
                value={contrastVol}
                onChange={(e) => setContrastVol(Number(e.target.value))}
                className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 font-mono focus:border-crimson-600 font-bold"
              />
            </div>

            <div>
              <label className="text-slate-400 block mb-1">Age (Years)</label>
              <input
                type="number"
                value={patientAge}
                onChange={(e) => setPatientAge(Number(e.target.value))}
                className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 font-mono focus:border-crimson-600"
              />
            </div>
            <div>
              <label className="text-slate-400 block mb-1">Biological Sex</label>
              <select
                value={isFemale ? 'Female' : 'Male'}
                onChange={(e) => setIsFemale(e.target.value === 'Female')}
                className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:border-crimson-600"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label className="text-slate-400 block mb-1">Computed eGFR (CKD-EPI)</label>
              <div className="px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-emerald-400 font-mono font-bold">
                {computedEgfr} mL/min
              </div>
            </div>
          </div>

          {/* Results Box */}
          <div
            className={`p-4 rounded-xl border space-y-2 text-xs leading-relaxed ${
              macdResult.isExceeded
                ? 'bg-red-950/40 border-red-800 text-red-200'
                : macdResult.highAkiRisk
                ? 'bg-amber-950/40 border-amber-800 text-amber-200'
                : 'bg-slate-950 border-slate-800 text-slate-200'
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
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <HeartPulse className="w-4 h-4 text-purple-400" />
              <h2 className="text-sm font-bold text-slate-100">
                2. Child-Pugh & ALBI Score (Hepatic Reserve for TACE/TIPS)
              </h2>
            </div>
            <span className="text-[10px] font-mono text-slate-400">Oncology Safety</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div>
              <label className="text-slate-400 block mb-1">Total Bilirubin (mg/dL)</label>
              <input
                type="number"
                step="0.1"
                value={bili}
                onChange={(e) => setBili(Number(e.target.value))}
                className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 font-mono focus:border-crimson-600"
              />
            </div>
            <div>
              <label className="text-slate-400 block mb-1">Serum Albumin (g/dL)</label>
              <input
                type="number"
                step="0.1"
                value={alb}
                onChange={(e) => setAlb(Number(e.target.value))}
                className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 font-mono focus:border-crimson-600"
              />
            </div>
            <div>
              <label className="text-slate-400 block mb-1">PT / INR</label>
              <input
                type="number"
                step="0.1"
                value={inr}
                onChange={(e) => setInr(Number(e.target.value))}
                className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 font-mono focus:border-crimson-600"
              />
            </div>

            <div>
              <label className="text-slate-400 block mb-1">Ascites</label>
              <select
                value={ascites}
                onChange={(e) => setAscites(Number(e.target.value) as any)}
                className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:border-crimson-600"
              >
                <option value={1}>None (1 pt)</option>
                <option value={2}>Mild / Controlled (2 pts)</option>
                <option value={3}>Moderate / Refractory (3 pts)</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="text-slate-400 block mb-1">Hepatic Encephalopathy</label>
              <select
                value={enceph}
                onChange={(e) => setEnceph(Number(e.target.value) as any)}
                className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:border-crimson-600"
              >
                <option value={1}>None (1 pt)</option>
                <option value={2}>Grade 1-2 (Sleep reversal, asterixis) (2 pts)</option>
                <option value={3}>Grade 3-4 (Severe confusion, coma) (3 pts)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {/* Child-Pugh Result */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-300">Child-Pugh:</span>
                <span className="font-mono font-bold text-base text-purple-400">
                  Score {cpResult.score} (Class {cpResult.classGrade})
                </span>
              </div>
              <div className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                {cpResult.recommendation}
              </div>
            </div>

            {/* ALBI Result */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-300">ALBI Score:</span>
                <span className="font-mono font-bold text-base text-cyan-400">
                  {albiResult.score} (Grade {albiResult.grade})
                </span>
              </div>
              <div className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                {albiResult.recommendation}
              </div>
            </div>
          </div>
        </div>

        {/* Module 3: MELD 3.0 Score */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm space-y-4 lg:col-span-2">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-amber-400" />
              <h2 className="text-sm font-bold text-slate-100">
                3. MELD 3.0 Score (TIPS Eligibility & Liver Mortality Stratifier)
              </h2>
            </div>
            <span className="text-[10px] font-mono text-slate-400">Updated UNOS/AASLD Equation</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs">
            <div>
              <label className="text-slate-400 block mb-1">Serum Sodium (mEq/L)</label>
              <input
                type="number"
                value={meldNa}
                onChange={(e) => setMeldNa(Number(e.target.value))}
                className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 font-mono focus:border-crimson-600"
              />
            </div>
            <div>
              <label className="text-slate-400 block mb-1">Total Bilirubin (mg/dL)</label>
              <input
                type="number"
                step="0.1"
                value={bili}
                onChange={(e) => setBili(Number(e.target.value))}
                className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 font-mono focus:border-crimson-600"
              />
            </div>
            <div>
              <label className="text-slate-400 block mb-1">Serum Creatinine (mg/dL)</label>
              <input
                type="number"
                step="0.1"
                value={serumCreatinine}
                onChange={(e) => setSerumCreatinine(Number(e.target.value))}
                className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 font-mono focus:border-crimson-600"
              />
            </div>
            <div>
              <label className="text-slate-400 block mb-1">PT / INR</label>
              <input
                type="number"
                step="0.1"
                value={inr}
                onChange={(e) => setInr(Number(e.target.value))}
                className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 font-mono focus:border-crimson-600"
              />
            </div>
            <div>
              <label className="text-slate-400 block mb-1">Serum Albumin (g/dL)</label>
              <input
                type="number"
                step="0.1"
                value={alb}
                onChange={(e) => setAlb(Number(e.target.value))}
                className="w-full px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 font-mono focus:border-crimson-600"
              />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between flex-wrap gap-4 text-xs">
            <div>
              <div className="text-slate-400 text-xs">MELD 3.0 Score:</div>
              <div className="text-2xl font-bold font-mono text-amber-400 mt-0.5">
                {meldResult.score} Points
              </div>
            </div>
            <div>
              <div className="text-slate-400 text-xs">Estimated 90-Day Mortality:</div>
              <div className="text-sm font-bold font-mono text-slate-100 mt-0.5">
                {meldResult.mortality90Day}
              </div>
            </div>
            <div className="max-w-md text-[11px] text-slate-300 leading-relaxed">
              <b>TIPS Recommendation:</b> {meldResult.tipsRecommendation}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorsPage;
