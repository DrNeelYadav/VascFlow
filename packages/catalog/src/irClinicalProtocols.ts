export interface PreScanChecklistItem {
  id: string;
  label: string;
  options: string[];
  defaultSelected: string;
}

export interface HardwareRequisitionItem {
  id: string;
  item: string;
  spec: string;
  required: boolean;
}

export interface PostOpCarePlan {
  drugs: string[];
  monitoring: string[];
  dischargeCriteria: string;
}

export interface IRClinicalProtocol {
  key: string;
  title: string;
  organSystem:
    | "Liver & Hepatobiliary"
    | "Thoracic & Pulmonary"
    | "Gastrointestinal & Mesenteric"
    | "Peripheral Vascular"
    | "Aortic & Complex"
    | "Venous & Dialysis Access"
    | "Pelvic & Genitourinary";
  modality: "XA";
  clinicalCriteria: string;
  recommendedLabs: string[];
  specialInvestigations: string[];
  calculatorType: "rotterdam" | "clichy" | "meld" | "cigarroa" | null;
  preScanAnatomyChecklist: PreScanChecklistItem[];
  hardwareRequisition: HardwareRequisitionItem[];
  postOpCare: PostOpCarePlan;
}

export const IR_CLINICAL_PROTOCOLS: IRClinicalProtocol[] = [
  // =========================================================================
  // 1. LIVER & HEPATOBILIARY
  // =========================================================================
  {
    key: "budd_chiari_dips",
    title: "Budd-Chiari Syndrome: Transcaval DIPS / Recanalization",
    organSystem: "Liver & Hepatobiliary",
    modality: "XA",
    clinicalCriteria:
      "Diffuse 3-hepatic vein occlusion with refractory tense ascites or hepatic failure failing medical therapy.",
    recommendedLabs: [
      "Liver Function Tests (Total & Direct Bilirubin, AST, ALT, Albumin)",
      "Renal Function Tests (Serum Creatinine, BUN, Electrolytes)",
      "Coagulation Profile (PT, INR, aPTT, Platelet Count, Fibrinogen)",
      "Complete Blood Count (Hb, TLC, Platelets)",
      "Blood Grouping & Crossmatching (4 Units PRBC, 4 Units FFP reserved)",
    ],
    specialInvestigations: [
      "JAK2 V617F Mutation Assay (Polycythemia Vera / Myeloproliferative screening)",
      "Protein C Activity & Protein S Free Antigen",
      "Antithrombin III Functional Assay",
      "Factor V Leiden (G1691A) & Prothrombin Gene (G20210A) Mutation",
      "Serum Homocysteine & Antiphospholipid Antibodies (Lupus Anticoagulant, Anti-Cardiolipin)",
    ],
    calculatorType: "rotterdam",
    preScanAnatomyChecklist: [
      {
        id: "rhv",
        label: "Right Hepatic Vein (RHV)",
        options: ["Thrombotic Occlusion", "Membranous Web", "Severe Stenosis", "Patent"],
        defaultSelected: "Thrombotic Occlusion",
      },
      {
        id: "mhv",
        label: "Middle Hepatic Vein (MHV)",
        options: ["Thrombotic Occlusion", "Patent (Target for Venoplasty)", "Attenuated / Cord-like"],
        defaultSelected: "Patent (Target for Venoplasty)",
      },
      {
        id: "lhv",
        label: "Left Hepatic Vein (LHV)",
        options: ["Thrombotic Occlusion", "Attenuated", "Patent"],
        defaultSelected: "Thrombotic Occlusion",
      },
      {
        id: "ivc_status",
        label: "Inferior Vena Cava (IVC) Status",
        options: ["Short Segment Suprahepatic Web", "Long Segment Chronic Occlusion", "Patent with Sluggish Flow", "Extrinsic Compression by Caudate"],
        defaultSelected: "Short Segment Suprahepatic Web",
      },
      {
        id: "caudate",
        label: "Caudate Lobe Thickness",
        options: ["Marked Hypertrophy (>3.5 cm)", "Moderate Hypertrophy", "Normal Size"],
        defaultSelected: "Marked Hypertrophy (>3.5 cm)",
      },
      {
        id: "right_ijv",
        label: "Right Internal Jugular Vein (Access Ultrasound)",
        options: ["Patent & Fully Compressible (>10 mm)", "Normal Diameter", "Partial Thrombus (Contraindication)"],
        defaultSelected: "Patent & Fully Compressible (>10 mm)",
      },
    ],
    hardwareRequisition: [
      { id: "h1", item: "Transjugular Sheath", spec: "10F 45cm Ansel / Flexor Hydrophilic Guiding Sheath", required: true },
      { id: "h2", item: "Colapinto Puncture Needle", spec: "RUPS-100 Colapinto Transcaval Access Set (10F)", required: true },
      { id: "h3", item: "Extra-Stiff Guidewires", spec: "0.035\" 260cm Amplatz Extra-Stiff + 0.035\" Terumo Glidewire", required: true },
      { id: "h4", item: "High-Pressure Angioplasty Balloons", spec: "Conquest / Atlas 8x40 mm & 10x40 mm Non-Compliant", required: true },
      { id: "h5", item: "Viatorr TIPS Stent-Graft", spec: "Gore Viatorr Covered Stent: 10 mm diameter (7 cm covered + 2 cm bare)", required: true },
      { id: "h6", item: "Metallic Stent (Caval Web)", spec: "Wallstent / E-Luminexx 18-24 mm x 60 mm (if caval stenting required)", required: false },
      { id: "h7", item: "Intra-op Pressure Manometer", spec: "Electronic Transducer for Portal & Right Atrial Gradient (FHVP - WHVP)", required: true },
    ],
    postOpCare: {
      drugs: [
        "Therapeutic Low Molecular Weight Heparin (Enoxaparin 1 mg/kg s/c q12h) starting 4 hours post-sheath removal.",
        "Lifelong Oral Anticoagulation (DOAC - Apixaban 5 mg BD or Warfarin with target INR 2.0 - 3.0) from POD 2.",
        "Diuretic Maintenance: Spironolactone 100 mg OD + Furosemide 40 mg OD (titrate to maintain dry weight).",
        "20% Human Albumin Infusion (100 mL IV daily x 3 days) if large-volume paracentesis performed.",
        "Prophylactic Antibiotics: IV Ceftriaxone 1g q12h for 48 hours.",
      ],
      monitoring: [
        "Bedside Doppler Ultrasound of DIPS / Hepatic Vein shunt at 24 hours (target velocity 90 - 190 cm/s).",
        "Right IJV puncture site compression dressing check q1h x 4h.",
        "Daily abdominal girth and daily morning weight measurement.",
        "Liver & Renal biochemistry on POD 1 and POD 3.",
      ],
      dischargeCriteria:
        "Stable stent velocities on 24h Doppler, therapeutic INR or therapeutic DOAC established, puncture site healed without hematoma, afebrile.",
    },
  },

  {
    key: "hepatic_venoplasty",
    title: "Hepatic Venoplasty & Caval Recanalization",
    organSystem: "Liver & Hepatobiliary",
    modality: "XA",
    clinicalCriteria:
      "Short-segment membranous obstruction or fibrous diaphragm of hepatic vein or retrohepatic IVC with preserved liver parenchyma.",
    recommendedLabs: ["LFT (Bilirubin, Albumin, Transaminases)", "RFT", "PT/INR", "Platelet Count"],
    specialInvestigations: ["Coagulation Workup (Protein C, S, Antithrombin III)", "Contrast Triphasic CT Venography"],
    calculatorType: "rotterdam",
    preScanAnatomyChecklist: [
      { id: "web_loc", label: "Membranous Web Location", options: ["Ostial RHV", "Ostial MHV", "Suprahepatic IVC Web", "Combined"], defaultSelected: "Ostial RHV" },
      { id: "grad", label: "Estimated Caval Pressure Gradient", options: [">10 mmHg (Severe)", "5-10 mmHg (Moderate)", "<5 mmHg"], defaultSelected: ">10 mmHg (Severe)" },
      { id: "ijv", label: "Right Jugular Access", options: ["Patent", "Thrombosed"], defaultSelected: "Patent" },
    ],
    hardwareRequisition: [
      { id: "h1", item: "Vascular Sheath", spec: "8F 45cm Jugular Introducer Sheath", required: true },
      { id: "h2", item: "Hydrophilic Crossing Wire", spec: "0.035\" Terumo Stiff Glidewire 260cm + 4F Cobra Catheter", required: true },
      { id: "h3", item: "High-Pressure Balloon", spec: "Atlas / Conquest 12-14 mm (for HV) or 20-24 mm (for IVC)", required: true },
      { id: "h4", item: "Self-Expanding Stent", spec: "Wallstent / E-Luminexx (if recoil >30%)", required: false },
    ],
    postOpCare: {
      drugs: ["Enoxaparin 60mg s/c BD x 5 days", "Oral DOAC / Warfarin bridge for 6-12 months", "Aspirin 75mg OD"],
      monitoring: ["Right neck puncture site check", "Doppler surveillance at 24 hours for venous patency and flow direction"],
      dischargeCriteria: "Confirmed hepatic venous flow on 24h Doppler without residual stenosis, stable hemodynamics.",
    },
  },

  {
    key: "tglb_hvpg",
    title: "Transjugular Liver Biopsy (TGLB) & HVPG Measurement",
    organSystem: "Liver & Hepatobiliary",
    modality: "XA",
    clinicalCriteria:
      "Parenchymal core biopsy in severe coagulopathy (INR >1.5, Platelets <50,000) or massive ascites where percutaneous biopsy is contraindicated.",
    recommendedLabs: ["Complete Blood Count", "PT / INR", "Serum Creatinine", "Type & Screen"],
    specialInvestigations: ["Pre-procedural Bedside Ultrasound (patent right IJV confirmation)"],
    calculatorType: "meld",
    preScanAnatomyChecklist: [
      { id: "rhv_cannulation", label: "Target Hepatic Vein", options: ["Right Hepatic Vein (Standard)", "Middle Hepatic Vein (Alternative)"], defaultSelected: "Right Hepatic Vein (Standard)" },
      { id: "capsule", label: "Liver Surface & Ascites", options: ["Massive Ascites Present", "Mild Ascites", "No Ascites"], defaultSelected: "Massive Ascites Present" },
    ],
    hardwareRequisition: [
      { id: "h1", item: "TGLB Set", spec: "Cook Quick-Core / LABS-100 18G/19G Transjugular Biopsy System", required: true },
      { id: "h2", item: "Guiding Sheath", spec: "7F 45cm Transjugular Curved Sheath", required: true },
      { id: "h3", item: "Pressure Catheter", spec: "5F Berenstein / Cobra catheter with pressure transducer", required: true },
      { id: "h4", item: "Contrast", spec: "Isovue 370 for hepatic parenchymal parenchymogram", required: true },
    ],
    postOpCare: {
      drugs: ["Paracetamol 650mg IV/oral for post-capsular pain as needed"],
      monitoring: ["Hourly vitals and right neck puncture site checks x 4 hours", "Bedside USG if severe abdominal pain or drop in BP"],
      dischargeCriteria: "4 hours uneventful observation, stable Hb and BP, core specimens fixed in formalin.",
    },
  },

  {
    key: "tips_portal_htn",
    title: "Transjugular Intrahepatic Portosystemic Shunt (TIPS)",
    organSystem: "Liver & Hepatobiliary",
    modality: "XA",
    clinicalCriteria:
      "Secondary prevention of recurrent variceal hemorrhage or refractory cirrhotic ascites failing medical and endoscopic therapy.",
    recommendedLabs: ["Bilirubin, Albumin, INR, Creatinine, Sodium", "CBC", "Blood Crossmatch 4 units PRBC"],
    specialInvestigations: ["Triphasic CT Abdomen for portal vein bifurcation patency", "Echocardiography (rule out heart failure)"],
    calculatorType: "meld",
    preScanAnatomyChecklist: [
      { id: "pv_patency", label: "Main Portal Vein", options: ["Patent & Caliber >10 mm", "Partial Non-Occlusive Thrombus", "Completely Occluded (Cavernoma)"], defaultSelected: "Patent & Caliber >10 mm" },
      { id: "rhv_rpb", label: "Puncture Route", options: ["RHV to Right Portal Vein (Standard)", "MHV to Left Portal Vein"], defaultSelected: "RHV to Right Portal Vein (Standard)" },
    ],
    hardwareRequisition: [
      { id: "h1", item: "TIPS Access Set", spec: "RUPS-100 Transjugular Needle Set", required: true },
      { id: "h2", item: "Viatorr Endoprosthesis", spec: "Gore Viatorr 8-10 mm dia (controlled expansion)", required: true },
      { id: "h3", item: "Angioplasty Balloon", spec: "8x40 mm and 10x40 mm PTA balloon", required: true },
      { id: "h4", item: "Embolic Coils (Varices)", spec: "0.035\" Nester / Tornado coils for coronary variceal embolization", required: true },
    ],
    postOpCare: {
      drugs: ["Lactulose 30 mL TDS to maintain 2-3 soft stools/day (hepatic encephalopathy prophylaxis)", "Rifaximin 550 mg BD"],
      monitoring: ["Portosystemic gradient check (<12 mmHg)", "Doppler USG at 24 hours", "Daily neurological exam for encephalopathy"],
      dischargeCriteria: "Post-TIPS gradient <12 mmHg, no active variceal bleeding, absence of encephalopathy.",
    },
  },

  {
    key: "ctace_hepatoma",
    title: "Transarterial Chemoembolization (cTACE / DEB-TACE)",
    organSystem: "Liver & Hepatobiliary",
    modality: "XA",
    clinicalCriteria:
      "Intermediate-stage (BCLC B) unresectable Hepatocellular Carcinoma or bridge to liver transplantation.",
    recommendedLabs: ["AFP (Alpha-Fetoprotein)", "LFT (Bilirubin, Albumin)", "Creatinine & eGFR", "PT/INR", "CBC"],
    specialInvestigations: ["Triphasic Liver CT / Contrast MRI (LIRADS 5 lesion)"],
    calculatorType: "cigarroa",
    preScanAnatomyChecklist: [
      { id: "tumor_loc", label: "Tumor Location & Number", options: ["Segment VIII Solitary (4 cm)", "Multifocal Bilobar", "Segment V/VI Dominant"], defaultSelected: "Segment VIII Solitary (4 cm)" },
      { id: "feeder", label: "Dominant Arterial Feeder", options: ["Right Hepatic Artery Branch", "Left Hepatic Artery", "Parasitic Feeder (Right Phrenic / Omental)"], defaultSelected: "Right Hepatic Artery Branch" },
    ],
    hardwareRequisition: [
      { id: "h1", item: "Base Catheter", spec: "5F Celiac / Simmons-1 Diagnostic Catheter", required: true },
      { id: "h2", item: "Microcatheter", spec: "2.0F - 2.4F Progreat 130cm with 0.014\" Steerable Hydrophilic Wire", required: true },
      { id: "h3", item: "Chemotherapeutic & Lipiodol", spec: "Doxorubicin 50 mg + Lipiodol 10 mL emulsion + Gelatin Sponge", required: true },
    ],
    postOpCare: {
      drugs: ["IV Ondansetron 8mg + Dexamethasone 8mg (post-embolization syndrome prophylaxis)", "IV Hydration 2.5L/day", "Analgesia: Tramadol 50mg IV"],
      monitoring: ["Urine output monitoring (>50 mL/h) to prevent contrast-induced nephropathy", "Temperature and liver pain grading"],
      dischargeCriteria: "Afebrile, pain controlled on oral analgesics, stable LFTs on POD 1.",
    },
  },

  // =========================================================================
  // 2. THORACIC & PULMONARY
  // =========================================================================
  {
    key: "bae_hemoptysis",
    title: "Bronchial Artery Embolization (BAE) for Massive Hemoptysis",
    organSystem: "Thoracic & Pulmonary",
    modality: "XA",
    clinicalCriteria:
      "Life-threatening hemoptysis (>300 mL in 24h) secondary to cavitary pulmonary tuberculosis, bronchiectasis, or aspergilloma.",
    recommendedLabs: ["Chest CT Angiography", "CBC (Hb, Platelets)", "PT / INR", "Creatinine", "Type & Screen 4 Units"],
    specialInvestigations: ["Sputum GeneXpert for active MTB", "Adamkiewicz Anterior Spinal Artery exclusion on CTA"],
    calculatorType: "cigarroa",
    preScanAnatomyChecklist: [
      { id: "rba", label: "Right Bronchial Artery Anatomy", options: ["Intercostobronchial Trunk (T5/T6)", "Direct Aortic Origin", "Hypertrophied with Parenchymal Shunt"], defaultSelected: "Intercostobronchial Trunk (T5/T6)" },
      { id: "spinal_artery", label: "Anterior Spinal Artery (Hairpin Loop)", options: ["Excluded on Roadmap (Safe to Embolize)", "Originates from Same Trunk (Extreme Hazard)"], defaultSelected: "Excluded on Roadmap (Safe to Embolize)" },
    ],
    hardwareRequisition: [
      { id: "h1", item: "Base Sheath & Catheter", spec: "5F 45cm Sheath + 5F Mikaelsson / Cobra C2 catheter", required: true },
      { id: "h2", item: "Microcatheter Set", spec: "2.0F - 2.4F Progreat 130cm with 0.014\" Baby Pro wire", required: true },
      { id: "h3", item: "Embolic Particles", spec: "PVA Particles 355-500 um & 500-710 um (Contour / Bead Block)", required: true },
      { id: "h4", item: "Microcoils", spec: "0.018\" Platinum Microcoils for systemic-to-pulmonary collateral exclusion", required: true },
    ],
    postOpCare: {
      drugs: ["IV Tranexamic Acid 1g TDS x 24 hours", "Broad-Spectrum IV Antibiotics (Ceftriaxone 1g BD)", "Cough suppressant (Dextromethorphan)"],
      monitoring: ["Immediate post-op neurological lower limb motor exam (confirm no spinal cord ischemia)", "Puncture site pressure dressing"],
      dischargeCriteria: "No recurrence of hemoptysis for 48 hours, intact lower limb motor/sensory function, stable hematocrit.",
    },
  },

  // =========================================================================
  // 3. GASTROINTESTINAL & MESENTERIC
  // =========================================================================
  {
    key: "ugib_lga_gda",
    title: "Upper GI Bleed: Superselective LGA / GDA Embolization",
    organSystem: "Gastrointestinal & Mesenteric",
    modality: "XA",
    clinicalCriteria:
      "Refractory peptic ulcer hemorrhage or Dieulafoy lesion failing endoscopic clipping and epinephrine injection.",
    recommendedLabs: ["CBC (Hb, Platelets)", "PT/INR", "Serum Creatinine", "UGIE Endoscopy Report with Clip Location"],
    specialInvestigations: ["Crossmatch 4 Units PRBC"],
    calculatorType: "cigarroa",
    preScanAnatomyChecklist: [
      { id: "target_artery", label: "Target Bleeding Vessel", options: ["Gastroduodenal Artery (GDA) - Duodenal Ulcer", "Left Gastric Artery (LGA) - Gastric Ulcer", "Right Gastroepiploic"], defaultSelected: "Gastroduodenal Artery (GDA) - Duodenal Ulcer" },
      { id: "sandwich", label: "Sandwich Technique Plan", options: ["Both Proximal & Distal Coiling planned to prevent SMA reflux", "Superselective Microcoil Placement"], defaultSelected: "Both Proximal & Distal Coiling planned to prevent SMA reflux" },
    ],
    hardwareRequisition: [
      { id: "h1", item: "Guiding Catheter", spec: "5F Celiac / Simmons-1 Catheter + 6F 45cm Balkin Sheath", required: true },
      { id: "h2", item: "Microcatheter", spec: "2.4F Progreat 130cm", required: true },
      { id: "h3", item: "Embolic Coils", spec: "0.014\" / 0.018\" Detachable Platinum Microcoils (2mm - 6mm)", required: true },
      { id: "h4", item: "Gelfoam Slurry", spec: "Sterile Absorbable Gelatin Sponge Torpedoes", required: true },
    ],
    postOpCare: {
      drugs: ["Continuous IV Pantoprazole Infusion (8 mg/hour) for 72 hours", "Blood product transfusion to maintain Hb >8.0 g/dL"],
      monitoring: ["Nasogastric aspirate surveillance for fresh red blood", "Hourly BP and urine output"],
      dischargeCriteria: "Hemoglobin stable without transfusion for 48 hours, tolerating oral diet, dark stools cleared.",
    },
  },

  // =========================================================================
  // 4. PERIPHERAL VASCULAR
  // =========================================================================
  {
    key: "pad_sfa_angioplasty",
    title: "Peripheral Arterial: SFA Angioplasty & Nitinol Stenting",
    organSystem: "Peripheral Vascular",
    modality: "XA",
    clinicalCriteria:
      "Severe lifestyle-limiting claudication (Rutherford 3) or critical limb ischemia (Rutherford 4-6) with documented SFA stenosis/occlusion.",
    recommendedLabs: ["Arterial Duplex Ultrasound", "CTA Runoff Bilateral Lower Limbs", "Serum Creatinine", "PT/INR"],
    specialInvestigations: ["Ankle-Brachial Index (ABI) at rest and post-exercise"],
    calculatorType: "cigarroa",
    preScanAnatomyChecklist: [
      { id: "tasc_class", label: "TASC II Classification", options: ["TASC A / B (Focal Stenosis <15 cm)", "TASC C / D (Diffuse Chronic Total Occlusion)"], defaultSelected: "TASC A / B (Focal Stenosis <15 cm)" },
      { id: "runoff", label: "Tibial Runoff Vessels", options: ["2-Vessel Patent Runoff (ATA + PTA)", "Single-Vessel Runoff (Peroneal Only)", "3-Vessel Patent"], defaultSelected: "2-Vessel Patent Runoff (ATA + PTA)" },
    ],
    hardwareRequisition: [
      { id: "h1", item: "Crossover Sheath", spec: "6F 45cm Ansel / Destination Contralateral Guiding Sheath", required: true },
      { id: "h2", item: "Crossing Guidewires", spec: "0.035\" 260cm Terumo Glidewire Stiff + 0.018\" Command / V-18", required: true },
      { id: "h3", item: "PTA Balloons", spec: "Mustang 5.0x100 mm & 6.0x120 mm Non-Compliant Balloons", required: true },
      { id: "h4", item: "Self-Expanding Stent", spec: "6.0 mm or 7.0 mm x 120 mm Nitinol Stent (Innova / Absolute Pro)", required: true },
    ],
    postOpCare: {
      drugs: ["Dual Antiplatelet Therapy (DAPT): Aspirin 75mg + Clopidogrel 75mg OD x 6 months minimum", "High-intensity Statin (Atorvastatin 80mg OD)"],
      monitoring: ["Distal pulse palpation (Dorsalis Pedis, Posterior Tibial) q30m x 2h, then q2h", "Puncture site hematoma check"],
      dischargeCriteria: "Palpable distal pedal pulses, ABI improved by >0.15, puncture site intact after 6h bed rest.",
    },
  },

  // =========================================================================
  // 5. PELVIC & GENITOURINARY
  // =========================================================================
  {
    key: "pae_prostate",
    title: "Prostatic Artery Embolization (PAE) for BPH",
    organSystem: "Pelvic & Genitourinary",
    modality: "XA",
    clinicalCriteria:
      "Severe lower urinary tract symptoms (IPSS >18, QoL >3) secondary to benign prostatic hyperplasia (prostate volume >40 cc), refractory to medical therapy or high surgical risk for TURP.",
    recommendedLabs: ["Serum PSA (Prostate Specific Antigen)", "Serum Creatinine", "Urine Routine & Culture", "IPSS Score"],
    specialInvestigations: ["Pre-op Pelvic Contrast MRI (prostate volume measurement) and Uroflowmetry (Qmax <12 mL/s)"],
    calculatorType: "cigarroa",
    preScanAnatomyChecklist: [
      { id: "prostate_vol", label: "Baseline Prostate Volume", options: ["Large (>80 cc)", "Moderate (50-80 cc)", "Small-Moderate (40-50 cc)"], defaultSelected: "Large (>80 cc)" },
      { id: "pa_origin", label: "Prostatic Artery Origin", options: ["Type I (Internal Pudendal)", "Type II (Common Gluteal-Pudendal)", "Type III (Obturator)", "Type IV (Inferior Vesical)"], defaultSelected: "Type I (Internal Pudendal)" },
    ],
    hardwareRequisition: [
      { id: "h1", item: "Base Catheter", spec: "5F Roberts Uterine Catheter (RUC) / Cobra C2", required: true },
      { id: "h2", item: "Microcatheter", spec: "2.0F Truselect / Progreat with 0.014\" Microflow wire", required: true },
      { id: "h3", item: "Calibrated Microspheres", spec: "Embozene / Hydropearl 300-500 um or 100-300 um particles", required: true },
      { id: "h4", item: "Vasodilator", spec: "Nitroglycerin 100-200 mcg intra-arterial to prevent vasospasm", required: true },
    ],
    postOpCare: {
      drugs: ["Ciprofloxacin 500mg BD x 7 days (urinary tract infection prophylaxis)", "NSAID (Naproxen 500mg BD) + Tamsulosin 0.4mg OD for 4 weeks"],
      monitoring: ["Foley catheter management (if present, trial of voiding at 1-2 weeks)", "Check for urinary retention or rectal pain"],
      dischargeCriteria: "Spontaneous voiding achieved or catheter draining clear urine, pain controlled on oral analgesics.",
    },
  },

  {
    key: "uae_fibroids",
    title: "Uterine Artery Embolization (UAE/UFE)",
    organSystem: "Pelvic & Genitourinary",
    modality: "XA",
    clinicalCriteria:
      "Symptomatic uterine leiomyomas (heavy menstrual bleeding, bulk-related pelvic pressure) or adenomyosis wishing uterine preservation.",
    recommendedLabs: ["Pelvic MRI (FIGO staging of fibroids)", "CBC (Hemoglobin for anemia evaluation)", "Pap Smear & Endometrial Biopsy (rule out malignancy)"],
    specialInvestigations: ["Serum beta-hCG (mandatory pregnancy exclusion)"],
    calculatorType: "cigarroa",
    preScanAnatomyChecklist: [
      { id: "dominant_fibroid", label: "Fibroid Location & Diameter", options: ["FIGO 3/4 Intramural (6-8 cm)", "Multiple Submucosal / Intramural", "FIGO 2 Submucosal (Caution for transcervical expulsion)"], defaultSelected: "FIGO 3/4 Intramural (6-8 cm)" },
      { id: "ovarian_anast", label: "Utero-Ovarian Collaterals", options: ["No Significant Ovarian Anastomosis", "Type II / III Ovarian Collateral (Potential early failure)"], defaultSelected: "No Significant Ovarian Anastomosis" },
    ],
    hardwareRequisition: [
      { id: "h1", item: "Base Catheter", spec: "5F Roberts Uterine (RUC) or 5F MPA catheter", required: true },
      { id: "h2", item: "Microcatheter", spec: "2.4F Progreat 130cm with 0.014\" wire", required: true },
      { id: "h3", item: "Calibrated Microspheres", spec: "PVA particles 500-710 um or Embospheres 500-700 um", required: true },
    ],
    postOpCare: {
      drugs: ["Scheduled IV Ketorolac 30mg q8h + Paracetamol 1g q6h x 24h", "Oral PCA or Tramadol for crampy pelvic pain", "Stool softener"],
      monitoring: ["Pelvic pain score q1h x 6h", "Assess for vaginal discharge / bleeding", "Puncture site dressing intact"],
      dischargeCriteria: "Crampy pain well controlled on oral NSAIDs, tolerating oral fluids, no urinary retention.",
    },
  },

  // =========================================================================
  // 6. VENOUS & DIALYSIS ACCESS
  // =========================================================================
  {
    key: "chemoport_placement",
    title: "Subcutaneous Venous Port (Chemoport) Implantation",
    organSystem: "Venous & Dialysis Access",
    modality: "XA",
    clinicalCriteria:
      "Long-term central venous access for systemic chemotherapy or parenteral nutrition.",
    recommendedLabs: ["CBC (Platelets >50,000)", "PT/INR <1.5", "Serum Creatinine"],
    specialInvestigations: ["Pre-procedural USG Right IJV patency"],
    calculatorType: null,
    preScanAnatomyChecklist: [
      { id: "vein_target", label: "Vein of Access", options: ["Right Internal Jugular Vein (Preferred)", "Left IJV", "Right Subclavian / Axillary"], defaultSelected: "Right Internal Jugular Vein (Preferred)" },
      { id: "pocket", label: "Chest Pocket Site", options: ["Right Infraclavicular Fossa (Over Pectoralis Major)", "Left Infraclavicular Fossa"], defaultSelected: "Right Infraclavicular Fossa (Over Pectoralis Major)" },
    ],
    hardwareRequisition: [
      { id: "h1", item: "Chemoport Kit", spec: "8F / 9.6F Titanium Port Body with Polyurethane Catheter & Tunneling Tool", required: true },
      { id: "h2", item: "Puncture Set", spec: "21G Echogenic Needle + 0.018\" Nitinol Wire (Micro-Puncture Set)", required: true },
      { id: "h3", item: "Peel-Away Sheath", spec: "8F Tearaway Introducer Sheath", required: true },
      { id: "h4", item: "Non-Coring Needles", spec: "20G / 22G Huber Needles (1.5 inch)", required: true },
    ],
    postOpCare: {
      drugs: ["Prophylactic Heparin Lock: 5 mL Heparinized Saline (100 units/mL)", "Oral Amoxicillin-Clavulanate 625mg BD x 3 days"],
      monitoring: ["Check fluoroscopy image confirming tip at Cavoatrial Junction", "Pocket wound inspection for hematoma"],
      dischargeCriteria: "Port easily flushed with brisk blood return, chest x-ray / fluoroscopy verifies tip at cavoatrial junction, sterile dressing dry.",
    },
  },
];

export function getProtocolByKey(key: string): IRClinicalProtocol | undefined {
  return IR_CLINICAL_PROTOCOLS.find((p) => p.key === key);
}
