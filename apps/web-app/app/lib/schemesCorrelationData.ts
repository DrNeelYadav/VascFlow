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
    primaryIndication: 'Hepatocellular Carcinoma (HCC BCLC Stage A/B intermediate) or Hypervascular Hepatic Metastases',
    icd10: {
      code: 'C22.0',
      description: 'Liver cell carcinoma (Hepatocellular carcinoma / HCC)',
      secondaryCodes: [
        { code: 'C78.7', description: 'Secondary malignant neoplasm of liver' },
        { code: 'K74.60', description: 'Unspecified cirrhosis of liver' },
      ],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-IN061A',
        packageName: 'Conventional TACE (cTACE - Lipiodol + Chemotherapy)',
        baseTariffINR: 47960,
        statusNote: 'Active official package. Important: Do NOT use DAPT TACE (it gets rejected in portal).',
        implants: [
          {
            code: '2849-IN061A IMP 38',
            name: 'Lipiodol Ultra Fluid Ampoule (10 mL)',
            unitPriceINR: 18000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Embolic / Drug',
            remarks: 'Requires empty ampoule photo with barcode',
          },
          {
            code: '2849-IN061A IMP 39',
            name: 'Steerable Microcatheter & Hydrophilic Microguidewire (2.4F/2.7F)',
            unitPriceINR: 19000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Microcatheter',
            remarks: 'Terumo Progreat / Boston Scientific Renegade',
          },
        ],
        preAuthChecklist: [
          'Pre-procedure Triphasic CECT or Dynamic Contrast MRI Liver (LI-RADS 4/5)',
          'Liver Function Tests (Total Bilirubin < 3.0 mg/dL, Albumin, Child-Pugh A/B score)',
          'Pre-embolization selective celiac / proper hepatic angiographic run',
          'Post-chemoembolization devascularization spot run ("tree in winter" stasis)',
          'Chemotherapy drug vial (Doxorubicin / Epirubicin) and Lipiodol packaging barcode photos',
        ],
        clinicalCriteria: 'BCLC Intermediate Stage (Stage B) or Child-Pugh A/B with preserved performance status (ECOG 0-1).',
      },
      RGHS: {
        packageCode: 'RGHS-714',
        packageName: 'Transcatheter Arterial Chemoembolization (TACE - State Empanelled)',
        baseTariffINR: 42500,
        implants: [
          {
            code: 'RGHS-IMP-TACE-01',
            name: 'Lipiodol Ultra Fluid (10 mL)',
            unitPriceINR: 18000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Embolic / Drug',
          },
          {
            code: 'RGHS-IMP-TACE-02',
            name: 'Microcatheter & Guidewire System',
            unitPriceINR: 19000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Microcatheter',
          },
        ],
        preAuthChecklist: [
          'Multiphasic CECT / MRI liver report with diagnostic criteria',
          'Serum Alpha-Fetoprotein (AFP) report',
          'Pre and post embolization DSA images with patient demographics printed',
        ],
        clinicalCriteria: 'Histologically proven or imaging-confirmed LI-RADS 5 primary hepatocellular carcinoma.',
      },
      AB_PMJAY: {
        packageCode: 'MG051A',
        packageName: 'Transarterial Chemoembolization for Liver Cancer',
        baseTariffINR: 45000,
        implants: [
          {
            code: 'PMJAY-IMP-LIP',
            name: 'Lipiodol + Microcatheter Composite Embolic Kit',
            unitPriceINR: 35000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Embolic / Drug',
          },
        ],
        preAuthChecklist: [
          'Clinical summary and CT/MRI abdomen demonstrating liver lesion',
          'CBC, LFT, Coagulation Profile (PT/INR < 1.6)',
          'Post-procedure DSA run proving tumor devascularization',
        ],
        clinicalCriteria: 'Unresectable hepatocellular carcinoma with preserved hepatic functional reserve.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-01',
        packageName: 'SMS Hospital Institutional cTACE Package',
        baseTariffINR: 20000,
        statusNote: 'Subsidized SMS Hospital tariff: ₹15,000 procedure fee + ₹5,000 cath-lab facility fee.',
        implants: [
          {
            code: 'HOSP-LIP',
            name: 'Lipiodol Ultra Fluid (Tender / Rate Contract)',
            unitPriceINR: 16500,
            maxUnits: 1,
            isMandatory: true,
            category: 'Embolic / Drug',
          },
          {
            code: 'HOSP-MIC',
            name: 'Microcatheter 2.7F Coaxial Kit',
            unitPriceINR: 17500,
            maxUnits: 1,
            isMandatory: true,
            category: 'Microcatheter',
          },
        ],
        preAuthChecklist: [
          'OPD registration card and RMRS indoor admission ticket',
          'Informed procedural & high-risk consent signed by patient attendant',
          'Requisition slip for departmental buffer consumables',
        ],
        clinicalCriteria: 'Self-paying patient or private indemnity insurance with subsidized SMS college tariff.',
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
      secondaryCodes: [
        { code: 'C7B.02', description: 'Secondary neuroendocrine tumor of liver' },
        { code: 'C78.7', description: 'Secondary malignant neoplasm of liver' },
      ],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-IN 061B',
        packageName: 'DEB TACE (Drug-Eluting Bead TACE)',
        baseTariffINR: 41160,
        implants: [
          {
            code: '2849-IN 061B IMP40',
            name: 'Drug Eluting Beads (DEB 75-150 / 100-300 um, DC Bead / LifePearl)',
            unitPriceINR: 50000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Embolic / Drug',
            remarks: 'Requires sterile lot sticker on billing sheet',
          },
          {
            code: '2849-IN 061B IMP41',
            name: 'Steerable Microcatheter Delivery System',
            unitPriceINR: 19000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Microcatheter',
          },
        ],
        preAuthChecklist: [
          'Pre-procedure Multiphasic CECT / MRI Liver report',
          'Multidisciplinary Tumor Board (MDT) recommendation note',
          'Selective hepatic artery digital subtraction angiogram',
          'Post-DEB stasis confirmation run without non-target embolization',
          'DEB bead vial stickers and outer packaging barcodes',
        ],
        clinicalCriteria: 'Child-Pugh A or select B7 cirrhosis with single or multinodular HCC, ECOG 0-1.',
      },
      RGHS: {
        packageCode: 'RGHS-715',
        packageName: 'Drug-Eluting Bead Chemoembolization (DEB-TACE)',
        baseTariffINR: 38000,
        implants: [
          {
            code: 'RGHS-IMP-DEB-01',
            name: 'Drug Eluting Beads (DEB Vial)',
            unitPriceINR: 50000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Embolic / Drug',
          },
          {
            code: 'RGHS-IMP-DEB-02',
            name: 'Microcatheter System',
            unitPriceINR: 19000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Microcatheter',
          },
        ],
        preAuthChecklist: [
          'CT/MRI imaging proof of tumor vascularity',
          'Doxorubicin loading record & pharmacy bill',
          'Intra-op fluoroscopy cine runs showing tumor devascularization',
        ],
        clinicalCriteria: 'Advanced or multi-focal HCC where systemic toxicity of conventional TACE needs minimization.',
      },
      AB_PMJAY: {
        packageCode: 'MG051B',
        packageName: 'Transarterial DEB Chemoembolization for Liver Neoplasm',
        baseTariffINR: 41000,
        implants: [
          {
            code: 'PMJAY-IMP-DEB',
            name: 'DEB Beads & Coaxial Microcatheter System',
            unitPriceINR: 65000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Embolic / Drug',
          },
        ],
        preAuthChecklist: [
          'Pre-authorization clinical justification form with CECT findings',
          'Serum Creatinine & Bilirubin within safe threshold',
          'Post-procedural cath lab summary with bead sticker',
        ],
        clinicalCriteria: 'Unresectable primary liver cancer in eligible beneficiaries.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-02',
        packageName: 'SMS Hospital Institutional DEB-TACE Package',
        baseTariffINR: 23000,
        statusNote: 'Subsidized SMS Hospital tariff: ₹18,000 procedure fee + ₹5,000 cath-lab fee.',
        implants: [
          {
            code: 'HOSP-DEB',
            name: 'DEB Bead Syringe (DC Bead / HepaSphere)',
            unitPriceINR: 46000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Embolic / Drug',
          },
          {
            code: 'HOSP-MIC',
            name: 'Microcatheter Coaxial System',
            unitPriceINR: 17500,
            maxUnits: 1,
            isMandatory: true,
            category: 'Microcatheter',
          },
        ],
        preAuthChecklist: [
          'Admission order under IR unit and RMRS counter verification',
          'Pharmacy drug receipt for Doxorubicin / chemo agent',
          'Operative record & discharge instructions',
        ],
        clinicalCriteria: 'Elective booking for hepatic chemoembolization with DEB.',
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
    primaryIndication: 'Massive or Recurrent Hemoptysis (> 300 mL/24h or life-threatening) secondary to Post-TB Bronchiectasis, Aspergilloma, Cavitary TB',
    icd10: {
      code: 'R04.2',
      description: 'Hemoptysis (Cough with hemorrhage / pulmonary bleeding)',
      secondaryCodes: [
        { code: 'B90.9', description: 'Sequelae of respiratory and unspecified tuberculosis' },
        { code: 'J47.9', description: 'Bronchiectasis, uncomplicated' },
        { code: 'B44.89', description: 'Other forms of aspergillosis (Aspergilloma)' },
      ],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-MC 018A',
        packageName: 'Bronchial Artery Embolization (BAE) for Massive Hemoptysis',
        baseTariffINR: 30000,
        implants: [
          {
            code: '2849-IN017B-IMP 22',
            name: 'Calibrated PVA Particles (355-500 um / 500-710 um)',
            unitPriceINR: 5500,
            maxUnits: 4,
            isMandatory: true,
            category: 'Embolic / Drug',
            remarks: 'Standard 2-3 vials per bilateral / multi-vessel case',
          },
          {
            code: '2849-IN017B-IMP 23',
            name: 'Coaxial Steerable Microcatheter System',
            unitPriceINR: 19000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Microcatheter',
            remarks: 'Essential for superselective navigation to spare anterior spinal artery',
          },
          {
            code: '2849-IN080ARJ-IMP397',
            name: 'Pushable Platinum Coils (3mm - 6mm)',
            unitPriceINR: 9000,
            maxUnits: 2,
            isMandatory: false,
            category: 'Balloon / Stent',
            remarks: 'Add-on if systemic-pulmonary shunt or bronchial aneurysm present',
          },
        ],
        preAuthChecklist: [
          'Pre-procedure CT Angiogram (CTA) Chest documenting hypertrophied bronchial or non-bronchial systemic arteries',
          'Sputum AFB / GeneXpert / CBNAAT report confirming etiology',
          'Thoracic aortogram identifying bronchial branch takeoff positions',
          'Superselective bronchial angiogram documenting NO Spinal Artery (Adamkiewicz) hairpin hairpin blush',
          'Post-embolization completion devascularization angiogram',
        ],
        clinicalCriteria: 'Active or recurrent hemoptysis with failure of conservative/hemostatic medical management.',
      },
      RGHS: {
        packageCode: 'RGHS-693',
        packageName: 'Therapeutic Transcatheter Embolization (Bronchial / Visceral)',
        baseTariffINR: 32000,
        implants: [
          {
            code: 'RGHS-IMP-PVA',
            name: 'PVA Particles (355-500 um)',
            unitPriceINR: 5500,
            maxUnits: 3,
            isMandatory: true,
            category: 'Embolic / Drug',
          },
          {
            code: 'RGHS-IMP-MIC',
            name: 'Microcatheter System',
            unitPriceINR: 19000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Microcatheter',
          },
          {
            code: 'RGHS-IMP-COIL',
            name: 'Microcoils Pack',
            unitPriceINR: 9000,
            maxUnits: 1,
            isMandatory: false,
            category: 'Balloon / Stent',
          },
        ],
        preAuthChecklist: [
          'Chest CT scan confirming pulmonary parenchymal cavity or bronchiectasis',
          'Pulmonology emergency admission slip with quantified blood loss',
          'Pre and post embolization DSA images with clear patient identification',
        ],
        clinicalCriteria: 'Life-threatening hemoptysis in government employee / pensioner / dependent.',
      },
      AB_PMJAY: {
        packageCode: 'MC018A',
        packageName: 'Emergency Bronchial Artery Embolization for Hemoptysis',
        baseTariffINR: 28000,
        implants: [
          {
            code: 'PMJAY-IMP-BAE',
            name: 'PVA Embolic Particles & Microcatheter System',
            unitPriceINR: 35000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Embolic / Drug',
          },
        ],
        preAuthChecklist: [
          'Emergency admission ticket & chest X-ray / CT findings',
          'Pre-procedure vitals and blood transfusion record',
          'Digital subtraction angiogram showing vessel occlusion',
        ],
        clinicalCriteria: 'Emergency bronchial embolization for acute massive hemoptysis.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-03',
        packageName: 'SMS Hospital Institutional BAE Package',
        baseTariffINR: 16000,
        statusNote: 'Subsidized SMS Hospital tariff: ₹12,000 procedure fee + ₹4,000 cath-lab fee.',
        implants: [
          {
            code: 'HOSP-PVA',
            name: 'Calibrated PVA Particles (Contour / Bead Block)',
            unitPriceINR: 5000,
            maxUnits: 2,
            isMandatory: true,
            category: 'Embolic / Drug',
          },
          {
            code: 'HOSP-MIC',
            name: 'Microcatheter System 2.4F/2.7F',
            unitPriceINR: 17500,
            maxUnits: 1,
            isMandatory: true,
            category: 'Microcatheter',
          },
        ],
        preAuthChecklist: [
          'Emergency OT booking sheet and blood group cross-match record',
          'RMRS subsidy order / deposit receipt',
          'Consent form acknowledging paraplegia risk and post-embolization syndrome',
        ],
        clinicalCriteria: 'Emergency or planned bronchial embolization for non-scheme patients.',
      },
    },
  },

  // 4. VenaSeal Varicose Veins
  {
    id: 'venaseal',
    name: 'Endovenous Cyanoacrylate Glue Closure (VenaSeal / Varicose Veins)',
    shortName: 'VenaSeal Varicose',
    category: 'Venous Interventions',
    organSystem: 'Venous & Lymphatic',
    routineRank: 4,
    primaryIndication: 'Chronic Venous Insufficiency (CVI), Great / Small Saphenous Vein Reflux (CEAP C2 to C6), Venous Ulcers',
    icd10: {
      code: 'I83.9',
      description: 'Varicose veins of lower extremities without ulcer or inflammation',
      secondaryCodes: [
        { code: 'I83.0', description: 'Varicose veins of lower extremities with ulcer' },
        { code: 'I83.2', description: 'Varicose veins of lower extremities with both ulcer and inflammation' },
        { code: 'I87.2', description: 'Venous insufficiency (chronic) (peripheral)' },
      ],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-IN018B',
        packageName: 'Endovascular Liquid Embolisation (VenaSeal Cyanoacrylate Glue Closure)',
        baseTariffINR: 32360,
        statusNote: 'Authorized under liquid embolic / glue endovascular closure for venous reflux.',
        implants: [
          {
            code: '2849-IN018B-VENA',
            name: 'VenaSeal / Cyanoacrylate Endovenous Closure Kit (Glue + Dispenser Gun + Micro-delivery Sheath)',
            unitPriceINR: 45000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Kit / Sheath',
            remarks: 'Medtronic VenaSeal / VariClose kit with delivery catheter',
          },
          {
            code: '2849-IN018BIMP20',
            name: 'Vascular Introducer Sheath & Micropuncture Access Set',
            unitPriceINR: 6500,
            maxUnits: 1,
            isMandatory: true,
            category: 'Kit / Sheath',
          },
        ],
        preAuthChecklist: [
          'Standing Lower Limb Venous Colour Duplex Doppler mapping showing saphenofemoral junction (SFJ) reflux > 0.5s and vein caliber > 5.5mm',
          'Clinical photographs showing visible varicosities or CEAP C3-C6 stasis dermatitis / ulcer',
          'Deep venous system patency verification (r/o active DVT or post-thrombotic deep venous occlusion)',
          'Intraoperative USG confirmation showing catheter tip positioned 3 cm caudal to SFJ prior to glue discharge',
          'Post-glue duplex ultrasound proving non-compressibility and absence of residual reflux',
        ],
        clinicalCriteria: 'Symptomatic GSV/SSV reflux > 500 ms with failure of conservative compression stocking therapy.',
      },
      RGHS: {
        packageCode: 'RGHS-495',
        packageName: 'Non-Thermal Cyanoacrylate Glue Closure for Varicose Veins',
        baseTariffINR: 28500,
        implants: [
          {
            code: 'RGHS-IMP-GLUE-KIT',
            name: 'Endovenous Cyanoacrylate Glue Closure Kit',
            unitPriceINR: 45000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Kit / Sheath',
          },
          {
            code: 'RGHS-IMP-SHEATH',
            name: 'Introducer Sheath Set',
            unitPriceINR: 6000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Kit / Sheath',
          },
        ],
        preAuthChecklist: [
          'Detailed bilateral lower limb venous Doppler map with reflux times and diameters',
          'Clinical photo showing CEAP class',
          'Post-procedure scan proving target vein occlusion',
        ],
        clinicalCriteria: 'Varicose veins with reflux, especially patients with neural proximity or intolerance to tumescent anesthesia.',
      },
      AB_PMJAY: {
        packageCode: 'VS022A',
        packageName: 'Endovascular Embolization for Venous Malformation / Reflux',
        baseTariffINR: 26000,
        implants: [
          {
            code: 'PMJAY-IMP-VENA',
            name: 'Endovenous Glue Closure System',
            unitPriceINR: 42000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Kit / Sheath',
          },
        ],
        preAuthChecklist: [
          'Venous Doppler report with SFJ reflux',
          'Clinical severity scoring (VCSS)',
          'Procedural completion log',
        ],
        clinicalCriteria: 'Symptomatic varicose veins with documented saphenous trunk reflux.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-04',
        packageName: 'SMS Hospital Institutional VenaSeal Package',
        baseTariffINR: 14000,
        statusNote: 'Subsidized SMS Hospital tariff: ₹10,000 procedure fee + ₹4,000 daycare OT fee.',
        implants: [
          {
            code: 'HOSP-VENA-KIT',
            name: 'VenaSeal Closure System (Rate Contract / Patient Sourced)',
            unitPriceINR: 42000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Kit / Sheath',
          },
        ],
        preAuthChecklist: [
          'OPD consultation card and ultrasound mapping sheet',
          'Consent for endovenous chemical ablation without tumescent anesthesia',
          'Post-procedure compression bandage guidance form',
        ],
        clinicalCriteria: 'Self-paying patient seeking walk-in walk-out non-thermal varicose vein closure.',
      },
    },
  },

  // 5. EVLT
  {
    id: 'evlt',
    name: 'Endovenous Laser Therapy (EVLT / EVLA)',
    shortName: 'EVLT Varicose',
    category: 'Venous Interventions',
    organSystem: 'Venous & Lymphatic',
    routineRank: 5,
    primaryIndication: 'Great / Small Saphenous Vein Truncal Reflux, Stasis Dermatitis, Recurrent Venous Ulcers',
    icd10: {
      code: 'I83.9',
      description: 'Varicose veins of lower extremities without ulcer or inflammation',
      secondaryCodes: [
        { code: 'I83.1', description: 'Varicose veins of lower extremities with inflammation' },
        { code: 'I83.0', description: 'Varicose veins of lower extremities with ulcer' },
      ],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-IN028A',
        packageName: 'Endovenous Thermal Ablation (EVLT / EVLA 1470nm Laser)',
        baseTariffINR: 28000,
        implants: [
          {
            code: '2849-IN028A-RAD',
            name: '1470nm Radial 2-Ring Laser Fiber Kit (Biolitec / AngioDynamics)',
            unitPriceINR: 14500,
            maxUnits: 1,
            isMandatory: true,
            category: 'Kit / Sheath',
            remarks: 'Requires sterile lot sticker',
          },
          {
            code: '2849-IN028A-ACC',
            name: 'Tumescent Anesthesia Infiltration Tubing & 6F Introducer Sheath',
            unitPriceINR: 3500,
            maxUnits: 1,
            isMandatory: true,
            category: 'Kit / Sheath',
          },
        ],
        preAuthChecklist: [
          'Standing Duplex Doppler mapping showing SFJ/SPJ reflux > 0.5s',
          'Clinical photographs showing varicose tortuosities or ulceration',
          'Duplex scan documentation confirming laser tip 2.0 - 2.5 cm caudal to SFJ',
          'Tumescent fluid circumferential halo confirmation around target vein',
          'Post-ablation duplex verifying complete occlusion without EHIT (endovenous heat-induced thrombosis)',
        ],
        clinicalCriteria: 'Truncal saphenous reflux with caliber > 4.5mm and clinical severity CEAP C2-C6.',
      },
      RGHS: {
        packageCode: 'RGHS-492',
        packageName: 'Endovenous Laser Ablation (EVLA) for Varicose Veins',
        baseTariffINR: 24500,
        implants: [
          {
            code: 'RGHS-IMP-LASER',
            name: '1470nm Radial Laser Fiber',
            unitPriceINR: 12000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Kit / Sheath',
          },
          {
            code: 'RGHS-IMP-SHEATH',
            name: 'Introducer Sheath 6F',
            unitPriceINR: 3000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Kit / Sheath',
          },
        ],
        preAuthChecklist: [
          'Pre-operative Doppler report with anatomical mapping',
          'Clinical photos with CEAP staging',
          'Discharge summary noting energy delivered (Joules/cm)',
        ],
        clinicalCriteria: 'Eligible state government employees and pensioners with chronic venous reflux.',
      },
      AB_PMJAY: {
        packageCode: 'SU118A',
        packageName: 'Endovenous Laser Ablation for Varicose Veins',
        baseTariffINR: 22000,
        implants: [
          {
            code: 'PMJAY-IMP-EVLT',
            name: 'Radial Laser Fiber & Delivery Sheath Kit',
            unitPriceINR: 15000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Kit / Sheath',
          },
        ],
        preAuthChecklist: [
          'Pre-auth venous Doppler scan showing saphenous reflux',
          'Clinical grading and symptom duration',
          'Post-op Doppler confirmation',
        ],
        clinicalCriteria: 'Severe symptomatic varicose veins refractory to 3 months conservative therapy.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-05',
        packageName: 'SMS Hospital Institutional EVLT Package',
        baseTariffINR: 11000,
        statusNote: 'Subsidized SMS Hospital tariff: ₹8,000 procedure fee + ₹3,000 OT fee.',
        implants: [
          {
            code: 'HOSP-FIBER',
            name: 'Radial Laser Fiber (Rate Contract)',
            unitPriceINR: 12500,
            maxUnits: 1,
            isMandatory: true,
            category: 'Kit / Sheath',
          },
        ],
        preAuthChecklist: [
          'OPD consultation slip with Doppler mapping',
          'Consent form for laser ablation with tumescent local anesthesia',
          'Post-op stockings prescription',
        ],
        clinicalCriteria: 'Daycare laser ablation for self-paying patients.',
      },
    },
  },

  // 6. Varicocele Embolization
  {
    id: 'varicocele',
    name: 'Varicocele Embolization (Unilateral / Bilateral)',
    shortName: 'Varicocele Embolization',
    category: 'Vascular Embolization',
    organSystem: 'Genitourinary & Pelvic',
    routineRank: 6,
    primaryIndication: 'Symptomatic Scrotal Varices (Dull scrotal ache, male subfertility / abnormal semen parameters, testicular atrophy)',
    icd10: {
      code: 'I86.1',
      description: 'Scrotal varices (Varicocele)',
      secondaryCodes: [
        { code: 'N46.8', description: 'Other male infertility (abnormal sperm morphology / motility)' },
        { code: 'N50.819', description: 'Testicular pain' },
      ],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-IN020 B',
        packageName: 'Selective Coil Embolisation of Gonadal / Visceral Veins',
        baseTariffINR: 30340,
        implants: [
          {
            code: '2849-IN020B-IMP1',
            name: 'Coaxial Microcatheter & Hydrophilic Wire System',
            unitPriceINR: 19000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Microcatheter',
          },
          {
            code: '2849-IN020B-IMP2',
            name: 'Controlled Detachable / Pushable 0.035 / 0.018 Platinum Coils Pack',
            unitPriceINR: 21700,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
            remarks: 'Usually 3-5 coils (interlocking / fibered platinum)',
          },
          {
            code: '2849-IN018BIMP19',
            name: 'STS / Polidocanol Sclerosant Foam (Sandwich Technique)',
            unitPriceINR: 4500,
            maxUnits: 1,
            isMandatory: false,
            category: 'Embolic / Drug',
            remarks: 'Optional add-on for collateral occlusion',
          },
        ],
        preAuthChecklist: [
          'High-resolution Scrotal Doppler USG showing pampiniform venous plexus diameter > 3.0mm with retrograde reflux on Valsalva',
          'Semen analysis report demonstrating oligozoospermia, asthenozoospermia, or teratozoospermia (if subfertility indication)',
          'Diagnostic retrograde internal spermatic venogram demonstrating valvular incompetence and collateral branches',
          'Post-embolization completion venogram confirming total occlusion down to pubic ramus level',
        ],
        clinicalCriteria: 'Grade II/III varicocele with persistent scrotal pain or male factor subfertility.',
      },
      RGHS: {
        packageCode: 'RGHS-693',
        packageName: 'Therapeutic Embolization (Varicocele / Gonadal Vein)',
        baseTariffINR: 32000,
        implants: [
          {
            code: 'RGHS-IMP-MIC',
            name: 'Microcatheter System',
            unitPriceINR: 19000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Microcatheter',
          },
          {
            code: 'RGHS-IMP-COIL',
            name: 'Microcoil Pack (3 Units)',
            unitPriceINR: 18000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
          },
        ],
        preAuthChecklist: [
          'Scrotal Doppler report with Valsalva reflux timing',
          'Pre and post embolization DSA images',
          'Implant barcode stickers attached to logbook summary',
        ],
        clinicalCriteria: 'Symptomatic varicocele in beneficiaries.',
      },
      AB_PMJAY: {
        packageCode: 'MC020B',
        packageName: 'Transcatheter Embolization of Varicocele',
        baseTariffINR: 25000,
        implants: [
          {
            code: 'PMJAY-IMP-COIL',
            name: 'Embolization Coils & Catheter System',
            unitPriceINR: 35000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
          },
        ],
        preAuthChecklist: [
          'Pre-authorization scrotal ultrasound Doppler report',
          'Urology referral letter',
          'Post-procedure fluoroscopy run showing coil nest',
        ],
        clinicalCriteria: 'Palpable varicocele with documented testicular pain or subfertility.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-06',
        packageName: 'SMS Hospital Institutional Varicocele Package',
        baseTariffINR: 14000,
        statusNote: 'Subsidized SMS Hospital tariff: ₹10,000 procedure fee + ₹4,000 cath-lab fee.',
        implants: [
          {
            code: 'HOSP-MIC',
            name: 'Microcatheter System',
            unitPriceINR: 17500,
            maxUnits: 1,
            isMandatory: true,
            category: 'Microcatheter',
          },
          {
            code: 'HOSP-COIL',
            name: 'Pushable Fibered Coils (3 units)',
            unitPriceINR: 18000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
          },
        ],
        preAuthChecklist: [
          'OPD slip with scrotal Doppler report',
          'RMRS billing receipt',
          'Procedural consent',
        ],
        clinicalCriteria: 'Self-paying patients undergoing daycare transvenous varicocele coiling.',
      },
    },
  },

  // 7. PTBD + Biliary Stent
  {
    id: 'ptbd-stent',
    name: 'Percutaneous Transhepatic Biliary Drainage & Stenting (PTBD + Biliary SEMS)',
    shortName: 'PTBD + Biliary Stent',
    category: 'Biliary & Hepatosplenic',
    organSystem: 'Hepatobiliary',
    routineRank: 7,
    primaryIndication: 'Malignant Biliary Obstruction (Cholangiocarcinoma, Klatskin tumor, Gallbladder carcinoma, Pancreatic head adenocarcinoma, Porta hepatis lymphadenopathy)',
    icd10: {
      code: 'C24.0',
      description: 'Malignant neoplasm of extrahepatic bile duct (Cholangiocarcinoma)',
      secondaryCodes: [
        { code: 'K83.1', description: 'Occlusion of bile duct (Biliary obstruction / stricture)' },
        { code: 'C22.1', description: 'Intrahepatic bile duct carcinoma' },
        { code: 'C25.0', description: 'Malignant neoplasm of head of pancreas' },
        { code: 'C23', description: 'Malignant neoplasm of gallbladder' },
      ],
    },
    schemes: {
      MAAY: {
        packageCode: '1849-SG105 A + 2849-IN006A',
        packageName: 'PTBD (Percutaneous Transhepatic Biliary Drainage) + Primary Biliary SEMS Stent',
        baseTariffINR: 41000,
        statusNote: 'Combined billing: PTBD Base (₹16,000) + SEMS Stenting Add-on (₹25,000).',
        implants: [
          {
            code: '1849-IN057A-CAT',
            name: 'Ring Biliary Drainage Catheter Kit (8.5F/10F Locking Pigtail)',
            unitPriceINR: 7000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Drain / Catheter',
            remarks: 'Cook Medical / Boston Scientific ring biliary catheter',
          },
          {
            code: '2849-IN006A IMP 381',
            name: 'Self-Expanding Metallic Biliary Stent (Nitinol SEMS 8/10 mm x 60-100 mm)',
            unitPriceINR: 37000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
            remarks: 'Boston Scientific Epic / Taewoong Niti-S / Cook Zilver',
          },
          {
            code: '2849-IN0246CIMP 385',
            name: 'Biliary Angioplasty Balloon (6-8 mm)',
            unitPriceINR: 9800,
            maxUnits: 1,
            isMandatory: false,
            category: 'Balloon / Stent',
            remarks: 'Optional predilatation for tight fibrous strictures',
          },
        ],
        preAuthChecklist: [
          'Pre-operative MRCP or Triphasic CECT Abdomen showing site, level, and Bismuth-Corlette classification of biliary obstruction',
          'Liver Function Tests documenting obstructive hyperbilirubinemia & elevated alkaline phosphatase',
          'Fluoroscopic Chiba needle puncture spot radiograph and diagnostic roadmapping cholangiogram',
          'Fluoroscopic spot film showing stent deployment across stricture',
          'Post-stenting completion cholangiogram proving brisk contrast transit into duodenum',
        ],
        clinicalCriteria: 'Inoperable malignant biliary obstruction or palliative decompression prior to chemotherapy.',
      },
      RGHS: {
        packageCode: 'RGHS-582',
        packageName: 'Percutaneous Biliary Drainage & Metallic Stenting (PTBD + SEMS)',
        baseTariffINR: 28000,
        implants: [
          {
            code: 'RGHS-IMP-SEMS',
            name: 'Metallic Biliary Stent (SEMS Nitinol)',
            unitPriceINR: 35000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
          },
          {
            code: 'RGHS-IMP-DRAIN',
            name: 'Biliary Ring Drainage Catheter',
            unitPriceINR: 7000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Drain / Catheter',
          },
        ],
        preAuthChecklist: [
          'MRCP / CECT abdomen report',
          'Serial Bilirubin levels',
          'Pre and post stenting cholangiograms with stent lot barcode',
        ],
        clinicalCriteria: 'Obstructive jaundice with failed ERCP or altered gastrointestinal anatomy.',
      },
      AB_PMJAY: {
        packageCode: 'SG105A',
        packageName: 'PTBD with Biliary Stent Placement for Malignant Jaundice',
        baseTariffINR: 38000,
        implants: [
          {
            code: 'PMJAY-IMP-SEMS',
            name: 'Biliary SEMS Stent & Drainage Catheter System',
            unitPriceINR: 40000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
          },
        ],
        preAuthChecklist: [
          'Oncology / Surgical referral for inoperable biliary malignancy',
          'Diagnostic cholangiogram defining stricture length',
          'Post-stenting film showing free biliary drainage',
        ],
        clinicalCriteria: 'Malignant obstructive jaundice requiring percutaneous drainage and stenting.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-07',
        packageName: 'SMS Hospital Institutional PTBD + Stent Package',
        baseTariffINR: 20000,
        statusNote: 'Subsidized SMS Hospital tariff: ₹15,000 procedure fee + ₹5,000 cath-lab fee.',
        implants: [
          {
            code: 'HOSP-DRAIN',
            name: 'Ring Biliary Catheter Kit',
            unitPriceINR: 6500,
            maxUnits: 1,
            isMandatory: true,
            category: 'Drain / Catheter',
          },
          {
            code: 'HOSP-SEMS',
            name: 'Biliary SEMS Stent (Rate Contract / Patient Sourced)',
            unitPriceINR: 34000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
          },
        ],
        preAuthChecklist: [
          'Inpatient bed ticket and RMRS fee clearance',
          'High-risk procedural consent for cholangitis / bleeding risk',
          'Post-procedure bile culture and drain monitoring sheet',
        ],
        clinicalCriteria: 'Percutaneous biliary decompression in self-paying patients.',
      },
    },
  },

  // 8. PCN
  {
    id: 'pcn',
    name: 'Percutaneous Nephrostomy (PCN - Unilateral / Bilateral)',
    shortName: 'PCN (Nephrostomy)',
    category: 'Renal & Urinary',
    organSystem: 'Renal & Urological',
    routineRank: 8,
    primaryIndication: 'Obstructive Uropathy with Hydronephrosis, Pyonephrosis, Ureteric Calculus Obstruction, Pelvic Malignancy (Cervical / Bladder CA encasement)',
    icd10: {
      code: 'N13.0',
      description: 'Hydronephrosis with ureteropelvic junction obstruction',
      secondaryCodes: [
        { code: 'N13.1', description: 'Hydronephrosis with ureteral stricture' },
        { code: 'N13.6', description: 'Pyonephrosis' },
        { code: 'C53.9', description: 'Malignant neoplasm of cervix uteri with ureteric encasement' },
        { code: 'N17.9', description: 'Acute kidney injury, unspecified' },
      ],
    },
    schemes: {
      MAAY: {
        packageCode: '1849-IN057A',
        packageName: 'Percutaneous Nephrostomy / Image Guided Catheter Drainage',
        baseTariffINR: 14000,
        implants: [
          {
            code: '1849-IN057A-CAT',
            name: 'Locking Pigtail Nephrostomy Catheter Kit (8F/10F Cook / Boston Scientific)',
            unitPriceINR: 3800,
            maxUnits: 1,
            isMandatory: true,
            category: 'Drain / Catheter',
            remarks: 'Kit includes Chiba needle, Amplatz wire, fascial dilators, and locking pigtail catheter',
          },
          {
            code: '1849-IN057A-WIRE',
            name: 'Stiff Heavy-Duty Guidewire (Amplatz 0.035" 145cm)',
            unitPriceINR: 2200,
            maxUnits: 1,
            isMandatory: true,
            category: 'Kit / Sheath',
          },
        ],
        preAuthChecklist: [
          'Pre-procedure Ultrasound KUB or Non-Contrast CT KUB (NCCT) demonstrating moderate-to-severe hydronephrosis / pyonephrosis',
          'Renal function tests (Serum Creatinine & Urea) documenting obstructive AKI',
          'Fluoroscopic / USG spot of needle access into posterior lower pole calyx',
          'Nephrostogram film showing locked pigtail loop inside renal pelvis and drainage bag connected',
        ],
        clinicalCriteria: 'Acute or chronic obstructive uropathy with renal dysfunction or pyonephrosis.',
      },
      RGHS: {
        packageCode: 'RGHS-910',
        packageName: 'Percutaneous Nephrostomy & Ureteral Drainage',
        baseTariffINR: 18500,
        implants: [
          {
            code: 'RGHS-IMP-PCN',
            name: 'Locking Pigtail Nephrostomy Catheter Kit',
            unitPriceINR: 6500,
            maxUnits: 1,
            isMandatory: true,
            category: 'Drain / Catheter',
          },
        ],
        preAuthChecklist: [
          'USG / CT KUB demonstrating hydronephrosis',
          'Emergency admission ticket',
          'Fluoroscopy confirmation spot radiograph',
        ],
        clinicalCriteria: 'Urinary diversion for obstruction or ureteral fistula.',
      },
      AB_PMJAY: {
        packageCode: 'UR042A',
        packageName: 'Percutaneous Nephrostomy for Obstructive Uropathy',
        baseTariffINR: 12500,
        implants: [
          {
            code: 'PMJAY-IMP-PCN',
            name: 'Nephrostomy Catheter Kit',
            unitPriceINR: 5000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Drain / Catheter',
          },
        ],
        preAuthChecklist: [
          'Diagnostic imaging confirming hydronephrosis',
          'Serum Creatinine documentation',
          'Catheter position radiograph',
        ],
        clinicalCriteria: 'Emergency or planned urinary diversion.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-08',
        packageName: 'SMS Hospital Institutional PCN Package',
        baseTariffINR: 5500,
        statusNote: 'Subsidized SMS Hospital tariff: ₹4,000 procedure fee + ₹1,500 procedural charge.',
        implants: [
          {
            code: 'HOSP-PCN-KIT',
            name: 'Nephrostomy Catheter Kit 8.5F/10F (Store Tender)',
            unitPriceINR: 3400,
            maxUnits: 1,
            isMandatory: true,
            category: 'Drain / Catheter',
          },
        ],
        preAuthChecklist: [
          'OPD / Emergency registration receipt',
          'Procedure consent for renal calyx puncture and nephrostomy placement',
          'Urine culture bottle handoff slip',
        ],
        clinicalCriteria: 'Self-paying patients presenting with obstructive uropathy.',
      },
    },
  },

  // 9. AV Fistuloplasty
  {
    id: 'av-fistuloplasty',
    name: 'Hemodialysis AV Fistuloplasty & Central Venous Angioplasty',
    shortName: 'AV Fistuloplasty',
    category: 'Vascular Embolization',
    organSystem: 'Dialysis & Access',
    routineRank: 9,
    primaryIndication: 'Hemodialysis Arteriovenous Fistula / Graft (AVF/AVG) Dysfunction, High Venous Pressures (> 200 mmHg), Poor Access Flow (< 300 mL/min), Arm Swelling',
    icd10: {
      code: 'T82.858A',
      description: 'Stenosis of arteriovenous fistula or graft for dialysis, initial encounter',
      secondaryCodes: [
        { code: 'I87.1', description: 'Compression / Stenosis of central vein (Subclavian / Brachiocephalic / SVC)' },
        { code: 'N18.6', description: 'End-stage renal disease on chronic maintenance hemodialysis' },
      ],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-IN076A',
        packageName: 'Fistuloplasty / Thrombectomy of Dialysis Fistulas (AVF / AVG)',
        baseTariffINR: 32440,
        implants: [
          {
            code: '2849-IN076A-IMP-394',
            name: 'High Pressure Ultra-Non-Compliant PTA Balloon (Conquest / Dorado, Burst > 24 atm)',
            unitPriceINR: 9800,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
            remarks: '4mm to 8mm balloon for anastomotic / juxta-anastomotic outflow strictures',
          },
          {
            code: '2849-IN0246CIMP 386',
            name: 'Large Venous Angioplasty Balloon (Atlas 12-16mm)',
            unitPriceINR: 18800,
            maxUnits: 1,
            isMandatory: false,
            category: 'Balloon / Stent',
            remarks: 'Add-on when central thoracic venous obstruction (brachiocephalic/subclavian) is dilated',
          },
          {
            code: '2849-IN0246CIMP 387',
            name: 'Self-Expanding Venous Bare Metallic Stent (Wallstent / E-Luminexx)',
            unitPriceINR: 37000,
            maxUnits: 1,
            isMandatory: false,
            category: 'Balloon / Stent',
            remarks: 'Strictly conditional: indicated only if elastic recoil > 30% or flow-limiting rupture',
          },
        ],
        preAuthChecklist: [
          'Dialysis unit clinical referral slip showing dynamic venous pressure > 200 mmHg or access flow < 300 mL/min',
          'Pre-dilation diagnostic fistulogram confirming > 50% stenosis with trans-stenotic pressure gradient',
          'Fluoroscopic spot radiograph proving full inflation and waist effacement of high-pressure balloon',
          'Completion fistulogram confirming brisk unrestricted outflow into central thoracic veins without extravasation',
        ],
        clinicalCriteria: 'Dialysis patient with documented AV access failure risking impending abandonment.',
      },
      RGHS: {
        packageCode: 'RGHS-821',
        packageName: 'Percutaneous AV Fistuloplasty & Venous Stenting',
        baseTariffINR: 30000,
        implants: [
          {
            code: 'RGHS-IMP-BALLOON',
            name: 'High Pressure PTA Angioplasty Balloon',
            unitPriceINR: 12000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
          },
          {
            code: 'RGHS-IMP-STENT',
            name: 'Venous Bare Stent (Conditional)',
            unitPriceINR: 35000,
            maxUnits: 1,
            isMandatory: false,
            category: 'Balloon / Stent',
          },
        ],
        preAuthChecklist: [
          'Nephrology / Hemodialysis unit referral slip',
          'Pre and post-dilation angiographic run films',
          'Balloon pressure inflation log',
        ],
        clinicalCriteria: 'Dysfunctional hemodialysis access in eligible state beneficiaries.',
      },
      AB_PMJAY: {
        packageCode: 'VS076A',
        packageName: 'Percutaneous Balloon Angioplasty of Dialysis Fistula',
        baseTariffINR: 28000,
        implants: [
          {
            code: 'PMJAY-IMP-AVF',
            name: 'High Pressure Balloon Catheter Kit',
            unitPriceINR: 25000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
          },
        ],
        preAuthChecklist: [
          'Maintenance hemodialysis record showing access dysfunction',
          'Pre-intervention fistulogram proving stenosis',
          'Post-intervention completion run',
        ],
        clinicalCriteria: 'Hemodialysis dependent patients requiring salvage of permanent vascular access.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-09',
        packageName: 'SMS Hospital Institutional AV Fistuloplasty Package',
        baseTariffINR: 14000,
        statusNote: 'Subsidized SMS Hospital tariff: ₹10,000 procedure fee + ₹4,000 cath-lab fee.',
        implants: [
          {
            code: 'HOSP-BALL-HP',
            name: 'High Pressure Balloon (Conquest / Dorado)',
            unitPriceINR: 9500,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
          },
        ],
        preAuthChecklist: [
          'Dialysis card and RMRS subsidy voucher',
          'Procedural consent acknowledging balloon rupture and thrombosis risks',
          'Post-procedure thrill check documentation in logbook',
        ],
        clinicalCriteria: 'Self-paying ESRD patients for access salvage.',
      },
    },
  },

  // 10. TIPS
  {
    id: 'tips',
    name: 'Transjugular Intrahepatic Portosystemic Shunt (TIPS / DIPS)',
    shortName: 'TIPS / DIPS Shunt',
    category: 'Biliary & Hepatosplenic',
    organSystem: 'Hepatobiliary',
    routineRank: 10,
    primaryIndication: 'Complicated Portal Hypertension: Diuretic-Resistant / Refractory Ascites, Recurrent / Refractory Variceal Bleeding, Budd-Chiari Syndrome (BCS)',
    icd10: {
      code: 'K76.6',
      description: 'Portal hypertension',
      secondaryCodes: [
        { code: 'I85.0', description: 'Esophageal varices with bleeding' },
        { code: 'R18.0', description: 'Malignant / Refractory ascites' },
        { code: 'I82.0', description: 'Budd-Chiari syndrome (Hepatic venous thrombosis)' },
        { code: 'K74.60', description: 'Unspecified cirrhosis of liver' },
      ],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-IN064A',
        packageName: 'TIPS (Transjugular Intrahepatic Portosystemic Shunt Creation) / Complex Shunt',
        baseTariffINR: 54000,
        implants: [
          {
            code: '2849-IN064A-VIAT',
            name: 'Gore Viatorr TIPS Endoprosthesis (Controlled expansion covered 8-10mm x 7cm covered + 2cm bare)',
            unitPriceINR: 95000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
            remarks: 'Gold standard ePTFE covered stent specifically approved for portal shunting',
          },
          {
            code: '2849-IN064A-COLP',
            name: 'Transjugular Liver Access Needle Set (Rosch-Uchida / Colapinto set)',
            unitPriceINR: 32000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Kit / Sheath',
          },
          {
            code: '2849-IN064A-BALL',
            name: 'High Pressure PTA Balloon (8-10 mm x 40 mm)',
            unitPriceINR: 9800,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
          },
          {
            code: '2849-IN080ARJ-IMP397',
            name: 'Variceal Embolization Coils (Pushable/Detachable)',
            unitPriceINR: 18000,
            maxUnits: 1,
            isMandatory: false,
            category: 'Balloon / Stent',
            remarks: 'Optional add-on for left gastric / coronary vein variceal coiling during TIPS',
          },
        ],
        preAuthChecklist: [
          'Pre-procedure Triphasic CECT Abdomen or Doppler USG documenting patent portal vein bifurcation & hepatic vein anatomy',
          'Child-Pugh (CTP) score and MELD-Na score calculation (MELD < 18 preferred, r/o irreversible hepatic failure)',
          '2D Echocardiography excluding severe pulmonary arterial hypertension (sPAP > 45 mmHg) and heart failure (EF > 55%)',
          'Direct portogram with simultaneous Right Atrial & Portal Vein pressure recordings documenting Portosystemic Gradient (PSG)',
          'Post-Viatorr deployment run proving PSG reduction to target < 12 mmHg and prompt intrahepatic parenchymal bypass',
        ],
        clinicalCriteria: 'Decompensated cirrhosis with refractory ascites or recurrent variceal hemorrhage failing endoscopic band ligation.',
      },
      RGHS: {
        packageCode: 'RGHS-785',
        packageName: 'Transjugular Intrahepatic Portosystemic Shunt (TIPS Creation)',
        baseTariffINR: 48000,
        implants: [
          {
            code: 'RGHS-IMP-VIATORR',
            name: 'Viatorr Covered TIPS Stent Graft',
            unitPriceINR: 95000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
          },
          {
            code: 'RGHS-IMP-NEEDLE',
            name: 'Transjugular Access Needle System',
            unitPriceINR: 30000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Kit / Sheath',
          },
        ],
        preAuthChecklist: [
          'Gastroenterology / Hepatology departmental referral',
          'CT Portography report',
          'Pre and post pressure gradient strip recordings with stent serial barcode',
        ],
        clinicalCriteria: 'Eligible state beneficiaries with severe portal hypertension refractory to medical therapy.',
      },
      AB_PMJAY: {
        packageCode: 'HP045A',
        packageName: 'TIPS Procedure for Portal Hypertension',
        baseTariffINR: 45000,
        implants: [
          {
            code: 'PMJAY-IMP-TIPS',
            name: 'TIPS Stent Graft & Liver Puncture Set',
            unitPriceINR: 120000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
          },
        ],
        preAuthChecklist: [
          'Hepatology consultation notes and upper GI endoscopy report',
          'Echo report ruling out cardiac failure',
          'Procedural cath lab pressure recording graph',
        ],
        clinicalCriteria: 'Portal hypertension with refractory bleeding or tense ascites.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-10',
        packageName: 'SMS Hospital Institutional TIPS Package',
        baseTariffINR: 33000,
        statusNote: 'Subsidized SMS Hospital tariff: ₹25,000 procedure fee + ₹8,000 cath-lab fee.',
        implants: [
          {
            code: 'HOSP-VIATORR',
            name: 'Gore Viatorr Covered Stent (Hospital Tender / Rate Contract)',
            unitPriceINR: 92000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
          },
          {
            code: 'HOSP-NEEDLE',
            name: 'Rosch-Uchida Puncture Kit',
            unitPriceINR: 28000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Kit / Sheath',
          },
        ],
        preAuthChecklist: [
          'Admission under IR / Hepatology joint unit',
          'Special informed consent detailing encephalopathy and stent revision risks',
          'ICU / HDU bed pre-booking confirmation',
        ],
        clinicalCriteria: 'TIPS creation in self-paying cirrhotic or Budd-Chiari patients.',
      },
    },
  },

  // 11. PCD Liver Abscess
  {
    id: 'pcd-liver-abscess',
    name: 'Percutaneous Catheter Drainage (PCD) for Liver Abscess',
    shortName: 'PCD Liver Abscess',
    category: 'Drainage & Biopsy',
    organSystem: 'Hepatobiliary',
    routineRank: 11,
    primaryIndication: 'Pyogenic or Amebic Liver Abscess (> 5 cm diameter, high risk of impending rupture, persistent sepsis despite IV antibiotics)',
    icd10: {
      code: 'K75.0',
      description: 'Abscess of liver (Pyogenic / Cryptogenic liver abscess)',
      secondaryCodes: [
        { code: 'A06.4', description: 'Amebic liver abscess' },
        { code: 'K75.89', description: 'Other specified inflammatory liver diseases' },
      ],
    },
    schemes: {
      MAAY: {
        packageCode: '1849-IN057A',
        packageName: 'Image Guided Percutaneous Drainage / Abscess Pigtail Placement',
        baseTariffINR: 7000,
        implants: [
          {
            code: '1849-IN057A-CAT',
            name: 'Locking Pigtail Drainage Catheter Kit (10F - 14F Cook / Boston Scientific)',
            unitPriceINR: 3500,
            maxUnits: 1,
            isMandatory: true,
            category: 'Drain / Catheter',
            remarks: 'Supplied with 18G Trocar / Seldinger access needle and locked string mechanism',
          },
          {
            code: '1849-IN057A-BAG',
            name: 'Closed Drainage Bag & Low-Pressure Connecting Tube Kit',
            unitPriceINR: 800,
            maxUnits: 1,
            isMandatory: true,
            category: 'Drain / Catheter',
          },
        ],
        preAuthChecklist: [
          'Pre-procedure Ultrasound Abdomen or CECT Liver demonstrating solitary or multiloculated fluid cavity > 5 cm diameter',
          'Laboratory workup (CBC showing leukocytosis, CRP, Coagulation profile INR < 1.5, Platelets > 50,000/uL)',
          'Real-time Ultrasound snapshot documenting needle and wire insertion into cavity epicenter',
          'Post-procedure aspirate physical appearance record (anchovy sauce / frank pus) and locked pigtail loop confirmation image',
        ],
        clinicalCriteria: 'Hepatic abscess cavity > 5 cm or clinical toxemia not responding to empirical medical therapy.',
      },
      RGHS: {
        packageCode: 'RGHS-520',
        packageName: 'Percutaneous Abscess Drainage (Ultrasound / CT Guided)',
        baseTariffINR: 12000,
        implants: [
          {
            code: 'RGHS-IMP-PCD',
            name: 'Locking Drainage Catheter Kit',
            unitPriceINR: 4000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Drain / Catheter',
          },
        ],
        preAuthChecklist: [
          'USG / CT Abdomen report confirming liver abscess',
          'Indoor ticket and surgical / medicine admission note',
          'Drainage tube position ultrasound film',
        ],
        clinicalCriteria: 'Symptomatic liver abscess in government employees or dependents.',
      },
      AB_PMJAY: {
        packageCode: 'SG057A',
        packageName: 'Percutaneous Pigtail Catheter Drainage of Abdominal Abscess',
        baseTariffINR: 9500,
        implants: [
          {
            code: 'PMJAY-IMP-PCD',
            name: 'Pigtail Catheter & Collection Bag',
            unitPriceINR: 4000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Drain / Catheter',
          },
        ],
        preAuthChecklist: [
          'Ultrasound scan proving liquefaction of abscess',
          'Fever chart and antibiotic prescription sheet',
          'Procedure confirmation log with volume of pus evacuated',
        ],
        clinicalCriteria: 'Eligible beneficiaries with pyogenic or amebic abscess.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-11',
        packageName: 'SMS Hospital Institutional PCD Package',
        baseTariffINR: 4000,
        statusNote: 'Subsidized SMS Hospital tariff: ₹3,000 procedure fee + ₹1,000 USG room charge.',
        implants: [
          {
            code: 'HOSP-PCD-KIT',
            name: 'Pigtail Catheter Set 12F/14F',
            unitPriceINR: 3200,
            maxUnits: 1,
            isMandatory: true,
            category: 'Drain / Catheter',
          },
        ],
        preAuthChecklist: [
          'RMRS OPD / Emergency ticket',
          'Informed consent for percutaneous hepatic puncture',
          'Pus specimen culture requisition',
        ],
        clinicalCriteria: 'Urgent or elective drainage in non-scheme hospital patients.',
      },
    },
  },

  // 12. Deep Core Biopsy
  {
    id: 'deep-core-biopsy',
    name: 'Deep Visceral Image-Guided Core / Tru-Cut Biopsy (USG / CT Guided)',
    shortName: 'Deep Core Biopsy',
    category: 'Drainage & Biopsy',
    organSystem: 'Drainage & Biopsy',
    routineRank: 12,
    primaryIndication: 'Histopathological confirmation of deep-seated masses: Retroperitoneal, Hepatic, Renal, Lung / Mediastinal, Mesenteric, Musculoskeletal tumors',
    icd10: {
      code: 'C80.1',
      description: 'Malignant (primary) neoplasm, unspecified site',
      secondaryCodes: [
        { code: 'R59.9', description: 'Enlarged lymph nodes, unspecified (Retroperitoneal / Mediastinal lymphadenopathy)' },
        { code: 'D48.9', description: 'Neoplasm of uncertain behavior, unspecified site' },
        { code: 'K76.9', description: 'Liver lesion / mass of indeterminate nature' },
      ],
    },
    schemes: {
      MAAY: {
        packageCode: '1849-MG076A',
        packageName: 'Image Guided Core / Tru-Cut Needle Biopsy (USG / CT)',
        baseTariffINR: 5000,
        implants: [
          {
            code: '1849-MG076A-GUN',
            name: 'Automated / Semi-Automated Core Biopsy Needle (16G / 18G, 15-20cm BARD MaxCore / Temno)',
            unitPriceINR: 2800,
            maxUnits: 1,
            isMandatory: true,
            category: 'Needle / Core',
            remarks: 'Requires sterile needle lot barcode sticker',
          },
          {
            code: '1849-MG076A-COAX',
            name: 'Coaxial Introducer Guide Needle (Matched Gauge)',
            unitPriceINR: 2200,
            maxUnits: 1,
            isMandatory: true,
            category: 'Needle / Core',
            remarks: 'Enables multiple passes through single capsule puncture',
          },
        ],
        preAuthChecklist: [
          'Previous diagnostic cross-sectional imaging (CECT, MRI, or USG) defining the target lesion location and vascular proximity',
          'Coagulation profile (Platelets > 50,000/uL, INR < 1.5) and Viral markers (HBsAg, Anti-HCV, HIV)',
          'Real-time USG or CT snapshot demonstrating coaxial needle tip positioned inside the target tumor prior to gun firing',
          'Histopathology sample container photograph and pathology requisition slip with clinical details',
        ],
        clinicalCriteria: 'Indeterminate deep soft tissue mass requiring histological and immunohistochemical (IHC) profiling.',
      },
      RGHS: {
        packageCode: 'RGHS-310',
        packageName: 'Percutaneous Core / Tru-Cut Biopsy under CT / Ultrasound Guidance',
        baseTariffINR: 6500,
        implants: [
          {
            code: 'RGHS-IMP-BIOPSY-GUN',
            name: 'Disposable Core Biopsy Needle Gun Kit',
            unitPriceINR: 3000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Needle / Core',
          },
        ],
        preAuthChecklist: [
          'Diagnostic CT/MRI scan demonstrating target lesion',
          'Coagulation profile report',
          'Post-biopsy observation chart confirming hemostasis',
        ],
        clinicalCriteria: 'Eligible state beneficiaries needing tissue diagnosis for oncology planning.',
      },
      AB_PMJAY: {
        packageCode: 'RD076A',
        packageName: 'Ultrasound or CT Guided Core Biopsy of Deep Organs',
        baseTariffINR: 4500,
        implants: [
          {
            code: 'PMJAY-IMP-BIOPSY',
            name: 'Core Biopsy Needle Gun Set',
            unitPriceINR: 3000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Needle / Core',
          },
        ],
        preAuthChecklist: [
          'Oncology referral form with imaging documentation',
          'Normal coagulation parameters',
          'Biopsy specimen formalin container handoff receipt',
        ],
        clinicalCriteria: 'Diagnostic tissue acquisition for suspected malignancy.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-12',
        packageName: 'SMS Hospital Institutional Core Biopsy Package',
        baseTariffINR: 3200,
        statusNote: 'Subsidized SMS Hospital tariff: ₹2,000 procedure fee + ₹1,200 USG / CT gantry fee.',
        implants: [
          {
            code: 'HOSP-BIOPSY-NEEDLE',
            name: 'Core Biopsy Needle 16G/18G (Rate Contract)',
            unitPriceINR: 2400,
            maxUnits: 1,
            isMandatory: true,
            category: 'Needle / Core',
          },
        ],
        preAuthChecklist: [
          'OPD registration card and RMRS biopsy payment receipt',
          'Written informed consent acknowledging bleeding and pneumothorax risks',
          'Formalin 10% specimen vial for pathology transport',
        ],
        clinicalCriteria: 'Outpatient or inpatient biopsy in self-paying patients.',
      },
    },
  },

  // 13. Splenic Artery Embolization (SAE)
  {
    id: 'splenic-embolization',
    name: 'Splenic Artery Embolization (SAE - Proximal / Distal)',
    shortName: 'Splenic Artery Embo (SAE)',
    category: 'Vascular Embolization',
    organSystem: 'Hepatobiliary',
    routineRank: 13,
    primaryIndication: 'Blunt Splenic Trauma (AAST Grade III-V laceration / pseudoaneurysm), Massive Splenomegaly with Hypersplenism / Severe Thrombocytopenia, Splenic Artery True / Pseudoaneurysm',
    icd10: {
      code: 'S36.039A',
      description: 'Laceration of spleen, unspecified, initial encounter',
      secondaryCodes: [
        { code: 'I72.8', description: 'Aneurysm and dissection of splenic artery' },
        { code: 'D73.1', description: 'Hypersplenism (splenic overactivity with cytopenias)' },
        { code: 'K76.6', description: 'Portal hypertension with splenomegaly' },
      ],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-IN020 B / 2849-IN022A',
        packageName: 'Vascular Plug / Selective Coil Embolisation of Splenic Artery',
        baseTariffINR: 39280,
        statusNote: 'Billed as Vascular Plug Embolisation (₹39,280) or Selective Coiling (₹30,340).',
        implants: [
          {
            code: '2849-IN022A IMP 25',
            name: 'Amplatzer Vascular Plug (AVP II / AVP IV 8-16 mm for main splenic artery)',
            unitPriceINR: 44000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
            remarks: 'Ideal for proximal main splenic trunk occlusion to reduce intrasplenic pressure',
          },
          {
            code: '2849-IN020B-IMP1',
            name: 'Coaxial Steerable Microcatheter System',
            unitPriceINR: 19000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Microcatheter',
          },
          {
            code: '2849-IN020B-IMP2',
            name: 'Controlled Detachable Embolization Coils Pack',
            unitPriceINR: 21700,
            maxUnits: 1,
            isMandatory: false,
            category: 'Balloon / Stent',
            remarks: 'For superselective distal pseudoaneurysm isolation or sandwich coiling',
          },
          {
            code: '2849-IN017B-IMP 22',
            name: 'Calibrated Gel Foam / PVA Particles',
            unitPriceINR: 5500,
            maxUnits: 2,
            isMandatory: false,
            category: 'Embolic / Drug',
            remarks: 'Used for partial parenchymal splenic ablation in hypersplenism',
          },
        ],
        preAuthChecklist: [
          'Pre-procedure Emergency CECT Abdomen showing splenic laceration, hemoperitoneum, or active contrast blush',
          'Serial CBC monitoring demonstrating dropping hemoglobin / hematocrit or profound thrombocytopenia',
          'Pre-embolization selective celiac / splenic angiogram defining pseudoaneurysm neck or extravasation',
          'Post-embolization completion angiogram proving hemodynamic exclusion with preserved collateral flow via short gastric arteries',
        ],
        clinicalCriteria: 'Hemodynamically stable splenic trauma with blush, or giant splenic aneurysm > 2 cm.',
      },
      RGHS: {
        packageCode: 'RGHS-693',
        packageName: 'Transcatheter Splenic Artery Embolization',
        baseTariffINR: 32000,
        implants: [
          {
            code: 'RGHS-IMP-PLUG',
            name: 'Amplatzer Vascular Plug (AVP II)',
            unitPriceINR: 44000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
          },
          {
            code: 'RGHS-IMP-COIL',
            name: 'Embolization Coils Pack',
            unitPriceINR: 18000,
            maxUnits: 1,
            isMandatory: false,
            category: 'Balloon / Stent',
          },
        ],
        preAuthChecklist: [
          'Emergency CT Abdomen report',
          'Surgical ICU admission record',
          'Pre and post embolization DSA images with plug lot sticker',
        ],
        clinicalCriteria: 'Emergency splenic trauma or symptomatic splenic artery aneurysm.',
      },
      AB_PMJAY: {
        packageCode: 'TR088A',
        packageName: 'Emergency Transcatheter Splenic Embolization for Trauma',
        baseTariffINR: 32000,
        implants: [
          {
            code: 'PMJAY-IMP-SAE',
            name: 'Vascular Plug & Microcatheter System',
            unitPriceINR: 50000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
          },
        ],
        preAuthChecklist: [
          'Polytrauma sheet and CT scan proving splenic injury',
          'Cath lab angiogram showing active extravasation control',
          'Discharge hemogram showing stabilized hemoglobin',
        ],
        clinicalCriteria: 'Spleen-preserving non-operative management in eligible beneficiaries.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-13',
        packageName: 'SMS Hospital Institutional Splenic Embolization Package',
        baseTariffINR: 20000,
        statusNote: 'Subsidized SMS Hospital tariff: ₹15,000 procedure fee + ₹5,000 cath-lab fee.',
        implants: [
          {
            code: 'HOSP-PLUG',
            name: 'Vascular Plug / Coils (Rate Contract)',
            unitPriceINR: 42000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Balloon / Stent',
          },
        ],
        preAuthChecklist: [
          'Emergency room registration card',
          'High-risk procedural consent acknowledging splenic infarction/abscess risk',
          'Post-procedure pneumococcal / meningococcal vaccination prescription',
        ],
        clinicalCriteria: 'Splenic artery intervention for non-insured trauma patients.',
      },
    },
  },

  // 14. UFE
  {
    id: 'ufe',
    name: 'Uterine Fibroid Embolization (UFE / UAE) / Adenomyosis Embolization',
    shortName: 'UFE / UAE Fibroid',
    category: 'Vascular Embolization',
    organSystem: 'Genitourinary & Pelvic',
    routineRank: 14,
    primaryIndication: 'Symptomatic Uterine Leiomyoma (Severe menorrhagia, bulk-related pelvic pressure / pain, urinary frequency), Diffuse Adenomyosis, Intractable Postpartum Hemorrhage (PPH)',
    icd10: {
      code: 'D25.9',
      description: 'Leiomyoma of uterus, unspecified (Uterine fibroid)',
      secondaryCodes: [
        { code: 'N80.0', description: 'Endometriosis / Adenomyosis of uterus' },
        { code: 'N92.0', description: 'Excessive and frequent menstruation with regular cycle (Menorrhagia)' },
        { code: 'O72.1', description: 'Other immediate postpartum hemorrhage (PPH)' },
      ],
    },
    schemes: {
      MAAY: {
        packageCode: '2849-IN017B',
        packageName: 'PVA / Microsphere Embolisation of Uterine Arteries (UFE / UAE)',
        baseTariffINR: 30400,
        implants: [
          {
            code: '2849-IN017B-IMP 22',
            name: 'Calibrated Spherical Embolic Microspheres (Embosphere / Bead Block 500-700 um & 700-900 um)',
            unitPriceINR: 5500,
            maxUnits: 4,
            isMandatory: true,
            category: 'Embolic / Drug',
            remarks: 'Typically 2-3 vials required for complete bilateral devascularization',
          },
          {
            code: '2849-IN017B-IMP 23',
            name: 'Steerable Coaxial Microcatheter System (2.4F / 2.7F Progreat / Renegade)',
            unitPriceINR: 19000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Microcatheter',
            remarks: 'Crucial for navigating tortuous ascending uterine artery loop',
          },
          {
            code: '2849-IN080ARJ-IMP397',
            name: 'Pushable Platinum Microcoils',
            unitPriceINR: 9000,
            maxUnits: 1,
            isMandatory: false,
            category: 'Balloon / Stent',
            remarks: 'Optional add-on if prominent ovarian-uterine collateral or uterine AVM identified',
          },
        ],
        preAuthChecklist: [
          'Pre-procedure Pelvic MRI (T2WI sagittal and axial sequences) or Transvaginal Ultrasound documenting fibroid count, size, and vascularity',
          'Endometrial biopsy or Pipelle sampling ruling out endometrial malignancy/hyperplasia in women > 40 years',
          'Bilateral internal iliac & uterine artery roadmapping angiograms showing hypervascular fibroid blush',
          'Completion post-embolization angiograms proving near-complete stasis ("tree in winter") with preserved main uterine trunk flow',
        ],
        clinicalCriteria: 'Symptomatic uterine leiomyomata or adenomyosis in patients desiring uterus-preserving treatment.',
      },
      RGHS: {
        packageCode: 'RGHS-693',
        packageName: 'Therapeutic Uterine Artery Embolization (UFE)',
        baseTariffINR: 32000,
        implants: [
          {
            code: 'RGHS-IMP-PVA',
            name: 'Calibrated PVA Microspheres (2 Vials)',
            unitPriceINR: 16000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Embolic / Drug',
          },
          {
            code: 'RGHS-IMP-MIC',
            name: 'Microcatheter System',
            unitPriceINR: 19000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Microcatheter',
          },
        ],
        preAuthChecklist: [
          'Pelvic MRI / USG report detailing dominant fibroid dimensions',
          'Gynecology consultation note',
          'Pre and post embolization DSA images with microsphere lot barcodes',
        ],
        clinicalCriteria: 'Uterine fibroids causing menorrhagia or compressive pelvic symptoms in eligible beneficiaries.',
      },
      AB_PMJAY: {
        packageCode: 'GY034A',
        packageName: 'Transcatheter Uterine Artery Embolization for Fibroids / Bleed',
        baseTariffINR: 26500,
        implants: [
          {
            code: 'PMJAY-IMP-UFE',
            name: 'Microspheres & Coaxial Catheter System',
            unitPriceINR: 35000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Embolic / Drug',
          },
        ],
        preAuthChecklist: [
          'Pre-authorization pelvic ultrasound or MRI report',
          'Hemoglobin level documenting anemia secondary to menorrhagia',
          'Post-procedure bilateral devascularization spot films',
        ],
        clinicalCriteria: 'Symptomatic uterine fibroids or life-threatening obstetric pelvic hemorrhage.',
      },
      CASH_RMRS: {
        packageCode: 'RMRS-IR-14',
        packageName: 'SMS Hospital Institutional UFE Package',
        baseTariffINR: 16000,
        statusNote: 'Subsidized SMS Hospital tariff: ₹12,000 procedure fee + ₹4,000 cath-lab fee.',
        implants: [
          {
            code: 'HOSP-MICROSPHERES',
            name: 'Calibrated Microspheres (2 Vials - Tender Rate)',
            unitPriceINR: 14000,
            maxUnits: 1,
            isMandatory: true,
            category: 'Embolic / Drug',
          },
          {
            code: 'HOSP-MIC',
            name: 'Microcatheter System',
            unitPriceINR: 17500,
            maxUnits: 1,
            isMandatory: true,
            category: 'Microcatheter',
          },
        ],
        preAuthChecklist: [
          'OPD consultation card and ultrasound / MRI Pelvis report',
          'Procedural consent explaining post-embolization syndrome and cramping',
          'Analgesia protocol prescription (PCA / NSAIDs)',
        ],
        clinicalCriteria: 'Self-paying patients seeking minimally invasive fibroid embolization.',
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
      // Default to mandatory + optional
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
