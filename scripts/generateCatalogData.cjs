const fs = require('fs');
const path = require('path');

const legacyPath = 'C:/Users/NEEL/IR_CathLab_RIS_App/ir_procedures_catalog.js';
const legacyContent = fs.readFileSync(legacyPath, 'utf8');

const match = legacyContent.match(/const IR_PROCEDURES_CATALOG = (\[[\s\S]*\]);/);
if (!match) {
  console.error('Could not parse IR_PROCEDURES_CATALOG from legacy file.');
  process.exit(1);
}

const rawCatalog = eval(match[1]);

function mapDomain(category) {
  switch (category) {
    case 'Vascular Embolization & Hemorrhage':
      return 'embolization';
    case 'Portal Hypertension & Hepatobiliary':
      return 'portal_htn';
    case 'Interventional Oncology':
      return 'oncology';
    case 'Venous Access & Dialysis':
      return 'venous';
    case 'Arterial & Aortic Interventions':
      return 'arterial';
    case 'Biopsies, Drainage & Pain':
      return 'biopsy';
    default:
      return 'embolization';
  }
}

const mappedCatalog = rawCatalog.map(p => ({
  key: p.key,
  title: p.title,
  category: p.category,
  domain: mapDomain(p.category),
  modality: p.modality,
  targetVessels: p.targetVessels || [],
  defaultPanelCostINR: p.defaultPanelCostINR || 25000,
  requiredLabs: p.requiredLabs || [],
  clinicalCriteria: p.clinicalCriteria || '',
  preOpChecklist: p.preOpChecklist || [],
  hardwareRequisition: p.hardwareRequisition || []
}));

