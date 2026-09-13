import { SchemePackage } from '../types/clinical';

export const SCHEMES_DATA: SchemePackage[] = [
  // MAAY (Chiranjeevi) Packages
  {
    code: '2849-IN061A',
    name: 'Conventional TACE (cTACE - Lipiodol + Chemotherapy)',
    price: 47960,
    category: 'Interventional Oncology',
    icd10: 'C22.0',
    scheme: 'MAAY',
    implants: [
      { code: 'IMP 38', name: 'Lipiodol Ultra-Fluid Ampoule', price: 18000 },
      { code: 'IMP 39', name: 'Microcatheter System (2.7F/2.4F)', price: 19000 }
    ],
    documentationChecklist: [
      'Pre-procedure Triphasic CECT or MRI Liver report confirming HCC',
      'Pre-embolization selective celiac / hepatic diagnostic angiogram run',
      'Post-embolization completion devascularization and stasis spot run',
      'Empty chemo vial (Doxorubicin) and Lipiodol ampoule barcode photo'
    ]
  },
  {
    code: '2849-IN061B',
    name: 'DEB TACE (Drug-Eluting Bead TACE)',
    price: 41160,
    category: 'Interventional Oncology',
    icd10: 'C22.0',
    scheme: 'MAAY',
    implants: [
      { code: 'IMP 40', name: 'Drug Eluting Beads (DEB 100-300um)', price: 50000 },
      { code: 'IMP 41', name: 'Microcatheter System', price: 19000 }
    ],
    documentationChecklist: [
      'Pre-procedure multiphasic imaging report',
      'Selective hepatic digital subtraction angiogram',
      'Post-DEB stasis run',
      'DEB bead vial stickers and packaging barcodes'
    ]
  },
  {
    code: '2849-MC018A',
    name: 'Bronchial Artery Embolization (BAE)',
    price: 30000,
    category: 'Vascular Embolization',
    icd10: 'R04.2',
    scheme: 'MAAY',
    implants: [
      { code: 'IMP 22', name: 'Calibrated PVA Particles (355-500um)', price: 5500 },
      { code: 'IMP 23', name: 'Microcatheter System', price: 19000 }
    ],
    documentationChecklist: [
      'Pre-procedure CT Angiogram Thorax report',
      'Thoracic aortogram identifying bronchial origins',
      'Selective bronchial angiogram excluding anterior spinal artery',
      'Completion devascularization angiogram'
    ]
  },
  {
    code: '1849-SG105 A',
    name: 'Percutaneous Transhepatic Biliary Drainage (PTBD - External)',
    price: 16000,
    category: 'Biliary Interventions',
    icd10: 'C24.0 / K83.1',
    scheme: 'MAAY',
    implants: [
      { code: 'IMP 102', name: 'Ring Drainage Catheter (8.5F/10F)', price: 4200 }
    ],
    documentationChecklist: [
      'Pre-op MRCP or CECT Abdomen demonstrating biliary dilation',
      'Fluoroscopic Chiba needle puncture spot radiograph',
      'Diagnostic cholangiogram showing stricture level',
      'Final pigtail locked drain position confirmation film'
    ]
  },
  {
    code: '2849-IN006A',
    name: 'Primary Biliary / Vascular SEMS Stenting',
    price: 25000,
    category: 'Biliary / Vascular Stenting',
    icd10: 'C24.0',
    scheme: 'MAAY',
    implants: [
      { code: 'IMP 12', name: 'Self-Expanding Metallic Stent (Nitinol Bare)', price: 45000 }
    ],
    documentationChecklist: [
      'Pre-stenting roadmapping cholangiogram/angiogram',
      'Stent deployment fluoroscopy runs',
      'Post-deployment contrast flow confirmation run'
    ]
  },
  {
    code: '1849-IN057A',
    name: 'Percutaneous Nephrostomy (PCN - Unilateral)',
    price: 14000,
    category: 'Urinary Interventions',
    icd10: 'N13.0',
    scheme: 'MAAY',
    implants: [
      { code: 'IMP 88', name: 'Locking Pigtail Nephrostomy Catheter', price: 3800 }
    ],
    documentationChecklist: [
      'Pre-procedure Ultrasound / NCCT KUB hydronephrosis report',
      'Posterior calyx puncture and nephrostogram film',
      'Locked pigtail catheter confirmation film'
    ]
  },
  {
    code: '2849-IN064A',
    name: 'PARTO / BRTO for Bleeding Gastric Varices',
    price: 54000,
    category: 'Portal Hypertension',
    icd10: 'I85.0',
    scheme: 'MAAY',
    implants: [
      { code: 'IMP 49', name: 'Amplatzer Vascular Plug II (AVP II)', price: 38000 },
      { code: 'IMP 50', name: 'Embolization Coils Pack', price: 16000 },
      { code: 'IMP 51', name: 'Lipiodol Ampoule', price: 18000 }
    ],
    documentationChecklist: [
      'CT Portal Venogram demonstrating gastrorenal shunt',
      'Left renal venogram and selective shunt occlusion run',
      'Post-plug deployment thrombosis confirmation run'
    ]
  },
  {
    code: '2849-IN065A',
    name: 'Portal Vein Embolization (PVE)',
    price: 45000,
    category: 'Surgical Prep',
    icd10: 'C22.0',
    scheme: 'MAAY',
    implants: [
      { code: 'IMP 46', name: 'Lipiodol & Glue Set', price: 21000 },
      { code: 'IMP 47', name: 'Microcatheter System', price: 19000 },
      { code: 'IMP 48', name: 'Nester Coils Pack', price: 15000 }
    ],
    documentationChecklist: [
      'Volumetric CT Liver measuring future liver remnant percentage',
      'Direct portogram of right portal tree',
      'Post-embolization completion portogram showing left branch inflow'
    ]
  },
  {
    code: '2849-IN049B',
    name: 'Liquid Embolic AVM Embolization',
    price: 58000,
    category: 'Vascular Anomalies',
    icd10: 'Q27.31',
    scheme: 'MAAY',
    implants: [
      { code: 'IMP 54', name: 'DMSO-Compatible Microcatheter', price: 24000 },
      { code: 'IMP 57', name: 'EVOH Liquid Embolic (Onyx 18/34)', price: 48000 }
    ],
    documentationChecklist: [
      'Diagnostic DSA / MRI defining high-flow nidus',
      'Continuous fluoroscopy roadmap runs during injection',
      'Post-embolization total devascularization confirmation run'
    ]
  },
  {
    code: '2849-IN026C',
    name: 'Central Venous Angioplasty & Stenting (Bare Stent)',
    price: 42000,
    category: 'Hemodialysis Access',
    icd10: 'I87.1',
    scheme: 'MAAY',
    implants: [
      { code: 'IMP 385', name: 'High Pressure PTA Balloon', price: 16000 },
      { code: 'IMP 387', name: 'Self-Expanding Venous Stent', price: 45000 }
    ],
    documentationChecklist: [
      'Pre-intervention central venogram showing > 50% stenosis',
      'Balloon inflation waist effacement run',
      'Post-stent deployment unrestricted atrial inflow run'
    ]
  },

  // RGHS Packages
  {
    code: 'RGHS-492',
    name: 'Endovenous Laser Ablation (EVLA) for Varicose Veins',
    price: 24500,
    category: 'Superficial Venous',
    icd10: 'I83.9',
    scheme: 'RGHS',
    implants: [
      { code: 'RGHS-IMP-01', name: '1470nm Radial Laser Fiber', price: 12000 }
    ],
    documentationChecklist: [
      'Standing duplex ultrasound venous mapping report',
      'Pre-op clinical photographs showing CEAP grading',
      'Post-procedure duplex non-compressibility documentation'
    ]
  },
  {
    code: 'RGHS-582',
    name: 'Percutaneous Biliary Drainage & Stenting (RGHS)',
    price: 28000,
    category: 'Biliary',
    icd10: 'K83.1',
    scheme: 'RGHS',
    implants: [
      { code: 'RGHS-IMP-02', name: 'Metallic Biliary Stent', price: 35000 }
    ],
    documentationChecklist: [
      'Pre-procedure CECT / MRCP report',
      'Procedural cholangiograms',
      'Discharge summary with implant stickers'
    ]
  },
  {
    code: 'RGHS-693',
    name: 'Therapeutic Embolization (Varicocele / Bleed / Fibroid)',
    price: 32000,
    category: 'Embolization',
    icd10: 'I86.1',
    scheme: 'RGHS',
    implants: [
      { code: 'RGHS-IMP-03', name: 'Microcoil Pack / Sclerosant', price: 18000 }
    ],
    documentationChecklist: [
      'Diagnostic ultrasound / Doppler verification report',
      'Catheter placement angiograms',
      'Post-coiling stasis confirmation'
    ]
  },
  {
    code: 'RGHS-910',
    name: 'Percutaneous Nephrostomy & Ureteral Stenting (RGHS)',
    price: 18500,
    category: 'Urinary',
    icd10: 'N13.0',
    scheme: 'RGHS',
    implants: [
      { code: 'RGHS-IMP-04', name: 'Locking Pigtail / DJ Stent', price: 6500 }
    ],
    documentationChecklist: [
      'USG KUB showing moderate to severe hydronephrosis',
      'Fluoroscopic nephrostogram spot film',
      'Implant batch number barcode'
    ]
  },
  {
    code: 'RGHS-1042',
    name: 'Inferior Vena Cava (IVC) Filter Placement / Retrieval',
    price: 36000,
    category: 'Venous Thromboembolism',
    icd10: 'I82.4',
    scheme: 'RGHS',
    implants: [
      { code: 'RGHS-IMP-05', name: 'Retrievable IVC Filter System', price: 48000 }
    ],
    documentationChecklist: [
      'Lower limb venous Doppler confirming DVT',
      'Cavogram demonstrating renal vein levels and filter deployment',
      'Filter serial number documentation'
    ]
  }
];

