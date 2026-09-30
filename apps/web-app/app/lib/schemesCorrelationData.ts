/**
 * Scheme Code Correlation & ICD Indicator Master Dictionary
 * Official Rajasthan Government Health Schemes (MAAY / RGHS / AB-PMJAY / RMRS)
 * Interventional Radiology Department, SMS Medical College & Hospital, Jaipur
 */

export type YojanaSchemeKey = 'MAAY' | 'RGHS' | 'AB_PMJAY' | 'CASH_RMRS';

export interface YojanaSchemeMeta {
  key: YojanaSchemeKey;
  label: string;
  shortLabel: string;
  badgeColor: string;
  description: string;
  maxCoverLimit: string;
  portalName: string;
}

export const YOJANA_SCHEMES: Record<YojanaSchemeKey, YojanaSchemeMeta> = {
  MAAY: {
    key: 'MAAY',
    label: 'Mukhyamantri Ayushman Arogya (MAAY / Chiranjeevi)',
    shortLabel: 'MAAY',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    description: 'Universal cashless healthcare for Rajasthan residents on Jan Aadhaar card up to ₹25 Lakhs.',
    maxCoverLimit: '₹25,00,000 / family / year',
    portalName: 'Rajasthan Health Portal (TMS)',
  },
  RGHS: {
    key: 'RGHS',
    label: 'Rajasthan Government Health Scheme (RGHS)',
    shortLabel: 'RGHS',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    description: 'Cashless medical facility for Rajasthan state government employees, MLAs, and pensioners.',
    maxCoverLimit: 'Comprehensive / CGHS Aligned',
    portalName: 'RGHS Pre-Auth Portal / e-Hospital',
  },
  AB_PMJAY: {
    key: 'AB_PMJAY',
    label: 'Ayushman Bharat (AB-PMJAY / NHA)',
    shortLabel: 'AB-PMJAY',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    description: 'National Health Protection Scheme providing cashless secondary and tertiary hospitalization up to ₹5 Lakhs.',
    maxCoverLimit: '₹5,00,000 / family / year',
    portalName: 'NHA TMS 2.0 Portal',
  },
  CASH_RMRS: {
    key: 'CASH_RMRS',
    label: 'Cash / RMRS (Rajasthan Medicare Relief Society)',
    shortLabel: 'Cash / RMRS',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    description: 'Institutional subsidized tariff at SMS Hospital. 60% Infrastructure, 15% Academic, 25% Incentive pool.',
    maxCoverLimit: 'Subsidized Fee Schedule',
    portalName: 'SMS e-Hospital Cashier Counter',
  },
};

export interface ApprovedImplantItem {
  code: string;
  name: string;
  unitPriceINR: number;
  maxUnits: number;
  isMandatory: boolean;
  category: 'Microcatheter' | 'Embolic / Drug' | 'Balloon / Stent' | 'Kit / Sheath' | 'Drain / Catheter' | 'Needle / Core';
  remarks?: string;
}

export interface SchemePricingDetail {
  packageCode: string;
  packageName: string;
  baseTariffINR: number;
  statusNote?: string;
  implants: ApprovedImplantItem[];
  preAuthChecklist: string[];
  clinicalCriteria: string;
}

export interface ProcedureCorrelationItem {
  id: string;
  name: string;
  shortName: string;
  category: 'Interventional Oncology' | 'Vascular Embolization' | 'Venous Interventions' | 'Biliary & Hepatosplenic' | 'Renal & Urinary' | 'Drainage & Biopsy';
  organSystem: string;
  routineRank: number;
  primaryIndication: string;
  icd10: {
    code: string;
    description: string;
    secondaryCodes?: { code: string; description: string }[];
  };
  schemes: Record<YojanaSchemeKey, SchemePricingDetail>;
}

