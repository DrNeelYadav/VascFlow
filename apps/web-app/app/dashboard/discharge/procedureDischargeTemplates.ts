import type { DischargeMedicationItem, DdcDrugItem, ProceduralImageAttachment } from './ihmsDischargeTemplates';
import {
  VENOUS_CRITERIA_FIELDS,
  VARICOCELE_CRITERIA_FIELDS,
  mapCriteriaToVaricoseModel,
  mapCriteriaToVaricoceleModel,
  synthesizeVenousComplaints,
  synthesizeVenousHistory,
  synthesizeVenousLocalExam,
  synthesizeVenousOperativeNote,
  synthesizeVenousPostOpNote,
  synthesizeVenousDiagnosis,
  synthesizeVenousMedications,
  synthesizeVenousDischargeAdvice,
  synthesizeVenousRedFlags,
  synthesizeVaricoceleComplaints,
  synthesizeVaricoceleHistory,
  synthesizeVaricoceleLocalExam,
  synthesizeVaricoceleOperativeNote,
  synthesizeVaricocelePostOpNote,
  synthesizeVaricoceleDiagnosis,
  synthesizeVaricoceleMedications,
  synthesizeVaricoceleDischargeAdvice,
} from './venousClinicalEngine';

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

export interface PostOpRecoveryProtocol {
  accessSiteHemostasis: string;
  distalPulses: string;
  recoveryBedMonitoring: string;
  immediateComplications: string;
  recoveryStatus?: string;
  notes?: string;
  telemetryVitals?: string;
  sheathRemovalTime?: string;
  sheathStatus?: string;
  recoveryBed?: string;
  tubeDrainSecurityAndOutput?: string;
  completionDuplex?: string;
  egitStatus?: string;
  compressionStockings?: string;
  ambulationProtocol?: string;
  painVasScore?: string;
  chairScreening?: string;
}

