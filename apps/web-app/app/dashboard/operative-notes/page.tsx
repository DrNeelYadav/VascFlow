"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  ALL_MASTER_PROCEDURES,
  MASTER_CATEGORIES_METADATA,
  buildOperativeNote,
  buildOperativeSummary,
  buildProceduralNarrative,
  buildAdviceBullets,
  MasterProcedure,
  OperativeNoteOptions,
  searchMasterProcedures,
} from "../../lib/masterCatalog";
import {
  DAILY_ROUTINE_IR_PROCEDURES,
  DailyRoutineProcedureItem,
  SPECIALTY_CATALOG_GROUPS,
} from "./dailyRoutineProcedures";
import { getConsentForProcedure } from "../../lib/consent/consentData";
import { getCalculatorById } from "../../lib/procedureCalculators";
import { INITIAL_RIS_WORKLIST_CASES } from "../worklist/worklistData";
import { useEndoflowStore } from "../useEndoflowStore";
import Link from "next/link";
import {
  FileText,
  Search,
  Filter,
  Copy,
  Printer,
  Check,
  ShieldCheck,
  Calculator,
  Pill,
  User,
  Calendar,
  AlertCircle,
  Clock,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Layers,
  FileSignature,
  Download,
  FolderOpen,
  Share2,
  ClipboardList,
  Activity,
  Package,
  Star,
  ChevronDown,
  Edit3,
  Lock,
  RotateCcw,
  Zap,
} from "lucide-react";

