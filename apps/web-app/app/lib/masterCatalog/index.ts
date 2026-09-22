import { MasterProcedure, MasterCategoryMeta, MaayRghsScheme } from './types';
import { CATEGORY_01_BIOPSIES } from './category01_biopsies';
import { CATEGORY_02_DRAINAGES } from './category02_drainages';
import { CATEGORY_03_HPB_PORTAL } from './category03_hpb_portal';
import { CATEGORY_04_ARTERIAL } from './category04_arterial';
import { CATEGORY_05_AORTIC } from './category05_aortic';
import { CATEGORY_06_VISCERAL_RENAL } from './category06_visceral_renal';
import { CATEGORY_07_EMBOLOTHERAPY } from './category07_embolotherapy';
import { CATEGORY_08_IO_TRANSCATHETER } from './category08_io_transcatheter';
import { CATEGORY_09_IO_ABLATION } from './category09_io_ablation';
import { CATEGORY_10_VENOUS } from './category10_venous';
import { CATEGORY_11_DIALYSIS_ACCESS } from './category11_dialysis_access';
import { CATEGORY_12_LYMPHATICS } from './category12_lymphatics';
import { CATEGORY_13_ANOMALIES } from './category13_anomalies';
import { CATEGORY_14_MSK } from './category14_msk';
import { CATEGORY_15_SPINE_PAIN } from './category15_spine_pain';
import { CATEGORY_16_NEURO } from './category16_neuro';
import { CATEGORY_17_ENDOCRINE } from './category17_endocrine';
import { CATEGORY_18_GYN } from './category18_gyn';
import { CATEGORY_19_UROLOGY } from './category19_urology';
import { CATEGORY_20_GI_ENTERIC } from './category20_gi_enteric';
import { CATEGORY_21_PEDIATRIC } from './category21_pediatric';
import { CATEGORY_22_EMERGING } from './category22_emerging';

export * from './types';
export * from './operativeNoteGenerator';
export { CATEGORY_01_BIOPSIES } from './category01_biopsies';
export { CATEGORY_02_DRAINAGES } from './category02_drainages';
export { CATEGORY_03_HPB_PORTAL } from './category03_hpb_portal';
export { CATEGORY_04_ARTERIAL } from './category04_arterial';
export { CATEGORY_05_AORTIC } from './category05_aortic';
export { CATEGORY_06_VISCERAL_RENAL } from './category06_visceral_renal';
export { CATEGORY_07_EMBOLOTHERAPY } from './category07_embolotherapy';
export { CATEGORY_08_IO_TRANSCATHETER } from './category08_io_transcatheter';
export { CATEGORY_09_IO_ABLATION } from './category09_io_ablation';
export { CATEGORY_10_VENOUS } from './category10_venous';
export { CATEGORY_11_DIALYSIS_ACCESS } from './category11_dialysis_access';
export { CATEGORY_12_LYMPHATICS } from './category12_lymphatics';
export { CATEGORY_13_ANOMALIES } from './category13_anomalies';
export { CATEGORY_14_MSK } from './category14_msk';
export { CATEGORY_15_SPINE_PAIN } from './category15_spine_pain';
export { CATEGORY_16_NEURO } from './category16_neuro';
export { CATEGORY_17_ENDOCRINE } from './category17_endocrine';
export { CATEGORY_18_GYN } from './category18_gyn';
export { CATEGORY_19_UROLOGY } from './category19_urology';
export { CATEGORY_20_GI_ENTERIC } from './category20_gi_enteric';
export { CATEGORY_21_PEDIATRIC } from './category21_pediatric';
export { CATEGORY_22_EMERGING } from './category22_emerging';

import { FULL_1120_MASTER_PROCEDURES } from './fullMasterCatalog1120';
export { FULL_1120_MASTER_PROCEDURES } from './fullMasterCatalog1120';

const MODULAR_PROCEDURES: MasterProcedure[] = [
  ...CATEGORY_01_BIOPSIES,
  ...CATEGORY_02_DRAINAGES,
  ...CATEGORY_03_HPB_PORTAL,
  ...CATEGORY_04_ARTERIAL,
  ...CATEGORY_05_AORTIC,
  ...CATEGORY_06_VISCERAL_RENAL,
  ...CATEGORY_07_EMBOLOTHERAPY,
  ...CATEGORY_08_IO_TRANSCATHETER,
  ...CATEGORY_09_IO_ABLATION,
  ...CATEGORY_10_VENOUS,
  ...CATEGORY_11_DIALYSIS_ACCESS,
  ...CATEGORY_12_LYMPHATICS,
  ...CATEGORY_13_ANOMALIES,
  ...CATEGORY_14_MSK,
  ...CATEGORY_15_SPINE_PAIN,
  ...CATEGORY_16_NEURO,
  ...CATEGORY_17_ENDOCRINE,
  ...CATEGORY_18_GYN,
  ...CATEGORY_19_UROLOGY,
  ...CATEGORY_20_GI_ENTERIC,
  ...CATEGORY_21_PEDIATRIC,
  ...CATEGORY_22_EMERGING,
];

