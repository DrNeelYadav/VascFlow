import { MasterProcedure } from './types';

/**
 * Category 20: Gastrointestinal & Enteric Interventions (2 Procedures)
 * Strict Rajasthan MAAY / RGHS compatibility and SMS Medical College clinical protocols.
 */
export const CATEGORY_20_GI_ENTERIC: MasterProcedure[] = [
  {
    id: 'cat20-prg-gastrostomy',
    categoryNumber: 20,
    categoryName: 'Gastrointestinal & Enteric Interventions',
    title: 'Percutaneous Radiologic Gastrostomy (PRG) with T-Fastener Gastropexy',
    maayRghsCompatibility: {
      schemeName: 'BOTH',
      packageName: 'Percutaneous Radiologic Gastrostomy (PRG)',
      packageCode: '1849-IN076A',
      icd10: 'Z93.1',
      tariffInr: 15000,
    },
    modality: 'XA',
    targetAnatomy: ["Stomach Anterior Wall (Mid-body)"],
    sedation: 'Conscious Sedation with Local Anesthesia',
    accessSiteDefault: 'Left Upper Quadrant Epigastric Puncture under Fluoroscopy',
    sheathDefault: '14F - 18F Peel-Away Sheath and Balloon Gastrostomy Catheter',
    cathetersAndWires: 'Nasogastric tube, stomach insufflator, T-fastener gastropexy sutures (Saf-T-Pexy), 0.035" stiff wire, serial dilators',
    microcatheterSystem: 'N/A',
    embolicOrImplants: '14F - 18F Silicone Balloon-Retention Gastrostomy Tube',
    proceduralNarrativeTemplate:
      'Indicated for long-term enteral nutrition in neurological dysphagia (ALS / stroke). NG tube placed; stomach distended with 600 mL room air. Biplane fluoroscopy confirmed anterior stomach wall interposed cleanly beneath abdominal wall without transverse colon overlap. Local anesthesia. Three T-fasteners deployed in triangular configuration securing anterior gastric wall firmly to anterior abdominal wall (gastropexy). Central 18G puncture into stomach; wire coiled in antrum. Tract dilated serially. 16F balloon-retention gastrostomy tube introduced, balloon inflated with 5 mL sterile water, and gently snugged against gastric wall. Contrast injection confirmed intraluminal gastric placement without peritoneal extravasation.',
    postOpCare: {
      immobilizationHours: 4,
      immobilizationInstructions: 'Strict supine bedrest x 4 hours. Tube on free drainage for 6 hours; enteral feeds started at 24 hours.',
      hematomaChecks: 'Inspect stoma site for peristomal redness, leakage, or pain q30m x 2h, then q1h.',
      requiredImaging: 'None routine if initial contrast check negative.',
      hydrationProtocol: 'IV fluids until tube feeds initiated.',
      medications: ["Cap Pantoprazole 40mg OD via tube", "Tab Paracetamol 650mg TDS via tube"],
      redFlags: ["Peritonitis (gastropexy failure / early dislodgement)", "Colon perforation", "Peristomal infection"],
    },
    consentId: 'consent-gastrostomy-prg',
  },
  {
    id: 'cat20-esophageal-sems',
    categoryNumber: 20,
    categoryName: 'Gastrointestinal & Enteric Interventions',
    title: 'Covered Self-Expanding Metal Stent (SEMS) for Malignant Esophageal Obstruction',
    maayRghsCompatibility: {
      schemeName: 'BOTH',
      packageName: 'Esophageal Stenting',
      packageCode: '1849-IN077A',
      icd10: 'C15.9',
      tariffInr: 35000,
    },
    modality: 'XA',
    targetAnatomy: ["Mid / Distal Esophagus", "Gastroesophageal Junction"],
    sedation: 'Conscious Sedation with Local Anesthesia',
    accessSiteDefault: 'Transoral approach under fluoroscopic guidance',
    sheathDefault: 'Dedicated Esophageal Stent Delivery System (24F)',
    cathetersAndWires: '0.035" Amplatz Super Stiff wire, 5F angled catheter, 18-22mm x 100-140mm Covered Esophageal SEMS (WallFlex / Taewoong)',
    microcatheterSystem: 'N/A',
    embolicOrImplants: 'Fully / Partially Covered Nitinol Esophageal SEMS (18mm x 120mm)',
    proceduralNarrativeTemplate:
      'Indicated for inoperable esophageal carcinoma causing complete aphagia. Patient in lateral oblique position under conscious sedation. 0.035" stiff wire manipulated across malignant stricture into stomach. Water-soluble contrast esophagogram marked upper and lower tumor margins. Sizing performed. An 18mm x 120mm covered Nitinol SEMS deployed across stricture ensuring >2 cm coverage proximal and distal. Stent expanded immediately. Water-soluble contrast run demonstrated prompt unhindered transit through stent into gastric lumen without tracheoesophageal leak or perforation. Oral semi-solid feeds initiated next morning.',
    postOpCare: {
      immobilizationHours: 2,
      immobilizationInstructions: 'Upright sitting position (45-90 degrees) x 4 hours; avoid lying flat.',
      hematomaChecks: 'Monitor for acute retrosternal chest pain, dyspnea, or subcutaneous emphysema q30m x 2h, then q1h.',
      requiredImaging: 'Water-soluble contrast swallow at 24 hours to confirm stent position and exclude leak.',
      hydrationProtocol: 'Clear oral sips after 4 hours.',
      medications: ["Tab Pantoprazole 40mg BD", "Syp Sucralfate 10mL TDS", "IV Tramadol 50mg PRN for stent expansion pain"],
      redFlags: ["Esophageal perforation", "Stent migration into stomach", "Tracheoesophageal fistula"],
    },
    consentId: 'consent-esophageal-stent',
  },
];
