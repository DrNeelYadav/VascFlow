"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { DRUG_PROTOCOLS } from "../../lib/data/protocolsData";
import { DrugProtocol } from "../../lib/types/clinical";
import { copyToClipboard } from "../../lib/ihmsBridge";
import {
  Pill,
  Search,
  Copy,
  Check,
  AlertTriangle,
  Calendar,
  FileSpreadsheet,
  Layers,
  Calculator,
  FileText,
  CreditCard,
  ShieldCheck,
  ShieldAlert,
  CheckCircle2,
  Stethoscope,
  Activity,
  Zap,
  Gauge,
  Sliders,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Package,
} from "lucide-react";
import {
  getCalculatorsForProtocol,
  calculateRotterdamBcs,
  calculateClichyScore,
  calculateCaudateRightLobeRatio,
  calculateHvpg,
  calculateBuddChiariCompositeRisk,
} from "../../lib/procedureCalculators";
import {
  calculateChildPugh,
  calculateMacd,
  calculateMeld3,
  calculateAlbi,
} from "../../lib/calculators";
import { ALL_MASTER_PROCEDURES, MasterProcedure } from "../../lib/masterCatalog";
import { ProcedureCalculatorRunner } from "../../components/calculators/ProcedureCalculatorRunner";
import { PreBookingWorkupModal } from "../../components/PreBookingWorkupModal";

const PROTOCOL_SYSTEMS = [
  "ALL",
  "Hepatobiliary & Portal",
  "Vascular & Arterial",
  "Oncology & Ablation",
  "Genitourinary & Pelvic",
  "Venous & Lymphatic",
  "Neuro & Head/Neck",
  "Thoracic & Pulmonology",
  "Musculoskeletal & Pain",
  "Dialysis & Access",
] as const;