export interface ParsedSmsScheme {
  tid: string;
  cardNo: string;
  packageCode: string;
  amount: string;
  patientName: string;
}

export function parseSmsNotification(smsText: string): ParsedSmsScheme {
  const result: ParsedSmsScheme = {
    tid: '',
    cardNo: '',
    packageCode: '',
    amount: '',
    patientName: ''
  };

  if (!smsText) return result;

  // Regex patterns for Indian Govt Scheme approvals (MAAY / Chiranjeevi / RGHS)
  const tidMatch = smsText.match(/(?:TID|tid|Transaction ID|Trans ID|Preauth ID)[:\s\-#]*([A-Za-z0-9\-]+)/i);
  if (tidMatch && tidMatch[1]) {
    result.tid = tidMatch[1].trim();
  }

  const cardMatch = smsText.match(/(?:Card|Jan\s*Aadhaar|Policy|Family ID)[:\s\-#]*([0-9]{8,14})/i);
  if (cardMatch && cardMatch[1]) {
    result.cardNo = cardMatch[1].trim();
  }

  const pkgMatch = smsText.match(/(?:Package|Pkg|Code)[:\s\-#]*([0-9]{4}\-[A-Za-z0-9]+|RGHS\-[0-9]+|[0-9]{3,4})/i);
  if (pkgMatch && pkgMatch[1]) {
    result.packageCode = pkgMatch[1].trim();
  }

  const amtMatch = smsText.match(/(?:Amount|Amt|Approved|Rs\.?|INR)[:\s\-#]*([0-9,]+)/i);
  if (amtMatch && amtMatch[1]) {
    result.amount = amtMatch[1].replace(/,/g, '').trim();
  }

  const nameMatch = smsText.match(/(?:Patient|Pt|Name)[:\s\-]*([A-Za-z\s]+?)(?:for|card|tid|amt|amount|approved|\.|\,|$)/i);
  if (nameMatch && nameMatch[1]) {
    result.patientName = nameMatch[1].trim();
  }

  return result;
}
