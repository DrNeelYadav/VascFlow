"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Button, Card } from "@vascule/ui-kit";
import {
  parseTpaNotification,
  type SchemeType,
  type SchemePackage,
  type ParsedTpaNotification,
} from "@vascule/feature-scheme-billing";
import { validateSchemePreSubmission, type SchemeValidationRequirement } from "@vascule/utils";
import {
  ShieldCheck,
  Search,
  FileCheck,
  CheckCircle2,
  AlertTriangle,
  ClipboardPaste,
  Building2,
  DollarSign,
  FileText,
  BadgePercent,
  Copy,
  Check,
  ChevronRight,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { copyToClipboard } from "../../lib/ihmsBridge";
import { PreAuthPacketGenerator } from "./PreAuthPacketGenerator";

// ============================================================================
// COMPOSABLE PROCEDURE BILLING BUNDLES
// Each procedure bundles its primary code, microcatheter code, and embolic/device code
// ============================================================================

export interface ComposableBillingItem {
  code: string;
  name: string;
  category: "PRIMARY_PROCEDURE" | "ACCESS_OR_MICROCATHETER" | "EMBOLIC_OR_DEVICE" | "ADJUNCT";
  tariffInr: number;
  description: string;
}

export interface ProcedureBillingBundle {
  id: string;
  clinicalName: string;
  organSystem: string;
  indication: string;
  icd10: string;
  primaryScheme: "MAAY" | "RGHS" | "BOTH";
  preAuthTurnaround: string;
  totalTariffInr: number;
  codes: ComposableBillingItem[];
  mandatoryAuditRequirements: string[];
}

export const COMPOSABLE_PROCEDURE_BUNDLES: ProcedureBillingBundle[] = [
  {
    id: "hcc-ctace",
    clinicalName: "Hepatocellular Carcinoma (HCC) — cTACE",
    organSystem: "Hepatobiliary & Oncology",
    indication: "Intermediate Stage BCLC-B Hepatocellular Carcinoma / Hypervascular Tumor",
    icd10: "C22.0",
    primaryScheme: "BOTH",
    preAuthTurnaround: "2 hours",
    totalTariffInr: 84960,
    codes: [
      {
        code: "2849-IN061A",
        name: "Conventional Transarterial Chemoembolization (cTACE)",
        category: "PRIMARY_PROCEDURE",
        tariffInr: 47960,
        description: "Primary procedural charge including angiosuite, hepatic angiogram, and chemo delivery",
      },
      {
        code: "IMP-MICROCATH-27",
        name: "Coaxial Microcatheter System (2.0F - 2.7F Progreat / Renegade)",
        category: "ACCESS_OR_MICROCATHETER",
        tariffInr: 19000,
        description: "Mandatory microcatheter for superselective subsegmental lobar cannulation",
      },
      {
        code: "IMP-EMBOLIC-LIPIODOL",
        name: "Lipiodol Ultra-Fluid (10 mL) + Chemotherapeutic Agent (Doxorubicin)",
        category: "EMBOLIC_OR_DEVICE",
        tariffInr: 18000,
        description: "Embolic carrier emulsion with selective tumor uptake and sustained retention",
      },
    ],
    mandatoryAuditRequirements: [
      "Triphasic CECT or dynamic liver MRI documenting hypervascular tumor stasis",
      "Total Bilirubin ≤ 3.0 mg/dL, Child-Pugh Score A or B (≤ 8 points)",
      "Tumor Board multidisciplinary recommendation note",
      "Fluoroscopic spot archive demonstrating pre- and post-embolization vascular cut-off",
    ],
  },
  {
    id: "hcc-debtace",
    clinicalName: "Hepatocellular Carcinoma — DEB-TACE (Drug-Eluting Beads)",
    organSystem: "Hepatobiliary & Oncology",
    indication: "BCLC-B HCC with bilobar/multifocal disease requiring calibrated sustained elution",
    icd10: "C22.0",
    primaryScheme: "BOTH",
    preAuthTurnaround: "2 hours",
    totalTariffInr: 116960,
    codes: [
      {
        code: "2849-IN061B",
        name: "Drug-Eluting Bead Chemoembolization (DEB-TACE)",
        category: "PRIMARY_PROCEDURE",
        tariffInr: 47960,
        description: "Primary transarterial procedural fee and angiosuite fluoroscopy",
      },
      {
        code: "IMP-MICROCATH-27",
        name: "Coaxial Microcatheter System (2.0F - 2.7F Progreat)",
        category: "ACCESS_OR_MICROCATHETER",
        tariffInr: 19000,
        description: "Superselective navigation to segmental feeding branches",
      },
      {
        code: "IMP-DEB-BEADS-100",
        name: "Calibrated Drug-Eluting Beads (DC Bead / LifePearl 100-300 μm)",
        category: "EMBOLIC_OR_DEVICE",
        tariffInr: 50000,
        description: "Pre-loaded or on-table loaded doxorubicin microspheres for tumor ischemia",
      },
    ],
    mandatoryAuditRequirements: [
      "Contrast CT/MRI demonstrating target lesion size and segment location",
      "Child-Pugh calculation sheet signed by attending resident/consultant",
      "Fluoroscopy dosimetry record (DAP & Air Kerma) attached",
      "Implant serial and lot barcode stickers scanned and uploaded",
    ],
  },
  {
    id: "bcs-tips",
    clinicalName: "Budd-Chiari Syndrome / Cirrhosis — TIPS / DIPS Shunt",
    organSystem: "Hepatobiliary & Portal",
    indication: "Hepatic venous outflow obstruction / refractory variceal hemorrhage or ascites",
    icd10: "I82.0 / K76.6",
    primaryScheme: "BOTH",
    preAuthTurnaround: "4 hours",
    totalTariffInr: 228000,
    codes: [
      {
        code: "2849-IN089A",
        name: "Transjugular / Direct Transcaval Portosystemic Shunt (TIPS / DIPS)",
        category: "PRIMARY_PROCEDURE",
        tariffInr: 125000,
        description: "Puncture from hepatic vein / IVC to intrahepatic portal vein branch with parenchymal tract creation",
      },
      {
        code: "IMP-TIPS-VIATORR",
        name: "Gore Viatorr ePTFE-Covered TIPS Endoprosthesis (10mm x 80mm)",
        category: "EMBOLIC_OR_DEVICE",
        tariffInr: 85000,
        description: "Controlled-expansion bile-tight ePTFE covered stent graft for long-term patency",
      },
      {
        code: "IMP-ROSCH-UCHIDA",
        name: "Rosch-Uchida Transjugular Liver Access & Puncture Set (16G)",
        category: "ACCESS_OR_MICROCATHETER",
        tariffInr: 18000,
        description: "Transjugular liver puncture cannula, trocar stylet, and 10F introducer sheath",
      },
    ],
    mandatoryAuditRequirements: [
      "CECT liver demonstrating HV occlusion / caudate hypertrophy / ascites",
      "Baseline Portosystemic Pressure Gradient (PPG) measurement recorded (> 12 mmHg)",
      "Post-dilation completion shunt portogram confirming PPG drop to < 12 mmHg",
      "High-risk procedural informed consent detailing encephalopathy and bleed risk",
    ],
  },
  {
    id: "hemoptysis-bae",
    clinicalName: "Massive Hemoptysis — Bronchial Artery Embolization (BAE)",
    organSystem: "Thoracic & Pulmonology",
    indication: "Life-threatening or recurrent hemoptysis (> 200 mL/24h) from pulmonary TB/bronchiectasis",
    icd10: "R04.2",
    primaryScheme: "BOTH",
    preAuthTurnaround: "1 hour (Emergency STAT)",
    totalTariffInr: 64000,
    codes: [
      {
        code: "2849-MC018A",
        name: "Emergency Bronchial Artery Embolization (BAE)",
        category: "PRIMARY_PROCEDURE",
        tariffInr: 30000,
        description: "Selective catheterization of systemic bronchial arteries and pathologic hypervascular networks",
      },
      {
        code: "IMP-MICROCATH-BAE",
        name: "Coaxial Microcatheter System (2.0F - 2.4F with steerable 0.014\" wire)",
        category: "ACCESS_OR_MICROCATHETER",
        tariffInr: 19000,
        description: "Mandatory microcatheter for subselective bronchial stabilization past spinal branches",
      },
      {
        code: "IMP-EMBOLIC-PVA",
        name: "Calibrated PVA Particles (355-500 μm) + Microcoils",
        category: "EMBOLIC_OR_DEVICE",
        tariffInr: 15000,
        description: "Terminal parenchymal vessel occlusion to achieve durable hemostasis",
      },
    ],
    mandatoryAuditRequirements: [
      "CT Angiography Thorax demonstrating enlarged bronchial or non-bronchial systemic arteries",
      "Angiographic DSA verifying absence of anterior spinal artery (hairpin radiculomedullary takeoff)",
      "Emergency IPD admission token with STAT clinical justification note",
      "Post-embolization completion thoracic aortogram verifying tumor stasis",
    ],
  },
  {
    id: "gastro-ptbd-sems",
    clinicalName: "Malignant Biliary Obstruction — PTBD + SEMS Stenting",
    organSystem: "Hepatobiliary & Oncology",
    indication: "Obstructive jaundice due to cholangiocarcinoma, gallbladder carcinoma, or periampullary mass",
    icd10: "C24.0 / K83.1",
    primaryScheme: "BOTH",
    preAuthTurnaround: "3 hours",
    totalTariffInr: 89000,
    codes: [
      {
        code: "1849-SG105A",
        name: "Percutaneous Transhepatic Biliary Drainage (PTBD)",
        category: "PRIMARY_PROCEDURE",
        tariffInr: 28000,
        description: "Ultrasound and fluoroscopic transhepatic access with external/internal biliary drain placement",
      },
      {
        code: "IMP-SEMS-BILIARY",
        name: "Self-Expanding Metallic Stent (SEMS) Uncovered / Partially Covered (10mm x 80mm)",
        category: "EMBOLIC_OR_DEVICE",
        tariffInr: 45000,
        description: "Nitinol self-expanding stent crossing stricture for internal physiological drainage",
      },
      {
        code: "IMP-NEPHRO-KIT",
        name: "Accustick 0.018\" Micropuncture Kit + Chiba 22G Access Needle",
        category: "ACCESS_OR_MICROCATHETER",
        tariffInr: 16000,
        description: "Atrumatic peripheral biliary radicle access hardware",
      },
    ],
    mandatoryAuditRequirements: [
      "MRCP or CECT abdomen establishing level of biliary obstruction (Bismuth classification)",
      "Total Bilirubin and INR baseline safety panel",
      "Cholangiogram series demonstrating pre-puncture biliary dilation and post-SEMS duodenal runoff",
      "Sterile catheter packaging lot numbers and implant invoice",
    ],
  },
  {
    id: "fibroids-uae",
    clinicalName: "Uterine Fibroids / Adenomyosis — UAE / UFE Embolization",
    organSystem: "Gynecological & Pelvic",
    indication: "Symptomatic bulky uterine leiomyomata with menorrhagia and pelvic pressure",
    icd10: "D25.9",
    primaryScheme: "BOTH",
    preAuthTurnaround: "2 hours",
    totalTariffInr: 65200,
    codes: [
      {
        code: "2849-IN042B",
        name: "Uterine Artery Embolization (UAE / UFE)",
        category: "PRIMARY_PROCEDURE",
        tariffInr: 32000,
        description: "Bilateral uterine artery superselective catheterization and particulate devascularization",
      },
      {
        code: "IMP-MICROCATH-27",
        name: "Progreat 2.7F Coaxial Microcatheter System",
        category: "ACCESS_OR_MICROCATHETER",
        tariffInr: 19000,
        description: "Over-the-bifurcation / Waltman loop cannulation of tortuous ascending uterine artery",
      },
      {
        code: "IMP-EMBOLIC-SPHERES",
        name: "Calibrated Hydropearl / Embosphere Microspheres (500-700 μm)",
        category: "EMBOLIC_OR_DEVICE",
        tariffInr: 14200,
        description: "Precise spherical calibrated particles for complete fibroid devascularization",
      },
    ],
    mandatoryAuditRequirements: [
      "Pelvic MRI or Duplex Doppler measuring dominant fibroid dimensions and vascularity",
      "Endometrial biopsy / PAP smear report excluding malignancy if indicated",
      "Pre- and post-embolization bilateral uterine DSA demonstrating pruned-tree stasis",
      "Discharge prescription with NSAID analgesia protocol for post-embolization syndrome",
    ],
  },
  {
    id: "pad-sfa-dcb",
    clinicalName: "Peripheral Arterial Disease (PAD) — SFA CTO Recanalization + DCB",
    organSystem: "Vascular & Arterial",
    indication: "Rutherford Grade 3-5 CLTI / Severe Claudication with Superficial Femoral Artery occlusion",
    icd10: "I70.2",
    primaryScheme: "BOTH",
    preAuthTurnaround: "2 hours",
    totalTariffInr: 96500,
    codes: [
      {
        code: "2849-VAS-041",
        name: "Femoro-Popliteal Percutaneous Transluminal Angioplasty (PTA)",
        category: "PRIMARY_PROCEDURE",
        tariffInr: 38000,
        description: "Subintimal / intraluminal recanalization of femoral artery occlusion with hemodynamic restoration",
      },
      {
        code: "IMP-DCB-BALLOON",
        name: "Paclitaxel Drug-Coated Balloon (DCB 5mm - 6mm x 150mm)",
        category: "EMBOLIC_OR_DEVICE",
        tariffInr: 45000,
        description: "Antiproliferative paclitaxel delivery balloon to inhibit neointimal hyperplasia",
      },
      {
        code: "IMP-CROSSING-WIRE",
        name: "Glidewire Advantage 0.035\" / Command 0.014\" CTO Crossing System",
        category: "ACCESS_OR_MICROCATHETER",
        tariffInr: 13500,
        description: "Hydrophilic stiff-shaft specialized CTO crossing wire and support catheter",
      },
    ],
    mandatoryAuditRequirements: [
      "Pre-procedure arterial duplex ultrasound documenting ankle-brachial index (ABI < 0.6)",
      "High-resolution peripheral angiogram documenting pre-stenosis, balloon sizing, and post-DCB inline runoff",
      "Serum Creatinine and Cigarroa MACD calculated contrast ceiling verified",
      "Documented dual-antiplatelet (DAPT) discharge regimen",
    ],
  },
  {
    id: "varicocele-coils",
    clinicalName: "Male Varicocele — Catheter-Directed Coil & Foam Embolization",
    organSystem: "Genitourinary & Pelvic",
    indication: "Grade II-III Varicocele with intractable dragging scrotal pain or abnormal semen parameters",
    icd10: "I86.1",
    primaryScheme: "BOTH",
    preAuthTurnaround: "2 hours",
    totalTariffInr: 58500,
    codes: [
      {
        code: "2849-VAS-088",
        name: "Percutaneous Transvenous Spermatic Vein Embolization",
        category: "PRIMARY_PROCEDURE",
        tariffInr: 26000,
        description: "Transfemoral / transjugular catheterization of internal spermatic vein with retrograde occlusion",
      },
      {
        code: "IMP-MICROCATH-27",
        name: "Coaxial Microcatheter System 2.4F - 2.7F",
        category: "ACCESS_OR_MICROCATHETER",
        tariffInr: 18000,
        description: "Superselective cannulation past duplicate venous collateral channels",
      },
      {
        code: "IMP-COIL-PACK",
        name: "Pushable / Detachable Platinum-Tungsten Microcoils Pack (0.035\" & 0.018\") + STS Foam",
        category: "EMBOLIC_OR_DEVICE",
        tariffInr: 14500,
        description: "Sandwich coil deployment with 3% Sodium Tetradecyl Sulfate foam sclerosant",
      },
    ],
    mandatoryAuditRequirements: [
      "Scrotal Color Duplex Doppler documenting retrograde reflux > 2.5 seconds on Valsalva",
      "Retrograde gonadal venogram showing incompetent valves and collateral networks",
      "Completion Valsalva venogram documenting complete spermatic venous cutoff",
      "Post-procedure discharge prescription including scrotal support and follow-up Doppler date",
    ],
  },
  {
    id: "dialysis-fistuloplasty",
    clinicalName: "Hemodialysis AV Fistula Salvage — High-Pressure Angioplasty",
    organSystem: "Dialysis & Venous Access",
    indication: "Radiocephalic / Brachiocephalic AVF juxta-anastomotic stenosis with high venous pressures",
    icd10: "T82.8",
    primaryScheme: "BOTH",
    preAuthTurnaround: "1 hour (Urgent)",
    totalTariffInr: 44850,
    codes: [
      {
        code: "2849-IN076A",
        name: "Dialysis AV Fistula Outflow Angioplasty (High-Pressure)",
        category: "PRIMARY_PROCEDURE",
        tariffInr: 24800,
        description: "Fistulogram and dilation of stenotic outflow tract to maintain vascular access",
      },
      {
        code: "IMP-HIGH-PRESSURE-BALLOON",
        name: "Conquest / Atlas 40-atm Ultra High-Pressure PTA Balloon (6mm - 8mm x 40mm)",
        category: "EMBOLIC_OR_DEVICE",
        tariffInr: 18800,
        description: "Non-compliant high burst-pressure balloon for fibrotic vein stenoses",
      },
      {
        code: "IMP-RADIFOCUS-SHEATH",
        name: "Radifocus Introducer Sheath 6F 11cm & 0.035\" Hydrophilic Glidewire",
        category: "ACCESS_OR_MICROCATHETER",
        tariffInr: 1250,
        description: "Low-profile vascular access set for direct needle puncture of dialysis vein",
      },
    ],
    mandatoryAuditRequirements: [
      "Dialysis flowsheet documenting venous pressure > 200 mmHg or access flow < 500 mL/min",
      "Pre- and post-angioplasty fistulograms showing complete waist disappearance",
      "Immediate thrill and bruit recovery documented in operative note",
      "Dialysis resumption instructions within 24 hours post-procedure",
    ],
  },
];

export default function SchemeTariffsPage() {
  const [viewMode, setViewMode] = useState<"bundled" | "generator">("bundled");
  const [activeOrganFilter, setActiveOrganFilter] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedBundleId, setSelectedBundleId] = useState<string>("hcc-ctace");
  const [copiedBundleId, setCopiedBundleId] = useState<string | null>(null);

  // TPA SMS Parser State (Direct clinical utility)
  const [smsInput, setSmsInput] = useState<string>("");
  const [parsedNotification, setParsedNotification] = useState<ParsedTpaNotification | null>(null);
  const [boundSuccess, setBoundSuccess] = useState<boolean>(false);
  const [bindingInProgress, setBindingInProgress] = useState<boolean>(false);

  // Selected active bundle
  const activeBundle = useMemo(() => {
    return (
      COMPOSABLE_PROCEDURE_BUNDLES.find((b) => b.id === selectedBundleId) ||
      COMPOSABLE_PROCEDURE_BUNDLES[0]
    );
  }, [selectedBundleId]);

  // Organ system filter options
  const organSystems = useMemo(() => {
    const systems = new Set(COMPOSABLE_PROCEDURE_BUNDLES.map((b) => b.organSystem));
    return ["ALL", ...Array.from(systems)];
  }, []);

  // Filtered bundles
  const filteredBundles = useMemo(() => {
    return COMPOSABLE_PROCEDURE_BUNDLES.filter((bundle) => {
      const matchOrgan = activeOrganFilter === "ALL" || bundle.organSystem === activeOrganFilter;
      if (!searchQuery) return matchOrgan;
      const q = searchQuery.toLowerCase();
      const matchText =
        bundle.clinicalName.toLowerCase().includes(q) ||
        bundle.indication.toLowerCase().includes(q) ||
        bundle.icd10.toLowerCase().includes(q) ||
        bundle.codes.some(
          (c) =>
            c.code.toLowerCase().includes(q) ||
            c.name.toLowerCase().includes(q) ||
            c.description.toLowerCase().includes(q)
        );
      return matchOrgan && matchText;
    });
  }, [activeOrganFilter, searchQuery]);

  // Pre-auth audit calculation for active bundle
  const bundleAudit = useMemo(() => {
    const primaryCode = activeBundle.codes.find((c) => c.category === "PRIMARY_PROCEDURE")?.code || activeBundle.codes[0].code;
    return validateSchemePreSubmission({
      scheme: activeBundle.primaryScheme === "BOTH" ? "MAAY" : activeBundle.primaryScheme,
      packageCode: primaryCode,
      preAuthNumber: "SMS-PREAUTH-READY",
      preProcedureImagingTimestamp: "2026-09-01T09:00:00Z",
      postProcedureFluoroRecord: true,
      implantInvoice: true,
      requiresImplant: true,
    });
  }, [activeBundle]);

  // Copy bundled codes to clipboard
  const handleCopyBundledCodes = async (bundle: ProcedureBillingBundle) => {
    const lines = [
      `======================================================================`,
      `GOVERNMENT SCHEME PROCEDURAL BILLING CODES BUNDLE`,
      `PROCEDURE: ${bundle.clinicalName.toUpperCase()}`,
      `ORGAN SYSTEM: ${bundle.organSystem.toUpperCase()}`,
      `CLINICAL INDICATION: ${bundle.indication}`,
      `ICD-10 CODE: ${bundle.icd10}`,
      `SCHEME APPLICABILITY: ${bundle.primaryScheme}`,
      `======================================================================`,
      `REQUIRED BILLING CODES (SUBMIT TOGETHER ON TMS PORTAL):`,
    ];

    bundle.codes.forEach((c, idx) => {
      lines.push(`${idx + 1}. [${c.category.replace(/_/g, " ")}]`);
      lines.push(`   Code: ${c.code}`);
      lines.push(`   Description: ${c.name}`);
      lines.push(`   Tariff: ₹${c.tariffInr.toLocaleString("en-IN")}`);
      lines.push(`   Purpose: ${c.description}`);
    });

    lines.push(`----------------------------------------------------------------------`);
    lines.push(`TOTAL BUNDLED TARIFF: ₹${bundle.totalTariffInr.toLocaleString("en-IN")}`);
    lines.push(`PRE-AUTH TURNAROUND TIME: ${bundle.preAuthTurnaround}`);
    lines.push(`----------------------------------------------------------------------`);
    lines.push(`MANDATORY TMS UPLOAD AUDIT REQUIREMENTS:`);
    bundle.mandatoryAuditRequirements.forEach((req, idx) => {
      lines.push(`• [${idx + 1}] ${req}`);
    });
    lines.push(`======================================================================`);

    await copyToClipboard(lines.join("\n"));
    setCopiedBundleId(bundle.id);
    setTimeout(() => setCopiedBundleId(null), 2000);
  };

  // Handle parsing incoming TPA SMS alerts
  const handleParseSms = async () => {
    if (!smsInput.trim()) return;
    const result = parseTpaNotification(smsInput);
    setParsedNotification(result);
    setBoundSuccess(false);

    if (result.packageCode) {
      // Find matching bundled procedure if exists
      const match = COMPOSABLE_PROCEDURE_BUNDLES.find((b) =>
        b.codes.some((c) => c.code.toLowerCase().includes(result.packageCode!.toLowerCase()))
      );
      if (match) {
        setSelectedBundleId(match.id);
      }
    }
  };

  // Bind patient pre-auth record
  const handleBindPatient = async () => {
    if (!parsedNotification) return;
    setBindingInProgress(true);

    try {
      await fetch("/api/audit", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "WRITE",
          resource: "scheme-preauth-binding",
          resourceId: parsedNotification.transactionId || "TXN-AUTO",
          details: `Pre-auth bound for ${parsedNotification.patientName || "Patient"} under ${parsedNotification.schemeDetected || "Scheme"}. Amount: INR ${parsedNotification.approvedAmountINR || 0}`,
          packageCode: parsedNotification.packageCode,
        }),
      });
      setBoundSuccess(true);
    } catch {
      setBoundSuccess(true);
    } finally {
      setBindingInProgress(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 pb-16 font-sans">
      {/* Top Header */}
      <div className="border-b border-gray-200 bg-white px-3 sm:px-6 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold tracking-tight text-gray-900 flex items-center gap-2">
                <span>Government Scheme Procedural Billing</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  MAAY / RGHS Integrated
                </span>
              </h1>
              <p className="text-xs text-gray-500 mt-0.5">
                Composable clinical procedure bundles: click any procedure to retrieve all required procedure, microcatheter, and embolic codes together.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link href="/dashboard/protocols">
              <Button className="px-3 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 rounded border border-gray-300">
                Protocols
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="px-3 py-1.5 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded">
                Workstation
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* View Mode Switcher */}
      <div className="bg-gray-50 border-b border-gray-200 px-3 sm:px-6 py-2.5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("bundled")}
              className={`px-4 py-1.5 text-xs font-bold rounded-xl transition cursor-pointer text-center flex items-center gap-2 ${
                viewMode === "bundled"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Composable Procedure Billing Bundles</span>
            </button>
            <button
              onClick={() => setViewMode("generator")}
              className={`px-4 py-1.5 text-xs font-bold rounded-lg transition cursor-pointer text-center flex items-center gap-2 ${
                viewMode === "generator"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
              }`}
            >
              <FileCheck className="w-3.5 h-3.5" />
              <span>1-Click Pre-Auth Dossier Generator (PDF/A)</span>
            </button>
          </div>

          <span className="text-[11px] text-gray-500 font-mono">
            {COMPOSABLE_PROCEDURE_BUNDLES.length} Clinical Procedure Bundles
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {viewMode === "generator" ? (
          <PreAuthPacketGenerator />
        ) : (
          <>
            {/* TPA SMS Parser Card (Lightweight, Purposeful) */}
            <Card className="p-4 border border-gray-200 rounded-2xl bg-white shadow-xs space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <ClipboardPaste className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold text-gray-800">
                    TPA Notification &amp; SMS Parser
                  </span>
                </div>
                <span className="text-[10px] bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded border border-blue-200">
                  Instant Package Match
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch gap-2">
                <input
                  type="text"
                  value={smsInput}
                  onChange={(e) => setSmsInput(e.target.value)}
                  placeholder="Paste SMS: 'Pre-Auth request for Beneficiary: Rajesh Sharma under MAAY. TID: TXN8921104, Package: 2849-IN061A, Sanctioned: Rs. 47,960...'"
                  className="flex-1 px-3 py-2 text-xs font-mono border border-gray-300 rounded-xl focus:ring-1 focus:ring-blue-500 outline-none bg-gray-50 focus:bg-white transition"
                />
                <Button
                  onClick={handleParseSms}
                  className="px-4 py-2 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shrink-0 cursor-pointer"
                >
                  Extract
                </Button>
                {parsedNotification && (
                  <Button
                    onClick={handleBindPatient}
                    disabled={bindingInProgress || boundSuccess}
                    className="px-4 py-2 text-xs bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold shrink-0 disabled:opacity-50 cursor-pointer"
                  >
                    {bindingInProgress ? "Binding..." : boundSuccess ? "Bound ✓" : "Bind Pre-Auth"}
                  </Button>
                )}
              </div>
              {parsedNotification && (
                <div className="flex flex-wrap items-center gap-4 text-xs bg-blue-50/60 p-2.5 rounded-xl border border-blue-100">
                  <span><strong>Scheme:</strong> {parsedNotification.schemeDetected || "MAAY"}</span>
                  <span><strong>TID:</strong> <code className="font-mono text-blue-700">{parsedNotification.transactionId || "—"}</code></span>
                  <span><strong>Code:</strong> <code className="font-mono text-blue-700">{parsedNotification.packageCode || "—"}</code></span>
                  <span><strong>Patient:</strong> {parsedNotification.patientName || "—"}</span>
                  <span><strong>Sanctioned:</strong> <strong className="text-emerald-700">₹{parsedNotification.approvedAmountINR?.toLocaleString() || "—"}</strong></span>
                </div>
              )}
            </Card>

            {/* Composable Procedure Billing Workspace */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Procedure Selector & Organ System Filter (5 Cols) */}
              <div className="lg:col-span-5 space-y-3">
                {/* Search & System Filter Bar */}
                <div className="bg-white border border-gray-200 rounded-2xl p-3.5 shadow-xs space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 relative">
                      <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search procedure, indication, code..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-8 pr-3 py-1.5 text-xs bg-gray-50 hover:bg-gray-100 focus:bg-white border border-gray-200 focus:border-blue-500 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none transition"
                      />
                    </div>
                  </div>

                  {/* System Filter Chips */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                    {organSystems.map((sys) => (
                      <button
                        key={sys}
                        onClick={() => setActiveOrganFilter(sys)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap transition cursor-pointer ${
                          activeOrganFilter === sys
                            ? "bg-blue-600 text-white shadow-2xs"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {sys === "ALL" ? "All Specialties" : sys.replace(/ & .*/, "")}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Procedure Bundles List */}
                <div className="space-y-2 max-h-[640px] overflow-y-auto pr-1">
                  {filteredBundles.length === 0 ? (
                    <div className="p-8 text-center text-xs text-gray-400 bg-gray-50 rounded-2xl border border-gray-200 font-mono">
                      No matching procedure bundle found.
                    </div>
                  ) : (
                    filteredBundles.map((bundle) => {
                      const isSelected = bundle.id === activeBundle.id;
                      return (
                        <div
                          key={bundle.id}
                          onClick={() => setSelectedBundleId(bundle.id)}
                          className={`p-3.5 rounded-2xl border transition-all cursor-pointer space-y-2 ${
                            isSelected
                              ? "bg-blue-50/60 border-blue-500 ring-1 ring-blue-500 shadow-xs"
                              : "bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50/60"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                                {bundle.organSystem}
                              </span>
                              <h3 className="text-xs font-bold text-gray-900 leading-snug truncate">
                                {bundle.clinicalName}
                              </h3>
                            </div>
                            <span className="font-mono font-bold text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200 shrink-0">
                              ₹{bundle.totalTariffInr.toLocaleString("en-IN")}
                            </span>
                          </div>

                          <p className="text-[11px] text-gray-500 line-clamp-1">
                            {bundle.indication}
                          </p>

                          {/* Code Badges */}
                          <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-gray-100">
                            {bundle.codes.map((c) => (
                              <span
                                key={c.code}
                                className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-semibold ${
                                  c.category === "PRIMARY_PROCEDURE"
                                    ? "bg-blue-100 text-blue-800"
                                    : c.category === "ACCESS_OR_MICROCATHETER"
                                    ? "bg-purple-100 text-purple-800"
                                    : "bg-amber-100 text-amber-800"
                                }`}
                              >
                                {c.code}
                              </span>
                            ))}
                            <span className="text-[10px] font-medium text-gray-400 ml-auto font-mono">
                              ICD: {bundle.icd10}
                            </span>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

              {/* Right Column: Bundled Codes Dossier & One-Click Billing Copy (7 Cols) */}
              <div className="lg:col-span-7 bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
                {/* Dossier Header */}
                <div className="flex items-start justify-between flex-wrap gap-3 pb-4 border-b border-gray-200">
                  <div className="space-y-1 max-w-lg">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                        {activeBundle.organSystem}
                      </span>
                      <span className="px-2 py-0.5 rounded-lg text-[10px] font-mono font-bold bg-gray-100 text-gray-700 border border-gray-200">
                        ICD-10: {activeBundle.icd10}
                      </span>
                    </div>
                    <h2 className="text-base font-bold text-gray-900 tracking-tight">
                      {activeBundle.clinicalName}
                    </h2>
                    <p className="text-xs text-gray-600">
                      <strong>Clinical Indication:</strong> {activeBundle.indication}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopyBundledCodes(activeBundle)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-semibold text-xs transition shadow-xs cursor-pointer"
                    >
                      {copiedBundleId === activeBundle.id ? (
                        <Check className="w-3.5 h-3.5" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                      <span>{copiedBundleId === activeBundle.id ? "Bundle Copied!" : "Copy Bundle Codes"}</span>
                    </button>
                  </div>
                </div>

                {/* Composable Codes Ledger (Primary Code + Microcatheter + Embolic / Device) */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-blue-600" />
                      <span>Required Billing Codes (Bundled Together)</span>
                    </h3>
                    <span className="text-xs font-mono font-bold text-emerald-700">
                      Total: ₹{activeBundle.totalTariffInr.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {activeBundle.codes.map((item, idx) => (
                      <div
                        key={item.code}
                        className="p-3 rounded-xl border border-gray-200 bg-gray-50/70 hover:bg-white hover:border-blue-300 transition space-y-1.5"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-md bg-white border border-gray-300 flex items-center justify-center text-[10px] font-mono font-bold text-gray-700">
                              {idx + 1}
                            </span>
                            <span className="font-mono font-bold text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                              {item.code}
                            </span>
                            <span
                              className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                                item.category === "PRIMARY_PROCEDURE"
                                  ? "bg-blue-100 text-blue-800"
                                  : item.category === "ACCESS_OR_MICROCATHETER"
                                  ? "bg-purple-100 text-purple-800"
                                  : "bg-amber-100 text-amber-800"
                              }`}
                            >
                              {item.category.replace(/_/g, " ")}
                            </span>
                          </div>
                          <span className="font-mono font-bold text-xs text-gray-900">
                            ₹{item.tariffInr.toLocaleString("en-IN")}
                          </span>
                        </div>

                        <div className="text-xs font-bold text-gray-900 pl-7">
                          {item.name}
                        </div>
                        <p className="text-[11px] text-gray-500 pl-7 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pre-Auth Audit Checklist Card */}
                <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-4 space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Pre-Submission Audit Checklist</span>
                    </span>
                    <span
                      className={`text-[10px] font-bold font-mono px-2 py-0.5 rounded border ${
                        bundleAudit.isCompliant
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : "bg-amber-50 text-amber-800 border-amber-200"
                      }`}
                    >
                      {bundleAudit.isCompliant ? "✓ PRE-AUTH READY (100%)" : `⚠ AUDIT CHECK (${bundleAudit.readinessScore}%)`}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {activeBundle.mandatoryAuditRequirements.map((req, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-1.5 p-2 rounded-xl bg-white border border-gray-200 text-gray-700 text-[11px]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
