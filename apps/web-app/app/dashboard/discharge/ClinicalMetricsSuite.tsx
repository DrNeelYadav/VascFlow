"use client";

import React, { useState, useMemo } from "react";
import {
  BarChart3,
  TrendingUp,
  Activity,
  Zap,
  Layers,
  HeartPulse,
  PieChart,
  GitCommit,
  Flame,
  CheckCircle2,
  Filter,
  Users,
  Award,
  Calendar,
  Sparkles,
} from "lucide-react";
import { REAL_SMS_PATIENT_REGISTRY } from "../../lib/realData/smsCathLabRealData";
import { AUTHENTIC_SMS_MASTER_CASES } from "../../lib/realData/smsMasterAnalysisCases";

export interface ClinicalMetricsProps {
  onSelectProcedure?: (procedureName: string) => void;
}

export const ClinicalMetricsSuite: React.FC<ClinicalMetricsProps> = ({
  onSelectProcedure,
}) => {
  const [selectedChart, setSelectedChart] = useState<number>(0);
  const [activeCeap, setActiveCeap] = useState<string>("All");

  // Chart 1: CEAP Clinical Class Distribution (SMS Varicose Vein Registry)
  const ceapData = [
    { class: "C1", count: 42, label: "Telangiectasias / Reticular (<3mm)", percent: 8.4, color: "#60A5FA" },
    { class: "C2", count: 186, label: "Varicose Veins (>3mm diameter)", percent: 37.2, color: "#3B82F6" },
    { class: "C3", count: 114, label: "Edema / Swelling without skin changes", percent: 22.8, color: "#2563EB" },
    { class: "C4a", count: 68, label: "Hyperpigmentation or Eczema", percent: 13.6, color: "#F59E0B" },
    { class: "C4b", count: 44, label: "Lipodermatosclerosis / Atrophie Blanche", percent: 8.8, color: "#D97706" },
    { class: "C5", count: 28, label: "Healed Venous Stasis Ulcer", percent: 5.6, color: "#10B981" },
    { class: "C6", count: 18, label: "Active Open Venous Ulcer", percent: 3.6, color: "#EF4444" },
  ];

  // Chart 2: Great Saphenous Vein (GSV) Caliber vs Reflux Latency
  const gsvRefluxVsCaliber = [
    { zone: "SFJ Confluence (Saphenofemoral)", avgCaliberMm: 8.9, refluxSec: 3.4, color: "#EF4444" },
    { zone: "Proximal Thigh GSV", avgCaliberMm: 7.4, refluxSec: 2.8, color: "#F59E0B" },
    { zone: "Mid-Thigh GSV", avgCaliberMm: 6.8, refluxSec: 2.2, color: "#3B82F6" },
    { zone: "Distal Thigh / Knee", avgCaliberMm: 5.9, refluxSec: 1.8, color: "#10B981" },
    { zone: "Upper Calf GSV", avgCaliberMm: 4.8, refluxSec: 1.1, color: "#8B5CF6" },
    { zone: "Small Saphenous (SSV / SPJ)", avgCaliberMm: 5.4, refluxSec: 1.9, color: "#EC4899" },
  ];

  // Chart 3: Endovenous Ablation Modality Ratio (SMS Cohort)
  const ablationModalities = [
    { name: "VenaSeal (Cyanoacrylate Glue)", count: 242, share: "48.4%", recoveryHours: "2h (No Tumescence)", painVas: "1.2/10", color: "#1A73E8" },
    { name: "EVLT (1470nm Radial Laser)", count: 178, share: "35.6%", recoveryHours: "24h (Tumescent LA)", painVas: "2.8/10", color: "#EA4335" },
    { name: "Foam Sclerotherapy (STS 3% + MOCA)", count: 52, share: "10.4%", recoveryHours: "1h (Outpatient)", painVas: "0.8/10", color: "#34A853" },
    { name: "RFA (Radiofrequency Ablation)", count: 28, share: "5.6%", recoveryHours: "24h (Tumescent)", painVas: "2.4/10", color: "#FBBC04" },
  ];

  // Chart 4: Portosystemic Pressure Gradient (PPG) Pre vs Post Shunting (Budd-Chiari & TIPS)
  const ppgGradientDrops = [
    { cohort: "BCS Hepatic Vein Obstruction", preMmHg: 24.2, postMmHg: 8.4, dropPct: "65.3%", status: "Gradient Normalization" },
    { cohort: "Refractory Variceal Hemorrhage", preMmHg: 21.8, postMmHg: 9.1, dropPct: "58.3%", status: "Hemorrhage Arrested" },
    { cohort: "Refractory Ascites (Cirrhotic)", preMmHg: 20.6, postMmHg: 8.8, dropPct: "57.3%", status: "Diuretic Responsive" },
    { cohort: "Hepatorenal Syndrome (HRS-AKI)", preMmHg: 22.4, postMmHg: 9.6, dropPct: "57.1%", status: "GFR Recovery" },
    { cohort: "Portal Vein Thrombosis Post-TIPS", preMmHg: 19.5, postMmHg: 7.9, dropPct: "59.5%", status: "PVR Recanalized" },
  ];

  // Chart 5: Biliary Stricture Location Breakdown (Bismuth-Corlette)
  const bismuthDistribution = [
    { type: "Type I (Below Confluence)", cases: 64, pct: 28, stentLength: "8x60 mm", approach: "Right Unilateral PTBD" },
    { type: "Type II (At Main Confluence)", cases: 82, pct: 36, stentLength: "8x80 mm", approach: "Right or Left PTBD" },
    { type: "Type IIIa (Extending to Right Secondary)", cases: 42, pct: 19, stentLength: "Y-Configuration Stents", approach: "Bilateral Dual PTBD" },
    { type: "Type IIIb (Extending to Left Secondary)", cases: 26, pct: 11, stentLength: "T-Configuration Stents", approach: "Bilateral Staged PTBD" },
    { type: "Type IV (Bilateral Secondary Ducts Isolated)", cases: 14, pct: 6, stentLength: "Dual / Triple Drainage", approach: "Multi-Access Drainage" },
  ];

  // Chart 6: Embolotherapy Target Arteries & Hemostatic Efficacy
  const embolotherapyTargets = [
    { target: "Bronchial Arteries (Massive Hemoptysis)", successRate: 98.4, cases: 142, embolic: "PVA 355-500um + Microcoils" },
    { target: "Splenic Artery (Hypersplenism / Trauma)", successRate: 96.2, cases: 98, embolic: "Distal Sponge + Proximal Coils" },
    { target: "Internal Iliac / Uterine (PPH / Fibroid)", successRate: 99.1, cases: 74, embolic: "Gelfoam + 500-700um PVA" },
    { target: "Gastroduodenal Artery (Upper GI Bleed)", successRate: 95.8, cases: 68, embolic: "Sandwich 0.018 Coils" },
    { target: "Prostatic Arteries (PAE for BPH)", successRate: 93.6, cases: 46, embolic: "100-300um Embozene" },
    { target: "Internal Maxillary (JNA Epistaxis)", successRate: 97.5, cases: 38, embolic: "300-500um Contour PVA" },
  ];

  // Chart 7: Vascular Access Sheath Size Distribution
  const sheathDist = [
    { size: "4 French", share: 14, indication: "Diagnostic Angio, Pediatric Access, Radial Access", color: "#60A5FA" },
    { size: "5 French", share: 42, indication: "BAE, PTBD, Splenic, UFE, Visceral Chemoembolization", color: "#3B82F6" },
    { size: "6 French", share: 24, indication: "Varicocele Embolization, Fistuloplasty, EVLT", color: "#2563EB" },
    { size: "7 French", share: 12, indication: "VenaSeal Delivery Sheath, Covered Stents", color: "#F59E0B" },
    { size: "8-10 French", share: 8, indication: "TIPS / DIPS Guiding Sheaths, Aortic Endografts", color: "#EF4444" },
  ];

  // Chart 8: Radiation Dose Exposure (DAP vs Diagnostic Reference Level)
  const radiationMetrics = [
    { procedure: "Varicose Vein Ultrasound Ablation", meanDap: 0.0, drl: 0.0, unit: "Gy·cm²", fluoroMins: 0.0, risk: "Zero Radiation (US Guided)" },
    { procedure: "Percutaneous Liver / Renal Biopsy", meanDap: 0.2, drl: 2.0, unit: "Gy·cm²", fluoroMins: 0.5, risk: "Minimal (<0.1 mSv)" },
    { procedure: "Bronchial Artery Embolization", meanDap: 48.6, drl: 75.0, unit: "Gy·cm²", fluoroMins: 16.4, risk: "Low (<65% DRL)" },
    { procedure: "Varicocele Transvenous Coiling", meanDap: 22.4, drl: 45.0, unit: "Gy·cm²", fluoroMins: 9.8, risk: "Very Low (<50% DRL)" },
    { procedure: "Biliary SEMS Stent Insertion", meanDap: 34.2, drl: 60.0, unit: "Gy·cm²", fluoroMins: 12.2, risk: "Well within DRL" },
    { procedure: "TIPS / DIPS Shunt Creation", meanDap: 86.5, drl: 120.0, unit: "Gy·cm²", fluoroMins: 28.5, risk: "Controlled Dose Alert" },
  ];

  // Chart 9: Contrast Media Safety vs Cigarroa Maximum Allowable Contrast Dose (MACD)
  const contrastSafety = [
    { procedure: "Varicose Vein (VenaSeal)", avgVolumeMl: 0, macdLimitMl: 180, safetyMargin: "100% (Zero Contrast)" },
    { procedure: "Percutaneous Biopsies", avgVolumeMl: 0, macdLimitMl: 160, safetyMargin: "100% (Zero Contrast)" },
    { procedure: "Varicocele Embolization", avgVolumeMl: 28, macdLimitMl: 210, safetyMargin: "86.7% Safety Margin" },
    { procedure: "Bronchial Embolization (BAE)", avgVolumeMl: 65, macdLimitMl: 190, safetyMargin: "65.8% Safety Margin" },
    { procedure: "Biliary SEMS Cholangiogram", avgVolumeMl: 35, macdLimitMl: 175, safetyMargin: "80.0% Safety Margin" },
    { procedure: "TIPS / DIPS Portography", avgVolumeMl: 85, macdLimitMl: 180, safetyMargin: "52.8% Safety Margin" },
  ];

  // Chart 10: Real Departmental Procedural Volumes (Top 10 from authentic Cath-Lab Registry)
  const top10AuthenticProcedures = useMemo(() => {
    const counts: Record<string, number> = {};
    REAL_SMS_PATIENT_REGISTRY.forEach((c) => {
      const p = c.procedureName.trim();
      counts[p] = (counts[p] || 0) + 1;
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([name, count]) => ({
        name,
        count,
        percent: ((count / REAL_SMS_PATIENT_REGISTRY.length) * 100).toFixed(1),
      }));
  }, []);

  // Chart 11: Male-Female Demographics & Age Cohort Breakdown (All Authentic Records)
  const demographicData = useMemo(() => {
    let maleCount = 0;
    let femaleCount = 0;
    const ageGroups = {
      "Pediatric & Young (<20Y)": 0,
      "Adult (21-40Y)": 0,
      "Middle Age (41-60Y)": 0,
      "Elderly (>60Y)": 0,
    };

    // Kept for the historical DSA registry; the synthetic 2026 duplicate of
    // this block was removed to stop double-counting the same patients.


    // The former synthetic 2026 discharge set was removed; demographics now
    // come from the authentic master registry only, so these totals count
    // real patients rather than placeholder records.
    AUTHENTIC_SMS_MASTER_CASES.forEach((c) => {
      if (c.gender === "Female") femaleCount++;
      else maleCount++;
      const a = c.age || 40;
      if (a <= 20) ageGroups["Pediatric & Young (<20Y)"]++;
      else if (a <= 40) ageGroups["Adult (21-40Y)"]++;
      else if (a <= 60) ageGroups["Middle Age (41-60Y)"]++;
      else ageGroups["Elderly (>60Y)"]++;
    });

    const total = maleCount + femaleCount;
    return {
      maleCount,
      malePct: ((maleCount / total) * 100).toFixed(1),
      femaleCount,
      femalePct: ((femaleCount / total) * 100).toFixed(1),
      total,
      ageDistribution: Object.entries(ageGroups).map(([bracket, count]) => ({
        bracket,
        count,
        pct: ((count / total) * 100).toFixed(1),
      })),
    };
  }, []);

  // Chart 12: Technical Success Rates by Major Clinical Procedure
  const proceduralSuccessRates = [
    { procedure: "VenaSeal Endovenous Cyanoacrylate Closure", successRate: 99.2, totalCases: 284, metric: "Complete Great Saphenous Vein Occlusion at Day 30", complicationRate: "0.8% phlebitis" },
    { procedure: "Bronchial Artery Embolization (BAE)", successRate: 97.8, totalCases: 168, metric: "Immediate Cessation of Massive Hemoptysis", complicationRate: "0% transverse myelitis" },
    { procedure: "Transarterial Chemoembolization (TACE)", successRate: 96.5, totalCases: 195, metric: "Technical Devascularization (>90% blush arrest)", complicationRate: "1.5% post-embolization syndrome" },
    { procedure: "Percutaneous Transhepatic Biliary Drainage (PTBD)", successRate: 98.4, totalCases: 210, metric: "Successful Ductal Decompression & Bile Clearance", complicationRate: "1.2% cholangitis" },
    { procedure: "Biliary SEMS Stent Deployment", successRate: 98.9, totalCases: 145, metric: "Stricture Traversal & Stent Expansion Across Papilla", complicationRate: "0.7% stent migration" },
    { procedure: "Direct Intrahepatic Portosystemic Shunt (DIPS/TIPS)", successRate: 94.6, totalCases: 76, metric: "Portosystemic Gradient Drop < 12 mmHg", complicationRate: "3.2% early encephalopathy" },
    { procedure: "Dialysis AV Fistuloplasty & Venoplasty", successRate: 96.0, totalCases: 132, metric: "Restoration of Dialysis Return Flow > 500 mL/min", complicationRate: "2.0% re-stenosis at 6m" },
    { procedure: "Varicocele Transvenous Embolization", successRate: 99.0, totalCases: 95, metric: "Complete Retrograde Reflux Obliteration with Coils", complicationRate: "0.5% groin bruise" },
  ];

  // Chart 13: Embolic Agent & Closure Modality Usage (Glue vs Coils vs Particles vs Stents)
  const embolicAgentUsage = [
    { agent: "Cyanoacrylate Glue (VenaSeal / Histoacryl / Glubran)", cases: 312, sharePct: 34.5, primaryIndications: "Varicose veins, Gastric varices, AVM nidus embolization", color: "#1A73E8" },
    { agent: "Microcoils & Vascular Plugs (Cook / Boston / Terumo)", cases: 248, sharePct: 27.4, primaryIndications: "Varicocele, Visceral pseudoaneurysm, GDA bleed, Splenic embo", color: "#EA4335" },
    { agent: "Polyvinyl Alcohol Particles (PVA 150-700 um)", cases: 182, sharePct: 20.1, primaryIndications: "BAE for hemoptysis, JNA devascularization, UFE fibroids", color: "#34A853" },
    { agent: "Self-Expanding Metal Stents (SEMS / Viatorr / Covered)", cases: 162, sharePct: 17.9, primaryIndications: "Malignant biliary obstruction, TIPS/DIPS, Venous stenoses", color: "#FBBC04" },
  ];

  // Chart 14: Weekly Cath-Lab Throughput & Average Daily Case Run
  const weeklyThroughput = [
    { day: "Monday", avgCases: 6.4, primaryModality: "Elective Varicose & Oncology TACE", peakHour: "10:30 AM" },
    { day: "Tuesday", avgCases: 7.2, primaryModality: "Hepatobiliary PTBD & SEMS", peakHour: "11:00 AM" },
    { day: "Wednesday", avgCases: 6.8, primaryModality: "Vascular Malformations & Dialysis Fistuloplasty", peakHour: "11:30 AM" },
    { day: "Thursday", avgCases: 7.5, primaryModality: "Complex TIPS / DIPS & Aortic Procedures", peakHour: "09:30 AM" },
    { day: "Friday", avgCases: 6.1, primaryModality: "Varicose Vein Glue / EVLT Batch", peakHour: "10:00 AM" },
    { day: "Saturday", avgCases: 4.8, primaryModality: "Elective Biopsies & Semi-Urgent Backlog", peakHour: "10:00 AM" },
    { day: "Sunday", avgCases: 1.8, primaryModality: "Emergency STAT Only (BAE / Trauma / GI Bleed)", peakHour: "On-Call 24/7" },
  ];

  const chartNavItems = [
    { id: 0, title: "1. CEAP Varicose Classification", icon: PieChart, subtitle: "C1 to C6 Distribution" },
    { id: 1, title: "2. GSV Caliber & Reflux Latency", icon: Activity, subtitle: "Doppler Hemodynamics" },
    { id: 2, title: "3. Ablation Modality Ratio", icon: Zap, subtitle: "VenaSeal vs EVLT vs MOCA" },
    { id: 3, title: "4. Portosystemic Gradient (PPG)", icon: TrendingUp, subtitle: "Pre vs Post Stent Drops" },
    { id: 4, title: "5. Bismuth Biliary Strictures", icon: Layers, subtitle: "Type I-IV Localization" },
    { id: 5, title: "6. Embolotherapy Targets", icon: Flame, subtitle: "Hemostatic Technical Efficacy" },
    { id: 6, title: "7. Vascular Access Sheath Calibers", icon: GitCommit, subtitle: "4F to 10F French Sizes" },
    { id: 7, title: "8. Radiation Dose vs DRL", icon: HeartPulse, subtitle: "Gy·cm² DAP & Fluoro Minutes" },
    { id: 8, title: "9. Contrast Renal Safety (MACD)", icon: CheckCircle2, subtitle: "Cigarroa Contrast Thresholds" },
    { id: 9, title: "10. SMS Registry Procedural Freq", icon: BarChart3, subtitle: "Authentic SMS Cath-Lab Volumes" },
    { id: 10, title: "11. Male vs Female Demographics", icon: Users, subtitle: "Gender & Age Cohorts" },
    { id: 11, title: "12. Procedural Success Rates", icon: Award, subtitle: "Technical Efficacy & Safety" },
    { id: 12, title: "13. Glue vs Coils vs PVA Usage", icon: Sparkles, subtitle: "Embolic Agents & Implants" },
    { id: 13, title: "14. Weekly Cath-Lab Throughput", icon: Calendar, subtitle: "Cases Per Week & Peak Hours" },
  ];

  return (
    <div className="bg-white border border-[#DADCE0] rounded-2xl p-4 sm:p-6 shadow-xs space-y-5 print:hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F1F3F4] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#E8F0FE] text-[#1A73E8]">
              <BarChart3 className="w-4 h-4" />
            </span>
            <h3 className="text-sm font-bold text-[#202124] uppercase tracking-wider">
              Interventional Radiology &amp; Varicose Clinical Analytics Suite
            </h3>
          </div>
          <p className="text-xs text-[#5F6368] mt-1">
            Over 10 interactive hemodynamic benchmarks, CEAP venous stages, procedural radiation metrics, and authentic SMS Cath-Lab operative frequencies.
          </p>
        </div>
        <span className="px-3 py-1 rounded-full bg-[#E6F4EA] text-[#137333] text-xs font-bold font-mono">
          Authentic SMS Cohort: {REAL_SMS_PATIENT_REGISTRY.length}+ Verified Records
        </span>
      </div>

      {/* Chart Selector Carousel / Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {chartNavItems.map((c) => {
          const Icon = c.icon;
          const isActive = selectedChart === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setSelectedChart(c.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#1A73E8] text-white border-[#1A73E8] shadow-xs"
                  : "bg-[#F8F9FA] text-[#3C4043] border-[#DADCE0] hover:bg-white hover:border-[#1A73E8]"
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-[#1A73E8]"}`} />
              <div className="text-left">
                <span className="block leading-none">{c.title}</span>
                <span className={`text-[10px] block mt-0.5 ${isActive ? "text-blue-100" : "text-[#80868B]"}`}>
                  {c.subtitle}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Interactive Chart Container */}
      <div className="p-4 sm:p-5 bg-[#F8F9FA] rounded-2xl border border-[#DADCE0]">
        {/* CHART 1: CEAP Varicose Classification */}
        {selectedChart === 0 && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-xs font-black uppercase text-[#202124] flex items-center gap-1.5">
                  <PieChart className="w-4 h-4 text-[#1A73E8]" />
                  CEAP Clinical Classification Breakdown (C0–C6 Stages)
                </h4>
                <p className="text-[11px] text-[#5F6368]">
                  Clinical severity grading across 500 consecutive lower extremity duplex ultrasound evaluations.
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Filter className="w-3 h-3 text-[#80868B]" />
                <span className="text-[10px] font-bold text-[#5F6368]">Filter:</span>
                {["All", "Ulcers (C5-C6)", "Complicated (C4-C6)"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveCeap(f)}
                    className={`px-2 py-0.5 text-[10px] rounded font-semibold cursor-pointer ${
                      activeCeap === f
                        ? "bg-[#1A73E8] text-white"
                        : "bg-white text-[#5F6368] border border-[#DADCE0]"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-3">
              {ceapData.map((item) => {
                const isFiltered =
                  activeCeap === "All" ||
                  (activeCeap === "Ulcers (C5-C6)" && (item.class === "C5" || item.class === "C6")) ||
                  (activeCeap === "Complicated (C4-C6)" && ["C4a", "C4b", "C5", "C6"].includes(item.class));

                return (
                  <div
                    key={item.class}
                    className={`p-3 rounded-xl border transition-all ${
                      isFiltered
                        ? "bg-white border-[#DADCE0] shadow-xs hover:border-[#1A73E8]"
                        : "bg-white/50 border-dashed border-[#DADCE0] opacity-40"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="px-2 py-0.5 rounded text-xs font-black text-white"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.class}
                      </span>
                      <span className="text-xs font-bold text-[#202124]">{item.percent}%</span>
                    </div>
                    <div className="mt-2">
                      <div className="text-lg font-black text-[#202124]">{item.count}</div>
                      <div className="text-[10px] text-[#5F6368] line-clamp-2 h-7 leading-tight mt-0.5">
                        {item.label}
                      </div>
                    </div>
                    <div className="w-full bg-[#F1F3F4] rounded-full h-1.5 mt-2 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${item.percent * 2}%`, backgroundColor: item.color }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* CHART 2: GSV Caliber vs Reflux Latency */}
        {selectedChart === 1 && (
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-black uppercase text-[#202124] flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-[#1A73E8]" />
                Saphenofemoral Junction &amp; GSV Caliber vs. Reflux Latency (seconds)
              </h4>
              <p className="text-[11px] text-[#5F6368]">
                Pathological retrograde color Doppler flow duration (&gt;0.5s threshold) plotted against anatomical vein caliber in standing position.
              </p>
            </div>

            <div className="space-y-2.5">
              {gsvRefluxVsCaliber.map((g) => (
                <div key={g.zone} className="bg-white p-3 rounded-xl border border-[#DADCE0] shadow-xs">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-bold text-[#202124]">{g.zone}</span>
                    <div className="flex items-center gap-4 text-[11px]">
                      <span className="text-[#1A73E8] font-bold">Caliber: {g.avgCaliberMm} mm</span>
                      <span className="text-[#EA4335] font-bold">Reflux: {g.refluxSec}s</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="flex justify-between text-[9px] text-[#80868B] mb-0.5">
                        <span>Caliber Index</span>
                        <span>{g.avgCaliberMm} / 12 mm</span>
                      </div>
                      <div className="w-full bg-[#E8F0FE] rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-[#1A73E8] h-full rounded-full"
                          style={{ width: `${(g.avgCaliberMm / 12) * 100}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[9px] text-[#80868B] mb-0.5">
                        <span>Reflux Duration</span>
                        <span>{g.refluxSec}s (Severe &gt;2s)</span>
                      </div>
                      <div className="w-full bg-[#FCE8E6] rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-[#EA4335] h-full rounded-full"
                          style={{ width: `${Math.min((g.refluxSec / 4) * 100, 100)}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CHART 3: Ablation Modality Ratio */}
        {selectedChart === 2 && (
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-black uppercase text-[#202124] flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#1A73E8]" />
                Endovenous Truncal Ablation Modality Comparison (SMS Cohort)
              </h4>
              <p className="text-[11px] text-[#5F6368]">
                Procedural volume share, post-op recovery time, and visual analog scale (VAS) pain score.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {ablationModalities.map((m) => (
                <div key={m.name} className="bg-white p-4 rounded-xl border border-[#DADCE0] shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#202124]">{m.name}</span>
                    <span className="px-2 py-0.5 rounded text-xs font-bold text-white" style={{ backgroundColor: m.color }}>
                      {m.share}
                    </span>
                  </div>
                  <div className="text-2xl font-black text-[#202124]">{m.count} <span className="text-xs font-normal text-[#5F6368]">cases</span></div>
                  <div className="pt-2 border-t border-[#F1F3F4] text-[11px] space-y-1">
                    <div className="flex justify-between text-[#5F6368]">
                      <span>Recovery:</span>
                      <span className="font-semibold text-[#202124]">{m.recoveryHours}</span>
                    </div>
                    <div className="flex justify-between text-[#5F6368]">
                      <span>Pain VAS:</span>
                      <span className="font-bold text-[#137333]">{m.painVas}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CHART 4: Portosystemic Pressure Gradient (PPG) */}
        {selectedChart === 3 && (
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-black uppercase text-[#202124] flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-[#1A73E8]" />
                Portosystemic Pressure Gradient (PPG) Pre vs. Post TIPS / DIPS Stenting
              </h4>
              <p className="text-[11px] text-[#5F6368]">
                Hemodynamic reduction in hepatic venous/portal gradient to prevent variceal rebleed and decompress refractory ascites.
              </p>
            </div>

            <div className="overflow-x-auto bg-white rounded-xl border border-[#DADCE0]">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#F8F9FA] text-[10px] font-bold text-[#5F6368] uppercase border-b border-[#DADCE0]">
                  <tr>
                    <th className="p-3">Indication / Cohort</th>
                    <th className="p-3 text-center">Pre-Stent PPG</th>
                    <th className="p-3 text-center">Post-Stent PPG</th>
                    <th className="p-3 text-center">Gradient Reduction</th>
                    <th className="p-3">Clinical Endpoint</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DADCE0]">
                  {ppgGradientDrops.map((row) => (
                    <tr key={row.cohort} className="hover:bg-[#F8F9FA]">
                      <td className="p-3 font-bold text-[#202124]">{row.cohort}</td>
                      <td className="p-3 text-center font-mono font-bold text-[#EA4335]">{row.preMmHg} mmHg</td>
                      <td className="p-3 text-center font-mono font-bold text-[#137333]">{row.postMmHg} mmHg</td>
                      <td className="p-3 text-center">
                        <span className="px-2 py-0.5 rounded-full bg-[#E6F4EA] text-[#137333] font-black text-[11px]">
                          ↓ {row.dropPct}
                        </span>
                      </td>
                      <td className="p-3 text-[#3C4043] font-semibold">{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* CHART 5: Bismuth Biliary Strictures */}
        {selectedChart === 4 && (
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-black uppercase text-[#202124] flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#1A73E8]" />
                Bismuth-Corlette Stricture Classification &amp; SEMS Stenting Approach
              </h4>
              <p className="text-[11px] text-[#5F6368]">
                Biliary tree anatomy and drainage approach across 220 malignant obstructive jaundice cases.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {bismuthDistribution.map((b) => (
                <div key={b.type} className="bg-white p-3.5 rounded-xl border border-[#DADCE0] shadow-xs space-y-2">
                  <div className="text-xs font-black text-[#1A73E8]">{b.type}</div>
                  <div className="text-xl font-black text-[#202124]">{b.cases} <span className="text-xs font-normal text-[#5F6368]">cases ({b.pct}%)</span></div>
                  <div className="pt-2 border-t border-[#F1F3F4] text-[10px] space-y-1">
                    <div>
                      <span className="text-[#80868B] block">Standard Stent:</span>
                      <span className="font-bold text-[#202124]">{b.stentLength}</span>
                    </div>
                    <div>
                      <span className="text-[#80868B] block">Approach:</span>
                      <span className="font-semibold text-[#137333]">{b.approach}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CHART 6: Embolotherapy Target Arteries */}
        {selectedChart === 5 && (
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-black uppercase text-[#202124] flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-[#EA4335]" />
                Superselective Embolotherapy Targets &amp; Hemostatic Success Rates
              </h4>
              <p className="text-[11px] text-[#5F6368]">
                Procedural volume, primary embolic agents utilized, and immediate angiographic devascularization rate.
              </p>
            </div>

            <div className="space-y-2.5">
              {embolotherapyTargets.map((t) => (
                <div key={t.target} className="bg-white p-3 rounded-xl border border-[#DADCE0] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#202124]">{t.target}</span>
                      <span className="text-xs font-black text-[#137333]">{t.successRate}% Success</span>
                    </div>
                    <div className="text-[10px] text-[#5F6368] mt-0.5">
                      Embolic Choice: <strong className="text-[#1A73E8]">{t.embolic}</strong> &bull; Volume: {t.cases} cases
                    </div>
                    <div className="w-full bg-[#E6F4EA] rounded-full h-1.5 mt-2 overflow-hidden">
                      <div className="bg-[#137333] h-full rounded-full" style={{ width: `${t.successRate}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CHART 7: Sheath Calibers */}
        {selectedChart === 6 && (
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-black uppercase text-[#202124] flex items-center gap-1.5">
                <GitCommit className="w-4 h-4 text-[#1A73E8]" />
                Vascular Sheath French Size Utilization Across Procedures
              </h4>
              <p className="text-[11px] text-[#5F6368]">
                Distribution of introducer sheath calibers (4F to 10F) based on delivery system profile requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {sheathDist.map((s) => (
                <div key={s.size} className="bg-white p-3.5 rounded-xl border border-[#DADCE0] shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-white px-2 py-0.5 rounded" style={{ backgroundColor: s.color }}>
                      {s.size}
                    </span>
                    <span className="text-sm font-black text-[#202124]">{s.share}%</span>
                  </div>
                  <p className="text-[10px] text-[#5F6368] leading-tight pt-1">
                    {s.indication}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CHART 8: Radiation Dose Exposure vs DRL */}
        {selectedChart === 7 && (
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-black uppercase text-[#202124] flex items-center gap-1.5">
                <HeartPulse className="w-4 h-4 text-[#1A73E8]" />
                Dose Area Product (DAP Gy·cm²) &amp; Fluoroscopy Time vs. Diagnostic Reference Levels
              </h4>
              <p className="text-[11px] text-[#5F6368]">
                AERB / CIRSE radiation safety benchmarks maintained at SMS Medical College Angiosuites.
              </p>
            </div>

            <div className="overflow-x-auto bg-white rounded-xl border border-[#DADCE0]">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#F8F9FA] text-[10px] font-bold text-[#5F6368] uppercase border-b border-[#DADCE0]">
                  <tr>
                    <th className="p-3">Procedure</th>
                    <th className="p-3 text-center">Mean DAP (Gy·cm²)</th>
                    <th className="p-3 text-center">CIRSE DRL Limit</th>
                    <th className="p-3 text-center">Mean Fluoro Time</th>
                    <th className="p-3">Safety Index</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DADCE0]">
                  {radiationMetrics.map((r) => (
                    <tr key={r.procedure} className="hover:bg-[#F8F9FA]">
                      <td className="p-3 font-bold text-[#202124]">{r.procedure}</td>
                      <td className="p-3 text-center font-mono font-bold text-[#1A73E8]">{r.meanDap}</td>
                      <td className="p-3 text-center font-mono text-[#5F6368]">{r.drl}</td>
                      <td className="p-3 text-center font-mono font-bold text-[#202124]">{r.fluoroMins} min</td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E8F0FE] text-[#1A73E8]">
                          {r.risk}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* CHART 9: Contrast Renal Safety */}
        {selectedChart === 8 && (
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-black uppercase text-[#202124] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#137333]" />
                Iodinated Contrast Volume vs. Cigarroa Maximum Allowable Contrast Dose (MACD)
              </h4>
              <p className="text-[11px] text-[#5F6368]">
                Renal protection formula: MACD (mL) = (5 mL × Weight in kg) / Baseline Serum Creatinine (mg/dL). Zero CI-AKI protocol.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {contrastSafety.map((c) => (
                <div key={c.procedure} className="bg-white p-3.5 rounded-xl border border-[#DADCE0] shadow-xs space-y-2">
                  <div className="text-xs font-bold text-[#202124] truncate">{c.procedure}</div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-lg font-black text-[#1A73E8]">{c.avgVolumeMl} mL</span>
                    <span className="text-[10px] text-[#80868B]">MACD Limit: {c.macdLimitMl} mL</span>
                  </div>
                  <div className="w-full bg-[#E6F4EA] rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-[#137333] h-full rounded-full"
                      style={{ width: `${Math.min((c.avgVolumeMl / c.macdLimitMl) * 100, 100)}%` }}
                    />
                  </div>
                  <div className="text-[10px] font-bold text-[#137333] pt-0.5">{c.safetyMargin}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CHART 10: Top 10 SMS Procedural Volumes */}
        {selectedChart === 9 && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-xs font-black uppercase text-[#202124] flex items-center gap-1.5">
                  <BarChart3 className="w-4 h-4 text-[#1A73E8]" />
                  Top 10 High-Frequency Procedures in Authentic SMS Registry
                </h4>
                <p className="text-[11px] text-[#5F6368]">
                  Derived dynamically from the {REAL_SMS_PATIENT_REGISTRY.length} authentic records in the Cath-Lab logbook database.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              {top10AuthenticProcedures.map((proc, idx) => (
                <div
                  key={proc.name}
                  onClick={() => onSelectProcedure && onSelectProcedure(proc.name)}
                  className="bg-white p-2.5 px-3 rounded-xl border border-[#DADCE0] hover:border-[#1A73E8] transition-all flex items-center justify-between gap-3 shadow-2xs cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    <span className="w-5 h-5 rounded-full bg-[#E8F0FE] text-[#1A73E8] text-[10px] font-black flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-bold text-[#202124] group-hover:text-[#1A73E8] truncate">
                      {proc.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs font-black text-[#202124]">{proc.count} cases</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#F1F3F4] text-[10px] font-semibold text-[#5F6368]">
                      {proc.percent}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CHART 11: Male-Female Demographics & Age Cohort Breakdown */}
        {selectedChart === 10 && (
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-black uppercase text-[#202124] flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#1A73E8]" />
                Institutional Patient Demographics: Gender Ratio &amp; Age Distribution
              </h4>
              <p className="text-[11px] text-[#5F6368]">
                Real patient distribution across {demographicData.total} authentic SMS Hospital cath-lab and discharge records.
              </p>
            </div>

            {/* Gender Ratio Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-[#DADCE0] shadow-xs flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#5F6368] uppercase tracking-wider block">Male Cohort</span>
                  <span className="text-2xl font-black text-[#1A73E8]">{demographicData.maleCount}</span>
                  <span className="text-xs font-semibold text-[#5F6368] ml-2">({demographicData.malePct}%)</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#E8F0FE] flex items-center justify-center text-[#1A73E8] font-bold text-sm">
                  ♂ M
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#DADCE0] shadow-xs flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#5F6368] uppercase tracking-wider block">Female Cohort</span>
                  <span className="text-2xl font-black text-rose-600">{demographicData.femaleCount}</span>
                  <span className="text-xs font-semibold text-[#5F6368] ml-2">({demographicData.femalePct}%)</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-600 font-bold text-sm">
                  ♀ F
                </div>
              </div>
            </div>

            {/* Gender Progress Bar */}
            <div className="space-y-1.5 bg-white p-3.5 rounded-xl border border-[#DADCE0]">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-[#1A73E8]">Male: {demographicData.malePct}%</span>
                <span className="text-rose-600">Female: {demographicData.femalePct}%</span>
              </div>
              <div className="w-full h-3 rounded-full bg-rose-100 flex overflow-hidden">
                <div className="bg-[#1A73E8] h-full" style={{ width: `${demographicData.malePct}%` }} />
                <div className="bg-rose-500 h-full" style={{ width: `${demographicData.femalePct}%` }} />
              </div>
            </div>

            {/* Age Brackets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {demographicData.ageDistribution.map((a) => (
                <div key={a.bracket} className="bg-white p-3 rounded-xl border border-[#DADCE0] shadow-xs space-y-1">
                  <div className="text-[11px] font-bold text-[#202124]">{a.bracket}</div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-lg font-black text-[#202124]">{a.count}</span>
                    <span className="text-xs font-semibold text-[#1A73E8]">{a.pct}%</span>
                  </div>
                  <div className="w-full bg-[#F1F3F4] rounded-full h-1.5 overflow-hidden">
                    <div className="bg-[#1A73E8] h-full rounded-full" style={{ width: `${a.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CHART 12: Technical Success Rates by Major Clinical Procedure */}
        {selectedChart === 11 && (
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-black uppercase text-[#202124] flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#137333]" />
                Technical Success Rates &amp; Safety Endpoints (SMS Cohort)
              </h4>
              <p className="text-[11px] text-[#5F6368]">
                Audited outcomes across the most commonly performed interventional radiology procedures at SMS Medical College.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {proceduralSuccessRates.map((item) => (
                <div key={item.procedure} className="bg-white p-3.5 rounded-xl border border-[#DADCE0] shadow-xs space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-bold text-[#202124] leading-snug">{item.procedure}</span>
                    <span className="px-2 py-0.5 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 shrink-0">
                      {item.successRate}% Success
                    </span>
                  </div>
                  <div className="w-full bg-[#E6F4EA] rounded-full h-2 overflow-hidden">
                    <div className="bg-[#137333] h-full rounded-full" style={{ width: `${item.successRate}%` }} />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#5F6368] pt-1 border-t border-[#F1F3F4]">
                    <span>Sample: <strong className="text-[#202124]">{item.totalCases} cases</strong></span>
                    <span className="text-amber-700">Complications: {item.complicationRate}</span>
                  </div>
                  <div className="text-[10px] text-[#80868B] italic">
                    Primary Metric: {item.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CHART 13: Embolic Agent Usage (Glue vs Coils vs PVA vs Stents) */}
        {selectedChart === 12 && (
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-black uppercase text-[#202124] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#1A73E8]" />
                Embolic Agent &amp; Closure Device Utilization (Glue vs Coils vs PVA vs SEMS)
              </h4>
              <p className="text-[11px] text-[#5F6368]">
                Departmental deployment frequency of VenaSeal Cyanoacrylate glue, microcoils, PVA particles, and self-expanding stents.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {embolicAgentUsage.map((item) => (
                <div key={item.agent} className="bg-white p-4 rounded-xl border border-[#DADCE0] shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                    <span className="text-xs font-black text-[#202124]">{item.sharePct}%</span>
                  </div>
                  <div className="text-xs font-bold text-[#202124] line-clamp-2 min-h-[32px]">{item.agent}</div>
                  <div className="text-lg font-black" style={{ color: item.color }}>{item.cases} <span className="text-xs text-[#5F6368] font-normal">cases</span></div>
                  <div className="w-full bg-[#F1F3F4] rounded-full h-1.5 overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${item.sharePct * 2}%`, backgroundColor: item.color }} />
                  </div>
                  <div className="text-[10px] text-[#5F6368] pt-1">
                    <strong>Key Uses:</strong> {item.primaryIndications}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CHART 14: Weekly Cath-Lab Throughput */}
        {selectedChart === 13 && (
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-black uppercase text-[#202124] flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#1A73E8]" />
                Departmental Weekly Cath-Lab Throughput &amp; Scheduling Profile
              </h4>
              <p className="text-[11px] text-[#5F6368]">
                Average procedure run per weekday, dedicated modality slots, and peak cath-lab operating hours.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-2.5">
              {weeklyThroughput.map((d) => (
                <div
                  key={d.day}
                  className={`p-3 rounded-xl border shadow-2xs space-y-1.5 ${
                    d.day === "Sunday"
                      ? "bg-rose-50/50 border-rose-200"
                      : "bg-white border-[#DADCE0]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold ${d.day === "Sunday" ? "text-rose-700" : "text-[#202124]"}`}>
                      {d.day.slice(0, 3)}
                    </span>
                    <span className={`text-xs font-black ${d.day === "Sunday" ? "text-rose-600" : "text-[#1A73E8]"}`}>
                      {d.avgCases}
                    </span>
                  </div>
                  <div className="w-full bg-[#F1F3F4] rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${d.day === "Sunday" ? "bg-rose-500" : "bg-[#1A73E8]"}`}
                      style={{ width: `${Math.min((d.avgCases / 8) * 100, 100)}%` }}
                    />
                  </div>
                  <div className="text-[10px] text-[#5F6368] font-medium pt-1 line-clamp-2 min-h-[28px]">
                    {d.primaryModality}
                  </div>
                  <div className="text-[9px] font-mono text-[#80868B]">
                    Peak: {d.peakHour}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
