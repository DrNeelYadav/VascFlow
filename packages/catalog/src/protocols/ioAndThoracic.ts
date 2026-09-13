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

export const IO_AND_THORACIC_PROTOCOLS: IRClinicalProtocol[] = [
  // =========================================================================
  // 1. TARE / Y-90 RADIOEMBOLIZATION
  // =========================================================================
  {
    key: "tare_y90_radioembolization",
    title: "Transarterial Radioembolization (TARE / SIRT with Yttrium-90 Microspheres)",
    organSystem: "Liver & Hepatobiliary",
    modality: "XA",
    clinicalCriteria:
      "Unresectable hepatocellular carcinoma (BCLC B or C with branch portal vein invasion), or liver-dominant colorectal adenocarcinoma / neuroendocrine metastases with preserved hepatic function (Child-Pugh A-B7, ECOG 0-1).",
    recommendedLabs: [
      "Liver Function Tests (Total Bilirubin <=2.0 mg/dL, Albumin >=3.0 g/dL, AST, ALT)",
      "Renal Function Tests (Serum Creatinine, BUN, eGFR)",
      "Coagulation Profile (PT/INR <1.5, aPTT, Platelets >50,000/uL)",
      "Serum Alpha-Fetoprotein (AFP) / Carcinoembryonic Antigen (CEA) tumor markers",
      "Complete Blood Count (Absolute Neutrophil Count >1,500/uL, Hemoglobin >=9.0 g/dL)",
    ],
    specialInvestigations: [
      "Triphasic Liver CT / Contrast-Enhanced Liver MRI with Eovist (within 30 days)",
      "Diagnostic Mapping Angiography with Technetium-99m Macroaggregated Albumin (Tc-99m MAA) injection into target hepatic artery",
      "SPECT-CT of Abdomen and Chest for non-target distribution detection and 3D MAA biodistribution",
      "Lung Shunt Fraction (LSF) calculation (<20%, predicted cumulative lung dose <30 Gy single session)",
      "Partition Model / BSA Dosimetry calculation (Target tumor absorbed dose 100-150 Gy for resin, >200 Gy for glass)",
    ],
    calculatorType: "meld",
    preScanAnatomyChecklist: [
      {
        id: "celiac_pha",
        label: "Celiac Trunk & Proper Hepatic Artery Branching",
        options: [
          "Standard Trifurcation (CHA, Splenic, LGA)",
          "Celiac Stenosis / Median Arcuate Ligament Compression",
          "Replaced CHA from SMA",
        ],
        defaultSelected: "Standard Trifurcation (CHA, Splenic, LGA)",
      },
      {
        id: "rha_lha_bifurcation",
        label: "Right & Left Hepatic Artery Bifurcation",
        options: [
          "Standard Lobar Bifurcation",
          "Trifurcation with Middle Hepatic Artery",
          "Segment 4 Branch from RHA",
          "Segment 4 Branch from LHA",
        ],
        defaultSelected: "Standard Lobar Bifurcation",
      },
      {
        id: "aberrant_origins",
        label: "Aberrant Arterial Origins",
        options: [
          "Standard Michels Type I (Normal Anatomy)",
          "Replaced RHA from SMA (Michels Type III)",
          "Replaced LHA from LGA (Michels Type II)",
          "Accessory RHA from SMA (Michels Type VI)",
          "Accessory LHA from LGA (Michels Type V)",
        ],
        defaultSelected: "Standard Michels Type I (Normal Anatomy)",
      },
      {
        id: "extrahepatic_embolization",
        label: "Extrahepatic Vessel Coil Embolization Necessity",
        options: [
          "GDA & RGA coil embolization required (prevent gastroduodenal ulceration)",
          "Falciform artery coil embolization required (prevent anterior abdominal wall rash)",
          "Accessory phrenic / parasitic collaterals require coiling",
          "Distal microcatheter positioning beyond non-target takeoff without coiling",
        ],
        defaultSelected: "Distal microcatheter positioning beyond non-target takeoff without coiling",
      },
      {
        id: "mpv_thrombus_status",
        label: "Main Portal Vein Tumor Thrombus Status",
        options: [
          "Patent Main PV & Main Branches",
          "Branch Portal Vein Invasion (Vp1/Vp2 - Ipsilateral)",
          "Main Portal Vein Thrombus (Vp4 - Relative Contraindication)",
          "Bland PV Thrombus with Cavernoma",
        ],
        defaultSelected: "Patent Main PV & Main Branches",
      },
    ],
    hardwareRequisition: [
      {
        id: "hw_tare_1",
        item: "Guiding Sheath",
        spec: "5F Femoral / 4F Radial Guiding Sheath (Destination / Ansel)",
        required: true,
      },
      {
        id: "hw_tare_2",
        item: "Diagnostic Catheter",
        spec: "5F Diagnostic Catheter (Cobra C2 / SOS Omni / Simmons 1)",
        required: true,
      },
      {
        id: "hw_tare_3",
        item: "Microcatheter System",
        spec: "1.9F - 2.4F Microcatheter (Progreat / Renegade HI-FLO 130-150cm)",
        required: true,
      },
      {
        id: "hw_tare_4",
        item: "Steerable Micro-Guidewire",
        spec: "0.014\" Steerable Hydrophilic Wire (Synchro-14 / Transend 300cm)",
        required: true,
      },
      {
        id: "hw_tare_5",
        item: "Pushable Microcoils",
        spec: "0.018\" Pushable Microcoils for protective extrahepatic embolization (GDA, RGA, Falciform)",
        required: false,
      },
      {
        id: "hw_tare_6",
        item: "Y-90 Microspheres Delivery Administration Set",
        spec: "Yttrium-90 Resin (SIR-Spheres) or Glass (TheraSphere) microspheres delivery administration set with acrylic radiation shielding box",
        required: true,
      },
      {
        id: "hw_tare_7",
        item: "Radiation Survey Meter",
        spec: "Calibrated Geiger-Muller survey meter for radiation safety survey clearance",
        required: true,
      },
    ],
    postOpCare: {
      drugs: [
        "Proton Pump Inhibitor (Pantoprazole 40mg IV BD) to prevent gastroduodenal ulceration, transitioning to oral 40mg daily x 30 days",
        "Antiemetic (Ondansetron 8mg IV TDS PRN) for nausea and vomiting",
        "Methylprednisolone taper (16mg daily tapered over 10 days) or Dexamethasone for post-embolization syndrome prophylaxis",
        "Analgesia: Paracetamol 1g IV q6h PRN + Tramadol 50mg oral q8h for RUQ pain",
      ],
      monitoring: [
        "Post-procedure radiation survey clearance of patient and waste linens prior to transport",
        "Puncture site monitoring (radial band / femoral compression) q1h x 4h",
        "Monitor for post-embolization syndrome (fever, RUQ pain, nausea, elevated transaminases)",
        "Serial LFT and CBC at 2 weeks, 4 weeks, and 3 months; multiphasic contrast CT/MRI at 8-12 weeks",
      ],
      dischargeCriteria:
        "Hemodynamically stable, pain and nausea controlled on oral medications, radiation survey clearance confirmed, puncture site hemostasis achieved, discharge within 24 hours.",
    },
  },

  // =========================================================================
  // 2. DRUG-ELUTING BEAD TACE (DEB-TACE)
  // =========================================================================
  {
    key: "deb_tace",
    title: "Drug-Eluting Bead Transarterial Chemoembolization (DEB-TACE)",
    organSystem: "Liver & Hepatobiliary",
    modality: "XA",
    clinicalCriteria:
      "Intermediate stage hepatocellular carcinoma (BCLC B) or solitary large HCC not amenable to resection/ablation, with preserved liver function (Child-Pugh A/B) and no extrahepatic metastases.",
    recommendedLabs: [
      "Liver Function Tests (Total Bilirubin, Direct Bilirubin, AST, ALT, Albumin, ALP)",
      "Serum Creatinine, BUN, and eGFR",
      "Coagulation Profile (INR <1.5, aPTT)",
      "Platelet Count (>50,000/uL)",
      "Serum Alpha-Fetoprotein (AFP) quantitative tumor marker",
    ],
    specialInvestigations: [
      "Contrast-Enhanced Multiphase CT / MRI Liver (Arterial, Portal Venous, and Delayed phases)",
      "MELD 3.0 Score calculation",
      "ALBI grade calculation (Grade 1 or 2 required)",
      "Baseline Transthoracic Echocardiogram (LVEF assessment prior to doxorubicin)",
    ],
    calculatorType: "meld",
    preScanAnatomyChecklist: [
      {
        id: "hepatic_feeders",
        label: "Right / Left / Middle Hepatic Artery Feeder Branches",
        options: [
          "Selective Right Hepatic Feeder",
          "Selective Left Hepatic Feeder",
          "Bilateral / Multi-segmental Feeders",
          "Segment 4 Branch from Middle Hepatic Artery",
        ],
        defaultSelected: "Selective Right Hepatic Feeder",
      },
      {
        id: "segmental_feeders",
        label: "Segmental Tumor Feeding Branches",
        options: [
          "Single Dominant Segmental Feeder (Super-selective target)",
          "Multiple Subsegmental Feeders",
          "Diffuse Hypervascular Blush (>2 segments)",
        ],
        defaultSelected: "Single Dominant Segmental Feeder (Super-selective target)",
      },
      {
        id: "extrahepatic_collaterals",
        label: "Extrahepatic Collateral Supply (Inferior Phrenic, Omental)",
        options: [
          "None (Purely hepatic arterial supply)",
          "Right Inferior Phrenic Artery collateral feeder",
          "Omental / Internal Mammary collateral feeder",
          "Gastroduodenal / Cystic artery collateral branch",
        ],
        defaultSelected: "None (Purely hepatic arterial supply)",
      },
      {
        id: "portal_vein_patency",
        label: "Portal Vein Patency (Main and Lobar)",
        options: [
          "Main and Lobar Portal Veins fully patent with hepatopetal flow",
          "Segmental portal branch occlusion (segmental TACE permitted)",
          "Main portal vein occlusion with hepatofugal flow (Absolute Contraindication)",
        ],
        defaultSelected: "Main and Lobar Portal Veins fully patent with hepatopetal flow",
      },
    ],
    hardwareRequisition: [
      {
        id: "hw_debtace_1",
        item: "Vascular Sheath",
        spec: "5F Femoral / Radial Sheath (11cm Femoral or Glidesheath Slender Radial)",
        required: true,
      },
      {
        id: "hw_debtace_2",
        item: "Diagnostic Catheter",
        spec: "5F Celiac/Hepatic Catheter (Cobra C2, SOS Omni, or Simmons 1)",
        required: true,
      },
      {
        id: "hw_debtace_3",
        item: "Microcatheter System",
        spec: "1.9F - 2.4F Microcatheter (Progreat 2.0F / Renegade HI-FLO 2.4F 130cm)",
        required: true,
      },
      {
        id: "hw_debtace_4",
        item: "Steerable Micro-Guidewire",
        spec: "0.014\" 200cm Steerable Hydrophilic Guidewire (Transend / Fathom-14)",
        required: true,
      },
      {
        id: "hw_debtace_5",
        item: "Drug-Eluting Beads",
        spec: "Drug-Eluting Beads (DC Bead M1 70-150 um or 100-300 um) loaded with Doxorubicin (50-75 mg) or Epirubicin",
        required: true,
      },
      {
        id: "hw_debtace_6",
        item: "Non-Ionic Contrast Medium",
        spec: "Non-ionic contrast medium (Omnipaque 350 / Visipaque 320) mixed 1:1 with bead slurry",
        required: true,
      },
    ],
    postOpCare: {
      drugs: [
        "Post-TACE Hydration Protocol: 2.5 L normal saline / 24 hours IV to prevent contrast and chemotherapeutic nephrotoxicity",
        "Anti-inflammatory Prophylaxis: Dexamethasone 8mg BD x 3 days for post-embolization syndrome",
        "Antiemetic Therapy: Ondansetron 8mg TDS IV/oral + Aprepitant 125mg Day 1 (80mg Days 2-3)",
        "Analgesia: Tramadol 50-100mg IV q8h + Paracetamol 1g IV q6h",
        "Gastroprotection: Pantoprazole 40mg IV daily",
      ],
      monitoring: [
        "Puncture site monitoring and distal neurovascular check q1h x 4h",
        "Serial liver biochemistry (Bilirubin, AST, ALT, ALP, Albumin) and Serum Creatinine at 24h and 48h",
        "Monitor for fever, RUQ pain, nausea, or signs of hepatic decompensation",
        "Multiphasic CT/MRI Liver at 4-6 weeks to assess mRECIST tumor response",
      ],
      dischargeCriteria:
        "Stable hemodynamics, afebrile, post-embolization pain and nausea controlled on oral medications, stable 48h liver biochemistry without acute decompensation, puncture site intact without hematoma.",
    },
  },

  // =========================================================================
  // 3. BRTO / PARTO FOR GASTRIC VARICES
  // =========================================================================
  {
    key: "brto_parto_gastric_varices",
    title: "Balloon-Occluded Retrograde Transvenous Obliteration (BRTO / PARTO) for Gastric Varices",
    organSystem: "Liver & Hepatobiliary",
    modality: "XA",
    clinicalCriteria:
      "Bleeding or high-risk gastric fundal varices (GOV2 / IGV1) associated with gastrorenal or gastrocaval shunt, especially in patients with low hepatic functional reserve or encephalopathy where TIPS is contraindicated.",
    recommendedLabs: [
      "Complete Blood Count (Hb, Hematocrit, Platelets)",
      "Coagulation Profile (PT/INR <1.5, aPTT, Fibrinogen)",
      "Liver Function Tests (Total Bilirubin, Albumin, AST, ALT)",
      "Serum Creatinine, BUN, and Electrolytes",
      "Type and Screen with 2 Units PRBC crossmatched",
    ],
    specialInvestigations: [
      "Contrast-Enhanced CT Abdomen showing gastrorenal shunt anatomy, draining left renal vein, and variceal complex",
      "Variceal diameter and shunt caliber measurement on 3D vascular reconstructions",
      "Endoscopic confirmation of fundic varices (Sarin GOV2 / IGV1) with red color sign or active stigmata of bleeding",
      "Hepatic encephalopathy baseline staging (West Haven criteria)",
    ],
    calculatorType: "meld",
    preScanAnatomyChecklist: [
      {
        id: "lrv_grs_entry",
        label: "Left Renal Vein and Gastrorenal Shunt Entry Site",
        options: [
          "Direct Gastrorenal Shunt into Left Renal Vein (Standard)",
          "Gastrocaval Shunt draining directly to IVC",
          "Combined Gastrorenal and Gastrophrenic outflow",
        ],
        defaultSelected: "Direct Gastrorenal Shunt into Left Renal Vein (Standard)",
      },
      {
        id: "shunt_diameter",
        label: "Shunt Diameter and Balloon Sizing (>10 mm)",
        options: [
          "Moderate Shunt (10-14 mm - 16mm balloon)",
          "Large Shunt (15-20 mm - 20mm balloon)",
          "Giant Shunt (>20 mm, high risk for displacement - consider PARTO)",
          "Small Shunt (<10 mm - 11mm balloon)",
        ],
        defaultSelected: "Moderate Shunt (10-14 mm - 16mm balloon)",
      },
      {
        id: "collateral_outflows",
        label: "Collateral Outflow Pathways (Inferior Phrenic, Pericardiac, Intercostal Veins)",
        options: [
          "No significant competing collaterals",
          "Inferior phrenic vein collateral (requires coil embolization)",
          "Pericardiac and intercostal collateral veins present",
          "Azygos-hemiazygos decompression pathway",
        ],
        defaultSelected: "Inferior phrenic vein collateral (requires coil embolization)",
      },
      {
        id: "pv_patency_flow",
        label: "Portal Vein Patency and Flow Direction",
        options: [
          "Patent Main PV with hepatopetal flow",
          "Patent Main PV with sluggish / borderline hepatofugal flow",
          "Partial non-occlusive PV thrombus",
        ],
        defaultSelected: "Patent Main PV with hepatopetal flow",
      },
    ],
    hardwareRequisition: [
      {
        id: "hw_brto_1",
        item: "Guiding Sheath",
        spec: "6F - 8F 45cm Ansel / Flexor Guiding Sheath via Right Femoral / IJV access",
        required: true,
      },
      {
        id: "hw_brto_2",
        item: "Balloon Occlusion Catheter",
        spec: "5F / 6F Balloon Occlusion Catheter (Cello / Fogarty 10-20 mm compliant balloon)",
        required: true,
      },
      {
        id: "hw_brto_3",
        item: "Microcatheter System",
        spec: "2.7F Coaxial Microcatheter (Progreat / Renegade HI-FLO 130cm)",
        required: true,
      },
      {
        id: "hw_brto_4",
        item: "Sclerosant & Embolic Agents",
        spec: "Sodium Tetradecyl Sulfate (STS) 3% foam with Lipiodol and air, or Gelfoam slurry with coil embolization (PARTO)",
        required: true,
      },
      {
        id: "hw_brto_5",
        item: "Microvascular Plugs (for PARTO)",
        spec: "Microvascular Plugs (Amplatzer MVP 9-13 mm or AVP II) for PARTO technique",
        required: false,
      },
      {
        id: "hw_brto_6",
        item: "Microcoils for Collaterals",
        spec: "0.018\" / 0.035\" Pushable / Detachable fibered coils (3-8 mm) for collateral vein embolization",
        required: true,
      },
      {
        id: "hw_brto_7",
        item: "Guidewires",
        spec: "0.035\" 260cm Terumo Stiff Glidewire and 0.014\" 200cm Micro-Guidewire",
        required: true,
      },
    ],
    postOpCare: {
      drugs: [
        "H2 Blocker / PPI: Pantoprazole 40mg IV BD x 5 days, transitioning to oral 40mg daily",
        "Antibiotic Prophylaxis: IV Ceftriaxone 1g q12h x 48 hours",
        "Low-dose prophylactic Enoxaparin 40mg s/c daily starting 12h post-hemostasis to prevent portal vein thrombosis",
        "Lactulose 20-30 mL TDS if history of hepatic encephalopathy",
        "Hydration and urine alkalinization (prophylaxis against STS-induced hemoglobinuria)",
      ],
      monitoring: [
        "Balloon deflation protocol after 4-6 hours (for BRTO) under fluoroscopic surveillance with catheter secured",
        "Doppler ultrasound at 24 hours to confirm gastric variceal thrombosis, portal vein patency, and left renal vein patency",
        "Urine output and color monitoring for dark hemoglobinuria",
        "Surveillance upper endoscopy at 1 month to confirm eradication of gastric varices and check for worsening esophageal varices",
      ],
      dischargeCriteria:
        "Stable hemodynamics, uneventful balloon deflation and sheath removal, 24h Doppler confirms complete gastric variceal thrombosis and patent left renal vein, no evidence of acute hemolysis or active bleeding.",
    },
  },

  // =========================================================================
  // 4. PORTAL VEIN EMBOLIZATION (PVE)
  // =========================================================================
  {
    key: "portal_vein_embolization_pve",
    title: "Portal Vein Embolization (PVE) for Future Liver Remnant Hypertrophy",
    organSystem: "Liver & Hepatobiliary",
    modality: "XA",
    clinicalCriteria:
      "Planned extended hepatectomy (right or trisectionectomy) for colorectal liver metastases, cholangiocarcinoma, or HCC where future liver remnant (FLR) volume is inadequate (<20-25% in normal liver, <30-40% in cirrhotic liver).",
    recommendedLabs: [
      "Liver Function Tests (Total & Direct Bilirubin, Albumin, AST, ALT, ALP)",
      "Renal Function Tests (Serum Creatinine, BUN, Electrolytes)",
      "Coagulation Profile (PT/INR <1.5, aPTT)",
      "Complete Blood Count (Hb, WBC, Platelets >50,000/uL)",
      "Indocyanine Green (ICG) clearance (ICG-R15 retention <10-14% at 15 minutes)",
    ],
    specialInvestigations: [
      "Volumetric Multidetector CT Liver with 3D FLR volume calculation",
      "Total Liver Volume (TLV) calculation using validated body surface area formulas",
      "Standardized FLR ratio (% sFLR = FLR / TLV x 100) and kinetic growth rate projection",
      "Liver MRI with hepatobiliary contrast (Eovist) to exclude occult contralateral FLR metastases",
    ],
    calculatorType: "meld",
    preScanAnatomyChecklist: [
      {
        id: "access_route",
        label: "Contralateral vs Ipsilateral Percutaneous Transhepatic Access Route",
        options: [
          "Ipsilateral (Right-sided) access through diseased liver (Preserves FLR from needle tract trauma)",
          "Contralateral (Left-sided) access through Segment 3 (Straight trajectory to right portal branch)",
          "Transjugular intrahepatic access route (Alternative in severe coagulopathy)",
        ],
        defaultSelected: "Ipsilateral (Right-sided) access through diseased liver (Preserves FLR from needle tract trauma)",
      },
      {
        id: "rpv_bifurcation",
        label: "Right Portal Vein Bifurcation (Anterior and Posterior Sectoral Branches)",
        options: [
          "Standard Right Main PV dividing into Anterior and Posterior sectoral branches",
          "Trifurcation of Main Portal Vein (Right Anterior, Right Posterior, and Left PV)",
          "Separate takeoff of Right Posterior sectoral branch directly from MPV",
        ],
        defaultSelected: "Standard Right Main PV dividing into Anterior and Posterior sectoral branches",
      },
      {
        id: "segment_4_branch",
        label: "Segment IV Portal Branch Anatomy (Extended Right Hepatectomy)",
        options: [
          "Segment IV branches arise solely from Left PV (spared in standard right hepatectomy)",
          "Segment IV branches arise from Right Anterior branch (requires embolization for trisectionectomy)",
          "Segment IVb branch requires targeted super-selective embolization",
        ],
        defaultSelected: "Segment IV branches arise solely from Left PV (spared in standard right hepatectomy)",
      },
      {
        id: "contralateral_pv_status",
        label: "Absence of Tumor Thrombus in Contralateral Left Portal Vein",
        options: [
          "Contralateral Left Portal Vein completely patent without tumor thrombus",
          "Mild compression without invasion",
          "Intraluminal thrombus in left portal branch (Absolute Contraindication)",
        ],
        defaultSelected: "Contralateral Left Portal Vein completely patent without tumor thrombus",
      },
    ],
    hardwareRequisition: [
      {
        id: "hw_pve_1",
        item: "Transhepatic Portal Puncture Needle",
        spec: "21G 15cm Chiba Needle for transhepatic portal puncture",
        required: true,
      },
      {
        id: "hw_pve_2",
        item: "Micropuncture Access Set",
        spec: "0.018\" Nitinol wire with 5F 10cm Micro-puncture Introducer Set",
        required: true,
      },
      {
        id: "hw_pve_3",
        item: "Biliary / Vascular Catheter",
        spec: "5F Biliary / Cobra / Kumpe Catheter (65cm)",
        required: true,
      },
      {
        id: "hw_pve_4",
        item: "Heavy Duty Guidewire",
        spec: "0.035\" 260cm Hydrophilic Glidewire and Amplatz Extra-Stiff Guidewire",
        required: true,
      },
      {
        id: "hw_pve_5",
        item: "Microcatheter System",
        spec: "2.4F - 2.8F High-Flow Microcatheter (Renegade HI-FLO / Progreat 130cm)",
        required: true,
      },
      {
        id: "hw_pve_6",
        item: "Liquid Embolic Mixture",
        spec: "N-butyl cyanoacrylate (NBCA) glue mixed with Ethiodized oil (Lipiodol) 1:1 to 1:3 ratio, with 5% Dextrose flush",
        required: true,
      },
      {
        id: "hw_pve_7",
        item: "Particulate & Plug Embolics",
        spec: "Calibrated spherical particles (300-500 um) + Amplatzer Vascular Plugs (AVP II 10-14 mm) in main right branch",
        required: true,
      },
      {
        id: "hw_pve_8",
        item: "Tract Embolic",
        spec: "Gelfoam slurry or pushable coils for parenchymal tract embolization upon catheter withdrawal",
        required: true,
      },
    ],
    postOpCare: {
      drugs: [
        "Analgesia: IV Paracetamol 1g q6h + Ketorolac 15mg IV q8h PRN for right upper quadrant / capsular pain",
        "Prophylactic Antibiotics: IV Cefazolin 1g or Ceftriaxone 1g pre-procedure and 1 dose post-procedure",
        "Antiemetics: Ondansetron 4-8mg IV PRN",
        "Prophylactic Enoxaparin 40mg s/c starting 12h post-procedure",
      ],
      monitoring: [
        "Right upper quadrant puncture site pressure dressing and bed rest for 4-6 hours",
        "LFT monitoring (AST, ALT, Bilirubin, INR) at 24h and 48h to evaluate transient transaminitis",
        "Serial monitoring for intraperitoneal bleeding, subcapsular hematoma, or transhepatic biloma",
        "Volumetric CT at 3 to 4 weeks post-procedure to evaluate FLR hypertrophy prior to resection",
      ],
      dischargeCriteria:
        "Stable hemodynamics, pain controlled with oral analgesics, stable serial hematocrit and LFTs, puncture site clean without hematoma or bile leak, discharge within 24 hours.",
    },
  },

  // =========================================================================
  // 5. PERCUTANEOUS TRANSHEPATIC BILIARY DRAINAGE & STENTING (PTBD)
  // =========================================================================
  {
    key: "ptbd_biliary_stenting",
    title: "Percutaneous Transhepatic Biliary Drainage (PTBD) & Biliary Stenting",
    organSystem: "Liver & Hepatobiliary",
    modality: "XA",
    clinicalCriteria:
      "Inoperable malignant biliary obstruction (cholangiocarcinoma, gallbladder cancer, pancreatic adenocarcinoma) or benign biliary stricture failing endoscopic retrograde cholangiopancreatography (ERCP).",
    recommendedLabs: [
      "Liver Function Tests (Total and Direct Bilirubin, Alkaline Phosphatase, GGT, AST, ALT)",
      "PT/INR (<1.5), aPTT",
      "Serum Creatinine and Blood Urea Nitrogen",
      "Complete Blood Count (WBC, Platelet Count >50,000/uL, Hemoglobin)",
      "Blood Cultures (aerobic and anaerobic vials)",
    ],
    specialInvestigations: [
      "Contrast-Enhanced CT / MRCP of Abdomen showing ductal dilatation and mass lesion",
      "Bismuth-Corlette classification of stricture level (Type I, II, IIIa, IIIb, IV)",
      "Documented ERCP failure or anatomical infeasibility (altered surgical anatomy)",
      "Assessment of portal vein and hepatic arterial encasement",
    ],
    calculatorType: "meld",
    preScanAnatomyChecklist: [
      {
        id: "puncture_site_choice",
        label: "Right Peripheral Duct vs Left Peripheral Duct Puncture Site",
        options: [
          "Right peripheral duct access (Segment 6/7) - Intercostal approach",
          "Left peripheral duct access (Segment 3) - Subxiphoid epigastric approach",
          "Bilateral access required for disconnected biliary systems",
        ],
        defaultSelected: "Right peripheral duct access (Segment 6/7) - Intercostal approach",
      },
      {
        id: "segment_feasibility",
        label: "Segment III (Left) or Segment VI/VII (Right) Access Feasibility",
        options: [
          "Adequate peripheral duct dilatation (>4 mm) with favorable needle angle",
          "Mild peripheral duct dilatation (2-4 mm, requires fluoroscopic micro-puncture)",
          "Extensive intrahepatic tumor replacing segment target",
        ],
        defaultSelected: "Adequate peripheral duct dilatation (>4 mm) with favorable needle angle",
      },
      {
        id: "stricture_length_ampulla",
        label: "Stricture Length and Distance from Ampulla",
        options: [
          "Distal common bile duct stricture (>2 cm from hilum, extending to ampulla)",
          "Hilar stricture involving primary bifurcation (Klatskin tumor)",
          "Mid-duct stricture with intact proximal and distal margins",
          "Benign anastomotic stricture (choledochojejunostomy)",
        ],
        defaultSelected: "Distal common bile duct stricture (>2 cm from hilum, extending to ampulla)",
      },
      {
        id: "ascites_presence",
        label: "Ascites Presence Along Transhepatic Track",
        options: [
          "No ascites along transhepatic track",
          "Mild perihepatic fluid (manageable with tract tamponade)",
          "Moderate to massive ascites (requires therapeutic paracentesis prior to puncture)",
        ],
        defaultSelected: "No ascites along transhepatic track",
      },
    ],
    hardwareRequisition: [
      {
        id: "hw_ptbd_1",
        item: "Chiba Puncture Needle",
        spec: "21G 15cm Chiba Needle with echogenic tip",
        required: true,
      },
      {
        id: "hw_ptbd_2",
        item: "Micropuncture Guidewire",
        spec: "0.018\" Platinum-tip Mandril Guidewire with nitinol core",
        required: true,
      },
      {
        id: "hw_ptbd_3",
        item: "Coaxial Introducer Dilator",
        spec: "6F Coaxial Introducer Dilator (AccuStick / Neff set)",
        required: true,
      },
      {
        id: "hw_ptbd_4",
        item: "Hydrophilic Crossing Guidewire",
        spec: "0.035\" 180cm / 260cm Hydrophilic Glidewire and Amplatz Super-Stiff Guidewire",
        required: true,
      },
      {
        id: "hw_ptbd_5",
        item: "Biliary Manipulation Catheter",
        spec: "5F Kumpe / KMP / Cobra Catheter (65cm)",
        required: true,
      },
      {
        id: "hw_ptbd_6",
        item: "Multi-purpose Drainage Catheter",
        spec: "8F - 10F Multi-purpose Drainage Catheter (Cook Ultrathane / Mac-Loc locking pigtail)",
        required: true,
      },
      {
        id: "hw_ptbd_7",
        item: "Self-Expanding Biliary Stent",
        spec: "Self-expanding Nitinol Biliary Stent (8-10 mm diameter x 60-100 mm length, uncovered or partially covered)",
        required: true,
      },
    ],
    postOpCare: {
      drugs: [
        "IV Antibiotics: Ceftriaxone 1g IV q12h + Metronidazole 500mg IV q8h (continue for 48-72h, adjust per bile culture)",
        "Analgesia: Paracetamol 1g IV q6h + Tramadol 50mg IV q8h PRN for biliary capsular pain",
        "Catheter Flushing: Sterile saline flush 10 mL twice daily through 3-way stopcock to prevent sludge occlusion",
        "Ursodeoxycholic acid 300mg oral BD upon resumption of oral intake",
      ],
      monitoring: [
        "Gravity drainage bag monitoring (daily bile output volume and color, watching for dark thick bile transition or frank hemobilia)",
        "Monitor for hemobilia or biliary peritonitis (acute peritoneal signs, severe pain, tachycardia)",
        "Daily LFT monitoring to verify declining serum bilirubin levels",
        "Puncture site dressing checks for pericatheter bile soakage",
      ],
      dischargeCriteria:
        "Stable internal-external biliary drainage, declining serum bilirubin, afebrile without signs of cholangitis for >48h, clear bile output, catheter securely locked to skin with dry dressing, patient/caregiver trained on bag maintenance.",
    },
  },

  // =========================================================================
  // 6. PERCUTANEOUS CHOLECYSTOSTOMY (PCC)
  // =========================================================================
  {
    key: "percutaneous_cholecystostomy",
    title: "Ultrasound & Fluoroscopy-Guided Percutaneous Cholecystostomy (PCC)",
    organSystem: "Liver & Hepatobiliary",
    modality: "XA",
    clinicalCriteria:
      "Acute calculous or acalculous cholecystitis in critically ill, elderly, or hemodynamically unstable patients who are at high risk for emergency cholecystectomy (APACHE II >12, septic shock).",
    recommendedLabs: [
      "Complete Blood Count (Leukocytosis, Bands, Platelets)",
      "Liver Function Tests (Total Bilirubin, AST, ALT, Alkaline Phosphatase)",
      "Serum Amylase and Lipase",
      "PT/INR (<1.5), aPTT",
      "Blood Cultures (aerobic and anaerobic vials x 2 sets)",
    ],
    specialInvestigations: [
      "Right Upper Quadrant Ultrasound (gallbladder wall thickening >4mm, sonographic Murphy's sign, pericholecystic fluid, luminal distension)",
      "CT Abdomen (evaluates gangrenous changes, intramural gas, perforation, or pericholecystic abscess)",
      "APACHE II / SOFA score risk assessment",
    ],
    calculatorType: null,
    preScanAnatomyChecklist: [
      {
        id: "puncture_route_choice",
        label: "Transhepatic vs Transperitoneal Puncture Route",
        options: [
          "Transhepatic route favored (traverses bare area to minimize bile peritonitis risk)",
          "Transperitoneal route directly through fundus (used if severe coagulopathy or diffuse liver disease)",
          "Retroperitoneal approach",
        ],
        defaultSelected: "Transhepatic route favored (traverses bare area to minimize bile peritonitis risk)",
      },
      {
        id: "parenchymal_bridge",
        label: "Safe Parenchymal Liver Bridge Length (>=2 cm)",
        options: [
          "Adequate liver bridge (>=2 cm parenchymal tissue between capsule and GB)",
          "Borderline liver bridge (1 - 2 cm)",
          "Minimal parenchymal bridge (<1 cm, requires careful fundic approach)",
        ],
        defaultSelected: "Adequate liver bridge (>=2 cm parenchymal tissue between capsule and GB)",
      },
      {
        id: "intercostal_pleural",
        label: "Intercostal Vessel and Pleural Reflection Location",
        options: [
          "Subcostal access cleanly below 10th rib margin (completely avoids pleura)",
          "Intercostal 10th-11th space access with real-time US verification of costophrenic angle",
          "High pleural reflection crossing path (Contraindicated)",
        ],
        defaultSelected: "Subcostal access cleanly below 10th rib margin (completely avoids pleura)",
      },
      {
        id: "cholelithiasis_status",
        label: "Gallbladder Luminal Status & Calculi",
        options: [
          "Acalculous distended sludge and purulent empyema",
          "Impacted stone in gallbladder neck / cystic duct",
          "Multiple mobile cholelithiasis",
          "Gangrenous sloughed mucosal membranes",
        ],
        defaultSelected: "Acalculous distended sludge and purulent empyema",
      },
    ],
    hardwareRequisition: [
      {
        id: "hw_pcc_1",
        item: "Ultrasound Probe & Sterile Sheath",
        spec: "Ultrasound probe with sterile sheath, needle guide bracket, and acoustic gel",
        required: true,
      },
      {
        id: "hw_pcc_2",
        item: "Puncture Needle / Micropuncture Set",
        spec: "18G Trocar Needle or 21G Chiba with 0.018\" Micropuncture set",
        required: true,
      },
      {
        id: "hw_pcc_3",
        item: "J-Tip Guidewire",
        spec: "0.035\" 150cm J-tip Guidewire with fixed core",
        required: true,
      },
      {
        id: "hw_pcc_4",
        item: "Fascial Dilators",
        spec: "6F, 8F, and 10F Coaxial Fascial Dilators",
        required: true,
      },
      {
        id: "hw_pcc_5",
        item: "Locking Drainage Catheter",
        spec: "8F - 10F Pigtail Locking Drainage Catheter with trochar stiffener (Cook Ultrathane / Merit ReSolve)",
        required: true,
      },
      {
        id: "hw_pcc_6",
        item: "Aspiration Syringe & Culture Vials",
        spec: "Bile aspiration syringe and specimen culture vials (aerobic, anaerobic, fungal)",
        required: true,
      },
      {
        id: "hw_pcc_7",
        item: "External Drainage Bag",
        spec: "External gravity drainage collection bag with connecting tube and anti-reflux valve",
        required: true,
      },
    ],
    postOpCare: {
      drugs: [
        "Broad-spectrum IV Antibiotics: Piperacillin-Tazobactam 4.5g IV q8h or Meropenem 1g IV q8h adjusted based on bile culture results",
        "Analgesia: Paracetamol 1g IV q6h + Tramadol 50mg PRN for abdominal wall pain",
        "Catheter Flushing: Catheter flush with 5-10 mL sterile saline daily under sterile technique to maintain patency",
      ],
      monitoring: [
        "External gravity drainage bag: record 24h biliary output volume and character (purulent vs bilious)",
        "Vital signs and temperature curve monitoring for resolution of sepsis / SIRS criteria",
        "Inspect puncture site dressing for bile leak or hemorrhage",
        "Tubogram at 2 weeks to confirm tract maturation and cystic duct patency before catheter removal",
      ],
      dischargeCriteria:
        "Resolution of sepsis and fever for >48 hours, normalized leukocytosis, catheter draining clear bile freely into bag without leakage, catheter securely sutured to skin, tubogram scheduled at 2 weeks.",
    },
  },

  // =========================================================================
  // 7. PULMONARY AVM EMBOLIZATION (PAVM)
  // =========================================================================
  {
    key: "pulmonary_avm_embo",
    title: "Pulmonary Arteriovenous Malformation (PAVM) Transcatheter Embolization",
    organSystem: "Thoracic & Pulmonary",
    modality: "XA",
    clinicalCriteria:
      "Pulmonary AVM with feeding artery diameter >=2-3 mm, or associated with paradoxical systemic embolization, brain abscess, TIA/stroke, or refractory hypoxemia (Hereditary Hemorrhagic Telangiectasia - HHT / Osler-Weber-Rendu syndrome).",
    recommendedLabs: [
      "Complete Blood Count (Polycythemia, Hematocrit, Hemoglobin, Platelets)",
      "PT/INR (<1.5), aPTT",
      "Serum Creatinine and eGFR",
      "Arterial Blood Gas (PaO2, SaO2 on room air and 100% O2)",
      "Serum Ferritin and Iron saturation (screen for chronic epistaxis/GI blood loss)",
    ],
    specialInvestigations: [
      "High-Resolution Thin-Section Chest CT Angiography with 3D volume-rendered MIP reconstructions",
      "Contrast Echocardiography (Shunt grade I-IV with agitated saline bubble study demonstrating late right-to-left cardiac shunt)",
      "Brain MRI with/without contrast (rule out asymptomatic cerebral abscesses, paradoxical emboli, or coexisting cerebral AVMs)",
      "Genetic testing for HHT mutations (ENG, ACVRL1, SMAD4)",
    ],
    calculatorType: null,
    preScanAnatomyChecklist: [
      {
        id: "pavm_architecture",
        label: "Simple vs Complex PAVM Architecture",
        options: [
          "Simple Type (Single subsegmental feeding artery and single draining vein)",
          "Complex Type (Two or more feeding arteries from different segmental origins)",
          "Diffuse Telangiectatic Pulmonary Arteriovenous Malformation",
        ],
        defaultSelected: "Simple Type (Single subsegmental feeding artery and single draining vein)",
      },
      {
        id: "feeding_artery_count",
        label: "Number of Feeding Pulmonary Segmental Arteries",
        options: [
          "Single feeding artery",
          "Dual feeding arteries",
          "Multiple (>=3) feeding arteries",
        ],
        defaultSelected: "Single feeding artery",
      },
      {
        id: "feeder_landing_diameter",
        label: "Feeding Artery Diameter at Landing Zone",
        options: [
          "Moderate Feeding Artery (3 - 5 mm diameter)",
          "Large Feeding Artery (6 - 10 mm diameter)",
          "Small Feeding Artery (2 - 3 mm diameter)",
          "Giant Feeder (>10 mm diameter, requires plug + coil combo)",
        ],
        defaultSelected: "Moderate Feeding Artery (3 - 5 mm diameter)",
      },
      {
        id: "aneurysmal_sac_size",
        label: "Aneurysmal Sac Size",
        options: [
          "Small Sac (<15 mm diameter)",
          "Moderate Sac (15 - 25 mm diameter)",
          "Large / Giant Sac (>25 mm diameter with high paradoxical migration risk)",
        ],
        defaultSelected: "Small Sac (<15 mm diameter)",
      },
      {
        id: "draining_vein_diameter",
        label: "Draining Pulmonary Vein Diameter",
        options: [
          "Single draining vein (caliber matching feeding artery)",
          "Dilated draining vein (>8 mm)",
          "Multiple draining veins to left atrium",
        ],
        defaultSelected: "Single draining vein (caliber matching feeding artery)",
      },
    ],
    hardwareRequisition: [
      {
        id: "hw_pavm_1",
        item: "Guiding Sheath",
        spec: "6F 90cm Guiding Sheath (Destination / Ansel) via Right Common Femoral Vein",
        required: true,
      },
      {
        id: "hw_pavm_2",
        item: "Angiographic Diagnostic Catheter",
        spec: "5F MPA / Berman angiographic catheter with side holes",
        required: true,
      },
      {
        id: "hw_pavm_3",
        item: "High-Flow Microcatheter",
        spec: "2.4F - 2.8F High-Flow Microcatheter (Renegade HI-FLO / Progreat 2.7F 130-150cm)",
        required: true,
      },
      {
        id: "hw_pavm_4",
        item: "Microvascular Plugs",
        spec: "0.018\" Microvascular Plugs (Amplatzer MVP 3-7 mm / AVP IV) sized 30-50% oversized relative to feeder",
        required: true,
      },
      {
        id: "hw_pavm_5",
        item: "Detachable Coils",
        spec: "Controlled detachable platinum and fibered coils (0.018\" - 0.035\" Interlock / Ruby / Target)",
        required: true,
      },
      {
        id: "hw_pavm_6",
        item: "Exchange Guidewires",
        spec: "0.035\" 260cm Rosen / Amplatz Extra-Stiff Guidewire and 0.014\" 200cm Micro-Guidewire",
        required: true,
      },
    ],
    postOpCare: {
      drugs: [
        "Analgesia: Paracetamol 1g IV/oral q6h + Ibuprofen 400mg TDS or Ketorolac 15mg IV q8h for pleuritic pain",
        "Supplemental Oxygen: Titrated via nasal cannula to maintain SaO2 >92% on room air",
        "Prophylactic Antibiotics: Pre-procedure Cefazolin 1g IV (single dose) to prevent coil colonization",
      ],
      monitoring: [
        "Continuous pulse oximetry monitoring for immediate improvement in arterial oxygen saturation",
        "Monitor for pleuritic chest pain (self-limiting post-embolization pulmonary infarction syndrome, typically resolves in 48-72h)",
        "Femoral vein puncture site compression and bed rest for 4 hours",
        "Repeat CT chest at 6-12 months to verify sac involution and absence of reperfusion",
      ],
      dischargeCriteria:
        "Stable hemodynamics, room air SaO2 improved and stable, pleuritic chest pain well controlled on oral analgesics, puncture site clean with no hematoma, discharge within 24 hours.",
    },
  },

  // =========================================================================
  // 8. PULMONARY EMBOLISM THROMBECTOMY & CDT
  // =========================================================================
  {
    key: "pe_thrombectomy_cdt",
    title: "Catheter-Directed Pulmonary Embolism Thrombectomy & Low-Dose Thrombolysis (CDT)",
    organSystem: "Thoracic & Pulmonary",
    modality: "XA",
    clinicalCriteria:
      "Intermediate-high risk (submassive) or high risk (massive) pulmonary embolism with RV dysfunction, elevated troponin/BNP, and hemodynamic instability or failure to respond to systemic anticoagulation.",
    recommendedLabs: [
      "Cardiac Biomarkers: High-Sensitivity Troponin I/T, NT-proBNP / BNP",
      "Complete Blood Count (Baseline Hb, Hematocrit, Platelets)",
      "Coagulation Profile: PT/INR, aPTT",
      "Serum Fibrinogen (baseline and q6h during lysis)",
      "Serum Creatinine and Blood Urea Nitrogen",
    ],
    specialInvestigations: [
      "CT Pulmonary Angiography (CTPA showing saddle or lobar emboli, RV/LV diameter ratio >0.9)",
      "Transthoracic Echocardiogram (McConnell sign, pulmonary artery systolic pressure, TAPSE <16 mm)",
      "Bilateral Lower Extremity Duplex Ultrasound for deep vein thrombosis (DVT)",
      "PESI / sPESI Risk Score calculation",
    ],
    calculatorType: null,
    preScanAnatomyChecklist: [
      {
        id: "pap_pressures",
        label: "Main Pulmonary Artery Pressure (PAP Mean >25 mmHg)",
        options: [
          "Severe Pulmonary Hypertension (Mean PAP >35 mmHg, Systolic >60 mmHg)",
          "Moderate Pulmonary Hypertension (Mean PAP 25-35 mmHg)",
          "Borderline / Normal PAP (<25 mmHg)",
        ],
        defaultSelected: "Severe Pulmonary Hypertension (Mean PAP >35 mmHg, Systolic >60 mmHg)",
      },
      {
        id: "clot_burden_side",
        label: "Right vs Left Main Pulmonary Artery Clot Burden",
        options: [
          "Bilateral Massive Main & Lobar Thrombus burden",
          "Saddle Embolus straddling bifurcation into Main Branches",
          "Dominant Right Main PA Occlusion",
          "Dominant Left Main PA Occlusion",
        ],
        defaultSelected: "Bilateral Massive Main & Lobar Thrombus burden",
      },
      {
        id: "access_vein_patency",
        label: "Access Vein Patency (Right Common Femoral or Right Internal Jugular Vein)",
        options: [
          "Right Common Femoral Vein patent and fully compressible",
          "Right Internal Jugular Vein patent (favored for straight craniocaudal trajectory)",
          "Left Common Femoral Vein patent",
        ],
        defaultSelected: "Right Common Femoral Vein patent and fully compressible",
      },
      {
        id: "bleeding_risk_stratification",
        label: "Systemic Bleeding Risk & Lysis Contraindication Status",
        options: [
          "No contraindication to low-dose catheter-directed thrombolysis",
          "Recent major surgery (<3 weeks) - Pure mechanical aspiration preferred",
          "Prior intracranial hemorrhage / recent stroke - Lysis strictly contraindicated",
          "Active gastrointestinal bleeding - Mechanical thrombectomy only",
        ],
        defaultSelected: "No contraindication to low-dose catheter-directed thrombolysis",
      },
    ],
    hardwareRequisition: [
      {
        id: "hw_pe_1",
        item: "Long Introducer Sheath",
        spec: "8F - 10F Long Sheath (or 20F - 24F for large-bore aspiration e.g. Inari FlowTriever / Penumbra Lightning 12)",
        required: true,
      },
      {
        id: "hw_pe_2",
        item: "Pulmonary Angiographic Catheter",
        spec: "5F Grollman / Pigtail catheter for pulmonary angiography and pressure monitoring",
        required: true,
      },
      {
        id: "hw_pe_3",
        item: "CDT / Aspiration System",
        spec: "Acoustic pulse thrombolysis catheter (EKOS 106cm / 135cm) or Large-bore Mechanical Aspiration system",
        required: true,
      },
      {
        id: "hw_pe_4",
        item: "Heavy Duty Exchange Guidewire",
        spec: "0.035\" 260cm Amplatz Super-Stiff or Rosen Guidewire",
        required: true,
      },
      {
        id: "hw_pe_5",
        item: "Thrombolytic Agent",
        spec: "Recombinant tissue plasminogen activator (Alteplase r-tPA) infusion protocol (0.5 - 1.0 mg/hr/catheter)",
        required: true,
      },
      {
        id: "hw_pe_6",
        item: "Concurrent Heparin Infusion Set",
        spec: "Low-dose unfractionated heparin infusion via sheath sidearm (300-500 units/hr)",
        required: true,
      },
      {
        id: "hw_pe_7",
        item: "Pressure Transducer Kit",
        spec: "Dedicated continuous invasive hemodynamic pressure transducer for PAP monitoring",
        required: true,
      },
    ],
    postOpCare: {
      drugs: [
        "Targeted Low-Dose Thrombolysis: Alteplase (r-tPA) 0.5 - 1.0 mg/hr/catheter via precision electronic pump (halt tPA if fibrinogen <150 mg/dL)",
        "Unfractionated Heparin infusion titrated to aPTT 60-80s (low intensity aPTT 40-60s during concurrent lysis)",
        "Analgesia: IV Paracetamol 1g q6h PRN",
        "Transition to full-dose oral DOAC (Apixaban 10mg BD or Rivaroxaban 15mg BD) after sheath removal and hemostasis",
      ],
      monitoring: [
        "ICU bed rest with continuous PAP and arterial line hemodynamic monitoring",
        "Serial fibrinogen levels every 6 hours during lysis (halt tPA if fibrinogen <150 mg/dL)",
        "Serial neurological checks and puncture site inspection q1h to detect bleeding",
        "Repeat echocardiogram at 24h to document recovery of RV strain and RV/LV ratio",
      ],
      dischargeCriteria:
        "Hemodynamic stability off inotropes, successful catheter removal with hemostasis, normalized oxygenation on room air, resolved RV strain on follow-up echocardiogram, therapeutic oral anticoagulation established.",
    },
  },

  // =========================================================================
  // 9. TEVAR FOR AORTIC DISSECTION & ANEURYSM
  // =========================================================================
  {
    key: "tevar_aortic_dissection",
    title: "Thoracic Endovascular Aortic Repair (TEVAR) for Aortic Dissection & Aneurysm",
    organSystem: "Aortic & Complex",
    modality: "XA",
    clinicalCriteria:
      "Complicated acute Type B aortic dissection (malperfusion syndrome, refractory pain, rapid expansion, impending rupture) or descending thoracic aortic aneurysm >=5.5 cm.",
    recommendedLabs: [
      "Complete Blood Count (Hb, Hematocrit, Platelets)",
      "Blood Typing & 4 Units PRBC Crossmatched and on hold",
      "Renal Function Tests (Serum Creatinine, BUN, eGFR)",
      "Coagulation Profile (PT/INR, aPTT, Fibrinogen)",
      "Baseline Cardiac Biomarkers (Troponin, ECG)",
    ],
    specialInvestigations: [
      "ECG-Gated CT Angiography from Carotid to Femoral bifurcations (thin-slice <=1 mm)",
      "True and false lumen diameter measurements and entry tear location",
      "Distance from left subclavian artery (LSA) origin to entry tear (Zone 2 vs Zone 3)",
      "Visceral and renal vessel origin from true vs false lumen (malperfusion assessment)",
      "Spinal cord collateral circulation assessment (vertebral, internal mammary, intercostal, hypogastric)",
    ],
    calculatorType: "cigarroa",
    preScanAnatomyChecklist: [
      {
        id: "proximal_landing_zone",
        label: "Proximal Landing Zone Length (>=20 mm) and Diameter",
        options: [
          "Zone 3 Landing (>=20 mm healthy aorta distal to LSA origin)",
          "Zone 2 Landing (Requires coverage of Left Subclavian Artery)",
          "Zone 1 / Zone 0 Landing (Requires open surgical debranching or chimney)",
        ],
        defaultSelected: "Zone 3 Landing (>=20 mm healthy aorta distal to LSA origin)",
      },
      {
        id: "lsa_revascularization",
        label: "LSA Coverage Requirement and Revascularization Plan",
        options: [
          "LSA preserved with >20 mm clearance",
          "LSA covered with Carotid-Subclavian bypass or transposition",
          "LSA covered with chimney / castellated stent",
          "LSA covered without revascularization (dominant right vertebral and intact circle of Willis)",
        ],
        defaultSelected: "LSA preserved with >20 mm clearance",
      },
      {
        id: "distal_landing_zone",
        label: "Distal Landing Zone Status",
        options: [
          "Distal landing in true lumen >=5 cm above celiac axis",
          "Extensive dissection extending into abdominal aorta / visceral segments",
          "Tapered stent-graft required (distal true lumen collapse)",
        ],
        defaultSelected: "Distal landing in true lumen >=5 cm above celiac axis",
      },
      {
        id: "femoral_iliac_access",
        label: "Femoral-Iliac Access Vessel Caliber (>7 mm) and Tortuosity",
        options: [
          "Bilateral Common Femoral Arteries >7 mm without severe calcification",
          "Moderate iliofemoral stenosis (requires pre-dilatation)",
          "Severe iliofemoral calcification / tortuosity (requires retroperitoneal conduit)",
        ],
        defaultSelected: "Bilateral Common Femoral Arteries >7 mm without severe calcification",
      },
    ],
    hardwareRequisition: [
      {
        id: "hw_tevar_1",
        item: "Large-Bore Delivery Sheath",
        spec: "20F - 24F Delivery Sheath (Gore DrySeal / Cook Check-Flo) 33-45cm",
        required: true,
      },
      {
        id: "hw_tevar_2",
        item: "Marker Pigtail Catheter",
        spec: "5F Pigtail Marker Catheter (cm graduated radio-opaque markings)",
        required: true,
      },
      {
        id: "hw_tevar_3",
        item: "Extra-Stiff Guidewires",
        spec: "0.035\" 260cm Lunderquist / Meier Extra-Stiff Guidewires",
        required: true,
      },
      {
        id: "hw_tevar_4",
        item: "Thoracic Endovascular Stent-Graft",
        spec: "Thoracic Endovascular Stent-Graft (Gore TAG / Medtronic Valiant / Cook Zenith Alpha)",
        required: true,
      },
      {
        id: "hw_tevar_5",
        item: "CSF Spinal Drain Catheter",
        spec: "Cerebrospinal fluid (CSF) spinal drain catheter (to prevent spinal cord ischemia/paraplegia)",
        required: true,
      },
      {
        id: "hw_tevar_6",
        item: "Rapid Ventricular Pacing Wire",
        spec: "Rapid ventricular pacing wire (if hypotensive deployment chosen)",
        required: false,
      },
      {
        id: "hw_tevar_7",
        item: "Vascular Closure Devices",
        spec: "Dual Perclose ProGlide / ProStyle vascular closure devices for pre-close technique",
        required: true,
      },
    ],
    postOpCare: {
      drugs: [
        "Strict Anti-Impulse Blood Pressure Control: IV Esmolol or Labetalol infusion titrated to maintain SBP 100-120 mmHg and HR <60 bpm",
        "Mean Arterial Pressure Management: Maintain MAP >85-90 mmHg to protect Adamkiewicz spinal cord perfusion",
        "Analgesia: IV Fentanyl PCA or scheduled Paracetamol 1g q6h",
        "Antiplatelet Therapy: Aspirin 81-100mg daily from POD 1",
      ],
      monitoring: [
        "CVICU admission with arterial line and spinal drain pressure monitoring (keep CSF pressure <10-12 mmHg, MAP >85-90 mmHg to protect Adamkiewicz spinal cord perfusion)",
        "Distal pedal pulse palpation q1h (dorsalis pedis, posterior tibial)",
        "Neurological lower extremity motor and sensory exam q1h x 24h to detect spinal cord ischemia",
        "CTA aorta at 1 month to assess endograft position, true lumen expansion, and absence of endoleak",
      ],
      dischargeCriteria:
        "Hemodynamically stable with blood pressure well controlled on oral antihypertensives, neurologically intact with normal motor power in lower extremities, spinal drain safely removed with dry puncture site, groin access sites healed without hematoma or pseudoaneurysm.",
    },
  },

  // =========================================================================
  // 10. SUPERIOR VENA CAVA (SVC) STENTING
  // =========================================================================
  {
    key: "svc_stenting",
    title: "Superior Vena Cava (SVC) Recanalization & Endovascular Stenting",
    organSystem: "Thoracic & Pulmonary",
    modality: "XA",
    clinicalCriteria:
      "Severe symptomatic Superior Vena Cava Syndrome (facial/neck edema, dyspnea, orthopnea, headache, venous engorgement) secondary to thoracic malignancy (lung cancer, lymphoma) or benign central vein catheter thrombosis.",
    recommendedLabs: [
      "Complete Blood Count (Hb, Platelets >50,000/uL)",
      "PT/INR (<1.5), aPTT",
      "Serum Creatinine and BUN",
      "Serum Electrolytes (Sodium, Potassium, Chloride, Bicarbonate)",
    ],
    specialInvestigations: [
      "Contrast-Enhanced Chest CT with upper extremity venous phase showing SVC occlusion and collateral azygos pathways",
      "Venous pressure gradient measurement across obstruction (diagnostic if gradient >4-8 mmHg)",
      "Venous duplex ultrasound of internal jugular, subclavian, and axillary veins",
      "Histopathological confirmation of underlying malignancy",
    ],
    calculatorType: null,
    preScanAnatomyChecklist: [
      {
        id: "puncturable_access_sites",
        label: "Puncturable Access Sites (Right Femoral + Right Basilic/Brachial for Through-and-Through Wire)",
        options: [
          "Combined Right Femoral + Right Basilic/Brachial access (through-and-through wire)",
          "Right Common Femoral access alone (caudocranial)",
          "Right Internal Jugular or Right Axillary access alone (craniocaudal)",
        ],
        defaultSelected: "Combined Right Femoral + Right Basilic/Brachial access (through-and-through wire)",
      },
      {
        id: "landing_zones_cranial_caudal",
        label: "Cranial and Caudal Landing Zones",
        options: [
          "Adequate landing zones (>=15 mm clearance from right atrium and innominate confluence)",
          "Short caudal landing zone (<10 mm from cavoatrial junction)",
          "Stent extension into Upper Right Atrium required",
        ],
        defaultSelected: "Adequate landing zones (>=15 mm clearance from right atrium and innominate confluence)",
      },
      {
        id: "ra_junction_distance",
        label: "Right Atrium Junction Distance",
        options: [
          "Clear >15 mm distance above cavoatrial junction",
          "Stenosis extends immediately adjacent to cavoatrial junction (<5 mm)",
          "Involvement of upper right atrium",
        ],
        defaultSelected: "Clear >15 mm distance above cavoatrial junction",
      },
      {
        id: "ijv_brachiocephalic_confluence",
        label: "Internal Jugular and Brachiocephalic Vein Confluence Involvement",
        options: [
          "Isolated SVC stenosis with patent brachiocephalic veins",
          "Bilateral Brachiocephalic Vein confluence involvement (Kissing / bifurcated stenting required)",
          "Unilateral Right Brachiocephalic occlusion",
          "Unilateral Left Brachiocephalic occlusion",
        ],
        defaultSelected: "Isolated SVC stenosis with patent brachiocephalic veins",
      },
    ],
    hardwareRequisition: [
      {
        id: "hw_svc_1",
        item: "Long Guiding Sheath",
        spec: "10F - 12F 45cm Ansel Sheath (Femoral) and 6F - 7F 45cm Sheath (Brachial/Jugular)",
        required: true,
      },
      {
        id: "hw_svc_2",
        item: "Stiff Crossing Guidewires",
        spec: "0.035\" 260cm Stiff Hydrophilic Glidewire and Amplatz Extra-Stiff",
        required: true,
      },
      {
        id: "hw_svc_3",
        item: "High-Pressure Angioplasty Balloon",
        spec: "High-pressure angioplasty balloon (Atlas / Conquest 10-14 mm x 40 mm)",
        required: true,
      },
      {
        id: "hw_svc_4",
        item: "Large-Bore Venous Stent",
        spec: "Large-bore self-expanding stent (Boston Scientific Wallstent 16-20 mm x 60-90 mm, or Bard Venovo / Cook Z-Stent)",
        required: true,
      },
      {
        id: "hw_svc_5",
        item: "Vascular Snare System",
        spec: "GooseNeck Snare (10-15 mm) for flossing through-and-through wire",
        required: true,
      },
      {
        id: "hw_svc_6",
        item: "Diagnostic Angiographic Catheter",
        spec: "5F 100cm Multipurpose (MPA) or Kumpe catheter for pull-back venography and pressure gradient measurement",
        required: true,
      },
    ],
    postOpCare: {
      drugs: [
        "Immediate head-of-bed elevation 45 degrees to facilitate upper body venous drainage",
        "Dexamethasone 4mg IV q6h to prevent post-expansion airway and mediastinal edema (tapered over 48 hours)",
        "Systemic Anticoagulation: Therapeutic dosing Low Molecular Weight Heparin (Enoxaparin 1 mg/kg s/c q12h), transitioning to oral DOAC (Apixaban 5mg BD)",
        "Analgesia: Paracetamol 1g IV q6h PRN for chest tightness",
      ],
      monitoring: [
        "Continuous monitoring for resolution of facial plethoric engorgement within 24h",
        "Respiratory rate and airway monitoring for stridor or laryngeal edema",
        "Post-stenting pull-back venous pressure gradient recording (target residual gradient <2-3 mmHg)",
        "Puncture site monitoring (femoral and arm/neck) q1h x 4h",
      ],
      dischargeCriteria:
        "Marked resolution of facial plethoric engorgement and dyspnea within 24h, stable airway with no edema, puncture sites healed without hematoma, established on therapeutic oral anticoagulation, discharge within 24-48 hours.",
    },
  },
];

export function getIoAndThoracicProtocolByKey(key: string): IRClinicalProtocol | undefined {
  return IO_AND_THORACIC_PROTOCOLS.find((p) => p.key === key);
}
