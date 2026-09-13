/**
 * SMS Medical College & Hospitals, Jaipur - Dept of Radiodiagnosis & Interventional Radiology
 * Interventional Radiology Pharmacopeia, Medical Management & Prescription Protocol Master
 * Covers:
 * 1. Standard discharge prescription notes in exact clinical prescription format
 * 2. "In Case It Is Required" conditional PRN medications
 * 3. Specific blood reports to monitor with trigger thresholds
 * 4. Structured recall & follow-up timelines (2-week manipulation, 4-week CT, stent checks)
 * 5. 1-Click integration to copy, print, and autofill Discharge Summary & IHMS
 */

const IR_DRUG_PROTOCOLS = {
  bcs: {
    id: "bcs",
    name: "Budd-Chiari Syndrome (BCS) & Post-DIPS / TIPSS / HV Stenting",
    category: "Portal & Venous",
    shortName: "Budd-Chiari Syndrome (BCS)",
    indication: "Hepatic venous outflow tract obstruction, ascites, hepatomegaly, portal hypertension, post-HV recanalization/stenting or DIPS/TIPSS shunt.",
    prescriptions: [
      {
        item: "Tab Rivaroxaban",
        dose: "15 mg",
        route: "PO (Oral)",
        freq: "BD (Twice Daily with meals)",
        duration: "For 21 days (Initial intensive phase)",
        stepDown: "Then switch to Tab Rivaroxaban 20 mg PO OD with meals indefinitely (Maintenance phase)",
        instructions: "Must take with food for adequate absorption. Essential for maintaining hepatic vein / IVC stent patency.",
        category: "Direct Oral Anticoagulant (DOAC)"
      },
      {
        item: "Tab Spironolactone",
        dose: "100 mg",
        route: "PO (Oral)",
        freq: "OD (Once Daily morning after breakfast)",
        duration: "Continuous (titrate based on ascites/edema)",
        instructions: "Take in the morning to prevent nocturia. Aldosterone antagonist for ascites control.",
        category: "Potassium-Sparing Diuretic"
      },
      {
        item: "Tab Furosemide",
        dose: "40 mg",
        route: "PO (Oral)",
        freq: "OD (Once Daily morning after breakfast)",
        duration: "Continuous (titrate with Spironolactone in 100:40 ratio)",
        instructions: "Maintain 100mg Spironolactone : 40mg Furosemide ratio to preserve electrolyte balance.",
        category: "Loop Diuretic"
      },
      {
        item: "Tab Pantoprazole",
        dose: "40 mg",
        route: "PO (Oral)",
        freq: "OD (Once Daily 30 min before breakfast)",
        duration: "For 30 days",
        instructions: "Gastroprotection while on oral anticoagulation.",
        category: "Proton Pump Inhibitor (PPI)"
      },
      {
        item: "Tab Carvedilol",
        dose: "6.25 mg",
        route: "PO (Oral)",
        freq: "BD (Twice Daily)",
        duration: "Long-term (titrate to resting HR 55-60 bpm)",
        instructions: "Non-selective beta-blocker for portal pressure reduction and variceal bleed prevention.",
        category: "Portal Hypotensive"
      },
      {
        item: "Tab Rifaximin",
        dose: "550 mg",
        route: "PO (Oral)",
        freq: "BD (Twice Daily)",
        duration: "For 3 months if DIPS / TIPSS shunt performed",
        instructions: "Reduces gut ammonia production; primary prevention of post-shunt hepatic encephalopathy.",
        category: "Gut-Specific Antibiotic"
      }
    ],
    prnConditionalDrugs: [
      {
        condition: "If Serum Potassium rises > 5.0 mEq/L or patient develops painful gynecomastia",
        rx: "Stop Spironolactone. Switch to Tab Eplerenone 25 mg PO OD or Tab Torsemide 10 mg PO OD.",
        rationale: "Eplerenone has lower anti-androgenic affinity; Torsemide provides stable loop diuresis without gynecomastia."
      },
      {
        condition: "If Overt Hepatic Encephalopathy occurs (drowsiness, confusion, asterixis/flapping tremor)",
        rx: "Add Syr Lactulose 15 to 30 ml PO TDS (titrate to 2-3 soft bowel movements/day) + withhold diuretics for 48 hours.",
        rationale: "Traps ammonium ions in the gut lumen and facilitates catharsis."
      },
      {
        condition: "If Severe Cirrhosis with Child-Pugh B/C or severe renal impairment (CrCl < 30 ml/min)",
        rx: "Avoid Rivaroxaban. Use Inj Enoxaparin 1 mg/kg SC BD bridging to Tab Warfarin (target INR 2.0 to 3.0).",
        rationale: "DOACs are contraindicated in severe hepatic impairment (Child-Pugh C); Warfarin with strict INR monitoring is the standard alternative."
      }
    ],
    bloodReports: [
      {
        test: "Serum Electrolytes (Sodium, Potassium) & Serum Creatinine",
        frequency: "Check at Day 7, Day 14, then monthly",
        threshold: "Alert if Serum Na < 125 mEq/L or K > 5.3 mEq/L or Creatinine rises > 0.3 mg/dL above baseline.",
        action: "Temporarily withhold Furosemide/Spironolactone; rehydrate cautiously."
      },
      {
        test: "Liver Function Tests (Total & Direct Bilirubin, AST/ALT, Albumin, Alk Phos)",
        frequency: "Check at 2 weeks and 1 month",
        threshold: "Bilirubin should progressively decline. Sudden 2x jump suggests acute stent thrombosis or biliary compression.",
        action: "Order emergency Hepatic Doppler Ultrasound."
      },
      {
        test: "Thrombophilia & Hematology Panel",
        frequency: "Once acute phase stabilizes",
        threshold: "Check JAK2 V617F mutation, PNH clone, Factor V Leiden, Protein C & S, Antithrombin III, Antiphospholipid antibodies.",
        action: "Guides lifelong hematology consultation."
      }
    ],
    recallTimeline: {
      twoWeeks: "2 WEEKS RECALL: Hepatic Vein & IVC Doppler Ultrasound to verify stent patency, measure peak systolic velocity, and check ascites clearance. Inspect inguinal/jugular puncture site.",
      manipulationIntervention: "MANIPULATION ALERT: If Doppler demonstrates intrastent thrombus, damping of hepatic vein waveforms, or peak velocity > 250 cm/s (indicative of > 50% stenosis), recall patient immediately to Angio Suite for catheter venoplasty / balloon dilation or catheter-directed thrombolysis.",
      oneMonth: "1 MONTH RECALL: Full LFT, RFT, Doppler, and reassessment of diuretic dosages based on dry weight.",
      threeToSixMonths: "3 & 6 MONTHS: Surveillance Doppler. If stent shows intimal hyperplasia, elective balloon venoplasty."
    },
    redFlags: [
      "Sudden rapid increase in abdominal distension / ascites over 24-48 hours",
      "Severe acute right upper quadrant pain or jaundice",
      "Vomiting of blood (hematemesis) or black tarry stools (melena)",
      "Unusual drowsiness, altered sleep rhythm, or confusion"
    ]
  },

  varicose: {
    id: "varicose",
    name: "Varicose Veins (EVLA 1470nm / RFA / Foam Sclerotherapy)",
    category: "Venous & Lymphatic",
    shortName: "Varicose Veins (EVLA / Sclerotherapy)",
    indication: "Great or Small Saphenous Vein incompetence, venous reflux, CEAP C2 to C6 venous ulcers.",
    prescriptions: [
      {
        item: "Tab MPFF (Micronized Purified Flavonoid Fraction - Daflon)",
        dose: "500 mg",
        route: "PO (Oral)",
        freq: "BD (Twice Daily after breakfast & dinner)",
        duration: "For 30 days (may extend to 60 days in CEAP C4-C6)",
        instructions: "Potent bioflavonoid; improves venous tone, microcirculatory permeability, and reduces calf heaviness/edema.",
        category: "Venotonic & Vasoprotective"
      },
      {
        item: "Tab Aceclofenac + Paracetamol",
        dose: "100 mg + 325 mg",
        route: "PO (Oral)",
        freq: "BD (Twice Daily with food)",
        duration: "For 5 days",
        instructions: "Analgesic and anti-inflammatory for endovenous thermal tract reaction.",
        category: "NSAID Analgesic"
      },
      {
        item: "Tab Pantoprazole",
        dose: "40 mg",
        route: "PO (Oral)",
        freq: "OD (Once Daily before breakfast)",
        duration: "For 5 days",
        instructions: "Gastric mucosa protection while taking NSAIDs.",
        category: "PPI Gastroprotection"
      },
      {
        item: "Tab Tramadol + Paracetamol",
        dose: "37.5 mg + 325 mg",
        route: "PO (Oral)",
        freq: "SOS (Max BD)",
        duration: "As needed for breakthrough pain only",
        instructions: "Take only if severe aching occurs despite routine medication.",
        category: "Rescue Analgesic"
      },
      {
        item: "Graduated Compression Stockings (Class II: 20-30 mmHg)",
        dose: "Thigh-Length / Below-Knee",
        route: "Topical / Mechanical",
        freq: "Continuous day & night for first 48 hours",
        duration: "Then wear during daytime (while standing/walking) for 3 weeks",
        instructions: "Crucial to prevent venous pooling, minimize ecchymosis, and accelerate vein wall coaptation.",
        category: "Mechanical Compression"
      }
    ],
    prnConditionalDrugs: [
      {
        condition: "If High Caprini VTE Risk Score (> 5), history of prior DVT, or extensive bilateral simultaneous EVLA",
        rx: "Add Tab Rivaroxaban 10 mg PO OD with food for 7 to 10 days.",
        rationale: "Prophylaxis against Endovenous Heat-Induced Thrombosis (EHIT) extension into the common femoral vein."
      },
      {
        condition: "If Superficial Thrombophlebitis or painful cord-like induration along tributary branches",
        rx: "Apply Heparinoid Gel (Thrombophob) locally TDS + warm moist compresses for 10 minutes BD.",
        rationale: "Symptomatic relief of aseptic chemical/thermal phlebitis; prevents hyperpigmentation."
      },
      {
        condition: "If Active Venous Stasis Ulcer (CEAP C6)",
        rx: "Add Tab Pentoxifylline 400 mg PO TDS with meals for 8 weeks + hydrocolloid wound dressing.",
        rationale: "Improves microvascular erythrocyte deformability and speeds venous ulcer healing."
      }
    ],
    bloodReports: [
      {
        test: "Routine post-op blood tests",
        frequency: "Not routinely required in uncomplicated EVLA/foam cases",
        threshold: "Check D-dimer and Venous Doppler only if calf swelling or pain disproportionate to procedure occurs.",
        action: "Rule out DVT."
      }
    ],
    recallTimeline: {
      twoWeeks: "3 TO 7 DAYS RECALL: Mandatory Venous Duplex Ultrasound of common femoral vein (CFV) and saphenofemoral junction (SFJ) to evaluate for EHIT (Endovenous Heat-Induced Thrombosis).",
      manipulationIntervention: "EHIT PROTOCOL: EHIT Grade 1 (flush with ostium) = Conservative + Daflon. EHIT Grade 2 (< 50% CFV lumen compromise) = Start Tab Rivaroxaban 15mg BD x 2 weeks. EHIT Grade 3 (> 50% CFV occlusion) or Grade 4 (complete DVT) = Full therapeutic anticoagulation.",
      oneMonth: "4 WEEKS RECALL: Clinical assessment of residual tributary varices, spider veins, and leg edema. Perform touch-up ultrasound-guided foam sclerotherapy (UGFS with 1% Polidocanol) if residual tributaries exist.",
      threeToSixMonths: "6 MONTHS: Clinical review to verify sustained ulcer healing and cosmetic satisfaction."
    },
    redFlags: [
      "Sudden unilateral calf swelling, severe calf tightness, or pain on dorsiflexion of foot (Homan's sign)",
      "Chest pain, sudden shortness of breath, or coughing up blood (Pulmonary Embolism alert)",
      "High fever > 101°F with spreading redness, warmth, or pus from laser entry puncture"
    ]
  },

  tace: {
    id: "tace",
    name: "Transarterial Chemoembolization (cTACE / DEB-TACE) for HCC",
    category: "Vascular & Embolization",
    shortName: "TACE for HCC",
    indication: "Intermediate stage Hepatocellular Carcinoma (BCLC B), multifocal liver lesions, unresectable HCC preserving liver function.",
    prescriptions: [
      {
        item: "Tab Cefuroxime",
        dose: "500 mg",
        route: "PO (Oral)",
        freq: "BD (Twice Daily after meals)",
        duration: "For 5 days",
        instructions: "Biliary tract and necrotic tumor prophylaxis against hepatic abscess formation.",
        category: "2nd Gen Cephalosporin"
      },
      {
        item: "Tab Dexamethasone",
        dose: "4 mg",
        route: "PO (Oral)",
        freq: "BD for 2 days, then 2 mg BD for 1 day",
        duration: "Total 3-day rapid taper",
        instructions: "Take with food. Blunts Post-Embolization Syndrome (PES) - severe fever, nausea, and liver capsule tension.",
        category: "Corticosteroid Anti-PES"
      },
      {
        item: "Tab Ondansetron",
        dose: "8 mg",
        route: "PO (Oral)",
        freq: "TDS (Three Times Daily 30 min before food)",
        duration: "For 3 days",
        instructions: "Anti-emetic for doxorubicin/chemotherapy and ischemic-induced nausea.",
        category: "5-HT3 Antagonist"
      },
      {
        item: "Tab Tramadol + Paracetamol",
        dose: "37.5 mg + 325 mg",
        route: "PO (Oral)",
        freq: "TDS SOS",
        duration: "For right upper quadrant capsular stretch pain",
        instructions: "Do NOT exceed 4 tablets/day to prevent paracetamol hepatotoxicity in liver disease.",
        category: "Analgesic"
      },
      {
        item: "Tab Pantoprazole",
        dose: "40 mg",
        route: "PO (Oral)",
        freq: "OD (Once Daily before breakfast)",
        duration: "For 14 days",
        instructions: "Gastroprotection.",
        category: "PPI"
      },
      {
        item: "Oral Fluid Hydration Protocol",
        dose: "2.5 to 3.0 Liters / day",
        route: "Oral Liquids (water, coconut water, ORS)",
        freq: "Throughout the day",
        duration: "For 3 days",
        instructions: "Mandatory to prevent contrast-induced nephropathy (CIN) and flush chemotherapy metabolites.",
        category: "Hydration"
      }
    ],
    prnConditionalDrugs: [
      {
        condition: "If Fever > 101°F persists beyond Day 4 with severe localized hepatic tenderness and leukocytosis",
        rx: "Suspect Liver Abscess or Ischemic Cholecystitis. Admit immediately, blood cultures, IV Meropenem 1g TDS + IV Metronidazole 500mg TDS.",
        rationale: "Requires urgent drainage if liquefaction necrosis develops into infected hepatic abscess."
      },
      {
        condition: "If Underlying Hepatitis B positive (HBsAg +ve)",
        rx: "Continue Tab Tenofovir Alafenamide (TAF) 25 mg PO OD or Entecavir 0.5 mg OD indefinitely.",
        rationale: "Chemotherapy-induced immunosuppression can trigger fatal HBV reactivation flare."
      },
      {
        condition: "If Peri-tumoral transient decompensation with mild ascites",
        rx: "Add Tab Spironolactone 50 mg PO OD for 10-14 days.",
        rationale: "Controls transient post-embolization fluid retention without overt hypovolemia."
      }
    ],
    bloodReports: [
      {
        test: "Liver Function Tests (Total Bilirubin, AST, ALT, Albumin, Alk Phos)",
        frequency: "Check at Day 7 and Day 14",
        threshold: "AST/ALT typically peak at 48h and normalize by Day 14. ALERT if Total Bilirubin doubles or INR rises > 1.6.",
        action: "Indicates hepatic decompensation; withhold further chemotherapeutic interventions."
      },
      {
        test: "Serum Creatinine & Blood Urea",
        frequency: "Check at Day 3 and Day 7",
        threshold: "Creatinine rise > 0.3 mg/dL signals contrast-induced acute kidney injury.",
        action: "Aggressive IV normal saline hydration; avoid NSAIDs."
      },
      {
        test: "Serum Alpha-Fetoprotein (AFP)",
        frequency: "Check at 4 to 6 weeks follow-up",
        threshold: "> 50% decline from baseline indicates favorable biological tumor necrosis.",
        action: "Correlate with imaging mRECIST response."
      }
    ],
    recallTimeline: {
      twoWeeks: "2 WEEKS RECALL: Clinical evaluation of recovery from post-embolization syndrome, appetite return, LFT check, and puncture site inspection.",
      manipulationIntervention: "4 TO 6 WEEKS RECALL & RE-INTERVENTION: Dynamic Triphasic Contrast CT Liver or Liver MRI. Evaluate by mRECIST criteria: Complete Response (no viable enhancement) vs Partial Response (residual arterial enhancement). If viable residual tumor > 1cm with preserved liver reserve (Child-Pugh A), schedule repeat TACE Session 2 or adjunctive Radiofrequency/Microwave Ablation (RFA/MWA).",
      oneMonth: "4-6 WEEKS: Cross-sectional imaging as above.",
      threeToSixMonths: "Every 3 Months: Contrast CT/MRI + AFP to detect new intrahepatic recurrences."
    },
    redFlags: [
      "High grade fever with rigors lasting longer than 4 days post-discharge",
      "Yellowish discoloration of eyes (deepening jaundice) or abdominal swelling (ascites)",
      "Severe intractable vomiting or inability to tolerate oral fluids",
      "Bleeding or enlarging pulsatile swelling at the femoral puncture site"
    ]
  },

  bae: {
    id: "bae",
    name: "Bronchial Artery Embolization (BAE) for Hemoptysis",
    category: "Vascular & Embolization",
    shortName: "BAE for Hemoptysis",
    indication: "Recurrent massive or sub-massive hemoptysis, bronchiectasis, post-tubercular cavitary disease, aspergilloma, bronchial artery hypertrophy.",
    prescriptions: [
      {
        item: "Tab Amoxicillin + Clavulanic Acid",
        dose: "625 mg",
        route: "PO (Oral)",
        freq: "BD (Twice Daily with food)",
        duration: "For 7 days",
        instructions: "Broad-spectrum coverage for secondary bacterial infection in bronchiectatic airways.",
        category: "Antibiotic"
      },
      {
        item: "Tab Tranexamic Acid",
        dose: "500 mg",
        route: "PO (Oral)",
        freq: "TDS (Three Times Daily)",
        duration: "For 3 days, then stop",
        instructions: "Antifibrinolytic; aids in stabilizing clot over embolized bronchial/intercostal branches. Stop once sputum is clear.",
        category: "Antifibrinolytic"
      },
      {
        item: "Syr Dextromethorphan + Chlorpheniramine",
        dose: "10 ml",
        route: "PO (Oral)",
        freq: "TDS after meals",
        duration: "For 5 days",
        instructions: "CRITICAL cough suppressant. Violent coughing spikes pulmonary artery pressure and can mechanically dislodge embolic plugs.",
        category: "Cough Suppressant"
      },
      {
        item: "Tab Paracetamol",
        dose: "650 mg",
        route: "PO (Oral)",
        freq: "TDS SOS",
        duration: "For chest / intercostal back pain",
        instructions: "For pleuritic and intercostal ischemic pain following particle embolization.",
        category: "Analgesic"
      },
      {
        item: "Tab Pantoprazole",
        dose: "40 mg",
        route: "PO (Oral)",
        freq: "OD (Once Daily before breakfast)",
        duration: "For 7 days",
        instructions: "Gastroprotection.",
        category: "PPI"
      }
    ],
    prnConditionalDrugs: [
      {
        condition: "If Active Pulmonary Tuberculosis diagnosed (sputum positive / GeneXpert MTB detected)",
        rx: "Immediately initiate 4-drug Anti-Tubercular Therapy (ATT: Isoniazid, Rifampicin, Pyrazinamide, Ethambutol) via National Tuberculosis Elimination Program (NTEP).",
        rationale: "BAE stops acute bleeding but does not cure the underlying mycobacterial infection."
      },
      {
        condition: "If Pulmonary Aspergilloma / Mycetoma present in pre-existing cavity",
        rx: "Add Tab Itraconazole 200 mg PO BD with acidic beverage for 3 to 6 months.",
        rationale: "Suppresses fungal hyphae growth that erodes adjacent systemic bronchial arteries."
      },
      {
        condition: "If Severe Pleuritic Pain due to intercostal artery branch embolization",
        rx: "Add Tab Aceclofenac 100 mg PO BD with food for 3 days.",
        rationale: "Reduces focal intercostal muscular and parietal pleural ischemic inflammation."
      }
    ],
    bloodReports: [
      {
        test: "Complete Blood Count (CBC - Hemoglobin & Platelets)",
        frequency: "Check at Day 3 post-procedure",
        threshold: "If Hemoglobin was < 8.0 g/dL prior to embolization, confirm stabilization or recovery.",
        action: "Oral iron therapy (Tab Ferrous Ascorbate 100mg OD) once hemoptysis resolves."
      },
      {
        test: "Coagulation Profile (PT/INR)",
        frequency: "Baseline and PRN",
        threshold: "Maintain INR < 1.4 during recovery.",
        action: "Correct any coagulopathy with vitamin K if liver/dietary deficiency."
      }
    ],
    recallTimeline: {
      twoWeeks: "2 WEEKS RECALL: Chest clinic review, assess sputum clarity, absence of hemoptysis recurrence, and auscultation.",
      manipulationIntervention: "RE-BLEEDING MANIPULATION PROTOCOL: If recurrent hemoptysis > 100 ml/24h occurs within 2 to 4 weeks: Recall urgently to Angio Suite. Repeat diagnostic angiography searching for: 1) Non-bronchial systemic collaterals (internal mammary, subclavian, lateral thoracic, inferior phrenic), 2) Recanalized bronchial artery, or 3) Pulmonary artery pseudoaneurysm (Rasmussen aneurysm requiring coil embolization).",
      oneMonth: "6 WEEKS: High-Resolution CT Chest (HRCT) to assess underlying parenchymal disease.",
      threeToSixMonths: "6 Months: Pulmonology evaluation for definitive surgical lobectomy in localized unilateral destroyed lung."
    },
    redFlags: [
      "CRITICAL SPINAL CORD ISCHEMIA WATCH: Any weakness, heaviness, tingling in lower limbs, or inability to pass urine (anterior spinal artery / Adamkiewicz ischemia). Report IMMEDIATELY!",
      "Recurrence of fresh bright red blood in sputum (> half cup)",
      "Sudden onset severe back pain radiating around chest with breathlessness",
      "Groin puncture site hematoma or bleeding"
    ]
  },

  ptbd: {
    id: "ptbd",
    name: "Percutaneous Transhepatic Biliary Drainage (PTBD) & Biliary Stenting",
    category: "Non-Vascular & Drainage",
    shortName: "PTBD & Biliary Stenting",
    indication: "Malignant obstructive jaundice (Cholangiocarcinoma, Periampullary Ca, Gallbladder Ca), benign biliary stricture, failed ERCP.",
    prescriptions: [
      {
        item: "Tab Cefuroxime",
        dose: "500 mg",
        route: "PO (Oral)",
        freq: "BD (Twice Daily after meals)",
        duration: "For 7 days (or based on bile culture sensitivity)",
        instructions: "Targeted biliary tract antibiotic coverage against common enteric organisms (E. coli, Klebsiella).",
        category: "Cephalosporin Antibiotic"
      },
      {
        item: "Tab Ursodeoxycholic Acid (UDCA)",
        dose: "300 mg",
        route: "PO (Oral)",
        freq: "BD (Twice Daily with meals)",
        duration: "For 30 days",
        instructions: "Hydrophilic bile acid; thins biliary secretions, promotes bile flow, and prevents catheter sludge blockage.",
        category: "Bile Acid Salt"
      },
      {
        item: "Tab Pantoprazole",
        dose: "40 mg",
        route: "PO (Oral)",
        freq: "OD (Once Daily before breakfast)",
        duration: "For 14 days",
        instructions: "Gastroprotection.",
        category: "PPI"
      },
      {
        item: "Tab Drotaverine",
        dose: "80 mg",
        route: "PO (Oral)",
        freq: "TDS SOS",
        duration: "As needed for biliary spasm / colic",
        instructions: "Smooth muscle antispasmodic; relieves bile duct spasm without masking peritonitis.",
        category: "Antispasmodic"
      },
      {
        item: "Catheter Flush & Care Protocol",
        dose: "5 to 10 ml Sterile Normal Saline (0.9%)",
        route: "Via 3-way stopcock into external catheter",
        freq: "Twice Weekly under aseptic conditions",
        duration: "While external catheter is in place",
        instructions: "Gentle injection. NEVER force if resistance is encountered. Replace drainage bag weekly.",
        category: "Catheter Maintenance"
      }
    ],
    prnConditionalDrugs: [
      {
        condition: "If Bile turns frank bloody (Hemobilia) or patient develops tachycardia/hypotension",
        rx: "Immediate hospital admission. Clamp drainage bag temporarily, urgent CT Angiography to rule out hepatic artery pseudoaneurysm or arterio-biliary fistula -> Embolization.",
        rationale: "Puncture tract can form pseudoaneurysm with arterial bleed into biliary tree."
      },
      {
        condition: "If Shivering, rigors, or high fever occurs (Acute Cholangitis)",
        rx: "Upgrade antibiotics to IV Piperacillin-Tazobactam 4.5g TDS or IV Meropenem 1g TDS + ensure catheter is draining freely without blockage.",
        rationale: "Incomplete drainage with infected bile leads to rapid bacteremia and septic shock."
      },
      {
        condition: "If Pruritus (severe itching) from persistent hyperbilirubinemia",
        rx: "Add Tab Hydroxyzine 25 mg PO at bedtime + Tab Rifampicin 150 mg PO OD.",
        rationale: "Relieves bile salt-mediated skin pruritus."
      }
    ],
    bloodReports: [
      {
        test: "Serum Bilirubin (Total & Direct) & Alkaline Phosphatase",
        frequency: "Check at Day 7, Day 14, and Day 28",
        threshold: "Expect Total Bilirubin to decline by 1 to 2 mg/dL per 48 hours once drainage is established.",
        action: "If bilirubin plateaus or rises, suspect catheter tip displacement or blocked side-holes."
      },
      {
        test: "Complete Blood Count & Serum Creatinine",
        frequency: "Check at Day 7",
        threshold: "Ensure leukocyte count normalizes (< 10,000/uL).",
        action: "Normalizes renal function by relieving hepato-renal bile acid toxicity."
      }
    ],
    recallTimeline: {
      twoWeeks: "2 WEEKS RECALL (INTERNALIZATION / MANIPULATION CHECK): Catheter cholangiogram under fluoroscopy. Check if contrast flows freely into duodenum across biliary stent. If internal flow confirmed, CAP the external stopcock for 48h. If patient remains jaundice-free and fever-free, external catheter can be safely REMOVED!",
      manipulationIntervention: "TUBE MANIPULATION & STENT REVISION: If external-only catheter: Recall for conversion to internal-external ring drainage or deployment of self-expanding metallic stent (SEMS). If permanent external tube: Routine catheter exchange over 0.035 wire every 6 to 8 weeks to prevent encrustation.",
      oneMonth: "1 MONTH: Bilirubin assessment for chemotherapy readiness.",
      threeToSixMonths: "Every 3 Months: If metallic stent deployed, ultrasound surveillance for tumor ingrowth/sludge occlusion."
    },
    redFlags: [
      "Catheter stops draining bile accompanied by fever, chills, or darkening of urine/jaundice",
      "Leakage of bile around the skin entry site soaking dressings",
      "Frank red blood filling the drainage tube or drainage bag (Hemobilia)",
      "Accidental displacement or pull-out of the drainage tube"
    ]
  },

  pcn: {
    id: "pcn",
    name: "Percutaneous Nephrostomy (PCN) & Antegrade DJ Stenting",
    category: "Non-Vascular & Drainage",
    shortName: "PCN & Antegrade DJ Stent",
    indication: "Obstructive uropathy, hydronephrosis, ureteric stricture/calculus, pyonephrosis, pelvic malignancy.",
    prescriptions: [
      {
        item: "Tab Nitrofurantoin",
        dose: "100 mg",
        route: "PO (Oral)",
        freq: "BD (Twice Daily with food)",
        duration: "For 7 days (or culture-sensitive antibiotic)",
        instructions: "Uro-specific antibiotic prophylaxis against catheter-associated urinary tract infections.",
        category: "Urinary Antibiotic"
      },
      {
        item: "Tab Drotaverine + Paracetamol",
        dose: "80 mg + 325 mg",
        route: "PO (Oral)",
        freq: "TDS SOS",
        duration: "As needed for flank pain / ureteric spasm",
        instructions: "Relieves renal pelvi-ureteric colic.",
        category: "Antispasmodic Analgesic"
      },
      {
        item: "Syr Potassium Sodium Citrate (Citro-Soda)",
        dose: "10 ml in half glass water",
        route: "PO (Oral)",
        freq: "TDS after meals",
        duration: "For 14 days",
        instructions: "Urine alkalinizer; prevents uric acid/calcium crystal precipitation and catheter lumen encrustation.",
        category: "Urine Alkalinizer"
      },
      {
        item: "Tab Pantoprazole",
        dose: "40 mg",
        route: "PO (Oral)",
        freq: "OD (Once Daily before breakfast)",
        duration: "For 7 days",
        instructions: "Gastroprotection.",
        category: "PPI"
      },
      {
        item: "External PCN Care Protocol",
        dose: "Maintain closed gravity drainage",
        route: "Drainage tube",
        freq: "Empty collection bag every 8 hours",
        duration: "Continuous",
        instructions: "Keep bag below level of kidneys. Flush with max 3-5 ml sterile saline ONLY if block suspected. NEVER inject large volumes into renal pelvis.",
        category: "Drainage Care"
      }
    ],
    prnConditionalDrugs: [
      {
        condition: "If Urine turns purulent, cloudy, or foul-smelling with high fever (Pyonephrosis recurrence)",
        rx: "Send urine for culture & sensitivity. Start IV Cefoperazone-Sulbactam 1.5g BD or Tab Ciprofloxacin 500mg BD.",
        rationale: "Urgent decompression and appropriate antimicrobial therapy required."
      },
      {
        condition: "If Frank Hematuria persists beyond 48 hours post-puncture",
        rx: "Check coagulation; bed rest, oral hydration. If severe, renal angiogram to rule out pseudoaneurysm of segmental renal artery.",
        rationale: "Segmental artery injuries require superselective microcoil embolization."
      }
    ],
    bloodReports: [
      {
        test: "Serum Creatinine & Blood Urea",
        frequency: "Check at Day 3 and Day 7",
        threshold: "Expect progressive drop in serum creatinine back towards baseline as obstruction is relieved.",
        action: "If creatinine does not decline, check contralateral kidney function or tube patency."
      },
      {
        test: "Urine Routine & Culture",
        frequency: "At 1 week post-procedure",
        threshold: "Sterile urine required prior to any antegrade DJ stenting or ureteroscopic intervention.",
        action: "Clear bacteruria with appropriate sensitive antibiotic."
      }
    ],
    recallTimeline: {
      twoWeeks: "2 WEEKS RECALL: Antegrade nephrostogram under fluoroscopy. Check ureteric caliber and patency. If ureter is now patent, proceed to antegrade Double-J (DJ) ureteric stent placement and remove external nephrostomy.",
      manipulationIntervention: "ROUTINE TUBE EXCHANGE: If long-term permanent PCN required (e.g. inoperable pelvic malignancy): Routine catheter exchange over wire every 8 to 10 weeks to prevent catheter breakage and encrustation.",
      oneMonth: "1 MONTH: Nephrology/Urology review for definitive stone removal or stent exchange.",
      threeToSixMonths: "Every 3 Months: Surveillance of renal parenchyma on ultrasound."
    },
    redFlags: [
      "Sudden cessation of urine in the drainage bag with acute flank fullness/pain",
      "Leakage of urine around the flank puncture dressing",
      "High grade fever with shivering and flank tenderness",
      "Accidental displacement or slippage of the PCN tube"
    ]
  },

  varicocele: {
    id: "varicocele",
    name: "Varicocele Embolization (Sandwich Coils + STS Sclerotherapy)",
    category: "Venous & Lymphatic",
    shortName: "Varicocele Embolization",
    indication: "Grade II/III left or bilateral varicocele, male infertility (oligoasthenospermia), chronic dragging scrotal ache.",
    prescriptions: [
      {
        item: "Tab Aceclofenac + Paracetamol",
        dose: "100 mg + 325 mg",
        route: "PO (Oral)",
        freq: "BD (Twice Daily with food)",
        duration: "For 3 days",
        instructions: "Anti-inflammatory and analgesic for expected mild chemical phlebitis of pampiniform plexus.",
        category: "NSAID Analgesic"
      },
      {
        item: "Tab Pantoprazole",
        dose: "40 mg",
        route: "PO (Oral)",
        freq: "OD (Once Daily before breakfast)",
        duration: "For 3 days",
        instructions: "Gastroprotection.",
        category: "PPI"
      },
      {
        item: "Scrotal Supporter / Tight Athletic Briefs",
        dose: "Wear continuously",
        route: "Mechanical Support",
        freq: "During daytime for 7 to 10 days",
        duration: "7 to 10 days",
        instructions: "Prevents gravity-dependent scrotal dragging ache and minimizes venous engorgement during recovery.",
        category: "Physical Support"
      },
      {
        item: "Activity Modification",
        dose: "Rest & gentle walking",
        route: "Behavioral",
        freq: "Continuous",
        duration: "For 7 days",
        instructions: "Avoid heavy gym weight-lifting (> 10 kg), cycling, strenuous running, and sexual intercourse for 7 days.",
        category: "Activity Restriction"
      }
    ],
    prnConditionalDrugs: [
      {
        condition: "If Mild Scrotal Warmth & Aseptic Phlebitis occurs at Day 2-4",
        rx: "Reassure patient: This is expected aseptic inflammatory response to the sclerosant (STS). Apply ice pack wrapped in cloth for 10 min BD + extend Aceclofenac to 5 days.",
        rationale: "Normal manifestation of thrombosed pampiniform varices."
      }
    ],
    bloodReports: [
      {
        test: "Semen Analysis (Sperm count, progressive motility, morphology)",
        frequency: "Check at 3 months and 6 months post-procedure",
        threshold: "Full human spermatogenesis cycle is 74 days. True fertility improvement cannot be judged earlier than 3 months.",
        action: "Document sperm parameter improvements."
      }
    ],
    recallTimeline: {
      twoWeeks: "2 WEEKS: Clinical check for resolution of scrotal pain, testicular exam to verify absence of induration or epididymitis.",
      manipulationIntervention: "6 TO 8 WEEKS RECALL: Scrotal Doppler Ultrasound with Valsalva maneuver to confirm complete occlusion of internal spermatic vein and absence of retrograde pampiniform reflux.",
      oneMonth: "N/A (as above at 6-8 weeks).",
      threeToSixMonths: "3 MONTHS & 6 MONTHS: Semen analysis and fertility review."
    },
    redFlags: [
      "Severe intractable scrotal swelling or acute enlargement of testicle",
      "Groin puncture site hematoma or bleeding",
      "High grade fever > 101°F with scrotal redness"
    ]
  },

  central_venoplasty: {
    id: "central_venoplasty",
    name: "Central Venoplasty & Stenting (Dialysis AV Fistula Rescue)",
    category: "Vascular & Embolization",
    shortName: "Central Venoplasty & Stenting",
    indication: "Subclavian, innominate, or SVC high-grade stenosis in ESRD on hemodialysis, massive arm edema, high venous dialysis pressure (> 200 mmHg).",
    prescriptions: [
      {
        item: "Tab Clopidogrel",
        dose: "75 mg",
        route: "PO (Oral)",
        freq: "OD (Once Daily after lunch)",
        duration: "For 30 days (may extend to 3 months if covered stent deployed)",
        instructions: "Antiplatelet therapy to prevent acute thrombosis across freshly ballooned/stented central vein.",
        category: "Antiplatelet"
      },
      {
        item: "Tab Aspirin",
        dose: "75 mg",
        route: "PO (Oral)",
        freq: "OD (Once Daily with dinner)",
        duration: "For 30 days",
        instructions: "Dual antiplatelet therapy for bare-metal or covered stents.",
        category: "Antiplatelet"
      },
      {
        item: "Tab Pantoprazole",
        dose: "40 mg",
        route: "PO (Oral)",
        freq: "OD (Once Daily before breakfast)",
        duration: "For 30 days",
        instructions: "Gastroprotection while on dual antiplatelet therapy.",
        category: "PPI"
      },
      {
        item: "Maintenance Hemodialysis Instructions",
        dose: "Continue scheduled dialysis sessions",
        route: "Vascular Access",
        freq: "As per Nephrology schedule (2-3 times/week)",
        duration: "Ongoing",
        instructions: "Instruct dialysis staff: Monitor dynamic venous return pressure (< 180 mmHg). Apply gentle compression post-dialysis.",
        category: "Dialysis Protocol"
      }
    ],
    prnConditionalDrugs: [
      {
        condition: "If Acute Stent Thrombosis suspected (sudden recurrence of massive arm swelling or loss of AV fistula thrill)",
        rx: "Emergency admission to Angio Suite for catheter venography + balloon thrombectomy / catheter-directed thrombolysis.",
        rationale: "Central veins have high flow; early thrombosis must be cleared within 24-48 hours to salvage dialysis access."
      }
    ],
    bloodReports: [
      {
        test: "Hemodialysis Lab Panel (Pre-dialysis K, Creatinine, CBC)",
        frequency: "Per routine hemodialysis schedule",
        threshold: "Monitor dialysis adequacy (Kt/V > 1.2).",
        action: "Ensures effective clearance without central venous obstruction."
      }
    ],
    recallTimeline: {
      twoWeeks: "2 WEEKS RECALL: Arm circumference measurement, inspection of AV fistula flow, review of dialysis venous pressure log (must be < 180 mmHg at 300 ml/min pump speed).",
      manipulationIntervention: "SURVEILLANCE & RE-INTERVENTION SCHEDULE: Central vein stenosis has ~50% restenosis rate at 6-12 months. Recall at 3 Months for Doppler ultrasound. If arm swelling recurs or dialysis venous pressure rises > 200 mmHg, schedule elective repeat balloon venoplasty.",
      oneMonth: "N/A",
      threeToSixMonths: "3 & 6 MONTHS: Access surveillance Doppler."
    },
    redFlags: [
      "Sudden severe swelling of treated arm, neck, or face",
      "Loss of palpable thrill or audible bruit over the AV fistula",
      "Prolonged bleeding (> 30 min) from fistula puncture needle sites after dialysis session"
    ]
  },

  biopsy: {
    id: "biopsy",
    name: "Percutaneous Image-Guided Core Biopsy (Liver / Lung / Kidney / Mass)",
    category: "Biopsy & Diagnostics",
    shortName: "Image-Guided Core Biopsy",
    indication: "Histopathological diagnosis of focal parenchymal lesions, suspected primary malignancies, metastases, renal medical biopsies.",
    prescriptions: [
      {
        item: "Tab Paracetamol",
        dose: "650 mg",
        route: "PO (Oral)",
        freq: "TDS SOS",
        duration: "For 2 days",
        instructions: "Analgesic of choice. Avoid NSAIDs (Ibuprofen/Aspirin) for 48 hours to minimize puncture site bleeding risk.",
        category: "Analgesic"
      },
      {
        item: "Tab Pantoprazole",
        dose: "40 mg",
        route: "PO (Oral)",
        freq: "OD (Once Daily before breakfast)",
        duration: "For 3 days",
        instructions: "Gastric acid suppression.",
        category: "PPI"
      },
      {
        item: "Puncture Dressing Care",
        dose: "Dry sterile dressing",
        route: "Skin entry site",
        freq: "Leave undisturbed for 24 hours",
        duration: "24 hours",
        instructions: "Keep clean and dry. Remove adhesive bandage after 24 hours. Normal shower permitted after 48 hours. Avoid swimming/baths for 5 days.",
        category: "Wound Care"
      },
      {
        item: "Physical Rest Protocol",
        dose: "Rest at home",
        route: "Behavioral",
        freq: "For 48 hours",
        duration: "48 hours",
        instructions: "Avoid vigorous exercise, running, gym, and heavy lifting (> 5 kg) for 48 hours.",
        category: "Activity Modification"
      }
    ],
    prnConditionalDrugs: [
      {
        condition: "If Lung Biopsy performed and patient experiences pleuritic chest discomfort",
        rx: "Tab Codeine Phosphate 15 mg PO SOS for cough + check vital signs.",
        rationale: "Suppresses cough that could expand a micro-pneumothorax."
      }
    ],
    bloodReports: [
      {
        test: "Pre-procedure PT/INR (< 1.5) and Platelet Count (> 50,000/uL)",
        frequency: "Verified prior to puncture",
        threshold: "Post-biopsy blood tests are NOT required unless patient exhibits signs of hemorrhage (pallor, tachycardia, dizziness).",
        action: "If internal hematoma suspected: Urgent ultrasound + CBC."
      }
    ],
    recallTimeline: {
      twoWeeks: "5 TO 7 WORKING DAYS RECALL: Patient must collect Histopathology / Immunohistochemistry (IHC) / Molecular pathology report from Department of Pathology and present to IR / Oncology OPD for multidisciplinary treatment decision.",
      manipulationIntervention: "REPEAT BIOPSY PROTOCOL: If pathology report returns 'Inadequate Tissue / Non-Diagnostic Necrosis' (occurs in ~5-8% of heavily necrotic tumors): Schedule repeat biopsy with multi-core coaxial sampling targeting viable periphery on contrast-enhanced imaging.",
      oneMonth: "N/A",
      threeToSixMonths: "N/A"
    },
    redFlags: [
      "FOR LUNG BIOPSY: Sudden onset breathlessness, sharp chest pain, or coughing up more than 1 teaspoon of blood",
      "FOR LIVER/KIDNEY BIOPSY: Severe increasing abdominal pain, shoulder tip pain, dizziness, fainting, or cold clammy skin (Internal bleeding alert)",
      "Continuous bleeding or swelling at the skin puncture site"
    ]
  }
};

