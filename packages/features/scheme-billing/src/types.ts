// ---------------------------------------------------------------------------
// Vascule OS Scheme Billing & Tariff Types (Official Rajasthan Government Masters)
// Ingested from: RGHS_PACKAGE_CODE_MASTER_07_01_2025_250208_135048.pdf
// and MAA-Yojana-New-Package-Master-MDP.pdf
// ---------------------------------------------------------------------------

import officialPackagesJson from "./officialSchemePackages.json";

export type SchemeType = "MAAY" | "RGHS";

export interface AuthorizedImplant {
  implantCode: string;
  name: string;
  category: "Lipiodol" | "Microcatheter" | "Coil" | "Vascular Plug" | "SEMS" | "Sheath" | "Embolic Agent";
  cappedPriceINR: number;
}

export interface SchemePackage {
  packageCode: string;
  packageName: string;
  scheme: SchemeType;
  specialty: string;
  baseTariffINR: number;
  nonNabhTariffINR?: number;
  implantsIncluded: boolean;
  authorizedImplants: AuthorizedImplant[];
  preAuthRequired: boolean;
  requiredDocuments: string[];
}

export interface ParsedTpaNotification {
  rawText: string;
  schemeDetected?: SchemeType;
  transactionId?: string;
  cardNumber?: string;
  packageCode?: string;
  approvedAmountINR?: number;
  patientName?: string;
  preAuthStatus: "APPROVED" | "PENDING" | "REJECTED" | "UNKNOWN";
}

// ---------------------------------------------------------------------------
// Master Implant Capping Master
// ---------------------------------------------------------------------------

export const MASTER_IMPLANTS: Record<string, AuthorizedImplant> = {
  LIP_01: { implantCode: "LIP_01", name: "Lipiodol Ultra-Fluid (10ml)", category: "Lipiodol", cappedPriceINR: 12500 },
  MIC_01: { implantCode: "MIC_01", name: "Microcatheter 2.7F Progreat/Renegade", category: "Microcatheter", cappedPriceINR: 18000 },
  MIC_02: { implantCode: "MIC_02", name: "Steerable Microcatheter Tip", category: "Microcatheter", cappedPriceINR: 24000 },
  COIL_01: { implantCode: "COIL_01", name: "Controlled Detachable Hydrogel Coil", category: "Coil", cappedPriceINR: 22000 },
  COIL_02: { implantCode: "COIL_02", name: "Pushable Platinum Fiber Coil", category: "Coil", cappedPriceINR: 8500 },
  PLUG_01: { implantCode: "PLUG_01", name: "Amplatzer Vascular Plug II/4", category: "Vascular Plug", cappedPriceINR: 45000 },
  SEMS_01: { implantCode: "SEMS_01", name: "Biliary Uncovered SEMS (10mm x 80mm)", category: "SEMS", cappedPriceINR: 38000 },
  SEMS_02: { implantCode: "SEMS_02", name: "Covered Esophageal / Tracheal SEMS", category: "SEMS", cappedPriceINR: 52000 },
  EMB_01: { implantCode: "EMB_01", name: "PVA Particles 300-500um / 500-700um", category: "Embolic Agent", cappedPriceINR: 9500 },
  EMB_02: { implantCode: "EMB_02", name: "Gelfoam Sterile Absorbable Gelatin Sponge", category: "Embolic Agent", cappedPriceINR: 1800 },
};

// ---------------------------------------------------------------------------
// Official Packages Directory (4,955 Genuine Government Packages)
// ---------------------------------------------------------------------------

export const SCHEME_PACKAGES: SchemePackage[] = officialPackagesJson as unknown as SchemePackage[];

// ---------------------------------------------------------------------------
// TPA Portal / SMS Notification Parser
// ---------------------------------------------------------------------------

