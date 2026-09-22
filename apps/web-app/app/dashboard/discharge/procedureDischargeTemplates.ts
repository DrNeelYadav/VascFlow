import type { DischargeMedicationItem, DdcDrugItem, ProceduralImageAttachment } from './ihmsDischargeTemplates';

export interface CriteriaField {
  key: string;
  label: string;
  type: 'checkbox' | 'select' | 'text' | 'number';
  options?: { value: string; label: string }[];
  defaultValue?: string | boolean | number;
  group?: string;
}

export interface ConditionalMed {
  condition: string;
  conditionKey: string;
  conditionValue: any;
  medication: DischargeMedicationItem;
}

export interface ProcedureDischargeTemplate {
  procedureKey: string;
  procedureFamily: string;
  icdPrimary: { code: string; description: string };
  icdSecondary: { code: string; description: string }[];
  criteriaFields: CriteriaField[];
  synthesizeComplaints: (criteria: Record<string, any>) => string;
  synthesizeHistory: (criteria: Record<string, any>) => string;
  synthesizeLocalExam: (criteria: Record<string, any>) => string;
  synthesizeOperativeNote: (criteria: Record<string, any>) => string;
  synthesizeDiagnosis: (criteria: Record<string, any>) => string;
  defaultMedications: DischargeMedicationItem[];
  conditionalMedications: ConditionalMed[];
  followUpInstructions: string[];
  redFlagWarnings: string[];
  expectedAttachments: { modality: string; description: string }[];
  ddcDrugs: { name: string; rmscl: string; qty: number }[];
  dischargeAdvice: string[];
  procedureType: 'Minor' | 'Major';
  anaesthesiaDefault: string;
  defaultAccessSite: string;
  defaultPostOpPlan: string;
}