const procedureMap = new Map<string, MasterProcedure>();
FULL_1120_MASTER_PROCEDURES.forEach((p) => procedureMap.set(p.id, p));
MODULAR_PROCEDURES.forEach((p) => procedureMap.set(p.id, p));

/**
 * Master catalog containing all procedures across all 22 Interventional Radiology categories.
 * Encompasses both the specialized modular suites and the full 1,120 procedural corpus.
 */
export const ALL_MASTER_PROCEDURES: MasterProcedure[] = Array.from(procedureMap.values());


/**
 * Metadata descriptions for all 22 IR categories.
 */
export const MASTER_CATEGORIES_METADATA: MasterCategoryMeta[] = [
  {
    categoryNumber: 1,
    categoryName: 'Image-Guided Percutaneous Biopsies & Cytology',
    shortCode: 'BIOPSY',
    description: 'Percutaneous organ core biopsies and cytology across all anatomical systems under US, CT, and fluoroscopy.',
    procedureCount: CATEGORY_01_BIOPSIES.length,
  },
  {
    categoryNumber: 2,
    categoryName: 'Catheter Drainages, Fluid Aspiration & Stenting',
    shortCode: 'DRAIN',
    description: 'Catheter drainages for abscesses, ascites, pleural collections, and fluid sclerosis.',
    procedureCount: CATEGORY_02_DRAINAGES.length,
  },
  {
    categoryNumber: 3,
    categoryName: 'Hepatobiliary & Portal Interventions',
    shortCode: 'HPB_PORTAL',
    description: 'PTBD, biliary stenting, TIPS, DIPS, Budd-Chiari recanalization/stenting, BRTO, PARTO, and variceal/collateral glue and coil embolization.',
    procedureCount: CATEGORY_03_HPB_PORTAL.length,
  },
  {
    categoryNumber: 4,
    categoryName: 'Lower Extremity & Arterial Revascularization',
    shortCode: 'ARTERIAL',
    description: 'Peripheral runoff, POBA, DCB, CERAB, Viabahn, Supera, atherectomy, IVL lithotripsy, and CDT.',
    procedureCount: CATEGORY_04_ARTERIAL.length,
  },
  {
    categoryNumber: 5,
    categoryName: 'Aortic & Great Vessels',
    shortCode: 'AORTIC',
    description: 'TEVAR, EVAR, PEVAR Pre-close, FEVAR, BEVAR, and Type I-IV endoleak translumbar/transcatheter embolization.',
    procedureCount: CATEGORY_05_AORTIC.length,
  },
  {
    categoryNumber: 6,
    categoryName: 'Visceral & Renal Arteries',
    shortCode: 'VISCERAL',
    description: 'Renal angioplasty, stenting, aneurysm coiling, renal denervation (RDN), SMA stenting, and ROMS.',
    procedureCount: CATEGORY_06_VISCERAL_RENAL.length,
  },
  {
    categoryNumber: 7,
    categoryName: 'Embolotherapy Trauma & Hemorrhage',
    shortCode: 'EMBOLO',
    description: 'BAE hemoptysis, GI bleed sandwich coiling, liver/splenic/pelvic trauma embolization, and UGTI thrombin.',
    procedureCount: CATEGORY_07_EMBOLOTHERAPY.length,
  },
  {
    categoryNumber: 8,
    categoryName: 'Interventional Oncology Transcatheter Therapies',
    shortCode: 'IO_TRANS',
    description: 'cTACE, DEB-TACE, B-TACE, TARE Y90 glass/resin, and intra-arterial chemotherapy.',
    procedureCount: CATEGORY_08_IO_TRANSCATHETER.length,
  },
  {
    categoryNumber: 9,
    categoryName: 'Interventional Oncology Percutaneous Ablation',
    shortCode: 'IO_ABL',
    description: 'MWA, RFA, cryoablation, and irreversible electroporation for liver, lung, renal, and bone tumors.',
    procedureCount: CATEGORY_09_IO_ABLATION.length,
  },
  {
    categoryNumber: 10,
    categoryName: 'Venous Interventions',
    shortCode: 'VENOUS',
    description: 'VenaSeal, EVLA, RFA, foam sclerotherapy, perforator glue/sclero, varicose vein microcoils/glue, DVT CDT, May-Thurner stenting, IVC filters, and PE thrombolysis.',
    procedureCount: CATEGORY_10_VENOUS.length,
  },
  {
    categoryNumber: 11,
    categoryName: 'Central Venous Access & Hemodialysis',
    shortCode: 'DIALYSIS',
    description: 'Permacath, PICC, Chemoport, fistulogram, AVF angioplasty, declotting, CVS stenting, and EndoAVF.',
    procedureCount: CATEGORY_11_DIALYSIS_ACCESS.length,
  },
  {
    categoryNumber: 12,
    categoryName: 'Lymphatic Interventions',
    shortCode: 'LYMPH',
    description: 'Intranodal lymphangiography, thoracic duct embolization with coils and Onyx/glue, and chyluria embolization.',
    procedureCount: CATEGORY_12_LYMPHATICS.length,
  },
  {
    categoryNumber: 13,
    categoryName: 'Vascular Anomalies & Malformations',
    shortCode: 'ANOMALIES',
    description: 'Venous malformation bleomycin/STS sclerosis, high-flow AVM Onyx/glue, and PAVM closure.',
    procedureCount: CATEGORY_13_ANOMALIES.length,
  },
  {
    categoryNumber: 14,
    categoryName: 'MSK Embolization & Sports Medicine',
    shortCode: 'MSK',
    description: 'Genicular artery embolization (GAE) for knee OA, frozen shoulder embolization, TAME, and barbotage.',
    procedureCount: CATEGORY_14_MSK.length,
  },
  {
    categoryNumber: 15,
    categoryName: 'Spine & Pain Interventions',
    shortCode: 'SPINE_PAIN',
    description: 'Vertebroplasty (PVP), Kyphoplasty (BKP), celiac plexus neurolysis, and transforaminal ESI.',
    procedureCount: CATEGORY_15_SPINE_PAIN.length,
  },
  {
    categoryNumber: 16,
    categoryName: 'Neurovascular Interventions',
    shortCode: 'NEURO',
    description: '4-vessel cerebral DSA, acute stroke thrombectomy, aneurysm coiling, MMA embolization, and CAS.',
    procedureCount: CATEGORY_16_NEURO.length,
  },
  {
    categoryNumber: 17,
    categoryName: 'Endocrine, Head & Neck Interventions',
    shortCode: 'ENDOCRINE',
    description: 'Thyroid RFA, adrenal vein sampling (AVS), and parathyroid interventions.',
    procedureCount: CATEGORY_17_ENDOCRINE.length,
  },
  {
    categoryNumber: 18,
    categoryName: 'Gynecological & Obstetric Interventions',
    shortCode: 'GYN',
    description: 'UAE for fibroids, emergency UAE for PPH, ovarian vein embolization (OVE), and FTR.',
    procedureCount: CATEGORY_18_GYN.length,
  },
  {
    categoryNumber: 19,
    categoryName: 'Urological Interventions',
    shortCode: 'UROLOGY',
    description: 'PCN, prostatic artery embolization (PAE) for BPH, and varicocele coil/sclerosant embolization.',
    procedureCount: CATEGORY_19_UROLOGY.length,
  },
  {
    categoryNumber: 20,
    categoryName: 'Gastrointestinal & Enteric Interventions',
    shortCode: 'GI_ENTERIC',
    description: 'Percutaneous radiologic gastrostomy (PRG) with T-fasteners and covered esophageal/colonic SEMS.',
    procedureCount: CATEGORY_20_GI_ENTERIC.length,
  },
  {
    categoryNumber: 21,
    categoryName: 'Pediatric Interventions',
    shortCode: 'PEDIATRIC',
    description: 'PDA closure, coarctation stenting, intussusception pneumatic reduction, and pediatric vascular access.',
    procedureCount: CATEGORY_21_PEDIATRIC.length,
  },
  {
    categoryNumber: 22,
    categoryName: 'Emerging & Novel Interventions',
    shortCode: 'EMERGING',
    description: 'Bariatric embolization (TAME), histotripsy non-thermal cavitation, and bioresorbable scaffolds.',
    procedureCount: CATEGORY_22_EMERGING.length,
  },
];

