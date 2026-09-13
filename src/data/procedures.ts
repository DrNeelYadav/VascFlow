import { ProcedureBlueprint } from '../types/clinical';

export const IR_PROCEDURES: ProcedureBlueprint[] = [
  {
    id: 'tace',
    name: 'Transarterial Chemoembolization (cTACE / DEB-TACE)',
    category: 'Interventional Oncology',
    code: '2849-IN061A',
    rghsCode: '693 / 12',
    icd10: 'C22.0 (Hepatocellular Carcinoma)',
    indications: [
      'Intermediate-stage Hepatocellular Carcinoma (BCLC Stage B)',
      'Bridging / downstaging prior to orthotopic liver transplantation',
      'Unresectable solitary HCC > 3 cm without vascular invasion or extrahepatic spread'
    ],
    preOpCriteria: [
      'Child-Pugh Class A or well-compensated Class B (Score <= 7)',
      'ECOG Performance Status 0-1',
      'Total Bilirubin < 2.5 mg/dL, Platelets > 50,000 /uL, INR < 1.5',
      'Absence of main portal vein trunk thrombosis'
    ],
    hardware: [
      { category: 'Vascular Access', name: '5F Radiofocus Introducer Sheath', spec: '11 cm length, 0.035 wire compatible', standardStore: 'Angio Suite Store' },
      { category: 'Diagnostic Catheter', name: '5F Yashiro / Cobra C2 Catheter', spec: '65 cm - 100 cm, 0.035 lumen', standardStore: 'Central IR Store' },
      { category: 'Microcatheter', name: '2.7F Progreat Microcatheter System', spec: '130 cm with 0.014 Glidewire GT', standardStore: 'DDC-14 Central' },
      { category: 'Embolic Agents', name: 'Lipiodol Ultra-Fluid (Guerbet)', spec: '10 mL ampoule', standardStore: 'SMS Pharmacy DDC-14' },
      { category: 'Chemotherapy', name: 'Inj Doxorubicin / Epirubicin', spec: '50 mg vial', standardStore: 'Oncology Pharmacy' },
      { category: 'Embolic Slurry', name: 'Gelfoam Absorbable Gelatin Sponge', spec: 'Calibrated particles 300-500 um', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Right common femoral artery ultrasound-guided puncture and 5F sheath placement.',
      'Celiac axis and superior mesenteric artery (SMA) angiography using 5F Yashiro to delineate hepatic arterial anatomy and exclude replaced right/left hepatic arteries.',
      'Triphasic CT correlation to identify tumor feeding arterial branches.',
      'Superselective cannulation of tumor feeder using 2.7F microcatheter.',
      'Stable emulsion preparation: Doxorubicin (50mg dissolved in 2-3ml contrast) mixed with 5-10ml Lipiodol in 1:2 ratio using 3-way stopcock with 20 pumping cycles.',
      'Slow fluoroscopic injection of chemoembolic emulsion under real-time subtraction until tumor vascular bed is saturated and column stasis achieved.',
      'Post-embolization completion devascularization angiogram confirming feeder occlusion and preservation of surrounding non-target branches.',
      'Manual compression hemostasis for 15-20 minutes followed by pressure dressing.'
    ],
    complications: [
      'Post-Embolization Syndrome (Fever, RUQ pain, nausea in 60-80%)',
      'Non-target embolization (cholecystitis, gastroduodenal ulceration)',
      'Acute hepatic decompensation or ischemic liver failure',
      'Contrast-Induced Acute Kidney Injury (CI-AKI)'
    ],
    maayTariffInr: 47960,
    vendorContacts: [
      'Guerbet India / Jaipur Surgical (+91 98290 12345)',
      'Terumo India Medical (+91 98291 55678)'
    ]
  },
  {
    id: 'bae',
    name: 'Bronchial Artery Embolization (BAE)',
    category: 'Vascular Embolization',
    code: '2849-MC018A',
    rghsCode: '693 / 15',
    icd10: 'R04.2 (Hemoptysis) / A15.0 (Tuberculosis)',
    indications: [
      'Massive hemoptysis (> 300 mL / 24h or > 100 mL/hr) causing hemodynamic or respiratory compromise',
      'Recurrent moderate hemoptysis secondary to bronchiectasis, sequelae of pulmonary tuberculosis, aspergilloma, or lung malignancy',
      'Failed conservative medical therapy in ICU'
    ],
    preOpCriteria: [
      'CT Thoracic Angiogram identifying hypertrophied bronchial and non-bronchial systemic arteries (NBSA)',
      'Coagulation screen: INR < 1.5, Platelets > 60,000 /uL',
      'Airway stabilization (intubation with selective lung isolation if active exsanguination)'
    ],
    hardware: [
      { category: 'Vascular Access', name: '5F Radiofocus Sheath', spec: '11 cm length', standardStore: 'Angio Suite' },
      { category: 'Diagnostic Catheter', name: '5F Mikaelson / Simmons 1 Catheter', spec: '100 cm', standardStore: 'Central IR Store' },
      { category: 'Microcatheter', name: '2.7F / 2.4F Progreat Microcatheter', spec: '130 cm with steerable 0.014 microguidewire', standardStore: 'DDC-14' },
      { category: 'Calibrated Embolics', name: 'Polyvinyl Alcohol (PVA) Particles', spec: '355 - 500 um / 500 - 710 um vials', standardStore: 'Central IR Store' },
      { category: 'Auxiliary Embolics', name: 'Pushable Fibered Microcoils', spec: '0.018 inch, 2 mm - 4 mm diameters', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Retrograde right common femoral artery puncture under local anesthesia.',
      'Descending thoracic aortogram using 5F Pigtail catheter at T4-T6 to map bronchial arterial origins and non-bronchial systemic collaterals.',
      'Selective cannulation of targeted bronchial artery using 5F Mikaelson catheter.',
      'CRITICAL SAFETY STEP: Meticulously scrutinize selective angiogram in AP and lateral projections to identify or rule out the Artery of Adamkiewicz (hairpin loop course supplying anterior spinal artery).',
      'Coaxial navigation of 2.7F microcatheter superselectively DISTAL to any spinal artery branches.',
      'Slow, pulsatile injection of calibrated PVA particles (355-500 um) suspended in dilute contrast under continuous high-resolution fluoroscopy until near-stasis.',
      'Check non-bronchial systemic arteries (intercostal, internal mammary, inferior phrenic) for additional pathological supply.',
      'Completion angiography showing complete cessation of abnormal blush and parenchymal hyperemia.'
    ],
    complications: [
      'Anterior spinal cord ischemia / transverse myelitis (if spinal feeder embolized)',
      'Transient retrosternal chest pain or dysphagia (due to ischemic mediastinitis)',
      'Bronchial wall necrosis (contraindication to absolute alcohol or tissue adhesives)'
    ],
    maayTariffInr: 30000,
    vendorContacts: [
      'Terumo India (+91 98291 55678)',
      'Cook Medical (+91 98292 33445)'
    ]
  },
  {
    id: 'ptbd',
    name: 'Percutaneous Transhepatic Biliary Drainage (PTBD) & SEMS',
    category: 'Biliary Interventions',
    code: '1849-SG105 A',
    rghsCode: '582',
    icd10: 'C24.0 (Klatskin) / K83.1 (Biliary Obstruction)',
    indications: [
      'Malignant obstructive jaundice (Klatskin tumor, gallbladder carcinoma, cholangiocarcinoma, pancreatic head mass)',
      'Failed or contraindicated endoscopic retrograde cholangiopancreatography (ERCP)',
      'Acute cholangitis requiring emergency biliary decompression'
    ],
    preOpCriteria: [
      'Pre-procedure MRCP / CECT Abdomen demonstrating dilated intrahepatic biliary radicals (IHBR)',
      'Coagulation optimization: INR < 1.4, Platelets > 75,000 /uL',
      'Prophylactic broad-spectrum IV antibiotics (Cefoperazone-Sulbactam + Metronidazole)'
    ],
    hardware: [
      { category: 'Puncture System', name: '21G Chiba Needle (15 cm)', spec: 'Echogenic tip', standardStore: 'Central IR Store' },
      { category: 'Access Set', name: 'Nephro-Drain Accustick Introducer Set', spec: '4F-6F coaxial with 0.018 Nitinol wire', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: '0.035 Stiff Hydrophilic Glidewire', spec: '260 cm, angled tip', standardStore: 'Angio Suite' },
      { category: 'Drainage Catheter', name: '8.5F / 10F Locking Pigtail Biliary Catheter', spec: 'Internal-External configuration with multi-sideholes', standardStore: 'DDC-2 Store' },
      { category: 'Metallic Stent', name: 'Self-Expanding Biliary Metallic Stent (SEMS)', spec: '10 mm x 60 mm / 80 mm bare nitinol', standardStore: 'DDC-14 Central' }
    ],
    techniqueSteps: [
      'Right mid-axillary intercostal approach (10th-11th space) under combined USG and fluoroscopic guidance.',
      'Peripheral bile duct puncture with 21G Chiba needle; confirm bile aspiration.',
      'Slow cholangiogram under fluoroscopy to define ductal anatomy and stricture length.',
      'Pass 0.018 nitinol wire, advance 4F introducer, exchange to stiff 0.035 hydrophilic wire.',
      'Careful wire manipulation across biliary stricture into duodenum.',
      'Sequential dilation of stricture tract and placement of 8.5F/10F internal-external drainage catheter with sideholes spanning above and below obstruction.',
      'Optional primary SEMS deployment across stricture with post-dilation if indicated.',
      'Anchor catheter securely to skin with 2-0 silk and fixation plate; connect to bile drainage bag.'
    ],
    complications: [
      'Hemobilia (puncture through hepatic artery or portal vein branch)',
      'Biliary peritonitis or subcapsular biloma',
      'Pneumothorax / hemothorax (high intercostal punctures)',
      'Sepsis / bacteremia'
    ],
    maayTariffInr: 16000,
    vendorContacts: [
      'Cook Medical (+91 98292 33445)',
      'Boston Scientific (+91 98290 88776)'
    ]
  },
  {
    id: 'pcn',
    name: 'Percutaneous Nephrostomy (PCN) & Antegrade DJ Stenting',
    category: 'Urinary Interventions',
    code: '1849-IN057A',
    rghsCode: '910',
    icd10: 'N13.0 (Hydronephrosis) / N13.3 (Calculus Uropathy)',
    indications: [
      'Obstructive uropathy secondary to ureteric calculi, pelvic malignancies, or strictures with sepsis / elevated creatinine',
      'Urinary diversion for malignant ureterovaginal / ureterocutaneous fistulae',
      'Antegrade access for double-J stent placement when retrograde cystoscopy fails'
    ],
    preOpCriteria: [
      'Ultrasound or NCCT KUB confirming pelvicalyceal dilation',
      'Platelets > 50,000 /uL, INR < 1.5',
      'Initiation of IV antibiotics for urosepsis'
    ],
    hardware: [
      { category: 'Puncture', name: '18G Initial Puncture Needle (Two-part trocar)', spec: '20 cm with echogenic bevel', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: '0.035 J-Tip Heavy Duty Guidewire', spec: '150 cm / 260 cm Amplatz Stiff', standardStore: 'Central IR Store' },
      { category: 'Fascial Dilators', name: 'Renal Dilator Set (6F to 10F)', spec: 'Radiopaque polyurethane', standardStore: 'Central IR Store' },
      { category: 'Catheter', name: '8.5F / 10F Locking Pigtail Nephrostomy Catheter', spec: 'Hydrophilic coating, locking string', standardStore: 'DDC-2 Store' },
      { category: 'Stent', name: '6F Double-J Ureteral Stent Set', spec: '26 cm length with pusher', standardStore: 'DDC-14' }
    ],
    techniqueSteps: [
      'Prone oblique positioning with flank elevated 30 degrees.',
      'Ultrasound identification of lower or mid-posterior renal calyx (Brodel line of avascularity).',
      '18G needle puncture under real-time ultrasound guidance into target posterior calyx.',
      'Urine aspiration and dispatch for Gram stain and culture.',
      'Nephrostogram under fluoroscopy using dilute iodinated contrast.',
      '0.035 guidewire advanced through collecting system into renal pelvis and coiled.',
      'Sequential fascial tract dilation up to 10F over stiff wire.',
      'Placement and locking of 8.5F/10F pigtail catheter in renal pelvis; verify brisk clear urine outflow.'
    ],
    complications: [
      'Renal parenchymal hematoma or retroperitoneal hemorrhage',
      'Colonic perforation (lateral retroperitoneal anatomy)',
      'Transient macroscopic hematuria',
      'Catheter dislodgement / kinking'
    ],
    maayTariffInr: 14000,
    vendorContacts: [
      'Cook Medical (+91 98292 33445)',
      'Rüsch Teleflex (+91 98291 99887)'
    ]
  },
  {
    id: 'parto_brto',
    name: 'PARTO / BRTO for Gastric Varices',
    category: 'Portal Hypertension',
    code: '2849-IN064A',
    rghsCode: '693 / 18',
    icd10: 'I85.0 (Gastric Varices) / K74.6 (Cirrhosis)',
    indications: [
      'Refractory bleeding from Sarin Type IGV1 or GOV2 gastric varices',
      'Secondary prophylaxis in cirrhosis with large gastrorenal shunt (GRS)',
      'Hepatic encephalopathy secondary to high-flow spontaneous splenorenal shunt'
    ],
    preOpCriteria: [
      'CT Venography confirming presence and caliber of gastrorenal shunt',
      'Measurement of GRS diameter for vascular plug sizing (oversize by 30-50%)',
      'Exclusion of main portal vein thrombosis'
    ],
    hardware: [
      { category: 'Access', name: '8F Cook Flexor Vascular Sheath', spec: '45 cm length', standardStore: 'Central IR Store' },
      { category: 'Vascular Plug', name: 'Amplatzer Vascular Plug II (AVP II)', spec: '10 mm - 16 mm diameter', standardStore: 'DDC-14' },
      { category: 'Microcatheter', name: '2.7F Progreat Microcatheter', spec: '130 cm', standardStore: 'DDC-14' },
      { category: 'Sclerosant', name: 'Gelfoam Slurry with STS 3% or Lipiodol', spec: '10 mL foam preparation', standardStore: 'DDC-14 Pharmacy' }
    ],
    techniqueSteps: [
      'Right common femoral or internal jugular vein access with 8F Flexor sheath.',
      'Left renal vein catheterization and selective cannulation of gastrorenal shunt.',
      'Shunt venography to measure landing zone diameter and assess collateral outflow.',
      'Deployment of oversized Amplatzer Vascular Plug II into gastrorenal shunt.',
      'Coaxial microcatheter navigation through plug mesh into gastric variceal nidus.',
      'Injection of Gelfoam slurry and sclerosant (STS 3% + Lipiodol) into gastric variceal complex.',
      'Confirmation of complete stagnation and thrombosis of gastric varices on delayed venogram.'
    ],
    complications: [
      'Plug migration into inferior vena cava or pulmonary circulation',
      'Aggravation of esophageal varices due to diversion of portal hypertension',
      'Renal vein thrombosis or hemoglobinuria'
    ],
    maayTariffInr: 54000,
    vendorContacts: [
      'Abbott Vascular / Amplatzer (+91 98293 44556)',
      'Guerbet Lipiodol (+91 98290 12345)'
    ]
  },
  {
    id: 'pve',
    name: 'Portal Vein Embolization (PVE)',
    category: 'Surgical Oncology Prep',
    code: '2849-IN065A',
    rghsCode: '693 / 22',
    icd10: 'C22.0 (HCC) / C22.1 (Cholangiocarcinoma)',
    indications: [
      'Pre-operative induction of Future Liver Remnant (FLR) hypertrophy prior to extended right hepatectomy',
      'Baseline FLR volume < 20-25% in normal liver or < 30-40% in cirrhotic liver'
    ],
    preOpCriteria: [
      'Volumetric CT measuring total liver volume and standardized FLR',
      'Absence of tumor thrombus in left portal vein branch'
    ],
    hardware: [
      { category: 'Puncture', name: '21G Chiba Needle', spec: '15 cm echogenic', standardStore: 'Central IR Store' },
      { category: 'Introducer', name: '4F-5F Vascular Sheath', spec: '11 cm', standardStore: 'Angio Suite' },
      { category: 'Catheter', name: '5F Omni Flush / Cobra C2', spec: '65 cm', standardStore: 'Central IR Store' },
      { category: 'Embolic', name: 'Histoacryl (n-BCA) Glue + Lipiodol', spec: '1:1 to 1:2 ratio with 5% Dextrose flush', standardStore: 'DDC-14' }
    ],
    techniqueSteps: [
      'Ipsilateral (right) or contralateral (left) transhepatic portal vein branch puncture.',
      'Portography to document portal branching anatomy and baseline portal venous pressures.',
      'Superselective cannulation of all right portal branches (Segments 5, 6, 7, 8 and optional segment 4).',
      'Embolization using n-BCA glue-Lipiodol emulsion or calibrated particles with coils.',
      'Completion portogram confirming total occlusion of right portal branches with preserved, augmented left portal venous inflow.',
      'Track embolization with coils/Gelfoam during sheath withdrawal to prevent hemoperitoneum.'
    ],
    complications: [
      'Non-target embolization to left portal vein (FLR failure)',
      'Subcapsular hematoma or bile leak',
      'Transient transaminitis'
    ],
    maayTariffInr: 45000,
    vendorContacts: [
      'B. Braun Medical (+91 98294 55667)',
      'Guerbet India (+91 98290 12345)'
    ]
  },
  {
    id: 'avm',
    name: 'Peripheral & Hand AVM Embolization',
    category: 'Vascular Anomalies',
    code: '2849-IN049B',
    rghsCode: '693 / 25',
    icd10: 'Q27.31 (Upper Extremity AVM)',
    indications: [
      'High-flow arteriovenous malformations (Yakes Type II / Cho Type III) with pain, ischemic steal, ulceration, or bleeding',
      'Functional disability of hand or extremity'
    ],
    preOpCriteria: [
      'Diagnostic digital subtraction angiography and dynamic contrast MRI defining nidal architecture and draining veins',
      'Allened test and distal ischemic perfusion assessment'
    ],
    hardware: [
      { category: 'Access', name: '5F Radial / Femoral Sheath', spec: '11 cm', standardStore: 'Angio Suite' },
      { category: 'Microcatheter', name: 'Marathon / Headway DMSO-compatible Microcatheter', spec: '150 cm', standardStore: 'Central IR Store' },
      { category: 'Liquid Embolic', name: 'Onyx-18 / Onyx-34 (EVOH)', spec: '1.5 mL vial with DMSO solvent', standardStore: 'DDC-14' }
    ],
    techniqueSteps: [
      'Superselective cannulation of feeding arterial pedicles.',
      'Coaxial microcatheter navigation into intra-nidal core.',
      'DMSO dead-space priming followed by controlled slow injection of Onyx under roadmap fluoroscopy.',
      'Complete casting of abnormal nidal tangle and proximal venous outflow.',
      'Careful microcatheter retrieval after standard reflux pause.'
    ],
    complications: [
      'Non-target distal finger ischemia',
      'Skin necrosis or ulceration',
      'Transient DMSO breath odor'
    ],
    maayTariffInr: 58000,
    vendorContacts: ['Medtronic India (+91 98295 66778)']
  },
  {
    id: 'varicocele',
    name: 'Varicocele Embolization',
    category: 'Venous Interventions',
    code: '2849-IN020B',
    rghsCode: '693 / 17',
    icd10: 'I86.1 (Scrotal Varices)',
    indications: [
      'Grade II-III symptomatic varicocele with dull scrotal aching pain',
      'Subfertility with abnormal semen parameters (oligoasthenoteratozoospermia)',
      'Adolescent testicular volume loss > 20%'
    ],
    preOpCriteria: [
      'Scrotal Doppler demonstrating pampiniform venous diameter > 3.0 mm with retrograde reflux on Valsalva',
      'Semen analysis optimization'
    ],
    hardware: [
      { category: 'Access', name: '5F Radiofocus Sheath', spec: 'Femoral or Right Jugular', standardStore: 'Angio Suite' },
      { category: 'Catheter', name: '5F Cobra C2 / Simmons 1', spec: '65 cm', standardStore: 'Central IR Store' },
      { category: 'Embolic Coils', name: '0.035 Nester / Tornado Embolization Coils', spec: '6 mm - 12 mm diameters', standardStore: 'Central IR Store' },
      { category: 'Sclerosant', name: 'Sodium Tetradecyl Sulfate (STS 3%) Foam', spec: 'Tessari method with air/contrast', standardStore: 'DDC-2' }
    ],
    techniqueSteps: [
      'Catheterization of left internal spermatic vein (ISV) at its junction with left renal vein.',
      'Retrograde spermatic venography with patient performing Valsalva maneuver.',
      'Catheter advancement to level of inguinal ligament.',
      'Sandwich embolization: distal coils at inguinal canal, middle segment STS 3% sclerosant foam, proximal coils below left renal vein junction.',
      'Post-embolization completion venogram confirming complete occlusion and absence of parallel collateral channels.'
    ],
    complications: [
      'Pampiniform thrombophlebitis',
      'Spermatic vein extravasation or spasm',
      'Coil migration'
    ],
    maayTariffInr: 22000,
    vendorContacts: ['Cook Medical (+91 98292 33445)']
  },
  {
    id: 'central_venoplasty',
    name: 'Central Venoplasty & Venous Stenting',
    category: 'Hemodialysis Access',
    code: '2849-IN026C',
    rghsCode: '583',
    icd10: 'I87.1 (Central Venous Stenosis)',
    indications: [
      'High-grade symptomatic central venous stenosis (brachiocephalic / subclavian / SVC) in hemodialysis patients with ipsilateral AV fistula/graft',
      'Severe arm edema, prolonged bleeding after dialysis puncture, or dynamic venous pressure > 200 mmHg'
    ],
    preOpCriteria: [
      'Fistulogram / central venogram confirming stenosis > 50% with hemodynamic collateralization',
      'Platelets > 50,000 /uL'
    ],
    hardware: [
      { category: 'Access', name: '7F-8F Vascular Sheath', spec: '11 cm', standardStore: 'Angio Suite' },
      { category: 'High-Pressure Balloon', name: 'Conquest / Atlas PTA Balloon', spec: '10 mm - 14 mm x 40 mm (burst pressure > 24 atm)', standardStore: 'Central IR Store' },
      { category: 'Venous Stent', name: 'Self-Expanding Wallstent / Fluency Covered Stent', spec: '12 mm - 16 mm x 60 mm', standardStore: 'DDC-14' }
    ],
    techniqueSteps: [
      'Antegrade cannulation through venous outflow of AV fistula or femoral vein access.',
      'Central venogram defining exact location and length of stenosis.',
      'Passage of 0.035 stiff wire across high-grade lesion into right atrium.',
      'High-pressure balloon angioplasty with full waist effacement.',
      'Deployment of self-expanding bare metallic stent or covered stent if acute elastic recoil (> 30%) or persistent trans-stenotic gradient exists.',
      'Completion venogram showing brisk unrestricted flow into right atrium without collateral fill.'
    ],
    complications: [
      'Central vein rupture / mediastinal hematoma',
      'Stent migration to right ventricle / pulmonary artery',
      'Acute access thrombosis'
    ],
    maayTariffInr: 42000,
    vendorContacts: ['BD Bard (+91 98296 77889)', 'Boston Scientific (+91 98290 88776)']
  },
  {
    id: 'evla',
    name: 'Endovenous Laser Ablation (EVLA 1470nm)',
    category: 'Superficial Venous',
    code: 'RGHS-492',
    rghsCode: '492',
    icd10: 'I83.9 (Varicose Veins)',
    indications: [
      'Symptomatic varicose veins (CEAP C2-C6) with saphenofemoral junction (SFJ) or saphenopopliteal junction (SPJ) incompetence and reflux > 0.5s',
      'Venous stasis dermatitis, lipodermatosclerosis, or active venous leg ulceration (C6)'
    ],
    preOpCriteria: [
      'Standing duplex venous mapping documenting GSV/SSV diameter and reflux time',
      'Exclusion of acute deep vein thrombosis (DVT)'
    ],
    hardware: [
      { category: 'Laser System', name: '1470nm Diode Laser Generator & Radial 2-ring Fiber', spec: 'Radial emission tip', standardStore: 'IR Daycare Store' },
      { category: 'Access', name: '4F-6F Micro-Introducer Sheath', spec: '7 cm', standardStore: 'IR Daycare' },
      { category: 'Anesthesia', name: 'Tumescent Anesthesia Solution', spec: '500 mL cold saline with 2% lignocaine, sodium bicarbonate, and adrenaline', standardStore: 'SMS Pharmacy' }
    ],
    techniqueSteps: [
      'Ultrasound-guided cannulation of Great Saphenous Vein at knee or upper calf.',
      'Advance 1470nm radial laser fiber to 2.0 cm distal to saphenofemoral junction (SFJ) under direct transverse USG visualization.',
      'Ultrasound-guided perivenous tumescent local anesthesia injection along entire length of treated saphenous vein (halo sign).',
      'Laser energy delivery at 6-8 Watts in continuous pullback mode delivering 60-80 Joules/cm (LEED).',
      'Post-ablation duplex scan verifying immediate non-compressibility and absence of endovenous heat-induced thrombosis (EHIT) into femoral vein.',
      'Immediate application of Class II graduated compression stocking.'
    ],
    complications: [
      'Endovenous Heat-Induced Thrombosis (EHIT)',
      'Saphenous nerve paresthesia',
      'Skin burn (prevented by adequate tumescent volume)'
    ],
    maayTariffInr: 25000,
    vendorContacts: ['Biolitec India (+91 98297 88990)']
  }
];