export const ALL_PROCEDURE_DISCHARGE_TEMPLATES: ProcedureDischargeTemplate[] = [
  {
    procedureKey: 'ptbd_biliary',
    procedureFamily: 'Biliary Interventions',
    icdPrimary: { code: 'K83.1', description: 'Obstruction of bile duct' },
    icdSecondary: [{ code: 'C24.0', description: 'Malignant neoplasm of extrahepatic bile duct' }],
    criteriaFields: [
      { key: 'obstructionLevel', label: 'Obstruction Level', type: 'select', options: [{ value: 'hilar Bismuth I-IV', label: 'Hilar Bismuth I-IV' }, { value: 'distal CBD', label: 'Distal CBD' }, { value: 'HJ stricture', label: 'HJ Stricture' }], defaultValue: 'hilar Bismuth I-IV' },
      { key: 'drainageType', label: 'Drainage Type', type: 'select', options: [{ value: 'external', label: 'External' }, { value: 'internal-external', label: 'Internal-External' }, { value: 'SEMS conversion', label: 'SEMS Conversion' }], defaultValue: 'external' },
      { key: 'stentType', label: 'Stent Type', type: 'select', options: [{ value: 'uncovered', label: 'Uncovered' }, { value: 'partially covered', label: 'Partially Covered' }, { value: 'fully covered', label: 'Fully Covered' }], defaultValue: 'uncovered' },
      { key: 'bileColor', label: 'Bile Output Color', type: 'select', options: [{ value: 'golden-yellow', label: 'Golden-Yellow' }, { value: 'greenish', label: 'Greenish' }, { value: 'sanguineous', label: 'Sanguineous' }], defaultValue: 'golden-yellow' },
      { key: 'cholangitis', label: 'Cholangitis Present', type: 'checkbox', defaultValue: false },
      { key: 'jaundiceLevel', label: 'Jaundice Level', type: 'select', options: [{ value: 'mild <5', label: 'Mild <5 mg/dL' }, { value: 'moderate 5-15', label: 'Moderate 5-15 mg/dL' }, { value: 'severe >15', label: 'Severe >15 mg/dL' }], defaultValue: 'severe >15' }
    ],
    synthesizeComplaints: (c) => `Patient presented with obstructive jaundice${c.cholangitis ? ' and cholangitis' : ''}, with bilirubin level: ${c.jaundiceLevel}.`,
    synthesizeHistory: (c) => `History of biliary obstruction at ${c.obstructionLevel}.`,
    synthesizeLocalExam: (c) => `Right upper quadrant examined. ${c.drainageType === 'external' ? 'External drainage catheter in situ.' : 'Catheter site clean.'}`,
    synthesizeOperativeNote: (c) => `Under strict aseptic precautions, ultrasound-guided right intercostal approach, 21G Chiba needle puncture of dilated right posterior sectoral duct, contrast cholangiogram demonstrating level of obstruction at ${c.obstructionLevel}, 0.035" Amplatz Super Stiff guidewire negotiation across stricture into duodenum (for internal-external) or proximal positioning (external only). 8.5F/10F Ring biliary drainage catheter placement with locking pigtail in duodenum. ${c.drainageType === 'SEMS conversion' ? `10mm x 60-80mm self-expanding ${c.stentType} nitinol biliary stent deployed across stricture with 1.5 cm margins, Gelfoam tract embolization.` : ''} Bile output color: ${c.bileColor}.`,
    synthesizeDiagnosis: (c) => `Obstructive jaundice secondary to ${c.obstructionLevel} obstruction, managed with ${c.drainageType} drainage.`,
    defaultMedications: [
      { sNo: 0, genericName: 'Ursodeoxycholic Acid', medicine: 'Udca', dosePower: '300mg', route: 'ORAL', frequency: 'BD', days: 30, instructions: 'After meals' },
      { sNo: 0, genericName: 'Metronidazole', medicine: 'Metrogyl', dosePower: '400mg', route: 'ORAL', frequency: 'TID', days: 7, instructions: 'After meals' },
      { sNo: 0, genericName: 'Ciprofloxacin', medicine: 'Ciplox', dosePower: '500mg', route: 'ORAL', frequency: 'BD', days: 7, instructions: 'After meals' },
      { sNo: 0, genericName: 'Pantoprazole', medicine: 'Pan', dosePower: '40mg', route: 'ORAL', frequency: 'OD', days: 14, instructions: 'Before meals' },
      { sNo: 0, genericName: 'Paracetamol', medicine: 'Dolo', dosePower: '650mg', route: 'ORAL', frequency: 'SOS', days: 5, instructions: 'For pain/fever' }
    ],
    conditionalMedications: [],
    followUpInstructions: ['Weekly LFT for first month', 'Daily bile bag output monitoring (volume, color, consistency)', 'Catheter flush with 10mL NS q8h', 'Tube exchange at 3 months', 'SEMS patency check with MRCP at 6 months'],
    redFlagWarnings: ['Fever >101°F with rigors (cholangitis)', 'Sudden cessation of bile drainage', 'Blood in bile bag', 'Catheter dislodgement', 'Right upper quadrant peritoneal signs'],
    expectedAttachments: [{ modality: 'Fluoroscopy', description: 'Cholangiogram and final stent/tube placement' }],
    ddcDrugs: [],
    dischargeAdvice: ['Maintain catheter hygiene', 'Monitor bile output'],
    procedureType: 'Major',
    anaesthesiaDefault: 'Local Anesthesia',
    defaultAccessSite: 'Right Intercostal',
    defaultPostOpPlan: 'Ward observation for 24h, monitor bile output'
  },
  {
    procedureKey: 'vascular_malformation_sclero',
    procedureFamily: 'Sclerotherapy',
    icdPrimary: { code: 'Q27.9', description: 'Congenital malformation of peripheral vascular system' },
    icdSecondary: [{ code: 'D18.1', description: 'Lymphangioma' }],
    criteriaFields: [
      { key: 'malformationType', label: 'Malformation Type', type: 'select', options: [{ value: 'venous', label: 'Venous' }, { value: 'lymphatic', label: 'Lymphatic' }, { value: 'mixed venolymphatic', label: 'Mixed Venolymphatic' }, { value: 'AVM', label: 'AVM' }], defaultValue: 'venous' },
      { key: 'location', label: 'Location', type: 'select', options: [{ value: 'head-neck', label: 'Head & Neck' }, { value: 'extremity', label: 'Extremity' }, { value: 'trunk', label: 'Trunk' }, { value: 'visceral', label: 'Visceral' }], defaultValue: 'extremity' },
      { key: 'sclerosant', label: 'Sclerosant Used', type: 'select', options: [{ value: '3% STS foam', label: '3% STS Foam' }, { value: 'bleomycin', label: 'Bleomycin' }, { value: 'absolute ethanol', label: 'Absolute Ethanol' }, { value: 'OK-432', label: 'OK-432' }], defaultValue: '3% STS foam' },
      { key: 'volume', label: 'Volume Injected (mL)', type: 'number', defaultValue: 5 },
      { key: 'sessions', label: 'Session', type: 'select', options: [{ value: '1st', label: '1st Session' }, { value: 'repeat', label: 'Repeat Session' }], defaultValue: '1st' },
      { key: 'painLevel', label: 'Post-procedure Pain Level', type: 'select', options: [{ value: 'mild', label: 'Mild' }, { value: 'moderate', label: 'Moderate' }, { value: 'severe', label: 'Severe' }], defaultValue: 'mild' },
      { key: 'skinInvolvement', label: 'Skin Breakdown', type: 'checkbox', defaultValue: false }
    ],
    synthesizeComplaints: (c) => `Patient presented with a ${c.malformationType} malformation in the ${c.location}. Session: ${c.sessions}.`,
    synthesizeHistory: (c) => `Known case of ${c.malformationType} malformation.`,
    synthesizeLocalExam: (c) => `Swelling noted in ${c.location}. ${c.skinInvolvement ? 'Skin breakdown present.' : 'Skin intact.'}`,
    synthesizeOperativeNote: (c) => `Under strict aseptic technique and ultrasound guidance, direct percutaneous puncture of the malformation using 22G spinal needle / 20G IV cannula, initial aspiration confirming ${c.malformationType} character, slow injection of ${c.sclerosant} under real-time US monitoring with circumferential compression to prevent non-target spread. Total volume ${c.volume} mL. Post-sclerotherapy firm compression dressing applied.`,
    synthesizeDiagnosis: (c) => `${c.malformationType} malformation of ${c.location}, treated with ${c.sclerosant} sclerotherapy.`,
    defaultMedications: [
      { sNo: 0, genericName: 'Prednisolone', medicine: 'Wysolone', dosePower: '20mg', route: 'ORAL', frequency: 'OD', days: 5, instructions: 'Tapering dose' },
      { sNo: 0, genericName: 'Diclofenac', medicine: 'Voveran', dosePower: '50mg', route: 'ORAL', frequency: 'BD', days: 5, instructions: 'After meals' },
      { sNo: 0, genericName: 'Pantoprazole', medicine: 'Pan', dosePower: '40mg', route: 'ORAL', frequency: 'OD', days: 7, instructions: 'Before meals' },
      { sNo: 0, genericName: 'Paracetamol', medicine: 'Dolo', dosePower: '650mg', route: 'ORAL', frequency: 'TID', days: 5, instructions: 'For pain' }
    ],
    conditionalMedications: [
      { condition: 'If skin breakdown present', conditionKey: 'skinInvolvement', conditionValue: true, medication: { sNo: 0, genericName: 'Amoxicillin-Clavulanate', medicine: 'Augmentin', dosePower: '625mg', route: 'ORAL', frequency: 'BD', days: 5, instructions: 'After meals' } }
    ],
    followUpInstructions: ['MRI at 6-8 weeks for response assessment', 'Repeat session at 8-12 weeks if residual', 'Compression garment for extremity lesions x 3 months'],
    redFlagWarnings: ['Severe swelling with airway compromise (head-neck lesions)', 'Skin necrosis / blistering over injection site', 'Deep vein thrombosis', 'Nerve palsy (numbness/weakness)'],
    expectedAttachments: [{ modality: 'Ultrasound/Fluoroscopy', description: 'Pre and post injection images' }],
    ddcDrugs: [],
    dischargeAdvice: ['Keep compression dressing intact', 'Elevate affected limb if applicable'],
    procedureType: 'Minor',
    anaesthesiaDefault: 'Local Anesthesia',
    defaultAccessSite: 'Direct Percutaneous',
    defaultPostOpPlan: 'Observe for swelling and skin changes'
  },
  {
    procedureKey: 'bae_hemoptysis',
    procedureFamily: 'Embolization',
    icdPrimary: { code: 'R04.2', description: 'Hemoptysis' },
    icdSecondary: [{ code: 'J98.0', description: 'Diseases of bronchus' }, { code: 'A15.0', description: 'Pulmonary TB' }],
    criteriaFields: [
      { key: 'hemoptysisVolume', label: 'Hemoptysis Volume', type: 'select', options: [{ value: 'massive >200mL/24h', label: 'Massive >200mL/24h' }, { value: 'moderate 100-200mL', label: 'Moderate 100-200mL' }, { value: 'mild <100mL', label: 'Mild <100mL' }], defaultValue: 'moderate 100-200mL' },
      { key: 'etiology', label: 'Etiology', type: 'select', options: [{ value: 'post-TB sequelae', label: 'Post-TB Sequelae' }, { value: 'bronchiectasis', label: 'Bronchiectasis' }, { value: 'aspergilloma', label: 'Aspergilloma' }, { value: 'malignancy', label: 'Malignancy' }, { value: 'cryptogenic', label: 'Cryptogenic' }], defaultValue: 'post-TB sequelae' },
      { key: 'arteries', label: 'Arteries Embolized', type: 'select', options: [{ value: 'right bronchial', label: 'Right Bronchial' }, { value: 'left bronchial', label: 'Left Bronchial' }, { value: 'intercostobronchial trunk', label: 'Intercostobronchial Trunk' }, { value: 'non-bronchial systemic', label: 'Non-bronchial Systemic' }], defaultValue: 'right bronchial' },
      { key: 'embolicAgent', label: 'Embolic Agent', type: 'select', options: [{ value: 'PVA 355-500μm', label: 'PVA 355-500μm' }, { value: 'Gelfoam pledgets', label: 'Gelfoam Pledgets' }, { value: 'microcoils', label: 'Microcoils' }], defaultValue: 'PVA 355-500μm' },
      { key: 'spinalArtery', label: 'Spinal Artery Identified and Protected', type: 'checkbox', defaultValue: true },
      { key: 'bilateral', label: 'Bilateral Embolization', type: 'checkbox', defaultValue: false }
    ],
    synthesizeComplaints: (c) => `Patient presented with ${c.hemoptysisVolume} hemoptysis.`,
    synthesizeHistory: (c) => `Underlying etiology: ${c.etiology}.`,
    synthesizeLocalExam: (c) => `Respiratory system examination revealed decreased air entry / crepitations.`,
    synthesizeOperativeNote: (c) => `Under LA, right CFA access with 5F sheath, 5F Cobra/Mikaelsson catheter advanced to descending thoracic aorta, selective bronchial arteriogram demonstrating hypertrophied ${c.arteries} with parenchymal blush. Superselective microcatheterization with 2.7F Progreat beyond anterior spinal artery origin (${c.spinalArtery ? 'spinal artery protected' : 'no spinal artery visualized'}). Embolization with ${c.embolicAgent} to near-stasis. Completion angiogram confirming devascularization of target territory with preserved spinal cord supply. ${c.bilateral ? 'Bilateral procedure performed.' : ''}`,
    synthesizeDiagnosis: (c) => `Hemoptysis secondary to ${c.etiology}, treated with BAE of ${c.arteries}.`,
    defaultMedications: [
      { sNo: 0, genericName: 'Tranexamic Acid', medicine: 'Pause', dosePower: '500mg', route: 'ORAL', frequency: 'TID', days: 5, instructions: 'For bleeding control' },
      { sNo: 0, genericName: 'Codeine Phosphate', medicine: 'Codeine', dosePower: '10mg', route: 'ORAL', frequency: 'TID', days: 5, instructions: 'Antitussive' },
      { sNo: 0, genericName: 'Azithromycin', medicine: 'Azee', dosePower: '500mg', route: 'ORAL', frequency: 'OD', days: 3, instructions: 'Antibiotic coverage' },
      { sNo: 0, genericName: 'Pantoprazole', medicine: 'Pan', dosePower: '40mg', route: 'ORAL', frequency: 'OD', days: 7, instructions: 'Before meals' },
      { sNo: 0, genericName: 'Paracetamol', medicine: 'Dolo', dosePower: '650mg', route: 'ORAL', frequency: 'SOS', days: 5, instructions: 'For pain/fever' }
    ],
    conditionalMedications: [],
    followUpInstructions: ['Chest X-ray at 48h and 2 weeks', 'Pulmonology follow-up at 2 weeks', 'CT pulmonary angiography at 3 months for recurrence surveillance'],
    redFlagWarnings: ['Recurrent hemoptysis >50mL', 'Chest pain with breathlessness (non-target embolization)', 'Sudden lower limb weakness or numbness (spinal cord ischemia - EMERGENCY)', 'Fever >101°F'],
    expectedAttachments: [{ modality: 'DSA', description: 'Bronchial arteriograms pre and post embolization' }],
    ddcDrugs: [],
    dischargeAdvice: ['Avoid strenuous physical exertion', 'Suppress severe coughing if possible'],
    procedureType: 'Major',
    anaesthesiaDefault: 'Local Anesthesia',
    defaultAccessSite: 'Right CFA',
    defaultPostOpPlan: 'Bed rest 6 hours, monitor for hemoptysis or neurological deficits'
  },
  {
    procedureKey: 'jna_preop_embo',
    procedureFamily: 'Tumor Embolization',
    icdPrimary: { code: 'D10.6', description: 'Benign neoplasm of nasopharynx' },
    icdSecondary: [{ code: 'D14.0', description: 'Benign neoplasm of middle ear, nasal cavity' }],
    criteriaFields: [
      { key: 'tumorStage', label: 'Tumor Stage', type: 'select', options: [{ value: 'Radkowski I', label: 'Radkowski I' }, { value: 'Radkowski II', label: 'Radkowski II' }, { value: 'Radkowski III', label: 'Radkowski III' }], defaultValue: 'Radkowski II' },
      { key: 'arteries', label: 'Feeding Arteries', type: 'select', options: [{ value: 'internal maxillary', label: 'Internal Maxillary' }, { value: 'ascending pharyngeal', label: 'Ascending Pharyngeal' }, { value: 'middle meningeal', label: 'Middle Meningeal' }, { value: 'ophthalmic feeders', label: 'Ophthalmic Feeders' }], defaultValue: 'internal maxillary' },
      { key: 'embolicAgent', label: 'Embolic Agent', type: 'select', options: [{ value: 'PVA 150-250μm', label: 'PVA 150-250μm' }, { value: 'Embosphere 300-500μm', label: 'Embosphere 300-500μm' }, { value: 'n-BCA glue', label: 'n-BCA Glue' }], defaultValue: 'PVA 150-250μm' },
      { key: 'icaInvolvement', label: 'ICA Involvement', type: 'checkbox', defaultValue: false },
      { key: 'surgeryWindow', label: 'Surgery Scheduled Within', type: 'select', options: [{ value: '24-48h', label: '24-48h' }, { value: '72h', label: '72h' }], defaultValue: '24-48h' }
    ],
    synthesizeComplaints: (c) => `Patient presented with epistaxis and nasal obstruction, planned for preoperative embolization of JNA (Stage: ${c.tumorStage}).`,
    synthesizeHistory: (c) => `Diagnosed with Juvenile Nasopharyngeal Angiofibroma.`,
    synthesizeLocalExam: (c) => `Nasal mass noted on clinical exam.`,
    synthesizeOperativeNote: (c) => `Under LA, right CFA access, 5F diagnostic catheter selective ECA angiogram demonstrating hypervascular mass with dominant arterial supply from ${c.arteries}. Superselective microcatheterization with 2.4F Progreat. Pre-embolization tumor blush scoring performed. Devascularization with ${c.embolicAgent} achieving >80% reduction in tumor vascularity. Protective test injection confirming no dangerous anastomoses to ophthalmic or ICA territories. ICA involvement: ${c.icaInvolvement ? 'Yes' : 'No'}.`,
    synthesizeDiagnosis: (c) => `JNA (${c.tumorStage}), successfully embolized pre-operatively.`,
    defaultMedications: [
      { sNo: 0, genericName: 'Dexamethasone', medicine: 'Dexona', dosePower: '4mg', route: 'ORAL', frequency: 'TID', days: 2, instructions: 'To reduce post-embolization swelling' },
      { sNo: 0, genericName: 'Paracetamol', medicine: 'Dolo', dosePower: '650mg', route: 'ORAL', frequency: 'TID', days: 5, instructions: 'For pain/fever' },
      { sNo: 0, genericName: 'Amoxicillin-Clavulanate', medicine: 'Augmentin', dosePower: '625mg', route: 'ORAL', frequency: 'BD', days: 5, instructions: 'Prophylactic' },
      { sNo: 0, genericName: 'Pantoprazole', medicine: 'Pan', dosePower: '40mg', route: 'ORAL', frequency: 'OD', days: 5, instructions: 'Before meals' }
    ],
    conditionalMedications: [],
    followUpInstructions: ['ENT surgical excision within 24-48h of embolization', 'Post-op MRI at 3 months for residual/recurrence'],
    redFlagWarnings: ['Acute nasal bleeding >200mL (pre-surgical window)', 'Facial/periorbital swelling with visual changes (non-target embolization)', 'Skin necrosis', 'Cranial nerve palsy'],
    expectedAttachments: [{ modality: 'DSA', description: 'ECA/ICA angiograms pre and post embolization' }],
    ddcDrugs: [],
    dischargeAdvice: ['Prepare for definitive surgical resection', 'Do not manipulate nose'],
    procedureType: 'Major',
    anaesthesiaDefault: 'Local Anesthesia',
    defaultAccessSite: 'Right CFA',
    defaultPostOpPlan: 'Observe for epistaxis, transfer to ENT surgery'
  },
  {
    procedureKey: 'splenic_artery_embo',
    procedureFamily: 'Embolization',
    icdPrimary: { code: 'D73.1', description: 'Hypersplenism' },
    icdSecondary: [{ code: 'S36.0', description: 'Injury of spleen' }, { code: 'K86.1', description: 'Chronic pancreatitis' }],
    criteriaFields: [
      { key: 'indication', label: 'Indication', type: 'select', options: [{ value: 'hypersplenism', label: 'Hypersplenism' }, { value: 'trauma Grade III-V', label: 'Trauma Grade III-V' }, { value: 'pseudoaneurysm', label: 'Pseudoaneurysm' }, { value: 'pre-TIPS', label: 'Pre-TIPS' }], defaultValue: 'hypersplenism' },
      { key: 'level', label: 'Embolization Level', type: 'select', options: [{ value: 'proximal main SA', label: 'Proximal Main SA' }, { value: 'distal superselective', label: 'Distal Superselective' }, { value: 'partial polar', label: 'Partial Polar' }], defaultValue: 'partial polar' },
      { key: 'embolicAgent', label: 'Embolic Agent', type: 'select', options: [{ value: 'PVA 500-700μm', label: 'PVA 500-700μm' }, { value: 'Gelfoam', label: 'Gelfoam' }, { value: 'microcoils', label: 'Microcoils' }], defaultValue: 'PVA 500-700μm' },
      { key: 'targetDevasc', label: 'Target Devascularization', type: 'select', options: [{ value: '30-50%', label: '30-50%' }, { value: '50-70%', label: '50-70%' }], defaultValue: '30-50%' },
      { key: 'platelets', label: 'Pre-op Platelet Count', type: 'number', defaultValue: 50000 }
    ],
    synthesizeComplaints: (c) => `Patient presented for Splenic Artery Embolization indicated for ${c.indication}.`,
    synthesizeHistory: (c) => `History of ${c.indication} with pre-procedure platelet count of ${c.platelets}.`,
    synthesizeLocalExam: (c) => `Abdomen examined. Splenomegaly or local tenderness noted based on indication.`,
    synthesizeOperativeNote: (c) => `Under LA, right CFA access with 5F sheath, 5F Cobra/Simmons catheter selective celiac axis and splenic arteriogram. ${c.indication === 'hypersplenism' ? `Superselective ${c.level} embolization with ${c.embolicAgent} to achieve approximately ${c.targetDevasc} parenchymal devascularization, preserving upper pole and short gastric territories.` : `Coil embolization proximal and distal to the pseudoaneurysm neck (sandwich technique).`} Completion angiogram confirming successful ${c.indication === 'pseudoaneurysm' ? 'exclusion' : 'embolization'}.`,
    synthesizeDiagnosis: (c) => `Splenic artery embolization for ${c.indication}.`,
    defaultMedications: [
      { sNo: 0, genericName: 'Paracetamol', medicine: 'Dolo', dosePower: '650mg', route: 'ORAL', frequency: 'TID', days: 7, instructions: 'For post-embolization syndrome' },
      { sNo: 0, genericName: 'Diclofenac', medicine: 'Voveran', dosePower: '50mg', route: 'ORAL', frequency: 'BD', days: 5, instructions: 'After meals' },
      { sNo: 0, genericName: 'Pantoprazole', medicine: 'Pan', dosePower: '40mg', route: 'ORAL', frequency: 'OD', days: 14, instructions: 'Before meals' },
      { sNo: 0, genericName: 'Ondansetron', medicine: 'Emeset', dosePower: '4mg', route: 'ORAL', frequency: 'SOS', days: 5, instructions: 'For nausea' }
    ],
    conditionalMedications: [],
    followUpInstructions: ['CBC at 1 week (platelet count response)', 'CT abdomen at 1 month (splenic infarct assessment)', 'Vaccination compliance at 2 weeks (Pneumococcal + Meningococcal + H. influenzae)'],
    redFlagWarnings: ['Left upper quadrant pain with fever >102°F persisting >5 days (splenic abscess)', 'Signs of peritonitis (free perforation)', 'Massive left pleural effusion'],
    expectedAttachments: [{ modality: 'DSA', description: 'Splenic arteriogram pre and post embolization' }],
    ddcDrugs: [],
    dischargeAdvice: ['Hydrate well', 'Ensure post-splenectomy vaccines are given if >50% devascularization'],
    procedureType: 'Major',
    anaesthesiaDefault: 'Local Anesthesia',
    defaultAccessSite: 'Right CFA',
    defaultPostOpPlan: 'Monitor for post-embolization syndrome (pain, fever, nausea)'
  },
  {
    procedureKey: 'ctace_hepatoma',
    procedureFamily: 'Chemoembolization',
    icdPrimary: { code: 'C22.0', description: 'Hepatocellular carcinoma' },
    icdSecondary: [{ code: 'K74.6', description: 'Cirrhosis of liver' }],
    criteriaFields: [
      { key: 'tumorBurden', label: 'Tumor Burden', type: 'select', options: [{ value: 'single ≤5cm', label: 'Single ≤5cm' }, { value: 'multifocal 2-3 lesions', label: 'Multifocal 2-3 lesions' }, { value: 'diffuse/infiltrative', label: 'Diffuse/Infiltrative' }], defaultValue: 'single ≤5cm' },
      { key: 'bclcStage', label: 'BCLC Stage', type: 'select', options: [{ value: 'A', label: 'A' }, { value: 'B', label: 'B' }, { value: 'C', label: 'C' }], defaultValue: 'B' },
      { key: 'arteries', label: 'Target Arteries', type: 'select', options: [{ value: 'right hepatic', label: 'Right Hepatic' }, { value: 'left hepatic', label: 'Left Hepatic' }, { value: 'segment-specific', label: 'Segment-specific' }], defaultValue: 'segment-specific' },
      { key: 'drugCombo', label: 'Drug Combination', type: 'select', options: [{ value: 'Doxorubicin 30-50mg + Lipiodol', label: 'cTACE (Doxorubicin + Lipiodol)' }, { value: 'DEB-TACE DC Bead 100-300μm', label: 'DEB-TACE DC Bead' }], defaultValue: 'Doxorubicin 30-50mg + Lipiodol' },
      { key: 'pvStatus', label: 'Portal Vein Status', type: 'select', options: [{ value: 'patent', label: 'Patent' }, { value: 'branch thrombosis', label: 'Branch Thrombosis' }, { value: 'main PVT', label: 'Main PVT' }], defaultValue: 'patent' },
      { key: 'childPugh', label: 'Child-Pugh Class', type: 'select', options: [{ value: 'A', label: 'A' }, { value: 'B', label: 'B' }], defaultValue: 'A' },
      { key: 'sessions', label: 'TACE Session', type: 'select', options: [{ value: '1st', label: '1st' }, { value: '2nd', label: '2nd' }, { value: '3rd+', label: '3rd+' }], defaultValue: '1st' }
    ],
    synthesizeComplaints: (c) => `Patient admitted for ${c.sessions} session of TACE for HCC (BCLC ${c.bclcStage}, Child-Pugh ${c.childPugh}).`,
    synthesizeHistory: (c) => `Known case of HCC with ${c.tumorBurden}. Portal vein status: ${c.pvStatus}.`,
    synthesizeLocalExam: (c) => `Abdominal examination essentially benign.`,
    synthesizeOperativeNote: (c) => `Under LA, right CFA access with 5F sheath, 5F RH/Cobra catheter celiac trunk then selective proper hepatic arteriogram. Tumor-feeding artery identified arising from ${c.arteries}. Superselective microcatheterization with 2.7F Progreat. ${c.drugCombo.includes('Lipiodol') ? 'Slow injection of Doxorubicin (30-50mg) emulsified in Lipiodol (10mL) until tumor bed saturation, followed by Gelfoam slurry embolization to sub-stasis.' : `DC Bead loaded with Doxorubicin injected under fluoroscopy.`} Completion hepatic angiogram confirming devascularization of target lesion with preserved portal flow.`,
    synthesizeDiagnosis: (c) => `HCC (${c.tumorBurden}), managed with ${c.drugCombo.includes('Lipiodol') ? 'cTACE' : 'DEB-TACE'}.`,
    defaultMedications: [
      { sNo: 0, genericName: 'Ondansetron', medicine: 'Emeset', dosePower: '4mg', route: 'ORAL', frequency: 'BD', days: 3, instructions: 'Antiemetic' },
      { sNo: 0, genericName: 'Tramadol', medicine: 'Tramazac', dosePower: '50mg', route: 'ORAL', frequency: 'BD', days: 3, instructions: 'For analgesia' },
      { sNo: 0, genericName: 'Paracetamol', medicine: 'Dolo', dosePower: '650mg', route: 'ORAL', frequency: 'TID', days: 5, instructions: 'For pain/fever' },
      { sNo: 0, genericName: 'Lactulose', medicine: 'Looz', dosePower: '15mL', route: 'ORAL', frequency: 'BD', days: 14, instructions: 'Hepatic protection' },
      { sNo: 0, genericName: 'Pantoprazole', medicine: 'Pan', dosePower: '40mg', route: 'ORAL', frequency: 'OD', days: 14, instructions: 'Before meals' },
      { sNo: 0, genericName: 'Silymarin', medicine: 'Silybon', dosePower: '140mg', route: 'ORAL', frequency: 'TID', days: 30, instructions: 'Hepatoprotective' }
    ],
    conditionalMedications: [],
    followUpInstructions: ['LFT + AFP at 4 weeks', 'Contrast-enhanced CT/MRI (mRECIST) at 4-6 weeks for response assessment', 'Repeat TACE if viable residual tumor'],
    redFlagWarnings: ['Severe right upper quadrant pain with fever >102°F persisting >72h (hepatic abscess)', 'Jaundice deepening (hepatic decompensation)', 'GI bleeding (variceal rupture)', 'Altered sensorium (hepatic encephalopathy)'],
    expectedAttachments: [{ modality: 'DSA', description: 'Hepatic angiogram pre and post TACE' }],
    ddcDrugs: [],
    dischargeAdvice: ['Hydrate well', 'Report any fever or severe pain immediately'],
    procedureType: 'Major',
    anaesthesiaDefault: 'Local Anesthesia',
    defaultAccessSite: 'Right CFA',
    defaultPostOpPlan: 'Monitor for post-embolization syndrome'
  },
  {
    procedureKey: 'ugib_gda_embo',
    procedureFamily: 'GI Bleeding Embolization',
    icdPrimary: { code: 'K92.2', description: 'Gastrointestinal hemorrhage, unspecified' },
    icdSecondary: [{ code: 'K25.4', description: 'Chronic or unspecified gastric ulcer with hemorrhage' }],
    criteriaFields: [
      { key: 'source', label: 'Bleeding Source', type: 'select', options: [{ value: 'GDA pseudoaneurysm', label: 'GDA Pseudoaneurysm' }, { value: 'LGA', label: 'LGA' }, { value: 'jejunal branch', label: 'Jejunal Branch' }, { value: 'splenic', label: 'Splenic' }], defaultValue: 'GDA pseudoaneurysm' },
      { key: 'etiology', label: 'Etiology', type: 'select', options: [{ value: 'peptic ulcer', label: 'Peptic Ulcer' }, { value: 'post-surgical', label: 'Post-surgical' }, { value: 'pancreatitis', label: 'Pancreatitis' }], defaultValue: 'peptic ulcer' },
      { key: 'embolicAgent', label: 'Embolic Agent', type: 'select', options: [{ value: 'microcoils', label: 'Microcoils' }, { value: 'Gelfoam', label: 'Gelfoam' }, { value: 'n-BCA glue', label: 'n-BCA Glue' }], defaultValue: 'microcoils' },
      { key: 'transfusion', label: 'Transfusion Units Required', type: 'number', defaultValue: 2 },
      { key: 'stability', label: 'Hemodynamic Stability', type: 'select', options: [{ value: 'stable', label: 'Stable' }, { value: 'unstable requiring resuscitation', label: 'Unstable' }], defaultValue: 'stable' }
    ],
    synthesizeComplaints: (c) => `Patient presented with upper GI bleed, hemodynamically ${c.stability}. Transfused ${c.transfusion} units.`,
    synthesizeHistory: (c) => `History of UGIB secondary to ${c.etiology}.`,
    synthesizeLocalExam: (c) => `Tachycardia, melena/hematemesis noted.`,
    synthesizeOperativeNote: (c) => `Under LA (or MAC if hemodynamically unstable), right CFA access with 5F sheath, 5F Cobra/Simmons catheter celiac axis angiogram and SMA injection. Active contrast extravasation / pseudoaneurysm identified arising from ${c.source}. Superselective microcatheterization with 2.7F Progreat. Embolization with ${c.embolicAgent} achieving complete occlusion proximal and distal to the bleeding point (sandwich technique). Completion angiogram confirming no residual extravasation and preserved collateral arcade.`,
    synthesizeDiagnosis: (c) => `UGIB from ${c.source}, successfully embolized.`,
    defaultMedications: [
      { sNo: 0, genericName: 'Pantoprazole', medicine: 'Pan', dosePower: '40mg', route: 'ORAL', frequency: 'BD', days: 30, instructions: 'PPI therapy' },
      { sNo: 0, genericName: 'Sucralfate', medicine: 'Sucrafil', dosePower: '1g', route: 'ORAL', frequency: 'QID', days: 14, instructions: 'Take on empty stomach' },
      { sNo: 0, genericName: 'Ferrous Sulfate', medicine: 'Fero', dosePower: '200mg', route: 'ORAL', frequency: 'BD', days: 30, instructions: 'For anemia' },
      { sNo: 0, genericName: 'Paracetamol', medicine: 'Dolo', dosePower: '650mg', route: 'ORAL', frequency: 'SOS', days: 5, instructions: 'For pain/fever' }
    ],
    conditionalMedications: [],
    followUpInstructions: ['CBC and hemodynamic monitoring daily for 48-72h', 'Upper GI endoscopy at 6 weeks for ulcer healing assessment', 'H. pylori eradication if positive'],
    redFlagWarnings: ['Rebleeding (hematemesis, melena, hemodynamic instability)', 'Abdominal rigidity (perforation)', 'Worsening anemia despite transfusion'],
    expectedAttachments: [{ modality: 'DSA', description: 'Angiograms showing bleeding and post-embolization status' }],
    ddcDrugs: [],
    dischargeAdvice: ['Strict adherence to PPI therapy', 'Report any signs of rebleeding immediately'],
    procedureType: 'Major',
    anaesthesiaDefault: 'Local Anesthesia',
    defaultAccessSite: 'Right CFA',
    defaultPostOpPlan: 'ICU/HDU monitoring for 24h for rebleed'
  },
  {
    procedureKey: 'uae_pph',
    procedureFamily: 'Uterine Interventions',
    icdPrimary: { code: 'O72.1', description: 'Other immediate postpartum hemorrhage' },
    icdSecondary: [{ code: 'D25.9', description: 'Leiomyoma of uterus, unspecified' }, { code: 'N80.0', description: 'Endometriosis of uterus - adenomyosis' }],
    criteriaFields: [
      { key: 'indication', label: 'Indication', type: 'select', options: [{ value: 'PPH', label: 'PPH' }, { value: 'symptomatic fibroids', label: 'Symptomatic Fibroids' }, { value: 'adenomyosis', label: 'Adenomyosis' }, { value: 'uterine AVM', label: 'Uterine AVM' }], defaultValue: 'PPH' },
      { key: 'bilateral', label: 'Bilateral UAE', type: 'checkbox', defaultValue: true },
      { key: 'embolicAgent', label: 'Embolic Agent', type: 'select', options: [{ value: 'PVA 500-700μm', label: 'PVA 500-700μm' }, { value: 'Gelfoam', label: 'Gelfoam' }, { value: 'Embosphere', label: 'Embosphere' }, { value: 'n-BCA for AVM', label: 'n-BCA for AVM' }], defaultValue: 'Gelfoam' },
      { key: 'bloodLoss', label: 'Blood Loss Estimate', type: 'number', defaultValue: 1000 },
      { key: 'spasmManaged', label: 'Uterine Artery Spasm Managed', type: 'checkbox', defaultValue: false }
    ],
    synthesizeComplaints: (c) => `Patient underwent Uterine Artery Embolization for ${c.indication}.`,
    synthesizeHistory: (c) => `Admitted with ${c.indication} with estimated blood loss of ${c.bloodLoss}mL.`,
    synthesizeLocalExam: (c) => `Pelvic exam revealed bulky uterus / ongoing bleeding.`,
    synthesizeOperativeNote: (c) => `Under LA, right CFA access with 5F sheath, 5F Cobra/Roberts Uterine catheter selective internal iliac and uterine arteriogram bilaterally. ${c.indication === 'PPH' ? `Active contrast extravasation noted. Superselective embolization with ${c.embolicAgent} to complete stasis.` : `Superselective ${c.bilateral ? 'bilateral' : 'unilateral'} uterine artery embolization with ${c.embolicAgent} to sluggish antegrade flow endpoint, preserving ovarian supply.`} Completion pelvic angiogram confirming devascularization. ${c.spasmManaged ? 'Vasospasm managed with intra-arterial vasodilators.' : ''}`,
    synthesizeDiagnosis: (c) => `${c.indication}, successfully treated with UAE.`,
    defaultMedications: [
      { sNo: 0, genericName: 'Diclofenac', medicine: 'Voveran', dosePower: '50mg', route: 'ORAL', frequency: 'BD', days: 5, instructions: 'Post-embolization pain' },
      { sNo: 0, genericName: 'Paracetamol', medicine: 'Dolo', dosePower: '650mg', route: 'ORAL', frequency: 'TID', days: 5, instructions: 'For pain/fever' },
      { sNo: 0, genericName: 'Ondansetron', medicine: 'Emeset', dosePower: '4mg', route: 'ORAL', frequency: 'SOS', days: 3, instructions: 'For nausea' },
      { sNo: 0, genericName: 'Ciprofloxacin', medicine: 'Ciplox', dosePower: '500mg', route: 'ORAL', frequency: 'BD', days: 5, instructions: 'Prophylactic' },
      { sNo: 0, genericName: 'Pantoprazole', medicine: 'Pan', dosePower: '40mg', route: 'ORAL', frequency: 'OD', days: 7, instructions: 'Before meals' }
    ],
    conditionalMedications: [
      { condition: 'If indicated for PPH', conditionKey: 'indication', conditionValue: 'PPH', medication: { sNo: 0, genericName: 'Tranexamic Acid', medicine: 'Pause', dosePower: '500mg', route: 'ORAL', frequency: 'TID', days: 3, instructions: 'For bleeding control' } }
    ],
    followUpInstructions: ['Pelvic MRI at 3-6 months for fibroid volume assessment', 'Gynecology follow-up at 2 weeks', 'Menstrual diary for symptom tracking'],
    redFlagWarnings: ['Severe pelvic pain unresponsive to prescribed analgesia', 'Foul-smelling vaginal discharge (endometritis/fibroid necrosis)', 'Fever >101°F', 'Recurrent heavy vaginal bleeding'],
    expectedAttachments: [{ modality: 'DSA', description: 'Pelvic angiograms pre and post UAE' }],
    ddcDrugs: [],
    dischargeAdvice: ['Expect pelvic cramping for a few days', 'Report any foul-smelling discharge immediately'],
    procedureType: 'Major',
    anaesthesiaDefault: 'Local Anesthesia',
    defaultAccessSite: 'Right CFA',
    defaultPostOpPlan: 'Pain management, monitor for bleeding'
  },
  {
    procedureKey: 'central_venoplasty',
    procedureFamily: 'Venous Interventions',
    icdPrimary: { code: 'I87.1', description: 'Compression of vein' },
    icdSecondary: [{ code: 'T82.8', description: 'Other complications of vascular devices' }],
    criteriaFields: [
      { key: 'vein', label: 'Vein Involved', type: 'select', options: [{ value: 'left brachiocephalic', label: 'Left Brachiocephalic' }, { value: 'right brachiocephalic', label: 'Right Brachiocephalic' }, { value: 'SVC', label: 'SVC' }, { value: 'bilateral subclavian', label: 'Bilateral Subclavian' }], defaultValue: 'SVC' },
      { key: 'etiology', label: 'Etiology', type: 'select', options: [{ value: 'dialysis catheter-related', label: 'Dialysis Catheter-related' }, { value: 'malignant compression', label: 'Malignant Compression' }, { value: 'fibrosing mediastinitis', label: 'Fibrosing Mediastinitis' }], defaultValue: 'dialysis catheter-related' },
      { key: 'procedure', label: 'Procedure', type: 'select', options: [{ value: 'PTA only', label: 'PTA Only' }, { value: 'PTA + stenting', label: 'PTA + Stenting' }], defaultValue: 'PTA only' },
      { key: 'stentType', label: 'Stent Type', type: 'select', options: [{ value: 'Wallstent', label: 'Wallstent' }, { value: 'bare metal', label: 'Bare Metal' }, { value: 'covered', label: 'Covered' }], defaultValue: 'Wallstent' },
      { key: 'balloonSize', label: 'Balloon Size (mm)', type: 'number', defaultValue: 10 },
      { key: 'symptoms', label: 'Pre-procedure Symptoms', type: 'select', options: [{ value: 'facial/arm edema', label: 'Facial/Arm Edema' }, { value: 'SVC syndrome', label: 'SVC Syndrome' }], defaultValue: 'facial/arm edema' }
    ],
    synthesizeComplaints: (c) => `Patient presented with ${c.symptoms} secondary to ${c.vein} stenosis/occlusion.`,
    synthesizeHistory: (c) => `Etiology identified as ${c.etiology}.`,
    synthesizeLocalExam: (c) => `Visible engorged collateral veins and edema noted over neck/chest.`,
    synthesizeOperativeNote: (c) => `Under LA, right/left femoral vein access with 7F sheath. Venogram demonstrating severe stenosis/occlusion of ${c.vein}. Sharp recanalization with stiff hydrophilic wire + support catheter. Sequential balloon angioplasty with ${c.balloonSize}mm high-pressure balloon. ${c.procedure === 'PTA + stenting' ? `Deployment of ${c.stentType} stent across the stenosis with post-dilatation.` : ''} Completion venogram confirming <30% residual stenosis with restored antegrade flow.`,
    synthesizeDiagnosis: (c) => `${c.vein} stenosis (${c.etiology}), managed by ${c.procedure}.`,
    defaultMedications: [
      { sNo: 0, genericName: 'Paracetamol', medicine: 'Dolo', dosePower: '650mg', route: 'ORAL', frequency: 'SOS', days: 5, instructions: 'For pain/fever' },
      { sNo: 0, genericName: 'Pantoprazole', medicine: 'Pan', dosePower: '40mg', route: 'ORAL', frequency: 'OD', days: 30, instructions: 'Before meals' }
    ],
    conditionalMedications: [
      { condition: 'If Stented', conditionKey: 'procedure', conditionValue: 'PTA + stenting', medication: { sNo: 0, genericName: 'Aspirin', medicine: 'Ecosprin', dosePower: '75mg', route: 'ORAL', frequency: 'OD', days: 180, instructions: 'Post-stenting' } },
      { condition: 'If Stented', conditionKey: 'procedure', conditionValue: 'PTA + stenting', medication: { sNo: 0, genericName: 'Clopidogrel', medicine: 'Plavix', dosePower: '75mg', route: 'ORAL', frequency: 'OD', days: 90, instructions: 'Post-stenting' } }
    ],
    followUpInstructions: ['Arm/facial edema assessment at 1 week', 'Duplex ultrasound at 1 month and 3 months', 'Hemodialysis reassessment if dialysis-related'],
    redFlagWarnings: ['Sudden worsening of facial/arm swelling (re-stenosis / stent thrombosis)', 'Chest pain or breathlessness (SVC syndrome)', 'Access site hematoma'],
    expectedAttachments: [{ modality: 'DSA', description: 'Central venograms pre and post intervention' }],
    ddcDrugs: [],
    dischargeAdvice: ['Keep access site dry for 24h', 'Report any breathing difficulties'],
    procedureType: 'Major',
    anaesthesiaDefault: 'Local Anesthesia',
    defaultAccessSite: 'Femoral Vein',
    defaultPostOpPlan: 'Observe for swelling resolution'
  },
  {
    procedureKey: 'dialysis_fistuloplasty',
    procedureFamily: 'Dialysis Access Interventions',
    icdPrimary: { code: 'T82.5', description: 'Mechanical complication of other cardiac and vascular devices' },
    icdSecondary: [{ code: 'Z99.2', description: 'Dependence on renal dialysis' }],
    criteriaFields: [
      { key: 'fistulaType', label: 'Fistula Type', type: 'select', options: [{ value: 'radiocephalic', label: 'Radiocephalic' }, { value: 'brachiocephalic', label: 'Brachiocephalic' }, { value: 'brachiobasilic', label: 'Brachiobasilic' }, { value: 'AV graft', label: 'AV Graft' }], defaultValue: 'radiocephalic' },
      { key: 'stenosisLocation', label: 'Stenosis Location', type: 'select', options: [{ value: 'juxta-anastomotic', label: 'Juxta-anastomotic' }, { value: 'outflow vein', label: 'Outflow Vein' }, { value: 'central vein', label: 'Central Vein' }, { value: 'arterial inflow', label: 'Arterial Inflow' }], defaultValue: 'juxta-anastomotic' },
      { key: 'balloonSpecs', label: 'Balloon Type', type: 'select', options: [{ value: 'standard', label: 'Standard' }, { value: 'high-pressure Conquest/Mustang', label: 'High-pressure' }], defaultValue: 'standard' },
      { key: 'pressure', label: 'Inflation Pressure (atm)', type: 'number', defaultValue: 12 },
      { key: 'thrill', label: 'Thrill Restored', type: 'checkbox', defaultValue: true }
    ],
    synthesizeComplaints: (c) => `Patient with failing ${c.fistulaType} fistula, stenosis at ${c.stenosisLocation}.`,
    synthesizeHistory: (c) => `ESRD on maintenance hemodialysis.`,
    synthesizeLocalExam: (c) => `Diminished thrill / pulsatile fistula on palpation.`,
    synthesizeOperativeNote: (c) => `Under LA, direct fistula puncture with 6F micro-puncture set under US guidance. Fistulogram demonstrating stenosis at ${c.stenosisLocation} with reduced antegrade flow. Serial balloon angioplasty with ${c.balloonSpecs} at ${c.pressure} atm for 60-120 seconds x 3 inflations. Post-dilatation fistulogram confirming <30% residual stenosis with ${c.thrill ? 'restored continuous machinery thrill' : 'partial thrill'}. Hemostasis achieved with manual compression / figure-of-8 suture.`,
    synthesizeDiagnosis: (c) => `Dialysis AV Fistula dysfunction due to ${c.stenosisLocation} stenosis, successfully treated with fistuloplasty.`,
    defaultMedications: [
      { sNo: 0, genericName: 'Aspirin', medicine: 'Ecosprin', dosePower: '75mg', route: 'ORAL', frequency: 'OD', days: 30, instructions: 'Continue chronic' },
      { sNo: 0, genericName: 'Paracetamol', medicine: 'Dolo', dosePower: '650mg', route: 'ORAL', frequency: 'SOS', days: 3, instructions: 'For pain/fever' }
    ],
    conditionalMedications: [],
    followUpInstructions: ['Thrill palpation daily by patient/nurse', 'Duplex at 1 month', 'Hemodialysis performance assessment at next session (Kt/V, venous pressure)', 'Repeat fistuloplasty if clinical re-stenosis'],
    redFlagWarnings: ['Loss of thrill or bruit (acute thrombosis - present to IR within 24h)', 'Arm swelling (central stenosis)', 'Puncture site bleeding', 'Hand coldness/pallor (steal syndrome)'],
    expectedAttachments: [{ modality: 'DSA', description: 'Fistulograms pre and post plasty' }],
    ddcDrugs: [],
    dischargeAdvice: ['Check thrill daily', 'Local wound care with Povidone-Iodine'],
    procedureType: 'Minor',
    anaesthesiaDefault: 'Local Anesthesia',
    defaultAccessSite: 'Direct Fistula',
    defaultPostOpPlan: 'Monitor thrill, discharge after hemostasis'
  },
  {
    procedureKey: 'varicocele_embo',
    procedureFamily: 'Venous Interventions',
    icdPrimary: { code: 'I86.1', description: 'Scrotal varices / Varicocele' },
    icdSecondary: [],
    criteriaFields: [
      { key: 'grade', label: 'Grade', type: 'select', options: [{ value: 'II', label: 'II' }, { value: 'III', label: 'III' }], defaultValue: 'III' },
      { key: 'laterality', label: 'Laterality', type: 'select', options: [{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }, { value: 'bilateral', label: 'Bilateral' }], defaultValue: 'left' },
      { key: 'semenAbnormal', label: 'Semen Analysis Abnormal', type: 'checkbox', defaultValue: false },
      { key: 'scrotalPain', label: 'Scrotal Pain', type: 'checkbox', defaultValue: true },
      { key: 'technique', label: 'Embolic Technique', type: 'select', options: [{ value: 'coils only', label: 'Coils Only' }, { value: 'coils + foam', label: 'Coils + Foam' }, { value: 'glue', label: 'Glue' }], defaultValue: 'coils + foam' },
      { key: 'coils', label: 'Number of Coils', type: 'number', defaultValue: 3 }
    ],
    synthesizeComplaints: (c) => `Patient presented with ${c.scrotalPain ? 'scrotal pain and ' : ''}${c.laterality} varicocele (Grade ${c.grade}).`,
    synthesizeHistory: (c) => `Diagnosed with ${c.laterality} varicocele. Semen analysis: ${c.semenAbnormal ? 'Abnormal' : 'Normal/Not Done'}.`,
    synthesizeLocalExam: (c) => `Bag of worms appearance noted in the ${c.laterality} hemiscrotum on Valsalva.`,
    synthesizeOperativeNote: (c) => `Under LA, right CFA access with 5F sheath, 5F Cobra/Simmons catheter selective left renal vein, then catheterization of left internal spermatic (gonadal) vein. Venogram demonstrating reflux to pampiniform plexus. Superselective positioning at inguinal ring level. Sequential deployment of ${c.coils} platinum microcoils (3-5mm) in sandwich fashion, interleaved with ${c.technique === 'coils + foam' ? '3% sodium tetradecyl sulfate (STS) foam (2-3mL)' : c.technique}. Completion venogram confirming complete occlusion with no residual reflux.`,
    synthesizeDiagnosis: (c) => `${c.laterality} varicocele (Grade ${c.grade}), successfully embolized.`,
    defaultMedications: [
      { sNo: 0, genericName: 'Paracetamol', medicine: 'Dolo', dosePower: '650mg', route: 'ORAL', frequency: 'BD', days: 3, instructions: 'For pain' },
      { sNo: 0, genericName: 'Pantoprazole', medicine: 'Pan', dosePower: '40mg', route: 'ORAL', frequency: 'OD', days: 5, instructions: 'Before meals' }
    ],
    conditionalMedications: [],
    followUpInstructions: ['Scrotal duplex at 3 months for recurrence check', 'Semen analysis at 3-6 months if subfertility was the indication', 'Andrology/urology follow-up'],
    redFlagWarnings: ['Sudden scrotal swelling or pain (testicular vein thrombosis)', 'Recurrent varicocele (visible/palpable veins)', 'Persistent pain >2 weeks'],
    expectedAttachments: [{ modality: 'DSA', description: 'Gonadal venogram pre and post embolization' }],
    ddcDrugs: [],
    dischargeAdvice: ['Wear scrotal support (langot) for 2 weeks', 'Avoid heavy lifting for 1 week'],
    procedureType: 'Minor',
    anaesthesiaDefault: 'Local Anesthesia',
    defaultAccessSite: 'Right CFA',
    defaultPostOpPlan: 'Observation for 4h, discharge same day'
  },
  {
    procedureKey: 'budd_chiari_dips',
    procedureFamily: 'Hepatic Interventions',
    icdPrimary: { code: 'I82.0', description: 'Budd-Chiari syndrome' },
    icdSecondary: [{ code: 'K76.6', description: 'Portal hypertension' }],
    criteriaFields: [
      { key: 'pathology', label: 'Pathology', type: 'select', options: [{ value: 'membranous IVC web', label: 'Membranous IVC Web' }, { value: 'hepatic vein thrombosis', label: 'Hepatic Vein Thrombosis' }, { value: 'combined', label: 'Combined' }], defaultValue: 'hepatic vein thrombosis' },
      { key: 'decompression', label: 'Decompression Type', type: 'select', options: [{ value: 'hepatic venoplasty', label: 'Hepatic Venoplasty' }, { value: 'transcaval DIPS', label: 'Transcaval DIPS' }, { value: 'transjugular TIPS', label: 'Transjugular TIPS' }], defaultValue: 'transcaval DIPS' },
      { key: 'stentType', label: 'Stent Type', type: 'select', options: [{ value: 'Gore Viatorr', label: 'Gore Viatorr' }, { value: 'bare metal Wallstent', label: 'Bare Metal Wallstent' }], defaultValue: 'Gore Viatorr' },
      { key: 'preGradient', label: 'Pre-op Gradient (mmHg)', type: 'number', defaultValue: 25 },
      { key: 'postGradient', label: 'Post-op Gradient (mmHg)', type: 'number', defaultValue: 10 },
      { key: 'ascitesGrade', label: 'Ascites Grade', type: 'select', options: [{ value: 'mild', label: 'Mild' }, { value: 'moderate', label: 'Moderate' }, { value: 'tense', label: 'Tense' }], defaultValue: 'tense' },
      { key: 'caudateHypertrophy', label: 'Caudate Hypertrophy', type: 'checkbox', defaultValue: true }
    ],
    synthesizeComplaints: (c) => `Patient presented with Budd-Chiari syndrome (Pathology: ${c.pathology}), ascites grade: ${c.ascitesGrade}.`,
    synthesizeHistory: (c) => `Known Budd-Chiari Syndrome. ${c.caudateHypertrophy ? 'Caudate lobe hypertrophy present.' : ''}`,
    synthesizeLocalExam: (c) => `Abdomen distended with ascites.`,
    synthesizeOperativeNote: (c) => `Under LA, right IJV access with 10F guiding sheath positioned in hepatic vein / IVC. ${c.decompression === 'transcaval DIPS' ? `Colapinto RUPS-100 transcaval puncture needle advanced under fluoroscopic guidance from IVC segment through caudate lobe into portal vein. Confirmed portal access with contrast injection and pressure measurement (Gradient: ${c.preGradient} mmHg). Tract dilatation with 8x40mm high-pressure balloon. Deployment of ${c.stentType} stent-graft. Post-deployment balloon molding. Final gradient measurement: ${c.postGradient} mmHg (target <12 mmHg).` : `Ultra-high-pressure balloon dilatation of IVC web/membrane (Venoplasty).`}`,
    synthesizeDiagnosis: (c) => `Budd-Chiari syndrome treated with ${c.decompression}.`,
    defaultMedications: [
      { sNo: 0, genericName: 'Enoxaparin', medicine: 'Clexane', dosePower: '1mg/kg', route: 'SUBCUTANEOUS', frequency: 'BD', days: 5, instructions: 'Bridging therapy' },
      { sNo: 0, genericName: 'Apixaban', medicine: 'Eliquis', dosePower: '5mg', route: 'ORAL', frequency: 'BD', days: 30, instructions: 'Long-term anticoagulation' },
      { sNo: 0, genericName: 'Torsemide', medicine: 'Dytor', dosePower: '20mg', route: 'ORAL', frequency: 'OD', days: 30, instructions: 'For ascites' },
      { sNo: 0, genericName: 'Spironolactone', medicine: 'Aldactone', dosePower: '50mg', route: 'ORAL', frequency: 'OD', days: 30, instructions: 'For ascites' },
      { sNo: 0, genericName: 'Lactulose', medicine: 'Looz', dosePower: '15mL', route: 'ORAL', frequency: 'TID', days: 30, instructions: 'Encephalopathy prophylaxis' },
      { sNo: 0, genericName: 'Rifaximin', medicine: 'Rcifax', dosePower: '550mg', route: 'ORAL', frequency: 'BD', days: 30, instructions: 'Encephalopathy prophylaxis' },
      { sNo: 0, genericName: 'Pantoprazole', medicine: 'Pan', dosePower: '40mg', route: 'ORAL', frequency: 'OD', days: 30, instructions: 'Before meals' }
    ],
    conditionalMedications: [],
    followUpInstructions: ['Doppler shunt patency at 24h, 1 week, 1 month, 3 months, 6 months', 'LFT + INR weekly x 4 weeks', 'Ascites volume assessment', 'Low-salt diet (<2g Na/day)', 'Hepatic encephalopathy screening'],
    redFlagWarnings: ['Altered sensorium / confusion (hepatic encephalopathy)', 'Massive GI bleeding (variceal)', 'Acute shunt thrombosis (return of tense ascites)', 'Fever with rigors', 'Active bleeding from access site'],
    expectedAttachments: [{ modality: 'DSA', description: 'Portograms showing pre and post decompression' }],
    ddcDrugs: [],
    dischargeAdvice: ['Strict compliance with anticoagulation', 'Low sodium diet'],
    procedureType: 'Major',
    anaesthesiaDefault: 'Local Anesthesia',
    defaultAccessSite: 'Right IJV',
    defaultPostOpPlan: 'ICU monitoring for 24h, monitor for bleeding/HE'
  },
  {
    procedureKey: 'pcn_nephrostomy',
    procedureFamily: 'Urological Interventions',
    icdPrimary: { code: 'N13.3', description: 'Other and unspecified hydronephrosis' },
    icdSecondary: [{ code: 'N28.8', description: 'Other specified disorders of kidney' }],
    criteriaFields: [
      { key: 'indication', label: 'Indication', type: 'select', options: [{ value: 'obstructive uropathy', label: 'Obstructive Uropathy' }, { value: 'pyonephrosis', label: 'Pyonephrosis' }, { value: 'ureteric calculus', label: 'Ureteric Calculus' }, { value: 'malignant compression', label: 'Malignant Compression' }], defaultValue: 'obstructive uropathy' },
      { key: 'laterality', label: 'Laterality', type: 'select', options: [{ value: 'right', label: 'Right' }, { value: 'left', label: 'Left' }, { value: 'bilateral', label: 'Bilateral' }], defaultValue: 'right' },
      { key: 'calyx', label: 'Access Calyx', type: 'select', options: [{ value: 'lower pole', label: 'Lower Pole' }, { value: 'middle', label: 'Middle' }, { value: 'upper pole', label: 'Upper Pole' }], defaultValue: 'lower pole' },
      { key: 'catheterSize', label: 'Catheter Size', type: 'select', options: [{ value: '8F', label: '8F Pigtail' }, { value: '10F', label: '10F Pigtail' }, { value: '12F', label: '12F Pigtail' }], defaultValue: '10F' },
      { key: 'urineOutput', label: 'Urine Appearance', type: 'select', options: [{ value: 'clear', label: 'Clear' }, { value: 'turbid', label: 'Turbid' }, { value: 'purulent', label: 'Purulent' }], defaultValue: 'clear' },
      { key: 'cultureSent', label: 'Culture Sent', type: 'checkbox', defaultValue: true }
    ],
    synthesizeComplaints: (c) => `Patient presented with ${c.indication} of ${c.laterality} kidney.`,
    synthesizeHistory: (c) => `History of hydronephrosis/renal obstruction.`,
    synthesizeLocalExam: (c) => `Flank tenderness present.`,
    synthesizeOperativeNote: (c) => `Under LA and US guidance, patient prone. Posterior calyceal puncture of ${c.laterality} kidney ${c.calyx} calyx using 18G trocar needle under real-time ultrasound. Aspiration confirming ${c.urineOutput} urine. 0.035" Amplatz Extra-Stiff guidewire advanced into renal pelvis and coiled. Sequential tract dilatation. ${c.catheterSize} locking pigtail nephrostomy catheter deployed with tip coiled in renal pelvis. Immediate drainage of urine. Catheter secured to skin with 2-0 Silk sutures. Connected to urobag.`,
    synthesizeDiagnosis: (c) => `${c.laterality} PCN placed for ${c.indication}.`,
    defaultMedications: [
      { sNo: 0, genericName: 'Ciprofloxacin', medicine: 'Ciplox', dosePower: '500mg', route: 'ORAL', frequency: 'BD', days: 7, instructions: 'Or culture-directed antibiotics' },
      { sNo: 0, genericName: 'Paracetamol', medicine: 'Dolo', dosePower: '650mg', route: 'ORAL', frequency: 'TID', days: 5, instructions: 'For pain/fever' },
      { sNo: 0, genericName: 'Pantoprazole', medicine: 'Pan', dosePower: '40mg', route: 'ORAL', frequency: 'OD', days: 7, instructions: 'Before meals' }
    ],
    conditionalMedications: [
      { condition: 'If Ureteric Calculus', conditionKey: 'indication', conditionValue: 'ureteric calculus', medication: { sNo: 0, genericName: 'Tamsulosin', medicine: 'Veltam', dosePower: '0.4mg', route: 'ORAL', frequency: 'OD', days: 14, instructions: 'Bedtime' } }
    ],
    followUpInstructions: ['Daily urine output monitoring (volume, color, clarity)', 'Serum creatinine at 48h and 1 week', 'Urology follow-up for definitive management (DJ stenting / PCNL / surgery)', 'Nephrostomy tube exchange at 6-8 weeks if long-term'],
    redFlagWarnings: ['Fever >101°F with rigors (urosepsis)', 'Sudden cessation of urine drainage (tube blockage/displacement)', 'Persistent hematuria >48h', 'Flank pain with perinephric collection'],
    expectedAttachments: [{ modality: 'Fluoroscopy', description: 'Nephrostogram' }],
    ddcDrugs: [],
    dischargeAdvice: ['Maintain bag below kidney level', 'Ensure tube is not kinked'],
    procedureType: 'Minor',
    anaesthesiaDefault: 'Local Anesthesia',
    defaultAccessSite: 'Percutaneous flank',
    defaultPostOpPlan: 'Monitor urine output and color'
  },
  {
    procedureKey: 'varicose_veins',
    procedureFamily: 'Venous Interventions',
    icdPrimary: { code: 'I83.90', description: 'Asymptomatic varicose veins of unspecified lower extremity' },
    icdSecondary: [],
    criteriaFields: [
      { key: 'laterality', label: 'Laterality', type: 'select', options: [{ value: 'Left', label: 'Left' }, { value: 'Right', label: 'Right' }, { value: 'Bilateral', label: 'Bilateral' }], defaultValue: 'Left' }
    ],
    synthesizeComplaints: (c) => `Patient presented with varicose veins in ${c.laterality} lower limb.`,
    synthesizeHistory: (c) => `Known case of venous insufficiency.`,
    synthesizeLocalExam: (c) => `Dilated tortuous veins noted in ${c.laterality} lower limb.`,
    synthesizeOperativeNote: (c) => `Under US guidance, access gained to target vein. Endovenous ablation performed successfully without immediate complications.`,
    synthesizeDiagnosis: (c) => `${c.laterality} lower limb varicose veins.`,
    defaultMedications: [
      { sNo: 0, genericName: 'Paracetamol', medicine: 'Dolo', dosePower: '650mg', route: 'ORAL', frequency: 'BD', days: 3, instructions: 'For pain' }
    ],
    conditionalMedications: [],
    followUpInstructions: ['USG Doppler after 1 month'],
    redFlagWarnings: ['Severe swelling or pain in leg'],
    expectedAttachments: [],
    ddcDrugs: [],
    dischargeAdvice: ['Wear compression stockings for 4 weeks'],
    procedureType: 'Minor',
    anaesthesiaDefault: 'Local Anesthesia',
    defaultAccessSite: 'Percutaneous',
    defaultPostOpPlan: 'Discharge same day'
  }
];

export function getDischargeTemplate(procedureKey: string): ProcedureDischargeTemplate | undefined {
  return ALL_PROCEDURE_DISCHARGE_TEMPLATES.find(t => t.procedureKey === procedureKey);
}

export function getAllProcedureFamilies(): { key: string; label: string }[] {
  return ALL_PROCEDURE_DISCHARGE_TEMPLATES.map(t => ({ key: t.procedureKey, label: t.procedureFamily }));
}