export const CORRELATION_PROCEDURES: ProcedureCorrelationItem[] = [
  // 1. cTACE
  {
    id: 'ctace',
    name: 'Conventional Transarterial Chemoembolization (cTACE)',
    shortName: 'cTACE',
    category: 'Interventional Oncology',
    organSystem: 'Hepatobiliary',
    routineRank: 1,
    primaryIndication: 'Hepatocellular Carcinoma (HCC BCLC Stage A/B) or Hypervascular Hepatic Metastases',
    icd10: {
      code: 'C22.0',
      description: 'Liver cell carcinoma (Hepatocellular carcinoma / HCC)',
      secondaryCodes: [{ code: 'C78.7', description: 'Secondary malignant neoplasm of liver' }],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-IN061A',
        packageName: 'Conventional TACE (cTACE)',
        baseTariffINR: 47960,
        statusNote: 'Active official package. Use 2849-IN061A.',
        implants: [
          {
            code: '2849-IN061A IMP 38',
            name: 'Lipiodol Ultra Fluid Ampoule 10 mL',
            unitPriceINR: 18000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Embolic / Drug',
          },
          {
            code: '2849-IN061A IMP 39',
            name: 'Microcatheter & Microwire System',
            unitPriceINR: 19000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Microcatheter',
          },
        ],
        preAuthChecklist: ['Pre-procedure Triphasic CECT / Dynamic Contrast MRI Liver', 'Liver Function Tests & INR', 'Pre & post-chemoembolization DSA runs'],
        clinicalCriteria: 'Hepatocellular carcinoma (HCC) or hypervascular liver metastases.',
      },
      RGHS: {
        packageCode: '693',
        packageName: 'Transcatheter Arterial Chemoembolization (TACE)',
        baseTariffINR: 42500,
        implants: [],
        preAuthChecklist: ['Multiphasic CECT / MRI liver report', 'Serum Alpha-Fetoprotein (AFP)', 'Pre and post DSA runs'],
        clinicalCriteria: 'Primary hepatocellular carcinoma or secondary liver metastasis.',
      },
      AB_PMJAY: {
        packageCode: 'MG051A',
        packageName: 'Transarterial Chemoembolization for Liver Cancer',
        baseTariffINR: 45000,
        implants: [],
        preAuthChecklist: ['CECT Abdomen report', 'CBC, LFT, PT/INR', 'Post-procedure DSA run'],
        clinicalCriteria: 'Unresectable hepatocellular carcinoma in eligible beneficiaries.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-01',
        packageName: 'SMS Hospital Institutional cTACE Package',
        baseTariffINR: 20000,
        implants: [],
        preAuthChecklist: ['OPD registration card and RMRS indoor ticket', 'Procedural consent'],
        clinicalCriteria: 'Self-paying patient undergoing cTACE.',
      },
    },
  },

  // 2. DEB-TACE
  {
    id: 'deb-tace',
    name: 'Drug-Eluting Bead Transarterial Chemoembolization (DEB-TACE)',
    shortName: 'DEB-TACE',
    category: 'Interventional Oncology',
    organSystem: 'Hepatobiliary',
    routineRank: 2,
    primaryIndication: 'Hepatocellular Carcinoma refractory or high tumor burden, Neuroendocrine Tumor Liver Metastases',
    icd10: {
      code: 'C22.0',
      description: 'Liver cell carcinoma (Hepatocellular carcinoma / HCC)',
      secondaryCodes: [{ code: 'C7B.02', description: 'Secondary neuroendocrine tumor of liver' }],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-IN061B',
        packageName: 'DEB TACE (Drug-Eluting Bead TACE)',
        baseTariffINR: 41160,
        implants: [
          {
            code: '2849-IN061B IMP 40',
            name: 'Drug-Eluting Beads - DEB',
            unitPriceINR: 50000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Embolic / Drug',
          },
          {
            code: '2849-IN061B IMP 41',
            name: 'Microcatheter & Microwire System',
            unitPriceINR: 19000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Microcatheter',
          },
        ],
        preAuthChecklist: ['Multiphasic CECT / MRI Liver report', 'Selective hepatic angiogram', 'Post-DEB stasis run'],
        clinicalCriteria: 'Child-Pugh A or select B7 cirrhosis with single or multinodular HCC.',
      },
      RGHS: {
        packageCode: '693',
        packageName: 'Drug-Eluting Bead Chemoembolization (DEB-TACE)',
        baseTariffINR: 38000,
        implants: [],
        preAuthChecklist: ['CT/MRI liver report', 'Chemo loading record', 'DSA devascularization runs'],
        clinicalCriteria: 'HCC refractory to conventional TACE or high tumor burden.',
      },
      AB_PMJAY: {
        packageCode: 'MG051B',
        packageName: 'Transarterial DEB Chemoembolization for Liver Neoplasm',
        baseTariffINR: 41000,
        implants: [],
        preAuthChecklist: ['Pre-auth clinical summary', 'Serum Creatinine & Bilirubin', 'Cath lab summary'],
        clinicalCriteria: 'Unresectable primary liver cancer.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-02',
        packageName: 'SMS Hospital Institutional DEB-TACE Package',
        baseTariffINR: 23000,
        implants: [],
        preAuthChecklist: ['Admission order and RMRS receipt', 'Operative record'],
        clinicalCriteria: 'Elective hepatic chemoembolization with DEB.',
      },
    },
  },

  // 3. BAE
  {
    id: 'bae',
    name: 'Bronchial Artery Embolization (BAE)',
    shortName: 'BAE',
    category: 'Vascular Embolization',
    organSystem: 'Thoracic & Pulmonology',
    routineRank: 3,
    primaryIndication: 'Massive or Recurrent Hemoptysis secondary to Post-TB Bronchiectasis, Aspergilloma, Cavitary TB',
    icd10: {
      code: 'R04.2',
      description: 'Hemoptysis (Pulmonary hemorrhage)',
      secondaryCodes: [{ code: 'J47.9', description: 'Bronchiectasis' }, { code: 'B90.9', description: 'Sequelae of tuberculosis' }],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-MC018A / 2849-IN017B',
        packageName: 'Bronchial Artery Embolization (BAE)',
        baseTariffINR: 30000,
        implants: [
          {
            code: '2849-IN017B IMP 22',
            name: 'PVA Particles',
            unitPriceINR: 5500,
            maxUnits: 4,
            isMandatory: true,
            category: 'Embolic / Drug',
          },
          {
            code: '2849-IN017B IMP 23',
            name: 'Microcatheter',
            unitPriceINR: 19000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Microcatheter',
          },
          {
            code: '2849-IN080ARJ-IMP397',
            name: 'Pushable Coils',
            unitPriceINR: 9000,
            maxUnits: 2,
            isMandatory: false,
            category: 'Balloon / Stent',
          },
        ],
        preAuthChecklist: ['CTA Chest showing hypertrophied bronchial arteries', 'Diagnostic bronchial angiogram', 'Post-embolization completion angiogram'],
        clinicalCriteria: 'Active or recurrent hemoptysis failing medical management.',
      },
      RGHS: {
        packageCode: '693',
        packageName: 'Therapeutic Transcatheter Embolization (Bronchial)',
        baseTariffINR: 32000,
        implants: [],
        preAuthChecklist: ['Chest CT scan', 'Emergency admission slip', 'Pre and post DSA runs'],
        clinicalCriteria: 'Massive or recurrent hemoptysis.',
      },
      AB_PMJAY: {
        packageCode: 'MC018A',
        packageName: 'Emergency Bronchial Artery Embolization for Hemoptysis',
        baseTariffINR: 28000,
        implants: [],
        preAuthChecklist: ['Emergency ticket', 'Pre-procedure vitals', 'DSA occlusion run'],
        clinicalCriteria: 'Emergency bronchial embolization for massive hemoptysis.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-03',
        packageName: 'SMS Hospital Institutional BAE Package',
        baseTariffINR: 16000,
        implants: [],
        preAuthChecklist: ['Emergency OT booking sheet', 'RMRS subsidy receipt', 'Consent form'],
        clinicalCriteria: 'Emergency or planned bronchial embolization.',
      },
    },
  },

  // 4. PTBD + Biliary Stent
  {
    id: 'ptbd-stent',
    name: 'Percutaneous Transhepatic Biliary Drainage & Stenting (PTBD + Biliary Stent)',
    shortName: 'PTBD + Biliary Stent',
    category: 'Biliary & Hepatosplenic',
    organSystem: 'Hepatobiliary',
    routineRank: 4,
    primaryIndication: 'Malignant Biliary Obstruction (Cholangiocarcinoma, Gallbladder CA, Pancreatic CA)',
    icd10: {
      code: 'K83.1',
      description: 'Occlusion of bile duct (Biliary obstruction / stricture)',
      secondaryCodes: [{ code: 'C24.0', description: 'Cholangiocarcinoma' }],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-IN006A / 2849-IN006B / 1849-SG105A',
        packageName: 'PTBD + Primary Biliary SEMS Stent',
        baseTariffINR: 41000,
        implants: [
          {
            code: '2849-IN006A IMP 381',
            name: 'Biliary SEMS Metallic Stent',
            unitPriceINR: 37000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
          },
        ],
        preAuthChecklist: ['Pre-operative MRCP / CECT Abdomen', 'LFTs showing obstructive jaundice', 'Pre & post stenting cholangiograms'],
        clinicalCriteria: 'Inoperable malignant biliary obstruction.',
      },
      RGHS: {
        packageCode: '1308 / 1318',
        packageName: 'Biliary Stenting (1308) / PTBD (1318)',
        baseTariffINR: 28000,
        implants: [],
        preAuthChecklist: ['MRCP / CECT abdomen report', 'Pre and post stenting cholangiograms'],
        clinicalCriteria: 'Obstructive jaundice with failed ERCP.',
      },
      AB_PMJAY: {
        packageCode: 'SG105A',
        packageName: 'PTBD with Biliary Stent Placement',
        baseTariffINR: 38000,
        implants: [],
        preAuthChecklist: ['Oncology referral', 'Diagnostic cholangiogram', 'Post-stenting film'],
        clinicalCriteria: 'Malignant obstructive jaundice requiring percutaneous drainage and stenting.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-07',
        packageName: 'SMS Hospital Institutional PTBD + Stent Package',
        baseTariffINR: 20000,
        implants: [],
        preAuthChecklist: ['Inpatient bed ticket and RMRS fee clearance', 'Procedural consent'],
        clinicalCriteria: 'Percutaneous biliary decompression in self-paying patients.',
      },
    },
  },

  // 5. Fistuloplasty
  {
    id: 'fistuloplasty',
    name: 'Hemodialysis AV Fistuloplasty & Access Salvage',
    shortName: 'Fistuloplasty',
    category: 'Vascular Embolization',
    organSystem: 'Dialysis & Access',
    routineRank: 5,
    primaryIndication: 'Hemodialysis AV Fistula / Graft Dysfunction, High Venous Pressures, Access Stenosis',
    icd10: {
      code: 'T82.8',
      description: 'Complications of vascular prosthetic devices, implants and grafts (Fistula stenosis)',
      secondaryCodes: [{ code: 'N18.6', description: 'End stage renal disease' }],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-IN076A',
        packageName: 'Fistuloplasty / Thrombectomy of Dialysis Fistula',
        baseTariffINR: 32440,
        implants: [
          {
            code: '2849-IN076A-IMP394',
            name: 'High Pressure Balloon',
            unitPriceINR: 9800,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
          },
        ],
        preAuthChecklist: ['Dialysis referral showing access dysfunction', 'Pre-dilation fistulogram showing > 50% stenosis', 'Completion fistulogram proving patent outflow'],
        clinicalCriteria: 'Dialysis patient with documented AV access failure.',
      },
      RGHS: {
        packageCode: '843 / 841',
        packageName: 'Fistula Stenosis Dilation (843) / Fistulogram (841)',
        baseTariffINR: 30000,
        implants: [],
        preAuthChecklist: ['Dialysis unit referral slip', 'Pre and post-dilation angiographic run films'],
        clinicalCriteria: 'Dysfunctional hemodialysis access in eligible state beneficiaries.',
      },
      AB_PMJAY: {
        packageCode: 'VS076A',
        packageName: 'Percutaneous Balloon Angioplasty of Dialysis Fistula',
        baseTariffINR: 28000,
        implants: [],
        preAuthChecklist: ['Maintenance hemodialysis record', 'Pre & post intervention runs'],
        clinicalCriteria: 'Hemodialysis dependent patients requiring salvage of permanent vascular access.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-09',
        packageName: 'SMS Hospital Institutional AV Fistuloplasty Package',
        baseTariffINR: 14000,
        implants: [],
        preAuthChecklist: ['Dialysis card and RMRS voucher', 'Consent form'],
        clinicalCriteria: 'Self-paying ESRD patients for access salvage.',
      },
    },
  },

  // 6. EVLT
  {
    id: 'evlt',
    name: 'Endovenous Laser Therapy (EVLT / EVLA)',
    shortName: 'EVLT',
    category: 'Venous Interventions',
    organSystem: 'Venous & Lymphatic',
    routineRank: 6,
    primaryIndication: 'Great / Small Saphenous Vein Reflux, Varicose Veins (CEAP C2-C6)',
    icd10: {
      code: 'I83.9',
      description: 'Varicose veins of lower extremities without ulcer or inflammation',
      secondaryCodes: [{ code: 'I83.0', description: 'Varicose veins with ulcer' }],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-IN028A / 2849-IN026C',
        packageName: 'Endovenous Thermal Ablation (EVLT 1470nm Laser)',
        baseTariffINR: 28000,
        implants: [
          {
            code: '2849-IN028A IMP 32',
            name: 'Laser Radial Fiber & Sheath Kit',
            unitPriceINR: 14500,
            maxUnits: 1,
            isMandatory: true,
            category: 'Kit / Sheath',
          },
        ],
        preAuthChecklist: ['Standing venous duplex Doppler mapping showing SFJ reflux > 0.5s', 'Clinical photographs', 'Post-ablation duplex verifying occlusion'],
        clinicalCriteria: 'Truncal saphenous reflux with clinical severity CEAP C2-C6.',
      },
      RGHS: {
        packageCode: '492',
        packageName: 'Laser Ablation of Varicose Veins',
        baseTariffINR: 24500,
        implants: [],
        preAuthChecklist: ['Venous Doppler report', 'Clinical photos', 'Discharge summary with Joules delivered'],
        clinicalCriteria: 'Eligible state beneficiaries with chronic venous reflux.',
      },
      AB_PMJAY: {
        packageCode: 'SU118A',
        packageName: 'Endovenous Laser Ablation for Varicose Veins',
        baseTariffINR: 22000,
        implants: [],
        preAuthChecklist: ['Venous Doppler scan', 'Clinical grading', 'Post-op Doppler confirmation'],
        clinicalCriteria: 'Severe symptomatic varicose veins refractory to conservative therapy.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-05',
        packageName: 'SMS Hospital Institutional EVLT Package',
        baseTariffINR: 11000,
        implants: [],
        preAuthChecklist: ['OPD slip with Doppler mapping', 'Consent form for laser ablation'],
        clinicalCriteria: 'Daycare laser ablation for self-paying patients.',
      },
    },
  },

  // 7. VenaSeal
  {
    id: 'venaseal',
    name: 'Endovenous Cyanoacrylate Glue Closure (VenaSeal)',
    shortName: 'VenaSeal',
    category: 'Venous Interventions',
    organSystem: 'Venous & Lymphatic',
    routineRank: 7,
    primaryIndication: 'Chronic Venous Insufficiency, Saphenous Reflux (CEAP C2-C6)',
    icd10: {
      code: 'I83.9',
      description: 'Varicose veins of lower extremities without ulcer or inflammation',
      secondaryCodes: [{ code: 'I87.2', description: 'Venous insufficiency (chronic)' }],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-IN018B',
        packageName: 'Endovascular Glue Closure (VenaSeal)',
        baseTariffINR: 32360,
        implants: [
          {
            code: '2849-IN018B IMP 19',
            name: 'Cyanoacrylate Glue Kit',
            unitPriceINR: 45000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Kit / Sheath',
          },
          {
            code: '2849-IN018B IMP 20',
            name: 'Microcatheter System',
            unitPriceINR: 6500,
            maxUnits: 1,
            isMandatory: true,
            category: 'Microcatheter',
          },
        ],
        preAuthChecklist: ['Standing lower limb venous Doppler mapping', 'Clinical photographs', 'Post-glue duplex ultrasound'],
        clinicalCriteria: 'Symptomatic saphenous reflux with failure of conservative therapy.',
      },
      RGHS: {
        packageCode: '17 / 492',
        packageName: 'Injection for Varicose Veins (17) / Laser / Non-Thermal Ablation (492)',
        baseTariffINR: 28500,
        implants: [],
        preAuthChecklist: ['Venous Doppler map', 'Clinical photo', 'Post-procedure scan'],
        clinicalCriteria: 'Varicose veins with reflux, especially intolerance to tumescent anesthesia.',
      },
      AB_PMJAY: {
        packageCode: 'VS022A',
        packageName: 'Endovascular Embolization for Venous Reflux',
        baseTariffINR: 26000,
        implants: [],
        preAuthChecklist: ['Venous Doppler report', 'Clinical severity score', 'Procedural completion log'],
        clinicalCriteria: 'Symptomatic varicose veins with documented saphenous trunk reflux.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-04',
        packageName: 'SMS Hospital Institutional VenaSeal Package',
        baseTariffINR: 14000,
        implants: [],
        preAuthChecklist: ['OPD consultation card and ultrasound mapping', 'Consent form'],
        clinicalCriteria: 'Self-paying patient seeking walk-in walk-out non-thermal closure.',
      },
    },
  },

  // 8. Sclerotherapy
  {
    id: 'sclerotherapy',
    name: 'Image-Guided Sclerotherapy for Low-Flow Vascular Malformations / AVM',
    shortName: 'Sclerotherapy',
    category: 'Vascular Embolization',
    organSystem: 'Vascular Anomalies',
    routineRank: 8,
    primaryIndication: 'Low-Flow Vascular Malformation (Venous / Lymphatic Malformation), Hemangioma',
    icd10: {
      code: 'D18.0',
      description: 'Hemangioma and lymphangioma, any site',
      secondaryCodes: [{ code: 'I77.0', description: 'Arteriovenous fistula, acquired' }],
    },
    schemes: {
      MAAY: {
        packageCode: '1849-IN074A / 1849-IN057A',
        packageName: 'Injection Sclerotherapy for Low Flow AVM',
        baseTariffINR: 14000,
        implants: [
          {
            code: '1849-IN074A IMP 01',
            name: 'Bleomycin / Polidocanol Sclerosant Kit (Admitted: DDC-14, OPD: DDC-2)',
            unitPriceINR: 4500,
            maxUnits: 1,
            isMandatory: true,
            category: 'Embolic / Drug',
          },
        ],
        preAuthChecklist: ['Pre-procedure MRI / Doppler demonstrating slow-flow malformation', 'Direct puncture venogram / fluoroscopy run', 'Post-sclerosant stagnation spot run'],
        clinicalCriteria: 'Symptomatic venous or lymphatic vascular malformation.',
      },
      RGHS: {
        packageCode: '1320 / 17',
        packageName: 'Vascular Embolization (1320) / Sclerotherapy Injection (17)',
        baseTariffINR: 16000,
        implants: [],
        preAuthChecklist: ['MRI / Doppler report', 'Clinical photographs', 'Procedure note'],
        clinicalCriteria: 'Symptomatic low-flow vascular malformation in beneficiaries.',
      },
      AB_PMJAY: {
        packageCode: 'VS074A',
        packageName: 'Percutaneous Sclerotherapy for Vascular Malformation',
        baseTariffINR: 12000,
        implants: [],
        preAuthChecklist: ['Imaging report confirming low-flow malformation', 'Treatment summary'],
        clinicalCriteria: 'Vascular malformation causing pain, swelling, or functional impairment.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-15',
        packageName: 'SMS Hospital Institutional Sclerotherapy Package',
        baseTariffINR: 6000,
        implants: [],
        preAuthChecklist: ['OPD card and ultrasound report', 'Consent form'],
        clinicalCriteria: 'Self-paying patient undergoing percutaneous sclerotherapy.',
      },
    },
  },

  // 9. BRTO
  {
    id: 'brto',
    name: 'Balloon-Occluded Retrograde Transvenous Obliteration (BRTO)',
    shortName: 'BRTO',
    category: 'Biliary & Hepatosplenic',
    organSystem: 'Hepatobiliary',
    routineRank: 9,
    primaryIndication: 'Gastric Variceal Bleeding with Gastrorenal Shunt in Cirrhosis / Portal Hypertension',
    icd10: {
      code: 'I85.0',
      description: 'Esophageal / Gastric varices with bleeding',
      secondaryCodes: [{ code: 'K76.6', description: 'Portal hypertension' }],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-IN063A',
        packageName: 'Balloon-Occluded Retrograde Transvenous Obliteration (BRTO)',
        baseTariffINR: 42000,
        implants: [
          {
            code: '2849-IN063A IMP 46',
            name: 'Lipiodol Ultra-Fluid',
            unitPriceINR: 18000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Embolic / Drug',
          },
          {
            code: '2849-IN063A IMP 47',
            name: 'Microcatheter',
            unitPriceINR: 19000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Microcatheter',
          },
          {
            code: '2849-IN063A IMP 48',
            name: 'Embolic Coils',
            unitPriceINR: 9000,
            maxUnits: 2,
            isMandatory: true,
            category: 'Balloon / Stent',
          },
        ],
        preAuthChecklist: ['Pre-procedure Triphasic CECT Abdomen showing gastric varices & gastrorenal shunt', 'Balloon occlusion venogram', 'Post-sclerosant filling run'],
        clinicalCriteria: 'Bleeding or high-risk gastric fundal varices with spontaneous gastrorenal shunt.',
      },
      RGHS: {
        packageCode: '1324',
        packageName: 'Balloon-occluded Retrograde Intravenous Obliteration (BRTO)',
        baseTariffINR: 38000,
        implants: [],
        preAuthChecklist: ['CECT Abdomen report confirming gastrorenal shunt', 'Endoscopy report', 'Pre and post BRTO fluoroscopy films'],
        clinicalCriteria: 'Gastric varices with gastrorenal shunt in portal hypertension.',
      },
      AB_PMJAY: {
        packageCode: 'HP063A',
        packageName: 'BRTO for Gastric Varices',
        baseTariffINR: 35000,
        implants: [],
        preAuthChecklist: ['Endoscopy & CT abdomen findings', 'Fluoroscopy runs', 'Discharge summary'],
        clinicalCriteria: 'Refractory or recurrent gastric variceal bleeding.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-16',
        packageName: 'SMS Hospital Institutional BRTO Package',
        baseTariffINR: 22000,
        implants: [],
        preAuthChecklist: ['Inpatient admission ticket', 'Procedural consent'],
        clinicalCriteria: 'Self-paying cirrhotic patient with bleeding gastric varices.',
      },
    },
  },

  // 10. PARTO
  {
    id: 'parto',
    name: 'Plug-Assisted Retrograde Transvenous Obliteration (PARTO)',
    shortName: 'PARTO',
    category: 'Biliary & Hepatosplenic',
    organSystem: 'Hepatobiliary',
    routineRank: 10,
    primaryIndication: 'Gastric Varices with Gastrorenal / Gastrocaval Shunt',
    icd10: {
      code: 'I85.0',
      description: 'Esophageal / Gastric varices with bleeding',
      secondaryCodes: [{ code: 'K76.6', description: 'Portal hypertension' }],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-IN064A',
        packageName: 'Plug-Assisted Retrograde Transvenous Obliteration (PARTO)',
        baseTariffINR: 44000,
        implants: [
          {
            code: '2849-IN064A IMP 49',
            name: 'Vascular Plug',
            unitPriceINR: 44000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
          },
          {
            code: '2849-IN064A IMP 50',
            name: 'Coils',
            unitPriceINR: 9000,
            maxUnits: 2,
            isMandatory: true,
            category: 'Balloon / Stent',
          },
          {
            code: '2849-IN064A IMP 51',
            name: 'Lipiodol',
            unitPriceINR: 18000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Embolic / Drug',
          },
        ],
        preAuthChecklist: ['CECT Abdomen showing gastrorenal shunt caliber', 'Fluoroscopic spot showing plug deployment in shunt', 'Post-gelfoam/sclerosant variceal obliteration run'],
        clinicalCriteria: 'Gastric variceal hemorrhage or encephalopathy secondary to gastrorenal shunt.',
      },
      RGHS: {
        packageCode: '1324',
        packageName: 'Retrograde Intravenous Obliteration (BRTO / PARTO)',
        baseTariffINR: 38000,
        implants: [],
        preAuthChecklist: ['CT Portography report', 'Fluoroscopy runs with plug deployment'],
        clinicalCriteria: 'Gastric fundal varices with large shunt.',
      },
      AB_PMJAY: {
        packageCode: 'HP064A',
        packageName: 'Plug-Assisted Transvenous Obliteration (PARTO)',
        baseTariffINR: 36000,
        implants: [],
        preAuthChecklist: ['CT Abdomen and endoscopy report', 'Cath lab image showing plug occlusion'],
        clinicalCriteria: 'Bleeding gastric varices with gastrorenal shunt.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-17',
        packageName: 'SMS Hospital Institutional PARTO Package',
        baseTariffINR: 24000,
        implants: [],
        preAuthChecklist: ['Admission ticket', 'Procedural consent'],
        clinicalCriteria: 'Self-paying patient undergoing PARTO.',
      },
    },
  },

  // 11. TIPS
  {
    id: 'tips',
    name: 'Transjugular Intrahepatic Portosystemic Shunt (TIPS)',
    shortName: 'TIPS',
    category: 'Biliary & Hepatosplenic',
    organSystem: 'Hepatobiliary',
    routineRank: 11,
    primaryIndication: 'Refractory Ascites, Recurrent Variceal Bleeding, Budd-Chiari Syndrome',
    icd10: {
      code: 'K76.6',
      description: 'Portal hypertension',
      secondaryCodes: [{ code: 'I85.0', description: 'Esophageal varices with bleeding' }, { code: 'I82.0', description: 'Budd-Chiari syndrome' }],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-IN026E',
        packageName: 'Angioplasty and Covered Stent Placement Venous (TIPS)',
        baseTariffINR: 54000,
        implants: [
          {
            code: '2849-IN026E-IMP389',
            name: 'High Pressure Balloon',
            unitPriceINR: 9800,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
          },
          {
            code: '2849-IN026E-IMP390',
            name: 'Covered Stent - VIATORR / ePTFE',
            unitPriceINR: 95000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
          },
        ],
        preAuthChecklist: ['Triphasic CECT Abdomen / Doppler Liver', 'Echocardiogram ruling out right heart failure', 'Direct portogram & pre/post pressure gradient strip'],
        clinicalCriteria: 'Complicated portal hypertension with refractory ascites or bleeding.',
      },
      RGHS: {
        packageCode: '1321',
        packageName: 'Transjugular Intrahepatic Portosystemic Shunt (TIPS)',
        baseTariffINR: 48000,
        implants: [],
        preAuthChecklist: ['Hepatology referral', 'CT Portography report', 'Pre and post pressure gradient recordings'],
        clinicalCriteria: 'Portal hypertension refractory to medical and endoscopic therapy.',
      },
      AB_PMJAY: {
        packageCode: 'HP045A',
        packageName: 'TIPS Procedure for Portal Hypertension',
        baseTariffINR: 45000,
        implants: [],
        preAuthChecklist: ['Hepatology notes', 'Echo report', 'Pressure recording graph'],
        clinicalCriteria: 'Cirrhosis with recurrent variceal bleed or refractory ascites.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-10',
        packageName: 'SMS Hospital Institutional TIPS Package',
        baseTariffINR: 33000,
        implants: [],
        preAuthChecklist: ['Admission under IR / Hepatology', 'Informed consent', 'ICU bed confirmation'],
        clinicalCriteria: 'TIPS in self-paying cirrhotic or Budd-Chiari patients.',
      },
    },
  },

  // 12. TJLB
  {
    id: 'tjlb',
    name: 'Transjugular Liver Biopsy (TJLB)',
    shortName: 'TJLB',
    category: 'Drainage & Biopsy',
    organSystem: 'Hepatobiliary',
    routineRank: 12,
    primaryIndication: 'Diffuse Liver Disease with Coagulopathy, Thrombocytopenia, or Tense Ascites',
    icd10: {
      code: 'K74.6',
      description: 'Other and unspecified cirrhosis of liver',
      secondaryCodes: [{ code: 'K76.9', description: 'Liver disease, unspecified' }],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-IN059A',
        packageName: 'Transjugular Liver Biopsy (TJLB)',
        baseTariffINR: 18000,
        implants: [
          {
            code: '2849-IN059A IMP 36',
            name: 'LABS Transjugular Liver Biopsy Set',
            unitPriceINR: 28000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Needle / Core',
          },
        ],
        preAuthChecklist: ['Coagulation profile / Platelet count', 'Right hepatic venogram prior to biopsy pass', 'Biopsy specimen core photograph in formalin'],
        clinicalCriteria: 'Clinical indication for liver biopsy with contraindication to percutaneous route.',
      },
      RGHS: {
        packageCode: '382 / 579',
        packageName: 'Liver Biopsy (382) / Image Guided Biopsy (579)',
        baseTariffINR: 15000,
        implants: [],
        preAuthChecklist: ['Hepatology workup note', 'Coagulation profile', 'Procedure run images'],
        clinicalCriteria: 'Liver disease requiring biopsy with deranged INR or ascites.',
      },
      AB_PMJAY: {
        packageCode: 'HP059A',
        packageName: 'Transjugular Liver Biopsy',
        baseTariffINR: 14000,
        implants: [],
        preAuthChecklist: ['Clinical summary with abnormal coagulation', 'Pathology receipt'],
        clinicalCriteria: 'Histological evaluation of diffuse hepatic parenchymal disease.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-18',
        packageName: 'SMS Hospital Institutional TJLB Package',
        baseTariffINR: 8000,
        implants: [],
        preAuthChecklist: ['RMRS payment receipt', 'Consent form'],
        clinicalCriteria: 'Self-paying patient requiring transjugular liver biopsy.',
      },
    },
  },

  // 13. HVPG
  {
    id: 'hvpg',
    name: 'Hepatic Venous Pressure Gradient (HVPG) Measurement',
    shortName: 'HVPG',
    category: 'Biliary & Hepatosplenic',
    organSystem: 'Hepatobiliary',
    routineRank: 13,
    primaryIndication: 'Portal Hypertension Risk Stratification, Response to Beta-Blocker Therapy',
    icd10: {
      code: 'K76.6',
      description: 'Portal hypertension',
      secondaryCodes: [{ code: 'K74.6', description: 'Cirrhosis of liver' }],
    },
    schemes: {
      MAAY: {
        packageCode: '1849-IN008A',
        packageName: 'Hepatic Venous Wedge Pressure Measurement (HVPG)',
        baseTariffINR: 8000,
        implants: [],
        preAuthChecklist: ['Hepatology referral', 'Fluoroscopy spot showing balloon wedged in hepatic vein', 'Pressure transducer tracing recording WHVP and FHVP'],
        clinicalCriteria: 'Assessment of portal hypertension severity (HVPG > 10 or > 12 mmHg).',
      },
      RGHS: {
        packageCode: '1325 / 1322',
        packageName: 'Portal Haemodynamic Studies (1325) / Venous Catheterization (1322)',
        baseTariffINR: 8500,
        implants: [],
        preAuthChecklist: ['Hepatology consultation note', 'Pressure strip recording'],
        clinicalCriteria: 'Evaluation of sinusoidal portal hypertension.',
      },
      AB_PMJAY: {
        packageCode: 'HP008A',
        packageName: 'Hepatic Venous Pressure Measurement',
        baseTariffINR: 7500,
        implants: [],
        preAuthChecklist: ['Hepatology notes', 'Hemodynamic tracing'],
        clinicalCriteria: 'Assessment of portal pressure in eligible beneficiaries.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-19',
        packageName: 'SMS Hospital Institutional HVPG Package',
        baseTariffINR: 4500,
        implants: [],
        preAuthChecklist: ['OPD card / indoor ticket', 'Transducer tracing copy'],
        clinicalCriteria: 'HVPG measurement for self-paying patients.',
      },
    },
  },

  // 14. Portal Vein Embolization
  {
    id: 'pve',
    name: 'Portal Vein Embolization (PVE)',
    shortName: 'Portal Vein Embolization',
    category: 'Interventional Oncology',
    organSystem: 'Hepatobiliary',
    routineRank: 14,
    primaryIndication: 'Preoperative Hepatic Lobar Hypertrophy Prior to Extended Hepatectomy for Liver Neoplasm',
    icd10: {
      code: 'C22.0',
      description: 'Liver cell carcinoma',
      secondaryCodes: [{ code: 'C24.0', description: 'Cholangiocarcinoma' }],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-IN065A',
        packageName: 'Portal Vein Embolization (PVE)',
        baseTariffINR: 42000,
        implants: [
          {
            code: '2849-IN063A IMP 46',
            name: 'Lipiodol',
            unitPriceINR: 18000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Embolic / Drug',
          },
          {
            code: '2849-IN063A IMP 47',
            name: 'Microcatheter',
            unitPriceINR: 19000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Microcatheter',
          },
          {
            code: '2849-IN063A IMP 48',
            name: 'Coils',
            unitPriceINR: 9000,
            maxUnits: 2,
            isMandatory: true,
            category: 'Balloon / Stent',
          },
        ],
        preAuthChecklist: ['Pre-operative volumetric CT measuring Future Liver Remnant (FLR)', 'Portogram showing target branches', 'Completion portogram showing total occlusion of target portal branches'],
        clinicalCriteria: 'Inadequate FLR (< 25% normal liver, < 40% cirrhotic) prior to major hepatectomy.',
      },
      RGHS: {
        packageCode: '693 / 1320',
        packageName: 'Therapeutic Embolization (693) / Vascular Embolization (1320)',
        baseTariffINR: 36000,
        implants: [],
        preAuthChecklist: ['Surgical oncology referral', 'CT volumetry report', 'Pre and post portogram films'],
        clinicalCriteria: 'Candidate for major liver resection requiring FLR hypertrophy.',
      },
      AB_PMJAY: {
        packageCode: 'MG065A',
        packageName: 'Pre-operative Portal Vein Embolization',
        baseTariffINR: 34000,
        implants: [],
        preAuthChecklist: ['Surgical oncology note', 'CT volumetry', 'Portogram runs'],
        clinicalCriteria: 'Planned major hepatic resection in eligible beneficiaries.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-20',
        packageName: 'SMS Hospital Institutional PVE Package',
        baseTariffINR: 22000,
        implants: [],
        preAuthChecklist: ['Indoor admission card', 'Consent form'],
        clinicalCriteria: 'Preoperative PVE in self-paying patients.',
      },
    },
  },

  // 15. UFE / UAE
  {
    id: 'ufe',
    name: 'Uterine Fibroid Embolization (UFE / UAE)',
    shortName: 'UFE / UAE',
    category: 'Vascular Embolization',
    organSystem: 'Genitourinary & Pelvic',
    routineRank: 15,
    primaryIndication: 'Symptomatic Uterine Leiomyoma, Adenomyosis, Severe Menorrhagia',
    icd10: {
      code: 'D25.9',
      description: 'Leiomyoma of uterus, unspecified (Uterine fibroid)',
      secondaryCodes: [{ code: 'N80.0', description: 'Endometriosis / Adenomyosis of uterus' }],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-IN017B / 2849-IN019B',
        packageName: 'PVA / Gelfoam Embolisation of Uterine Arteries (UFE)',
        baseTariffINR: 30400,
        implants: [
          {
            code: '2849-IN017B IMP 22',
            name: 'PVA Particles',
            unitPriceINR: 5500,
            maxUnits: 4,
            isMandatory: true,
            category: 'Embolic / Drug',
          },
          {
            code: '2849-IN017B IMP 23',
            name: 'Microcatheter',
            unitPriceINR: 19000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Microcatheter',
          },
        ],
        preAuthChecklist: ['Pelvic MRI / USG documenting fibroid count and size', 'Bilateral uterine artery roadmapping angiograms', 'Post-embolization completion angiograms'],
        clinicalCriteria: 'Symptomatic uterine leiomyomata desiring uterine preservation.',
      },
      RGHS: {
        packageCode: '693 / 661',
        packageName: 'Therapeutic Embolization (693) / Uterine Artery Embolization (661)',
        baseTariffINR: 32000,
        implants: [],
        preAuthChecklist: ['Pelvic MRI / USG report', 'Gynecology consultation note', 'Pre & post DSA images'],
        clinicalCriteria: 'Symptomatic uterine fibroids in eligible beneficiaries.',
      },
      AB_PMJAY: {
        packageCode: 'GY034A',
        packageName: 'Transcatheter Uterine Artery Embolization',
        baseTariffINR: 26500,
        implants: [],
        preAuthChecklist: ['Pre-auth pelvic ultrasound / MRI report', 'Post-procedure devascularization spot films'],
        clinicalCriteria: 'Symptomatic uterine fibroids or obstetric hemorrhage.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-14',
        packageName: 'SMS Hospital Institutional UFE Package',
        baseTariffINR: 16000,
        implants: [],
        preAuthChecklist: ['OPD card and imaging report', 'Procedural consent'],
        clinicalCriteria: 'Self-paying patients seeking fibroid embolization.',
      },
    },
  },

  // 16. Splenic Artery Embolization
  {
    id: 'splenic-embolization',
    name: 'Splenic Artery Embolization (SAE / Pseudoaneurysm)',
    shortName: 'Splenic Artery Embolization',
    category: 'Vascular Embolization',
    organSystem: 'Hepatobiliary',
    routineRank: 16,
    primaryIndication: 'Splenic Trauma / Laceration, Splenic Artery Aneurysm / Pseudoaneurysm, Hypersplenism',
    icd10: {
      code: 'I72.8',
      description: 'Aneurysm and dissection of other specified arteries (Splenic artery)',
      secondaryCodes: [{ code: 'S36.039A', description: 'Laceration of spleen' }, { code: 'D73.1', description: 'Hypersplenism' }],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-IN020B / 2849-IN022A',
        packageName: 'Coil / Vascular Plug Embolisation of Splenic Artery',
        baseTariffINR: 39280,
        implants: [
          {
            code: '2849-IN020B IMP 379',
            name: 'Microcatheter',
            unitPriceINR: 19000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Microcatheter',
          },
          {
            code: '2849-IN020B IMP 380',
            name: 'Coils max 3',
            unitPriceINR: 21700,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
          },
          {
            code: '2849-IN022A IMP 25',
            name: 'Vascular Plug',
            unitPriceINR: 44000,
            maxUnits: 1,
            isMandatory: false,
            category: 'Balloon / Stent',
          },
        ],
        preAuthChecklist: ['Pre-procedure Emergency CECT Abdomen', 'Pre-embolization celiac / splenic angiogram', 'Post-embolization completion angiogram'],
        clinicalCriteria: 'Splenic trauma with active extravasation, splenic aneurysm, or hypersplenism.',
      },
      RGHS: {
        packageCode: '693 / 1320 / 573',
        packageName: 'Therapeutic Embolization (693) / Vascular Embolization (1320) / Splenic Interventions (573)',
        baseTariffINR: 32000,
        implants: [],
        preAuthChecklist: ['Emergency CT Abdomen report', 'Pre and post embolization DSA images'],
        clinicalCriteria: 'Emergency splenic trauma or symptomatic splenic artery aneurysm.',
      },
      AB_PMJAY: {
        packageCode: 'TR088A',
        packageName: 'Emergency Transcatheter Splenic Embolization for Trauma',
        baseTariffINR: 32000,
        implants: [],
        preAuthChecklist: ['Polytrauma sheet and CT scan', 'Angiogram showing active extravasation control'],
        clinicalCriteria: 'Spleen-preserving non-operative management in eligible beneficiaries.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-13',
        packageName: 'SMS Hospital Institutional Splenic Embolization Package',
        baseTariffINR: 20000,
        implants: [],
        preAuthChecklist: ['Emergency registration card', 'Procedural consent'],
        clinicalCriteria: 'Splenic artery intervention for non-insured patients.',
      },
    },
  },

  // 17. Varicocele Embolization
  {
    id: 'varicocele',
    name: 'Varicocele Embolization',
    shortName: 'Varicocele Embolization',
    category: 'Vascular Embolization',
    organSystem: 'Genitourinary & Pelvic',
    routineRank: 17,
    primaryIndication: 'Symptomatic Scrotal Varices, Scrotal Pain, Male Subfertility',
    icd10: {
      code: 'I86.1',
      description: 'Scrotal varices (Varicocele)',
      secondaryCodes: [{ code: 'N46.8', description: 'Other male infertility' }],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-IN020B',
        packageName: 'Selective Coil Embolisation of Gonadal Veins',
        baseTariffINR: 30340,
        implants: [
          {
            code: '2849-IN020B IMP 379',
            name: 'Microcatheter',
            unitPriceINR: 19000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Microcatheter',
          },
          {
            code: '2849-IN020B IMP 380',
            name: 'Coils',
            unitPriceINR: 21700,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
          },
        ],
        preAuthChecklist: ['Scrotal Doppler USG showing pampiniform venous reflux', 'Retrograde internal spermatic venogram', 'Post-embolization completion venogram'],
        clinicalCriteria: 'Grade II/III varicocele with persistent pain or male subfertility.',
      },
      RGHS: {
        packageCode: '1320',
        packageName: 'Vascular Embolization (Varicocele / Gonadal Vein)',
        baseTariffINR: 32000,
        implants: [],
        preAuthChecklist: ['Scrotal Doppler report', 'Pre and post embolization DSA images'],
        clinicalCriteria: 'Symptomatic varicocele in beneficiaries.',
      },
      AB_PMJAY: {
        packageCode: 'MC020B',
        packageName: 'Transcatheter Embolization of Varicocele',
        baseTariffINR: 25000,
        implants: [],
        preAuthChecklist: ['Pre-auth scrotal ultrasound Doppler report', 'Post-procedure fluoroscopy run'],
        clinicalCriteria: 'Palpable varicocele with documented testicular pain or subfertility.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-06',
        packageName: 'SMS Hospital Institutional Varicocele Package',
        baseTariffINR: 14000,
        implants: [],
        preAuthChecklist: ['OPD slip with Doppler report', 'RMRS billing receipt'],
        clinicalCriteria: 'Daycare transvenous varicocele coiling.',
      },
    },
  },

  // 18. PCN
  {
    id: 'pcn',
    name: 'Percutaneous Nephrostomy (PCN)',
    shortName: 'PCN',
    category: 'Renal & Urinary',
    organSystem: 'Renal & Urological',
    routineRank: 18,
    primaryIndication: 'Obstructive Uropathy, Hydronephrosis, Pyonephrosis, Ureteric Calculus / Malignancy',
    icd10: {
      code: 'N13.3',
      description: 'Other and unspecified hydronephrosis',
      secondaryCodes: [{ code: 'N13.6', description: 'Pyonephrosis' }, { code: 'N17.9', description: 'Acute kidney injury' }],
    },
    schemes: {
      MAAY: {
        packageCode: '1849-IN013A',
        packageName: 'Percutaneous Nephrostomy (PCN)',
        baseTariffINR: 14000,
        implants: [],
        preAuthChecklist: ['Ultrasound KUB / NCCT KUB demonstrating hydronephrosis', 'Fluoroscopic / USG spot of needle access into calyx', 'Nephrostogram film showing locked pigtail loop'],
        clinicalCriteria: 'Acute or chronic obstructive uropathy with renal dysfunction.',
      },
      RGHS: {
        packageCode: '910',
        packageName: 'Ultrasound Guided Percutaneous Nephrostomy (PCN)',
        baseTariffINR: 18500,
        implants: [],
        preAuthChecklist: ['USG / CT KUB demonstrating hydronephrosis', 'Fluoroscopy confirmation spot radiograph'],
        clinicalCriteria: 'Urinary diversion for obstruction or ureteral leak.',
      },
      AB_PMJAY: {
        packageCode: 'UR042A',
        packageName: 'Percutaneous Nephrostomy for Obstructive Uropathy',
        baseTariffINR: 12500,
        implants: [],
        preAuthChecklist: ['Diagnostic imaging confirming hydronephrosis', 'Catheter position radiograph'],
        clinicalCriteria: 'Emergency or planned urinary diversion.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-08',
        packageName: 'SMS Hospital Institutional PCN Package',
        baseTariffINR: 5500,
        implants: [],
        preAuthChecklist: ['OPD / Emergency registration receipt', 'Procedure consent'],
        clinicalCriteria: 'Obstructive uropathy in self-paying patients.',
      },
    },
  },

  // 19. PCD
  {
    id: 'pcd',
    name: 'Percutaneous Catheter Drainage (PCD)',
    shortName: 'PCD',
    category: 'Drainage & Biopsy',
    organSystem: 'Hepatobiliary',
    routineRank: 19,
    primaryIndication: 'Liver Abscess, Intra-Abdominal Abscess, Post-Op Fluid Collection, Cholecystostomy',
    icd10: {
      code: 'K75.0',
      description: 'Abscess of liver (Pyogenic / Amebic)',
      secondaryCodes: [{ code: 'A06.4', description: 'Amebic liver abscess' }],
    },
    schemes: {
      MAAY: {
        packageCode: '1849-IN057A / 1849-IN056A',
        packageName: 'Image Guided Percutaneous Drainage Placement / Cholecystostomy',
        baseTariffINR: 7000,
        implants: [],
        preAuthChecklist: ['Ultrasound / CECT Abdomen demonstrating fluid collection', 'Real-time USG snapshot documenting needle insertion', 'Post-procedure aspirate record and locked pigtail confirmation'],
        clinicalCriteria: 'Abscess cavity > 5 cm or clinical sepsis requiring drainage.',
      },
      RGHS: {
        packageCode: '1317 / 1660',
        packageName: 'Ultrasound Guided Abscess Drainage (1317) / CT Guided Drainage (1660)',
        baseTariffINR: 12000,
        implants: [],
        preAuthChecklist: ['USG / CT Abdomen report', 'Drainage tube position film'],
        clinicalCriteria: 'Symptomatic liver abscess or intra-abdominal fluid collection.',
      },
      AB_PMJAY: {
        packageCode: 'SG057A',
        packageName: 'Percutaneous Pigtail Catheter Drainage of Abdominal Abscess',
        baseTariffINR: 9500,
        implants: [],
        preAuthChecklist: ['Ultrasound scan proving abscess', 'Procedure log with volume of pus evacuated'],
        clinicalCriteria: 'Abscess or fluid collection requiring percutaneous drainage.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-11',
        packageName: 'SMS Hospital Institutional PCD Package',
        baseTariffINR: 4000,
        implants: [],
        preAuthChecklist: ['RMRS ticket', 'Specimen culture requisition'],
        clinicalCriteria: 'Percutaneous drainage in self-paying patients.',
      },
    },
  },

  // 20. Core Biopsy
  {
    id: 'core-biopsy',
    name: 'Image-Guided Core Biopsy',
    shortName: 'Core Biopsy',
    category: 'Drainage & Biopsy',
    organSystem: 'Drainage & Biopsy',
    routineRank: 20,
    primaryIndication: 'Indeterminate Deep Visceral / Retroperitoneal / Hepatic / Lung / Renal Mass',
    icd10: {
      code: 'R93.2',
      description: 'Abnormal findings on diagnostic imaging of liver and biliary tract',
      secondaryCodes: [{ code: 'C80.1', description: 'Malignant neoplasm, unspecified' }],
    },
    schemes: {
      MAAY: {
        packageCode: '1849-MG076A',
        packageName: 'Image Guided Biopsy (USG / CT)',
        baseTariffINR: 5000,
        implants: [],
        preAuthChecklist: ['Diagnostic cross-sectional imaging (CT / MRI / USG)', 'Coagulation profile (INR, Platelets)', 'Snapshot demonstrating biopsy needle inside target lesion', 'Histopathology sample requisition'],
        clinicalCriteria: 'Indeterminate mass requiring histological confirmation.',
      },
      RGHS: {
        packageCode: '381 / 579 / 842 / 1659',
        packageName: 'Trucut Needle Biopsy (381) / CT Guided Biopsy (579) / USG Biopsy (842/1659)',
        baseTariffINR: 6500,
        implants: [],
        preAuthChecklist: ['Diagnostic CT/MRI scan', 'Coagulation report', 'Post-biopsy observation chart'],
        clinicalCriteria: 'Eligible state beneficiaries needing tissue diagnosis.',
      },
      AB_PMJAY: {
        packageCode: 'RD076A',
        packageName: 'Ultrasound or CT Guided Core Biopsy of Deep Organs',
        baseTariffINR: 4500,
        implants: [],
        preAuthChecklist: ['Oncology referral form', 'Normal coagulation parameters', 'Specimen handoff receipt'],
        clinicalCriteria: 'Diagnostic tissue acquisition for suspected malignancy.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-12',
        packageName: 'SMS Hospital Institutional Core Biopsy Package',
        baseTariffINR: 3200,
        implants: [],
        preAuthChecklist: ['OPD registration card and RMRS receipt', 'Consent form'],
        clinicalCriteria: 'Outpatient or inpatient biopsy in self-paying patients.',
      },
    },
  },

  // 21. Permacath
  {
    id: 'permacath',
    name: 'Tunnelled Cuffed Hemodialysis Catheter Placement (Permacath)',
    shortName: 'Permacath',
    category: 'Venous Interventions',
    organSystem: 'Dialysis & Access',
    routineRank: 21,
    primaryIndication: 'End-Stage Renal Disease (ESRD) Requiring Long-Term Maintenance Hemodialysis Vascular Access',
    icd10: {
      code: 'Z99.2',
      description: 'Dependence on renal dialysis',
      secondaryCodes: [{ code: 'N18.6', description: 'End stage renal disease' }],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-IN009A',
        packageName: 'Tunnelled Long-Term Venous Catheter (Permacath)',
        baseTariffINR: 16000,
        implants: [
          {
            code: '2849-IN009A-IMP16',
            name: 'Permacath Double Lumen Catheter',
            unitPriceINR: 12000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Drain / Catheter',
          },
        ],
        preAuthChecklist: ['Nephrology referral for hemodialysis access', 'Fluoroscopic spot showing catheter tip in right atrium', 'Post-tunneling chest radiograph ruling out pneumothorax'],
        clinicalCriteria: 'ESRD patient needing long-term cuffed hemodialysis access.',
      },
      RGHS: {
        packageCode: '362 / 578',
        packageName: 'Permacath Insertion (362) / Venous Catheterization (578)',
        baseTariffINR: 18000,
        implants: [],
        preAuthChecklist: ['Dialysis unit prescription', 'Catheter placement check film'],
        clinicalCriteria: 'Permanent or bridge dialysis access in state beneficiaries.',
      },
      AB_PMJAY: {
        packageCode: 'VS009A',
        packageName: 'Tunnelled Dual Lumen Hemodialysis Catheter Insertion',
        baseTariffINR: 15000,
        implants: [],
        preAuthChecklist: ['Maintenance hemodialysis proof', 'Chest X-ray confirmation'],
        clinicalCriteria: 'ESRD beneficiaries requiring tunnelled dialysis access.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-21',
        packageName: 'SMS Hospital Institutional Permacath Package',
        baseTariffINR: 6500,
        implants: [],
        preAuthChecklist: ['RMRS billing clearance', 'Procedure consent'],
        clinicalCriteria: 'Self-paying dialysis patients.',
      },
    },
  },

  // 22. Pleurex Catheter
  {
    id: 'pleurex',
    name: 'Tunnelled Long-Term Indwelling Pleural / Peritoneal Catheter (Pleurx)',
    shortName: 'Pleurx Catheter',
    category: 'Drainage & Biopsy',
    organSystem: 'Thoracic & Pulmonology',
    routineRank: 22,
    primaryIndication: 'Recurrent Malignant Pleural Effusion or Refractory Malignant Ascites',
    icd10: {
      code: 'R18.8',
      description: 'Other ascites (Malignant ascites / Pleural effusion)',
      secondaryCodes: [{ code: 'J91.0', description: 'Malignant pleural effusion' }],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-IN010A',
        packageName: 'Tunnelled Longterm Indwelling Catheter (Pleurex)',
        baseTariffINR: 18000,
        implants: [
          {
            code: '2849-IN010A-IMP17',
            name: 'Pleurex Kit',
            unitPriceINR: 15000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Drain / Catheter',
          },
        ],
        preAuthChecklist: ['Pre-procedure CXR / CT documenting recurrent symptomatic effusion', 'Ultrasound spot showing fluid pocket and needle entry', 'Post-placement CXR showing catheter path and expanded lung'],
        clinicalCriteria: 'Recurrent symptomatic malignant pleural effusion or ascites.',
      },
      RGHS: {
        packageCode: '1660',
        packageName: 'CT / Image Guided Drainage & Indwelling Catheter',
        baseTariffINR: 16000,
        implants: [],
        preAuthChecklist: ['Oncology referral', 'Post-procedure chest radiograph'],
        clinicalCriteria: 'Malignant effusion in eligible state beneficiaries.',
      },
      AB_PMJAY: {
        packageCode: 'RS010A',
        packageName: 'Indwelling Tunnelled Catheter for Malignant Effusion',
        baseTariffINR: 14000,
        implants: [],
        preAuthChecklist: ['Oncology records', 'Catheter placement radiograph'],
        clinicalCriteria: 'Recurrent malignant pleural effusion.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-22',
        packageName: 'SMS Hospital Institutional Pleurx Package',
        baseTariffINR: 7000,
        implants: [],
        preAuthChecklist: ['RMRS indoor slip', 'Procedural consent'],
        clinicalCriteria: 'Self-paying oncology patients requiring palliative indwelling catheter.',
      },
    },
  },

  // 23. Venous Stenting
  {
    id: 'venous-stenting',
    name: 'Venous Angioplasty & Stenting (May-Thurner / SVC / Iliac)',
    shortName: 'Venous Stenting',
    category: 'Venous Interventions',
    organSystem: 'Venous & Lymphatic',
    routineRank: 23,
    primaryIndication: 'May-Thurner Syndrome (Iliocaval Obstruction), Superior Vena Cava (SVC) Syndrome',
    icd10: {
      code: 'I87.1',
      description: 'Compression of vein (SVC / Iliac vein compression)',
      secondaryCodes: [{ code: 'I82.2', description: 'Embolism and thrombosis of vena cava' }],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-IN0246C',
        packageName: 'Angioplasty and Bare Metal Stenting Venous',
        baseTariffINR: 42000,
        implants: [
          {
            code: '2849-IN0246C IMP 385',
            name: 'Balloon',
            unitPriceINR: 9800,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
          },
          {
            code: '2849-IN0246C IMP 386',
            name: 'High pressure large balloon',
            unitPriceINR: 18800,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
          },
          {
            code: '2849-IN0246C IMP 387',
            name: 'Metallic stent',
            unitPriceINR: 37000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
          },
        ],
        preAuthChecklist: ['CT / MR Venogram demonstrating severe venous stenosis / compression', 'Trans-stenotic pressure gradient recording', 'Post-stent deployment completion venogram'],
        clinicalCriteria: 'Symptomatic iliofemoral or central venous obstruction.',
      },
      RGHS: {
        packageCode: '1323 / 1322',
        packageName: 'Muscular/Venous Stenting (1323) / Venous Catheterization (1322)',
        baseTariffINR: 35000,
        implants: [],
        preAuthChecklist: ['CT Venography report', 'Pre and post stenting venograms'],
        clinicalCriteria: 'Chronic venous occlusion or May-Thurner syndrome.',
      },
      AB_PMJAY: {
        packageCode: 'VS024C',
        packageName: 'Percutaneous Venous Stenting for Venous Obstruction',
        baseTariffINR: 32000,
        implants: [],
        preAuthChecklist: ['CTV report', 'Venogram runs showing patent stent'],
        clinicalCriteria: 'Ilio-caval or central thoracic venous obstruction.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-23',
        packageName: 'SMS Hospital Institutional Venous Stenting Package',
        baseTariffINR: 22000,
        implants: [],
        preAuthChecklist: ['Inpatient ticket', 'Procedural consent'],
        clinicalCriteria: 'Venous angioplasty and stenting for self-paying patients.',
      },
    },
  },

  // 24. Thrombectomy / CDT
  {
    id: 'thrombectomy',
    name: 'Percutaneous Catheter-Directed Thrombolysis (CDT) & Thrombectomy',
    shortName: 'Thrombectomy / CDT',
    category: 'Venous Interventions',
    organSystem: 'Venous & Lymphatic',
    routineRank: 24,
    primaryIndication: 'Acute Iliofemoral Deep Vein Thrombosis (DVT), Massive Pulmonary Embolism, Acute Arterial Thromboembolism',
    icd10: {
      code: 'I82.9',
      description: 'Embolism and thrombosis of unspecified vein',
      secondaryCodes: [{ code: 'I82.40', description: 'Acute DVT of lower extremity' }],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-IN024A / 2849-IN025A',
        packageName: 'CDT / Thrombectomy Followed by Thrombolysis',
        baseTariffINR: 36000,
        implants: [
          {
            code: '2849-IN025A IMP 295',
            name: 'Multi side hole catheter',
            unitPriceINR: 8500,
            maxUnits: 1,
            isMandatory: true,
            category: 'Drain / Catheter',
          },
          {
            code: '2849-IN025A IMP 296',
            name: 'Thrombectomy catheter',
            unitPriceINR: 22000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Kit / Sheath',
          },
        ],
        preAuthChecklist: ['Venous duplex / CT venogram confirming acute occlusive thrombus', 'Pre-intervention occlusion venogram', 'Completion lysis check venogram'],
        clinicalCriteria: 'Acute (< 14 days) extensive DVT risking phlegmasia or post-thrombotic syndrome.',
      },
      RGHS: {
        packageCode: '693 / 1320',
        packageName: 'Therapeutic Transcatheter Interventions (693) / Vascular Interventions (1320)',
        baseTariffINR: 32000,
        implants: [],
        preAuthChecklist: ['Emergency Doppler report', 'ICU monitoring sheet with thrombolytic infusion record'],
        clinicalCriteria: 'Acute limb-threatening DVT or pulmonary embolism.',
      },
      AB_PMJAY: {
        packageCode: 'VS025A',
        packageName: 'Catheter Directed Thrombolysis / Thrombectomy',
        baseTariffINR: 28000,
        implants: [],
        preAuthChecklist: ['Doppler scan confirming extensive clot burden', 'Completion run'],
        clinicalCriteria: 'Acute iliofemoral venous thrombosis.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-24',
        packageName: 'SMS Hospital Institutional CDT / Thrombectomy Package',
        baseTariffINR: 18000,
        implants: [],
        preAuthChecklist: ['ICU admission card', 'High-risk bleeding consent'],
        clinicalCriteria: 'Mechanical thrombectomy and thrombolysis for self-paying patients.',
      },
    },
  },

  // 25. RFA / MWA Ablation
  {
    id: 'rfa-mwa',
    name: 'Image-Guided Radiofrequency / Microwave Ablation (RFA / MWA)',
    shortName: 'RFA / MWA Ablation',
    category: 'Interventional Oncology',
    organSystem: 'Musculoskeletal & Soft Tissue',
    routineRank: 25,
    primaryIndication: 'Osteoid Osteoma, Hepatocellular Carcinoma / Colorectal Liver Metastases (< 3 cm), Thyroid Nodule, Breast Fibroadenoma',
    icd10: {
      code: 'M89.8',
      description: 'Other specified disorders of bone (Osteoid osteoma)',
      secondaryCodes: [{ code: 'C22.0', description: 'Hepatocellular carcinoma' }],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-IN044A / 2849-IN071A',
        packageName: 'RFA Osteoid Osteoma / MWA (Breast, Thyroid)',
        baseTariffINR: 32000,
        implants: [
          {
            code: '2849-IN044A IMP 34',
            name: 'RF probe',
            unitPriceINR: 28000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Needle / Core',
          },
          {
            code: '2849-IN071A IMP 53',
            name: 'MW Antenna',
            unitPriceINR: 32000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Needle / Core',
          },
        ],
        preAuthChecklist: ['CT / MRI identifying nidus or target tumor', 'CT spot showing electrode centered in nidus', 'Post-ablation scan showing thermal coagulation zone'],
        clinicalCriteria: 'Osteoid osteoma with night pain or unresectable small solid tumor.',
      },
      RGHS: {
        packageCode: '1660 / 579',
        packageName: 'CT Guided Percutaneous Intervention (1660) / Image Guided Procedure (579)',
        baseTariffINR: 28000,
        implants: [],
        preAuthChecklist: ['CT / MRI report', 'Pre and intra-procedural CT guidance images'],
        clinicalCriteria: 'Eligible state beneficiaries undergoing tumor ablation.',
      },
      AB_PMJAY: {
        packageCode: 'ON044A',
        packageName: 'Radiofrequency / Microwave Ablation of Neoplasm',
        baseTariffINR: 26000,
        implants: [],
        preAuthChecklist: ['Cross-sectional imaging proving lesion', 'Cath lab ablation run record'],
        clinicalCriteria: 'Tumor ablation in eligible beneficiaries.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-25',
        packageName: 'SMS Hospital Institutional RFA / MWA Package',
        baseTariffINR: 14000,
        implants: [],
        preAuthChecklist: ['OPD ticket', 'Procedural consent'],
        clinicalCriteria: 'Ablation procedure for self-paying patients.',
      },
    },
  },

  // 26. Diagnostic DSA
  {
    id: 'diagnostic-dsa',
    name: 'Diagnostic Digital Subtraction Angiography (DSA)',
    shortName: 'Diagnostic DSA',
    category: 'Vascular Embolization',
    organSystem: 'Peripheral & Visceral Vascular',
    routineRank: 26,
    primaryIndication: 'Diagnostic Vascular Evaluation, Peripheral Arterial Disease, Visceral Angiogram, Vasculitis',
    icd10: {
      code: 'Z01.818',
      description: 'Encounter for other preprocedural examination',
      secondaryCodes: [{ code: 'I73.9', description: 'Peripheral vascular disease' }],
    },
    schemes: {
      MAAY: {
        packageCode: '1849-IN072A',
        packageName: 'Diagnostic Angiography (DSA)',
        baseTariffINR: 10000,
        implants: [],
        preAuthChecklist: ['Clinical vascular assessment slip', 'Pre-procedure renal function tests', 'Catheter placement spot film and diagnostic angiographic series'],
        clinicalCriteria: 'Diagnostic vascular imaging when non-invasive imaging is inconclusive.',
      },
      RGHS: {
        packageCode: '577 / 578 / 1319',
        packageName: 'DSA Peripheral Artery (577) / DSA Venogram (578) / Diagnostic Angiography (1319)',
        baseTariffINR: 12000,
        implants: [],
        preAuthChecklist: ['Clinical referral note', 'Angiographic image printouts'],
        clinicalCriteria: 'Diagnostic angiographic evaluation for eligible state beneficiaries.',
      },
      AB_PMJAY: {
        packageCode: 'RD072A',
        packageName: 'Diagnostic Digital Subtraction Angiography',
        baseTariffINR: 9000,
        implants: [],
        preAuthChecklist: ['Vascular consultation record', 'DSA series images'],
        clinicalCriteria: 'Diagnostic angiography for eligible beneficiaries.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-26',
        packageName: 'SMS Hospital Institutional Diagnostic DSA Package',
        baseTariffINR: 5000,
        implants: [],
        preAuthChecklist: ['RMRS counter receipt', 'Consent form for arterial/venous puncture'],
        clinicalCriteria: 'Diagnostic DSA for self-paying patients.',
      },
    },
  },

  // 27. IVC Filter Placement
  {
    id: 'ivc-filter',
    name: 'Inferior Vena Cava (IVC) Filter Placement',
    shortName: 'IVC Filter Placement',
    category: 'Venous Interventions',
    organSystem: 'Venous & Lymphatic',
    routineRank: 27,
    primaryIndication: 'Acute DVT with Absolute Contraindication to Anticoagulation or Recurrent PE Despite Anticoagulation',
    icd10: {
      code: 'I82.9',
      description: 'Embolism and thrombosis of unspecified vein',
      secondaryCodes: [{ code: 'I26.99', description: 'Pulmonary embolism' }],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-IN026C',
        packageName: 'IVC Filter Placement',
        baseTariffINR: 28000,
        implants: [
          {
            code: '2849-IN026C-IMP01',
            name: 'Retrievable IVC Filter',
            unitPriceINR: 38000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
          },
        ],
        preAuthChecklist: ['Venous Doppler proving DVT', 'Documentation of anticoagulation contraindication', 'Cavogram showing renal vein confluence', 'Post-deployment fluoroscopy spot proving apex at renal vein ostia'],
        clinicalCriteria: 'Documented acute DVT/PE where anticoagulation is contraindicated or ineffective.',
      },
      RGHS: {
        packageCode: '588',
        packageName: 'IVC Filter Implantation',
        baseTariffINR: 26000,
        implants: [],
        preAuthChecklist: ['Doppler DVT report', 'Anticoagulation contraindication note', 'Fluoroscopy deployment film'],
        clinicalCriteria: 'State beneficiaries with acute DVT unable to undergo anticoagulation.',
      },
      AB_PMJAY: {
        packageCode: 'VS026C',
        packageName: 'Percutaneous Inferior Vena Cava Filter Placement',
        baseTariffINR: 24000,
        implants: [],
        preAuthChecklist: ['Pre-auth justification form with contraindication note', 'Cavogram run'],
        clinicalCriteria: 'Eligible beneficiaries requiring mechanical protection against PE.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-27',
        packageName: 'SMS Hospital Institutional IVC Filter Package',
        baseTariffINR: 15000,
        implants: [],
        preAuthChecklist: ['Emergency / Inpatient ticket', 'Filter deployment consent form'],
        clinicalCriteria: 'Self-paying patients requiring IVC filter insertion.',
      },
    },
  },
];

