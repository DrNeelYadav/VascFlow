import { MasterProcedure } from './types';

/**
 * Category 12: Lymphatic Interventions (2 Procedures)
 * Strict Rajasthan MAAY / RGHS compatibility and SMS Medical College clinical protocols.
 */
export const CATEGORY_12_LYMPHATICS: MasterProcedure[] = [
  {
    id: 'cat12-intranodal-lymphangiography',
    categoryNumber: 12,
    categoryName: 'Lymphatic Interventions',
    title: 'Ultrasound-Guided Intranodal Lymphangiography with Lipiodol',
    maayRghsCompatibility: {
      schemeName: 'BOTH',
      packageName: 'Lymphangiography',
      packageCode: '1849-IN065A',
      icd10: 'I89.8',
      tariffInr: 18000,
    },
    modality: 'XA',
    targetAnatomy: ["Bilateral Inguinal Lymph Nodes", "Cisterna Chyli", "Thoracic Duct"],
    sedation: 'Local Anesthesia with Conscious Sedation',
    accessSiteDefault: 'Bilateral superficial inguinal lymph node hilum under ultrasound',
    sheathDefault: '25G - 27G Butterfly Needle',
    cathetersAndWires: 'High-frequency ultrasound probe, infusion pump, Lipiodol Ultra-Fluid (10-15 mL)',
    microcatheterSystem: 'N/A',
    embolicOrImplants: 'Ethiodized Oil (Lipiodol Ultra-Fluid)',
    proceduralNarrativeTemplate:
      'Indicated for localization of high-output chylothorax or chylous ascites. High-frequency ultrasound identified bilateral superficial inguinal lymph nodes. 25G butterfly needle advanced under real-time ultrasound into the transitional zone between cortex and hilum. Injection of Lipiodol at 0.2 - 0.4 mL/min using dedicated infusion pump. Serial fluoroscopy tracked opacification of iliac lymphatics, cisterna chyli (at L1-L2), and thoracic duct. Pathological chylous leak identified at mid-thoracic level.',
    postOpCare: {
      immobilizationHours: 4,
      immobilizationInstructions: 'Strict flat bedrest x 4 hours.',
      hematomaChecks: 'Inspect bilateral groin puncture sites q30m x 2h.',
      requiredImaging: 'Erect Chest Radiograph at 4 hours to verify thoracic duct anatomy and rule out pulmonary oil embolization.',
      hydrationProtocol: 'Oral fluids.',
      medications: ["Tab Paracetamol 650mg SOS"],
      redFlags: ["Pulmonary oil microembolization / hypoxia", "Hypersensitivity to Lipiodol", "Groin lymphocele"],
    },
    consentId: 'consent-lymphangiography',
  },
  {
    id: 'cat12-thoracic-duct-embolization',
    categoryNumber: 12,
    categoryName: 'Lymphatic Interventions',
    title: 'Thoracic Duct Cannulation & Embolization with Microcoils and Onyx / Glue',
    maayRghsCompatibility: {
      schemeName: 'BOTH',
      packageName: 'Percutaneous Lymphatic Embolization',
      packageCode: '1849-IN063A',
      icd10: 'I89.8',
      tariffInr: 45000,
    },
    modality: 'XA',
    targetAnatomy: ["Cisterna Chyli", "Thoracic Duct Trunk"],
    sedation: 'Local Anesthesia with Conscious Sedation',
    accessSiteDefault: 'Transabdominal anterior puncture under fluoroscopic roadmapping',
    sheathDefault: '21G 15cm Chiba Needle',
    cathetersAndWires: '0.014" microguidewire, 2.0F - 2.4F microcatheter, microcoils (2-4mm), Onyx 18 or n-BCA glue',
    microcatheterSystem: '2.0F microcatheter',
    embolicOrImplants: 'Detachable Microcoils (2-3mm) + Liquid Embolic (Onyx 18 / n-BCA)',
    proceduralNarrativeTemplate:
      'Indicated for intractable high-output traumatic/iatrogenic chylothorax (>1000 mL/day). Following intranodal Lipiodol opacification, cisterna chyli and retroperitoneal lymphatics visualized at L1-L2. Transabdominal puncture performed with 21G Chiba needle directly into cisterna chyli under biplane fluoroscopy. 0.014" microguidewire manipulated cephalad into main thoracic duct. 2.0F microcatheter advanced past aortic hiatus to just below leak level. Thoracic ductogram delineated exact disruption. Microcatheter positioned; multiple 2mm-3mm detachable microcoils deployed followed by Onyx-18 / n-BCA liquid embolic cast. Completion lymphangiogram showed complete occlusion of duct without further mediastinal extravasation. Chest tube output dropped to zero within 24 hours.',
    postOpCare: {
      immobilizationHours: 6,
      immobilizationInstructions: 'Strict supine flat bedrest x 6 hours.',
      hematomaChecks: 'Monitor vitals, puncture site, and chest tube drainage q30m x 2h, then q1h.',
      requiredImaging: 'Erect Chest X-ray at 2 to 4 hours post-procedure to monitor pneumothorax/hemothorax.',
      hydrationProtocol: 'IV Normal Saline 75-100 mL/hr.',
      medications: ["IV Ceftriaxone 1g BD", "Tab Paracetamol 650mg TDS"],
      redFlags: ["Pneumothorax", "Bowel perforation", "Non-target glue/Onyx migration"],
    },
    consentId: 'consent-lymphatic-embolization',
  },
];
