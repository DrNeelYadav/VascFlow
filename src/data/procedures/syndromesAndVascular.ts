import { ProcedureBlueprint } from '../../types/clinical';

export const SYNDROMES_AND_VASCULAR_PROCEDURES: ProcedureBlueprint[] = [
  {
    id: 'budd-chiari-hv-angioplasty',
    name: 'Budd-Chiari Syndrome: Hepatic Vein Balloon Angioplasty & Recanalization',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN071A',
    rghsCode: '693 / 41',
    icd10: 'I82.0 (Budd-Chiari syndrome)',
    indications: [
      'Symptomatic short-segment (< 2 cm) membranous or fibrotic hepatic vein web / stenosis',
      'Refractory ascites, congestive hepatopathy, and portal hypertension secondary to hepatic venous outflow tract obstruction',
      'Early-stage Budd-Chiari syndrome with preserved liver parenchyma and patent downstream segment'
    ],
    preOpCriteria: [
      'Multiphasic CT/MRI liver with hepatic venous phase delineating focal hepatic vein obstruction and accessory inferior right hepatic vein anatomy',
      'Liver function panel: Total Bilirubin, INR, Serum Albumin, MELD score calculation',
      'Baseline Doppler ultrasound documenting reversed/absent hepatic vein flow and congested spider-web intrahepatic collaterals',
      'Platelet count >= 50,000/uL and INR <= 1.5 (correct with FFP/platelets as necessary)'
    ],
    hardware: [
      { category: 'Vascular Access', name: '7F/8F 45cm Ansel / Flexor Introducer Sheath', spec: '8F, 45 cm curved tip', standardStore: 'Angio Suite Store' },
      { category: 'Crossing Wire / Needle', name: '0.035" Radiofocus Stiff Glidewire & Rösch-Uchida Transjugular Needle', spec: 'Angled tip 260 cm wire, 16G trocar needle', standardStore: 'Central IR Store' },
      { category: 'Diagnostic Catheter', name: '5F Multipurpose / Cobra C2 / MPA Catheter', spec: '100 cm, 0.035" lumen', standardStore: 'Central IR Store' },
      { category: 'High Pressure PTA Balloon', name: 'Conquest / Atlas Gold PTA Dilatation Balloon', spec: '8 mm - 12 mm diameter x 40 mm length, non-compliant rated up to 24-30 atm', standardStore: 'Angio Suite Store' },
      { category: 'Inflation Device', name: '20 mL / 30 atm High-Pressure Endoflator', spec: 'Calibrated analog manometer with 3-way high pressure stopcock', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Ultrasound-guided right internal jugular vein (RIJV) puncture and placement of an 8F 45cm vascular sheath directed into the suprahepatic IVC.',
      'Suprahepatic cavography and selective catheterization of the thrombosed/stenosed hepatic vein ostium using a 5F MPA or Cobra catheter.',
      'Engagement and sharp or blunt recanalization across the membranous web using a stiff 0.035" hydrophilic angled wire supported by catheter or 16G Rösch-Uchida needle under dual-plane fluoroscopic guidance.',
      'Advancement of wire into distal hepatic vein branch followed by catheter exchange over an extra-stiff exchange wire (Amplatz Super Stiff 260 cm).',
      'Direct pressure gradient measurement across the lesion between the parenchymal hepatic vein wedged position and the right atrium/IVC (normal gradient <= 3-5 mmHg).',
      'Serial graded balloon dilatation using high-pressure non-compliant balloons (initial 6 mm, escalating to 10-12 mm) with full effacement of the fibrotic waist verified under fluoroscopy.',
      'Completion hepatic venography and pullback pressure gradient measurement verifying outflow restoration and gradient reduction to < 5 mmHg.',
      'Manual compression of the neck puncture site for 10 minutes followed by sterile dressing and initiation of systemic low molecular weight heparin bridging.'
    ],
    complications: [
      'Hepatic vein rupture / intra-peritoneal capsular hemorrhage (emergency balloon tamponade/covered stent required)',
      'Subcapsular hepatic hematoma',
      'Thromboembolism to pulmonary arterial tree',
      'Early recoil and acute re-thrombosis (necessitating secondary bare metal stenting)'
    ],
    maayTariffInr: 45000,
    vendorContacts: [
      'Cook Medical India (+91 98292 33445)',
      'BD Bard Interventional (+91 98290 88712)',
      'Terumo India Medical (+91 98291 55678)'
    ]
  },
  {
    id: 'budd-chiari-hv-stenting',
    name: 'Budd-Chiari Syndrome: Hepatic Vein Self-Expanding Bare Metallic Stenting (Wallstent / E-Luminexx)',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN071B',
    rghsCode: '693 / 42',
    icd10: 'I82.0 (Budd-Chiari syndrome)',
    indications: [
      'Significant residual stenosis (> 30%) or persistent trans-stenotic pressure gradient > 5 mmHg after balloon angioplasty of hepatic vein',
      'Elastic recoil, flow-limiting intimal dissection, or recurrent hepatic vein occlusion post-angioplasty',
      'Long-segment fibrotic hepatic venous obstruction unsuitable for balloon dilation alone'
    ],
    preOpCriteria: [
      'Pre-op CECT/MRI Abdomen demonstrating hepatic venous obstruction with viable downstream hepatic parenchyma',
      'Baseline trans-stenotic hepatic venous pressure gradient documented during index intervention',
      'Stable baseline coagulation and platelet parameters (INR < 1.5, Platelets > 50,000/uL)'
    ],
    hardware: [
      { category: 'Vascular Access', name: '8F - 10F 45cm Flexor Introducer Sheath', spec: '8F/9F/10F, 45 cm braided shaft', standardStore: 'Angio Suite Store' },
      { category: 'Guidewire', name: 'Amplatz Super Stiff / Rosen Guidewire', spec: '0.035", 260 cm, 1 cm short flexible tip', standardStore: 'Central IR Store' },
      { category: 'Pre-Dilatation Balloon', name: 'Mustang / Conquest PTA Balloon', spec: '8 mm - 10 mm x 40 mm', standardStore: 'Angio Suite Store' },
      { category: 'Self-Expanding Stent', name: 'Venous Self-Expanding Metallic Stent (Wallstent / E-Luminexx / Epic)', spec: '10 mm - 14 mm diameter x 40-60 mm length', standardStore: 'Central IR Store' },
      { category: 'Post-Dilatation Balloon', name: 'Atlas Gold PTA Balloon', spec: '10 mm - 12 mm x 40 mm non-compliant', standardStore: 'Angio Suite Store' }
    ],
    techniqueSteps: [
      'Transjugular access via right internal jugular vein with 9F/10F 45cm sheath parked in IVC above the hepatic vein confluence.',
      'Recanalization of the obstructed hepatic vein using a 5F MPA catheter and angled hydrophilic stiff guidewire, followed by wire exchange for an Amplatz Super Stiff wire anchored deep in a peripheral hepatic vein branch.',
      'Pre-dilatation with an 8 mm or 10 mm high-pressure balloon to prep the fibrotic tract and establish a runway.',
      'Precise deployment of a self-expanding bare metallic stent (10-14 mm diameter, sized 10-20% larger than normal reference vein), ensuring 5-10 mm protrusion into the IVC to prevent ostial slippage without jailing the contralateral hepatic vein or compromising cava flow.',
      'Post-dilation with a 10 mm - 12 mm non-compliant balloon to ensure complete stent wall apposition and eliminate residual waist.',
      'Hemodynamic pullback pressure recording from distal hepatic vein to right atrium confirming abolition of trans-stenotic gradient (residual gradient <= 3 mmHg).',
      'Completion multi-angle DSA confirming brisk, unrestricted hepatofugal hepatic parenchymal drainage into the IVC.',
      'Femoral/jugular access closure and indefinite oral anticoagulation initiation post-procedure.'
    ],
    complications: [
      'Stent migration into the IVC or right atrium / right ventricle',
      'Hepatic venous rupture / hemoperitoneum',
      'Acute in-stent thrombosis (requires emergency thrombolysis/mechanical thrombectomy)',
      'Late in-stent intimal hyperplasia'
    ],
    maayTariffInr: 58000,
    vendorContacts: [
      'Boston Scientific India (+91 98293 44556)',
      'BD Bard Interventional (+91 98290 88712)',
      'Medtronic India (+91 98294 11223)'
    ]
  },
  {
    id: 'budd-chiari-dips',
    name: 'Budd-Chiari Syndrome: Direct Intrahepatic Portosystemic Shunt (DIPS) Transcaval Puncture',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN071C',
    rghsCode: '693 / 43',
    icd10: 'I82.0 (Budd-Chiari syndrome) / K76.6 (Portal hypertension)',
    indications: [
      'Complete, extensive occlusion/obliteration of all three major hepatic veins and accessory veins refractory to angioplasty or stenting',
      'Budd-Chiari syndrome with refractory ascites, hydrothorax, or recurrent bleeding esophageal/gastric varices',
      'Caudate lobe hypertrophy compressing the intrahepatic IVC with failed conventional transjugular intrahepatic portosystemic shunt (TIPS)'
    ],
    preOpCriteria: [
      'Multiphasic CT/MRI Abdomen demonstrating absent/fibrosed hepatic venous trunks, patent portal vein trunk/bifurcation, and retrohepatic IVC anatomy',
      'Endoscopic assessment of varices; echocardiography excluding pulmonary hypertension / severe right ventricular dysfunction',
      'MELD score, serum bilirubin, creatinine, and baseline hepatic encephalopathy grading',
      'Coagulation correction: INR < 1.6, Platelets > 50,000/uL'
    ],
    hardware: [
      { category: 'Vascular Access', name: '10F 40cm TIPS Introducer Sheath', spec: '10F outer sheath, radiopaque marker tip', standardStore: 'Angio Suite Store' },
      { category: 'Puncture Set', name: 'Rösch-Uchida Transjugular Liver Access Set / Colapinto Needle', spec: '16G / 14G trocar needle with 5F catheter set', standardStore: 'Central IR Store' },
      { category: 'Intravascular Ultrasound (IVUS)', name: 'IVUS Catheter & Console (Volcano / Visions PV .035)', spec: '8.2F, 0.035" compatible IVUS probe', standardStore: 'Angio Suite Store' },
      { category: 'TIPS Stent Graft', name: 'VIATORR TIPS Endoprosthesis (W.L. Gore)', spec: '10 mm diameter (70 mm covered / 20 mm bare)', standardStore: 'Central IR Store' },
      { category: 'PTA Balloon', name: 'Mustang / Conquest PTA Balloon', spec: '8 mm - 10 mm x 60 mm', standardStore: 'Angio Suite Store' }
    ],
    techniqueSteps: [
      'Ultrasound-guided cannulation of the right internal jugular vein and placement of a 10F 40cm TIPS sheath into the intrahepatic IVC.',
      'Intravascular ultrasound (IVUS) guidance or biplane fluoroscopic targeting aligned with the main portal vein bifurcation from the anterior IVC wall.',
      'Direct transcaval liver puncture from the anterior wall of the intrahepatic IVC directly traversing caudate lobe parenchyma into the portal vein bifurcation or main portal vein trunk using a 16G Rösch-Uchida needle.',
      'Aspiration of portal venous blood and diagnostic portogram confirming robust intrahepatic/extrahepatic portal venous anatomy and measuring baseline portal systemic pressure gradient (PSG).',
      'Exchange of Rösch-Uchida needle over a 0.035" stiff wire (Amplatz / Roadrunner) for a 5F MPA catheter, followed by balloon dilation of the parenchymal tract using an 8 mm x 60 mm balloon.',
      'Deployment of a 10 mm controlled-expansion polytetrafluoroethylene (ePTFE) covered stent-graft (Viatorr) extending from the portal vein bifurcation across the caudate tract directly into the IVC lumen.',
      'Post-dilation of the stent graft to 8-10 mm diameter under fluoroscopic observation.',
      'Post-shunt portography and manometry verifying brisk flow through DIPS shunt, decompression of mesenteric veins/varices, and reduction of PSG to < 12 mmHg (or > 50% drop from baseline).'
    ],
    complications: [
      'Intraperitoneal hemorrhage from extrahepatic portal or IVC laceration',
      'Biliary fistula / hemobilia',
      'Hepatic encephalopathy (grade II-IV)',
      'Acute shunt thrombosis or stent-graft migration'
    ],
    maayTariffInr: 95000,
    vendorContacts: [
      'W.L. Gore & Associates India (+91 98290 99881)',
      'Cook Medical (+91 98292 33445)',
      'Boston Scientific (+91 98293 44556)'
    ]
  },
  {
    id: 'budd-chiari-ivc-membranotomy',
    name: 'Budd-Chiari Syndrome: IVC Membranotomy with Cutting Balloon & Stenting',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN071D',
    rghsCode: '693 / 44',
    icd10: 'I82.0 (Budd-Chiari syndrome) / Q26.8 (Congenital anomaly of IVC)',
    indications: [
      'Congenital or post-thrombotic web/membrane of the suprahepatic or intrahepatic IVC causing severe outflow stenosis or complete occlusion',
      'Lower extremity edema, severe stasis ulceration, hepatomegaly, and intractable ascites secondary to IVC hypertension',
      'Elevated caval pressure gradient (> 5-10 mmHg) across the membranous segment'
    ],
    preOpCriteria: [
      'Contrast-enhanced abdominal CT/MRI or cavography demonstrating suprahepatic IVC web / diaphragm with collateral flow via azygos/hemiazygos veins',
      'Duplex ultrasound of lower extremity deep veins to rule out concurrent deep vein thrombosis',
      'Baseline renal and liver function panels, INR < 1.5, Platelets > 50,000/uL'
    ],
    hardware: [
      { category: 'Vascular Access', name: 'Dual Access Sheaths (Femoral + Jugular)', spec: '10F 11cm Right Femoral Sheath + 8F 45cm RIJV Sheath', standardStore: 'Angio Suite Store' },
      { category: 'Puncture / Recanalization', name: 'Brockenbrough Transseptal Needle / Rösch-Uchida Trocar', spec: '16G-18G transseptal puncture needle', standardStore: 'Central IR Store' },
      { category: 'Cutting / Focal Balloon', name: 'Peripheral Cutting Balloon / Scoreflex / Ultraverse PTA', spec: '8 mm - 12 mm diameter x 20-40 mm length', standardStore: 'Central IR Store' },
      { category: 'Large-Bore Stent', name: 'Large-Bore Dedicated Venous Stent (Wallstent / Sinus-XL / Venovo)', spec: '18 mm - 24 mm diameter x 60-80 mm length', standardStore: 'Angio Suite Store' },
      { category: 'High-Pressure Dilatation Balloon', name: 'Atlas Gold / XXL Balloon Catheter', spec: '18 mm - 22 mm diameter x 40 mm length', standardStore: 'Angio Suite Store' }
    ],
    techniqueSteps: [
      'Simultaneous dual vascular access: Right common femoral vein (10F) and right internal jugular vein (8F) under ultrasound guidance.',
      'Simultaneous biplane inferior and superior vena cavography defining the exact thickness, morphology, and cranial-caudal margins of the IVC web.',
      'Sharp puncture of the tough, fibrous membrane from either the jugular or femoral approach using a Brockenbrough or Rösch-Uchida needle under cross-table fluoroscopic targeting.',
      'Advancement of a 0.035" stiff angled Glidewire through the punctured pinhole, snaring the wire from the opposite access site to establish continuous through-and-through jugular-femoral wire control.',
      'Controlled membranotomy using a peripheral cutting balloon or scoring balloon (8-12 mm) to create controlled radial incisions in the dense fibrotic ring.',
      'Serial high-pressure balloon dilation up to 16-20 mm to efface the web and measure post-plasty pullback pressure gradient.',
      'Deployment of a large-bore self-expanding bare metallic or closed-cell stent (18-24 mm diameter) spanning the membranous segment, ensuring preservation of hepatic vein ostia.',
      'Post-dilation with high-pressure balloon to nominal diameter and completion cavography confirming wide caval lumen and abolition of trans-web pressure gradient (< 2 mmHg).'
    ],
    complications: [
      'IVC perforation leading to fatal hemoperitoneum or hemothorax',
      'Massive pulmonary thromboembolism from fragmented upstream clot',
      'Cardiac tamponade if perforation extends into intrapericardial IVC segment',
      'Stent migration into right atrium'
    ],
    maayTariffInr: 65000,
    vendorContacts: [
      'Boston Scientific India (+91 98293 44556)',
      'BD Bard Interventional (+91 98290 88712)',
      'Optimed Vascular India (+91 98291 33221)'
    ]
  },
  {
    id: 'may-thurner-thrombolysis-stenting',
    name: 'May-Thurner Syndrome: Left Common Iliac Vein Catheter-Directed Thrombolysis & Stenting',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN072A',
    rghsCode: '693 / 45',
    icd10: 'I87.1 (Compression of vein) / I82.42 (Acute embolism and thrombosis of left iliac vein)',
    indications: [
      'Acute or subacute extensive left iliofemoral deep venous thrombosis (DVT) with phlegmasia cerulea dolens or high risk of post-thrombotic syndrome',
      'Extrinsic compression of the left common iliac vein by the overlying right common iliac artery against the L5 vertebral body',
      'Residual > 50% stenosis with significant venous flow stagnation post-thrombus clearance'
    ],
    preOpCriteria: [
      'Lower extremity venous Doppler and CT Venogram Pelvis confirming left iliofemoral DVT and May-Thurner anatomic compression',
      'Absence of absolute contraindications to thrombolysis (recent intracranial bleed, major surgery < 14 days, severe active bleeding)',
      'Baseline CBC, Platelets (> 100,000/uL), Fibrinogen (> 150 mg/dL), and baseline INR/aPTT'
    ],
    hardware: [
      { category: 'Vascular Access', name: '8F 11cm Ultrasound Guided Introducer Sheath', spec: '8F left popliteal vein access', standardStore: 'Angio Suite Store' },
      { category: 'Infusion / Thrombectomy', name: 'Cragg-McNamara Valved Infusion Catheter / AngioJet Thrombectomy Set', spec: '5F 20-30 cm infusion length, 0.035" compatible', standardStore: 'Central IR Store' },
      { category: 'Intravascular Ultrasound (IVUS)', name: 'Philips Volcano Visions PV .035 IVUS Catheter', spec: '8.2F, digital intravascular ultrasound probe', standardStore: 'Angio Suite Store' },
      { category: 'Dedicated Venous Stent', name: 'Venovo / Zilver Vena / Wallstent Venous Stent', spec: '14 mm - 16 mm diameter x 60-100 mm length', standardStore: 'Central IR Store' },
      { category: 'High-Pressure Post-Dilation Balloon', name: 'Atlas Gold / Conquest PTA Balloon Catheter', spec: '12 mm - 14 mm x 40 mm non-compliant', standardStore: 'Angio Suite Store' }
    ],
    techniqueSteps: [
      'Prone or semi-prone positioning; ultrasound-guided retrograde left popliteal vein puncture and insertion of an 8F vascular sheath.',
      'Ascending pelvic venogram documenting acute left femoral and iliac venous occlusion with extensive collaterals crossing the pelvis.',
      'Traversing the thrombosed segment into the IVC using a 5F glide catheter and 0.035" angled hydrophilic wire; exchange for a multi-sidehole Cragg-McNamara infusion catheter.',
      'Delivery of catheter-directed thrombolytic therapy (rtPA 0.5 - 1.0 mg/hr with sub-therapeutic systemic heparin 400-500 IU/hr) or pharmacomechanical thrombectomy (AngioJet ZelanteDVT).',
      'Check venogram at 12-24 hours showing near-total (> 90%) thrombus resolution unmasking high-grade compression web at the left common iliac vein crossing.',
      'Intravascular ultrasound (IVUS) evaluation to precisely delineate the spur, luminal area reduction (> 50%), and the landing zone relative to the IVC confluence.',
      'Deployment of a dedicated high radial force venous stent (e.g., Venovo or Wallstent 14-16 mm diameter) spanning the compression spur and extending 3-5 mm into the IVC lumen.',
      'Post-dilation with a high-pressure non-compliant balloon (12-14 mm) to at least 18-20 atm until total waist abolition is achieved.',
      'Final IVUS and multi-angle DSA confirming full stent expansion, brisk in-line flow into IVC without pelvic collateral diversion, followed by sheath removal and pressure dressing.'
    ],
    complications: [
      'Major retroperitoneal or gastrointestinal hemorrhage secondary to thrombolytic infusion',
      'Symptomatic pulmonary embolism (prophylactic IVC filter placement indicated in free-floating thrombus)',
      'Iliac vein rupture / retroperitoneal hematoma during high-pressure post-dilation',
      'In-stent re-thrombosis'
    ],
    maayTariffInr: 68000,
    vendorContacts: [
      'BD Bard Interventional (+91 98290 88712)',
      'Cook Medical (+91 98292 33445)',
      'Boston Scientific (+91 98293 44556)'
    ]
  },
  {
    id: 'may-thurner-kissing-iliac-stenting',
    name: 'May-Thurner Syndrome: Bilateral Kissing Common Iliac Vein Stenting Extending into IVC Confluence',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN072B',
    rghsCode: '693 / 46',
    icd10: 'I87.1 (Compression of vein) / I82.40 (Deep vein thrombosis, unspecified)',
    indications: [
      'Severe bilateral common iliac vein compression or ostial stenosis extending directly to the iliocaval confluence',
      'Left common iliac stent deployment that risks over-jailing or mechanically compromising the right common iliac vein inflow',
      'Extensive iliocaval confluence post-thrombotic fibrotic stricture'
    ],
    preOpCriteria: [
      'CT Venography or MRV documenting iliocaval junction architecture, right common iliac ostium caliber, and L5/S1 compression',
      'Bilateral lower extremity venous duplex ultrasound mapping',
      'Serum creatinine, eGFR, coagulation panel (INR < 1.5, Platelets > 60,000/uL)'
    ],
    hardware: [
      { category: 'Vascular Access', name: 'Dual 9F/10F Femoral Introducer Sheaths', spec: 'Bilateral common femoral vein access sheaths, 11 cm', standardStore: 'Angio Suite Store' },
      { category: 'Guidewires', name: 'Amplatz Super Stiff Guidewires (Pair)', spec: '0.035", 260 cm, short 1 cm floppy tip', standardStore: 'Central IR Store' },
      { category: 'Venous Stents', name: 'Dedicated Self-Expanding Venous Stents (Venovo / Abre / E-Luminexx)', spec: 'Two matched 14 mm - 16 mm x 80-100 mm stents', standardStore: 'Central IR Store' },
      { category: 'PTA Balloons', name: 'Matched High-Pressure Balloons (Conquest / Atlas)', spec: 'Two matched 12 mm - 14 mm x 40 mm balloons', standardStore: 'Angio Suite Store' },
      { category: 'Dual Inflation Devices', name: 'Double High-Pressure Endoflators', spec: '30 atm capacity with pressure gauges', standardStore: 'Angio Suite Store' }
    ],
    techniqueSteps: [
      'Simultaneous ultrasound-guided cannulation of bilateral common femoral veins and placement of 9F/10F sheaths.',
      'Ascending bilateral iliocavography through both sheaths to visualize simultaneous confluence anatomy and bilateral pressure recordings.',
      'Passage of 0.035" stiff guidewires through both common iliac veins into the suprarenal IVC.',
      'Simultaneous pre-dilatation of bilateral common iliac vein ostia using matched balloons.',
      'Positioning of two matched large-diameter self-expanding venous stents (14-16 mm) aligned precisely side-by-side (kissing configuration) projecting 10-15 mm into the infrarenal IVC.',
      'Simultaneous deployment of both stents under synchronized fluoroscopy ensuring symmetric cranial alignment without displacement.',
      'Simultaneous kissing balloon post-dilation using two matched non-compliant balloons inflated to 16-20 atm to mold the new neo-bifurcation in the lower IVC.',
      'Completion dual-contrast injection cavography and pullback pressure measurements proving uninhibited bilateral pelvic venous outflow into IVC.'
    ],
    complications: [
      'Asymmetric stent expansion leading to contralateral iliac vein thrombosis',
      'Iliocaval rupture / massive retroperitoneal hemorrhage',
      'Stent migration cranial into heart or caudal into external iliac vein',
      'Late occlusion of one or both stent limbs'
    ],
    maayTariffInr: 78000,
    vendorContacts: [
      'BD Bard Interventional (+91 98290 88712)',
      'Medtronic India (+91 98294 11223)',
      'Boston Scientific (+91 98293 44556)'
    ]
  },
  {
    id: 'nutcracker-anterior-stenting',
    name: 'Nutcracker Syndrome (Anterior): Left Renal Vein Balloon Angioplasty & Self-Expanding Stenting',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN073A',
    rghsCode: '693 / 47',
    icd10: 'I87.1 (Compression of vein) / N02.8 (Recurrent and persistent hematuria)',
    indications: [
      'Severe anterior nutcracker syndrome (compression of left renal vein between SMA and abdominal aorta)',
      'Refractory macroscopic or microscopic hematuria causing anemia, severe left flank pain, or pelvic congestion symptoms',
      'Documented renocaval pullback pressure gradient >= 4-5 mmHg'
    ],
    preOpCriteria: [
      'Contrast-enhanced multiphasic CT/MRI abdomen demonstrating acute aortomesenteric angle (< 35 degrees) and LRV beak sign with collateral dilation (gonadal/lumbar veins)',
      'Urologic cystoscopy documenting selective hematuria from left ureteral orifice (excluding intrinsic bladder/urothelial pathology)',
      'Serum creatinine, urinalysis (proteinuria/hematuria documentation), INR < 1.5, Platelets > 70,000/uL'
    ],
    hardware: [
      { category: 'Vascular Access', name: '8F/9F 45cm Ansel / Flexor Guiding Sheath', spec: '8F, 45 cm, hockey-stick or multipurpose curve', standardStore: 'Angio Suite Store' },
      { category: 'Diagnostic Catheter', name: '5F Cobra C2 / Renal Double Curve Catheter', spec: '100 cm, 0.035" lumen', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: 'Amplatz Super Stiff Guidewire', spec: '0.035", 260 cm, 1 cm short floppy tip', standardStore: 'Central IR Store' },
      { category: 'Venous Stent', name: 'Self-Expanding Nitinol Venous Stent (Wallstent / SMART Control / Abre)', spec: '12 mm - 14 mm diameter x 40-60 mm length', standardStore: 'Central IR Store' },
      { category: 'PTA Balloon', name: 'High-Pressure Non-Compliant Balloon (Atlas / Conquest)', spec: '10 mm - 12 mm x 40 mm', standardStore: 'Angio Suite Store' }
    ],
    techniqueSteps: [
      'Ultrasound-guided right common femoral vein access; advancement of an 8F 45cm guiding sheath into the IVC at the level of the renal veins.',
      'Selective cannulation of the left renal vein (LRV) using a 5F Cobra or RDC catheter and 0.035" angled Glidewire, navigating past the aortomesenteric compression into a distal interlobar renal vein branch.',
      'Renocaval manometry: Simultaneous or pullback pressure gradient measurement between the distended hilar left renal vein and the inferior vena cava (confirming gradient >= 4 mmHg).',
      'Diagnostic left renal venography showing contrast stagnation, pelvic/gonadal collateral reflux, and the classic "beak sign" at the aortomesenteric clamp.',
      'Exchange for an Amplatz Super Stiff wire anchored deep in the lower pole renal branch.',
      'Deployment of a 12-14 mm self-expanding stent across the aortomesenteric crossing, ensuring precise placement: covering the entire compressed segment while landing 2-3 mm inside the IVC without occluding the gonadal vein inflow or prolapsing into the contralateral renal ostium.',
      'Post-dilation using a 10 mm - 12 mm non-compliant balloon to fully expand the stent against the extrinsic aortic/SMA compression.',
      'Repeat manometry confirming drop in renocaval gradient to <= 1-2 mmHg and venography confirming immediate elimination of retrograde gonadal/pelvic collaterals.'
    ],
    complications: [
      'Stent migration into the IVC or right atrium / heart (most critical hazard in nutcracker stenting)',
      'Renal vein laceration / retroperitoneal bleeding',
      'Erosion of stent into adjacent abdominal aorta or SMA',
      'Renal parenchymal infarction from branch vessel jailing'
    ],
    maayTariffInr: 62000,
    vendorContacts: [
      'Boston Scientific India (+91 98293 44556)',
      'Cordis / Cardinal Health (+91 98295 77665)',
      'Medtronic India (+91 98294 11223)'
    ]
  },
  {
    id: 'nutcracker-posterior-decompression',
    name: 'Nutcracker Syndrome (Posterior): Retro-Aortic Left Renal Vein Balloon Angioplasty & Decompression',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN073B',
    rghsCode: '693 / 48',
    icd10: 'I87.1 (Compression of vein) / Q26.8 (Other congenital anomalies of vena cava)',
    indications: [
      'Posterior nutcracker phenomenon: Extrinsic compression of a retro-aortic left renal vein between the abdominal aorta and the lumbar vertebral body',
      'Orthostatic proteinuria, intractable left flank pain, gross hematuria, and left varicocele',
      'Persistent venous hypertension with renocaval pressure gradient >= 4 mmHg'
    ],
    preOpCriteria: [
      'Cross-sectional CT/MRI Angiogram identifying retro-aortic left renal vein course compressed against L3/L4 vertebral spur/body',
      'Detailed venocaval Doppler ultrasound confirming velocity ratio > 5:1 between compressed and hilar segments',
      'Routine renal function tests, urinalysis, bleeding profile'
    ],
    hardware: [
      { category: 'Vascular Access', name: '8F 45cm Ansel Introducer Sheath', spec: '8F, 45 cm, braided with high kink resistance', standardStore: 'Angio Suite Store' },
      { category: 'Diagnostic Catheter', name: '5F Renal Double Curve (RDC) / Cobra C2', spec: '100 cm', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: 'Amplatz Extra Stiff Guidewire', spec: '0.035", 260 cm, 1 cm short floppy tip', standardStore: 'Central IR Store' },
      { category: 'PTA Balloon', name: 'Ultraverse / Conquest High Pressure PTA Balloon', spec: '10 mm - 12 mm diameter x 40 mm length', standardStore: 'Central IR Store' },
      { category: 'Dedicated Venous Stent', name: 'Venovo / Wallstent Nitinol Venous Stent', spec: '12 mm - 14 mm x 60 mm', standardStore: 'Angio Suite Store' }
    ],
    techniqueSteps: [
      'Ultrasound-guided right femoral vein puncture and placement of an 8F 45cm guiding sheath.',
      'Selective catheterization of the retro-aortic left renal vein entering the IVC at a lower, more posterior anatomical level than normal.',
      'Selective venogram depicting severe focal pinch between the posterior aortic pulsation and the anterior vertebral cortex.',
      'Direct pressure measurement in distal LRV and proximal IVC to document hemodynamic significance (gradient >= 4 mmHg).',
      'Careful pre-dilation with an 8-10 mm balloon under fluoroscopy, evaluating for pain response and recoil.',
      'Deployment of a high-radial-force self-expanding stent (12-14 mm) across the retro-aortic bony-arterial fulcrum, strictly avoiding excessive protrusion into the IVC.',
      'Gentle post-dilation ensuring luminal restoration without over-dilating against the rigid vertebral body.',
      'Completion venography and hemodynamic re-evaluation showing normalization of renocaval gradient (< 2 mmHg).'
    ],
    complications: [
      'Posterior rupture of thin-walled renal vein against osteophytes / vertebra',
      'Stent crushing or migration due to intense pulsatile compression between aorta and spine',
      'Retroperitoneal hematoma',
      'Renal vein thrombosis'
    ],
    maayTariffInr: 60000,
    vendorContacts: [
      'BD Bard Interventional (+91 98290 88712)',
      'Boston Scientific (+91 98293 44556)',
      'Cook Medical (+91 98292 33445)'
    ]
  },
  {
    id: 'mals-angioplasty-stenting',
    name: 'Median Arcuate Ligament Syndrome (MALS): Celiac Artery Angioplasty & Covered Stenting Post-Ligament Release',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN074A',
    rghsCode: '693 / 49',
    icd10: 'I77.4 (Celiac artery compression syndrome)',
    indications: [
      'Persistent or recurrent postprandial epigastric pain, severe weight loss, and epigastric bruit post-laparoscopic/open surgical release of the median arcuate ligament',
      'Residual fixed intrinsic intimal fibrosis / stenosis of the celiac trunk ostium with peak systolic velocity > 200 cm/s',
      'Documented celiac-aortic systolic pressure gradient > 20 mmHg'
    ],
    preOpCriteria: [
      'Post-surgical CT Angiogram demonstrating surgical transection of diaphragmatic crus but persistent intrinsic narrowing/fibrosis of the celiac origin',
      'Inspiratory/expiratory mesenteric duplex ultrasound documenting persistent elevated velocities during full inspiration',
      'Prior surgical release of median arcuate ligament (endovascular stenting WITHOUT surgical release is strongly contraindicated due to high stent fracture/compression risk)'
    ],
    hardware: [
      { category: 'Vascular Access', name: '6F 45cm Destination / Shuttle Guiding Sheath', spec: '6F, 45 cm curved tip or 6F 90 cm brachial/radial sheath', standardStore: 'Angio Suite Store' },
      { category: 'Diagnostic Catheter', name: '5F Simmons 1 / SOS Omni / Cobra Catheter', spec: '100 cm, 0.035" lumen', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: '0.014" V-18 ControlWire / Grand Slam Wire', spec: '300 cm extra-support 0.014" or 0.018" wire', standardStore: 'Central IR Store' },
      { category: 'Covered Stent', name: 'Balloon-Expandable Covered Stent (Advanta V12 / BeGraft / Lifestream)', spec: '6 mm - 8 mm diameter x 22-28 mm length', standardStore: 'Central IR Store' },
      { category: 'PTA Balloon', name: 'Armada / NC Euphora Balloon Dilatation Catheter', spec: '6 mm - 8 mm x 20 mm non-compliant', standardStore: 'Angio Suite Store' }
    ],
    techniqueSteps: [
      'Access via right common femoral artery (or left brachial/radial artery if sharp downward takeoff of celiac axis) with a 6F guiding sheath.',
      'Aortography in lateral projection during quiet respiration, inspiration, and expiration documenting the classic hooked indentation at the superior aspect of the celiac ostium.',
      'Selective cannulation of celiac trunk using a 5F Simmons 1 or Cobra catheter, followed by crossing the stenosis with an extra-support 0.014" or 0.018" guidewire anchored into the common hepatic or splenic artery.',
      'Pressure wire or catheter pullback recording confirming significant trans-stenotic systolic pressure drop (> 20 mmHg).',
      'Gentle pre-dilation with a 4-5 mm low-profile balloon to determine vessel compliance.',
      'Deployment of a balloon-expandable covered stent (6-8 mm diameter x 22 mm length) precisely across the ostium, flaring the proximal 1-2 mm slightly into the aortic lumen.',
      'Post-dilation to nominal vessel diameter using a non-compliant balloon under lateral fluoroscopy.',
      'Completion lateral aortogram and selective celiac DSA demonstrating brisk, unobstructed flow into hepatic and splenic branches with resolution of pressure gradient (< 5 mmHg).'
    ],
    complications: [
      'Celiac artery dissection or rupture with life-threatening retroperitoneal bleed',
      'Stent fracture or collapse if extrinsic crural ligament fibers were incompletely divided surgically',
      'Non-target embolization to spleen or liver',
      'Access site pseudoaneurysm'
    ],
    maayTariffInr: 54000,
    vendorContacts: [
      'Getinge / Atrium Medical (+91 98296 22110)',
      'Bentley InnoMed (+91 98297 33441)',
      'BD Bard Interventional (+91 98290 88712)'
    ]
  },
  {
    id: 'sma-syndrome-nj-tube-mapping',
    name: 'Superior Mesenteric Artery Syndrome (Wilkie): Fluoroscopic Nasojejunal Tube & Vascular Mapping',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '1849-IN075A',
    rghsCode: '693 / 50',
    icd10: 'K31.5 (Obstruction of duodenum) / I77.4 (Celiac-mesenteric artery syndrome)',
    indications: [
      'Acute or chronic postprandial bilious vomiting, profound weight loss, and gastric dilation secondary to compression of third part of duodenum between SMA and aorta',
      'Aortomesenteric angle < 22 degrees and aortomesenteric distance < 8 mm on cross-sectional imaging',
      'Need for immediate post-ligament of Treitz enteral nutritional decompression and feeding prior to definitive therapy'
    ],
    preOpCriteria: [
      'Contrast CT Abdomen or Upper GI Barium series demonstrating abrupt transverse cutoff of barium at the third part of duodenum with proximal megaduodenum',
      'Profound malnutrition (BMI < 16, Serum Albumin < 2.5 g/dL, electrolyte disturbances)',
      'Nasogastric tube decompression already initiated for gastric stasis'
    ],
    hardware: [
      { category: 'Enteral Feeding Tube', name: 'Weighted Nasojejunal Feeding Catheter (Freka / Kangaroo)', spec: '8F - 10F, 120-140 cm with tungsten weighted tip', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: '0.035" Glidewire & Amplatz Extra Stiff Wire', spec: '260 cm angled stiff Glidewire and 260 cm Amplatz', standardStore: 'Central IR Store' },
      { category: 'Angiographic Catheter', name: '5F Kumpe / Multipurpose / Cobra Catheter', spec: '100 cm, 0.035" compatible', standardStore: 'Central IR Store' },
      { category: 'Contrast Agent', name: 'Non-ionic Water-Soluble Iodinated Contrast (Iohexol)', spec: 'Omnipaque 300 mgI/mL', standardStore: 'Angio Suite Store' }
    ],
    techniqueSteps: [
      'Patient seated or supine; topical lidocaine spray to nasal cavity and pharynx.',
      'Transnasal insertion of a 5F Kumpe or MPA diagnostic catheter into the stomach under continuous fluoroscopic visualization.',
      'Insufflation of stomach with 100-200 mL air to visualize the gastric antrum and pylorus.',
      'Manipulation of catheter and 0.035" hydrophilic angled Glidewire across the pyloric channel into the duodenal bulb.',
      'Careful negotiation of the wire through the dilated first and second parts of the duodenum, navigating across the narrow compressed third horizontal duodenal segment pinched under the SMA.',
      'Advancement of wire past the ligament of Treitz deep into the proximal jejunum (> 20 cm distal to Treitz).',
      'Exchange over a stiff exchange wire for an 8F-10F tungsten-weighted enteral feeding tube (Freka / Kangaroo), verifying tip location in the proximal jejunal loops.',
      'Contrast administration through the feeding tube demonstrating patent jejunal loops without proximal reflux or extravasation, followed by securing tube at the nares.'
    ],
    complications: [
      'Duodenal perforation at the acute compressed crossing point',
      'Aspiration of gastric contents during tube manipulation',
      'Epistaxis / pharyngeal trauma',
      'Tube displacement back into the stomach'
    ],
    maayTariffInr: 22000,
    vendorContacts: [
      'Fresenius Kabi India (+91 98298 44551)',
      'Cook Medical (+91 98292 33445)',
      'Boston Scientific (+91 98293 44556)'
    ]
  },
  {
    id: 'tos-venous-thrombolysis-venoplasty',
    name: 'Venous TOS (Paget-Schroetter Syndrome): Catheter-Directed Thrombolysis & Subclavian Venoplasty',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN076A',
    rghsCode: '693 / 51',
    icd10: 'I82.62 (Acute embolism and thrombosis of deep veins of upper extremity) / G54.0 (Brachial plexus disorders)',
    indications: [
      'Acute effort-induced thrombosis of the subclavian-axillary vein ("effort thrombosis") in young active individuals or athletes',
      'Severe upper extremity swelling, cyanosis, and throbbing pain secondary to costoclavicular space compression',
      'Presentation within 14 days of symptom onset'
    ],
    preOpCriteria: [
      'Color Doppler Ultrasound and CT/MR Venography of upper chest/shoulder demonstrating axillary-subclavian vein thrombosis at the costoclavicular junction',
      'Evaluation of bleeding risk profile; baseline aPTT, INR, Platelet count (> 100,000/uL), Fibrinogen (> 150 mg/dL)',
      'Surgical thoracic surgery consult for planned first rib resection post-thrombolysis'
    ],
    hardware: [
      { category: 'Vascular Access', name: '6F 11cm Ultrasound Guided Introducer Sheath', spec: '6F basilic or brachial vein access', standardStore: 'Angio Suite Store' },
      { category: 'Infusion Catheter', name: 'Cragg-McNamara Valved Infusion Catheter', spec: '4F/5F, 10-20 cm infusion length, 0.035" lumen', standardStore: 'Central IR Store' },
      { category: 'Mechanical Thrombectomy', name: 'AngioJet ZelanteDVT / Cleaner Rotational Thrombectomy', spec: '6F/8F catheter system', standardStore: 'Angio Suite Store' },
      { category: 'PTA Balloon', name: 'Mustang / Dorado High-Pressure Balloon Catheter', spec: '8 mm - 10 mm diameter x 40 mm length', standardStore: 'Angio Suite Store' },
      { category: 'Thrombolytic Agent', name: 'Recombinant Tissue Plasminogen Activator (Alteplase / Tenecteplase)', spec: 'Inj rtPA 50 mg vial', standardStore: 'SMS Pharmacy DDC-14' }
    ],
    techniqueSteps: [
      'Ultrasound-guided cannulation of the ipsilateral basilic or brachial vein in the mid-upper arm; placement of a 6F sheath directed centrally.',
      'Diagnostic venogram detailing total occlusion of the axillary-subclavian vein with extensive chest wall collaterals.',
      'Crossing the thrombosed segment using a 0.035" hydrophilic guidewire and 5F glide catheter into the superior vena cava.',
      'Pharmacomechanical thrombectomy (AngioJet) or placement of a multi-sidehole Cragg-McNamara catheter for catheter-directed thrombolysis (rtPA 0.5 - 1.0 mg/hr for 12-24 hours).',
      'Follow-up venogram at 18 hours showing complete lysis of thrombus unmasking severe extrinsic compression at the junction of the first rib and clavicle.',
      'Stress positional venography (arm in neutral position vs. 90-degree hyperabduction) documenting dynamic focal obliteration of venous lumen.',
      'Balloon angioplasty with an 8-10 mm balloon to restore baseline lumen and eliminate residual mural thrombus.',
      'CRITICAL PRINCIPLE: DO NOT deploy a metallic stent across the costoclavicular junction prior to surgical first rib resection, as the repetitive scissor-like crushing between rib and clavicle inevitably leads to stent fracture and catastrophic re-occlusion.'
    ],
    complications: [
      'Major intracranial, gastrointestinal, or pulmonary hemorrhage during rtPA infusion',
      'Pulmonary embolism from dislodged axillary thrombus fragments',
      'Venous rupture / dissection during balloon angioplasty',
      'Early re-thrombosis before surgical decompression'
    ],
    maayTariffInr: 52000,
    vendorContacts: [
      'Boston Scientific India (+91 98293 44556)',
      'BD Bard Interventional (+91 98290 88712)',
      'Medtronic India (+91 98294 11223)'
    ]
  },
  {
    id: 'tos-arterial-aneurysm-exclusion',
    name: 'Arterial Thoracic Outlet Syndrome: Subclavian Aneurysm Exclusion & Thromboembolectomy',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN076B',
    rghsCode: '693 / 52',
    icd10: 'I72.8 (Aneurysm of other specified arteries) / Q76.5 (Cervical rib)',
    indications: [
      'Subclavian artery aneurysm or post-stenotic dilation secondary to compression by a cervical rib or anomalous first rib',
      'Acute upper extremity digital ischemia / micro-embolization ("blue finger syndrome") from mural thrombus within the aneurysm',
      'Rapidly expanding or symptomatic pulsatile supraclavicular mass with high risk of rupture'
    ],
    preOpCriteria: [
      'CT Angiography of the chest and upper extremity demonstrating cervical rib, subclavian artery compression/aneurysm, and mural thrombus',
      'Upper extremity arterial Doppler detailing digital runoff and patency of radial/ulnar palmar arches',
      'Full cardiac evaluation, CBC, Renal parameters, Bleeding profile (INR < 1.4)'
    ],
    hardware: [
      { category: 'Vascular Access', name: '7F/8F 45cm Destination Sheath', spec: 'Femoral or brachial approach, 7F/8F, 45 cm', standardStore: 'Angio Suite Store' },
      { category: 'Thrombectomy Catheter', name: 'Fogarty Thromboembolectomy Catheter / Penumbra Indigo Aspiration', spec: '3F/4F Fogarty and CAT6 / CAT8 aspiration catheter', standardStore: 'Central IR Store' },
      { category: 'Covered Stent-Graft', name: 'Self-Expanding / Balloon-Expandable Stent Graft (Viabahn / Gore)', spec: '8 mm - 10 mm diameter x 50-100 mm length', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: 'Rosen / Amplatz Super Stiff Wire', spec: '0.035", 260 cm, short soft tip', standardStore: 'Central IR Store' },
      { category: 'Microcatheter Set', name: '2.7F Progreat Microcatheter', spec: '130 cm for distal microembolus rescue', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Retrograde common femoral artery access (or combined retrograde brachial access) under ultrasound guidance.',
      'Arch aortography and selective subclavian arteriography depicting post-stenotic subclavian dilation/aneurysm and distal thromboembolic cutoffs in the forearm/digital arteries.',
      'Aspiration thrombectomy of downstream thromboemboli in the brachial, radial, and ulnar arteries using Penumbra CAT6/CAT8 or catheter-directed intra-arterial thrombolysis.',
      'Exchange for a stiff 0.035" Amplatz wire anchored in the brachial artery.',
      'Deployment of a flexible covered stent graft (Viabahn, 8-10 mm) across the subclavian aneurysm, landing in healthy proximal and distal non-dilated arterial zones, while carefully avoiding coverage of the vertebral artery origin.',
      'Balloon touch-up with an 8-9 mm balloon at the stent seal zones to achieve complete aneurysm exclusion.',
      'Completion angiography confirming complete isolation of aneurysm sac, preserved vertebral and internal mammary arterial flow, and restored brisk pulsatile three-vessel forearm runoff.',
      'Coordination with thoracic surgery team for scheduled decompression of cervical rib.'
    ],
    complications: [
      'Inadvertent coverage of vertebral artery origin causing cerebellar/brainstem infarction',
      'Distal shower of atheroemboli to the hand and digits',
      'Stent graft thrombosis, kinking, or endoleak',
      'Access site hematoma / pseudoaneurysm'
    ],
    maayTariffInr: 68000,
    vendorContacts: [
      'W.L. Gore & Associates (+91 98290 99881)',
      'Penumbra India (+91 98299 66772)',
      'Boston Scientific (+91 98293 44556)'
    ]
  },
  {
    id: 'kts-marginal-vein-sclerotherapy-rfa',
    name: 'Klippel-Trenaunay Syndrome: Marginal Vein of Servelle Sclerotherapy & Radiofrequency Ablation',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN077A',
    rghsCode: '693 / 53',
    icd10: 'Q87.21 (Klippel-Trenaunay syndrome)',
    indications: [
      'Congenital embryonic persistent lateral marginal vein of Servelle in Klippel-Trenaunay Syndrome with severe venous hypertension and leg hypertrophy',
      'Recurrent thrombophlebitis, stasis ulceration, spontaneous hemorrhage, or high-volume venous pooling',
      'Documented PATENCY and competence of the deep venous system (femoral and popliteal veins)'
    ],
    preOpCriteria: [
      'Duplex ultrasound and MR Venography of the affected lower limb and pelvis MANDATORY to verify deep venous patency (ablation of marginal vein in the absence of a patent deep system results in catastrophic venous infarction)',
      'Assessment of d-dimer and baseline coagulation parameters (screening for localized intravascular coagulopathy / LIC)',
      'Pre-procedure limb photography and circumference measurements'
    ],
    hardware: [
      { category: 'Ablation Generator & Fiber', name: 'Radiofrequency Ablation (RFA) ClosureFast / EVLA 1470nm Laser', spec: '7F RFA catheter, 7 cm heating element, or radial laser fiber', standardStore: 'Angio Suite Store' },
      { category: 'Access Sheath', name: '6F - 7F 11cm Introducer Sheath & Micro-puncture Set', spec: '21G needle, 0.018" wire, 4F/6F sheath', standardStore: 'Central IR Store' },
      { category: 'Sclerosant & Connectors', name: 'Polidocanol (Asclera / Aethoxysklerol) / Sodium Tetradecyl Sulfate (STS)', spec: '1% - 3% ampoules, Tessari double-syringe 3-way stopcock setup', standardStore: 'SMS Pharmacy DDC-14' },
      { category: 'Tumescent Anesthesia', name: 'Tumescent Infiltration Needle & Pump', spec: '0.1% buffered lidocaine with epinephrine solution', standardStore: 'Angio Suite Store' },
      { category: 'Embolic Coils', name: 'Pushable / Detachable 0.035" MReye Embolization Coils', spec: '8 mm - 16 mm diameter coils for tributary occlusion', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Comprehensive ultrasound evaluation confirming patency of the ipsilateral deep femoral and popliteal veins.',
      'Ultrasound-guided retrograde puncture of the lateral marginal vein in the distal calf or mid-thigh using a 21G micro-puncture needle; insertion of a 7F sheath.',
      'Venographic mapping of the entire marginal vein delineating points of communication with the deep system and termination in the internal iliac or common femoral vein.',
      'Placement of embolic coils at large perforator junctions to prevent sclerosant migration into the deep system.',
      'Advancement of the RFA catheter (ClosureFast) under ultrasound guidance, positioning the heating element 2-3 cm distal to the deep venous junction.',
      'Delivery of extensive perivenous tumescent anesthesia along the course of the marginal vein under continuous ultrasound control to compress the vein wall and protect skin.',
      'Radiofrequency thermal ablation applied in segmental cycles (85°C - 120°C) with slow controlled withdrawal.',
      'Supplementary ultrasound-guided foam sclerotherapy (1-3% Polidocanol or STS foamed 1:4 with room air/CO2 via Tessari method) injected into tortuous superficial branches and residual segments.',
      'Ultrasound verification of complete non-compressibility and lack of flow in the marginal vein, with documented preserved patency in deep veins; application of class II gradient compression stocking.'
    ],
    complications: [
      'Deep venous thrombosis (DVT) or pulmonary embolism due to sclerosant/thermal extension',
      'Skin necrosis or thermal blistering over superficial vein tracts',
      'Common peroneal nerve thermal injury causing foot drop',
      'Disseminated intravascular coagulation (worsening of LIC)'
    ],
    maayTariffInr: 42000,
    vendorContacts: [
      'Medtronic India (+91 98294 11223)',
      'Biolitec Medical India (+91 98298 77665)',
      'STD Pharmaceutical / Jaipur Surgicals (+91 98290 12345)'
    ]
  },
  {
    id: 'kts-vm-sclerotherapy-bleo-sts',
    name: 'Klippel-Trenaunay Syndrome: Pelvic & Extremity Venous Malformation Bleomycin / STS Sclerotherapy',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN077B',
    rghsCode: '693 / 54',
    icd10: 'Q87.21 (Klippel-Trenaunay syndrome) / D18.00 (Hemangioma of unspecified site)',
    indications: [
      'Low-flow spongiform venous malformations involving pelvis, buttocks, and extremity in KTS',
      'Painful phlebolith formation, chronic muscular aching, swelling, and localized bleeding',
      'Recurrent cellulitis and severe functional limb impairment'
    ],
    preOpCriteria: [
      'Contrast-enhanced MRI with T2 STIR sequences mapping the extent and tissue planes of the low-flow malformation',
      'Baseline d-dimer, fibrinogen, platelets to rule out consumptive coagulopathy (Kassabach-Merritt / severe LIC)',
      'Cumulative bleomycin exposure calculation (lifetime limit < 300-400 mg or < 15 mg/session in adults, < 0.5 mg/kg in pediatrics)',
      'Chest radiograph and baseline pulmonary function testing'
    ],
    hardware: [
      { category: 'Puncture Needles', name: 'Angiocath / Echogenic Needle Set', spec: '20G - 22G 4 cm - 7 cm echogenic needles', standardStore: 'Central IR Store' },
      { category: 'Connecting Extension', name: 'High-Pressure Extension Tubing with 3-Way Stopcocks', spec: '30 cm flexible clear tubing', standardStore: 'Angio Suite Store' },
      { category: 'Sclerosants', name: 'Inj Bleomycin Sulphate & Sodium Tetradecyl Sulfate (STS)', spec: 'Bleomycin 15 units vial, Fibrovein 3% 5 mL vial', standardStore: 'SMS Pharmacy DDC-14' },
      { category: 'Contrast Media', name: 'Non-ionic Contrast (Omnipaque 300) & Lipiodol', spec: 'Used for fluoroscopic opacification of sclerosant foam', standardStore: 'Angio Suite Store' },
      { category: 'Tourniquet / Compression', name: 'Esmarch Bandage / Pneumatic Tourniquet', spec: 'Calibrated limb cuff for flow stagnation', standardStore: 'Angio Suite Store' }
    ],
    techniqueSteps: [
      'General anesthesia or monitored sedation with patient positioned for optimal access to pelvic/limb malformation.',
      'Ultrasound-guided direct percutaneous puncture of dysplastic venous lakes using 21G echogenic needles; aspiration of dark, sluggish venous blood confirming intraluminal position.',
      'Direct-puncture phlebography under fluoroscopy assessing lesion volume, drainage speed, and identifying any direct efferent outflow conduits into deep veins.',
      'Application of manual compression or pneumatic tourniquet on draining veins to promote prolonged sclerosant contact time and avoid systemic escape.',
      'Preparation of sclerosant: For STS foam, 1 part 3% STS mixed with 4 parts air/CO2 via Tessari technique; for Bleomycin, 15 IU dissolved in 10 mL saline (or mixed with Lipiodol/contrast).',
      'Slow, controlled intralesional injection of sclerosant under continuous real-time fluoroscopic and ultrasound visualization.',
      'Immediate cessation of injection upon visualization of any washout into the deep venous system.',
      'Withdrawal of needles, application of direct local compression for 15 minutes, followed by multi-layer elastic compression bandage.'
    ],
    complications: [
      'Pulmonary fibrosis (dose-dependent Bleomycin toxicity)',
      'Compartment syndrome of the extremity secondary to acute post-sclerotherapy inflammatory edema',
      'Skin necrosis and ulceration',
      'Hemoglobinuria and acute renal injury'
    ],
    maayTariffInr: 34000,
    vendorContacts: [
      'Jaipur Surgical / Bharat Serums (+91 98290 12345)',
      'STD Pharmaceutical (+91 98298 77665)',
      'Guerbet India (+91 98291 55678)'
    ]
  },
  {
    id: 'pws-avf-embolization-onyx-coils',
    name: 'Parkes Weber Syndrome: High-Flow Limb AVF Embolization with Detachable Coils & Onyx',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN078A',
    rghsCode: '693 / 55',
    icd10: 'Q87.2 (Congenital malformation syndromes predominantly involving limbs) / Q27.31 (Arteriovenous malformation)',
    indications: [
      'Congenital high-flow arteriovenous fistulae/malformations associated with bony and soft tissue hypertrophy in Parkes Weber syndrome',
      'High-output congestive heart failure, severe distal limb steal syndrome, ischemic ulceration, or life-threatening hemorrhage',
      'Progressive thrill, audible machinery bruit, and venous stasis dermatitis'
    ],
    preOpCriteria: [
      'Detailed CT/MR Angiography and 4D Flow MRI defining multiple high-flow micro/macro-fistulous shunts and limb arterial arborization',
      'Echocardiography calculating cardiac output, stroke volume, and pulmonary artery systolic pressures',
      'Renal function tests, baseline neurovascular examination of extremity, INR < 1.4, Platelets > 80,000/uL'
    ],
    hardware: [
      { category: 'Vascular Access', name: '6F 45cm Destination Introducer Sheath', spec: '6F, 45 cm antegrade or retrograde sheath', standardStore: 'Angio Suite Store' },
      { category: 'Diagnostic Catheter', name: '5F Berenstein / Cobra C2 / MPA Catheter', spec: '100 cm, 0.035" lumen', standardStore: 'Central IR Store' },
      { category: 'DMSO-Compatible Microcatheter', name: 'Rebar 18 / Marathon / Apollo Microcatheter System', spec: '2.7F/1.5F DMSO-compatible microcatheter', standardStore: 'Central IR Store' },
      { category: 'Liquid Embolic System', name: 'Onyx 34 / Onyx 18 Liquid Embolic System', spec: 'Ethylene vinyl alcohol copolymer (EVOH) with DMSO', standardStore: 'Central IR Store' },
      { category: 'Detachable Microcoils', name: 'Target 360 / Concerto Detachable Microcoils', spec: '0.018", 3D helical detachable framing coils', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Ultrasound-guided common femoral or brachial arterial access with placement of a 6F sheath.',
      'High-resolution multi-station digital subtraction angiography (DSA) with high frame rates (4-6 frames/s) characterizing the exact nidus location, feeding arteries, and early draining veins.',
      'Navigation of a 5F base catheter into the main feeding arterial trunk (e.g., superficial femoral, profunda femoris, or popliteal branch).',
      'Superselective coaxial catheterization of the fistulous nidus using a DMSO-compatible microcatheter (Rebar-18 or Marathon) placed directly into the transition zone.',
      'Deployment of detachable framing microcoils into high-flow fistulous pockets to create an embolic scaffold and reduce flow velocity.',
      'Priming the microcatheter dead space with 0.25-0.3 mL of anhydrous DMSO.',
      'Slow, controlled infusion of Onyx-34 (or Onyx-18) under continuous high-magnification "blank roadmap" fluoroscopy, allowing the copolymer to precipitate and cast the fistulous nidus without non-target proximal reflux.',
      'Completion angiography proving complete cessation of early venous drainage and preservation of nutrient arterial flow to normal extremity musculature.',
      'Staged approach planning if high-flow volume is extensive to prevent acute right heart decompensation from sudden afterload shifts.'
    ],
    complications: [
      'Non-target embolization to distal foot/hand leading to digital gangrene',
      'Venous migration of liquid embolic causing pulmonary embolism',
      'Reflux of Onyx gluing microcatheter tip (requires gentle traction release)',
      'Acute afterload increase triggering left ventricular failure'
    ],
    maayTariffInr: 85000,
    vendorContacts: [
      'Medtronic Neurovascular (+91 98294 11223)',
      'Stryker Neurovascular (+91 98292 66554)',
      'Boston Scientific (+91 98293 44556)'
    ]
  },
  {
    id: 'hht-pavm-embolization',
    name: 'Hereditary Hemorrhagic Telangiectasia (HHT): Pulmonary AVM Coil & Vascular Plug Embolization',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN079A',
    rghsCode: '693 / 56',
    icd10: 'I78.0 (Hereditary hemorrhagic telangiectasia) / Q25.72 (Congenital pulmonary arteriovenous malformation)',
    indications: [
      'Simple or complex pulmonary arteriovenous malformations (PAVMs) with feeding artery diameter >= 2-3 mm',
      'Paradoxical embolic stroke, transient ischemic attack, or cerebral abscess secondary to right-to-left pulmonary shunt',
      'Refractory hypoxemia, dyspnea on exertion, or massive hemoptysis/hemothorax'
    ],
    preOpCriteria: [
      'High-resolution non-contrast and contrast chest CT (1 mm thin cuts) detailing 3D architecture, feeding segmental/subsegmental arteries, and aneurysmal sacs',
      'Agitated saline contrast echocardiography documenting Grade III-IV right-to-left intrapulmonary shunt',
      'Meticulous debubbling of all IV lines (vital rule: zero air bubbles to avoid stroke in right-to-left shunt anatomy)',
      'Coagulation panel, renal parameters'
    ],
    hardware: [
      { category: 'Vascular Access', name: '7F/8F 90cm Flexor Ansel Guiding Sheath', spec: '7F, 90 cm, multipurpose or renal curve', standardStore: 'Angio Suite Store' },
      { category: 'Diagnostic Catheter', name: '5F Pigtail & 5F Berman / MPA Catheter', spec: '100 cm, 0.035" lumen', standardStore: 'Central IR Store' },
      { category: 'Vascular Plug', name: 'Amplatzer Vascular Plug IV / AVP II', spec: 'AVP IV (4 mm - 8 mm) or AVP II (6 mm - 12 mm)', standardStore: 'Central IR Store' },
      { category: 'Detachable Coils', name: 'Interlock / Concerto Detachable Fibered Coils', spec: '0.018" / 0.035", high packing density', standardStore: 'Central IR Store' },
      { category: 'Microcatheter Set', name: '2.7F Progreat / Renegade HI-FLO Microcatheter', spec: '130 cm, 0.027" inner lumen', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Ultrasound-guided right common femoral vein access; placement of an 8F sheath. Rigorous air-free protocol with double filter line.',
      'Main pulmonary artery DSA with 5F Pigtail catheter followed by selective lobar pulmonary angiography identifying all feeding subsegmental arteries.',
      'Advancement of the 7F 90cm guiding sheath into the targeted segmental pulmonary artery.',
      'Selective microcatheter/catheter navigation to the absolute distal-most segment of the feeding artery, immediately adjacent to the aneurysmal sac (to preserve healthy pulmonary parenchyma).',
      'Deployment of an Amplatzer Vascular Plug (sized 30-50% larger than the feeding artery diameter) or dense packing of detachable fibered coils.',
      'For complex PAVMs (multiple feeders), systematically superselect and embolize every individual arterial feeder.',
      'Wait 5-10 minutes to verify complete thrombotic occlusion under fluoroscopy.',
      'Completion pulmonary angiography confirming zero opacification of the aneurysmal sac and draining pulmonary vein, with intact perfusion to adjacent lung parenchyma.'
    ],
    complications: [
      'Paradoxical coil/plug migration through the low-resistance fistula into the pulmonary vein, left atrium, and systemic circulation (stroke risk)',
      'Transient pleurisy / self-limiting pleuritic chest pain (post-embolization syndrome)',
      'Pulmonary infarction',
      'Air embolism'
    ],
    maayTariffInr: 65000,
    vendorContacts: [
      'Abbott Vascular India (+91 98299 44332)',
      'Boston Scientific (+91 98293 44556)',
      'Medtronic India (+91 98294 11223)'
    ]
  },
  {
    id: 'hht-hepatic-vm-embolization',
    name: 'HHT: Hepatic Vascular Malformation Staged Arterial Embolization for High-Output Heart Failure',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN079B',
    rghsCode: '693 / 57',
    icd10: 'I78.0 (Hereditary hemorrhagic telangiectasia) / I50.9 (Heart failure)',
    indications: [
      'Severe high-output heart failure (cardiac index > 4.5 L/min/m2) refractory to intensive medical therapy (diuretics, beta-blockers, and IV bevacizumab) in HHT patients with massive hepatic AVMs',
      'Portobiliary fistula causing recurrent cholangitis or severe portal hypertension with bleeding varices',
      'Severe hepatic artery steal syndrome causing mesenteric/biliary ischemia'
    ],
    preOpCriteria: [
      'Triphasic CECT or Dynamic MRI Liver revealing diffuse telangiectasias, marked hepatic artery dilatation (> 10 mm), and arterioportal or arteriovenous shunts',
      'Echocardiography documenting cardiac index, ejection fraction, and pulmonary hypertension',
      'Serum bilirubin, alkaline phosphatase, and GGT (elevated ALP/GGT signals microvascular biliary tree ischemia: extreme caution mandatory)',
      'Multidisciplinary tumor/vascular board evaluation (staged embolization vs. liver transplantation)'
    ],
    hardware: [
      { category: 'Vascular Access', name: '5F/6F 11cm Radiofocus Sheath', spec: 'Right common femoral artery', standardStore: 'Angio Suite Store' },
      { category: 'Diagnostic Catheter', name: '5F Yashiro / Mikaelson Catheter', spec: '100 cm, 0.035" lumen', standardStore: 'Central IR Store' },
      { category: 'Microcatheter', name: '2.4F / 2.7F Progreat Microcatheter System', spec: '130 cm, 0.014" Glidewire GT', standardStore: 'Central IR Store' },
      { category: 'Embolic Particles', name: 'Calibrated Polyvinyl Alcohol (PVA) / Embospheres', spec: '500-700 um or 700-900 um (NEVER particles < 300 um)', standardStore: 'SMS Pharmacy DDC-14' },
      { category: 'Microcoils', name: 'Target / Concerto Detachable Microcoils', spec: '0.018", 4 mm - 8 mm', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Ultrasound-guided common femoral artery puncture and 5F sheath insertion.',
      'Abdominal aortogram and selective celiac/hepatic angiograms detailing massive tortuous hepatic artery enlargement and rapid shunting into hepatic veins or portal branches.',
      'Superselective cannulation of the largest dominant intrahepatic arterial shunting branch using a 2.7F microcatheter.',
      'CAUTIONARY PRINCIPLE: Never use small particles (< 300 um) or liquid adhesives (glue/Onyx) as they cause fatal diffuse ischemic biliary necrosis and liver failure.',
      'Careful, graded injection of large calibrated particles (500-700 um or 700-900 um) or microcoils targeted strictly to large focal fistulae, deliberately aiming for only 20-30% reduction in total shunt flow per stage.',
      'Avoid complete arterial skeletonization; preserve hepatic arterial branch flow to sustain the peribiliary vascular plexus.',
      'Completion angiography verifying reduction in rapid early venous filling while preserving forward parenchymal perfusion.',
      'Close post-procedure ICU monitoring of liver enzymes, bilirubin, and cardiac index.'
    ],
    complications: [
      'Ischemic cholangitis / biliary tree necrosis and abscess formation (major dreaded hazard)',
      'Acute liver failure / hepatic infarction',
      'Biliary stricture development',
      'Post-embolization syndrome'
    ],
    maayTariffInr: 58000,
    vendorContacts: [
      'Terumo India Medical (+91 98291 55678)',
      'Merit Medical Systems (+91 98293 88123)',
      'Boston Scientific (+91 98293 44556)'
    ]
  },
  {
    id: 'abernethy-type1-occlusion-test',
    name: 'Abernethy Malformation Type 1: Portal Vein Reconstruction Assessment & Shunt Balloon Occlusion Test',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN080A',
    rghsCode: '693 / 58',
    icd10: 'Q26.5 (Congenital anomaly of portal vein) / K76.6 (Portal hypertension)',
    indications: [
      'Congenital extrahepatic portosystemic shunt (CEPS) Type 1 (end-to-side shunt with apparent complete congenital absence of intrahepatic portal vein branches)',
      'Hepatopulmonary syndrome (HPS), portopulmonary hypertension (POPH), or recurrent hyperammonemic hepatic encephalopathy',
      'Critical diagnostic differentiation: testing whether dormant hypoplastic intrahepatic portal veins exist that can be recruited by temporary shunt balloon occlusion'
    ],
    preOpCriteria: [
      'High-resolution CT/MR Portography revealing total diversion of mesenteric/splenic venous return into the IVC or iliac veins',
      'Baseline ammonia levels, arterial blood gas with PaO2 on room air, and macroaggregated albumin (MAA) lung shunt scan',
      'Pediatric/adult liver transplant team notification and baseline coagulogram'
    ],
    hardware: [
      { category: 'Vascular Access', name: 'Dual Access Sheaths (Femoral + Transhepatic/Jugular)', spec: '8F 45cm Femoral Sheath + 5F Radial/Jugular Sheath', standardStore: 'Angio Suite Store' },
      { category: 'Sizing / Occlusion Balloon', name: 'Equalizer / Coda Occlusion Balloon Catheter', spec: '9F, 20 mm - 32 mm diameter compliant balloon', standardStore: 'Central IR Store' },
      { category: 'Diagnostic Catheter', name: '5F Cobra / Multipurpose / Berenstein Catheter', spec: '100 cm, 0.035" lumen', standardStore: 'Central IR Store' },
      { category: 'Pressure Monitoring Set', name: 'High-Fidelity Pressure Transducer Kit (Edwards)', spec: 'Continuous arterial/venous transducer lines', standardStore: 'Angio Suite Store' },
      { category: 'Guidewire', name: 'Amplatz Super Stiff Guidewire', spec: '0.035", 260 cm', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Right common femoral vein access under ultrasound guidance; placement of an 8F/9F vascular sheath.',
      'Advancement of a 5F MPA catheter into the Abernethy extrahepatic shunt connecting the portal mesenteric confluence directly to the IVC.',
      'Baseline portosystemic manometry recording portal pressure and IVC pressure.',
      'Advancement of a large compliant balloon catheter (Coda or Equalizer, 20-32 mm) across the shunt mouth over an Amplatz Super Stiff wire.',
      'Gradual balloon inflation until complete mechanical occlusion of the portocaval shunt is achieved under fluoroscopy.',
      'Perform wedged portography distal to the occluded balloon to vigorously look for tiny, hypoplastic "dormant" intrahepatic portal vein radicles filling under pressure.',
      'Maintain balloon test occlusion for 15-20 minutes while continuously monitoring mesenteric venous pressure: If portal pressure rises < 25-30 mmHg and intrahepatic branches visualize, shunt is Type 2 (amenable to closure); if portal pressure surges dangerously > 32 mmHg without intrahepatic branches, confirms permanent Type 1 (strict indication for liver transplantation).',
      'Deflate balloon, record post-release pressures, remove sheath, and achieve hemostasis.'
    ],
    complications: [
      'Acute mesenteric venous congestion and bowel ischemia during prolonged balloon occlusion',
      'Shunt rupture / retroperitoneal bleeding',
      'Thrombus formation on the occlusion balloon',
      'Transient severe portal hypertensive spike'
    ],
    maayTariffInr: 48000,
    vendorContacts: [
      'Cook Medical (+91 98292 33445)',
      'Medtronic India (+91 98294 11223)',
      'Boston Scientific (+91 98293 44556)'
    ]
  },
  {
    id: 'abernethy-type2-plug-closure',
    name: 'Abernethy Malformation Type 2: Transcatheter Amplatzer Vascular Plug Closure of Portocaval Shunt',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN080B',
    rghsCode: '693 / 59',
    icd10: 'Q26.5 (Congenital anomaly of portal vein) / I85.0 (Esophageal varices)',
    indications: [
      'Congenital extrahepatic portosystemic shunt Type 2 (side-to-side communication with preserved intrahepatic portal vein arborization)',
      'Documented post-occlusion portal pressure <= 25 mmHg during preliminary occlusion test',
      'Hepatopulmonary syndrome, refractory encephalopathy, or prevention of liver adenomas/malignant degeneration'
    ],
    preOpCriteria: [
      'Successful test balloon occlusion confirming intrahepatic portal arborization and post-test portal venous pressure <= 25 mmHg',
      'Echocardiogram and baseline pulmonary function tests (assessing baseline HPS)',
      'Normal baseline liver enzymes and platelet counts'
    ],
    hardware: [
      { category: 'Vascular Access', name: '8F - 10F 45cm Flexor Ansel Sheath', spec: '8F/10F, 45 cm braided sheath', standardStore: 'Angio Suite Store' },
      { category: 'Vascular Plug', name: 'Amplatzer Vascular Plug II / AVP 4', spec: '14 mm - 22 mm diameter (sized 30-50% larger than shunt)', standardStore: 'Central IR Store' },
      { category: 'Delivery Cable', name: 'Amplatzer Detachable Delivery Cable Set', spec: 'Dedicated mechanical release cable', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: '0.035" Amplatz Super Stiff Wire', spec: '260 cm, 1 cm floppy tip', standardStore: 'Central IR Store' },
      { category: 'Pressure Monitoring Kit', name: 'Direct Invasive Venous Manometer', spec: 'Calibrated transducer', standardStore: 'Angio Suite Store' }
    ],
    techniqueSteps: [
      'Right internal jugular or right common femoral vein access with a 9F/10F 45cm guiding sheath positioned in the IVC at the level of the shunt.',
      'Selective cannulation of the portocaval fistula from the systemic side using a 5F MPA catheter and 0.035" stiff guidewire.',
      'Advancement of the delivery sheath across the shunt into the extrahepatic portal vein.',
      'Precise introduction of an appropriately sized Amplatzer Vascular Plug II (oversized by 30-50% relative to the narrowest waist of the shunt).',
      'Deployment of distal retention disc in the portal side, middle disc spanning the shunt neck, and proximal disc in the IVC junction, ensuring no protrusion into the main portal lumen.',
      'Perform portography through the delivery sheath confirming robust redirection of portal flow into the intrahepatic portal branches.',
      'Invasive pressure recording verifying intrahepatic portal pressure remains stable below 25-28 mmHg.',
      'Unscrewing/release of the Amplatzer delivery cable and final spot fluoroscopy.'
    ],
    complications: [
      'Plug migration into IVC, right heart, or main pulmonary artery',
      'Acute severe portal hypertension with variceal hemorrhage or mesenteric ischemia',
      'Incomplete shunt occlusion with persistent high-velocity residual flow',
      'Main portal vein trunk thrombosis'
    ],
    maayTariffInr: 72000,
    vendorContacts: [
      'Abbott Vascular India (+91 98299 44332)',
      'Cook Medical (+91 98292 33445)',
      'Boston Scientific (+91 98293 44556)'
    ]
  },
  {
    id: 'gorham-stout-bone-sclerotherapy',
    name: 'Gorham-Stout Disease & Generalized Lymphatic Anomaly: Osseous Sclerotherapy with Bleomycin',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN081A',
    rghsCode: '693 / 60',
    icd10: 'M89.5 (Osteolysis) / I89.0 (Lymphedema)',
    indications: [
      'Progressive osteolysis ("vanishing bone disease") and intraosseous cystic lymphatic malformations in Gorham-Stout disease or generalized lymphatic anomaly (GLA)',
      'Imminent pathological fracture, spinal instability, or cortical destruction',
      'Refractory bone pain, localized swelling, and secondary chylothorax/chyloperitoneum'
    ],
    preOpCriteria: [
      'CT and MRI of the affected skeletal structure detailing trabecular resorption, cortical thinning, and intraosseous/extraosseous microcystic lymphatic channels',
      'Baseline pulmonary function tests and chest CT (mandatory screening for chylothorax / pulmonary lymphangiomatosis)',
      'Calculated cumulative Bleomycin lifetime dose tracking (< 300 mg total, <= 15 mg per single treatment)',
      'Platelet count > 60,000/uL, INR < 1.5'
    ],
    hardware: [
      { category: 'Bone Access Needle', name: 'Jamshidi / Osteo-Site Bone Biopsy & Access Needle Set', spec: '11G - 13G, 10-15 cm trochar/bevel needle', standardStore: 'Central IR Store' },
      { category: 'Sclerosant Agent', name: 'Bleomycin Sulphate', spec: '15 IU lyophilized powder vial', standardStore: 'SMS Pharmacy DDC-14' },
      { category: 'Contrast / Embolic Matrix', name: 'Lipiodol Ultra-Fluid & Non-ionic Contrast', spec: 'Lipiodol 10 mL ampoule', standardStore: 'SMS Pharmacy DDC-14' },
      { category: 'Connecting Extension', name: 'High Pressure Tubing with Luer Lock Stopcocks', spec: '500 psi rated extension tubing', standardStore: 'Angio Suite Store' },
      { category: 'Coaxial Micro-Needle', name: '20G Chiba Needle', spec: '15 cm coaxial needle for multi-lacunar access', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Procedure performed under general anesthesia or deep conscious sedation in the CT/Angio hybrid suite.',
      'Pre-procedure high-resolution CT cross-sections identifying the most active lytic bone pockets and cortical breaches.',
      'Percutaneous cortical perforation into the osteolytic cavity using an 11G/13G Jamshidi or Osteo-Site needle under real-time CT and fluoroscopic control.',
      'Gentle aspiration of intraosseous contents (yielding watery lymphatic fluid, chyle, or serosanguinous fluid).',
      'Gentle intraosseous cystography using non-ionic contrast to evaluate cavity margins and ensure absence of rapid systemic venous intravasation.',
      'Emulsion preparation: Bleomycin (15 IU dissolved in 5 mL saline) emulsified with 3-5 mL Lipiodol in 1:1 ratio to provide radiopaque visibility and prolonged osseous adherence.',
      'Controlled slow instillation of Bleomycin-Lipiodol emulsion throughout the trabecular lytic cavities, observing distribution on CT slices.',
      'Stylet reinsertion, cannula withdrawal, and sterile pressure dressing applied over the bone puncture site.'
    ],
    complications: [
      'Systemic intravasation of sclerosant causing pulmonary toxicity',
      'Pathological fracture through weakened cortical bone during needle advancement',
      'Infection / osteomyelitis in immunosuppressed lymphatic tissue',
      'Transient severe post-injection inflammatory pain'
    ],
    maayTariffInr: 38000,
    vendorContacts: [
      'Cook Medical India (+91 98292 33445)',
      'Guerbet India (+91 98291 55678)',
      'Jaipur Surgical (+91 98290 12345)'
    ]
  },
  {
    id: 'pelvic-congestion-syndrome-coiling',
    name: 'Pelvic Congestion Syndrome: Bilateral Ovarian Vein & Internal Iliac Tributary Coil/Foam Embolization',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN082A',
    rghsCode: '693 / 61',
    icd10: 'I86.2 (Pelvic varices) / N94.89 (Other specified conditions associated with female genital organs)',
    indications: [
      'Chronic pelvic pain (> 6 months duration) exacerbated by standing, coitus (dyspareunia), or menstruation in multiparous women',
      'Significant ovarian vein reflux with dilated pelvic venous plexus (> 6-8 mm diameter varices) on imaging',
      'Vulvar, perineal, or upper thigh varicosities communicating with pelvic reservoir'
    ],
    preOpCriteria: [
      'Transvaginal Duplex Doppler ultrasound and Pelvic MRV documenting retrograde ovarian vein flow and parauterine/ovarian venous engorgement',
      'Exclusion of primary gynecologic pathologies (endometriosis, adenomyosis, pelvic inflammatory disease)',
      'Exclusion of secondary compression syndromes (Nutcracker syndrome or May-Thurner syndrome) on CT venography',
      'Coagulation screen: INR < 1.5, Platelets > 80,000/uL; pregnancy excluded (negative beta-hCG)'
    ],
    hardware: [
      { category: 'Vascular Access', name: '6F 45cm Destination / Shuttle Guiding Sheath', spec: '6F, 45 cm, multipurpose curve (right IJV or femoral access)', standardStore: 'Angio Suite Store' },
      { category: 'Diagnostic Catheter', name: '5F Cobra C2 / Headhunter / Multipurpose Catheter', spec: '100 cm, 0.035" lumen', standardStore: 'Central IR Store' },
      { category: 'Embolic Coils', name: '0.035" Interlock / Nester Fibered Embolization Coils', spec: '8 mm - 16 mm diameter x 14-20 cm length', standardStore: 'Central IR Store' },
      { category: 'Foam Sclerosant Set', name: 'Sodium Tetradecyl Sulfate (Fibrovein 3%) & Stopcocks', spec: '3% STS with 10 mL syringes for Tessari foam', standardStore: 'SMS Pharmacy DDC-14' },
      { category: 'Guidewire', name: '0.035" Radiofocus Stiff Glidewire', spec: '260 cm angled hydrophilic wire', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Right internal jugular vein (or common femoral vein) access under ultrasound guidance; 6F sheath placement.',
      'Selective cannulation of the left ovarian vein at its junction with the left renal vein using a 5F Cobra catheter and Glidewire.',
      'Descendant venography in reversed Trendelenburg position (or with Valsalva maneuver) documenting severe reflux, incompetence of valves, and massive pelvic/parauterine pooling.',
      'Advance catheter deep into the pelvic portion of the left ovarian vein, immediately superior to the pelvic brim.',
      'Selective "sandwich technique": Foam sclerotherapy (3% STS foamed 1:4 with air) instilled into parauterine varicose nests, followed by dense mechanical coiling of the ovarian vein trunk using 0.035" fibered coils (sized 20-30% larger than vein diameter) extending upward to within 2-3 cm of the renal vein confluence.',
      'Engage the right ovarian vein directly from the anterolateral aspect of the infrarenal IVC (often at L2-L3 level), perform venography, and embolize if refluxing.',
      'Evaluate internal iliac vein tributaries (internal pudendal, obturator, uterine veins) and embolize with microcoils/foam if demonstrating reflux.',
      'Completion spot fluoroscopy and cavogram confirming total occlusion of refluxing pathways and no coil displacement.'
    ],
    complications: [
      'Coil migration into left renal vein, IVC, right heart, or pulmonary artery',
      'Ovarian vein perforation / retroperitoneal hematoma',
      'Post-embolization thrombophlebitis pain and low-grade fever (self-limiting, 3-5 days)',
      'Transient worsening of pelvic heaviness'
    ],
    maayTariffInr: 46000,
    vendorContacts: [
      'Cook Medical India (+91 98292 33445)',
      'Boston Scientific (+91 98293 44556)',
      'STD Pharmaceutical (+91 98298 77665)'
    ]
  },
  {
    id: 'ovarian-vein-vulvar-varices-coiling',
    name: 'Left Ovarian Vein Reflux & Vulvar Varices: Superselective Transjugular Coil Embolization',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN082B',
    rghsCode: '693 / 62',
    icd10: 'I86.8 (Varicose veins of other specified sites) / I86.2 (Pelvic varices)',
    indications: [
      'Painful, protruding vulvar and labial varicosities in multiparous females exacerbated by sitting or standing',
      'Direct communication and feeding from an incompetent, refluxing left ovarian vein confirmed on duplex ultrasound',
      'Refractory pain, recurrent thrombophlebitis of external genitalia, or contact bleeding'
    ],
    preOpCriteria: [
      'Standing perineal and translabial color Doppler ultrasound tracing variceal source to the pelvic venous escape points (inguinal / obturator / perineal)',
      'Negative pregnancy test; baseline blood panel',
      'Exclusion of iliofemoral deep venous obstruction via lower extremity duplex'
    ],
    hardware: [
      { category: 'Vascular Access', name: '6F 45cm Introducer Sheath', spec: 'Transjugular approach, 6F, 45 cm', standardStore: 'Angio Suite Store' },
      { category: 'Diagnostic Catheter', name: '5F Simmons 1 / Cobra C2 Catheter', spec: '100 cm, 0.035" lumen', standardStore: 'Central IR Store' },
      { category: 'Microcatheter System', name: '2.7F Progreat Microcatheter System', spec: '130 cm, 0.014" Glidewire GT', standardStore: 'Central IR Store' },
      { category: 'Embolic Coils', name: 'Nester / Target Microcoils', spec: '0.018" and 0.035" microcoils (6 mm - 12 mm)', standardStore: 'Central IR Store' },
      { category: 'Foam Sclerosant', name: 'Polidocanol 2% Foam', spec: '2% ampoules for microcatheter delivery', standardStore: 'SMS Pharmacy DDC-14' }
    ],
    techniqueSteps: [
      'Right internal jugular vein cannulation with a 6F sheath under real-time ultrasound guidance.',
      'Selective catheterization of the left renal vein, then engaging the ostium of the left ovarian vein using a 5F Cobra or Simmons catheter.',
      'Valsalva-augmented venography demonstrating retrograde rush of contrast across the pelvic brim down into the labial/vulvar venous reservoir via trans-pelvic communications.',
      'Superselective advancement of a 2.7F microcatheter into the lowermost pelvic escape branch feeding the vulvar plexus.',
      'Injection of 2-3 mL of Polidocanol 2% foam to seal the distal pelvic escape plexus under direct fluoroscopy.',
      'Proximal mechanical occlusion using multiple detachable and pushable 0.018" and 0.035" fibered coils deployed sequentially from the pelvic segment to the mid-abdominal ovarian vein.',
      'Pullback venography confirming complete occlusion of the refluxing trunk and preservation of left renal venous clearance.',
      'Neck puncture compression and post-procedure rest for 2 hours.'
    ],
    complications: [
      'Non-target coil migration to the pulmonary circulation',
      'Vulvar or perineal tissue thrombophlebitic induration',
      'Left renal vein ostial thrombosis',
      'Retroperitoneal dye extravasation'
    ],
    maayTariffInr: 44000,
    vendorContacts: [
      'Cook Medical (+91 98292 33445)',
      'Terumo India Medical (+91 98291 55678)',
      'Medtronic India (+91 98294 11223)'
    ]
  },
  {
    id: 'fmd-renal-angioplasty',
    name: 'Fibromuscular Dysplasia (FMD): Renal Artery Balloon Angioplasty without Stenting',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN083A',
    rghsCode: '693 / 63',
    icd10: 'I77.3 (Arterial fibromuscular dysplasia) / I15.0 (Renovascular hypertension)',
    indications: [
      'Medial fibroplasia with classic "string-of-beads" appearance in middle or distal main renal artery or branch vessels',
      'Refractory or malignant renovascular hypertension in young/middle-aged patients (especially females)',
      'Preservation of renal function / ischemic nephropathy reversal'
    ],
    preOpCriteria: [
      'CT/MR Renal Angiogram demonstrating medial fibroplasia (string-of-beads) or intimal fibroplasia (focal concentric band) in mid-to-distal renal artery',
      'Failure of blood pressure control on >= 2-3 antihypertensive agents',
      'Normal baseline serum creatinine, INR < 1.4, Platelets > 80,000/uL'
    ],
    hardware: [
      { category: 'Vascular Access', name: '6F 45cm Destination / Shuttle Guiding Sheath', spec: '6F, 45 cm, renal curve', standardStore: 'Angio Suite Store' },
      { category: 'Diagnostic Catheter', name: '5F Renal Double Curve (RDC) Catheter', spec: '100 cm, 0.035" lumen', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: '0.014" V-18 ControlWire / PT2 Moderately Stiff Wire', spec: '300 cm, 0.014" atraumatic guidewire', standardStore: 'Central IR Store' },
      { category: 'PTA Dilatation Balloon', name: 'Over-the-Wire Non-Compliant PTA Balloon (Ultraverse / Viatrac)', spec: '4 mm - 6 mm diameter x 20-40 mm length', standardStore: 'Central IR Store' },
      { category: 'Intra-Arterial Vasodilator', name: 'Inj Nitroglycerin (NTG) & Verapamil', spec: '100-200 mcg NTG aliquots to prevent vasospasm', standardStore: 'SMS Pharmacy DDC-14' }
    ],
    techniqueSteps: [
      'Retrograde common femoral artery access; introduction of a 6F renal guiding sheath into the abdominal aorta.',
      'Selective non-traumatic cannulation of the affected renal artery ostium using a 5F RDC catheter; administer intra-arterial heparin (5,000 IU) and 100-200 mcg Nitroglycerin to prevent vasospasm.',
      'High-magnification DSA documenting multiple web-like stenoses alternating with aneurysmal ectasias (string-of-beads) in the mid-to-distal renal artery.',
      'Advance an 0.014" atraumatic soft-tip guidewire across the dysplastic webs into a distal interlobar branch under fluoroscopic guidance.',
      'Invasive trans-lesional pressure gradient recording: Confirm systolic gradient >= 20 mmHg or mean gradient >= 10 mmHg (or Pd/Pa ratio <= 0.90 under hyperemia).',
      'Select a non-compliant PTA balloon sized 1:1 with the normal proximal/distal reference artery (typically 4 mm - 6 mm diameter); perform gentle prolonged dilatations (60-90 seconds) at nominal pressures (4-8 atm).',
      'CRITICAL PRINCIPLE: Stenting is strongly AVOIDED in FMD due to high elasticity and spontaneous cure with balloon angioplasty alone (stents are reserved strictly for flow-limiting dissection or arterial perforation).',
      'Repeat trans-stenotic pressure measurement showing complete abolition of systolic gradient (< 5 mmHg or Pd/Pa > 0.95) and completion DSA demonstrating smooth arterial contour and rapid cortical nephrogram.'
    ],
    complications: [
      'Acute renal artery dissection (may mandate bailout stent deployment)',
      'Renal artery rupture / retroperitoneal hemorrhage',
      'Severe intrarenal vasospasm (manage with intra-arterial NTG/verapamil)',
      'Distal micro-thromboembolism'
    ],
    maayTariffInr: 45000,
    vendorContacts: [
      'Boston Scientific India (+91 98293 44556)',
      'Abbott Vascular (+91 98299 44332)',
      'Cordis India (+91 98295 77665)'
    ]
  },
  {
    id: 'fmd-carotid-dissection-covered-stent',
    name: 'FMD with Carotid Dissection / Pseudoaneurysm: Endovascular Covered Stent Reconstruction',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN083B',
    rghsCode: '693 / 64',
    icd10: 'I77.3 (Arterial fibromuscular dysplasia) / I72.0 (Aneurysm and dissection of carotid artery)',
    indications: [
      'Extracranial internal carotid artery (ICA) dissection or expanding dissecting pseudoaneurysm secondary to underlying fibromuscular dysplasia',
      'Recurrent transient ischemic attacks (TIAs) or stroke refractory to therapeutic anticoagulation/antiplatelet therapy',
      'Critical flow limitation in true lumen with risk of impending total ICA occlusion'
    ],
    preOpCriteria: [
      'CTA or MRA Head and Neck documenting string-of-beads in mid-cervical ICA, intimal flap, false lumen, or dissecting pseudoaneurysm with distal intracranial runoff',
      'Neurological baseline examination (NIHSS score)',
      'Dual antiplatelet therapy (DAPT: Aspirin 150mg + Clopidogrel 300mg loading dose or Ticagrelor 180mg) administered prior to stenting'
    ],
    hardware: [
      { category: 'Vascular Access', name: '6F 90cm Shuttle / Neuron MAX Guiding Sheath', spec: '6F, 90 cm long sheath', standardStore: 'Angio Suite Store' },
      { category: 'Distal Protection Device', name: 'SpiderFX / Emboshield Embolic Protection Filter', spec: '4.0 mm - 7.0 mm filter basket', standardStore: 'Central IR Store' },
      { category: 'Covered Stent / Flow Diverter', name: 'Viabahn Endoprosthesis / Precise Nitinol Stent', spec: '6 mm - 8 mm diameter x 40-60 mm length', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: '0.014" Synchro / Transend Microguidewire', spec: '300 cm steerable neuro wire', standardStore: 'Central IR Store' },
      { category: 'Post-Dilation Balloon', name: 'Ultra-Soft / Sterling PTA Balloon', spec: '5 mm - 6 mm x 20 mm', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Ultrasound-guided common femoral artery puncture; placement of a 6F 90cm guiding sheath into the distal common carotid artery.',
      'Diagnostic biplane cerebral angiography detailing the cervical carotid dissection, true/false lumens, pseudoaneurysm neck, and circle of Willis collateral cross-filling.',
      'Careful negotiation of the true lumen across the dissected segment using an 0.014" steerable microguidewire under roadmapping, anchoring the wire in the petrous/cavernous ICA.',
      'Deployment of an embolic protection filter in the high cervical ICA petrous landing zone (if anatomy permits).',
      'Delivery of a self-expanding covered stent (e.g., Viabahn 6-7 mm) or closed-cell carotid stent spanning the entire dissected segment from normal distal ICA to normal proximal ICA.',
      'Gentle balloon dilation with a 5-6 mm balloon to adapt the stent to the vessel wall and seal the false lumen/pseudoaneurysm entrance.',
      'Retrieval of the distal protection filter basket under fluoroscopic control.',
      'Completion biplane angiograms confirming exclusion of the pseudoaneurysm, smooth reconstructed true lumen, brisk antegrade intracranial flow (TICI 3), and absence of distal intracranial emboli.'
    ],
    complications: [
      'Intracranial thromboembolism / acute ischemic stroke',
      'Hyperperfusion syndrome post-recanalization',
      'Carotid sinus reflex bradycardia/hypotension (have atropine ready)',
      'Access site hematoma'
    ],
    maayTariffInr: 82000,
    vendorContacts: [
      'W.L. Gore & Associates (+91 98290 99881)',
      'Medtronic Neurovascular (+91 98294 11223)',
      'Stryker India (+91 98292 66554)'
    ]
  },
  {
    id: 'takayasu-subclavian-stenting',
    name: 'Takayasu Arteritis: Subclavian Artery Severe Stenosis Balloon Angioplasty & Covered Stenting',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN084A',
    rghsCode: '693 / 65',
    icd10: 'M31.4 (Aortic arch syndrome [Takayasu]) / I77.1 (Stricture of artery)',
    indications: [
      'Severe upper limb claudication, pulse deficit, or subclavian steal syndrome in inactive/burnt-out phase of Takayasu arteritis',
      'Critical stenosis (> 70%) of the subclavian artery with resting inter-arm systolic pressure differential > 30 mmHg',
      'Recurrent arm ischemia impairing daily activities'
    ],
    preOpCriteria: [
      'MANDATORY: Documentation of disease remission / quiescent phase (normal ESR < 20 mm/hr, normal high-sensitivity CRP, lack of systemic inflammatory signs; pre-treated with immunosuppression/steroids)',
      'PET-CT or Contrast MRI Angiogram verifying lack of active transmural mural enhancement/edema in aortic arch and branch vessels',
      'Aortic arch CTA assessing ostial vs. truncal involvement and vertebral artery origin patency'
    ],
    hardware: [
      { category: 'Vascular Access', name: '6F 90cm Guiding Sheath / 6F 45cm Destination', spec: 'Femoral or retrograde brachial approach', standardStore: 'Angio Suite Store' },
      { category: 'Diagnostic Catheter', name: '5F Headhunter / Simmons 2 Catheter', spec: '100 cm, 0.035" lumen', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: '0.035" Radiofocus Stiff Glidewire & 0.018" Steelcore Wire', spec: '260 cm angled stiff wire and 300 cm support wire', standardStore: 'Central IR Store' },
      { category: 'Covered Stent', name: 'Balloon-Expandable Covered Stent (Advanta V12 / BeGraft)', spec: '8 mm - 10 mm diameter x 28-38 mm length', standardStore: 'Central IR Store' },
      { category: 'High-Pressure Balloon', name: 'Conquest / Atlas Gold PTA Balloon', spec: '8 mm - 9 mm x 40 mm', standardStore: 'Angio Suite Store' }
    ],
    techniqueSteps: [
      'Access via right common femoral artery (and retrograde left brachial access if severe ostial flush occlusion).',
      'Arch aortography in 45-degree LAO projection delineating subclavian artery ostium, vertebral origin, and internal mammary collateralization.',
      'Systemic heparinization (70-100 IU/kg, target ACT > 250s).',
      'Careful recanalization of the fibrotic, heavily thickened arterial stenosis using an angled Glidewire supported by a 5F Headhunter catheter; exchange for a stiff support wire.',
      'Predilatation with a 5-6 mm non-compliant balloon, watching for high-pressure fibrotic resistance.',
      'Deployment of a balloon-expandable covered stent (Advanta V12 / BeGraft, 8-10 mm) precisely across the lesion, taking meticulous care to spare the vertebral artery origin.',
      'Post-dilation to nominal vessel diameter with high pressure (14-18 atm) to eliminate the dense fibrotic waist.',
      'Completion DSA confirming widely patent lumen, antegrade vertebral flow without steal, and restoration of palpable radial pulse with equalized bilateral blood pressure.'
    ],
    complications: [
      'Arterial rupture secondary to high-pressure dilation of inflamed, brittle arterial wall',
      'Early restenosis or stent occlusion if performed during active inflammatory phase',
      'Inadvertent coverage of vertebral or internal mammary artery',
      'Cerebral thromboembolism'
    ],
    maayTariffInr: 64000,
    vendorContacts: [
      'Getinge / Atrium (+91 98296 22110)',
      'Bentley InnoMed (+91 98297 33441)',
      'Boston Scientific (+91 98293 44556)'
    ]
  },
  {
    id: 'takayasu-carotid-angioplasty',
    name: 'Takayasu Arteritis: Innominate / Common Carotid Artery Balloon Angioplasty',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN084B',
    rghsCode: '693 / 66',
    icd10: 'M31.4 (Aortic arch syndrome [Takayasu]) / I65.2 (Occlusion and stenosis of carotid artery)',
    indications: [
      'Symptomatic severe stenosis (> 70%) of innominate or common carotid artery causing cerebral hypoperfusion, amaurosis fugax, or syncope',
      'Quiescent phase Takayasu arteritis with documented medical control of active inflammation',
      'Bilateral supra-aortic trunk stenoses with critical global cerebral ischemia'
    ],
    preOpCriteria: [
      'Biochemical remission confirmed: ESR < 20 mm/hr, hsCRP normal, stable steroid maintenance dose',
      'Arch CTA and MRA brain showing circle of Willis collateral sufficiency and supra-aortic trunk mural thickness',
      'Pre-procedure dual antiplatelet therapy; baseline neurological deficit scoring'
    ],
    hardware: [
      { category: 'Vascular Access', name: '6F 90cm Shuttle / Flexor Guiding Sheath', spec: '6F, 90 cm braided sheath', standardStore: 'Angio Suite Store' },
      { category: 'Diagnostic Catheter', name: '5F Headhunter / Simmons 2 Catheter', spec: '100 cm, 0.035" lumen', standardStore: 'Central IR Store' },
      { category: 'Distal Protection Device', name: 'FilterWire EZ / Emboshield NAV6', spec: 'Carotid embolic protection filter basket', standardStore: 'Central IR Store' },
      { category: 'Cutting / Non-Compliant Balloon', name: 'Peripheral Cutting Balloon / Ultraverse High-Pressure', spec: '6 mm - 8 mm x 20-40 mm', standardStore: 'Central IR Store' },
      { category: 'Carotid Stent', name: 'Precise Pro RX / Acculink Carotid Stent', spec: '7 mm - 9 mm diameter x 30-40 mm length (if bailout stenting needed)', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Ultrasound-guided common femoral artery puncture; placement of a 6F 90cm sheath parked in the aortic arch.',
      'Arch aortogram and selective common carotid/innominate angiogram measuring stenosis caliber and cranial intracranial circulation.',
      'Systemic anticoagulation with IV unfractionated heparin (target ACT 250-300 seconds).',
      'Careful crossing of the fibrotic innominate/carotid stenosis with an 0.014" microguidewire; deploy distal embolic protection filter in distal cervical ICA if anatomically accessible.',
      'Careful balloon angioplasty using a non-compliant or focal scoring balloon (6-8 mm), dilating gradually to efface the stricture without rupturing the fibrous adventitia.',
      'In Takayasu arteritis, conservative balloon angioplasty is preferred initially; if elastic recoil > 50% or flow-limiting dissection occurs, deploy a self-expanding open/closed-cell stent.',
      'Retrieve embolic protection filter; perform completion biplane intracranial views to confirm preserved TICI 3 cerebral perfusion.',
      'Post-procedure continuous monitoring of blood pressure to avoid reperfusion cerebral hyperperfusion syndrome.'
    ],
    complications: [
      'Distal embolization / ischemic stroke',
      'Cerebral hyperperfusion syndrome / intracranial hemorrhage',
      'Arterial dissection / rupture',
      'Acute restenosis triggered by inflammatory flare'
    ],
    maayTariffInr: 68000,
    vendorContacts: [
      'Abbott Vascular India (+91 98299 44332)',
      'Boston Scientific (+91 98293 44556)',
      'Cordis India (+91 98295 77665)'
    ]
  },
  {
    id: 'takayasu-aortoplasty-large-stent',
    name: 'Takayasu Arteritis: Aortic Coarctation / Mid-Aortic Syndrome Balloon Aortoplasty & Stenting',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN084C',
    rghsCode: '693 / 67',
    icd10: 'M31.4 (Aortic arch syndrome [Takayasu]) / I77.1 (Stricture of artery)',
    indications: [
      'Severe atypical coarctation of descending thoracic or abdominal aorta secondary to chronic panarteritis',
      'Malignant upper body hypertension with upper-to-lower limb systolic pressure gradient > 30-40 mmHg',
      'Lower limb claudication, congestive cardiac failure, or mesenteric/renal hypoperfusion'
    ],
    preOpCriteria: [
      'Thoracoabdominal CT Angiography mapping the narrowest aortic diameter, length of affected segment, and visceral/renal artery origins',
      'Verified inflammatory disease quiescence (normal ESR and hsCRP; immunosuppressive therapy optimized)',
      'Transthoracic echocardiogram assessing left ventricular hypertrophy and cardiac output'
    ],
    hardware: [
      { category: 'Vascular Access', name: '10F - 12F 45cm DrySeal / Flexor Introducer Sheath', spec: '10F/12F large-bore sheath', standardStore: 'Angio Suite Store' },
      { category: 'Guidewire', name: 'Lunderquist Extra Stiff Wire / Backup Meier Wire', spec: '0.035", 260 cm extra-rigid wire', standardStore: 'Central IR Store' },
      { category: 'Large Balloon-Expandable Stent', name: 'Cheatham-Platinum (CP) Stent / Palmaz Genesis XL', spec: 'Bare or covered CP Stent (8-zig / 10-zig, 34-45 mm length)', standardStore: 'Central IR Store' },
      { category: 'Bi-Bifurcated Balloon Catheter', name: 'BIB (Balloon-in-Balloon) Catheter (NuMED)', spec: '18 mm - 24 mm outer balloon x 40-50 mm length', standardStore: 'Angio Suite Store' },
      { category: 'Diagnostic Catheter', name: '5F Pigtail Catheter with Centimeter Markers', spec: '100 cm marked pigtail', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Bilateral common femoral access under ultrasound guidance: 12F sheath on the intervention side, 5F sheath on contralateral side.',
      'Simultaneous dual pressure monitoring (ascending/descending thoracic aorta via radial or upper femoral access vs. distal femoral pressure) measuring baseline trans-coarctation gradient.',
      'Thoracoabdominal aortography using marked pigtail catheter identifying relation to visceral and renal branches.',
      'Advance Lunderquist extra-stiff wire across the coarctation into the ascending aorta.',
      'Mount Cheatham-Platinum (CP) stent onto a NuMED Balloon-in-Balloon (BIB) catheter; advance inside the 12F sheath across the aortic constriction.',
      'Inflate inner balloon of BIB catheter to achieve central positioning and prevent stent foreshortening; subsequently inflate outer balloon to full diameter to expand stent against the fibrotic aortic wall.',
      'Perform pullback aortic manometry verifying reduction of trans-aortic pressure gradient to < 10 mmHg.',
      'Completion aortogram showing broad aortic lumen and unrestricted run-off into distal aorta and iliac vessels; femoral puncture closed with dual Perclose ProGlide closure devices.'
    ],
    complications: [
      'Aortic rupture / catastrophic retroperitoneal or mediastinal hemorrhage',
      'Aortic dissection (Stanford type A or B)',
      'Inadvertent coverage of renal or mesenteric arterial origins',
      'Stent migration'
    ],
    maayTariffInr: 88000,
    vendorContacts: [
      'NuMED Inc / Becton Dickinson (+91 98290 88712)',
      'Cordis India (+91 98295 77665)',
      'Cook Medical (+91 98292 33445)'
    ]
  },
  {
    id: 'tao-pedal-arch-angioplasty-sympathectomy',
    name: "Buerger's Disease (TAO): Deep Pedal Arch Balloon Angioplasty & Chemical Lumbar Sympathectomy",
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN085A',
    rghsCode: '693 / 68',
    icd10: 'I73.1 (Thromboangiitis obliterans [Buerger])',
    indications: [
      "Severe rest pain (Rutherford Category 4) or ischemic non-healing digital ulceration/gangrene (Rutherford Category 5-6) in Buerger's disease",
      'Severe multi-segment infrapopliteal and pedal arch occlusions with characteristic "corkscrew" collateralization',
      'Failure of smoking cessation and medical vasodilator therapy alone to relieve limb-threatening ischemia'
    ],
    preOpCriteria: [
      'Strict verification of tobacco/bidi smoking cessation counseling; baseline cotinine levels if feasible',
      'Detailed CT Angiogram or digital runoff mapping showing disease sparing proximal femoropopliteal segment with severe distal tibial/pedal involvement',
      'Skin inspection, baseline ankle-brachial index (ABI) or toe-brachial index (TBI), serum creatinine'
    ],
    hardware: [
      { category: 'Vascular Access', name: '4F/5F 11cm Ultrasound Guided Antegrade Sheath', spec: 'Antegrade superficial femoral access or retrograde pedal access', standardStore: 'Angio Suite Store' },
      { category: 'Guidewire', name: '0.014" Command / Glidewire Advantage / Fielder XT', spec: '300 cm, 0.014" atraumatic tapered wire', standardStore: 'Central IR Store' },
      { category: 'Long PTA Dilatation Balloon', name: 'Coyote / Armada 14 / Ultraverse 014 Balloon', spec: '1.5 mm - 2.5 mm diameter x 150-220 mm length', standardStore: 'Central IR Store' },
      { category: 'Pedal Arch Balloon', name: 'NanoCross / Savvy 0.014 Micro-Balloon Catheter', spec: '1.25 mm - 1.5 mm x 20 mm', standardStore: 'Central IR Store' },
      { category: 'Sympathectomy Needle & Agent', name: '21G 15cm Chiba Needle & Dehydrated Alcohol / Phenol', spec: '100% absolute ethanol or 6% aqueous phenol', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Step 1 (Chemical Lumbar Sympathectomy): Prone position on CT table; under CT guidance, advance 21G 15cm Chiba needle to the anterolateral aspect of L2-L3 vertebral bodies (lumbar sympathetic chain).',
      'Verify needle position with 0.5 mL contrast confirming retroperitoneal longitudinal spread along psoas fascia without intravascular/psoas injection.',
      'Instill 5-8 mL of 100% absolute ethanol (or 6% phenol) preceded by 2 mL 2% lidocaine; document immediate warming and hyperemic flush of the ipsilateral foot.',
      'Step 2 (Endovascular Pedal Arch Angioplasty): Supine position; antegrade ultrasound-guided puncture of ipsilateral superficial femoral or popliteal artery with a 4F sheath.',
      'High-magnification DSA of the calf and foot with extended imaging runs to map the plantar arch, dorsalis pedis, and lateral plantar artery connections.',
      'Cannulate the target tibial artery (anterior or posterior tibial) using an 0.014" microguidewire; cross total occlusions into the pedal arch using subintimal or intraluminal technique.',
      'Perform prolonged (120-180 seconds) balloon angioplasty using long 1.5-2.0 mm balloons across the tibial vessels, followed by 1.25-1.5 mm micro-balloon dilatation across the pedal arch (completing the direct angiosome-targeted arterial circuit).',
      'Completion angiography documenting restored in-line flow to the digital arteries of the affected toe and brisk blush in the ulcer bed.'
    ],
    complications: [
      'Vessel rupture of delicate, inflamed pedal branches (manage with prolonged low-pressure balloon tamponade)',
      'Post-sympathectomy postsympathetic neuralgia (transient thigh dysesthesia)',
      'Retroperitoneal hematoma / psoas hematoma',
      'Distal microthrombosis'
    ],
    maayTariffInr: 48000,
    vendorContacts: [
      'Boston Scientific India (+91 98293 44556)',
      'Terumo India Medical (+91 98291 55678)',
      'Cook Medical (+91 98292 33445)'
    ]
  },
  {
    id: 'raynaud-digital-vasodilator-botox',
    name: 'Raynaud Phenomenon with Ulceration: Upper Extremity Vasodilatory Infusion & Botulinum Toxin Block',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN086A',
    rghsCode: '693 / 69',
    icd10: 'I73.0 (Raynaud syndrome)',
    indications: [
      'Severe secondary Raynaud phenomenon (associated with systemic sclerosis / crest syndrome) with refractory, excruciating digital ulceration or threatened gangrene',
      'Failed conservative, calcium-channel blocker, PDE-5 inhibitor, and IV prostacyclin therapy',
      'Severe digital vasospasm with profound microvascular hypoperfusion on laser Doppler / thermography'
    ],
    preOpCriteria: [
      'Clinical assessment of digital trophic changes and ulcer depth',
      'Upper extremity Doppler ultrasound detailing patency of radial, ulnar, and superficial/deep palmar arches',
      'Screening for proximal subclavian/brachial fixed occlusions; baseline inflammatory and renal labs'
    ],
    hardware: [
      { category: 'Vascular Access', name: '4F 11cm Radial / Brachial Introducer Sheath', spec: '4F hydrophilic coated sheath', standardStore: 'Angio Suite Store' },
      { category: 'Diagnostic Catheter', name: '4F Berenstein / Multipurpose Catheter', spec: '100 cm, 0.035" lumen', standardStore: 'Central IR Store' },
      { category: 'Microcatheter', name: '2.0F - 2.4F Progreat Microcatheter', spec: '130 cm, 0.014" lumen', standardStore: 'Central IR Store' },
      { category: 'Vasodilator / Spasmolytic', name: 'Inj Alprostadil (PGE-1) / Nitroglycerin & Papaverine', spec: 'PGE-1 20-40 mcg / NTG 200 mcg', standardStore: 'SMS Pharmacy DDC-14' },
      { category: 'Botulinum Toxin', name: 'Botulinum Toxin Type A (Botox / Dysport)', spec: '100 Units vial reconstituted in 10 mL preservative-free saline', standardStore: 'SMS Pharmacy DDC-14' }
    ],
    techniqueSteps: [
      'Step 1 (Selective Intra-Arterial Infusion): Retrograde 4F brachial or radial access under ultrasound guidance.',
      'Selective palmar digital arteriography using 4F MPA and 2.0F microcatheter documenting diffuse corkscrewing, spasm, and non-filling of digital branches.',
      'Superselective slow intra-arterial infusion of vasodilators: Nitroglycerin (100-200 mcg) and Alprostadil (PGE-1, 20 mcg over 20 minutes) into the radial/ulnar palmar arches; document opening of previously spastic digital branches on serial runs.',
      'Step 2 (Targeted Botulinum Toxin A Sympathetic Block): Following angiographic restoration, patient positioned supine; hand prepped sterilely.',
      'Using a 30G needle, inject 50-100 units of Botulinum Toxin Type A divided into aliquots (10-20 units per web space) adjacent to the neurovascular bundles at the level of the metacarpophalangeal joints and along the wrist flexor crease.',
      'Botox induces chemical periarterial sympathectomy by blocking acetylcholine and substance P mediated vasoconstrictive tone, providing prolonged relief for 3-6 months.',
      'Sheath removal, manual compression hemostasis, and non-occlusive dressing applied.'
    ],
    complications: [
      'Transient intrinsic hand muscle weakness (intrinsic hand paresis from botulinum diffusion)',
      'Systemic hypotension / headache from vasodilatory infusion',
      'Radial / brachial artery access site hematoma or spasm',
      'Infection at injection sites'
    ],
    maayTariffInr: 32000,
    vendorContacts: [
      'Allergan India (+91 98290 33221)',
      'Terumo India (+91 98291 55678)',
      'Jaipur Surgical (+91 98290 12345)'
    ]
  },
  {
    id: 'blue-toe-atheroma-exclusion-stent',
    name: 'Blue Toe Syndrome / Micro-Embolism: Diagnostic Localization & Atheroma Stent-Graft Exclusion',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN087A',
    rghsCode: '693 / 70',
    icd10: 'I75.02 (Atheroembolism of lower extremity) / I70.20 (Unspecified atherosclerosis of native arteries of extremities)',
    indications: [
      'Acute or recurrent painful cyanosis/petechiae of one or more toes ("blue toe") with preserved palpable pedal pulses',
      'Ulcerated, shaggy, non-stenosing atheromatous plaque or eccentric pseudoaneurysm of the abdominal aorta, iliac, or common femoral artery serving as the embolic source',
      'Prevention of progressive digital gangrene, recurrent atheroembolization, or limb loss'
    ],
    preOpCriteria: [
      'High-resolution CT Angiography of the abdominal aorta and lower extremities to identify non-calcified ulcerated atheroma, mural thrombus, or shaggy aorta',
      'Verification of normal palpable distal pedal pulses or normal resting ankle-brachial index (ruling out low-flow macrovascular occlusion)',
      'Renal profile, coagulation screen, exclusion of cardiac sources (transesophageal echocardiogram to rule out left atrial/ventricular mural thrombi)'
    ],
    hardware: [
      { category: 'Vascular Access', name: '7F - 8F 45cm Destination Introducer Sheath', spec: '7F/8F, 45 cm curved tip', standardStore: 'Angio Suite Store' },
      { category: 'Diagnostic Catheter', name: '5F Pigtail / 5F Straight Flush Catheter', spec: '100 cm marked centimeter catheter', standardStore: 'Central IR Store' },
      { category: 'Intravascular Ultrasound (IVUS)', name: 'Philips Volcano Visions PV .035 IVUS Catheter', spec: '8.2F catheter for direct atheroma visualization', standardStore: 'Angio Suite Store' },
      { category: 'Covered Stent-Graft', name: 'Balloon-Expandable / Self-Expanding Stent-Graft (Viabahn / Advanta V12)', spec: '7 mm - 12 mm diameter x 40-100 mm length', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: '0.035" Amplatz Super Stiff Wire', spec: '260 cm, 1 cm flexible tip', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Retrograde common femoral artery access contralateral (or ipsilateral if lesion is proximal) under ultrasound guidance.',
      'High-resolution non-magnified and magnified digital subtraction angiography in multiple oblique views identifying the ragged, ulcerated embolic plaque source (often subtle and non-stenotic).',
      'Intravascular ultrasound (IVUS) evaluation: Pullback through the suspected arterial segment to definitively localize the mobile, hypoechoic protruding thrombus or ulcerated crater and measure accurate reference vessel diameters.',
      'Systemic heparinization (5,000 IU IV bolus).',
      'Gentle wire passage across the ulcerated segment avoiding mechanical dislodgement of friable debris.',
      'Deployment of an appropriately sized PTFE-covered stent-graft (Viabahn or Advanta V12) completely covering the ulcerated crater with at least 10-15 mm normal landing zone on either side, effectively trapping the atheroma against the arterial wall.',
      'Gentle post-dilation of stent landing zones using a non-compliant balloon.',
      'Completion angiography and IVUS proving total exclusion of the atheromatous plaque, smooth in-line laminar flow, and absence of endoleak.'
    ],
    complications: [
      'Procedural dislodgement of atheromatous debris causing catastrophic downstream pedal micro-embolization (trash foot)',
      'Renal atheroembolism (cholesterol crystal embolization / acute kidney injury)',
      'Stent-graft thrombosis',
      'Access site hematoma'
    ],
    maayTariffInr: 62000,
    vendorContacts: [
      'W.L. Gore & Associates (+91 98290 99881)',
      'Getinge / Atrium (+91 98296 22110)',
      'Philips Healthcare India (+91 98291 77665)'
    ]
  },
  {
    id: 'scimitar-anomalous-artery-embolization',
    name: 'Scimitar Syndrome: Transcatheter Occlusion of Anomalous Systemic Arterial Supply',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN088A',
    rghsCode: '693 / 71',
    icd10: 'Q26.8 (Scimitar syndrome / Congenital venous malformation) / Q25.79 (Other congenital anomalies of pulmonary artery)',
    indications: [
      'Scimitar syndrome (congenital venolobar syndrome) with large anomalous systemic arterial feeder originating from abdominal/descending thoracic aorta supplying hypoplastic right lung',
      'Significant left-to-right or left-to-systemic shunt causing high-output cardiac strain, pulmonary hypertension, or recurrent respiratory infections',
      'Hemoptysis secondary to high-pressure systemic perfusion of the dysplastic right lower lobe'
    ],
    preOpCriteria: [
      'CT Thorax / CTA Abdomen confirming hypoplastic right lung, dextroposition of heart, scimitar vein draining into IVC, and aberrant systemic feeder vessel from lower aorta/celiac territory',
      'Echocardiography assessing pulmonary arterial hypertension and associated cardiac anomalies (e.g., ASD, VSD)',
      'Baseline CBC, renal function, coagulation screen'
    ],
    hardware: [
      { category: 'Vascular Access', name: '5F/6F 45cm Flexor Introducer Sheath', spec: '5F/6F femoral access', standardStore: 'Angio Suite Store' },
      { category: 'Diagnostic Catheter', name: '5F Cobra C2 / Simmons 1 / Yashiro Catheter', spec: '100 cm, 0.035" lumen', standardStore: 'Central IR Store' },
      { category: 'Vascular Plug / Coils', name: 'Amplatzer Vascular Plug (AVP 4 / AVP II) & Detachable Coils', spec: 'AVP 4 mm - 10 mm / 0.018" - 0.035" microcoils', standardStore: 'Central IR Store' },
      { category: 'Microcatheter System', name: '2.7F Progreat Microcatheter', spec: '130 cm with 0.014" Glidewire GT', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: '0.035" Radiofocus Stiff Glidewire', spec: '260 cm angled stiff wire', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Retrograde right common femoral artery puncture and 5F/6F sheath placement.',
      'Descending thoracic and abdominal aortography using a 5F pigtail catheter identifying the origin, caliber, and path of the large anomalous systemic feeding artery arising from the supradiaphragmatic or subdiaphragmatic aorta.',
      'Selective engagement of the anomalous artery using a 5F Cobra or Yashiro catheter.',
      'Selective angiography and rotational DSA documenting the aberrant vessel supplying the sequestered/hypoplastic right lower lung lobe with return into the scimitar vein.',
      'Coaxial advancement of an Amplatzer Vascular Plug (AVP II or IV, oversized 30-50%) or 2.7F microcatheter for dense mechanical coiling into the landing zone of the feeding vessel.',
      'Ensure the plug or coils land well distal to the aortic takeoff to avoid protruding into the aortic lumen.',
      'Wait 10 minutes to allow complete thrombus maturation on the plug/coils.',
      'Repeat aortogram confirming total cessation of systemic arterial flow to the right lung, with preservation of normal renal, mesenteric, and celiac branch perfusion.'
    ],
    complications: [
      'Inadvertent migration of coil/plug into the abdominal aorta',
      'Transient pleurisy / fever (pulmonary infarction of dysplastic segment)',
      'Aortic wall dissection at the anomalous vessel takeoff',
      'Groin hematoma'
    ],
    maayTariffInr: 58000,
    vendorContacts: [
      'Abbott Vascular India (+91 98299 44332)',
      'Cook Medical (+91 98292 33445)',
      'Terumo India Medical (+91 98291 55678)'
    ]
  },
  {
    id: 'pulmonary-sequestration-embolization',
    name: 'Pulmonary Sequestration: Aberrant Systemic Arterial Feeder Coil / Plug Embolization',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN088B',
    rghsCode: '693 / 72',
    icd10: 'Q33.2 (Sequestration of lung)',
    indications: [
      'Intralobar or extralobar bronchopulmonary sequestration with symptomatic recurrent pneumonias, hemoptysis, or high-output cardiac strain',
      'Definitive transcatheter cure or preoperative embolization to prevent life-threatening intraoperative hemorrhage during thoracic lobectomy',
      'Anomalous large systemic feeding artery arising from thoracic or abdominal aorta'
    ],
    preOpCriteria: [
      'Contrast-enhanced thoracic CT Angiography mapping the aberrant systemic feeder(s), non-functioning lung mass, and venous drainage (pulmonary veins in intralobar, systemic veins/azygos in extralobar)',
      'Baseline CBC, Coagulation screen, Renal parameters, Blood type and cross-match'
    ],
    hardware: [
      { category: 'Vascular Access', name: '6F 45cm Destination Introducer Sheath', spec: '6F, 45 cm, multipurpose curve', standardStore: 'Angio Suite Store' },
      { category: 'Diagnostic Catheter', name: '5F Cobra C2 / Simmons 1 / Mikaelson', spec: '100 cm, 0.035" lumen', standardStore: 'Central IR Store' },
      { category: 'Vascular Plug', name: 'Amplatzer Vascular Plug II / AVP 4', spec: '6 mm - 12 mm diameter', standardStore: 'Central IR Store' },
      { category: 'Embolic Coils', name: '0.035" / 0.018" Interlock / Nester Fibered Coils', spec: 'High packing density fibered microcoils', standardStore: 'Central IR Store' },
      { category: 'Microcatheter', name: '2.7F Progreat Microcatheter System', spec: '130 cm, 0.027" inner lumen', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Ultrasound-guided retrograde common femoral artery access; placement of a 6F 45cm guiding sheath.',
      'Descending thoracic and upper abdominal aortography locating the aberrant systemic artery (most commonly arising between T8 and L1).',
      'Selective cannulation of the sequestration feeder using a 5F Cobra or Mikaelson catheter.',
      'Selective angiogram defining the branch arborization within the sequestered segment and confirming absence of communication with normal pulmonary arterial branches.',
      'Advancement of an Amplatzer Vascular Plug (sized 30-50% larger than the vessel diameter) into the proximal trunk of the aberrant feeder; or dense packing with 0.035" and 0.018" fibered coils via microcatheter.',
      'Confirm plug stability and absence of protrusion into the aortic lumen.',
      'Wait 5-10 minutes for thrombotic occlusion; perform follow-up aortogram documenting complete vascular shutoff into the sequestration.',
      'Hemostasis at access site via manual compression or closure device.'
    ],
    complications: [
      'Post-embolization syndrome (fever, pleuritic chest pain, leukocytosis)',
      'Abscess formation within the ischemic sequestered mass (requires antibiotic coverage)',
      'Migration of embolic material into aorta or mesenteric vessels',
      'Access site pseudoaneurysm'
    ],
    maayTariffInr: 54000,
    vendorContacts: [
      'Abbott Vascular India (+91 98299 44332)',
      'Boston Scientific (+91 98293 44556)',
      'Cook Medical (+91 98292 33445)'
    ]
  },
  {
    id: 'bronchial-dieulafoy-embolization',
    name: 'Bronchial Dieulafoy Lesion: Superselective Microcoil Embolization for Catastrophic Hemoptysis',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN089A',
    rghsCode: '693 / 73',
    icd10: 'M31.8 (Other specified necrotizing vasculopathies) / R04.2 (Hemoptysis)',
    indications: [
      'Bronchial Dieulafoy disease: Rare, life-threatening congenital vascular anomaly characterized by a tortuous, dysplastic, large-caliber bronchial submucosal artery protruding into the bronchus without arborization',
      'Catastrophic, recurrent, massive hemoptysis often provoked by diagnostic bronchoscopic biopsy (biopsy strictly contraindicated!)',
      'Failure or contraindication to emergency pulmonary resection in critically ill patient'
    ],
    preOpCriteria: [
      'Emergency CT Thorax Angiogram identifying the focal protruding submucosal bronchial artery nodule projecting into the airway lumen without parenchymal mass or bronchiectasis',
      'Airway protection / stabilization: Double-lumen endotracheal tube intubation or bronchial blocker if active bleeding',
      'Baseline coagulogram, blood cross-matching for 4 units PRBCs'
    ],
    hardware: [
      { category: 'Vascular Access', name: '5F/6F 11cm Introducer Sheath', spec: 'Right common femoral artery', standardStore: 'Angio Suite Store' },
      { category: 'Diagnostic Catheter', name: '5F Mikaelson / Simmons 1 / Cobra Catheter', spec: '100 cm, 0.035" lumen', standardStore: 'Central IR Store' },
      { category: 'Microcatheter System', name: '2.0F - 2.4F Progreat / Marathon Microcatheter', spec: '130-150 cm, DMSO-compatible', standardStore: 'Central IR Store' },
      { category: 'Detachable Microcoils', name: 'Target 360 / Axium Detachable Microcoils', spec: '0.010" - 0.014", soft helical detachable microcoils (2 mm - 4 mm)', standardStore: 'Central IR Store' },
      { category: 'Liquid Embolic / Glue', name: 'N-butyl Cyanoacrylate (Histoacryl) & Lipiodol', spec: '1:1 to 1:3 ratio mixture for rapid hemostasis', standardStore: 'SMS Pharmacy DDC-14' }
    ],
    techniqueSteps: [
      'Immediate femoral arterial access under ultrasound guidance; 5F/6F sheath placement.',
      'Selective cannulation of the involved bronchial artery using a 5F Mikaelson or Cobra catheter.',
      'Bronchial arteriography identifying the non-tapering, large-caliber dysplastic submucosal branch terminating abruptly at the bleeding bronchial wall site.',
      'CRITICAL SAFETY RULE: Scrutinize all views to positively exclude the anterior spinal artery (artery of Adamkiewicz) arising from the bronchial/intercostal trunk.',
      'Advance a 2.0F/2.4F microcatheter superselectively directly into the dysplastic submucosal arterial stump.',
      'Deploy multiple soft detachable microcoils (Target 360 / Axium) to pack the abnormal aneurysm/vessel tightly; alternatively, inject a tiny calibrated aliquot of NBCA glue (1:2 mixture with Lipiodol) if active arterial spurting is observed.',
      'Avoid high-pressure liquid injections that could rupture the paper-thin submucosal vessel into the airway.',
      'Completion bronchial arteriogram confirming total devascularization of the Dieulafoy lesion with preservation of normal bronchial parenchymal branches.'
    ],
    complications: [
      'Fatal bronchial airway flooding / suffocation if vessel ruptures during wire manipulation',
      'Spinal cord ischemia (if spinal artery branch was unrecognized)',
      'Bronchial wall necrosis',
      'Recurrent hemoptysis'
    ],
    maayTariffInr: 48000,
    vendorContacts: [
      'Stryker Neurovascular (+91 98292 66554)',
      'Medtronic India (+91 98294 11223)',
      'B. Braun Medical India (+91 98291 22334)'
    ]
  },
  {
    id: 'leriche-cerab-reconstruction',
    name: 'Leriche Syndrome: Total Occlusion Recanalization with Covered Endovascular Reconstruction of Aortic Bifurcation (CERAB)',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN090A',
    rghsCode: '693 / 74',
    icd10: 'I74.0 (Embolism and thrombosis of abdominal aorta / Leriche syndrome)',
    indications: [
      'Leriche syndrome triad: Bilateral buttock/thigh claudication, erectile dysfunction, and absent femoral pulses in aortoiliac occlusive disease (TASC II Type D lesions)',
      'Chronic total occlusion (CTO) of the infrarenal abdominal aorta extending into both common iliac arteries',
      'Severe lifestyle-limiting claudication or critical limb ischemia in patients at prohibitive open surgical risk for aortobifemoral bypass'
    ],
    preOpCriteria: [
      'High-resolution CT Angiography from diaphragm to feet defining the level of aortic occlusion relative to the lowest renal artery, calcification burden, and distal runoff',
      'Baseline cardiac clearance (coronary artery disease is present in > 60% of Leriche patients)',
      'Dual antiplatelet therapy (Aspirin + Clopidogrel) initiated; baseline serum creatinine and eGFR'
    ],
    hardware: [
      { category: 'Vascular Access', name: 'Triple Access Sheaths (Dual Femoral + Left Brachial)', spec: 'Two 8F/9F 45cm Femoral Sheaths + One 6F 90cm Brachial Sheath', standardStore: 'Angio Suite Store' },
      { category: 'Crossing Wire / Catheter', name: '0.035" Frontrunner CTO / Stiff Glidewire & Outback Re-Entry', spec: '260 cm stiff angled Glidewire and Outback catheter', standardStore: 'Central IR Store' },
      { category: 'Aortic Covered Stent', name: 'Balloon-Expandable Covered Stent (Advanta V12 / BeGraft Aortic)', spec: '12 mm - 16 mm diameter x 40-60 mm length', standardStore: 'Central IR Store' },
      { category: 'Iliac Covered Stents', name: 'Two Matched Balloon-Expandable Covered Stents (Advanta V12)', spec: 'Two matched 8 mm - 10 mm diameter x 40-60 mm length', standardStore: 'Central IR Store' },
      { category: 'High-Pressure Dilatation Balloons', name: 'Conquest / Atlas Gold PTA Balloons', spec: 'Matched 8 mm - 10 mm x 40 mm balloons', standardStore: 'Angio Suite Store' }
    ],
    techniqueSteps: [
      'Simultaneous triple access: Bilateral common femoral retrograde access (8F/9F) and left brachial/radial antegrade access (6F 90cm).',
      'Abdominal aortogram via brachial sheath detailing infrarenal aortic occlusion stump and relationship to renal artery ostia.',
      'Bidirectional recanalization: Retrograde subintimal or intraluminal crossing from femoral sheaths complemented by antegrade wire navigation from the brachial access; re-entry into true lumen using Outback LTD or flossing snare technique.',
      'Exchange for bilateral extra-stiff 0.035" Amplatz wires establishing secure through-and-through tracks.',
      'Serial predilatation of the occluded aortic and iliac segments with 6-8 mm PTA balloons.',
      'CERAB Step 1 (Aortic Component): Deploy a large balloon-expandable covered stent (Advanta V12, 12-16 mm) in the infrarenal aorta, landing approximately 15-20 mm above the anatomical bifurcation.',
      'CERAB Step 2 (Iliac Components): Simultaneously advance two matched covered stents (8-10 mm) from bilateral femoral sheaths, inserting their proximal ends 10-15 mm INSIDE the distal end of the aortic covered stent.',
      'CERAB Step 3 (Simultaneous Kissing Dilation): Simultaneously inflate both iliac stent balloons to high pressure, expanding the iliac limbs while molding their proximal ends tightly inside the distal aortic stent to create an anatomically customized, flow-optimized neo-bifurcation.',
      'Completion aortogram and femoral runoff runs demonstrating fully restored anatomical flow without endoleak or dissection; femoral access sites closed with dual ProGlide closure devices.'
    ],
    complications: [
      'Aortic rupture or iliac arterial avulsion during recanalization/balloon inflation (emergency covered stent bailout)',
      'Distal atheroembolization (trash foot)',
      'Renal artery coverage or acute occlusion',
      'Access site thrombosis / brachial hematoma'
    ],
    maayTariffInr: 92000,
    vendorContacts: [
      'Getinge / Atrium Medical (+91 98296 22110)',
      'Bentley InnoMed (+91 98297 33441)',
      'Cordis India (+91 98295 77665)'
    ]
  },
  {
    id: 'middle-aortic-syndrome-reconstruction',
    name: 'Middle Aortic Syndrome: Kissing Balloon Expandable Covered Stent Reconstruction',
    category: 'Rare Syndromes & Vascular Disorders',
    code: '2849-IN090B',
    rghsCode: '693 / 75',
    icd10: 'I77.1 (Stricture of artery) / Q25.4 (Other congenital malformations of aorta)',
    indications: [
      'Middle Aortic Syndrome (MAS): Severe segmental hypoplasia or coarctation of the inter-renal or infrarenal abdominal aorta, frequently involving renal and mesenteric ostia',
      'Severe renovascular hypertension in children or young adults refractory to multi-drug medical therapy',
      'Intermittent lower extremity claudication, weak/absent femoral pulses, and left ventricular failure'
    ],
    preOpCriteria: [
      'High-resolution CT Angiography or 4D MR Angiography measuring exact hypoplastic aortic segment length, luminal caliber, and takeoff of celiac, SMA, and bilateral renal arteries',
      'Echocardiography assessing left ventricular mass index and cardiac function',
      'Baseline renal scintigraphy (DMSA/DTPA) and invasive baseline pressure gradient recordings across the coarctation'
    ],
    hardware: [
      { category: 'Vascular Access', name: 'Dual Large-Bore Sheaths (Femoral + Trans-Brachial)', spec: '10F/12F 45cm Femoral Sheaths + 6F Brachial Sheath', standardStore: 'Angio Suite Store' },
      { category: 'Covered Stent System', name: 'Cheatham-Platinum (CP) Covered Stent / BeGraft Aortic Stent', spec: '12 mm - 16 mm diameter x 39-45 mm length covered stent', standardStore: 'Central IR Store' },
      { category: 'BIB Balloon Catheter', name: 'NuMED BIB Catheter', spec: 'Inner balloon 8-10 mm / Outer balloon 14-16 mm', standardStore: 'Angio Suite Store' },
      { category: 'Renal Bridging Stents', name: 'Balloon-Expandable Peripheral Covered Stents (BeGraft / Advanta)', spec: '5 mm - 7 mm diameter x 18-28 mm length', standardStore: 'Central IR Store' },
      { category: 'Guidewires', name: 'Lunderquist Extra Stiff Wire & 0.014" V-18 Wires', spec: '0.035" 260 cm Lunderquist and 0.014" support wires', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Simultaneous bilateral common femoral access and left trans-brachial access under ultrasound guidance.',
      'Simultaneous dual aortography and invasive pressure recordings: Confirm trans-stenotic peak systolic gradient > 30-40 mmHg.',
      'Positioning of protective 0.014" guidewires into renal and superior mesenteric arteries from the brachial/contralateral sheath if branch ostia are contiguous with the landing zone.',
      'Advancement of a large-diameter balloon-expandable covered stent (CP Covered Stent or BeGraft Aortic) mounted on a BIB catheter over a Lunderquist extra-stiff wire across the hypoplastic mid-aorta.',
      'Controlled two-stage deployment: Inflate inner balloon of BIB to center the stent, followed by outer balloon inflation to expand the covered stent securely against the hypoplastic aortic wall.',
      'If renal artery origins are jailed by covered stent, perform percutaneous fenestration: Traverse covered stent fabric into renal artery using a stiff Sharp needle/wire, followed by balloon dilation and deployment of bridging covered stents (chimney / fenestration technique).',
      'Post-dilation of aortic reconstruction to eliminate residual gradient.',
      'Completion angiography and pullback pressure manometry documenting normalization of aortic caliber, reduction of gradient to < 5 mmHg, and widely patent visceral/renal branch flow.'
    ],
    complications: [
      'Aortic rupture / retroperitoneal exsanguination during balloon expansion of hypoplastic aorta',
      'Inadvertent permanent occlusion of renal or mesenteric arteries causing renal or bowel infarction',
      'Stent migration',
      'Reperfusion cardiac overload'
    ],
    maayTariffInr: 96000,
    vendorContacts: [
      'NuMED Inc / BD India (+91 98290 88712)',
      'Bentley InnoMed (+91 98297 33441)',
      'Getinge / Atrium (+91 98296 22110)'
    ]
  }
];
