/**
 * Official Rajasthan Government MAAY & RGHS Interventional Radiology (IR) Scheme Code Master
 * Extracted from SMS Medical College & Hospital IR Department Master Records & Official State Tariffs
 * Note: DAPT TACE is non-functional in the portal; standard cTACE (2849-IN061A) is used.
 */

export interface IrApprovedImplant {
  implantCode: string;
  name: string;
  cappedPriceINR: number;
  maxUnits?: number;
  remarks?: string;
}

export interface IrSchemePackage {
  packageCode: string;
  procedureName: string;
  scheme: "MAAY" | "RGHS" | "BOTH";
  baseTariffINR: number;
  category: "Vascular" | "Non-Vascular" | "Oncology" | "Hepatobiliary" | "Neuro/Spine" | "Drainage/Biopsy";
  approvedImplants: IrApprovedImplant[];
  notes?: string;
}

export const IR_SCHEME_PACKAGES: IrSchemePackage[] = [
  // 1. TACE (Conventional / Lipiodol cTACE) - Explicitly replacing non-functional DAPT TACE
  {
    packageCode: "2849-IN061A",
    procedureName: "Conventional TACE (cTACE / Transarterial Chemoembolization)",
    scheme: "BOTH",
    baseTariffINR: 47960,
    category: "Oncology",
    approvedImplants: [
      { implantCode: "2849-IN061A IMP 38", name: "Lipiodol Ultra Fluid (10ml)", cappedPriceINR: 18000, maxUnits: 1 },
      { implantCode: "2849-IN061A IMP 39", name: "Microcatheter & Steerable Microguidewire System", cappedPriceINR: 19000, maxUnits: 1 },
    ],
    notes: "Official active cTACE code. Do NOT use DAPT TACE (rejected in portal).",
  },

  // 2. DEB-TACE (Drug Eluting Beads)
  {
    packageCode: "2849-IN 061B",
    procedureName: "DEB-TACE (Drug-Eluting Bead Transarterial Chemoembolization)",
    scheme: "BOTH",
    baseTariffINR: 41160,
    category: "Oncology",
    approvedImplants: [
      { implantCode: "2849-IN 061B IMP40", name: "Drug Eluting Beads (DEB 75-150 / 100-300um)", cappedPriceINR: 50000, maxUnits: 1 },
      { implantCode: "2849-IN 061B IMP41", name: "Microcatheter System", cappedPriceINR: 19000, maxUnits: 1 },
    ],
  },

  // 3. Venous Angioplasty & Bare Metal Stenting
  {
    packageCode: "2849-IN026C",
    procedureName: "Venous Angioplasty & Bare Metal Stenting (IVC / Iliac / SVC)",
    scheme: "BOTH",
    baseTariffINR: 35440,
    category: "Vascular",
    approvedImplants: [
      { implantCode: "2849-IN0246CIMP 385", name: "Standard Angioplasty Balloon", cappedPriceINR: 9800, maxUnits: 1 },
      { implantCode: "2849-IN0246CIMP 386", name: "High Pressure Large Balloon (Atlas/Conquest)", cappedPriceINR: 18800, maxUnits: 1 },
      { implantCode: "2849-IN0246CIMP 387", name: "Self-Expanding Metallic Stent (Wallstent / E-Luminexx)", cappedPriceINR: 37000, maxUnits: 1 },
    ],
  },

  // 4. Venous Angioplasty & Covered Stenting
  {
    packageCode: "2849-IN026E",
    procedureName: "Venous Angioplasty & Covered Stent Placement (Fluency / Viatorr)",
    scheme: "BOTH",
    baseTariffINR: 45080,
    category: "Vascular",
    approvedImplants: [
      { implantCode: "2849-IN026E-IMP389", name: "High Pressure Balloon", cappedPriceINR: 18800, maxUnits: 1 },
      { implantCode: "2849-IN026E-IMP390", name: "Covered Vascular Stent", cappedPriceINR: 95000, maxUnits: 1 },
    ],
  },

  // 5. PARTO (Plug-Assisted Retrograde Transvenous Obliteration)
  {
    packageCode: "2849-IN064A",
    procedureName: "PARTO (Plug-Assisted Retrograde Transvenous Obliteration)",
    scheme: "BOTH",
    baseTariffINR: 46020,
    category: "Hepatobiliary",
    approvedImplants: [
      { implantCode: "2849-IN064A IMP 49", name: "Amplatzer Vascular Plug (AVP II / IV)", cappedPriceINR: 44000, maxUnits: 1 },
      { implantCode: "2849-IN064A IMP 50", name: "Pushable / Detachable Coils", cappedPriceINR: 7900, maxUnits: 2 },
      { implantCode: "2849-IN064A IMP 51", name: "Lipiodol & Sclerosant", cappedPriceINR: 18000, maxUnits: 1 },
    ],
  },

  // 6. BRTO (Balloon-Occluded Retrograde Transvenous Obliteration)
  {
    packageCode: "2849-IN063A",
    procedureName: "BRTO (Balloon-Occluded Retrograde Transvenous Obliteration)",
    scheme: "BOTH",
    baseTariffINR: 40760,
    category: "Hepatobiliary",
    approvedImplants: [
      { implantCode: "2849-IN063A-IMP46", name: "Lipiodol Ultra Fluid", cappedPriceINR: 18000, maxUnits: 1 },
      { implantCode: "2849-IN063A-IMP47", name: "Microcatheter System", cappedPriceINR: 19000, maxUnits: 1 },
      { implantCode: "2849-IN063A-IMP48", name: "Embolization Coils", cappedPriceINR: 7900, maxUnits: 2 },
    ],
  },

  // 7. BAE (Bronchial Artery Embolization)
  {
    packageCode: "2849-MC 018A",
    procedureName: "Bronchial Artery Embolization (BAE) for Massive Hemoptysis",
    scheme: "BOTH",
    baseTariffINR: 30000,
    category: "Vascular",
    approvedImplants: [
      { implantCode: "2849-IN017B-IMP 22", name: "PVA Particles (355-500um / 500-710um)", cappedPriceINR: 5500, maxUnits: 4 },
      { implantCode: "2849-IN017B-IMP 23", name: "Microcatheter System", cappedPriceINR: 19000, maxUnits: 1 },
    ],
  },

  // 8. Dialysis Fistuloplasty / AV Fistula Thrombectomy
  {
    packageCode: "2849-IN076A",
    procedureName: "Fistuloplasty / Thrombectomy of Dialysis Fistulas (AVF / AVG)",
    scheme: "BOTH",
    baseTariffINR: 32440,
    category: "Vascular",
    approvedImplants: [
      { implantCode: "2849-IN076A-IMP-394", name: "High Pressure Ultra-Non-Compliant Angioplasty Balloon (Conquest)", cappedPriceINR: 9800, maxUnits: 1 },
    ],
  },

  // 9. AV Fistula / Peripheral AVM Embolization
  {
    packageCode: "2849-IN049B",
    procedureName: "AV Fistula / Peripheral AVM Embolization & Obliteration",
    scheme: "BOTH",
    baseTariffINR: 104300,
    category: "Vascular",
    approvedImplants: [
      { implantCode: "2849-IN080ARJ-IMP396", name: "Detachable Coils", cappedPriceINR: 24000, maxUnits: 2 },
      { implantCode: "2849-IN080ARJ-IMP397", name: "Pushable Platinum Coils", cappedPriceINR: 9000, maxUnits: 4 },
    ],
  },

  // 10. PTBD (Percutaneous Transhepatic Biliary Drainage) External
  {
    packageCode: "1849-SG105 A",
    procedureName: "PTBD (Percutaneous Transhepatic Biliary Drainage - External)",
    scheme: "BOTH",
    baseTariffINR: 16000,
    category: "Hepatobiliary",
    approvedImplants: [
      { implantCode: "1849-IN057A-CAT", name: "Biliary Drainage Catheter Kit (Ring / Mac-Loc 8.5F/10F)", cappedPriceINR: 7000, maxUnits: 1 },
    ],
  },

  // 11. Biliary SEMS (Self-Expanding Metallic Stent)
  {
    packageCode: "2849-IN006A",
    procedureName: "Primary Biliary SEMS Stenting for Malignant Jaundice",
    scheme: "BOTH",
    baseTariffINR: 25000,
    category: "Hepatobiliary",
    approvedImplants: [
      { implantCode: "2849-IN006A IMP 381", name: "Self-Expanding Metallic Biliary Stent (SEMS)", cappedPriceINR: 37000, maxUnits: 1 },
    ],
  },

  // 12. Secondary Biliary SEMS
  {
    packageCode: "2849-IN006B",
    procedureName: "Biliary SEMS Stent Insertion",
    scheme: "BOTH",
    baseTariffINR: 28360,
    category: "Hepatobiliary",
    approvedImplants: [
      { implantCode: "2849-IN006A IMP 381", name: "Biliary SEMS Metallic Stent", cappedPriceINR: 37000, maxUnits: 1 },
    ],
  },

  // 13. Image-Guided Percutaneous Drainage / Cholecystostomy / Sclerotherapy
  {
    packageCode: "1849-IN057A",
    procedureName: "Image Guided Percutaneous Drainage / Biliary Drainage / Cholecystostomy / Sclerotherapy",
    scheme: "BOTH",
    baseTariffINR: 7000,
    category: "Drainage/Biopsy",
    approvedImplants: [],
  },

  // 14. Cholecystostomy (Pigtail)
  {
    packageCode: "1849-IN056A",
    procedureName: "Percutaneous Cholecystostomy",
    scheme: "BOTH",
    baseTariffINR: 17640,
    category: "Drainage/Biopsy",
    approvedImplants: [],
  },

  // 15. RFA Osteoid Osteoma
  {
    packageCode: "2849-IN044A",
    procedureName: "Radiofrequency Ablation (RFA) for Osteoid Osteoma",
    scheme: "BOTH",
    baseTariffINR: 25440,
    category: "Oncology",
    approvedImplants: [
      { implantCode: "2849-IN044AIMP 34", name: "RF Ablation Probe / Electrode", cappedPriceINR: 75000, maxUnits: 1 },
    ],
  },

  // 16. MWA (Microwave Ablation - Breast, Thyroid, Liver, Bone)
  {
    packageCode: "2849-IN071A",
    procedureName: "Microwave Ablation (MWA) - Breast, Thyroid, Liver, Pulmonary",
    scheme: "BOTH",
    baseTariffINR: 29440,
    category: "Oncology",
    approvedImplants: [
      { implantCode: "2849-IN071A IMP 53", name: "Microwave Antenna Probe (14G/16G cooled)", cappedPriceINR: 95000, maxUnits: 1 },
    ],
  },

  // 17. Vascular Plug Assisted Embolisation
  {
    packageCode: "2849-IN022A",
    procedureName: "Vascular Plug Assisted Embolisation (Aneurysms / Shunts)",
    scheme: "BOTH",
    baseTariffINR: 39280,
    category: "Vascular",
    approvedImplants: [
      { implantCode: "2849-IN022A IMP 25", name: "Amplatzer Vascular Plug", cappedPriceINR: 44000, maxUnits: 1 },
      { implantCode: "2849-IN022A IMP 26", name: "Embolization Coils", cappedPriceINR: 13800, maxUnits: 1 },
    ],
  },

  // 18. Portal Vein Embolization (PVE)
  {
    packageCode: "2849-IN065A",
    procedureName: "Portal Vein Embolization (PVE) for Pre-Hepatectomy Hypertrophy",
    scheme: "BOTH",
    baseTariffINR: 26680,
    category: "Hepatobiliary",
    approvedImplants: [
      { implantCode: "2849-IN065A-IMP1", name: "Lipiodol Ultra Fluid", cappedPriceINR: 18000, maxUnits: 1 },
      { implantCode: "2849-IN065A-IMP2", name: "Microcatheter System", cappedPriceINR: 19000, maxUnits: 1 },
      { implantCode: "2849-IN065A-IMP3", name: "Embolization Coils", cappedPriceINR: 7900, maxUnits: 2 },
    ],
  },

  // 19. Thrombectomy followed by Thrombolysis (DVT / Arterial)
  {
    packageCode: "2849-IN025A",
    procedureName: "Percutaneous Mechanical Thrombectomy followed by Catheter Directed Thrombolysis",
    scheme: "BOTH",
    baseTariffINR: 43680,
    category: "Vascular",
    approvedImplants: [
      { implantCode: "2849-IN025A IMP 295", name: "Multi-Sidehole Infusion Catheter (Fountain / Cragg-McNamara)", cappedPriceINR: 1180, maxUnits: 1 },
      { implantCode: "2849-IN025A IMP 296", name: "Mechanical Thrombectomy Catheter (Aspirex / AngioJet)", cappedPriceINR: 95000, maxUnits: 1 },
    ],
  },

  // 20. Catheter Directed Thrombolysis (CDT)
  {
    packageCode: "2849-IN024A",
    procedureName: "Catheter Directed Thrombolysis (CDT)",
    scheme: "BOTH",
    baseTariffINR: 35280,
    category: "Vascular",
    approvedImplants: [
      { implantCode: "2849-IN024A-IMP1", name: "Multi-Sidehole Infusion Catheter", cappedPriceINR: 1180, maxUnits: 1 },
    ],
  },

  // 21. HVPG (Hepatic Venous Pressure Gradient)
  {
    packageCode: "1849-IN008A",
    procedureName: "Hepatic Venous Pressure Gradient (HVPG) Measurement",
    scheme: "BOTH",
    baseTariffINR: 8000,
    category: "Hepatobiliary",
    approvedImplants: [],
  },

  // 22. TJLB (Transjugular Liver Biopsy)
  {
    packageCode: "2849-IN 059A",
    procedureName: "Transjugular Liver Biopsy (TJLB)",
    scheme: "BOTH",
    baseTariffINR: 8000,
    category: "Hepatobiliary",
    approvedImplants: [
      { implantCode: "2849-IN 059AIMP36", name: "Transjugular Liver Biopsy (LABS) Set (Cook Quick-Core / Ross)", cappedPriceINR: 30000, maxUnits: 1 },
    ],
  },

  // 23. Tunnelled Long-Term Venous Catheter (Permacath)
  {
    packageCode: "2849-IN009A",
    procedureName: "Tunnelled Long-Term Cuffed Venous Catheter Insertion (Permacath)",
    scheme: "BOTH",
    baseTariffINR: 11000,
    category: "Vascular",
    approvedImplants: [
      { implantCode: "2849-IN009A-IMP16", name: "Dual Lumen Tunnelled Cuffed Hemodialysis Catheter Kit", cappedPriceINR: 14000, maxUnits: 1 },
    ],
  },

  // 24. Tunnelled Indwelling Catheter for Ascites/Pleural Effusion (Pleurx)
  {
    packageCode: "2849-IN010A",
    procedureName: "Tunnelled Long-Term Indwelling Catheter for Refractory Ascites / Pleural Effusion",
    scheme: "BOTH",
    baseTariffINR: 7000,
    category: "Drainage/Biopsy",
    approvedImplants: [
      { implantCode: "2849-IN010A-IMP17", name: "PleurX / Rocket Indwelling Catheter Insertion Kit", cappedPriceINR: 32000, maxUnits: 1 },
    ],
  },

  // 25. PVA Embolisation (UFE / Fibroid / Non-bronchial)
  {
    packageCode: "2849-IN017B",
    procedureName: "PVA Embolisation (Uterine Artery Embolization / Peripheral)",
    scheme: "BOTH",
    baseTariffINR: 30400,
    category: "Vascular",
    approvedImplants: [
      { implantCode: "2849-IN017B-IMP 22", name: "PVA Particulate Embolic Agent", cappedPriceINR: 5500, maxUnits: 4 },
      { implantCode: "2849-IN017B-IMP 23", name: "Microcatheter System", cappedPriceINR: 19000, maxUnits: 1 },
    ],
  },

  // 26. Glue Embolisation
  {
    packageCode: "2849-IN018B",
    procedureName: "Endovascular Liquid Embolisation (Histoacryl / Lipiodol Glue)",
    scheme: "BOTH",
    baseTariffINR: 32360,
    category: "Vascular",
    approvedImplants: [
      { implantCode: "2849-IN018BIMP19", name: "Lipiodol Ultra Fluid", cappedPriceINR: 18000, maxUnits: 1 },
      { implantCode: "2849-IN018BIMP20", name: "Microcatheter System", cappedPriceINR: 19000, maxUnits: 1 },
      { implantCode: "2849-IN018BIMP21", name: "Coils (2 Units)", cappedPriceINR: 7900, maxUnits: 1 },
    ],
  },

  // 27. Gel Foam Embolisation
  {
    packageCode: "2849-IN019B",
    procedureName: "Gel Foam Embolisation (Trauma / Acute Bleed)",
    scheme: "BOTH",
    baseTariffINR: 23480,
    category: "Vascular",
    approvedImplants: [
      { implantCode: "2849-IN019BIMP24", name: "Microcatheter System", cappedPriceINR: 19000, maxUnits: 1 },
    ],
  },

  // 28. Coil Embolisation
  {
    packageCode: "2849-IN020 B",
    procedureName: "Selective Coil Embolisation of Aneurysms / Visceral Bleed",
    scheme: "BOTH",
    baseTariffINR: 30340,
    category: "Vascular",
    approvedImplants: [
      { implantCode: "2849-IN020B-IMP1", name: "Microcatheter System", cappedPriceINR: 19000, maxUnits: 1 },
      { implantCode: "2849-IN020B-IMP2", name: "Controlled Detachable / Pushable Coils (Max 3)", cappedPriceINR: 21700, maxUnits: 1 },
    ],
  },

  // 29. Angioplasty Complex / DCB / Cutting Balloon
  {
    packageCode: "2849-IN028A",
    procedureName: "Complex Angioplasty / Cutting Balloon / Drug-Coated Balloon (DCB)",
    scheme: "BOTH",
    baseTariffINR: 53160,
    category: "Vascular",
    approvedImplants: [
      { implantCode: "2849-IN028A IMP 32", name: "Drug-Coated Balloon (DCB) / Cutting Balloon", cappedPriceINR: 42000, maxUnits: 1 },
    ],
  },

  // 30. Image-Guided Tru-Cut Biopsy
  {
    packageCode: "1849-MG076A",
    procedureName: "Image Guided Core / Tru-Cut Needle Biopsy (US / CT)",
    scheme: "BOTH",
    baseTariffINR: 5000,
    category: "Drainage/Biopsy",
    approvedImplants: [],
  },

  // 31. Celiac Plexus / Splanchnic Ganglion Neurolytic Block
  {
    packageCode: "2849-IN066A",
    procedureName: "Celiac Plexus / Splanchnic Ganglion Neurolytic Block for Intractable Pain",
    scheme: "BOTH",
    baseTariffINR: 9120,
    category: "Non-Vascular",
    approvedImplants: [],
  },

  // 32. Extra Coils Master Code
  {
    packageCode: "2849-IN080ARJ",
    procedureName: "Supplementary / Extra Embolization Coils",
    scheme: "BOTH",
    baseTariffINR: 0,
    category: "Vascular",
    approvedImplants: [
      { implantCode: "2849-IN080ARJ-IMP396", name: "Detachable Coils (Max 2)", cappedPriceINR: 24000, maxUnits: 1 },
      { implantCode: "2849-IN080ARJ-IMP397", name: "Pushable Platinum Coils", cappedPriceINR: 9000, maxUnits: 1 },
    ],
  },
];