// --------------------------------------------------------------------------
// HELPER UTILITIES
// --------------------------------------------------------------------------

export function calculateSchemeTotal(schemeDetail: SchemePricingDetail, selectedImplantCodes?: string[]): {
  baseTariff: number;
  mandatoryImplantsTotal: number;
  optionalImplantsTotal: number;
  selectedImplantsTotal: number;
  grandTotal: number;
} {
  const baseTariff = schemeDetail.baseTariffINR;
  let mandatoryImplantsTotal = 0;
  let optionalImplantsTotal = 0;
  let selectedImplantsTotal = 0;

  for (const imp of schemeDetail.implants) {
    const cost = imp.unitPriceINR * (imp.maxUnits || 1);
    if (imp.isMandatory) {
      mandatoryImplantsTotal += cost;
    } else {
      optionalImplantsTotal += cost;
    }

    if (selectedImplantCodes) {
      if (selectedImplantCodes.includes(imp.code)) {
        selectedImplantsTotal += cost;
      }
    } else {
      selectedImplantsTotal += cost;
    }
  }

  const grandTotal = baseTariff + (selectedImplantCodes ? selectedImplantsTotal : (mandatoryImplantsTotal + optionalImplantsTotal));

  return {
    baseTariff,
    mandatoryImplantsTotal,
    optionalImplantsTotal,
    selectedImplantsTotal,
    grandTotal,
  };
}

