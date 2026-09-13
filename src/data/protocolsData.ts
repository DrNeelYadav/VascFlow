import { DrugProtocol } from '../types/clinical';

export const DRUG_PROTOCOLS: DrugProtocol[] = [
  {
    id: 'bcs',
    name: 'Budd-Chiari Syndrome (BCS) & Post-DIPS / TIPSS / HV Stenting',
    shortName: 'Budd-Chiari Syndrome',
    category: 'Portal & Venous',
    indication: 'Hepatic venous outflow tract obstruction, ascites, hepatomegaly, portal hypertension, post-HV recanalization/stenting or DIPS/TIPSS shunt.',
    prescriptions: [
      {
        item: 'Tab Rivaroxaban',
        dose: '15 mg',
        route: 'Oral (PO)',
        freq: 'Twice Daily (BD) with meals',
        duration: 'For 21 days (Initial intensive phase)',
        stepDown: 'Then switch to Tab Rivaroxaban 20 mg PO Once Daily with meals indefinitely (Maintenance phase)',
        instructions: 'Must take with food for adequate bioavailability. Crucial for maintaining shunt/stent patency.',
        category: 'Direct Oral Anticoagulant (DOAC)'
      },
      {
        item: 'Tab Spironolactone',
        dose: '100 mg',
        route: 'Oral (PO)',
        freq: 'Once Daily (OD) morning',
        duration: 'Continuous (Titrate to ascites/edema)',
        instructions: 'Take in the morning after breakfast to prevent nocturia. Aldosterone antagonist.',
        category: 'Diuretic'
      },
      {
        item: 'Tab Furosemide',
        dose: '40 mg',
        route: 'Oral (PO)',
        freq: 'Once Daily (OD) morning',
        duration: 'Continuous (Titrate with Spironolactone in 100:40 ratio)',
        instructions: 'Preserves electrolyte balance when paired with Spironolactone.',
        category: 'Loop Diuretic'
      },
      {
        item: 'Tab Pantoprazole',
        dose: '40 mg',
        route: 'Oral (PO)',
        freq: 'Once Daily (OD) 30 min before breakfast',
        duration: 'For 30 days',
        instructions: 'Gastroprotection during anticoagulation therapy.',
        category: 'Proton Pump Inhibitor (PPI)'
      },
      {
        item: 'Tab Carvedilol',
        dose: '6.25 mg',
        route: 'Oral (PO)',
        freq: 'Twice Daily (BD)',
        duration: 'Continuous',
        instructions: 'Target resting heart rate 55-60 bpm for portal pressure reduction.',
        category: 'Non-Selective Beta Blocker'
      }
    ],
    prnMedications: [
      {
        trigger: 'Abdominal pain / Puncture site soreness',
        drug: 'Tab Paracetamol 650 mg',
        dose: '1 tab PO TID PRN (Max 2g/day in liver impairment)',
        instructions: 'Avoid NSAIDs (Ibuprofen, Diclofenac) due to risk of hepatorenal syndrome and GI bleeding.'
      },
      {
        trigger: 'Hypokalemia (Serum K+ < 3.5 mEq/L)',
        drug: 'Syp Potassium Chloride (Potklor)',
        dose: '15 mL PO BD after meals diluted in a glass of water',
        instructions: 'Temporarily withhold Furosemide; recheck serum potassium in 48 hours.'
      }
    ],
    safetyLabsToMonitor: [
      'Serum Creatinine & Electrolytes (Na+, K+) weekly for first month (Target K+ 4.0 - 5.0 mEq/L)',
      'Platelet count & Hemoglobin every 2 weeks (watch for occult GI bleeding)',
      'Liver Function Tests (Total Bilirubin, ALT, AST, Albumin) at 2 weeks'
    ],
    recallSchedule: [
      'Day 3: Telephonic follow-up for puncture site hematoma or early jaundice.',
      'Week 2: Clinical exam and Doppler Ultrasound of Hepatic Veins / Shunt to confirm patency and measure peak velocities.',
      'Month 1: Repeat Doppler USG and LFT evaluation in SMS IR OPD.'
    ]
  },
  {
    id: 'tace',
    name: 'Post-Transarterial Chemoembolization (cTACE / DEB-TACE)',
    shortName: 'Post-TACE Oncology',
    category: 'Interventional Oncology',
    indication: 'Primary management or bridging of intermediate-stage Hepatocellular Carcinoma (HCC).',
    prescriptions: [
      {
        item: 'Tab Paracetamol',
        dose: '650 mg',
        route: 'Oral (PO)',
        freq: 'Three Times Daily (TDS)',
        duration: 'For 3 to 5 days',
        instructions: 'Primary therapy for post-embolization fever and hepatic capsular stretch pain.',
        category: 'Analgesic'
      },
      {
        item: 'Tab Ondansetron',
        dose: '4 mg',
        route: 'Oral (PO)',
        freq: 'Three Times Daily (TDS) 30 min before meals',
        duration: 'For 3 days',
        instructions: 'Prevents nausea and vomiting induced by chemoembolic agents.',
        category: 'Antiemetic'
      },
      {
        item: 'Tab Pantoprazole',
        dose: '40 mg',
        route: 'Oral (PO)',
        freq: 'Once Daily (OD) before breakfast',
        duration: 'For 14 days',
        instructions: 'Reduces risk of stress ulceration and non-target mucosal irritation.',
        category: 'PPI'
      },
      {
        item: 'Tab Ursodeoxycholic Acid (UDCA)',
        dose: '300 mg',
        route: 'Oral (PO)',
        freq: 'Twice Daily (BD) with meals',
        duration: 'For 30 days',
        instructions: 'Hepatoprotective agent and promotes bile flow post-chemoembolization.',
        category: 'Hepatoprotective'
      }
    ],
    prnMedications: [
      {
        trigger: 'Breakthrough Severe Right Upper Quadrant Pain (VAS > 6)',
        drug: 'Tab Tramadol 37.5 mg + Paracetamol 325 mg (Ultracet)',
        dose: '1 tab PO SOS (Max 3 tabs/day)',
        instructions: 'Take with food. Discontinue if excessive somnolence or confusion occurs.'
      },
      {
        trigger: 'Persistent Vomiting despite Oral Ondansetron',
        drug: 'Inj Aprepitant 125 mg / Inj Ondansetron 8 mg IV',
        dose: 'Single emergency dose',
        instructions: 'Hospital Daycare admission for IV hydration if unable to retain oral fluids.'
      }
    ],
    safetyLabsToMonitor: [
      'Serum Creatinine & eGFR at 48 hours to screen for Contrast-Induced AKI',
      'Liver Function Tests (Total Bilirubin, AST/ALT) at 1 week (expected 2-3x transaminitis peaking at 48h)',
      'Complete Blood Count at Day 10-14 for chemotherapy-induced myelosuppression (ANC and Platelets)'
    ],
    recallSchedule: [
      'Week 1: Physical review in IR OPD; inspect groin access site and evaluate liver reserve.',
      'Week 4: Repeat Serum Alpha-Fetoprotein (AFP), LFT, and Triphasic CECT Abdomen to evaluate mRECIST tumor response (complete vs partial response).'
    ]
  },
  {
    id: 'bae',
    name: 'Post-Bronchial Artery Embolization for Hemoptysis',
    shortName: 'Post-BAE Hemoptysis',
    category: 'Vascular Embolization',
    indication: 'Control of acute massive or recurrent life-threatening hemoptysis.',
    prescriptions: [
      {
        item: 'Tab Tranexamic Acid',
        dose: '500 mg',
        route: 'Oral (PO)',
        freq: 'Three Times Daily (TDS)',
        duration: 'For 3 days',
        instructions: 'Antifibrinolytic agent to stabilize microvascular clots in bronchial mucosa.',
        category: 'Antifibrinolytic'
      },
      {
        item: 'Tab Amoxicillin-Clavulanate',
        dose: '625 mg',
        route: 'Oral (PO)',
        freq: 'Twice Daily (BD) after meals',
        duration: 'For 5 days',
        instructions: 'Broad-spectrum coverage for secondary post-ischemic pulmonary bacterial infection.',
        category: 'Antibiotic'
      },
      {
        item: 'Tab Pantoprazole',
        dose: '40 mg',
        route: 'Oral (PO)',
        freq: 'Once Daily (OD) before breakfast',
        duration: 'For 7 days',
        instructions: 'Gastroprotection.',
        category: 'PPI'
      },
      {
        item: 'Syp Dextromethorphan',
        dose: '10 mL',
        route: 'Oral (PO)',
        freq: 'Three Times Daily (TDS) PRN',
        duration: 'For 5 days',
        instructions: 'Suppresses violent coughing paroxysms that could dislodge newly embolized thrombi.',
        category: 'Antitussive'
      }
    ],
    prnMedications: [
      {
        trigger: 'Retrosternal Chest Discomfort (Ischemic Mediastinitis)',
        drug: 'Tab Paracetamol 650 mg',
        dose: '1 tab PO TDS PRN',
        instructions: 'Common transient side-effect lasting 48-72 hours. Rule out acute coronary syndrome if severe.'
      },
      {
        trigger: 'Recurrence of Fresh Red Hemoptysis (> 50 mL)',
        drug: 'Emergency Hospital Reporting',
        dose: 'Immediate SMS Emergency Department presentation',
        instructions: 'Urgent pulmonary stabilization and repeat angiogram for non-bronchial systemic collateral supply.'
      }
    ],
    safetyLabsToMonitor: [
      'Hemoglobin & Hematocrit at 24 hours post-procedure',
      'Serum Creatinine for contrast clearance',
      'Chest Radiograph at 48 hours if new pleural pain or dyspnea develops'
    ],
    recallSchedule: [
      'Day 7: IR OPD review with repeat Chest X-Ray.',
      'Week 4: Combined review with Department of Pulmonary Medicine for underlying bronchiectasis / post-TB management.'
    ]
  },
  {
    id: 'ptbd',
    name: 'Post-Percutaneous Transhepatic Biliary Drainage & Stenting',
    shortName: 'Post-PTBD Biliary',
    category: 'Biliary',
    indication: 'Decompression of malignant or benign biliary tract obstruction.',
    prescriptions: [
      {
        item: 'Tab Cefixime',
        dose: '200 mg',
        route: 'Oral (PO)',
        freq: 'Twice Daily (BD) after meals',
        duration: 'For 5 days',
        instructions: 'Prophylaxis against ascending bacterial cholangitis.',
        category: 'Antibiotic'
      },
      {
        item: 'Tab Metronidazole',
        dose: '400 mg',
        route: 'Oral (PO)',
        freq: 'Three Times Daily (TDS)',
        duration: 'For 5 days',
        instructions: 'Anaerobic coverage for biliary tree pathogens.',
        category: 'Antibiotic'
      },
      {
        item: 'Tab Ursodeoxycholic Acid (UDCA)',
        dose: '300 mg',
        route: 'Oral (PO)',
        freq: 'Twice Daily (BD)',
        duration: 'For 30 days',
        instructions: 'Decreases bile viscosity and helps prevent sludge occlusion of catheter sideholes.',
        category: 'Choleretic'
      }
    ],
    prnMedications: [
      {
        trigger: 'Biliary Catheter Side Leakage / Dressing Soakage',
        drug: 'Catheter Flush Protocol',
        dose: '5-10 mL Sterile Normal Saline slow flush',
        instructions: 'Flush gently using sterile aseptic technique. Do NOT aspirate forcefully.'
      },
      {
        trigger: 'Fever with Chills / Shivering (Bacteremic Cholangitis)',
        drug: 'Inj Piperacillin-Tazobactam 4.5g IV',
        dose: 'Immediate ER evaluation',
        instructions: 'Urgent blood cultures and hospital admission; check for drain blockage.'
      }
    ],
    safetyLabsToMonitor: [
      'Liver Function Tests (Total and Conjugated Bilirubin, Alkaline Phosphatase) at Day 3 and Day 7',
      'Daily record of 24-hour bile output volume (Normal: 300 - 800 mL/day)',
      'Total Leukocyte Count (TLC) if febrile'
    ],
    recallSchedule: [
      'Week 1: IR OPD review for drain fixation check and suture removal.',
      'Week 6-8: Catheter check or routine exchange over wire if long-term external drain in place.'
    ]
  },
  {
    id: 'pcn',
    name: 'Post-Percutaneous Nephrostomy & Antegrade DJ Stenting',
    shortName: 'Post-PCN Nephrostomy',
    category: 'Urinary',
    indication: 'Relief of obstructive uropathy and hydronephrosis.',
    prescriptions: [
      {
        item: 'Tab Nitrofurantoin',
        dose: '100 mg',
        route: 'Oral (PO)',
        freq: 'Twice Daily (BD) with meals',
        duration: 'For 7 days',
        instructions: 'Urinary tract antiseptic coverage.',
        category: 'Urinary Antibiotic'
      },
      {
        item: 'Tab Flavoxate',
        dose: '200 mg',
        route: 'Oral (PO)',
        freq: 'Three Times Daily (TDS)',
        duration: 'For 5 days',
        instructions: 'Relieves bladder and pelvicalyceal muscle spasms.',
        category: 'Antispasmodic'
      },
      {
        item: 'Tab Pantoprazole',
        dose: '40 mg',
        route: 'Oral (PO)',
        freq: 'Once Daily (OD)',
        duration: 'For 7 days',
        instructions: 'Gastroprotection.',
        category: 'PPI'
      }
    ],
    prnMedications: [
      {
        trigger: 'Flank Spasms / Catheter Irritation',
        drug: 'Tab Drotaverine 80 mg',
        dose: '1 tab PO BD PRN',
        instructions: 'Take after food for sharp colicky pain.'
      },
      {
        trigger: 'Cloudy Urine / Catheter Sludge Blockage',
        drug: 'Normal Saline Gentle Irrigation',
        dose: '5 mL sterile NS push',
        instructions: 'Perform only under sterile precautions. Never inject high volumes into renal pelvis.'
      }
    ],
    safetyLabsToMonitor: [
      'Serum Creatinine & Blood Urea at 48 hours (evaluate recovery of renal filtration)',
      'Urine Routine & Microscopic analysis at Day 5',
      'Serum Electrolytes (Sodium, Potassium) for post-obstructive diuresis'
    ],
    recallSchedule: [
      'Week 1: Flank dressing check, output record review in IR OPD.',
      'Month 2: Nephrostomy exchange or removal if antegrade stent is established.'
    ]
  },
  {
    id: 'varicose',
    name: 'Post-Endovenous Laser Ablation (EVLA) / Varicose Veins',
    shortName: 'Post-EVLA Varicose',
    category: 'Superficial Venous',
    indication: 'Post-laser/RFA ablation of Great/Small Saphenous Veins and foam sclerotherapy.',
    prescriptions: [
      {
        item: 'Tab Micronized Purified Flavonoid Fraction (Daflon)',
        dose: '500 mg',
        route: 'Oral (PO)',
        freq: 'Twice Daily (BD) with meals',
        duration: 'For 30 days',
        instructions: 'Venotonic agent to reduce post-procedure venous edema and inflammation.',
        category: 'Venotonic'
      },
      {
        item: 'Tab Paracetamol',
        dose: '650 mg',
        route: 'Oral (PO)',
        freq: 'Twice Daily (BD) after food',
        duration: 'For 5 days',
        instructions: 'Analgesia for saphenous tract tightness.',
        category: 'Analgesic'
      },
      {
        item: 'Tab Pantoprazole',
        dose: '40 mg',
        route: 'Oral (PO)',
        freq: 'Once Daily (OD)',
        duration: 'For 7 days',
        instructions: 'Gastroprotection.',
        category: 'PPI'
      }
    ],
    prnMedications: [
      {
        trigger: 'Superficial Phlebitic Lump / Tender Nodules',
        drug: 'Heparinoid / Mucopolysaccharide Gel (Thrombophob)',
        dose: 'Apply gently over ecchymotic cord TDS',
        instructions: 'Do not massage vigorously.'
      }
    ],
    safetyLabsToMonitor: [
      'Clinical examination for distal foot pulses and calf tenderness',
      'Duplex ultrasound at 1 week to rule out Endovenous Heat-Induced Thrombosis (EHIT Grade 1-4)'
    ],
    recallSchedule: [
      'Day 2: Remove bulky compression bandages, wear Class II (20-30 mmHg) compression stockings during daytime.',
      'Week 1: Duplex scan in IR Room 922 to confirm saphenous closure.',
      'Month 1: Clinical assessment for residual varicosities requiring touch-up foam sclerotherapy.'
    ]
  },
  {
    id: 'varicocele',
    name: 'Post-Varicocele Embolization (Coils + STS Foam)',
    shortName: 'Post-Varicocele',
    category: 'Venous',
    indication: 'Left testicular varicocele with scrotal pain or subfertility.',
    prescriptions: [
      {
        item: 'Tab Aceclofenac 100 mg + Paracetamol 325 mg',
        dose: '1 tab',
        route: 'Oral (PO)',
        freq: 'Twice Daily (BD) after food',
        duration: 'For 5 days',
        instructions: 'Anti-inflammatory to manage pampiniform venous thrombosis inflammation.',
        category: 'NSAID + Analgesic'
      },
      {
        item: 'Tab Pantoprazole',
        dose: '40 mg',
        route: 'Oral (PO)',
        freq: 'Once Daily (OD)',
        duration: 'For 7 days',
        instructions: 'Gastroprotection.',
        category: 'PPI'
      }
    ],
    prnMedications: [
      {
        trigger: 'Scrotal Heaviness or Aching',
        drug: 'Scrotal Support / Tight Undergarments',
        dose: 'Wear daytime scrotal supporter for 10 days',
        instructions: 'Avoid heavy weightlifting or cycling for 2 weeks.'
      }
    ],
    safetyLabsToMonitor: [
      'Repeat Semen Analysis at 3 months and 6 months (reflects complete spermatogenic cycle)',
      'Scrotal Doppler at 6 weeks to confirm absence of retrograde reflux on Valsalva'
    ],
    recallSchedule: [
      'Week 1: Groin puncture site check.',
      'Month 3: Review with follow-up semen analysis in IR OPD.'
    ]
  },
  {
    id: 'central_venoplasty',
    name: 'Post-Central Venoplasty & Stenting (Hemodialysis Access)',
    shortName: 'Post-Venoplasty Stent',
    category: 'Hemodialysis',
    indication: 'Recanalization of central venous outflow stenosis in AV fistula patients.',
    prescriptions: [
      {
        item: 'Tab Clopidogrel',
        dose: '75 mg',
        route: 'Oral (PO)',
        freq: 'Once Daily (OD)',
        duration: 'For 90 days',
        instructions: 'Prevents acute in-stent thrombosis while maintaining access patency.',
        category: 'Antiplatelet'
      },
      {
        item: 'Tab Aspirin',
        dose: '75 mg',
        route: 'Oral (PO)',
        freq: 'Once Daily (OD) with lunch',
        duration: 'For 90 days',
        instructions: 'Dual antiplatelet therapy for metallic/covered stent deployment.',
        category: 'Antiplatelet'
      },
      {
        item: 'Tab Pantoprazole',
        dose: '40 mg',
        route: 'Oral (PO)',
        freq: 'Once Daily (OD)',
        duration: 'For 30 days',
        instructions: 'PPI for gastroprotection.',
        category: 'PPI'
      }
    ],
    prnMedications: [
      {
        trigger: 'Prolonged Bleeding from Dialysis Puncture Sites',
        drug: 'Hemodialysis Nurse Notification',
        dose: 'Manual pressure x 25 min',
        instructions: 'Inform nephrology team of dual antiplatelet status to adjust heparin during dialysis.'
      }
    ],
    safetyLabsToMonitor: [
      'Dynamic venous pressure during hemodialysis sessions (Target < 150 mmHg at blood flow 300 mL/min)',
      'Complete Blood Count (Hemoglobin, Platelets) monthly'
    ],
    recallSchedule: [
      'Week 1: Assess resolution of arm edema and dialysis access thrill.',
      'Month 3: Routine Doppler ultrasound surveillance of central stent patency.'
    ]
  },
  {
    id: 'biopsy',
    name: 'Post-Image Guided Core Biopsy / FNAC (D9211 / Room 922)',
    shortName: 'Post-Biopsy Care',
    category: 'Diagnostic',
    indication: 'Post-procedure care for lung, liver, kidney, or retroperitoneal mass core biopsies.',
    prescriptions: [
      {
        item: 'Tab Paracetamol',
        dose: '650 mg',
        route: 'Oral (PO)',
        freq: 'Twice Daily (BD) PRN',
        duration: 'For 3 days',
        instructions: 'Pain relief at biopsy site.',
        category: 'Analgesic'
      },
      {
        item: 'Tab Cefixime',
        dose: '200 mg',
        route: 'Oral (PO)',
        freq: 'Twice Daily (BD)',
        duration: 'For 3 days',
        instructions: 'Prophylactic antibiotic for coaxial tract crossing.',
        category: 'Antibiotic'
      }
    ],
    prnMedications: [
      {
        trigger: 'Sudden Breathlessness / Sharp Pleuritic Chest Pain (Post-Lung Biopsy)',
        drug: 'Emergency Chest Radiograph',
        dose: 'Immediate SMS Emergency Department evaluation',
        instructions: 'Rule out pneumothorax or hemothorax requiring chest tube drainage.'
      },
      {
        trigger: 'Dizziness, Tachycardia, Abdominal Distension (Post-Liver/Kidney Biopsy)',
        drug: 'Emergency Hemodynamic Resuscitation',
        dose: 'Immediate hospital presentation',
        instructions: 'Evaluate for capsular laceration or hemoperitoneum.'
      }
    ],
    safetyLabsToMonitor: [
      'Chest Radiograph 2-4 hours post-lung biopsy (screen for pneumothorax)',
      'Blood Pressure and Pulse rate every 30 minutes for 4 hours'
    ],
    recallSchedule: [
      'Day 5-7: Bring histopathology & IHC report to Room 922 / IR OPD for diagnosis review.'
    ]
  }
];
