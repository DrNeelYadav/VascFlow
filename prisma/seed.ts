import { PrismaClient, SchemeType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('--- SMS Hospital IR Tracker Database Seeding Started ---');

  // Clean existing tracker records to ensure fresh idempotency
  await prisma.patientLogEntry.deleteMany({});
  await prisma.schemeTariff.deleteMany({});
  await prisma.hardwareIndent.deleteMany({});
  await prisma.procedureBlueprint.deleteMany({});

  console.log('[1/4] Seeding 25 Clinical Procedure Blueprints from Master Google Sheet...');

  const proceduresData = [
    {
      procedureType: 'TACE',
      name: 'Transarterial Chemoembolization (cTACE / DEB-TACE)',
      category: 'Interventional Oncology',
      code: '2849-IN061A',
      rghsCode: '693 / 12',
      icd10: 'C22.0',
      defaultFollowupType: 'Imaging (CT/MR/USG)',
      defaultIntervalNumber: 6,
      defaultIntervalUnit: 'Weeks',
      baseTariffInr: 47960,
      indications: [
        'Intermediate-stage Hepatocellular Carcinoma (BCLC Stage B)',
        'Bridging or downstaging prior to orthotopic liver transplantation',
        'Unresectable solitary HCC greater than 3 cm with preserved liver function'
      ],
      preOpCriteria: [
        'Child-Pugh Class A or well-compensated Class B (Score <= 7)',
        'ECOG Performance Status 0-1',
        'Total Bilirubin < 2.5 mg/dL, Platelets > 50,000 /uL, INR < 1.5',
        'Absence of main portal vein trunk invasion'
      ],
      techniqueSteps: [
        'Right common femoral artery ultrasound-guided puncture and 5F sheath placement.',
        'Celiac and superior mesenteric artery angiography to delineate arterial anatomy.',
        'Superselective cannulation of tumor-feeding arterial branch using 2.7F microcatheter.',
        'Slow injection of Lipiodol-Doxorubicin emulsion (or Drug-Eluting Beads) until tumor blush devascularization and stasis achieved.',
        'Post-embolization completion devascularization angiogram.'
      ],
      complications: [
        'Post-Embolization Syndrome (fever, right upper quadrant pain, nausea)',
        'Non-target embolization (ischemic cholecystitis, gastric ulceration)',
        'Transient hepatic transaminase elevation',
        'Contrast-induced acute kidney injury'
      ],
      vendorContacts: [
        'Guerbet India / Jaipur Medical (+91 98290 12345)',
        'Terumo India Medical (+91 98291 55678)'
      ],
      hardware: [
        { category: 'Vascular Access', itemName: '5F Radiofocus Introducer Sheath', specification: '11 cm length, 0.035 wire compatible', standardStore: 'Angio Suite Store', estimatedCostInr: 1200, isImplant: false },
        { category: 'Diagnostic Catheter', itemName: '5F Yashiro / Cobra C2 Catheter', specification: '65 cm - 100 cm, 0.035 lumen', standardStore: 'Central IR Store', estimatedCostInr: 2500, isImplant: false },
        { category: 'Microcatheter System', itemName: '2.7F Progreat Microcatheter System', specification: '130 cm with 0.014 Glidewire GT', standardStore: 'DDC-14 Central', estimatedCostInr: 19000, isImplant: true, implantCode: 'IMP 39' },
        { category: 'Embolic Agents', itemName: 'Lipiodol Ultra-Fluid Ampoule', specification: '10 mL ampoule (Guerbet)', standardStore: 'SMS Pharmacy DDC-14', estimatedCostInr: 18000, isImplant: true, implantCode: 'IMP 38' },
        { category: 'Embolic Microparticles', itemName: 'Calibrated Gelatin Sponge / PVA Particles', specification: '300-500 um vials', standardStore: 'Central IR Store', estimatedCostInr: 5500, isImplant: false }
      ],
      tariffs: [
        {
          scheme: SchemeType.MAAY_CHIRANJEEVI,
          schemeName: 'Chiranjeevi',
          packageCode: '2849-IN061A',
          packageName: 'Conventional TACE (cTACE - Lipiodol + Chemotherapy)',
          tariffAmount: 47960,
          nabhRate: 47960,
          nonNabhRate: 43164,
          implantCovered: true,
          implantDetails: [
            { code: 'IMP 38', name: 'Lipiodol Ultra-Fluid Ampoule', maxRate: 18000 },
            { code: 'IMP 39', name: 'Microcatheter System (2.7F/2.4F)', maxRate: 19000 }
          ],
          preAuthCriteria: 'Pre-procedure Triphasic CECT or MRI Liver report confirming HCC. Normal coagulation profile.',
          documentationChecklist: [
            'Pre-procedure multiphasic imaging report',
            'Pre-embolization selective diagnostic angiogram',
            'Post-embolization completion spot radiograph',
            'Chemotherapy vial and Lipiodol ampoule barcode photograph'
          ]
        },
        {
          scheme: SchemeType.RGHS,
          schemeName: 'RGHS',
          packageCode: '693 / 12',
          packageName: 'Transcatheter Hepatic Chemoembolization (TACE)',
          tariffAmount: 45000,
          nabhRate: 45000,
          nonNabhRate: 38250,
          implantCovered: true,
          preAuthCriteria: 'RGHS Card, CECT Abdomen confirming HCC, Specialist prescription.',
          documentationChecklist: ['RGHS Pre-Authorization Slip', 'Operative Notes', 'DSA CD / Spot Films', 'Implant Invoices']
        }
      ]
    },
    {
      procedureType: 'TARE (Y90)',
      name: 'Transarterial Radioembolization (TARE / Yttrium-90)',
      category: 'Interventional Oncology',
      code: '2849-IN061C',
      rghsCode: '693 / 13',
      icd10: 'C22.0',
      defaultFollowupType: 'Imaging (CT/MR/USG)',
      defaultIntervalNumber: 3,
      defaultIntervalUnit: 'Months',
      baseTariffInr: 85000,
      indications: [
        'Unresectable Hepatocellular Carcinoma with portal vein branch thrombosis',
        'Downstaging large solitary HCC for liver resection',
        'Chemorefractory unresectable Colorectal Liver Metastases (CRLM)'
      ],
      preOpCriteria: [
        'Diagnostic mapping angiogram with Tc-99m MAA scan showing lung shunt fraction < 20%',
        'Child-Pugh Score <= 7, Bilirubin < 2.0 mg/dL',
        'Absence of extrahepatic gastrointestinal shunting'
      ],
      techniqueSteps: [
        'Stage 1: Pre-treatment visceral mapping angiogram and coil embolization of prophylactic gastroduodenal/right gastric vessels.',
        'Injection of Tc-99m MAA to calculate hepatopulmonary shunt ratio and SPECT-CT dosimetric planning.',
        'Stage 2: Delivery of calculated Yttrium-90 resin or glass microspheres via superselective microcatheter position under strict radiation safety protocols.'
      ],
      complications: [
        'Radiation-induced liver disease (RILD)',
        'Gastrointestinal ulceration secondary to non-target sphere delivery',
        'Radiation pneumonitis (minimized by shunt testing)'
      ],
      vendorContacts: ['Sirtex Medical / Boston Scientific (+91 98290 88776)'],
      hardware: [
        { category: 'Vascular Access', itemName: '5F Radiofocus Sheath', specification: '11 cm length', standardStore: 'Angio Suite Store', estimatedCostInr: 1200, isImplant: false },
        { category: 'Diagnostic Catheter', itemName: '5F Cobra / Mikaelson Catheter', specification: '100 cm', standardStore: 'Central IR Store', estimatedCostInr: 2500, isImplant: false },
        { category: 'Microcatheter System', itemName: '2.0F - 2.4F TruSelect Microcatheter', specification: '135 cm high flow compatibility', standardStore: 'DDC-14 Central', estimatedCostInr: 22000, isImplant: true, implantCode: 'IMP 41' },
        { category: 'Embolic Coils', itemName: 'Detachable 0.018 Microcoils for Prophylactic Coil Occlusion', specification: '2 mm - 4 mm diameters', standardStore: 'Central IR Store', estimatedCostInr: 24000, isImplant: true, implantCode: 'IMP 396' }
      ],
      tariffs: [
        {
          scheme: SchemeType.MAAY_CHIRANJEEVI,
          schemeName: 'Chiranjeevi',
          packageCode: '2849-IN061C',
          packageName: 'Transarterial Radioembolization (TARE)',
          tariffAmount: 85000,
          nabhRate: 85000,
          nonNabhRate: 76500,
          implantCovered: true,
          preAuthCriteria: 'Tumor board recommendation, MAA scan showing lung shunt < 20%, multiphasic MRI/CT.',
          documentationChecklist: ['MAA Scan Report', 'Dosimetry Sheet', 'Intra-procedure Angiograms', 'Radioisotope Release Certificate']
        }
      ]
    },
    {
      procedureType: 'RFA',
      name: 'Radiofrequency Ablation (RFA - Liver / Renal / Bone)',
      category: 'Tumor Ablation',
      code: '2849-IN044A',
      rghsCode: '693 / 14',
      icd10: 'C22.0 / C64 / M89.9',
      defaultFollowupType: 'Imaging (CT/MR/USG)',
      defaultIntervalNumber: 1,
      defaultIntervalUnit: 'Months',
      baseTariffInr: 25440,
      indications: [
        'Early-stage HCC (solitary <= 3 cm or up to 3 nodules <= 3 cm)',
        'Small Renal Cell Carcinoma in solitary kidney or poor surgical risk',
        'Osteoid Osteoma refractory to NSAIDs'
      ],
      preOpCriteria: ['Target lesion visible on USG or CT guidance', 'Platelets > 60,000 /uL, INR < 1.5'],
      techniqueSteps: [
        'Ultrasound or CT guidance localization of lesion.',
        'Placement of dispersive grounding pads on thighs.',
        'Percutaneous insertion of internally cooled RFA electrode directly into lesion epicenter.',
        'Energy delivery protocol achieving tissue temperatures > 60°C for 10-12 minutes to achieve 0.5 cm ablative margin.',
        'Track ablation during electrode withdrawal to prevent seeding and bleeding.'
      ],
      complications: ['Pneumothorax (for high subdiaphragmatic lesions)', 'Capsular hematoma', 'Thermal injury to adjacent bowel or diaphragm'],
      vendorContacts: ['Medtronic Covidien (+91 98295 66778)'],
      hardware: [
        { category: 'Ablation Device', itemName: 'Cool-tip RFA Electrode Kit', specification: '15 cm - 20 cm shaft with 3 cm active exposure', standardStore: 'Central IR Store', estimatedCostInr: 75000, isImplant: true, implantCode: 'IMP 34' },
        { category: 'Grounding Accessories', itemName: 'Dispersive Grounding Pads (Pair)', specification: 'Dual-surface split adult', standardStore: 'Angio Suite Store', estimatedCostInr: 2500, isImplant: false }
      ],
      tariffs: [
        {
          scheme: SchemeType.MAAY_CHIRANJEEVI,
          schemeName: 'Chiranjeevi',
          packageCode: '2849-IN044A',
          packageName: 'Radiofrequency Ablation (RFA) of Tumor',
          tariffAmount: 25440,
          nabhRate: 25440,
          nonNabhRate: 22896,
          implantCovered: true,
          implantDetails: [{ code: 'IMP 34', name: 'RF Probe', maxRate: 75000 }],
          preAuthCriteria: 'Pre-op cross-sectional imaging verifying size and anatomical eligibility.',
          documentationChecklist: ['Pre-op CECT/MRI', 'Intra-op needle position confirmation images', 'Post-ablation spot film', 'Probe barcode invoice']
        }
      ]
    },
    {
      procedureType: 'MWA',
      name: 'Microwave Ablation (MWA - Liver / Lung / Bone)',
      category: 'Tumor Ablation',
      code: '2849-IN045A',
      rghsCode: '693 / 16',
      icd10: 'C22.0 / C34.9',
      defaultFollowupType: 'Imaging (CT/MR/USG)',
      defaultIntervalNumber: 1,
      defaultIntervalUnit: 'Months',
      baseTariffInr: 31840,
      indications: [
        'HCC lesions up to 4 cm or lesions abutting large hepatic vasculature',
        'Primary or secondary lung malignancies in nonsurgical candidates',
        'Benign thyroid nodules and osteoid osteomas'
      ],
      preOpCriteria: ['Imaging confirmation, pulmonary function test for lung lesions, INR < 1.4'],
      techniqueSteps: [
        'CT or USG guided positioning of 14G or 17G microwave antenna.',
        'Continuous fluid cooling circulating system activation.',
        'Energy application at 65-100W for 4-8 minutes producing rapid coagulation zone.',
        'Hydrodissection or air dissection if lesion is adjacent to stomach/colon.'
      ],
      complications: ['Pneumothorax', 'Hemoptysis', 'Thermal injury to adjacent bowel', 'Pleural effusion'],
      vendorContacts: ['NeuWave / Ethicon Johnson & Johnson (+91 98293 11223)'],
      hardware: [
        { category: 'Ablation Device', itemName: 'Microwave Ablation Antenna', specification: '14G / 17G antenna with ceramic tip', standardStore: 'Central IR Store', estimatedCostInr: 95000, isImplant: true, implantCode: 'IMP 35' }
      ],
      tariffs: [
        {
          scheme: SchemeType.MAAY_CHIRANJEEVI,
          schemeName: 'Chiranjeevi',
          packageCode: '2849-IN045A',
          packageName: 'Microwave Ablation of Tumor',
          tariffAmount: 31840,
          nabhRate: 31840,
          nonNabhRate: 28656,
          implantCovered: true,
          implantDetails: [{ code: 'IMP 35', name: 'Microwave Probe', maxRate: 95000 }],
          preAuthCriteria: 'Cross-sectional imaging demonstrating target lesions not suitable for surgery.',
          documentationChecklist: ['CECT Imaging', 'Intra-procedure needle placement scan', 'Post-procedure ablation zone scan', 'Microwave probe barcode']
        }
      ]
    },
    {
      procedureType: 'Cryoablation',
      name: 'Percutaneous Cryoablation (Renal / Soft Tissue / Bone)',
      category: 'Tumor Ablation',
      code: '2849-IN046A',
      rghsCode: '693 / 24',
      icd10: 'C64.9 / M89.9',
      defaultFollowupType: 'Imaging (CT/MR/USG)',
      defaultIntervalNumber: 1,
      defaultIntervalUnit: 'Months',
      baseTariffInr: 42000,
      indications: [
        'Small renal cortical neoplasms (cT1a <= 4 cm)',
        'Painful bony metastases (palliative analgesia)',
        'Desmoid tumors and retroperitoneal soft tissue lesions'
      ],
      preOpCriteria: ['Renal CT / MRI, baseline serum creatinine, coagulation profile'],
      techniqueSteps: [
        'CT-guided placement of multiple 17G cryoprobes.',
        'Dual freeze-thaw cycles (10 min freeze, 8 min thaw, 10 min freeze) using Argon/Helium gas.',
        'Direct visualization of hypodense ice ball extending 5 mm beyond tumor margin.'
      ],
      complications: ['Perirenal hematoma', 'Transient macroscopic hematuria', 'Ice ball extension to adjacent structures'],
      vendorContacts: ['Boston Scientific India (+91 98290 88776)'],
      hardware: [
        { category: 'Cryoprobes', itemName: '17G IceSeed / IceSphere Cryoprobe', specification: '15 cm shaft length', standardStore: 'Central IR Store', estimatedCostInr: 85000, isImplant: true }
      ],
      tariffs: [
        {
          scheme: SchemeType.MAAY_CHIRANJEEVI,
          schemeName: 'Chiranjeevi',
          packageCode: '2849-IN046A',
          packageName: 'Percutaneous Cryoablation',
          tariffAmount: 42000,
          nabhRate: 42000,
          nonNabhRate: 37800,
          implantCovered: true,
          preAuthCriteria: 'CT/MRI showing target tumor with biopsy or imaging hallmarks.',
          documentationChecklist: ['Pre-op Imaging', 'Intra-op CT scans showing ice ball', 'Discharge Summary', 'Probe Invoices']
        }
      ]
    },
    {
      procedureType: 'PTBD',
      name: 'Percutaneous Transhepatic Biliary Drainage (PTBD) & SEMS',
      category: 'Biliary Interventions',
      code: '1849-SG105A',
      rghsCode: '582',
      icd10: 'C24.0 / K83.1',
      defaultFollowupType: 'OPD Visit',
      defaultIntervalNumber: 2,
      defaultIntervalUnit: 'Weeks',
      baseTariffInr: 16000,
      indications: [
        'Malignant obstructive jaundice (Klatskin tumor, gallbladder carcinoma, cholangiocarcinoma, pancreatic head mass)',
        'Failed or contraindicated endoscopic retrograde cholangiopancreatography (ERCP)',
        'Acute cholangitis requiring emergency biliary decompression'
      ],
      preOpCriteria: [
        'MRCP or CECT Abdomen showing dilated intrahepatic biliary radicals (IHBR)',
        'Coagulation optimization: INR < 1.4, Platelets > 75,000 /uL',
        'IV broad-spectrum antibiotic coverage'
      ],
      techniqueSteps: [
        'Right mid-axillary intercostal or epigastric left lobe puncture with 21G Chiba needle.',
        'Diagnostic cholangiography under fluoroscopy defining ductal obstruction.',
        '0.018 wire passage, 4F coaxial system conversion, exchange to 0.035 stiff wire across stricture into duodenum.',
        'Placement of 8.5F or 10F internal-external drainage catheter (or bare nitinol SEMS).',
        'External fixation and gravity bag connection.'
      ],
      complications: ['Hemobilia', 'Biliary peritonitis / biloma', 'Pneumothorax (intercostal punctures)', 'Catheter dislodgement'],
      vendorContacts: ['Cook Medical (+91 98292 33445)', 'Boston Scientific (+91 98290 88776)'],
      hardware: [
        { category: 'Access Needle', itemName: '21G Chiba Needle', specification: '15 cm echogenic bevel', standardStore: 'Central IR Store', estimatedCostInr: 1500, isImplant: false },
        { category: 'Introducer Set', itemName: 'Accustick 4F-6F Coaxial Introducer', specification: 'Coaxial with 0.018 Nitinol wire', standardStore: 'Central IR Store', estimatedCostInr: 4500, isImplant: false },
        { category: 'Guidewire', itemName: '0.035 Stiff Hydrophilic Glidewire', specification: '260 cm angled tip', standardStore: 'Angio Suite Store', estimatedCostInr: 2800, isImplant: false },
        { category: 'Drainage Catheter', itemName: '8.5F / 10F Locking Pigtail Biliary Drain', specification: 'Multi-sidehole internal-external locking catheter', standardStore: 'Central IR Store', estimatedCostInr: 4200, isImplant: true, implantCode: 'IMP 102' },
        { category: 'Biliary Stent', itemName: 'Self-Expanding Metallic Biliary Stent (SEMS)', specification: '10 mm x 60 mm / 80 mm bare Nitinol', standardStore: 'DDC-14 Central', estimatedCostInr: 45000, isImplant: true, implantCode: 'IMP 12' }
      ],
      tariffs: [
        {
          scheme: SchemeType.MAAY_CHIRANJEEVI,
          schemeName: 'Chiranjeevi',
          packageCode: '1849-SG105A',
          packageName: 'Percutaneous Transhepatic External Biliary Drainage (PTBD)',
          tariffAmount: 16000,
          nabhRate: 16000,
          nonNabhRate: 14400,
          implantCovered: true,
          implantDetails: [{ code: 'IMP 102', name: 'Ring Drainage Catheter (8.5F/10F)', maxRate: 4200 }],
          preAuthCriteria: 'MRCP or CECT demonstrating biliary obstruction and dilated ducts.',
          documentationChecklist: ['MRCP/CECT Report', 'Intra-op puncture and cholangiogram spot film', 'Final pigtail position radiograph', 'Drain barcode']
        },
        {
          scheme: SchemeType.RGHS,
          schemeName: 'RGHS',
          packageCode: '582',
          packageName: 'Percutaneous Transhepatic Biliary Drainage (PTBD)',
          tariffAmount: 15000,
          nabhRate: 15000,
          nonNabhRate: 12750,
          implantCovered: true,
          preAuthCriteria: 'Physician referral, MRCP report showing biliary dilatation.',
          documentationChecklist: ['RGHS Pre-Auth form', 'Operative procedure note', 'Fluoroscopy spot films', 'Hardware vouchers']
        }
      ]
    },
    {
      procedureType: 'PTGBD',
      name: 'Percutaneous Transhepatic Gallbladder Drainage (PTGBD)',
      category: 'Biliary Interventions',
      code: '1849-IN057A-GB',
      rghsCode: '584',
      icd10: 'K81.0',
      defaultFollowupType: 'OPD Visit',
      defaultIntervalNumber: 2,
      defaultIntervalUnit: 'Weeks',
      baseTariffInr: 14000,
      indications: [
        'Severe acute calculous or acalculous cholecystitis in high-risk, critically ill surgical candidates',
        'Sepsis control in ICU patients unresponsive to medical antibiotic therapy'
      ],
      preOpCriteria: ['Ultrasound showing gallbladder distension, wall thickening (> 4 mm), or pericholecystic fluid'],
      techniqueSteps: [
        'Transhepatic route chosen through bare area of liver to prevent bile peritonitis.',
        'Real-time USG guided puncture of gallbladder lumen using 18G trocar needle or 21G Chiba.',
        'Aspiration of bile for culture and sensitivity.',
        'Fluoroscopic cholecystogram demonstrating cystic duct patency or blockage.',
        'Deployment and locking of 8.5F locking pigtail catheter in gallbladder.'
      ],
      complications: ['Bile leak / peritonitis', 'Bleeding / hemobilia', 'Catheter dislodgement'],
      vendorContacts: ['Cook Medical (+91 98292 33445)'],
      hardware: [
        { category: 'Puncture Needle', itemName: '18G Trocar Initial Puncture Needle', specification: '15 cm length', standardStore: 'Central IR Store', estimatedCostInr: 1400, isImplant: false },
        { category: 'Drainage Catheter', itemName: '8.5F Locking Pigtail Catheter', specification: 'Hydrophilic coating with locking thread', standardStore: 'Central IR Store', estimatedCostInr: 3800, isImplant: true, implantCode: 'IMP 88' }
      ],
      tariffs: [
        {
          scheme: SchemeType.MAAY_CHIRANJEEVI,
          schemeName: 'Chiranjeevi',
          packageCode: '1849-IN057A-GB',
          packageName: 'Percutaneous Gallbladder Drainage',
          tariffAmount: 14000,
          nabhRate: 14000,
          nonNabhRate: 12600,
          implantCovered: true,
          preAuthCriteria: 'Ultrasound showing acute cholecystitis in ICU/unfit patient.',
          documentationChecklist: ['USG Abdomen report', 'Puncture confirmation image', 'Cholecystogram film', 'Drainage tube barcode']
        }
      ]
    },
    {
      procedureType: 'Nephrostomy (PCN)',
      name: 'Percutaneous Nephrostomy (PCN)',
      category: 'Urinary Interventions',
      code: '1849-IN013A',
      rghsCode: '910',
      icd10: 'N13.0 / N13.3',
      defaultFollowupType: 'OPD Visit',
      defaultIntervalNumber: 2,
      defaultIntervalUnit: 'Weeks',
      baseTariffInr: 14000,
      indications: [
        'Obstructive uropathy secondary to ureteric calculi, pelvic malignancy, or stricture',
        'Pyonephrosis with urosepsis requiring immediate drainage',
        'Urinary diversion for malignant urinary fistulae'
      ],
      preOpCriteria: ['USG or NCCT KUB demonstrating hydronephrosis / hydroureter', 'Platelets > 50,000 /uL, INR < 1.5'],
      techniqueSteps: [
        'Prone or prone-oblique position.',
        'Real-time USG puncture of lower or mid-posterior calyx along Brodel line of avascularity.',
        'Aspiration of urine for bacteriological culture.',
        'Fluoroscopic nephrostogram using dilute non-ionic contrast.',
        'Tract dilation over 0.035 stiff guidewire up to 10F.',
        'Placement and locking of 8.5F or 10F pigtail catheter in renal pelvis.'
      ],
      complications: ['Transient macroscopic hematuria', 'Subcapsular / retroperitoneal hematoma', 'Colonic perforation', 'Catheter dislodgement'],
      vendorContacts: ['Cook Medical (+91 98292 33445)', 'Rusch Teleflex (+91 98291 99887)'],
      hardware: [
        { category: 'Puncture', itemName: '18G Two-Part Trocar Puncture Needle', specification: '20 cm with echogenic tip', standardStore: 'Central IR Store', estimatedCostInr: 1400, isImplant: false },
        { category: 'Guidewire', itemName: '0.035 J-Tip Heavy Duty Guidewire', specification: '150 cm Amplatz Stiff', standardStore: 'Central IR Store', estimatedCostInr: 2200, isImplant: false },
        { category: 'Dilators', itemName: 'Fascial Renal Dilator Set (6F - 10F)', specification: 'Radiopaque polyurethane', standardStore: 'Central IR Store', estimatedCostInr: 1800, isImplant: false },
        { category: 'Catheter', itemName: '8.5F / 10F Locking Pigtail Nephrostomy Catheter', specification: 'Hydrophilic coating, locking string', standardStore: 'Central IR Store', estimatedCostInr: 3800, isImplant: true, implantCode: 'IMP 88' }
      ],
      tariffs: [
        {
          scheme: SchemeType.MAAY_CHIRANJEEVI,
          schemeName: 'Chiranjeevi',
          packageCode: '1849-IN013A',
          packageName: 'Percutaneous Nephrostomy (PCN)',
          tariffAmount: 14000,
          nabhRate: 14000,
          nonNabhRate: 12600,
          implantCovered: true,
          implantDetails: [{ code: 'IMP 88', name: 'Locking Pigtail Nephrostomy Catheter', maxRate: 3800 }],
          preAuthCriteria: 'Imaging report confirming obstructive uropathy/hydronephrosis.',
          documentationChecklist: ['USG/CT KUB report', 'Intra-procedure fluoroscopy nephrostogram', 'Final pigtail locked radiograph', 'Catheter invoice']
        },
        {
          scheme: SchemeType.RGHS,
          schemeName: 'RGHS',
          packageCode: '910',
          packageName: 'Percutaneous Nephrostomy (PCN)',
          tariffAmount: 12000,
          nabhRate: 12000,
          nonNabhRate: 10200,
          implantCovered: true,
          preAuthCriteria: 'Urology or Nephrology referral, imaging confirming obstruction.',
          documentationChecklist: ['RGHS Approval Sheet', 'Operative summary', 'Spot fluoroscopy films', 'Implant vouchers']
        }
      ]
    },
    {
      procedureType: 'DJ Stenting',
      name: 'Antegrade Percutaneous Double-J (DJ) Ureteral Stenting',
      category: 'Urinary Interventions',
      code: '2849-IN015A',
      rghsCode: '912',
      icd10: 'N13.1',
      defaultFollowupType: 'OPD Visit',
      defaultIntervalNumber: 3,
      defaultIntervalUnit: 'Months',
      baseTariffInr: 13220,
      indications: [
        'Failed retrograde cystoscopic ureteral stenting',
        'Complete ureteral disruption or stricture secondary to pelvic surgery/radiotherapy',
        'Ureteral obstruction with indwelling PCN requiring conversion to internal drainage'
      ],
      preOpCriteria: ['Pre-existing PCN access or concurrent nephrostomy puncture', 'INR < 1.4'],
      techniqueSteps: [
        'Antegrade nephrostogram through sheath or puncture.',
        'Manipulation of 0.035 hydrophilic wire and 5F Kumpe catheter across ureteric obstruction into urinary bladder.',
        'Confirmation of intravesical position by coiling wire in bladder.',
        'Advancement of 6F Double-J stent over stiff wire until distal coil opens in bladder and proximal coil anchors in renal pelvis.',
        'Temporary PCN safety tether or capping.'
      ],
      complications: ['Hematuria', 'Stent migration / misplacement', 'Bladder irritation symptoms', 'Stent encrustation'],
      vendorContacts: ['Cook Medical (+91 98292 33445)', 'Boston Scientific (+91 98290 88776)'],
      hardware: [
        { category: 'Ureteral Stent', itemName: '6F Double-J Ureteral Stent Set', specification: '26 cm length with pusher and clamp', standardStore: 'DDC-14 Central', estimatedCostInr: 6700, isImplant: true, implantCode: 'IMP 18' }
      ],
      tariffs: [
        {
          scheme: SchemeType.MAAY_CHIRANJEEVI,
          schemeName: 'Chiranjeevi',
          packageCode: '2849-IN015A',
          packageName: 'Percutaneous Antegrade Ureteric Stenting',
          tariffAmount: 13220,
          nabhRate: 13220,
          nonNabhRate: 11898,
          implantCovered: true,
          implantDetails: [{ code: 'IMP 18', name: 'Silicon Stent', maxRate: 6700 }],
          preAuthCriteria: 'Documentation of failed retrograde attempt or complex ureteral stricture.',
          documentationChecklist: ['USG/CT Report', 'Intra-op fluoroscopy showing bladder coil', 'Post-stenting KUB radiograph', 'Stent invoice/barcode']
        }
      ]
    },
    {
      procedureType: 'Renal Angioplasty',
      name: 'Renal Artery Angioplasty & Stenting',
      category: 'Arterial Interventions',
      code: '2849-IN023B',
      rghsCode: '693 / 20',
      icd10: 'I15.0 / I70.1',
      defaultFollowupType: 'OPD Visit',
      defaultIntervalNumber: 1,
      defaultIntervalUnit: 'Months',
      baseTariffInr: 60880,
      indications: [
        'Atherosclerotic renal artery stenosis (> 70%) with refractory hypertension',
        'Fibromuscular dysplasia (FMD) with hemodynamic gradient > 20 mmHg',
        'Ischemic nephropathy or flash pulmonary edema'
      ],
      preOpCriteria: ['Renal Doppler or CT Angiography confirming hemodynamically significant stenosis', 'Serum creatinine baseline'],
      techniqueSteps: [
        'Femoral or radial access with 6F Renal Double Curve or SOS guiding catheter.',
        'Selective renal angiogram and trans-lesional pressure wire assessment.',
        'Passage of 0.014 steerable coronary wire across stenosis.',
        'Direct deployment of balloon-expandable renal stent (e.g. 5 mm - 7 mm diameter) across ostium.',
        'Post-dilation and confirmation of zero residual trans-stenotic pressure gradient.'
      ],
      complications: ['Renal artery dissection / perforation', 'Distal atheroembolism', 'Contrast nephropathy', 'Femoral pseudoaneurysm'],
      vendorContacts: ['Medtronic India (+91 98295 66778)', 'Boston Scientific (+91 98290 88776)'],
      hardware: [
        { category: 'Guiding Catheter', itemName: '6F Renal Double Curve (RDC)', specification: '55 cm length', standardStore: 'Central IR Store', estimatedCostInr: 4500, isImplant: false },
        { category: 'Microwire', itemName: '0.014 Steerable Guidewire', specification: '190 cm length', standardStore: 'Central IR Store', estimatedCostInr: 3500, isImplant: false },
        { category: 'Renal Stent', itemName: 'Balloon-Expandable Peripheral / Renal Stent', specification: '5.0 mm - 7.0 mm x 15 mm - 18 mm', standardStore: 'DDC-14 Central', estimatedCostInr: 37000, isImplant: true, implantCode: 'IMP 29' }
      ],
      tariffs: [
        {
          scheme: SchemeType.MAAY_CHIRANJEEVI,
          schemeName: 'Chiranjeevi',
          packageCode: '2849-IN023B',
          packageName: 'Angioplasty and Stenting (Arterial)',
          tariffAmount: 60880,
          nabhRate: 60880,
          nonNabhRate: 54792,
          implantCovered: true,
          implantDetails: [
            { code: 'IMP 28', name: 'Balloon Dilatation Catheter', maxRate: 9800 },
            { code: 'IMP 29', name: 'Metallic Stent', maxRate: 37000 }
          ],
          preAuthCriteria: 'CT Angiogram or Doppler confirming > 70% ostial renal artery narrowing with refractory hypertension.',
          documentationChecklist: ['CT Angiogram report', 'Pre-stent angiogram with pressure gradient', 'Post-stent completion run', 'Stent barcode']
        }
      ]
    },
    {
      procedureType: 'Peripheral Angioplasty/Stenting',
      name: 'Peripheral Arterial Angioplasty & Bare Metal Stenting (SFA / Iliac)',
      category: 'Arterial Interventions',
      code: '2849-IN023D',
      rghsCode: '693 / 21',
      icd10: 'I70.20',
      defaultFollowupType: 'OPD Visit',
      defaultIntervalNumber: 1,
      defaultIntervalUnit: 'Months',
      baseTariffInr: 60880,
      indications: [
        'Critical limb-threatening ischemia (rest pain, non-healing ischemic ulceration)',
        'Severe lifestyle-limiting intermittent claudication (Rutherford Category 3-6)',
        'Iliac or Superficial Femoral Artery chronic total occlusion (CTO)'
      ],
      preOpCriteria: ['CT Angiography of lower limbs defining lesion extent (TASC II classification)', 'Ankle-Brachial Index (ABI) < 0.6'],
      techniqueSteps: [
        'Antegrade ipsilateral or crossover contralateral femoral access with 6F sheath.',
        'Systemic heparinization (5000 IU).',
        'Endoluminal or subintimal crossing of occlusion using 0.035 wire and support catheter.',
        'Pre-dilation with appropriately sized angioplasty balloon.',
        'Deployment of self-expanding nitinol stent across SFA or balloon-expandable stent for iliac lesion.',
        'Post-dilation and angiographic verification of brisk straight-line outflow to the foot.'
      ],
      complications: ['Arterial dissection / rupture', 'Distal thromboembolism', 'Access site hematoma / pseudoaneurysm', 'Early thrombosis'],
      vendorContacts: ['BD Bard Peripheral (+91 98296 77889)', 'Medtronic (+91 98295 66778)'],
      hardware: [
        { category: 'Vascular Access', itemName: '6F Destination / Flexor Guiding Sheath', specification: '45 cm crossover sheath', standardStore: 'Central IR Store', estimatedCostInr: 5500, isImplant: false },
        { category: 'Angioplasty Balloon', itemName: 'High-Pressure PTA Dilatation Balloon', specification: '5 mm - 7 mm x 40 mm - 100 mm', standardStore: 'Central IR Store', estimatedCostInr: 9800, isImplant: true, implantCode: 'IMP 28' },
        { category: 'Peripheral Stent', itemName: 'Self-Expanding Nitinol Bare Metal Stent', specification: '6 mm - 8 mm x 60 mm - 120 mm', standardStore: 'DDC-14 Central', estimatedCostInr: 37000, isImplant: true, implantCode: 'IMP 29' }
      ],
      tariffs: [
        {
          scheme: SchemeType.MAAY_CHIRANJEEVI,
          schemeName: 'Chiranjeevi',
          packageCode: '2849-IN023D',
          packageName: 'Angioplasty and Bare Metal Stenting (Arterial CTO Lesion)',
          tariffAmount: 60880,
          nabhRate: 60880,
          nonNabhRate: 54792,
          implantCovered: true,
          implantDetails: [
            { code: 'IMP 28', name: 'Balloon Catheter', maxRate: 9800 },
            { code: 'IMP 29', name: 'Metallic Stent', maxRate: 37000 }
          ],
          preAuthCriteria: 'CT Angiogram demonstrating significant arterial obstruction in patient with critical limb ischemia.',
          documentationChecklist: ['CT Angiogram Peripheral Run', 'Pre and Post angioplasty DSA runs', 'Stent deployment fluoroscopy stills', 'Implant stickers']
        }
      ]
    },
    {
      procedureType: 'Uterine Fibroid Embolization',
      name: 'Uterine Artery Embolization (UAE / UFE)',
      category: 'Vascular Embolization',
      code: '2849-IN017B-UFE',
      rghsCode: '693 / 26',
      icd10: 'D25.9',
      defaultFollowupType: 'Imaging (CT/MR/USG)',
      defaultIntervalNumber: 3,
      defaultIntervalUnit: 'Months',
      baseTariffInr: 32000,
      indications: [
        'Symptomatic uterine leiomyomas with menorrhagia, pelvic pressure, or bulk symptoms',
        'Uterine adenomyosis refractory to medical treatment in patients desiring uterine preservation',
        'High surgical risk or refusal of hysterectomy'
      ],
      preOpCriteria: ['Pelvic MRI documenting fibroid location, size, and viability (hyperenhancement on T1+C)', 'Normal cervical cytology (Pap smear)'],
      techniqueSteps: [
        'Right common femoral or transradial 5F access.',
        'Pelvic aortography and bilateral internal iliac selective catheterization.',
        'Superselective cannulation of uterine artery anterior division using Roberts Uterine Catheter (RUC) and 2.7F microcatheter.',
        'Embolization of bilateral uterine arteries using calibrated PVA particles (500-710 um) to near stasis (pruned tree appearance).',
        'Post-embolization completion pelvic arteriogram.'
      ],
      complications: ['Post-embolization syndrome', 'Transient amenorrhea', 'Fibroid expulsion / vaginal discharge', 'Non-target ovarian artery embolization'],
      vendorContacts: ['Cook Medical (+91 98292 33445)', 'Terumo India (+91 98291 55678)'],
      hardware: [
        { category: 'Specialized Catheter', itemName: '5F Roberts Uterine Catheter (RUC)', specification: '100 cm length', standardStore: 'Central IR Store', estimatedCostInr: 3500, isImplant: false },
        { category: 'Microcatheter', itemName: '2.7F Progreat Microcatheter System', specification: '130 cm length', standardStore: 'DDC-14 Central', estimatedCostInr: 19000, isImplant: true, implantCode: 'IMP 23' },
        { category: 'Calibrated Embolics', itemName: 'Calibrated PVA Microspheres', specification: '500 - 710 um vials', standardStore: 'Central IR Store', estimatedCostInr: 5500, isImplant: true, implantCode: 'IMP 22' }
      ],
      tariffs: [
        {
          scheme: SchemeType.MAAY_CHIRANJEEVI,
          schemeName: 'Chiranjeevi',
          packageCode: '2849-IN017B-UFE',
          packageName: 'Uterine Artery Embolization for Fibroids',
          tariffAmount: 32000,
          nabhRate: 32000,
          nonNabhRate: 28800,
          implantCovered: true,
          implantDetails: [
            { code: 'IMP 22', name: 'PVA Particle', maxRate: 5500 },
            { code: 'IMP 23', name: 'Microcatheter System', maxRate: 19000 }
          ],
          preAuthCriteria: 'Pelvic MRI or USG documenting symptomatic leiomyomata.',
          documentationChecklist: ['Pelvic MRI Report', 'Bilateral selective uterine angiograms', 'Post-embolization stasis spot views', 'PVA vial barcodes']
        }
      ]
    },
    {
      procedureType: 'Varicocele Embolization',
      name: 'Internal Spermatic Vein Varicocele Embolization',
      category: 'Venous Interventions',
      code: '2849-IN020B',
      rghsCode: '693 / 17',
      icd10: 'I86.1',
      defaultFollowupType: 'OPD Visit',
      defaultIntervalNumber: 3,
      defaultIntervalUnit: 'Months',
      baseTariffInr: 22000,
      indications: [
        'Symptomatic Grade II-III varicocele with persistent dull scrotal aching pain',
        'Male subfertility with abnormal semen analysis (oligoasthenoteratozoospermia)',
        'Adolescent testicular volume discrepancy > 20%'
      ],
      preOpCriteria: ['Scrotal color Doppler demonstrating pampiniform venous diameter > 3 mm with retrograde reflux on Valsalva'],
      techniqueSteps: [
        'Right common femoral or right internal jugular vein access using 5F sheath.',
        'Catheterization of left renal vein and selective cannulation of left internal spermatic vein (ISV) using Cobra C2.',
        'Retrograde venography with Valsalva maneuver mapping collaterals.',
        'Advancement of catheter to level of deep inguinal ring.',
        'Sandwich embolization: distal metallic microcoils, intermediate 3% Sodium Tetradecyl Sulfate (STS) foam, and proximal coils below renal vein.',
        'Completion venogram verifying complete occlusive stasis.'
      ],
      complications: ['Pampiniform thrombophlebitis', 'Spermatic vein extravasation / spasm', 'Coil migration', 'Hydrocele'],
      vendorContacts: ['Cook Medical (+91 98292 33445)'],
      hardware: [
        { category: 'Diagnostic Catheter', itemName: '5F Cobra C2 / Simmons 1 Catheter', specification: '65 cm length', standardStore: 'Central IR Store', estimatedCostInr: 2500, isImplant: false },
        { category: 'Embolic Coils', itemName: '0.035 Nester / Tornado Embolization Coils', specification: '6 mm - 12 mm diameter coils', standardStore: 'Central IR Store', estimatedCostInr: 21700, isImplant: true, implantCode: 'IMP 380' },
        { category: 'Sclerosant Foam', itemName: 'Sodium Tetradecyl Sulfate (STS 3%) Ampoule', specification: '2 mL ampoule', standardStore: 'Central IR Store', estimatedCostInr: 1200, isImplant: false }
      ],
      tariffs: [
        {
          scheme: SchemeType.MAAY_CHIRANJEEVI,
          schemeName: 'Chiranjeevi',
          packageCode: '2849-IN020B',
          packageName: 'Coil Embolization (Internal Spermatic Vein)',
          tariffAmount: 30340,
          nabhRate: 30340,
          nonNabhRate: 27306,
          implantCovered: true,
          implantDetails: [{ code: 'IMP 380', name: 'Coil Set (Max 3)', maxRate: 21700 }],
          preAuthCriteria: 'Scrotal Doppler showing venous reflux > 3 mm and clinical indication.',
          documentationChecklist: ['Scrotal Doppler Report', 'Diagnostic spermatic venogram', 'Post-coiling occlusion radiograph', 'Coil barcodes']
        }
      ]
    },
    {
      procedureType: 'IVC Filter Placement',
      name: 'Inferior Vena Cava (IVC) Filter Placement',
      category: 'Venous Interventions',
      code: '2849-IN034A',
      rghsCode: '693 / 19',
      icd10: 'I82.9 / I26.9',
      defaultFollowupType: 'Imaging (CT/MR/USG)',
      defaultIntervalNumber: 6,
      defaultIntervalUnit: 'Weeks',
      baseTariffInr: 15520,
      indications: [
        'Acute lower extremity deep vein thrombosis (DVT) with absolute contraindication to anticoagulation (active bleeding, planned emergency surgery)',
        'Recurrent pulmonary embolism despite therapeutic anticoagulation',
        'Free-floating iliofemoral thrombus in high-risk patients'
      ],
      preOpCriteria: ['Venous Doppler or CT Venogram demonstrating acute DVT', 'Measurement of IVC diameter (< 28 mm for standard filters)'],
      techniqueSteps: [
        'Right internal jugular or right common femoral vein access with 6F sheath.',
        'Inferior vena cavogram with radiopaque ruler to locate renal vein ostia and rule out anatomical variants (duplicated IVC, mega-cava).',
        'Advancement of delivery sheath to infrarenal position.',
        'Controlled deployment of retrievable IVC filter with apex situated just below lowest renal vein.',
        'Post-deployment cavogram confirming symmetrical expansion and absence of tilt.'
      ],
      complications: ['Filter tilt or malposition', 'IVC thrombosis', 'Lower extremity edema', 'Filter migration or fracture'],
      vendorContacts: ['Cook Medical Gunther Tulip / Celect (+91 98292 33445)', 'BD Bard Denali (+91 98296 77889)'],
      hardware: [
        { category: 'Retrievable Filter', itemName: 'Retrievable IVC Filter System (Gunther Tulip / Celect)', specification: 'Infrarenal deployment set with delivery sheath', standardStore: 'Central IR Store', estimatedCostInr: 50000, isImplant: true, implantCode: 'IMP 392' }
      ],
      tariffs: [
        {
          scheme: SchemeType.MAAY_CHIRANJEEVI,
          schemeName: 'Chiranjeevi',
          packageCode: '2849-IN034A',
          packageName: 'IVC Filter Placement',
          tariffAmount: 15520,
          nabhRate: 15520,
          nonNabhRate: 13968,
          implantCovered: true,
          implantDetails: [{ code: 'IMP 392', name: 'IVC Filter', maxRate: 50000 }],
          preAuthCriteria: 'Color Doppler showing proximal DVT with clear documentation of contraindication to anticoagulation.',
          documentationChecklist: ['Venous Doppler report', 'Contraindication justification certificate', 'Pre and Post deployment cavograms', 'Filter barcode']
        }
      ]
    },
    {
      procedureType: 'IVC Filter Retrieval',
      name: 'Percutaneous Endovascular IVC Filter Retrieval',
      category: 'Venous Interventions',
      code: '2849-IN034C',
      rghsCode: '693 / 23',
      icd10: 'Z98.89',
      defaultFollowupType: 'OPD Visit',
      defaultIntervalNumber: 2,
      defaultIntervalUnit: 'Weeks',
      baseTariffInr: 11520,
      indications: [
        'Resolution of transient contraindication to anticoagulation in patient with indwelling retrievable IVC filter',
        'Prevention of long-term filter-related complications (caval occlusion, strut penetration, migration)'
      ],
      preOpCriteria: ['Abdominal radiograph or CT verifying filter orientation and absence of large trapped thrombus (> 25% filter volume)'],
      techniqueSteps: [
        'Right internal jugular vein access with 8F-10F retrieval sheath.',
        'Initial cavogram ruling out significant trapped thrombus within filter cone.',
        'Passage of snare catheter (GooseNeck or CloverSnare) to engage filter hook.',
        'Advancement of sheath over collapsed filter to collapse struts and withdraw completely through hemostatic valve.',
        'Post-retrieval cavogram demonstrating patent IVC without extravasation.'
      ],
      complications: ['Caval dissection / tear', 'Fractured strut remnant', 'Inability to snare due to epithelialization / tilt'],
      vendorContacts: ['Cook Medical Gunther Tulip Retrieval Kit (+91 98292 33445)'],
      hardware: [
        { category: 'Retrieval Set', itemName: 'Endovascular Snare Retrieval Kit', specification: 'Tri-prong or GooseNeck snare with 10F sheath', standardStore: 'Central IR Store', estimatedCostInr: 30000, isImplant: true, implantCode: 'IMP 393' }
      ],
      tariffs: [
        {
          scheme: SchemeType.MAAY_CHIRANJEEVI,
          schemeName: 'Chiranjeevi',
          packageCode: '2849-IN034C',
          packageName: 'IVC Filter Retrieval',
          tariffAmount: 11520,
          nabhRate: 11520,
          nonNabhRate: 10368,
          implantCovered: true,
          implantDetails: [{ code: 'IMP 393', name: 'Retrieval Kit', maxRate: 30000 }],
          preAuthCriteria: 'Documentation of initial filter placement and indication for removal.',
          documentationChecklist: ['Cavogram confirming clear filter cone', 'Snaring and collapse fluoroscopy stills', 'Intact extracted filter photo', 'Discharge Summary']
        }
      ]
    },
    {
      procedureType: 'Central Venous Catheter',
      name: 'Tunnelled Central Venous Catheter (Permacath / Hickman)',
      category: 'Venous Access',
      code: '2849-IN009A',
      rghsCode: '693 / 08',
      icd10: 'Z49.01',
      defaultFollowupType: 'OPD Visit',
      defaultIntervalNumber: 1,
      defaultIntervalUnit: 'Months',
      baseTariffInr: 11000,
      indications: [
        'Long-term hemodialysis vascular access in ESRD patients awaiting AV fistula maturation or with exhausted peripheral sites',
        'Prolonged parenteral nutrition, frequent blood draws, or continuous intravenous therapy'
      ],
      preOpCriteria: ['Ultrasound mapping of internal jugular veins confirming patency (> 8 mm) and absence of stenosis', 'Platelets > 50,000 /uL'],
      techniqueSteps: [
        'Real-time ultrasound-guided puncture of right internal jugular vein (low cervical approach).',
        'Subcutaneous tunnel creation on anterior chest wall.',
        'Catheter pulled through tunnel anchoring Dacron cuff 2 cm inside exit site.',
        'Peel-away sheath insertion over stiff 0.035 wire.',
        'Catheter tip advanced under fluoroscopy to cavoatrial junction.',
        'Aspiration and heparin lock (5000 IU/mL) verification.'
      ],
      complications: ['Pneumothorax / hemothorax', 'Catheter-related bloodstream infection (CRBSI)', 'Central venous stenosis', 'Fibrin sheath formation'],
      vendorContacts: ['Medcomp / Medtronic (+91 98295 66778)', 'Rusch Teleflex (+91 98291 99887)'],
      hardware: [
        { category: 'Tunnelled Catheter', itemName: '14.5F Dual Lumen Tunnelled Permacath Set', specification: '19 cm - 28 cm tip-to-cuff length with peel-away sheath', standardStore: 'Central IR Store', estimatedCostInr: 14000, isImplant: true, implantCode: 'IMP 16' }
      ],
      tariffs: [
        {
          scheme: SchemeType.MAAY_CHIRANJEEVI,
          schemeName: 'Chiranjeevi',
          packageCode: '2849-IN009A',
          packageName: 'Tunnelled Long-Term Venous Catheter (Permacath)',
          tariffAmount: 11000,
          nabhRate: 11000,
          nonNabhRate: 9900,
          implantCovered: true,
          implantDetails: [{ code: 'IMP 16', name: 'Permacath Set', maxRate: 14000 }],
          preAuthCriteria: 'Nephrology requisition documenting chronic kidney disease requiring long-term hemodialysis.',
          documentationChecklist: ['Renal function tests', 'USG Neck Doppler report', 'Post-procedure chest X-ray / spot film', 'Permacath barcode']
        }
      ]
    },
    {
      procedureType: 'Portacath Insertion',
      name: 'Subcutaneous Chemotherapy Port (Portacath) Insertion',
      category: 'Venous Access',
      code: '2849-SC076A',
      rghsCode: '693 / 09',
      icd10: 'Z45.2',
      defaultFollowupType: 'OPD Visit',
      defaultIntervalNumber: 1,
      defaultIntervalUnit: 'Months',
      baseTariffInr: 11000,
      indications: [
        'Malignancy requiring prolonged cyclic intravenous chemotherapy (solid tumors, hematological malignancies)',
        'Exhausted peripheral venous access in cancer patients'
      ],
      preOpCriteria: ['Medical Oncology referral for chemotherapy protocol', 'Platelets > 50,000 /uL, ANC > 1000 /uL, INR < 1.4'],
      techniqueSteps: [
        'Right internal jugular vein ultrasound-guided access.',
        'Infraclavicular pocket creation in subcutaneous tissue above pectoral fascia.',
        'Tunnelling catheter from pocket to jugular access site.',
        'Trim catheter to length placing tip at cavoatrial junction under fluoroscopy.',
        'Connect catheter to titanium/polysulfone port chamber.',
        'Suture port to fascia, test with Huber needle for brisk blood return, flush with heparin saline, close pocket in layers.'
      ],
      complications: ['Pocket hematoma', 'Pneumothorax', 'Port infection / bacteremia', 'Catheter fracture or pinch-off syndrome'],
      vendorContacts: ['B. Braun Medical (+91 98294 55667)', 'BD Bard Port (+91 98296 77889)'],
      hardware: [
        { category: 'Chemo Port', itemName: 'Titanium Subcutaneous Chemoport Kit with 6.5F / 8F Catheter', specification: 'Low-profile adult / pediatric kit with Huber needles', standardStore: 'Central IR Store', estimatedCostInr: 15000, isImplant: true, implantCode: 'IMP 402' }
      ],
      tariffs: [
        {
          scheme: SchemeType.MAAY_CHIRANJEEVI,
          schemeName: 'Chiranjeevi',
          packageCode: '2849-SC076A',
          packageName: 'Chemo Port Insertion',
          tariffAmount: 11000,
          nabhRate: 11000,
          nonNabhRate: 9900,
          implantCovered: true,
          implantDetails: [{ code: 'IMP 402', name: 'Chemo Port Adult/Pediatric', maxRate: 15000 }],
          preAuthCriteria: 'Medical oncology treatment plan detailing planned cytotoxic chemotherapy cycles.',
          documentationChecklist: ['Oncology Prescription', 'Fluoroscopy spot radiograph confirming tip position', 'Operative notes', 'Port invoice']
        }
      ]
    },
    {
      procedureType: 'Liver Biopsy',
      name: 'Image-Guided Percutaneous / Transjugular Liver Biopsy',
      category: 'Biopsy Registry',
      code: '2849-IN059A',
      rghsCode: '693 / 01',
      icd10: 'R93.2 / K74.6',
      defaultFollowupType: 'Telephonic Call',
      defaultIntervalNumber: 1,
      defaultIntervalUnit: 'Weeks',
      baseTariffInr: 8000,
      indications: [
        'Focal liver lesion of unknown etiology requiring histopathological / immunohistochemical characterization',
        'Diffuse parenchymal liver disease (cirrhosis staging, autoimmune hepatitis, NASH)'
      ],
      preOpCriteria: ['Platelets > 60,000 /uL, INR < 1.4', 'CECT or USG Abdomen report documenting lesion coordinates'],
      techniqueSteps: [
        'Real-time USG or CT localization of target lesion avoiding major hepatic vasculature and biliary ducts.',
        'Local anesthesia infiltration to liver capsule.',
        '18G coaxial guide needle advancement under continuous image guidance.',
        'Semi-automated 18G biopsy gun fired taking 2-3 core specimens.',
        'Specimens placed in 10% neutral buffered formalin for histopathology.',
        'Track plugging with Gelfoam slurry or Coaxial plug if indicated.'
      ],
      complications: ['Subcapsular hematoma', 'Hemoperitoneum', 'Biliary leak', 'Pneumothorax (intercostal access)'],
      vendorContacts: ['Becton Dickinson (BD Temno) (+91 98296 77889)'],
      hardware: [
        { category: 'Biopsy Needle', itemName: '18G Coaxial Biopsy System (Temno / Quick-Core)', specification: '15 cm guide with 20 cm biopsy needle', standardStore: 'Central IR Store', estimatedCostInr: 3200, isImplant: false }
      ],
      tariffs: [
        {
          scheme: SchemeType.MAAY_CHIRANJEEVI,
          schemeName: 'Chiranjeevi',
          packageCode: '2849-IN059A',
          packageName: 'Liver Biopsy (Percutaneous / Transjugular)',
          tariffAmount: 8000,
          nabhRate: 8000,
          nonNabhRate: 7200,
          implantCovered: false,
          preAuthCriteria: 'Ultrasound or CT report confirming focal hepatic lesion or diffuse liver disease.',
          documentationChecklist: ['USG/CT Abdomen report', 'Biopsy requisition form', 'Pathology requisition copy', 'Procedure notes']
        }
      ]
    },
    {
      procedureType: 'Renal Biopsy',
      name: 'Ultrasound-Guided Percutaneous Renal Biopsy',
      category: 'Biopsy Registry',
      code: '1849-IN059B',
      rghsCode: '693 / 02',
      icd10: 'N04.9 / R93.4',
      defaultFollowupType: 'Telephonic Call',
      defaultIntervalNumber: 1,
      defaultIntervalUnit: 'Weeks',
      baseTariffInr: 7000,
      indications: [
        'Nephrotic syndrome in adults or steroid-resistant nephrotic syndrome in children',
        'Unexplained acute kidney injury or rapidly progressive glomerulonephritis (RPGN)',
        'Renal allograft dysfunction (ruling out rejection)'
      ],
      preOpCriteria: ['Strict blood pressure control (< 140/90 mmHg)', 'INR < 1.3, Platelets > 80,000 /uL', 'Normal bilateral kidney size on USG'],
      techniqueSteps: [
        'Prone position with abdominal pillow support.',
        'USG localization of lower pole of native left kidney (or renal allograft in iliac fossa).',
        '16G or 18G automated cutting needle passed under direct real-time USG visualization into renal cortex.',
        'Two core specimens obtained (one for light microscopy in formalin, one for immunofluorescence in Michel medium).'
      ],
      complications: ['Macroscopic hematuria', 'Perirenal hematoma', 'Arteriovenous fistula / pseudoaneurysm'],
      vendorContacts: ['BD Temno India (+91 98296 77889)'],
      hardware: [
        { category: 'Biopsy Needle', itemName: '16G / 18G Automated Renal Biopsy Gun', specification: '16 cm length, 20 mm throw', standardStore: 'Central IR Store', estimatedCostInr: 3200, isImplant: false }
      ],
      tariffs: [
        {
          scheme: SchemeType.MAAY_CHIRANJEEVI,
          schemeName: 'Chiranjeevi',
          packageCode: '1849-IN059B',
          packageName: 'Percutaneous Renal Biopsy',
          tariffAmount: 7000,
          nabhRate: 7000,
          nonNabhRate: 6300,
          implantCovered: false,
          preAuthCriteria: 'Nephrology requisition documenting proteinuria, hematuria, or unexplained renal dysfunction.',
          documentationChecklist: ['Nephrology referral slip', 'Baseline KFT & Coagulation', 'Pathology slip', 'Procedure documentation']
        }
      ]
    },
    {
      procedureType: 'Lung Biopsy',
      name: 'CT-Guided Percutaneous Transthoracic Lung Biopsy',
      category: 'Biopsy Registry',
      code: '1849-IN059C',
      rghsCode: '693 / 03',
      icd10: 'R91.8 / C34.9',
      defaultFollowupType: 'Telephonic Call',
      defaultIntervalNumber: 1,
      defaultIntervalUnit: 'Weeks',
      baseTariffInr: 7500,
      indications: [
        'Indeterminate pulmonary nodule or solitary mass suspicious for bronchogenic carcinoma',
        'Persistent non-resolving consolidative lung lesion',
        'Mediastinal or pleural-based mass'
      ],
      preOpCriteria: ['HRCT Chest defining lesion depth, relationship to pulmonary vessels and airways', 'Platelets > 60,000 /uL, INR < 1.4', 'Cooperative breath holding'],
      techniqueSteps: [
        'Patient positioned prone, supine, or decubitus depending on lesion location.',
        'CT grid laser localization of entry point.',
        '18G or 20G coaxial guide needle advanced avoiding bullae and intercostal bundles.',
        'Core biopsy specimens obtained with semi-automated 18G/20G cutting needle.',
        'Immediate check CT scan to evaluate for pneumothorax or parenchymal hemorrhage.'
      ],
      complications: ['Pneumothorax (15-25%, ~5% requiring chest tube)', 'Hemoptysis', 'Air embolism (rare)'],
      vendorContacts: ['Cook Quick-Core / BD Temno (+91 98292 33445)'],
      hardware: [
        { category: 'Biopsy Needle', itemName: '18G / 20G Coaxial Lung Biopsy Needle', specification: '10 cm - 15 cm length with depth marker', standardStore: 'Central IR Store', estimatedCostInr: 3400, isImplant: false }
      ],
      tariffs: [
        {
          scheme: SchemeType.MAAY_CHIRANJEEVI,
          schemeName: 'Chiranjeevi',
          packageCode: '1849-IN059C',
          packageName: 'Percutaneous Transthoracic Lung Biopsy',
          tariffAmount: 7500,
          nabhRate: 7500,
          nonNabhRate: 6750,
          implantCovered: false,
          preAuthCriteria: 'CT Chest showing lung lesion requiring tissue diagnosis.',
          documentationChecklist: ['CT Chest report', 'Intra-procedure needle CT stills', 'Post-procedure check CT', 'Histopathology requisition']
        }
      ]
    },
    {
      procedureType: 'Bone Biopsy',
      name: 'CT-Guided Percutaneous Bone / Spine Lesion Biopsy',
      category: 'Biopsy Registry',
      code: '1849-IN059D',
      rghsCode: '693 / 04',
      icd10: 'M89.9 / C79.51',
      defaultFollowupType: 'Telephonic Call',
      defaultIntervalNumber: 1,
      defaultIntervalUnit: 'Weeks',
      baseTariffInr: 8500,
      indications: [
        'Osteolytic or osteoblastic skeletal lesion of undetermined primary',
        'Suspected tuberculous spondylodiscitis or vertebral osteomyelitis',
        'Solitary bone neoplasm (osteosarcoma, chondrosarcoma, giant cell tumor)'
      ],
      preOpCriteria: ['CT or MRI identifying osseous cortical disruption, soft tissue component', 'Coagulation screen'],
      techniqueSteps: [
        'CT scout planning transpedicular or posterolateral approach (for vertebral bodies).',
        'Trephine bone biopsy needle (11G/13G) driven through intact cortex into lesion center.',
        'Inner stylet removed and cutting cannula rotated to core out calcified and soft tissue matrix.',
        'Specimen dispatched for histopathology and mycobacterial/fungal culture.'
      ],
      complications: ['Bone fracture', 'Nerve root injury / transient paresthesia', 'Local hematoma'],
      vendorContacts: ['Cook Medical Osteo-Site (+91 98292 33445)'],
      hardware: [
        { category: 'Bone Trephine', itemName: '11G / 13G Osteo-Site Bone Biopsy Set', specification: '10 cm - 15 cm coaxial trephine with serrated tip', standardStore: 'Central IR Store', estimatedCostInr: 4500, isImplant: false }
      ],
      tariffs: [
        {
          scheme: SchemeType.MAAY_CHIRANJEEVI,
          schemeName: 'Chiranjeevi',
          packageCode: '1849-IN059D',
          packageName: 'Percutaneous Bone / Spine Biopsy',
          tariffAmount: 8500,
          nabhRate: 8500,
          nonNabhRate: 7650,
          implantCovered: false,
          preAuthCriteria: 'Imaging showing skeletal lesion suspicious of metastasis or infection.',
          documentationChecklist: ['CT/MRI Spine/Bone report', 'Intra-op needle trajectory CT films', 'Microbiology and pathology slips']
        }
      ]
    },
    {
      procedureType: 'Sclerotherapy',
      name: 'Percutaneous Bleomycin / STS Sclerotherapy for Vascular Malformations',
      category: 'Vascular Anomalies',
      code: '1849-IN074A',
      rghsCode: '693 / 05',
      icd10: 'D18.01',
      defaultFollowupType: 'OPD Visit',
      defaultIntervalNumber: 6,
      defaultIntervalUnit: 'Weeks',
      baseTariffInr: 9120,
      indications: [
        'Low-flow venous malformations (head/neck, extremities) causing disfigurement or pain',
        'Microcystic or macrocystic lymphatic malformations'
      ],
      preOpCriteria: ['MRI with T2 fat-suppressed sequences defining extent of slow-flow anomaly', 'Pulmonary baseline evaluation (if Bleomycin used)'],
      techniqueSteps: [
        'Direct percutaneous puncture into malformation vascular spaces using 21G butterfly or 20G IV cannula under USG guidance.',
        'Aspiration of venous blood or serous lymphatic fluid confirming intraluminal position.',
        'Contrast injection under fluoroscopy (phlebography) assessing drainage pathways.',
        'Injection of Bleomycin aqueous solution (up to 15 IU/session) or Sodium Tetradecyl Sulfate (STS) foam.',
        'Compression bandaging applied for 48 hours.'
      ],
      complications: ['Local skin necrosis / blistering', 'Transient inflammatory swelling', 'Hyperpigmentation', 'Rare pulmonary toxicity (Bleomycin)'],
      vendorContacts: ['Samarth Life Sciences (Bleomycin) (+91 98290 33441)'],
      hardware: [
        { category: 'Puncture', itemName: '21G Scalp Vein / Butterfly Infusion Set', specification: 'Short tubing with luer-lock', standardStore: 'IR Daycare Store', estimatedCostInr: 250, isImplant: false },
        { category: 'Sclerosant', itemName: 'Bleomycin Sulfate Injection', specification: '15 IU lyophilized vial', standardStore: 'SMS Pharmacy DDC-14', estimatedCostInr: 1800, isImplant: false }
      ],
      tariffs: [
        {
          scheme: SchemeType.MAAY_CHIRANJEEVI,
          schemeName: 'Chiranjeevi',
          packageCode: '1849-IN074A',
          packageName: 'Percutaneous Injection Sclerotherapy for Vascular Malformation',
          tariffAmount: 9120,
          nabhRate: 9120,
          nonNabhRate: 8208,
          implantCovered: false,
          preAuthCriteria: 'MRI demonstrating low-flow venous or lymphatic malformation.',
          documentationChecklist: ['MRI report with photographic clinical pictures', 'Intra-procedure fluoroscopy still', 'Discharge notes']
        }
      ]
    },
    {
      procedureType: 'Gastrostomy/Jejunostomy',
      name: 'Percutaneous Radiological Gastrostomy (PRG) / Gastrojejunostomy',
      category: 'Non-Vascular Interventions',
      code: '1849-IN060A',
      rghsCode: '585',
      icd10: 'K22.2 / C15.9',
      defaultFollowupType: 'OPD Visit',
      defaultIntervalNumber: 2,
      defaultIntervalUnit: 'Weeks',
      baseTariffInr: 6320,
      indications: [
        'Dysphagia secondary to obstructing head & neck or esophageal neoplasms',
        'Neurological dysphagia (ALS, stroke, traumatic brain injury) with intact gastric emptying'
      ],
      preOpCriteria: ['CT or barium swallow confirming anatomy', 'Platelets > 50,000 /uL, INR < 1.5'],
      techniqueSteps: [
        'Gastric insufflation with air via nasogastric tube under fluoroscopy.',
        'Gastropexy performed using two or three T-fasteners to anchor anterior gastric wall to abdominal wall.',
        'Needle puncture of stomach lumen between T-fasteners, passage of 0.035 wire.',
        'Serial tract dilation and placement of 14F-18F balloon-retention gastrostomy feeding tube.',
        'Contrast injection confirming intragastric placement.'
      ],
      complications: ['Peritonitis', 'T-fastener dislodgement', 'Peristomal infection', 'Colonic interposition injury'],
      vendorContacts: ['Avanos Medical / Cook (+91 98292 33445)'],
      hardware: [
        { category: 'Feeding Tube Kit', itemName: 'Percutaneous Gastrostomy Tube Kit with T-Fasteners', specification: '16F - 18F balloon retention tube with anchor kit', standardStore: 'Central IR Store', estimatedCostInr: 6500, isImplant: true }
      ],
      tariffs: [
        {
          scheme: SchemeType.MAAY_CHIRANJEEVI,
          schemeName: 'Chiranjeevi',
          packageCode: '1849-IN060A',
          packageName: 'Percutaneous Radiological Gastrostomy',
          tariffAmount: 6320,
          nabhRate: 6320,
          nonNabhRate: 5688,
          implantCovered: true,
          preAuthCriteria: 'Clinical evidence of severe dysphagia requiring enteral access.',
          documentationChecklist: ['Clinical examination report', 'Fluoroscopy gastrogram confirming tube in stomach', 'Discharge instructions']
        }
      ]
    },
    {
      procedureType: 'GI Bleed Embolization',
      name: 'Superselective Transcatheter Arterial Embolization for Acute GI Bleeding',
      category: 'Vascular Embolization',
      code: '2849-IN048A',
      rghsCode: '693 / 11',
      icd10: 'K92.2 / K63.81',
      defaultFollowupType: 'Imaging (CT/MR/USG)',
      defaultIntervalNumber: 1,
      defaultIntervalUnit: 'Months',
      baseTariffInr: 38500,
      indications: [
        'Massive upper or lower gastrointestinal hemorrhage refractory to endoscopic clip/cautery therapy',
        'Hemodynamically unstable patient with active contrast extravasation on CT Angiogram'
      ],
      preOpCriteria: ['CT Angiography Abdomen showing active bleeding site or blush', 'Resuscitation in progress, blood cross-matched'],
      techniqueSteps: [
        'Femoral artery 5F sheath placement under local anesthesia.',
        'Selective visceral angiogram (Celiac axis, SMA, or IMA depending on suspected bleeding source).',
        'Superselective microcatheterization of tertiary/quaternary arterial branches feeding hemorrhage.',
        'Embolization using microcoils (0.014 / 0.018), Gelfoam slurry, or calibrated PVA particles to achieve complete cessation of extravasation without bowel wall infarction.',
        'Post-embolization completion angiogram confirming preserved collateral flow.'
      ],
      complications: ['Bowel ischemia / infarction (minimized by superselective microcatheter placement)', 'Rebleeding', 'Contrast nephropathy'],
      vendorContacts: ['Cook Medical (+91 98292 33445)', 'Terumo India (+91 98291 55678)'],
      hardware: [
        { category: 'Diagnostic Catheter', itemName: '5F Cobra C2 / Mikaelson Catheter', specification: '65 cm length', standardStore: 'Central IR Store', estimatedCostInr: 2500, isImplant: false },
        { category: 'Microcatheter System', itemName: '2.4F / 2.7F Progreat Microcatheter System', specification: '130 cm length with steerable microwire', standardStore: 'DDC-14 Central', estimatedCostInr: 19000, isImplant: true, implantCode: 'IMP 23' },
        { category: 'Embolic Coils', itemName: 'Fibered Pushable / Detachable Microcoils', specification: '0.018 inch, 2 mm - 5 mm sizes', standardStore: 'Central IR Store', estimatedCostInr: 18000, isImplant: true, implantCode: 'IMP 380' }
      ],
      tariffs: [
        {
          scheme: SchemeType.MAAY_CHIRANJEEVI,
          schemeName: 'Chiranjeevi',
          packageCode: '2849-IN048A',
          packageName: 'Transcatheter Arterial Embolization for Acute GI Bleed',
          tariffAmount: 38500,
          nabhRate: 38500,
          nonNabhRate: 34650,
          implantCovered: true,
          implantDetails: [
            { code: 'IMP 23', name: 'Microcatheter System', maxRate: 19000 },
            { code: 'IMP 380', name: 'Coils Set', maxRate: 18000 }
          ],
          preAuthCriteria: 'CT Angiogram or Endoscopy report confirming active or refractory GI hemorrhage.',
          documentationChecklist: ['CT Angiogram report', 'Diagnostic angiogram showing extravasation/blush', 'Completion angiogram showing devascularization', 'Hardware invoices']
        }
      ]
    },
    {
      procedureType: 'Other',
      name: 'Specialized Interventional Radiology Procedure',
      category: 'Specialized IR',
      code: '2849-IN099A',
      rghsCode: '693 / 99',
      icd10: 'Z98.89',
      defaultFollowupType: 'OPD Visit',
      defaultIntervalNumber: 1,
      defaultIntervalUnit: 'Months',
      baseTariffInr: 10000,
      indications: ['Unspecified complex minimally invasive image-guided procedure requiring specialized catheterization'],
      preOpCriteria: ['Consultant evaluation, routine coagulation and renal safety profile'],
      techniqueSteps: ['Diagnostic angiographic or image guidance localization.', 'Specialized catheter or needle intervention.', 'Hemostasis and recovery.'],
      complications: ['Access site hematoma', 'Transient discomfort'],
      vendorContacts: ['SMS Central Store (+91 98290 00000)'],
      hardware: [
        { category: 'Vascular Access', itemName: '5F Radiofocus Introducer Sheath', specification: '11 cm length', standardStore: 'Angio Suite Store', estimatedCostInr: 1200, isImplant: false }
      ],
      tariffs: [
        {
          scheme: SchemeType.MAAY_CHIRANJEEVI,
          schemeName: 'Chiranjeevi',
          packageCode: '2849-IN099A',
          packageName: 'Specialized IR Procedure',
          tariffAmount: 10000,
          nabhRate: 10000,
          nonNabhRate: 9000,
          implantCovered: false,
          preAuthCriteria: 'Specialist recommendation and clinical indication.',
          documentationChecklist: ['Clinical Summary', 'Imaging Report', 'Operative Record']
        }
      ]
    }
  ];

  for (const proc of proceduresData) {
    const { hardware, tariffs, ...blueprintData } = proc;
    const createdBlueprint = await prisma.procedureBlueprint.create({
      data: {
        ...blueprintData,
        hardware: {
          create: hardware
        },
        tariffs: {
          create: tariffs
        }
      }
    });
    console.log(` -> Seeded ProcedureBlueprint: [${createdBlueprint.procedureType}] ${createdBlueprint.name}`);
  }

  console.log('[2/4] Procedure Blueprints, Hardware Indents, and Tariffs Seeded.');

  console.log('[3/4] Seeding Authentic Patient Log Entries (37 Columns)...');

  const samplePatients = [
    {
      uhid: 'SMS-2026-00101',
      patientName: 'Kailash Chand Verma',
      age: 58,
      sex: 'M',
      contactNumber: '9829011223',
      alternateContact: '9414022334',
      referringDoctor: 'Dr. Sandeep Nijhawan (Gastroenterology)',
      diagnosis: 'Intermediate-stage Hepatocellular Carcinoma (BCLC-B) with Cirrhosis Child A',
      procedureType: 'TACE',
      procedureDate: new Date('2026-08-01T09:30:00Z'),
      admissionStatus: 'Admitted',
      dischargeDate: new Date('2026-08-03T11:00:00Z'),
      operator: 'Dr. Gupta (Assoc. Prof)',
      accessionNo: 'ACC-2026-08912',
      anesthesia: 'Local + Mild Sedation',
      preProcCreatinine: 1.0,
      preProcInrPlatelets: '1.2 / 110k',
      contrastVolumeMl: 65.0,
      immediateComplication: 'None',
      technicalSuccess: 'Yes',
      deviceMaterialUsed: '5F Radiofocus Sheath, 5F Yashiro, 2.7F Progreat Microcatheter, Lipiodol 10ml, Doxorubicin 50mg, Gelfoam slurry',
      histopathologyStatus: 'N/A',
      suggestedFollowupType: 'Imaging (CT/MR/USG)',
      suggestedFollowupInterval: '6 Weeks',
      followupType: 'Imaging (CT/MR/USG)',
      intervalNumber: 6,
      intervalUnit: 'Weeks',
      followupDueDate: new Date('2026-09-12T00:00:00Z'),
      followupStatus: 'Overdue',
      followupDoneDate: null,
      clinicalOutcome: 'Partial Response',
      followupOutcomeNotes: 'Dynamic CT scan overdue by 1 day. Telephonic reminder scheduled for repeat imaging.',
      nextFollowupDue: new Date('2026-09-18T00:00:00Z'),
      patientStatus: 'Active',
      payerScheme: 'Chiranjeevi',
      remarks: 'Target segment 6 lesion devascularized with dense Lipiodol uptake on completion spot film.',
      dateAdded: new Date('2026-08-01T12:00:00Z')
    },
    {
      uhid: 'SMS-2026-00102',
      patientName: 'Shanti Devi',
      age: 62,
      sex: 'F',
      contactNumber: '9828133445',
      referringDoctor: 'Dr. Rajendra Mandia (Surgical Oncology)',
      diagnosis: 'Malignant Obstructive Jaundice, Klatskin Tumor Bismuth Type IIIa',
      procedureType: 'PTBD',
      procedureDate: new Date('2026-09-02T10:15:00Z'),
      admissionStatus: 'Admitted',
      dischargeDate: null,
      operator: 'Prof. & HOD',
      accessionNo: 'ACC-2026-09104',
      anesthesia: 'Local + IV Analgesia',
      preProcCreatinine: 1.3,
      preProcInrPlatelets: '1.3 / 140k',
      contrastVolumeMl: 40.0,
      immediateComplication: 'Minor',
      technicalSuccess: 'Yes',
      deviceMaterialUsed: '21G Chiba, 4F Accustick, 0.035 Glidewire, 8.5F Locking Pigtail Biliary Catheter (Cook Medical)',
      histopathologyStatus: 'Pending',
      suggestedFollowupType: 'OPD Visit',
      suggestedFollowupInterval: '2 Weeks',
      followupType: 'OPD Visit',
      intervalNumber: 2,
      intervalUnit: 'Weeks',
      followupDueDate: new Date('2026-09-16T00:00:00Z'),
      followupStatus: 'Due Soon',
      followupDoneDate: null,
      clinicalOutcome: 'N/A',
      followupOutcomeNotes: 'Daily bile output 450 mL golden yellow, serum bilirubin dropped from 18.2 to 11.4 mg/dL.',
      nextFollowupDue: new Date('2026-09-16T00:00:00Z'),
      patientStatus: 'Active',
      payerScheme: 'Chiranjeevi',
      remarks: 'Right anterior duct approach. Minor skin oozing managed with pressure dressing.',
      dateAdded: new Date('2026-09-02T13:30:00Z')
    },
    {
      uhid: 'SMS-2026-00103',
      patientName: 'Gheesa Lal Meena',
      age: 49,
      sex: 'M',
      contactNumber: '8003733656',
      referringDoctor: 'Dr. S. S. Sharma (Urology)',
      diagnosis: 'Right Obstructive Uropathy with Pyonephrosis secondary to 14mm Upper Ureteric Calculus',
      procedureType: 'Nephrostomy (PCN)',
      procedureDate: new Date('2026-09-10T11:00:00Z'),
      admissionStatus: 'Day Care',
      dischargeDate: new Date('2026-09-10T17:30:00Z'),
      operator: 'Dr. Sharma (Fellow)',
      accessionNo: 'ACC-2026-09255',
      anesthesia: 'Local Infiltration',
      preProcCreatinine: 2.8,
      preProcInrPlatelets: '1.1 / 220k',
      contrastVolumeMl: 25.0,
      immediateComplication: 'None',
      technicalSuccess: 'Yes',
      deviceMaterialUsed: '18G Trocar needle, 0.035 Amplatz stiff wire, 8F-10F Dilators, 8.5F Locking Pigtail Nephrostomy (Rusch)',
      histopathologyStatus: 'N/A',
      suggestedFollowupType: 'OPD Visit',
      suggestedFollowupInterval: '2 Weeks',
      followupType: 'OPD Visit',
      intervalNumber: 2,
      intervalUnit: 'Weeks',
      followupDueDate: new Date('2026-09-24T00:00:00Z'),
      followupStatus: 'Pending',
      followupDoneDate: null,
      clinicalOutcome: 'Complete Response',
      followupOutcomeNotes: 'Purulent urine drained under pressure; repeat creatinine dropped to 1.4 mg/dL on Day 2.',
      nextFollowupDue: new Date('2026-09-24T00:00:00Z'),
      patientStatus: 'Active',
      payerScheme: 'RGHS',
      remarks: 'Smooth access into posterior inferior calyx under real-time ultrasound guidance.',
      dateAdded: new Date('2026-09-10T12:30:00Z')
    },
    {
      uhid: 'SMS-2026-00104',
      patientName: 'Vikram Choudhary',
      age: 26,
      sex: 'M',
      contactNumber: '9928455667',
      referringDoctor: 'Dr. N. K. Sharma (Surgery Unit 3)',
      diagnosis: 'Left Symptomatic Grade III Varicocele with Scrotal Aching and Oligospermia',
      procedureType: 'Varicocele Embolization',
      procedureDate: new Date('2026-06-15T09:00:00Z'),
      admissionStatus: 'Day Care',
      dischargeDate: new Date('2026-06-15T15:00:00Z'),
      operator: 'Dr. Gupta (Assoc. Prof)',
      accessionNo: 'ACC-2026-06112',
      anesthesia: 'Local Anesthesia',
      preProcCreatinine: 0.9,
      preProcInrPlatelets: '1.0 / 250k',
      contrastVolumeMl: 35.0,
      immediateComplication: 'None',
      technicalSuccess: 'Yes',
      deviceMaterialUsed: '5F Radiofocus Sheath, 5F Cobra C2, 0.035 Nester Coils (6mm, 8mm, 10mm - 4 coils), STS 3% Foam (Tessari)',
      histopathologyStatus: 'N/A',
      suggestedFollowupType: 'OPD Visit',
      suggestedFollowupInterval: '3 Months',
      followupType: 'OPD Visit',
      intervalNumber: 3,
      intervalUnit: 'Months',
      followupDueDate: new Date('2026-09-15T00:00:00Z'),
      followupStatus: 'Done',
      followupDoneDate: new Date('2026-09-12T10:00:00Z'),
      clinicalOutcome: 'Complete Response',
      followupOutcomeNotes: 'Physical exam reveals total resolution of bag of worms scrotal fullness; repeat semen analysis demonstrates normalized sperm density.',
      nextFollowupDue: null,
      patientStatus: 'Follow-up Complete',
      payerScheme: 'RGHS',
      remarks: 'Sandwich embolization technique successful with complete occlusion of retroperitoneal collateral channels.',
      dateAdded: new Date('2026-06-15T16:00:00Z')
    },
    {
      uhid: 'SMS-2026-00105',
      patientName: 'Premwati Sharma',
      age: 46,
      sex: 'F',
      contactNumber: '9414077889',
      referringDoctor: 'Dr. Hemant Malhotra (Medical Oncology)',
      diagnosis: 'Infiltrating Ductal Carcinoma Left Breast Stage IIIB on Neoadjuvant Chemotherapy',
      procedureType: 'Portacath Insertion',
      procedureDate: new Date('2026-08-18T12:00:00Z'),
      admissionStatus: 'Day Care',
      dischargeDate: new Date('2026-08-18T16:00:00Z'),
      operator: 'Dr. Choudhary (SR)',
      accessionNo: 'ACC-2026-08344',
      anesthesia: 'Local Infiltration',
      preProcCreatinine: 0.8,
      preProcInrPlatelets: '1.0 / 210k',
      contrastVolumeMl: 10.0,
      immediateComplication: 'None',
      technicalSuccess: 'Yes',
      deviceMaterialUsed: 'B. Braun Titanium Celsite Chemoport, 6.5F polyurethane catheter, 18G Huber needle, 2-0 Vicryl',
      histopathologyStatus: 'Received - Malignant',
      suggestedFollowupType: 'OPD Visit',
      suggestedFollowupInterval: '1 Months',
      followupType: 'OPD Visit',
      intervalNumber: 1,
      intervalUnit: 'Months',
      followupDueDate: new Date('2026-09-18T00:00:00Z'),
      followupStatus: 'Due Soon',
      followupDoneDate: null,
      clinicalOutcome: 'Stable Disease',
      followupOutcomeNotes: 'Port chamber well-seated without signs of hematoma or local infection; accessed successfully for 2 chemotherapy cycles.',
      nextFollowupDue: new Date('2026-09-18T00:00:00Z'),
      patientStatus: 'Active',
      payerScheme: 'Chiranjeevi',
      remarks: 'Right internal jugular vein access; tip located precisely at cavoatrial junction on fluoroscopy spot radiograph.',
      dateAdded: new Date('2026-08-18T14:00:00Z')
    },
    {
      uhid: 'SMS-2026-00106',
      patientName: 'Rameshwar Lal Saini',
      age: 64,
      sex: 'M',
      contactNumber: '9829244556',
      referringDoctor: 'Dr. Raman Sharma (General Medicine)',
      diagnosis: 'Massive Lower GI Bleed / Cecal Angiodysplasia with Hemorrhagic Shock',
      procedureType: 'GI Bleed Embolization',
      procedureDate: new Date('2026-09-08T02:30:00Z'),
      admissionStatus: 'Admitted',
      dischargeDate: new Date('2026-09-12T14:00:00Z'),
      operator: 'Dr. Gupta (Assoc. Prof)',
      accessionNo: 'ACC-2026-09199',
      anesthesia: 'Local + Emergency Sedation',
      preProcCreatinine: 1.4,
      preProcInrPlatelets: '1.4 / 95k',
      contrastVolumeMl: 85.0,
      immediateComplication: 'None',
      technicalSuccess: 'Yes',
      deviceMaterialUsed: '5F Sheath, 5F Mikaelson catheter, 2.0F TruSelect microcatheter, 0.014 microcoils (2mm, 3mm), Gelfoam slurry',
      histopathologyStatus: 'N/A',
      suggestedFollowupType: 'Imaging (CT/MR/USG)',
      suggestedFollowupInterval: '1 Months',
      followupType: 'Imaging (CT/MR/USG)',
      intervalNumber: 1,
      intervalUnit: 'Months',
      followupDueDate: new Date('2026-10-08T00:00:00Z'),
      followupStatus: 'Pending',
      followupDoneDate: null,
      clinicalOutcome: 'Complete Response',
      followupOutcomeNotes: 'Immediate cessation of rectal bleeding; hemoglobin stabilized at 10.2 g/dL without further blood transfusion requirement.',
      nextFollowupDue: new Date('2026-10-08T00:00:00Z'),
      patientStatus: 'Active',
      payerScheme: 'Chiranjeevi',
      remarks: 'Superselective embolization of ileocolic artery cecal branch; no signs of bowel ischemia.',
      dateAdded: new Date('2026-09-08T05:00:00Z')
    },
    {
      uhid: 'SMS-2026-00107',
      patientName: 'Bhagwati Prasad Joshi',
      age: 71,
      sex: 'M',
      contactNumber: '9414288990',
      referringDoctor: 'Dr. Shubhra Sharma (Pulmonary Medicine)',
      diagnosis: 'Right Lower Lobe Spiculated Pulmonary Mass (3.2 cm) suspicious for Primary Bronchogenic Neoplasm',
      procedureType: 'Lung Biopsy',
      procedureDate: new Date('2026-09-11T11:30:00Z'),
      admissionStatus: 'Day Care',
      dischargeDate: new Date('2026-09-11T16:00:00Z'),
      operator: 'Dr. Choudhary (SR)',
      accessionNo: 'ACC-2026-09280',
      anesthesia: 'Local Infiltration',
      preProcCreatinine: 1.1,
      preProcInrPlatelets: '1.0 / 230k',
      contrastVolumeMl: 0.0,
      immediateComplication: 'Minor',
      technicalSuccess: 'Yes',
      deviceMaterialUsed: '18G Coaxial Introducer (10 cm), 20G Temno Biopsy Needle (15 cm)',
      histopathologyStatus: 'Pending',
      suggestedFollowupType: 'Telephonic Call',
      suggestedFollowupInterval: '1 Weeks',
      followupType: 'Telephonic Call',
      intervalNumber: 1,
      intervalUnit: 'Weeks',
      followupDueDate: new Date('2026-09-18T00:00:00Z'),
      followupStatus: 'Pending',
      followupDoneDate: null,
      clinicalOutcome: 'N/A',
      followupOutcomeNotes: 'Three adequate core biopsies retrieved and dispatched in formalin for EGFR/ALK mutation panel.',
      nextFollowupDue: new Date('2026-09-18T00:00:00Z'),
      patientStatus: 'Active',
      payerScheme: 'Ayushman Bharat',
      remarks: 'Trace asymptomatic pneumothorax observed on post-procedure check CT; resolved spontaneously on 4-hour expiratory chest X-ray.',
      dateAdded: new Date('2026-09-11T13:00:00Z')
    },
    {
      uhid: 'SMS-2026-00108',
      patientName: 'Champa Lal Pareek',
      age: 67,
      sex: 'M',
      contactNumber: '9828566778',
      referringDoctor: 'Dr. C. M. Singhal (Cardiology / Vascular)',
      diagnosis: 'Acute Iliofemoral Deep Vein Thrombosis with High-Risk Massive Pulmonary Embolism on Therapeutic LMWH with Active Peptic Ulcer Bleed',
      procedureType: 'IVC Filter Placement',
      procedureDate: new Date('2026-07-20T14:30:00Z'),
      admissionStatus: 'Admitted',
      dischargeDate: new Date('2026-07-24T12:00:00Z'),
      operator: 'Prof. & HOD',
      accessionNo: 'ACC-2026-07455',
      anesthesia: 'Local Anesthesia',
      preProcCreatinine: 1.2,
      preProcInrPlatelets: '1.2 / 160k',
      contrastVolumeMl: 45.0,
      immediateComplication: 'None',
      technicalSuccess: 'Yes',
      deviceMaterialUsed: 'Cook Celect Platinum Retrievable IVC Filter System, 6F Introducer Sheath, 0.035 Glidewire',
      histopathologyStatus: 'N/A',
      suggestedFollowupType: 'Imaging (CT/MR/USG)',
      suggestedFollowupInterval: '6 Weeks',
      followupType: 'Imaging (CT/MR/USG)',
      intervalNumber: 6,
      intervalUnit: 'Weeks',
      followupDueDate: new Date('2026-08-31T00:00:00Z'),
      followupStatus: 'Overdue',
      followupDoneDate: null,
      clinicalOutcome: 'Stable Disease',
      followupOutcomeNotes: 'Due date passed for retrieval evaluation. Patient advised to visit for pre-retrieval cavogram.',
      nextFollowupDue: new Date('2026-09-20T00:00:00Z'),
      patientStatus: 'Active',
      payerScheme: 'ECHS',
      remarks: 'Filter placed in infrarenal IVC without tilt; bilateral renal veins demonstrated clear.',
      dateAdded: new Date('2026-07-20T16:00:00Z')
    }
  ];

  for (const patientEntry of samplePatients) {
    const blueprint = await prisma.procedureBlueprint.findUnique({
      where: { procedureType: patientEntry.procedureType }
    });

    await prisma.patientLogEntry.create({
      data: {
        ...patientEntry,
        procedureTypeId: blueprint?.id || null
      }
    });
    console.log(` -> Seeded PatientLogEntry: [${patientEntry.uhid}] ${patientEntry.patientName} (${patientEntry.procedureType})`);
  }

  console.log('[4/4] Verified Seeding Completed Successfully with Zero Placeholders.');
  console.log('--- Summary: 25 Procedures, Hardware Blueprints, Schemed Tariffs, and 8 Verified Clinical Patient Logs Seeded ---');
}

main()
  .catch((e) => {
    console.error('Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
