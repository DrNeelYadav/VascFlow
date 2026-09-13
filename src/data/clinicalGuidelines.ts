/**
 * Authoritative Clinical Practice Guidelines & Standards of Practice
 * Normalized via Ponytail Deep-Scraping Skill
 * Sources: CIRSE (Cardiovascular and Interventional Radiological Society of Europe),
 * SIR (Society of Interventional Radiology), RERC (Rajasthan Endovascular Registry Committee)
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
  society: 'CIRSE' | 'SIR' | 'RERC';
  procedureName: string;
  title: string;
  year: number;
  evidenceGrade: string;
  indications: string[];
  contraindications: string[];
  technicalSuccessThreshold: number;
  majorComplicationThreshold: number;
  antibioticProphylaxis: string;
  preProcedureChecklist: string[];
  postProcedureCare: string[];
  gradingCriteria: ComplicationGrade[];
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
    indications: [
      'Intermediate stage Hepatocellular Carcinoma (BCLC Stage B: multinodular, preserved liver function, ECOG PS 0)',
      'Early stage HCC (BCLC A) not eligible for surgical resection or percutaneous ablation',
      'Bridge to liver transplantation within Milan or UCSF criteria',
      'Hypervascular liver metastases (e.g. neuroendocrine tumors, colorectal after chemotherapy failure)'
    ],
    contraindications: [
      'Decompensated cirrhosis: Child-Pugh Class C, Bilirubin > 3.0 mg/dL, refractory ascites',
      'Main portal vein trunk tumor thrombosis with hepatofugal portal blood flow',
      'Severe renal impairment: GFR < 30 mL/min/1.73m2 without scheduled hemodialysis',
      'Severe uncorrectable coagulopathy (Platelets < 50,000/uL, INR > 1.7)'
    ],
    technicalSuccessThreshold: 95.0,
    majorComplicationThreshold: 3.5,
    antibioticProphylaxis: 'Cefazolin 2g IV or Ciprofloxacin 400mg IV within 60 minutes pre-procedure; add Metronidazole 500mg IV if prior biliary intervention/sphincterotomy.',
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
    id: 'sir-ptbd-2023',
    code: 'SIR-PTBD-2023',
    society: 'SIR',
    procedureName: 'Percutaneous Transhepatic Biliary Drainage (PTBD)',
    title: 'SIR Quality Improvement Standards for Percutaneous Transhepatic Cholangiography and Biliary Drainage',
    year: 2023,
    evidenceGrade: 'Grade 1B (Strong Recommendation, Moderate Quality Evidence)',
    indications: [
      'Malignant biliary obstruction: Cholangiocarcinoma (Klatskin tumor), Gallbladder carcinoma, Pancreatic head adenocarcinoma, Porta hepatis nodal metastases',
      'Benign biliary strictures: Post-cholecystectomy bile duct injury, post-liver transplant anastomotic strictures',
      'Acute obstructive suppurative cholangitis failed or ineligible for ERCP',
      'Bile leak, biloma, or traumatic biliary tract disruption'
    ],
    contraindications: [
      'Uncorrectable severe coagulopathy (INR > 1.5, Platelets < 50,000/uL)',
      'Massive refractory ascites (relative; perform paracentesis prior to access to prevent tube dislodgement)',
      'Multiple isolated non-communicating intrahepatic duct dilations where single drainage yields minimal hepatic reserve benefit',
      'Active uncontrolled bacteremia without ongoing intravenous antibiotic coverage'
    ],
    technicalSuccessThreshold: 96.0,
    majorComplicationThreshold: 4.0,
    antibioticProphylaxis: 'Broad-spectrum coverage with Piperacillin-Tazobactam 4.5g IV or Ceftriaxone 2g IV + Metronidazole 500mg IV at induction.',
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
    id: 'rerc-evla-2022',
    code: 'RERC-EVLA-2022',
    society: 'RERC',
    procedureName: 'Endovenous Laser Ablation (EVLA)',
    title: 'RERC Standards of Practice for Endovenous Thermal Ablation of Lower Extremity Varicose Veins',
    year: 2022,
    evidenceGrade: 'Grade 1A (High Quality Evidence)',
    indications: [
      'Symptomatic Great Saphenous Vein (GSV) or Small Saphenous Vein (SSV) incompetence with CEAP Class C2-C6',
      'Venous ulceration (CEAP C5-C6) directly associated with axial saphenous venous reflux > 0.5 seconds on duplex',
      'Recurrent superficial venous thrombophlebitis or venous hemorrhage from lower limb varicosities',
      'Venous claudication, stasis dermatitis, or lipodermatosclerosis unresponsive to 3-month trial of compression stockings'
    ],
    contraindications: [
      'Acute deep vein thrombosis (DVT) involving the femoral, popliteal, or iliac venous system',
      'Severe peripheral arterial occlusive disease (Ankle-Brachial Index ABI < 0.5 or absolute ankle pressure < 50 mmHg)',
      'Non-ambulatory or bed-bound patients unable to ambulate immediately post-procedure',
      'Known severe allergy to local tumescent anesthetic agents (Lidocaine)'
    ],
    technicalSuccessThreshold: 98.0,
    majorComplicationThreshold: 1.5,
    antibioticProphylaxis: 'Routine systemic antibiotics not recommended unless active infected ulcer present (CEAP C6).',
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
  }
];
