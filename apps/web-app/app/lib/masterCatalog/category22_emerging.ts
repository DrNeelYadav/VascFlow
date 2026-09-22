import { MasterProcedure } from './types';

/**
 * Category 22: Emerging & Novel Interventions (2 Procedures)
 * Strict Rajasthan MAAY / RGHS compatibility and SMS Medical College clinical protocols.
 */
export const CATEGORY_22_EMERGING: MasterProcedure[] = [
  {
    id: 'cat22-bariatric-embolization',
    categoryNumber: 22,
    categoryName: 'Emerging & Novel Interventions',
    title: 'Bariatric Embolization (Left Gastric Artery TAME) for Medically Refractory Obesity',
    maayRghsCompatibility: {
      schemeName: 'BOTH',
      packageName: 'Transcatheter Arterial Embolization (TAE)',
      packageCode: '1849-IN063A',
      icd10: 'E66.0',
      tariffInr: 40000,
    },
    modality: 'XA',
    targetAnatomy: ["Left Gastric Artery (LGA) Gastric Fundus Branches"],
    sedation: 'Local Anesthesia / Conscious Sedation',
    accessSiteDefault: 'Right CFA or Left Radial Artery',
    sheathDefault: '5F Sheath',
    cathetersAndWires: '5F Cobra, 2.0F microcatheter, 0.014" wire',
    microcatheterSystem: '2.0F microcatheter',
    embolicOrImplants: 'Calibrated Microspheres (Bead Block / Embozene 300-500um)',
    proceduralNarrativeTemplate:
      'Indicated for morbid obesity (BMI >35) failing lifestyle and medical management. Left radial/femoral access. Selective left gastric arteriography confirmed large fundic supply producing ghrelin hormone. 2.0F microcatheter navigated past esophageal collaterals deep into fundic mucosal branches. 300-500um calibrated microspheres slowly delivered until terminal fundic blush eliminated. Completion run demonstrated total devascularization of gastric fundic mucosa with preserved main LGA trunk. Suppression of systemic ghrelin anticipated.',
    postOpCare: {
      immobilizationHours: 4,
      immobilizationInstructions: 'Bedrest x 4 hours.',
      hematomaChecks: 'Monitor access site and upper abdominal comfort q30m x 2h.',
      requiredImaging: 'None routine.',
      hydrationProtocol: 'IV Normal Saline 75 mL/hr.',
      medications: ["Tab Pantoprazole 40mg BD x 1 month", "Tab Paracetamol 650mg TDS PRN"],
      redFlags: ["Gastric fundic mucosal ulceration", "Nausea / vomiting", "Puncture hematoma"],
    },
    consentId: 'consent-bariatric-embolization',
  },
  {
    id: 'cat22-histotripsy-liver',
    categoryNumber: 22,
    categoryName: 'Emerging & Novel Interventions',
    title: 'Histotripsy (Non-Thermal Focused Ultrasound Cavitation) of Liver Tumors',
    maayRghsCompatibility: {
      schemeName: 'BOTH',
      packageName: 'Percutaneous Tumor Cavitation / Ablation',
      packageCode: '1849-MG083A',
      icd10: 'C22.0',
      tariffInr: 50000,
    },
    modality: 'US',
    targetAnatomy: ["Liver Segmental Malignancy"],
    sedation: 'Local Anesthesia / Conscious Sedation',
    accessSiteDefault: 'Extracorporeal non-invasive ultrasound transducer coupling',
    sheathDefault: 'N/A',
    cathetersAndWires: 'Edison Histotripsy Robotic System, acoustic coupling water basin, real-time coaxial US guidance',
    microcatheterSystem: 'N/A',
    embolicOrImplants: 'N/A',
    proceduralNarrativeTemplate:
      'Under general anesthesia with neuromuscular blockade. Patient positioned beneath degassed water bath. Extracorporeal robotic histotripsy transducer coupled to patient abdomen. Target 3.0cm liver lesion localized on real-time coaxial ultrasound. Millisecond microsecond acoustic pulses delivered generating high-amplitude bubble clouds (acoustic cavitation). Bubble cloud mechanically homogenized tumor cells into subcellular acellular liquid debris without heat generation, strictly sparing collagenous bile ducts and vessels within margin. Real-time sonography verified instantaneous loss of echogenicity in target volume.',
    postOpCare: {
      immobilizationHours: 2,
      immobilizationInstructions: 'Recovery monitoring x 2 hours.',
      hematomaChecks: 'Vitals and abdominal pain check q30m x 2h.',
      requiredImaging: 'Contrast MRI Liver at 24 hours to confirm complete avascular liquefaction.',
      hydrationProtocol: 'Oral fluids.',
      medications: ["Tab Paracetamol 650mg TDS"],
      redFlags: ["Transient liver enzyme elevation", "Hematoma", "Incomplete cavitation"],
    },
    consentId: 'consent-tumor-ablation',
  },
];
