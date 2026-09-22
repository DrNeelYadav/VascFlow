export type HardwareCategory =
  | "Needles & Biopsy"
  | "Guidewires"
  | "Access Sheaths"
  | "Diagnostic Catheters"
  | "Microcatheters"
  | "Balloons & IVL"
  | "Stents & Endoprostheses"
  | "Shunts & TIPS"
  | "Embolics & Coils"
  | "Drainage & Access"
  | "Vascular Closure"
  | "Thrombectomy & Retrieval"
  | "IVC Filters & Protection"
  | "Fluid Management & Accessories"
  | "Procedural & Oncologic Drugs";

export type PackagingType = "BOX" | "BLISTER_PACK" | "FOIL_POUCH" | "AMPOULE_TRAY" | "DISPENSER_TUBE" | "VIAL" | "AMPOULE";

export interface MasterHardwareItem {
  id: string;
  sku: string;
  name: string;
  category: HardwareCategory;
  specification: string;
  frenchOrGauge: string;
  lengthOrDiameter: string;
  manufacturer: string;
  brandName: string;
  imageUrl?: string;
  boxColor: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    badgeBg: string;
    badgeText: string;
  };
  packagingType: PackagingType;
  productSilhouette:
    | "NEEDLE"
    | "WIRE"
    | "SHEATH"
    | "CATHETER"
    | "MICROCATHETER"
    | "BALLOON"
    | "STENT"
    | "SHUNT"
    | "COIL"
    | "AMPOULE"
    | "DRAIN"
    | "CLOSURE"
    | "RETRIEVER"
    | "FILTER"
    | "ACCESSORY"
    | "DRUG";
  brochureHighlights: string[];
  clinicalIndications: string;
  currentStock: number;
  reorderLevel: number;
  unit: string;
  rmsclMatchingCode: string;
  rmsclStatus: "MATCHED" | "PENDING_VERIFICATION";
  tariffCappedInr: number;
  lastLot: string;
  expiryDate: string;
  ifuHighlights: string;
}

