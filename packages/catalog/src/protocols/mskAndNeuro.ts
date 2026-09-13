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
    | "Pelvic & Genitourinary"
    | "Musculoskeletal & Pain"
    | "Neurovascular & Head/Neck"
    | "Lymphatic & Soft Tissue";
  modality: "XA";
  clinicalCriteria: string;
  recommendedLabs: string[];
  specialInvestigations: string[];
  calculatorType: "rotterdam" | "clichy" | "meld" | "cigarroa" | null;
  preScanAnatomyChecklist: PreScanChecklistItem[];
  hardwareRequisition: HardwareRequisitionItem[];
  postOpCare: PostOpCarePlan;
}

export const MSK_AND_NEURO_PROTOCOLS: IRClinicalProtocol[] = [
  // =========================================================================
  // 1. MUSCULOSKELETAL & PAIN
  // =========================================================================

  {
    key: "subscapular_shoulder_embo",
    title:
      "Subscapular & Circumflex Humeral Artery Embolization for Adhesive Capsulitis (Frozen Shoulder)",
    organSystem: "Musculoskeletal & Pain",
    modality: "XA",
    clinicalCriteria:
      "Chronic refractory shoulder pain and stiffness (>6 months) failing conservative physiotherapy, NSAIDs, and intra-articular steroid injections. Demonstrated neovascular hypervascularity in rotator interval and axillary pouch on power Doppler or angiography.",
    recommendedLabs: [
      "Complete Blood Count (CBC with Differential: Hemoglobin, Platelet Count, TLC)",
      "Coagulation Profile (PT/INR, aPTT)",
      "Renal Function Panel (Serum Creatinine, Blood Urea Nitrogen, eGFR)",
    ],
    specialInvestigations: [
      "Contrast-Enhanced Shoulder MRI (axillary pouch capsular thickening >4mm, coracohumeral ligament thickening, rotator interval obliteration)",
      "High-Resolution Musculoskeletal Power Doppler Ultrasound of rotator interval and biceps anchor (neovascular hypervascularity)",
      "Visual Analog Scale (VAS) pain score (baseline evaluation)",
      "American Shoulder and Elbow Surgeons (ASES) score & Constant-Murley shoulder score",
    ],
    calculatorType: "cigarroa",
    preScanAnatomyChecklist: [
      {
        id: "axillary_patency",
        label: "Axillary Artery Patency & Caliber",
        options: [
          "Patent with normal caliber",
          "Focal arterial spasm or stenosis",
          "Tortuous axillary loop",
        ],
        defaultSelected: "Patent with normal caliber",
      },
      {
        id: "subscapular_origin",
        label: "Subscapular Artery Branch Origin & Arborization",
        options: [
          "Standard anatomical branch from 3rd part axillary artery",
          "Replaced or high takeoff from 2nd part axillary artery",
          "Dual trunk anatomical variation",
        ],
        defaultSelected: "Standard anatomical branch from 3rd part axillary artery",
      },
      {
        id: "circumflex_humeral",
        label: "Anterior & Posterior Circumflex Humeral Arteries",
        options: [
          "Separate origins with hypervascular blush at rotator interval",
          "Common circumflex trunk supplying capsule",
          "Posterior circumflex dominant supplying inferior axillary capsule",
        ],
        defaultSelected: "Separate origins with hypervascular blush at rotator interval",
      },
      {
        id: "thoracoacromial_contrib",
        label: "Thoracoacromial Artery Contribution (Acromial / Deltoid Branches)",
        options: [
          "Hypertrophied acromial branch feeding anterosuperior capsule",
          "Normal caliber without pathologic neovascularity",
          "Variant direct takeoff from axillary trunk",
        ],
        defaultSelected: "Hypertrophied acromial branch feeding anterosuperior capsule",
      },
      {
        id: "cutaneous_blush_risk",
        label: "Cutaneous Branch Blushing (Non-Target Risk Assessment)",
        options: [
          "Absence of cutaneous branch blushing (safe target)",
          "Cutaneous branch visible from posterior circumflex (requires superselective distal catheterization)",
          "Deltoid muscle blush requiring microcoil protection",
        ],
        defaultSelected: "Absence of cutaneous branch blushing (safe target)",
      },
    ],
    hardwareRequisition: [
      {
        id: "h1",
        item: "Introducer Sheath",
        spec: "4F or 5F 11cm Radial or Femoral Hydrophilic Introducer Sheath",
        required: true,
      },
      {
        id: "h2",
        item: "Diagnostic Catheter",
        spec: "4F or 5F 100cm Glidecath / Berenstein / Headhunter Diagnostic Catheter",
        required: true,
      },
      {
        id: "h3",
        item: "Microcatheter",
        spec: "1.7F - 2.0F 130cm/150cm Progreat / Renegade HI-FLO Microcatheter",
        required: true,
      },
      {
        id: "h4",
        item: "Microguidewire",
        spec: "0.014\" 200cm Synchro-14 / Transend Steerable Microguidewire",
        required: true,
      },
      {
        id: "h5",
        item: "Temporary Embolic Suspension",
        spec: "Imipenem/cilastatin sodium 0.5g emulsion suspended in 10 mL non-ionic iodinated contrast medium",
        required: true,
      },
      {
        id: "h6",
        item: "Calibrated Microspheres (Alternative)",
        spec: "100-300 um Embosphere microspheres diluted 1:5 in contrast and saline (for severe refractory neovascularization)",
        required: false,
      },
      {
        id: "h7",
        item: "Hemostatic Compression Device",
        spec: "Radial compression band (TR Band) or Femoral vascular closure device (Angio-Seal 6F)",
        required: true,
      },
    ],
    postOpCare: {
      drugs: [
        "Celecoxib 200 mg PO daily (or Ibuprofen 600 mg PO TID with meals) x 5 days",
        "Paracetamol 1000 mg PO q8h PRN for breakthrough joint aching",
        "Pantoprazole 40 mg PO daily during oral NSAID therapy for gastroprotection",
      ],
      monitoring: [
        "Access site hemostasis and radial pulse / distal extremity perfusion check q15m x 1h, then q30m x 2h",
        "Monitor for transient cutaneous erythema, blanching, or skin changes over anterior/lateral shoulder",
        "Application of local ice packs to the anterior and lateral shoulder for 20 minutes every 2 hours as needed",
      ],
      dischargeCriteria:
        "Stable puncture site with confirmed hemostasis and zero hematoma, intact distal neurovascular exam (radial pulse 2+, sensation preserved across axillary nerve territory), pain controlled on oral NSAIDs, and clear counseling provided for gentle range of motion physiotherapy starting Day 2.",
    },
  },

  {
    key: "genicular_artery_embo",
    title: "Genicular Artery Embolization (GAE) for Mild-to-Moderate Knee Osteoarthritis",
    organSystem: "Musculoskeletal & Pain",
    modality: "XA",
    clinicalCriteria:
      "Knee osteoarthritis with Kellgren-Lawrence grade 1-3 with persistent moderate-to-severe pain failing 6 months of conservative management (pharmacotherapy, hyaluronic acid/corticosteroid injection, PT).",
    recommendedLabs: [
      "Complete Blood Count (CBC: Hemoglobin, Total Leukocyte Count, Platelet Count)",
      "Coagulation Profile (PT/INR, aPTT)",
      "Renal Function Panel (Serum Creatinine, Blood Urea Nitrogen, eGFR)",
    ],
    specialInvestigations: [
      "Weight-bearing Bilateral Knee Radiographs (AP, lateral, and Merchant skyline views for Kellgren-Lawrence grading)",
      "Non-Contrast Knee MRI (synovial hypertrophy, joint effusion, chondral wear, subchondral bone marrow lesions)",
      "Western Ontario and McMaster Universities Osteoarthritis Index (WOMAC score)",
      "Knee Injury and Osteoarthritis Outcome Score (KOOS) and Baseline VAS pain score",
    ],
    calculatorType: "cigarroa",
    preScanAnatomyChecklist: [
      {
        id: "dga_anatomy",
        label: "Descending Genicular Artery (DGA)",
        options: [
          "Hypertrophied saphenous & articular branches with hyperemic synovitis blush",
          "Normal caliber with minimal synovial hypervascularity",
          "Early high bifurcation from distal superficial femoral artery",
        ],
        defaultSelected: "Hypertrophied saphenous & articular branches with hyperemic synovitis blush",
      },
      {
        id: "smga_anatomy",
        label: "Superior Medial Genicular Artery (SMGA)",
        options: [
          "Prominent articular branch supplying medial joint capsule and patellofemoral compartment",
          "Slender caliber with tortuous collaterals",
          "Hypoplastic or replaced origin from supreme genicular trunk",
        ],
        defaultSelected: "Prominent articular branch supplying medial joint capsule and patellofemoral compartment",
      },
      {
        id: "imga_anatomy",
        label: "Inferior Medial Genicular Artery (IMGA)",
        options: [
          "Hyperemic capillary stain corresponding to medial tibial plateau tender point",
          "Normal caliber with minimal branching",
          "Atherosclerotic ostial stenosis at popliteal takeoff",
        ],
        defaultSelected: "Hyperemic capillary stain corresponding to medial tibial plateau tender point",
      },
      {
        id: "lateral_genicular",
        label: "Lateral Genicular Branches (SLGA & ILGA)",
        options: [
          "Articular hypervascularity at lateral joint compartment",
          "Anatomically standard with no abnormal neovascular blush",
          "Dominant lateral genicular trunk supplying patellar anastomotic ring",
        ],
        defaultSelected: "Articular hypervascularity at lateral joint compartment",
      },
      {
        id: "cutaneous_skin_risk",
        label: "Absence of Cutaneous Branches to Patellar Skin (Non-Target Risk)",
        options: [
          "Absence of cutaneous branches to patellar skin after wedged microcatheter positioning",
          "Cutaneous branch identified, necessitating superselective distal catheterization beyond skin takeoffs",
          "Cutaneous blush visible, managed with ice pack cryoprotection over anterior patellar skin",
        ],
        defaultSelected: "Absence of cutaneous branches to patellar skin after wedged microcatheter positioning",
      },
    ],
    hardwareRequisition: [
      {
        id: "h1",
        item: "Access Sheath",
        spec: "4F 45cm Destination / Ansel Hydrophilic Guiding Sheath (Ipsilateral Antegrade Femoral or Radial Access)",
        required: true,
      },
      {
        id: "h2",
        item: "Base Diagnostic Catheter",
        spec: "4F 100cm Berenstein / Vertebral / Royal Flush Catheter",
        required: true,
      },
      {
        id: "h3",
        item: "Microcatheter",
        spec: "1.7F - 2.0F 130cm/150cm Masters Parkway / Echelon-10 / Progreat Microcatheter",
        required: true,
      },
      {
        id: "h4",
        item: "Microguidewire",
        spec: "0.014\" 200cm Hydrophilic Steerable Microguidewire (Synchro-14 / Transend EX)",
        required: true,
      },
      {
        id: "h5",
        item: "Calibrated Embolic Particles",
        spec: "100-300 um Embozene / Hydropearl microspheres or Imipenem-cilastatin particle emulsion",
        required: true,
      },
      {
        id: "h6",
        item: "Cutaneous Cryoprotection",
        spec: "Topical ice packs applied over patellar and anterior skin during embolization to induce cutaneous vasoconstriction",
        required: true,
      },
      {
        id: "h7",
        item: "Hemostatic Closure / Compression",
        spec: "4F/5F Perclose ProGlide or manual femoral/radial compression clamp",
        required: true,
      },
    ],
    postOpCare: {
      drugs: [
        "Mild analgesics: Paracetamol 1000 mg PO q8h PRN + Celecoxib 200 mg PO daily x 5 days",
        "Pantoprazole 40 mg PO OD during anti-inflammatory course",
        "Topical moisturizing cream applied to anterior knee if mild transient erythema occurs",
      ],
      monitoring: [
        "Access site monitoring (groin or wrist) for hematoma every 30 minutes x 2 hours, then hourly x 2 hours",
        "Careful inspection of patellar and pretibial skin for transient erythema, blanching, or cutis marmorata",
        "Bilateral distal pedal pulses (Dorsalis pedis and Posterior tibial) confirmation post-procedure",
      ],
      dischargeCriteria:
        "Stable puncture site with documented hemostasis, palpable distal pedal pulses, uneventful ambulation without joint locking or acute instability, and strict patient counseling to avoid strenuous weight-bearing and high-impact sports for 48 hours.",
    },
  },

  {
    key: "vertebroplasty_kyphoplasty",
    title: "Percutaneous Balloon Kyphoplasty & Vertebroplasty",
    organSystem: "Musculoskeletal & Pain",
    modality: "XA",
    clinicalCriteria:
      "Painful osteoporotic vertebral compression fracture (VCF) or neoplastic osteolytic lesion (myeloma/metastasis) refractory to medical management, causing severe functional disability.",
    recommendedLabs: [
      "Complete Blood Count (CBC: Hemoglobin, WBC, Platelets >50,000/uL required)",
      "Coagulation Profile (PT/INR <1.5, aPTT)",
      "Serum Calcium and Serum Alkaline Phosphatase",
      "Serum Protein Electrophoresis & Free Light Chains (for myeloma screening)",
    ],
    specialInvestigations: [
      "Spine MRI with Sagittal and Axial STIR & T1 sequences (T1 hypointense, STIR hyperintense bone marrow edema confirming fracture acuity <6-12 weeks)",
      "High-Resolution Thin-Slice Spine CT (evaluating posterior cortical wall integrity, pedicle width, and osteolytic destruction)",
      "Bone Mineral Density (DEXA scan T-score quantifying underlying osteoporosis)",
      "Visual Analog Scale (VAS) and Oswestry Disability Index (ODI) score",
    ],
    calculatorType: null,
    preScanAnatomyChecklist: [
      {
        id: "posterior_cortex",
        label: "Posterior Vertebral Cortex Status",
        options: [
          "Intact posterior cortical wall (safe for balloon tamp inflation)",
          "Focal micro-fracture of posterior cortex without canal compromise",
          "Severe posterior cortex disruption / retropulsion >20% (relative contraindication / high leakage risk)",
        ],
        defaultSelected: "Intact posterior cortical wall (safe for balloon tamp inflation)",
      },
      {
        id: "pedicle_trajectory",
        label: "Pedicle Diameter & Trajectory Angle",
        options: [
          "Standard transpedicular trajectory (pedicle diameter >5 mm)",
          "Narrow/hypoplastic pedicle requiring extrapedicular / parapedicular approach",
          "Unipedicular curved needle access targeted to vertebral midline",
        ],
        defaultSelected: "Standard transpedicular trajectory (pedicle diameter >5 mm)",
      },
      {
        id: "canal_retropulsion",
        label: "Spinal Canal Retropulsion Risk & Epidural Space Margin",
        options: [
          "No canal compromise or retropulsed fragment",
          "Minimal anterior epidural displacement (<2 mm) without cord compression",
          "Significant canal encroachment requiring ultra-viscous cement and continuous biplane fluoroscopy",
        ],
        defaultSelected: "No canal compromise or retropulsed fragment",
      },
      {
        id: "height_loss",
        label: "Fracture Height Loss Percentage",
        options: [
          "Mild (<30% anterior/middle height loss)",
          "Moderate (30-60% wedge deformity, ideal for balloon height restoration)",
          "Severe vertebra plana (>60% collapse with sclerotic vertebra)",
        ],
        defaultSelected: "Moderate (30-60% wedge deformity, ideal for balloon height restoration)",
      },
      {
        id: "endplate_depression",
        label: "Endplate Depression Morphology",
        options: [
          "Superior endplate focal depression with step-off",
          "Inferior endplate depression",
          "Biconcave / dual endplate collapse",
        ],
        defaultSelected: "Superior endplate focal depression with step-off",
      },
    ],
    hardwareRequisition: [
      {
        id: "h1",
        item: "Bone Access Biopsy Needle",
        spec: "10G / 11G Diamond-tip Beveled Bone Access Biopsy Needle with coaxial cannula and hand drill",
        required: true,
      },
      {
        id: "h2",
        item: "Kyphoplasty Balloon Tamp System",
        spec: "Inflatable Kyphoplasty Balloon Tamp (15 mm or 20 mm, rated to 400 psi) with pressure gauge manometer",
        required: true,
      },
      {
        id: "h3",
        item: "Radio-opaque Bone Cement",
        spec: "Polymethylmethacrylate (PMMA) high-viscosity radio-opaque bone cement with contrast opacification (barium sulfate / zirconium dioxide)",
        required: true,
      },
      {
        id: "h4",
        item: "Hydraulic Cement Delivery System",
        spec: "Hydraulic cement delivery syringe system with multiple 1.5 mL side-opening threaded injection cannulas",
        required: true,
      },
      {
        id: "h5",
        item: "Coaxial Bone Trephine",
        spec: "11G coaxial bone biopsy trephine needle (for histological evaluation of suspected neoplastic lesion)",
        required: true,
      },
    ],
    postOpCare: {
      drugs: [
        "Paracetamol 1000 mg IV/PO q6h PRN + Tramadol 50 mg PO q8h PRN for acute somatic puncture site pain",
        "Prophylactic antibiotic: Cefazolin 2g IV single dose administered 30 minutes prior to skin incision",
        "Resume anti-osteoporotic medical therapy (Bisphosphonates / Denosumab / Teriparatide / Calcium + Vitamin D3)",
      ],
      monitoring: [
        "Flat supine bed rest x 2 hours post-procedure until PMMA bone cement completely polymerizes",
        "Serial neurological examination of lower extremity motor (0-5 power), sensory dermatomes (L1-S1), deep tendon reflexes, and sphincter function at 30 min, 1h, and 2h",
        "Post-procedure 2-view spine radiographs (AP and lateral) to document cement containment and rule out asymptomatic venous/disc extravasation",
      ],
      dischargeCriteria:
        "Full recovery from sedation, independent and pain-free ambulation, stable neurological examination with zero focal deficits, post-procedure spine radiographs showing well-contained vertebral PMMA cement without spinal canal or foraminal extrusion, and stable vital signs.",
    },
  },

  {
    key: "msk_tumor_ablation",
    title: "Image-Guided Cryoablation & Radiofrequency Ablation of Musculoskeletal Tumors",
    organSystem: "Musculoskeletal & Pain",
    modality: "XA",
    clinicalCriteria:
      "Benign bone tumors (osteoid osteoma) or painful bone metastases in non-spinal or spinal locations requiring local tumor ablation and pain relief.",
    recommendedLabs: [
      "Complete Blood Count (CBC: Platelet count >75,000/uL, Hemoglobin)",
      "Coagulation Profile (PT/INR <1.5, aPTT)",
      "Renal Function Panel (Serum Creatinine, eGFR)",
      "Alkaline Phosphatase (ALP) and Serum Calcium",
    ],
    specialInvestigations: [
      "Contrast-Enhanced CT of target bone (<=1mm thin-slice reconstructions evaluating cortical nidus, osteolytic margins, and periosteal reaction)",
      "Contrast-Enhanced MRI of target bone (evaluating soft tissue extension and relationship to adjacent neurovascular structures)",
      "Whole-Body 18F-FDG PET-CT or Bone Scintigraphy (if metastatic disease workup)",
      "Visual Analog Scale (VAS) pain score and Brief Pain Inventory (BPI)",
    ],
    calculatorType: null,
    preScanAnatomyChecklist: [
      {
        id: "nerve_distance",
        label: "Distance from Nidus/Tumor to Adjacent Motor Nerves",
        options: [
          ">1.5 cm distance from major motor/sensory nerves (safe ablation margin)",
          "0.5 - 1.5 cm distance (requires continuous thermocouple monitoring or active hydrodissection)",
          "<0.5 cm critical proximity (requires active continuous neuroprotection / CO2 insulation)",
        ],
        defaultSelected: ">1.5 cm distance from major motor/sensory nerves (safe ablation margin)",
      },
      {
        id: "cortical_thickness",
        label: "Overlying Cortical Bone Thickness",
        options: [
          "Dense sclerotic cortical bone >3 mm (requires motorized drill or heavy coaxial trocar)",
          "Thin or attenuated cortical bone (<2 mm, penetrable with manual trocar)",
          "Pathological cortical breach with extraosseous soft tissue extension",
        ],
        defaultSelected: "Dense sclerotic cortical bone >3 mm (requires motorized drill or heavy coaxial trocar)",
      },
      {
        id: "nv_proximity",
        label: "Adjacent Neurovascular Bundle Proximity",
        options: [
          "No major neurovascular bundle within 2 cm of planned ablation zone",
          "Major vessel within 1 cm acting as thermal heat sink (RFA) or thrombosis risk (Cryo)",
          "Intervening fascial plane accessible for fluid dissection separation",
        ],
        defaultSelected: "No major neurovascular bundle within 2 cm of planned ablation zone",
      },
      {
        id: "thermoprotection_space",
        label: "Thermoprotection Dissection Space (Hydrodissection / CO2 Dissection)",
        options: [
          "Not required (adequate anatomical safe buffer >1.5 cm)",
          "Hydrodissection planned with 5% Dextrose in water (D5W) under continuous imaging",
          "CO2 epidural or perineural gas dissection space planned",
        ],
        defaultSelected: "Not required (adequate anatomical safe buffer >1.5 cm)",
      },
    ],
    hardwareRequisition: [
      {
        id: "h1",
        item: "Coaxial Bone Access System",
        spec: "Coaxial Bone Biopsy Access Cannula (10G/11G) with manual trephine and motorized drill system",
        required: true,
      },
      {
        id: "h2",
        item: "High-Frequency RFA Probe",
        spec: "High-Frequency RFA Probe with internal cooling (17G with 10-15 mm active tip) and chilled saline pump",
        required: false,
      },
      {
        id: "h3",
        item: "Cryoablation Needles",
        spec: "Cryoablation Needles (17G IceRod / IceSphere with Argon/Helium dual gas delivery console)",
        required: true,
      },
      {
        id: "h4",
        item: "Thermocouple Temperature Sensors",
        spec: "Fine-wire thermocouple temperature monitoring sensors for real-time neural margin surveillance",
        required: true,
      },
      {
        id: "h5",
        item: "Hydrodissection Needle Set",
        spec: "21G 15cm spinal needle with 500 mL 5% Dextrose in water (D5W) mixed with 5 mL iodinated contrast",
        required: true,
      },
      {
        id: "h6",
        item: "Cavity Osteoplasty System",
        spec: "PMMA high-viscosity bone cement kit for consolidation of lytic metastatic defect post-ablation",
        required: false,
      },
    ],
    postOpCare: {
      drugs: [
        "Oral analgesics: Naproxen 500 mg PO BD (or Ibuprofen 600 mg PO TID) x 5 days",
        "Paracetamol 1000 mg PO q8h PRN + Tramadol 50 mg PO q8h PRN for breakthrough post-ablation bone ache",
        "Dexamethasone 4-8 mg IV single dose perioperatively to reduce perineural edema and post-ablation inflammatory syndrome",
      ],
      monitoring: [
        "Monitor for thermal injury, cutaneous frostbite, or skin burns over ablation site every 30 minutes x 2 hours",
        "Serial neurological testing of relevant peripheral nerve distribution (motor power 0-5 and sensation to light touch/pinprick) to rule out neuropraxia",
        "Vital signs surveillance and procedural puncture site checks q1h x 4h",
      ],
      dischargeCriteria:
        "Stable vital signs, intact baseline motor strength and sensory exam without evidence of neuropraxia, puncture site clean and dry with zero hematoma, post-procedural pain manageable with oral analgesics, and follow-up imaging (contrast CT or MRI) scheduled at 6 weeks.",
    },
  },

  {
    key: "chronic_tendinopathy_embo",
    title: "Transcatheter Arterial Embolization for Refractory Enthesopathy & Chronic Tendinopathy",
    organSystem: "Musculoskeletal & Pain",
    modality: "XA",
    clinicalCriteria:
      "Chronic recalcitrant lateral epicondylitis (tennis elbow), patellar tendinopathy (jumper's knee), or plantar fasciitis with abnormal neovascularity refractory to physical therapy, shockwave therapy, and injections.",
    recommendedLabs: [
      "Complete Blood Count (CBC: Hemoglobin, Platelet count, WBC)",
      "Coagulation Profile (PT/INR, aPTT)",
      "Renal Function Panel (Serum Creatinine, eGFR)",
    ],
    specialInvestigations: [
      "High-resolution Musculoskeletal Ultrasound with microvascular Doppler flow imaging (SMI / Power Doppler demonstrating grade 2-3 hypervascularity at tendon enthesis)",
      "Targeted Musculoskeletal MRI of affected tendon (tendon thickening, intrasubstance high T2/PD signal, enthesopathy changes, bone marrow edema at insertion)",
      "Patient-Rated Tennis Elbow Evaluation (PRTEE) or Victorian Institute of Sport Assessment (VISA) score",
      "Visual Analog Scale (VAS) pain score during provocative resisted isometric contraction",
    ],
    calculatorType: "cigarroa",
    preScanAnatomyChecklist: [
      {
        id: "feeder_artery",
        label: "Radial Recurrent Artery / Interosseous Recurrent Artery Origin",
        options: [
          "Radial recurrent artery supplying common extensor tendon blush (lateral epicondylitis)",
          "Interosseous recurrent artery supplying deep extensor enthesis blush",
          "Descending / Inferior genicular branches (patellar tendinopathy)",
          "Medial plantar artery calcaneal branches (plantar fasciitis)",
        ],
        defaultSelected: "Radial recurrent artery supplying common extensor tendon blush (lateral epicondylitis)",
      },
      {
        id: "tendon_blush",
        label: "Target Tendon Capillary Blushing & Neovascular Arborization",
        options: [
          "Dense localized pathological capillary staining at tendon insertion with rapid washout",
          "Diffuse mild hypervascular staining without focal feeder",
          "Extensive blush involving adjacent subcutaneous peritendinous tissues",
        ],
        defaultSelected: "Dense localized pathological capillary staining at tendon insertion with rapid washout",
      },
      {
        id: "nerve_collaterals",
        label: "Collateral Circulation to Cutaneous & Deep Motor Nerves",
        options: [
          "No dangerous collaterals to deep motor nerves (posterior interosseous nerve) or cutaneous vessels",
          "Collateral branch identified, microcatheter advanced distal to motor nerve takeoff",
          "Cutaneous blushing present, managed with ice-pack application and superselective microcatheterization",
        ],
        defaultSelected: "No dangerous collaterals to deep motor nerves (posterior interosseous nerve) or cutaneous vessels",
      },
    ],
    hardwareRequisition: [
      {
        id: "h1",
        item: "Access Sheath",
        spec: "4F Radial or Brachial Sheath (or 4F Femoral Sheath for lower limb enthesopathy)",
        required: true,
      },
      {
        id: "h2",
        item: "Diagnostic Catheter",
        spec: "4F 100cm Diagnostic Catheter (Berenstein / Glidecath / Multipurpose)",
        required: true,
      },
      {
        id: "h3",
        item: "Microcatheter",
        spec: "1.7F - 2.0F 130cm/150cm Ultra-tapered Microcatheter (Progreat / Renegade / Veloute)",
        required: true,
      },
      {
        id: "h4",
        item: "Microguidewire",
        spec: "0.014\" 200cm Hydrophilic Microguidewire (Synchro-14 / Transend EX / Asahi Meister)",
        required: true,
      },
      {
        id: "h5",
        item: "Temporary Embolic Suspension",
        spec: "Temporary embolic suspension: Imipenem/Cilastatin 0.5g dissolved in 10 mL iodinated contrast (titrated 0.5-1.5 mL until blush prune-out)",
        required: true,
      },
      {
        id: "h6",
        item: "Calibrated Microspheres (Alternative)",
        spec: "100-300 um calibrated spherical microspheres (Embosphere / Embozene) in 1:10 contrast dilution (for high-volume refractory blush)",
        required: false,
      },
      {
        id: "h7",
        item: "Radial / Vascular Compression Device",
        spec: "Radial compression device (TR Band) or manual compression clamp",
        required: true,
      },
    ],
    postOpCare: {
      drugs: [
        "Paracetamol 1000 mg PO q8h PRN for local ischemic enthesis aching",
        "Avoid high-dose NSAIDs for 72 hours post-procedure to preserve biological healing and collagen remodeling response",
        "Topical ice application for 15 minutes every 3 hours PRN on procedure day",
      ],
      monitoring: [
        "Access site hemostasis check every 15 minutes x 1 hour, then every 30 minutes x 1 hour",
        "Distal neurovascular checks (radial pulse, capillary refill, motor power of deep radial/posterior interosseous nerve - finger/wrist extension)",
        "Overlying skin inspection for focal pallor, cyanosis, or cutaneous ischemic changes",
      ],
      dischargeCriteria:
        "Stable puncture site with documented hemostasis, intact motor and sensory function of distal extremity, post-procedure ache manageable with paracetamol, and patient counseled for rest for 48 hours, gentle passive stretching starting Day 3, and strict avoidance of heavy eccentric loading x 2 weeks.",
    },
  },

  // =========================================================================
  // 2. NEUROVASCULAR & HEAD/NECK
  // =========================================================================

  {
    key: "parietal_cranial_davf_embo",
    title: "Transarterial Embolization of Cranial & Parietal Dural Arteriovenous Fistula (DAVF)",
    organSystem: "Neurovascular & Head/Neck",
    modality: "XA",
    clinicalCriteria:
      "Cranial dural arteriovenous fistula with cortical venous reflux (Borden Type II/III, Cognard Type IIb-IV) posing high risk of intracranial hemorrhage, venous infarction, or refractory pulsatile tinnitus.",
    recommendedLabs: [
      "Complete Blood Count (CBC: Hemoglobin, Platelet count, TLC)",
      "Coagulation Profile (PT/INR, aPTT, Fibrinogen)",
      "Renal Function Panel (Serum Creatinine, BUN, eGFR)",
      "Serum Electrolytes (Sodium, Potassium, Chloride, Bicarbonate)",
      "Blood Grouping & Crossmatch (2 Units PRBC crossmatched and held)",
    ],
    specialInvestigations: [
      "Diagnostic 4-Vessel / 6-Vessel Digital Subtraction Cerebral Angiography (DSA with bilateral ICA, ECA, and Vertebral artery selective runs with delayed venous phase)",
      "Brain MRI/MRV with SWI (ischemia, microbleeds, retrograde cortical venous enlargement, pseudophlebitic pattern, parenchymal edema)",
      "Borden (Type I-III) and Cognard (Type I-V) classification score",
      "Baseline Comprehensive Neurological Examination & National Institutes of Health Stroke Scale (NIHSS) score",
    ],
    calculatorType: "cigarroa",
    preScanAnatomyChecklist: [
      {
        id: "mma_branches",
        label: "Middle Meningeal Artery (MMA) Parietal & Frontal Branches",
        options: [
          "Hypertrophied parietal branch directly feeding fistulous nidus (primary target)",
          "Dual frontal and parietal MMA branch feeders supplying fistula",
          "Transosseous tortuous MMA branch with petrosquamous trunk",
        ],
        defaultSelected: "Hypertrophied parietal branch directly feeding fistulous nidus (primary target)",
      },
      {
        id: "occipital_perforators",
        label: "Occipital Artery Transosseous Perforators",
        options: [
          "Transmastoid / transosseous perforators providing secondary shunt supply",
          "No occipital arterial contribution to fistula",
          "Hypertrophied stylomastoid branch requiring selective microcatheterization",
        ],
        defaultSelected: "Transmastoid / transosseous perforators providing secondary shunt supply",
      },
      {
        id: "pharyngeal_trunk",
        label: "Ascending Pharyngeal Artery Neuromeningeal Trunk (Dangerous Anastomoses)",
        options: [
          "Hypoplastic with no fistula supply (safe anatomy)",
          "Neuromeningeal trunk involved, requires strict microcatheter wedging distal to hypoglossal / jugular branches",
          "Direct collateral to vertebral / odontoid arterial arcade (high cranial nerve risk)",
        ],
        defaultSelected: "Hypoplastic with no fistula supply (safe anatomy)",
      },
      {
        id: "fistulous_pouch",
        label: "Fistulous Pouch Location & Sinus Engagement",
        options: [
          "Convexity parietal dural pouch with isolated cortical venous reflux",
          "Transverse-sigmoid sinus wall fistulous pouch with partial sinus stenosis",
          "Superior sagittal sinus wall shunt",
        ],
        defaultSelected: "Convexity parietal dural pouch with isolated cortical venous reflux",
      },
      {
        id: "sinus_occlusion",
        label: "Dural Sinus Occlusion Status",
        options: [
          "Patent draining dural sinus with isolated leptomeningeal venous reflux",
          "Thrombosed / chronically occluded ipsilateral transverse-sigmoid sinus",
          "Segregated dural sinus segment acting as isolated recipient pouch",
        ],
        defaultSelected: "Patent draining dural sinus with isolated leptomeningeal venous reflux",
      },
      {
        id: "cvr_grade",
        label: "Cortical Venous Reflux Grade & Venous Ectasia",
        options: [
          "Severe retrograde cortical venous reflux with venous pouch ectasia >5 mm (high hemorrhage risk)",
          "Moderate retrograde leptomeningeal filling without ectasia",
          "Pseudophlebitic cortical venous congestion",
        ],
        defaultSelected: "Severe retrograde cortical venous reflux with venous pouch ectasia >5 mm (high hemorrhage risk)",
      },
    ],
    hardwareRequisition: [
      {
        id: "h1",
        item: "Guiding Sheath / Catheter",
        spec: "6F 90cm Guiding Sheath (Destination / Shuttle) or 6F Neurological Guide Catheter (Envoy / Benchmark)",
        required: true,
      },
      {
        id: "h2",
        item: "Intermediate Catheter",
        spec: "5F 115cm/125cm Sofia / Navien / DAC Distal Access Catheter",
        required: true,
      },
      {
        id: "h3",
        item: "Steerable Microguidewire",
        spec: "0.010\" or 0.013\" Steerable Microguidewire (Synchro-10 / Synchro-14 / Hybrid 0.012\")",
        required: true,
      },
      {
        id: "h4",
        item: "Flow-Directed / Detachable-Tip Microcatheter",
        spec: "Flow-directed or Detachable-tip Microcatheter (Apollo 1.5F / Marathon / Scepter C dual-lumen balloon microcatheter)",
        required: true,
      },
      {
        id: "h5",
        item: "DMSO-Compatible Delivery Syringe",
        spec: "Dimethyl sulfoxide (DMSO) compatible low-friction delivery syringe (Cadence 1 mL polycarbonate syringe)",
        required: true,
      },
      {
        id: "h6",
        item: "Non-Adhesive Liquid Embolic Agent",
        spec: "Onyx-18 / Onyx-34 / Squid-18 non-adhesive liquid embolic agent (EVOH copolymer)",
        required: true,
      },
      {
        id: "h7",
        item: "Detachable Platinum Coils",
        spec: "Detachable platinum coils for sinus packing if indicated (Target 3D / Ruby Coils)",
        required: false,
      },
      {
        id: "h8",
        item: "Femoral Arterial Closure Device",
        spec: "6F Angio-Seal VIP or Perclose ProGlide Vascular Closure Device",
        required: true,
      },
    ],
    postOpCare: {
      drugs: [
        "Continuous IV Nicardipine or Labetalol infusion titrated to maintain systolic BP strictly <120-130 mmHg to prevent normal perfusion pressure breakthrough (NPPB) edema and hemorrhage",
        "Dexamethasone 4 mg IV q6h x 48 hours to prevent sterile dural inflammatory response",
        "Levetiracetam 500-1000 mg IV q12h for post-procedural seizure prophylaxis",
        "Paracetamol 1000 mg IV q6h + Fentanyl 25-50 mcg IV PRN for severe meningeal headache",
      ],
      monitoring: [
        "Neuro-ICU admission with continuous arterial line blood pressure surveillance (systolic BP strictly <130 mmHg)",
        "Hourly GCS, pupil symmetry, cranial nerve (CN IX, X, XI, XII) checks, and NIHSS assessments",
        "Femoral puncture site and distal pedal pulses surveillance q15m x 1h, q30m x 2h, then hourly x 4h",
        "Emergency non-contrast CT brain at 24 hours (or STAT if acute neurological deficit, severe headache, or vomiting occurs)",
      ],
      dischargeCriteria:
        "Documented complete DAVF shunt obliteration without residual cortical venous reflux on completion angiogram, stable neurological status with baseline NIHSS and absence of new deficits, non-contrast CT brain at 24h showing zero intracranial hemorrhage or edema, blood pressure well controlled on oral regimen without IV infusions, and puncture site completely hemostatic.",
    },
  },

  {
    key: "carotid_stenting_cas",
    title: "Carotid Artery Stenting (CAS) with Distal Embolic Protection",
    organSystem: "Neurovascular & Head/Neck",
    modality: "XA",
    clinicalCriteria:
      "Symptomatic severe internal carotid artery stenosis (>70% NASCET) or asymptomatic severe stenosis (>80%) in patients with high surgical risk for carotid endarterectomy (hostile neck, radiation arteritis, high cervical lesion).",
    recommendedLabs: [
      "Complete Blood Count (CBC: Hemoglobin, Hematocrit, Platelet count)",
      "Coagulation Profile (PT/INR, aPTT)",
      "Renal Function Panel (Serum Creatinine, Blood Urea Nitrogen, eGFR)",
      "Cardiac Troponin I/T and 12-lead Electrocardiogram (ECG)",
      "Fasting Lipid Profile (Total Cholesterol, LDL-C, Triglycerides)",
      "Platelet aggregation assay (VerifyNow P2Y12 assay confirming clopidogrel responsiveness / PRU <180)",
    ],
    specialInvestigations: [
      "Carotid Duplex Ultrasound (Peak Systolic Velocity >230 cm/s, ICA/CCA PSV ratio >4.0, End-Diastolic Velocity >100 cm/s)",
      "CT Angiography of Supra-aortic Trunks and Circle of Willis (aortic arch type, calcification, tortuosity, intracranial collateral channels)",
      "Diffusion-Weighted Brain MRI (DWI) within 48h pre-procedure (documenting baseline ischemic lesions)",
      "National Institutes of Health Stroke Scale (NIHSS) score and baseline modified Rankin Scale (mRS)",
    ],
    calculatorType: "cigarroa",
    preScanAnatomyChecklist: [
      {
        id: "arch_type",
        label: "Aortic Arch Type & Geometry",
        options: [
          "Type I Arch (normal take-off)",
          "Type II Arch (moderate angulation)",
          "Type III Arch (steep origin, challenging catheterization)",
          "Bovine Arch (common origin of innominate and left CCA)",
        ],
        defaultSelected: "Type I Arch (normal take-off)",
      },
      {
        id: "cca_tortuosity",
        label: "Common & Internal Carotid Artery Tortuosity",
        options: [
          "Mild tortuosity with straight access axis",
          "Moderate S-shaped kink in common carotid artery",
          "Severe redundant loop / 360-degree coiling of cervical ICA",
        ],
        defaultSelected: "Mild tortuosity with straight access axis",
      },
      {
        id: "calcification_score",
        label: "Internal Carotid Calcification Score & Morphology",
        options: [
          "Non-calcified or soft fibrolipid plaque (ideal for stenting)",
          "Concentric dense circumferential calcification (high risk of stent under-expansion)",
          "Eccentric ulcerated plaque with intraluminal thrombus risk",
        ],
        defaultSelected: "Non-calcified or soft fibrolipid plaque (ideal for stenting)",
      },
      {
        id: "filter_landing_zone",
        label: "Landing Zone for Distal Protection Filter (>2 cm straight segment distal to stenosis)",
        options: [
          ">2 cm straight non-diseased cervical segment distal to stenosis (ideal landing zone)",
          "1.0 - 2.0 cm short landing zone requiring low-profile filter",
          "Severe distal cervical siphon tortuosity precluding standard filter deployment",
        ],
        defaultSelected: ">2 cm straight non-diseased cervical segment distal to stenosis (ideal landing zone)",
      },
      {
        id: "circle_of_willis",
        label: "Circle of Willis Collateral Adequacy (ACom, PCom)",
        options: [
          "Robust patent Anterior Communicating (ACom) and Posterior Communicating (PCom) arteries",
          "Isolated hemisphere with hypoplastic ACom and absent PCom",
          "Patent contralateral carotid providing robust cross-filling",
        ],
        defaultSelected: "Robust patent Anterior Communicating (ACom) and Posterior Communicating (PCom) arteries",
      },
    ],
    hardwareRequisition: [
      {
        id: "h1",
        item: "Guiding Sheath",
        spec: "6F 90cm Shuttle / Destination Guiding Sheath with Tuohy-Borst valve",
        required: true,
      },
      {
        id: "h2",
        item: "Diagnostic Catheter",
        spec: "5F 100cm Diagnostic Headhunter / Vitek / Simmons-2 Catheter",
        required: true,
      },
      {
        id: "h3",
        item: "Exchange Guidewire",
        spec: "0.035\" 260cm Extra-stiff Exchange Wire (Amplatz Extra-Stiff / Rosen)",
        required: true,
      },
      {
        id: "h4",
        item: "Distal Embolic Protection Device",
        spec: "Distal Embolic Protection Device: 0.014\" SpiderFX / FilterWire EZ / Emboshield NAV6 (basket dia 3.0-7.0 mm)",
        required: true,
      },
      {
        id: "h5",
        item: "Rapid-Exchange Carotid Stent",
        spec: "Rapid-exchange Carotid Stent: Closed-cell (Carotid Wallstent) or Open-cell (Acculink / Precise nitinol stent)",
        required: true,
      },
      {
        id: "h6",
        item: "Angioplasty Dilation Balloons",
        spec: "0.014\" Rx Angioplasty Balloon (3.5x20 mm for pre-dilation and 5.0x20 mm for post-dilation)",
        required: true,
      },
      {
        id: "h7",
        item: "Femoral Arterial Closure Device",
        spec: "6F Angio-Seal VIP or Perclose ProGlide Vascular Closure Device",
        required: true,
      },
    ],
    postOpCare: {
      drugs: [
        "Dual Antiplatelet Therapy: Aspirin 75mg + Clopidogrel 75mg OD x 3 months, continued life-long Aspirin monotherapy",
        "High-Intensity Statin: Atorvastatin 80 mg PO OD at bedtime",
        "Atropine ready at bedside (0.5-1.0 mg IV bolus) for carotid sinus baroreceptor-mediated bradycardia / asystole",
        "IV Vasopressors (Phenylephrine / Dopamine infusion) ready to manage sustained carotid sinus hemodynamic depression",
      ],
      monitoring: [
        "Continuous hemodynamic monitoring for hemodynamic depression (bradycardia and hypotension from carotid sinus baroreceptor stimulation) in HDU/ICU x 24h",
        "NIHSS examination at 1h, 4h, and 24h (monitoring speech, visual fields, facial symmetry, and motor function)",
        "Femoral puncture site and distal pedal pulses check q15m x 1h, q30m x 2h, then hourly x 4h",
      ],
      dischargeCriteria:
        "Stable hemodynamics without vasopressors or atropine for >12 hours, unchanged NIHSS score from baseline with zero new ischemic deficits, patent carotid stent with laminar flow confirmed on 24h Carotid Duplex Ultrasound (PSV <150 cm/s), puncture site healed without hematoma or pseudoaneurysm, and adherence to dual antiplatelet therapy confirmed.",
    },
  },

  {
    key: "stroke_thrombectomy",
    title: "Acute Ischemic Stroke Mechanical Thrombectomy (LVO)",
    organSystem: "Neurovascular & Head/Neck",
    modality: "XA",
    clinicalCriteria:
      "Acute ischemic stroke due to large vessel occlusion (LVO) of anterior circulation (ICA terminus, MCA M1/proximal M2) within 6 hours of symptom onset or up to 24 hours under DAWN/DEFUSE-3 clinical-imaging mismatch criteria.",
    recommendedLabs: [
      "Rapid Stat Glucose (rule out hypoglycemia mimic)",
      "Complete Blood Count (CBC: Hemoglobin, Platelet count)",
      "Coagulation Profile (PT/INR, aPTT, Thrombin Time)",
      "Serum Creatinine, BUN, eGFR",
      "Blood Type & Screen / Crossmatch",
    ],
    specialInvestigations: [
      "Non-contrast CT Head (ASPECTS score >= 6, excluding acute intracranial hemorrhage)",
      "CT Angiography of Head and Neck (identifying large vessel occlusion site, cervical access, and collateral pathways)",
      "CT Perfusion (Ischemic core volume <70 mL on rCBF <30%, penumbral volume Tmax >6s, and mismatch ratio >= 1.8 via RAPID software)",
      "Baseline National Institutes of Health Stroke Scale (NIHSS) score",
    ],
    calculatorType: "cigarroa",
    preScanAnatomyChecklist: [
      {
        id: "target_lvo_site",
        label: "Target Occlusion Site (ICA/M1/M2/Basilar)",
        options: [
          "MCA M1 Segment Occlusion (TICI 0)",
          "ICA Terminus ('T' or 'L' bifurcation occlusion)",
          "Dominant MCA M2 Division branch occlusion",
          "Basilar Artery Occlusion (posterior circulation emergency)",
        ],
        defaultSelected: "MCA M1 Segment Occlusion (TICI 0)",
      },
      {
        id: "siphon_tortuosity",
        label: "Carotid Siphon Tortuosity & Access Feasibility",
        options: [
          "Mild siphon curvature (straight access track)",
          "Severe tortuous loops / hairpin bend in petrous/cavernous segment",
          "Tandem proximal CCA/ICA ostial atherosclerotic stenosis or dissection",
        ],
        defaultSelected: "Mild siphon curvature (straight access track)",
      },
      {
        id: "collateral_status",
        label: "Collateral Circulation Status (Tan/ASITN Collateral Score)",
        options: [
          "ASITN / Tan Grade 3 (excellent pial collaterals filling 100% of occluded bed)",
          "ASITN Grade 2 (moderate collaterals filling >50%)",
          "ASITN Grade 0-1 (poor/absent collaterals with rapid core progression)",
        ],
        defaultSelected: "ASITN / Tan Grade 3 (excellent pial collaterals filling 100% of occluded bed)",
      },
      {
        id: "bifurcation_geometry",
        label: "Intracranial Bifurcation Geometry",
        options: [
          "Standard MCA bifurcation caliber 2.5 - 3.0 mm (ideal for 4x40 mm stent retriever)",
          "Tapered distal M2 branch <2.0 mm (mandating downsized stent retriever / aspiration only)",
          "Trifurcation anatomy with acute takeoff angle",
        ],
        defaultSelected: "Standard MCA bifurcation caliber 2.5 - 3.0 mm (ideal for 4x40 mm stent retriever)",
      },
    ],
    hardwareRequisition: [
      {
        id: "h1",
        item: "Balloon Guide Catheter / Sheath",
        spec: "8F / 9F Balloon Guide Catheter (FlowGate2 / Cello) or 6F 0.088\" Long Sheath (Benchmark)",
        required: true,
      },
      {
        id: "h2",
        item: "Large-Bore Aspiration Catheter",
        spec: "0.071\" - 0.074\" Large-Bore Aspiration Catheter (SOFIA Plus / React 71 / RED 72)",
        required: true,
      },
      {
        id: "h3",
        item: "Microcatheter",
        spec: "0.021\" 160cm Microcatheter (Trevo / Marksman / Velocity)",
        required: true,
      },
      {
        id: "h4",
        item: "Microguidewire",
        spec: "0.014\" 200cm Microguidewire (Synchro-14 / Traxcess-14)",
        required: true,
      },
      {
        id: "h5",
        item: "Stent-Retriever",
        spec: "Stent-Retriever: Solitaire X (4x40 mm / 6x40 mm) or Trevo NXT (4x35 mm) or Embotrap III Revascularization Device",
        required: true,
      },
      {
        id: "h6",
        item: "Aspiration Vacuum Pump System",
        spec: "Aspiration vacuum pump system (Penumbra Engine / Medtronic Dominant Aspiration System) with canisters and tubing",
        required: true,
      },
      {
        id: "h7",
        item: "Vascular Closure Device",
        spec: "8F Angio-Seal VIP or Mynx Control Vascular Closure Device",
        required: true,
      },
    ],
    postOpCare: {
      drugs: [
        "Blood pressure control: IV Labetalol or Nicardipine infusion titrated to strict blood pressure protocol (SBP <180/105 mmHg if IV tPA given, or SBP <140 mmHg if recanalized TICI 2b/3)",
        "IV Isotonic Saline (0.9% NaCl) at 75-100 mL/h; avoid hypotonic fluids and dextrose unless hypoglycemic",
        "Hold antiplatelet and anticoagulant medications for 24 hours until post-procedure CT rules out hemorrhage",
      ],
      monitoring: [
        "Comprehensive Stroke Unit / Neuro-ICU admission with continuous invasive BP and telemetry",
        "Strict blood pressure protocol surveillance and hourly NIHSS / neurological checks x 24h",
        "NPO until formal bedside dysphagia screen completed by speech and language therapist",
        "24h non-contrast CT brain to evaluate for reperfusion or hemorrhagic transformation",
      ],
      dischargeCriteria:
        "Successful intracranial revascularization documented (eTICI >= 2b), neurological stabilization on serial NIHSS assessments, 24h CT brain confirming absence of symptomatic intracerebral hemorrhage (sICH), femoral access site intact, etiology assessed (telemetry, echocardiography, carotid evaluation), and secondary prevention initiated.",
    },
  },

  {
    key: "epistaxis_sphenopalatine_embo",
    title: "Intractable Posterior Epistaxis Superselective Embolization",
    organSystem: "Neurovascular & Head/Neck",
    modality: "XA",
    clinicalCriteria:
      "Life-threatening or recurrent severe posterior epistaxis refractory to anterior and posterior nasal packing, topical vasoconstrictors, or endoscopic surgical ligation.",
    recommendedLabs: [
      "Complete Blood Count (CBC: Hemoglobin, Hematocrit, Platelet count)",
      "Coagulation Profile (PT/INR, aPTT, Platelet count)",
      "Blood Grouping & Crossmatching (2-4 Units PRBC held on stand-by)",
      "Renal Function Panel (Serum Creatinine, BUN, eGFR)",
    ],
    specialInvestigations: [
      "Diagnostic Angiography of External Carotid and Internal Carotid systems (selective IMAX, facial, and ophthalmic artery runs)",
      "Endoscopic ENT examination findings (documenting posterior bleeding source vs anterior Kiesselbach's plexus)",
      "Contrast-Enhanced CT of Sinuses/Facial bones (excluding vascular malformation, pseudoaneurysm, osseous erosion, or tumor)",
      "Baseline Cranial Nerve Examination (CN II, III, IV, V, VI, VII)",
    ],
    calculatorType: "cigarroa",
    preScanAnatomyChecklist: [
      {
        id: "imax_anatomy",
        label: "Internal Maxillary Artery (IMAX) Anatomy",
        options: [
          "Prominent pterygopalatine segment giving off sphenopalatine and descending palatine arteries",
          "Spasm or tortuosity in infratemporal fossa segment",
          "Atherosclerotic ostial stenosis of external carotid trunk",
        ],
        defaultSelected: "Prominent pterygopalatine segment giving off sphenopalatine and descending palatine arteries",
      },
      {
        id: "spa_bifurcation",
        label: "Sphenopalatine Artery Bifurcation & Mucosal Blush",
        options: [
          "Hypervascular blushing and active contrast extravasation at sphenopalatine foramen",
          "Prominent septal and lateral nasal mucosal staining without focal extravasation",
          "Bilateral mucosal hypervascularity",
        ],
        defaultSelected: "Hypervascular blushing and active contrast extravasation at sphenopalatine foramen",
      },
      {
        id: "descending_palatine",
        label: "Descending Palatine Artery Branches",
        options: [
          "Prominent descending palatine branches contributing to inferior nasal/palatal bleeding",
          "Normal caliber with minimal mucosal staining",
          "Prominent transpalatal anastomoses to contralateral side",
        ],
        defaultSelected: "Prominent descending palatine branches contributing to inferior nasal/palatal bleeding",
      },
      {
        id: "facial_artery_contrib",
        label: "Facial Artery Anastomoses",
        options: [
          "Retrograde filling of anterior nasal cavity from angular branch",
          "No significant facial artery anastomoses contributing to hemorrhage",
          "Septal branch of superior labial artery requiring adjunct coil embolization",
        ],
        defaultSelected: "No significant facial artery anastomoses contributing to hemorrhage",
      },
      {
        id: "dangerous_anastomoses",
        label: "Absence of Dangerous Anastomoses to Ophthalmic / Internal Carotid Artery",
        options: [
          "Absence of dangerous anastomoses to ophthalmic artery (ethmoidal branches) or internal carotid (Vidian/caroticotympanic branches)",
          "Anterior ethmoidal anastomosis visualized, requiring superselective microcatheterization past orbital branch",
          "Vidian artery communication identified, requiring strict distal wedge",
        ],
        defaultSelected: "Absence of dangerous anastomoses to ophthalmic artery (ethmoidal branches) or internal carotid (Vidian/caroticotympanic branches)",
      },
    ],
    hardwareRequisition: [
      {
        id: "h1",
        item: "Introducer Sheath",
        spec: "5F Femoral / 4F Radial Introducer Sheath",
        required: true,
      },
      {
        id: "h2",
        item: "Diagnostic Catheter",
        spec: "5F 100cm Diagnostic Catheter (Vertebral / Simmons 2)",
        required: true,
      },
      {
        id: "h3",
        item: "Microcatheter",
        spec: "1.7F - 2.0F 130cm/150cm Microcatheter (Progreat / Renegade)",
        required: true,
      },
      {
        id: "h4",
        item: "Microguidewire",
        spec: "0.014\" 200cm Microguidewire (Synchro-14 / Transend)",
        required: true,
      },
      {
        id: "h5",
        item: "Particulate Embolic Material",
        spec: "Embolic materials: 355-500 um PVA particles / Embosphere particles (50:50 contrast/saline suspension)",
        required: true,
      },
      {
        id: "h6",
        item: "Detachable Microcoils",
        spec: "0.014\" detachable microcoils (Target 360 / Axium 2-3 mm) for main branch sacrifice if refractory",
        required: true,
      },
      {
        id: "h7",
        item: "Hemostatic Compression Device",
        spec: "Radial compression band (TR Band) or 5F/6F Angio-Seal VIP Femoral Closure Device",
        required: true,
      },
    ],
    postOpCare: {
      drugs: [
        "Gentle analgesia: Paracetamol 1000 mg IV/PO q6h + Codeine 30 mg PO q8h PRN for ischemic facial/palatal pain (avoid NSAIDs to preserve platelet function)",
        "Prophylactic Antibiotics: Amoxicillin-Clavulanate 1.2g IV q8h or Cefazolin 1g IV q8h while nasal packing remains in place",
        "Normal Saline IV infusion at 100 mL/h until oral intake resumed",
        "Saline nasal spray starting 24 hours post-packing removal for mucosal hydration",
      ],
      monitoring: [
        "ICU/Ward admission with nasal packing left in situ x 24h, followed by gradual deflation of posterior balloon pack under ENT visualization",
        "Direct visual inspection of the posterior oropharynx and anterior nares for active bleeding every 30 minutes x 2 hours, then hourly x 6 hours",
        "Monitor for ischemic skin necrosis, alar ulceration, or cranial neuropathy (cranial nerves II, III, IV, V, VI)",
        "Puncture site observation and vitals recording q1h x 4h",
      ],
      dischargeCriteria:
        "Complete cessation of active epistaxis for >24 hours following posterior balloon pack deflation and removal, stable serial hemoglobin without drop, absence of visual or neurological deficits, palate mucosa healthy without ischemic ulceration, and stable blood pressure.",
    },
  },

  {
    key: "head_neck_paraganglioma_embo",
    title: "Pre-Operative Embolization of Head & Neck Paragangliomas (Glomus Tumors)",
    organSystem: "Neurovascular & Head/Neck",
    modality: "XA",
    clinicalCriteria:
      "Hypervascular glomus caroticum (carotid body tumor), glomus jugulare, or juvenile nasopharyngeal angiofibroma (JNA) scheduled for surgical resection within 24-48 hours.",
    recommendedLabs: [
      "Complete Blood Count (CBC: Hemoglobin, Platelet count, TLC)",
      "Coagulation Profile (PT/INR, aPTT)",
      "Renal Function Panel (Serum Creatinine, BUN, eGFR)",
      "24-hour Urinary Catecholamines and Metanephrines (to exclude secretor functional paraganglioma / pheochromocytoma)",
      "Blood Grouping & Crossmatch (4 Units PRBC crossmatched for scheduled surgery)",
    ],
    specialInvestigations: [
      "Contrast-Enhanced MRI and MRA of Neck and Skull Base (Shamblin classification for carotid body tumors, evaluating 'salt-and-pepper' matrix)",
      "Diagnostic 4-Vessel Cerebral Angiography (including balloon occlusion test of ICA if carotid sacrifice considered)",
      "Pure Tone Audiometry and speech discrimination testing (for glomus jugulare / tympanicum)",
      "Baseline Cranial Nerve Evaluation (specifically CN VII, IX, X, XI, XII)",
    ],
    calculatorType: "cigarroa",
    preScanAnatomyChecklist: [
      {
        id: "apa_branches",
        label: "Ascending Pharyngeal Artery Pharyngeal & Neuromeningeal Branches",
        options: [
          "Hypertrophied pharyngeal and neuromeningeal branches directly feeding tumor bed",
          "Pharyngeal trunk supplying inferior tumor pole without neuromeningeal contribution",
          "Severe tortuosity requiring superselective 1.5F microcatheterization",
        ],
        defaultSelected: "Hypertrophied pharyngeal and neuromeningeal branches directly feeding tumor bed",
      },
      {
        id: "occipital_mastoid",
        label: "Occipital Artery Mastoid Branch",
        options: [
          "Prominent mastoid branch entering stylomastoid foramen feeding posterior tumor compartment",
          "No occipital arterial feeder identified",
          "Hypertrophied muscular collateral branches requiring flow-directed microcatheter",
        ],
        defaultSelected: "Prominent mastoid branch entering stylomastoid foramen feeding posterior tumor compartment",
      },
      {
        id: "maxillary_branches",
        label: "Maxillary Artery Posterior Superior Branches",
        options: [
          "Maxillary artery posterior superior branches supplying superior tumor pole (JNA / high glomus)",
          "Normal maxillary artery without tumor neovascularity",
          "Middle meningeal artery petrosal branch contribution",
        ],
        defaultSelected: "Maxillary artery posterior superior branches supplying superior tumor pole (JNA / high glomus)",
      },
      {
        id: "ica_encasement",
        label: "Internal Carotid Artery Encasement/Displacement",
        options: [
          "Shamblin I / II: Carotid bifurcation splayed (lyre sign) without circumferential (>180 deg) ICA encasement",
          "Shamblin III: 360-degree circumferential ICA encasement requiring surgical vascular bypass",
          "Intraluminal tumor invasion into ICA or jugular bulb",
        ],
        defaultSelected: "Shamblin I / II: Carotid bifurcation splayed (lyre sign) without circumferential (>180 deg) ICA encasement",
      },
      {
        id: "cn_blood_supply",
        label: "Cranial Nerve Blood Supply Verification (Safe Target Check)",
        options: [
          "Cranial nerve blood supply verification: microcatheter wedged distal to vasa nervorum of CN IX-XII (safe target)",
          "Dangerous neuromeningeal collateral visualized, necessitating particulate embolization >300 um or coil occlusion",
          "Cranial nerve arcade opacified on microcatheter angiogram (contraindication to liquid embolic)",
        ],
        defaultSelected: "Cranial nerve blood supply verification: microcatheter wedged distal to vasa nervorum of CN IX-XII (safe target)",
      },
    ],
    hardwareRequisition: [
      {
        id: "h1",
        item: "Guiding Catheter",
        spec: "6F 90cm Guiding Catheter / Long Sheath (Destination / Envoy / Benchmark)",
        required: true,
      },
      {
        id: "h2",
        item: "DMSO-Compatible Microcatheter",
        spec: "1.7F - 2.0F Dimethyl Sulfoxide (DMSO) compatible Microcatheter (Echelon-10 / Marathon / Apollo)",
        required: true,
      },
      {
        id: "h3",
        item: "Microguidewire",
        spec: "0.014\" 200cm Microguidewire (Synchro-14 / Asahi Chikai)",
        required: true,
      },
      {
        id: "h4",
        item: "Liquid Embolic Agent",
        spec: "Liquid embolic agent: Onyx-18 / Onyx-34 / Squid non-adhesive liquid embolic agent with DMSO vials",
        required: true,
      },
      {
        id: "h5",
        item: "Calibrated Spherical Particles (Alternative)",
        spec: "300-500 um calibrated spherical particles (Embosphere / Embozene microspheres) for branch pruning",
        required: false,
      },
      {
        id: "h6",
        item: "Microcoils",
        spec: "0.014\" Detachable Microcoils (Target 360 / Axium) for feeder branch sacrifice",
        required: false,
      },
      {
        id: "h7",
        item: "Vascular Closure Device",
        spec: "6F Angio-Seal VIP or Perclose ProGlide Vascular Closure Device",
        required: true,
      },
    ],
    postOpCare: {
      drugs: [
        "Dexamethasone IV to reduce post-embolization tumor edema (8 mg IV stat, then 4 mg IV q6h x 48h)",
        "Continuous blood pressure monitoring with alpha-blocker coverage (Phenoxybenzamine / Phentolamine) or Labetalol if catecholamine-secreting tumor",
        "Analgesia: Paracetamol 1000 mg IV q6h + Tramadol 50 mg IV q8h for post-embolization deep mastoid/cervical pain",
        "IV Hydration: Normal Saline at 125 mL/h to maintain euvolemia",
      ],
      monitoring: [
        "Continuous blood pressure monitoring and telemetry in HDU/Neuro-ICU",
        "Frequent airway surveillance, neck circumference checks, and respiratory quality assessment (intubation kit at bedside)",
        "Serial Cranial Nerve monitoring (CN IX, X, XI, XII for hoarseness, dysphagia, tongue deviation, or shoulder shrug weakness)",
        "Femoral access site checks and distal pedal pulses q15m x 1h, q30m x 2h, then q1h x 4h",
      ],
      dischargeCriteria:
        "Stable airway without stridor or neck hematoma expansion, blood pressure stabilized on normotensive parameters, cranial nerves intact at baseline, tumor devascularization confirmed (>80% blush reduction on completion angiogram), and patient scheduled for surgical resection within 24-48 hours.",
    },
  },
];
