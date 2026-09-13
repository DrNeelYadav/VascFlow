import { ProcedureBlueprint } from '../../types/clinical';

export const HBP_AND_PORTAL_HTN_PROCEDURES: ProcedureBlueprint[] = [
  {
    id: 'tips-creation-viatorr',
    name: 'Transjugular Intrahepatic Portosystemic Shunt (TIPS) Creation with Controlled-Expansion Covered Stent',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB001',
    rghsCode: '693 / 31',
    icd10: 'K76.6 (Portal Hypertension) / I85.01 (Esophageal Varices with Bleeding)',
    indications: [
      'Refractory variceal hemorrhage failing endoscopic therapy and vasoactive infusions',
      'Refractory ascites or recurrent hepatic hydrothorax unresponsive to maximum medical therapy and paracentesis',
      'Early / preemptive TIPS (within 24-72 hours) in acute variceal bleeding for Child-Pugh class B (>7) with active bleeding or Child-Pugh class C (<14)',
      'Hepatic veno-occlusive disease / Budd-Chiari syndrome unresponsive to anticoagulation or angioplasty'
    ],
    preOpCriteria: [
      'Triple-phase abdominal CT or Doppler US confirming portal vein patency and hepatic vein orientation',
      'MELD-Na score assessment (cautious risk-benefit analysis if MELD > 18-20)',
      'Transthoracic echocardiography documenting preserved left and right ventricular function with absence of severe pulmonary hypertension (sPAP < 45-50 mmHg)',
      'Baseline neurology evaluation ruling out severe pre-existing overt hepatic encephalopathy (West Haven Grade III-IV)',
      'Coagulation profile optimized (INR < 1.8, Platelets > 50,000/uL if feasible)'
    ],
    hardware: [
      { category: 'Vascular Access', name: '10F TIPS Introducer Sheath (Cook Rösch-Uchida or Transseptal)', spec: '10F x 40 cm radiopaque sheath with dilator', standardStore: 'Angio Suite Main Store' },
      { category: 'Puncture Set', name: 'Rösch-Uchida Transjugular Liver Access Set (Cook Medical)', spec: '16G trocar needle, 5F catheter, 0.038 wire guide, 14G stiffening cannula', standardStore: 'TIPS Dedicated Cabinet' },
      { category: 'Diagnostic Catheter', name: '5F MPA / Kumpe Catheter', spec: '100 cm, 0.035 compatible', standardStore: 'Angio Suite Main Store' },
      { category: 'Guidewire', name: '0.035 Amplatz Super Stiff Wire', spec: '260 cm, 1 cm flexible J-tip', standardStore: 'Angio Suite Main Store' },
      { category: 'Angioplasty Balloon', name: 'High-Pressure PTA Dilatation Balloon (Mustang / Conquest)', spec: '8-10 mm x 40-60 mm, rated burst pressure > 18 atm', standardStore: 'Central IR Store' },
      { category: 'Stent Graft', name: 'Gore Viatorr TIPS Endoprosthesis with Controlled Expansion (CX)', spec: '8-10 mm diameter x 70-80 mm covered / 20 mm bare (total 9-10 cm)', standardStore: 'Special Consignment Rack' },
      { category: 'Manometry System', name: 'Electronic Pressure Transducer & Hemodynamic Monitoring Line', spec: 'Calibrated dual-pressure transducer line with flush bag', standardStore: 'Cath Lab Bio-Station' }
    ],
    techniqueSteps: [
      'Under ultrasound guidance, cannulate the right internal jugular vein (RIJV) and insert a 10F 40-cm TIPS sheath.',
      'Select the right hepatic vein (or middle hepatic vein) using a 5F MPA/Kumpe catheter; perform hepatic venography and wedged hepatic venography with CO2 or iodinated contrast to map the bifurcation of the portal vein.',
      'Advance the Rösch-Uchida needle system through the sheath into the hepatic vein, rotate anteriorly and medially, and perform hepatic parenchymal puncture aimed at the right portal vein bifurcation / main trunk.',
      'Aspirate blood to confirm portal venous entry; perform portogram to confirm catheter position in the extrahepatic main portal vein trunk.',
      'Pass a 0.035 Glidewire followed by exchange to an Amplatz Super Stiff wire into the mesenteric or splenic vein.',
      'Measure baseline portal systemic gradient (PSG) by recording right atrial and main portal vein pressures simultaneously.',
      'Predilate the parenchymal tract with an 8 mm x 40-60 mm high-pressure balloon catheter.',
      'Deploy the Gore Viatorr CX covered stent graft, ensuring the non-covered 2-cm segment sits cleanly in the portal vein branch and the covered portion extends completely through the parenchymal tract to the junction of the hepatic vein and IVC.',
      'Post-dilate the stent graft to 8 mm (with option to expand to 9 or 10 mm) under fluoroscopy.',
      'Perform completion portogram to verify brisk shunt flow and decompression of gastroesophageal varices; repeat PSG measurement aiming for target gradient < 12 mmHg (or > 50% baseline reduction).'
    ],
    complications: [
      'New or worsened overt hepatic encephalopathy (20-35%)',
      'Acute intraperitoneal hemorrhage from capsular transgression or extrahepatic portal vein laceration (1-2%)',
      'Acute or subacute shunt thrombosis / stent retraction',
      'High-output cardiac failure from massive systemic venous volume loading',
      'Biliary-portal or bilio-shunt fistula with hemobilia or early stent sepsis'
    ],
    maayTariffInr: 125000,
    vendorContacts: [
      'W.L. Gore & Associates India (+91 98290 87654)',
      'Cook Medical Regional Distributor (+91 98292 34567)'
    ]
  },
  {
    id: 'tips-revision-angioplasty-relining',
    name: 'TIPS Revision: Balloon Angioplasty and Relining of Stenosed Shunt Tract',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB002',
    rghsCode: '693 / 32',
    icd10: 'T82.858A (Stenosis of Vascular Prosthetic Device) / K76.6 (Portal Hypertension)',
    indications: [
      'Recurrent variceal bleeding or tense ascites post-TIPS with documented shunt dysfunction on Doppler (velocity < 50 cm/s or > 250 cm/s)',
      'Direct invasive portosystemic pressure gradient (PSG) elevation > 12 mmHg during surveillance or workup',
      'Hepatic venous outflow pseudointimal hyperplasia or intrashunt thrombosis'
    ],
    preOpCriteria: [
      'Doppler ultrasound documenting abnormal shunt flow velocity or flow reversal in intrahepatic portal branches',
      'Exclusion of severe underlying non-hepatic causes for decompensation (sepsis, SBP, renal shutdown)',
      'Coagulation check: INR < 2.0, Platelets > 40,000/uL'
    ],
    hardware: [
      { category: 'Vascular Access', name: '8F - 10F Vascular Introducer Sheath', spec: '40 cm Check-Flo Performer or standard 11 cm', standardStore: 'Angio Suite Main Store' },
      { category: 'Diagnostic / Support Catheter', name: '5F Kumpe / Cobra Catheter', spec: '65 - 100 cm', standardStore: 'Angio Suite Main Store' },
      { category: 'Guidewire', name: '0.035 Stiff Terumo Glidewire & Amplatz Super Stiff', spec: '260 cm, angled and straight tips', standardStore: 'Central IR Store' },
      { category: 'Angioplasty Balloon', name: 'High-Pressure PTA Balloon Dilator', spec: '8 mm - 10 mm x 40 mm, rated to 20 atm', standardStore: 'Central IR Store' },
      { category: 'Stent Graft', name: 'Viatorr CX or Fluency / Covera Vascular Stent Graft', spec: '8-10 mm x 40-80 mm length', standardStore: 'Consignment Store' },
      { category: 'Manometry System', name: 'Hemodynamic pressure transducer set', spec: 'Sterile disposable monitoring kit', standardStore: 'Cath Lab Bio-Station' }
    ],
    techniqueSteps: [
      'Access right internal jugular vein under real-time ultrasound and place 8-10F vascular sheath.',
      'Advance 5F Kumpe catheter and 0.035 hydrophilic wire through the IVC into the proximal TIPS stent orifice.',
      'Maneuver guidewire carefully through the pseudointimal narrowing or thrombosed segment into the main portal vein and superior mesenteric vein.',
      'Obtain baseline portal and right atrial pressures; calculate the pre-revision PSG.',
      'Perform digital subtraction portogram in anteroposterior and cranial-caudal obliquities to pinpoint the site of obstruction (hepatic vein end, shunt body, or portal inflow).',
      'Advance high-pressure balloon (8 mm or 10 mm) over the Amplatz wire and perform prolonged inflations (60-120 seconds at nominal/rated burst pressure) across the stenotic waist.',
      'If elastic recoil, refractory pseudointimal hyperplasia, or structural stent fracture is present, deploy an overlapping Viatorr CX or Fluency covered stent graft relining the shunt.',
      'Repeat portogram to document brisk forward laminar flow and confirm PSG < 12 mmHg.'
    ],
    complications: [
      'Shunt rupture or extravasation during high-pressure balloon dilation',
      'Distal embolization of thrombus/debris into intrahepatic or mesenteric portal branches',
      'Stent migration or displacement into the inferior vena cava or right atrium',
      'Acute worsening of encephalopathy post-recanalization'
    ],
    maayTariffInr: 85000,
    vendorContacts: [
      'W.L. Gore & Associates (+91 98290 87654)',
      'Becton Dickinson (BD) Peripheral Intervention (+91 98293 45678)'
    ]
  },
  {
    id: 'tips-with-variceal-embolization',
    name: 'TIPS with Simultaneous Coronary / Gastroesophageal Variceal Coil and Gelfoam Embolization',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB003',
    rghsCode: '693 / 33',
    icd10: 'I85.01 (Esophageal Varices with Bleeding) / K76.6 (Portal Hypertension)',
    indications: [
      'Active acute or high-risk variceal bleeding undergoing TIPS where prominent spontaneous gastroesophageal collaterals persist',
      'Persistent high-flow left gastric (coronary) vein or short gastric veins after TIPS creation with post-TIPS PSG near borderline (10-12 mmHg)',
      'Secondary prophylaxis in patients with large fundal gastric or ectopic varices treated by TIPS'
    ],
    preOpCriteria: [
      'Confirmed endoscopic visualization of bleeding gastroesophageal varices within 24-48 hours',
      'Hemodynamic resuscitation initiated (blood products, somatostatin/octreotide, terlipressin)',
      'Pre-procedure contrast CT or on-table portogram confirming patent portal vein and identifying dilated coronary / short gastric trunk'
    ],
    hardware: [
      { category: 'Vascular Access', name: '10F TIPS Sheath Set', spec: 'Cook Rösch-Uchida Access Set', standardStore: 'TIPS Dedicated Cabinet' },
      { category: 'Microcatheter', name: '2.7F - 2.8F Microcatheter (Progreat / Renegade HI-FLO)', spec: '130 cm length, high-flow lumen', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: '0.014 - 0.018 Steerable Microguidewire (Transend / Fathom)', spec: '200 cm length, shapeable tip', standardStore: 'Angio Suite Main Store' },
      { category: 'Embolic Coils', name: '0.035 / 0.018 Pushable & Detachable Fibered Platinum Coils (Nester / Concerto)', spec: 'Sizes 6 mm to 16 mm, controlled deployment', standardStore: 'Coil Locker A' },
      { category: 'Embolic Material', name: 'Gelfoam Absorbable Gelatin Powder / Sponge & Sodium Tetradecyl Sulfate (STS)', spec: '1-2 mm torpedoes / 3% STS sclerosant foam', standardStore: 'SMS Pharmacy DDC-14' },
      { category: 'Stent Graft', name: 'Gore Viatorr CX Covered Stent', spec: '8-10 mm x 80 mm', standardStore: 'Consignment Store' }
    ],
    techniqueSteps: [
      'Perform ultrasound-guided RIJV puncture, liver parenchymal tract creation, and establish portal vein access per standard TIPS protocol.',
      'Prior to or immediately after deploying the TIPS stent graft, engage the portal vein with a 5F Cobra/Kumpe or 4F selective catheter.',
      'Catheterize the origin of the left gastric (coronary) vein, posterior gastric, or short gastric veins feeding the variceal complex.',
      'Advance the 2.7F/2.8F microcatheter deep into the tortuous variceal inflow channels as close as possible to the submucosal variceal plexus.',
      'Prepare sclerosant slurry / Gelfoam torpedoes mixed with 3% STS and contrast, or deploy fibered platinum embolization coils (8-16 mm) sequentially across the proximal and middle variceal trunk.',
      'Perform completion subtraction venography of the collateral trunk to confirm complete mechanical and thrombotic occlusion of flow into the esophageal/gastric varices.',
      'Deploy and post-dilate the Viatorr covered TIPS stent across the parenchymal tract.',
      'Confirm shunt patency and complete absence of competitive retrograde variceal filling on final portogram.'
    ],
    complications: [
      'Inadvertent migration of embolic coils or foam into the portal vein trunk causing portal vein thrombosis',
      'Systemic embolization of sclerosant/coils through unrecognized spontaneous gastrorenal/caval shunts to pulmonary circulation',
      'Transient worsening of portal hypertensive gastropathy',
      'Capsular puncture or subcapsular hematoma during catheter manipulation'
    ],
    maayTariffInr: 145000,
    vendorContacts: [
      'Cook Medical (+91 98292 34567)',
      'Medtronic Peripheral Vascular (+91 98294 56789)'
    ]
  },
  {
    id: 'brto-gastric-varices',
    name: 'Balloon-Occluded Retrograde Transvenous Obliteration (BRTO) of Gastric Varices',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB004',
    rghsCode: '693 / 34',
    icd10: 'I85.01 (Esophageal Varices with Bleeding) / K76.6 (Portal Hypertension)',
    indications: [
      'Bleeding or high-risk fundal gastric varices (Sarin type GOV-2, IGV-1) with a documented spontaneous gastrorenal shunt (GRS)',
      'Gastric variceal hemorrhage refractory to endoscopic cyanoacrylate glue injection or band ligation',
      'Gastric varices in cirrhotics with recurrent hepatic encephalopathy (where TIPS would exacerbate hyperammonemia)'
    ],
    preOpCriteria: [
      'Multiphasic contrast-enhanced CT of abdomen demonstrating patent gastrorenal shunt draining into left renal vein',
      'Absence of severe unmanageable tense ascites (BRTO increases portal pressure, may aggravate ascites)',
      'Preserved renal function (serum creatinine < 1.8 mg/dL) and absence of allergy to STS sclerosant',
      'Coagulation check: INR < 1.8, Platelets > 50,000/uL'
    ],
    hardware: [
      { category: 'Vascular Access', name: '7F - 8F Guiding Sheath (Destination / Ansel)', spec: '45 - 65 cm length with radiopaque tip', standardStore: 'Angio Suite Main Store' },
      { category: 'Balloon Catheter', name: 'Balloon Occlusion Catheter (Cello / Fogarty / Boston Scientific)', spec: '8.5F - 9F or 5.5F, balloon size 11 mm - 20 mm', standardStore: 'BRTO Dedicated Shelf' },
      { category: 'Microcatheter', name: '2.7F Microcatheter (Progreat)', spec: '130 cm, high-pressure injection capability', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: '0.035 Rosen / Stiff Glidewire', spec: '180 cm length, short flexible J-tip', standardStore: 'Central IR Store' },
      { category: 'Sclerosant Agent', name: 'Sodium Tetradecyl Sulfate (STS 3% - Setrol / Fibrovein)', spec: '3% ampoules (5 x 2 mL)', standardStore: 'SMS Pharmacy DDC-14' },
      { category: 'Gas / Contrast Matrix', name: 'Lipiodol Ultra-Fluid & Sterile Air / CO2', spec: '10 mL Lipiodol ampoule for foam generation', standardStore: 'Central IR Store' },
      { category: 'Stopcock System', name: 'Tessari Double Stopcock Foam Generation Kit', spec: 'Three-way high pressure luer locks with 10 mL syringes', standardStore: 'Angio Suite Main Store' }
    ],
    techniqueSteps: [
      'Puncture right common femoral vein (or right internal jugular vein) under ultrasound; advance 7F/8F guiding sheath into the left renal vein.',
      'Select the draining gastrorenal shunt orifice located on the superior/cranial aspect of the left renal vein using a 5F Cobra catheter and Glidewire.',
      'Exchange for an occlusion balloon catheter (11-20 mm) and position the balloon precisely within the outflow neck of the gastrorenal shunt.',
      'Inflate the balloon with dilute contrast until complete occlusion of the shunt is achieved, confirmed by hand injection of contrast (absence of runoff into the renal vein).',
      'Perform balloon-occluded retrograde venography (BORV) to evaluate the gastric variceal lake, afferent feeders (left gastric, posterior gastric, short gastric veins), and collateral drainage pathways (inferior phrenic, pericardiophrenic veins).',
      'If prominent collateral drainage exists, cannulate collaterals superselectively via microcatheter and embolize with coils or temporary balloon to prevent systemic sclerosant leakage.',
      'Generate sclerosant foam using the Tessari technique (1 part 3% STS, 1 part Lipiodol, 2-3 parts room air/CO2 mixed between two syringes connected by a 3-way stopcock).',
      'Slowly infuse the sclerosant foam into the variceal complex under continuous fluoroscopic monitoring until the entire variceal basket is packed without non-target spillover into the portal vein trunk.',
      'Maintain balloon inflation for 4 to 12 hours (or leave catheter clamped overnight in the ICU under monitoring) to allow definitive thrombotic obliteration before deflation and removal.'
    ],
    complications: [
      'Systemic sclerosant embolization causing pulmonary edema, pulmonary embolism, or acute respiratory distress syndrome (ARDS)',
      'Hemoglobinuria and acute renal tubular necrosis secondary to STS-induced intravascular hemolysis',
      'Aggravation of portal hypertension manifesting as worsening esophageal varices (30-40%) or newly refractory ascites',
      'Left renal vein thrombosis or rupture of gastrorenal shunt during balloon hyperinflation'
    ],
    maayTariffInr: 95000,
    vendorContacts: [
      'Boston Scientific India (+91 98292 67890)',
      'Terumo India Medical (+91 98291 55678)'
    ]
  },
  {
    id: 'parto-gastric-varices',
    name: 'Plug-Assisted Retrograde Transvenous Obliteration (PARTO) of Gastric Varices',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB005',
    rghsCode: '693 / 35',
    icd10: 'I85.01 (Esophageal Varices with Bleeding) / K76.6 (Portal Hypertension)',
    indications: [
      'High-risk or bleeding fundal gastric varices with a large gastrorenal shunt suitable for vascular plug anchoring',
      'Cirrhotic patients with poor hepatic reserve where avoiding overnight balloon catheter indwelling and reducing ICU stay is required',
      'Failed endoscopic therapy in patients who cannot tolerate prolonged balloon occlusion'
    ],
    preOpCriteria: [
      'Abdominal contrast CT with 3D multiplanar reconstructions measuring gastrorenal shunt neck caliber (ideally 4-14 mm for plug sizing)',
      'Evaluation of collateral draining veins (inferior phrenic, retroperitoneal collateral veins)',
      'Baseline complete blood counts, renal panel, and coagulation profile'
    ],
    hardware: [
      { category: 'Vascular Access', name: '7F - 8F Ansel / Flexor Guiding Sheath', spec: '45-55 cm length with radiopaque marker', standardStore: 'Angio Suite Main Store' },
      { category: 'Vascular Plug', name: 'Amplatzer Vascular Plug II (AVP II / AVP 4) / CeraPlug', spec: 'Diameter oversized 30-50% relative to shunt neck (8 mm - 16 mm)', standardStore: 'Consignment Store' },
      { category: 'Diagnostic Catheter', name: '5F Cobra / MPA Catheter', spec: '65 - 100 cm', standardStore: 'Central IR Store' },
      { category: 'Microcatheter', name: '2.7F High-Flow Microcatheter', spec: '130 cm length', standardStore: 'Central IR Store' },
      { category: 'Embolic Agent', name: 'Gelfoam Absorbable Gelatin Sponge Sheet & Slurry', spec: 'Sterile surgical sponge cut into small particles/slurry', standardStore: 'Central IR Store' },
      { category: 'Contrast / Sclerosant', name: 'Lipiodol / Non-ionic iodinated contrast', spec: '10 mL ampoule', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Perform ultrasound-guided right common femoral vein access and insert a 7F/8F guiding sheath; advance to the left renal vein.',
      'Cannulate the gastrorenal shunt and obtain baseline retrograde venography to measure the landing zone diameter and length.',
      'Select an Amplatzer Vascular Plug II oversized by approximately 30-50% larger than the narrowest diameter of the gastrorenal shunt neck.',
      'Deploy the AVP II across the shunt neck through the guiding sheath without detaching it from the delivery cable.',
      'Advance a 2.7F microcatheter through the delivery sheath alongside or through the plug mesh into the gastric variceal sac.',
      'Perform test injection to confirm significant flow stagnation behind the plug.',
      'Infuse thick Gelfoam slurry mixed with contrast (and optional sclerosant) through the microcatheter directly into the variceal lake until complete stagnation and dense radiopaque packing are achieved.',
      'Perform repeat venography confirming complete occlusion of varices and absence of leak around the plug.',
      'Unscrew and detach the Amplatzer Vascular Plug delivery cable; withdraw the sheath and achieve femoral venous hemostasis with manual pressure.'
    ],
    complications: [
      'Inadvertent plug migration into the left renal vein or IVC requiring percutaneous snare retrieval',
      'Incomplete variceal thrombosis requiring secondary transhepatic or transjugular embolization',
      'Worsening of esophageal variceal pressure and bleeding (surveillance EGD mandatory at 4-6 weeks)',
      'Groin puncture site hematoma or pseudoaneurysm'
    ],
    maayTariffInr: 98000,
    vendorContacts: [
      'Abbott Vascular India (+91 98291 22334)',
      'Cook Medical (+91 98292 34567)'
    ]
  },
  {
    id: 'carto-gastric-varices',
    name: 'Coil-Assisted Retrograde Transvenous Obliteration (CARTO) of Gastric Varices',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB006',
    rghsCode: '693 / 36',
    icd10: 'I85.01 (Esophageal Varices with Bleeding) / K76.6 (Portal Hypertension)',
    indications: [
      'Gastric varices with gastrorenal shunt where vascular plug anchoring is unsuitable due to tapered anatomy or early collateral branches',
      'Alternative to BRTO eliminating need for prolonged balloon inflation and minimizing systemic sclerosant extravasation',
      'Large high-flow spontaneous shunts requiring dense mechanical coil scaffold followed by liquid embolization'
    ],
    preOpCriteria: [
      'Multiphasic CT defining gastrorenal shunt diameter, tortuosity, and branching anatomy',
      'Adequate renal parameters (eGFR > 30 mL/min/1.73m2)',
      'Coagulation review: INR < 2.0, Platelets > 40,000/uL'
    ],
    hardware: [
      { category: 'Vascular Access', name: '6F - 7F Guiding Sheath', spec: '45-65 cm Ansel / Flexor', standardStore: 'Angio Suite Main Store' },
      { category: 'Microcatheter', name: '2.7F - 2.8F Microcatheter (Progreat / Renegade HI-FLO)', spec: '130 cm with braided shaft for pushability', standardStore: 'Central IR Store' },
      { category: 'Embolic Coils', name: '0.018 - 0.035 Fibered Detachable and Pushable Platinum Coils', spec: 'Diameters 8 mm to 20 mm, high packing density', standardStore: 'Coil Locker A' },
      { category: 'Embolic Agent', name: 'Sodium Tetradecyl Sulfate (STS) 3% foam or Gelfoam slurry', spec: 'Mixed with Lipiodol and contrast (Tessari matrix)', standardStore: 'SMS Pharmacy DDC-14' },
      { category: 'Guidewire', name: '0.035 Rosen & 0.014 Steerable Microguidewire', spec: 'Rosen 180 cm, Transend 200 cm', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Right common femoral vein access using 6F/7F sheath; advance selective catheter into left renal vein and enter gastrorenal shunt.',
      'Deploy framing and filling 0.035/0.018 fibered metallic coils tightly across the outflow tract of the shunt to create a stable, dense mechanical scaffold.',
      'Ensure the coil mass creates flow stagnation while allowing a microcatheter to pass between coils or remain seated deeply in the variceal sac.',
      'Deliver STS sclerosant foam or thick Gelfoam slurry behind the coil scaffold directly into the gastric variceal sac under continuous fluoroscopy.',
      'Verify complete cessation of flow and dense opacification of the gastric varices with no contrast wash-through into the systemic circulation.',
      'Perform final angiography of the left renal vein demonstrating patent renal vein and total occlusion of the gastrorenal shunt.',
      'Remove all hardware and maintain compression at the femoral puncture site.'
    ],
    complications: [
      'Coil migration into left renal vein or pulmonary artery',
      'Micro-embolization of liquid sclerosant causing transient hypoxia or pulmonary hypertension',
      'Ascites exacerbation due to sudden portal pressure elevation',
      'Groin site access complications'
    ],
    maayTariffInr: 92000,
    vendorContacts: [
      'Medtronic Peripheral Intervention (+91 98294 56789)',
      'Cook Medical (+91 98292 34567)'
    ]
  },
  {
    id: 'pac-brto-gastric-varices',
    name: 'Vascular-Plug Assisted Retrograde Transvenous Obliteration with Cyanoacrylate (PAC-BRTO)',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB007',
    rghsCode: '693 / 37',
    icd10: 'I85.01 (Esophageal Varices with Bleeding) / K76.6 (Portal Hypertension)',
    indications: [
      'Gastric variceal obliteration requiring immediate permanent polymerization without relying on patient intrinsic coagulopathy',
      'High-flow gastrorenal shunts in patients with profound coagulopathy (INR > 2.5, severe thrombocytopenia) where Gelfoam or STS may fail',
      'Rapid single-session treatment avoiding ICU stay and balloon catheterization'
    ],
    preOpCriteria: [
      'Multiphasic CT defining caliber of GRS landing zone and volume of gastric variceal lake',
      'Complete baseline liver panel and MELD score',
      'No history of sensitivity to iodized oil (Lipiodol) or N-butyl cyanoacrylate'
    ],
    hardware: [
      { category: 'Vascular Access', name: '7F - 8F Guiding Sheath', spec: '45-65 cm Flexor Sheath', standardStore: 'Angio Suite Main Store' },
      { category: 'Vascular Plug', name: 'Amplatzer Vascular Plug II (AVP II)', spec: '10 mm - 16 mm diameter', standardStore: 'Consignment Store' },
      { category: 'Microcatheter', name: '2.0F - 2.4F DMSO-Compatible / Non-Tapered Microcatheter', spec: '130 - 150 cm length', standardStore: 'Central IR Store' },
      { category: 'Liquid Embolic', name: 'n-Butyl Cyanoacrylate (Histoacryl / Glubran 2)', spec: '1 mL ampoules (2-3 ampoules)', standardStore: 'Special Consignment Rack' },
      { category: 'Radiopaque Carrier', name: 'Lipiodol Ultra-Fluid', spec: '10 mL ampoule', standardStore: 'Central IR Store' },
      { category: 'Flush Solution', name: '5% Dextrose in Water (D5W)', spec: '500 mL sterile infusion bag (non-ionic flush)', standardStore: 'SMS Pharmacy DDC-14' }
    ],
    techniqueSteps: [
      'Ultrasound-guided femoral vein puncture; introduce 7F/8F guiding sheath into the left renal vein.',
      'Engage the gastrorenal shunt and position an oversized Amplatzer Vascular Plug II within the shunt outflow neck.',
      'Prior to fully releasing the plug, maneuver a DMSO-compatible microcatheter through or adjacent to the plug into the gastric variceal epicenter.',
      'Perform detailed retrograde digital subtraction venography to determine the glue-to-Lipiodol ratio and fill volume based on variceal transit time (typically 1:1 to 1:3 ratio).',
      'Thoroughly flush the microcatheter lumen with 5% Dextrose (D5W) to prevent premature glue polymerization in the presence of ionic blood/saline.',
      'Under rapid-rate continuous fluoroscopy, inject the n-BCA/Lipiodol mixture through the microcatheter until the entire variceal network is filled up to the plug scaffold.',
      'Immediately aspirate and rapidly retract the microcatheter to prevent gluing the tip into the cast.',
      'Detach and release the AVP II; perform final venography to confirm absolute cast stability and complete occlusion of the shunt.'
    ],
    complications: [
      'Microcatheter tip entrapment within the polymerized cyanoacrylate cast',
      'Glue migration through unseen collaterals into pulmonary vasculature or portal vein trunk',
      'Foreign body reaction or perivariceal abscess (rare)',
      'Subcapsular renal hematoma or renal vein spasm'
    ],
    maayTariffInr: 105000,
    vendorContacts: [
      'B. Braun Medical India (+91 98293 11223)',
      'Abbott Vascular India (+91 98291 22334)'
    ]
  },
  {
    id: 'pto-ectopic-varices',
    name: 'Percutaneous Transhepatic Obliteration (PTO) of Ectopic Duodenal / Stomal Varices',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB008',
    rghsCode: '693 / 38',
    icd10: 'K76.6 (Portal Hypertension) / K92.2 (Gastrointestinal Hemorrhage Unspecified)',
    indications: [
      'Active or recurrent bleeding from ectopic varices (duodenal, stomal, anastomotic, jejunal, or colonic) in portal hypertension',
      'Failed endoscopic band ligation or sclerotherapy for deep submucosal ectopic varices',
      'Anatomical inaccessibility via transjugular / transvenous systemic route'
    ],
    preOpCriteria: [
      'Multi-detector CT angiogram / portogram demonstrating portal origin and course of ectopic variceal feeding veins',
      'Ultrasound evaluation for safe transhepatic access trajectory (free of intercostal vessels, gallbladder, lung base)',
      'Coagulation check: INR < 1.7, Platelets > 50,000/uL'
    ],
    hardware: [
      { category: 'Percutaneous Access', name: '21G Chiba Needle & 0.018 Micropuncture Introducer Set', spec: '15 cm Chiba, 4F/5F coaxial dilator kit', standardStore: 'Angio Suite Main Store' },
      { category: 'Guidewire', name: '0.035 Stiff Glidewire & Rosen Wire', spec: '180 cm length', standardStore: 'Central IR Store' },
      { category: 'Diagnostic Catheter', name: '5F Cobra (C2) / Kumpe / Simmons Catheter', spec: '65 - 100 cm', standardStore: 'Angio Suite Main Store' },
      { category: 'Microcatheter', name: '2.0F - 2.7F Microcatheter (Progreat / Renegade)', spec: '130 cm length', standardStore: 'Central IR Store' },
      { category: 'Embolic Agents', name: 'Fibered Microcoils & n-BCA Glue / STS Foam', spec: 'Coil sizes 3-10 mm, Histoacryl 1 mL', standardStore: 'Coil Locker A' },
      { category: 'Tract Embolization', name: 'Gelfoam Slurry / Tornado Coils for parenchymal tract', spec: 'Tract sealing system', standardStore: 'Angio Suite Main Store' }
    ],
    techniqueSteps: [
      'Under combined ultrasound and fluoroscopic guidance, puncture an intrahepatic right or left portal vein branch using a 21G Chiba needle.',
      'Confirm portal venous position by contrast injection; advance 0.018 wire, exchange for a 5F vascular access sheath.',
      'Perform digital subtraction portogram in mesenteric venous phase to identify the afferent feeding veins of the ectopic duodenal or stomal varices.',
      'Superselect the afferent feeder (e.g., superior/inferior pancreaticoduodenal veins, ileocolic vein collaterals) using a 5F catheter and 2.7F microcatheter.',
      'Advance the microcatheter directly into the nidus of the ectopic variceal complex.',
      'Embolize the ectopic variceal sac and outflow veins with n-BCA glue/Lipiodol (1:2 to 1:4) or fibered platinum microcoils and Gelfoam slurry until complete stasis is achieved.',
      'Perform post-embolization portography to verify complete exclusion of the ectopic varices and preservation of physiologic portal flow.',
      'On sheath withdrawal, pack the intrahepatic parenchymal track meticulously with Gelfoam torpedoes or microcoils to prevent post-procedural intraperitoneal hemorrhage.'
    ],
    complications: [
      'Intra-abdominal hemorrhage or hemoperitoneum from the transhepatic puncture tract (3-5%)',
      'Portal vein thrombosis from non-target spill of embolic liquid/coils',
      'Bowel ischemia / infarction if mesenteric venous arcades are over-embolized',
      'Biliary peritonitis or puncture-induced hemobilia'
    ],
    maayTariffInr: 78000,
    vendorContacts: [
      'Cook Medical (+91 98292 34567)',
      'Terumo India Medical (+91 98291 55678)'
    ]
  },
  {
    id: 'ptp-ehpvo-stenting',
    name: 'Percutaneous Transhepatic Portography and Portal Vein Stenting for Chronic EHPVO',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB009',
    rghsCode: '693 / 39',
    icd10: 'I81 (Portal Vein Thrombosis) / K76.6 (Portal Hypertension)',
    indications: [
      'Chronic extrahepatic portal vein obstruction (EHPVO) with cavernoma causing severe portal cavernoma cholangiopathy (PCC)',
      'Recurrent variceal bleeding refractory to endoscopic therapy in patients who are not candidates for surgical Meso-Rex bypass',
      'Symptomatic hypersplenism and refractory portal hypertension secondary to benign focal non-cirrhotic portal vein stenosis/occlusion'
    ],
    preOpCriteria: [
      'High-resolution triphasic CT or MR portography identifying recanalizable native portal vein remnant and patent intrahepatic portal branches',
      'Color Doppler mapping of intrahepatic portal radicles suitable for percutaneous puncture',
      'Normal baseline liver parenchymal architecture / preserved liver function'
    ],
    hardware: [
      { category: 'Percutaneous Access', name: '21G Micropuncture Set & 6F - 8F Transhepatic Sheath', spec: '15 cm Chiba, 45 cm Flexor sheath', standardStore: 'Angio Suite Main Store' },
      { category: 'Guidewires', name: '0.035 Stiff Terumo Glidewire & 0.035 Amplatz Super Stiff', spec: '260 cm length', standardStore: 'Central IR Store' },
      { category: 'Crossing Catheter', name: '5F Kumpe / QuickCross / Navicross Support Catheter', spec: '90 - 135 cm length', standardStore: 'Central IR Store' },
      { category: 'Angioplasty Balloon', name: 'PTA Dilatation Balloon (Mustang / Conquest)', spec: '8 mm - 12 mm x 40-60 mm, high pressure', standardStore: 'Central IR Store' },
      { category: 'Self-Expanding Stent', name: 'Self-Expanding Nitinol / Covered Stent (E-Luminexx / Wallstent / Fluency)', spec: '10-14 mm diameter x 60-100 mm length', standardStore: 'Consignment Store' },
      { category: 'Tract Closure', name: 'Gelfoam Torpedoes & Tornado Embolization Coils', spec: '0.035 coils for parenchymal tract sealing', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Under ultrasound guidance, puncture a right or left intrahepatic portal vein branch with a 21G needle and advance 0.018 wire.',
      'Upsize to a 6F/8F vascular sheath; perform initial portogram to define the intrahepatic arborization and proximal cavernous collateral network.',
      'Using a 5F Kumpe or angled support catheter and 0.035 stiff angled Glidewire, gently probe and traverse the chronic fibrotic occlusion of the native main portal vein trunk into the superior mesenteric vein (SMV).',
      'Verify intraluminal position in the SMV by contrast portography; exchange wire for an Amplatz Super Stiff guidewire.',
      'Perform stepwise predilation of the occluded segment with 6 mm to 8 mm balloons.',
      'Deploy a large-caliber self-expanding Nitinol or covered stent (10-14 mm diameter) extending from the confluence of the SMV/splenic vein across the cavernoma into the intrahepatic portal bifurcation.',
      'Perform post-dilation to nominal caliber (10-12 mm); verify brisk forward hepatopetal laminar flow with decompression of collateral cavernoma.',
      'Embolize the transhepatic parenchymal puncture tract with coils and Gelfoam upon sheath removal.'
    ],
    complications: [
      'Perforation of the extrahepatic portal vein with catastrophic hemoperitoneum',
      'Acute in-stent thrombosis requiring immediate catheter-directed thrombolysis or anticoagulation',
      'Hepatic parenchymal bleeding or subcapsular hematoma',
      'Biliary tract injury / biloma'
    ],
    maayTariffInr: 110000,
    vendorContacts: [
      'Becton Dickinson (BD) India (+91 98293 45678)',
      'Boston Scientific India (+91 98292 67890)'
    ]
  },
  {
    id: 'spontaneous-shunt-embolization',
    name: 'Mesenteric-Caval / Splenorenal Spontaneous Shunt Embolization for Refractory Hepatic Encephalopathy',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB010',
    rghsCode: '693 / 40',
    icd10: 'K72.90 (Hepatic Encephalopathy) / K76.6 (Portal Hypertension)',
    indications: [
      'Recurrent or persistent debilitating overt hepatic encephalopathy (West Haven Grade II-IV) despite optimal lactulose and rifaximin therapy',
      'Documented large spontaneous portosystemic shunt (SPSS: splenorenal, gastrorenal, or mesocaval) > 8 mm diameter on CT',
      'Preserved baseline portal systemic pressure reserve without active variceal bleeding or uncontrolled tense ascites'
    ],
    preOpCriteria: [
      'Contrast-enhanced abdominal CT with multiplanar vascular reconstructions measuring shunt anatomy and landing zone',
      'Pre-procedural balloon test occlusion (PTO) planned to evaluate portal pressure spike (< 10-12 mmHg rise in portal pressure acceptable)',
      'Coagulation check: INR < 2.0, Platelets > 40,000/uL'
    ],
    hardware: [
      { category: 'Vascular Access', name: '8F - 10F Vascular Sheath (Destination / Flexor)', spec: '45-65 cm length', standardStore: 'Angio Suite Main Store' },
      { category: 'Diagnostic / Sizing Balloon', name: 'Equalizer / Cello Balloon Sizing Catheter', spec: '15 mm - 25 mm diameter balloon', standardStore: 'Angio Suite Main Store' },
      { category: 'Vascular Plug', name: 'Amplatzer Vascular Plug II / Plug IV', spec: 'Sizes 12 mm to 22 mm (oversized 30-50%)', standardStore: 'Consignment Store' },
      { category: 'Embolic Coils', name: '0.035 Gianturco / Nester Fibered Platinum Coils', spec: '10 mm - 20 mm diameters', standardStore: 'Coil Locker A' },
      { category: 'Pressure Line', name: 'Direct Hemodynamic Transducer Line', spec: 'Continuous portal and caval pressure monitoring', standardStore: 'Cath Lab Bio-Station' }
    ],
    techniqueSteps: [
      'Access right common femoral vein (or transjugular route); advance 8F/10F guiding sheath into the IVC / left renal vein.',
      'Engage the spontaneous splenorenal, mesocaval, or gastrorenal shunt with an angled selective catheter.',
      'Perform retrograde shunt venography and measure baseline caval and shunt pressures.',
      'Advance an occlusion balloon catheter into the shunt and inflate to temporarily occlude flow for 10-15 minutes (test occlusion).',
      'Monitor mesenteric/portal pressure response and check for signs of severe portal hypertension escalation.',
      'Once test occlusion demonstrates safe portal tolerance, advance delivery sheath across the shunt and deploy an Amplatzer Vascular Plug II (oversized 30-50% to prevent migration).',
      'Reinforce the vascular plug with 0.035 fibered coils on the portal side of the plug if necessary to achieve immediate dense occlusion.',
      'Confirm total flow cessation across the shunt on completion venography; verify patent intrahepatic portal flow and hepatopetal perfusion.',
      'Withdraw delivery hardware and achieve femoral venous hemostasis.'
    ],
    complications: [
      'Acute de-novo variceal hemorrhage or severe worsening of ascites secondary to portal pressure elevation',
      'Plug migration into IVC, right atrium, or pulmonary artery',
      'Acute portal vein thrombosis from altered hemodynamics',
      'Puncture site hematoma'
    ],
    maayTariffInr: 95000,
    vendorContacts: [
      'Abbott Vascular India (+91 98291 22334)',
      'Cook Medical (+91 98292 34567)'
    ]
  },
  {
    id: 'splenic-artery-embolization-partial',
    name: 'Partial / Proximal Splenic Artery Embolization (SAE) for Hypersplenism and Portal Pressure Reduction',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB011',
    rghsCode: '693 / 41',
    icd10: 'D73.1 (Hypersplenism) / K76.6 (Portal Hypertension)',
    indications: [
      'Severe hypersplenism with refractory thrombocytopenia (Platelets < 30,000-40,000/uL) preventing essential systemic chemotherapy, antiviral therapy, or surgery',
      'Adjunct therapy to decrease portal venous inflow and lower portal hypertension gradient in cirrhotic patients',
      'Recurrent bleeding from portal hypertensive gastropathy / gastric varices in poor surgical candidates'
    ],
    preOpCriteria: [
      'Contrast-enhanced abdominal CT measuring spleen volume and splenic artery tortuosity',
      'Pre-procedure vaccination against encapsulated organisms (Streptococcus pneumoniae, Neisseria meningitidis, Haemophilus influenzae type b) at least 2 weeks prior',
      'Exclusion of active systemic or peritonitis infection'
    ],
    hardware: [
      { category: 'Vascular Access', name: '5F Radiofocus Introducer Sheath', spec: '11 cm length', standardStore: 'Angio Suite Main Store' },
      { category: 'Diagnostic Catheter', name: '5F Yashiro / Cobra C2 / Simmons-1 Catheter', spec: '65 - 100 cm', standardStore: 'Angio Suite Main Store' },
      { category: 'Microcatheter', name: '2.7F High-Flow Microcatheter (Progreat)', spec: '130 cm length', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: '0.035 Radiofocus Glidewire & 0.014 Microguidewire', spec: '180 cm and 200 cm', standardStore: 'Central IR Store' },
      { category: 'Embolic Particles', name: 'PVA Particles / Hydrogel Microspheres (Embozene)', spec: '500-700 um or 700-900 um calibrated spheres', standardStore: 'Central IR Store' },
      { category: 'Embolic Coils', name: '0.035 / 0.018 Fibered Platinum Embolization Coils', spec: 'Diameters 6 mm to 12 mm for main trunk occlusion', standardStore: 'Coil Locker A' }
    ],
    techniqueSteps: [
      'Perform ultrasound-guided right common femoral artery puncture and insert 5F sheath.',
      'Catheterize the celiac axis using a 5F Yashiro/Cobra catheter and obtain digital subtraction celiac arteriography.',
      'Navigate into the tortuous splenic artery and advance the 2.7F microcatheter beyond the dorsal pancreatic artery to preserve pancreatic head/body vascularity.',
      'For partial parenchymal embolization (targeting 50-60% splenic infarction): slowly infuse calibrated 500-700 um or 700-900 um microspheres under strict fluoroscopy until splenic parenchymal transit time slows markedly.',
      'For proximal main splenic artery embolization: deploy large-caliber fibered coils in the mid-splenic artery trunk to dampen arterial pulsation and reduce portal inflow while preserving distal collateral reconstitution via short gastric/omental branches.',
      'Obtain post-embolization celiac arteriogram documenting approximately 50-60% devascularization of splenic parenchyma or reduction in splenic arterial flow velocity.',
      'Remove sheath and compress femoral puncture site for 15-20 minutes.'
    ],
    complications: [
      'Post-splenic embolization syndrome (severe left upper quadrant pain, high-grade fever, vomiting in 70-90%)',
      'Splenic abscess formation requiring percutaneous catheter drainage or emergency splenectomy',
      'Pneumonia / left pleural effusion and left hemidiaphragmatic atelectasis',
      'Non-target embolization to stomach, pancreas, or left colon'
    ],
    maayTariffInr: 65000,
    vendorContacts: [
      'Terumo India Medical (+91 98291 55678)',
      'Boston Scientific India (+91 98292 67890)'
    ]
  },
  {
    id: 'sae-splenic-steal-syndrome',
    name: 'Splenic Artery Embolization for Splenic Steal Syndrome Post-Orthotopic Liver Transplant (OLT)',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB012',
    rghsCode: '693 / 42',
    icd10: 'T86.49 (Complication of Liver Transplant) / I77.9 (Vascular Steal Phenomenon)',
    indications: [
      'Documented splenic artery steal syndrome (SASS) post-liver transplant with hepatic artery hypoperfusion (resistive index < 0.50, sluggish systolic upstroke)',
      'Graft dysfunction, unexplained elevation of liver transaminases, or ischemic cholangiopathy in liver allograft with hyperdynamic splenic arterial flow',
      'Large splenic artery diameter (> 1.5x hepatic artery diameter) with splenic hyperperfusion shunting blood away from the liver allograft'
    ],
    preOpCriteria: [
      'Color Doppler ultrasound of hepatic allograft demonstrating hepatic arterial resistive index (RI) < 0.5 and tardus-parvus waveform',
      'Multi-detector CT angiography confirming patent but small-caliber hepatic artery and massively enlarged splenic artery',
      'Coagulation and renal status review in transplant ICU'
    ],
    hardware: [
      { category: 'Vascular Access', name: '5F Radiofocus Sheath', spec: '11 cm length', standardStore: 'Angio Suite Main Store' },
      { category: 'Diagnostic Catheter', name: '5F Yashiro / Cobra C2 Catheter', spec: '65 - 100 cm', standardStore: 'Angio Suite Main Store' },
      { category: 'Microcatheter', name: '2.7F High-Flow Microcatheter', spec: '130 cm length', standardStore: 'Central IR Store' },
      { category: 'Embolic Coils / Plugs', name: '0.035 Interlocking / Fibered Coils (Nester / IDC) or Amplatzer Plug 4', spec: 'Sizes 6 mm to 12 mm for main trunk occlusion', standardStore: 'Coil Locker A' },
      { category: 'Pressure Sensor', name: 'Micro-manometry guidewire / fluid pressure transducer', spec: 'Hepatic artery pressure evaluation', standardStore: 'Cath Lab Bio-Station' }
    ],
    techniqueSteps: [
      'Obtain ultrasound-guided right common femoral artery access with 5F sheath.',
      'Perform selective celiac arteriography to demonstrate rapid preferential flow into the giant splenic artery with poor opacification of the proper hepatic artery.',
      'Advance a 5F catheter and 2.7F microcatheter into the proximal-to-mid segment of the splenic artery, distal to the origin of the dorsal pancreatic artery.',
      'Deploy metallic fibered embolization coils or an Amplatzer Vascular Plug 4 to create complete occlusion of the mid-splenic artery trunk.',
      'Wait 3-5 minutes and repeat celiac arteriography to evaluate redistribution of arterial flow.',
      'Document marked instantaneous enhancement of flow velocity and vessel diameter in the graft common and proper hepatic arteries, with restoration of robust intrahepatic allograft perfusion.',
      'Perform intra-procedural or post-procedure Doppler ultrasound confirming normalization of hepatic artery resistive index (RI 0.60 - 0.75).',
      'Withdraw sheath and secure femoral hemostasis.'
    ],
    complications: [
      'Splenic infarction or abscess in an immunosuppressed transplant recipient',
      'Inadvertent coil migration into the common hepatic artery or celiac trunk leading to allograft ischemia',
      'Pancreatic ischemia / acute pancreatitis from inadvertent occlusion of dorsal pancreatic artery',
      'Femoral access pseudoaneurysm'
    ],
    maayTariffInr: 72000,
    vendorContacts: [
      'Medtronic Vascular (+91 98294 56789)',
      'Cook Medical (+91 98292 34567)'
    ]
  },
  {
    id: 'pve-ipsilateral-approach',
    name: 'Portal Vein Embolization (PVE) - Ipsilateral Approach for Future Liver Remnant (FLR) Hypertrophy',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB013',
    rghsCode: '693 / 43',
    icd10: 'Z51.89 (Planned Preoperative Procedure) / C22.0 (HCC) / C78.7 (Liver Metastases)',
    indications: [
      'Insufficient future liver remnant (FLR < 20-25% in normal liver, < 30-40% in cirrhotic / post-chemotherapy liver) prior to planned extended right hepatectomy',
      'Colorectal liver metastases or intrahepatic cholangiocarcinoma scheduled for major hepatic resection',
      'Optimization of remnant liver volume to prevent post-hepatectomy liver failure (PHLF)'
    ],
    preOpCriteria: [
      'CT volumetry confirming FLR / total functional liver volume (TELV) below safety thresholds',
      'Preserved synthetic liver function (Child-Pugh A, normal bilirubin, INR < 1.4)',
      'Absence of tumor thrombus in the main portal vein trunk or intended FLR branches'
    ],
    hardware: [
      { category: 'Percutaneous Access', name: '21G Micropuncture Access Set & 6F Sheath', spec: '15 cm Chiba needle, 6F x 45 cm Flexor sheath', standardStore: 'Angio Suite Main Store' },
      { category: 'Guidewires', name: '0.035 Stiff Glidewire & 0.035 Amplatz Super Stiff Wire', spec: '180 cm and 260 cm length', standardStore: 'Central IR Store' },
      { category: 'Diagnostic Catheter', name: '5F Cobra / Kumpe / Reverse Curved Catheter', spec: '65 - 100 cm', standardStore: 'Angio Suite Main Store' },
      { category: 'Microcatheter', name: '2.7F - 2.8F High-Flow Microcatheter', spec: '130 cm length', standardStore: 'Central IR Store' },
      { category: 'Embolic Material', name: 'PVA Particles (300-500 um, 500-700 um) & Gelfoam Sheet', spec: 'Calibrated spherical embolic particles', standardStore: 'Central IR Store' },
      { category: 'Embolic Coils / Plugs', name: '0.035 Fibered Platinum Coils / Amplatzer Plugs', spec: 'Sizes 8 mm to 14 mm for main right branch trunk', standardStore: 'Coil Locker A' }
    ],
    techniqueSteps: [
      'Under ultrasound guidance, puncture a right intrahepatic portal branch (tumor-bearing lobe) using a 21G Chiba needle.',
      'Place a 6F vascular sheath into the right portal system; perform baseline portogram to delineate right anterior, right posterior, and segment 4 branches.',
      'Pass a reverse curve or Kumpe catheter into the right portal vein bifurcation and select all segmental branches feeding the intended resection territory (Segments 5, 6, 7, 8 +/- Segment 4).',
      'Infuse PVA particles (300-500 um followed by 500-700 um) or Gelfoam slurry through the microcatheter to obliterate the peripheral distal sinusoids of the targeted segments.',
      'Deploy 0.035 fibered coils or vascular plugs in the proximal trunks of the right anterior and posterior portal branches to prevent collateral recanalization.',
      'Carefully preserve all left portal branches and FLR inflow.',
      'Perform completion portogram showing total occlusion of right portal branches with robust exclusive hepatopetal flow into the left FLR (Segments 2, 3).',
      'Embolize the transhepatic puncture tract with Gelfoam torpedoes and coils during sheath withdrawal.'
    ],
    complications: [
      'Inadvertent non-target embolization of left portal vein branches supplying the FLR',
      'Portal vein thrombosis extending into main trunk or mesenteric veins',
      'Subcapsular hematoma or bile leak along the transhepatic tract',
      'Failure of adequate FLR hypertrophy'
    ],
    maayTariffInr: 88000,
    vendorContacts: [
      'Cook Medical (+91 98292 34567)',
      'Boston Scientific (+91 98292 67890)'
    ]
  },
  {
    id: 'pve-contralateral-nbca',
    name: 'Portal Vein Embolization - Contralateral Approach with n-BCA Glue and Lipiodol',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB014',
    rghsCode: '693 / 44',
    icd10: 'Z51.89 (Planned Preoperative Procedure) / C22.0 (HCC)',
    indications: [
      'PVE when right hepatic lobe tumor burden precludes safe ipsilateral parenchymal puncture',
      'Technical requirement for absolute permanent occlusion using n-BCA liquid adhesive to maximize FLR hypertrophy rates',
      'Planned major right or extended right hepatectomy with marginal FLR volume'
    ],
    preOpCriteria: [
      'Pre-procedure 3D volumetric CT estimating FLR ratio and identifying left portal branch geometry',
      'Safe US window to puncture healthy left lateral portal vein branch (Segment 3) without transgressing bile ducts',
      'Coagulation profile: INR < 1.5, Platelets > 60,000/uL'
    ],
    hardware: [
      { category: 'Percutaneous Access', name: '21G Micropuncture Set & 5F - 6F Sheath', spec: '15 cm Chiba needle, 25 cm introducer sheath', standardStore: 'Angio Suite Main Store' },
      { category: 'Guidewires', name: '0.035 Terumo Glidewire & Rosen Wire', spec: '180 cm length', standardStore: 'Central IR Store' },
      { category: 'Diagnostic Catheter', name: '5F Cobra / Kumpe Catheter', spec: '65 - 100 cm', standardStore: 'Angio Suite Main Store' },
      { category: 'Microcatheter', name: '2.0F - 2.4F DMSO-Compatible Microcatheter', spec: '130 cm length', standardStore: 'Central IR Store' },
      { category: 'Liquid Embolic', name: 'n-Butyl Cyanoacrylate (Histoacryl / Glubran 2)', spec: '1 mL ampoules (3-4 ampoules)', standardStore: 'Special Consignment Rack' },
      { category: 'Contrast Matrix', name: 'Lipiodol Ultra-Fluid', spec: '10 mL ampoule', standardStore: 'Central IR Store' },
      { category: 'Non-Ionic Flush', name: '5% Dextrose in Water (D5W)', spec: '500 mL sterile infusion bag', standardStore: 'SMS Pharmacy DDC-14' }
    ],
    techniqueSteps: [
      'Under ultrasound guidance, puncture a left portal vein branch (typically segment 3) through healthy left lobe parenchyma.',
      'Place a 5F/6F sheath and advance a 5F catheter across the main portal bifurcation into the right portal vein.',
      'Perform baseline portogram to map all right lobe branches (and segment 4 if extended right hepatectomy planned).',
      'Advance the microcatheter selectively into each subsegmental and segmental branch of the right lobe.',
      'Thoroughly flush the microcatheter with 5% Dextrose (D5W).',
      'Under continuous fluoroscopic monitoring, inject an n-BCA and Lipiodol mixture (typically 1:4 to 1:6 ratio) into each target branch until cast fills the distal portal venules and main segmental branches.',
      'Aspirate and instantly withdraw the microcatheter after each branch embolization to prevent catheter gluing.',
      'Perform completion portogram from the main portal vein confirming complete cast occlusion of all target right branches with exclusive, brisk flow directed into the left remnant branches.',
      'Plug the left puncture tract with Gelfoam or microcoils during sheath withdrawal.'
    ],
    complications: [
      'Reflux of n-BCA glue into the left portal vein supplying the FLR (potentially fatal complication)',
      'Microcatheter entrapment within the polymerized n-BCA cast',
      'Subcapsular hematoma or bile peritonitis along the left lobe tract',
      'Acute portal vein thrombosis'
    ],
    maayTariffInr: 92000,
    vendorContacts: [
      'B. Braun Medical India (+91 98293 11223)',
      'Guerbet India (+91 98290 12345)'
    ]
  },
  {
    id: 'hvd-lvd-simultaneous',
    name: 'Hepatic Vein Deprivation (HVD / Liver Venous Deprivation LVD): Simultaneous PVE and Hepatic Vein Plug/Coils',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB015',
    rghsCode: '693 / 45',
    icd10: 'Z51.89 (Planned Preoperative Procedure) / C22.0 (HCC) / C78.7 (Liver Mets)',
    indications: [
      'Severely inadequate FLR (< 20% in healthy liver or < 30% in damaged liver) requiring rapid and maximal FLR hypertrophy in a shortened time window (within 2-3 weeks)',
      'Patients undergoing aggressive chemotherapy with limited time window before major hepatectomy',
      'Failure of adequate hypertrophy following prior portal vein embolization alone'
    ],
    preOpCriteria: [
      'Baseline 3D CT volumetry establishing FLR/TELV ratio and defining right hepatic vein and middle hepatic vein branching',
      'Liver function tests confirming Child-Pugh Class A',
      'Absence of systemic sepsis or coagulopathy'
    ],
    hardware: [
      { category: 'Percutaneous Access', name: '21G Micropuncture Set & 6F - 8F Sheaths', spec: 'Transhepatic and transjugular access sets', standardStore: 'Angio Suite Main Store' },
      { category: 'Guidewires', name: '0.035 Stiff Glidewires & Amplatz Super Stiff', spec: '260 cm length', standardStore: 'Central IR Store' },
      { category: 'Microcatheter', name: '2.7F High-Flow Microcatheter', spec: '130 cm length', standardStore: 'Central IR Store' },
      { category: 'Vascular Plug', name: 'Amplatzer Vascular Plug II (AVP II)', spec: 'Sizes 14 mm to 22 mm for right hepatic vein occlusion', standardStore: 'Consignment Store' },
      { category: 'Embolic Agents', name: 'n-BCA Glue / Lipiodol & Fibered Coils', spec: 'Histoacryl ampoules and 0.035 coils', standardStore: 'Special Consignment Rack' },
      { category: 'Tract Closure', name: 'Gelfoam Torpedoes & Microcoils', spec: 'Parenchymal tract sealing kit', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Perform right portal vein embolization (PVE) via percutaneous transhepatic access as per standard protocol using n-BCA/Lipiodol or particles and coils.',
      'Simultaneously or sequentially, obtain access to the right hepatic vein (via right internal jugular vein or percutaneous transhepatic puncture).',
      'Perform right hepatic venogram to measure the vein diameter and identify accessory inferior right hepatic veins.',
      'Deploy an Amplatzer Vascular Plug II (oversized by 50-100% relative to the right hepatic vein landing zone) 1-2 cm from the IVC confluence to block hepatic venous outflow.',
      'Deploy 0.035 fibered coils and/or Gelfoam/liquid embolics distal to the plug to ensure complete hepatic vein and veno-venous collateral occlusion (Liver Venous Deprivation).',
      'If extended right hepatectomy is planned, selectively embolize accessory right hepatic veins and/or middle hepatic vein branches as indicated.',
      'Perform completion portogram and cavogram to confirm total abrogation of right portal inflow and right hepatic venous outflow with unobstructed left-sided drainage.',
      'Seal all transhepatic access tracts with Gelfoam and coils.'
    ],
    complications: [
      'Migration of hepatic vein vascular plug into the IVC or right atrium',
      'Transient acute liver parenchymal necrosis or severe transaminase spike',
      'Reflux of embolic material into the middle hepatic vein or left hepatic circulation',
      'Hemoperitoneum from transhepatic hepatic venous puncture'
    ],
    maayTariffInr: 135000,
    vendorContacts: [
      'Abbott Vascular India (+91 98291 22334)',
      'Cook Medical (+91 98292 34567)'
    ]
  },
  {
    id: 'tjlb-tract-plug',
    name: 'Transjugular Liver Biopsy (TJLB) with Core Biopsy Needle and Post-Biopsy Tract Plug Embolization',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB016',
    rghsCode: '693 / 46',
    icd10: 'K76.9 (Liver Disease, Unspecified) / R94.5 (Abnormal Liver Function Tests)',
    indications: [
      'Histological evaluation of diffuse parenchymal liver disease in patients with severe coagulopathy (INR > 1.5, Platelets < 50,000/uL)',
      'Presence of massive or tense ascites precluding safe percutaneous liver biopsy',
      'Simultaneous hemodynamic evaluation (HVPG) required alongside liver histology in cirrhosis or portal hypertension workup'
    ],
    preOpCriteria: [
      'Ultrasound of liver confirming patent right and middle hepatic veins and ruling out hepatic vein thrombosis',
      'Complete blood count and coagulation profile',
      'Consent for transjugular endovascular access and core biopsy'
    ],
    hardware: [
      { category: 'Vascular Access', name: '7F - 9F Transjugular Introducer Sheath', spec: 'Cook TJLB-100 / Quick-Core Biopsy Set', standardStore: 'TIPS Dedicated Cabinet' },
      { category: 'Biopsy Needle', name: '18G / 19G Automated Tru-Cut Biopsy Needle', spec: 'Cook Quick-Core 60 cm length, 20 mm throw', standardStore: 'Central IR Store' },
      { category: 'Diagnostic Catheter', name: '5F MPA / Kumpe Catheter', spec: '100 cm length', standardStore: 'Angio Suite Main Store' },
      { category: 'Guidewire', name: '0.035 Bentson / Amplatz Guidewire', spec: '180 cm length', standardStore: 'Central IR Store' },
      { category: 'Tract Embolization', name: 'Gelfoam Slurry / Microcoils (0.018 or 0.035)', spec: '3-4 mm pushable coils or Gelfoam torpedoes', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Under ultrasound guidance, cannulate the right internal jugular vein and place a 7F/9F transjugular biopsy sheath into the IVC.',
      'Advance the curved stiffening cannula and catheter into the right hepatic vein (or middle hepatic vein); perform hepatic venography.',
      'Rotate the sheath anteriorly into a wedged anterior branch of the right hepatic vein away from the liver capsule.',
      'Advance the 18G/19G automated Quick-Core biopsy needle through the sheath to the parenchymal margin.',
      'Have the patient hold respiration in expiration; fire the automated core needle into the liver parenchyma and immediately withdraw.',
      'Expel core tissue specimen onto saline-moistened filter paper; inspect for adequate length (> 10-15 mm) and complete portal tracts.',
      'Repeat biopsy passes (typically 2-3 cores) as clinically indicated.',
      'Perform tractography through the sheath; if capsular perforation or vascular extravasation is suspected, or routinely for high-risk coagulopathy, embolize the biopsy tract with Gelfoam torpedoes or microcoils.',
      'Remove sheath and compress RIJV puncture site for 5-10 minutes.'
    ],
    complications: [
      'Subcapsular hematoma or intra-abdominal hemoperitoneum from liver capsule transgression (0.5-1%)',
      'Bilio-venous fistula causing transient hemobilia or cholangitis',
      'Transient cardiac arrhythmias during catheter manipulation in right atrium',
      'Pneumothorax / neck hematoma at internal jugular puncture site'
    ],
    maayTariffInr: 32000,
    vendorContacts: [
      'Cook Medical (+91 98292 34567)',
      'Argon Medical Devices (+91 98295 67890)'
    ]
  },
  {
    id: 'hvpg-measurement',
    name: 'Hepatic Venous Pressure Gradient (HVPG) Catheter Measurement with Wedged/Free Manometry',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB017',
    rghsCode: '693 / 47',
    icd10: 'K76.6 (Portal Hypertension) / R94.5 (Abnormal Liver Function Tests)',
    indications: [
      'Gold standard diagnostic quantification of portal hypertension (clinically significant portal hypertension defined as HVPG >= 10 mmHg)',
      'Stratification of risk for variceal bleeding, decompensation, and hepatocellular carcinoma in cirrhosis',
      'Monitoring therapeutic response to non-selective beta-blockers (NSBB: target HVPG < 12 mmHg or > 20% reduction from baseline)',
      'Preoperative risk assessment prior to hepatic resection in cirrhotic patients'
    ],
    preOpCriteria: [
      'Patient fasting for at least 4-6 hours (food intake increases splanchnic blood flow and alters HVPG)',
      'Withholding vasoactive medications (e.g., beta-blockers, nitrates, terlipressin) if baseline diagnostic evaluation is desired',
      'Ultrasound confirming patent right internal jugular vein and hepatic veins'
    ],
    hardware: [
      { category: 'Vascular Access', name: '6F - 7F Vascular Introducer Sheath', spec: '11 cm length with hemostatic valve', standardStore: 'Angio Suite Main Store' },
      { category: 'Balloon Catheter', name: '5F - 6F Balloon-Tipped Catheter (Edwards / Swan-Ganz / Berenstein)', spec: 'Straight or angled tip, 100-110 cm, 8-10 mm compliant balloon', standardStore: 'Cath Lab Bio-Station' },
      { category: 'Guidewire', name: '0.035 Bentson / Straight Glidewire', spec: '150 - 180 cm length', standardStore: 'Central IR Store' },
      { category: 'Manometry System', name: 'High-Precision Electronic Hemodynamic Transducer', spec: 'Calibrated at mid-axillary line, continuous digital trace recording', standardStore: 'Cath Lab Bio-Station' }
    ],
    techniqueSteps: [
      'Perform ultrasound-guided right internal jugular vein puncture under local anesthesia and insert 6F/7F sheath.',
      'Advance the balloon-tipped catheter over a guidewire through the right atrium and IVC into the right hepatic vein (typically 2-4 cm from the IVC junction).',
      'Calibrate and zero the external pressure transducer at the level of the patient’s right atrium (mid-axillary line).',
      'Measure Free Hepatic Venous Pressure (FHVP) with the balloon deflated in the main right hepatic vein.',
      'Inflate the balloon with 0.5-1.0 mL air to achieve complete occlusion; confirm wedging by gentle contrast injection showing parenchymal blushes with no reflux back into the vein.',
      'Record Wedged Hepatic Venous Pressure (WHVP) until a stable plateau is reached (minimum 30-60 seconds).',
      'Deflate balloon and repeat measurements in triplicate to ensure reproducibility within 1 mmHg.',
      'Advance catheter into the IVC to measure Inferior Vena Caval Pressure (IVCP).',
      'Calculate HVPG = WHVP minus FHVP (normal < 5 mmHg; > 10 mmHg indicates clinically significant portal hypertension, > 12 mmHg predicts variceal bleeding).',
      'Withdraw catheter and maintain local hemostasis at RIJV site.'
    ],
    complications: [
      'Hepatic vein rupture from balloon overinflation',
      'Transient cardiac ectopy / arrhythmias during right atrial traversal',
      'Local puncture site neck hematoma',
      'Inaccurate reading due to veno-venous collaterals or incomplete balloon occlusion'
    ],
    maayTariffInr: 28000,
    vendorContacts: [
      'Edwards Lifesciences India (+91 98290 33445)',
      'Cook Medical (+91 98292 34567)'
    ]
  },
  {
    id: 'ptbd-right-lobe-access',
    name: 'Percutaneous Transhepatic Biliary Drainage (PTBD) - Right Lobe Access with Internal-External Catheter',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB018',
    rghsCode: '693 / 48',
    icd10: 'K83.1 (Obstruction of Bile Duct) / C22.1 (Intrahepatic Bile Duct Carcinoma)',
    indications: [
      'Malignant biliary obstruction (cholangiocarcinoma, gallbladder cancer, metastatic nodal disease) with failed or unfeasible ERCP',
      'Severe acute obstructive cholangitis requiring emergent biliary decompression',
      'Biliary leak, transection, or stricture following laparoscopic cholecystectomy or liver surgery'
    ],
    preOpCriteria: [
      'MRCP or triphasic contrast CT delineating level of biliary obstruction and dilated right hepatic ductal anatomy',
      'Coagulation profile optimized (INR < 1.5, Platelets > 50,000/uL); fresh frozen plasma/platelets transfused if necessary',
      'Broad-spectrum intravenous antibiotics administered (e.g., Cefoperazone-Sulbactam + Metronidazole) 1 hour prior'
    ],
    hardware: [
      { category: 'Access Needle', name: '21G / 22G Chiba Percutaneous Access Needle', spec: '15 cm - 20 cm length with echogenic tip', standardStore: 'Angio Suite Main Store' },
      { category: 'Micropuncture Kit', name: 'AccuStick / Neff Percutaneous Access Set', spec: '4F/5F coaxial dilator with 0.018 NT wire guide', standardStore: 'Angio Suite Main Store' },
      { category: 'Guidewires', name: '0.035 Stiff Hydrophilic Glidewire & 0.035 Amplatz Super Stiff', spec: '180 cm and 260 cm length', standardStore: 'Central IR Store' },
      { category: 'Drainage Catheter', name: 'Internal-External Biliary Drainage Catheter (Cook / Boston Scientific)', spec: '8.5F - 10.2F x 40 cm multicavity locking pigtail', standardStore: 'PTBD Shelf Central' },
      { category: 'Dilators', name: 'Fascial Dilator Kit', spec: '6F, 7F, 8F, 9F, 10F dilators', standardStore: 'Angio Suite Main Store' },
      { category: 'Drainage Bag', name: 'Gravity Bile Drainage Collection Bag & Luer Lock Connector', spec: 'Sterile 500 mL drainage bag with anti-reflux valve', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Patient placed supine; mid-axillary right 10th/11th intercostal space prepped and draped under ultrasound and fluoroscopy.',
      'Under real-time ultrasound, puncture a peripheral right anterior or posterior biliary radicle (Segment 5 or 6) with a 21G Chiba needle.',
      'Remove stylet, aspirate bile, and inject dilute contrast to perform cholangiogram demonstrating the obstruction site.',
      'Pass an 0.018 steerable guidewire through the Chiba needle into the biliary tree; exchange for a 4F/5F coaxial dilator system.',
      'Introduce a 0.035 angled Glidewire and manipulate across the biliary stricture into the common bile duct and through the ampulla into the duodenum.',
      'Exchange for an Amplatz Super Stiff guidewire anchored in the proximal jejunal loop.',
      'Dilate the transhepatic parenchymal and strictured ductal tract sequentially with 6F to 10F fascial dilators.',
      'Advance an 8.5F or 10.2F locking internal-external biliary drainage catheter over the wire, ensuring the distal pigtail locks in the duodenum and side holes straddle both above and below the stricture.',
      'Confirm position by contrast injection, lock the pigtail string, secure the catheter to skin with 2-0 silk suture and adhesive dressing, and connect to drainage bag.'
    ],
    complications: [
      'Biliary peritonitis or hemoperitoneum from capsular puncture',
      'Hemobilia from arterial or portal venous injury during parenchymal traversal',
      'Sepsis / septic shock triggered by intrabiliary contrast over-injection',
      'Pneumothorax / hemothorax from high intercostal pleura transgression'
    ],
    maayTariffInr: 45000,
    vendorContacts: [
      'Cook Medical (+91 98292 34567)',
      'Boston Scientific (+91 98292 67890)'
    ]
  },
  {
    id: 'ptbd-left-lobe-access',
    name: 'Percutaneous Transhepatic Biliary Drainage (PTBD) - Left Lobe Ductal Access',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB019',
    rghsCode: '693 / 49',
    icd10: 'K83.1 (Obstruction of Bile Duct) / C24.0 (Extrahepatic Bile Duct Carcinoma)',
    indications: [
      'Malignant biliary obstruction with isolated left hepatic duct dilation or Bismuth Type IIIb/IV hilar cholangiocarcinoma',
      'Unfavorable right lobe anatomy (right lobe atrophy, extensive right hepatic tumor replacement, or previous right hepatectomy)',
      'Subxiphoid epigastric approach preferred for patient comfort and reduced respiratory motion'
    ],
    preOpCriteria: [
      'Cross-sectional imaging (CT/MRCP) verifying dilation of Segment 2 or Segment 3 left intrahepatic ducts',
      'Ultrasound evaluation of epigastric / subxiphoid window excluding intervening left lobe tumors or stomach',
      'Coagulation check: INR < 1.5, Platelets > 50,000/uL, IV prophylactic antibiotics administered'
    ],
    hardware: [
      { category: 'Access Needle', name: '21G Chiba Needle', spec: '15 cm length with echogenic tip', standardStore: 'Angio Suite Main Store' },
      { category: 'Micropuncture Kit', name: 'AccuStick Coaxial Introducer Set', spec: '4F/5F with 0.018 wire', standardStore: 'Angio Suite Main Store' },
      { category: 'Guidewires', name: '0.035 Stiff Glidewire & Amplatz Super Stiff', spec: '180 cm and 260 cm', standardStore: 'Central IR Store' },
      { category: 'Diagnostic Catheter', name: '5F Kumpe / KMP / Glidecath', spec: '65 - 100 cm', standardStore: 'Angio Suite Main Store' },
      { category: 'Drainage Catheter', name: 'Multipurpose Internal-External Biliary Pigtail Catheter', spec: '8.5F - 10.2F x 40 cm locking pigtail', standardStore: 'PTBD Shelf Central' },
      { category: 'Drainage Bag', name: 'Biliary Drainage Bag Kit', spec: 'Sterile 500 mL system', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Patient placed supine; subxiphoid epigastric region prepped and draped.',
      'Under high-resolution ultrasound guidance, identify a dilated left intrahepatic duct (segment 3 duct preferred due to straight anatomical trajectory).',
      'Puncture the segment 3 duct under direct real-time sonography using a 21G Chiba needle.',
      'Aspirate bile to confirm intraluminal position and gently inject dilute contrast to perform left cholangiogram.',
      'Introduce 0.018 wire, upsize to 4F/5F coaxial dilator, and transition to a 0.035 hydrophilic Glidewire.',
      'Navigate the 0.035 wire across the main left hepatic duct confluence, through the obstructive lesion into the duodenum.',
      'Exchange for an Amplatz Super Stiff guidewire; dilate the tract sequentially to 10F.',
      'Deploy an 8.5F or 10.2F internal-external locking pigtail catheter across the stricture into the duodenum.',
      'Lock the pigtail, confirm side-hole placement above and below the obstruction on fluoroscopy, and secure firmly to the epigastric skin.'
    ],
    complications: [
      'Catheter kinking or dislodgement secondary to epigastric wall mobility',
      'Parenchymal hemorrhage or left portal vein branch puncture',
      'Biliary peritonitis / free intra-abdominal bile leak',
      'Bacteremia / septic shock'
    ],
    maayTariffInr: 45000,
    vendorContacts: [
      'Cook Medical (+91 98292 34567)',
      'Argon Medical Devices (+91 98295 67890)'
    ]
  },
  {
    id: 'biliary-metallic-stenting-sems',
    name: 'Biliary Metallic Stenting (SEMS) for Unresectable Malignant Klatskin Tumor (Bismuth III/IV)',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB020',
    rghsCode: '693 / 50',
    icd10: 'C24.0 (Malignant Neoplasm of Extrahepatic Bile Duct) / K83.1 (Biliary Obstruction)',
    indications: [
      'Palliative internal biliary drainage for unresectable hilar cholangiocarcinoma (Klatskin tumor, Bismuth-Corlette Type III or IV)',
      'Malignant hilar biliary obstruction in patients with expected survival > 3 months to avoid long-term external catheter morbidity',
      'Malignant gallbladder cancer extending to hepatic confluence causing obstructive jaundice'
    ],
    preOpCriteria: [
      'Triphasic liver CT and MRCP defining ductal arborization and determining which functional liver segments should be drained (> 50% liver volume)',
      'Pre-existing PTBD or new simultaneous transhepatic access established',
      'Absence of active uncontrolled biliary sepsis or cholangitic abscess'
    ],
    hardware: [
      { category: 'Vascular Access', name: '7F - 8F Guiding Sheath / Introducer', spec: '25-45 cm length', standardStore: 'Angio Suite Main Store' },
      { category: 'Guidewires', name: '0.035 Amplatz Super Stiff & Stiff Glidewire', spec: '260 cm length', standardStore: 'Central IR Store' },
      { category: 'Angioplasty Balloon', name: 'Biliary PTA Dilatation Balloon (Mustang / Conquest)', spec: '6 mm - 8 mm x 40 mm', standardStore: 'Central IR Store' },
      { category: 'Self-Expanding Metallic Stent', name: 'Uncovered Biliary SEMS (Epic / Zilver / Niti-S)', spec: '8 mm - 10 mm diameter x 60 mm - 100 mm length', standardStore: 'Special Consignment Rack' },
      { category: 'Safety Catheter', name: '8.5F Temporary External Biliary Drainage Catheter', spec: 'For post-deployment 24-48 hr decompression', standardStore: 'PTBD Shelf Central' }
    ],
    techniqueSteps: [
      'Through existing PTBD access or new ultrasound-guided transhepatic puncture, advance 7F/8F sheath across the hilar obstruction into the duodenum over an Amplatz Super Stiff wire.',
      'Perform detailed digital subtraction cholangiogram to map the proximal margins of the tumor and all secondary biliary bifurcations.',
      'Perform gentle balloon predilation of the tight malignant stricture using a 6 mm or 8 mm PTA balloon.',
      'Deploy an uncovered self-expanding metallic stent (8-10 mm diameter) across the stricture, ensuring the proximal end covers at least 1 cm above the tumor into the healthy sectoral duct and the distal end extends across the ampulla into the duodenum or common bile duct.',
      'If tumor ingrowth or tight waist persists, perform gentle post-dilation (optional, to minimize risk of bleeding).',
      'Place a temporary 8.5F internal-external safety drain through the stent to maintain decompression and provide access in case of acute hemobilia.',
      'Perform cholangiogram at 24-48 hours showing brisk contrast clearance into the bowel; remove safety catheter over wire and plug parenchymal tract.'
    ],
    complications: [
      'Tumor ingrowth or overgrowth through the bare metallic struts causing late re-occlusion',
      'Early stent thrombosis / sludge occlusion',
      'Severe acute hemobilia from tumor laceration during balloon dilation or stent expansion',
      'Acute post-procedure cholangitis in un-drained hepatic sectors'
    ],
    maayTariffInr: 75000,
    vendorContacts: [
      'Boston Scientific India (+91 98292 67890)',
      'Taewoong Medical Regional Distributor (+91 98296 78901)'
    ]
  },
  {
    id: 'bilateral-y-stent-biliary',
    name: 'Bilateral Y-Stent or Stent-in-Stent Biliary Metallic Reconstruction for Hilar Cholangiocarcinoma',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB021',
    rghsCode: '693 / 51',
    icd10: 'C24.0 (Klatskin Tumor) / K83.1 (Obstruction of Bile Duct)',
    indications: [
      'Bismuth-Corlette Type IV or advanced Type III hilar cholangiocarcinoma with complete isolation of right and left hepatic ductal systems',
      'Requirement to drain both right and left liver lobes (> 50% liver volume) to clear hyperbilirubinemia before systemic chemotherapy',
      'Failed unilateral stent drainage with persistent jaundice or contralateral segmental cholangitis'
    ],
    preOpCriteria: [
      'MRCP demonstrating viable functional parenchyma in both right and left liver lobes',
      'Bilateral ultrasound-guided percutaneous biliary access established (or planned synchronous bilateral puncture)',
      'Antibiotic coverage active and INR < 1.5, Platelets > 50,000/uL'
    ],
    hardware: [
      { category: 'Percutaneous Access', name: 'Dual 7F - 8F Biliary Access Sheaths', spec: 'Placed via right and left transhepatic approaches', standardStore: 'Angio Suite Main Store' },
      { category: 'Guidewires', name: 'Dual 0.035 Amplatz Super Stiff Wires', spec: '260 cm length', standardStore: 'Central IR Store' },
      { category: 'Large-Cell SEMS', name: 'Uncovered Hilar Biliary SEMS with Wide Mesh Center (Niti-S Large Cell D-Type / Taewoong / Zilver)', spec: '8 mm - 10 mm x 80-100 mm (two stents)', standardStore: 'Special Consignment Rack' },
      { category: 'Angioplasty Balloons', name: 'Dual PTA Dilatation Balloons', spec: '6 mm - 8 mm x 40 mm', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Establish dual percutaneous transhepatic biliary access into right anterior/posterior duct and left segment 3 duct.',
      'Manipulate guidewires from both right and left approaches across the malignant confluence stricture into the common bile duct and duodenum.',
      'For stent-in-stent technique: deploy the first uncovered SEMS with wide open central mesh cells from the right hepatic duct across the confluence into the common bile duct/duodenum.',
      'From the left transhepatic access, pass a 5F angled catheter and 0.035 Glidewire through the open diamond mesh of the deployed first stent into its lumen and down to the duodenum.',
      'Dilate the crossed mesh strut with a 6 mm or 8 mm balloon to create a wide portal.',
      'Deploy the second SEMS through the open mesh of the first stent from the left hepatic duct into the common duct, forming a Y-configuration ("stent-in-stent").',
      'For simultaneous side-by-side Y-stenting: deploy both stents simultaneously side-by-side spanning right and left ducts into the common bile duct.',
      'Perform completion bilateral cholangiogram confirming wide geometric patency of both lobes and rapid contrast drainage into the duodenum.',
      'Leave temporary external safety drains in place for 48 hours.'
    ],
    complications: [
      'Inability to cross the mesh of the first stent requiring abandonment of bilateral stenting',
      'Stent fracture or asymmetrical expansion across the rigid tumor epicenter',
      'Post-procedure segmental cholangitis in non-drained isolated segments',
      'Biliary hemoperitoneum or subcapsular hematoma'
    ],
    maayTariffInr: 115000,
    vendorContacts: [
      'Taewoong Medical / Regional Distributor (+91 98296 78901)',
      'Boston Scientific India (+91 98292 67890)'
    ]
  },
  {
    id: 'biliary-balloon-dilation-stricture',
    name: 'Percutaneous Transhepatic Biliary Balloon Dilation for Benign Anastomotic / Post-Cholecystectomy Stricture',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB022',
    rghsCode: '693 / 52',
    icd10: 'K83.1 (Obstruction of Bile Duct) / K91.89 (Postprocedural Complication of Digestive System)',
    indications: [
      'Benign biliary stricture following laparoscopic cholecystectomy (Strasberg / Bismuth classification)',
      'Hepaticojejunostomy / choledochojejunostomy anastomotic stricture post-Whipple, post-choledochal cyst excision, or post-liver transplant',
      'Failed endoscopic retrograde cholangiography (ERCP) due to surgically altered anatomy'
    ],
    preOpCriteria: [
      'MRCP delineating stricture length, caliber, and presence of ductal stones or downstream obstruction',
      'Negative blood cultures; intravenous antibiotic prophylaxis pre-procedure',
      'Normal coagulation profile'
    ],
    hardware: [
      { category: 'Percutaneous Access', name: '21G Chiba Access Set & 7F - 8F Introducer Sheath', spec: '15 cm Chiba, 45 cm Flexor sheath', standardStore: 'Angio Suite Main Store' },
      { category: 'Guidewires', name: '0.035 Stiff Glidewire & 0.035 Amplatz Super Stiff', spec: '180 cm and 260 cm', standardStore: 'Central IR Store' },
      { category: 'Cutting / High-Pressure Balloon', name: 'High-Pressure PTA Dilatation Balloon / Cutting Balloon', spec: '8 mm - 12 mm x 20-40 mm, rated burst pressure >= 20 atm', standardStore: 'Central IR Store' },
      { category: 'Internal-External Catheter', name: 'Large-Bore Biliary Stent / Drainage Catheter (Cook Ring Biliary)', spec: '12F - 14F x 40 cm radiopaque drainage catheter', standardStore: 'PTBD Shelf Central' }
    ],
    techniqueSteps: [
      'Establish ultrasound-guided transhepatic biliary access into right or left hepatic duct.',
      'Pass a 5F angled catheter and 0.035 hydrophilic wire across the benign anastomotic or ductal stricture into the efferent Roux-en-Y jejunal loop.',
      'Exchange for an Amplatz Super Stiff wire; perform baseline cholangiography defining the stricture caliber and waist.',
      'Advance a high-pressure PTA balloon (8-12 mm diameter) across the stricture; inflate slowly with pressure inflator up to 18-24 atm until the balloon waist completely disappears.',
      'Maintain full balloon inflation for 2 to 5 minutes to disrupt the dense fibrous ring.',
      'Perform repeat cholangiography to evaluate luminal gain and rule out extravasation or ductal laceration.',
      'Insert a large-bore (12F to 14F) internal-external biliary catheter across the dilated segment to act as an internal mold/stent for 6 to 12 weeks.',
      'Cap the external port at 48 hours for internal drainage; schedule serial balloon calibrations every 4-6 weeks until durable patency is confirmed.'
    ],
    complications: [
      'Full-thickness ductal rupture or anastomotic dehiscence during high-pressure dilation',
      'Hemobilia from tear in adjacent portal vein or hepatic artery',
      'Severe acute cholangitis / endotoxemia',
      'Recurrence of stricture requiring re-intervention'
    ],
    maayTariffInr: 58000,
    vendorContacts: [
      'Boston Scientific India (+91 98292 67890)',
      'Cook Medical (+91 98292 34567)'
    ]
  },
  {
    id: 'percutaneous-biliary-stone-removal',
    name: 'Percutaneous Transhepatic Removal of Retained Biliary Calculi with Dormia Basket and Balloon Sweep',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB023',
    rghsCode: '693 / 53',
    icd10: 'K80.50 (Calculus of Bile Duct without Cholangitis or Cholecystitis)',
    indications: [
      'Retained or recurrent common bile duct or intrahepatic calculi in patients with surgically altered anatomy (e.g., Roux-en-Y hepaticojejunostomy, Billroth II)',
      'Failed ERCP stone extraction due to large stone burden or duodenal diverticulum',
      'Hepatolithiasis / recurrent pyogenic cholangitis with intrahepatic biliary calculi'
    ],
    preOpCriteria: [
      'Prior mature transhepatic tract (> 8F-10F) established for at least 7-10 days, or new transhepatic puncture planned',
      'Pre-procedure MRCP or CT determining stone size, number, and distribution',
      'Antibiotic prophylaxis active'
    ],
    hardware: [
      { category: 'Vascular / Biliary Sheath', name: '8F - 10F Check-Flo Biliary Introducer Sheath', spec: '25 cm - 35 cm length with hemostatic valve', standardStore: 'Angio Suite Main Store' },
      { category: 'Guidewire', name: '0.035 Stiff Glidewire & Rosen Wire', spec: '180 cm length', standardStore: 'Central IR Store' },
      { category: 'Extraction Basket', name: 'Dormia Biliary Stone Retrieval Basket', spec: '4-wire or 6-wire helical basket, 15 mm - 25 mm basket diameter', standardStore: 'PTBD Shelf Central' },
      { category: 'Occlusion / Fogarty Balloon', name: 'Biliary Stone Extraction / Fogarty Balloon Catheter', spec: '10 mm - 15 mm compliant balloon', standardStore: 'PTBD Shelf Central' },
      { category: 'Drainage Catheter', name: '10F - 12F Temporary Locking Biliary Catheter', spec: 'For post-extraction decompression', standardStore: 'PTBD Shelf Central' }
    ],
    techniqueSteps: [
      'Upsize existing mature transhepatic tract or access biliary system; place an 8F-10F vascular sheath into the bile duct.',
      'Perform cholangiogram to map calculi locations, sizes, and relation to the ampulla or surgical anastomosis.',
      'Pass a 0.035 guidewire and 5F catheter past the stones through the sphincter of Oddi / anastomosis into the bowel.',
      'Advance a Dormia helical stone extraction basket past the stones, open the basket in the common duct, and gently rotate to capture calculi.',
      'Engage stones and push them forward across the sphincter of Oddi / anastomosis into the duodenum or jejunum (push technique).',
      'Alternatively, use an inflated compliant occlusion balloon (Fogarty or biliary sweeping balloon) to sweep smaller calculi and sludge downstream into the bowel lumen.',
      'If stones are impacted or too large to pass intact, perform mechanical crushing with an endobiliary lithotripter basket or fragmentation balloon.',
      'Perform completion cholangiogram demonstrating total stone clearance, brisk contrast emptying into bowel, and absence of residual filling defects.',
      'Place a 10F temporary biliary safety catheter; remove after 48 hours following confirmation of uneventful recovery.'
    ],
    complications: [
      'Stone impaction at the ampulla causing acute pancreatitis',
      'Bile duct perforation or tear from aggressive basket traction',
      'Hemobilia secondary to mucosal abrasion',
      'Post-procedure cholangitis / bacteremia'
    ],
    maayTariffInr: 52000,
    vendorContacts: [
      'Cook Medical (+91 98292 34567)',
      'Boston Scientific (+91 98292 67890)'
    ]
  },
  {
    id: 'percutaneous-cholangioscopy-lithotripsy',
    name: 'Percutaneous Transhepatic Cholangioscopy and Laser / Electrohydraulic Lithotripsy',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB024',
    rghsCode: '693 / 54',
    icd10: 'K80.50 (Choledocholithiasis) / K80.30 (Calculus of Bile Duct with Cholangitis)',
    indications: [
      'Large (> 1.5 - 2 cm) impacted intrahepatic or extrahepatic biliary calculi refractory to conventional basket or balloon extraction',
      'Hepatolithiasis (Oriental cholangiohepatitis) with biliary strictures and sequestered stones',
      'Direct visual inspection and targeted biopsy of indeterminate filling defects in the biliary tree'
    ],
    preOpCriteria: [
      'Mature percutaneous tract dilated to 12F - 16F (typically matured over 2-3 weeks with serial catheter upsizing)',
      'Cross-sectional imaging (CT/MRCP) detailing stone burden and branching anatomy',
      'Intravenous antibiotic prophylaxis'
    ],
    hardware: [
      { category: 'Percutaneous Sheath', name: '12F - 16F Peel-Away or Flexor Biliary Sheath', spec: '20-30 cm length with hemostatic seal', standardStore: 'Angio Suite Main Store' },
      { category: 'Cholangioscope', name: 'Digital Flexible Cholangioscope (SpyGlass Discover / Olympus Choledochoscope)', spec: '3.5F - 10F flexible steerable video cholangioscope', standardStore: 'Endoscopy Suite Shared' },
      { category: 'Lithotripsy System', name: 'Holmium:YAG Laser or Electrohydraulic Lithotripsy (EHL) Unit', spec: 'Laser fiber 365 um - 550 um / EHL probe 1.9F', standardStore: 'Uro-IR Laser Unit' },
      { category: 'Saline Irrigation', name: 'Continuous Pressurized Saline Flush System', spec: 'Warmed normal saline bags with irrigation pump', standardStore: 'Angio Suite Main Store' },
      { category: 'Retrieval Basket', name: 'Zero-Tip / Nitinol Mini-Basket', spec: '1.9F - 3.0F flexible retrieval basket', standardStore: 'PTBD Shelf Central' }
    ],
    techniqueSteps: [
      'Under conscious sedation or general anesthesia, remove existing indwelling biliary catheter over an Amplatz Super Stiff guidewire.',
      'Introduce a 12F-16F access sheath into the mature transhepatic tract.',
      'Insert the digital flexible cholangioscope through the sheath under continuous warmed normal saline irrigation.',
      'Perform direct endoscopic visualization of the biliary epithelium, identifying the impacted calculi or suspicious mucosal stricture.',
      'Pass the Holmium laser fiber (or EHL probe) through the working channel of the cholangioscope and place the tip in direct contact with the stone center under continuous direct visual guidance.',
      'Deliver laser pulses (0.6 - 1.2 J at 10-15 Hz) to systematically fracture the calculus into sub-millimeter fragments.',
      'Flush and sweep stone fragments across the ampulla into the duodenum using balloon or mini-basket.',
      'Perform final direct visual inspection to ensure 100% stone clearance and absence of epithelial damage.',
      'Re-insert a 10F-12F external biliary drainage catheter to maintain tract and decompress biliary system.'
    ],
    complications: [
      'Bile duct thermal injury or perforation from misplaced laser energy',
      'Cholangitis / septic shock from elevated intrabiliary pressure during saline irrigation',
      'Hemobilia from mucosal fragmentation',
      'Tract disruption or peritoneal spill'
    ],
    maayTariffInr: 95000,
    vendorContacts: [
      'Boston Scientific India (+91 98292 67890)',
      'Olympus Medical Systems India (+91 98290 99887)'
    ]
  },
  {
    id: 'percutaneous-endobiliary-biopsy',
    name: 'Percutaneous Transhepatic Endobiliary Biopsy (Forceps and Brushing) for Indeterminate Stricture',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB025',
    rghsCode: '693 / 55',
    icd10: 'K83.1 (Obstruction of Bile Duct) / C24.9 (Biliary Tract Malignancy, Unspecified)',
    indications: [
      'Histological confirmation of indeterminate biliary stricture (suspected cholangiocarcinoma, lymphoma, or extrinsic compression)',
      'Failed ERCP brush cytology or negative prior endoscopic biopsy',
      'Pre-chemotherapy / pre-radiotherapy tissue diagnosis in unresectable perihilar or mid-ductal lesions'
    ],
    preOpCriteria: [
      'PTBD access already in place or performed during same session',
      'Cross-sectional imaging identifying target focal stricture location and extent',
      'Coagulation parameters: INR < 1.5, Platelets > 50,000/uL'
    ],
    hardware: [
      { category: 'Percutaneous Sheath', name: '7F - 8F Biliary Introducer Sheath', spec: '25 cm - 45 cm length with valve', standardStore: 'Angio Suite Main Store' },
      { category: 'Endobiliary Forceps', name: 'Transjugular / Endobiliary Biopsy Forceps (Cordis / Biopsy Forceps / Boston)', spec: '5.5F - 7F x 60-100 cm flexible biopsy forceps with cup jaws', standardStore: 'Central IR Store' },
      { category: 'Cytology Brush', name: 'Endobiliary Cytology Brush Catheter', spec: '8 mm - 10 mm brush length, 0.035 wire guided', standardStore: 'Central IR Store' },
      { category: 'Guidewire', name: '0.035 Stiff Glidewire & Amplatz Wire', spec: '180 cm length', standardStore: 'Central IR Store' },
      { category: 'Drainage Catheter', name: '8.5F - 10.2F Biliary Catheter', spec: 'Replacement catheter post-procedure', standardStore: 'PTBD Shelf Central' }
    ],
    techniqueSteps: [
      'Through existing transhepatic access or fresh PTBD, advance 7F/8F sheath to the proximal margin of the biliary stricture.',
      'Perform baseline digital subtraction cholangiogram to outline the exact stricture margins and length.',
      'Pass the endobiliary cytology brush over a guidewire across the stricture; perform 10-15 vigorous back-and-forth rotational sweeps across the stricture face to collect exfoliated cells; withdraw and smear on pathology slides.',
      'Advance the flexible biopsy forceps through the sheath directly to the suspicious mucosal margin under fluoroscopic guidance.',
      'Open forceps jaws, advance against the stricture shoulder, firmly close jaws to bite tissue, and retract through the sheath.',
      'Obtain 4 to 6 separate tissue core samples from different sectors of the stricture; place immediately in 10% formalin.',
      'Perform post-biopsy cholangiogram to verify ductal integrity and exclude contrast extravasation.',
      'Re-insert an 8.5F/10F internal-external drainage catheter across the stricture.'
    ],
    complications: [
      'Bile duct perforation during forceps bite',
      'Hemobilia from tumor vessel injury',
      'Post-procedural cholangitis / bacteremia',
      'Inconclusive histological sample requiring repeat procedure'
    ],
    maayTariffInr: 38000,
    vendorContacts: [
      'Cook Medical (+91 98292 34567)',
      'Boston Scientific (+91 98292 67890)'
    ]
  },
  {
    id: 'endobiliary-rfa-malignancy',
    name: 'Endobiliary Radiofrequency Ablation (RFA) for Malignant Biliary Obstruction',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB026',
    rghsCode: '693 / 56',
    icd10: 'C24.0 (Extrahepatic Bile Duct Carcinoma) / K83.1 (Malignant Biliary Obstruction)',
    indications: [
      'Primary palliative cytoreduction in unresectable cholangiocarcinoma prior to metallic stenting to prolong stent patency',
      'Intragraft / intrastent tumor ingrowth in occluded biliary metal stents',
      'Locally advanced hilar or extrahepatic bile duct adenocarcinoma'
    ],
    preOpCriteria: [
      'Cross-sectional imaging and cholangiography defining stricture length, tumor depth, and distance to adjacent major vascular structures (hepatic artery / portal vein > 3-5 mm safety margin)',
      'Absence of metallic stent in the immediate ablation zone (unless using dedicated stent-clearing settings)',
      'Coagulation and infection parameters optimized'
    ],
    hardware: [
      { category: 'Percutaneous Access', name: '8F Biliary Sheath', spec: '25-45 cm length', standardStore: 'Angio Suite Main Store' },
      { category: 'RFA Catheter', name: 'Bipolar Endobiliary RFA Catheter (Habib EndoHPB / Boston Scientific)', spec: '8F bipolar catheter, 18-22 mm electrode length, 0.035 wire lumen', standardStore: 'Special Consignment Rack' },
      { category: 'RF Generator', name: 'Dedicated Bipolar Radiofrequency Generator', spec: '13.56 MHz generator set to 7-10 W output for 60-90 seconds', standardStore: 'Cath Lab Bio-Station' },
      { category: 'Guidewire', name: '0.035 Amplatz Super Stiff Guidewire', spec: '260 cm length', standardStore: 'Central IR Store' },
      { category: 'Stent System', name: 'Biliary Bare / Covered Metal Stent', spec: '8-10 mm x 60-80 mm', standardStore: 'Special Consignment Rack' }
    ],
    techniqueSteps: [
      'Access the biliary tree transhepatically and advance an 8F sheath over an Amplatz wire across the malignant stricture.',
      'Perform baseline cholangiogram measuring stricture length and markers.',
      'Advance the bipolar Habib EndoHPB catheter over the guidewire and position the bipolar electrodes precisely across the malignant stricture.',
      'Connect catheter to RF generator; apply RF energy at 7-10 Watts for 60-90 seconds to induce localized thermal coagulative necrosis of the endobiliary tumor.',
      'For strictures longer than 2 cm, reposition the catheter with a 5 mm overlap and deliver a second ablation cycle.',
      'Flush and aspirate necrotic debris from the ductal lumen.',
      'Deploy an uncovered or covered biliary metallic stent across the ablated segment to maintain wide-open internal drainage.',
      'Verify excellent lumen restoration on completion cholangiogram and cap or place temporary external drain.'
    ],
    complications: [
      'Thermal perforation of bile duct into peritoneal cavity or adjacent portal vein',
      'Hepatic artery pseudoaneurysm / severe hemobilia secondary to thermal necrosis',
      'Bile duct rupture during subsequent stent expansion',
      'Post-ablation cholangitis'
    ],
    maayTariffInr: 85000,
    vendorContacts: [
      'Boston Scientific India (+91 98292 67890)',
      'EMED / Regional Distributor (+91 98297 12345)'
    ]
  },
  {
    id: 'ptc-cholecystostomy',
    name: 'Percutaneous Transhepatic Cholecystostomy (PTC) for Acute Cholecystitis in High-Risk Patients',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB027',
    rghsCode: '693 / 57',
    icd10: 'K81.0 (Acute Cholecystitis) / K81.2 (Acute Cholecystitis with Acalculous Cholecystitis)',
    indications: [
      'Acute calculous or acalculous cholecystitis in critically ill, septic, or surgically unfit patients (APACHE II > 15, severe cardiopulmonary disease)',
      'Sepsis of unknown origin in ventilated ICU patients with thickened gallbladder wall and pericholecystic fluid',
      'Bridging decompression prior to interval elective cholecystectomy'
    ],
    preOpCriteria: [
      'Abdominal ultrasound confirming distended gallbladder with gallstones, sludge, wall thickening (> 4 mm), or pericholecystic fluid',
      'Identification of a safe transhepatic parenchymal access route through the bare area of the liver bed (to prevent bile leak into peritoneum)',
      'Platelet count > 40,000/uL, INR < 1.6 (or corrected with blood products)'
    ],
    hardware: [
      { category: 'Access Needle', name: '18G / 21G Chiba Access Needle or Trocar Set', spec: '15 cm echogenic needle', standardStore: 'Angio Suite Main Store' },
      { category: 'Guidewire', name: '0.035 J-Tip Heavy Duty Guidewire', spec: '150 cm length with fixed core', standardStore: 'Central IR Store' },
      { category: 'Drainage Catheter', name: 'Pigtail Cholecystostomy Drainage Catheter (Cook / Boston Scientific)', spec: '8.5F - 10F locking pigtail catheter with Hydrophilic coating', standardStore: 'PTBD Shelf Central' },
      { category: 'Drainage Bag', name: 'Gravity Bile Collection Bag', spec: '500 mL sterile bag with anti-reflux valve', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Patient placed in supine position; right subcostal/intercostal area prepped under ultrasound guidance.',
      'Identify the gallbladder and plan a transhepatic trajectory traversing at least 1-2 cm of normal liver parenchyma before entering the gallbladder lumen.',
      'Under real-time ultrasound guidance, advance an 18G needle (or 21G micropuncture system) through the liver bed into the mid-body of the gallbladder.',
      'Aspirate 10-20 mL of purulent or bilious fluid for Gram stain and microbiological culture.',
      'Inject a small volume of non-ionic contrast under fluoroscopy to confirm intraluminal position and delineate cystic duct anatomy.',
      'Advance an 0.035 J-tip guidewire into the gallbladder lumen, allowing it to coil 2-3 times.',
      'Dilate the transhepatic tract over the wire using 8F and 10F dilators.',
      'Advance an 8.5F or 10F locking pigtail catheter into the gallbladder; lock the suture string tightly.',
      'Connect catheter to external gravity drainage bag; secure firmly to the skin.'
    ],
    complications: [
      'Biliary peritonitis from bile leakage along transperitoneal route (avoided by strict transhepatic route)',
      'Intraperitoneal hemorrhage or subcapsular liver hematoma',
      'Catheter dislodgement or accidental premature pull-out before tract maturation (tract requires 3-4 weeks)',
      'Pneumothorax (if high intercostal approach used)'
    ],
    maayTariffInr: 25000,
    vendorContacts: [
      'Cook Medical (+91 98292 34567)',
      'Merit Medical India (+91 98293 88990)'
    ]
  },
  {
    id: 'transcholecystic-biliary-stenting',
    name: 'Transcholecystic Biliary Access and Cystic Duct Stenting',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB028',
    rghsCode: '693 / 58',
    icd10: 'K83.1 (Obstruction of Bile Duct) / K81.0 (Acute Cholecystitis)',
    indications: [
      'Biliary obstruction or common bile duct stone in patients with prior cholecystostomy where transhepatic ductal access is difficult due to non-dilated intrahepatic ducts',
      'Palliation of malignant distal biliary obstruction via cholecystostomy tract when transhepatic or ERCP routes are blocked',
      'Cystic duct stenting for persistent biliary fistula or malignant cystic duct obstruction'
    ],
    preOpCriteria: [
      'Mature percutaneous cholecystostomy tract present (> 2 weeks duration) or established transhepatic cholecystostomy',
      'Tube cholecystogram demonstrating patent or negotiable cystic duct joining the common bile duct',
      'Coagulation parameters within safe limits'
    ],
    hardware: [
      { category: 'Percutaneous Sheath', name: '7F - 8F Vascular / Biliary Introducer Sheath', spec: '25-45 cm length', standardStore: 'Angio Suite Main Store' },
      { category: 'Guidewires', name: '0.035 Hydrophilic Angled Glidewire & 0.018 Steerable Microguidewire', spec: '260 cm length', standardStore: 'Central IR Store' },
      { category: 'Support Catheter', name: '4F - 5F Kumpe / Cobra Catheter', spec: '65 - 100 cm', standardStore: 'Angio Suite Main Store' },
      { category: 'Angioplasty Balloon', name: 'PTA Dilatation Balloon', spec: '4 mm - 6 mm x 40 mm', standardStore: 'Central IR Store' },
      { category: 'Stent System', name: 'Self-Expanding Covered / Uncovered Biliary Stent or Plastic Double Pigtail', spec: '7F - 8.5F plastic stent or 8-10 mm SEMS', standardStore: 'Special Consignment Rack' }
    ],
    techniqueSteps: [
      'Over a guidewire, exchange the indwelling cholecystostomy tube for a 7F/8F introducer sheath.',
      'Perform tube cholecystogram to visualize the spiral valves of Heister and cystic duct course.',
      'Using a 4F/5F angled catheter and 0.035 hydrophilic wire (or 0.018 steerable wire), carefully manipulate through the tortuous Heister valves into the common bile duct.',
      'Advance the wire across the ampulla into the duodenum; exchange for an Amplatz Super Stiff wire.',
      'Perform balloon dilation of the tight cystic duct junction if required using a 4-6 mm balloon.',
      'Deploy an uncovered or covered biliary stent (or advance an 8.5F plastic internal drainage stent) spanning from the gallbladder/cystic duct into the duodenum.',
      'Confirm uninhibited biliary flow on completion fluoroscopy.',
      'Leave an external safety cholecystostomy tube or cap the tract once internal patency is verified.'
    ],
    complications: [
      'Cystic duct rupture or perforation from aggressive wire manipulation',
      'Stent migration into duodenum or cystic duct slip',
      'Recurrent cholecystitis from cystic duct occlusion',
      'Bile leak into peritoneum'
    ],
    maayTariffInr: 62000,
    vendorContacts: [
      'Cook Medical (+91 98292 34567)',
      'Boston Scientific (+91 98292 67890)'
    ]
  },
  {
    id: 'ptbd-covered-stent-bile-leak',
    name: 'Percutaneous Transhepatic Biliary Covered Stent Deployment for Postoperative Bile Duct Injury / Leak',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB029',
    rghsCode: '693 / 59',
    icd10: 'K91.89 (Postprocedural Complication of Digestive System) / K83.8 (Other Specified Diseases of Biliary Tract)',
    indications: [
      'High-output postoperative bile duct injury or partial transection (Strasberg Class D/E) following laparoscopic cholecystectomy or liver surgery',
      'Persistent large biliary leak refractory to conventional transhepatic pigtail drainage or endoscopic sphincterotomy',
      'Anastomotic biliary dehiscence post-liver transplantation'
    ],
    preOpCriteria: [
      'Abdominal CT and transhepatic cholangiography demonstrating the exact site and caliber of bile duct wall defect/extravasation',
      'Exclusion of complete surgical duct transection with complete loss of ductal continuity (requires surgical Roux-en-Y)',
      'Broad-spectrum antibiotics and percutaneous drainage of any co-existing intra-abdominal biloma'
    ],
    hardware: [
      { category: 'Percutaneous Access', name: '8F - 9F Transhepatic Introducer Sheath', spec: '35 cm - 45 cm Flexor sheath', standardStore: 'Angio Suite Main Store' },
      { category: 'Guidewires', name: '0.035 Stiff Glidewire & 0.035 Amplatz Super Stiff', spec: '260 cm length', standardStore: 'Central IR Store' },
      { category: 'Covered Stent Graft', name: 'ePTFE-Covered Biliary / Vascular Stent Graft (Gore Viabahn / Fluency / BeGraft)', spec: '8 mm - 10 mm diameter x 40 mm - 80 mm length', standardStore: 'Special Consignment Rack' },
      { category: 'Angioplasty Balloon', name: 'PTA Balloon Dilator', spec: '8 mm x 40 mm', standardStore: 'Central IR Store' },
      { category: 'Safety Catheter', name: '8.5F External Drainage Safety Catheter', spec: 'Locking pigtail', standardStore: 'PTBD Shelf Central' }
    ],
    techniqueSteps: [
      'Perform ultrasound-guided transhepatic access and manipulate a guidewire across the disrupted ductal segment into the duodenum.',
      'Place an 8F/9F vascular sheath and perform baseline digital subtraction cholangiography demonstrating the leak site into the subhepatic space.',
      'Exchange for an Amplatz Super Stiff guidewire.',
      'Advance an ePTFE-covered stent graft (8-10 mm diameter) and center it directly across the ductal laceration, ensuring at least 1-1.5 cm of healthy covered seal on either side of the defect.',
      'Deploy the covered stent graft under real-time fluoroscopic visualization.',
      'Perform gentle post-dilation with an 8 mm balloon to ensure complete apposition of the stent graft to the bile duct wall.',
      'Perform repeat cholangiogram demonstrating complete exclusion and sealing of the bile leak with immediate resumption of forward flow into the bowel.',
      'Place a temporary 8.5F safety drain proximal to the stent; remove after 48-72 hours following negative leak check.'
    ],
    complications: [
      'Stent graft migration or shortening',
      'Inadvertent occlusion of adjacent major intrahepatic sectoral bile ducts by the covered membrane',
      'Late sludge formation or bacterial biofilm occlusion inside covered stent',
      'Subhepatic sepsis if biloma is not adequately drained simultaneously'
    ],
    maayTariffInr: 98000,
    vendorContacts: [
      'W.L. Gore & Associates (+91 98290 87654)',
      'Becton Dickinson (BD) India (+91 98293 45678)'
    ]
  },
  {
    id: 'percutaneous-biloma-abscess-drainage',
    name: 'Percutaneous Drainage of Postoperative Biloma / Subhepatic Abscess',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB030',
    rghsCode: '693 / 60',
    icd10: 'K83.8 (Other Specified Diseases of Biliary Tract) / K65.0 (Generalized Peritonitis)',
    indications: [
      'Symptomatic postoperative subhepatic / Morrison pouch biloma or abscess collection following cholecystectomy or liver resection',
      'Infected intra-abdominal fluid collection with persistent fevers, leukocytosis, and abdominal pain',
      'Decompression of large fluid collections causing mass effect on stomach or IVC'
    ],
    preOpCriteria: [
      'Contrast-enhanced abdominal CT or ultrasound detailing collection size, location, septations, and relation to adjacent bowel loops',
      'Planning safe percutaneous window avoiding colon, stomach, gallbladder bed, and pleura',
      'Coagulation status: INR < 1.8, Platelets > 40,000/uL'
    ],
    hardware: [
      { category: 'Drainage Kit', name: '10F - 14F Locking Pigtail Drainage Catheter Kit (Cook Dawson-Mueller / Boston Scientific)', spec: 'Trocar / Seldinger access with 0.035 wire and dilators', standardStore: 'Central IR Store' },
      { category: 'Puncture Needle', name: '18G Echogenic Introducer Needle', spec: '15 cm length', standardStore: 'Angio Suite Main Store' },
      { category: 'Guidewire', name: '0.035 J-Tip Heavy Duty Starter Wire', spec: '150 cm length', standardStore: 'Central IR Store' },
      { category: 'Drainage System', name: 'Closed Gravity / Negative Pressure Drainage Bag', spec: 'Sterile collection system with three-way stopcock', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Patient positioned supine or slightly tilted; localize the collection under ultrasound.',
      'Under local anesthesia and ultrasound guidance, advance an 18G needle directly into the epicenter of the biloma/abscess.',
      'Aspirate fluid; send samples for total bilirubin, amylase, Gram stain, culture, and cytology.',
      'Inject 5-10 mL of dilute contrast under fluoroscopy to confirm intraluminal position, assess cavity size, and check for direct communication with the biliary tree.',
      'Advance 0.035 stiff guidewire, coiling several loops within the cavity.',
      'Dilate the subcutaneous and fascial tract with 8F, 10F, and 12F dilators.',
      'Advance a 10F or 12F locking pigtail drainage catheter over the wire; lock the string to form the pigtail.',
      'Aspirate cavity to near-dryness; connect to closed gravity drainage system and suture firmly to skin.'
    ],
    complications: [
      'Inadvertent puncture of colon, duodenum, or gallbladder',
      'Peritoneal spill causing chemical peritonitis or acute septic shock',
      'Hemorrhage from intercostal or epigastric vessels',
      'Persistent high-output biliary-cutaneous fistula'
    ],
    maayTariffInr: 22000,
    vendorContacts: [
      'Cook Medical (+91 98292 34567)',
      'Boston Scientific (+91 98292 67890)'
    ]
  },
  {
    id: 'portal-vein-recanalization-thrombolysis',
    name: 'Percutaneous Transhepatic Portal Vein Recanalization & Thrombolysis in Acute PVT',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB031',
    rghsCode: '693 / 61',
    icd10: 'I81 (Portal Vein Thrombosis) / K55.0 (Acute Vascular Disorders of Intestine)',
    indications: [
      'Acute portal vein thrombosis with progression toward mesenteric ischemia or bowel infarction despite systemic anticoagulation',
      'Acute complete portomesenteric venous thrombosis post-splenectomy, post-liver transplant, or in prothrombotic disorders',
      'High-risk acute PVT with severe abdominal pain and signs of worsening portal hypertension'
    ],
    preOpCriteria: [
      'Contrast CT of abdomen demonstrating occlusive acute thrombus in main portal vein and superior mesenteric vein (SMV)',
      'Exclusion of transmural bowel necrosis / perforation (which mandates emergency laparotomy)',
      'Coagulation and baseline fibrinogen monitoring (> 150 mg/dL required for thrombolysis)'
    ],
    hardware: [
      { category: 'Percutaneous Access', name: '21G Micropuncture Set & 6F - 8F Transhepatic Sheath', spec: '15 cm Chiba, 45 cm Flexor sheath', standardStore: 'Angio Suite Main Store' },
      { category: 'Guidewires', name: '0.035 Stiff Glidewire & 0.035 Amplatz Super Stiff', spec: '260 cm length', standardStore: 'Central IR Store' },
      { category: 'Thrombolysis Catheter', name: 'Fountain / Cragg-McNamara Multi-Sidehole Infusion Catheter', spec: '4F - 5F x 100 cm, 10-20 cm infusion segment', standardStore: 'Central IR Store' },
      { category: 'Thrombectomy Device', name: 'Mechanical Aspiration / Thrombectomy System (Indigo / AngioJet / Aspirex)', spec: '6F - 8F dedicated mechanical catheter', standardStore: 'Special Consignment Rack' },
      { category: 'Thrombolytic Agent', name: 'Recombinant Tissue Plasminogen Activator (r-tPA / Actilyse)', spec: '50 mg vial', standardStore: 'SMS Pharmacy DDC-14' },
      { category: 'Tract Closure', name: 'Gelfoam Torpedoes and Coils', spec: 'Tract embolization kit', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Under ultrasound guidance, puncture an intrahepatic portal branch and introduce a 6F/8F sheath.',
      'Perform portogram confirming occlusive thrombus in the main portal vein and SMV.',
      'Cross the fresh thrombus with a 5F angled catheter and 0.035 hydrophilic wire into the peripheral SMV branches.',
      'Perform mechanical aspiration thrombectomy using an Indigo 8F or AngioJet catheter to debulk fresh thrombus burden.',
      'If residual clot persists, place a Cragg-McNamara multi-sidehole infusion catheter spanning the portomesenteric venous segment.',
      'Initiate local catheter-directed thrombolysis with r-tPA (0.5 - 1.0 mg/hr) and low-dose unfractionated heparin (300-500 IU/hr) in the ICU.',
      'Monitor serum fibrinogen every 6 hours (maintain > 100-150 mg/dL).',
      'Return to angio suite at 12-24 hours for repeat portogram; perform balloon angioplasty or stenting if an underlying anatomical stenosis is uncovered.',
      'Embolize the transhepatic parenchymal tract upon catheter removal.'
    ],
    complications: [
      'Intra-abdominal hemorrhage or retroperitoneal hematoma secondary to fibrinolysis',
      'Transhepatic parenchymal bleed',
      'Distal embolization of thrombus into intrahepatic or mesenteric branches',
      'Systemic hemorrhagic stroke (rare)'
    ],
    maayTariffInr: 110000,
    vendorContacts: [
      'Penumbra Medical India (+91 98294 11223)',
      'Boehringer Ingelheim India (+91 98290 66778)'
    ]
  },
  {
    id: 'tips-stent-graft-reduction',
    name: 'TIPS Stent Graft Reduction (Constrained Stent) for Refractory Post-TIPS Encephalopathy',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB032',
    rghsCode: '693 / 62',
    icd10: 'K72.90 (Hepatic Encephalopathy) / T82.858A (Complication of Vascular Device)',
    indications: [
      'Refractory, debilitating overt hepatic encephalopathy (West Haven Grade III-IV) post-TIPS creation failing maximal medical therapy',
      'High-output heart failure / acute right ventricular volume overload post-TIPS',
      'Liver failure induced by excessive shunt diameter / profound portosystemic steal'
    ],
    preOpCriteria: [
      'Neurological confirmation of severe post-TIPS encephalopathy resistant to lactulose, rifaximin, and L-ornithine L-aspartate',
      'Direct Doppler ultrasound and cross-sectional imaging documenting widely patent TIPS shunt (> 8-10 mm diameter)',
      'Baseline echocardiography evaluating cardiac output and pulmonary pressures'
    ],
    hardware: [
      { category: 'Vascular Access', name: '10F Vascular Introducer Sheath', spec: '40 cm Check-Flo sheath', standardStore: 'Angio Suite Main Store' },
      { category: 'Constrained Stent System', name: 'Balloon-Expandable Stent Graft (Gore VBX / Advanta V12 / Palmaz)', spec: '8 mm - 10 mm diameter stent mounted on smaller balloon (5-6 mm) with waist, or dedicated reducing stent', standardStore: 'Special Consignment Rack' },
      { category: 'Guidewires', name: '0.035 Amplatz Super Stiff Guidewire', spec: '260 cm length', standardStore: 'Central IR Store' },
      { category: 'Diagnostic Catheter', name: '5F Kumpe / Cobra Catheter', spec: '100 cm length', standardStore: 'Angio Suite Main Store' },
      { category: 'Manometry System', name: 'Dual Hemodynamic Transducer Set', spec: 'Real-time PSG measurement kit', standardStore: 'Cath Lab Bio-Station' }
    ],
    techniqueSteps: [
      'Cannulate the right internal jugular vein and advance a 10F sheath into the TIPS stent.',
      'Pass a 5F catheter and 0.035 Amplatz wire through the TIPS into the main portal vein; measure baseline PSG and right atrial pressure.',
      'Perform baseline portogram to confirm wide shunt patency and evaluate hepatopetal flow to intrahepatic branches.',
      'Prepare a reducing stent-graft construct: deploy a balloon-expandable stent graft (or parallel stent-plug technique) within the mid-portion of the Viatorr shunt.',
      'Constrain the waist of the reducing stent using a 5 mm or 6 mm balloon to systematically narrow the effective shunt caliber.',
      'Re-measure the PSG; ensure the gradient rises to 12-15 mmHg (restoring physiological hepatic perfusion while preventing catastrophic variceal re-bleeding).',
      'Perform completion portogram showing diminished shunt velocity, increased intrahepatic portal branch perfusion, and absence of acute variceal back-flow.',
      'Remove sheath and compress RIJV access site.'
    ],
    complications: [
      'Complete acute shunt thrombosis with recurrent variceal hemorrhage or tense ascites',
      'Migration of the reducing stent into the portal vein or IVC',
      'Inadequate encephalopathy improvement if shunt reduction is insufficient',
      'Neck puncture hematoma'
    ],
    maayTariffInr: 98000,
    vendorContacts: [
      'W.L. Gore & Associates (+91 98290 87654)',
      'Getinge / Atrium Medical (+91 98295 44332)'
    ]
  },
  {
    id: 'percutaneous-coil-biliovenous-fistula',
    name: 'Percutaneous Transhepatic Coil Embolization of Bilio-Venous / Bilio-Arterial Fistula Causing Hemobilia',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB033',
    rghsCode: '693 / 63',
    icd10: 'K83.8 (Other Specified Diseases of Biliary Tract - Hemobilia) / T81.0 (Hemorrhage Complicating Procedure)',
    indications: [
      'Iatrogenic or traumatic hemobilia with bleeding into PTBD drainage bag or gastrointestinal tract following biliary intervention or liver biopsy',
      'Documented bilio-venous (biliary-portal or biliary-hepatic vein) fistula or pseudoaneurysm',
      'Melena, anemia, and obstructive jaundice (Quincke triad of hemobilia)'
    ],
    preOpCriteria: [
      'Emergent multiphasic CT angiography of abdomen / transcatheter cholangiogram localizing the fistula or pseudoaneurysm',
      'Resuscitation with IV fluids, PRBC transfusion if hemodynamically unstable',
      'Coagulation parameters assessed'
    ],
    hardware: [
      { category: 'Access Sheath', name: '6F - 7F Vascular Introducer Sheath', spec: '11-25 cm length', standardStore: 'Angio Suite Main Store' },
      { category: 'Diagnostic Catheter', name: '5F Cobra / Kumpe Catheter', spec: '65 - 100 cm', standardStore: 'Angio Suite Main Store' },
      { category: 'Microcatheter', name: '2.0F - 2.4F Detachable-Coil Compatible Microcatheter', spec: '130 - 150 cm length', standardStore: 'Central IR Store' },
      { category: 'Microcoils', name: '0.014 - 0.018 Controlled-Detachment Fibered Microcoils (Concerto / Target / IDC)', spec: 'Sizes 2 mm to 8 mm', standardStore: 'Coil Locker A' },
      { category: 'Liquid Embolic', name: 'n-BCA Glue / Onyx (if high-flow fistula)', spec: '1 mL vial with DMSO compatible set', standardStore: 'Special Consignment Rack' },
      { category: 'Drainage Catheter', name: 'Replacement 8.5F - 10F Biliary Drainage Catheter', spec: 'Multi-sidehole locking pigtail', standardStore: 'PTBD Shelf Central' }
    ],
    techniqueSteps: [
      'Through existing PTBD access or direct arterial/venous cannulation, perform contrast injection during continuous fluoroscopy to pinpoint the exact vascular-biliary fistula site.',
      'Superselect the feeding hepatic arterial or portal venous branch directly supplying the fistula using a 2.0F microcatheter and 0.014 microguidewire.',
      'Position the microcatheter immediately adjacent to the fistula neck or within the associated pseudoaneurysm.',
      'Deploy controlled-detachment fibered platinum microcoils using the "front-door and back-door" isolation technique (sandwich embolization) to prevent retrograde collateral filling.',
      'If high-flow arteriovenous/biliary shunting persists, slowly infuse 1:2 n-BCA/Lipiodol mixture to solidify the fistula tract.',
      'Perform completion angiography and tube cholangiography confirming total disappearance of the fistula and complete cessation of hemobilia.',
      'Flush and replace the biliary drainage catheter to prevent clot obstruction of the biliary tree.'
    ],
    complications: [
      'Hepatic parenchymal ischemia or focal infarction from non-target coil placement',
      'Intrahepatic biliary stricture formation secondary to arterial devascularization',
      'Recurrent hemobilia',
      'Clot retention in common duct causing obstructive cholangitis'
    ],
    maayTariffInr: 72000,
    vendorContacts: [
      'Medtronic Neurovascular / Peripheral (+91 98294 56789)',
      'Cook Medical (+91 98292 34567)'
    ]
  },
  {
    id: 'selective-hepatic-artery-embolization-hemobilia',
    name: 'Selective Hepatic Artery Embolization for Post-Liver Biopsy / Trauma Hemobilia',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB034',
    rghsCode: '693 / 64',
    icd10: 'K83.8 (Hemobilia) / S36.115A (Laceration of Liver) / T81.0 (Postprocedural Hemorrhage)',
    indications: [
      'Active arterial hemobilia or hepatic artery pseudoaneurysm following percutaneous liver biopsy, PTBD, or blunt/penetrating liver trauma',
      'Hemodynamic instability or massive upper GI bleeding secondary to confirmed hepatic arterial injury',
      'Failed conservative management with ongoing transfusion requirements'
    ],
    preOpCriteria: [
      'Urgent contrast-enhanced CT angiography demonstrating hepatic artery pseudoaneurysm or active arterial contrast extravasation into biliary tree',
      'Adequate portal vein patency confirmed (critical: hepatic arterial embolization requires patent portal vein to prevent massive liver infarction)',
      'Hemodynamic resuscitation underway'
    ],
    hardware: [
      { category: 'Vascular Access', name: '5F Radiofocus Introducer Sheath', spec: '11 cm length', standardStore: 'Angio Suite Main Store' },
      { category: 'Diagnostic Catheter', name: '5F Yashiro / Cobra C2 Catheter', spec: '65 - 100 cm', standardStore: 'Angio Suite Main Store' },
      { category: 'Microcatheter', name: '2.0F - 2.7F Microcatheter (Progreat / Renegade)', spec: '130 cm length', standardStore: 'Central IR Store' },
      { category: 'Microguidewire', name: '0.014 Steerable Hydrophilic Microguidewire (Transend / Fathom)', spec: '200 cm length', standardStore: 'Central IR Store' },
      { category: 'Embolic Coils', name: '0.014 - 0.018 Detachable & Pushable Microcoils', spec: 'Diameters 2 mm to 6 mm, fibered platinum', standardStore: 'Coil Locker A' },
      { category: 'Liquid Embolic', name: 'Gelfoam Slurry / n-BCA Glue (optional)', spec: 'For auxiliary capillary bed embolization', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Access right common femoral artery under ultrasound guidance; place 5F sheath.',
      'Perform selective celiac and proper hepatic arteriogram using 5F Yashiro catheter to identify the bleeding branch or pseudoaneurysm.',
      'Confirm robust portal vein hepatopetal flow on venous phase of arteriogram.',
      'Advance the microcatheter coaxially into the bleeding segmental or subsegmental hepatic artery branch.',
      'Navigate as close to the pseudoaneurysm neck or arterial injury as possible.',
      'Perform isolation embolization by deploying microcoils distally to the lesion ("back-door"), across the lesion neck, and proximally ("front-door") to prevent retrograde collateral filling via intrahepatic arterial arcades.',
      'Perform completion celiac and proper hepatic angiography confirming total cessation of extravasation, complete exclusion of the pseudoaneurysm, and preservation of adjacent healthy hepatic arterial branches.',
      'Remove femoral sheath and achieve hemostasis with manual pressure or vascular closure device.'
    ],
    complications: [
      'Hepatic infarction or ischemic liver necrosis (minimized by superselective catheterization and patent portal vein)',
      'Ischemic biliary stricture or biloma formation',
      'Non-target embolization to gastroduodenal artery or gallbladder',
      'Femoral puncture pseudoaneurysm / hematoma'
    ],
    maayTariffInr: 68000,
    vendorContacts: [
      'Terumo India Medical (+91 98291 55678)',
      'Medtronic Vascular (+91 98294 56789)'
    ]
  },
  {
    id: 'trans-splenic-portal-access-salvage',
    name: 'Trans-Splenic Portal Venous Access and Portography for Complex Portal Vein Occlusion Salvage',
    category: 'Hepatobiliary & Portal Hypertension',
    code: '2849-HPB035',
    rghsCode: '693 / 65',
    icd10: 'I81 (Portal Vein Thrombosis) / K76.6 (Portal Hypertension)',
    indications: [
      'Salvage recanalization of chronic main portal vein or mesenteric vein occlusion when conventional transhepatic or transjugular routes have failed',
      'Mapping of portomesenteric venous anatomy prior to complex shunt surgery or Rex shunt in pediatric/adult EHPVO',
      'Trans-splenic retrograde embolization of gastric varices when gastrorenal shunt is absent'
    ],
    preOpCriteria: [
      'High-resolution contrast CT or MRI confirming adequate spleen size (> 8-10 cm) and patent intrasplenic/splenic vein branches',
      'Safe percutaneous window along left 9th-11th intercostal space with clear splenic parenchyma (no intervening colon, stomach, or pleural recess)',
      'Platelet count > 50,000/uL, INR < 1.6'
    ],
    hardware: [
      { category: 'Access Needle', name: '21G Chiba Needle & 0.018 Micropuncture Access Kit', spec: '15 cm Chiba, 4F/5F coaxial dilator set', standardStore: 'Angio Suite Main Store' },
      { category: 'Guidewires', name: '0.035 Stiff Glidewire & 0.035 Amplatz Super Stiff', spec: '180 cm and 260 cm length', standardStore: 'Central IR Store' },
      { category: 'Vascular Sheath', name: '5F - 6F Flexible Vascular Introducer Sheath', spec: '25 cm - 35 cm length', standardStore: 'Angio Suite Main Store' },
      { category: 'Diagnostic Catheter', name: '5F Kumpe / Cobra Catheter', spec: '100 cm length', standardStore: 'Central IR Store' },
      { category: 'Tract Closure System', name: 'Amplatzer Vascular Plug 4 / Coils & Gelfoam Matrix', spec: 'Dedicated trans-splenic tract closure kit', standardStore: 'Special Consignment Rack' }
    ],
    techniqueSteps: [
      'Patient placed in supine or right lateral decubitus position; prep left lateral chest wall and flank.',
      'Under real-time ultrasound and fluoroscopy, identify an intrasplenic venous branch traversing at least 2-3 cm of normal splenic parenchyma.',
      'Puncture the intrasplenic vein branch using a 21G Chiba needle; confirm venous blood aspiration.',
      'Advance 0.018 guidewire into the splenic vein trunk; exchange for a 4F/5F micropuncture sheath.',
      'Perform detailed digital subtraction splenoportography to delineate splenic vein patency, confluence with SMV, and portal cavernoma pathways.',
      'Advance a 5F Kumpe catheter and 0.035 stiff Glidewire across the splenic vein into the portal bifurcation or mesenteric collaterals for intervention (angioplasty, stenting, or variceal embolization).',
      'Following completion of procedure, withdraw catheter to the splenic capsule.',
      'Under continuous fluoroscopy, meticulously embolize the trans-splenic puncture tract using 0.035 fibered coils and thick Gelfoam slurry or an Amplatzer Vascular Plug 4 to achieve absolute hemostasis.',
      'Verify complete cessation of tract bleeding with ultrasound before terminating procedure.'
    ],
    complications: [
      'Catastrophic intraperitoneal hemorrhage / hemoperitoneum from the splenic puncture tract (5-10%)',
      'Splenic laceration or subcapsular splenic hematoma requiring emergent embolization or splenectomy',
      'Pneumothorax / left-sided hemothorax from intercostal pleura transgression',
      'Splenic vein thrombosis'
    ],
    maayTariffInr: 90000,
    vendorContacts: [
      'Cook Medical (+91 98292 34567)',
      'Abbott Vascular India (+91 98291 22334)'
    ]
  }
];