export interface PatientTmsPayload {
  patientName?: string;
  crNo?: string;
  ipdNo?: string;
  janAadhaarOrPolicy?: string;
  contactNo?: string;
}

/**
 * Formats a clean, standard, portal-ready block of text to be copied
 * directly into the Rajasthan Health Portal (TMS) / e-Hospital booking notes.
 */
export function formatTmsClipboardBlock(
  procedure: ProcedureCorrelationItem,
  yojanaKey: YojanaSchemeKey,
  patient?: PatientTmsPayload,
  selectedImplantCodes?: string[]
): string {
  const yojana = YOJANA_SCHEMES[yojanaKey];
  const schemeDetail = procedure.schemes[yojanaKey];
  const pricing = calculateSchemeTotal(schemeDetail, selectedImplantCodes);

  const activeImplants = schemeDetail.implants.filter((imp) =>
    selectedImplantCodes ? selectedImplantCodes.includes(imp.code) : true
  );

  const implantLines = activeImplants.length > 0
    ? activeImplants
        .map(
          (imp, i) =>
            `   [${i + 1}] Code: ${imp.code} | ${imp.name} | Capped: ₹${imp.unitPriceINR.toLocaleString('en-IN')}${imp.maxUnits > 1 ? ` (Qty: ${imp.maxUnits})` : ''} [${imp.isMandatory ? 'MANDATORY' : 'OPTIONAL'}]`
        )
        .join('\n')
    : '   None / Included in base package';

  const checklistLines = schemeDetail.preAuthChecklist
    .map((item, idx) => `   (${idx + 1}) ${item}`)
    .join('\n');

  return `======================================================================
SMS MEDICAL COLLEGE & HOSPITAL, JAIPUR | DEPT OF INTERVENTIONAL RADIOLOGY
TMS / E-HOSPITAL PRE-AUTHORIZATION & BOOKING CORRELATION SLIP
======================================================================
${patient?.patientName ? `PATIENT: ${patient.patientName.toUpperCase()}` : ''}${patient?.crNo ? ` | CR: ${patient.crNo}` : ''}${patient?.ipdNo ? ` | IPD: ${patient.ipdNo}` : ''}
${patient?.janAadhaarOrPolicy ? `JAN AADHAAR / POLICY / TID: ${patient.janAadhaarOrPolicy}\n` : ''}SCHEME (YOJANA): ${yojana.label}
TARGET PORTAL: ${yojana.portalName}

PROCEDURE DETAILS:
- Name: ${procedure.name} (${procedure.shortName})
- Organ System: ${procedure.organSystem} | Category: ${procedure.category}
- Clinical Indication: ${procedure.primaryIndication}

DIAGNOSIS & ICD-10 CORRELATION:
- Primary ICD-10 Code: ${procedure.icd10.code}
- Clinical Description: ${procedure.icd10.description}
${procedure.icd10.secondaryCodes ? procedure.icd10.secondaryCodes.map(c => `- Secondary ICD-10: ${c.code} (${c.description})`).join('\n') : ''}

FINANCIAL & PACKAGE TARIFF BREAKDOWN:
- Package Code: ${schemeDetail.packageCode}
- Package Name: ${schemeDetail.packageName}
- Base Package Tariff: ₹${schemeDetail.baseTariffINR.toLocaleString('en-IN')}
${schemeDetail.statusNote ? `  * Note: ${schemeDetail.statusNote}\n` : ''}- Total Implants / Consumables Cap: ₹${pricing.selectedImplantsTotal.toLocaleString('en-IN')}
>>> TOTAL APPROVED AMOUNT FOR PRE-AUTH: ₹${pricing.grandTotal.toLocaleString('en-IN')}

APPROVED HARDWARE & IMPLANTS ADD-ON CODES:
${implantLines}

MANDATORY PRE-AUTHORIZATION CHECKLIST & UPLOADS:
${checklistLines}

CLINICAL CRITERIA:
${schemeDetail.clinicalCriteria}
======================================================================`;
}