// Add the 5 procedures to reach exactly 100 procedures:
const additionalProcedures = [
  {
    key: 'variceal_bleed_brto_emergency',
    title: 'Acute Variceal Bleed: Emergency TIPS / BRTO Hybrid Decompression',
    category: 'Portal Hypertension & Hepatobiliary',
    domain: 'portal_htn',
    modality: 'XA',
    targetVessels: ['Left Gastric Vein', 'Gastrorenal Shunt', 'Splenic Vein', 'Portal Vein'],
    defaultPanelCostINR: 65000,
    requiredLabs: ['CBC (Hb, Platelets)', 'PT / INR', 'Liver Function Tests', 'Serum Creatinine', 'Emergency UGIE'],
    clinicalCriteria: 'Active refractory gastric/esophageal variceal hemorrhage uncontrolled by pharmacological therapy and endoscopic band ligation.',
    preOpChecklist: [
      { id: 'vbrto_airway', label: 'Airway secured with endotracheal intubation in ICU', required: true },
      { id: 'vbrto_resusc', label: 'Massive transfusion protocol initiated with PRBCs and FFP', required: true },
      { id: 'vbrto_shunt', label: 'Contrast-enhanced cross-sectional imaging reviewed for gastrorenal collateral', required: true }
    ],
    hardwareRequisition: [
      { item: 'Vascular Access', desc: '10F 45cm Ansel/Flexor guiding sheath' },
      { item: 'Occlusion Balloon', desc: 'Coda 9F/10F 32mm balloon catheter for shunt occlusion' },
      { item: 'Sclerosant Delivery', desc: '3% Sodium Tetradecyl Sulfate (STS) foam / Lipiodol emulsion' },
      { item: 'TIPS Endoprosthesis', desc: 'Gore Viatorr 10mm dia covered stent-graft' }
    ]
  },
  {
    key: 'microwave_ablation_lung',
    title: 'Percutaneous Microwave Ablation (MWA) for Primary / Oligometastatic Lung Neoplasm',
    category: 'Interventional Oncology',
    domain: 'oncology',
    modality: 'CT',
    targetVessels: ['Pulmonary Vasculature Avoidance Zone', 'Bronchial Margins'],
    defaultPanelCostINR: 52000,
    requiredLabs: ['Chest CT with Contrast', 'Pulmonary Function Tests (FEV1, DLCO)', 'PT / INR', 'CBC'],
    clinicalCriteria: 'Medically inoperable early-stage NSCLC or oligometastatic pulmonary metastases (<3 cm) with preserved pulmonary reserve.',
    preOpChecklist: [
      { id: 'mwa_pft', label: 'PFTs reviewed confirming adequate baseline respiratory reserve', required: true },
      { id: 'mwa_pneumo', label: 'Pneumothorax kit and chest tube drainage set available at bedside', required: true },
      { id: 'mwa_coag', label: 'Platelet count > 50,000/uL and INR < 1.5 confirmed', required: true }
    ],
    hardwareRequisition: [
      { item: 'MWA Generator & Antenna', desc: 'NeuWave / Emprint 2.45 GHz high-frequency cooled microwave antenna' },
      { item: 'CT Navigation Grid', desc: 'Laser-guided CT stereotactic positioning grid' },
      { item: 'Chest Tube Set', desc: '12F Seldinger chest drainage set with Heimlich valve' }
    ]
  },
  {
    key: 'evla_varicose_veins',
    title: 'Endovenous Laser Ablation (EVLA) & Radiofrequency for Great Saphenous Vein Insufficiency',
    category: 'Venous Access & Dialysis',
    domain: 'venous',
    modality: 'US',
    targetVessels: ['Great Saphenous Vein', 'Saphenofemoral Junction', 'Anterior Accessory Saphenous Vein'],
    defaultPanelCostINR: 35000,
    requiredLabs: ['Venous Duplex Ultrasound (Reflux Mapping)', 'CBC', 'Coagulation Profile'],
    clinicalCriteria: 'Symptomatic CEAP C2-C6 chronic venous insufficiency with documented saphenofemoral junction reflux >0.5 seconds.',
    preOpChecklist: [
      { id: 'evla_duplex', label: 'Venous duplex standing ultrasound mapped and vein trajectory marked on skin', required: true },
      { id: 'evla_tumescent', label: 'Tumescent anesthesia fluid (0.1% lidocaine with epinephrine and bicarbonate) prepared', required: true },
      { id: 'evla_nerve', label: 'Saphenous nerve proximity checked at mid-calf segment', required: true }
    ],
    hardwareRequisition: [
      { item: 'Laser / RFA System', desc: '1470nm Radial fiber or ClosureFast RFA catheter' },
      { item: 'Ultrasound Guidance', desc: 'High-frequency 10-15 MHz linear ultrasound probe with sterile sleeve' },
      { item: 'Compression Garment', desc: 'Class II (20-30 mmHg) graduated thigh-high compression stocking' }
    ]
  },
  {
    key: 'subclavian_carotid_transposition_tevar',
    title: 'Complex TEVAR with Subclavian Revascularization / Chimney Stenting',
    category: 'Arterial & Aortic Interventions',
    domain: 'arterial',
    modality: 'XA',
    targetVessels: ['Aortic Arch (Zone 2)', 'Left Subclavian Artery', 'Left Common Carotid Artery'],
    defaultPanelCostINR: 125000,
    requiredLabs: ['ECG-Gated Thoracic CTA', 'Carotid & Vertebral Doppler', 'Blood Crossmatch (4 Units)', 'Creatinine'],
    clinicalCriteria: 'Thoracic aortic aneurysm or Type B aortic dissection requiring landing in Zone 2 with intentional subclavian artery coverage and chimney revascularization.',
    preOpChecklist: [
      { id: 'tevar_vertebral', label: 'Dominant vertebral artery confirmed on CTA prior to subclavian manipulation', required: true },
      { id: 'tevar_csf', label: 'Lumbar CSF drain placed for spinal cord neuroprotection if indicated', required: true },
      { id: 'tevar_cutdown', label: 'Bilateral femoral / left brachial artery access sites prepped', required: true }
    ],
    hardwareRequisition: [
      { item: 'Thoracic Stent-Graft', desc: 'Gore TAG / Medtronic Valiant thoracic endoprosthesis' },
      { item: 'Chimney Stent', desc: 'Viabahn / BeGraft peripheral covered stent (8-10mm dia)' },
      { item: 'Delivery Sheaths', desc: '20F-24F DrySeal hydrophilic introducer sheath + 8F brachial sheath' },
      { item: 'Guidewires', desc: '0.035" Lunderquist Extra-Stiff 260cm guidewire' }
    ]
  },
  {
    key: 'percutaneous_gastrojejunostomy_prgj',
    title: 'Percutaneous Radiologic Gastrojejunostomy (PRGJ) for Enteral Nutrition',
    category: 'Biopsies, Drainage & Pain',
    domain: 'biopsy',
    modality: 'FL',
    targetVessels: ['Gastric Antrum', 'Proximal Jejunum (Post-Ligament of Treitz)'],
    defaultPanelCostINR: 28000,
    requiredLabs: ['CBC', 'PT / INR', 'Platelet Count', 'Upper Abdomen Cross-Sectional Imaging'],
    clinicalCriteria: 'Severe gastric motility disorder, gastroparesis, or recurrent aspiration risk requiring trans-gastric jejunal enteral feeding tube placement under fluoroscopic guidance.',
    preOpChecklist: [
      { id: 'prgj_fasting', label: 'NPO for >= 8 hours confirmed', required: true },
      { id: 'prgj_insufflate', label: 'Nasogastric tube in place for gastric air insufflation', required: true },
      { id: 'prgj_colon', label: 'Bowel loops positioned inferiorly away from anterior gastric wall', required: true }
    ],
    hardwareRequisition: [
      { item: 'Gastropexy Kit', desc: 'Saf-T-Pexy T-fastener kit (3-4 suture anchors)' },
      { item: 'Guidewires & Catheters', desc: '0.035" Rosen wire + 5F Kumpe / Cobra catheter' },
      { item: 'Jejunal Feeding Tube', desc: '14F-18F dual-lumen Gastrojejunostomy tube with balloon retention' }
    ]
  }
];

const fullCatalog = [...mappedCatalog, ...additionalProcedures];

console.log('Total procedures count:', fullCatalog.length);

const outContent = `import { IRProcedure } from "./types";

/**
 * Complete 100 Interventional Radiology Procedures Catalog
 * SMS Medical College & Attached Hospitals, Jaipur
 * Production-ready dataset across 6 clinical domains.
 */
export const IR_PROCEDURES_CATALOG: IRProcedure[] = ${JSON.stringify(fullCatalog, null, 2)};
`;

fs.writeFileSync('C:/SSO/packages/catalog/src/proceduresData.ts', outContent, 'utf8');
console.log('Successfully written packages/catalog/src/proceduresData.ts');
