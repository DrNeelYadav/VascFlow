import { DrugProtocol } from '../types/clinical';
import { getYojanaRequirementForProtocol } from './protocolYojanaMapping';

const BASE_DRUG_PROTOCOLS: DrugProtocol[] = [
  {
    "id": "bcs",
    "name": "Budd-Chiari Syndrome (BCS) & Post-DIPS / TIPSS / HV Stenting",
    "shortName": "Budd-Chiari Syndrome",
    "category": "Portal & Venous",
    "system": "Hepatobiliary & Portal",
    "indication": "Hepatic venous outflow tract obstruction, ascites, hepatomegaly, portal hypertension, post-HV recanalization/stenting or DIPS/TIPSS shunt.",
    "prescriptions": [
      {
        "item": "Tab Rivaroxaban",
        "dose": "15 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) with meals",
        "duration": "For 21 days (Initial intensive phase)",
        "stepDown": "Then switch to Tab Rivaroxaban 20 mg PO Once Daily with meals indefinitely (Maintenance phase)",
        "instructions": "Must take with food for adequate bioavailability. Crucial for maintaining shunt/stent patency.",
        "category": "Direct Oral Anticoagulant (DOAC)"
      },
      {
        "item": "Tab Spironolactone",
        "dose": "100 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) morning",
        "duration": "Continuous (Titrate to ascites/edema)",
        "instructions": "Take in the morning after breakfast to prevent nocturia. Aldosterone antagonist.",
        "category": "Diuretic"
      },
      {
        "item": "Tab Furosemide",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) morning",
        "duration": "Continuous (Titrate with Spironolactone in 100:40 ratio)",
        "instructions": "Preserves electrolyte balance when paired with Spironolactone.",
        "category": "Loop Diuretic"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) 30 min before breakfast",
        "duration": "For 30 days",
        "instructions": "Gastroprotection during anticoagulation therapy.",
        "category": "Proton Pump Inhibitor (PPI)"
      },
      {
        "item": "Tab Carvedilol",
        "dose": "6.25 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD)",
        "duration": "Continuous",
        "instructions": "Target resting heart rate 55-60 bpm for portal pressure reduction.",
        "category": "Non-Selective Beta Blocker"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Abdominal pain / Puncture site soreness",
        "drug": "Tab Paracetamol 650 mg",
        "dose": "1 tab PO TID PRN (Max 2g/day in liver impairment)",
        "instructions": "Avoid NSAIDs (Ibuprofen, Diclofenac) due to risk of hepatorenal syndrome and GI bleeding."
      },
      {
        "trigger": "Hypokalemia (Serum K+ < 3.5 mEq/L)",
        "drug": "Syp Potassium Chloride (Potklor)",
        "dose": "15 mL PO BD after meals diluted in a glass of water",
        "instructions": "Temporarily withhold Furosemide; recheck serum potassium in 48 hours."
      }
    ],
    "safetyLabsToMonitor": [
      "Serum Creatinine & Electrolytes (Na+, K+) weekly for first month (Target K+ 4.0 - 5.0 mEq/L)",
      "Platelet count & Hemoglobin every 2 weeks (watch for occult GI bleeding)",
      "Liver Function Tests (Total Bilirubin, ALT, AST, Albumin) at 2 weeks"
    ],
    "recallSchedule": [
      "Day 3: Telephonic follow-up for puncture site hematoma or early jaundice.",
      "Week 2: Clinical exam and Doppler Ultrasound of Hepatic Veins / Shunt to confirm patency and measure peak velocities.",
      "Month 1: Repeat Doppler USG and LFT evaluation in SMS IR OPD."
    ]
  },
  {
    "id": "tace",
    "name": "Post-Transarterial Chemoembolization (cTACE / DEB-TACE)",
    "shortName": "Post-TACE Oncology",
    "category": "Interventional Oncology",
    "system": "Oncology & Ablation",
    "indication": "Primary management or bridging of intermediate-stage Hepatocellular Carcinoma (HCC).",
    "prescriptions": [
      {
        "item": "Tab Paracetamol",
        "dose": "650 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS)",
        "duration": "For 3 to 5 days",
        "instructions": "Primary therapy for post-embolization fever and hepatic capsular stretch pain.",
        "category": "Analgesic"
      },
      {
        "item": "Tab Ondansetron",
        "dose": "4 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS) 30 min before meals",
        "duration": "For 3 days",
        "instructions": "Prevents nausea and vomiting induced by chemoembolic agents.",
        "category": "Antiemetic"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) before breakfast",
        "duration": "For 14 days",
        "instructions": "Reduces risk of stress ulceration and non-target mucosal irritation.",
        "category": "PPI"
      },
      {
        "item": "Tab Ursodeoxycholic Acid (UDCA)",
        "dose": "300 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) with meals",
        "duration": "For 30 days",
        "instructions": "Hepatoprotective agent and promotes bile flow post-chemoembolization.",
        "category": "Hepatoprotective"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Breakthrough Severe Right Upper Quadrant Pain (VAS > 6)",
        "drug": "Tab Tramadol 37.5 mg + Paracetamol 325 mg (Ultracet)",
        "dose": "1 tab PO SOS (Max 3 tabs/day)",
        "instructions": "Take with food. Discontinue if excessive somnolence or confusion occurs."
      },
      {
        "trigger": "Persistent Vomiting despite Oral Ondansetron",
        "drug": "Inj Aprepitant 125 mg / Inj Ondansetron 8 mg IV",
        "dose": "Single emergency dose",
        "instructions": "Hospital Daycare admission for IV hydration if unable to retain oral fluids."
      }
    ],
    "safetyLabsToMonitor": [
      "Serum Creatinine & eGFR at 48 hours to screen for Contrast-Induced AKI",
      "Liver Function Tests (Total Bilirubin, AST/ALT) at 1 week (expected 2-3x transaminitis peaking at 48h)",
      "Complete Blood Count at Day 10-14 for chemotherapy-induced myelosuppression (ANC and Platelets)"
    ],
    "recallSchedule": [
      "Week 1: Physical review in IR OPD; inspect groin access site and evaluate liver reserve.",
      "Week 4: Repeat Serum Alpha-Fetoprotein (AFP), LFT, and Triphasic CECT Abdomen to evaluate mRECIST tumor response (complete vs partial response)."
    ]
  },
  {
    "id": "bae",
    "name": "Post-Bronchial Artery Embolization for Hemoptysis",
    "shortName": "Post-BAE Hemoptysis",
    "category": "Vascular Embolization",
    "system": "Thoracic & Pulmonology",
    "indication": "Control of acute massive or recurrent life-threatening hemoptysis.",
    "prescriptions": [
      {
        "item": "Tab Tranexamic Acid",
        "dose": "500 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS)",
        "duration": "For 3 days",
        "instructions": "Antifibrinolytic agent to stabilize microvascular clots in bronchial mucosa.",
        "category": "Antifibrinolytic"
      },
      {
        "item": "Tab Amoxicillin-Clavulanate",
        "dose": "625 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) after meals",
        "duration": "For 5 days",
        "instructions": "Broad-spectrum coverage for secondary post-ischemic pulmonary bacterial infection.",
        "category": "Antibiotic"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) before breakfast",
        "duration": "For 7 days",
        "instructions": "Gastroprotection.",
        "category": "PPI"
      },
      {
        "item": "Syp Dextromethorphan",
        "dose": "10 mL",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS) PRN",
        "duration": "For 5 days",
        "instructions": "Suppresses violent coughing paroxysms that could dislodge newly embolized thrombi.",
        "category": "Antitussive"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Retrosternal Chest Discomfort (Ischemic Mediastinitis)",
        "drug": "Tab Paracetamol 650 mg",
        "dose": "1 tab PO TDS PRN",
        "instructions": "Common transient side-effect lasting 48-72 hours. Rule out acute coronary syndrome if severe."
      },
      {
        "trigger": "Recurrence of Fresh Red Hemoptysis (> 50 mL)",
        "drug": "Emergency Hospital Reporting",
        "dose": "Immediate SMS Emergency Department presentation",
        "instructions": "Urgent pulmonary stabilization and repeat angiogram for non-bronchial systemic collateral supply."
      }
    ],
    "safetyLabsToMonitor": [
      "Hemoglobin & Hematocrit at 24 hours post-procedure",
      "Serum Creatinine for contrast clearance",
      "Chest Radiograph at 48 hours if new pleural pain or dyspnea develops"
    ],
    "recallSchedule": [
      "Day 7: IR OPD review with repeat Chest X-Ray.",
      "Week 4: Combined review with Department of Pulmonary Medicine for underlying bronchiectasis / post-TB management."
    ]
  },
  {
    "id": "ptbd",
    "name": "Post-Percutaneous Transhepatic Biliary Drainage & Stenting",
    "shortName": "Post-PTBD Biliary",
    "category": "Biliary",
    "system": "Hepatobiliary & Portal",
    "indication": "Decompression of malignant or benign biliary tract obstruction.",
    "prescriptions": [
      {
        "item": "Tab Cefixime",
        "dose": "200 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) after meals",
        "duration": "For 5 days",
        "instructions": "Prophylaxis against ascending bacterial cholangitis.",
        "category": "Antibiotic"
      },
      {
        "item": "Tab Metronidazole",
        "dose": "400 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS)",
        "duration": "For 5 days",
        "instructions": "Anaerobic coverage for biliary tree pathogens.",
        "category": "Antibiotic"
      },
      {
        "item": "Tab Ursodeoxycholic Acid (UDCA)",
        "dose": "300 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD)",
        "duration": "For 30 days",
        "instructions": "Decreases bile viscosity and helps prevent sludge occlusion of catheter sideholes.",
        "category": "Choleretic"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Biliary Catheter Side Leakage / Dressing Soakage",
        "drug": "Catheter Flush Protocol",
        "dose": "5-10 mL Sterile Normal Saline slow flush",
        "instructions": "Flush gently using sterile aseptic technique. Do NOT aspirate forcefully."
      },
      {
        "trigger": "Fever with Chills / Shivering (Bacteremic Cholangitis)",
        "drug": "Inj Piperacillin-Tazobactam 4.5g IV",
        "dose": "Immediate ER evaluation",
        "instructions": "Urgent blood cultures and hospital admission; check for drain blockage."
      }
    ],
    "safetyLabsToMonitor": [
      "Liver Function Tests (Total and Conjugated Bilirubin, Alkaline Phosphatase) at Day 3 and Day 7",
      "Daily record of 24-hour bile output volume (Normal: 300 - 800 mL/day)",
      "Total Leukocyte Count (TLC) if febrile"
    ],
    "recallSchedule": [
      "Week 1: IR OPD review for drain fixation check and suture removal.",
      "Week 6-8: Catheter check or routine exchange over wire if long-term external drain in place."
    ]
  },
  {
    "id": "pcn",
    "name": "Post-Percutaneous Nephrostomy & Antegrade DJ Stenting",
    "shortName": "Post-PCN Nephrostomy",
    "category": "Urinary",
    "system": "Genitourinary & Pelvic",
    "indication": "Relief of obstructive uropathy and hydronephrosis.",
    "prescriptions": [
      {
        "item": "Tab Nitrofurantoin",
        "dose": "100 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) with meals",
        "duration": "For 7 days",
        "instructions": "Urinary tract antiseptic coverage.",
        "category": "Urinary Antibiotic"
      },
      {
        "item": "Tab Flavoxate",
        "dose": "200 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS)",
        "duration": "For 5 days",
        "instructions": "Relieves bladder and pelvicalyceal muscle spasms.",
        "category": "Antispasmodic"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD)",
        "duration": "For 7 days",
        "instructions": "Gastroprotection.",
        "category": "PPI"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Flank Spasms / Catheter Irritation",
        "drug": "Tab Drotaverine 80 mg",
        "dose": "1 tab PO BD PRN",
        "instructions": "Take after food for sharp colicky pain."
      },
      {
        "trigger": "Cloudy Urine / Catheter Sludge Blockage",
        "drug": "Normal Saline Gentle Irrigation",
        "dose": "5 mL sterile NS push",
        "instructions": "Perform only under sterile precautions. Never inject high volumes into renal pelvis."
      }
    ],
    "safetyLabsToMonitor": [
      "Serum Creatinine & Blood Urea at 48 hours (evaluate recovery of renal filtration)",
      "Urine Routine & Microscopic analysis at Day 5",
      "Serum Electrolytes (Sodium, Potassium) for post-obstructive diuresis"
    ],
    "recallSchedule": [
      "Week 1: Flank dressing check, output record review in IR OPD.",
      "Month 2: Nephrostomy exchange or removal if antegrade stent is established."
    ]
  },
  {
    "id": "varicose",
    "name": "Post-Endovenous Laser Ablation (EVLA) / Varicose Veins",
    "shortName": "Post-EVLA Varicose",
    "category": "Superficial Venous",
    "system": "Venous & Lymphatic",
    "indication": "Post-laser/RFA ablation of Great/Small Saphenous Veins and foam sclerotherapy.",
    "prescriptions": [
      {
        "item": "Tab Micronized Purified Flavonoid Fraction (Daflon)",
        "dose": "500 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) with meals",
        "duration": "For 30 days",
        "instructions": "Venotonic agent to reduce post-procedure venous edema and inflammation.",
        "category": "Venotonic"
      },
      {
        "item": "Tab Paracetamol",
        "dose": "650 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) after food",
        "duration": "For 5 days",
        "instructions": "Analgesia for saphenous tract tightness.",
        "category": "Analgesic"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD)",
        "duration": "For 7 days",
        "instructions": "Gastroprotection.",
        "category": "PPI"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Superficial Phlebitic Lump / Tender Nodules",
        "drug": "Heparinoid / Mucopolysaccharide Gel (Thrombophob)",
        "dose": "Apply gently over ecchymotic cord TDS",
        "instructions": "Do not massage vigorously."
      }
    ],
    "safetyLabsToMonitor": [
      "Clinical examination for distal foot pulses and calf tenderness",
      "Duplex ultrasound at 1 week to rule out Endovenous Heat-Induced Thrombosis (EHIT Grade 1-4)"
    ],
    "recallSchedule": [
      "Day 2: Remove bulky compression bandages, wear Class II (20-30 mmHg) compression stockings during daytime.",
      "Week 1: Duplex scan in IR Room 922 to confirm saphenous closure.",
      "Month 1: Clinical assessment for residual varicosities requiring touch-up foam sclerotherapy."
    ]
  },
  {
    "id": "varicocele",
    "name": "Post-Varicocele Embolization (Coils + STS Foam)",
    "shortName": "Post-Varicocele",
    "category": "Venous",
    "system": "Genitourinary & Pelvic",
    "indication": "Left testicular varicocele with scrotal pain or subfertility.",
    "prescriptions": [
      {
        "item": "Tab Aceclofenac 100 mg + Paracetamol 325 mg",
        "dose": "1 tab",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) after food",
        "duration": "For 5 days",
        "instructions": "Anti-inflammatory to manage pampiniform venous thrombosis inflammation.",
        "category": "NSAID + Analgesic"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD)",
        "duration": "For 7 days",
        "instructions": "Gastroprotection.",
        "category": "PPI"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Scrotal Heaviness or Aching",
        "drug": "Scrotal Support / Tight Undergarments",
        "dose": "Wear daytime scrotal supporter for 10 days",
        "instructions": "Avoid heavy weightlifting or cycling for 2 weeks."
      }
    ],
    "safetyLabsToMonitor": [
      "Repeat Semen Analysis at 3 months and 6 months (reflects complete spermatogenic cycle)",
      "Scrotal Doppler at 6 weeks to confirm absence of retrograde reflux on Valsalva"
    ],
    "recallSchedule": [
      "Week 1: Groin puncture site check.",
      "Month 3: Review with follow-up semen analysis in IR OPD."
    ]
  },
  {
    "id": "central_venoplasty",
    "name": "Post-Central Venoplasty & Stenting (Hemodialysis Access)",
    "shortName": "Post-Venoplasty Stent",
    "category": "Hemodialysis",
    "system": "Dialysis & Access",
    "indication": "Recanalization of central venous outflow stenosis in AV fistula patients.",
    "prescriptions": [
      {
        "item": "Tab Clopidogrel",
        "dose": "75 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD)",
        "duration": "For 90 days",
        "instructions": "Prevents acute in-stent thrombosis while maintaining access patency.",
        "category": "Antiplatelet"
      },
      {
        "item": "Tab Aspirin",
        "dose": "75 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) with lunch",
        "duration": "For 90 days",
        "instructions": "Dual antiplatelet therapy for metallic/covered stent deployment.",
        "category": "Antiplatelet"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD)",
        "duration": "For 30 days",
        "instructions": "PPI for gastroprotection.",
        "category": "PPI"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Prolonged Bleeding from Dialysis Puncture Sites",
        "drug": "Hemodialysis Nurse Notification",
        "dose": "Manual pressure x 25 min",
        "instructions": "Inform nephrology team of dual antiplatelet status to adjust heparin during dialysis."
      }
    ],
    "safetyLabsToMonitor": [
      "Dynamic venous pressure during hemodialysis sessions (Target < 150 mmHg at blood flow 300 mL/min)",
      "Complete Blood Count (Hemoglobin, Platelets) monthly"
    ],
    "recallSchedule": [
      "Week 1: Assess resolution of arm edema and dialysis access thrill.",
      "Month 3: Routine Doppler ultrasound surveillance of central stent patency."
    ]
  },
  {
    "id": "biopsy",
    "name": "Post-Image Guided Core Biopsy / FNAC (D9211 / Room 922)",
    "shortName": "Post-Biopsy Care",
    "category": "Diagnostic",
    "system": "Dialysis & Access",
    "indication": "Post-procedure care for lung, liver, kidney, or retroperitoneal mass core biopsies.",
    "prescriptions": [
      {
        "item": "Tab Paracetamol",
        "dose": "650 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) PRN",
        "duration": "For 3 days",
        "instructions": "Pain relief at biopsy site.",
        "category": "Analgesic"
      },
      {
        "item": "Tab Cefixime",
        "dose": "200 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD)",
        "duration": "For 3 days",
        "instructions": "Prophylactic antibiotic for coaxial tract crossing.",
        "category": "Antibiotic"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Sudden Breathlessness / Sharp Pleuritic Chest Pain (Post-Lung Biopsy)",
        "drug": "Emergency Chest Radiograph",
        "dose": "Immediate SMS Emergency Department evaluation",
        "instructions": "Rule out pneumothorax or hemothorax requiring chest tube drainage."
      },
      {
        "trigger": "Dizziness, Tachycardia, Abdominal Distension (Post-Liver/Kidney Biopsy)",
        "drug": "Emergency Hemodynamic Resuscitation",
        "dose": "Immediate hospital presentation",
        "instructions": "Evaluate for capsular laceration or hemoperitoneum."
      }
    ],
    "safetyLabsToMonitor": [
      "Chest Radiograph 2-4 hours post-lung biopsy (screen for pneumothorax)",
      "Blood Pressure and Pulse rate every 30 minutes for 4 hours"
    ],
    "recallSchedule": [
      "Day 5-7: Bring histopathology & IHC report to Room 922 / IR OPD for diagnosis review."
    ]
  },
  {
    "id": "uae",
    "name": "Post-Uterine Artery Embolization (UAE / UFE) for Fibroids & Adenomyosis",
    "shortName": "Post-UAE Fibroids",
    "category": "Pelvic Embolization",
    "system": "Genitourinary & Pelvic",
    "indication": "Symptomatic uterine leiomyomas (fibroids), diffuse adenomyosis, or postpartum hemorrhage (PPH) managed via bilateral uterine artery embolization.",
    "prescriptions": [
      {
        "item": "Tab Mefenamic Acid + Paracetamol (Meftal-Forte)",
        "dose": "500 mg / 325 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS) with meals",
        "duration": "For 5 days",
        "instructions": "Primary anti-inflammatory for uterine ischemia, cramping pain, and low-grade post-embolization fever.",
        "category": "NSAID + Analgesic"
      },
      {
        "item": "Tab Drotaverine",
        "dose": "80 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) after meals",
        "duration": "For 5 days",
        "instructions": "Antispasmodic targeting acute uterine smooth muscle contractions.",
        "category": "Antispasmodic"
      },
      {
        "item": "Tab Cefixime",
        "dose": "200 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD)",
        "duration": "For 5 days",
        "instructions": "Prophylactic broad-spectrum antibiotic against ascending pelvic infection.",
        "category": "Antibiotic"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) before breakfast",
        "duration": "For 7 days",
        "instructions": "Gastroprotection during NSAID therapy.",
        "category": "PPI"
      },
      {
        "item": "Tab Tranexamic Acid",
        "dose": "500 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS)",
        "duration": "For 3 days",
        "instructions": "Antifibrinolytic for immediate post-procedure vaginal spotting.",
        "category": "Antifibrinolytic"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Breakthrough Severe Pelvic Cramping (VAS > 6)",
        "drug": "Tab Tramadol 37.5 mg + Paracetamol 325 mg",
        "dose": "1 tab PO SOS (Max 3 tabs/day)",
        "instructions": "Take after meals. Discontinue if excessive somnolence or nausea occurs."
      },
      {
        "trigger": "High Fever (> 38.5°C) with Malodorous Vaginal Discharge",
        "drug": "Emergency SMS Hospital Presentation",
        "dose": "Immediate Gynecology & IR Emergency Evaluation",
        "instructions": "Rule out septic endometritis or transcervical fibroid sloughing requiring urgent intervention."
      }
    ],
    "safetyLabsToMonitor": [
      "Complete Blood Count (CBC) at 48 hours and 1 week (leukocytosis up to 12,000/uL is expected as part of post-embolization syndrome)",
      "Serum Creatinine at 48 hours for iodinated contrast clearance",
      "Pelvic Ultrasound with Doppler at 3 months (assess fibroid volume reduction and devascularization)"
    ],
    "recallSchedule": [
      "Day 3: Telephonic follow-up to assess pain resolution and temperature trend.",
      "Week 2: Clinical pelvic exam and femoral/radial puncture site assessment in SMS IR OPD.",
      "Month 3: Contrast-enhanced Pelvic MRI or Doppler USG to quantify uterine and dominant fibroid volume shrinkage."
    ]
  },
  {
    "id": "pae",
    "name": "Post-Prostatic Artery Embolization (PAE) for Benign Prostatic Hyperplasia",
    "shortName": "Post-PAE Prostate",
    "category": "Men's Health",
    "system": "Genitourinary & Pelvic",
    "indication": "Lower urinary tract symptoms (LUTS) secondary to Benign Prostatic Hyperplasia (BPH) refractory to medical therapy or unsuitable for TURP.",
    "prescriptions": [
      {
        "item": "Tab Tamsulosin",
        "dose": "0.4 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) at bedtime",
        "duration": "For 30 days",
        "instructions": "Alpha-1 blocker to relax bladder neck and prostatic smooth muscle during post-ischemic prostatic edema.",
        "category": "Alpha-1 Blocker"
      },
      {
        "item": "Tab Ciprofloxacin",
        "dose": "500 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) with meals",
        "duration": "For 7 days",
        "instructions": "Broad-spectrum coverage against urinary tract and prostatic bacterial infection.",
        "category": "Fluoroquinolone Antibiotic"
      },
      {
        "item": "Tab Aceclofenac 100 mg + Paracetamol 325 mg",
        "dose": "1 tab",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) after meals",
        "duration": "For 5 days",
        "instructions": "Analgesia and control of post-embolization perineal and pelvic inflammation.",
        "category": "NSAID + Analgesic"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) before breakfast",
        "duration": "For 14 days",
        "instructions": "Gastroprotection.",
        "category": "PPI"
      },
      {
        "item": "Syp Disodium Hydrogen Citrate",
        "dose": "15 mL",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS) in a glass of water",
        "duration": "For 7 days",
        "instructions": "Urinary alkalinizer to reduce post-procedural dysuria and burning micturition.",
        "category": "Urinary Alkalinizer"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Acute Urinary Retention (Inability to pass urine)",
        "drug": "Immediate Catheterization",
        "dose": "14 Fr Foley Silicone Catheter insertion under aseptic technique",
        "instructions": "Keep catheter on gravity drainage for 5-7 days until post-embolization prostatic edema subsides."
      },
      {
        "trigger": "Gross Hematuria with Clots",
        "drug": "Emergency IR OPD Presentation",
        "dose": "Immediate SMS IR Emergency Suite evaluation",
        "instructions": "Maintain vigorous oral hydration and report for clinical review."
      }
    ],
    "safetyLabsToMonitor": [
      "Urine Routine and Culture at Day 7 post-procedure",
      "Serum Creatinine and Electrolytes at 48 hours",
      "Serum Total PSA (expected transient surge peaking at 24-48h, baseline drop expected at 3 months)",
      "Post-Void Residual (PVR) urine volume ultrasound measurement at 1 month"
    ],
    "recallSchedule": [
      "Week 1: Assess uroflowmetry and puncture site in SMS IR OPD; remove Foley catheter if placed.",
      "Month 1: Re-evaluate International Prostate Symptom Score (IPSS) and Quality of Life (QoL) metrics.",
      "Month 3: Repeat Serum PSA, uroflowmetry (Qmax), and transrectal/pelvic USG for prostatic volume assessment."
    ]
  },
  {
    "id": "dvt_thrombolysis",
    "name": "Post-Catheter-Directed Thrombolysis (CDT) & Iliofemoral Venous Stenting for Acute DVT",
    "shortName": "Post-CDT / DVT Stent",
    "category": "Deep Venous",
    "system": "Venous & Lymphatic",
    "indication": "Acute iliofemoral deep vein thrombosis, phlegmasia cerulea dolens, or May-Thurner syndrome treated with catheter-directed thrombolysis / thrombectomy and venous stenting.",
    "prescriptions": [
      {
        "item": "Tab Rivaroxaban",
        "dose": "15 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) with meals",
        "duration": "For 21 days (Initial intensive phase)",
        "stepDown": "Then switch to Tab Rivaroxaban 20 mg PO Once Daily with meals for 6 months (Maintenance phase)",
        "instructions": "Must take with food. Crucial for maintaining iliofemoral venous stent patency and preventing recurrent DVT.",
        "category": "DOAC Anticoagulant"
      },
      {
        "item": "Tab Micronized Purified Flavonoid Fraction (Daflon)",
        "dose": "500 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) with meals",
        "duration": "For 60 days",
        "instructions": "Reduces venous hypertension, microcirculatory damage, and post-thrombotic syndrome edema.",
        "category": "Venotonic"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) before breakfast",
        "duration": "For 30 days",
        "instructions": "Gastroprotection during high-intensity anticoagulation.",
        "category": "PPI"
      },
      {
        "item": "Tab Paracetamol",
        "dose": "650 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS) PRN",
        "duration": "For 5 days",
        "instructions": "Analgesia for popliteal/femoral puncture discomfort.",
        "category": "Analgesic"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Sudden Shortness of Breath, Pleuritic Chest Pain, or Hemoptysis (Suspected PE)",
        "drug": "Emergency SMS Medical College ER Reporting",
        "dose": "Immediate Emergency CTA Chest (Pulmonary Angiography)",
        "instructions": "Do not delay. Call emergency hospital line immediately for pulmonary embolism management."
      },
      {
        "trigger": "Active Bleeding from Puncture Site or Spontaneous Hemorrhage",
        "drug": "Manual Compression & Anticoagulant Review",
        "dose": "Firm local pressure for 20 minutes",
        "instructions": "Report to SMS IR room immediately for coagulopathy reversal if bleeding does not cease."
      }
    ],
    "safetyLabsToMonitor": [
      "Complete Blood Count (Hemoglobin, Hematocrit, Platelets) at 24 hours, 48 hours, and 2 weeks",
      "Serum Creatinine for contrast clearance post-venography",
      "Venous Duplex Ultrasound of lower extremity at 2 weeks to assess stent inflow, in-stent velocity, and femoropopliteal recanalization"
    ],
    "recallSchedule": [
      "Day 2: Discharge with Class II (30-40 mmHg) graduated elastic compression stockings worn during daytime.",
      "Week 2: Venous duplex ultrasound and clinical edema measurement (calf circumference) in SMS IR Suite.",
      "Month 3 & 6: Repeat Doppler surveillance to verify long-term stent patency and screen for Post-Thrombotic Syndrome (Villalta Score)."
    ]
  },
  {
    "id": "pad_angioplasty",
    "name": "Post-Peripheral Arterial Angioplasty, Atherectomy & SFA/Iliac Stenting",
    "shortName": "Post-PAD Stenting",
    "category": "Peripheral Arterial",
    "system": "Vascular & Arterial",
    "indication": "Symptomatic peripheral artery disease (Rutherford Category 2-6), intermittent claudication, or critical limb-threatening ischemia (CLTI) treated with balloon angioplasty, drug-coated balloon (DCB), or stenting.",
    "prescriptions": [
      {
        "item": "Tab Clopidogrel",
        "dose": "75 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) with dinner",
        "duration": "For 90 days",
        "instructions": "Dual antiplatelet therapy to prevent acute in-stent thrombosis.",
        "category": "Antiplatelet"
      },
      {
        "item": "Tab Aspirin (Enteric-coated)",
        "dose": "75 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) with lunch",
        "duration": "Indefinitely (Lifelong)",
        "instructions": "Lifelong antiplatelet therapy for cardiovascular secondary prevention.",
        "category": "Antiplatelet"
      },
      {
        "item": "Tab Cilostazol",
        "dose": "100 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) 30 min before meals",
        "duration": "For 90 days",
        "instructions": "Phosphodiesterase-3 inhibitor improving pain-free walking distance and microvascular perfusion; contraindicated in congestive heart failure.",
        "category": "Vasodilator / Antiplatelet"
      },
      {
        "item": "Tab Atorvastatin",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) at bedtime",
        "duration": "Indefinitely (Lifelong)",
        "instructions": "High-intensity statin therapy for plaque stabilization and limb salvage.",
        "category": "Lipid Lowering / Statin"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) before breakfast",
        "duration": "For 30 days",
        "instructions": "Gastroprotection for dual antiplatelet regimen.",
        "category": "PPI"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Sudden Cold, Pale, Numb, or Pulseless Foot (Acute Limb Ischemia)",
        "drug": "Emergency Vascular IR Presentation",
        "dose": "Immediate Emergency Angiogram / Thrombolysis Evaluation",
        "instructions": "Golden window is < 6 hours. Report directly to SMS Cath Lab emergency team."
      },
      {
        "trigger": "Expanding Swelling or Thrill at Groin Puncture Site (Pseudoaneurysm)",
        "drug": "Manual Pressure & Urgent Doppler",
        "dose": "Direct manual compression for 20 minutes",
        "instructions": "Do not apply blind pressure sandbags; requires urgent USG-guided thrombin injection."
      }
    ],
    "safetyLabsToMonitor": [
      "Ankle-Brachial Index (ABI) and Toe-Brachial Index (TBI) at 24 hours and 1 month",
      "Serum Creatinine at 48 hours post-procedure (screen for Contrast-Induced Nephropathy)",
      "Lipid Profile and Liver Function Tests at 6 weeks"
    ],
    "recallSchedule": [
      "Day 3: Puncture site inspection and pedal pulse palpation (Dorsalis Pedis & Posterior Tibial).",
      "Month 1: Ankle-Brachial Index (ABI) measurement and Arterial Doppler ultrasound in SMS IR OPD.",
      "Month 3 & 6: Clinical walking distance assessment and color Doppler imaging for in-stent restenosis."
    ]
  },
  {
    "id": "tumor_ablation",
    "name": "Post-Percutaneous Microwave (MWA) & Radiofrequency Ablation (RFA) for Tumors",
    "shortName": "Post-MWA/RFA Ablation",
    "category": "Ablation Oncology",
    "system": "Oncology & Ablation",
    "indication": "Percutaneous thermal ablation of early-stage hepatocellular carcinoma (HCC), colorectal liver metastases, renal cell carcinoma (RCC), or non-small cell lung carcinoma.",
    "prescriptions": [
      {
        "item": "Tab Paracetamol",
        "dose": "650 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS) with meals",
        "duration": "For 5 days",
        "instructions": "Primary analgesic and antipyretic for post-ablation syndrome (fever, malaise, anorexia).",
        "category": "Analgesic & Antipyretic"
      },
      {
        "item": "Tab Cefixime",
        "dose": "200 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) after meals",
        "duration": "For 5 days",
        "instructions": "Prophylactic antibiotic coverage against thermal tract necrosis superinfection and cavity abscess.",
        "category": "Antibiotic"
      },
      {
        "item": "Tab Ondansetron",
        "dose": "4 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS) 30 min before meals",
        "duration": "For 3 days",
        "instructions": "Control of vagal nausea induced by thermal peritoneal/capsular irritation.",
        "category": "Antiemetic"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) before breakfast",
        "duration": "For 14 days",
        "instructions": "Gastroprotection.",
        "category": "PPI"
      },
      {
        "item": "Tab Ursodeoxycholic Acid (UDCA)",
        "dose": "300 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) with meals",
        "duration": "For 30 days",
        "instructions": "Hepatoprotective agent and promotes bile flow in hepatic ablation cases.",
        "category": "Hepatoprotective"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Severe Breakthrough Post-Ablation Pain (VAS > 6)",
        "drug": "Tab Tramadol 37.5 mg + Paracetamol 325 mg",
        "dose": "1 tab PO SOS (Max 3 tabs/day)",
        "instructions": "Take after meals with water. Discontinue if excessive sedation occurs."
      },
      {
        "trigger": "High Fever (> 38.5°C) Persisting Beyond Day 4",
        "drug": "SMS Hospital Emergency Evaluation",
        "dose": "Blood cultures & urgent CT abdomen/thorax",
        "instructions": "Rule out thermal ablation cavity abscess or biliary fistula."
      }
    ],
    "safetyLabsToMonitor": [
      "Liver Function Tests (Total Bilirubin, AST, ALT, Albumin) at 48 hours and 1 week (expected 2-4x transaminase spike peaking at 24-48h)",
      "Complete Blood Count (TLC, Platelets) at Day 5",
      "Serum Creatinine at 48 hours"
    ],
    "recallSchedule": [
      "Week 1: Clinical assessment, wound check, and puncture site inspection in IR OPD.",
      "Month 1: Triphasic Contrast-Enhanced CT (CECT) or MRI to confirm complete ablation margins (A0 status with > 5mm safety margin) and rule out local tumor progression.",
      "Month 3 & 6: Routine multiphasic oncologic surveillance imaging and tumor marker review (AFP / CEA / CA19-9)."
    ]
  },
  {
    "id": "tips_portal_htn",
    "name": "Post-Transjugular Intrahepatic Portosystemic Shunt (TIPS) & Variceal Obliteration",
    "shortName": "Post-TIPS Shunt",
    "category": "Portal & Venous",
    "system": "Hepatobiliary & Portal",
    "indication": "Secondary prevention of refractory variceal hemorrhage or intractable cirrhotic ascites treated via polytetrafluoroethylene (PTFE)-covered TIPS (Viatorr) and coronary vein coil/plug embolization.",
    "prescriptions": [
      {
        "item": "Syp Lactulose",
        "dose": "20 mL",
        "route": "Oral (PO)",
        "freq": "Twice to Three Times Daily (BD/TDS)",
        "duration": "Continuous maintenance",
        "instructions": "Titrate to produce 2 to 3 soft semi-formed stools daily; the cornerstone of post-TIPS hepatic encephalopathy prevention.",
        "category": "Osmotic Laxative / Encephalopathy Prophylaxis"
      },
      {
        "item": "Tab Rifaximin",
        "dose": "550 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) with food",
        "duration": "Continuous maintenance",
        "instructions": "Non-absorbable gut antibiotic to suppress ammonia-producing colonic flora.",
        "category": "Gut Antimicrobial"
      },
      {
        "item": "Tab Spironolactone",
        "dose": "50 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) morning",
        "duration": "Continuous (Tapered as ascites resolves)",
        "instructions": "Tapered diuretic regimen tailored to resolving ascites; monitor serum potassium.",
        "category": "Aldosterone Antagonist"
      },
      {
        "item": "Tab Furosemide",
        "dose": "20 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) morning",
        "duration": "Continuous (Tapered as ascites resolves)",
        "instructions": "Tapered loop diuretic paired with spironolactone in 100:40 ratio equivalent.",
        "category": "Loop Diuretic"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) before breakfast",
        "duration": "For 30 days",
        "instructions": "Gastroprotection.",
        "category": "PPI"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Drowsiness, Confusion, Inverted Sleep Cycle, or Flapping Tremor (Hepatic Encephalopathy)",
        "drug": "Lactulose Escalation & Emergency Presentation",
        "dose": "Take 30 mL Lactulose PO immediately every 2 hours until laxation; report to SMS Liver ICU",
        "instructions": "Immediate hospitalization required. Avoid sedatives and high-protein meals during acute episodes."
      },
      {
        "trigger": "Sudden Recurrence of Hematemesis or Melena",
        "drug": "Emergency SMS Hospital Presentation",
        "dose": "Immediate Blood Transfusion & Shunt Angiogram",
        "instructions": "Rule out acute shunt thrombosis or non-target collateral varices."
      }
    ],
    "safetyLabsToMonitor": [
      "Serum Ammonia, Serum Creatinine, and Electrolytes (Na+, K+) weekly for the first month",
      "Liver Function Tests (Total Bilirubin, INR, Albumin) at Day 7, Day 14, and Month 1 (monitor for TIPS-induced ischemic hepatitis or bilirubin surge)",
      "Color Doppler Ultrasound of TIPS Shunt at Day 7 and Month 1 (Normal mid-shunt velocity: 90 - 190 cm/s; main portal vein velocity > 30 cm/s)"
    ],
    "recallSchedule": [
      "Day 7: First Doppler ultrasound check in SMS IR Suite (Room 104) to confirm shunt velocity and stent expansion.",
      "Month 1: Clinical West Haven hepatic encephalopathy grading, MELD/CTP re-scoring, and Doppler USG in IR OPD.",
      "Month 3 & 6: Routine 6-month Doppler surveillance to rule out pseudointimal hyperplasia or stent retraction."
    ]
  },
  {
    "id": "upper_gi_bleed",
    "name": "Post-Transcatheter Arterial Embolization (TAE) for Acute Non-Variceal Upper GI Bleeding",
    "shortName": "Post-GI Bleed TAE",
    "category": "Vascular Embolization",
    "system": "Vascular & Arterial",
    "indication": "Endoscopy-refractory acute upper gastrointestinal hemorrhage from peptic ulcer disease, Dieulafoy lesion, Mallory-Weiss tear, or pseudoaneurysm embolized with microcoils / Gelfoam / NBCA glue.",
    "prescriptions": [
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) 30 min before meals",
        "duration": "For 30 days",
        "instructions": "High-dose oral proton pump inhibitor to maintain intragastric pH > 6.0 and promote mucosal ulcer healing.",
        "category": "High-Dose PPI"
      },
      {
        "item": "Syp Sucralfate",
        "dose": "10 mL (1g)",
        "route": "Oral (PO)",
        "freq": "Four Times Daily (QID) 1 hour before meals and bedtime",
        "duration": "For 14 days",
        "instructions": "Mucosal coating agent protecting ulcer bed from pepsin and bile acid digestion.",
        "category": "Mucosal Protectant"
      },
      {
        "item": "Tab Cefixime",
        "dose": "200 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) after meals",
        "duration": "For 5 days",
        "instructions": "Prophylactic antibiotic for post-embolization ischemic mucosal protection.",
        "category": "Antibiotic"
      },
      {
        "item": "Tab Paracetamol",
        "dose": "650 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS) PRN",
        "duration": "For 3 days",
        "instructions": "Mild visceral analgesia; strictly avoid NSAIDs like Diclofenac or Ibuprofen.",
        "category": "Analgesic"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Recurrence of Fresh Red Hematemesis, Coffee-Ground Vomiting, or Black Tarry Stools (Melena)",
        "drug": "Emergency SMS Medical College ER Presentation",
        "dose": "Immediate Large-Bore IV Access & Fluid Resuscitation",
        "instructions": "Urgent repeat angiography or surgical exploration for collateral re-bleeding."
      },
      {
        "trigger": "Dizziness, Cold Sweats, or Fainting on Standing (Orthostatic Hypotension)",
        "drug": "Oral Rehydration & Emergency Check",
        "dose": "Drink 500 mL ORS solution immediately; check BP in nearest clinic",
        "instructions": "Sign of significant ongoing occult blood loss."
      }
    ],
    "safetyLabsToMonitor": [
      "Serial Complete Blood Count (Hemoglobin & Hematocrit) every 12 hours for first 48 hours, then at Day 7",
      "Serum Creatinine & Blood Urea Nitrogen (BUN) at 48 hours (BUN/Cr ratio helps distinguish GI bleeding from dehydration)",
      "Coagulation Profile (PT/INR, aPTT, Platelets) at 48 hours"
    ],
    "recallSchedule": [
      "Day 3: Clinical check of femoral access site for hematoma, pseudoaneurysm, or distal pulse deficit.",
      "Week 2: Review in SMS IR OPD; verify hemoglobin stabilization without need for blood transfusions.",
      "Week 6: Follow-up Upper GI Endoscopy coordinated with Department of Gastroenterology to document complete ulcer scarification."
    ]
  },
  {
    "id": "brto_parto",
    "name": "Balloon-Occluded / Plug-Assisted Retrograde Transvenous Obliteration (BRTO / PARTO)",
    "shortName": "BRTO / PARTO Varices",
    "category": "Variceal Obliteration",
    "system": "Hepatobiliary & Portal",
    "indication": "Gastric fundal varices (GOV2 / IGV1) with gastrorenal shunt treated with sclerosant (STS 3% foam) or vascular plug (Amplatzer/AVP) + Gelfoam.",
    "prescriptions": [
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) 30 min before meals",
        "duration": "For 30 days",
        "instructions": "High-dose acid suppression during mucosal variceal thrombosis.",
        "category": "PPI"
      },
      {
        "item": "Syp Sucralfate",
        "dose": "10 mL",
        "route": "Oral (PO)",
        "freq": "Four Times Daily (QID) before meals & bedtime",
        "duration": "For 14 days",
        "instructions": "Mucosal barrier protection over necrosing gastric varices.",
        "category": "Mucosal Protectant"
      },
      {
        "item": "Tab Cefixime",
        "dose": "200 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD)",
        "duration": "For 5 days",
        "instructions": "Prophylactic antibiotic against bacteremia.",
        "category": "Antibiotic"
      },
      {
        "item": "Tab Propranolol",
        "dose": "20 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD)",
        "duration": "Continuous",
        "instructions": "Titrate to resting heart rate 55-60 bpm to prevent exacerbation of esophageal varices post-shunt closure.",
        "category": "Non-Selective Beta Blocker"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Hemolysis / Hemoglobinuria (Red/dark brown urine from STS sclerosant)",
        "drug": "Hydration Protocol",
        "dose": "Drink 3 Liters water/ORS daily + Tab Sodium Bicarbonate 1g TID",
        "instructions": "Alkalinizes urine to protect renal tubules against free hemoglobin toxicity."
      },
      {
        "trigger": "Abdominal Fullness / Left Upper Quadrant Pain",
        "drug": "Tab Paracetamol 650 mg",
        "dose": "1 tab PO TDS SOS",
        "instructions": "Avoid NSAIDs."
      }
    ],
    "safetyLabsToMonitor": [
      "Urine examination for hemoglobinuria at 6h, 12h, 24h",
      "Complete Blood Count & Renal Function Tests at 48 hours",
      "Screening Upper GI Endoscopy at 1 month to assess gastric variceal obliteration and check for newly aggravated esophageal varices"
    ],
    "recallSchedule": [
      "Week 1: Groin access check and renal function review in IR OPD.",
      "Month 1: Repeat endoscopy and Triphasic CECT Abdomen to confirm complete shunt thrombosis."
    ]
  },
  {
    "id": "pve",
    "name": "Pre-Operative Portal Vein Embolization (PVE) for Future Liver Remnant Hypertrophy",
    "shortName": "Pre-Op PVE",
    "category": "Hepatobiliary Interventions",
    "system": "Hepatobiliary & Portal",
    "indication": "Induction of contralateral hepatic lobe hypertrophy prior to major hepatectomy for colorectal liver metastases, cholangiocarcinoma, or HCC.",
    "prescriptions": [
      {
        "item": "Tab Paracetamol",
        "dose": "650 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS) with meals",
        "duration": "For 5 days",
        "instructions": "Analgesia for liver capsular distension and portal parenchymal swelling.",
        "category": "Analgesic"
      },
      {
        "item": "Tab Cefixime",
        "dose": "200 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) after meals",
        "duration": "For 5 days",
        "instructions": "Antibiotic prophylaxis for transhepatic portal access.",
        "category": "Antibiotic"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) before breakfast",
        "duration": "For 14 days",
        "instructions": "Gastroprotection.",
        "category": "PPI"
      },
      {
        "item": "Tab Ursodeoxycholic Acid (UDCA)",
        "dose": "300 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) with meals",
        "duration": "For 30 days",
        "instructions": "Hepatoprotective agent.",
        "category": "Hepatoprotective"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Severe Right Upper Quadrant Pain (VAS > 6)",
        "drug": "Tab Tramadol 37.5 mg + Paracetamol 325 mg",
        "dose": "1 tab PO SOS (Max 3/day)",
        "instructions": "Take after meals."
      },
      {
        "trigger": "Fever > 38°C with Chills",
        "drug": "Emergency Evaluation",
        "dose": "Immediate blood cultures and LFT audit",
        "instructions": "Rule out portal phlebitis or liver abscess."
      }
    ],
    "safetyLabsToMonitor": [
      "Liver Function Tests (Total Bilirubin, ALT/AST, Albumin) at 48 hours and 1 week",
      "Volumetric CT or MRI Abdomen with kinetic growth rate (KGR) measurement at 3 to 4 weeks (target FLR > 30% in normal liver, > 40% in cirrhotic)"
    ],
    "recallSchedule": [
      "Week 1: IR OPD physical exam and transhepatic puncture check.",
      "Week 3-4: Volumetric CT protocol in coordination with Surgical Oncology / GI Surgery."
    ]
  },
  {
    "id": "cholecystostomy",
    "name": "Post-Percutaneous Transhepatic Cholecystostomy (PTC) for Acute Cholecystitis",
    "shortName": "Post-PTC Gallbladder",
    "category": "Biliary Interventions",
    "system": "Hepatobiliary & Portal",
    "indication": "Decompression of acute calculous or acalculous cholecystitis in high-risk, critically ill, or non-surgical candidates.",
    "prescriptions": [
      {
        "item": "Tab Cefuroxime Axetil",
        "dose": "500 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) after meals",
        "duration": "For 7 days",
        "instructions": "Enteric biliary antibiotic coverage.",
        "category": "Cephalosporin Antibiotic"
      },
      {
        "item": "Tab Metronidazole",
        "dose": "400 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS)",
        "duration": "For 7 days",
        "instructions": "Anaerobic coverage for biliary tract pathogens.",
        "category": "Antimicrobial"
      },
      {
        "item": "Tab Drotaverine",
        "dose": "80 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD)",
        "duration": "For 5 days",
        "instructions": "Biliary antispasmodic.",
        "category": "Antispasmodic"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD)",
        "duration": "For 14 days",
        "instructions": "Gastroprotection.",
        "category": "PPI"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Catheter Dislodgement or Sudden Bile Leak Around Tube",
        "drug": "Sterile Gauze Pressure Dressing",
        "dose": "Immediate sterile pad placement; emergency ER visit",
        "instructions": "Do not attempt to push catheter back into liver tract; requires wire re-access in fluoroscopy suite."
      },
      {
        "trigger": "High Fever with Shivering (Biliary Sepsis)",
        "drug": "Emergency Hospital Admission",
        "dose": "Inj Piperacillin-Tazobactam 4.5g IV stat",
        "instructions": "Immediate blood cultures and check for tube blockage."
      }
    ],
    "safetyLabsToMonitor": [
      "Daily record of bile drain volume (Normal: 100 - 300 mL/day)",
      "Complete Blood Count (TLC) and C-Reactive Protein (CRP) at Day 3 and 7",
      "Liver Function Tests at Day 5"
    ],
    "recallSchedule": [
      "Week 1: Drain flush check and fixation suture inspection in IR OPD.",
      "Week 6: Tube cholangiogram (fistulogram) through catheter to assess cystic duct patency and stone clearance prior to planned removal."
    ]
  },
  {
    "id": "hydatid_pair",
    "name": "Post-Percutaneous Aspiration, Injection & Re-Aspiration (PAIR) for Hepatic Hydatid Cyst",
    "shortName": "Post-PAIR Hydatid",
    "category": "Cyst Drainage & Sclerotherapy",
    "system": "Hepatobiliary & Portal",
    "indication": "Symptomatic or complicated hepatic hydatid disease (Echinococcus granulosus, WHO type CE1-CE3a) treated with hypertonic saline / alcohol sclerotherapy.",
    "prescriptions": [
      {
        "item": "Tab Albendazole",
        "dose": "400 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) with fatty meals",
        "duration": "For 28 days (1 full cycle)",
        "instructions": "Crucial anti-helminthic scolicidal therapy to prevent peritoneal seeding; must take with a rich fatty meal for adequate absorption.",
        "category": "Antihelminthic"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD)",
        "duration": "For 30 days",
        "instructions": "Gastroprotection.",
        "category": "PPI"
      },
      {
        "item": "Tab Paracetamol",
        "dose": "650 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS) PRN",
        "duration": "For 5 days",
        "instructions": "Analgesic.",
        "category": "Analgesic"
      },
      {
        "item": "Tab Cetirizine",
        "dose": "10 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) at bedtime",
        "duration": "For 14 days",
        "instructions": "Antihistaminic coverage for minor hydatid allergic reactions.",
        "category": "Antihistamine"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Anaphylaxis Warning (Urticaria, facial swelling, stridor, wheezing)",
        "drug": "Emergency Epinephrine Protocol",
        "dose": "Inj Adrenaline 0.5 mg IM into anterolateral thigh stat",
        "instructions": "Call hospital emergency resuscitation immediately."
      },
      {
        "trigger": "Right Upper Quadrant Colic",
        "drug": "Tab Drotaverine 80 mg",
        "dose": "1 tab PO SOS",
        "instructions": "Take after food."
      }
    ],
    "safetyLabsToMonitor": [
      "Complete Blood Count with Differential (Eosinophil count) weekly",
      "Liver Function Tests every 2 weeks (monitor Albendazole hepatotoxicity)",
      "Ultrasound Abdomen at 1, 3, and 6 months (monitor cyst collapse, detached membrane, and pseudotumor pattern)"
    ],
    "recallSchedule": [
      "Week 2: Review LFT and check puncture site in IR OPD.",
      "Month 1: Ultrasound assessment of residual cavity volume.",
      "Month 6: Definitive serological ELISA and imaging follow-up."
    ]
  },
  {
    "id": "liver_abscess_drain",
    "name": "Post-Percutaneous Pigtail Catheter Drainage for Liver Abscess",
    "shortName": "Liver Abscess Drain",
    "category": "Drainage & Access",
    "system": "Hepatobiliary & Portal",
    "indication": "Large (> 5 cm), liquefactive, or rupture-prone amebic (Entamoeba histolytica) or pyogenic bacterial liver abscess.",
    "prescriptions": [
      {
        "item": "Tab Metronidazole",
        "dose": "800 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS) with meals",
        "duration": "For 14 days",
        "instructions": "Primary tissue amebicide.",
        "category": "Antiprotozoal / Antibiotic"
      },
      {
        "item": "Tab Cefixime",
        "dose": "200 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) after meals",
        "duration": "For 10 days",
        "instructions": "Pyogenic enteric bacterial coverage.",
        "category": "Antibiotic"
      },
      {
        "item": "Tab Paracetamol",
        "dose": "650 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS)",
        "duration": "For 5 days",
        "instructions": "Antipyretic and analgesic.",
        "category": "Analgesic"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD)",
        "duration": "For 14 days",
        "instructions": "Gastroprotection.",
        "category": "PPI"
      },
      {
        "item": "Tab Diloxanide Furoate",
        "dose": "500 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS)",
        "duration": "For 10 days (Start on Day 15)",
        "instructions": "Luminal amebicide to eradicate intestinal cyst carriage after finishing Metronidazole.",
        "category": "Luminal Amebicide"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Catheter Sludge Occlusion / Sudden Cessation of Drainage",
        "drug": "Normal Saline Gentle Irrigation",
        "dose": "5 mL sterile normal saline flush under aseptic technique",
        "instructions": "Do not forcefully push against resistance."
      },
      {
        "trigger": "Spiking Fever > 39°C with Rigors",
        "drug": "Hospital Emergency Review",
        "dose": "Immediate blood and pus culture check",
        "instructions": "Check catheter position on ultrasound."
      }
    ],
    "safetyLabsToMonitor": [
      "Daily drainage volume record (Criteria for catheter removal: < 10 mL/day serous output for 2 consecutive days and cavity collapse on USG)",
      "Complete Blood Count (TLC) every 3 days",
      "Liver ultrasound at Day 7 to verify cavity resolution"
    ],
    "recallSchedule": [
      "Day 5-7: Ultrasound evaluation in Room 922 / IR Suite for cavity collapse and possible drain removal.",
      "Week 4: Final ultrasound follow-up to document complete scarring of cavity."
    ]
  },
  {
    "id": "y90_tare",
    "name": "Post-Transarterial Radioembolization (TARE / SIRT with Yttrium-90)",
    "shortName": "Post-Y90 TARE",
    "category": "Locoregional Oncology",
    "system": "Oncology & Ablation",
    "indication": "Unresectable Hepatocellular Carcinoma (HCC) with portal vein thrombosis (PVT) or chemorefractory colorectal liver metastases.",
    "prescriptions": [
      {
        "item": "Tab Methylprednisolone",
        "dose": "16 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) morning",
        "duration": "For 5 days",
        "stepDown": "Taper to 8 mg OD for 3 days, then 4 mg OD for 2 days",
        "instructions": "Prevents radiation-induced liver disease (RILD) and constitutional post-radioembolization fatigue.",
        "category": "Corticosteroid"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) before breakfast",
        "duration": "For 30 days",
        "instructions": "High-potency gastroprotection against radiation gastritis.",
        "category": "PPI"
      },
      {
        "item": "Tab Ursodeoxycholic Acid (UDCA)",
        "dose": "300 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) with meals",
        "duration": "For 60 days",
        "instructions": "Protects against radiation cholangitis and promotes bile flow.",
        "category": "Hepatoprotective"
      },
      {
        "item": "Tab Paracetamol",
        "dose": "650 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS) PRN",
        "duration": "For 7 days",
        "instructions": "Post-radioembolization pain and low-grade fever.",
        "category": "Analgesic"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Intractable Epigastric Pain / Radiation Gastritis",
        "drug": "Syp Oxetacaine + Aluminium/Magnesium Hydroxide (Mucaine)",
        "dose": "10 mL PO TDS 15 min before meals",
        "instructions": "Coats gastric mucosa."
      },
      {
        "trigger": "Jaundice or Rapid Ascites Accumulation",
        "drug": "Emergency IR/Hepatology Evaluation",
        "dose": "Immediate liver reserve evaluation (ALBI score)",
        "instructions": "Screen for subacute radiation-induced liver disease (RILD)."
      }
    ],
    "safetyLabsToMonitor": [
      "LFT (Total Bilirubin, Albumin, Alkaline Phosphatase, AST/ALT) weekly for the first 8 weeks",
      "Complete Blood Count at 2 weeks (screen for radiation lymphopenia)",
      "Triphasic CECT / MRI Abdomen with mRECIST tumor response criteria at 3 months"
    ],
    "recallSchedule": [
      "Week 2: Clinical review and LFT audit in SMS IR OPD.",
      "Month 1: Check liver reserve (ALBI score and CTP score).",
      "Month 3: Formal response assessment CECT and AFP/CEA restaging."
    ]
  },
  {
    "id": "renal_aml",
    "name": "Post-Selective Renal Artery Embolization for Angiomyolipoma (AML)",
    "shortName": "Post-Renal AML",
    "category": "Vascular Embolization",
    "system": "Oncology & Ablation",
    "indication": "Large (> 4 cm) or symptomatic renal angiomyolipoma with risk of spontaneous retroperitoneal hemorrhage (Wunderlich syndrome).",
    "prescriptions": [
      {
        "item": "Tab Aceclofenac 100 mg + Paracetamol 325 mg",
        "dose": "1 tab",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) after meals",
        "duration": "For 5 days",
        "instructions": "Analgesia for post-infarction flank pain and capsular distension.",
        "category": "NSAID + Analgesic"
      },
      {
        "item": "Tab Cefixime",
        "dose": "200 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD)",
        "duration": "For 5 days",
        "instructions": "Antibiotic prophylaxis for infarcted renal tissue.",
        "category": "Antibiotic"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD)",
        "duration": "For 10 days",
        "instructions": "Gastroprotection.",
        "category": "PPI"
      },
      {
        "item": "Syp Disodium Hydrogen Citrate",
        "dose": "15 mL",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) in water",
        "duration": "For 7 days",
        "instructions": "Urinary alkalinizer to protect tubular filtration.",
        "category": "Urinary Alkalinizer"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Severe Flank Pain or Hematuria",
        "drug": "Tab Tramadol 37.5 mg + Paracetamol 325 mg",
        "dose": "1 tab PO SOS (Max 3/day)",
        "instructions": "Take after meals."
      },
      {
        "trigger": "Sudden Hypotension or Cold Clammy Skin",
        "drug": "Emergency Resuscitation",
        "dose": "Immediate SMS hospital presentation",
        "instructions": "Rule out acute retroperitoneal re-bleeding."
      }
    ],
    "safetyLabsToMonitor": [
      "Serum Creatinine & Blood Urea at 48 hours",
      "Urine Routine & Microscopic analysis at Day 5",
      "Contrast-enhanced CT Abdomen at 3 months (verify volume regression of fatty and vascular tumor components)"
    ],
    "recallSchedule": [
      "Week 1: Flank tenderness assessment and puncture site review in IR OPD.",
      "Month 3: Follow-up CT Kidney to evaluate tumor shrinkage (> 30% reduction expected)."
    ]
  },
  {
    "id": "bone_cryo_cement",
    "name": "Post-Image Guided Bone Cryoablation & Osteoplasty / Cementoplasty",
    "shortName": "Bone Cryo & Cement",
    "category": "Musculoskeletal Oncology",
    "system": "Oncology & Ablation",
    "indication": "Painful osteolytic metastases in weight-bearing bones or acetabulum treated with percutaneous cryoablation and PMMA bone cement augmentation.",
    "prescriptions": [
      {
        "item": "Tab Etoricoxib",
        "dose": "90 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) after meals",
        "duration": "For 7 days",
        "instructions": "Selective COX-2 inhibitor for targeted bone and periosteal pain relief.",
        "category": "COX-2 Inhibitor"
      },
      {
        "item": "Tab Paracetamol",
        "dose": "650 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS)",
        "duration": "For 7 days",
        "instructions": "Synergistic analgesic.",
        "category": "Analgesic"
      },
      {
        "item": "Tab Pregabalin",
        "dose": "75 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) at bedtime",
        "duration": "For 14 days",
        "instructions": "Neuropathic periosteal pain control.",
        "category": "Neuropathic Analgesic"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD)",
        "duration": "For 14 days",
        "instructions": "Gastroprotection.",
        "category": "PPI"
      },
      {
        "item": "Tab Cefuroxime Axetil",
        "dose": "500 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD)",
        "duration": "For 5 days",
        "instructions": "Prophylactic antibiotic for cementoplasty tract.",
        "category": "Antibiotic"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Sudden Sharp Mechanical Pain on Weight-Bearing",
        "drug": "Immediate Non-Weight Bearing",
        "dose": "Use crutches / wheelchair stat; urgent radiograph",
        "instructions": "Rule out pathological fracture at cement boundary."
      },
      {
        "trigger": "Incisional Swelling / Serous Leakage",
        "drug": "Sterile Compressive Dressing",
        "dose": "Keep dry for 48 hours",
        "instructions": "Report to IR team."
      }
    ],
    "safetyLabsToMonitor": [
      "Pain score (VAS 0-10) and opioid reduction assessment at 1 week",
      "Post-procedure pelvic / spine radiograph to verify cement distribution without vascular extravasation"
    ],
    "recallSchedule": [
      "Day 3: Ambulation assessment with crutches / walker assistance.",
      "Week 2: Suture removal and functional mobility review in SMS IR OPD.",
      "Month 1 & 3: MRI / CT follow-up for local tumor ablation zone verification."
    ]
  },
  {
    "id": "thyroid_ablation",
    "name": "Post-Percutaneous Thyroid Nodule Radiofrequency Ablation (RFA) & Ethanol Ablation",
    "shortName": "Thyroid RFA / PEI",
    "category": "Endocrine Ablation",
    "system": "Oncology & Ablation",
    "indication": "Symptomatic benign thyroid nodules, autonomous toxic nodules, or cystic thyroid lesions treated via hydrodissection and RFA / PEI.",
    "prescriptions": [
      {
        "item": "Tab Aceclofenac 100 mg + Paracetamol 325 mg",
        "dose": "1 tab",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) after meals",
        "duration": "For 3 days",
        "instructions": "Relieves anterior neck soreness and swallowing discomfort.",
        "category": "NSAID + Analgesic"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD)",
        "duration": "For 7 days",
        "instructions": "Gastroprotection.",
        "category": "PPI"
      },
      {
        "item": "Cold Ice Pack Therapy",
        "dose": "Apply 15 min every 2 hours",
        "route": "Topical",
        "freq": "First 24 hours",
        "duration": "For 1 day",
        "instructions": "Reduces neck subcutaneous bruising and thermal tissue edema.",
        "category": "Cryotherapy"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Hoarseness of Voice / Vocal Fatigue",
        "drug": "Strict Voice Rest + Corticosteroid Protocol",
        "dose": "Tab Prednisolone 20 mg PO OD for 3 days",
        "instructions": "Notify IR team for vocal cord mobility check if recurrent laryngeal nerve neuropraxia is suspected."
      },
      {
        "trigger": "Rapidly Enlarging Neck Swelling / Stridor",
        "drug": "Emergency Airway Decompression",
        "dose": "Immediate SMS hospital emergency visit",
        "instructions": "Rule out expanding neck hematoma."
      }
    ],
    "safetyLabsToMonitor": [
      "Thyroid Function Tests (Free T3, Free T4, TSH) at 1 month and 3 months",
      "High-resolution neck ultrasound at 1, 3, 6, and 12 months (calculate Volume Reduction Ratio / VRR; target > 50% VRR at 6m)"
    ],
    "recallSchedule": [
      "Week 1: Voice quality assessment and neck palpation in IR Room 922.",
      "Month 1: First follow-up USG and cosmetic score assessment.",
      "Month 6: Comprehensive thyroid profile and VRR calculation."
    ]
  },
  {
    "id": "evar_tevar",
    "name": "Post-Endovascular Abdominal / Thoracic Aortic Aneurysm Repair (EVAR / TEVAR)",
    "shortName": "Post-EVAR / TEVAR",
    "category": "Aortic Interventions",
    "system": "Vascular & Arterial",
    "indication": "Infrarenal abdominal aortic aneurysm (AAA > 5.5 cm) or descending thoracic aortic aneurysm/dissection treated with modular bifurcated stent-graft.",
    "prescriptions": [
      {
        "item": "Tab Aspirin (Enteric-coated)",
        "dose": "75 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) with lunch",
        "duration": "Indefinitely (Lifelong)",
        "instructions": "Antiplatelet therapy for graft patency and cardiovascular secondary prevention.",
        "category": "Antiplatelet"
      },
      {
        "item": "Tab Atorvastatin",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) at bedtime",
        "duration": "Indefinitely (Lifelong)",
        "instructions": "High-intensity statin therapy for aortic wall and plaque stabilization.",
        "category": "Statin"
      },
      {
        "item": "Tab Telmisartan",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) morning",
        "duration": "Continuous",
        "instructions": "Strict blood pressure control; target systolic BP < 120 mmHg to reduce aortic wall shear stress.",
        "category": "Antihypertensive"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) before breakfast",
        "duration": "For 30 days",
        "instructions": "Gastroprotection.",
        "category": "PPI"
      },
      {
        "item": "Tab Paracetamol",
        "dose": "650 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS) PRN",
        "duration": "For 5 days",
        "instructions": "Post-implantation fever / back soreness.",
        "category": "Analgesic"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Sudden Severe Back or Flank Pain (Suspected Aortic Rupture / Endoleak)",
        "drug": "Emergency CTA SMS Hospital Presentation",
        "dose": "Immediate CTA Aorta stat",
        "instructions": "Call emergency cardiac/vascular surgery line."
      },
      {
        "trigger": "Groin Hematoma / Pulsatile Thrill",
        "drug": "Manual Compression",
        "dose": "Direct pressure for 20 minutes",
        "instructions": "Emergency ultrasound to rule out femoral pseudoaneurysm."
      }
    ],
    "safetyLabsToMonitor": [
      "Serum Creatinine at 48 hours and 1 month (monitor for renal artery coverage or contrast nephropathy)",
      "Complete Blood Count at Day 5 (leukocytosis and mild fever are typical post-implantation syndrome)",
      "Multidetector Contrast CT Angiography (CTA) at 1 month and 12 months (screen for Type I-V Endoleaks, graft migration, or sac enlargement)"
    ],
    "recallSchedule": [
      "Week 1: Bilateral femoral access site inspection (Perclose closure review) and peripheral pulse check.",
      "Month 1: Triphasic CTA Aorta to rule out Type I/III endoleak and measure maximum aneurysm sac diameter.",
      "Month 6: Color Doppler ultrasound or non-contrast CT for lifelong aneurysm sac surveillance."
    ]
  },
  {
    "id": "visceral_aneurysm",
    "name": "Post-Visceral & Splenic Artery Aneurysm Endovascular Coil / Stent Embolization",
    "shortName": "Visceral Aneurysm",
    "category": "Aneurysm Embolization",
    "system": "Vascular & Arterial",
    "indication": "Splenic, hepatic, celiac, or renal artery pseudoaneurysm / true aneurysm (> 2 cm or in pregnancy) treated via front-and-back coiling (sandwich technique) or covered stent.",
    "prescriptions": [
      {
        "item": "Tab Aspirin",
        "dose": "75 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) with food",
        "duration": "For 90 days",
        "instructions": "If covered stent was deployed to maintain vessel patency.",
        "category": "Antiplatelet"
      },
      {
        "item": "Tab Paracetamol",
        "dose": "650 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS)",
        "duration": "For 5 days",
        "instructions": "Analgesia for localized organ ischemia/infarction pain.",
        "category": "Analgesic"
      },
      {
        "item": "Tab Cefixime",
        "dose": "200 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD)",
        "duration": "For 5 days",
        "instructions": "Prophylactic antibiotic.",
        "category": "Antibiotic"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD)",
        "duration": "For 14 days",
        "instructions": "Gastroprotection.",
        "category": "PPI"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Left Upper Quadrant Splenic Infarction Pain",
        "drug": "Tab Tramadol 37.5 mg + Paracetamol 325 mg",
        "dose": "1 tab PO SOS (Max 3/day)",
        "instructions": "Take after meals."
      },
      {
        "trigger": "Severe Dizziness, Pallor, or Diaphoresis",
        "drug": "Emergency Resuscitation",
        "dose": "Immediate SMS hospital visit",
        "instructions": "Rule out aneurysm re-rupture."
      }
    ],
    "safetyLabsToMonitor": [
      "Complete Blood Count (Platelet count surge is expected post-partial splenic infarction) at 1 week",
      "Serum Amylase and Lipase at 48 hours (rule out pancreatitis from micro-ischemia)",
      "Triphasic CECT Abdomen at 1 month to confirm complete aneurysm thrombosis"
    ],
    "recallSchedule": [
      "Week 1: Groin access site review and abdominal exam in IR OPD.",
      "Month 1: Repeat CTA / Doppler ultrasound to verify complete sac exclusion."
    ]
  },
  {
    "id": "renal_stenting",
    "name": "Post-Percutaneous Renal Artery Angioplasty & Stenting (PTRAS)",
    "shortName": "Post-Renal Stenting",
    "category": "Renovascular Interventions",
    "system": "Vascular & Arterial",
    "indication": "Hemodynamically significant (> 70%) atherosclerotic renal artery stenosis (ARAS) or fibromuscular dysplasia (FMD) with refractory hypertension or flash pulmonary edema.",
    "prescriptions": [
      {
        "item": "Tab Clopidogrel",
        "dose": "75 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) with dinner",
        "duration": "For 90 days",
        "instructions": "Dual antiplatelet therapy to prevent in-stent thrombosis.",
        "category": "Antiplatelet"
      },
      {
        "item": "Tab Aspirin",
        "dose": "75 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) with lunch",
        "duration": "Indefinitely (Lifelong)",
        "instructions": "Lifelong secondary cardiovascular prevention.",
        "category": "Antiplatelet"
      },
      {
        "item": "Tab Amlodipine",
        "dose": "5 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) morning",
        "duration": "Continuous",
        "instructions": "Antihypertensive; avoid aggressive ACE inhibitors/ARBs during immediate post-stent hemodynamics.",
        "category": "Calcium Channel Blocker"
      },
      {
        "item": "Tab Atorvastatin",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) at bedtime",
        "duration": "Indefinitely (Lifelong)",
        "instructions": "Statin therapy.",
        "category": "Statin"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD)",
        "duration": "For 30 days",
        "instructions": "Gastroprotection.",
        "category": "PPI"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Sudden Post-Procedural Hypotension",
        "drug": "Rehydration Protocol",
        "dose": "Liberal oral fluids; withhold antihypertensives stat",
        "instructions": "Rebound natriuresis and abrupt renin drop post-revascularization."
      },
      {
        "trigger": "Severe Flank Pain or Microscopic Hematuria",
        "drug": "Urgent Renal Ultrasound",
        "dose": "Emergency Doppler check",
        "instructions": "Rule out subcapsular hematoma or distal branch embolization."
      }
    ],
    "safetyLabsToMonitor": [
      "Blood pressure tracking twice daily (target 120-130 / 75-80 mmHg)",
      "Serum Creatinine and Electrolytes (K+, Na+) at 24 hours, 7 days, and 1 month",
      "Renal Artery Duplex Doppler at 1 month (Peak Systolic Velocity < 180 cm/s indicates stent patency)"
    ],
    "recallSchedule": [
      "Week 1: Blood pressure log audit and access site check in SMS IR OPD.",
      "Month 1: Renal Doppler ultrasound and serum creatinine review.",
      "Month 6: Routine renovascular surveillance and medication titration."
    ]
  },
  {
    "id": "lower_gi_bleed",
    "name": "Post-Superselective Transcatheter Arterial Embolization (TAE) for Lower GI Bleeding",
    "shortName": "Lower GI Bleed TAE",
    "category": "Emergency Embolization",
    "system": "Vascular & Arterial",
    "indication": "Acute severe lower gastrointestinal hemorrhage (diverticular bleed, cecal angiodysplasia, post-polypectomy) embolized superselectively using microcoils / PVA / NBCA glue.",
    "prescriptions": [
      {
        "item": "Tab Cefixime",
        "dose": "200 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD)",
        "duration": "For 5 days",
        "instructions": "Prophylactic antibiotic coverage for bowel mucosal ischemia.",
        "category": "Antibiotic"
      },
      {
        "item": "Tab Metronidazole",
        "dose": "400 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS)",
        "duration": "For 5 days",
        "instructions": "Anaerobic intestinal barrier protection.",
        "category": "Antimicrobial"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD)",
        "duration": "For 14 days",
        "instructions": "Gastroprotection.",
        "category": "PPI"
      },
      {
        "item": "Syp Lactulose",
        "dose": "15 mL",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) at bedtime",
        "duration": "For 7 days",
        "instructions": "Gentle stool softening to prevent hard fecal impaction straining.",
        "category": "Laxative"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Recurrent Massive Hematochezia / Rectal Bleeding",
        "drug": "Emergency SMS Hospital Presentation",
        "dose": "Immediate IV access and blood cross-match",
        "instructions": "Urgent repeat angiography or laparotomy."
      },
      {
        "trigger": "Severe Peritoneal Abdominal Pain / Guarding",
        "drug": "Surgical Consultation Stat",
        "dose": "Emergency CT Abdomen with IV contrast",
        "instructions": "Evaluate for acute segmental bowel infarction."
      }
    ],
    "safetyLabsToMonitor": [
      "Complete Blood Count (Hemoglobin & Hematocrit) every 8 hours for the first 24 hours, then at Day 3 and 7",
      "Serum Lactate at 12 and 24 hours (screens for occult bowel ischemia)",
      "Serum Creatinine for contrast excretion"
    ],
    "recallSchedule": [
      "Day 3: Clinical abdominal examination and puncture site review in hospital ward / OPD.",
      "Week 2: Review in SMS IR OPD with hemoglobin restaging.",
      "Month 1: Colonoscopy coordinated with Gastroenterology to evaluate underlying mucosal pathology."
    ]
  },
  {
    "id": "pelvic_trauma_bleed",
    "name": "Post-Internal Iliac Artery Embolization for Pelvic Fracture Hemorrhage",
    "shortName": "Pelvic Trauma TAE",
    "category": "Trauma & Emergency IR",
    "system": "Vascular & Arterial",
    "indication": "Life-threatening hemodynamic instability from arterial pelvic fracture hemorrhage (anterior/posterior ring disruption) treated with bilateral internal iliac Gelfoam / coil embolization.",
    "prescriptions": [
      {
        "item": "Tab Cefuroxime Axetil",
        "dose": "500 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD)",
        "duration": "For 7 days",
        "instructions": "Broad-spectrum surgical prophylaxis.",
        "category": "Antibiotic"
      },
      {
        "item": "Tab Metronidazole",
        "dose": "400 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS)",
        "duration": "For 7 days",
        "instructions": "Pelvic anaerobic coverage.",
        "category": "Antimicrobial"
      },
      {
        "item": "Tab Paracetamol",
        "dose": "650 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS)",
        "duration": "For 7 days",
        "instructions": "Analgesic.",
        "category": "Analgesic"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) before breakfast",
        "duration": "For 14 days",
        "instructions": "Stress ulcer prophylaxis.",
        "category": "PPI"
      },
      {
        "item": "Tab Drotaverine",
        "dose": "80 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD)",
        "duration": "For 5 days",
        "instructions": "Antispasmodic.",
        "category": "Antispasmodic"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Buttock Claudication / Gluteal Pain",
        "drug": "Tab Paracetamol 650 mg",
        "dose": "1 tab PO SOS",
        "instructions": "Reassure patient (expected transient consequence of internal iliac embolization)."
      },
      {
        "trigger": "Sudden Drop in Blood Pressure / Tachycardia",
        "drug": "Emergency Transfusion Activation",
        "dose": "SMS Massive Transfusion Protocol",
        "instructions": "Immediate trauma team alert."
      }
    ],
    "safetyLabsToMonitor": [
      "Serial Hemoglobin, Hematocrit, and Platelet count every 6 hours until stable for 24 hours",
      "Coagulation Profile (INR, Fibrinogen)",
      "Serum Creatinine and Urine Output monitoring"
    ],
    "recallSchedule": [
      "Week 1: Orthopedic and IR combined trauma ward assessment.",
      "Month 1: Check gluteal muscle viability, sexual function, and ambulation in IR follow-up clinic."
    ]
  },
  {
    "id": "epistaxis_tae",
    "name": "Post-Superselective Sphenopalatine & Facial Artery Embolization for Epistaxis",
    "shortName": "Post-Epistaxis TAE",
    "category": "Head & Neck Embolization",
    "system": "Vascular & Arterial",
    "indication": "Posterior or intractable nasal hemorrhage unresponsive to anterior/posterior packing or endoscopic cautery embolized using PVA particles (300-500 um) / microcoils.",
    "prescriptions": [
      {
        "item": "Tab Amoxicillin-Clavulanate",
        "dose": "625 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) with meals",
        "duration": "For 5 days",
        "instructions": "Prophylaxis for retained nasal mucosal packing.",
        "category": "Antibiotic"
      },
      {
        "item": "Tab Tranexamic Acid",
        "dose": "500 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS)",
        "duration": "For 3 days",
        "instructions": "Antifibrinolytic clot stabilizer.",
        "category": "Antifibrinolytic"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD)",
        "duration": "For 7 days",
        "instructions": "PPI.",
        "category": "PPI"
      },
      {
        "item": "Saline Nasal Spray (0.9% Normal Saline)",
        "dose": "2 sprays in each nostril",
        "route": "Intranasal",
        "freq": "Four Times Daily (QID)",
        "duration": "For 14 days",
        "instructions": "Maintains mucosal hydration and prevents crust cracking.",
        "category": "Nasal Protectant"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Minor Anterior Ooze / Blood-Tinged Mucus",
        "drug": "Local Nasal Compression",
        "dose": "Pinch soft nose 10 min with head forward; ice over bridge",
        "instructions": "Do not sniff aggressively or blow nose."
      },
      {
        "trigger": "Profuse Active Bleeding / Clots",
        "drug": "Emergency SMS ENT/IR Alert",
        "dose": "Immediate hospital presentation",
        "instructions": "Emergency repeat embolization."
      }
    ],
    "safetyLabsToMonitor": [
      "Complete Blood Count (Hemoglobin) at 24 hours",
      "Coagulation parameters (PT/INR, aPTT, Platelets)",
      "Neurological assessment (cranial nerves II-VII) at 4h, 12h, 24h to rule out dangerous non-target external-internal carotid anastomosis embolization"
    ],
    "recallSchedule": [
      "Day 2: Removal of remaining nasal packs by ENT surgeon under IR guidance.",
      "Week 1: Nasal endoscopy to confirm intact mucosal healing and absence of septal perforation."
    ]
  },
  {
    "id": "stroke_thrombectomy",
    "name": "Post-Mechanical Thrombectomy for Acute Ischemic Stroke (LVO / AIS)",
    "shortName": "Post-Stroke EVT",
    "category": "Neurointerventional",
    "system": "Neuro & Head/Neck",
    "indication": "Emergent recanalization (TICI 2b-3) of large vessel occlusion (ICA, MCA M1/M2, Basilar) using stent retriever and direct aspiration catheter.",
    "prescriptions": [
      {
        "item": "Tab Aspirin",
        "dose": "75 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) with lunch",
        "duration": "Indefinitely (Lifelong)",
        "instructions": "Antiplatelet starting 24h post-thrombectomy after ruling out hemorrhage on non-contrast CT.",
        "category": "Antiplatelet"
      },
      {
        "item": "Tab Atorvastatin",
        "dose": "80 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) at bedtime",
        "duration": "Indefinitely (Lifelong)",
        "instructions": "High-intensity statin therapy.",
        "category": "Statin"
      },
      {
        "item": "Tab Telmisartan",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) morning",
        "duration": "Continuous",
        "instructions": "Strict blood pressure maintenance: systolic BP 140-160 mmHg during first 24h, then < 130/80 mmHg.",
        "category": "Antihypertensive"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) before breakfast",
        "duration": "For 30 days",
        "instructions": "PPI.",
        "category": "PPI"
      },
      {
        "item": "Tab Citicoline",
        "dose": "500 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD)",
        "duration": "For 30 days",
        "instructions": "Neuroprotective agent.",
        "category": "Neuroprotective"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Sudden Deterioration in NIHSS / Decreased Sensorium",
        "drug": "Immediate Non-Contrast Head CT",
        "dose": "Emergency CT Scan stat",
        "instructions": "Rule out hemorrhagic transformation (sICH) or malignant cerebral edema."
      },
      {
        "trigger": "Hypertensive Urgency (SBP > 180 mmHg)",
        "drug": "Inj Labetalol",
        "dose": "10-20 mg IV slow bolus in Neuro ICU",
        "instructions": "Notify Stroke neurologist immediately."
      }
    ],
    "safetyLabsToMonitor": [
      "Non-Contrast Head CT at 24 hours post-procedure (mandatory prior to antiplatelet or anticoagulation administration)",
      "Continuous arterial BP and SpO2 monitoring in Neuro ICU for 24-48 hours",
      "Fasting Lipid Profile, HbA1c, and Serum Creatinine"
    ],
    "recallSchedule": [
      "Day 3: Physical, occupational, and speech therapy mobilization review in Stroke Unit.",
      "Month 1: Modified Rankin Scale (mRS) functional assessment and carotid Doppler in Neuro IR OPD.",
      "Month 3: Formal 90-day mRS score evaluation (target: mRS 0-2 for functional independence)."
    ]
  },
  {
    "id": "carotid_stenting",
    "name": "Post-Carotid Artery Angioplasty & Stenting (CAS) with Embolic Protection",
    "shortName": "Post-Carotid Stent",
    "category": "Neurovascular Interventions",
    "system": "Neuro & Head/Neck",
    "indication": "Symptomatic (> 50%) or high-grade asymptomatic (> 70%) internal carotid artery stenosis treated with distal filter protection and self-expanding closed/open-cell stent.",
    "prescriptions": [
      {
        "item": "Tab Clopidogrel",
        "dose": "75 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) with dinner",
        "duration": "For 90 days",
        "instructions": "Dual antiplatelet therapy to prevent acute in-stent thrombosis.",
        "category": "Antiplatelet"
      },
      {
        "item": "Tab Aspirin",
        "dose": "75 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) with lunch",
        "duration": "Indefinitely (Lifelong)",
        "instructions": "Lifelong secondary stroke prevention.",
        "category": "Antiplatelet"
      },
      {
        "item": "Tab Atorvastatin",
        "dose": "80 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) at bedtime",
        "duration": "Indefinitely (Lifelong)",
        "instructions": "Plaque stabilization.",
        "category": "Statin"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) before breakfast",
        "duration": "For 30 days",
        "instructions": "Gastroprotection.",
        "category": "PPI"
      },
      {
        "item": "Tab Midodrine",
        "dose": "5 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS) PRN",
        "duration": "For 5 days",
        "instructions": "If persistent baroreceptor-mediated post-stent hypotension occurs.",
        "category": "Vasopressor"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Severe Unilateral Headache, Eye Pain, or Seizure (Cerebral Hyperperfusion Syndrome / CHS)",
        "drug": "Emergency Neuro ICU Admission",
        "dose": "Head elevation 30 deg; strict SBP lowering (< 120 mmHg) with IV Labetalol",
        "instructions": "Emergency Head CT to rule out hyperperfusion hemorrhage."
      },
      {
        "trigger": "Transient Bradycardia / Syncope",
        "drug": "Fluid & Salt Hydration",
        "dose": "Oral salt water + leg elevation",
        "instructions": "Notify Neuro IR team."
      }
    ],
    "safetyLabsToMonitor": [
      "Carotid Duplex Ultrasound at 24 hours (confirm stent expansion and mid-stent PSV < 130 cm/s)",
      "Blood pressure and pulse recording every hour for 24 hours (watch for carotid sinus hypersensitivity bradycardia)",
      "Serum Creatinine at 48 hours"
    ],
    "recallSchedule": [
      "Week 1: Groin access site review and neurological deficit screening.",
      "Month 1: Carotid Doppler ultrasound in Neuro IR Suite.",
      "Month 6: Surveillance carotid ultrasound to screen for myointimal hyperplasia."
    ]
  },
  {
    "id": "aneurysm_coiling",
    "name": "Post-Intracranial Aneurysm Endovascular Coiling & Flow Diverter Stenting",
    "shortName": "Aneurysm Coiling",
    "category": "Neurointerventional",
    "system": "Neuro & Head/Neck",
    "indication": "Ruptured or unruptured cerebral berry aneurysm treated with bare platinum coils, stent-assisted coiling, or flow diverter (Pipeline / Surpass / FRED).",
    "prescriptions": [
      {
        "item": "Tab Ticagrelor",
        "dose": "90 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) with food",
        "duration": "For 180 days",
        "instructions": "For flow diverters / stent-assisted coiling; dual antiplatelet regimen.",
        "category": "Antiplatelet"
      },
      {
        "item": "Tab Aspirin",
        "dose": "75 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) with lunch",
        "duration": "Indefinitely (Lifelong)",
        "instructions": "Antiplatelet.",
        "category": "Antiplatelet"
      },
      {
        "item": "Tab Nimodipine",
        "dose": "60 mg",
        "route": "Oral (PO)",
        "freq": "Every 4 Hours around the clock",
        "duration": "For 21 days",
        "instructions": "Crucial dihydropyridine calcium channel blocker to prevent delayed cerebral vasospasm in subarachnoid hemorrhage.",
        "category": "Cerebrovascular Calcium Channel Blocker"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD)",
        "duration": "For 30 days",
        "instructions": "PPI.",
        "category": "PPI"
      },
      {
        "item": "Tab Levetiracetam",
        "dose": "500 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD)",
        "duration": "For 30 days",
        "instructions": "Antiepileptic seizure prophylaxis.",
        "category": "Anticonvulsant"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Thunderclap Headache or Recurrent Meningismus",
        "drug": "Emergency Non-Contrast Head CT",
        "dose": "Immediate CT stat",
        "instructions": "Rule out aneurysm re-rupture."
      },
      {
        "trigger": "Severe Constipation from Bed Rest",
        "drug": "Syp Lactulose",
        "dose": "20 mL PO at bedtime",
        "instructions": "Prevent Valsalva straining."
      }
    ],
    "safetyLabsToMonitor": [
      "Transcranial Doppler (TCD) daily for 14 days (screen for MCA/ACA mean flow velocity > 120 cm/s indicating vasospasm)",
      "Verify platelet function (PRUTest / VerifyNow for P2Y12 inhibition: target PRU 60-200)",
      "Serum Electrolytes daily (watch for cerebral salt wasting / hyponatremia)"
    ],
    "recallSchedule": [
      "Day 14: Suture removal and transition to oral neurovascular medications.",
      "Month 3: Diagnostic digital subtraction angiography (DSA) or MRA to assess Raymond-Roy occlusion classification.",
      "Month 12: Definitive DSA follow-up to confirm complete aneurysm neck remodeling and flow diverter endothelialization."
    ]
  },
  {
    "id": "csdh_mma",
    "name": "Post-Middle Meningeal Artery (MMA) Embolization for Chronic Subdural Hematoma",
    "shortName": "Post-MMA cSDH",
    "category": "Neurovascular Interventions",
    "system": "Neuro & Head/Neck",
    "indication": "Recurrent or de-novo chronic subdural hematoma (cSDH) in elderly or anticoagulated patients treated with PVA particles / Onyx / Squid embolization of anterior and posterior MMA branches.",
    "prescriptions": [
      {
        "item": "Tab Dexamethasone",
        "dose": "2 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD)",
        "duration": "For 5 days",
        "stepDown": "Taper to 1 mg BD for 3 days, then 0.5 mg OD for 2 days",
        "instructions": "Reduces inflammatory neomembrane dural exudation.",
        "category": "Corticosteroid"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) before breakfast",
        "duration": "For 14 days",
        "instructions": "PPI for steroid gastroprotection.",
        "category": "PPI"
      },
      {
        "item": "Tab Paracetamol",
        "dose": "650 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS) PRN",
        "duration": "For 5 days",
        "instructions": "Temporal/headache relief.",
        "category": "Analgesic"
      },
      {
        "item": "Tab Levetiracetam",
        "dose": "500 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD)",
        "duration": "For 14 days",
        "instructions": "Prophylactic anticonvulsant.",
        "category": "Anticonvulsant"
      }
    ],
    "prnMedications": [
      {
        "trigger": "New-Onset Limb Weakness or Confusion",
        "drug": "Immediate Non-Contrast Head CT",
        "dose": "Emergency CT scan",
        "instructions": "Evaluate hematoma expansion."
      },
      {
        "trigger": "Severe Temporal Pounding Pain",
        "drug": "Tab Tramadol 37.5 mg + Paracetamol 325 mg",
        "dose": "1 tab PO SOS",
        "instructions": "Take after meals."
      }
    ],
    "safetyLabsToMonitor": [
      "Serum Creatinine at 48 hours",
      "Fasting Blood Sugar (monitor during corticosteroid course)",
      "Non-Contrast Head CT at 2 weeks, 6 weeks, and 3 months (track gradual volumetric resorption of subdural fluid)"
    ],
    "recallSchedule": [
      "Week 2: Neurological exam, cognitive scoring, and repeat head CT scan in SMS Neuro IR OPD.",
      "Month 2: Repeat CT to confirm > 70% reduction in cSDH thickness and midline shift resolution."
    ]
  },
  {
    "id": "head_neck_avm",
    "name": "Post-Percutaneous & Transarterial Sclerotherapy for Head & Neck / Facial AVM",
    "shortName": "Facial AVM Sclero",
    "category": "Vascular Malformations",
    "system": "Neuro & Head/Neck",
    "indication": "High-flow maxillofacial, lip, cheek, or auricular arteriovenous malformations (Schobinger Stage II-IV) treated with absolute ethanol / bleomycin / Onyx embolization.",
    "prescriptions": [
      {
        "item": "Tab Methylprednisolone",
        "dose": "16 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) with breakfast",
        "duration": "For 5 days",
        "stepDown": "Taper by 4 mg every 2 days",
        "instructions": "Controls massive facial soft tissue swelling and airway compromise.",
        "category": "Corticosteroid"
      },
      {
        "item": "Tab Amoxicillin-Clavulanate",
        "dose": "625 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) with meals",
        "duration": "For 5 days",
        "instructions": "Antibiotic prophylaxis for necrotic mucosal tracts.",
        "category": "Antibiotic"
      },
      {
        "item": "Tab Paracetamol",
        "dose": "650 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS)",
        "duration": "For 7 days",
        "instructions": "Analgesic.",
        "category": "Analgesic"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) before breakfast",
        "duration": "For 14 days",
        "instructions": "PPI.",
        "category": "PPI"
      },
      {
        "item": "Cold Normal Saline Compresses",
        "dose": "Apply 15 min every 3 hours",
        "route": "Topical",
        "freq": "First 48 hours",
        "duration": "For 2 days",
        "instructions": "Reduces cutaneous edema.",
        "category": "Local Cryotherapy"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Stridor or Difficulty Breathing / Swallowing (Airway Edema)",
        "drug": "Emergency Airway Presentation",
        "dose": "Immediate SMS hospital visit; IV Dexamethasone 8 mg stat",
        "instructions": "Immediate airway stabilization."
      },
      {
        "trigger": "Skin Blistering / Blackish Necrotic Patch",
        "drug": "Mupirocin 2% Topical Ointment",
        "dose": "Apply gently twice daily",
        "instructions": "Do not debride prematurely."
      }
    ],
    "safetyLabsToMonitor": [
      "Oxygen saturation (SpO2) continuous for 12 hours post-procedure",
      "Complete Blood Count and Liver Function Tests at Day 5",
      "Contrast MRI Face with 3D MR Angiography at 6 weeks"
    ],
    "recallSchedule": [
      "Day 3: Airway and facial edema assessment in IR Suite.",
      "Week 2: Skin healing, ulceration check, and cosmetic evaluation in IR OPD.",
      "Month 2: Plan next staged sclerotherapy session if residual nidus remains."
    ]
  },
  {
    "id": "pulmonary_pe_thrombolysis",
    "name": "Post-Percutaneous Catheter-Directed Thrombectomy for Massive / Submassive PE",
    "shortName": "Post-PE Thrombectomy",
    "category": "Cardiopulmonary Interventions",
    "system": "Thoracic & Pulmonology",
    "indication": "High-risk or intermediate-high-risk pulmonary embolism with right ventricular strain / hypotension treated via aspiration thrombectomy (Inari FlowTriever / AngioJet / Penumbra Indigo).",
    "prescriptions": [
      {
        "item": "Tab Apixaban",
        "dose": "10 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) with meals",
        "duration": "For 7 days (Loading phase)",
        "stepDown": "Then switch to Tab Apixaban 5 mg PO Twice Daily for 6 months (Maintenance phase)",
        "instructions": "Immediate continuation of oral DOAC anticoagulation.",
        "category": "DOAC Anticoagulant"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) before breakfast",
        "duration": "For 30 days",
        "instructions": "PPI.",
        "category": "PPI"
      },
      {
        "item": "Tab Paracetamol",
        "dose": "650 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS) PRN",
        "duration": "For 5 days",
        "instructions": "Pleuritic chest pain relief.",
        "category": "Analgesic"
      },
      {
        "item": "Incentive Spirometry Breathing",
        "dose": "10 breaths every waking hour",
        "route": "Inhalation",
        "freq": "Daily",
        "duration": "For 14 days",
        "instructions": "Prevents post-ischemic atelectasis.",
        "category": "Respiratory Therapy"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Sudden Oxygen Desaturation (SpO2 < 90%) or Hemoptysis",
        "drug": "Emergency Oxygen & Resuscitation",
        "dose": "High-flow oxygen stat; urgent CTA Chest",
        "instructions": "Notify pulmonary/ICU team immediately."
      },
      {
        "trigger": "Massive Groin Puncture Site Bleeding",
        "drug": "Bilateral Groin Compression",
        "dose": "Firm local pressure for 20 minutes",
        "instructions": "Vascular surgical consult stat."
      }
    ],
    "safetyLabsToMonitor": [
      "Continuous SpO2, Heart Rate, and Blood Pressure in ICU",
      "High-sensitivity Troponin I and NT-proBNP at 24 and 48 hours (track recovery of RV strain)",
      "Transthoracic Echocardiogram (TTE) at 48 hours (verify RV/LV diameter ratio normalization to < 0.9 and tricuspid annular plane systolic excursion / TAPSE > 16 mm)"
    ],
    "recallSchedule": [
      "Week 1: Groin access check and oxygen requirement evaluation.",
      "Month 1: Follow-up Echocardiogram in Cardiology / IR joint clinic.",
      "Month 3 & 6: Clinical assessment for Chronic Thromboembolic Pulmonary Hypertension (CTEPH) with repeat Doppler and 6-minute walk test."
    ]
  },
  {
    "id": "pavm_embolization",
    "name": "Post-Endovascular Coil & Vascular Plug Embolization for Pulmonary AVM",
    "shortName": "Post-PAVM Coiling",
    "category": "Pulmonary Interventions",
    "system": "Thoracic & Pulmonology",
    "indication": "Hereditary Hemorrhagic Telangiectasia (HHT / Osler-Weber-Rendu) or idiopathic simple/complex pulmonary AVM with feeding artery > 2 mm, treated with Amplatzer plugs / microcoils.",
    "prescriptions": [
      {
        "item": "Tab Paracetamol",
        "dose": "650 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS) with food",
        "duration": "For 5 days",
        "instructions": "Manages self-limiting pleurisy from localized lung parenchymal ischemia.",
        "category": "Analgesic"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD)",
        "duration": "For 7 days",
        "instructions": "PPI.",
        "category": "PPI"
      },
      {
        "item": "Tab Amoxicillin (Dental Prophylaxis)",
        "dose": "2 g",
        "route": "Oral (PO)",
        "freq": "Single dose 1 hour prior to any invasive dental procedures",
        "duration": "Lifelong until all PAVMs are embolized",
        "instructions": "Mandatory lifelong antibiotic prophylaxis against paradoxical cerebral abscesses.",
        "category": "Antibiotic Prophylaxis"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Sharp Pleuritic Chest Pain / Low-Grade Fever (Self-limiting Pleurisy)",
        "drug": "Tab Paracetamol 650 mg",
        "dose": "1 tab PO TDS SOS",
        "instructions": "Usually resolves within 72 hours."
      },
      {
        "trigger": "Hemoptysis or Sudden Focal Neurological Deficit",
        "drug": "Emergency Hospital Presentation",
        "dose": "Immediate ER review",
        "instructions": "Suspected coil migration or paradoxical thromboembolism."
      }
    ],
    "safetyLabsToMonitor": [
      "Pulse oximetry on room air (SpO2 should improve by 3-8% within 24 hours)",
      "Complete Blood Count at 1 week (evaluate resolution of secondary erythrocytosis / polycythemia)",
      "Contrast-Enhanced Chest CT with thin-section arterial reconstructions at 6 months (verify complete sac thrombosis and lack of collateral reperfusion)"
    ],
    "recallSchedule": [
      "Week 1: Review room-air SpO2 and groin access in IR OPD.",
      "Month 6: Non-contrast or low-dose contrast Thoracic CT to confirm nidus involution.",
      "Year 3 & 5: Routine surveillance for newly developing microscopic PAVMs."
    ]
  },
  {
    "id": "pleural_ipc",
    "name": "Post-Tunneled Indwelling Pleural Catheter (IPC / PleurX) for Malignant Pleural Effusion",
    "shortName": "Pleural IPC Drain",
    "category": "Thoracic Interventions",
    "system": "Thoracic & Pulmonology",
    "indication": "Recurrent, symptomatic malignant pleural effusion or trapped lung treated with subcutaneously tunneled silicone pleural catheter with one-way valve.",
    "prescriptions": [
      {
        "item": "Tab Cefuroxime Axetil",
        "dose": "500 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) with meals",
        "duration": "For 5 days",
        "instructions": "Prophylaxis against tunnel and pleural cavity tract infection.",
        "category": "Antibiotic"
      },
      {
        "item": "Tab Paracetamol",
        "dose": "650 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS) PRN",
        "duration": "For 5 days",
        "instructions": "Incisional and pleural drain tract analgesia.",
        "category": "Analgesic"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) before breakfast",
        "duration": "For 14 days",
        "instructions": "PPI.",
        "category": "PPI"
      },
      {
        "item": "Sterile Vacuum Bottle Drainage Kit",
        "dose": "Drain maximum 1,000 mL per session",
        "route": "Pleural Drainage",
        "freq": "2 to 3 times weekly",
        "duration": "As needed",
        "instructions": "Never drain > 1,500 mL in a single sitting to prevent re-expansion pulmonary edema.",
        "category": "Drainage Protocol"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Cough / Chest Tightness During Drainage",
        "drug": "Catheter Clamp",
        "dose": "Stop suction drainage immediately; clamp catheter",
        "instructions": "Re-expansion symptom."
      },
      {
        "trigger": "Purulent / Cloudy Pleural Fluid or Spiking Fever",
        "drug": "Emergency Pleural Fluid Culture",
        "dose": "Immediate SMS hospital visit",
        "instructions": "Urgent IV antibiotic therapy for pleural empyema."
      }
    ],
    "safetyLabsToMonitor": [
      "Daily log of drained fluid volume, color, and character",
      "Serum Electrolytes and Albumin every 2 weeks (recurrent drainage can cause hypoproteinemia)",
      "Upright Chest Radiograph at 2 weeks (assess lung re-expansion and spontaneous pleurodesis)"
    ],
    "recallSchedule": [
      "Week 2: Tunnel site inspection, dressing change, and suture removal in SMS IR OPD.",
      "Month 2: Evaluate for spontaneous pleurodesis (if drainage drops to < 50 mL for 3 consecutive sessions with complete lung expansion, catheter can be removed)."
    ]
  },
  {
    "id": "ivc_filter_retrieval",
    "name": "Post-Complex Endovascular Inferior Vena Cava (IVC) Filter Retrieval",
    "shortName": "IVC Filter Retrieval",
    "category": "Venous Interventions",
    "system": "Venous & Lymphatic",
    "indication": "Elective retrieval of embedded, tilted, or fractured retrievable IVC filter (Option, Celect, Denali, Günther Tulip) using endobronchial forceps, sling, or laser sheath technique.",
    "prescriptions": [
      {
        "item": "Tab Rivaroxaban",
        "dose": "20 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) with food",
        "duration": "For 30 days",
        "instructions": "Maintains caval and deep venous patency following mechanical endotheliectomy / filter dislodgement.",
        "category": "DOAC Anticoagulant"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) before breakfast",
        "duration": "For 30 days",
        "instructions": "PPI.",
        "category": "PPI"
      },
      {
        "item": "Tab Paracetamol",
        "dose": "650 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS) PRN",
        "duration": "For 3 days",
        "instructions": "Analgesia for internal jugular and femoral puncture sites.",
        "category": "Analgesic"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Expanding Neck Swelling or Dyspnea",
        "drug": "Manual Compression over IJV",
        "dose": "Firm local pressure for 15 minutes",
        "instructions": "Emergency SMS hospital review."
      },
      {
        "trigger": "Severe Abdominal or Back Pain (Caval Tear / Retroperitoneal Bleed)",
        "drug": "Emergency CT Angiography",
        "dose": "Immediate CTA Abdomen and Pelvis",
        "instructions": "Vascular surgery alert."
      }
    ],
    "safetyLabsToMonitor": [
      "Complete Blood Count (Hemoglobin) at 24 hours post-retrieval",
      "Cavogram inspection at the end of the procedure for contrast extravasation",
      "Venous Duplex Ultrasound of Lower Extremity at 1 month to confirm underlying DVT status"
    ],
    "recallSchedule": [
      "Day 3: Neck and groin puncture site inspection.",
      "Month 1: Review in IR OPD with hematology/vascular team to decide long-term anticoagulation discontinuation."
    ]
  },
  {
    "id": "pelvic_congestion",
    "name": "Post-Ovarian & Internal Iliac Vein Embolization for Pelvic Congestion Syndrome",
    "shortName": "Pelvic Congestion",
    "category": "Venous Interventions",
    "system": "Venous & Lymphatic",
    "indication": "Chronic pelvic pain (> 6 months) worsened by standing and coitus, secondary to retrograde ovarian vein reflux (diameter > 6 mm) and pelvic venous varices, embolized with coils and STS foam.",
    "prescriptions": [
      {
        "item": "Tab Aceclofenac 100 mg + Paracetamol 325 mg",
        "dose": "1 tab",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) after meals",
        "duration": "For 5 days",
        "instructions": "Analgesia for thrombophlebitic ovarian vein thrombosis.",
        "category": "NSAID + Analgesic"
      },
      {
        "item": "Tab Micronized Purified Flavonoid Fraction (Daflon)",
        "dose": "500 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) with meals",
        "duration": "For 60 days",
        "instructions": "Venotonic therapy to enhance residual pelvic venous tone.",
        "category": "Venotonic"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) before breakfast",
        "duration": "For 14 days",
        "instructions": "PPI.",
        "category": "PPI"
      },
      {
        "item": "Tab Drotaverine",
        "dose": "80 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD)",
        "duration": "For 5 days",
        "instructions": "Pelvic antispasmodic.",
        "category": "Antispasmodic"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Sharp Left Flank / Pelvic Aching",
        "drug": "Tab Tramadol 37.5 mg + Paracetamol 325 mg",
        "dose": "1 tab PO SOS (Max 3/day)",
        "instructions": "Take after meals."
      },
      {
        "trigger": "Vaginal Spotting or Sclerosant Reactions",
        "drug": "Bed Rest & Fluid Hydration",
        "dose": "Oral fluids 2L/day",
        "instructions": "Notify IR OPD."
      }
    ],
    "safetyLabsToMonitor": [
      "Transvaginal and Pelvic Doppler Ultrasound at 6 weeks (confirm absence of reflux in left ovarian vein and shrinkage of broad ligament varices)",
      "Visual Analog Scale (VAS) pain score tracking at 1, 3, and 6 months"
    ],
    "recallSchedule": [
      "Week 2: Clinical review of groin/jugular access site and pain score evaluation.",
      "Month 3: Repeat pelvic Doppler scan and evaluate symptom relief (expected > 80% improvement in pelvic heaviness)."
    ]
  },
  {
    "id": "thoracic_duct_tde",
    "name": "Post-Percutaneous Lymphangiography & Thoracic Duct Embolization (TDE)",
    "shortName": "Thoracic Duct TDE",
    "category": "Lymphatic Interventions",
    "system": "Venous & Lymphatic",
    "indication": "High-output traumatic, iatrogenic post-esophagectomy/thoracotomy, or idiopathic chylothorax treated with transabdominal cisterna chyli puncture and thoracic duct microcoil / Onyx / glue embolization.",
    "prescriptions": [
      {
        "item": "Tab Cefuroxime Axetil",
        "dose": "500 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) with food",
        "duration": "For 5 days",
        "instructions": "Prophylactic antibiotic for transperitoneal cisterna chyli puncture.",
        "category": "Antibiotic"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) before breakfast",
        "duration": "For 14 days",
        "instructions": "PPI.",
        "category": "PPI"
      },
      {
        "item": "Tab Paracetamol",
        "dose": "650 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS)",
        "duration": "For 5 days",
        "instructions": "Abdominal and chest soreness.",
        "category": "Analgesic"
      },
      {
        "item": "Strict Medium-Chain Triglyceride (MCT) Diet",
        "dose": "MCT oil based diet only",
        "route": "Oral Dietary",
        "freq": "All meals",
        "duration": "For 14 days",
        "instructions": "MCT fats are absorbed directly into the portal circulation bypassing the thoracic duct, minimizing lymphatic pressure.",
        "category": "Nutritional Protocol"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Re-Accumulation of Milky Pleural Fluid (> 500 mL/day)",
        "drug": "Notify IR Surgical Team",
        "dose": "Repeat chest ultrasound stat",
        "instructions": "Evaluate residual collateral leak."
      },
      {
        "trigger": "Severe Peritoneal Irritation",
        "drug": "Emergency Abdominal Exam",
        "dose": "Immediate surgical review",
        "instructions": "Rule out intra-abdominal lymph or bile leak."
      }
    ],
    "safetyLabsToMonitor": [
      "Daily chest tube drainage volume and visual clarity (target: clear serous output < 100 mL/day prior to chest drain removal)",
      "Pleural fluid triglyceride level (Normal < 110 mg/dL confirms chyle seal)",
      "Complete Blood Count and Total Protein / Albumin"
    ],
    "recallSchedule": [
      "Day 5: Chest tube removal once output drops below 100 mL/day on a full regular meal challenge.",
      "Week 2: Chest Radiograph and puncture site review in SMS IR OPD.",
      "Month 1: Follow-up ultrasound and chest X-ray to document absence of recurrent pleural effusion."
    ]
  },
  {
    "id": "gae_knee",
    "name": "Post-Genicular Artery Embolization (GAE) for Refractory Knee Osteoarthritis Pain",
    "shortName": "Post-GAE Knee",
    "category": "Musculoskeletal Interventions",
    "system": "Musculoskeletal & Pain",
    "indication": "Moderate-to-severe knee osteoarthritis pain (Kellgren-Lawrence grade 2-4) with synovial hypervascularity resistant to conservative therapy and intra-articular injections, embolized with 100-300 um embolic beads / Imipenem-Cilastatin.",
    "prescriptions": [
      {
        "item": "Tab Paracetamol",
        "dose": "650 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS) with food",
        "duration": "For 7 days",
        "instructions": "Primary analgesic.",
        "category": "Analgesic"
      },
      {
        "item": "Tab Aceclofenac",
        "dose": "100 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) after meals",
        "duration": "For 5 days",
        "instructions": "Anti-inflammatory during synovial hypervascularity shutdown.",
        "category": "NSAID"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) before breakfast",
        "duration": "For 10 days",
        "instructions": "PPI.",
        "category": "PPI"
      },
      {
        "item": "Knee Ice Pack Therapy",
        "dose": "15 min 3 times daily",
        "route": "Topical",
        "freq": "Three times daily",
        "duration": "For 3 days",
        "instructions": "Apply over knee joint; avoids warm compresses.",
        "category": "Cryotherapy"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Mild Knee Erythema or Cutaneous Mottling",
        "drug": "Reassurance Protocol",
        "dose": "Gentle moisturization",
        "instructions": "Reassure patient (transient ischemic cutaneous blush lasting 2-5 days); avoid hot compresses."
      },
      {
        "trigger": "Acute Calf Swelling / Pain",
        "drug": "Emergency Venous Duplex Ultrasound",
        "dose": "Immediate duplex scan",
        "instructions": "Rule out DVT."
      }
    ],
    "safetyLabsToMonitor": [
      "WOMAC (Western Ontario and McMaster Universities Osteoarthritis Index) and KOOS scores at baseline, 1 month, and 3 months",
      "Distal pedal pulse checks (Dorsalis Pedis and Posterior Tibial)"
    ],
    "recallSchedule": [
      "Day 3: Groin/pedal puncture site check and pain score log review.",
      "Month 1: Clinical mobility exam and WOMAC score comparison in SMS IR OPD.",
      "Month 3 & 6: Long-term pain-free walking distance and knee flexion range assessment."
    ]
  },
  {
    "id": "vertebroplasty",
    "name": "Post-Percutaneous Vertebroplasty & Balloon Kyphoplasty for Vertebral Fractures",
    "shortName": "Vertebroplasty",
    "category": "Spine Interventions",
    "system": "Musculoskeletal & Pain",
    "indication": "Severe focal back pain from osteoporotic or malignant vertebral compression fractures (VCF) refractory to bed rest, treated via transpedicular polymethylmethacrylate (PMMA) cement injection.",
    "prescriptions": [
      {
        "item": "Tab Paracetamol",
        "dose": "650 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS) with food",
        "duration": "For 5 days",
        "instructions": "Incisional and paraspinal muscular soreness relief.",
        "category": "Analgesic"
      },
      {
        "item": "Tab Calcium Carbonate 500 mg + Vitamin D3 250 IU",
        "dose": "1 tab",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) with meals",
        "duration": "Continuous",
        "instructions": "Baseline anti-osteoporotic bone remineralization.",
        "category": "Mineral & Vitamin Supplement"
      },
      {
        "item": "Tab Alendronate",
        "dose": "70 mg",
        "route": "Oral (PO)",
        "freq": "Once Weekly with full glass water",
        "duration": "Continuous (Lifelong)",
        "instructions": "Bisphosphonate to prevent subsequent adjacent-level fractures; must take 30 min before breakfast and remain upright for 30 min.",
        "category": "Bisphosphonate"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD)",
        "duration": "For 14 days",
        "instructions": "PPI.",
        "category": "PPI"
      },
      {
        "item": "Rigid / Semi-Rigid Lumbar Support Brace",
        "dose": "Wear during all upright ambulation",
        "route": "Orthotic Support",
        "freq": "Daytime",
        "duration": "For 3 weeks",
        "instructions": "Provides external spinal stabilization during cement curing.",
        "category": "Spinal Orthosis"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Acute Radicular Leg Pain / Sciatica",
        "drug": "Emergency Spine MRI / CT",
        "dose": "Immediate paraspinal imaging",
        "instructions": "Rule out posterior epidural cement extravasation."
      },
      {
        "trigger": "Sudden Back Pain at New Vertebral Level",
        "drug": "Spine Radiograph",
        "dose": "Immediate lateral spine radiograph",
        "instructions": "Re-evaluate for adjacent segment vertebral compression fracture."
      }
    ],
    "safetyLabsToMonitor": [
      "Serum Calcium, Phosphate, and Alkaline Phosphatase at 1 month",
      "25-Hydroxy Vitamin D level",
      "Spine X-Ray at 1 month to confirm stable PMMA cement height and absence of subsidence"
    ],
    "recallSchedule": [
      "Day 2: Upright mobilization and gait stability check with physiotherapist.",
      "Week 2: Skin suture/tape removal and back examination in SMS IR OPD.",
      "Month 3: Repeat DEXA bone mineral density scan and adjacent level vertebral assessment."
    ]
  },
  {
    "id": "celiac_plexus_block",
    "name": "Post-Image Guided Celiac Plexus Neurolysis (CPN) for Intractable Abdominal Pain",
    "shortName": "Celiac Neurolysis",
    "category": "Pain Management",
    "system": "Musculoskeletal & Pain",
    "indication": "Severe visceral pain from unresectable pancreatic carcinoma, gastric cancer, or chronic pancreatitis treated via retrocrural or transaortic absolute alcohol (99%) neurolysis.",
    "prescriptions": [
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) before breakfast",
        "duration": "For 30 days",
        "instructions": "PPI.",
        "category": "PPI"
      },
      {
        "item": "Syp Lactulose",
        "dose": "15 mL",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) at bedtime PRN",
        "duration": "For 14 days",
        "instructions": "For constipation if opioid reduction is ongoing.",
        "category": "Laxative"
      },
      {
        "item": "Oral Rehydration Salts (ORS)",
        "dose": "1-2 packets daily in water",
        "route": "Oral (PO)",
        "freq": "Daily",
        "duration": "For 5 days",
        "instructions": "Prevents symptomatic postural hypotension from splanchnic sympathetic blockade.",
        "category": "Fluid Replacement"
      },
      {
        "item": "Opioid Taper Protocol (Morphine / Fentanyl)",
        "dose": "Reduce current opioid dose by 25-50%",
        "route": "Oral / Transdermal",
        "freq": "Over 7 days",
        "duration": "Gradual taper in consultation with Palliative Care",
        "instructions": "Prevents acute opioid overdose as visceral pain sensation is extinguished.",
        "category": "Analgesic Taper"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Post-Procedure Transient Diarrhea (Sympathetic Sympathectomy Effect)",
        "drug": "Tab Loperamide 2 mg",
        "dose": "1 tab PO SOS after loose stool (Max 8 mg/day)",
        "instructions": "Usually self-limiting within 48-72 hours."
      },
      {
        "trigger": "Lightheadedness / Dizziness on Standing",
        "drug": "Abdominal Binder & Fluid Push",
        "dose": "Drink 500 mL water immediately; rise slowly from supine position",
        "instructions": "Wear snug abdominal binder."
      }
    ],
    "safetyLabsToMonitor": [
      "Supine and standing blood pressure recording twice daily (screen for orthostatic hypotension)",
      "Numerical Rating Scale (NRS) pain score and daily opioid morphine milligram equivalent (MME) tracking"
    ],
    "recallSchedule": [
      "Day 3: Orthostatic blood pressure check and diarrhea audit.",
      "Week 2: Joint review with Palliative Oncology team to document sustained opioid reduction.",
      "Month 1: Long-term pain score and quality of life assessment."
    ]
  },
  {
    "id": "permacath_chemoport",
    "name": "Post-Subcutaneous Tunnelled Cuffed Catheter (Permacath) & Chemoport Implantation",
    "shortName": "Permacath / Chemoport",
    "category": "Vascular Access",
    "system": "Dialysis & Access",
    "indication": "Long-term hemodialysis access (Permacath) or central venous oncology chemotherapy access (Chemoport) placed via right IJV with fluoroscopic and ultrasound guidance.",
    "prescriptions": [
      {
        "item": "Tab Cefuroxime Axetil",
        "dose": "500 mg",
        "route": "Oral (PO)",
        "freq": "Twice Daily (BD) with food",
        "duration": "For 5 days",
        "instructions": "Tunnel and pocket infection prophylaxis.",
        "category": "Antibiotic"
      },
      {
        "item": "Tab Paracetamol",
        "dose": "650 mg",
        "route": "Oral (PO)",
        "freq": "Three Times Daily (TDS) PRN",
        "duration": "For 3 days",
        "instructions": "Pocket incision soreness relief.",
        "category": "Analgesic"
      },
      {
        "item": "Tab Pantoprazole",
        "dose": "40 mg",
        "route": "Oral (PO)",
        "freq": "Once Daily (OD) before breakfast",
        "duration": "For 7 days",
        "instructions": "PPI.",
        "category": "PPI"
      },
      {
        "item": "Heparin Lock Solution (5,000 IU/mL)",
        "dose": "Instill exact priming volume indicated on catheter clamps",
        "route": "Intraluminal catheter lock",
        "freq": "After each hemodialysis run (or monthly 100 U/mL flush for Chemoport)",
        "duration": "Indefinitely while catheter is in place",
        "instructions": "Prevents intraluminal thrombus formation between dialysis sessions.",
        "category": "Anticoagulant Lock"
      }
    ],
    "prnMedications": [
      {
        "trigger": "Tunnel Site Bleeding or Pocket Hematoma",
        "drug": "Manual Pressure Dressing",
        "dose": "Firm manual pressure with sterile gauze x 15 minutes",
        "instructions": "Keep dry."
      },
      {
        "trigger": "Shivering / Rigors During Catheter Flushing (Catheter-Related Bloodstream Infection / CRBSI)",
        "drug": "Immediate Blood Culture & Antibiotic Lock",
        "dose": "Paired blood cultures (peripheral + lumen); IV Vancomycin protocol",
        "instructions": "Urgent hospital review."
      }
    ],
    "safetyLabsToMonitor": [
      "Immediate Post-Procedure Upright Chest X-Ray (confirm catheter tip at cavoatrial junction and rule out apical pneumothorax)",
      "Blood flow rate during first hemodialysis run (Target: Qb > 300 mL/min at arterial pressure > -250 mmHg)"
    ],
    "recallSchedule": [
      "Day 7-10: Neck and chest incision suture removal in SMS IR Room 104.",
      "Week 4: Dialysis nurse audit of cuff tissue ingrowth and absence of tunnel cellulitis.",
      "Monthly: Chemoport heparinized flush (10 mL normal saline + 3 mL heparin lock) when not in active chemotherapy use."
    ]
  }
];

export const DRUG_PROTOCOLS: DrugProtocol[] = BASE_DRUG_PROTOCOLS.map((proto) => ({
  ...proto,
  yojanaRequirement: proto.yojanaRequirement || getYojanaRequirementForProtocol(proto.id)
}));