export function parseTpaNotification(rawText: string): ParsedTpaNotification {
  const result: ParsedTpaNotification = {
    rawText,
    preAuthStatus: "UNKNOWN",
  };

  if (!rawText || typeof rawText !== "string") {
    return result;
  }

  // Detect Scheme
  if (/MAAY|Mukhya\s*mantri|Ayushman|Chiranjeevi/i.test(rawText)) {
    result.schemeDetected = "MAAY";
  } else if (/RGHS|Rajasthan\s*Government\s*Health/i.test(rawText)) {
    result.schemeDetected = "RGHS";
  }

  // Detect Pre-Auth Status
  if (/Approved|Sanctioned|Accepted|Auth\s*Success/i.test(rawText)) {
    result.preAuthStatus = "APPROVED";
  } else if (/Rejected|Denied|Declined/i.test(rawText)) {
    result.preAuthStatus = "REJECTED";
  } else if (/Pending|Under\s*Process|Query\s*Raised/i.test(rawText)) {
    result.preAuthStatus = "PENDING";
  }

  // Extract Transaction ID (TID)
  const tidMatch = rawText.match(/(?:TID|Transaction\s*(?:ID|No|#)|Txn\s*ID)[\s:=#-]+([A-Za-z0-9_-]{5,24})/i);
  if (tidMatch) {
    result.transactionId = tidMatch[1].trim();
  }

  // Extract Card Number / Jan Aadhaar Number / RGHS ID
  const cardMatch = rawText.match(/(?:Card\s*(?:No|#)|Jan\s*Aadhaar|RGHS\s*(?:ID|No)|Health\s*ID)[\s:=#-]+([A-Za-z0-9-]{7,24})/i);
  if (cardMatch) {
    result.cardNumber = cardMatch[1].trim();
  }

  // Extract Package Code (Prioritizing explicit 'Package: ...' or 'Package Code: ...')
  const explicitPkgMatch = rawText.match(/(?:Package\s*(?:Code|ID)|Package|Pkg\s*Code)[\s:=#-]+([A-Za-z0-9_-]+)/i);
  if (explicitPkgMatch) {
    result.packageCode = explicitPkgMatch[1].trim().toUpperCase();
  } else {
    const pkgPatternMatch =
      rawText.match(/((?:MAAY|RGHS)-[A-Za-z0-9_-]+)/i) ||
      rawText.match(/([12]\d{3}-[A-Z]{2}\d{3}[A-Z0-9]*(?:RJ)?)/i);
    if (pkgPatternMatch) {
      result.packageCode = pkgPatternMatch[1].trim().toUpperCase();
    }
  }

  // Extract Approved Amount
  const amtMatch = rawText.match(/(?:Rs\.?|INR|Amount|Sanctioned|Approved(?:\s*Amount)?)[\s:=]+([0-9,]+)(?:\.\d{2})?(?:\/-)?/i);
  if (amtMatch) {
    const numericStr = amtMatch[1].replace(/,/g, "");
    const parsedAmt = parseFloat(numericStr);
    if (!isNaN(parsedAmt)) {
      result.approvedAmountINR = parsedAmt;
    }
  }

  // Extract Patient Name
  const nameMatch = rawText.match(/(?:Patient(?:\s*Name)?|Beneficiary|Name)[\s:=]+([A-Za-z^.,\s]{3,35})(?:\r|\n|,|\.|;|$)/i);
  if (nameMatch) {
    let candidateName = nameMatch[1].trim();
    candidateName = candidateName.replace(/\s+(?:under|for|in|with|scheme|at)\b.*$/i, "").trim();
    if (!/^(None|NA|Unknown|TID|RGHS|MAAY)$/i.test(candidateName)) {
      result.patientName = candidateName;
    }
  }

  return result;
}

/**
 * Finds a matching package definition from the master tariff list.
 */
export function findMatchingPackage(packageCode?: string): SchemePackage | undefined {
  if (!packageCode) return undefined;
  const normalized = packageCode.toUpperCase().trim();

  // Alias lookup for common clinical abbreviations
  if (normalized === "MAAY-IR-001" || normalized === "TACE" || normalized === "CTACE") {
    return SCHEME_PACKAGES.find((p) => p.packageCode === "2849-IN061A") || SCHEME_PACKAGES[0];
  }
  if (normalized === "MAAY-IR-002" || normalized === "BAE") {
    return SCHEME_PACKAGES.find((p) => p.packageCode === "2849-MC018A");
  }
  if (normalized === "RGHS-IR-004" || normalized === "BILIARY_SEMS") {
    return SCHEME_PACKAGES.find((p) => p.packageCode === "2849-IN006A") || SCHEME_PACKAGES.find((p) => p.packageCode === "RGHS-1308");
  }

  return SCHEME_PACKAGES.find(
    (p) =>
      p.packageCode.toUpperCase() === normalized ||
      p.packageCode.toUpperCase().replace("RGHS-", "") === normalized
  );
}
