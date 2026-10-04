import { NextResponse } from "next/server";
import { MASTER_IMPLANTS } from "@vascule/feature-scheme-billing";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface SchemeSummary {
  code: "MAAY" | "RGHS" | "AB-PMJAY" | "RMRS";
  name: string;
  category: string;
  coverageCeilingINR: number;
  preAuthRequired: boolean;
  eligibleBeneficiaries: string;
  description: string;
  approvedImplants: typeof MASTER_IMPLANTS[keyof typeof MASTER_IMPLANTS][];
  tariffs: {
    packageCode: string;
    packageName: string;
    baseTariffINR: number;
    implantsIncluded: boolean;
  }[];
}

const CANONICAL_SCHEMES: SchemeSummary[] = [
  {
    code: "MAAY",
    name: "Mukhyamantri Ayushman Arogya Yojana (MAAY / Chiranjeevi)",
    category: "Rajasthan State Universal Health Scheme",
    coverageCeilingINR: 2500000,
    preAuthRequired: true,
    eligibleBeneficiaries: "All eligible families of Rajasthan holding Jan Aadhaar card",
    description: "Universal cashless health insurance scheme up to 25 Lakhs per family per year in accredited hospitals across Rajasthan.",
    approvedImplants: Object.values(MASTER_IMPLANTS),
    tariffs: [
      { packageCode: "MAAY-IR-001", packageName: "Transarterial Chemoembolization (TACE)", baseTariffINR: 35000, implantsIncluded: false },
      { packageCode: "MAAY-IR-002", packageName: "Percutaneous Transhepatic Biliary Drainage (PTBD) + SEMS", baseTariffINR: 42000, implantsIncluded: false },
      { packageCode: "MAAY-IR-003", packageName: "Transjugular Intrahepatic Portosystemic Shunt (TIPS)", baseTariffINR: 75000, implantsIncluded: false },
      { packageCode: "MAAY-IR-004", packageName: "Uterine Fibroid Embolization (UFE)", baseTariffINR: 28000, implantsIncluded: false },
      { packageCode: "MAAY-IR-005", packageName: "Bronchial Artery Embolization (BAE)", baseTariffINR: 25000, implantsIncluded: false },
    ],
  },
  {
    code: "RGHS",
    name: "Rajasthan Government Health Scheme (RGHS)",
    category: "State Government Employee & Pensioner Scheme",
    coverageCeilingINR: 1000000,
    preAuthRequired: true,
    eligibleBeneficiaries: "Rajasthan state government employees, pensioners, MLAs, and their dependents",
    description: "Cashless medical facility providing comprehensive healthcare coverage for Rajasthan state government employees and pensioners.",
    approvedImplants: Object.values(MASTER_IMPLANTS),
    tariffs: [
      { packageCode: "RGHS-IR-101", packageName: "Peripheral Angioplasty with Stenting", baseTariffINR: 45000, implantsIncluded: false },
      { packageCode: "RGHS-IR-102", packageName: "Transcatheter Arterial Embolization (TAE)", baseTariffINR: 32000, implantsIncluded: false },
      { packageCode: "RGHS-IR-103", packageName: "Biliary SEMS Placement", baseTariffINR: 38000, implantsIncluded: false },
      { packageCode: "RGHS-IR-104", packageName: "Dialysis AV Fistula Angioplasty / Venoplasty", baseTariffINR: 22000, implantsIncluded: false },
    ],
  },
  {
    code: "AB-PMJAY",
    name: "Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (AB-PMJAY)",
    category: "National Health Protection Scheme",
    coverageCeilingINR: 500000,
    preAuthRequired: true,
    eligibleBeneficiaries: "Deprived and vulnerable families as per SECC 2011 criteria",
    description: "Centrally sponsored health insurance scheme providing coverage of up to 5 Lakhs per family per year for secondary and tertiary care.",
    approvedImplants: Object.values(MASTER_IMPLANTS).filter((imp) => ["LIP_01", "MIC_01", "COIL_02", "EMB_01", "EMB_02"].includes(imp.implantCode)),
    tariffs: [
      { packageCode: "PMJAY-IR-201", packageName: "Therapeutic Embolization for Bleeding", baseTariffINR: 25000, implantsIncluded: false },
      { packageCode: "PMJAY-IR-202", packageName: "PTBD and Internal-External Drainage", baseTariffINR: 20000, implantsIncluded: false },
      { packageCode: "PMJAY-IR-203", packageName: "Catheter-Directed Thrombolysis (CDT) for DVT", baseTariffINR: 30000, implantsIncluded: false },
    ],
  },
  {
    code: "RMRS",
    name: "Rajasthan Medicare Relief Society (RMRS)",
    category: "SMS Medical College & Attached Hospitals Institutional Trust",
    coverageCeilingINR: 0,
    preAuthRequired: false,
    eligibleBeneficiaries: "Hospital walk-in and referred patients under SMS Hospital subsidized tariff",
    description: "Official institutional relief society at SMS Hospital, Jaipur with 60% Hospital Infrastructure, 15% Department Academic, and 25% Clinical Team Incentive distribution.",
    approvedImplants: Object.values(MASTER_IMPLANTS),
    tariffs: [
      { packageCode: "RMRS-IR-301", packageName: "Diagnostic Digital Subtraction Angiography (DSA)", baseTariffINR: 5000, implantsIncluded: true },
      { packageCode: "RMRS-IR-302", packageName: "Emergency Vascular Embolization", baseTariffINR: 15000, implantsIncluded: false },
      { packageCode: "RMRS-IR-303", packageName: "Central Venous Access / Chemoport Placement", baseTariffINR: 4000, implantsIncluded: false },
      { packageCode: "RMRS-IR-304", packageName: "IVC Filter Placement and Retrieval", baseTariffINR: 12000, implantsIncluded: false },
    ],
  },
];

export async function GET() {
  return NextResponse.json(CANONICAL_SCHEMES, {
    headers: { "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400" },
  });
}
