import { YojanaSchemeKey } from "../../lib/schemesCorrelationData";

export const CLEAN_PROCEDURE_NAMES: Record<string, string> = {
  ctace: "cTACE",
  "deb-tace": "DEB-TACE",
  bae: "BAE",
  "ptbd-stent": "PTBD + Biliary Stent",
  fistuloplasty: "Fistuloplasty",
  evlt: "EVLT",
  venaseal: "VenaSeal",
  sclerotherapy: "Sclerotherapy",
  brto: "BRTO",
  parto: "PARTO",
  tips: "TIPS",
  tjlb: "TJLB",
  hvpg: "HVPG",
  pve: "Portal Vein Embolization",
  ufe: "UFE / UAE",
  "splenic-embolization": "Splenic Artery Embolization",
  varicocele: "Varicocele Embolization",
  pcn: "PCN",
  pcd: "PCD",
  "core-biopsy": "Core Biopsy",
  permacath: "Permacath",
  pleurex: "Pleurx Catheter",
  "venous-stenting": "Venous Stenting",
  thrombectomy: "Thrombectomy / CDT",
  "rfa-mwa": "RFA / MWA Ablation",
  "diagnostic-dsa": "Diagnostic DSA",
  "ivc-filter": "IVC Filter Placement",
};

export const SCHEME_TABS: { key: YojanaSchemeKey; label: string }[] = [
  { key: "MAAY", label: "MAAY" },
  { key: "RGHS", label: "RGHS" },
  { key: "AB_PMJAY", label: "AB-PMJAY" },
  { key: "CASH_RMRS", label: "Cash / RMRS" },
];
