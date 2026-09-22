/**
 * SMS Medical College & Attached Hospitals, Jaipur
 * Department of Radiodiagnosis & Interventional Radiology
 * 
 * Complete 1,120 Interventional Radiology Procedure Classification & Clinical Calculator Master Registry
 * Aligned with CIRSE, SIR, AASLD, SVS, AHA/ASA, EASL, and National Guidelines.
 */

export interface ProcedureClassificationEntry {
  id: string;
  name: string;
  sourceFile: string;
  applicableClassifications: string[];
  linkedCalculators: string[];
}

export const ALL_PROCEDURE_CLASSIFICATIONS_REGISTRY: ProcedureClassificationEntry[] = [
  {
    "id": "evar-bifurcated-modular",
    "name": "Endovascular Abdominal Aortic Aneurysm Repair (EVAR) with Modular Bifurcated Stent-Graft System",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "tevar-thoracic-aneurysm",
    "name": "Thoracic Endovascular Aortic Repair (TEVAR) for Descending Thoracic Aortic Aneurysm with Landing Zone Optimization",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "tevar-acute-type-b-dissection",
    "name": "TEVAR for Acute Complicated Stanford Type B Aortic Dissection (Entry Tear Coverage)",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "fevar-bevar-juxtarenal-thoracoabdominal",
    "name": "Fenestrated / Branched Endovascular Aortic Repair (FEVAR / BEVAR) for Juxtarenal and Thoracoabdominal Aneurysms",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Y90 Partition Model Dosimetry & Lung Shunt Fraction (LSF)",
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Caprini VTE Risk Score",
      "WHO Hydatid PAIR Eligibility Decision Engine",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "chevar-parallel-grafts",
    "name": "Chimney / Snorkel EVAR (ChEVAR) with Parallel Renal and Visceral Covered Stents",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "pevar-percutaneous-preclose",
    "name": "Percutaneous EVAR (PEVAR) with Totally Percutaneous Pre-Close Suture Technique",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "endoleak-transarterial-coiling",
    "name": "Endoleak Treatment: Transarterial Superselective Coiling of Type II Lumbar / IMA Endoleak",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "endoleak-direct-puncture-embolization",
    "name": "Endoleak Treatment: Direct Translumbar / Transcaval Sac Puncture and Onyx / Thrombin Embolization",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "endoleak-type-ia-cuff-extension",
    "name": "Endoleak Treatment: Proximal Cuff Extension / Giant Palmaz Stent Placement for Type IA Endoleak",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cerab-technique",
    "name": "Aortoiliac Occlusive Disease: Covered Endovascular Reconstruction of Aortic Bifurcation (CERAB Technique)",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "aortoiliac-kissing-stenting",
    "name": "Aortoiliac Kissing Balloon Angioplasty and Kissing Bare-Metal / Covered Stenting",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "iliac-cto-subintimal-stenting",
    "name": "Common and External Iliac Artery Chronic Total Occlusion (CTO) Crossing with Subintimal Angioplasty and Stenting",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage"
    ]
  },
  {
    "id": "sfa-cto-recanalization-dcb",
    "name": "Superficial Femoral Artery (SFA) Long Segment CTO Recanalization and Drug-Coated Balloon (DCB) Angioplasty",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "sfa-directional-rotational-atherectomy-dcb",
    "name": "SFA Directional / Rotational Atherectomy Followed by Drug-Coated Balloon (DCB) Angioplasty",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "sfa-popliteal-viabahn-covered-stenting",
    "name": "SFA and Popliteal Artery Covered Stenting with Self-Expanding Viabahn Stent-Graft for Complex TASC D Lesions",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "sfa-popliteal-supera-interwoven-stenting",
    "name": "SFA Dedicated Interwoven Nitinol Stenting (Supera) for Popliteal / Distal SFA with High Torsional Stress",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "popliteal-aneurysm-viabahn-exclusion",
    "name": "Popliteal Artery Aneurysm Exclusion with Percutaneous Viabahn Covered Stent-Graft",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "btk-tibial-balloon-angioplasty",
    "name": "Below-the-Knee (BTK) Tibial Artery Balloon Angioplasty with Dedicated Long Tapered Balloons for CLTI",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "Kellgren-Lawrence Knee Osteoarthritis Radiographic Grading (Grades 0-4)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "WOMAC Osteoarthritis Index for Genicular Artery Embolization"
    ]
  },
  {
    "id": "btk-retrograde-pedal-rendezvous",
    "name": "BTK Retrograde Pedal / Transpedal / Transmetatarsal Arterial Access and Rendezvous Recanalization",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "pedal-arch-loop-angioplasty",
    "name": "Pedal Arch Reconstruction and Plantar Artery Loop Angioplasty for Neuroischemic Diabetic Foot Ulcer",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "ali-catheter-directed-thrombolysis-aspiration",
    "name": "Acute Lower Extremity Limb Ischemia (ALI): Catheter-Directed Thrombolysis (CDT) with tPA and Aspiration Embolectomy",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "ali-rotational-mechanical-thrombectomy-rotarex",
    "name": "Acute Limb Ischemia: Percutaneous Rotational Mechanical Thrombectomy (Rotarex / Straub Medical)",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Y90 Partition Model Dosimetry & Lung Shunt Fraction (LSF)",
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "renal-artery-stenting-aras",
    "name": "Renal Artery Balloon Angioplasty and Stenting for Atherosclerotic Renal Artery Stenosis (ARAS) with Flash Pulmonary Edema",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "mesenteric-artery-stenting-cmi",
    "name": "Mesenteric Artery Stenting (SMA and Celiac Trunk) for Chronic Mesenteric Ischemia (Intestinal Angina)",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage"
    ]
  },
  {
    "id": "acute-sma-thromboembolism-aspiration-cdt",
    "name": "Acute Superior Mesenteric Artery (SMA) Thromboembolism Percutaneous Aspiration Embolectomy and Catheter Thrombolysis",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "innominate-artery-angioplasty-stenting",
    "name": "Innominate (Brachiocephalic) Artery Severe Stenosis / Occlusion Balloon Angioplasty and Covered Stenting",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "subclavian-stenosis-steal-syndrome-stenting",
    "name": "Subclavian Artery Proximal Stenosis / Subclavian Steal Syndrome Balloon Angioplasty and Stenting",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage"
    ]
  },
  {
    "id": "cfa-ivl-shockwave-dcb",
    "name": "Common Femoral Artery (CFA) Calcified Plaque Shockwave Intravascular Lithotripsy (IVL) and DCB Angioplasty",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "femoral-pseudoaneurysm-thrombin-injection",
    "name": "External Iliac / Common Femoral Artery Iatrogenic Pseudoaneurysm Percutaneous US-Guided Thrombin Injection",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "femoral-pseudoaneurysm-covered-stent",
    "name": "Femoral Pseudoaneurysm Neck Covered Stent-Graft Exclusion",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "popliteal-artery-entrapment-provocation-planning",
    "name": "Popliteal Artery Entrapment Syndrome (PAES) Diagnostic Dynamic Provocation Angiography and Endovascular Planning",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "De Assis PAE Angiographic Classification (Types I-V Origins)",
      "AUA Guidelines for Benign Prostatic Hyperplasia"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "International Prostate Symptom Score (IPSS) & QoL",
      "Prostate Ellipsoid Volume & PSA Density Calculator"
    ]
  },
  {
    "id": "upper-extremity-digital-ischemia-angioplasty",
    "name": "Upper Extremity Digital Ischemia: Brachial-Radial-Ulnar Runoff Balloon Angioplasty",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "endovascular-foreign-body-snare-retrieval",
    "name": "Endovascular Retrieval of Sheared / Fractured Peripheral Guidewire or Balloon Catheter",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "retroperitoneal-hemorrhage-balloon-tamponade-coiling",
    "name": "Retroperitoneal Hemorrhage Control: Internal Iliac Artery Balloon Tamponade and Coil Embolization",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "AAST (American Association for the Surgery of Trauma) Organ Injury Scale (Grades I-V)",
      "Young-Burgess Pelvic Fracture Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Shock Index (SI) & Age-Adjusted SASI for Massive Transfusion",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "radial-artery-pseudoaneurysm-thrombin-injection",
    "name": "Radial Artery Pseudoaneurysm Post-Coronary / Neuro Intervention Ultrasound-Guided Compression and Thrombin Injection",
    "sourceFile": "aorticAndPeripheral.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "bae-massive-hemoptysis",
    "name": "Bronchial Artery Embolization (BAE) for Massive Hemoptysis",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "nbsa-embolization-recurrent-hemoptysis",
    "name": "Non-Bronchial Systemic Arterial (NBSA) Embolization for Recurrent Hemoptysis",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "rasmussen-pa-embolization",
    "name": "Pulmonary Artery Pseudoaneurysm (Rasmussen Aneurysm) Embolization",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "lga-embolization-peptic-ulcer",
    "name": "Upper GI Bleed: Left Gastric Artery (LGA) Coil & Gelfoam Embolization",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "gda-sandwich-embolization",
    "name": "Upper GI Bleed: Gastroduodenal Artery (GDA) Sandwich Coil Embolization",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "right-short-gastric-embolization",
    "name": "Upper GI Bleed: Right Gastric / Short Gastric Artery Microcoil Embolization",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "lgib-colic-microcoil-embolization",
    "name": "Lower GI Bleed: Superselective Colic Branch Microcoil Embolization",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "sra-embolization-rectal-bleed",
    "name": "Lower GI Bleed: Superior Rectal Artery (SRA) Microcoil Embolization",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "trauma-pelvic-fracture-embolization",
    "name": "Trauma: Pelvic Fracture Hemodynamic Instability Gelfoam Slurry Embolization",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "AAST (American Association for the Surgery of Trauma) Organ Injury Scale (Grades I-V)",
      "Young-Burgess Pelvic Fracture Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Shock Index (SI) & Age-Adjusted SASI for Massive Transfusion",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "trauma-superselective-pelvic-branch-embolization",
    "name": "Trauma: Superselective Internal Pudendal / Obturator / Superior Gluteal Artery Microcoil Embolization",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "AAST (American Association for the Surgery of Trauma) Organ Injury Scale (Grades I-V)",
      "Young-Burgess Pelvic Fracture Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Shock Index (SI) & Age-Adjusted SASI for Massive Transfusion",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "trauma-proximal-splenic-artery-embolization",
    "name": "Trauma: High-Grade Splenic Laceration Proximal Splenic Artery Embolization (Plug / Coils)",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "AAST (American Association for the Surgery of Trauma) Organ Injury Scale (Grades I-V)",
      "Young-Burgess Pelvic Fracture Classification"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Shock Index (SI) & Age-Adjusted SASI for Massive Transfusion",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "trauma-distal-splenic-microcoil-embolization",
    "name": "Trauma: Splenic Parenchymal Pseudoaneurysm Superselective Distal Microcoil Embolization",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "AAST (American Association for the Surgery of Trauma) Organ Injury Scale (Grades I-V)",
      "Young-Burgess Pelvic Fracture Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Shock Index (SI) & Age-Adjusted SASI for Massive Transfusion",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "trauma-hepatic-bleeding-embolization",
    "name": "Trauma: Hepatic Parenchymal Bleeding & Pseudoaneurysm Microcoil / Liquid Embolization",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "AAST (American Association for the Surgery of Trauma) Organ Injury Scale (Grades I-V)",
      "Young-Burgess Pelvic Fracture Classification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Caprini VTE Risk Score",
      "Shock Index (SI) & Age-Adjusted SASI for Massive Transfusion",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "trauma-renal-artery-embolization",
    "name": "Trauma: Renal Artery Pseudoaneurysm / Active Extravasation Superselective Microcoil Embolization",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "AAST (American Association for the Surgery of Trauma) Organ Injury Scale (Grades I-V)",
      "Young-Burgess Pelvic Fracture Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Shock Index (SI) & Age-Adjusted SASI for Massive Transfusion",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Renal Artery Resistive Index (RI) & RAR Ratio"
    ]
  },
  {
    "id": "pph-covered-stenting-viabahn",
    "name": "Post-Pancreatectomy Hemorrhage (PPH): Hepatic / Gastroduodenal Stump Covered Stenting (Viabahn)",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "FIGO Classification for Uterine Leiomyomas (Types 0-8)",
      "O-RADS / Pelvic Imaging Staging"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Uterine Fibroid Volume & Spherical Equivalence Calculator",
      "Shock Index (SI) for Post-Partum Hemorrhage"
    ]
  },
  {
    "id": "pph-coil-isolation-thrombin",
    "name": "Post-Pancreatectomy Hemorrhage: Pseudoaneurysm Coil Isolation & Percutaneous / Transcatheter Thrombin Injection",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "FIGO Classification for Uterine Leiomyomas (Types 0-8)",
      "O-RADS / Pelvic Imaging Staging"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Uterine Fibroid Volume & Spherical Equivalence Calculator",
      "Shock Index (SI) for Post-Partum Hemorrhage"
    ]
  },
  {
    "id": "splenic-aneurysm-covered-stent",
    "name": "Splenic Artery Aneurysm (SAA): Endovascular Covered Stent-Graft Exclusion",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "splenic-aneurysm-sac-packing-onyx",
    "name": "Splenic Artery Aneurysm (SAA): Sac Packing with Detachable Coils & Onyx / Thrombin",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "renal-artery-aneurysm-stent-assisted-coiling",
    "name": "Renal Artery Aneurysm (RAA): Stent-Assisted Coiling at Main Renal Bifurcation",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "renal-pseudoaneurysm-post-pcnl-nephrectomy",
    "name": "Renal Artery Pseudoaneurysm Post-Partial Nephrectomy / PCNL Superselective Microcoil Embolization",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "uae-primary-pph-gelfoam",
    "name": "Uterine Artery Embolization (UAE) for Primary Postpartum Hemorrhage (PPH) with Gelfoam Slurry",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "FIGO Classification for Uterine Leiomyomas (Types 0-8)",
      "O-RADS / Pelvic Imaging Staging"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Uterine Fibroid Volume & Spherical Equivalence Calculator",
      "Shock Index (SI) for Post-Partum Hemorrhage"
    ]
  },
  {
    "id": "placenta-accreta-balloon-occlusion",
    "name": "Prophylactic Internal Iliac Artery Balloon Occlusion Catheters for Placenta Accreta Spectrum (PAS)",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "ufe-uterine-fibroids-microspheres",
    "name": "Uterine Fibroid Embolization (UFE) using Calibrated Microspheres (500-700 / 700-900 um)",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "FIGO Classification for Uterine Leiomyomas (Types 0-8)",
      "O-RADS / Pelvic Imaging Staging"
    ],
    "linkedCalculators": [
      "Uterine Fibroid Volume & Spherical Equivalence Calculator",
      "Shock Index (SI) for Post-Partum Hemorrhage"
    ]
  },
  {
    "id": "uae-symptomatic-adenomyosis",
    "name": "Uterine Artery Embolization for Symptomatic Diffuse / Focal Adenomyosis",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "FIGO Classification for Uterine Leiomyomas (Types 0-8)",
      "O-RADS / Pelvic Imaging Staging"
    ],
    "linkedCalculators": [
      "Uterine Fibroid Volume & Spherical Equivalence Calculator",
      "Shock Index (SI) for Post-Partum Hemorrhage"
    ]
  },
  {
    "id": "uterine-avm-embolization-onyx-glue",
    "name": "Uterine Arteriovenous Malformation (AVM) Superselective Embolization with Onyx / Glue",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "ectopic-cervical-scar-chemoembolization",
    "name": "Ectopic Pregnancy (Cervical / Cesarean Scar): Bilateral Uterine Artery Chemoembolization with Methotrexate",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "pae-bph-microspheres",
    "name": "Prostatic Artery Embolization (PAE) for Symptomatic BPH using 300-500 um Microspheres",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "De Assis PAE Angiographic Classification (Types I-V Origins)",
      "AUA Guidelines for Benign Prostatic Hyperplasia"
    ],
    "linkedCalculators": [
      "International Prostate Symptom Score (IPSS) & QoL",
      "Prostate Ellipsoid Volume & PSA Density Calculator"
    ]
  },
  {
    "id": "pae-prostate-cancer-hematuria",
    "name": "Prostatic Artery Embolization for Intractable Hematuria Secondary to Advanced Prostate Carcinoma",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "De Assis PAE Angiographic Classification (Types I-V Origins)",
      "AUA Guidelines for Benign Prostatic Hyperplasia"
    ],
    "linkedCalculators": [
      "International Prostate Symptom Score (IPSS) & QoL",
      "Prostate Ellipsoid Volume & PSA Density Calculator"
    ]
  },
  {
    "id": "gae-knee-osteoarthritis-pain",
    "name": "Genicular Artery Embolization (GAE) for Refractory Knee Osteoarthritis Pain",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "Kellgren-Lawrence Knee Osteoarthritis Radiographic Grading (Grades 0-4)"
    ],
    "linkedCalculators": [
      "WOMAC Osteoarthritis Index for Genicular Artery Embolization"
    ]
  },
  {
    "id": "frozen-shoulder-embolization",
    "name": "Adhesive Capsulitis (Frozen Shoulder): Lateral Thoracic / Circumflex Humeral Artery Micro-Embolization",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "Kellgren-Lawrence Knee Osteoarthritis Radiographic Grading (Grades 0-4)"
    ],
    "linkedCalculators": [
      "WOMAC Osteoarthritis Index for Genicular Artery Embolization"
    ]
  },
  {
    "id": "lateral-epicondylitis-radial-recurrent-embolization",
    "name": "Refractory Lateral Epicondylitis (Tennis Elbow): Radial Recurrent Artery Branch Micro-Embolization",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "plantar-fasciitis-medial-plantar-embolization",
    "name": "Plantar Fasciitis: Medial Plantar Artery Hypervascular Branch Micro-Embolization",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "varicocele-embolization-coils-foam",
    "name": "Varicocele Embolization: Retrograde Spermatic Vein Embolization with Coils & STS 3% Foam",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "Dubin-Amelar & Sarteschi Varicocele Grading",
      "SVP (Symptoms-Varices-Pathophysiology) Classification for Pelvic Venous Disorders"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "high-flow-priapism-embolization",
    "name": "High-Flow Priapism (Arterial Priapism): Superselective Pudendal / Cavernosal Artery Microcoil / Autologous Clot Embolization",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "radiation-cystitis-sva-embolization",
    "name": "Intractable Hematuria from Radiation Cystitis: Bilateral Superior Vesical Artery Superselective Embolization",
    "sourceFile": "arterialEmbolization.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "avf_radiocephalic_pta",
    "name": "Radiocephalic (Brescia-Cimino) AV Fistula Plain Balloon Angioplasty (PTA)",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "avf_juxta_conquest",
    "name": "Brachiocephalic AVF Juxta-Anastomotic Stenosis High-Pressure Balloon Angioplasty (Conquest/Atlas)",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "avf_brachiobasilic_transposition_pta_stent",
    "name": "Brachiobasilic AVF Transposition Outflow Tract Stenosis PTA & Stenting",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "avf_cephalic_arch_cas_viabahn",
    "name": "Cephalic Arch Stenosis (CAS) Ultra-High Pressure Angioplasty & Viabahn Covered Stenting",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "avf_accessory_branch_embolization",
    "name": "Radiocephalic AVF Accessory Branch Embolization (Coil/Vascular Plug)",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "endoavf_ellipsys_creation",
    "name": "Percutaneous Endovascular AVF Creation (Ellipsys Vascular Access System)",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "endoavf_wavelinq_creation",
    "name": "Percutaneous Endovascular AVF Creation (WavelinQ 4F EndoAVF System)",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "avg_arterial_anastomosis_pta",
    "name": "AV Graft Arterial Anastomosis Stenosis Balloon Angioplasty",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "avg_venous_anastomosis_pta_stent",
    "name": "AV Graft Venous Anastomosis Pseudo-Intimal Hyperplasia Angioplasty & Covered Stenting",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "avf_acute_clot_pharmacomechanical_thrombectomy",
    "name": "Acute Clotted AV Fistula Pharmacomechanical Thrombectomy (Aspirex/Cleaner) & Lyse-and-Wait",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "avg_acute_clot_fogarty_declot",
    "name": "Acute Clotted Loop Forearm AV Graft Mechanical Thrombectomy & Fogarty Balloon-Assisted Declot",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "avf_pseudoaneurysm_covered_stent_exclusion",
    "name": "AV Fistula Venous Outflow Aneurysm/Pseudoaneurysm Covered Stent Exclusion (Fluency/Viabahn)",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "avf_pseudoaneurysm_thrombin_injection",
    "name": "AV Fistula Pseudoaneurysm Ultrasound-Guided Percutaneous Thrombin Injection",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "avf_dass_miller_banding",
    "name": "Dialysis Access Steal Syndrome: Minimally Invasive Flow Reduction (MILLER Banding Technique)",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "avf_dass_clip_suture_banding",
    "name": "Dialysis Access Steal Syndrome: Percutaneous Balloon-Assisted Banding with Hemostatic Clips/Suture",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cvs_subclavian_pta_stent",
    "name": "Central Venous Stenosis: Subclavian Vein Balloon Venoplasty & Bare Metal Stenting",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "cvo_brachiocephalic_sharp_recanalization",
    "name": "Central Venous Occlusion: Brachiocephalic Vein Sharp Recanalization (RF Wire / Chiba Needle)",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cvo_svc_kissing_balloon_stent",
    "name": "Superior Vena Cava (SVC) Stenosis in Dialysis Patient: Kissing Balloon Angioplasty & Bilateral Stenting",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "hero_graft_endovascular_deployment",
    "name": "Dialysis Access HeRO (Hemodialysis Reliable Outflow) Graft Endovascular Deployment & Outflow Bypass",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cvo_left_bc_outback_reentry",
    "name": "Left Brachiocephalic Vein Chronic Total Occlusion (CTO) Crossing with Outback / Frontrunner Re-Entry Catheter",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "permcath_right_ijv_placement",
    "name": "Tunnelled Cuffed Dual-Lumen Hemodialysis Catheter (Permcath) Placement via Right Internal Jugular Vein",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "permcath_left_ijv_placement",
    "name": "Left Internal Jugular Vein Permcath Placement with Fluoroscopic Steering & Bend Relief",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "permcath_external_jugular_placement",
    "name": "External Jugular Vein Cutdown / Percutaneous Permcath Placement",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "permcath_transfemoral_placement",
    "name": "Transfemoral / Common Femoral Vein Tunnelled Cuffed Hemodialysis Catheter Placement",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "permcath_translumbar_ivc_placement",
    "name": "Translumbar Inferior Vena Cava (IVC) Tunnelled Hemodialysis Catheter Placement for Exhausted Vascular Access",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "permcath_transhepatic_ivc_placement",
    "name": "Transhepatic IVC Tunnelled Hemodialysis Catheter Placement",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "permcath_transcollateral_intercostal_placement",
    "name": "Transcollateral / Transcostal Intercostal Vein Access for Salvage Hemodialysis Catheter",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "permcath_fibrin_sheath_snare_stripping",
    "name": "Fibrin Sheath Stripping of Malfunctioning Hemodialysis Catheter via Transfemoral Snare Loop",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "permcath_fibrin_sheath_balloon_disruption",
    "name": "Fibrin Sheath Disruption via Through-Catheter High-Pressure Balloon Angioplasty",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "permcath_exchange_subcutaneous_relocation",
    "name": "Exchange of Infected/Dysfunctional Permcath Over Hydrophilic Stiff Wire with Subcutaneous Tract Relocation",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "avf_deep_perforator_embolization",
    "name": "Incompetent Deep Perforator Vein Embolization in Non-Maturing Radiocephalic AV Fistula",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Venous Clinical Severity Score (VCSS - 10 Attributes)",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Villalta Scale for Post-Thrombotic Syndrome",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "avf_basilic_superficialization_pta",
    "name": "Basilic Vein Superficialization Percutaneous Balloon Maturation Assistance",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "avf_snuffbox_balloon_angioplasty",
    "name": "Snuffbox (Anatomical Snuffbox) AV Fistula Balloon Angioplasty",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "avg_thigh_femoral_thrombectomy_pta",
    "name": "Lower Extremity Thigh AV Graft (Femoral Artery to Femoral Vein) Thrombectomy & Venous Anastomosis PTA",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cvo_sharp_recanalization_snare_rendezvous",
    "name": "Sharp Central Venous Recanalization with Snare-Target Fluoroscopic Rendezvous Technique",
    "sourceFile": "dialysisAndFistula.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "tips-creation-viatorr",
    "name": "Transjugular Intrahepatic Portosystemic Shunt (TIPS) Creation with Controlled-Expansion Covered Stent",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "tips-revision-angioplasty-relining",
    "name": "TIPS Revision: Balloon Angioplasty and Relining of Stenosed Shunt Tract",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)",
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score",
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "tips-with-variceal-embolization",
    "name": "TIPS with Simultaneous Coronary / Gastroesophageal Variceal Coil and Gelfoam Embolization",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "brto-gastric-varices",
    "name": "Balloon-Occluded Retrograde Transvenous Obliteration (BRTO) of Gastric Varices",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "parto-gastric-varices",
    "name": "Plug-Assisted Retrograde Transvenous Obliteration (PARTO) of Gastric Varices",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "carto-gastric-varices",
    "name": "Coil-Assisted Retrograde Transvenous Obliteration (CARTO) of Gastric Varices",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "pac-brto-gastric-varices",
    "name": "Vascular-Plug Assisted Retrograde Transvenous Obliteration with Cyanoacrylate (PAC-BRTO)",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "pto-ectopic-varices",
    "name": "Percutaneous Transhepatic Obliteration (PTO) of Ectopic Duodenal / Stomal Varices",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "ptp-ehpvo-stenting",
    "name": "Percutaneous Transhepatic Portography and Portal Vein Stenting for Chronic EHPVO",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "spontaneous-shunt-embolization",
    "name": "Mesenteric-Caval / Splenorenal Spontaneous Shunt Embolization for Refractory Hepatic Encephalopathy",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "splenic-artery-embolization-partial",
    "name": "Partial / Proximal Splenic Artery Embolization (SAE) for Hypersplenism and Portal Pressure Reduction",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "sae-splenic-steal-syndrome",
    "name": "Splenic Artery Embolization for Splenic Steal Syndrome Post-Orthotopic Liver Transplant (OLT)",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "pve-ipsilateral-approach",
    "name": "Portal Vein Embolization (PVE) - Ipsilateral Approach for Future Liver Remnant (FLR) Hypertrophy",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Future Liver Remnant (sFLR) & Kinetic Growth Rate (KGR)",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "pve-contralateral-nbca",
    "name": "Portal Vein Embolization - Contralateral Approach with n-BCA Glue and Lipiodol",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "hvd-lvd-simultaneous",
    "name": "Hepatic Vein Deprivation (HVD / Liver Venous Deprivation LVD): Simultaneous PVE and Hepatic Vein Plug/Coils",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Future Liver Remnant (sFLR) & Kinetic Growth Rate (KGR)"
    ]
  },
  {
    "id": "tjlb-tract-plug",
    "name": "Transjugular Liver Biopsy (TJLB) with Core Biopsy Needle and Post-Biopsy Tract Plug Embolization",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "hvpg-measurement",
    "name": "Hepatic Venous Pressure Gradient (HVPG) Catheter Measurement with Wedged/Free Manometry",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "ptbd-right-lobe-access",
    "name": "Percutaneous Transhepatic Biliary Drainage (PTBD) - Right Lobe Access with Internal-External Catheter",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "ptbd-left-lobe-access",
    "name": "Percutaneous Transhepatic Biliary Drainage (PTBD) - Left Lobe Ductal Access",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "biliary-metallic-stenting-sems",
    "name": "Biliary Metallic Stenting (SEMS) for Unresectable Malignant Klatskin Tumor (Bismuth III/IV)",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index"
    ]
  },
  {
    "id": "bilateral-y-stent-biliary",
    "name": "Bilateral Y-Stent or Stent-in-Stent Biliary Metallic Reconstruction for Hilar Cholangiocarcinoma",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity"
    ],
    "linkedCalculators": [
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "biliary-balloon-dilation-stricture",
    "name": "Percutaneous Transhepatic Biliary Balloon Dilation for Benign Anastomotic / Post-Cholecystectomy Stricture",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "percutaneous-biliary-stone-removal",
    "name": "Percutaneous Transhepatic Removal of Retained Biliary Calculi with Dormia Basket and Balloon Sweep",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "percutaneous-cholangioscopy-lithotripsy",
    "name": "Percutaneous Transhepatic Cholangioscopy and Laser / Electrohydraulic Lithotripsy",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "percutaneous-endobiliary-biopsy",
    "name": "Percutaneous Transhepatic Endobiliary Biopsy (Forceps and Brushing) for Indeterminate Stricture",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "endobiliary-rfa-malignancy",
    "name": "Endobiliary Radiofrequency Ablation (RFA) for Malignant Biliary Obstruction",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index"
    ]
  },
  {
    "id": "ptc-cholecystostomy",
    "name": "Percutaneous Transhepatic Cholecystostomy (PTC) for Acute Cholecystitis in High-Risk Patients",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "transcholecystic-biliary-stenting",
    "name": "Transcholecystic Biliary Access and Cystic Duct Stenting",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "ptbd-covered-stent-bile-leak",
    "name": "Percutaneous Transhepatic Biliary Covered Stent Deployment for Postoperative Bile Duct Injury / Leak",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "percutaneous-biloma-abscess-drainage",
    "name": "Percutaneous Drainage of Postoperative Biloma / Subhepatic Abscess",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "portal-vein-recanalization-thrombolysis",
    "name": "Percutaneous Transhepatic Portal Vein Recanalization & Thrombolysis in Acute PVT",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "tips-stent-graft-reduction",
    "name": "TIPS Stent Graft Reduction (Constrained Stent) for Refractory Post-TIPS Encephalopathy",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "percutaneous-coil-biliovenous-fistula",
    "name": "Percutaneous Transhepatic Coil Embolization of Bilio-Venous / Bilio-Arterial Fistula Causing Hemobilia",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "selective-hepatic-artery-embolization-hemobilia",
    "name": "Selective Hepatic Artery Embolization for Post-Liver Biopsy / Trauma Hemobilia",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "AAST (American Association for the Surgery of Trauma) Organ Injury Scale (Grades I-V)",
      "Young-Burgess Pelvic Fracture Classification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Shock Index (SI) & Age-Adjusted SASI for Massive Transfusion",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "trans-splenic-portal-access-salvage",
    "name": "Trans-Splenic Portal Venous Access and Portography for Complex Portal Vein Occlusion Salvage",
    "sourceFile": "hbpAndPortalHtn.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "ctace-lipiodol-doxorubicin",
    "name": "Conventional Transarterial Chemoembolization (cTACE) with Lipiodol and Doxorubicin",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "deb-tace-dcbeads-lifepearl",
    "name": "Drug-Eluting Bead TACE (DEB-TACE) with 70-150 um DC Beads / LifePearl",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "btace-balloon-occluded-tace",
    "name": "Balloon-occluded Transarterial Chemoembolization (B-TACE)",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "tare-sirt-mapping-tc99m-maa",
    "name": "Transarterial Radioembolization (TARE / SIRT) mapping angiogram with Tc-99m MAA & coil skeletonization",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Y90 Partition Model Dosimetry & Lung Shunt Fraction (LSF)"
    ]
  },
  {
    "id": "tare-sirt-glass-therasphere",
    "name": "Transarterial Radioembolization (TARE / SIRT) therapeutic delivery of Y-90 Glass microspheres (TheraSphere)",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Y90 Partition Model Dosimetry & Lung Shunt Fraction (LSF)",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "tare-sirt-resin-sirspheres",
    "name": "Transarterial Radioembolization (TARE / SIRT) therapeutic delivery of Y-90 Resin microspheres (SIR-Spheres)",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Y90 Partition Model Dosimetry & Lung Shunt Fraction (LSF)",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "tare-radiation-segmentectomy",
    "name": "TARE Radiation Segmentectomy for solitary early HCC in difficult surgical locations",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Y90 Partition Model Dosimetry & Lung Shunt Fraction (LSF)"
    ]
  },
  {
    "id": "hepatic-rfa-expandable-needle",
    "name": "Hepatic radiofrequency ablation (RFA) with multi-tined expandable needle for hepatocellular carcinoma",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "hepatic-mwa-water-cooled",
    "name": "Hepatic microwave ablation (MWA) with water-cooled antenna for liver metastases",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "hepatic-cryoablation-argon-helium",
    "name": "Hepatic cryoablation with argon-helium gas system and continuous ice-ball monitoring",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "ire-nanoknife-pancreatic-lapc",
    "name": "Irreversible Electroporation (IRE / NanoKnife) for non-thermal ablation of locally advanced pancreatic adenocarcinoma (LAPC)",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "ire-central-hepatic-malignancies",
    "name": "Irreversible Electroporation (IRE) for central hepatic malignancies adjacent to major portal pedicles",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "lung-mwa-early-nsclc",
    "name": "Percutaneous microwave ablation of early-stage non-small cell lung cancer (NSCLC)",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "lung-cryoablation-pleural-metastases",
    "name": "Percutaneous lung cryoablation for pulmonary metastases adjacent to pleura/chest wall",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "renal-cryoablation-rcc-temperature-sensors",
    "name": "Renal Cell Carcinoma (RCC) percutaneous cryoablation with real-time temperature sensors",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Renal Artery Resistive Index (RI) & RAR Ratio"
    ]
  },
  {
    "id": "renal-mwa-t1a-tumors",
    "name": "Renal microwave ablation for T1a renal parenchymal tumors",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Renal Artery Resistive Index (RI) & RAR Ratio"
    ]
  },
  {
    "id": "renal-angioinfarction-ethanol-aml",
    "name": "Renal angio-infarction: Superselective ethanol / particle embolization for giant angiomyolipoma",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "total-renal-arterial-embolization",
    "name": "Total renal arterial embolization for end-stage renal tumor palliation / gross hematuria",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Renal Artery Resistive Index (RI) & RAR Ratio"
    ]
  },
  {
    "id": "adrenal-mwa-recurrent-metastases",
    "name": "Percutaneous microwave ablation for recurrent adrenal metastases",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Renal Artery Resistive Index (RI) & RAR Ratio"
    ]
  },
  {
    "id": "adrenal-vein-sampling-acth",
    "name": "Adrenal vein sampling (AVS) with ACTH stimulation for primary aldosteronism (Conn",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "osteoid-osteoma-ct-guided-rfa",
    "name": "Osteoid osteoma CT-guided percutaneous radiofrequency ablation",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "cryo-cementoplasty-osseous-metastases",
    "name": "Painful osseous metastases percutaneous cryoablation combined with cementoplasty (cryo-cementoplasty)",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "AO Spine Thoracolumbar Injury Classification",
      "Spine Instability Neoplastic Score (SINS - 6 Parameters)"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "SINS Spine Instability Decision Engine",
      "Palliative Prognostic Index (PPI) for Interventional Oncology"
    ]
  },
  {
    "id": "vertebroplasty-kyphoplasty-neoplastic-collapse",
    "name": "Percutaneous sacrolasty / vertebroplasty with balloon kyphoplasty for neoplastic vertebral collapse",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "AO Spine Thoracolumbar Injury Classification",
      "Spine Instability Neoplastic Score (SINS - 6 Parameters)"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "SINS Spine Instability Decision Engine",
      "Palliative Prognostic Index (PPI) for Interventional Oncology"
    ]
  },
  {
    "id": "debiri-colorectal-liver-metastases",
    "name": "Transarterial Chemoembolization for Colorectal Liver Metastases using Irinotecan-loaded beads (DEBIRI)",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "haic-port-catheter-implantation",
    "name": "Hepatic Arterial Infusion Chemotherapy (HAIC) port catheter surgical/radiological implantation (FOLFOX / Cisplatin)",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "tace-neuroendocrine-liver-metastases",
    "name": "Transarterial chemoembolization (TACE) for symptomatic / progressive hepatic neuroendocrine tumor (NET) metastases",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "tae-bland-embolization-net-metastases",
    "name": "Transarterial embolization (TAE / bland embolization) with calibrated microspheres for neuroendocrine liver metastases",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "sarcoma-palliative-tace-cryoablation",
    "name": "Soft tissue sarcoma palliative transarterial chemoembolization and cryoablation",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "thyroid-mwa-benign-nodules",
    "name": "Percutaneous microwave ablation for benign symptomatic thyroid nodules",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "EU-TIRADS / ACR-TIRADS Thyroid Nodule Ultrasound Staging"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Thyroid Nodule Volume & Volume Reduction Ratio (VRR %)"
    ]
  },
  {
    "id": "pei-cystic-thyroid-lymph-nodes",
    "name": "Percutaneous ethanol ablation (PEI) for cystic thyroid nodules and recurrent metastatic cervical lymph nodes",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "EU-TIRADS / ACR-TIRADS Thyroid Nodule Ultrasound Staging",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Thyroid Nodule Volume & Volume Reduction Ratio (VRR %)",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "pelvic-rfa-hydrodissection-air",
    "name": "CT-guided percutaneous radiofrequency ablation of pelvic recurrences with hydrodissection / air dissection",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "thermal-ablation-retroperitoneal-lymphadenopathy",
    "name": "Palliative thermal ablation of painful retroperitoneal lymphadenopathy",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "AAST (American Association for the Surgery of Trauma) Organ Injury Scale (Grades I-V)",
      "Young-Burgess Pelvic Fracture Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Shock Index (SI) & Age-Adjusted SASI for Massive Transfusion",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index"
    ]
  },
  {
    "id": "chest-wall-desmoid-mwa",
    "name": "Percutaneous microwave ablation of chest wall / desmoid fibromatosis tumor",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "fiducial-marker-placement-sbrt",
    "name": "Percutaneous fiducial marker placement (Gold seeds) for stereotactic body radiation therapy (SBRT)",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "spinal-metastasis-rfa-steerable-electrode",
    "name": "CT-guided transpedicular biopsy and RF ablation of spinal metastasis with steerable curved electrode",
    "sourceFile": "interventionalOncology.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "gae-knee-osteoarthritis",
    "name": "Transcatheter Arterial Microembolization (TAME) / Genicular Artery Embolization (GAE) for Knee OA",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "Kellgren-Lawrence Knee Osteoarthritis Radiographic Grading (Grades 0-4)"
    ],
    "linkedCalculators": [
      "WOMAC Osteoarthritis Index for Genicular Artery Embolization"
    ]
  },
  {
    "id": "tame-frozen-shoulder",
    "name": "Transcatheter Embolization for Refractory Frozen Shoulder / Adhesive Capsulitis",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "Kellgren-Lawrence Knee Osteoarthritis Radiographic Grading (Grades 0-4)"
    ],
    "linkedCalculators": [
      "WOMAC Osteoarthritis Index for Genicular Artery Embolization"
    ]
  },
  {
    "id": "tame-lateral-epicondylitis",
    "name": "Transcatheter Arterial Microembolization for Lateral Epicondylitis (Tennis Elbow)",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "tame-plantar-fasciitis",
    "name": "Transcatheter Arterial Microembolization for Plantar Fasciitis",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "tame-achilles-tendinopathy",
    "name": "Transcatheter Arterial Microembolization for Chronic Achilles Tendinopathy",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "tame-patellar-tendinopathy",
    "name": "Transcatheter Arterial Microembolization for Patellar Tendinopathy (Jumper",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "usg-barbotage-shoulder-supraspinatus",
    "name": "Ultrasound-Guided Barbotage / Lavage of Calcific Tendinitis of the Shoulder (Supraspinatus)",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "Kellgren-Lawrence Knee Osteoarthritis Radiographic Grading (Grades 0-4)"
    ],
    "linkedCalculators": [
      "WOMAC Osteoarthritis Index for Genicular Artery Embolization"
    ]
  },
  {
    "id": "usg-barbotage-achilles",
    "name": "Ultrasound-Guided Calcific Tendinitis Barbotage of the Achilles Tendon",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "usg-tendon-fenestration-dry-needling",
    "name": "Ultrasound-Guided Percutaneous Tendon Fenestration / Dry Needling (Patellar / Common Extensor)",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "usg-prp-tendinopathy",
    "name": "Ultrasound-Guided Platelet-Rich Plasma (PRP) Injection for Tendinopathy",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage"
    ]
  },
  {
    "id": "autologous-blood-injection-epicondylitis",
    "name": "Autologous Blood Injection for Chronic Epicondylitis",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "usg-suprascapular-nerve-hydrodissection-prf",
    "name": "Ultrasound-Guided Suprascapular Nerve Hydrodissection and Pulsed Radiofrequency",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "usg-median-nerve-hydrodissection-cts",
    "name": "Ultrasound-Guided Median Nerve Hydrodissection for Carpal Tunnel Syndrome",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "usg-percutaneous-carpal-tunnel-release",
    "name": "Ultrasound-Guided Percutaneous Carpal Tunnel Release (Flexor Retinaculum Transection)",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "usg-ulnar-nerve-hydrodissection-cubital",
    "name": "Ultrasound-Guided Ulnar Nerve Hydrodissection at the Cubital Tunnel",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "usg-radial-nerve-hydrodissection",
    "name": "Ultrasound-Guided Radial Nerve Hydrodissection",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "usg-lfcn-hydrodissection-meralgia",
    "name": "Ultrasound-Guided Lateral Femoral Cutaneous Nerve Hydrodissection for Meralgia Paresthetica",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "usg-common-peroneal-nerve-hydrodissection",
    "name": "Ultrasound-Guided Common Peroneal Nerve Hydrodissection at the Fibular Neck",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "usg-morton-neuroma-alcohol-neurolysis",
    "name": "Ultrasound-Guided Morton",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "Palliative Medicine / SIR Pain Standards"
    ],
    "linkedCalculators": [
      "Palliative Prognostic Index (PPI)",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "usg-morton-neuroma-rfa",
    "name": "Ultrasound-Guided Radiofrequency Ablation for Morton",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "usg-morton-neuroma-cryoablation",
    "name": "Ultrasound-Guided Cryoablation for Morton",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "usg-a1-pulley-release-trigger-finger",
    "name": "Ultrasound-Guided A1 Pulley Percutaneous Release for Trigger Finger",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "usg-glenohumeral-joint-injection",
    "name": "Ultrasound-Guided Glenohumeral Joint Arthrocentesis and Corticosteroid Injection",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "Kellgren-Lawrence Knee Osteoarthritis Radiographic Grading (Grades 0-4)"
    ],
    "linkedCalculators": [
      "WOMAC Osteoarthritis Index for Genicular Artery Embolization"
    ]
  },
  {
    "id": "fluro-glenohumeral-distension-brisement",
    "name": "Fluoroscopy-Guided Glenohumeral Joint Injection / Distension Arthrography (Brisement)",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "Kellgren-Lawrence Knee Osteoarthritis Radiographic Grading (Grades 0-4)"
    ],
    "linkedCalculators": [
      "WOMAC Osteoarthritis Index for Genicular Artery Embolization"
    ]
  },
  {
    "id": "fluro-subacromial-bursa-injection",
    "name": "Fluoroscopy-Guided Subacromial-Subdeltoid Bursa Injection",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "fluro-hip-joint-injection",
    "name": "Fluoroscopy-Guided Hip Joint Diagnostic and Therapeutic Injection",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "Kellgren-Lawrence Knee Osteoarthritis Radiographic Grading (Grades 0-4)"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "WOMAC Osteoarthritis Index for Genicular Artery Embolization"
    ]
  },
  {
    "id": "usg-knee-intraarticular-ha-steroid",
    "name": "Ultrasound-Guided Knee Joint Intra-Articular Hyaluronic Acid / Steroid Injection",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "Kellgren-Lawrence Knee Osteoarthritis Radiographic Grading (Grades 0-4)"
    ],
    "linkedCalculators": [
      "WOMAC Osteoarthritis Index for Genicular Artery Embolization"
    ]
  },
  {
    "id": "fluro-sacroiliac-joint-injection",
    "name": "Fluoroscopy-Guided Sacroiliac Joint Injection",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "Kellgren-Lawrence Knee Osteoarthritis Radiographic Grading (Grades 0-4)"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "WOMAC Osteoarthritis Index for Genicular Artery Embolization"
    ]
  },
  {
    "id": "usg-ankle-tibiotalar-injection",
    "name": "Ultrasound-Guided Ankle (Tibiotalar) Intra-Articular Injection",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "usg-subtalar-joint-injection",
    "name": "Ultrasound-Guided Subtalar Joint Arthrocentesis and Steroid Injection",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "Kellgren-Lawrence Knee Osteoarthritis Radiographic Grading (Grades 0-4)"
    ],
    "linkedCalculators": [
      "WOMAC Osteoarthritis Index for Genicular Artery Embolization"
    ]
  },
  {
    "id": "usg-acromioclavicular-joint-injection",
    "name": "Ultrasound-Guided Acromioclavicular Joint Injection",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "Kellgren-Lawrence Knee Osteoarthritis Radiographic Grading (Grades 0-4)"
    ],
    "linkedCalculators": [
      "WOMAC Osteoarthritis Index for Genicular Artery Embolization"
    ]
  },
  {
    "id": "usg-sternoclavicular-joint-injection",
    "name": "Ultrasound-Guided Sternoclavicular Joint Injection",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "Kellgren-Lawrence Knee Osteoarthritis Radiographic Grading (Grades 0-4)"
    ],
    "linkedCalculators": [
      "WOMAC Osteoarthritis Index for Genicular Artery Embolization"
    ]
  },
  {
    "id": "usg-psoas-bursa-aspiration-sclerosis",
    "name": "Ultrasound-Guided Psoas Bursa Aspiration and Sclerosis",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "usg-trochanteric-bursa-injection-gtps",
    "name": "Ultrasound-Guided Greater Trochanteric Bursa Injection for GTPS",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "usg-baker-cyst-aspiration-sclerosis",
    "name": "Ultrasound-Guided Aspiration and Sclerotherapy of Baker",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "usg-ganglion-cyst-aspiration-sclerosis",
    "name": "Ultrasound-Guided Ganglion Cyst Aspiration, Fenestration, and Sclerosis (Wrist, Foot)",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "usg-piriformis-injection-botox-steroid",
    "name": "Ultrasound-Guided Piriformis Muscle Botulinum Toxin / Steroid Injection",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "percutaneous-thermal-ablation-msk-tumors",
    "name": "Percutaneous Thermal Ablation (RFA / Laser / Cryo) for Musculoskeletal Tumors",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "usg-si-joint-rfa-simplicity",
    "name": "Ultrasound-Guided Radiofrequency Ablation for Chronic Sacroiliac Joint Pain (Simplicity Probe)",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "Kellgren-Lawrence Knee Osteoarthritis Radiographic Grading (Grades 0-4)"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "WOMAC Osteoarthritis Index for Genicular Artery Embolization"
    ]
  },
  {
    "id": "pvp-vertebroplasty-osteoporotic",
    "name": "Percutaneous Vertebroplasty (PVP) for Osteoporotic Vertebral Compression Fractures",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "AO Spine Thoracolumbar Injury Classification",
      "Spine Instability Neoplastic Score (SINS - 6 Parameters)"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "SINS Spine Instability Decision Engine",
      "Palliative Prognostic Index (PPI) for Interventional Oncology"
    ]
  },
  {
    "id": "bkp-balloon-kyphoplasty",
    "name": "Percutaneous Balloon Kyphoplasty (BKP)",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "AO Spine Thoracolumbar Injury Classification",
      "Spine Instability Neoplastic Score (SINS - 6 Parameters)"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "SINS Spine Instability Decision Engine",
      "Palliative Prognostic Index (PPI) for Interventional Oncology"
    ]
  },
  {
    "id": "spinejack-titanium-implant",
    "name": "Expandable Titanium Intravertebral Implant Placement (SpineJack System)",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "AO Spine Thoracolumbar Injury Classification",
      "Spine Instability Neoplastic Score (SINS - 6 Parameters)"
    ],
    "linkedCalculators": [
      "SINS Spine Instability Decision Engine",
      "Palliative Prognostic Index (PPI) for Interventional Oncology"
    ]
  },
  {
    "id": "kiva-vcf-vertebral-augmentation",
    "name": "Radiofrequency-Targeted Vertebral Augmentation (Kiva VCF Treatment System)",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "AO Spine Thoracolumbar Injury Classification",
      "Spine Instability Neoplastic Score (SINS - 6 Parameters)"
    ],
    "linkedCalculators": [
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "SINS Spine Instability Decision Engine",
      "Palliative Prognostic Index (PPI) for Interventional Oncology"
    ]
  },
  {
    "id": "percutaneous-sacroplasty",
    "name": "Percutaneous Sacroplasty for Sacral Insufficiency Fractures",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "star-osteocool-spine-rfa-cement",
    "name": "Target Spine Tumor Radiofrequency Ablation (STAR / OsteoCool) with Cement Augmentation",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "AO Spine Thoracolumbar Injury Classification",
      "Spine Instability Neoplastic Score (SINS - 6 Parameters)"
    ],
    "linkedCalculators": [
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "SINS Spine Instability Decision Engine",
      "Palliative Prognostic Index (PPI) for Interventional Oncology"
    ]
  },
  {
    "id": "cervical-interlaminar-epidural-steroid",
    "name": "Percutaneous Cervical Interlaminar Epidural Steroid Injection",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "lumbar-interlaminar-epidural-steroid",
    "name": "Percutaneous Lumbar Interlaminar Epidural Steroid Injection",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "lumbar-transforaminal-epidural-snrb",
    "name": "Fluoroscopy-Guided Lumbar Transforaminal Epidural Steroid Injection (Selective Nerve Root Block)",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cervical-transforaminal-epidural",
    "name": "Fluoroscopy-Guided Cervical Transforaminal Epidural Injection",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "caudal-epidural-steroid-fluoroscopy",
    "name": "Caudal Epidural Steroid Injection with Fluoroscopic Guidance",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "lumbar-facet-joint-injection",
    "name": "Fluoroscopy-Guided Lumbar Facet Joint Intra-Articular Injection",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "Kellgren-Lawrence Knee Osteoarthritis Radiographic Grading (Grades 0-4)"
    ],
    "linkedCalculators": [
      "WOMAC Osteoarthritis Index for Genicular Artery Embolization"
    ]
  },
  {
    "id": "lumbar-medial-branch-block-mbb",
    "name": "Lumbar Medial Branch Block (MBB) for Facetogenic Pain",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "lumbar-facet-medial-branch-rfa",
    "name": "Lumbar Facet Medial Branch Radiofrequency Neurotomy (Rhizotomy)",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "cervical-medial-branch-block-rfa",
    "name": "Cervical Medial Branch Block and Radiofrequency Denervation",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "sacroiliac-cooled-rfa-lateral-branch",
    "name": "Sacroiliac Joint Cooled Radiofrequency Neurotomy (Lateral Branch RFA)",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "Kellgren-Lawrence Knee Osteoarthritis Radiographic Grading (Grades 0-4)"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "WOMAC Osteoarthritis Index for Genicular Artery Embolization"
    ]
  },
  {
    "id": "basivertebral-nerve-ablation-intracept",
    "name": "Basivertebral Nerve Ablation (Intracept Procedure) for Vertebrogenic Chronic Low Back Pain",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "AO Spine Thoracolumbar Injury Classification",
      "Spine Instability Neoplastic Score (SINS - 6 Parameters)"
    ],
    "linkedCalculators": [
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "SINS Spine Instability Decision Engine",
      "Palliative Prognostic Index (PPI) for Interventional Oncology"
    ]
  },
  {
    "id": "percutaneous-lumbar-disc-decompression",
    "name": "Percutaneous Lumbar Disc Decompression (Mechanical Nucleoplasty / Decompressor)",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "intradiscal-ozone-chemonucleolysis",
    "name": "Percutaneous Intradiscal Ozone-Oxygen (O2-O3) Chemonucleolysis",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "fluro-celiac-plexus-block-neurolysis",
    "name": "Fluoroscopy-Guided Celiac Plexus Block / Neurolysis (Retrocrural / Transaortic Technique)",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "Palliative Medicine / SIR Pain Standards"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Palliative Prognostic Index (PPI)",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "fluro-splanchnic-nerve-rfa",
    "name": "Fluoroscopy-Guided Splanchnic Nerve Radiofrequency Neurolysis",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "Palliative Medicine / SIR Pain Standards"
    ],
    "linkedCalculators": [
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Palliative Prognostic Index (PPI)"
    ]
  },
  {
    "id": "fluro-superior-hypogastric-plexus-neurolysis",
    "name": "Fluoroscopy-Guided Superior Hypogastric Plexus Block / Chemical Neurolysis",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "Palliative Medicine / SIR Pain Standards"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Palliative Prognostic Index (PPI)",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "fluro-ganglion-impar-neurolysis",
    "name": "Fluoroscopy-Guided Ganglion Impar (Walther) Neurolysis for Intractable Perineal Pain",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "Palliative Medicine / SIR Pain Standards"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Palliative Prognostic Index (PPI)",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "lumbar-sympathetic-block-rfa",
    "name": "Lumbar Sympathetic Ganglion Block / Radiofrequency Neurolysis",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "Palliative Medicine / SIR Pain Standards"
    ],
    "linkedCalculators": [
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Palliative Prognostic Index (PPI)"
    ]
  },
  {
    "id": "stellate-ganglion-block",
    "name": "Stellate Ganglion Block (Ultrasound / Fluoroscopy Guided)",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "genicular-nerve-diagnostic-block",
    "name": "Genicular Nerve Diagnostic Block",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "Kellgren-Lawrence Knee Osteoarthritis Radiographic Grading (Grades 0-4)"
    ],
    "linkedCalculators": [
      "WOMAC Osteoarthritis Index for Genicular Artery Embolization"
    ]
  },
  {
    "id": "genicular-nerve-cooled-rfa",
    "name": "Genicular Nerve Cooled Radiofrequency Ablation for Chronic Knee Pain",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "Kellgren-Lawrence Knee Osteoarthritis Radiographic Grading (Grades 0-4)"
    ],
    "linkedCalculators": [
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "WOMAC Osteoarthritis Index for Genicular Artery Embolization"
    ]
  },
  {
    "id": "genicular-nerve-pulsed-rfa",
    "name": "Genicular Nerve Conventional / Pulsed Radiofrequency Neurotomy",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "Kellgren-Lawrence Knee Osteoarthritis Radiographic Grading (Grades 0-4)"
    ],
    "linkedCalculators": [
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "WOMAC Osteoarthritis Index for Genicular Artery Embolization"
    ]
  },
  {
    "id": "occipital-nerve-block-pulsed-rf",
    "name": "Occipital Nerve Block and Pulsed Radiofrequency",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "pudendal-nerve-block-pulsed-rf",
    "name": "Pudendal Nerve Block / Pulsed Radiofrequency Neurotomy",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "targeted-epidural-blood-patch-sih",
    "name": "Targeted Epidural Blood Patch (Fluoroscopy / CT Guided) for Spontaneous Intracranial Hypotension",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "trigeminal-glycerol-rhizotomy",
    "name": "CT-Guided Percutaneous Trigeminal Ganglion (Gasserian) Glycerol Rhizotomy",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "trigeminal-balloon-compression",
    "name": "CT-Guided Percutaneous Trigeminal Balloon Compression",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "trigeminal-rf-thermocoagulation",
    "name": "Percutaneous Radiofrequency Thermocoagulation of the Gasserian Ganglion",
    "sourceFile": "mskSpinePain.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c16-diagnostic-four-vessel-cerebral-digital",
    "name": "Diagnostic Four-Vessel Cerebral Digital Subtraction Angiography (DSA)",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c16-mechanical-thrombectomy-for-acute-ischemic",
    "name": "Mechanical Thrombectomy for Acute Ischemic Stroke using Stent Retrievers (Solitaire / Trevo)",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "c16-contact-aspiration-mechanical-thrombectomy-for",
    "name": "Contact Aspiration Mechanical Thrombectomy for Stroke (ADAPT Technique)",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "c16-combined-stent-retriever-and-direct",
    "name": "Combined Stent Retriever and Direct Aspiration Technique (SAVE / CAPTIVE)",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c16-superselective-intra-arterial-thrombolysis-for",
    "name": "Superselective Intra-Arterial Thrombolysis (rtPA) for Acute Cerebral Infarction",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c16-emergent-intracranial-angioplasty-and-stenting",
    "name": "Emergent Intracranial Angioplasty and Stenting for Acute Tandem Stroke Occlusions",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma"
    ]
  },
  {
    "id": "c16-endovascular-embolization-of-intracranial-aneurysms",
    "name": "Endovascular Embolization of Intracranial Aneurysms with Detachable Bare Platinum Coils",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "c16-balloon-assisted-coil-embolization-for",
    "name": "Balloon-Assisted Coil Embolization (BACE) for Wide-Neck Cerebral Aneurysms",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "c16-stent-assisted-coil-embolization-for",
    "name": "Stent-Assisted Coil Embolization (SACE) for Complex Intracranial Aneurysms",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "c16-flow-diverter-embolization-for-unruptured",
    "name": "Flow-Diverter Embolization (Pipeline, Surpass, FRED, Silk) for Unruptured Wide-Neck Aneurysms",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c16-endosaccular-flow-disruption-using-the",
    "name": "Endosaccular Flow Disruption using the Woven EndoBridge (WEB) Device",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c16-intrasaccular-contour-neurovascular-system-implantation",
    "name": "Intrasaccular Contour Neurovascular System Implantation",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c16-therapeutic-parent-vessel-occlusion-with",
    "name": "Therapeutic Parent Vessel Occlusion (PVO) with Balloon Test Occlusion (BTO)",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c16-transarterial-onyx-squid-embolization-of",
    "name": "Transarterial Onyx / Squid Embolization of Brain Arteriovenous Malformations (bAVM)",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma"
    ]
  },
  {
    "id": "c16-transarterial-phil-embolization-of-bavms",
    "name": "Transarterial PHIL Embolization of bAVMs",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma"
    ]
  },
  {
    "id": "c16-transvenous-retrograde-embolization-of-ruptured",
    "name": "Transvenous Retrograde Embolization of Ruptured Brain AVMs",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma"
    ]
  },
  {
    "id": "c16-transarterial-embolization-of-dural-arteriovenous",
    "name": "Transarterial Embolization of Dural Arteriovenous Fistulae (dAVF)",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c16-transvenous-sinus-coil-and-liquid",
    "name": "Transvenous Sinus Coil and Liquid Embolic Occlusion of Cranial dAVFs",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c16-transorbital-direct-superior-ophthalmic-vein",
    "name": "Transorbital / Direct Superior Ophthalmic Vein Puncture for Carotid-Cavernous Fistula (CCF)",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c16-transfemoral-transvenous-occlusion-of-direct",
    "name": "Transfemoral Transvenous Occlusion of Direct and Indirect CCFs",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "c16-transarterial-embolization-of-vein-of",
    "name": "Transarterial Embolization of Vein of Galen Aneurysmal Malformations (VGAM) in Neonates",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage"
    ]
  },
  {
    "id": "c16-transcatheter-embolization-of-spinal-dural",
    "name": "Transcatheter Embolization of Spinal Dural Arteriovenous Fistulae (SDAVF)",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c16-extracranial-carotid-artery-stenting-with",
    "name": "Extracranial Carotid Artery Stenting (CAS) with Distal Filter Embolic Protection",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma"
    ]
  },
  {
    "id": "c16-transcarotid-artery-revascularization-with-dynamic",
    "name": "Transcarotid Artery Revascularization (TCAR) with Dynamic Flow Reversal",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma"
    ]
  },
  {
    "id": "c16-carotid-stenting-with-proximal-balloon",
    "name": "Carotid Stenting with Proximal Balloon Occlusion Protection (Mo.Ma System)",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma"
    ]
  },
  {
    "id": "c16-extracranial-vertebral-artery-origin-angioplasty",
    "name": "Extracranial Vertebral Artery Origin Angioplasty and Stenting",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "AO Spine Thoracolumbar Injury Classification",
      "Spine Instability Neoplastic Score (SINS - 6 Parameters)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "SINS Spine Instability Decision Engine",
      "Palliative Prognostic Index (PPI) for Interventional Oncology"
    ]
  },
  {
    "id": "c16-subclavian-steal-syndrome-balloon-angioplasty",
    "name": "Subclavian Steal Syndrome Balloon Angioplasty and Stenting",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "c16-intracranial-atherosclerotic-stenosis-balloon-angioplasty",
    "name": "Intracranial Atherosclerotic Stenosis (ICAS) Balloon Angioplasty (Gateway Balloon)",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "c16-intracranial-stenting-for-icas",
    "name": "Intracranial Stenting for ICAS (Wingspan Stent System)",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c16-middle-meningeal-artery-embolization-for",
    "name": "Middle Meningeal Artery (MMA) Embolization for Subacute and Chronic Subdural Hematoma (SDH)",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma"
    ]
  },
  {
    "id": "c16-dural-venous-sinus-stenting-for",
    "name": "Dural Venous Sinus Stenting for Idiopathic Intracranial Hypertension (IIH)",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c16-catheter-directed-thrombolysis-and-thrombectomy",
    "name": "Catheter-Directed Thrombolysis and Thrombectomy for Cerebral Venous Sinus Thrombosis (CVST)",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "c16-inferior-petrosal-sinus-sampling-for",
    "name": "Inferior Petrosal Sinus Sampling (IPSS) for ACTH-Dependent Cushing",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c16-embolization-of-spinal-arteriovenous-malformations",
    "name": "Embolization of Spinal Arteriovenous Malformations (Glomus / Juvenile Types)",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c16-embolization-of-csf-venous-fistulas",
    "name": "Embolization of CSF-Venous Fistulas with Onyx / Glue for Intracranial Hypotension",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c17-thyroid-artery-embolization-for-massive",
    "name": "Thyroid Artery Embolization (TAE) for Massive Non-toxic Multinodular Goiter",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "EU-TIRADS / ACR-TIRADS Thyroid Nodule Ultrasound Staging"
    ],
    "linkedCalculators": [
      "Thyroid Nodule Volume & Volume Reduction Ratio (VRR %)"
    ]
  },
  {
    "id": "c17-thyroid-artery-embolization-for-refractory",
    "name": "Thyroid Artery Embolization for Refractory Graves",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "EU-TIRADS / ACR-TIRADS Thyroid Nodule Ultrasound Staging"
    ],
    "linkedCalculators": [
      "Thyroid Nodule Volume & Volume Reduction Ratio (VRR %)"
    ]
  },
  {
    "id": "c17-ultrasound-guided-radiofrequency-ablation-of",
    "name": "Ultrasound-Guided Radiofrequency Ablation (RFA) of Benign Solid Thyroid Nodules",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "EU-TIRADS / ACR-TIRADS Thyroid Nodule Ultrasound Staging"
    ],
    "linkedCalculators": [
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Thyroid Nodule Volume & Volume Reduction Ratio (VRR %)"
    ]
  },
  {
    "id": "c17-percutaneous-microwave-ablation-of-benign",
    "name": "Percutaneous Microwave Ablation (MWA) of Benign Thyroid Nodules",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "EU-TIRADS / ACR-TIRADS Thyroid Nodule Ultrasound Staging"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Thyroid Nodule Volume & Volume Reduction Ratio (VRR %)"
    ]
  },
  {
    "id": "c17-percutaneous-laser-ablation-of-cold",
    "name": "Percutaneous Laser Ablation (PLA) of Cold Thyroid Nodules",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "EU-TIRADS / ACR-TIRADS Thyroid Nodule Ultrasound Staging"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Thyroid Nodule Volume & Volume Reduction Ratio (VRR %)"
    ]
  },
  {
    "id": "c17-percutaneous-ethanol-injection-of-toxic",
    "name": "Percutaneous Ethanol Injection (PEI) of Toxic / Non-Toxic Thyroid Cysts",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "EU-TIRADS / ACR-TIRADS Thyroid Nodule Ultrasound Staging",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thyroid Nodule Volume & Volume Reduction Ratio (VRR %)",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "c17-percutaneous-cryoablation-of-locally-recurrent",
    "name": "Percutaneous Cryoablation of Locally Recurrent Thyroid Carcinoma",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "EU-TIRADS / ACR-TIRADS Thyroid Nodule Ultrasound Staging"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Thyroid Nodule Volume & Volume Reduction Ratio (VRR %)"
    ]
  },
  {
    "id": "c17-ultrasound-guided-radiofrequency-ablation-of-proc43",
    "name": "Ultrasound-Guided Radiofrequency Ablation of Secondary Hyperparathyroidism",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "EU-TIRADS / ACR-TIRADS Thyroid Nodule Ultrasound Staging"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Thyroid Nodule Volume & Volume Reduction Ratio (VRR %)"
    ]
  },
  {
    "id": "c17-percutaneous-ethanol-injection-of-hyperfunctioning",
    "name": "Percutaneous Ethanol Injection of Hyperfunctioning Parathyroid Adenoma",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "EU-TIRADS / ACR-TIRADS Thyroid Nodule Ultrasound Staging"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thyroid Nodule Volume & Volume Reduction Ratio (VRR %)"
    ]
  },
  {
    "id": "c17-selective-intra-arterial-parathyroid-embolization",
    "name": "Selective Intra-Arterial Parathyroid Embolization",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "EU-TIRADS / ACR-TIRADS Thyroid Nodule Ultrasound Staging"
    ],
    "linkedCalculators": [
      "Thyroid Nodule Volume & Volume Reduction Ratio (VRR %)"
    ]
  },
  {
    "id": "c17-parathyroid-venous-sampling-with-rapid",
    "name": "Parathyroid Venous Sampling (PVS) with Rapid Intraoperative PTH Assay",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "EU-TIRADS / ACR-TIRADS Thyroid Nodule Ultrasound Staging"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thyroid Nodule Volume & Volume Reduction Ratio (VRR %)"
    ]
  },
  {
    "id": "c17-transcatheter-adrenal-artery-embolization-for",
    "name": "Transcatheter Adrenal Artery Embolization for Malignant Pheochromocytoma",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c17-adrenal-vein-sampling-for-primary",
    "name": "Adrenal Vein Sampling (AVS) for Primary Aldosteronism (Conn",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c17-percutaneous-sialolithiasis-extraction-under-fluoroscopic",
    "name": "Percutaneous Sialolithiasis Extraction under Fluoroscopic / Wire Basket Guidance",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c17-fluoroscopy-guided-balloon-sialoplasty-for",
    "name": "Fluoroscopy-Guided Balloon Sialoplasty for Duct Stenosis",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c17-sclerotherapy-of-sialoceles-and-parotid",
    "name": "Sclerotherapy of Sialoceles and Parotid Cysts",
    "sourceFile": "neuroAndHeadNeck.ts",
    "applicableClassifications": [
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "stroke-adapt-thrombectomy",
    "name": "Acute Ischemic Stroke: Mechanical Thrombectomy (ADAPT Direct Aspiration & Stent Retriever)",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "stroke-solumbra-thrombectomy",
    "name": "Acute Ischemic Stroke: Combined Stent Retriever & Contact Aspiration Catheter (Solumbra Technique)",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "stroke-basilar-thrombectomy-stent",
    "name": "Acute Ischemic Stroke: Basilar Artery Emergent Mechanical Thrombectomy & Rescue Intracranial Stenting",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "aneurysm-primary-coiling",
    "name": "Intracranial Aneurysm: Primary Endovascular Coiling with Detachable Microcoils",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage"
    ]
  },
  {
    "id": "aneurysm-balloon-assisted-coiling",
    "name": "Intracranial Aneurysm: Balloon-Assisted Coiling for Wide-Neck Cerebral Aneurysm",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "aneurysm-stent-assisted-coiling",
    "name": "Intracranial Aneurysm: Stent-Assisted Coiling with Laser-Cut / Braided Microstents",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "aneurysm-flow-diverter-stent",
    "name": "Intracranial Aneurysm: Flow Diverter Stent Deployment (Pipeline / Surpass / FRED)",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "aneurysm-web-device",
    "name": "Intracranial Aneurysm: Intra-saccular Flow Disruption with Woven EndoBridge (WEB Device)",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "bavm-onyx-embolization",
    "name": "Brain Arteriovenous Malformation (bAVM): Superselective Microcatheter Embolization with Liquid Embolic (Onyx / Squid)",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "davf-transvenous-embolization",
    "name": "Dural Arteriovenous Fistula (dAVF): Transvenous Coil & Liquid Embolic Embolization of Transverse / Sigmoid Sinus",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "davf-transarterial-embolization",
    "name": "Dural Arteriovenous Fistula: Transarterial Microcatheter Embolization with Non-Adhesive Liquid Embolic (PHIL / Onyx)",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "ccf-direct-embolization",
    "name": "Carotid-Cavernous Fistula (Direct Type A): Transarterial / Transvenous Detachable Coil & Balloon Occlusion",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "ccf-indirect-embolization",
    "name": "Carotid-Cavernous Fistula (Indirect / Barrow B, C, D): Transvenous Embolization via Inferior Petrosal Sinus (IPS) or SOV",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cas-distal-filter",
    "name": "Carotid Artery Stenting (CAS) with Distal Filter Embolic Protection Device (SpiderFX / AngioGuard)",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma"
    ]
  },
  {
    "id": "cas-proximal-protection",
    "name": "Carotid Artery Stenting with Proximal Balloon Occlusion Flow Reversal Protection (Mo.Ma System)",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma"
    ]
  },
  {
    "id": "mma-embolization-sdh",
    "name": "Middle Meningeal Artery (MMA) Embolization for Chronic Refractory / Recurrent Subdural Hematoma",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma"
    ]
  },
  {
    "id": "icad-wingspan-stenting",
    "name": "Intracranial Atherosclerotic Disease (ICAD): Balloon Angioplasty & Wingspan Intracranial Stenting",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "dsa-diagnostic-cerebral",
    "name": "Diagnostic 4-Vessel / 6-Vessel Cerebral Digital Subtraction Angiography (DSA) with 3D Rotational Angiography",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "ipss-bilateral-sampling",
    "name": "Inferior Petrosal Sinus Sampling (IPSS) Bilateral Simultaneous with Peripheral ACTH for Cushing",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "epistaxis-microcoil-embolization",
    "name": "Epistaxis: Superselective Sphenopalatine & Facial Artery Embolization for Intractable Nosebleed",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "jna-preop-embolization",
    "name": "Juvenile Nasopharyngeal Angiofibroma (JNA): Pre-operative Superselective Devascularization with PVA Particles",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "paraganglioma-preop-embolization",
    "name": "Head & Neck Hypervascular Paraganglioma (Glomus Jugulare / Vagale / Carotid Body Tumor) Pre-op Embolization",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "carotid-blowout-covered-stent",
    "name": "Carotid Blowout Syndrome (CBS): Emergent Covered Stent Exclusion (Viabahn / PK Papyrus)",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma"
    ]
  },
  {
    "id": "carotid-blowout-parent-sacrifice",
    "name": "Carotid Blowout Syndrome: Permanent Parent Vessel Sacrifice with Balloon Test Occlusion (BTO) & Coiling",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "venous-sinus-stenting-iih",
    "name": "Intracranial Venous Sinus Stenting for Idiopathic Intracranial Hypertension (IIH) with Venous Manometry",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "osteoid-osteoma-rfa",
    "name": "Osteoid Osteoma: CT-Guided Percutaneous Radiofrequency Ablation (RFA) with Drill Access",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "sacroiliac-rf-neurotomy",
    "name": "Sacroiliac Joint CT-Guided Radiofrequency Neurotomy / Cooled RFA for Chronic Refractory Sacroiliac Arthropathy",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "Kellgren-Lawrence Knee Osteoarthritis Radiographic Grading (Grades 0-4)"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "WOMAC Osteoarthritis Index for Genicular Artery Embolization"
    ]
  },
  {
    "id": "celiac-plexus-neurolysis",
    "name": "Celiac Plexus Neurolysis (CPN): Fluoroscopy / CT-Guided Trans-aortic / Retro-crural Percutaneous Alcohol Injection",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "Palliative Medicine / SIR Pain Standards"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Palliative Prognostic Index (PPI)",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "superior-hypogastric-block",
    "name": "Superior Hypogastric Plexus Block: Percutaneous Neurolysis for Intractable Malignant Pelvic Pain",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "Palliative Medicine / SIR Pain Standards"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Palliative Prognostic Index (PPI)",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "ganglion-impar-neurolysis",
    "name": "Ganglion Impar Neurolysis: Transcoccygeal Percutaneous Neurolytic Block for Perineal and Rectal Carcinoma Pain",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "Palliative Medicine / SIR Pain Standards"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Palliative Prognostic Index (PPI)",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "intranodal-lymphangiography",
    "name": "Intranodal Lymphangiography: Ultrasound-Guided Bilateral Inguinal Lymph Node Micro-Puncture & Lipiodol Infusion",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "CIRSE / SIR Lymphatic Interventions Standards"
    ],
    "linkedCalculators": [
      "Chylothorax Drainage Severity & Lymphatic Leak Metric"
    ]
  },
  {
    "id": "thoracic-duct-embolization",
    "name": "Thoracic Duct Embolization (TDE): Transabdominal Cisterna Chyli Puncture, Catheterization, and Coil / Glue Occlusion",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "CIRSE / SIR Lymphatic Interventions Standards"
    ],
    "linkedCalculators": [
      "Chylothorax Drainage Severity & Lymphatic Leak Metric"
    ]
  },
  {
    "id": "thoracic-duct-disruption",
    "name": "Thoracic Duct Disruption / Maceration for Intractable Postoperative Chylothorax when Cannulation Fails",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Lymphatic Interventions Standards"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Chylothorax Drainage Severity & Lymphatic Leak Metric"
    ]
  },
  {
    "id": "retrograde-td-cannulation",
    "name": "Retrograde Transvenous Thoracic Duct Cannulation via Left Internal Jugular / Subclavian Angle",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "CIRSE / SIR Lymphatic Interventions Standards"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Chylothorax Drainage Severity & Lymphatic Leak Metric"
    ]
  },
  {
    "id": "lymphocele-drainage-sclerotherapy",
    "name": "Postoperative Pelvic / Retroperitoneal Lymphocele Percutaneous Catheter Drainage & Sclerosant Instillation (Bleomycin / Doxycycline)",
    "sourceFile": "neuroAndLymphatic.ts",
    "applicableClassifications": [
      "AAST (American Association for the Surgery of Trauma) Organ Injury Scale (Grades I-V)",
      "Young-Burgess Pelvic Fracture Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Shock Index (SI) & Age-Adjusted SASI for Massive Transfusion",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "usg-liver-biopsy-parenchymal",
    "name": "Ultrasound-Guided Liver Biopsy (Non-targeted Parenchymal / Medical Liver)",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "usg-focal-liver-lesion-biopsy",
    "name": "Ultrasound-Guided Focal Liver Lesion Core Needle Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "usg-liver-transplant-biopsy",
    "name": "Ultrasound-Guided Liver Allograft / Transplant Protocol Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "usg-liver-abscess-infiltrative-biopsy",
    "name": "Ultrasound-Guided Liver Abscess Wall / Infiltrative Mass Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "tglb-transjugular-liver-biopsy",
    "name": "Transjugular Liver Biopsy (TGLB)",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "usg-native-kidney-biopsy",
    "name": "Ultrasound-Guided Native Kidney Biopsy (Cortical Core)",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "usg-renal-transplant-biopsy",
    "name": "Ultrasound-Guided Renal Allograft / Transplant Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "usg-renal-mass-core-biopsy",
    "name": "Ultrasound-Guided Renal Mass Core Needle Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "ct-renal-mass-core-biopsy",
    "name": "CT-Guided Renal Mass Core Needle Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "usg-native-spleen-core-biopsy",
    "name": "Ultrasound-Guided Native Spleen Core Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "ct-splenic-lesion-biopsy",
    "name": "CT-Guided Splenic Lesion Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "usg-pancreatic-mass-core-biopsy",
    "name": "Ultrasound-Guided Pancreatic Mass Core Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "ct-pancreatic-mass-biopsy",
    "name": "CT-Guided Pancreatic Head / Body / Tail Mass Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "eus-fna-fnb-pancreas",
    "name": "Endoscopic Ultrasound-Guided Fine Needle Aspiration / Biopsy (EUS-FNA/FNB) of Pancreas",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "ct-lung-core-biopsy-coaxial",
    "name": "CT-Guided Percutaneous Lung Core Needle Biopsy (Coaxial Technique)",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "ct-lung-fnac",
    "name": "CT-Guided Percutaneous Lung Fine Needle Aspiration (FNAC)",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "usg-subpleural-lung-biopsy",
    "name": "Ultrasound-Guided Peripheral Subpleural Lung Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "ct-mediastinal-mass-biopsy",
    "name": "CT-Guided Mediastinal Mass Core Needle Biopsy (Anterior, Middle, Posterior)",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "ct-pleural-mass-biopsy",
    "name": "CT-Guided Pleural Mass / Thickening Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "ct-adrenal-gland-biopsy",
    "name": "CT-Guided Adrenal Gland Core Needle Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "ct-retroperitoneal-mass-biopsy",
    "name": "CT-Guided Retroperitoneal Mass / Lymph Node Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "AAST (American Association for the Surgery of Trauma) Organ Injury Scale (Grades I-V)",
      "Young-Burgess Pelvic Fracture Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Shock Index (SI) & Age-Adjusted SASI for Massive Transfusion",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "ct-deep-pelvic-presacral-biopsy",
    "name": "CT-Guided Deep Pelvic / Presacral Mass Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "usg-mesenteric-omental-biopsy",
    "name": "Ultrasound-Guided Mesenteric Mass / Omental Cake Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage"
    ]
  },
  {
    "id": "usg-peritoneal-deposit-biopsy",
    "name": "Ultrasound-Guided Peritoneal Deposit Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "usg-thyroid-fnac",
    "name": "Ultrasound-Guided Thyroid Fine Needle Aspiration Cytology (FNAC)",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "EU-TIRADS / ACR-TIRADS Thyroid Nodule Ultrasound Staging"
    ],
    "linkedCalculators": [
      "Thyroid Nodule Volume & Volume Reduction Ratio (VRR %)"
    ]
  },
  {
    "id": "usg-thyroid-core-biopsy",
    "name": "Ultrasound-Guided Thyroid Core Needle Biopsy (CNB)",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "EU-TIRADS / ACR-TIRADS Thyroid Nodule Ultrasound Staging"
    ],
    "linkedCalculators": [
      "Thyroid Nodule Volume & Volume Reduction Ratio (VRR %)"
    ]
  },
  {
    "id": "usg-parathyroid-fnac-pth-washout",
    "name": "Ultrasound-Guided Parathyroid Mass FNAC with Parathyroid Hormone (PTH) Washout",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "EU-TIRADS / ACR-TIRADS Thyroid Nodule Ultrasound Staging"
    ],
    "linkedCalculators": [
      "Thyroid Nodule Volume & Volume Reduction Ratio (VRR %)"
    ]
  },
  {
    "id": "usg-cervical-ln-fnac-washout",
    "name": "Ultrasound-Guided Cervical Lymph Node FNAC with Thyroglobulin / Calcitonin Washout",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "usg-cervical-ln-core-biopsy",
    "name": "Ultrasound-Guided Cervical Lymph Node Core Needle Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "usg-salivary-gland-fnac",
    "name": "Ultrasound-Guided Salivary Gland (Parotid / Submandibular) FNAC",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "usg-salivary-gland-core-biopsy",
    "name": "Ultrasound-Guided Salivary Gland Core Needle Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "usg-breast-core-biopsy-14g",
    "name": "Ultrasound-Guided Breast Core Needle Biopsy (14-Gauge Automated)",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "usg-breast-vabb",
    "name": "Ultrasound-Guided Breast Vacuum-Assisted Core Biopsy (VABB)",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "stereotactic-breast-vabb",
    "name": "Stereotactic / Tomosynthesis-Guided Vacuum-Assisted Breast Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "mri-breast-biopsy",
    "name": "MRI-Guided Breast Core Needle / Vacuum Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "trus-prostate-biopsy-12core",
    "name": "Ultrasound-Guided Transrectal Prostate Biopsy (TRUS-Biopsy, 12-Core Systematic)",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "De Assis PAE Angiographic Classification (Types I-V Origins)",
      "AUA Guidelines for Benign Prostatic Hyperplasia"
    ],
    "linkedCalculators": [
      "International Prostate Symptom Score (IPSS) & QoL",
      "Prostate Ellipsoid Volume & PSA Density Calculator"
    ]
  },
  {
    "id": "mri-us-fusion-transperineal-prostate-biopsy",
    "name": "MRI-Ultrasound Fusion Targeted Transperineal Prostate Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "De Assis PAE Angiographic Classification (Types I-V Origins)",
      "AUA Guidelines for Benign Prostatic Hyperplasia"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "International Prostate Symptom Score (IPSS) & QoL",
      "Prostate Ellipsoid Volume & PSA Density Calculator"
    ]
  },
  {
    "id": "mri-us-fusion-transrectal-prostate-biopsy",
    "name": "MRI-Ultrasound Fusion Targeted Transrectal Prostate Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "De Assis PAE Angiographic Classification (Types I-V Origins)",
      "AUA Guidelines for Benign Prostatic Hyperplasia"
    ],
    "linkedCalculators": [
      "International Prostate Symptom Score (IPSS) & QoL",
      "Prostate Ellipsoid Volume & PSA Density Calculator"
    ]
  },
  {
    "id": "ct-bone-biopsy-jamshidi",
    "name": "CT-Guided Bone Biopsy with Jamshidi Trephine Needle",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "AO Spine Thoracolumbar Injury Classification",
      "Spine Instability Neoplastic Score (SINS - 6 Parameters)"
    ],
    "linkedCalculators": [
      "SINS Spine Instability Decision Engine",
      "Palliative Prognostic Index (PPI) for Interventional Oncology"
    ]
  },
  {
    "id": "ct-bone-biopsy-mechanical-drill",
    "name": "CT-Guided Bone Biopsy with Powered Mechanical Drill (Bonopty / OnControl)",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "AO Spine Thoracolumbar Injury Classification",
      "Spine Instability Neoplastic Score (SINS - 6 Parameters)"
    ],
    "linkedCalculators": [
      "SINS Spine Instability Decision Engine",
      "Palliative Prognostic Index (PPI) for Interventional Oncology"
    ]
  },
  {
    "id": "ct-sclerotic-vertebral-biopsy",
    "name": "CT-Guided Sclerotic Vertebral Body Core Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "AO Spine Thoracolumbar Injury Classification",
      "Spine Instability Neoplastic Score (SINS - 6 Parameters)"
    ],
    "linkedCalculators": [
      "SINS Spine Instability Decision Engine",
      "Palliative Prognostic Index (PPI) for Interventional Oncology"
    ]
  },
  {
    "id": "ct-lytic-vertebral-biopsy",
    "name": "CT-Guided Lytic Vertebral Lesion Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "AO Spine Thoracolumbar Injury Classification",
      "Spine Instability Neoplastic Score (SINS - 6 Parameters)"
    ],
    "linkedCalculators": [
      "SINS Spine Instability Decision Engine",
      "Palliative Prognostic Index (PPI) for Interventional Oncology"
    ]
  },
  {
    "id": "ct-sacral-iliac-bone-biopsy",
    "name": "CT-Guided Sacral / Iliac Bone Core Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "AO Spine Thoracolumbar Injury Classification",
      "Spine Instability Neoplastic Score (SINS - 6 Parameters)"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "SINS Spine Instability Decision Engine",
      "Palliative Prognostic Index (PPI) for Interventional Oncology"
    ]
  },
  {
    "id": "ct-appendicular-bone-biopsy",
    "name": "CT-Guided Appendicular Skeleton Bone Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "AO Spine Thoracolumbar Injury Classification",
      "Spine Instability Neoplastic Score (SINS - 6 Parameters)"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "SINS Spine Instability Decision Engine",
      "Palliative Prognostic Index (PPI) for Interventional Oncology"
    ]
  },
  {
    "id": "usg-soft-tissue-extremity-biopsy",
    "name": "Ultrasound-Guided Soft Tissue Extremity Mass Core Needle Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "usg-subcutaneous-nodule-fnac",
    "name": "Ultrasound-Guided Subcutaneous Nodule FNAC",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "EU-TIRADS / ACR-TIRADS Thyroid Nodule Ultrasound Staging"
    ],
    "linkedCalculators": [
      "Thyroid Nodule Volume & Volume Reduction Ratio (VRR %)"
    ]
  },
  {
    "id": "usg-subcutaneous-mass-core-biopsy",
    "name": "Ultrasound-Guided Subcutaneous Lipomatous / Fibrous Mass Core Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "usg-superficial-ln-fnac",
    "name": "Ultrasound-Guided Superficial Lymph Node (Axillary, Inguinal, Supraclavicular) FNAC",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "usg-superficial-ln-core-biopsy",
    "name": "Ultrasound-Guided Superficial Lymph Node Core Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "fluoroscopic-endobiliary-forceps-biopsy",
    "name": "Fluoroscopic Endobiliary Forceps Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity"
    ],
    "linkedCalculators": [
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "fluoroscopic-endobiliary-brush-cytology",
    "name": "Fluoroscopic Endobiliary Brush Cytology",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity"
    ],
    "linkedCalculators": [
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "transvascular-endomyocardial-biopsy",
    "name": "Transvascular Endomyocardial Biopsy (Right Ventricular Septal)",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "transvenous-renal-mass-biopsy",
    "name": "Transvenous Renal Mass Biopsy",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "usg-liver-abscess-aspiration",
    "name": "Ultrasound-Guided Liver Abscess Aspiration",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "pcd-amebic-liver-abscess",
    "name": "Ultrasound-Guided Percutaneous Catheter Drainage (PCD) of Amebic Liver Abscess",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "pcd-pyogenic-liver-abscess",
    "name": "Ultrasound-Guided Percutaneous Catheter Drainage of Pyogenic Liver Abscess",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "usg-hydatid-cyst-pair",
    "name": "Ultrasound-Guided Percutaneous Drainage of Hydatid Cyst (PAIR Technique)",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "modified-pair-pd-hydatid-cyst",
    "name": "Modified PAIR-PD (Percutaneous Aspiration, Injection, Re-aspiration with Drainage) of Hydatid Cyst",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "ct-subdiaphragmatic-abscess-drainage",
    "name": "CT-Guided Percutaneous Subdiaphragmatic Abscess Drainage",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "ct-subhepatic-abscess-drainage",
    "name": "CT-Guided Percutaneous Subhepatic Abscess Drainage",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "ct-pancreatic-pseudocyst-drainage",
    "name": "CT-Guided Percutaneous Pancreatic Pseudocyst Drainage",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "ct-wopn-drainage",
    "name": "CT-Guided Percutaneous Walled-Off Pancreatic Necrosis (WOPN) Drainage",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "stepup-percutaneous-pancreatic-necrosectomy",
    "name": "Percutaneous Catheter Debridement / Step-Up Necrosectomy for Infected Pancreatic Necrosis",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "ct-splenic-abscess-drainage",
    "name": "CT-Guided Percutaneous Splenic Abscess Drainage",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "ct-retroperitoneal-psoas-abscess-drainage",
    "name": "CT-Guided Percutaneous Retroperitoneal / Psoas Abscess Drainage",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "AAST (American Association for the Surgery of Trauma) Organ Injury Scale (Grades I-V)",
      "Young-Burgess Pelvic Fracture Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Shock Index (SI) & Age-Adjusted SASI for Massive Transfusion",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "usg-iliopsoas-abscess-drainage",
    "name": "Ultrasound-Guided Iliopsoas Abscess Catheter Drainage",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "usg-transabdominal-pelvic-abscess-drainage",
    "name": "Ultrasound-Guided Transabdominal Pelvic Abscess Drainage",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "usg-transrectal-pelvic-abscess-drainage",
    "name": "Ultrasound-Guided Transrectal Pelvic Abscess Catheter Drainage",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "usg-transvaginal-pelvic-abscess-drainage",
    "name": "Ultrasound-Guided Transvaginal Pelvic Abscess Catheter Drainage",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "ct-gluteal-infragluteal-deep-pelvic-abscess-drainage",
    "name": "CT-Guided Gluteal / Infragluteal Deep Pelvic Abscess Drainage",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "usg-diagnostic-paracentesis",
    "name": "Ultrasound-Guided Paracentesis (Diagnostic)",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "usg-therapeutic-large-volume-paracentesis",
    "name": "Ultrasound-Guided Large-Volume Therapeutic Paracentesis with Albumin Replacement",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "tunneled-peritoneal-catheter-placement-ascites",
    "name": "Tunneled Peritoneal Drainage Catheter Placement (PleurX / Rocket) for Malignant Ascites",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "peritoneovenous-denver-shunt-placement",
    "name": "Peritoneovenous Shunt Placement (Denver Shunt)",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "usg-thoracentesis-diagnostic-therapeutic",
    "name": "Ultrasound-Guided Thoracentesis (Diagnostic & Therapeutic)",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "small-bore-pigtail-insertion-pleural-effusion",
    "name": "Small-Bore Pigtail Catheter Insertion for Pleural Effusion",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage"
    ]
  },
  {
    "id": "large-bore-icd-insertion-hemothorax-empyema",
    "name": "Large-Bore Intercostal Drain (ICD) Insertion for Hemothorax / Empyema",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "intracavitary-fibrinolytic-therapy-loculated-empyema",
    "name": "Image-Guided Intracavitary Fibrinolytic / Enzyme Therapy for Loculated Empyema (tPA/DNase)",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage"
    ]
  },
  {
    "id": "tunneled-pleural-catheter-placement-effusion",
    "name": "Tunneled Pleural Drainage Catheter Placement (PleurX) for Refractory Malignant Pleural Effusion",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "pcd-lung-abscess",
    "name": "Percutaneous Catheter Drainage of Lung Abscess",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "pcd-pneumothorax-heimlich-valve-placement",
    "name": "Percutaneous Catheter Drainage of Pneumothorax (Aspiration & Heimlich Valve Placement)",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "usg-pericardiocentesis-diagnostic-evacuative",
    "name": "Ultrasound-Guided Pericardiocentesis (Diagnostic & Evacuative)",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "indwelling-pericardial-catheter-malignant-effusion",
    "name": "Indwelling Pericardial Catheter Placement for Malignant Pericardial Effusion",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "pcd-urinoma-drainage",
    "name": "Percutaneous Catheter Drainage of Urinoma",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "pcd-biloma-drainage",
    "name": "Percutaneous Catheter Drainage of Biloma",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "pcd-lymphocele-drainage",
    "name": "Percutaneous Drainage of Lymphocele",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "percutaneous-lymphocele-sclerotherapy",
    "name": "Percutaneous Lymphocele Sclerotherapy (Ethanol, Doxycycline, Bleomycin, Povidone-Iodine)",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "pcd-retroperitoneal-hematoma-aspiration",
    "name": "Percutaneous Aspiration and Drainage of Retroperitoneal Hematoma",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "AAST (American Association for the Surgery of Trauma) Organ Injury Scale (Grades I-V)",
      "Young-Burgess Pelvic Fracture Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Shock Index (SI) & Age-Adjusted SASI for Massive Transfusion",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "usg-soft-tissue-muscle-hematoma-evacuation",
    "name": "Ultrasound-Guided Soft Tissue / Muscle Hematoma Evacuation",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "sclerotherapy-simple-hepatic-cysts",
    "name": "Sclerotherapy of Simple Hepatic Cysts",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "sclerotherapy-adpkd-renal-cysts",
    "name": "Sclerotherapy of Autosomal Dominant Polycystic Kidney Disease (ADPKD) Cysts",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "WHO Hydatid PAIR Eligibility Decision Engine",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "prg-gastropexy-t-fasteners",
    "name": "Percutaneous Radiologic Gastrostomy (PRG) with Gastropexy T-Fasteners",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "direct-percutaneous-radiologic-jejunostomy",
    "name": "Direct Percutaneous Radiologic Jejunostomy (PRJ)",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "prgj-catheter-insertion",
    "name": "Percutaneous Radiologic Gastrojejunostomy (PRGJ) Catheter Insertion",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "fluoroscopic-exchange-repositioning-gj-tubes",
    "name": "Fluoroscopy-Guided Exchange and Repositioning of Gastrojejunostomy Tubes",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "balloon-dilatation-esophageal-peptic-strictures",
    "name": "Balloon Dilatation of Esophageal Anastomotic / Peptic Strictures",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "esophageal-covered-sems-deployment",
    "name": "Percutaneous Deployment of Covered Self-Expanding Metal Stents (SEMS) for Esophageal Carcinoma",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "closure-tracheoesophageal-bronchoesophageal-fistulas",
    "name": "Endovascular / Radiologic Closure of Tracheoesophageal and Bronchoesophageal Fistulas",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "balloon-dilatation-gastroduodenal-strictures",
    "name": "Balloon Dilatation of Benign Gastroduodenal Strictures",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "percutaneous-enteral-stenting-malignant-outlet-obstruction",
    "name": "Percutaneous Enteral Stenting for Malignant Gastric Outlet Obstruction (Enteral SEMS)",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "colonic-sems-deployment-malignant-obstruction",
    "name": "Transanal / Fluoroscopic Deployment of Colonic SEMS for Malignant Bowel Obstruction",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "balloon-dilatation-colonic-anastomotic-strictures",
    "name": "Fluoroscopy-Guided Balloon Dilation of Colonic Anastomotic Strictures",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "percutaneous-cecostomy-colonic-pseudo-obstruction",
    "name": "Percutaneous Cecostomy for Colonic Pseudo-Obstruction (Ogilvie Syndrome)",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "fluoroscopic-nasojejunal-feeding-tube-placement",
    "name": "Fluoroscopic Nasojejunal (NJ) Feeding Tube Placement with Steerable Guidewire",
    "sourceFile": "nonVascularBiopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c8-conventional-transarterial-chemoembolization-with-lipiodol",
    "name": "Conventional Transarterial Chemoembolization (cTACE) with Lipiodol and Doxorubicin / Cisplatin",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c8-drug-eluting-bead-transarterial-chemoembolization",
    "name": "Drug-Eluting Bead Transarterial Chemoembolization (DEB-TACE) for Hepatocellular Carcinoma (HCC)",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c8-balloon-occluded-transarterial-chemoembolization",
    "name": "Balloon-Occluded Transarterial Chemoembolization (B-TACE)",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c8-degradable-starch-microsphere-transarterial-chemoembolization",
    "name": "Degradable Starch Microsphere Transarterial Chemoembolization (DSM-TACE)",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c8-transarterial-bland-embolization-for-hepatocellular",
    "name": "Transarterial Bland Embolization (TAE) for Hepatocellular Carcinoma",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c8-transarterial-bland-embolization-for-neuroendocrine",
    "name": "Transarterial Bland Embolization for Neuroendocrine Tumor (NET) Liver Metastases",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c8-transarterial-chemoembolization-for-net-metastases",
    "name": "Transarterial Chemoembolization for NET Metastases",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c8-transarterial-radioembolization-with-yttrium-90",
    "name": "Transarterial Radioembolization (TARE / SIRT) with Yttrium-90 Glass Microspheres (TheraSphere)",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Y90 Partition Model Dosimetry & Lung Shunt Fraction (LSF)"
    ]
  },
  {
    "id": "c8-transarterial-radioembolization-with-yttrium-90-proc9",
    "name": "Transarterial Radioembolization with Yttrium-90 Resin Microspheres (SIR-Spheres)",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Y90 Partition Model Dosimetry & Lung Shunt Fraction (LSF)"
    ]
  },
  {
    "id": "c8-tare-radiation-segmentectomy-for-solitary",
    "name": "TARE Radiation Segmentectomy for Solitary HCC",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Y90 Partition Model Dosimetry & Lung Shunt Fraction (LSF)"
    ]
  },
  {
    "id": "c8-tare-radiation-lobectomy-for-contralateral",
    "name": "TARE Radiation Lobectomy for Contralateral Liver Hypertrophy Induction",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Y90 Partition Model Dosimetry & Lung Shunt Fraction (LSF)",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c8-diagnostic-shunt-fractions-assessment-with",
    "name": "Diagnostic Shunt Fractions Assessment with Technetium-99m Macroaggregated Albumin (Tc-99m MAA)",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c8-prophylactic-coil-embolization-of-non",
    "name": "Prophylactic Coil Embolization of Non-Target Vessels (GDA, RGA) Prior to TARE",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Y90 Partition Model Dosimetry & Lung Shunt Fraction (LSF)"
    ]
  },
  {
    "id": "c8-hepatic-arterial-infusion-chemotherapy-port",
    "name": "Hepatic Arterial Infusion Chemotherapy (HAIC) Port / Catheter Placement",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c8-transarterial-chemoembolization-for-unresectable-intrahepatic",
    "name": "Transarterial Chemoembolization for Unresectable Intrahepatic Cholangiocarcinoma",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c8-transarterial-chemoembolization-for-colorectal-cancer",
    "name": "Transarterial Chemoembolization for Colorectal Cancer Liver Metastases (DEBIRI)",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c8-transarterial-embolization-for-renal-cell",
    "name": "Transarterial Embolization for Renal Cell Carcinoma (Pre-surgical / Palliative)",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c8-bronchial-arterial-chemoembolization-for-advanced",
    "name": "Bronchial Arterial Chemoembolization (BACE) for Advanced Lung Carcinoma",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c8-transarterial-chemoembolization-for-uterine-cervical",
    "name": "Transarterial Chemoembolization for Uterine Cervical Carcinoma",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c8-transarterial-chemoembolization-for-osteosarcoma-soft",
    "name": "Transarterial Chemoembolization for Osteosarcoma / Soft Tissue Sarcoma",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c9-percutaneous-ultrasound-guided-radiofrequency-ablation",
    "name": "Percutaneous Ultrasound-Guided Radiofrequency Ablation (RFA) of Liver Tumors (HCC, Metastases)",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c9-ct-guided-percutaneous-radiofrequency-ablation",
    "name": "CT-Guided Percutaneous Radiofrequency Ablation of Liver Tumors",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c9-laparoscopic-assisted-ultrasound-guided-rfa",
    "name": "Laparoscopic-Assisted Ultrasound-Guided RFA of Liver Lesions",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c9-ultrasound-guided-percutaneous-microwave-ablation",
    "name": "Ultrasound-Guided Percutaneous Microwave Ablation (MWA) of Liver Tumors",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c9-ct-guided-percutaneous-microwave-ablation",
    "name": "CT-Guided Percutaneous Microwave Ablation of Liver Tumors",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c9-percutaneous-cryoablation-of-liver-tumors",
    "name": "Percutaneous Cryoablation of Liver Tumors",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c9-percutaneous-irreversible-electroporation-of-locally",
    "name": "Percutaneous Irreversible Electroporation (IRE / NanoKnife) of Locally Advanced Pancreatic Carcinoma",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c9-percutaneous-ire-for-centrally-located",
    "name": "Percutaneous IRE for Centrally Located Hepatocellular Carcinoma / Cholangiocarcinoma",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c9-histotripsy-focused-ultrasound-cavitation-ablation",
    "name": "Histotripsy Focused Ultrasound Cavitation Ablation for Primary / Metastatic Liver Tumors",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c9-ct-guided-percutaneous-microwave-ablation-proc30",
    "name": "CT-Guided Percutaneous Microwave Ablation of Primary Non-Small Cell Lung Cancer (NSCLC)",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c9-ct-guided-percutaneous-cryoablation-of",
    "name": "CT-Guided Percutaneous Cryoablation of Pulmonary Metastases",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c9-ct-guided-percutaneous-radiofrequency-ablation-proc32",
    "name": "CT-Guided Percutaneous Radiofrequency Ablation of Lung Tumors",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c9-ct-guided-percutaneous-cryoablation-of-proc33",
    "name": "CT-Guided Percutaneous Cryoablation of Renal Cell Carcinoma (RCC)",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Renal Artery Resistive Index (RI) & RAR Ratio"
    ]
  },
  {
    "id": "c9-ct-guided-percutaneous-microwave-ablation-proc34",
    "name": "CT-Guided Percutaneous Microwave Ablation of Small Renal Masses",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Renal Artery Resistive Index (RI) & RAR Ratio"
    ]
  },
  {
    "id": "c9-ct-guided-percutaneous-radiofrequency-ablation-proc35",
    "name": "CT-Guided Percutaneous Radiofrequency Ablation of T1a Renal Masses",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Renal Artery Resistive Index (RI) & RAR Ratio"
    ]
  },
  {
    "id": "c9-ct-guided-percutaneous-cryoablation-of-proc36",
    "name": "CT-Guided Percutaneous Cryoablation of Adrenal Metastases",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Renal Artery Resistive Index (RI) & RAR Ratio"
    ]
  },
  {
    "id": "c9-ct-guided-percutaneous-microwave-ablation-proc37",
    "name": "CT-Guided Percutaneous Microwave Ablation of Adrenal Gland Lesions",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Renal Artery Resistive Index (RI) & RAR Ratio"
    ]
  },
  {
    "id": "c9-percutaneous-radiofrequency-ablation-of-osteoid",
    "name": "Percutaneous Radiofrequency Ablation of Osteoid Osteoma",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c9-percutaneous-laser-ablation-of-osteoid",
    "name": "Percutaneous Laser Ablation of Osteoid Osteoma",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c9-percutaneous-cryoablation-of-extra-abdominal",
    "name": "Percutaneous Cryoablation of Extra-Abdominal Desmoid Tumors",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c9-ct-guided-cryoablation-of-musculoskeletal",
    "name": "CT-Guided Cryoablation of Musculoskeletal / Bone Metastases for Pain Palliation",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "AO Spine Thoracolumbar Injury Classification",
      "Spine Instability Neoplastic Score (SINS - 6 Parameters)"
    ],
    "linkedCalculators": [
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "SINS Spine Instability Decision Engine",
      "Palliative Prognostic Index (PPI) for Interventional Oncology"
    ]
  },
  {
    "id": "c9-combined-percutaneous-cryoablation-and-osteoplasty",
    "name": "Combined Percutaneous Cryoablation and Osteoplasty (Cementoplasty) for Pelvic Lytic Metastases",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "AO Spine Thoracolumbar Injury Classification",
      "Spine Instability Neoplastic Score (SINS - 6 Parameters)"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "SINS Spine Instability Decision Engine",
      "Palliative Prognostic Index (PPI) for Interventional Oncology"
    ]
  },
  {
    "id": "c9-percutaneous-ethanol-injection-of-hepatocellular",
    "name": "Percutaneous Ethanol Injection (PEI) of Hepatocellular Carcinoma",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c9-chemical-neurolysis-of-celiac-plexus",
    "name": "Chemical Neurolysis (Alcohol / Phenol) of Celiac Plexus for Intractable Pancreatic Cancer Pain",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "Palliative Medicine / SIR Pain Standards"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Palliative Prognostic Index (PPI)",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c9-intracavitary-photodynamic-therapy-for-cholangiocarcinoma",
    "name": "Intracavitary Photodynamic Therapy (PDT) for Cholangiocarcinoma",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity"
    ],
    "linkedCalculators": [
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c21-pediatric-diagnostic-heart-catheterization-and",
    "name": "Pediatric Diagnostic Heart Catheterization and Angiocardiography",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c21-transcatheter-closure-of-patent-ductus",
    "name": "Transcatheter Closure of Patent Ductus Arteriosus (PDA) with Plugs and Coils",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c21-transcatheter-balloon-angioplasty-and-stenting",
    "name": "Transcatheter Balloon Angioplasty and Stenting for Aortic Coarctation",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "c21-percutaneous-atrial-septal-defect-device",
    "name": "Percutaneous Atrial Septal Defect (ASD) Device Closure",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c21-percutaneous-ventricular-septal-defect-device",
    "name": "Percutaneous Ventricular Septal Defect (VSD) Device Closure",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c21-balloon-pulmonary-valvuloplasty-in-pediatric",
    "name": "Balloon Pulmonary Valvuloplasty in Pediatric Pulmonary Stenosis",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c21-balloon-aortic-valvuloplasty-in-congenital",
    "name": "Balloon Aortic Valvuloplasty in Congenital Aortic Stenosis",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "c21-transcatheter-coil-embolization-of-major",
    "name": "Transcatheter Coil Embolization of Major Aortopulmonary Collateral Arteries (MAPCAs)",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c21-pediatric-ultrasound-guided-air-oxygen",
    "name": "Pediatric Ultrasound-Guided Air / Oxygen Reduction of Intussusception",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c21-ultrasound-guided-hydrostatic-saline-enema",
    "name": "Ultrasound-Guided Hydrostatic Saline Enema Reduction of Intussusception",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c21-fluoroscopy-guided-balloon-dilation-of",
    "name": "Fluoroscopy-Guided Balloon Dilation of Congenital Esophageal Stenosis / Post-Repair Strictures",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "c21-pediatric-tunnelled-broviac-hickman-catheter",
    "name": "Pediatric Tunnelled Broviac / Hickman Catheter Placement",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c21-pediatric-implantable-port-placement",
    "name": "Pediatric Implantable Port (Chemoport) Placement",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c21-pediatric-percutaneous-transhepatic-cholangiography-and",
    "name": "Pediatric Percutaneous Transhepatic Cholangiography and Biliary Drainage",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c21-pediatric-percutaneous-nephrostomy",
    "name": "Pediatric Percutaneous Nephrostomy (PCN)",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c21-pediatric-sclerotherapy-of-microcystic-and",
    "name": "Pediatric Sclerotherapy of Microcystic and Macrocystic Lymphatic Malformations",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Lymphatic Interventions Standards",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Chylothorax Drainage Severity & Lymphatic Leak Metric",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "c21-sclerotherapy-of-extensive-infantile-hemangiomas",
    "name": "Sclerotherapy of Extensive Infantile Hemangiomas and Vascular Malformations",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c21-pediatric-transjugular-liver-biopsy",
    "name": "Pediatric Transjugular Liver Biopsy (TGLB)",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c21-pediatric-transjugular-intrahepatic-portosystemic-shunt",
    "name": "Pediatric Transjugular Intrahepatic Portosystemic Shunt (TIPS)",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c21-percutaneous-management-of-vascular-complications",
    "name": "Percutaneous Management of Vascular Complications Post-Pediatric Liver Transplantation",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c22-transcatheter-bariatric-arterial-embolization-embolization",
    "name": "Transcatheter Bariatric Arterial Embolization (TAME) / Embolization of the Gastric Fundus for Obesity",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c22-histotripsy-liver-tumor-non-thermal",
    "name": "Histotripsy Liver Tumor Non-Thermal Acoustic Cavitation Ablation",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c22-endovascular-brain-computer-interface-implantation",
    "name": "Endovascular Brain-Computer Interface (Stentrode) Implantation via Transvenous Jugular Route",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c22-catheter-directed-transvenous-splanchnic-nerve",
    "name": "Catheter-Directed Transvenous Splanchnic Nerve Denervation for Heart Failure",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Palliative Medicine / SIR Pain Standards"
    ],
    "linkedCalculators": [
      "Palliative Prognostic Index (PPI)",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c22-transcatheter-pulmonary-vein-isolation-and",
    "name": "Transcatheter Pulmonary Vein Isolation and Cryoablation for Atrial Fibrillation",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c22-endovascular-pulmonary-trunk-radiofrequency-denervation",
    "name": "Endovascular Pulmonary Trunk Radiofrequency Denervation for Pulmonary Hypertension",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c22-biodegradable-drug-eluting-endovascular-scaffold",
    "name": "Biodegradable Drug-Eluting Endovascular Scaffold Implantation",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c22-percutaneous-ultrasound-guided-augmented-reality",
    "name": "Percutaneous Ultrasound-Guided Augmented Reality Navigated Core Biopsy",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c22-cone-beam-ct-virtual-roadmapping",
    "name": "Cone-Beam CT (CBCT) Virtual Roadmapping-Guided Lung Nodule Microcoil Localization",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "EU-TIRADS / ACR-TIRADS Thyroid Nodule Ultrasound Staging"
    ],
    "linkedCalculators": [
      "Thyroid Nodule Volume & Volume Reduction Ratio (VRR %)"
    ]
  },
  {
    "id": "c22-endovascular-robotic-assisted-peripheral-arterial",
    "name": "Endovascular Robotic-Assisted Peripheral Arterial Stenting (Corindus Vascular Robotics)",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c22-endovascular-robotic-assisted-coronary-and",
    "name": "Endovascular Robotic-Assisted Coronary and Carotid Interventions",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma"
    ]
  },
  {
    "id": "c22-targeted-endovascular-gene-viral-vector",
    "name": "Targeted Endovascular Gene-Viral Vector Delivery using Microcatheter Infusion",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c22-endovascular-transvenous-cardiac-pacemaker-lead",
    "name": "Endovascular Transvenous Cardiac Pacemaker Lead Extraction",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c22-percutaneous-suture-mediated-patent-foramen",
    "name": "Percutaneous Suture-Mediated Patent Foramen Ovale (PFO) Closure",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c22-transcatheter-pulmonary-embolectomy-with-smart",
    "name": "Transcatheter Pulmonary Embolectomy with Smart Automated Sensing (Penumbra Lightning Flash)",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c22-percutaneous-hydrogel-spacer-injection-prior",
    "name": "Percutaneous Hydrogel Spacer (SpaceOAR) Injection Prior to Prostate Radiotherapy",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "De Assis PAE Angiographic Classification (Types I-V Origins)",
      "AUA Guidelines for Benign Prostatic Hyperplasia"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "International Prostate Symptom Score (IPSS) & QoL",
      "Prostate Ellipsoid Volume & PSA Density Calculator"
    ]
  },
  {
    "id": "c22-ultrasound-guided-contrast-enhanced-sentinel",
    "name": "Ultrasound-Guided Contrast-Enhanced Sentinel Lymph Node Localization and Biopsy",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c22-ultrasound-guided-radiofrequency-ablation-for",
    "name": "Ultrasound-Guided Radiofrequency Ablation for Chronic Sacroiliac Joint Pain (Simplicity Probe)",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "Kellgren-Lawrence Knee Osteoarthritis Radiographic Grading (Grades 0-4)"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "WOMAC Osteoarthritis Index for Genicular Artery Embolization"
    ]
  },
  {
    "id": "c22-endovascular-interventional-creation-of-hemodialysis",
    "name": "Endovascular Interventional Creation of Hemodialysis Arteriovenous Fistula with Thermal Energy",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c22-fluoroscopically-guided-targeted-epidural-patching",
    "name": "Fluoroscopically-Guided Targeted Epidural Patching of Spinal CSF Leaks with Cryoprecipitate/Fibrin Glue",
    "sourceFile": "pediatricAndEmerging.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c11-ultrasound-guided-internal-jugular-vein",
    "name": "Ultrasound-Guided Internal Jugular Vein (IJV) Non-Tunneled Central Venous Line Placement",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c11-ultrasound-guided-subclavian-vein-non",
    "name": "Ultrasound-Guided Subclavian Vein Non-Tunneled Central Venous Line Placement",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "c11-ultrasound-guided-femoral-vein-non",
    "name": "Ultrasound-Guided Femoral Vein Non-Tunneled Central Line Placement",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "c11-peripherally-inserted-central-catheter-insertion",
    "name": "Peripherally Inserted Central Catheter (PICC) Insertion (Ultrasound & Fluoroscopy Guided)",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c11-dual-lumen-femoral-catheter-placement",
    "name": "Dual Lumen Femoral Catheter (DLFC) Placement for Acute Hemodialysis",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c11-double-lumen-jugular-catheter-placement",
    "name": "Double Lumen Jugular Catheter (DLJC) Placement for Acute Hemodialysis",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c11-tunneled-cuffed-hemodialysis-catheter-insertion",
    "name": "Tunneled Cuffed Hemodialysis Catheter (Permacath) Insertion (Right Internal Jugular)",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c11-tunneled-cuffed-hemodialysis-catheter-insertion-proc8",
    "name": "Tunneled Cuffed Hemodialysis Catheter Insertion (Left IJV / External Jugular / Femoral)",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c11-translumbar-inferior-vena-cava-tunneled",
    "name": "Translumbar Inferior Vena Cava Tunneled Hemodialysis Catheter Placement",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c11-transhepatic-tunneled-hemodialysis-catheter-placement",
    "name": "Transhepatic Tunneled Hemodialysis Catheter Placement",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c11-tunneled-hemodialysis-catheter-removal",
    "name": "Tunneled Hemodialysis Catheter Removal",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c11-over-the-wire-tunneled-hemodialysis",
    "name": "Over-the-Wire Tunneled Hemodialysis Catheter Exchange with Fibrin Sheath Disruption",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c11-percutaneous-fibrin-sheath-stripping-balloon",
    "name": "Percutaneous Fibrin Sheath Stripping / Balloon Angioplasty via Femoral Approach",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c11-totally-implantable-venous-access-port",
    "name": "Totally Implantable Venous Access Port (Chemoport) Placement (Subclavian / Jugular Access)",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c11-chemoport-removal-surgical-revision",
    "name": "Chemoport Removal / Surgical Revision",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c11-diagnostic-dialysis-fistulogram-shuntography",
    "name": "Diagnostic Dialysis Fistulogram / Shuntography",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c11-percutaneous-balloon-angioplasty-of-failing",
    "name": "Percutaneous Balloon Angioplasty of Failing Autogenous Arteriovenous Fistula (AVF)",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c11-drug-coated-balloon-angioplasty-for",
    "name": "Drug-Coated Balloon (DCB) Angioplasty for Recurrent AVF Stenosis",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c11-percutaneous-thrombectomy-declotting-of-thrombosed",
    "name": "Percutaneous Thrombectomy / Declotting of Thrombosed AVF (Pulse-Spray / Trerotola Device)",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c11-mechanical-aspiration-declotting-of-thrombosed",
    "name": "Mechanical Aspiration Declotting of Thrombosed Arteriovenous Graft (AVG)",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c11-balloon-angioplasty-of-cephalic-arch",
    "name": "Balloon Angioplasty of Cephalic Arch Stenosis",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "c11-central-venous-stenosis-balloon-angioplasty",
    "name": "Central Venous Stenosis (CVS) Balloon Angioplasty in Hemodialysis Patients",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c11-dedicated-stent-stent-graft-placement",
    "name": "Dedicated Stent / Stent-Graft Placement for Central Vein Occlusion",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "c11-sharp-radiofrequency-recanalization-of-chronic",
    "name": "Sharp Radiofrequency Recanalization of Chronic Central Venous Occlusions (PowerWire RF)",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c11-covered-stent-graft-placement-for",
    "name": "Covered Stent-Graft (Viabahn) Placement for AVF / AVG Rupture or Pseudoaneurysm",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c11-hemodialysis-reliable-outflow-graft-percutaneous",
    "name": "Hemodialysis Reliable Outflow (HeRO) Graft Percutaneous Insertion",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c11-percutaneous-endoavf-creation",
    "name": "Percutaneous EndoAVF Creation (Ellipsys Vascular Access System)",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c11-percutaneous-endoavf-creation-proc28",
    "name": "Percutaneous EndoAVF Creation (WavelinQ Endovascular System)",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c11-side-branch-coil-vascular-plug",
    "name": "Side-Branch Coil / Vascular Plug Embolization for Non-Maturing AVF",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c12-intranodal-lymphangiography-via-ultrasound-guided",
    "name": "Intranodal Lymphangiography via Ultrasound-Guided Inguinal Lymph Node Cannulation",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "CIRSE / SIR Lymphatic Interventions Standards"
    ],
    "linkedCalculators": [
      "Chylothorax Drainage Severity & Lymphatic Leak Metric"
    ]
  },
  {
    "id": "c12-transabdominal-mesenteric-lymph-node-cannulation",
    "name": "Transabdominal Mesenteric Lymph Node Cannulation and Lymphangiography",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "CIRSE / SIR Lymphatic Interventions Standards"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Chylothorax Drainage Severity & Lymphatic Leak Metric"
    ]
  },
  {
    "id": "c12-pedal-lymphangiography-with-ethiodized-oil",
    "name": "Pedal Lymphangiography with Ethiodized Oil (Lipiodol)",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Lymphatic Interventions Standards"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Chylothorax Drainage Severity & Lymphatic Leak Metric"
    ]
  },
  {
    "id": "c12-dynamic-contrast-enhanced-mr-lymphangiography",
    "name": "Dynamic Contrast-Enhanced MR Lymphangiography (DCMRL) Guidance Puncture",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "CIRSE / SIR Lymphatic Interventions Standards"
    ],
    "linkedCalculators": [
      "Chylothorax Drainage Severity & Lymphatic Leak Metric"
    ]
  },
  {
    "id": "c12-percutaneous-transabdominal-thoracic-duct-cannulation",
    "name": "Percutaneous Transabdominal Thoracic Duct Cannulation",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Lymphatic Interventions Standards"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Chylothorax Drainage Severity & Lymphatic Leak Metric"
    ]
  },
  {
    "id": "c12-thoracic-duct-embolization-with-coils",
    "name": "Thoracic Duct Embolization (TDE) with Coils and Liquid Embolic (Onyx / Glue)",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "CIRSE / SIR Lymphatic Interventions Standards"
    ],
    "linkedCalculators": [
      "Chylothorax Drainage Severity & Lymphatic Leak Metric"
    ]
  },
  {
    "id": "c12-retrograde-transvenous-thoracic-duct-cannulation",
    "name": "Retrograde Transvenous Thoracic Duct Cannulation and Embolization",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "CIRSE / SIR Lymphatic Interventions Standards"
    ],
    "linkedCalculators": [
      "Chylothorax Drainage Severity & Lymphatic Leak Metric"
    ]
  },
  {
    "id": "c12-percutaneous-percardial-intercostal-lymphatic-duct",
    "name": "Percutaneous Percardial / Intercostal Lymphatic Duct Disruption / Maceration",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Lymphatic Interventions Standards"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Chylothorax Drainage Severity & Lymphatic Leak Metric"
    ]
  },
  {
    "id": "c12-percutaneous-embolization-of-chyloperitoneum-cisterna",
    "name": "Percutaneous Embolization of Chyloperitoneum / Cisterna Chyli with Coils and Glue",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c12-transcatheter-lymphatic-embolization-for-chyluria",
    "name": "Transcatheter Lymphatic Embolization for Chyluria",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "CIRSE / SIR Lymphatic Interventions Standards"
    ],
    "linkedCalculators": [
      "Chylothorax Drainage Severity & Lymphatic Leak Metric"
    ]
  },
  {
    "id": "c12-percutaneous-embolization-of-mesenteric-lymphatics",
    "name": "Percutaneous Embolization of Mesenteric Lymphatics for Protein-Losing Enteropathy (PLE)",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Lymphatic Interventions Standards"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Chylothorax Drainage Severity & Lymphatic Leak Metric"
    ]
  },
  {
    "id": "c12-hepatic-lymphatic-embolization-for-plastic",
    "name": "Hepatic Lymphatic Embolization for Plastic Bronchitis Post-Fontan Surgery",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "CIRSE / SIR Lymphatic Interventions Standards"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Chylothorax Drainage Severity & Lymphatic Leak Metric"
    ]
  },
  {
    "id": "c12-pulmonary-lymphatic-vessel-embolization",
    "name": "Pulmonary Lymphatic Vessel Embolization",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "CIRSE / SIR Lymphatic Interventions Standards"
    ],
    "linkedCalculators": [
      "Chylothorax Drainage Severity & Lymphatic Leak Metric"
    ]
  },
  {
    "id": "c12-percutaneous-retrograde-sclerotherapy-of-post",
    "name": "Percutaneous Retrograde Sclerotherapy of Post-Surgical Lymphoceles",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c12-percutaneous-balloon-dilatation-stenting-of",
    "name": "Percutaneous Balloon Dilatation / Stenting of the Thoracic Duct",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Lymphatic Interventions Standards"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Chylothorax Drainage Severity & Lymphatic Leak Metric"
    ]
  },
  {
    "id": "c12-interventional-guidance-for-surgical-lymphovenous",
    "name": "Interventional Guidance for Surgical Lymphovenous Anastomosis (LVA)",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c13-direct-percutaneous-puncture-and-phlebography",
    "name": "Direct Percutaneous Puncture and Phlebography of Low-Flow Venous Malformations (VM)",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c13-percutaneous-sclerotherapy-of-head-and",
    "name": "Percutaneous Sclerotherapy of Head and Neck Venous Malformations (Bleomycin)",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c13-sclerotherapy-of-venous-malformations-with",
    "name": "Sclerotherapy of Venous Malformations with Sodium Tetradecyl Sulfate (STS) Foam",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c13-percutaneous-sclerotherapy-of-orbital-periorbital",
    "name": "Percutaneous Sclerotherapy of Orbital / Periorbital Venous Malformations",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c13-direct-percutaneous-cryoablation-of-painful",
    "name": "Direct Percutaneous Cryoablation of Painful Low-Flow Intramuscular Venous Malformations",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c13-sclerotherapy-of-high-risk-mucosal",
    "name": "Sclerotherapy of High-Risk Mucosal Venous Malformations under Roadmapping",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c13-direct-percutaneous-sclerotherapy-of-macrocystic",
    "name": "Direct Percutaneous Sclerotherapy of Macrocystic Lymphatic Malformations (Doxycycline)",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Lymphatic Interventions Standards",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Chylothorax Drainage Severity & Lymphatic Leak Metric",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "c13-percutaneous-sclerotherapy-of-microcystic-lymphatic",
    "name": "Percutaneous Sclerotherapy of Microcystic Lymphatic Malformations (Bleomycin / OK-432)",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Lymphatic Interventions Standards",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Chylothorax Drainage Severity & Lymphatic Leak Metric",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "c13-percutaneous-sclerotherapy-of-ranula",
    "name": "Percutaneous Sclerotherapy of Ranula (Ethanol / Bleomycin / OK-432)",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c13-transarterial-embolization-of-extracranial-arteriovenous",
    "name": "Transarterial Embolization of Extracranial Arteriovenous Malformations (AVM) with Onyx / Squid",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma"
    ]
  },
  {
    "id": "c13-transarterial-embolization-of-avm-with",
    "name": "Transarterial Embolization of AVM with Precipitating Hydrophobic Injectable Liquid (PHIL)",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma"
    ]
  },
  {
    "id": "c13-superselective-glue-embolization-of-high",
    "name": "Superselective Glue (n-BCA) Embolization of High-Flow Vascular Malformations",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c13-direct-transcutaneous-nidus-puncture-and",
    "name": "Direct Transcutaneous Nidus Puncture and Liquid Embolic Occlusion of Peripheral AVMs",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c13-retrograde-transvenous-nidus-occlusion-of",
    "name": "Retrograde Transvenous Nidus Occlusion of High-Flow Arteriovenous Malformations",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c13-transcatheter-embolization-of-extremity-congenital",
    "name": "Transcatheter Embolization of Extremity Congenital Arteriovenous Fistulae (AVF)",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c13-endovenous-laser-ablation-of-the",
    "name": "Endovenous Laser Ablation (EVLA) of the Embryonic Marginal Vein of Servelle in Klippel-Trenaunay",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Venous Clinical Severity Score (VCSS - 10 Attributes)",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Villalta Scale for Post-Thrombotic Syndrome",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "venous-foam-sclerotherapy-ugfs",
    "name": "Foam Sclerotherapy and Coil Embolization of Persistent Sciatic / Lateral Marginal Veins",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c13-transcatheter-embolization-of-pulmonary-arteriovenous",
    "name": "Transcatheter Embolization of Pulmonary Arteriovenous Malformations (PAVM) with Microvascular Plugs",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma"
    ]
  },
  {
    "id": "c13-pavm-superselective-coil-embolization",
    "name": "PAVM Superselective Coil Embolization",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c13-sclerotherapy-and-coiling-of-pelvic",
    "name": "Sclerotherapy and Coiling of Pelvic Arteriovenous Malformations",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c13-preoperative-transarterial-embolization-of-juvenile",
    "name": "Preoperative Transarterial Embolization of Juvenile Nasopharyngeal Angiofibroma (JNA)",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c13-preoperative-transarterial-embolization-of-carotid",
    "name": "Preoperative Transarterial Embolization of Carotid Body Tumors / Paragangliomas",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c13-transarterial-embolization-of-maxillofacial-vascular",
    "name": "Transarterial Embolization of Maxillofacial Vascular Malformations",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c18-uterine-artery-embolization-for-symptomatic",
    "name": "Uterine Artery Embolization (UAE / UFE) for Symptomatic Uterine Leiomyomata (Fibroids)",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "FIGO Classification for Uterine Leiomyomas (Types 0-8)",
      "O-RADS / Pelvic Imaging Staging"
    ],
    "linkedCalculators": [
      "Uterine Fibroid Volume & Spherical Equivalence Calculator",
      "Shock Index (SI) for Post-Partum Hemorrhage"
    ]
  },
  {
    "id": "c18-uterine-artery-embolization-for-diffuse",
    "name": "Uterine Artery Embolization for Diffuse and Focal Adenomyosis",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "FIGO Classification for Uterine Leiomyomas (Types 0-8)",
      "O-RADS / Pelvic Imaging Staging"
    ],
    "linkedCalculators": [
      "Uterine Fibroid Volume & Spherical Equivalence Calculator",
      "Shock Index (SI) for Post-Partum Hemorrhage"
    ]
  },
  {
    "id": "c18-transcatheter-embolization-for-uterine-arteriovenous",
    "name": "Transcatheter Embolization for Uterine Arteriovenous Malformations (AVM)",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma"
    ]
  },
  {
    "id": "c18-emergency-uterine-artery-embolization-for",
    "name": "Emergency Uterine Artery Embolization for Severe Postpartum Hemorrhage (PPH)",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "FIGO Classification for Uterine Leiomyomas (Types 0-8)",
      "O-RADS / Pelvic Imaging Staging"
    ],
    "linkedCalculators": [
      "Uterine Fibroid Volume & Spherical Equivalence Calculator",
      "Shock Index (SI) for Post-Partum Hemorrhage"
    ]
  },
  {
    "id": "c18-prophylactic-internal-iliac-artery-balloon",
    "name": "Prophylactic Internal Iliac Artery Balloon Catheter Placement for Morbidly Adherent Placenta",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "c18-transcatheter-arterial-embolization-for-inoperable",
    "name": "Transcatheter Arterial Embolization for Inoperable Cervical Carcinoma Hemorrhage",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c18-uterine-artery-embolization-for-ectopic",
    "name": "Uterine Artery Embolization for Ectopic Pregnancies (Cesarean Scar, Cervical Ectopic)",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c18-ovarian-vein-embolization-with-coils",
    "name": "Ovarian Vein Embolization (OVE) with Coils and Sclerosants for Pelvic Venous Disorders / PCS",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "Dubin-Amelar & Sarteschi Varicocele Grading",
      "SVP (Symptoms-Varices-Pathophysiology) Classification for Pelvic Venous Disorders"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c18-transcatheter-embolization-of-internal-iliac",
    "name": "Transcatheter Embolization of Internal Iliac Venous Tributaries / Pelvic Varices",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)",
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score",
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c18-fallopian-tube-recanalization-selective-salpingography",
    "name": "Fallopian Tube Recanalization (FTR) / Selective Salpingography for Proximal Tubal Occlusion",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage"
    ]
  },
  {
    "id": "c18-sclerotherapy-of-endometriomas-with-absolute",
    "name": "Sclerotherapy of Endometriomas with Absolute Alcohol / Doxycycline",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c18-high-intensity-focused-ultrasound-ablation",
    "name": "High-Intensity Focused Ultrasound (HIFU) Ablation of Uterine Fibroids",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "FIGO Classification for Uterine Leiomyomas (Types 0-8)",
      "O-RADS / Pelvic Imaging Staging"
    ],
    "linkedCalculators": [
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Uterine Fibroid Volume & Spherical Equivalence Calculator",
      "Shock Index (SI) for Post-Partum Hemorrhage"
    ]
  },
  {
    "id": "c19-percutaneous-nephrostomy-ultrasound-and-fluoroscopy",
    "name": "Percutaneous Nephrostomy (PCN) - Ultrasound and Fluoroscopy Guided Puncture",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c19-pcn-exchange-upsizing-over-stiff",
    "name": "PCN Exchange / Upsizing over Stiff Glidewire",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c19-percutaneous-nephrolithotomy-access-tract-puncture",
    "name": "Percutaneous Nephrolithotomy (PCNL) Access Tract Puncture and Balloon Dilation",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c19-antegrade-ureteric-stent-insertion",
    "name": "Antegrade Ureteric Stent (Double-J / DJ Stent) Insertion",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c19-antegrade-balloon-dilation-of-benign",
    "name": "Antegrade Balloon Dilation of Benign Ureteral Strictures",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c19-percutaneous-nephroureterostomy-catheter-placement",
    "name": "Percutaneous Nephroureterostomy Catheter Placement",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c19-fluoroscopic-snare-retrieval-and-replacement",
    "name": "Fluoroscopic Snare Retrieval and Replacement of Dislodged Double-J Stents",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c19-endourological-sharp-recanalization-of-completely",
    "name": "Endourological Sharp Recanalization of Completely Occluded Ureter",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c19-prostatic-artery-embolization-with-small",
    "name": "Prostatic Artery Embolization (PAE) with Small Spherical Embolics for Benign Prostatic Hyperplasia",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "De Assis PAE Angiographic Classification (Types I-V Origins)",
      "AUA Guidelines for Benign Prostatic Hyperplasia"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "International Prostate Symptom Score (IPSS) & QoL",
      "Prostate Ellipsoid Volume & PSA Density Calculator"
    ]
  },
  {
    "id": "c19-superselective-transcatheter-arterial-embolization-for",
    "name": "Superselective Transcatheter Arterial Embolization for Severe Prostatic Hemorrhage",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "De Assis PAE Angiographic Classification (Types I-V Origins)",
      "AUA Guidelines for Benign Prostatic Hyperplasia"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "International Prostate Symptom Score (IPSS) & QoL",
      "Prostate Ellipsoid Volume & PSA Density Calculator"
    ]
  },
  {
    "id": "c19-varicocele-embolization-via-retrograde-transfemoral",
    "name": "Varicocele Embolization via Retrograde Transfemoral / Transjugular Approach",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "Dubin-Amelar & Sarteschi Varicocele Grading",
      "SVP (Symptoms-Varices-Pathophysiology) Classification for Pelvic Venous Disorders"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c19-varicocele-sclerotherapy-with-sodium-tetradecyl",
    "name": "Varicocele Sclerotherapy with Sodium Tetradecyl Sulfate / Polidocanol",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "Dubin-Amelar & Sarteschi Varicocele Grading",
      "SVP (Symptoms-Varices-Pathophysiology) Classification for Pelvic Venous Disorders"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c19-antegrade-scrotal-sclerotherapy-of-varicocele",
    "name": "Antegrade Scrotal Sclerotherapy of Varicocele (Tauber Procedure)",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "Dubin-Amelar & Sarteschi Varicocele Grading",
      "SVP (Symptoms-Varices-Pathophysiology) Classification for Pelvic Venous Disorders"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c19-testicular-vein-coil-microvascular-plug",
    "name": "Testicular Vein Coil / Microvascular Plug Occlusion",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c19-percutaneous-embolization-for-high-flow",
    "name": "Percutaneous Embolization for High-Flow (Non-Ischemic) Priapism",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c19-cavernosal-blood-aspiration-and-alpha",
    "name": "Cavernosal Blood Aspiration and Alpha-Agonist Lavage for Low-Flow Priapism",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c19-percutaneous-suprapubic-cystostomy-catheter-insertion",
    "name": "Percutaneous Suprapubic Cystostomy Catheter Insertion",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "c19-percutaneous-sclerotherapy-of-idiopathic-hydrocele",
    "name": "Percutaneous Sclerotherapy of Idiopathic Hydrocele",
    "sourceFile": "pelvicUrologyGastro.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "budd-chiari-hv-angioplasty",
    "name": "Budd-Chiari Syndrome: Hepatic Vein Balloon Angioplasty & Recanalization",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)",
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score",
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "budd-chiari-hv-stenting",
    "name": "Budd-Chiari Syndrome: Hepatic Vein Self-Expanding Bare Metallic Stenting (Wallstent / E-Luminexx)",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "budd-chiari-dips",
    "name": "Budd-Chiari Syndrome: Direct Intrahepatic Portosystemic Shunt (DIPS) Transcaval Puncture",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "budd-chiari-ivc-membranotomy",
    "name": "Budd-Chiari Syndrome: IVC Membranotomy with Cutting Balloon & Stenting",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "may-thurner-thrombolysis-stenting",
    "name": "May-Thurner Syndrome: Left Common Iliac Vein Catheter-Directed Thrombolysis & Stenting",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "may-thurner-kissing-iliac-stenting",
    "name": "May-Thurner Syndrome: Bilateral Kissing Common Iliac Vein Stenting Extending into IVC Confluence",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "nutcracker-anterior-stenting",
    "name": "Nutcracker Syndrome (Anterior): Left Renal Vein Balloon Angioplasty & Self-Expanding Stenting",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "Dubin-Amelar & Sarteschi Varicocele Grading",
      "SVP (Symptoms-Varices-Pathophysiology) Classification for Pelvic Venous Disorders",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Renal Artery Resistive Index (RI) & RAR Ratio"
    ]
  },
  {
    "id": "nutcracker-posterior-decompression",
    "name": "Nutcracker Syndrome (Posterior): Retro-Aortic Left Renal Vein Balloon Angioplasty & Decompression",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "Dubin-Amelar & Sarteschi Varicocele Grading",
      "SVP (Symptoms-Varices-Pathophysiology) Classification for Pelvic Venous Disorders",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Renal Artery Resistive Index (RI) & RAR Ratio"
    ]
  },
  {
    "id": "mals-angioplasty-stenting",
    "name": "Median Arcuate Ligament Syndrome (MALS): Celiac Artery Angioplasty & Covered Stenting Post-Ligament Release",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage"
    ]
  },
  {
    "id": "sma-syndrome-nj-tube-mapping",
    "name": "Superior Mesenteric Artery Syndrome (Wilkie): Fluoroscopic Nasojejunal Tube & Vascular Mapping",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "tos-venous-thrombolysis-venoplasty",
    "name": "Venous TOS (Paget-Schroetter Syndrome): Catheter-Directed Thrombolysis & Subclavian Venoplasty",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "tos-arterial-aneurysm-exclusion",
    "name": "Arterial Thoracic Outlet Syndrome: Subclavian Aneurysm Exclusion & Thromboembolectomy",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "kts-marginal-vein-sclerotherapy-rfa",
    "name": "Klippel-Trenaunay Syndrome: Marginal Vein of Servelle Sclerotherapy & Radiofrequency Ablation",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "kts-vm-sclerotherapy-bleo-sts",
    "name": "Klippel-Trenaunay Syndrome: Pelvic & Extremity Venous Malformation Bleomycin / STS Sclerotherapy",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "pws-avf-embolization-onyx-coils",
    "name": "Parkes Weber Syndrome: High-Flow Limb AVF Embolization with Detachable Coils & Onyx",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "hht-pavm-embolization",
    "name": "Hereditary Hemorrhagic Telangiectasia (HHT): Pulmonary AVM Coil & Vascular Plug Embolization",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma"
    ]
  },
  {
    "id": "hht-hepatic-vm-embolization",
    "name": "HHT: Hepatic Vascular Malformation Staged Arterial Embolization for High-Output Heart Failure",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "abernethy-type1-occlusion-test",
    "name": "Abernethy Malformation Type 1: Portal Vein Reconstruction Assessment & Shunt Balloon Occlusion Test",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "abernethy-type2-plug-closure",
    "name": "Abernethy Malformation Type 2: Transcatheter Amplatzer Vascular Plug Closure of Portocaval Shunt",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "gorham-stout-bone-sclerotherapy",
    "name": "Gorham-Stout Disease & Generalized Lymphatic Anomaly: Osseous Sclerotherapy with Bleomycin",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "CIRSE / SIR Lymphatic Interventions Standards",
      "AO Spine Thoracolumbar Injury Classification",
      "Spine Instability Neoplastic Score (SINS - 6 Parameters)"
    ],
    "linkedCalculators": [
      "Chylothorax Drainage Severity & Lymphatic Leak Metric",
      "SINS Spine Instability Decision Engine",
      "Palliative Prognostic Index (PPI) for Interventional Oncology"
    ]
  },
  {
    "id": "pelvic-congestion-syndrome-coiling",
    "name": "Pelvic Congestion Syndrome: Bilateral Ovarian Vein & Internal Iliac Tributary Coil/Foam Embolization",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "Dubin-Amelar & Sarteschi Varicocele Grading",
      "SVP (Symptoms-Varices-Pathophysiology) Classification for Pelvic Venous Disorders"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "ovarian-vein-vulvar-varices-coiling",
    "name": "Left Ovarian Vein Reflux & Vulvar Varices: Superselective Transjugular Coil Embolization",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "Dubin-Amelar & Sarteschi Varicocele Grading",
      "SVP (Symptoms-Varices-Pathophysiology) Classification for Pelvic Venous Disorders"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "fmd-renal-angioplasty",
    "name": "Fibromuscular Dysplasia (FMD): Renal Artery Balloon Angioplasty without Stenting",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "fmd-carotid-dissection-covered-stent",
    "name": "FMD with Carotid Dissection / Pseudoaneurysm: Endovascular Covered Stent Reconstruction",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma"
    ]
  },
  {
    "id": "takayasu-subclavian-stenting",
    "name": "Takayasu Arteritis: Subclavian Artery Severe Stenosis Balloon Angioplasty & Covered Stenting",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "takayasu-carotid-angioplasty",
    "name": "Takayasu Arteritis: Innominate / Common Carotid Artery Balloon Angioplasty",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma"
    ]
  },
  {
    "id": "takayasu-aortoplasty-large-stent",
    "name": "Takayasu Arteritis: Aortic Coarctation / Mid-Aortic Syndrome Balloon Aortoplasty & Stenting",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "tao-pedal-arch-angioplasty-sympathectomy",
    "name": "Buerger",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "raynaud-digital-vasodilator-botox",
    "name": "Raynaud Phenomenon with Ulceration: Upper Extremity Vasodilatory Infusion & Botulinum Toxin Block",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "blue-toe-atheroma-exclusion-stent",
    "name": "Blue Toe Syndrome / Micro-Embolism: Diagnostic Localization & Atheroma Stent-Graft Exclusion",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "scimitar-anomalous-artery-embolization",
    "name": "Scimitar Syndrome: Transcatheter Occlusion of Anomalous Systemic Arterial Supply",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "pulmonary-sequestration-embolization",
    "name": "Pulmonary Sequestration: Aberrant Systemic Arterial Feeder Coil / Plug Embolization",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "bronchial-dieulafoy-embolization",
    "name": "Bronchial Dieulafoy Lesion: Superselective Microcoil Embolization for Catastrophic Hemoptysis",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "leriche-cerab-reconstruction",
    "name": "Leriche Syndrome: Total Occlusion Recanalization with Covered Endovascular Reconstruction of Aortic Bifurcation (CERAB)",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "middle-aortic-syndrome-reconstruction",
    "name": "Middle Aortic Syndrome: Kissing Balloon Expandable Covered Stent Reconstruction",
    "sourceFile": "syndromesAndVascular.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "venaseal-varicose-glue",
    "name": "VenaSeal Cyanoacrylate Superglue Closure of Great/Small Saphenous Vein",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Venous Clinical Severity Score (VCSS - 10 Attributes)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Villalta Scale for Post-Thrombotic Syndrome",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "venous-perforator-sclero-glue",
    "name": "Incompetent Venous Perforator Sclerotherapy & Cyanoacrylate Glue Closure",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Venous Clinical Severity Score (VCSS - 10 Attributes)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Villalta Scale for Post-Thrombotic Syndrome",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "gsv-endovenous-laser-rfa-glue",
    "name": "Great Saphenous Vein (GSV) Truncal Multi-Modal Ablation (EVLA / RFA / Glue)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Venous Clinical Severity Score (VCSS - 10 Attributes)",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Villalta Scale for Post-Thrombotic Syndrome",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "ssv-endovenous-laser-rfa-glue",
    "name": "Small Saphenous Vein (SSV) Truncal Endovenous Ablation (EVLA / RFA / Glue)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Venous Clinical Severity Score (VCSS - 10 Attributes)",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Villalta Scale for Post-Thrombotic Syndrome",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "varicose-vein-embolization-glue",
    "name": "Varicose Vein & Pelvic Leak Embolization Using Cyanoacrylate Glue",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Venous Clinical Severity Score (VCSS - 10 Attributes)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Villalta Scale for Post-Thrombotic Syndrome",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "varicose-vein-embolization-coils",
    "name": "Varicose Vein & Incompetent Venous Channel Embolization Using Coils",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Venous Clinical Severity Score (VCSS - 10 Attributes)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Villalta Scale for Post-Thrombotic Syndrome",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "varicose-vein-embolization-glue-coils",
    "name": "Varicose Vein & Tributary Embolization with Combined Glue & Coils (Sandwich Technique)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Venous Clinical Severity Score (VCSS - 10 Attributes)"
    ],
    "linkedCalculators": [
      "Villalta Scale for Post-Thrombotic Syndrome"
    ]
  },
  {
    "id": "budd-chiari-collateral-embo-glue",
    "name": "Budd-Chiari Syndrome: Collateral & Variceal Embolization Using Cyanoacrylate Glue",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "budd-chiari-collateral-embo-coils",
    "name": "Budd-Chiari Syndrome: Spontaneous Shunt & Collateral Embolization Using Coils",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "budd-chiari-collateral-embo-glue-coils",
    "name": "Budd-Chiari Syndrome: Complex Variceal & Shunt Embolization with Combined Glue & Coils",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "ivc-balloon-cavoplasty-budd-chiari",
    "name": "Inferior Vena Cava (IVC) Balloon Cavoplasty for Budd-Chiari Web / Membrane",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "sharp-recanalization-occluded-hepatic-veins",
    "name": "Percutaneous Sharp Recanalization of Completely Occluded Hepatic Veins",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "transumbilical-vein-recanalization-variceal-embo",
    "name": "Transumbilical Vein Recanalization & Variceal Embolization",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "parallel-tips-refractory-ascites",
    "name": "Parallel TIPS Placement for Refractory Ascites & Secondary Shunt Insufficiency",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "tips-reduction-hourglass-stent",
    "name": "TIPS Constraint / Reduction for Refractory Encephalopathy (Hourglass Stent)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "mesenteric-splenoportal-shunt-embolization-he",
    "name": "Mesenteric / Splenoportal Shunt Embolization for Hepatic Encephalopathy",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage"
    ]
  },
  {
    "id": "portal-vein-embolization-pve-ipsilateral",
    "name": "Percutaneous Portal Vein Embolization (PVE) - Ipsilateral Approach",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "portal-vein-embolization-pve-contralateral",
    "name": "Percutaneous Portal Vein Embolization (PVE) - Contralateral Approach",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "transileocolic-portal-vein-embolization",
    "name": "Transileocolic Surgical-Radiological Portal Vein Embolization",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "transsplenic-portal-mesenteric-stenting",
    "name": "Transsplenic Portal and Mesenteric Vein Angioplasty and Stenting",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage"
    ]
  },
  {
    "id": "ptbd-unilateral-right",
    "name": "Percutaneous Transhepatic Biliary Drainage (PTBD) - Right Lobe Unilateral",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "ptbd-unilateral-left",
    "name": "Percutaneous Transhepatic Biliary Drainage (PTBD) - Left Lobe Unilateral",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "ptbd-bilateral-internal-external",
    "name": "Percutaneous Transhepatic Biliary Drainage (PTBD) - Bilateral Internal-External",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "biliary-drainage-conversion-external-internal",
    "name": "External-to-Internal Biliary Drainage Conversion",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity"
    ],
    "linkedCalculators": [
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "biliary-balloon-plasty-benign-stricture",
    "name": "Percutaneous Biliary Balloon Dilatation of Benign Anastomotic Strictures",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "biliary-uncovered-sems-malignant",
    "name": "Percutaneous Uncovered Self-Expanding Metal Stent (SEMS) Deployment for Malignant Biliary Obstruction",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "biliary-covered-sems-stricture-leak",
    "name": "Percutaneous Covered SEMS Deployment for Biliary Leaks & Distal Strictures",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "intraductal-biliary-rfa-habib",
    "name": "Intraductal Biliary Radiofrequency Ablation (EndoHPB / Habib Catheter)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index"
    ]
  },
  {
    "id": "biliary-calculi-dormia-basket-removal",
    "name": "Percutaneous Transhepatic Removal of Retained Biliary Calculi via Dormia Basket",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "ptcs-ehl-lithotripsy",
    "name": "Percutaneous Transhepatic Cholangioscopy (PTCS) with Electrohydraulic Lithotripsy (EHL)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "ptcs-laser-lithotripsy",
    "name": "Percutaneous Transhepatic Cholangioscopy with Holmium Laser Lithotripsy",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "biliary-rendezvous-ercp",
    "name": "Percutaneous Biliary Rendez-vous Procedure with ERCP",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "percutaneous-cholecystostomy-transhepatic",
    "name": "Percutaneous Cholecystostomy (Transhepatic Route)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "percutaneous-cholecystostomy-transperitoneal",
    "name": "Percutaneous Cholecystostomy (Transperitoneal Route)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "percutaneous-cholecystolithotomy-stone-extraction",
    "name": "Percutaneous Cholecystolithotomy and Endoscopic Gallbladder Stone Extraction",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "chemical-gallbladder-sclerosis",
    "name": "Chemical Gallbladder Sclerosis / Percutaneous Contact Dissolution",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "percutaneous-transhepatic-gallbladder-stenting",
    "name": "Percutaneous Transhepatic Gallbladder Stenting (Cystic Duct Recanalization & Stenting)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "c3-percutaneous-transhepatic-cholangiography",
    "name": "Percutaneous Transhepatic Cholangiography (PTC)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c3-percutaneous-covered-sems-deployment-for",
    "name": "Percutaneous Covered SEMS Deployment for Biliary Leaks / Strictures",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c3-percutaneous-biodegradable-biliary-stent-implantation",
    "name": "Percutaneous Biodegradable Biliary Stent Implantation",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c3-percutaneous-transhepatic-gallbladder-stenting",
    "name": "Percutaneous Transhepatic Gallbladder Stenting",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c3-hepatic-venous-pressure-gradient-measurement",
    "name": "Hepatic Venous Pressure Gradient (HVPG) Measurement",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c3-transjugular-intrahepatic-portosystemic-shunt-with",
    "name": "Transjugular Intrahepatic Portosystemic Shunt (TIPS) with ePTFE Covered Stent-Graft (Viatorr)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "c3-direct-intrahepatic-portosystemic-shunt-via",
    "name": "Direct Intrahepatic Portosystemic Shunt (DIPS) via Intravascular Ultrasound (IVUS) Guidance",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "c3-transsplenic-intrahepatic-portosystemic-shunt",
    "name": "Transsplenic Intrahepatic Portosystemic Shunt",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c3-parallel-tips-placement-for-refractory",
    "name": "Parallel TIPS Placement for Refractory Ascites",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "c3-tips-revision-percutaneous-balloon-angioplasty",
    "name": "TIPS Revision: Percutaneous Balloon Angioplasty",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)",
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score",
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c3-tips-revision-relining-with-covered",
    "name": "TIPS Revision: Relining with Covered Stent-Graft",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "c3-tips-constraint-reduction-for-refractory",
    "name": "TIPS Constraint / Reduction for Refractory Encephalopathy (Constricting Suture, Hourglass Stent)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "c3-tips-occlusion-embolization-for-liver",
    "name": "TIPS Occlusion / Embolization for Liver Failure",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "c3-transjugular-balloon-angioplasty-of-hepatic",
    "name": "Transjugular Balloon Angioplasty of Hepatic Vein Web (Budd-Chiari Syndrome)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)",
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score",
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "c3-transjugular-transfemoral-hepatic-vein-stenting",
    "name": "Transjugular / Transfemoral Hepatic Vein Stenting for Budd-Chiari Syndrome",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)",
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score",
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "c3-ivc-stenting-for-budd-chiari",
    "name": "IVC Stenting for Budd-Chiari Syndrome",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "c3-combined-transhepatic-and-transjugular-recanalization",
    "name": "Combined Transhepatic and Transjugular Recanalization of Budd-Chiari Occlusion",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "c3-meso-caval-stent-shunt-creation",
    "name": "Meso-Caval Stent-Shunt Creation in Chronic Budd-Chiari Syndrome",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "c3-balloon-occluded-retrograde-transvenous-obliteration",
    "name": "Balloon-Occluded Retrograde Transvenous Obliteration (BRTO) of Gastric Varices",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "c3-plug-assisted-retrograde-transvenous-obliteration",
    "name": "Plug-Assisted Retrograde Transvenous Obliteration (PARTO)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "c3-coil-assisted-retrograde-transvenous-obliteration",
    "name": "Coil-Assisted Retrograde Transvenous Obliteration (CARTO)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "c3-vascular-plug-and-gelatin-sponge",
    "name": "Vascular Plug and Gelatin Sponge-Assisted Retrograde Transvenous Obliteration (PTO / CARTO-II)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "c3-balloon-occluded-antegrade-transvenous-obliteration",
    "name": "Balloon-Occluded Antegrade Transvenous Obliteration (BATO)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c3-percutaneous-transhepatic-obliteration-variceal-embolization",
    "name": "Percutaneous Transhepatic Obliteration (PTO) / Variceal Embolization",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c3-percutaneous-transsplenic-variceal-embolization",
    "name": "Percutaneous Transsplenic Variceal Embolization",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c3-transumbilical-vein-recanalization-and-variceal",
    "name": "Transumbilical Vein Recanalization and Variceal Embolization",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "c3-combined-hepatic-vein-deprivation-simultaneous",
    "name": "Combined Hepatic Vein Deprivation (HVD) / Simultaneous PVE and Hepatic Vein Embolization",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Future Liver Remnant (sFLR) & Kinetic Growth Rate (KGR)"
    ]
  },
  {
    "id": "c3-percutaneous-transhepatic-portal-vein-recanalization",
    "name": "Percutaneous Transhepatic Portal Vein Recanalization and Stenting",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c4-diagnostic-pelvic-and-lower-extremity",
    "name": "Diagnostic Pelvic and Lower Extremity Runoff Angiography",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c4-common-iliac-artery-balloon-angioplasty",
    "name": "Common Iliac Artery (CIA) Balloon Angioplasty",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "c4-common-iliac-artery-stenting",
    "name": "Common Iliac Artery Stenting (Bare Metal / Covered)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "c4-external-iliac-artery-angioplasty-and",
    "name": "External Iliac Artery (EIA) Angioplasty and Stenting",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "c4-covered-endovascular-reconstruction-of-aortic",
    "name": "Covered Endovascular Reconstruction of Aortic Bifurcation (CERAB Technique)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "c4-common-femoral-artery-percutaneous-lithotripsy",
    "name": "Common Femoral Artery (CFA) Percutaneous Lithotripsy and Stenting",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c4-superficial-femoral-artery-plain-old",
    "name": "Superficial Femoral Artery (SFA) Plain Old Balloon Angioplasty (POBA)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c4-sfa-drug-coated-balloon-angioplasty",
    "name": "SFA Drug-Coated Balloon (DCB) Angioplasty",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "c4-sfa-bare-metal-nitinol-stent",
    "name": "SFA Bare-Metal Nitinol Stent Deployment",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "c4-sfa-drug-eluting-stent-implantation",
    "name": "SFA Drug-Eluting Stent (DES) Implantation",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "c4-sfa-covered-stent-graft-placement",
    "name": "SFA Covered Stent-Graft Placement (Viabahn)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "c4-popliteal-artery-intermittent-claudication-ppa",
    "name": "Popliteal Artery Intermittent Claudication / PPA Plain Balloon Angioplasty",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "c4-popliteal-interwoven-nitinol-stent-implantation",
    "name": "Popliteal Interwoven Nitinol Stent (Supera) Implantation",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c4-tibioperoneal-trunk-balloon-angioplasty",
    "name": "Tibioperoneal Trunk Balloon Angioplasty",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c4-anterior-tibial-artery-plain-and",
    "name": "Anterior Tibial Artery (ATA) Plain and Drug-Coated Balloon Angioplasty",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "c4-posterior-tibial-artery-angioplasty",
    "name": "Posterior Tibial Artery (PTA) Angioplasty",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "c4-peroneal-artery-angioplasty",
    "name": "Peroneal Artery Angioplasty",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c4-deep-plantar-arch-dorsalis-pedis",
    "name": "Deep Plantar Arch / Dorsalis Pedis Angioplasty",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c4-transcollateral-plantar-arch-revascularization",
    "name": "Transcollateral / Plantar Arch Revascularization",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c4-retrograde-transpedal-distal-puncture-and",
    "name": "Retrograde Transpedal / Distal Puncture and Revascularization",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c4-transiliac-crossover-up-and-over",
    "name": "Transiliac Crossover / Up-and-Over Femoral Recanalization",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "c4-subintimal-arterial-flossing-with-antegrade",
    "name": "Subintimal Arterial Flossing with Antegrade-Retrograde Intervention (SAFARI Technique)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage"
    ]
  },
  {
    "id": "c4-percutaneous-deep-vein-arterialization",
    "name": "Percutaneous Deep Vein Arterialization (pDVA / LimFlow System)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c4-rotational-mechanical-atherectomy",
    "name": "Rotational Mechanical Atherectomy (Rotarex / Jetstream)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Y90 Partition Model Dosimetry & Lung Shunt Fraction (LSF)",
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "c4-directional-atherectomy",
    "name": "Directional Atherectomy (HawkOne / TurboHawk)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "c4-orbital-atherectomy",
    "name": "Orbital Atherectomy (Diamondback 360)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "c4-laser-atherectomy",
    "name": "Laser Atherectomy (Spectranetics Turbo-Elite Excimer Laser)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c4-peripheral-intravascular-lithotripsy",
    "name": "Peripheral Intravascular Lithotripsy (IVL / Shockwave Medical)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c4-catheter-directed-thrombolysis-for-acute",
    "name": "Catheter-Directed Thrombolysis (CDT) for Acute Limb Ischemia (rtPA / Urokinase)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "c4-continuous-pulse-spray-catheter-directed",
    "name": "Continuous Pulse-Spray Catheter-Directed Thrombolysis",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "c4-hydrodynamic-thrombectomy-for-peripheral-arterial",
    "name": "Hydrodynamic Thrombectomy (AngioJet) for Peripheral Arterial Occlusion",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c4-continuous-aspiration-thrombectomy-for-ali",
    "name": "Continuous Aspiration Thrombectomy (Penumbra Indigo Lightning 7/12) for ALI",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c4-subclavian-artery-balloon-angioplasty-and",
    "name": "Subclavian Artery Balloon Angioplasty and Stenting",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "c4-axillary-artery-angioplasty-and-stent",
    "name": "Axillary Artery Angioplasty and Stent-Graft Placement",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "c4-brachial-artery-thrombectomy-angioplasty",
    "name": "Brachial Artery Thrombectomy / Angioplasty",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "c4-radial-artery-spasmolysis-and-recanalization",
    "name": "Radial Artery Spasmolysis and Recanalization",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "c4-hypothenar-hammer-syndrome-microvascular-recanalization",
    "name": "Hypothenar Hammer Syndrome Microvascular Recanalization and Embolization",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c4-tibial-pedal-retrograde-puncture-for",
    "name": "Tibial / Pedal Retrograde Puncture for CLI Limb Salvage",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c5-thoracic-endovascular-aortic-repair-for",
    "name": "Thoracic Endovascular Aortic Repair (TEVAR) for Descending Thoracic Aneurysm",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "c5-tevar-for-type-b-aortic",
    "name": "TEVAR for Type B Aortic Dissection (Complicated Acute / Subacute)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c5-tevar-for-traumatic-aortic-transection",
    "name": "TEVAR for Traumatic Aortic Transection (Blunt Thoracic Aortic Injury)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "AAST (American Association for the Surgery of Trauma) Organ Injury Scale (Grades I-V)",
      "Young-Burgess Pelvic Fracture Classification"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Shock Index (SI) & Age-Adjusted SASI for Massive Transfusion",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c5-distal-bare-stent-extension-for",
    "name": "Distal Bare-Stent Extension (PETTICOAT Technique) for Aortic Dissection",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c5-stent-assisted-balloon-induced-intimal",
    "name": "Stent-Assisted Balloon-Induced Intimal Disruption and Relamination (STABILISE Technique)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage"
    ]
  },
  {
    "id": "c5-tevar-with-chimney-snorkel-periscope",
    "name": "TEVAR with Chimney / Snorkel / Periscope Technique (Ch-TEVAR)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c5-fenestrated-tevar",
    "name": "Fenestrated TEVAR (FTEVAR)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "c5-branched-tevar-for-aortic-arch",
    "name": "Branched TEVAR (BTEVAR) for Aortic Arch Aneurysms",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "c5-in-situ-laser-fenestration-of",
    "name": "In Situ Laser Fenestration (ISLF) of Aortic Arch Branch Endografts",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "c5-physician-modified-endovascular-graft-for",
    "name": "Physician-Modified Endovascular Graft (PMEG) for Thoracic Arch / Abdomen",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c5-endovascular-abdominal-aortic-aneurysm-repair",
    "name": "Endovascular Abdominal Aortic Aneurysm Repair (EVAR)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "c5-percutaneous-evar-with-pre-close",
    "name": "Percutaneous EVAR (PEVAR) with Pre-close Technique (Perclose ProGlide / ProStyle)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c5-fenestrated-evar-for-juxtarenal-suprarenal",
    "name": "Fenestrated EVAR (FEVAR) for Juxtarenal / Suprarenal Aneurysms",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Y90 Partition Model Dosimetry & Lung Shunt Fraction (LSF)",
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Caprini VTE Risk Score",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c5-branched-evar-for-thoracoabdominal-aortic",
    "name": "Branched EVAR (BEVAR) for Thoracoabdominal Aortic Aneurysms (TAAA)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "c5-chimney-evar",
    "name": "Chimney EVAR (Ch-EVAR / Snorkel Technique)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "c5-iliac-branch-device-implantation-for",
    "name": "Iliac Branch Device (IBD / IBE) Implantation for Common Iliac Aneurysms",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "c5-endoanchoring-for-endograft-migration-type",
    "name": "EndoAnchoring (Heli-FX EndoAnchor System) for Endograft Migration / Type IA Endoleak",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c5-endovascular-aneurysm-sealing",
    "name": "Endovascular Aneurysm Sealing (EVAS)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "c5-transarterial-coiling-liquid-embolization-of",
    "name": "Transarterial Coiling / Liquid Embolization of Type I Endoleak",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c5-direct-translumbar-sac-puncture-and",
    "name": "Direct Translumbar Sac Puncture and Liquid Embolization for Type II Endoleak",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c5-transarterial-mesenteric-lumbar-catheterization-and",
    "name": "Transarterial Mesenteric / Lumbar Catheterization and Embolization of Type II Endoleak",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c5-transcaval-sac-puncture-and-embolization",
    "name": "Transcaval Sac Puncture and Embolization of Type II Endoleak",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c5-relining-cuff-deployment-for-type",
    "name": "Relining / Cuff Deployment for Type III Endoleak",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c5-candy-plug-technique-for-false",
    "name": "Candy-Plug Technique for False Lumen Occlusion in Chronic Dissection",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "c5-knickerbocker-technique-for-false-lumen",
    "name": "Knickerbocker Technique for False Lumen Occlusion",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c5-false-lumen-coil-and-liquid",
    "name": "False Lumen Coil and Liquid Embolization in Aortic Dissection",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "c5-percutaneous-septal-fenestration-for-malperfusion",
    "name": "Percutaneous Septal Fenestration (Balloon / Needle / RF) for Malperfusion Syndrome",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c5-endovascular-exclusion-of-mycotic-aortic",
    "name": "Endovascular Exclusion of Mycotic Aortic Aneurysm",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "c5-endovascular-stent-graft-exclusion-of",
    "name": "Endovascular Stent-Graft Exclusion of Aortoenteric Fistula (Bridge to Surgery)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c5-endovascular-stent-graft-exclusion-of-proc135",
    "name": "Endovascular Stent-Graft Exclusion of Aortobronchial Fistula",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c6-renal-artery-balloon-angioplasty",
    "name": "Renal Artery Balloon Angioplasty (Atherosclerotic / Fibromuscular Dysplasia)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c6-renal-artery-stenting-with-monorail",
    "name": "Renal Artery Stenting with Monorail Balloon-Expandable Stent",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c6-renal-artery-covered-stent-placement",
    "name": "Renal Artery Covered Stent Placement for Iatrogenic / Traumatic Rupture",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "AAST (American Association for the Surgery of Trauma) Organ Injury Scale (Grades I-V)",
      "Young-Burgess Pelvic Fracture Classification",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Shock Index (SI) & Age-Adjusted SASI for Massive Transfusion",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Renal Artery Resistive Index (RI) & RAR Ratio"
    ]
  },
  {
    "id": "c6-renal-artery-aneurysm-embolization",
    "name": "Renal Artery Aneurysm Embolization (Stent-Assisted Coiling, Flow Diversion)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c6-catheter-based-renal-sympathetic-denervation",
    "name": "Catheter-Based Renal Sympathetic Denervation (RDN) - Radiofrequency (Symplicity Spyral)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Renal Artery Resistive Index (RI) & RAR Ratio"
    ]
  },
  {
    "id": "c6-catheter-based-renal-sympathetic-denervation-proc141",
    "name": "Catheter-Based Renal Sympathetic Denervation (RDN) - Ultrasound (Paradise System)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c6-celiac-artery-balloon-angioplasty-and",
    "name": "Celiac Artery Balloon Angioplasty and Stenting",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage"
    ]
  },
  {
    "id": "c6-superior-mesenteric-artery-angioplasty-and",
    "name": "Superior Mesenteric Artery (SMA) Angioplasty and Stenting for Chronic Mesenteric Ischemia",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c6-retrograde-open-mesenteric-stenting",
    "name": "Retrograde Open Mesenteric Stenting (ROMS - Hybrid Procedure)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c6-catheter-directed-thrombolysis-for-acute",
    "name": "Catheter-Directed Thrombolysis for Acute Superior Mesenteric Artery Embolism / Thrombosis",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c6-mechanical-aspiration-thrombectomy-for-acute",
    "name": "Mechanical Aspiration Thrombectomy for Acute SMA Occlusion",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "c6-inferior-mesenteric-artery-angioplasty-and",
    "name": "Inferior Mesenteric Artery (IMA) Angioplasty and Stenting",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage"
    ]
  },
  {
    "id": "c6-hepatic-artery-angioplasty-and-stenting",
    "name": "Hepatic Artery Angioplasty and Stenting (Post-Orthotopic Liver Transplant Stenosis)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "c6-splenic-artery-angioplasty-and-stenting",
    "name": "Splenic Artery Angioplasty and Stenting",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "c6-median-arcuate-ligament-release-post",
    "name": "Median Arcuate Ligament Release Post-Surgical Endovascular Celiac Stenting",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage"
    ]
  },
  {
    "id": "c7-bronchial-artery-embolization-for-massive",
    "name": "Bronchial Artery Embolization (BAE) for Massive Hemoptysis (PVA, Gelatin, Microspheres)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c7-non-bronchial-systemic-arterial-embolization",
    "name": "Non-Bronchial Systemic Arterial Embolization for Hemoptysis (Intercostal, IMA, Thyrocervical)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage"
    ]
  },
  {
    "id": "c7-left-gastric-artery-embolization-for",
    "name": "Left Gastric Artery Embolization for Severe Refractory Peptic Ulcer Bleeding",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c7-gastroduodenal-artery-sandwich-coiling-for",
    "name": "Gastroduodenal Artery (GDA) \\",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c7-right-gastric-artery-embolization-for",
    "name": "Right Gastric Artery Embolization for Gastric Hemorrhage",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c7-pancreaticoduodenal-arcade-coiling-glue-embolization",
    "name": "Pancreaticoduodenal Arcade Coiling / Glue Embolization",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c7-transcatheter-embolization-of-diverticular-hemorrhage",
    "name": "Transcatheter Embolization of Diverticular Hemorrhage (Microcoils, PVA particles)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c7-transcatheter-embolization-of-angiodysplasia-induced",
    "name": "Transcatheter Embolization of Angiodysplasia-Induced Lower GI Bleeding",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage"
    ]
  },
  {
    "id": "c7-superior-rectal-artery-embolization-for",
    "name": "Superior Rectal Artery Embolization for Refractory Hemorrhoidal Bleeding (Emborrhoid Technique)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c7-transcatheter-hepatic-arterial-embolization-for",
    "name": "Transcatheter Hepatic Arterial Embolization for Blunt Liver Trauma",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "AAST (American Association for the Surgery of Trauma) Organ Injury Scale (Grades I-V)",
      "Young-Burgess Pelvic Fracture Classification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Shock Index (SI) & Age-Adjusted SASI for Massive Transfusion",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c7-splenic-artery-embolization-for-high",
    "name": "Splenic Artery Embolization for High-Grade Trauma (Proximal Main Trunk Coil Occlusion)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "AAST (American Association for the Surgery of Trauma) Organ Injury Scale (Grades I-V)",
      "Young-Burgess Pelvic Fracture Classification"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Shock Index (SI) & Age-Adjusted SASI for Massive Transfusion",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c7-selective-distal-embolization-for-splenic",
    "name": "Selective Distal Embolization for Splenic Pseudoaneurysms / Arteriovenous Fistulae",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "c7-superselective-transcatheter-renal-embolization-for",
    "name": "Superselective Transcatheter Renal Embolization for Post-Biopsy / Post-PCNL Bleeding",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c7-transcatheter-renal-embolization-for-high",
    "name": "Transcatheter Renal Embolization for High-Grade Blunt / Penetrating Renal Trauma",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "AAST (American Association for the Surgery of Trauma) Organ Injury Scale (Grades I-V)",
      "Young-Burgess Pelvic Fracture Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Shock Index (SI) & Age-Adjusted SASI for Massive Transfusion",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Renal Artery Resistive Index (RI) & RAR Ratio"
    ]
  },
  {
    "id": "c7-renal-angiomyolipoma-prophylactic-embolization",
    "name": "Renal Angiomyolipoma (AML) Prophylactic Embolization",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c7-selective-internal-iliac-branch-embolization",
    "name": "Selective Internal Iliac / Branch Embolization for Unstable Pelvic Ring Fractures",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c7-superior-gluteal-artery-embolization-for",
    "name": "Superior Gluteal Artery Embolization for Pelvic Trauma",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "AAST (American Association for the Surgery of Trauma) Organ Injury Scale (Grades I-V)",
      "Young-Burgess Pelvic Fracture Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Shock Index (SI) & Age-Adjusted SASI for Massive Transfusion",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c7-internal-pudendal-artery-embolization-for",
    "name": "Internal Pudendal Artery Embolization for Pelvic Fracture Bleeding",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c7-obturator-artery-embolization",
    "name": "Obturator Artery Embolization (Corona Mortis Bleeding)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c7-intercostal-artery-embolization-for-thoracic",
    "name": "Intercostal Artery Embolization for Thoracic Trauma / Post-Thoracentesis Bleeding",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "AAST (American Association for the Surgery of Trauma) Organ Injury Scale (Grades I-V)",
      "Young-Burgess Pelvic Fracture Classification"
    ],
    "linkedCalculators": [
      "Shock Index (SI) & Age-Adjusted SASI for Massive Transfusion",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c7-lumbar-artery-embolization-for-spontaneous",
    "name": "Lumbar Artery Embolization for Spontaneous Retroperitoneal Bleeding / Psoas Hematoma",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "AAST (American Association for the Surgery of Trauma) Organ Injury Scale (Grades I-V)",
      "Young-Burgess Pelvic Fracture Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Shock Index (SI) & Age-Adjusted SASI for Massive Transfusion",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c7-inferior-epigastric-artery-embolization-for",
    "name": "Inferior Epigastric Artery Embolization for Rectus Sheath Hematoma",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c7-deep-circumflex-iliac-artery-embolization",
    "name": "Deep Circumflex Iliac Artery Embolization",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "c7-transcatheter-embolization-for-intractable-epistaxis",
    "name": "Transcatheter Embolization for Intractable Epistaxis (Sphenopalatine / Internal Maxillary Branches)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma"
    ]
  },
  {
    "id": "c7-facial-artery-embolization-for-post",
    "name": "Facial Artery Embolization for Post-Traumatic Maxillofacial Bleeding",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "AAST (American Association for the Surgery of Trauma) Organ Injury Scale (Grades I-V)",
      "Young-Burgess Pelvic Fracture Classification"
    ],
    "linkedCalculators": [
      "Shock Index (SI) & Age-Adjusted SASI for Massive Transfusion",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c7-superselective-transcatheter-arterial-embolization-of",
    "name": "Superselective Transcatheter Arterial Embolization of Splanchnic Aneurysms / Pseudoaneurysms",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "Palliative Medicine / SIR Pain Standards"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Palliative Prognostic Index (PPI)",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c7-ultrasound-guided-percutaneous-thrombin-injection",
    "name": "Ultrasound-Guided Percutaneous Thrombin Injection for Femoral Pseudoaneurysm",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c7-ultrasound-guided-percutaneous-thrombin-injection-proc178",
    "name": "Ultrasound-Guided Percutaneous Thrombin Injection for Visceral / Peripheral Pseudoaneurysms",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c7-transcatheter-coil-microvascular-plug-occlusion",
    "name": "Transcatheter Coil / Microvascular Plug Occlusion of Iatrogenic Pseudoaneurysms",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "c7-transcatheter-cyanoacrylate-embolization-of-pseudoaneurysms",
    "name": "Transcatheter Cyanoacrylate (Glue) Embolization of Pseudoaneurysms",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "c7-covered-stent-exclusion-of-iatrogenic",
    "name": "Covered Stent Exclusion of Iatrogenic Arterial Dissections / Ruptures",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "c7-preoperative-tumor-devascularization-embolization",
    "name": "Preoperative Tumor Devascularization / Embolization (Hypervascular Bone / RCC / Thyroid Mets)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "EU-TIRADS / ACR-TIRADS Thyroid Nodule Ultrasound Staging",
      "AO Spine Thoracolumbar Injury Classification",
      "Spine Instability Neoplastic Score (SINS - 6 Parameters)"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Thyroid Nodule Volume & Volume Reduction Ratio (VRR %)",
      "SINS Spine Instability Decision Engine",
      "Palliative Prognostic Index (PPI) for Interventional Oncology"
    ]
  },
  {
    "id": "c7-carotid-blowout-syndrome-covered-stent",
    "name": "Carotid Blowout Syndrome Covered Stent Exclusion",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma"
    ]
  },
  {
    "id": "c7-carotid-blowout-syndrome-therapeutic-parent",
    "name": "Carotid Blowout Syndrome Therapeutic Parent Vessel Occlusion (PVO)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c10-catheter-directed-thrombolysis-for-acute",
    "name": "Catheter-Directed Thrombolysis (CDT) for Acute Iliofemoral Deep Vein Thrombosis (DVT)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "c10-pharmacomechanical-catheter-directed-thrombolysis-using",
    "name": "Pharmacomechanical Catheter-Directed Thrombolysis (PCDT) using AngioJet Clot-Hunter",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "c10-acoustic-pulse-thrombolysis-for-iliofemoral",
    "name": "Acoustic Pulse Thrombolysis (EKOSEndoWave System) for Iliofemoral DVT",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "c10-pure-mechanical-thrombectomy-for-iliofemoral",
    "name": "Pure Mechanical Thrombectomy for Iliofemoral DVT (Inari ClotTriever System)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "c10-aspiration-thrombectomy-for-acute-dvt",
    "name": "Aspiration Thrombectomy for Acute DVT (Penumbra Lightning Bolt / Indigo System)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c10-iliac-vein-balloon-angioplasty-for",
    "name": "Iliac Vein Balloon Angioplasty for May-Thurner Syndrome",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "c10-dedicated-venous-stenting-for-may",
    "name": "Dedicated Venous Stenting for May-Thurner Syndrome (Venovo, Abre, Vici, Zilver Vena)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "c10-recanalization-and-reconstruction-of-chronic",
    "name": "Recanalization and Reconstruction of Chronic Total Occlusions of the IVC",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c10-inferior-vena-cava-filter-placement",
    "name": "Inferior Vena Cava (IVC) Filter Placement (Infrarenal, Jugular / Femoral Approach)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c10-suprarenal-ivc-filter-placement",
    "name": "Suprarenal IVC Filter Placement",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "c10-temporary-retrievable-ivc-filter-removal",
    "name": "Temporary / Retrievable IVC Filter Removal (Standard Snare Technique)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "c10-complex-advanced-ivc-filter-retrieval",
    "name": "Complex / Advanced IVC Filter Retrieval (Loop-Snare / Hangman Technique)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "c10-complex-ivc-filter-retrieval-with",
    "name": "Complex IVC Filter Retrieval with Endobronchial Forceps",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "c10-complex-ivc-filter-retrieval-with-proc199",
    "name": "Complex IVC Filter Retrieval with Excimer Laser Sheath",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "c10-superior-vena-cava-syndrome-balloon",
    "name": "Superior Vena Cava (SVC) Syndrome Balloon Angioplasty",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c10-svc-stenting-for-malignant-obstruction",
    "name": "SVC Stenting for Malignant Obstruction",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c10-internal-jugular-vein-balloon-angioplasty",
    "name": "Internal Jugular Vein Balloon Angioplasty and Stenting",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "c10-innominate-brachiocephalic-vein-recanalization-and",
    "name": "Innominate / Brachiocephalic Vein Recanalization and Stenting",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c10-subclavian-vein-stenting-for-thoracic",
    "name": "Subclavian Vein Stenting for Thoracic Outlet Syndrome / Effort Thrombosis (Paget-Schroetter)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "c10-catheter-directed-thrombolysis-for-massive",
    "name": "Catheter-Directed Thrombolysis (EKOS) for Massive / Submassive Pulmonary Embolism (PE)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c10-percutaneous-mechanical-aspiration-thrombectomy-for",
    "name": "Percutaneous Mechanical Aspiration Thrombectomy for Acute Massive PE (Inari FlowTriever)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c10-large-bore-mechanical-thrombectomy-for",
    "name": "Large-Bore Mechanical Thrombectomy for Acute PE (Penumbra Lightning 12 / Lightning Bolt)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c10-balloon-pulmonary-angioplasty-for-chronic",
    "name": "Balloon Pulmonary Angioplasty (BPA) for Chronic Thromboembolic Pulmonary Hypertension (CTEPH)",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "c10-pulmonary-artery-mechanical-clot-fragmentation",
    "name": "Pulmonary Artery Mechanical Clot Fragmentation",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "c10-catheter-directed-splanchnic-mesenteric-vein",
    "name": "Catheter-Directed Splanchnic Mesenteric Vein Thrombolysis",
    "sourceFile": "vascularVenousExtended.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading",
      "Palliative Medicine / SIR Pain Standards"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis",
      "Palliative Prognostic Index (PPI)",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "dvt-catheter-directed-thrombolysis",
    "name": "Acute Iliofemoral Deep Vein Thrombosis: Catheter-Directed Thrombolysis (CDT)",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "dvt-pharmacomechanical-thrombectomy-angiojet",
    "name": "Acute Iliofemoral DVT: Pharmacomechanical Catheter-Directed Thrombectomy (AngioJet / ClotTriever)",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "dvt-large-bore-aspiration-thrombectomy",
    "name": "Acute Iliofemoral DVT: Dedicated Large-Bore Venous Mechanical Aspiration Thrombectomy (Inari ClotTriever / Indigo)",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "chronic-pts-recanalization-stenting",
    "name": "Chronic Iliofemoral Post-Thrombotic Syndrome (PTS): Recanalization and Dedicated Venous Stenting (Venovo / Abre / Wallstent)",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "ivc-filter-placement-infrarenal",
    "name": "Inferior Vena Cava (IVC) Filter Placement: Infrarenal, Retrievable Filter via Right Femoral or Internal Jugular Vein",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "ivc-filter-placement-suprarenal",
    "name": "IVC Filter Placement: Suprarenal Placement for Gonadal / Renal Vein Thrombosis or Pregnancy",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "ivc-filter-retrieval-routine",
    "name": "Routine Endovascular IVC Filter Retrieval with Loop Snare",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "ivc-filter-retrieval-complex-forceps",
    "name": "Complex / Advanced IVC Filter Retrieval: Endobronchial Forceps Dissection of Embedded Filter Tip",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "ivc-filter-retrieval-complex-laser",
    "name": "Complex IVC Filter Retrieval: Laser Sheath / Rigid Bronchial Forceps Assisted Removal of Endothelialized Struts",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "pe-mechanical-thrombectomy-flowtriever",
    "name": "Acute Massive / Submassive Pulmonary Embolism: Catheter-Directed Mechanical Aspiration Thrombectomy (Inari FlowTriever)",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "pe-ultrasound-accelerated-thrombolysis-ekos",
    "name": "Acute Pulmonary Embolism: Ultrasound-Accelerated Catheter-Directed Thrombolysis (EKOS System with Low-Dose tPA)",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "pe-low-dose-catheter-directed-infusion",
    "name": "Acute Pulmonary Embolism: Low-Dose Catheter-Directed Infusion Thrombolysis via Bilateral Pigtail Catheters",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cteph-balloon-pulmonary-angioplasty-bpa",
    "name": "Chronic Thromboembolic Pulmonary Hypertension (CTEPH): Balloon Pulmonary Angioplasty (BPA) with Pressure-Wire Guidance",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "svc-syndrome-recanalization-stenting",
    "name": "Superior Vena Cava (SVC) Syndrome: Sharp Recanalization and Bilateral Kissing Brachiocephalic-to-SVC Stenting",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "evla-gsv-incompetence",
    "name": "Endovenous Laser Ablation (EVLA 1470nm) for Great Saphenous Vein (GSV) Incompetence",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Venous Clinical Severity Score (VCSS - 10 Attributes)",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Villalta Scale for Post-Thrombotic Syndrome",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "rfa-gsv-ssv-reflux",
    "name": "Radiofrequency Ablation (RFA / ClosureFast) for GSV and Small Saphenous Vein (SSV) Reflux",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Venous Clinical Severity Score (VCSS - 10 Attributes)",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Villalta Scale for Post-Thrombotic Syndrome",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "ntnt-venous-ablation-clarivein-venaseal",
    "name": "Non-Thermal Non-Tumescent (NTNT) Venous Ablation: Mechanochemical Ablation (ClariVein) / Cyanoacrylate Glue (VenaSeal)",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Venous Clinical Severity Score (VCSS - 10 Attributes)",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Villalta Scale for Post-Thrombotic Syndrome",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "ugfs-foam-sclerotherapy",
    "name": "Ultrasound-Guided Foam Sclerotherapy (UGFS) with Polidocanol / STS for Venous Leg Ulcers and Recurrent Varices",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "percutaneous-nephrostomy-pcn",
    "name": "Percutaneous Nephrostomy (PCN): Ultrasound and Fluoroscopy Guided Posterior Lower Pole Calyx Puncture and 8.5F/10F Catheter",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "antegrade-dj-ureteral-stent",
    "name": "Antegrade Double-J (DJ) Ureteral Stent Placement for Benign or Malignant Ureteric Obstruction",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "pcnl-access-tract-dilation",
    "name": "Percutaneous Nephrolithotomy (PCNL) Access Tract Creation with Balloon or Serial Amplatz Dilation up to 30F",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "percutaneous-ureteral-stricture-balloon-dilation",
    "name": "Percutaneous Balloon Dilation of Benign Ureteral Stricture with Cutting / High-Pressure Balloon and Temporary Stenting",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "percutaneous-radiologic-gastrostomy-prg",
    "name": "Percutaneous Radiologic Gastrostomy (PRG) with T-Fastener Gastropexy and 14F-18F Balloon-Retained Tube",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "percutaneous-radiologic-gastrojejunostomy-prgj",
    "name": "Percutaneous Radiologic Gastrojejunostomy (PRGJ) for Post-Pyloric Feeding in Gastric Outlet Obstruction",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "percutaneous-cecostomy-colostomy",
    "name": "Percutaneous Cecostomy / Colostomy Catheter Placement for Colonic Decompression in Ogilvie Syndrome",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "percutaneous-abdominopelvic-abscess-drainage",
    "name": "Percutaneous Drainage of Complex Multi-Loculated Abdominopelvic Abscess under CT/US Guidance",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "percutaneous-necrosectomy-won",
    "name": "Percutaneous Necrosectomy and Multi-Catheter Irrigation for Walled-Off Pancreatic Necrosis (WON)",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "hydatid-cyst-pair-procedure",
    "name": "Hydatid Cyst of Liver: PAIR Procedure (Puncture, Aspiration, Injection of Hypertonic Saline/Alcohol, Re-Aspiration)",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "hydatid-cyst-pevac-procedure",
    "name": "Hydatid Cyst of Liver: PEVAC Procedure (Percutaneous Evacuation of Cyst Contents) with Wide-Bore Cannula",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "percutaneous-liver-abscess-drainage",
    "name": "Percutaneous Drainage of Amebic / Pyogenic Liver Abscess with Locking Pigtail Catheter",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "fallopian-tube-recanalization-ftr",
    "name": "Fallopian Tube Recanalization (FTR) for Proximal Tubal Obstruction in Female Infertility",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage"
    ]
  },
  {
    "id": "fluoroscopic-esophageal-stricture-dilation",
    "name": "Fluoroscopically Guided Balloon Dilation of Benign Esophageal Stricture (Post-Caustic / Anastomotic)",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "percutaneous-retrieval-embolized-port-fragment",
    "name": "Endovascular / Percutaneous Retrieval of Embolized or Fractured Central Line / Port Fragments Using Goose-Neck Snare",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "retroperitoneal-pelvic-hematoma-drainage",
    "name": "Retroperitoneal / Pelvic Hematoma Percutaneous Evacuation and Drainage",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "AAST (American Association for the Surgery of Trauma) Organ Injury Scale (Grades I-V)",
      "Young-Burgess Pelvic Fracture Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Shock Index (SI) & Age-Adjusted SASI for Massive Transfusion",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "page-kidney-subcapsular-hematoma-decompression",
    "name": "Subcapsular Renal Hematoma (Page Kidney) Percutaneous Decompression",
    "sourceFile": "venousAndDrainage.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "cat01-liver-core-target",
    "name": "Ultrasound-Guided Targeted Core Needle Biopsy of Liver Mass",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat01-liver-diffuse-core",
    "name": "Ultrasound-Guided Non-Targeted Liver Biopsy for Diffuse Parenchymal Disease",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat01-liver-allograft-biopsy",
    "name": "Ultrasound-Guided Liver Allograft Biopsy for Rejection Surveillance",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat01-tjlb",
    "name": "Transjugular Liver Biopsy (TJLB) with Hepatic Venous Pressure Gradient (HVPG)",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "cat01-kidney-native-core",
    "name": "Ultrasound-Guided Native Renal Cortical Biopsy",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "cat01-kidney-allograft-core",
    "name": "Ultrasound-Guided Transplant Renal Allograft Biopsy",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "cat01-kidney-mass-us",
    "name": "Ultrasound-Guided Core Needle Biopsy of Renal Mass / Neoplasm",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "cat01-kidney-mass-ct",
    "name": "CT-Guided Percutaneous Core Needle Biopsy of Renal Mass",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "cat01-spleen-us-core",
    "name": "Ultrasound-Guided Splenic Focal Lesion Core Needle Biopsy",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat01-spleen-ct-core",
    "name": "CT-Guided Core Needle Biopsy of Deep Splenic Mass",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat01-pancreas-head-us",
    "name": "Ultrasound-Guided Core Needle Biopsy of Pancreatic Head Mass",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat01-pancreas-tail-ct",
    "name": "CT-Guided Core Needle Biopsy of Pancreatic Body / Tail Mass",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat01-pancreas-eus-fna",
    "name": "Endoscopic Ultrasound-Guided Fine Needle Aspiration (EUS-FNA/FNB) of Pancreatic Mass",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat01-lung-nodule-ct",
    "name": "CT-Guided Percutaneous Core Needle Biopsy of Lung Nodule / Mass",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "EU-TIRADS / ACR-TIRADS Thyroid Nodule Ultrasound Staging"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thyroid Nodule Volume & Volume Reduction Ratio (VRR %)"
    ]
  },
  {
    "id": "cat01-lung-subpleural-us",
    "name": "Ultrasound-Guided Core Needle Biopsy of Subpleural Lung Mass / Consolidation",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat01-lung-fnac-ct",
    "name": "CT-Guided Fine Needle Aspiration Cytology (FNAC) of Pulmonary Nodule",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "EU-TIRADS / ACR-TIRADS Thyroid Nodule Ultrasound Staging"
    ],
    "linkedCalculators": [
      "Thyroid Nodule Volume & Volume Reduction Ratio (VRR %)"
    ]
  },
  {
    "id": "cat01-lung-cavitary-ct",
    "name": "CT-Guided Biopsy of Cavitary / Partially Necrotic Pulmonary Mass",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat01-mediastinal-anterior-ct",
    "name": "CT-Guided Percutaneous Core Biopsy of Anterior Mediastinal Mass",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat01-mediastinal-middle-ct",
    "name": "CT-Guided Core Needle Biopsy of Middle Mediastinal / Subcarinal Mass",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat01-mediastinal-posterior-ct",
    "name": "CT-Guided Core Needle Biopsy of Posterior Mediastinal / Paravertebral Mass",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "AO Spine Thoracolumbar Injury Classification",
      "Spine Instability Neoplastic Score (SINS - 6 Parameters)"
    ],
    "linkedCalculators": [
      "SINS Spine Instability Decision Engine",
      "Palliative Prognostic Index (PPI) for Interventional Oncology"
    ]
  },
  {
    "id": "cat01-pleural-mass-us",
    "name": "Ultrasound-Guided Core Needle Biopsy of Pleural Mass / Mesothelioma",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat01-pleural-plaque-ct",
    "name": "CT-Guided Percutaneous Biopsy of Diffuse Pleural Plaque / Thickening",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat01-adrenal-left-ct",
    "name": "CT-Guided Percutaneous Core Biopsy of Left Adrenal Mass",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "cat01-adrenal-right-ct",
    "name": "CT-Guided Percutaneous Core Biopsy of Right Adrenal Mass",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "cat01-retroperitoneal-sarcoma-ct",
    "name": "CT-Guided Core Needle Biopsy of Retroperitoneal Sarcoma / Mass",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "AAST (American Association for the Surgery of Trauma) Organ Injury Scale (Grades I-V)",
      "Young-Burgess Pelvic Fracture Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Shock Index (SI) & Age-Adjusted SASI for Massive Transfusion",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat01-retroperitoneal-ln-ct",
    "name": "CT-Guided Core Needle Biopsy of Para-Aortic / Retroperitoneal Lymph Nodes",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "AAST (American Association for the Surgery of Trauma) Organ Injury Scale (Grades I-V)",
      "Young-Burgess Pelvic Fracture Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Shock Index (SI) & Age-Adjusted SASI for Massive Transfusion",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat01-pelvic-mass-ct",
    "name": "CT-Guided Percutaneous Core Biopsy of Deep Pelvic Mass",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat01-presacral-mass-ct",
    "name": "CT-Guided Core Biopsy of Presacral / Retrorectal Mass",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat01-mesenteric-mass-us",
    "name": "Ultrasound-Guided Core Needle Biopsy of Mesenteric Mass / Lymph Node",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage"
    ]
  },
  {
    "id": "cat01-omental-cake-us",
    "name": "Ultrasound-Guided Core Needle Biopsy of Omental Cake / Carcinomatosis",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat01-peritoneal-nodule-us",
    "name": "Ultrasound-Guided Core Biopsy of Parietal Peritoneal Nodule",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "EU-TIRADS / ACR-TIRADS Thyroid Nodule Ultrasound Staging"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thyroid Nodule Volume & Volume Reduction Ratio (VRR %)"
    ]
  },
  {
    "id": "cat01-thyroid-fnac-us",
    "name": "Ultrasound-Guided Fine Needle Aspiration Cytology (FNAC) of Thyroid Nodule",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "EU-TIRADS / ACR-TIRADS Thyroid Nodule Ultrasound Staging"
    ],
    "linkedCalculators": [
      "Thyroid Nodule Volume & Volume Reduction Ratio (VRR %)"
    ]
  },
  {
    "id": "cat01-thyroid-cnb-us",
    "name": "Ultrasound-Guided Core Needle Biopsy (CNB) of Thyroid Nodule",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "EU-TIRADS / ACR-TIRADS Thyroid Nodule Ultrasound Staging"
    ],
    "linkedCalculators": [
      "Thyroid Nodule Volume & Volume Reduction Ratio (VRR %)"
    ]
  },
  {
    "id": "cat01-parathyroid-pth-fnac",
    "name": "Ultrasound-Guided Parathyroid FNAC with Intra-Needle Parathyroid Hormone (PTH) Washout",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "EU-TIRADS / ACR-TIRADS Thyroid Nodule Ultrasound Staging"
    ],
    "linkedCalculators": [
      "Thyroid Nodule Volume & Volume Reduction Ratio (VRR %)"
    ]
  },
  {
    "id": "cat01-cervical-ln-tg-fnac",
    "name": "Ultrasound-Guided Cervical Lymph Node FNAC with Thyroglobulin (Tg) Washout",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat01-cervical-ln-calcitonin-fnac",
    "name": "Ultrasound-Guided Cervical Lymph Node FNAC with Calcitonin Washout",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat01-cervical-ln-cnb-us",
    "name": "Ultrasound-Guided Core Needle Biopsy of Cervical Lymph Node",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat01-parotid-fnac-us",
    "name": "Ultrasound-Guided FNAC of Parotid Gland Mass",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat01-parotid-cnb-us",
    "name": "Ultrasound-Guided Core Needle Biopsy of Parotid Mass",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat01-submandibular-biopsy-us",
    "name": "Ultrasound-Guided Core / FNAC of Submandibular Gland Mass",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat01-breast-core-us",
    "name": "Ultrasound-Guided 14G Core Needle Biopsy of Breast Mass",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat01-breast-vabb-us",
    "name": "Ultrasound-Guided Vacuum-Assisted Breast Biopsy (VABB)",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat01-breast-stereo-vabb",
    "name": "Stereotactic Vacuum-Assisted Breast Biopsy for Microcalcifications",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat01-breast-mri-biopsy",
    "name": "MRI-Guided Vacuum-Assisted Breast Biopsy",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat01-prostate-trus-12core",
    "name": "Transrectal Ultrasound (TRUS)-Guided 12-Core Systematic Prostate Biopsy",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "De Assis PAE Angiographic Classification (Types I-V Origins)",
      "AUA Guidelines for Benign Prostatic Hyperplasia"
    ],
    "linkedCalculators": [
      "International Prostate Symptom Score (IPSS) & QoL",
      "Prostate Ellipsoid Volume & PSA Density Calculator"
    ]
  },
  {
    "id": "cat01-prostate-transperineal-fusion",
    "name": "Transperineal MRI-Ultrasound Cognitive / Fusion Targeted Prostate Biopsy",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "De Assis PAE Angiographic Classification (Types I-V Origins)",
      "AUA Guidelines for Benign Prostatic Hyperplasia"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "International Prostate Symptom Score (IPSS) & QoL",
      "Prostate Ellipsoid Volume & PSA Density Calculator"
    ]
  },
  {
    "id": "cat01-bone-jamshidi-manual",
    "name": "Fluoroscopy / CT-Guided Jamshidi Bone Trephine Biopsy",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "AO Spine Thoracolumbar Injury Classification",
      "Spine Instability Neoplastic Score (SINS - 6 Parameters)"
    ],
    "linkedCalculators": [
      "SINS Spine Instability Decision Engine",
      "Palliative Prognostic Index (PPI) for Interventional Oncology"
    ]
  },
  {
    "id": "cat01-bone-powered-bonopty",
    "name": "CT-Guided Powered Drill / Bonopty Bone Trephine Biopsy for Sclerotic Lesions",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "AO Spine Thoracolumbar Injury Classification",
      "Spine Instability Neoplastic Score (SINS - 6 Parameters)"
    ],
    "linkedCalculators": [
      "SINS Spine Instability Decision Engine",
      "Palliative Prognostic Index (PPI) for Interventional Oncology"
    ]
  },
  {
    "id": "cat01-vertebral-body-ct",
    "name": "CT-Guided Transpedicular / Extrapedicular Vertebral Body Core Biopsy",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "AO Spine Thoracolumbar Injury Classification",
      "Spine Instability Neoplastic Score (SINS - 6 Parameters)"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "SINS Spine Instability Decision Engine",
      "Palliative Prognostic Index (PPI) for Interventional Oncology"
    ]
  },
  {
    "id": "cat01-sacral-bone-ct",
    "name": "CT-Guided Core Needle Biopsy of Sacral / Iliac Bone Mass",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "AO Spine Thoracolumbar Injury Classification",
      "Spine Instability Neoplastic Score (SINS - 6 Parameters)"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "SINS Spine Instability Decision Engine",
      "Palliative Prognostic Index (PPI) for Interventional Oncology"
    ]
  },
  {
    "id": "cat01-soft-tissue-extremity",
    "name": "Ultrasound / CT-Guided Core Needle Biopsy of Extremity Soft Tissue Sarcoma",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat01-subcutaneous-inguinal-us",
    "name": "Ultrasound-Guided Core Biopsy of Subcutaneous Nodule / Superficial Inguinal Node",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "EU-TIRADS / ACR-TIRADS Thyroid Nodule Ultrasound Staging"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thyroid Nodule Volume & Volume Reduction Ratio (VRR %)"
    ]
  },
  {
    "id": "cat01-endobiliary-forceps-brush",
    "name": "Transhepatic Endobiliary Forceps Biopsy and Brush Cytology",
    "sourceFile": "category01_biopsies.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "cat02-liver-amebic-drainage",
    "name": "Ultrasound-Guided Percutaneous Catheter Drainage of Amebic Liver Abscess",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat02-liver-pyogenic-drainage",
    "name": "Ultrasound / CT-Guided Percutaneous Drainage of Pyogenic Liver Abscess",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat02-hydatid-pair",
    "name": "Ultrasound-Guided Percutaneous Aspiration, Injection & Re-aspiration (PAIR) for Hydatid Cyst",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "cat02-hydatid-pair-pd",
    "name": "Percutaneous Aspiration, Injection & Reaspiration with Drainage (PAIR-PD) for Large Hydatid Cyst",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "cat02-subdiaphragmatic-drainage",
    "name": "Ultrasound / CT-Guided Percutaneous Drainage of Subdiaphragmatic Abscess",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat02-morison-pouch-drainage",
    "name": "Ultrasound-Guided Percutaneous Drainage of Morison Pouch / Subhepatic Collection",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat02-pancreatic-pseudocyst-drainage",
    "name": "CT / Ultrasound-Guided Percutaneous Catheter Drainage of Pancreatic Pseudocyst",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "cat02-wopn-multicatheter-drainage",
    "name": "CT-Guided Multi-Catheter Step-Up Percutaneous Drainage for Walled-Off Pancreatic Necrosis (WOPN)",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat02-vplr-tract-necrosectomy",
    "name": "Percutaneous Necrosectomy Tract Upsizing & Debridement for Infected Pancreatic Necrosis",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat02-splenic-abscess-drainage",
    "name": "CT / Ultrasound-Guided Percutaneous Drainage of Splenic Abscess",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat02-psoas-abscess-drainage",
    "name": "CT-Guided Percutaneous Catheter Drainage of Psoas Abscess",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat02-retroperitoneal-abscess-drainage",
    "name": "CT-Guided Percutaneous Drainage of Retroperitoneal / Pararenal Abscess",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "AAST (American Association for the Surgery of Trauma) Organ Injury Scale (Grades I-V)",
      "Young-Burgess Pelvic Fracture Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Shock Index (SI) & Age-Adjusted SASI for Massive Transfusion",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Renal Artery Resistive Index (RI) & RAR Ratio"
    ]
  },
  {
    "id": "cat02-pelvic-abscess-transabdominal",
    "name": "Ultrasound / CT-Guided Transabdominal Drainage of Pelvic Abscess",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat02-pelvic-collection-transrectal",
    "name": "Transrectal Ultrasound (TRUS)-Guided Catheter Drainage of Pelvic Abscess",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat02-pelvic-abscess-transvaginal",
    "name": "Transvaginal Ultrasound (TVUS)-Guided Drainage of Pelvic Abscess / TOA",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat02-transgluteal-pelvic-drainage",
    "name": "CT-Guided Transgluteal Percutaneous Drainage of Deep Pelvic Collection",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat02-paracentesis-diagnostic",
    "name": "Ultrasound-Guided Diagnostic Abdominal Paracentesis",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat02-paracentesis-therapeutic-albumin",
    "name": "Ultrasound-Guided Large-Volume Paracentesis (LVP) with Intravenous Albumin Infusion",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat02-pleurx-peritoneal-catheter",
    "name": "Tunnelled Indwelling Peritoneal Catheter (PleurX) Placement for Malignant Ascites",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat02-denver-shunt-placement",
    "name": "Fluoroscopy-Guided Denver Peritoneovenous Shunt Placement for Refractory Ascites",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat02-thoracentesis-diagnostic",
    "name": "Ultrasound-Guided Diagnostic Pleural Aspiration / Thoracentesis",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat02-thoracentesis-therapeutic",
    "name": "Ultrasound-Guided Large-Volume Therapeutic Thoracentesis",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat02-pleural-pigtail-catheter",
    "name": "Ultrasound-Guided Small-Bore Pigtail Catheter Placement for Empyema / Effusion",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage"
    ]
  },
  {
    "id": "cat02-icd-chest-tube",
    "name": "Fluoroscopy / Ultrasound-Guided Large-Bore Chest Tube (ICD) Placement",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat02-intrapleural-tpa-dnase",
    "name": "Intrapleural Fibrinolytic and DNase Therapy (tPA + Pulmozyme) for Multiloculated Empyema",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat02-pleurx-pleural-catheter",
    "name": "Tunnelled Indwelling Pleural Catheter (PleurX) Insertion for Malignant Pleural Effusion",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat02-lung-abscess-drainage",
    "name": "CT / Ultrasound-Guided Percutaneous Catheter Drainage of Refractory Lung Abscess",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat02-pneumothorax-heimlich-pigtail",
    "name": "Percutaneous Pigtail Catheter Placement for Pneumothorax with Heimlich Flutter Valve",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat02-pericardiocentesis-emergency",
    "name": "Ultrasound-Guided Emergency Pericardiocentesis for Cardiac Tamponade",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat02-pericardial-pigtail-indwelling",
    "name": "Percutaneous Indwelling Pericardial Catheter Placement & Sclerotherapy for Malignant Effusion",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat02-urinoma-drainage",
    "name": "CT / Ultrasound-Guided Percutaneous Drainage of Retroperitoneal Urinoma",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "AAST (American Association for the Surgery of Trauma) Organ Injury Scale (Grades I-V)",
      "Young-Burgess Pelvic Fracture Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Shock Index (SI) & Age-Adjusted SASI for Massive Transfusion",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat02-biloma-drainage",
    "name": "Ultrasound / CT-Guided Percutaneous Drainage of Post-Operative Biloma",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat02-lymphocele-drainage",
    "name": "Ultrasound-Guided Percutaneous Catheter Drainage of Pelvic Lymphocele",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat02-lymphocele-sclerotherapy",
    "name": "Percutaneous Sclerotherapy of Lymphocele using Povidone-Iodine / Bleomycin / Alcohol",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat02-infected-hematoma-drainage",
    "name": "Ultrasound / CT-Guided Percutaneous Drainage of Infected Hematoma / Seroma",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat02-hepatic-cyst-sclerosis",
    "name": "Ultrasound-Guided Percutaneous Aspiration and Ethanol Sclerotherapy of Hepatic Cyst",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "cat02-adpkd-cyst-sclerosis",
    "name": "Ultrasound / CT-Guided Percutaneous Aspiration & Sclerotherapy of Dominant ADPKD Cyst",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "cat02-renal-cyst-sclerosis",
    "name": "Percutaneous Aspiration & Absolute Alcohol Sclerotherapy of Simple Renal Cyst",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "WHO Hydatid PAIR Eligibility Decision Engine",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "cat02-surgical-seroma-drainage",
    "name": "Ultrasound-Guided Percutaneous Drainage of Post-Surgical Refractory Seroma",
    "sourceFile": "category02_drainages.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat03-ptbd-right",
    "name": "Right Percutaneous Transhepatic Biliary Drainage (PTBD)",
    "sourceFile": "category03_hpb_portal.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat03-ptbd-left",
    "name": "Left Percutaneous Transhepatic Biliary Drainage (PTBD)",
    "sourceFile": "category03_hpb_portal.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat03-ptbd-bilateral",
    "name": "Bilateral Percutaneous Transhepatic Biliary Drainage",
    "sourceFile": "category03_hpb_portal.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat03-biliary-stent-uncovered",
    "name": "Percutaneous Transhepatic Biliary Stenting (Uncovered SEMS)",
    "sourceFile": "category03_hpb_portal.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat03-biliary-stent-covered",
    "name": "Percutaneous Transhepatic Biliary Stenting (Covered SEMS)",
    "sourceFile": "category03_hpb_portal.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat03-intraductal-rfa",
    "name": "Percutaneous Intraductal Radiofrequency Ablation (RFA) of Biliary Malignancy",
    "sourceFile": "category03_hpb_portal.ts",
    "applicableClassifications": [
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index"
    ]
  },
  {
    "id": "cat03-biliary-stone-extraction",
    "name": "Percutaneous Transhepatic Biliary Stone Extraction & Balloon Dilation",
    "sourceFile": "category03_hpb_portal.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat03-cholecystostomy-transhepatic",
    "name": "Ultrasound-Guided Percutaneous Transhepatic Cholecystostomy",
    "sourceFile": "category03_hpb_portal.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Bismuth-Corlette Classification of Biliary Strictures (Types I-IV)",
      "Tokyo Guidelines 2018 (TG18) Acute Cholecystitis Severity",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "PTBD Biliary Drainage Clearance & Decompression Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "cat03-hvpg-measurement",
    "name": "Hepatic Venous Pressure Gradient (HVPG) Measurement",
    "sourceFile": "category03_hpb_portal.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat03-tips-viatorr",
    "name": "Transjugular Intrahepatic Portosystemic Shunt (TIPS) with Viatorr Stent-Graft",
    "sourceFile": "category03_hpb_portal.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "cat03-dips-ivus",
    "name": "Direct Intrahepatic Portocaval Shunt (DIPS) under IVUS",
    "sourceFile": "category03_hpb_portal.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "cat03-tips-revision-angioplasty",
    "name": "TIPS Shunt Revision with Balloon Angioplasty & Relining",
    "sourceFile": "category03_hpb_portal.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)",
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score",
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "cat03-bcs-hv-angioplasty",
    "name": "Budd-Chiari Syndrome: Hepatic Vein Web Balloon Angioplasty",
    "sourceFile": "category03_hpb_portal.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)",
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score",
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "cat03-bcs-hv-stenting",
    "name": "Budd-Chiari Syndrome: Hepatic Vein Dedicated Venous Stenting",
    "sourceFile": "category03_hpb_portal.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "cat03-bcs-ivc-cavoplasty",
    "name": "Budd-Chiari Syndrome: IVC Balloon Cavoplasty",
    "sourceFile": "category03_hpb_portal.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "cat03-bcs-ivc-stenting",
    "name": "Budd-Chiari Syndrome: Inferior Vena Cava (IVC) Dedicated Stenting",
    "sourceFile": "category03_hpb_portal.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "cat03-bcs-sharp-recanalization",
    "name": "Budd-Chiari Syndrome: Sharp Recanalization of Occluded Hepatic Vein / IVC",
    "sourceFile": "category03_hpb_portal.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "cat03-brto-varices",
    "name": "Balloon-Occluded Retrograde Transvenous Obliteration (BRTO) of Gastric Varices",
    "sourceFile": "category03_hpb_portal.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "cat03-parto-varices",
    "name": "Plug-Assisted Retrograde Transvenous Obliteration (PARTO) of Gastric Varices",
    "sourceFile": "category03_hpb_portal.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "cat03-carto-varices",
    "name": "Coil-Assisted Retrograde Transvenous Obliteration (CARTO) of Gastric Varices",
    "sourceFile": "category03_hpb_portal.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "cat03-glue-varices",
    "name": "Cyanoacrylate Glue (n-BCA / Histoacryl) Variceal Embolization",
    "sourceFile": "category03_hpb_portal.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "cat03-coils-plus-glue-collaterals",
    "name": "Combined Coils Plus Cyanoacrylate Glue Embolization of Portosystemic Collaterals",
    "sourceFile": "category03_hpb_portal.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat03-bcs-veno-venous-collateral-coiling-glue",
    "name": "Budd-Chiari Syndrome: Intrahepatic Veno-Venous Collateral Embolization using Microcoils and Glue",
    "sourceFile": "category03_hpb_portal.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score"
    ]
  },
  {
    "id": "cat03-pve-ipsilateral",
    "name": "Portal Vein Embolization (PVE) - Ipsilateral Approach",
    "sourceFile": "category03_hpb_portal.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat03-pve-contralateral",
    "name": "Portal Vein Embolization (PVE) - Contralateral Approach",
    "sourceFile": "category03_hpb_portal.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat03-hepatic-vein-deprivation",
    "name": "Hepatic Vein Deprivation (HVD / Bi-Embolization)",
    "sourceFile": "category03_hpb_portal.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat03-pv-recanalization-stent-ehpvo",
    "name": "Portal Vein Recanalization & Stenting for Chronic Extrahepatic Portal Vein Obstruction (EHPVO)",
    "sourceFile": "category03_hpb_portal.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat03-splenic-artery-embolization-partial",
    "name": "Partial Splenic Artery Embolization (PSE) for Hypersplenism / Portal HTN",
    "sourceFile": "category03_hpb_portal.ts",
    "applicableClassifications": [
      "Sarin Classification of Gastric Varices (GOV1, GOV2, IGV1, IGV2)",
      "Baveno VII Portal Hypertension Consensus",
      "Rotterdam Budd-Chiari Prognostic Index (BCS-PI)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "MELD 3.0 Score (TIPS Eligibility & 90-Day Mortality)",
      "HVPG Portal Pressure Gradient Calculator",
      "Clichy Budd-Chiari Prognostic Index",
      "Harbin & Awaya Caudate-to-Right Lobe Ratio (C/RL)",
      "Budd-Chiari Composite Shunt Risk Score",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat03-splenic-artery-embolization-proximal",
    "name": "Proximal Splenic Artery Embolization for Portal Overperfusion",
    "sourceFile": "category03_hpb_portal.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat04-diagnostic-runoff",
    "name": "Diagnostic Lower Extremity Peripheral Angiography / Runoff",
    "sourceFile": "category04_arterial.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat04-cia-angioplasty",
    "name": "Common Iliac Artery (CIA) Balloon Angioplasty",
    "sourceFile": "category04_arterial.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "cat04-cia-stenting",
    "name": "Common Iliac Artery Stenting (Balloon-Expandable / Self-Expanding)",
    "sourceFile": "category04_arterial.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "cat04-cerab",
    "name": "Covered Endovascular Reconstruction of Aortic Bifurcation (CERAB)",
    "sourceFile": "category04_arterial.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "cat04-sfa-dcb",
    "name": "Superficial Femoral Artery (SFA) Drug-Coated Balloon (DCB) Angioplasty",
    "sourceFile": "category04_arterial.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat04-sfa-viabahn",
    "name": "SFA Endovascular Covered Stenting (Viabahn Endoprosthesis)",
    "sourceFile": "category04_arterial.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease"
    ]
  },
  {
    "id": "cat04-popliteal-supera",
    "name": "Popliteal Interwoven Nitinol Stenting (Supera)",
    "sourceFile": "category04_arterial.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat04-btk-dcb",
    "name": "Below-the-Knee (BTK) Tibial Drug-Coated Balloon Angioplasty",
    "sourceFile": "category04_arterial.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "Kellgren-Lawrence Knee Osteoarthritis Radiographic Grading (Grades 0-4)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "WOMAC Osteoarthritis Index for Genicular Artery Embolization"
    ]
  },
  {
    "id": "cat04-safari-pedal",
    "name": "Retrograde Tibial / Pedal Access Revascularization (SAFARI Technique)",
    "sourceFile": "category04_arterial.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat04-rotarex-atherectomy",
    "name": "Mechanical Rotational Atherectomy & Thrombectomy (Rotarex)",
    "sourceFile": "category04_arterial.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Y90 Partition Model Dosimetry & Lung Shunt Fraction (LSF)",
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "cat04-ivl-shockwave",
    "name": "Shockwave Intravascular Lithotripsy (IVL) of Calcified Peripheral Arteries",
    "sourceFile": "category04_arterial.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat04-cdt-ali",
    "name": "Catheter-Directed Thrombolysis (CDT) for Acute Limb Ischemia (ALI)",
    "sourceFile": "category04_arterial.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "cat05-tevar-aneurysm",
    "name": "Thoracic Endovascular Aortic Repair (TEVAR) for Descending Thoracic Aneurysm",
    "sourceFile": "category05_aortic.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "cat05-tevar-dissection",
    "name": "TEVAR for Complicated Acute Type B Aortic Dissection",
    "sourceFile": "category05_aortic.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat05-evar-aaa",
    "name": "Endovascular Aneurysm Repair (EVAR) for Infrarenal Abdominal Aortic Aneurysm (AAA)",
    "sourceFile": "category05_aortic.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "WHO Hydatid PAIR Eligibility Decision Engine",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "cat05-type2-endoleak-translumbar",
    "name": "Type II Endoleak Direct Translumbar Sac Puncture & Embolization",
    "sourceFile": "category05_aortic.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat06-renal-angioplasty-stent",
    "name": "Renal Artery Balloon Angioplasty & Stenting",
    "sourceFile": "category06_visceral_renal.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "cat06-renal-denervation-rf",
    "name": "Renal Denervation (RDN) using Radiofrequency Energy (Symplicity Spyral)",
    "sourceFile": "category06_visceral_renal.ts",
    "applicableClassifications": [
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Renal Artery Resistive Index (RI) & RAR Ratio"
    ]
  },
  {
    "id": "cat06-sma-stenting",
    "name": "Superior Mesenteric Artery (SMA) Stenting for Chronic Mesenteric Ischemia",
    "sourceFile": "category06_visceral_renal.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat07-bae-hemoptysis",
    "name": "Bronchial Artery Embolization (BAE) for Massive Hemoptysis",
    "sourceFile": "category07_embolotherapy.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat07-pelvic-trauma-embolization",
    "name": "Pelvic Trauma: Internal Iliac Artery Bilateral Embolization",
    "sourceFile": "category07_embolotherapy.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "AAST (American Association for the Surgery of Trauma) Organ Injury Scale (Grades I-V)",
      "Young-Burgess Pelvic Fracture Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Shock Index (SI) & Age-Adjusted SASI for Massive Transfusion",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat07-splenic-trauma-embolization",
    "name": "Splenic Trauma: Proximal Splenic Artery Plug / Coil Embolization",
    "sourceFile": "category07_embolotherapy.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "AAST (American Association for the Surgery of Trauma) Organ Injury Scale (Grades I-V)",
      "Young-Burgess Pelvic Fracture Classification"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Shock Index (SI) & Age-Adjusted SASI for Massive Transfusion",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "cat07-gda-sandwich-coiling",
    "name": "Gastroduodenal Artery (GDA) Sandwich Coil Embolization for Duodenal Bleed",
    "sourceFile": "category07_embolotherapy.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage"
    ]
  },
  {
    "id": "cat07-femoral-pseudoaneurysm-thrombin",
    "name": "Ultrasound-Guided Percutaneous Thrombin Injection (UGTI) for Femoral Pseudoaneurysm",
    "sourceFile": "category07_embolotherapy.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat08-ctace-lipiodol",
    "name": "Conventional Transarterial Chemoembolization (cTACE) with Lipiodol & Doxorubicin",
    "sourceFile": "category08_io_transcatheter.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat08-deb-tace",
    "name": "Drug-Eluting Bead TACE (DEB-TACE) with DC Beads / HepaSpheres",
    "sourceFile": "category08_io_transcatheter.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat08-tare-y90",
    "name": "Transarterial Radioembolization (TARE / SIRT) with Y-90 Glass / Resin Microspheres",
    "sourceFile": "category08_io_transcatheter.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Y90 Partition Model Dosimetry & Lung Shunt Fraction (LSF)"
    ]
  },
  {
    "id": "cat08-debiri-liver-mets",
    "name": "DEBIRI (DEB TACE with Irinotecan) for Colorectal Liver Metastases",
    "sourceFile": "category08_io_transcatheter.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat09-liver-mwa",
    "name": "Ultrasound / CT-Guided Microwave Ablation (MWA) of Hepatocellular Carcinoma",
    "sourceFile": "category09_io_ablation.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "cat09-liver-rfa",
    "name": "Ultrasound-Guided Radiofrequency Ablation (RFA) of Liver Tumors",
    "sourceFile": "category09_io_ablation.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "cat09-lung-mwa",
    "name": "CT-Guided Microwave Ablation (MWA) of Primary / Secondary Lung Malignancy",
    "sourceFile": "category09_io_ablation.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "cat09-renal-cryo",
    "name": "Percutaneous CT-Guided Cryoablation of Renal Cell Carcinoma (T1a)",
    "sourceFile": "category09_io_ablation.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Renal Artery Resistive Index (RI) & RAR Ratio"
    ]
  },
  {
    "id": "cat09-osteoid-osteoma-rfa",
    "name": "CT-Guided Percutaneous Radiofrequency Ablation of Osteoid Osteoma",
    "sourceFile": "category09_io_ablation.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "cat10-venaseal-gsv",
    "name": "VenaSeal Cyanoacrylate Closure of Great Saphenous Vein (GSV)",
    "sourceFile": "category10_venous.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Venous Clinical Severity Score (VCSS - 10 Attributes)"
    ],
    "linkedCalculators": [
      "Villalta Scale for Post-Thrombotic Syndrome"
    ]
  },
  {
    "id": "cat10-venaseal-ssv",
    "name": "VenaSeal Cyanoacrylate Closure of Small Saphenous Vein (SSV)",
    "sourceFile": "category10_venous.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Venous Clinical Severity Score (VCSS - 10 Attributes)"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Villalta Scale for Post-Thrombotic Syndrome"
    ]
  },
  {
    "id": "cat10-evla-gsv",
    "name": "Endovenous Laser Ablation (EVLA) of Great Saphenous Vein (GSV)",
    "sourceFile": "category10_venous.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Venous Clinical Severity Score (VCSS - 10 Attributes)",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Villalta Scale for Post-Thrombotic Syndrome",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "cat10-rfa-gsv",
    "name": "Radiofrequency Ablation (RFA / ClosureFast) of Great Saphenous Vein",
    "sourceFile": "category10_venous.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Venous Clinical Severity Score (VCSS - 10 Attributes)",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Villalta Scale for Post-Thrombotic Syndrome",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "cat10-foam-sclerotherapy",
    "name": "Ultrasound-Guided Foam Sclerotherapy (STS / Polidocanol) for Varicose Veins",
    "sourceFile": "category10_venous.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Venous Clinical Severity Score (VCSS - 10 Attributes)"
    ],
    "linkedCalculators": [
      "Villalta Scale for Post-Thrombotic Syndrome"
    ]
  },
  {
    "id": "cat10-perforator-sclerotherapy",
    "name": "Incompetent Perforator Vein Ultrasound-Guided Foam Sclerotherapy",
    "sourceFile": "category10_venous.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Venous Clinical Severity Score (VCSS - 10 Attributes)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Villalta Scale for Post-Thrombotic Syndrome",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat10-perforator-glue",
    "name": "Incompetent Perforator Vein Cyanoacrylate Glue Embolization",
    "sourceFile": "category10_venous.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Venous Clinical Severity Score (VCSS - 10 Attributes)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Villalta Scale for Post-Thrombotic Syndrome",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat10-varicose-embolization-microcoils",
    "name": "Varicose Vein Embolization using Microcoils",
    "sourceFile": "category10_venous.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Venous Clinical Severity Score (VCSS - 10 Attributes)"
    ],
    "linkedCalculators": [
      "Villalta Scale for Post-Thrombotic Syndrome"
    ]
  },
  {
    "id": "cat10-varicose-embolization-glue",
    "name": "Varicose Vein Embolization using Cyanoacrylate Glue (n-BCA)",
    "sourceFile": "category10_venous.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Venous Clinical Severity Score (VCSS - 10 Attributes)"
    ],
    "linkedCalculators": [
      "Villalta Scale for Post-Thrombotic Syndrome"
    ]
  },
  {
    "id": "cat10-varicose-embolization-coils-glue",
    "name": "Varicose Vein Embolization using Combined Microcoils Plus Cyanoacrylate Glue",
    "sourceFile": "category10_venous.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Venous Clinical Severity Score (VCSS - 10 Attributes)"
    ],
    "linkedCalculators": [
      "Villalta Scale for Post-Thrombotic Syndrome"
    ]
  },
  {
    "id": "cat10-dvt-cdt",
    "name": "Iliofemoral Deep Vein Thrombosis (DVT) Catheter-Directed Thrombolysis",
    "sourceFile": "category10_venous.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "cat10-may-thurner-stenting",
    "name": "May-Thurner Syndrome Balloon Angioplasty & Dedicated Venous Stenting",
    "sourceFile": "category10_venous.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "cat10-ivc-filter-placement",
    "name": "Inferior Vena Cava (IVC) Filter Placement (Infrarenal)",
    "sourceFile": "category10_venous.ts",
    "applicableClassifications": [
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "cat10-ivc-filter-retrieval",
    "name": "Percutaneous IVC Filter Retrieval (Standard / Complex)",
    "sourceFile": "category10_venous.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat10-svc-stenting",
    "name": "Superior Vena Cava (SVC) Syndrome Balloon Angioplasty & Dedicated Stenting",
    "sourceFile": "category10_venous.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat10-pe-cdt-ekos",
    "name": "Acute Pulmonary Embolism Ultrasound-Accelerated Thrombolysis (EKOS)",
    "sourceFile": "category10_venous.ts",
    "applicableClassifications": [
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat11-permacath-insertion",
    "name": "Right IJV Tunnelled Cuffed Hemodialysis Catheter (Permacath) Placement",
    "sourceFile": "category11_dialysis_access.ts",
    "applicableClassifications": [
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat11-avf-fistulogram-angioplasty",
    "name": "Diagnostic Fistulogram & High-Pressure Balloon Angioplasty for Dysfunctional AVF",
    "sourceFile": "category11_dialysis_access.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat11-central-venous-stenting",
    "name": "Central Venous Stenosis (CVS) Dedicated Stenting for Failing AVF",
    "sourceFile": "category11_dialysis_access.ts",
    "applicableClassifications": [
      "KDOQI Clinical Practice Guidelines for Vascular Access",
      "Ginsberg / SCVIR Dialysis AV Fistula Stenosis Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat12-intranodal-lymphangiography",
    "name": "Ultrasound-Guided Intranodal Lymphangiography with Lipiodol",
    "sourceFile": "category12_lymphatics.ts",
    "applicableClassifications": [
      "CIRSE / SIR Lymphatic Interventions Standards"
    ],
    "linkedCalculators": [
      "Chylothorax Drainage Severity & Lymphatic Leak Metric"
    ]
  },
  {
    "id": "cat12-thoracic-duct-embolization",
    "name": "Thoracic Duct Cannulation & Embolization with Microcoils and Onyx / Glue",
    "sourceFile": "category12_lymphatics.ts",
    "applicableClassifications": [
      "CIRSE / SIR Lymphatic Interventions Standards"
    ],
    "linkedCalculators": [
      "Chylothorax Drainage Severity & Lymphatic Leak Metric"
    ]
  },
  {
    "id": "cat13-vm-bleomycin",
    "name": "Percutaneous Sclerotherapy of Venous Malformations with Bleomycin",
    "sourceFile": "category13_anomalies.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat13-avm-onyx",
    "name": "High-Flow Arteriovenous Malformation (AVM) Transcatheter Embolization with Onyx",
    "sourceFile": "category13_anomalies.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma"
    ]
  },
  {
    "id": "cat13-pavm-plugs-coils",
    "name": "Pulmonary Arteriovenous Malformation (PAVM) Embolization with Vascular Plugs / Coils",
    "sourceFile": "category13_anomalies.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma"
    ]
  },
  {
    "id": "cat14-gae-knee-oa",
    "name": "Genicular Artery Embolization (GAE) for Mild-to-Moderate Knee Osteoarthritis",
    "sourceFile": "category14_msk.ts",
    "applicableClassifications": [
      "Kellgren-Lawrence Knee Osteoarthritis Radiographic Grading (Grades 0-4)"
    ],
    "linkedCalculators": [
      "WOMAC Osteoarthritis Index for Genicular Artery Embolization"
    ]
  },
  {
    "id": "cat14-frozen-shoulder-embolization",
    "name": "Shoulder / Adhesive Capsulitis (Frozen Shoulder) Embolization",
    "sourceFile": "category14_msk.ts",
    "applicableClassifications": [
      "Kellgren-Lawrence Knee Osteoarthritis Radiographic Grading (Grades 0-4)"
    ],
    "linkedCalculators": [
      "WOMAC Osteoarthritis Index for Genicular Artery Embolization"
    ]
  },
  {
    "id": "cat14-tennis-elbow-tame",
    "name": "Lateral Epicondylitis (Tennis Elbow) Transcatheter Arterial Micro-Embolization (TAME)",
    "sourceFile": "category14_msk.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat14-shoulder-barbotage",
    "name": "Ultrasound-Guided Barbotage & Lavage for Calcific Shoulder Tendinopathy",
    "sourceFile": "category14_msk.ts",
    "applicableClassifications": [
      "Kellgren-Lawrence Knee Osteoarthritis Radiographic Grading (Grades 0-4)"
    ],
    "linkedCalculators": [
      "WOMAC Osteoarthritis Index for Genicular Artery Embolization"
    ]
  },
  {
    "id": "cat15-pvp-vertebroplasty",
    "name": "Percutaneous Vertebroplasty (PVP) for Osteoporotic Vertebral Compression Fracture",
    "sourceFile": "category15_spine_pain.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "AO Spine Thoracolumbar Injury Classification",
      "Spine Instability Neoplastic Score (SINS - 6 Parameters)"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "SINS Spine Instability Decision Engine",
      "Palliative Prognostic Index (PPI) for Interventional Oncology"
    ]
  },
  {
    "id": "cat15-bkp-kyphoplasty",
    "name": "Balloon Kyphoplasty (BKP) for Thoracic / Lumbar Vertebral Compression Fracture",
    "sourceFile": "category15_spine_pain.ts",
    "applicableClassifications": [
      "AO Spine Thoracolumbar Injury Classification",
      "Spine Instability Neoplastic Score (SINS - 6 Parameters)"
    ],
    "linkedCalculators": [
      "SINS Spine Instability Decision Engine",
      "Palliative Prognostic Index (PPI) for Interventional Oncology"
    ]
  },
  {
    "id": "cat15-celiac-plexus-neurolysis",
    "name": "CT-Guided Percutaneous Celiac Plexus Neurolysis (CPN) for Pancreatic Cancer Pain",
    "sourceFile": "category15_spine_pain.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "Palliative Medicine / SIR Pain Standards"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Palliative Prognostic Index (PPI)",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "cat15-lumbar-transforaminal-esi",
    "name": "Lumbar Transforaminal Epidural Steroid Injection (TFESI) / Selective Nerve Root Block",
    "sourceFile": "category15_spine_pain.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat16-diagnostic-4v-dsa",
    "name": "Diagnostic 4-Vessel Cerebral Digital Subtraction Angiography (DSA)",
    "sourceFile": "category16_neuro.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat16-stroke-thrombectomy",
    "name": "Acute Ischemic Stroke: Mechanical Thrombectomy with Stent Retriever & Direct Aspiration",
    "sourceFile": "category16_neuro.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "cat16-aneurysm-coiling",
    "name": "Intracranial Aneurysm Endosaccular Coiling with Detachable Microcoils",
    "sourceFile": "category16_neuro.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score"
    ]
  },
  {
    "id": "cat16-mma-embolization",
    "name": "Middle Meningeal Artery (MMA) Embolization for Chronic Subdural Hematoma (cSDH)",
    "sourceFile": "category16_neuro.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma"
    ]
  },
  {
    "id": "cat16-carotid-stenting",
    "name": "Carotid Artery Stenting (CAS) with Distal Embolic Protection Device (EPD)",
    "sourceFile": "category16_neuro.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma"
    ]
  },
  {
    "id": "cat17-thyroid-rfa",
    "name": "Ultrasound-Guided Radiofrequency Ablation (RFA) of Benign Thyroid Nodules",
    "sourceFile": "category17_endocrine.ts",
    "applicableClassifications": [
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors",
      "EU-TIRADS / ACR-TIRADS Thyroid Nodule Ultrasound Staging"
    ],
    "linkedCalculators": [
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Thyroid Nodule Volume & Volume Reduction Ratio (VRR %)"
    ]
  },
  {
    "id": "cat17-avs-conn",
    "name": "Adrenal Vein Sampling (AVS) with Cosyntropin Stimulation for Primary Aldosteronism",
    "sourceFile": "category17_endocrine.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "cat18-uae-fibroids",
    "name": "Uterine Artery Embolization (UAE) for Symptomatic Uterine Fibroids",
    "sourceFile": "category18_gyn.ts",
    "applicableClassifications": [
      "FIGO Classification for Uterine Leiomyomas (Types 0-8)",
      "O-RADS / Pelvic Imaging Staging"
    ],
    "linkedCalculators": [
      "Uterine Fibroid Volume & Spherical Equivalence Calculator",
      "Shock Index (SI) for Post-Partum Hemorrhage"
    ]
  },
  {
    "id": "cat18-uae-pph-emergency",
    "name": "Emergency Uterine Artery Embolization for Severe Post-Partum Hemorrhage (PPH)",
    "sourceFile": "category18_gyn.ts",
    "applicableClassifications": [
      "FIGO Classification for Uterine Leiomyomas (Types 0-8)",
      "O-RADS / Pelvic Imaging Staging"
    ],
    "linkedCalculators": [
      "Uterine Fibroid Volume & Spherical Equivalence Calculator",
      "Shock Index (SI) for Post-Partum Hemorrhage"
    ]
  },
  {
    "id": "cat18-ove-pelvic-congestion",
    "name": "Ovarian Vein Embolization (OVE) with Coils & Sclerosant for Pelvic Congestion Syndrome",
    "sourceFile": "category18_gyn.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "Dubin-Amelar & Sarteschi Varicocele Grading",
      "SVP (Symptoms-Varices-Pathophysiology) Classification for Pelvic Venous Disorders"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "cat19-pcn-drainage",
    "name": "Percutaneous Nephrostomy (PCN) Placement under US & Fluoroscopy",
    "sourceFile": "category19_urology.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "cat19-pae-bph",
    "name": "Prostatic Artery Embolization (PAE) for Benign Prostatic Hyperplasia (BPH)",
    "sourceFile": "category19_urology.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "De Assis PAE Angiographic Classification (Types I-V Origins)",
      "AUA Guidelines for Benign Prostatic Hyperplasia"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "International Prostate Symptom Score (IPSS) & QoL",
      "Prostate Ellipsoid Volume & PSA Density Calculator"
    ]
  },
  {
    "id": "cat19-varicocele-embolization",
    "name": "Retrograde Transvenous Varicocele Embolization with Microcoils & Sclerosant",
    "sourceFile": "category19_urology.ts",
    "applicableClassifications": [
      "Dubin-Amelar & Sarteschi Varicocele Grading",
      "SVP (Symptoms-Varices-Pathophysiology) Classification for Pelvic Venous Disorders"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "cat20-prg-gastrostomy",
    "name": "Percutaneous Radiologic Gastrostomy (PRG) with T-Fastener Gastropexy",
    "sourceFile": "category20_gi_enteric.ts",
    "applicableClassifications": [
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "cat20-esophageal-sems",
    "name": "Covered Self-Expanding Metal Stent (SEMS) for Malignant Esophageal Obstruction",
    "sourceFile": "category20_gi_enteric.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat21-pda-closure",
    "name": "Patent Ductus Arteriosus (PDA) Transcatheter Closure with Plugs & Coils",
    "sourceFile": "category21_pediatric.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat21-intussusception-reduction",
    "name": "Fluoroscopy / US-Guided Air / Saline Hydrostatic Reduction of Intussusception",
    "sourceFile": "category21_pediatric.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat22-bariatric-embolization",
    "name": "Bariatric Embolization (Left Gastric Artery TAME) for Medically Refractory Obesity",
    "sourceFile": "category22_emerging.ts",
    "applicableClassifications": [
      "SIR / CIRSE Standard Practice Classification"
    ],
    "linkedCalculators": [
      "SIR Pre-Procedure Coagulation Safety Stratifier",
      "Cigarroa MACD Contrast Limit"
    ]
  },
  {
    "id": "cat22-histotripsy-liver",
    "name": "Histotripsy (Non-Thermal Focused Ultrasound Cavitation) of Liver Tumors",
    "sourceFile": "category22_emerging.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "CIRSE / SIR Image-Guided Tumor Ablation Standards",
      "TNM Staging System for Solid Tumors"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Thermal Ablation Margin (A0/A1) & Sphericity Index",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "carotid-artery-stenting-cas",
    "name": "Carotid Artery Angioplasty and Stenting (CAS) with Distal Embolic Protection",
    "sourceFile": "vascularAndAorticConsent.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma"
    ]
  },
  {
    "id": "acute-stroke-mechanical-thrombectomy",
    "name": "Acute Ischemic Stroke Endovascular Mechanical Thrombectomy (ADAPT / Solumbra)",
    "sourceFile": "vascularAndAorticConsent.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "avm-vascular-malformation-sclerotherapy",
    "name": "Peripheral Arteriovenous Malformation (AVM) / Vascular Malformation Sclerotherapy and Embolization",
    "sourceFile": "vascularAndAorticConsent.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "evar",
    "name": "Thoracic Endovascular Aortic Repair (TEVAR) for Descending Thoracic Aortic Aneurysm with Landing Zone Optimization",
    "sourceFile": "vascularAndAorticConsent.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "WHO Hydatid PAIR Eligibility Decision Engine"
    ]
  },
  {
    "id": "tevar",
    "name": "Fenestrated / Branched Endovascular Aortic Repair (FEVAR / BEVAR) for Juxtarenal and Thoracoabdominal Aneurysms",
    "sourceFile": "vascularAndAorticConsent.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "WHO-IWGE Echinococcal Hydatid Cyst Classification (CE1-CE5)",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Y90 Partition Model Dosimetry & Lung Shunt Fraction (LSF)",
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Caprini VTE Risk Score",
      "WHO Hydatid PAIR Eligibility Decision Engine",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "fevar",
    "name": "Chimney / Snorkel EVAR (ChEVAR) with Parallel Renal and Visceral Covered Stents",
    "sourceFile": "vascularAndAorticConsent.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "Society for Fetal Urology (SFU) Hydronephrosis Grading (Grades 0-4)",
      "Radermacher Renal Artery Resistive Index Guidelines"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Renal Artery Resistive Index (RI) & RAR Ratio",
      "SIR Pre-Procedure Coagulation Safety Stratifier"
    ]
  },
  {
    "id": "chevar",
    "name": "Percutaneous EVAR (PEVAR) with Totally Percutaneous Pre-Close Suture Technique",
    "sourceFile": "vascularAndAorticConsent.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "pevar",
    "name": "Bronchial Artery Embolization (BAE) for Massive Hemoptysis",
    "sourceFile": "vascularAndAorticConsent.ts",
    "applicableClassifications": [
      "Stanford & DeBakey Aortic Dissection Classification (Stanford A/B, DeBakey I-III)",
      "SVS/ESVS Aortic Neck Anatomical Suitability & Sizing Matrix",
      "Crawford Classification of Thoracoabdominal Aortic Aneurysms",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Davies-Elefteriades Aortic Size Index (ASI) & Rupture Risk",
      "Cigarroa MACD Contrast Limit",
      "Caprini VTE Risk Score",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "bae",
    "name": "Uterine Artery Embolization (UAE) for Primary Postpartum Hemorrhage (PPH) with Gelfoam Slurry",
    "sourceFile": "vascularAndAorticConsent.ts",
    "applicableClassifications": [
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "FIGO Classification for Uterine Leiomyomas (Types 0-8)",
      "O-RADS / Pelvic Imaging Staging"
    ],
    "linkedCalculators": [
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Uterine Fibroid Volume & Spherical Equivalence Calculator",
      "Shock Index (SI) for Post-Partum Hemorrhage"
    ]
  },
  {
    "id": "uae",
    "name": "Uterine Fibroid Embolization (UFE) using Calibrated Microspheres (500-700 / 700-900 um)",
    "sourceFile": "vascularAndAorticConsent.ts",
    "applicableClassifications": [
      "FIGO Classification for Uterine Leiomyomas (Types 0-8)",
      "O-RADS / Pelvic Imaging Staging"
    ],
    "linkedCalculators": [
      "Uterine Fibroid Volume & Spherical Equivalence Calculator",
      "Shock Index (SI) for Post-Partum Hemorrhage"
    ]
  },
  {
    "id": "ufe",
    "name": "Prostatic Artery Embolization (PAE) for Symptomatic BPH using 300-500 um Microspheres",
    "sourceFile": "vascularAndAorticConsent.ts",
    "applicableClassifications": [
      "FIGO Classification for Uterine Leiomyomas (Types 0-8)",
      "O-RADS / Pelvic Imaging Staging",
      "De Assis PAE Angiographic Classification (Types I-V Origins)",
      "AUA Guidelines for Benign Prostatic Hyperplasia"
    ],
    "linkedCalculators": [
      "Uterine Fibroid Volume & Spherical Equivalence Calculator",
      "Shock Index (SI) for Post-Partum Hemorrhage",
      "International Prostate Symptom Score (IPSS) & QoL",
      "Prostate Ellipsoid Volume & PSA Density Calculator"
    ]
  },
  {
    "id": "pae",
    "name": "Genicular Artery Embolization (GAE) for Refractory Knee Osteoarthritis Pain",
    "sourceFile": "vascularAndAorticConsent.ts",
    "applicableClassifications": [
      "Kellgren-Lawrence Knee Osteoarthritis Radiographic Grading (Grades 0-4)",
      "De Assis PAE Angiographic Classification (Types I-V Origins)",
      "AUA Guidelines for Benign Prostatic Hyperplasia"
    ],
    "linkedCalculators": [
      "WOMAC Osteoarthritis Index for Genicular Artery Embolization",
      "International Prostate Symptom Score (IPSS) & QoL",
      "Prostate Ellipsoid Volume & PSA Density Calculator"
    ]
  },
  {
    "id": "gae",
    "name": "Carotid Artery Angioplasty and Stenting (CAS) with Distal Embolic Protection",
    "sourceFile": "vascularAndAorticConsent.ts",
    "applicableClassifications": [
      "TASC II Classification for Femoropopliteal & Aortoiliac Lesions",
      "SVS WIfI Classification (Wound, Ischemia, foot Infection)",
      "Scapular & Subclavian Collateral Arcade (Steal Grades I-III)",
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "Kellgren-Lawrence Knee Osteoarthritis Radiographic Grading (Grades 0-4)"
    ],
    "linkedCalculators": [
      "Rutherford PAD & CLTI Clinical Staging (0-6)",
      "Ankle-Brachial Index (ABI) & Toe-Brachial Index (TBI)",
      "Fontaine Staging for Peripheral Arterial Disease",
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "WOMAC Osteoarthritis Index for Genicular Artery Embolization"
    ]
  },
  {
    "id": "carotid-stenting",
    "name": "Acute Ischemic Stroke Endovascular Mechanical Thrombectomy (ADAPT / Solumbra)",
    "sourceFile": "vascularAndAorticConsent.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "stroke-thrombectomy",
    "name": "Acute Ischemic Stroke Endovascular Mechanical Thrombectomy (ADAPT / Solumbra)",
    "sourceFile": "vascularAndAorticConsent.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "CEAP Classification for Chronic Venous Disorders (C0-C6)",
      "Niranjan / SIR May-Thurner Left Common Iliac Compression Grading"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Wells Clinical Score for Deep Vein Thrombosis",
      "Villalta Scale for Post-Thrombotic Syndrome (PTS)",
      "Caprini VTE Risk Score",
      "HAS-BLED Bleeding Risk in Catheter Thrombolysis"
    ]
  },
  {
    "id": "image-guided-core-needle-biopsy",
    "name": "Image-Guided Percutaneous Core Needle Biopsy (Liver, Kidney, Lung, Retroperitoneum, Soft Tissue)",
    "sourceFile": "venousAndDialysisConsent.ts",
    "applicableClassifications": [
      "Michels & Hiatt Hepatic Arterial Anatomy (Types I-X)",
      "BCLC 2022 Hepatocellular Carcinoma Staging",
      "Okuda & CLIP Staging Systems",
      "Mesenteric Collaterals (Arc of Riolan, Marginal Artery of Drummond, Arc of Buhler)",
      "Forrest Classification for Peptic Ulcer Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification"
    ],
    "linkedCalculators": [
      "Child-Pugh Score & ALBI Grade",
      "Cigarroa MACD Contrast Limit",
      "Rockall Risk Score for Upper GI Bleeding",
      "Glasgow-Blatchford Score (GBS) for Upper GI Hemorrhage",
      "Oakland Score for Acute Lower GI Bleeding",
      "Shock Index (SI) & Age-Adjusted SASI for Occult Hemorrhage",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism"
    ]
  },
  {
    "id": "vertebroplasty-kyphoplasty",
    "name": "Percutaneous Vertebroplasty / Balloon Kyphoplasty with PMMA Bone Cement",
    "sourceFile": "venousAndDialysisConsent.ts",
    "applicableClassifications": [
      "Spetzler-Martin Brain AVM Grading System (Grades I-V)",
      "Middle Meningeal Artery (MMA) Dangerous Anastomoses Checklist",
      "Schobinger Clinical Staging for Arteriovenous Malformations (Stages I-IV)",
      "Borden & Cognard Classification for Dural AV Fistulas",
      "Hunt & Hess Scale for Aneurysmal SAH",
      "Modified Fisher Scale for Subarachnoid Hemorrhage",
      "ESC / AHA Pulmonary Embolism Risk Stratification",
      "AO Spine Thoracolumbar Injury Classification",
      "Spine Instability Neoplastic Score (SINS - 6 Parameters)"
    ],
    "linkedCalculators": [
      "ASPECTS Score for Early Ischemic Stroke (0-10)",
      "NIH Stroke Scale (NIHSS)",
      "NASCET Carotid Artery Stenosis Measurement",
      "Markwalder Grading Scale for Chronic Subdural Hematoma",
      "Bova Score for Acute Pulmonary Embolism",
      "Simplified Pulmonary Embolism Severity Index (sPESI)",
      "Revised Geneva Score for Pulmonary Embolism",
      "SINS Spine Instability Decision Engine",
      "Palliative Prognostic Index (PPI) for Interventional Oncology"
    ]
  }
];

/**
 * Helper: Query all classifications and calculators applicable to a procedure ID or keyword.
 */
export function findProcedureClassifications(query: string): ProcedureClassificationEntry[] {
  const q = query.toLowerCase().trim();
  return ALL_PROCEDURE_CLASSIFICATIONS_REGISTRY.filter(
    p => p.id.toLowerCase().includes(q) ||
         p.name.toLowerCase().includes(q) ||
         p.applicableClassifications.some(c => c.toLowerCase().includes(q)) ||
         p.linkedCalculators.some(calc => calc.toLowerCase().includes(q))
  );
}

export function getProcedureClassificationById(id: string): ProcedureClassificationEntry | undefined {
  return ALL_PROCEDURE_CLASSIFICATIONS_REGISTRY.find(p => p.id === id);
}
