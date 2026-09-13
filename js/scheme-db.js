/**
 * SMS Jaipur - Interventional Radiology Complete Scheme & Drug Master Database
 * Extracted directly from SMS Hospital Department Noticeboard & Counter Notices
 * Covers: Mukhya Mantri Ayushman Arogya (Chiranjeevi/MAAY), RGHS, DDC Counters & RMSCL Kits
 */

const SMS_IR_SCHEME_DB = {
  // MAAY / Chiranjeevi / Ayushman Packages
  maay: [
    { 
      code: "2849-IN061A", 
      name: "cTACE (Conventional TACE)", 
      price: 47960, 
      category: "Vascular Interventional Oncology",
      icd10: "C22.0",
      implants: [
        { code: "IMP 38", name: "Lipiodol", price: 18000 }, 
        { code: "IMP 39", name: "Microcatheter System", price: 19000 }
      ], 
      docs: "Pre-CT/MRI abdomen report, Pre-embolization selective hepatic angiogram run, Post-Embolization stasis run, Lipiodol & Doxorubicin empty vial photo/barcode." 
    },
    { 
      code: "2849-IN061B", 
      name: "DEB TACE (Drug-Eluting Bead TACE)", 
      price: 41160, 
      category: "Vascular Interventional Oncology",
      icd10: "C22.0",
      implants: [
        { code: "IMP 40", name: "DEB Beads (Drug Eluting Beads)", price: 50000 }, 
        { code: "IMP 41", name: "Microcatheter System", price: 19000 }
      ], 
      docs: "Pre-CT/MRI, Selective Hepatic Angiogram run, Post-DEB stasis run, DEB Bead vial barcodes." 
    },
    { 
      code: "2849-MC018A", 
      name: "Bronchial Artery Embolisation (BAE)", 
      price: 30000, 
      category: "Vascular Embolization",
      icd10: "R04.2 / A15.0",
      implants: [
        { code: "IMP 22", name: "PVA Particles", price: 5500 }, 
        { code: "IMP 23", name: "Microcatheter System", price: 19000 }
      ], 
      docs: "Pre-CT Angio Thorax, Aortogram, Selective Bronchial & NBSA runs, Post-embolization completion runs." 
    },
    { 
      code: "1849-SG105 A", 
      name: "PTBD External (Percutaneous Transhepatic Biliary Drainage)", 
      price: 16000, 
      category: "Biliary Interventions",
      icd10: "C24.0 / K83.1",
      implants: [], 
      docs: "Pre-MRCP/CECT, Chiba needle puncture spot film, Cholangiogram, Drain placement confirmation spot radiograph." 
    },
    { 
      code: "2849-IN006A", 
      name: "Primary SEMS (Self-Expanding Metallic Stent - Biliary/Vascular)", 
      price: 25000, 
      category: "Biliary / Vascular Stenting",
      icd10: "C24.0 / K83.1",
      implants: [
        { code: "IMP 381", name: "Metallic Stent (SEMS)", price: 37000 }
      ], 
      docs: "Pre-imaging, Stricture negotiation guide wire film, Stent deployment confirmation spot radiograph." 
    },
    { 
      code: "2849-IN006B", 
      name: "SEMS Placement", 
      price: 28360, 
      category: "Biliary / Vascular Stenting",
      icd10: "C24.0",
      implants: [], 
      docs: "Spot radiographs pre and post stent deployment." 
    },
    { 
      code: "1849-IN057A", 
      name: "Image Guided Percutaneous: Drainage / Biliary Drainage / Cholecystostomy / Sclerotherapy", 
      price: 7000, 
      category: "Non-Vascular Drainage",
      icd10: "N13.3 / K82.8 / R93.2",
      implants: [], 
      docs: "Pre-USG/CT, Needle/catheter localization spot film, Post-drainage confirmation." 
    },
    { 
      code: "1849-IN056A", 
      name: "Percutaneous Cholecystostomy", 
      price: 17640, 
      category: "Biliary Drainage",
      icd10: "K81.0",
      implants: [], 
      docs: "Pre-USG/CT showing distended gallbladder, Transhepatic puncture spot film, Catheter-in-gallbladder lumen film." 
    },
    { 
      code: "1849-MG076A", 
      name: "Image-Guided Biopsy (Tru-Cut / Core)", 
      price: 5000, 
      category: "Diagnostic Interventions",
      icd10: "R93.2",
      implants: [], 
      docs: "Pre-imaging report, Needle-in-lesion spot image (CT/USG), Biopsy requisition form." 
    },
    { 
      code: "2849-IN059A", 
      name: "Transjugular Liver Biopsy (TJLB)", 
      price: 8000, 
      category: "Diagnostic / Hepatic Interventions",
      icd10: "K74.6",
      implants: [
        { code: "IMP 36", name: "LABS Biopsy Set", price: 30000 }
      ], 
      docs: "Pre-coagulation profile, RIJV access venogram, Hepatic venogram, Pressure measurement, Biopsy core confirmation." 
    },
    { 
      code: "1849-IN008A", 
      name: "HVPG (Hepatic Venous Pressure Gradient)", 
      price: 8000, 
      category: "Hepatic Hemodynamics",
      icd10: "K76.6",
      implants: [], 
      docs: "Free and Wedged Hepatic Venous Pressure tracing curves, IVC pressure trace." 
    },
    { 
      code: "2849-IN017B", 
      name: "PVA Embolisation (UAE / Trauma / GI Bleed)", 
      price: 30400, 
      category: "Vascular Embolization",
      icd10: "D25.9 / K92.2",
      implants: [
        { code: "IMP 22", name: "PVA Particles (Max 4)", price: 5500 }, 
        { code: "IMP 23", name: "Microcatheter System", price: 19000 }
      ], 
      docs: "Diagnostic angiogram, Microcatheter superselective run, Post-PVA stasis completion run." 
    },
    { 
      code: "2849-IN020B", 
      name: "Coil Embolisation", 
      price: 30340, 
      category: "Vascular Embolization",
      icd10: "I77.0 / I72.9",
      implants: [
        { code: "IMP 379", name: "Microcatheter System", price: 19000 }, 
        { code: "IMP 380", name: "Coils (Max 3)", price: 21700 }
      ], 
      docs: "Pre-embolization diagnostic run, Coil deployment spot radiograph, Post-embolization completion run." 
    },
    { 
      code: "2849-IN080ARJ", 
      name: "Extra Coils", 
      price: 0, 
      category: "Vascular Consumables",
      icd10: "I77.0",
      implants: [
        { code: "IMP 396", name: "Detachable Coil (Max 2)", price: 24000 }, 
        { code: "IMP 397", name: "Pushable Coil", price: 9000 }
      ], 
      docs: "Attached with primary embolization procedure documentation." 
    },
    { 
      code: "2849-IN018B", 
      name: "Glue Embolisation (AVM / Pseudoaneurysm)", 
      price: 32360, 
      category: "Vascular Embolization",
      icd10: "I77.0 / Q27.3",
      implants: [
        { code: "Lipiodol", name: "Lipiodol", price: 18000 }, 
        { code: "IMP 20", name: "Microcatheter System", price: 19000 }, 
        { code: "IMP 21", name: "2 Coils", price: 7900 }
      ], 
      docs: "Pre-angio, Microcatheter injection run, Glue cast spot radiograph." 
    },
    { 
      code: "2849-IN019B", 
      name: "Gel Foam Embolisation", 
      price: 23480, 
      category: "Vascular Embolization",
      icd10: "K92.2",
      implants: [
        { code: "IMP 24", name: "Microcatheter System", price: 19000 }
      ], 
      docs: "Pre and post embolization angiograms." 
    },
    { 
      code: "2849-IN026C", 
      name: "Angioplasty & Bare Metal Stenting (Venous)", 
      price: 35440, 
      category: "Venous Interventions",
      icd10: "I87.1",
      implants: [
        { code: "IMP 385", name: "Balloon Catheter", price: 9800 }, 
        { code: "IMP 386", name: "High Pressure Large Balloon", price: 18800 }, 
        { code: "IMP 387", name: "Metallic Stent", price: 37000 }
      ], 
      docs: "Pre-angioplasty venogram, Balloon inflation spot film, Stent deployment completion venogram." 
    },
    { 
      code: "2849-IN026E", 
      name: "Angioplasty & Covered Stent Placement (Venous)", 
      price: 45080, 
      category: "Venous Interventions",
      icd10: "I87.1",
      implants: [
        { code: "IMP 389", name: "High Pressure Balloon", price: 18800 }, 
        { code: "IMP 390", name: "Covered Stent", price: 95000 }
      ], 
      docs: "Pre-venogram, Stent positioning radiograph, Post-deployment completion venogram." 
    },
    { 
      code: "2849-IN024A", 
      name: "CDT (Catheter-Directed Thrombolysis)", 
      price: 35280, 
      category: "Thrombolysis / Venous",
      icd10: "I82.40",
      implants: [
        { code: "IMP 295", name: "Multi-Sidehole Catheter", price: 1180 }, 
        { code: "IMP 296", name: "Thrombectomy Catheter", price: 95000 }
      ], 
      docs: "Pre-lysis venogram with thrombus load, Infusion catheter position film, Check lysis venogram." 
    },
    { 
      code: "2849-IN025A", 
      name: "Thrombectomy Followed by Thrombolysis", 
      price: 43680, 
      category: "Thrombolysis / Venous",
      icd10: "I82.40",
      implants: [
        { code: "IMP 295", name: "Multi-Sidehole Catheter", price: 1180 }, 
        { code: "IMP 296", name: "Thrombectomy Catheter", price: 95000 }
      ], 
      docs: "Venogram showing clot, Mechanical device radiograph, Post-clearance run." 
    },
    { 
      code: "2849-IN076A", 
      name: "Fistuloplasty / Thrombectomy of Dialysis Fistula", 
      price: 32440, 
      category: "Dialysis Access Salvage",
      icd10: "T82.8",
      implants: [
        { code: "IMP 394", name: "Fistuloplasty High-Pressure Balloon", price: 9800 }
      ], 
      docs: "Fistulogram showing stenosis, Balloon dilatation waist-effacement film, Post-plasty fistulogram." 
    },
    { 
      code: "2849-IN049B", 
      name: "AV Fistula / AVM Embolization", 
      price: 104300, 
      category: "Vascular Malformations",
      icd10: "Q27.3",
      implants: [], 
      docs: "Diagnostic angiogram, Superselective microcatheter run, Post-embolization completion." 
    },
    { 
      code: "2849-IN063A", 
      name: "BRTO (Balloon-Occluded Retrograde Transvenous Obliteration)", 
      price: 40760, 
      category: "Portal HTN / Variceal Bleed",
      icd10: "I85.0",
      implants: [
        { code: "IMP 46", name: "Lipiodol", price: 18000 }, 
        { code: "IMP 47", name: "Microcatheter System", price: 19000 }, 
        { code: "IMP 48", name: "Coils (2)", price: 7900 }
      ], 
      docs: "Left Renal Venogram, Gastrorenal Shunt occlusion venography, Sclerosant fill radiograph." 
    },
    { 
      code: "2849-IN064A", 
      name: "PARTO (Plug-Assisted Retrograde Transvenous Obliteration)", 
      price: 46020, 
      category: "Portal HTN / Variceal Bleed",
      icd10: "I85.0",
      implants: [
        { code: "IMP 49", name: "Vascular Plug", price: 44000 }, 
        { code: "IMP 50", name: "Coil", price: 7900 }, 
        { code: "IMP 51", name: "Lipiodol", price: 18000 }
      ], 
      docs: "Gastrorenal shunt venogram, Vascular plug deployment confirmation, Gelfoam/sclerosant stasis run." 
    },
    { 
      code: "2849-IN065A", 
      name: "Portal Vein Embolization (PVE)", 
      price: 26680, 
      category: "Interventional Oncology",
      icd10: "C22.0 / C24.0",
      implants: [
        { code: "IMP 46", name: "Lipiodol", price: 18000 }, 
        { code: "IMP 47", name: "Microcatheter System", price: 19000 }, 
        { code: "IMP 48", name: "Coils (2)", price: 7900 }
      ], 
      docs: "Transhepatic portogram, Ipsilateral portal branch embolization film, Sparing of future liver remnant." 
    },
    { 
      code: "2849-IN022A", 
      name: "Vascular Plug Assisted Embolisation", 
      price: 39280, 
      category: "Vascular Embolization",
      icd10: "I77.0",
      implants: [
        { code: "IMP 25", name: "Vascular Plug", price: 44000 }, 
        { code: "IMP 26", name: "Coil", price: 13800 }
      ], 
      docs: "Pre-angio, Plug positioning spot film, Post-release stasis run." 
    },
    { 
      code: "2849-IN044A", 
      name: "RFA Osteoid Osteoma", 
      price: 25440, 
      category: "Musculoskeletal Oncology",
      icd10: "M89.8",
      implants: [
        { code: "IMP 34", name: "RF Probe", price: 75000 }
      ], 
      docs: "CT scan showing nidus, Cannula & RF electrode in nidus, Post-ablation scan." 
    },
    { 
      code: "2849-IN071A", 
      name: "MWA: Breast, Thyroid", 
      price: 29440, 
      category: "Thermal Ablation",
      icd10: "E04.1 / N63",
      implants: [
        { code: "IMP 53", name: "MW Antenna", price: 95000 }
      ], 
      docs: "Pre-USG/CT, Antenna in lesion, Post-ablation hyperechoic cloud confirmation." 
    },
    { 
      code: "2849-IN009A", 
      name: "Tunnelled Long-Term Venous Catheter (Permacath)", 
      price: 11000, 
      category: "Dialysis Access",
      icd10: "Z49.0",
      implants: [
        { code: "IMP 16", name: "Permacath Kit", price: 14000 }
      ], 
      docs: "RIJV access, Subcutaneous tunnel, Tip at cavoatrial junction spot radiograph." 
    },
    { 
      code: "2849-IN010A", 
      name: "Tunnelled Longterm Indwelling Catheter for Refractory Ascites/Pleural Effusion", 
      price: 7000, 
      category: "Palliative Drainage",
      icd10: "R18.8 / J90",
      implants: [
        { code: "IMP 17", name: "Pleurex Kit", price: 32000 }
      ], 
      docs: "Pre-USG, Tunnelled catheter position spot radiograph." 
    },
    { 
      code: "2849-IN066A", 
      name: "Ganglion / Plexus Block (Celiac/Lumbar)", 
      price: 9120, 
      category: "Pain Management",
      icd10: "R52",
      implants: [], 
      docs: "CT/Fluoroscopy needle placement around celiac axis/aorta, Contrast spread confirmation." 
    },
    { 
      code: "2849-IN023D", 
      name: "Arterial CTO Lesion Angioplasty", 
      price: 35000, 
      category: "Peripheral Arterial Interventions",
      icd10: "I70.2",
      implants: [
        { code: "IMP 28", name: "Balloon Catheter", price: 9800 }, 
        { code: "IMP 29", name: "Metallic Stent", price: 37000 }
      ], 
      docs: "Pre-CTO angiogram, Wire crossing confirmation, Post-stent lumen restoration run." 
    },
    { 
      code: "2849-IN028A", 
      name: "Complex Angioplasty (Cutting / DCB)", 
      price: 53160, 
      category: "Peripheral Arterial Interventions",
      icd10: "I70.2",
      implants: [
        { code: "IMP 32", name: "DCB / Cutting Balloon", price: 42000 }
      ], 
      docs: "Angiogram, Balloon inflation film, Post-plasty completion run." 
    },
    { 
      code: "2849-MC003B", 
      name: "Balloon Dilation for Pulmonary Artery Stenosis", 
      price: 60800, 
      category: "Pulmonary Vascular",
      icd10: "I28.8",
      implants: [], 
      docs: "Right heart cath, PA angiogram, Balloon waist effacement, Post-dilation pressure gradient." 
    },
    { 
      code: "1849-MG075A", 
      name: "CT / MRI / Nuclear Scans", 
      price: 5000, 
      category: "Diagnostic Imaging",
      icd10: "Z01.89",
      implants: [], 
      docs: "Cross-sectional imaging report." 
    }
  ],

  // RGHS (Rajasthan Government Health Scheme) Codes
  rghs: [
    { code: "693", name: "Interventional radiographic arterial embolization (TAE/TACE/BAE/UAE)" },
    { code: "492", name: "Laser ablation of varicose veins (EVLA)" },
    { code: "579", name: "CT Guided biopsy" },
    { code: "583", name: "Renal Angioplasty" },
    { code: "362", name: "Drainage of abscess - breast" },
    { code: "381", name: "Trucut Needle Biopsy" },
    { code: "382", name: "Percutaneous Kidney Biopsy" },
    { code: "573", name: "Intra vascular coils" },
    { code: "577", name: "Digital subtraction angiography (DSA) - Peripheral artery" },
    { code: "578", name: "Digital subtraction angiography - venogram" },
    { code: "588", name: "Inferior Vena Cava (IVC) filter implantation" },
    { code: "587", name: "Aortic stent grafting for aortic aneurysm (EVAR/TEVAR)" },
    { code: "661", name: "Balloon Tamponade for Post Partum Haemorrhage (PPH)" },
    { code: "730", name: "Percutaneous Drainage of Perinephric Abscess - Ultrasound guided" },
    { code: "841", name: "Fistologram for Arteriovenous Fistula" },
    { code: "842", name: "Ultrasound guided kidney Biopsy" },
    { code: "843", name: "Fistula stenosis dilation (Fistuloplasty)" },
    { code: "909", name: "Transrectal Ultrasound (TRUS) guided prostate biopsy" },
    { code: "910", name: "Ultrasound Guided Percutaneous Nephrostomy (PCN)" },
    { code: "1307", name: "CBD stricture dilatation" },
    { code: "1308", name: "Biliary stenting (plastic and metallic)" },
    { code: "1318", name: "Percutaneous Transhepatic Biliary Drainage (PTBD)" },
    { code: "1317", name: "Ultrasound guided abscess Drainage" },
    { code: "1316", name: "Ultrasound guided FNAC" },
    { code: "1319", name: "Diagnostic angiography" },
    { code: "1320", name: "Vascular embolization" },
    { code: "1321", name: "Transjugular Intrahepatic Portosystemic Shunt (TIPS)" },
    { code: "1322", name: "Inferior Vena Cava (IVC) Venography & Hepatic Vein (HV) Venography" },
    { code: "1323", name: "Vascular / Muscular stenting" },
    { code: "1324", name: "Balloon-occluded Retrograde Intravenous Obliteration (BRTO)" },
    { code: "1325", name: "Portal hemodynamic studies" },
    { code: "1659", name: "CT Guided Trucut Biopsy" },
    { code: "1660", name: "CT Guided intervention - percutaneous catheter drainage / tube placement" },
    { code: "17 (OPD)", name: "Injection for Varicose Veins (Sclerotherapy)" }
  ],

  // Hospital Pharmacy Indenting & Drug Distribution Counters (SMS Hospital)
  ddc: {
    bleomycinAdmitted: "DDC-14 (Drug Distribution Counter 14 - Admitted / IPD Patients)",
    bleomycinOPD: "DDC-2 (Drug Distribution Counter 2 - OPD Patients)",
    lipiodol: "Central IR Drug Store / OT Block",
    contrast: "RMSCL Store / Main Radiology Counter"
  },

  // RMSCL e-Aushadhi IR Procedure Kits
  kits: {
    tace: [
      { drug: "Inj. Doxorubicin 50 mg", count: "1 vial", source: "RMSCL / Central Store" },
      { drug: "Inj. Lipiodol Ultra-Fluid (Ethiodized Oil 10 ml)", count: "1-2 ampoules", source: "IR OT Store" },
      { drug: "Inj. Gelfoam Sponge Sheet (Absorbable Gelatin)", count: "1 pack", source: "RMSCL" },
      { drug: "Inj. Ondansetron 4 mg / Inj. Pantoprazole 40 mg", count: "2 ampoules each", source: "DDC / Ward" }
    ],
    bae: [
      { drug: "Polyvinyl Alcohol (PVA) Particles 350-500 um / 500-700 um", count: "1 vial", source: "IR OT Store" },
      { drug: "Inj. Tranexamic Acid 500 mg", count: "2 ampoules", source: "RMSCL" },
      { drug: "Inj. Gelfoam Slurry", count: "1 pack", source: "RMSCL" }
    ],
    thrombolysis: [
      { drug: "Inj. Tenecteplase / Alteplase (r-tPA) 20-50 mg", count: "1 vial", source: "Central Pharmacy" },
      { drug: "Inj. Unfractionated Heparin 25,000 IU", count: "1 vial", source: "RMSCL" }
    ],
    bleomycin: [
      { drug: "Inj. Bleomycin 15 IU (Admitted: DDC-14 | OPD: DDC-2)", count: "1 vial", source: "DDC Counter" },
      { drug: "Inj. 2% Lignocaine with Adrenaline", count: "1 vial", source: "RMSCL" },
      { drug: "Inj. Dexamethasone 8 mg", count: "1 ampoule", source: "RMSCL" }
    ]
  }
};