/**
 * Retrieve a procedure by its unique ID.
 */
export function getMasterProcedureById(id: string): MasterProcedure | undefined {
  return ALL_MASTER_PROCEDURES.find((p) => p.id === id);
}

/**
 * Get all procedures within a specific category (1 to 22).
 */
export function getProceduresByCategory(categoryNumber: number): MasterProcedure[] {
  return ALL_MASTER_PROCEDURES.filter((p) => p.categoryNumber === categoryNumber);
}

/**
 * Filter and search master procedures by text query, category, and scheme compatibility.
 */
export function searchMasterProcedures(
  query: string,
  categoryFilter?: number,
  schemeFilter?: 'MAAY' | 'RGHS' | 'ALL'
): MasterProcedure[] {
  const q = query.trim().toLowerCase();
  return ALL_MASTER_PROCEDURES.filter((p) => {
    // Category filter
    if (categoryFilter !== undefined && categoryFilter > 0 && p.categoryNumber !== categoryFilter) {
      return false;
    }

    // Scheme filter
    if (schemeFilter && schemeFilter !== 'ALL') {
      const pScheme = p.maayRghsCompatibility.schemeName;
      if (pScheme !== 'BOTH' && pScheme !== schemeFilter) {
        return false;
      }
    }

    // Text query
    if (!q) return true;

    return (
      p.title.toLowerCase().includes(q) ||
      p.categoryName.toLowerCase().includes(q) ||
      p.maayRghsCompatibility.packageName.toLowerCase().includes(q) ||
      p.maayRghsCompatibility.packageCode.toLowerCase().includes(q) ||
      p.maayRghsCompatibility.icd10.toLowerCase().includes(q) ||
      p.targetAnatomy.some((a) => a.toLowerCase().includes(q))
    );
  });
}
