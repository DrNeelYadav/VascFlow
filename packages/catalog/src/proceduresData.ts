import { IRProcedure } from "./types";

/**
 * Complete 100 Interventional Radiology Procedures Catalog
 * SMS Medical College & Attached Hospitals, Jaipur
 * Production-ready dataset across 6 clinical domains.
 */
export const IR_PROCEDURES_CATALOG: IRProcedure[] = [
  {
    "key": "bae_hemoptysis",
    "title": "Bronchial Artery Embolization (BAE) for Massive Hemoptysis",
    "category": "Vascular Embolization & Hemorrhage",
    "domain": "embolization",
    "modality": "XA",
    "targetVessels": [
      "Right Bronchial Artery",
      "Left Bronchial Artery",
      "Intercostobronchial Trunk",
      "Internal Mammary Artery",
      "Subclavian Collaterals"
    ],
    "defaultPanelCostINR": 42000,
    "requiredLabs": [
      "CBC (Hb, TLC, Platelets)",
      "PT / INR",
      "Serum Creatinine",
      "Blood Group & Crossmatch",
      "Chest CT Angiography"
    ],
    "clinicalCriteria": "Life-threatening hemoptysis (>300 mL/24h), recurrent hemoptysis failing medical management, tuberculosis/bronchiectasis etiology.",
    "preOpChecklist": [
      {
        "id": "bae_cta",
        "label": "Bronchial CTA reviewed for aberrant origins and anterior spinal artery (Adamkiewicz)",
        "required": true
      },
      {
        "id": "bae_intub",
        "label": "Airway protected (endotracheal tube / double-lumen tube ready)",
        "required": true
      },
      {
        "id": "bae_coag",
        "label": "INR <1.5 and Platelets >50,000/uL verified",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Diagnostic Catheter",
        "desc": "5F Mikaelsson / Cobra C2 / Shepherd Hook (Cook / Cordis)"
      },
      {
        "item": "Microcatheter Set",
        "desc": "2.0F - 2.4F Progreat / Renegade HI-FLO with 0.014\" steerable wire"
      },
      {
        "item": "Embolic Particles",
        "desc": "PVA particles 355-500 um / 500-710 um (Contour / Bead Block)"
      },
      {
        "item": "Microcoils",
        "desc": "Pushable / Detachable 0.018\" platinum microcoils for systemic collateral exclusion"
      }
    ]
  },
  {
    "key": "ugib_lga",
    "title": "Upper GI Bleed: Left Gastric Artery (LGA) Superselective Embolization",
    "category": "Vascular Embolization & Hemorrhage",
    "domain": "embolization",
    "modality": "XA",
    "targetVessels": [
      "Celiac Axis",
      "Left Gastric Artery (Anterior/Posterior Branches)",
      "Right Gastric Artery"
    ],
    "defaultPanelCostINR": 38000,
    "requiredLabs": [
      "CBC",
      "PT / INR",
      "Serum Creatinine",
      "UGIE Endoscopy Report",
      "Blood Crossmatch (4 Units PRBC)"
    ],
    "clinicalCriteria": "Refractory peptic ulcer hemorrhage / Dieulafoy lesion failing endoscopic clipping, Forest Ia/Ib ulcers.",
    "preOpChecklist": [
      {
        "id": "ugib_endo",
        "label": "Endoscopy report reviewed with metallic clip landmark located",
        "required": true
      },
      {
        "id": "ugib_resusc",
        "label": "Hemodynamic resuscitation initiated with blood products",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Base Sheath & Catheter",
        "desc": "6F 45cm Balkin sheath + 5F Celiac / Simmons-1 catheter"
      },
      {
        "item": "Microcatheter",
        "desc": "2.4F Progreat 130cm with 0.014\" Glidewire Baby Pro"
      },
      {
        "item": "Embolics",
        "desc": "0.014\"/0.018\" detachable microcoils + Gelfoam slurry / 500um PVA"
      }
    ]
  },
  {
    "key": "ugib_gda",
    "title": "Upper GI Bleed: Gastroduodenal Artery (GDA) Embolization (Sandwich Technique)",
    "category": "Vascular Embolization & Hemorrhage",
    "domain": "embolization",
    "modality": "XA",
    "targetVessels": [
      "Gastroduodenal Artery (GDA)",
      "Common Hepatic Artery",
      "Superior Pancreaticoduodenal",
      "Right Gastroepiploic"
    ],
    "defaultPanelCostINR": 40000,
    "requiredLabs": [
      "CBC",
      "PT / INR",
      "Creatinine",
      "Type & Screen"
    ],
    "clinicalCriteria": "Duodenal ulcer hemorrhage eroding into GDA. Requires proximal and distal coiling (\"sandwich\") to prevent back-bleeding from SMA arcade.",
    "preOpChecklist": [
      {
        "id": "gda_sandwich",
        "label": "Plan for proximal AND distal GDA coiling to prevent SMA collateral reflux",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Catheters",
        "desc": "5F Cobra C2 + 2.0F microcatheter"
      },
      {
        "item": "Coils",
        "desc": "0.018\" Interlock detachable coils (3-6mm) for front-and-back door occlusion"
      }
    ]
  },
  {
    "key": "lgib_embolization",
    "title": "Lower GI Bleed: Superselective Colonic Branch Microcoil Embolization",
    "category": "Vascular Embolization & Hemorrhage",
    "domain": "embolization",
    "modality": "XA",
    "targetVessels": [
      "Superior Mesenteric Artery (SMA)",
      "Inferior Mesenteric Artery (IMA)",
      "Ileocolic",
      "Right Colic",
      "Superior Rectal Artery"
    ],
    "defaultPanelCostINR": 42000,
    "requiredLabs": [
      "CBC",
      "PT / INR",
      "Serum Creatinine",
      "CT Angiography Extravasation Map"
    ],
    "clinicalCriteria": "Diverticular bleed / post-polypectomy hemorrhage / angiodysplasia. Superselective vasa recta catheterization to preserve bowel viability.",
    "preOpChecklist": [
      {
        "id": "lgib_cta",
        "label": "Active arterial extravasation localized on triphasic abdominal CTA",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Microcatheter",
        "desc": "1.9F - 2.1F high-flow microcatheter for terminal vasa recta access"
      },
      {
        "item": "Microcoils",
        "desc": "Soft 0.014\" platinum detachable coils / microfibrillar collagen"
      }
    ]
  },
  {
    "key": "hepatic_pseudoaneurysm",
    "title": "Hepatic Artery Pseudoaneurysm (HAP) Embolization / Covered Stenting",
    "category": "Vascular Embolization & Hemorrhage",
    "domain": "embolization",
    "modality": "XA",
    "targetVessels": [
      "Right Hepatic Artery",
      "Left Hepatic Artery",
      "Proper Hepatic Artery",
      "Cystic Artery"
    ],
    "defaultPanelCostINR": 55000,
    "requiredLabs": [
      "CBC",
      "PT / INR",
      "Serum Bilirubin / LFT",
      "Serum Creatinine"
    ],
    "clinicalCriteria": "Post-cholecystectomy / post-PTBD hemobilia or intraperitoneal bleed with HAP pseudoaneurysm sac.",
    "preOpChecklist": [
      {
        "id": "hap_patency",
        "label": "Verify portal vein patency before hepatic artery sacrifice",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Covered Stent",
        "desc": "Fluency / PK Papyrus covered stent (5-7 mm) OR detachable coils"
      }
    ]
  },
  {
    "key": "splenic_artery_embo",
    "title": "Splenic Artery Embolization (SAE) for Trauma / Secondary Hypersplenism",
    "category": "Vascular Embolization & Hemorrhage",
    "domain": "embolization",
    "modality": "XA",
    "targetVessels": [
      "Main Splenic Artery",
      "Distal Segmental Splenic Branches"
    ],
    "defaultPanelCostINR": 48000,
    "requiredLabs": [
      "CBC (Platelet count)",
      "PT / INR",
      "Serum Creatinine",
      "Abdominal CT Trauma Grade"
    ],
    "clinicalCriteria": "Grade III-IV splenic trauma with blush; Portal hypertension with severe hypersplenism (Platelets <30,000).",
    "preOpChecklist": [
      {
        "id": "sae_vacc",
        "label": "Post-splenectomy vaccines (Pneumococcal, Meningococcal, Hib) arranged",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Plugs / Coils",
        "desc": "Amplatzer Vascular Plug (AVP II / IV 8-12mm) or 0.035\" Gianturco coils"
      }
    ]
  },
  {
    "key": "renal_pseudoaneurysm_avf",
    "title": "Renal Artery Pseudoaneurysm & AV Fistula Superselective Coiling",
    "category": "Vascular Embolization & Hemorrhage",
    "domain": "embolization",
    "modality": "XA",
    "targetVessels": [
      "Main Renal Artery",
      "Interlobar / Segmental Renal Artery Branches"
    ],
    "defaultPanelCostINR": 45000,
    "requiredLabs": [
      "CBC",
      "PT / INR",
      "Serum Creatinine / eGFR",
      "Urine Routine (Hematuria)"
    ],
    "clinicalCriteria": "Post-PCNL / post-renal biopsy intractable gross hematuria and hemodynamic drop.",
    "preOpChecklist": [
      {
        "id": "renal_gfr",
        "label": "Pre-procedure eGFR recorded; minimize iodinated contrast volume",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Hardware",
        "desc": "5F Renal Double Curve + 2.0F microcatheter + 0.014\" detachable coils"
      }
    ]
  },
  {
    "key": "pelvic_trauma_embo",
    "title": "Pelvic Trauma: Internal Iliac Artery Emergency Bilateral Embolization",
    "category": "Vascular Embolization & Hemorrhage",
    "domain": "embolization",
    "modality": "XA",
    "targetVessels": [
      "Bilateral Internal Iliac Arteries",
      "Anterior Division",
      "Superior Gluteal",
      "Internal Pudendal"
    ],
    "defaultPanelCostINR": 52000,
    "requiredLabs": [
      "CBC (Urgent Hb)",
      "PT / INR",
      "Fibrinogen",
      "Blood Bank MTP Protocol Activated"
    ],
    "clinicalCriteria": "Unstable pelvic ring fracture with arterial contrast extravasation on trauma CT despite pelvic binder.",
    "preOpChecklist": [
      {
        "id": "pelvic_mtp",
        "label": "Massive Transfusion Protocol running via rapid infuser",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Embolics",
        "desc": "Gelfoam torpedoes for temporary bilateral internal iliac occlusion + microcoils"
      }
    ]
  },
  {
    "key": "uae_fibroids_pph",
    "title": "Uterine Artery Embolization (UAE / UFE) for Fibroids / Intractable PPH",
    "category": "Vascular Embolization & Hemorrhage",
    "domain": "embolization",
    "modality": "XA",
    "targetVessels": [
      "Bilateral Uterine Arteries",
      "Ovarian-Uterine Anastomotic Loop"
    ],
    "defaultPanelCostINR": 48000,
    "requiredLabs": [
      "CBC",
      "PT / INR",
      "Serum Creatinine",
      "Pelvic MRI / USG Doppler"
    ],
    "clinicalCriteria": "Symptomatic uterine fibroids / adenomyosis; Emergency post-partum hemorrhage failing uterotonics and balloon tamponade.",
    "preOpChecklist": [
      {
        "id": "uae_foley",
        "label": "Foley catheter placed to keep bladder empty for fluoroscopy view",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Embolics",
        "desc": "Embosphere / HydroPearl microspheres 500-700 um and 700-900 um"
      },
      {
        "item": "Catheters",
        "desc": "5F Roberts Uterine Catheter (RUC) / C2 + 2.4F microcatheter"
      }
    ]
  },
  {
    "key": "pae_bph",
    "title": "Prostatic Artery Embolization (PAE) for Severe BPH",
    "category": "Vascular Embolization & Hemorrhage",
    "domain": "embolization",
    "modality": "XA",
    "targetVessels": [
      "Prostatic Artery (Origins from Anterior Division Internal Iliac, Inferior Vesical, or Obturator)"
    ],
    "defaultPanelCostINR": 65000,
    "requiredLabs": [
      "Serum PSA",
      "Serum Creatinine",
      "IPSS Score",
      "Uroflowmetry (Qmax) & Post-Void Residual",
      "Multiparametric Prostate MRI"
    ],
    "clinicalCriteria": "BPH with IPSS >18, prostate volume >40 mL, failed alpha-blockers/5-ARI or catheter dependence.",
    "preOpChecklist": [
      {
        "id": "pae_pelvic_cta",
        "label": "Pelvic CT Angiography completed to roadmap tortuous prostatic artery anatomy",
        "required": true
      },
      {
        "id": "pae_cbct",
        "label": "Cone-Beam CT (CBCT) roadmapping verified to exclude rectal/penile non-target supply",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Microcatheter",
        "desc": "1.9F - 2.0F steerable microcatheter (Carnelian / Progreat) with 0.014\" wire"
      },
      {
        "item": "Microspheres",
        "desc": "Non-spherical PVA 100-300 um or Embosphere 300-500 um"
      }
    ]
  },
  {
    "key": "varicocele_embo",
    "title": "Varicocele Retrograde Percutaneous Embolization",
    "category": "Vascular Embolization & Hemorrhage",
    "domain": "embolization",
    "modality": "XA",
    "targetVessels": [
      "Left Internal Spermatic Vein",
      "Right Internal Spermatic Vein",
      "Retroperitoneal Collaterals"
    ],
    "defaultPanelCostINR": 32000,
    "requiredLabs": [
      "Semen Analysis",
      "Scrotal Doppler Ultrasound",
      "Coagulation Profile"
    ],
    "clinicalCriteria": "Symptomatic Grade II-III varicocele with chronic dull pain or male subfertility with abnormal semen parameters.",
    "preOpChecklist": [
      {
        "id": "vari_valsalva",
        "label": "Reflux confirmed under Valsalva during venography",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Catheter & Coils",
        "desc": "5F Cobra / Multipurpose catheter + 0.035\" and 0.018\" fibered coils + STS foam"
      }
    ]
  },
  {
    "key": "ovarian_vein_embo_pcs",
    "title": "Ovarian Vein Embolization for Pelvic Congestion Syndrome (PCS)",
    "category": "Vascular Embolization & Hemorrhage",
    "domain": "embolization",
    "modality": "XA",
    "targetVessels": [
      "Left Ovarian Vein (into Left Renal Vein)",
      "Right Ovarian Vein (into IVC)",
      "Internal Iliac Pelvic Tributaries"
    ],
    "defaultPanelCostINR": 38000,
    "requiredLabs": [
      "Pelvic MR Venography / Doppler",
      "CBC",
      "Serum Creatinine"
    ],
    "clinicalCriteria": "Chronic non-cyclical pelvic pain >6 months, dyspareunia, ovarian vein diameter >6 mm with retrograde flow.",
    "preOpChecklist": [
      {
        "id": "pcs_valsalva",
        "label": "Retrograde ovarian vein incompetence verified on transjugular/femoral venogram",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Hardware",
        "desc": "6F 65cm sheath + 5F Cobra + Interlock fibered coils (8-14 mm) + 3% Sodium Tetradecyl Sulfate foam"
      }
    ]
  },
  {
    "key": "padv_embolization",
    "title": "Pulmonary Arteriovenous Malformation (PAVM) Embolization",
    "category": "Vascular Embolization & Hemorrhage",
    "domain": "embolization",
    "modality": "XA",
    "targetVessels": [
      "Pulmonary Artery Feeding Branches to Nidus / Sac"
    ],
    "defaultPanelCostINR": 60000,
    "requiredLabs": [
      "Arterial Blood Gas (PaO2)",
      "Chest CT Angiography",
      "CBC (Polycythemia)",
      "Brain MRI for Paradoxical Emboli"
    ],
    "clinicalCriteria": "Hereditary Hemorrhagic Telangiectasia (Osler-Weber-Rendu) or idiopathic PAVM with feeding artery >2-3 mm.",
    "preOpChecklist": [
      {
        "id": "pavm_feeder",
        "label": "Feeding artery sized at sac neck to ensure tight anchoring and avoid systemic migration",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Vascular Plugs",
        "desc": "Amplatzer Vascular Plug (AVP II / IV) sized 30-50% larger than feeding artery diameter"
      }
    ]
  },
  {
    "key": "peripheral_avm_sclero",
    "title": "Peripheral Arteriovenous Malformation (AVM) Ethanol / Onyx Sclerotherapy",
    "category": "Vascular Embolization & Hemorrhage",
    "domain": "embolization",
    "modality": "XA",
    "targetVessels": [
      "Nidus Feeder Arteries",
      "Dominant Outflow Vein",
      "Intranidal Sac"
    ],
    "defaultPanelCostINR": 65000,
    "requiredLabs": [
      "CBC",
      "Coagulation Profile (INR, Fibrinogen)",
      "Contrast MR Angiography"
    ],
    "clinicalCriteria": "Schobinger Stage II-IV symptomatic AVM with pain, ulceration, ischemia, or high-output cardiac failure.",
    "preOpChecklist": [
      {
        "id": "avm_anesthesia",
        "label": "General anesthesia with invasive arterial line monitoring (for ethanol cardiotoxicity)",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Liquid Embolics",
        "desc": "EVOH (Onyx 18/34) / Absolute Alcohol (Ethanol) / Glubran-2 with Lipiodol"
      }
    ]
  },
  {
    "key": "epistaxis_embo",
    "title": "Intractable Posterior Epistaxis Superselective Embolization",
    "category": "Vascular Embolization & Hemorrhage",
    "domain": "embolization",
    "modality": "XA",
    "targetVessels": [
      "Internal Maxillary Artery (Sphenopalatine Branch)",
      "Facial Artery"
    ],
    "defaultPanelCostINR": 42000,
    "requiredLabs": [
      "CBC",
      "PT / INR",
      "Platelets",
      "ENT Endoscopy Report"
    ],
    "clinicalCriteria": "Severe posterior epistaxis refractory to anterior and posterior balloon packing.",
    "preOpChecklist": [
      {
        "id": "epi_anastomosis",
        "label": "Verify absence of ophthalmic artery anastomoses from internal maxillary branch",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Particles",
        "desc": "PVA particles 355-500 um + 0.014\" pushable microcoils"
      }
    ]
  },
  {
    "key": "carotid_blowout_embo",
    "title": "Emergency Carotid Blowout Syndrome (CBS) Covered Stenting / Occlusion",
    "category": "Vascular Embolization & Hemorrhage",
    "domain": "embolization",
    "modality": "XA",
    "targetVessels": [
      "Common Carotid Artery",
      "External Carotid Artery",
      "Internal Carotid Artery"
    ],
    "defaultPanelCostINR": 75000,
    "requiredLabs": [
      "CBC",
      "PT / INR",
      "CT Angiography Neck",
      "Blood Bank Protocol"
    ],
    "clinicalCriteria": "Catastrophic bleeding from carotid erosion secondary to head & neck malignancy or radiation necrosis.",
    "preOpChecklist": [
      {
        "id": "cbs_airway",
        "label": "Definitive endotracheal airway secured before starting groin puncture",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Covered Stent",
        "desc": "Fluency / Viabahn / Wallgraft covered stent 6-10 mm OR parent artery coiling"
      }
    ]
  },
  {
    "key": "thrombin_pseudoaneurysm",
    "title": "Percutaneous Ultrasound-Guided Thrombin Injection of Pseudoaneurysm",
    "category": "Vascular Embolization & Hemorrhage",
    "domain": "embolization",
    "modality": "US",
    "targetVessels": [
      "Femoral Artery Neck",
      "Brachial Artery Pseudoaneurysm Sac"
    ],
    "defaultPanelCostINR": 15000,
    "requiredLabs": [
      "CBC",
      "PT / INR",
      "Color Doppler Ultrasound of Neck & Sac"
    ],
    "clinicalCriteria": "Iatrogenic post-catheterization femoral pseudoaneurysm >2 cm with defined neck failing compression.",
    "preOpChecklist": [
      {
        "id": "thrombin_needle",
        "label": "21G needle tip positioned strictly away from neck inside sac under continuous color Doppler",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Thrombin",
        "desc": "Human / Bovine Thrombin (500 - 1000 IU/mL) loaded in 1 mL syringe"
      }
    ]
  },
  {
    "key": "endoleak_embo",
    "title": "Type I / II Endoleak Transcatheter / Translumbar Embolization",
    "category": "Vascular Embolization & Hemorrhage",
    "domain": "embolization",
    "modality": "XA",
    "targetVessels": [
      "Aneurysm Sac",
      "Inferior Mesenteric Artery",
      "Lumbar Arteries"
    ],
    "defaultPanelCostINR": 70000,
    "requiredLabs": [
      "Triphasic CT Aortogram",
      "Serum Creatinine",
      "PT / INR"
    ],
    "clinicalCriteria": "Enlarging aneurysm sac (>5 mm) post-EVAR due to retrograde lumbar / IMA flow or sealing cuff defect.",
    "preOpChecklist": [
      {
        "id": "endoleak_plan",
        "label": "Translumbar direct puncture vs transarterial Riolan arcade catheterization plotted",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Hardware",
        "desc": "Onyx-34 liquid embolic agent + 0.018\" fibered microcoils + 21G Chiba needle"
      }
    ]
  },
  {
    "key": "preop_tumor_embo",
    "title": "Preoperative Tumor Devitalization Embolization (Renal / Bone / Spine)",
    "category": "Vascular Embolization & Hemorrhage",
    "domain": "embolization",
    "modality": "XA",
    "targetVessels": [
      "Tumor Feeding Arteries",
      "Segmental Renal Branches",
      "Radiculomedullary Collaterals"
    ],
    "defaultPanelCostINR": 48000,
    "requiredLabs": [
      "CBC",
      "PT / INR",
      "Serum Creatinine",
      "Contrast MRI / CT"
    ],
    "clinicalCriteria": "Hypervascular mass (RCC, thyroid bone metastasis, spinal hemangioma) scheduled for resection within 24-48h.",
    "preOpChecklist": [
      {
        "id": "tumor_anterior_spinal",
        "label": "Spinal angiography confirms safety margin from anterior spinal artery (Adamkiewicz)",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Embolic Particles",
        "desc": "PVA 300-500 um / Embosphere microspheres 300-500 um"
      }
    ]
  },
  {
    "key": "pda_aneurysm_embo",
    "title": "Pancreaticoduodenal Artery (PDA) Aneurysm Embolization with Celiac Recanalization",
    "category": "Vascular Embolization & Hemorrhage",
    "domain": "embolization",
    "modality": "XA",
    "targetVessels": [
      "Inferior Pancreaticoduodenal Artery",
      "Gastroduodenal Artery",
      "Celiac Axis (MALS Stenting)"
    ],
    "defaultPanelCostINR": 65000,
    "requiredLabs": [
      "CT Angiography Abdomen",
      "Serum Creatinine",
      "Coagulation Profile"
    ],
    "clinicalCriteria": "Ruptured / intact PDA aneurysm in setting of median arcuate ligament compression (MALS) of celiac axis.",
    "preOpChecklist": [
      {
        "id": "pda_arcade",
        "label": "Exclude both inflow and outflow vessels across aneurysm sac",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Coils & Balloon",
        "desc": "0.014\" Target / Concerto detachable coils + balloon for celiac angioplasty"
      }
    ]
  },
  {
    "key": "budd_chiari_dips",
    "title": "Budd-Chiari Syndrome: Direct Intrahepatic Portosystemic Shunt (DIPS)",
    "category": "Portal Hypertension & Hepatobiliary",
    "domain": "portal_htn",
    "modality": "XA",
    "targetVessels": [
      "Suprahepatic Inferior Vena Cava (IVC)",
      "Caudate Lobe Parenchymal Tract",
      "Main / Right Portal Vein Confluence"
    ],
    "defaultPanelCostINR": 110000,
    "requiredLabs": [
      "AST / ALT",
      "Total Bilirubin",
      "LDH",
      "Serum Albumin",
      "Creatinine",
      "PT / INR",
      "Platelet Count",
      "Fibrinogen",
      "Protein C & S"
    ],
    "clinicalCriteria": "Primary BCS (HVOTO) with absent/fibrosed hepatic vein stumps, intractable ascites, Rotterdam Class II-III, Clichy index.",
    "preOpChecklist": [
      {
        "id": "dips_consent",
        "label": "High-risk surgical & interventional informed consent signed",
        "required": true
      },
      {
        "id": "dips_coag",
        "label": "INR <1.8 and Platelets >60,000 corrected with cryo/platelets",
        "required": true
      },
      {
        "id": "dips_portal",
        "label": "Portal vein patency verified on Doppler / CTA",
        "required": true
      },
      {
        "id": "dips_ugie",
        "label": "UGIE completed to document grade III varices",
        "required": true
      },
      {
        "id": "dips_apixaban_hold",
        "label": "DOAC / Heparin held per AASLD/CIRSE timing window",
        "required": true
      },
      {
        "id": "dips_paracentesis",
        "label": "Large-volume paracentesis done morning of procedure to ease transcaval access",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "TIPS Set",
        "desc": "RUPS-100 / Rösch-Uchida Transjugular Puncture Set (Cook Medical)"
      },
      {
        "item": "Covered Stent-Graft",
        "desc": "Gore Viatorr TIPS Endoprosthesis (10 mm diameter, 7-8 cm covered + 2 cm bare)"
      },
      {
        "item": "High-Pressure Balloon",
        "desc": "Mustang / Conquest 8 mm & 10 mm x 40 mm balloon"
      },
      {
        "item": "Vascular Sheath",
        "desc": "10F 40 cm Flexor check-flo introducer sheath"
      }
    ]
  },
  {
    "key": "hepatic_venoplasty",
    "title": "Hepatic Venoplasty & Caval Recanalization (Membranous Web PTA / Stent)",
    "category": "Portal Hypertension & Hepatobiliary",
    "domain": "portal_htn",
    "modality": "XA",
    "targetVessels": [
      "Right Hepatic Vein Confluence",
      "Middle Hepatic Vein",
      "Inferior Vena Cava Web"
    ],
    "defaultPanelCostINR": 55000,
    "requiredLabs": [
      "AST / ALT",
      "Total Bilirubin",
      "INR",
      "Creatinine",
      "Triphasic CT Abdomen"
    ],
    "clinicalCriteria": "Membranous web / short-segment focal stenosis of hepatic vein or IVC, responsive to primary balloon dilatation.",
    "preOpChecklist": [
      {
        "id": "vp_consent",
        "label": "Written informed consent for balloon dilatation and backup stenting",
        "required": true
      },
      {
        "id": "vp_coag",
        "label": "Coagulation profile normalized",
        "required": true
      },
      {
        "id": "vp_anticoag",
        "label": "Post-procedure heparin infusion charted (APTT target 60-80s)",
        "required": true
      },
      {
        "id": "vp_imaging",
        "label": "Review cross-sectional CT venogram for web thickness and length",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Access Sheath",
        "desc": "8F / 9F 45cm Balkin sheath (Cook Medical)"
      },
      {
        "item": "PTA Balloon",
        "desc": "High-pressure balloon: Atlas / Conquest 10-14 mm for HV, 18-24 mm for IVC web"
      },
      {
        "item": "Stent",
        "desc": "Self-expanding bare nitinol stent (Wallstent / E-Luminexx 12-14 mm) if elastic recoil >30%"
      }
    ]
  },
  {
    "key": "tips_decompression",
    "title": "Standard Transjugular Intrahepatic Portosystemic Shunt (TIPS)",
    "category": "Portal Hypertension & Hepatobiliary",
    "domain": "portal_htn",
    "modality": "XA",
    "targetVessels": [
      "Right Hepatic Vein",
      "Intrahepatic Portal Vein Branch"
    ],
    "defaultPanelCostINR": 105000,
    "requiredLabs": [
      "Bilirubin",
      "Creatinine",
      "INR",
      "Sodium",
      "Echocardiogram (EF, Pulmonary Artery Pressure)"
    ],
    "clinicalCriteria": "Refractory ascites / secondary prevention of variceal bleed; MELD <18 preferred, CTP score, no severe pulmonary HTN.",
    "preOpChecklist": [
      {
        "id": "tips_echo",
        "label": "Echocardiogram reviewed: Right atrial pressure and absence of severe tricuspid regurgitation",
        "required": true
      },
      {
        "id": "tips_enceph",
        "label": "Assessment for baseline minimal hepatic encephalopathy completed",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Stent-Graft",
        "desc": "Gore Viatorr controlled-expansion 8-10 mm covered stent"
      },
      {
        "item": "Puncture Set",
        "desc": "Colapinto / Rösch-Uchida RUPS-100 system"
      }
    ]
  },
  {
    "key": "tglb_hvpg",
    "title": "Transjugular Liver Biopsy (TGLB) & Hepatic Venous Pressure Gradient (HVPG)",
    "category": "Portal Hypertension & Hepatobiliary",
    "domain": "portal_htn",
    "modality": "XA",
    "targetVessels": [
      "Right Hepatic Vein Confluence",
      "Wedged Hepatic Venule (WHVP)",
      "Free Hepatic Vein (FHVP)"
    ],
    "defaultPanelCostINR": 28000,
    "requiredLabs": [
      "Platelet Count",
      "PT / INR",
      "Serum Bilirubin / LFT",
      "Viral Hepatitis Markers"
    ],
    "clinicalCriteria": "Diffuse liver disease requiring histological staging in patients with severe coagulopathy (INR >1.5, Platelets <50,000) or massive ascites contraindicating percutaneous route.",
    "preOpChecklist": [
      {
        "id": "tglb_pressure",
        "label": "Zero pressure transducer at mid-axillary line prior to wedge recordings",
        "required": true
      },
      {
        "id": "tglb_consent",
        "label": "Consent signed for transjugular vascular approach",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "TGLB System",
        "desc": "Cook Quick-Core 18G / 19G Transjugular Biopsy Set (LAB-100)"
      },
      {
        "item": "Balloon Wedge Catheter",
        "desc": "7F Berman / Arrow balloon-tipped pressure catheter"
      }
    ]
  },
  {
    "key": "brto_gastric_varices",
    "title": "Balloon-Occluded Retrograde Transvenous Obliteration (BRTO) for Gastric Varices",
    "category": "Portal Hypertension & Hepatobiliary",
    "domain": "portal_htn",
    "modality": "XA",
    "targetVessels": [
      "Left Renal Vein",
      "Gastrorenal Shunt (GRS)",
      "Gastrocaval Shunt",
      "Fundic Variceal Nidus"
    ],
    "defaultPanelCostINR": 65000,
    "requiredLabs": [
      "Endoscopy Report (GOV2 / IGV1 Varices)",
      "Creatinine",
      "CT Portal Venogram"
    ],
    "clinicalCriteria": "Bleeding or high-risk fundic gastric varices with spontaneous gastrorenal or gastrocaval shunt.",
    "preOpChecklist": [
      {
        "id": "brto_shunt",
        "label": "Gastrorenal shunt caliber sized on contrast CT; exclude absent shunt",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Occlusion Balloon",
        "desc": "Cook / Edwards 8.5F 20-32 mm occlusion balloon catheter"
      },
      {
        "item": "Sclerosant",
        "desc": "3% Sodium Tetradecyl Sulfate (STS) foam / Ethanolamine Oleate with Lipiodol"
      }
    ]
  },
  {
    "key": "parto_gastric_varices",
    "title": "Plug-Assisted Retrograde Transvenous Obliteration (PARTO) for Gastric Varices",
    "category": "Portal Hypertension & Hepatobiliary",
    "domain": "portal_htn",
    "modality": "XA",
    "targetVessels": [
      "Gastrorenal Shunt (GRS)"
    ],
    "defaultPanelCostINR": 75000,
    "requiredLabs": [
      "CBC",
      "Creatinine",
      "INR",
      "Endoscopy Report",
      "CT Angiography"
    ],
    "clinicalCriteria": "Isolated gastric varices (IGV1/GOV2). Avoids prolonged balloon dwell time by using an Amplatzer vascular plug + Gelfoam.",
    "preOpChecklist": [
      {
        "id": "parto_plug_size",
        "label": "Select Amplatzer plug 20-30% larger than gastrorenal shunt constriction",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Vascular Plug",
        "desc": "Amplatzer Vascular Plug (AVP II, 10-16 mm)"
      },
      {
        "item": "Gelatin Sponge",
        "desc": "Gelfoam slurry for dense variceal thrombosis"
      }
    ]
  },
  {
    "key": "portal_vein_embo_pve",
    "title": "Portal Vein Embolization (PVE) for Future Liver Remnant (FLR) Hypertrophy",
    "category": "Portal Hypertension & Hepatobiliary",
    "domain": "portal_htn",
    "modality": "XA",
    "targetVessels": [
      "Right Portal Vein (Anterior & Posterior Sectors)",
      "Segment IV Branches (Extended Hepatectomy)"
    ],
    "defaultPanelCostINR": 65000,
    "requiredLabs": [
      "CT Liver Volumetry (FLR % calculation)",
      "ICG Clearance (R15)",
      "LFT",
      "INR"
    ],
    "clinicalCriteria": "Planned major hepatic resection (e.g. Right hepatectomy for CRLM / cholangiocarcinoma) where FLR is <20-25% in normal liver or <40% in cirrhosis.",
    "preOpChecklist": [
      {
        "id": "pve_volumetry",
        "label": "Baseline FLR volume documented; target 3-4 week post-PVE CT volumetry",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Embolic Mix",
        "desc": "NBCA glue (Histoacryl) + Lipiodol (1:4 ratio) OR PVA particles + vascular plugs"
      }
    ]
  },
  {
    "key": "portal_vein_stenting",
    "title": "Portal Vein Recanalization & Stenting for Malignant / Benign Occlusion",
    "category": "Portal Hypertension & Hepatobiliary",
    "domain": "portal_htn",
    "modality": "XA",
    "targetVessels": [
      "Main Portal Vein Trunk",
      "Splenic-Mesenteric Confluence",
      "Intrahepatic Branches"
    ],
    "defaultPanelCostINR": 85000,
    "requiredLabs": [
      "Doppler Ultrasound",
      "Triphasic CT Portal Phase",
      "Coagulation Profile"
    ],
    "clinicalCriteria": "Severe non-cirrhotic portal hypertension, tumor encasement (PDAC), refractory ascites, post-transplant anastomotic stenosis.",
    "preOpChecklist": [
      {
        "id": "pv_access",
        "label": "Transhepatic vs transsplenic access route selected",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Stents",
        "desc": "Self-expanding bare nitinol stent (10-14 mm x 60 mm) / Viabahn covered stent"
      }
    ]
  },
  {
    "key": "ptbd_drainage",
    "title": "Percutaneous Transhepatic Biliary Drainage (PTBD) - External / Internal-External",
    "category": "Portal Hypertension & Hepatobiliary",
    "domain": "portal_htn",
    "modality": "XA",
    "targetVessels": [
      "Right Anterior / Posterior Bile Duct",
      "Left Hepatic Bile Duct Confluence",
      "Common Bile Duct (CBD)"
    ],
    "defaultPanelCostINR": 28000,
    "requiredLabs": [
      "Serum Bilirubin (Total & Direct)",
      "INR",
      "CBC",
      "MRCP / Contrast CT Abdomen"
    ],
    "clinicalCriteria": "Malignant biliary obstruction (Klatskin Bismuth I-IV, pancreatic head CA, gallbladder CA); cholangitis failing ERCP.",
    "preOpChecklist": [
      {
        "id": "ptbd_iv_abx",
        "label": "Broad-spectrum IV antibiotics (Piperacillin-Tazobactam) given pre-procedure",
        "required": true
      },
      {
        "id": "ptbd_coag",
        "label": "INR <1.5 and Platelets >50,000 verified",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Access Needle",
        "desc": "21G Chiba needle + 0.018\" nitinol wire (AccuStick set)"
      },
      {
        "item": "Drainage Catheter",
        "desc": "8.5F / 10F Cook Biliary Drainage Locking Pigtail Catheter"
      }
    ]
  },
  {
    "key": "biliary_sems_stenting",
    "title": "Percutaneous Biliary Stenting with Self-Expanding Metallic Stent (SEMS)",
    "category": "Portal Hypertension & Hepatobiliary",
    "domain": "portal_htn",
    "modality": "XA",
    "targetVessels": [
      "Common Bile Duct",
      "Right/Left Hepatic Confluence (Y-configuration)"
    ],
    "defaultPanelCostINR": 65000,
    "requiredLabs": [
      "Total Bilirubin",
      "INR",
      "Creatinine",
      "MRCP"
    ],
    "clinicalCriteria": "Inoperable malignant obstructive jaundice for palliative internal decompression.",
    "preOpChecklist": [
      {
        "id": "sems_length",
        "label": "Stricture length measured with radiopaque ruler; stent chosen 2 cm longer",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Biliary SEMS",
        "desc": "Bare / Partially Covered SEMS (8-10 mm diameter, 60-80 mm length)"
      }
    ]
  },
  {
    "key": "percutaneous_cholecystostomy",
    "title": "Percutaneous Ultrasound-Guided Cholecystostomy",
    "category": "Portal Hypertension & Hepatobiliary",
    "domain": "portal_htn",
    "modality": "US",
    "targetVessels": [
      "Gallbladder Lumen (Transhepatic route via Segment V)"
    ],
    "defaultPanelCostINR": 18000,
    "requiredLabs": [
      "CBC (Leukocytosis)",
      "Bilirubin",
      "INR",
      "Abdominal USG / CT"
    ],
    "clinicalCriteria": "Acute calculous / acalculous cholecystitis in critically ill or surgically unfit ICU patients (APACHE II >15).",
    "preOpChecklist": [
      {
        "id": "chole_transhepatic",
        "label": "Transhepatic parenchymal route plotted to prevent bile leak into peritoneum",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Drainage Kit",
        "desc": "8F Locking Pigtail Catheter (Nephrostomy / Abscess Set) with Trocar / Seldinger set"
      }
    ]
  },
  {
    "key": "biliary_stone_removal",
    "title": "Percutaneous Biliary Stone Removal / Cholangioscopy",
    "category": "Portal Hypertension & Hepatobiliary",
    "domain": "portal_htn",
    "modality": "XA",
    "targetVessels": [
      "Common Bile Duct",
      "Intrahepatic Biliary Radicles"
    ],
    "defaultPanelCostINR": 45000,
    "requiredLabs": [
      "Bilirubin",
      "INR",
      "MRCP / Cholangiogram"
    ],
    "clinicalCriteria": "Retained CBD calculi after failed ERCP or altered surgical anatomy (Billroth II, Roux-en-Y).",
    "preOpChecklist": [
      {
        "id": "stone_tract",
        "label": "Mature PTBD tract (minimum 2-3 weeks old) dilated to 12-14F",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Stone Extraction",
        "desc": "Dormia basket / Fogarty balloon catheter + Lithotriptor"
      }
    ]
  },
  {
    "key": "percutaneous_gastrostomy_rig",
    "title": "Radiologically Inserted Gastrostomy (RIG / PRG)",
    "category": "Portal Hypertension & Hepatobiliary",
    "domain": "portal_htn",
    "modality": "FL",
    "targetVessels": [
      "Gastric Body / Antrum (Transabdominal Anterior Wall)"
    ],
    "defaultPanelCostINR": 22000,
    "requiredLabs": [
      "INR",
      "Platelets",
      "Upper GI Anatomy / Barium swallow"
    ],
    "clinicalCriteria": "Long-term enteral nutrition requirement (>4 weeks) in neurological dysphagia (ALS, stroke) or head & neck cancer.",
    "preOpChecklist": [
      {
        "id": "rig_air_insuff",
        "label": "NG tube in place for stomach air distension; barium scout confirms transverse colon displacement",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "G-Tube Kit",
        "desc": "14F - 18F Balloon Retention Gastrostomy Kit with 3-4 Gastropexy T-fasteners"
      }
    ]
  },
  {
    "key": "enteral_stenting_duodenal",
    "title": "Fluoroscopic Enteral Stenting for Gastric Outlet / Duodenal Obstruction",
    "category": "Portal Hypertension & Hepatobiliary",
    "domain": "portal_htn",
    "modality": "FL",
    "targetVessels": [
      "Duodenal C-Loop / Pylorus"
    ],
    "defaultPanelCostINR": 58000,
    "requiredLabs": [
      "CBC",
      "Electrolytes (Chloride, Potassium)",
      "Contrast Swallow"
    ],
    "clinicalCriteria": "Malignant gastric outlet obstruction (GOO) due to unresectable pancreatic head / gastric adenocarcinoma (GOOSS score <1).",
    "preOpChecklist": [
      {
        "id": "goo_decomp",
        "label": "Nasogastric suction performed to evacuate retained food secretions",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Enteral Stent",
        "desc": "WallFlex / Taewoong Duodenal SEMS (22 mm x 90-120 mm)"
      }
    ]
  },
  {
    "key": "colonic_stenting_obstruction",
    "title": "Fluoroscopic Colonic Stenting for Acute Large Bowel Obstruction",
    "category": "Portal Hypertension & Hepatobiliary",
    "domain": "portal_htn",
    "modality": "FL",
    "targetVessels": [
      "Rectosigmoid Junction",
      "Descending Colon",
      "Splenic Flexure"
    ],
    "defaultPanelCostINR": 62000,
    "requiredLabs": [
      "CBC",
      "Creatinine",
      "CT Abdomen (Pneumoperitoneum exclusion)"
    ],
    "clinicalCriteria": "Bridge-to-surgery or definitive palliation in acute left-sided malignant colorectal obstruction without perforation.",
    "preOpChecklist": [
      {
        "id": "colon_perf",
        "label": "Pre-procedure CT reviewed: absence of signs of cecal ischemia or perforation",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Colonic Stent",
        "desc": "25 mm x 90-120 mm Uncovered Colonic SEMS with long delivery catheter"
      }
    ]
  },
  {
    "key": "ctace_hcc",
    "title": "Conventional TACE (cTACE with Lipiodol + Doxorubicin) for HCC",
    "category": "Interventional Oncology",
    "domain": "oncology",
    "modality": "XA",
    "targetVessels": [
      "Right / Left Hepatic Artery",
      "Subsegmental Tumor Feeders"
    ],
    "defaultPanelCostINR": 55000,
    "requiredLabs": [
      "Serum Alpha-Fetoprotein (AFP)",
      "Total Bilirubin",
      "Serum Albumin",
      "PT / INR",
      "Platelets",
      "Triphasic CT / MRI (BCLC Stage B)"
    ],
    "clinicalCriteria": "Intermediate-stage Hepatocellular Carcinoma (BCLC B), preserved liver function (Child-Pugh A/B7), ECOG 0-1, no portal trunk invasion.",
    "preOpChecklist": [
      {
        "id": "ctace_bclc",
        "label": "BCLC criteria and Child-Pugh score verified; bilirubin <3 mg/dL",
        "required": true
      },
      {
        "id": "ctace_cbct",
        "label": "Cone-Beam CT scheduled to ensure complete tumor coverage",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Chemotherapy Mix",
        "desc": "Doxorubicin (30-50 mg) emulsion with Ethiodized Oil (Lipiodol, 5-10 mL)"
      },
      {
        "item": "Embolic Particles",
        "desc": "Gelatin sponge slurry / PVA particles 100-300 um for terminal vascular embolization"
      },
      {
        "item": "Microcatheter",
        "desc": "1.9F - 2.4F tip-deflecting microcatheter for subsegmental engagement"
      }
    ]
  },
  {
    "key": "debtace_hcc",
    "title": "Drug-Eluting Bead TACE (DEB-TACE with DC Beads) for HCC",
    "category": "Interventional Oncology",
    "domain": "oncology",
    "modality": "XA",
    "targetVessels": [
      "Segmental Hepatic Artery Branches"
    ],
    "defaultPanelCostINR": 85000,
    "requiredLabs": [
      "AFP",
      "LFT",
      "INR",
      "Creatinine",
      "Contrast MRI Liver"
    ],
    "clinicalCriteria": "Multifocal HCC, cardiovascular comorbidity (lower systemic doxorubicin leak compared to cTACE).",
    "preOpChecklist": [
      {
        "id": "debtace_load",
        "label": "DC Beads 70-150 um loaded with Doxorubicin 75 mg under sterile pharmacy protocol",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "DEB Beads",
        "desc": "DC Bead M1 (70-150 um) or HepaSphere 50-100 um"
      }
    ]
  },
  {
    "key": "tare_y90",
    "title": "Transarterial Radioembolization (TARE / Selective Internal Radiation - Y90)",
    "category": "Interventional Oncology",
    "domain": "oncology",
    "modality": "XA",
    "targetVessels": [
      "Lobar / Segmental Hepatic Artery Branches"
    ],
    "defaultPanelCostINR": 280000,
    "requiredLabs": [
      "99mTc-MAA Shunt Fraction Scan (<15-20% lung shunt)",
      "Bilirubin <2.0",
      "Albumin",
      "SPECT-CT"
    ],
    "clinicalCriteria": "Advanced unresectable HCC with branch portal vein thrombosis (BCLC C) or massive solitary tumor.",
    "preOpChecklist": [
      {
        "id": "tare_maa",
        "label": "MAA nuclear mapping completed; lung shunt fraction <15% and no GI collateral tracer",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Radioactive Microspheres",
        "desc": "Glass (TheraSphere) or Resin (SIR-Spheres) Yttrium-90 microspheres"
      }
    ]
  },
  {
    "key": "rfa_liver_tumor",
    "title": "Percutaneous Ultrasound / CT-Guided Radiofrequency Ablation (RFA) of Liver",
    "category": "Interventional Oncology",
    "domain": "oncology",
    "modality": "US",
    "targetVessels": [
      "Liver Segments I-VIII (Subcapsular avoidance)"
    ],
    "defaultPanelCostINR": 45000,
    "requiredLabs": [
      "Platelets >60,000",
      "INR <1.5",
      "Contrast CT / MRI"
    ],
    "clinicalCriteria": "Early HCC (BCLC 0/A, solitary <3 cm or up to 3 lesions <3 cm) or solitary colorectal liver metastasis.",
    "preOpChecklist": [
      {
        "id": "rfa_grounding",
        "label": "Dispersive grounding pads placed on bilateral thighs to avoid cutaneous burns",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "RFA Electrode",
        "desc": "Internally cooled 17G electrode / expandable multi-tined LeVeen needle (3-5 cm ablation zone)"
      }
    ]
  },
  {
    "key": "mwa_liver_tumor",
    "title": "Microwave Ablation (MWA) for Large Hepatic Tumors",
    "category": "Interventional Oncology",
    "domain": "oncology",
    "modality": "CT",
    "targetVessels": [
      "Hepatic Parenchyma (Higher thermal power, less heat-sink effect near large vessels)"
    ],
    "defaultPanelCostINR": 52000,
    "requiredLabs": [
      "CBC",
      "INR",
      "Creatinine",
      "Triphasic CT"
    ],
    "clinicalCriteria": "HCC / Liver metastases up to 4-5 cm or lesions adjacent to large vascular branches.",
    "preOpChecklist": [
      {
        "id": "mwa_hydrodissect",
        "label": "Hydrodissection with 5% Dextrose planned if lesion within 5 mm of bowel/gallbladder",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "MWA Antenna",
        "desc": "14G - 16G water-cooled microwave antenna (2.45 GHz)"
      }
    ]
  },
  {
    "key": "renal_cryoablation",
    "title": "CT-Guided Percutaneous Cryoablation for Renal Cell Carcinoma (T1a RCC)",
    "category": "Interventional Oncology",
    "domain": "oncology",
    "modality": "CT",
    "targetVessels": [
      "Renal Cortex / Exophytic Tumor Margin"
    ],
    "defaultPanelCostINR": 80000,
    "requiredLabs": [
      "Serum Creatinine / eGFR",
      "CBC",
      "INR",
      "Multiphasic CT Urogram"
    ],
    "clinicalCriteria": "Biopsy-proven T1a RCC (<4 cm) in elderly, solitary kidney, or baseline chronic kidney disease.",
    "preOpChecklist": [
      {
        "id": "cryo_iceball",
        "label": "Continuous CT monitoring to keep the 0°C ice ball margin 5 mm beyond tumor rim",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Cryoprobes",
        "desc": "Galil / Boston Scientific 17G Cryoablation needles (Argon/Helium gas dual-freeze cycle)"
      }
    ]
  },
  {
    "key": "renal_mwa",
    "title": "CT-Guided Microwave Ablation of Renal Neoplasm",
    "category": "Interventional Oncology",
    "domain": "oncology",
    "modality": "CT",
    "targetVessels": [
      "Renal Parenchyma"
    ],
    "defaultPanelCostINR": 50000,
    "requiredLabs": [
      "Creatinine",
      "INR",
      "CT Urogram"
    ],
    "clinicalCriteria": "T1a/T1b exophytic renal mass in patients unfit for partial nephrectomy.",
    "preOpChecklist": [
      {
        "id": "renal_colon_dist",
        "label": "Retroperitoneal air/liquid dissection to push colon away from ablation field",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Antenna",
        "desc": "15G Microwave antenna"
      }
    ]
  },
  {
    "key": "lung_tumor_mwa",
    "title": "CT-Guided Microwave Ablation / Cryoablation for Pulmonary Neoplasms",
    "category": "Interventional Oncology",
    "domain": "oncology",
    "modality": "CT",
    "targetVessels": [
      "Peripheral Lung Parenchyma"
    ],
    "defaultPanelCostINR": 52000,
    "requiredLabs": [
      "Pulmonary Function Tests (FEV1, DLCO)",
      "INR",
      "Platelets",
      "High-Resolution Chest CT"
    ],
    "clinicalCriteria": "Medically inoperable Stage I NSCLC or oligometastatic pulmonary disease (<3 cm).",
    "preOpChecklist": [
      {
        "id": "lung_chest_tube",
        "label": "Chest tube / pigtail catheter and Heimlich valve ready at bedside for pneumothorax",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Hardware",
        "desc": "16G / 17G Lung Microwave antenna"
      }
    ]
  },
  {
    "key": "osteoid_osteoma_rfa",
    "title": "CT-Guided Percutaneous RFA for Osteoid Osteoma",
    "category": "Interventional Oncology",
    "domain": "oncology",
    "modality": "CT",
    "targetVessels": [
      "Cortical Bone Nidus (Femur / Tibia / Spine)"
    ],
    "defaultPanelCostINR": 35000,
    "requiredLabs": [
      "Coagulation Profile",
      "Thin-Section CT Bone Window"
    ],
    "clinicalCriteria": "Intense nocturnal bone pain relieved by NSAIDs; CT showing classic radiolucent nidus with surrounding sclerosis.",
    "preOpChecklist": [
      {
        "id": "oo_anesthesia",
        "label": "General / spinal anesthesia administered due to severe pain upon nidus heating",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Bone Drill & Probe",
        "desc": "Bonopty / Jamshidi bone biopsy drill + rigid RFA probe (90°C for 5-6 min)"
      }
    ]
  },
  {
    "key": "bone_mets_cryo_cement",
    "title": "Percutaneous Cryoablation + Cementoplasty for Painful Bone Metastases",
    "category": "Interventional Oncology",
    "domain": "oncology",
    "modality": "CT",
    "targetVessels": [
      "Pelvis / Acetabulum / Sacrum / Long Bones"
    ],
    "defaultPanelCostINR": 65000,
    "requiredLabs": [
      "CBC",
      "INR",
      "Contrast CT / PET-CT"
    ],
    "clinicalCriteria": "Severe intractable pain from osteolytic metastases failing radiation or high risk of pathological fracture.",
    "preOpChecklist": [
      {
        "id": "bone_nerve_dist",
        "label": "Thermal thermocouples placed to monitor critical adjacent nerves (e.g. sciatic)",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Hardware",
        "desc": "17G Cryoprobes + High-viscosity PMMA bone cement and delivery guns"
      }
    ]
  },
  {
    "key": "thyroid_nodule_rfa",
    "title": "Ultrasound-Guided RFA / Microwave Ablation for Benign Thyroid Nodules",
    "category": "Interventional Oncology",
    "domain": "oncology",
    "modality": "US",
    "targetVessels": [
      "Thyroid Parenchyma (Danger Triangle: Recurrent Laryngeal Nerve avoidance)"
    ],
    "defaultPanelCostINR": 35000,
    "requiredLabs": [
      "Thyroid Function Tests (Free T3/T4, TSH)",
      "Two Benign FNAC Reports (Bethesda II)",
      "Coagulation Profile"
    ],
    "clinicalCriteria": "Symptomatic benign thyroid nodule causing cosmetic deformity or neck compression.",
    "preOpChecklist": [
      {
        "id": "thyroid_hydro",
        "label": "Hydrodissection of tracheoesophageal groove with 5% dextrose to protect RLN",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Electrode",
        "desc": "18G/19G Thyroid-dedicated 7 cm electrode with 0.7-1.0 cm active tip (Moving-shot technique)"
      }
    ]
  },
  {
    "key": "adrenal_ablation",
    "title": "CT-Guided Thermal Ablation of Adrenal Metastasis",
    "category": "Interventional Oncology",
    "domain": "oncology",
    "modality": "CT",
    "targetVessels": [
      "Adrenal Gland"
    ],
    "defaultPanelCostINR": 55000,
    "requiredLabs": [
      "Plasma Free Metanephrines (rule out pheochromocytoma)",
      "CBC",
      "INR"
    ],
    "clinicalCriteria": "Isolated adrenal metastasis from lung/colorectal carcinoma in oligometastatic state.",
    "preOpChecklist": [
      {
        "id": "adrenal_bp",
        "label": "Alpha-blocker premedication / IV phentolamine ready for hypertensive crisis",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Ablation Kit",
        "desc": "MWA / Cryoablation probes"
      }
    ]
  },
  {
    "key": "haic_port_insertion",
    "title": "Hepatic Arterial Infusion Chemotherapy (HAIC) Port Catheter Placement",
    "category": "Interventional Oncology",
    "domain": "oncology",
    "modality": "XA",
    "targetVessels": [
      "Gastroduodenal Artery",
      "Proper Hepatic Artery",
      "Subcutaneous Pocket"
    ],
    "defaultPanelCostINR": 58000,
    "requiredLabs": [
      "LFT",
      "INR",
      "CBC",
      "CT Angiography Celiac Axis"
    ],
    "clinicalCriteria": "Advanced unresectable HCC with major portal vein tumor thrombosis (PVTT).",
    "preOpChecklist": [
      {
        "id": "haic_gda_coil",
        "label": "Right gastric and extrahepatic branches coiled to prevent gastroduodenal ulceration",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Port System",
        "desc": "Low-profile Titanium Port + 5F Anthron Hepatic Catheter"
      }
    ]
  },
  {
    "key": "nanoknife_ire",
    "title": "Irreversible Electroporation (IRE / NanoKnife) for Locally Advanced PDAC / Central HCC",
    "category": "Interventional Oncology",
    "domain": "oncology",
    "modality": "CT",
    "targetVessels": [
      "Perivascular Pancreatic Parenchyma",
      "SMA / Celiac Axis Encasement"
    ],
    "defaultPanelCostINR": 180000,
    "requiredLabs": [
      "Serum Amylase/Lipase",
      "Cardiac clearance",
      "ECG synchronization check"
    ],
    "clinicalCriteria": "Locally advanced non-metastatic pancreatic adenocarcinoma (LAPC) encasing mesenteric vessels.",
    "preOpChecklist": [
      {
        "id": "ire_ecg_sync",
        "label": "ECG synchronization device connected to fire high-voltage pulses only during refractory period",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "NanoKnife System",
        "desc": "AngioDynamics NanoKnife Generator + 4-6 parallel monopolar 19G probes"
      }
    ]
  },
  {
    "key": "cyst_sclerotherapy",
    "title": "Percutaneous Drainage & Sclerotherapy of Giant Hepatic / Renal Cysts",
    "category": "Interventional Oncology",
    "domain": "oncology",
    "modality": "US",
    "targetVessels": [
      "Cyst Cavity"
    ],
    "defaultPanelCostINR": 20000,
    "requiredLabs": [
      "CBC",
      "INR",
      "Serum Echinococcal Serology (if hydatid suspected)"
    ],
    "clinicalCriteria": "Symptomatic giant simple hepatic cyst (>8-10 cm) causing gastric outlet obstruction or pain.",
    "preOpChecklist": [
      {
        "id": "cyst_bilirubin",
        "label": "Aspirate sent for bilirubin to strictly rule out biliary communication before alcohol instillation",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Sclerosant",
        "desc": "99% Absolute Ethanol / 1-3% STS foam + 8.5F locking pigtail catheter"
      }
    ]
  },
  {
    "key": "chemoport_insertion",
    "title": "Ultrasound-Guided Subclavian / Internal Jugular Chemoport Placement",
    "category": "Venous Access & Dialysis",
    "domain": "venous",
    "modality": "FL",
    "targetVessels": [
      "Right Internal Jugular Vein",
      "Right Subclavian Vein",
      "SVC-Right Atrial Junction"
    ],
    "defaultPanelCostINR": 18000,
    "requiredLabs": [
      "CBC (Absolute Neutrophil Count >1000, Platelets >50,000)",
      "PT / INR",
      "Viral Markers"
    ],
    "clinicalCriteria": "Long-term chemotherapy access for solid / hematological malignancies.",
    "preOpChecklist": [
      {
        "id": "port_tip",
        "label": "Fluoroscopy confirms catheter tip sits at cavoatrial junction",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Port System",
        "desc": "Titanium / Plastic 6.6F - 8F single-lumen port with tunneling trocars"
      }
    ]
  },
  {
    "key": "permacath_insertion",
    "title": "Tunneled Cuffed Hemodialysis Catheter (Permacath) Insertion",
    "category": "Venous Access & Dialysis",
    "domain": "venous",
    "modality": "FL",
    "targetVessels": [
      "Right Internal Jugular Vein (preferred)",
      "Left IJV",
      "Femoral Vein"
    ],
    "defaultPanelCostINR": 22000,
    "requiredLabs": [
      "CBC",
      "PT / INR",
      "Serum Potassium",
      "BUN / Creatinine"
    ],
    "clinicalCriteria": "End-Stage Renal Disease (ESRD) requiring immediate maintenance hemodialysis without mature AV fistula.",
    "preOpChecklist": [
      {
        "id": "permacath_flow",
        "label": "Aspirate both arterial and venous lumens for brisk free flow of 10 mL blood",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Catheter",
        "desc": "14.5F 19-24 cm Split-tip / Step-tip silicone cuffed catheter (Ash Split / Palindrome)"
      }
    ]
  },
  {
    "key": "ivc_filter_placement",
    "title": "Inferior Vena Cava (IVC) Filter Placement (Infrarenal / Suprarenal)",
    "category": "Venous Access & Dialysis",
    "domain": "venous",
    "modality": "FL",
    "targetVessels": [
      "Infrarenal Inferior Vena Cava"
    ],
    "defaultPanelCostINR": 52000,
    "requiredLabs": [
      "Venous Doppler Lower Limbs",
      "PT / INR",
      "Creatinine"
    ],
    "clinicalCriteria": "Acute DVT/PE with absolute contraindication to anticoagulation (active bleeding, planned major surgery).",
    "preOpChecklist": [
      {
        "id": "ivc_caliper",
        "label": "Caval diameter measured on cavogram (<28 mm for standard filter; >28 mm requires mega-filter)",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Filter System",
        "desc": "Cook Günther Tulip / Celect / Cordis TrapEase retrievable IVC filter"
      }
    ]
  },
  {
    "key": "ivc_filter_retrieval",
    "title": "Complex Endovascular IVC Filter Retrieval (Endobronchial Forceps / Snare)",
    "category": "Venous Access & Dialysis",
    "domain": "venous",
    "modality": "XA",
    "targetVessels": [
      "Inferior Vena Cava"
    ],
    "defaultPanelCostINR": 45000,
    "requiredLabs": [
      "Contrast CT Abdomen (Filter tilt, hook incorporation into caval wall)",
      "INR",
      "Creatinine"
    ],
    "clinicalCriteria": "Resolution of transient contraindication to anticoagulation; prevention of long-term filter thrombosis.",
    "preOpChecklist": [
      {
        "id": "filter_thrombus",
        "label": "Cavogram verifies absence of large thrombus (>25%) trapped within the filter cone",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Retrieval Set",
        "desc": "GooseNeck Snare 15-25 mm + Endobronchial biopsy forceps + 11F long sheath"
      }
    ]
  },
  {
    "key": "dvt_cdt_thrombectomy",
    "title": "Iliofemoral DVT: Catheter-Directed Thrombolysis (CDT) & Mechanical Thrombectomy",
    "category": "Venous Access & Dialysis",
    "domain": "venous",
    "modality": "XA",
    "targetVessels": [
      "Common Iliac Vein",
      "External Iliac Vein",
      "Common Femoral Vein",
      "Popliteal Vein"
    ],
    "defaultPanelCostINR": 75000,
    "requiredLabs": [
      "Fibrinogen (Baseline & every 6h)",
      "CBC",
      "PT / INR",
      "Lower Limb CT Venography"
    ],
    "clinicalCriteria": "Acute extensive iliofemoral DVT (<14 days), Phlegmasia cerulea dolens, low bleeding risk.",
    "preOpChecklist": [
      {
        "id": "dvt_fib_mon",
        "label": "Protocol for stopping t-PA if serum fibrinogen drops <100-150 mg/dL",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Infusion System",
        "desc": "Cragg-McNamara multi-sidehole catheter (t-PA 0.5-1.0 mg/h) OR Inari ClotTriever / AngioJet"
      }
    ]
  },
  {
    "key": "may_thurner_stenting",
    "title": "May-Thurner Syndrome: Left Common Iliac Vein Venoplasty & Stenting",
    "category": "Venous Access & Dialysis",
    "domain": "venous",
    "modality": "XA",
    "targetVessels": [
      "Left Common Iliac Vein (Compressed by Right Common Iliac Artery)"
    ],
    "defaultPanelCostINR": 65000,
    "requiredLabs": [
      "CT Venography / IVUS",
      "INR",
      "CBC"
    ],
    "clinicalCriteria": "Chronic venous insufficiency, recurrent left leg DVT, extrinsic caval compression verified on IVUS (>50% area stenosis).",
    "preOpChecklist": [
      {
        "id": "mts_stent_size",
        "label": "Dedicated large-caliber venous stent selected (14-16 mm) spanning across confluence into IVC",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Venous Stent",
        "desc": "Dedicated venous nitinol stent (Venovo / Abre / Zilver Vena 14-16 mm x 60-90 mm)"
      }
    ]
  },
  {
    "key": "svc_syndrome_stenting",
    "title": "Superior Vena Cava (SVC) Syndrome Emergency Recanalization & Stenting",
    "category": "Venous Access & Dialysis",
    "domain": "venous",
    "modality": "XA",
    "targetVessels": [
      "Superior Vena Cava",
      "Right / Left Brachiocephalic Vein"
    ],
    "defaultPanelCostINR": 70000,
    "requiredLabs": [
      "Contrast CT Chest (SVC caliber & thrombus extent)",
      "INR",
      "CBC"
    ],
    "clinicalCriteria": "Severe facial/neck edema, respiratory distress, laryngeal edema due to malignant SVC compression.",
    "preOpChecklist": [
      {
        "id": "svc_balloon",
        "label": "Predilatation with 10-12 mm balloon followed by self-expanding stent deployment",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Stents",
        "desc": "Wallstent / E-Luminexx 14-18 mm x 60 mm bare nitinol stent"
      }
    ]
  },
  {
    "key": "dialysis_avf_angioplasty",
    "title": "Hemodialysis AV Fistula Percutaneous Angioplasty (Fistuloplasty)",
    "category": "Venous Access & Dialysis",
    "domain": "venous",
    "modality": "FL",
    "targetVessels": [
      "Juxta-Anastomotic Outflow Vein",
      "Cephalic Vein Swing Point",
      "Subclavian Vein"
    ],
    "defaultPanelCostINR": 25000,
    "requiredLabs": [
      "Hemodialysis Access Pressure",
      "Kt/V Ratio",
      "Access Flow Rate (<500 mL/min)"
    ],
    "clinicalCriteria": "Elevated venous pressures during dialysis (>200 mmHg), prolonged post-needle bleeding, poor flow.",
    "preOpChecklist": [
      {
        "id": "avf_high_press",
        "label": "Use high-pressure non-compliant balloon (Conquest / Dorado rated to 25-30 atm)",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "PTA Balloon",
        "desc": "Mustang / Conquest 5-8 mm x 40 mm high-pressure balloon"
      }
    ]
  },
  {
    "key": "dialysis_avf_declotting",
    "title": "Thrombosed AV Fistula / AV Graft Pharmacomechanical Declotting",
    "category": "Venous Access & Dialysis",
    "domain": "venous",
    "modality": "FL",
    "targetVessels": [
      "Arterial Anastomosis",
      "Venous Anastomosis",
      "Graft / Native Vein Body"
    ],
    "defaultPanelCostINR": 35000,
    "requiredLabs": [
      "Doppler USG (Document occlusive thrombus length)",
      "CBC",
      "Electrolytes"
    ],
    "clinicalCriteria": "Acute loss of thrill and bruit over AV fistula within 24-48 hours.",
    "preOpChecklist": [
      {
        "id": "avf_cross_sheaths",
        "label": "Dual criss-cross 6F sheath technique utilized for complete bidirectional maceration",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Hardware",
        "desc": "Fogarty 4F arterial embolectomy catheter + Trerotola / Arrow-Trerotola mechanical cleaner + t-PA"
      }
    ]
  },
  {
    "key": "central_venous_recanalization",
    "title": "Thoracic Central Venous Occlusion Sharp Recanalization (Subclavian / Brachiocephalic)",
    "category": "Venous Access & Dialysis",
    "domain": "venous",
    "modality": "XA",
    "targetVessels": [
      "Subclavian Vein",
      "Brachiocephalic (Innominate) Vein"
    ],
    "defaultPanelCostINR": 55000,
    "requiredLabs": [
      "Chest CT Venography",
      "INR",
      "Creatinine"
    ],
    "clinicalCriteria": "Severe ipsilateral arm swelling, loss of dialysis access secondary to central venous stenosis.",
    "preOpChecklist": [
      {
        "id": "central_sharp",
        "label": "Bi-plane fluoroscopy roadmapping with snare target for sharp needle crossing",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Hardware",
        "desc": "Rösch-Uchida needle / RF wire (PowerWire) + Covered stent-graft (Fluency 10-12 mm)"
      }
    ]
  },
  {
    "key": "pe_mechanical_thrombectomy",
    "title": "Massive / Submassive Pulmonary Embolism Catheter Thrombectomy & CDT",
    "category": "Venous Access & Dialysis",
    "domain": "venous",
    "modality": "XA",
    "targetVessels": [
      "Main Pulmonary Artery Trunk",
      "Right / Left Pulmonary Arteries"
    ],
    "defaultPanelCostINR": 95000,
    "requiredLabs": [
      "CT Pulmonary Angiogram (RV/LV ratio >0.9)",
      "Cardiac Troponin",
      "BNP",
      "ABG",
      "Echocardiogram"
    ],
    "clinicalCriteria": "Massive PE with shock / hypotension OR Submassive PE with right ventricular strain and troponin leak.",
    "preOpChecklist": [
      {
        "id": "pe_heparin_active",
        "label": "Weight-adjusted unfractionated heparin infusion running",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Thrombectomy Device",
        "desc": "FlowTriever (Inari Medical) / Indigo System (Penumbra) / EKOS Ultrasound-Assisted CDT"
      }
    ]
  },
  {
    "key": "tj_renal_biopsy",
    "title": "Transjugular Renal Biopsy (TJRB)",
    "category": "Venous Access & Dialysis",
    "domain": "venous",
    "modality": "XA",
    "targetVessels": [
      "Right Renal Vein",
      "Interlobar Renal Vein"
    ],
    "defaultPanelCostINR": 32000,
    "requiredLabs": [
      "Platelets",
      "INR",
      "Serum Creatinine",
      "Urine Protein/Creatinine Ratio"
    ],
    "clinicalCriteria": "Renal parenchymal disease requiring histological classification in patients with severe uncorrectable coagulopathy.",
    "preOpChecklist": [
      {
        "id": "tjrb_contrast",
        "label": "Gentle renal venogram roadmapping to verify lower pole interlobar branch position",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Biopsy Gun",
        "desc": "Cook Quick-Core 19G Transjugular Biopsy System"
      }
    ]
  },
  {
    "key": "adrenal_vein_sampling",
    "title": "Adrenal Venous Sampling (AVS) for Primary Aldosteronism",
    "category": "Venous Access & Dialysis",
    "domain": "venous",
    "modality": "XA",
    "targetVessels": [
      "Right Adrenal Vein",
      "Left Adrenal Vein",
      "Infrarenal IVC"
    ],
    "defaultPanelCostINR": 35000,
    "requiredLabs": [
      "Aldosterone-to-Renin Ratio (ARR)",
      "CT Adrenals",
      "Serum Potassium"
    ],
    "clinicalCriteria": "Confirmed primary hyperaldosteronism (Conn Syndrome) to differentiate unilateral adenoma from bilateral hyperplasia.",
    "preOpChecklist": [
      {
        "id": "avs_acth",
        "label": "Continuous IV Cosyntropin (ACTH) infusion running during bilateral simultaneous sampling",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Catheters",
        "desc": "5F C2 / Mikaelsson (for Left Adrenal) + 5F Reuter / Adrenal Curve (for tiny Right Adrenal Vein)"
      }
    ]
  },
  {
    "key": "mesenteric_vein_thrombectomy",
    "title": "Superior Mesenteric Vein (SMV) Catheter-Directed Thrombolysis",
    "category": "Venous Access & Dialysis",
    "domain": "venous",
    "modality": "XA",
    "targetVessels": [
      "Superior Mesenteric Vein",
      "Splenic Vein Confluence"
    ],
    "defaultPanelCostINR": 70000,
    "requiredLabs": [
      "Lactate (Bowel ischemia marker)",
      "CT Angiography",
      "CBC",
      "INR"
    ],
    "clinicalCriteria": "Acute portomesenteric venous thrombosis with progressive abdominal pain and impending bowel infarction.",
    "preOpChecklist": [
      {
        "id": "smv_transhepatic",
        "label": "Transhepatic or transjugular portal cannulation for direct clot infusion catheter placement",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Catheter",
        "desc": "Multi-sidehole infusion catheter + Alteplase 0.5 mg/h"
      }
    ]
  },
  {
    "key": "percutaneous_fistula_creation",
    "title": "Endovascular Arteriovenous Fistula (EndoAVF) Creation",
    "category": "Venous Access & Dialysis",
    "domain": "venous",
    "modality": "FL",
    "targetVessels": [
      "Proximal Radial Artery",
      "Perforating Vein / Deep Communicating Vein"
    ],
    "defaultPanelCostINR": 85000,
    "requiredLabs": [
      "Upper Extremity Doppler Mapping (Radial artery >2mm, Perforating vein >2mm)"
    ],
    "clinicalCriteria": "Surgical candidate for non-surgical radiofrequency-assisted AV fistula creation.",
    "preOpChecklist": [
      {
        "id": "endoavf_mapping",
        "label": "Ultrasound confirms suitable vessel proximity (<1.5 mm apart)",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Device",
        "desc": "WavelinQ / Ellipsys EndoAVF Catheter System"
      }
    ]
  },
  {
    "key": "evar_aortic_aneurysm",
    "title": "Endovascular Abdominal Aortic Aneurysm Repair (EVAR)",
    "category": "Arterial & Aortic Interventions",
    "domain": "arterial",
    "modality": "XA",
    "targetVessels": [
      "Infrarenal Aorta",
      "Common Iliac Arteries",
      "External Iliac Arteries"
    ],
    "defaultPanelCostINR": 220000,
    "requiredLabs": [
      "CT Aortography (Neck length >10-15mm, neck angulation, iliac access caliber)",
      "Serum Creatinine",
      "INR"
    ],
    "clinicalCriteria": "Abdominal aortic aneurysm >5.5 cm in men, >5.0 cm in women, or rapid expansion (>1 cm/year).",
    "preOpChecklist": [
      {
        "id": "evar_neck",
        "label": "Infrarenal proximal landing zone diameter and length matched to stent graft sizing",
        "required": true
      },
      {
        "id": "evar_perclose",
        "label": "Preclose technique executed using ProGlide / ProStyle devices at bilateral common femoral access",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Bifurcated Stent-Graft",
        "desc": "Medtronic Endurant II / Gore Excluder / Cook Zenith bifurcated modular system"
      },
      {
        "item": "Molding Balloon",
        "desc": "Reliant / Coda large aortic balloon"
      }
    ]
  },
  {
    "key": "tevar_thoracic",
    "title": "Thoracic Endovascular Aortic Repair (TEVAR) for Aortic Dissection / Aneurysm",
    "category": "Arterial & Aortic Interventions",
    "domain": "arterial",
    "modality": "XA",
    "targetVessels": [
      "Descending Thoracic Aorta",
      "Aortic Arch (Zone 2/3)"
    ],
    "defaultPanelCostINR": 250000,
    "requiredLabs": [
      "ECG-Gated Thoracic CT Angiography",
      "Serum Creatinine",
      "CBC",
      "Blood Crossmatch"
    ],
    "clinicalCriteria": "Complicated Type B aortic dissection (rupture, malperfusion, intractable pain) or thoracic aneurysm >5.5-6.0 cm.",
    "preOpChecklist": [
      {
        "id": "tevar_subclavian",
        "label": "Plan for Left Subclavian Artery revascularization if Zone 2 landing required",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Thoracic Stent-Graft",
        "desc": "Gore TAG / Medtronic Valiant Navion thoracic stent-graft (26-42 mm)"
      }
    ]
  },
  {
    "key": "pad_sfa_angioplasty",
    "title": "Peripheral Arterial Disease: Superficial Femoral Artery (SFA) PTA & Stenting",
    "category": "Arterial & Aortic Interventions",
    "domain": "arterial",
    "modality": "XA",
    "targetVessels": [
      "Superficial Femoral Artery (SFA)",
      "Popliteal Artery"
    ],
    "defaultPanelCostINR": 65000,
    "requiredLabs": [
      "Ankle-Brachial Index (ABI)",
      "Peripheral CT Angiography",
      "Serum Creatinine"
    ],
    "clinicalCriteria": "Rutherford Category 3-6 (severe claudication / critical limb-threatening ischemia with rest pain/ulcers).",
    "preOpChecklist": [
      {
        "id": "pad_anticoag",
        "label": "Intra-arterial heparin 5000 IU administered upon sheath insertion",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Balloons & Stents",
        "desc": "Drug-Coated Balloon (DCB, Lutonix/In.Pact) + Self-expanding nitinol stent (Supera / LifeStent 6 mm)"
      }
    ]
  },
  {
    "key": "pad_btk_angioplasty",
    "title": "Below-The-Knee (BTK) Tibial Angioplasty for Critical Limb Ischemia",
    "category": "Arterial & Aortic Interventions",
    "domain": "arterial",
    "modality": "XA",
    "targetVessels": [
      "Anterior Tibial Artery",
      "Posterior Tibial Artery",
      "Peroneal Artery",
      "Pedal Arch"
    ],
    "defaultPanelCostINR": 58000,
    "requiredLabs": [
      "ABI / Toe Pressure",
      "Creatinine",
      "Wound Culture"
    ],
    "clinicalCriteria": "Critical limb ischemia with gangrene / non-healing diabetic ulcer requiring inline flow to the angiosome.",
    "preOpChecklist": [
      {
        "id": "btk_wire",
        "label": "Use 0.014\" Command / V-18 long wire with dedicated 2.0-3.0 mm long balloons",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Long Balloons",
        "desc": "Amphirion / Coyote 2.0-3.5 mm x 150-220 mm long balloons"
      }
    ]
  },
  {
    "key": "aortoiliac_kissing_stenting",
    "title": "Aortoiliac Occlusive Disease (Leriche Syndrome) Kissing Stenting",
    "category": "Arterial & Aortic Interventions",
    "domain": "arterial",
    "modality": "XA",
    "targetVessels": [
      "Aortic Bifurcation",
      "Bilateral Common Iliac Arteries"
    ],
    "defaultPanelCostINR": 95000,
    "requiredLabs": [
      "CT Angiography Pelvis",
      "Creatinine",
      "ABI"
    ],
    "clinicalCriteria": "Bilateral buttock claudication, impotence, absent femoral pulses (Leriche Triad).",
    "preOpChecklist": [
      {
        "id": "kissing_simult",
        "label": "Deploy stents simultaneously across the aortic bifurcation to prevent contralateral displacement",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Stents",
        "desc": "Balloon-expandable covered / bare metal stents (Express LD / Omnilink 8-10 mm)"
      }
    ]
  },
  {
    "key": "renal_artery_stenting",
    "title": "Percutaneous Transluminal Renal Angioplasty & Stenting (PTRA)",
    "category": "Arterial & Aortic Interventions",
    "domain": "arterial",
    "modality": "XA",
    "targetVessels": [
      "Main Renal Artery (Ostial / Truncal)"
    ],
    "defaultPanelCostINR": 58000,
    "requiredLabs": [
      "Renal Doppler Peak Systolic Velocity (>200 cm/s)",
      "Renal CT Angio",
      "Serum Creatinine",
      "eGFR"
    ],
    "clinicalCriteria": "Hemodynamically significant renal artery stenosis (>70%) with refractory hypertension on 3+ drugs or flash pulmonary edema (Pickering Syndrome).",
    "preOpChecklist": [
      {
        "id": "ptra_embolic_protect",
        "label": "Low contrast load; verify 1-2 mm stent protrusion into aortic lumen",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Renal Stent",
        "desc": "Balloon-expandable stent (Omnilink / Herculink Elite 5-7 mm x 15 mm)"
      }
    ]
  },
  {
    "key": "mesenteric_stenting",
    "title": "Mesenteric Artery Angioplasty & Stenting for Chronic Mesenteric Ischemia",
    "category": "Arterial & Aortic Interventions",
    "domain": "arterial",
    "modality": "XA",
    "targetVessels": [
      "Superior Mesenteric Artery (SMA Ostium)",
      "Celiac Axis"
    ],
    "defaultPanelCostINR": 65000,
    "requiredLabs": [
      "CT Angiography (Sagittal MIP reformat of SMA)",
      "Serum Lactate",
      "Nutritional Markers"
    ],
    "clinicalCriteria": "Postprandial abdominal angina, food fear, severe unintentional weight loss, with >70% stenosis in 2 of 3 mesenteric vessels.",
    "preOpChecklist": [
      {
        "id": "mes_access",
        "label": "Brachial or radial arterial approach selected for favorable downward SMA takeoff angle",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Hardware",
        "desc": "6F 90cm Guiding Sheath + Balloon-expandable covered/bare stent (6-8 mm)"
      }
    ]
  },
  {
    "key": "carotid_stenting",
    "title": "Carotid Artery Stenting (CAS) with Distal Embolic Protection",
    "category": "Arterial & Aortic Interventions",
    "domain": "arterial",
    "modality": "XA",
    "targetVessels": [
      "Common Carotid Artery (CCA)",
      "Internal Carotid Artery (ICA Bulb)"
    ],
    "defaultPanelCostINR": 95000,
    "requiredLabs": [
      "Carotid Doppler & CTA Head/Neck",
      "Platelet Function Test (Clopidogrel / Aspirin response)",
      "NIH Stroke Scale"
    ],
    "clinicalCriteria": "Symptomatic carotid stenosis >50% or asymptomatic >70% in high-surgical-risk patients (radiation neck, tracheostomy, high bifurcation).",
    "preOpChecklist": [
      {
        "id": "cas_embolic_filter",
        "label": "Distal embolic protection filter deployed prior to crossing with stent",
        "required": true
      },
      {
        "id": "cas_atropine",
        "label": "Atropine 0.6-1.0 mg drawn up for carotid sinus bradycardia / hypotension",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Embolic Protection",
        "desc": "SpiderFX / FilterWire EZ / Accunet embolic protection device"
      },
      {
        "item": "Carotid Stent",
        "desc": "Acculink / Precise / Cristallo Ideale self-expanding nitinol stent (7-10 mm tapered)"
      }
    ]
  },
  {
    "key": "subclavian_stenting",
    "title": "Subclavian Artery Stenting for Subclavian Steal Syndrome",
    "category": "Arterial & Aortic Interventions",
    "domain": "arterial",
    "modality": "XA",
    "targetVessels": [
      "Left Subclavian Artery (Pre-Vertebral Segment)"
    ],
    "defaultPanelCostINR": 55000,
    "requiredLabs": [
      "Bilateral Arm Blood Pressure Differential (>20 mmHg)",
      "Doppler (Reversed vertebral flow)",
      "CTA Neck"
    ],
    "clinicalCriteria": "Vertebrobasilar insufficiency symptoms (syncope, vertigo upon arm exercise) with retrograde flow in ipsilateral vertebral artery.",
    "preOpChecklist": [
      {
        "id": "subclavian_vertebral",
        "label": "Verify stent landing site is precisely proximal to the vertebral artery origin",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Stent",
        "desc": "Balloon-expandable stent (Express LD 8-10 mm x 20-30 mm)"
      }
    ]
  },
  {
    "key": "visceral_aneurysm_exclusion",
    "title": "Visceral Artery Aneurysm Covered Stent Exclusion (Splenic / Hepatic / SMA)",
    "category": "Arterial & Aortic Interventions",
    "domain": "arterial",
    "modality": "XA",
    "targetVessels": [
      "Splenic Artery",
      "Common Hepatic Artery",
      "SMA Trunk"
    ],
    "defaultPanelCostINR": 75000,
    "requiredLabs": [
      "Triphasic CT Angiography",
      "Serum Creatinine",
      "INR"
    ],
    "clinicalCriteria": "Visceral aneurysm >2 cm, rapid enlargement, or in women of childbearing age (high rupture risk).",
    "preOpChecklist": [
      {
        "id": "visceral_stent_land",
        "label": "Adequate 10-15 mm landing zone proximal and distal to aneurysm sac verified",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Covered Stent",
        "desc": "Viabahn / PK Papyrus covered stent-graft"
      }
    ]
  },
  {
    "key": "atherectomy_peripheral",
    "title": "Directional / Rotational Atherectomy for Heavily Calcified Peripheral Vessels",
    "category": "Arterial & Aortic Interventions",
    "domain": "arterial",
    "modality": "XA",
    "targetVessels": [
      "Superficial Femoral Artery",
      "Popliteal Artery"
    ],
    "defaultPanelCostINR": 85000,
    "requiredLabs": [
      "CT Angiography",
      "ABI",
      "Creatinine"
    ],
    "clinicalCriteria": "Severe concentric calcification causing balloon underexpansion.",
    "preOpChecklist": [
      {
        "id": "athero_filter",
        "label": "Distal embolic protection filter placed to trap plaque debris",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Atherectomy Device",
        "desc": "HawkOne (Medtronic) / Rotarex (BD) / Jetstream"
      }
    ]
  },
  {
    "key": "ali_thrombolysis",
    "title": "Acute Limb Ischemia (ALI): Catheter-Directed Thrombolysis (CDT)",
    "category": "Arterial & Aortic Interventions",
    "domain": "arterial",
    "modality": "XA",
    "targetVessels": [
      "Popliteal Artery",
      "Tibial Trifurcation",
      "Native Arteries / Bypass Grafts"
    ],
    "defaultPanelCostINR": 60000,
    "requiredLabs": [
      "CBC",
      "Fibrinogen",
      "INR",
      "Sensory / Motor Motor Deficit Examination (Rutherford ALI Grade I/IIa)"
    ],
    "clinicalCriteria": "Acute limb ischemia <14 days with viable limb (Rutherford I or IIa).",
    "preOpChecklist": [
      {
        "id": "ali_neuro",
        "label": "Compartment syndrome monitoring charted every 2 hours",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Infusion Catheter",
        "desc": "Cragg-McNamara 4F/5F 10-20 cm infusion catheter"
      }
    ]
  },
  {
    "key": "upper_extremity_pta",
    "title": "Upper Extremity Arterial Angioplasty / Stenting (Brachial / Axillary)",
    "category": "Arterial & Aortic Interventions",
    "domain": "arterial",
    "modality": "XA",
    "targetVessels": [
      "Axillary Artery",
      "Brachial Artery"
    ],
    "defaultPanelCostINR": 48000,
    "requiredLabs": [
      "Doppler Arterial Upper Limb",
      "INR",
      "CBC"
    ],
    "clinicalCriteria": "Ischemic hand / digital ulcerations from proximal atherosclerotic / vasculitic stenosis.",
    "preOpChecklist": [
      {
        "id": "upper_pta_spasm",
        "label": "Intra-arterial nitroglycerin (100-200 ug) given to prevent vasospasm",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Balloons",
        "desc": "4-6 mm x 40 mm non-compliant balloons"
      }
    ]
  },
  {
    "key": "carotid_pseudoaneurysm_stent",
    "title": "Extracranial Carotid Pseudoaneurysm Covered Stenting",
    "category": "Arterial & Aortic Interventions",
    "domain": "arterial",
    "modality": "XA",
    "targetVessels": [
      "Common / Internal Carotid Artery"
    ],
    "defaultPanelCostINR": 85000,
    "requiredLabs": [
      "CT Neck Angiography",
      "INR",
      "Platelets"
    ],
    "clinicalCriteria": "Traumatic / post-surgical pseudoaneurysm of cervical carotid with rupture risk.",
    "preOpChecklist": [
      {
        "id": "carotid_pseudo_plan",
        "label": "Dual antiplatelet therapy loaded pre-procedure",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Covered Stent",
        "desc": "Fluency / Viabahn covered stent"
      }
    ]
  },
  {
    "key": "gae_knee_oa",
    "title": "Genicular Artery Embolization (GAE) for Refractory Knee Osteoarthritis",
    "category": "Arterial & Aortic Interventions",
    "domain": "arterial",
    "modality": "XA",
    "targetVessels": [
      "Descending Genicular Artery",
      "Superior Medial / Lateral Genicular",
      "Inferior Medial Genicular"
    ],
    "defaultPanelCostINR": 52000,
    "requiredLabs": [
      "Knee X-Ray (Kellgren-Lawrence Grade 1-3)",
      "Knee MRI (Synovitis)",
      "WOMAC Score",
      "VAS Pain Score"
    ],
    "clinicalCriteria": "Moderate knee osteoarthritis with chronic joint pain refractory to conservative therapy and intra-articular injections.",
    "preOpChecklist": [
      {
        "id": "gae_hypervasc",
        "label": "Angiography identifies abnormal hypervascular mucosal blush corresponding to focal pain quadrant",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Embolic Mix",
        "desc": "Permanent microspheres (Embozene 75-100 um) OR Imipenem/Cilastatin emulsion"
      },
      {
        "item": "Microcatheter",
        "desc": "1.9F - 2.0F microcatheter with 0.014\" wire"
      }
    ]
  },
  {
    "key": "core_biopsy",
    "title": "USG-Guided Coaxial Core Needle Biopsy (Liver / Soft Tissue / Renal)",
    "category": "Biopsies, Drainage & Pain",
    "domain": "biopsy",
    "modality": "US",
    "targetVessels": [
      "Liver Segments",
      "Soft Tissue Masses",
      "Renal Cortex"
    ],
    "defaultPanelCostINR": 8500,
    "requiredLabs": [
      "CBC (Platelets >50,000)",
      "PT / INR (<1.5)",
      "Viral Markers (HBsAg, HCV, HIV)"
    ],
    "clinicalCriteria": "Histological diagnosis of focal solid lesions, staging of chronic liver disease, renal allograft dysfunction.",
    "preOpChecklist": [
      {
        "id": "bx_consent",
        "label": "Informed consent detailing bleeding and tract seeding risks signed",
        "required": true
      },
      {
        "id": "bx_coag",
        "label": "Platelets >50,000/uL and INR <1.5 confirmed",
        "required": true
      },
      {
        "id": "bx_imaging",
        "label": "Real-time ultrasound tract planned avoiding major vascular conduits and gallbladder",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Biopsy Gun",
        "desc": "18G Coaxial Introducer with 18G/20G Automated Core Needle (Quick-Core / Temno)"
      },
      {
        "item": "Specimen Prep",
        "desc": "10% Neutral buffered formalin containers"
      }
    ]
  },
  {
    "key": "ct_biopsy",
    "title": "CT-Guided Core Needle Biopsy (Lung / Retroperitoneal / Bone)",
    "category": "Biopsies, Drainage & Pain",
    "domain": "biopsy",
    "modality": "CT",
    "targetVessels": [
      "Lung Parenchyma",
      "Retroperitoneum / Pelvic Node",
      "Vertebral / Appendicular Bone"
    ],
    "defaultPanelCostINR": 12000,
    "requiredLabs": [
      "CBC",
      "INR",
      "Serum Creatinine",
      "Contrast CT Review"
    ],
    "clinicalCriteria": "Solitary pulmonary nodule, deep retroperitoneal lymphadenopathy, bone metastasis requiring molecular profiling (EGFR/ALK/PD-L1).",
    "preOpChecklist": [
      {
        "id": "ctbx_consent",
        "label": "Written informed consent (pneumothorax/chest tube risk for lung)",
        "required": true
      },
      {
        "id": "ctbx_tract",
        "label": "CT trajectory plotted avoiding bullae, intercostal vessels, and fissures",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Biopsy Needle",
        "desc": "18G/19G Coaxial Temno / BioPince full core needle"
      }
    ]
  },
  {
    "key": "fnac_rose",
    "title": "Fine Needle Aspiration Cytology (FNAC) with Rapid On-Site Evaluation (ROSE)",
    "category": "Biopsies, Drainage & Pain",
    "domain": "biopsy",
    "modality": "US",
    "targetVessels": [
      "Thyroid (EU-TIRADS 4/5)",
      "Cervical / Axillary / Inguinal Lymph Node",
      "Salivary Gland"
    ],
    "defaultPanelCostINR": 4500,
    "requiredLabs": [
      "Platelet Count",
      "Neck Ultrasound",
      "Thyroid Profile"
    ],
    "clinicalCriteria": "Cytopathological evaluation of thyroid nodules, suspected lymphoma vs metastatic lymphadenopathy.",
    "preOpChecklist": [
      {
        "id": "fnac_rose_setup",
        "label": "ROSE on-site cytopathologist / stained microscope setup ready",
        "required": true
      },
      {
        "id": "fnac_slides_ready",
        "label": "Air-dried (MGG) and 95% ethanol fixed (Pap) slides ready",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Aspiration Handle",
        "desc": "Cameco syringe pistol with 10 mL/20 mL Luer-lock syringe"
      },
      {
        "item": "Needles",
        "desc": "22G - 25G disposable needles"
      }
    ]
  },
  {
    "key": "pcd_drainage",
    "title": "Percutaneous Catheter Drainage (PCD) of Intra-Abdominal / Pelvic Abscess",
    "category": "Biopsies, Drainage & Pain",
    "domain": "biopsy",
    "modality": "US",
    "targetVessels": [
      "Subhepatic Space",
      "Pouch of Douglas",
      "Retroperitoneal Collection"
    ],
    "defaultPanelCostINR": 15000,
    "requiredLabs": [
      "CBC (TLC)",
      "Serum Creatinine",
      "INR",
      "Ultrasound / CT Abdomen"
    ],
    "clinicalCriteria": "Liquefied infective fluid collection / abscess >3-5 cm causing systemic sepsis.",
    "preOpChecklist": [
      {
        "id": "pcd_antibiotics",
        "label": "IV antibiotics ongoing; safe window without bowel traversal confirmed",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Pigtail Catheter",
        "desc": "8F - 12F Locking Pigtail drainage catheter with trocar set"
      },
      {
        "item": "Drain Bag",
        "desc": "Closed drainage drainage bag with antireflux valve"
      }
    ]
  },
  {
    "key": "pcd_wopn_pancreatitis",
    "title": "Percutaneous Step-Up Catheter Drainage of Walled-Off Pancreatic Necrosis (WOPN)",
    "category": "Biopsies, Drainage & Pain",
    "domain": "biopsy",
    "modality": "CT",
    "targetVessels": [
      "Lesser Sac",
      "Left Paracolic Gutter",
      "Peripancreatic Retroperitoneum"
    ],
    "defaultPanelCostINR": 25000,
    "requiredLabs": [
      "Serum Amylase/Lipase",
      "CBC",
      "Blood Gases",
      "Contrast-Enhanced CT (Balthazar E / Necrosis >30%)"
    ],
    "clinicalCriteria": "Infected necrotizing pancreatitis / symptomatic large WOPN causing gastric outlet obstruction or sepsis (PANTER Trial Step-Up).",
    "preOpChecklist": [
      {
        "id": "wopn_retroperitoneal",
        "label": "Left retroperitoneal transcolic-free route plotted behind spleen/colon",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Large-Bore Catheter",
        "desc": "14F - 20F Large-bore multi-sidehole sump / pigtail catheter"
      }
    ]
  },
  {
    "key": "pleural_pigtail",
    "title": "Ultrasound-Guided Percutaneous Pigtail Catheter Pleural Drainage (Thoracostomy)",
    "category": "Biopsies, Drainage & Pain",
    "domain": "biopsy",
    "modality": "US",
    "targetVessels": [
      "Pleural Cavity (Safe Triangle: Anterior Axillary to Mid-Axillary Line)"
    ],
    "defaultPanelCostINR": 12000,
    "requiredLabs": [
      "Chest X-Ray / USG",
      "Coagulation Profile"
    ],
    "clinicalCriteria": "Complicated parapneumonic effusion, empyema, symptomatic malignant pleural effusion, pneumothorax.",
    "preOpChecklist": [
      {
        "id": "pleural_sup_rib",
        "label": "Needle insertion strictly over superior border of rib to avoid intercostal neurovascular bundle",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Pigtail",
        "desc": "10F - 14F Locking Pleural Pigtail Catheter + Heimlich valve / Underwater seal"
      }
    ]
  },
  {
    "key": "paracentesis_albumin",
    "title": "Large-Volume Paracentesis (LVP) with Albumin Replacement Protocol",
    "category": "Biopsies, Drainage & Pain",
    "domain": "biopsy",
    "modality": "US",
    "targetVessels": [
      "Peritoneal Cavity (Left Lower Quadrant preferred)"
    ],
    "defaultPanelCostINR": 6500,
    "requiredLabs": [
      "Ascitic Fluid Analysis (SAAG, Protein, PMN Count)",
      "Serum Creatinine",
      "Serum Albumin",
      "INR"
    ],
    "clinicalCriteria": "Tense refractory ascites in cirrhosis causing respiratory embarrassment or abdominal compartment pressure.",
    "preOpChecklist": [
      {
        "id": "lvp_albumin_calc",
        "label": "Prescribe 6-8 g intravenous 20% Human Albumin per Liter of ascites removed over 5 Liters to prevent PICD",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Set",
        "desc": "Caldwell needle / 8F peritoneal catheter + Vacuum drainage bottles"
      }
    ]
  },
  {
    "key": "vertebroplasty",
    "title": "Percutaneous Fluoroscopy/CT-Guided Vertebroplasty",
    "category": "Biopsies, Drainage & Pain",
    "domain": "biopsy",
    "modality": "FL",
    "targetVessels": [
      "Vertebral Body (Transpedicular / Parapedicular Access)"
    ],
    "defaultPanelCostINR": 45000,
    "requiredLabs": [
      "Spine MRI (STIR hyperintensity confirming acute bone marrow edema)",
      "INR",
      "Platelets"
    ],
    "clinicalCriteria": "Painful osteoporotic vertebral compression fracture (OVCF) or lytic myeloma/metastasis failing conservative bedrest.",
    "preOpChecklist": [
      {
        "id": "vert_wall",
        "label": "Posterior vertebral wall integrity verified on CT/MRI to prevent epidural canal cement leak",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Cement & Needles",
        "desc": "11G/13G Diamond-tip bone biopsy needles + High-viscosity radiopaque PMMA bone cement"
      }
    ]
  },
  {
    "key": "balloon_kyphoplasty",
    "title": "Percutaneous Balloon Kyphoplasty with Height Restoration",
    "category": "Biopsies, Drainage & Pain",
    "domain": "biopsy",
    "modality": "FL",
    "targetVessels": [
      "Thoracic / Lumbar Vertebral Body"
    ],
    "defaultPanelCostINR": 68000,
    "requiredLabs": [
      "Spine MRI",
      "Bone Mineral Density (DEXA)",
      "Coagulation Profile"
    ],
    "clinicalCriteria": "Acute/subacute vertebral fracture with significant height loss (>30%) and kyphotic deformity.",
    "preOpChecklist": [
      {
        "id": "kypho_tamp",
        "label": "Inflatable bone tamps sized to vertebral height; monitor inflation pressure (atm)",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Kyphoplasty Kit",
        "desc": "KyphX Inflatable Bone Tamp balloon system + PMMA cement"
      }
    ]
  },
  {
    "key": "sacroplasty",
    "title": "CT-Guided Percutaneous Sacroplasty for Sacral Insufficiency Fracture",
    "category": "Biopsies, Drainage & Pain",
    "domain": "biopsy",
    "modality": "CT",
    "targetVessels": [
      "Sacral Ala / Lateral Mass (Zone 1/2)"
    ],
    "defaultPanelCostINR": 48000,
    "requiredLabs": [
      "Pelvic MRI (H-sign marrow edema on STIR)",
      "INR",
      "CBC"
    ],
    "clinicalCriteria": "Debilitating low back / buttock pain from sacral insufficiency fracture in severe osteoporosis.",
    "preOpChecklist": [
      {
        "id": "sacro_foraminal",
        "label": "Continuous CT axial checks to prevent cement extravasation into sacral neural foramina",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Bone Cannula",
        "desc": "11G trocar needles + PMMA cement"
      }
    ]
  },
  {
    "key": "transforaminal_nerve_block",
    "title": "Fluoroscopic Lumbar / Cervical Transforaminal Epidural Steroid Injection (TFESI)",
    "category": "Biopsies, Drainage & Pain",
    "domain": "biopsy",
    "modality": "FL",
    "targetVessels": [
      "Intervertebral Neural Foramen (Subpedicular Safe Triangle)"
    ],
    "defaultPanelCostINR": 15000,
    "requiredLabs": [
      "Spine MRI (Radiculopathy / Nerve Root Compression)",
      "INR",
      "Blood Glucose"
    ],
    "clinicalCriteria": "Lumbar disc herniation / spinal canal stenosis causing radicular sciatica unresponsive to oral analgesia.",
    "preOpChecklist": [
      {
        "id": "tfesi_contrast",
        "label": "Non-ionic contrast epidurogram shows neurotropic radicular spread without vascular uptake",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Needles & Drugs",
        "desc": "22G/25G 3.5\" Quincke needle + Non-particulate steroid (Dexamethasone 8mg) + 0.5% Bupivacaine"
      }
    ]
  },
  {
    "key": "celiac_plexus_neurolysis",
    "title": "CT / Fluoroscopy-Guided Celiac Plexus Neurolysis (CPN) for Intractable Pain",
    "category": "Biopsies, Drainage & Pain",
    "domain": "biopsy",
    "modality": "CT",
    "targetVessels": [
      "Retrocrural / Anterocrural Space around Celiac Axis Trunk"
    ],
    "defaultPanelCostINR": 25000,
    "requiredLabs": [
      "Contrast CT Abdomen (Tumor relationship to celiac axis)",
      "INR",
      "Platelets"
    ],
    "clinicalCriteria": "Intractable upper abdominal pain due to inoperable pancreatic adenocarcinoma or chronic pancreatitis requiring escalating opioids.",
    "preOpChecklist": [
      {
        "id": "cpn_fluids",
        "label": "Prehydrate with 500-1000 mL IV normal saline to prevent transient post-neurolysis orthostatic hypotension",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Neurolytic Mix",
        "desc": "20G 15cm Chiba needle + 50-100% Absolute Dehydrated Ethanol (20-40 mL) + 0.5% Bupivacaine"
      }
    ]
  },
  {
    "key": "splanchnic_nerve_block",
    "title": "Thoracic Splanchnic Nerve Radiofrequency Neurotomy / Chemical Block",
    "category": "Biopsies, Drainage & Pain",
    "domain": "biopsy",
    "modality": "FL",
    "targetVessels": [
      "T10-T11 Anterolateral Vertebral Body Surface"
    ],
    "defaultPanelCostINR": 28000,
    "requiredLabs": [
      "CT / MRI Thoracic Spine",
      "Coagulation Profile"
    ],
    "clinicalCriteria": "Upper abdominal malignancy pain where retrocrural celiac tumor prevents safe anterior celiac plexus access.",
    "preOpChecklist": [
      {
        "id": "splanchnic_lung",
        "label": "Fluoroscopic lateral view verifies needle depth at junction of anterior and middle third of vertebral body, avoiding pleura",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "RF Cannula",
        "desc": "20G 10-15 cm curved RF cannula with 10 mm active tip (80°C for 90 seconds)"
      }
    ]
  },
  {
    "key": "ganglion_impar_block",
    "title": "Fluoroscopic Ganglion Impar (Walther) Neurolysis for Intractable Pelvic / Perineal Pain",
    "category": "Biopsies, Drainage & Pain",
    "domain": "biopsy",
    "modality": "FL",
    "targetVessels": [
      "Sacrococcygeal Junction (Anterior Retroperitoneal Retro-rectal Space)"
    ],
    "defaultPanelCostINR": 18000,
    "requiredLabs": [
      "Pelvic MRI / CT",
      "INR"
    ],
    "clinicalCriteria": "Severe intractable perineal, rectal, or gynecological malignancy pain (tenesmus, burning).",
    "preOpChecklist": [
      {
        "id": "impar_contrast",
        "label": "Lateral fluoroscopic contrast injection shows classic \"comma-shaped\" retroperitoneal spread behind rectum",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Needle",
        "desc": "22G Spinal needle inserted trans-sacrococcygeal + Bupivacaine/Ethanol"
      }
    ]
  },
  {
    "key": "stellate_ganglion_block",
    "title": "Ultrasound-Guided Stellate Ganglion (Cervicothoracic Sympathetic) Block",
    "category": "Biopsies, Drainage & Pain",
    "domain": "biopsy",
    "modality": "US",
    "targetVessels": [
      "Longus Colli Muscle Fascia at C6 Chassaignac Tubercle"
    ],
    "defaultPanelCostINR": 16000,
    "requiredLabs": [
      "Neck Ultrasound",
      "INR",
      "CBC"
    ],
    "clinicalCriteria": "Complex Regional Pain Syndrome (CRPS Type I/II) of upper limb, refractory Raynaud phenomenon, phantom limb pain.",
    "preOpChecklist": [
      {
        "id": "stellate_horner",
        "label": "Confirm onset of Horner syndrome (ptosis, miosis, anhidrosis) and temperature rise in hand",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Injectable",
        "desc": "25G needle + 0.25% Levobupivacaine (5 mL)"
      }
    ]
  },
  {
    "key": "variceal_bleed_brto_emergency",
    "title": "Acute Variceal Bleed: Emergency TIPS / BRTO Hybrid Decompression",
    "category": "Portal Hypertension & Hepatobiliary",
    "domain": "portal_htn",
    "modality": "XA",
    "targetVessels": [
      "Left Gastric Vein",
      "Gastrorenal Shunt",
      "Splenic Vein",
      "Portal Vein"
    ],
    "defaultPanelCostINR": 65000,
    "requiredLabs": [
      "CBC (Hb, Platelets)",
      "PT / INR",
      "Liver Function Tests",
      "Serum Creatinine",
      "Emergency UGIE"
    ],
    "clinicalCriteria": "Active refractory gastric/esophageal variceal hemorrhage uncontrolled by pharmacological therapy and endoscopic band ligation.",
    "preOpChecklist": [
      {
        "id": "vbrto_airway",
        "label": "Airway secured with endotracheal intubation in ICU",
        "required": true
      },
      {
        "id": "vbrto_resusc",
        "label": "Massive transfusion protocol initiated with PRBCs and FFP",
        "required": true
      },
      {
        "id": "vbrto_shunt",
        "label": "Contrast-enhanced cross-sectional imaging reviewed for gastrorenal collateral",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Vascular Access",
        "desc": "10F 45cm Ansel/Flexor guiding sheath"
      },
      {
        "item": "Occlusion Balloon",
        "desc": "Coda 9F/10F 32mm balloon catheter for shunt occlusion"
      },
      {
        "item": "Sclerosant Delivery",
        "desc": "3% Sodium Tetradecyl Sulfate (STS) foam / Lipiodol emulsion"
      },
      {
        "item": "TIPS Endoprosthesis",
        "desc": "Gore Viatorr 10mm dia covered stent-graft"
      }
    ]
  },
  {
    "key": "microwave_ablation_lung",
    "title": "Percutaneous Microwave Ablation (MWA) for Primary / Oligometastatic Lung Neoplasm",
    "category": "Interventional Oncology",
    "domain": "oncology",
    "modality": "CT",
    "targetVessels": [
      "Pulmonary Vasculature Avoidance Zone",
      "Bronchial Margins"
    ],
    "defaultPanelCostINR": 52000,
    "requiredLabs": [
      "Chest CT with Contrast",
      "Pulmonary Function Tests (FEV1, DLCO)",
      "PT / INR",
      "CBC"
    ],
    "clinicalCriteria": "Medically inoperable early-stage NSCLC or oligometastatic pulmonary metastases (<3 cm) with preserved pulmonary reserve.",
    "preOpChecklist": [
      {
        "id": "mwa_pft",
        "label": "PFTs reviewed confirming adequate baseline respiratory reserve",
        "required": true
      },
      {
        "id": "mwa_pneumo",
        "label": "Pneumothorax kit and chest tube drainage set available at bedside",
        "required": true
      },
      {
        "id": "mwa_coag",
        "label": "Platelet count > 50,000/uL and INR < 1.5 confirmed",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "MWA Generator & Antenna",
        "desc": "NeuWave / Emprint 2.45 GHz high-frequency cooled microwave antenna"
      },
      {
        "item": "CT Navigation Grid",
        "desc": "Laser-guided CT stereotactic positioning grid"
      },
      {
        "item": "Chest Tube Set",
        "desc": "12F Seldinger chest drainage set with Heimlich valve"
      }
    ]
  },
  {
    "key": "evla_varicose_veins",
    "title": "Endovenous Laser Ablation (EVLA) & Radiofrequency for Great Saphenous Vein Insufficiency",
    "category": "Venous Access & Dialysis",
    "domain": "venous",
    "modality": "US",
    "targetVessels": [
      "Great Saphenous Vein",
      "Saphenofemoral Junction",
      "Anterior Accessory Saphenous Vein"
    ],
    "defaultPanelCostINR": 35000,
    "requiredLabs": [
      "Venous Duplex Ultrasound (Reflux Mapping)",
      "CBC",
      "Coagulation Profile"
    ],
    "clinicalCriteria": "Symptomatic CEAP C2-C6 chronic venous insufficiency with documented saphenofemoral junction reflux >0.5 seconds.",
    "preOpChecklist": [
      {
        "id": "evla_duplex",
        "label": "Venous duplex standing ultrasound mapped and vein trajectory marked on skin",
        "required": true
      },
      {
        "id": "evla_tumescent",
        "label": "Tumescent anesthesia fluid (0.1% lidocaine with epinephrine and bicarbonate) prepared",
        "required": true
      },
      {
        "id": "evla_nerve",
        "label": "Saphenous nerve proximity checked at mid-calf segment",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Laser / RFA System",
        "desc": "1470nm Radial fiber or ClosureFast RFA catheter"
      },
      {
        "item": "Ultrasound Guidance",
        "desc": "High-frequency 10-15 MHz linear ultrasound probe with sterile sleeve"
      },
      {
        "item": "Compression Garment",
        "desc": "Class II (20-30 mmHg) graduated thigh-high compression stocking"
      }
    ]
  },
  {
    "key": "subclavian_carotid_transposition_tevar",
    "title": "Complex TEVAR with Subclavian Revascularization / Chimney Stenting",
    "category": "Arterial & Aortic Interventions",
    "domain": "arterial",
    "modality": "XA",
    "targetVessels": [
      "Aortic Arch (Zone 2)",
      "Left Subclavian Artery",
      "Left Common Carotid Artery"
    ],
    "defaultPanelCostINR": 125000,
    "requiredLabs": [
      "ECG-Gated Thoracic CTA",
      "Carotid & Vertebral Doppler",
      "Blood Crossmatch (4 Units)",
      "Creatinine"
    ],
    "clinicalCriteria": "Thoracic aortic aneurysm or Type B aortic dissection requiring landing in Zone 2 with intentional subclavian artery coverage and chimney revascularization.",
    "preOpChecklist": [
      {
        "id": "tevar_vertebral",
        "label": "Dominant vertebral artery confirmed on CTA prior to subclavian manipulation",
        "required": true
      },
      {
        "id": "tevar_csf",
        "label": "Lumbar CSF drain placed for spinal cord neuroprotection if indicated",
        "required": true
      },
      {
        "id": "tevar_cutdown",
        "label": "Bilateral femoral / left brachial artery access sites prepped",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Thoracic Stent-Graft",
        "desc": "Gore TAG / Medtronic Valiant thoracic endoprosthesis"
      },
      {
        "item": "Chimney Stent",
        "desc": "Viabahn / BeGraft peripheral covered stent (8-10mm dia)"
      },
      {
        "item": "Delivery Sheaths",
        "desc": "20F-24F DrySeal hydrophilic introducer sheath + 8F brachial sheath"
      },
      {
        "item": "Guidewires",
        "desc": "0.035\" Lunderquist Extra-Stiff 260cm guidewire"
      }
    ]
  },
  {
    "key": "percutaneous_gastrojejunostomy_prgj",
    "title": "Percutaneous Radiologic Gastrojejunostomy (PRGJ) for Enteral Nutrition",
    "category": "Biopsies, Drainage & Pain",
    "domain": "biopsy",
    "modality": "FL",
    "targetVessels": [
      "Gastric Antrum",
      "Proximal Jejunum (Post-Ligament of Treitz)"
    ],
    "defaultPanelCostINR": 28000,
    "requiredLabs": [
      "CBC",
      "PT / INR",
      "Platelet Count",
      "Upper Abdomen Cross-Sectional Imaging"
    ],
    "clinicalCriteria": "Severe gastric motility disorder, gastroparesis, or recurrent aspiration risk requiring trans-gastric jejunal enteral feeding tube placement under fluoroscopic guidance.",
    "preOpChecklist": [
      {
        "id": "prgj_fasting",
        "label": "NPO for >= 8 hours confirmed",
        "required": true
      },
      {
        "id": "prgj_insufflate",
        "label": "Nasogastric tube in place for gastric air insufflation",
        "required": true
      },
      {
        "id": "prgj_colon",
        "label": "Bowel loops positioned inferiorly away from anterior gastric wall",
        "required": true
      }
    ],
    "hardwareRequisition": [
      {
        "item": "Gastropexy Kit",
        "desc": "Saf-T-Pexy T-fastener kit (3-4 suture anchors)"
      },
      {
        "item": "Guidewires & Catheters",
        "desc": "0.035\" Rosen wire + 5F Kumpe / Cobra catheter"
      },
      {
        "item": "Jejunal Feeding Tube",
        "desc": "14F-18F dual-lumen Gastrojejunostomy tube with balloon retention"
      }
    ]
  }
];