export default function OperativeNotesPage() {
  const storePatients = useEndoflowStore((s) => s.patients);

  // Procedure catalog mode: 'ROUTINE' (Daily Common ~16) vs 'OTHERS' (Master Catalog ~1,100+)
  const [catalogMode, setCatalogMode] = useState<"ROUTINE" | "OTHERS">("ROUTINE");
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedScheme, setSelectedScheme] = useState<"ALL" | "MAAY" | "RGHS">("ALL");

  // Selected Procedure
  const [selectedProcedureId, setSelectedProcedureId] = useState<string>(
    DAILY_ROUTINE_IR_PROCEDURES[0].id // Default to Varicose Veins VenaSeal/EVLT
  );

  // Primary Active Tab
  const [activeTab, setActiveTab] = useState<"NOTE" | "SUMMARY" | "CONSENT" | "PROTOCOL" | "CALCULATOR">("NOTE");

  // Edit Mode Toggle for the SMS Official Sheet
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  // Mobile Dual-View Toggle (< lg): "CONFIG" vs "PREVIEW"
  const [mobileView, setMobileView] = useState<"CONFIG" | "PREVIEW">("CONFIG");

  // Selected Patient State
  const [selectedPatientCaseId, setSelectedPatientCaseId] = useState<string>("CUSTOM");
  const [patientName, setPatientName] = useState("Ramswaroop Meena");
  const [age, setAge] = useState<string | number>(54);
  const [gender, setGender] = useState("Male");
  const [crNumber, setCrNumber] = useState("SMS-2026-089");
  const [ipdBed, setIpdBed] = useState("Male IR Ward / Bed 14");
  const [dateOfProcedure, setDateOfProcedure] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [procedureTime, setProcedureTime] = useState("10:30 AM");
  const [admissionNo, setAdmissionNo] = useState("A/SMSH/26/109750");
  const [supervisingConsultant, setSupervisingConsultant] = useState(
    "Dr. Meenu Bagarhatta (Sr. Prof & Head)"
  );
  const [primaryOperator, setPrimaryOperator] = useState(
    "Dr. Naresh Mangalhara (Associate Professor)"
  );

  // Clinical overrides
  const [customIndication, setCustomIndication] = useState("");
  const [customPreOpDiagnosis, setCustomPreOpDiagnosis] = useState("");
  const [customPostOpDiagnosis, setCustomPostOpDiagnosis] = useState("");
  const [customFindings, setCustomFindings] = useState("");
  const [customIntervention, setCustomIntervention] = useState("");
  const [customSedation, setCustomSedation] = useState("");
  const [customAccessSite, setCustomAccessSite] = useState("");
  const [customSheath, setCustomSheath] = useState("");
  const [customFluoroTime, setCustomFluoroTime] = useState<number | string>("");
  const [customDap, setCustomDap] = useState<number | string>("");
  const [customContrast, setCustomContrast] = useState("");

  // Copy Feedback State
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

  // Sync URL query params (?patient=...&cr=...&procedure=...&tab=...)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const qPatient = params.get("patient");
      const qCr = params.get("cr");
      const qAge = params.get("age");
      const qGender = params.get("gender");
      const qBed = params.get("bed");
      const qProcedure = params.get("procedure");
      const qTab = params.get("tab");

      if (qPatient) setPatientName(qPatient);
      if (qCr) setCrNumber(qCr);
      if (qAge) setAge(qAge);
      if (qGender) setGender(qGender);
      if (qBed) setIpdBed(qBed);
      if (qTab === "note") setActiveTab("NOTE");
      if (qTab === "summary") setActiveTab("SUMMARY");

      if (qProcedure) {
        const found = ALL_MASTER_PROCEDURES.find((p) =>
          p.title.toLowerCase().includes(qProcedure.toLowerCase()) ||
          p.id.toLowerCase().includes(qProcedure.toLowerCase())
        );
        if (found) {
          setSelectedProcedureId(found.id);
          const isRoutine = DAILY_ROUTINE_IR_PROCEDURES.some((r) => r.id === found.id);
          if (!isRoutine) setCatalogMode("OTHERS");
        }
      }
    }
  }, []);

  // Match current procedure in master catalog
  const selectedProcedure: MasterProcedure = useMemo(() => {
    const found = ALL_MASTER_PROCEDURES.find((p) => p.id === selectedProcedureId);
    return found || ALL_MASTER_PROCEDURES[0];
  }, [selectedProcedureId]);

  // Match daily routine procedure definition if present
  const routineDef: DailyRoutineProcedureItem | undefined = useMemo(() => {
    return DAILY_ROUTINE_IR_PROCEDURES.find((r) => r.id === selectedProcedureId);
  }, [selectedProcedureId]);

  // Reset custom fields when procedure changes
  const handleSelectProcedure = (procId: string) => {
    setSelectedProcedureId(procId);
    setCustomFindings("");
    setCustomIntervention("");
    setCustomIndication("");
    setCustomPreOpDiagnosis("");
    setCustomPostOpDiagnosis("");
    setCustomSedation("");
    setCustomAccessSite("");
    setCustomSheath("");
    setCustomFluoroTime("");
    setCustomDap("");
    setCustomContrast("");
  };

  // Filtered "Other" procedures divided by specialty category
  const filteredOtherProcedures = useMemo(() => {
    const routineIds = new Set(DAILY_ROUTINE_IR_PROCEDURES.map((r) => r.id));
    let base = ALL_MASTER_PROCEDURES.filter((p) => !routineIds.has(p.id));

    if (selectedSpecialtyId !== "ALL") {
      const group = SPECIALTY_CATALOG_GROUPS.find((g) => g.id === selectedSpecialtyId);
      if (group) {
        const catSet = new Set(group.categoryNumbers);
        base = base.filter((p) => catSet.has(p.categoryNumber));
      }
    }

    if (selectedScheme !== "ALL") {
      base = base.filter(
        (p) =>
          p.maayRghsCompatibility.schemeName === "BOTH" ||
          p.maayRghsCompatibility.schemeName === selectedScheme
      );
    }

    if (searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase();
      base = base.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.id.toLowerCase().includes(q) ||
          p.categoryName.toLowerCase().includes(q) ||
          p.maayRghsCompatibility.packageName.toLowerCase().includes(q) ||
          p.maayRghsCompatibility.icd10.toLowerCase().includes(q) ||
          p.targetAnatomy.some((a) => a.toLowerCase().includes(q))
      );
    }

    return base;
  }, [selectedSpecialtyId, selectedScheme, searchQuery]);

  // Linked Consent Template
  const consentTemplate = useMemo(() => {
    if (!selectedProcedure) return undefined;
    return getConsentForProcedure(selectedProcedure.consentId || selectedProcedure.id);
  }, [selectedProcedure]);

  // Linked Calculator
  const linkedCalculator = useMemo(() => {
    if (!selectedProcedure || !selectedProcedure.calculatorId) return undefined;
    return getCalculatorById(selectedProcedure.calculatorId);
  }, [selectedProcedure]);

  // Clinical parameters resolved
  const currentIndication =
    customIndication.trim() ||
    routineDef?.indicationDefault ||
    `${selectedProcedure.title} for clinically indicated pathology conforming to SMS Hospital protocols and Rajasthan MAAY/RGHS guidelines.`;

  const currentPreOpDiagnosis =
    customPreOpDiagnosis.trim() ||
    routineDef?.preOpDiagnosis ||
    `${selectedProcedure.title} (ICD-10: ${selectedProcedure.maayRghsCompatibility.icd10})`;

  const currentPostOpDiagnosis =
    customPostOpDiagnosis.trim() ||
    routineDef?.postOpDiagnosis ||
    `Status Post Successful ${selectedProcedure.title} (100% Technical Endpoint Verified)`;

  const currentSedation =
    customSedation.trim() ||
    routineDef?.modality === "US"
      ? "Local Anesthesia (2% Lignocaine Infiltration)"
      : "Local Anesthesia (2% Lignocaine) + Conscious Sedation (IV Fentanyl 50 mcg + Midazolam 1 mg)";

  const currentAccessSite =
    customAccessSite.trim() ||
    routineDef?.accessSiteDefault ||
    selectedProcedure.accessSiteDefault ||
    "Standard Interventional Access";

  const currentSheath =
    customSheath.trim() ||
    routineDef?.sheathDefault ||
    selectedProcedure.sheathDefault ||
    "Standard Introducer Sheath";

  const currentFluoroTime =
    customFluoroTime !== ""
      ? customFluoroTime
      : routineDef?.fluoroTimeMinutes ?? (selectedProcedure.modality === "US" ? 0.0 : 12.5);

  const currentDap =
    customDap !== ""
      ? customDap
      : routineDef?.dapGyCm2 ?? (selectedProcedure.modality === "US" ? 0.0 : 22.4);

  const currentContrast =
    customContrast.trim() ||
    (routineDef?.contrastVolumeMl
      ? `${routineDef.contrastMedia} (${routineDef.contrastVolumeMl} mL)`
      : selectedProcedure.modality === "US"
      ? "None (Ultrasound Guided)"
      : "Omnipaque 350 (40 mL)");

  // Procedural Narrative
  const currentNarrative =
    customIntervention.trim() ||
    buildProceduralNarrative(selectedProcedure, customFindings);

  // Build full operative note text (for clipboard copy)
  const operativeNoteText = useMemo(() => {
    const options: OperativeNoteOptions = {
      patientName,
      age,
      gender,
      crNumber,
      ipdBed,
      dateOfProcedure,
      supervisingConsultant,
      primaryOperator,
      customFindings: customFindings.trim() ? customFindings : undefined,
      customIntervention: currentNarrative,
      indication: currentIndication,
    };
    return buildOperativeNote(selectedProcedure, options);
  }, [
    selectedProcedure,
    patientName,
    age,
    gender,
    crNumber,
    ipdBed,
    dateOfProcedure,
    supervisingConsultant,
    primaryOperator,
    customFindings,
    currentNarrative,
    currentIndication,
  ]);

  // Build executive operative summary text
  const operativeSummaryText = useMemo(() => {
    const options: OperativeNoteOptions = {
      patientName,
      age,
      gender,
      crNumber,
      ipdBed,
      dateOfProcedure,
      supervisingConsultant,
      primaryOperator,
      customFindings: customFindings.trim() ? customFindings : undefined,
      customIntervention: currentNarrative,
      indication: currentIndication,
    };
    return buildOperativeSummary(selectedProcedure, options);
  }, [
    selectedProcedure,
    patientName,
    age,
    gender,
    crNumber,
    ipdBed,
    dateOfProcedure,
    supervisingConsultant,
    primaryOperator,
    customFindings,
    currentNarrative,
    currentIndication,
  ]);

  // Copy Note Handler
  const handleCopyNote = async () => {
    try {
      await navigator.clipboard.writeText(operativeNoteText);
      setCopyFeedback("Copied Official SMS Post-Operative Note to clipboard!");
      setTimeout(() => setCopyFeedback(null), 3500);
    } catch {
      setCopyFeedback("Error copying to clipboard");
      setTimeout(() => setCopyFeedback(null), 3000);
    }
  };

  // Copy Summary Handler
  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(operativeSummaryText);
      setCopyFeedback("Copied Operative Summary to clipboard!");
      setTimeout(() => setCopyFeedback(null), 3500);
    } catch {
      setCopyFeedback("Error copying to clipboard");
      setTimeout(() => setCopyFeedback(null), 3000);
    }
  };

  // Share Handler (WhatsApp / Native Share)
  const handleShare = (textToShare: string, title: string) => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({
        title,
        text: textToShare,
      }).catch(() => {});
    } else if (typeof window !== "undefined") {
      const text = encodeURIComponent(textToShare);
      window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
    }
  };

  // Print Handler
  const handlePrint = () => {
    window.print();
  };

  // Handle selecting a patient from Worklist / Store
  const handleSelectWorklistPatient = (caseId: string) => {
    setSelectedPatientCaseId(caseId);
    if (caseId === "CUSTOM") return;

    // Check store patients first
    const fromStore = storePatients.find((p) => p.id === caseId || p.hid === caseId);
    if (fromStore) {
      setPatientName(fromStore.name);
      setCrNumber(fromStore.hid);
      setAge(fromStore.age);
      setGender(fromStore.sex);
      setIpdBed(fromStore.ipd?.bed ? `${fromStore.ipd.ward} / ${fromStore.ipd.bed}` : "IR Recovery Ward");
      return;
    }

    // Check initial worklist cases
    const fromWorklist = INITIAL_RIS_WORKLIST_CASES.find((p) => p.caseId === caseId);
    if (fromWorklist) {
      setPatientName(fromWorklist.patientName);
      setCrNumber(fromWorklist.crNumber);
      setSupervisingConsultant(fromWorklist.supervisingConsultant);
      setPrimaryOperator(fromWorklist.operatorResident);
      setIpdBed(`IR Recovery Ward / Room ${fromWorklist.room || "1"}`);
    }
  };

  return (
    <div className="space-y-4 print:p-0 print:space-y-0 text-zinc-900 dark:text-zinc-100">
      {/* Top Header & Fast Action Bar */}
      <div className="bg-white dark:bg-[#1E1E1E] border border-[#DADCE0] dark:border-[#3C4043] rounded-2xl p-4 sm:p-5 shadow-xs print:hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Operative Notes
            </h1>
          </div>

          {/* Header Action Controls */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setIsEditMode(!isEditMode)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border ${
                isEditMode
                  ? "bg-amber-500 text-white border-amber-600 shadow-xs"
                  : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 border-zinc-300 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700"
              }`}
              title="Toggle inline editing for operative findings and technique"
            >
              {isEditMode ? <Check className="w-3.5 h-3.5" /> : <Edit3 className="w-3.5 h-3.5" />}
              <span>{isEditMode ? "Done" : "Edit Note"}</span>
            </button>

            <button
              onClick={handleCopyNote}
              className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer active:scale-95"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Note</span>
            </button>

            <button
              onClick={() => handleShare(operativeNoteText, `SMS Post-Op Note - ${patientName}`)}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer active:scale-95"
              title="Share formatted note on WhatsApp"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 bg-zinc-800 hover:bg-zinc-900 text-white dark:bg-zinc-700 dark:hover:bg-zinc-600 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <Link
              href="/dashboard/discharge?tab=archive"
              className="px-3 py-1.5 bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 text-xs font-semibold rounded-xl hover:bg-amber-100 transition-colors flex items-center gap-1.5"
            >
              <FolderOpen className="w-3.5 h-3.5" />
              <span>Archive</span>
            </Link>
          </div>
        </div>

        {/* Copy Feedback Banner */}
        {copyFeedback && (
          <div className="mt-3 px-3.5 py-2 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold rounded-xl flex items-center gap-2 animate-in fade-in">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>{copyFeedback}</span>
          </div>
        )}
      </div>

      {/* Mobile Dual-View Toggle (< lg) */}
      <div className="flex lg:hidden bg-zinc-100 dark:bg-zinc-800/80 p-1 rounded-xl border border-zinc-200 dark:border-zinc-700 print:hidden">
        <button
          type="button"
          onClick={() => setMobileView("CONFIG")}
          className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            mobileView === "CONFIG"
              ? "bg-white dark:bg-zinc-900 text-blue-600 dark:text-blue-400 shadow-xs"
              : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
          }`}
        >
          <Edit3 className="w-3.5 h-3.5" />
          <span>Configure Note</span>
        </button>
        <button
          type="button"
          onClick={() => setMobileView("PREVIEW")}
          className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            mobileView === "PREVIEW"
              ? "bg-white dark:bg-zinc-900 text-blue-600 dark:text-blue-400 shadow-xs"
              : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Preview Sheet</span>
        </button>
      </div>

      {/* Main Two-Column Workflow (Left: Procedure & Patient Selection, Right: Official SMS Note Document) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 print:block">
        {/* Left Column (5 Cols) - Procedure & Patient Selector */}
        <div className={`lg:col-span-5 space-y-4 print:hidden ${mobileView === "CONFIG" ? "block" : "hidden lg:block"}`}>
          {/* Procedure Partitioning Selector: Daily Routine (16) vs Others (1,100+) */}
          <div className="bg-white dark:bg-[#1E1E1E] border border-[#DADCE0] dark:border-[#3C4043] rounded-2xl p-4 shadow-xs">
            {/* Mode Switcher Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-zinc-100 dark:bg-zinc-800/80 rounded-xl mb-3">
              <button
                onClick={() => setCatalogMode("ROUTINE")}
                className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  catalogMode === "ROUTINE"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>Daily Routine IR (16)</span>
              </button>

              <button
                onClick={() => setCatalogMode("OTHERS")}
                className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  catalogMode === "OTHERS"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Other Procedures ({ALL_MASTER_PROCEDURES.length - DAILY_ROUTINE_IR_PROCEDURES.length})</span>
              </button>
            </div>

            {/* ROUTINE MODE: Clean, Instant 1-Click Cards of the 16 Routine SMS Procedures */}
            {catalogMode === "ROUTINE" && (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400 px-1 mb-1">
                  <span>Routine Procedures</span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">1-Tap Select</span>
                </div>

                <div className="max-h-[440px] overflow-y-auto space-y-1.5 pr-1">
                  {DAILY_ROUTINE_IR_PROCEDURES.map((item) => {
                    const isSelected = item.id === selectedProcedureId;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleSelectProcedure(item.id)}
                        className={`w-full text-left p-2.5 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-blue-50 dark:bg-blue-950/60 border-blue-500 dark:border-blue-500 shadow-xs ring-1 ring-blue-500"
                            : "bg-zinc-50/70 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100 truncate">
                              {item.shortTitle}
                            </div>
                            <div className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate mt-0.5">
                              {item.fullTitle}
                            </div>
                          </div>
                          <span
                            className={`px-1.5 py-0.5 rounded text-[10px] font-bold shrink-0 ${
                              item.modality === "XA"
                                ? "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300"
                                : item.modality === "US"
                                ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                                : "bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300"
                            }`}
                          >
                            {item.modality}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 mt-1.5 text-[10px] text-zinc-500 dark:text-zinc-400">
                          <span className="font-semibold text-blue-700 dark:text-blue-300">{item.specialty}</span>
                          <span>•</span>
                          <span>Pkg: {item.packageCode}</span>
                          <span>•</span>
                          <span className="px-1 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                            {item.badge}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* OTHERS MODE: Divided Cleanly into Clinical Specialties with Search */}
            {catalogMode === "OTHERS" && (
              <div className="space-y-2.5">
                {/* Search Input */}
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-zinc-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search ~1,100 other procedures, packages, anatomy..."
                    className="w-full pl-9 pr-3 py-1.5 text-xs bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl focus:outline-none focus:border-blue-500 text-zinc-900 dark:text-zinc-100"
                  />
                </div>

                {/* Specialty Dropdown Filter */}
                <div className="space-y-1">
                  <label className="text-[10px] text-zinc-500 dark:text-zinc-400 font-semibold block">
                    Specialty / Clinical System:
                  </label>
                  <select
                    value={selectedSpecialtyId}
                    onChange={(e) => setSelectedSpecialtyId(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl text-xs font-medium text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-blue-500"
                  >
                    <option value="ALL">All Other Categories ({filteredOtherProcedures.length} Procedures)</option>
                    {SPECIALTY_CATALOG_GROUPS.map((g) => (
                      <option key={g.id} value={g.id}>
                        {g.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Scheme Filter */}
                <div className="flex items-center justify-between text-xs px-1">
                  <span className="text-[11px] text-zinc-500 dark:text-zinc-400">Scheme Filter:</span>
                  <div className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 p-0.5 rounded-lg border border-zinc-200 dark:border-zinc-700">
                    {(["ALL", "MAAY", "RGHS"] as const).map((sc) => (
                      <button
                        key={sc}
                        onClick={() => setSelectedScheme(sc)}
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-all ${
                          selectedScheme === sc
                            ? "bg-blue-600 text-white shadow-xs"
                            : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                        }`}
                      >
                        {sc}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Filtered Procedures List */}
                <div className="max-h-[350px] overflow-y-auto space-y-1.5 pr-1 divide-y divide-zinc-100 dark:divide-zinc-800">
                  {filteredOtherProcedures.map((p) => {
                    const isSelected = p.id === selectedProcedureId;
                    return (
                      <button
                        key={p.id}
                        onClick={() => handleSelectProcedure(p.id)}
                        className={`w-full text-left p-2.5 rounded-xl border transition-all pt-2 cursor-pointer ${
                          isSelected
                            ? "bg-blue-50 dark:bg-blue-950/60 border-blue-500 shadow-xs"
                            : "bg-white dark:bg-zinc-900 border-transparent hover:bg-zinc-50 dark:hover:bg-zinc-800"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                            {p.title}
                          </div>
                          <span className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 shrink-0">
                            {p.modality}
                          </span>
                        </div>
                        <div className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-1 flex items-center gap-2">
                          <span>Cat {p.categoryNumber}: {p.categoryName}</span>
                          <span>•</span>
                          <span>ICD: {p.maayRghsCompatibility.icd10}</span>
                        </div>
                      </button>
                    );
                  })}

                  {filteredOtherProcedures.length === 0 && (
                    <div className="py-8 text-center text-xs text-zinc-500 dark:text-zinc-400">
                      No matching procedures found in this specialty. Clear search filter.
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Patient Quick Selector & Demographics Editor */}
          <div className="bg-white dark:bg-[#1E1E1E] border border-[#DADCE0] dark:border-[#3C4043] rounded-2xl p-4 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-900 dark:text-zinc-100">
                <User className="w-4 h-4 text-blue-600" />
                <span>Patient Demographics &amp; Operators</span>
              </div>
              <span className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400">
                CR: {crNumber}
              </span>
            </div>

            {/* Quick Select from Store/Worklist */}
            <div>
              <label className="block text-[10px] text-zinc-500 dark:text-zinc-400 font-medium mb-1">
                Select Active Patient:
              </label>
              <select
                value={selectedPatientCaseId}
                onChange={(e) => handleSelectWorklistPatient(e.target.value)}
                className="w-full px-2.5 py-1.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-blue-500 font-medium"
              >
                <option value="CUSTOM">Custom Patient Entry / Manual</option>
                {storePatients.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.age} Y / {p.sex}) • CR: {p.hid}
                  </option>
                ))}
                {INITIAL_RIS_WORKLIST_CASES.map((c) => (
                  <option key={c.caseId} value={c.caseId}>
                    {c.patientName} ({c.crNumber}) - {c.procedureName}
                  </option>
                ))}
              </select>
            </div>

            {/* Patient Inputs Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <label className="block text-[10px] text-zinc-500 dark:text-zinc-400 mb-0.5">Name</label>
                <input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg text-xs font-semibold text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-[10px] text-zinc-500 dark:text-zinc-400 mb-0.5">CR / UHID No.</label>
                <input
                  type="text"
                  value={crNumber}
                  onChange={(e) => setCrNumber(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg text-xs font-mono font-semibold text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-[10px] text-zinc-500 dark:text-zinc-400 mb-0.5">Age (Years) / Sex</label>
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-14 px-2 py-1.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-blue-500"
                  />
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="flex-1 px-1.5 py-1.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-blue-500"
                  >
                    <option value="Male">M</option>
                    <option value="Female">F</option>
                    <option value="Other">O</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] text-zinc-500 dark:text-zinc-400 mb-0.5">IPD Ward / Bed</label>
                <input
                  type="text"
                  value={ipdBed}
                  onChange={(e) => setIpdBed(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-[10px] text-zinc-500 dark:text-zinc-400 mb-0.5">Date of Procedure</label>
                <input
                  type="date"
                  value={dateOfProcedure}
                  onChange={(e) => setDateOfProcedure(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-[10px] text-zinc-500 dark:text-zinc-400 mb-0.5">Time of Procedure</label>
                <input
                  type="text"
                  value={procedureTime}
                  onChange={(e) => setProcedureTime(e.target.value)}
                  placeholder="e.g. 10:30 AM"
                  className="w-full px-2.5 py-1.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-[10px] text-zinc-500 dark:text-zinc-400 mb-0.5">Primary Operating Faculty</label>
                <input
                  type="text"
                  value={primaryOperator}
                  onChange={(e) => setPrimaryOperator(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-[10px] text-zinc-500 dark:text-zinc-400 mb-0.5">Supervising Consultant</label>
                <input
                  type="text"
                  value={supervisingConsultant}
                  onChange={(e) => setSupervisingConsultant(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (7 Cols) - The Authentic SMS Hospital Operative Sheet */}
        <div className={`lg:col-span-7 space-y-4 print:w-full print:block ${mobileView === "PREVIEW" ? "block" : "hidden lg:block"}`}>
          {/* View Tabs Bar */}
          <div className="bg-white dark:bg-[#1E1E1E] border border-[#DADCE0] dark:border-[#3C4043] rounded-2xl p-1.5 flex items-center justify-between shadow-xs print:hidden overflow-x-auto">
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={() => setActiveTab("NOTE")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === "NOTE"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>SMS Post-Op Note</span>
              </button>

              <button
                onClick={() => setActiveTab("SUMMARY")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === "SUMMARY"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                <ClipboardList className="w-3.5 h-3.5" />
                <span>Operative Summary</span>
              </button>

              <button
                onClick={() => setActiveTab("CONSENT")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === "CONSENT"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                <FileSignature className="w-3.5 h-3.5" />
                <span>Bilingual Consent</span>
              </button>

              <button
                onClick={() => setActiveTab("PROTOCOL")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === "PROTOCOL"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                <Pill className="w-3.5 h-3.5" />
                <span>Hardware &amp; Orders</span>
              </button>

              {linkedCalculator && (
                <button
                  onClick={() => setActiveTab("CALCULATOR")}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    activeTab === "CALCULATOR"
                      ? "bg-blue-600 text-white shadow-xs"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  }`}
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Risk Score</span>
                </button>
              )}
            </div>

            <div className="hidden sm:flex items-center gap-2 text-[11px] font-semibold text-zinc-500 dark:text-zinc-400 pr-2">
              <span>{selectedProcedure.modality} Suite</span>
            </div>
          </div>

          {/* TAB 1: OFFICIAL SMS HOSPITAL POST-OPERATIVE NOTE */}
          {activeTab === "NOTE" && (
            <div className="bg-white dark:bg-[#1E1E1E] print:bg-white border border-[#DADCE0] dark:border-[#3C4043] print:border-none rounded-2xl p-5 sm:p-8 shadow-xs relative print:shadow-none print:p-0 print:m-0 flex flex-col gap-5 text-zinc-900 dark:text-zinc-100 print:text-black">
              {/* Document Banner / Header (Hidden on Print) */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-zinc-200 dark:border-zinc-800 print:hidden">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                  <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                    Official SMS Hospital Operation Record (ऑपरेशन एवं पोस्ट-ऑपरेटिव नोट)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyNote}
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-lg hover:bg-blue-100 flex items-center gap-1.5 transition-colors cursor-pointer border border-blue-200 dark:border-blue-800"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Text</span>
                  </button>
                  <button
                    onClick={() => handleShare(operativeNoteText, `SMS Post-Op Note - ${patientName}`)}
                    className="px-3 py-1 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold rounded-lg hover:bg-emerald-100 flex items-center gap-1.5 transition-colors cursor-pointer border border-emerald-200 dark:border-emerald-800"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                  <button
                    onClick={handlePrint}
                    className="px-3 py-1 bg-zinc-800 text-white dark:bg-zinc-700 text-xs font-semibold rounded-lg hover:bg-zinc-900 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Report</span>
                  </button>
                </div>
              </div>

              {/* Official SMS Hospital Letterhead Header */}
              <div className="border-b-2 border-zinc-900 dark:border-zinc-100 print:border-black pb-3 text-center flex flex-col items-center">
                <div className="flex items-center justify-center gap-3 sm:gap-5 mb-2">
                  <img
                    src="/sms_hospital_logo.png"
                    alt="SMS Hospital Logo"
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain shrink-0"
                  />
                  <div className="text-left">
                    <div className="text-[10px] sm:text-xs font-bold tracking-widest text-zinc-600 dark:text-zinc-400 print:text-zinc-700 uppercase">
                      GOVERNMENT OF RAJASTHAN
                    </div>
                    <h1 className="text-base sm:text-xl font-black tracking-tight text-zinc-950 dark:text-zinc-50 print:text-black font-serif leading-tight">
                      SMS HOSPITAL &amp; MEDICAL COLLEGE, JAIPUR
                    </h1>
                    <p className="text-[11px] sm:text-xs font-bold text-zinc-800 dark:text-zinc-300 print:text-zinc-800 tracking-tight mt-0.5">
                      DEPARTMENT OF RADIODIAGNOSIS &amp; INTERVENTIONAL RADIOLOGY
                    </p>
                  </div>
                </div>

                <div className="mt-1 px-4 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 print:bg-zinc-100 border border-zinc-300 dark:border-zinc-700 print:border-black text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100 print:text-black">
                  OPERATION RECORD / POST-OPERATIVE NOTE (ऑपरेशन एवं पोस्ट-ऑपरेटिव नोट)
                </div>
              </div>

              {/* Patient Identification & Case Header Table (Clean SMS Grid) */}
              <div className="border border-zinc-300 dark:border-zinc-700 print:border-black rounded-lg overflow-hidden text-xs">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b border-zinc-200 dark:border-zinc-800 print:border-zinc-300 bg-zinc-50/70 dark:bg-zinc-900/50 print:bg-transparent">
                      <td className="p-2 sm:p-2.5 font-semibold text-zinc-500 dark:text-zinc-400 print:text-zinc-700 w-1/4">
                        CR No. / UHID:
                      </td>
                      <td className="p-2 sm:p-2.5 font-mono font-bold text-zinc-950 dark:text-zinc-50 print:text-black w-1/4">
                        {crNumber}
                      </td>
                      <td className="p-2 sm:p-2.5 font-semibold text-zinc-500 dark:text-zinc-400 print:text-zinc-700 w-1/4">
                        Patient Name:
                      </td>
                      <td className="p-2 sm:p-2.5 font-bold text-zinc-950 dark:text-zinc-50 print:text-black w-1/4">
                        {patientName}
                      </td>
                    </tr>
                    <tr className="border-b border-zinc-200 dark:border-zinc-800 print:border-zinc-300">
                      <td className="p-2 sm:p-2.5 font-semibold text-zinc-500 dark:text-zinc-400 print:text-zinc-700">
                        Age / Gender:
                      </td>
                      <td className="p-2 sm:p-2.5 font-bold text-zinc-950 dark:text-zinc-50 print:text-black">
                        {age} Y / {gender}
                      </td>
                      <td className="p-2 sm:p-2.5 font-semibold text-zinc-500 dark:text-zinc-400 print:text-zinc-700">
                        Ward / Bed:
                      </td>
                      <td className="p-2 sm:p-2.5 font-bold text-zinc-950 dark:text-zinc-50 print:text-black">
                        {ipdBed}
                      </td>
                    </tr>
                    <tr className="border-b border-zinc-200 dark:border-zinc-800 print:border-zinc-300 bg-zinc-50/70 dark:bg-zinc-900/50 print:bg-transparent">
                      <td className="p-2 sm:p-2.5 font-semibold text-zinc-500 dark:text-zinc-400 print:text-zinc-700">
                        Date of Procedure:
                      </td>
                      <td className="p-2 sm:p-2.5 font-bold text-zinc-950 dark:text-zinc-50 print:text-black">
                        {dateOfProcedure} ({procedureTime})
                      </td>
                      <td className="p-2 sm:p-2.5 font-semibold text-zinc-500 dark:text-zinc-400 print:text-zinc-700">
                        Suite / Room:
                      </td>
                      <td className="p-2 sm:p-2.5 font-bold text-zinc-950 dark:text-zinc-50 print:text-black">
                        {selectedProcedure.modality} Cath-Lab Suite
                      </td>
                    </tr>
                    <tr className="border-b border-zinc-200 dark:border-zinc-800 print:border-zinc-300">
                      <td className="p-2 sm:p-2.5 font-semibold text-zinc-500 dark:text-zinc-400 print:text-zinc-700">
                        Primary Operator:
                      </td>
                      <td className="p-2 sm:p-2.5 font-bold text-zinc-950 dark:text-zinc-50 print:text-black">
                        {primaryOperator}
                      </td>
                      <td className="p-2 sm:p-2.5 font-semibold text-zinc-500 dark:text-zinc-400 print:text-zinc-700">
                        Supervising Consultant:
                      </td>
                      <td className="p-2 sm:p-2.5 font-bold text-zinc-950 dark:text-zinc-50 print:text-black">
                        {supervisingConsultant}
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 sm:p-2.5 font-semibold text-zinc-500 dark:text-zinc-400 print:text-zinc-700">
                        Scheme / Billing:
                      </td>
                      <td className="p-2 sm:p-2.5 text-zinc-900 dark:text-zinc-100 print:text-black">
                        MAAY / RGHS Compatible
                      </td>
                      <td className="p-2 sm:p-2.5 font-semibold text-zinc-500 dark:text-zinc-400 print:text-zinc-700">
                        Package Code:
                      </td>
                      <td className="p-2 sm:p-2.5 font-mono font-bold text-blue-700 dark:text-blue-300 print:text-black">
                        {selectedProcedure.maayRghsCompatibility.packageCode}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Procedure Title Banner */}
              <div className="text-center py-2.5 px-4 bg-zinc-50 dark:bg-zinc-900 print:bg-transparent border border-zinc-200 dark:border-zinc-700 print:border-zinc-400 rounded-lg">
                <div className="text-[10px] font-bold text-blue-800 dark:text-blue-400 uppercase tracking-widest">
                  PROCEDURE PERFORMED (की गई प्रक्रिया)
                </div>
                <h2 className="text-base sm:text-lg font-black text-zinc-950 dark:text-zinc-50 print:text-black mt-0.5">
                  {selectedProcedure.title}
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-2 mt-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                  <span>Package: {selectedProcedure.maayRghsCompatibility.packageName}</span>
                  <span>•</span>
                  <span>ICD-10: <strong>{selectedProcedure.maayRghsCompatibility.icd10}</strong></span>
                  {selectedProcedure.maayRghsCompatibility.tariffInr && (
                    <>
                      <span>•</span>
                      <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                        Tariff: ₹{selectedProcedure.maayRghsCompatibility.tariffInr.toLocaleString()}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Clinical Indication & Diagnosis Box */}
              <div className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-3 bg-zinc-50/50 dark:bg-zinc-900/30 print:bg-transparent text-xs space-y-2">
                <div>
                  <span className="font-bold text-zinc-950 dark:text-zinc-100 print:text-black uppercase text-[11px] block">
                    Pre-Operative Diagnosis &amp; Clinical Indication:
                  </span>
                  {isEditMode ? (
                    <input
                      type="text"
                      value={currentIndication}
                      onChange={(e) => setCustomIndication(e.target.value)}
                      className="w-full mt-1 p-1.5 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded text-xs text-zinc-900 dark:text-zinc-100"
                    />
                  ) : (
                    <p className="text-zinc-800 dark:text-zinc-200 print:text-black mt-0.5 leading-relaxed">
                      {currentIndication}
                    </p>
                  )}
                </div>

                <div className="pt-1.5 border-t border-zinc-200 dark:border-zinc-800">
                  <span className="font-bold text-zinc-950 dark:text-zinc-100 print:text-black uppercase text-[11px] block">
                    Post-Operative Diagnosis:
                  </span>
                  {isEditMode ? (
                    <input
                      type="text"
                      value={currentPostOpDiagnosis}
                      onChange={(e) => setCustomPostOpDiagnosis(e.target.value)}
                      className="w-full mt-1 p-1.5 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded text-xs text-zinc-900 dark:text-zinc-100"
                    />
                  ) : (
                    <p className="text-zinc-800 dark:text-zinc-200 print:text-black mt-0.5 font-medium">
                      {currentPostOpDiagnosis}
                    </p>
                  )}
                </div>
              </div>

              {/* Surgical & Technical Parameters Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                <div className="p-2.5 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 print:bg-transparent">
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block font-semibold">Anaesthesia / Sedation:</span>
                  {isEditMode ? (
                    <input
                      type="text"
                      value={currentSedation}
                      onChange={(e) => setCustomSedation(e.target.value)}
                      className="w-full text-xs p-1 mt-0.5 bg-zinc-50 dark:bg-zinc-800 border rounded"
                    />
                  ) : (
                    <strong className="text-zinc-900 dark:text-zinc-100 print:text-black">{currentSedation}</strong>
                  )}
                </div>

                <div className="p-2.5 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 print:bg-transparent">
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block font-semibold">Access Site &amp; Approach:</span>
                  {isEditMode ? (
                    <input
                      type="text"
                      value={currentAccessSite}
                      onChange={(e) => setCustomAccessSite(e.target.value)}
                      className="w-full text-xs p-1 mt-0.5 bg-zinc-50 dark:bg-zinc-800 border rounded"
                    />
                  ) : (
                    <strong className="text-zinc-900 dark:text-zinc-100 print:text-black">{currentAccessSite}</strong>
                  )}
                </div>

                <div className="p-2.5 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 print:bg-transparent">
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block font-semibold">Sheath Calibre / System:</span>
                  {isEditMode ? (
                    <input
                      type="text"
                      value={currentSheath}
                      onChange={(e) => setCustomSheath(e.target.value)}
                      className="w-full text-xs p-1 mt-0.5 bg-zinc-50 dark:bg-zinc-800 border rounded"
                    />
                  ) : (
                    <strong className="text-zinc-900 dark:text-zinc-100 print:text-black">{currentSheath}</strong>
                  )}
                </div>
              </div>

              {/* Operative Technique & Detailed Procedural Description */}
              <div className="space-y-1.5 text-xs">
                <h3 className="font-bold text-zinc-950 dark:text-zinc-100 print:text-black uppercase text-xs tracking-wider border-b border-zinc-300 dark:border-zinc-700 pb-1">
                  Operative Technique &amp; Procedural Steps (प्रक्रिया का विवरण):
                </h3>

                {isEditMode ? (
                  <textarea
                    rows={7}
                    value={currentNarrative}
                    onChange={(e) => setCustomIntervention(e.target.value)}
                    className="w-full p-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-lg text-xs leading-relaxed font-normal text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  <div className="p-3.5 bg-zinc-50 dark:bg-zinc-900/60 print:bg-transparent border border-zinc-200 dark:border-zinc-750 print:border-none rounded-lg text-zinc-850 dark:text-zinc-200 print:text-black leading-relaxed text-justify text-xs sm:text-[12.5px]">
                    {currentNarrative}
                  </div>
                )}
              </div>

              {/* Hardware, Implants & Consumables Log */}
              <div className="space-y-1.5 text-xs">
                <h3 className="font-bold text-zinc-950 dark:text-zinc-100 print:text-black uppercase text-xs tracking-wider border-b border-zinc-300 dark:border-zinc-700 pb-1">
                  Hardware, Implants &amp; Embolics Deployed (उपयुक्त हार्डवेयर एवं उपकरण):
                </h3>
                <div className="p-3 bg-zinc-50 dark:bg-zinc-900/60 print:bg-transparent border border-zinc-200 dark:border-zinc-750 rounded-lg text-xs space-y-1 text-zinc-800 dark:text-zinc-200 print:text-black">
                  <p>• <strong>Primary Vascular Access Kit:</strong> {currentSheath} + {selectedProcedure.cathetersAndWires || "Standard Guide Wires & Diagnostic Catheters"}</p>
                  {selectedProcedure.microcatheterSystem && (
                    <p>• <strong>Microcatheter System:</strong> {selectedProcedure.microcatheterSystem}</p>
                  )}
                  {selectedProcedure.embolicOrImplants && (
                    <p>• <strong>Implants / Embolics / Stents:</strong> {selectedProcedure.embolicOrImplants}</p>
                  )}
                  <p>• <strong>Hemostasis &amp; Closure:</strong> Sterile compression dressing / manual pressure hemostasis confirmed intact.</p>
                </div>
              </div>

              {/* Radiation Metrics & Contrast Agent Box */}
              <div className="grid grid-cols-3 gap-2 text-xs border border-zinc-200 dark:border-zinc-700 rounded-lg p-2.5 bg-zinc-50/70 dark:bg-zinc-900/50 print:bg-transparent">
                <div>
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block font-semibold">Fluoroscopy Time:</span>
                  <strong className="text-zinc-950 dark:text-zinc-100 print:text-black">{currentFluoroTime} minutes</strong>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block font-semibold">Radiation DAP:</span>
                  <strong className="text-zinc-950 dark:text-zinc-100 print:text-black">{currentDap} Gy·cm²</strong>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block font-semibold">Contrast Media &amp; Vol:</span>
                  <strong className="text-zinc-950 dark:text-zinc-100 print:text-black">{currentContrast}</strong>
                </div>
              </div>

              {/* Immediate Post-Operative Ward Handoff & Orders */}
              <div className="space-y-1.5 text-xs">
                <h3 className="font-bold text-zinc-950 dark:text-zinc-100 print:text-black uppercase text-xs tracking-wider border-b border-zinc-300 dark:border-zinc-700 pb-1">
                  Post-Operative Ward Handoff &amp; Nursing Orders (पोस्ट-ऑपरेटिव निर्देश):
                </h3>
                <div className="p-3.5 bg-zinc-50 dark:bg-zinc-900/60 print:bg-transparent rounded-lg border border-zinc-200 dark:border-zinc-750 space-y-1.5 text-zinc-800 dark:text-zinc-200 print:text-black text-xs sm:text-[12.5px]">
                  {buildAdviceBullets(selectedProcedure).map((bullet, idx) => {
                    const isRedFlag = bullet.startsWith("Red Flags:");
                    return (
                      <div key={idx} className="flex items-start gap-2">
                        <span className={isRedFlag ? "text-red-600 font-bold" : "text-zinc-600 dark:text-zinc-400 font-bold"}>•</span>
                        <div className={isRedFlag ? "text-red-700 dark:text-red-400 font-semibold" : ""}>
                          {bullet}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Institutional Operator & Supervising Faculty Sign-Off Block */}
              <div className="border border-zinc-400 dark:border-zinc-600 print:border-black rounded-lg p-4 bg-white dark:bg-zinc-900 print:bg-transparent mt-3 break-inside-avoid print-break-inside-avoid">
                <h4 className="font-bold text-center text-xs uppercase tracking-wider text-zinc-950 dark:text-zinc-100 print:text-black mb-6 border-b border-zinc-200 dark:border-zinc-700 pb-1">
                  OPERATING SURGEON &amp; SUPERVISING FACULTY CERTIFICATION
                </h4>

                <div className="grid grid-cols-2 gap-6 sm:gap-12 text-xs">
                  <div className="border-t border-zinc-800 dark:border-zinc-200 print:border-black pt-2 min-h-[85px] flex flex-col justify-between">
                    <div>
                      <span className="font-bold text-zinc-950 dark:text-zinc-100 print:text-black block">Primary Operating Surgeon:</span>
                      <span className="text-[11px] text-zinc-600 dark:text-zinc-400 print:text-zinc-700">(Signature &amp; Timestamp)</span>
                    </div>
                    <div className="text-[11px] text-zinc-800 dark:text-zinc-200 print:text-black mt-4">
                      <div><strong>{primaryOperator}</strong></div>
                      <div>Date &amp; Time: {dateOfProcedure} {procedureTime}</div>
                    </div>
                  </div>

                  <div className="border-t border-zinc-800 dark:border-zinc-200 print:border-black pt-2 min-h-[85px] flex flex-col justify-between">
                    <div>
                      <span className="font-bold text-zinc-950 dark:text-zinc-100 print:text-black block">Supervising Consultant:</span>
                      <span className="text-[11px] text-zinc-600 dark:text-zinc-400 print:text-zinc-700">(Signature &amp; Official Seal)</span>
                    </div>
                    <div className="text-[11px] text-zinc-800 dark:text-zinc-200 print:text-black mt-4">
                      <div><strong>{supervisingConsultant}</strong></div>
                      <div>Dept of Interventional Radiology, SMS Hospital, Jaipur</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: OPERATIVE SUMMARY (Executive Synopsis for Rounds & WhatsApp) */}
          {activeTab === "SUMMARY" && (
            <div className="bg-white dark:bg-[#1E1E1E] border border-[#DADCE0] dark:border-[#3C4043] rounded-2xl p-5 sm:p-7 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                  <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                    Executive Operative Summary (Clinical Handoff &amp; Rounds)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopySummary}
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-lg hover:bg-blue-100 flex items-center gap-1.5 transition-colors cursor-pointer border border-blue-200 dark:border-blue-800"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Summary</span>
                  </button>
                  <button
                    onClick={() => handleShare(operativeSummaryText, `Operative Summary - ${patientName}`)}
                    className="px-3 py-1 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold rounded-lg hover:bg-emerald-100 flex items-center gap-1.5 transition-colors cursor-pointer border border-emerald-200 dark:border-emerald-800"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                  <button
                    onClick={handlePrint}
                    className="px-3 py-1 bg-zinc-800 text-white text-xs font-semibold rounded-lg hover:bg-zinc-900 flex items-center gap-1.5 cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print</span>
                  </button>
                </div>
              </div>

              {/* Summary Card */}
              <div className="p-4 bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-zinc-950 dark:text-zinc-50">{selectedProcedure.title}</h3>
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 text-[10px] font-bold rounded-full">
                    100% Technical Success
                  </span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-300">
                  Patient: <strong>{patientName}</strong> ({age} Y / {gender}) • CR: <strong>{crNumber}</strong> • Bed: {ipdBed}
                </p>
                <p className="text-xs text-zinc-600 dark:text-zinc-300">
                  Operators: {primaryOperator} | Consultant: {supervisingConsultant}
                </p>
              </div>

              {/* Raw Formatted Text Area for Quick Inspection & Copy */}
              <div>
                <span className="text-[10px] font-bold uppercase text-zinc-500 dark:text-zinc-400 tracking-wider block mb-1">
                  Formatted Text Preview (WhatsApp &amp; Rounds Ready):
                </span>
                <pre className="p-3 bg-zinc-900 text-zinc-100 rounded-xl font-mono text-[11px] whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto select-all">
                  {operativeSummaryText}
                </pre>
              </div>
            </div>
          )}

          {/* TAB 3: BILINGUAL CONSENT */}
          {activeTab === "CONSENT" && consentTemplate && (
            <div className="bg-white dark:bg-[#1E1E1E] border border-[#DADCE0] dark:border-[#3C4043] rounded-2xl p-5 sm:p-7 shadow-xs space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800">
                <div>
                  <h3 className="text-sm font-bold text-zinc-950 dark:text-zinc-100">{consentTemplate.nameEn}</h3>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-0.5">{consentTemplate.nameHi}</p>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-[10px] font-bold border border-blue-200 dark:border-blue-800">
                  NMC &amp; Supreme Court Standard
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <div className="font-bold text-zinc-900 dark:text-zinc-100 mb-1">Clinical Indication (English):</div>
                  <p className="text-zinc-700 dark:text-zinc-300">{consentTemplate.indicationEn}</p>
                </div>
                <div className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <div className="font-bold text-zinc-900 dark:text-zinc-100 mb-1">रोग व कारण (हिंदी):</div>
                  <p className="text-zinc-700 dark:text-zinc-300">{consentTemplate.indicationHi}</p>
                </div>
              </div>

              <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs space-y-1">
                <div className="font-bold text-emerald-800 dark:text-emerald-300">Expected Clinical Benefits (प्रत्याशित लाभ):</div>
                <ul className="list-disc pl-4 space-y-0.5 text-emerald-850 dark:text-emerald-200">
                  {consentTemplate.benefitsEn.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 rounded-xl text-xs space-y-1">
                <div className="font-bold text-red-800 dark:text-red-300">Specific Risks &amp; Complications (जोखिम):</div>
                <ul className="list-disc pl-4 space-y-0.5 text-red-850 dark:text-red-200">
                  {consentTemplate.specificRisksEn.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 4: CLINICAL PROTOCOL, HARDWARE & POST-OP ORDERS */}
          {activeTab === "PROTOCOL" && (
            <div className="bg-white dark:bg-[#1E1E1E] border border-[#DADCE0] dark:border-[#3C4043] rounded-2xl p-5 sm:p-7 shadow-xs space-y-4">
              <div className="pb-3 border-b border-zinc-200 dark:border-zinc-800">
                <h3 className="text-sm font-bold text-zinc-950 dark:text-zinc-100">
                  Clinical Hardware Requisition &amp; Nursing Post-Op Plan
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Standardized equipment list and monitoring protocol for {selectedProcedure.title}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                  <div className="font-bold text-zinc-950 dark:text-zinc-100">Vascular Access &amp; Sheath</div>
                  <div><span className="text-zinc-500">Access Site: </span><span className="font-medium">{selectedProcedure.accessSiteDefault}</span></div>
                  <div><span className="text-zinc-500">Sheath: </span><span className="font-medium">{selectedProcedure.sheathDefault}</span></div>
                  <div><span className="text-zinc-500">Sedation: </span><span className="font-medium">{selectedProcedure.sedation}</span></div>
                </div>

                <div className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                  <div className="font-bold text-zinc-950 dark:text-zinc-100">Catheters &amp; Embolic Hardware</div>
                  <div><span className="text-zinc-500">Catheters/Wires: </span><span className="font-medium">{selectedProcedure.cathetersAndWires}</span></div>
                  {selectedProcedure.microcatheterSystem && (
                    <div><span className="text-zinc-500">Microcatheter: </span><span className="font-medium text-blue-600">{selectedProcedure.microcatheterSystem}</span></div>
                  )}
                  {selectedProcedure.embolicOrImplants && (
                    <div><span className="text-zinc-500">Implants/Embolics: </span><span className="font-medium text-emerald-600">{selectedProcedure.embolicOrImplants}</span></div>
                  )}
                </div>
              </div>

              <div className="p-3.5 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 text-xs space-y-2">
                <div className="font-bold text-zinc-950 dark:text-zinc-100 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>Mandatory Ward Post-Operative Orders</span>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-zinc-700 dark:text-zinc-300">
                  <li><strong>Immobilization:</strong> Strict flat bed rest for {selectedProcedure.postOpCare.immobilizationHours} hours. {selectedProcedure.postOpCare.immobilizationInstructions}</li>
                  <li><strong>Hematoma Surveillance:</strong> {selectedProcedure.postOpCare.hematomaChecks}</li>
                  <li><strong>Hydration:</strong> {selectedProcedure.postOpCare.hydrationProtocol}</li>
                  <li><strong>Medications Kit:</strong> {selectedProcedure.postOpCare.medications.join(", ")}</li>
                  <li className="text-red-700 dark:text-red-400 font-semibold"><strong>Emergency Red Flags:</strong> {selectedProcedure.postOpCare.redFlags.join("; ")}</li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 5: LINKED RISK SCORE CALCULATOR */}
          {activeTab === "CALCULATOR" && linkedCalculator && (
            <div className="bg-white dark:bg-[#1E1E1E] border border-[#DADCE0] dark:border-[#3C4043] rounded-2xl p-5 sm:p-7 shadow-xs space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-blue-600" />
                  <h3 className="text-sm font-bold text-zinc-950 dark:text-zinc-100">{linkedCalculator.name}</h3>
                </div>
                <span className="text-[11px] font-semibold text-blue-600">{linkedCalculator.guidelineAuthority}</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">{linkedCalculator.summary}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
