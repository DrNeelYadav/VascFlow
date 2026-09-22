"use client";

import React, { useMemo } from "react";
import { PaperDefinition } from "../data/papersRegistry";
import { PaperCaseRecord } from "../data/allSixPapersData";
import { AdvancedBiostatisticsDiagrams } from "./AdvancedBiostatisticsDiagrams";
import {
  TrendingUp,
  Award,
  Activity,
  ShieldAlert,
  Zap,
  PieChart,
  BarChart,
  Users,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

interface ReactiveAnalyticsProps {
  paper: PaperDefinition;
  cases: PaperCaseRecord[];
}

export function ReactiveAnalytics({ paper, cases }: ReactiveAnalyticsProps) {
  // Wilson 95% Confidence Interval calculation
  const wilsonCi = (k: number, n: number, conf = 0.95) => {
    if (n === 0) return { low: 0, high: 0 };
    const z = 1.96; // for 95% CI
    const p = k / n;
    const denom = 1 + (z * z) / n;
    const centre = (p + (z * z) / (2 * n)) / denom;
    const diff = (z * Math.sqrt((p * (1 - p)) / n + (z * z) / (4 * n * n))) / denom;
    return {
      low: Math.max(0, centre - diff) * 100,
      high: Math.min(1, centre + diff) * 100,
    };
  };

  // Live Reactive Metrics
  const stats = useMemo(() => {
    const totalN = cases.length;

    // Ages
    const validAges = cases
      .map((c) => c.age)
      .filter((a): a is number => a !== null && a > 0 && a <= 110);
    let meanAge = 0;
    let stdAge = 0;
    let medianAge = 0;
    let iqrLow = 0;
    let iqrHigh = 0;

    if (validAges.length > 0) {
      const sum = validAges.reduce((a, b) => a + b, 0);
      meanAge = sum / validAges.length;
      const variance =
        validAges.reduce((acc, a) => acc + Math.pow(a - meanAge, 2), 0) / validAges.length;
      stdAge = Math.sqrt(variance);

      const sortedAges = [...validAges].sort((a, b) => a - b);
      const mid = Math.floor(sortedAges.length / 2);
      medianAge =
        sortedAges.length % 2 !== 0
          ? sortedAges[mid]
          : (sortedAges[mid - 1] + sortedAges[mid]) / 2;
      iqrLow = sortedAges[Math.floor(sortedAges.length * 0.25)] || 0;
      iqrHigh = sortedAges[Math.floor(sortedAges.length * 0.75)] || 0;
    }

    // Gender
    const males = cases.filter((c) => c.gender === "M" || c.gender === "Male").length;
    const females = cases.filter((c) => c.gender === "F" || c.gender === "Female").length;
    const unknownGender = totalN - males - females;

    // Technical Success
    const successCases = cases.filter((c) =>
      c.technicalSuccess.toLowerCase().includes("success achieved")
    ).length;
    const successPct = totalN > 0 ? (successCases / totalN) * 100 : 0;
    const successCi = wilsonCi(successCases, totalN);

    // Complications
    const compCases = cases.filter(
      (c) =>
        c.complications &&
        c.complications !== "None / Uneventful" &&
        c.complications !== "" &&
        !c.complications.toLowerCase().includes("none")
    ).length;
    const compPct = totalN > 0 ? (compCases / totalN) * 100 : 0;
    const compCi = wilsonCi(compCases, totalN);

    // Classification Distribution
    const classCounts: Record<string, number> = {};
    paper.primaryClassificationOptions.forEach((opt) => {
      classCounts[opt] = 0;
    });
    let unclassifiedCount = 0;

    cases.forEach((c) => {
      if (c.classificationStage && classCounts[c.classificationStage] !== undefined) {
        classCounts[c.classificationStage]++;
      } else {
        unclassifiedCount++;
      }
    });

    // Landing Zone (if relevant)
    const landingCounts: Record<string, number> = {
      "Adequate (>=10mm)": 0,
      "Marginal (5-9mm)": 0,
      "Insufficient (<5mm)": 0,
      "Pending Review / NA": 0,
    };
    cases.forEach((c) => {
      if (c.landingZoneAdequacy === "Adequate (>=10mm)") landingCounts["Adequate (>=10mm)"]++;
      else if (c.landingZoneAdequacy === "Marginal (5-9mm)") landingCounts["Marginal (5-9mm)"]++;
      else if (c.landingZoneAdequacy === "Insufficient (<5mm)")
        landingCounts["Insufficient (<5mm)"]++;
      else landingCounts["Pending Review / NA"]++;
    });

    // Landing Zone vs Complication Contingency
    const landingComp: Record<string, { total: number; complications: number }> = {
      "Adequate (>=10mm)": { total: 0, complications: 0 },
      "Marginal (5-9mm)": { total: 0, complications: 0 },
      "Insufficient (<5mm)": { total: 0, complications: 0 },
    };

    cases.forEach((c) => {
      const hasComp =
        c.complications &&
        c.complications !== "None / Uneventful" &&
        c.complications !== "" &&
        !c.complications.toLowerCase().includes("none");
      if (c.landingZoneAdequacy && landingComp[c.landingZoneAdequacy]) {
        landingComp[c.landingZoneAdequacy].total++;
        if (hasComp) landingComp[c.landingZoneAdequacy].complications++;
      }
    });

    // Radiation & Dosimetry
    const validFluoro = cases
      .map((c) => c.fluoroscopyTimeMins)
      .filter((f): f is number => f !== null && f > 0);
    const meanFluoro =
      validFluoro.length > 0 ? validFluoro.reduce((a, b) => a + b, 0) / validFluoro.length : null;

    const validDap = cases
      .map((c) => c.doseAreaProductGycm2)
      .filter((d): d is number => d !== null && d > 0);
    const meanDap =
      validDap.length > 0 ? validDap.reduce((a, b) => a + b, 0) / validDap.length : null;

    const reviewedCount = cases.filter((c) => c.reviewStatus === "Completed").length;

    return {
      totalN,
      reviewedCount,
      validAgesCount: validAges.length,
      meanAge,
      stdAge,
      medianAge,
      iqrLow,
      iqrHigh,
      males,
      females,
      unknownGender,
      successCases,
      successPct,
      successCi,
      compCases,
      compPct,
      compCi,
      classCounts,
      unclassifiedCount,
      landingCounts,
      landingComp,
      meanFluoro,
      meanDap,
      validFluoroCount: validFluoro.length,
      validDapCount: validDap.length,
    };
  }, [cases, paper]);

  return (
    <div className="space-y-6">
      {/* Live Reactive Analytics Banner */}
      <div className="bg-gradient-to-r from-blue-50/80 via-indigo-50/60 to-purple-50/50 rounded-2xl border border-blue-100 p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#1A73E8] text-white">
              LIVE BIOSTATISTICAL ENGINE
            </span>
            <span className="text-xs font-semibold text-[#5F6368]">
              {paper.shortName} ({paper.code}) &bull; {paper.targetJournal.split("(")[0]}
            </span>
          </div>
          <h2 className="text-lg font-bold text-[#202124] mt-1.5">
            On-The-Go Reactive Analysis (Cohort N = {stats.totalN})
          </h2>
          <p className="text-xs text-[#5F6368] mt-0.5">
            All biostatistical metrics, percentages, and contingency distributions re-compute dynamically as you enter data in the sheet.
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-xs rounded-xl border border-blue-200 px-4 py-3 shrink-0 shadow-2xs">
          <div className="text-[11px] font-medium text-[#5F6368]">Retrospective Audit Progress</div>
          <div className="text-base font-bold text-[#1A73E8]">
            {stats.reviewedCount} of {stats.totalN} cases (
            {Math.round((stats.reviewedCount / (stats.totalN || 1)) * 100)}%)
          </div>
        </div>
      </div>

      {/* 4 Core Primary Statistical Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Primary Technical Success */}
        <div className="bg-white rounded-xl border border-[#DADCE0] p-4 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-[#5F6368]">Primary Technical Success</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 text-2xl font-bold text-emerald-700">
            {stats.successPct.toFixed(1)}%
          </div>
          <p className="text-[11px] text-[#5F6368] mt-1 font-mono">
            {stats.successCases} / {stats.totalN} cases
          </p>
          <div className="mt-2 pt-2 border-t border-gray-100 text-[11px] text-gray-500">
            Wilson 95% CI: [{stats.successCi.low.toFixed(1)}% – {stats.successCi.high.toFixed(1)}%]
          </div>
        </div>

        {/* Adverse Events & Complications */}
        <div className="bg-white rounded-xl border border-[#DADCE0] p-4 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-[#5F6368]">Complications / Adverse Events</span>
            <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
              <AlertTriangle className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 text-2xl font-bold text-red-600">
            {stats.compPct.toFixed(1)}%
          </div>
          <p className="text-[11px] text-[#5F6368] mt-1 font-mono">
            {stats.compCases} / {stats.totalN} cases
          </p>
          <div className="mt-2 pt-2 border-t border-gray-100 text-[11px] text-gray-500">
            Wilson 95% CI: [{stats.compCi.low.toFixed(1)}% – {stats.compCi.high.toFixed(1)}%]
          </div>
        </div>

        {/* Demographics & Age */}
        <div className="bg-white rounded-xl border border-[#DADCE0] p-4 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-[#5F6368]">Patient Age Demographics</span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 text-2xl font-bold text-[#202124]">
            {stats.meanAge > 0 ? `${stats.meanAge.toFixed(1)}y` : "—"}
          </div>
          <p className="text-[11px] text-[#5F6368] mt-1">
            Mean &plusmn; SD: {stats.meanAge.toFixed(1)} &plusmn; {stats.stdAge.toFixed(1)} yrs
          </p>
          <div className="mt-2 pt-2 border-t border-gray-100 text-[11px] text-gray-500">
            Median: {stats.medianAge.toFixed(1)}y (IQR: {stats.iqrLow}-{stats.iqrHigh})
          </div>
        </div>

        {/* Gender Ratio */}
        <div className="bg-white rounded-xl border border-[#DADCE0] p-4 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-[#5F6368]">Sex / Gender Ratio</span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
              <PieChart className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 text-2xl font-bold text-purple-700">
            {stats.males}M / {stats.females}F
          </div>
          <p className="text-[11px] text-[#5F6368] mt-1">
            {stats.totalN > 0 ? ((stats.males / stats.totalN) * 100).toFixed(1) : 0}% Male
          </p>
          <div className="mt-2 pt-2 border-t border-gray-100 text-[11px] text-gray-500">
            {stats.females} Female ({stats.totalN > 0 ? ((stats.females / stats.totalN) * 100).toFixed(1) : 0}%)
          </div>
        </div>
      </div>

      {/* Primary Classification Distribution Chart */}
      <div className="bg-white rounded-xl border border-[#DADCE0] p-5 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-[#202124] flex items-center gap-2">
              <BarChart className="w-4 h-4 text-[#1A73E8]" />
              {paper.primaryClassificationName} Breakdown
            </h3>
            <p className="text-xs text-[#5F6368]">
              Real-time stratification of the cohort according to the paper&apos;s primary staging system.
            </p>
          </div>
          <span className="text-xs font-medium text-[#5F6368]">
            {stats.totalN - stats.unclassifiedCount} / {stats.totalN} classified
          </span>
        </div>

        <div className="space-y-3">
          {paper.primaryClassificationOptions.map((opt) => {
            const count = stats.classCounts[opt] || 0;
            const pct = stats.totalN > 0 ? (count / stats.totalN) * 100 : 0;

            return (
              <div key={opt} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#202124]">{opt}</span>
                  <span className="font-mono text-[#5F6368]">
                    <strong>{count}</strong> ({pct.toFixed(1)}%)
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-[#1A73E8] h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}

          {stats.unclassifiedCount > 0 && (
            <div className="space-y-1 pt-1">
              <div className="flex items-center justify-between text-xs text-amber-700">
                <span className="italic font-medium">Unclassified / Awaiting Review</span>
                <span className="font-mono">
                  <strong>{stats.unclassifiedCount}</strong> (
                  {((stats.unclassifiedCount / stats.totalN) * 100).toFixed(1)}%)
                </span>
              </div>
              <div className="w-full bg-amber-100 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-amber-500 h-2 rounded-full transition-all"
                  style={{ width: `${(stats.unclassifiedCount / stats.totalN) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Multivariable / Landing Zone Contingency Table (When Applicable) */}
      {paper.landingZoneRelevant && (
        <div className="bg-white rounded-xl border border-[#DADCE0] p-5 shadow-xs space-y-3">
          <div>
            <h3 className="text-sm font-bold text-[#202124]">
              Landing Zone Adequacy vs. Complication &amp; Rebleed Contingency
            </h3>
            <p className="text-xs text-[#5F6368]">
              Univariate comparison showing complication distribution across proximal/distal landing zone lengths.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead className="bg-[#F8F9FA] text-[#202124] border-b border-[#DADCE0]">
                <tr>
                  <th className="py-2.5 px-3 font-semibold">Landing Zone Category</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Total Cases (n)</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Complications / Rebleed (n)</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Adverse Event Rate (%)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DADCE0]">
                {Object.entries(stats.landingComp).map(([zone, data]) => {
                  const rate = data.total > 0 ? (data.complications / data.total) * 100 : 0;
                  return (
                    <tr key={zone} className="hover:bg-gray-50">
                      <td className="py-2.5 px-3 font-medium text-[#202124]">{zone}</td>
                      <td className="py-2.5 px-3 text-center font-mono">{data.total}</td>
                      <td className="py-2.5 px-3 text-center font-mono font-semibold text-red-600">
                        {data.complications}
                      </td>
                      <td className="py-2.5 px-3 text-center font-mono font-bold">
                        {rate.toFixed(1)}%
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Radiation Dosimetry Telemetry Strip */}
      <div className="bg-[#F8F9FA] rounded-xl border border-[#DADCE0] p-4 text-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-[#5F6368]">
          <Zap className="w-4 h-4 text-amber-600" />
          <span>Radiation Dosimetry Records (DICOM Tags 0018,115E &amp; 0018,115A):</span>
        </div>
        <div className="flex items-center gap-6 font-medium text-[#202124]">
          <div>
            Mean Fluoroscopy Time:{" "}
            <strong>
              {stats.meanFluoro !== null ? `${stats.meanFluoro.toFixed(1)} mins` : "Pending Entry"}
            </strong>{" "}
            <span className="text-[#5F6368] font-normal font-mono">
              ({stats.validFluoroCount} logged)
            </span>
          </div>
          <div>
            Mean DAP:{" "}
            <strong>
              {stats.meanDap !== null ? `${stats.meanDap.toFixed(0)} Gy.cm²` : "Pending Entry"}
            </strong>{" "}
            <span className="text-[#5F6368] font-normal font-mono">
              ({stats.validDapCount} logged)
            </span>
          </div>
        </div>
      </div>

      {/* High-Level Biostatistical Diagrams & Regression Engine */}
      <AdvancedBiostatisticsDiagrams paper={paper} cases={cases} />
    </div>
  );
}