class IRDrugProtocolsManager {
  constructor() {
    this.protocols = IR_DRUG_PROTOCOLS;
    this.activeId = "bcs"; // Default active
    this.activeCategory = "all";
    this.searchQuery = "";
  }

  render(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const categories = [
      { id: "all", name: "All Protocols" },
      { id: "Portal & Venous", name: "Portal & BCS" },
      { id: "Venous & Lymphatic", name: "Varicose & Venous" },
      { id: "Vascular & Embolization", name: "Embolization (TACE/BAE)" },
      { id: "Non-Vascular & Drainage", name: "PTBD / PCN / Drainage" },
      { id: "Biopsy & Diagnostics", name: "Biopsy & Day Care" }
    ];

    let keys = Object.keys(this.protocols);
    if (this.activeCategory !== "all") {
      keys = keys.filter(k => this.protocols[k].category === this.activeCategory);
    }
    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      keys = keys.filter(k => {
        const p = this.protocols[k];
        return p.name.toLowerCase().includes(q) ||
               p.indication.toLowerCase().includes(q) ||
               p.prescriptions.some(rx => rx.item.toLowerCase().includes(q));
      });
    }

    const p = this.protocols[this.activeId] || this.protocols[keys[0]] || this.protocols.bcs;

    let html = `
      <div class="full-container">
        
        <!-- Header banner -->
        <div class="card" style="margin-bottom: 14px; padding: 14px 18px;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <h2 style="font-size: 16px; font-weight: 700; color: var(--text-main); margin: 0; display: flex; align-items: center; gap: 8px;">
                  <span class="icon icon-sm" style="color: var(--primary);"><svg viewBox="0 0 24 24"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg></span>
                  Interventional Radiology Medical Management & Clinical Prescription Handbook
                </h2>
                <span class="header-badge" style="background: var(--primary-light); color: var(--primary); border: 1px solid var(--primary-border);">SMS Clinical Standard</span>
              </div>
              <div style="font-size: 11.5px; color: var(--text-muted); margin-top: 3px;">
                Standardized prescription notes, conditional PRN medications, laboratory monitoring alerts, and structured recall/manipulation timelines for IR residents.
              </div>
            </div>

            <!-- Search bar -->
            <div style="display: flex; gap: 8px;">
              <input type="text" id="drug-search-input" class="form-control" placeholder="Search procedure, drug, indication..." value="${this.searchQuery}" style="width: 260px; font-size: 11.5px; padding: 6px 10px;">
            </div>
          </div>

          <!-- Category Pill Filters -->
          <div style="display: flex; gap: 6px; margin-top: 12px; flex-wrap: wrap;">
            ${categories.map(c => `
              <button class="btn btn-xs ${this.activeCategory === c.id ? 'btn-primary' : 'btn-outline'} btn-drug-cat" data-cat="${c.id}">
                ${c.name}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Master-Detail Dual Column Layout -->
        <div style="display: grid; grid-template-columns: minmax(280px, 320px) minmax(0, 1fr); gap: 16px; align-items: start;">
          
