/**
 * Authoritative Clinical Practice Guidelines & Standards of Practice
 * Sourced directly from:
 * CIRSE (Cardiovascular and Interventional Radiological Society of Europe)
 * Standards of Practice and Quality Improvement Guidelines
 *
 * All thresholds, indications, contraindications, antibiotic regimens, and
 * complication classification benchmarks adhere strictly to published CIRSE standards.
 */

export interface ComplicationGrade {
  grade: string;
  category: 'Minor' | 'Moderate' | 'Severe' | 'Catastrophic';
  definition: string;
  expectedRatePercent: number;
  management: string;
}

export interface ClinicalGuidelineItem {
  id: string;
  code: string;
  society: 'CIRSE' | 'SIR';
  procedureName: string;
  title: string;
  year: number;
  evidenceGrade: string;
  organSystem: string;
  summary: string;
  indications: string[];
  contraindications: string[];
  technicalSuccessThreshold: number;
  majorComplicationThreshold: number;
  antibioticProphylaxis: string;
  preProcedureChecklist: string[];
  postProcedureCare: string[];
  gradingCriteria: ComplicationGrade[];
  keyCirsePoints: string[];
}

export const CLINICAL_GUIDELINES: ClinicalGuidelineItem[] = [
  {
    id: 'cirse-tace-2024',
    code: 'CIRSE-TACE-2024',
    society: 'CIRSE',
    procedureName: 'Transarterial Chemoembolization (TACE)',
    title: 'CIRSE Standards of Practice on Hepatic Chemoembolization for Hepatocellular Carcinoma',
    year: 2024,
    evidenceGrade: 'Grade 1A (High Quality Evidence)',
    organSystem: 'Hepatobiliary & Portal',
    summary: 'Gold standard locoregional therapy for intermediate-stage HCC (BCLC Stage B) and bridge/downstaging to liver transplantation.',
    indications: [
      'Intermediate-stage Hepatocellular Carcinoma (BCLC Stage B: multinodular, preserved liver function, ECOG PS 0)',
      'Early-stage HCC (BCLC A) not eligible for surgical resection or percutaneous thermal ablation',
      'Bridging or downstaging to liver transplantation within Milan or UCSF criteria',
      'Hypervascular non-HCC hepatic metastases (e.g. neuroendocrine tumors, colorectal post-chemotherapy)'
    ],
    contraindications: [
      'Decompensated cirrhosis: Child-Pugh Class C, Serum Bilirubin > 3.0 mg/dL, refractory ascites',
      'Untreatable main portal vein trunk tumor thrombosis with hepatofugal portal blood flow',
      'Severe renal impairment: GFR < 30 mL/min/1.73m2 without scheduled hemodialysis',
      'Severe uncorrectable coagulopathy (Platelets < 50,000/uL, INR > 1.7)',
      'Extensive bilobar tumor replacement involving > 50-70% of total liver volume'
    ],
    technicalSuccessThreshold: 95.0,
    majorComplicationThreshold: 3.5,
    antibioticProphylaxis: 'Cefazolin 2g IV or Ciprofloxacin 400mg IV within 60 minutes pre-procedure; add Metronidazole 500mg IV if prior biliary intervention or bilioenteric anastomosis.',
    preProcedureChecklist: [
      'Verify Triphasic CECT or Dynamic Contrast Liver MRI performed within 30 days',
      'Confirm LFT (Bilirubin, Albumin), CBC, Platelets, PT/INR, and Serum Creatinine',
      'Calculate Child-Pugh score, ALBI score, and Cigarroa MACD contrast ceiling',
      'Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 4 hours pre-procedure',
      'Confirm informed written consent and D-1 pre-op fasting (6h solids, 2h clear liquids)'
    ],
    postProcedureCare: [
      'Daycare / ward bed rest with right groin limb immobilization for 6 hours post-manual compression',
      'Continuous pulse oximetry, hourly vitals monitoring, and access site hematoma check',
      'Adequate IV hydration: 1000-1500 mL normal saline over 12 hours to prevent contrast nephropathy',
      'Prophylactic antiemetics (Ondansetron 8mg IV) and analgesics for Post-Embolization Syndrome (PES)',
      'Repeat serum creatinine and LFT at 24-48 hours; outpatient follow-up with contrast imaging at 4-6 weeks'
    ],
    keyCirsePoints: [
      'Superselective catheterization (subsegmental or segmental) is mandatory to minimize non-target parenchymal damage.',
      'Endpoints for cTACE: complete stasis in tumor feeders while preserving flow in parent conduit vessels ("tree in winter" appearance).',
      'For DEB-TACE, delivery should be slow (1 mL per minute) under fluoroscopic roadmapping to prevent early reflux.'
    ],
    gradingCriteria: [
      {
        grade: 'Grade 1',
        category: 'Minor',
        definition: 'Post-Embolization Syndrome (mild fever, nausea, RUQ pain) self-limiting within 48h; no therapy alteration.',
        expectedRatePercent: 40.0,
        management: 'IV hydration, NSAIDs or Paracetamol, antiemetics.'
      },
      {
        grade: 'Grade 2',
        category: 'Moderate',
        definition: 'Access site hematoma < 5cm, or prolonged PES requiring hospital admission extension > 24 hours.',
        expectedRatePercent: 4.5,
        management: 'Bed rest, analgesia, ultrasound surveillance.'
      },
      {
        grade: 'Grade 3',
        category: 'Severe',
        definition: 'Liver abscess, ischemic cholecystitis, femoral pseudoaneurysm, or contrast-induced acute kidney injury (AKI).',
        expectedRatePercent: 2.5,
        management: 'Percutaneous drainage, thrombin injection, or IV nephrology protocol.'
      },
      {
        grade: 'Grade 4',
        category: 'Severe',
        definition: 'Hepatic failure (decompensation in Child-Pugh score), non-target gastrointestinal embolization, or sepsis.',
        expectedRatePercent: 0.8,
        management: 'ICU admission, liver support, urgent endoscopy or surgical consultation.'
      },
      {
        grade: 'Grade 5',
        category: 'Catastrophic',
        definition: 'Procedure-related 30-day mortality.',
        expectedRatePercent: 0.3,
        management: 'Mortality audit, departmental morbidity & mortality review.'
      }
    ]
  },
  {
    id: 'cirse-bae-2023',
    code: 'CIRSE-BAE-2023',
    society: 'CIRSE',
    procedureName: 'Bronchial Artery Embolization (BAE)',
    title: 'CIRSE Standards of Practice on Bronchial Artery Embolisation in Hemoptysis',
    year: 2023,
    evidenceGrade: 'Grade 1B (Strong Recommendation, Moderate Quality Evidence)',
    organSystem: 'Thoracic & Pulmonology',
    summary: 'First-line emergency and definitive endovascular treatment for massive, life-threatening, or recurrent hemoptysis.',
    indications: [
      'Massive hemoptysis (> 300-500 mL in 24 hours) causing hemodynamic compromise or asphyxiation risk',
      'Moderate recurrent hemoptysis (> 100 mL/24h) refractory to medical therapy',
      'Underlying tuberculosis sequelae, bronchiectasis, aspergilloma / mycetoma, lung carcinoma, cystic fibrosis',
      'Pre-operative embolization prior to pulmonary resection to reduce intra-operative blood loss'
    ],
    contraindications: [
      'Absolute: None in acute exsanguinating life-threatening hemoptysis where airway stability is threatened',
      'Severe uncorrectable coagulopathy (relative; address with FFP/platelets concurrently during access)',
      'Severe unmanaged iodinated contrast allergy (relative; consider CO2 or steroid/antihistamine pre-medication)'
    ],
    technicalSuccessThreshold: 92.0,
    majorComplicationThreshold: 2.0,
    antibioticProphylaxis: 'Cefazolin 2g IV or Ampicillin-Sulbactam 3g IV single dose pre-procedure; continue oral antibiotics if secondary to active bacterial lung abscess.',
    preProcedureChecklist: [
      'Confirm patent airway and oxygenation; selective bronchoscopy localization if available',
      'Contrast-enhanced multidetector CT chest (MDCT) with arterial phase to identify hypertrophied bronchial and non-bronchial systemic arteries (NBSAs)',
      'Baseline CBC, Platelets, PT/INR, and Serum Creatinine',
      'Establish large-bore peripheral IV access and prepare emergency endotracheal suctioning',
      'Screen for Spinal Cord Artery (Artery of Adamkiewicz / anterior spinal artery origin) on thoracic angiograms'
    ],
    postProcedureCare: [
      'Continuous pulse oximetry, arterial line blood pressure monitoring, and supplemental oxygen in High Dependency Unit',
      'Bed rest with leg immobilized for 6 hours; monitor femoral puncture site',
      'Serial neurological examinations of lower extremity motor and sensory function every 2 hours x 12 hours (rule out spinal cord ischemia)',
      'Antitussive therapy (Codeine syrup 10-15 mg TDS) to suppress violent coughing fits that disrupt embolized thrombus',
      'Monitor for transient dysphagia or substernal pleuritic chest discomfort'
    ],
    keyCirsePoints: [
      'The anterior spinal artery (Artery of Adamkiewicz) must be actively searched for and ruled out on every selective bronchial run.',
      'Use calibrated microparticles (350-500 um or 500-700 um); strictly avoid particles < 300 um or liquid embolics unless operating with expert superselective microcatheter wedge.',
      'Evaluate non-bronchial systemic arteries (inferior phrenic, internal mammary, intercostal, thyrocervical trunk) in recurrent cases.'
    ],
    gradingCriteria: [
      {
        grade: 'Grade 1',
        category: 'Minor',
        definition: 'Mild transient retrosternal chest tightness, low-grade fever, or self-limiting dysphagia.',
        expectedRatePercent: 25.0,
        management: 'Oral analgesics, proton pump inhibitor, reassurance.'
      },
      {
        grade: 'Grade 2',
        category: 'Moderate',
        definition: 'Puncture site hematoma < 5 cm, or persistent pleuritic pain requiring extended IV analgesia.',
        expectedRatePercent: 4.0,
        management: 'Compression, ultrasound check, paracetamol + tramadol.'
      },
      {
        grade: 'Grade 3',
        category: 'Severe',
        definition: 'Recurrent massive hemoptysis within 72h requiring urgent repeat catheterization, or bronchial wall necrosis.',
        expectedRatePercent: 2.0,
        management: 'Immediate repeat selective angiography, repeat embolization or thoracic surgery consult.'
      },
      {
        grade: 'Grade 4',
        category: 'Severe',
        definition: 'Anterior spinal cord ischemia (paraparesis/paraplegia), systemic non-target stroke, or aortic dissection.',
        expectedRatePercent: 0.3,
        management: 'Urgent neurology review, high-dose IV methylprednisolone, spinal CSF drainage.'
      },
      {
        grade: 'Grade 5',
        category: 'Catastrophic',
        definition: 'Procedure-related death within 30 days (usually secondary to massive asphyxiation from underlying lesion).',
        expectedRatePercent: 0.5,
        management: 'Institutional mortality audit and morbidity review.'
      }
    ]
  },
  {
    id: 'cirse-tips-2024',
    code: 'CIRSE-TIPS-2024',
    society: 'CIRSE',
    procedureName: 'Transjugular Intrahepatic Portosystemic Shunt (TIPS / DIPS)',
    title: 'CIRSE Standards of Practice Guidelines on Transjugular Intrahepatic Portosystemic Shunt',
    year: 2024,
    evidenceGrade: 'Grade 1A (High Quality Evidence)',
    organSystem: 'Hepatobiliary & Portal',
    summary: 'Percutaneous creation of a low-resistance intrahepatic tract connecting hepatic vein to portal vein using dedicated PTFE-covered stent-graft.',
    indications: [
      'Secondary prophylaxis of recurrent variceal hemorrhage failing combined endoscopic and pharmacological therapy',
      'Early / pre-emptive TIPS (within 24-72 hours) in acute variceal bleed for patients at high risk of treatment failure (Child C < 14 or Child B with active bleed)',
      'Refractory ascites or recurrent ascites requiring repeated large-volume paracenteses (> 2 per month)',
      'Budd-Chiari syndrome failing medical therapy and angioplasty (DIPS / TIPS)',
      'Hepatic hydrothorax refractory to diuretic therapy and sodium restriction'
    ],
    contraindications: [
      'Congestive heart failure, severe tricuspid regurgitation, or severe pulmonary arterial hypertension (mean PAP > 45 mmHg)',
      'Severe uncontrolled hepatic encephalopathy (West Haven Grade >= 3) unresponsive to lactulose/rifaximin',
      'Severe active systemic sepsis or uncontrolled intrahepatic biliary infection',
      'Relatively: extensive polycystic liver disease, uncorrectable anatomical cavernous transformation of portal vein without patent intrahepatic radicle',
      'Child-Pugh score > 13 or MELD score > 24 (high early post-procedure mortality risk unless bridge to immediate transplant)'
    ],
    technicalSuccessThreshold: 96.0,
    majorComplicationThreshold: 4.5,
    antibioticProphylaxis: 'Ceftriaxone 2g IV or Piperacillin-Tazobactam 4.5g IV single dose 30-60 minutes prior to jugular puncture.',
    preProcedureChecklist: [
      'Transthoracic Echocardiogram (TTE) to assess right ventricular systolic pressure and ejection fraction',
      'Triphasic CECT or MRI liver with portal venous phase mapping portal bifurcation anatomy and patency',
      'Assess baseline hepatic encephalopathy score and baseline cognitive function',
      'Check INR, Platelets, Serum Creatinine, Total Bilirubin, and calculate MELD-Na score',
      'Pre-procedure Portosystemic Pressure Gradient (PPG) protocol equipment ready (manometer / transducer line)'
    ],
    postProcedureCare: [
      'ICU / Step-down telemetry monitoring for 24 hours post-procedure',
      'Target post-TIPS PPG: reduce to < 12 mmHg or > 50% from baseline to ensure variceal decompression without precipitously inducing HE',
      'Daily assessment of hepatic encephalopathy (asterixis, orientation); initiate prophylactic lactulose/rifaximin if indicated',
      'Baseline Doppler ultrasound of TIPS stent at 24 hours to record baseline velocities (normal 90-190 cm/s)',
      'Long-term surveillance Doppler at 1, 3, 6, and 12 months'
    ],
    keyCirsePoints: [
      'Dedicated PTFE-covered stent-grafts (e.g. Viatorr) must be used as primary device due to vastly superior patency over bare stents.',
      'Controlled expansion (under-dilating to 8mm instead of 10mm initially) provides effective portal decompression while reducing encephalopathy rates.',
      'Variceal embolization (coils/plugs) during TIPS is indicated if large residual gastric or esophageal varices fill spontaneously post-shunt.'
    ],
    gradingCriteria: [
      {
        grade: 'Grade 1',
        category: 'Minor',
        definition: 'Mild neck puncture hematoma, transient low-grade pyrexia (< 38°C), or self-limiting subcapsular blush.',
        expectedRatePercent: 18.0,
        management: 'Local pressure, ice pack, antipyretics.'
      },
      {
        grade: 'Grade 2',
        category: 'Moderate',
        definition: 'Mild to moderate hepatic encephalopathy (West Haven Grade 1-2) readily controlled with lactulose/rifaximin.',
        expectedRatePercent: 15.0,
        management: 'Titrate lactulose (2-3 soft stools/day), add rifaximin 550 mg BD.'
      },
      {
        grade: 'Grade 3',
        category: 'Severe',
        definition: 'Acute stent-graft thrombosis, intrahepatic hematoma, or refractory HE requiring stent-graft reduction/constriction.',
        expectedRatePercent: 3.5,
        management: 'Urgent transjugular re-intervention, thrombectomy/re-ballooning or hourglass reducer stent.'
      },
      {
        grade: 'Grade 4',
        category: 'Severe',
        definition: 'Hepatic capsule rupture with hemoperitoneum, right heart failure decompensation, or severe bilhemia.',
        expectedRatePercent: 1.2,
        management: 'Emergency resuscitation, covered stent across rupture tract, intensive care cardiology management.'
      },
      {
        grade: 'Grade 5',
        category: 'Catastrophic',
        definition: 'Procedure-related 30-day mortality.',
        expectedRatePercent: 1.0,
        management: 'Departmental mortality review and multi-disciplinary liver board audit.'
      }
    ]
  },
  {
    id: 'cirse-ptbd-2023',
    code: 'CIRSE-PTBD-2023',
    society: 'CIRSE',
    procedureName: 'Percutaneous Transhepatic Biliary Drainage (PTBD)',
    title: 'CIRSE Standards of Practice on Percutaneous Biliary Interventions: Drainage, Stenting, and Rendezvous',
    year: 2023,
    evidenceGrade: 'Grade 1A (High Quality Evidence)',
    organSystem: 'Hepatobiliary & Portal',
    summary: 'Image-guided percutaneous biliary decompression via external, external-internal, or self-expanding metallic stent (SEMS) placement.',
    indications: [
      'Malignant biliary obstruction: Cholangiocarcinoma (Klatskin tumor), Gallbladder carcinoma, Pancreatic head adenocarcinoma, Porta hepatis lymphadenopathy',
      'Benign biliary strictures: Post-cholecystectomy bile duct injury, post-liver transplant anastomotic strictures',
      'Acute obstructive suppurative cholangitis with failed or impossible endoscopic retrograde cholangiopancreatography (ERCP)',
      'Biliary fistula, post-operative bile leak, biloma, or traumatic biliary duct disruption'
    ],
    contraindications: [
      'Uncorrectable severe coagulopathy (INR > 1.5, Platelets < 50,000/uL)',
      'Massive refractory ascites (relative; perform paracentesis prior to access to avoid catheter tract dislodgement and peritonitis)',
      'Multiple isolated non-communicating intrahepatic duct dilations where single drainage yields minimal functional liver benefit',
      'Active uncontrolled bacteremia without ongoing intravenous antibiotic coverage'
    ],
    technicalSuccessThreshold: 96.0,
    majorComplicationThreshold: 4.0,
    antibioticProphylaxis: 'Broad-spectrum coverage with Piperacillin-Tazobactam 4.5g IV or Ceftriaxone 2g IV + Metronidazole 500mg IV administered 30-60 minutes pre-procedure.',
    preProcedureChecklist: [
      'Review MRCP or Contrast CT Abdomen to delineate obstruction level (Bismuth-Corlette classification)',
      'Platelet transfusion if platelet count < 50,000/uL; Fresh Frozen Plasma or Vitamin K if INR > 1.5',
      'Ultrasound evaluation of right vs left hepatic lobe access route and ascites depth',
      'Confirm emergency cross-match blood availability (2 units Packed Red Blood Cells on standby)',
      'Patient informed consent detailing potential for external-to-internal conversion or stent placement'
    ],
    postProcedureCare: [
      'Gravity biliary drainage bag attached without traction; secure catheter with Statlock or suture collar',
      'Flush catheter with 5-10 mL sterile normal saline every 12 hours to maintain lumen patency',
      'Daily 24-hour bile output quantification (target 400-800 mL/day)',
      'Monitor for hemobilia, melena, or sudden bile clearing failure; check vitals every 2 hours for 12 hours',
      'Review total bilirubin, alkaline phosphatase, and hemoglobin at 48 hours post-procedure'
    ],
    keyCirsePoints: [
      'Peripheral duct puncture (Segment 3 on the left or Segments 5/6 on the right) is mandatory to minimize major vascular branch injury.',
      'Avoid over-injecting contrast into an obstructed, infected biliary tree to prevent bacteremic septic shower.',
      'Conversion to an internal-external drainage or covered SEMS should be performed once acute cholangitis resolves.'
    ],
    gradingCriteria: [
      {
        grade: 'Grade 1',
        category: 'Minor',
        definition: 'Mild peri-catheter bile soakage or transient low-grade pyrexia (< 38°C) responsive to antipyretics.',
        expectedRatePercent: 12.0,
        management: 'Dressing change, bile bag repositioning.'
      },
      {
        grade: 'Grade 2',
        category: 'Moderate',
        definition: 'Mild transient hemobilia clearing within 24 hours, or catheter kink requiring bedside manipulation.',
        expectedRatePercent: 5.0,
        management: 'Catheter flush, gentle repositioning under fluoroscopy.'
      },
      {
        grade: 'Grade 3',
        category: 'Severe',
        definition: 'Major hemobilia requiring blood transfusion, catheter dislodgement requiring re-puncture, or pleural effusion/pneumothorax.',
        expectedRatePercent: 3.2,
        management: 'Blood transfusion, intercostal drain, or emergency hepatic angiography & embolization.'
      },
      {
        grade: 'Grade 4',
        category: 'Severe',
        definition: 'Septic shock, subcapsular liver hematoma with hemodynamic instability, or hemoperitoneum.',
        expectedRatePercent: 1.0,
        management: 'Intensive care resuscitation, inotropic support, surgical laparotomy or embolization.'
      },
      {
        grade: 'Grade 5',
        category: 'Catastrophic',
        definition: 'Procedure-related 30-day mortality.',
        expectedRatePercent: 0.5,
        management: 'Morbidity & mortality audit and root-cause analysis.'
      }
    ]
  },
  {
    id: 'cirse-pcn-2023',
    code: 'CIRSE-PCN-2023',
    society: 'CIRSE',
    procedureName: 'Percutaneous Nephrostomy (PCN) & Ureteric Stenting',
    title: 'CIRSE Standards of Practice for Percutaneous Nephrostomy and Antegrade Ureteric Stenting',
    year: 2023,
    evidenceGrade: 'Grade 1B (Strong Recommendation, Moderate Quality Evidence)',
    organSystem: 'Genitourinary & Pelvic',
    summary: 'Percutaneous renal pelvic catheter placement for decompression of upper urinary tract obstruction and antegrade double-J stent delivery.',
    indications: [
      'Obstructive uropathy secondary to malignant compression (cervical, bladder, prostate, colorectal carcinoma, pelvic recurrence)',
      'Calculous ureteric obstruction complicated by pyonephrosis, urosepsis, or intractable pain',
      'Ureteric strictures, retroperitoneal fibrosis, or urinary fistulae requiring diversion',
      'Antegrade access for endourological stone extraction, ureteric balloon dilation, or DJ stenting when retrograde approach fails'
    ],
    contraindications: [
      'Uncorrectable severe coagulopathy (INR > 1.5, Platelets < 50,000/uL)',
      'Severe uncontrolled hyperkalemia or acid-base decompensation requiring immediate emergency hemodialysis prior to intervention'
    ],
    technicalSuccessThreshold: 98.0,
    majorComplicationThreshold: 3.0,
    antibioticProphylaxis: 'Ciprofloxacin 400mg IV or Ceftriaxone 1g-2g IV 30-60 minutes pre-procedure; in suspected pyonephrosis, continue therapeutic IV antibiotics.',
    preProcedureChecklist: [
      'Ultrasound or CT KUB documentation of hydronephrosis degree and posterior calyx anatomy',
      'Renal function tests (Creatinine, BUN, Electrolytes - Potassium)',
      'Coagulation screening: PT/INR, aPTT, Platelets',
      'Patient positioning check (prone or prone-oblique with flank cushion support)',
      'Prepare locking pigtail nephrostomy catheter (8.5F or 10F) and 0.035" stiff guidewire'
    ],
    postProcedureCare: [
      'Connect catheter to dependent sterile drainage bag; avoid tension or kink',
      'Monitor urine output volume and color hourly for the first 6 hours',
      'Anticipate post-obstructive diuresis: monitor electrolytes and fluid balance if output > 200 mL/h',
      'Assess for flank pain, hematuria, or fever spikes',
      'Catheter care instructions: flush with 5 mL sterile saline only if catheter stops draining or occludes'
    ],
    keyCirsePoints: [
      'Target puncture through the posterior inferior calyx (Brodels line of avascularity) entering through calyx papilla to minimize lobar arterial hemorrhage.',
      'Never over-distend an infected renal pelvis with contrast during initial nephrostogram to prevent septic bacteremic seeding.',
      'In emergency pyonephrosis decompression, placement of an 8F-10F catheter alone is sufficient; defer antegrade stent manipulation to a second stage.'
    ],
    gradingCriteria: [
      {
        grade: 'Grade 1',
        category: 'Minor',
        definition: 'Mild transient microscopic or pink macroscopic hematuria resolving within 24 hours; minor flank soreness.',
        expectedRatePercent: 30.0,
        management: 'Hydration, oral paracetamol.'
      },
      {
        grade: 'Grade 2',
        category: 'Moderate',
        definition: 'Catheter kink or blockage requiring bedside sterile saline flushing or repositioning.',
        expectedRatePercent: 4.0,
        management: 'Gentle sterile saline flush, fluoroscopy check.'
      },
      {
        grade: 'Grade 3',
        category: 'Severe',
        definition: 'Significant renal hemorrhage requiring blood transfusion, catheter dislodgement, or inadvertent pleural transgression.',
        expectedRatePercent: 2.2,
        management: 'Transfusion, catheter up-sizing to tamponade tract, or selective renal embolization.'
      },
      {
        grade: 'Grade 4',
        category: 'Severe',
        definition: 'Severe septic shock requiring ICU admission, bowel perforation, or retroperitoneal exsanguinating hematoma.',
        expectedRatePercent: 0.8,
        management: 'ICU resuscitation, surgical exploration or emergency microcoil embolization.'
      },
      {
        grade: 'Grade 5',
        category: 'Catastrophic',
        definition: 'Procedure-related mortality within 30 days.',
        expectedRatePercent: 0.2,
        management: 'Clinical audit and morbidity review.'
      }
    ]
  },
  {
    id: 'cirse-evla-2024',
    code: 'CIRSE-EVLA-2024',
    society: 'CIRSE',
    procedureName: 'Endovenous Thermal & Non-Thermal Ablation (EVLA / RFA / VenaSeal)',
    title: 'CIRSE Standards of Practice on Endovenous Thermal and Non-Thermal Ablation of Superficial Venous Incompetence',
    year: 2024,
    evidenceGrade: 'Grade 1A (High Quality Evidence)',
    organSystem: 'Venous & Lymphatic',
    summary: 'Minimally invasive endovenous saphenous vein closure utilizing laser thermal energy, radiofrequency, or cyanoacrylate medical adhesive.',
    indications: [
      'Symptomatic Great Saphenous Vein (GSV) or Small Saphenous Vein (SSV) incompetence with CEAP Class C2-C6',
      'Active or healed venous leg ulceration (CEAP C5-C6) with documented saphenous reflux > 500 ms',
      'Recurrent superficial venous thrombophlebitis or venous hemorrhage from lower limb varicosities',
      'Venous claudication, stasis dermatitis, or lipodermatosclerosis unresponsive to compression therapy'
    ],
    contraindications: [
      'Acute deep vein thrombosis (DVT) involving the femoral, popliteal, or iliac venous system',
      'Severe peripheral arterial occlusive disease (Ankle-Brachial Index ABI < 0.5 or ankle pressure < 50 mmHg)',
      'Non-ambulatory or bed-bound patient unable to participate in mandatory early post-op ambulation',
      'Known severe allergy to local tumescent anesthetic agents (Lidocaine)'
    ],
    technicalSuccessThreshold: 98.0,
    majorComplicationThreshold: 1.5,
    antibioticProphylaxis: 'Routine systemic antibiotics not recommended unless active infected venous ulcer present (CEAP C6).',
    preProcedureChecklist: [
      'Duplex ultrasound mapping performed standing: measure GSV diameter at SFJ, mid-thigh, and knee',
      'Confirm Saphenofemoral Junction (SFJ) reflux duration > 500 ms (0.5 seconds)',
      'Confirm palpable pedal pulses (Dorsalis Pedis, Posterior Tibial) and calculate ABI',
      'Prepare tumescent anesthesia: 500 mL 0.9% NaCl + 35 mL 2% Lidocaine + 1 mL 1:1000 Epinephrine + 5 mL 8.4% Sodium Bicarbonate',
      'Select laser wavelength: 1470 nm radial emitting laser fiber with calibrated pullback device'
    ],
    postProcedureCare: [
      'Apply Class II (20-30 mmHg) graduated compression stockings immediately in recovery suite',
      'Mandatory continuous ambulation for 30-45 minutes immediately post-procedure before discharge',
      'Maintain continuous compression for 48 hours, followed by daytime compression for 2 weeks',
      'Prescribe oral NSAIDs (Ibuprofen 400mg TDS with food) for 5-7 days; avoid prolonged bed rest',
      'Routine follow-up venous duplex ultrasound at 7-14 days to confirm vein occlusion and rule out EHIT'
    ],
    keyCirsePoints: [
      'Laser fiber tip must be positioned strictly 2.0 to 2.5 cm distal to the epigastric vein junction / SFJ under direct ultrasound visualization.',
      'Adequate perivenous tumescent fluid halo (> 10 mm circumferential separation) is critical to protect adjacent skin and nerves.',
      'Radial firing fibers operating at 1470 nm dramatically reduce post-operative ecchymosis and pain compared to bare-tip fibers.'
    ],
    gradingCriteria: [
      {
        grade: 'Grade 1',
        category: 'Minor',
        definition: 'Mild ecchymosis, induration along treated vein segment, or minor paresthesia resolving spontaneously.',
        expectedRatePercent: 15.0,
        management: 'Compression stockings, topical heparinoid gel, oral analgesics.'
      },
      {
        grade: 'Grade 2',
        category: 'Moderate',
        definition: 'Endovenous Heat-Induced Thrombosis (EHIT Class 1: thrombus flush with SFJ; or Class 2: thrombus < 50% lumen).',
        expectedRatePercent: 2.0,
        management: 'Weekly duplex surveillance, antiplatelet or prophylactic LMWH.'
      },
      {
        grade: 'Grade 3',
        category: 'Severe',
        definition: 'EHIT Class 3/4 (thrombus > 50% femoral lumen or occlusive DVT), skin thermal burn, or sural/saphenous nerve motor deficit.',
        expectedRatePercent: 0.8,
        management: 'Therapeutic therapeutic anticoagulation (DOAC or LMWH for 3 months), burn wound protocol.'
      },
      {
        grade: 'Grade 4',
        category: 'Severe',
        definition: 'Pulmonary embolism (PE), major access site arteriovenous fistula, or severe systemic local anesthetic toxicity (LAST).',
        expectedRatePercent: 0.1,
        management: 'Immediate intubation, 20% lipid emulsion resuscitation, ICU admission.'
      },
      {
        grade: 'Grade 5',
        category: 'Catastrophic',
        definition: 'Procedure-related 30-day mortality.',
        expectedRatePercent: 0.01,
        management: 'Hospital sentinel event investigation.'
      }
    ]
  },
  {
    id: 'cirse-uae-2024',
    code: 'CIRSE-UAE-2024',
    society: 'CIRSE',
    procedureName: 'Uterine Artery Embolization (UAE / UFE)',
    title: 'CIRSE Standards of Practice on Uterine Artery Embolisation for Symptomatic Fibroids and Adenomyosis',
    year: 2024,
    evidenceGrade: 'Grade 1A (High Quality Evidence)',
    organSystem: 'Genitourinary & Pelvic',
    summary: 'Targeted bilateral catheter-directed transcatheter embolization of uterine arteries using calibrated microspheres to treat fibroids and adenomyosis.',
    indications: [
      'Symptomatic uterine leiomyomata causing heavy menstrual bleeding (menorrhagia), anemia, or bulk-related pelvic pressure/frequency',
      'Symptomatic diffuse or focal uterine adenomyosis refractory to medical and hormonal therapy in patients desiring uterine preservation',
      'Acute or intractable postpartum hemorrhage failing conservative uterotonic therapy',
      'Pelvic arteriovenous malformations (AVMs) or uterine cervical ectopic pregnancies'
    ],
    contraindications: [
      'Current confirmed intrauterine pregnancy',
      'Active pelvic infection, pelvic inflammatory disease (PID), or untreated cervicitis/endometritis',
      'Known or strongly suspected gynecologic malignancy (uterine leiomyosarcoma, endometrial carcinoma)',
      'Severe unmanaged anaphylactoid iodinated contrast allergy'
    ],
    technicalSuccessThreshold: 97.0,
    majorComplicationThreshold: 2.5,
    antibioticProphylaxis: 'Cefazolin 2g IV or Ampicillin-Sulbactam 1.5g-3g IV single dose administered within 60 minutes prior to arterial puncture.',
    preProcedureChecklist: [
      'Pelvic Contrast MRI (or transvaginal ultrasound) documenting fibroid number, dominant size, vascularity, and rule out adenomyosis/sarcoma',
      'Confirm negative serum beta-hCG pregnancy test within 24 hours of procedure',
      'Coagulation profile (PT/INR, aPTT, Platelets) and complete hemogram for baseline hemoglobin',
      'Standardize multimodal pre-procedure pain management: PCA pump or scheduled NSAIDs + Paracetamol + antiemetics',
      'Discuss post-embolization syndrome expectations and fertility implications'
    ],
    postProcedureCare: [
      'Hospitalization in gynecology/IR ward for 24 hours for intensive pain control and hydration',
      'Scheduled IV NSAIDs (Ketorolac 15-30mg IV q8h or Diclofenac) + Paracetamol 1g IV q6h; rescue opioid PCA',
      'Routine antiemetics (Ondansetron 8mg IV) for post-embolization nausea',
      'Monitor for vaginal discharge or transcervical tissue sloughing (expulsion of submucosal fibroids)',
      'Post-procedure follow-up clinical evaluation and contrast pelvic MRI at 3 to 6 months'
    ],
    keyCirsePoints: [
      'Superselective catheterization past the cervicovaginal branch is critical to prevent ischemic vaginal necrosis.',
      'Use calibrated spherical particles (500-700 um or 700-900 um); avoid small particles (< 300 um) which cause ovarian failure and necrosis.',
      'Endpoint is "pruned tree" appearance: sluggish flow with 3-5 cardiac beats clearance in the main uterine artery trunk.'
    ],
    gradingCriteria: [
      {
        grade: 'Grade 1',
        category: 'Minor',
        definition: 'Standard Post-Embolization Syndrome (pelvic cramps, low-grade fever, nausea, fatigue) resolving within 48-72h.',
        expectedRatePercent: 75.0,
        management: 'Scheduled NSAIDs, paracetamol, antiemetics, oral hydration.'
      },
      {
        grade: 'Grade 2',
        category: 'Moderate',
        definition: 'Prolonged pelvic pain or non-purulent vaginal discharge requiring extended prescription analgesics > 1 week.',
        expectedRatePercent: 6.0,
        management: 'Oral analgesics, gynecology outpatient review.'
      },
      {
        grade: 'Grade 3',
        category: 'Severe',
        definition: 'Transcervical expulsion of submucosal fibroid requiring hysteroscopic or vaginal resection, or puncture site pseudoaneurysm.',
        expectedRatePercent: 2.0,
        management: 'Hysteroscopic extraction, thrombin injection of pseudoaneurysm.'
      },
      {
        grade: 'Grade 4',
        category: 'Severe',
        definition: 'Severe uterine necrosis / pyometra requiring emergency hysterectomy, or premature permanent ovarian failure.',
        expectedRatePercent: 0.5,
        management: 'Urgent gynecologic surgical consultation, total abdominal hysterectomy, IV broad-spectrum antibiotics.'
      },
      {
        grade: 'Grade 5',
        category: 'Catastrophic',
        definition: 'Procedure-related mortality within 30 days (extremely rare, usually sepsis).',
        expectedRatePercent: 0.02,
        management: 'Morbidity & mortality conference and peer review audit.'
      }
    ]
  },
  {
    id: 'cirse-pad-2023',
    code: 'CIRSE-PAD-2023',
    society: 'CIRSE',
    procedureName: 'Peripheral Arterial Disease (PAD) / SFA & BTK Revascularization',
    title: 'CIRSE Standards of Practice for Endovascular Treatment of Femoropopliteal and Below-the-Knee Arterial Disease',
    year: 2023,
    evidenceGrade: 'Grade 1A (High Quality Evidence)',
    organSystem: 'Vascular & Arterial',
    summary: 'Percutaneous balloon angioplasty (DCB), bare-metal and drug-eluting stenting, or atherectomy for lower extremity ischemia.',
    indications: [
      'Chronic Limb-Threatening Ischemia (CLTI, Rutherford Categories 4-6: ischemic rest pain, non-healing ulcer, gangrene)',
      'Severe lifestyle-limiting intermittent claudication (Rutherford 3) failing 3-6 months of supervised exercise and optimal medical therapy',
      'Subacute or acute limb ischemia in conjunction with catheter-directed thrombolysis or mechanical thrombectomy'
    ],
    contraindications: [
      'Absence of viable distal arterial runoff bed in patients without reconstructible targets (requires multidisciplinary amputation review)',
      'Extensive necrotizing soft-tissue infection or ascending gas gangrene requiring emergent surgical debridement before revascularization',
      'Severe unmitigated coagulopathy or profound contrast anaphylaxis'
    ],
    technicalSuccessThreshold: 93.0,
    majorComplicationThreshold: 3.8,
    antibioticProphylaxis: 'Cefazolin 2g IV single dose administered within 60 minutes prior to arterial puncture for all procedures involving permanent stent placement.',
    preProcedureChecklist: [
      'Diagnostic Arterial Duplex Ultrasound or CT Angiography (CTA) / MR Angiography (MRA) of aorta-bilateral lower extremities',
      'Calculate baseline Ankle-Brachial Index (ABI) and baseline toe systolic pressure',
      'Dual Antiplatelet Therapy (DAPT: Aspirin 75-100 mg + Clopidogrel 75 mg OD) loading dose administered pre-procedure',
      'Renal function assessment and Cigarroa MACD calculation',
      'Plan access strategy (contralateral crossover femoral, antegrade ipsilateral femoral, or retrograde pedal/tibial access)'
    ],
    postProcedureCare: [
      'Immobilize punctured limb; monitor puncture site for hematoma, bruit, or bleeding for 6 hours',
      'Perform hourly pedal pulse checks (Dorsalis Pedis and Posterior Tibial palpation and Doppler)',
      'Continuous DAPT (Aspirin + Clopidogrel) for minimum 1-3 months post-DCB, and 3-6 months post-stenting',
      'Maintain high-intensity statin therapy (Atorvastatin 80 mg or Rosuvastatin 20-40 mg OD)',
      'Post-procedure ABI measurement before discharge; follow-up duplex ultrasound at 1, 6, and 12 months'
    ],
    keyCirsePoints: [
      'Drug-coated balloons (DCB) and drug-eluting stents (DES) significantly reduce target lesion revascularization (TLR) compared to plain balloons.',
      'Prolonged balloon inflation (at least 2-3 minutes) reduces elastic recoil and flow-limiting dissection rates.',
      'Maintain intra-procedural therapeutic anticoagulation with unfractionated heparin (5000 IU bolus, target ACT 250-300 seconds).'
    ],
    gradingCriteria: [
      {
        grade: 'Grade 1',
        category: 'Minor',
        definition: 'Mild groin hematoma < 5 cm, non-flow-limiting dissection successfully resolved with prolonged balloon inflations.',
        expectedRatePercent: 12.0,
        management: 'Manual compression, clinical observation.'
      },
      {
        grade: 'Grade 2',
        category: 'Moderate',
        definition: 'Flow-limiting dissection requiring bailout bare-metal or covered stent placement, or distal spasm.',
        expectedRatePercent: 5.0,
        management: 'Bailout stenting, intra-arterial nitroglycerin.'
      },
      {
        grade: 'Grade 3',
        category: 'Severe',
        definition: 'Distal thromboembolism requiring aspiration or thrombolysis, access site pseudoaneurysm, or contrast-induced AKI.',
        expectedRatePercent: 2.8,
        management: 'Thromboaspiration, thrombin injection of pseudoaneurysm, IV hydration.'
      },
      {
        grade: 'Grade 4',
        category: 'Severe',
        definition: 'Arterial rupture requiring emergency covered stent or surgical bypass, acute limb compartment syndrome, or major amputation.',
        expectedRatePercent: 0.9,
        management: 'Immediate covered stent deployment, surgical fasciotomy or vascular reconstruction.'
      },
      {
        grade: 'Grade 5',
        category: 'Catastrophic',
        definition: 'Procedure-related 30-day mortality.',
        expectedRatePercent: 0.3,
        management: 'Morbidity & mortality conference and vascular surgery audit.'
      }
    ]
  },
  {
    id: 'cirse-ablation-2024',
    code: 'CIRSE-ABLATION-2024',
    society: 'CIRSE',
    procedureName: 'Percutaneous Thermal Ablation of Liver Tumors (RFA / MWA / Cryo)',
    title: 'CIRSE Standards of Practice for Thermal Ablation of Liver Tumours',
    year: 2024,
    evidenceGrade: 'Grade 1A (High Quality Evidence)',
    organSystem: 'Oncology & Ablation',
    summary: 'Curative-intent thermal destruction of primary hepatocellular carcinoma or oligometastatic colorectal liver metastases.',
    indications: [
      'Very early and early-stage HCC (BCLC Stage 0/A: solitary nodule <= 3 cm, or up to 3 nodules <= 3 cm each) as curative intent',
      'HCC recurrence post-resection with preserved hepatic functional reserve (Child-Pugh A/B)',
      'Oligometastatic colorectal liver metastases (<= 3-5 lesions, <= 3 cm) in surgical non-candidates or combined with resection',
      'Bridging therapy to liver transplantation to maintain patient within Milan criteria'
    ],
    contraindications: [
      'Tumor directly abutting main bile duct or primary biliary confluence (high risk of thermal biliary stricture/necrosis)',
      'Uncorrectable severe coagulopathy (Platelets < 50,000/uL, INR > 1.5)',
      'Decompensated cirrhosis: Child-Pugh Class C, intractable ascites, severe jaundice (Bilirubin > 3.0 mg/dL)',
      'Tumor direct contact with bowel or stomach without feasibility of hydrodissection or artificial ascites separation'
    ],
    technicalSuccessThreshold: 95.0,
    majorComplicationThreshold: 2.8,
    antibioticProphylaxis: 'Cefazolin 2g IV 30-60 minutes pre-procedure; add Metronidazole 500mg IV if prior bilioenteric anastomosis or sphincterotomy.',
    preProcedureChecklist: [
      'Contrast-enhanced liver imaging (CECT or MRI) performed within 30 days to define tumor diameter and margins',
      'Evaluate tumor relation to gallbladder, bowel, diaphragm, and major vascular/biliary trunks',
      'Confirm platelet count >= 50,000/uL and INR <= 1.5',
      'Select ablation modality: Microwave (MWA) for faster heating and reduced heat-sink effect, or RFA / Cryoablation',
      'Prepare 5% Dextrose in Water (D5W) for protective hydrodissection if lesion is subcapsular or adjacent to bowel'
    ],
    postProcedureCare: [
      'Post-ablation monitoring in recovery suite: continuous pulse oximetry, blood pressure, and abdominal examination for 4-6 hours',
      'Immediate contrast-enhanced CT or ultrasound at conclusion or Day 1 to confirm complete ablation zone with >= 5mm safety margin',
      'Monitor for Post-Ablation Syndrome (low-grade fever, malaise, RUQ pain, transient transaminitis)',
      'Discharge on oral analgesics (Paracetamol / NSAIDs) and antiemetics',
      'Routine follow-up triphasic CECT or dynamic MRI at 1, 3, 6, and 12 months to monitor for local recurrence'
    ],
    keyCirsePoints: [
      'A complete circumferential ablative margin of at least 5 mm (ideally 10 mm) of normal liver parenchyma beyond the tumor edge is required for technical success.',
      'Hydrodissection (infusion of D5W or sterile water) must be utilized whenever the tumor is within 5-10 mm of hollow abdominal viscera or the diaphragm.',
      'Microwave ablation (MWA) is preferred over RFA for tumors > 2.5 cm or those adjacent to large vessels (> 3mm) due to superior thermal convection and minimal heat-sink effect.'
    ],
    gradingCriteria: [
      {
        grade: 'Grade 1',
        category: 'Minor',
        definition: 'Mild Post-Ablation Syndrome (transient fever, fatigue, minor RUQ soreness), mild asymptomatic transaminitis.',
        expectedRatePercent: 35.0,
        management: 'Symptomatic therapy with paracetamol, hydration.'
      },
      {
        grade: 'Grade 2',
        category: 'Moderate',
        definition: 'Moderate pain requiring extended parenteral analgesics, or minor pleural effusion not requiring thoracentesis.',
        expectedRatePercent: 4.5,
        management: 'Analgesics, clinical observation.'
      },
      {
        grade: 'Grade 3',
        category: 'Severe',
        definition: 'Liver abscess requiring percutaneous drainage, subcapsular hematoma requiring transfusion, or thermal pneumothorax.',
        expectedRatePercent: 2.0,
        management: 'Percutaneous drain placement, blood transfusion, intercostal drain.'
      },
      {
        grade: 'Grade 4',
        category: 'Severe',
        definition: 'Hollow viscus perforation (duodenum/colon) requiring emergency laparotomy, major bile duct stricture, or tumor seeding along tract.',
        expectedRatePercent: 0.6,
        management: 'Immediate emergency surgical exploration, bowel resection, or biliary stenting.'
      },
      {
        grade: 'Grade 5',
        category: 'Catastrophic',
        definition: 'Procedure-related 30-day mortality.',
        expectedRatePercent: 0.2,
        management: 'Morbidity & mortality departmental audit.'
      }
    ]
  },
  {
    id: 'cirse-biopsy-2023',
    code: 'CIRSE-BIOPSY-2023',
    society: 'CIRSE',
    procedureName: 'Image-Guided Percutaneous Needle Biopsy',
    title: 'CIRSE Standards of Practice for Percutaneous Image-Guided Core-Needle and Fine-Needle Biopsy',
    year: 2023,
    evidenceGrade: 'Grade 1B (Strong Recommendation, Moderate Quality Evidence)',
    organSystem: 'Oncology & Ablation',
    summary: 'Percutaneous ultrasound or CT-guided tissue sampling for histopathologic diagnosis and next-generation molecular profiling.',
    indications: [
      'Diagnostic tissue acquisition from solid organs (liver, kidney, lung, pancreas, retroperitoneum, bone, soft tissue)',
      'Subtyping and immunohistochemical / molecular biomarker profiling of suspected primary or metastatic malignancies',
      'Sampling of non-neoplastic parenchymal diseases (medical renal disease, hepatitis, interstitial lung disease)',
      'Microbiological culture of suspected occult infection or abscess'
    ],
    contraindications: [
      'Severe uncorrectable bleeding diathesis (Platelets < 50,000/uL, INR > 1.5)',
      'Lack of a safe imaging access trajectory without traversing major vascular structures or intervening bowel',
      'Uncooperative patient unable to hold breath or remain immobile under local anesthesia',
      'Echinococcal (hydatid) cyst with risk of anaphylactic rupture and peritoneal dissemination'
    ],
    technicalSuccessThreshold: 96.0,
    majorComplicationThreshold: 1.8,
    antibioticProphylaxis: 'Routine antibiotics not indicated for clean solid parenchymal biopsies; indicated if traversing infected or contaminated cavities.',
    preProcedureChecklist: [
      'Review pre-procedural imaging (US, CT, MRI, or PET-CT) to delineate target lesion viability vs central necrosis',
      'Confirm baseline coagulation: PT/INR, aPTT, Platelet count',
      'Hold anticoagulant and antiplatelet medications according to CIRSE / SIR bleeding risk consensus guidelines',
      'Select needle type: 16G-18G automated cutting core needle for histology; 20G-22G fine needle for cytology/FNA',
      'Verify informed written consent and perform timeout verification'
    ],
    postProcedureCare: [
      'Position patient with biopsy site dependent (e.g. right lateral decubitus for liver biopsy) to promote tract tamponade',
      'Monitor vitals every 15 minutes for 1 hour, then every 30 minutes for 2 hours',
      'For lung biopsy: obtain post-procedure upright chest radiograph at 2-4 hours to rule out pneumothorax',
      'Strict bed rest for 2-4 hours; evaluate puncture site for bleeding or hematoma',
      'Discharge criteria: stable hemodynamics, absence of severe pain, and no active hemorrhage'
    ],
    keyCirsePoints: [
      'Coaxial needle technique is strongly recommended to allow multiple core samples with a single pleural or capsule puncture.',
      'Sample the non-necrotic periphery of large lesions under real-time color Doppler guidance to avoid vascular lacunae.',
      'Tract embolization (with gelatin sponge slurry or bioabsorbable plugs) significantly reduces post-biopsy hemorrhage in high-risk parenchymal biopsies.'
    ],
    gradingCriteria: [
      {
        grade: 'Grade 1',
        category: 'Minor',
        definition: 'Mild local site tenderness, small asymptomatic subcapsular hematoma, or trace asymptomatic pneumothorax (< 10%).',
        expectedRatePercent: 15.0,
        management: 'Reassurance, oral analgesics, observation.'
      },
      {
        grade: 'Grade 2',
        category: 'Moderate',
        definition: 'Mild hemoptysis (< 30 mL) or small hematoma requiring extended ward observation > 4 hours.',
        expectedRatePercent: 3.0,
        management: 'Supplemental oxygen, bed rest, vitals surveillance.'
      },
      {
        grade: 'Grade 3',
        category: 'Severe',
        definition: 'Symptomatic pneumothorax requiring chest tube drainage, or hematoma requiring blood transfusion.',
        expectedRatePercent: 1.2,
        management: 'Small-bore chest drain insertion (8F-12F) with Heimlich valve, blood transfusion.'
      },
      {
        grade: 'Grade 4',
        category: 'Severe',
        definition: 'Severe hemorrhage requiring transcatheter arterial embolization, tension pneumothorax, or tumor tract seeding.',
        expectedRatePercent: 0.4,
        management: 'Immediate selective embolization, emergency thoracostomy, surgical resection of tract.'
      },
      {
        grade: 'Grade 5',
        category: 'Catastrophic',
        definition: 'Procedure-related 30-day mortality (extremely rare, usually air embolism or massive hemorrhage).',
        expectedRatePercent: 0.05,
        management: 'Morbidity & mortality conference audit.'
      }
    ]
  },
  {
    id: 'cirse-gibleed-2024',
    code: 'CIRSE-GIBLEED-2024',
    society: 'CIRSE',
    procedureName: 'Transcatheter Arterial Embolization (TAE) for Acute GI Bleeding',
    title: 'CIRSE Standards of Practice for Endovascular Management of Acute Non-Variceal Upper and Lower Gastrointestinal Bleeding',
    year: 2024,
    evidenceGrade: 'Grade 1B (Strong Recommendation, Moderate Quality Evidence)',
    organSystem: 'Gastrointestinal & Mesenteric',
    summary: 'Emergency endovascular selective catheterization and transcatheter embolization for acute life-threatening non-variceal gastrointestinal hemorrhage.',
    indications: [
      'Acute upper or lower gastrointestinal hemorrhage with persistent hemodynamic instability failing endoscopic intervention',
      'Massive GI bleeding where endoscopy is technically unfeasible or contraindicated',
      'Bleeding peptic ulcer disease with high-risk endoscopic stigmata (Forrest Ia/Ib or IIa) after rebleeding',
      'Lower GI diverticular hemorrhage, angiodysplasia, post-polypectomy bleeding, Dieulafoy lesion, or mesenteric pseudoaneurysms'
    ],
    contraindications: [
      'Active severe mesenteric ischemia or bowel infarction where embolization would precipitate transmural gangrene',
      'Relative: diffuse mucosal bleeding without identifiable arterial target (requires medical/pharmacological stabilization)'
    ],
    technicalSuccessThreshold: 92.0,
    majorComplicationThreshold: 4.2,
    antibioticProphylaxis: 'Cefazolin 2g IV or Ampicillin-Sulbactam 3g IV administered pre-procedure; in bowel perforation or peritonitis, use broad-spectrum Piperacillin-Tazobactam.',
    preProcedureChecklist: [
      'Immediate resuscitation: establish two large-bore IVs, infuse warmed crystalloids and initiate blood component therapy',
      'Multiphase CT Angiography (CTA Abdomen & Pelvis) with unenhanced, arterial, and portal venous phases to locate extravasation (detects bleeding >= 0.3 mL/min)',
      'Baseline CBC, Coagulation (PT/INR, aPTT, Fibrinogen), and Serum Creatinine',
      'Maintain active cross-match of 4 units Packed Red Blood Cells',
      'Prepare coaxial microcatheter system (2.0F-2.4F) and microcoils / gelatin sponge particles'
    ],
    postProcedureCare: [
      'Admit to Intensive Care Unit (ICU) or High Dependency Unit for continuous invasive hemodynamic monitoring',
      'Serial hemoglobin / hematocrit checks every 4-6 hours for the first 24 hours',
      'Frequent abdominal examinations to evaluate for rebound tenderness, guarding, or peritoneal signs of bowel ischemia',
      'Maintain IV high-dose Proton Pump Inhibitor infusion (Pantoprazole 80 mg bolus + 8 mg/h) for upper GI bleeds',
      'Monitor for delayed rebleeding (target rebleeding rate < 15-20%)'
    ],
    keyCirsePoints: [
      'Empirical / blind embolization (e.g. sandwich coiling of gastroduodenal artery) is justified in recurrent severe upper GI bleeding even when active extravasation is not visualized on angiogram, provided endoscopic clips mark the ulcer.',
      'Superselective catheterization using microcatheters directly into the vasa recta or marginal artery of Drummond is essential in lower GI bleeding to prevent ischemic bowel infarction.',
      'Microcoils and gelatin sponge are the primary embolic agents; avoid liquid tissue adhesives (glue) in lower GI unless operating with advanced superselective control.'
    ],
    gradingCriteria: [
      {
        grade: 'Grade 1',
        category: 'Minor',
        definition: 'Mild self-limiting groin hematoma < 5 cm, transient localized abdominal cramping.',
        expectedRatePercent: 12.0,
        management: 'Local pressure, oral paracetamol.'
      },
      {
        grade: 'Grade 2',
        category: 'Moderate',
        definition: 'Transient ileus or localized mucosal ischemia resolving with conservative bowel rest.',
        expectedRatePercent: 6.0,
        management: 'NPO, IV fluids, clinical surveillance.'
      },
      {
        grade: 'Grade 3',
        category: 'Severe',
        definition: 'Early clinical rebleeding within 72h requiring repeat angiographic embolization or urgent surgery, access pseudoaneurysm.',
        expectedRatePercent: 3.5,
        management: 'Repeat selective angiography and embolization, thrombin injection of pseudoaneurysm.'
      },
      {
        grade: 'Grade 4',
        category: 'Severe',
        definition: 'Transmural ischemic bowel infarction or bowel perforation requiring emergency surgical laparotomy and bowel resection.',
        expectedRatePercent: 1.8,
        management: 'Immediate exploratory laparotomy, segment resection, temporary stoma.'
      },
      {
        grade: 'Grade 5',
        category: 'Catastrophic',
        definition: 'Procedure-related 30-day mortality (usually secondary to underlying multi-organ failure and hemorrhagic shock).',
        expectedRatePercent: 1.5,
        management: 'Morbidity & mortality conference review.'
      }
    ]
  },
  {
    id: 'cirse-ivcf-2023',
    code: 'CIRSE-IVCF-2023',
    society: 'CIRSE',
    procedureName: 'Inferior Vena Cava (IVC) Filter Placement & Retrieval',
    title: 'CIRSE Standards of Practice for the Placement and Retrieval of Inferior Vena Cava Filters',
    year: 2023,
    evidenceGrade: 'Grade 1A (High Quality Evidence)',
    organSystem: 'Venous & Lymphatic',
    summary: 'Percutaneous deployment of mechanical caval filtration devices to prevent pulmonary embolism, with structured follow-up retrieval protocols.',
    indications: [
      'Documented acute venous thromboembolism (proximal DVT or PE) with an absolute contraindication to therapeutic anticoagulation',
      'Documented acute VTE with severe bleeding complication necessitating cessation of therapeutic anticoagulation',
      'Failure of adequate therapeutic anticoagulation with objectively documented recurrent pulmonary embolism',
      'Optional / Prophylactic: high-risk polytrauma with immobilized spine/pelvis fractures where anticoagulation is contraindicated'
    ],
    contraindications: [
      'Uncorrectable lack of venous access (occluded femoral and jugular veins)',
      'Complete occlusive thrombosis of the entire inferior vena cava (precludes infrarenal deployment)',
      'Patient with active bacteremia or severe systemic sepsis (risk of persistent filter colonization and abscess)'
    ],
    technicalSuccessThreshold: 99.0,
    majorComplicationThreshold: 1.0,
    antibioticProphylaxis: 'Routine systemic antibiotic prophylaxis not recommended; strict aseptic surgical draping and chlorhexidine prep.',
    preProcedureChecklist: [
      'Confirm venous duplex ultrasound or CT demonstrating proximal DVT / PE and document contraindication to anticoagulation',
      'Perform preliminary cavogram to verify IVC transverse diameter (< 28 mm for standard filters; megacava filters if 28-35 mm)',
      'Locate renal vein inflows (lowest renal vein orifice) to ensure strictly infrarenal deployment',
      'Exclude congenital anomalies: duplicated IVC, left-sided IVC, or circumaortic renal veins',
      'Establish a formal institutional filter registry tracking retrieval plan within 6-12 weeks'
    ],
    postProcedureCare: [
      'Immobilize punctured groin (or neck) for 2 hours post-manual compression',
      'Resume therapeutic anticoagulation as soon as the contraindication has resolved',
      'Mandatory registration of the patient into the institutional CIRSE-compliant IVC Filter Retrieval Registry',
      'Schedule routine retrieval clinic visit and abdominal X-ray at 4-8 weeks post-placement',
      'Attempt filter retrieval immediately once the risk of PE diminishes and anticoagulation is tolerated'
    ],
    keyCirsePoints: [
      'All placed retrievable filters must have a documented management plan; retrieval should be attempted as soon as the transient contraindication to anticoagulation resolves.',
      'The filter apex must be positioned directly at or immediately inferior to the lowest renal vein ostium to prevent suprarenal stagnation and thrombosis.',
      'Advanced retrieval techniques (endobronchial forceps, loop snares, laser sheath) achieve high retrieval success (> 95%) even in prolonged dwell times with tilted embedded hooks.'
    ],
    gradingCriteria: [
      {
        grade: 'Grade 1',
        category: 'Minor',
        definition: 'Mild puncture site hematoma, transient insertion site ache.',
        expectedRatePercent: 8.0,
        management: 'Local pressure, reassurance.'
      },
      {
        grade: 'Grade 2',
        category: 'Moderate',
        definition: 'Filter tilt > 15 degrees without caval perforation, or minor intraluminal thrombus trapped in filter apex (< 25%).',
        expectedRatePercent: 3.5,
        management: 'Follow-up imaging, therapeutic anticoagulation.'
      },
      {
        grade: 'Grade 3',
        category: 'Severe',
        definition: 'Caval wall strut penetration > 3 mm into surrounding retroperitoneum or duodenal wall, or failed routine retrieval attempt.',
        expectedRatePercent: 1.5,
        management: 'Cross-sectional CT imaging, secondary advanced endovascular retrieval procedure.'
      },
      {
        grade: 'Grade 4',
        category: 'Severe',
        definition: 'Complete caval thrombosis, filter migration/embolization to right atrium/pulmonary artery, or aortic perforation.',
        expectedRatePercent: 0.4,
        management: 'Urgent endovascular retrieval, catheter-directed thrombolysis, or cardiothoracic surgical extraction.'
      },
      {
        grade: 'Grade 5',
        category: 'Catastrophic',
        definition: 'Procedure-related mortality within 30 days.',
        expectedRatePercent: 0.05,
        management: 'Institutional mortality audit and Root Cause Analysis.'
      }
    ]
  },
  {
    id: 'cirse-drainage-2023',
    code: 'CIRSE-DRAINAGE-2023',
    society: 'CIRSE',
    procedureName: 'Image-Guided Percutaneous Fluid & Abscess Drainage',
    title: 'CIRSE Standards of Practice for Image-Guided Percutaneous Drainage of Abdominal and Pelvic Collections',
    year: 2023,
    evidenceGrade: 'Grade 1A (High Quality Evidence)',
    organSystem: 'Gastrointestinal & Mesenteric',
    summary: 'Percutaneous ultrasound or CT-guided catheter evacuation and irrigation of infected fluid collections, abscesses, and hematomas.',
    indications: [
      'Symptomatic or infected intra-abdominal, retroperitoneal, or pelvic fluid collections and abscesses',
      'Infected walled-off pancreatic necrosis (WOPN) and acute necrotic collections failing conservative medical care',
      'Post-operative infected bilomas, seromas, lymphoceles, and infected post-surgical hematomas',
      'Amebic or pyogenic liver abscesses refractory to antibiotic therapy or > 5 cm with rupture risk'
    ],
    contraindications: [
      'Absence of a safe image-guided percutaneous access window without traversing major uninvolved organs or blood vessels',
      'Severe uncorrectable coagulopathy (Platelets < 50,000/uL, INR > 1.5)',
      'Phlegmon or diffuse non-liquefied inflammatory mass without drainable fluid component'
    ],
    technicalSuccessThreshold: 95.0,
    majorComplicationThreshold: 2.2,
    antibioticProphylaxis: 'Weight-adjusted systemic broad-spectrum antibiotics (e.g. Piperacillin-Tazobactam 4.5g IV or Ceftriaxone 2g IV + Metronidazole 500mg IV) initiated prior to drainage.',
    preProcedureChecklist: [
      'Pre-procedure contrast CT Abdomen & Pelvis to assess cavity size, loculations, wall thickness, and fluid viscosity',
      'Plan safe puncture trajectory: transabdominal, retroperitoneal (transflank), or transgluteal / transrectal for deep pelvic collections',
      'Coagulation assessment: INR, aPTT, Platelet count',
      'Select catheter size: 8F-10F for thin serous fluid/biloma; 12F-16F for thick viscous pus or necrotic debris',
      'Prepare sterile sample collection tubes for aerobic/anaerobic cultures and Gram stain'
    ],
    postProcedureCare: [
      'Connect catheter to dependent sterile drainage collection bag; avoid traction',
      'Flush catheter with 10-20 mL sterile normal saline q8h-q12h to prevent blockage by debris/fibrin',
      'Daily documentation of drainage output volume and character',
      'Monitor for sepsis response (temperature, WBC, vitals) every 4 hours',
      'Catheter removal criteria: clinical resolution of sepsis, clear cavity collapse on follow-up imaging, and drainage output < 10-15 mL/24h'
    ],
    keyCirsePoints: [
      'Trocar technique is preferred for large, superficial collections; Seldinger technique with sequential fascial dilation is safest for deep or tortuous paths.',
      'Never force catheter through resistance; avoid over-rapid evacuation of large tense abscesses to prevent vasovagal syncope or sudden septic bacteremia.',
      'For complex loculated collections, repeat imaging and upsizing or placement of an additional drain achieves clinical cure in > 85% without open surgery.'
    ],
    gradingCriteria: [
      {
        grade: 'Grade 1',
        category: 'Minor',
        definition: 'Mild peri-catheter soakage, minor local pain controlled with oral analgesics.',
        expectedRatePercent: 18.0,
        management: 'Dressing reinforcement, oral analgesics.'
      },
      {
        grade: 'Grade 2',
        category: 'Moderate',
        definition: 'Catheter occlusion by thick pus or debris requiring bedside sterile saline irrigation or wire clearance.',
        expectedRatePercent: 8.0,
        management: 'Sterile saline flushing, catheter manipulation.'
      },
      {
        grade: 'Grade 3',
        category: 'Severe',
        definition: 'Catheter dislodgement requiring re-puncture, or secondary superinfection of previously sterile collection.',
        expectedRatePercent: 2.0,
        management: 'Repeat percutaneous drain insertion under ultrasound/CT guidance.'
      },
      {
        grade: 'Grade 4',
        category: 'Severe',
        definition: 'Bowel perforation, major vascular laceration with hemoperitoneum, or severe septic shock.',
        expectedRatePercent: 0.6,
        management: 'Urgent laparotomy, ICU resuscitation, surgical or angiographic control.'
      },
      {
        grade: 'Grade 5',
        category: 'Catastrophic',
        definition: 'Procedure-related 30-day mortality.',
        expectedRatePercent: 0.2,
        management: 'Morbidity & mortality conference audit.'
      }
    ]
  },
  {
    id: 'cirse-cvad-2024',
    code: 'CIRSE-CVAD-2024',
    society: 'CIRSE',
    procedureName: 'Central Venous Access Device (CVAD) Placement',
    title: 'CIRSE Standards of Practice for Central Venous Access Device Placement and Management',
    year: 2024,
    evidenceGrade: 'Grade 1A (High Quality Evidence)',
    organSystem: 'Dialysis & Access',
    summary: 'Ultrasound and fluoroscopy-guided implantation of peripherally inserted central catheters (PICC), totally implantable subcutaneous ports (Chemoport), and tunneled cuffed hemodialysis catheters (Permcath).',
    indications: [
      'Intermediate to long-term intravenous infusion of chemotherapy, vesicant drugs, parenteral nutrition (TPN), or prolonged antibiotics',
      'Vascular access for hemodialysis or therapeutic apheresis (tunneled cuffed catheters)',
      'Severe peripheral venous depletion where conventional venipuncture is impossible',
      'Hemodynamic central venous pressure monitoring in critical care'
    ],
    contraindications: [
      'Active uncontrolled bacteremia or systemic bloodstream infection (CRBSI)',
      'Local infection, burn, or open wound over the intended venipuncture or subcutaneous pocket site',
      'Known complete bilateral internal jugular and subclavian venous occlusion (requires alternative femoral/translumbar/transhepatic access)'
    ],
    technicalSuccessThreshold: 99.0,
    majorComplicationThreshold: 1.2,
    antibioticProphylaxis: 'Routine systemic antibiotic prophylaxis is NOT recommended by CIRSE; strict maximum sterile barrier precautions (cap, mask, sterile gown, large drape, chlorhexidine skin prep) are mandatory.',
    preProcedureChecklist: [
      'Pre-procedural duplex ultrasound examination of target vein (Internal Jugular, Basilic, or Subclavian) to confirm caliber and patency',
      'Review coagulation status (Platelets >= 50,000/uL, INR <= 1.5 preferred; ultrasound guidance mitigates bleeding risk)',
      'Confirm tip position target: cavoatrial junction (CAJ) or lower third of Superior Vena Cava under fluoroscopy',
      'Select device based on therapy duration: PICC (< 3-6 months), Port (> 3-6 months), Permcath (dialysis)',
      'Patient positioning: slight Trendelenburg position during cannulation to prevent air embolism'
    ],
    postProcedureCare: [
      'Apply sterile transparent occlusive dressing; maintain sterile dressing change protocol every 7 days',
      'Verify catheter tip position and exclude apical pneumothorax on intra-procedural fluoroscopy or post-op upright chest X-ray',
      'Flush lumen with 10-20 mL normal saline using pulsatile push-pause technique followed by heparin or citrate lock per protocol',
      'Instruct patient and nursing staff on aseptic handling and needle access technique (Huber non-coring needles for ports)',
      'Monitor for signs of exit site erythema, tunnel tenderness, or catheter-related fever'
    ],
    keyCirsePoints: [
      'Real-time ultrasound guidance for vascular cannulation and fluoroscopic guidance for tip localization are mandatory CIRSE standards.',
      'The right internal jugular vein is the first-choice access route due to straight anatomical descent into the SVC and low pneumothorax/thrombosis risk.',
      'Optimal tip position is at the cavoatrial junction; high SVC tip placement dramatically increases vessel wall erosion and catheter thrombosis rates.'
    ],
    gradingCriteria: [
      {
        grade: 'Grade 1',
        category: 'Minor',
        definition: 'Mild insertion site bruising, minor self-limiting pain responsive to oral paracetamol.',
        expectedRatePercent: 10.0,
        management: 'Local pressure, oral analgesia.'
      },
      {
        grade: 'Grade 2',
        category: 'Moderate',
        definition: 'Local superficial exit-site cellulitis responsive to oral antibiotics without catheter removal; sluggish aspiration cleared with heparin flush.',
        expectedRatePercent: 3.0,
        management: 'Oral antibiotics, push-pause heparin/saline flush.'
      },
      {
        grade: 'Grade 3',
        category: 'Severe',
        definition: 'Accidental carotid arterial puncture with hematoma requiring compression, pneumothorax requiring small chest tube, or catheter malposition.',
        expectedRatePercent: 1.0,
        management: 'Manual compression, chest tube insertion, fluoroscopic catheter repositioning.'
      },
      {
        grade: 'Grade 4',
        category: 'Severe',
        definition: 'Catheter-related bloodstream infection (CRBSI) with bacteremia requiring catheter explant, catheter fracture/migration, or central venous occlusion.',
        expectedRatePercent: 0.3,
        management: 'Catheter removal, targeted IV antibiotics, percutaneous snare retrieval of fractured fragment.'
      },
      {
        grade: 'Grade 5',
        category: 'Catastrophic',
        definition: 'Procedure-related 30-day mortality (extremely rare; massive air embolism or vascular laceration).',
        expectedRatePercent: 0.01,
        management: 'Institutional Root Cause Analysis and peer review audit.'
      }
    ]
  }
];
