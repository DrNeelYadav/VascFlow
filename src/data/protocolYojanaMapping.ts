import { ProtocolYojanaRequirement } from '../types/clinical';

export const PROTOCOL_YOJANA_MAPPING: Record<string, ProtocolYojanaRequirement> = {
  bcs: {
    primaryScheme: 'MAAY',
    packageCode: '2849-IN089A',
    secondaryPackageCode: 'RGHS-VAS-108',
    icd10Code: 'I82.0 / K76.6',
    packageName: 'Direct / Transjugular Intrahepatic Portosystemic Shunt (DIPS / TIPS)',
    tariffAmountInr: 125000,
    implantReimbursementCeilingInr: 95000,
    approvedImplants: [
      { code: 'IMP 108', name: 'Gore Viatorr ePTFE-Covered TIPS Stent-Graft (8-10mm x 80mm)', price: 85000 },
      { code: 'IMP 109', name: 'Rosch-Uchida / Colapinto Transjugular Access Set', price: 18000 },
      { code: 'IMP 110', name: 'High-Pressure Atlas / Conquest Balloon Dilator', price: 14000 }
    ],
    mandatoryPreAuthDocuments: [
      'Jan Aadhaar Card / RGHS E-Health Card verification',
      'Triphasic CECT or Dynamic Contrast Liver MRI documenting hepatic vein occlusion and caudate lobe hypertrophy',
      'Pre-procedure Portosystemic Pressure Gradient (PPG) measurement protocol (> 12 mmHg)',
      'Informed high-risk consent for transjugular portosystemic shunt creation',
      'Pre-auth token with approved IPD admission authorization'
    ],
    applicationSteps: [
      '1. Upload Jan Aadhaar / RGHS card on Government TMS (Transaction Management System) portal.',
      '2. Attach pre-procedure CECT Abdomen & Doppler USG confirming Budd-Chiari Syndrome.',
      '3. Select Package Code 2849-IN089A (DIPS/TIPS) with implant authorization for ePTFE-covered stent.',
      '4. Obtain Online Pre-Auth TID before initiating femoral/jugular puncture.',
      '5. Upload post-stent deployment portogram showing baseline vs post-dilation shunt flow & PPG < 12 mmHg.',
      '6. Submit final discharge summary with implant barcode stickers for claim reimbursement within 7 days.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 4
  },
  tace: {
    primaryScheme: 'MAAY',
    packageCode: '2849-IN061A',
    secondaryPackageCode: 'RGHS-VAS-061',
    icd10Code: 'C22.0',
    packageName: 'Conventional & Drug-Eluting Bead TACE (cTACE / DEB-TACE)',
    tariffAmountInr: 47960,
    implantReimbursementCeilingInr: 50000,
    approvedImplants: [
      { code: 'IMP 38', name: 'Lipiodol Ultra-Fluid Ampoule (10 mL)', price: 18000 },
      { code: 'IMP 39', name: 'Microcatheter System (2.0F - 2.7F Progreat/Renegade)', price: 19000 },
      { code: 'IMP 40', name: 'Drug-Eluting Beads (DEB 100-300 um / DC Bead)', price: 50000 },
      { code: 'IMP 41', name: 'Doxorubicin Hydrochloride 50mg Chemo Ampoule', price: 4500 }
    ],
    mandatoryPreAuthDocuments: [
      'Jan Aadhaar Card / RGHS Card digital verification',
      'Triphasic Liver CECT or Contrast Dynamic MRI confirming BCLC Stage A/B HCC',
      'Liver Function Tests (Total Bilirubin <= 3.0 mg/dL, Child-Pugh Score <= 8)',
      'Institutional Tumor Board recommendation note',
      'Pre-procedure selective celiac / hepatic angiogram run'
    ],
    applicationSteps: [
      '1. Log into Rajasthan Ayushman TMS Portal with Doctor SSO ID.',
      '2. Enter Jan Aadhaar / RGHS family token and select Specialty: Interventional Radiology.',
      '3. Select Package Code 2849-IN061A and attach triphasic imaging report.',
      '4. Requisition Lipiodol / DEB Bead kit and microcatheter under implant schedule.',
      '5. Submit intra-procedural DSA spot images showing superselective catheterization and tumor stasis.',
      '6. Generate e-Hospital discharge summary with barcoded implant labels.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 2
  },
  bae: {
    primaryScheme: 'MAAY',
    packageCode: '2849-MC018A',
    secondaryPackageCode: 'RGHS-VAS-018',
    icd10Code: 'R04.2',
    packageName: 'Bronchial Artery Embolization (Emergency Hemoptysis)',
    tariffAmountInr: 30000,
    implantReimbursementCeilingInr: 25000,
    approvedImplants: [
      { code: 'IMP 22', name: 'Calibrated PVA Microparticles (355-500 um / 500-710 um)', price: 5500 },
      { code: 'IMP 23', name: 'Microcatheter Coaxial System (2.0F - 2.4F)', price: 19000 },
      { code: 'IMP 24', name: 'Controlled Detachable Embolization Microcoils Pack', price: 15000 }
    ],
    mandatoryPreAuthDocuments: [
      'Emergency Admission Slip / IPD Card',
      'CT Angiography Thorax demonstrating hypertrophied bronchial or non-bronchial systemic arteries',
      'Clinical note confirming life-threatening or recurrent hemoptysis (> 200 mL/24h)',
      'Diagnostic thoracic aortogram and selective bronchial angiogram excluding anterior spinal artery'
    ],
    applicationSteps: [
      '1. Trigger Emergency STAT Pre-Auth override on TMS Portal for active hemoptysis.',
      '2. Proceed with emergent femoral/radial access and bronchial catheterization.',
      '3. Record selective DSA documenting hypertrophied bronchial artery branches.',
      '4. Confirm absence of anterior spinal artery takeoff before particulate embolization.',
      '5. Upload pre- and post-embolization completion DSA images.',
      '6. Regularize emergency authorization within 24 hours of admission.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 1
  },
  ptbd: {
    primaryScheme: 'MAAY',
    packageCode: '1849-SG105 A',
    secondaryPackageCode: 'RGHS-582',
    icd10Code: 'C24.0 / K83.1',
    packageName: 'Percutaneous Transhepatic Biliary Drainage & Stenting',
    tariffAmountInr: 28000,
    implantReimbursementCeilingInr: 45000,
    approvedImplants: [
      { code: 'IMP 102', name: 'Ring Locking Biliary Drainage Catheter (8.5F / 10F)', price: 4200 },
      { code: 'IMP 12', name: 'Self-Expanding Metallic Biliary Stent (SEMS Nitinol 10x60mm / 10x80mm)', price: 45000 },
      { code: 'IMP 103', name: 'Chiba Transhepatic Access Needle (21G / 22G)', price: 2800 }
    ],
    mandatoryPreAuthDocuments: [
      'MRCP or Contrast CT Abdomen defining Bismuth-Corlette stricture level',
      'Liver Function Tests showing obstructive jaundice (Total Bilirubin > 3 mg/dL)',
      'Coagulation profile (INR <= 1.5, Platelets >= 50,000)',
      'Fluoroscopic cholangiogram verifying ductal entry and catheter tip positioning'
    ],
    applicationSteps: [
      '1. Select Package Code 1849-SG105 A on TMS portal.',
      '2. Upload MRCP report with total bilirubin and clinical indication.',
      '3. Pre-authorize biliary drainage kit and metallic stent if internal stenting indicated.',
      '4. Save fluoroscopic spot films showing Chiba entry, stricture traversal, and drain locked.',
      '5. Attach bile output monitoring chart to electronic discharge advice.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 2
  },
  pcn: {
    primaryScheme: 'MAAY',
    packageCode: '1849-IN057A',
    secondaryPackageCode: 'RGHS-910',
    icd10Code: 'N13.0',
    packageName: 'Percutaneous Nephrostomy (PCN) & Antegrade Stenting',
    tariffAmountInr: 18500,
    implantReimbursementCeilingInr: 12000,
    approvedImplants: [
      { code: 'IMP 88', name: 'Locking Pigtail Nephrostomy Catheter (8F - 10F)', price: 3800 },
      { code: 'IMP 89', name: 'Double-J (DJ) Ureteral Stent Set (6F x 26cm)', price: 6500 },
      { code: 'IMP 90', name: 'Nephrostomy Puncture & Dilator Set with Lunderquist Wire', price: 5000 }
    ],
    mandatoryPreAuthDocuments: [
      'USG KUB or Non-Contrast CT KUB showing moderate/severe hydronephrosis',
      'Renal Function Tests (Serum Creatinine, Blood Urea)',
      'Nephrostogram spot film confirming caliceal access and pigtail curl'
    ],
    applicationSteps: [
      '1. Log into TMS portal with Jan Aadhaar token and select PCN package.',
      '2. Upload USG/CT report documenting obstructive hydronephrosis.',
      '3. Execute ultrasound/fluoroscopy-guided posterior lower pole caliceal puncture.',
      '4. Record nephrostogram demonstrating pelvic-caliceal system decompression.',
      '5. Submit claim with serial number of locked catheter and urine output record.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 2
  },
  varicose: {
    primaryScheme: 'RGHS',
    packageCode: 'RGHS-492',
    secondaryPackageCode: 'MAAY-VAS-042',
    icd10Code: 'I83.9',
    packageName: 'Endovenous Thermal Ablation (EVLA/RFA) & Glue Closure for Varicose Veins',
    tariffAmountInr: 28500,
    implantReimbursementCeilingInr: 35000,
    approvedImplants: [
      { code: 'RGHS-IMP-01', name: '1470nm Radial Laser Fiber / RFA Catheter', price: 14000 },
      { code: 'RGHS-IMP-02', name: 'VenaSeal Cyanoacrylate Venous Closure System', price: 35000 },
      { code: 'RGHS-IMP-03', name: 'Graduated Medical Compression Stockings (Class II 20-30 mmHg)', price: 2200 }
    ],
    mandatoryPreAuthDocuments: [
      'Standing Venous Duplex Ultrasound mapping report demonstrating SFJ/SPJ reflux > 0.5 sec',
      'Clinical examination report and CEAP classification (C2 - C6)',
      'Pre-procedure photographs of varicose veins / stasis ulcer',
      'Post-procedure duplex report confirming target vein closure'
    ],
    applicationSteps: [
      '1. Enter RGHS Card / Jan Aadhaar TID in Daycare Procedure portal.',
      '2. Select Code RGHS-492 (Endovenous Ablation).',
      '3. Attach standing duplex report showing GSV/SSV diameter and reflux duration.',
      '4. Perform ultrasound-guided tumescent anesthesia and endovenous ablation.',
      '5. Generate discharge note confirming post-op ambulation and compression stocking application.'
    ],
    ipdAdmissionRequired: false,
    preAuthTurnaroundHours: 3
  },
  varicocele: {
    primaryScheme: 'RGHS',
    packageCode: 'RGHS-693',
    secondaryPackageCode: 'MAAY-VAS-033',
    icd10Code: 'I86.1',
    packageName: 'Percutaneous Gonadal Vein Embolization',
    tariffAmountInr: 32000,
    implantReimbursementCeilingInr: 22000,
    approvedImplants: [
      { code: 'IMP 50', name: 'Fibered Platinum / Nester Embolization Coils Set', price: 18000 },
      { code: 'IMP 51', name: 'Sodium Tetradecyl Sulfate (STS 3%) Foam Sclerosant', price: 3500 }
    ],
    mandatoryPreAuthDocuments: [
      'Scrotal / Pelvic Doppler ultrasound confirming venous reflux > 2 seconds on Valsalva',
      'Semen analysis report (infertility) or clinical pain documentation',
      'Venogram documenting internal spermatic vein dilation and collateral reflux'
    ],
    applicationSteps: [
      '1. Submit pre-auth request under RGHS/MAAY with scrotal Doppler report.',
      '2. Select Code RGHS-693 (Therapeutic Embolization).',
      '3. Perform transjugular or transfemoral cannulation of gonadal vein.',
      '4. Deploy coils and foam sclerosant to obliterate retroperitoneal reflux arcades.',
      '5. Submit completion venogram showing complete occlusion for reimbursement.'
    ],
    ipdAdmissionRequired: false,
    preAuthTurnaroundHours: 2
  },
  central_venoplasty: {
    primaryScheme: 'MAAY',
    packageCode: '2849-IN026C',
    secondaryPackageCode: 'RGHS-VAS-026',
    icd10Code: 'I87.1',
    packageName: 'Central Venous Angioplasty & Stenting for Dialysis Access',
    tariffAmountInr: 42000,
    implantReimbursementCeilingInr: 55000,
    approvedImplants: [
      { code: 'IMP 385', name: 'Ultra-High Pressure Conquest / Atlas PTA Balloon (10-14mm)', price: 16000 },
      { code: 'IMP 387', name: 'Self-Expanding Dedicated Venous Stent (e.g. Abre / Venovo)', price: 45000 }
    ],
    mandatoryPreAuthDocuments: [
      'Chronic Kidney Disease (CKD Stage 5D) Dialysis registration card',
      'Fistulogram showing central vein stenosis > 50% with high venous pressures (>200 mmHg)',
      'Pre- and post-angioplasty DSA runs demonstrating unrestricted right atrial inflow'
    ],
    applicationSteps: [
      '1. Access MAAY Dialysis Portal with Jan Aadhaar token.',
      '2. Select Central Venoplasty package 2849-IN026C.',
      '3. Attach dialysis center referral showing failing dialysis access.',
      '4. Perform high-pressure balloon venoplasty +/- dedicated venous stenting.',
      '5. Submit completion angiogram showing full lumen restoration.'
    ],
    ipdAdmissionRequired: false,
    preAuthTurnaroundHours: 2
  },
  biopsy: {
    primaryScheme: 'MAAY',
    packageCode: '1849-DG012A',
    secondaryPackageCode: 'RGHS-DIAG-012',
    icd10Code: 'R69',
    packageName: 'Image-Guided Percutaneous Core Needle Biopsy',
    tariffAmountInr: 6500,
    implantReimbursementCeilingInr: 3500,
    approvedImplants: [
      { code: 'IMP 310', name: 'Automated Coaxial Core Biopsy Needle System (16G / 18G)', price: 3200 }
    ],
    mandatoryPreAuthDocuments: [
      'Pre-biopsy diagnostic CT / MRI / USG report defining target lesion',
      'Coagulation profile (Platelets >= 50,000/uL, INR <= 1.5)',
      'CT / USG biopsy scout film showing coaxial needle inside lesion'
    ],
    applicationSteps: [
      '1. Submit Daycare Diagnostic Biopsy token under Jan Aadhaar / RGHS.',
      '2. Attach lesion imaging report and blood coagulation clearance.',
      '3. Perform coaxial needle puncture and harvest 3-5 adequate tissue cores.',
      '4. Submit needle position radiograph and SMS pathology requisition slip.'
    ],
    ipdAdmissionRequired: false,
    preAuthTurnaroundHours: 1
  },
  uae: {
    primaryScheme: 'MAAY',
    packageCode: '2849-GY018A',
    secondaryPackageCode: 'RGHS-GYN-018',
    icd10Code: 'D25.9',
    packageName: 'Uterine Artery Embolization (UFE / UAE)',
    tariffAmountInr: 36000,
    implantReimbursementCeilingInr: 28000,
    approvedImplants: [
      { code: 'IMP 340', name: 'Calibrated Microspheres (Embosphere / Embozene 500-700um)', price: 16000 },
      { code: 'IMP 341', name: 'Microcatheter Coaxial System (2.0F - 2.4F)', price: 19000 }
    ],
    mandatoryPreAuthDocuments: [
      'Pelvic MRI or Contrast CT confirming uterine fibroids / adenomyosis',
      'Endometrial biopsy ruling out malignancy in patients with abnormal bleeding',
      'Bilateral selective uterine angiogram runs pre- and post-embolization'
    ],
    applicationSteps: [
      '1. Apply on TMS portal under Gynecology Interventional package 2849-GY018A.',
      '2. Attach pelvic MRI report and symptom severity score.',
      '3. Perform bilateral uterine artery embolization to free flow stasis.',
      '4. Submit completion angiography spot films and barcode labels.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 2
  },
  pae: {
    primaryScheme: 'MAAY',
    packageCode: '2849-UR022A',
    secondaryPackageCode: 'RGHS-URO-022',
    icd10Code: 'N40.1',
    packageName: 'Prostatic Artery Embolization (PAE)',
    tariffAmountInr: 38000,
    implantReimbursementCeilingInr: 30000,
    approvedImplants: [
      { code: 'IMP 350', name: 'Hydrogel / Calibrated Microspheres (100-300um / 300-500um)', price: 16000 },
      { code: 'IMP 351', name: 'High-Flow Superselective Microcatheter (1.7F - 2.0F)', price: 21000 }
    ],
    mandatoryPreAuthDocuments: [
      'Uroflowmetry (Qmax < 15 mL/s) and post-void residual urine ultrasound',
      'Prostate MRI / TRUS measuring prostate volume (> 40 cc) and IPSS score',
      'PSA level ruling out prostate malignancy',
      'Pre- and post-embolization pelvic angiograms'
    ],
    applicationSteps: [
      '1. Enter Jan Aadhaar token under Urology IR package 2849-UR022A.',
      '2. Attach prostate MRI, IPSS questionnaire, and uroflowmetry.',
      '3. Execute bilateral superselective prostatic artery embolization.',
      '4. Upload completion devascularization spot films for online approval.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 2
  },
  dvt_thrombolysis: {
    primaryScheme: 'MAAY',
    packageCode: '2849-VAS-038',
    secondaryPackageCode: 'RGHS-VAS-038',
    icd10Code: 'I82.4',
    packageName: 'Catheter-Directed Thrombolysis & Percutaneous Thrombectomy',
    tariffAmountInr: 48000,
    implantReimbursementCeilingInr: 65000,
    approvedImplants: [
      { code: 'IMP 370', name: 'Multi-Sidehole Infusion Catheter System (Cragg-McNamara 4F/5F)', price: 12000 },
      { code: 'IMP 371', name: 'Percutaneous Mechanical Aspiration Thrombectomy Catheter', price: 55000 },
      { code: 'IMP 372', name: 'Recombinant Tissue Plasminogen Activator (r-tPA 50mg)', price: 28000 }
    ],
    mandatoryPreAuthDocuments: [
      'Venous Duplex Ultrasound or CT Venogram demonstrating acute proximal DVT (< 14 days)',
      'Baseline Coagulation Profile (Platelets, PT/INR, aPTT, Fibrinogen)',
      'Daily ICU fibrinogen monitoring record during thrombolytic infusion'
    ],
    applicationSteps: [
      '1. Register emergency admission and trigger STAT pre-auth on TMS portal.',
      '2. Select Code 2849-VAS-038 (Percutaneous Thrombectomy).',
      '3. Perform popliteal/femoral puncture and embed infusion catheter across thrombus.',
      '4. Submit serial venograms showing thrombus clearance and restored iliofemoral flow.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 2
  },
  pad_angioplasty: {
    primaryScheme: 'MAAY',
    packageCode: '2849-VAS-045',
    secondaryPackageCode: 'RGHS-VAS-045',
    icd10Code: 'I70.2',
    packageName: 'Peripheral Arterial Angioplasty & Stenting (SFA / Iliac)',
    tariffAmountInr: 45000,
    implantReimbursementCeilingInr: 65000,
    approvedImplants: [
      { code: 'IMP 380', name: 'Drug-Eluting / Paclitaxel-Coated PTA Balloon (DCB 5-7mm)', price: 32000 },
      { code: 'IMP 381', name: 'Self-Expanding Nitinol Bare or Covered Stent', price: 42000 }
    ],
    mandatoryPreAuthDocuments: [
      'CT Angiography Lower Limbs or Duplex documenting flow-limiting stenosis / occlusion',
      'Rutherford Clinical Classification (Rutherford 3-6) documentation',
      'Pre- and post-angioplasty arterial DSA runs showing luminal gain'
    ],
    applicationSteps: [
      '1. Apply under Vascular Surgery / IR module on TMS portal.',
      '2. Attach CT angiogram and baseline Ankle-Brachial Index (ABI).',
      '3. Perform arterial revascularization with balloon dilation and stenting.',
      '4. Upload final angiogram confirming brisk run-off into tibial runoff vessels.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 2
  },
  tumor_ablation: {
    primaryScheme: 'MAAY',
    packageCode: '2849-IN071A',
    secondaryPackageCode: 'RGHS-VAS-071',
    icd10Code: 'C22.0',
    packageName: 'Percutaneous Thermal Ablation (RFA / Microwave MWA)',
    tariffAmountInr: 38000,
    implantReimbursementCeilingInr: 45000,
    approvedImplants: [
      { code: 'IMP 390', name: 'Cooled-Shaft Microwave Ablation Antenna / RFA Electrode Needle', price: 45000 }
    ],
    mandatoryPreAuthDocuments: [
      'Multiphasic Contrast CT or Liver MRI verifying tumor dimensions (<= 3 cm)',
      'Coagulation profile and Child-Pugh scoring',
      'CT / Ultrasound guidance image verifying probe tip in tumor center'
    ],
    applicationSteps: [
      '1. Select Package 2849-IN071A on TMS portal.',
      '2. Attach cross-sectional imaging and multidisciplinary tumor board clearance.',
      '3. Perform image-guided probe placement and thermal ablation cycle.',
      '4. Submit immediate post-ablation contrast CT confirming complete coagulation margin.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 2
  },
  tips_portal_htn: {
    primaryScheme: 'MAAY',
    packageCode: '2849-IN089A',
    secondaryPackageCode: 'RGHS-VAS-108',
    icd10Code: 'K76.6 / I85.0',
    packageName: 'Transjugular Intrahepatic Portosystemic Shunt (TIPS)',
    tariffAmountInr: 125000,
    implantReimbursementCeilingInr: 95000,
    approvedImplants: [
      { code: 'IMP 108', name: 'Gore Viatorr ePTFE-Covered TIPS Stent-Graft (10mm x 80mm)', price: 85000 },
      { code: 'IMP 109', name: 'Rosch-Uchida Transjugular Liver Access Set', price: 18000 }
    ],
    mandatoryPreAuthDocuments: [
      'Upper GI endoscopy report showing varices refractory to band ligation',
      'Triphasic CT Liver demonstrating patent portal and hepatic veins',
      'MELD 3.0 / Child-Pugh calculation sheet (< 18 preferred)'
    ],
    applicationSteps: [
      '1. Submit urgent TIPS authorization under Code 2849-IN089A.',
      '2. Requisition Viatorr stent-graft with manufacturer barcode.',
      '3. Perform transjugular puncture, parenchymal tract creation, and stent deployment.',
      '4. Submit pre- and post-TIPS pressure manometry proving PPG reduction to < 12 mmHg.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 2
  },
  upper_gi_bleed: {
    primaryScheme: 'MAAY',
    packageCode: '2849-MC022A',
    secondaryPackageCode: 'RGHS-VAS-022',
    icd10Code: 'K92.2',
    packageName: 'Transcatheter Arterial Embolization for Acute GI Bleeding',
    tariffAmountInr: 32000,
    implantReimbursementCeilingInr: 25000,
    approvedImplants: [
      { code: 'IMP 410', name: 'Microcoil Embolization Pack (Fibered Platinum 2-4mm)', price: 16000 },
      { code: 'IMP 411', name: 'Coaxial Microcatheter System', price: 19000 }
    ],
    mandatoryPreAuthDocuments: [
      'Emergency department triage slip confirming massive hematemesis/melena',
      'Endoscopy report documenting failed endoscopic clipping or inaccessible ulcer',
      'Angiogram runs showing contrast extravasation / pseudoaneurysm'
    ],
    applicationSteps: [
      '1. Trigger Emergency STAT Pre-Auth override on TMS portal.',
      '2. Perform selective celiac/SMA angiography and superselective GDA catheterization.',
      '3. Execute coil sandwich embolization across target bleeding vessel.',
      '4. Upload pre- and post-embolization angiograms for claim settlement.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 1
  },
  brto_parto: {
    primaryScheme: 'MAAY',
    packageCode: '2849-IN064A',
    secondaryPackageCode: 'RGHS-VAS-064',
    icd10Code: 'I85.0',
    packageName: 'Balloon-Occluded / Plug-Assisted Retrograde Transvenous Obliteration',
    tariffAmountInr: 54000,
    implantReimbursementCeilingInr: 45000,
    approvedImplants: [
      { code: 'IMP 49', name: 'Amplatzer Vascular Plug II (AVP II 10-14mm)', price: 38000 },
      { code: 'IMP 51', name: 'Gelfoam Slurry / Lipiodol & Sodium Tetradecyl Sulfate Kit', price: 18000 }
    ],
    mandatoryPreAuthDocuments: [
      'Contrast CT Portal Venogram showing gastrorenal shunt and gastric fundal varices',
      'Endoscopy report verifying high-risk bleeding gastric varices (GOV2 / IGV1)',
      'Intra-procedural shunt venogram and post-plug thrombosis spot films'
    ],
    applicationSteps: [
      '1. Select Code 2849-IN064A under Portal HTN module.',
      '2. Upload CT portal venogram demonstrating gastrorenal shunt anatomy.',
      '3. Perform transjugular/transfemoral left renal vein cannulation and plug deployment.',
      '4. Submit completion venogram showing complete variceal obliteration.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 2
  },
  pve: {
    primaryScheme: 'MAAY',
    packageCode: '2849-IN065A',
    secondaryPackageCode: 'RGHS-VAS-065',
    icd10Code: 'C22.0',
    packageName: 'Portal Vein Embolization (PVE)',
    tariffAmountInr: 45000,
    implantReimbursementCeilingInr: 38000,
    approvedImplants: [
      { code: 'IMP 46', name: 'Histoacryl Glue & Lipiodol Ultra-Fluid Ampoule Kit', price: 21000 },
      { code: 'IMP 47', name: 'Microcatheter Coaxial System', price: 19000 },
      { code: 'IMP 48', name: 'Nester Coils Pack', price: 15000 }
    ],
    mandatoryPreAuthDocuments: [
      'Volumetric CT Liver measuring future liver remnant (FLR < 25-30%)',
      'Surgical Oncology referral letter recommending two-stage hepatectomy',
      'Portogram showing complete right portal branch occlusion with left preservation'
    ],
    applicationSteps: [
      '1. Select Package 2849-IN065A on TMS portal.',
      '2. Attach CT volumetry and tumor board surgical plan.',
      '3. Perform transhepatic portal puncture and glue/coil embolization of right portal tree.',
      '4. Upload portogram verification spot film for final reimbursement.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 2
  },
  cholecystostomy: {
    primaryScheme: 'MAAY',
    packageCode: '1849-SG108A',
    secondaryPackageCode: 'RGHS-SURG-108',
    icd10Code: 'K81.0',
    packageName: 'Percutaneous Cholecystostomy',
    tariffAmountInr: 15000,
    implantReimbursementCeilingInr: 8000,
    approvedImplants: [
      { code: 'IMP 430', name: 'Locking Pigtail Drainage Catheter (8F / 10F)', price: 3800 }
    ],
    mandatoryPreAuthDocuments: [
      'Ultrasound / CT Abdomen confirming acute calculous/acalculous cholecystitis',
      'High-risk surgical evaluation note (APACHE II / severe sepsis)',
      'Spot fluoroscopy radiograph showing transhepatic gallbladder drainage'
    ],
    applicationSteps: [
      '1. Log into TMS portal and select Package 1849-SG108A.',
      '2. Attach ultrasound report documenting distended gallbladder with gallstones.',
      '3. Execute transhepatic puncture and catheter placement into gallbladder lumen.',
      '4. Submit bile aspiration confirmation and locked pigtail radiograph.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 2
  },
  hydatid_pair: {
    primaryScheme: 'MAAY',
    packageCode: '1849-SG112A',
    secondaryPackageCode: 'RGHS-SURG-112',
    icd10Code: 'B67.0',
    packageName: 'Percutaneous Aspiration, Injection & Re-Aspiration (PAIR)',
    tariffAmountInr: 16500,
    implantReimbursementCeilingInr: 6000,
    approvedImplants: [
      { code: 'IMP 435', name: 'Pigtail Evacuation Catheter Set & Hypertonic Saline Kit', price: 4200 }
    ],
    mandatoryPreAuthDocuments: [
      'CT / Ultrasound Abdomen confirming Gharbi Type I/II or WHO CE1/CE2 hydatid cyst',
      'Echinococcus IgG serology report',
      'Pre-medication note confirming Albendazole coverage x 7 days prior'
    ],
    applicationSteps: [
      '1. Apply under Infection / Parasitic IR Module on TMS portal.',
      '2. Attach CT Abdomen and Echinococcus serology.',
      '3. Perform ultrasound-guided transhepatic cyst puncture, scolicidal injection, and evacuation.',
      '4. Submit cystogram confirming no biliary cyst communication.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 2
  },
  liver_abscess_drain: {
    primaryScheme: 'MAAY',
    packageCode: '1849-SG115A',
    secondaryPackageCode: 'RGHS-SURG-115',
    icd10Code: 'K75.0',
    packageName: 'Percutaneous Liver Abscess Drainage',
    tariffAmountInr: 14000,
    implantReimbursementCeilingInr: 6500,
    approvedImplants: [
      { code: 'IMP 440', name: 'Large-Bore Locking Drainage Catheter (10F - 14F)', price: 4200 }
    ],
    mandatoryPreAuthDocuments: [
      'Ultrasound / Contrast CT Abdomen measuring liquefaction cavity (> 5 cm)',
      'Blood investigations (CBC with leukocytosis, LFT, PT/INR)',
      'Post-procedure fluoroscopy film showing drain coil in abscess center'
    ],
    applicationSteps: [
      '1. Submit emergency daycare/IPD authorization on TMS portal.',
      '2. Upload ultrasound report showing sizable liver abscess cavity.',
      '3. Perform ultrasound/fluoroscopy-guided Seldinger drain placement.',
      '4. Send pus for Gram stain, culture, and amebic serology.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 1
  },
  y90_tare: {
    primaryScheme: 'MAAY',
    packageCode: '2849-ONC-090',
    secondaryPackageCode: 'RGHS-ONC-090',
    icd10Code: 'C22.0',
    packageName: 'Transarterial Radioembolization (Y-90 TARE / SIRT)',
    tariffAmountInr: 110000,
    implantReimbursementCeilingInr: 280000,
    approvedImplants: [
      { code: 'IMP 450', name: 'Yttrium-90 Resin / Glass Microspheres (SIR-Spheres / TheraSphere)', price: 275000 },
      { code: 'IMP 451', name: 'Technetium-99m MAA Mapping Set & Shunt Scintigraphy', price: 22000 },
      { code: 'IMP 452', name: 'Microcatheter Coaxial System', price: 19000 }
    ],
    mandatoryPreAuthDocuments: [
      'Nuclear Medicine Tc-99m MAA SPECT-CT scan proving lung shunt fraction < 20%',
      'Triphasic CECT / MRI Liver documenting unresectable HCC with portal vein invasion',
      'Multidisciplinary Tumor Board (MDT) and Radiation Safety clearance certificate'
    ],
    applicationSteps: [
      '1. Submit Stage 1 Mapping Pre-Auth on TMS portal with Tc-99m MAA requisition.',
      '2. Coil embolize non-target gastroduodenal/right gastric vessels.',
      '3. Calculate Lung Shunt Fraction and absorbed radiation dose.',
      '4. Submit Stage 2 Y-90 therapeutic infusion pre-authorization.',
      '5. Upload post-administration Bremsstrahlung SPECT-CT confirming tumor dose uptake.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 4
  },
  renal_aml: {
    primaryScheme: 'MAAY',
    packageCode: '2849-UR028A',
    secondaryPackageCode: 'RGHS-URO-028',
    icd10Code: 'D30.0',
    packageName: 'Selective Renal Arterial Embolization (AML / RCC)',
    tariffAmountInr: 34000,
    implantReimbursementCeilingInr: 30000,
    approvedImplants: [
      { code: 'IMP 460', name: 'PVA Particles (355-500um) & Microcoils Pack', price: 18000 },
      { code: 'IMP 461', name: 'Superselective Microcatheter (2.0F)', price: 19000 }
    ],
    mandatoryPreAuthDocuments: [
      'CECT Abdomen documenting renal angiomyolipoma > 4 cm or active bleeding',
      'Selective renal angiogram showing tumor aneurysms and neovascularity',
      'Post-embolization parenchymal sparing confirmation angiogram'
    ],
    applicationSteps: [
      '1. Log into TMS portal under Urology IR module.',
      '2. Select Code 2849-UR028A and attach CECT Abdomen.',
      '3. Superselectively catheterize the segmental renal feeding branches.',
      '4. Embolize aneurysmal tumor vessels preserving normal renal cortex.',
      '5. Upload pre- and post-embolization runs for settlement.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 2
  },
  bone_cryo_cement: {
    primaryScheme: 'MAAY',
    packageCode: '2849-ORT-034',
    secondaryPackageCode: 'RGHS-ORTH-034',
    icd10Code: 'M80.0',
    packageName: 'Percutaneous Vertebroplasty / Kyphoplasty / Bone Cementoplasty',
    tariffAmountInr: 32000,
    implantReimbursementCeilingInr: 28000,
    approvedImplants: [
      { code: 'IMP 470', name: 'Polymethylmethacrylate (PMMA) Radiopaque Bone Cement Kit', price: 12000 },
      { code: 'IMP 471', name: 'High-Pressure Hydraulic Injection Syringe & Bone Access Cannula (10G/11G)', price: 16000 }
    ],
    mandatoryPreAuthDocuments: [
      'MRI Spine documenting acute osteoporotic / osteolytic fracture with bone edema (STIR hyperintense)',
      'CT Spine confirming posterior cortical wall integrity',
      'Post-procedure fluoroscopy film confirming cement filling without canal leakage'
    ],
    applicationSteps: [
      '1. Select Package 2849-ORT-034 on TMS portal.',
      '2. Upload MRI and CT Spine reports documenting acute painful fracture.',
      '3. Perform transpedicular needle placement under live biplane fluoroscopy.',
      '4. Inject radio-opaque PMMA cement under continuous vision.',
      '5. Attach pre- and post-procedure spine radiographs for claim settlement.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 2
  },
  thyroid_ablation: {
    primaryScheme: 'MAAY',
    packageCode: '1849-EN014A',
    secondaryPackageCode: 'RGHS-ENT-014',
    icd10Code: 'E04.1',
    packageName: 'Ultrasound-Guided Thyroid Nodule Thermal Ablation (RFA/MWA)',
    tariffAmountInr: 22000,
    implantReimbursementCeilingInr: 28000,
    approvedImplants: [
      { code: 'IMP 480', name: 'Internally Cooled Dedicated Thyroid RFA Electrode (18G / 19G)', price: 28000 }
    ],
    mandatoryPreAuthDocuments: [
      'Fine Needle Aspiration Cytology (FNAC) confirming Bethesda II benign nodule (two separate FNACs)',
      'Ultrasound Thyroid documenting nodule volume and compressive symptoms',
      'Normal Thyroid Function Tests (TSH, Free T3, Free T4)'
    ],
    applicationSteps: [
      '1. Apply under Head & Neck Daycare module on TMS portal.',
      '2. Upload dual benign Bethesda II cytology reports.',
      '3. Perform moving-shot RFA with trans-isthmic approach.',
      '4. Submit post-procedure ultrasound documenting complete nodular devascularization.'
    ],
    ipdAdmissionRequired: false,
    preAuthTurnaroundHours: 2
  },
  evar_tevar: {
    primaryScheme: 'MAAY',
    packageCode: '2849-VAS-102',
    secondaryPackageCode: 'RGHS-VAS-102',
    icd10Code: 'I71.4',
    packageName: 'Endovascular Abdominal / Thoracic Aortic Repair (EVAR / TEVAR)',
    tariffAmountInr: 165000,
    implantReimbursementCeilingInr: 450000,
    approvedImplants: [
      { code: 'IMP 490', name: 'Bifurcated Aortic Stent-Graft System (e.g. Gore Excluder / Medtronic Endurant)', price: 385000 },
      { code: 'IMP 491', name: 'Perclose ProGlide Vascular Closure Devices (2 Units)', price: 38000 },
      { code: 'IMP 492', name: 'Large-Bore Molding Balloon (Reliant / Coda)', price: 25000 }
    ],
    mandatoryPreAuthDocuments: [
      'ECG-Gated CT Angiography of Aorta & Iliofemoral vessels with 3D centerline reconstructions',
      'Pre-procedure aortic sizing sheet (proximal neck diameter, length, angulation)',
      'High-risk surgical evaluation by Cardiothoracic & Vascular Surgery (CTVS) board',
      'Completion intra-operative angiogram proving aneurysm exclusion without Type I/III endoleak'
    ],
    applicationSteps: [
      '1. Submit specialized tertiary pre-auth dossier under Code 2849-VAS-102.',
      '2. Upload aortic CT angiogram sizing measurements and graft model numbers.',
      '3. Deploy bifurcated aortic main body and contralateral limb under fluoroscopic roadmapping.',
      '4. Perform completion angiogram confirming patent renal and internal iliac arteries.',
      '5. Submit discharge package with manufacturer serial number stickers for reimbursement.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 4
  },
  visceral_aneurysm: {
    primaryScheme: 'MAAY',
    packageCode: '2849-VAS-052',
    secondaryPackageCode: 'RGHS-VAS-052',
    icd10Code: 'I72.8',
    packageName: 'Endovascular Treatment of Visceral Artery Aneurysms (Splenic / Renal / Hepatic)',
    tariffAmountInr: 48000,
    implantReimbursementCeilingInr: 65000,
    approvedImplants: [
      { code: 'IMP 500', name: 'Detachable Fibered Platinum Microcoils Set', price: 24000 },
      { code: 'IMP 501', name: 'Covered Peripheral Stent (e.g. Gore Viabahn 5-8mm)', price: 55000 },
      { code: 'IMP 502', name: 'Microcatheter Coaxial System', price: 19000 }
    ],
    mandatoryPreAuthDocuments: [
      'CT Angiography Abdomen showing aneurysm > 2 cm or rapid growth/pregnancy risk',
      'Diagnostic selective visceral angiogram defining neck anatomy and collateral vessels',
      'Post-procedure exclusion completion angiogram'
    ],
    applicationSteps: [
      '1. Select Package 2849-VAS-052 under Vascular Embolization.',
      '2. Upload CT Angiography Abdomen report.',
      '3. Perform isolation/packing coil embolization or covered stent deployment.',
      '4. Submit completion run proving complete aneurysm sac thrombosis.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 2
  },
  renal_stenting: {
    primaryScheme: 'MAAY',
    packageCode: '2849-VAS-058',
    secondaryPackageCode: 'RGHS-VAS-058',
    icd10Code: 'I70.1',
    packageName: 'Renal Angioplasty & Stenting (RAS)',
    tariffAmountInr: 42000,
    implantReimbursementCeilingInr: 45000,
    approvedImplants: [
      { code: 'IMP 510', name: 'Balloon-Expandable Renal Stent (e.g. Express / Dynamic 5-7mm)', price: 38000 },
      { code: 'IMP 511', name: 'Renal Guiding Sheath (6F RDC / Vista Brite Tip)', price: 9500 }
    ],
    mandatoryPreAuthDocuments: [
      'CT Angiography or Renal Doppler showing > 70% ostial stenosis',
      'Refractory hypertension on >= 3 anti-hypertensives or unexplained flash pulmonary edema',
      'Pre- and post-stenting translesional pressure gradient verification (< 10 mmHg)'
    ],
    applicationSteps: [
      '1. Submit Renal Interventions dossier on TMS portal.',
      '2. Attach CT Angiography report and nephrology/cardiology referral.',
      '3. Cannulate renal ostium and deploy balloon-expandable stent.',
      '4. Upload final angiogram confirming brisk laminar renal perfusion.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 2
  },
  lower_gi_bleed: {
    primaryScheme: 'MAAY',
    packageCode: '2849-MC024A',
    secondaryPackageCode: 'RGHS-VAS-024',
    icd10Code: 'K92.2',
    packageName: 'Transcatheter Embolization for Acute Lower GI Bleeding',
    tariffAmountInr: 34000,
    implantReimbursementCeilingInr: 28000,
    approvedImplants: [
      { code: 'IMP 520', name: 'Controlled Microcoils / Gelatin Foam Slurry Kit', price: 16000 },
      { code: 'IMP 521', name: 'High-Flexibility Microcatheter System (1.7F - 2.0F)', price: 19000 }
    ],
    mandatoryPreAuthDocuments: [
      'CT Angiography Abdomen showing active contrast extravasation into colonic lumen',
      'Clinical evidence of hemodynamic instability or transfusion of >= 4 PRBC units',
      'Superselective mesenteric angiogram isolating the bleeding vasa recta'
    ],
    applicationSteps: [
      '1. Trigger Emergency STAT override on TMS portal.',
      '2. Superselectively cannulate the target vasa recta using a microcatheter.',
      '3. Deploy microcoils or Gelfoam particles avoiding broad segmental devascularization.',
      '4. Upload completion run showing hemostasis and intact collateral bowel flow.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 1
  },
  pelvic_trauma_bleed: {
    primaryScheme: 'MAAY',
    packageCode: '2849-EMER-032',
    secondaryPackageCode: 'RGHS-EMER-032',
    icd10Code: 'S35.5',
    packageName: 'Emergency Pelvic Arterial Embolization in Severe Trauma',
    tariffAmountInr: 36000,
    implantReimbursementCeilingInr: 25000,
    approvedImplants: [
      { code: 'IMP 530', name: 'Gelfoam Sheet Slurry & Pushable Coils Pack', price: 14000 },
      { code: 'IMP 531', name: '5F Cobra / Roberts Uterine Catheter', price: 6500 }
    ],
    mandatoryPreAuthDocuments: [
      'Polytrauma triage admission slip with hemorrhagic shock protocol',
      'Pelvic radiograph / CT Trauma showing unstable pelvic ring fracture',
      'Internal iliac pelvic angiograms demonstrating extravasation / truncation'
    ],
    applicationSteps: [
      '1. Immediate emergency life-support protocol activation on TMS portal.',
      '2. Perform bilateral internal iliac diagnostic angiography via rapid femoral access.',
      '3. Deliver Gelfoam slurry or coil occlusion of bleeding gluteal/internal pudendal branches.',
      '4. Regularize pre-authorization within 24 hours with trauma ICU documentation.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 1
  },
  epistaxis_tae: {
    primaryScheme: 'MAAY',
    packageCode: '2849-ENT-019',
    secondaryPackageCode: 'RGHS-ENT-019',
    icd10Code: 'R04.0',
    packageName: 'Endovascular Embolization for Refractory Epistaxis',
    tariffAmountInr: 28000,
    implantReimbursementCeilingInr: 24000,
    approvedImplants: [
      { code: 'IMP 540', name: 'PVA Microparticles (355-500um) & Microcatheter System', price: 21000 }
    ],
    mandatoryPreAuthDocuments: [
      'ENT operative note confirming failure of anterior/posterior nasal packing',
      'Selective external carotid angiogram excluding ophthalmic artery anastomoses',
      'Completion devascularization spot films of sphenopalatine and facial arteries'
    ],
    applicationSteps: [
      '1. Apply under Emergency ENT / IR Module on TMS portal.',
      '2. Perform external carotid angiography ruling out dangerous intracranial collaterals.',
      '3. Embolize internal maxillary / sphenopalatine artery branches to stasis.',
      '4. Upload final angiogram confirming complete hemostasis.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 1
  },
  stroke_thrombectomy: {
    primaryScheme: 'MAAY',
    packageCode: '2849-NEU-108',
    secondaryPackageCode: 'RGHS-NEUR-108',
    icd10Code: 'I63.9',
    packageName: 'Mechanical Thrombectomy in Acute Ischemic Stroke (LVO)',
    tariffAmountInr: 125000,
    implantReimbursementCeilingInr: 180000,
    approvedImplants: [
      { code: 'IMP 550', name: 'Stent Retriever (e.g. Solitaire / Trevo 4-6mm)', price: 75000 },
      { code: 'IMP 551', name: 'Large-Bore Distal Aspiration Catheter (e.g. Sofia Plus / React 71)', price: 65000 },
      { code: 'IMP 552', name: 'Balloon Guide Catheter (8F FlowGate2 / Cello)', price: 42000 }
    ],
    mandatoryPreAuthDocuments: [
      'NCCT Brain ruling out intracranial hemorrhage and establishing ASPECTS >= 6',
      'CT Angiography Neck & Brain verifying Large Vessel Occlusion (ICA / M1 / M2 / Basilar)',
      'Pre- and post-thrombectomy cerebral DSA proving TICI 2b/3 reperfusion'
    ],
    applicationSteps: [
      '1. Activate Stroke Code STAT Pre-Auth override on TMS portal.',
      '2. Record onset-to-groin and groin-to-recanalization timestamps.',
      '3. Perform combined stent retriever and aspiration thrombectomy (Solumbra technique).',
      '4. Upload final TICI reperfusion angiograms and ICU transfer sheet for claim approval.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 1
  },
  carotid_stenting: {
    primaryScheme: 'MAAY',
    packageCode: '2849-NEU-084',
    secondaryPackageCode: 'RGHS-NEUR-084',
    icd10Code: 'I65.2',
    packageName: 'Carotid Artery Stenting with Distal Embolic Protection (CAS)',
    tariffAmountInr: 65000,
    implantReimbursementCeilingInr: 95000,
    approvedImplants: [
      { code: 'IMP 560', name: 'Distal Embolic Protection Filter (e.g. SpiderFX / FilterWire EZ)', price: 38000 },
      { code: 'IMP 561', name: 'Tapered Carotid Nitinol Stent (e.g. Protégé / Acculink)', price: 48000 },
      { code: 'IMP 562', name: 'Monorail Post-Dilation Balloon (5-6mm)', price: 16000 }
    ],
    mandatoryPreAuthDocuments: [
      'Carotid Doppler and CT Angiography Neck showing >= 70% symptomatic or >= 80% asymptomatic stenosis',
      'Neurology / Stroke consultation confirming high-risk criteria for carotid endarterectomy',
      'Fluoroscopy spot films showing embolic filter deployment, stent release, and filter retrieval'
    ],
    applicationSteps: [
      '1. Submit CAS pre-authorization with CT angiogram and neurology evaluation.',
      '2. Deploy distal embolic protection filter in straight internal carotid segment.',
      '3. Deploy self-expanding tapered stent and post-dilate with monorail balloon.',
      '4. Retrieve protection filter and document intact intracranial circulation.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 2
  },
  aneurysm_coiling: {
    primaryScheme: 'MAAY',
    packageCode: '2849-NEU-112',
    secondaryPackageCode: 'RGHS-NEUR-112',
    icd10Code: 'I60.9 / I67.1',
    packageName: 'Intracranial Aneurysm Coiling & Flow Diverter Stenting',
    tariffAmountInr: 135000,
    implantReimbursementCeilingInr: 280000,
    approvedImplants: [
      { code: 'IMP 570', name: 'Detachable Intracranial Microcoils Set (5 Units)', price: 125000 },
      { code: 'IMP 571', name: 'Flow Diverter Embolization Device (e.g. Pipeline / Surpass)', price: 210000 },
      { code: 'IMP 572', name: 'Neurovascular Microcatheter & Steerable Microguidewire', price: 32000 }
    ],
    mandatoryPreAuthDocuments: [
      'CT / MRI Brain confirming subarachnoid hemorrhage (SAH) or unruptured saccular aneurysm',
      'Diagnostic 3D Rotational Angiography with volume rendering defining aneurysm neck and dome',
      'Completion angiogram demonstrating complete Raymond-Roy Class I occlusion'
    ],
    applicationSteps: [
      '1. Submit Emergency Neurovascular Pre-Auth on TMS portal.',
      '2. Requisition microcoil set or flow diverter with detailed neurosurgical plan.',
      '3. Execute catheterization and coil occlusion under live dual-display fluoroscopy.',
      '4. Submit Raymond-Roy occlusion angiograms for reimbursement approval.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 2
  },
  csdh_mma: {
    primaryScheme: 'MAAY',
    packageCode: '2849-NEU-072',
    secondaryPackageCode: 'RGHS-NEUR-072',
    icd10Code: 'I62.0',
    packageName: 'Middle Meningeal Artery (MMA) Embolization for Subdural Hematoma',
    tariffAmountInr: 52000,
    implantReimbursementCeilingInr: 55000,
    approvedImplants: [
      { code: 'IMP 580', name: 'Liquid Embolic System (Onyx 18 / Squid / Phil) or Calibrated PVA Particles', price: 42000 },
      { code: 'IMP 581', name: 'DMSO-Compatible Steerable Microcatheter', price: 24000 }
    ],
    mandatoryPreAuthDocuments: [
      'NCCT Brain documenting recurrent or non-surgical chronic subdural hematoma',
      'External carotid angiography detailing anterior and posterior convexity MMA branches',
      'Verification of absence of ophthalmic artery anastomoses (meningolacrimal branches)'
    ],
    applicationSteps: [
      '1. Select Package 2849-NEU-072 on TMS portal.',
      '2. Attach NCCT Brain showing subdural hematoma thickness and midline shift.',
      '3. Superselectively cannulate MMA and deliver liquid embolic/particulate agent.',
      '4. Submit completion devascularization runs for claim processing.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 2
  },
  head_neck_avm: {
    primaryScheme: 'MAAY',
    packageCode: '2849-IN049B',
    secondaryPackageCode: 'RGHS-VAS-049',
    icd10Code: 'Q27.31',
    packageName: 'Head & Neck Arteriovenous Malformation (AVM) / JNA Embolization',
    tariffAmountInr: 58000,
    implantReimbursementCeilingInr: 65000,
    approvedImplants: [
      { code: 'IMP 54', name: 'DMSO-Compatible Detachable Microcatheter (Apollo / Sonic)', price: 24000 },
      { code: 'IMP 57', name: 'EVOH Copolymer Liquid Embolic (Onyx 18 / 34)', price: 48000 }
    ],
    mandatoryPreAuthDocuments: [
      'Contrast MRI / CECT Neck & Face delineating vascular nidus extension',
      'Superselective external carotid angiography isolating feeding arteries and venous drainage',
      'Pre- and post-embolization devascularization spot films'
    ],
    applicationSteps: [
      '1. Apply under Complex Vascular Anomalies module on TMS portal.',
      '2. Attach MRI Head & Neck and tumor board/surgical plan.',
      '3. Superselectively catheterize the feeding pedicles and inject Onyx copolymer.',
      '4. Submit post-procedure devascularization runs confirming cessation of nidus blush.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 2
  },
  pulmonary_pe_thrombolysis: {
    primaryScheme: 'MAAY',
    packageCode: '2849-VAS-088',
    secondaryPackageCode: 'RGHS-VAS-088',
    icd10Code: 'I26.9',
    packageName: 'Pulmonary Embolism Catheter-Directed Thrombolysis & Thrombectomy',
    tariffAmountInr: 65000,
    implantReimbursementCeilingInr: 95000,
    approvedImplants: [
      { code: 'IMP 590', name: 'Ultrasound-Accelerated Thrombolysis System (EKOS 5.4F) or Large-Bore Aspiration Catheter', price: 85000 },
      { code: 'IMP 591', name: 'Recombinant Tissue Plasminogen Activator (r-tPA)', price: 28000 }
    ],
    mandatoryPreAuthDocuments: [
      'CT Pulmonary Angiography (CTPA) documenting saddle or lobar pulmonary embolism with RV/LV ratio > 0.9',
      'Echocardiogram proving acute right ventricular strain / pulmonary hypertension',
      'Main pulmonary artery pressure manometry recordings before and after intervention'
    ],
    applicationSteps: [
      '1. Trigger Emergency STAT Pre-Auth override for intermediate-high or high-risk PE.',
      '2. Cannulate pulmonary artery via right internal jugular or femoral access.',
      '3. Deploy bilateral infusion catheters or perform mechanical aspiration thrombectomy.',
      '4. Upload pre- and post-procedural pulmonary angiograms and hemodynamics.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 1
  },
  pavm_embolization: {
    primaryScheme: 'MAAY',
    packageCode: '2849-PUL-032',
    secondaryPackageCode: 'RGHS-PULM-032',
    icd10Code: 'I28.0',
    packageName: 'Pulmonary Arteriovenous Malformation (PAVM) Embolization',
    tariffAmountInr: 45000,
    implantReimbursementCeilingInr: 55000,
    approvedImplants: [
      { code: 'IMP 600', name: 'Amplatzer Vascular Plug IV (AVP IV) / Detachable Microcoils Set', price: 42000 },
      { code: 'IMP 601', name: 'Guiding Catheter (6F/7F MPA / Judkins Right)', price: 12000 }
    ],
    mandatoryPreAuthDocuments: [
      'CT Angiography Thorax measuring feeding artery diameter (> 2-3 mm) and sac architecture',
      'Bubble echocardiography or arterial blood gas (hypoxemia refractory to O2)',
      'Selective pulmonary angiography isolating feeding segmental branches'
    ],
    applicationSteps: [
      '1. Select Package 2849-PUL-032 on TMS portal.',
      '2. Upload CTPA demonstrating pulmonary arteriovenous fistula.',
      '3. Cannulate feeding artery and deploy vascular plug/coils tightly in feeding neck.',
      '4. Submit completion angiogram showing cessation of right-to-left shunt flow.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 2
  },
  pleural_ipc: {
    primaryScheme: 'MAAY',
    packageCode: '1849-SG122A',
    secondaryPackageCode: 'RGHS-PULM-122',
    icd10Code: 'J91.0',
    packageName: 'Tunneled Indwelling Pleural Catheter (IPC) Placement',
    tariffAmountInr: 16000,
    implantReimbursementCeilingInr: 22000,
    approvedImplants: [
      { code: 'IMP 610', name: 'Tunneled Pleural Drainage Catheter Kit (PleurX / Rocket 15.5F)', price: 21000 }
    ],
    mandatoryPreAuthDocuments: [
      'Chest Radiograph / CT Thorax proving recurrent symptomatic malignant pleural effusion',
      'Pleural fluid cytology confirming malignant cells or trapped lung anatomy',
      'Post-procedure chest X-ray confirming tunnel course and intrapleural fenestration'
    ],
    applicationSteps: [
      '1. Log into TMS portal under Respiratory / Oncology module.',
      '2. Upload pleural cytology report and repeat drainage history.',
      '3. Execute ultrasound-guided tunneled pleural catheter insertion under local anesthesia.',
      '4. Attach vacuum drainage canister instruction sheet to discharge advice.'
    ],
    ipdAdmissionRequired: false,
    preAuthTurnaroundHours: 2
  },
  ivc_filter_retrieval: {
    primaryScheme: 'RGHS',
    packageCode: 'RGHS-1042',
    secondaryPackageCode: 'MAAY-VAS-092',
    icd10Code: 'Z95.828',
    packageName: 'Inferior Vena Cava (IVC) Filter Placement & Retrieval',
    tariffAmountInr: 36000,
    implantReimbursementCeilingInr: 52000,
    approvedImplants: [
      { code: 'IMP 620', name: 'Retrievable IVC Filter System (e.g. Denali / Celect Platinum)', price: 48000 },
      { code: 'IMP 621', name: 'Endovascular Snare Retrieval Kit (GooseNeck / EnSnare)', price: 16000 }
    ],
    mandatoryPreAuthDocuments: [
      'Doppler USG showing extensive acute iliocaval/femoral DVT',
      'Documented absolute contraindication to therapeutic anticoagulation (active bleed/surgery)',
      'Cavogram spot films showing infrarenal deployment and filter apex hook engaging snare'
    ],
    applicationSteps: [
      '1. Submit pre-auth request under RGHS/MAAY with duplex ultrasound report.',
      '2. Perform transjugular/transfemoral cavography confirming renal vein origins.',
      '3. Deploy filter in infrarenal IVC (or engage retrieval hook with GooseNeck snare).',
      '4. Submit pre- and post-procedure cavograms for final reimbursement.'
    ],
    ipdAdmissionRequired: false,
    preAuthTurnaroundHours: 2
  },
  pelvic_congestion: {
    primaryScheme: 'RGHS',
    packageCode: 'RGHS-693',
    secondaryPackageCode: 'MAAY-VAS-033',
    icd10Code: 'I86.2',
    packageName: 'Pelvic Congestion Syndrome (PCS) Ovarian Vein Embolization',
    tariffAmountInr: 32000,
    implantReimbursementCeilingInr: 24000,
    approvedImplants: [
      { code: 'IMP 630', name: 'Contour Fibered Platinum Coils Set & STS Foam Sclerosant', price: 19000 },
      { code: 'IMP 631', name: 'Diagnostic Internal Jugular / Femoral Guiding Catheter', price: 7500 }
    ],
    mandatoryPreAuthDocuments: [
      'Transvaginal Doppler USG or Pelvic MRI showing dilated tortuous peri-uterine veins (> 6mm)',
      'Clinical record of chronic non-cyclic pelvic pain > 6 months worsening on standing',
      'Selective ovarian venogram demonstrating retrograde pelvic reflux'
    ],
    applicationSteps: [
      '1. Enter RGHS Card token under Daycare Vascular Interventions.',
      '2. Attach pelvic MRI / Doppler report.',
      '3. Cannulate left ovarian vein and deploy coils from pelvic brim to renal vein takeoff.',
      '4. Upload completion venogram documenting complete cessation of reflux.'
    ],
    ipdAdmissionRequired: false,
    preAuthTurnaroundHours: 2
  },
  thoracic_duct_tde: {
    primaryScheme: 'MAAY',
    packageCode: '2849-VAS-098',
    secondaryPackageCode: 'RGHS-VAS-098',
    icd10Code: 'I89.8',
    packageName: 'Thoracic Duct Embolization / Disruption for Chylothorax',
    tariffAmountInr: 56000,
    implantReimbursementCeilingInr: 45000,
    approvedImplants: [
      { code: 'IMP 640', name: 'Liquid Embolic (Histoacryl Glue / Lipiodol) & Microcoils Pack', price: 26000 },
      { code: 'IMP 641', name: '21G Chiba Transabdominal Needle & Microcatheter', price: 18000 }
    ],
    mandatoryPreAuthDocuments: [
      'Pleural fluid analysis proving chylothorax (Triglycerides > 110 mg/dL, chylomicrons positive)',
      'High-output chest tube drainage log (> 500-1000 mL/day) refractory to conservative fasting',
      'Intranodal lymphangiogram spot films verifying cisterna chyli puncture and duct occlusion'
    ],
    applicationSteps: [
      '1. Apply under Specialized Tertiary Interventions on TMS portal.',
      '2. Attach pleural fluid triglyceride analysis and daily chest tube output chart.',
      '3. Perform ultrasound-guided inguinal lymph node puncture with Lipiodol lymphangiography.',
      '4. Puncture cisterna chyli and embolize thoracic duct with microcoils and glue.',
      '5. Submit completion lymphangiogram showing resolution of chyle leak.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 3
  },
  gae_knee: {
    primaryScheme: 'RGHS',
    packageCode: 'RGHS-ORTH-048',
    secondaryPackageCode: 'MAAY-ORT-048',
    icd10Code: 'M17.1',
    packageName: 'Genicular Artery Embolization (GAE) for Refractory Knee Osteoarthritis',
    tariffAmountInr: 28000,
    implantReimbursementCeilingInr: 25000,
    approvedImplants: [
      { code: 'IMP 650', name: 'Calibrated Embozene / Imipenem-Cilastatin Particulate Suspension', price: 18000 },
      { code: 'IMP 651', name: 'Ultra-Selective Microcatheter (1.7F - 2.0F)', price: 19000 }
    ],
    mandatoryPreAuthDocuments: [
      'Weight-bearing Knee Radiographs & MRI documenting Kellgren-Lawrence Grade 1-3 osteoarthritis',
      'Validated pain and function assessment (WOMAC pain score > 50 or VAS > 50mm)',
      'Selective genicular angiograms documenting hypervascular synovial blush'
    ],
    applicationSteps: [
      '1. Log into RGHS / MAAY portal under Orthopedic / Pain Interventions.',
      '2. Upload knee radiographs and failure of medical therapy/physiotherapy documentation.',
      '3. Superselectively cannulate descending genicular, superomedial, or inferomedial genicular branches.',
      '4. Deliver calibrated microparticles to eliminate hypervascular synovial blush.',
      '5. Submit pre- and post-embolization runs for approval.'
    ],
    ipdAdmissionRequired: false,
    preAuthTurnaroundHours: 2
  },
  vertebroplasty: {
    primaryScheme: 'MAAY',
    packageCode: '2849-ORT-034',
    secondaryPackageCode: 'RGHS-ORTH-034',
    icd10Code: 'M80.0',
    packageName: 'Balloon Kyphoplasty & Vertebroplasty',
    tariffAmountInr: 32000,
    implantReimbursementCeilingInr: 38000,
    approvedImplants: [
      { code: 'IMP 660', name: 'Inflatable Kyphoplasty Balloon Tamp & Pressure Manometer', price: 22000 },
      { code: 'IMP 661', name: 'High-Viscosity Polymethylmethacrylate (PMMA) Bone Cement Kit', price: 12000 }
    ],
    mandatoryPreAuthDocuments: [
      'MRI Spine documenting acute osteoporotic vertebral compression fracture with STIR marrow edema',
      'Non-contrast CT Spine verifying intact posterior wall',
      'Biplane fluoroscopy spot films showing balloon inflation and cement filling'
    ],
    applicationSteps: [
      '1. Submit Spine Interventions dossier on TMS portal.',
      '2. Attach MRI Spine report and pain score.',
      '3. Execute transpedicular balloon kyphoplasty and polymethylmethacrylate cement delivery.',
      '4. Upload final AP and lateral radiographs confirming stable cement fill.'
    ],
    ipdAdmissionRequired: true,
    preAuthTurnaroundHours: 2
  },
  celiac_plexus_block: {
    primaryScheme: 'MAAY',
    packageCode: '1849-ONC-018',
    secondaryPackageCode: 'RGHS-ONC-018',
    icd10Code: 'C25.9',
    packageName: 'Percutaneous Celiac Plexus Neurolysis (CPN)',
    tariffAmountInr: 12500,
    implantReimbursementCeilingInr: 5000,
    approvedImplants: [
      { code: 'IMP 670', name: 'Chiba Neurolysis Needle Set (20G / 22G 15-20cm) & Dehydrated Absolute Alcohol (99%)', price: 4200 }
    ],
    mandatoryPreAuthDocuments: [
      'CT / MRI Abdomen confirming unresectable pancreatic / upper GI malignancy',
      'Palliative care / oncology consultation documenting intractable opioid-refractory visceral pain',
      'CT axial verification film showing contrast distribution around celiac trunk and aorta'
    ],
    applicationSteps: [
      '1. Select Package 1849-ONC-018 on TMS portal under Palliative Interventions.',
      '2. Attach oncology documentation and opioid consumption baseline.',
      '3. Perform retrocrural or transaortic needle placement under CT guidance.',
      '4. Inject dilute contrast confirming anterior retrocrural spread, followed by absolute alcohol.',
      '5. Submit CT verification slices for reimbursement.'
    ],
    ipdAdmissionRequired: false,
    preAuthTurnaroundHours: 2
  },
  permacath_chemoport: {
    primaryScheme: 'MAAY',
    packageCode: '1849-IN042A',
    secondaryPackageCode: 'RGHS-VAS-042',
    icd10Code: 'Z49.0 / Z45.2',
    packageName: 'Tunneled Cuffed Dialysis Catheter (Permacath) / Subcutaneous Chemoport',
    tariffAmountInr: 15500,
    implantReimbursementCeilingInr: 18000,
    approvedImplants: [
      { code: 'IMP 680', name: 'Tunneled Cuffed Hemodialysis Catheter (Split-Cath / Palindrome 14.5F x 28-32cm)', price: 14000 },
      { code: 'IMP 681', name: 'Titanium Subcutaneous Vascular Access Port Set (Chemoport 7F/8F)', price: 16000 }
    ],
    mandatoryPreAuthDocuments: [
      'Nephrology referral for ESRD / Medical Oncology referral for systemic chemotherapy',
      'Ultrasound mapping of internal jugular vein patency',
      'Post-procedure fluoroscopic spot radiograph confirming cavoatrial junction tip placement'
    ],
    applicationSteps: [
      '1. Enter Jan Aadhaar / RGHS token under Daycare Vascular Access module.',
      '2. Attach specialist referral and platelet/coagulation profile.',
      '3. Perform ultrasound-guided right internal jugular vein puncture and subcutaneous tunneling.',
      '4. Save fluoroscopic spot film demonstrating ideal cavoatrial junction tip position.',
      '5. Generate discharge advice with heparin lock protocol and dressing care schedule.'
    ],
    ipdAdmissionRequired: false,
    preAuthTurnaroundHours: 1
  }
};

export function getYojanaRequirementForProtocol(protocolId: string): ProtocolYojanaRequirement {
  const requirement = PROTOCOL_YOJANA_MAPPING[protocolId];
  if (requirement) return requirement;

  return {
    primaryScheme: 'MAAY',
    packageCode: '2849-GEN-001',
    secondaryPackageCode: 'RGHS-GEN-001',
    icd10Code: 'Z98.89',
    packageName: 'Elective Endovascular / Interventional Radiology Procedure',
    tariffAmountInr: 25000,
    implantReimbursementCeilingInr: 20000,
    approvedImplants: [
      { code: 'IMP GEN-01', name: 'Standard IR Catheter & Guidewire Consumable Pack', price: 12000 }
    ],
    mandatoryPreAuthDocuments: [
      'Jan Aadhaar Card / RGHS Card digital token',
      'Diagnostic cross-sectional imaging (CT / MRI / USG) report',
      'Blood investigations (CBC, Coagulation, Renal Function)',
      'Pre-procedure clinical justification note'
    ],
    applicationSteps: [
      '1. Log into TMS portal with Jan Aadhaar token.',
      '2. Select Interventional Radiology elective package.',
      '3. Attach diagnostic imaging and clinical workup report.',
      '4. Obtain pre-authorization TID before proceeding to cath lab.',
      '5. Submit completion angiogram / radiograph with implant stickers.'
    ],
    ipdAdmissionRequired: false,
    preAuthTurnaroundHours: 2
  };
}