          <!-- Left Column: Procedure Navigation List -->
          <div class="card" style="padding: 10px; max-height: calc(100vh - 180px); overflow-y: auto;">
            <div style="font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.04em; padding: 6px 8px;">
              Clinical Procedures (${keys.length})
            </div>
            <div style="display: flex; flex-direction: column; gap: 4px; margin-top: 4px;">
              ${keys.map(k => {
                const item = this.protocols[k];
                const isActive = item.id === p.id;
                return `
                  <button class="btn btn-outline btn-select-protocol" data-id="${item.id}" style="justify-content: flex-start; text-align: left; padding: 10px 12px; border-radius: var(--radius-sm); border-color: ${isActive ? 'var(--primary)' : 'var(--border)'}; background: ${isActive ? 'var(--primary-light)' : 'var(--bg-surface)'}; color: ${isActive ? 'var(--primary)' : 'var(--text-main)'};">
                    <div style="width: 100%;">
                      <div style="font-weight: 700; font-size: 12.5px; line-height: 1.3;">${item.name}</div>
                      <div style="font-size: 10.5px; color: var(--text-muted); margin-top: 2px;">${item.category}</div>
                    </div>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Right Column: Full Prescription & Protocol Console -->
          <div style="display: flex; flex-direction: column; gap: 14px;">
            
            <!-- Protocol Header Card -->
            <div class="card" style="padding: 16px 20px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 10px;">
                <div>
                  <span style="font-size: 10.5px; font-weight: 700; color: var(--primary); text-transform: uppercase; letter-spacing: 0.04em;">${p.category}</span>
                  <h3 style="font-size: 16px; font-weight: 800; color: var(--text-main); margin: 2px 0 6px 0;">${p.name}</h3>
                  <div style="font-size: 12px; color: var(--text-muted); line-height: 1.4;"><strong>Indication:</strong> ${p.indication}</div>
                </div>

                <!-- 1-Click Action Buttons -->
                <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                  <button class="btn btn-sm btn-primary" id="btn-copy-prescription">
                    <svg class="icon icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    Copy Rx Note
                  </button>
                  <button class="btn btn-sm btn-outline" id="btn-insert-discharge-rx">
                    <svg class="icon icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    Insert to Discharge
                  </button>
                  <button class="btn btn-sm btn-outline" id="btn-print-rx-slip">
                    <svg class="icon icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
                    Print Rx Slip
                  </button>
                </div>
              </div>
            </div>

            <!-- SECTION 1: Standard Discharge Prescription Note -->
            <div class="card" style="padding: 16px 20px;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; border-bottom: 1px solid var(--border-light); padding-bottom: 8px;">
                <h4 style="font-size: 13.5px; font-weight: 700; color: var(--text-main); margin: 0; display: flex; align-items: center; gap: 6px;">
                  <span class="icon icon-xs" style="color: var(--primary);"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></span>
                  Standard Discharge Prescription Note (Rx)
                </h4>
                <span style="font-size: 11px; color: var(--text-muted);">Exact formulation, dosing, frequency & duration</span>
              </div>

              <div style="display: flex; flex-direction: column; gap: 8px;">
                ${p.prescriptions.map((rx, idx) => `
                  <div style="background: var(--bg-surface-alt); border: 1px solid var(--border-light); padding: 10px 14px; border-radius: var(--radius-sm);">
                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 6px;">
                      <div style="font-size: 13px; font-weight: 700; color: var(--text-main);">
                        <span style="color: var(--primary); margin-right: 4px;">${idx + 1}.</span> ${rx.item} ${rx.dose}
                      </div>
                      <div style="display: flex; gap: 6px;">
                        <span class="status-badge badge-info" style="font-size: 10px;">${rx.route}</span>
                        <span class="status-badge badge-pending" style="font-size: 10px;">${rx.freq}</span>
                      </div>
                    </div>
                    <div style="font-size: 11.5px; color: var(--text-main); margin-top: 4px; font-weight: 600;">
                      Duration: <span style="color: var(--primary);">${rx.duration}</span>
                      ${rx.stepDown ? `<div style="color: var(--warning); margin-top: 2px;">Step-Down / Long Term: ${rx.stepDown}</div>` : ''}
                    </div>
                    <div style="font-size: 11px; color: var(--text-muted); margin-top: 3px;">
                      <em>Clinical Advice:</em> ${rx.instructions} [${rx.category}]
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- SECTION 2: In Case It Is Required (Conditional PRN Drugs) -->
            <div class="card" style="padding: 16px 20px;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; border-bottom: 1px solid var(--border-light); padding-bottom: 8px;">
                <h4 style="font-size: 13.5px; font-weight: 700; color: var(--warning-dark); margin: 0; display: flex; align-items: center; gap: 6px;">
                  <span class="icon icon-xs" style="color: var(--warning);"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></span>
                  In Case It Is Required (Conditional PRN Medications)
                </h4>
                <span style="font-size: 10.5px; color: var(--text-muted);">Do not write on every patient; only when clinical trigger occurs</span>
              </div>

              <div style="display: flex; flex-direction: column; gap: 8px;">
                ${p.prnConditionalDrugs.map(c => `
                  <div style="background: rgba(217, 119, 6, 0.06); border: 1px solid rgba(217, 119, 6, 0.2); border-left: 3px solid var(--warning); padding: 10px 14px; border-radius: var(--radius-sm);">
                    <div style="font-size: 12px; font-weight: 700; color: var(--warning-dark);">
                      TRIGGER: ${c.condition}
                    </div>
                    <div style="font-size: 12px; font-weight: 600; color: var(--text-main); margin-top: 3px;">
                      Prescribe: <code>${c.rx}</code>
                    </div>
                    <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">
                      Rationale: ${c.rationale}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- SECTION 3: Blood Reports & Monitoring with Triggers -->
            <div class="card" style="padding: 16px 20px;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; border-bottom: 1px solid var(--border-light); padding-bottom: 8px;">
                <h4 style="font-size: 13.5px; font-weight: 700; color: var(--text-main); margin: 0; display: flex; align-items: center; gap: 6px;">
                  <span class="icon icon-xs" style="color: var(--primary);"><svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></span>
                  Laboratory & Blood Reports to Monitor
                </h4>
                <span style="font-size: 11px; color: var(--text-muted);">Specific tests, timings & critical cut-off triggers</span>
              </div>

              <table class="clinical-table" style="font-size: 11.5px;">
                <thead>
                  <tr>
                    <th>Investigation Test</th>
                    <th>When to Check</th>
                    <th>Critical Threshold Trigger</th>
                    <th>Action Required</th>
                  </tr>
                </thead>
                <tbody>
                  ${p.bloodReports.map(b => `
                    <tr>
                      <td><strong>${b.test}</strong></td>
                      <td>${b.frequency}</td>
                      <td><span style="color: var(--danger); font-weight: 600;">${b.threshold}</span></td>
                      <td>${b.action}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <!-- SECTION 4: Recall & Follow-up Timeline (When to recall for 2-week manipulation) -->
            <div class="card" style="padding: 16px 20px;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; border-bottom: 1px solid var(--border-light); padding-bottom: 8px;">
                <h4 style="font-size: 13.5px; font-weight: 700; color: var(--text-main); margin: 0; display: flex; align-items: center; gap: 6px;">
                  <span class="icon icon-xs" style="color: var(--primary);"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg></span>
                  Recall, Manipulation & Follow-Up Timeline
                </h4>
                <span style="font-size: 11px; color: var(--text-muted);">Exact post-op review intervals & intervention triggers</span>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <div style="background: var(--bg-surface-alt); padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--border-light);">
                  <div style="font-size: 11.5px; font-weight: 700; color: var(--primary); margin-bottom: 4px;">2-WEEK POST-OP RECALL</div>
                  <div style="font-size: 11.5px; color: var(--text-main); line-height: 1.4;">${p.recallTimeline.twoWeeks}</div>
                </div>

                <div style="background: rgba(139, 92, 246, 0.08); padding: 12px; border-radius: var(--radius-sm); border: 1px solid rgba(139, 92, 246, 0.25);">
                  <div style="font-size: 11.5px; font-weight: 700; color: var(--primary); margin-bottom: 4px;">MANIPULATION & RE-INTERVENTION TRIGGER</div>
                  <div style="font-size: 11.5px; color: var(--text-main); line-height: 1.4;">${p.recallTimeline.manipulationIntervention}</div>
                </div>

                <div style="background: var(--bg-surface-alt); padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--border-light);">
                  <div style="font-size: 11.5px; font-weight: 700; color: var(--text-main); margin-bottom: 4px;">1-MONTH SURVEILLANCE</div>
                  <div style="font-size: 11.5px; color: var(--text-main); line-height: 1.4;">${p.recallTimeline.oneMonth}</div>
                </div>

                <div style="background: var(--bg-surface-alt); padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--border-light);">
                  <div style="font-size: 11.5px; font-weight: 700; color: var(--text-main); margin-bottom: 4px;">3 TO 6 MONTHS LONG-TERM</div>
                  <div style="font-size: 11.5px; color: var(--text-main); line-height: 1.4;">${p.recallTimeline.threeToSixMonths}</div>
                </div>
              </div>

              <!-- Red Flag Warning Banner -->
              <div style="margin-top: 12px; background: rgba(225, 29, 72, 0.08); border: 1px solid rgba(225, 29, 72, 0.25); border-left: 4px solid var(--danger); padding: 10px 14px; border-radius: var(--radius-sm);">
                <div style="font-size: 12px; font-weight: 700; color: var(--danger);">EMERGENCY RED FLAGS (REPORT IMMEDIATELY TO SMS CASUALTY / IR):</div>
                <ul style="margin: 4px 0 0 16px; padding: 0; font-size: 11px; color: var(--text-main); line-height: 1.4;">
                  ${p.redFlags.map(rf => `<li>${rf}</li>`).join('')}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;

    // Attach Event Handlers
    container.querySelectorAll(".btn-drug-cat").forEach(btn => {
      btn.onclick = () => {
        this.activeCategory = btn.dataset.cat;
        this.render(containerId);
      };
    });

    const searchInp = document.getElementById("drug-search-input");
    if (searchInp) {
      searchInp.oninput = (e) => {
        this.searchQuery = e.target.value;
        this.render(containerId);
      };
    }

    container.querySelectorAll(".btn-select-protocol").forEach(btn => {
      btn.onclick = () => {
        this.activeId = btn.dataset.id;
        this.render(containerId);
      };
    });

    // Copy Full Prescription Note
    const copyBtn = document.getElementById("btn-copy-prescription");
    if (copyBtn) {
      copyBtn.onclick = () => this.copyPrescriptionText(p);
    }

    // Insert into Discharge Summary
    const insertBtn = document.getElementById("btn-insert-discharge-rx");
    if (insertBtn) {
      insertBtn.onclick = () => this.insertIntoDischargeSummary(p);
    }

    // Print Rx Slip
    const printBtn = document.getElementById("btn-print-rx-slip");
    if (printBtn) {
      printBtn.onclick = () => this.printRxSlip(p);
    }
  }

  generatePlainTextPrescription(p) {
    let text = `SMS MEDICAL COLLEGE & ATTACHED HOSPITALS, JAIPUR
Department of Radiodiagnosis & Interventional Radiology
CLINICAL DISCHARGE PRESCRIPTION & MANAGEMENT PROTOCOL
--------------------------------------------------
Procedure / Condition: ${p.name}
Indication: ${p.indication}

DISCHARGE MEDICATIONS (Rx):
`;

    p.prescriptions.forEach((rx, i) => {
      text += `${i + 1}. ${rx.item} ${rx.dose} - ${rx.route} - ${rx.freq} (${rx.duration})\n`;
      if (rx.stepDown) text += `   -> Step Down: ${rx.stepDown}\n`;
      text += `   Advice: ${rx.instructions}\n`;
    });

    text += `\nIN CASE IT IS REQUIRED (CONDITIONAL PRN):\n`;
    p.prnConditionalDrugs.forEach(c => {
      text += `- If ${c.condition}:\n  Take: ${c.rx}\n`;
    });

    text += `\nBLOOD INVESTIGATIONS TO MONITOR:\n`;
    p.bloodReports.forEach(b => {
      text += `- ${b.test} (${b.frequency}) -> Alert: ${b.threshold}\n`;
    });

    text += `\nRECALL & FOLLOW-UP TIMELINE:\n`;
    text += `- 2 Weeks: ${p.recallTimeline.twoWeeks}\n`;
    text += `- Manipulation Alert: ${p.recallTimeline.manipulationIntervention}\n`;
    text += `- Long Term: ${p.recallTimeline.threeToSixMonths}\n`;

    text += `\nEMERGENCY RED FLAGS (Report to IR / Emergency immediately):\n`;
    p.redFlags.forEach(rf => {
      text += `- ${rf}\n`;
    });
    text += `--------------------------------------------------\nIR Resident On-Duty, SMS Hospital, Jaipur\n`;

    return text;
  }

  copyPrescriptionText(p) {
    const text = this.generatePlainTextPrescription(p);
    navigator.clipboard.writeText(text).then(() => {
      if (typeof showToast === 'function') {
        showToast(`Prescription for ${p.shortName} copied to clipboard!`, 'success');
      } else {
        alert("Prescription copied to clipboard!");
      }
    });
  }

  insertIntoDischargeSummary(p) {
    const dischargeTabBtn = document.querySelector('.nav-tab-btn[data-tab="tab-discharge"]');
    if (dischargeTabBtn) dischargeTabBtn.click();

    // Format medications
    const medText = p.prescriptions.map((rx, i) => {
      let line = `${i + 1}. ${rx.item} ${rx.dose} - ${rx.route} - ${rx.freq} (${rx.duration})`;
      if (rx.stepDown) line += ` -> Then: ${rx.stepDown}`;
      return line;
    }).join('\n');

    // Format discharge advice
    let adviceText = `RECALL SCHEDULE:\n- ${p.recallTimeline.twoWeeks}\n- ${p.recallTimeline.manipulationIntervention}\n\nBLOOD TESTS TO MONITOR:\n`;
    p.bloodReports.forEach(b => {
      adviceText += `- ${b.test} at ${b.frequency} (${b.threshold})\n`;
    });
    adviceText += `\nPRN MEDICATIONS (In case required):\n`;
    p.prnConditionalDrugs.forEach(c => {
      adviceText += `- ${c.condition}: ${c.rx}\n`;
    });

    const medEl = document.getElementById("medications");
    if (medEl) medEl.value = medText;

    const advEl = document.getElementById("dischargeAdvice");
    if (advEl) advEl.value = adviceText;

    if (typeof showToast === 'function') {
      showToast(`Loaded ${p.shortName} prescription and advice into Discharge Summary!`, 'success');
    }
  }

  printRxSlip(p) {
    const text = this.generatePlainTextPrescription(p);
    const win = window.open('', '_blank', 'width=800,height=900');
    win.document.write(`
      <html>
        <head>
          <title>Prescription Slip - ${p.name}</title>
          <style>
            body { font-family: 'Inter', sans-serif; font-size: 12px; line-height: 1.5; padding: 24px; color: #111; }
            h1 { font-size: 16px; margin: 0 0 4px 0; }
            h2 { font-size: 13px; color: #555; margin: 0 0 16px 0; border-bottom: 2px solid #222; padding-bottom: 6px; }
            pre { font-family: inherit; white-space: pre-wrap; font-size: 12px; }
            .header-bar { display: flex; justify-content: space-between; border-bottom: 1px solid #ccc; padding-bottom: 8px; margin-bottom: 12px; }
          </style>
        </head>
        <body>
          <div class="header-bar">
            <div>
              <h1>SMS MEDICAL COLLEGE & HOSPITALS, JAIPUR</h1>
              <div>Department of Radiodiagnosis & Interventional Radiology</div>
            </div>
            <div style="text-align: right; font-size: 11px;">
              <div>Date: ${new Date().toLocaleDateString('en-IN')}</div>
              <div>Bangur Angio Suite</div>
            </div>
          </div>
          <h2>PATIENT DISCHARGE PRESCRIPTION & CLINICAL PROTOCOL</h2>
          <pre>${text}</pre>
          <div style="margin-top: 40px; display: flex; justify-content: flex-end;">
            <div style="text-align: center; border-top: 1px solid #000; width: 220px; padding-top: 4px;">
              Signature of IR Resident / Consultant
            </div>
          </div>
        </body>
      </html>
    `);
    win.document.close();
    win.focus();
    setTimeout(() => {
      win.print();
    }, 500);
  }
}

// Global instance initialization
window.IR_DRUG_PROTOCOLS_MANAGER = new IRDrugProtocolsManager();