export interface ProcedureDischargeTemplate {
  procedureKey: string;
  procedureFamily: string;
  icdPrimary: { code: string; description: string };
  icdSecondary: { code: string; description: string }[];
  criteriaFields: CriteriaField[];
  synthesizeComplaints: (criteria: Record<string, any>) => string;
  synthesizeHistory: (criteria: Record<string, any>) => string;
  synthesizeFamilyAndRiskHistory?: (criteria: Record<string, any>) => string;
  synthesizeLocalExam: (criteria: Record<string, any>) => string;
  synthesizeOperativeNote: (criteria: Record<string, any>) => string;
  synthesizePostOpRecoveryNote?: (criteria: Record<string, any>) => PostOpRecoveryProtocol;
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
    procedureFamily: 'PTBD & Biliary Stenting (SEMS)',
    icdPrimary: { code: 'K83.1', description: 'Obstruction of bile duct' },
    icdSecondary: [
      { code: 'C24.0', description: 'Malignant neoplasm of extrahepatic bile duct (Klatskin tumor)' },
      { code: 'C23', description: 'Malignant neoplasm of gallbladder with porta invasion' },
      { code: 'C25.0', description: 'Malignant neoplasm of head of pancreas' },
      { code: 'K83.0', description: 'Cholangitis' }
    ],
    criteriaFields: [
      {
        key: 'bismuthCorlette',
        label: 'Stricture Classification (Bismuth-Corlette)',
        type: 'select',
        options: [
          { value: 'Bismuth-Corlette Type I (Stricture distal to confluence)', label: 'Bismuth-Corlette Type I (Distal to Confluence)' },
          { value: 'Bismuth-Corlette Type II (Stricture reaches confluence, patent secondary ducts)', label: 'Bismuth-Corlette Type II (At Confluence)' },
          { value: 'Bismuth-Corlette Type IIIa (Involves confluence & right secondary intrahepatic ducts)', label: 'Bismuth-Corlette Type IIIa (Right Extension)' },
          { value: 'Bismuth-Corlette Type IIIb (Involves confluence & left secondary intrahepatic ducts)', label: 'Bismuth-Corlette Type IIIb (Left Extension)' },
          { value: 'Bismuth-Corlette Type IV (Bilateral secondary intrahepatic ductal involvement)', label: 'Bismuth-Corlette Type IV (Bilateral / Multicentric)' },
          { value: 'Distal Common Bile Duct (CBD) / Periampullary Stricture', label: 'Distal CBD / Periampullary Stricture' }
        ],
        defaultValue: 'Bismuth-Corlette Type II (Stricture reaches confluence, patent secondary ducts)'
      },
      {
        key: 'obstructionEtiology',
        label: 'Etiology of Biliary Obstruction',
        type: 'select',
        options: [
          { value: 'Hilar Cholangiocarcinoma (Klatskin Tumor)', label: 'Hilar Cholangiocarcinoma (Klatskin Tumor)' },
          { value: 'Gallbladder Carcinoma infiltrating porta hepatis', label: 'Gallbladder Carcinoma (Porta Invasion)' },
          { value: 'Pancreatic Head Adenocarcinoma', label: 'Pancreatic Head Adenocarcinoma' },
          { value: 'Periampullary Carcinoma', label: 'Periampullary Carcinoma' },
          { value: 'Benign Post-Cholecystectomy / Hepaticojejunostomy (HJ) Stricture', label: 'Benign Post-Op / HJ Stricture' },
          { value: 'Recurrent Pyogenic Cholangitis with biliary lithiasis', label: 'Recurrent Pyogenic Cholangitis' }
        ],
        defaultValue: 'Hilar Cholangiocarcinoma (Klatskin Tumor)'
      },
      {
        key: 'accessApproach',
        label: 'Percutaneous Access Approach',
        type: 'select',
        options: [
          { value: 'Right intercostal approach (10th/11th ICS mid-axillary line, posterior sectoral duct)', label: 'Right Intercostal (Posterior Sectoral Duct)' },
          { value: 'Left subxiphoid approach (Segment III duct under US guidance)', label: 'Left Subxiphoid (Segment III Duct)' },
          { value: 'Bilateral ductal access (Right intercostal + Left subxiphoid)', label: 'Bilateral Ductal Access (Right + Left)' }
        ],
        defaultValue: 'Right intercostal approach (10th/11th ICS mid-axillary line, posterior sectoral duct)'
      },
      {
        key: 'drainageType',
        label: 'Drainage & Stenting Strategy',
        type: 'select',
        options: [
          { value: 'Internal-External Ring Biliary Catheter Drainage', label: 'Internal-External Ring Drainage' },
          { value: 'Biliary SEMS Deployment + Internal-External Ring Catheter', label: 'SEMS Deployment + Internal-External Catheter' },
          { value: 'Primary Biliary SEMS Deployment alone (Stent & Tract Embolization)', label: 'Primary SEMS Deployment Alone' },
          { value: 'External Drainage Only (Stricture uncrossable in acute sepsis)', label: 'External Drainage Only (Cross Failure / Sepsis)' }
        ],
        defaultValue: 'Internal-External Ring Biliary Catheter Drainage'
      },
      {
        key: 'catheterSize',
        label: 'Drainage Catheter Size',
        type: 'select',
        options: [
          { value: '8.5F Cook Ring Biliary Drainage Catheter', label: '8.5F Cook Ring Biliary Catheter' },
          { value: '10F Cook Ring Biliary Drainage Catheter', label: '10F Cook Ring Biliary Catheter' },
          { value: '12F Mac-Loc Multipurpose Pigtail Catheter', label: '12F Mac-Loc Multipurpose Pigtail' }
        ],
        defaultValue: '10F Cook Ring Biliary Drainage Catheter'
      },
      {
        key: 'stentSpecs',
        label: 'Biliary Stent Specification',
        type: 'select',
        options: [
          { value: '10mm x 80mm Self-Expanding Uncovered Nitinol SEMS', label: '10mm x 80mm Uncovered Nitinol SEMS' },
          { value: '10mm x 60mm Self-Expanding Uncovered Nitinol SEMS', label: '10mm x 60mm Uncovered Nitinol SEMS' },
          { value: '10mm x 80mm Fully Covered Nitinol SEMS (Distal CBD)', label: '10mm x 80mm Fully Covered SEMS' },
          { value: 'None (Catheter Drainage Only)', label: 'None (Catheter Drainage Only)' }
        ],
        defaultValue: 'None (Catheter Drainage Only)'
      },
      {
        key: 'bileAppearance',
        label: 'Initial Bile Output Appearance',
        type: 'select',
        options: [
          { value: 'Golden-yellow clear bile', label: 'Golden-Yellow Clear Bile' },
          { value: 'Thick greenish-brown bile', label: 'Thick Greenish-Brown Bile' },
          { value: 'Turbid purulent exudate (acute cholangitis)', label: 'Turbid Purulent Exudate (Cholangitis)' },
          { value: 'Mildly sanguineous bile', label: 'Mildly Sanguineous Bile' }
        ],
        defaultValue: 'Golden-yellow clear bile'
      },
      { key: 'cholangitis', label: 'Acute Cholangitis Present (Charcot Triad)', type: 'checkbox', defaultValue: false },
      {
        key: 'jaundiceSeverity',
        label: 'Clinical Jaundice Severity',
        type: 'select',
        options: [
          { value: 'Severe (Deep clinical icterus, intractable pruritus, dark urine, acholic stools)', label: 'Severe (Deep Icterus & Pruritus)' },
          { value: 'Moderate icterus', label: 'Moderate Icterus' },
          { value: 'Mild icterus', label: 'Mild Icterus' }
        ],
        defaultValue: 'Severe (Deep clinical icterus, intractable pruritus, dark urine, acholic stools)'
      }
    ],
    synthesizeComplaints: (c) => `Patient presented with progressive obstructive jaundice${c.cholangitis ? ' complicated by acute ascending cholangitis (spiking fever with chills/rigors and RUQ pain)' : ''}, generalized intractable pruritus, dark tea-colored urine, and clay-colored acholic stools. Clinical severity: ${c.jaundiceSeverity}.`,
    synthesizeHistory: (c) => `Confirmed biliary ductal obstruction secondary to ${c.obstructionEtiology}, morphologically classified as ${c.bismuthCorlette}. History notable for progressive cholestasis and biliary stasis without artificial blood test values.`,
    synthesizeFamilyAndRiskHistory: (c) => `Endemic geographical region for hepatobiliary malignancy (Rajasthan / Gangetic basin); predisposing factors include chronic calculous cholecystitis, prior biliary-enteric surgery, or choledochal anomaly. Strictly verified clinical records.`,
    synthesizeLocalExam: (c) => `Deep scleral and cutaneous icterus noted. Right hypochondrial tenderness on deep palpation${c.cholangitis ? ' with involuntary guarding' : ''}; hepatomegaly present. Catheter entry site over ${c.accessApproach.includes('Right') ? 'right lower intercostal space' : 'epigastrium'} clean, dry, zero subcutaneous bile leak, zero hematoma.`,
    synthesizeOperativeNote: (c) => `Under strict aseptic technique, conscious sedation, and local anesthesia. Access: ${c.accessApproach} targeted under real-time ultrasound and fluoroscopic guidance. Peripheral biliary radicle punctured using a 21G Chiba needle / Neff access set with 0.018" nitinol wire. Contrast cholangiogram delineated dilated intrahepatic radicles with abrupt cutoff confirming ${c.bismuthCorlette} due to ${c.obstructionEtiology}. A 6F transitional dilator was positioned; an 0.035" hydrophilic Stiff angled guidewire (Terumo Radiofocus) supported by a 5F Kumpe catheter was manipulated across the stricture into the duodenum. Exchanged over an 0.035" Amplatz Super Stiff guidewire. ${c.drainageType.includes('SEMS') ? `Deployment of ${c.stentSpecs} self-expanding nitinol biliary stent across the obstruction with 1.5 cm margins above and below the stricture. Post-dilation balloon molding performed. Tract embolized with Gelfoam torpedoes to prevent hemobilia.` : ''} Deployed ${c.catheterSize} with multiple drainage side-holes bridging the stricture into the duodenum for internal-external drainage (or positioned proximally for external drainage). Locking pigtail loop formed and locked securely. Immediate brisk drainage of ${c.bileAppearance} obtained. Catheter secured to skin with 2-0 Silk stay sutures and connected to sterile closed gravity drainage bag.`,
    synthesizeDiagnosis: (c) => `Obstructive jaundice secondary to ${c.bismuthCorlette} (${c.obstructionEtiology}), successfully managed with ${c.drainageType}.`,
    synthesizePostOpRecoveryNote: (c) => ({
      accessSiteHemostasis: `Puncture site clean and dry; transparent occlusive waterproof dressing intact. ${c.catheterSize} firmly anchored with 2-0 Silk suture and retention plate. Zero active peri-catheter bile leak, zero subcutaneous hematoma.`,
      distalPulses: 'Bilateral peripheral pulses strong (+++)',
      recoveryBedMonitoring: 'Gastro IR Ward / HDU. Vital signs (BP, HR, RR, SpO2, Temp) monitored q15m x 1h, q30m x 2h, then q2h. Monitor for post-decompression bacteremic rigors, hypotension, or vasovagal episode.',
      immediateComplications: 'Nil documented - Zero hemobilia, zero biliary peritonitis (abdomen soft, non-tender, zero guarding), zero pneumothorax, zero catheter dislodgement.',
      recoveryStatus: `Conscious, oriented, pain score VAS 2/10. Bile drainage bag positioned dependent below puncture level. Initial bile output: ${c.bileAppearance}. Free gravity flow established.`,
      notes: `PTBD successfully placed across stricture with multiple side-holes draining into duodenum. Flush protocol (10mL NS q8h) to start after 6 hours. Maintain gravity drainage.`,
      telemetryVitals: 'BP: 124/78 mmHg, HR: 76 bpm regular, SpO2: 99% on room air, RR: 16/min, Temp: 98.4°F',
      sheathRemovalTime: 'N/A - Ring biliary drainage catheter left in situ, locked and connected to closed gravity drainage system.',
      sheathStatus: 'Catheter in Situ',
      recoveryBed: 'Gastro IR Post-Op Ward Bed 08'
    }),
    defaultMedications: [
      { sNo: 0, genericName: 'Ursodeoxycholic Acid', medicine: 'Tab. Ursodeoxycholic Acid 300mg [RMSCL DDC #658]', dosePower: '300mg', route: 'ORAL', frequency: 'BD', days: 30, instructions: 'After meals' },
      { sNo: 0, genericName: 'Ciprofloxacin', medicine: 'Tab. Ciprofloxacin 500mg [RMSCL DDC #112]', dosePower: '500mg', route: 'ORAL', frequency: 'BD', days: 7, instructions: 'After meals' },
      { sNo: 0, genericName: 'Metronidazole', medicine: 'Tab. Metronidazole 400mg [RMSCL DDC #140]', dosePower: '400mg', route: 'ORAL', frequency: 'TID', days: 7, instructions: 'After meals' },
      { sNo: 0, genericName: 'Pantoprazole', medicine: 'Tab. Pantoprazole 40mg [RMSCL DDC #142]', dosePower: '40mg', route: 'ORAL', frequency: 'OD', days: 14, instructions: 'Before meals' },
      { sNo: 0, genericName: 'Paracetamol', medicine: 'Tab. Paracetamol 650mg [RMSCL DDC #28]', dosePower: '650mg', route: 'ORAL', frequency: 'SOS', days: 5, instructions: 'For pain/fever' }
    ],
    conditionalMedications: [],
    followUpInstructions: [
      'Weekly Liver Function Tests (LFT) for the first month to monitor bilirubin clearance',
      'Daily bile bag output charting (volume, color, consistency, sediment)',
      'Catheter flush protocol: Flush gently with 10mL sterile 0.9% Normal Saline q8h under strict aseptic precautions',
      'Ring biliary drainage catheter routine exchange at 8-12 weeks (3 months)',
      'SEMS patency surveillance with abdominal ultrasound / MRCP at 3 and 6 months',
      'Surgical oncology / GI surgery review for definitive resection or systemic chemotherapy'
    ],
    redFlagWarnings: [
      'High-grade fever (>101°F) with shaking chills and rigors (ascending acute cholangitis)',
      'Sudden stoppage of bile drainage accompanied by right hypochondrial pain or deepening jaundice',
      'Fresh red blood in drainage bag or passing black tarry stools (hemobilia)',
      'Bile leakage around catheter soaking dressing or clothing',
      'Severe generalized abdominal pain, distension, or vomiting (biliary peritonitis)'
    ],
    expectedAttachments: [{ modality: 'Fluoroscopy', description: 'Percutaneous transhepatic cholangiogram pre and post stenting/drainage' }],
    ddcDrugs: [],
    dischargeAdvice: [
      'Maintain strict catheter and drainage bag hygiene; keep drainage bag dependent below puncture site at all times',
      'Record daily 24-hour bile drainage output in a notebook',
      'Flush catheter with 10mL sterile saline q8h as instructed; never aspirate forcefully',
      'Keep puncture dressing clean, dry, and intact; protect catheter during bathing'
    ],
    procedureType: 'Major',
    anaesthesiaDefault: 'Local Anesthesia',
    defaultAccessSite: 'Right Intercostal (Mid-Axillary Line)',
    defaultPostOpPlan: 'Ward observation for 24-48 hours, monitor bile volume, color, and signs of sepsis'
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
      { sNo: 0, genericName: 'Prednisolone', medicine: 'Tab. Prednisolone 20mg [RMSCL DDC #621]', dosePower: '20mg', route: 'ORAL', frequency: 'OD', days: 5, instructions: 'Tapering dose' },
      { sNo: 0, genericName: 'Diclofenac', medicine: 'Tab. Diclofenac 50mg + Serratiopeptidase 10mg [RMSCL DDC #622]', dosePower: '50mg', route: 'ORAL', frequency: 'BD', days: 5, instructions: 'After meals' },
      { sNo: 0, genericName: 'Pantoprazole', medicine: 'Tab. Pantoprazole 40mg [RMSCL DDC #142]', dosePower: '40mg', route: 'ORAL', frequency: 'OD', days: 7, instructions: 'Before meals' },
      { sNo: 0, genericName: 'Paracetamol', medicine: 'Tab. Paracetamol 650mg [RMSCL DDC #28]', dosePower: '650mg', route: 'ORAL', frequency: 'TID', days: 5, instructions: 'For pain' }
    ],
    conditionalMedications: [
      { condition: 'If skin breakdown present', conditionKey: 'skinInvolvement', conditionValue: true, medication: { sNo: 0, genericName: 'Amoxicillin-Clavulanate', medicine: 'Cap. Amoxicillin and Potassium Clavulanate 625mg [RMSCL DDC #505]', dosePower: '625mg', route: 'ORAL', frequency: 'BD', days: 5, instructions: 'After meals' } }
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
    procedureFamily: 'Bronchial & Pulmonary Embolization',
    icdPrimary: { code: 'R04.2', description: 'Hemoptysis' },
    icdSecondary: [
      { code: 'A15.0', description: 'Tuberculosis of lung, confirmed bacteriologically' },
      { code: 'A16.2', description: 'Tuberculosis of lung, without mention of bacteriological confirmation' },
      { code: 'J47.9', description: 'Bronchiectasis, unspecified' },
      { code: 'B44.81', description: 'Allergic bronchopulmonary aspergillosis / Aspergilloma' },
      { code: 'C34.90', description: 'Malignant neoplasm of bronchus or lung, unspecified' },
      { code: 'I77.0', description: 'Arteriovenous fistula, acquired' }
    ],
    criteriaFields: [
      { key: 'hemoptysisVolume', label: 'Hemoptysis Severity & Volume', type: 'select', group: 'Clinical Presentation & Severity', options: [
        { value: 'massive >200-500 mL/24h with airway compromise', label: 'Massive (>200-500 mL/24h with airway compromise)' },
        { value: 'submassive 100-200 mL/24h', label: 'Submassive / Moderate (100-200 mL/24h)' },
        { value: 'mild recurrent <100 mL/24h', label: 'Recurrent Minor (<100 mL/24h refractory to conservative care)' }
      ], defaultValue: 'massive >200-500 mL/24h with airway compromise' },
      { key: 'episodeType', label: 'Episode Chronicity', type: 'select', group: 'Clinical Presentation & Severity', options: [
        { value: 'acute life-threatening presentation', label: 'Acute life-threatening presentation' },
        { value: 'recurrent secondary episode post conservative failure', label: 'Recurrent secondary episode post conservative failure' },
        { value: 'chronic intermittent hemoptysis', label: 'Chronic intermittent hemoptysis' }
      ], defaultValue: 'acute life-threatening presentation' },
      { key: 'etiology', label: 'Underlying Etiology', type: 'select', group: 'Clinical Presentation & Severity', options: [
        { value: 'post-tubercular fibro-cavitary sequelae with bronchiectasis', label: 'Post-tubercular fibro-cavitary sequelae with bronchiectasis' },
        { value: 'active pulmonary tuberculosis under DOTS therapy', label: 'Active pulmonary tuberculosis under DOTS therapy' },
        { value: 'pulmonary aspergilloma (mycetoma in pre-existing cavity)', label: 'Pulmonary aspergilloma (mycetoma in cavity)' },
        { value: 'cystic bronchiectasis with recurrent superinfection', label: 'Cystic bronchiectasis with recurrent superinfection' },
        { value: 'bronchogenic carcinoma / central endobronchial tumor', label: 'Bronchogenic carcinoma / endobronchial tumor' },
        { value: 'bronchial artery pseudoaneurysm (Rasmussen aneurysm)', label: 'Bronchial artery pseudoaneurysm (Rasmussen aneurysm)' },
        { value: 'cryptogenic hemoptysis', label: 'Cryptogenic hemoptysis' }
      ], defaultValue: 'post-tubercular fibro-cavitary sequelae with bronchiectasis' },
      { key: 'smokingHistory', label: 'Smoking / Exposure History', type: 'select', group: 'Risk & Family History', options: [
        { value: 'Non-smoker with nil significant biomass smoke exposure', label: 'Non-smoker' },
        { value: 'Current heavy tobacco smoker (>15 pack-years)', label: 'Current smoker (>15 pack-years)' },
        { value: 'Ex-smoker with chronic obstructive pulmonary disease (COPD)', label: 'Ex-smoker with COPD' },
        { value: 'Chronic biomass cooking smoke exposure', label: 'Chronic biomass smoke exposure' }
      ], defaultValue: 'Non-smoker with nil significant biomass smoke exposure' },
      { key: 'tbHistory', label: 'Tuberculosis History', type: 'select', group: 'Risk & Family History', options: [
        { value: 'History of pulmonary TB treated with completed 6-month Category I ATT regimen', label: 'Treated pulmonary TB (completed Category I ATT)' },
        { value: 'Active pulmonary TB currently receiving DOTS Category I antitubercular regimen', label: 'Active pulmonary TB on DOTS ATT' },
        { value: 'History of multidrug-resistant tuberculosis (MDR-TB)', label: 'History of MDR-TB' },
        { value: 'No prior clinical history of tuberculosis', label: 'No prior TB history' }
      ], defaultValue: 'History of pulmonary TB treated with completed 6-month Category I ATT regimen' },
      { key: 'bleedingDiathesis', label: 'Bleeding Diathesis / Coagulation Status', type: 'select', group: 'Risk & Family History', options: [
        { value: 'No history of bleeding diathesis; baseline coagulation profile strictly within acceptable limits', label: 'No bleeding diathesis / normal coagulation' },
        { value: 'History of antiplatelet therapy (Aspirin/Clopidogrel) temporarily withheld', label: 'On antiplatelet therapy' },
        { value: 'History of oral anticoagulation temporarily paused for intervention', label: 'On oral anticoagulants' }
      ], defaultValue: 'No history of bleeding diathesis; baseline coagulation profile strictly within acceptable limits' },
      { key: 'familyHistory', label: 'Family History', type: 'select', group: 'Risk & Family History', options: [
        { value: 'Nil family history of hemoptysis, chronic respiratory disease, or bleeding diathesis', label: 'Nil significant family history' },
        { value: 'Family history of pulmonary tuberculosis in household contacts', label: 'Family history of household TB contact' },
        { value: 'Family history of hereditary hemorrhagic telangiectasia (HHT / Osler-Weber-Rendu)', label: 'Family history of HHT' }
      ], defaultValue: 'Nil family history of hemoptysis, chronic respiratory disease, or bleeding diathesis' },
      { key: 'cirseClassification', label: 'CIRSE / SIR Classification', type: 'select', group: 'Classification & Staging', options: [
        { value: 'CIRSE Category 2: Emergency / Life-threatening Hemostatic Embolization', label: 'CIRSE Category 2: Emergency / Life-threatening' },
        { value: 'CIRSE Category 1: Urgent / Elective Recurrent Hemoptysis Embolization', label: 'CIRSE Category 1: Urgent / Elective Recurrent' }
      ], defaultValue: 'CIRSE Category 2: Emergency / Life-threatening Hemostatic Embolization' },
      { key: 'ctpaLocalization', label: 'CTPA / CTA Chest Localization', type: 'select', group: 'Classification & Staging', options: [
        { value: 'Right upper lobe fibro-cavitary lesion with hypertrophied bronchial feeder', label: 'Right upper lobe cavitary disease' },
        { value: 'Right lower lobe bronchiectasis with systemic arterial hypervascularity', label: 'Right lower lobe bronchiectasis' },
        { value: 'Left upper lobe cavitary destruction and volume loss', label: 'Left upper lobe cavitary disease' },
        { value: 'Left lower lobe basal bronchiectasis and ground-glass alveolar opacities', label: 'Left lower lobe bronchiectasis' },
        { value: 'Bilateral diffuse cylindrical/cystic bronchiectasis', label: 'Bilateral diffuse bronchiectasis' }
      ], defaultValue: 'Right upper lobe fibro-cavitary lesion with hypertrophied bronchial feeder' },
      { key: 'accessRoute', label: 'Vascular Access Site', type: 'select', group: 'Vascular Access & Hardware', options: [
        { value: 'Right Common Femoral Artery (CFA)', label: 'Right Common Femoral Artery (CFA)' },
        { value: 'Left Common Femoral Artery (CFA)', label: 'Left Common Femoral Artery (CFA)' },
        { value: 'Right Radial Artery (Transradial access)', label: 'Right Radial Artery (Transradial)' }
      ], defaultValue: 'Right Common Femoral Artery (CFA)' },
      { key: 'sheathSize', label: 'Vascular Sheath Size', type: 'select', group: 'Vascular Access & Hardware', options: [
        { value: '5F Cordis/Terumo Introducer Sheath', label: '5F Introducer Sheath' },
        { value: '4F Terumo Introducer Sheath', label: '4F Introducer Sheath' },
        { value: '6F Cordis Introducer Sheath', label: '6F Introducer Sheath' }
      ], defaultValue: '5F Cordis/Terumo Introducer Sheath' },
      { key: 'diagnosticCatheter', label: 'Diagnostic Catheter', type: 'select', group: 'Vascular Access & Hardware', options: [
        { value: '5F Mikaelsson catheter (dedicated bronchial curve)', label: '5F Mikaelsson (dedicated bronchial)' },
        { value: '5F Cobra (C2) catheter', label: '5F Cobra (C2)' },
        { value: '5F Simmons 1 (SIM-1) catheter', label: '5F Simmons 1 (SIM-1)' },
        { value: '5F Shepherd Crook catheter', label: '5F Shepherd Crook' }
      ], defaultValue: '5F Mikaelsson catheter (dedicated bronchial curve)' },
      { key: 'microcatheter', label: 'Superselective Microcatheter', type: 'select', group: 'Vascular Access & Hardware', options: [
        { value: '2.7F Progreat (Terumo) microcatheter with 0.014" GT guidewire', label: '2.7F Progreat (Terumo) + 0.014" GT wire' },
        { value: '2.0F Progreat (Terumo) microcatheter with 0.014" Fielder wire', label: '2.0F Progreat (Terumo) + 0.014" wire' },
        { value: '2.4F Asahi Corsair microcatheter with 0.014" Transend wire', label: '2.4F Asahi Corsair + 0.014" wire' }
      ], defaultValue: '2.7F Progreat (Terumo) microcatheter with 0.014" GT guidewire' },
      { key: 'targetArteries', label: 'Target Culprit Arteries', type: 'select', group: 'Target Anatomy & Angiography', options: [
        { value: 'Right intercostobronchial trunk (ICBT)', label: 'Right intercostobronchial trunk (ICBT)' },
        { value: 'Right common bronchial artery', label: 'Right common bronchial artery' },
        { value: 'Left superior bronchial artery', label: 'Left superior bronchial artery' },
        { value: 'Left inferior bronchial artery', label: 'Left inferior bronchial artery' },
        { value: 'Bilateral bronchial arteries (right ICBT and left bronchial)', label: 'Bilateral bronchial arteries' },
        { value: 'Right ICBT with non-bronchial systemic collaterals (intercostal and internal mammary)', label: 'Right ICBT + Systemic collaterals' }
      ], defaultValue: 'Right intercostobronchial trunk (ICBT)' },
      { key: 'angiographicFindings', label: 'Angiographic Vascular Findings', type: 'select', group: 'Target Anatomy & Angiography', options: [
        { value: 'Hypertrophied, tortuous bronchial artery with intense parenchymal vascular blush and bronchopulmonary shunting', label: 'Hypertrophy, blush, and shunting' },
        { value: 'Active contrast extravasation / pseudoaneurysm (Rasmussen aneurysm) in cavitary wall', label: 'Active extravasation / Rasmussen pseudoaneurysm' },
        { value: 'Hypervascular parenchymal stain and systemic-to-pulmonary artery shunting without active extravasation', label: 'Hypervascular blush with systemic-PA shunting' },
        { value: 'Grossly dilated tortuous bronchial feeder with neo-vascular network', label: 'Grossly dilated feeder with neovascularity' }
      ], defaultValue: 'Hypertrophied, tortuous bronchial artery with intense parenchymal vascular blush and bronchopulmonary shunting' },
      { key: 'spinalCordProtection', label: 'Spinal Cord & Non-Target Vessel Protection', type: 'select', group: 'Target Anatomy & Angiography', options: [
        { value: 'Careful interrogation of the ICBT confirmed origin of an intercostal branch; the anterior spinal artery (hairpin loop of the Great Anterior Radiculomedullary Artery / Artery of Adamkiewicz) was meticulously searched for. The microcatheter was advanced superselectively well DISTAL to the posterior intercostal and radiculomedullary takeoff, wedged into the pure bronchial feeder. Zero filling of anterior spinal axis verified prior to embolic delivery.', label: 'Microcatheter advanced strictly DISTAL to spinal/radiculomedullary branch; spinal cord protected' },
        { value: 'High-resolution superselective DSA run confirmed pure bronchial arterial branching with complete absence of anterior spinal artery or radiculomedullary collaterals prior to particle injection.', label: 'Absence of anterior spinal artery confirmed on superselective run' },
        { value: 'Microcatheter wedged deeply past all systemic non-target branches; absence of esophageal, vertebral, and spinal collaterals verified on multi-angle fluoroscopy.', label: 'Esophageal, vertebral, and spinal non-target collaterals safely excluded' }
      ], defaultValue: 'Careful interrogation of the ICBT confirmed origin of an intercostal branch; the anterior spinal artery (hairpin loop of the Great Anterior Radiculomedullary Artery / Artery of Adamkiewicz) was meticulously searched for. The microcatheter was advanced superselectively well DISTAL to the posterior intercostal and radiculomedullary takeoff, wedged into the pure bronchial feeder. Zero filling of anterior spinal axis verified prior to embolic delivery.' },
      { key: 'embolicAgent', label: 'Embolic Agent & Particle Size', type: 'select', group: 'Embolic Agent & Endpoint', options: [
        { value: 'PVA particles 300-500 µm (Polyvinyl Alcohol) suspended in non-ionic contrast', label: 'PVA particles 300-500 µm' },
        { value: 'PVA particles 500-710 µm (Polyvinyl Alcohol) suspended in non-ionic contrast', label: 'PVA particles 500-710 µm' },
        { value: 'Calibrated microspheres (Embosphere 300-500 µm)', label: 'Embosphere microspheres 300-500 µm' },
        { value: 'Calibrated microspheres (Embosphere 500-700 µm)', label: 'Embosphere microspheres 500-700 µm' },
        { value: 'PVA particles 300-500 µm followed by pushable/detachable Microcoils (2-4mm) for pseudoaneurysm exclusion', label: 'PVA 300-500 µm + Microcoils (pseudoaneurysm)' },
        { value: 'Gelfoam slurry followed by PVA particles 300-500 µm', label: 'Gelfoam slurry + PVA 300-500 µm' }
      ], defaultValue: 'PVA particles 300-500 µm (Polyvinyl Alcohol) suspended in non-ionic contrast' },
      { key: 'technicalEndpoint', label: 'Technical Success Endpoint', type: 'select', group: 'Embolic Agent & Endpoint', options: [
        { value: 'Complete devascularization of target hypervascular territory with near-stasis of flow ("dead-tree" appearance) and preservation of spinal and aortic parent vessel architecture', label: 'Near-stasis ("dead-tree" appearance) with parenchymal devascularization' },
        { value: 'Complete angiographic cessation of active contrast extravasation and complete ablation of hypervascular parenchymal stain', label: 'Cessation of active extravasation and blush ablation' },
        { value: 'Sluggish 5-heartbeat contrast clearance in main bronchial feeder with complete occlusion of distal neo-vessels', label: 'Sluggish 5-beat clearance with distal neo-vessel occlusion' }
      ], defaultValue: 'Complete devascularization of target hypervascular territory with near-stasis of flow ("dead-tree" appearance) and preservation of spinal and aortic parent vessel architecture' },
      { key: 'hemostasisMethod', label: 'Access Site Hemostasis', type: 'select', group: 'Post-Operative Recovery & Hemostasis', options: [
        { value: 'Manual compression for 15-20 minutes following sheath removal, achieving complete hemostasis, followed by sterile compressive pressure bandage', label: 'Manual compression (15-20 min) with pressure dressing' },
        { value: 'Deployment of 6F Angio-Seal vascular closure device with immediate extravascular collagen-plug hemostasis', label: 'Angio-Seal 6F vascular closure device' },
        { value: 'TR Band radial compression device applied with patent hemostasis verified by Barbeau test', label: 'TR Band radial compression band' }
      ], defaultValue: 'Manual compression for 15-20 minutes following sheath removal, achieving complete hemostasis, followed by sterile compressive pressure bandage' },
      { key: 'distalPulseStatus', label: 'Distal Pulse Status', type: 'select', group: 'Post-Operative Recovery & Hemostasis', options: [
        { value: 'Right and left dorsalis pedis (DP) and posterior tibial (PT) pulses strong (+++), palpable, symmetric; capillary refill <2 seconds; digits warm bilaterally', label: 'Bilateral DP and PT pulses strong (+++), warm extremities' },
        { value: 'Right radial pulse strong (+++), patent arch, warm hand with instant capillary refill', label: 'Right radial pulse strong (+++), patent arch' }
      ], defaultValue: 'Right and left dorsalis pedis (DP) and posterior tibial (PT) pulses strong (+++), palpable, symmetric; capillary refill <2 seconds; digits warm bilaterally' },
      { key: 'recoveryBed', label: 'Recovery Bed & Monitoring Location', type: 'select', group: 'Post-Operative Recovery & Hemostasis', options: [
        { value: 'Cath-Lab Observation Holding / Interventional Radiology HDU Bed', label: 'Cath-Lab Holding / IR HDU' },
        { value: 'Respiratory Intensive Care Unit (RICU) Step-Down Bed', label: 'Respiratory Intensive Care Unit (RICU)' }
      ], defaultValue: 'Cath-Lab Observation Holding / Interventional Radiology HDU Bed' },
      { key: 'monitoringProtocol', label: 'Monitoring Protocol', type: 'select', group: 'Post-Operative Recovery & Hemostasis', options: [
        { value: 'Strict supine bed rest with immobilized right lower extremity for 4-6 hours (or 2 hours if closure device); continuous pulse oximetry; hemodynamic vitals monitoring (BP, HR, RR, SpO2) q15m x 1h, q30m x 2h, then q1h x 4h; serial puncture site inspection for hematoma or oozing', label: 'Groin observation 4-6h, vitals q15m x 1h, q30m x 2h, q1h x 4h' },
        { value: 'Transradial recovery protocol: TR Band gradual pressure release (2-3 mL air every 30 minutes over 2-3 hours); vitals q15m x 1h, q30m x 2h; arm immobilized on arm board', label: 'Radial band deflation protocol over 2-3 hours' }
      ], defaultValue: 'Strict supine bed rest with immobilized right lower extremity for 4-6 hours (or 2 hours if closure device); continuous pulse oximetry; hemodynamic vitals monitoring (BP, HR, RR, SpO2) q15m x 1h, q30m x 2h, then q1h x 4h; serial puncture site inspection for hematoma or oozing' },
      { key: 'immediateComplications', label: 'Immediate Complication Surveillance', type: 'select', group: 'Post-Operative Recovery & Hemostasis', options: [
        { value: 'Nil immediate procedural complications. Zero groin hematoma or pseudoaneurysm. Comprehensive neurological assessment: lower extremity motor power intact 5/5 bilaterally, sensation to light touch and pinprick normal, deep tendon reflexes symmetric, normal plantars (strictly ruling out anterior spinal cord ischemia / paraparesis). Cough suppression maintained; zero fresh hemoptysis post-procedure.', label: 'Nil complications; zero hematoma; neurological intact ruling out spinal ischemia' },
        { value: 'Mild transient retrosternal discomfort managed with oral analgesics; zero neurological deficits; zero puncture site complications.', label: 'Mild transient retrosternal discomfort; zero neurological deficits' }
      ], defaultValue: 'Nil immediate procedural complications. Zero groin hematoma or pseudoaneurysm. Comprehensive neurological assessment: lower extremity motor power intact 5/5 bilaterally, sensation to light touch and pinprick normal, deep tendon reflexes symmetric, normal plantars (strictly ruling out anterior spinal cord ischemia / paraparesis). Cough suppression maintained; zero fresh hemoptysis post-procedure.' }
    ],
    synthesizeComplaints: (c) => `Patient presented with ${c.hemoptysisVolume || 'massive hemoptysis (>200-500 mL/24h with airway compromise)'}, presenting as an ${c.episodeType || 'acute life-threatening presentation'}. Hemoptysis was characterized by repeated paroxysmal coughing of fresh blood, associated with breathlessness, postural dizziness, and chest tightness. Emergency Interventional Radiology consultation was requested for definitive endovascular hemostatic embolization.`,
    synthesizeHistory: (c) => `Patient is a known case of ${c.etiology || 'post-tubercular fibro-cavitary sequelae with bronchiectasis'}. Diagnostic contrast-enhanced chest CT / CTPA demonstrated: ${c.ctpaLocalization || 'Right upper lobe cavitary disease with hypertrophied bronchial feeders'}. Procedural priority categorized under ${c.cirseClassification || 'CIRSE Category 2: Emergency / Life-threatening Hemostatic Embolization'}. Prior episodes of blood-streaked sputum were managed conservatively until acute catastrophic volume escalation prompted emergency admission.`,
    synthesizeFamilyAndRiskHistory: (c) => `Clinical Risk Profile: Smoking / Exposure - ${c.smokingHistory || 'Non-smoker'}. Tuberculosis history - ${c.tbHistory || 'Treated pulmonary TB'}. Bleeding diathesis / Coagulation history - ${c.bleedingDiathesis || 'No bleeding diathesis'}. Family history - ${c.familyHistory || 'Nil significant family history'}. (Verified clinically; strictly zero simulated lab values).`,
    synthesizeLocalExam: (c) => `Chest Auscultation: Bilateral coarse crepitations and bronchial breath sounds localized over ${c.ctpaLocalization || 'the affected lung zone'}; contralateral lung fields aerated. Airway patent without stridor; respiratory rate 20-22/min; SpO2 maintained >96% on room air. Cardiovascular: S1 S2 heard, tachycardic during bleeding episode, no murmurs. Extremities: Mild digital clubbing consistent with chronic suppurative lung disease; no peripheral edema. Puncture Site: ${c.accessRoute || 'Right CFA'} - dressing clean, dry, zero hematoma, distal pulses palpable and symmetric.`,
    synthesizeOperativeNote: (c) => `PROCEDURAL OPERATIVE NOTE: BRONCHIAL ARTERY EMBOLIZATION (BAE)
Indication: ${c.hemoptysisVolume || 'Massive hemoptysis'} secondary to ${c.etiology || 'post-tubercular sequelae'}.
Vascular Access: Under strict aseptic technique and local anesthesia (2% Lignocaine), vascular access was gained via ${c.accessRoute || 'Right Common Femoral Artery (CFA)'} using a ${c.sheathSize || '5F Cordis/Terumo sheath'}.
Diagnostic Catheterization: A ${c.diagnosticCatheter || '5F Mikaelsson catheter'} was advanced over a 0.035" hydrophilic guidewire to the descending thoracic aorta. Selective angiography of the ${c.targetArteries || 'Right intercostobronchial trunk (ICBT)'} was performed under Digital Subtraction Angiography (DSA). Angiographic findings revealed: ${c.angiographicFindings || 'hypertrophied tortuous bronchial artery with intense blush'}.
SPINAL CORD & NON-TARGET VESSEL PROTECTION: ${c.spinalCordProtection || 'Microcatheter advanced superselectively distal to spinal cord branch; spinal cord protected.'}
SUPERSELECTIVE EMBOLIZATION: A ${c.microcatheter || '2.7F Progreat microcatheter'} was coaxially negotiated deep into the culprit feeding pedicle. Embolization was performed under continuous high-resolution fluoroscopic monitoring using ${c.embolicAgent || 'PVA particles 300-500 µm'}. Embolic administration was titrated slowly until the predefined endpoint was attained: ${c.technicalEndpoint || 'complete devascularization of target hypervascular territory with near-stasis of flow'}.
COMPLETION ANGIOGRAPHY: Demonstrated complete devascularization of the target territory with cessation of contrast blush and shunting, normal preservation of aortic and intercostal parent branch architecture, and zero filling of spinal cord collaterals. Catheter and sheath removed; hemostasis achieved via ${c.hemostasisMethod || 'manual compression'}.`,
    synthesizePostOpRecoveryNote: (c) => ({
      accessSiteHemostasis: `${c.hemostasisMethod || 'Manual compression for 15-20 minutes'} achieved complete hemostasis. Sterile pressure dressing intact, dry, and clean with zero bleeding or hematoma.`,
      distalPulses: `${c.distalPulseStatus || 'Right and left dorsalis pedis and posterior tibial pulses strong (+++), palpable, symmetric; digits warm bilaterally.'}`,
      recoveryBedMonitoring: `${c.recoveryBed || 'Cath-Lab Observation Holding / IR HDU'}. Monitoring orders: ${c.monitoringProtocol || 'Strict supine bed rest for 4-6 hours; vitals q15m x 1h, q30m x 2h, then q1h x 4h.'}`,
      immediateComplications: `${c.immediateComplications || 'Nil immediate procedural complications. Zero groin hematoma or pseudoaneurysm; neurological examination confirmed normal bilateral lower extremity motor power (5/5) and sensation, ruling out anterior spinal cord ischemia. Cough suppression maintained.'}`,
      recoveryStatus: 'Conscious, oriented x3, hemodynamically stable. Nil fresh hemoptysis post-procedure. Bed rest protocol active.',
      notes: `Emergency superselective BAE for ${c.hemoptysisVolume || 'massive hemoptysis'} completed with technical and clinical success. Spinal cord protection verified. Neurological status confirmed normal.`
    }),
    synthesizeDiagnosis: (c) => `Massive / Recurrent Hemoptysis secondary to ${c.etiology || 'Post-tubercular fibro-cavitary bronchiectasis'}, status post Superselective Bronchial Artery Embolization (BAE) of ${c.targetArteries || 'Right ICBT'} with ${c.embolicAgent || 'PVA particles 300-500 µm'}.`,
    defaultMedications: [
      { sNo: 0, genericName: 'Tranexamic Acid', medicine: 'Tab. Tranexamic Acid 500mg [RMSCL DDC #463]', dosePower: '500mg', route: 'ORAL', frequency: 'TID', days: 5, instructions: 'Take with water after meals for hemostatic stabilization' },
      { sNo: 0, genericName: 'Dextromethorphan Hydrobromide', medicine: 'Syp. Dextromethorphan Hydrobromide 10ml [RMSCL DDC #86]', dosePower: '10ml', route: 'ORAL', frequency: 'TID', days: 5, instructions: 'Antitussive to suppress violent coughing bouts and prevent clot dislodgement' },
      { sNo: 0, genericName: 'Amoxicillin and Potassium Clavulanate', medicine: 'Cap. Amoxicillin and Potassium Clavulanate 625mg [RMSCL DDC #505]', dosePower: '625mg', route: 'ORAL', frequency: 'BD', days: 5, instructions: 'Antibiotic prophylaxis for superinfected bronchiectasis / cavity' },
      { sNo: 0, genericName: 'Pantoprazole', medicine: 'Tab. Pantoprazole 40mg [RMSCL DDC #142]', dosePower: '40mg', route: 'ORAL', frequency: 'OD', days: 14, instructions: 'Take 30 minutes before breakfast' },
      { sNo: 0, genericName: 'Paracetamol', medicine: 'Tab. Paracetamol 650mg [RMSCL DDC #28]', dosePower: '650mg', route: 'ORAL', frequency: 'SOS', days: 5, instructions: 'For pleuritic chest discomfort or fever' },
      { sNo: 0, genericName: 'Tramadol and Paracetamol', medicine: 'Tab. Tramadol 37.5mg + Paracetamol 325mg [RMSCL DDC #624]', dosePower: '1 Tab', route: 'ORAL', frequency: 'BD', days: 3, instructions: 'For moderate post-embolization pleuritic chest pain' }
    ],
    conditionalMedications: [
      { condition: 'If Active Tuberculosis on DOTS', conditionKey: 'tbHistory', conditionValue: 'Active pulmonary TB currently receiving DOTS Category I antitubercular regimen', medication: { sNo: 0, genericName: 'Antitubercular Therapy', medicine: 'DOTS Category-I FDC (Rifampicin, Isoniazid, Pyrazinamide, Ethambutol) [RMSCL DDC #101]', dosePower: 'Per weight band', route: 'ORAL', frequency: 'OD', days: 30, instructions: 'Strict compliance with national tuberculosis elimination program (NTEP)' } }
    ],
    followUpInstructions: [
      'Chest X-ray (PA view) at 48 hours and 2 weeks to assess parenchymal aeration and resolution of alveolar hemorrhage',
      'Pulmonology / Chest Clinic consultation at 2 weeks for underlying lung disease optimization and ATT monitoring',
      'Contrast-enhanced CT Thorax / CT Angiography at 3 months for vascular remodeling and recurrence surveillance',
      'Follow-up in Interventional Radiology OPD within 7-10 days for puncture site assessment'
    ],
    redFlagWarnings: [
      'Recurrent fresh hemoptysis (>50 mL frank red blood) - immediately report to SMS Hospital Emergency / IR',
      'Sudden lower limb weakness, numbness, sensory loss, or gait difficulty (CRITICAL EMERGENCY: anterior spinal cord ischemia warning)',
      'Severe acute chest pain radiating to back or breathlessness with SpO2 drop',
      'Pulsatile swelling, expanding lump, or active bleeding at the groin/puncture site',
      'High-grade fever (>101°F) with chills or productive purulent sputum'
    ],
    expectedAttachments: [
      { modality: 'DSA', description: 'Diagnostic pre-embolization bronchial arteriogram showing hypervascularity, blush, and shunting' },
      { modality: 'DSA', description: 'Superselective microcatheter angiogram confirming absence of spinal cord / non-target supply' },
      { modality: 'DSA', description: 'Completion post-embolization arteriogram verifying devascularization and near-stasis' }
    ],
    ddcDrugs: [
      { name: 'Tab. Tranexamic Acid 500mg', rmscl: 'RMSCL DDC #463', qty: 15 },
      { name: 'Syp. Dextromethorphan Hydrobromide 10ml', rmscl: 'RMSCL DDC #86', qty: 1 },
      { name: 'Cap. Amoxicillin + Clavulanate 625mg', rmscl: 'RMSCL DDC #505', qty: 10 },
      { name: 'Tab. Pantoprazole 40mg', rmscl: 'RMSCL DDC #142', qty: 14 },
      { name: 'Tab. Paracetamol 650mg', rmscl: 'RMSCL DDC #28', qty: 10 }
    ],
    dischargeAdvice: [
      'Maintain strict bed rest for the first 24 hours post-discharge; avoid strenuous physical activity, brisk walking, or heavy lifting (>5 kg) for 2 weeks',
      'Suppress violent coughing spells using the prescribed antitussive syrup; if coughing occurs, lean towards the affected side',
      'Keep the vascular access puncture site clean and dry; the dressing may be removed after 48 hours; keep area dry for 5 days',
      'Maintain adequate oral hydration (2-2.5 liters water daily unless contraindicated); strictly avoid smoking, tobacco, and biomass smoke exposure',
      'Continue all prescribed medications with strict adherence, especially antitubercular therapy if prescribed'
    ],
    procedureType: 'Major',
    anaesthesiaDefault: 'Local Anesthesia',
    defaultAccessSite: 'Right Common Femoral Artery (CFA)',
    defaultPostOpPlan: 'Cath-Lab Holding / IR HDU bed rest for 4-6 hours. Groin observation protocol: check puncture site and distal pulses q15m x 1h, q30m x 2h, then q1h x 4h. Vital signs telemetry. Neurological lower limb checks. Cough suppression.'
  },
  {
    procedureKey: 'jna_preop_embo',
    procedureFamily: 'Head & Neck Tumor Embolization',
    icdPrimary: { code: 'D10.6', description: 'Benign neoplasm of nasopharynx' },
    icdSecondary: [
      { code: 'D14.0', description: 'Benign neoplasm of middle ear, nasal cavity and accessory sinuses' },
      { code: 'R04.0', description: 'Epistaxis' },
      { code: 'M9160/0', description: 'Angiofibroma, NOS' }
    ],
    criteriaFields: [
      { key: 'ageGender', label: 'Demographic Profile', type: 'select', group: 'Clinical Presentation & Staging', options: [
        { value: '14-18 year adolescent male (classic demographic)', label: '14-18 year adolescent male' },
        { value: '10-13 year young adolescent male', label: '10-13 year young adolescent male' },
        { value: '19-25 year young adult male', label: '19-25 year young adult male' }
      ], defaultValue: '14-18 year adolescent male (classic demographic)' },
      { key: 'symptoms', label: 'Presenting Clinical Symptoms', type: 'select', group: 'Clinical Presentation & Staging', options: [
        { value: 'Recurrent profuse spontaneous unprovoked epistaxis and progressive unilateral nasal obstruction', label: 'Recurrent profuse epistaxis and nasal obstruction' },
        { value: 'Epistaxis requiring emergency anterior/posterior nasal packing and blood transfusions', label: 'Severe epistaxis requiring packing and transfusion' },
        { value: 'Nasal obstruction with cheek fullness, snoring, and rhinolalia clausa (nasal speech)', label: 'Nasal obstruction with cheek fullness and rhinolalia' },
        { value: 'Nasal mass with proptosis, facial asymmetry, and conductive hearing loss', label: 'Nasal mass with proptosis / cheek deformity' }
      ], defaultValue: 'Recurrent profuse spontaneous unprovoked epistaxis and progressive unilateral nasal obstruction' },
      { key: 'radkowskiStage', label: 'Radkowski Staging (Tumor Extent)', type: 'select', group: 'Clinical Presentation & Staging', options: [
        { value: 'Radkowski Stage IIb (Full occupation of pterygopalatine fossa with anterior bowing of posterior antral wall)', label: 'Radkowski Stage IIb (PPF involvement with antral wall bowing)' },
        { value: 'Radkowski Stage IIa (Minimal extension through sphenopalatine foramen into medial PPF)', label: 'Radkowski Stage IIa (Medial PPF extension)' },
        { value: 'Radkowski Stage I (Confined to nasopharynx and nasal cavity; minimal sinus extension)', label: 'Radkowski Stage I (Nasopharynx and nasal cavity)' },
        { value: 'Radkowski Stage IIc (Extension into infratemporal fossa and cheek soft tissues)', label: 'Radkowski Stage IIc (Infratemporal fossa / cheek extension)' },
        { value: 'Radkowski Stage IIIa (Skull base bone erosion with minimal extradural intracranial extension)', label: 'Radkowski Stage IIIa (Skull base erosion / extradural)' },
        { value: 'Radkowski Stage IIIb (Extensive intracranial intradural extension with cavernous sinus invasion)', label: 'Radkowski Stage IIIb (Intradural / cavernous invasion)' }
      ], defaultValue: 'Radkowski Stage IIb (Full occupation of pterygopalatine fossa with anterior bowing of posterior antral wall)' },
      { key: 'surgeryWindow', label: 'Surgery Scheduled Window', type: 'select', group: 'Clinical Presentation & Staging', options: [
        { value: 'Definitive surgical excision scheduled within 24-48 hours (optimal window to prevent collateral revascularization)', label: 'Scheduled within 24-48 hours (optimal)' },
        { value: 'Definitive surgical excision scheduled within 48-72 hours', label: 'Scheduled within 48-72 hours' }
      ], defaultValue: 'Definitive surgical excision scheduled within 24-48 hours (optimal window to prevent collateral revascularization)' },
      { key: 'epistaxisHistory', label: 'Epistaxis Severity & Prior Episodes', type: 'select', group: 'Risk & Family History', options: [
        { value: 'Recurrent unprovoked epistaxis episodes over 3-6 months; multiple emergency admissions for nasal packing', label: 'Recurrent epistaxis over 3-6 months with prior packing' },
        { value: 'Single catastrophic epistaxis episode requiring 2 units PRBC transfusion in emergency room', label: 'Severe epistaxis requiring PRBC transfusion' },
        { value: 'Intermittent moderate nasal bleeding without hemorrhagic shock', label: 'Intermittent moderate bleeding' }
      ], defaultValue: 'Recurrent unprovoked epistaxis episodes over 3-6 months; multiple emergency admissions for nasal packing' },
      { key: 'bleedingDiathesis', label: 'Bleeding Diathesis / Coagulation Status', type: 'select', group: 'Risk & Family History', options: [
        { value: 'No systemic bleeding diathesis; baseline coagulation parameters (PT/INR, aPTT) verified normal', label: 'No bleeding diathesis; normal coagulation' },
        { value: 'Absence of von Willebrand disease, hemophilia, or platelet dysfunction', label: 'Absence of inherited bleeding disorders' }
      ], defaultValue: 'No systemic bleeding diathesis; baseline coagulation parameters (PT/INR, aPTT) verified normal' },
      { key: 'familyHistory', label: 'Family History', type: 'select', group: 'Risk & Family History', options: [
        { value: 'Nil family history of juvenile nasopharyngeal angiofibroma, head-neck neoplasms, or vascular malformations', label: 'Nil significant family history' },
        { value: 'Nil family history of bleeding diathesis', label: 'Nil family bleeding disorders' }
      ], defaultValue: 'Nil family history of juvenile nasopharyngeal angiofibroma, head-neck neoplasms, or vascular malformations' },
      { key: 'priorInterventions', label: 'Prior Interventions / Biopsy History', type: 'select', group: 'Risk & Family History', options: [
        { value: 'Nil prior intervention; biopsy strictly avoided due to hypervascularity', label: 'Nil prior biopsy (biopsy contraindicated)' },
        { value: 'Attempted anterior nasal biopsy elsewhere complicated by profuse epistaxis and aborted', label: 'Attempted biopsy elsewhere aborted due to bleeding' }
      ], defaultValue: 'Nil prior intervention; biopsy strictly avoided due to hypervascularity' },
      { key: 'accessRoute', label: 'Vascular Access Site', type: 'select', group: 'Vascular Access & Hardware', options: [
        { value: 'Right Common Femoral Artery (CFA)', label: 'Right Common Femoral Artery (CFA)' },
        { value: 'Left Common Femoral Artery (CFA)', label: 'Left Common Femoral Artery (CFA)' }
      ], defaultValue: 'Right Common Femoral Artery (CFA)' },
      { key: 'sheathSize', label: 'Vascular Sheath Size', type: 'select', group: 'Vascular Access & Hardware', options: [
        { value: '5F Cordis/Terumo Introducer Sheath', label: '5F Introducer Sheath' },
        { value: '4F Terumo Introducer Sheath', label: '4F Introducer Sheath' }
      ], defaultValue: '5F Cordis/Terumo Introducer Sheath' },
      { key: 'anaesthesia', label: 'Anesthesia / Sedation Type', type: 'select', group: 'Vascular Access & Hardware', options: [
        { value: 'Local Anesthesia with Conscious Sedation (Midazolam + Fentanyl)', label: 'Local Anesthesia with Conscious Sedation' },
        { value: 'General Anesthesia with endotracheal intubation (for uncooperative pediatric patient)', label: 'General Anesthesia with intubation' }
      ], defaultValue: 'Local Anesthesia with Conscious Sedation (Midazolam + Fentanyl)' },
      { key: 'diagnosticCatheter', label: 'Diagnostic Catheter', type: 'select', group: 'Vascular Access & Hardware', options: [
        { value: '5F Headhunter (H1) catheter', label: '5F Headhunter (H1)' },
        { value: '5F Simmons 2 (SIM-2) catheter', label: '5F Simmons 2 (SIM-2)' },
        { value: '5F Vertebral catheter', label: '5F Vertebral' }
      ], defaultValue: '5F Headhunter (H1) catheter' },
      { key: 'microcatheter', label: 'Superselective Microcatheter', type: 'select', group: 'Vascular Access & Hardware', options: [
        { value: '1.7F - 2.0F Progreat (Terumo) microcatheter with 0.014" GT guidewire', label: '1.7F-2.0F Progreat (Terumo) + 0.014" GT wire' },
        { value: '1.9F Marathon microcatheter with 0.010" Mirage wire', label: '1.9F Marathon + 0.010" Mirage wire' }
      ], defaultValue: '1.7F - 2.0F Progreat (Terumo) microcatheter with 0.014" GT guidewire' },
      { key: 'feedingArteries', label: 'Primary Feeding Arteries', type: 'select', group: 'Target Anatomy & Dangerous Anastomoses', options: [
        { value: 'Bilateral Internal Maxillary Arteries (IMAX - sphenopalatine and descending palatine branches)', label: 'Bilateral Internal Maxillary Arteries (IMAX)' },
        { value: 'Dominant right Internal Maxillary Artery with right Ascending Pharyngeal Artery (pharyngeal branch)', label: 'Right IMAX + Ascending Pharyngeal Artery' },
        { value: 'Dominant left Internal Maxillary Artery with left Ascending Pharyngeal Artery', label: 'Left IMAX + Ascending Pharyngeal Artery' },
        { value: 'Internal Maxillary, Ascending Pharyngeal, and Middle Meningeal Arteries bilaterally', label: 'IMAX, Ascending Pharyngeal, and MMA bilaterally' }
      ], defaultValue: 'Bilateral Internal Maxillary Arteries (IMAX - sphenopalatine and descending palatine branches)' },
      { key: 'icaInvolvement', label: 'Internal Carotid Artery (ICA) Feeders', type: 'select', group: 'Target Anatomy & Dangerous Anastomoses', options: [
        { value: 'Complete absence of ICA supply; feeding pedicles strictly confined to external carotid artery (ECA) branches', label: 'No ICA supply; pure ECA feeders' },
        { value: 'Minor inferolateral trunk (ILT) and vidian artery branches from cavernous/petrous ICA (not embolized with particles to avoid intracranial stroke; marked for surgical control)', label: 'Minor ICA branches (spared for surgical clipping)' },
        { value: 'Accessory skull base feeders identified and assessed', label: 'Accessory skull base feeders' }
      ], defaultValue: 'Complete absence of ICA supply; feeding pedicles strictly confined to external carotid artery (ECA) branches' },
      { key: 'dangerousAnastomosesProtection', label: 'Dangerous Anastomoses & Cranial Nerve Protection', type: 'select', group: 'Target Anatomy & Dangerous Anastomoses', options: [
        { value: 'Critical Extracranial-to-Intracranial (EC-IC) anastomoses were methodically scrutinized under multi-angle high-magnification DSA. The petrosal branch of the Middle Meningeal Artery (facial nerve arcade), the neuromeningeal branch of the Ascending Pharyngeal Artery (hypoglossal and anterior spinal branches), and the distal IMAX sphenopalatine/ethmoidal connections to the ophthalmic artery were identified. The microcatheter was advanced superselectively deep into the tumor core well past all non-target branch takeoffs. Provocative manual contrast test injections confirmed zero reflux, zero intracranial opacification, and zero ophthalmic blush prior to particle infusion.', label: 'Microcatheter wedged deep into tumor core; ophthalmic, facial, and spinal collaterals protected' },
        { value: 'Superselective catheterization distal to middle meningeal and anterior tympanic origins; ophthalmic and intracranial protection confirmed on DSA roadmapping.', label: 'Distal catheterization beyond MMA; ophthalmic/intracranial protection verified' }
      ], defaultValue: 'Critical Extracranial-to-Intracranial (EC-IC) anastomoses were methodically scrutinized under multi-angle high-magnification DSA. The petrosal branch of the Middle Meningeal Artery (facial nerve arcade), the neuromeningeal branch of the Ascending Pharyngeal Artery (hypoglossal and anterior spinal branches), and the distal IMAX sphenopalatine/ethmoidal connections to the ophthalmic artery were identified. The microcatheter was advanced superselectively deep into the tumor core well past all non-target branch takeoffs. Provocative manual contrast test injections confirmed zero reflux, zero intracranial opacification, and zero ophthalmic blush prior to particle infusion.' },
      { key: 'embolicAgent', label: 'Embolic Agent & Particle Size', type: 'select', group: 'Embolic Agent & Endpoint', options: [
        { value: 'PVA particles 300-500 µm (Polyvinyl Alcohol) suspended in non-ionic contrast (particles <300 µm strictly avoided to prevent dangerous EC-IC microvascular passage and cranial nerve ischemia)', label: 'PVA particles 300-500 µm (safe calibration)' },
        { value: 'PVA particles 500-710 µm (Polyvinyl Alcohol) suspended in non-ionic contrast', label: 'PVA particles 500-710 µm' },
        { value: 'Calibrated microspheres (Embosphere 300-500 µm)', label: 'Embosphere microspheres 300-500 µm' },
        { value: 'Calibrated microspheres (Embosphere 500-700 µm)', label: 'Embosphere microspheres 500-700 µm' },
        { value: 'PVA particles 300-500 µm followed by proximal main trunk pushable microcoils for flow dampening', label: 'PVA 300-500 µm + proximal microcoils' }
      ], defaultValue: 'PVA particles 300-500 µm (Polyvinyl Alcohol) suspended in non-ionic contrast (particles <300 µm strictly avoided to prevent dangerous EC-IC microvascular passage and cranial nerve ischemia)' },
      { key: 'technicalEndpoint', label: 'Technical Success Endpoint', type: 'select', group: 'Embolic Agent & Endpoint', options: [
        { value: 'Greater than 85-90% devascularization of the hypervascular tumor blush on completion bilateral ECA angiography, with complete preservation of ophthalmic, internal carotid, and facial nerve arterial supplies; operative bed devascularized for minimal blood-loss surgery', label: '>85-90% tumor devascularization with preserved cranial circulations' },
        { value: 'Near-complete devascularization with complete cessation of tumor stain in the pterygopalatine and nasopharyngeal compartments', label: 'Near-complete cessation of tumor stain' },
        { value: 'Complete occlusion of feeding arterial arcades with sluggish contrast clearance', label: 'Complete feeder occlusion with sluggish flow' }
      ], defaultValue: 'Greater than 85-90% devascularization of the hypervascular tumor blush on completion bilateral ECA angiography, with complete preservation of ophthalmic, internal carotid, and facial nerve arterial supplies; operative bed devascularized for minimal blood-loss surgery' },
      { key: 'hemostasisMethod', label: 'Access Site Hemostasis', type: 'select', group: 'Post-Operative Recovery & Hemostasis', options: [
        { value: 'Manual compression for 15-20 minutes following sheath removal, achieving complete hemostasis, followed by sterile compressive pressure dressing', label: 'Manual compression (15-20 min) with pressure dressing' },
        { value: 'Deployment of 5F/6F Angio-Seal vascular closure device with immediate collagen-plug hemostasis', label: 'Angio-Seal 5F/6F vascular closure device' }
      ], defaultValue: 'Manual compression for 15-20 minutes following sheath removal, achieving complete hemostasis, followed by sterile compressive pressure dressing' },
      { key: 'distalPulseStatus', label: 'Distal Pulse Status', type: 'select', group: 'Post-Operative Recovery & Hemostasis', options: [
        { value: 'Right and left dorsalis pedis (DP) and posterior tibial (PT) pulses strong (+++), palpable, symmetric; capillary refill <2 seconds; lower extremities warm', label: 'Bilateral DP and PT pulses strong (+++), warm extremities' }
      ], defaultValue: 'Right and left dorsalis pedis (DP) and posterior tibial (PT) pulses strong (+++), palpable, symmetric; capillary refill <2 seconds; lower extremities warm' },
      { key: 'recoveryBed', label: 'Recovery Bed & HDU Location', type: 'select', group: 'Post-Operative Recovery & Hemostasis', options: [
        { value: 'Neuro-IR / ENT Pre-Operative High Dependency Unit (HDU)', label: 'Neuro-IR / ENT Pre-Operative HDU' },
        { value: 'Adolescent Post-Procedural Recovery Unit', label: 'Adolescent Post-Procedural Recovery Unit' }
      ], defaultValue: 'Neuro-IR / ENT Pre-Operative High Dependency Unit (HDU)' },
      { key: 'monitoringProtocol', label: 'Monitoring Protocol', type: 'select', group: 'Post-Operative Recovery & Hemostasis', options: [
        { value: 'Strict supine bed rest with straight right lower extremity for 4-6 hours (or 2 hours if closure device); head of bed elevated 30 degrees to minimize head-neck venous pressure; continuous monitoring of airway and epistaxis; vitals q15m x 1h, q30m x 2h, then q1h x 4h; planned transfer to ENT OT within 24-48 hours', label: 'Groin rest 4-6h, head up 30°, vitals q15m x 1h, q30m x 2h, ENT transfer 24-48h' },
        { value: 'Standard post-femoral recovery with continuous neurological and cranial nerve checks', label: 'Post-femoral recovery with serial cranial nerve checks' }
      ], defaultValue: 'Strict supine bed rest with straight right lower extremity for 4-6 hours (or 2 hours if closure device); head of bed elevated 30 degrees to minimize head-neck venous pressure; continuous monitoring of airway and epistaxis; vitals q15m x 1h, q30m x 2h, then q1h x 4h; planned transfer to ENT OT within 24-48 hours' },
      { key: 'immediateComplications', label: 'Immediate Complication Surveillance & Cranial Nerve Check', type: 'select', group: 'Post-Operative Recovery & Hemostasis', options: [
        { value: 'Comprehensive post-procedure Cranial Nerve Examination: CN II (visual acuity, visual fields, direct and consensual pupillary light reflexes intact - zero visual compromise, ruling out ophthalmic non-target embolization), CN III, IV, VI (extraocular movements full and intact bilaterally, zero diplopia), CN V (facial sensation symmetric to light touch), CN VII (facial symmetry completely preserved, forehead wrinkle symmetric, smiling symmetric, eye closure strong - zero facial nerve palsy), CN IX, X, XII (palatal elevation and tongue protrusion midline). Zero facial skin ischemia, necrosis, or trismus. Groin puncture site soft and dry without hematoma. Post-embolization headache and cheek ache controlled with IV analgesia and Dexamethasone.', label: 'Cranial nerves II-XII fully intact; zero visual loss; zero facial palsy; zero skin necrosis' },
        { value: 'Cranial nerves intact; mild transient headache managed with oral analgesics; zero puncture site complications.', label: 'Cranial nerves intact; mild headache managed with analgesics' }
      ], defaultValue: 'Comprehensive post-procedure Cranial Nerve Examination: CN II (visual acuity, visual fields, direct and consensual pupillary light reflexes intact - zero visual compromise, ruling out ophthalmic non-target embolization), CN III, IV, VI (extraocular movements full and intact bilaterally, zero diplopia), CN V (facial sensation symmetric to light touch), CN VII (facial symmetry completely preserved, forehead wrinkle symmetric, smiling symmetric, eye closure strong - zero facial nerve palsy), CN IX, X, XII (palatal elevation and tongue protrusion midline). Zero facial skin ischemia, necrosis, or trismus. Groin puncture site soft and dry without hematoma. Post-embolization headache and cheek ache controlled with IV analgesia and Dexamethasone.' }
    ],
    synthesizeComplaints: (c) => `Patient is a ${c.ageGender || '14-18 year adolescent male'} presenting with ${c.symptoms || 'recurrent profuse epistaxis and nasal obstruction'}. Admitted under Otolaryngology (ENT) / Interventional Radiology for preoperative endovascular devascularization prior to definitive surgical excision of Juvenile Nasopharyngeal Angiofibroma (${c.radkowskiStage || 'Radkowski Stage IIb'}).`,
    synthesizeHistory: (c) => `Patient diagnosed with Juvenile Nasopharyngeal Angiofibroma staged as ${c.radkowskiStage || 'Radkowski Stage IIb'}. Clinical history: ${c.epistaxisHistory || 'Recurrent unprovoked epistaxis'}. Categorized for elective preoperative embolization scheduled within ${c.surgeryWindow || '24-48 hours'}. Biopsy status: ${c.priorInterventions || 'Biopsy contraindicated and avoided'}. Multidisciplinary ENT-IR board scheduled surgical excision within the optimal post-embolization window to minimize intraoperative hemorrhage.`,
    synthesizeFamilyAndRiskHistory: (c) => `Risk & Exposure Profile: Demographic - ${c.ageGender || 'Adolescent male'}. Epistaxis frequency - ${c.epistaxisHistory || 'Recurrent epistaxis'}. Bleeding diathesis / Coagulation history - ${c.bleedingDiathesis || 'No bleeding diathesis'}. Family history - ${c.familyHistory || 'Nil significant family history'}. (Verified clinically; strictly zero simulated lab values).`,
    synthesizeLocalExam: (c) => `ENT & Nasal Examination: Anterior rhinoscopy and endoscopy reveal an expansile, smooth, lobulated, reddish-purple hypervascular mass occupying the posterior nasal cavity and nasopharynx, extending into the pterygopalatine fossa with anterior displacement of the posterior antral wall. Contralateral nasal airway patent. No active bleeding at present. Oral cavity: Soft palate pushed downwards, uvula intact. Facial: Mild cheek fullness without facial tenderness. Cranial Nerves: Systematically tested (CN II to XII) - visual acuity intact, extraocular movements full without diplopia, facial sensation symmetric, facial nerve motor branches symmetric, gag reflex present, tongue midline. Puncture Site: ${c.accessRoute || 'Right CFA'} - clean, dry, zero hematoma, distal pulses palpable and symmetric.`,
    synthesizeOperativeNote: (c) => `PROCEDURAL OPERATIVE NOTE: PREOPERATIVE EMBOLIZATION OF JUVENILE NASOPHARYNGEAL ANGIOFIBROMA (JNA)
Indication: Preoperative devascularization for JNA (${c.radkowskiStage || 'Radkowski Stage IIb'}).
Vascular Access: Under strict aseptic precautions and ${c.anaesthesia || 'Local Anesthesia with Conscious Sedation'}, vascular access was obtained via ${c.accessRoute || 'Right Common Femoral Artery (CFA)'} using a ${c.sheathSize || '5F Cordis/Terumo sheath'}.
Diagnostic Catheterization: A ${c.diagnosticCatheter || '5F Headhunter catheter'} was navigated to the bilateral Common Carotid, Internal Carotid, and External Carotid Arteries. Digital Subtraction Angiography (DSA) revealed an intense, hypervascular tumor blush centered in the nasopharynx and pterygopalatine fossa, supplied predominantly by: ${c.feedingArteries || 'Bilateral Internal Maxillary Arteries'}. ICA status: ${c.icaInvolvement || 'No ICA supply'}.
DANGEROUS ANASTOMOSES & CRANIAL NERVE SAFETY: ${c.dangerousAnastomosesProtection || 'Critical EC-IC anastomoses interrogated; microcatheter wedged deep into tumor core; ophthalmic, facial, and spinal collaterals protected.'}
SUPERSELECTIVE EMBOLIZATION: A ${c.microcatheter || '1.7F-2.0F Progreat microcatheter'} was advanced coaxially deep into the distal internal maxillary artery and feeding pedicles. Embolization was performed under continuous high-magnification fluoroscopic visualization using ${c.embolicAgent || 'PVA particles 300-500 µm'}. Embolization was carried out to the endpoint: ${c.technicalEndpoint || '>85-90% devascularization of tumor blush'}.
COMPLETION ANGIOGRAPHY: Bilateral ECA and ICA completion runs confirmed near-complete (>85-90%) ablation of tumor vascularity with cessation of blush, complete patency and preservation of the ophthalmic artery, internal carotid artery, and normal external carotid branches. Sheath removed; hemostasis achieved via ${c.hemostasisMethod || 'manual compression'}.`,
    synthesizePostOpRecoveryNote: (c) => ({
      accessSiteHemostasis: `${c.hemostasisMethod || 'Manual compression for 15-20 minutes'} achieved complete hemostasis. Sterile pressure dressing intact, dry, and clean with zero bleeding or hematoma.`,
      distalPulses: `${c.distalPulseStatus || 'Right and left dorsalis pedis and posterior tibial pulses strong (+++), palpable, symmetric; lower extremities warm.'}`,
      recoveryBedMonitoring: `${c.recoveryBed || 'Neuro-IR / ENT Pre-Operative HDU'}. Protocol: ${c.monitoringProtocol || 'Bed rest 4-6h, head elevated 30 degrees, vitals q15m x 1h, q30m x 2h, then q1h x 4h.'}`,
      immediateComplications: `${c.immediateComplications || 'Comprehensive Cranial Nerve Exam: CN II-XII intact; zero visual loss, zero diplopia, zero facial palsy, zero skin necrosis. Groin clean. IV Dexamethasone administered.'}`,
      recoveryStatus: 'Conscious, oriented x3, hemodynamically stable. Head of bed elevated 30 degrees. Scheduled for ENT surgical handover within 24-48 hours.',
      notes: `Superselective preoperative JNA embolization completed successfully with >85-90% devascularization. Cranial nerves II-XII fully intact. Ready for ENT surgery within 24-48 hour window.`
    }),
    synthesizeDiagnosis: (c) => `Juvenile Nasopharyngeal Angiofibroma (${c.radkowskiStage || 'Radkowski Stage IIb'}), status post Superselective Preoperative Embolization of ${c.feedingArteries || 'Bilateral Internal Maxillary Arteries'} with ${c.embolicAgent || 'PVA particles 300-500 µm'}.`,
    defaultMedications: [
      { sNo: 0, genericName: 'Dexamethasone', medicine: 'Tab. Dexamethasone 4mg [RMSCL DDC #125]', dosePower: '4mg', route: 'ORAL', frequency: 'TID', days: 2, instructions: 'Take with food to reduce tumor ischemic swelling and protect airway prior to surgery' },
      { sNo: 0, genericName: 'Amoxicillin and Potassium Clavulanate', medicine: 'Cap. Amoxicillin and Potassium Clavulanate 625mg [RMSCL DDC #505]', dosePower: '625mg', route: 'ORAL', frequency: 'BD', days: 5, instructions: 'Preoperative prophylactic antibiotic coverage' },
      { sNo: 0, genericName: 'Paracetamol', medicine: 'Tab. Paracetamol 650mg [RMSCL DDC #28]', dosePower: '650mg', route: 'ORAL', frequency: 'TID', days: 3, instructions: 'For post-embolization facial discomfort and headache' },
      { sNo: 0, genericName: 'Tramadol and Paracetamol', medicine: 'Tab. Tramadol 37.5mg + Paracetamol 325mg [RMSCL DDC #624]', dosePower: '1 Tab', route: 'ORAL', frequency: 'BD', days: 2, instructions: 'For moderate post-embolization facial ache' },
      { sNo: 0, genericName: 'Pantoprazole', medicine: 'Tab. Pantoprazole 40mg [RMSCL DDC #142]', dosePower: '40mg', route: 'ORAL', frequency: 'OD', days: 5, instructions: 'Take 30 minutes before breakfast' }
    ],
    conditionalMedications: [],
    followUpInstructions: [
      'Transfer to Otolaryngology (ENT) surgical team for definitive excision within the optimal 24-48 hour window (no later than 72 hours)',
      'Immediate post-op cranial nerve reassessment in recovery and pre-anesthetic clearance',
      'Follow-up Contrast-Enhanced MRI of Face and Skull Base at 3-6 months post-resection for residual/recurrence surveillance',
      'Interventional Radiology clinic review at 1 month post-discharge'
    ],
    redFlagWarnings: [
      'Any visual blurring, loss of vision, or visual field darkening (CRITICAL EMERGENCY: ophthalmic artery non-target embolization warning)',
      'Facial weakness, facial drooping, difficulty smiling or closing eye (CRITICAL EMERGENCY: facial nerve palsy warning)',
      'Torrential nasal hemorrhage (>150-200 mL frank blood) in pre-surgical window',
      'Blanching, duskiness, or blistering of facial/cheek skin (skin necrosis warning)',
      'Difficulty breathing, stridor, or severe throat pain (airway compromise from tumor swelling)'
    ],
    expectedAttachments: [
      { modality: 'DSA', description: 'Bilateral selective ECA and ICA diagnostic arteriograms showing tumor blush and dangerous anastomoses' },
      { modality: 'DSA', description: 'Superselective microcatheter roadmapping within feeding pedicles' },
      { modality: 'DSA', description: 'Completion angiograms showing >85-90% devascularization with preserved cranial circulations' }
    ],
    ddcDrugs: [
      { name: 'Tab. Dexamethasone 4mg', rmscl: 'RMSCL DDC #125', qty: 6 },
      { name: 'Cap. Amoxicillin + Clavulanate 625mg', rmscl: 'RMSCL DDC #505', qty: 10 },
      { name: 'Tab. Paracetamol 650mg', rmscl: 'RMSCL DDC #28', qty: 10 },
      { name: 'Tab. Pantoprazole 40mg', rmscl: 'RMSCL DDC #142', qty: 5 }
    ],
    dischargeAdvice: [
      'Patient must proceed immediately to Otolaryngology surgical ward for scheduled definitive resection within 24-48 hours',
      'Strictly avoid blowing the nose, sniffing forcefully, or digital manipulation of the nasal cavity',
      'Keep the head of the bed elevated at 30-45 degrees at all times to minimize venous congestion in the head and neck',
      'Maintain strict bed rest until transfer to the operating theater',
      'Report any facial numbness, weakness, visual disturbance, or nasal bleeding immediately to nursing and medical staff'
    ],
    procedureType: 'Major',
    anaesthesiaDefault: 'Local Anesthesia with Conscious Sedation',
    defaultAccessSite: 'Right Common Femoral Artery (CFA)',
    defaultPostOpPlan: 'Neuro-IR / ENT Pre-op HDU bed rest for 4-6 hours. Groin observation protocol: vitals and puncture site checks q15m x 1h, q30m x 2h, then q1h x 4h. Head elevated 30°. Serial cranial nerve examinations (CN II-XII). Transfer to ENT OT within 24-48 hours.'
  },
  {
    procedureKey: 'splenic_artery_embo',
    procedureFamily: 'Visceral & Trauma Embolization',
    icdPrimary: { code: 'D73.1', description: 'Hypersplenism' },
    icdSecondary: [
      { code: 'S36.0', description: 'Injury of spleen' },
      { code: 'K74.6', description: 'Cirrhosis of liver' },
      { code: 'K76.6', description: 'Portal hypertension' },
      { code: 'D69.6', description: 'Thrombocytopenia, unspecified' },
      { code: 'I72.8', description: 'Aneurysm and pseudoaneurysm of splenic artery' }
    ],
    criteriaFields: [
      { key: 'indication', label: 'Primary Clinical Indication', type: 'select', group: 'Clinical Indication & Presentation', options: [
        { value: 'Hypersplenism secondary to Cirrhotic Portal Hypertension', label: 'Cirrhotic Hypersplenism' },
        { value: 'Blunt splenic trauma with active hemorrhage / parenchymal laceration', label: 'Blunt Splenic Trauma' },
        { value: 'Splenic artery pseudoaneurysm (pancreatitis / trauma-associated)', label: 'Splenic Artery Pseudoaneurysm' },
        { value: 'Pre-TIPS splenic flow dampening / splenomegaly control', label: 'Pre-TIPS Splenic Flow Reduction' }
      ], defaultValue: 'Hypersplenism secondary to Cirrhotic Portal Hypertension' },
      { key: 'traumaGrade', label: 'AAST Splenic Injury Grade (if trauma)', type: 'select', group: 'Clinical Indication & Presentation', options: [
        { value: 'AAST Grade III (Subcapsular hematoma >50% or parenchymal laceration >3 cm)', label: 'AAST Grade III' },
        { value: 'AAST Grade IV (Laceration involving segmental/hilar vessels with devascularization >25%)', label: 'AAST Grade IV' },
        { value: 'AAST Grade II with active contrast extravasation / blush', label: 'AAST Grade II with active blush' },
        { value: 'AAST Grade V (Shattered spleen / hilar vascular injury)', label: 'AAST Grade V' },
        { value: 'Not applicable (Hypersplenism / Non-trauma indication)', label: 'Not applicable (Hypersplenism)' }
      ], defaultValue: 'Not applicable (Hypersplenism / Non-trauma indication)' },
      { key: 'hypersplenismSymptoms', label: 'Hypersplenism Severity & Symptoms', type: 'select', group: 'Clinical Indication & Presentation', options: [
        { value: 'Severe secondary thrombocytopenia with recurrent petechiae, ecchymosis, and inability to tolerate systemic chemotherapy/surgery', label: 'Severe thrombocytopenia with bleeding tendencies' },
        { value: 'Moderate thrombocytopenia with massive splenomegaly, dragging left hypochondrial pain, and early satiety', label: 'Splenomegaly with dragging pain and early satiety' },
        { value: 'Pancytopenia with splenomegaly on liver cirrhosis surveillance', label: 'Pancytopenia with splenomegaly' },
        { value: 'Not applicable (Trauma indication)', label: 'Not applicable (Trauma)' }
      ], defaultValue: 'Severe secondary thrombocytopenia with recurrent petechiae, ecchymosis, and inability to tolerate systemic chemotherapy/surgery' },
      { key: 'traumaMechanism', label: 'Trauma Mechanism (if applicable)', type: 'select', group: 'Clinical Indication & Presentation', options: [
        { value: 'Motor vehicle accident with direct blunt abdominal impact', label: 'Motor vehicle collision' },
        { value: 'Fall from height with left flank and thoracoabdominal trauma', label: 'Fall from height' },
        { value: 'Physical assault with blunt left upper quadrant trauma', label: 'Blunt physical trauma' },
        { value: 'Not applicable (Medical / Cirrhotic presentation)', label: 'Not applicable (Medical)' }
      ], defaultValue: 'Not applicable (Medical / Cirrhotic presentation)' },
      { key: 'cirrhosisHistory', label: 'Chronic Liver Disease History', type: 'select', group: 'Risk & Family History', options: [
        { value: 'Known cirrhosis on medical management with portal hypertension, splenomegaly, and preserved hepatic synthetic function', label: 'Cirrhosis with portal hypertension' },
        { value: 'Alcohol-related cirrhosis in verified abstinence for >6 months', label: 'Alcohol-related cirrhosis (abstinent)' },
        { value: 'Post-hepatitis B/C cirrhosis on antiviral therapy', label: 'Post-viral cirrhosis on antivirals' },
        { value: 'No underlying liver disease (isolated trauma patient)', label: 'No liver disease (Trauma)' }
      ], defaultValue: 'Known cirrhosis on medical management with portal hypertension, splenomegaly, and preserved hepatic synthetic function' },
      { key: 'pancreatitisHistory', label: 'Pancreatitis History', type: 'select', group: 'Risk & Family History', options: [
        { value: 'No history of acute or chronic pancreatitis', label: 'No pancreatitis history' },
        { value: 'History of chronic calcific pancreatitis with splenic vein thrombosis and pseudoaneurysm', label: 'Chronic calcific pancreatitis with pseudoaneurysm' },
        { value: 'History of severe acute necrotizing pancreatitis', label: 'Acute necrotizing pancreatitis' }
      ], defaultValue: 'No history of acute or chronic pancreatitis' },
      { key: 'bleedingDiathesis', label: 'Bleeding Diathesis / Coagulation Status', type: 'select', group: 'Risk & Family History', options: [
        { value: 'Thrombocytopenia secondary to hypersplenic pooling; no inherited coagulopathy; baseline PT/INR verified acceptable', label: 'Hypersplenic thrombocytopenia; no coagulopathy' },
        { value: 'Post-traumatic consumptive coagulopathy resuscitated with blood components prior to angiography', label: 'Post-traumatic coagulopathy (resuscitated)' },
        { value: 'Normal coagulation profile and baseline platelet count', label: 'Normal coagulation profile' }
      ], defaultValue: 'Thrombocytopenia secondary to hypersplenic pooling; no inherited coagulopathy; baseline PT/INR verified acceptable' },
      { key: 'familyHistory', label: 'Family History', type: 'select', group: 'Risk & Family History', options: [
        { value: 'Nil significant family history of chronic liver disease, hematological malignancy, or bleeding disorders', label: 'Nil significant family history' },
        { value: 'Family history of chronic liver disease / hepatitis', label: 'Family history of liver disease' }
      ], defaultValue: 'Nil significant family history of chronic liver disease, hematological malignancy, or bleeding disorders' },
      { key: 'cirseClassification', label: 'CIRSE / SIR Classification', type: 'select', group: 'Classification & Staging', options: [
        { value: 'CIRSE Category 1: Elective Visceral Embolization (Hypersplenism / PSE)', label: 'CIRSE Category 1: Elective Visceral (PSE)' },
        { value: 'CIRSE Category 2: Emergency Trauma Hemostasis / Pseudoaneurysm Exclusion', label: 'CIRSE Category 2: Emergency Trauma' }
      ], defaultValue: 'CIRSE Category 1: Elective Visceral Embolization (Hypersplenism / PSE)' },
      { key: 'targetDevascularization', label: 'Target Splenic Devascularization %', type: 'select', group: 'Classification & Staging', options: [
        { value: 'Partial Splenic Embolization: 30-40% parenchymal devascularization (standard target to optimize platelet rise while avoiding abscess/sepsis)', label: '30-40% devascularization (optimal safety)' },
        { value: 'Partial Splenic Embolization: 40-50% parenchymal devascularization', label: '40-50% devascularization' },
        { value: 'Proximal Main Trunk Flow Dampening (preserving splenic collateral perfusion via short gastric arcades)', label: 'Proximal main trunk dampening' },
        { value: 'Focal Complete Pseudoaneurysm Exclusion (100% exclusion of vascular sac)', label: 'Focal pseudoaneurysm exclusion' }
      ], defaultValue: 'Partial Splenic Embolization: 30-40% parenchymal devascularization (standard target to optimize platelet rise while avoiding abscess/sepsis)' },
      { key: 'hemodynamicStatus', label: 'Hemodynamic Stability', type: 'select', group: 'Classification & Staging', options: [
        { value: 'Hemodynamically stable throughout presentation', label: 'Hemodynamically stable' },
        { value: 'Transient responder stabilized post initial 1-2 liters crystalloid resuscitation', label: 'Transient responder (stabilized)' },
        { value: 'Stable outpatient presentation for elective procedure', label: 'Stable elective outpatient' }
      ], defaultValue: 'Hemodynamically stable throughout presentation' },
      { key: 'accessRoute', label: 'Vascular Access Site', type: 'select', group: 'Vascular Access & Hardware', options: [
        { value: 'Right Common Femoral Artery (CFA)', label: 'Right Common Femoral Artery (CFA)' },
        { value: 'Left Common Femoral Artery (CFA)', label: 'Left Common Femoral Artery (CFA)' },
        { value: 'Left Distal Radial Artery (Transradial access)', label: 'Left Distal Radial Artery (Transradial)' }
      ], defaultValue: 'Right Common Femoral Artery (CFA)' },
      { key: 'sheathSize', label: 'Vascular Sheath Size', type: 'select', group: 'Vascular Access & Hardware', options: [
        { value: '5F Cordis/Terumo Introducer Sheath', label: '5F Introducer Sheath' },
        { value: '6F Cordis Introducer Sheath', label: '6F Introducer Sheath' }
      ], defaultValue: '5F Cordis/Terumo Introducer Sheath' },
      { key: 'diagnosticCatheter', label: 'Diagnostic Catheter', type: 'select', group: 'Vascular Access & Hardware', options: [
        { value: '5F Cobra (C2) catheter', label: '5F Cobra (C2)' },
        { value: '5F Simmons 1 (SIM-1) catheter', label: '5F Simmons 1 (SIM-1)' },
        { value: '5F Rosch Celiac (RC) catheter', label: '5F Rosch Celiac (RC)' }
      ], defaultValue: '5F Cobra (C2) catheter' },
      { key: 'microcatheter', label: 'Superselective Microcatheter', type: 'select', group: 'Vascular Access & Hardware', options: [
        { value: '2.7F Progreat (Terumo) microcatheter with 0.014" GT guidewire', label: '2.7F Progreat (Terumo) + 0.014" GT wire' },
        { value: '2.8F Renegade Hi-Flo microcatheter with 0.018" Fathom wire', label: '2.8F Renegade Hi-Flo + 0.018" wire' }
      ], defaultValue: '2.7F Progreat (Terumo) microcatheter with 0.014" GT guidewire' },
      { key: 'technique', label: 'Embolization Technique', type: 'select', group: 'Target Anatomy & Embolization Technique', options: [
        { value: 'Distal superselective partial polar embolization (lower and middle polar segmental branches, strictly sparing the upper pole and short gastric branches)', label: 'Distal superselective partial polar (lower/middle poles)' },
        { value: 'Proximal Splenic Artery Embolization (PSAE - microcoils/vascular plug placed in main splenic trunk distal to dorsal pancreatic artery and proximal to pancreatica magna)', label: 'Proximal main trunk embolization (PSAE)' },
        { value: 'Superselective distal "sandwich" coil occlusion of pseudoaneurysm neck (inflow and outflow isolation)', label: 'Distal sandwich coil occlusion' },
        { value: 'Combined proximal flow reduction and distal focal coil embolization', label: 'Combined proximal and distal embolization' }
      ], defaultValue: 'Distal superselective partial polar embolization (lower and middle polar segmental branches, strictly sparing the upper pole and short gastric branches)' },
      { key: 'protectionPancreaticArcades', label: 'Pancreatic Arcades & Upper Pole Protection', type: 'select', group: 'Target Anatomy & Embolization Technique', options: [
        { value: 'Pancreatic branches (dorsal pancreatic artery, pancreatica magna) and short gastric arteries were identified and meticulously spared. The upper pole splenic parenchyma was preserved intact to maintain baseline splenic immune competence and prevent catastrophic post-splenectomy infection. Reflux into the celiac trunk and common hepatic artery was strictly avoided.', label: 'Pancreatic arcades and upper pole strictly spared; zero celiac reflux' },
        { value: 'Catheter positioned distal to the dorsal pancreatic artery takeoff; coil pack delivered with preservation of splenic collateral perfusion via gastroepiploic and short gastric pathways.', label: 'Positioned distal to dorsal pancreatic; collateral arcades preserved' }
      ], defaultValue: 'Pancreatic branches (dorsal pancreatic artery, pancreatica magna) and short gastric arteries were identified and meticulously spared. The upper pole splenic parenchyma was preserved intact to maintain baseline splenic immune competence and prevent catastrophic post-splenectomy infection. Reflux into the celiac trunk and common hepatic artery was strictly avoided.' },
      { key: 'embolicAgent', label: 'Embolic Agent & Specifications', type: 'select', group: 'Embolic Agent & Endpoint', options: [
        { value: 'PVA particles 500-710 µm (Polyvinyl Alcohol) suspended in non-ionic contrast and 1g Cefazolin', label: 'PVA particles 500-710 µm + antibiotic' },
        { value: 'PVA particles 710-1000 µm (Polyvinyl Alcohol) suspended in non-ionic contrast and antibiotic', label: 'PVA particles 710-1000 µm + antibiotic' },
        { value: 'Calibrated microspheres (Embosphere 500-700 µm)', label: 'Embosphere microspheres 500-700 µm' },
        { value: 'Fibered Platinum Microcoils (0.018", 4-8 mm) deployed to complete occlusion', label: 'Fibered Microcoils (4-8 mm)' },
        { value: 'Amplatzer Vascular Plug 4 (AVP 4) deployed in main splenic artery', label: 'Amplatzer Vascular Plug (AVP 4)' },
        { value: 'Microcoils combined with PVA particles 500-710 µm', label: 'Microcoils + PVA particles' }
      ], defaultValue: 'PVA particles 500-710 µm (Polyvinyl Alcohol) suspended in non-ionic contrast and 1g Cefazolin' },
      { key: 'technicalEndpoint', label: 'Technical Success Endpoint', type: 'select', group: 'Embolic Agent & Endpoint', options: [
        { value: 'Controlled ~30-40% splenic parenchymal devascularization confirmed on post-embolization parenchymal phase DSA, with preserved robust upper pole perfusion and brisk gastric collateral flow', label: 'Controlled ~30-40% devascularization with preserved upper pole' },
        { value: 'Complete angiographic cessation of contrast extravasation and pseudoaneurysm thrombosis, with preserved parenchymal perfusion', label: 'Complete cessation of extravasation / pseudoaneurysm exclusion' },
        { value: 'Significant dampening of splenic arterial pulse wave with reduced parenchymal transit time and intact collateral arcades', label: 'Main trunk pulse dampening with preserved collaterals' }
      ], defaultValue: 'Controlled ~30-40% splenic parenchymal devascularization confirmed on post-embolization parenchymal phase DSA, with preserved robust upper pole perfusion and brisk gastric collateral flow' },
      { key: 'hemostasisMethod', label: 'Access Site Hemostasis', type: 'select', group: 'Post-Operative Recovery & Hemostasis', options: [
        { value: 'Manual compression for 15-20 minutes following sheath removal, achieving complete hemostasis, followed by sterile compressive pressure dressing', label: 'Manual compression (15-20 min) with pressure dressing' },
        { value: 'Deployment of 6F Angio-Seal vascular closure device with immediate collagen-plug hemostasis', label: 'Angio-Seal 6F vascular closure device' },
        { value: 'TR Band radial compression device applied with patent hemostasis verified by Barbeau test', label: 'TR Band radial compression band' }
      ], defaultValue: 'Manual compression for 15-20 minutes following sheath removal, achieving complete hemostasis, followed by sterile compressive pressure dressing' },
      { key: 'distalPulseStatus', label: 'Distal Pulse Status', type: 'select', group: 'Post-Operative Recovery & Hemostasis', options: [
        { value: 'Right and left dorsalis pedis (DP) and posterior tibial (PT) pulses strong (+++), palpable, symmetric; capillary refill <2 seconds; lower extremities warm', label: 'Bilateral DP and PT pulses strong (+++), warm extremities' },
        { value: 'Left radial pulse strong (+++), patent arch, warm hand with instant capillary refill', label: 'Left radial pulse strong (+++), patent arch' }
      ], defaultValue: 'Right and left dorsalis pedis (DP) and posterior tibial (PT) pulses strong (+++), palpable, symmetric; capillary refill <2 seconds; lower extremities warm' },
      { key: 'recoveryBed', label: 'Recovery Bed & HDU Location', type: 'select', group: 'Post-Operative Recovery & Hemostasis', options: [
        { value: 'Cath-Lab Observation Holding / Surgical IR High Dependency Unit (HDU)', label: 'Cath-Lab Holding / Surgical IR HDU' },
        { value: 'Trauma Intensive Care Unit (TICU) / Emergency HDU', label: 'Trauma Intensive Care Unit (TICU)' }
      ], defaultValue: 'Cath-Lab Observation Holding / Surgical IR High Dependency Unit (HDU)' },
      { key: 'monitoringProtocol', label: 'Monitoring Protocol', type: 'select', group: 'Post-Operative Recovery & Hemostasis', options: [
        { value: 'Strict supine bed rest with straight right lower extremity for 4-6 hours (or 2 hours if closure device); vitals monitoring (BP, HR, RR, SpO2) q15m x 1h, q30m x 2h, then q1h x 4h; serial abdominal examination for peritonism, rebound tenderness, or left upper quadrant distension; daily hemogram for platelet count monitoring', label: 'Groin rest 4-6h, vitals q15m x 1h, q30m x 2h, serial abdominal exam, platelet tracking' },
        { value: 'Transradial recovery protocol: TR Band gradual deflation over 2-3 hours; vitals q15m x 1h, q30m x 2h; abdominal examinations', label: 'Radial recovery protocol over 2-3 hours' }
      ], defaultValue: 'Strict supine bed rest with straight right lower extremity for 4-6 hours (or 2 hours if closure device); vitals monitoring (BP, HR, RR, SpO2) q15m x 1h, q30m x 2h, then q1h x 4h; serial abdominal examination for peritonism, rebound tenderness, or left upper quadrant distension; daily hemogram for platelet count monitoring' },
      { key: 'immediateComplications', label: 'Immediate Complication Surveillance', type: 'select', group: 'Post-Operative Recovery & Hemostasis', options: [
        { value: 'Proactive surveillance for Post-Embolization Syndrome (PES - left upper quadrant pain, low-grade fever, nausea, and reactive left basal atelectasis); managed promptly with multimodal analgesia (IV Paracetamol, Tramadol, antiemetics; NSAIDs strictly avoided if cirrhotic). Groin puncture site soft, clean, and dry with zero hematoma or pseudoaneurysm. Abdomen soft without peritoneal signs or guarding.', label: 'PES managed proactively; zero hematoma; abdomen soft without peritonitis' },
        { value: 'Mild left upper quadrant ache managed with oral analgesics; zero puncture site complications; zero signs of splenic abscess.', label: 'Mild LUQ ache managed with analgesics; zero complications' }
      ], defaultValue: 'Proactive surveillance for Post-Embolization Syndrome (PES - left upper quadrant pain, low-grade fever, nausea, and reactive left basal atelectasis); managed promptly with multimodal analgesia (IV Paracetamol, Tramadol, antiemetics; NSAIDs strictly avoided if cirrhotic). Groin puncture site soft, clean, and dry with zero hematoma or pseudoaneurysm. Abdomen soft without peritoneal signs or guarding.' }
    ],
    synthesizeComplaints: (c) => `Patient presented for Splenic Artery Embolization indicated for ${c.indication || 'Hypersplenism secondary to Cirrhotic Portal Hypertension'}. Clinical presentation: ${c.hypersplenismSymptoms || c.traumaGrade || 'Hypersplenic thrombocytopenia'}. Evaluated by Interventional Radiology and scheduled for endovascular intervention.`,
    synthesizeHistory: (c) => `Patient is a known case of ${c.cirrhosisHistory || 'cirrhosis with portal hypertension'} / ${c.traumaMechanism || 'blunt abdominal trauma'}. Categorized under ${c.cirseClassification || 'CIRSE Category 1: Elective Visceral Embolization'}. Target procedural goal: ${c.targetDevascularization || 'Partial Splenic Embolization (30-40% devascularization)'}. Pancreatitis history: ${c.pancreatitisHistory || 'Nil'}. Evaluated and pre-procedurally prepared according to institutional visceral embolization protocols.`,
    synthesizeFamilyAndRiskHistory: (c) => `Risk & Exposure Profile: Cirrhosis history - ${c.cirrhosisHistory || 'Cirrhosis on management'}. Pancreatitis history - ${c.pancreatitisHistory || 'Nil'}. Bleeding diathesis / Coagulation history - ${c.bleedingDiathesis || 'Hypersplenic thrombocytopenia'}. Family history - ${c.familyHistory || 'Nil significant family history'}. (Verified clinically; strictly zero simulated lab values).`,
    synthesizeLocalExam: (c) => `Abdominal Examination: Abdomen soft, mild left upper quadrant tenderness without guarding or rigidity. Palpable splenomegaly extending 3-5 cm below the left costal margin; liver non-palpable or shrunken; shifting dullness absent. Bowel sounds sluggish but audible. Chest: Clear bilaterally, mild left basal decreased air entry. Puncture Site: ${c.accessRoute || 'Right CFA'} - dressing clean, dry, zero hematoma, distal pulses palpable and symmetric.`,
    synthesizeOperativeNote: (c) => `PROCEDURAL OPERATIVE NOTE: TRANSCATHETER SPLENIC ARTERY EMBOLIZATION (SAE)
Indication: ${c.indication || 'Hypersplenism secondary to Cirrhotic Portal Hypertension'}.
Vascular Access: Under strict aseptic technique and local anesthesia (2% Lignocaine), vascular access was secured via ${c.accessRoute || 'Right Common Femoral Artery (CFA)'} using a ${c.sheathSize || '5F Cordis/Terumo sheath'}.
Diagnostic Catheterization: A ${c.diagnosticCatheter || '5F Cobra catheter'} was advanced to the celiac trunk and selective splenic arteriography was performed under Digital Subtraction Angiography (DSA). Angiogram demonstrated a markedly tortuous, dilated splenic artery feeding an enlarged spleen with intense parenchymal capillary phase.
PANCREATIC ARCADE & COLLATERAL PROTECTION: ${c.protectionPancreaticArcades || 'Pancreatic arcades and upper pole strictly spared; zero celiac reflux.'}
SUPERSELECTIVE EMBOLIZATION: A ${c.microcatheter || '2.7F Progreat microcatheter'} was negotiated coaxially into target branches. Embolization performed using: ${c.technique || 'distal superselective partial polar embolization'} utilizing ${c.embolicAgent || 'PVA particles 500-710 µm'}. Embolic infusion was titrated to the predefined endpoint: ${c.technicalEndpoint || 'controlled ~30-40% splenic parenchymal devascularization'}.
COMPLETION ANGIOGRAPHY: Demonstrated satisfactory devascularization of target splenic territory (~30-40%) with vigorous, preserved perfusion to the splenic upper pole, short gastric, and gastroepiploic collaterals. Parent celiac trunk and hepatic arterial branches were entirely patent with zero reflux. Catheter and sheath removed; hemostasis achieved via ${c.hemostasisMethod || 'manual compression'}.`,
    synthesizePostOpRecoveryNote: (c) => ({
      accessSiteHemostasis: `${c.hemostasisMethod || 'Manual compression for 15-20 minutes'} achieved complete hemostasis. Sterile pressure dressing intact, dry, and clean with zero bleeding or hematoma.`,
      distalPulses: `${c.distalPulseStatus || 'Right and left dorsalis pedis and posterior tibial pulses strong (+++), palpable, symmetric; lower extremities warm.'}`,
      recoveryBedMonitoring: `${c.recoveryBed || 'Cath-Lab Holding / Surgical IR HDU'}. Protocol: ${c.monitoringProtocol || 'Bed rest for 4-6 hours, vitals q15m x 1h, q30m x 2h, serial abdominal exam, platelet tracking.'}`,
      immediateComplications: `${c.immediateComplications || 'Proactive PES surveillance: LUQ discomfort managed with IV analgesia; zero groin hematoma; abdomen soft without peritonitis.'}`,
      recoveryStatus: 'Conscious, oriented x3, hemodynamically stable. Nil signs of acute abdomen. Bed rest orders active.',
      notes: `Splenic Artery Embolization for ${c.indication || 'hypersplenism'} completed successfully. Controlled devascularization (~30-40%) verified with upper pole preservation. Post-op recovery uneventful.`
    }),
    synthesizeDiagnosis: (c) => `${c.indication || 'Hypersplenism secondary to Cirrhotic Portal Hypertension'}, status post Transcatheter Splenic Artery Embolization (${c.targetDevascularization || 'Partial Splenic Embolization ~35%'}) with ${c.embolicAgent || 'PVA particles 500-710 µm'}.`,
    defaultMedications: [
      { sNo: 0, genericName: 'Paracetamol', medicine: 'Tab. Paracetamol 650mg [RMSCL DDC #28]', dosePower: '650mg', route: 'ORAL', frequency: 'TID', days: 7, instructions: 'For post-embolization fever and left hypochondrial discomfort' },
      { sNo: 0, genericName: 'Tramadol and Paracetamol', medicine: 'Tab. Tramadol 37.5mg + Paracetamol 325mg [RMSCL DDC #624]', dosePower: '1 Tab', route: 'ORAL', frequency: 'BD', days: 5, instructions: 'For moderate post-embolization left upper quadrant pain' },
      { sNo: 0, genericName: 'Cefixime', medicine: 'Tab. Cefixime 200mg [RMSCL DDC #611]', dosePower: '200mg', route: 'ORAL', frequency: 'BD', days: 7, instructions: 'Prophylactic antibiotic coverage against ischemic splenic superinfection' },
      { sNo: 0, genericName: 'Ondansetron', medicine: 'Tab. Ondansetron 4mg [RMSCL DDC #167]', dosePower: '4mg', route: 'ORAL', frequency: 'SOS', days: 3, instructions: 'For nausea or vomiting associated with post-embolization syndrome' },
      { sNo: 0, genericName: 'Pantoprazole', medicine: 'Tab. Pantoprazole 40mg [RMSCL DDC #142]', dosePower: '40mg', route: 'ORAL', frequency: 'OD', days: 14, instructions: 'Take 30 minutes before breakfast' }
    ],
    conditionalMedications: [
      { condition: 'If Cirrhotic Hypersplenism', conditionKey: 'indication', conditionValue: 'Hypersplenism secondary to Cirrhotic Portal Hypertension', medication: { sNo: 0, genericName: 'Lactulose', medicine: 'Syp. Lactulose 30ml [RMSCL DDC #512]', dosePower: '15-30ml', route: 'ORAL', frequency: 'BD', days: 30, instructions: 'Adjust dose to achieve 2-3 soft stools daily; prevents hepatic encephalopathy' } }
    ],
    followUpInstructions: [
      'Complete Blood Count (CBC) with Platelet Count at 1 week, 2 weeks, and 1 month to monitor hematological response',
      'Abdominal Ultrasound / Contrast-Enhanced CT at 1 month to assess splenic infarct resolution and rule out collection/abscess',
      'Mandatory post-embolization immunization: Pneumococcal (PCV13 + PPSV23), Meningococcal (MenACWY), and H. influenzae type b (Hib) vaccines scheduled within 14 days post-procedure',
      'Hepatology / Surgical follow-up in OPD at 2 weeks'
    ],
    redFlagWarnings: [
      'Severe, intractable left upper quadrant pain with high-grade fever (>102°F) persisting >5 days (splenic abscess warning)',
      'Signs of acute peritonitis: abdominal rigidity, severe guarding, generalized rebound tenderness, or vomiting',
      'Dizziness, sudden pallor, syncope, or postural hypotension (delayed splenic rupture warning)',
      'Progressive left-sided shortness of breath or pleuritic pain (significant sympathetic pleural effusion)',
      'Pulsatile swelling, expanding lump, or active bleeding at the femoral access site'
    ],
    expectedAttachments: [
      { modality: 'DSA', description: 'Diagnostic celiac and splenic arteriogram demonstrating splenomegaly and arterial anatomy' },
      { modality: 'DSA', description: 'Superselective polar microcatheter angiograms showing spared upper pole' },
      { modality: 'DSA', description: 'Completion parenchymal phase arteriogram confirming ~30-40% controlled devascularization' }
    ],
    ddcDrugs: [
      { name: 'Tab. Paracetamol 650mg', rmscl: 'RMSCL DDC #28', qty: 21 },
      { name: 'Tab. Tramadol + Paracetamol', rmscl: 'RMSCL DDC #624', qty: 10 },
      { name: 'Tab. Cefixime 200mg', rmscl: 'RMSCL DDC #611', qty: 14 },
      { name: 'Tab. Pantoprazole 40mg', rmscl: 'RMSCL DDC #142', qty: 14 }
    ],
    dischargeAdvice: [
      'Avoid contact sports, heavy lifting (>5 kg), vigorous abdominal straining, or direct trauma to the left flank for 6-8 weeks',
      'Maintain adequate oral hydration (2-2.5 liters/day); expect mild left upper quadrant soreness and low-grade fever for 3-5 days (self-limiting post-embolization syndrome)',
      'Strictly avoid NSAIDs (such as Brufen, Diclofenac) if liver disease is present, as they risk renal failure and GI bleeding',
      'Keep the groin puncture site clean and dry; dressing may be removed after 48 hours',
      'Ensure timely completion of the mandatory post-splenic embolization vaccination protocol within 14 days'
    ],
    procedureType: 'Major',
    anaesthesiaDefault: 'Local Anesthesia',
    defaultAccessSite: 'Right Common Femoral Artery (CFA)',
    defaultPostOpPlan: 'Cath-Lab Holding / Surgical IR HDU bed rest for 4-6 hours. Groin observation protocol: vitals and puncture site checks q15m x 1h, q30m x 2h, then q1h x 4h. Serial abdominal examinations for peritonism. Daily platelet count tracking.'
  },
  {
    procedureKey: 'ctace_hepatoma',
    procedureFamily: 'Interventional Oncology - Hepatic',
    icdPrimary: { code: 'C22.0', description: 'Hepatocellular carcinoma' },
    icdSecondary: [
      { code: 'K74.6', description: 'Cirrhosis of liver, unspecified' },
      { code: 'B18.2', description: 'Chronic viral hepatitis C' },
      { code: 'B18.1', description: 'Chronic viral hepatitis B without delta-agent' },
      { code: 'K76.6', description: 'Portal hypertension' },
      { code: 'I85.0', description: 'Esophageal varices with bleeding' }
    ],
    criteriaFields: [
      { key: 'tumorBurden', label: 'Tumor Burden & Lesion Morphology', type: 'select', group: 'Clinical Presentation & Tumor Burden', options: [
        { value: 'Solitary discrete hypervascular nodule ≤5 cm', label: 'Solitary lesion ≤5 cm' },
        { value: 'Solitary hypervascular lesion >5 cm', label: 'Solitary lesion >5 cm' },
        { value: 'Multifocal 2-3 hypervascular lesions (all ≤3 cm - within Milan criteria)', label: 'Multifocal 2-3 lesions (within Milan)' },
        { value: 'Multinodular intermediate burden (within up-to-7 criteria)', label: 'Multinodular (within up-to-7 criteria)' },
        { value: 'Multifocal bilobar disease (planned for staged lobar TACE)', label: 'Multifocal bilobar disease (staged)' }
      ], defaultValue: 'Solitary discrete hypervascular nodule ≤5 cm' },
      { key: 'tumorLocation', label: 'Hepatic Segmental Location', type: 'select', group: 'Clinical Presentation & Tumor Burden', options: [
        { value: 'Segment VIII of right hepatic lobe', label: 'Segment VIII' },
        { value: 'Segment V/VI of right hepatic lobe', label: 'Segment V/VI' },
        { value: 'Segment VII of right hepatic lobe', label: 'Segment VII' },
        { value: 'Segment IVb of left hepatic lobe', label: 'Segment IVb' },
        { value: 'Segment II/III of left hepatic lobe', label: 'Segment II/III' },
        { value: 'Bilateral hepatic segments (multifocal)', label: 'Bilateral segments' }
      ], defaultValue: 'Segment VIII of right hepatic lobe' },
      { key: 'symptoms', label: 'Clinical Presentation & Symptoms', type: 'select', group: 'Clinical Presentation & Tumor Burden', options: [
        { value: 'Asymptomatic screening detection on 6-monthly cirrhotic ultrasound surveillance', label: 'Asymptomatic (surveillance detection)' },
        { value: 'Right upper quadrant dull aching pain with abdominal fullness', label: 'RUQ dull ache and fullness' },
        { value: 'Anorexia, constitutional fatigue, and mild unintentional weight loss', label: 'Anorexia, fatigue, and weight loss' }
      ], defaultValue: 'Asymptomatic screening detection on 6-monthly cirrhotic ultrasound surveillance' },
      { key: 'taceSession', label: 'TACE Session Sequence', type: 'select', group: 'Clinical Presentation & Tumor Burden', options: [
        { value: '1st (Initial index TACE session)', label: '1st (Initial index session)' },
        { value: '2nd (Repeat on-demand session for viable residual tumor)', label: '2nd (Repeat on-demand session)' },
        { value: '3rd+ (Subsequent session for newly emerged or recurrent tumor)', label: '3rd+ (Subsequent session)' }
      ], defaultValue: '1st (Initial index TACE session)' },
      { key: 'etiology', label: 'Chronic Liver Disease Etiology', type: 'select', group: 'Risk & Family History', options: [
        { value: 'Hepatitis B virus (HBV) cirrhosis on oral antiviral therapy (Tenofovir/Entecavir)', label: 'Hepatitis B cirrhosis on antivirals' },
        { value: 'Hepatitis C virus (HCV) cirrhosis post-direct acting antivirals (SVR achieved)', label: 'Hepatitis C cirrhosis (post-DAA SVR)' },
        { value: 'Alcohol-related liver disease (ALRD) in verified sustained abstinence', label: 'Alcohol-related cirrhosis (abstinent)' },
        { value: 'Metabolic Dysfunction-Associated Steatohepatitis (MASH / NAFLD) cirrhosis', label: 'MASH / NAFLD cirrhosis' },
        { value: 'Cryptogenic cirrhosis with portal hypertension', label: 'Cryptogenic cirrhosis' }
      ], defaultValue: 'Hepatitis B virus (HBV) cirrhosis on oral antiviral therapy (Tenofovir/Entecavir)' },
      { key: 'chronicLiverHistory', label: 'Cirrhosis Status & Past Decompensation', type: 'select', group: 'Risk & Family History', options: [
        { value: 'Compensated cirrhosis without past decompensation; nil ascites; nil encephalopathy', label: 'Compensated (no prior decompensation)' },
        { value: 'History of well-controlled minimal ascites maintained on low-dose Spironolactone', label: 'Controlled ascites on diuretics' },
        { value: 'History of successful endoscopic variceal band ligation (EVL) with eradicated varices', label: 'Past variceal banding (eradicated)' },
        { value: 'Zero past history of spontaneous bacterial peritonitis (SBP) or hepatorenal syndrome', label: 'No history of SBP or HRS' }
      ], defaultValue: 'Compensated cirrhosis without past decompensation; nil ascites; nil encephalopathy' },
      { key: 'bleedingDiathesis', label: 'Bleeding Diathesis / Coagulation Status', type: 'select', group: 'Risk & Family History', options: [
        { value: 'No overt clinical bleeding diathesis; baseline coagulation acceptable for femoral/radial puncture', label: 'No clinical bleeding diathesis; acceptable coagulation' },
        { value: 'Mild cirrhotic coagulopathy managed without blood component transfusion', label: 'Mild cirrhotic coagulopathy (stable)' }
      ], defaultValue: 'No overt clinical bleeding diathesis; baseline coagulation acceptable for femoral/radial puncture' },
      { key: 'familyHistory', label: 'Family History', type: 'select', group: 'Risk & Family History', options: [
        { value: 'Nil family history of hepatocellular carcinoma, liver cirrhosis, or viral hepatitis', label: 'Nil significant family history' },
        { value: 'Family history of chronic hepatitis B infection among siblings', label: 'Family history of hepatitis B' }
      ], defaultValue: 'Nil family history of hepatocellular carcinoma, liver cirrhosis, or viral hepatitis' },
      { key: 'bclcStage', label: 'BCLC Staging (2022 Update)', type: 'select', group: 'Classification & Staging', options: [
        { value: 'BCLC Stage B (Intermediate Stage - classic candidate for Transarterial Chemoembolization)', label: 'BCLC Stage B (Intermediate Stage - Standard TACE)' },
        { value: 'BCLC Stage A (Early Stage - solitary or 2-3 nodules ≤3 cm; bridged to thermal ablation or resection)', label: 'BCLC Stage A (Early Stage - Bridge to ablation/resection)' },
        { value: 'BCLC Stage 0 (Very Early Stage - solitary nodule <2 cm with preserved liver function)', label: 'BCLC Stage 0 (Very Early Stage)' }
      ], defaultValue: 'BCLC Stage B (Intermediate Stage - classic candidate for Transarterial Chemoembolization)' },
      { key: 'childPugh', label: 'Child-Pugh Class & Liver Function', type: 'select', group: 'Classification & Staging', options: [
        { value: 'Child-Pugh Class A (Score 5-6) - Well-preserved hepatic functional reserve', label: 'Child-Pugh Class A (Score 5-6)' },
        { value: 'Child-Pugh Class B (Score 7) - Carefully selected patient with normal bilirubin and absence of intractable ascites', label: 'Child-Pugh Class B (Score 7 - Selected)' }
      ], defaultValue: 'Child-Pugh Class A (Score 5-6) - Well-preserved hepatic functional reserve' },
      { key: 'pvStatus', label: 'Portal Vein Status & Flow Direction', type: 'select', group: 'Classification & Staging', options: [
        { value: 'Patent main portal vein, right, and left portal branches with hepatopetal flow verified on indirect portography', label: 'Patent main portal vein and branches (hepatopetal flow)' },
        { value: 'Patent main portal vein with subsegmental non-occlusive branch thrombosis', label: 'Patent main portal vein with segmental branch thrombosis' },
        { value: 'Patent portal trunk with preserved flow', label: 'Patent portal trunk' }
      ], defaultValue: 'Patent main portal vein, right, and left portal branches with hepatopetal flow verified on indirect portography' },
      { key: 'performanceStatus', label: 'ECOG Performance Status', type: 'select', group: 'Classification & Staging', options: [
        { value: 'ECOG Performance Status 0 (Fully active, asymptomatic, able to carry on all predisease activities)', label: 'ECOG 0 (Fully active)' },
        { value: 'ECOG Performance Status 1 (Ambulatory, restricted in physically strenuous activity)', label: 'ECOG 1 (Ambulatory, restricted)' }
      ], defaultValue: 'ECOG Performance Status 0 (Fully active, asymptomatic, able to carry on all predisease activities)' },
      { key: 'accessRoute', label: 'Vascular Access Site', type: 'select', group: 'Vascular Access & Hardware', options: [
        { value: 'Right Common Femoral Artery (CFA)', label: 'Right Common Femoral Artery (CFA)' },
        { value: 'Left Distal Radial Artery (Transradial access)', label: 'Left Distal Radial Artery (Transradial)' }
      ], defaultValue: 'Right Common Femoral Artery (CFA)' },
      { key: 'sheathSize', label: 'Vascular Sheath Size', type: 'select', group: 'Vascular Access & Hardware', options: [
        { value: '5F Cordis/Terumo Introducer Sheath', label: '5F Introducer Sheath' },
        { value: '6F Cordis Introducer Sheath', label: '6F Introducer Sheath' },
        { value: '4F/5F Glidesheath Slender (for radial access)', label: '4F/5F Glidesheath Slender (Radial)' }
      ], defaultValue: '5F Cordis/Terumo Introducer Sheath' },
      { key: 'diagnosticCatheter', label: 'Diagnostic Catheter', type: 'select', group: 'Vascular Access & Hardware', options: [
        { value: '5F Rosch Hepatic (RH) catheter', label: '5F Rosch Hepatic (RH)' },
        { value: '5F Cobra (C2) catheter', label: '5F Cobra (C2)' },
        { value: '5F Simmons 1 (SIM-1) catheter', label: '5F Simmons 1 (SIM-1)' }
      ], defaultValue: '5F Rosch Hepatic (RH) catheter' },
      { key: 'microcatheter', label: 'Superselective Microcatheter', type: 'select', group: 'Vascular Access & Hardware', options: [
        { value: '2.0F Progreat (Terumo) microcatheter with 0.014" GT guidewire', label: '2.0F Progreat (Terumo) + 0.014" GT wire' },
        { value: '2.4F Progreat (Terumo) microcatheter with 0.014" GT guidewire', label: '2.4F Progreat (Terumo) + 0.014" wire' },
        { value: '2.0F Carnelian (Tokai) microcatheter with 0.014" Asahi wire', label: '2.0F Carnelian + 0.014" wire' }
      ], defaultValue: '2.0F Progreat (Terumo) microcatheter with 0.014" GT guidewire' },
      { key: 'arteries', label: 'Target Arteries & Tumor Feeders', type: 'select', group: 'Target Anatomy & Non-Target Protection', options: [
        { value: 'Segment-specific subsegmental tumor-feeding branches arising from right hepatic artery', label: 'Segment-specific branches (Right hepatic)' },
        { value: 'Right hepatic artery (anterior and posterior sectoral branches)', label: 'Right hepatic artery sectoral branches' },
        { value: 'Segment-specific subsegmental tumor-feeding branches arising from left hepatic artery', label: 'Segment-specific branches (Left hepatic)' },
        { value: 'Middle hepatic artery / accessory hepatic feeder', label: 'Middle hepatic / accessory hepatic feeder' }
      ], defaultValue: 'Segment-specific subsegmental tumor-feeding branches arising from right hepatic artery' },
      { key: 'nonTargetProtection', label: 'Non-Target Sparing & Cone-Beam CT Assessment', type: 'select', group: 'Target Anatomy & Non-Target Protection', options: [
        { value: 'The cystic artery was clearly visualized and strictly spared to prevent ischemic cholecystitis; the right gastric, falciform, and gastroduodenal arteries were identified and safeguarded. Cone-Beam CT (CBCT) roadmapping confirmed superselective isolation of tumor feeders with zero non-target parenchymal or extrahepatic perfusion.', label: 'Cystic artery spared (no cholecystitis); CBCT verified zero non-target flow' },
        { value: 'Microcatheter advanced subsegmentally beyond the cystic artery origin; complete tumor coverage with sparing of surrounding non-tumorous liver confirmed on DSA.', label: 'Subsegmental catheterization beyond cystic origin confirmed' }
      ], defaultValue: 'The cystic artery was clearly visualized and strictly spared to prevent ischemic cholecystitis; the right gastric, falciform, and gastroduodenal arteries were identified and safeguarded. Cone-Beam CT (CBCT) roadmapping confirmed superselective isolation of tumor feeders with zero non-target parenchymal or extrahepatic perfusion.' },
      { key: 'regimenType', label: 'Chemoembolization Technique', type: 'select', group: 'Chemotherapeutic Regimen & Embolic Agent', options: [
        { value: 'Conventional cTACE (Lipiodol-Doxorubicin water-in-oil emulsion followed by Gelfoam slurry / PVA)', label: 'Conventional cTACE (Lipiodol + Doxorubicin + Gelfoam)' },
        { value: 'Drug-Eluting Beads DEB-TACE (DC Bead / LifePearl loaded with Doxorubicin)', label: 'Drug-Eluting Beads DEB-TACE' }
      ], defaultValue: 'Conventional cTACE (Lipiodol-Doxorubicin water-in-oil emulsion followed by Gelfoam slurry / PVA)' },
      { key: 'chemoAgent', label: 'Chemotherapeutic Agent & Dose', type: 'select', group: 'Chemotherapeutic Regimen & Embolic Agent', options: [
        { value: 'Doxorubicin 30-50 mg (emulsified with Lipiodol using pumping stopcock technique)', label: 'Doxorubicin 30-50 mg' },
        { value: 'Doxorubicin 50 mg loaded into Drug-Eluting Beads', label: 'Doxorubicin 50 mg (DEB)' },
        { value: 'Epirubicin 50 mg emulsified with Lipiodol', label: 'Epirubicin 50 mg' }
      ], defaultValue: 'Doxorubicin 30-50 mg (emulsified with Lipiodol using pumping stopcock technique)' },
      { key: 'embolicAgent', label: 'Embolic Vehicle & Particle Size', type: 'select', group: 'Chemotherapeutic Regimen & Embolic Agent', options: [
        { value: 'Lipiodol (Ethiodized Oil 8-10 mL) dense emulsion followed by absorbable Gelfoam slurry', label: 'Lipiodol (8-10 mL) + Gelfoam slurry' },
        { value: 'Lipiodol (6-8 mL) emulsion followed by PVA particles 100-300 µm', label: 'Lipiodol + PVA particles 100-300 µm' },
        { value: 'Lipiodol (8-10 mL) emulsion followed by PVA particles 300-500 µm', label: 'Lipiodol + PVA particles 300-500 µm' },
        { value: 'DEB-TACE DC Bead 100-300 µm loaded with 50mg Doxorubicin', label: 'DEB-TACE DC Bead 100-300 µm' },
        { value: 'DEB-TACE DC Bead 70-150 µm loaded with 50mg Doxorubicin', label: 'DEB-TACE DC Bead 70-150 µm' }
      ], defaultValue: 'Lipiodol (Ethiodized Oil 8-10 mL) dense emulsion followed by absorbable Gelfoam slurry' },
      { key: 'technicalEndpoint', label: 'Technical Success Endpoint', type: 'select', group: 'Chemotherapeutic Regimen & Embolic Agent', options: [
        { value: 'Dense, homogeneous Lipiodol retention throughout the tumor bed with portal vein branch visualization (corona sign) and sub-stasis of tumor feeding arterial branches ("tree-in-winter" appearance)', label: 'Dense Lipiodol saturation, corona sign, and tree-in-winter sub-stasis' },
        { value: 'Complete devascularization of target hypervascular lesion with preserved background lobar architecture and intact hepatopetal portal vein flow', label: 'Complete lesion devascularization with preserved portal flow' },
        { value: 'Near-complete flow cessation in tumor feeders with complete ablation of arterial blush on post-embolization DSA', label: 'Near-complete flow cessation with blush ablation' }
      ], defaultValue: 'Dense, homogeneous Lipiodol retention throughout the tumor bed with portal vein branch visualization (corona sign) and sub-stasis of tumor feeding arterial branches ("tree-in-winter" appearance)' },
      { key: 'hemostasisMethod', label: 'Access Site Hemostasis', type: 'select', group: 'Post-Operative Recovery & Hemostasis', options: [
        { value: 'Manual compression for 15-20 minutes following sheath removal, achieving complete hemostasis, followed by sterile compressive pressure bandage', label: 'Manual compression (15-20 min) with pressure dressing' },
        { value: 'Deployment of 6F Angio-Seal vascular closure device with immediate collagen-plug hemostasis', label: 'Angio-Seal 6F vascular closure device' },
        { value: 'TR Band radial compression band applied with patent hemostasis verified by Barbeau test', label: 'TR Band radial compression band' }
      ], defaultValue: 'Manual compression for 15-20 minutes following sheath removal, achieving complete hemostasis, followed by sterile compressive pressure bandage' },
      { key: 'distalPulseStatus', label: 'Distal Pulse Status', type: 'select', group: 'Post-Operative Recovery & Hemostasis', options: [
        { value: 'Right and left dorsalis pedis (DP) and posterior tibial (PT) pulses strong (+++), palpable, symmetric; capillary refill <2 seconds; lower extremities warm', label: 'Bilateral DP and PT pulses strong (+++), warm extremities' },
        { value: 'Left radial pulse strong (+++), patent arch, warm hand with instant capillary refill', label: 'Left radial pulse strong (+++), patent arch' }
      ], defaultValue: 'Right and left dorsalis pedis (DP) and posterior tibial (PT) pulses strong (+++), palpable, symmetric; capillary refill <2 seconds; lower extremities warm' },
      { key: 'recoveryBed', label: 'Recovery Bed & Monitoring Location', type: 'select', group: 'Post-Operative Recovery & Hemostasis', options: [
        { value: 'Cath-Lab Observation Holding / Post-TACE Hepatology Observation Bed', label: 'Cath-Lab Holding / Hepatology Bed' },
        { value: 'Interventional Oncology High Dependency Unit (HDU)', label: 'Interventional Oncology HDU' }
      ], defaultValue: 'Cath-Lab Observation Holding / Post-TACE Hepatology Observation Bed' },
      { key: 'monitoringProtocol', label: 'Monitoring Protocol', type: 'select', group: 'Post-Operative Recovery & Hemostasis', options: [
        { value: 'Strict supine bed rest with immobilized right lower extremity for 4-6 hours (or 2 hours if closure device); vitals monitoring (BP, HR, RR, SpO2) q15m x 1h, q30m x 2h, then q1h x 4h; strict intake-output charting; continuous IV hydration with 0.9% Normal Saline at 80-100 mL/hr to flush contrast and protect renal function', label: 'Groin rest 4-6h, vitals q15m x 1h, q30m x 2h, IV hydration 80-100 mL/hr' },
        { value: 'Transradial recovery protocol: TR Band gradual pressure release over 2-3 hours; vitals q15m x 1h, q30m x 2h; vigorous hydration', label: 'Radial band deflation protocol over 2-3 hours' }
      ], defaultValue: 'Strict supine bed rest with immobilized right lower extremity for 4-6 hours (or 2 hours if closure device); vitals monitoring (BP, HR, RR, SpO2) q15m x 1h, q30m x 2h, then q1h x 4h; strict intake-output charting; continuous IV hydration with 0.9% Normal Saline at 80-100 mL/hr to flush contrast and protect renal function' },
      { key: 'immediateComplications', label: 'Immediate Complication Surveillance', type: 'select', group: 'Post-Operative Recovery & Hemostasis', options: [
        { value: 'Proactive surveillance for Post-Embolization Syndrome (PES - right upper quadrant discomfort, low-grade fever, nausea); managed promptly with IV Ondansetron and multimodal analgesia (Paracetamol + Tramadol; NSAIDs strictly avoided to prevent hepatorenal syndrome and GI bleeding). Groin puncture site soft, dry, with zero hematoma or pseudoaneurysm. Neurological status intact; zero flapping tremors (asterixis) or encephalopathy.', label: 'PES managed proactively (no NSAIDs); zero hematoma; zero encephalopathy' },
        { value: 'Mild transient nausea and right hypochondrial ache managed with antiemetics and paracetamol; zero puncture site complications.', label: 'Mild nausea/ache managed; zero complications' }
      ], defaultValue: 'Proactive surveillance for Post-Embolization Syndrome (PES - right upper quadrant discomfort, low-grade fever, nausea); managed promptly with IV Ondansetron and multimodal analgesia (Paracetamol + Tramadol; NSAIDs strictly avoided to prevent hepatorenal syndrome and GI bleeding). Groin puncture site soft, dry, with zero hematoma or pseudoaneurysm. Neurological status intact; zero flapping tremors (asterixis) or encephalopathy.' }
    ],
    synthesizeComplaints: (c) => `Patient admitted for ${c.taceSession || '1st (Initial index TACE session)'} of Transarterial Chemoembolization (TACE) for Hepatocellular Carcinoma (${c.bclcStage || 'BCLC Stage B'}, ${c.childPugh || 'Child-Pugh Class A'}). Clinical presentation: ${c.symptoms || 'Asymptomatic screening detection on ultrasound surveillance'}.`,
    synthesizeHistory: (c) => `Patient is a known case of ${c.etiology || 'Hepatitis B cirrhosis'} with ${c.chronicLiverHistory || 'compensated cirrhosis'}. Triphasic dynamic contrast-enhanced liver imaging demonstrated ${c.tumorBurden || 'solitary hypervascular lesion ≤5 cm'} located in ${c.tumorLocation || 'Segment VIII'}. Portal vein status: ${c.pvStatus || 'Patent main portal vein with hepatopetal flow'}. Functional performance: ${c.performanceStatus || 'ECOG 0'}. Multidisciplinary Liver Tumor Board reviewed the patient and recommended targeted transcatheter chemoembolization.`,
    synthesizeFamilyAndRiskHistory: (c) => `Risk & Exposure Profile: Cirrhosis etiology - ${c.etiology || 'Hepatitis B cirrhosis'}. Cirrhosis decompensation history - ${c.chronicLiverHistory || 'Compensated'}. Bleeding diathesis / Coagulation history - ${c.bleedingDiathesis || 'Acceptable coagulation'}. Family history - ${c.familyHistory || 'Nil significant family history'}. (Verified clinically; strictly zero simulated lab values).`,
    synthesizeLocalExam: (c) => `Abdominal Examination: Abdomen soft, non-distended, non-tender; mild fullness over right hypochondrium; shifting dullness absent; fluid thrill negative. Liver edge palpable 1-2 cm below costal margin, firm; spleen palpable 2 cm below left costal margin. Bowel sounds normal. Peripheral: Mild pallor, no icterus, no peripheral pedal edema, no asterixis. Puncture Site: ${c.accessRoute || 'Right CFA'} - dressing clean, dry, zero hematoma, distal pulses palpable and symmetric.`,
    synthesizeOperativeNote: (c) => `PROCEDURAL OPERATIVE NOTE: TRANSARTERIAL CHEMOEMBOLIZATION (TACE) FOR HCC
Indication: Hepatocellular Carcinoma (${c.bclcStage || 'BCLC Stage B'}, ${c.childPugh || 'Child-Pugh Class A'}), ${c.tumorBurden || 'solitary lesion'}.
Vascular Access: Under strict aseptic technique and local anesthesia (2% Lignocaine), vascular access was secured via ${c.accessRoute || 'Right Common Femoral Artery (CFA)'} using a ${c.sheathSize || '5F Cordis/Terumo sheath'}.
Diagnostic Catheterization & Portography: A ${c.diagnosticCatheter || '5F Rosch Hepatic catheter'} was advanced to the celiac trunk and superior mesenteric artery (SMA). Indirect mesenteric-portal venography verified ${c.pvStatus || 'patent main portal vein with robust hepatopetal flow'}. Selective hepatic arteriography delineated tumor feeding branches arising from ${c.arteries || 'right hepatic artery'}.
NON-TARGET VESSEL SPARING: ${c.nonTargetProtection || 'Cystic artery spared; zero non-target flow.'}
SUPERSELECTIVE CHEMOEMBOLIZATION: A ${c.microcatheter || '2.0F Progreat microcatheter'} was navigated superselectively into the subsegmental tumor-feeding pedicles. Chemoembolization performed using: ${c.regimenType || 'Conventional cTACE'} delivering ${c.chemoAgent || 'Doxorubicin 30-50 mg'} in ${c.embolicAgent || 'Lipiodol emulsion followed by Gelfoam slurry'} under continuous fluoroscopic monitoring. Administration was carried out to the endpoint: ${c.technicalEndpoint || 'dense Lipiodol retention with corona sign and tree-in-winter sub-stasis'}.
COMPLETION ANGIOGRAPHY: Demonstrated complete devascularization of target tumor nodule with dense Lipiodol retention, preserved background hepatic arterial tree, and intact portal venous circulation. Sheath removed; hemostasis achieved via ${c.hemostasisMethod || 'manual compression'}.`,
    synthesizePostOpRecoveryNote: (c) => ({
      accessSiteHemostasis: `${c.hemostasisMethod || 'Manual compression for 15-20 minutes'} achieved complete hemostasis. Sterile pressure dressing intact, dry, and clean with zero bleeding or hematoma.`,
      distalPulses: `${c.distalPulseStatus || 'Right and left dorsalis pedis and posterior tibial pulses strong (+++), palpable, symmetric; lower extremities warm.'}`,
      recoveryBedMonitoring: `${c.recoveryBed || 'Cath-Lab Holding / Hepatology Bed'}. Protocol: ${c.monitoringProtocol || 'Bed rest for 4-6 hours, vitals q15m x 1h, q30m x 2h, IV hydration 80-100 mL/hr.'}`,
      immediateComplications: `${c.immediateComplications || 'Proactive PES surveillance: antiemetics and analgesia without NSAIDs; zero hematoma; zero encephalopathy.'}`,
      recoveryStatus: 'Conscious, oriented x3, hemodynamically stable. Nil abdominal distension or encephalopathy. Hydration protocol active.',
      notes: `Superselective TACE for HCC (${c.tumorBurden || 'solitary nodule'}) completed successfully. Dense Lipiodol retention and devascularization achieved with non-target sparing. Post-op recovery uneventful.`
    }),
    synthesizeDiagnosis: (c) => `Hepatocellular Carcinoma (${c.bclcStage || 'BCLC Stage B'}, ${c.childPugh || 'Child-Pugh Class A'}), ${c.tumorLocation || 'Segment VIII'}, status post Superselective ${c.regimenType?.includes('DEB') ? 'DEB-TACE' : 'cTACE'} with ${c.chemoAgent || 'Doxorubicin'} and ${c.embolicAgent || 'Lipiodol emulsion + Gelfoam'}.`,
    defaultMedications: [
      { sNo: 0, genericName: 'Ondansetron', medicine: 'Tab. Ondansetron 4mg [RMSCL DDC #167]', dosePower: '4mg', route: 'ORAL', frequency: 'BD', days: 3, instructions: 'Take 30 minutes before meals for chemotherapy-induced nausea and PES' },
      { sNo: 0, genericName: 'Paracetamol', medicine: 'Tab. Paracetamol 650mg [RMSCL DDC #28]', dosePower: '650mg', route: 'ORAL', frequency: 'TID', days: 5, instructions: 'For post-embolization fever and right upper quadrant discomfort' },
      { sNo: 0, genericName: 'Tramadol and Paracetamol', medicine: 'Tab. Tramadol 37.5mg + Paracetamol 325mg [RMSCL DDC #624]', dosePower: '1 Tab', route: 'ORAL', frequency: 'BD', days: 3, instructions: 'For moderate post-procedure right upper quadrant pain (NSAIDs strictly prohibited)' },
      { sNo: 0, genericName: 'Lactulose', medicine: 'Syp. Lactulose 30ml [RMSCL DDC #512]', dosePower: '15-30ml', route: 'ORAL', frequency: 'BD', days: 14, instructions: 'Titrate to 2-3 soft bowel movements daily; essential to prevent hepatic encephalopathy' },
      { sNo: 0, genericName: 'Pantoprazole', medicine: 'Tab. Pantoprazole 40mg [RMSCL DDC #142]', dosePower: '40mg', route: 'ORAL', frequency: 'OD', days: 14, instructions: 'Take 30 minutes before breakfast' },
      { sNo: 0, genericName: 'Silymarin', medicine: 'Tab. Silymarin 140mg [RMSCL DDC #658]', dosePower: '140mg', route: 'ORAL', frequency: 'TID', days: 30, instructions: 'Take after meals for hepatocellular metabolic support' }
    ],
    conditionalMedications: [
      { condition: 'If Hepatitis B Positive', conditionKey: 'etiology', conditionValue: 'Hepatitis B virus (HBV) cirrhosis on oral antiviral therapy (Tenofovir/Entecavir)', medication: { sNo: 0, genericName: 'Tenofovir Alafenamide', medicine: 'Tab. Tenofovir Alafenamide 25mg [RMSCL DDC #822]', dosePower: '25mg', route: 'ORAL', frequency: 'OD', days: 30, instructions: 'Lifelong viral suppression; take daily with meals' } }
    ],
    followUpInstructions: [
      'Liver Function Tests (LFT), Serum Creatinine, and Alpha-Fetoprotein (AFP) at 3-4 weeks',
      'Triphasic Dynamic Contrast-Enhanced CT or Liver MRI (mRECIST criteria) at 4-6 weeks to evaluate tumor response and viable residual tumor',
      'Multidisciplinary Liver Tumor Board review at 6 weeks for decision on repeat on-demand TACE vs surveillance',
      'Follow-up in Interventional Oncology OPD at 2 weeks for clinical and access site assessment'
    ],
    redFlagWarnings: [
      'High-grade fever (>102°F) with chills, rigors, or progressive right upper quadrant pain persisting >72 hours (hepatic abscess or ischemic cholecystitis warning)',
      'Deepening jaundice (yellow discoloration of eyes/skin) or dark urine (acute hepatic decompensation warning)',
      'Altered sleep-wake cycle, confusion, daytime somnolence, or flapping tremors (hepatic encephalopathy warning)',
      'Hematemesis (blood vomiting) or melena (black tarry stools - variceal hemorrhage warning)',
      'Pulsatile swelling, severe tenderness, or bleeding at the femoral access site'
    ],
    expectedAttachments: [
      { modality: 'DSA', description: 'Pre-chemoembolization celiac and selective hepatic angiograms showing tumor blush and anatomy' },
      { modality: 'DSA', description: 'Cone-Beam CT (CBCT) or superselective runs confirming cystic artery sparing' },
      { modality: 'DSA', description: 'Post-TACE fluoroscopy and angiogram demonstrating dense Lipiodol retention and devascularization' }
    ],
    ddcDrugs: [
      { name: 'Tab. Ondansetron 4mg', rmscl: 'RMSCL DDC #167', qty: 10 },
      { name: 'Tab. Paracetamol 650mg', rmscl: 'RMSCL DDC #28', qty: 15 },
      { name: 'Tab. Tramadol + Paracetamol', rmscl: 'RMSCL DDC #624', qty: 6 },
      { name: 'Syp. Lactulose 30ml', rmscl: 'RMSCL DDC #512', qty: 1 },
      { name: 'Tab. Pantoprazole 40mg', rmscl: 'RMSCL DDC #142', qty: 14 },
      { name: 'Tab. Silymarin 140mg', rmscl: 'RMSCL DDC #658', qty: 90 }
    ],
    dischargeAdvice: [
      'Maintain liberal oral fluid intake (2-2.5 liters/day unless restricted for ascites) to promote contrast elimination and renal protection',
      'Strictly avoid NSAIDs (Brufen, Diclofenac, Aceclofenac, Combiflam) due to high risk of acute kidney injury and variceal hemorrhage in cirrhosis',
      'Absolute lifelong abstinence from all alcoholic beverages',
      'Expect mild right upper quadrant soreness, low-grade fever (<100.5°F), and mild fatigue for 3-5 days (self-limiting post-embolization syndrome)',
      'Keep the groin puncture site clean and dry; pressure dressing may be removed after 48 hours'
    ],
    procedureType: 'Major',
    anaesthesiaDefault: 'Local Anesthesia',
    defaultAccessSite: 'Right Common Femoral Artery (CFA)',
    defaultPostOpPlan: 'Cath-Lab Holding / Hepatology Bed rest for 4-6 hours. Groin observation protocol: vitals and puncture site checks q15m x 1h, q30m x 2h, then q1h x 4h. Continuous IV hydration at 80-100 mL/hr. Post-embolization syndrome management. Hepatic encephalopathy monitoring.'
  },
  {
    procedureKey: 'ugib_gda_embo',
    procedureFamily: 'GI Bleeding Embolization',
    icdPrimary: { code: 'K92.2', description: 'Gastrointestinal hemorrhage, unspecified' },
    icdSecondary: [{ code: 'K25.4', description: 'Chronic or unspecified gastric ulcer with hemorrhage' }],
    criteriaFields: [
      { key: 'source', label: 'Bleeding Source', type: 'select', options: [{ value: 'GDA pseudoaneurysm', label: 'GDA Pseudoaneurysm' }, { value: 'LGA', label: 'LGA' }, { value: 'jejunal branch', label: 'Jejunal Branch' }, { value: 'splenic', label: 'Splenic' }], defaultValue: 'GDA pseudoaneurysm' },
      { key: 'etiology', label: 'Etiology', type: 'select', options: [{ value: 'peptic ulcer', label: 'Peptic Ulcer' }, { value: 'post-surgical', label: 'Post-surgical' }, { value: 'pancreatitis', label: 'Pancreatitis' }], defaultValue: 'peptic ulcer' },
      { key: 'embolicAgent', label: 'Embolic Agent', type: 'select', options: [
        { value: 'microcoils', label: 'Microcoils' },
        { value: 'Gelfoam slurry / Torpedoes', label: 'Gelfoam slurry / Torpedoes' },
        { value: 'PVA 300-500 µm', label: 'PVA 300-500 µm' },
        { value: 'PVA 500-710 µm', label: 'PVA 500-710 µm' },
        { value: 'PVA 710-1000 µm', label: 'PVA 710-1000 µm' },
        { value: 'PVA 100-300 µm', label: 'PVA 100-300 µm' },
        { value: 'Embosphere / Microspheres', label: 'Embosphere / Microspheres' },
        { value: 'n-BCA glue', label: 'n-BCA glue' }
      ], defaultValue: 'microcoils' },
      { key: 'transfusion', label: 'Transfusion Units Required', type: 'number', defaultValue: 2 },
      { key: 'stability', label: 'Hemodynamic Stability', type: 'select', options: [{ value: 'stable', label: 'Stable' }, { value: 'unstable requiring resuscitation', label: 'Unstable' }], defaultValue: 'stable' }
    ],
    synthesizeComplaints: (c) => `Patient presented with upper GI bleed, hemodynamically ${c.stability}. Transfused ${c.transfusion} units.`,
    synthesizeHistory: (c) => `History of UGIB secondary to ${c.etiology}.`,
    synthesizeLocalExam: (c) => `Tachycardia, melena/hematemesis noted.`,
    synthesizeOperativeNote: (c) => `Under LA (or MAC if hemodynamically unstable), right CFA access with 5F sheath, 5F Cobra/Simmons catheter celiac axis angiogram and SMA injection. Active contrast extravasation / pseudoaneurysm identified arising from ${c.source}. Superselective microcatheterization with 2.7F Progreat. Embolization with ${c.embolicAgent} achieving complete occlusion proximal and distal to the bleeding point (sandwich technique). Completion angiogram confirming no residual extravasation and preserved collateral arcade.`,
    synthesizeDiagnosis: (c) => `UGIB from ${c.source}, successfully embolized.`,
    defaultMedications: [
      { sNo: 0, genericName: 'Pantoprazole', medicine: 'Tab. Pantoprazole 40mg [RMSCL DDC #142]', dosePower: '40mg', route: 'ORAL', frequency: 'BD', days: 30, instructions: 'PPI therapy' },
      { sNo: 0, genericName: 'Sucralfate', medicine: 'Syp. Sucralfate 1g / 10ml [RMSCL DDC #340]', dosePower: '10ml', route: 'ORAL', frequency: 'QID', days: 14, instructions: 'Take on empty stomach' },
      { sNo: 0, genericName: 'Ferrous Sulfate', medicine: 'Tab. Ferrous Sulfate 200mg [RMSCL DDC #15]', dosePower: '200mg', route: 'ORAL', frequency: 'BD', days: 30, instructions: 'For anemia' },
      { sNo: 0, genericName: 'Paracetamol', medicine: 'Tab. Paracetamol 650mg [RMSCL DDC #28]', dosePower: '650mg', route: 'ORAL', frequency: 'SOS', days: 5, instructions: 'For pain/fever' }
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
    procedureFamily: 'Uterine & Pelvic Embolization',
    icdPrimary: { code: 'O72.1', description: 'Other immediate postpartum hemorrhage' },
    icdSecondary: [
      { code: 'D25.9', description: 'Leiomyoma of uterus, unspecified' },
      { code: 'O72.0', description: 'Third-stage hemorrhage' },
      { code: 'O72.2', description: 'Delayed and secondary postpartum hemorrhage' },
      { code: 'N80.0', description: 'Endometriosis of uterus - adenomyosis' },
      { code: 'D25.1', description: 'Intramural leiomyoma of uterus' },
      { code: 'D25.0', description: 'Submucous leiomyoma of uterus' }
    ],
    criteriaFields: [
      { key: 'indication', label: 'Primary Clinical Indication', type: 'select', group: 'Clinical Indication & Presentation', options: [
        { value: 'Primary Postpartum Hemorrhage (PPH) - Uterine Atony', label: 'Primary PPH - Uterine Atony' },
        { value: 'Secondary Postpartum Hemorrhage (PPH) - Retained Products / Pseudoaneurysm', label: 'Secondary PPH - Pseudoaneurysm / Retained Products' },
        { value: 'Symptomatic Uterine Leiomyomata (Fibroids) - Uterine Fibroid Embolization (UFE)', label: 'Symptomatic Uterine Fibroids (UFE)' },
        { value: 'Uterine Adenomyosis with Severe Menorrhagia / Dysmenorrhea', label: 'Uterine Adenomyosis' },
        { value: 'Uterine Arteriovenous Malformation (AVM)', label: 'Uterine Arteriovenous Malformation (AVM)' }
      ], defaultValue: 'Primary Postpartum Hemorrhage (PPH) - Uterine Atony' },
      { key: 'pphSeverity', label: 'PPH Severity & Estimated Blood Loss (if PPH)', type: 'select', group: 'Clinical Indication & Presentation', options: [
        { value: 'Major PPH (>1000-1500 mL estimated blood loss) refractory to uterotonics (Oxytocin, Carboprost, Misoprostol)', label: 'Major PPH (>1000-1500 mL)' },
        { value: 'Severe / Catastrophic PPH (>2000 mL blood loss) requiring massive transfusion protocol and balloon tamponade', label: 'Severe / Catastrophic PPH (>2000 mL)' },
        { value: 'Delayed secondary PPH with intermittent brisk hemorrhage 2 weeks post-delivery', label: 'Delayed secondary PPH' },
        { value: 'Not applicable (Fibroid / Adenomyosis indication)', label: 'Not applicable (Fibroid / Adenomyosis)' }
      ], defaultValue: 'Major PPH (>1000-1500 mL estimated blood loss) refractory to uterotonics (Oxytocin, Carboprost, Misoprostol)' },
      { key: 'fibroidSymptoms', label: 'Fibroid Symptoms (if UFE indication)', type: 'select', group: 'Clinical Indication & Presentation', options: [
        { value: 'Heavy Menstrual Bleeding (HMB / menorrhagia) resulting in symptomatic microcytic anemia', label: 'Heavy Menstrual Bleeding with anemia' },
        { value: 'Pelvic pressure, urinary urgency, and lower abdominal distension from dominant fibroid bulk', label: 'Bulk pressure symptoms & urinary urgency' },
        { value: 'Severe disabling dysmenorrhea and pelvic fullness unresponsive to medical therapy', label: 'Severe dysmenorrhea & pelvic pain' },
        { value: 'Not applicable (PPH indication)', label: 'Not applicable (PPH)' }
      ], defaultValue: 'Not applicable (PPH indication)' },
      { key: 'parityDetails', label: 'Obstetric & Parity History', type: 'select', group: 'Clinical Indication & Presentation', options: [
        { value: 'Primipara (P1L1) post emergency lower segment Caesarean section (LSCS)', label: 'Primipara post emergency LSCS' },
        { value: 'Primipara (P1L1) post spontaneous full-term vaginal delivery', label: 'Primipara post normal delivery' },
        { value: 'Multipara (P2L2) post repeat elective LSCS', label: 'Multipara post repeat LSCS' },
        { value: 'Nulliparous female strongly desiring uterine and future fertility preservation', label: 'Nulliparous (fertility preservation desired)' },
        { value: 'Multipara with completed family desiring non-surgical uterus-sparing intervention', label: 'Multipara (uterine preservation desired)' }
      ], defaultValue: 'Primipara (P1L1) post emergency lower segment Caesarean section (LSCS)' },
      { key: 'obstetricGynHistory', label: 'Obstetric & Gynecologic Context', type: 'select', group: 'Risk & Family History', options: [
        { value: 'Prolonged second stage of labor complicated by uterine atony unresponsive to medical uterotonics and intrauterine balloon tamponade', label: 'Atonic uterus refractory to uterotonics and tamponade' },
        { value: 'Lower segment Caesarean section for anterior low-lying placenta; intraoperative hemostatic sutures placed', label: 'LSCS with low-lying placenta' },
        { value: 'Known symptomatic uterine leiomyomata for 2-4 years, refractory to tranexamic acid and progestins; surgical myomectomy declined', label: 'Known fibroids refractory to medical therapy' },
        { value: 'History of previous diagnostic D&C; nil other uterine surgical interventions', label: 'Previous D&C history' }
      ], defaultValue: 'Prolonged second stage of labor complicated by uterine atony unresponsive to medical uterotonics and intrauterine balloon tamponade' },
      { key: 'bleedingDiathesis', label: 'Bleeding Diathesis / Coagulation Status', type: 'select', group: 'Risk & Family History', options: [
        { value: 'No pre-existing bleeding diathesis; consumptive coagulopathy corrected with packed red cells and fresh frozen plasma', label: 'No pre-existing diathesis; resuscitated' },
        { value: 'No history of bleeding disorders; normal baseline coagulation profile and platelet count', label: 'Normal coagulation profile' },
        { value: 'Mild dilutional coagulopathy managed during active obstetric resuscitation', label: 'Mild dilutional coagulopathy' }
      ], defaultValue: 'No pre-existing bleeding diathesis; consumptive coagulopathy corrected with packed red cells and fresh frozen plasma' },
      { key: 'familyHistory', label: 'Family History', type: 'select', group: 'Risk & Family History', options: [
        { value: 'Nil family history of postpartum hemorrhage, uterine fibroids, or bleeding diathesis', label: 'Nil significant family history' },
        { value: 'Family history of symptomatic uterine leiomyomata in mother and maternal aunt', label: 'Family history of uterine fibroids' }
      ], defaultValue: 'Nil family history of postpartum hemorrhage, uterine fibroids, or bleeding diathesis' },
      { key: 'medicalComorbidities', label: 'Medical Comorbidities', type: 'select', group: 'Risk & Family History', options: [
        { value: 'Nil significant medical comorbidities; non-diabetic, normotensive', label: 'Nil major medical comorbidities' },
        { value: 'Gestational hypertension on oral labetalol', label: 'Gestational hypertension' },
        { value: 'Gestational diabetes mellitus on nutritional therapy', label: 'Gestational diabetes mellitus' }
      ], defaultValue: 'Nil significant medical comorbidities; non-diabetic, normotensive' },
      { key: 'cirseClassification', label: 'CIRSE / SIR Classification', type: 'select', group: 'Classification & Staging', options: [
        { value: 'CIRSE Category 2: Emergency Hemostatic Embolization for Life-Threatening PPH', label: 'CIRSE Category 2: Emergency PPH Hemostasis' },
        { value: 'CIRSE Category 1: Elective Embolization for Symptomatic Uterine Leiomyomata (UFE)', label: 'CIRSE Category 1: Elective UFE' }
      ], defaultValue: 'CIRSE Category 2: Emergency Hemostatic Embolization for Life-Threatening PPH' },
      { key: 'figoStaging', label: 'FIGO Fibroid Staging (if UFE)', type: 'select', group: 'Classification & Staging', options: [
        { value: 'FIGO Type 2-5 (Transmural submucous-intramural dominant fibroid)', label: 'FIGO Type 2-5 (Transmural)' },
        { value: 'FIGO Type 3, 4, 5 (Multiple intramural leiomyomata with uterine enlargement)', label: 'FIGO Type 3, 4, 5 (Multiple intramural)' },
        { value: 'FIGO Type 0 / 1 (Submucous pedunculated/sessile - surgical hysteroscopy considered)', label: 'FIGO Type 0/1 (Submucous)' },
        { value: 'Diffuse myometrial junctional zone thickening consistent with Adenomyosis', label: 'Diffuse Adenomyosis' },
        { value: 'Not applicable (PPH indication)', label: 'Not applicable (PPH)' }
      ], defaultValue: 'Not applicable (PPH indication)' },
      { key: 'dominantFibroidSize', label: 'Uterine Volume & Dominant Fibroid Size (if UFE)', type: 'select', group: 'Classification & Staging', options: [
        { value: 'Dominant intramural fibroid 6-8 cm; overall uterine volume equivalent to 14-16 weeks gestation', label: 'Dominant 6-8 cm (14-16 weeks equivalent)' },
        { value: 'Multiple fibroids largest 8-10 cm; overall uterine volume equivalent to 18-20 weeks gestation', label: 'Dominant 8-10 cm (18-20 weeks equivalent)' },
        { value: 'Dominant fibroid <5 cm with severe menorrhagia', label: 'Dominant <5 cm' },
        { value: 'Not applicable (PPH indication)', label: 'Not applicable (PPH)' }
      ], defaultValue: 'Not applicable (PPH indication)' },
      { key: 'shockIndex', label: 'Hemodynamic Status / Shock Index', type: 'select', group: 'Classification & Staging', options: [
        { value: 'Shock Index <0.9 (HR 84 bpm, SBP 110 mmHg - Hemodynamically stable post-resuscitation)', label: 'Shock Index <0.9 (Stable post-resuscitation)' },
        { value: 'Shock Index 0.9-1.2 (Compensated hemorrhagic shock; ongoing volume resuscitation in IR suite)', label: 'Shock Index 0.9-1.2 (Compensated shock)' },
        { value: 'Normal baseline hemodynamics (elective outpatient presentation)', label: 'Normal baseline hemodynamics (Elective)' }
      ], defaultValue: 'Shock Index <0.9 (HR 84 bpm, SBP 110 mmHg - Hemodynamically stable post-resuscitation)' },
      { key: 'accessRoute', label: 'Vascular Access Site', type: 'select', group: 'Vascular Access & Hardware', options: [
        { value: 'Right Common Femoral Artery (CFA - Unilateral puncture with Waltman loop cross-over)', label: 'Right CFA (Unilateral with Waltman cross-over)' },
        { value: 'Bilateral Common Femoral Arteries (Bilateral 5F sheaths)', label: 'Bilateral CFAs' },
        { value: 'Left Distal Radial Artery (Transradial access)', label: 'Left Distal Radial Artery (Transradial)' }
      ], defaultValue: 'Right Common Femoral Artery (CFA - Unilateral puncture with Waltman loop cross-over)' },
      { key: 'sheathSize', label: 'Vascular Sheath Size', type: 'select', group: 'Vascular Access & Hardware', options: [
        { value: '5F Cordis/Terumo Introducer Sheath', label: '5F Introducer Sheath' },
        { value: '6F Cordis Introducer Sheath', label: '6F Introducer Sheath' },
        { value: '4F Terumo Introducer Sheath', label: '4F Introducer Sheath' }
      ], defaultValue: '5F Cordis/Terumo Introducer Sheath' },
      { key: 'diagnosticCatheter', label: 'Diagnostic Catheter', type: 'select', group: 'Vascular Access & Hardware', options: [
        { value: '5F Roberts Uterine Catheter (RUC - dedicated uterine curve)', label: '5F Roberts Uterine Catheter (RUC)' },
        { value: '5F Cobra (C2) catheter', label: '5F Cobra (C2)' },
        { value: '5F Simmons 1 (SIM-1) catheter', label: '5F Simmons 1 (SIM-1)' }
      ], defaultValue: '5F Roberts Uterine Catheter (RUC - dedicated uterine curve)' },
      { key: 'microcatheter', label: 'Superselective Microcatheter', type: 'select', group: 'Vascular Access & Hardware', options: [
        { value: '2.7F Progreat (Terumo) microcatheter with 0.014" GT guidewire', label: '2.7F Progreat (Terumo) + 0.014" GT wire' },
        { value: '2.4F Progreat (Terumo) microcatheter with 0.014" GT guidewire', label: '2.4F Progreat (Terumo) + 0.014" wire' },
        { value: '2.8F Renegade Hi-Flo microcatheter with 0.018" Fathom wire', label: '2.8F Renegade Hi-Flo + 0.018" wire' }
      ], defaultValue: '2.7F Progreat (Terumo) microcatheter with 0.014" GT guidewire' },
      { key: 'targetArteries', label: 'Target Culprit Arteries', type: 'select', group: 'Target Anatomy & Non-Target Protection', options: [
        { value: 'Bilateral uterine arteries (ascending and horizontal segments)', label: 'Bilateral uterine arteries' },
        { value: 'Right uterine artery dominant with left uterine artery', label: 'Right uterine artery dominant' },
        { value: 'Left uterine artery dominant with right uterine artery', label: 'Left uterine artery dominant' },
        { value: 'Bilateral uterine arteries with prominent ovarian collateral arcade', label: 'Bilateral uterine + Ovarian collateral' }
      ], defaultValue: 'Bilateral uterine arteries (ascending and horizontal segments)' },
      { key: 'angiographicFindings', label: 'Angiographic Findings', type: 'select', group: 'Target Anatomy & Non-Target Protection', options: [
        { value: 'Hypertrophied, tortuous, corkscrew uterine arteries with diffuse parenchymal hypervascularity and focal areas of contrast extravasation / pseudoaneurysm', label: 'Corkscrew arteries with focal extravasation / pseudoaneurysm' },
        { value: 'Grossly enlarged uterine arteries feeding extensive hypervascular fibroid blush with dense peripheral tumor rim', label: 'Hypervascular fibroid blush with peripheral rim' },
        { value: 'Marked uterine hypervascularity without focal contrast extravasation consistent with generalized uterine atony', label: 'Generalized atonic hypervascular blush' },
        { value: 'High-flow pelvic arteriovenous malformation (AVM) with early draining uterine veins', label: 'Pelvic AVM with early venous drainage' }
      ], defaultValue: 'Hypertrophied, tortuous, corkscrew uterine arteries with diffuse parenchymal hypervascularity and focal areas of contrast extravasation / pseudoaneurysm' },
      { key: 'cervicovaginalProtection', label: 'Cervicovaginal & Ovarian Sparing Protocol', type: 'select', group: 'Target Anatomy & Non-Target Protection', options: [
        { value: 'The microcatheter was advanced coaxially into the horizontal segment of each uterine artery strictly DISTAL to the cervicovaginal branch to prevent non-target ischemic necrosis of the cervix and bladder. Ovarian artery anastomoses were identified and spared to preserve ovarian reserve. Intra-arterial Nitroglycerin (100 µg) was administered to manage and reverse transient catheter-induced arterial vasospasm.', label: 'Microcatheter wedged distal to cervicovaginal branch; ovarian reserve preserved; NTG for spasm' },
        { value: 'Superselective catheterization distal to the descending cervicovaginal branch verified; bladder and vaginal non-target branches safeguarded on multi-angle DSA runs.', label: 'Distal to cervicovaginal branch; non-target bladder/vagina spared' }
      ], defaultValue: 'The microcatheter was advanced coaxially into the horizontal segment of each uterine artery strictly DISTAL to the cervicovaginal branch to prevent non-target ischemic necrosis of the cervix and bladder. Ovarian artery anastomoses were identified and spared to preserve ovarian reserve. Intra-arterial Nitroglycerin (100 µg) was administered to manage and reverse transient catheter-induced arterial vasospasm.' },
      { key: 'embolicAgent', label: 'Embolic Agent & Sizing', type: 'select', group: 'Embolic Agent & Endpoint', options: [
        { value: 'Temporary resorbable Gelfoam slurry / Torpedoes (preserves future fertility, uterine microcirculation, and menstrual function in obstetric PPH)', label: 'Gelfoam slurry / Torpedoes (temporary resorbable for PPH)' },
        { value: 'Calibrated spherical microspheres (Embosphere 500-700 µm) suspended in non-ionic contrast (standard UFE protocol)', label: 'Embosphere microspheres 500-700 µm (UFE)' },
        { value: 'Calibrated spherical microspheres (Embosphere 700-900 µm)', label: 'Embosphere microspheres 700-900 µm' },
        { value: 'PVA particles 500-710 µm (Polyvinyl Alcohol) suspended in contrast', label: 'PVA particles 500-710 µm' },
        { value: 'Gelfoam slurry followed by pushable microcoils for focal pseudoaneurysm / laceration', label: 'Gelfoam slurry + Microcoils (pseudoaneurysm)' }
      ], defaultValue: 'Temporary resorbable Gelfoam slurry / Torpedoes (preserves future fertility, uterine microcirculation, and menstrual function in obstetric PPH)' },
      { key: 'technicalEndpoint', label: 'Technical Success Endpoint', type: 'select', group: 'Embolic Agent & Endpoint', options: [
        { value: 'Immediate complete cessation of active contrast extravasation and complete devascularization of bilateral uterine arterial territories with preserved internal iliac flow', label: 'Immediate cessation of extravasation and devascularization' },
        { value: 'Sluggish 5-beat contrast clearance ("pruned-tree" appearance) in bilateral main uterine arteries with complete devascularization of fibroid beds and preservation of ovarian supply', label: 'Sluggish 5-beat clearance ("pruned tree") with fibroid devascularization' },
        { value: 'Near-stasis of flow achieved bilaterally with complete cessation of early venous shunting', label: 'Near-stasis bilaterally with shunt elimination' }
      ], defaultValue: 'Immediate complete cessation of active contrast extravasation and complete devascularization of bilateral uterine arterial territories with preserved internal iliac flow' },
      { key: 'hemostasisMethod', label: 'Access Site Hemostasis', type: 'select', group: 'Post-Operative Recovery & Hemostasis', options: [
        { value: 'Manual compression for 15-20 minutes following sheath removal, achieving complete hemostasis, followed by sterile compressive pressure dressing', label: 'Manual compression (15-20 min) with pressure dressing' },
        { value: 'Deployment of 6F Angio-Seal vascular closure device with immediate collagen-plug hemostasis', label: 'Angio-Seal 6F vascular closure device' },
        { value: 'TR Band radial compression band applied with patent hemostasis verified by Barbeau test', label: 'TR Band radial compression band' }
      ], defaultValue: 'Manual compression for 15-20 minutes following sheath removal, achieving complete hemostasis, followed by sterile compressive pressure dressing' },
      { key: 'distalPulseStatus', label: 'Distal Pulse Status', type: 'select', group: 'Post-Operative Recovery & Hemostasis', options: [
        { value: 'Right and left dorsalis pedis (DP) and posterior tibial (PT) pulses strong (+++), palpable, symmetric; capillary refill <2 seconds; lower extremities warm', label: 'Bilateral DP and PT pulses strong (+++), warm extremities' },
        { value: 'Left radial pulse strong (+++), patent palmar arch, warm digits', label: 'Left radial pulse strong (+++)' }
      ], defaultValue: 'Right and left dorsalis pedis (DP) and posterior tibial (PT) pulses strong (+++), palpable, symmetric; capillary refill <2 seconds; lower extremities warm' },
      { key: 'recoveryBed', label: 'Recovery Bed & Monitoring Location', type: 'select', group: 'Post-Operative Recovery & Hemostasis', options: [
        { value: 'Gynae-IR High Dependency Unit (HDU) / Cath-Lab Recovery Bed', label: 'Gynae-IR HDU / Cath-Lab Recovery' },
        { value: 'Obstetric Intensive Care Unit (OICU)', label: 'Obstetric Intensive Care Unit (OICU)' }
      ], defaultValue: 'Gynae-IR High Dependency Unit (HDU) / Cath-Lab Recovery Bed' },
      { key: 'monitoringProtocol', label: 'Monitoring Protocol', type: 'select', group: 'Post-Operative Recovery & Hemostasis', options: [
        { value: 'Strict supine bed rest with immobilized right lower extremity for 4-6 hours (or 2 hours if closure device); vitals monitoring (BP, HR, RR, SpO2) q15m x 1h, q30m x 2h, then q1h x 4h; serial pad counts and vaginal lochia tracking; continuous urinary Foley catheter drainage monitoring; uterine fundus palpation every 30 minutes', label: 'Groin rest 4-6h, vitals q15m x 1h, q30m x 2h, serial pad counts and fundal tone tracking' },
        { value: 'Transradial recovery protocol: TR Band gradual pressure release over 2-3 hours; vitals and vaginal bleeding checks', label: 'Radial recovery protocol over 2-3 hours' }
      ], defaultValue: 'Strict supine bed rest with immobilized right lower extremity for 4-6 hours (or 2 hours if closure device); vitals monitoring (BP, HR, RR, SpO2) q15m x 1h, q30m x 2h, then q1h x 4h; serial pad counts and vaginal lochia tracking; continuous urinary Foley catheter drainage monitoring; uterine fundus palpation every 30 minutes' },
      { key: 'immediateComplications', label: 'Immediate Complication Surveillance & Post-UAE Pain Protocol', type: 'select', group: 'Post-Operative Recovery & Hemostasis', options: [
        { value: 'Proactive management of post-embolization ischemic pelvic pain: aggressive multimodal analgesia initiated (IV Paracetamol 1g, Tramadol, antispasmodic Drotaverine, and antiemetic Ondansetron). Groin puncture site clean, soft, dry, with zero hematoma or pseudoaneurysm. Vaginal inspection: bleeding arrested to physiological lochia rubra; zero frank blood pooling or active hemorrhage; uterine fundus firm and well-contracted.', label: 'Post-UAE ischemic pain managed proactively; zero hematoma; vaginal bleeding arrested' },
        { value: 'Mild pelvic cramping controlled with oral antispasmodics and analgesia; zero puncture site complications; physiological lochia.', label: 'Mild pelvic cramping managed; zero complications' }
      ], defaultValue: 'Proactive management of post-embolization ischemic pelvic pain: aggressive multimodal analgesia initiated (IV Paracetamol 1g, Tramadol, antispasmodic Drotaverine, and antiemetic Ondansetron). Groin puncture site clean, soft, dry, with zero hematoma or pseudoaneurysm. Vaginal inspection: bleeding arrested to physiological lochia rubra; zero frank blood pooling or active hemorrhage; uterine fundus firm and well-contracted.' }
    ],
    synthesizeComplaints: (c) => `Patient presented for Uterine Artery Embolization (UAE) indicated for ${c.indication || 'Primary Postpartum Hemorrhage (PPH) - Uterine Atony'}. Clinical presentation: ${c.pphSeverity || c.fibroidSymptoms || 'Severe postpartum hemorrhage refractory to medical therapy'}. Evaluated as an emergency Interventional Radiology hemostatic referral.`,
    synthesizeHistory: (c) => `Patient obstetric/gynecologic context: ${c.parityDetails || 'Primipara'}. History: ${c.obstetricGynHistory || 'Prolonged labor complicated by uterine atony'}. Categorized under ${c.cirseClassification || 'CIRSE Category 2: Emergency Hemostatic Embolization'}. Hemodynamic status on admission: ${c.shockIndex || 'Shock Index <0.9'}. Evaluated jointly by Obstetrics and Interventional Radiology teams for urgent uterus-preserving endovascular embolization.`,
    synthesizeFamilyAndRiskHistory: (c) => `Risk & Exposure Profile: Obstetric context - ${c.parityDetails || 'Primipara'}. Bleeding diathesis / Coagulation history - ${c.bleedingDiathesis || 'Resuscitated; no primary diathesis'}. Comorbidities - ${c.medicalComorbidities || 'Nil'}. Family history - ${c.familyHistory || 'Nil significant family history'}. (Verified clinically; strictly zero simulated lab values).`,
    synthesizeLocalExam: (c) => `Abdominal Examination: Lower abdomen soft; uterine fundus palpated 2 finger-breadths below umbilicus, contracting firmly post-intervention; no guarding or rigidity. Pelvic / Perineal Examination: Sterile perineal pad inspection shows minimal normal lochial staining without active continuous trickle or clots; cervix closed; no vaginal wall lacerations or expanding hematoma. Foley catheter draining clear amber urine. Puncture Site: ${c.accessRoute || 'Right CFA'} - pressure dressing intact, dry, zero hematoma, distal lower limb pulses strong and symmetric.`,
    synthesizeOperativeNote: (c) => `PROCEDURAL OPERATIVE NOTE: UTERINE ARTERY EMBOLIZATION (UAE)
Indication: ${c.indication || 'Primary Postpartum Hemorrhage (PPH) - Uterine Atony'}.
Vascular Access: Under strict aseptic technique and local anesthesia (2% Lignocaine), vascular access was secured via ${c.accessRoute || 'Right Common Femoral Artery (CFA)'} using a ${c.sheathSize || '5F Cordis/Terumo sheath'}.
Diagnostic Catheterization: A ${c.diagnosticCatheter || '5F Roberts Uterine Catheter (RUC)'} was advanced over a 0.035" hydrophilic guidewire to the internal iliac arteries bilaterally (contralateral cross-over and ipsilateral Waltman loop). Angiography demonstrated: ${c.angiographicFindings || 'hypertrophied corkscrew uterine arteries with contrast extravasation'}.
CERVICOVAGINAL & OVARIAN PROTECTION: ${c.cervicovaginalProtection || 'Microcatheter wedged distal to cervicovaginal branch; ovarian reserve preserved; NTG for spasm.'}
SUPERSELECTIVE EMBOLIZATION: A ${c.microcatheter || '2.7F Progreat microcatheter'} was navigated into the horizontal segments of bilateral uterine arteries. Embolization was performed using ${c.embolicAgent || 'Gelfoam slurry / Torpedoes'} under continuous fluoroscopic visualization. Embolic delivery continued until the endpoint was achieved: ${c.technicalEndpoint || 'immediate complete cessation of active contrast extravasation'}.
COMPLETION ANGIOGRAPHY: Bilateral completion pelvic angiograms verified complete devascularization of bleeding uterine beds with complete cessation of contrast extravasation, normal preservation of parent internal iliac branches, and intact ovarian collateral flow. Catheter and sheath removed; hemostasis achieved via ${c.hemostasisMethod || 'manual compression'}.`,
    synthesizePostOpRecoveryNote: (c) => ({
      accessSiteHemostasis: `${c.hemostasisMethod || 'Manual compression for 15-20 minutes'} achieved complete hemostasis. Sterile pressure dressing intact, dry, and clean with zero bleeding or hematoma.`,
      distalPulses: `${c.distalPulseStatus || 'Right and left dorsalis pedis and posterior tibial pulses strong (+++), palpable, symmetric; lower extremities warm.'}`,
      recoveryBedMonitoring: `${c.recoveryBed || 'Gynae-IR HDU / Cath-Lab Recovery'}. Protocol: ${c.monitoringProtocol || 'Bed rest for 4-6 hours, vitals q15m x 1h, q30m x 2h, serial pad counts and fundal tone tracking.'}`,
      immediateComplications: `${c.immediateComplications || 'Proactive post-UAE ischemic pain protocol initiated; zero hematoma; vaginal bleeding arrested with firm uterine fundus.'}`,
      recoveryStatus: 'Conscious, oriented x3, hemodynamically stable. Minimal lochia rubra. Uterine fundus firm. Bed rest orders active.',
      notes: `Superselective UAE for ${c.indication || 'PPH'} completed successfully with complete hemostasis. Non-target cervicovaginal and ovarian preservation verified. Post-op recovery uneventful.`
    }),
    synthesizeDiagnosis: (c) => `${c.indication || 'Primary Postpartum Hemorrhage secondary to Uterine Atony'}, status post Emergency Superselective Bilateral Uterine Artery Embolization (UAE) with ${c.embolicAgent || 'Gelfoam slurry / Torpedoes'}.`,
    defaultMedications: [
      { sNo: 0, genericName: 'Amoxicillin and Potassium Clavulanate', medicine: 'Cap. Amoxicillin and Potassium Clavulanate 625mg [RMSCL DDC #505]', dosePower: '625mg', route: 'ORAL', frequency: 'BD', days: 5, instructions: 'Prophylactic broad-spectrum antibiotic coverage' },
      { sNo: 0, genericName: 'Metronidazole', medicine: 'Tab. Metronidazole 400mg [RMSCL DDC #140]', dosePower: '400mg', route: 'ORAL', frequency: 'TID', days: 5, instructions: 'Take with meals for anaerobic pelvic coverage' },
      { sNo: 0, genericName: 'Diclofenac and Serratiopeptidase', medicine: 'Tab. Diclofenac 50mg + Serratiopeptidase 10mg [RMSCL DDC #622]', dosePower: '1 Tab', route: 'ORAL', frequency: 'BD', days: 5, instructions: 'Take after meals for ischemic myometrial inflammation and post-embolization pain' },
      { sNo: 0, genericName: 'Drotaverine', medicine: 'Tab. Drotaverine 40mg [RMSCL DDC #623]', dosePower: '40mg', route: 'ORAL', frequency: 'TID', days: 3, instructions: 'For acute smooth muscle pelvic cramping and uterine spasms' },
      { sNo: 0, genericName: 'Paracetamol', medicine: 'Tab. Paracetamol 650mg [RMSCL DDC #28]', dosePower: '650mg', route: 'ORAL', frequency: 'TID', days: 5, instructions: 'For fever and mild pelvic discomfort' },
      { sNo: 0, genericName: 'Pantoprazole', medicine: 'Tab. Pantoprazole 40mg [RMSCL DDC #142]', dosePower: '40mg', route: 'ORAL', frequency: 'OD', days: 7, instructions: 'Take 30 minutes before breakfast' },
      { sNo: 0, genericName: 'Ferrous Sulfate and Folic Acid', medicine: 'Tab. Ferrous Sulfate 200mg + Folic Acid [RMSCL DDC #15]', dosePower: '1 Tab', route: 'ORAL', frequency: 'BD', days: 30, instructions: 'Take with meals to replenish hemoglobin stores and treat blood loss anemia' }
    ],
    conditionalMedications: [
      { condition: 'If indicated for PPH', conditionKey: 'indication', conditionValue: 'Primary Postpartum Hemorrhage (PPH) - Uterine Atony', medication: { sNo: 0, genericName: 'Tranexamic Acid', medicine: 'Tab. Tranexamic Acid 500mg [RMSCL DDC #463]', dosePower: '500mg', route: 'ORAL', frequency: 'TID', days: 3, instructions: 'Take after food for microvascular hemostatic consolidation' } }
    ],
    followUpInstructions: [
      'Obstetrics & Gynecology review at 2 weeks for pelvic examination and lochial resolution assessment',
      'Complete Blood Count (CBC) and Serum Ferritin at 2 weeks and 6 weeks to confirm hemoglobin recovery',
      'For Fibroid (UFE) patients: Pelvic Ultrasound at 6 weeks and Contrast-Enhanced Pelvic MRI at 3-6 months to assess fibroid volume reduction and devascularization',
      'Interventional Radiology OPD follow-up at 10-14 days for access site review'
    ],
    redFlagWarnings: [
      'Sudden torrential vaginal bleeding (>2 sanitary pads soaked completely in 1 hour with large clots)',
      'Severe, unmanageable pelvic pain unresponsive to prescribed oral analgesics (unrelieved uterine ischemia warning)',
      'High fever (>101°F) accompanied by foul-smelling, purulent vaginal discharge (endometritis or infected tissue necrosis warning)',
      'Shortness of breath, chest pain, or sudden tachycardia (pulmonary embolism warning)',
      'Pulsatile swelling, expanding lump, or active bleeding at the groin puncture site'
    ],
    expectedAttachments: [
      { modality: 'DSA', description: 'Pre-embolization pelvic aortogram and bilateral internal iliac angiograms showing uterine feeders' },
      { modality: 'DSA', description: 'Superselective microcatheter roadmapping within horizontal uterine artery segments' },
      { modality: 'DSA', description: 'Completion angiograms verifying cessation of contrast extravasation and devascularization' }
    ],
    ddcDrugs: [
      { name: 'Cap. Amoxicillin + Clavulanate 625mg', rmscl: 'RMSCL DDC #505', qty: 10 },
      { name: 'Tab. Metronidazole 400mg', rmscl: 'RMSCL DDC #140', qty: 15 },
      { name: 'Tab. Diclofenac + Serratiopeptidase', rmscl: 'RMSCL DDC #622', qty: 10 },
      { name: 'Tab. Drotaverine 40mg', rmscl: 'RMSCL DDC #623', qty: 10 },
      { name: 'Tab. Paracetamol 650mg', rmscl: 'RMSCL DDC #28', qty: 15 },
      { name: 'Tab. Pantoprazole 40mg', rmscl: 'RMSCL DDC #142', qty: 7 },
      { name: 'Tab. Ferrous Sulfate 200mg', rmscl: 'RMSCL DDC #15', qty: 60 }
    ],
    dischargeAdvice: [
      'Expect mild-to-moderate pelvic cramping (similar to menstrual cramps) and light brownish or serosanguinous vaginal discharge for 7-14 days',
      'Strict pelvic rest: avoid tampons, vaginal douching, and sexual intercourse for 4 weeks post-procedure to prevent ascending infection',
      'Maintain strict perineal hygiene with daily antiseptic washes and frequent pad changes',
      'Avoid strenuous physical exertion, running, or heavy lifting (>5 kg) for 2 weeks',
      'Keep the groin access puncture site clean and dry; pressure dressing may be removed after 48 hours'
    ],
    procedureType: 'Major',
    anaesthesiaDefault: 'Local Anesthesia',
    defaultAccessSite: 'Right Common Femoral Artery (CFA)',
    defaultPostOpPlan: 'Gynae-IR HDU / Cath-Lab Recovery bed rest for 4-6 hours. Groin observation protocol: vitals and puncture site checks q15m x 1h, q30m x 2h, then q1h x 4h. Serial perineal pad count and vaginal bleeding checks. Fundus palpation. Multimodal post-UAE analgesia.'
  },
  {
    procedureKey: 'central_venoplasty',
    procedureFamily: 'Central Venoplasty & Stenting',
    icdPrimary: { code: 'I87.1', description: 'Compression of vein (Central Venous Stenosis)' },
    icdSecondary: [
      { code: 'T82.8', description: 'Vascular complications of central dialysis catheter' },
      { code: 'Z99.2', description: 'Dependence on renal dialysis' }
    ],
    criteriaFields: [
      {
        key: 'veinInvolved',
        label: 'Central Vein Segment',
        type: 'select',
        options: [
          { value: 'Superior Vena Cava (SVC)', label: 'Superior Vena Cava (SVC)' },
          { value: 'Left Brachiocephalic (Innominate) Vein', label: 'Left Brachiocephalic (Innominate) Vein' },
          { value: 'Right Brachiocephalic (Innominate) Vein', label: 'Right Brachiocephalic (Innominate) Vein' },
          { value: 'Subclavian Vein', label: 'Subclavian Vein' },
          { value: 'Axillary-Subclavian Confluence', label: 'Axillary-Subclavian Confluence' }
        ],
        defaultValue: 'Left Brachiocephalic (Innominate) Vein'
      },
      {
        key: 'etiology',
        label: 'Etiology of Central Venous Obstruction',
        type: 'select',
        options: [
          { value: 'Prior Central Hemodialysis Catheter (Permacath) intimal hyperplasia', label: 'Prior Hemodialysis Catheter (Permacath)' },
          { value: 'Malignant extrinsic compression (Bronchogenic Ca / Lymphoma)', label: 'Malignant Compression' },
          { value: 'Thoracic Outlet compression syndrome', label: 'Thoracic Outlet Syndrome' },
          { value: 'Fibrosing mediastinitis / benign cicatricial stenosis', label: 'Fibrosing Mediastinitis' }
        ],
        defaultValue: 'Prior Central Hemodialysis Catheter (Permacath) intimal hyperplasia'
      },
      {
        key: 'procedureModality',
        label: 'Interventional Modality',
        type: 'select',
        options: [
          { value: 'High-Pressure Balloon Angioplasty (PTA) alone', label: 'High-Pressure PTA Alone' },
          { value: 'PTA + Self-Expanding Bare Metal Stent (Nitinol / Wallstent)', label: 'PTA + Bare Metal Stent' },
          { value: 'PTA + Covered Stent-Graft (Viabahn / Fluency)', label: 'PTA + Covered Stent-Graft' }
        ],
        defaultValue: 'High-Pressure Balloon Angioplasty (PTA) alone'
      },
      {
        key: 'balloonSize',
        label: 'Angioplasty Balloon Specification',
        type: 'select',
        options: [
          { value: '10 mm x 40 mm Mustang high-pressure balloon', label: '10 mm x 40 mm Mustang (24 atm)' },
          { value: '12 mm x 40 mm Mustang high-pressure balloon', label: '12 mm x 40 mm Mustang (24 atm)' },
          { value: '14 mm x 40 mm Atlas Gold ultra-high-pressure balloon', label: '14 mm x 40 mm Atlas Gold (26 atm)' },
          { value: '16 mm x 40 mm Atlas Gold ultra-high-pressure balloon', label: '16 mm x 40 mm Atlas Gold (26 atm)' }
        ],
        defaultValue: '12 mm x 40 mm Mustang high-pressure balloon'
      },
      {
        key: 'stentType',
        label: 'Stent Type (if deployed)',
        type: 'select',
        options: [
          { value: 'Dedicated Self-Expanding Nitinol Venous Stent', label: 'Self-Expanding Nitinol Venous Stent' },
          { value: 'Carotid / Vascular Wallstent (Elgiloy)', label: 'Carotid / Vascular Wallstent' },
          { value: 'Covered Stent-Graft (Fluency / Viabahn)', label: 'Covered Stent-Graft (Fluency / Viabahn)' },
          { value: 'None (Angioplasty alone)', label: 'None (Angioplasty Alone)' }
        ],
        defaultValue: 'None (Angioplasty alone)'
      },
      {
        key: 'clinicalPresentation',
        label: 'Clinical Presentation',
        type: 'select',
        options: [
          { value: 'Severe ipsilateral arm & facial edema with dilated chest collaterals', label: 'Severe Arm & Facial Edema + Collaterals' },
          { value: 'Elevated dynamic venous pressures during dialysis (>250 mmHg) with poor circuit clearance', label: 'Elevated Dialysis Venous Pressures (>250 mmHg)' },
          { value: 'Full Superior Vena Cava (SVC) Syndrome with facial plethora and venous engorgement', label: 'Full SVC Syndrome' }
        ],
        defaultValue: 'Severe ipsilateral arm & facial edema with dilated chest collaterals'
      },
      {
        key: 'residualStenosis',
        label: 'Technical Endpoint (Residual Stenosis)',
        type: 'select',
        options: [
          { value: '< 20% residual stenosis with rapid antegrade contrast clearance', label: '< 20% Residual (Rapid Clearance)' },
          { value: '< 30% residual stenosis with collateral decompression', label: '< 30% Residual (Collateral Decompression)' }
        ],
        defaultValue: '< 20% residual stenosis with rapid antegrade contrast clearance'
      }
    ],
    synthesizeComplaints: (c) => `Patient presented with ${c.clinicalPresentation} secondary to severe stenosis/occlusion of the ${c.veinInvolved}. Etiology identified as ${c.etiology}.`,
    synthesizeHistory: (c) => `Documented central venous obstruction involving the ${c.veinInvolved} secondary to ${c.etiology}. History notable for central venous access or mediastinal compression without artificial blood test values.`,
    synthesizeFamilyAndRiskHistory: (c) => `Risk factors: history of repeated central venous catheterizations (temporary and tunneled permacaths in internal jugular / subclavian veins), hemodialysis access outflow acceleration, or mediastinal nodal pathology. Strictly verified clinical records.`,
    synthesizeLocalExam: (c) => `Prominent venous collateral network visible over anterior chest wall and shoulder; marked unilateral or bilateral upper limb and facial edema. Access site clean, dry, zero hematoma.`,
    synthesizeOperativeNote: (c) => `Under strict aseptic technique and local anesthesia with conscious sedation. Access: Common femoral vein / ipsilateral arm access achieved using a 7F/8F vascular introducer sheath. Diagnostic central venography demonstrated severe, flow-limiting stenosis/occlusion of ${c.veinInvolved} with robust retrograde filling of thoracic and neck collateral veins. Sharp recanalization performed using an 0.035" hydrophilic Stiff Glidewire supported by a 5F Kumpe / Glidecath catheter across the lesion into the right atrium. Serial balloon venoplasty performed using a ${c.balloonSize} inflated to rated burst pressure (14-24 atm) with complete waist effacement. ${c.procedureModality.includes('Stent') || c.procedureModality.includes('Graft') ? `Due to elastic recoil / persistent flow-limiting gradient, deployment of ${c.stentType} performed across ${c.veinInvolved} with post-dilation balloon molding.` : ''} Completion venogram confirmed ${c.residualStenosis}, prompt antegrade flow into the right atrium, and immediate non-visualization/decompression of collateral vessels. Sheath removed; manual compression achieved complete access site hemostasis.`,
    synthesizePostOpRecoveryNote: (c) => ({
      accessSiteHemostasis: 'Femoral / arm access site hemostasis achieved with manual compression for 15-20 minutes. Compressive dressing intact; clean, dry, zero hematoma, zero bruit.',
      distalPulses: 'Distal peripheral pulses strong (+++) bilaterally equal',
      recoveryBedMonitoring: 'Cath-Lab Holding / Ward. Vitals q15m x 1h, q30m x 2h, q1h thereafter. Monitor facial and arm swelling for acute resolution. Telemetry active.',
      immediateComplications: 'Nil documented - Zero central vein rupture, zero hemothorax, zero acute stent thrombosis, zero groin hematoma. Brisk antegrade central venous flow confirmed.',
      recoveryStatus: 'Conscious, oriented, reports immediate easing of facial fullness and upper limb tension. Bed rest for 4 hours with straight leg/arm.',
      notes: 'Central venoplasty with or without stenting completed successfully. Pre- and post-plasty venograms confirmed decompression of chest collaterals. Antiplatelet therapy initiated.',
      telemetryVitals: 'BP: 124/80 mmHg, HR: 76 bpm regular, SpO2: 99% on room air, RR: 16/min',
      sheathRemovalTime: 'Immediate post-procedure in holding area after reversal / clotting check',
      sheathStatus: 'Removed',
      recoveryBed: 'Cath-Lab Holding Rec-02'
    }),
    synthesizeDiagnosis: (c) => `Central venous stenosis of ${c.veinInvolved} (${c.etiology}), successfully treated by ${c.procedureModality} (${c.residualStenosis}).`,
    defaultMedications: [
      { sNo: 0, genericName: 'Aspirin', medicine: 'Tab. Aspirin 75mg [RMSCL DDC #22]', dosePower: '75mg', route: 'ORAL', frequency: 'OD', days: 180, instructions: 'Post-intervention antiplatelet' },
      { sNo: 0, genericName: 'Paracetamol', medicine: 'Tab. Paracetamol 650mg [RMSCL DDC #28]', dosePower: '650mg', route: 'ORAL', frequency: 'SOS', days: 5, instructions: 'For pain/fever' },
      { sNo: 0, genericName: 'Pantoprazole', medicine: 'Tab. Pantoprazole 40mg [RMSCL DDC #142]', dosePower: '40mg', route: 'ORAL', frequency: 'OD', days: 30, instructions: 'Before meals' }
    ],
    conditionalMedications: [
      { condition: 'If Stented', conditionKey: 'procedureModality', conditionValue: 'PTA + Self-Expanding Bare Metal Stent (Nitinol / Wallstent)', medication: { sNo: 0, genericName: 'Clopidogrel', medicine: 'Tab. Clopidogrel 75mg [RMSCL DDC #25]', dosePower: '75mg', route: 'ORAL', frequency: 'OD', days: 90, instructions: 'Post-stenting dual antiplatelet' } },
      { condition: 'If Stent-Graft Deployed', conditionKey: 'procedureModality', conditionValue: 'PTA + Covered Stent-Graft (Viabahn / Fluency)', medication: { sNo: 0, genericName: 'Clopidogrel', medicine: 'Tab. Clopidogrel 75mg [RMSCL DDC #25]', dosePower: '75mg', route: 'ORAL', frequency: 'OD', days: 90, instructions: 'Post-stenting dual antiplatelet' } }
    ],
    followUpInstructions: [
      'Measurement of arm and facial circumference to monitor resolution of edema',
      'Duplex ultrasound surveillance of central veins at 1 month and 3 months',
      'Nephrology / Hemodialysis review: track dynamic venous pressures and Kt/V clearance during subsequent dialysis sessions',
      'Strict avoidance of future subclavian vein catheterizations in the affected limb'
    ],
    redFlagWarnings: [
      'Sudden worsening of facial, neck, or upper limb swelling (acute re-stenosis / stent thrombosis)',
      'Acute onset of chest pain, shortness of breath, or hemoptysis (central vein perforation / pulmonary embolism)',
      'Access site swelling, active bleeding, or pulsatile hematoma in groin/arm',
      'Fever with rigors (stent / bloodstream infection)'
    ],
    expectedAttachments: [{ modality: 'DSA', description: 'Central venograms pre and post balloon angioplasty / stenting' }],
    ddcDrugs: [],
    dischargeAdvice: [
      'Keep vascular access site clean and dry for 24-48 hours',
      'Notify hemodialysis staff of the central venoplasty procedure',
      'Report any breathing difficulties, chest tightness, or sudden swelling recurrence immediately'
    ],
    procedureType: 'Major',
    anaesthesiaDefault: 'Local Anesthesia',
    defaultAccessSite: 'Common Femoral Vein',
    defaultPostOpPlan: 'Observe for 4-6 hours post-hemostasis, monitor limb edema resolution'
  },
  {
    procedureKey: 'dialysis_fistuloplasty',
    procedureFamily: 'Dialysis AV Fistuloplasty (Access Salvage)',
    icdPrimary: { code: 'T82.5', description: 'Mechanical complication of other cardiac and vascular devices (Fistula Stenosis)' },
    icdSecondary: [
      { code: 'Z99.2', description: 'Dependence on renal dialysis' },
      { code: 'N18.6', description: 'End-stage renal disease (ESRD)' }
    ],
    criteriaFields: [
      {
        key: 'fistulaType',
        label: 'Fistula Anatomy',
        type: 'select',
        options: [
          { value: 'Radiocephalic AV Fistula (Brescia-Cimino)', label: 'Radiocephalic AVF (Brescia-Cimino)' },
          { value: 'Brachiocephalic AV Fistula', label: 'Brachiocephalic AVF' },
          { value: 'Brachiobasilic Transposed AV Fistula', label: 'Brachiobasilic Transposed AVF' },
          { value: 'Prosthetic AV Graft (PTFE Loop)', label: 'Prosthetic AV Graft (PTFE)' }
        ],
        defaultValue: 'Radiocephalic AV Fistula (Brescia-Cimino)'
      },
      {
        key: 'accessSite',
        label: 'Puncture Site & Approach',
        type: 'select',
        options: [
          { value: 'Direct fistula outflow puncture (antegrade toward central veins)', label: 'Direct Fistula Outflow (Antegrade)' },
          { value: 'Direct fistula outflow puncture (retrograde toward anastomosis)', label: 'Direct Fistula Outflow (Retrograde)' },
          { value: 'Brachial artery puncture under US guidance', label: 'Brachial Artery Access' },
          { value: 'Radial artery puncture under US guidance', label: 'Radial Artery Access' }
        ],
        defaultValue: 'Direct fistula outflow puncture (antegrade toward central veins)'
      },
      {
        key: 'stenosisLocation',
        label: 'Stenosis Location',
        type: 'select',
        options: [
          { value: 'Juxta-anastomotic outflow vein (<2cm from anastomosis)', label: 'Juxta-Anastomotic Outflow Vein' },
          { value: 'Mid-forearm / Mid-arm cannulation zone stenosis', label: 'Cannulation Zone Stenosis' },
          { value: 'Cephalic arch stenosis (junction with axillary vein)', label: 'Cephalic Arch Stenosis' },
          { value: 'Arterial anastomotic / inflow stricture', label: 'Arterial Anastomotic / Inflow' }
        ],
        defaultValue: 'Juxta-anastomotic outflow vein (<2cm from anastomosis)'
      },
      {
        key: 'balloonSpecs',
        label: 'Angioplasty Balloon Type',
        type: 'select',
        options: [
          { value: 'Conquest Ultra-High Pressure Balloon (RBP 30 atm)', label: 'Conquest Ultra-High Pressure (30 atm)' },
          { value: 'Mustang High-Pressure Balloon (RBP 24 atm)', label: 'Mustang High-Pressure (24 atm)' },
          { value: 'Dorado Non-Compliant Balloon', label: 'Dorado Non-Compliant' },
          { value: 'Cutting / Scoring Balloon', label: 'Cutting / Scoring Balloon' }
        ],
        defaultValue: 'Conquest Ultra-High Pressure Balloon (RBP 30 atm)'
      },
      {
        key: 'balloonDiameter',
        label: 'Balloon Diameter',
        type: 'select',
        options: [
          { value: '5 mm x 40 mm', label: '5 mm x 40 mm' },
          { value: '6 mm x 40 mm', label: '6 mm x 40 mm' },
          { value: '7 mm x 40 mm', label: '7 mm x 40 mm' },
          { value: '8 mm x 40 mm', label: '8 mm x 40 mm' }
        ],
        defaultValue: '6 mm x 40 mm'
      },
      { key: 'inflationPressure', label: 'Peak Inflation Pressure (atm)', type: 'number', defaultValue: 22 },
      {
        key: 'thrillRestoration',
        label: 'Thrill & Hemodynamic Outcome',
        type: 'select',
        options: [
          { value: 'Vigorous continuous machinery thrill and loud systolic-diastolic bruit restored', label: 'Vigorous Continuous Machinery Thrill Restored' },
          { value: 'Thrill restored with residual mild pulsatility', label: 'Thrill Restored (Residual Pulsatility)' }
        ],
        defaultValue: 'Vigorous continuous machinery thrill and loud systolic-diastolic bruit restored'
      },
      {
        key: 'residualStenosis',
        label: 'Residual Stenosis',
        type: 'select',
        options: [
          { value: '< 10% (Optimal anatomical and hemodynamic result)', label: '< 10% (Optimal Result)' },
          { value: '< 30% (Standard CIRSE/SIR procedural success threshold)', label: '< 30% (CIRSE/SIR Success Threshold)' }
        ],
        defaultValue: '< 10% (Optimal anatomical and hemodynamic result)'
      },
      {
        key: 'hemostasisMethod',
        label: 'Access Site Hemostasis Technique',
        type: 'select',
        options: [
          { value: 'Manual gentle finger compression preserving continuous thrill', label: 'Manual Gentle Finger Compression (Thrill Preserved)' },
          { value: 'Figure-of-8 purse-string temporary hemostatic suture', label: 'Figure-of-8 Purse-String Suture' }
        ],
        defaultValue: 'Manual gentle finger compression preserving continuous thrill'
      }
    ],
    synthesizeComplaints: (c) => `Patient presented with failing ${c.fistulaType} hemodialysis access manifested by elevated dynamic venous pressures (>200-250 mmHg), decreased blood flow rate (Qb < 200 mL/min), prolonged bleeding post-cannulation, and diminished palpable thrill. Target stenosis: ${c.stenosisLocation}.`,
    synthesizeHistory: (c) => `End-stage renal disease (ESRD) on maintenance hemodialysis. Evaluated for vascular access dysfunction. Strictly verified clinical history without artificial lab values.`,
    synthesizeFamilyAndRiskHistory: (c) => `Etiology of ESRD: diabetic nephropathy, hypertensive nephrosclerosis, or chronic glomerulonephritis; history of repeated needle cannulations and prior central catheters. Verified clinical records.`,
    synthesizeLocalExam: (c) => `Inspection: Surgical scar of ${c.fistulaType} noted; palpable focal stenosis along ${c.stenosisLocation}. Palpation: Water-hammer / high-pitch pulsatility over inflow, diminished continuous thrill prior to intervention. Radial pulse intact; zero trophic changes in distal digits.`,
    synthesizeOperativeNote: (c) => `Under strict aseptic precautions and local infiltration with 1% lignocaine. Access: ${c.accessSite} performed under real-time ultrasound guidance using 21G micropuncture needle and 0.018" nitinol wire, upgraded to a 6F short vascular sheath. Initial diagnostic fistulogram demonstrated severe (>70%) focal fibrous stenosis at ${c.stenosisLocation} with collateral runoff. An 0.035" hydrophilic Stiff Glidewire supported by 4F Kumpe catheter navigated across the tight stenosis into the central venous system. Exchanged for 0.035" extra-support wire. Balloon angioplasty performed using ${c.balloonSpecs} (${c.balloonDiameter}) inflated to ${c.inflationPressure} atm for 60-120 seconds x 3 cycles until complete waist effacement achieved under fluoroscopy. Post-angioplasty completion fistulogram demonstrated ${c.residualStenosis}, rapid antegrade contrast clearance, and disappearance of collateral flow. Sheath removed; ${c.hemostasisMethod} achieved complete hemostasis while palpating continuous machinery thrill throughout. Immediate clinical endpoint: ${c.thrillRestoration}.`,
    synthesizePostOpRecoveryNote: (c) => ({
      accessSiteHemostasis: `Puncture site hemostasis achieved via ${c.hemostasisMethod}. Light non-constricting dressing applied. Site clean, dry, zero hematoma, zero active oozing. Vigorous continuous machinery thrill palpable throughout compression.`,
      distalPulses: 'Ipsilateral radial pulse strong (+++); zero signs of dialysis-associated steal syndrome (DASS). Digits warm, brisk capillary refill <2s.',
      recoveryBedMonitoring: 'Daycare IR Telemetry. Vitals q15m x 1h, q30m x 2h. STRICT PROTOCOL: NEVER apply blood pressure cuff, tourniquet, or IV cannulation on the fistula limb.',
      immediateComplications: 'Nil documented - Zero fistula rupture, zero acute thrombosis, zero expanding pseudoaneurysm, zero hand ischemia/numbness. Residual stenosis <10-30%.',
      recoveryStatus: `Conscious, oriented, ambulatory. Continuous palpable thrill and audible bruit confirmed over entire fistula tract. Hand warm, pink, brisk capillary refill <2s. ${c.thrillRestoration}.`,
      notes: 'High-pressure balloon fistuloplasty successfully effaced stricture waist. Machinery thrill fully restored. Hemodialysis permitted per schedule avoiding direct puncture site for 24h.',
      telemetryVitals: 'BP: 130/82 mmHg (measured on non-fistula arm), HR: 72 bpm regular, SpO2: 99% on room air, RR: 16/min',
      sheathRemovalTime: 'Immediate post-procedure in IR suite upon completion of angioplasty',
      sheathStatus: 'Removed',
      recoveryBed: 'Dialysis Access Daycare Unit Bay 01'
    }),
    synthesizeDiagnosis: (c) => `Dysfunctional ${c.fistulaType} due to ${c.stenosisLocation} stenosis, successfully salvaged by percutaneous high-pressure transluminal fistuloplasty (${c.residualStenosis}).`,
    defaultMedications: [
      { sNo: 0, genericName: 'Aspirin', medicine: 'Tab. Aspirin 75mg [RMSCL DDC #22]', dosePower: '75mg', route: 'ORAL', frequency: 'OD', days: 30, instructions: 'Antiplatelet access maintenance' },
      { sNo: 0, genericName: 'Paracetamol', medicine: 'Tab. Paracetamol 650mg [RMSCL DDC #28]', dosePower: '650mg', route: 'ORAL', frequency: 'SOS', days: 3, instructions: 'For mild local puncture tenderness' },
      { sNo: 0, genericName: 'Pantoprazole', medicine: 'Tab. Pantoprazole 40mg [RMSCL DDC #142]', dosePower: '40mg', route: 'ORAL', frequency: 'OD', days: 14, instructions: 'Before meals' }
    ],
    conditionalMedications: [],
    followUpInstructions: [
      'Self-monitoring: Palpate fistula thrill 3 times daily (morning, noon, night)',
      'Hemodialysis can proceed as scheduled; avoid cannulating the exact IR puncture site for 24-48 hours',
      'STRICT LIMB PROTECTION: NEVER allow blood pressure measurements, intravenous lines, or blood draws on the fistula arm',
      'Avoid tight clothing, watches, bracelets, or sleeping on the fistula arm',
      'Squeeze a soft rubber stress ball for 10-15 minutes 3 times daily to promote flow',
      'Access surveillance: Duplex ultrasound at 1 month; monitor dynamic venous pressure during dialysis sessions'
    ],
    redFlagWarnings: [
      'Sudden loss of vibration or thrill in the fistula (acute thrombosis; present to IR within 12-24 hours for emergency salvage)',
      'Active pulsatile bleeding or rapidly enlarging swelling at the puncture site',
      'Cold, pale, painful, or numb hand/fingers (dialysis-associated steal syndrome)',
      'Rapidly developing arm or facial swelling'
    ],
    expectedAttachments: [{ modality: 'DSA', description: 'Fistulograms pre and post high-pressure balloon dilatation' }],
    ddcDrugs: [],
    dischargeAdvice: [
      'Check thrill daily by placing fingertips lightly over the fistula vein',
      'Keep puncture dressing clean and dry; remove pressure bandage after 4-6 hours',
      'Protect access arm from trauma, compression, or constriction at all times'
    ],
    procedureType: 'Minor',
    anaesthesiaDefault: 'Local Anesthesia',
    defaultAccessSite: 'Direct Fistula Outflow Vein',
    defaultPostOpPlan: 'Monitor thrill for 1 hour post-hemostasis, discharge with arm care instructions'
  },
  {
    procedureKey: 'varicocele_embo',
    procedureFamily: 'Varicocele Transvenous Embolization',
    icdPrimary: { code: 'I86.1', description: 'Scrotal varices / Varicocele of spermatic cord' },
    icdSecondary: [{ code: 'N46.9', description: 'Male infertility, unspecified' }],
    criteriaFields: VARICOCELE_CRITERIA_FIELDS,
    synthesizeComplaints: (c) => synthesizeVaricoceleComplaints(mapCriteriaToVaricoceleModel(c)),
    synthesizeHistory: (c) => synthesizeVaricoceleHistory(mapCriteriaToVaricoceleModel(c)),
    synthesizeLocalExam: (c) => synthesizeVaricoceleLocalExam(mapCriteriaToVaricoceleModel(c)),
    synthesizeOperativeNote: (c) => synthesizeVaricoceleOperativeNote(mapCriteriaToVaricoceleModel(c)),
    synthesizePostOpRecoveryNote: (c) => {
      const p = synthesizeVaricocelePostOpNote(mapCriteriaToVaricoceleModel(c));
      return {
        accessSiteHemostasis: p.accessSiteHemostasis,
        distalPulses: p.distalPulses || 'Strong (+++) bilaterally equal',
        recoveryBedMonitoring: `${p.recoveryBed}. Protocol: Bed rest for 2 hours, monitor for scrotal swelling.`,
        immediateComplications: p.immediateComplications || 'Nil',
        recoveryStatus: p.recoveryStatus,
        notes: p.notes,
        painVasScore: p.painVasScore,
      };
    },
    synthesizeDiagnosis: (c) => synthesizeVaricoceleDiagnosis(mapCriteriaToVaricoceleModel(c)),
    defaultMedications: synthesizeVaricoceleMedications(),
    conditionalMedications: [],
    followUpInstructions: [
      'Scrotal support (langot / athletic supporter) continuously for 10-14 days',
      'Follow up in IR OPD Room 48 / Old Gastro Ward in 2 weeks for groin puncture site check',
      'Repeat scrotal color duplex Doppler scan at 3 months for recurrence check',
      'Semen analysis at 3-6 months if subfertility was the primary indication',
      'Andrology / Urology clinic follow-up',
    ],
    redFlagWarnings: [
      'Sudden rapid scrotal enlargement or severe testicular pain (suspected acute pampiniform or testicular infarction)',
      'High grade fever (> 100.4°F) with scrotal redness or rigors',
      'Active bleeding or expanding painful lump at the right groin puncture site',
      'Difficulty in voiding or severe lower abdominal flank pain',
    ],
    expectedAttachments: [{ modality: 'DSA', description: 'Diagnostic left renal and gonadal venograms pre and post sandwich embolization' }],
    ddcDrugs: [],
    dischargeAdvice: synthesizeVaricoceleDischargeAdvice(),
    procedureType: 'Minor',
    anaesthesiaDefault: 'Local Anesthesia',
    defaultAccessSite: 'Right CFV (Common Femoral Vein)',
    defaultPostOpPlan: 'PACU monitoring for 2-4 hours, scrotal support verification, same-day discharge'
  },
  {
    procedureKey: 'budd_chiari_dips',
    procedureFamily: 'Budd-Chiari Syndrome (DIPS / TIPS)',
    icdPrimary: { code: 'I82.0', description: 'Budd-Chiari syndrome' },
    icdSecondary: [
      { code: 'K76.6', description: 'Portal hypertension' },
      { code: 'R18.8', description: 'Refractory ascites' },
      { code: 'I87.1', description: 'Compression of vein (Retrohepatic IVC narrowing)' }
    ],
    criteriaFields: [
      {
        key: 'pathology',
        label: 'Hepatic Outflow Pathology',
        type: 'select',
        options: [
          { value: 'Complete Hepatic Vein Occlusion (Thrombosis)', label: 'Complete Hepatic Vein Occlusion' },
          { value: 'Suprahepatic IVC Web / Membranous Obstruction', label: 'Suprahepatic IVC Web / Membrane' },
          { value: 'Combined Hepatic Vein and Retrohepatic IVC Occlusion', label: 'Combined HV and IVC Occlusion' }
        ],
        defaultValue: 'Complete Hepatic Vein Occlusion (Thrombosis)'
      },
      {
        key: 'decompression',
        label: 'Decompression Strategy',
        type: 'select',
        options: [
          { value: 'Direct Intrahepatic Portosystemic Shunt (DIPS - Transcaval Caudate Puncture)', label: 'DIPS (Transcaval Caudate Puncture)' },
          { value: 'Transjugular Intrahepatic Portosystemic Shunt (TIPS via Accessory Hepatic Vein)', label: 'TIPS (via Accessory HV)' },
          { value: 'IVC High-Pressure Balloon Venoplasty & Stenting', label: 'IVC Venoplasty & Stenting' }
        ],
        defaultValue: 'Direct Intrahepatic Portosystemic Shunt (DIPS - Transcaval Caudate Puncture)'
      },
      {
        key: 'rotterdamScore',
        label: 'Rotterdam Prognostic Score',
        type: 'select',
        options: [
          { value: 'Rotterdam Class I (Score < 0.81, Low Risk / Good Prognosis)', label: 'Rotterdam Class I (<0.81 - Low Risk)' },
          { value: 'Rotterdam Class II (Score 0.81 - 1.39, Intermediate Risk)', label: 'Rotterdam Class II (0.81-1.39 - Intermediate)' },
          { value: 'Rotterdam Class III (Score > 1.39, High Risk / Guarded)', label: 'Rotterdam Class III (>1.39 - High Risk)' }
        ],
        defaultValue: 'Rotterdam Class I (Score < 0.81, Low Risk / Good Prognosis)'
      },
      {
        key: 'clichyScore',
        label: 'Clichy Prognostic Score',
        type: 'select',
        options: [
          { value: 'Clichy Score < 4.5 (Favorable response)', label: 'Clichy Score < 4.5 (Favorable)' },
          { value: 'Clichy Score 4.5 - 5.4 (Intermediate response)', label: 'Clichy Score 4.5 - 5.4 (Intermediate)' },
          { value: 'Clichy Score > 5.4 (High risk / guarded)', label: 'Clichy Score > 5.4 (Guarded)' }
        ],
        defaultValue: 'Clichy Score < 4.5 (Favorable response)'
      },
      {
        key: 'ascitesGrade',
        label: 'Ascites Severity',
        type: 'select',
        options: [
          { value: 'Tense Refractory Ascites', label: 'Tense Refractory Ascites' },
          { value: 'Moderate Ascites', label: 'Moderate Ascites' },
          { value: 'Mild Ascites', label: 'Mild Ascites' }
        ],
        defaultValue: 'Tense Refractory Ascites'
      },
      { key: 'caudateHypertrophy', label: 'Marked Caudate Lobe Hypertrophy Present', type: 'checkbox', defaultValue: true },
      {
        key: 'stentType',
        label: 'Shunt Endoprosthesis Type',
        type: 'select',
        options: [
          { value: 'Gore Viatorr 10mm x (70+20)mm Covered Stent-Graft', label: 'Gore Viatorr 10mm x (70+20)mm' },
          { value: 'Gore Viatorr 10mm x (80+20)mm Covered Stent-Graft', label: 'Gore Viatorr 10mm x (80+20)mm' },
          { value: 'Bare metal Wallstent 14mm x 60mm (IVC Venoplasty)', label: 'Bare Metal Wallstent 14mm x 60mm' }
        ],
        defaultValue: 'Gore Viatorr 10mm x (70+20)mm Covered Stent-Graft'
      },
      { key: 'preGradient', label: 'Pre-op Portosystemic Gradient (mmHg)', type: 'number', defaultValue: 26 },
      { key: 'postGradient', label: 'Post-op Portosystemic Gradient (mmHg)', type: 'number', defaultValue: 8 },
      {
        key: 'anticoagulation',
        label: 'Anticoagulation Regimen',
        type: 'select',
        options: [
          { value: 'Enoxaparin 1mg/kg BD bridging to Apixaban 5mg BD', label: 'Enoxaparin bridging to Apixaban' },
          { value: 'Unfractionated Heparin bridging to Warfarin (target INR 2.0-3.0)', label: 'Heparin bridging to Warfarin' }
        ],
        defaultValue: 'Enoxaparin 1mg/kg BD bridging to Apixaban 5mg BD'
      }
    ],
    synthesizeComplaints: (c) => `Patient presented with Budd-Chiari syndrome (${c.pathology}) complicated by ${c.ascitesGrade}, marked hepatomegaly, progressive abdominal distension, and signs of secondary portal hypertension. Prognostic stratification: ${c.rotterdamScore}, ${c.clichyScore}.`,
    synthesizeHistory: (c) => `Confirmed hepatic venous outflow obstruction consistent with Budd-Chiari Syndrome. ${c.caudateHypertrophy ? 'Compensatory caudate lobe hypertrophy confirmed on cross-sectional imaging with slit-like extrinsic compression of retrohepatic IVC.' : ''} Evaluated for underlying prothrombotic mutations and myeloproliferative neoplasms without artificial blood test values.`,
    synthesizeFamilyAndRiskHistory: (c) => `Risk factors: screen for thrombophilic diatheses (JAK2 V617F, Factor V Leiden, Prothrombin gene mutation, Antiphospholipid Syndrome, PNH, oral contraceptive use). Strictly verified clinical records.`,
    synthesizeLocalExam: (c) => `Marked abdominal distension with positive fluid thrill and shifting dullness; tender hepatomegaly with palpable hypertrophied caudate lobe; prominent thoracoabdominal superficial venous collaterals with cephalad flow. Right neck access site clean, dry, zero hematoma.`,
    synthesizeOperativeNote: (c) => `Under strict aseptic technique, conscious sedation, and local anesthesia. Access: Ultrasound-guided Right Internal Jugular Vein (RIJV) puncture; 10F/12F Cook RUPS-100 guiding sheath advanced into the retrohepatic inferior vena cava. Hepatic venogram confirmed non-visualization of standard hepatic veins with extensive spiderweb collateral arcade. Baseline pre-shunt portosystemic gradient measured at ${c.preGradient} mmHg. ${c.decompression.includes('DIPS') ? `Direct Intrahepatic Portosystemic Shunt (DIPS) executed: Under combined fluoroscopic and real-time transabdominal ultrasound guidance, a 16G Colapinto needle was advanced through the anterior wall of the retrohepatic IVC, traversing the hypertrophied caudate lobe parenchyma into the portal vein. Confirmed portal entry with brisk blood aspiration and direct portography demonstrating intrahepatic portal branching. An 0.035" Amplatz Super Stiff wire was parked into the mesenteric circulation. The caudate parenchymal tract was dilated using an 8x40mm high-pressure balloon. Deployed ${c.stentType} spanning the portal vein across the caudate tract to the IVC, followed by balloon post-dilation.` : c.decompression.includes('TIPS') ? `Selective catheterization of an accessory inferior hepatic vein achieved; transhepatic needle pass into the portal vein performed; deployed ${c.stentType} with balloon molding.` : `Ultra-high-pressure balloon dilatation of IVC web performed using 16-20mm balloon, followed by deployment of ${c.stentType}.`} Final post-decompression gradient measured at ${c.postGradient} mmHg (target <= 12 mmHg achieved). Completion portogram and venogram demonstrated unimpeded hepatofugal flow through the endoprosthesis into the right atrium with immediate decompression of congested intrahepatic collaterals.`,
    synthesizePostOpRecoveryNote: (c) => ({
      accessSiteHemostasis: 'RIJV access site hemostasis achieved with manual compression for 15 minutes. Compressive dressing intact over right neck; clean, dry, zero subcutaneous neck hematoma, zero airway compromise. Direct transcaval caudate parenchymal tract fully sealed by PTFE-covered Viatorr stent-graft.',
      distalPulses: 'Bilateral peripheral pulses palpable and symmetric (+++)',
      recoveryBedMonitoring: 'Liver ICU / LICU continuous telemetry: Vitals q15m x 2h, q30m x 2h, q1h thereafter. Monitor MAP >65 mmHg and central venous pressure. Telemetry active.',
      immediateComplications: 'Nil documented - Zero hemoperitoneum, zero caval laceration, zero acute encephalopathy, zero stent thrombosis. Post-shunt PSG verified target <= 12 mmHg.',
      recoveryStatus: 'Conscious, oriented to time, place, and person. West Haven Encephalopathy Grade 0. Low sodium diet (<2g/day) active. Strict flat bed rest for 6 hours.',
      notes: 'DIPS / TIPS procedure successfully decompressed portal system. Shunt duplex Doppler ultrasound scheduled at 24 hours. Full anticoagulation bridging initiated.',
      telemetryVitals: 'BP: 122/76 mmHg, HR: 74 bpm regular, SpO2: 99% on room air, RR: 16/min',
      sheathRemovalTime: 'Immediate post-procedure in IR suite following hemostasis verification',
      sheathStatus: 'Removed',
      recoveryBed: 'Liver ICU / LICU-04'
    }),
    synthesizeDiagnosis: (c) => `Budd-Chiari syndrome (${c.pathology}), successfully decompressed via ${c.decompression} with gradient reduction from ${c.preGradient} to ${c.postGradient} mmHg.`,
    defaultMedications: [
      { sNo: 0, genericName: 'Enoxaparin', medicine: 'Inj. Enoxaparin Sodium 60mg / 0.6ml [RMSCL DDC #821]', dosePower: '1mg/kg', route: 'SUBCUTANEOUS', frequency: 'BD', days: 5, instructions: 'Bridging anticoagulation' },
      { sNo: 0, genericName: 'Apixaban', medicine: 'Tab. Apixaban 5mg [RMSCL DDC #820]', dosePower: '5mg', route: 'ORAL', frequency: 'BD', days: 30, instructions: 'Long-term oral anticoagulation' },
      { sNo: 0, genericName: 'Torsemide', medicine: 'Tab. Torsemide 20mg [RMSCL DDC #445]', dosePower: '20mg', route: 'ORAL', frequency: 'OD', days: 30, instructions: 'For ascites control' },
      { sNo: 0, genericName: 'Spironolactone', medicine: 'Tab. Spironolactone 50mg [RMSCL DDC #448]', dosePower: '50mg', route: 'ORAL', frequency: 'OD', days: 30, instructions: 'For ascites control' },
      { sNo: 0, genericName: 'Lactulose', medicine: 'Syp. Lactulose 30ml [RMSCL DDC #512]', dosePower: '15mL', route: 'ORAL', frequency: 'TID', days: 30, instructions: 'Encephalopathy prophylaxis' },
      { sNo: 0, genericName: 'Rifaximin', medicine: 'Tab. Rifaximin 550mg [RMSCL DDC #659]', dosePower: '550mg', route: 'ORAL', frequency: 'BD', days: 30, instructions: 'Encephalopathy prophylaxis' },
      { sNo: 0, genericName: 'Pantoprazole', medicine: 'Tab. Pantoprazole 40mg [RMSCL DDC #142]', dosePower: '40mg', route: 'ORAL', frequency: 'OD', days: 30, instructions: 'Before meals' }
    ],
    conditionalMedications: [],
    followUpInstructions: [
      'Shunt Doppler ultrasound surveillance schedule: 24 hours, 1 week, 1 month, 3 months, 6 months, and annually (target velocity 90-190 cm/s)',
      'Strict lifelong compliance with therapeutic anticoagulation to prevent recurrent thrombosis',
      'LFT, Renal function, and INR monitoring weekly for the first month',
      'Daily morning weight and abdominal girth measurement at umbilicus',
      'Strict low-salt diet (<2g Na/day / 88 mmol/day)',
      'Screening for hepatocellular carcinoma (ultrasound + AFP every 6 months)'
    ],
    redFlagWarnings: [
      'Altered sensorium, confusion, slurred speech, or drowsiness (hepatic encephalopathy)',
      'Sudden rapid abdominal re-distension or weight gain (acute shunt thrombosis)',
      'Fresh blood in vomiting or black tarry stools (variceal bleeding)',
      'Any signs of abnormal bleeding (epistaxis, hematuria, extensive bruising) related to anticoagulation',
      'High fever with chills or abdominal tenderness (spontaneous bacterial peritonitis)'
    ],
    expectedAttachments: [{ modality: 'DSA', description: 'Portograms showing pre and post decompression gradients' }],
    ddcDrugs: [],
    dischargeAdvice: [
      'Take anticoagulant medication at the exact same times daily without missing doses',
      'Adhere strictly to low sodium diet and fluid restrictions as advised',
      'Report any subtle neurological changes or abdominal swelling immediately'
    ],
    procedureType: 'Major',
    anaesthesiaDefault: 'Local Anesthesia',
    defaultAccessSite: 'Right Internal Jugular Vein (RIJV)',
    defaultPostOpPlan: 'ICU monitoring for 24 hours, monitor for bleeding, shunt patency, and encephalopathy'
  },
  {
    procedureKey: 'tips_portal_hypertension',
    procedureFamily: 'TIPS (Portal Hypertension Decompression)',
    icdPrimary: { code: 'K76.6', description: 'Portal hypertension' },
    icdSecondary: [
      { code: 'R18.8', description: 'Other ascites / Refractory ascites' },
      { code: 'I85.01', description: 'Esophageal varices with bleeding' },
      { code: 'K74.60', description: 'Unspecified cirrhosis of liver' }
    ],
    criteriaFields: [
      {
        key: 'indication',
        label: 'Clinical Indication for TIPS',
        type: 'select',
        options: [
          { value: 'Refractory Ascites (Tense ascites unresponsive to high-dose diuretics)', label: 'Refractory Ascites' },
          { value: 'Secondary Prophylaxis / Recurrent Variceal Bleeding post-Endoscopy', label: 'Recurrent Variceal Bleeding' },
          { value: 'Early Pre-Emptive TIPS for Acute Variceal Bleeding (within 72h)', label: 'Early Pre-Emptive TIPS (within 72h)' },
          { value: 'Hepatorenal Syndrome Type 2', label: 'Hepatorenal Syndrome Type 2' }
        ],
        defaultValue: 'Refractory Ascites (Tense ascites unresponsive to high-dose diuretics)'
      },
      {
        key: 'etiology',
        label: 'Cirrhosis Etiology',
        type: 'select',
        options: [
          { value: 'Alcohol-associated Cirrhosis', label: 'Alcohol-associated Cirrhosis' },
          { value: 'Viral Hepatitis B/C Cirrhosis', label: 'Viral Hepatitis B/C Cirrhosis' },
          { value: 'Metabolic Dysfunction-Associated Steatohepatitis (MASH) Cirrhosis', label: 'MASH / NAFLD Cirrhosis' },
          { value: 'Cryptogenic Cirrhosis', label: 'Cryptogenic Cirrhosis' }
        ],
        defaultValue: 'Alcohol-associated Cirrhosis'
      },
      {
        key: 'childPughClass',
        label: 'Child-Pugh Score & Class',
        type: 'select',
        options: [
          { value: 'Child-Pugh Class A (Score 5-6)', label: 'Child-Pugh Class A (5-6)' },
          { value: 'Child-Pugh Class B (Score 7-9)', label: 'Child-Pugh Class B (7-9)' },
          { value: 'Child-Pugh Class C (Score 10-11)', label: 'Child-Pugh Class C (10-11)' }
        ],
        defaultValue: 'Child-Pugh Class B (Score 7-9)'
      },
      {
        key: 'meldNaTier',
        label: 'MELD-Na Score Tier',
        type: 'select',
        options: [
          { value: 'MELD-Na < 15 (Standard low risk)', label: 'MELD-Na < 15 (Low Risk)' },
          { value: 'MELD-Na 15-18 (Ideal therapeutic window for TIPS)', label: 'MELD-Na 15-18 (Ideal Window)' },
          { value: 'MELD-Na 19-24 (Increased risk, controlled calibration indicated)', label: 'MELD-Na 19-24 (Cautious)' }
        ],
        defaultValue: 'MELD-Na 15-18 (Ideal therapeutic window for TIPS)'
      },
      {
        key: 'targetHepaticVein',
        label: 'Target Hepatic Vein',
        type: 'select',
        options: [
          { value: 'Right Hepatic Vein (RHV)', label: 'Right Hepatic Vein (RHV)' },
          { value: 'Middle Hepatic Vein (MHV)', label: 'Middle Hepatic Vein (MHV)' }
        ],
        defaultValue: 'Right Hepatic Vein (RHV)'
      },
      {
        key: 'targetPortalBranch',
        label: 'Target Portal Vein Branch',
        type: 'select',
        options: [
          { value: 'Right Portal Vein posterior branch (RPV-P)', label: 'Right Portal Vein Posterior Branch' },
          { value: 'Right Portal Vein anterior branch (RPV-A)', label: 'Right Portal Vein Anterior Branch' },
          { value: 'Left Portal Vein main branch', label: 'Left Portal Vein Main Branch' }
        ],
        defaultValue: 'Right Portal Vein posterior branch (RPV-P)'
      },
      {
        key: 'stentGraft',
        label: 'Viatorr Stent-Graft Specification',
        type: 'select',
        options: [
          { value: 'Gore Viatorr TIPS Endoprosthesis 8mm x (70+20)mm', label: 'Viatorr 8mm x (70+20)mm' },
          { value: 'Gore Viatorr TIPS Endoprosthesis 10mm x (70+20)mm', label: 'Viatorr 10mm x (70+20)mm' },
          { value: 'Gore Viatorr TIPS Endoprosthesis 10mm x (80+20)mm', label: 'Viatorr 10mm x (80+20)mm' }
        ],
        defaultValue: 'Gore Viatorr TIPS Endoprosthesis 8mm x (70+20)mm'
      },
      {
        key: 'balloonDilation',
        label: 'Tract Dilation Balloon',
        type: 'select',
        options: [
          { value: '8 mm x 40 mm Conquest high-pressure balloon', label: '8 mm x 40 mm Conquest' },
          { value: '9 mm x 40 mm Mustang balloon', label: '9 mm x 40 mm Mustang' },
          { value: '10 mm x 40 mm Conquest high-pressure balloon', label: '10 mm x 40 mm Conquest' }
        ],
        defaultValue: '8 mm x 40 mm Conquest high-pressure balloon'
      },
      { key: 'preShuntPSG', label: 'Pre-Shunt Portosystemic Gradient (mmHg)', type: 'number', defaultValue: 24 },
      { key: 'postShuntPSG', label: 'Post-Shunt Portosystemic Gradient (mmHg)', type: 'number', defaultValue: 9 },
      { key: 'varicealEmbolization', label: 'Concomitant Variceal Embolization', type: 'checkbox', defaultValue: true },
      {
        key: 'embolicAgent',
        label: 'Variceal Embolic Agent',
        type: 'select',
        options: [
          { value: 'Pushable 0.035" Microcoils + Gelfoam slurry', label: 'Microcoils + Gelfoam' },
          { value: '0.018" Detachable Microcoils alone', label: 'Detachable Microcoils alone' },
          { value: 'Tissue adhesive (NBCA Glue)', label: 'NBCA Glue' },
          { value: 'None (Varices decompress spontaneously)', label: 'None' }
        ],
        defaultValue: 'Pushable 0.035" Microcoils + Gelfoam slurry'
      },
      { key: 'priorEncephalopathy', label: 'Past History of Hepatic Encephalopathy', type: 'checkbox', defaultValue: false }
    ],
    synthesizeComplaints: (c) => `Patient presented with severe portal hypertension complicated by ${c.indication}. Manifested as gross abdominal distension, recurrent hematemesis/melena, bilateral lower limb edema, and early satiety. Clinical risk profile: ${c.childPughClass}, ${c.meldNaTier}.`,
    synthesizeHistory: (c) => `Decompensated chronic liver disease secondary to ${c.etiology}. Prior history of ${c.indication}${c.priorEncephalopathy ? ', with past episodes of overt hepatic encephalopathy' : ', with no prior history of overt hepatic encephalopathy'}. Strictly verified clinical history without artificial lab values.`,
    synthesizeFamilyAndRiskHistory: (c) => `Chronic parenchymal liver disease; predisposing factors: viral hepatitis exposure, metabolic syndrome, or past alcohol use. Zero fake blood values.`,
    synthesizeLocalExam: (c) => `Distended abdomen with positive fluid thrill and shifting dullness; prominent abdominal wall caput medusae collaterals. Right internal jugular vein puncture site clean, dry, zero hematoma, no tracheal deviation.`,
    synthesizeOperativeNote: (c) => `Under strict aseptic precautions and local anesthesia with conscious sedation. Access: Ultrasound-guided right internal jugular vein (RIJV) puncture; 10F Cook RUPS-100 transjugular introducer sheath advanced into inferior vena cava and selective catheterization of ${c.targetHepaticVein} performed. Pre-shunt baseline hemodynamics: Portal Venous Pressure (PVP) and Right Atrial Pressure (RAP) recorded; Pre-shunt Portosystemic Gradient (PSG) calculated at ${c.preShuntPSG} mmHg (marked portal hypertension). Colapinto/Rosch-Uchida puncture needle directed anteriorly/medially from ${c.targetHepaticVein} across liver parenchyma to enter ${c.targetPortalBranch}. Portal access confirmed by free blood aspiration and direct portography demonstrating intrahepatic portal branching and retrograde filling of gastroesophageal varices. Hydrophilic 0.035" guidewire negotiated into main portal and superior mesenteric vein; exchanged for 0.035" Amplatz Super Stiff wire. Parenchymal tract dilated with 8mm balloon. Deployed ${c.stentGraft} with bare segment in portal vein and PTFE-covered segment spanning parenchymal tract to hepatocaval junction. Balloon post-dilation performed with ${c.balloonDilation}. ${c.varicealEmbolization ? `Selective catheterization of coronary / left gastric vein performed; successful embolization using ${c.embolicAgent} achieved complete variceal obliteration.` : ''} Post-shunt hemodynamics: Post-shunt PSG measured at ${c.postShuntPSG} mmHg (target <= 12 mmHg achieved, confirming satisfactory decompression). Final portogram demonstrated brisk hepatofugal flow through the Viatorr shunt into the RA with complete decompression of collateral varices.`,
    synthesizePostOpRecoveryNote: (c) => ({
      accessSiteHemostasis: 'RIJV access site hemostasis achieved with manual compression for 15 minutes. Pressure dressing intact over right neck; clean, dry, zero subcutaneous neck hematoma, zero airway compromise. Carotid pulse brisk and symmetric.',
      distalPulses: 'Bilateral radial and dorsalis pedis pulses strong (+++); no peripheral hypoperfusion',
      recoveryBedMonitoring: 'Liver ICU / LICU continuous telemetry. Vitals q15m x 2h, q30m x 2h, q1h x 20h. CVP / Right Atrial Pressure monitored for right ventricular volume overload. Maintain SpO2 >95%.',
      immediateComplications: 'Nil documented - Zero intraperitoneal hemorrhage, zero subcapsular liver laceration, zero acute stent thrombosis, zero acute heart failure. Post-shunt PSG confirmed <=12 mmHg.',
      recoveryStatus: 'Patient conscious, oriented x3, West Haven Encephalopathy Grade 0 (no asterixis). Abdominal girth baseline measured at umbilicus. Strict flat bed rest for 4-6 hours with head neutral.',
      notes: 'TIPS deployment (Viatorr covered stent-graft) uneventful. Shunt duplex Doppler scheduled at 24 hours to record baseline velocities. Strict Lactulose + Rifaximin protocol initiated.',
      telemetryVitals: 'BP: 118/72 mmHg, HR: 78 bpm regular, SpO2: 99% on room air, RR: 16/min, CVP: 8 mmHg',
      sheathRemovalTime: 'Immediate post-procedure in Cath Lab / Holding area after confirming normal baseline hemodynamics',
      sheathStatus: 'Removed',
      recoveryBed: 'Liver ICU / LICU-02'
    }),
    synthesizeDiagnosis: (c) => `Portal hypertension secondary to ${c.etiology} (${c.childPughClass}), treated with TIPS (${c.stentGraft}) with post-shunt PSG reduced from ${c.preShuntPSG} to ${c.postShuntPSG} mmHg.`,
    defaultMedications: [
      { sNo: 0, genericName: 'Lactulose', medicine: 'Syp. Lactulose 30ml [RMSCL DDC #512]', dosePower: '15-30mL', route: 'ORAL', frequency: 'TID', days: 30, instructions: 'Titrate to 2-3 soft stools daily' },
      { sNo: 0, genericName: 'Rifaximin', medicine: 'Tab. Rifaximin 550mg [RMSCL DDC #659]', dosePower: '550mg', route: 'ORAL', frequency: 'BD', days: 30, instructions: 'Hepatic encephalopathy prophylaxis' },
      { sNo: 0, genericName: 'Spironolactone', medicine: 'Tab. Spironolactone 50mg [RMSCL DDC #448]', dosePower: '50mg', route: 'ORAL', frequency: 'OD', days: 30, instructions: 'For ascites management' },
      { sNo: 0, genericName: 'Torsemide', medicine: 'Tab. Torsemide 20mg [RMSCL DDC #445]', dosePower: '20mg', route: 'ORAL', frequency: 'OD', days: 30, instructions: 'For ascites management' },
      { sNo: 0, genericName: 'Pantoprazole', medicine: 'Tab. Pantoprazole 40mg [RMSCL DDC #142]', dosePower: '40mg', route: 'ORAL', frequency: 'OD', days: 30, instructions: 'Before meals' },
      { sNo: 0, genericName: 'Paracetamol', medicine: 'Tab. Paracetamol 650mg [RMSCL DDC #28]', dosePower: '650mg', route: 'ORAL', frequency: 'SOS', days: 5, instructions: 'For pain/fever' }
    ],
    conditionalMedications: [],
    followUpInstructions: [
      'Shunt Doppler ultrasound surveillance schedule: 24 hours post-op, 1 month, 3 months, 6 months, and annually (normal shunt velocity 90-190 cm/s; <50 cm/s or >200 cm/s indicates shunt dysfunction)',
      'Daily morning weight and abdominal girth charting at umbilicus (target loss 0.5 kg/day without peripheral edema, 1.0 kg/day with edema)',
      'Strict dietary sodium restriction (<2 g/day / 88 mmol Na/day)',
      'Fluid restriction to 1.5 L/day if serum sodium <125-130 mEq/L',
      'LFT + INR weekly for the first month',
      'Hepatology OPD review in 1 week'
    ],
    redFlagWarnings: [
      'Altered sensorium, reversal of day-night sleep pattern, confusion, or slurred speech (hepatic encephalopathy)',
      'Fresh hematemesis or black tarry stools (recurrent variceal hemorrhage)',
      'Rapidly expanding abdominal distension or acute weight gain (acute shunt thrombosis)',
      'Shortness of breath, orthopnea, or cough (volume-overload heart failure)',
      'High fever with chills or abdominal pain (spontaneous bacterial peritonitis / stent infection)'
    ],
    expectedAttachments: [{ modality: 'DSA', description: 'Portograms demonstrating pre and post TIPS pressure gradients and shunt flow' }],
    ddcDrugs: [],
    dischargeAdvice: [
      'Take Lactulose regularly to ensure 2-3 soft bowel movements every day',
      'Maintain strict low-salt diet (<2g salt/day); avoid processed salty foods',
      'Record weight and abdominal girth every morning before breakfast',
      'Report any subtle memory lapses, drowsiness, or tremors immediately'
    ],
    procedureType: 'Major',
    anaesthesiaDefault: 'Local Anesthesia',
    defaultAccessSite: 'Right Internal Jugular Vein (RIJV)',
    defaultPostOpPlan: 'Liver ICU telemetry for 24 hours, monitor for bleeding, acute encephalopathy, and volume overload'
  },
  {
    procedureKey: 'pcd_abscess_drainage',
    procedureFamily: 'Percutaneous Abscess Drainage (PCD)',
    icdPrimary: { code: 'K75.0', description: 'Abscess of liver' },
    icdSecondary: [
      { code: 'A06.4', description: 'Amebic liver abscess' },
      { code: 'K65.0', description: 'Generalized peritonitis / Intra-abdominal abscess' },
      { code: 'T81.4', description: 'Infection following a procedure' }
    ],
    criteriaFields: [
      {
        key: 'abscessType',
        label: 'Etiology & Collection Type',
        type: 'select',
        options: [
          { value: 'Pyogenic Liver Abscess (Cryptogenic / Biliary sepsis)', label: 'Pyogenic Liver Abscess' },
          { value: 'Amebic Liver Abscess (Impending rupture / Failed medical therapy)', label: 'Amebic Liver Abscess' },
          { value: 'Post-operative Subhepatic / Subphrenic Collection', label: 'Post-Op Subhepatic / Subphrenic' },
          { value: 'Pelvic / Appendicular Abscess Collection', label: 'Pelvic / Appendicular Abscess' },
          { value: 'Infected Pancreatic Walled-off Necrosis / Pseudocyst', label: 'Infected Pancreatic Collection' }
        ],
        defaultValue: 'Pyogenic Liver Abscess (Cryptogenic / Biliary sepsis)'
      },
      {
        key: 'anatomicLocation',
        label: 'Anatomic Location & Segment',
        type: 'select',
        options: [
          { value: 'Right Hepatic Lobe (Segment VII/VIII)', label: 'Right Lobe (Segment VII/VIII)' },
          { value: 'Right Hepatic Lobe (Segment V/VI)', label: 'Right Lobe (Segment V/VI)' },
          { value: 'Left Hepatic Lobe (Segment II/III - risk of pericardial rupture)', label: 'Left Lobe (Segment II/III)' },
          { value: 'Left Hepatic Lobe (Segment IV)', label: 'Left Lobe (Segment IV)' },
          { value: 'Subhepatic Space (Morison Pouch)', label: 'Subhepatic (Morison Pouch)' },
          { value: 'Pelvic Cavity (Rectovesical / Douglas Pouch)', label: 'Pelvic Cavity' }
        ],
        defaultValue: 'Right Hepatic Lobe (Segment VII/VIII)'
      },
      {
        key: 'accessTechnique',
        label: 'Puncture Technique',
        type: 'select',
        options: [
          { value: 'Direct 18G Trocar one-step catheter deployment under real-time US', label: '18G Trocar One-Step (under US)' },
          { value: '18G Seldinger needle + 0.035" J-wire with sequential fascial dilatation under US', label: '18G Seldinger Needle + 0.035" Wire' },
          { value: 'CT-guided Seldinger access with fascial dilatation', label: 'CT-guided Seldinger Access' }
        ],
        defaultValue: '18G Seldinger needle + 0.035" J-wire with sequential fascial dilatation under US'
      },
      {
        key: 'catheterSize',
        label: 'Drainage Catheter Size',
        type: 'select',
        options: [
          { value: '10F Locking Pigtail Drainage Catheter', label: '10F Locking Pigtail' },
          { value: '12F Locking Pigtail Drainage Catheter', label: '12F Locking Pigtail' },
          { value: '14F Locking Pigtail Drainage Catheter', label: '14F Locking Pigtail' },
          { value: '16F Large-bore Sump Drainage Catheter', label: '16F Large-bore Sump' }
        ],
        defaultValue: '12F Locking Pigtail Drainage Catheter'
      },
      { key: 'pusVolumeEvacuated', label: 'Initial Pus Volume Evacuated (mL)', type: 'number', defaultValue: 350 },
      {
        key: 'pusCharacter',
        label: 'Pus / Aspirate Appearance',
        type: 'select',
        options: [
          { value: 'Thick yellowish-green purulent pus (Pyogenic)', label: 'Thick Yellow-Green Pus (Pyogenic)' },
          { value: 'Chocolate brown / Anchovy-sauce aspirate (Amebic)', label: 'Chocolate Brown / Anchovy Sauce (Amebic)' },
          { value: 'Turbid seropurulent fluid', label: 'Turbid Seropurulent Fluid' },
          { value: 'Foul-smelling hemorrhagic purulent fluid', label: 'Foul-Smelling Hemorrhagic Pus' }
        ],
        defaultValue: 'Thick yellowish-green purulent pus (Pyogenic)'
      },
      {
        key: 'cavityArchitecture',
        label: 'Abscess Cavity Architecture',
        type: 'select',
        options: [
          { value: 'Unilocular solitary abscess cavity', label: 'Unilocular Solitary Cavity' },
          { value: 'Multilocular / Septated complex abscess', label: 'Multilocular / Septated Cavity' }
        ],
        defaultValue: 'Unilocular solitary abscess cavity'
      },
      { key: 'cultureSent', label: 'Microbiology Culture Dispatched (Aerobic/Anaerobic/AFB)', type: 'checkbox', defaultValue: true }
    ],
    synthesizeComplaints: (c) => `Patient presented with high-grade spiking fever with chills and rigors, persistent abdominal pain localized to the ${c.anatomicLocation}, anorexia, nausea, and malaise. Underlying pathology: ${c.abscessType}.`,
    synthesizeHistory: (c) => `Documented infected fluid collection / abscess located in ${c.anatomicLocation}. Cavity architecture: ${c.cavityArchitecture}. Evaluated for underlying source without fake laboratory values.`,
    synthesizeFamilyAndRiskHistory: (c) => `Risk factors: diabetes mellitus, alcohol use disorder, endemic amebiasis, recent hepatobiliary/gastrointestinal surgery or intra-abdominal sepsis. Strictly verified clinical history.`,
    synthesizeLocalExam: (c) => `Right upper quadrant / localized abdominal tenderness on deep palpation with intercostal tenderness over lower ribs. Drainage insertion site clean, dry, and securely sutured with 2-0 Silk.`,
    synthesizeOperativeNote: (c) => `Under strict aseptic precautions and local infiltration with 1% lignocaine. Planning performed with real-time ultrasound/CT to ensure a safe transhepatic/percutaneous acoustic window avoiding pleural reflections, gall bladder, and major vascular structures. Puncture of the abscess cavity in the ${c.anatomicLocation} performed using ${c.accessTechnique}. Initial aspiration confirmed presence of purulent material (${c.pusCharacter}); initial sample of 20-50 mL immediately dispatched for Gram stain, aerobic and anaerobic culture & sensitivity, AFB, and wet mount. A 0.035" J-tip Amplatz Extra-Stiff guidewire coiled securely within the cavity. Sequential tract dilatation performed over the wire. Deployed ${c.catheterSize} into the central cavity; pigtail drawstring locked and fastened. A total of ${c.pusVolumeEvacuated} mL of ${c.pusCharacter} evacuated with near-total cavity collapse verified on real-time ultrasound. Cavity gently irrigated with sterile normal saline until clear aspirate obtained. Catheter secured to skin with 2-0 Silk suture and connected to a sterile gravity drainage collection bag.`,
    synthesizePostOpRecoveryNote: (c) => ({
      accessSiteHemostasis: 'Puncture site clean, dry, zero oozing; sterile occlusive gauze dressing intact. Drainage catheter securely anchored to skin with 2-0 Silk suture and retention disk. Zero peri-tubal purulent leakage.',
      distalPulses: 'Bilateral peripheral pulses strong (+++)',
      recoveryBedMonitoring: 'Surgical IR Holding / Ward. Vitals q30m x 2h, then q2h x 24h. Monitor temperature curve and blood pressure for transient post-drainage endotoxemia/bacteremia.',
      immediateComplications: 'Nil documented - Zero hemoperitoneum, zero peritoneal signs, zero pleuritic chest pain or pneumothorax, zero catheter kink/blockage.',
      recoveryStatus: 'Conscious, oriented, reporting marked relief of abdominal tension/pain. Cavity decompressed. Drainage collection bag positioned below bed level.',
      notes: 'Percutaneous abscess drainage completed with near-total cavity evacuation. Flush with 10mL normal saline q8h to maintain lumen patency. Daily 24h output charting initiated.',
      telemetryVitals: 'BP: 122/78 mmHg, HR: 82 bpm regular, SpO2: 98% on room air, RR: 18/min, Temp: 99.1°F',
      sheathRemovalTime: 'N/A - Locking pigtail drainage catheter in situ, connected to sterile closed collection bag.',
      sheathStatus: 'Catheter in Situ',
      recoveryBed: 'Surgical IR Holding Bed 12'
    }),
    synthesizeDiagnosis: (c) => `${c.abscessType} in ${c.anatomicLocation}, successfully managed by percutaneous drainage with ${c.catheterSize} (${c.pusVolumeEvacuated} mL evacuated).`,
    defaultMedications: [
      { sNo: 0, genericName: 'Metronidazole', medicine: 'Tab. Metronidazole 400mg [RMSCL DDC #140]', dosePower: '400mg', route: 'ORAL', frequency: 'TID', days: 14, instructions: 'Anti-amebic and anaerobic coverage' },
      { sNo: 0, genericName: 'Ciprofloxacin', medicine: 'Tab. Ciprofloxacin 500mg [RMSCL DDC #112]', dosePower: '500mg', route: 'ORAL', frequency: 'BD', days: 10, instructions: 'Broad-spectrum coverage' },
      { sNo: 0, genericName: 'Paracetamol', medicine: 'Tab. Paracetamol 650mg [RMSCL DDC #28]', dosePower: '650mg', route: 'ORAL', frequency: 'TID', days: 5, instructions: 'For pain/fever' },
      { sNo: 0, genericName: 'Pantoprazole', medicine: 'Tab. Pantoprazole 40mg [RMSCL DDC #142]', dosePower: '40mg', route: 'ORAL', frequency: 'OD', days: 14, instructions: 'Before meals' }
    ],
    conditionalMedications: [
      { condition: 'If Pyogenic Abscess', conditionKey: 'abscessType', conditionValue: 'Pyogenic Liver Abscess (Cryptogenic / Biliary sepsis)', medication: { sNo: 0, genericName: 'Amoxicillin-Clavulanate', medicine: 'Cap. Amoxicillin and Potassium Clavulanate 625mg [RMSCL DDC #505]', dosePower: '625mg', route: 'ORAL', frequency: 'BD', days: 10, instructions: 'Culture-directed coverage' } }
    ],
    followUpInstructions: [
      'Catheter flush protocol: Flush catheter gently with 10 mL sterile 0.9% Normal Saline q8h under strict aseptic precautions to prevent blockage',
      'Daily 24-hour drain output charting (record volume, color, and character)',
      'Removal criteria: Daily drain output < 10-15 mL/day of clear serous fluid for 2 consecutive days, resolution of fever/leukocytosis, and sonographic confirmation of cavity collapse',
      'Ultrasound review at 5-7 days to assess cavity size reduction and catheter position',
      'Follow up in IR OPD Room 48 / Old Gastro Ward in 1 week'
    ],
    redFlagWarnings: [
      'Sudden stoppage of drainage accompanied by return of high fever and severe abdominal pain (catheter blockage/displacement)',
      'Fresh bright red blood draining into the collection bag',
      'Accidental pulling out or slippage of the drainage tube',
      'Spreading redness, swelling, or foul discharge around the entry site',
      'Signs of acute peritonitis (abdominal wall rigidity, involuntary guarding, severe rebound tenderness)'
    ],
    expectedAttachments: [{ modality: 'Ultrasound', description: 'Ultrasound images showing pre-drainage abscess cavity and post-drainage collapse' }],
    ddcDrugs: [],
    dischargeAdvice: [
      'Keep the drainage bag below waist/bed level at all times to allow gravity drainage',
      'Flush catheter gently with 10mL normal saline q8h; never pull or aspirate aggressively',
      'Record daily drainage volume in a notebook and bring it to your next hospital visit'
    ],
    procedureType: 'Minor',
    anaesthesiaDefault: 'Local Anesthesia',
    defaultAccessSite: 'Percutaneous Transhepatic / Abdominal Wall',
    defaultPostOpPlan: 'Ward observation for 24 hours, monitor output volume and temperature curve'
  },
  {
    procedureKey: 'pcn_nephrostomy',
    procedureFamily: 'Percutaneous Nephrostomy (PCN)',
    icdPrimary: { code: 'N13.3', description: 'Other and unspecified hydronephrosis' },
    icdSecondary: [
      { code: 'N13.6', description: 'Pyonephrosis' },
      { code: 'N13.2', description: 'Hydronephrosis with renal calculus' },
      { code: 'C53.9', description: 'Malignant neoplasm of cervix uteri (pelvic compression)' },
      { code: 'N13.5', description: 'Crossing vessel / Ureteric stricture' }
    ],
    criteriaFields: [
      {
        key: 'indication',
        label: 'Clinical Indication for Nephrostomy',
        type: 'select',
        options: [
          { value: 'Malignant Obstructive Uropathy (Extrinsic pelvic compression)', label: 'Malignant Obstructive Uropathy (Pelvic Compression)' },
          { value: 'Calculous Ureteric Obstruction with intractable colic', label: 'Calculous Ureteric Obstruction' },
          { value: 'Pyonephrosis (Infected hydronephrosis with urosepsis)', label: 'Pyonephrosis (Infected Hydronephrosis)' },
          { value: 'Iatrogenic / Post-radiation Ureteric Stricture', label: 'Post-radiation / Iatrogenic Stricture' },
          { value: 'Urinary Diversion for Ureteric Fistula / Extravasation', label: 'Urinary Diversion (Fistula / Leak)' }
        ],
        defaultValue: 'Malignant Obstructive Uropathy (Extrinsic pelvic compression)'
      },
      {
        key: 'hydronephrosisGrade',
        label: 'Hydronephrosis Severity',
        type: 'select',
        options: [
          { value: 'Gross Hydronephrosis (Marked parenchymal thinning)', label: 'Gross Hydronephrosis (Parenchymal Thinning)' },
          { value: 'Severe Hydronephrosis', label: 'Severe Hydronephrosis' },
          { value: 'Moderate Hydronephrosis', label: 'Moderate Hydronephrosis' },
          { value: 'Gross Pyonephrosis with dense pelvicalyceal debris', label: 'Gross Pyonephrosis with Debris' }
        ],
        defaultValue: 'Severe Hydronephrosis'
      },
      {
        key: 'laterality',
        label: 'Target Kidney Laterality',
        type: 'select',
        options: [
          { value: 'Right kidney', label: 'Right Kidney' },
          { value: 'Left kidney', label: 'Left Kidney' },
          { value: 'Bilateral kidneys', label: 'Bilateral Kidneys' }
        ],
        defaultValue: 'Right kidney'
      },
      {
        key: 'calyxPuncture',
        label: 'Target Calyx & Route',
        type: 'select',
        options: [
          { value: 'Posterior-inferior (Lower pole) calyx via Brödel avascular line', label: 'Posterior-inferior (Lower Pole) via Brödel Line' },
          { value: 'Middle posterior calyx', label: 'Middle Posterior Calyx' },
          { value: 'Upper pole calyx (infracostal approach)', label: 'Upper Pole Calyx (Infracostal)' }
        ],
        defaultValue: 'Posterior-inferior (Lower pole) calyx via Brödel avascular line'
      },
      {
        key: 'needleHardware',
        label: 'Access Needle Hardware',
        type: 'select',
        options: [
          { value: '18G Trocar needle under real-time ultrasound & fluoroscopy', label: '18G Trocar Needle (US/Fluoro)' },
          { value: '21G Chiba needle with Neff percutaneous access set', label: '21G Chiba + Neff Set' }
        ],
        defaultValue: '18G Trocar needle under real-time ultrasound & fluoroscopy'
      },
      {
        key: 'catheterSize',
        label: 'Nephrostomy Catheter Size',
        type: 'select',
        options: [
          { value: '8.5F Locking Pigtail Nephrostomy Catheter', label: '8.5F Locking Pigtail Catheter' },
          { value: '10F Locking Pigtail Nephrostomy Catheter', label: '10F Locking Pigtail Catheter' },
          { value: '12F Locking Pigtail Nephrostomy Catheter', label: '12F Locking Pigtail Catheter' }
        ],
        defaultValue: '10F Locking Pigtail Nephrostomy Catheter'
      },
      {
        key: 'urineAppearance',
        label: 'Initial Urine Output Appearance',
        type: 'select',
        options: [
          { value: 'Clear amber urine', label: 'Clear Amber Urine' },
          { value: 'Turbid cloudy urine', label: 'Turbid Cloudy Urine' },
          { value: 'Frank purulent exudate (pus)', label: 'Frank Purulent Exudate (Pus)' },
          { value: 'Mild rose-tinted hematuria', label: 'Mild Rose-Tinted Hematuria' }
        ],
        defaultValue: 'Clear amber urine'
      },
      { key: 'postObstructiveDiuresis', label: 'High Risk for Post-Obstructive Diuresis (>200 mL/hr)', type: 'checkbox', defaultValue: false }
    ],
    synthesizeComplaints: (c) => `Patient presented with ${c.indication} of ${c.laterality} characterized by ${c.hydronephrosisGrade}, flank pain, oliguria, and uremic symptoms.`,
    synthesizeHistory: (c) => `Confirmed urinary tract obstruction involving ${c.laterality}. Evaluated for obstructive uropathy without artificial blood test values.`,
    synthesizeFamilyAndRiskHistory: (c) => `Risk factors: advanced pelvic malignancy (cervix/bladder/colorectal), recurrent urolithiasis, solitary functioning kidney, prior pelvic radiotherapy. Strictly verified clinical history.`,
    synthesizeLocalExam: (c) => `Flank tenderness elicited on renal angle percussion. Puncture site over lumbar triangle clean, dry, zero hematoma; catheter securely fixed.`,
    synthesizeOperativeNote: (c) => `Under strict aseptic precautions and local infiltration with 1-2% lignocaine. Patient positioned in prone/prone-oblique posture. Real-time ultrasound and fluoroscopic guidance utilized to map the pelvicalyceal system. Puncture of the ${c.calyxPuncture} performed using ${c.needleHardware} through the avascular plane of Brödel. Puncture confirmed by aspiration of ${c.urineAppearance}; sample dispatched for urine routine, microscopy, culture & sensitivity. Dilute non-ionic iodinated contrast pyelogram performed outlining dilated pelvicalyceal system and site of obstruction. An 0.035" Amplatz Extra-Stiff guidewire advanced and coiled securely within the renal pelvis. Sequential tract dilatation performed over the wire. Deployed ${c.catheterSize} with pigtail loop fully reconstituted within the renal pelvis; drawstring locked and secured. Immediate free unimpeded outflow of urine confirmed. Catheter anchored to skin with 2-0 Silk suture and connected to a sterile closed urobag.`,
    synthesizePostOpRecoveryNote: (c) => ({
      accessSiteHemostasis: 'Flank puncture site clean, dry, zero bleeding, zero swelling; sterile occlusive dressing intact. Nephrostomy catheter securely anchored to skin with 2-0 Silk suture and adhesive fastener. Zero peritubal urine extravasation.',
      distalPulses: 'Bilateral lower extremity pulses strong (+++); zero distal edema',
      recoveryBedMonitoring: 'Renal Ward Telemetry. Vitals q30m x 2h, q1h x 4h, q2h thereafter. Post-Obstructive Diuresis Protocol: measure hourly urine output; if >200 mL/h for 2 consecutive hours, start 0.45% NS IV fluid replacement.',
      immediateComplications: 'Nil documented - Zero significant hematuria (urine clear/light pink, zero clots), zero retroperitoneal hematoma, zero uroseptic shock, zero tube displacement.',
      recoveryStatus: 'Patient comfortable, oriented x3, renal angle tenderness markedly improved. Free flow of urine into drainage bag. Bag kept strictly below kidney level.',
      notes: 'PCN successfully deployed into renal pelvis under combined US/fluoroscopy. Unimpeded urine drainage established. Culture sent. Nephrostomy bag care explained.',
      telemetryVitals: 'BP: 126/80 mmHg, HR: 74 bpm regular, SpO2: 99% on room air, RR: 16/min',
      sheathRemovalTime: 'N/A - Locking pigtail nephrostomy catheter in situ, connected to sterile closed drainage urobag.',
      sheathStatus: 'Catheter in Situ',
      recoveryBed: 'Uro-IR Recovery Bay 03'
    }),
    synthesizeDiagnosis: (c) => `Obstructive uropathy of ${c.laterality} (${c.hydronephrosisGrade}), successfully decompressed via ${c.laterality} PCN (${c.catheterSize}).`,
    defaultMedications: [
      { sNo: 0, genericName: 'Ciprofloxacin', medicine: 'Tab. Ciprofloxacin 500mg [RMSCL DDC #112]', dosePower: '500mg', route: 'ORAL', frequency: 'BD', days: 7, instructions: 'Urosepsis prevention' },
      { sNo: 0, genericName: 'Paracetamol', medicine: 'Tab. Paracetamol 650mg [RMSCL DDC #28]', dosePower: '650mg', route: 'ORAL', frequency: 'SOS', days: 5, instructions: 'For analgesia' },
      { sNo: 0, genericName: 'Pantoprazole', medicine: 'Tab. Pantoprazole 40mg [RMSCL DDC #142]', dosePower: '40mg', route: 'ORAL', frequency: 'OD', days: 7, instructions: 'Before meals' }
    ],
    conditionalMedications: [
      { condition: 'If Ureteric Calculus', conditionKey: 'indication', conditionValue: 'Calculous Ureteric Obstruction with intractable colic', medication: { sNo: 0, genericName: 'Tamsulosin', medicine: 'Tab. Tamsulosin 0.4mg [RMSCL DDC #664]', dosePower: '0.4mg', route: 'ORAL', frequency: 'OD', days: 14, instructions: 'Bedtime' } }
    ],
    followUpInstructions: [
      'Daily urine output monitoring (record 24h volume, color, and clarity)',
      'Position urobag strictly below kidney level at all times to prevent retrograde infection',
      'Flush protocol: If tube stops draining or contains sediment, gentle flush with 5 mL sterile 0.9% Normal Saline under aseptic technique (never aspirate forcefully)',
      'Serum creatinine and electrolyte monitoring at 48h and 1 week',
      'Urology consultation for definitive management (retrograde/antegrade double-J stenting, PCNL, or surgical intervention)',
      'Nephrostomy catheter routine exchange every 6-8 weeks if long-term diversion required'
    ],
    redFlagWarnings: [
      'Fever >101°F with shaking chills, rigors, or confusion (urosepsis)',
      'Sudden cessation of urine drainage from the tube accompanied by flank fullness/pain',
      'Persistent frank red hematuria or blood clots obstructing the tubing',
      'Continuous urine leakage around the catheter soaking flank dressing',
      'Accidental catheter displacement or dislodgement'
    ],
    expectedAttachments: [{ modality: 'Fluoroscopy', description: 'Nephrostogram showing pelvicalyceal decompression' }],
    ddcDrugs: [],
    dischargeAdvice: [
      'Maintain urobag below kidney level at all times to prevent backflow',
      'Empty the drainage bag when it is two-thirds full',
      'Ensure the tube is never kinked or pulled during movement or sleep',
      'Drink 2 to 2.5 liters of water daily unless restricted by your doctor'
    ],
    procedureType: 'Minor',
    anaesthesiaDefault: 'Local Anesthesia',
    defaultAccessSite: 'Percutaneous flank (Brödel line)',
    defaultPostOpPlan: 'Monitor urine volume hourly; watch for post-obstructive diuresis'
  },
  {
    procedureKey: 'varicose_veins',
    procedureFamily: 'Endovenous Ablation & Sclerotherapy (VenaSeal / EVLT / UGFS)',
    icdPrimary: { code: 'I83.9', description: 'Varicose veins of lower extremities without ulcer or inflammation' },
    icdSecondary: [
      { code: 'I83.0', description: 'Varicose veins of lower extremities with ulcer' },
      { code: 'I83.1', description: 'Varicose veins of lower extremities with inflammation / stasis dermatitis' },
      { code: 'I87.2', description: 'Chronic venous insufficiency (peripheral)' }
    ],
    criteriaFields: VENOUS_CRITERIA_FIELDS,
    synthesizeComplaints: (c) => synthesizeVenousComplaints(mapCriteriaToVaricoseModel(c)),
    synthesizeHistory: (c) => synthesizeVenousHistory(mapCriteriaToVaricoseModel(c)),
    synthesizeLocalExam: (c) => synthesizeVenousLocalExam(mapCriteriaToVaricoseModel(c)),
    synthesizeOperativeNote: (c) => synthesizeVenousOperativeNote(mapCriteriaToVaricoseModel(c)),
    synthesizePostOpRecoveryNote: (c) => {
      const p = synthesizeVenousPostOpNote(mapCriteriaToVaricoseModel(c));
      return {
        accessSiteHemostasis: p.accessSiteHemostasis,
        distalPulses: p.distalPulses || 'Strong (+++) - Bilateral DP & PT pulses intact',
        recoveryBedMonitoring: `${p.recoveryBed}. Protocol: Mandatory 20-30 min immediate corridor ambulation protocol completed.`,
        immediateComplications: p.immediateComplications || 'Nil documented',
        recoveryStatus: p.recoveryStatus,
        notes: p.notes,
        completionDuplex: p.completionDuplex,
        egitStatus: p.egitStatus,
        compressionStockings: p.compressionStockings,
        ambulationProtocol: p.ambulationProtocol,
        painVasScore: p.painVasScore,
        chairScreening: p.chairScreening,
      };
    },
    synthesizeDiagnosis: (c) => synthesizeVenousDiagnosis(mapCriteriaToVaricoseModel(c)),
    defaultMedications: [
      {
        sNo: 1,
        medicine: 'Tab. Micronized Purified Flavonoid Fraction (Daflon / MPFF) 500mg [RMSCL DDC #622]',
        genericName: 'Micronized Purified Flavonoid Fraction (MPFF 450mg Diosmin + 50mg Hesperidin)',
        dosePower: '500mg',
        route: 'ORAL',
        frequency: 'BD',
        days: 30,
        instructions: 'After meals (Venoactive tonic to enhance venous tone and microvascular protection)'
      },
      {
        sNo: 2,
        medicine: 'Tab. Aceclofenac 100mg + Paracetamol 325mg [RMSCL DDC #622/624]',
        genericName: 'Aceclofenac + Paracetamol',
        dosePower: '1 Tab',
        route: 'ORAL',
        frequency: 'BD',
        days: 5,
        instructions: 'After meals for post-procedure discomfort and perivenous inflammation'
      },
      {
        sNo: 3,
        medicine: 'Tab. Pantoprazole 40mg [RMSCL DDC #142]',
        genericName: 'Pantoprazole',
        dosePower: '40mg',
        route: 'ORAL',
        frequency: 'OD',
        days: 10,
        instructions: 'Take 30 minutes before breakfast (Gastroprotection)'
      }
    ],
    conditionalMedications: [
      {
        condition: 'If Stasis Itching or CHAIR Reaction',
        conditionKey: 'chairScreening',
        conditionValue: 'Mild self-limiting perivenous erythema (Grade 1)',
        medication: {
          sNo: 4,
          medicine: 'Tab. Levocetirizine 5mg [RMSCL DDC #659]',
          genericName: 'Levocetirizine',
          dosePower: '5mg',
          route: 'ORAL',
          frequency: 'HS',
          days: 10,
          instructions: 'At bedtime for pruritus / cyanoacrylate hypersensitivity suppression'
        }
      },
      {
        condition: 'If Active Ulcer (CEAP C6)',
        conditionKey: 'ceapClass',
        conditionValue: 'C6',
        medication: {
          sNo: 5,
          medicine: 'Cap. Amoxicillin and Potassium Clavulanate 625mg [RMSCL DDC #505]',
          genericName: 'Amoxicillin and Potassium Clavulanate',
          dosePower: '625mg',
          route: 'ORAL',
          frequency: 'BD',
          days: 5,
          instructions: 'After food (Ulcer / wound bacterial prophylaxis)'
        }
      }
    ],
    followUpInstructions: [
      'Immediate post-procedure: 20-30 minutes immediate corridor ambulation mandatory',
      'Wear Class II graduated compression stockings (23-32 mmHg) daytime for 3-4 weeks',
      'Venous color duplex Doppler ultrasound follow-up in IR OPD Room 48 after 7-10 days to confirm GSV/SSV occlusion and exclude delayed DVT/EGIT',
      'Elevate treated leg on 2 pillows while sleeping or sitting',
      'Keep puncture sites clean and dry; outer dressing removal at 48 hours',
      'Ulcer care dressing change twice weekly if CEAP C6 ulcer present'
    ],
    redFlagWarnings: [
      'Sudden onset severe calf swelling, tightness, or pain (suspected DVT - report immediately to SMS Emergency)',
      'Sudden breathlessness, chest pain, or hemoptysis (suspected Pulmonary Embolism - immediate emergency)',
      'Spreading intense red rash or hives along inner thigh (CHAIR hypersensitivity reaction)',
      'Active bleeding or expanding painful hematoma from the below-knee puncture site',
      'Fever > 101°F with chills or purulent drainage'
    ],
    expectedAttachments: [{ modality: 'Ultrasound', description: 'Pre-op duplex mapping and post-op completion occlusion scan' }],
    ddcDrugs: [],
    dischargeAdvice: [
      'Immediate ambulation: Walk for 20-30 minutes immediately post-op. Avoid prolonged sitting or standing motionless > 45 minutes.',
      'Wear Class II compression stockings (23-32 mmHg) continuously during the day for 3-4 weeks.',
      'Elevate legs above heart level whenever resting on sofa or bed.',
      'Keep puncture wound dry and clean for 48 hours.',
      'Avoid heavy weightlifting (> 15 kg), running, and hot baths for 2 weeks.',
      'A firm tender cord along the inner thigh is normal and represents the safely closed vein.'
    ],
    procedureType: 'Minor',
    anaesthesiaDefault: 'Local Anesthesia',
    defaultAccessSite: 'Below-knee GSV / Mid-calf SSV (Percutaneous US-guided)',
    defaultPostOpPlan: 'Daycare PACU holding for 1-2 hours, immediate ambulation verified, same-day discharge'
  }
];

export function getDischargeTemplate(procedureKey: string): ProcedureDischargeTemplate | undefined {
  return ALL_PROCEDURE_DISCHARGE_TEMPLATES.find(t => t.procedureKey === procedureKey);
}

export function getAllProcedureFamilies(): { key: string; label: string }[] {
  return ALL_PROCEDURE_DISCHARGE_TEMPLATES.map(t => ({ key: t.procedureKey, label: t.procedureFamily }));
}