export default function DrugProtocolsPage() {
  const router = useRouter();
  const [selectedProtocolId, setSelectedProtocolId] = useState<string>("bcs");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeSystem, setActiveSystem] = useState<string>("ALL");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [workupModalOpen, setWorkupModalOpen] = useState<boolean>(false);

  // --------------------------------------------------------------------------
  // INLINE CALCULATOR STATES (BCS / TIPS PROTOCOL) - ALL 9 CLINICAL CALCULATORS
  // --------------------------------------------------------------------------
  const [bcsBilirubin, setBcsBilirubin] = useState<number>(2.4);
  const [bcsInr, setBcsInr] = useState<number>(1.5);
  const [bcsCreatinine, setBcsCreatinine] = useState<number>(1.1);
  const [bcsSodium, setBcsSodium] = useState<number>(136);
  const [bcsAlbumin, setBcsAlbumin] = useState<number>(3.2);
  const [bcsAge, setBcsAge] = useState<number>(38);
  const [bcsIsFemale, setBcsIsFemale] = useState<boolean>(false);
  const [bcsAscites, setBcsAscites] = useState<boolean>(true);
  const [bcsEnceph, setBcsEnceph] = useState<boolean>(false);
  const [bcsAscitesGrade, setBcsAscitesGrade] = useState<"none" | "controlled" | "refractory">("controlled");
  const [bcsEncephGrade, setBcsEncephGrade] = useState<1 | 2 | 3>(1);
  // Imaging morphology:
  const [bcsCaudateWidthMm, setBcsCaudateWidthMm] = useState<number>(42);
  const [bcsRightLobeWidthMm, setBcsRightLobeWidthMm] = useState<number>(55);
  const [bcsCavalWeb, setBcsCavalWeb] = useState<boolean>(false);
  // Angiosuite hemodynamics:
  const [bcsWhvpMmHg, setBcsWhvpMmHg] = useState<number>(24);
  const [bcsFhvpMmHg, setBcsFhvpMmHg] = useState<number>(6);
  // Contrast safety:
  const [bcsWeightKg, setBcsWeightKg] = useState<number>(62);
  const [bcsContrastGiven, setBcsContrastGiven] = useState<number>(65);

  // Active view filter in Budd-Chiari calculator panel:
  const [bcsActiveCalcTab, setBcsActiveCalcTab] = useState<string>("ALL");

  // --------------------------------------------------------------------------
  // INLINE CALCULATOR STATES (TACE ONCOLOGY PROTOCOL)
  // --------------------------------------------------------------------------
  const [taceBili, setTaceBili] = useState<number>(1.2);
  const [taceAlb, setTaceAlb] = useState<number>(3.8);
  const [taceInr, setTaceInr] = useState<number>(1.1);
  const [taceAscitesPts, setTaceAscitesPts] = useState<1 | 2 | 3>(1);
  const [taceEncephPts, setTaceEncephPts] = useState<1 | 2 | 3>(1);
  const [taceWeightKg, setTaceWeightKg] = useState<number>(65);
  const [taceCreatinine, setTaceCreatinine] = useState<number>(1.0);
  const [taceContrastGiven, setTaceContrastGiven] = useState<number>(55);

  // --------------------------------------------------------------------------
  // INLINE CALCULATOR STATES (PAD / SFA PROTOCOL)
  // --------------------------------------------------------------------------
  const [padRutherfordCat, setPadRutherfordCat] = useState<number>(3); // Severe claudication
  const [padAnkleSystolic, setPadAnkleSystolic] = useState<number>(75);
  const [padBrachialSystolic, setPadBrachialSystolic] = useState<number>(130);

  // --------------------------------------------------------------------------
  // DERIVED PROTOCOLS
  // --------------------------------------------------------------------------
  const filteredProtocols = DRUG_PROTOCOLS.filter((p) => {
    if (activeSystem !== "ALL" && p.system !== activeSystem) {
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
      (p.yojanaRequirement &&
        (p.yojanaRequirement.packageCode.toLowerCase().includes(q) ||
          p.yojanaRequirement.packageName.toLowerCase().includes(q) ||
          p.yojanaRequirement.icd10Code.toLowerCase().includes(q) ||
          p.yojanaRequirement.primaryScheme.toLowerCase().includes(q) ||
          (p.yojanaRequirement.secondaryPackageCode &&
            p.yojanaRequirement.secondaryPackageCode.toLowerCase().includes(q))))
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

  // --------------------------------------------------------------------------
  // CALCULATIONS: BCS / TIPS - ALL 9 CALCULATORS
  // --------------------------------------------------------------------------
  const rotterdamResult = useMemo(() => {
    return calculateRotterdamBcs(bcsEnceph, bcsAscites, bcsBilirubin, bcsInr);
  }, [bcsEnceph, bcsAscites, bcsBilirubin, bcsInr]);

  const clichyResult = useMemo(() => {
    return calculateClichyScore(bcsAge, bcsBilirubin, bcsCreatinine, bcsAscitesGrade);
  }, [bcsAge, bcsBilirubin, bcsCreatinine, bcsAscitesGrade]);

  const meldResult = useMemo(() => {
    return calculateMeld3(bcsBilirubin, bcsCreatinine, bcsInr, bcsSodium, bcsAlbumin, bcsIsFemale);
  }, [bcsBilirubin, bcsCreatinine, bcsInr, bcsSodium, bcsAlbumin, bcsIsFemale]);

  const bcsChildPughResult = useMemo(() => {
    const ascPts: 1 | 2 | 3 = bcsAscitesGrade === "refractory" ? 3 : bcsAscitesGrade === "controlled" ? 2 : 1;
    return calculateChildPugh(bcsBilirubin, bcsAlbumin, bcsInr, ascPts, bcsEncephGrade);
  }, [bcsBilirubin, bcsAlbumin, bcsInr, bcsAscitesGrade, bcsEncephGrade]);

  const albiResult = useMemo(() => {
    return calculateAlbi(bcsBilirubin, bcsAlbumin);
  }, [bcsBilirubin, bcsAlbumin]);

  const caudateRightLobeResult = useMemo(() => {
    return calculateCaudateRightLobeRatio(bcsCaudateWidthMm, bcsRightLobeWidthMm);
  }, [bcsCaudateWidthMm, bcsRightLobeWidthMm]);

  const hvpgResult = useMemo(() => {
    return calculateHvpg(bcsWhvpMmHg, bcsFhvpMmHg);
  }, [bcsWhvpMmHg, bcsFhvpMmHg]);

  const bcsCompositeResult = useMemo(() => {
    return calculateBuddChiariCompositeRisk(
      bcsEnceph,
      bcsAscites,
      bcsBilirubin,
      bcsInr,
      caudateRightLobeResult.cRlRatio,
      bcsCavalWeb
    );
  }, [bcsEnceph, bcsAscites, bcsBilirubin, bcsInr, caudateRightLobeResult.cRlRatio, bcsCavalWeb]);

  const bcsMacdResult = useMemo(() => {
    return calculateMacd(bcsWeightKg, bcsCreatinine, bcsContrastGiven);
  }, [bcsWeightKg, bcsCreatinine, bcsContrastGiven]);

  // Protocol navigation helpers
  const currentIndex = filteredProtocols.findIndex((p) => p.id === activeProtocol.id);
  const goToPrevProtocol = () => {
    if (currentIndex > 0) {
      setSelectedProtocolId(filteredProtocols[currentIndex - 1].id);
    }
  };
  const goToNextProtocol = () => {
    if (currentIndex < filteredProtocols.length - 1) {
      setSelectedProtocolId(filteredProtocols[currentIndex + 1].id);
    }
  };

  // --------------------------------------------------------------------------
  // CALCULATIONS: TACE ONCOLOGY
  // --------------------------------------------------------------------------
  const childPughResult = useMemo(() => {
    return calculateChildPugh(taceBili, taceAlb, taceInr, taceAscitesPts, taceEncephPts);
  }, [taceBili, taceAlb, taceInr, taceAscitesPts, taceEncephPts]);

  const macdResult = useMemo(() => {
    return calculateMacd(taceWeightKg, taceCreatinine, taceContrastGiven);
  }, [taceWeightKg, taceCreatinine, taceContrastGiven]);

  // --------------------------------------------------------------------------
  // CALCULATIONS: PAD / SFA
  // --------------------------------------------------------------------------
  const padAbi = useMemo(() => {
    if (padBrachialSystolic <= 0) return 0;
    return parseFloat((padAnkleSystolic / padBrachialSystolic).toFixed(2));
  }, [padAnkleSystolic, padBrachialSystolic]);

  const padAbiInterpretation = useMemo(() => {
    if (padAbi > 1.4) {
      return {
        level: "warning",
        category: "Non-Compressible / Calcified Arteries",
        desc: "Severe Mönckeberg medial sclerosis / calcification (common in diabetics/ESRD). Recommend Toe-Brachial Index (TBI) and Doppler waveforms.",
      };
    } else if (padAbi >= 0.91) {
      return {
        level: "safe",
        category: "Normal Lower Extremity Perfusion (0.91 - 1.40)",
        desc: "Normal macrovascular limb perfusion. Symptoms may be neurogenic or musculoskeletal if pain persists.",
      };
    } else if (padAbi >= 0.7) {
      return {
        level: "safe",
        category: "Mild Arterial Disease (0.70 - 0.90)",
        desc: "Mild peripheral arterial disease. Initial trial of supervised exercise therapy, high-intensity statin, and antiplatelet therapy.",
      };
    } else if (padAbi >= 0.4) {
      return {
        level: "warning",
        category: "Moderate Arterial Disease (0.40 - 0.69)",
        desc: "Typical claudication range. Candidate for diagnostic catheter angiography and endovascular revascularization (POBA/DCB/stent).",
      };
    } else {
      return {
        level: "critical",
        category: "Severe Ischemia / Critical Limb Threatening Ischemia (< 0.40)",
        desc: "High imminent risk of limb loss. Urgent revascularization required. Avoid delay; inspect for non-healing ulcers or gangrene.",
      };
    }
  }, [padAbi]);

  const padRutherfordStage = useMemo(() => {
    const stages: Record<
      number,
      { stage: string; classGrade: string; cli: boolean; recommendation: string }
    > = {
      0: {
        stage: "Stage 0: Asymptomatic",
        classGrade: "Class 0",
        cli: false,
        recommendation: "Normal treadmill test or baseline imaging surveillance. No intervention indicated.",
      },
      1: {
        stage: "Stage 1: Mild Claudication",
        classGrade: "Class I",
        cli: false,
        recommendation: "Completes treadmill exercise. Medical therapy and cardiovascular risk factor modification.",
      },
      2: {
        stage: "Stage 2: Moderate Claudication",
        classGrade: "Class I",
        cli: false,
        recommendation: "Claudication limits daily activities. Trial of Cilostazol 100mg BD + supervised exercise.",
      },
      3: {
        stage: "Stage 3: Severe Claudication",
        classGrade: "Class I",
        cli: false,
        recommendation: "Severe lifestyle-limiting claudication (< 100 meters). Indication for SFA / Iliac DCB or stenting.",
      },
      4: {
        stage: "Stage 4: Ischemic Rest Pain",
        classGrade: "Class II",
        cli: true,
        recommendation: "Chronic Limb-Threatening Ischemia (CLTI). Rest pain aggravated by recumbency. Urgent angioplasty / revascularization required.",
      },
      5: {
        stage: "Stage 5: Minor Tissue Loss (Focal Ulcer)",
        classGrade: "Class III",
        cli: true,
        recommendation: "CLTI with non-healing ischemic ulcer. Target straight-line runoff to the angiosome to promote granulation.",
      },
      6: {
        stage: "Stage 6: Major Tissue Loss (Gangrene)",
        classGrade: "Class III",
        cli: true,
        recommendation: "Extensive gangrene extending beyond transmetatarsal level. Emergency multi-level limb salvage intervention + debridement.",
      },
    };
    return stages[padRutherfordCat] || stages[3];
  }, [padRutherfordCat]);

  // --------------------------------------------------------------------------
  // PROCEDURE CATALOG INFORMATION GROUPING FOR ACTIVE PROTOCOL
  // --------------------------------------------------------------------------
  const matchedMasterProcedures = useMemo((): MasterProcedure[] => {
    const pId = activeProtocol.id.toLowerCase();

    if (pId === "bcs") {
      const procs = ALL_MASTER_PROCEDURES.filter(
        (p) =>
          p.id === "cat03-bcs-hv-angioplasty" ||
          p.id === "cat03-bcs-ivc-cavoplasty" ||
          p.id === "cat03-tips-shunt" ||
          p.id === "cat03-bcs-veno-venous-collateral-coiling-glue"
      );
      if (procs.length > 0) return procs;
    }

    if (pId === "tace") {
      const procs = ALL_MASTER_PROCEDURES.filter(
        (p) =>
          p.id === "cat08-ctace-lipiodol" ||
          p.id === "cat08-deb-tace" ||
          p.id === "ctace-lipiodol-doxorubicin" ||
          p.id === "deb-tace-dcbeads-lifepearl"
      );
      if (procs.length > 0) return procs;
    }

    if (pId === "pad_angioplasty") {
      const procs = ALL_MASTER_PROCEDURES.filter(
        (p) =>
          p.id === "sfa-cto-recanalization-dcb" ||
          p.id === "sfa-directional-rotational-atherectomy-dcb" ||
          p.id === "cerab-technique" ||
          p.id === "iliac-cto-subintimal-stenting"
      );
      if (procs.length > 0) return procs;
    }

    if (pId === "bae") {
      const procs = ALL_MASTER_PROCEDURES.filter(
        (p) => p.id === "cat07-bae" || p.id.includes("bronchial")
      );
      if (procs.length > 0) return procs.slice(0, 3);
    }

    if (pId === "ptbd") {
      const procs = ALL_MASTER_PROCEDURES.filter(
        (p) =>
          p.id === "cat03-ptbd-unilateral" ||
          p.id === "cat03-biliary-stent-sems" ||
          p.id.includes("ptbd")
      );
      if (procs.length > 0) return procs.slice(0, 3);
    }

    if (pId === "pcn") {
      const procs = ALL_MASTER_PROCEDURES.filter(
        (p) => p.id === "cat19-pcn" || p.id.includes("nephrostomy")
      );
      if (procs.length > 0) return procs.slice(0, 3);
    }

    // Default fallback by keyword
    const fallback = ALL_MASTER_PROCEDURES.filter(
      (p) =>
        p.id.toLowerCase().includes(pId) ||
        p.title.toLowerCase().includes(activeProtocol.shortName.toLowerCase())
    );
    return fallback.slice(0, 3);
  }, [activeProtocol]);

  // --------------------------------------------------------------------------
  // PRESCRIPTION COPYING
  // --------------------------------------------------------------------------
  const handleCopyPrescription = async (protocol: DrugProtocol) => {
    const lines = [
      `SMS MEDICAL COLLEGE & ATTACHED HOSPITALS, JAIPUR`,
      `DEPARTMENT OF RADIODIAGNOSIS & INTERVENTIONAL RADIOLOGY`,
      `DISCHARGE PRESCRIPTION NOTE - ${protocol.name.toUpperCase()}`,
      `======================================================================`,
      `ORGAN SYSTEM: ${(protocol.system || protocol.category).toUpperCase()}`,
      `SCHEDULED DISCHARGE MEDICATIONS:`,
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

    await copyToClipboard(lines.join("\n"));
    setCopiedId(protocol.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-5 pb-16 font-sans select-none">
      {/* Top Banner & Search - Apple HIG / Google Clean Aesthetic */}
      <div className="flex items-center justify-between flex-wrap gap-4 bg-white border border-[#E5E5EA] rounded-2xl p-4 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#007AFF]/10 text-[#007AFF] flex items-center justify-center font-bold">
            <Pill className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-base font-semibold text-[#1C1C1E] tracking-tight flex items-center gap-2">
              <span>Clinical Protocols &amp; Fused Decision Calculators</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#E5E5EA] text-[#3A3A3C]">
                48 Protocols
              </span>
            </h1>
            <p className="text-xs text-[#8E8E93] mt-0.5">
              Live integrated risk stratification, Rajasthan Yojana package tariffs, target vessels, and authentic hardware bundles.
            </p>
          </div>
        </div>

        <div className="w-full sm:w-80 relative">
          <Search className="w-4 h-4 absolute left-3.5 top-2.5 text-[#8E8E93]" />
          <input
            type="text"
            placeholder="Search protocol, drug, package..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3.5 py-2 text-xs bg-[#F2F2F7] hover:bg-[#E5E5EA]/70 focus:bg-white border border-transparent focus:border-[#007AFF] rounded-xl text-[#1C1C1E] placeholder-[#8E8E93] focus:outline-none transition shadow-xs"
          />
        </div>
      </div>

      {/* Sleek Protocol Selector Bar - Dropdown Menu replacing bulky 4-col list */}
      <div className="bg-white border border-[#E5E5EA] rounded-2xl p-3.5 shadow-xs flex items-center justify-between flex-wrap gap-3">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-1 min-w-0 w-full sm:w-auto">
          {/* Organ System Filter Dropdown */}
          <div className="relative shrink-0 w-full sm:w-auto">
            <label className="text-[10px] font-bold uppercase text-[#8E8E93] block mb-0.5">
              Organ System
            </label>
            <div className="relative">
              <select
                value={activeSystem}
                onChange={(e) => {
                  const newSys = e.target.value;
                  setActiveSystem(newSys);
                  if (newSys !== "ALL" && activeProtocol.system !== newSys) {
                    const firstInSys = DRUG_PROTOCOLS.find((p) => p.system === newSys);
                    if (firstInSys) setSelectedProtocolId(firstInSys.id);
                  }
                }}
                className="appearance-none w-full sm:w-auto pl-3 pr-8 py-2 text-xs font-semibold bg-[#F2F2F7] hover:bg-[#E5E5EA] border border-[#E5E5EA] rounded-xl text-[#1C1C1E] focus:bg-white focus:border-[#007AFF] outline-none cursor-pointer transition"
              >
                {PROTOCOL_SYSTEMS.map((sys) => (
                  <option key={sys} value={sys}>
                    {sys === "ALL" ? "All Systems (48)" : sys}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-[#8E8E93] absolute right-2.5 top-2.5 pointer-events-none" />
            </div>
          </div>

          {/* Main Protocol Dropdown Menu */}
          <div className="flex-1 min-w-0 w-full sm:w-auto">
            <label className="text-[10px] font-bold uppercase text-[#8E8E93] block mb-0.5 flex items-center justify-between">
              <span>Select Clinical Protocol ({filteredProtocols.length} Available)</span>
              <span className="font-mono text-[#007AFF] font-normal text-[10px]">
                {activeProtocol.yojanaRequirement?.packageCode || activeProtocol.category}
              </span>
            </label>
            <div className="relative flex items-center gap-1.5">
              <div className="relative flex-1">
                <select
                  value={activeProtocol.id}
                  onChange={(e) => setSelectedProtocolId(e.target.value)}
                  className="appearance-none w-full pl-3.5 pr-9 py-2 text-xs font-bold bg-[#F2F2F7] hover:bg-[#E5E5EA] border border-[#E5E5EA] rounded-xl text-[#1C1C1E] focus:bg-white focus:border-[#007AFF] outline-none cursor-pointer transition shadow-xs truncate"
                >
                  {activeSystem === "ALL" ? (
                    // Grouped by Organ System
                    PROTOCOL_SYSTEMS.filter((s) => s !== "ALL").map((sys) => {
                      const procsInSys = filteredProtocols.filter((p) => p.system === sys);
                      if (procsInSys.length === 0) return null;
                      return (
                        <optgroup key={sys} label={`── ${sys} ──`}>
                          {procsInSys.map((prot) => (
                            <option key={prot.id} value={prot.id}>
                              {prot.name} ({prot.yojanaRequirement?.packageCode || prot.shortName} • ₹{prot.yojanaRequirement?.tariffAmountInr.toLocaleString("en-IN") || "Tariff"})
                            </option>
                          ))}
                        </optgroup>
                      );
                    })
                  ) : (
                    filteredProtocols.map((prot) => (
                      <option key={prot.id} value={prot.id}>
                        {prot.name} ({prot.yojanaRequirement?.packageCode || prot.shortName} • ₹{prot.yojanaRequirement?.tariffAmountInr.toLocaleString("en-IN") || "Tariff"})
                      </option>
                    ))
                  )}
                </select>
                <ChevronDown className="w-4 h-4 text-[#007AFF] absolute right-3 top-2.5 pointer-events-none" />
              </div>

              {/* Prev / Next Protocol Buttons */}
              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={goToPrevProtocol}
                  disabled={currentIndex <= 0}
                  title="Previous Protocol"
                  className="w-8 h-8 rounded-xl border border-[#E5E5EA] bg-[#F2F2F7] hover:bg-[#E5E5EA] disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center text-[#1C1C1E] transition cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={goToNextProtocol}
                  disabled={currentIndex >= filteredProtocols.length - 1}
                  title="Next Protocol"
                  className="w-8 h-8 rounded-xl border border-[#E5E5EA] bg-[#F2F2F7] hover:bg-[#E5E5EA] disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center text-[#1C1C1E] transition cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Search & Summary Pill */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="flex-1 sm:w-56 relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-[#8E8E93]" />
            <input
              type="text"
              placeholder="Quick filter..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#F2F2F7] hover:bg-[#E5E5EA]/70 focus:bg-white border border-[#E5E5EA] focus:border-[#007AFF] rounded-xl text-[#1C1C1E] placeholder-[#8E8E93] focus:outline-none transition shadow-xs"
            />
          </div>
          {activeProtocol.yojanaRequirement && (
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold shrink-0">
              <span>₹{activeProtocol.yojanaRequirement.tariffAmountInr.toLocaleString("en-IN")}</span>
              <span className="text-[10px] text-emerald-600 font-normal">({activeProtocol.yojanaRequirement.packageCode})</span>
            </div>
          )}
        </div>
      </div>

      {/* Full-Width Active Protocol Workspace */}
      <div className="w-full bg-white border border-[#E5E5EA] rounded-2xl p-5 sm:p-6 shadow-xs space-y-6">
        {/* Header & Quick Action Buttons */}
        <div className="flex items-start justify-between flex-wrap gap-3 pb-4 border-b border-[#E5E5EA]">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-base font-semibold text-[#1C1C1E] tracking-tight">
                {activeProtocol.name}
              </h2>
              {activeProtocol.system && (
                <span className="px-2 py-0.5 rounded-lg text-[10px] font-semibold bg-[#007AFF]/10 text-[#007AFF] border border-[#007AFF]/20">
                  {activeProtocol.system}
                </span>
              )}
              <span className="px-2 py-0.5 rounded-lg text-[10px] font-medium bg-[#F2F2F7] text-[#8E8E93] border border-[#E5E5EA]">
                {activeProtocol.category}
              </span>
            </div>
            <p className="text-xs text-[#636366] leading-relaxed">
              <strong className="text-[#1C1C1E]">Clinical Indication:</strong> {activeProtocol.indication}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setWorkupModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#E5E5EA] bg-white hover:bg-[#F2F2F7] text-[#007AFF] font-semibold text-xs transition shadow-xs cursor-pointer"
              title="Open Pre-Booking Clinical Workup & Procedure Dossier"
            >
              <FileText className="w-3.5 h-3.5 text-[#007AFF]" />
              <span className="hidden sm:inline">Dossier</span>
            </button>
            <button
              onClick={() => handleCopyPrescription(activeProtocol)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#007AFF] hover:bg-[#0062CC] active:scale-[0.98] text-white font-semibold text-xs transition shadow-xs cursor-pointer"
            >
              {copiedId === activeProtocol.id ? (
                <Check className="w-3.5 h-3.5" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
              <span>{copiedId === activeProtocol.id ? "Copied!" : "Copy Rx"}</span>
            </button>
            <button
              onClick={() => router.push("/dashboard/discharge")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#E5E5EA] bg-white hover:bg-[#F2F2F7] text-[#3A3A3C] text-xs font-semibold transition shadow-xs cursor-pointer"
              title="Open in Discharge Summary Form"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-[#8E8E93]" />
              <span className="hidden sm:inline">Discharge</span>
            </button>
          </div>
        </div>

        {/* ================================================================= */}
        {/* FUSED INLINE CLINICAL CALCULATORS SECTION (CORE ARCHITECTURE) */}
        {/* ================================================================= */}
        <div className="rounded-2xl border border-[#E5E5EA] bg-[#F9F9FB] p-4.5 space-y-4 shadow-xs">
          <div className="flex items-center justify-between flex-wrap gap-2 pb-2.5 border-b border-[#E5E5EA]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#007AFF]/10 text-[#007AFF] flex items-center justify-center">
                <Calculator className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-[#1C1C1E] tracking-tight uppercase">
                  Fused Decision Calculator &amp; Safety Guardrails
                </h3>
                <p className="text-[11px] text-[#8E8E93]">
                  Embedded mathematical risk stratification running live directly inside this protocol.
                </p>
              </div>
            </div>

            {/* Calculator View Dropdown Menu */}
            {activeProtocol.id === "bcs" ? (
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold text-[#8E8E93] hidden sm:inline">Calculator:</span>
                <div className="relative">
                  <select
                    value={bcsActiveCalcTab}
                    onChange={(e) => setBcsActiveCalcTab(e.target.value)}
                    className="appearance-none pl-3 pr-8 py-1.5 text-xs font-bold bg-white border border-[#007AFF]/40 rounded-xl text-[#007AFF] focus:border-[#007AFF] outline-none cursor-pointer shadow-xs"
                  >
                    <option value="ALL">⚡ View All 9 Calculators (Complete Panel)</option>
                    <option value="ROTTERDAM">1. Rotterdam BCS-PI Score (Prognosis &amp; Survival)</option>
                    <option value="CLICHY">2. Clichy Prognostic Score (BCS-TIPS Shunt Indication)</option>
                    <option value="MELD">3. MELD 3.0 Score (TIPS Candidacy &amp; 90-Day Mortality)</option>
                    <option value="CTP">4. Child-Turcotte-Pugh (CTP) Score &amp; Functional Class</option>
                    <option value="ALBI">5. ALBI Grade (Objective Albumin-Bilirubin Reserve)</option>
                    <option value="CRL">6. Harbin &amp; Awaya Caudate/Right Lobe Ratio (C/RL)</option>
                    <option value="HVPG">7. Hepatic Venous Pressure Gradient (HVPG &amp; Target)</option>
                    <option value="COMPOSITE">8. BCS Composite Shunt &amp; Collateral Embolization Risk</option>
                    <option value="MACD">9. Cigarroa MACD Contrast Ceiling (CI-AKI Guardrail)</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-[#007AFF] absolute right-2.5 top-2.5 pointer-events-none" />
                </div>
              </div>
            ) : associatedCalculators.length > 1 ? (
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold text-[#8E8E93] hidden sm:inline">Calculator:</span>
                <div className="relative">
                  <select
                    value={currentCalcId || ""}
                    onChange={(e) => setSelectedCalcId(e.target.value)}
                    className="appearance-none pl-3 pr-8 py-1.5 text-xs font-bold bg-white border border-[#007AFF]/40 rounded-xl text-[#007AFF] focus:border-[#007AFF] outline-none cursor-pointer shadow-xs"
                  >
                    {associatedCalculators.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-[#007AFF] absolute right-2.5 top-2.5 pointer-events-none" />
                </div>
              </div>
            ) : (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                Live Inline Engine
              </span>
            )}
          </div>

          {/* 1. BCS PROTOCOL FUSION: ALL 9 CLINICAL CALCULATORS SUITE */}
          {activeProtocol.id === "bcs" && (
            <div className="space-y-4">
              {/* Organized Inputs: 3 Neat Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {/* Inputs Group 1: Laboratory Serum Biomarkers */}
                <div className="p-3 bg-white rounded-xl border border-[#E5E5EA] space-y-2">
                  <div className="text-[11px] font-bold text-[#1C1C1E] flex items-center gap-1.5 border-b border-[#F2F2F7] pb-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#007AFF]" />
                    <span>Serum Labs &amp; Clinical Status</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[9px] font-bold uppercase text-[#8E8E93] block">Bilirubin (mg/dL)</label>
                      <input
                        type="number"
                        step="0.1"
                        min="0.1"
                        value={bcsBilirubin}
                        onChange={(e) => setBcsBilirubin(parseFloat(e.target.value) || 0)}
                        className="w-full px-2 py-1 rounded border border-[#E5E5EA] bg-[#FAFAFA] text-xs font-mono font-bold focus:bg-white focus:border-[#007AFF] outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] font-bold uppercase text-[#8E8E93] block">INR (Coag)</label>
                      <input
                        type="number"
                        step="0.1"
                        min="0.8"
                        value={bcsInr}
                        onChange={(e) => setBcsInr(parseFloat(e.target.value) || 0)}
                        className="w-full px-2 py-1 rounded border border-[#E5E5EA] bg-[#FAFAFA] text-xs font-mono font-bold focus:bg-white focus:border-[#007AFF] outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] font-bold uppercase text-[#8E8E93] block">Creatinine (mg/dL)</label>
                      <input
                        type="number"
                        step="0.1"
                        min="0.4"
                        value={bcsCreatinine}
                        onChange={(e) => setBcsCreatinine(parseFloat(e.target.value) || 0)}
                        className="w-full px-2 py-1 rounded border border-[#E5E5EA] bg-[#FAFAFA] text-xs font-mono font-bold focus:bg-white focus:border-[#007AFF] outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] font-bold uppercase text-[#8E8E93] block">Sodium (mEq/L)</label>
                      <input
                        type="number"
                        step="1"
                        min="115"
                        max="155"
                        value={bcsSodium}
                        onChange={(e) => setBcsSodium(parseInt(e.target.value) || 135)}
                        className="w-full px-2 py-1 rounded border border-[#E5E5EA] bg-[#FAFAFA] text-xs font-mono font-bold focus:bg-white focus:border-[#007AFF] outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] font-bold uppercase text-[#8E8E93] block">Albumin (g/dL)</label>
                      <input
                        type="number"
                        step="0.1"
                        min="1.0"
                        value={bcsAlbumin}
                        onChange={(e) => setBcsAlbumin(parseFloat(e.target.value) || 3.0)}
                        className="w-full px-2 py-1 rounded border border-[#E5E5EA] bg-[#FAFAFA] text-xs font-mono font-bold focus:bg-white focus:border-[#007AFF] outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] font-bold uppercase text-[#8E8E93] block">Age (Years)</label>
                      <input
                        type="number"
                        step="1"
                        min="12"
                        max="90"
                        value={bcsAge}
                        onChange={(e) => setBcsAge(parseInt(e.target.value) || 35)}
                        className="w-full px-2 py-1 rounded border border-[#E5E5EA] bg-[#FAFAFA] text-xs font-mono font-bold focus:bg-white focus:border-[#007AFF] outline-none"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#F2F2F7]">
                    <div>
                      <label className="text-[9px] font-bold uppercase text-[#8E8E93] block">Ascites</label>
                      <select
                        value={bcsAscitesGrade}
                        onChange={(e) => {
                          const g = e.target.value as "none" | "controlled" | "refractory";
                          setBcsAscitesGrade(g);
                          setBcsAscites(g !== "none");
                        }}
                        className="w-full px-1.5 py-1 rounded border border-[#E5E5EA] bg-[#FAFAFA] text-[11px] font-semibold focus:bg-white focus:border-[#007AFF] outline-none"
                      >
                        <option value="none">None (0 pt)</option>
                        <option value="controlled">Controlled (Diuretics)</option>
                        <option value="refractory">Refractory (Tense)</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[9px] font-bold uppercase text-[#8E8E93] block">Encephalopathy</label>
                      <select
                        value={bcsEncephGrade}
                        onChange={(e) => {
                          const pts = parseInt(e.target.value) as 1 | 2 | 3;
                          setBcsEncephGrade(pts);
                          setBcsEnceph(pts > 1);
                        }}
                        className="w-full px-1.5 py-1 rounded border border-[#E5E5EA] bg-[#FAFAFA] text-[11px] font-semibold focus:bg-white focus:border-[#007AFF] outline-none"
                      >
                        <option value={1}>Grade 0 (None)</option>
                        <option value={2}>Grade 1 - 2</option>
                        <option value={3}>Grade 3 - 4</option>
                      </select>
                    </div>
                  </div>
                  <div className="pt-1">
                    <label className="flex items-center gap-1.5 text-[11px] font-medium text-[#1C1C1E] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={bcsIsFemale}
                        onChange={(e) => setBcsIsFemale(e.target.checked)}
                        className="rounded text-[#007AFF] cursor-pointer"
                      />
                      <span>Female Sex (MELD 3.0 +1.33 offset)</span>
                    </label>
                  </div>
                </div>

                {/* Inputs Group 2: Cross-Sectional Morphology (CT / Doppler) */}
                <div className="p-3 bg-white rounded-xl border border-[#E5E5EA] space-y-2">
                  <div className="text-[11px] font-bold text-[#1C1C1E] flex items-center gap-1.5 border-b border-[#F2F2F7] pb-1.5">
                    <Gauge className="w-3.5 h-3.5 text-purple-600" />
                    <span>Cross-Sectional Morphology (CT/MR)</span>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <label className="text-[9px] font-bold uppercase text-[#8E8E93] block">
                        Caudate Lobe Transverse Width (mm)
                      </label>
                      <input
                        type="number"
                        step="1"
                        min="10"
                        max="120"
                        value={bcsCaudateWidthMm}
                        onChange={(e) => setBcsCaudateWidthMm(parseFloat(e.target.value) || 0)}
                        className="w-full px-2 py-1 rounded border border-[#E5E5EA] bg-[#FAFAFA] text-xs font-mono font-bold focus:bg-white focus:border-[#007AFF] outline-none"
                      />
                      <span className="text-[10px] text-[#8E8E93]">Normal: &lt; 35 mm</span>
                    </div>
                    <div>
                      <label className="text-[9px] font-bold uppercase text-[#8E8E93] block">
                        Right Lobe Transverse Width (mm)
                      </label>
                      <input
                        type="number"
                        step="1"
                        min="20"
                        max="150"
                        value={bcsRightLobeWidthMm}
                        onChange={(e) => setBcsRightLobeWidthMm(parseFloat(e.target.value) || 0)}
                        className="w-full px-2 py-1 rounded border border-[#E5E5EA] bg-[#FAFAFA] text-xs font-mono font-bold focus:bg-white focus:border-[#007AFF] outline-none"
                      />
                      <span className="text-[10px] text-[#8E8E93]">At right portal vein bifurcation level</span>
                    </div>
                    <div className="pt-2 border-t border-[#F2F2F7]">
                      <label className="flex items-center gap-1.5 text-[11px] font-medium text-[#1C1C1E] cursor-pointer">
                        <input
                          type="checkbox"
                          checked={bcsCavalWeb}
                          onChange={(e) => setBcsCavalWeb(e.target.checked)}
                          className="rounded text-purple-600 cursor-pointer"
                        />
                        <span>Severe Caval Web / Membranous Stenosis</span>
                      </label>
                      <span className="text-[10px] text-[#8E8E93] block pl-5">
                        Indicates IVC membranotomy &amp; Sinus-XL stenting
                      </span>
                    </div>
                  </div>
                </div>

                {/* Inputs Group 3: Angiosuite Hemodynamics & Contrast Safety */}
                <div className="p-3 bg-white rounded-xl border border-[#E5E5EA] space-y-2">
                  <div className="text-[11px] font-bold text-[#1C1C1E] flex items-center gap-1.5 border-b border-[#F2F2F7] pb-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-600" />
                    <span>Angiosuite Hemodynamics &amp; Contrast</span>
                  </div>
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[9px] font-bold uppercase text-[#8E8E93] block">WHVP (mmHg)</label>
                        <input
                          type="number"
                          step="1"
                          min="0"
                          max="60"
                          value={bcsWhvpMmHg}
                          onChange={(e) => setBcsWhvpMmHg(parseFloat(e.target.value) || 0)}
                          className="w-full px-2 py-1 rounded border border-[#E5E5EA] bg-[#FAFAFA] text-xs font-mono font-bold focus:bg-white focus:border-[#007AFF] outline-none"
                        />
                        <span className="text-[9px] text-[#8E8E93]">Wedged pressure</span>
                      </div>
                      <div>
                        <label className="text-[9px] font-bold uppercase text-[#8E8E93] block">FHVP / IVC (mmHg)</label>
                        <input
                          type="number"
                          step="1"
                          min="0"
                          max="40"
                          value={bcsFhvpMmHg}
                          onChange={(e) => setBcsFhvpMmHg(parseFloat(e.target.value) || 0)}
                          className="w-full px-2 py-1 rounded border border-[#E5E5EA] bg-[#FAFAFA] text-xs font-mono font-bold focus:bg-white focus:border-[#007AFF] outline-none"
                        />
                        <span className="text-[9px] text-[#8E8E93]">Free IVC pressure</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#F2F2F7]">
                      <div>
                        <label className="text-[9px] font-bold uppercase text-[#8E8E93] block">Weight (kg)</label>
                        <input
                          type="number"
                          step="1"
                          min="30"
                          max="160"
                          value={bcsWeightKg}
                          onChange={(e) => setBcsWeightKg(parseFloat(e.target.value) || 60)}
                          className="w-full px-2 py-1 rounded border border-[#E5E5EA] bg-[#FAFAFA] text-xs font-mono font-bold focus:bg-white focus:border-[#007AFF] outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[9px] font-bold uppercase text-[#8E8E93] block">Contrast Given (mL)</label>
                        <input
                          type="number"
                          step="5"
                          min="0"
                          max="400"
                          value={bcsContrastGiven}
                          onChange={(e) => setBcsContrastGiven(parseFloat(e.target.value) || 0)}
                          className="w-full px-2 py-1 rounded border border-[#E5E5EA] bg-[#FAFAFA] text-xs font-mono font-bold focus:bg-white focus:border-[#007AFF] outline-none"
                        />
                      </div>
                    </div>
                    <div className="text-[10px] text-[#8E8E93] pt-0.5">
                      Cigarroa MACD Ceiling: <strong className="font-mono text-[#007AFF]">{bcsMacdResult.macdMl} mL</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Fused Results Matrix (All 9 Calculators) */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3.5">
                {/* 1. Rotterdam Score */}
                {(bcsActiveCalcTab === "ALL" || bcsActiveCalcTab === "ROTTERDAM") && (
                  <div className="p-3.5 rounded-xl bg-white border border-[#E5E5EA] space-y-2 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#1C1C1E] flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-[#007AFF]" />
                        1. Rotterdam BCS-PI Score
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          rotterdamResult.bcsPiScore <= 1.1
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : rotterdamResult.bcsPiScore <= 1.5
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-red-50 text-red-700 border border-red-200"
                        }`}
                      >
                        {rotterdamResult.prognosticClass}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black font-mono text-[#1C1C1E]">
                        {rotterdamResult.bcsPiScore}
                      </span>
                      <span className="text-xs text-[#8E8E93]">
                        5-Yr Survival: <strong>{rotterdamResult.survival5YearEstimate}</strong>
                      </span>
                    </div>
                    <p className="text-[11px] text-[#636366] leading-relaxed border-t border-[#F2F2F7] pt-2">
                      {rotterdamResult.recommendation}
                    </p>
                  </div>
                )}

                {/* 2. Clichy Prognostic Score */}
                {(bcsActiveCalcTab === "ALL" || bcsActiveCalcTab === "CLICHY") && (
                  <div className="p-3.5 rounded-xl bg-white border border-[#E5E5EA] space-y-2 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#1C1C1E] flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-rose-600" />
                        2. Clichy BCS Prognostic Score
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          clichyResult.clichyScore < 5.4
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-red-50 text-red-700 border border-red-200"
                        }`}
                      >
                        {clichyResult.clichyScore < 5.4 ? "Medical/Stent Candidate" : "TIPS Indicated (≥ 5.4)"}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black font-mono text-rose-700">
                        {clichyResult.clichyScore}
                      </span>
                      <span className="text-xs text-[#8E8E93]">
                        Threshold: <strong>5.4</strong>
                      </span>
                    </div>
                    <p className="text-[11px] text-[#636366] leading-relaxed border-t border-[#F2F2F7] pt-2">
                      {clichyResult.recommendation}
                    </p>
                  </div>
                )}

                {/* 3. MELD 3.0 Score */}
                {(bcsActiveCalcTab === "ALL" || bcsActiveCalcTab === "MELD") && (
                  <div className="p-3.5 rounded-xl bg-white border border-[#E5E5EA] space-y-2 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#1C1C1E] flex items-center gap-1.5">
                        <Gauge className="w-3.5 h-3.5 text-indigo-600" />
                        3. MELD 3.0 Score
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          meldResult.score < 14
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : meldResult.score <= 18
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-red-50 text-red-700 border border-red-200"
                        }`}
                      >
                        {meldResult.score < 14
                          ? "Favorable TIPS Candidate"
                          : meldResult.score <= 18
                          ? "Intermediate Risk"
                          : "High Mortality Risk (>50%)"}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black font-mono text-indigo-700">
                        {meldResult.score}
                      </span>
                      <span className="text-xs text-[#8E8E93]">
                        90-Day Mortality: <strong>{meldResult.mortality90Day}</strong>
                      </span>
                    </div>
                    <p className="text-[11px] text-[#636366] leading-relaxed border-t border-[#F2F2F7] pt-2">
                      {meldResult.tipsRecommendation}
                    </p>
                  </div>
                )}

                {/* 4. Child-Turcotte-Pugh (CTP) Score */}
                {(bcsActiveCalcTab === "ALL" || bcsActiveCalcTab === "CTP") && (
                  <div className="p-3.5 rounded-xl bg-white border border-[#E5E5EA] space-y-2 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#1C1C1E] flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-amber-600" />
                        4. Child-Turcotte-Pugh (CTP)
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          bcsChildPughResult.classGrade === "A"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : bcsChildPughResult.classGrade === "B"
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-red-50 text-red-700 border border-red-200"
                        }`}
                      >
                        Class {bcsChildPughResult.classGrade} ({bcsChildPughResult.score} Pts)
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black font-mono text-amber-700">
                        Class {bcsChildPughResult.classGrade}
                      </span>
                      <span className="text-xs text-[#8E8E93]">
                        1-Yr Surv: <strong>{bcsChildPughResult.oneYearSurvival}</strong> • 2-Yr: <strong>{bcsChildPughResult.twoYearSurvival}</strong>
                      </span>
                    </div>
                    <p className="text-[11px] text-[#636366] leading-relaxed border-t border-[#F2F2F7] pt-2">
                      {bcsChildPughResult.recommendation}
                    </p>
                  </div>
                )}

                {/* 5. ALBI Grade */}
                {(bcsActiveCalcTab === "ALL" || bcsActiveCalcTab === "ALBI") && (
                  <div className="p-3.5 rounded-xl bg-white border border-[#E5E5EA] space-y-2 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#1C1C1E] flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-teal-600" />
                        5. ALBI Score &amp; Grade
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          albiResult.grade === 1
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : albiResult.grade === 2
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-red-50 text-red-700 border border-red-200"
                        }`}
                      >
                        Grade {albiResult.grade} ({albiResult.score})
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black font-mono text-teal-700">
                        Grade {albiResult.grade}
                      </span>
                      <span className="text-xs text-[#8E8E93]">
                        Median Survival: <strong>{albiResult.medianSurvivalMonths}</strong>
                      </span>
                    </div>
                    <p className="text-[11px] text-[#636366] leading-relaxed border-t border-[#F2F2F7] pt-2">
                      {albiResult.recommendation}
                    </p>
                  </div>
                )}

                {/* 6. Caudate / Right Lobe Ratio (C/RL) */}
                {(bcsActiveCalcTab === "ALL" || bcsActiveCalcTab === "CRL") && (
                  <div className="p-3.5 rounded-xl bg-white border border-[#E5E5EA] space-y-2 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#1C1C1E] flex items-center gap-1.5">
                        <Gauge className="w-3.5 h-3.5 text-purple-600" />
                        6. Harbin &amp; Awaya C/RL Ratio
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          caudateRightLobeResult.harbinCirrhosisPredicted
                            ? "bg-red-50 text-red-700 border border-red-200"
                            : caudateRightLobeResult.awayaCirrhosisPredicted
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        }`}
                      >
                        {caudateRightLobeResult.harbinCirrhosisPredicted
                          ? "Caudate Hypertrophy (≥ 0.65)"
                          : caudateRightLobeResult.awayaCirrhosisPredicted
                          ? "Borderline (≥ 0.58)"
                          : "Normal Anatomy"}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black font-mono text-purple-700">
                        {caudateRightLobeResult.cRlRatio}
                      </span>
                      <span className="text-xs text-[#8E8E93]">
                        Formula: {bcsCaudateWidthMm} / {bcsRightLobeWidthMm} mm
                      </span>
                    </div>
                    <p className="text-[11px] text-[#636366] leading-relaxed border-t border-[#F2F2F7] pt-2">
                      {caudateRightLobeResult.recommendation}
                    </p>
                  </div>
                )}

                {/* 7. HVPG & TIPS Hemodynamics */}
                {(bcsActiveCalcTab === "ALL" || bcsActiveCalcTab === "HVPG") && (
                  <div className="p-3.5 rounded-xl bg-white border border-[#E5E5EA] space-y-2 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#1C1C1E] flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-blue-600" />
                        7. Hepatic Venous Pressure Gradient
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          hvpgResult.hvpgMmHg >= 12
                            ? "bg-red-50 text-red-700 border border-red-200"
                            : hvpgResult.hvpgMmHg >= 10
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        }`}
                      >
                        {hvpgResult.stage}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black font-mono text-blue-700">
                        {hvpgResult.hvpgMmHg} mmHg
                      </span>
                      <span className="text-xs text-[#8E8E93]">
                        WHVP ({bcsWhvpMmHg}) - FHVP ({bcsFhvpMmHg})
                      </span>
                    </div>
                    <p className="text-[11px] text-[#636366] leading-relaxed border-t border-[#F2F2F7] pt-2">
                      Target post-TIPS: <strong>{hvpgResult.targetPostTipsMmHg}</strong>. {hvpgResult.recommendation}
                    </p>
                  </div>
                )}

                {/* 8. Budd-Chiari Composite Shunt Risk */}
                {(bcsActiveCalcTab === "ALL" || bcsActiveCalcTab === "COMPOSITE") && (
                  <div className="p-3.5 rounded-xl bg-white border border-[#E5E5EA] space-y-2 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#1C1C1E] flex items-center gap-1.5">
                        <ShieldAlert className="w-3.5 h-3.5 text-indigo-600" />
                        8. BCS Composite Shunt Pathway
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          bcsCompositeResult.riskLevel === "critical"
                            ? "bg-red-50 text-red-700 border border-red-200"
                            : bcsCompositeResult.riskLevel === "warning"
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        }`}
                      >
                        {bcsCompositeResult.rotterdamClass}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-bold font-mono text-[#1C1C1E]">
                        {bcsCavalWeb ? "IVC Web + Shunt" : caudateRightLobeResult.cRlRatio >= 0.65 ? "Transcaval DIPS" : "HV Stenting"}
                      </span>
                      <span className="text-xs text-[#8E8E93]">
                        C/RL: {caudateRightLobeResult.cRlRatio}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#636366] leading-relaxed border-t border-[#F2F2F7] pt-2">
                      {bcsCompositeResult.recommendedPathway}
                    </p>
                  </div>
                )}

                {/* 9. Cigarroa MACD Contrast Volume Ceiling */}
                {(bcsActiveCalcTab === "ALL" || bcsActiveCalcTab === "MACD") && (
                  <div className="p-3.5 rounded-xl bg-white border border-[#E5E5EA] space-y-2 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#1C1C1E] flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-[#007AFF]" />
                        9. Cigarroa MACD Contrast Limit
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          bcsMacdResult.isExceeded
                            ? "bg-red-50 text-red-700 border border-red-200"
                            : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        }`}
                      >
                        {bcsMacdResult.isExceeded ? "CEILING EXCEEDED" : "SAFE CEILING"}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black font-mono text-[#007AFF]">
                        {bcsMacdResult.macdMl} mL
                      </span>
                      <span className="text-xs text-[#8E8E93]">
                        Delivered: <strong>{bcsMacdResult.contrastGivenMl} mL</strong> ({Math.round((bcsMacdResult.contrastGivenMl / (bcsMacdResult.macdMl || 1)) * 100)}% used)
                      </span>
                    </div>
                    {/* Visual Progress Bar */}
                    <div className="w-full bg-[#F2F2F7] rounded-full h-1.5 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          bcsMacdResult.isExceeded
                            ? "bg-red-500"
                            : bcsMacdResult.contrastGivenMl / (bcsMacdResult.macdMl || 1) > 0.8
                            ? "bg-amber-500"
                            : "bg-[#007AFF]"
                        }`}
                        style={{
                          width: `${Math.min(
                            100,
                            Math.round((bcsMacdResult.contrastGivenMl / (bcsMacdResult.macdMl || 1)) * 100)
                          )}%`,
                        }}
                      />
                    </div>
                    <p className="text-[11px] text-[#636366] leading-relaxed border-t border-[#F2F2F7] pt-1">
                      {bcsMacdResult.recommendation}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}


            {/* 2. TACE PROTOCOL FUSION: CHILD-PUGH SCORE & CIGARROA MACD */}
            {activeProtocol.id === "tace" && (
              <div className="space-y-4">
                {/* Lab & Patient Inputs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-3.5 rounded-xl border border-[#E5E5EA]">
                  <div>
                    <label className="text-[10px] font-bold uppercase text-[#8E8E93] block mb-1">
                      Total Bilirubin (mg/dL)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      min="0.1"
                      value={taceBili}
                      onChange={(e) => setTaceBili(parseFloat(e.target.value) || 0)}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-[#E5E5EA] bg-[#FAFAFA] text-xs font-bold font-mono focus:bg-white focus:border-[#007AFF] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase text-[#8E8E93] block mb-1">
                      Serum Albumin (g/dL)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      min="1.0"
                      value={taceAlb}
                      onChange={(e) => setTaceAlb(parseFloat(e.target.value) || 0)}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-[#E5E5EA] bg-[#FAFAFA] text-xs font-bold font-mono focus:bg-white focus:border-[#007AFF] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase text-[#8E8E93] block mb-1">
                      INR
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      min="0.8"
                      value={taceInr}
                      onChange={(e) => setTaceInr(parseFloat(e.target.value) || 0)}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-[#E5E5EA] bg-[#FAFAFA] text-xs font-bold font-mono focus:bg-white focus:border-[#007AFF] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase text-[#8E8E93] block mb-1">
                      Ascites Severity
                    </label>
                    <select
                      value={taceAscitesPts}
                      onChange={(e) => setTaceAscitesPts(parseInt(e.target.value) as 1 | 2 | 3)}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-[#E5E5EA] bg-[#FAFAFA] text-xs font-semibold focus:bg-white focus:border-[#007AFF] outline-none"
                    >
                      <option value={1}>1 pt: None</option>
                      <option value={2}>2 pts: Slight / Controlled</option>
                      <option value={3}>3 pts: Moderate / Refractory</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase text-[#8E8E93] block mb-1">
                      Encephalopathy
                    </label>
                    <select
                      value={taceEncephPts}
                      onChange={(e) => setTaceEncephPts(parseInt(e.target.value) as 1 | 2 | 3)}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-[#E5E5EA] bg-[#FAFAFA] text-xs font-semibold focus:bg-white focus:border-[#007AFF] outline-none"
                    >
                      <option value={1}>1 pt: None</option>
                      <option value={2}>2 pts: Grade 1 - 2</option>
                      <option value={3}>3 pts: Grade 3 - 4</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase text-[#8E8E93] block mb-1">
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      step="1"
                      min="30"
                      max="150"
                      value={taceWeightKg}
                      onChange={(e) => setTaceWeightKg(parseFloat(e.target.value) || 60)}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-[#E5E5EA] bg-[#FAFAFA] text-xs font-bold font-mono focus:bg-white focus:border-[#007AFF] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase text-[#8E8E93] block mb-1">
                      Creatinine (mg/dL)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      min="0.4"
                      value={taceCreatinine}
                      onChange={(e) => setTaceCreatinine(parseFloat(e.target.value) || 1.0)}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-[#E5E5EA] bg-[#FAFAFA] text-xs font-bold font-mono focus:bg-white focus:border-[#007AFF] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase text-[#8E8E93] block mb-1">
                      Contrast Used (mL)
                    </label>
                    <input
                      type="number"
                      step="5"
                      min="0"
                      value={taceContrastGiven}
                      onChange={(e) => setTaceContrastGiven(parseFloat(e.target.value) || 0)}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-[#E5E5EA] bg-[#FAFAFA] text-xs font-bold font-mono focus:bg-white focus:border-[#007AFF] outline-none"
                    />
                  </div>
                </div>

                {/* Fused Results Dashboard */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {/* Result 1: Child-Pugh Score */}
                  <div className="p-3.5 rounded-xl bg-white border border-[#E5E5EA] space-y-2 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#1C1C1E] flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-amber-600" />
                        Child-Pugh Score &amp; Grade
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          childPughResult.classGrade === "A"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : childPughResult.classGrade === "B"
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-red-50 text-red-700 border border-red-200"
                        }`}
                      >
                        Class {childPughResult.classGrade} ({childPughResult.score} Points)
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black font-mono text-[#1C1C1E]">
                        Class {childPughResult.classGrade}
                      </span>
                      <span className="text-xs text-[#8E8E93]">
                        1-Yr Survival: <strong>{childPughResult.oneYearSurvival}</strong> • 2-Yr:{" "}
                        <strong>{childPughResult.twoYearSurvival}</strong>
                      </span>
                    </div>

                    <p className="text-[11px] text-[#636366] leading-relaxed border-t border-[#F2F2F7] pt-2">
                      {childPughResult.recommendation}
                    </p>
                  </div>

                  {/* Result 2: Cigarroa MACD Contrast Limit */}
                  <div className="p-3.5 rounded-xl bg-white border border-[#E5E5EA] space-y-2 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#1C1C1E] flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-[#007AFF]" />
                        Cigarroa MACD Contrast Volume
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          macdResult.alertLevel === "safe"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : macdResult.alertLevel === "warning"
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-red-50 text-red-700 border border-red-200"
                        }`}
                      >
                        {macdResult.isExceeded ? "CEILING EXCEEDED" : "SAFE CEILING"}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black font-mono text-[#007AFF]">
                        {macdResult.macdMl} mL
                      </span>
                      <span className="text-xs text-[#8E8E93]">
                        Delivered: <strong>{macdResult.contrastGivenMl} mL</strong> (
                        {macdResult.macdMl > 0
                          ? Math.round((macdResult.contrastGivenMl / macdResult.macdMl) * 100)
                          : 0}
                        % used)
                      </span>
                    </div>

                    {/* Visual Progress Bar */}
                    <div className="w-full bg-[#F2F2F7] rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          macdResult.isExceeded
                            ? "bg-red-500"
                            : macdResult.contrastGivenMl / macdResult.macdMl > 0.8
                            ? "bg-amber-500"
                            : "bg-[#007AFF]"
                        }`}
                        style={{
                          width: `${Math.min(
                            100,
                            Math.round((macdResult.contrastGivenMl / (macdResult.macdMl || 1)) * 100)
                          )}%`,
                        }}
                      />
                    </div>

                    <p className="text-[11px] text-[#636366] leading-relaxed border-t border-[#F2F2F7] pt-1">
                      {macdResult.recommendation}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 3. PAD / SFA PROTOCOL FUSION: RUTHERFORD STAGING & ABI */}
            {activeProtocol.id === "pad_angioplasty" && (
              <div className="space-y-4">
                {/* Inputs: Symptoms & Pressures */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-white p-3.5 rounded-xl border border-[#E5E5EA]">
                  <div className="sm:col-span-1">
                    <label className="text-[10px] font-bold uppercase text-[#8E8E93] block mb-1">
                      Clinical Presentation / Rutherford Category
                    </label>
                    <select
                      value={padRutherfordCat}
                      onChange={(e) => setPadRutherfordCat(parseInt(e.target.value))}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-[#E5E5EA] bg-[#FAFAFA] text-xs font-semibold focus:bg-white focus:border-[#007AFF] outline-none"
                    >
                      <option value={0}>Cat 0: Asymptomatic</option>
                      <option value={1}>Cat 1: Mild Claudication</option>
                      <option value={2}>Cat 2: Moderate Claudication</option>
                      <option value={3}>Cat 3: Severe Claudication (&lt;100m)</option>
                      <option value={4}>Cat 4: Ischemic Rest Pain</option>
                      <option value={5}>Cat 5: Minor Tissue Loss (Focal Ulcer)</option>
                      <option value={6}>Cat 6: Major Tissue Loss (Gangrene)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase text-[#8E8E93] block mb-1">
                      Ankle Systolic Pressure (mmHg)
                    </label>
                    <input
                      type="number"
                      step="5"
                      min="30"
                      max="220"
                      value={padAnkleSystolic}
                      onChange={(e) => setPadAnkleSystolic(parseFloat(e.target.value) || 0)}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-[#E5E5EA] bg-[#FAFAFA] text-xs font-bold font-mono focus:bg-white focus:border-[#007AFF] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase text-[#8E8E93] block mb-1">
                      Brachial Systolic Pressure (mmHg)
                    </label>
                    <input
                      type="number"
                      step="5"
                      min="60"
                      max="220"
                      value={padBrachialSystolic}
                      onChange={(e) => setPadBrachialSystolic(parseFloat(e.target.value) || 120)}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-[#E5E5EA] bg-[#FAFAFA] text-xs font-bold font-mono focus:bg-white focus:border-[#007AFF] outline-none"
                    />
                  </div>
                </div>

                {/* Fused Results Dashboard */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {/* Result 1: Rutherford Staging */}
                  <div className="p-3.5 rounded-xl bg-white border border-[#E5E5EA] space-y-2 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#1C1C1E] flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-[#007AFF]" />
                        Rutherford Classification
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          padRutherfordStage.cli
                            ? "bg-red-50 text-red-700 border border-red-200"
                            : "bg-amber-50 text-amber-700 border border-amber-200"
                        }`}
                      >
                        {padRutherfordStage.cli ? "CLTI (Critical Ischemia)" : "Claudication"}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black font-mono text-[#1C1C1E]">
                        {padRutherfordStage.classGrade}
                      </span>
                      <span className="text-xs font-semibold text-[#3A3A3C]">
                        {padRutherfordStage.stage}
                      </span>
                    </div>

                    <p className="text-[11px] text-[#636366] leading-relaxed border-t border-[#F2F2F7] pt-2">
                      {padRutherfordStage.recommendation}
                    </p>
                  </div>

                  {/* Result 2: Ankle-Brachial Index (ABI) */}
                  <div className="p-3.5 rounded-xl bg-white border border-[#E5E5EA] space-y-2 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#1C1C1E] flex items-center gap-1.5">
                        <Gauge className="w-3.5 h-3.5 text-indigo-600" />
                        Ankle-Brachial Index (ABI)
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          padAbiInterpretation.level === "safe"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : padAbiInterpretation.level === "warning"
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-red-50 text-red-700 border border-red-200"
                        }`}
                      >
                        {padAbiInterpretation.category}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black font-mono text-indigo-700">
                        {padAbi}
                      </span>
                      <span className="text-xs text-[#8E8E93]">
                        Formula: {padAnkleSystolic} / {padBrachialSystolic} mmHg
                      </span>
                    </div>

                    <p className="text-[11px] text-[#636366] leading-relaxed border-t border-[#F2F2F7] pt-2">
                      {padAbiInterpretation.desc}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Other Protocols: Associated or Universal IR Safety */}
            {activeProtocol.id !== "bcs" &&
              activeProtocol.id !== "tace" &&
              activeProtocol.id !== "pad_angioplasty" && (
                <div className="space-y-3">
                  {associatedCalculators.length > 0 ? (
                    <div className="space-y-3">
                      {currentCalcId && (
                        <ProcedureCalculatorRunner
                          calculatorId={currentCalcId}
                          showProtocolLink={false}
                        />
                      )}
                    </div>
                  ) : (
                    <div className="p-4 rounded-xl border border-[#E5E5EA] bg-white space-y-3 text-xs">
                      <div>
                        <div className="font-semibold text-[#1C1C1E]">
                          Universal IR Pre-Procedure Nephrotoxicity &amp; Hemostasis Guardrails
                        </div>
                        <div className="text-[11px] text-[#8E8E93] mt-0.5">
                          Standard Cigarroa MACD contrast limits and SIR bleeding risk stratification.
                        </div>
                      </div>
                      <ProcedureCalculatorRunner
                        calculatorId="sir_coagulation_risk"
                        showProtocolLink={false}
                      />
                    </div>
                  )}
                </div>
              )}
          </div>

          {/* ================================================================= */}
          {/* PROCEDURE CATALOG INFORMATION GROUPING (CPT, TARGET VESSELS, HARDWARE) */}
          {/* ================================================================= */}
          <div className="rounded-2xl border border-[#E5E5EA] bg-white p-4.5 shadow-xs space-y-3.5">
            <div className="flex items-center justify-between flex-wrap gap-2 pb-2.5 border-b border-[#E5E5EA]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Package className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#1C1C1E] tracking-tight uppercase">
                    Procedure Catalog Details, Target Vessels &amp; Hardware Bundles
                  </h3>
                  <p className="text-[11px] text-[#8E8E93]">
                    Authentic procedural blueprints, tariff billing codes, and angiosuite hardware schedule.
                  </p>
                </div>
              </div>

              <span className="text-[10px] font-mono text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full font-bold border border-indigo-200">
                {matchedMasterProcedures.length} Linked Procedures
              </span>
            </div>

            <div className="space-y-3">
              {matchedMasterProcedures.map((proc, idx) => (
                <div
                  key={proc.id || idx}
                  className="p-3.5 rounded-xl border border-[#E5E5EA] bg-[#FAFAFC] hover:bg-white hover:border-[#007AFF]/40 transition space-y-2.5 shadow-xs"
                >
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div>
                      <div className="text-xs font-bold text-[#1C1C1E] flex items-center gap-2">
                        <span>{proc.title}</span>
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-[#E5E5EA] text-[#1C1C1E]">
                          {proc.modality}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#8E8E93] mt-0.5 font-mono">
                        Package: {proc.maayRghsCompatibility.packageName} • Code:{" "}
                        <strong className="text-[#007AFF]">{proc.maayRghsCompatibility.packageCode}</strong> • ICD-10:{" "}
                        {proc.maayRghsCompatibility.icd10}
                      </div>
                    </div>

                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#34C759]/10 text-[#34C759] border border-[#34C759]/20">
                      {proc.maayRghsCompatibility.schemeName} Approved
                    </span>
                  </div>

                  {/* Target Vessels & Hardware Bundles Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1 text-[11px]">
                    <div className="p-2.5 rounded-lg bg-white border border-[#E5E5EA] space-y-1">
                      <div className="font-semibold text-[#1C1C1E] flex items-center gap-1">
                        <Stethoscope className="w-3 h-3 text-[#007AFF]" />
                        Target Anatomy / Vessels:
                      </div>
                      <div className="text-[#636366] leading-relaxed">
                        {proc.targetAnatomy.join(", ")}
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-white border border-[#E5E5EA] space-y-1">
                      <div className="font-semibold text-[#1C1C1E] flex items-center gap-1">
                        <Package className="w-3 h-3 text-indigo-600" />
                        Standard Hardware Bundle:
                      </div>
                      <div className="text-[#636366] leading-relaxed space-y-0.5">
                        <div>
                          <strong>Sheath:</strong> {proc.sheathDefault}
                        </div>
                        <div>
                          <strong>Catheter/Wire:</strong> {proc.cathetersAndWires}
                        </div>
                        {proc.microcatheterSystem && (
                          <div>
                            <strong>Microcatheter:</strong> {proc.microcatheterSystem}
                          </div>
                        )}
                        {proc.embolicOrImplants && (
                          <div>
                            <strong>Embolic/Stents:</strong> {proc.embolicOrImplants}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================================================================= */}
          {/* GOVERNMENT YOJANA TARIFFS & PRE-AUTHORIZATION SECTION */}
          {/* ================================================================= */}
          {activeProtocol.yojanaRequirement && (
            <div className="rounded-2xl border border-[#E5E5EA] bg-white p-4.5 shadow-xs space-y-4">
              <div className="flex items-start justify-between flex-wrap gap-2 pb-3 border-b border-[#E5E5EA]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-xs font-semibold bg-[#007AFF]/10 text-[#007AFF] border border-[#007AFF]/20">
                      <CreditCard className="w-3.5 h-3.5" />
                      {activeProtocol.yojanaRequirement.primaryScheme} Scheme Package
                    </span>
                    <span className="px-2 py-0.5 rounded-lg text-xs font-mono font-bold bg-[#FF9500]/10 text-[#C97100] border border-[#FF9500]/20">
                      Code: {activeProtocol.yojanaRequirement.packageCode}
                    </span>
                    {activeProtocol.yojanaRequirement.secondaryPackageCode && (
                      <span className="px-2 py-0.5 rounded-lg text-[11px] font-mono font-medium bg-[#F2F2F7] text-[#3A3A3C] border border-[#E5E5EA]">
                        {activeProtocol.yojanaRequirement.secondaryPackageCode}
                      </span>
                    )}
                    <span className="px-2 py-0.5 rounded-lg text-[11px] font-mono font-semibold bg-[#34C759]/10 text-[#34C759] border border-[#34C759]/20">
                      ICD-10: {activeProtocol.yojanaRequirement.icd10Code}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-[#1C1C1E]">
                    {activeProtocol.yojanaRequirement.packageName}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-[#8E8E93] font-medium">
                    MAAY / RGHS / AB-PMJAY
                  </span>
                </div>
              </div>

              {/* Metric Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-[#F9F9FB] border border-[#E5E5EA]">
                  <div className="text-[10px] uppercase font-bold text-[#8E8E93]">Package Tariff</div>
                  <div className="text-lg font-bold text-[#34C759] mt-0.5 font-mono">
                    ₹{activeProtocol.yojanaRequirement.tariffAmountInr.toLocaleString("en-IN")}
                  </div>
                  <div className="text-[10px] text-[#8E8E93] mt-0.5">Approved Govt Tariff</div>
                </div>

                <div className="p-3 rounded-xl bg-[#F9F9FB] border border-[#E5E5EA]">
                  <div className="text-[10px] uppercase font-bold text-[#8E8E93]">Implant Ceiling</div>
                  <div className="text-lg font-bold text-[#007AFF] mt-0.5 font-mono">
                    {activeProtocol.yojanaRequirement.implantReimbursementCeilingInr
                      ? `₹${activeProtocol.yojanaRequirement.implantReimbursementCeilingInr.toLocaleString("en-IN")}`
                      : "As per actuals"}
                  </div>
                  <div className="text-[10px] text-[#8E8E93] mt-0.5">Reimbursement Limit</div>
                </div>

                <div className="p-3 rounded-xl bg-[#F9F9FB] border border-[#E5E5EA]">
                  <div className="text-[10px] uppercase font-bold text-[#8E8E93]">Admission Type</div>
                  <div className="text-sm font-semibold text-[#1C1C1E] mt-1">
                    {activeProtocol.yojanaRequirement.ipdAdmissionRequired ? "Mandatory IPD" : "Daycare Eligible"}
                  </div>
                  <div className="text-[10px] text-[#8E8E93] mt-0.5">
                    {activeProtocol.yojanaRequirement.ipdAdmissionRequired ? "Min 24-48h Hospitalization" : "Same-Day Discharge"}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#F9F9FB] border border-[#E5E5EA]">
                  <div className="text-[10px] uppercase font-bold text-[#8E8E93]">Pre-Auth Turnaround</div>
                  <div className="text-sm font-semibold text-[#1C1C1E] mt-1 font-mono">
                    {activeProtocol.yojanaRequirement.preAuthTurnaroundHours || 4} Hours
                  </div>
                  <div className="text-[10px] text-[#8E8E93] mt-0.5">Online TMS Portal</div>
                </div>
              </div>

              {/* Implants & Pre-Auth Checklist 2-Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {/* Approved Implants */}
                <div className="p-3.5 rounded-xl border border-[#E5E5EA] bg-[#F9F9FB] space-y-2">
                  <div className="font-semibold text-xs text-[#1C1C1E] flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#007AFF]" />
                      Approved Implants Schedule
                    </span>
                    <span className="text-[10px] font-mono text-[#8E8E93]">
                      {activeProtocol.yojanaRequirement.approvedImplants.length} Items
                    </span>
                  </div>
                  <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                    {activeProtocol.yojanaRequirement.approvedImplants.map((imp, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#E5E5EA] text-[11px]"
                      >
                        <div className="space-y-0.5">
                          <div className="font-semibold text-[#1C1C1E]">{imp.name}</div>
                          <div className="text-[10px] text-[#8E8E93] font-mono">Code: {imp.code}</div>
                        </div>
                        {imp.price ? (
                          <span className="font-bold text-[#34C759] font-mono whitespace-nowrap ml-2">
                            ₹{imp.price.toLocaleString("en-IN")}
                          </span>
                        ) : (
                          <span className="text-[10px] text-[#8E8E93] font-mono whitespace-nowrap ml-2">Govt Tariff</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mandatory Pre-Auth Documents */}
                <div className="p-3.5 rounded-xl border border-[#E5E5EA] bg-[#F9F9FB] space-y-2">
                  <div className="font-semibold text-xs text-[#1C1C1E] flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#34C759]" />
                      Mandatory Pre-Auth Checklist
                    </span>
                    <span className="text-[10px] font-mono text-[#8E8E93]">Required for Approval</span>
                  </div>
                  <ul className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                    {activeProtocol.yojanaRequirement.mandatoryPreAuthDocuments.map((doc, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 p-2 rounded-lg bg-white border border-[#E5E5EA] text-[11px] text-[#3A3A3C]"
                      >
                        <span className="w-4 h-4 rounded-full bg-[#34C759]/10 text-[#34C759] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* SCHEDULED DISCHARGE MEDICATIONS */}
          {/* ================================================================= */}
          <div className="space-y-2 text-xs">
            <div className="font-semibold text-[#1C1C1E] flex items-center gap-1.5">
              <Pill className="w-4 h-4 text-[#007AFF]" />
              <span>Scheduled Discharge Prescriptions</span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-[#E5E5EA] bg-white shadow-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#E5E5EA] bg-[#F9F9FB] text-[11px] text-[#8E8E93] uppercase font-mono">
                    <th className="p-2.5">Medication &amp; Class</th>
                    <th className="p-2.5">Dose &amp; Route</th>
                    <th className="p-2.5">Frequency</th>
                    <th className="p-2.5">Duration</th>
                    <th className="p-2.5">Clinical Instructions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E5EA] text-[11px]">
                  {activeProtocol.prescriptions.map((rx, idx) => (
                    <tr key={idx} className="hover:bg-[#F9F9FB]">
                      <td className="p-2.5">
                        <div className="font-semibold text-[#1C1C1E]">{rx.item}</div>
                        <div className="text-[10px] text-[#8E8E93] font-mono">{rx.category}</div>
                      </td>
                      <td className="p-2.5 font-mono text-[#1C1C1E] font-semibold">
                        {rx.dose} ({rx.route})
                      </td>
                      <td className="p-2.5 font-mono text-[#007AFF] font-semibold">{rx.freq}</td>
                      <td className="p-2.5 text-[#3A3A3C] font-mono">
                        <div>{rx.duration}</div>
                        {rx.stepDown && <div className="text-[10px] text-amber-600 mt-0.5">{rx.stepDown}</div>}
                      </td>
                      <td className="p-2.5 text-[#636366] text-[11px] leading-relaxed">{rx.instructions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ================================================================= */}
          {/* CONDITIONAL PRN MEDICATIONS */}
          {/* ================================================================= */}
          <div className="p-4 rounded-xl bg-white border border-[#E5E5EA] shadow-xs space-y-2 text-xs">
            <div className="font-semibold text-[#1C1C1E] flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <span>Conditional PRN Medications (&quot;In Case It Is Required&quot;)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              {activeProtocol.prnMedications.map((prn, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#F9F9FB] border border-[#E5E5EA] space-y-1">
                  <div className="flex items-center justify-between text-amber-700 font-semibold text-[11px]">
                    <span>Trigger: {prn.trigger}</span>
                  </div>
                  <div className="font-semibold text-[#1C1C1E] text-xs mt-1">
                    {prn.drug} ({prn.dose})
                  </div>
                  <div className="text-[11px] text-[#636366] leading-relaxed">
                    {prn.instructions}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================================================================= */}
          {/* SAFETY LABS & FOLLOW-UP RECALL */}
          {/* ================================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-white border border-[#E5E5EA] shadow-xs space-y-2">
              <div className="font-semibold text-[#1C1C1E] flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-emerald-600" />
                <span>Safety Blood Reports to Monitor</span>
              </div>
              <ul className="space-y-1.5 text-[#636366] text-[11px]">
                {activeProtocol.safetyLabsToMonitor.map((lab, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>{lab}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#E5E5EA] shadow-xs space-y-2">
              <div className="font-semibold text-[#1C1C1E] flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#007AFF]" />
                <span>Structured Recall &amp; Follow-Up Timeline</span>
              </div>
              <ul className="space-y-1.5 text-[#636366] text-[11px]">
                {activeProtocol.recallSchedule.map((rec, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#007AFF] font-bold">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      {/* Pre-Booking Clinical Workup & Dossier Modal */}
      <PreBookingWorkupModal
        isOpen={workupModalOpen}
        onClose={() => setWorkupModalOpen(false)}
        patientInfo={{
          patientName: "PATIENT NAME",
          patientAge: 48,
          patientGender: "Male",
          crNo: "CR-2026-XXXX",
          ipdNo: "IPD-8821",
          bedNo: "Daycare Bed 04",
          patientPhone: "9829012345",
          scheme: "RGHS / Chiranjeevi (MAAY)",
          targetDate: new Date().toISOString().slice(0, 10),
          protocolId: activeProtocol.id,
          procedureName: activeProtocol.name,
          diagnosis: activeProtocol.indication,
        }}
      />
    </div>
  );
}
