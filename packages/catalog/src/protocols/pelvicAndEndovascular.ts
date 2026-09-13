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

export const PELVIC_AND_ENDOVASCULAR_PROTOCOLS: IRClinicalProtocol[] = [
  // =========================================================================
  // 1. LOWER GASTROINTESTINAL BLEEDING EMBOLIZATION
  // =========================================================================
  {
    key: "lower_gi_bleeding_embo",
    title: "Superselective Transcatheter Embolization for Acute Lower Gastrointestinal Bleeding",
    organSystem: "Gastrointestinal & Mesenteric",
    modality: "XA",
    clinicalCriteria:
      "Massive or persistent lower gastrointestinal hemorrhage (diverticular, angiodysplasia, post-polypectomy, ischemic) with active extravasation demonstrated on CT angiography or colonoscopy, causing hemodynamic instability or transfusion requirement >=2 units PRBC.",
    recommendedLabs: [
      "Complete Blood Count (Hemoglobin, Hematocrit, Platelet Count)",
      "Coagulation Profile (PT, INR, aPTT, Fibrinogen)",
      "Renal Function Tests (Serum Creatinine, Blood Urea Nitrogen, Serum Electrolytes)",
      "Blood Grouping & Crossmatch (Reserve 4-6 Units PRBC, 2-4 Units FFP)",
    ],
    specialInvestigations: [
      "Multiphase CT Angiography of Abdomen and Pelvis (active contrast extravasation into bowel lumen >=0.3 mL/min)",
      "Diagnostic Colonoscopy Report (endoscopic clipping location or active bleeding site if available)",
      "Serial Hemoglobin & Bedside Hemodynamic Resuscitation Assessment",
    ],
    calculatorType: "cigarroa",
    preScanAnatomyChecklist: [
      {
        id: "bleeding_vascular_territory",
        label: "Bleeding Vascular Territory",
        options: [
          "Superior Mesenteric Artery (SMA - Ileocolic / Right Colic / Middle Colic)",
          "Inferior Mesenteric Artery (IMA - Left Colic / Sigmoidal / Superior Rectal)",
          "Internal Iliac Artery (Middle/Inferior Rectal Anastomosis)",
        ],
        defaultSelected: "Superior Mesenteric Artery (SMA - Ileocolic / Right Colic / Middle Colic)",
      },
      {
        id: "vasa_recta_target",
        label: "Terminal Vasa Recta Identification",
        options: [
          "Single Distal Vasa Recta Identified (<1 mm target)",
          "Multiple Vasa Recta Blushes",
          "Pseudoaneurysm at Submucosal Arc",
          "Extravasation without discrete single feeder",
        ],
        defaultSelected: "Single Distal Vasa Recta Identified (<1 mm target)",
      },
      {
        id: "marginal_artery_drummond",
        label: "Marginal Artery of Drummond & Collaterals",
        options: [
          "Patent Continuous Marginal Artery (Protective Collaterals Intact)",
          "Hypoplastic / Discontinuous Marginal Arcade (High Ischemia Risk)",
          "Prominent Arc of Riolan Meandering Mesenteric",
        ],
        defaultSelected: "Patent Continuous Marginal Artery (Protective Collaterals Intact)",
      },
      {
        id: "prior_bowel_resection",
        label: "Presence of Prior Bowel Resection",
        options: [
          "Virgin Abdomen (No Prior Bowel Surgery)",
          "Prior Right Hemicolectomy (Altered SMA Branching)",
          "Prior Anterior Resection / Low Anterior Resection",
          "Prior Hartmann's Procedure",
        ],
        defaultSelected: "Virgin Abdomen (No Prior Bowel Surgery)",
      },
      {
        id: "access_route",
        label: "Arterial Access Site",
        options: [
          "Right Common Femoral Artery (Standard 5F)",
          "Left Radial Artery (4F / 5F R-TRA Approach)",
          "Left Common Femoral Artery",
        ],
        defaultSelected: "Right Common Femoral Artery (Standard 5F)",
      },
    ],
    hardwareRequisition: [
      {
        id: "h1",
        item: "Introducer Sheath",
        spec: "5F Femoral / 4F Radial Introducer Sheath (11cm Cordis or Glidesheath Slender)",
        required: true,
      },
      {
        id: "h2",
        item: "Primary Diagnostic Catheter",
        spec: "5F Celiac/SMA Catheter (Cobra C2 / Shepherd Hook 100cm)",
        required: true,
      },
      {
        id: "h3",
        item: "Superselective Microcatheter",
        spec: "1.7F - 2.0F Microcatheter (Progreat / Renegade HI-FLO 130-150cm)",
        required: true,
      },
      {
        id: "h4",
        item: "Steerable Microguidewire",
        spec: "0.014\" Synchro / Transend Microguidewire (200cm Platinum Tip)",
        required: true,
      },
      {
        id: "h5",
        item: "Detachable Microcoils",
        spec: "0.014\" Detachable Platinum Microcoils (1.5mm - 4mm Target / Concerto)",
        required: true,
      },
      {
        id: "h6",
        item: "Calibrated Microspheres",
        spec: "300-500 um calibrated Embosphere microspheres (diluted 1:1 with contrast)",
        required: false,
      },
      {
        id: "h7",
        item: "Temporary Gelatin Sponge",
        spec: "Gelfoam torpedoes hand-cut into 1mm pledgets for slurry embolization",
        required: true,
      },
      {
        id: "h8",
        item: "Vascular Closure Device",
        spec: "6F Angio-Seal VIP / Perclose ProStyle Vascular Closure Device",
        required: true,
      },
    ],
    postOpCare: {
      drugs: [
        "IV Proton Pump Inhibitor (Pantoprazole 40 mg IV BD) for gastroprotection.",
        "Broad-spectrum IV Antibiotics: IV Ceftriaxone 1g q12h + Metronidazole 500mg q8h for 48 hours to prevent ischemic bacterial translocation.",
        "Aggressive crystalloid fluid resuscitation titrated to maintain MAP >=65 mmHg and urine output >0.5 mL/kg/h.",
        "Hold all NSAIDs, antiplatelets, and anticoagulants until complete hemostasis confirmed for >=48 hours.",
        "Analgesia: IV Paracetamol 1g q6h PRN; avoid narcotics if possible to allow clinical assessment of bowel viability.",
      ],
      monitoring: [
        "Continuous ward telemetry, serial vital signs (HR, BP, SpO2) q1h x 6h, then q4h.",
        "Strict abdominal examination q4h for signs of transmural bowel ischemia (focal rebound tenderness, involuntary guarding, rigidity, worsening distension).",
        "Monitor stool output for recurrent hematochezia, melena, or transition to normal formed stool; notify IR/Surg immediately if recurrent red blood per rectum.",
        "Serial Hemoglobin / Hematocrit checks q6h for the first 24 hours.",
        "Puncture site surveillance (groin / wrist) for hematoma, pseudoaneurysm, or active bleeding.",
      ],
      dischargeCriteria:
        "Ward monitoring for recurrent hematochezia or signs of bowel ischemia (severe rebound abdominal pain, fever, leukocytosis), NPO x 12h with gradual diet advance, hemodynamically stable with stable hemoglobin >=8.0 g/dL without transfusion for 48 hours.",
    },
  },

  // =========================================================================
  // 2. SPLENIC ARTERY EMBOLIZATION
  // =========================================================================
  {
    key: "splenic_artery_embo",
    title: "Splenic Artery Embolization (SAE - Proximal vs Distal Superselective)",
    organSystem: "Gastrointestinal & Mesenteric",
    modality: "XA",
    clinicalCriteria:
      "High-grade blunt splenic trauma (AAST Grade III-V with pseudoaneurysm, active extravasation, or large hemoperitoneum) in hemodynamically stable/stabilized patient, or severe hypersplenism/portal hypertension.",
    recommendedLabs: [
      "Complete Blood Count (Hb, Hematocrit, Platelet Count, White Blood Cell Count)",
      "PT/INR (Coagulation Profile including aPTT, Fibrinogen)",
      "Serum Creatinine (Renal Function Panel with BUN and Electrolytes)",
      "Blood Type & Crossmatch (Reserve 4 Units PRBC, 2 Units FFP)",
    ],
    specialInvestigations: [
      "Contrast-Enhanced Abdominal Trauma CT (arterial and portal venous phases)",
      "Contrast blush identification (active arterial extravasation vs contained pseudoaneurysm)",
      "AAST Injury Grade score (Grade III-V classification)",
    ],
    calculatorType: "cigarroa",
    preScanAnatomyChecklist: [
      {
        id: "proximal_splenic_tortuosity",
        label: "Proximal main splenic artery tortuosity",
        options: [
          "Mild-Moderate Tortuosity (Straight landing zone >=15 mm distal to DPA)",
          "Severe Corkscrew Tortuosity (Requires stiff support / Amplatz wire)",
          "Ectatic / Calcified Splenic Trunk",
        ],
        defaultSelected: "Mild-Moderate Tortuosity (Straight landing zone >=15 mm distal to DPA)",
      },
      {
        id: "dorsal_pancreatic_origin",
        label: "Dorsal pancreatic artery origin",
        options: [
          "DPA arises from proximal splenic artery (Deploy plug distal to DPA origin)",
          "DPA arises directly from Celiac Axis",
          "DPA arises from Hepatic Artery",
          "Identified and preserved to prevent pancreatic ischemia",
        ],
        defaultSelected: "DPA arises from proximal splenic artery (Deploy plug distal to DPA origin)",
      },
      {
        id: "pancreatica_magna",
        label: "Pancreatica magna artery",
        options: [
          "Identified in mid-splenic artery (Preserved distal to proximal occlusion target)",
          "Arises early from proximal trunk",
          "Multiple small pancreatic branches identified",
        ],
        defaultSelected: "Identified in mid-splenic artery (Preserved distal to proximal occlusion target)",
      },
      {
        id: "short_gastric_collaterals",
        label: "Short gastric artery collaterals (to maintain splenic viability after proximal coil embolization)",
        options: [
          "Intact short gastric and gastroepiploic collaterals visualized",
          "Attenuated collateral network (relative ischemia risk)",
          "Prior gastrectomy (collateral pathways interrupted - relative contraindication)",
        ],
        defaultSelected: "Intact short gastric and gastroepiploic collaterals visualized",
      },
      {
        id: "multiple_pseudoaneurysms",
        label: "Presence of multiple intrasplenic pseudoaneurysms",
        options: [
          "Solitary Pseudoaneurysm (<10 mm)",
          "Multiple Intraparenchymal Pseudoaneurysms",
          "Active Free Contrast Extravasation into Peritoneal Cavity",
          "Arteriovenous Fistula / Parenchymal Laceration",
        ],
        defaultSelected: "Solitary Pseudoaneurysm (<10 mm)",
      },
    ],
    hardwareRequisition: [
      {
        id: "h1",
        item: "Femoral Introducer Sheath",
        spec: "5F / 6F Femoral Sheath (6F 45cm Ansel / Destination or 5F 11cm Cordis)",
        required: true,
      },
      {
        id: "h2",
        item: "Celiac Catheter",
        spec: "5F Celiac Catheter (Cobra / Sidewinder SIM2 100cm)",
        required: true,
      },
      {
        id: "h3",
        item: "High-Flow Microcatheter",
        spec: "2.7F High-Flow Microcatheter (Terumo Progreat / Boston Scientific Renegade 130cm)",
        required: true,
      },
      {
        id: "h4",
        item: "Exchange Guidewire",
        spec: "0.035\" 260cm Glidewire (Terumo Radifocus Hydrophilic Stiff Wire)",
        required: true,
      },
      {
        id: "h5",
        item: "Large-Bore Vascular Plugs",
        spec: "Large-bore Embolization Plugs (Amplatzer Vascular Plug II 8-14 mm) for main trunk",
        required: true,
      },
      {
        id: "h6",
        item: "Fibered Coils",
        spec: "0.018\" - 0.035\" Fibered Coils (Nester / Tornado / Interlock) for superselective branch embolization",
        required: true,
      },
      {
        id: "h7",
        item: "Detachable Superselective Microcoils",
        spec: "0.014\" Target / Concerto Detachable Coils for distal pseudoaneurysm packing",
        required: false,
      },
      {
        id: "h8",
        item: "Vascular Closure Device",
        spec: "6F Angio-Seal VIP / Perclose ProGlide Vascular Closure Device",
        required: true,
      },
    ],
    postOpCare: {
      drugs: [
        "Pneumococcal / Meningococcal / H. influenzae post-splenectomy prophylactic vaccination if >50% splenic parenchyma devascularized (scheduled at POD 14).",
        "Pain management with patient-controlled analgesia (IV PCA Morphine/Fentanyl) or IV Tramadol 50mg q8h + Paracetamol 1g q6h.",
        "Broad-spectrum IV Antibiotics: Cefazolin 1g IV q8h for 24 hours.",
        "Prophylactic low-dose LMWH (Enoxaparin 40 mg s/c OD) initiated 24 hours post-procedure after stable hemoglobin confirmed.",
        "Antiemetics: IV Ondansetron 4-8 mg q8h PRN for post-embolization syndrome nausea.",
      ],
      monitoring: [
        "Strict bed rest for 24h.",
        "Serial hemoglobin/hematocrit monitoring q4h x 24h, then q8h for subsequent 24 hours.",
        "Serial clinical abdominal examination for left upper quadrant tenderness, guarding, or delayed rupture.",
        "Surveillance for Post-Embolization Syndrome (PES): fever, leukocytosis, left flank pain, and left pleural effusion.",
        "Repeat abdominal duplex ultrasound or contrast CT at 48-72 hours if unexplained drop in hemoglobin or worsening pain.",
      ],
      dischargeCriteria:
        "Strict bed rest completed x 24h, stable hemoglobin without transfusion for 48h, pain controlled on oral analgesics, afebrile, tolerating oral diet, post-splenectomy prophylactic vaccination plan confirmed for POD 14.",
    },
  },

  // =========================================================================
  // 3. PERCUTANEOUS RADIOLOGIC GASTROSTOMY (PRG / RIG)
  // =========================================================================
  {
    key: "percutaneous_gastrostomy_prg",
    title: "Percutaneous Radiologic Gastrostomy (PRG / RIG) with Gastropexy",
    organSystem: "Gastrointestinal & Mesenteric",
    modality: "XA",
    clinicalCriteria:
      "Inability to swallow / chronic neurogenic dysphagia (ALS, stroke, head and neck malignancy, motor neuron disease) requiring long-term enteral nutritional support (>4 weeks) where endoscopic PEG is contraindicated or impossible.",
    recommendedLabs: [
      "CBC (Complete Blood Count: Platelets >50,000, Hemoglobin, Absolute Neutrophil Count)",
      "PT/INR (Coagulation Profile: INR <1.5, aPTT)",
      "Serum Creatinine and Blood Urea Nitrogen",
      "Nutritional parameters (Serum Albumin, Prealbumin, Total Protein, Electrolytes)",
    ],
    specialInvestigations: [
      "Upper GI fluoroscopy / CT Abdomen (contrast swallow demonstrating esophageal anatomy and obstruction level)",
      "Nasogastric tube passage check (verify fluoroscopic or bedside transoral/transnasal tube transit into stomach)",
      "Bedside ultrasound of upper abdomen to map subcostal left hepatic lobe margin",
    ],
    calculatorType: null,
    preScanAnatomyChecklist: [
      {
        id: "gastric_insufflation_extent",
        label: "Gastric insufflation extent",
        options: [
          "Adequate Distension (Clear anterior gastric window against abdominal wall)",
          "Poor Distension / Rapid Decompression (Obstruction / Hiatal Hernia)",
          "Marked Gas in Duodenum & Small Bowel",
        ],
        defaultSelected: "Adequate Distension (Clear anterior gastric window against abdominal wall)",
      },
      {
        id: "transverse_colon_position",
        label: "Transverse colon position relative to anterior gastric wall",
        options: [
          "Inferior to Gastric Body (Safe Infracolic/Subgastric Window)",
          "Overlying Lower Gastric Body (Risk of Colocutaneous Fistula - Reposition needed)",
          "Interposed between Abdominal Wall and Stomach",
        ],
        defaultSelected: "Inferior to Gastric Body (Safe Infracolic/Subgastric Window)",
      },
      {
        id: "left_lobe_liver_margin",
        label: "Left lobe of liver margin",
        options: [
          "Well Clear of Proposed Gastrostomy Window (>3 cm confirmed on US/Fluro)",
          "Crosses Midline Over Anterior Gastric Body (Requires lateral/inferior adjustment)",
          "Cirrhotic / Shrunken Liver (Favorable window)",
        ],
        defaultSelected: "Well Clear of Proposed Gastrostomy Window (>3 cm confirmed on US/Fluro)",
      },
      {
        id: "puncture_target_site",
        label: "Puncture target site on mid anterior gastric body",
        options: [
          "Mid anterior gastric body (Between Greater & Lesser Curvatures)",
          "Lower Body / Pre-Pyloric Antrum",
          "Upper Body / Fundic Region (Avoid)",
        ],
        defaultSelected: "Mid anterior gastric body (Between Greater & Lesser Curvatures)",
      },
      {
        id: "pexy_anchor_configuration",
        label: "Gastropexy Anchor Configuration",
        options: [
          "3-Point Triangular T-Fastener Configuration (Cook / Avanos)",
          "4-Point Square T-Fastener Configuration",
          "2-Point Linear Configuration",
        ],
        defaultSelected: "3-Point Triangular T-Fastener Configuration (Cook / Avanos)",
      },
    ],
    hardwareRequisition: [
      {
        id: "h1",
        item: "Nasogastric Tube Set",
        spec: "Nasogastric tube with 60 mL syringe for gastric air insufflation",
        required: true,
      },
      {
        id: "h2",
        item: "Gastropexy T-Fastener Anchors",
        spec: "18G Gastropexy T-fastener anchor suture needles (Cook / Avanos 3-point or 4-point pexy)",
        required: true,
      },
      {
        id: "h3",
        item: "Access Needle",
        spec: "18G Trocar needle (7cm echogenic diamond-tip)",
        required: true,
      },
      {
        id: "h4",
        item: "Super-Stiff Guidewire",
        spec: "0.035\" Amplatz Super-Stiff Guidewire (145cm with 3mm J-tip)",
        required: true,
      },
      {
        id: "h5",
        item: "Serial Fascial Dilators",
        spec: "Serial dilators (8F to 16F) with hydrophilic coating",
        required: true,
      },
      {
        id: "h6",
        item: "Peel-Away Introducer Sheath",
        spec: "16F Tearaway Sheath with matching vessel dilator",
        required: true,
      },
      {
        id: "h7",
        item: "Gastrostomy Retention Catheter",
        spec: "14F - 16F Balloon-Retention Gastrostomy Catheter (Mic-Key / Avanos / Cook with 5 mL balloon)",
        required: true,
      },
      {
        id: "h8",
        item: "Water-Soluble Contrast Medium",
        spec: "Water-soluble iodinated contrast (Omnipaque 300 / Gastrografin 20 mL)",
        required: true,
      },
    ],
    postOpCare: {
      drugs: [
        "Single prophylactic antibiotic dose: Cefazolin 1g IV 30 minutes prior to procedure (or Clindamycin 600mg IV in penicillin allergy).",
        "Analgesia: Paracetamol 1g IV/oral elixir q6h PRN + Tramadol 50mg elixir PRN for peristomal puncture soreness.",
        "Proton Pump Inhibitor: Omeprazole 20mg suspension via gastrostomy tube once daily after feedings established.",
        "Sterile water flushes (30 mL) before and after all enteral medications and feedings.",
      ],
      monitoring: [
        "Fasting for 4 hours.",
        "Water test injection under fluoroscopy to confirm intraluminal gastric position and absence of extragastric leakage at 4 hours.",
        "Start slow tube feeding at 6 hours post-procedure with dilute enteral formula at 20-30 mL/h, titrating to goal over 24-48 hours.",
        "Inspect T-fasteners daily for tension, erythema, peristomal leakage, or pressure necrosis.",
        "Cut retention suture at 10-14 days post-op once mature tract fibrous seal is formed.",
      ],
      dischargeCriteria:
        "Fasting for 4 hours completed, water test injection under fluoroscopy confirms intraluminal gastric position without extragastric leakage, slow tube feeding established at 6 hours post-procedure and tolerated at goal rate without nausea or distension, T-fasteners intact, caregiver educated on tube care and suture release at 10-14 days.",
    },
  },

  // =========================================================================
  // 4. POSTPARTUM HEMORRHAGE (PPH) UTERINE ARTERY EMBOLIZATION
  // =========================================================================
  {
    key: "pph_uterine_embo",
    title: "Emergency Transcatheter Arterial Embolization for Postpartum Hemorrhage (PPH)",
    organSystem: "Pelvic & Genitourinary",
    modality: "XA",
    clinicalCriteria:
      "Severe, life-threatening postpartum hemorrhage (>1000 mL bleeding post-vaginal delivery or >1500 mL post-cesarean) unresponsive to uterotonic agents and bimanual compression, preserving fertility and avoiding emergency peripartum hysterectomy.",
    recommendedLabs: [
      "Urgent CBC (Hemoglobin, Hematocrit, Platelets)",
      "PT/INR, aPTT, Thrombin Time",
      "Fibrinogen (Critical trigger: <200 mg/dL prompts immediate cryoprecipitate replacement)",
      "Arterial Blood Gas (Lactate, Base Deficit, Arterial pH)",
      "Crossmatch for 4-6 units PRBC and 4 units FFP (plus 1 pool cryoprecipitate and 1 unit apheresis platelets reserved)",
    ],
    specialInvestigations: [
      "Ultrasound Pelvis (retained placental products, uterine inversion, broad ligament hematoma)",
      "Pelvic Angiography (bilateral internal iliac and selective uterine runs)",
    ],
    calculatorType: null,
    preScanAnatomyChecklist: [
      {
        id: "bilateral_uterine_arteries",
        label: "Bilateral Uterine Arteries (hypertrophied, corkscrew tortuosity)",
        options: [
          "Bilateral Uterine Arteries (hypertrophied, corkscrew tortuosity)",
          "Unilateral Dominant Uterine Artery with Active Extravasation",
          "Marked Arterial Vasospasm secondary to Hypovolemia/Uterotonics",
        ],
        defaultSelected: "Bilateral Uterine Arteries (hypertrophied, corkscrew tortuosity)",
      },
      {
        id: "anterior_internal_iliac",
        label: "Anterior division of Internal Iliac Artery",
        options: [
          "Clear bifurcation and accessible anterior division",
          "Severe spasm of internal iliac trunk",
          "Vessel laceration / surgical ligation suture present",
        ],
        defaultSelected: "Clear bifurcation and accessible anterior division",
      },
      {
        id: "ovarian_artery_collaterals",
        label: "Ovarian artery collaterals (especially if bleeding persists after uterine artery embolization)",
        options: [
          "Prominent ovarian collaterals supplying uterine fundus identified",
          "No significant ovarian collateral flow on aortogram",
          "Severe fundal blush supplied by bilateral ovarian arteries",
        ],
        defaultSelected: "Prominent ovarian collaterals supplying uterine fundus identified",
      },
      {
        id: "active_extravasation_pseudoaneurysm",
        label: "Active extravasation or pseudoaneurysm",
        options: [
          "Active contrast extravasation into uterine cavity",
          "Uterine artery pseudoaneurysm / laceration",
          "Diffuse puerperal uterine atony (hypervascular blush without focal extravasation)",
          "Vascular blushes in vaginal / cervical branches",
        ],
        defaultSelected: "Active contrast extravasation into uterine cavity",
      },
      {
        id: "arterial_access_site",
        label: "Vascular Access Strategy",
        options: [
          "5F Bilateral Femoral or Left Brachial/Radial access",
          "5F Right Common Femoral Access (Standard)",
          "Left Radial Artery Access (5F Slender)",
        ],
        defaultSelected: "5F Bilateral Femoral or Left Brachial/Radial access",
      },
    ],
    hardwareRequisition: [
      {
        id: "h1",
        item: "Vascular Introducer Sheaths",
        spec: "5F Bilateral Femoral or Left Brachial/Radial access (11cm Cordis / Terumo)",
        required: true,
      },
      {
        id: "h2",
        item: "Uterine Diagnostic Catheter",
        spec: "5F Roberts Uterine Catheter (RUC) / Cobra C2 100cm",
        required: true,
      },
      {
        id: "h3",
        item: "High-Flow Microcatheter",
        spec: "2.7F High-Flow Microcatheter (Terumo Progreat / Boston Scientific Renegade HI-FLO 130cm)",
        required: true,
      },
      {
        id: "h4",
        item: "Steerable Microguidewire",
        spec: "0.014\" Guidewire (Synchro-14 / Transend-14 Hydrophilic 200cm)",
        required: true,
      },
      {
        id: "h5",
        item: "Temporary Gelatin Sponge Embolic",
        spec: "Absorbable gelatin sponge (Gelfoam) slurry (1-2 mm pledgets) for temporary hemostasis to allow uterine recanalization and future pregnancy",
        required: true,
      },
      {
        id: "h6",
        item: "Pushable Microcoils",
        spec: "0.018\" pushable microcoils if focal arterial laceration present (Interlock / Tornado 3-6 mm)",
        required: false,
      },
      {
        id: "h7",
        item: "Three-way Stopcock & Syringes",
        spec: "1 mL and 3 mL Luer-lock syringes with high-pressure three-way stopcock for slurry injection",
        required: true,
      },
      {
        id: "h8",
        item: "Femoral Arterial Closure Device",
        spec: "6F Angio-Seal VIP / Perclose ProStyle Vascular Closure Device",
        required: true,
      },
    ],
    postOpCare: {
      drugs: [
        "Prophylactic broad-spectrum IV antibiotics (Ampicillin-Sulbactam 3g IV q6h or Piperacillin-Tazobactam 4.5g IV q8h) for 48 hours for puerperal endometritis prevention.",
        "Oxytocin / carboprost maintenance: continuous IV Oxytocin infusion (20-40 IU in 1L Ringer's Lactate at 125 mL/h) x 12-24 hours.",
        "Coagulopathy correction: transfuse PRBC, FFP, and cryoprecipitate guided by TEG to maintain Fibrinogen >200 mg/dL and Platelets >50,000.",
        "Analgesia: IV Paracetamol 1g q6h + IV Fentanyl 25-50 mcg PRN for ischemic uterine cramping.",
        "Thromboprophylaxis: LMWH Enoxaparin 40 mg s/c OD resumed 12-24 hours after hemostasis confirmed.",
      ],
      monitoring: [
        "ICU admission with continuous hemodynamic, cardiac, and arterial line monitoring.",
        "Continuous uterine tone and vaginal lochia monitoring (fundal height checks q30m x 4h, then q1h x 8h).",
        "Bladder catheterization with hourly urine output (>30-50 mL/h).",
        "Serial hemoglobin and hematocrit checks q4h for the first 24 hours.",
        "Femoral puncture site inspection for hematoma, pseudoaneurysm, or active bleeding.",
      ],
      dischargeCriteria:
        "ICU admission completed with continuous uterine tone and vaginal lochia monitoring, complete hemostasis with normal physiological lochial flow, firm contracted uterus, stable hemoglobin >=8.5 g/dL without transfusion for 48h, afebrile, normal urine output, ambulating comfortably.",
    },
  },

  // =========================================================================
  // 5. PERCUTANEOUS NEPHROSTOMY (PCN) & ANTEGRADE URETERAL STENTING
  // =========================================================================
  {
    key: "pcn_ureteral_stenting",
    title: "Percutaneous Nephrostomy (PCN) & Antegrade Ureteral Stenting",
    organSystem: "Pelvic & Genitourinary",
    modality: "XA",
    clinicalCriteria:
      "Obstructive uropathy with hydronephrosis complicated by urosepsis, pyonephrosis, acute renal failure, or non-healing urinary fistula failing retrograde cystoscopic stenting.",
    recommendedLabs: [
      "Serum Creatinine and Blood Urea Nitrogen (BUN)",
      "Electrolytes (Serum Sodium, Potassium, Bicarbonate, Chloride)",
      "Complete Blood Count (Leukocytosis with left shift, Platelets, Hemoglobin)",
      "PT/INR (Coagulation Profile: INR <1.5, aPTT)",
      "Urine Routine and Culture (Gram stain, pyuria assessment, bacterial/fungal culture with sensitivities)",
    ],
    specialInvestigations: [
      "Renal Ultrasound (Grade 1-4 hydronephrosis, renal cortical thickness)",
      "CT Urogram or Non-contrast CT KUB (obstructing calculus, retrorenal colon position, malignant stricture level)",
      "Bedside sonographic puncture path planning along Brodel's avascular line",
    ],
    calculatorType: null,
    preScanAnatomyChecklist: [
      {
        id: "brodel_avascular_line",
        label: "Lower pole posterior calyx access path (along Brodel's avascular line)",
        options: [
          "Posterior Lower Pole Calyx (along Brodel's avascular line - optimal trajectory)",
          "Posterior Mid-Pole Calyx",
          "Upper Pole Intercostal Approach (Caution for pleural space)",
        ],
        defaultSelected: "Posterior Lower Pole Calyx (along Brodel's avascular line - optimal trajectory)",
      },
      {
        id: "retrorenal_colon_position",
        label: "Retrorenal colon position",
        options: [
          "Anterolateral colon position (Clear retroperitoneal acoustic window)",
          "Retrorenal colon present on CT (Requires steep oblique or anterior-sparing path)",
          "No colon interference identified",
        ],
        defaultSelected: "Anterolateral colon position (Clear retroperitoneal acoustic window)",
      },
      {
        id: "pleural_reflection_level",
        label: "Pleural reflection level on 11th/12th rib",
        options: [
          "Subcostal below 12th rib (Safe from pleural puncture)",
          "Intercostal 11th-12th space (Requires mid-expiration puncture, pleural caution)",
          "10th-11th space (High pneumothorax risk)",
        ],
        defaultSelected: "Subcostal below 12th rib (Safe from pleural puncture)",
      },
      {
        id: "hydronephrosis_caliceal_dilation",
        label: "Hydronephrosis caliceal dilation degree",
        options: [
          "Marked / Severe Hydronephrosis (Grade 3-4, large caliceal target)",
          "Moderate Hydronephrosis (Grade 2)",
          "Minimal / Non-dilated System (Grade 1 - Challenging puncture)",
        ],
        defaultSelected: "Marked / Severe Hydronephrosis (Grade 3-4, large caliceal target)",
      },
      {
        id: "ureteral_obstruction_site",
        label: "Ureteral Obstruction Level",
        options: [
          "Distal Ureter / Vesicoureteric Junction (VUJ)",
          "Mid-Ureter (Pelvic brim mass/stone)",
          "Pelviureteric Junction (PUJ) Stricture",
        ],
        defaultSelected: "Distal Ureter / Vesicoureteric Junction (VUJ)",
      },
    ],
    hardwareRequisition: [
      {
        id: "h1",
        item: "Access Puncture Needles",
        spec: "21G 15cm Chiba Needle / 18G Trocar needle",
        required: true,
      },
      {
        id: "h2",
        item: "Micropuncture Access Set",
        spec: "0.018\" Micropuncture set with 4F/5F coaxial transition dilator",
        required: true,
      },
      {
        id: "h3",
        item: "Primary Guidewires",
        spec: "0.035\" 150cm J-tip and Bentson Guidewire (plus 0.035\" 260cm Terumo Stiff Glidewire)",
        required: true,
      },
      {
        id: "h4",
        item: "Super-Stiff Exchange Wire",
        spec: "0.035\" 145cm Amplatz Super-Stiff Guidewire (3mm J-tip)",
        required: true,
      },
      {
        id: "h5",
        item: "Pigtail Nephrostomy Catheter",
        spec: "8F - 10F Pigtail Locking Nephrostomy Tube (Cook / Boston Scientific with suture retention)",
        required: true,
      },
      {
        id: "h6",
        item: "Double-J Ureteral Stent",
        spec: "Antegrade 6F - 7F 22-26cm Double-J Ureteral Stent (Flexima / Universa) with pusher",
        required: true,
      },
      {
        id: "h7",
        item: "Directional Angiographic Catheter",
        spec: "5F Kumpe / KMP / Cobra Catheter 65cm for negotiating ureteral obstruction",
        required: true,
      },
      {
        id: "h8",
        item: "Urinary Drainage System",
        spec: "Connecting tube with 3-way stopcock and sterile gravity collection bag",
        required: true,
      },
    ],
    postOpCare: {
      drugs: [
        "Targeted IV antibiotic therapy according to urine culture (e.g., Piperacillin-Tazobactam 4.5g IV q8h or Meropenem 1g IV q8h for urosepsis).",
        "Aggressive IV hydration (Normal Saline 100-150 mL/h) to maintain brisk renal parenchymal washout.",
        "Fluid replacement for post-obstructive diuresis: 0.5 mL 0.45% Saline per 1 mL urine output if output >200 mL/h.",
        "Analgesia: IV Paracetamol 1g q6h PRN + Tramadol 50mg IV for renal colic / flank spasm.",
      ],
      monitoring: [
        "External urine collection bag monitoring: hourly volume and clarity checks x 6h, then q4h.",
        "Monitor for hematuria (transient normal for 24h; notify IR if frank blood with clots or sudden tube occlusion).",
        "Serial serum creatinine, BUN, and serum electrolytes q12h until stable plateau.",
        "Surveillance of flank puncture site for peri-catheter urine leakage or tube dislodgement.",
        "Check fluoroscopy / KUB confirming proximal J-curl in renal pelvis and distal J-curl in urinary bladder.",
      ],
      dischargeCriteria:
        "External urine collection bag monitoring confirms clear or pale urine output, resolution of urosepsis with afebrile status for 24 hours, stable renal parameters, Double-J stent position confirmed on KUB, patient trained on nephrostomy tube care.",
    },
  },

  // =========================================================================
  // 6. RENAL ANGIOMYOLIPOMA (AML) EMBOLIZATION
  // =========================================================================
  {
    key: "renal_aml_embo",
    title: "Prophylactic & Emergency Embolization of Renal Angiomyolipoma (AML)",
    organSystem: "Pelvic & Genitourinary",
    modality: "XA",
    clinicalCriteria:
      "Renal Angiomyolipoma >=4 cm in diameter (prophylactic indication to prevent spontaneous life-threatening Wunderlich syndrome retroperitoneal rupture), or acute hemorrhage with intratumoral aneurysm >=5 mm.",
    recommendedLabs: [
      "CBC (Complete Blood Count: Hemoglobin, Hematocrit, Platelets)",
      "PT/INR (Coagulation Profile: PT, aPTT)",
      "Serum Creatinine and Blood Urea Nitrogen",
      "eGFR (Estimated Glomerular Filtration Rate)",
      "Urinalysis (Microscopic hematuria, proteinuria)",
    ],
    specialInvestigations: [
      "Contrast-Enhanced CT / MRI Abdomen (intratumoral fat density <-20 HU, vascular pseudoaneurysms, retroperitoneal hematoma)",
      "Tuberous Sclerosis Complex (TSC) genetic screening (TSC1/TSC2 mutation analysis)",
      "Pre-procedural 3D volume assessment of renal AML and residual normal parenchyma",
    ],
    calculatorType: "cigarroa",
    preScanAnatomyChecklist: [
      {
        id: "main_renal_branching",
        label: "Main renal artery branching",
        options: [
          "Single Main Renal Artery (Standard anterior/posterior division)",
          "Multiple Accessory / Polar Renal Arteries",
          "Early Bifurcation / Trifurcation",
        ],
        defaultSelected: "Single Main Renal Artery (Standard anterior/posterior division)",
      },
      {
        id: "interlobar_feeders",
        label: "Interlobar and interlobular feeding arteries to AML",
        options: [
          "Single Interlobar / Segmental Feeder (Superselective target)",
          "Multiple Dysplastic Feeders (Multifocal AML / TSC)",
          "Parasitic Lumbar / Adrenal Collateral Supply",
        ],
        defaultSelected: "Single Interlobar / Segmental Feeder (Superselective target)",
      },
      {
        id: "pseudoaneurysm_caliber",
        label: "Intratumoral pseudoaneurysm number and caliber",
        options: [
          "Dominant Intratumoral Aneurysm >=5 mm (Critical rupture risk)",
          "Multiple Small Aneurysms (2-4 mm)",
          "No Discrete Aneurysm / Diffuse Hypervascular Blush",
        ],
        defaultSelected: "Dominant Intratumoral Aneurysm >=5 mm (Critical rupture risk)",
      },
      {
        id: "parenchymal_nephrogram",
        label: "Preservation of normal renal parenchymal nephrogram",
        options: [
          ">90% Normal Renal Parenchyma Preserved (Optimal sparing)",
          "75-90% Normal Cortex Preserved",
          "<75% Preserved (Extensive tumor replacement)",
        ],
        defaultSelected: ">90% Normal Renal Parenchyma Preserved (Optimal sparing)",
      },
      {
        id: "clinical_presentation",
        label: "Presentation Status",
        options: [
          "Prophylactic Embolization (Tumor >=4 cm, Asymptomatic)",
          "Acute Spontaneous Rupture (Wunderlich Syndrome - Hemodynamically Unstable)",
          "Symptomatic Flank Pain / Hematuria",
        ],
        defaultSelected: "Prophylactic Embolization (Tumor >=4 cm, Asymptomatic)",
      },
    ],
    hardwareRequisition: [
      {
        id: "h1",
        item: "Femoral Introducer Sheath",
        spec: "5F Femoral Sheath (11cm Cordis) or 6F 45cm Destination Guiding Sheath",
        required: true,
      },
      {
        id: "h2",
        item: "Renal Base Catheter",
        spec: "5F Renal Catheter (Cobra C2 / Shepherd Hook 100cm)",
        required: true,
      },
      {
        id: "h3",
        item: "Superselective Microcatheter",
        spec: "1.9F - 2.4F Superselective Microcatheter (Terumo Progreat / Medtronic Marathon 130-150cm)",
        required: true,
      },
      {
        id: "h4",
        item: "Steerable Microguidewire",
        spec: "0.014\" Guidewire (Synchro-14 / Transend-14 Hydrophilic 200cm)",
        required: true,
      },
      {
        id: "h5",
        item: "Ethanol-Lipiodol Ablative Agent",
        spec: "Absolute Alcohol (Ethanol) mixed with Lipiodol (1:1 to 1:2 ratio)",
        required: true,
      },
      {
        id: "h6",
        item: "Calibrated Microspheres",
        spec: "300-500 um calibrated spherical particles (Embosphere / Hydropearl)",
        required: true,
      },
      {
        id: "h7",
        item: "Microcoils for Pseudoaneurysms",
        spec: "0.014\" microcoils for pseudoaneurysms (Target / Concerto Detachable Platinum Coils 2-5 mm)",
        required: true,
      },
      {
        id: "h8",
        item: "Vascular Closure Device",
        spec: "6F Perclose ProStyle / Angio-Seal VIP Vascular Closure Device",
        required: true,
      },
    ],
    postOpCare: {
      drugs: [
        "IV analgesia for post-embolization syndrome (flank pain, fever, nausea): Scheduled IV Ketorolac 30mg q8h (if eGFR >60) or IV Paracetamol 1g q6h + Tramadol 50mg q8h.",
        "IV Dexamethasone 8mg pre-procedure followed by 4mg IV BD x 48 hours to attenuate post-embolization syndrome.",
        "Antiemetic therapy: IV Ondansetron 8mg TDS x 48 hours.",
        "Aggressive IV hydration (Normal Saline 100-125 mL/h) x 24h to flush cellular debris and contrast.",
        "Prophylactic antibiotic: Cefazolin 1g IV q8h x 24 hours.",
      ],
      monitoring: [
        "Hospitalization for 48h.",
        "Flank pain scoring (VAS 0-10) and core body temperature checks q4h for post-embolization syndrome surveillance.",
        "Renal function monitoring: serum creatinine and eGFR at 24h and 48h.",
        "Blood pressure surveillance q2h to detect transient post-ischemic renin-mediated hypertension.",
        "Outpatient surveillance: follow-up CT at 3 and 6 months demonstrating tumor volume regression.",
      ],
      dischargeCriteria:
        "Hospitalization for 48h completed, flank pain well controlled on oral analgesics, afebrile for >=24h, stable serum creatinine and eGFR, no gross hematuria, follow-up CT at 3 and 6 months demonstrating tumor volume regression booked.",
    },
  },

  // =========================================================================
  // 7. VARICOCELE EMBOLIZATION
  // =========================================================================
  {
    key: "varicocele_embo",
    title: "Percutaneous Retrograde Embolization of Testicular Vein Varicocele",
    organSystem: "Pelvic & Genitourinary",
    modality: "XA",
    clinicalCriteria:
      "Symptomatic scrotal pain/dull ache or male subfertility with abnormal semen parameters (oligozoospermia, asthenozoospermia) in the presence of palpable Grade II/III varicocele.",
    recommendedLabs: [
      "Semen analysis (concentration, motility, morphology - WHO 6th edition criteria)",
      "Serum Testosterone (Total & Free Testosterone)",
      "FSH (Follicle-Stimulating Hormone)",
      "LH (Luteinizing Hormone)",
      "PT/INR (Coagulation Profile)",
    ],
    specialInvestigations: [
      "Scrotal Color Doppler Ultrasound (testicular vein diameter >3 mm at rest or with Valsalva maneuver, retrograde flow duration >2 seconds)",
      "Bilateral Orchidometry / Testicular Volume Measurement",
    ],
    calculatorType: null,
    preScanAnatomyChecklist: [
      {
        id: "lrv_entry_angle",
        label: "Left Renal Vein entry angle",
        options: [
          "Orthogonal 90-Degree Entry Angle (Easily cannulated with Cobra C2 / SIM1)",
          "Acute Downward Angulation (Requires Simmons-2 / Mikaelsson)",
          "Circum-Aortic Venous Collar / Retro-Aortic Left Renal Vein",
          "Nutcracker Phenomenon (Significant LRV compression between SMA and Aorta)",
        ],
        defaultSelected: "Orthogonal 90-Degree Entry Angle (Easily cannulated with Cobra C2 / SIM1)",
      },
      {
        id: "testicular_vein_ostium",
        label: "Left Testicular Vein ostium competence",
        options: [
          "Incompetent Ostial Valve with Free Reflux",
          "Competent Ostial Valve with Low-Level Incompetent Collaterals",
          "Severe Ostial Spasm / Web upon Cannulation",
        ],
        defaultSelected: "Incompetent Ostial Valve with Free Reflux",
      },
      {
        id: "collateral_channels",
        label: "Duplicated / collateral parallel channels (retroperitoneal / renocaval bypass)",
        options: [
          "Single Straight Main Trunk (Bähren Type 1)",
          "Parallel Duplicated Communicating Channels in Mid-Retroperitoneum (Bähren Type 2)",
          "Renocaval / Retroperitoneal Bypass Shunts (Bähren Type 3)",
          "Contralateral Pelvic Cross-Over Collaterals (Bähren Type 4)",
        ],
        defaultSelected: "Single Straight Main Trunk (Bähren Type 1)",
      },
      {
        id: "right_testicular_vein",
        label: "Right testicular vein entry directly into IVC (inferior to right renal vein)",
        options: [
          "Unilateral Left Varicocele (Right vein unexamined / normal)",
          "Right testicular vein entry directly into IVC (inferior to right renal vein) engaged for bilateral embolization",
          "Right testicular vein anomalous insertion into right renal vein",
        ],
        defaultSelected: "Unilateral Left Varicocele (Right vein unexamined / normal)",
      },
      {
        id: "venous_access_route",
        label: "Vascular Access Approach",
        options: [
          "5F Right Common Femoral Access",
          "5F Right Internal Jugular Access (Straight downward trajectory)",
          "Right Basilic / Brachial Vein Access",
        ],
        defaultSelected: "5F Right Common Femoral Access",
      },
    ],
    hardwareRequisition: [
      {
        id: "h1",
        item: "Venous Introducer Sheath",
        spec: "5F Right Common Femoral or Right Internal Jugular access introducer sheath (11cm)",
        required: true,
      },
      {
        id: "h2",
        item: "Selective Diagnostic Catheter",
        spec: "5F Cobra C2 / Sidewinder SIM1 / Multipurpose Catheter 100cm",
        required: true,
      },
      {
        id: "h3",
        item: "Microcatheter System",
        spec: "2.7F Microcatheter (Terumo Progreat 130cm with 0.014\" - 0.018\" wire)",
        required: true,
      },
      {
        id: "h4",
        item: "Guidewires",
        spec: "0.035\" Bentson & Hydrophilic Glidewires (150cm Bentson + 260cm Terumo Stiff Glidewire)",
        required: true,
      },
      {
        id: "h5",
        item: "Fibered Platinum Coils",
        spec: "0.035\" and 0.018\" Fibered Platinum Coils (Interlock / Nester 6-12 mm)",
        required: true,
      },
      {
        id: "h6",
        item: "Sclerosant Agent",
        spec: "Sclerosant: Sodium Tetradecyl Sulfate (STS) 3% foam with air and Lipiodol (Tessari method 1:4:1)",
        required: true,
      },
      {
        id: "h7",
        item: "Balloon Occlusion Catheter",
        spec: "Fogarty 4F / 5F Balloon Occlusion Catheter to prevent central sclerosant reflux",
        required: false,
      },
      {
        id: "h8",
        item: "Puncture Site Dressing",
        spec: "Sterile gauze compression dressing for femoral/jugular venipuncture site",
        required: true,
      },
    ],
    postOpCare: {
      drugs: [
        "Oral Ibuprofen 400 mg TDS with meals for 3-5 days for mild flank/scrotal aching.",
        "Stool softener: Syrup Lactulose 15 mL OD for 3 days to prevent post-op Valsalva strain.",
        "Prophylactic antibiotic: Single oral dose of Cefuroxime 500mg post-procedure.",
      ],
      monitoring: [
        "Ambulation after 2 hours.",
        "Right groin / neck puncture site surveillance for hematoma or swelling q30m x 2h.",
        "Scrotal examination before discharge to confirm no acute hematoma or ischemic orchitis.",
        "Avoid strenuous lifting/exercise x 7 days.",
        "Scrotal support (firm athletic briefs) continuously for 1-2 weeks.",
        "Semen analysis repeat at 3-6 months.",
      ],
      dischargeCriteria:
        "Ambulation after 2 hours achieved without postural hypotension, avoid strenuous lifting/exercise x 7 days, scrotal support fitted, puncture site clean and dry without hematoma, semen analysis repeat at 3-6 months booked.",
    },
  },

  // =========================================================================
  // 8. OVARIAN VEIN EMBOLIZATION FOR PELVIC CONGESTION SYNDROME
  // =========================================================================
  {
    key: "ovarian_vein_pelvic_congestion",
    title: "Ovarian & Internal Iliac Vein Embolization for Pelvic Congestion Syndrome",
    organSystem: "Pelvic & Genitourinary",
    modality: "XA",
    clinicalCriteria:
      "Chronic non-cyclical pelvic pain (>6 months duration) exacerbated by standing and post-coital, in women with confirmed ovarian vein incompetence and dilated pelvic venous plexuses.",
    recommendedLabs: [
      "CBC (Complete Blood Count: Hemoglobin, Platelets)",
      "PT/INR (Coagulation Profile: PT, aPTT)",
      "Serum Creatinine and eGFR",
      "Pregnancy Test (Beta-hCG - mandatory exclusion of pregnancy)",
    ],
    specialInvestigations: [
      "Transvaginal Pelvic Ultrasound with Doppler (tortuous pelvic venous plexus >5 mm, reduced flow velocity <3 cm/s)",
      "Contrast-Enhanced CT / MR Venography of Abdomen and Pelvis showing dilated ovarian veins (>8 mm)",
      "Pelvic Venography documenting retrograde reflux into ovarian and internal iliac venous branches",
    ],
    calculatorType: "cigarroa",
    preScanAnatomyChecklist: [
      {
        id: "left_ovarian_entry",
        label: "Left ovarian vein entry into left renal vein",
        options: [
          "Dilated Left Ovarian Vein (>8 mm) with Incompetent Ostium and Retrograde Flow",
          "Ectatic Main Trunk (>12 mm) with Multiple Pelvic Branches",
          "Normal Caliber Left Ovarian Vein",
        ],
        defaultSelected: "Dilated Left Ovarian Vein (>8 mm) with Incompetent Ostium and Retrograde Flow",
      },
      {
        id: "nutcracker_exclusion",
        label: "Nutcracker phenomenon exclusion (left renal vein compression between SMA and aorta)",
        options: [
          "Nutcracker phenomenon excluded (Normal aorto-mesenteric angle, no significant LRV pressure gradient)",
          "Severe Nutcracker compression present (>4 mmHg gradient - relative contraindication to coil embolization)",
          "Mild LRV beaking without venous hypertension",
        ],
        defaultSelected: "Nutcracker phenomenon excluded (Normal aorto-mesenteric angle, no significant LRV pressure gradient)",
      },
      {
        id: "right_ovarian_entry",
        label: "Right ovarian vein entry into IVC",
        options: [
          "Incompetent Dilated Right Ovarian Vein entering IVC (Bilateral Embolization required)",
          "Competent Normal Right Ovarian Vein",
          "Right Ovarian Vein anomalous insertion into Right Renal Vein",
        ],
        defaultSelected: "Incompetent Dilated Right Ovarian Vein entering IVC (Bilateral Embolization required)",
      },
      {
        id: "pelvic_escape_points",
        label: "Internal iliac vein pelvic escape points (sciatic, obturator, pudendal)",
        options: [
          "Prominent obturator and internal pudendal escape points demonstrated",
          "Sciatic and gluteal venous leaks present",
          "Isolated ovarian vein incompetence without major iliac escape",
        ],
        defaultSelected: "Prominent obturator and internal pudendal escape points demonstrated",
      },
      {
        id: "access_sheath_approach",
        label: "Vascular Access Strategy",
        options: [
          "6F 45cm Ansel Sheath via Right IJV access",
          "6F 45cm Ansel Sheath via Right Femoral access",
          "Left Basilic / Brachial Vein access",
        ],
        defaultSelected: "6F 45cm Ansel Sheath via Right IJV access",
      },
    ],
    hardwareRequisition: [
      {
        id: "h1",
        item: "Guiding Introducer Sheath",
        spec: "6F 45cm Ansel Sheath (Right Femoral or Right IJV access)",
        required: true,
      },
      {
        id: "h2",
        item: "Selective Diagnostic Catheter",
        spec: "5F Cobra / Multipurpose / Simmons 2 catheter 100cm",
        required: true,
      },
      {
        id: "h3",
        item: "High-Flow Microcatheter",
        spec: "2.7F Terumo Progreat / Boston Renegade 130cm with 0.014\" wire",
        required: true,
      },
      {
        id: "h4",
        item: "Guidewires",
        spec: "0.035\" Hydrophilic and Extra-Stiff wires (260cm Terumo Glidewire + 180cm Amplatz Extra-Stiff)",
        required: true,
      },
      {
        id: "h5",
        item: "Fibered Coils",
        spec: "Embolic materials: 0.035\" Fibered Coils (Nester / Tornado 8-16 mm) and STS 3% sclerosant foam",
        required: true,
      },
      {
        id: "h6",
        item: "Vascular Plugs",
        spec: "Vascular Plugs (AVP II 10-14 mm) for ovarian vein trunk occlusion",
        required: true,
      },
      {
        id: "h7",
        item: "Foam Sclerotherapy Kit",
        spec: "Sodium Tetradecyl Sulfate (STS 3%) 2 mL + 4 mL air + 1 mL Lipiodol with Tessari connector",
        required: true,
      },
      {
        id: "h8",
        item: "Puncture Site Dressing",
        spec: "Sterile compression dressing for venipuncture site",
        required: true,
      },
    ],
    postOpCare: {
      drugs: [
        "Mild NSAIDs for pelvic cramps x 3 days: Naproxen 500 mg BD or Ibuprofen 600 mg TDS with meals.",
        "Gastroprotection: Pantoprazole 40 mg PO OD while taking NSAIDs.",
        "Analgesic rescue: Tramadol 50 mg PO q8h PRN for severe pelvic cramping.",
        "Stool softener: Docusate sodium 100 mg BD to minimize post-procedure straining.",
      ],
      monitoring: [
        "Recovery room observation x 2 hours with vital signs and access site inspection q30m.",
        "Monitor for acute pelvic thrombophlebitis pain and low-grade fever.",
        "Avoid hot baths and sexual intercourse x 1 week.",
        "Avoid strenuous lifting (>10 kg) and intense aerobic exercise for 14 days.",
        "VAS pain score reassessment at 6 weeks and 6 months in outpatient clinic.",
      ],
      dischargeCriteria:
        "Mild NSAIDs for pelvic cramps x 3 days prescribed, avoid hot baths and sexual intercourse x 1 week, puncture site dry without hematoma, ambulating comfortably, VAS pain score reassessment at 6 weeks scheduled.",
    },
  },

  // =========================================================================
  // 9. ENDOVASCULAR AORTIC REPAIR (EVAR) FOR INFRARENAL AAA
  // =========================================================================
  {
    key: "evar_abdominal_aneurysm",
    title: "Endovascular Aortic Repair (EVAR) for Infrarenal Abdominal Aortic Aneurysm",
    organSystem: "Aortic & Complex",
    modality: "XA",
    clinicalCriteria:
      "Infrarenal abdominal aortic aneurysm (AAA) with maximal diameter >=5.5 cm in men, >=5.0 cm in women, or rapid expansion (>1.0 cm/year or >0.5 cm in 6 months), with suitable anatomical sealing zones.",
    recommendedLabs: [
      "CBC (Hemoglobin, Hematocrit, Platelets)",
      "Blood Crossmatch for 2 Units PRBC (plus 2 units reserved)",
      "Serum Creatinine, Blood Urea Nitrogen, eGFR",
      "PT/INR (Coagulation Profile: PT, aPTT, Fibrinogen)",
      "Cardiac Clearance (12-lead ECG, Transthoracic Echocardiogram, Pre-op Cardiology Risk Stratification)",
    ],
    specialInvestigations: [
      "High-Resolution Contrast-Enhanced Thin-Slice CTA of Abdomen and Pelvis with 3D centerline reconstruction",
      "Pre-procedural EVAR Device Sizing & Centerline Vascular Anatomy Planning (Landing zones, neck angulation, access vessels)",
      "Cardiopulmonary Exercise Testing or Non-Invasive Cardiac Stress Testing for surgical risk stratification",
    ],
    calculatorType: "cigarroa",
    preScanAnatomyChecklist: [
      {
        id: "proximal_aortic_neck",
        label: "Proximal aortic neck length (>=15 mm) and diameter",
        options: [
          "Adequate Neck Length (>=15 mm) with Diameter <=28 mm (Standard IFU)",
          "Borderline Neck Length (10-14 mm - Hostile neck)",
          "Conical / Reverse Taper Neck (High risk of Type IA endoleak)",
        ],
        defaultSelected: "Adequate Neck Length (>=15 mm) with Diameter <=28 mm (Standard IFU)",
      },
      {
        id: "neck_angulation",
        label: "Neck angulation (<60 degrees)",
        options: [
          "Neck Angulation <60 degrees (Standard anatomy)",
          "Severe Angulation (60-75 degrees - Hostile anatomy)",
          "Extreme Angulation (>75 degrees - High risk of graft migration)",
        ],
        defaultSelected: "Neck Angulation <60 degrees (Standard anatomy)",
      },
      {
        id: "lowest_renal_level",
        label: "Lowest renal artery level (SMA to renal distance)",
        options: [
          "Lowest renal artery clearly identified with >15 mm to aneurysm sac",
          "Accessory lower pole renal artery originating from neck zone",
          "Renal artery stenosis present",
        ],
        defaultSelected: "Lowest renal artery clearly identified with >15 mm to aneurysm sac",
      },
      {
        id: "distal_iliac_zones",
        label: "Distal iliac landing zones (Common Iliac Artery diameter <20 mm, length >=15 mm)",
        options: [
          "Distal iliac landing zones suitable (Common Iliac Artery diameter <20 mm, length >=15 mm)",
          "Ectatic Common Iliac Artery (>20 mm - Requires bell-bottom limb or iliac branch device)",
          "Severe Iliac Tortuosity / Circumferential Calcification",
        ],
        defaultSelected: "Distal iliac landing zones suitable (Common Iliac Artery diameter <20 mm, length >=15 mm)",
      },
      {
        id: "femoral_access_caliber",
        label: "Femoral and external iliac access caliber (>=6.5 mm)",
        options: [
          "Femoral and external iliac access caliber adequate (>=6.5 mm bilateral)",
          "Borderline access caliber (5.5 - 6.5 mm - May require serial balloon dilatation)",
          "Severe Iliofemoral Stenosis / Calcification (<5.5 mm - Conduit required)",
        ],
        defaultSelected: "Femoral and external iliac access caliber adequate (>=6.5 mm bilateral)",
      },
    ],
    hardwareRequisition: [
      {
        id: "h1",
        item: "Vascular Pre-Close Devices",
        spec: "Bilateral Perclose ProGlide / ProStyle suture-mediated closure devices (pre-close technique)",
        required: true,
      },
      {
        id: "h2",
        item: "Main Body Delivery Sheath",
        spec: "18F - 22F Main Body Delivery Sheath (DrySeal / GORE large-bore sheath)",
        required: true,
      },
      {
        id: "h3",
        item: "Extra-Stiff Aortic Guidewires",
        spec: "0.035\" 260cm Lunderquist Extra-Stiff Guidewires (Cook DCF wire 2 units)",
        required: true,
      },
      {
        id: "h4",
        item: "Aortic Stent-Graft System",
        spec: "Bifurcated Modular Aortic Stent-Graft System (Medtronic Endurant II / Gore Excluder / Cook Zenith)",
        required: true,
      },
      {
        id: "h5",
        item: "Modular Iliac Extension Limbs",
        spec: "Contralateral and Ipsilateral Modular Iliac Extension Limbs sized to distal landing zones",
        required: true,
      },
      {
        id: "h6",
        item: "Compliant Molding Balloon",
        spec: "Large-diameter compliant molding balloon (Coda 32-40 mm / Medtronic Reliant)",
        required: true,
      },
      {
        id: "h7",
        item: "Centimeter Pigtail Catheter",
        spec: "5F 100cm Marker Pigtail Catheter with 1cm radiopaque interval markers",
        required: true,
      },
      {
        id: "h8",
        item: "Systemic Heparinization",
        spec: "Unfractionated Heparin 5000-8000 IU IV bolus (titrated to ACT >250 seconds)",
        required: true,
      },
    ],
    postOpCare: {
      drugs: [
        "Lifelong single antiplatelet therapy: Aspirin 75-100 mg OD (or Clopidogrel 75 mg OD).",
        "High-intensity statin therapy: Atorvastatin 40-80 mg OD for cardiovascular risk reduction and aneurysm stability.",
        "Blood pressure control: maintain SBP <130 mmHg and MAP 70-85 mmHg (ACE-I/ARB + Beta-blocker).",
        "Prophylactic IV antibiotics: Cefazolin 1g IV q8h for 24 hours post-procedure.",
        "Analgesia: Paracetamol 1g IV/PO q6h PRN + Tramadol 50mg PRN for groin puncture site discomfort.",
      ],
      monitoring: [
        "HDU / ICU bed rest for 6 hours.",
        "Groin puncture site pressure dressing surveillance q1h x 6h, then q4h.",
        "Bilateral dorsalis pedis and posterior tibial pulse checks q1h x 6h, then q4h.",
        "Renal function surveillance: serum creatinine and BUN at 24 and 48 hours post-procedure.",
        "CTA aorta at 30 days to check for Type I-IV endoleaks, stent migration, and aneurysm sac diameter changes; repeat at 12 months.",
      ],
      dischargeCriteria:
        "HDU / ICU bed rest for 6 hours completed, groin puncture site pressure dressing surveillance negative for hematoma or pseudoaneurysm, bilateral dorsalis pedis and posterior tibial pulse checks q1h verified intact, stable renal function, ambulating independently, CTA aorta at 30 days to check for Type I-IV endoleaks scheduled.",
    },
  },

  // =========================================================================
  // 10. HEMODIALYSIS AV FISTULA / GRAFT FISTULOPLASTY
  // =========================================================================
  {
    key: "dialysis_avf_fistuloplasty",
    title: "Hemodialysis AV Fistula / Graft Percutaneous Transluminal Angioplasty (Fistuloplasty)",
    organSystem: "Venous & Dialysis Access",
    modality: "XA",
    clinicalCriteria:
      "Hemodialysis access dysfunction (arteriovenous fistula or graft) characterized by elevated dynamic venous pressures (>50% above baseline), access recirculation, reduced blood flow (<500 mL/min on dialysis), or difficult cannulation with prolonged bleeding post-dialysis.",
    recommendedLabs: [
      "Serum Potassium (Immediate pre-procedure check to exclude hyperkalemia >5.5 mmol/L)",
      "Serum Creatinine and Blood Urea Nitrogen (BUN)",
      "Platelet count (Complete Blood Count including Hemoglobin)",
      "PT/INR (Coagulation Profile: PT, aPTT)",
      "Hemodialysis access parameters (Dynamic venous pressures, Kt/V, Qa volume flow rate)",
    ],
    specialInvestigations: [
      "Color Doppler Ultrasound of AV access (peak systolic velocity ratio >2:1 across stenosis, volume flow calculation)",
      "Diagnostic Fistulogram with full outflow and central venous runoff imaging",
    ],
    calculatorType: null,
    preScanAnatomyChecklist: [
      {
        id: "inflow_arterial_vessel",
        label: "Inflow arterial feeding vessel",
        options: [
          "Patent Normal Inflow Artery (Radial / Brachial Artery Caliber >=3 mm)",
          "Feeding Inflow Artery Stenosis (>50% narrowing)",
          "Significant Arterial Calcification / Monckeberg Arteriosclerosis",
        ],
        defaultSelected: "Patent Normal Inflow Artery (Radial / Brachial Artery Caliber >=3 mm)",
      },
      {
        id: "anastomotic_stenosis",
        label: "Arteriovenous anastomotic stenosis",
        options: [
          "Widely Patent Anastomosis (>4 mm)",
          "Focal Juxta-Anastomotic Stenosis (>50% luminal reduction)",
          "Tight Anastomotic Web / Stricture (>70% stenosis)",
        ],
        defaultSelected: "Focal Juxta-Anastomotic Stenosis (>50% luminal reduction)",
      },
      {
        id: "swing_segment",
        label: "Juxta-anastomotic swing segment",
        options: [
          "Straight Swing Segment without Kinking",
          "Severe Angulated Stenosis at Mobilization / Swing Point",
          "Aneurysmal Dilatation with Wall Thrombus",
        ],
        defaultSelected: "Severe Angulated Stenosis at Mobilization / Swing Point",
      },
      {
        id: "outflow_vein_cannulation",
        label: "Outflow cephalic/basilic vein cannulation zone stenosis",
        options: [
          "Patent Continuous Cannulation Zone (Caliber >=6 mm, Depth <6 mm)",
          "Multifocal Fibrotic Strictures from Repeated Needle Punctures",
          "Segmental Webbing with Post-Stenotic Dilation",
          "Intraluminal Thrombus",
        ],
        defaultSelected: "Patent Continuous Cannulation Zone (Caliber >=6 mm, Depth <6 mm)",
      },
      {
        id: "central_venous_patency",
        label: "Central venous drainage patency (Subclavian, Innominate, SVC)",
        options: [
          "Patent Central Veins (Subclavian, Innominate, SVC completely clear)",
          "Subclavian Vein Stenosis (>50% narrowing with thoracic collaterals)",
          "Innominate / Brachiocephalic Vein Occlusion",
          "Superior Vena Cava Stenosis",
        ],
        defaultSelected: "Patent Central Veins (Subclavian, Innominate, SVC completely clear)",
      },
      {
        id: "puncture_direction",
        label: "Fistuloplasty Puncture Approach",
        options: [
          "Antegrade Puncture (Directed toward outflow vein and central veins)",
          "Retrograde Puncture (Directed toward anastomosis and arterial inflow)",
          "Dual Puncture Criss-Cross Approach",
        ],
        defaultSelected: "Antegrade Puncture (Directed toward outflow vein and central veins)",
      },
    ],
    hardwareRequisition: [
      {
        id: "h1",
        item: "Short Introducer Sheath",
        spec: "5F - 7F Short Introducer Sheath (10 cm Terumo Radifocus / Cordis)",
        required: true,
      },
      {
        id: "h2",
        item: "Hydrophilic Crossing Guidewires",
        spec: "0.035\" 150cm / 260cm Hydrophilic Glidewire and 0.018\" Steerable wire",
        required: true,
      },
      {
        id: "h3",
        item: "High-Pressure Angioplasty Balloons",
        spec: "High-Pressure Non-Compliant Angioplasty Balloons (Conquest / Dorado / Mustang 5-10 mm diameter rated up to 30 atm)",
        required: true,
      },
      {
        id: "h4",
        item: "Cutting / Scoring Balloon",
        spec: "Cutting / Scoring balloon if fibrotic resistant stenosis (Wolverine / Peripheral Cutting Balloon 5-8 mm)",
        required: false,
      },
      {
        id: "h5",
        item: "Intraoperative Heparin",
        spec: "Heparin 3000-5000 IU intra-arterial/intravenous bolus",
        required: true,
      },
      {
        id: "h6",
        item: "Diagnostic Flush Catheter",
        spec: "4F / 5F Berenstein / Kumpe / Flush 65cm Catheter",
        required: true,
      },
      {
        id: "h7",
        item: "High-Pressure Inflation Syringe",
        spec: "30-40 atm Inflation Syringe Device with Precision Pressure Gauge",
        required: true,
      },
      {
        id: "h8",
        item: "Hemostatic Suture / Band",
        spec: "3-0 Prolene Purse-String Mattress Suture or Safeguard Radial/Fistula Compression Band",
        required: true,
      },
    ],
    postOpCare: {
      drugs: [
        "Local infiltration: Subcutaneous 1% Lidocaine (5 mL) at puncture site.",
        "Oral Analgesia: Paracetamol 650mg to 1000mg PO PRN for arm soreness (strictly avoid NSAIDs to preserve residual renal nephrons).",
        "No post-procedure systemic anticoagulation required for uncomplicated angioplasty.",
      ],
      monitoring: [
        "Hemostasis achieved with purse-string mattress suture or manual digital pressure (maintain light non-occlusive tension for 30-45 minutes).",
        "Thrill and bruit auscultation/palpation verified continuously throughout fistula circuit.",
        "Hand perfusion assessment: check radial artery pulse, capillary refill (<2 seconds), and warmth to exclude steal syndrome.",
        "Puncture site surveillance for hematoma or extravasation x 2 hours.",
        "Immediate hemodialysis allowed after 2 hours; advise dialysis unit staff to rotate cannulation sites away from fresh angioplasty puncture.",
      ],
      dischargeCriteria:
        "Hemostasis achieved with purse-string mattress suture or manual digital pressure, thrill and bruit auscultation/palpation verified with continuous high-pitched signal, warm hand with capillary refill <2 seconds, immediate hemodialysis allowed after 2 hours.",
    },
  },
];

export function getPelvicAndEndovascularProtocolByKey(key: string): IRClinicalProtocol | undefined {
  return PELVIC_AND_ENDOVASCULAR_PROTOCOLS.find((p) => p.key === key);
}
