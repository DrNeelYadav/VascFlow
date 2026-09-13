import { IRClinicalProtocol } from "../irClinicalProtocols";

export const LYMPHATICS_AND_VASCULAR_PROTOCOLS: IRClinicalProtocol[] = [
  // 1. Thoracic Duct Embolization (TDE)
  {
    key: "thoracic_duct_embo_tde",
    title: "Percutaneous Transabdominal Thoracic Duct Embolization (TDE) for Chylothorax",
    organSystem: "Lymphatic & Soft Tissue",
    modality: "XA",
    clinicalCriteria:
      "High-output chylothorax (>1000 mL/day in adults or >100 mL/kg/day in children) or chyloperitoneum refractory to conservative therapy (NPO, medium-chain triglyceride diet, octreotide) post-esophagectomy, thoracic surgery, or trauma.",
    recommendedLabs: [
      "Pleural Fluid Analysis (Triglycerides >110 mg/dL, Chylomicrons present, Lymphocyte predominance)",
      "Complete Blood Count (Total Lymphocyte Count, Hematocrit)",
      "Coagulation Profile (PT/INR, aPTT, Platelet Count)",
      "Serum Total Protein and Albumin (assess nutritional depletion)",
      "Serum Electrolytes (assess fluid/electrolyte loss from high-output chest drainage)",
    ],
    specialInvestigations: [
      "Dynamic Contrast-Enhanced Magnetic Resonance Lymphangiography (DCMRL) with nodal gadolinium injection",
      "Contrast-Enhanced CT Chest and Abdomen (pleural effusion extent, cisterna chyli location)",
      "Bilateral Inguinal Intranodal Lipiodol Lymphangiography under ultrasound guidance",
    ],
    calculatorType: null,
    preScanAnatomyChecklist: [
      {
        id: "cisterna_chyli",
        label: "Cisterna Chyli Visualization",
        options: ["Large Ampullary (>5 mm at L1-L2)", "Plexiform / Attenuated Network", "Duplicated Right and Left Trunk", "Agenesis / Diffuse Retroperitoneal Lymphangiomatosis"],
        defaultSelected: "Large Ampullary (>5 mm at L1-L2)",
      },
      {
        id: "leak_level",
        label: "Lymphatic Leak Level",
        options: ["Mid-Thoracic (T4-T8 Post-Esophagectomy)", "Supradiaphragmatic (T9-T12)", "Thoracic Duct Outlet (Venous Angle - Left Internal Jugular / Subclavian)", "Bilateral Pleural Leak"],
        defaultSelected: "Mid-Thoracic (T4-T8 Post-Esophagectomy)",
      },
      {
        id: "aortic_proximity",
        label: "Retroperitoneal Transabdominal Puncture Track Proximity",
        options: ["Anterior to Aorta & Right of SMA", "Posterior to IVC", "Interaortocaval Window Safe", "Hostile Postsurgical Retroperitoneum"],
        defaultSelected: "Anterior to Aorta & Right of SMA",
      },
    ],
    hardwareRequisition: [
      { id: "h1", item: "Inguinal Lymph Node Access Needle", spec: "25G / 27G 1.5-inch needle for ultrasound intranodal injection", required: true },
      { id: "h2", item: "Ethiodized Oil Contrast", spec: "Lipiodol Ultra-Fluid (maximum 10-15 mL to prevent symptomatic pulmonary oil embolism)", required: true },
      { id: "h3", item: "Transabdominal Cisterna Chyli Access Needle", spec: "21G / 22G 15cm / 20cm Chiba needle", required: true },
      { id: "h4", item: "Microguidewire", spec: "0.014\" 200cm Synchro / Transend / V-18 steerable guidewire", required: true },
      { id: "h5", item: "Microcatheter", spec: "1.7F - 2.0F 130cm / 150cm Progreat / Renegade HI-FLO", required: true },
      { id: "h6", item: "Embolic Agents", spec: "0.014\" Detachable Platinum Microcoils (Concerto / Target 2-4 mm) + N-butyl cyanoacrylate (Histoacryl) glue mixed 1:1 to 1:4 with Lipiodol", required: true },
    ],
    postOpCare: {
      drugs: [
        "Broad-spectrum IV antibiotic prophylaxis (Cefazolin 1g IV or Vancomycin).",
        "Octreotide 100 mcg subcutaneous TDS maintained until chest drain output decreases to <200 mL/day.",
        "Enteral diet with medium-chain triglycerides (MCT) or total parenteral nutrition (TPN) for 48 hours.",
      ],
      monitoring: [
        "Continuous recording of chest tube drainage output volume and character q4h.",
        "Pulse oximetry and respiratory rate monitoring for oil microembolization syndrome.",
        "Daily serum protein, albumin, and electrolyte panels.",
      ],
      dischargeCriteria:
        "Resolution of chylothorax with chest drain output <150 mL/24h on normal oral diet, chest tube successfully clamped and removed without fluid recurrence on chest radiograph.",
    },
  },

  // 2. Venolymphatic Vascular Malformation Sclerotherapy
  {
    key: "vascular_malformation_sclero",
    title: "Percutaneous Image-Guided Sclerotherapy for Low-Flow Venolymphatic Malformations",
    organSystem: "Lymphatic & Soft Tissue",
    modality: "XA",
    clinicalCriteria:
      "Symptomatic low-flow venous or micro/macrocystic lymphatic malformation causing chronic pain, functional impairment, recurrent infection, localized bleeding, disfigurement, or localized consumptive coagulopathy (elevated D-dimer with low fibrinogen).",
    recommendedLabs: [
      "Coagulation Profile (PT/INR, aPTT, D-Dimer quantitative, Plasma Fibrinogen to exclude localized intravascular coagulopathy)",
      "Complete Blood Count (Hb, Platelets, TLC)",
      "Renal Function Tests (Serum Creatinine, BUN)",
      "Baseline Pulmonary Function Tests (DLCO) if Bleomycin sclerotherapy planned",
    ],
    specialInvestigations: [
      "Magnetic Resonance Imaging (MRI) with contrast (T2 hyperintense multi-loculated cysts, fluid-fluid levels, T1 post-contrast enhancement pattern)",
      "Color Doppler Ultrasound (absence of high-velocity arterial inflow, compressible venous lakes, cystic septations)",
      "Pre-sclerotherapy Direct Puncture Varicography under fluoroscopy",
    ],
    calculatorType: null,
    preScanAnatomyChecklist: [
      {
        id: "lesion_architecture",
        label: "Malformation Architecture",
        options: ["Macrocystic Lymphatic (>2 cm cysts)", "Microcystic Lymphatic (<2 cm cysts)", "Venous Cavernous Malformation", "Mixed Venolymphatic"],
        defaultSelected: "Macrocystic Lymphatic (>2 cm cysts)",
      },
      {
        id: "deep_venous_drainage",
        label: "Direct Drainage into Deep Venous System (Embolic Risk)",
        options: ["Isolated Lesion without Early Deep Venous Drainage", "Slow Communication into Deep Veins (Requires Tourniquet / Balloon Occlusion)", "Direct High-Flow Shunt into Deep Veins (Relative Contraindication for Liquid Sclerosant)"],
        defaultSelected: "Isolated Lesion without Early Deep Venous Drainage",
      },
      {
        id: "neurovascular_proximity",
        label: "Adjacent Major Nerve Trunk Proximity",
        options: ["No Adjacent Major Motor Nerve", "Adjacent to Facial Nerve Branches (Head/Neck)", "Adjacent to Sciatic / Peroneal Nerve (Lower Limb)", "Adjacent to Radial / Median Nerve (Upper Limb)"],
        defaultSelected: "No Adjacent Major Motor Nerve",
      },
    ],
    hardwareRequisition: [
      { id: "h1", item: "Puncture Needle", spec: "20G - 22G 4cm - 9cm Angiocath / Surflo needle cannula", required: true },
      { id: "h2", item: "Connecting Tubing & Stopcock", spec: "Pressure monitoring line with 3-way stopcocks for Tessari double-syringe foam technique", required: true },
      { id: "h3", item: "Sclerosant Agent (Primary)", spec: "Bleomycin (maximum single session dose 0.5-1.0 mg/kg, lifetime cumulative <300 mg) or Sodium Tetradecyl Sulfate (STS 3% foam)", required: true },
      { id: "h4", item: "Sclerosant Opacifier", spec: "Ethiodized Oil (Lipiodol) 1-2 mL or Iohexol (Omnipaque 300) mixed with sclerosant foam for real-time fluoroscopic guidance", required: true },
      { id: "h5", item: "Tourniquet / Compression Device", spec: "Pneumatic tourniquet or sterile ultrasound compression probe for drainage vein occlusion", required: false },
    ],
    postOpCare: {
      drugs: [
        "Short course oral corticosteroids (Prednisolone 0.5 mg/kg daily x 3 days) to minimize inflammatory swelling.",
        "Analgesia: Paracetamol 1g QID + Ibuprofen 400mg TDS for 5 days.",
        "Prophylactic antibiotic coverage (Cephalexin 500mg QID x 5 days) if large cysts drained.",
      ],
      monitoring: [
        "Observe for 4 hours post-procedure for acute swelling, compartment tightness, or airway compromise in head/neck lesions.",
        "Evaluate distal motor function and skin sensation of treated extremity.",
        "Check puncture sites for skin blanching, ulceration, or oozing.",
      ],
      dischargeCriteria:
        "Pain controlled with oral analgesics, stable vital signs, intact distal neurovascular status, no impending airway or compartment compromise, follow-up clinic appointment scheduled at 6 weeks.",
    },
  },

  // 3. May-Thurner Syndrome & Iliofemoral DVT Stenting
  {
    key: "may_thurner_dvt_stenting",
    title: "Iliofemoral DVT Pharmacomechanical Thrombectomy & Left Common Iliac Vein (May-Thurner) Stenting",
    organSystem: "Venous & Dialysis Access",
    modality: "XA",
    clinicalCriteria:
      "Acute or subacute (<14-21 days) extensive iliofemoral deep vein thrombosis (DVT) with compression of the left common iliac vein by the right common iliac artery against the 5th lumbar vertebra (May-Thurner / Cockett syndrome), presenting with severe limb swelling, pain, or phlegmasia cerulea dolens.",
    recommendedLabs: [
      "Complete Blood Count (Hb, Platelets >100k)",
      "Coagulation Profile (PT/INR, aPTT, baseline Fibrinogen)",
      "Renal Function Tests (Serum Creatinine, eGFR)",
      "D-Dimer quantitative",
      "Thrombophilia Screening (Protein C, Protein S, Antithrombin III, Factor V Leiden) sent prior to full anticoagulation",
    ],
    specialInvestigations: [
      "Lower Extremity Venous Duplex Ultrasound (continuous non-phasic flow in common femoral vein, extensive thrombus burden)",
      "CT Venography or MR Venography of Abdomen and Pelvis (demonstrating focal compression of left common iliac vein, collateral retroperitoneal/presacral veins)",
      "Intravascular Ultrasound (IVUS) evaluation during catheterization for true lumen area and stent sizing",
    ],
    calculatorType: "cigarroa",
    preScanAnatomyChecklist: [
      {
        id: "access_vein",
        label: "Ultrasound-Guided Access Vein",
        options: ["Ipsilateral Popliteal Vein (Prone)", "Ipsilateral Mid-Thigh Femoral Vein (Supine)", "Ipsilateral Posterior Tibial / Small Saphenous Vein", "Contralateral Right Femoral Access (Up and Over)"],
        defaultSelected: "Ipsilateral Popliteal Vein (Prone)",
      },
      {
        id: "ivc_involvement",
        label: "Inferior Vena Cava (IVC) Extension",
        options: ["Confined to Left Common Iliac Vein (Infra-Caval)", "Thrombus Floating into Infrarenal IVC (Requires Retrievable IVC Filter)", "Chronic IVC Occlusion with Cavernoma"],
        defaultSelected: "Confined to Left Common Iliac Vein (Infra-Caval)",
      },
      {
        id: "spur_chronicity",
        label: "Fibrous Synechia / Spur Chronicity",
        options: ["Acute Non-Occlusive Compression Spur", "Dense Chronic Synechia with Intraluminal Webbing", "Total Chronic Occlusion Requiring Stiff Recanalization"],
        defaultSelected: "Acute Non-Occlusive Compression Spur",
      },
    ],
    hardwareRequisition: [
      { id: "h1", item: "Introducer Sheath", spec: "8F - 10F 45cm Ansel / Flexor Hydrophilic Guiding Sheath", required: true },
      { id: "h2", item: "Pharmacomechanical Thrombectomy System", spec: "AngioJet ZelanteDVT / Inari ClotTriever / Penumbra Indigo Lightning 12 large-bore mechanical aspiration system", required: true },
      { id: "h3", item: "Guidewire", spec: "0.035\" 260cm Terumo Glidewire Advantage / Amplatz Extra-Stiff", required: true },
      { id: "h4", item: "Intravascular Ultrasound (IVUS) Catheter", spec: "Philips Volcano Visions PV 0.035\" / Boston Scientific OptiCross IVUS catheter", required: true },
      { id: "h5", item: "High-Pressure Venous Angioplasty Balloon", spec: "Atlas Gold / Conquest 12-16 mm x 40 mm Non-Compliant PTA Balloon", required: true },
      { id: "h6", item: "Dedicated Self-Expanding Venous Stent", spec: "Bard Venovo / Cook Zilver Vena / Boston Scientific Wallstent 14-16 mm diameter x 60-100 mm length", required: true },
    ],
    postOpCare: {
      drugs: [
        "Therapeutic Low Molecular Weight Heparin (Enoxaparin 1 mg/kg subcutaneous BD) transitioned to Direct Oral Anticoagulation (DOAC - Rivaroxaban 15mg BD x 21d then 20mg OD or Apixaban 10mg BD x 7d then 5mg BD) for minimum 6 months.",
        "Antiplatelet therapy: Aspirin 75mg OD added for 3 months post-stent.",
        "Pain management: Paracetamol + Tramadol PRN.",
      ],
      monitoring: [
        "Groin/popliteal puncture site hematoma surveillance and compression bandage integrity.",
        "Hourly peripheral distal pulse palpation (dorsalis pedis and posterior tibial).",
        "Calf and thigh circumference measurements daily to quantify edema resolution.",
        "Compression therapy: Graduated knee-high elastic compression stockings (30-40 mmHg) applied upon ambulation.",
      ],
      dischargeCriteria:
        "Resolution of severe leg swelling, stable hemoglobin, patent iliofemoral venous stent confirmed on predischarge Duplex ultrasound, established oral anticoagulation, and safe independent ambulation.",
    },
  },

  // 4. Below-the-Knee (BTK) Tibial Arterial Angioplasty
  {
    key: "btk_tibial_angioplasty",
    title: "Below-the-Knee (BTK) Tibial & Pedal Angioplasty for Critical Limb-Threatening Ischemia",
    organSystem: "Peripheral Vascular",
    modality: "XA",
    clinicalCriteria:
      "Critical limb-threatening ischemia (CLTI) presenting with ischemic rest pain (Rutherford Category 4) or non-healing ischemic ulceration / gangrene (Rutherford Category 5-6 / WIfI Stage 3-4) with angiographically proven infrapopliteal tibial arterial occlusion.",
    recommendedLabs: [
      "Renal Function Tests & eGFR (Serum Creatinine, strict contrast volume budgeting)",
      "Complete Blood Count (Hb, Platelets)",
      "Coagulation Profile (PT/INR, aPTT)",
      "HbA1c & Fasting Blood Glucose (diabetic microangiopathy assessment)",
      "Inflammatory Markers (CRP, ESR to assess osteomyelitis/soft tissue sepsis)",
    ],
    specialInvestigations: [
      "Ankle-Brachial Index (ABI) and Toe-Brachial Index (TBI <0.70 or absolute toe pressure <30 mmHg)",
      "Transcutaneous Oxygen Pressure (TcPO2 <30 mmHg predicting poor wound healing)",
      "Lower Extremity Arterial Duplex Ultrasound with pedal arch interrogation",
      "Multidetector CT Angiography or Digital Subtraction Angiography of Tibial and Pedal vessels",
    ],
    calculatorType: "cigarroa",
    preScanAnatomyChecklist: [
      {
        id: "target_tibial_vessel",
        label: "Target Tibial Artery (Direct Angiosome Target)",
        options: ["Anterior Tibial Artery (Dorsum of Foot / First Toe Angiosome)", "Posterior Tibial Artery (Plantar Surface / Heel Angiosome)", "Peroneal Artery (Collateral Pathway via Perforators)", "Pedal Arch / Plantar Arch Occlusion"],
        defaultSelected: "Anterior Tibial Artery (Dorsum of Foot / First Toe Angiosome)",
      },
      {
        id: "lesion_length_calcification",
        label: "Lesion Length & Calcification (TASC BTK)",
        options: ["Long Segment Chronic Total Occlusion (>10 cm) with Severe Monckeberg Medial Calcification", "Focal Stenosis (<5 cm)", "Tandem Diffuse Segmental Occlusions", "Ostial Tibioperoneal Trunk Occlusion"],
        defaultSelected: "Long Segment Chronic Total Occlusion (>10 cm) with Severe Monckeberg Medial Calcification",
      },
      {
        id: "pedal_arch_patency",
        label: "Pedal / Plantar Arch Integrity",
        options: ["Complete Patent Plantar Arch (High Runoff)", "Incomplete Arch (Stenosed Dorsalis Pedis or Lateral Plantar)", "Absent Pedal Arch (Desert Foot)"],
        defaultSelected: "Incomplete Arch (Stenosed Dorsalis Pedis or Lateral Plantar)",
      },
    ],
    hardwareRequisition: [
      { id: "h1", item: "Introducer Sheath", spec: "4F - 5F 45cm Destination / Ansel Guiding Sheath (Antegrade Ipsilateral Femoral Access or Contralateral Up-and-Over)", required: true },
      { id: "h2", item: "Hydrophilic Support Microcatheter", spec: "0.014\" / 0.018\" 135cm - 150cm CXI / Quick-Cross / Corsair microcatheter", required: true },
      { id: "h3", item: "Steerable Microguidewire (CTO Crossing)", spec: "0.014\" 300cm Asahi Gaia / Command 14 / Whisper / V-18 extra-support wire", required: true },
      { id: "h4", item: "Long Infrapopliteal Angioplasty Balloon", spec: "0.014\" 1.5 - 3.5 mm diameter x 150 - 220 mm length (Armada 14 / Lutonix 014 Drug-Coated Balloon / Amphirion Deep)", required: true },
      { id: "h5", item: "Vasodilator Cocktail", spec: "Intra-arterial Nitroglycerin (100-200 mcg) + Verapamil (2.5 mg) to prevent tibial vasospasm", required: true },
    ],
    postOpCare: {
      drugs: [
        "Dual Antiplatelet Therapy (DAPT): Aspirin 75mg OD + Clopidogrel 75mg OD for minimum 6 months, continuing single antiplatelet for life.",
        "Statin therapy: High-intensity Atorvastatin 40-80mg daily.",
        "Prostaglandin E1 analogue (Alprostadil infusion 60 mcg IV daily x 5 days) in critical rest pain patients.",
      ],
      monitoring: [
        "Puncture site compression surveillance (manual compression or 4F Angio-Seal / Mynx).",
        "Palpation of dorsalis pedis / posterior tibial pulses and continuous Doppler signal assessment q1h x 4h.",
        "Evaluation of foot warmth, capillary refill time, and pain score reduction.",
        "Wound debridement coordination with Podiatry/Vascular Surgery once perfusion restored.",
      ],
      dischargeCriteria:
        "Relief of ischemic rest pain, presence of triphasic/biphasic Doppler signals in treated pedal vessel, stable puncture site with no hematoma or pseudoaneurysm, comprehensive wound care regimen initiated.",
    },
  },

  // 5. Complex Inferior Vena Cava (IVC) Filter Retrieval
  {
    key: "ivc_filter_complex_retrieval",
    title: "Advanced & Complex Inferior Vena Cava (IVC) Filter Retrieval",
    organSystem: "Venous & Dialysis Access",
    modality: "XA",
    clinicalCriteria:
      "Removal of retrievable IVC filter in patients where the transient indication for caval interruption has resolved (anticoagulation resumed, PE risk subsided), complicated by prolonged dwell time (>6 months), tilt (>15 degrees), struts penetrating caval wall, hook endothelial embedding, or migration.",
    recommendedLabs: [
      "Complete Blood Count (Hb, Platelets)",
      "Coagulation Profile (PT/INR, aPTT)",
      "Serum Creatinine, BUN",
      "Lower Extremity Venous Doppler (confirm absence of deep vein thrombosis)",
    ],
    specialInvestigations: [
      "High-Resolution Contrast-Enhanced Thin-Section Abdominal CT (evaluating filter hook embedding into caval wall, strut tilt angle, penetration of adjacent structures: aorta, duodenum, retroperitoneum)",
      "Caval Duplex Ultrasound",
      "Cavogram during procedure to rule out large trapped caval thrombus (>25% volume)",
    ],
    calculatorType: null,
    preScanAnatomyChecklist: [
      {
        id: "filter_type_tilt",
        label: "Filter Model & Tilt Angle",
        options: ["Celect / Günther Tulip (Minimal Tilt <10°)", "Bard Denali / G2 / Eclipse (>15° Severe Tilt with Wall Abutment)", "Cordis OptEase / TrapEase (Inverted Hook)", "Argon Option / ALN with Hook Embedded in Tissue"],
        defaultSelected: "Bard Denali / G2 / Eclipse (>15° Severe Tilt with Wall Abutment)",
      },
      {
        id: "strut_penetration",
        label: "Strut Penetration of Caval Wall",
        options: ["Intraluminal (No Wall Penetration)", "Type I Penetration (<3 mm beyond wall into retroperitoneum)", "Type II Penetration (>=3 mm with Duodenal or Aortic Abutment)"],
        defaultSelected: "Intraluminal (No Wall Penetration)",
      },
      {
        id: "endothelial_embedding",
        label: "Filter Hook Endothelialization",
        options: ["Free Floating Hook Accessible to Standard Snare", "Embedded Hook in Caval Wall (Requires Endobronchial Forceps / Loop Snare)", "Circumferential Fibrin Sheath (Requires Laser / Balloon Dissection)"],
        defaultSelected: "Embedded Hook in Caval Wall (Requires Endobronchial Forceps / Loop Snare)",
      },
    ],
    hardwareRequisition: [
      { id: "h1", item: "Large-Bore Access Sheath", spec: "10F - 12F 45cm Ansel / Flexor Introducer Sheath (Right Internal Jugular Access)", required: true },
      { id: "h2", item: "Standard Snare System", spec: "Cook CloverSnare / Amplatz GooseNeck Snare (10-15 mm loop)", required: true },
      { id: "h3", item: "Advanced Rigid Endobronchial Forceps", spec: "Olympus FB-19C / rigid biopsy forceps for tissue dissection around embedded hook", required: true },
      { id: "h4", item: "Loop Snare Technique Wire", spec: "0.014\" - 0.035\" Glidewire with 5F Berenstein reverse curve catheter for through-and-through wire loop", required: true },
      { id: "h5", item: "High-Pressure Angioplasty Balloon (Fibrin Sheath Fracture)", spec: "Atlas / Conquest 10-14 mm x 40 mm balloon for endoluminal sheath dilation", required: false },
    ],
    postOpCare: {
      drugs: [
        "Therapeutic anticoagulation continued or resumed according to underlying venous thromboembolism guidelines.",
        "Analgesia: Paracetamol 1g IV / Oral as needed for neck and abdominal soreness.",
      ],
      monitoring: [
        "Bedside vital signs monitoring for retroperitoneal hemorrhage or caval perforation (tachycardia, hypotension, flank pain).",
        "Right internal jugular puncture site surveillance for hematoma.",
        "Post-procedure cavogram reviewed to confirm caval wall integrity and absence of extravasation.",
      ],
      dischargeCriteria:
        "Hemodynamically stable for 4 hours, intact filter completely accounted for on bench inspection, no abdominal or back pain, normal post-retrieval cavogram without contrast extravasation.",
    },
  },

  // 6. Central Venous Sharp Recanalization
  {
    key: "central_vein_sharp_recanalization",
    title: "Thoracic Central Venous Occlusion Sharp Recanalization & Endovascular Stenting",
    organSystem: "Venous & Dialysis Access",
    modality: "XA",
    clinicalCriteria:
      "Chronic total occlusion of the brachiocephalic (innominate) vein, subclavian vein, or superior vena cava in hemodialysis patients with ipsilateral AV access causing severe dialysis access hypertension, massive arm/facial edema, or loss of vascular access, refractory to conventional blunt guidewire recanalization.",
    recommendedLabs: [
      "Complete Blood Count",
      "Coagulation Profile (PT/INR, aPTT, Platelets)",
      "Serum Potassium and Creatinine (schedule hemodialysis clearance)",
    ],
    specialInvestigations: [
      "CT Venography of Chest and Neck with 3D reconstruction (defining occlusion length, relation to ascending aorta, trachea, and mediastinal structures)",
      "Bilateral Upper Extremity & Central Venogram",
      "Dynamic Fluoroscopic Biplane Roadmapping",
    ],
    calculatorType: null,
    preScanAnatomyChecklist: [
      {
        id: "occlusion_site_length",
        label: "Occlusion Location & Length",
        options: ["Left Brachiocephalic Vein (<3 cm Focal Stump)", "Left Brachiocephalic Vein (>5 cm Long Chronic Occlusion)", "Bilateral Innominate Confluence Occlusion", "Subclavian-Innominate Junction Occlusion"],
        defaultSelected: "Left Brachiocephalic Vein (<3 cm Focal Stump)",
      },
      {
        id: "adjacent_vital_structures",
        label: "Proximity to High-Risk Arterial Structures",
        options: ["Anterior to Innominate Artery & Aorta (>10 mm margin)", "Abutting Innominate Artery / Aortic Arch (High Puncture Risk)", "Adjacent to Pericardial Reflection (Risk of Hemopericardium / Tamponade)"],
        defaultSelected: "Anterior to Innominate Artery & Aorta (>10 mm margin)",
      },
      {
        id: "target_snare_presence",
        label: "Target Snare in Distal Patent Segment",
        options: ["GooseNeck Snare in Right Atrium / SVC Target (Femoral Route)", "Loop Snare in Distal Innominate Vein", "No Target Snare Feasible"],
        defaultSelected: "GooseNeck Snare in Right Atrium / SVC Target (Femoral Route)",
      },
    ],
    hardwareRequisition: [
      { id: "h1", item: "Dual Access Sheaths", spec: "10F 45cm Ansel Sheath (Femoral Access) + 7F 45cm Sheath (Ipsilateral Brachial/Basilic Access)", required: true },
      { id: "h2", item: "Target Snare", spec: "20-25 mm Amplatz GooseNeck Snare positioned in target venous stump via femoral route", required: true },
      { id: "h3", item: "Sharp Recanalization Device", spec: "18G / 21G Chiba transhepatic needle or RUPS-100 Colapinto needle or Radiofrequency puncture wire (PowerWire / Baylis)", required: true },
      { id: "h4", item: "Hydrophilic Crossing Wire", spec: "0.035\" 260cm Terumo Glidewire Advantage / Astato 30g CTO wire", required: true },
      { id: "h5", item: "High-Pressure Balloon", spec: "Conquest / Atlas 10-14 mm x 40 mm rated to 30 atm", required: true },
      { id: "h6", item: "Covered / Bare Metal Venous Stent", spec: "Gore Viabahn Covered Stent or Boston Scientific Wallstent 12-16 mm diameter x 60-90 mm length", required: true },
    ],
    postOpCare: {
      drugs: [
        "Unfractionated heparin intra-procedural bolus (5000 IU), followed by oral antiplatelet therapy (Aspirin 75mg OD + Clopidogrel 75mg OD x 3 months).",
        "Short course IV antibiotics (Cefazolin 1g IV).",
      ],
      monitoring: [
        "Intensive hemodynamic monitoring and serial echocardiography / thoracic ultrasound to immediately detect hemothorax or hemopericardium.",
        "Continuous arm circumference measurements and AV fistula thrill evaluation.",
        "Check puncture sites for hematoma.",
      ],
      dischargeCriteria:
        "Hemodynamically stable for 24 hours, post-procedure chest radiograph and echocardiogram demonstrating no pleural or pericardial fluid accumulation, resolution of upper extremity edema, and functioning dialysis AV access.",
    },
  },
];
